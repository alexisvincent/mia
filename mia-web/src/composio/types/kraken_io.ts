// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of KRAKEN_IO's KRAKEN_IO_CHECK_USER_STATUS tool input.
 */
type KRAKEN_IO_CHECK_USER_STATUS_INPUT = {
  /**
   * Api Key
   * @description Your Kraken.io API Key.
   */
  api_key?: string;
  /**
   * Api Secret
   * @description Your Kraken.io API Secret.
   */
  api_secret?: string;
};

/**
 * Type of KRAKEN_IO's KRAKEN_IO_CHECK_USER_STATUS tool output.
 */
type KRAKEN_IO_CHECK_USER_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the account is currently active.
       */
      active: boolean;
      /**
       * Active Until
       * @description ISO 8601 timestamp when the plan expires.
       */
      active_until: string;
      /**
       * Last Updated
       * @description ISO 8601 timestamp of the last status update.
       */
      last_updated: string;
      /**
       * Message
       * @description Additional info or error message, if present.
       * @default null
       */
      message: string | null;
      /**
       * Plan Name
       * @description Name of the active subscription plan.
       */
      plan_name: string;
      /**
       * Quota Remaining
       * @description Remaining monthly quota in MB.
       */
      quota_remaining: number;
      /**
       * Quota Total
       * @description Total monthly quota in MB.
       */
      quota_total: number;
      /**
       * Quota Used
       * @description Quota used this month in MB.
       */
      quota_used: number;
      /**
       * Success
       * @description Indicates if the request was successful.
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
 * Type of KRAKEN_IO's KRAKEN_IO_OPTIMIZE_IMAGE_URL tool input.
 */
type KRAKEN_IO_OPTIMIZE_IMAGE_URL_INPUT = {
  /**
   * Auth
   * @description Authentication credentials for Kraken API
   */
  auth?: {
      /**
       * Api Key
       * @description Kraken API key
       */
      api_key: string;
      /**
       * Api Secret
       * @description Kraken API secret
       */
      api_secret: string;
  };
  /**
   * Avif
   * @description Return image also in AVIF format
   * @default false
   */
  avif: boolean;
  /**
   * Convert
   * @description Convert image to specified format
   * @default null
   * @enum {string|null}
   */
  convert: "jpeg" | "png" | "gif" | "webp" | "avif" | null;
  /**
   * Dev
   * @description Development mode (no real optimization)
   * @default false
   */
  dev: boolean;
  /**
   * Lossless
   * @description Use lossless optimization mode
   * @default false
   */
  lossless: boolean;
  /**
   * Lossy
   * @description Use lossy optimization mode
   * @default false
   */
  lossy: boolean;
  /**
   * Preserve Metadata
   * @description Preserve image metadata (EXIF, IPTC) in output
   * @default false
   */
  preserve_metadata: boolean;
  /**
   * Quality
   * @description Compression quality (0-100) for lossy mode
   * @default null
   */
  quality: number | null;
  /**
   * ResizeOptions
   * @description Resize options sub-object
   * @default null
   */
  resize: {
      /**
       * Height
       * @description Desired height in pixels
       * @default null
       */
      height: number | null;
      /**
       * Strategy
       * @description Resize strategy to apply
       * @default auto
       * @enum {string}
       */
      strategy: "auto" | "portrait" | "landscape" | "exact" | "fit" | "crop";
      /**
       * Upscale
       * @description Allow upscaling the image
       * @default false
       */
      upscale: boolean;
      /**
       * Width
       * @description Desired width in pixels
       * @default null
       */
      width: number | null;
  } | null;
  /**
   * S3StoreOptions
   * @description S3 storage options sub-object
   * @default null
   */
  s3_store: {
      /**
       * Acl
       * @description ACL policy for the stored image
       * @default null
       */
      acl: string | null;
      /**
       * Bucket
       * @description Destination S3 bucket name
       */
      bucket: string;
      /**
       * Key
       * @description AWS access key
       */
      key: string;
      /**
       * Path
       * @description Target path for the image in S3
       * @default null
       */
      path: string | null;
      /**
       * Region
       * @description S3 region name
       */
      region: string;
      /**
       * Secret
       * @description AWS secret key
       */
      secret: string;
  } | null;
  /**
   * Url
   * @description Publicly accessible URL of the image to optimize
   */
  url?: string;
  /**
   * Wait
   * @description Return optimization result synchronously if true
   * @default false
   */
  wait: boolean;
  /**
   * Webp
   * @description Return image also in WebP format
   * @default false
   */
  webp: boolean;
};

/**
 * Type of KRAKEN_IO's KRAKEN_IO_OPTIMIZE_IMAGE_URL tool output.
 */
