// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SIMILARWEB_DIGITALRANK_API's SIMILARWEB_DIGITALRANK_API_GET_SUBSCRIPTION_STATUS tool input.
 */
type SIMILARWEB_DIGITALRANK_API_GET_SUBSCRIPTION_STATUS_INPUT = object;

/**
 * Type of SIMILARWEB_DIGITALRANK_API's SIMILARWEB_DIGITALRANK_API_GET_SUBSCRIPTION_STATUS tool output.
 */
type SIMILARWEB_DIGITALRANK_API_GET_SUBSCRIPTION_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * User Limit
       * @description User subscription limit.
       */
      user_limit: number;
      /**
       * User Remaining
       * @description Remaining user subscription capacity.
       */
      user_remaining: number;
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
 * Type map of all available tool input types for toolkit "SIMILARWEB_DIGITALRANK_API".
 */
export type SIMILARWEB_DIGITALRANK_API_TOOL_INPUTS = {
  GET_SUBSCRIPTION_STATUS: SIMILARWEB_DIGITALRANK_API_GET_SUBSCRIPTION_STATUS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SIMILARWEB_DIGITALRANK_API".
 */
export type SIMILARWEB_DIGITALRANK_API_TOOL_OUTPUTS = {
  GET_SUBSCRIPTION_STATUS: SIMILARWEB_DIGITALRANK_API_GET_SUBSCRIPTION_STATUS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SIMILARWEB_DIGITALRANK_API toolkit.
 */
export const SIMILARWEB_DIGITALRANK_API = {
  slug: "similarweb_digitalrank_api",
  tools: {
    /**
     * Tool to check the remaining subscription usage for the user.
     */
    GET_SUBSCRIPTION_STATUS: "SIMILARWEB_DIGITALRANK_API_GET_SUBSCRIPTION_STATUS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SIMILARWEB_DIGITALRANK_API".
 */
export type SIMILARWEB_DIGITALRANK_API_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SIMILARWEB_DIGITALRANK_API".
 */
export type SIMILARWEB_DIGITALRANK_API_TRIGGER_EVENTS = {}
