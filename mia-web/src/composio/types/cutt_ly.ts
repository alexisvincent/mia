// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CUTT_LY's CUTT_LY_VIEW_LAST_SHORTENED_URLS tool input.
 */
type CUTT_LY_VIEW_LAST_SHORTENED_URLS_INPUT = {
  /**
   * Limit
   * @description Number of recent URLs to retrieve (max 50)
   * @default 10
   */
  limit: number | null;
};

/**
 * Type of CUTT_LY's CUTT_LY_VIEW_LAST_SHORTENED_URLS tool output.
 */
type CUTT_LY_VIEW_LAST_SHORTENED_URLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Total Count
       * @description Total number of URLs retrieved
       * @default 0
       */
      total_count: number;
      /**
       * Urls
       * @description List of recently shortened URLs and their details
       */
      urls?: {
          /**
           * Clicks
           * @description Total number of clicks
           * @default null
           */
          clicks: number | null;
          /**
           * Date
           * @description Date when the URL was shortened
           * @default null
           */
          date: string | null;
          /**
           * Full Link
           * @description Original URL
           * @default null
           */
          fullLink: string | null;
          /**
           * Short Link
           * @description Shortened URL
           * @default null
           */
          shortLink: string | null;
          /**
           * Title
           * @description Title of the shortened URL
           * @default null
           */
          title: string | null;
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
 * Type map of all available tool input types for toolkit "CUTT_LY".
 */
export type CUTT_LY_TOOL_INPUTS = {
  VIEW_LAST_SHORTENED_URLS: CUTT_LY_VIEW_LAST_SHORTENED_URLS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CUTT_LY".
 */
export type CUTT_LY_TOOL_OUTPUTS = {
  VIEW_LAST_SHORTENED_URLS: CUTT_LY_VIEW_LAST_SHORTENED_URLS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CUTT_LY toolkit.
 */
export const CUTT_LY = {
  slug: "cutt_ly",
  tools: {
    /**
     * This action retrieves a list of recently shortened urls from your cutt.ly account. it allows users to view their latest shortened links and their details. note: due to api limitations, this action may not return all historical urls. for complete history, please use the cutt.ly dashboard.
     */
    VIEW_LAST_SHORTENED_URLS: "CUTT_LY_VIEW_LAST_SHORTENED_URLS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CUTT_LY".
 */
export type CUTT_LY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CUTT_LY".
 */
export type CUTT_LY_TRIGGER_EVENTS = {}
