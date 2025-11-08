// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BROWSERLESS's BROWSERLESS_DOWNLOAD_FILE tool input.
 */
type BROWSERLESS_DOWNLOAD_FILE_INPUT = {
  /**
   * Code
   * @description The Puppeteer script to execute for downloading the file. This should be a valid JavaScript code that triggers a file download.
   */
  code?: string;
  /**
   * Context
   * @description Additional context data to be passed to the script
   * @default null
   */
  context: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BROWSERLESS's BROWSERLESS_DOWNLOAD_FILE tool output.
 */
type BROWSERLESS_DOWNLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The downloaded file content encoded as base64 string
       */
      content: string;
      /**
       * Content Type
       * @description The content type of the downloaded file
       */
      content_type: string;
      /**
       * Filename
       * @description The name of the downloaded file
       */
      filename: string;
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
 * Type of BROWSERLESS's BROWSERLESS_EXECUTE_CUSTOM_FUNCTION tool input.
 */
type BROWSERLESS_EXECUTE_CUSTOM_FUNCTION_INPUT = {
  /**
   * Code
   * @description The Puppeteer function code to execute. Must be a valid ESM module with a default export function.
   */
  code?: string;
  /**
   * Context
   * @description Optional context object to pass to the function
   * @default null
   */
  context: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BROWSERLESS's BROWSERLESS_EXECUTE_CUSTOM_FUNCTION tool output.
 */
type BROWSERLESS_EXECUTE_CUSTOM_FUNCTION_OUTPUT = {
  /**
   * Data
   * @description The data returned by the executed function
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
  /**
   * Type
   * @description The content type of the returned data
   */
  type?: string;
};

/**
 * Type of BROWSERLESS's BROWSERLESS_FETCH_HTML_CONTENT tool input.
 */
type BROWSERLESS_FETCH_HTML_CONTENT_INPUT = {
  /**
   * Best Attempt
   * @description Whether to continue on error
   * @default null
   */
  best_attempt: boolean | null;
  /**
   * Goto Options
   * @description Navigation options like waitUntil
   * @default null
   */
  goto_options: {
      [key: string]: unknown;
  } | null;
  /**
   * Reject Request Pattern
   * @description Patterns to block specific requests
   * @default null
   */
  reject_request_pattern: string[] | null;
  /**
   * Reject Resource Types
   * @description Types of resources to block (e.g., images, stylesheets)
   * @default null
   */
  reject_resource_types: string[] | null;
  /**
   * Url
   * @description The URL of the webpage to fetch HTML content from
   */
  url?: string;
  /**
   * Wait For Event
   * @description Wait for specific event with optional timeout
   * @default null
   */
  wait_for_event: {
      [key: string]: unknown;
  } | null;
  /**
   * Wait For Selector
   * @description Wait for specific element with optional timeout
   * @default null
   */
  wait_for_selector: {
      [key: string]: unknown;
  } | null;
  /**
   * Wait For Timeout
   * @description Wait for specific time in milliseconds
   * @default null
   */
  wait_for_timeout: number | null;
};

/**
 * Type of BROWSERLESS's BROWSERLESS_FETCH_HTML_CONTENT tool output.
 */
type BROWSERLESS_FETCH_HTML_CONTENT_OUTPUT = {
  /**
   * Data
   * @description The complete HTML content of the webpage
   */
  data?: string;
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
 * Type of BROWSERLESS's BROWSERLESS_GENERATE_PDF tool input.
 */
type BROWSERLESS_GENERATE_PDF_INPUT = {
  /**
   * Add Script Tag
   * @description Custom script tags to inject
   * @default null
   */
  addScriptTag: {
      /**
       * Content
       * @description JavaScript content to inject
       * @default null
       */
      content: string | null;
      /**
       * Url
       * @description URL of the JavaScript file to inject
       * @default null
       */
      url: string | null;
  }[] | null;
  /**
   * Add Style Tag
   * @description Custom style tags to inject
   * @default null
   */
  addStyleTag: {
      /**
       * Content
       * @description CSS content to inject
       * @default null
       */
      content: string | null;
      /**
       * Url
       * @description URL of the CSS file to inject
       * @default null
       */
      url: string | null;
  }[] | null;
  /**
   * Best Attempt
   * @description Continue on error
   * @default null
   */
  bestAttempt: boolean | null;
  /**
   * GotoOptions
   * @description Navigation options for page loading.
   * @default null
   */
  gotoOptions: {
      /**
       * Timeout
       * @description Maximum navigation time in milliseconds
       * @default null
       */
      timeout: number | null;
      /**
       * Wait Until
       * @description When to consider navigation succeeded
       * @default null
       */
      waitUntil: string | null;
  } | null;
  /**
   * Html
   * @description HTML content to generate PDF from
   * @default null
   */
  html: string | null;
  /**
   * PdfOptions
   * @description PDF generation options based on Puppeteer's PDFOptions.
   * @default null
   */
  options: {
      /**
       * Display Header Footer
       * @description Whether to show header and footer
       * @default null
       */
      displayHeaderFooter: boolean | null;
      /**
       * Format
       * @description Paper format (e.g., 'A4', 'Letter')
       * @default null
       */
      format: string | null;
      /**
       * Print Background
       * @description Whether to print background graphics
       * @default null
       */
      printBackground: boolean | null;
  } | null;
  /**
   * Reject Request Pattern
   * @description Request patterns to block
   * @default null
   */
  rejectRequestPattern: string[] | null;
  /**
   * Reject Resource Types
   * @description Resource types to block
   * @default null
   */
  rejectResourceTypes: string[] | null;
  /**
   * Url
   * @description URL of the webpage to generate PDF from
   * @default null
   */
  url: string | null;
  /**
   * WaitForSelector
   * @description Options for waiting for a selector to appear.
   * @default null
   */
  waitForSelector: {
      /**
       * Hidden
       * @description Wait for element to be hidden
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
       * @description Maximum time to wait in milliseconds
       * @default null
       */
      timeout: number | null;
      /**
       * Visible
       * @description Wait for element to be visible
       * @default null
       */
      visible: boolean | null;
  } | null;
};

/**
 * Type of BROWSERLESS's BROWSERLESS_GENERATE_PDF tool output.
 */
type BROWSERLESS_GENERATE_PDF_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Type
       * @description Content type of the generated file
       * @default application/pdf
       */
      content_type: string;
      /**
       * Pdf Data
       * @description Generated PDF file as base64 encoded string
       */
      pdf_data: string;
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
 * Type of BROWSERLESS's BROWSERLESS_SCRAPE_CONTENT tool input.
 */
type BROWSERLESS_SCRAPE_CONTENT_INPUT = {
  /**
   * Elements
   * @description Array of objects containing CSS selectors to extract
   */
  elements?: {
      /**
       * Selector
       * @description CSS selector to target specific elements
       */
      selector: string;
  }[];
  /**
   * GotoOptions
   * @description Options for page navigation
   * @default null
   */
  gotoOptions: {
      /**
       * Timeout
       * @description Maximum navigation time in milliseconds
       * @default null
       */
      timeout: number | null;
      /**
       * Wait Until
       * @description When to consider navigation succeeded
       * @default null
       */
      waitUntil: string | null;
  } | null;
  /**
   * Url
   * @description The URL to scrape content from
   */
  url?: string;
  /**
   * WaitForEvent
   * @description Wait for a specific event to occur
   * @default null
   */
  waitForEvent: {
      /**
       * Event
       * @description Page event to wait for
       */
      event: string;
      /**
       * Timeout
       * @description Maximum wait time in milliseconds
       * @default null
       */
      timeout: number | null;
  } | null;
  /**
   * WaitForFunction
   * @description Wait for a custom JavaScript function to return true
   * @default null
   */
  waitForFunction: {
      /**
       * Fn
       * @description JavaScript function to execute and wait for
       */
      fn: string;
      /**
       * Timeout
       * @description Maximum wait time in milliseconds
       * @default null
       */
      timeout: number | null;
  } | null;
  /**
   * WaitForSelector
   * @description Wait for a specific selector to appear
   * @default null
   */
  waitForSelector: {
      /**
       * Selector
       * @description CSS selector to wait for
       */
      selector: string;
      /**
       * Timeout
       * @description Maximum wait time in milliseconds
       * @default null
       */
      timeout: number | null;
  } | null;
  /**
   * Wait For Timeout
   * @description Wait specified milliseconds before scraping
   * @default null
   */
  waitForTimeout: number | null;
};

/**
 * Type of BROWSERLESS's BROWSERLESS_SCRAPE_CONTENT tool output.
 */
type BROWSERLESS_SCRAPE_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Array of results for each selector
   */
  data?: {
      /**
       * Results
       * @description List of elements matching the selector
       */
      results: {
          /**
           * Attributes
           * @description List of element attributes
           */
          attributes: {
              /**
               * Name
               * @description Name of the attribute
               */
              name: string;
              /**
               * Value
               * @description Value of the attribute
               */
              value: string;
          }[];
          /**
           * Height
           * @description Height of the element
           */
          height: number;
          /**
           * Html
           * @description HTML content of the element
           */
          html: string;
          /**
           * Left
           * @description Left position of the element
           */
          left: number;
          /**
           * Text
           * @description Text content of the element
           */
          text: string;
          /**
           * Top
           * @description Top position of the element
           */
          top: number;
          /**
           * Width
           * @description Width of the element
           */
          width: number;
      }[];
      /**
       * Selector
       * @description CSS selector used to find elements
       */
      selector: string;
  }[];
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
 * Type of BROWSERLESS's BROWSERLESS_TAKE_SCREENSHOT tool input.
 */
type BROWSERLESS_TAKE_SCREENSHOT_INPUT = {
  /**
   * Clip Height
   * @description Height of the clipping area
   * @default null
   */
  clip_height: number | null;
  /**
   * Clip Width
   * @description Width of the clipping area
   * @default null
   */
  clip_width: number | null;
  /**
   * Clip X
   * @description X coordinate for clipping the screenshot
   * @default null
   */
  clip_x: number | null;
  /**
   * Clip Y
   * @description Y coordinate for clipping the screenshot
   * @default null
   */
  clip_y: number | null;
  /**
   * Full Page
   * @description Whether to capture the full page or just the viewport
   * @default true
   */
  full_page: boolean;
  /**
   * Image Type
   * @description The type of image to return (png or jpeg)
   * @default png
   */
  image_type: string;
  /**
   * Omit Background
   * @description Whether to omit the background in the screenshot
   * @default false
   */
  omit_background: boolean;
  /**
   * Quality
   * @description The quality of the image (0-100, only applies to jpeg)
   * @default 75
   */
  quality: number | null;
  /**
   * Url
   * @description The URL of the webpage to capture
   */
  url?: string;
};

/**
 * Type of BROWSERLESS's BROWSERLESS_TAKE_SCREENSHOT tool output.
 */
type BROWSERLESS_TAKE_SCREENSHOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Type
       * @description The MIME type of the content
       */
      content_type: string;
      /**
       * Format
       * @description The format of the image (png or jpeg)
       */
      format: string;
      /**
       * Screenshot
       * @description The base64 encoded screenshot data
       */
      screenshot: string;
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
 * Type of BROWSERLESS's BROWSERLESS_UNBLOCK_PROTECTED_CONTENT tool input.
 */
type BROWSERLESS_UNBLOCK_PROTECTED_CONTENT_INPUT = {
  /**
   * Browser Ws Endpoint
   * @description Whether to return a WebSocket endpoint for browser automation
   * @default false
   */
  browserWSEndpoint: boolean;
  /**
   * Content
   * @description Whether to return the HTML content of the page
   * @default true
   */
  content: boolean;
  /**
   * Cookies
   * @description Whether to return cookies from the page
   * @default false
   */
  cookies: boolean;
  /**
   * Screenshot
   * @description Whether to return a screenshot of the page
   * @default false
   */
  screenshot: boolean;
  /**
   * Ttl
   * @description Time to live for the browser instance in milliseconds
   * @default 30000
   */
  ttl: number;
  /**
   * Url
   * @description The URL of the protected webpage to access
   */
  url?: string;
  /**
   * WaitForEvent
   * @description Event to wait for before returning the response
   * @default null
   */
  waitForEvent: {
      /**
       * Event
       * @description The event to wait for (e.g. 'load', 'domcontentloaded', etc.)
       */
      event: string;
      /**
       * Timeout
       * @description Maximum time to wait for the event in milliseconds
       * @default 30000
       */
      timeout: number;
  } | null;
  /**
   * WaitForFunction
   * @description Function to execute and wait for before returning the response
   * @default null
   */
  waitForFunction: {
      /**
       * Fn
       * @description JavaScript function to execute and wait for
       */
      fn: string;
      /**
       * Timeout
       * @description Maximum time to wait for the function in milliseconds
       * @default 30000
       */
      timeout: number;
  } | null;
  /**
   * WaitForSelector
   * @description Selector to wait for before returning the response
   * @default null
   */
  waitForSelector: {
      /**
       * Hidden
       * @description Wait for element to be hidden
       * @default false
       */
      hidden: boolean;
      /**
       * Selector
       * @description CSS selector to wait for
       */
      selector: string;
      /**
       * Timeout
       * @description Maximum time to wait for the selector in milliseconds
       * @default 30000
       */
      timeout: number;
      /**
       * Visible
       * @description Wait for element to be visible
       * @default false
       */
      visible: boolean;
  } | null;
};

/**
 * Type of BROWSERLESS's BROWSERLESS_UNBLOCK_PROTECTED_CONTENT tool output.
 */
type BROWSERLESS_UNBLOCK_PROTECTED_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Browser Ws Endpoint
       * @description WebSocket endpoint URL for browser automation
       * @default null
       */
      browserWSEndpoint: string | null;
      /**
       * Content
       * @description HTML content of the page
       * @default null
       */
      content: string | null;
      /**
       * Cookies
       * @description Array of cookie objects
       * @default null
       */
      cookies: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Screenshot
       * @description Base64 encoded screenshot
       * @default null
       */
      screenshot: string | null;
      /**
       * Ttl
       * @description Time to live value in milliseconds
       */
      ttl: number;
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
 * Type map of all available tool input types for toolkit "BROWSERLESS".
 */
export type BROWSERLESS_TOOL_INPUTS = {
  DOWNLOAD_FILE: BROWSERLESS_DOWNLOAD_FILE_INPUT
  EXECUTE_CUSTOM_FUNCTION: BROWSERLESS_EXECUTE_CUSTOM_FUNCTION_INPUT
  FETCH_HTML_CONTENT: BROWSERLESS_FETCH_HTML_CONTENT_INPUT
  GENERATE_PDF: BROWSERLESS_GENERATE_PDF_INPUT
  SCRAPE_CONTENT: BROWSERLESS_SCRAPE_CONTENT_INPUT
  TAKE_SCREENSHOT: BROWSERLESS_TAKE_SCREENSHOT_INPUT
  UNBLOCK_PROTECTED_CONTENT: BROWSERLESS_UNBLOCK_PROTECTED_CONTENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BROWSERLESS".
 */
export type BROWSERLESS_TOOL_OUTPUTS = {
  DOWNLOAD_FILE: BROWSERLESS_DOWNLOAD_FILE_OUTPUT
  EXECUTE_CUSTOM_FUNCTION: BROWSERLESS_EXECUTE_CUSTOM_FUNCTION_OUTPUT
  FETCH_HTML_CONTENT: BROWSERLESS_FETCH_HTML_CONTENT_OUTPUT
  GENERATE_PDF: BROWSERLESS_GENERATE_PDF_OUTPUT
  SCRAPE_CONTENT: BROWSERLESS_SCRAPE_CONTENT_OUTPUT
  TAKE_SCREENSHOT: BROWSERLESS_TAKE_SCREENSHOT_OUTPUT
  UNBLOCK_PROTECTED_CONTENT: BROWSERLESS_UNBLOCK_PROTECTED_CONTENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BROWSERLESS toolkit.
 */
export const BROWSERLESS = {
  slug: "browserless",
  tools: {
    /**
     * This tool allows downloading files that chrome has downloaded during the execution of puppeteer code. it sets up a blank page, creates a fresh download directory, injects the provided code, and executes it. once the script finishes, any downloaded files from chromium are returned with the appropriate content-type header.
     */
    DOWNLOAD_FILE: "BROWSERLESS_DOWNLOAD_FILE",
    /**
     * A tool that allows executing custom puppeteer scripts via http requests. this endpoint enables users to run browser automation tasks without managing their own infrastructure.
     */
    EXECUTE_CUSTOM_FUNCTION: "BROWSERLESS_EXECUTE_CUSTOM_FUNCTION",
    /**
     * This tool fetches the complete html content of a webpage using browserless's content api. it's designed to retrieve the full html contents of any website, including dynamically generated content.
     */
    FETCH_HTML_CONTENT: "BROWSERLESS_FETCH_HTML_CONTENT",
    /**
     * This tool generates a pdf from a specified webpage using browserless's pdf generation api. it allows specifying the url of the webpage along with parameters such as format, filename, and waituntil options to control the pdf generation process.
     */
    GENERATE_PDF: "BROWSERLESS_GENERATE_PDF",
    /**
     * A tool to extract structured content from a webpage by specifying css selectors. the tool navigates to the specified url, waits for the page to load (including parsing and executing javascript), and returns the selected elements in a structured json format.
     */
    SCRAPE_CONTENT: "BROWSERLESS_SCRAPE_CONTENT",
    /**
     * A tool that captures a screenshot of a webpage using browserless's screenshot api. the tool takes a url and returns either a png or jpeg image. it includes options for full page capture, image type, quality, and clipping coordinates.
     */
    TAKE_SCREENSHOT: "BROWSERLESS_TAKE_SCREENSHOT",
    /**
     * This tool provides access to content from websites that implement bot protection mechanisms. it is designed to bypass various types of protection (such as captcha and bot detections) and return the html content of the protected webpage, with optional customization through parameters like waitfor, timeout, and stealth mode.
     */
    UNBLOCK_PROTECTED_CONTENT: "BROWSERLESS_UNBLOCK_PROTECTED_CONTENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BROWSERLESS".
 */
export type BROWSERLESS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BROWSERLESS".
 */
export type BROWSERLESS_TRIGGER_EVENTS = {}
