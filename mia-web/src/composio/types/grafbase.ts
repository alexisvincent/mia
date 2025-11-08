// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GRAFBASE's GRAFBASE_DELETE_API_KEY tool input.
 */
type GRAFBASE_DELETE_API_KEY_INPUT = {
  /**
   * Key Id
   * @description The unique identifier of the Grafbase API key to delete
   */
  key_id?: string;
};

/**
 * Type of GRAFBASE's GRAFBASE_DELETE_API_KEY tool output.
 */
type GRAFBASE_DELETE_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the Grafbase API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the API key was successfully deleted
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
 * Type of GRAFBASE's GRAFBASE_DELETE_AUDIT_LOG tool input.
 */
type GRAFBASE_DELETE_AUDIT_LOG_INPUT = {
  /**
   * Log Id
   * @description ID of the audit log entry to delete
   */
  log_id?: string;
};

/**
 * Type of GRAFBASE's GRAFBASE_DELETE_AUDIT_LOG tool output.
 */
type GRAFBASE_DELETE_AUDIT_LOG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Detail
       * @description Response detail or message from Grafbase API
       * @default null
       */
      detail: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by Grafbase API
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
 * Type of GRAFBASE's GRAFBASE_DELETE_EXTENSION tool input.
 */
type GRAFBASE_DELETE_EXTENSION_INPUT = {
  /**
   * Extension Id
   * @description The unique identifier of the extension to delete
   */
  extension_id?: string;
};

/**
 * Type of GRAFBASE's GRAFBASE_DELETE_EXTENSION tool output.
 */
