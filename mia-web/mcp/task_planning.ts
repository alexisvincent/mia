import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { registerStateTools } from "./state-utils";

const GoalsData = z.object({
  top_goal_day: z.string().default("").describe("The most important goal for the day"),
  top_goal_day_linear: z.string().default("").describe("Linear ID for the day's top goal"),
  top_goal_week: z.string().default("").describe("The most important goal for the week"),
  top_goal_week_linear: z.string().default("").describe("Linear ID for the week's top goal"),
});

export function registerTaskPlanningTools(server: McpServer) {
  registerStateTools(server, {
    name: "task_planning_context",
    dataSchema: GoalsData,
    storageKey: "task_planning_context",
    getDescription:
      "Get user's top goal for the week and day (with Linear IDs). ALWAYS call this FIRST when user asks what to work on or about their priorities. Returns the most important context for task recommendations.",
    updateDescription:
      "Update user's task planning context (partial update supported). Call only when explicitly requested by the user.",
    defaultData: {
      top_goal_day: "",
      top_goal_day_linear: "",
      top_goal_week: "",
      top_goal_week_linear: "",
    },
  });
}
