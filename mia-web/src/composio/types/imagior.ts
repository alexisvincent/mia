// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of IMAGIOR's IMAGIOR_LIST_TEMPLATES tool input.
 */
type IMAGIOR_LIST_TEMPLATES_INPUT = {
  /**
   * Order
   * @description Sort direction (ascending or descending).
   * @default desc
   * @enum {string}
   */
  order: "asc" | "desc";
  /**
   * Sort
   * @description Field to sort results by (createdAt or updatedAt).
   * @default updatedAt
   * @enum {string}
   */
  sort: "createdAt" | "updatedAt";
};

/**
 * Type of IMAGIOR's IMAGIOR_LIST_TEMPLATES tool output.
 */
type IMAGIOR_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description List of design templates returned by the API.
       */
      templates: {
          /**
           * Created At
           * @description Timestamp when the template was created (ISO 8601).
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the template.
           */
          id: string;
          /**
           * Name
           * @description Name of the template.
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the template was last updated (ISO 8601).
           */
          updatedAt: string;
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
 * Type map of all available tool input types for toolkit "IMAGIOR".
 */
export type IMAGIOR_TOOL_INPUTS = {
  LIST_TEMPLATES: IMAGIOR_LIST_TEMPLATES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "IMAGIOR".
 */
export type IMAGIOR_TOOL_OUTPUTS = {
  LIST_TEMPLATES: IMAGIOR_LIST_TEMPLATES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's IMAGIOR toolkit.
 */
export const IMAGIOR = {
  slug: "imagior",
  tools: {
    /**
     * Tool to list all design templates. Use when you need to retrieve every template associated with your account.
     */
    LIST_TEMPLATES: "IMAGIOR_LIST_TEMPLATES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "IMAGIOR".
 */
export type IMAGIOR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "IMAGIOR".
 */
export type IMAGIOR_TRIGGER_EVENTS = {}
