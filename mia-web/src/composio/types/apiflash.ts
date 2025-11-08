// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of APIFLASH's APIFLASH_APIFLASH_BATCH_CAPTURE_SCREENSHOTS tool input.
 */
type APIFLASH_APIFLASH_BATCH_CAPTURE_SCREENSHOTS_INPUT = {
  /**
   * Format
   * @description Image format for all screenshots.
   * @default jpeg
   * @enum {string}
   */
  format: "jpeg" | "png" | "webp";
  /**
   * Fresh
   * @description Bypass cache and force a fresh screenshot when true.
   * @default false
   */
  fresh: boolean;
  /**
   * Full Page
   * @description Capture the full scrollable page when true.
   * @default false
   */
  full_page: boolean;
  /**
   * Height
   * @description Viewport height in pixels. Ignored if full_page is true.
   * @default 1080
   */
  height: number;
  /**
   * Urls
   * @description List of full URLs to capture; each must include protocol (http or https).
   */
  urls?: string[];
  /**
   * Width
   * @description Viewport width in pixels.
   * @default 1920
   */
  width: number;
};

/**
 * Type of APIFLASH's APIFLASH_APIFLASH_BATCH_CAPTURE_SCREENSHOTS tool output.
 */
type APIFLASH_APIFLASH_BATCH_CAPTURE_SCREENSHOTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Mapping of each requested URL to its screenshot result.
       */
      results: {
          [key: string]: {
              /**
               * Extracted Html
               * @description Link to the extracted HTML snapshot, if requested.
               * @default null
               */
              extracted_html: string;
              /**
               * Extracted Text
               * @description Link to the extracted text snapshot, if requested.
               * @default null
               */
              extracted_text: string;
              /**
               * Url
               * @description Public URL of the generated screenshot image.
               */
              url: string;
          };
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
 * Type of APIFLASH's APIFLASH_APIFLASH_CAPTURE_WEBSITE_SCREENSHOT_POST tool input.
 */
type APIFLASH_APIFLASH_CAPTURE_WEBSITE_SCREENSHOT_POST_INPUT = {
  /**
   * Response Type
   * @description Return binary image or JSON with links.
   * @default json
   * @enum {string}
   */
  response_type: "image" | "json";
  /**
   * Url
   * @description Full URL of the website to capture, including protocol.
   */
  url?: string;
};

/**
 * Type of APIFLASH's APIFLASH_APIFLASH_CAPTURE_WEBSITE_SCREENSHOT_POST tool output.
 */
type APIFLASH_APIFLASH_CAPTURE_WEBSITE_SCREENSHOT_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Extracted Html
       * @description URL to extracted HTML file.
       * @default null
       */
      extracted_html: string | null;
      /**
       * Extracted Text
       * @description URL to extracted text file.
       * @default null
       */
      extracted_text: string | null;
      /**
       * Url
       * @description URL of the screenshot image.
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
 * Type of APIFLASH's APIFLASH_GET_QUOTA_INFORMATION tool input.
 */
type APIFLASH_GET_QUOTA_INFORMATION_INPUT = object;

/**
 * Type of APIFLASH's APIFLASH_GET_QUOTA_INFORMATION tool output.
 */
type APIFLASH_GET_QUOTA_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description The maximum number of API calls you can make per billing period.
       */
      limit: number;
      /**
       * Remaining
       * @description The number of API calls remaining in the current billing period.
       */
      remaining: number;
      /**
       * Reset
       * @description UTC epoch seconds when the current billing period ends and resets.
       */
      reset: number;
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
 * Type of APIFLASH's APIFLASH_GET_SCREENSHOT_METADATA tool input.
 */
type APIFLASH_GET_SCREENSHOT_METADATA_INPUT = {
  /**
   * Url
   * @description Full URL of the screenshot image for which to get metadata. Must include protocol and domain.
   */
  url?: string;
};

/**
 * Type of APIFLASH's APIFLASH_GET_SCREENSHOT_METADATA tool output.
 */
type APIFLASH_GET_SCREENSHOT_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorDetail
       * @description Error details returned when a screenshot metadata request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code returned by the API, if any.
           * @default null
           */
          code: string | null;
          /**
           * Message
           * @description Error message explaining the failure.
           */
          message: string;
      } | null;
      /**
       * Metadata
       * @description Details about a captured screenshot.
       * @default null
       */
      metadata: {
          /**
           * File Size
           * @description Size of the screenshot in bytes.
           */
          file_size: number;
          /**
           * Height
           * @description Height of the screenshot in pixels.
           */
          height: number;
          /**
           * Mimetype
           * @description MIME type of the screenshot.
           */
          mimetype: string;
          /**
           * Timestamp
           * @description When the screenshot was taken (ISO 8601 timestamp).
           */
          timestamp: string;
          /**
           * Width
           * @description Width of the screenshot in pixels.
           */
          width: number;
      } | null;
      /**
       * Status
       * @description Status of the request, e.g., 'success' or 'error'.
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
 * Type map of all available tool input types for toolkit "APIFLASH".
 */
