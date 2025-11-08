// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ASIN_DATA_API's ASIN_DATA_API_CLEAR_COLLECTION_REQUESTS tool input.
 */
type ASIN_DATA_API_CLEAR_COLLECTION_REQUESTS_INPUT = {
  /**
   * Collection Id
   * @description ID of the collection to clear requests from.
   */
  collection_id?: string;
  /**
   * Request Ids
   * @description Array of request ID strings to delete.
   */
  request_ids?: string[];
};

/**
 * Type of ASIN_DATA_API's ASIN_DATA_API_CLEAR_COLLECTION_REQUESTS tool output.
 */
type ASIN_DATA_API_CLEAR_COLLECTION_REQUESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Info
       * @description Information about the deletion operation.
       */
      request_info: {
          /**
           * Message
           * @description Human-readable confirmation or error detail.
           */
          message: string;
          /**
           * Success
           * @description True if all specified requests were deleted.
           */
          success: boolean;
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
 * Type of ASIN_DATA_API's ASIN_DATA_API_LIST_COLLECTION_REQUESTS tool input.
 */
type ASIN_DATA_API_LIST_COLLECTION_REQUESTS_INPUT = {
  /**
   * Collection Id
   * @description Unique identifier of the collection whose requests are to be listed
   */
  collection_id?: string;
  /**
   * Created After
   * Format: date-time
   * @description Only include requests created after this timestamp (ISO-8601)
   * @default null
   */
  createdAfter: unknown;
  /**
   * Created Before
   * Format: date-time
   * @description Only include requests created before this timestamp (ISO-8601)
   * @default null
   */
  createdBefore: unknown;
  /**
   * Page
   * @description Page number for pagination (default: 1)
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page (default: 20, max: 100)
   * @default 20
   */
  pageSize: number | null;
  /**
   * Status
   * @description Filter results by request status
   * @default null
   * @enum {string|null}
   */
  status: "pending" | "completed" | null;
};

/**
 * Type of ASIN_DATA_API's ASIN_DATA_API_LIST_COLLECTION_REQUESTS tool output.
 */
type ASIN_DATA_API_LIST_COLLECTION_REQUESTS_OUTPUT = {
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
       * Request Info
       * @description Metadata about the API request
       */
      request_info: {
          /**
           * Success
           * @description True if the API request succeeded
           */
          success: boolean;
      };
      /**
       * Requests
       * @description List of requests in the collection
       */
      requests: {
          /**
           * Created At
           * @description ISO-8601 timestamp when the request was created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the request
           */
          id: string;
          /**
           * Status
           * @description Status of the request
           */
          status: string;
          /**
           * Updated At
           * @description ISO-8601 timestamp when the request was last updated
           */
          updatedAt: string;
      }[];
      /**
       * Total Count
       * @description Total number of requests matching the filter
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
 * Type map of all available tool input types for toolkit "ASIN_DATA_API".
 */
export type ASIN_DATA_API_TOOL_INPUTS = {
  CLEAR_COLLECTION_REQUESTS: ASIN_DATA_API_CLEAR_COLLECTION_REQUESTS_INPUT
  LIST_COLLECTION_REQUESTS: ASIN_DATA_API_LIST_COLLECTION_REQUESTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ASIN_DATA_API".
 */
export type ASIN_DATA_API_TOOL_OUTPUTS = {
  CLEAR_COLLECTION_REQUESTS: ASIN_DATA_API_CLEAR_COLLECTION_REQUESTS_OUTPUT
  LIST_COLLECTION_REQUESTS: ASIN_DATA_API_LIST_COLLECTION_REQUESTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ASIN_DATA_API toolkit.
 */
export const ASIN_DATA_API = {
  slug: "asin_data_api",
  tools: {
    /**
     * Tool to delete multiple requests from a collection by ids. use when you need to remove a selected set of request entries from an existing collection in a single call.
     */
    CLEAR_COLLECTION_REQUESTS: "ASIN_DATA_API_CLEAR_COLLECTION_REQUESTS",
    /**
     * Tool to list all requests in a collection (paginated). use when you need to paginate through requests for a specific collection.
     */
    LIST_COLLECTION_REQUESTS: "ASIN_DATA_API_LIST_COLLECTION_REQUESTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ASIN_DATA_API".
 */
export type ASIN_DATA_API_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ASIN_DATA_API".
 */
export type ASIN_DATA_API_TRIGGER_EVENTS = {}
