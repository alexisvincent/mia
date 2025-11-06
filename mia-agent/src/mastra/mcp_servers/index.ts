import { MCPServer } from "@mastra/mcp";
import { weatherWorkflow } from "../workflows/weather-workflow";

import {weatherTool} from "../tools/weather-tool"
import {weatherAgent} from "../agents/weather-agent"

export const mcp_server = new MCPServer({
  name: "My Custom Server",
  version: "1.0.0",
  tools: { weatherTool },
  agents: { weatherAgent }, // this agent will become tool "ask_myAgent"
  workflows: {
    weatherWorkflow, // this workflow will become tool "run_weatherWorkflow"
  }
});
