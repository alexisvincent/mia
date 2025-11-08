// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DROMO's DROMO_LIST_UPLOADS tool input.
 */
type DROMO_LIST_UPLOADS_INPUT = {
  /**
   * Limit
   * @description Limit for number of uploads to return (pagination). Default 20, max 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset from the start of the list (pagination). Default 0.
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Sort order for results.
   * @default null
   * @enum {string|null}
   */
  sort: "created_at" | "-created_at" | "updated_at" | "-updated_at" | null;
  /**
   * Status
   * @description Filter uploads by status.
   * @default null
   * @enum {string|null}
   */
  status: "pending" | "processing" | "ready" | "completed" | "error" | null;
};

/**
 * Type of DROMO's DROMO_LIST_UPLOADS tool output.
 */
type DROMO_LIST_UPLOADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Limit applied in the query.
       */
      limit: number;
      /**
       * Offset
       * @description Offset applied in the query.
       */
      offset: number;
      /**
       * Results
       * @description List of upload objects.
       */
      results: {
          /**
           * Created At
           * @description ISO8601 timestamp when the upload was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the upload.
           */
          id: string;
          /**
           * Num Errors
           * @description Number of error rows in the upload.
           */
          num_errors: number;
          /**
           * Num Rows
           * @description Number of rows in the upload.
           */
          num_rows: number;
          /**
           * Status
           * @description Current status of the upload.
           * @enum {string}
           */
          status: "pending" | "processing" | "ready" | "completed" | "error";
          /**
           * Updated At
           * @description ISO8601 timestamp when the upload was last updated.
           */
          updated_at: string;
      }[];
      /**
       * Total
       * @description Total number of uploads matching criteria.
       */
      total: number;
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
 * Type of DROMO's DROMO_UPLOAD_FILE_TO_HEADLESS_IMPORT tool input.
 */
type DROMO_UPLOAD_FILE_TO_HEADLESS_IMPORT_INPUT = {
  /**
   * Content Type
   * @description MIME type of the file, e.g., 'application/pdf' or 'image/png'
   */
  content_type?: string;
  /**
   * File
   * Format: binary
   * @description Raw file data in bytes to be uploaded
   */
  file?: string;
  /**
   * Upload Url
   * Format: uri
   * @description Signed URL that grants temporary permission to upload the file via HTTP PUT
   */
  upload_url?: string;
};

/**
 * Type of DROMO's DROMO_UPLOAD_FILE_TO_HEADLESS_IMPORT tool output.
 */
type DROMO_UPLOAD_FILE_TO_HEADLESS_IMPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the upload request
       */
      status_code: number;
      /**
       * Success
       * @description Whether the file upload was successful (status code 2xx)
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
 * Type map of all available tool input types for toolkit "DROMO".
 */
export type DROMO_TOOL_INPUTS = {
  LIST_UPLOADS: DROMO_LIST_UPLOADS_INPUT
  UPLOAD_FILE_TO_HEADLESS_IMPORT: DROMO_UPLOAD_FILE_TO_HEADLESS_IMPORT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DROMO".
 */
export type DROMO_TOOL_OUTPUTS = {
  LIST_UPLOADS: DROMO_LIST_UPLOADS_OUTPUT
  UPLOAD_FILE_TO_HEADLESS_IMPORT: DROMO_UPLOAD_FILE_TO_HEADLESS_IMPORT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DROMO toolkit.
 */
export const DROMO = {
  slug: "dromo",
  tools: {
    /**
     * Tool to retrieve a list of all uploads stored by dromo for your organization. use when you need to paginate or filter uploads.
     */
    LIST_UPLOADS: "DROMO_LIST_UPLOADS",
    /**
     * Tool to upload a file to a headless import. use after obtaining a signed upload url from dromo. performs an http put of raw bytes to the provided signed url.
     */
    UPLOAD_FILE_TO_HEADLESS_IMPORT: "DROMO_UPLOAD_FILE_TO_HEADLESS_IMPORT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DROMO".
 */
export type DROMO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DROMO".
 */
export type DROMO_TRIGGER_EVENTS = {}
