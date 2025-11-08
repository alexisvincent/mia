// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SCRAPINGBEE's SCRAPINGBEE_DATA_EXTRACTION tool input.
 */
type SCRAPINGBEE_DATA_EXTRACTION_INPUT = {
  /**
   * Api Key
   * @description Your ScrapingBee API key.
   */
  api_key?: string;
  /**
   * Block Resources
   * @description Block images, CSS, and resources to speed up extraction.
   * @default false
   */
  block_resources: boolean;
  /**
   * Country Code
   * @description Two-letter country code for proxy geolocation (e.g., 'us', 'de').
   * @default null
   */
  country_code: string | null;
  /**
   * Custom Headers
   * @description Custom HTTP headers as a JSON object string.
   * @default null
   */
  custom_headers: {
      [key: string]: string;
  } | null;
  /**
   * Device
   * @description Emulate device type (desktop or mobile).
   * @default desktop
   * @enum {string}
   */
  device: "desktop" | "mobile";
  /**
   * Extractor
   * @description JSON object defining fields to extract and their CSS/XPath selectors. For nested selectors, use object with 'selector' and optional 'type' keys.
   */
  extractor?: {
      [key: string]: unknown;
  };
  /**
   * Javascript
   * @description Whether to render JavaScript before extraction.
   * @default false
   */
  javascript: boolean;
  /**
   * Premium Proxy
   * @description Use premium proxy for higher reliability.
   * @default false
   */
  premium_proxy: boolean;
  /**
   * Url
   * Format: uri
   * @description The webpage URL to extract data from.
   */
  url?: string;
  /**
   * Wait
   * @description Seconds to wait before extraction (for dynamic content).
   * @default null
   */
  wait: number | null;
};

/**
 * Type of SCRAPINGBEE's SCRAPINGBEE_DATA_EXTRACTION tool output.
 */
type SCRAPINGBEE_DATA_EXTRACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Extracted Data
       * @description Structured data as defined by the extractor mapping.
       */
      extracted_data: {
          [key: string]: unknown;
      };
      /**
       * Message
       * @description Informational message about the extraction.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description HTTP status code returned by the API.
       */
      status: number;
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
 * Type of SCRAPINGBEE's SCRAPINGBEE_HTML_FETCH tool input.
 */
type SCRAPINGBEE_HTML_FETCH_INPUT = {
  /**
   * Block Ads
   * @description Block ads and tracking scripts.
   * @default false
   */
  block_ads: boolean;
  /**
   * Block Resources
   * @description Comma-separated resource types to block (e.g., 'image,stylesheet').
   * @default null
   */
  block_resources: string | null;
  /**
   * Cookies
   * @description Cookies to send in requests (HTTP header string).
   * @default null
   */
  cookies: string | null;
  /**
   * Country Code
   * @description Two-letter country code for geolocation (e.g., 'us').
   * @default null
   */
  country_code: string | null;
  /**
   * Device
   * @description Device type to emulate ('desktop' or 'mobile').
   * @default null
   * @enum {string|null}
   */
  device: "desktop" | "mobile" | null;
  /**
   * Extract Rules
   * @description Extraction rules (CSS selector or JSONPath).
   * @default null
   */
  extract_rules: string | null;
  /**
   * Js Scenario
   * @description JSON scenario for custom headless browser actions.
   * @default null
   */
  js_scenario: string | null;
  /**
   * Js Snippet
   * @description JavaScript snippet to execute before returning content.
   * @default null
   */
  js_snippet: string | null;
  /**
   * Premium Proxy
   * @description Use premium proxy for scraping.
   * @default false
   */
  premium_proxy: boolean;
  /**
   * Render Js
   * @description Render JavaScript before returning HTML.
   * @default false
   */
  render_js: boolean;
  /**
   * Retry
   * @description Number of retries on request failure.
   * @default null
   */
  retry: number | null;
  /**
   * Screenshot
   * @description Return screenshot as base64-encoded PNG.
   * @default false
   */
  screenshot: boolean;
  /**
   * Screenshot Full Page
   * @description Capture full-page screenshot instead of only viewport.
   * @default false
   */
  screenshot_full_page: boolean;
  /**
   * Screenshot Selector
   * @description CSS selector of element to screenshot.
   * @default null
   */
  screenshot_selector: string | null;
  /**
   * Stealth Proxy
   * @description Use stealth (undetectable) proxy mode.
   * @default false
   */
  stealth_proxy: boolean;
  /**
   * Url
   * @description The URL to scrape.
   */
  url?: string;
  /**
   * Wait
   * @description Milliseconds to wait before returning content.
   * @default null
   */
  wait: number | null;
  /**
   * Wait For
   * @description CSS selector to wait for before returning content.
   * @default null
   */
  wait_for: string | null;
};

/**
 * Type of SCRAPINGBEE's SCRAPINGBEE_HTML_FETCH tool output.
 */
