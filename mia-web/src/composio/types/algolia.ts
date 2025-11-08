// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ALGOLIA's ALGOLIA_ADD_AB_TEST tool input.
 */
type ALGOLIA_ADD_AB_TEST_INPUT = object;

/**
 * Type of ALGOLIA's ALGOLIA_ADD_AB_TEST tool output.
 */
type ALGOLIA_ADD_AB_TEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of ALGOLIA's ALGOLIA_BROWSE_INDEX tool input.
 */
type ALGOLIA_BROWSE_INDEX_INPUT = {
  /**
   * Browse Parameters
   * @description Additional browse parameters as key-value pairs (e.g., filters, hitsPerPage).
   * @default null
   */
  browse_parameters: {
      [key: string]: unknown;
  } | null;
  /**
   * Cursor
   * @description Cursor to specify the starting point for the next batch of results.
   * @default null
   */
  cursor: string | null;
  /**
   * Index Name
   * @description Name of the Algolia index to browse.
   */
  index_name?: string;
  /**
   * Query
   * @description Search query to filter records; empty or omitted returns all records.
   * @default null
   */
  query: string | null;
};

/**
 * Type of ALGOLIA's ALGOLIA_BROWSE_INDEX tool output.
 */
type ALGOLIA_BROWSE_INDEX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cursor
       * @description Cursor to fetch the next batch of results; absence indicates end of index.
       * @default null
       */
      cursor: string | null;
      /**
       * Hits
       * @description List of records retrieved from the index.
       */
      hits: {
          [key: string]: unknown;
      }[];
      /**
       * Hits Per Page
       * @description Number of hits returned per page; present when unfiltered browsing.
       * @default null
       */
      hitsPerPage: number | null;
      /**
       * Nb Hits
       * @description Total number of objects in the index; present when unfiltered browsing.
       * @default null
       */
      nbHits: number | null;
      /**
       * Nb Pages
       * @description Total number of pages; present when unfiltered browsing.
       * @default null
       */
      nbPages: number | null;
      /**
       * Page
       * @description Current page index (zero-based); present when unfiltered browsing.
       * @default null
       */
      page: number | null;
      /**
       * Params
       * @description URL-encoded search parameters used to filter the results.
       */
      params: string;
      /**
       * Processing Time Ms
       * @description Time taken to process the request in milliseconds.
       */
      processingTimeMS: number;
      /**
       * Query
       * @description Search query used to filter results.
       * @default null
       */
      query: string | null;
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
 * Type of ALGOLIA's ALGOLIA_CLEAR_OBJECTS tool input.
 */
type ALGOLIA_CLEAR_OBJECTS_INPUT = {
  /**
   * Index Name
   * @description Name of the index from which to clear all records.
   */
  index_name?: string;
  /**
   * Request Options
   * @description Optional mapping of request options (query parameters) as string values.
   * @default null
   */
  request_options: {
      [key: string]: string;
  } | null;
};

/**
 * Type of ALGOLIA's ALGOLIA_CLEAR_OBJECTS tool output.
 */
type ALGOLIA_CLEAR_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task Id
       * @description Unique identifier of the clear task for tracking asynchronous operations.
       */
      taskID: number;
      /**
       * Updated At
       * @description Timestamp when the clear task was processed by Algolia.
       */
      updatedAt: string;
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
 * Type of ALGOLIA's ALGOLIA_CLEAR_RULES tool input.
 */
type ALGOLIA_CLEAR_RULES_INPUT = {
  /**
   * Forward To Replicas
   * @description If true, also clears rules on all replica indices.
   * @default false
   */
  forwardToReplicas: boolean;
  /**
   * Index Name
   * @description Name of the Algolia index from which to clear all rules.
   */
  index_name?: string;
};

/**
 * Type of ALGOLIA's ALGOLIA_CLEAR_RULES tool output.
 */
type ALGOLIA_CLEAR_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task Id
       * @description Unique identifier of the clear rules task for tracking asynchronous operations.
       */
      taskID: number;
      /**
       * Updated At
       * @description Timestamp when the clear rules task was processed by Algolia.
       */
      updatedAt: string;
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
 * Type of ALGOLIA's ALGOLIA_CLICKED_OBJECT_IDS tool input.
 */
type ALGOLIA_CLICKED_OBJECT_IDS_INPUT = {
  /**
   * Authenticated User Token
   * @description Pseudonymous identifier for authenticated users; same pattern as userToken.
   * @default null
   */
  authenticatedUserToken: string | null;
  /**
   * Event Name
   * @description Name of the specific event (1-64 ASCII printable characters).
   */
  eventName?: string;
  /**
   * Index Name
   * @description Name of the Algolia index where the event occurred.
   */
  indexName?: string;
  /**
   * Object I Ds
   * @description List of clicked object IDs (1-20 items).
   */
  objectIDs?: string[];
  /**
   * User Token
   * @description Anonymous user identifier. Allowed chars: alphanumeric, '_', '=', '+', '/', '-'; length 1-129.
   */
  userToken?: string;
};

/**
 * Type of ALGOLIA's ALGOLIA_CLICKED_OBJECT_IDS tool output.
 */
type ALGOLIA_CLICKED_OBJECT_IDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of ALGOLIA's ALGOLIA_CLICKED_OBJECT_IDS_AFTER_SEARCH tool input.
 */
type ALGOLIA_CLICKED_OBJECT_IDS_AFTER_SEARCH_INPUT = {
  /**
   * Event Name
   * @description Name for this click event, e.g. 'Product Clicked'.
   */
  eventName?: string;
  /**
   * Index
   * @description Name of the index where the click occurred.
   */
  index?: string;
  /**
   * Object I Ds
   * @description List of objectIDs that were clicked.
   */
  objectIDs?: string[];
  /**
   * Positions
   * @description Positions (0-based) of clicked objects in the search results.
   */
  positions?: number[];
  /**
   * Query Id
   * @description queryID returned by Algolia Search API for the request.
   */
  queryID?: string;
  /**
   * Timestamp
   * @description Event timestamp in milliseconds since epoch. If omitted, server timestamp is used.
   * @default null
   */
  timestamp: number | null;
  /**
   * User Token
   * @description Unique token identifying the user, consistent across events.
   */
  userToken?: string;
};

/**
 * Type of ALGOLIA's ALGOLIA_CLICKED_OBJECT_IDS_AFTER_SEARCH tool output.
 */
type ALGOLIA_CLICKED_OBJECT_IDS_AFTER_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of ALGOLIA's ALGOLIA_CONVERTED_OBJECT_IDS tool input.
 */
