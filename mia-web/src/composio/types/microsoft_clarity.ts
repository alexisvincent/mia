// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MICROSOFT_CLARITY's MICROSOFT_CLARITY_DATA_EXPORT tool input.
 */
type MICROSOFT_CLARITY_DATA_EXPORT_INPUT = {
  /**
   * Dimension1
   * @description The first dimension to break down insights.
   * @default null
   */
  dimension1: string | null;
  /**
   * Dimension2
   * @description The second dimension to break down insights.
   * @default null
   */
  dimension2: string | null;
  /**
   * Dimension3
   * @description The third dimension to break down insights.
   * @default null
   */
  dimension3: string | null;
  /**
   * Num Of Days
   * @description The number of days for the data export since the API call, relating to the last 24, 48, or 72 hours, respectively.
   */
  numOfDays?: number;
};

/**
 * Type of MICROSOFT_CLARITY's MICROSOFT_CLARITY_DATA_EXPORT tool output.
 */
type MICROSOFT_CLARITY_DATA_EXPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Exported data from Microsoft Clarity
       */
      response_data: {
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
 * Type map of all available tool input types for toolkit "MICROSOFT_CLARITY".
 */
export type MICROSOFT_CLARITY_TOOL_INPUTS = {
  DATA_EXPORT: MICROSOFT_CLARITY_DATA_EXPORT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MICROSOFT_CLARITY".
 */
export type MICROSOFT_CLARITY_TOOL_OUTPUTS = {
  DATA_EXPORT: MICROSOFT_CLARITY_DATA_EXPORT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MICROSOFT_CLARITY toolkit.
 */
export const MICROSOFT_CLARITY = {
  slug: "microsoft_clarity",
  tools: {
    /**
     * Export data from microsoft clarity.
     */
    DATA_EXPORT: "MICROSOFT_CLARITY_DATA_EXPORT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MICROSOFT_CLARITY".
 */
export type MICROSOFT_CLARITY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MICROSOFT_CLARITY".
 */
export type MICROSOFT_CLARITY_TRIGGER_EVENTS = {}
