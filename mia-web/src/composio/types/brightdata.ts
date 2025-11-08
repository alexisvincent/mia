// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BRIGHTDATA's BRIGHTDATA_CRAWL_API tool input.
 */
type BRIGHTDATA_CRAWL_API_INPUT = {
  /**
   * Custom Output Fields
   * @description Pipe-separated list of output fields to include (e.g., 'url|about.updated_on').
   * @default null
   */
  custom_output_fields: string | null;
  /**
   * Dataset Id
   * @description Your dataset ID.
   */
  dataset_id?: string;
  /**
   * Include Errors
   * @description Whether to include an errors report with the results.
   * @default null
   */
  include_errors: boolean | null;
  /**
   * Items
   * @description List of objects containing URLs or other parameters required by the crawler.
   */
  items?: {
      /**
       * Url
       * @description Page or domain URL to crawl.
       */
      url: string;
  }[];
};

/**
 * Type of BRIGHTDATA's BRIGHTDATA_CRAWL_API tool output.
 */
type BRIGHTDATA_CRAWL_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Snapshot Id
       * @description Identifier of the triggered crawl snapshot.
       */
      snapshot_id: string;
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
 * Type of BRIGHTDATA's BRIGHTDATA_DATASET_LIST tool input.
 */
type BRIGHTDATA_DATASET_LIST_INPUT = object;

/**
 * Type of BRIGHTDATA's BRIGHTDATA_DATASET_LIST tool output.
 */
