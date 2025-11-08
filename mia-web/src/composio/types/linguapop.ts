// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LINGUAPOP's LINGUAPOP_FETCH_AVAILABLE_LANGUAGES tool input.
 */
type LINGUAPOP_FETCH_AVAILABLE_LANGUAGES_INPUT = object;

/**
 * Type of LINGUAPOP's LINGUAPOP_FETCH_AVAILABLE_LANGUAGES tool output.
 */
type LINGUAPOP_FETCH_AVAILABLE_LANGUAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Languages
       * @description List of available languages for placement tests
       */
      languages: {
          /**
           * Code
           * @description Language code (e.g., 'en')
           */
          code: string;
          /**
           * Name
           * @description Human-readable language name (e.g., 'English')
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
 * Type map of all available tool input types for toolkit "LINGUAPOP".
 */
export type LINGUAPOP_TOOL_INPUTS = {
  FETCH_AVAILABLE_LANGUAGES: LINGUAPOP_FETCH_AVAILABLE_LANGUAGES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LINGUAPOP".
 */
export type LINGUAPOP_TOOL_OUTPUTS = {
  FETCH_AVAILABLE_LANGUAGES: LINGUAPOP_FETCH_AVAILABLE_LANGUAGES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LINGUAPOP toolkit.
 */
export const LINGUAPOP = {
  slug: "linguapop",
  tools: {
    /**
     * Tool to retrieve the list of available languages. use when you need to verify supported languages before starting a placement test.
     */
    FETCH_AVAILABLE_LANGUAGES: "LINGUAPOP_FETCH_AVAILABLE_LANGUAGES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LINGUAPOP".
 */
export type LINGUAPOP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LINGUAPOP".
 */
export type LINGUAPOP_TRIGGER_EVENTS = {}
