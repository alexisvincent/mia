import BeeperDesktop from '@beeper/desktop-api';
import searchChatTool from "@beeper/desktop-mcp/tools/chats/search-chats"
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { RequestHandlerExtra } from '@modelcontextprotocol/sdk/shared/protocol.js';
import { ServerNotification, ServerRequest } from '@modelcontextprotocol/sdk/types.js';
import { z } from "zod"
import { registerStateTools } from './state-utils';

const client = new BeeperDesktop({
  accessToken: process.env.BEEPER_ACCESS_TOKEN,
  baseURL: "https://apollo.emperor-banfish.ts.net/"
});

const alexis_ids = ["asdf"]

const ChatCursors = z.object({
  cursors: z.array(z.object({
    chat_id: z.string(),
    cursor: z.string()
  }))
})

const ChatPreferences = z.object({
  preferences: z.array(z.object({
    chat_id: z.string(),
    always_ignore: z.boolean(),
  }))
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
  registerStateTools(server, {
    name: "beeper_chat_cursors",
    storageKey: "beeper_chat_cursors",
    getDescription: "Get cursors for beeper chats, tracking where we are in the collect process",
    updateDescription: "Update cursors for beeper chat, tracking where we are in the collect process",
    defaultData: {cursors: []},
    dataSchema: ChatCursors,
  })

  registerStateTools(server, {
    name: "beeper_chat_preferences",
    storageKey: "beeper_chat_preferences",
    getDescription: "Get user preferences for beeper chats",
    updateDescription: "Update user preferences for beeper chat",
    defaultData: {preferences: []},
    dataSchema: ChatPreferences,
  })

}
