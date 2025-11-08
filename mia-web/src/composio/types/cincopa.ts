// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CINCOPA's CINCOPA_ASSET_UPLOAD_FROM_URL tool input.
 */
type CINCOPA_ASSET_UPLOAD_FROM_URL_INPUT = {
  /**
   * Fid
   * @description Unique identifier for the gallery where the asset should be uploaded. Required when adding to a gallery.
   * @default null
   */
  fid: string | null;
  /**
   * Input
   * @description The URL of the source asset to be uploaded.
   */
  input?: string;
  /**
   * Rid
   * @description Unique identifier for an existing asset to attach this asset to. If provided, 'type' must also be specified.
   * @default null
   */
  rid: string | null;
  /**
   * Type
   * @description Defines the type of the attached asset. Default is 'thumb'.
   * @default null
   */
  type: string | null;
};

/**
 * Type of CINCOPA's CINCOPA_ASSET_UPLOAD_FROM_URL tool output.
 */
type CINCOPA_ASSET_UPLOAD_FROM_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Runtime
       * @description Total time taken to process the request, in milliseconds.
       */
      runtime: number;
      /**
       * Status Id
       * @description Unique identifier assigned to track the upload process.
       */
      status_id: string;
      /**
       * Success
       * @description Indicates whether the request was successful.
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
 * Type of CINCOPA's CINCOPA_ASSET_UPLOAD_FROM_URL_ABORT tool input.
 */
type CINCOPA_ASSET_UPLOAD_FROM_URL_ABORT_INPUT = {
  /**
   * Status Id
   * @description Unique identifier of the in-progress upload to abort. This is returned when the upload was first initiated.
   */
  status_id?: string;
};

/**
 * Type of CINCOPA's CINCOPA_ASSET_UPLOAD_FROM_URL_ABORT tool output.
 */
type CINCOPA_ASSET_UPLOAD_FROM_URL_ABORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Runtime
       * @description Time taken to process the request, in milliseconds.
       */
      runtime: number;
      /**
       * Status Id
       * @description Unique identifier assigned to track the upload process. Same as the request status_id.
       */
      status_id: string;
      /**
       * Success
       * @description Indicates whether the abort request was successful.
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
 * Type of CINCOPA's CINCOPA_ASSET_UPLOAD_FROM_URL_GET_STATUS tool input.
 */
type CINCOPA_ASSET_UPLOAD_FROM_URL_GET_STATUS_INPUT = {
  /**
   * Status Id
   * @description Unique identifier for the upload process, returned by the initial 'Upload Asset From URL' call.
   */
  status_id?: string;
};

/**
 * Type of CINCOPA's CINCOPA_ASSET_UPLOAD_FROM_URL_GET_STATUS tool output.
 */
type CINCOPA_ASSET_UPLOAD_FROM_URL_GET_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asset Id
       * @description Identifier of the uploaded asset; provided when status is 'completed'.
       * @default null
       */
      asset_id: string | null;
      /**
       * Error Message
       * @description Error details if the upload has failed.
       * @default null
       */
      error_message: string | null;
      /**
       * Runtime
       * @description Time in milliseconds the server took to process the request.
       */
      runtime: number;
      /**
       * Status
       * @description Current state of the upload. Possible values: 'pending', 'in_progress', 'completed', 'failed'.
       * @enum {string}
       */
      status: "pending" | "in_progress" | "completed" | "failed";
      /**
       * Success
       * @description Indicates whether the status check request was successful.
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
 * Type of CINCOPA's CINCOPA_PING tool input.
 */
type CINCOPA_PING_INPUT = object;

/**
 * Type of CINCOPA's CINCOPA_PING tool output.
 */
type CINCOPA_PING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description Response message, always 'pong' when successful.
       */
      response: string;
      /**
       * Status
       * @description Server status: 'ok' indicates successful ping.
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
 * Type map of all available tool input types for toolkit "CINCOPA".
 */
export type CINCOPA_TOOL_INPUTS = {
  ASSET_UPLOAD_FROM_URL: CINCOPA_ASSET_UPLOAD_FROM_URL_INPUT
  ASSET_UPLOAD_FROM_URL_ABORT: CINCOPA_ASSET_UPLOAD_FROM_URL_ABORT_INPUT
  ASSET_UPLOAD_FROM_URL_GET_STATUS: CINCOPA_ASSET_UPLOAD_FROM_URL_GET_STATUS_INPUT
  PING: CINCOPA_PING_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CINCOPA".
 */
export type CINCOPA_TOOL_OUTPUTS = {
  ASSET_UPLOAD_FROM_URL: CINCOPA_ASSET_UPLOAD_FROM_URL_OUTPUT
  ASSET_UPLOAD_FROM_URL_ABORT: CINCOPA_ASSET_UPLOAD_FROM_URL_ABORT_OUTPUT
  ASSET_UPLOAD_FROM_URL_GET_STATUS: CINCOPA_ASSET_UPLOAD_FROM_URL_GET_STATUS_OUTPUT
  PING: CINCOPA_PING_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CINCOPA toolkit.
 */
export const CINCOPA = {
  slug: "cincopa",
  tools: {
    /**
     * Tool to upload a new asset directly from a provided external url and receive a status id for tracking. use when you need to import media from a remote source and optionally specify a gallery or existing asset.
     */
    ASSET_UPLOAD_FROM_URL: "CINCOPA_ASSET_UPLOAD_FROM_URL",
    /**
     * Tool to abort an ongoing asset upload-in-progress by providing its status id. use when an upload is no longer needed, was initiated by mistake, or is taking too long.
     */
    ASSET_UPLOAD_FROM_URL_ABORT: "CINCOPA_ASSET_UPLOAD_FROM_URL_ABORT",
    /**
     * Tool to check the status of an asset upload initiated via url by its status id. use after calling 'upload asset from url' to poll for completion.
     */
    ASSET_UPLOAD_FROM_URL_GET_STATUS: "CINCOPA_ASSET_UPLOAD_FROM_URL_GET_STATUS",
    /**
     * Tool to validate api connection. use after obtaining a valid api token to confirm connectivity.
     */
    PING: "CINCOPA_PING",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CINCOPA".
 */
export type CINCOPA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CINCOPA".
 */
export type CINCOPA_TRIGGER_EVENTS = {}
