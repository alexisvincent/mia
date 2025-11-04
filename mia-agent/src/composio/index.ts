import { Composio } from "@composio/core";
import { MastraProvider } from "@composio/mastra";

export const composio = new Composio({
  provider: new MastraProvider(),
  apiKey: process.env.COMPOSIO_API_KEY
});