type SCRAPINGBEE_HTML_FETCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cookies
       * @description Cookies set by the target site.
       */
      cookies: {
          [key: string]: string;
      };
      /**
       * Headers
       * @description HTTP response headers from the target site.
       */
      headers: {
          [key: string]: string;
      };
      /**
       * Html
       * @description Raw HTML content of the requested page.
       */
      html: string;
      /**
       * Screenshot
       * @description Screenshot as base64-encoded PNG if requested.
       * @default null
       */
      screenshot: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by the target site.
       */
      status_code: number;
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
 * Type of SCRAPINGBEE's SCRAPINGBEE_SCRAPING_BEE_PROXY_MODE tool input.
 */
type SCRAPINGBEE_SCRAPING_BEE_PROXY_MODE_INPUT = {
  /**
   * Block Ads
   * @description Block ads and tracking scripts to speed up scraping.
   * @default false
   */
  block_ads: boolean;
  /**
   * Block Resources
   * @description List of resource types to block (e.g., ['image','stylesheet']).
   * @default null
   */
  block_resources: string[] | null;
  /**
   * Cookies
   * @description Cookies to send with the request as a key-value mapping.
   * @default null
   */
  cookies: {
      [key: string]: string;
  } | null;
  /**
   * Country Code
   * @description Two-letter country code for geolocated proxy (e.g., 'us', 'fr').
   * @default null
   * @enum {string|null}
   */
  country_code: "us" | "de" | "fr" | "uk" | "ca" | "it" | "es" | null;
  /**
   * Forward Headers
   * @description Forward original request headers to the target site.
   * @default false
   */
  forward_headers: boolean;
  /**
   * Headers
   * @description Additional HTTP headers to send as a key-value mapping.
   * @default null
   */
  headers: {
      [key: string]: string;
  } | null;
  /**
   * Js Scenario
   * @description Custom JavaScript scenario name for advanced interactions.
   * @default null
   */
  js_scenario: string | null;
  /**
   * Premium Proxy
   * @description Use premium proxies for higher reliability.
   * @default false
   */
  premium_proxy: boolean;
  /**
   * Render Js
   * @description Enable JavaScript rendering before returning content.
   * @default false
   */
  render_js: boolean;
  /**
   * Session Id
   * @description Session identifier to keep the same IP for multiple requests.
   * @default null
   */
  session_id: string | null;
  /**
   * Stealth Proxy
   * @description Use stealth proxy mode for extra undetectability.
   * @default false
   */
  stealth_proxy: boolean;
  /**
   * Timeout
   * @description Request timeout in milliseconds.
   * @default 60000
   */
  timeout: number;
  /**
   * Url
   * Format: uri
   * @description The target URL to scrape through ScrapingBee Proxy Mode.
   */
  url?: string;
};

/**
 * Type of SCRAPINGBEE's SCRAPINGBEE_SCRAPING_BEE_PROXY_MODE tool output.
 */
type SCRAPINGBEE_SCRAPING_BEE_PROXY_MODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Raw HTML content or screenshot returned by ScrapingBee.
       */
      content: string;
      /**
       * Cookies
       * @description Cookies received from the proxied request.
       */
      cookies: {
          [key: string]: string;
      };
      /**
       * Headers
       * @description HTTP response headers from the proxied request.
       */
      headers: {
          [key: string]: string;
      };
      /**
       * Status Code
       * @description HTTP status code returned by ScrapingBee Proxy Mode.
       */
      status_code: number;
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
 * Type of SCRAPINGBEE's SCRAPINGBEE_STEALTH_PROXY tool input.
 */
type SCRAPINGBEE_STEALTH_PROXY_INPUT = {
  /**
   * Block Resources
   * @description Block images, styles, and fonts for faster loads.
   * @default false
   */
  block_resources: boolean;
  /**
   * Cookies
   * @description Custom cookies as JSON-encoded string.
   * @default null
   */
  cookies: string | null;
  /**
   * Country Code
   * @description Two-letter country code for proxy geolocation (e.g., 'us', 'de').
   * @default null
   */
  country_code: string | null;
  /**
   * Device
   * @description Device type to emulate during rendering.
   * @default null
   * @enum {string|null}
   */
  device: "desktop" | "mobile" | "tablet" | null;
  /**
   * Extract Rules
   * @description Extraction rules in JSON string for structured data.
   * @default null
   */
  extract_rules: string | null;
  /**
   * Forward Headers
   * @description Forward original request headers from the browser.
   * @default false
   */
  forward_headers: boolean;
  /**
   * Headers
   * @description Additional HTTP headers as JSON-encoded string.
   * @default null
   */
  headers: string | null;
  /**
   * Js Render
   * @description Render JavaScript on the page before returning the response.
   * @default false
   */
  js_render: boolean;
  /**
   * Premium Proxy
   * @description Use premium proxies for higher reliability.
   * @default false
   */
  premium_proxy: boolean;
  /**
   * Return Page Source
   * @description Return the raw page source instead of text.
   * @default false
   */
  return_page_source: boolean;
  /**
   * Stealth Proxy
   * @description Enable stealth proxy mode. Use when the target site blocks bots.
   * @default false
   */
  stealth_proxy: boolean;
  /**
   * Url
   * Format: uri
   * @description The URL of the webpage to retrieve using stealth proxy.
   */
  url?: string;
  /**
   * Wait
   * @description Wait time in milliseconds before returning the response.
   * @default null
   */
  wait: number | null;
};

