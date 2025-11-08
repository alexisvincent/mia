// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HYPERBROWSER's HYPERBROWSER_CREATE_PROFILE tool input.
 */
type HYPERBROWSER_CREATE_PROFILE_INPUT = {
  /**
   * Name
   * @description Optional profile name for easy identification
   * @default null
   */
  name: string | null;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_CREATE_PROFILE tool output.
 */
type HYPERBROWSER_CREATE_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the created profile
       */
      id: string;
      /**
       * Name
       * @description Name of the created profile
       */
      name: string;
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
 * Type of HYPERBROWSER's HYPERBROWSER_CREATE_SCRAPE_JOB tool input.
 */
type HYPERBROWSER_CREATE_SCRAPE_JOB_INPUT = {
  /**
   * ScrapeOptions
   * @description Scrape behavior configuration
   * @default null
   */
  scrapeOptions: {
      /**
       * Exclude Tags
       * @description CSS selectors or tags to exclude
       * @default null
       */
      excludeTags: string[] | null;
      /**
       * Formats
       * @description Data formats to return
       */
      formats?: string[];
      /**
       * Include Tags
       * @description CSS selectors or tags to include
       * @default null
       */
      includeTags: string[] | null;
      /**
       * Only Main Content
       * @description Return only the main content of the page
       * @default true
       */
      onlyMainContent: boolean;
      /**
       * ScreenshotOptions
       * @description Screenshot capture options
       * @default null
       */
      screenshotOptions: {
          /**
           * Format
           * @description Image format for screenshot
           * @default webp
           * @enum {string}
           */
          format: "webp" | "jpeg" | "png";
          /**
           * Full Page
           * @description Capture full scrollable page
           * @default false
           */
          fullPage: boolean;
      } | null;
      /**
       * Timeout
       * @description Max navigation time in ms
       * @default 30000
       */
      timeout: number;
      /**
       * Wait For
       * @description Delay in ms after page load before scraping
       * @default 0
       */
      waitFor: number;
      /**
       * Wait Until
       * @description Navigation readiness condition
       * @default load
       * @enum {string}
       */
      waitUntil: "load" | "domcontentloaded" | "networkidle";
  } | null;
  /**
   * SessionOptions
   * @description Browser session configuration
   * @default null
   */
  sessionOptions: {
      /**
       * Accept Cookies
       * @description Auto-accept cookies
       * @default false
       */
      acceptCookies: boolean;
      /**
       * Adblock
       * @description Block ads
       * @default false
       */
      adblock: boolean;
      /**
       * Annoyances
       * @description Block pop-ups/overlays
       * @default false
       */
      annoyances: boolean;
      /**
       * Browser Args
       * @description Additional browser launch args
       * @default null
       */
      browserArgs: string[] | null;
      /**
       * Device
       * @description Device type fingerprint(s)
       * @default null
       */
      device: string[] | null;
      /**
       * Enable Video Web Recording
       * @description Record video when web recording is enabled
       * @default null
       */
      enableVideoWebRecording: boolean | null;
      /**
       * Enable Web Recording
       * @description Enable rrweb session recording
       * @default true
       */
      enableWebRecording: boolean;
      /**
       * Extension Ids
       * @description IDs of browser extensions to load
       * @default null
       */
      extensionIds: string[] | null;
      /**
       * Image Captcha Params
       * @description Configuration for image-based CAPTCHAs
       * @default null
       */
      imageCaptchaParams: {
          /**
           * Image Selector
           * @description CSS selector for CAPTCHA image
           */
          imageSelector: string;
          /**
           * Input Selector
           * @description CSS selector for CAPTCHA input
           */
          inputSelector: string;
      }[] | null;
      /**
       * Locales
       * @description Browser locale(s)
       */
      locales?: string[];
      /**
       * Operating Systems
       * @description OS fingerprint(s)
       * @default null
       */
      operatingSystems: string[] | null;
      /**
       * Platform
       * @description Browser platform fingerprint(s)
       * @default null
       */
      platform: string[] | null;
      /**
       * Profile
       * @description Browser profile configuration
       * @default null
       */
      profile: {
          /**
           * Id
           * @description Browser profile ID
           */
          id: string;
          /**
           * Persist Changes
           * @description Whether to persist changes to the profile
           */
          persistChanges: boolean;
      } | null;
      /**
       * Proxy City
       * @description City-level proxy targeting
       * @default null
       */
      proxyCity: string | null;
      /**
       * Proxy Country
       * @description Country for geo-specific proxy (e.g. 'US')
       * @default null
       */
      proxyCountry: string | null;
      /**
       * Proxy Server
       * @description Proxy host/URL; required if useProxy=true
       * @default null
       */
      proxyServer: string | null;
      /**
       * Proxy Server Password
       * @description Proxy authentication password
       * @default null
       */
      proxyServerPassword: string | null;
      /**
       * Proxy Server Username
       * @description Proxy authentication username
       * @default null
       */
      proxyServerUsername: string | null;
      /**
       * Proxy State
       * @description State-level proxy targeting
       * @default null
       */
      proxyState: string | null;
      /**
       * Screen
       * @description Emulated screen size
       */
      screen?: {
          /**
           * Height
           * @description Emulated screen height in pixels
           * @default 720
           */
          height: number;
          /**
           * Width
           * @description Emulated screen width in pixels
           * @default 1280
           */
          width: number;
      };
      /**
       * Solve Captchas
       * @description Automatically solve CAPTCHAs (paid plan)
       * @default false
       */
      solveCaptchas: boolean;
      /**
       * Timeout Minutes
       * @description Session timeout in minutes (1–720)
       * @default null
       */
      timeoutMinutes: number | null;
      /**
       * Trackers
       * @description Block trackers
       * @default false
       */
      trackers: boolean;
      /**
       * Url Blocklist
       * @description URL patterns to block
       * @default null
       */
      urlBlocklist: string[] | null;
      /**
       * Use Proxy
       * @description Route traffic through a proxy
       * @default false
       */
      useProxy: boolean;
      /**
       * Use Stealth
       * @description Launch browser in stealth mode
       * @default false
       */
      useStealth: boolean;
  } | null;
  /**
   * Url
   * @description Target URL to scrape
   */
  url?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_CREATE_SCRAPE_JOB tool output.
 */
type HYPERBROWSER_CREATE_SCRAPE_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job Id
       * @description The created scrape job ID
       */
      jobId: string;
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
 * Type of HYPERBROWSER's HYPERBROWSER_CREATE_SESSION tool input.
 */
type HYPERBROWSER_CREATE_SESSION_INPUT = {
  /**
   * Accept Cookies
   * @description Automatically accept cookie banners
   * @default false
   */
  acceptCookies: boolean;
  /**
   * Adblock
   * @description Block ads in the session
   * @default false
   */
  adblock: boolean;
  /**
   * Annoyances
   * @description Block common annoyances like pop-ups
   * @default false
   */
  annoyances: boolean;
  /**
   * Browser Args
   * @description Additional browser launch arguments
   * @default null
   */
  browserArgs: string[] | null;
  /**
   * Device
   * @description Preferred device types
   * @default null
   */
  device: string[] | null;
  /**
   * Enable Video Web Recording
   * @description Enable video recording; requires enableWebRecording=true
   * @default false
   */
  enableVideoWebRecording: boolean;
  /**
   * Enable Web Recording
   * @description Enable rrweb session recording
   * @default true
   */
  enableWebRecording: boolean;
  /**
   * Extension Ids
   * @description List of extension IDs (UUIDs) to attach
   * @default null
   */
  extensionIds: string[] | null;
  /**
   * Image Captcha Params
   * @description Image CAPTCHA handling parameters
   * @default null
   */
  imageCaptchaParams: {
      /**
       * Image Selector
       * @description CSS selector of the CAPTCHA image element
       */
      imageSelector: string;
      /**
       * Input Selector
       * @description CSS selector of the CAPTCHA input field
       */
      inputSelector: string;
  }[] | null;
  /**
   * Locales
   * @description Browser locale codes (ISO 639-1, lowercase)
   * @default null
   */
  locales: string[] | null;
  /**
   * Operating Systems
   * @description Preferred OS fingerprints
   * @default null
   */
  operatingSystems: string[] | null;
  /**
   * Platform
   * @description Preferred browser platforms
   * @default null
   */
  platform: string[] | null;
  /**
   * ProfileConfig
   * @description Browser profile reuse settings.
   * @default null
   */
  profile: {
      /**
       * Id
       * @description Profile ID (UUID)
       */
      id: string;
      /**
       * Persist Changes
       * @description Persist changes across sessions
       */
      persistChanges: boolean;
  } | null;
  /**
   * Proxy City
   * @description Desired proxy city; mutually exclusive with proxyState
   * @default null
   */
  proxyCity: string | null;
  /**
   * Proxy Country
   * @description Two-letter proxy country code (e.g., US, GB)
   * @default null
   */
  proxyCountry: string | null;
  /**
   * Proxy Server
   * @description Proxy server host or URL
   * @default null
   */
  proxyServer: string | null;
  /**
   * Proxy Server Password
   * @description Password for proxy authentication
   * @default null
   */
  proxyServerPassword: string | null;
  /**
   * Proxy Server Username
   * @description Username for proxy authentication
   * @default null
   */
  proxyServerUsername: string | null;
  /**
   * Proxy State
   * @description Two-letter US state code; mutually exclusive with proxyCity
   * @default null
   */
  proxyState: string | null;
  /**
   * ScreenConfig
   * @description Screen configuration: width and height in pixels.
   * @default null
   */
  screen: {
      /**
       * Height
       * @description Screen height in pixels, must be >=1
       */
      height: number;
      /**
       * Width
       * @description Screen width in pixels, must be >=1
       */
      width: number;
  } | null;
  /**
   * Solve Captchas
   * @description Auto-solve CAPTCHAs during session
   * @default false
   */
  solveCaptchas: boolean;
  /**
   * Timeout Minutes
   * @description Auto-stop after N minutes (1-720)
   * @default null
   */
  timeoutMinutes: number | null;
  /**
   * Trackers
   * @description Block trackers during session
   * @default false
   */
  trackers: boolean;
  /**
   * Url Blocklist
   * @description List of URL patterns to block
   * @default null
   */
  urlBlocklist: string[] | null;
  /**
   * Use Proxy
   * @description Route session via a proxy server
   * @default false
   */
  useProxy: boolean;
  /**
   * Use Stealth
   * @description Enable stealth mode to reduce detection
   * @default false
   */
  useStealth: boolean;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_CREATE_SESSION tool output.
 */
type HYPERBROWSER_CREATE_SESSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      createdAt: string;
      /**
       * End Time
       * @description Session end timestamp (ms since epoch)
       * @default null
       */
      endTime: number | null;
      /**
       * Id
       * @description Session ID (UUID)
       */
      id: string;
      /**
       * Live Url
       * @description Live view URL for real-time monitoring
       * @default null
       */
      liveUrl: string | null;
      /**
       * Session Url
       * @description URL for session details
       */
      sessionUrl: string;
      /**
       * Start Time
       * @description Session start timestamp (ms since epoch)
       * @default null
       */
      startTime: number | null;
      /**
       * Status
       * @description Current session status
       * @enum {string}
       */
      status: "active" | "closed" | "error";
      /**
       * Team Id
       * @description Owning team ID (UUID)
       */
      teamId: string;
      /**
       * Token
       * @description Access token for live view
       * @default null
       */
      token: string | null;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       */
      updatedAt: string;
      /**
       * Ws Endpoint
       * @description WebSocket endpoint for CDP connections
       * @default null
       */
      wsEndpoint: string | null;
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
 * Type of HYPERBROWSER's HYPERBROWSER_DELETE_PROFILE tool input.
 */
type HYPERBROWSER_DELETE_PROFILE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the profile to delete.
   */
  id?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_DELETE_PROFILE tool output.
 */
type HYPERBROWSER_DELETE_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the profile was successfully deleted.
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
 * Type of HYPERBROWSER's HYPERBROWSER_GET_BROWSER_USE_TASK_STATUS tool input.
 */
type HYPERBROWSER_GET_BROWSER_USE_TASK_STATUS_INPUT = {
  /**
   * Task Id
   * @description Unique identifier of the browser-use task to query.
   */
  task_id?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_BROWSER_USE_TASK_STATUS tool output.
 */
type HYPERBROWSER_GET_BROWSER_USE_TASK_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Current status of the browser-use task (e.g., 'pending', 'completed').
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
 * Type of HYPERBROWSER's HYPERBROWSER_GET_CLAUDE_COMPUTER_USE_TASK_STATUS tool input.
 */
type HYPERBROWSER_GET_CLAUDE_COMPUTER_USE_TASK_STATUS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the Claude Computer Use task
   */
  id?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_CLAUDE_COMPUTER_USE_TASK_STATUS tool output.
 */
type HYPERBROWSER_GET_CLAUDE_COMPUTER_USE_TASK_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Current status of the Claude Computer Use task
       * @enum {string}
       */
      status: "pending" | "running" | "completed" | "failed";
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
 * Type of HYPERBROWSER's HYPERBROWSER_GET_CRAWL_JOB_RESULT tool input.
 */
type HYPERBROWSER_GET_CRAWL_JOB_RESULT_INPUT = {
  /**
   * Batch Size
   * @description Number of items per page batch.
   * @default null
   */
  batchSize: number | null;
  /**
   * Id
   * @description Crawl job identifier (UUID)
   */
  id?: string;
  /**
   * Page
   * @description Zero-based page index for result pagination.
   * @default null
   */
  page: number | null;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_CRAWL_JOB_RESULT tool output.
 */
type HYPERBROWSER_GET_CRAWL_JOB_RESULT_OUTPUT = {
  /**
   * Batch Size
   * @description Size of each page batch
   */
  batchSize?: number;
  /**
   * Current Page Batch
   * @description Index of the batch contained in this response
   */
  currentPageBatch?: number;
  /**
   * Data
   * @description Current batch of crawled pages
   */
  data?: {
      /**
       * Error
       * @description Error message if this page failed
       * @default null
       */
      error: string | null;
      /**
       * Html
       * @description Extracted HTML content, if requested.
       * @default null
       */
      html: string | null;
      /**
       * Links
       * @description List of discovered links on the page.
       * @default null
       */
      links: string[] | null;
      /**
       * Markdown
       * @description Extracted markdown content, if requested.
       * @default null
       */
      markdown: string | null;
      /**
       * Metadata
       * @description Additional arbitrary metadata returned for this page
       */
      metadata?: {
          [key: string]: unknown;
      };
      /**
       * Screenshot
       * @description Base64-encoded screenshot, if requested.
       * @default null
       */
      screenshot: string | null;
      /**
       * Status
       * @description Result status for this page: completed|failed
       */
      status: string;
      /**
       * Url
       * @description Page URL that was crawled
       */
      url: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Job Id
   * @description Crawl job identifier
   */
  jobId?: string;
  /**
   * Status
   * @description Overall job status: pending|running|completed|failed
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Crawled Pages
   * @description Number of pages crawled so far
   */
  totalCrawledPages?: number;
  /**
   * Total Page Batches
   * @description Total number of result batches available
   */
  totalPageBatches?: number;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_CRAWL_JOB_STATUS tool input.
 */
type HYPERBROWSER_GET_CRAWL_JOB_STATUS_INPUT = {
  /**
   * Job Id
   * @description Crawl job identifier (UUID)
   */
  job_id?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_CRAWL_JOB_STATUS tool output.
 */
type HYPERBROWSER_GET_CRAWL_JOB_STATUS_OUTPUT = {
  /**
   * Batch Size
   * @description Configured page-batch size
   */
  batchSize?: number;
  /**
   * Current Page Batch
   * @description Index of the batch currently in progress
   */
  currentPageBatch?: number;
  /**
   * Data
   * @description Detailed results per page in this crawl
   */
  data?: {
      /**
       * Error
       * @description Error message if this page failed
       * @default null
       */
      error: string | null;
      /**
       * Html
       * @description Extracted HTML content, if requested
       * @default null
       */
      html: string | null;
      /**
       * Links
       * @description List of extracted links, if requested
       * @default null
       */
      links: string[] | null;
      /**
       * Markdown
       * @description Extracted markdown content
       */
      markdown: string;
      /**
       * Metadata
       * @description Any additional metadata returned for this page
       */
      metadata?: {
          [key: string]: unknown;
      };
      /**
       * Screenshot
       * @description Base64-encoded screenshot, if requested
       * @default null
       */
      screenshot: string | null;
      /**
       * Status
       * @description Result status for this page
       * @enum {string}
       */
      status: "completed" | "failed";
      /**
       * Url
       * @description Page URL that was crawled
       */
      url: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Job Id
   * @description Crawl job identifier
   */
  jobId?: string;
  /**
   * Status
   * @description Overall crawl job status
   * @enum {string}
   */
  status?: "pending" | "running" | "completed" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Crawled Pages
   * @description Number of pages crawled so far
   */
  totalCrawledPages?: number;
  /**
   * Total Page Batches
   * @description Total number of page batches
   */
  totalPageBatches?: number;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_EXTRACT_JOB_RESULT tool input.
 */
type HYPERBROWSER_GET_EXTRACT_JOB_RESULT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the extract job
   */
  id?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_EXTRACT_JOB_RESULT tool output.
 */
type HYPERBROWSER_GET_EXTRACT_JOB_RESULT_OUTPUT = {
  /**
   * Data
   * @description Extracted data payload when job completes successfully (arbitrary JSON)
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
   * Job Id
   * @description The extract job ID
   */
  jobId?: string;
  /**
   * Status
   * @description Current status of the extract job
   * @enum {string}
   */
  status?: "pending" | "running" | "completed" | "failed";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_EXTRACT_JOB_STATUS tool input.
 */
type HYPERBROWSER_GET_EXTRACT_JOB_STATUS_INPUT = {
  /**
   * Job Id
   * @description UUID of the extract job to retrieve status for
   */
  job_id?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_EXTRACT_JOB_STATUS tool output.
 */
type HYPERBROWSER_GET_EXTRACT_JOB_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Current status of the extract job
       * @enum {string}
       */
      status: "pending" | "running" | "completed" | "failed";
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
 * Type of HYPERBROWSER's HYPERBROWSER_GET_PROFILE_BY_ID tool input.
 */
type HYPERBROWSER_GET_PROFILE_BY_ID_INPUT = {
  /**
   * Id
   * @description Unique identifier of the profile
   */
  id?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_PROFILE_BY_ID tool output.
 */
type HYPERBROWSER_GET_PROFILE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the profile was created
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the profile
       */
      id: string;
      /**
       * Name
       * @description Name of the profile
       */
      name: string;
      /**
       * Team Id
       * @description Team ID associated with the profile
       */
      teamId: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the profile was last updated
       */
      updatedAt: string;
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
 * Type of HYPERBROWSER's HYPERBROWSER_GET_SCRAPE_JOB_RESULT tool input.
 */
type HYPERBROWSER_GET_SCRAPE_JOB_RESULT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the scrape job
   */
  id?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_SCRAPE_JOB_RESULT tool output.
 */
type HYPERBROWSER_GET_SCRAPE_JOB_RESULT_OUTPUT = {
  /**
   * GetScrapeJobResultData
   * @description Detailed result payload for a completed scrape job.
   * @default null
   */
  data: {
      /**
       * Html
       * @description Page HTML content
       * @default null
       */
      html: string | null;
      /**
       * Links
       * @description Extracted hyperlinks from the page
       * @default null
       */
      links: string[] | null;
      /**
       * Markdown
       * @description Page content in Markdown format
       * @default null
       */
      markdown: string | null;
      /**
       * Metadata
       * @description Arbitrary key-value metadata associated with the scrape result
       */
      metadata: {
          [key: string]: string | number | boolean;
      };
      /**
       * Screenshot
       * @description Screenshot content, e.g., base64-encoded image
       * @default null
       */
      screenshot: string | null;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Job Id
   * @description Scrape job ID
   */
  jobId?: string;
  /**
   * Status
   * @description Current status of the scrape job
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_SCRAPE_JOB_STATUS tool input.
 */
type HYPERBROWSER_GET_SCRAPE_JOB_STATUS_INPUT = {
  /**
   * Id
   * @description UUID of the scrape job to retrieve status for
   */
  id?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_SCRAPE_JOB_STATUS tool output.
 */
type HYPERBROWSER_GET_SCRAPE_JOB_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Current status of the scrape job
       * @enum {string}
       */
      status: "pending" | "running" | "completed" | "failed";
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
 * Type of HYPERBROWSER's HYPERBROWSER_GET_SESSION_DETAILS tool input.
 */
type HYPERBROWSER_GET_SESSION_DETAILS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the session
   */
  id?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_SESSION_DETAILS tool output.
 */
type HYPERBROWSER_GET_SESSION_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp when the session was created
       */
      createdAt: string;
      /**
       * End Time
       * @description ISO timestamp when the session ended
       */
      endTime: string;
      /**
       * Id
       * @description Unique identifier of the session
       */
      id: string;
      /**
       * Live Url
       * @description Live view URL of the session
       */
      liveUrl: string;
      /**
       * Session Url
       * @description URL to access the session details
       */
      sessionUrl: string;
      /**
       * Start Time
       * @description ISO timestamp when the session started
       */
      startTime: string;
      /**
       * Status
       * @description Current status of the session
       */
      status: string;
      /**
       * Team Id
       * @description Team ID associated with the session
       */
      teamId: string;
      /**
       * Token
       * @description Access token for the session
       */
      token: string;
      /**
       * Updated At
       * @description ISO timestamp when the session was last updated
       */
      updatedAt: string;
      /**
       * Ws Endpoint
       * @description WebSocket endpoint for real-time data
       */
      wsEndpoint: string;
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
 * Type of HYPERBROWSER's HYPERBROWSER_GET_SESSION_DOWNLOADS_URL tool input.
 */
type HYPERBROWSER_GET_SESSION_DOWNLOADS_URL_INPUT = {
  /**
   * Id
   * @description Unique identifier of the session
   */
  id?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_SESSION_DOWNLOADS_URL tool output.
 */
type HYPERBROWSER_GET_SESSION_DOWNLOADS_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Downloads Url
       * @description Signed URL to the session downloads ZIP when available
       * @default null
       */
      downloadsUrl: string | null;
      /**
       * Error
       * @description Error message if downloads URL generation failed or not enabled
       * @default null
       */
      error: string | null;
      /**
       * Status
       * @description Current state of the downloads URL generation
       * @enum {string}
       */
      status: "not_enabled" | "pending" | "in_progress" | "completed" | "failed";
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
 * Type of HYPERBROWSER's HYPERBROWSER_GET_SESSION_RECORDING tool input.
 */
type HYPERBROWSER_GET_SESSION_RECORDING_INPUT = {
  /**
   * Id
   * @description Unique identifier of the session
   */
  id?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_GET_SESSION_RECORDING tool output.
 */
type HYPERBROWSER_GET_SESSION_RECORDING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if recording could not be retrieved
       * @default null
       */
      error: string | null;
      /**
       * Recording Url
       * @description Direct URL to download or view the session recording
       */
      recordingUrl: string;
      /**
       * Status
       * @description Recording status, e.g., 'not_enabled', 'ready', 'processing'
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
 * Type of HYPERBROWSER's HYPERBROWSER_LIST_PROFILES tool input.
 */
type HYPERBROWSER_LIST_PROFILES_INPUT = {
  /**
   * Limit
   * @description Number of profiles to return per page
   * @default 10
   */
  limit: number;
  /**
   * Name
   * @description Filter profiles by name containing this substring (case-insensitive)
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number to retrieve (1-based index)
   * @default 1
   */
  page: number;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_LIST_PROFILES tool output.
 */
type HYPERBROWSER_LIST_PROFILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Per Page
       * @description Number of profiles returned per page
       */
      perPage: number;
      /**
       * Profiles
       * @description List of profile objects on this page
       */
      profiles: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the profile was created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the profile
           */
          id: string;
          /**
           * Name
           * @description Name of the profile
           */
          name: string;
          /**
           * Team Id
           * @description Identifier of the team associated with the profile
           */
          teamId: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the profile was last updated
           */
          updatedAt: string;
      }[];
      /**
       * Total Count
       * @description Total number of matching profiles
       */
      totalCount: number;
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
 * Type of HYPERBROWSER's HYPERBROWSER_LIST_SESSIONS tool input.
 */
type HYPERBROWSER_LIST_SESSIONS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (default 1)
   * @default 1
   */
  page: number | null;
  /**
   * Status
   * @description Filter sessions by status
   * @default null
   * @enum {string|null}
   */
  status: "active" | "closed" | "error" | null;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_LIST_SESSIONS tool output.
 */
type HYPERBROWSER_LIST_SESSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Page Size
       * @description Number of items per page
       */
      pageSize: number;
      /**
       * Sessions
       * @description List of session summary objects
       */
      sessions: {
          /**
           * Created At
           * @description Creation timestamp (ISO 8601)
           */
          createdAt: string;
          /**
           * End Time
           * @description Session end timestamp (ISO 8601)
           */
          endTime: string;
          /**
           * Id
           * @description Session identifier
           */
          id: string;
          /**
           * Start Time
           * @description Session start timestamp (ISO 8601)
           */
          startTime: string;
          /**
           * Status
           * @description Session status
           * @enum {string}
           */
          status: "active" | "closed" | "error";
          /**
           * Team Id
           * @description Team identifier owning the session
           */
          teamId: string;
          /**
           * Updated At
           * @description Last update timestamp (ISO 8601)
           */
          updatedAt: string;
      }[];
      /**
       * Total Count
       * @description Total number of sessions matching the filter
       */
      totalCount: number;
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
 * Type of HYPERBROWSER's HYPERBROWSER_START_BROWSER_USE_TASK tool input.
 */
type HYPERBROWSER_START_BROWSER_USE_TASK_INPUT = {
  /**
   * ApiKeys
   * @description Custom API keys for providers
   * @default null
   */
  apiKeys: {
      /**
       * Anthropic
       * @description Anthropic API key
       * @default null
       */
      anthropic: string | null;
      /**
       * Google
       * @description Google API key
       * @default null
       */
      google: string | null;
      /**
       * Openai
       * @description OpenAI API key
       * @default null
       */
      openai: string | null;
  } | null;
  /**
   * Initial Actions
   * @description Actions to run before starting the task
   * @default null
   */
  initialActions: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Keep Browser Open
   * @description Keep the browser open after completion
   * @default false
   */
  keepBrowserOpen: boolean;
  /**
   * Llm
   * @description Language model to drive the agent
   * @default gemini-2.0-flash
   * @enum {string}
   */
  llm: "gpt-4o" | "gpt-4o-mini" | "gpt-4.1" | "gpt-4.1-mini" | "claude-sonnet-4-20250514" | "claude-3-7-sonnet-20250219" | "claude-3-5-sonnet-20241022" | "claude-3-5-haiku-20241022" | "gemini-2.0-flash";
  /**
   * Max Actions Per Step
   * @description Max actions per planning step
   * @default 10
   */
  maxActionsPerStep: number;
  /**
   * Max Failures
   * @description Max failures allowed before abort
   * @default 3
   */
  maxFailures: number;
  /**
   * Max Input Tokens
   * @description Max input tokens allowed
   * @default 128000
   */
  maxInputTokens: number;
  /**
   * Max Steps
   * @description Max agent steps before abort
   * @default 20
   */
  maxSteps: number;
  /**
   * Page Extraction Llm
   * @description LLM to use for page extraction
   * @default gemini-2.0-flash
   * @enum {string}
   */
  pageExtractionLlm: "gpt-4o" | "gpt-4o-mini" | "gpt-4.1" | "gpt-4.1-mini" | "claude-sonnet-4-20250514" | "claude-3-7-sonnet-20250219" | "claude-3-5-sonnet-20241022" | "claude-3-5-haiku-20241022" | "gemini-2.0-flash";
  /**
   * Planner Interval
   * @description Seconds between planner cycles
   * @default 10
   */
  plannerInterval: number;
  /**
   * Planner Llm
   * @description LLM to use for planning
   * @default gemini-2.0-flash
   * @enum {string}
   */
  plannerLlm: "gpt-4o" | "gpt-4o-mini" | "gpt-4.1" | "gpt-4.1-mini" | "claude-sonnet-4-20250514" | "claude-3-7-sonnet-20250219" | "claude-3-5-sonnet-20241022" | "claude-3-5-haiku-20241022" | "gemini-2.0-flash";
  /**
   * Session Id
   * @description Reuse an existing browser session ID
   * @default null
   */
  sessionId: string | null;
  /**
   * SessionOptions
   * @description Browser session configuration
   * @default null
   */
  sessionOptions: {
      /**
       * Accept Cookies
       * @description Auto-accept cookies
       * @default false
       */
      acceptCookies: boolean;
      /**
       * Adblock
       * @description Block ads
       * @default false
       */
      adblock: boolean;
      /**
       * Annoyances
       * @description Block pop-ups/overlays
       * @default false
       */
      annoyances: boolean;
      /**
       * Browser Args
       * @description Additional browser launch args
       * @default null
       */
      browserArgs: string[] | null;
      /**
       * Device
       * @description Device type fingerprint(s)
       * @default null
       */
      device: string[] | null;
      /**
       * Enable Video Web Recording
       * @description Record video when web recording is enabled
       * @default null
       */
      enableVideoWebRecording: boolean | null;
      /**
       * Enable Web Recording
       * @description Enable rrweb session recording
       * @default true
       */
      enableWebRecording: boolean;
      /**
       * Extension Ids
       * @description IDs of browser extensions to load
       * @default null
       */
      extensionIds: string[] | null;
      /**
       * Image Captcha Params
       * @description Configuration for image-based CAPTCHAs
       * @default null
       */
      imageCaptchaParams: {
          /**
           * Image Selector
           * @description CSS selector for CAPTCHA image
           */
          imageSelector: string;
          /**
           * Input Selector
           * @description CSS selector for CAPTCHA input
           */
          inputSelector: string;
      }[] | null;
      /**
       * Locales
       * @description Browser locale(s)
       */
      locales?: string[];
      /**
       * Operating Systems
       * @description OS fingerprint(s)
       * @default null
       */
      operatingSystems: string[] | null;
      /**
       * Platform
       * @description Browser platform fingerprint(s)
       * @default null
       */
      platform: string[] | null;
      /**
       * ProfileOptions
       * @description Browser profile configuration
       * @default null
       */
      profile: {
          /**
           * Id
           * @description Browser profile ID
           */
          id: string;
          /**
           * Persist Changes
           * @description Whether to persist changes to the profile
           */
          persistChanges: boolean;
      } | null;
      /**
       * Proxy City
       * @description City-level proxy targeting
       * @default null
       */
      proxyCity: string | null;
      /**
       * Proxy Country
       * @description Country for geo-specific proxy (ISO code)
       * @default null
       */
      proxyCountry: string | null;
      /**
       * Proxy Server
       * @description Proxy host/URL; required if useProxy=true
       * @default null
       */
      proxyServer: string | null;
      /**
       * Proxy Server Password
       * @description Proxy authentication password
       * @default null
       */
      proxyServerPassword: string | null;
      /**
       * Proxy Server Username
       * @description Proxy authentication username
       * @default null
       */
      proxyServerUsername: string | null;
      /**
       * Proxy State
       * @description State-level proxy targeting
       * @default null
       */
      proxyState: string | null;
      /**
       * Screen
       * @description Emulated screen size
       */
      screen?: {
          /**
           * Height
           * @description Emulated screen height in pixels
           * @default 720
           */
          height: number;
          /**
           * Width
           * @description Emulated screen width in pixels
           * @default 1280
           */
          width: number;
      };
      /**
       * Solve Captchas
       * @description Automatically solve CAPTCHAs (paid plan)
       * @default false
       */
      solveCaptchas: boolean;
      /**
       * Timeout Minutes
       * @description Session timeout in minutes (1720)
       * @default null
       */
      timeoutMinutes: number | null;
      /**
       * Trackers
       * @description Block trackers
       * @default false
       */
      trackers: boolean;
      /**
       * Url Blocklist
       * @description URL patterns to block
       * @default null
       */
      urlBlocklist: string[] | null;
      /**
       * Use Proxy
       * @description Route traffic through a proxy
       * @default false
       */
      useProxy: boolean;
      /**
       * Use Stealth
       * @description Launch browser in stealth mode
       * @default false
       */
      useStealth: boolean;
  } | null;
  /**
   * Task
   * @description Instruction or goal for the AI agent
   */
  task?: string;
  /**
   * Use Custom Api Keys
   * @description Use custom provider API keys
   * @default false
   */
  useCustomApiKeys: boolean;
  /**
   * Use Vision
   * @description Enable vision for page context
   * @default true
   */
  useVision: boolean;
  /**
   * Use Vision For Planner
   * @description Allow planner to use vision
   * @default false
   */
  useVisionForPlanner: boolean;
  /**
   * Validate Output
   * @description Whether to validate the final output
   * @default false
   */
  validateOutput: boolean;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_START_BROWSER_USE_TASK tool output.
 */
type HYPERBROWSER_START_BROWSER_USE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job Id
       * @description Identifier for the started job
       */
      jobId: string;
      /**
       * Live Url
       * @description URL to view the live run
       */
      liveUrl: string;
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
 * Type of HYPERBROWSER's HYPERBROWSER_START_CLAUDE_COMPUTER_USE_TASK tool input.
 */
type HYPERBROWSER_START_CLAUDE_COMPUTER_USE_TASK_INPUT = {
  /**
   * ApiKeys
   * @description Custom API key configuration.
   * @default null
   */
  apiKeys: {
      /**
       * Anthropic
       * @description Custom Anthropic API key
       */
      anthropic: string;
  } | null;
  /**
   * Keep Browser Open
   * @description Keep browser open after completion
   * @default false
   */
  keepBrowserOpen: boolean | null;
  /**
   * Llm
   * @description Model variant to use for the task
   * @default claude-3-7-sonnet-20250219
   * @enum {string}
   */
  llm: "claude-sonnet-4-20250514" | "claude-3-7-sonnet-20250219";
  /**
   * Max Failures
   * @description Max allowed failures before abort
   * @default 3
   */
  maxFailures: number | null;
  /**
   * Max Steps
   * @description Max action steps to run
   * @default 20
   */
  maxSteps: number | null;
  /**
   * Session Id
   * @description Reuse an existing session by ID
   * @default null
   */
  sessionId: string | null;
  /**
   * SessionOptions
   * @description Overrides for browsing session settings.
   * @default null
   */
  sessionOptions: {
      /**
       * Accept Cookies
       * @description Automatically accept cookie prompts
       * @default null
       */
      acceptCookies: boolean | null;
      /**
       * Adblock
       * @description Block ads during session
       * @default null
       */
      adblock: boolean | null;
      /**
       * Annoyances
       * @description Suppress pop-ups and overlays
       * @default null
       */
      annoyances: boolean | null;
      /**
       * Browser Args
       * @description Additional browser launch arguments
       * @default null
       */
      browserArgs: string[] | null;
      /**
       * Device
       * @description Device form-factors to emulate
       * @default null
       */
      device: string[] | null;
      /**
       * Enable Video Web Recording
       * @description Record video of the session
       * @default null
       */
      enableVideoWebRecording: boolean | null;
      /**
       * Enable Web Recording
       * @description Enable DOM event recording
       * @default null
       */
      enableWebRecording: boolean | null;
      /**
       * Extension Ids
       * @description Browser extension IDs to load
       * @default null
       */
      extensionIds: string[] | null;
      /**
       * Image Captcha Params
       * @description Image CAPTCHA handling parameters
       * @default null
       */
      imageCaptchaParams: {
          /**
           * Image Selector
           * @description CSS selector for CAPTCHA image
           */
          imageSelector: string;
          /**
           * Input Selector
           * @description CSS selector for CAPTCHA input
           */
          inputSelector: string;
      }[] | null;
      /**
       * Locales
       * @description Locales to emulate (e.g., en-US)
       * @default null
       */
      locales: string[] | null;
      /**
       * Operating Systems
       * @description Operating systems to emulate
       * @default null
       */
      operatingSystems: string[] | null;
      /**
       * Platform
       * @description Browser platforms to emulate
       * @default null
       */
      platform: string[] | null;
      /**
       * ProfileOptions
       * @description Browser profile reuse settings.
       * @default null
       */
      profile: {
          /**
           * Id
           * @description Browser profile ID
           */
          id: string;
          /**
           * Persist Changes
           * @description Whether to persist changes to the profile
           */
          persistChanges: boolean;
      } | null;
      /**
       * Proxy City
       * @description City-level proxy targeting
       * @default null
       */
      proxyCity: string | null;
      /**
       * Proxy Country
       * @description Country for geo-specific proxy (ISO code)
       * @default null
       */
      proxyCountry: string | null;
      /**
       * Proxy Server
       * @description Proxy host/URL; required if useProxy=true
       * @default null
       */
      proxyServer: string | null;
      /**
       * Proxy Server Password
       * @description Password for proxy authentication
       * @default null
       */
      proxyServerPassword: string | null;
      /**
       * Proxy Server Username
       * @description Username for proxy authentication
       * @default null
       */
      proxyServerUsername: string | null;
      /**
       * Proxy State
       * @description State-level proxy targeting
       * @default null
       */
      proxyState: string | null;
      /**
       * Screen
       * @description Screen configuration: width and height in pixels.
       * @default null
       */
      screen: {
          /**
           * Height
           * @description Screen height in pixels, must be >=1
           */
          height: number;
          /**
           * Width
           * @description Screen width in pixels, must be >=1
           */
          width: number;
      } | null;
      /**
       * Solve Captchas
       * @description Auto-solve image CAPTCHAs
       * @default null
       */
      solveCaptchas: boolean | null;
      /**
       * Timeout Minutes
       * @description Maximum runtime for this task, in minutes
       * @default null
       */
      timeoutMinutes: number | null;
      /**
       * Trackers
       * @description Block trackers during session
       * @default null
       */
      trackers: boolean | null;
      /**
       * Url Blocklist
       * @description URL patterns to block during browsing
       * @default null
       */
      urlBlocklist: string[] | null;
      /**
       * Use Proxy
       * @description Route traffic through a proxy server
       * @default false
       */
      useProxy: boolean;
      /**
       * Use Stealth
       * @description Launch browser in stealth mode
       * @default false
       */
      useStealth: boolean;
  } | null;
  /**
   * Task
   * @description Natural language instructions for the Claude agent
   */
  task?: string;
  /**
   * Use Computer Action
   * @description Enable built-in Claude computer action library
   * @default false
   */
  useComputerAction: boolean | null;
  /**
   * Use Custom Api Keys
   * @description Whether to supply custom API keys
   * @default false
   */
  useCustomApiKeys: boolean | null;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_START_CLAUDE_COMPUTER_USE_TASK tool output.
 */
type HYPERBROWSER_START_CLAUDE_COMPUTER_USE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job Id
       * @description Unique identifier for the submitted job
       */
      jobId: string;
      /**
       * Live Url
       * @description URL to monitor job status in real time
       */
      liveUrl: string;
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
 * Type of HYPERBROWSER's HYPERBROWSER_START_CRAWL_JOB tool input.
 */
type HYPERBROWSER_START_CRAWL_JOB_INPUT = {
  /**
   * Exclude Patterns
   * @description URL patterns to exclude from crawling
   * @default null
   */
  excludePatterns: string[] | null;
  /**
   * Follow Links
   * @description Whether to follow links during crawl
   * @default true
   */
  followLinks: boolean | null;
  /**
   * Ignore Sitemap
   * @description Ignore sitemap.xml files if present
   * @default false
   */
  ignoreSitemap: boolean | null;
  /**
   * Include Patterns
   * @description URL patterns to include in crawling
   * @default null
   */
  includePatterns: string[] | null;
  /**
   * Max Pages
   * @description Maximum pages to crawl
   * @default null
   */
  maxPages: number | null;
  /**
   * ScrapeOptions
   * @description Configuration for post-crawl data extraction.
   * @default null
   */
  scrapeOptions: {
      /**
       * Exclude Tags
       * @description HTML tags to exclude from extraction
       * @default null
       */
      excludeTags: string[] | null;
      /**
       * Formats
       * @description Desired output formats (e.g., ['json','csv'])
       * @default null
       */
      formats: string[] | null;
      /**
       * Include Tags
       * @description HTML tags to include in extraction
       * @default null
       */
      includeTags: string[] | null;
      /**
       * Only Main Content
       * @description Extract only main content of pages
       * @default false
       */
      onlyMainContent: boolean | null;
      /**
       * ScreenConfig
       * @description Viewport screen dimensions for crawling.
       * @default null
       */
      screenshotOptions: {
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
      /**
       * Timeout
       * @description Max milliseconds to wait for page events
       * @default null
       */
      timeout: number | null;
      /**
       * Wait For
       * @description Milliseconds to wait after page load
       * @default null
       */
      waitFor: number | null;
      /**
       * Wait Until
       * @description Event to wait for before scraping
       * @default null
       * @enum {string|null}
       */
      waitUntil: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" | null;
  } | null;
  /**
   * SessionOptions
   * @description Settings to configure the browser session during crawl.
   * @default null
   */
  sessionOptions: {
      /**
       * Accept Cookies
       * @description Automatically accept cookies
       * @default false
       */
      acceptCookies: boolean | null;
      /**
       * Adblock
       * @description Enable ad-blocking
       * @default false
       */
      adblock: boolean | null;
      /**
       * Annoyances
       * @description Suppress pop-ups and banners
       * @default false
       */
      annoyances: boolean | null;
      /**
       * Browser Args
       * @description Additional browser launch arguments
       * @default null
       */
      browserArgs: string[] | null;
      /**
       * Device
       * @description Device types (e.g., ['desktop','mobile'])
       * @default null
       */
      device: string[] | null;
      /**
       * Enable Video Web Recording
       * @description Record video of browsing session
       * @default false
       */
      enableVideoWebRecording: boolean | null;
      /**
       * Enable Web Recording
       * @description Record network and DOM operations
       * @default false
       */
      enableWebRecording: boolean | null;
      /**
       * Extension Ids
       * @description List of extension IDs to install
       * @default null
       */
      extensionIds: string[] | null;
      /**
       * Image Captcha Params
       * @description Image CAPTCHA solving parameters
       * @default null
       */
      imageCaptchaParams: {
          /**
           * Image Selector
           * @description CSS selector to locate the CAPTCHA image
           */
          imageSelector: string;
          /**
           * Input Selector
           * @description CSS selector for the CAPTCHA input field
           */
          inputSelector: string;
      }[] | null;
      /**
       * Locales
       * @description Locale codes (e.g., ['en-US'])
       * @default null
       */
      locales: string[] | null;
      /**
       * Operating Systems
       * @description Preferred operating systems (e.g., ['windows','linux'])
       * @default null
       */
      operatingSystems: string[] | null;
      /**
       * Platform
       * @description Browser platforms (e.g., ['chrome','firefox'])
       * @default null
       */
      platform: string[] | null;
      /**
       * ProfileConfig
       * @description Browser profile options for session reuse.
       * @default null
       */
      profile: {
          /**
           * Id
           * @description Profile identifier (UUID)
           */
          id: string;
          /**
           * Persist Changes
           * @description Persist changes to this profile during crawl
           */
          persistChanges: boolean;
      } | null;
      /**
       * Proxy City
       * @description Proxy city name (mutually exclusive with proxyState)
       * @default null
       */
      proxyCity: string | null;
      /**
       * Proxy Country
       * @description Two-letter proxy country code (e.g., US)
       * @default null
       */
      proxyCountry: string | null;
      /**
       * Proxy Server
       * @description Proxy server URL
       * @default null
       */
      proxyServer: string | null;
      /**
       * Proxy Server Password
       * @description Password for proxy authentication
       * @default null
       */
      proxyServerPassword: string | null;
      /**
       * Proxy Server Username
       * @description Username for proxy authentication
       * @default null
       */
      proxyServerUsername: string | null;
      /**
       * Proxy State
       * @description Two-letter state code (mutually exclusive with proxyCity)
       * @default null
       */
      proxyState: string | null;
      /**
       * ScreenConfig
       * @description Viewport screen dimensions for crawling.
       * @default null
       */
      screen: {
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
      /**
       * Solve Captchas
       * @description Attempt automatic CAPTCHA solving
       * @default false
       */
      solveCaptchas: boolean | null;
      /**
       * Timeout Minutes
       * @description Maximum crawl time in minutes
       * @default null
       */
      timeoutMinutes: number | null;
      /**
       * Trackers
       * @description Block tracker scripts
       * @default false
       */
      trackers: boolean | null;
      /**
       * Url Blocklist
       * @description URL patterns to block during crawl
       * @default null
       */
      urlBlocklist: string[] | null;
      /**
       * Use Proxy
       * @description Route traffic through a proxy
       * @default false
       */
      useProxy: boolean | null;
      /**
       * Use Stealth
       * @description Enable stealth mode to reduce detection
       * @default false
       */
      useStealth: boolean | null;
  } | null;
  /**
   * Url
   * @description Starting URL for the crawl job
   */
  url?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_START_CRAWL_JOB tool output.
 */
type HYPERBROWSER_START_CRAWL_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job Id
       * @description Identifier of the started crawl job
       */
      jobId: string;
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
 * Type of HYPERBROWSER's HYPERBROWSER_START_EXTRACT_JOB tool input.
 */
type HYPERBROWSER_START_EXTRACT_JOB_INPUT = {
  /**
   * Max Links
   * @description Max links to consider when crawling (for URLs ending with /*)
   * @default null
   */
  maxLinks: number | null;
  /**
   * Prompt
   * @description Instructions guiding how to structure/collect extracted data
   * @default null
   */
  prompt: string | null;
  /**
   * Schema
   * @description JSON schema describing the desired output structure
   * @default null
   */
  schema: {
      [key: string]: unknown;
  } | null;
  /**
   * SessionOptions
   * @description Browser/session configuration options
   * @default null
   */
  sessionOptions: {
      /**
       * Accept Cookies
       * @description Auto-accept cookies
       * @default false
       */
      acceptCookies: boolean;
      /**
       * Adblock
       * @description Block ads
       * @default false
       */
      adblock: boolean;
      /**
       * Annoyances
       * @description Block pop-ups/overlays
       * @default false
       */
      annoyances: boolean;
      /**
       * Browser Args
       * @description Additional browser launch args
       * @default null
       */
      browserArgs: string[] | null;
      /**
       * Device
       * @description Device type fingerprint(s)
       * @default null
       */
      device: string[] | null;
      /**
       * Enable Video Web Recording
       * @description Record video when web recording is enabled
       * @default null
       */
      enableVideoWebRecording: boolean | null;
      /**
       * Enable Web Recording
       * @description Enable rrweb session recording
       * @default false
       */
      enableWebRecording: boolean;
      /**
       * Extension Ids
       * @description IDs of browser extensions to load
       * @default null
       */
      extensionIds: string[] | null;
      /**
       * Image Captcha Params
       * @description Configuration for image-based CAPTCHAs
       * @default null
       */
      imageCaptchaParams: {
          /**
           * Image Selector
           * @description CSS selector for CAPTCHA image
           */
          imageSelector: string;
          /**
           * Input Selector
           * @description CSS selector for CAPTCHA input
           */
          inputSelector: string;
      }[] | null;
      /**
       * Locales
       * @description Browser locale(s)
       */
      locales?: string[];
      /**
       * Operating Systems
       * @description OS fingerprint(s)
       * @default null
       */
      operatingSystems: string[] | null;
      /**
       * Platform
       * @description Browser platform fingerprint(s)
       * @default null
       */
      platform: string[] | null;
      /**
       * Profile
       * @description Browser profile configuration
       * @default null
       */
      profile: {
          /**
           * Id
           * @description Browser profile ID
           */
          id: string;
          /**
           * Persist Changes
           * @description Whether to persist changes to the profile
           */
          persistChanges: boolean;
      } | null;
      /**
       * Proxy City
       * @description City-level proxy targeting
       * @default null
       */
      proxyCity: string | null;
      /**
       * Proxy Country
       * @description Country for geo-specific proxy (e.g. 'US')
       * @default null
       */
      proxyCountry: string | null;
      /**
       * Proxy Server
       * @description Proxy host/URL; required if useProxy=true
       * @default null
       */
      proxyServer: string | null;
      /**
       * Proxy Server Password
       * @description Proxy authentication password
       * @default null
       */
      proxyServerPassword: string | null;
      /**
       * Proxy Server Username
       * @description Proxy authentication username
       * @default null
       */
      proxyServerUsername: string | null;
      /**
       * Proxy State
       * @description State-level proxy targeting
       * @default null
       */
      proxyState: string | null;
      /**
       * Screen
       * @description Emulated screen size
       */
      screen?: {
          /**
           * Height
           * @description Emulated screen height in pixels
           * @default 720
           */
          height: number;
          /**
           * Width
           * @description Emulated screen width in pixels
           * @default 1280
           */
          width: number;
      };
      /**
       * Solve Captchas
       * @description Automatically solve CAPTCHAs
       * @default false
       */
      solveCaptchas: boolean;
      /**
       * Timeout Minutes
       * @description Session timeout in minutes (1–720)
       * @default null
       */
      timeoutMinutes: number | null;
      /**
       * Trackers
       * @description Block trackers
       * @default false
       */
      trackers: boolean;
      /**
       * Url Blocklist
       * @description URL patterns to block
       * @default null
       */
      urlBlocklist: string[] | null;
      /**
       * Use Proxy
       * @description Route traffic through a proxy
       * @default false
       */
      useProxy: boolean;
      /**
       * Use Stealth
       * @description Launch browser in stealth mode
       * @default false
       */
      useStealth: boolean;
  } | null;
  /**
   * System Prompt
   * @description Optional system prompt to guide the extractor
   * @default null
   */
  systemPrompt: string | null;
  /**
   * Urls
   * @description List of URLs to extract from; append /* to enable crawling the entire site
   */
  urls?: string[];
  /**
   * Wait For
   * @description Milliseconds to wait after page load before extraction
   * @default 0
   */
  waitFor: number;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_START_EXTRACT_JOB tool output.
 */
type HYPERBROWSER_START_EXTRACT_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job Id
       * @description Identifier of the started extract job
       */
      jobId: string;
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
 * Type of HYPERBROWSER's HYPERBROWSER_STOP_BROWSER_USE_TASK tool input.
 */
type HYPERBROWSER_STOP_BROWSER_USE_TASK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the browser-use task to stop
   */
  id?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_STOP_BROWSER_USE_TASK tool output.
 */
type HYPERBROWSER_STOP_BROWSER_USE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the browser-use task was stopped successfully
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
 * Type of HYPERBROWSER's HYPERBROWSER_STOP_CLAUDE_COMPUTER_USE_TASK tool input.
 */
type HYPERBROWSER_STOP_CLAUDE_COMPUTER_USE_TASK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the Claude computer use task to stop
   */
  id?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_STOP_CLAUDE_COMPUTER_USE_TASK tool output.
 */
type HYPERBROWSER_STOP_CLAUDE_COMPUTER_USE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the task was stopped successfully
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
 * Type of HYPERBROWSER's HYPERBROWSER_STOP_SESSION tool input.
 */
type HYPERBROWSER_STOP_SESSION_INPUT = {
  /**
   * Id
   * @description Unique identifier of the session to stop
   */
  id?: string;
};

/**
 * Type of HYPERBROWSER's HYPERBROWSER_STOP_SESSION tool output.
 */
type HYPERBROWSER_STOP_SESSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the session was stopped successfully
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
 * Type map of all available tool input types for toolkit "HYPERBROWSER".
 */
export type HYPERBROWSER_TOOL_INPUTS = {
  CREATE_PROFILE: HYPERBROWSER_CREATE_PROFILE_INPUT
  CREATE_SCRAPE_JOB: HYPERBROWSER_CREATE_SCRAPE_JOB_INPUT
  CREATE_SESSION: HYPERBROWSER_CREATE_SESSION_INPUT
  DELETE_PROFILE: HYPERBROWSER_DELETE_PROFILE_INPUT
  GET_BROWSER_USE_TASK_STATUS: HYPERBROWSER_GET_BROWSER_USE_TASK_STATUS_INPUT
  GET_CLAUDE_COMPUTER_USE_TASK_STATUS: HYPERBROWSER_GET_CLAUDE_COMPUTER_USE_TASK_STATUS_INPUT
  GET_CRAWL_JOB_RESULT: HYPERBROWSER_GET_CRAWL_JOB_RESULT_INPUT
  GET_CRAWL_JOB_STATUS: HYPERBROWSER_GET_CRAWL_JOB_STATUS_INPUT
  GET_EXTRACT_JOB_RESULT: HYPERBROWSER_GET_EXTRACT_JOB_RESULT_INPUT
  GET_EXTRACT_JOB_STATUS: HYPERBROWSER_GET_EXTRACT_JOB_STATUS_INPUT
  GET_PROFILE_BY_ID: HYPERBROWSER_GET_PROFILE_BY_ID_INPUT
  GET_SCRAPE_JOB_RESULT: HYPERBROWSER_GET_SCRAPE_JOB_RESULT_INPUT
  GET_SCRAPE_JOB_STATUS: HYPERBROWSER_GET_SCRAPE_JOB_STATUS_INPUT
  GET_SESSION_DETAILS: HYPERBROWSER_GET_SESSION_DETAILS_INPUT
  GET_SESSION_DOWNLOADS_URL: HYPERBROWSER_GET_SESSION_DOWNLOADS_URL_INPUT
  GET_SESSION_RECORDING: HYPERBROWSER_GET_SESSION_RECORDING_INPUT
  LIST_PROFILES: HYPERBROWSER_LIST_PROFILES_INPUT
  LIST_SESSIONS: HYPERBROWSER_LIST_SESSIONS_INPUT
  START_BROWSER_USE_TASK: HYPERBROWSER_START_BROWSER_USE_TASK_INPUT
  START_CLAUDE_COMPUTER_USE_TASK: HYPERBROWSER_START_CLAUDE_COMPUTER_USE_TASK_INPUT
  START_CRAWL_JOB: HYPERBROWSER_START_CRAWL_JOB_INPUT
  START_EXTRACT_JOB: HYPERBROWSER_START_EXTRACT_JOB_INPUT
  STOP_BROWSER_USE_TASK: HYPERBROWSER_STOP_BROWSER_USE_TASK_INPUT
  STOP_CLAUDE_COMPUTER_USE_TASK: HYPERBROWSER_STOP_CLAUDE_COMPUTER_USE_TASK_INPUT
  STOP_SESSION: HYPERBROWSER_STOP_SESSION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HYPERBROWSER".
 */
export type HYPERBROWSER_TOOL_OUTPUTS = {
  CREATE_PROFILE: HYPERBROWSER_CREATE_PROFILE_OUTPUT
  CREATE_SCRAPE_JOB: HYPERBROWSER_CREATE_SCRAPE_JOB_OUTPUT
  CREATE_SESSION: HYPERBROWSER_CREATE_SESSION_OUTPUT
  DELETE_PROFILE: HYPERBROWSER_DELETE_PROFILE_OUTPUT
  GET_BROWSER_USE_TASK_STATUS: HYPERBROWSER_GET_BROWSER_USE_TASK_STATUS_OUTPUT
  GET_CLAUDE_COMPUTER_USE_TASK_STATUS: HYPERBROWSER_GET_CLAUDE_COMPUTER_USE_TASK_STATUS_OUTPUT
  GET_CRAWL_JOB_RESULT: HYPERBROWSER_GET_CRAWL_JOB_RESULT_OUTPUT
  GET_CRAWL_JOB_STATUS: HYPERBROWSER_GET_CRAWL_JOB_STATUS_OUTPUT
  GET_EXTRACT_JOB_RESULT: HYPERBROWSER_GET_EXTRACT_JOB_RESULT_OUTPUT
  GET_EXTRACT_JOB_STATUS: HYPERBROWSER_GET_EXTRACT_JOB_STATUS_OUTPUT
  GET_PROFILE_BY_ID: HYPERBROWSER_GET_PROFILE_BY_ID_OUTPUT
  GET_SCRAPE_JOB_RESULT: HYPERBROWSER_GET_SCRAPE_JOB_RESULT_OUTPUT
  GET_SCRAPE_JOB_STATUS: HYPERBROWSER_GET_SCRAPE_JOB_STATUS_OUTPUT
  GET_SESSION_DETAILS: HYPERBROWSER_GET_SESSION_DETAILS_OUTPUT
  GET_SESSION_DOWNLOADS_URL: HYPERBROWSER_GET_SESSION_DOWNLOADS_URL_OUTPUT
  GET_SESSION_RECORDING: HYPERBROWSER_GET_SESSION_RECORDING_OUTPUT
  LIST_PROFILES: HYPERBROWSER_LIST_PROFILES_OUTPUT
  LIST_SESSIONS: HYPERBROWSER_LIST_SESSIONS_OUTPUT
  START_BROWSER_USE_TASK: HYPERBROWSER_START_BROWSER_USE_TASK_OUTPUT
  START_CLAUDE_COMPUTER_USE_TASK: HYPERBROWSER_START_CLAUDE_COMPUTER_USE_TASK_OUTPUT
  START_CRAWL_JOB: HYPERBROWSER_START_CRAWL_JOB_OUTPUT
  START_EXTRACT_JOB: HYPERBROWSER_START_EXTRACT_JOB_OUTPUT
  STOP_BROWSER_USE_TASK: HYPERBROWSER_STOP_BROWSER_USE_TASK_OUTPUT
  STOP_CLAUDE_COMPUTER_USE_TASK: HYPERBROWSER_STOP_CLAUDE_COMPUTER_USE_TASK_OUTPUT
  STOP_SESSION: HYPERBROWSER_STOP_SESSION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HYPERBROWSER toolkit.
 */
export const HYPERBROWSER = {
  slug: "hyperbrowser",
  tools: {
    /**
     * Tool to create a new profile. Use when you need to initialize a Hyperbrowser profile before analysis.
     */
    CREATE_PROFILE: "HYPERBROWSER_CREATE_PROFILE",
    /**
     * Tool to initiate a new scrape job. Use when you need to extract structured content from a target URL with custom session and scrape settings.
     */
    CREATE_SCRAPE_JOB: "HYPERBROWSER_CREATE_SCRAPE_JOB",
    /**
     * Tool to create a new browser session with custom stealth, proxy, and privacy settings. Use when initializing an automated browsing session with specific configuration.
     */
    CREATE_SESSION: "HYPERBROWSER_CREATE_SESSION",
    /**
     * Tool to delete a profile. Use when you need to remove a profile by its unique identifier after confirming its existence.
     */
    DELETE_PROFILE: "HYPERBROWSER_DELETE_PROFILE",
    /**
     * Tool to retrieve the current status of a browser-use task. Use when checking if a browser automation task has completed or is still pending.
     */
    GET_BROWSER_USE_TASK_STATUS: "HYPERBROWSER_GET_BROWSER_USE_TASK_STATUS",
    /**
     * Tool to retrieve the status of a Claude Computer Use task. Use after creating a task to poll its status.
     */
    GET_CLAUDE_COMPUTER_USE_TASK_STATUS: "HYPERBROWSER_GET_CLAUDE_COMPUTER_USE_TASK_STATUS",
    /**
     * Tool to retrieve the result of a completed crawl job. Use after confirming crawl job completion to fetch current page batch and status. Supports pagination via page and batchSize.
     */
    GET_CRAWL_JOB_RESULT: "HYPERBROWSER_GET_CRAWL_JOB_RESULT",
    /**
     * Tool to retrieve the status and results of a specific crawl job. Use after submitting a crawl job to check its progress or fetch results.
     */
    GET_CRAWL_JOB_STATUS: "HYPERBROWSER_GET_CRAWL_JOB_STATUS",
    /**
     * Tool to fetch the status and results of a specific extract job. Use after initiating an extract job to monitor progress and retrieve final data.
     */
    GET_EXTRACT_JOB_RESULT: "HYPERBROWSER_GET_EXTRACT_JOB_RESULT",
    /**
     * Tool to retrieve the status of an extract job. Use after submitting an extract job to poll its status.
     */
    GET_EXTRACT_JOB_STATUS: "HYPERBROWSER_GET_EXTRACT_JOB_STATUS",
    /**
     * Tool to retrieve profile details by ID. Use after confirming the profile ID.
     */
    GET_PROFILE_BY_ID: "HYPERBROWSER_GET_PROFILE_BY_ID",
    /**
     * Tool to fetch the status and results of a specific scrape job. Use after initiating a scrape job to monitor its progress and retrieve final data.
     */
    GET_SCRAPE_JOB_RESULT: "HYPERBROWSER_GET_SCRAPE_JOB_RESULT",
    /**
     * Tool to retrieve the current status of a specific scrape job. Use after initiating a scrape job to poll its status.
     */
    GET_SCRAPE_JOB_STATUS: "HYPERBROWSER_GET_SCRAPE_JOB_STATUS",
    /**
     * Tool to retrieve session details by ID. Use after confirming the session ID.
     */
    GET_SESSION_DETAILS: "HYPERBROWSER_GET_SESSION_DETAILS",
    /**
     * Tool to retrieve the downloads URL for a session. Use when you need the signed URL for session downloads after processing is complete.
     */
    GET_SESSION_DOWNLOADS_URL: "HYPERBROWSER_GET_SESSION_DOWNLOADS_URL",
    /**
     * Tool to retrieve the recording URL of a session. Use after confirming the session ID and when the recording is expected to be ready.
     */
    GET_SESSION_RECORDING: "HYPERBROWSER_GET_SESSION_RECORDING",
    /**
     * Tool to list profiles. Use when you need to fetch paginated profiles and optionally filter by name.
     */
    LIST_PROFILES: "HYPERBROWSER_LIST_PROFILES",
    /**
     * Tool to list sessions with optional status filter. Use when you need a paginated overview of browser sessions before acting on them.
     */
    LIST_SESSIONS: "HYPERBROWSER_LIST_SESSIONS",
    /**
     * Tool to start an asynchronous browser-use task. Use when you need to automate web interactions given a task instruction.
     */
    START_BROWSER_USE_TASK: "HYPERBROWSER_START_BROWSER_USE_TASK",
    /**
     * Tool to start a Claude Computer Use task. Use when you need AI-driven automated browser interactions. Call after you have your task prompt and any session preferences configured.
     */
    START_CLAUDE_COMPUTER_USE_TASK: "HYPERBROWSER_START_CLAUDE_COMPUTER_USE_TASK",
    /**
     * Tool to start a new crawl job for a specified URL. Use when you need to initiate a web crawl before checking job status.
     */
    START_CRAWL_JOB: "HYPERBROWSER_START_CRAWL_JOB",
    /**
     * Tool to start an extract job. Use when you need to initiate a new extraction with custom prompts, schema, and session options. Call after preparing URLs and desired extraction schema.
     */
    START_EXTRACT_JOB: "HYPERBROWSER_START_EXTRACT_JOB",
    /**
     * Tool to stop a running browser-use task. Use when halting an in-progress browser automation task after confirming its task ID.
     */
    STOP_BROWSER_USE_TASK: "HYPERBROWSER_STOP_BROWSER_USE_TASK",
    /**
     * Tool to stop a running Claude computer use task. Use when a Claude computer use task is in progress and needs to be terminated.
     */
    STOP_CLAUDE_COMPUTER_USE_TASK: "HYPERBROWSER_STOP_CLAUDE_COMPUTER_USE_TASK",
    /**
     * Tool to stop a running session by ID. Use after confirming the session is active.
     */
    STOP_SESSION: "HYPERBROWSER_STOP_SESSION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HYPERBROWSER".
 */
export type HYPERBROWSER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HYPERBROWSER".
 */
export type HYPERBROWSER_TRIGGER_EVENTS = {}
