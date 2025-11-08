// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PLASMIC's PLASMIC_GLOBAL_ACTIONS_PROVIDER tool input.
 */
type PLASMIC_GLOBAL_ACTIONS_PROVIDER_INPUT = {
  /**
   * Contexts
   * @description List of global contexts with their associated provider components
   */
  contexts?: {
      /**
       * Name
       * @description Context key used in Plasmic designs
       */
      name: string;
      /**
       * Provider
       * @description Name of the React provider component for this context
       */
      provider: string;
  }[];
};

/**
 * Type of PLASMIC's PLASMIC_GLOBAL_ACTIONS_PROVIDER tool output.
 */
type PLASMIC_GLOBAL_ACTIONS_PROVIDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Snippet
       * @description JavaScript snippet for globalContexts configuration
       */
      snippet: string;
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
 * Type map of all available tool input types for toolkit "PLASMIC".
 */
export type PLASMIC_TOOL_INPUTS = {
  GLOBAL_ACTIONS_PROVIDER: PLASMIC_GLOBAL_ACTIONS_PROVIDER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PLASMIC".
 */
export type PLASMIC_TOOL_OUTPUTS = {
  GLOBAL_ACTIONS_PROVIDER: PLASMIC_GLOBAL_ACTIONS_PROVIDER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PLASMIC toolkit.
 */
export const PLASMIC = {
  slug: "plasmic",
  tools: {
    /**
     * Tool to generate the globalcontexts configuration snippet for plasmic loader. use when you need to configure global contexts after defining your react providers.
     */
    GLOBAL_ACTIONS_PROVIDER: "PLASMIC_GLOBAL_ACTIONS_PROVIDER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PLASMIC".
 */
export type PLASMIC_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PLASMIC".
 */
export type PLASMIC_TRIGGER_EVENTS = {}
