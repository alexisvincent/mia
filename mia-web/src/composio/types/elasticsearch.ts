// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ELASTICSEARCH's ELASTICSEARCH_GET_INDEX_SCHEMA tool input.
 */
type ELASTICSEARCH_GET_INDEX_SCHEMA_INPUT = {
  /**
   * Index Name
   * @description The name of the index to get schema information for.
   */
  index_name?: string;
};

/**
 * Type of ELASTICSEARCH's ELASTICSEARCH_GET_INDEX_SCHEMA tool output.
 */
type ELASTICSEARCH_GET_INDEX_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Index Name
       * @description Name of the index
       */
      index_name: string;
      /**
       * Schema
       * @description The complete schema information
       */
      schema: {
          /**
           * Aliases
           * @description Aliases for the index
           */
          aliases?: {
              [key: string]: unknown;
          };
          /**
           * Mappings
           * @description The mappings for the index
           */
          mappings?: {
              /**
               * Properties
               * @description The field mappings for the index
               * @default {}
               */
              properties: {
                  [key: string]: {
                      /**
                       * Analyzer
                       * @description The analyzer used for text fields
                       * @default null
                       */
                      analyzer: string | null;
                      /**
                       * Fields
                       * @description Sub-fields for multi-field mappings
                       * @default null
                       */
                      fields: {
                          [key: string]: unknown;
                      } | null;
                      /**
                       * Format
                       * @description The format of the field (e.g., 'yyyy-MM-dd')
                       * @default null
                       */
                      format: string | null;
                      /**
                       * Properties
                       * @description Properties for nested objects
                       * @default null
                       */
                      properties: {
                          [key: string]: unknown;
                      } | null;
                      /**
                       * Type
                       * @description The field type (e.g., 'text', 'keyword', 'date', 'long')
                       * @default null
                       */
                      type: string | null;
                  } & {
                      [key: string]: unknown;
                  };
              };
          };
          /**
           * Settings
           * @description The settings for the index
           */
          settings?: {
              /**
               * Creation Date
               * @description Index creation date
               * @default null
               */
              creation_date: string | null;
              /**
               * Number Of Replicas
               * @description Number of replicas
               * @default null
               */
              number_of_replicas: number | null;
              /**
               * Number Of Shards
               * @description Number of shards
               * @default null
               */
              number_of_shards: number | null;
              /**
               * Uuid
               * @description Index UUID
               * @default null
               */
              uuid: string | null;
              /**
               * Version
               * @description Version information
               * @default null
               */
              version: {
                  [key: string]: unknown;
              } | null;
          } & {
              [key: string]: unknown;
          };
      };
      /**
       * Statistics
       * @description Schema statistics
       */
      statistics: {
          /**
           * Field Types
           * @description Count of each field type
           * @default {}
           */
          field_types: {
              [key: string]: number;
          };
          /**
           * Total Fields
           * @description Total number of fields in the index
           * @default 0
           */
          total_fields: number;
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
 * Type of ELASTICSEARCH's ELASTICSEARCH_LIST_INDICES tool input.
 */
type ELASTICSEARCH_LIST_INDICES_INPUT = {
  /**
   * Expand Wildcards
   * @description Type of index that wildcard patterns can match. Supports comma-separated values, e.g., 'open,hidden'. 'all' matches all indices by default.
   * @default null
   * @enum {string|null}
   */
  expand_wildcards: "open" | "closed" | "hidden" | "none" | "all" | null;
  /**
   * Health
   * @description The health status to filter indices by (green, yellow, or red).
   * @default null
   * @enum {string|null}
   */
  health: "green" | "yellow" | "red" | null;
  /**
   * Include Primary Shards Only
   * @description If true, only shows information about primary shards.
   * @default false
   */
  include_primary_shards_only: boolean | null;
  /**
   * Index
   * @description A comma-separated string of index names or wildcard expressions to limit the returned information. For example, 'my-index-*,another-index'. If not provided, information for all indices is returned.
   * @default null
   */
  index: string | null;
  /**
   * Sort By
   * @description A comma-separated string of column names to sort by. For example, 'index,health'.
   * @default null
   */
  sort_by: string | null;
};

/**
 * Type of ELASTICSEARCH's ELASTICSEARCH_LIST_INDICES tool output.
 */
type ELASTICSEARCH_LIST_INDICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Indices
       * @description A list of objects, where each object represents an index and its details.
       * @default []
       */
      indices: ({
          /**
           * Creation Date
           * @description Creation date of the index.
           * @default null
           */
          creation_date: string | null;
          /**
           * Creation Date String
           * @description Creation date of the index in string format.
           * @default null
           */
          creation_date_string: string | null;
          /**
           * Docs Count
           * @description Number of documents in the index.
           * @default null
           */
          docs_count: string | null;
          /**
           * Docs Deleted
           * @description Number of deleted documents in the index.
           * @default null
           */
          docs_deleted: string | null;
          /**
           * Health
           * @description Health status of the index (green, yellow, or red).
           * @default null
           */
          health: string | null;
          /**
           * Index
           * @description Name of the index.
           * @default null
           */
          index: string | null;
          /**
           * Pri
           * @description Number of primary shards.
           * @default null
           */
          pri: string | null;
          /**
           * Pri Store Size
           * @description Size of the primary shards' store.
           * @default null
           */
          pri_store_size: string | null;
          /**
           * Rep
           * @description Number of replica shards.
           * @default null
           */
          rep: string | null;
          /**
           * Status
           * @description Status of the index (e.g., open, close).
           * @default null
           */
          status: string | null;
          /**
           * Store Size
           * @description Total size of the index store.
           * @default null
           */
          store_size: string | null;
          /**
           * Uuid
           * @description Unique ID of the index.
           * @default null
           */
          uuid: string | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of ELASTICSEARCH's ELASTICSEARCH_QUERY_INDEX tool input.
 */
type ELASTICSEARCH_QUERY_INDEX_INPUT = {
  /**
   * Fields
   * @description Specific fields to return (if not specified, returns all fields)
   * @default null
   */
  fields: string[] | null;
  /**
   * From
   * @description Starting offset for pagination (default: 0)
   * @default 0
   */
  from: number | null;
  /**
   * Highlight
   * @description Enable highlighting for search terms
   * @default false
   */
  highlight: boolean | null;
  /**
   * Include Aggregations
   * @description Include aggregations in the response
   * @default false
   */
  include_aggregations: boolean | null;
  /**
   * Index Name
   * @description The name of the index to query
   */
  index_name?: string;
  /**
   * Query
   * @description Free text search query (uses query_string query)
   * @default null
   */
  query: string | null;
  /**
   * Range Filters
   * @description Range filters for numeric or date fields
   * @default null
   */
  range_filters: {
      /**
       * Field
       * @description The field to filter on
       */
      field: string;
      /**
       * Gt
       * @description Greater than
       * @default null
       */
      gt: string | null;
      /**
       * Gte
       * @description Greater than or equal to
       * @default null
       */
      gte: string | null;
      /**
       * Lt
       * @description Less than
       * @default null
       */
      lt: string | null;
      /**
       * Lte
       * @description Less than or equal to
       * @default null
       */
      lte: string | null;
  }[] | null;
  /**
   * Size
   * @description Number of results to return (default: 10, max: 1000 to prevent context overload)
   * @default 10
   */
  size: number | null;
  /**
   * Sort
   * @description Sort order for results
   * @default null
   */
  sort: {
      /**
       * Field
       * @description The field to sort by
       */
      field: string;
      /**
       * Order
       * @description Sort order: 'asc' or 'desc'
       * @default asc
       */
      order: string | null;
  }[] | null;
  /**
   * Term Filters
   * @description Exact term filters for specific field values
   * @default null
   */
  term_filters: {
      /**
       * Field
       * @description The field to filter on
       */
      field: string;
      /**
       * Value
       * @description The exact value to match
       */
      value: string | null;
  }[] | null;
  /**
   * TimeFilter
   * @description Time-based filter for timestamp fields
   * @default null
   */
  time_filter: {
      /**
       * Field
       * @description The timestamp field to filter on (e.g., '@timestamp', 'created_at')
       */
      field: string;
      /**
       * Gt
       * @description Greater than (ISO 8601 format)
       * @default null
       */
      gt: string | null;
      /**
       * Gte
       * @description Greater than or equal to (ISO 8601 format)
       * @default null
       */
      gte: string | null;
      /**
       * Lt
       * @description Less than (ISO 8601 format)
       * @default null
       */
      lt: string | null;
      /**
       * Lte
       * @description Less than or equal to (ISO 8601 format)
       * @default null
       */
      lte: string | null;
  } | null;
};

/**
 * Type of ELASTICSEARCH's ELASTICSEARCH_QUERY_INDEX tool output.
 */
type ELASTICSEARCH_QUERY_INDEX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Aggregations
       * @description Aggregation results
       * @default null
       */
      aggregations: {
          /**
           * Name
           * @description Aggregation name
           */
          name: string;
          /**
           * Result
           * @description Aggregation result
           */
          result: {
              [key: string]: unknown;
          };
      }[] | null;
      /**
       * Hits
       * @description Search results
       */
      hits: {
          /**
           * Highlight
           * @description Highlighted fields
           * @default null
           */
          highlight: {
              [key: string]: string[];
          } | null;
          /**
           * Id
           * @description Document ID
           */
          id: string;
          /**
           * Index
           * @description Index name
           */
          index: string;
          /**
           * Score
           * @description Search score
           * @default null
           */
          score: number | null;
          /**
           * Source
           * @description Document source
           */
          source: {
              [key: string]: unknown;
          };
      }[];
      /**
       * Index Name
       * @description Name of the queried index
       */
      index_name: string;
      /**
       * Max Score
       * @description Maximum score of returned documents
       * @default null
       */
      max_score: number | null;
      /**
       * Pagination
       * @description Pagination information
       */
      pagination: {
          [key: string]: unknown;
      };
      /**
       * Timed Out
       * @description Whether the search timed out
       * @default null
       */
      timed_out: boolean | null;
      /**
       * Took
       * @description Time taken for the search in milliseconds
       * @default null
       */
      took: number | null;
      /**
       * Total Hits
       * @description Total number of matching documents
       */
      total_hits: number;
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
 * Type map of all available tool input types for toolkit "ELASTICSEARCH".
 */
export type ELASTICSEARCH_TOOL_INPUTS = {
  GET_INDEX_SCHEMA: ELASTICSEARCH_GET_INDEX_SCHEMA_INPUT
  LIST_INDICES: ELASTICSEARCH_LIST_INDICES_INPUT
  QUERY_INDEX: ELASTICSEARCH_QUERY_INDEX_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ELASTICSEARCH".
 */
export type ELASTICSEARCH_TOOL_OUTPUTS = {
  GET_INDEX_SCHEMA: ELASTICSEARCH_GET_INDEX_SCHEMA_OUTPUT
  LIST_INDICES: ELASTICSEARCH_LIST_INDICES_OUTPUT
  QUERY_INDEX: ELASTICSEARCH_QUERY_INDEX_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ELASTICSEARCH toolkit.
 */
export const ELASTICSEARCH = {
  slug: "elasticsearch",
  tools: {
    /**
     * Tool to get the complete schema/mapping of a specific elasticsearch index. use when you need to understand the structure, field types, and mappings of an index.
     */
    GET_INDEX_SCHEMA: "ELASTICSEARCH_GET_INDEX_SCHEMA",
    /**
     * Tool to list all available elasticsearch indices. use when you need to get a list of indices in your elasticsearch cluster, optionally filtering by pattern, health status, or other criteria.
     */
    LIST_INDICES: "ELASTICSEARCH_LIST_INDICES",
    /**
     * Tool to query an elasticsearch index with various filters, time ranges, and pagination support. use when you need to search for documents in an index with complex filtering criteria.
     */
    QUERY_INDEX: "ELASTICSEARCH_QUERY_INDEX",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ELASTICSEARCH".
 */
export type ELASTICSEARCH_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ELASTICSEARCH".
 */
export type ELASTICSEARCH_TRIGGER_EVENTS = {}
