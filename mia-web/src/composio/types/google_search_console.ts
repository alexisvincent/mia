// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLE_SEARCH_CONSOLE's GOOGLE_SEARCH_CONSOLE_GET_SITEMAP tool input.
 */
type GOOGLE_SEARCH_CONSOLE_GET_SITEMAP_INPUT = {
  /**
   * Feedpath
   * @description The URL of the sitemap to retrieve. For example: https://www.example.com/sitemap.xml
   */
  feedpath?: string;
  /**
   * Site Url
   * @description The site's URL, including protocol. For example: https://www.example.com/
   */
  site_url?: string;
};

/**
 * Type of GOOGLE_SEARCH_CONSOLE's GOOGLE_SEARCH_CONSOLE_GET_SITEMAP tool output.
 */
type GOOGLE_SEARCH_CONSOLE_GET_SITEMAP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The sitemap data response from the Google Search Console API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of GOOGLE_SEARCH_CONSOLE's GOOGLE_SEARCH_CONSOLE_INSPECT_URL tool input.
 */
type GOOGLE_SEARCH_CONSOLE_INSPECT_URL_INPUT = {
  /**
   * Inspection Url
   * @description The URL of the property as defined in Search Console. For example: https://www.example.com/
   */
  inspection_url?: string;
  /**
   * Language Code
   * @description The language code of the page. For example: en-US
   * @default en-US
   */
  language_code: string;
  /**
   * Site Url
   * @description The site's URL, including protocol. For example: https://www.example.com/
   */
  site_url?: string;
  /**
   * Url
   * @description The URL to inspect. For example: https://www.example.com/page
   */
  url?: string;
};

/**
 * Type of GOOGLE_SEARCH_CONSOLE's GOOGLE_SEARCH_CONSOLE_INSPECT_URL tool output.
 */
type GOOGLE_SEARCH_CONSOLE_INSPECT_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The URL inspection response from the Google Search Console API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of GOOGLE_SEARCH_CONSOLE's GOOGLE_SEARCH_CONSOLE_LIST_SITEMAPS tool input.
 */
type GOOGLE_SEARCH_CONSOLE_LIST_SITEMAPS_INPUT = {
  /**
   * Site Url
   * @description The site's URL, including protocol. For example: https://www.example.com/
   */
  site_url?: string;
  /**
   * Sitemap Index
   * @description The sitemap index to start listing from. Used for pagination.
   * @default null
   */
  sitemap_index: string | null;
};

/**
 * Type of GOOGLE_SEARCH_CONSOLE's GOOGLE_SEARCH_CONSOLE_LIST_SITEMAPS tool output.
 */
type GOOGLE_SEARCH_CONSOLE_LIST_SITEMAPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The list of sitemaps response from the Google Search Console API. Returns an empty object if no sitemaps are found.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of GOOGLE_SEARCH_CONSOLE's GOOGLE_SEARCH_CONSOLE_LIST_SITES tool input.
 */
type GOOGLE_SEARCH_CONSOLE_LIST_SITES_INPUT = object;

/**
 * Type of GOOGLE_SEARCH_CONSOLE's GOOGLE_SEARCH_CONSOLE_LIST_SITES tool output.
 */
type GOOGLE_SEARCH_CONSOLE_LIST_SITES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The list of sites response from the Google Search Console API. Contains a 'siteEntry' array with objects having 'siteUrl' (e.g., 'sc-domain:company8.dev') and 'permissionLevel' (e.g., 'siteOwner') fields.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of GOOGLE_SEARCH_CONSOLE's GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY tool input.
 */
type GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY_INPUT = {
  /**
   * Aggregation Type
   * @description How data is aggregated. Possible values: auto, byProperty
   * @default auto
   */
  aggregation_type: string;
  /**
   * Data State
   * @description The data state to return. Possible values: final, all
   * @default final
   */
  data_state: string;
  /**
   * Dimension Filter Groups
   * @description Filters to apply to the dimensions. Each filter group contains dimension filters.
   * @default null
   */
  dimension_filter_groups: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Dimensions
   * @description The dimensions to group the data by. Possible values: query, page, country, device, date
   * @default [
   *       "query"
   *     ]
   */
  dimensions: string[];
  /**
   * End Date
   * @description The end date of the date range for the query, in YYYY-MM-DD format.
   */
  end_date?: string;
  /**
   * Row Limit
   * @description The maximum number of rows to return. Must be between 1 and 5000.
   * @default 1000
   */
  row_limit: number;
  /**
   * Search Type
   * @description The search type to filter by. Possible values: web, video, image, news
   * @default web
   */
  search_type: string;
  /**
   * Site Url
   * @description The site's URL, including protocol. For example: https://www.example.com/
   */
  site_url?: string;
  /**
   * Start Date
   * @description The start date of the date range for the query, in YYYY-MM-DD format.
   */
  start_date?: string;
  /**
   * Start Row
   * @description The first row to return from the result set. Used for pagination.
   * @default 0
   */
  start_row: number;
};

