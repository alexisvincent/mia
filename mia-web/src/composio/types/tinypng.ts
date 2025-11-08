// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TINYPNG's TINYPNG_GET_COMPRESSION_COUNT tool input.
 */
type TINYPNG_GET_COMPRESSION_COUNT_INPUT = object;

/**
 * Type of TINYPNG's TINYPNG_GET_COMPRESSION_COUNT tool output.
 */
type TINYPNG_GET_COMPRESSION_COUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Compression Count
       * @description Number of compressions made during the current calendar month
       */
      compression_count: number;
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
 * Type of TINYPNG's TINYPNG_SHRINK_AND_GET_IMAGE_ID tool input.
 */
type TINYPNG_SHRINK_AND_GET_IMAGE_ID_INPUT = {
  /**
   * Source Url
   * Format: uri
   * @description Publicly accessible URL of the image to compress.
   */
  source_url?: string;
};

/**
 * Type of TINYPNG's TINYPNG_SHRINK_AND_GET_IMAGE_ID tool output.
 */
type TINYPNG_SHRINK_AND_GET_IMAGE_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image Id
       * @description Unique image identifier returned in the Location header after compression.
       */
      image_id: string;
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
 * Type of TINYPNG's TINYPNG_TINIFY_COMPRESS_AND_CONVERT_IMAGE tool input.
 */
type TINYPNG_TINIFY_COMPRESS_AND_CONVERT_IMAGE_INPUT = {
  /**
   * Convert
   * @description Conversion settings specifying output format(s).
   */
  convert?: {
      /**
       * ConvertTypeEnum
       * @description Supported image types for conversion.
       * @enum {string|null}
       */
      type: "image/avif" | "image/webp" | "image/jpeg" | "image/png" | "*/*" | null;
  };
  /**
   * Source
   * Format: uri
   * @description Public URL of the source image.
   */
  source?: string;
  /**
   * TransformOptions
   * @description Optional transformation when converting images with transparency.
   *     Provide a background color to fill transparent areas for non-transparent formats.
   * @default null
   */
  transform: {
      /**
       * Background
       * @description Hex code '#RRGGBB' or 'white'/'black' for background fill.
       */
      background: string;
  } | null;
};

/**
 * Type of TINYPNG's TINYPNG_TINIFY_COMPRESS_AND_CONVERT_IMAGE tool output.
 */
type TINYPNG_TINIFY_COMPRESS_AND_CONVERT_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Compression Count
       * @description Number of compressions used this month.
       */
      compression_count: number;
      /**
       * Content Length
       * @description Size of the converted image in bytes.
       */
      content_length: number;
      /**
       * Content Type
       * @description MIME type of the converted image.
       */
      content_type: string;
      /**
       * Download Url
       * Format: uri
       * @description URL to download the compressed and converted image.
       */
      download_url: string;
      /**
       * Image Height
       * @description Height of the converted image in pixels.
       */
      image_height: number;
      /**
       * Image Width
       * @description Width of the converted image in pixels.
       */
      image_width: number;
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
 * Type of TINYPNG's TINYPNG_TINIFY_COMPRESS_AND_PRESERVE_METADATA tool input.
 */
type TINYPNG_TINIFY_COMPRESS_AND_PRESERVE_METADATA_INPUT = {
  /**
   * Preserve
   * @description List of metadata fields to preserve in the compressed image. Options: 'copyright', 'creation', 'location' (GPS data, JPEG only).
   * @default null
   */
  preserve: string[] | null;
  /**
   * Source Url
   * Format: uri
   * @description Public URL of the image to compress.
   */
  source_url?: string;
};

/**
 * Type of TINYPNG's TINYPNG_TINIFY_COMPRESS_AND_PRESERVE_METADATA tool output.
 */
type TINYPNG_TINIFY_COMPRESS_AND_PRESERVE_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Compression Count
       * @description Total number of compressions made this month by the API key.
       */
      compression_count: number;
      /**
       * Content Length
       * @description Size of the compressed image in bytes.
       */
      content_length: number;
      /**
       * Content Type
       * @description MIME type of the compressed image.
       */
      content_type: string;
      /**
       * Download Url
       * Format: uri
       * @description URL to download the compressed image with preserved metadata.
       */
      download_url: string;
      /**
       * Image Height
       * @description Height of the compressed image in pixels.
       */
      image_height: number;
      /**
       * Image Width
       * @description Width of the compressed image in pixels.
       */
      image_width: number;
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
 * Type of TINYPNG's TINYPNG_TINIFY_COMPRESS_AND_STORE_IN_AZURE tool input.
 */
type TINYPNG_TINIFY_COMPRESS_AND_STORE_IN_AZURE_INPUT = {
  /**
   * Azure Blob Url
   * Format: uri
   * @description Full Azure Blob URL including SAS token to upload the compressed image. Must include necessary permissions (e.g., PUT via SAS) and target path.
   */
  azure_blob_url?: string;
  /**
   * Source Url
   * Format: uri
   * @description URL of the source image to compress
   */
  source_url?: string;
};

/**
 * Type of TINYPNG's TINYPNG_TINIFY_COMPRESS_AND_STORE_IN_AZURE tool output.
 */
