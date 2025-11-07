// import { Server } from '@modelcontextprotocol/sdk/server';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
// import { type createMcpHandler } from '@vercel/mcp-adapter'
import { clerkClient } from '@/lib/clerk'
import { z } from "zod"
import { mastra } from "@/src/mastra"
import { weatherTool } from '@/src/mastra/tools/weather-tool'
// import { weatherAgent } from '@/src/mastra/agents/weather-agent'
import {latest} from "./beeper"


export function setupServer(server: McpServer) {
  server.registerTool(
    "latest_chats_special",
    {
      title: "Load latest special chats",
      description: "Load latest special chats",
      inputSchema: {},
      // outputSchema: {}
    },
    async ({}, { authInfo }) => {
      const l = await latest()
      console.log("dddd", l)
      return {
        content: [{type: 'text', text: JSON.stringify(l, null, 2)}]
      }
    }

  )

  server.registerTool(
    'get-clerk-user-data',
    {
      title: "Get Clerk User Data",
      inputSchema: {},
      description: 'Retrieves authenticated user information',
    },
    async ({ }, { authInfo }) => {
      console.log(authInfo)
      const userId = authInfo!.extra!.userId! as string
      const userData = await clerkClient.users.getUser(userId)
      return {
        content: [{ type: 'text', text: JSON.stringify(userData, null, 2) }],
      }
    },
  )
}
