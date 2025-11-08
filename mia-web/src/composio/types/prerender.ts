// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PRERENDER's PRERENDER_GET_PRERENDERED_PAGE tool input.
 */
type PRERENDER_GET_PRERENDERED_PAGE_INPUT = {
  /**
   * Url
   * @description Full URL of the page to prerender. Include scheme (http/https). URL will be percent-encoded as needed.
   */
  url?: string;
};

/**
 * Type of PRERENDER's PRERENDER_GET_PRERENDERED_PAGE tool output.
 */
type PRERENDER_GET_PRERENDERED_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Html
       * @description Prerendered HTML content of the requested URL.
       */
      html: string;
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
 * Type map of all available tool input types for toolkit "PRERENDER".
 */
export type PRERENDER_TOOL_INPUTS = {
  GET_PRERENDERED_PAGE: PRERENDER_GET_PRERENDERED_PAGE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PRERENDER".
 */
export type PRERENDER_TOOL_OUTPUTS = {
  GET_PRERENDERED_PAGE: PRERENDER_GET_PRERENDERED_PAGE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PRERENDER toolkit.
 */
export const PRERENDER = {
  slug: "prerender",
  tools: {
    /**
     * Tool to fetch a prerendered html page. use when you need a static snapshot of a page before dynamic rendering.
     */
    GET_PRERENDERED_PAGE: "PRERENDER_GET_PRERENDERED_PAGE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PRERENDER".
 */
export type PRERENDER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PRERENDER".
 */
export type PRERENDER_TRIGGER_EVENTS = {}
