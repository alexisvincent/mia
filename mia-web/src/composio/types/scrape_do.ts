// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SCRAPE_DO's SCRAPE_DO_GET_ACCOUNT_INFO tool input.
 */
type SCRAPE_DO_GET_ACCOUNT_INFO_INPUT = {
  /**
   * Token
   * @description Authentication token for Scrape.do API
   */
  token?: string;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_GET_ACCOUNT_INFO tool output.
 */
type SCRAPE_DO_GET_ACCOUNT_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Concurrent Request
       * @description Maximum number of concurrent requests allowed
       */
      concurrent_request: number;
      /**
       * Is Active
       * @description Subscription status indicating if the account is active
       */
      is_active: boolean;
      /**
       * Max Monthly Request
       * @description Maximum number of requests allowed per month
       */
      max_monthly_request: number;
      /**
       * Remaining Concurrent Request
       * @description Number of concurrent requests remaining
       */
      remaining_concurrent_request: number;
      /**
       * Remaining Monthly Request
       * @description Number of monthly requests remaining
       */
      remaining_monthly_request: number;
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
 * Type of SCRAPE_DO's SCRAPE_DO_GET_RENDER_PAGE tool input.
 */
type SCRAPE_DO_GET_RENDER_PAGE_INPUT = {
  /**
   * Block Resources
   * @description Block CSS and image resources
   * @default true
   */
  blockResources: boolean;
  /**
   * Custom Headers
   * @description Enable custom header forwarding
   * @default false
   */
  customHeaders: boolean;
  /**
   * Custom Wait
   * @description Additional wait time in milliseconds after page load (0-35000)
   * @default 0
   */
  customWait: number;
  /**
   * Device
   * @description Device type to emulate (desktop/mobile/tablet)
   * @default desktop
   * @enum {string}
   */
  device: "desktop" | "mobile" | "tablet";
  /**
   * Height
   * @description Browser viewport height in pixels
   * @default 1080
   */
  height: number;
  /**
   * Render
   * @description Enable JavaScript rendering
   * @default true
   */
  render: boolean;
  /**
   * Timeout
   * @description Maximum timeout in milliseconds (5000-120000)
   * @default 60000
   */
  timeout: number;
  /**
   * Url
   * @description The target web page URL to scrape
   */
  url?: string;
  /**
   * Wait Selector
   * @description CSS selector to wait for before returning content
   * @default null
   */
  waitSelector: string | null;
  /**
   * Wait Until
   * @description When to consider navigation succeeded
   * @default domcontentloaded
   * @enum {string}
   */
  waitUntil: "domcontentloaded" | "networkidle0" | "networkidle2" | "load";
  /**
   * Width
   * @description Browser viewport width in pixels
   * @default 1920
   */
  width: number;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_GET_RENDER_PAGE tool output.
 */
type SCRAPE_DO_GET_RENDER_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The rendered HTML content of the page
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
 * Type of SCRAPE_DO's SCRAPE_DO_SCRAPE_DO_GET_PAGE tool input.
 */
type SCRAPE_DO_SCRAPE_DO_GET_PAGE_INPUT = {
  /**
   * Block Resources
   * @description Block CSS and image sources
   * @default true
   */
  block_resources: boolean;
  /**
   * Custom Headers
   * @description Handle all request headers
   * @default false
   */
  custom_headers: boolean;
  /**
   * Device
   * @description Specify device type (desktop, mobile, tablet)
   * @default desktop
   */
  device: string;
  /**
   * Disable Redirection
   * @description Disable request redirection
   * @default false
   */
  disable_redirection: boolean;
  /**
   * Extra Headers
   * @description Add/modify headers
   * @default false
   */
  extra_headers: boolean;
  /**
   * Geo Code
   * @description Choose country for target web page (e.g. 'us', 'gb')
   * @default null
   */
  geo_code: string | null;
  /**
   * Height
   * @description Browser viewport height
   * @default 1080
   */
  height: number;
  /**
   * Output
   * @description Output format (raw or markdown)
   * @default raw
   */
  output: string;
  /**
   * Render
   * @description Enable headless browser rendering
   * @default false
   */
  render: boolean;
  /**
   * Retry Timeout
   * @description Maximum retry timeout in ms (5000-55000)
   * @default null
   */
  retry_timeout: number | null;
  /**
   * Return Json
   * @description Return network requests in JSON format
   * @default false
   */
  return_json: boolean;
  /**
   * Set Cookies
   * @description Set cookies for target web page
   * @default null
   */
  set_cookies: string | null;
  /**
   * Super
   * @description Use residential & mobile proxy networks
   * @default false
   */
  super: boolean;
  /**
   * Timeout
   * @description Maximum request timeout in ms (5000-120000)
   * @default null
   */
  timeout: number | null;
  /**
   * Url
   * @description Target web page URL to scrape
   */
  url?: string;
  /**
   * Width
   * @description Browser viewport width
   * @default 1920
   */
  width: number;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SCRAPE_DO_GET_PAGE tool output.
 */
type SCRAPE_DO_SCRAPE_DO_GET_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The scraped content from the target webpage
       */
      content: string;
      /**
       * Headers
       * @description Response headers including Scrape.do specific headers
       */
      headers: {
          [key: string]: unknown;
      };
      /**
       * Status Code
       * @description HTTP status code of the response
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
 * Type of SCRAPE_DO's SCRAPE_DO_SCRAPE_DO_PROXY_MODE tool input.
 */
type SCRAPE_DO_SCRAPE_DO_PROXY_MODE_INPUT = {
  /**
   * Custom Headers
   * @description Whether to forward custom headers to the target website
   * @default true
   */
  custom_headers: boolean;
  /**
   * Device
   * @description Device type to simulate (desktop, mobile, tablet)
   * @default desktop
   */
  device: string;
  /**
   * Geo Code
   * @description Geographic location for the request (e.g., 'us', 'uk')
   * @default null
   */
  geo_code: string | null;
  /**
   * Render
   * @description Enable/disable JavaScript rendering
   * @default false
   */
  render: boolean;
  /**
   * Url
   * @description The target URL to scrape
   */
  url?: string;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SCRAPE_DO_PROXY_MODE tool output.
 */
type SCRAPE_DO_SCRAPE_DO_PROXY_MODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The scraped content from the target webpage
       */
      content: string;
      /**
       * Headers
       * @description Response headers including Scrape.do specific headers
       */
      headers: {
          [key: string]: unknown;
      };
      /**
       * Status Code
       * @description HTTP status code of the response
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
 * Type of SCRAPE_DO's SCRAPE_DO_SCRAPE_DO_SET_COOKIES tool input.
 */
type SCRAPE_DO_SCRAPE_DO_SET_COOKIES_INPUT = {
  /**
   * Cookies
   * @description Cookie string in format 'name1=value1;name2=value2' (will be URL-encoded)
   */
  cookies?: string;
  /**
   * Url
   * Format: uri
   * @description Target web page URL where cookies will be set
   */
  url?: string;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SCRAPE_DO_SET_COOKIES tool output.
 */
type SCRAPE_DO_SCRAPE_DO_SET_COOKIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Response content from the API, can be either JSON or raw content
       */
      content: string | null;
      /**
       * Status
       * @description Status of the cookie setting request
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
 * Type of SCRAPE_DO's SCRAPE_DO_SCRAPE_DO_SET_SUPER_MODE tool input.
 */
type SCRAPE_DO_SCRAPE_DO_SET_SUPER_MODE_INPUT = {
  /**
   * Super Mode
   * @description Enable/disable Super Mode for enhanced scraping using residential and mobile proxies
   */
  super_mode?: boolean;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SCRAPE_DO_SET_SUPER_MODE tool output.
 */
type SCRAPE_DO_SCRAPE_DO_SET_SUPER_MODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Status message about the super mode setting
       */
      message: string;
      /**
       * Success
       * @description Whether the super mode was successfully set
       */
      success: boolean;
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
 * Type of SCRAPE_DO's SCRAPE_DO_SET_BLOCK_URLS tool input.
 */
type SCRAPE_DO_SET_BLOCK_URLS_INPUT = {
  /**
   * Urls
   * @description List of URL patterns to block during scraping. Can be full URLs or patterns.
   */
  urls?: string[];
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SET_BLOCK_URLS tool output.
 */
type SCRAPE_DO_SET_BLOCK_URLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Blocked Urls
       * @description List of URLs that were successfully blocked.
       * @default []
       */
      blocked_urls: string[];
      /**
       * Message
       * @description Success message confirming URLs have been blocked.
       * @default
       */
      message: string;
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
 * Type of SCRAPE_DO's SCRAPE_DO_SET_CUSTOM_HEADERS tool input.
 */
type SCRAPE_DO_SET_CUSTOM_HEADERS_INPUT = {
  /**
   * Custom Headers
   * @description Enable custom headers mode (default: True)
   * @default true
   */
  custom_headers: boolean;
  /**
   * Headers
   * @description Dictionary of custom headers to send with the request
   */
  headers?: {
      [key: string]: string;
  };
  /**
   * Url
   * @description Target web page URL to scrape
   */
  url?: string;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SET_CUSTOM_HEADERS tool output.
 */
type SCRAPE_DO_SET_CUSTOM_HEADERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The scraped content from the target webpage
       */
      content: string;
      /**
       * Headers
       * @description Response headers including Scrape.do specific headers
       */
      headers: {
          [key: string]: unknown;
      };
      /**
       * Status Code
       * @description HTTP status code of the response
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
 * Type of SCRAPE_DO's SCRAPE_DO_SET_CUSTOM_WAIT tool input.
 */
type SCRAPE_DO_SET_CUSTOM_WAIT_INPUT = {
  /**
   * Custom Wait
   * @description The time to wait in milliseconds after page load when using render option (between 0-35000 ms)
   * @default 5000
   */
  custom_wait: number;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SET_CUSTOM_WAIT tool output.
 */
type SCRAPE_DO_SET_CUSTOM_WAIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom Wait
       * @description The configured custom wait value in milliseconds
       */
      custom_wait: number;
      /**
       * Message
       * @description Message describing the result of the operation
       */
      message: string;
      /**
       * Status
       * @description Status of the custom wait setting operation
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
 * Type of SCRAPE_DO's SCRAPE_DO_SET_DEVICE_TYPE tool input.
 */
type SCRAPE_DO_SET_DEVICE_TYPE_INPUT = {
  /**
   * Device Type
   * @description The type of device to emulate for scraping requests
   */
  device_type?: string;
  /**
   * Url
   * @description The target URL to scrape
   */
  url?: string;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SET_DEVICE_TYPE tool output.
 */
type SCRAPE_DO_SET_DEVICE_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description Response data from the API
       */
      response: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Whether the device type was set successfully
       */
      success: boolean;
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
 * Type of SCRAPE_DO's SCRAPE_DO_SET_DISABLE_REDIRECTION tool input.
 */
type SCRAPE_DO_SET_DISABLE_REDIRECTION_INPUT = {
  /**
   * Disable Redirection
   * @description Whether to disable automatic redirection following. When true, prevents automatic following of redirects and allows inspection of redirect responses.
   * @default true
   */
  disable_redirection: boolean;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SET_DISABLE_REDIRECTION tool output.
 */
type SCRAPE_DO_SET_DISABLE_REDIRECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Status message about the operation
       */
      message: string;
      /**
       * Success
       * @description Whether the setting was applied successfully
       */
      success: boolean;
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
 * Type of SCRAPE_DO's SCRAPE_DO_SET_PURE_COOKIES tool input.
 */
type SCRAPE_DO_SET_PURE_COOKIES_INPUT = {
  /**
   * Pure Cookies
   * @description When enabled, returns the original Set-Cookie headers from the target website instead of the processed Scrape.do-Cookies format.
   */
  pure_cookies?: boolean;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SET_PURE_COOKIES tool output.
 */
type SCRAPE_DO_SET_PURE_COOKIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information about the operation result.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the pure cookies setting was applied successfully.
       * @default true
       */
      success: boolean;
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
 * Type of SCRAPE_DO's SCRAPE_DO_SET_REGIONAL_GEO_CODE tool input.
 */
type SCRAPE_DO_SET_REGIONAL_GEO_CODE_INPUT = {
  /**
   * Regional Geo Code
   * @description The region code to target for scraping requests
   */
  regional_geo_code?: string;
  /**
   * Url
   * @description The target URL to scrape with the specified regional geo code
   */
  url?: string;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SET_REGIONAL_GEO_CODE tool output.
 */
type SCRAPE_DO_SET_REGIONAL_GEO_CODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response message from the API
       */
      message: string;
      /**
       * Status
       * @description Status of the regional geolocation setting request
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
 * Type of SCRAPE_DO's SCRAPE_DO_SET_RETRY_TIMEOUT tool input.
 */
type SCRAPE_DO_SET_RETRY_TIMEOUT_INPUT = {
  /**
   * Retry Timeout
   * @description The maximum time in milliseconds to wait before retrying a failed request (between 5000-55000 ms)
   * @default 15000
   */
  retry_timeout: number;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SET_RETRY_TIMEOUT tool output.
 */
type SCRAPE_DO_SET_RETRY_TIMEOUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Message describing the result of the operation
       */
      message: string;
      /**
       * Retry Timeout
       * @description The configured retry timeout value in milliseconds
       */
      retry_timeout: number;
      /**
       * Status
       * @description Status of the retry timeout setting operation
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
 * Type of SCRAPE_DO's SCRAPE_DO_SET_SCREENSHOT tool input.
 */
type SCRAPE_DO_SET_SCREENSHOT_INPUT = {
  /**
   * Enabled
   * @description Whether to enable screenshot capture for scraping requests
   * @default true
   */
  enabled: boolean;
  /**
   * Full Page
   * @description Whether to capture full page screenshot
   * @default false
   */
  full_page: boolean;
  /**
   * Selector
   * @description CSS selector to capture specific area of the page
   * @default null
   */
  selector: string | null;
  /**
   * Url
   * @description The URL of the webpage to take a screenshot of
   */
  url?: string;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SET_SCREENSHOT tool output.
 */
type SCRAPE_DO_SET_SCREENSHOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response message from the API
       */
      message: string;
      /**
       * Status
       * @description Status of the screenshot setting request
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
 * Type of SCRAPE_DO's SCRAPE_DO_SET_SESSION_ID tool input.
 */
type SCRAPE_DO_SET_SESSION_ID_INPUT = {
  /**
   * Session Id
   * @description An integer between 0 and 1,000,000 that will be used as the session identifier. The same session ID will maintain the same proxy IP for up to 5 minutes of inactivity.
   */
  session_id?: number;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SET_SESSION_ID tool output.
 */
type SCRAPE_DO_SET_SESSION_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message describing the result of the operation
       * @default null
       */
      message: string | null;
      /**
       * Session Id
       * @description The session ID that was set
       * @default null
       */
      session_id: number | null;
      /**
       * Success
       * @description Whether the session ID was set successfully
       * @default true
       */
      success: boolean;
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
 * Type of SCRAPE_DO's SCRAPE_DO_SET_WAIT_FOR_SELECTOR tool input.
 */
type SCRAPE_DO_SET_WAIT_FOR_SELECTOR_INPUT = {
  /**
   * Selector
   * @description CSS selector to wait for in the target web page
   */
  selector?: string;
  /**
   * Timeout
   * @description Maximum time to wait in milliseconds (between 1000 and 35000)
   * @default null
   */
  timeout: number | null;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SET_WAIT_FOR_SELECTOR tool output.
 */
type SCRAPE_DO_SET_WAIT_FOR_SELECTOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the wait selector was set successfully
       * @default true
       */
      success: boolean;
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
 * Type of SCRAPE_DO's SCRAPE_DO_SET_WAIT_UNTIL tool input.
 */
type SCRAPE_DO_SET_WAIT_UNTIL_INPUT = {
  /**
   * Wait Until
   * @description The condition to determine when the page is considered loaded. 'domcontentloaded': Waits for DOMContentLoaded event. 'networkidle0': Waits until no network connections for 500ms. 'networkidle2': Waits until ≤2 network connections for 500ms.
   * @enum {string}
   */
  wait_until?: "domcontentloaded" | "networkidle0" | "networkidle2";
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SET_WAIT_UNTIL tool output.
 */
type SCRAPE_DO_SET_WAIT_UNTIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the success of setting the waitUntil parameter
       */
      message: string;
      /**
       * Wait Until
       * @description The waitUntil value that was set
       */
      wait_until: string;
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
 * Type of SCRAPE_DO's SCRAPE_DO_SHOW_WEBSOCKET_REQUESTS tool input.
 */
type SCRAPE_DO_SHOW_WEBSOCKET_REQUESTS_INPUT = {
  /**
   * Session Id
   * @description Optional session ID for maintaining state across requests
   * @default null
   */
  session_id: string | null;
  /**
   * Timeout
   * @description Maximum request timeout in ms (5000-120000)
   * @default null
   */
  timeout: number | null;
  /**
   * Url
   * @description Target web page URL to monitor websocket requests
   */
  url?: string;
};

/**
 * Type of SCRAPE_DO's SCRAPE_DO_SHOW_WEBSOCKET_REQUESTS tool output.
 */
type SCRAPE_DO_SHOW_WEBSOCKET_REQUESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page Content
       * @description The rendered content of the target webpage
       */
      page_content: string;
      /**
       * Status Code
       * @description HTTP status code of the response
       */
      status_code: number;
      /**
       * Websocket Requests
       * @description List of WebSocket requests captured during page load
       */
      websocket_requests: {
          /**
           * Messages
           * @description List of messages exchanged over the WebSocket connection
           */
          messages: {
              [key: string]: unknown;
          }[];
          /**
           * Protocol
           * @description WebSocket protocol used
           */
          protocol: string;
          /**
           * Timestamp
           * @description Timestamp of the WebSocket request
           */
          timestamp: string;
          /**
           * Url
           * @description WebSocket connection URL
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
 * Type map of all available tool input types for toolkit "SCRAPE_DO".
 */
export type SCRAPE_DO_TOOL_INPUTS = {
  GET_ACCOUNT_INFO: SCRAPE_DO_GET_ACCOUNT_INFO_INPUT
  GET_RENDER_PAGE: SCRAPE_DO_GET_RENDER_PAGE_INPUT
  SCRAPE_DO_GET_PAGE: SCRAPE_DO_SCRAPE_DO_GET_PAGE_INPUT
  SCRAPE_DO_PROXY_MODE: SCRAPE_DO_SCRAPE_DO_PROXY_MODE_INPUT
  SCRAPE_DO_SET_COOKIES: SCRAPE_DO_SCRAPE_DO_SET_COOKIES_INPUT
  SCRAPE_DO_SET_SUPER_MODE: SCRAPE_DO_SCRAPE_DO_SET_SUPER_MODE_INPUT
  SET_BLOCK_URLS: SCRAPE_DO_SET_BLOCK_URLS_INPUT
  SET_CUSTOM_HEADERS: SCRAPE_DO_SET_CUSTOM_HEADERS_INPUT
  SET_CUSTOM_WAIT: SCRAPE_DO_SET_CUSTOM_WAIT_INPUT
  SET_DEVICE_TYPE: SCRAPE_DO_SET_DEVICE_TYPE_INPUT
  SET_DISABLE_REDIRECTION: SCRAPE_DO_SET_DISABLE_REDIRECTION_INPUT
  SET_PURE_COOKIES: SCRAPE_DO_SET_PURE_COOKIES_INPUT
  SET_REGIONAL_GEO_CODE: SCRAPE_DO_SET_REGIONAL_GEO_CODE_INPUT
  SET_RETRY_TIMEOUT: SCRAPE_DO_SET_RETRY_TIMEOUT_INPUT
  SET_SCREENSHOT: SCRAPE_DO_SET_SCREENSHOT_INPUT
  SET_SESSION_ID: SCRAPE_DO_SET_SESSION_ID_INPUT
  SET_WAIT_FOR_SELECTOR: SCRAPE_DO_SET_WAIT_FOR_SELECTOR_INPUT
  SET_WAIT_UNTIL: SCRAPE_DO_SET_WAIT_UNTIL_INPUT
  SHOW_WEBSOCKET_REQUESTS: SCRAPE_DO_SHOW_WEBSOCKET_REQUESTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SCRAPE_DO".
 */
export type SCRAPE_DO_TOOL_OUTPUTS = {
  GET_ACCOUNT_INFO: SCRAPE_DO_GET_ACCOUNT_INFO_OUTPUT
  GET_RENDER_PAGE: SCRAPE_DO_GET_RENDER_PAGE_OUTPUT
  SCRAPE_DO_GET_PAGE: SCRAPE_DO_SCRAPE_DO_GET_PAGE_OUTPUT
  SCRAPE_DO_PROXY_MODE: SCRAPE_DO_SCRAPE_DO_PROXY_MODE_OUTPUT
  SCRAPE_DO_SET_COOKIES: SCRAPE_DO_SCRAPE_DO_SET_COOKIES_OUTPUT
  SCRAPE_DO_SET_SUPER_MODE: SCRAPE_DO_SCRAPE_DO_SET_SUPER_MODE_OUTPUT
  SET_BLOCK_URLS: SCRAPE_DO_SET_BLOCK_URLS_OUTPUT
  SET_CUSTOM_HEADERS: SCRAPE_DO_SET_CUSTOM_HEADERS_OUTPUT
  SET_CUSTOM_WAIT: SCRAPE_DO_SET_CUSTOM_WAIT_OUTPUT
  SET_DEVICE_TYPE: SCRAPE_DO_SET_DEVICE_TYPE_OUTPUT
  SET_DISABLE_REDIRECTION: SCRAPE_DO_SET_DISABLE_REDIRECTION_OUTPUT
  SET_PURE_COOKIES: SCRAPE_DO_SET_PURE_COOKIES_OUTPUT
  SET_REGIONAL_GEO_CODE: SCRAPE_DO_SET_REGIONAL_GEO_CODE_OUTPUT
  SET_RETRY_TIMEOUT: SCRAPE_DO_SET_RETRY_TIMEOUT_OUTPUT
  SET_SCREENSHOT: SCRAPE_DO_SET_SCREENSHOT_OUTPUT
  SET_SESSION_ID: SCRAPE_DO_SET_SESSION_ID_OUTPUT
  SET_WAIT_FOR_SELECTOR: SCRAPE_DO_SET_WAIT_FOR_SELECTOR_OUTPUT
  SET_WAIT_UNTIL: SCRAPE_DO_SET_WAIT_UNTIL_OUTPUT
  SHOW_WEBSOCKET_REQUESTS: SCRAPE_DO_SHOW_WEBSOCKET_REQUESTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SCRAPE_DO toolkit.
 */
export const SCRAPE_DO = {
  slug: "scrape_do",
  tools: {
    /**
     * Retrieves account information and usage statistics from scrape.do. this action makes a get request to the scrape.do info endpoint to fetch: - subscription status - concurrent request limits and usage - monthly request limits and remaining requests - real-time usage statistics rate limit: maximum 10 requests per minute
     */
    GET_ACCOUNT_INFO: "SCRAPE_DO_GET_ACCOUNT_INFO",
    /**
     * This tool allows you to scrape web pages with javascript rendering enabled. it's particularly useful for scraping dynamic websites where content is loaded through javascript. the tool will wait for the javascript to execute and return the fully rendered html content.
     */
    GET_RENDER_PAGE: "SCRAPE_DO_GET_RENDER_PAGE",
    /**
     * A tool to scrape web pages using scrape.do's api service. it makes a basic get request to fetch the content of a target webpage while handling anti-bot protections and proxy rotation automatically.
     */
    SCRAPE_DO_GET_PAGE: "SCRAPE_DO_SCRAPE_DO_GET_PAGE",
    /**
     * This tool implements the proxy mode functionality of scrape.do, which allows routing requests through their proxy server. it provides an alternative way to access web scraping capabilities by handling complex javascript-rendered pages, geolocation-based routing, device simulation, and built-in anti-bot and retry mechanisms.
     */
    SCRAPE_DO_PROXY_MODE: "SCRAPE_DO_SCRAPE_DO_PROXY_MODE",
    /**
     * This tool allows users to set specific cookies for their scraping requests to a target website. it is useful for maintaining session states or authentication through cookies.
     */
    SCRAPE_DO_SET_COOKIES: "SCRAPE_DO_SCRAPE_DO_SET_COOKIES",
    /**
     * The scrape do set super mode tool enables enhanced scraping by using residential and mobile proxies, bypassing blocks and restrictions associated with datacenter ips. when the 'super' parameter is set to true, it activates a mode that leverages a network of residential ip addresses, which is particularly useful to bypass strict anti-bot measures and for accessing websites that block datacenter ips.
     */
    SCRAPE_DO_SET_SUPER_MODE: "SCRAPE_DO_SCRAPE_DO_SET_SUPER_MODE",
    /**
     * This tool allows users to block specific urls during the scraping process. it's particularly useful for blocking unwanted resources like analytics scripts, advertisements, or any other urls that might interfere with the scraping process or slow it down. it provides granular control by allowing users to specify url patterns to block, thereby improving scraping performance and maintaining privacy.
     */
    SET_BLOCK_URLS: "SCRAPE_DO_SET_BLOCK_URLS",
    /**
     * A tool to send custom headers with scrape.do requests. this allows simulating specific browser behaviors or adding authentication headers by controlling all headers sent to the target website.
     */
    SET_CUSTOM_HEADERS: "SCRAPE_DO_SET_CUSTOM_HEADERS",
    /**
     * This tool sets the custom wait time in milliseconds after page load when using the render option in scrape.do. it is particularly useful for dealing with dynamic content to ensure that it is fully loaded before scraping, especially on javascript-heavy websites or single-page applications. the action allows fine-tuned control over the rendering wait time and must be used with render=true.
     */
    SET_CUSTOM_WAIT: "SCRAPE_DO_SET_CUSTOM_WAIT",
    /**
     * This tool allows users to set the device type (desktop, mobile, or tablet) for making scraping requests. it is used to emulate different devices, which helps in testing responsive designs or fetching device-specific content.
     */
    SET_DEVICE_TYPE: "SCRAPE_DO_SET_DEVICE_TYPE",
    /**
     * Controls the automatic redirection behavior of scrape.do requests. when enabled (disable redirection=true), prevents the automatic following of redirects during web scraping operations. this allows: - inspection of the redirect chain - capturing intermediate redirect responses - manual control of redirection flow - analysis of http status codes of redirect responses the redirect url will be available in the scrape.do-target-redirected-location response header.
     */
    SET_DISABLE_REDIRECTION: "SCRAPE_DO_SET_DISABLE_REDIRECTION",
    /**
     * This tool enables getting the original set-cookie headers from target websites instead of the processed scrape.do-cookies format. when enabled, this parameter returns the original set-cookie headers from the target website rather than using the default scrape.do-cookies header format.
     */
    SET_PURE_COOKIES: "SCRAPE_DO_SET_PURE_COOKIES",
    /**
     * This tool allows users to set a broader geographical targeting by specifying a region code instead of a specific country code. this is useful when you want to scrape content from an entire region rather than a specific country. note that this feature requires super mode to be enabled and is only available for business plan or higher subscriptions.
     */
    SET_REGIONAL_GEO_CODE: "SCRAPE_DO_SET_REGIONAL_GEO_CODE",
    /**
     * This tool allows users to set the maximum wait time (in milliseconds) before retrying a failed request in scrape.do. it requires a parameter 'retry timeout' (integer) which specifies the maximum time to wait before retrying, with a default of 15000 ms. it is designed to improve the reliability of web scraping operations, especially when dealing with unstable or slow-responding websites.
     */
    SET_RETRY_TIMEOUT: "SCRAPE_DO_SET_RETRY_TIMEOUT",
    /**
     * This tool enables the screenshot functionality for the scrape.do api, allowing users to capture a visual representation of the scraped webpage. when enabled, the api will return a screenshot of the rendered page along with the regular response. features: - basic screenshot capture - full page screenshot capture - capture specific area using css selector
     */
    SET_SCREENSHOT: "SCRAPE_DO_SET_SCREENSHOT",
    /**
     * This tool implements the session id functionality for scrape.do to maintain a sticky session with the same proxy ip across multiple requests. it achieves this by adding a sessionid parameter to the query parameters of any scraping request, which is crucial for ensuring session consistency when scraping websites with stringent session requirements.
     */
    SET_SESSION_ID: "SCRAPE_DO_SET_SESSION_ID",
    /**
     * This action allows setting a css selector to wait for before considering the page load complete. it is particularly useful when scraping javascript-heavy pages to ensure that certain elements have loaded dynamically.
     */
    SET_WAIT_FOR_SELECTOR: "SCRAPE_DO_SET_WAIT_FOR_SELECTOR",
    /**
     * This tool sets the waituntil parameter for the scrape.do api, defining when the rendering should consider the page loaded during javascript execution. it is particularly useful for handling dynamic websites by specifying conditions such as 'domcontentloaded', 'networkidle0', or 'networkidle2'.
     */
    SET_WAIT_UNTIL: "SCRAPE_DO_SET_WAIT_UNTIL",
    /**
     * This tool provides the ability to view websocket requests made by a webpage. it requires using render=true and returnjson=true parameters along with showwebsocketrequests=true to enable logging of websocket requests.
     */
    SHOW_WEBSOCKET_REQUESTS: "SCRAPE_DO_SHOW_WEBSOCKET_REQUESTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SCRAPE_DO".
 */
export type SCRAPE_DO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SCRAPE_DO".
 */
export type SCRAPE_DO_TRIGGER_EVENTS = {}
