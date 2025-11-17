import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import { generateText } from 'ai'

/**
 * Register LLM proxy tools that expose Claude 4.5 Sonnet via Vercel AI SDK Gateway
 */
export function registerLLMTools(server: McpServer) {
  server.registerTool(
    'llm',
    {
      title: 'LLM Query',
      description: 'Query Claude 4.5 Sonnet with any prompt and get a response. This is a direct pass-through to the LLM via Vercel AI SDK Gateway.',
      inputSchema: z.object({
        prompt: z.string().describe('The prompt to send to the LLM'),
        system: z.string().optional().describe('Optional system prompt to set context'),
      }).shape,
      outputSchema: z.object({
        response: z.string(),
        usage: z.object({
          promptTokens: z.number(),
          completionTokens: z.number(),
          totalTokens: z.number(),
        }),
      }).shape,
    },
    async ({ prompt, system }, { authInfo }) => {
      const userId = authInfo?.extra?.userId as string | undefined

      if (!userId) {
        throw new Error('User not authenticated')
      }

      // Call Claude 4.5 Sonnet via Vercel AI SDK Gateway
      const result = await generateText({
        model: 'anthropic/claude-sonnet-4-5-20250929',
        prompt,
        system,
      })

      const inputTokens = result.usage.inputTokens ?? 0
      const outputTokens = result.usage.outputTokens ?? 0
      const totalTokens = inputTokens + outputTokens

      const response = {
        response: result.text,
        usage: {
          promptTokens: inputTokens,
          completionTokens: outputTokens,
          totalTokens: totalTokens,
        },
      }

      return {
        structuredContent: response,
        content: [
          {
            type: 'text',
            text: `**LLM Response:**\n\n${result.text}\n\n---\n**Usage:** ${inputTokens} prompt + ${outputTokens} completion = ${totalTokens} total tokens`,
          },
        ],
      }
    }
  )
}
