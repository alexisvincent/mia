
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
// import { LibSQLStore } from '@mastra/libsql';
import { weatherWorkflow } from './workflows/weather-workflow';
import { weatherAgent } from './agents/weather-agent';

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  // storage: new LibSQLStore({
  //   // stores observability, scores, ... into memory storage, if it needs to persist, change to file:../mastra.db
  //   url: ":memory:",
  // }),
  // mcpServers: {mcp_server},
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
  observability: {
    // Enables DefaultExporter and CloudExporter for AI tracing
    default: { enabled: true },
  },
  // server: {
  //   experimental_auth: new MastraAuthClerk({
  //     publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
  //     secretKey: process.env.CLERK_SECRET_KEY,
  //     jwksUri: process.env.CLERK_JWKS_URI,
  //   }),
  //   apiRoutes: [
  //     // nangoWebhookRoute,
  //     composioWebhookRoute,
  //   ],
  // },
});