/**
 * Type of GOOGLE_SEARCH_CONSOLE's GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY tool output.
 */
type GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The search analytics data response from the Google Search Console API. Contains 'responseAggregationType' field indicating how data is aggregated (e.g., 'byProperty').
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of GOOGLE_SEARCH_CONSOLE's GOOGLE_SEARCH_CONSOLE_SUBMIT_SITEMAP tool input.
 */
type GOOGLE_SEARCH_CONSOLE_SUBMIT_SITEMAP_INPUT = {
  /**
   * Feedpath
   * @description The URL of the sitemap to submit. For example: https://www.example.com/sitemap.xml
   */
  feedpath?: string;
  /**
   * Site Url
   * @description The site's URL, including protocol. For example: https://www.example.com/
   */
  site_url?: string;
};

/**
 * Type of GOOGLE_SEARCH_CONSOLE's GOOGLE_SEARCH_CONSOLE_SUBMIT_SITEMAP tool output.
 */
type GOOGLE_SEARCH_CONSOLE_SUBMIT_SITEMAP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The sitemap submission response from the Google Search Console API.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "GOOGLE_SEARCH_CONSOLE".
 */
export type GOOGLE_SEARCH_CONSOLE_TOOL_INPUTS = {
  GET_SITEMAP: GOOGLE_SEARCH_CONSOLE_GET_SITEMAP_INPUT
  INSPECT_URL: GOOGLE_SEARCH_CONSOLE_INSPECT_URL_INPUT
  LIST_SITEMAPS: GOOGLE_SEARCH_CONSOLE_LIST_SITEMAPS_INPUT
  LIST_SITES: GOOGLE_SEARCH_CONSOLE_LIST_SITES_INPUT
  SEARCH_ANALYTICS_QUERY: GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY_INPUT
  SUBMIT_SITEMAP: GOOGLE_SEARCH_CONSOLE_SUBMIT_SITEMAP_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLE_SEARCH_CONSOLE".
 */
export type GOOGLE_SEARCH_CONSOLE_TOOL_OUTPUTS = {
  GET_SITEMAP: GOOGLE_SEARCH_CONSOLE_GET_SITEMAP_OUTPUT
  INSPECT_URL: GOOGLE_SEARCH_CONSOLE_INSPECT_URL_OUTPUT
  LIST_SITEMAPS: GOOGLE_SEARCH_CONSOLE_LIST_SITEMAPS_OUTPUT
  LIST_SITES: GOOGLE_SEARCH_CONSOLE_LIST_SITES_OUTPUT
  SEARCH_ANALYTICS_QUERY: GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY_OUTPUT
  SUBMIT_SITEMAP: GOOGLE_SEARCH_CONSOLE_SUBMIT_SITEMAP_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GOOGLE_SEARCH_CONSOLE toolkit.
 */
export const GOOGLE_SEARCH_CONSOLE = {
  slug: "google_search_console",
  tools: {
    /**
     * Retrieves information about a specific sitemap for a site.
     */
    GET_SITEMAP: "GOOGLE_SEARCH_CONSOLE_GET_SITEMAP",
    /**
     * Inspects a url for indexing issues and status in google search console.
     */
    INSPECT_URL: "GOOGLE_SEARCH_CONSOLE_INSPECT_URL",
    /**
     * Lists all sitemaps for a site in google search console.
     */
    LIST_SITEMAPS: "GOOGLE_SEARCH_CONSOLE_LIST_SITEMAPS",
    /**
     * Lists all sites owned by the authenticated user in google search console.
     */
    LIST_SITES: "GOOGLE_SEARCH_CONSOLE_LIST_SITES",
    /**
     * Queries google search console for search analytics data including clicks, impressions, ctr, and position metrics.
     */
    SEARCH_ANALYTICS_QUERY: "GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY",
    /**
     * Submits a sitemap to google search console for indexing.
     */
    SUBMIT_SITEMAP: "GOOGLE_SEARCH_CONSOLE_SUBMIT_SITEMAP",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLE_SEARCH_CONSOLE".
 */
export type GOOGLE_SEARCH_CONSOLE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GOOGLE_SEARCH_CONSOLE".
 */
export type GOOGLE_SEARCH_CONSOLE_TRIGGER_EVENTS = {}
