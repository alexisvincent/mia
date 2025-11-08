import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { set, get } from "./kv";

/**
 * Generic metadata wrapper for any data schema
 * Wraps data in { data: T, last_updated: string, notes: string }
 */
export const WithMetadata = <T extends z.ZodType<any>>(dataSchema: T) =>
  z.object({
    data: dataSchema,
    last_updated: z.string().describe("Last updated timestamp (ISO 8601)"),
  });

// Derive the type from the actual schema so TypeScript can prove they match
export type MetadataWrapper<T extends z.ZodType<any>> = z.infer<ReturnType<typeof WithMetadata<T>>>;

/**
 * Configuration for creating state management tools
 */
export interface StateToolConfig<T extends z.ZodObject<any>> {
  /** Name prefix for the tools (e.g., "goals" -> "get_goals", "update_goals") */
  name: string;
  /** The zod schema for the core data structure */
  dataSchema: T;
  /** Redis key to store the data under */
  storageKey: string;
  /** Description for the get tool */
  getDescription: string;
  /** Description for the update tool */
  updateDescription: string;
  /** Default data to use if none exists */
  defaultData: z.infer<T>;
}

/**
 * Generic get function - retrieves and validates state with metadata wrapper
 */
export async function getState<T extends z.ZodObject<any>>(
  userId: string,
  config: StateToolConfig<T>
): Promise<MetadataWrapper<T>> {
  const WrappedSchema = WithMetadata(config.dataSchema);
  const defaultWrapper: MetadataWrapper<T> = {
    data: config.defaultData,
    last_updated: new Date().toISOString(),
  };

  const stored = await get(userId, config.storageKey);

  try {
    return WrappedSchema.parse(JSON.parse(stored || ""));
  } catch {
    // If parsing fails or no data exists, save and return default
    await set(userId, config.storageKey, JSON.stringify(defaultWrapper));
    return defaultWrapper;
  }
}

/**
 * Generic update function - performs partial merge and updates timestamp
 */
export async function updateState<T extends z.ZodObject<any>>(
  userId: string,
  config: StateToolConfig<T>,
  partialUpdate: Partial<z.infer<T>>
): Promise<MetadataWrapper<T>> {
  const WrappedSchema = WithMetadata(config.dataSchema);

  // Get existing state
  const existing = await getState(userId, config);

  // Merge: new values overwrite existing, undefined values keep existing
  const merged: MetadataWrapper<T> = {
    data: { ...existing.data, ...partialUpdate },
    last_updated: new Date().toISOString(),
  };

  // Validate and save
  const validated = WrappedSchema.parse(merged);
  await set(userId, config.storageKey, JSON.stringify(validated));

  return validated;
}

/**
 * Registers both get and update MCP tools for a state management schema
 *
 * Creates two MCP tools:
 * - `get_{name}`: Retrieves current state
 * - `update_{name}`: Performs partial update of state
 *
 * @example
 * ```typescript
 * const GoalsData = z.object({
 *   top_goal_day: z.string(),
 *   top_goal_week: z.string(),
 * })
 *
 * registerStateTools(server, {
 *   name: "goals",
 *   dataSchema: GoalsData,
 *   storageKey: "user_goals",
 *   getDescription: "Get user's current goals",
 *   updateDescription: "Update user's goals (partial)",
 *   defaultData: { top_goal_day: "", top_goal_week: "" }
 * })
 * ```
 */
export function registerStateTools<T extends z.ZodObject<any>>(
  server: McpServer,
  config: StateToolConfig<T>
) {
  const WrappedSchema = WithMetadata(config.dataSchema);

  // GET tool
  server.registerTool(
    `get_${config.name}`,
    {
      inputSchema: z.object({}).shape,
      outputSchema: WrappedSchema.shape,
      description: config.getDescription,
    },
    async ({}, { authInfo }) => {
      const userId = authInfo!.extra!.userId! as string;
      const wrapper = await getState(userId, config);

      return {
        structuredContent: wrapper,
        content: [{ type: "text", text: JSON.stringify(wrapper, null, 2) }],
      };
    }
  );

  // UPDATE tool
  server.registerTool(
    `update_${config.name}`,
    {
      inputSchema: config.dataSchema.partial().shape,
      description: config.updateDescription,
    },
    async (userInput, { authInfo }) => {
      const userId = authInfo!.extra!.userId! as string;
      const merged = await updateState(userId, config, userInput);

      return {
        structuredContent: merged,
        content: [
          {
            type: "text",
            text: `Updated ${config.name}:\n${JSON.stringify(merged, null, 2)}`,
          },
        ],
      };
    }
  );
}
