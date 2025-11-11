import BeeperDesktop from '@beeper/desktop-api';
import searchChatTool from "@beeper/desktop-mcp/tools/chats/search-chats"
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { RequestHandlerExtra } from '@modelcontextprotocol/sdk/shared/protocol.js';
import { ServerNotification, ServerRequest } from '@modelcontextprotocol/sdk/types.js';
import { z } from "zod"
import { registerTableTools } from './mcp-table';
import { redis } from './kv';

const client = new BeeperDesktop({
  accessToken: process.env.BEEPER_ACCESS_TOKEN,
  baseURL: "https://apollo.emperor-banfish.ts.net/"
});

// Schema for a single chat cursor document
const ChatCursorSchema = z.object({
  cursor: z.string().describe("ISO 8601 timestamp, eg: '2025-11-07T11:59:11.000Z'")
})

// Schema for a single chat preference document
const ChatPreferenceSchema = z.object({
  always_ignore: z.boolean().describe("Never process this chat as part of the collect process, always ignore"),
})


// function with_client(handler) {
//   return async (input, { authInfo }: RequestHandlerExtra<ServerRequest, ServerNotification>) => {
//     const userId = authInfo!.extra!.userId! as string
//     if (alexis_ids.includes(userId)) {
//       return handler(client, input, authInfo)
//     } else {
//       return
//     }
//   }
// }
//
// function beeper_compat_tool(handler) {
//   return with_client(() => {
//     return handler()
//   })
// }
//
// const latestInputSchema = {}
//
// const latest = async ({ }) => {
//   const page = await client.chats.search({ includeMuted: true, limit: 3, type: 'single', });
//   const l = page.items[0];
//
//   console.log("dddd", l)
//   return {
//     content: [{ type: 'text', text: JSON.stringify(l, null, 2) }]
//   }
// }

export function register_beeper_tools(server: McpServer) {
  registerTableTools(server, {
    name: "beeper_chat_cursors",
    storageKey: "beeper_chat_cursors",
    schema: ChatCursorSchema,
    listDescription: "List all chat cursors for tracking where we are in the collect process",
    getDescription: "Get a specific chat cursor by chat ID",
    updateDescription: "Create or update a chat cursor for tracking collection progress",
    deleteDescription: "Delete a chat cursor by chat ID",
  })

  registerTableTools(server, {
    name: "beeper_chat_preferences",
    storageKey: "beeper_chat_preferences",
    schema: ChatPreferenceSchema,
    listDescription: "List all user preferences for beeper chats",
    getDescription: "Get preferences for a specific chat",
    updateDescription: "Create or update preferences for a beeper chat",
    deleteDescription: "Delete preferences for a specific chat",
  })
}
