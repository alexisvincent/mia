import BeeperDesktop from '@beeper/desktop-api';
import searchChatTool from "@beeper/desktop-mcp/tools/chats/search-chats"
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { RequestHandlerExtra } from '@modelcontextprotocol/sdk/shared/protocol.js';
import { ServerNotification, ServerRequest } from '@modelcontextprotocol/sdk/types.js';
import { z } from "zod"

const client = new BeeperDesktop({
  accessToken: process.env.BEEPER_ACCESS_TOKEN,
  baseURL: "https://apollo.emperor-banfish.ts.net/"
});

const alexis_ids = ["asdf"]

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


  // server.registerTool(searchChatTool.tool.name, {inputSchema: searchChatTool.tool.inputSchema}, async(x, y) => {
  //
  // })

  // server.registerTool(
  //   "latest_chats_special",
  //   {
  //     title: "Load latest special chats",
  //     description: "Load latest special chats",
  //     inputSchema: latestInputSchema,
  //   },
  //   async (x, y) => {
  //     return {content: []}
  //   }
  // )
}

