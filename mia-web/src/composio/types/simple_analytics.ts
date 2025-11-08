// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SIMPLE_ANALYTICS's SIMPLE_ANALYTICS_ADMIN_API_LIST_WEBSITES tool input.
 */
type SIMPLE_ANALYTICS_ADMIN_API_LIST_WEBSITES_INPUT = object;

/**
 * Type of SIMPLE_ANALYTICS's SIMPLE_ANALYTICS_ADMIN_API_LIST_WEBSITES tool output.
 */
type SIMPLE_ANALYTICS_ADMIN_API_LIST_WEBSITES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Websites
       * @description List of websites associated with the authenticated user
       */
      websites: {
          /**
           * Created At
           * @description ISO 8601 datetime of website creation
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the website
           */
          id: string;
          /**
           * Name
           * @description Name of the website
           */
          name: string;
          /**
           * Url
           * @description URL of the website
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
 * Type of SIMPLE_ANALYTICS's SIMPLE_ANALYTICS_EXPORT_API_GET_RAW_DATA tool input.
 */
type SIMPLE_ANALYTICS_EXPORT_API_GET_RAW_DATA_INPUT = {
  /**
   * Fields
   * @description List of data fields to include, e.g., ['date','url','referrer']
   * @default null
   */
  fields: string[] | null;
  /**
   * Format
   * @description Response format: 'csv' or 'json'
   * @default csv
   * @enum {string}
   */
  format: "csv" | "json";
  /**
   * From Date
   * Format: date
   * @description Start date in YYYY-MM-DD format
   * @default null
   */
  from_date: unknown;
  /**
   * To Date
   * Format: date
   * @description End date in YYYY-MM-DD format
   * @default null
   */
  to_date: unknown;
  /**
   * Website
   * @description Website domain or site ID to export data for
   */
  website?: string;
};

/**
 * Type of SIMPLE_ANALYTICS's SIMPLE_ANALYTICS_EXPORT_API_GET_RAW_DATA tool output.
 */
type SIMPLE_ANALYTICS_EXPORT_API_GET_RAW_DATA_OUTPUT = {
  /**
   * Csv
   * @description Raw CSV data as string when format is 'csv'
   * @default null
   */
  csv: string | null;
  /**
   * Data
   * @description List of data point objects when format is 'json'
   * @default null
   */
  data: {
      /**
       * Browser
       * @description Browser used for the visit
       * @default null
       */
      browser: string | null;
      /**
       * Date
       * Format: date
       * @description Date of the data point in YYYY-MM-DD format
       */
      date: unknown;
      /**
       * Referrer
       * @description Referrer URL
       * @default null
       */
      referrer: string | null;
      /**
       * Url
       * @description URL visited
       * @default null
       */
      url: string | null;
  }[] | null;
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
 * Type of SIMPLE_ANALYTICS's SIMPLE_ANALYTICS_GET_AGGREGATED_STATS tool input.
 */
type SIMPLE_ANALYTICS_GET_AGGREGATED_STATS_INPUT = {
  /**
   * Compare
   * @description Comparison range start date in YYYY-MM-DD format.
   * @default null
   */
  compare: string | null;
  /**
   * End
   * @description End date in YYYY-MM-DD format.
   * @default null
   */
  end: string | null;
  /**
   * Page
   * @description Filter stats by specific page path.
   * @default null
   */
  page: string | null;
  /**
   * Referrer
   * @description Filter stats by specific referrer host.
   * @default null
   */
  referrer: string | null;
  /**
   * Source
   * @description Filter stats by traffic source.
   * @default null
   */
  source: string | null;
  /**
   * Start
   * @description Start date in YYYY-MM-DD format.
   * @default null
   */
  start: string | null;
  /**
   * Website
   * @description Website identifier (domain or custom code).
   */
  website?: string;
};

/**
 * Type of SIMPLE_ANALYTICS's SIMPLE_ANALYTICS_GET_AGGREGATED_STATS tool output.
 */
type SIMPLE_ANALYTICS_GET_AGGREGATED_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avg Duration
       * @description Average visit duration in seconds
       * @default null
       */
      avg_duration: number | null;
      /**
       * Bounce Rate
       * @description Percentage of single-page visits
       * @default null
       */
      bounce_rate: number | null;
      /**
       * Browsers
       * @description Map of browser names to counts
       * @default null
       */
      browsers: {
          [key: string]: number;
      } | null;
      /**
       * Countries
       * @description Map of country codes to visitor counts
       * @default null
       */
      countries: {
          [key: string]: number;
      } | null;
      /**
       * Devices
       * @description Map of device types to counts
       * @default null
       */
      devices: {
          [key: string]: number;
      } | null;
      /**
       * Events
       * @description Number of recorded events
       * @default null
       */
      events: number | null;
      /**
       * Events List
       * @description List of event stats
       * @default null
       */
      events_list: {
          /**
           * Count
           * @description Count of the event occurrences
           */
          count: number;
          /**
           * Name
           * @description Name of the event
           */
          name: string;
      }[] | null;
      /**
       * Operating Systems
       * @description Map of operating system names to counts
       * @default null
       */
      operating_systems: {
          [key: string]: number;
      } | null;
      /**
       * Pages
       * @description Map of page paths to counts
       * @default null
       */
      pages: {
          [key: string]: number;
      } | null;
      /**
       * Pageviews
       * @description Total number of pageviews
       * @default null
       */
      pageviews: number | null;
      /**
       * Referrers
       * @description Map of referrer hosts to counts
       * @default null
       */
      referrers: {
          [key: string]: number;
      } | null;
      /**
       * Status
       * @description API response status
       * @default null
       */
      status: string | null;
      /**
       * Views Per Visitor
       * @description Average views per visitor
       * @default null
       */
      views_per_visitor: number | null;
      /**
       * Visitors
       * @description Total number of unique visitors
       * @default null
       */
      visitors: number | null;
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
 * Type map of all available tool input types for toolkit "SIMPLE_ANALYTICS".
 */
export type SIMPLE_ANALYTICS_TOOL_INPUTS = {
  ADMIN_API_LIST_WEBSITES: SIMPLE_ANALYTICS_ADMIN_API_LIST_WEBSITES_INPUT
  EXPORT_API_GET_RAW_DATA: SIMPLE_ANALYTICS_EXPORT_API_GET_RAW_DATA_INPUT
  GET_AGGREGATED_STATS: SIMPLE_ANALYTICS_GET_AGGREGATED_STATS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SIMPLE_ANALYTICS".
 */
export type SIMPLE_ANALYTICS_TOOL_OUTPUTS = {
  ADMIN_API_LIST_WEBSITES: SIMPLE_ANALYTICS_ADMIN_API_LIST_WEBSITES_OUTPUT
  EXPORT_API_GET_RAW_DATA: SIMPLE_ANALYTICS_EXPORT_API_GET_RAW_DATA_OUTPUT
  GET_AGGREGATED_STATS: SIMPLE_ANALYTICS_GET_AGGREGATED_STATS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SIMPLE_ANALYTICS toolkit.
 */
export const SIMPLE_ANALYTICS = {
  slug: "simple_analytics",
  tools: {
    /**
     * Tool to list all websites associated with the authenticated user. use after authenticating an admin account to retrieve website list.
     */
    ADMIN_API_LIST_WEBSITES: "SIMPLE_ANALYTICS_ADMIN_API_LIST_WEBSITES",
    /**
     * Tool to export raw data points (page views and events) for a specific website. use when you need to download csv or json exports of site traffic.
     */
    EXPORT_API_GET_RAW_DATA: "SIMPLE_ANALYTICS_EXPORT_API_GET_RAW_DATA",
    /**
     * Tool to retrieve aggregated statistics for a specified website. use when you need an overview of key metrics like visitors, pageviews, bounce rate, and more.
     */
    GET_AGGREGATED_STATS: "SIMPLE_ANALYTICS_GET_AGGREGATED_STATS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SIMPLE_ANALYTICS".
 */
export type SIMPLE_ANALYTICS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SIMPLE_ANALYTICS".
 */
export type SIMPLE_ANALYTICS_TRIGGER_EVENTS = {}
