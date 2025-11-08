// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_CONTEXTS_CREATE tool input.
 */
type BROWSERBASE_TOOL_CONTEXTS_CREATE_INPUT = {
  /**
   * Project Id
   * @description The Project ID. Can be found in Settings.
   */
  projectId?: string;
};

/**
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_CONTEXTS_CREATE tool output.
 */
type BROWSERBASE_TOOL_CONTEXTS_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cipher Algorithm
       * @description The cipher algorithm used to encrypt the user-data-directory.
       * @constant
       */
      cipherAlgorithm: "AES-256-CBC";
      /**
       * Id
       * @description The new context's ID.
       */
      id: string;
      /**
       * Initialization Vector Size
       * @description The initialization vector size used to encrypt the user-data-directory.
       */
      initializationVectorSize: number;
      /**
       * Public Key
       * @description The public key to encrypt the user-data-directory.
       */
      publicKey: string;
      /**
       * Upload Url
       * @description An upload URL to upload a custom user-data-directory.
       */
      uploadUrl: string;
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
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_CONTEXTS_GET tool input.
 */
type BROWSERBASE_TOOL_CONTEXTS_GET_INPUT = {
  /**
   * Id
   * @description Unique identifier of the browser context to retrieve
   */
  id?: string;
};

/**
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_CONTEXTS_GET tool output.
 */
type BROWSERBASE_TOOL_CONTEXTS_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the context was created
       */
      createdAt: string;
      /**
       * Id
       * @description Context's unique ID
       */
      id: string;
      /**
       * Project Id
       * @description ID of the project linked to this context
       */
      projectId: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the context was last updated
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
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_CONTEXTS_UPDATE tool input.
 */
type BROWSERBASE_TOOL_CONTEXTS_UPDATE_INPUT = {
  /**
   * Id
   * @description The unique identifier of the browser context to update.
   */
  id?: string;
};

/**
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_CONTEXTS_UPDATE tool output.
 */
type BROWSERBASE_TOOL_CONTEXTS_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cipher Algorithm
       * @description Cipher algorithm used for encryption; currently only AES-256-CBC is supported.
       */
      cipherAlgorithm: string;
      /**
       * Id
       * @description The context ID.
       */
      id: string;
      /**
       * Initialization Vector Size
       * @description Size (in bytes) of the initialization vector for encryption.
       */
      initializationVectorSize: number;
      /**
       * Public Key
       * @description Public key for encrypting the user-data-directory.
       */
      publicKey: string;
      /**
       * Upload Url
       * @description Presigned URL to upload a custom user-data-directory.
       */
      uploadUrl: string;
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
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_CREATE_BROWSER_SESSION tool input.
 */
