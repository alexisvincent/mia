// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLOUDFLARE_BROWSER_RENDERING's CLOUDFLARE_BROWSER_RENDERING_CAPTURE_SCREENSHOT tool input.
 */
type CLOUDFLARE_BROWSER_RENDERING_CAPTURE_SCREENSHOT_INPUT = {
  /**
   * Account Id
   * @description Cloudflare account identifier
   */
  account_id?: string;
  /**
   * Cache Ttl
   * @description Cache TTL in seconds (0 disables cache)
   * @default null
   */
  cacheTTL: number | null;
  /**
   * Html
   * @description Raw HTML content to render; required if `url` is unset
   * @default null
   */
  html: string | null;
  /**
   * ScreenshotOptions
   * @description Screenshot options like fullPage or clip
   * @default null
   */
  screenshotOptions: {
      /**
       * Clip
       * @description Clipping region to capture; mutually exclusive with fullPage
       * @default null
       */
      clip: {
          /**
           * Height
           * @description Height of clipping region in pixels
           */
          height: number;
          /**
           * Width
           * @description Width of clipping region in pixels
           */
          width: number;
          /**
           * X
           * @description X coordinate of clipping region in pixels
           */
          x: number;
          /**
           * Y
           * @description Y coordinate of clipping region in pixels
           */
          y: number;
      } | null;
      /**
       * Full Page
       * @description Capture the full scrollable page if True
       * @default false
       */
      fullPage: boolean | null;
  } | null;
  /**
   * Url
   * Format: uri
   * @description URL of the page to capture; required if `html` is unset
   * @default null
   */
  url: string | null;
  /**
   * Viewport
   * @description Viewport dimensions
   * @default null
   */
  viewport: {
      /**
       * Height
       * @description Viewport height in pixels
       */
      height: number;
      /**
       * Width
       * @description Viewport width in pixels
       */
      width: number;
  } | null;
};

/**
 * Type of CLOUDFLARE_BROWSER_RENDERING's CLOUDFLARE_BROWSER_RENDERING_CAPTURE_SCREENSHOT tool output.
 */
type CLOUDFLARE_BROWSER_RENDERING_CAPTURE_SCREENSHOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Browser Time Ms
       * @description Milliseconds of browser runtime (X-Browser-Ms-Used header)
       * @default null
       */
      browserTimeMs: number | null;
      /**
       * Errors
       * @description Error details if any
       * @default null
       */
      errors: {
          /**
           * Code
           * @description Error code returned by API
           */
          code: number;
          /**
           * Message
           * @description Error message returned by API
           */
          message: string;
      }[] | null;
      /**
       * Image
       * @description Base64-encoded screenshot image data
       */
      image: string;
      /**
       * Status
       * @description True if screenshot operation succeeded
       */
      status: boolean;
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
 * Type of CLOUDFLARE_BROWSER_RENDERING's CLOUDFLARE_BROWSER_RENDERING_LIST_ACCOUNTS tool input.
 */
type CLOUDFLARE_BROWSER_RENDERING_LIST_ACCOUNTS_INPUT = {
  /**
   * Direction
   * @description Sort direction of results. Allowed values: 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  direction: "asc" | "desc" | null;
  /**
   * Name
   * @description Filter accounts by name (partial match)
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number (1-based).
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of accounts per page (5-50).
   * @default 20
   */
  per_page: number | null;
};

/**
 * Type of CLOUDFLARE_BROWSER_RENDERING's CLOUDFLARE_BROWSER_RENDERING_LIST_ACCOUNTS tool output.
 */
