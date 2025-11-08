// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of RE_AMAZE's RE_AMAZE_GET_REPORTS_TAGS tool input.
 */
type RE_AMAZE_GET_REPORTS_TAGS_INPUT = object;

/**
 * Type of RE_AMAZE's RE_AMAZE_GET_REPORTS_TAGS tool output.
 */
type RE_AMAZE_GET_REPORTS_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tags
       * @description List of tag usage objects
       */
      tags: {
          /**
           * Count
           * @description The number of times the tag was used
           */
          count: number;
          /**
           * Tag Name
           * @description The name of the tag
           */
          tag_name: string;
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
 * Type of RE_AMAZE's RE_AMAZE_GET_RESPONSE_TEMPLATES tool input.
 */
type RE_AMAZE_GET_RESPONSE_TEMPLATES_INPUT = {
  /**
   * Brand
   * @description Brand identifier for which to retrieve response templates
   */
  brand?: string;
};

/**
 * Type of RE_AMAZE's RE_AMAZE_GET_RESPONSE_TEMPLATES tool output.
 */
type RE_AMAZE_GET_RESPONSE_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Templates
       * @description List of response templates
       */
      response_templates: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "RE_AMAZE".
 */
export type RE_AMAZE_TOOL_INPUTS = {
  GET_REPORTS_TAGS: RE_AMAZE_GET_REPORTS_TAGS_INPUT
  GET_RESPONSE_TEMPLATES: RE_AMAZE_GET_RESPONSE_TEMPLATES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "RE_AMAZE".
 */
export type RE_AMAZE_TOOL_OUTPUTS = {
  GET_REPORTS_TAGS: RE_AMAZE_GET_REPORTS_TAGS_OUTPUT
  GET_RESPONSE_TEMPLATES: RE_AMAZE_GET_RESPONSE_TEMPLATES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's RE_AMAZE toolkit.
 */
export const RE_AMAZE = {
  slug: "re_amaze",
  tools: {
    /**
     * Tool to retrieve a list of tags used in reports. use when analyzing tag usage metrics across conversations.
     */
    GET_REPORTS_TAGS: "RE_AMAZE_GET_REPORTS_TAGS",
    /**
     * Tool to retrieve response templates for the brand. use when you need canned responses to streamline replies.
     */
    GET_RESPONSE_TEMPLATES: "RE_AMAZE_GET_RESPONSE_TEMPLATES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "RE_AMAZE".
 */
export type RE_AMAZE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "RE_AMAZE".
 */
export type RE_AMAZE_TRIGGER_EVENTS = {}
