// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BENCH's BENCH_SLEEP tool input.
 */
type BENCH_SLEEP_INPUT = object;

/**
 * Type of BENCH's BENCH_SLEEP tool output.
 */
type BENCH_SLEEP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Delay */
      delay: number;
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
 * Type map of all available tool input types for toolkit "BENCH".
 */
export type BENCH_TOOL_INPUTS = {
  SLEEP: BENCH_SLEEP_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BENCH".
 */
export type BENCH_TOOL_OUTPUTS = {
  SLEEP: BENCH_SLEEP_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BENCH toolkit.
 */
export const BENCH = {
  slug: "bench",
  tools: {
    /**
     * Sleep
     */
    SLEEP: "BENCH_SLEEP",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BENCH".
 */
export type BENCH_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BENCH".
 */
export type BENCH_TRIGGER_EVENTS = {}