type BROWSERBASE_TOOL_CREATE_BROWSER_SESSION_INPUT = {
  /**
   * Context Id
   * @description Context ID for session persistence and reuse.
   * @default null
   */
  contextId: string | null;
  /**
   * Extension Id
   * @description The ID of the custom extension to load.
   * @default null
   */
  extensionId: string | null;
  /**
   * Keep Alive
   * @description Whether to keep the session alive after disconnection.
   * @default null
   */
  keepAlive: boolean | null;
  /**
   * Project Id
   * @description Project ID to associate with the browser session.
   */
  projectId?: string;
  /**
   * ProxyConfig
   * @description Optional proxy configuration for the session.
   * @default null
   */
  proxies: {
      /**
       * Host
       * @description Proxy server host, e.g. 'proxy.example.com'.
       */
      host: string;
      /**
       * Password
       * @description Password for proxy authentication.
       * @default null
       */
      password: string | null;
      /**
       * Port
       * @description Proxy server port, e.g. 3128.
       */
      port: number;
      /**
       * Username
       * @description Username for proxy authentication.
       * @default null
       */
      username: string | null;
  } | null;
  /**
   * Region
   * @description Region for the session, e.g. 'us-west-2', 'us-east-1'.
   * @default null
   */
  region: string | null;
  /**
   * Timeout
   * @description Session timeout in seconds.
   * @default null
   */
  timeout: number | null;
  /**
   * User Metadata
   * @description Custom metadata object for the session.
   * @default null
   */
  userMetadata: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_CREATE_BROWSER_SESSION tool output.
 */
type BROWSERBASE_TOOL_CREATE_BROWSER_SESSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connect Url
       * @description WebSocket URL to connect to the session.
       */
      connectUrl: string;
      /**
       * Created At
       * @description ISO datetime when the session was created.
       */
      createdAt: string;
      /**
       * Id
       * @description Session ID of the created browser session.
       */
      id: string;
      /**
       * Selenium Remote Url
       * @description HTTP URL to connect to the session via Selenium.
       */
      seleniumRemoteUrl: string;
      /**
       * Signing Key
       * @description Signing key for connecting to the session.
       */
      signingKey: string;
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
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_SESSIONS_GET tool input.
 */
type BROWSERBASE_TOOL_SESSIONS_GET_INPUT = {
  /**
   * Id
   * @description Unique identifier of the browser session to retrieve
   */
  id?: string;
};

/**
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_SESSIONS_GET tool output.
 */
type BROWSERBASE_TOOL_SESSIONS_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connect Url
       * @description WebSocket URL to connect to the session
       * @default null
       */
      connectUrl: string | null;
      /**
       * Context Id
       * @description ID of the linked context, if provided
       * @default null
       */
      contextId: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the session was created
       */
      createdAt: string;
      /**
       * Ended At
       * @description ISO 8601 timestamp when the session ended, if available
       * @default null
       */
      endedAt: string | null;
      /**
       * Expires At
       * @description ISO 8601 timestamp when the session expires
       */
      expiresAt: string;
      /**
       * Id
       * @description Session's unique ID
       */
      id: string;
      /**
       * Keep Alive
       * @description Whether the session remains alive on disconnections
       */
      keepAlive: boolean;
      /**
       * Project Id
       * @description The Project ID linked to the Session
       */
      projectId: string;
      /**
       * Proxy Bytes
       * @description Bytes used via the proxy during this session
       */
      proxyBytes: number;
      /**
       * Region
       * @description Region in which the session runs
       * @enum {string}
       */
      region: "us-west-2" | "us-east-1" | "eu-central-1" | "ap-southeast-1";
      /**
       * Selenium Remote Url
       * @description HTTP URL to connect to the session via Selenium
       * @default null
       */
      seleniumRemoteUrl: string | null;
      /**
       * Signing Key
       * @description Signing key to use when connecting to the session via HTTP
       * @default null
       */
      signingKey: string | null;
      /**
       * Started At
       * @description ISO 8601 timestamp when the session was started
       */
      startedAt: string;
      /**
       * Status
       * @description Current state of the session
       * @enum {string}
       */
      status: "RUNNING" | "ERROR" | "TIMED_OUT" | "COMPLETED";
      /**
       * Updated At
       * @description ISO 8601 timestamp when the session was last updated
       */
      updatedAt: string;
      /**
       * User Metadata
       * @description Arbitrary user metadata attached to the session, accepts simple JSON types
       */
      userMetadata?: {
          [key: string]: string | number | boolean | null;
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
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_SESSIONS_GET_DEBUG tool input.
 */
type BROWSERBASE_TOOL_SESSIONS_GET_DEBUG_INPUT = {
  /**
   * Id
   * @description Unique identifier of the session to retrieve debug URLs for
   */
  id?: string;
};

/**
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_SESSIONS_GET_DEBUG tool output.
 */
type BROWSERBASE_TOOL_SESSIONS_GET_DEBUG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connect Url
       * @description WebSocket URL to connect to the session
       */
      connectUrl: string;
      /**
       * Selenium Remote Url
       * @description HTTP URL to connect to the session via Selenium
       */
      seleniumRemoteUrl: string;
      /**
       * Signing Key
       * @description Signing key used for HTTP connections to the session
       */
      signingKey: string;
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
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_SESSIONS_GET_DOWNLOADS tool input.
 */
type BROWSERBASE_TOOL_SESSIONS_GET_DOWNLOADS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the session to download artifacts from
   */
  id?: string;
};

/**
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_SESSIONS_GET_DOWNLOADS tool output.
 */
type BROWSERBASE_TOOL_SESSIONS_GET_DOWNLOADS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Type
       * @description MIME type of the downloaded file, typically 'application/zip'
       */
      content_type: string;
      /**
       * File Bytes
       * Format: binary
       * @description Raw bytes of the ZIP archive containing session artifacts
       */
      file_bytes: string;
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
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_SESSIONS_GET_LOGS tool input.
 */
type BROWSERBASE_TOOL_SESSIONS_GET_LOGS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the session to retrieve logs for
   */
  id?: string;
};