type CLOUDFLARE_BROWSER_RENDERING_LIST_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors if the API call failed
       * @default null
       */
      errors: {
          /**
           * Code
           * @description Error code returned by API
           */
          code: number;
          /**
           * Message
           * @description Error message returned by API
           */
          message: string;
      }[] | null;
      /**
       * Result
       * @description Array of accounts returned by the API
       */
      result: {
          /**
           * Created On
           * Format: date-time
           * @description Timestamp when the account was created
           */
          created_on: string;
          /**
           * Id
           * @description Unique account identifier
           */
          id: string;
          /**
           * ManagedBy
           * @description Information about the parent container
           * @default null
           */
          managed_by: {
              /**
               * Parent Org Id
               * @description ID of the parent organization
               * @default null
               */
              parent_org_id: string | null;
              /**
               * Parent Org Name
               * @description Name of the parent organization
               * @default null
               */
              parent_org_name: string | null;
          } | null;
          /**
           * Name
           * @description Account name
           */
          name: string;
          /**
           * AccountSettings
           * @description Account settings
           * @default null
           */
          settings: {
              /**
               * Abuse Contact Email
               * @description Email for abuse-report notifications
               * @default null
               */
              abuse_contact_email: string | null;
              /**
               * Enforce Twofactor
               * @description Require two-factor authentication for account membership
               * @default null
               */
              enforce_twofactor: boolean | null;
          } | null;
          /**
           * Type
           * @description Type of account
           * @enum {string}
           */
          type: "standard" | "enterprise";
      }[];
      /**
       * Success
       * @description True if API call succeeded
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
 * Type of CLOUDFLARE_BROWSER_RENDERING's CLOUDFLARE_BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS tool input.
 */
type CLOUDFLARE_BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS_INPUT = {
  /**
   * Account Id
   * @description Cloudflare Account ID
   */
  account_id?: string;
  /**
   * Action Timeout
   * @description Max time after load to run actions, in milliseconds (max 300000)
   * @default null
   */
  actionTimeout: number | null;
  /**
   * Cache Ttl
   * @description Optional cache TTL in seconds; default=5; set 0 to disable
   * @default null
   */
  cacheTTL: number | null;
  /**
   * Elements
   * @description List of CSS selectors to scrape
   */
  elements?: {
      /**
       * Selector
       * @description CSS selector to scrape (e.g., 'h1', 'a[href]')
       */
      selector: string;
  }[];
  /**
   * Html
   * @description Inline HTML document to render and scrape
   * @default null
   */
  html: string | null;
  /**
   * Url
   * Format: uri
   * @description Page URL to navigate and scrape
   * @default null
   */
  url: string | null;
};

/**
 * Type of CLOUDFLARE_BROWSER_RENDERING's CLOUDFLARE_BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS tool output.
 */
type CLOUDFLARE_BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error details if the request failed
       * @default null
       */
      errors: {
          /**
           * Code
           * @description Error code returned by Cloudflare API
           */
          code: number;
          /**
           * Message
           * @description Error message returned by Cloudflare API
           */
          message: string;
      }[] | null;
      /**
       * Result
       * @description Results for each requested selector
       */
      result: {
          /**
           * Results
           * @description Scraping results per matched element
           */
          results: {
              /**
               * Attributes
               * @description List of attributes extracted from the element
               */
              attributes: {
                  /**
                   * Name
                   * @description Attribute name
                   */
                  name: string;
                  /**
                   * Value
                   * @description Attribute value
                   */
                  value: string;
              }[];
              /**
               * Height
               * @description Height of the element in pixels
               */
              height: number;
              /**
               * Html
               * @description Inner HTML of the element
               */
              html: string;
              /**
               * Left
               * @description Left position of the element relative to viewport
               */
              left: number;
              /**
               * Text
               * @description Inner text of the element
               */
              text: string;
              /**
               * Top
               * @description Top position of the element relative to viewport
               */
              top: number;
              /**
               * Width
               * @description Width of the element in pixels
               */
              width: number;
          }[];
          /**
           * Selector
           * @description CSS selector used for scraping
           */
          selector: string;
      }[];
      /**
       * Status
       * @description Indicates success or failure of the request
       */
      status: boolean;
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
 * Type of CLOUDFLARE_BROWSER_RENDERING's CLOUDFLARE_BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT tool input.
 */
