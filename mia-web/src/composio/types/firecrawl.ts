// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FIRECRAWL's FIRECRAWL_CANCEL_A_CRAWL_JOB tool input.
 */
type FIRECRAWL_CANCEL_A_CRAWL_JOB_INPUT = {
  /**
   * Id
   * @description The unique identifier (UUID) of the crawl job to be canceled.
   */
  id?: string;
};

/**
 * Type of FIRECRAWL's FIRECRAWL_CANCEL_A_CRAWL_JOB tool output.
 */
type FIRECRAWL_CANCEL_A_CRAWL_JOB_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of FIRECRAWL's FIRECRAWL_CRAWL tool input.
 */
type FIRECRAWL_CRAWL_INPUT = {
  /**
   * Allow Backward Links
   * @description If true, allows the crawler to navigate to pages that were linked from pages already visited (i.e., navigate 'backwards'). Defaults to false.
   * @default false
   */
  allowBackwardLinks: boolean;
  /**
   * Allow External Links
   * @description If true, allows the crawler to follow links that lead to external websites (different domains). Defaults to false.
   * @default false
   */
  allowExternalLinks: boolean;
  /**
   * Delay
   * @description Delay in milliseconds between requests to avoid overwhelming the server
   * @default null
   */
  delay: number | null;
  /**
   * Exclude Paths
   * @description A list of Regular Expression (regex) patterns for URL paths to exclude from the crawl. URLs whose paths match any of these patterns will be ignored. For example, `"blog/archive/.*"` would exclude all paths under `/blog/archive/`.
   * @default null
   */
  excludePaths: string[] | null;
  /**
   * Ignore Query Parameters
   * @description If true, ignore query parameters when determining if a URL has been visited
   * @default null
   */
  ignoreQueryParameters: boolean | null;
  /**
   * Ignore Sitemap
   * @description If true, the crawler will ignore any sitemap.xml found on the website. Defaults to true.
   * @default true
   */
  ignoreSitemap: boolean;
  /**
   * Include Paths
   * @description A list of Regular Expression (regex) patterns for URL paths to include in the crawl. Only URLs whose paths match one of these patterns will be processed. For example, `"products/featured/.*"` would only include paths under `/products/featured/`.
   * @default null
   */
  includePaths: string[] | null;
  /**
   * Limit
   * @description Maximum number of pages to crawl. The crawl will stop once this limit is reached. Default is 10.
   * @default 10
   */
  limit: number;
  /**
   * Max Depth
   * @description Maximum depth of subpages to crawl relative to the base URL. A depth of 0 crawls only the base URL, 1 crawls the base URL and its direct links, etc. Default is 2.
   * @default 2
   */
  maxDepth: number;
  /**
   * Max Discovery Depth
   * @description Maximum depth for discovering new links, separate from crawling depth
   * @default null
   */
  maxDiscoveryDepth: number | null;
  /**
   * Scrape Options Actions
   * @description List of actions to perform on each page before scraping (e.g., clicking buttons, waiting)
   * @default null
   */
  scrapeOptions_actions: {
      /**
       * Coordinate
       * @default null
       */
      coordinate: number[] | null;
      /**
       * Milliseconds
       * @default null
       */
      milliseconds: number | null;
      /**
       * Selector
       * @default null
       */
      selector: string | null;
      /**
       * Text
       * @default null
       */
      text: string | null;
      /**
       * Type
       * @enum {string}
       */
      type: "wait" | "click" | "write" | "press" | "scroll" | "screenshot";
  }[] | null;
  /**
   * Scrape Options Block Ads
   * @description If true, block advertisements during scraping
   * @default null
   */
  scrapeOptions_blockAds: boolean | null;
  /**
   * ChangeTrackingOptions
   * @description Options for tracking changes between crawls
   * @default null
   */
  scrapeOptions_changeTrackingOptions: {
      /**
       * Data Schema
       * @description Schema for change tracking
       * @default null
       */
      data_schema: {
          [key: string]: unknown;
      } | null;
      /**
       * Modes
       * @description Change tracking modes
       * @default null
       */
      modes: string[] | null;
      /**
       * Prompt
       * @description Prompt for change tracking
       * @default null
       */
      prompt: string | null;
      /**
       * Tag
       * @description Tag for change tracking
       * @default null
       */
      tag: string | null;
  } | null;
  /**
   * Scrape Options Exclude Tags
   * @description A list of HTML tags to exclude from the scraped output. Content within these tags (and their children) will be removed before processing.
   * @default null
   */
  scrapeOptions_excludeTags: string[] | null;
  /**
   * Scrape Options Formats
   * @description Specifies the desired output formats for the scraped content from each page. Default is `["markdown"]`. If format is json, jsonOptions is required.
   * @default [
   *       "markdown"
   *     ]
   */
  scrapeOptions_formats: string[];
  /**
   * Scrape Options Headers
   * @description Custom HTTP headers to send with each request
   * @default null
   */
  scrapeOptions_headers: {
      [key: string]: string;
  } | null;
  /**
   * Scrape Options Include Tags
   * @description A list of HTML tags to specifically include in the scraped output. Only content within these tags will be processed. If empty or null, all relevant content is considered based on other options.
   * @default null
   */
  scrapeOptions_includeTags: string[] | null;
  /**
   * JsonOptions
   * @description Options for JSON format extraction including schema and prompts
   * @default null
   */
  scrapeOptions_jsonOptions: {
      /**
       * Json Schema
       * @description JSON schema for structured extraction
       * @default null
       */
      json_schema: {
          [key: string]: unknown;
      } | null;
      /**
       * Prompt
       * @description User prompt for JSON extraction
       * @default null
       */
      prompt: string | null;
      /**
       * System Prompt
       * @description System prompt for JSON extraction
       * @default null
       */
      systemPrompt: string | null;
  } | null;
  /**
   * Location
   * @description Geolocation settings for the scraper
   * @default null
   */
  scrapeOptions_location: {
      /**
       * Country
       * @description Country code for geolocation
       * @default US
       */
      country: string | null;
      /**
       * Languages
       * @description Language preferences
       * @default [
       *       "en-US"
       *     ]
       */
      languages: string[] | null;
  } | null;
  /**
   * Scrape Options Max Age
   * @description Maximum age in seconds for cached content. If content is older than this, it will be re-scraped
   * @default null
   */
  scrapeOptions_maxAge: number | null;
  /**
   * Scrape Options Mobile
   * @description If true, emulate a mobile device when scraping
   * @default null
   */
  scrapeOptions_mobile: boolean | null;
  /**
   * Scrape Options Only Main Content
   * @description If true, attempts to extract only the main content of each page, excluding common elements like headers, navigation bars, and footers. Default is true.
   * @default true
   */
  scrapeOptions_onlyMainContent: boolean;
  /**
   * Scrape Options Parse Pdf
   * @description If true, attempt to parse PDF files encountered during crawling
   * @default null
   */
  scrapeOptions_parsePDF: boolean | null;
  /**
   * Scrape Options Proxy
   * @description Proxy configuration for requests
   * @default null
   */
  scrapeOptions_proxy: string | null;
  /**
   * Scrape Options Remove Base64 Images
   * @description If true, remove base64-encoded images from the scraped content
   * @default null
   */
  scrapeOptions_removeBase64Images: boolean | null;
  /**
   * Scrape Options Skip Tls Verification
   * @description If true, skip TLS certificate verification
   * @default null
   */
  scrapeOptions_skipTlsVerification: boolean | null;
  /**
   * Scrape Options Store In Cache
   * @description If true, store scraped content in cache for future use
   * @default null
   */
  scrapeOptions_storeInCache: boolean | null;
  /**
   * Scrape Options Timeout
   * @description Timeout in milliseconds for each page request. Default is 30000ms (30 seconds)
   * @default null
   */
  scrapeOptions_timeout: number | null;
  /**
   * Scrape Options Wait For
   * @description The duration in milliseconds to wait for page JavaScript to execute and content to load before scraping. Useful for pages with dynamically loaded content. Default is 123ms.
   * @default 123
   */
  scrapeOptions_waitFor: number;
  /**
   * Url
   * @description The base URL to start crawling from. This is the initial entry point for the web crawler.
   */
  url?: string;
  /**
   * Webhook
   * @description An optional webhook URL to receive real-time updates on the crawl job. Events include crawl start (`crawl.started`), page crawled (`crawl.page`), and crawl completion (`crawl.completed` or `crawl.failed`). The payload structure matches the `/scrape` endpoint response.
   * @default null
   */
  webhook: string | null;
};