/**
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_SESSIONS_GET_LOGS tool output.
 */
type BROWSERBASE_TOOL_SESSIONS_GET_LOGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Frame Id
       * @description Frame identifier for the log event, if applicable
       * @default null
       */
      frameId: string | null;
      /**
       * Loader Id
       * @description Loader identifier for the log event, if applicable
       * @default null
       */
      loaderId: string | null;
      /**
       * Method
       * @description HTTP method of the network call
       */
      method: string;
      /**
       * Page Id
       * @description Identifier of the page where the call occurred
       */
      pageId: number;
      /**
       * Request
       * @description Request details of the network call
       */
      request: {
          /**
           * Params
           * @description Query parameters sent with the request
           */
          params: {
              [key: string]: unknown;
          };
          /**
           * Raw Body
           * @description Raw body content of the request
           */
          rawBody: string;
          /**
           * Timestamp
           * @description Milliseconds elapsed since UNIX epoch for the request timestamp
           */
          timestamp: number;
      };
      /**
       * Response
       * @description Response details of the network call
       */
      response: {
          /**
           * Raw Body
           * @description Raw body content of the response
           */
          rawBody: string;
          /**
           * Result
           * @description Parsed JSON result of the response
           */
          result: {
              [key: string]: unknown;
          };
          /**
           * Timestamp
           * @description Milliseconds elapsed since UNIX epoch for the response timestamp
           */
          timestamp: number;
      };
      /**
       * Session Id
       * @description Session identifier for this log entry
       */
      sessionId: string;
      /**
       * Timestamp
       * @description Milliseconds elapsed since UNIX epoch for this log entry
       */
      timestamp: number;
  }[];
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
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_SESSIONS_LIST tool input.
 */
type BROWSERBASE_TOOL_SESSIONS_LIST_INPUT = {
  /**
   * Q
   * @description Query sessions by user metadata using a JSON string filter.
   * @default null
   */
  q: string | null;
  /**
   * Status
   * @description Filter sessions by status. Available options: RUNNING, ERROR, TIMED_OUT, COMPLETED.
   * @default null
   * @enum {string|null}
   */
  status: "RUNNING" | "ERROR" | "TIMED_OUT" | "COMPLETED" | null;
};

/**
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_SESSIONS_LIST tool output.
 */
type BROWSERBASE_TOOL_SESSIONS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Context Id
       * @description Context ID linked to the session, if provided
       * @default null
       */
      contextId: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the session was created
       */
      createdAt: string;
      /**
       * Ended At
       * @description ISO 8601 timestamp when the session ended, if available
       * @default null
       */
      endedAt: string | null;
      /**
       * Expires At
       * @description ISO 8601 timestamp when the session expires
       */
      expiresAt: string;
      /**
       * Id
       * @description Unique identifier of the session
       */
      id: string;
      /**
       * Keep Alive
       * @description Indicates if the session remains alive on disconnections
       */
      keepAlive: boolean;
      /**
       * Project Id
       * @description Project ID linked to the session
       */
      projectId: string;
      /**
       * Proxy Bytes
       * @description Bytes used via proxy during this session
       */
      proxyBytes: number;
      /**
       * Region
       * @description Region where the session runs
       * @enum {string}
       */
      region: "us-west-2" | "us-east-1" | "eu-central-1" | "ap-southeast-1";
      /**
       * Started At
       * @description ISO 8601 timestamp when the session was started
       */
      startedAt: string;
      /**
       * Status
       * @description Current state of the session
       * @enum {string}
       */
      status: "RUNNING" | "ERROR" | "TIMED_OUT" | "COMPLETED";
      /**
       * Updated At
       * @description ISO 8601 timestamp when the session was last updated
       */
      updatedAt: string;
      /**
       * User Metadata
       * @description Arbitrary user metadata attached to the session, accepts simple JSON types
       */
      userMetadata?: {
          [key: string]: string | number | boolean | null;
      };
  }[];
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
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_SESSIONS_UPDATE tool input.
 */
