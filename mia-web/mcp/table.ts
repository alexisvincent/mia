import { z } from 'zod';
import {redis as client} from "./kv"

// Helper to generate table hash key
const getTableKey = (tableName: string) =>
  `${process.env.KV_NS || 'default'}/table:${tableName}`;

/**
 * List all documents in a table
 * @param client Redis client instance
 * @param tableName Table name
 * @param schema Zod schema for document validation (excludes _id)
 * @returns Array of documents with _id added
 */
export async function list<T extends z.ZodObject<any>>(
  tableName: string,
  schema: T
): Promise<(z.infer<T> & { _id: string })[]> {
  // Get all documents from the hash
  const allData = await client.hGetAll(getTableKey(tableName));

  // Convert to array of documents with _id added
  const documents: (z.infer<T> & { _id: string })[] = [];
  for (const [id, jsonData] of Object.entries(allData)) {
    try {
      const parsed = JSON.parse(jsonData);
      const validated = schema.parse(parsed);
      documents.push({ ...validated, _id: id });
    } catch (error) {
      console.error(`Failed to parse document ${id}:`, error);
    }
  }

  return documents;
}

/**
 * Get a single document by ID
 * @param client Redis client instance
 * @param tableName Table name
 * @param id Document ID
 * @param schema Zod schema for document validation (excludes _id)
 * @returns Document with _id added, or null if not found
 */
export async function get<T extends z.ZodObject<any>>(
  tableName: string,
  id: string,
  schema: T
): Promise<(z.infer<T> & { _id: string }) | null> {
  const data = await client.hGet(getTableKey(tableName), id);

  if (!data) {
    return null;
  }

  try {
    const parsed = JSON.parse(data);
    const validated = schema.parse(parsed);
    return { ...validated, _id: id };
  } catch (error) {
    console.error(`Failed to parse document ${id}:`, error);
    return null;
  }
}

/**
 * Update or insert a document
 * @param client Redis client instance
 * @param tableName Table name
 * @param id Document ID
 * @param data Document data (excludes _id, will be added automatically)
 * @param schema Zod schema for document validation (excludes _id)
 * @returns The updated document with _id added
 */
export async function update<T extends z.ZodObject<any>>(
  tableName: string,
  id: string,
  data: z.infer<T>,
  schema: T
): Promise<z.infer<T> & { _id: string }> {
  // Validate data against schema
  const validated = schema.parse(data);

  // Store document in hash (without _id)
  await client.hSet(getTableKey(tableName), id, JSON.stringify(validated));

  return { ...validated, _id: id };
}

/**
 * Delete a document by ID
 * @param client Redis client instance
 * @param tableName Table name
 * @param id Document ID
 * @returns true if document was deleted, false if not found
 */
export async function del(
  tableName: string,
  id: string
): Promise<boolean> {
  const deleted = await client.hDel(getTableKey(tableName), id);
  return deleted > 0;
}

/**
 * Delete all documents in a table
 * @param client Redis client instance
 * @param tableName Table name
 * @returns Number of documents deleted
 */
export async function clear(
  tableName: string
): Promise<number> {
  const count = await client.hLen(getTableKey(tableName));

  if (count === 0) {
    return 0;
  }

  // Delete the entire hash
  await client.del(getTableKey(tableName));

  return count;
}

/**
 * Count documents in a table
 * @param client Redis client instance
 * @param tableName Table name
 * @returns Number of documents
 */
export async function count(
  tableName: string
): Promise<number> {
  return await client.hLen(getTableKey(tableName));
}

/**
 * Example usage:
 *
 * import * as table from './table';
 * import { z } from 'zod';
 *
 * // Schema defines document structure (without _id)
 * const UserSchema = z.object({
 *   name: z.string(),
 *   email: z.string().email(),
 *   age: z.number().optional(),
 * });
 *
 * // Create/update a user (_id is added automatically)
 * await table.update(redis, 'users', 'user-1',
 *   { name: 'Alice', email: 'alice@example.com' },
 *   UserSchema
 * );
 *
 * // Get a user (returns document with _id added)
 * const user = await table.get(redis, 'users', 'user-1', UserSchema);
 * // user: { name: 'Alice', email: 'alice@example.com', _id: 'user-1' }
 *
 * // List all users (each has _id added)
 * const allUsers = await table.list(redis, 'users', UserSchema);
 * // allUsers: [{ name: 'Alice', email: '...', _id: 'user-1' }, ...]
 *
 * // Delete a user
 * await table.del(redis, 'users', 'user-1');
 *
 * // Count users
 * const userCount = await table.count(redis, 'users');
 */
