// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CONTENTFUL_GRAPHQL's CONTENTFUL_GRAPHQL_GET_CMA_TOKEN tool input.
 */
type CONTENTFUL_GRAPHQL_GET_CMA_TOKEN_INPUT = object;

/**
 * Type of CONTENTFUL_GRAPHQL's CONTENTFUL_GRAPHQL_GET_CMA_TOKEN tool output.
 */
type CONTENTFUL_GRAPHQL_GET_CMA_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Headers
       * @description Headers including Authorization and Content-Type for CMA calls.
       */
      headers: {
          [key: string]: string;
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
 * Type of CONTENTFUL_GRAPHQL's CONTENTFUL_GRAPHQL_GRAPH_QL_CONTENT_API_PERSISTED_QUERY tool input.
 */
type CONTENTFUL_GRAPHQL_GRAPH_QL_CONTENT_API_PERSISTED_QUERY_INPUT = {
  /**
   * Access Token
   * @description Optional override for the Authorization header. If provided, used instead of the token in metadata.
   * @default null
   */
  access_token: string | null;
  /**
   * Environment Id
   * @description Contentful Environment ID.
   */
  environment_id?: string;
  /**
   * Query
   * @description Full GraphQL query text; required on first invocation to register the persisted query.
   * @default null
   */
  query: string | null;
  /**
   * Sha256 Hash
   * @description Lowercase SHA256 hash of the GraphQL query text.
   */
  sha256_hash?: string;
  /**
   * Space Id
   * @description Contentful Space ID.
   */
  space_id?: string;
  /**
   * Variables
   * @description Variables for the GraphQL query as a JSON object.
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
  /**
   * Version
   * @description Persisted query version number; currently must be 1.
   * @default 1
   */
  version: number;
};

/**
 * Type of CONTENTFUL_GRAPHQL's CONTENTFUL_GRAPHQL_GRAPH_QL_CONTENT_API_PERSISTED_QUERY tool output.
 */
type CONTENTFUL_GRAPHQL_GRAPH_QL_CONTENT_API_PERSISTED_QUERY_OUTPUT = {
  /**
   * X Contentful Graphql Query Cost
   * @description Calculated query complexity from response headers.
   * @default null
   */
  "X-Contentful-Graphql-Query-Cost": number | null;
  /**
   * X Contentful Rate Limit Reset
   * @description Seconds until rate limit resets (present on rate limit errors).
   * @default null
   */
  "X-Contentful-RateLimit-Reset": number | null;
  /**
   * Data
   * @description GraphQL response data, may be absent on error.
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
   * @description List of GraphQL errors if any occurred.
   * @default null
   */
  errors: {
      /**
       * GraphQLErrorExtensions
       * @description GraphQL error extensions with Contentful metadata.
       * @default null
       */
      extensions: {
          /**
           * Contentful
           * @description Contentful-specific error metadata.
           */
          contentful: {
              /**
               * Code
               * @description Contentful error code.
               */
              code: string;
              /**
               * Details
               * @description Additional error details, if any.
               * @default null
               */
              details: unknown;
              /**
               * Request Id
               * @description Contentful request ID.
               */
              requestId: string;
          };
      } | null;
      /**
       * Locations
       * @description Locations in the query where the error occurred.
       * @default null
       */
      locations: {
          /**
           * Column
           * @description Column in the GraphQL query where the error occurred.
           */
          column: number;
          /**
           * Line
           * @description Line in the GraphQL query where the error occurred.
           */
          line: number;
      }[] | null;
      /**
       * Message
       * @description Human-readable error message.
       */
      message: string;
      /**
       * Path
       * @description Path to the field that caused the error.
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
 * Type of CONTENTFUL_GRAPHQL's CONTENTFUL_GRAPHQL_GRAPH_QL_CONTENT_API_QUERY tool input.
 */
type CONTENTFUL_GRAPHQL_GRAPH_QL_CONTENT_API_QUERY_INPUT = {
  /**
   * Access Token
   * @description Optional override for the Authorization header. If provided, used instead of the bearer token in metadata.
   * @default null
   */
  access_token: string | null;
  /**
   * Environment Id
   * @description Contentful Environment ID.
   */
  environment_id?: string;
  /**
   * Persisted Query Hash
   * @description SHA-256 hash for Automatic Persisted Queries (APQ).
   * @default null
   */
  persisted_query_hash: string | null;
  /**
   * Persisted Query Version
   * @description Persisted query version number for APQ.
   * @default null
   */
  persisted_query_version: number | null;
  /**
   * Query
   * @description GraphQL document string to execute.
   */
  query?: string;
  /**
   * Resource Resolution
   * @description Base64-encoded JSON map for cross-space resource resolution. Only needed for cross-space links.
   * @default null
   */
  resource_resolution: string | null;
  /**
   * Space Id
   * @description Contentful Space ID.
   */
  space_id?: string;
  /**
   * Variables
   * @description Variables for the GraphQL query as a JSON object.
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of CONTENTFUL_GRAPHQL's CONTENTFUL_GRAPHQL_GRAPH_QL_CONTENT_API_QUERY tool output.
 */
type CONTENTFUL_GRAPHQL_GRAPH_QL_CONTENT_API_QUERY_OUTPUT = {
  /**
   * X Contentful Graphql Query Cost
   * @description Calculated query complexity from response headers.
   * @default null
   */
  "X-Contentful-Graphql-Query-Cost": number | null;
  /**
   * X Contentful Rate Limit Reset
   * @description Seconds until rate limit resets (present on 429 responses).
   * @default null
   */
  "X-Contentful-RateLimit-Reset": number | null;
  /**
   * Data
   * @description GraphQL response data, may be absent on error.
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
   * @description List of GraphQL errors if any occurred.
   * @default null
   */
  errors: {
      /**
       * GraphQLErrorExtensions
       * @description GraphQL error extensions with Contentful metadata.
       * @default null
       */
      extensions: {
          /**
           * Contentful
           * @description Contentful-specific error metadata.
           */
          contentful: {
              /**
               * Code
               * @description Contentful error code.
               */
              code: string;
              /**
               * Details
               * @description Additional error details, if any.
               * @default null
               */
              details: unknown;
              /**
               * Request Id
               * @description Contentful request ID.
               */
              requestId: string;
          };
      } | null;
      /**
       * Locations
       * @description Locations in the query where the error occurred.
       * @default null
       */
      locations: {
          /**
           * Column
           * @description Column in the GraphQL query where the error occurred.
           */
          column: number;
          /**
           * Line
           * @description Line in the GraphQL query where the error occurred.
           */
          line: number;
      }[] | null;
      /**
       * Message
       * @description Human-readable error message.
       */
      message: string;
      /**
       * Path
       * @description Path to the field that caused the error.
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
 * Type map of all available tool input types for toolkit "CONTENTFUL_GRAPHQL".
 */
export type CONTENTFUL_GRAPHQL_TOOL_INPUTS = {
  GET_CMA_TOKEN: CONTENTFUL_GRAPHQL_GET_CMA_TOKEN_INPUT
  GRAPH_QL_CONTENT_API_PERSISTED_QUERY: CONTENTFUL_GRAPHQL_GRAPH_QL_CONTENT_API_PERSISTED_QUERY_INPUT
  GRAPH_QL_CONTENT_API_QUERY: CONTENTFUL_GRAPHQL_GRAPH_QL_CONTENT_API_QUERY_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CONTENTFUL_GRAPHQL".
 */
export type CONTENTFUL_GRAPHQL_TOOL_OUTPUTS = {
  GET_CMA_TOKEN: CONTENTFUL_GRAPHQL_GET_CMA_TOKEN_OUTPUT
  GRAPH_QL_CONTENT_API_PERSISTED_QUERY: CONTENTFUL_GRAPHQL_GRAPH_QL_CONTENT_API_PERSISTED_QUERY_OUTPUT
  GRAPH_QL_CONTENT_API_QUERY: CONTENTFUL_GRAPHQL_GRAPH_QL_CONTENT_API_QUERY_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CONTENTFUL_GRAPHQL toolkit.
 */
export const CONTENTFUL_GRAPHQL = {
  slug: "contentful_graphql",
  tools: {
    /**
     * Tool to retrieve a Contentful Management API (CMA) access token. Use when making CMA calls to ensure valid authorization.
     */
    GET_CMA_TOKEN: "CONTENTFUL_GRAPHQL_GET_CMA_TOKEN",
    /**
     * Tool to execute a persisted GraphQL query via its SHA256 hash. Use after registering a query hash to run cached queries by hash. On first call include full query text; thereafter invoke with only hash and variables.
     */
    GRAPH_QL_CONTENT_API_PERSISTED_QUERY: "CONTENTFUL_GRAPHQL_GRAPH_QL_CONTENT_API_PERSISTED_QUERY",
    /**
     * Tool to execute a GraphQL query against a specified space and environment. Use when fetching Contentful content via GraphQL after obtaining or providing a valid token.
     */
    GRAPH_QL_CONTENT_API_QUERY: "CONTENTFUL_GRAPHQL_GRAPH_QL_CONTENT_API_QUERY",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CONTENTFUL_GRAPHQL".
 */
export type CONTENTFUL_GRAPHQL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CONTENTFUL_GRAPHQL".
 */
export type CONTENTFUL_GRAPHQL_TRIGGER_EVENTS = {}
