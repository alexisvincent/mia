// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SCRAPINGANT's SCRAPINGANT_EXTRACT_CONTENT_AS_MARKDOWN tool input.
 */
type SCRAPINGANT_EXTRACT_CONTENT_AS_MARKDOWN_INPUT = {
  /**
   * Block Resource
   * @description List of resource types to block (e.g., image, script, stylesheet, font, media, websocket, other).
   * @default null
   */
  block_resource: string[] | null;
  /**
   * Browser
   * @description Enables the use of a headless browser for scraping. Default is true.
   * @default null
   */
  browser: boolean | null;
  /**
   * Cookies
   * @description Cookies to include with the request.
   * @default null
   */
  cookies: string | null;
  /**
   * Js Snippet
   * @description Base64-encoded JavaScript to execute on the page after it loads.
   * @default null
   */
  js_snippet: string | null;
  /**
   * Method
   * @description HTTP method to use for the request.
   * @default get
   * @enum {string}
   */
  method: "get" | "post" | "put" | "delete";
  /**
   * Proxy Country
   * @description Specifies the country for the proxy (e.g., US, GB).
   * @default null
   */
  proxy_country: string | null;
  /**
   * Proxy Type
   * @description Specifies the type of proxy to use.
   * @default null
   */
  proxy_type: string | null;
  /**
   * Return Page Source
   * @description Returns the raw HTML as received from the server, without JavaScript rendering. Default is false.
   * @default null
   */
  return_page_source: boolean | null;
  /**
   * Url
   * Format: uri
   * @description The URL of the web page to scrape and convert to Markdown.
   */
  url?: string;
  /**
   * Wait For Selector
   * @description CSS selector to wait for before returning the result.
   * @default null
   */
  wait_for_selector: string | null;
};

/**
 * Type of SCRAPINGANT's SCRAPINGANT_EXTRACT_CONTENT_AS_MARKDOWN tool output.
 */
type SCRAPINGANT_EXTRACT_CONTENT_AS_MARKDOWN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Detail
       * @description Error detail if the request failed.
       * @default null
       */
      detail: string | null;
      /**
       * Markdown
       * @description The extracted content in Markdown format.
       * @default null
       */
      markdown: string | null;
      /**
       * Url
       * Format: uri
       * @description The original URL of the scraped page.
       * @default null
       */
      url: string | null;
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
 * Type of SCRAPINGANT's SCRAPINGANT_EXTRACT_DATA_WITH_AI tool input.
 */
type SCRAPINGANT_EXTRACT_DATA_WITH_AI_INPUT = {
  /**
   * Cookies
   * @description Cookies to use for the request. (e.g. cookie1=value1; cookie2=value2)
   * @default null
   */
  cookies: string | null;
  /**
   * Enable Javascript
   * @description Enable browser rendering. (default: true)
   * @default null
   */
  enable_javascript: boolean | null;
  /**
   * Extract Properties
   * @description A free-form text describing the data you want to extract.
   */
  extract_properties?: string;
  /**
   * Proxy Country
   * @description Proxy country to use for the request. (e.g. US, GB, DE)
   * @default null
   */
  proxy_country: string | null;
  /**
   * Proxy Type
   * @description Proxy type to use for the request. (datacenter, residential)
   * @default null
   */
  proxy_type: string | null;
  /**
   * Return Text
   * @description Return text content of the page. (default: false)
   * @default null
   */
  return_text: boolean | null;
  /**
   * Url
   * @description The URL of the page to extract data from.
   */
  url?: string;
  /**
   * Wait For Selector
   * @description Wait for a specific selector to appear on the page before extracting data.
   * @default null
   */
  wait_for_selector: string | null;
};

/**
 * Type of SCRAPINGANT's SCRAPINGANT_EXTRACT_DATA_WITH_AI tool output.
 */
type SCRAPINGANT_EXTRACT_DATA_WITH_AI_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Extracted data as a JSON object.
       * @default null
       */
      content: {
          [key: string]: unknown;
      } | null;
      /**
       * Status Code
       * @description HTTP status code of the response.
       * @default null
       */
      status_code: number | null;
      /**
       * Text
       * @description Text content of the page.
       * @default null
       */
      text: string | null;
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
 * Type of SCRAPINGANT's SCRAPINGANT_GET_API_CREDITS_USAGE tool input.
 */
