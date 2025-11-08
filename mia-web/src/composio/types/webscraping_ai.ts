// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WEBSCRAPING_AI's WEBSCRAPING_AI_ACCOUNT_INFO tool input.
 */
type WEBSCRAPING_AI_ACCOUNT_INFO_INPUT = object;

/**
 * Type of WEBSCRAPING_AI's WEBSCRAPING_AI_ACCOUNT_INFO tool output.
 */
type WEBSCRAPING_AI_ACCOUNT_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Is Active
       * @description Whether the account is currently active.
       */
      is_active: boolean;
      /**
       * Period End
       * Format: date-time
       * @description ISO 8601 date when billing period ends.
       */
      period_end: string;
      /**
       * Period Start
       * Format: date-time
       * @description ISO 8601 date when billing period started.
       */
      period_start: string;
      /**
       * Remaining Requests
       * @description Number of requests left in current billing period.
       */
      remaining_requests: number;
      /**
       * Subscription Plan
       * @description Name of your subscription plan.
       */
      subscription_plan: string;
      /**
       * Trial End
       * Format: date-time
       * @description ISO 8601 date when trial ends, if in trial period. Otherwise null.
       * @default null
       */
      trial_end: string | null;
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
 * Type of WEBSCRAPING_AI's WEBSCRAPING_AI_GET_HTML tool input.
 */
type WEBSCRAPING_AI_GET_HTML_INPUT = {
  /**
   * Cookies
   * @description Custom cookies to include in the browser session.
   * @default null
   */
  cookies: {
      [key: string]: string;
  } | null;
  /**
   * Device
   * @description Device type to spoof the user-agent as.
   * @default desktop
   * @enum {string}
   */
  device: "mobile" | "desktop";
  /**
   * Headers
   * @description Custom HTTP headers to include in the request.
   * @default null
   */
  headers: {
      [key: string]: string;
  } | null;
  /**
   * Js
   * @description Whether to render JavaScript before fetching.
   * @default false
   */
  js: boolean | null;
  /**
   * Proxy
   * @description Proxy location/country code, e.g., 'us', 'de'.
   * @default null
   */
  proxy: string | null;
  /**
   * Url
   * Format: uri
   * @description The target URL to scrape.
   */
  url?: string;
};

/**
 * Type of WEBSCRAPING_AI's WEBSCRAPING_AI_GET_HTML tool output.
 */
type WEBSCRAPING_AI_GET_HTML_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Headers
       * @description Response headers from the target site.
       */
      headers: {
          [key: string]: unknown;
      };
      /**
       * Html
       * @description Raw HTML content of the requested page.
       */
      html: string;
      /**
       * Status Code
       * @description HTTP status code from the target site.
       */
      status_code: number;
      /**
       * Url
       * @description Final URL after redirects.
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
 * Type of WEBSCRAPING_AI's WEBSCRAPING_AI_GET_RENDERED_HTML tool input.
 */
type WEBSCRAPING_AI_GET_RENDERED_HTML_INPUT = {
  /**
   * Cookies
   * @description Cookies in 'key1=value1; key2=value2;' format.
   * @default null
   */
  cookies: string | null;
  /**
   * Device
   * @description Browser device mode to simulate.
   * @default null
   * @enum {string|null}
   */
  device: "desktop" | "mobile" | null;
  /**
   * Disable Images
   * @description Whether to disable image loading.
   * @default null
   */
  disable_images: boolean | null;
  /**
   * Headers
   * @description Extra HTTP headers as JSON object.
   * @default null
   */
  headers: {
      [key: string]: string;
  } | null;
  /**
   * Js
   * @description Base64-encoded JavaScript to execute after rendering.
   * @default null
   */
  js: string | null;
  /**
   * Locale
   * @description Browser locale (RFC5646 code).
   * @default null
   */
  locale: string | null;
  /**
   * Proxy Type
   * @description Proxy type to use for the request.
   * @default null
   * @enum {string|null}
   */
  proxy_type: "datacenter" | "residential" | null;
  /**
   * Referer
   * Format: uri
   * @description Referer header value.
   * @default null
   */
  referer: string | null;
  /**
   * Timeout
   * @description Request timeout, in milliseconds.
   * @default null
   */
  timeout: number | null;
  /**
   * Url
   * Format: uri
   * @description The target URL to render and fetch HTML.
   */
  url?: string;
  /**
   * User Agent
   * @description Custom User-Agent string.
   * @default null
   */
  user_agent: string | null;
  /**
   * Wait
   * @description Wait time before capture, in milliseconds.
   * @default null
   */
  wait: number | null;
};

