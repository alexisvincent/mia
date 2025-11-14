import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import { generateText } from 'ai'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'

/**
 * Load and compose system prompt from all component documentation files
 */
function loadSystemPrompt(): string {
  // Use process.cwd() instead of __dirname for Next.js compatibility
  const componentsDir = join(process.cwd(), 'mcp', 'ansi-components')
  const sections: string[] = []

  // Load root overview and principles
  const rootFiles = ['00-overview.md', '01-design-principles.md']
  for (const file of rootFiles) {
    const content = readFileSync(join(componentsDir, file), 'utf-8')
    sections.push(content)
  }

  // Load all subdirectory files (primitives, components, composites)
  const subdirs = ['primitives', 'components', 'composites']
  for (const subdir of subdirs) {
    const subdirPath = join(componentsDir, subdir)
    const files = readdirSync(subdirPath).filter(f => f.endsWith('.md')).sort()

    sections.push(`\n# ${subdir.toUpperCase()}\n`)

    for (const file of files) {
      const content = readFileSync(join(subdirPath, file), 'utf-8')
      sections.push(content)
    }
  }

  return sections.join('\n\n---\n\n')
}

/**
 * Register ANSI formatter MCP tool
 */
export function registerANSIFormatterTools(server: McpServer) {
  server.registerTool(
    'format_ansi',
    {
      title: 'Format ANSI Prompt',
      description: 'Convert XML markup to ANSI-formatted terminal output for AskUserQuestion prompts. Uses component library to render boxes, badges, Linear issues, chat messages, and more.',
      inputSchema: z.object({
        xml: z.string().describe('XML markup describing the desired formatted output using the component library tags'),
        context: z.string().optional().describe('Additional context for the formatter (e.g., specific data values, special instructions)'),
      }).shape,
      outputSchema: z.object({
        formatted: z.string().describe('The ANSI-formatted output string'),
      }).shape,
    },
    async ({ xml, context }, { authInfo }) => {
      const userId = authInfo?.extra?.userId as string | undefined

      if (!userId) {
        throw new Error('User not authenticated')
      }

      // Load system prompt on each call (allows hot-reloading during development)
      const systemPrompt = loadSystemPrompt()

      // Build prompt for LLM
      const prompt = context
        ? `Additional Context:\n${context}\n\n---\n\nXML to format:\n\`\`\`xml\n${xml}\n\`\`\``
        : `XML to format:\n\`\`\`xml\n${xml}\n\`\`\``

      // Call Gemini 2.5 Flash via Vercel AI SDK Gateway
      const result = await generateText({
        model: 'google/gemini-2.5-flash',
        prompt,
        system: systemPrompt,
        maxTokens: 4096,
      })

      const response = {
        formatted: result.text,
      }

      return {
        structuredContent: response,
        content: [
          {
            type: 'text',
            text: result.text,
          },
        ],
      }
    }
  )
}
