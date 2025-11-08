// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BITQUERY's BITQUERY_ALIASES_METRIC tool input.
 */
type BITQUERY_ALIASES_METRIC_INPUT = {
  /**
   * Query
   * @description GraphQL query string using aliases to disambiguate fields in the response
   */
  query?: string;
  /**
   * Variables
   * @description Optional mapping of GraphQL variables if your query uses `$variable` placeholders.
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BITQUERY's BITQUERY_ALIASES_METRIC tool output.
 */
type BITQUERY_ALIASES_METRIC_OUTPUT = {
  /**
   * Data
   * @description GraphQL response data structured by provided aliases.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of GraphQL errors if the query failed or was malformed.
   * @default null
   */
  errors: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BITQUERY's BITQUERY_ARCHIVE_DATABASE_QUERY tool input.
 */
type BITQUERY_ARCHIVE_DATABASE_QUERY_INPUT = {
  /**
   * Operation Name
   * @description Optional operation name if the query document contains multiple operations
   * @default null
   */
  operationName: string | null;
  /**
   * Query
   * @description GraphQL query string to execute against the Archive Database
   */
  query?: string;
  /**
   * Variables
   * @description Optional mapping of GraphQL variables for parameterized queries
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BITQUERY's BITQUERY_ARCHIVE_DATABASE_QUERY tool output.
 */
type BITQUERY_ARCHIVE_DATABASE_QUERY_OUTPUT = {
  /**
   * Data
   * @description Data returned by the GraphQL query; structure depends on the query
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of GraphQL errors if the query failed or was malformed
   * @default null
   */
  errors: {
      /**
       * Extensions
       * @description Additional error information from the GraphQL API
       * @default null
       */
      extensions: {
          [key: string]: unknown;
      } | null;
      /**
       * Locations
       * @description List of locations related to the error
       * @default null
       */
      locations: {
          /**
           * Column
           * @description Column number where the error occurred
           */
          column: number;
          /**
           * Line
           * @description Line number where the error occurred
           */
          line: number;
      }[] | null;
      /**
       * Message
       * @description Error message returned by the GraphQL API
       */
      message: string;
      /**
       * Path
       * @description Path to the field that triggered the error
       * @default null
       */
      path: (string | number)[] | null;
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BITQUERY's BITQUERY_COMBINED_DATABASE_QUERY tool input.
 */
type BITQUERY_COMBINED_DATABASE_QUERY_INPUT = {
  /**
   * Operation Name
   * @description Optional operation name if the query document contains multiple operations.
   * @default null
   */
  operationName: string | null;
  /**
   * Query
   * @description The GraphQL query string to execute against the Combined Database.
   */
  query?: string;
  /**
   * Variables
   * @description Optional map of variables referenced in the GraphQL query.
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BITQUERY's BITQUERY_COMBINED_DATABASE_QUERY tool output.
 */
type BITQUERY_COMBINED_DATABASE_QUERY_OUTPUT = {
  /**
   * Data
   * @description Data returned by the GraphQL query; structure depends on the provided query.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of errors returned by the GraphQL API, if any.
   * @default null
   */
  errors: {
      /**
       * Extensions
       * @description Additional error information.
       * @default null
       */
      extensions: {
          [key: string]: unknown;
      } | null;
      /**
       * Locations
       * @description List of locations in the query corresponding to this error.
       * @default null
       */
      locations: {
          /**
           * Column
           * @description Column number in the GraphQL query where the error occurred.
           */
          column: number;
          /**
           * Line
           * @description Line number in the GraphQL query where the error occurred.
           */
          line: number;
      }[] | null;
      /**
       * Message
       * @description Error message returned by the GraphQL API.
       */
      message: string;
      /**
       * Path
       * @description Path to the response field which triggered the error.
       * @default null
       */
      path: (string | number)[] | null;
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BITQUERY's BITQUERY_CONDITIONAL_METRICS tool input.
 */
type BITQUERY_CONDITIONAL_METRICS_INPUT = {
  /**
   * Alias
   * @description GraphQL alias name for the metric.
   * @default null
   */
  alias: string | null;
  /**
   * Distinct Field
   * @description Field name for distinct operator (only valid for 'count' operation). E.g., 'Block_Number'.
   * @default null
   */
  distinct_field: string | null;
  /**
   * Field
   * @description The field to aggregate, e.g., 'Block_GasUsed'.
   */
  field?: string;
  /**
   * If
   * @description Filter object to apply to the metric execution, using GraphQL filter structure.
   */
  if?: {
      [key: string]: unknown;
  };
  /**
   * Operation
   * @description Type of metric operation to apply.
   * @enum {string}
   */
  operation?: "count" | "sum" | "avg" | "min" | "max";
  /**
   * Select Where
   * @description HAVING-style filter after aggregation (applies to operations other than count).
   * @default null
   */
  select_where: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BITQUERY's BITQUERY_CONDITIONAL_METRICS tool output.
 */
type BITQUERY_CONDITIONAL_METRICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Snippet
       * @description GraphQL metric snippet with conditional logic applied.
       */
      snippet: string;
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
 * Type of BITQUERY's BITQUERY_COUNT_DISTINCT_METRIC tool input.
 */
type BITQUERY_COUNT_DISTINCT_METRIC_INPUT = {
  /**
   * Query
   * @description GraphQL query string specifying the distinct count aggregation. For example: '{ ethereum(network: bsc) { transfers(date: {since: "2023-01-01"}) { count: count(distinct: sender) } } }'.
   */
  query?: string;
  /**
   * Variables
   * @description Optional mapping of GraphQL variables if your query uses `$variable` placeholders.
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BITQUERY's BITQUERY_COUNT_DISTINCT_METRIC tool output.
 */
type BITQUERY_COUNT_DISTINCT_METRIC_OUTPUT = {
  /**
   * Data
   * @description GraphQL data payload containing the distinct count results.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of GraphQL errors if the query failed or was malformed.
   * @default null
   */
  errors: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BITQUERY's BITQUERY_COUNT_METRIC tool input.
 */
type BITQUERY_COUNT_METRIC_INPUT = {
  /**
   * Query
   * @description GraphQL query string specifying the count aggregation. For example: '{ bitcoin { blocks(options: {limit: 1}) { count } } }'.
   */
  query?: string;
  /**
   * Variables
   * @description Optional GraphQL variables map if your query uses `$variable` placeholders.
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BITQUERY's BITQUERY_COUNT_METRIC tool output.
 */
type BITQUERY_COUNT_METRIC_OUTPUT = {
  /**
   * Data
   * @description GraphQL data payload containing the count results.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of GraphQL errors if the query failed or was malformed.
   * @default null
   */
  errors: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BITQUERY's BITQUERY_DATABASE_SELECTION tool input.
 */
type BITQUERY_DATABASE_SELECTION_INPUT = {
  /**
   * Dataset
   * @description Determines which Bitquery GraphQL dataset to use: realtime (latest blocks), archive (historical data), combined (merge both).
   * @enum {string}
   */
  dataset?: "realtime" | "archive" | "combined";
};

/**
 * Type of BITQUERY's BITQUERY_DATABASE_SELECTION tool output.
 */
type BITQUERY_DATABASE_SELECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Selection
       * @description GraphQL fragment representing the selected dataset.
       */
      selection: string;
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
 * Type of BITQUERY's BITQUERY_EARLY_ACCESS_PROGRAM_QUERY tool input.
 */
type BITQUERY_EARLY_ACCESS_PROGRAM_QUERY_INPUT = {
  /**
   * Query
   * @description GraphQL query or subscription string conforming to the EAP schema. For example: subscription { Solana { DEXTrades { Block { Time Slot } Trade { Price } } } }
   */
  query?: string;
  /**
   * Variables
   * @description Optional variables for GraphQL queries
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BITQUERY's BITQUERY_EARLY_ACCESS_PROGRAM_QUERY tool output.
 */
type BITQUERY_EARLY_ACCESS_PROGRAM_QUERY_OUTPUT = {
  /**
   * Data
   * @description Data field from the GraphQL response
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description Errors returned by the GraphQL API, if any
   * @default null
   */
  errors: {
      /**
       * Extensions
       * @description Additional error information
       * @default null
       */
      extensions: {
          [key: string]: unknown;
      } | null;
      /**
       * Locations
       * @description Locations in the query associated with this error
       * @default null
       */
      locations: {
          [key: string]: number;
      }[] | null;
      /**
       * Message
       * @description Error message returned by the GraphQL API
       */
      message: string;
      /**
       * Path
       * @description Path of the error
       * @default null
       */
      path: (string | number)[] | null;
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BITQUERY's BITQUERY_MEMPOOL_SUBSCRIPTION tool input.
 */
type BITQUERY_MEMPOOL_SUBSCRIPTION_INPUT = {
  /**
   * Query
   * @description GraphQL subscription query string defining mempool feed and filters.
   */
  query?: string;
  /**
   * Variables
   * @description GraphQL variables map for the subscription query.
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BITQUERY's BITQUERY_MEMPOOL_SUBSCRIPTION tool output.
 */
type BITQUERY_MEMPOOL_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description GraphQL data payload containing mempool feed.
   */
  data?: {
      /**
       * Evm
       * @description EVM namespace with mempool feed.
       */
      EVM: {
          /**
           * Mempool Feed
           * @description List of mempool transactions matching filters.
           */
          MempoolFeed: {
              /**
               * Amount
               * @description Amount transferred.
               */
              amount: number;
              /**
               * Block
               * @description Block details for a transaction.
               */
              block: {
                  /**
                   * Number
                   * @description Block number.
                   */
                  number: number;
                  /**
                   * Timestamp
                   * @description Block timestamp info.
                   */
                  timestamp: {
                      /**
                       * Time
                       * @description Block time in ISO8601 format.
                       */
                      time: string;
                  };
              };
              /**
               * Currency
               * @description Currency symbol, e.g., 'ETH'.
               */
              currency: string;
              /**
               * Fee
               * @description Transaction fee.
               */
              fee: number;
              /**
               * Hash
               * @description Transaction hash.
               */
              hash: string;
              /**
               * Receiver
               * @description Receiver address.
               */
              receiver: string;
              /**
               * Sender
               * @description Sender address.
               */
              sender: string;
          }[];
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of GraphQL errors, if any.
   * @default null
   */
  errors: {
      /**
       * Extensions
       * @description Additional error information.
       * @default null
       */
      extensions: {
          [key: string]: unknown;
      } | null;
      /**
       * Locations
       * @description Locations in the query corresponding to this error.
       * @default null
       */
      locations: {
          /**
           * Column
           * @description Column number in the GraphQL query where the error occurred.
           */
          column: number;
          /**
           * Line
           * @description Line number in the GraphQL query where the error occurred.
           */
          line: number;
      }[] | null;
      /**
       * Message
       * @description Error message returned by the GraphQL API.
       */
      message: string;
      /**
       * Path
       * @description Path to the response field which triggered the error.
       * @default null
       */
      path: (string | number)[] | null;
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BITQUERY's BITQUERY_NETWORK_SELECTION tool input.
 */
type BITQUERY_NETWORK_SELECTION_INPUT = {
  /**
   * Network
   * @description Blockchain network to query. If omitted, GraphQL defaults to eth. Supported networks: eth, bsc, bsc_testnet, goerli, rinkeby, ropsten, sepolia, classic, mordor, kotti, astor, polygon, arbitrum, avalanche, optimism, fantom, cronos, klaytn, fusion, huobi, moonbeam, celo, canto, aurora.
   * @enum {string}
   */
  network?: "eth" | "bsc" | "bsc_testnet" | "goerli" | "rinkeby" | "ropsten" | "sepolia" | "classic" | "mordor" | "kotti" | "astor" | "polygon" | "arbitrum" | "avalanche" | "optimism" | "fantom" | "cronos" | "klaytn" | "fusion" | "huobi" | "moonbeam" | "celo" | "canto" | "aurora";
};

/**
 * Type of BITQUERY's BITQUERY_NETWORK_SELECTION tool output.
 */
type BITQUERY_NETWORK_SELECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Selection
       * @description GraphQL fragment representing the selected network.
       */
      selection: string;
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
 * Type of BITQUERY's BITQUERY_OPTIONS_QUERY tool input.
 */
type BITQUERY_OPTIONS_QUERY_INPUT = object;

/**
 * Type of BITQUERY's BITQUERY_OPTIONS_QUERY tool output.
 */
type BITQUERY_OPTIONS_QUERY_OUTPUT = {
  /**
   * Data
   * @description Introspection data for dataset options
   */
  data?: {
      /**
       *   Schema
       * @description Schema introspection result for the query type.
       */
      __schema: {
          /**
           * Query Type
           * @description Root query type info
           */
          queryType: {
              /**
               * Fields
               * @description Top-level query fields
               */
              fields: {
                  /**
                   * Args
                   * @description List of arguments available for the field
                   */
                  args: {
                      /**
                       * Default Value
                       * @description Default value for the argument, if any
                       * @default null
                       */
                      defaultValue: string | null;
                      /**
                       * Description
                       * @description Description of the argument
                       * @default null
                       */
                      description: string | null;
                      /**
                       * Name
                       * @description Argument name
                       */
                      name: string;
                  }[];
                  /**
                   * Description
                   * @description Description of the field
                   * @default null
                   */
                  description: string | null;
                  /**
                   * Name
                   * @description Field name
                   */
                  name: string;
              }[];
          };
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description GraphQL errors, if any
   * @default null
   */
  errors: {
      /**
       * Extensions
       * @description Additional error information
       * @default null
       */
      extensions: {
          [key: string]: unknown;
      } | null;
      /**
       * Locations
       * @description Locations related to the error
       * @default null
       */
      locations: {
          /**
           * Column
           * @description Column number where the error occurred
           */
          column: number;
          /**
           * Line
           * @description Line number where the error occurred
           */
          line: number;
      }[] | null;
      /**
       * Message
       * @description Error message returned by the GraphQL API
       */
      message: string;
      /**
       * Path
       * @description Path to the field in the GraphQL schema where the error occurred
       * @default null
       */
      path: unknown[] | null;
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BITQUERY's BITQUERY_PRICE_ASYMMETRY_METRIC tool input.
 */
type BITQUERY_PRICE_ASYMMETRY_METRIC_INPUT = {
  /**
   * Ge
   * @description Price asymmetry greater than or equal to this value.
   * @default null
   */
  ge: number | null;
  /**
   * Gt
   * @description Price asymmetry greater than this value.
   * @default null
   */
  gt: number | null;
  /**
   * Le
   * @description Price asymmetry less than or equal to this value.
   * @default null
   */
  le: number | null;
  /**
   * Lt
   * @description Price asymmetry less than this value.
   * @default null
   */
  lt: number | null;
};

/**
 * Type of BITQUERY's BITQUERY_PRICE_ASYMMETRY_METRIC tool output.
 */
type BITQUERY_PRICE_ASYMMETRY_METRIC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Snippet
       * @description GraphQL snippet for PriceAsymmetry filter to embed in a `where` clause.
       */
      snippet: string;
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
 * Type of BITQUERY's BITQUERY_QUANTILE_METRIC tool input.
 */
type BITQUERY_QUANTILE_METRIC_INPUT = {
  /**
   * Query
   * @description GraphQL query string specifying the quantile metric. For example: '{ EVM(dataset: archive, network: bsc) { Calls(limit: {count: 1}) { quantile_value: quantile(of: Call_Gas, level: 0.5) } } }'.
   */
  query?: string;
  /**
   * Variables
   * @description Optional GraphQL variables map if your query uses `$variable` placeholders.
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BITQUERY's BITQUERY_QUANTILE_METRIC tool output.
 */
type BITQUERY_QUANTILE_METRIC_OUTPUT = {
  /**
   * Data
   * @description GraphQL data payload containing the quantile result.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of GraphQL errors if the query failed or was malformed.
   * @default null
   */
  errors: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BITQUERY's BITQUERY_REALTIME_DATABASE_QUERY tool input.
 */
type BITQUERY_REALTIME_DATABASE_QUERY_INPUT = {
  /**
   * Operation Name
   * @description Optional operation name if the query document contains multiple operations
   * @default null
   */
  operationName: string | null;
  /**
   * Query
   * @description GraphQL query string to execute against the Realtime Database.
   */
  query?: string;
  /**
   * Variables
   * @description Optional mapping of GraphQL variables for parameterized queries
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BITQUERY's BITQUERY_REALTIME_DATABASE_QUERY tool output.
 */
type BITQUERY_REALTIME_DATABASE_QUERY_OUTPUT = {
  /**
   * Data
   * @description Data returned by the GraphQL query; structure depends on the query
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of GraphQL errors if the query failed or was malformed
   * @default null
   */
  errors: {
      /**
       * Extensions
       * @description Additional error information from the GraphQL API
       * @default null
       */
      extensions: {
          [key: string]: unknown;
      } | null;
      /**
       * Locations
       * @description List of locations related to the error
       * @default null
       */
      locations: {
          /**
           * Column
           * @description Column number where the error occurred
           */
          column: number;
          /**
           * Line
           * @description Line number where the error occurred
           */
          line: number;
      }[] | null;
      /**
       * Message
       * @description Error message returned by the GraphQL API
       */
      message: string;
      /**
       * Path
       * @description Path to the field that triggered the error
       * @default null
       */
      path: (string | number)[] | null;
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BITQUERY's BITQUERY_SELECT_BY_METRIC tool input.
 */
type BITQUERY_SELECT_BY_METRIC_INPUT = {
  /**
   * Alias
   * @description Optional GraphQL alias for the metric snippet
   * @default null
   */
  alias: string | null;
  /**
   * Of
   * @description The metric field to aggregate, e.g., 'BalanceUpdate_Amount'
   */
  of?: string;
  /**
   * Operation
   * @description Aggregation operation supporting selectWhere (e.g., sum, avg, min, max)
   * @enum {string}
   */
  operation?: "sum" | "avg" | "min" | "max";
  /**
   * Select Where
   * @description Filter expression for the metric values using selectWhere
   */
  selectWhere?: {
      /**
       * Eq
       * @description Equal to this value
       * @default null
       */
      eq: string | null;
      /**
       * Gt
       * @description Greater than this value
       * @default null
       */
      gt: string | null;
      /**
       * Gte
       * @description Greater than or equal to this value
       * @default null
       */
      gte: string | null;
      /**
       * In
       * @description One of these values
       * @default null
       */
      in: string[] | null;
      /**
       * Lt
       * @description Less than this value
       * @default null
       */
      lt: string | null;
      /**
       * Lte
       * @description Less than or equal to this value
       * @default null
       */
      lte: string | null;
      /**
       * Ne
       * @description Not equal to this value
       * @default null
       */
      ne: string | null;
      /**
       * Nin
       * @description None of these values
       * @default null
       */
      nin: string[] | null;
  };
};

/**
 * Type of BITQUERY's BITQUERY_SELECT_BY_METRIC tool output.
 */
type BITQUERY_SELECT_BY_METRIC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Snippet
       * @description GraphQL metric snippet with selectWhere filter applied
       */
      snippet: string;
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
 * Type of BITQUERY's BITQUERY_STATISTICS_METRIC tool input.
 */
type BITQUERY_STATISTICS_METRIC_INPUT = {
  /**
   * Query
   * @description GraphQL query string invoking statistical metric functions such as average, median, quantile, correlation, etc.
   */
  query?: string;
  /**
   * Variables
   * @description Optional mapping of GraphQL variables if the query uses `$` placeholders.
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BITQUERY's BITQUERY_STATISTICS_METRIC tool output.
 */
type BITQUERY_STATISTICS_METRIC_OUTPUT = {
  /**
   * Data
   * @description GraphQL data payload containing statistical metric results.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of GraphQL errors if the query failed or was malformed.
   * @default null
   */
  errors: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BITQUERY's BITQUERY_SUM_METRIC tool input.
 */
type BITQUERY_SUM_METRIC_INPUT = {
  /**
   * Query
   * @description GraphQL query string specifying the sum metric. For example: '{ EVM(dataset: archive, network: bsc) { MinerRewards { sum: sum(of: Reward_Total) } } }'.
   */
  query?: string;
  /**
   * Variables
   * @description Optional GraphQL variables map if your query uses `$variable` placeholders.
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BITQUERY's BITQUERY_SUM_METRIC tool output.
 */
type BITQUERY_SUM_METRIC_OUTPUT = {
  /**
   * Data
   * @description GraphQL data payload containing the sum result.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of GraphQL errors if the query failed or was malformed.
   * @default null
   */
  errors: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BITQUERY's BITQUERY_UNIQ_METRIC tool input.
 */
type BITQUERY_UNIQ_METRIC_INPUT = {
  /**
   * Query
   * @description GraphQL query string specifying the uniq metric. For example: '{ EVM(dataset: archive, network: eth) { TokenHolders(limit:{count:1}) { uniq_value: uniq(of: Holder_Address, method: approximate) } } }'.
   */
  query?: string;
  /**
   * Variables
   * @description Optional GraphQL variables map if your query uses `$variable` placeholders.
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BITQUERY's BITQUERY_UNIQ_METRIC tool output.
 */
type BITQUERY_UNIQ_METRIC_OUTPUT = {
  /**
   * Data
   * @description GraphQL data payload containing the uniq metric result.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of GraphQL errors if the query failed or was malformed.
   * @default null
   */
  errors: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "BITQUERY".
 */
export type BITQUERY_TOOL_INPUTS = {
  ALIASES_METRIC: BITQUERY_ALIASES_METRIC_INPUT
  ARCHIVE_DATABASE_QUERY: BITQUERY_ARCHIVE_DATABASE_QUERY_INPUT
  COMBINED_DATABASE_QUERY: BITQUERY_COMBINED_DATABASE_QUERY_INPUT
  CONDITIONAL_METRICS: BITQUERY_CONDITIONAL_METRICS_INPUT
  COUNT_DISTINCT_METRIC: BITQUERY_COUNT_DISTINCT_METRIC_INPUT
  COUNT_METRIC: BITQUERY_COUNT_METRIC_INPUT
  DATABASE_SELECTION: BITQUERY_DATABASE_SELECTION_INPUT
  EARLY_ACCESS_PROGRAM_QUERY: BITQUERY_EARLY_ACCESS_PROGRAM_QUERY_INPUT
  MEMPOOL_SUBSCRIPTION: BITQUERY_MEMPOOL_SUBSCRIPTION_INPUT
  NETWORK_SELECTION: BITQUERY_NETWORK_SELECTION_INPUT
  OPTIONS_QUERY: BITQUERY_OPTIONS_QUERY_INPUT
  PRICE_ASYMMETRY_METRIC: BITQUERY_PRICE_ASYMMETRY_METRIC_INPUT
  QUANTILE_METRIC: BITQUERY_QUANTILE_METRIC_INPUT
  REALTIME_DATABASE_QUERY: BITQUERY_REALTIME_DATABASE_QUERY_INPUT
  SELECT_BY_METRIC: BITQUERY_SELECT_BY_METRIC_INPUT
  STATISTICS_METRIC: BITQUERY_STATISTICS_METRIC_INPUT
  SUM_METRIC: BITQUERY_SUM_METRIC_INPUT
  UNIQ_METRIC: BITQUERY_UNIQ_METRIC_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BITQUERY".
 */
export type BITQUERY_TOOL_OUTPUTS = {
  ALIASES_METRIC: BITQUERY_ALIASES_METRIC_OUTPUT
  ARCHIVE_DATABASE_QUERY: BITQUERY_ARCHIVE_DATABASE_QUERY_OUTPUT
  COMBINED_DATABASE_QUERY: BITQUERY_COMBINED_DATABASE_QUERY_OUTPUT
  CONDITIONAL_METRICS: BITQUERY_CONDITIONAL_METRICS_OUTPUT
  COUNT_DISTINCT_METRIC: BITQUERY_COUNT_DISTINCT_METRIC_OUTPUT
  COUNT_METRIC: BITQUERY_COUNT_METRIC_OUTPUT
  DATABASE_SELECTION: BITQUERY_DATABASE_SELECTION_OUTPUT
  EARLY_ACCESS_PROGRAM_QUERY: BITQUERY_EARLY_ACCESS_PROGRAM_QUERY_OUTPUT
  MEMPOOL_SUBSCRIPTION: BITQUERY_MEMPOOL_SUBSCRIPTION_OUTPUT
  NETWORK_SELECTION: BITQUERY_NETWORK_SELECTION_OUTPUT
  OPTIONS_QUERY: BITQUERY_OPTIONS_QUERY_OUTPUT
  PRICE_ASYMMETRY_METRIC: BITQUERY_PRICE_ASYMMETRY_METRIC_OUTPUT
  QUANTILE_METRIC: BITQUERY_QUANTILE_METRIC_OUTPUT
  REALTIME_DATABASE_QUERY: BITQUERY_REALTIME_DATABASE_QUERY_OUTPUT
  SELECT_BY_METRIC: BITQUERY_SELECT_BY_METRIC_OUTPUT
  STATISTICS_METRIC: BITQUERY_STATISTICS_METRIC_OUTPUT
  SUM_METRIC: BITQUERY_SUM_METRIC_OUTPUT
  UNIQ_METRIC: BITQUERY_UNIQ_METRIC_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BITQUERY toolkit.
 */
export const BITQUERY = {
  slug: "bitquery",
  tools: {
    /**
     * Tool to use graphql aliases to rename fields in the response for clarity and disambiguation. use when you need to query multiple metrics with identical field names in one call.
     */
    ALIASES_METRIC: "BITQUERY_ALIASES_METRIC",
    /**
     * Tool to query the archive database. use when you need full historical blockchain data (delayed by tens of minutes to hours).
     */
    ARCHIVE_DATABASE_QUERY: "BITQUERY_ARCHIVE_DATABASE_QUERY",
    /**
     * Tool to query the combined database, which merges archive and real-time databases. use when you need both historical and up-to-the-second blockchain data in one request.
     */
    COMBINED_DATABASE_QUERY: "BITQUERY_COMBINED_DATABASE_QUERY",
    /**
     * Tool to generate a graphql metric snippet with conditional logic. use when you need to apply filters directly on metric calculations via the `if` attribute.
     */
    CONDITIONAL_METRICS: "BITQUERY_CONDITIONAL_METRICS",
    /**
     * Tool to use the count distinct metric to aggregate unique values for a field. use when you need to count the number of unique occurrences in a dataset.
     */
    COUNT_DISTINCT_METRIC: "BITQUERY_COUNT_DISTINCT_METRIC",
    /**
     * Tool to use the count metric to aggregate the number of records matching a graphql query. use when you need simple record counts.
     */
    COUNT_METRIC: "BITQUERY_COUNT_METRIC",
    /**
     * Tool to select the database (archive, realtime, combined) to query at the top level of a graphql request. use after determining whether you need live, historical, or combined blockchain data.
     */
    DATABASE_SELECTION: "BITQUERY_DATABASE_SELECTION",
    /**
     * Tool to access streaming data across various blockchain networks for evaluation purposes. use when querying chains not available via the v2 endpoint; limited to real-time data only.
     */
    EARLY_ACCESS_PROGRAM_QUERY: "BITQUERY_EARLY_ACCESS_PROGRAM_QUERY",
    /**
     * Tool to subscribe to real-time mempool updates for evm chains (ethereum, bnb, etc.). use after constructing your graphql subscription to stream pending transactions live.
     */
    MEMPOOL_SUBSCRIPTION: "BITQUERY_MEMPOOL_SUBSCRIPTION",
    /**
     * Tool to select the blockchain network for graphql queries. use before constructing dataset or metric queries to ensure the correct chain is targeted.
     */
    NETWORK_SELECTION: "BITQUERY_NETWORK_SELECTION",
    /**
     * Tool to fetch graphql dataset options via schema introspection. use when you need to discover root-level query fields and their arguments before building queries.
     */
    OPTIONS_QUERY: "BITQUERY_OPTIONS_QUERY",
    /**
     * Tool to generate graphql priceasymmetry filter snippet. use when you need to filter trades based on price asymmetry metric.
     */
    PRICE_ASYMMETRY_METRIC: "BITQUERY_PRICE_ASYMMETRY_METRIC",
    /**
     * Tool to calculate quantiles to understand the distribution of numerical data. use when you need percentile metrics (e.g., median or quartiles) of a numerical field in a dataset.
     */
    QUANTILE_METRIC: "BITQUERY_QUANTILE_METRIC",
    /**
     * Realtime database query
     */
    REALTIME_DATABASE_QUERY: "BITQUERY_REALTIME_DATABASE_QUERY",
    /**
     * Tool to generate a graphql metric snippet filtering by its value using selectwhere. use when you need to include only metrics meeting specific value conditions (e.g., only positive sums).
     */
    SELECT_BY_METRIC: "BITQUERY_SELECT_BY_METRIC",
    /**
     * Tool to compute statistical metrics (mean, median, etc.) over one variable in a dataset. use when you need precise summary statistics in your graphql query.
     */
    STATISTICS_METRIC: "BITQUERY_STATISTICS_METRIC",
    /**
     * Tool to calculate the sum of a specified field's values across defined dimensions. use when you need to aggregate total values in a dataset.
     */
    SUM_METRIC: "BITQUERY_SUM_METRIC",
    /**
     * Tool to estimate the count of unique values using the uniq metric. use when you need approximate or exact unique counts for analytics on blockchain datasets.
     */
    UNIQ_METRIC: "BITQUERY_UNIQ_METRIC",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BITQUERY".
 */
export type BITQUERY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BITQUERY".
 */
export type BITQUERY_TRIGGER_EVENTS = {}
