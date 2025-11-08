import { Composio } from "@composio/core";
// import { MastraProvider } from "@composio/mastra";
import {VercelProvider} from "@composio/vercel"

export const composio = new Composio({
  // provider: new MastraProvider(),
  provider: new VercelProvider(),
  apiKey: process.env.COMPOSIO_API_KEY
});
