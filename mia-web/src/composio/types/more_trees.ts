// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MORE_TREES's MORE_TREES_GET_TOTAL_CARBON_OFFSET tool input.
 */
type MORE_TREES_GET_TOTAL_CARBON_OFFSET_INPUT = object;

/**
 * Type of MORE_TREES's MORE_TREES_GET_TOTAL_CARBON_OFFSET tool output.
 */
type MORE_TREES_GET_TOTAL_CARBON_OFFSET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Brand Color
       * @description Brand color in hexadecimal format
       */
      brand_color: string;
      /**
       * Forest Name
       * @description Name of the forest
       */
      forest_name: string;
      /**
       * Logo Url
       * @description URL of the forest logo
       */
      logo_url: string;
      /**
       * Totals
       * @description Forest statistics including carbon offset data
       */
      totals: {
          /**
           * Co2 Captured
           * @description Total amount of CO₂ captured
           */
          co2_captured: number;
          /**
           * Projects Supported
           * @description Total number of projects supported
           */
          projects_supported: number;
          /**
           * Trees Gifted
           * @description Total number of trees gifted
           */
          trees_gifted: number;
          /**
           * Trees Planted
           * @description Total number of trees planted
           */
          trees_planted: number;
          /**
           * Trees Received
           * @description Total number of trees received
           */
          trees_received: number;
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
 * Type map of all available tool input types for toolkit "MORE_TREES".
 */
export type MORE_TREES_TOOL_INPUTS = {
  GET_TOTAL_CARBON_OFFSET: MORE_TREES_GET_TOTAL_CARBON_OFFSET_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MORE_TREES".
 */
export type MORE_TREES_TOOL_OUTPUTS = {
  GET_TOTAL_CARBON_OFFSET: MORE_TREES_GET_TOTAL_CARBON_OFFSET_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MORE_TREES toolkit.
 */
export const MORE_TREES = {
  slug: "more_trees",
  tools: {
    /**
     * This tool retrieves the total carbon offset and other forest-related information for the authenticated user. it provides comprehensive data about the user's forest, including the total co₂ captured, number of trees planted, gifted, and received. authentication is provided via an api key in the headers (x-api-key) and no additional parameters are needed as it fetches data for the authenticated user.
     */
    GET_TOTAL_CARBON_OFFSET: "MORE_TREES_GET_TOTAL_CARBON_OFFSET",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MORE_TREES".
 */
export type MORE_TREES_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MORE_TREES".
 */
export type MORE_TREES_TRIGGER_EVENTS = {}