type ALGOLIA_CONVERTED_OBJECT_IDS_INPUT = {
  /**
   * Authenticated User Token
   * @description Optional pseudonymous token for authenticated users. Never include PII.
   * @default null
   */
  authenticatedUserToken: string | null;
  /**
   * Event Name
   * @description Name of the specific conversion event. 1–64 ASCII characters except control characters.
   */
  eventName?: string;
  /**
   * Index
   * @description Name of the Algolia index where conversion happened.
   */
  index?: string;
  /**
   * Object I Ds
   * @description List of object IDs for items converted. Up to 20 IDs.
   */
  objectIDs?: string[];
  /**
   * Timestamp
   * @description Event timestamp in milliseconds since epoch. If omitted, server timestamp is used.
   * @default null
   */
  timestamp: number | null;
  /**
   * User Token
   * @description Unique token identifying the user, e.g., 'user-123'.
   */
  userToken?: string;
};

/**
 * Type of ALGOLIA's ALGOLIA_CONVERTED_OBJECT_IDS tool output.
 */
type ALGOLIA_CONVERTED_OBJECT_IDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of ALGOLIA's ALGOLIA_COPY_INDEX tool input.
 */
type ALGOLIA_COPY_INDEX_INPUT = {
  /**
   * Destination
   * @description Name of the destination index to create.
   */
  destination?: string;
  /**
   * Index Name
   * @description Name of the source index to copy.
   */
  index_name?: string;
  /**
   * Scope
   * @description Parts of the index to copy. Allowed values: 'settings', 'synonyms', 'rules'. If omitted, all parts (including records) are copied. If specified, records are not copied.
   * @default null
   */
  scope: string[] | null;
};

/**
 * Type of ALGOLIA's ALGOLIA_COPY_INDEX tool output.
 */
type ALGOLIA_COPY_INDEX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task Id
       * @description Identifier for the asynchronous copy task.
       */
      taskID: number;
      /**
       * Updated At
       * @description Timestamp when the copy operation was initiated.
       */
      updatedAt: string;
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
 * Type of ALGOLIA's ALGOLIA_COPY_RULES tool input.
 */
type ALGOLIA_COPY_RULES_INPUT = {
  /**
   * Dest Index
   * @description Name of the destination index to copy rules to.
   */
  destIndex?: string;
  /**
   * Index Name
   * @description Name of the source index to copy rules from.
   */
  index_name?: string;
};

/**
 * Type of ALGOLIA's ALGOLIA_COPY_RULES tool output.
 */
type ALGOLIA_COPY_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task Id
       * @description Identifier of the copy rules task for tracking asynchronous operations.
       */
      taskID: number;
      /**
       * Updated At
       * @description Timestamp when the copy rules task was processed by Algolia.
       */
      updatedAt: string;
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
 * Type of ALGOLIA's ALGOLIA_COPY_SETTINGS tool input.
 */
type ALGOLIA_COPY_SETTINGS_INPUT = {
  /**
   * Destination
   * @description Name of the destination index where settings will be applied.
   */
  destination?: string;
  /**
   * Index Name
   * @description Name of the source index whose settings will be copied.
   */
  index_name?: string;
};

/**
 * Type of ALGOLIA's ALGOLIA_COPY_SETTINGS tool output.
 */
type ALGOLIA_COPY_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task Id
       * @description Identifier of the asynchronous task for the settings copy operation.
       */
      taskID: number;
      /**
       * Updated At
       * @description Timestamp when the settings copy operation was initiated.
       */
      updatedAt: string;
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
 * Type of ALGOLIA's ALGOLIA_DELETE_INDEX tool input.
 */
type ALGOLIA_DELETE_INDEX_INPUT = {
  /**
   * Index Name
   * @description The name of the index to be deleted
   */
  index_name?: string;
};

/**
 * Type of ALGOLIA's ALGOLIA_DELETE_INDEX tool output.
 */
type ALGOLIA_DELETE_INDEX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted At
       * @description Timestamp when Algolia received the deletion request
       */
      deletedAt: string;
      /**
       * Task Id
       * @description Task ID for tracking deletion operation
       */
      taskID: number;
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
 * Type of ALGOLIA's ALGOLIA_DELETE_OBJECTS tool input.
 */
type ALGOLIA_DELETE_OBJECTS_INPUT = {
  /**
   * Index Name
   * @description Name of the index from which to delete records.
   */
  index_name?: string;
  /**
   * Object Ids
   * @description List of objectIDs to delete.
   */
  object_ids?: string[];
  /**
   * Request Options
   * @description Optional mapping of request options (query parameters) as string values.
   * @default null
   */
  request_options: {
      [key: string]: string;
  } | null;
};

/**
 * Type of ALGOLIA's ALGOLIA_DELETE_OBJECTS tool output.
 */
type ALGOLIA_DELETE_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Object I Ds
       * @description List of objectIDs of the deleted records.
       */
      objectIDs: string[];
      /**
       * Task Id
       * @description The taskID used with the waitTask method to track this operation.
       */
      taskID: number;
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
 * Type of ALGOLIA's ALGOLIA_DELETE_RULE tool input.
 */
type ALGOLIA_DELETE_RULE_INPUT = {
  /**
   * Forward To Replicas
   * @description Whether to forward this deletion to replica indices. If false (default), only the specified index is affected.
   * @default false
   */
  forward_to_replicas: boolean;
  /**
   * Index Name
   * @description Name of the Algolia index from which to delete the rule.
   */
  index_name?: string;
  /**
   * Object Id
   * @description Unique identifier of the rule to delete.
   */
  object_id?: string;
};

/**
 * Type of ALGOLIA's ALGOLIA_DELETE_RULE tool output.
 */
type ALGOLIA_DELETE_RULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task Id
       * @description Task ID for tracking the deletion operation.
       */
      taskID: number;
      /**
       * Updated At
       * @description Timestamp when the delete job was created.
       */
      updatedAt: string;
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
 * Type of ALGOLIA's ALGOLIA_DELETE_SYNONYM tool input.
 */
type ALGOLIA_DELETE_SYNONYM_INPUT = {
  /**
   * Forward To Replicas
   * @description Whether to forward this deletion to all replica indices. If false (default), only the specified index is affected.
   * @default false
   */
  forward_to_replicas: boolean;
  /**
   * Index Name
   * @description Name of the Algolia index from which to delete the synonym.
   */
  index_name?: string;
  /**
   * Object Id
   * @description ObjectID of the synonym to delete.
   */
  object_id?: string;
};

/**
 * Type of ALGOLIA's ALGOLIA_DELETE_SYNONYM tool output.
 */
type ALGOLIA_DELETE_SYNONYM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted At
       * @description Timestamp when the delete operation was enqueued.
       */
      deletedAt: string;
      /**
       * Task Id
       * @description Task ID for tracking the deletion operation.
       */
      taskID: number;
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
 * Type of ALGOLIA's ALGOLIA_EXPORT_RULES tool input.
 */
