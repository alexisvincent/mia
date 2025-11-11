import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import * as table from "./table";

/**
 * Configuration for creating table management tools
 */
export interface TableConfig<T extends z.AnyZodObject> {
  /** Name for the table tools (e.g., "chats" -> "list_chats", "get_chats", etc.) */
  name: string;
  /** The zod schema for documents (without _id) */
  schema: T;
  /** Table name in Redis (will be scoped per user: {storageKey}:{userId}) */
  storageKey: string;
  /** Description for the list tool */
  listDescription: string;
  /** Description for the get tool */
  getDescription: string;
  /** Description for the update tool */
  updateDescription: string;
  /** Description for the delete tool */
  deleteDescription: string;
}

// Helper to create user-scoped table name
function getUserTableName(storageKey: string, userId: string): string {
  return `${storageKey}:${userId}`;
}

/**
 * Registers list, get, update, and delete MCP tools for a table
 *
 * Creates four MCP tools:
 * - `list_{name}`: Lists all documents in the table
 * - `get_{name}`: Gets a single document by ID
 * - `update_{name}`: Creates or updates a document
 * - `delete_{name}`: Deletes a document by ID
 *
 * @example
 * ```typescript
 * const ChatSchema = z.object({
 *   title: z.string(),
 *   lastMessage: z.string(),
 *   timestamp: z.number(),
 * });
 *
 * registerTableTools(server, redis, {
 *   name: "chats",
 *   schema: ChatSchema,
 *   storageKey: "user_chats",
 *   listDescription: "List all user chats",
 *   getDescription: "Get a specific chat by ID",
 *   updateDescription: "Create or update a chat",
 *   deleteDescription: "Delete a chat by ID"
 * });
 * ```
 */
export function registerTableTools<T extends z.AnyZodObject>(
  server: McpServer,
  config: TableConfig<T>
) {
  // Document type with _id added
  const DocumentSchema = config.schema.extend({
    _id: z.string().describe("Document ID"),
  });

  // LIST tool
  server.registerTool(
    `list_${config.name}`,
    {
      inputSchema: z.object({}).shape,
      outputSchema: z
        .object({
          items: z.array(DocumentSchema),
        })
        .shape,
      description: config.listDescription,
    },
    async ({}, { authInfo }) => {
      const userId = authInfo!.extra!.userId! as string;
      const tableName = getUserTableName(config.storageKey, userId);
      const documents = await table.list(tableName, config.schema);

      const result = { items: documents };

      return {
        structuredContent: result,
        content: [
          {
            type: "text",
            text: `Found ${documents.length} document(s):\n${JSON.stringify(documents, null, 2)}`,
          },
        ],
      };
    }
  );

  // GET tool
  server.registerTool(
    `get_${config.name}`,
    {
      inputSchema: z
        .object({
          id: z.string().describe("Document ID to retrieve"),
        })
        .shape,
      outputSchema: z
        .object({
          item: DocumentSchema.nullable(),
        })
        .shape,
      description: config.getDescription,
    },
    async ({ id }, { authInfo }) => {
      const userId = authInfo!.extra!.userId! as string;
      const tableName = getUserTableName(config.storageKey, userId);
      const document = await table.get(tableName, id, config.schema);

      const result = { item: document };

      return {
        structuredContent: result,
        content: [
          {
            type: "text",
            text: document
              ? JSON.stringify(document, null, 2)
              : `Document with ID "${id}" not found`,
          },
        ],
      };
    }
  );

  // UPDATE tool
  server.registerTool(
    `update_${config.name}`,
    {
      inputSchema: config.schema
        .extend({
          id: z.string().describe("Document ID (for update/create)"),
        })
        .shape,
      outputSchema: DocumentSchema.shape,
      description: config.updateDescription,
    },
    async (input, { authInfo }) => {
      const userId = authInfo!.extra!.userId! as string;
      const tableName = getUserTableName(config.storageKey, userId);

      // Extract id from input
      const { id, ...data } = input;

      const updated = await table.update(tableName, id as string, data, config.schema);

      return {
        structuredContent: updated,
        content: [
          {
            type: "text",
            text: `Updated document:\n${JSON.stringify(updated, null, 2)}`,
          },
        ],
      };
    }
  );

  // DELETE tool
  server.registerTool(
    `delete_${config.name}`,
    {
      inputSchema: z
        .object({
          id: z.string().describe("Document ID to delete"),
        })
        .shape,
      outputSchema: z
        .object({
          success: z.boolean().describe("Whether the deletion was successful"),
          message: z.string().describe("Status message"),
        })
        .shape,
      description: config.deleteDescription,
    },
    async ({ id }, { authInfo }) => {
      const userId = authInfo!.extra!.userId! as string;
      const tableName = getUserTableName(config.storageKey, userId);
      const deleted = await table.del(tableName, id as string);

      const result = {
        success: deleted,
        message: deleted
          ? `Successfully deleted document with ID "${id}"`
          : `Document with ID "${id}" not found`,
      };

      return {
        structuredContent: result,
        content: [
          {
            type: "text",
            text: result.message,
          },
        ],
      };
    }
  );
}
