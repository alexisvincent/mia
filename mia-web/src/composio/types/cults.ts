// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CULTS's CULTS_GET_APPROVED_ORIGINS tool input.
 */
type CULTS_GET_APPROVED_ORIGINS_INPUT = object;

/**
 * Type of CULTS's CULTS_GET_APPROVED_ORIGINS tool output.
 */
type CULTS_GET_APPROVED_ORIGINS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Origins
       * @description List of approved sharing origin domains inferred from Cults
       */
      origins: string[];
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
 * Type of CULTS's CULTS_GRAPH_QL_POST tool input.
 */
type CULTS_GRAPH_QL_POST_INPUT = {
  /**
   * Operation Name
   * @description Optional operation name if the query contains multiple operations
   * @default null
   */
  operationName: string | null;
  /**
   * Query
   * @description GraphQL query string specifying the operation to execute
   */
  query?: string;
  /**
   * Variables
   * @description Optional variables for the GraphQL query
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of CULTS's CULTS_GRAPH_QL_POST tool output.
 */
type CULTS_GRAPH_QL_POST_OUTPUT = {
  /**
   * Data
   * @description Data returned by the API matching the GraphQL query
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
   * @description List of GraphQL errors, if any occurred
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
       * @description Locations in the query where errors occurred
       * @default null
       */
      locations: {
          /**
           * Column
           * @description Column number of the error location
           */
          column: number;
          /**
           * Line
           * @description Line number of the error location
           */
          line: number;
      }[] | null;
      /**
       * Message
       * @description Error message
       */
      message: string;
      /**
       * Path
       * @description Path of the response field that experienced the error
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
 * Type of CULTS's CULTS_SHARE_ON_CREATE_FR tool input.
 */
type CULTS_SHARE_ON_CREATE_FR_INPUT = {
  /**
   * File Url
   * @description Absolute URL of the 3D file to share. Must be URL-encoded.
   */
  file_url?: string;
  /**
   * Origin
   * @description Your site name (domain), approved by Cults beforehand.
   */
  origin?: string;
};

/**
 * Type of CULTS's CULTS_SHARE_ON_CREATE_FR tool output.
 */
type CULTS_SHARE_ON_CREATE_FR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Share Url
       * @description Generated one-click share URL on Cults for the 3D creation.
       */
      share_url: string;
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
 * Type map of all available tool input types for toolkit "CULTS".
 */
export type CULTS_TOOL_INPUTS = {
  GET_APPROVED_ORIGINS: CULTS_GET_APPROVED_ORIGINS_INPUT
  GRAPH_QL_POST: CULTS_GRAPH_QL_POST_INPUT
  SHARE_ON_CREATE_FR: CULTS_SHARE_ON_CREATE_FR_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CULTS".
 */
export type CULTS_TOOL_OUTPUTS = {
  GET_APPROVED_ORIGINS: CULTS_GET_APPROVED_ORIGINS_OUTPUT
  GRAPH_QL_POST: CULTS_GRAPH_QL_POST_OUTPUT
  SHARE_ON_CREATE_FR: CULTS_SHARE_ON_CREATE_FR_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CULTS toolkit.
 */
export const CULTS = {
  slug: "cults",
  tools: {
    /**
     * Tool to retrieve approved sharing origins from Cults. Use when you need to infer the allowed domains for the Share on Create action. Use after authenticating with Cults.
     */
    GET_APPROVED_ORIGINS: "CULTS_GET_APPROVED_ORIGINS",
    /**
     * Tool to execute a GraphQL operation against the Cults API. Use when you need to fetch or mutate data via the Cults GraphQL endpoint.
     */
    GRAPH_QL_POST: "CULTS_GRAPH_QL_POST",
    /**
     * Tool to prefill a new creation on Cults (French locale). Use when you need to generate a one-click share link for a 3D file. Use after your site is approved by Cults.
     */
    SHARE_ON_CREATE_FR: "CULTS_SHARE_ON_CREATE_FR",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CULTS".
 */
export type CULTS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CULTS".
 */
export type CULTS_TRIGGER_EVENTS = {}