type GRAFBASE_DELETE_EXTENSION_OUTPUT = {
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
 * Type of GRAFBASE's GRAFBASE_DELETE_MCP_SERVER tool input.
 */
type GRAFBASE_DELETE_MCP_SERVER_INPUT = {
  /**
   * Server Id
   * @description The unique identifier of the MCP server to delete.
   */
  server_id?: string;
};

/**
 * Type of GRAFBASE's GRAFBASE_DELETE_MCP_SERVER tool output.
 */
type GRAFBASE_DELETE_MCP_SERVER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation or error message returned by the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the deletion was successful.
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
 * Type of GRAFBASE's GRAFBASE_DELETE_SCHEMA tool input.
 */
type GRAFBASE_DELETE_SCHEMA_INPUT = {
  /**
   * Schema Id
   * @description ID of the schema to delete
   */
  schema_id?: string;
};

/**
 * Type of GRAFBASE's GRAFBASE_DELETE_SCHEMA tool output.
 */
type GRAFBASE_DELETE_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message returned by the API
       * @default null
       */
      message: string | null;
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
 * Type of GRAFBASE's GRAFBASE_DELETE_SCHEMA_CHECK tool input.
 */
type GRAFBASE_DELETE_SCHEMA_CHECK_INPUT = {
  /**
   * Check Id
   * @description ID of the schema check to delete
   */
  check_id?: string;
};

/**
 * Type of GRAFBASE's GRAFBASE_DELETE_SCHEMA_CHECK tool output.
 */
type GRAFBASE_DELETE_SCHEMA_CHECK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the deleted schema check
       */
      id: string;
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
 * Type of GRAFBASE's GRAFBASE_DISABLE_MCP tool input.
 */
type GRAFBASE_DISABLE_MCP_INPUT = {
  /**
   * Dry Run
   * @description If true, indicates intention of a dry run; API call is still executed, used for message annotation only.
   * @default false
   */
  dry_run: boolean | null;
  /**
   * Reason
   * @description Optional reason for disabling MCP; used for message annotation only.
   * @default null
   */
  reason: string | null;
};

/**
 * Type of GRAFBASE's GRAFBASE_DISABLE_MCP tool output.
 */
type GRAFBASE_DISABLE_MCP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Information about MCP disable action
       */
      message: string;
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
 * Type of GRAFBASE's GRAFBASE_ENABLE_MCP tool input.
 */
type GRAFBASE_ENABLE_MCP_INPUT = {
  /**
   * Dry Run
   * @description If true, indicates intention of a dry run; API call is still executed, used for message annotation only.
   * @default false
   */
  dry_run: boolean | null;
  /**
   * Enabled
   * @description Target enabled state; if not provided, no body field is sent.
   * @default null
   */
  enabled: boolean | null;
  /**
   * Reason
   * @description Optional reason/context for enabling MCP; used for message annotation only.
   * @default null
   */
  reason: string | null;
  /**
   * Server Url
   * @description Optional MCP server URL; if provided and the endpoint accepts a body, it may be sent.
   * @default null
   */
  server_url: string | null;
};

/**
 * Type of GRAFBASE's GRAFBASE_ENABLE_MCP tool output.
 */
type GRAFBASE_ENABLE_MCP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Information about MCP enable action
       */
      message: string;
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
 * Type of GRAFBASE's GRAFBASE_GET_AUDIT_LOG tool input.
 */
type GRAFBASE_GET_AUDIT_LOG_INPUT = {
  /**
   * Log Id
   * @description ID of the audit log entry to retrieve
   */
  log_id?: string;
};

/**
 * Type of GRAFBASE's GRAFBASE_GET_AUDIT_LOG tool output.
 */
type GRAFBASE_GET_AUDIT_LOG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entry
       * @description Complete audit log entry as returned by Grafbase API
       */
      entry: {
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
 * Type of GRAFBASE's GRAFBASE_GET_FEDERATED_SCHEMA tool input.
 */
type GRAFBASE_GET_FEDERATED_SCHEMA_INPUT = {
  /**
   * Branch
   * @description Branch name to retrieve the federated schema for (defaults to 'main' if not provided)
   * @default null
   */
  branch: string | null;
};

/**
 * Type of GRAFBASE's GRAFBASE_GET_FEDERATED_SCHEMA tool output.
 */
type GRAFBASE_GET_FEDERATED_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Schema
       * @description Composed federated graph schema in SDL format
       */
      schema: string;
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
 * Type of GRAFBASE's GRAFBASE_GET_SCHEMA_CHECK tool input.
 */
type GRAFBASE_GET_SCHEMA_CHECK_INPUT = {
  /**
   * Check Id
   * @description ID of the schema check to retrieve
   */
  check_id?: string;
};

/**
 * Type of GRAFBASE's GRAFBASE_GET_SCHEMA_CHECK tool output.
 */
type GRAFBASE_GET_SCHEMA_CHECK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Check Id
       * @description Unique identifier of the schema check result
       */
      check_id: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the check was created
       */
      created_at: string;
      /**
       * Errors
       * @description List of errors found during the schema check, if any
       * @default null
       */
      errors: {
          /**
           * Column
           * @description Column number where the error occurred, if available
           * @default null
           */
          column: number | null;
          /**
           * Line
           * @description Line number where the error occurred, if available
           * @default null
           */
          line: number | null;
          /**
           * Message
           * @description Error message found during the schema check
           */
          message: string;
      }[] | null;
      /**
       * Schema Id
       * @description ID of the schema this check belongs to
       */
      schema_id: string;
      /**
       * Status
       * @description Status of the schema check, e.g., passed, failed, or pending
       */
      status: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the check was last updated
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
 * Type of GRAFBASE's GRAFBASE_GET_SUBGRAPH_SCHEMA tool input.
 */
type GRAFBASE_GET_SUBGRAPH_SCHEMA_INPUT = {
  /**
   * Name
   * @description The unique name of the subgraph to retrieve the schema for
   */
  name?: string;
};

/**
 * Type of GRAFBASE's GRAFBASE_GET_SUBGRAPH_SCHEMA tool output.
 */
type GRAFBASE_GET_SUBGRAPH_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Schema
       * @description The GraphQL SDL schema of the specified subgraph
       */
      schema: string;
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
 * Type of GRAFBASE's GRAFBASE_LIST_API_KEYS tool input.
 */
type GRAFBASE_LIST_API_KEYS_INPUT = {
  /**
   * After
   * @description Pagination cursor indicating where to resume (server may ignore)
   * @default null
   */
  after: string | null;
  /**
   * Include Revoked
   * @description Whether to include revoked API keys in the result
   * @default null
   */
  include_revoked: boolean | null;
  /**
   * Limit
   * @description Maximum number of API keys to return (server may ignore)
   * @default null
   */
  limit: number | null;
  /**
   * Search
   * @description Case-insensitive substring to match against API key names
   * @default null
   */
  search: string | null;
};

/**
 * Type of GRAFBASE's GRAFBASE_LIST_API_KEYS tool output.
 */
type GRAFBASE_LIST_API_KEYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Keys
       * @description List of API keys for the project
       */
      api_keys: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the API key was created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the API key
           */
          id: string;
          /**
           * Key
           * @description The actual API key string
           */
          key: string;
          /**
           * Name
           * @description Name given to the API key
           */
          name: string;
          /**
           * Revoked
           * @description Whether the API key has been revoked
           */
          revoked: boolean;
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
 * Type of GRAFBASE's GRAFBASE_LIST_AUDIT_LOGS tool input.
 */
type GRAFBASE_LIST_AUDIT_LOGS_INPUT = {
  /**
   * Action
   * @description Filter by action type (if supported)
   * @default null
   */
  action: string | null;
  /**
   * Actor User Email
   * @description Filter by actor user email (if supported)
   * @default null
   */
  actor_user_email: string | null;
  /**
   * Cursor
   * @description Pagination cursor (if supported)
   * @default null
   */
  cursor: string | null;
  /**
   * From Timestamp
   * @description Filter logs from this ISO 8601 timestamp (if supported)
   * @default null
   */
  from_timestamp: string | null;
  /**
   * Limit
   * @description Maximum number of logs to return (if supported)
   * @default null
   */
  limit: number | null;
  /**
   * To Timestamp
   * @description Filter logs up to this ISO 8601 timestamp (if supported)
   * @default null
   */
  to_timestamp: string | null;
};

/**
 * Type of GRAFBASE's GRAFBASE_LIST_AUDIT_LOGS tool output.
 */
type GRAFBASE_LIST_AUDIT_LOGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Logs
       * @description List of audit log entries
       */
      logs: {
          /**
           * Action
           * @description The specific action taken
           */
          action: string;
          /**
           * Actor Access Token Id
           * @description UUID of the access token used
           * @default null
           */
          actor_access_token_id: string | null;
          /**
           * Actor Access Token Name
           * @description Name of the access token used
           * @default null
           */
          actor_access_token_name: string | null;
          /**
           * Actor User Email
           * @description Email of the user who performed the action
           * @default null
           */
          actor_user_email: string | null;
          /**
           * Actor User Id
           * @description UUID of the user who performed the action
           * @default null
           */
          actor_user_id: string | null;
          /**
           * Actor User Name
           * @description Username of the user who performed the action
           * @default null
           */
          actor_user_name: string | null;
          /**
           * Next
           * @description Object describing the new state, if applicable
           * @default null
           */
          next: {
              [key: string]: unknown;
          } | null;
          /**
           * Previous
           * @description Object describing the previous state, if applicable
           * @default null
           */
          previous: {
              [key: string]: unknown;
          } | null;
          /**
           * Timestamp
           * @description Time at which the event occurred (ISO 8601 string)
           */
          timestamp: string;
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
 * Type of GRAFBASE's GRAFBASE_LIST_EXTENSIONS tool input.
 */
type GRAFBASE_LIST_EXTENSIONS_INPUT = {
  /**
   * Include Disabled
   * @description Whether to include disabled extensions in the results
   * @default null
   */
  include_disabled: boolean | null;
  /**
   * Limit
   * @description Optional maximum number of extensions to return
   * @default null
   */
  limit: number | null;
  /**
   * Q
   * @description Optional search query to filter extensions by name/description
   * @default null
   */
  q: string | null;
};

/**
 * Type of GRAFBASE's GRAFBASE_LIST_EXTENSIONS tool output.
 */
type GRAFBASE_LIST_EXTENSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Extensions
       * @description List of configured extensions
       */
      extensions: {
          /**
           * Description
           * @description Description of the extension
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the extension
           */
          id: string;
          /**
           * Name
           * @description Name of the extension
           */
          name: string;
          /**
           * Url
           * @description Source or endpoint URL of the extension
           */
          url: string;
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
 * Type of GRAFBASE's GRAFBASE_LIST_MCP_SERVERS tool input.
 */
type GRAFBASE_LIST_MCP_SERVERS_INPUT = {
  /**
   * Include Disabled
   * @description Include disabled servers if True.
   * @default null
   */
  include_disabled: boolean | null;
  /**
   * Search
   * @description Search term to filter servers by id or url (not applied server-side).
   * @default null
   */
  search: string | null;
};

/**
 * Type of GRAFBASE's GRAFBASE_LIST_MCP_SERVERS tool output.
 */
type GRAFBASE_LIST_MCP_SERVERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Servers
       * @description List of MCP servers configured for the project
       */
      servers: {
          /**
           * Id
           * @description Unique identifier of the MCP server
           */
          id: string;
          /**
           * Url
           * @description URL of the MCP server endpoint
           */
          url: string;
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
 * Type of GRAFBASE's GRAFBASE_LIST_SCHEMAS tool input.
 */
type GRAFBASE_LIST_SCHEMAS_INPUT = object;

/**
 * Type of GRAFBASE's GRAFBASE_LIST_SCHEMAS tool output.
 */
type GRAFBASE_LIST_SCHEMAS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Schemas
       * @description List of schema registry entries
       */
      schemas: {
          /**
           * Created At
           * @description Time when the schema was created (ISO 8601)
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the schema
           */
          id: string;
          /**
           * Name
           * @description Name of the schema
           */
          name: string;
          /**
           * Updated At
           * @description Time when the schema was last updated (ISO 8601)
           */
          updatedAt: string;
          /**
           * Url
           * @description URL to access the schema
           * @default null
           */
          url: string | null;
          /**
           * Version
           * @description Version of the schema
           * @default null
           */
          version: string | null;
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
 * Type of GRAFBASE's GRAFBASE_LIST_SCHEMA_CHECKS tool input.
 */
type GRAFBASE_LIST_SCHEMA_CHECKS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor (if supported)
   * @default null
   */
  cursor: string | null;
  /**
   * Include Errors
   * @description Include error details if supported
   * @default null
   */
  includeErrors: boolean | null;
  /**
   * Limit
   * @description Maximum number of checks to return (if supported)
   * @default null
   */
  limit: number | null;
  /**
   * Search
   * @description Free-text search across summaries or errors (if supported)
   * @default null
   */
  search: string | null;
  /**
   * Status
   * @description Filter checks by status (e.g., passed, failed)
   * @default null
   */
  status: string | null;
};

/**
 * Type of GRAFBASE's GRAFBASE_LIST_SCHEMA_CHECKS tool output.
 */
type GRAFBASE_LIST_SCHEMA_CHECKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Checks
       * @description List of schema check entries
       */
      checks: {
          /**
           * Created At
           * @description Timestamp when the check was performed (ISO 8601)
           */
          created_at: string;
          /**
           * Errors
           * @description List of errors detected during the check, if any
           * @default null
           */
          errors: string[] | null;
          /**
           * Id
           * @description Unique identifier of the schema check
           */
          id: string;
          /**
           * Status
           * @description Result of the schema check (e.g., 'passed', 'failed')
           */
          status: string;
          /**
           * Summary
           * @description Optional summary description of the schema check
           * @default null
           */
          summary: string | null;
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
 * Type of GRAFBASE's GRAFBASE_LIST_SUBGRAPHS tool input.
 */
type GRAFBASE_LIST_SUBGRAPHS_INPUT = {
  /**
   * Branch
   * @description Branch name to list subgraphs for (defaults to 'main' if not provided)
   * @default null
   */
  branch: string | null;
};

/**
 * Type of GRAFBASE's GRAFBASE_LIST_SUBGRAPHS tool output.
 */
type GRAFBASE_LIST_SUBGRAPHS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subgraphs
       * @description List of published subgraphs in the specified branch
       */
      subgraphs: {
          /**
           * Name
           * @description Name of the subgraph
           */
          name: string;
          /**
           * Schema Tag
           * @description Optional schema tag or version identifier for the subgraph
           * @default null
           */
          schemaTag: string | null;
          /**
           * Url
           * @description URL where the subgraph is accessible
           */
          url: string;
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
 * Type map of all available tool input types for toolkit "GRAFBASE".
 */
export type GRAFBASE_TOOL_INPUTS = {
  DELETE_API_KEY: GRAFBASE_DELETE_API_KEY_INPUT
  DELETE_AUDIT_LOG: GRAFBASE_DELETE_AUDIT_LOG_INPUT
  DELETE_EXTENSION: GRAFBASE_DELETE_EXTENSION_INPUT
  DELETE_MCP_SERVER: GRAFBASE_DELETE_MCP_SERVER_INPUT
  DELETE_SCHEMA: GRAFBASE_DELETE_SCHEMA_INPUT
  DELETE_SCHEMA_CHECK: GRAFBASE_DELETE_SCHEMA_CHECK_INPUT
  DISABLE_MCP: GRAFBASE_DISABLE_MCP_INPUT
  ENABLE_MCP: GRAFBASE_ENABLE_MCP_INPUT
  GET_AUDIT_LOG: GRAFBASE_GET_AUDIT_LOG_INPUT
  GET_FEDERATED_SCHEMA: GRAFBASE_GET_FEDERATED_SCHEMA_INPUT
  GET_SCHEMA_CHECK: GRAFBASE_GET_SCHEMA_CHECK_INPUT
  GET_SUBGRAPH_SCHEMA: GRAFBASE_GET_SUBGRAPH_SCHEMA_INPUT
  LIST_API_KEYS: GRAFBASE_LIST_API_KEYS_INPUT
  LIST_AUDIT_LOGS: GRAFBASE_LIST_AUDIT_LOGS_INPUT
  LIST_EXTENSIONS: GRAFBASE_LIST_EXTENSIONS_INPUT
  LIST_MCP_SERVERS: GRAFBASE_LIST_MCP_SERVERS_INPUT
  LIST_SCHEMAS: GRAFBASE_LIST_SCHEMAS_INPUT
  LIST_SCHEMA_CHECKS: GRAFBASE_LIST_SCHEMA_CHECKS_INPUT
  LIST_SUBGRAPHS: GRAFBASE_LIST_SUBGRAPHS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GRAFBASE".
 */
export type GRAFBASE_TOOL_OUTPUTS = {
  DELETE_API_KEY: GRAFBASE_DELETE_API_KEY_OUTPUT
  DELETE_AUDIT_LOG: GRAFBASE_DELETE_AUDIT_LOG_OUTPUT
  DELETE_EXTENSION: GRAFBASE_DELETE_EXTENSION_OUTPUT
  DELETE_MCP_SERVER: GRAFBASE_DELETE_MCP_SERVER_OUTPUT
  DELETE_SCHEMA: GRAFBASE_DELETE_SCHEMA_OUTPUT
  DELETE_SCHEMA_CHECK: GRAFBASE_DELETE_SCHEMA_CHECK_OUTPUT
  DISABLE_MCP: GRAFBASE_DISABLE_MCP_OUTPUT
  ENABLE_MCP: GRAFBASE_ENABLE_MCP_OUTPUT
  GET_AUDIT_LOG: GRAFBASE_GET_AUDIT_LOG_OUTPUT
  GET_FEDERATED_SCHEMA: GRAFBASE_GET_FEDERATED_SCHEMA_OUTPUT
  GET_SCHEMA_CHECK: GRAFBASE_GET_SCHEMA_CHECK_OUTPUT
  GET_SUBGRAPH_SCHEMA: GRAFBASE_GET_SUBGRAPH_SCHEMA_OUTPUT
  LIST_API_KEYS: GRAFBASE_LIST_API_KEYS_OUTPUT
  LIST_AUDIT_LOGS: GRAFBASE_LIST_AUDIT_LOGS_OUTPUT
  LIST_EXTENSIONS: GRAFBASE_LIST_EXTENSIONS_OUTPUT
  LIST_MCP_SERVERS: GRAFBASE_LIST_MCP_SERVERS_OUTPUT
  LIST_SCHEMAS: GRAFBASE_LIST_SCHEMAS_OUTPUT
  LIST_SCHEMA_CHECKS: GRAFBASE_LIST_SCHEMA_CHECKS_OUTPUT
  LIST_SUBGRAPHS: GRAFBASE_LIST_SUBGRAPHS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GRAFBASE toolkit.
 */
export const GRAFBASE = {
  slug: "grafbase",
  tools: {
    /**
     * Tool to delete an existing API key. Use after confirming the key ID to revoke access.
     */
    DELETE_API_KEY: "GRAFBASE_DELETE_API_KEY",
    /**
     * Tool to delete a specific Grafbase audit log entry. Note: As of current Grafbase public documentation, there is no documented API to delete audit logs programmatically. This action will attempt a best-effort REST DELETE to `/audit-logs/{id}` and, if unsupported or not found, it will gracefully fall back to validating connectivity with the GraphQL Management API and return a structured response instead of failing.
     */
    DELETE_AUDIT_LOG: "GRAFBASE_DELETE_AUDIT_LOG",
    /**
     * Tool to delete an extension configuration. Use after confirming the extension_id to remove the extension.
     */
    DELETE_EXTENSION: "GRAFBASE_DELETE_EXTENSION",
    /**
     * Tool to delete a Grafbase MCP server configuration by its unique ID. Use after confirming the server ID to remove an existing MCP server.
     */
    DELETE_MCP_SERVER: "GRAFBASE_DELETE_MCP_SERVER",
    /**
     * Tool to delete a Grafbase schema. Use when you need to remove a specific schema from the registry after confirming its ID.
     */
    DELETE_SCHEMA: "GRAFBASE_DELETE_SCHEMA",
    /**
     * Tool to delete a Grafbase schema check. Use when you need to remove a specific schema check by its ID after reviewing the registry.
     */
    DELETE_SCHEMA_CHECK: "GRAFBASE_DELETE_SCHEMA_CHECK",
    /**
     * Tool to disable the Model Context Protocol server. Use when you need to turn off MCP via API after it has been enabled.
     */
    DISABLE_MCP: "GRAFBASE_DISABLE_MCP",
    /**
     * Tool to enable the Model Context Protocol (MCP) server for a Grafbase project. Use when you need to activate MCP support; if the API endpoint is not supported, this returns guidance for enabling via configuration.
     */
    ENABLE_MCP: "GRAFBASE_ENABLE_MCP",
    /**
     * Tool to retrieve a specific Grafbase audit log entry. Use after confirming the audit log ID exists.
     */
    GET_AUDIT_LOG: "GRAFBASE_GET_AUDIT_LOG",
    /**
     * Tool to retrieve the composed federated graph schema. Use after deploying your federated graph when you need the full SDL.
     */
    GET_FEDERATED_SCHEMA: "GRAFBASE_GET_FEDERATED_SCHEMA",
    /**
     * Tool to retrieve the result of a schema check by its ID. Use when you need to inspect a specific schema check after running a check via CLI or API.
     */
    GET_SCHEMA_CHECK: "GRAFBASE_GET_SCHEMA_CHECK",
    /**
     * Tool to retrieve the GraphQL SDL of a specific subgraph. Use after confirming the subgraph name to inspect its schema.
     */
    GET_SUBGRAPH_SCHEMA: "GRAFBASE_GET_SUBGRAPH_SCHEMA",
    /**
     * Tool to list all API keys for a project. Use after authenticating with a valid token to retrieve the project’s API keys.
     */
    LIST_API_KEYS: "GRAFBASE_LIST_API_KEYS",
    /**
     * Tool to list all audit logs for a project. Use when you need to retrieve historical events (up to 90 days). Note: As of current Grafbase public documentation, there is no documented API to list audit logs programmatically. This action will attempt a best-effort REST endpoint and gracefully fall back to returning an empty list after validating connectivity/authentication with the GraphQL Management API.
     */
    LIST_AUDIT_LOGS: "GRAFBASE_LIST_AUDIT_LOGS",
    /**
     * Tool to list all extensions configured for a Grafbase project. Use after confirming project access when retrieving configured extensions programmatically.
     */
    LIST_EXTENSIONS: "GRAFBASE_LIST_EXTENSIONS",
    /**
     * Tool to list all MCP servers configured for a project. Use when you need to retrieve existing MCP server configurations.
     */
    LIST_MCP_SERVERS: "GRAFBASE_LIST_MCP_SERVERS",
    /**
     * Tool to list all Grafbase schemas. Use when you need to retrieve all schemas in the registry.
     */
    LIST_SCHEMAS: "GRAFBASE_LIST_SCHEMAS",
    /**
     * Tool to list all Grafbase schema checks for a project. Use when you need to review past schema validation runs.
     */
    LIST_SCHEMA_CHECKS: "GRAFBASE_LIST_SCHEMA_CHECKS",
    /**
     * Tool to list published subgraphs in a branch. Use when you need to retrieve endpoints of all subgraphs for a given branch.
     */
    LIST_SUBGRAPHS: "GRAFBASE_LIST_SUBGRAPHS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GRAFBASE".
 */
export type GRAFBASE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GRAFBASE".
 */
export type GRAFBASE_TRIGGER_EVENTS = {}
