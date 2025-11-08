// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of IMGBB's IMGBB_GET_API_KEY tool input.
 */
type IMGBB_GET_API_KEY_INPUT = object;

/**
 * Type of IMGBB's IMGBB_GET_API_KEY tool output.
 */
type IMGBB_GET_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data object containing the API key.
   */
  data?: {
      /**
       * Key
       * @description ImgBB API key string.
       */
      key: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Status code of the validation operation.
   */
  status?: number;
  /**
   * Success
   * @description Whether the API key retrieval and validation succeeded.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of IMGBB's IMGBB_UPLOAD_IMAGE tool input.
 */
type IMGBB_UPLOAD_IMAGE_INPUT = {
  /**
   * Expiration
   * @description Optional auto-delete time in seconds (60–15552000).
   * @default null
   */
  expiration: number | null;
  /**
   * Image
   * @description Base64-encoded image string, remote URL, or raw file bytes (max 32 MB).
   */
  image?: string | null;
  /**
   * Name
   * @description Optional custom filename to use for the uploaded image.
   * @default null
   */
  name: string | null;
};

/**
 * Type of IMGBB's IMGBB_UPLOAD_IMAGE tool output.
 */
type IMGBB_UPLOAD_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data object containing details of the uploaded image.
   */
  data?: {
      /**
       * Delete Url
       * @description URL to delete the image.
       */
      delete_url: string;
      /**
       * Display Url
       * @description Display URL for embedding.
       */
      display_url: string;
      /**
       * Expiration
       * @description Expiration timestamp or duration.
       */
      expiration: string;
      /**
       * Height
       * @description Height of the image in pixels.
       */
      height: string;
      /**
       * Id
       * @description ID of the uploaded image.
       */
      id: string;
      /**
       * Image
       * @description Information about the full-size image.
       */
      image: {
          /**
           * Extension
           * @description File extension of the image.
           */
          extension: string;
          /**
           * Filename
           * @description Original file name of the image.
           */
          filename: string;
          /**
           * Mime
           * @description MIME type of the image.
           */
          mime: string;
          /**
           * Name
           * @description Name assigned to the image.
           */
          name: string;
          /**
           * Url
           * @description URL to access this image version.
           */
          url: string;
      };
      /**
       * Medium
       * @description Information about the medium-sized image.
       */
      medium: {
          /**
           * Extension
           * @description File extension of the image.
           */
          extension: string;
          /**
           * Filename
           * @description Original file name of the image.
           */
          filename: string;
          /**
           * Mime
           * @description MIME type of the image.
           */
          mime: string;
          /**
           * Name
           * @description Name assigned to the image.
           */
          name: string;
          /**
           * Url
           * @description URL to access this image version.
           */
          url: string;
      };
      /**
       * Size
       * @description Size of the image in bytes.
       */
      size: string;
      /**
       * Thumb
       * @description Information about the thumbnail image.
       */
      thumb: {
          /**
           * Extension
           * @description File extension of the image.
           */
          extension: string;
          /**
           * Filename
           * @description Original file name of the image.
           */
          filename: string;
          /**
           * Mime
           * @description MIME type of the image.
           */
          mime: string;
          /**
           * Name
           * @description Name assigned to the image.
           */
          name: string;
          /**
           * Url
           * @description URL to access this image version.
           */
          url: string;
      };
      /**
       * Time
       * @description Upload timestamp (Unix epoch).
       */
      time: string;
      /**
       * Title
       * @description Title of the uploaded image.
       */
      title: string;
      /**
       * Url
       * @description Direct URL to the original image.
       */
      url: string;
      /**
       * Url Viewer
       * @description Viewer URL of the uploaded image.
       */
      url_viewer: string;
      /**
       * Width
       * @description Width of the image in pixels.
       */
      width: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description HTTP status code returned by ImgBB API.
   */
  status?: number;
  /**
   * Success
   * @description Whether the upload was successful.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "IMGBB".
 */
export type IMGBB_TOOL_INPUTS = {
  GET_API_KEY: IMGBB_GET_API_KEY_INPUT
  UPLOAD_IMAGE: IMGBB_UPLOAD_IMAGE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "IMGBB".
 */
export type IMGBB_TOOL_OUTPUTS = {
  GET_API_KEY: IMGBB_GET_API_KEY_OUTPUT
  UPLOAD_IMAGE: IMGBB_UPLOAD_IMAGE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's IMGBB toolkit.
 */
export const IMGBB = {
  slug: "imgbb",
  tools: {
    /**
     * Tool to retrieve and validate the ImgBB API key. Use before making ImgBB API calls to ensure authentication is configured.
     */
    GET_API_KEY: "IMGBB_GET_API_KEY",
    /**
     * Tool to upload an image to ImgBB. Use when you need to host an image and get back its URLs immediately.
     */
    UPLOAD_IMAGE: "IMGBB_UPLOAD_IMAGE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "IMGBB".
 */
export type IMGBB_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "IMGBB".
 */
export type IMGBB_TRIGGER_EVENTS = {}
