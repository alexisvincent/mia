// import { Server } from '@modelcontextprotocol/sdk/server';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
// import { type createMcpHandler } from '@vercel/mcp-adapter'
import { clerkClient } from '@/lib/clerk'

export function setupServer(server: McpServer) {
  server.tool(
    'get-clerk-user-data',
    'Retrieves authenticated user information',
    {},
    async (_, { authInfo }) => {
      const userId = authInfo!.extra!.userId! as string
      const userData = await clerkClient.users.getUser(userId)
      return {
        content: [{ type: 'text', text: JSON.stringify(userData, null, 2) }],
      }
    },
  )
}
