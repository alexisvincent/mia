import BeeperDesktop from '@beeper/desktop-api';
import searchChatTool from "@beeper/desktop-mcp/tools/chats/search-chats"
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { RequestHandlerExtra } from '@modelcontextprotocol/sdk/shared/protocol.js';
import { ServerNotification, ServerRequest } from '@modelcontextprotocol/sdk/types.js';
import { z } from "zod"
import { getUserTableName, registerTableTools } from './mcp-table';
import { redis } from './kv';
import * as table from "./table";

// Schema for a single chat cursor document
const ChatCursorSchema = z.object({
  cursor: z.string().describe("ISO 8601 timestamp, eg: '2025-11-07T11:59:11.000Z'")
})

// Schema for a single chat preference document
const ChatPreferenceSchema = z.object({
  always_ignore: z.boolean().describe("Never process this chat as part of the collect process, always ignore"),
})

const beeper_chat_cursors_table = {
  name: "beeper_chat_cursors",
  storageKey: "beeper_chat_cursors",
  schema: ChatCursorSchema,
  listDescription: "List all chat cursors for tracking where we are in the collect process",
  getDescription: "Get a specific chat cursor by chat ID",
  updateDescription: "Create or update a chat cursor for tracking collection progress",
  deleteDescription: "Delete a chat cursor by chat ID",
}

const beeper_chat_preferences_table = {
  name: "beeper_chat_preferences",
  storageKey: "beeper_chat_preferences",
  schema: ChatPreferenceSchema,
  listDescription: "List all user preferences for beeper chats",
  getDescription: "Get preferences for a specific chat",
  updateDescription: "Create or update preferences for a beeper chat",
  deleteDescription: "Delete preferences for a specific chat",
}

const alexis_client = new BeeperDesktop({
  accessToken: process.env.BEEPER_ACCESS_TOKEN,
  baseURL: "https://apollo.emperor-banfish.ts.net/"
});

const alexis_ids = [
  //prod
  "user_3584ih9kG8pppNq1zTPbuowLF5e",
  //dev
  "user_357LSgWCR4syLP2DrGtSHBr6u31"
]