/**
 * Type of WEBSCRAPING_AI's WEBSCRAPING_AI_GET_RENDERED_HTML tool output.
 */
type WEBSCRAPING_AI_GET_RENDERED_HTML_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Rendered HTML content of the page.
       */
      content: string;
      /**
       * Headers
       * @description Response headers from the rendered request.
       */
      headers: {
          [key: string]: string;
      };
      /**
       * Status Code
       * @description HTTP status code of the rendered response.
       */
      status_code: number;
      /**
       * Url
       * @description Final URL after redirects.
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
 * Type of WEBSCRAPING_AI's WEBSCRAPING_AI_GET_TEXT tool input.
 */
type WEBSCRAPING_AI_GET_TEXT_INPUT = {
  /**
   * Locale
   * @description Browser locale/language (e.g., 'en-US').
   * @default null
   */
  locale: string | null;
  /**
   * Proxy
   * @description Proxy region to use for the request (e.g., 'us' or 'eu').
   * @default null
   * @enum {string|null}
   */
  proxy: "us" | "eu" | null;
  /**
   * Render Js
   * @description Whether to render JavaScript on the page before extracting text.
   * @default false
   */
  render_js: boolean;
  /**
   * Session
   * @description Session ID for preserving cookies across multiple calls.
   * @default null
   */
  session: string | null;
  /**
   * Timeout
   * @description Request timeout in seconds (must be >= 1).
   * @default null
   */
  timeout: number | null;
  /**
   * Url
   * @description The target URL to scrape text from.
   */
  url?: string;
};

/**
 * Type of WEBSCRAPING_AI's WEBSCRAPING_AI_GET_TEXT tool output.
 */
type WEBSCRAPING_AI_GET_TEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if status == 'error'.
       * @default null
       */
      error: string | null;
      /**
       * Status
       * @description Overall status of the scrape operation.
       * @enum {string}
       */
      status: "ok" | "error";
      /**
       * Text
       * @description Extracted raw text from the web page.
       */
      text: string;
      /**
       * Url
       * @description The URL that was scraped.
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
 * Type map of all available tool input types for toolkit "WEBSCRAPING_AI".
 */
export type WEBSCRAPING_AI_TOOL_INPUTS = {
  ACCOUNT_INFO: WEBSCRAPING_AI_ACCOUNT_INFO_INPUT
  GET_HTML: WEBSCRAPING_AI_GET_HTML_INPUT
  GET_RENDERED_HTML: WEBSCRAPING_AI_GET_RENDERED_HTML_INPUT
  GET_TEXT: WEBSCRAPING_AI_GET_TEXT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WEBSCRAPING_AI".
 */
export type WEBSCRAPING_AI_TOOL_OUTPUTS = {
  ACCOUNT_INFO: WEBSCRAPING_AI_ACCOUNT_INFO_OUTPUT
  GET_HTML: WEBSCRAPING_AI_GET_HTML_OUTPUT
  GET_RENDERED_HTML: WEBSCRAPING_AI_GET_RENDERED_HTML_OUTPUT
  GET_TEXT: WEBSCRAPING_AI_GET_TEXT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WEBSCRAPING_AI toolkit.
 */
export const WEBSCRAPING_AI = {
  slug: "webscraping_ai",
  tools: {
    /**
     * Tool to retrieve account api call quota and usage. use when checking remaining requests and subscription details.
     */
    ACCOUNT_INFO: "WEBSCRAPING_AI_ACCOUNT_INFO",
    /**
     * Tool to retrieve html content of a web page. use when you need raw page html, optionally rendered with javascript.
     */
    GET_HTML: "WEBSCRAPING_AI_GET_HTML",
    /**
     * Tool to retrieve fully rendered html of a webpage. use when js-generated content must be included.
     */
    GET_RENDERED_HTML: "WEBSCRAPING_AI_GET_RENDERED_HTML",
    /**
     * Tool to retrieve raw text content from a specified web page. use when you need plain text extraction from a url.
     */
    GET_TEXT: "WEBSCRAPING_AI_GET_TEXT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WEBSCRAPING_AI".
 */
export type WEBSCRAPING_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WEBSCRAPING_AI".
 */
export type WEBSCRAPING_AI_TRIGGER_EVENTS = {}