type ALGOLIA_EXPORT_RULES_INPUT = {
  /**
   * Cursor
   * @description Cursor to fetch the next batch of rules; omit to start from the beginning
   * @default null
   */
  cursor: string | null;
  /**
   * Index Name
   * @description Name of the Algolia index to export rules from
   */
  index_name?: string;
};

/**
 * Type of ALGOLIA's ALGOLIA_EXPORT_RULES tool output.
 */
type ALGOLIA_EXPORT_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cursor
       * @description Cursor to fetch the next batch of rules; absence indicates end of results
       * @default null
       */
      cursor: string | null;
      /**
       * Hits
       * @description List of rules returned in this batch
       */
      hits: {
          /**
           * Conditions
           * @description List of conditions that trigger the rule
           */
          conditions: {
              /**
               * Anchoring
               * @description Type of anchoring for the condition
               * @enum {string}
               */
              anchoring: "is" | "startsWith" | "endsWith" | "contains";
              /**
               * Pattern
               * @description The query pattern to match in the rule condition
               */
              pattern: string;
          }[];
          /**
           * Consequence
           * @description Consequence of the rule when conditions are met
           */
          consequence: {
              /**
               * Params
               * @description Parameters to apply when the rule matches
               */
              params: {
                  [key: string]: unknown;
              };
          };
          /**
           * Object Id
           * @description Unique identifier of the rule
           */
          objectID: string;
      }[];
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
 * Type of ALGOLIA's ALGOLIA_FIND_OBJECT tool input.
 */
type ALGOLIA_FIND_OBJECT_INPUT = {
  /**
   * Attributes To Retrieve
   * @description List of attributes to retrieve in the result. If omitted, all attributes are returned.
   * @default null
   */
  attributesToRetrieve: string[] | null;
  /**
   * Filters
   * @description Additional search parameters and filters as a JSON object.
   * @default null
   */
  filters: {
      [key: string]: unknown;
  } | null;
  /**
   * Index Name
   * @description Name of the Algolia index to search (e.g., 'products').
   */
  index_name?: string;
  /**
   * Paginate
   * @description Whether to search all pages. Defaults to False.
   * @default false
   */
  paginate: boolean;
  /**
   * Query
   * @description Query string to search for. If omitted, only filters are applied.
   * @default null
   */
  query: string | null;
};

/**
 * Type of ALGOLIA's ALGOLIA_FIND_OBJECT tool output.
 */
type ALGOLIA_FIND_OBJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Object
       * @description The first matching record found.
       */
      object: {
          [key: string]: unknown;
      };
      /**
       * Page
       * @description Zero-based page number where the object was found.
       */
      page: number;
      /**
       * Position
       * @description Zero-based position of the object in the result set.
       */
      position: number;
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
 * Type of ALGOLIA's ALGOLIA_GET_OBJECTS tool input.
 */
type ALGOLIA_GET_OBJECTS_INPUT = {
  /**
   * Requests
   * @description Array of sub-requests, each with indexName and objectID.
   */
  requests?: {
      /**
       * Attributes To Retrieve
       * @description List of specific attributes to retrieve. Defaults to all retrievable attributes if omitted.
       * @default null
       */
      attributesToRetrieve: string[] | null;
      /**
       * Index Name
       * @description Name of the index containing the record.
       */
      indexName: string;
      /**
       * Object Id
       * @description Unique identifier of the record to retrieve.
       */
      objectID: string;
  }[];
};

/**
 * Type of ALGOLIA's ALGOLIA_GET_OBJECTS tool output.
 */
type ALGOLIA_GET_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of retrieved records or null values for not found objects, one per request.
       */
      results: ({
          [key: string]: unknown;
      } | null)[];
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
 * Type of ALGOLIA's ALGOLIA_GET_OBJECT_POSITION tool input.
 */
type ALGOLIA_GET_OBJECT_POSITION_INPUT = {
  /**
   * Object Id
   * @description The objectID of the record to locate in the results.
   */
  object_id?: string;
  /**
   * Results
   * @description Full JSON response from a previous Algolia search, containing the 'hits' list.
   */
  results?: {
      [key: string]: unknown;
  };
};

/**
 * Type of ALGOLIA's ALGOLIA_GET_OBJECT_POSITION tool output.
 */
type ALGOLIA_GET_OBJECT_POSITION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Position
       * @description Zero-based index of the object in the hits array, or None if the objectID was not found.
       * @default null
       */
      position: number | null;
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
 * Type of ALGOLIA's ALGOLIA_GET_SETTINGS tool input.
 */
type ALGOLIA_GET_SETTINGS_INPUT = {
  /**
   * Index Name
   * @description Name of the index whose settings are being retrieved
   */
  indexName?: string;
};

/**
 * Type of ALGOLIA's ALGOLIA_GET_SETTINGS tool output.
 */
