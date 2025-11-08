// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of NEEDLE's NEEDLE_CREATE_COLLECTION tool input.
 */
type NEEDLE_CREATE_COLLECTION_INPUT = {
  /**
   * Description
   * @description Optional human-readable description of the collection.
   * @default null
   */
  description: string | null;
  /**
   * Metadata
   * @description Optional arbitrary JSON metadata associated with the collection.
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Name of the collection. Must be unique within your account.
   */
  name?: string;
};

/**
 * Type of NEEDLE's NEEDLE_CREATE_COLLECTION tool output.
 */
type NEEDLE_CREATE_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the collection was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the collection.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the collection.
       */
      id: string;
      /**
       * Metadata
       * @description Metadata attached to the collection.
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Name
       * @description Name of the collection.
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the collection was last updated.
       */
      updated_at: string;
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
 * Type of NEEDLE's NEEDLE_DELETE_FILES_FROM_COLLECTION tool input.
 */
type NEEDLE_DELETE_FILES_FROM_COLLECTION_INPUT = {
  /**
   * Collection Id
   * @description The unique identifier of the collection from which to delete files
   */
  collection_id?: string;
  /**
   * File Ids
   * @description List of file IDs to delete from the collection
   */
  file_ids?: string[];
};

/**
 * Type of NEEDLE's NEEDLE_DELETE_FILES_FROM_COLLECTION tool output.
 */
type NEEDLE_DELETE_FILES_FROM_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted File Ids
       * @description The IDs of files successfully deleted from the collection
       */
      deleted_file_ids: string[];
      /**
       * Failed File Ids
       * @description The IDs of files that could not be deleted (if any)
       */
      failed_file_ids: string[];
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
 * Type of NEEDLE's NEEDLE_GET_COLLECTION_STATS tool input.
 */
type NEEDLE_GET_COLLECTION_STATS_INPUT = {
  /**
   * Collection Id
   * @description The unique identifier of the collection.
   */
  collection_id?: string;
};

/**
 * Type of NEEDLE's NEEDLE_GET_COLLECTION_STATS tool output.
 */
type NEEDLE_GET_COLLECTION_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the collection was created
       */
      created_at: string;
      /**
       * Document Count
       * @description Number of documents in the collection
       */
      document_count: number;
      /**
       * Index Size
       * @description Size of the collection index in megabytes
       */
      index_size: number;
      /**
       * Updated At
       * @description ISO-8601 timestamp when the collection was last updated
       */
      updated_at: string;
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
 * Type of NEEDLE's NEEDLE_LIST_COLLECTIONS tool input.
 */
type NEEDLE_LIST_COLLECTIONS_INPUT = {
  /**
   * Limit
   * @description Maximum number of collections to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of collections to skip before collecting results
   * @default null
   */
  offset: number | null;
};

/**
 * Type of NEEDLE's NEEDLE_LIST_COLLECTIONS tool output.
 */
type NEEDLE_LIST_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description List of collections returned by the API
   */
  data?: {
      /**
       * Created At
       * @description Collection creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Description
       * @description Collection description
       */
      description: string;
      /**
       * Id
       * @description Collection unique identifier
       */
      id: string;
      /**
       * Name
       * @description Collection name
       */
      name: string;
      /**
       * Updated At
       * @description Collection last update timestamp in ISO 8601 format
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination information
   */
  pagination?: {
      /**
       * Limit
       * @description Number of items returned per page
       */
      limit: number;
      /**
       * Offset
       * @description Number of items skipped before this page
       */
      offset: number;
      /**
       * Total
       * @description Total number of items available
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEEDLE's NEEDLE_LIST_COLLECTION_FILES tool input.
 */
type NEEDLE_LIST_COLLECTION_FILES_INPUT = {
  /**
   * Collection Id
   * @description Unique identifier of the collection
   */
  collection_id?: string;
  /**
   * Limit
   * @description Number of files to return per page, must be >=1
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip for pagination, must be >=0
   * @default null
   */
  offset: number | null;
};

/**
 * Type of NEEDLE's NEEDLE_LIST_COLLECTION_FILES tool output.
 */
type NEEDLE_LIST_COLLECTION_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files
       * @description List of file objects
       */
      files: {
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format
           */
          created_at: string;
          /**
           * Id
           * @description Unique file identifier
           */
          id: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * Status
           * @description Current status of the file
           */
          status: string;
          /**
           * Updated At
           * @description Last updated timestamp in ISO 8601 format
           */
          updated_at: string;
      }[];
      /**
       * Limit
       * @description Page limit used
       */
      limit: number;
      /**
       * Offset
       * @description Offset used
       */
      offset: number;
      /**
       * Total
       * @description Total count of files in the collection
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
 * Type map of all available tool input types for toolkit "NEEDLE".
 */
export type NEEDLE_TOOL_INPUTS = {
  CREATE_COLLECTION: NEEDLE_CREATE_COLLECTION_INPUT
  DELETE_FILES_FROM_COLLECTION: NEEDLE_DELETE_FILES_FROM_COLLECTION_INPUT
  GET_COLLECTION_STATS: NEEDLE_GET_COLLECTION_STATS_INPUT
  LIST_COLLECTIONS: NEEDLE_LIST_COLLECTIONS_INPUT
  LIST_COLLECTION_FILES: NEEDLE_LIST_COLLECTION_FILES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "NEEDLE".
 */
export type NEEDLE_TOOL_OUTPUTS = {
  CREATE_COLLECTION: NEEDLE_CREATE_COLLECTION_OUTPUT
  DELETE_FILES_FROM_COLLECTION: NEEDLE_DELETE_FILES_FROM_COLLECTION_OUTPUT
  GET_COLLECTION_STATS: NEEDLE_GET_COLLECTION_STATS_OUTPUT
  LIST_COLLECTIONS: NEEDLE_LIST_COLLECTIONS_OUTPUT
  LIST_COLLECTION_FILES: NEEDLE_LIST_COLLECTION_FILES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's NEEDLE toolkit.
 */
export const NEEDLE = {
  slug: "needle",
  tools: {
    /**
     * Tool to create a new collection. use after confirming the collection name.
     */
    CREATE_COLLECTION: "NEEDLE_CREATE_COLLECTION",
    /**
     * Tool to delete files from a specific collection by providing file ids. use after confirming valid file ids to remove from the collection.
     */
    DELETE_FILES_FROM_COLLECTION: "NEEDLE_DELETE_FILES_FROM_COLLECTION",
    /**
     * Tool to retrieve statistics for a specific collection by its id. use when you need document count, index size, and timestamps after confirming the collection exists.
     */
    GET_COLLECTION_STATS: "NEEDLE_GET_COLLECTION_STATS",
    /**
     * Tool to list collections. use after authenticating with your api key to page through collections.
     */
    LIST_COLLECTIONS: "NEEDLE_LIST_COLLECTIONS",
    /**
     * Tool to list all files within a specific collection by its id. use when you have a collection id and need to retrieve its files. supports pagination.
     */
    LIST_COLLECTION_FILES: "NEEDLE_LIST_COLLECTION_FILES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "NEEDLE".
 */
export type NEEDLE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "NEEDLE".
 */
export type NEEDLE_TRIGGER_EVENTS = {}
