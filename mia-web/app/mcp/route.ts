import { verifyClerkToken } from '@clerk/mcp-tools/next'
import { clerkClient } from '@/lib/clerk'
import { createMcpHandler, withMcpAuth } from '@vercel/mcp-adapter'
import { auth } from '@clerk/nextjs/server'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { setupServer } from './server'


// Define MCP tools
const handler = createMcpHandler((server: McpServer) => {
  setupServer(server)
}, {})

const authHandler = withMcpAuth(
  handler,
  async (_, token) => {
    const clerkAuth = await auth({ acceptsToken: 'oauth_token' })
    return verifyClerkToken(clerkAuth, token)
  },
  {
    required: true,
    resourceMetadataPath: '/.well-known/oauth-protected-resource/mcp',
  },
)

// Only export POST for Streamable HTTP
export { authHandler as POST }
