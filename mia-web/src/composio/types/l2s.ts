// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of L2S's L2S_GET_URL_DETAILS tool input.
 */
type L2S_GET_URL_DETAILS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the shortened URL
   */
  id?: string;
};

/**
 * Type of L2S's L2S_GET_URL_DETAILS tool output.
 */
type L2S_GET_URL_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp when the URL was created
       */
      createdAt: string;
      /**
       * Description
       * @description Meta description of the URL page
       * @default null
       */
      description: string | null;
      /**
       * Favicon
       * @description Link to the favicon image
       * @default null
       */
      favicon: string | null;
      /**
       * Id
       * @description Unique identifier of the URL
       */
      id: string;
      /**
       * Status
       * @description Status of the URL (e.g., active, inactive)
       */
      status: string;
      /**
       * Tags
       * @description Tags associated with the URL
       */
      tags?: string[];
      /**
       * Title
       * @description Title of the URL page
       * @default null
       */
      title: string | null;
      /**
       * Updated At
       * @description ISO timestamp of last update
       */
      updatedAt: string;
      /**
       * Url
       * @description The actual expanded URL
       */
      url: string;
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
 * Type of L2S's L2S_L2_S_GET_USER_SETTINGS tool input.
 */
type L2S_L2_S_GET_USER_SETTINGS_INPUT = object;

/**
 * Type of L2S's L2S_L2_S_GET_USER_SETTINGS tool output.
 */
type L2S_L2_S_GET_USER_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Daily Emails
       * @description Indicates if daily emails are enabled.
       */
      daily_emails: boolean;
      /**
       * Notifications Enabled
       * @description Whether notifications are enabled for user.
       */
      notifications_enabled: boolean;
      /**
       * Theme
       * @description User's UI theme (e.g., 'light', 'dark').
       */
      theme: string;
      /**
       * Timezone
       * @description User's timezone in standard TZ format.
       */
      timezone: string;
      /**
       * Weekly Reports
       * @description Indicates if weekly reports are enabled.
       */
      weekly_reports: boolean;
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
 * Type of L2S's L2S_L2_S_LIST_URLS tool input.
 */
type L2S_L2_S_LIST_URLS_INPUT = object;

/**
 * Type of L2S's L2S_L2_S_LIST_URLS tool output.
 */
type L2S_L2_S_LIST_URLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of URLs returned in this page
       */
      count: number;
      /**
       * Next
       * @description Link to the next page of results, or null if last page
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description Link to the previous page of results, or null if first page
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of shortened URL objects
       */
      results: {
          /**
           * Created At
           * Format: date-time
           * @description ISO-8601 timestamp when the URL was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the shortened URL
           */
          id: number;
          /**
           * Updated At
           * Format: date-time
           * @description ISO-8601 timestamp when the URL was last updated
           */
          updated_at: string;
          /**
           * Url
           * @description The full shortened URL string
           */
          url: string;
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
 * Type of L2S's L2S_L2_S_SHORTEN_URL tool input.
 */
type L2S_L2_S_SHORTEN_URL_INPUT = {
  /**
   * Custom Key
   * @description Custom alias for the shortened URL.
   * @default null
   */
  customKey: string | null;
  /**
   * Tags
   * @description Tags associated with the shortened URL.
   * @default null
   */
  tags: string[] | null;
  /**
   * Title
   * @description Title for the shortened URL.
   * @default null
   */
  title: string | null;
  /**
   * Url
   * @description The long URL to be shortened.
   */
  url?: string;
  /**
   * Utm Campaign
   * @description UTM campaign parameter.
   * @default null
   */
  utmCampaign: string | null;
  /**
   * Utm Content
   * @description UTM content parameter.
   * @default null
   */
  utmContent: string | null;
  /**
   * Utm Medium
   * @description UTM medium parameter.
   * @default null
   */
  utmMedium: string | null;
  /**
   * Utm Source
   * @description UTM source parameter.
   * @default null
   */
  utmSource: string | null;
  /**
   * Utm Term
   * @description UTM term parameter.
   * @default null
   */
  utmTerm: string | null;
};

/**
 * Type of L2S's L2S_L2_S_SHORTEN_URL tool output.
 */
type L2S_L2_S_SHORTEN_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ok
       * @description Indicates if the operation was successful.
       * @default null
       */
      ok: boolean | null;
      /**
       * L2SShortenUrlResponsePayload
       * @description Payload model containing message and data.
       * @default null
       */
      response: {
          /**
           * L2SShortenUrlData
           * @description Data model for the shortened URL details.
           * @default null
           */
          data: {
              /**
               * Short Url
               * @description The shortened URL.
               */
              shortUrl: string;
          } | null;
          /**
           * Message
           * @description Operation status message.
           * @default null
           */
          message: string | null;
      } | null;
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
 * Type map of all available tool input types for toolkit "L2S".
 */
export type L2S_TOOL_INPUTS = {
  GET_URL_DETAILS: L2S_GET_URL_DETAILS_INPUT
  L2_S_GET_USER_SETTINGS: L2S_L2_S_GET_USER_SETTINGS_INPUT
  L2_S_LIST_URLS: L2S_L2_S_LIST_URLS_INPUT
  L2_S_SHORTEN_URL: L2S_L2_S_SHORTEN_URL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "L2S".
 */
export type L2S_TOOL_OUTPUTS = {
  GET_URL_DETAILS: L2S_GET_URL_DETAILS_OUTPUT
  L2_S_GET_USER_SETTINGS: L2S_L2_S_GET_USER_SETTINGS_OUTPUT
  L2_S_LIST_URLS: L2S_L2_S_LIST_URLS_OUTPUT
  L2_S_SHORTEN_URL: L2S_L2_S_SHORTEN_URL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's L2S toolkit.
 */
export const L2S = {
  slug: "l2s",
  tools: {
    /**
     * Tool to retrieve details of a shortened url. use when you need metadata about a specific shortened link. use after obtaining a valid url id.
     */
    GET_URL_DETAILS: "L2S_GET_URL_DETAILS",
    /**
     * Tool to retrieve current user's settings. use after authentication to fetch email, notification, and appearance preferences.
     */
    L2_S_GET_USER_SETTINGS: "L2S_L2_S_GET_USER_SETTINGS",
    /**
     * Tool to list all shortened urls. use after user authentication to retrieve the user's urls with pagination details.
     */
    L2_S_LIST_URLS: "L2S_L2_S_LIST_URLS",
    /**
     * Tool to shorten a given long url. use when you need a concise link representation.
     */
    L2_S_SHORTEN_URL: "L2S_L2_S_SHORTEN_URL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "L2S".
 */
export type L2S_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "L2S".
 */
export type L2S_TRIGGER_EVENTS = {}
