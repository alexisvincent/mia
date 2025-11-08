// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ECHTPOST's ECHTPOST_LIST_TEMPLATES tool input.
 */
type ECHTPOST_LIST_TEMPLATES_INPUT = object;

/**
 * Type of ECHTPOST's ECHTPOST_LIST_TEMPLATES tool output.
 */
type ECHTPOST_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description List of available templates
       */
      templates: {
          /**
           * Created At
           * @description Creation timestamp of the template
           */
          created_at: string;
          /**
           * Description
           * @description Description of the template
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the template
           */
          id: string;
          /**
           * Name
           * @description Name of the template
           */
          name: string;
          /**
           * Preview Url
           * @description URL to preview the template
           * @default null
           */
          preview_url: string | null;
          /**
           * Type
           * @description Type of the template
           */
          type: string;
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
 * Type map of all available tool input types for toolkit "ECHTPOST".
 */
export type ECHTPOST_TOOL_INPUTS = {
  LIST_TEMPLATES: ECHTPOST_LIST_TEMPLATES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ECHTPOST".
 */
export type ECHTPOST_TOOL_OUTPUTS = {
  LIST_TEMPLATES: ECHTPOST_LIST_TEMPLATES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ECHTPOST toolkit.
 */
export const ECHTPOST = {
  slug: "echtpost",
  tools: {
    /**
     * This tool retrieves a list of all available templates in the echtpost account. templates serve as the base design for postcards and are essential for creating cards. the action operates independently using only an authentication token and returns detailed template information including id, name, description, preview url, type, and creation time. this action is crucial for viewing templates before creating cards and obtaining the necessary template ids for subsequent actions.
     */
    LIST_TEMPLATES: "ECHTPOST_LIST_TEMPLATES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ECHTPOST".
 */
export type ECHTPOST_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ECHTPOST".
 */
export type ECHTPOST_TRIGGER_EVENTS = {}
