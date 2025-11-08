// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TURSO's TURSO_CLOSEST_REGION tool input.
 */
type TURSO_CLOSEST_REGION_INPUT = object;

/**
 * Type of TURSO's TURSO_CLOSEST_REGION tool output.
 */
type TURSO_CLOSEST_REGION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Client
       * @description The location code inferred for the client request
       */
      client: string;
      /**
       * Server
       * @description The location code of the closest Turso server region
       */
      server: string;
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
 * Type of TURSO's TURSO_LISTEN_TO_CHANGES tool input.
 */
type TURSO_LISTEN_TO_CHANGES_INPUT = {
  /**
   * Action
   * @description Type of change event to listen for: insert, update, or delete
   * @enum {string}
   */
  action?: "insert" | "update" | "delete";
  /**
   * Table
   * @description Name of the table to listen for changes on
   */
  table?: string;
};

/**
 * Type of TURSO's TURSO_LISTEN_TO_CHANGES tool output.
 */
type TURSO_LISTEN_TO_CHANGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description List of raw event lines received from the server
       */
      events: string[];
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
 * Type of TURSO's TURSO_VALIDATE_API_TOKEN tool input.
 */
type TURSO_VALIDATE_API_TOKEN_INPUT = {
  /**
   * Health Sql
   * @description SQL statement to use for pipeline health validation when mode is 'pipeline' or during 'auto' fallback.
   * @default SELECT 1
   */
  health_sql: string | null;
  /**
   * Mode
   * @description Validation mode: 'platform' to validate via Platform API, 'pipeline' to validate using the Turso pipeline endpoint, or 'auto' to try platform first then fall back to pipeline.
   * @default auto
   */
  mode: string | null;
};

/**
 * Type of TURSO's TURSO_VALIDATE_API_TOKEN tool output.
 */
type TURSO_VALIDATE_API_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Exp
       * @description Expiration time in Unix epoch seconds; -1 means no expiration
       */
      exp: number;
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
 * Type map of all available tool input types for toolkit "TURSO".
 */
export type TURSO_TOOL_INPUTS = {
  CLOSEST_REGION: TURSO_CLOSEST_REGION_INPUT
  LISTEN_TO_CHANGES: TURSO_LISTEN_TO_CHANGES_INPUT
  VALIDATE_API_TOKEN: TURSO_VALIDATE_API_TOKEN_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TURSO".
 */
export type TURSO_TOOL_OUTPUTS = {
  CLOSEST_REGION: TURSO_CLOSEST_REGION_OUTPUT
  LISTEN_TO_CHANGES: TURSO_LISTEN_TO_CHANGES_OUTPUT
  VALIDATE_API_TOKEN: TURSO_VALIDATE_API_TOKEN_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TURSO toolkit.
 */
export const TURSO = {
  slug: "turso",
  tools: {
    /**
     * Tool to get the closest turso region based on client location. use when you need to minimize latency by selecting the nearest deployment region.
     */
    CLOSEST_REGION: "TURSO_CLOSEST_REGION",
    /**
     * Tool to listen to committed table changes. use when streaming real-time insert/update/delete events for a specific table after authenticating.
     */
    LISTEN_TO_CHANGES: "TURSO_LISTEN_TO_CHANGES",
    /**
     * Tool to validate a user api token and retrieve its expiration. use after obtaining a token to confirm it's active.
     */
    VALIDATE_API_TOKEN: "TURSO_VALIDATE_API_TOKEN",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TURSO".
 */
export type TURSO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TURSO".
 */
export type TURSO_TRIGGER_EVENTS = {}