/**
 * Type of SCRAPINGBEE's SCRAPINGBEE_STEALTH_PROXY tool output.
 */
type SCRAPINGBEE_STEALTH_PROXY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Scraped content or page source returned by ScrapingBee.
       */
      body: string;
      /**
       * Headers
       * @description Headers returned from the scraped page.
       */
      headers: {
          [key: string]: string;
      };
      /**
       * Original Status
       * @description Original HTTP status code from the final destination before proxy.
       * @default null
       */
      original_status: number | null;
      /**
       * Status Code
       * @description HTTP status code from the target site via ScrapingBee.
       */
      status_code: number;
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
 * Type of SCRAPINGBEE's SCRAPINGBEE_USAGE_STATS tool input.
 */
type SCRAPINGBEE_USAGE_STATS_INPUT = object;

/**
 * Type of SCRAPINGBEE's SCRAPINGBEE_USAGE_STATS tool output.
 */
type SCRAPINGBEE_USAGE_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Max Requests
       * @description Maximum requests allowed in the billing period.
       */
      max_requests: number;
      /**
       * Next Reset
       * @description ISO8601 date/time of the next usage reset.
       */
      next_reset: string;
      /**
       * Used Requests
       * @description Number of requests used in the current billing period.
       */
      used_requests: number;
      /**
       * Valid
       * @description Indicates if the API key is valid.
       */
      valid: boolean;
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
 * Type map of all available tool input types for toolkit "SCRAPINGBEE".
 */
export type SCRAPINGBEE_TOOL_INPUTS = {
  DATA_EXTRACTION: SCRAPINGBEE_DATA_EXTRACTION_INPUT
  HTML_FETCH: SCRAPINGBEE_HTML_FETCH_INPUT
  SCRAPING_BEE_PROXY_MODE: SCRAPINGBEE_SCRAPING_BEE_PROXY_MODE_INPUT
  STEALTH_PROXY: SCRAPINGBEE_STEALTH_PROXY_INPUT
  USAGE_STATS: SCRAPINGBEE_USAGE_STATS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SCRAPINGBEE".
 */
export type SCRAPINGBEE_TOOL_OUTPUTS = {
  DATA_EXTRACTION: SCRAPINGBEE_DATA_EXTRACTION_OUTPUT
  HTML_FETCH: SCRAPINGBEE_HTML_FETCH_OUTPUT
  SCRAPING_BEE_PROXY_MODE: SCRAPINGBEE_SCRAPING_BEE_PROXY_MODE_OUTPUT
  STEALTH_PROXY: SCRAPINGBEE_STEALTH_PROXY_OUTPUT
  USAGE_STATS: SCRAPINGBEE_USAGE_STATS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SCRAPINGBEE toolkit.
 */
export const SCRAPINGBEE = {
  slug: "scrapingbee",
  tools: {
    /**
     * Tool to extract structured data from a webpage using css or xpath selectors. use scrapingbee's extract rules feature.
     */
    DATA_EXTRACTION: "SCRAPINGBEE_DATA_EXTRACTION",
    /**
     * Tool to fetch html or screenshot via scrapingbee html api. use when you need page markup or image after optional js rendering and resource controls.
     */
    HTML_FETCH: "SCRAPINGBEE_HTML_FETCH",
    /**
     * Tool to fetch web content via scrapingbee's proxy mode. use when you need to route requests through scrapingbee proxies with optional js rendering and resource blocking.
     */
    SCRAPING_BEE_PROXY_MODE: "SCRAPINGBEE_SCRAPING_BEE_PROXY_MODE",
    /**
     * Tool to perform stealth scraping via scrapingbee's stealth proxy mode. use when you encounter anti-bot measures requiring undetectable requests.
     */
    STEALTH_PROXY: "SCRAPINGBEE_STEALTH_PROXY",
    /**
     * Tool to retrieve usage statistics for your scrapingbee account. use when you need to monitor remaining credits and request count.
     */
    USAGE_STATS: "SCRAPINGBEE_USAGE_STATS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SCRAPINGBEE".
 */
export type SCRAPINGBEE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SCRAPINGBEE".
 */
export type SCRAPINGBEE_TRIGGER_EVENTS = {}
