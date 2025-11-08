// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FLEXISIGN's FLEXISIGN_LIST_TEMPLATES tool input.
 */
type FLEXISIGN_LIST_TEMPLATES_INPUT = object;

/**
 * Type of FLEXISIGN's FLEXISIGN_LIST_TEMPLATES tool output.
 */
type FLEXISIGN_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Informational or error message, if any
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Overall API call status
       */
      status: string;
      /**
       * Templates
       * @description Array of document templates available in the account
       */
      templates: {
          /**
           * Created At
           * @description ISO-8601 timestamp when the template was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the template
           */
          id: string;
          /**
           * Name
           * @description Human-readable name of the template
           */
          name: string;
          /**
           * Updated At
           * @description ISO-8601 timestamp when the template was last updated
           */
          updated_at: string;
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
 * Type map of all available tool input types for toolkit "FLEXISIGN".
 */
export type FLEXISIGN_TOOL_INPUTS = {
  LIST_TEMPLATES: FLEXISIGN_LIST_TEMPLATES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FLEXISIGN".
 */
export type FLEXISIGN_TOOL_OUTPUTS = {
  LIST_TEMPLATES: FLEXISIGN_LIST_TEMPLATES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FLEXISIGN toolkit.
 */
export const FLEXISIGN = {
  slug: "flexisign",
  tools: {
    /**
     * Tool to list all available document templates. use when you need to retrieve and display templates from your flexisign account after connecting.
     */
    LIST_TEMPLATES: "FLEXISIGN_LIST_TEMPLATES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FLEXISIGN".
 */
export type FLEXISIGN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FLEXISIGN".
 */
export type FLEXISIGN_TRIGGER_EVENTS = {}
