// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FACEUP's FACEUP_FACEUP_GRAPHQL_STATISTICS_QUERY tool input.
 */
type FACEUP_FACEUP_GRAPHQL_STATISTICS_QUERY_INPUT = {
  /**
   * Query
   * @description The GraphQL query string to execute against the FaceUp statistics endpoint. Example: 'query statistics($from: String!, $to: String!, $schoolIds: [UUID!]!) { statistics(from: $from, to: $to, schoolIds: $schoolIds) { numberOfReports avgResponseTime } }'
   */
  query?: string;
  /**
   * Variables
   * @description Optional mapping of variables for the GraphQL query, matching any declared query variables. E.g., {'from': '2024-01-01', 'to': '2024-06-30', 'schoolIds': ['uuid-1', 'uuid-2']}
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of FACEUP's FACEUP_FACEUP_GRAPHQL_STATISTICS_QUERY tool output.
 */
type FACEUP_FACEUP_GRAPHQL_STATISTICS_QUERY_OUTPUT = {
  /**
   * Data
   * @description The 'data' object returned by the GraphQL API, containing requested statistics.
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
   * @description Any errors returned by the GraphQL API.
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
 * Type map of all available tool input types for toolkit "FACEUP".
 */
export type FACEUP_TOOL_INPUTS = {
  FACEUP_GRAPHQL_STATISTICS_QUERY: FACEUP_FACEUP_GRAPHQL_STATISTICS_QUERY_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FACEUP".
 */
export type FACEUP_TOOL_OUTPUTS = {
  FACEUP_GRAPHQL_STATISTICS_QUERY: FACEUP_FACEUP_GRAPHQL_STATISTICS_QUERY_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FACEUP toolkit.
 */
export const FACEUP = {
  slug: "faceup",
  tools: {
    /**
     * Tool to execute a graphql query to retrieve faceup statistics. use when you need to fetch or filter metrics (e.g., by date range or school ids).
     */
    FACEUP_GRAPHQL_STATISTICS_QUERY: "FACEUP_FACEUP_GRAPHQL_STATISTICS_QUERY",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FACEUP".
 */
export type FACEUP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FACEUP".
 */
export type FACEUP_TRIGGER_EVENTS = {}
