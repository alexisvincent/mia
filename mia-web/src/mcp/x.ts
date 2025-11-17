import { composio } from "@/composio"
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { generateText, Experimental_Agent as Agent, stepCountIs, tool } from 'ai';
import { ToolkitsListParamsSchema } from "@composio/core"
import z from "zod";


function linkConnectedAccounts(server: McpServer) {
  server.registerTool("link_connected_accounts",
    {
      title: "Link Connected Accounts",
      inputSchema: {},
      description: 'Link Connected Accounts',
    },
    async ({ }, { authInfo }) => {
      const userId = authInfo!.extra!.userId! as string

      const allAuthConfigs = await composio.authConfigs.list()
      const usersConnectedAccountsConfigs = await composio.connectedAccounts.list({ userIds: [userId] })

      const authAgent = new Agent({
        model: "anthropic/claude-sonnet-4",
        tools: {
          getAuthLink: tool({
            name: "generate_auth_url",
            description: 'Generate an auth url for a given authConfig',
            inputSchema: z.object({
              authConfigId: z.string(),
            }),
            execute: async ({ authConfigId }) => {
              const req = await composio.connectedAccounts.link(userId, authConfigId)
              // Execute code and return result
              return { link: req.redirectUrl };
            }
          })
        },
        stopWhen: stepCountIs(20),
      })

      const res = await authAgent.generate({
        messages: [{
          role: "system", content: `
Your job is to provide back to the user links to allow them to connect their accounts. You should only do this
when they dont already have an active connected account.

use the 'generate_auth_url' tool for each of the auth configs the user is not currently connected to.

once you have finished, you should produce a neatly formated list of the urls, with a clear label for which toolkit slug it uses
`
        }, {
          role: "user", content: `
Here is a list of all the authConfigs: ${JSON.stringify(allAuthConfigs, null, 2)}

And here are the users currently connected ones: ${JSON.stringify(usersConnectedAccountsConfigs, null, 2)}
`}],
      })

      // console.log(res)

      return {
        content: [{ type: "text", text: res.text }]
      }
    }
  )
}


export function registerXTools(server: McpServer) {
  linkConnectedAccounts(server)

  server.registerTool("sdf",
    {
      title: "SDF",
      inputSchema: {},
      description: 'Runs the sdf tool',
    },
    async ({ }, { authInfo }) => {
      const userId = authInfo!.extra!.userId! as string

      const tools = await composio.tools.get(userId, {
        toolkits: ['gmail'],
        limit: 10
      })

      const emailLoadingAgent = new Agent({
        model: "openai/gpt-5-nano",
        tools: tools,
        stopWhen: stepCountIs(20),
      })

      console.log("here")
      const res = await emailLoadingAgent.generate({
        messages: [{
          role: "user",
          content: "Load my last 5 emails"
        }],
      })
      console.log("here2")

      console.log(JSON.stringify(res, null, 2))

      return {
        content: [{ type: "text", text: res.text }]
      }
    }
  )
}