type SCRAPINGANT_GET_API_CREDITS_USAGE_INPUT = object;

/**
 * Type of SCRAPINGANT's SCRAPINGANT_GET_API_CREDITS_USAGE tool output.
 */
type SCRAPINGANT_GET_API_CREDITS_USAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Credits
       * @description The total number of API credits available in the current plan.
       */
      api_credits: number;
      /**
       * Api Credits Left
       * @description The number of remaining API credits for the current billing period.
       */
      api_credits_left: number;
      /**
       * Period End
       * @description The end date of the current billing period.
       */
      period_end: string;
      /**
       * Period Start
       * @description The start date of the current billing period.
       */
      period_start: string;
      /**
       * Subscription
       * @description The name of the current subscription plan.
       */
      subscription: string;
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
 * Type of SCRAPINGANT's SCRAPINGANT_SCRAPE_WEB_PAGE tool input.
 */
type SCRAPINGANT_SCRAPE_WEB_PAGE_INPUT = {
  /**
   * Block Resource
   * @description List of resource types to block. Requires headless browser.
   * @default null
   */
  block_resource: string[] | null;
  /**
   * Browser
   * @description Enable to use a headless browser for scraping. Defaults to True. If False, JavaScript will not be rendered.
   * @default true
   */
  browser: boolean | null;
  /**
   * Cookies
   * @description Cookies to pass with the scraping request.
   * @default null
   */
  cookies: string | null;
  /**
   * Js Snippet
   * @description Base64 encoded JavaScript snippet to execute on the page. Requires headless browser.
   * @default null
   */
  js_snippet: string | null;
  /**
   * Proxy Country
   * @description Specifies the country for the proxy.
   * @default null
   */
  proxy_country: string | null;
  /**
   * ProxyType
   * @description Specifies the type of proxy to use.
   * @default null
   * @enum {string|null}
   */
  proxy_type: "datacenter" | "residential" | null;
  /**
   * Return Page Source
   * @description Enable to return the raw HTML from the server without JavaScript rendering. Requires headless browser. Defaults to False.
   * @default false
   */
  return_page_source: boolean | null;
  /**
   * Url
   * Format: uri
   * @description URL of the web page to scrape.
   */
  url?: string;
  /**
   * Wait For Selector
   * @description CSS selector to wait for before returning the result. Requires headless browser.
   * @default null
   */
  wait_for_selector: string | null;
};

/**
 * Type of SCRAPINGANT's SCRAPINGANT_SCRAPE_WEB_PAGE tool output.
 */
type SCRAPINGANT_SCRAPE_WEB_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The HTML content of the scraped web page.
       */
      content: string;
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
 * Type of SCRAPINGANT's SCRAPINGANT_SCRAPE_WITH_EXTENDED_JSON_OUTPUT tool input.
 */
type SCRAPINGANT_SCRAPE_WITH_EXTENDED_JSON_OUTPUT_INPUT = {
  /**
   * Url
   * @description The URL of the web page to scrape.
   */
  url?: string;
};

/**
 * Type of SCRAPINGANT's SCRAPINGANT_SCRAPE_WITH_EXTENDED_JSON_OUTPUT tool output.
 */