/**
 * Type of FIRECRAWL's FIRECRAWL_CRAWL tool output.
 */
type FIRECRAWL_CRAWL_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the crawled data. This typically includes a job ID, status, and an array of page data if the crawl is complete and successful. The structure can vary based on the crawl outcome (e.g., success, failure, ongoing).
   */
  data?: {
      [key: string]: unknown;
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
 * Type of FIRECRAWL's FIRECRAWL_EXTRACT tool input.
 */
type FIRECRAWL_EXTRACT_INPUT = {
  /**
   * Enable Web Search
   * @description If `True`, allows crawling links outside initial domains in `urls`; if `False`, restricts to same domains.
   * @default false
   */
  enable_web_search: boolean;
  /**
   * Prompt
   * @description Natural language query for information to extract from URL content. E.g., 'Extract the company mission, whether it supports SSO, etc.'
   * @default null
   */
  prompt: string | null;
  /**
   * Schema
   * @description JSON object defining the desired structure for extracted data (e.g., field names, types). Dictates output format.
   * @default null
   */
  schema: {
      [key: string]: unknown;
  } | null;
  /**
   * Urls
   * @description A list of URLs from which to extract data. Wildcards (e.g., `https://example.com/blog/*`) can be used for crawling multiple pages under a specific path.
   */
  urls?: string[];
};

/**
 * Type of FIRECRAWL's FIRECRAWL_EXTRACT tool output.
 */
type FIRECRAWL_EXTRACT_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the structured data extracted from the URLs. The structure of this data will conform to the provided `schema` or the LLM's interpretation of the `prompt`.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of FIRECRAWL's FIRECRAWL_GET_THE_STATUS_OF_A_CRAWL_JOB tool input.
 */
type FIRECRAWL_GET_THE_STATUS_OF_A_CRAWL_JOB_INPUT = {
  /**
   * Id
   * @description Unique identifier (UUID) of the crawl job.
   */
  id?: string;
};

/**
 * Type of FIRECRAWL's FIRECRAWL_GET_THE_STATUS_OF_A_CRAWL_JOB tool output.
 */
type FIRECRAWL_GET_THE_STATUS_OF_A_CRAWL_JOB_OUTPUT = {
  /**
   * Data
   * @description Details of the crawl job, including `status` (e.g., "scraping", "completed", "failed"), `total` pages attempted, `completed` successfully crawled pages, `creditsUsed`, and `expiresAt` (data expiration timestamp).
   */
  data?: {
      [key: string]: unknown;
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
 * Type of FIRECRAWL's FIRECRAWL_MAP_MULTIPLE_URLS_BASED_ON_OPTIONS tool input.
 */
type FIRECRAWL_MAP_MULTIPLE_URLS_BASED_ON_OPTIONS_INPUT = {
  /**
   * Ignore Sitemap
   * @description If true, the crawler ignores sitemap.xml files, relying on page links for discovery.
   * @default true
   */
  ignoreSitemap: boolean;
  /**
   * Include Subdomains
   * @description If true, includes subdomains of the base URL in the mapping. E.g., if `url` is example.com, blog.example.com is mapped.
   * @default false
   */
  includeSubdomains: boolean;
  /**
   * Limit
   * @description Maximum number of unique links/pages to discover and return; helps control mapping scope and duration.
   * @default 5000
   */
  limit: number;
  /**
   * Search
   * @description Optional search query to guide URL mapping, prioritizing or finding specific page types. 'Smart' search is limited to 1000 initial results in Alpha, but overall mapping can exceed this.
   */
  search?: string;
  /**
   * Url
   * Format: uri
   * @description The primary base URL from which the mapping process will begin.
   */
  url?: string;
};

/**
 * Type of FIRECRAWL's FIRECRAWL_MAP_MULTIPLE_URLS_BASED_ON_OPTIONS tool output.
 */
type FIRECRAWL_MAP_MULTIPLE_URLS_BASED_ON_OPTIONS_OUTPUT = {
  /**
   * Data
   * @description Dictionary containing the URL mapping results, typically a list of discovered URLs or a structured sitemap representation.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of FIRECRAWL's FIRECRAWL_SCRAPE tool input.
 */
type FIRECRAWL_SCRAPE_INPUT = {
  /**
   * Actions
   * @description An optional list of browser actions (e.g., click, type, wait) to perform on the page *before* scraping occurs. Useful for interacting with dynamic content, filling forms, or navigating through page elements.
   * @default null
   */
  actions: {
      /**
       * Key
       * @description Key to press (e.g., 'Enter', 'Escape', 'Tab'), used with 'keypress' actions.
       * @default null
       */
      key: string | null;
      /**
       * Milliseconds
       * @description Specifies a duration in milliseconds, e.g., for a 'wait' action or a delay.
       * @default null
       */
      milliseconds: number | null;
      /**
       * Selector
       * @description CSS selector for the HTML element targeted by the action. Required for actions like 'click' or 'type'.
       * @default null
       */
      selector: string | null;
      /**
       * Text
       * @description Text to be typed into an element, used with 'type' actions.
       * @default null
       */
      text: string | null;
      /**
       * Type
       * @description The type of browser action to perform on the page before scraping. Common actions include 'click', 'type', 'wait', 'keypress', 'scroll'.
       */
      type: string;
  }[] | null;
  /**
   * Exclude Tags
   * @description A list of HTML tags to specifically exclude from the output. Content within these tags will be removed.
   * @default null
   */
  excludeTags: string[] | null;
  /**
   * Formats
   * @description A list of desired output formats for the scraped content. Defaults to ['markdown']. If `json` is included, `jsonOptions` *must* be provided.
   * @default [
   *       "markdown"
   *     ]
   */
  formats: string[];
  /**
   * Include Tags
   * @description A list of HTML tags to specifically include in the output. Content within these tags will be prioritized.
   * @default null
   */
  includeTags: string[] | null;
  /**
   * JsonOptions
   * @description Options for JSON extraction
   * @default null
   */
  jsonOptions: {
      /**
       * Prompt
       * @description A user-defined prompt for data extraction when a specific JSON schema is not provided. Guides the LLM on what information to extract.
       * @default null
       */
      prompt: string | null;
      /**
       * Schema
       * @description A JSON schema defining the structure for data extraction. If provided, the LLM will attempt to populate this schema with data from the page.
       * @default null
       */
      schema: {
          [key: string]: unknown;
      } | null;
      /**
       * System Prompt
       * @description A system-level prompt to guide the LLM during JSON extraction, setting context or desired behavior.
       * @default null
       */
      systemPrompt: string | null;
  } | null;
  /**
   * LocationRequest
   * @description Location settings for the request
   * @default null
   */
  location: {
      /**
       * Country
       * @description ISO 3166-1 alpha-2 country code to make the request from (e.g., 'US', 'AU', 'DE', 'JP').
       * @default US
       */
      country: string;
      /**
       * Languages
       * @description List of preferred languages and locales for the request, in order of priority. Uses format like 'en-US'.
       * @default null
       */
      languages: string[] | null;
  } | null;
  /**
   * Only Main Content
   * @description If true, attempts to extract only the main article content, excluding headers, footers, navigation bars, and ads. Defaults to true.
   * @default true
   */
  onlyMainContent: boolean;
  /**
   * Timeout
   * @description Maximum time in milliseconds to wait for the scraping request to complete. Defaults to 30000.
   * @default 30000
   */
  timeout: number;
  /**
   * Url
   * @description The fully qualified URL of the web page to scrape.
   */
  url?: string;
  /**
   * Wait For
   * @description Time in milliseconds to wait for the page to load or for dynamic content to render before starting the scrape. Defaults to 0.
   * @default 0
   */
  waitFor: number;
};

/**
 * Type of FIRECRAWL's FIRECRAWL_SCRAPE tool output.
 */
type FIRECRAWL_SCRAPE_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the scraped data. Keys correspond to the requested formats (e.g., 'markdown', 'html', 'json', 'screenshot'), and values are the extracted content or metadata for those formats.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of FIRECRAWL's FIRECRAWL_SEARCH tool input.
 */
type FIRECRAWL_SEARCH_INPUT = {
  /**
   * Country
   * @description Country code to tailor search results (e.g., 'us' for United States, default 'us').
   * @default us
   */
  country: string | null;
  /**
   * Formats
   * @description Desired output formats for scraped content of each search result (e.g., 'markdown', 'html'). If None, default scraping applies. Available: 'markdown', 'html', 'rawHtml', 'links', 'screenshot', 'screenshot@fullPage'.
   * @default null
   */
  formats: string[] | null;
  /**
   * Lang
   * @description Language code for search results (e.g., 'en' for English, default 'en').
   * @default en
   */
  lang: string | null;
  /**
   * Limit
   * @description Maximum number of search results to return (1-10, default 5).
   * @default 5
   */
  limit: number | null;
  /**
   * Query
   * @description The search query to execute.
   */
  query?: string;
  /**
   * Timeout
   * @description Maximum time in milliseconds for search and scrape operations (1000-300000, default 60000).
   * @default 60000
   */
  timeout: number | null;
};

/**
 * Type of FIRECRAWL's FIRECRAWL_SEARCH tool output.
 */
type FIRECRAWL_SEARCH_OUTPUT = {
  /**
   * Data
   * @description List of search result items, each with details and potentially scraped content.
   */
  data?: {
      /**
       * Description
       * @description Brief description or snippet of the search result item.
       */
      description?: string;
      /**
       * Html
       * @description Processed HTML content of the page, if requested and available.
       * @default null
       */
      html: string | null;
      /**
       * Links
       * @description List of links extracted from the page, if requested and available.
       * @default null
       */
      links: string[] | null;
      /**
       * Markdown
       * @description Scraped content in Markdown format, if requested and available.
       * @default null
       */
      markdown: string | null;
      /**
       * Metadata
       * @description Additional metadata for the scraped page, including title, description, and source URL.
       */
      metadata?: {
          /**
           * Description
           * @description Meta description of the web page.
           */
          description?: string;
          /**
           * Error
           * @description Error message if an issue occurred while processing this page; null if no error.
           * @default null
           */
          error: string | null;
          /**
           * Source Url
           * @description Original source URL of the web page.
           */
          sourceURL?: string;
          /**
           * Status Code
           * @description HTTP status code when accessing the page.
           */
          statusCode?: number;
          /**
           * Title
           * @description Title of the web page from the search result.
           */
          title?: string;
      };
      /**
       * Raw Html
       * @description Raw HTML content of the page, if requested and available.
       * @default null
       */
      rawHtml: string | null;
      /**
       * Screenshot
       * @description Base64 encoded string of the page screenshot, if 'screenshot' or 'screenshot@fullPage' format was requested.
       * @default null
       */
      screenshot: string | null;
      /**
       * Title
       * @description Title of the search result item.
       */
      title?: string;
      /**
       * Url
       * @description URL of the search result item.
       */
      url?: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description Indicates if the overall search operation was successful.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Warning
   * @description Optional warning message about the search operation.
   * @default null
   */
  warning: string | null;
};

/**
 * Type map of all available tool input types for toolkit "FIRECRAWL".
 */
export type FIRECRAWL_TOOL_INPUTS = {
  CANCEL_A_CRAWL_JOB: FIRECRAWL_CANCEL_A_CRAWL_JOB_INPUT
  CRAWL: FIRECRAWL_CRAWL_INPUT
  EXTRACT: FIRECRAWL_EXTRACT_INPUT
  GET_THE_STATUS_OF_A_CRAWL_JOB: FIRECRAWL_GET_THE_STATUS_OF_A_CRAWL_JOB_INPUT
  MAP_MULTIPLE_URLS_BASED_ON_OPTIONS: FIRECRAWL_MAP_MULTIPLE_URLS_BASED_ON_OPTIONS_INPUT
  SCRAPE: FIRECRAWL_SCRAPE_INPUT
  SEARCH: FIRECRAWL_SEARCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FIRECRAWL".
 */
export type FIRECRAWL_TOOL_OUTPUTS = {
  CANCEL_A_CRAWL_JOB: FIRECRAWL_CANCEL_A_CRAWL_JOB_OUTPUT
  CRAWL: FIRECRAWL_CRAWL_OUTPUT
  EXTRACT: FIRECRAWL_EXTRACT_OUTPUT
  GET_THE_STATUS_OF_A_CRAWL_JOB: FIRECRAWL_GET_THE_STATUS_OF_A_CRAWL_JOB_OUTPUT
  MAP_MULTIPLE_URLS_BASED_ON_OPTIONS: FIRECRAWL_MAP_MULTIPLE_URLS_BASED_ON_OPTIONS_OUTPUT
  SCRAPE: FIRECRAWL_SCRAPE_OUTPUT
  SEARCH: FIRECRAWL_SEARCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FIRECRAWL toolkit.
 */
export const FIRECRAWL = {
  slug: "firecrawl",
  tools: {
    /**
     * Cancels an active or queued web crawl job using its id; attempting to cancel completed, failed, or previously canceled jobs will not change their state.
     */
    CANCEL_A_CRAWL_JOB: "FIRECRAWL_CANCEL_A_CRAWL_JOB",
    /**
     * Initiates a firecrawl web crawl from a given url, applying various filtering and content extraction rules, and polls until the job is complete; ensure the url is accessible and any regex patterns for paths are valid.
     */
    CRAWL: "FIRECRAWL_CRAWL",
    /**
     * Extracts structured data from web pages by initiating an extraction job and polling for completion; requires a natural language `prompt` or a json `schema` (one must be provided).
     */
    EXTRACT: "FIRECRAWL_EXTRACT",
    /**
     * Retrieves the current status, progress, and details of a web crawl job, using the job id obtained when the crawl was initiated.
     */
    GET_THE_STATUS_OF_A_CRAWL_JOB: "FIRECRAWL_GET_THE_STATUS_OF_A_CRAWL_JOB",
    /**
     * Maps a website by discovering urls from a starting base url, with options to customize the crawl via search query, subdomain inclusion, sitemap handling, and result limits; search effectiveness is site-dependent.
     */
    MAP_MULTIPLE_URLS_BASED_ON_OPTIONS: "FIRECRAWL_MAP_MULTIPLE_URLS_BASED_ON_OPTIONS",
    /**
     * Scrapes a publicly accessible url, optionally performing pre-scrape browser actions or extracting structured json using an llm, to retrieve content in specified formats.
     */
    SCRAPE: "FIRECRAWL_SCRAPE",
    /**
     * Performs a web search for a query, scrapes content from the top search results using firecrawl, and returns details in specified formats.
     */
    SEARCH: "FIRECRAWL_SEARCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FIRECRAWL".
 */
export type FIRECRAWL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FIRECRAWL".
 */
export type FIRECRAWL_TRIGGER_EVENTS = {}