type TINYPNG_TINIFY_COMPRESS_AND_STORE_IN_AZURE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Blob Url
       * Format: uri
       * @description The URL of the stored Azure Blob (same as input azure_blob_url)
       */
      blob_url: string;
      /**
       * Compression Count
       * @description Number of compressions consumed this month from the Tinify API
       */
      compression_count: number;
      /**
       * Image Height
       * @description Height of the compressed image in pixels
       */
      image_height: number;
      /**
       * Image Width
       * @description Width of the compressed image in pixels
       */
      image_width: number;
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
 * Type of TINYPNG's TINYPNG_TINIFY_OUTPUT tool input.
 */
type TINYPNG_TINIFY_OUTPUT_INPUT = {
  /**
   * Id
   * @description Identifier for the uploaded and compressed image (returned by the TinyPNG shrink API).
   */
  id?: string;
};

/**
 * Type of TINYPNG's TINYPNG_TINIFY_OUTPUT tool output.
 */
type TINYPNG_TINIFY_OUTPUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Length
       * @description Size of the compressed image in bytes.
       */
      content_length: number;
      /**
       * Content Type
       * @description MIME type of the compressed image (e.g., image/png).
       */
      content_type: string;
      /**
       * Data Base64
       * @description Base64-encoded bytes of the compressed image.
       */
      data_base64: string;
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
 * Type map of all available tool input types for toolkit "TINYPNG".
 */
export type TINYPNG_TOOL_INPUTS = {
  GET_COMPRESSION_COUNT: TINYPNG_GET_COMPRESSION_COUNT_INPUT
  SHRINK_AND_GET_IMAGE_ID: TINYPNG_SHRINK_AND_GET_IMAGE_ID_INPUT
  TINIFY_COMPRESS_AND_CONVERT_IMAGE: TINYPNG_TINIFY_COMPRESS_AND_CONVERT_IMAGE_INPUT
  TINIFY_COMPRESS_AND_PRESERVE_METADATA: TINYPNG_TINIFY_COMPRESS_AND_PRESERVE_METADATA_INPUT
  TINIFY_COMPRESS_AND_STORE_IN_AZURE: TINYPNG_TINIFY_COMPRESS_AND_STORE_IN_AZURE_INPUT
  TINIFY_OUTPUT: TINYPNG_TINIFY_OUTPUT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TINYPNG".
 */
export type TINYPNG_TOOL_OUTPUTS = {
  GET_COMPRESSION_COUNT: TINYPNG_GET_COMPRESSION_COUNT_OUTPUT
  SHRINK_AND_GET_IMAGE_ID: TINYPNG_SHRINK_AND_GET_IMAGE_ID_OUTPUT
  TINIFY_COMPRESS_AND_CONVERT_IMAGE: TINYPNG_TINIFY_COMPRESS_AND_CONVERT_IMAGE_OUTPUT
  TINIFY_COMPRESS_AND_PRESERVE_METADATA: TINYPNG_TINIFY_COMPRESS_AND_PRESERVE_METADATA_OUTPUT
  TINIFY_COMPRESS_AND_STORE_IN_AZURE: TINYPNG_TINIFY_COMPRESS_AND_STORE_IN_AZURE_OUTPUT
  TINIFY_OUTPUT: TINYPNG_TINIFY_OUTPUT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TINYPNG toolkit.
 */
export const TINYPNG = {
  slug: "tinypng",
  tools: {
    /**
     * Tool to retrieve the number of compressions made this month. use when you need to monitor your tinypng api usage.
     */
    GET_COMPRESSION_COUNT: "TINYPNG_GET_COMPRESSION_COUNT",
    /**
     * Tool to shrink an image and return its tinypng image id. use when you need only the compressed image identifier from the api response location header.
     */
    SHRINK_AND_GET_IMAGE_ID: "TINYPNG_SHRINK_AND_GET_IMAGE_ID",
    /**
     * Tool to compress and convert an image. use when you need to optimize an image and change its format (avif, webp, jpeg, png).
     */
    TINIFY_COMPRESS_AND_CONVERT_IMAGE: "TINYPNG_TINIFY_COMPRESS_AND_CONVERT_IMAGE",
    /**
     * Tool to compress an image while preserving specified metadata fields. use when critical metadata (e.g., copyright, creation date, or gps location) must be retained in the output.
     */
    TINIFY_COMPRESS_AND_PRESERVE_METADATA: "TINYPNG_TINIFY_COMPRESS_AND_PRESERVE_METADATA",
    /**
     * Tool to compress an image using tinify and upload it directly to azure blob storage. use when you want to optimize images and store them to azure in one step.
     */
    TINIFY_COMPRESS_AND_STORE_IN_AZURE: "TINYPNG_TINIFY_COMPRESS_AND_STORE_IN_AZURE",
    /**
     * Tool to retrieve a compressed image by its image id. use after compressing an image to download the result.
     */
    TINIFY_OUTPUT: "TINYPNG_TINIFY_OUTPUT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TINYPNG".
 */
export type TINYPNG_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TINYPNG".
 */
export type TINYPNG_TRIGGER_EVENTS = {}