type SCRAPINGANT_SCRAPE_WITH_EXTENDED_JSON_OUTPUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cookies
       * @description Cookies set by the web page.
       */
      cookies: string;
      /**
       * Headers
       * @description Response headers.
       */
      headers: {
          /** Name */
          name: string;
          /** Value */
          value: string;
      }[];
      /**
       * Html
       * @description The HTML content of the scraped web page.
       */
      html: string;
      /**
       * Iframes
       * @description Iframes within the web page.
       */
      iframes: {
          /** Html */
          html: string;
          /** Src */
          src: string;
      }[];
      /**
       * Status Code
       * @description The HTTP status code returned by the web page.
       */
      status_code: number;
      /**
       * Text
       * @description The text content extracted from the web page.
       */
      text: string;
      /**
       * Xhrs
       * @description XHR and Fetch requests made by the web page.
       */
      xhrs: {
          /**
           * Body
           * @default null
           */
          body: string | null;
          /** Headers */
          headers: {
              /** Name */
              name: string;
              /** Value */
              value: string;
          }[];
          /** Method */
          method: string;
          /**
           * Request Body
           * @default null
           */
          request_body: string | null;
          /** Status */
          status: number;
          /** Url */
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
 * Type map of all available tool input types for toolkit "SCRAPINGANT".
 */
export type SCRAPINGANT_TOOL_INPUTS = {
  EXTRACT_CONTENT_AS_MARKDOWN: SCRAPINGANT_EXTRACT_CONTENT_AS_MARKDOWN_INPUT
  EXTRACT_DATA_WITH_AI: SCRAPINGANT_EXTRACT_DATA_WITH_AI_INPUT
  GET_API_CREDITS_USAGE: SCRAPINGANT_GET_API_CREDITS_USAGE_INPUT
  SCRAPE_WEB_PAGE: SCRAPINGANT_SCRAPE_WEB_PAGE_INPUT
  SCRAPE_WITH_EXTENDED_JSON_OUTPUT: SCRAPINGANT_SCRAPE_WITH_EXTENDED_JSON_OUTPUT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SCRAPINGANT".
 */
export type SCRAPINGANT_TOOL_OUTPUTS = {
  EXTRACT_CONTENT_AS_MARKDOWN: SCRAPINGANT_EXTRACT_CONTENT_AS_MARKDOWN_OUTPUT
  EXTRACT_DATA_WITH_AI: SCRAPINGANT_EXTRACT_DATA_WITH_AI_OUTPUT
  GET_API_CREDITS_USAGE: SCRAPINGANT_GET_API_CREDITS_USAGE_OUTPUT
  SCRAPE_WEB_PAGE: SCRAPINGANT_SCRAPE_WEB_PAGE_OUTPUT
  SCRAPE_WITH_EXTENDED_JSON_OUTPUT: SCRAPINGANT_SCRAPE_WITH_EXTENDED_JSON_OUTPUT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SCRAPINGANT toolkit.
 */
export const SCRAPINGANT = {
  slug: "scrapingant",
  tools: {
    /**
     * This tool extracts content from a given url and converts it into markdown format. it is particularly useful for preparing text for language learning models (llms) and retrieval-augmented generation (rag) systems. it supports get, post, put, and delete methods.
     */
    EXTRACT_CONTENT_AS_MARKDOWN: "SCRAPINGANT_EXTRACT_CONTENT_AS_MARKDOWN",
    /**
     * This tool allows you to extract structured data from a web page using scrapingant's ai-powered extraction capabilities. you provide a url and an ai query (prompt) describing what data you want to extract, and the tool returns the extracted data in a structured format. it supports additional parameters for browser rendering, proxies, and cookies to handle dynamic content and localization.
     */
    EXTRACT_DATA_WITH_AI: "SCRAPINGANT_EXTRACT_DATA_WITH_AI",
    /**
     * This tool retrieves the current api credit usage status for the authenticated scrapingant account. it enables users to monitor their consumption of api credits, check their current usage against the subscription limits, and manage their api credits effectively.
     */
    GET_API_CREDITS_USAGE: "SCRAPINGANT_GET_API_CREDITS_USAGE",
    /**
     * This tool scrapes a web page using the scrapingant api. it fetches the html content of the specified url. users can customize the scraping behavior by enabling a headless browser, using proxies, waiting for specific elements, executing javascript, passing cookies, and blocking certain resources.
     */
    SCRAPE_WEB_PAGE: "SCRAPINGANT_SCRAPE_WEB_PAGE",
    /**
     * This tool scrapes a target url and returns an extended json response. it utilizes scrapingant's /v2/extended endpoint, providing richer information than the standard scraping tool, including page html, cookies, headers, and additional details.
     */
    SCRAPE_WITH_EXTENDED_JSON_OUTPUT: "SCRAPINGANT_SCRAPE_WITH_EXTENDED_JSON_OUTPUT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SCRAPINGANT".
 */
export type SCRAPINGANT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SCRAPINGANT".
 */
export type SCRAPINGANT_TRIGGER_EVENTS = {}
