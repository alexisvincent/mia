// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SNOWFLAKE_BASIC's SNOWFLAKE_BASIC_DESCRIBE_TABLE tool input.
 */
type SNOWFLAKE_BASIC_DESCRIBE_TABLE_INPUT = {
  /**
   * Database
   * @description The name of the Snowflake database containing the table.
   */
  database?: string;
  /**
   * Schema Name
   * @description The name of the schema within the database that contains the table.
   */
  schema_name?: string;
  /**
   * Table Name
   * @description The name of the table to describe.
   */
  table_name?: string;
};

/**
 * Type of SNOWFLAKE_BASIC's SNOWFLAKE_BASIC_DESCRIBE_TABLE tool output.
 */
type SNOWFLAKE_BASIC_DESCRIBE_TABLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Columns
       * @description List of objects, each detailing a column's properties in the specified table.
       * @default []
       */
      columns: {
          /**
           * Data Type
           * @description Data type of the column in Snowflake (e.g., VARCHAR, NUMBER, DATE).
           */
          dataType: string;
          /**
           * Default Value
           * @description Default value of the column as a string, or `None` if not defined.
           */
          defaultValue?: string;
          /**
           * Kind
           * @description Kind of the column (e.g., 'COLUMN', 'GEOGRAPHY_COLUMN').
           */
          kind: string;
          /**
           * Name
           * @description Name of the column.
           */
          name: string;
          /**
           * Nullable
           * @description True if the column can store NULL values.
           */
          nullable: boolean;
          /**
           * Primary Key
           * @description True if the column is part of the table's primary key.
           * @default false
           */
          primaryKey: boolean;
          /**
           * Unique Key
           * @description True if the column is part of a unique key constraint.
           * @default false
           */
          uniqueKey: boolean;
      }[];
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
 * Type of SNOWFLAKE_BASIC's SNOWFLAKE_BASIC_EXPLORE_COLUMNS tool input.
 */
type SNOWFLAKE_BASIC_EXPLORE_COLUMNS_INPUT = {
  /**
   * Column Names
   * @description A list of specific column names to explore. If left empty, all columns in the table will be explored.
   * @default []
   */
  column_names: string[];
  /**
   * Database
   * @description The name of the Snowflake database.
   */
  database?: string;
  /**
   * Limit
   * @description The maximum number of distinct values to return for each specified column.
   * @default 10
   */
  limit: number;
  /**
   * Schema Name
   * @description The name of the schema within the specified database.
   */
  schema_name?: string;
  /**
   * Table Name
   * @description The name of the table within the specified schema.
   */
  table_name?: string;
};

/**
 * Type of SNOWFLAKE_BASIC's SNOWFLAKE_BASIC_EXPLORE_COLUMNS tool output.
 */
type SNOWFLAKE_BASIC_EXPLORE_COLUMNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Values
       * @description A dictionary mapping column names to a list of distinct values found in that column.
       */
      values: {
          [key: string]: (string | null)[];
      };
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
 * Type of SNOWFLAKE_BASIC's SNOWFLAKE_BASIC_RUN_QUERY tool input.
 */
type SNOWFLAKE_BASIC_RUN_QUERY_INPUT = {
  /**
   * Database
   * @description Name of the Snowflake database.
   */
  database?: string;
  /**
   * Query
   * @description SQL query to execute; runs within the context of the specified database and schema.
   */
  query?: string;
  /**
   * Schema Name
   * @description Name of the schema within the specified database.
   */
  schema_name?: string;
};

/**
 * Type of SNOWFLAKE_BASIC's SNOWFLAKE_BASIC_RUN_QUERY tool output.
 */