type BRIGHTDATA_DATASET_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Datasets
       * @description List of available datasets.
       */
      datasets: {
          /**
           * Id
           * @description Unique identifier for the dataset.
           */
          id: string;
          /**
           * Name
           * @description Name of the dataset.
           */
          name: string;
          /**
           * Size
           * @description Number of records in the dataset, must be non-negative.
           */
          size: number;
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
 * Type of BRIGHTDATA's BRIGHTDATA_FILTER_DATASET tool input.
 */
type BRIGHTDATA_FILTER_DATASET_INPUT = {
  /**
   * Dataset Id
   * @description ID of the dataset to filter.
   */
  dataset_id?: string;
  /**
   * Files
   * @description Optional list of file paths to CSV or JSON files containing filter values.
   * @default null
   */
  files: string[] | null;
  /**
   * Filter
   * @description Filter criteria object. Supports operators: '=', '!=', '<', '<=', '>', '>=', 'in', 'not_in', 'includes', 'not_includes', 'array_includes', 'not_array_includes', 'is_null', 'is_not_null'. Combine using 'and'/'or' up to 3 levels of nesting.
   */
  filter?: {
      [key: string]: unknown;
  };
  /**
   * Records Limit
   * @description Optional maximum number of records to include in the snapshot, must be >= 1.
   * @default null
   */
  records_limit: number | null;
};

/**
 * Type of BRIGHTDATA's BRIGHTDATA_FILTER_DATASET tool output.
 */
type BRIGHTDATA_FILTER_DATASET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Snapshot Id
       * @description ID of the created snapshot.
       */
      snapshot_id: string;
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
 * Type of BRIGHTDATA's BRIGHTDATA_GET_LIST_OF_AVAILABLE_CITIES tool input.
 */
type BRIGHTDATA_GET_LIST_OF_AVAILABLE_CITIES_INPUT = {
  /**
   * Country
   * @description ISO 3166-1 alpha-2 country code to list available cities for.
   */
  country?: string;
  /**
   * Pool Ip Type
   * @description Type of static proxy pool. 'dc' for datacenter, 'static_res' for residential.
   * @default dc
   * @enum {string}
   */
  pool_ip_type: "dc" | "static_res";
};

/**
 * Type of BRIGHTDATA's BRIGHTDATA_GET_LIST_OF_AVAILABLE_CITIES tool output.
 */
type BRIGHTDATA_GET_LIST_OF_AVAILABLE_CITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cities
       * @description List of city identifiers in 'country_code-city_name' format, e.g., 'us-chicago'.
       */
      cities: string[];
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
 * Type of BRIGHTDATA's BRIGHTDATA_GET_LIST_OF_AVAILABLE_COUNTRIES tool input.
 */
type BRIGHTDATA_GET_LIST_OF_AVAILABLE_COUNTRIES_INPUT = object;

/**
 * Type of BRIGHTDATA's BRIGHTDATA_GET_LIST_OF_AVAILABLE_COUNTRIES tool output.
 */
type BRIGHTDATA_GET_LIST_OF_AVAILABLE_COUNTRIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Zone Types
       * @description Mapping of zone types to lists of ISO 3166-1 alpha-2 country codes
       */
      zone_types: {
          /**
           * Dc Dedicated Host
           * @description Country codes for dedicated host data center zones
           */
          DC_dedicated_host: string[];
          /**
           * Dc Dedicated Ip
           * @description Country codes for dedicated IP data center zones
           */
          DC_dedicated_ip: string[];
          /**
           * Dc Shared
           * @description Country codes for shared data center zones
           */
          DC_shared: string[];
          /**
           * Isp Dedicated Host
           * @description Country codes for dedicated host ISP zones
           */
          ISP_dedicated_host: string[];
          /**
           * Isp Dedicated Ip
           * @description Country codes for dedicated IP ISP zones
           */
          ISP_dedicated_ip: string[];
          /**
           * Isp Shared
           * @description Country codes for shared ISP zones
           */
          ISP_shared: string[];
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
 * Type of BRIGHTDATA's BRIGHTDATA_GET_SNAPSHOT_RESULTS tool input.
 */
type BRIGHTDATA_GET_SNAPSHOT_RESULTS_INPUT = {
  /**
   * Format
   * @description Desired output format.
   * @default json
   * @enum {string}
   */
  format: "json" | "csv" | "ndjson";
  /**
   * Limit
   * @description Maximum number of records to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip before starting to collect the result set.
   * @default null
   */
  offset: number | null;
  /**
   * Snapshot Id
   * @description Identifier of the snapshot to fetch results for.
   */
  snapshot_id?: string;
};

/**
 * Type of BRIGHTDATA's BRIGHTDATA_GET_SNAPSHOT_RESULTS tool output.
 */
type BRIGHTDATA_GET_SNAPSHOT_RESULTS_OUTPUT = {
  /**
   * Content
   * @description Raw content for non-JSON formats (csv/ndjson).
   * @default null
   */
  content: string | null;
  /**
   * Data
   * @description Parsed JSON payload when format is 'json'.
   * @default null
   */
  data: unknown;
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
 * Type of BRIGHTDATA's BRIGHTDATA_GET_SNAPSHOT_STATUS tool input.
 */
type BRIGHTDATA_GET_SNAPSHOT_STATUS_INPUT = {
  /**
   * Snapshot Id
   * @description Identifier of the snapshot to check.
   */
  snapshot_id?: string;
};

/**
 * Type of BRIGHTDATA's BRIGHTDATA_GET_SNAPSHOT_STATUS tool output.
 */
type BRIGHTDATA_GET_SNAPSHOT_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Additional metadata returned by the API.
       * @default null
       */
      meta: {
          [key: string]: unknown;
      } | null;
      /**
       * Status
       * @description Snapshot status, e.g. collecting, digesting, ready, failed
       */
      status: string;
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
 * Type of BRIGHTDATA's BRIGHTDATA_LIST_WEB_UNLOCKER_ZONES tool input.
 */
type BRIGHTDATA_LIST_WEB_UNLOCKER_ZONES_INPUT = object;

/**
 * Type of BRIGHTDATA's BRIGHTDATA_LIST_WEB_UNLOCKER_ZONES tool output.
 */
type BRIGHTDATA_LIST_WEB_UNLOCKER_ZONES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Zones
       * @description List of configured Web Unlocker zones.
       */
      zones: {
          /**
           *  Id
           * @description Zone ID.
           */
          _id: string;
          /**
           * Config
           * @description Zone configuration details.
           */
          config: {
              [key: string]: unknown;
          };
          /**
           * Created
           * @description Creation timestamp (RFC3339).
           */
          created: string;
          /**
           * Ips
           * @description List of IP addresses associated with the zone.
           */
          ips: string[];
          /**
           * Last Updated
           * @description Last updated timestamp (RFC3339).
           */
          last_updated: string;
          /**
           * Plan
           * @description Plan details associated with the zone.
           */
          plan: {
              [key: string]: unknown;
          };
          /**
           * Status
           * @description Status of the zone (e.g., 'active', 'suspended').
           */
          status: string;
          /**
           * Type
           * @description Zone type (e.g., 'static', 'dynamic', 'resident').
           */
          type: string;
          /**
           * Zone
           * @description Name of the zone.
           */
          zone: string;
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
 * Type of BRIGHTDATA's BRIGHTDATA_SERP_SEARCH tool input.
 */
type BRIGHTDATA_SERP_SEARCH_INPUT = {
  /**
   * Country
   * @description ISO 3166-1 alpha-2 country code for localized search results.
   * @default null
   */
  country: string | null;
  /**
   * Include Images
   * @description Whether to include image search results.
   * @default false
   */
  include_images: boolean | null;
  /**
   * Include News
   * @description Whether to include news search results.
   * @default false
   */
  include_news: boolean | null;
  /**
   * Language
   * @description Language code for search results (e.g., 'en', 'es', 'fr').
   * @default null
   */
  language: string | null;
  /**
   * Num Results
   * @description Number of search results to return (1-100).
   * @default 10
   */
  num_results: number | null;
  /**
   * Page
   * @description Page number of results to fetch.
   * @default 1
   */
  page: number | null;
  /**
   * Query
   * @description The search query to execute.
   */
  query?: string;
  /**
   * Safe Search
   * @description Safe search filter level.
   * @default moderate
   * @enum {string|null}
   */
  safe_search: "off" | "moderate" | "strict" | null;
  /**
   * Search Engine
   * @description Search engine to use for the query.
   * @default google
   * @enum {string|null}
   */
  search_engine: "google" | "bing" | "yahoo" | "duckduckgo" | null;
};

/**
 * Type of BRIGHTDATA's BRIGHTDATA_SERP_SEARCH tool output.
 */
type BRIGHTDATA_SERP_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Images
       * @description List of image results if requested.
       * @default null
       */
      images: {
          /**
           * Height
           * @description Image height in pixels.
           * @default null
           */
          height: number | null;
          /**
           * Image Url
           * @description Direct URL to the image.
           */
          image_url: string;
          /**
           * Source Url
           * @description URL of the page containing the image.
           */
          source_url: string;
          /**
           * Thumbnail Url
           * @description URL of the thumbnail image.
           * @default null
           */
          thumbnail_url: string | null;
          /**
           * Title
           * @description Title of the image.
           */
          title: string;
          /**
           * Width
           * @description Image width in pixels.
           * @default null
           */
          width: number | null;
      }[] | null;
      /**
       * News
       * @description List of news results if requested.
       * @default null
       */
      news: {
          /**
           * Published Date
           * @description Publication date of the article.
           * @default null
           */
          published_date: string | null;
          /**
           * Snippet
           * @description Snippet of the news article.
           * @default null
           */
          snippet: string | null;
          /**
           * Source
           * @description News source name.
           * @default null
           */
          source: string | null;
          /**
           * Title
           * @description Title of the news article.
           */
          title: string;
          /**
           * Url
           * @description URL of the news article.
           */
          url: string;
      }[] | null;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Query
       * @description Original search query.
       */
      query: string;
      /**
       * Related Searches
       * @description List of related search queries.
       * @default null
       */
      related_searches: string[] | null;
      /**
       * Results
       * @description List of search results.
       */
      results: {
          /**
           * Domain
           * @description Domain of the result URL.
           * @default null
           */
          domain: string | null;
          /**
           * Position
           * @description Position in search results.
           */
          position: number;
          /**
           * Snippet
           * @description Description/snippet of the result.
           * @default null
           */
          snippet: string | null;
          /**
           * Title
           * @description Title of the search result.
           */
          title: string;
          /**
           * Url
           * @description URL of the search result.
           */
          url: string;
      }[];
      /**
       * Search Engine
       * @description Search engine used.
       */
      search_engine: string;
      /**
       * Total Results
       * @description Total number of results available.
       * @default null
       */
      total_results: number | null;
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
 * Type of BRIGHTDATA's BRIGHTDATA_WEB_UNLOCKER tool input.
 */
type BRIGHTDATA_WEB_UNLOCKER_INPUT = {
  /**
   * Country
   * @description ISO 3166-1 alpha-2 country code for the proxy location.
   * @default null
   */
  country: string | null;
  /**
   * Device
   * @description Device type to emulate during scraping.
   * @default desktop
   * @enum {string|null}
   */
  device: "desktop" | "mobile" | null;
  /**
   * Format
   * @description Response format - HTML content, PNG screenshot, or JPG screenshot.
   * @default html
   * @enum {string|null}
   */
  format: "html" | "png" | "jpg" | null;
  /**
   * Render Js
   * @description Whether to render JavaScript on the page.
   * @default true
   */
  render_js: boolean | null;
  /**
   * Timeout
   * @description Request timeout in seconds (1-180).
   * @default 30
   */
  timeout: number | null;
  /**
   * Url
   * @description The URL of the website to unlock and scrape.
   */
  url?: string;
  /**
   * Wait For
   * @description CSS selector to wait for before considering page loaded.
   * @default null
   */
  wait_for: string | null;
};

/**
 * Type of BRIGHTDATA's BRIGHTDATA_WEB_UNLOCKER tool output.
 */
type BRIGHTDATA_WEB_UNLOCKER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The scraped content (HTML, base64 image, etc).
       */
      content: string;
      /**
       * Cookies
       * @description Cookies set by the scraped page.
       * @default null
       */
      cookies: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Headers
       * @description Response headers from the scraped page.
       * @default null
       */
      headers: {
          [key: string]: string;
      } | null;
      /**
       * Status Code
       * @description HTTP status code of the response.
       */
      status_code: number;
      /**
       * Url
       * @description The original URL that was scraped.
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
 * Type map of all available tool input types for toolkit "BRIGHTDATA".
 */
export type BRIGHTDATA_TOOL_INPUTS = {
  CRAWL_API: BRIGHTDATA_CRAWL_API_INPUT
  DATASET_LIST: BRIGHTDATA_DATASET_LIST_INPUT
  FILTER_DATASET: BRIGHTDATA_FILTER_DATASET_INPUT
  GET_LIST_OF_AVAILABLE_CITIES: BRIGHTDATA_GET_LIST_OF_AVAILABLE_CITIES_INPUT
  GET_LIST_OF_AVAILABLE_COUNTRIES: BRIGHTDATA_GET_LIST_OF_AVAILABLE_COUNTRIES_INPUT
  GET_SNAPSHOT_RESULTS: BRIGHTDATA_GET_SNAPSHOT_RESULTS_INPUT
  GET_SNAPSHOT_STATUS: BRIGHTDATA_GET_SNAPSHOT_STATUS_INPUT
  LIST_WEB_UNLOCKER_ZONES: BRIGHTDATA_LIST_WEB_UNLOCKER_ZONES_INPUT
  SERP_SEARCH: BRIGHTDATA_SERP_SEARCH_INPUT
  WEB_UNLOCKER: BRIGHTDATA_WEB_UNLOCKER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BRIGHTDATA".
 */
export type BRIGHTDATA_TOOL_OUTPUTS = {
  CRAWL_API: BRIGHTDATA_CRAWL_API_OUTPUT
  DATASET_LIST: BRIGHTDATA_DATASET_LIST_OUTPUT
  FILTER_DATASET: BRIGHTDATA_FILTER_DATASET_OUTPUT
  GET_LIST_OF_AVAILABLE_CITIES: BRIGHTDATA_GET_LIST_OF_AVAILABLE_CITIES_OUTPUT
  GET_LIST_OF_AVAILABLE_COUNTRIES: BRIGHTDATA_GET_LIST_OF_AVAILABLE_COUNTRIES_OUTPUT
  GET_SNAPSHOT_RESULTS: BRIGHTDATA_GET_SNAPSHOT_RESULTS_OUTPUT
  GET_SNAPSHOT_STATUS: BRIGHTDATA_GET_SNAPSHOT_STATUS_OUTPUT
  LIST_WEB_UNLOCKER_ZONES: BRIGHTDATA_LIST_WEB_UNLOCKER_ZONES_OUTPUT
  SERP_SEARCH: BRIGHTDATA_SERP_SEARCH_OUTPUT
  WEB_UNLOCKER: BRIGHTDATA_WEB_UNLOCKER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BRIGHTDATA toolkit.
 */
export const BRIGHTDATA = {
  slug: "brightdata",
  tools: {
    /**
     * Tool to trigger a site crawl job to extract content across multiple pages or entire domains. use when you need to start a crawl for a given dataset and list of urls.
     */
    CRAWL_API: "BRIGHTDATA_CRAWL_API",
    /**
     * Tool to list all available pre-made scrapers (datasets) from bright data's marketplace. use when you need to browse available data sources for structured scraping.
     */
    DATASET_LIST: "BRIGHTDATA_DATASET_LIST",
    /**
     * Tool to apply custom filter criteria to a marketplace dataset (beta). use after selecting a dataset to generate a filtered snapshot.
     */
    FILTER_DATASET: "BRIGHTDATA_FILTER_DATASET",
    /**
     * Tool to get available static network cities for a given country. use when you need to configure static proxy endpoints after selecting a country.
     */
    GET_LIST_OF_AVAILABLE_CITIES: "BRIGHTDATA_GET_LIST_OF_AVAILABLE_CITIES",
    /**
     * Tool to list available countries and their iso 3166-1 alpha-2 codes. use when you need to configure zones with valid country codes before provisioning proxies.
     */
    GET_LIST_OF_AVAILABLE_COUNTRIES: "BRIGHTDATA_GET_LIST_OF_AVAILABLE_COUNTRIES",
    /**
     * Tool to retrieve the scraped data from a completed crawl job by snapshot id. use after triggering a crawl or filtering a dataset to download the collected data.
     */
    GET_SNAPSHOT_RESULTS: "BRIGHTDATA_GET_SNAPSHOT_RESULTS",
    /**
     * Tool to check the processing status of a crawl job using snapshot id. call before attempting to download results to ensure data collection is complete.
     */
    GET_SNAPSHOT_STATUS: "BRIGHTDATA_GET_SNAPSHOT_STATUS",
    /**
     * Tool to list your configured web unlocker zones and proxy endpoints. use to view available zones for web scraping and bot protection bypass.
     */
    LIST_WEB_UNLOCKER_ZONES: "BRIGHTDATA_LIST_WEB_UNLOCKER_ZONES",
    /**
     * Tool to perform serp (search engine results page) searches across different search engines. use when you need to retrieve search results, trending topics, or competitive analysis data.
     */
    SERP_SEARCH: "BRIGHTDATA_SERP_SEARCH",
    /**
     * Tool to bypass bot detection, captcha, and other anti-scraping measures to extract content from websites. use when you need to scrape websites that block automated access or require javascript rendering.
     */
    WEB_UNLOCKER: "BRIGHTDATA_WEB_UNLOCKER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BRIGHTDATA".
 */
export type BRIGHTDATA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BRIGHTDATA".
 */
export type BRIGHTDATA_TRIGGER_EVENTS = {}
