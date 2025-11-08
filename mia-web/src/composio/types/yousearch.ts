// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of YOUSEARCH's YOUSEARCH_YOU_SEARCH tool input.
 */
type YOUSEARCH_YOU_SEARCH_INPUT = {
  /**
   * Country
   * @description Country Code
   */
  country?: string;
  /**
   * Num Web Results
   * @description The max number of web results to return, must be under 20
   * @default 10
   */
  num_web_results: number;
  /**
   * Offset
   * @description The offset, in multiples of num_web_results. I.e if num_web_results = 5, and offset=1, the API will return results 5-10. The maximum value for offset is 9
   * @default 0
   */
  offset: number;
  /**
   * Query
   * @description Query string for searching index
   */
  query?: string;
  /**
   * Safesearch
   * @description Safesearch settings, one of off, moderate, strict, defaults to moderate
   * @default moderate
   */
  safesearch: string;
};

/**
 * Type of YOUSEARCH's YOUSEARCH_YOU_SEARCH tool output.
 */
type YOUSEARCH_YOU_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from the custom API
       */
      results: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "YOUSEARCH".
 */
export type YOUSEARCH_TOOL_INPUTS = {
  YOU_SEARCH: YOUSEARCH_YOU_SEARCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "YOUSEARCH".
 */
export type YOUSEARCH_TOOL_OUTPUTS = {
  YOU_SEARCH: YOUSEARCH_YOU_SEARCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's YOUSEARCH toolkit.
 */
export const YOUSEARCH = {
  slug: "yousearch",
  tools: {
    /**
     * Perform a search using the custom api.
     */
    YOU_SEARCH: "YOUSEARCH_YOU_SEARCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "YOUSEARCH".
 */
export type YOUSEARCH_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "YOUSEARCH".
 */
export type YOUSEARCH_TRIGGER_EVENTS = {}