type ALGOLIA_GET_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Advanced Syntax
       * @description Enable advanced query syntax
       * @default null
       */
      advancedSyntax: boolean | null;
      /**
       * Allow Compression Of Integer Array
       * @description Compress integer arrays in responses
       * @default null
       */
      allowCompressionOfIntegerArray: boolean | null;
      /**
       * Allow Typos On Numeric Tokens
       * @description Allow typos on numeric tokens
       * @default null
       */
      allowTyposOnNumericTokens: boolean | null;
      /**
       * Attribute For Distinct
       * @description Name of the attribute used for distinct grouping
       * @default null
       */
      attributeForDistinct: string | null;
      /**
       * Attributes For Faceting
       * @description List of attributes to use for faceting
       * @default null
       */
      attributesForFaceting: string[] | null;
      /**
       * Attributes To Highlight
       * @description Attributes to highlight in results
       * @default null
       */
      attributesToHighlight: string[] | null;
      /**
       * Attributes To Retrieve
       * @description Attributes to retrieve in search results
       * @default null
       */
      attributesToRetrieve: string[] | null;
      /**
       * Attributes To Snippet
       * @description Attributes to snippet in results
       * @default null
       */
      attributesToSnippet: string[] | null;
      /**
       * Click Analytics
       * @description Enable click analytics
       * @default null
       */
      clickAnalytics: boolean | null;
      /**
       * Custom Ranking
       * @description Custom ranking criteria set on the index
       * @default null
       */
      customRanking: string[] | null;
      /**
       * Distinct
       * @description If set, enables distinct feature (boolean) or attribute number for grouping
       * @default null
       */
      distinct: boolean | null;
      /**
       * Highlight Post Tag
       * @description Tag to insert after highlighted parts of results
       * @default null
       */
      highlightPostTag: string | null;
      /**
       * Highlight Pre Tag
       * @description Tag to insert before highlighted parts of results
       * @default null
       */
      highlightPreTag: string | null;
      /**
       * Ignore Plurals
       * @description Ignore plurals (boolean) or list of attributes
       * @default null
       */
      ignorePlurals: boolean | null;
      /**
       * Max Values Per Facet
       * @description Max number of facet values to retrieve per facet
       * @default null
       */
      maxValuesPerFacet: number | null;
      /**
       * Min Word Sizefor1 Typo
       * @description Minimum word size to accept one typo
       * @default null
       */
      minWordSizefor1Typo: number | null;
      /**
       * Min Word Sizefor2 Typos
       * @description Minimum word size to accept two typos
       * @default null
       */
      minWordSizefor2Typos: number | null;
      /**
       * Numeric Attributes For Filtering
       * @description Numeric attributes available for filtering
       * @default null
       */
      numericAttributesForFiltering: string[] | null;
      /**
       * Optional Words
       * @description List of words considered optional in queries
       * @default null
       */
      optionalWords: string[] | null;
      /**
       * Query Type
       * @description Query type for prefix matching
       * @default null
       * @enum {string|null}
       */
      queryType: "prefixAll" | "prefixLast" | "prefixNone" | null;
      /**
       * Ranking
       * @description Ranking criteria applied to search results
       * @default null
       */
      ranking: string[] | null;
      /**
       * Remove Words If No Results
       * @description Strategy when no results: none, lastWords, firstWords, or allOptional
       * @default null
       * @enum {string|null}
       */
      removeWordsIfNoResults: "none" | "lastWords" | "firstWords" | "allOptional" | null;
      /**
       * Replicas
       * @description List of replica index names
       * @default null
       */
      replicas: string[] | null;
      /**
       * Searchable Attributes
       * @description List of attributes to index for search operations
       * @default null
       */
      searchableAttributes: string[] | null;
      /**
       * Snippet Ellipsis Text
       * @description Ellipsis text for snippets
       * @default null
       */
      snippetEllipsisText: string | null;
      /**
       * Sort Facet Values By
       * @description Sort order for facet values: count or alpha
       * @default null
       * @enum {string|null}
       */
      sortFacetValuesBy: "count" | "alpha" | null;
      /**
       * Typo Tolerance
       * @description Typo tolerance (true/false or min/strict)
       * @default null
       */
      typoTolerance: boolean | null;
      /**
       * Unretrievable Attributes
       * @description Attributes that will not be returned in search results
       * @default null
       */
      unretrievableAttributes: string[] | null;
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
 * Type of ALGOLIA's ALGOLIA_INDEX_EXISTS tool input.
 */
type ALGOLIA_INDEX_EXISTS_INPUT = {
  /**
   * Index Name
   * @description Name of the Algolia index to check (e.g., 'products')
   */
  index_name?: string;
};

/**
 * Type of ALGOLIA's ALGOLIA_INDEX_EXISTS tool output.
 */
type ALGOLIA_INDEX_EXISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Exists
       * @description True if the index exists, False otherwise.
       */
      exists: boolean;
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
 * Type of ALGOLIA's ALGOLIA_INIT_INSIGHTS tool input.
 */
type ALGOLIA_INIT_INSIGHTS_INPUT = {
  /**
   * Region
   * @description Insights API endpoint region: 'us' for insights.algolia.io or 'eu' for insights.eu.algolia.com.
   * @default us
   * @enum {string}
   */
  region: "us" | "eu";
  /**
   * Store In Cookie
   * @description Whether to store the userToken in a cookie for subsequent calls.
   * @default true
   */
  store_in_cookie: boolean;
};

/**
 * Type of ALGOLIA's ALGOLIA_INIT_INSIGHTS tool output.
 */
type ALGOLIA_INIT_INSIGHTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Key
       * @description Algolia API Key used for initialization.
       */
      apiKey: string;
      /**
       * Application Id
       * @description Algolia Application ID used for initialization.
       */
      applicationId: string;
      /**
       * Host
       * @description Insights API host endpoint.
       */
      host: string;
      /**
       * Metadata
       * @description Additional metadata stored for the Insights client, such as region and cookie settings.
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Status
       * @description Indicates the client has been initialized.
       * @constant
       */
      status: "initialized";
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
 * Type of ALGOLIA's ALGOLIA_LIST_INDICES tool input.
 */
type ALGOLIA_LIST_INDICES_INPUT = object;

/**
 * Type of ALGOLIA's ALGOLIA_LIST_INDICES tool output.
 */
type ALGOLIA_LIST_INDICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of index metadata objects.
       */
      items: {
          /**
           * Created At
           * @description Creation date; empty if no records.
           */
          createdAt: string;
          /**
           * Data Size
           * @description Size of index data in bytes (minified).
           */
          dataSize: number;
          /**
           * Entries
           * @description Number of records in the index.
           */
          entries: number;
          /**
           * File Size
           * @description Size of index file in bytes.
           */
          fileSize: number;
          /**
           * Last Build Time S
           * @description Last build time in seconds.
           */
          lastBuildTimeS: number;
          /**
           * Name
           * @description Index name.
           */
          name: string;
          /**
           * Number Of Pending Tasks
           * @description Deprecated. Number of pending indexing operations.
           * @default null
           */
          numberOfPendingTasks: number | null;
          /**
           * Pending Task
           * @description Deprecated. Indicates if the index has pending tasks.
           * @default null
           */
          pendingTask: boolean | null;
          /**
           * Primary
           * @description If a replica, name of the primary index; absent otherwise.
           * @default null
           */
          primary: string | null;
          /**
           * Replicas
           * @description If a primary, names of its replicas; absent otherwise.
           * @default null
           */
          replicas: string[] | null;
          /**
           * Updated At
           * @description Last update date; empty if no records.
           */
          updatedAt: string;
      }[];
      /**
       * Nb Pages
       * @description Always 1; no pagination for this call.
       */
      nbPages: number;
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
 * Type of ALGOLIA's ALGOLIA_PARTIAL_UPDATE_OBJECTS tool input.
 */
type ALGOLIA_PARTIAL_UPDATE_OBJECTS_INPUT = {
  /**
   * Index Name
   * @description Name of the Algolia index where the objects live.
   */
  indexName?: string;
  /**
   * Requests
   * @description List of objects to update. Each entry must include `objectID` and any additional fields you wish to change; you can also set `createIfNotExists` per object.
   */
  requests?: ({
      /**
       * Create If Not Exists
       * @description If true, create this object if it does not exist.
       * @default false
       */
      createIfNotExists: boolean | null;
      /**
       * Object Id
       * @description Unique identifier of the object to update.
       */
      objectID: string;
  } & {
      [key: string]: unknown;
  })[];
};

/**
 * Type of ALGOLIA's ALGOLIA_PARTIAL_UPDATE_OBJECTS tool output.
 */
