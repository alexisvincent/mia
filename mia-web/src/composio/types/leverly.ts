// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LEVERLY's LEVERLY_LIST_REATTEMPTS tool input.
 */
type LEVERLY_LIST_REATTEMPTS_INPUT = object;

/**
 * Type of LEVERLY's LEVERLY_LIST_REATTEMPTS tool output.
 */
type LEVERLY_LIST_REATTEMPTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reattempts
       * @description List of all reattempts retrieved from Leverly
       */
      reattempts: {
          /**
           * Attempt Id
           * @description Original attempt ID associated with this reattempt
           */
          attempt_id: number;
          /**
           * Attempts
           * @description Total number of times this entry has been reattempted
           */
          attempts: number;
          /**
           * Created At
           * @description ISO 8601 timestamp when the reattempt was created
           */
          created_at: string;
          /**
           * Error Message
           * @description Error message from the last failed attempt, if any
           * @default null
           */
          error_message: string | null;
          /**
           * Id
           * @description Unique identifier of the reattempt
           */
          id: number;
          /**
           * Last Attempt At
           * @description ISO 8601 timestamp of the last attempt execution
           * @default null
           */
          last_attempt_at: string | null;
          /**
           * Status
           * @description Current status of the reattempt
           * @enum {string}
           */
          status: "pending" | "success" | "failed";
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
 * Type of LEVERLY's LEVERLY_STOP_REATTEMPTS tool input.
 */
type LEVERLY_STOP_REATTEMPTS_INPUT = {
  /**
   * Reattempt Id
   * @description The unique ID of the reattempt to stop.
   */
  reattempt_id?: string;
};

/**
 * Type of LEVERLY's LEVERLY_STOP_REATTEMPTS tool output.
 */
type LEVERLY_STOP_REATTEMPTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Description of the result or error.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the request was successful.
       */
      success: boolean;
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
 * Type map of all available tool input types for toolkit "LEVERLY".
 */
export type LEVERLY_TOOL_INPUTS = {
  LIST_REATTEMPTS: LEVERLY_LIST_REATTEMPTS_INPUT
  STOP_REATTEMPTS: LEVERLY_STOP_REATTEMPTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LEVERLY".
 */
export type LEVERLY_TOOL_OUTPUTS = {
  LIST_REATTEMPTS: LEVERLY_LIST_REATTEMPTS_OUTPUT
  STOP_REATTEMPTS: LEVERLY_STOP_REATTEMPTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LEVERLY toolkit.
 */
export const LEVERLY = {
  slug: "leverly",
  tools: {
    /**
     * Tool to list all reattempts in leverly. use when you need to inspect the history of ingestion reattempts before taking further action.
     */
    LIST_REATTEMPTS: "LEVERLY_LIST_REATTEMPTS",
    /**
     * Tool to stop ongoing reattempts for a lead in leverly. use when you need to halt retries for a given reattempt id.
     */
    STOP_REATTEMPTS: "LEVERLY_STOP_REATTEMPTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LEVERLY".
 */
export type LEVERLY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LEVERLY".
 */
export type LEVERLY_TRIGGER_EVENTS = {}
