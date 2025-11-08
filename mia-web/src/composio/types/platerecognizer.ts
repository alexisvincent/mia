// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PLATERECOGNIZER's PLATERECOGNIZER_SNAPSHOT_GET_STATISTICS tool input.
 */
type PLATERECOGNIZER_SNAPSHOT_GET_STATISTICS_INPUT = object;

/**
 * Type of PLATERECOGNIZER's PLATERECOGNIZER_SNAPSHOT_GET_STATISTICS tool output.
 */
type PLATERECOGNIZER_SNAPSHOT_GET_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current Date
       * @description Date of the returned statistics in YYYY-MM-DD format
       */
      current_date: string;
      /**
       * First Day
       * @description First date of the usage period in YYYY-MM-DD format
       */
      first_day: string;
      /**
       * Last Day
       * @description Last date of the usage period in YYYY-MM-DD format
       */
      last_day: string;
      /**
       * Quota
       * @description Maximum allowed recognition requests per month
       */
      quota: number;
      /**
       * Requests
       * @description Total recognition requests used for the current month
       */
      requests: number;
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
 * Type map of all available tool input types for toolkit "PLATERECOGNIZER".
 */
export type PLATERECOGNIZER_TOOL_INPUTS = {
  SNAPSHOT_GET_STATISTICS: PLATERECOGNIZER_SNAPSHOT_GET_STATISTICS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PLATERECOGNIZER".
 */
export type PLATERECOGNIZER_TOOL_OUTPUTS = {
  SNAPSHOT_GET_STATISTICS: PLATERECOGNIZER_SNAPSHOT_GET_STATISTICS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PLATERECOGNIZER toolkit.
 */
export const PLATERECOGNIZER = {
  slug: "platerecognizer",
  tools: {
    /**
     * Tool to retrieve usage statistics for the current month's snapshot api recognition calls. use after making snapshot api calls to monitor monthly usage.
     */
    SNAPSHOT_GET_STATISTICS: "PLATERECOGNIZER_SNAPSHOT_GET_STATISTICS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PLATERECOGNIZER".
 */
export type PLATERECOGNIZER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PLATERECOGNIZER".
 */
export type PLATERECOGNIZER_TRIGGER_EVENTS = {}