export type APIFLASH_TOOL_INPUTS = {
  APIFLASH_BATCH_CAPTURE_SCREENSHOTS: APIFLASH_APIFLASH_BATCH_CAPTURE_SCREENSHOTS_INPUT
  APIFLASH_CAPTURE_WEBSITE_SCREENSHOT_POST: APIFLASH_APIFLASH_CAPTURE_WEBSITE_SCREENSHOT_POST_INPUT
  GET_QUOTA_INFORMATION: APIFLASH_GET_QUOTA_INFORMATION_INPUT
  GET_SCREENSHOT_METADATA: APIFLASH_GET_SCREENSHOT_METADATA_INPUT
}

/**
 * Type map of all available tool input types for toolkit "APIFLASH".
 */
export type APIFLASH_TOOL_OUTPUTS = {
  APIFLASH_BATCH_CAPTURE_SCREENSHOTS: APIFLASH_APIFLASH_BATCH_CAPTURE_SCREENSHOTS_OUTPUT
  APIFLASH_CAPTURE_WEBSITE_SCREENSHOT_POST: APIFLASH_APIFLASH_CAPTURE_WEBSITE_SCREENSHOT_POST_OUTPUT
  GET_QUOTA_INFORMATION: APIFLASH_GET_QUOTA_INFORMATION_OUTPUT
  GET_SCREENSHOT_METADATA: APIFLASH_GET_SCREENSHOT_METADATA_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's APIFLASH toolkit.
 */
export const APIFLASH = {
  slug: "apiflash",
  tools: {
    /**
     * Tool to capture screenshots for multiple urls in a single request. use when you have a list of pages to snapshot in batch.
     */
    APIFLASH_BATCH_CAPTURE_SCREENSHOTS: "APIFLASH_APIFLASH_BATCH_CAPTURE_SCREENSHOTS",
    /**
     * Tool to capture a screenshot of a website via http post. use when you need to post form data parameters.
     */
    APIFLASH_CAPTURE_WEBSITE_SCREENSHOT_POST: "APIFLASH_APIFLASH_CAPTURE_WEBSITE_SCREENSHOT_POST",
    /**
     * Tool to retrieve current api quota usage and limits. use after authentication to monitor usage and reset times.
     */
    GET_QUOTA_INFORMATION: "APIFLASH_GET_QUOTA_INFORMATION",
    /**
     * Tool to retrieve metadata for a previously captured screenshot. use when you need details like file size and dimensions after capture.
     */
    GET_SCREENSHOT_METADATA: "APIFLASH_GET_SCREENSHOT_METADATA",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "APIFLASH".
 */
export type APIFLASH_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "APIFLASH".
 */
export type APIFLASH_TRIGGER_EVENTS = {}
