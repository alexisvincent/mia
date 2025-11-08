// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SHORTPIXEL's SHORTPIXEL_BULK_PURGE_STORAGE tool input.
 */
type SHORTPIXEL_BULK_PURGE_STORAGE_INPUT = {
  /**
   * Domain
   * @description The domain whose files will be purged from ShortPixel storage
   */
  domain?: string;
};

/**
 * Type of SHORTPIXEL's SHORTPIXEL_BULK_PURGE_STORAGE tool output.
 */
type SHORTPIXEL_BULK_PURGE_STORAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Details on the result of the purge operation
       */
      message: string;
      /**
       * Success
       * @description Indicates if the purge was successful
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
 * Type of SHORTPIXEL's SHORTPIXEL_GET_API_STATUS tool input.
 */
type SHORTPIXEL_GET_API_STATUS_INPUT = object;

/**
 * Type of SHORTPIXEL's SHORTPIXEL_GET_API_STATUS tool output.
 */
type SHORTPIXEL_GET_API_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Usage
       * @description Detailed API usage statistics
       */
      API_Usage: {
          /**
           * Month
           * @description Usage statistics for the current month
           */
          Month: {
              /**
               * Limit
               * @description Number of credits available this month
               */
              Limit: number;
              /**
               * Timestamp
               * @description Unix timestamp representing the start of the monthly period
               */
              Timestamp: number;
              /**
               * Usage
               * @description Number of credits used this month
               */
              Usage: number;
          };
          /**
           * Total
           * @description Overall usage statistics since account creation
           */
          Total: {
              /**
               * Limit
               * @description Total credits available
               */
              Limit: number;
              /**
               * Usage
               * @description Total credits used
               */
              Usage: number;
          };
      };
      /**
       * Code
       * @description Status code returned by the API (2=OK, 3=error, 9=over quota)
       */
      Code: number;
      /**
       * Message
       * @description Human-readable message about the API status
       */
      Message: string;
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
 * Type map of all available tool input types for toolkit "SHORTPIXEL".
 */
export type SHORTPIXEL_TOOL_INPUTS = {
  BULK_PURGE_STORAGE: SHORTPIXEL_BULK_PURGE_STORAGE_INPUT
  GET_API_STATUS: SHORTPIXEL_GET_API_STATUS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SHORTPIXEL".
 */
export type SHORTPIXEL_TOOL_OUTPUTS = {
  BULK_PURGE_STORAGE: SHORTPIXEL_BULK_PURGE_STORAGE_OUTPUT
  GET_API_STATUS: SHORTPIXEL_GET_API_STATUS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SHORTPIXEL toolkit.
 */
export const SHORTPIXEL = {
  slug: "shortpixel",
  tools: {
    /**
     * Tool to purge all files stored on shortpixel storage servers for a domain. use when you need to remove all stored files for a site in bulk.
     */
    BULK_PURGE_STORAGE: "SHORTPIXEL_BULK_PURGE_STORAGE",
    /**
     * Tool to retrieve the current status of your api key, including available credits. use when you need to monitor your account usage before making additional api calls.
     */
    GET_API_STATUS: "SHORTPIXEL_GET_API_STATUS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SHORTPIXEL".
 */
export type SHORTPIXEL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SHORTPIXEL".
 */
export type SHORTPIXEL_TRIGGER_EVENTS = {}