type KRAKEN_IO_OPTIMIZE_IMAGE_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Name
       * @description Name of the optimized file
       * @default null
       */
      file_name: string | null;
      /**
       * Kraked
       * @description True if the image was actually optimized
       * @default null
       */
      kraked: boolean | null;
      /**
       * Kraked Size
       * @description Size after optimization in bytes
       * @default null
       */
      kraked_size: number | null;
      /**
       * Kraked Url
       * @description URL of the optimized image
       * @default null
       */
      kraked_url: string | null;
      /**
       * Message
       * @description Error message if processing failed
       * @default null
       */
      message: string | null;
      /**
       * Original Size
       * @description Size of the original file in bytes
       * @default null
       */
      original_size: number | null;
      /**
       * Saved Bytes
       * @description Number of bytes saved by optimization
       * @default null
       */
      saved_bytes: number | null;
      /**
       * Success
       * @description True if the request was successful
       */
      success: boolean;
      /**
       * Webhook Url
       * @description Webhook URL provided in request, if any
       * @default null
       */
      webhook_url: string | null;
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
 * Type of KRAKEN_IO's KRAKEN_IO_PRESERVE_METADATA tool input.
 */
type KRAKEN_IO_PRESERVE_METADATA_INPUT = {
  /**
   * Auth
   * @description Authentication credentials for Kraken.io API
   */
  auth?: {
      /**
       * Api Key
       * @description Your Kraken.io API key
       */
      api_key: string;
      /**
       * Api Secret
       * @description Your Kraken.io API secret
       */
      api_secret: string;
  };
  /**
   * Dev
   * @description Use developer mode (no real optimization)
   * @default false
   */
  dev: boolean;
  /**
   * File
   * Format: binary
   * @description Binary content of the image to upload, required if `url` is not provided
   * @default null
   */
  file: string | null;
  /**
   * File Name
   * @description Filename for the uploaded file when using `file`
   * @default null
   */
  file_name: string | null;
  /**
   * Lossy
   * @description Use lossy optimization mode
   * @default false
   */
  lossy: boolean;
  /**
   * Preserve Metadata
   * @description Preserve all EXIF and other metadata when true
   * @default false
   */
  preserve_metadata: boolean;
  /**
   * Quality
   * @description Image quality for lossy mode (0-100)
   * @default null
   */
  quality: number | null;
  /**
   * S3StoreParams
   * @description S3 storage parameters for optimized image.
   * @default null
   */
  s3_store: {
      /**
       * Bucket
       * @description S3 bucket name to store the optimized image
       */
      bucket: string;
      /**
       * Path
       * @description S3 object path (key) for the optimized image
       */
      path: string;
  } | null;
  /**
   * Url
   * Format: uri
   * @description Remote image URL to optimize, required if `file` is not provided
   * @default null
   */
  url: string | null;
  /**
   * Wait
   * @description Return result synchronously when true
   * @default false
   */
  wait: boolean;
};

/**
 * Type of KRAKEN_IO's KRAKEN_IO_PRESERVE_METADATA tool output.
 */
type KRAKEN_IO_PRESERVE_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Name
       * @description Name of the optimized file
       * @default null
       */
      file_name: string | null;
      /**
       * Kraked Size
       * @description Optimized image size in bytes
       * @default null
       */
      kraked_size: number | null;
      /**
       * Kraked Url
       * Format: uri
       * @description URL to the optimized image
       * @default null
       */
      kraked_url: string | null;
      /**
       * Message
       * @description Error or status message, if any
       * @default null
       */
      message: string | null;
      /**
       * Original Size
       * @description Original image size in bytes
       * @default null
       */
      original_size: number | null;
      /**
       * Saved Bytes
       * @description Number of bytes saved by optimization
       * @default null
       */
      saved_bytes: number | null;
      /**
       * Saved Percent
       * @description Percentage of bytes saved
       * @default null
       */
      saved_percent: number | null;
      /**
       * Success
       * @description True if optimization succeeded
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
 * Type of KRAKEN_IO's KRAKEN_IO_SANDBOX_UPLOAD tool input.
 */