type SNOWFLAKE_BASIC_RUN_QUERY_OUTPUT = {
  /**
   * Data
   * @description A list of dictionaries, where each dictionary represents a row returned by the query. Keys in the dictionaries are column names. For SELECT statements, this contains the query results. For DML/DDL statements or queries that do not return a rowset, this will typically be an empty list.
   * @default {}
   */
  data: {
      [key: string]: unknown;
  }[];
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
 * Type of SNOWFLAKE_BASIC's SNOWFLAKE_BASIC_SHOW_DATABASES tool input.
 */
type SNOWFLAKE_BASIC_SHOW_DATABASES_INPUT = object;

/**
 * Type of SNOWFLAKE_BASIC's SNOWFLAKE_BASIC_SHOW_DATABASES tool output.
 */
type SNOWFLAKE_BASIC_SHOW_DATABASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Databases
       * @description A list of databases available in the Snowflake account.
       * @default []
       */
      databases: {
          /**
           * Comment
           * @description Any comments associated with the database.
           * @default
           */
          comment: string;
          /**
           * Created On
           * @description When the database was created.
           */
          created_on: string;
          /**
           * Is Current
           * @description Whether this is the current database (Y/N).
           */
          is_current: string;
          /**
           * Is Default
           * @description Whether this is the default database (Y/N).
           */
          is_default: string;
          /**
           * Name
           * @description The name of the database.
           */
          name: string;
          /**
           * Options
           * @description Database options.
           * @default
           */
          options: string;
          /**
           * Origin
           * @description The origin of the database (e.g., 'SNOWFLAKE').
           */
          origin: string;
          /**
           * Owner
           * @description The owner/role that owns this database.
           */
          owner: string;
          /**
           * Retention Time
           * @description Data retention time for the database.
           * @default
           */
          retention_time: string;
      }[];
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
 * Type of SNOWFLAKE_BASIC's SNOWFLAKE_BASIC_SHOW_SCHEMAS tool input.
 */
type SNOWFLAKE_BASIC_SHOW_SCHEMAS_INPUT = {
  /**
   * Database
   * @description The name of the database for which to list schemas.
   */
  database?: string;
};

/**
 * Type of SNOWFLAKE_BASIC's SNOWFLAKE_BASIC_SHOW_SCHEMAS tool output.
 */
type SNOWFLAKE_BASIC_SHOW_SCHEMAS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Schemas
       * @description A list of schemas found in the specified database, including their metadata.
       * @default []
       */
      schemas: {
          /**
           * Comment
           * @description Any comments associated with the schema.
           * @default
           */
          comment: string;
          /**
           * Created On
           * @description When the schema was created.
           */
          created_on: string;
          /**
           * Database Name
           * @description The name of the database containing this schema.
           */
          database_name: string;
          /**
           * Is Current
           * @description Whether this is the current schema (Y/N).
           */
          is_current: string;
          /**
           * Is Default
           * @description Whether this is the default schema (Y/N).
           */
          is_default: string;
          /**
           * Name
           * @description The name of the schema.
           */
          name: string;
          /**
           * Options
           * @description Schema options.
           * @default
           */
          options: string;
          /**
           * Owner
           * @description The owner/role that owns this schema.
           */
          owner: string;
          /**
           * Retention Time
           * @description Data retention time for the schema.
           * @default
           */
          retention_time: string;
      }[];
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
 * Type of SNOWFLAKE_BASIC's SNOWFLAKE_BASIC_SHOW_TABLES tool input.
 */
type SNOWFLAKE_BASIC_SHOW_TABLES_INPUT = {
  /**
   * Database
   * @description The name of the database containing the schema from which to list tables.
   */
  database?: string;
  /**
   * Schema Name
   * @description The name of the schema within the specified database for which to list tables.
   */
  schema_name?: string;
};

/**
 * Type of SNOWFLAKE_BASIC's SNOWFLAKE_BASIC_SHOW_TABLES tool output.
 */
type SNOWFLAKE_BASIC_SHOW_TABLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tables
       * @description A list of tables found in the specified schema, including their names, row counts, and sizes in bytes.
       * @default []
       */
      tables: {
          /**
           * Bytes
           * @description The size of the table in bytes.
           */
          bytes: number;
          /**
           * Name
           * @description The name of the table.
           */
          name: string;
          /**
           * Row Count
           * @description The total number of rows in the table.
           */
          rowCount: number;
      }[];
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
 * Type map of all available tool input types for toolkit "SNOWFLAKE_BASIC".
 */
export type SNOWFLAKE_BASIC_TOOL_INPUTS = {
  DESCRIBE_TABLE: SNOWFLAKE_BASIC_DESCRIBE_TABLE_INPUT
  EXPLORE_COLUMNS: SNOWFLAKE_BASIC_EXPLORE_COLUMNS_INPUT
  RUN_QUERY: SNOWFLAKE_BASIC_RUN_QUERY_INPUT
  SHOW_DATABASES: SNOWFLAKE_BASIC_SHOW_DATABASES_INPUT
  SHOW_SCHEMAS: SNOWFLAKE_BASIC_SHOW_SCHEMAS_INPUT
  SHOW_TABLES: SNOWFLAKE_BASIC_SHOW_TABLES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SNOWFLAKE_BASIC".
 */
export type SNOWFLAKE_BASIC_TOOL_OUTPUTS = {
  DESCRIBE_TABLE: SNOWFLAKE_BASIC_DESCRIBE_TABLE_OUTPUT
  EXPLORE_COLUMNS: SNOWFLAKE_BASIC_EXPLORE_COLUMNS_OUTPUT
  RUN_QUERY: SNOWFLAKE_BASIC_RUN_QUERY_OUTPUT
  SHOW_DATABASES: SNOWFLAKE_BASIC_SHOW_DATABASES_OUTPUT
  SHOW_SCHEMAS: SNOWFLAKE_BASIC_SHOW_SCHEMAS_OUTPUT
  SHOW_TABLES: SNOWFLAKE_BASIC_SHOW_TABLES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SNOWFLAKE_BASIC toolkit.
 */
export const SNOWFLAKE_BASIC = {
  slug: "snowflake_basic",
  tools: {
    /**
     * Retrieves detailed information for each column (including name, data type, kind, nullability, default value, and key status) in a specified snowflake table.
     */
    DESCRIBE_TABLE: "SNOWFLAKE_BASIC_DESCRIBE_TABLE",
    /**
     * Retrieves a sample of distinct values for specified columns from a snowflake table.
     */
    EXPLORE_COLUMNS: "SNOWFLAKE_BASIC_EXPLORE_COLUMNS",
    /**
     * Executes the given sql query in snowflake within the specified database and schema (which must exist and be accessible), automatically setting context first.
     */
    RUN_QUERY: "SNOWFLAKE_BASIC_RUN_QUERY",
    /**
     * Retrieves a list of all databases available in the snowflake account.
     */
    SHOW_DATABASES: "SNOWFLAKE_BASIC_SHOW_DATABASES",
    /**
     * Retrieves a list of all schemas within a specified snowflake database.
     */
    SHOW_SCHEMAS: "SNOWFLAKE_BASIC_SHOW_SCHEMAS",
    /**
     * Retrieves a list of tables, including their row counts and sizes in bytes, from a specified schema within a snowflake database.
     */
    SHOW_TABLES: "SNOWFLAKE_BASIC_SHOW_TABLES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SNOWFLAKE_BASIC".
 */
export type SNOWFLAKE_BASIC_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SNOWFLAKE_BASIC".
 */
export type SNOWFLAKE_BASIC_TRIGGER_EVENTS = {}
