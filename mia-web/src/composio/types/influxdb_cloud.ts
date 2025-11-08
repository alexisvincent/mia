// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_ADD_DASHBOARD_CELL tool input.
 */
type INFLUXDB_CLOUD_ADD_DASHBOARD_CELL_INPUT = {
  /**
   * Dashboard Id
   * @description ID of the dashboard to which the cell will be added
   */
  dashboardID?: string;
  /**
   * H
   * @description Cell height in grid units
   * @default null
   */
  h: number | null;
  /**
   * Name
   * @description Human-readable name for the cell
   * @default null
   */
  name: string | null;
  /**
   * Using View
   * @description ID of an existing view to copy into the new cell
   * @default null
   */
  usingView: string | null;
  /**
   * W
   * @description Cell width in grid units
   * @default null
   */
  w: number | null;
  /**
   * X
   * @description X position of the cell in the dashboard grid
   * @default null
   */
  x: number | null;
  /**
   * Y
   * @description Y position of the cell in the dashboard grid
   * @default null
   */
  y: number | null;
};

/**
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_ADD_DASHBOARD_CELL tool output.
 */
type INFLUXDB_CLOUD_ADD_DASHBOARD_CELL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * H
       * @description Cell height in grid units
       */
      h: number;
      /**
       * Id
       * @description Unique identifier of the created cell
       */
      id: string;
      /**
       * Links
       * @description Related resource links for the cell
       */
      links: {
          /**
           * Self
           * @description URL to this cell resource
           */
          self: string;
          /**
           * View
           * @description URL to the cell's view resource
           */
          view: string;
      };
      /**
       * View Id
       * @description Identifier of the underlying view
       */
      viewID: string;
      /**
       * W
       * @description Cell width in grid units
       */
      w: number;
      /**
       * X
       * @description X position of the cell in the grid
       */
      x: number;
      /**
       * Y
       * @description Y position of the cell in the grid
       */
      y: number;
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
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_DELETE_USER tool input.
 */
type INFLUXDB_CLOUD_DELETE_USER_INPUT = {
  /**
   * User Id
   * @description ID of the user to delete.
   */
  userID?: string;
};

/**
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_DELETE_USER tool output.
 */
type INFLUXDB_CLOUD_DELETE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the delete user request was accepted (HTTP 204 No Content).
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
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_GENERATE_QUERY_AST tool input.
 */
type INFLUXDB_CLOUD_GENERATE_QUERY_AST_INPUT = {
  /**
   * Query
   * @description The Flux query script to analyze. Must be valid Flux syntax.
   */
  query?: string;
  /**
   * Zap Trace Span
   * @description Optional OpenTracing span context. If set, sent as 'Zap-Trace-Span'.
   * @default null
   */
  zap_trace_span: string | null;
};

/**
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_GENERATE_QUERY_AST tool output.
 */
