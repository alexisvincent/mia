// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLICKHOUSE's CLICKHOUSE_EXECUTE_QUERY tool input.
 */
type CLICKHOUSE_EXECUTE_QUERY_INPUT = {
  /**
   * Database
   * @description Database to use for the query (overrides connection default)
   * @default null
   */
  database: string | null;
  /**
   * Format
   * @description Output format for the query results. Common formats: JSONEachRow, JSON, CSV, TSV
   * @default JSONEachRow
   */
  format: string;
  /**
   * Max Execution Time
   * @description Maximum query execution time in seconds
   * @default null
   */
  max_execution_time: number | null;
  /**
   * Query
   * @description The SQL query to execute in ClickHouse
   */
  query?: string;
  /**
   * Settings
   * @description Additional ClickHouse settings for the query execution
   * @default null
   */
  settings: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of CLICKHOUSE's CLICKHOUSE_EXECUTE_QUERY tool output.
 */
type CLICKHOUSE_EXECUTE_QUERY_OUTPUT = {
  /**
   * Data
   * @description Query results as a list of dictionaries (for JSONEachRow format)
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Rows
   * @description Number of rows returned
   */
  rows?: number;
  /**
   * Statistics
   * @description Query execution statistics if available
   * @default null
   */
  statistics: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKHOUSE's CLICKHOUSE_GET_DATABASE_SCHEMA tool input.
 */
type CLICKHOUSE_GET_DATABASE_SCHEMA_INPUT = {
  /**
   * Database
   * @description Database name (overrides connection default). If not specified, uses connection default or 'default'
   * @default null
   */
  database: string | null;
  /**
   * Include Table Schemas
   * @description Whether to include full column schemas for all tables. Set to false for quick overview, true for complete schema details.
   * @default false
   */
  include_table_schemas: boolean;
};

/**
 * Type of CLICKHOUSE's CLICKHOUSE_GET_DATABASE_SCHEMA tool output.
 */
type CLICKHOUSE_GET_DATABASE_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Database
       * @description Database name
       */
      database: string;
      /**
       * Tables
       * @description List of tables in the database
       */
      tables: {
          /**
           * Columns
           * @description List of columns (only if include_table_schemas is true)
           * @default null
           */
          columns: {
              /**
               * Is In Primary Key
               * @description Whether column is part of primary key
               */
              is_in_primary_key: boolean;
              /**
               * Name
               * @description Column name
               */
              name: string;
              /**
               * Type
               * @description Column data type
               */
              type: string;
          }[] | null;
          /**
           * Engine
           * @description Table engine
           */
          engine: string;
          /**
           * Name
           * @description Table name
           */
          name: string;
          /**
           * Total Bytes
           * @description Approximate table size in bytes
           * @default null
           */
          total_bytes: number | null;
          /**
           * Total Rows
           * @description Approximate row count
           * @default null
           */
          total_rows: number | null;
      }[];
      /**
       * Total Bytes
       * @description Total size in bytes across all tables (approximate)
       * @default null
       */
      total_bytes: number | null;
      /**
       * Total Rows
       * @description Total rows across all tables (approximate)
       * @default null
       */
      total_rows: number | null;
      /**
       * Total Tables
       * @description Total number of tables
       */
      total_tables: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKHOUSE's CLICKHOUSE_GET_TABLE_SCHEMA tool input.
 */
type CLICKHOUSE_GET_TABLE_SCHEMA_INPUT = {
  /**
   * Database
   * @description Database name (overrides connection default)
   * @default null
   */
  database: string | null;
  /**
   * Include Sample Data
   * @description Whether to include sample rows from the table
   * @default false
   */
  include_sample_data: boolean;
  /**
   * Sample Rows
   * @description Number of sample rows to return (only if include_sample_data is true)
   * @default 5
   */
  sample_rows: number;
  /**
   * Table Name
   * @description Name of the table to describe
   */
  table_name?: string;
};

/**
 * Type of CLICKHOUSE's CLICKHOUSE_GET_TABLE_SCHEMA tool output.
 */
type CLICKHOUSE_GET_TABLE_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Columns
       * @description List of columns with their metadata
       */
      columns: {
          /**
           * Comment
           * @description Column comment/description
           * @default null
           */
          comment: string | null;
          /**
           * Compression Codec
           * @description Compression codec if specified
           * @default null
           */
          compression_codec: string | null;
          /**
           * Default Expression
           * @description Default value expression
           * @default null
           */
          default_expression: string | null;
          /**
           * Default Kind
           * @description Type of default value (DEFAULT, MATERIALIZED, ALIAS, etc.)
           */
          default_kind: string;
          /**
           * Is In Primary Key
           * @description Whether column is part of primary key
           */
          is_in_primary_key: boolean;
          /**
           * Is In Sorting Key
           * @description Whether column is part of sorting key
           */
          is_in_sorting_key: boolean;
          /**
           * Name
           * @description Column name
           */
          name: string;
          /**
           * Type
           * @description Column data type (e.g., String, UInt64, DateTime)
           */
          type: string;
      }[];
      /**
       * Database
       * @description Database name
       */
      database: string;
      /**
       * Engine
       * @description Table engine
       */
      engine: string;
      /**
       * Partition Key
       * @description Partition key expression
       * @default null
       */
      partition_key: string | null;
      /**
       * Primary Key
       * @description Primary key expression
       * @default null
       */
      primary_key: string | null;
      /**
       * Sample Data
       * @description Sample rows if requested
       * @default null
       */
      sample_data: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Sorting Key
       * @description Sorting key expression
       * @default null
       */
      sorting_key: string | null;
      /**
       * Table
       * @description Table name
       */
      table: string;
      /**
       * Total Bytes
       * @description Approximate table size in bytes
       * @default null
       */
      total_bytes: number | null;
      /**
       * Total Rows
       * @description Approximate row count
       * @default null
       */
      total_rows: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKHOUSE's CLICKHOUSE_LIST_DATABASES tool input.
 */
type CLICKHOUSE_LIST_DATABASES_INPUT = {
  /**
   * Include Tables
   * @description Whether to include list of table names for each database
   * @default false
   */
  include_tables: boolean;
  /**
   * Pattern
   * @description Optional LIKE pattern to filter databases (e.g., 'prod_%' or '%test')
   * @default null
   */
  pattern: string | null;
};

/**
 * Type of CLICKHOUSE's CLICKHOUSE_LIST_DATABASES tool output.
 */
type CLICKHOUSE_LIST_DATABASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Databases
       * @description List of databases in the ClickHouse instance
       */
      databases: {
          /**
           * Data Path
           * @description Path to database data on disk
           * @default null
           */
          data_path: string | null;
          /**
           * Engine
           * @description Database engine (e.g., Atomic, MySQL, PostgreSQL)
           */
          engine: string;
          /**
           * Metadata Path
           * @description Path to database metadata
           * @default null
           */
          metadata_path: string | null;
          /**
           * Name
           * @description Database name
           */
          name: string;
          /**
           * Tables
           * @description List of table names (if requested)
           * @default null
           */
          tables: string[] | null;
          /**
           * Uuid
           * @description Database UUID
           * @default null
           */
          uuid: string | null;
      }[];
      /**
       * Total
       * @description Total number of databases found
       */
      total: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLICKHOUSE's CLICKHOUSE_LIST_TABLES tool input.
 */
type CLICKHOUSE_LIST_TABLES_INPUT = {
  /**
   * Database
   * @description Database name to list tables from. If not provided, lists tables from all databases
   * @default null
   */
  database: string | null;
  /**
   * Include Columns
   * @description Whether to include column names for each table
   * @default false
   */
  include_columns: boolean;
  /**
   * Include Primary Key
   * @description Whether to include primary key information for each table
   * @default false
   */
  include_primary_key: boolean;
  /**
   * Include Views
   * @description Whether to include views in the results
   * @default true
   */
  include_views: boolean;
  /**
   * Pattern
   * @description Optional LIKE pattern to filter table names (e.g., 'user_%' or '%_log')
   * @default null
   */
  pattern: string | null;
};

/**
 * Type of CLICKHOUSE's CLICKHOUSE_LIST_TABLES tool output.
 */
type CLICKHOUSE_LIST_TABLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tables
       * @description List of tables in ClickHouse
       */
      tables: {
          /**
           * Columns
           * @description List of column names (if requested)
           * @default null
           */
          columns: string[] | null;
          /**
           * Data Paths
           * @description Paths to table data
           * @default null
           */
          data_paths: string[] | null;
          /**
           * Database
           * @description Database name
           */
          database: string;
          /**
           * Engine
           * @description Table engine (e.g., MergeTree, Log, View)
           */
          engine: string;
          /**
           * Is Temporary
           * @description Whether the table is temporary
           */
          is_temporary: boolean;
          /**
           * Metadata Path
           * @description Path to table metadata
           * @default null
           */
          metadata_path: string | null;
          /**
           * Name
           * @description Table or view name
           */
          name: string;
          /**
           * Primary Key
           * @description Primary key expression (if requested)
           * @default null
           */
          primary_key: string | null;
          /**
           * Total Bytes
           * @description Total size in bytes
           * @default null
           */
          total_bytes: number | null;
          /**
           * Total Rows
           * @description Total number of rows (approximate)
           * @default null
           */
          total_rows: number | null;
      }[];
      /**
       * Total
       * @description Total number of tables found
       */
      total: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "CLICKHOUSE".
 */
export type CLICKHOUSE_TOOL_INPUTS = {
  EXECUTE_QUERY: CLICKHOUSE_EXECUTE_QUERY_INPUT
  GET_DATABASE_SCHEMA: CLICKHOUSE_GET_DATABASE_SCHEMA_INPUT
  GET_TABLE_SCHEMA: CLICKHOUSE_GET_TABLE_SCHEMA_INPUT
  LIST_DATABASES: CLICKHOUSE_LIST_DATABASES_INPUT
  LIST_TABLES: CLICKHOUSE_LIST_TABLES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLICKHOUSE".
 */
export type CLICKHOUSE_TOOL_OUTPUTS = {
  EXECUTE_QUERY: CLICKHOUSE_EXECUTE_QUERY_OUTPUT
  GET_DATABASE_SCHEMA: CLICKHOUSE_GET_DATABASE_SCHEMA_OUTPUT
  GET_TABLE_SCHEMA: CLICKHOUSE_GET_TABLE_SCHEMA_OUTPUT
  LIST_DATABASES: CLICKHOUSE_LIST_DATABASES_OUTPUT
  LIST_TABLES: CLICKHOUSE_LIST_TABLES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLICKHOUSE toolkit.
 */
export const CLICKHOUSE = {
  slug: "clickhouse",
  tools: {
    /**
     * Execute a sql query in clickhouse and return the results. this is the primary action for querying data from clickhouse databases.
     */
    EXECUTE_QUERY: "CLICKHOUSE_EXECUTE_QUERY",
    /**
     * Get comprehensive schema overview of an entire database including all tables and optionally their column definitions. essential for ai agents to understand the complete database structure in a single call.
     */
    GET_DATABASE_SCHEMA: "CLICKHOUSE_GET_DATABASE_SCHEMA",
    /**
     * Get detailed schema information for a specific table including column definitions, types, keys, and optionally sample data. this is essential for ai agents to understand table structure before constructing queries.
     */
    GET_TABLE_SCHEMA: "CLICKHOUSE_GET_TABLE_SCHEMA",
    /**
     * List all databases in the clickhouse instance. useful for discovering available databases before querying tables.
     */
    LIST_DATABASES: "CLICKHOUSE_LIST_DATABASES",
    /**
     * List tables in clickhouse databases. returns information about tables including their engine, size, and row count.
     */
    LIST_TABLES: "CLICKHOUSE_LIST_TABLES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLICKHOUSE".
 */
export type CLICKHOUSE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLICKHOUSE".
 */
export type CLICKHOUSE_TRIGGER_EVENTS = {}
