// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BASEROW's BASEROW_LIST_DATABASES tool input.
 */
type BASEROW_LIST_DATABASES_INPUT = object;

/**
 * Type of BASEROW's BASEROW_LIST_DATABASES tool output.
 */
type BASEROW_LIST_DATABASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Applications
       * @description List of databases in the workspace
       */
      applications: {
          /**
           * Group Id
           * @description The ID of the workspace containing the database
           */
          group_id: number;
          /**
           * Id
           * @description The unique identifier of the database
           */
          id: number;
          /**
           * Name
           * @description The name of the database
           */
          name: string;
          /**
           * Order
           * @description The order of the database in the workspace
           */
          order: number;
          /**
           * Type
           * @description The type of the application (database)
           */
          type: string;
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
 * Type of BASEROW's BASEROW_LIST_TABLES tool input.
 */
type BASEROW_LIST_TABLES_INPUT = {
  /**
   * Database Id
   * @description ID of the database to list tables from
   */
  database_id?: number;
};

/**
 * Type of BASEROW's BASEROW_LIST_TABLES tool output.
 */
type BASEROW_LIST_TABLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tables
       * @description List of tables in the database
       */
      tables: {
          /**
           * Database Id
           * @description The ID of the database this table belongs to
           */
          database_id: number;
          /**
           * First Row Header
           * @description Boolean indicating if the first row is a header
           */
          first_row_header: boolean;
          /**
           * Id
           * @description The unique identifier of the table
           */
          id: number;
          /**
           * Name
           * @description The name of the table
           */
          name: string;
          /**
           * Order
           * @description The order position of the table
           */
          order: number;
          /**
           * Type
           * @description The type of the table
           */
          type: string;
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
 * Type map of all available tool input types for toolkit "BASEROW".
 */
export type BASEROW_TOOL_INPUTS = {
  LIST_DATABASES: BASEROW_LIST_DATABASES_INPUT
  LIST_TABLES: BASEROW_LIST_TABLES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BASEROW".
 */
export type BASEROW_TOOL_OUTPUTS = {
  LIST_DATABASES: BASEROW_LIST_DATABASES_OUTPUT
  LIST_TABLES: BASEROW_LIST_TABLES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BASEROW toolkit.
 */
export const BASEROW = {
  slug: "baserow",
  tools: {
    /**
     * This tool retrieves a list of all databases in a specified workspace. as a fundamental operation, it allows users to discover which databases are available in their baserow workspace. this operation is independent and requires only authentication in order to fetch essential metadata for subsequent operations.
     */
    LIST_DATABASES: "BASEROW_LIST_DATABASES",
    /**
     * This tool lists all tables within a specified baserow database. it allows users to retrieve information about all tables in a database by using the get /api/database/{database id}/tables/ endpoint. the expected output is an array of table objects containing details such as id, name, order, database id, type, and first row header.
     */
    LIST_TABLES: "BASEROW_LIST_TABLES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BASEROW".
 */
export type BASEROW_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BASEROW".
 */
export type BASEROW_TRIGGER_EVENTS = {}