const load_unprocessed_chats = (server: McpServer) => {

  // Configuration constants for message loading
  const MESSAGE_LIMIT = 100; // Total messages to return
  const HISTORICAL_CONTEXT_COUNT = 20; // Older messages to load for context when cursor exists

  const messageSchema = z.object({
    senderID: z.string(),
    senderName: z.string().nullable(),
    attachments: z.string(),
    reactions: z.string(),
    text: z.string().nullable(),
    timestamp: z.string(),
  })

  const outputSchema = z.object({
    chat: z.object({
      id: z.string(),
      last_activity: z.string(),
      type: z.string(),
      participants: z.string(),
      title: z.string(),
      account_id: z.string(),
      unread_count: z.number(),

      unprocessed_messages: z.array(messageSchema).describe("Messages that haven't been processed yet (newer than cursor, or all if no cursor)"),
      processed_messages: z.array(messageSchema).describe("Messages that have already been processed (older than or equal to cursor, empty if no cursor)")
    }).nullable(),
  })

  server.registerTool("fetch_next_unprocessed_chat", {
    inputSchema: {},
    outputSchema: outputSchema.shape,
    description: "Fetch the next unprocessed chat with messages. If cursor exists, loads from most recent until cursor + historical context. Returns up to 100 messages total."
  }, async ({ }, { authInfo }) => {


    const userId = authInfo!.extra!.userId! as string;


    if (alexis_ids.includes(userId)) {

      const lastActivityAfter = new Date()

      lastActivityAfter.setMonth(lastActivityAfter.getMonth() - 3)

      const cursors_table_name = getUserTableName(beeper_chat_cursors_table.storageKey, userId);
      const cursors = await table.list(cursors_table_name, beeper_chat_cursors_table.schema)

      const preferences_table_name = getUserTableName(beeper_chat_preferences_table.storageKey, userId);
      const preferences = await table.list(preferences_table_name, beeper_chat_preferences_table.schema)

      const ignored = preferences
        .filter(preference => preference.always_ignore)
        .map(preference => preference._id)

      // Helper to check if a chat is unprocessed
      const isUnprocessed = (chat: any) => {
        // Skip ignored chats
        if (ignored.includes(chat.id)) return false;

        // Must have some activity
        if (!chat.lastActivity) return false;

        // Find cursor for this chat
        const cursor = cursors.find(c => c._id === chat.id);

        // If cursor exists, last activity must be more recent than cursor
        return !cursor || new Date(chat.lastActivity) > new Date(cursor.cursor);
      };

      // Keep loading chat pages until we find an unprocessed chat
      let unprocessedChat = null;
      let chatsPage = await alexis_client.chats.search({
        includeMuted: true,
        limit: 100,
        lastActivityAfter: lastActivityAfter.toISOString()
      });

      while (!unprocessedChat && chatsPage.items.length > 0) {
        unprocessedChat = chatsPage.items.find(isUnprocessed);

        if (!unprocessedChat && chatsPage.hasNextPage()) {
          chatsPage = await chatsPage.getNextPage();
        } else {
          break;
        }
      }

      if (unprocessedChat) {
        const chat = unprocessedChat

        // Find cursor for this chat
        const chatCursor = cursors.find(cursor => cursor._id === chat.id)
        const cursorTimestamp = chatCursor?.cursor;

        // Load messages with pagination
        const allMessages: any[] = [];
        let currentPage = await alexis_client.messages.list(chat.id, {});
        allMessages.push(...currentPage.items);

        let crossedCursorBoundary = false;

        // Determine stop condition based on cursor existence
        const shouldContinue = () => {
          if (!currentPage.hasNextPage()) return false;

          if (cursorTimestamp) {
            // Check if we've crossed the cursor boundary
            const oldestLoadedTimestamp = allMessages[allMessages.length - 1]?.timestamp;
            if (oldestLoadedTimestamp && oldestLoadedTimestamp <= cursorTimestamp) {
              if (!crossedCursorBoundary) {
                crossedCursorBoundary = true;
                // Continue loading for HISTORICAL_CONTEXT_COUNT more messages
                return allMessages.length < MESSAGE_LIMIT;
              }
              // We've loaded historical context, check if we have enough
              const historicalMessageCount = allMessages.filter(msg => msg.timestamp <= cursorTimestamp).length;
              return historicalMessageCount < HISTORICAL_CONTEXT_COUNT && allMessages.length < MESSAGE_LIMIT;
            }
            return true; // Haven't crossed boundary yet
          } else {
            // If no cursor, continue until we have MESSAGE_LIMIT messages
            return allMessages.length < MESSAGE_LIMIT;
          }
        };

        // Keep loading pages based on stop condition
        while (shouldContinue()) {
          currentPage = await currentPage.getNextPage();
          allMessages.push(...currentPage.items);
        }

        // Trim to MESSAGE_LIMIT
        const messages = allMessages.slice(0, MESSAGE_LIMIT);

        // Map message to output format
        const mapMessage = (message: any) => ({
          senderID: message.senderID,
          senderName: message.senderName || null,
          attachments: JSON.stringify(message.attachments || []),
          reactions: JSON.stringify(message.reactions || []),
          text: message.text || null,
          timestamp: message.timestamp,
        });

        // Split messages into unprocessed and processed based on cursor
        const unprocessed_messages = cursorTimestamp
          ? messages.filter(msg => msg.timestamp > cursorTimestamp).map(mapMessage)
          : messages.map(mapMessage);

        const processed_messages = cursorTimestamp
          ? messages.filter(msg => msg.timestamp <= cursorTimestamp).map(mapMessage)
          : [];

        // Get the most recent message timestamp from the messages we're returning
        const mostRecentTimestamp = messages[0]?.timestamp || chat.lastActivity!;

        const res: z.infer<typeof outputSchema> = {
          chat: {
            id: chat.id,
            last_activity: mostRecentTimestamp,
            type: chat.type,
            participants: JSON.stringify(chat.participants),
            title: chat.title,
            account_id: chat.accountID,
            unread_count: chat.unreadCount,

            unprocessed_messages: unprocessed_messages,
            processed_messages: processed_messages
          }
        }

        return {
          structuredContent: res,
          content: [
            {
              type: "text",
              text: `Found chat`,
            },
          ],
        };

      }

    }

    return {
      structuredContent: { chat: null },
      content: [
        {
          type: "text",
          text: `No chat found`,
        },
      ],
    };
  })
}


export function register_beeper_tools(server: McpServer) {

  load_unprocessed_chats(server)

  registerTableTools(server, beeper_chat_cursors_table)

  registerTableTools(server, beeper_chat_preferences_table)
}