type CLOUDFLARE_BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT_INPUT = {
  /**
   * Account Id
   * @description Cloudflare account identifier
   */
  account_id?: string;
  /**
   * Action Timeout
   * @description Max time in ms for post-load actions
   * @default null
   */
  actionTimeout: number | null;
  /**
   * Add Script Tag
   * @description Scripts to inject into the page
   * @default null
   */
  addScriptTag: {
      /**
       * Content
       * @description Inline JavaScript content
       * @default null
       */
      content: string | null;
      /**
       * Id
       * @description ID for injected <script>
       * @default null
       */
      id: string | null;
      /**
       * Type
       * @description MIME type of script
       * @default null
       */
      type: string | null;
      /**
       * Url
       * Format: uri
       * @description URL of external script to inject
       * @default null
       */
      url: string | null;
  }[] | null;
  /**
   * Add Style Tag
   * @description Styles to inject into the page
   * @default null
   */
  addStyleTag: {
      /**
       * Content
       * @description Inline CSS content
       * @default null
       */
      content: string | null;
      /**
       * Url
       * Format: uri
       * @description URL of external stylesheet to inject
       * @default null
       */
      url: string | null;
  }[] | null;
  /**
   * Allow Request Pattern
   * @description Regex patterns to allow requests
   * @default null
   */
  allowRequestPattern: string[] | null;
  /**
   * Allow Resource Types
   * @description Allowed resource types
   * @default null
   */
  allowResourceTypes: string[] | null;
  /**
   * HttpAuth
   * @description HTTP authentication credentials
   * @default null
   */
  authenticate: {
      /**
       * Password
       * @description HTTP authentication password
       */
      password: string;
      /**
       * Username
       * @description HTTP authentication username
       */
      username: string;
  } | null;
  /**
   * Best Attempt
   * @description Continue even if certain events fail
   * @default null
   */
  bestAttempt: boolean | null;
  /**
   * Cache Ttl
   * @description Cache TTL in seconds (0 disables caching, max 86400)
   * @default null
   */
  cacheTTL: number | null;
  /**
   * Cookies
   * @description List of cookies to set before navigation
   * @default null
   */
  cookies: {
      /**
       * Domain
       * @description Cookie domain
       * @default null
       */
      domain: string | null;
      /**
       * Expires
       * @description Expiration UNIX timestamp
       * @default null
       */
      expires: number | null;
      /**
       * Http Only
       * @description HTTP only flag
       * @default null
       */
      httpOnly: boolean | null;
      /**
       * Name
       * @description Cookie name
       */
      name: string;
      /**
       * Partition Key
       * @description Cookie partition key
       * @default null
       */
      partitionKey: string | null;
      /**
       * Path
       * @description Cookie path
       * @default null
       */
      path: string | null;
      /**
       * Priority
       * @description Cookie priority
       * @default null
       * @enum {string|null}
       */
      priority: "Low" | "Medium" | "High" | null;
      /**
       * Same Party
       * @description SameParty flag
       * @default null
       */
      sameParty: boolean | null;
      /**
       * Same Site
       * @description SameSite policy
       * @default null
       * @enum {string|null}
       */
      sameSite: "Strict" | "Lax" | "None" | null;
      /**
       * Secure
       * @description Secure flag
       * @default null
       */
      secure: boolean | null;
      /**
       * Source Port
       * @description Source port
       * @default null
       */
      sourcePort: number | null;
      /**
       * Source Scheme
       * @description Source scheme
       * @default null
       * @enum {string|null}
       */
      sourceScheme: "Unset" | "NonSecure" | "Secure" | null;
      /**
       * Url
       * Format: uri
       * @description Associated URL
       * @default null
       */
      url: string | null;
      /**
       * Value
       * @description Cookie value
       */
      value: string;
  }[] | null;
  /**
   * Emulate Media Type
   * @description Emulate CSS media type (e.g., 'print')
   * @default null
   */
  emulateMediaType: string | null;
  /**
   * GotoOptions
   * @description Navigation settings before snapshot
   * @default null
   */
  gotoOptions: {
      /**
       * Referer
       * @description Referer header to use during navigation
       * @default null
       */
      referer: string | null;
      /**
       * Referrer Policy
       * @description Referrer policy (e.g., 'no-referrer', 'origin-when-cross-origin')
       * @default null
       */
      referrerPolicy: string | null;
      /**
       * Timeout
       * @description Maximum navigation time in milliseconds
       * @default 30000
       */
      timeout: number;
      /**
       * Wait Until
       * @description When to consider navigation succeeded
       * @default domcontentloaded
       * @enum {string|null}
       */
      waitUntil: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" | null;
  } | null;
  /**
   * Html
   * @description Raw HTML to render instead of URL
   * @default null
   */
  html: string | null;
  /**
   * Reject Request Pattern
   * @description Regex patterns to block requests
   * @default null
   */
  rejectRequestPattern: string[] | null;
  /**
   * Reject Resource Types
   * @description Blocked resource types
   * @default null
   */
  rejectResourceTypes: string[] | null;
  /**
   * ScreenshotOptions
   * @description Options controlling screenshot capture
   * @default null
   */
  screenshotOptions: {
      /**
       * Capture Beyond Viewport
       * @description Capture beyond the viewport bounds
       * @default null
       */
      captureBeyondViewport: boolean | null;
      /**
       * Clip
       * @description Clipping region for screenshot
       * @default null
       */
      clip: {
          /**
           * Height
           * @description Height of clipping region
           */
          height: number;
          /**
           * Width
           * @description Width of clipping region
           */
          width: number;
          /**
           * X
           * @description X-coordinate of clipping region
           */
          x: number;
          /**
           * Y
           * @description Y-coordinate of clipping region
           */
          y: number;
      } | null;
      /**
       * Encoding
       * @description Encoding of the returned image
       * @default binary
       * @enum {string}
       */
      encoding: "binary" | "base64";
      /**
       * From Surface
       * @description Prefer GPU surface for screenshot
       * @default null
       */
      fromSurface: boolean | null;
      /**
       * Full Page
       * @description Capture the full scrollable page
       * @default null
       */
      fullPage: boolean | null;
      /**
       * Omit Background
       * @description Hide default white background
       * @default null
       */
      omitBackground: boolean | null;
      /**
       * Optimize For Speed
       * @description Optimize capture speed over quality
       * @default null
       */
      optimizeForSpeed: boolean | null;
      /**
       * Quality
       * @description Quality (0-100) for jpeg/webp
       * @default null
       */
      quality: number | null;
      /**
       * Scroll Page
       * @description Scroll through the page while capturing
       * @default null
       */
      scrollPage: boolean | null;
      /**
       * Selector
       * @description CSS selector to capture only the element
       * @default null
       */
      selector: string | null;
      /**
       * Type
       * @description Image format of the screenshot
       * @default png
       * @enum {string}
       */
      type: "png" | "jpeg" | "webp";
  } | null;
  /**
   * Set Extra Http Headers
   * @description Additional HTTP headers for navigation
   * @default null
   */
  setExtraHTTPHeaders: {
      [key: string]: string;
  } | null;
  /**
   * Set Java Script Enabled
   * @description Enable or disable JavaScript execution
   * @default null
   */
  setJavaScriptEnabled: boolean | null;
  /**
   * Url
   * Format: uri
   * @description Page URL to navigate to (must set url or html)
   * @default null
   */
  url: string | null;
  /**
   * User Agent
   * @description Custom user agent string
   * @default null
   */
  userAgent: string | null;
  /**
   * Viewport
   * @description Viewport dimensions and device emulation
   * @default null
   */
  viewport: {
      /**
       * Device Scale Factor
       * @description Device scale factor
       * @default null
       */
      deviceScaleFactor: number | null;
      /**
       * Has Touch
       * @description Whether viewport supports touch events
       * @default null
       */
      hasTouch: boolean | null;
      /**
       * Height
       * @description Viewport height in pixels
       * @default 1080
       */
      height: number;
      /**
       * Is Landscape
       * @description Landscape orientation if true
       * @default null
       */
      isLandscape: boolean | null;
      /**
       * Is Mobile
       * @description Mobile device emulation if true
       * @default null
       */
      isMobile: boolean | null;
      /**
       * Width
       * @description Viewport width in pixels
       * @default 1920
       */
      width: number;
  } | null;
  /**
   * WaitForSelector
   * @description Wait for an element before snapshot
   * @default null
   */
  waitForSelector: {
      /**
       * Hidden
       * @description Resolve when element is hidden
       * @default null
       */
      hidden: boolean | null;
      /**
       * Selector
       * @description CSS selector to wait for
       */
      selector: string;
      /**
       * Timeout
       * @description Max wait time in ms for selector
       * @default null
       */
      timeout: number | null;
      /**
       * Visible
       * @description Resolve when element is visible
       * @default null
       */
      visible: boolean | null;
  } | null;
  /**
   * Wait For Timeout
   * @description Wait time in ms before proceeding
   * @default null
   */
  waitForTimeout: number | null;
};