type INFLUXDB_CLOUD_GENERATE_QUERY_AST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ast
       * @description A JSON object representing the Abstract Syntax Tree of the Flux query.
       */
      ast: {
          [key: string]: unknown;
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
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_GET_DBRP tool input.
 */
type INFLUXDB_CLOUD_GET_DBRP_INPUT = {
  /**
   * Dbrp Id
   * @description DBRP mapping ID to retrieve.
   */
  dbrpID?: string;
  /**
   * Org
   * @description Organization name that owns the DBRP mapping.
   * @default null
   */
  org: string | null;
  /**
   * Org Id
   * @description Organization ID that owns the DBRP mapping.
   * @default null
   */
  orgID: string | null;
};

/**
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_GET_DBRP tool output.
 */
type INFLUXDB_CLOUD_GET_DBRP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bucket Id
       * @description Target bucket ID of the mapping.
       */
      bucketID: string;
      /**
       * Database
       * @description 1.x database name for the mapping.
       */
      database: string;
      /**
       * Default
       * @description True if this is the database's default mapping.
       */
      default: boolean;
      /**
       * Id
       * @description DBRP mapping ID.
       */
      id: string;
      /**
       * Org Id
       * @description Owning organization ID of the mapping.
       */
      orgID: string;
      /**
       * Retention Policy
       * @description 1.x retention policy name for the mapping.
       */
      retention_policy: string;
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
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_LIST_ROUTES tool input.
 */
type INFLUXDB_CLOUD_LIST_ROUTES_INPUT = {
  /**
   * Zap Trace Span
   * @description Optional OpenTracing span context. If set, sent as 'Zap-Trace-Span'.
   * @default null
   */
  zap_trace_span: string | null;
};

/**
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_LIST_ROUTES tool output.
 */
type INFLUXDB_CLOUD_LIST_ROUTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_SIGNIN tool input.
 */
type INFLUXDB_CLOUD_SIGNIN_INPUT = {
  /**
   * Zap Trace Span
   * @description OpenTracing span context for request tracing.
   * @default null
   */
  "Zap-Trace-Span": string | null;
  /**
   * Base Url
   * @description Override the base URL for the sign-in request. If not provided, the connection's base_url is used.
   * @default null
   */
  base_url: string | null;
  /**
   * Password
   * @description Password for login
   */
  password?: string;
  /**
   * Username
   * @description Username for login (typically the account email)
   */
  username?: string;
};

/**
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_SIGNIN tool output.
 */
type INFLUXDB_CLOUD_SIGNIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code from API error body
       * @default null
       */
      code: string | null;
      /**
       * Err
       * @description Error details from API error body
       * @default null
       */
      err: string | null;
      /**
       * Error
       * @description Raw error text if JSON parsing failed or additional details
       * @default null
       */
      error: string | null;
      /**
       * Message
       * @description Human-readable error message from API error body
       * @default null
       */
      message: string | null;
      /**
       * Op
       * @description Operation context from API error body if available
       * @default null
       */
      op: string | null;
      /**
       * Session Cookie
       * @description Session cookie from Set-Cookie header after successful sign-in
       * @default null
       */
      session_cookie: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
      /**
       * Success
       * @description True if authentication succeeded (HTTP 204) and a cookie was returned.
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
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_SIGNOUT tool input.
 */
type INFLUXDB_CLOUD_SIGNOUT_INPUT = {
  /**
   * Zap Trace Span
   * @description OpenTracing span context for request tracing.
   * @default null
   */
  "Zap-Trace-Span": string | null;
  /**
   * Cookie
   * @description Session cookie from POST /api/v2/signin to be sent in the Cookie header.
   */
  cookie?: string;
};

/**
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_SIGNOUT tool output.
 */
type INFLUXDB_CLOUD_SIGNOUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code from API error body
       * @default null
       */
      code: string | null;
      /**
       * Err
       * @description Error details from API error body
       * @default null
       */
      err: string | null;
      /**
       * Error
       * @description Raw error text if JSON parsing failed or additional details
       * @default null
       */
      error: string | null;
      /**
       * Message
       * @description Human-readable error message from API error body
       * @default null
       */
      message: string | null;
      /**
       * Op
       * @description Operation context from API error body if available
       * @default null
       */
      op: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       * @default null
       */
      status_code: number | null;
      /**
       * Success
       * @description True if the session was expired (HTTP 204 No Content).
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
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_UPDATE_DBRP tool input.
 */
type INFLUXDB_CLOUD_UPDATE_DBRP_INPUT = {
  /**
   * Dbrp Id
   * @description Path parameter. The ID of the DBRP mapping to update.
   */
  dbrpID?: string;
  /**
   * Default
   * @description Set true to make this mapping the default retention policy for the specified database; set false to remove the default mapping.
   * @default null
   */
  default: boolean | null;
  /**
   * Org
   * @description Query parameter. Organization name that owns the DBRP mapping.
   * @default null
   */
  org: string | null;
  /**
   * Org Id
   * @description Query parameter. Organization ID that owns the DBRP mapping.
   * @default null
   */
  orgID: string | null;
  /**
   * Retention Policy
   * @description Retention policy name (InfluxDB v1) for the mapping.
   * @default null
   */
  retention_policy: string | null;
};

/**
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_UPDATE_DBRP tool output.
 */
type INFLUXDB_CLOUD_UPDATE_DBRP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bucket Id
       * @description Bucket ID.
       */
      bucketID: string;
      /**
       * Database
       * @description 1.x database name.
       */
      database: string;
      /**
       * Default
       * @description Whether this mapping is the default for the database.
       */
      default: boolean;
      /**
       * Id
       * @description DBRP mapping ID.
       */
      id: string;
      /**
       * Org Id
       * @description Owning organization ID.
       */
      orgID: string;
      /**
       * Retention Policy
       * @description 1.x retention policy name.
       */
      retention_policy: string;
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
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_WRITE_DATA tool input.
 */
type INFLUXDB_CLOUD_WRITE_DATA_INPUT = {
  /**
   * Bucket
   * @description Name of the bucket to write line protocol data into.
   */
  bucket?: string;
  /**
   * Data
   * @description Line protocol payload to write. Must conform to InfluxDB line protocol format.
   */
  data?: string;
  /**
   * Org
   * @description Organization name. One of `org` or `orgID` must be provided.
   * @default null
   */
  org: string | null;
  /**
   * Org Id
   * @description Organization ID. One of `org` or `orgID` must be provided.
   * @default null
   */
  orgID: string | null;
  /**
   * Precision
   * @description Timestamp precision of the provided line protocol data.
   * @default ns
   * @enum {string}
   */
  precision: "ns" | "us" | "ms" | "s" | "m" | "h";
};

/**
 * Type of INFLUXDB_CLOUD's INFLUXDB_CLOUD_WRITE_DATA tool output.
 */
type INFLUXDB_CLOUD_WRITE_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the write call (204 indicates success).
       */
      status_code: number;
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
 * Type map of all available tool input types for toolkit "INFLUXDB_CLOUD".
 */
export type INFLUXDB_CLOUD_TOOL_INPUTS = {
  ADD_DASHBOARD_CELL: INFLUXDB_CLOUD_ADD_DASHBOARD_CELL_INPUT
  DELETE_USER: INFLUXDB_CLOUD_DELETE_USER_INPUT
  GENERATE_QUERY_AST: INFLUXDB_CLOUD_GENERATE_QUERY_AST_INPUT
  GET_DBRP: INFLUXDB_CLOUD_GET_DBRP_INPUT
  LIST_ROUTES: INFLUXDB_CLOUD_LIST_ROUTES_INPUT
  SIGNIN: INFLUXDB_CLOUD_SIGNIN_INPUT
  SIGNOUT: INFLUXDB_CLOUD_SIGNOUT_INPUT
  UPDATE_DBRP: INFLUXDB_CLOUD_UPDATE_DBRP_INPUT
  WRITE_DATA: INFLUXDB_CLOUD_WRITE_DATA_INPUT
}

/**
 * Type map of all available tool input types for toolkit "INFLUXDB_CLOUD".
 */
export type INFLUXDB_CLOUD_TOOL_OUTPUTS = {
  ADD_DASHBOARD_CELL: INFLUXDB_CLOUD_ADD_DASHBOARD_CELL_OUTPUT
  DELETE_USER: INFLUXDB_CLOUD_DELETE_USER_OUTPUT
  GENERATE_QUERY_AST: INFLUXDB_CLOUD_GENERATE_QUERY_AST_OUTPUT
  GET_DBRP: INFLUXDB_CLOUD_GET_DBRP_OUTPUT
  LIST_ROUTES: INFLUXDB_CLOUD_LIST_ROUTES_OUTPUT
  SIGNIN: INFLUXDB_CLOUD_SIGNIN_OUTPUT
  SIGNOUT: INFLUXDB_CLOUD_SIGNOUT_OUTPUT
  UPDATE_DBRP: INFLUXDB_CLOUD_UPDATE_DBRP_OUTPUT
  WRITE_DATA: INFLUXDB_CLOUD_WRITE_DATA_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's INFLUXDB_CLOUD toolkit.
 */
export const INFLUXDB_CLOUD = {
  slug: "influxdb_cloud",
  tools: {
    /**
     * Tool to add a cell to a dashboard. Use when you want to add or copy a cell to an existing dashboard after verifying the dashboard exists.
     */
    ADD_DASHBOARD_CELL: "INFLUXDB_CLOUD_ADD_DASHBOARD_CELL",
    /**
     * Tool to delete a user by ID. Use when you need to remove a user in InfluxDB Cloud; requires an operator token.
     */
    DELETE_USER: "INFLUXDB_CLOUD_DELETE_USER",
    /**
     * Tool to generate a Flux query Abstract Syntax Tree (AST). Use when you need to inspect the structure of a Flux script. Use after composing your Flux query; this validates syntax and returns the AST (does not check semantic correctness).
     */
    GENERATE_QUERY_AST: "INFLUXDB_CLOUD_GENERATE_QUERY_AST",
    /**
     * Tool to retrieve a DBRP mapping by ID. Use when you need to fetch details of a specific DBRP mapping in InfluxDB Cloud.
     */
    GET_DBRP: "INFLUXDB_CLOUD_GET_DBRP",
    /**
     * Tool to list top-level API routes. Use when you need to discover all available API endpoints for an instance. Call after setting a valid authorization token.
     */
    LIST_ROUTES: "INFLUXDB_CLOUD_LIST_ROUTES",
    /**
     * Tool to create a user session by authenticating credentials. Use when initiating a user session after collecting credentials.
     */
    SIGNIN: "INFLUXDB_CLOUD_SIGNIN",
    /**
     * Tool to expire a user session using a session cookie. Use when ending an authenticated session after signin.
     */
    SIGNOUT: "INFLUXDB_CLOUD_SIGNOUT",
    /**
     * Tool to update a DBRP mapping's default and retention policy. Use when modifying an existing DBRP mapping after initial creation.
     */
    UPDATE_DBRP: "INFLUXDB_CLOUD_UPDATE_DBRP",
    /**
     * Tool to write line protocol data to a bucket. Use when ingesting asynchronous line protocol points after formatting the payload.
     */
    WRITE_DATA: "INFLUXDB_CLOUD_WRITE_DATA",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "INFLUXDB_CLOUD".
 */
export type INFLUXDB_CLOUD_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "INFLUXDB_CLOUD".
 */
export type INFLUXDB_CLOUD_TRIGGER_EVENTS = {}
