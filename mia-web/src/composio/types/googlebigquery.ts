// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLEBIGQUERY's GOOGLEBIGQUERY_QUERY tool input.
 */
type GOOGLEBIGQUERY_QUERY_INPUT = {
  /**
   * Query
   * @description Query to run on BigQuery.
   */
  query?: string;
};

/**
 * Type of GOOGLEBIGQUERY's GOOGLEBIGQUERY_QUERY tool output.
 */
type GOOGLEBIGQUERY_QUERY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rows
       * @description List of rows returned from the queries.
       */
      rows: unknown[];
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
 * Type map of all available tool input types for toolkit "GOOGLEBIGQUERY".
 */
export type GOOGLEBIGQUERY_TOOL_INPUTS = {
  QUERY: GOOGLEBIGQUERY_QUERY_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLEBIGQUERY".
 */
export type GOOGLEBIGQUERY_TOOL_OUTPUTS = {
  QUERY: GOOGLEBIGQUERY_QUERY_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GOOGLEBIGQUERY toolkit.
 */
export const GOOGLEBIGQUERY = {
  slug: "googlebigquery",
  tools: {
    /**
     * Query tool will run a sql query in bigquery. note: make sure the query being input in a single line format. for example, select * from sample dataset.sample table where column name = 'value'
     */
    QUERY: "GOOGLEBIGQUERY_QUERY",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLEBIGQUERY".
 */
export type GOOGLEBIGQUERY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GOOGLEBIGQUERY".
 */
export type GOOGLEBIGQUERY_TRIGGER_EVENTS = {}