type ALGOLIA_PARTIAL_UPDATE_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Object I Ds
       * @description List of objectIDs that were processed.
       */
      objectIDs: string[];
      /**
       * Task Id
       * @description Identifier of the asynchronous update task.
       */
      taskID: number;
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
 * Type of ALGOLIA's ALGOLIA_REPLACE_ALL_RULES tool input.
 */
type ALGOLIA_REPLACE_ALL_RULES_INPUT = {
  /**
   * Forward To Replicas
   * @description Also apply the replacement to replica indices.
   * @default false
   */
  forwardToReplicas: boolean | null;
  /**
   * Index Name
   * @description Name of the Algolia index to replace rules for.
   */
  indexName?: string;
  /**
   * Request Options
   * @description Additional request options sent as query parameters.
   * @default null
   */
  requestOptions: {
      [key: string]: string;
  } | null;
  /**
   * Rules
   * @description Array of rule objects to replace all existing rules.
   */
  rules?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of ALGOLIA's ALGOLIA_REPLACE_ALL_RULES tool output.
 */
type ALGOLIA_REPLACE_ALL_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task Id
       * @description Task identifier to track the asynchronous operation.
       */
      taskID: number;
      /**
       * Updated At
       * @description Timestamp when the replace-all-rules task was processed.
       */
      updatedAt: string;
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
 * Type of ALGOLIA's ALGOLIA_SAVE_SYNONYM tool input.
 */
type ALGOLIA_SAVE_SYNONYM_INPUT = {
  /**
   * Forward To Replicas
   * @description Whether to forward the synonym update to all replicas.
   * @default false
   */
  forwardToReplicas: boolean | null;
  /**
   * Index Name
   * @description Name of the index in which to save the synonym.
   */
  indexName?: string;
  /**
   * Object Id
   * @description Unique identifier for the synonym object. Must be specified and match the synonym objectID.
   */
  objectID?: string;
  /**
   * Synonym
   * @description Synonym object payload defining type and values.
   */
  synonym?: {
      /**
       * Corrections
       * @description List of corrections for the base word. Required if type='altCorrection1' or 'altCorrection2'.
       * @default null
       */
      corrections: string[] | null;
      /**
       * Input
       * @description Input word or expression. Required if type='oneWaySynonym'.
       * @default null
       */
      input: string | null;
      /**
       * Object Id
       * @description Unique identifier for the synonym object. Must match the path parameter.
       */
      objectID: string;
      /**
       * Placeholder
       * @description Placeholder token. Required if type='placeholder'.
       * @default null
       */
      placeholder: string | null;
      /**
       * Replacements
       * @description List of replacements for the placeholder. Required if type='placeholder'.
       * @default null
       */
      replacements: string[] | null;
      /**
       * Synonyms
       * @description List of synonyms. Required if type='synonym' or 'oneWaySynonym'.
       * @default null
       */
      synonyms: string[] | null;
      /**
       * Type
       * @description Type of the synonym. One of 'synonym', 'oneWaySynonym', 'altCorrection1', 'altCorrection2', or 'placeholder'.
       * @enum {string}
       */
      type: "synonym" | "oneWaySynonym" | "altCorrection1" | "altCorrection2" | "placeholder";
      /**
       * Word
       * @description Base word for corrections. Required if type='altCorrection1' or 'altCorrection2'.
       * @default null
       */
      word: string | null;
  };
};

/**
 * Type of ALGOLIA's ALGOLIA_SAVE_SYNONYM tool output.
 */
type ALGOLIA_SAVE_SYNONYM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ObjectID of the inserted or updated synonym.
       */
      id: string;
      /**
       * Task Id
       * @description Task ID for monitoring the operation with waitTask.
       */
      taskID: number;
      /**
       * Updated At
       * @description Timestamp when the synonym was updated in the index.
       */
      updatedAt: string;
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
 * Type of ALGOLIA's ALGOLIA_SEARCH_INDEX tool input.
 */
type ALGOLIA_SEARCH_INDEX_INPUT = {
  /**
   * Index Name
   * @description Name of the Algolia index to search (e.g., 'contacts')
   */
  index_name?: string;
  /**
   * Query
   * @description Search query string. Empty string fetches all records. Max length is 512 characters.
   */
  query?: string;
  /**
   * Request Options
   * @description Optional request-level options such as extra headers or query params.
   * @default null
   */
  request_options: {
      [key: string]: unknown;
  } | null;
  /**
   * Search Params
   * @description Additional Algolia search parameters as key-value pairs, e.g., {'hitsPerPage': 10, 'filters': 'category:book'}.
   * @default null
   */
  search_params: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of ALGOLIA's ALGOLIA_SEARCH_INDEX tool output.
 */
type ALGOLIA_SEARCH_INDEX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Exhaustive Nb Hits
       * @description Whether `nbHits` count is exhaustive (exact) or approximate.
       * @default null
       */
      exhaustiveNbHits: boolean | null;
      /**
       * Hits
       * @description List of matched records.
       */
      hits: {
          [key: string]: unknown;
      }[];
      /**
       * Hits Per Page
       * @description Number of hits returned per page.
       */
      hitsPerPage: number;
      /**
       * Nb Hits
       * @description Total number of hits matched by the query.
       */
      nbHits: number;
      /**
       * Nb Pages
       * @description Total number of pages.
       */
      nbPages: number;
      /**
       * Page
       * @description Current page index (zero-based).
       */
      page: number;
      /**
       * Params
       * @description URL-encoded string of all search parameters.
       */
      params: string;
      /**
       * Processing Time Ms
       * @description Time taken to process the search in milliseconds.
       */
      processingTimeMS: number;
      /**
       * Query
       * @description Search query used.
       */
      query: string;
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
 * Type of ALGOLIA's ALGOLIA_SEARCH_MULTIPLE_INDICES tool input.
 */
type ALGOLIA_SEARCH_MULTIPLE_INDICES_INPUT = {
  /**
   * Requests
   * @description List of search queries to perform on multiple indices.
   */
  requests?: {
      /**
       * Index Name
       * @description Name of the index to search.
       */
      indexName: string;
      /**
       * Params
       * @description URL-encoded search parameters for the query, e.g., 'query=foo&page=0&hitsPerPage=10'.
       */
      params: string;
  }[];
  /**
   * Strategy
   * @description Search strategy to use: 'none' or 'stopIfEnoughMatches'.
   * @default null
   * @enum {string|null}
   */
  strategy: "none" | "stopIfEnoughMatches" | null;
};

/**
 * Type of ALGOLIA's ALGOLIA_SEARCH_MULTIPLE_INDICES tool output.
 */
type ALGOLIA_SEARCH_MULTIPLE_INDICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Results for each query across the indices.
       */
      results: {
          /**
           * Exhaustive Nb Hits
           * @description Whether the nbHits count is exhaustive.
           * @default null
           */
          exhaustiveNbHits: boolean | null;
          /**
           * Hits
           * @description List of matched records for this query.
           */
          hits: {
              [key: string]: unknown;
          }[];
          /**
           * Hits Per Page
           * @description Number of hits returned per page.
           */
          hitsPerPage: number;
          /**
           * Nb Hits
           * @description Number of matched records for this query.
           */
          nbHits: number;
          /**
           * Nb Pages
           * @description Total number of pages for this query.
           */
          nbPages: number;
          /**
           * Page
           * @description Current page number.
           */
          page: number;
          /**
           * Params
           * @description URL-encoded parameters that were used for this query.
           */
          params: string;
          /**
           * Processing Time Ms
           * @description Time taken in milliseconds to process this query.
           */
          processingTimeMS: number;
          /**
           * Query
           * @description The query string that was sent.
           */
          query: string;
      }[];
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
 * Type of ALGOLIA's ALGOLIA_SEARCH_RULES tool input.
 */
type ALGOLIA_SEARCH_RULES_INPUT = {
  /**
   * Anchoring
   * @description When specified, restricts matches to rules with this anchoring type. One of: 'is', 'startsWith', 'endsWith', 'contains'.
   * @default null
   * @enum {string|null}
   */
  anchoring: "is" | "startsWith" | "endsWith" | "contains" | null;
  /**
   * Context
   * @description Restricts matches to contextual rules with this exact context
   * @default null
   */
  context: string | null;
  /**
   * Enabled
   * @description When set, restricts matches to rules by enabled status
   * @default null
   */
  enabled: boolean | null;
  /**
   * Hits Per Page
   * @description Number of hits per page (1–1000)
   * @default null
   */
  hitsPerPage: number | null;
  /**
   * Index Name
   * @description Name of the index to search for rules
   */
  indexName?: string;
  /**
   * Page
   * @description Zero-based page number to retrieve
   * @default null
   */
  page: number | null;
  /**
   * Query
   * @description Full-text query to filter rules by condition or consequence
   * @default null
   */
  query: string | null;
};

/**
 * Type of ALGOLIA's ALGOLIA_SEARCH_RULES tool output.
 */
type ALGOLIA_SEARCH_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Hits
       * @description List of rules matching the search criteria
       */
      hits: {
          /**
           * Conditions
           * @description List of condition objects for this rule
           */
          conditions: {
              /**
               * Anchoring
               * @description Type of anchoring for the condition
               * @enum {string}
               */
              anchoring: "is" | "startsWith" | "endsWith" | "contains";
              /**
               * Pattern
               * @description The query pattern to match in the rule condition
               */
              pattern: string;
          }[];
          /**
           * Consequence
           * @description Consequence object for this rule
           */
          consequence: {
              /**
               * Params
               * @description Parameters to apply when the rule matches
               */
              params: {
                  [key: string]: unknown;
              };
          };
          /**
           * Object Id
           * @description Unique identifier of the rule
           */
          objectID: string;
      }[];
      /**
       * Nb Hits
       * @description Total number of matching rules
       */
      nbHits: number;
      /**
       * Nb Pages
       * @description Total number of pages
       */
      nbPages: number;
      /**
       * Page
       * @description Returned zero-based page number
       */
      page: number;
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
 * Type of ALGOLIA's ALGOLIA_SEARCH_SYNONYMS tool input.
 */
type ALGOLIA_SEARCH_SYNONYMS_INPUT = {
  /**
   * Hits Per Page
   * @description Number of synonyms to return per page.
   * @default null
   */
  hitsPerPage: number | null;
  /**
   * Index Name
   * @description Name of the Algolia index to search for synonyms.
   */
  index_name?: string;
  /**
   * Page
   * @description Zero-based page number to retrieve.
   * @default null
   */
  page: number | null;
  /**
   * Query
   * @description Keywords to match in synonyms.
   * @default null
   */
  query: string | null;
  /**
   * Type
   * @description Filter by synonym type: 'oneWaySynonym', 'synonym', 'placeholder', 'altCorrection1', or 'altCorrection2'.
   * @default null
   * @enum {string|null}
   */
  type: "oneWaySynonym" | "synonym" | "placeholder" | "altCorrection1" | "altCorrection2" | null;
};

/**
 * Type of ALGOLIA's ALGOLIA_SEARCH_SYNONYMS tool output.
 */
type ALGOLIA_SEARCH_SYNONYMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Exhaustive Nb Hits
       * @description Whether the nbHits count is exhaustive.
       * @default null
       */
      exhaustiveNbHits: boolean | null;
      /**
       * Hits
       * @description List of matching synonym objects.
       */
      hits: {
          /**
           * Corrections
           * @description List of corrections (for 'altCorrection1'/'altCorrection2' types).
           * @default null
           */
          corrections: string[] | null;
          /**
           * Input
           * @description Input term (for 'oneWaySynonym' type).
           * @default null
           */
          input: string | null;
          /**
           * Object Id
           * @description Unique identifier of the synonym object.
           */
          objectID: string;
          /**
           * Placeholder
           * @description Placeholder token (for 'placeholder' type).
           * @default null
           */
          placeholder: string | null;
          /**
           * Replacements
           * @description List of replacements (for 'placeholder' type).
           * @default null
           */
          replacements: string[] | null;
          /**
           * Synonyms
           * @description List of synonyms (for 'synonym' or 'oneWaySynonym' types).
           * @default null
           */
          synonyms: string[] | null;
          /**
           * Type
           * @description Type of the synonym.
           * @enum {string}
           */
          type: "synonym" | "oneWaySynonym" | "altCorrection1" | "altCorrection2" | "placeholder";
          /**
           * Word
           * @description Base word for corrections (for 'altCorrection1'/'altCorrection2' types).
           * @default null
           */
          word: string | null;
      }[];
      /**
       * Hits Per Page
       * @description Number of synonyms returned per page.
       */
      hitsPerPage: number;
      /**
       * Nb Hits
       * @description Total number of matching synonyms.
       */
      nbHits: number;
      /**
       * Nb Pages
       * @description Total number of pages.
       */
      nbPages: number;
      /**
       * Page
       * @description Current page index (zero-based).
       */
      page: number;
      /**
       * Params
       * @description URL-encoded parameters used in the request.
       * @default null
       */
      params: string | null;
      /**
       * Query
       * @description The query string used for searching.
       * @default null
       */
      query: string | null;
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
 * Type of ALGOLIA's ALGOLIA_SET_SETTINGS tool input.
 */
type ALGOLIA_SET_SETTINGS_INPUT = {
  /**
   * Forward To Replicas
   * @description Whether to forward these settings to all existing replica indices. Replicas must already exist; cannot create and forward in a single call.
   * @default false
   */
  forward_to_replicas: boolean;
  /**
   * Index Name
   * @description Name of the index to update.
   */
  index_name?: string;
  /**
   * Settings
   * @description Key/value mapping of settings parameters. Only specified keys are overridden; unspecified keys remain unchanged. Use null to reset a setting to its default.
   */
  settings?: {
      [key: string]: unknown;
  };
};

/**
 * Type of ALGOLIA's ALGOLIA_SET_SETTINGS tool output.
 */
type ALGOLIA_SET_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task Id
       * @description Task ID usable with waitTask to monitor the update.
       */
      taskID: number;
      /**
       * Updated At
       * @description Timestamp when the update task was enqueued (ISO 8601).
       */
      updatedAt: string;
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
 * Type map of all available tool input types for toolkit "ALGOLIA".
 */
export type ALGOLIA_TOOL_INPUTS = {
  ADD_AB_TEST: ALGOLIA_ADD_AB_TEST_INPUT
  BROWSE_INDEX: ALGOLIA_BROWSE_INDEX_INPUT
  CLEAR_OBJECTS: ALGOLIA_CLEAR_OBJECTS_INPUT
  CLEAR_RULES: ALGOLIA_CLEAR_RULES_INPUT
  CLICKED_OBJECT_IDS: ALGOLIA_CLICKED_OBJECT_IDS_INPUT
  CLICKED_OBJECT_IDS_AFTER_SEARCH: ALGOLIA_CLICKED_OBJECT_IDS_AFTER_SEARCH_INPUT
  CONVERTED_OBJECT_IDS: ALGOLIA_CONVERTED_OBJECT_IDS_INPUT
  COPY_INDEX: ALGOLIA_COPY_INDEX_INPUT
  COPY_RULES: ALGOLIA_COPY_RULES_INPUT
  COPY_SETTINGS: ALGOLIA_COPY_SETTINGS_INPUT
  DELETE_INDEX: ALGOLIA_DELETE_INDEX_INPUT
  DELETE_OBJECTS: ALGOLIA_DELETE_OBJECTS_INPUT
  DELETE_RULE: ALGOLIA_DELETE_RULE_INPUT
  DELETE_SYNONYM: ALGOLIA_DELETE_SYNONYM_INPUT
  EXPORT_RULES: ALGOLIA_EXPORT_RULES_INPUT
  FIND_OBJECT: ALGOLIA_FIND_OBJECT_INPUT
  GET_OBJECTS: ALGOLIA_GET_OBJECTS_INPUT
  GET_OBJECT_POSITION: ALGOLIA_GET_OBJECT_POSITION_INPUT
  GET_SETTINGS: ALGOLIA_GET_SETTINGS_INPUT
  INDEX_EXISTS: ALGOLIA_INDEX_EXISTS_INPUT
  INIT_INSIGHTS: ALGOLIA_INIT_INSIGHTS_INPUT
  LIST_INDICES: ALGOLIA_LIST_INDICES_INPUT
  PARTIAL_UPDATE_OBJECTS: ALGOLIA_PARTIAL_UPDATE_OBJECTS_INPUT
  REPLACE_ALL_RULES: ALGOLIA_REPLACE_ALL_RULES_INPUT
  SAVE_SYNONYM: ALGOLIA_SAVE_SYNONYM_INPUT
  SEARCH_INDEX: ALGOLIA_SEARCH_INDEX_INPUT
  SEARCH_MULTIPLE_INDICES: ALGOLIA_SEARCH_MULTIPLE_INDICES_INPUT
  SEARCH_RULES: ALGOLIA_SEARCH_RULES_INPUT
  SEARCH_SYNONYMS: ALGOLIA_SEARCH_SYNONYMS_INPUT
  SET_SETTINGS: ALGOLIA_SET_SETTINGS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ALGOLIA".
 */
export type ALGOLIA_TOOL_OUTPUTS = {
  ADD_AB_TEST: ALGOLIA_ADD_AB_TEST_OUTPUT
  BROWSE_INDEX: ALGOLIA_BROWSE_INDEX_OUTPUT
  CLEAR_OBJECTS: ALGOLIA_CLEAR_OBJECTS_OUTPUT
  CLEAR_RULES: ALGOLIA_CLEAR_RULES_OUTPUT
  CLICKED_OBJECT_IDS: ALGOLIA_CLICKED_OBJECT_IDS_OUTPUT
  CLICKED_OBJECT_IDS_AFTER_SEARCH: ALGOLIA_CLICKED_OBJECT_IDS_AFTER_SEARCH_OUTPUT
  CONVERTED_OBJECT_IDS: ALGOLIA_CONVERTED_OBJECT_IDS_OUTPUT
  COPY_INDEX: ALGOLIA_COPY_INDEX_OUTPUT
  COPY_RULES: ALGOLIA_COPY_RULES_OUTPUT
  COPY_SETTINGS: ALGOLIA_COPY_SETTINGS_OUTPUT
  DELETE_INDEX: ALGOLIA_DELETE_INDEX_OUTPUT
  DELETE_OBJECTS: ALGOLIA_DELETE_OBJECTS_OUTPUT
  DELETE_RULE: ALGOLIA_DELETE_RULE_OUTPUT
  DELETE_SYNONYM: ALGOLIA_DELETE_SYNONYM_OUTPUT
  EXPORT_RULES: ALGOLIA_EXPORT_RULES_OUTPUT
  FIND_OBJECT: ALGOLIA_FIND_OBJECT_OUTPUT
  GET_OBJECTS: ALGOLIA_GET_OBJECTS_OUTPUT
  GET_OBJECT_POSITION: ALGOLIA_GET_OBJECT_POSITION_OUTPUT
  GET_SETTINGS: ALGOLIA_GET_SETTINGS_OUTPUT
  INDEX_EXISTS: ALGOLIA_INDEX_EXISTS_OUTPUT
  INIT_INSIGHTS: ALGOLIA_INIT_INSIGHTS_OUTPUT
  LIST_INDICES: ALGOLIA_LIST_INDICES_OUTPUT
  PARTIAL_UPDATE_OBJECTS: ALGOLIA_PARTIAL_UPDATE_OBJECTS_OUTPUT
  REPLACE_ALL_RULES: ALGOLIA_REPLACE_ALL_RULES_OUTPUT
  SAVE_SYNONYM: ALGOLIA_SAVE_SYNONYM_OUTPUT
  SEARCH_INDEX: ALGOLIA_SEARCH_INDEX_OUTPUT
  SEARCH_MULTIPLE_INDICES: ALGOLIA_SEARCH_MULTIPLE_INDICES_OUTPUT
  SEARCH_RULES: ALGOLIA_SEARCH_RULES_OUTPUT
  SEARCH_SYNONYMS: ALGOLIA_SEARCH_SYNONYMS_OUTPUT
  SET_SETTINGS: ALGOLIA_SET_SETTINGS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ALGOLIA toolkit.
 */
export const ALGOLIA = {
  slug: "algolia",
  tools: {
    /**
     * Tool to create an ab test comparing search performance between two variants. use to test different index configurations or search parameters and measure impact on click-through and conversion rates.
     */
    ADD_AB_TEST: "ALGOLIA_ADD_AB_TEST",
    /**
     * Tool to retrieve all records from an index. use when you need to export or iterate through an entire index dataset.
     */
    BROWSE_INDEX: "ALGOLIA_BROWSE_INDEX",
    /**
     * Tool to clear records of an index without affecting settings. use when you need to completely wipe all objects (e.g., after a bulk reindex) while preserving index configuration.
     */
    CLEAR_OBJECTS: "ALGOLIA_CLEAR_OBJECTS",
    /**
     * Tool to delete all rules in an index. use when you need to wipe all rules before re-creating them. use after confirming no critical rules require retention.
     */
    CLEAR_RULES: "ALGOLIA_CLEAR_RULES",
    /**
     * Tool to send a click event to algolia to capture clicked items. use immediately after a user click outside of search contexts to report click events.
     */
    CLICKED_OBJECT_IDS: "ALGOLIA_CLICKED_OBJECT_IDS",
    /**
     * Tool to send a click event after a search response. use when you want to report which items a user clicked in search results.
     */
    CLICKED_OBJECT_IDS_AFTER_SEARCH: "ALGOLIA_CLICKED_OBJECT_IDS_AFTER_SEARCH",
    /**
     * Tool to send a conversion event for items outside of search context. use when tracking conversions on category pages or external flows unrelated to algolia search.
     */
    CONVERTED_OBJECT_IDS: "ALGOLIA_CONVERTED_OBJECT_IDS",
    /**
     * Tool to copy the specified index to a new index. use when you need to duplicate an existing index including records, settings, synonyms, and rules after confirming source and destination names.
     */
    COPY_INDEX: "ALGOLIA_COPY_INDEX",
    /**
     * Tool to copy rules from one index to another. use when you need to duplicate all query rules from a source index to a target index after confirming both names.
     */
    COPY_RULES: "ALGOLIA_COPY_RULES",
    /**
     * Tool to copy the settings from one index to another. use when you need to replicate index configurations without records or other data.
     */
    COPY_SETTINGS: "ALGOLIA_COPY_SETTINGS",
    /**
     * Tool to delete the specified index and all its records. use when you need to permanently remove an index after confirming it's no longer needed.
     */
    DELETE_INDEX: "ALGOLIA_DELETE_INDEX",
    /**
     * Tool to delete multiple records from an algolia index. use when you need to remove multiple objects by their ids.
     */
    DELETE_OBJECTS: "ALGOLIA_DELETE_OBJECTS",
    /**
     * Tool to delete the specified rule from an index. use when you need to permanently remove a rule after confirming its objectid.
     */
    DELETE_RULE: "ALGOLIA_DELETE_RULE",
    /**
     * Tool to delete a synonym from a specified index. use when you need to remove an existing synonym by its objectid.
     */
    DELETE_SYNONYM: "ALGOLIA_DELETE_SYNONYM",
    /**
     * Tool to export all rules defined on an index. use when you need to backup or migrate index rules.
     */
    EXPORT_RULES: "ALGOLIA_EXPORT_RULES",
    /**
     * Tool to find the first object matching a query or filter in an index. use when debugging relevance or filter logic after confirming index exists.
     */
    FIND_OBJECT: "ALGOLIA_FIND_OBJECT",
    /**
     * Tool to retrieve multiple records from an index. use when you need to batch-fetch several objectids in one call.
     */
    GET_OBJECTS: "ALGOLIA_GET_OBJECTS",
    /**
     * Tool to retrieve an object’s position in a result set. use when debugging relevance after performing a search query.
     */
    GET_OBJECT_POSITION: "ALGOLIA_GET_OBJECT_POSITION",
    /**
     * Tool to retrieve the settings of a specified index. use when you need to inspect index configurations after creation or update.
     */
    GET_SETTINGS: "ALGOLIA_GET_SETTINGS",
    /**
     * Tool to check if an algolia index exists. use before performing index operations to prevent accidental index creation. example: indexexists(index name='products').
     */
    INDEX_EXISTS: "ALGOLIA_INDEX_EXISTS",
    /**
     * Tool to initialize the algolia insights api client. use before sending any insights events.
     */
    INIT_INSIGHTS: "ALGOLIA_INIT_INSIGHTS",
    /**
     * Tool to list all indices and their metadata. use when you need to retrieve index names, sizes, and state before performing operations that depend on index properties.
     */
    LIST_INDICES: "ALGOLIA_LIST_INDICES",
    /**
     * Tool to partially update multiple records in the specified index. use when you need to change only selected fields of many objects without replacing entire records. use after confirming objectids and desired updates.
     */
    PARTIAL_UPDATE_OBJECTS: "ALGOLIA_PARTIAL_UPDATE_OBJECTS",
    /**
     * Tool to push a new set of rules, erasing previous ones. use when you need zero-downtime atomic replacement of all rules in an index.
     */
    REPLACE_ALL_RULES: "ALGOLIA_REPLACE_ALL_RULES",
    /**
     * Tool to add or update a synonym in the specified index. use when you need programmatic upsert of search synonyms after index creation.
     */
    SAVE_SYNONYM: "ALGOLIA_SAVE_SYNONYM",
    /**
     * Tool to perform a search on a specified algolia index. use after confirming the index name. example: searchindex(index name='contacts', query='apple', search params={'hitsperpage':10})
     */
    SEARCH_INDEX: "ALGOLIA_SEARCH_INDEX",
    /**
     * Tool to perform searches across multiple indices in a single call. use when you need to batch multiple index queries into one api request.
     */
    SEARCH_MULTIPLE_INDICES: "ALGOLIA_SEARCH_MULTIPLE_INDICES",
    /**
     * Tool to search for rules in the specified index. use when you need to retrieve rules matching a query, filtering by anchoring, context, pagination, or enabled status.
     */
    SEARCH_RULES: "ALGOLIA_SEARCH_RULES",
    /**
     * Tool to search for synonyms in the specified index. use when you need to retrieve synonyms matching a query or filter by type.
     */
    SEARCH_SYNONYMS: "ALGOLIA_SEARCH_SYNONYMS",
    /**
     * Tool to update an algolia index's settings. use when you need to configure index behavior before indexing records. example: set searchableattributes and customranking for products index.
     */
    SET_SETTINGS: "ALGOLIA_SET_SETTINGS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ALGOLIA".
 */
export type ALGOLIA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ALGOLIA".
 */
export type ALGOLIA_TRIGGER_EVENTS = {}
