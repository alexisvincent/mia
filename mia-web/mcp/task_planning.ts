import { composio } from "@/src/composio"
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { generateText, Experimental_Agent as Agent, stepCountIs, tool } from 'ai';
import { ToolkitsListParamsSchema } from "@composio/core"
import z from "zod";

import { set, get } from "./kv"

const template = `

Top Goal for the Week:
Top Goal for the Week (linear id):

Top Goal for the Day:
Top Goal for the Day (linear id):

Last updated:
`

export function registerTaskPlanningTools(server: McpServer) {
  server.registerTool("get_task_planning_context",
    {
      inputSchema: {},
      description: "Get user's top goal for the week and day (with Linear IDs). ALWAYS call this FIRST when user asks what to work on or about their priorities. Returns the most important context for task recommendations."
    },
    async ({ }, { authInfo }) => {
      const userId = authInfo!.extra!.userId! as string

      const context = await get(userId, "task_planning_context")

      return {
        content: [{ type: "text", text: context || template }]
      }
    }
  )

  server.registerTool("update_task_planning_context",
    {
      inputSchema: {
        week_top_goal_text: z.string().optional(),
        week_top_goal_linear_id: z.string().optional(),
        day_top_goal_text: z.string().optional(),
        day_top_goal_linear_id: z.string().optional(),
        additional_context: z.string().optional()
      },
      description: 'Call this cool to update context about linear task planning, call only when explicitly requested by the user',
    },
    async (userInput, { authInfo }) => {
      const userId = authInfo!.extra!.userId! as string

      const current_context = await get(userId, "task_planning_context")

      const response = await generateText({
        model: "openai/gpt-5-nano",
        messages: [
          {
            role: "system",
            content: `
Your job is to generate a document based on the template provided below and the user message (containing the data they want to set).
Treat the operation as a merge with the previous, although setting a next text goal should replace the linear id if its not explicitly provided.

The template for how the content should look is below:
---
${template}
---

The previous document had the following content:
---
${current_context}
---

respond ONLY WITH THE NEW CONTENT!
`
          },
          {
            role: "user",
            content: JSON.stringify({...userInput, timestamp: Date.now() }, null, 2)
          }],
      })

      console.log("here")

      const new_context = response.text

      const context = await set(userId, "task_planning_context", new_context)

      return {
        content: [{ type: "text", text: `Updated context:\n${new_context}` }]
      }
    }
  )
}
