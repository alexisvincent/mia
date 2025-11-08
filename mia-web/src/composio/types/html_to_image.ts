// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HTML_TO_IMAGE's HTML_TO_IMAGE_GET_IMAGE tool input.
 */
type HTML_TO_IMAGE_GET_IMAGE_INPUT = {
  /**
   * Dl
   * @description Set to 1 to serve the image as a downloadable attachment.
   * @default null
   * @enum {integer|null}
   */
  dl: 0 | 1 | null;
  /**
   * Dpi
   * @description Optional DPI metadata for the image; maximum 600.
   * @default null
   */
  dpi: number | null;
  /**
   * Height
   * @description Optional output height in pixels; maximum 5000.
   * @default null
   */
  height: number | null;
  /**
   * Image Id
   * @description ID of the generated image. You may append .png, .jpg, or .webp to select the format; defaults to PNG if no extension is provided.
   */
  image_id?: string;
  /**
   * Width
   * @description Optional output width in pixels; maximum 5000.
   * @default null
   */
  width: number | null;
};

/**
 * Type of HTML_TO_IMAGE's HTML_TO_IMAGE_GET_IMAGE tool output.
 */
type HTML_TO_IMAGE_GET_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Binary image content downloaded from the server
       */
      content: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of HTML_TO_IMAGE's HTML_TO_IMAGE_HTML_TO_IMAGE_CHECK_USAGE tool input.
 */
type HTML_TO_IMAGE_HTML_TO_IMAGE_CHECK_USAGE_INPUT = {
  /**
   * Endpoint Paths
   * @description Optional list of endpoint paths to try for usage stats (e.g., '/v1/usage'). If not provided, built-in candidates will be used.
   * @default null
   */
  endpoint_paths: string[] | null;
  /**
   * Return Defaults On Error
   * @description Whether to return an empty usage payload instead of failing when the upstream API does not provide a usage endpoint or returns non-JSON responses.
   * @default true
   */
  return_defaults_on_error: boolean;
};

/**
 * Type of HTML_TO_IMAGE's HTML_TO_IMAGE_HTML_TO_IMAGE_CHECK_USAGE tool output.
 */
type HTML_TO_IMAGE_HTML_TO_IMAGE_CHECK_USAGE_OUTPUT = {
  /**
   * Data
   * @description Usage statistics grouped by hour, day, and month.
   */
  data?: {
      /**
       * Day
       * @description Render counts per day (ISO-8601 timestamp → count).
       */
      day: {
          [key: string]: number;
      };
      /**
       * Hour
       * @description Render counts per hour (ISO-8601 timestamp → count).
       */
      hour: {
          [key: string]: number;
      };
      /**
       * Month
       * @description Render counts per month (ISO-8601 timestamp → count).
       */
      month: {
          [key: string]: number;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Per Billing Period
   * @description List of usage data for each billing period.
   */
  per_billing_period?: {
      /**
       * End
       * Format: date-time
       * @description Billing period end timestamp (ISO-8601).
       */
      end: string;
      /**
       * Start
       * Format: date-time
       * @description Billing period start timestamp (ISO-8601).
       */
      start: string;
      /**
       * Total Images
       * @description Total renders in this billing period.
       */
      total_images: number;
  }[];
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HTML_TO_IMAGE's HTML_TO_IMAGE_HTML_TO_IMAGE_CONVERT_TO_IMAGE tool input.
 */
type HTML_TO_IMAGE_HTML_TO_IMAGE_CONVERT_TO_IMAGE_INPUT = {
  /**
   * Height
   * @description Height of the output image in pixels; must be >=1
   * @default null
   */
  height: number | null;
  /**
   * Html
   * @description HTML content to render into an image
   */
  html?: string;
  /**
   * Width
   * @description Width of the output image in pixels; must be >=1
   * @default null
   */
  width: number | null;
};

/**
 * Type of HTML_TO_IMAGE's HTML_TO_IMAGE_HTML_TO_IMAGE_CONVERT_TO_IMAGE tool output.
 */
type HTML_TO_IMAGE_HTML_TO_IMAGE_CONVERT_TO_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits Remaining
       * @description Remaining credits after the request
       * @default null
       */
      credits_remaining: number | null;
      /**
       * Id
       * @description Identifier of the generated image (image_id)
       * @default null
       */
      id: string | null;
      /**
       * FileDownloadable
       * @description Generated image file when the API responds with binary content
       * @default null
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
      } | null;
      /**
       * Success
       * @description Whether the render was successful
       * @default null
       */
      success: boolean | null;
      /**
       * Url
       * @description Public CDN URL to download the generated image
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
 * Type map of all available tool input types for toolkit "HTML_TO_IMAGE".
 */
export type HTML_TO_IMAGE_TOOL_INPUTS = {
  GET_IMAGE: HTML_TO_IMAGE_GET_IMAGE_INPUT
  HTML_TO_IMAGE_CHECK_USAGE: HTML_TO_IMAGE_HTML_TO_IMAGE_CHECK_USAGE_INPUT
  HTML_TO_IMAGE_CONVERT_TO_IMAGE: HTML_TO_IMAGE_HTML_TO_IMAGE_CONVERT_TO_IMAGE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HTML_TO_IMAGE".
 */
export type HTML_TO_IMAGE_TOOL_OUTPUTS = {
  GET_IMAGE: HTML_TO_IMAGE_GET_IMAGE_OUTPUT
  HTML_TO_IMAGE_CHECK_USAGE: HTML_TO_IMAGE_HTML_TO_IMAGE_CHECK_USAGE_OUTPUT
  HTML_TO_IMAGE_CONVERT_TO_IMAGE: HTML_TO_IMAGE_HTML_TO_IMAGE_CONVERT_TO_IMAGE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HTML_TO_IMAGE toolkit.
 */
export const HTML_TO_IMAGE = {
  slug: "html_to_image",
  tools: {
    /**
     * Tool to retrieve a generated image by its ID. Use when you need to fetch, resize, or download an existing HTML to image asset.
     */
    GET_IMAGE: "HTML_TO_IMAGE_GET_IMAGE",
    /**
     * Tool to retrieve account usage statistics including hourly, daily, and monthly image creation counts. Use after authenticating to review current usage limits and billing periods.
     */
    HTML_TO_IMAGE_CHECK_USAGE: "HTML_TO_IMAGE_HTML_TO_IMAGE_CHECK_USAGE",
    /**
     * Tool to convert HTML content into an image. Returns either a downloadable file or a JSON payload containing id and url, depending on the upstream API behavior.
     */
    HTML_TO_IMAGE_CONVERT_TO_IMAGE: "HTML_TO_IMAGE_HTML_TO_IMAGE_CONVERT_TO_IMAGE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HTML_TO_IMAGE".
 */
export type HTML_TO_IMAGE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HTML_TO_IMAGE".
 */
export type HTML_TO_IMAGE_TRIGGER_EVENTS = {}