type BROWSERBASE_TOOL_SESSIONS_UPDATE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the browser session to update
   */
  id?: string;
  /**
   * Project Id
   * @description The Project ID linked to the session
   */
  projectId?: string;
  /**
   * Status
   * @description Set to REQUEST_RELEASE to request that the session complete before its timeout
   * @constant
   */
  status?: "REQUEST_RELEASE";
};

/**
 * Type of BROWSERBASE_TOOL's BROWSERBASE_TOOL_SESSIONS_UPDATE tool output.
 */
type BROWSERBASE_TOOL_SESSIONS_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Context Id
       * @description Context ID linked to the session, if provided
       * @default null
       */
      contextId: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the session was created
       */
      createdAt: string;
      /**
       * Ended At
       * @description ISO 8601 timestamp when the session ended, if available
       * @default null
       */
      endedAt: string | null;
      /**
       * Expires At
       * @description ISO 8601 timestamp when the session expires
       */
      expiresAt: string;
      /**
       * Id
       * @description Session's unique ID
       */
      id: string;
      /**
       * Keep Alive
       * @description Indicates if the session remains alive on disconnections
       */
      keepAlive: boolean;
      /**
       * Project Id
       * @description Project ID linked to the session
       */
      projectId: string;
      /**
       * Proxy Bytes
       * @description Bytes used via proxy during this session
       */
      proxyBytes: number;
      /**
       * Region
       * @description Region where the session runs
       * @enum {string}
       */
      region: "us-west-2" | "us-east-1" | "eu-central-1" | "ap-southeast-1";
      /**
       * Started At
       * @description ISO 8601 timestamp when the session was started
       */
      startedAt: string;
      /**
       * Status
       * @description Current state of the session
       * @enum {string}
       */
      status: "RUNNING" | "ERROR" | "TIMED_OUT" | "COMPLETED";
      /**
       * Updated At
       * @description ISO 8601 timestamp when the session was last updated
       */
      updatedAt: string;
      /**
       * User Metadata
       * @description Arbitrary user metadata attached to the session
       */
      userMetadata?: {
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
 * Type map of all available tool input types for toolkit "BROWSERBASE_TOOL".
 */
export type BROWSERBASE_TOOL_TOOL_INPUTS = {
  CONTEXTS_CREATE: BROWSERBASE_TOOL_CONTEXTS_CREATE_INPUT
  CONTEXTS_GET: BROWSERBASE_TOOL_CONTEXTS_GET_INPUT
  CONTEXTS_UPDATE: BROWSERBASE_TOOL_CONTEXTS_UPDATE_INPUT
  CREATE_BROWSER_SESSION: BROWSERBASE_TOOL_CREATE_BROWSER_SESSION_INPUT
  SESSIONS_GET: BROWSERBASE_TOOL_SESSIONS_GET_INPUT
  SESSIONS_GET_DEBUG: BROWSERBASE_TOOL_SESSIONS_GET_DEBUG_INPUT
  SESSIONS_GET_DOWNLOADS: BROWSERBASE_TOOL_SESSIONS_GET_DOWNLOADS_INPUT
  SESSIONS_GET_LOGS: BROWSERBASE_TOOL_SESSIONS_GET_LOGS_INPUT
  SESSIONS_LIST: BROWSERBASE_TOOL_SESSIONS_LIST_INPUT
  SESSIONS_UPDATE: BROWSERBASE_TOOL_SESSIONS_UPDATE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BROWSERBASE_TOOL".
 */
export type BROWSERBASE_TOOL_TOOL_OUTPUTS = {
  CONTEXTS_CREATE: BROWSERBASE_TOOL_CONTEXTS_CREATE_OUTPUT
  CONTEXTS_GET: BROWSERBASE_TOOL_CONTEXTS_GET_OUTPUT
  CONTEXTS_UPDATE: BROWSERBASE_TOOL_CONTEXTS_UPDATE_OUTPUT
  CREATE_BROWSER_SESSION: BROWSERBASE_TOOL_CREATE_BROWSER_SESSION_OUTPUT
  SESSIONS_GET: BROWSERBASE_TOOL_SESSIONS_GET_OUTPUT
  SESSIONS_GET_DEBUG: BROWSERBASE_TOOL_SESSIONS_GET_DEBUG_OUTPUT
  SESSIONS_GET_DOWNLOADS: BROWSERBASE_TOOL_SESSIONS_GET_DOWNLOADS_OUTPUT
  SESSIONS_GET_LOGS: BROWSERBASE_TOOL_SESSIONS_GET_LOGS_OUTPUT
  SESSIONS_LIST: BROWSERBASE_TOOL_SESSIONS_LIST_OUTPUT
  SESSIONS_UPDATE: BROWSERBASE_TOOL_SESSIONS_UPDATE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BROWSERBASE_TOOL toolkit.
 */
export const BROWSERBASE_TOOL = {
  slug: "browserbase_tool",
  tools: {
    /**
     * Tool to create a new browser context. use when you need to obtain upload credentials for a custom user-data-directory in a project.
     */
    CONTEXTS_CREATE: "BROWSERBASE_TOOL_CONTEXTS_CREATE",
    /**
     * Tool to retrieve details of a specific browser context. use when you have a context id and need its metadata.
     */
    CONTEXTS_GET: "BROWSERBASE_TOOL_CONTEXTS_GET",
    /**
     * Tool to update a specific browser context. use when you need fresh upload url and encryption details for an existing context, after obtaining a valid context id.
     */
    CONTEXTS_UPDATE: "BROWSERBASE_TOOL_CONTEXTS_UPDATE",
    /**
     * Tool to create a new browser session. use when you need an isolated browser context before performing any page interactions.
     */
    CREATE_BROWSER_SESSION: "BROWSERBASE_TOOL_CREATE_BROWSER_SESSION",
    /**
     * Tool to retrieve details of a specific browser session. use when you have a session id and need its metadata (status, urls, timestamps).
     */
    SESSIONS_GET: "BROWSERBASE_TOOL_SESSIONS_GET",
    /**
     * Tool to retrieve live debug urls for a specific session. use when you need to connect to a running session for debugging.
     */
    SESSIONS_GET_DEBUG: "BROWSERBASE_TOOL_SESSIONS_GET_DEBUG",
    /**
     * Tool to download files from a specific session. use after session completion to retrieve all generated artifacts in a zip archive.
     */
    SESSIONS_GET_DOWNLOADS: "BROWSERBASE_TOOL_SESSIONS_GET_DOWNLOADS",
    /**
     * Tool to retrieve logs of a specific session. use after actions in a session to inspect network events and data exchange.
     */
    SESSIONS_GET_LOGS: "BROWSERBASE_TOOL_SESSIONS_GET_LOGS",
    /**
     * Tool to list all browser sessions. use when you need to retrieve sessions with optional filtering by status or metadata query.
     */
    SESSIONS_LIST: "BROWSERBASE_TOOL_SESSIONS_LIST",
    /**
     * Tool to update the status of a specific browser session. use when you need to request session completion before timeout to avoid additional charges.
     */
    SESSIONS_UPDATE: "BROWSERBASE_TOOL_SESSIONS_UPDATE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BROWSERBASE_TOOL".
 */
export type BROWSERBASE_TOOL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BROWSERBASE_TOOL".
 */
export type BROWSERBASE_TOOL_TRIGGER_EVENTS = {}
