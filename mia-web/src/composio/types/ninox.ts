// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of NINOX's NINOX_GET_DATABASES tool input.
 */
type NINOX_GET_DATABASES_INPUT = {
  /**
   * Team Id
   * @description The unique identifier of the Ninox team to list databases for.
   */
  team_id?: string;
};

/**
 * Type of NINOX's NINOX_GET_DATABASES tool output.
 */
type NINOX_GET_DATABASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Databases
       * @description List of databases within the specified team.
       */
      databases: {
          /**
           * Id
           * @description Unique identifier of the database.
           */
          id: string;
          /**
           * Name
           * @description Human-readable name of the database.
           */
          name: string;
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
 * Type of NINOX's NINOX_NINOX_DELETE_RECORD tool input.
 */
type NINOX_NINOX_DELETE_RECORD_INPUT = {
  /**
   * Database Id
   * @description Database identifier
   */
  database_id?: string;
  /**
   * Record Id
   * @description Record identifier to delete
   */
  record_id?: string;
  /**
   * Table Id
   * @description Table identifier
   */
  table_id?: string;
  /**
   * Team Id
   * @description Workspace (team) identifier
   */
  team_id?: string;
};

/**
 * Type of NINOX's NINOX_NINOX_DELETE_RECORD tool output.
 */
type NINOX_NINOX_DELETE_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type map of all available tool input types for toolkit "NINOX".
 */
export type NINOX_TOOL_INPUTS = {
  GET_DATABASES: NINOX_GET_DATABASES_INPUT
  NINOX_DELETE_RECORD: NINOX_NINOX_DELETE_RECORD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "NINOX".
 */
export type NINOX_TOOL_OUTPUTS = {
  GET_DATABASES: NINOX_GET_DATABASES_OUTPUT
  NINOX_DELETE_RECORD: NINOX_NINOX_DELETE_RECORD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's NINOX toolkit.
 */
export const NINOX = {
  slug: "ninox",
  tools: {
    /**
     * Tool to retrieve all databases in a specific ninox team. use after confirming the team id is correct.
     */
    GET_DATABASES: "NINOX_GET_DATABASES",
    /**
     * Tool to delete a record from a specified table. use after confirming workspace, database, table, and record ids.
     */
    NINOX_DELETE_RECORD: "NINOX_NINOX_DELETE_RECORD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "NINOX".
 */
export type NINOX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "NINOX".
 */
export type NINOX_TRIGGER_EVENTS = {}