type KRAKEN_IO_SANDBOX_UPLOAD_INPUT = {
  /**
   * Auth
   * @description Authentication credentials for Kraken.io API
   */
  auth?: {
      /**
       * Api Key
       * @description Kraken.io API key
       */
      api_key: string;
      /**
       * Api Secret
       * @description Kraken.io API secret
       */
      api_secret: string;
  };
  /**
   * Dev
   * @description Must be true to enable sandbox mode (no credits used; output is watermarked)
   * @default true
   * @constant
   */
  dev: true;
  /**
   * File
   * Format: binary
   * @description Binary image data to upload. Required if `url` is not provided.
   * @default null
   */
  file: string | null;
  /**
   * File Name
   * @description Filename for the uploaded binary `file`. Required if `file` is provided.
   * @default null
   */
  file_name: string | null;
  /**
   * Lossless
   * @description If true, perform lossless optimization
   * @default false
   */
  lossless: boolean;
  /**
   * Lossy
   * @description If true, perform intelligent lossy optimization
   * @default false
   */
  lossy: boolean;
  /**
   * Quality
   * @description Desired quality for lossy optimization (0-100)
   * @default null
   */
  quality: number | null;
  /**
   * ResizeOptions
   * @description Resize options sub-object
   * @default null
   */
  resize: {
      /**
       * Height
       * @description Desired height in pixels
       * @default null
       */
      height: number | null;
      /**
       * Strategy
       * @description Resize strategy to apply
       * @default auto
       * @enum {string}
       */
      strategy: "auto" | "portrait" | "landscape" | "exact" | "fit" | "crop";
      /**
       * Upscale
       * @description Allow upscaling the image
       * @default false
       */
      upscale: boolean;
      /**
       * Width
       * @description Desired width in pixels
       * @default null
       */
      width: number | null;
  } | null;
  /**
   * Url
   * Format: uri
   * @description URL of the image to optimize. Required if `file` is not provided.
   * @default null
   */
  url: string | null;
  /**
   * Wait
   * @description If true, wait for optimization to finish and return immediately
   * @default false
   */
  wait: boolean;
};

/**
 * Type of KRAKEN_IO's KRAKEN_IO_SANDBOX_UPLOAD tool output.
 */
type KRAKEN_IO_SANDBOX_UPLOAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if optimization failed
       * @default null
       */
      error: string | null;
      /**
       * File Name
       * @description Name of the optimized file
       * @default null
       */
      file_name: string | null;
      /**
       * Kraked Height
       * @description Height of the optimized image
       * @default null
       */
      kraked_height: number | null;
      /**
       * Kraked Size
       * @description Size of optimized image in bytes
       * @default null
       */
      kraked_size: number | null;
      /**
       * Kraked Url
       * @description URL of the optimized image
       * @default null
       */
      kraked_url: string | null;
      /**
       * Kraked Width
       * @description Width of the optimized image
       * @default null
       */
      kraked_width: number | null;
      /**
       * Original Size
       * @description Size of original image in bytes
       * @default null
       */
      original_size: number | null;
      /**
       * Saved Bytes
       * @description Number of bytes saved by optimization
       * @default null
       */
      saved_bytes: number | null;
      /**
       * Success
       * @description True if optimization succeeded
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
 * Type map of all available tool input types for toolkit "KRAKEN_IO".
 */
export type KRAKEN_IO_TOOL_INPUTS = {
  CHECK_USER_STATUS: KRAKEN_IO_CHECK_USER_STATUS_INPUT
  OPTIMIZE_IMAGE_URL: KRAKEN_IO_OPTIMIZE_IMAGE_URL_INPUT
  PRESERVE_METADATA: KRAKEN_IO_PRESERVE_METADATA_INPUT
  SANDBOX_UPLOAD: KRAKEN_IO_SANDBOX_UPLOAD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "KRAKEN_IO".
 */
export type KRAKEN_IO_TOOL_OUTPUTS = {
  CHECK_USER_STATUS: KRAKEN_IO_CHECK_USER_STATUS_OUTPUT
  OPTIMIZE_IMAGE_URL: KRAKEN_IO_OPTIMIZE_IMAGE_URL_OUTPUT
  PRESERVE_METADATA: KRAKEN_IO_PRESERVE_METADATA_OUTPUT
  SANDBOX_UPLOAD: KRAKEN_IO_SANDBOX_UPLOAD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's KRAKEN_IO toolkit.
 */
export const KRAKEN_IO = {
  slug: "kraken_io",
  tools: {
    /**
     * Tool to retrieve current kraken.io account status and quota usage. use when you need to verify plan limits and remaining quota before processing images.
     */
    CHECK_USER_STATUS: "KRAKEN_IO_CHECK_USER_STATUS",
    /**
     * Tool to optimize an image from a public url. use when you need to compress, resize, or convert an externally hosted image. returns result immediately if 'wait' is true.
     */
    OPTIMIZE_IMAGE_URL: "KRAKEN_IO_OPTIMIZE_IMAGE_URL",
    /**
     * Tool to preserve exif and other metadata during kraken.io image optimization. use when you need to maintain metadata while compressing images.
     */
    PRESERVE_METADATA: "KRAKEN_IO_PRESERVE_METADATA",
    /**
     * Tool to upload and optimize images in sandbox mode. use when you want to test the kraken.io api without consuming credits.
     */
    SANDBOX_UPLOAD: "KRAKEN_IO_SANDBOX_UPLOAD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "KRAKEN_IO".
 */
export type KRAKEN_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "KRAKEN_IO".
 */
export type KRAKEN_IO_TRIGGER_EVENTS = {}
