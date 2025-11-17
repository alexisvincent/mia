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
        // model: 'google/gemini-2.5-flash-lite',
        model: 'anthropic/claude-4.5-sonnet',
        prompt,
        system: systemPrompt,
      })

      // Convert escaped ANSI codes to actual escape sequences
      // The LLM outputs \u001b as the literal string, we need to convert it to the actual ESC byte
      let formatted = result.text

      // Replace literal \u001b with actual escape character (byte 27)
      formatted = formatted.replace(/\\u001b/g, '\u001b')

      // Also handle case where LLM used \x1b notation
      formatted = formatted.replace(/\\x1b/g, '\u001b')

      // Handle case where escape character was stripped, leaving just [
      // This is a fallback - look for patterns like [0m, [32m, etc. at start of line or after other codes
      if (!formatted.includes('\u001b') && formatted.includes('[')) {
        // Replace [XXm patterns with \u001b[XXm
        formatted = formatted.replace(/\[(\d+(?:;\d+)*m)/g, '\u001b[$1')
      }

      const response = {
        formatted: formatted,
      }

      return {
        structuredContent: response,
        content: [
          {
            type: 'text',
            text: formatted,
          },
        ],
      }
    }
  )
}