/**
 * Type of CLOUDFLARE_BROWSER_RENDERING's CLOUDFLARE_BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT tool output.
 */
type CLOUDFLARE_BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API, if any
       * @default null
       */
      errors: {
          [key: string]: unknown;
      }[] | null;
      /**
       * SnapshotResult
       * @description Snapshot result payload (present on success)
       * @default null
       */
      result: {
          /**
           * Content
           * @description Rendered HTML content of the page
           */
          content: string;
          /**
           * Screenshot
           * @description Base64-encoded screenshot image
           */
          screenshot: string;
      } | null;
      /**
       * Status
       * @description True if the snapshot was captured successfully
       */
      status: boolean;
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
 * Type map of all available tool input types for toolkit "CLOUDFLARE_BROWSER_RENDERING".
 */
export type CLOUDFLARE_BROWSER_RENDERING_TOOL_INPUTS = {
  CAPTURE_SCREENSHOT: CLOUDFLARE_BROWSER_RENDERING_CAPTURE_SCREENSHOT_INPUT
  LIST_ACCOUNTS: CLOUDFLARE_BROWSER_RENDERING_LIST_ACCOUNTS_INPUT
  SCRAPE_HTML_ELEMENTS: CLOUDFLARE_BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS_INPUT
  TAKE_WEBPAGE_SNAPSHOT: CLOUDFLARE_BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLOUDFLARE_BROWSER_RENDERING".
 */
export type CLOUDFLARE_BROWSER_RENDERING_TOOL_OUTPUTS = {
  CAPTURE_SCREENSHOT: CLOUDFLARE_BROWSER_RENDERING_CAPTURE_SCREENSHOT_OUTPUT
  LIST_ACCOUNTS: CLOUDFLARE_BROWSER_RENDERING_LIST_ACCOUNTS_OUTPUT
  SCRAPE_HTML_ELEMENTS: CLOUDFLARE_BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS_OUTPUT
  TAKE_WEBPAGE_SNAPSHOT: CLOUDFLARE_BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLOUDFLARE_BROWSER_RENDERING toolkit.
 */
export const CLOUDFLARE_BROWSER_RENDERING = {
  slug: "cloudflare_browser_rendering",
  tools: {
    /**
     * Tool to capture a webpage screenshot. Use when you need a visual snapshot of a URL or HTML with optional viewport and clipping.
     */
    CAPTURE_SCREENSHOT: "CLOUDFLARE_BROWSER_RENDERING_CAPTURE_SCREENSHOT",
    /**
     * Tool to list all Cloudflare accounts accessible. Use to retrieve a valid account_id for further browser rendering actions.
     */
    LIST_ACCOUNTS: "CLOUDFLARE_BROWSER_RENDERING_LIST_ACCOUNTS",
    /**
     * Tool to scrape HTML elements for text, HTML, attributes, and box metrics. Use when you need detailed data of matched selectors after rendering a page.
     */
    SCRAPE_HTML_ELEMENTS: "CLOUDFLARE_BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS",
    /**
     * Tool to capture rendered HTML and screenshot of a webpage. Use when you need both DOM content and an image in one request with custom loading and capture settings.
     */
    TAKE_WEBPAGE_SNAPSHOT: "CLOUDFLARE_BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLOUDFLARE_BROWSER_RENDERING".
 */
export type CLOUDFLARE_BROWSER_RENDERING_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLOUDFLARE_BROWSER_RENDERING".
 */
export type CLOUDFLARE_BROWSER_RENDERING_TRIGGER_EVENTS = {}
