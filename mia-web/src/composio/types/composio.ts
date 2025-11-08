// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of COMPOSIO's COMPOSIO_ASK_ORACLE tool input.
 */
type COMPOSIO_ASK_ORACLE_INPUT = object;

/**
 * Type of COMPOSIO's COMPOSIO_ASK_ORACLE tool output.
 */
type COMPOSIO_ASK_ORACLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Response */
      response: string;
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
 * Type of COMPOSIO's COMPOSIO_CHECK_ACTIVE_CONNECTION tool input.
 */
type COMPOSIO_CHECK_ACTIVE_CONNECTION_INPUT = {
  /**
   * Connected Account Id
   * @description Specific connected account ID to check status for
   */
  connected_account_id?: string;
  /**
   * Toolkit
   * @description Name of the toolkit to check
   */
  toolkit?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_CHECK_ACTIVE_CONNECTION tool output.
 */
type COMPOSIO_CHECK_ACTIVE_CONNECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active Connection
       * @description Indicates whether an active connection exists
       */
      active_connection: boolean;
      /**
       * Connection Details
       * @description Active connection metadata and details
       * @default {}
       */
      connection_details: {
          [key: string]: unknown;
      };
      /**
       * Required Parameters For Connection
       * @description Parameters required to establish connection if none exists
       * @default null
       */
      required_parameters_for_connection: unknown[] | null;
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
 * Type of COMPOSIO's COMPOSIO_CHECK_ACTIVE_CONNECTIONS tool input.
 */
type COMPOSIO_CHECK_ACTIVE_CONNECTIONS_INPUT = {
  /**
   * Requests
   * @description List of connection check requests
   */
  requests?: {
      /**
       * Connected Account Id
       * @description Specific connected account ID to check status for
       */
      connected_account_id?: string;
      /**
       * Toolkit
       * @description Name of the toolkit to check
       */
      toolkit?: string;
  }[];
};

/**
 * Type of COMPOSIO's COMPOSIO_CHECK_ACTIVE_CONNECTIONS tool output.
 */
type COMPOSIO_CHECK_ACTIVE_CONNECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Responses
       * @description List of responses for each connection check request
       */
      responses: {
          /**
           * Active Connection
           * @description Indicates whether an active connection exists
           */
          active_connection: boolean;
          /**
           * Connection Details
           * @description Active connection metadata and details
           * @default {}
           */
          connection_details: {
              [key: string]: unknown;
          };
          /**
           * Required Parameters For Connection
           * @description Parameters required to establish connection if none exists
           * @default null
           */
          required_parameters_for_connection: unknown[] | null;
          /**
           * Toolkit Name
           * @description Name of the toolkit
           */
          toolkit_name: string;
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
 * Type of COMPOSIO's COMPOSIO_CREATE_PLAN tool input.
 */
type COMPOSIO_CREATE_PLAN_INPUT = {
  /**
   * Difficulty
   * @description Difficulty level for the plan. Choose "medium" for moderate complexity (summarize slack messages from last day), and "hard" for complex tasks requiring multiple steps or advanced logic (create personalized draft for 100 emails). Do not call for easy tasks.
   * @enum {string}
   */
  difficulty?: "medium" | "hard";
  /**
   * Known Fields
   * @description Provide any workflow inputs you already know as comma-separated key:value pairs (not an array). E.g. channel name, user email, timezone, etc. This helps the tool infer or look up relevant memories (like resoliving channel_id from a given channel_name). Keep max 2-3 short and structured values— focus on stable identifiers, names, emails, or settings only. Do not include free-form or long text (like messages, notes, or descriptions). Example: "channel_name:pod-sdk, channel_id:123, user_names:John,Maria, timezone:Asia/Kolkata"
   */
  known_fields?: string;
  /**
   * Primary Tool Slugs
   * @description List of primary tool slugs that can accomplish the main task. Never invent tool slugs, only use the ones given by Search. For example: ['GITHUB_LIST_PULL_REQUESTS', 'SLACK_SEND_MESSAGE']
   */
  primary_tool_slugs?: string[];
  /**
   * Reasoning
   * @description Short reasoning from the search about the use case and how the selected tools can accomplish it
   */
  reasoning?: string;
  /**
   * Related Tool Slugs
   * @description List of related/supporting tool slugs that might be useful. These are optional tools that could help with the task. Never invent tool slugs, only use the ones given by Search.
   * @default []
   */
  related_tool_slugs: string[];
  /**
   * Use Case
   * @description Detailed explanation of the use case the user is trying to accomplish. Include as many details as possible for a better plan
   */
  use_case?: string;
  /** @description ALWAYS pass the session_id that was provided in the search tools response. */
  session_id?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_CREATE_PLAN tool output.
 */
type COMPOSIO_CREATE_PLAN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Workflow Instructions
       * @description Instructions for the LLM to create a workflow for the given use case
       */
      workflow_instructions: {
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
 * Type of COMPOSIO's COMPOSIO_DOWNLOAD_S3_FILE tool input.
 */
type COMPOSIO_DOWNLOAD_S3_FILE_INPUT = {
  /**
   * Local Path
   * @description Optional local path where the file should be saved. If not provided, will use a temporary directory with the filename from the URL
   * @default null
   */
  local_path: string | null;
  /**
   * S3 Url
   * @description Public S3 URL to download the file from
   */
  s3_url?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_DOWNLOAD_S3_FILE tool output.
 */
type COMPOSIO_DOWNLOAD_S3_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Size
       * @description Size of the downloaded file in bytes
       */
      file_size: number;
      /**
       * Local Path
       * @description Path where the file was saved locally
       */
      local_path: string;
      /**
       * Message
       * @description Success or error message
       */
      message: string;
      /**
       * Success
       * @description Whether the download was successful
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
 * Type of COMPOSIO's COMPOSIO_ENABLE_TRIGGER tool input.
 */
type COMPOSIO_ENABLE_TRIGGER_INPUT = {
  /**
   * Config Params
   * @description Configuration parameters for the trigger
   * @default {}
   */
  config_params: {
      [key: string]: unknown;
  };
  /**
   * Connected Account Id
   * @description Connected account ID to enable trigger for
   */
  connected_account_id?: string;
  /**
   * Toolkit Slug
   * @description Slug of the toolkit
   * @example gmail
   */
  toolkit_slug?: string;
  /**
   * Trigger Name
   * @description Name of the trigger to enable
   * @example GMAIL_NEW_GMAIL_MESSAGE
   */
  trigger_name?: string;
  /**
   * User Id
   * @description User ID for the trigger
   * @default default
   */
  user_id: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_ENABLE_TRIGGER tool output.
 */
type COMPOSIO_ENABLE_TRIGGER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Trigger Details
       * @description Details of the enabled trigger
       */
      trigger_details: {
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
 * Type of COMPOSIO's COMPOSIO_EXECUTE_AGENT tool input.
 */
type COMPOSIO_EXECUTE_AGENT_INPUT = {
  /**
   * Context
   * @description Additional context data, parameters, or state information needed for task execution. Include user IDs, channel names, specific configurations, API credentials, or any data that tools will need access to during execution.
   * @default null
   */
  context: {
      [key: string]: unknown;
  } | null;
  /**
   * Entity Id
   * @description Entity ID for Composio authentication context. Determines which connected accounts and permissions the agent can access during tool execution.
   * @default default
   */
  entity_id: string;
  /**
   * Metadata
   * @description Execution metadata to guide agent behavior. Common keys: 'research_summary' (findings to include), 'technical_level' (basic/advanced), 'urgency' (low/high), 'expected_outcome' (success criteria), 'tone' (formal/casual).
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Primary Task
   * @description The complete task description that requires complex multi-step execution with reasoning between tool calls. Should describe the end goal, not just individual actions. Use for workflows that need conditional logic, error handling, or where one tool's output determines the next action.
   */
  primary_task?: string;
  /**
   * Tool Names
   * @description List of specific tool names to execute (e.g., ['GMAIL_FETCH_EMAILS', 'SLACK_SEND_MESSAGE'])
   */
  tool_names?: string[];
};

/**
 * Type of COMPOSIO's COMPOSIO_EXECUTE_AGENT tool output.
 */
type COMPOSIO_EXECUTE_AGENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the task failed. Only populated when success=False. Contains details about what went wrong during execution.
       * @default null
       */
      error: string | null;
      /**
       * Success
       * @description Whether the overall task execution completed successfully. True if all critical steps were completed even if some non-essential actions failed. False if the primary objective could not be achieved.
       */
      success: boolean;
      /**
       * Summary
       * @description Concise executive summary of what was accomplished, including key outcomes, any important data retrieved, and final status. Should be readable by non-technical stakeholders and capture the business value delivered.
       */
      summary: string;
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
 * Type of COMPOSIO's COMPOSIO_EXECUTE_TOOL tool input.
 */
type COMPOSIO_EXECUTE_TOOL_INPUT = {
  /**
   * Allow Destructive
   * @description Whether to allow destructive tools to be executed. If true, the tool will be executed even if it is destructive.
   * @default false
   */
  allow_destructive: boolean;
  /**
   * Arguments
   * @description The arguments to be passed to the tool. The schema of the arguments is present in the retrieve_actions response
   */
  arguments?: {
      [key: string]: unknown;
  };
  /**
   * Connected Account Id
   * @description The ID of the connected account to use. If not provided, uses the first active connection for the toolkit
   * @default null
   */
  connected_account_id: string | null;
  /**
   * Tool Slug
   * @description The slug of the tool to execute, to be used from the list of tools retrieved using retrieve_actions
   */
  tool_slug?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_EXECUTE_TOOL tool output.
 */
type COMPOSIO_EXECUTE_TOOL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description The response from executing the tool. Structure varies by tool type.
       */
      response: {
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
 * Type of COMPOSIO's COMPOSIO_GET_DEPENDENCY_GRAPH tool input.
 */
type COMPOSIO_GET_DEPENDENCY_GRAPH_INPUT = {
  /**
   * Tool Name
   * @description The name of the tool to get dependency graph for
   */
  tool_name?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_GET_DEPENDENCY_GRAPH tool output.
 */
type COMPOSIO_GET_DEPENDENCY_GRAPH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Parent Tools
       * @description List of parent tools that are commonly used with or before the specified tool
       */
      parent_tools?: {
          /**
           * Description
           * @description Description of what this parent tool does
           * @default
           */
          description: string;
          /**
           * Reason
           * @description The reason why this parent tool is related to the target tool
           */
          reason: string;
          /**
           * Required
           * @description Whether this parent tool is required or just recommended
           */
          required: boolean;
          /**
           * Tool Name
           * @description The name of the parent tool that can be used with the target tool
           */
          tool_name: string;
      }[];
      /**
       * Tool Name
       * @description The original tool name that was queried
       */
      tool_name: string;
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
 * Type of COMPOSIO's COMPOSIO_GET_REQUIRED_PARAMETERS tool input.
 */
type COMPOSIO_GET_REQUIRED_PARAMETERS_INPUT = {
  /**
   * Toolkit
   * @description Name of the toolkit to analyze for authentication requirements. Returns parameters for API keys, OAuth credentials, or connection fields needed by initiate_connection.
   */
  toolkit?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_GET_REQUIRED_PARAMETERS tool output.
 */
type COMPOSIO_GET_REQUIRED_PARAMETERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has Default Credentials
       * @description Whether the toolkit supports default OAuth flow without requiring custom parameters. If true, you can call initiate_connection with parameters={} for seamless OAuth authentication.
       */
      has_default_credentials: boolean;
      /**
       * Required Parameters
       * @description List of parameter objects required for initiate_connection. Each object contains name, description, type, and other metadata for parameters that must be passed to initiate_connection's parameters field.
       */
      required_parameters: unknown[];
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
 * Type of COMPOSIO's COMPOSIO_GET_RESPONSE_SCHEMA tool input.
 */
type COMPOSIO_GET_RESPONSE_SCHEMA_INPUT = {
  /**
   * Tool
   * @description Name of the tool. For example: GITHUB_LIST_PULL_REQUESTS. You can find the relevant tool names using COMPOSIO_RETRIEVE_ACTIONS tool.
   */
  tool?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_GET_RESPONSE_SCHEMA tool output.
 */
type COMPOSIO_GET_RESPONSE_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Schema
       * @description JSON schema representation of the tool's response structure
       */
      response_schema: {
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
 * Type of COMPOSIO's COMPOSIO_INITIATE_CONNECTION tool input.
 */
type COMPOSIO_INITIATE_CONNECTION_INPUT = {
  /**
   * Parameters
   * @description
   *             Authentication parameters for the connection. Structure depends on auth type:
   *
   *             API Key Auth: {"generic_api_key": "your_key"}
   *             Bearer Token: {"bearer_token": "your_token"} or {"access_token": "your_token"}
   *             Basic Auth: {"username": "user", "password": "pass"}
   *             Custom OAuth: {"client_id": "your_id", "client_secret": "your_secret"}
   *             Connection Fields: {"subdomain": "your_subdomain", "site_name": "your_site"}
   *
   *             Examples:
   *             - Exa: {"generic_api_key": "your_exa_api_key"}
   *             - GitHub (token): {"access_token": "ghp_xxxxx"}
   *             - Google Super (OAuth): {"client_id": "xxx.apps.googleusercontent.com", "client_secret": "GOCSPX-xxx"}
   *             - SharePoint (hybrid): {"client_id": "your_id", "client_secret": "your_secret", "site_name": "your_site"}
   *             - Zendesk (connection only): {"subdomain": "your_subdomain"}
   *
   *             Leave empty {} for default OAuth flow (if supported by toolkit).
   *             Use get_required_parameters action to see exact parameter names and requirements.
   *
   */
  parameters?: {
      [key: string]: unknown;
  };
  /**
   * Toolkit
   * @description Name of the toolkit to connect (e.g., 'gmail', 'exa', 'github', 'linear')
   */
  toolkit?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_INITIATE_CONNECTION tool output.
 */
type COMPOSIO_INITIATE_CONNECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Connection response details
       */
      response_data: {
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
 * Type of COMPOSIO's COMPOSIO_LIST_TOOLKITS tool input.
 */
type COMPOSIO_LIST_TOOLKITS_INPUT = {
  /**
   * Category
   * @description Filter toolkits by category
   * @default null
   */
  category: string | null;
  /**
   * Min Tools
   * @description Filter toolkits by minimum number of tools
   * @default null
   */
  min_tools: number | null;
  /**
   * Name Filter
   * @description Filter toolkits by name/slug
   * @default null
   */
  name_filter: string | null;
  /**
   * No Auth Only
   * @description Only return toolkits that don't require authentication
   * @default false
   */
  no_auth_only: boolean;
  /**
   * Size
   * @description Limit the number of results returned
   * @default 10
   */
  size: number | null;
};

/**
 * Type of COMPOSIO's COMPOSIO_LIST_TOOLKITS tool output.
 */
type COMPOSIO_LIST_TOOLKITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Toolkits */
      toolkits: {
          [key: string]: unknown;
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
 * Type of COMPOSIO's COMPOSIO_LIST_TRIGGERS tool input.
 */
type COMPOSIO_LIST_TRIGGERS_INPUT = {
  /**
   * Toolkit Names
   * @description List of toolkit names to filter triggers (optional), if not provided/empty, all triggers will be returned
   */
  toolkit_names?: string[];
};

/**
 * Type of COMPOSIO's COMPOSIO_LIST_TRIGGERS tool output.
 */
type COMPOSIO_LIST_TRIGGERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Triggers
       * @description List of available triggers and their config schemas
       */
      triggers: unknown[];
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
 * Type of COMPOSIO's COMPOSIO_MANAGE_CONNECTION tool input.
 */
type COMPOSIO_MANAGE_CONNECTION_INPUT = {
  /**
   * Parameters
   * @description
   *             Optional authentication parameters for the connection. Structure depends on auth type. This information is to be provided by the user if required.
   *                 - API Key Auth: {"generic_api_key": "your_key"}
   *                 - Bearer Token: {"bearer_token": "your_token"} or {"access_token": "your_token"}
   *                 - Basic Auth: {"username": "user", "password": "pass"}
   *                 - Custom OAuth: {"client_id": "your_id", "client_secret": "your_secret"}
   *                 - Connection Fields: {"subdomain": "your_subdomain", "site_name": "your_site"}
   *             Examples:
   *                 - exa: {"generic_api_key": "your_exa_api_key"}
   *                 - github (Bearer Token): {"access_token": "ghp_xxxxx"}
   *                 - googlesuper (Custom OAuth): {"client_id": "xxx.apps.googleusercontent.com", "client_secret": "GOCSPX-xxx"}
   *                 - sharepoint (hybrid): {"client_id": "your_id", "client_secret": "your_secret", "site_name": "your_site"}
   *                 - zendesk (connection only): {"subdomain": "your_subdomain"}
   *             Leave empty {} for default OAuth flow.
   *
   */
  parameters?: {
      [key: string]: unknown;
  };
  /**
   * Reinitiate
   * @description Whether to reinitiate the connection. If True, the connection will be reinitialized even if it already exists. To be used if there are any problems with the connection.
   */
  reinitiate?: boolean;
  /**
   * Toolkit
   * @description The toolkit to either check connection with or connect to. If toolkit is not connected, will initiate connection. Toolkit name is essentially the application's name. Example: 'gmail', 'exa', 'github', 'outlook', 'reddit'
   */
  toolkit?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_MANAGE_CONNECTION tool output.
 */
type COMPOSIO_MANAGE_CONNECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Status message
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
 * Type of COMPOSIO's COMPOSIO_MANAGE_CONNECTIONS tool input.
 */
type COMPOSIO_MANAGE_CONNECTIONS_INPUT = {
  /**
   * Toolkits
   * @description List of toolkit slugs to either check connection with or connect to. Should be a valid toolkit returned by Search Tools (never invent the slug). If a toolkit is not connected, will initiate connection. A toolkit name is essentially the application's name. Example: ['gmail', 'exa', 'github', 'outlook', 'reddit']
   */
  toolkits?: string[];
  /**
   * Reinitiate All
   * @description Force reconnection for ALL toolkits in the `toolkits` list, even if they already have active connections.
   *
   *             WHEN TO USE:
   *             - You suspect existing connections are stale or broken.
   *             - You want to refresh all connections with new credentials or settings.
   *             - You're troubleshooting connection issues across multiple toolkits.
   *
   *             BEHAVIOR:
   *             - Overrides any existing active connections for all specified toolkits.
   *             - Will initiate new OAuth flows or recreate connections with provided credentials.
   *             DEFAULT: false (preserve existing active connections)
   *
   * @default false
   */
  reinitiate_all: boolean;
  /**
   * Specify Custom Auth
   * @description Agent-friendly way to provide per-toolkit credentials and connection fields when the default OAuth flow is not sufficient.
   *
   *     HOW TO STRUCTURE:
   *     - Outer object: keys are toolkit names exactly as provided in `toolkits` (must match 1:1).
   *     - Inner object: credentials and/or connection fields for that toolkit. The auth scheme is auto-detected.
   *
   *     WHEN TO USE:
   *     - You want to connect via API keys, bearer tokens, or basic auth.
   *     - You need to pass extra connection fields (e.g., `subdomain`, `site_name`) alongside OAuth.
   *     - You have your own OAuth client credentials (custom OAuth).
   *
   *     KEY RULES:
   *     - Keys must match entries in `toolkits` exactly (case/spelling).
   *     - Aliases supported:
   *       - `api_key` is accepted and normalized to `generic_api_key`.
   *       - `bearer_token` or `access_token` are both accepted for Bearer.
   *     - Provide only fields the toolkit requires; missing required fields will be returned in `required_parameters`.
   *
   *     SUPPORTED PATTERNS (inner object):
   *     - API Key: {"generic_api_key": "YOUR_KEY"} or {"api_key": "YOUR_KEY"}
   *     - Bearer Token: {"bearer_token": "YOUR_TOKEN"} or {"access_token": "YOUR_TOKEN"}
   *     - Basic Auth: {"username": "USER", "password": "PASS"}
   *     - Custom OAuth: {"client_id": "YOUR_CLIENT_ID", "client_secret": "YOUR_CLIENT_SECRET"}
   *     - Connection fields only: {"subdomain": "YOUR_SUBDOMAIN", "site_name": "YOUR_SITE"}
   *     - Hybrid (default OAuth + connection fields): just include the connection fields; OAuth will be handled for you.
   *
   *     EXAMPLES (JSON-like, as this field is a dict[str, dict]):
   *     1) Multiple toolkits with mixed auth
   *        {
   *          "exa": {"api_key": "EXA_API_KEY"},
   *          "gmail": {"client_id": "USER_CLIENT_ID", "client_secret": "USER_CLIENT_SECRET"},
   *          "zendesk": {"subdomain": "acme"}
   *        }
   *
   *     2) Hybrid: default OAuth + required connection fields
   *        {
   *          "sharepoint": {"client_id": "CLIENT_ID", "client_secret": "CLIENT_SECRET", "site_name": "marketing"}
   *        }
   *
   *     3) Single toolkit with Bearer Token
   *        {
   *          "slack": {"bearer_token": "xoxb-..."}
   *        }
   *
   *     4) API key using alias (normalized automatically)
   *        {
   *          "shopify": {"api_key": "SHOPIFY_API_KEY"}
   *        }
   *
   *     5) Default OAuth for a toolkit
   *        - Either omit the toolkit from this object, or pass an empty dict: {"gmail": {}}
   *
   *     NOTES:
   *     - For default OAuth-only toolkits, you will receive an `initiated` status and a `redirect_url` to complete auth.
   *     - This parameter is optional; pass `{}` to rely entirely on defaults and be guided to any missing parameters.
   *
   */
  specify_custom_auth?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
};

/**
 * Type of COMPOSIO's COMPOSIO_MANAGE_CONNECTIONS tool output.
 */
type COMPOSIO_MANAGE_CONNECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Overall status message
       */
      message: string;
      /**
       * Results
       * @description Connection results for each toolkit
       */
      results: {
          [key: string]: {
              /**
               * Active Connection
               * @description Details of active connection if status is 'active'
               * @default null
               */
              active_connection: {
                  [key: string]: unknown;
              } | null;
              /**
               * Auth Config Created
               * @description Whether a new auth config was created (vs reused existing)
               * @default null
               */
              auth_config_created: boolean | null;
              /**
               * Auth Config Id
               * @description Auth config ID when a new auth config is created or used
               * @default null
               */
              auth_config_id: string | null;
              /**
               * Connection Id
               * @description Connection ID if status is 'initiated'
               * @default null
               */
              connection_id: string | null;
              /**
               * Error Message
               * @description Error message if status is 'failed'
               * @default null
               */
              error_message: string | null;
              /**
               * Has Default Credentials
               * @description Whether toolkit supports default OAuth if status is 'requires_parameters'
               * @default null
               */
              has_default_credentials: boolean | null;
              /**
               * Instruction
               * @description Instructions for user if status is 'initiated'
               * @default null
               */
              instruction: string | null;
              /**
               * Redirect Url
               * @description OAuth redirect URL if status is 'initiated'
               * @default null
               */
              redirect_url: string | null;
              /**
               * Required Parameters
               * @description Required parameters if status is 'requires_parameters'
               * @default null
               */
              required_parameters: unknown[] | null;
              /**
               * Status
               * @description Status of the connection attempt
               * @enum {string}
               */
              status: "active" | "requires_parameters" | "initiated" | "failed";
              /**
               * Toolkit
               * @description Name of the toolkit
               */
              toolkit: string;
              /**
               * Was Reinitiated
               * @description Whether this connection was reinitiated (vs newly created)
               * @default null
               */
              was_reinitiated: boolean | null;
          };
      };
      /**
       * Summary
       * @description Summary of results by status type
       */
      summary: {
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
 * Type of COMPOSIO's COMPOSIO_MULTI_EXECUTE_TOOL tool input.
 */
type COMPOSIO_MULTI_EXECUTE_TOOL_INPUT = {
  /**
   * Tools
   * @description List of tools to execute in parallel
   */
  tools?: {
      /**
       * Arguments
       * @description The arguments to be passed to the tool. The schema of the arguments is present in the retrieve_actions response
       */
      arguments: {
          [key: string]: unknown;
      };
      /**
       * Tool Slug
       * @description The slug of the tool to execute
       */
      tool_slug: string;
  }[];
  /** @description ALWAYS pass the session_id that was provided in the search tools response. */
  session_id?: string;
  /**
   * Thought
   * @description One-sentence concise high-level rationale (no step-by-step).
   */
  thought?: string;
  /**
   * Sync Response To Workbench
   * @description Syncs the response to the remote workbench (for later scripting/processing) while still viewable inline. Predictively set true if the output may be large or need scripting; if it turns out small/manageable, skip workbench and use inline only. Default: false
   */
  sync_response_to_workbench?: boolean;
  /** @description CRITICAL: Memory must be a dictionary with app names as keys and string arrays as values. NEVER use nested objects. Format: {"app_name": ["string1", "string2"]}. Store durable facts - stable IDs, mappings, roles, preferences. Exclude ephemeral data like message IDs or temp links. Use full sentences describing relationships. Always include this parameter. */
  memory?: {
      [key: string]: string[];
  };
  /** @description Short enum for current step of the workflow execution. Eg FETCHING_EMAILS, GENERATING_REPLIES. Always include to keep execution aligned with the workflow. */
  current_step?: string;
  /** @description Progress metrics for the current step - use to track how far execution has advanced. Format as a string "done/total units" - example "10/100 emails", "0/n messages", "3/10 pages" */
  current_step_metric?: string;
  /** @description Enum for the next planned workflow step (may be the same as current_step). Eg "GENERATING_SUMMARY", "FETCHING_EMAILS". */
  next_step?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_MULTI_EXECUTE_TOOL tool output.
 */
type COMPOSIO_MULTI_EXECUTE_TOOL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Count
       * @description Number of failed tool executions
       */
      error_count: number;
      /**
       * Results
       * @description List of responses from executing the tools. Order matches the input order.
       */
      results: {
          /**
           * Error
           * @description Error message if the tool execution failed
           * @default null
           */
          error: string | null;
          /**
           * Index
           * @description Original index of the tool in the request
           */
          index: number;
          /**
           * Response
           * @description The response from executing the tool if successful
           * @default null
           */
          response: {
              [key: string]: unknown;
          } | null;
          /**
           * Success
           * @description Whether the tool execution was successful
           */
          success: boolean;
          /**
           * Tool Slug
           * @description The slug of the tool that was executed
           */
          tool_slug: string;
      }[];
      /**
       * Success Count
       * @description Number of successful tool executions
       */
      success_count: number;
      /**
       * Total Count
       * @description Total number of tools executed
       */
      total_count: number;
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
 * Type of COMPOSIO's COMPOSIO_REMOTE_BASH_TOOL tool input.
 */
type COMPOSIO_REMOTE_BASH_TOOL_INPUT = {
  /**
   * Command
   * @description The bash command to execute
   */
  command?: string;
  /** @description ALWAYS pass the session_id that was provided in the search tools response. */
  session_id?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_REMOTE_BASH_TOOL tool output.
 */
type COMPOSIO_REMOTE_BASH_TOOL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Session
       * @description Session info echoed back to reinforce reuse: { id: string, instructions: string }
       * @default null
       */
      session: {
          [key: string]: unknown;
      } | null;
      /**
       * Stderr
       * @description The standard error output from the command, possibly truncated for brevity.
       */
      stderr: string;
      /**
       * Stderr Lines
       * @description Total number of lines in original stderr, even if truncated
       */
      stderrLines: number;
      /**
       * Stderr File Path
       * @description Path to file containing full stderr if output was truncated
       * @default null
       */
      stderr_file_path: string | null;
      /**
       * Stdout
       * @description The standard output from the command, possibly truncated for brevity.
       */
      stdout: string;
      /**
       * Stdout Lines
       * @description Total number of lines in original stdout, even if truncated
       */
      stdoutLines: number;
      /**
       * Stdout File Path
       * @description Path to file containing full stdout if output was truncated
       * @default null
       */
      stdout_file_path: string | null;
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
 * Type of COMPOSIO's COMPOSIO_REMOTE_WORKBENCH tool input.
 */
type COMPOSIO_REMOTE_WORKBENCH_INPUT = {
  /**
   * Code To Execute
   * @description Python to run inside the persistent **remote Jupyter sandbox**. State (imports, variables, files) is preserved across executions. Keep code concise to minimize tool call latency. Avoid unnecessary comments.
   */
  code_to_execute?: string;
  /** @description ALWAYS pass the session_id that was provided in the search tools response. */
  session_id?: string;
  /** @description Remote path/glob inside the sandbox to analyze. **Required for file analysis**; optional when only orchestrating tools. */
  file_path?: string;
  /**
   * Thought
   * @description Concise objective and high-level plan (no private chain-of-thought). 1 sentence describing what the cell should achieve and why the sandbox is needed.
   */
  thought?: string;
  /** @description Short enum for current step of the workflow execution. Eg FETCHING_EMAILS, GENERATING_REPLIES. Always include to keep execution aligned with the workflow. */
  current_step?: string;
  /** @description Progress metrics for the current step - use to track how far execution has advanced. Format as a string "done/total units" - example "10/100 emails", "0/n messages", "3/10 pages" */
  current_step_metric?: string;
  /** @description Enum for the next planned workflow step (may be the same as current_step). Eg "GENERATING_SUMMARY", "FETCHING_EMAILS". */
  next_step?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_REMOTE_WORKBENCH tool output.
 */
type COMPOSIO_REMOTE_WORKBENCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if any
       * @default
       */
      error: string;
      /**
       * Results
       * @description The results of the code execution
       */
      results: string;
      /**
       * Results File Path
       * @description Path to file containing full results if output was truncated
       * @default null
       */
      results_file_path: string | null;
      /**
       * Session
       * @description Session info echoed back to reinforce reuse: { id: string, instructions: string }
       * @default null
       */
      session: {
          [key: string]: unknown;
      } | null;
      /**
       * Stderr
       * @description The standard error output from the command
       */
      stderr: string;
      /**
       * Stderr File Path
       * @description Path to file containing full stderr if output was truncated
       * @default null
       */
      stderr_file_path: string | null;
      /**
       * Stdout
       * @description The standard output from the command
       */
      stdout: string;
      /**
       * Stdout File Path
       * @description Path to file containing full stdout if output was truncated
       * @default null
       */
      stdout_file_path: string | null;
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
 * Type of COMPOSIO's COMPOSIO_RETRIEVE_TOOLKITS tool input.
 */
type COMPOSIO_RETRIEVE_TOOLKITS_INPUT = {
  /**
   * Category
   * @description Category of apps to retrieve
   */
  category?: string;
  /**
   * Page
   * @description Page number for pagination
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of items per page
   * @default 10
   */
  page_size: number;
};

/**
 * Type of COMPOSIO's COMPOSIO_RETRIEVE_TOOLKITS tool output.
 */
type COMPOSIO_RETRIEVE_TOOLKITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Apps */
      apps: string[];
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
 * Type of COMPOSIO's COMPOSIO_SEARCH_AGENT tool input.
 */
type COMPOSIO_SEARCH_AGENT_INPUT = {
  /**
   * User Query
   * @description The user's request or use case that needs tool discovery
   */
  user_query?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_AGENT tool output.
 */
type COMPOSIO_SEARCH_AGENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Apps Needed
       * @description List of unique apps/tools needed for the workflow
       */
      apps_needed: string[];
      /**
       * Ordered Steps
       * @description Tool names in execution order (e.g. GMAIL_SEND_EMAIL)
       */
      ordered_steps: string[];
      /**
       * Search Time
       * @description Time taken for the search operation in seconds
       */
      search_time: number;
      /**
       * Tools
       * @description Detailed tool information with schemas and descriptions
       */
      tools: {
          /**
           * Description
           * @description Description of the tool
           * @default null
           */
          description: string | null;
          /**
           * Input Schema
           * @description Input schema for the tool
           * @default null
           */
          input_schema: {
              [key: string]: unknown;
          } | null;
          /**
           * Order
           * @description Order in which to call the tool to execute the use case
           * @default null
           */
          order: number | null;
          /**
           * Tool
           * @description The slug of the tool
           */
          tool: string;
          /**
           * Toolkit
           * @description The slug of the toolkit that provides this tool
           */
          toolkit: string;
      }[];
      /**
       * Workflow Instructions
       * @description Detailed step-by-step execution guide
       */
      workflow_instructions: string;
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
 * Type of COMPOSIO's COMPOSIO_SEARCH_DUCK_DUCK_GO_SEARCH tool input.
 */
type COMPOSIO_SEARCH_DUCK_DUCK_GO_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio DuckDuckGo Search API, specifying the search topic.
   */
  query?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_DUCK_DUCK_GO_SEARCH tool output.
 */
type COMPOSIO_SEARCH_DUCK_DUCK_GO_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The search results from Composio DuckDuckGo Search API
       */
      response_data: {
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
 * Type of COMPOSIO's COMPOSIO_SEARCH_EVENT_SEARCH tool input.
 */
type COMPOSIO_SEARCH_EVENT_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio Events Search API, specifying the event topic.
   */
  query?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_EVENT_SEARCH tool output.
 */
type COMPOSIO_SEARCH_EVENT_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio Events Search API
       */
      results: {
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
 * Type of COMPOSIO's COMPOSIO_SEARCH_EXA_ANSWER tool input.
 */
type COMPOSIO_SEARCH_EXA_ANSWER_INPUT = {
  /**
   * Content
   * @description The user message content for the Exa answer API.
   */
  content?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_EXA_ANSWER tool output.
 */
type COMPOSIO_SEARCH_EXA_ANSWER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Answer
       * @description The answer from Exa answer API
       */
      answer: string;
      /**
       * Citations
       * @description List of citations supporting the answer
       */
      citations: {
          /**
           * Published Date
           * @description Published date of the citation
           */
          publishedDate: string;
          /**
           * Snippet
           * @description Snippet from the citation
           */
          snippet: string;
          /**
           * Text
           * @description Text content of the citation
           */
          text: string;
          /**
           * Title
           * @description Title of the citation source
           */
          title: string;
          /**
           * Url
           * @description URL of the citation source
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
 * Type of COMPOSIO's COMPOSIO_SEARCH_EXA_SIMILARLINK tool input.
 */
type COMPOSIO_SEARCH_EXA_SIMILARLINK_INPUT = {
  /**
   * Category
   * @description  A data category to focus on, with higher comprehensivity and data cleanliness. Categories right now include company, research paper, news, github, tweet, movie, song, personal site, and pdf
   */
  category?: string;
  /**
   * End Crawl Date
   * Format: date-time
   * @description Results will include links crawled before this date. For e.g. '2023-01-01T00:00:00Z', '2023-01-15T00:00:00Z', '2023-02-01T00:00:00Z'.
   */
  endCrawlDate?: string;
  /**
   * End Published Date
   * Format: date-time
   * @description Only links published before this date will be returned. For e.g. '2023-01-01', '2023-01-15', '2023-02-01'.
   */
  endPublishedDate?: string;
  /**
   * Exclude Domains
   * @description List of domains to exclude in the search. For e.g. ['example.com'], ['news.com'], ['blog.com'].
   */
  excludeDomains?: string[];
  /**
   * Include Domains
   * @description List of domains to include in the search. For e.g. ['example.com'], ['news.com'], ['blog.com'].
   */
  includeDomains?: string[];
  /**
   * Num Results
   * @description Number of search results to return. For e.g. 10, 20, 30.
   */
  numResults?: number;
  /**
   * Start Crawl Date
   * Format: date-time
   * @description Results will include links crawled after this date. For e.g. '2023-01-01T00:00:00Z', '2023-01-15T00:00:00Z', '2023-02-01T00:00:00Z'.
   */
  startCrawlDate?: string;
  /**
   * Start Published Date
   * Format: date-time
   * @description Only links published after this date will be returned. For e.g. '2023-01-01', '2023-01-15', '2023-02-01'.
   */
  startPublishedDate?: string;
  /**
   * Type
   * @description The type of search: 'keyword', 'neural', or 'magic'. For e.g. 'neural', 'keyword', 'magic'.
   */
  type?: string;
  /**
   * Url
   * @description The url for which you would like to find similar links. For e.g. 'https://slatestarcodex.com/2014/07/30/meditations-on-moloch/', 'https://ww.google.com/'
   */
  url?: string;
  /**
   * Use Autoprompt
   * @description If true, your query will be converted to an Composio Similarlinks query. For e.g. True, False, True.
   */
  useAutoprompt?: boolean;
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_EXA_SIMILARLINK tool output.
 */
type COMPOSIO_SEARCH_EXA_SIMILARLINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description A list of search results, each containing title, URL, published date, author, and score.
       */
      results: {
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
 * Type of COMPOSIO's COMPOSIO_SEARCH_FINANCE_SEARCH tool input.
 */
type COMPOSIO_SEARCH_FINANCE_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio Finance Search API, specifying the financial topic or stock symbol.
   */
  query?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_FINANCE_SEARCH tool output.
 */
type COMPOSIO_SEARCH_FINANCE_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio Finance Search API
       */
      results: {
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
 * Type of COMPOSIO's COMPOSIO_SEARCH_GOOGLE_MAPS_SEARCH tool input.
 */
type COMPOSIO_SEARCH_GOOGLE_MAPS_SEARCH_INPUT = {
  /**
   * Ll
   * @description GPS coordinates for the search, formatted as '@latitude,longitude,zoom_level'. Required when using pagination.
   */
  ll?: string;
  /**
   * Q
   * @description The query you want to search.
   */
  q?: string;
  /**
   * Start
   * @description Used for pagination.
   */
  start?: number;
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_GOOGLE_MAPS_SEARCH tool output.
 */
type COMPOSIO_SEARCH_GOOGLE_MAPS_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio Goolge Maps Search API
       */
      results: {
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
 * Type of COMPOSIO's COMPOSIO_SEARCH_IMAGE_SEARCH tool input.
 */
type COMPOSIO_SEARCH_IMAGE_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio Image Search API, specifying the image topic.
   */
  query?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_IMAGE_SEARCH tool output.
 */
type COMPOSIO_SEARCH_IMAGE_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio Image Search API
       */
      results: {
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
 * Type of COMPOSIO's COMPOSIO_SEARCH_NEWS_SEARCH tool input.
 */
type COMPOSIO_SEARCH_NEWS_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio News Search API, specifying the topic for news search.
   */
  query?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_NEWS_SEARCH tool output.
 */
type COMPOSIO_SEARCH_NEWS_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio News Search API
       */
      results: {
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
 * Type of COMPOSIO's COMPOSIO_SEARCH_SCHOLAR_SEARCH tool input.
 */
type COMPOSIO_SEARCH_SCHOLAR_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio Scholar Search API, specifying the academic topic or paper title.
   */
  query?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_SCHOLAR_SEARCH tool output.
 */
type COMPOSIO_SEARCH_SCHOLAR_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio Scholar Search API
       */
      results: {
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
 * Type of COMPOSIO's COMPOSIO_SEARCH_SEARCH tool input.
 */
type COMPOSIO_SEARCH_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio Google Search API.
   */
  query?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_SEARCH tool output.
 */
type COMPOSIO_SEARCH_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio Google Search API
       */
      results: {
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
 * Type of COMPOSIO's COMPOSIO_SEARCH_SHOPPING_SEARCH tool input.
 */
type COMPOSIO_SEARCH_SHOPPING_SEARCH_INPUT = {
  /**
   * Query
   * @description The search query for the Composio Shopping Search API, specifying the product or item for shopping search.
   */
  query?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_SHOPPING_SEARCH tool output.
 */
type COMPOSIO_SEARCH_SHOPPING_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Composio Shopping Search API
       */
      results: {
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
 * Type of COMPOSIO's COMPOSIO_SEARCH_TAVILY_SEARCH tool input.
 */
type COMPOSIO_SEARCH_TAVILY_SEARCH_INPUT = {
  /**
   * Exclude Domains
   * @description A list of domain names to exclude from the search results. Results from these domains will not be included, which can help to filter out unwanted content.
   */
  exclude_domains?: unknown[];
  /**
   * Include Answer
   * @description Specifies whether to include direct answers to the query in the search results. Useful for queries that expect a factual answer.
   * @default false
   */
  include_answer: boolean;
  /**
   * Include Domains
   * @description A list of domain names to include in the search results. Only results from these specified domains will be returned, allowing for targeted searches.
   */
  include_domains?: unknown[];
  /**
   * Include Images
   * @description A flag indicating whether to include images in the search results. When set to true, the response will contain image links related to the query.
   * @default false
   */
  include_images: boolean;
  /**
   * Include Raw Content
   * @description If set to true, the search results will include the raw content from the search index, which may contain unprocessed HTML or text.
   * @default false
   */
  include_raw_content: boolean;
  /**
   * Max Results
   * @description The maximum number of search results that the API should return. This limits the size of the result set for the query.
   * @default 5
   */
  max_results: number;
  /**
   * Query
   * @description The primary text used to perform the search. This is the key term or phrase that the search functionality will use to retrieve results.
   */
  query?: string;
  /**
   * Search Depth
   * @description Determines the thoroughness of the search. A 'basic' search might perform a quick and broad search, while 'advanced' could indicate a more intensive and narrow search.
   * @default basic
   * @enum {string}
   */
  search_depth: "basic" | "advanced";
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_TAVILY_SEARCH tool output.
 */
type COMPOSIO_SEARCH_TAVILY_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data returned by the Composio LLM Search API.
       */
      response_data: {
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
 * Type of COMPOSIO's COMPOSIO_SEARCH_TOOLS tool input.
 */
type COMPOSIO_SEARCH_TOOLS_INPUT = {
  /**
   * Queries
   * @description List of structured search queries to process in parallel. Each query represents a specific use case or task. For multi-app or complex workflows, split them into smaller single-app queries for best accuracy. Each query returns 5-7 tools.
   */
  queries?: {
      /**
       * Use Case
       * @description Provide a normalized English description of the complete use case to enable precise tool selection. Focus on the specific action and intended outcome. Include any specific apps if mentioned by user. Do NOT include personal identifiers (names, emails, IDs) here — put those in known_fields.
       */
      use_case: string;
      /** @description Provide known workflow inputs in English as comma-separated key:value pairs (not an array). Keep 2-3 short, structured items - stable identifiers, names, emails, or settings only. Omit if not relevant. No free-form or long text (messages, notes, descriptions). */
      known_fields?: string;
  }[];
  /** @description Session context for correlating meta tool calls within a workflow. Always pass this parameter. Use {generate_id: true} for new workflows or {id: "EXISTING_ID"} to continue existing workflows. */
  session?: {
      /** @description Existing session identifier for the current workflow to reuse across calls. */
      id?: string;
      /** @description Set to true for the first search call of a new usecase/workflow to generate a new session ID. If omitted or false with an existing session.id, the provided session ID will be reused. */
      generate_id?: boolean;
  };
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_TOOLS tool output.
 */
type COMPOSIO_SEARCH_TOOLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** @description Per-query search results with tools, reasoning, and memory. One entry per query in request order. */
      results: {
          /** @description 1-based index of the query in the request */
          index: number;
          /** @description The use case that was searched */
          use_case: string;
          /** @description List of main tool slugs matching the search criteria */
          main_tool_slugs: string[];
          /** @description List of related tool slugs that might be useful */
          related_tool_slugs: string[];
          /** @description List of unique toolkit slugs used by tools in this query */
          toolkits: string[];
          /** @description Reasoning for the search results */
          reasoning: string;
          /** @description Assessment of task difficulty for this specific query */
          task_difficulty: string;
          /** @description Memory data relevant to this query, grouped by app */
          memory?: {
              [key: string]: unknown[];
          };
          /** @description Whether the search for this query was successful */
          successful: boolean;
          /** @description Error message if the search failed, null otherwise */
          error: string | null;
      }[];
      /** @description Deduplicated tool definitions keyed by tool_slug for O(1) lookup. Each tool appears once even if used in multiple queries. */
      tool_schemas: {
          [key: string]: {
              /** @description The slug of the tool */
              tool_slug?: string;
              /** @description The slug of the toolkit that provides this tool */
              toolkit?: string;
              /** @description Description of the tool */
              description?: string | null;
              /** @description Input schema for the tool */
              input_schema?: {
                  [key: string]: unknown;
              } | null;
              /** @description Practical usage notes and examples for the tool */
              usage_guidelines?: string | null;
          };
      };
      /** @description Connection status for all toolkits mentioned across all queries, with descriptions merged in */
      toolkit_connection_statuses: {
          /** @description The toolkit slug identifier (e.g., "gmail", "slack") */
          toolkit: string;
          /** @description Description of what the toolkit does and its capabilities */
          description: string;
          /** @description Whether an active connection exists for this toolkit */
          active_connection: boolean;
          /** @description Connection details including auth config and connected account IDs */
          connection_details: {
              [key: string]: unknown;
          };
          /** @description Information about the currently connected user (email, name, etc.) */
          current_user_info?: {
              [key: string]: unknown;
          } | null;
          /** @description Human-readable message about the connection status and next steps */
          message: string;
      }[];
      /** @description Time information for the query */
      time_info: {
          /** @description Current time in ISO format (UTC) */
          current_time: string;
          /** @description Current time as Unix epoch timestamp in seconds */
          current_time_epoch_in_seconds: number;
          /** @description Important message about time handling and timezone considerations */
          message: string;
      };
      /** @description Session info for correlating meta tool calls */
      session: {
          /** @description Session identifier to be passed to subsequent meta tool calls */
          id: string;
          /** @description Whether a fresh session id was generated in this call */
          generate_id: boolean;
          /** @description LLM-facing guidance on how to reuse this session id */
          instructions: string;
      };
      /** @description Best practices for workflow execution. Only present if call_create_plan is false */
      best_practices?: string | null;
      /** @description Aggregated next steps guidance across all queries */
      next_steps: {
          /** @description Whether to call CREATE_PLAN tool. True if ANY query requires planning */
          call_create_plan: boolean;
          /** @description Combined workflow guidance covering connections, planner, and memory usage */
          next_steps_guidance: string;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution. Format: "X out of Y searches failed, reasons: <details>"
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether all searches completed successfully. False if any query failed
   */
  successful?: boolean;
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_TRENDS_SEARCH tool input.
 */
type COMPOSIO_SEARCH_TRENDS_SEARCH_INPUT = {
  /**
   * Data Type
   * @description Parameter defines the type of search you want to do. Available options: TIMESERIES - Interest over time (default) - Accepts both single and multiple queries per search. GEO_MAP - Compared breakdown by region - Accepts only multiple queries per search. GEO_MAP_0 - Interest by region - Accepts only single query per search. RELATED_TOPICS - Related topics - Accepts only single query per search. RELATED_QUERIES - Related queries - Accepts only single query per search.
   * @default TIMESERIES
   */
  data_type: string | null;
  /**
   * Query
   * @description The search query for the Google Trends Search API, specifying the trend topic.
   */
  query?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_SEARCH_TRENDS_SEARCH tool output.
 */
type COMPOSIO_SEARCH_TRENDS_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description The search results from Google Trends Search API
       */
      results: {
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
 * Type of COMPOSIO's COMPOSIO_WAIT_FOR_CONNECTION tool input.
 */
type COMPOSIO_WAIT_FOR_CONNECTION_INPUT = {
  /**
   * Mode
   * @description Wait for ANY connection or ALL connections to reach success/failed state (default: any)
   * @default any
   * @enum {string}
   */
  mode: "any" | "all";
  /**
   * Timeout Seconds
   * @description Maximum time to wait in seconds (default: 300, max: 600)
   * @default 300
   */
  timeout_seconds: number;
  /**
   * Toolkits
   * @description List of toolkit slugs to wait for
   */
  toolkits?: string[];
  /** @description ALWAYS pass the session_id that was provided in the search tools response. */
  session_id?: string;
};

/**
 * Type of COMPOSIO's COMPOSIO_WAIT_FOR_CONNECTION tool output.
 */
type COMPOSIO_WAIT_FOR_CONNECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connection Statuses
       * @description Final status of all toolkits with user info
       */
      connection_statuses: {
          /** Active Connection */
          active_connection: boolean;
          /** Connection Details */
          connection_details?: {
              [key: string]: unknown;
          };
          /**
           * Connection Status
           * @default null
           */
          connection_status: string | null;
          /**
           * Current User Info
           * @default null
           */
          current_user_info: {
              [key: string]: unknown;
          } | null;
          /**
           * Error
           * @default null
           */
          error: string | null;
          /**
           * Message
           * @default null
           */
          message: string | null;
          /** Required Parameters For Connection */
          required_parameters_for_connection?: unknown[];
          /**
           * Toolkit
           * @default null
           */
          toolkit: string | null;
      }[];
      /**
       * Message
       * @description Status message
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
 * Type map of all available tool input types for toolkit "COMPOSIO".
 */
export type COMPOSIO_TOOL_INPUTS = {
  ASK_ORACLE: COMPOSIO_ASK_ORACLE_INPUT
  CHECK_ACTIVE_CONNECTION: COMPOSIO_CHECK_ACTIVE_CONNECTION_INPUT
  CHECK_ACTIVE_CONNECTIONS: COMPOSIO_CHECK_ACTIVE_CONNECTIONS_INPUT
  CREATE_PLAN: COMPOSIO_CREATE_PLAN_INPUT
  DOWNLOAD_S3_FILE: COMPOSIO_DOWNLOAD_S3_FILE_INPUT
  ENABLE_TRIGGER: COMPOSIO_ENABLE_TRIGGER_INPUT
  EXECUTE_AGENT: COMPOSIO_EXECUTE_AGENT_INPUT
  EXECUTE_TOOL: COMPOSIO_EXECUTE_TOOL_INPUT
  GET_DEPENDENCY_GRAPH: COMPOSIO_GET_DEPENDENCY_GRAPH_INPUT
  GET_REQUIRED_PARAMETERS: COMPOSIO_GET_REQUIRED_PARAMETERS_INPUT
  GET_RESPONSE_SCHEMA: COMPOSIO_GET_RESPONSE_SCHEMA_INPUT
  INITIATE_CONNECTION: COMPOSIO_INITIATE_CONNECTION_INPUT
  LIST_TOOLKITS: COMPOSIO_LIST_TOOLKITS_INPUT
  LIST_TRIGGERS: COMPOSIO_LIST_TRIGGERS_INPUT
  MANAGE_CONNECTION: COMPOSIO_MANAGE_CONNECTION_INPUT
  MANAGE_CONNECTIONS: COMPOSIO_MANAGE_CONNECTIONS_INPUT
  MULTI_EXECUTE_TOOL: COMPOSIO_MULTI_EXECUTE_TOOL_INPUT
  REMOTE_BASH_TOOL: COMPOSIO_REMOTE_BASH_TOOL_INPUT
  REMOTE_WORKBENCH: COMPOSIO_REMOTE_WORKBENCH_INPUT
  RETRIEVE_TOOLKITS: COMPOSIO_RETRIEVE_TOOLKITS_INPUT
  SEARCH_AGENT: COMPOSIO_SEARCH_AGENT_INPUT
  SEARCH_DUCK_DUCK_GO_SEARCH: COMPOSIO_SEARCH_DUCK_DUCK_GO_SEARCH_INPUT
  SEARCH_EVENT_SEARCH: COMPOSIO_SEARCH_EVENT_SEARCH_INPUT
  SEARCH_EXA_ANSWER: COMPOSIO_SEARCH_EXA_ANSWER_INPUT
  SEARCH_EXA_SIMILARLINK: COMPOSIO_SEARCH_EXA_SIMILARLINK_INPUT
  SEARCH_FINANCE_SEARCH: COMPOSIO_SEARCH_FINANCE_SEARCH_INPUT
  SEARCH_GOOGLE_MAPS_SEARCH: COMPOSIO_SEARCH_GOOGLE_MAPS_SEARCH_INPUT
  SEARCH_IMAGE_SEARCH: COMPOSIO_SEARCH_IMAGE_SEARCH_INPUT
  SEARCH_NEWS_SEARCH: COMPOSIO_SEARCH_NEWS_SEARCH_INPUT
  SEARCH_SCHOLAR_SEARCH: COMPOSIO_SEARCH_SCHOLAR_SEARCH_INPUT
  SEARCH_SEARCH: COMPOSIO_SEARCH_SEARCH_INPUT
  SEARCH_SHOPPING_SEARCH: COMPOSIO_SEARCH_SHOPPING_SEARCH_INPUT
  SEARCH_TAVILY_SEARCH: COMPOSIO_SEARCH_TAVILY_SEARCH_INPUT
  SEARCH_TOOLS: COMPOSIO_SEARCH_TOOLS_INPUT
  SEARCH_TRENDS_SEARCH: COMPOSIO_SEARCH_TRENDS_SEARCH_INPUT
  WAIT_FOR_CONNECTION: COMPOSIO_WAIT_FOR_CONNECTION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "COMPOSIO".
 */
export type COMPOSIO_TOOL_OUTPUTS = {
  ASK_ORACLE: COMPOSIO_ASK_ORACLE_OUTPUT
  CHECK_ACTIVE_CONNECTION: COMPOSIO_CHECK_ACTIVE_CONNECTION_OUTPUT
  CHECK_ACTIVE_CONNECTIONS: COMPOSIO_CHECK_ACTIVE_CONNECTIONS_OUTPUT
  CREATE_PLAN: COMPOSIO_CREATE_PLAN_OUTPUT
  DOWNLOAD_S3_FILE: COMPOSIO_DOWNLOAD_S3_FILE_OUTPUT
  ENABLE_TRIGGER: COMPOSIO_ENABLE_TRIGGER_OUTPUT
  EXECUTE_AGENT: COMPOSIO_EXECUTE_AGENT_OUTPUT
  EXECUTE_TOOL: COMPOSIO_EXECUTE_TOOL_OUTPUT
  GET_DEPENDENCY_GRAPH: COMPOSIO_GET_DEPENDENCY_GRAPH_OUTPUT
  GET_REQUIRED_PARAMETERS: COMPOSIO_GET_REQUIRED_PARAMETERS_OUTPUT
  GET_RESPONSE_SCHEMA: COMPOSIO_GET_RESPONSE_SCHEMA_OUTPUT
  INITIATE_CONNECTION: COMPOSIO_INITIATE_CONNECTION_OUTPUT
  LIST_TOOLKITS: COMPOSIO_LIST_TOOLKITS_OUTPUT
  LIST_TRIGGERS: COMPOSIO_LIST_TRIGGERS_OUTPUT
  MANAGE_CONNECTION: COMPOSIO_MANAGE_CONNECTION_OUTPUT
  MANAGE_CONNECTIONS: COMPOSIO_MANAGE_CONNECTIONS_OUTPUT
  MULTI_EXECUTE_TOOL: COMPOSIO_MULTI_EXECUTE_TOOL_OUTPUT
  REMOTE_BASH_TOOL: COMPOSIO_REMOTE_BASH_TOOL_OUTPUT
  REMOTE_WORKBENCH: COMPOSIO_REMOTE_WORKBENCH_OUTPUT
  RETRIEVE_TOOLKITS: COMPOSIO_RETRIEVE_TOOLKITS_OUTPUT
  SEARCH_AGENT: COMPOSIO_SEARCH_AGENT_OUTPUT
  SEARCH_DUCK_DUCK_GO_SEARCH: COMPOSIO_SEARCH_DUCK_DUCK_GO_SEARCH_OUTPUT
  SEARCH_EVENT_SEARCH: COMPOSIO_SEARCH_EVENT_SEARCH_OUTPUT
  SEARCH_EXA_ANSWER: COMPOSIO_SEARCH_EXA_ANSWER_OUTPUT
  SEARCH_EXA_SIMILARLINK: COMPOSIO_SEARCH_EXA_SIMILARLINK_OUTPUT
  SEARCH_FINANCE_SEARCH: COMPOSIO_SEARCH_FINANCE_SEARCH_OUTPUT
  SEARCH_GOOGLE_MAPS_SEARCH: COMPOSIO_SEARCH_GOOGLE_MAPS_SEARCH_OUTPUT
  SEARCH_IMAGE_SEARCH: COMPOSIO_SEARCH_IMAGE_SEARCH_OUTPUT
  SEARCH_NEWS_SEARCH: COMPOSIO_SEARCH_NEWS_SEARCH_OUTPUT
  SEARCH_SCHOLAR_SEARCH: COMPOSIO_SEARCH_SCHOLAR_SEARCH_OUTPUT
  SEARCH_SEARCH: COMPOSIO_SEARCH_SEARCH_OUTPUT
  SEARCH_SHOPPING_SEARCH: COMPOSIO_SEARCH_SHOPPING_SEARCH_OUTPUT
  SEARCH_TAVILY_SEARCH: COMPOSIO_SEARCH_TAVILY_SEARCH_OUTPUT
  SEARCH_TOOLS: COMPOSIO_SEARCH_TOOLS_OUTPUT
  SEARCH_TRENDS_SEARCH: COMPOSIO_SEARCH_TRENDS_SEARCH_OUTPUT
  WAIT_FOR_CONNECTION: COMPOSIO_WAIT_FOR_CONNECTION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's COMPOSIO toolkit.
 */
export const COMPOSIO = {
  slug: "composio",
  tools: {
    /**
     * Static helper that returns a comprehensive system prompt describing how to plan and execute tasks using the available composio tools and workflows. no inputs required; simply call to retrieve the prompt. always call this after the search tool is executed -- it will provide the best context on how to proceed, chain tools, and execute the task end-to-end. relevant tools referenced by the prompt: 1. composio search tools 2. composio multi execute tool 3. composio execute code 4. composio manage connections 5. composio bash tool
     */
    ASK_ORACLE: "COMPOSIO_ASK_ORACLE",
    /**
     * Deprecated: use check active connections instead for bulk operations. check active connection status for a toolkit or specific connected account id. returns connection details if active, or required parameters for establishing connection if none exists. active connections enable agent actions on the toolkit.
     */
    CHECK_ACTIVE_CONNECTION: "COMPOSIO_CHECK_ACTIVE_CONNECTION",
    /**
     * Check active connection status for multiple toolkits or specific connected account ids. returns connection details if active, or required parameters for establishing connection if none exists. active connections enable agent actions on toolkits.
     */
    CHECK_ACTIVE_CONNECTIONS: "COMPOSIO_CHECK_ACTIVE_CONNECTIONS",
    /**
     * 
     * This is a workflow builder that ensures the LLM produces a complete, step-by-step plan for any use case.
     * WHEN TO CALL:
     * - Call this tool based on COMPOSIO_SEARCH_TOOLS output. If search tools response indicates create_plan should be called and the usecase is not easy, call it.
     * - Use this tool after COMPOSIO_SEARCH_TOOLS or COMPOSIO_MANAGE_CONNECTIONS to generate an execution plan for the user's use case.
     * - USE for medium or hard tasks — skip it for easy ones.
     * - If the user switches to a new use case in the same chat and COMPOSIO_SEARCH_TOOLS again instructs you to call the planner, you MUST call this tool again for that new use case.
     * 
     * Memory Integration:
     * - You can choose to add the memory received from the search tool into the known_fields parameter of the plan function to enhance planning with discovered relationships and information.
     * 
     * Outputs a complete plan with sections such as "workflow_steps", "complexity_assessment", "decision_matrix", "failure_handling" "output_format", and more as needed.
     * 
     * If you skip this step for non-easy tasks, workflows will likely be incomplete, or fail during execution for complex tasks.
     * Calling it guarantees reliable, accurate, and end-to-end workflows aligned with the available tools and connections.
     *     
     */
    CREATE_PLAN: "COMPOSIO_CREATE_PLAN",
    /**
     * Download a file from a public s3 (or r2) url to a local path.
     */
    DOWNLOAD_S3_FILE: "COMPOSIO_DOWNLOAD_S3_FILE",
    /**
     * Enable a specific trigger for the authenticated user.
     */
    ENABLE_TRIGGER: "COMPOSIO_ENABLE_TRIGGER",
    /**
     * Execute complex workflows using ai agent reasoning between multiple tool calls. use this for: complex multi-step workflows requiring reasoning, error handling and retry logic. use composio multi execute tool instead for: simple parallel operations, batch operations on similar data (e.g., fetch 5 emails, get 10 sent messages, retrieve multiple user profiles), independent tool calls that don't need each other's results, or bulk operations where all parameters are known upfront. performance: agent calls add ~2-3 seconds overhead. use for workflows >3 tools or requiring conditional logic. avoid for simple parameter passing.
     */
    EXECUTE_AGENT: "COMPOSIO_EXECUTE_AGENT",
    /**
     * Execute a tool using the composio api.
     */
    EXECUTE_TOOL: "COMPOSIO_EXECUTE_TOOL",
    /**
     * Get the dependency graph for a given tool, showing related parent tools that might be useful. this action calls the composio labs dependency graph api to retrieve tools that are commonly used together with or before the specified tool. this helps discover related tools and understand common workflows.
     */
    GET_DEPENDENCY_GRAPH: "COMPOSIO_GET_DEPENDENCY_GRAPH",
    /**
     * Gets the required parameters for connecting to a toolkit via initiate connection. returns the exact parameter names and types needed for initiate connection's parameters field. supports api keys, oauth credentials, connection fields, and hybrid authentication scenarios. if has default credentials is true, you can call initiate connection with empty parameters for seamless oauth flow.
     */
    GET_REQUIRED_PARAMETERS: "COMPOSIO_GET_REQUIRED_PARAMETERS",
    /**
     * Retrieves the response schema for a specified composio tool. this action fetches the complete response schema definition for any valid composio tool, returning it as a dictionary that describes the expected response structure.
     */
    GET_RESPONSE_SCHEMA: "COMPOSIO_GET_RESPONSE_SCHEMA",
    /**
     * Initiate a connection to a toolkit with comprehensive authentication support. supports all authentication scenarios: 1. composio default oauth (no parameters needed) 2. custom oauth (user's client id/client secret) 3. api key/bearer token authentication 4. basic auth (username/password) 5. hybrid scenarios (oauth + connection fields like site name) 6. connection-only fields (subdomain, api key at connection level) 7. no authentication required automatically detects and validates auth config vs connection fields, provides helpful error messages for missing parameters.
     */
    INITIATE_CONNECTION: "COMPOSIO_INITIATE_CONNECTION",
    /**
     * List all the available toolkits on composio with filtering options.
     */
    LIST_TOOLKITS: "COMPOSIO_LIST_TOOLKITS",
    /**
     * List available triggers and their configuration schemas.
     */
    LIST_TRIGGERS: "COMPOSIO_LIST_TRIGGERS",
    /**
     * Manage a connection to a toolkit with comprehensive authentication support. supports all authentication scenarios: 1. composio default oauth (no parameters needed) 2. custom oauth (user's client id/client secret) 3. api key/bearer token authentication 4. basic auth (username/password) 5. hybrid scenarios (oauth + connection fields like site name) 6. connection-only fields (subdomain, api key at connection level) 7. no authentication required automatically detects and validates auth config vs connection fields, provides helpful error messages for missing parameters. notifies properly if a connection already exists or if authentication params are required from the user.
     */
    MANAGE_CONNECTION: "COMPOSIO_MANAGE_CONNECTION",
    /**
     * 
     *   IMPORTANT: PLEASE DO NOT call this COMPOSIO_MANAGE_CONNECTIONS tool if the call to COMPOSIO_SEARCH_TOOLS returns no main tools or related tools.
     * 
     * <br>
     * Tool Info: Create/manage connections to user's apps. If COMPOSIO_SEARCH_TOOLS finds no active connection for an app, call this with the toolkit name and required auth params to create one. When the needed params are unclear, the tool returns a list—ask the user for each (e.g. API_KEY). ALWAYS show the list along with their descriptions(if possible) to the user.
     * If the response includes an OAuth redirect_url, ALWAYS show a FORMATTED MARKDOWN LINK to the user.
     * Supports OAuth (default/custom), API Key, Bearer Token, Basic Auth, hybrid, and no-auth. Batch-safe, isolates errors, allows selective re-init, returns per-app results and summary.
     *     
     */
    MANAGE_CONNECTIONS: "COMPOSIO_MANAGE_CONNECTIONS",
    /**
     * 
     *   Fast and parallel tool executor for tools discovered through COMPOSIO_SEARCH_TOOLS. Use this tool to execute upto 20 tools in parallel across apps. Response contains structured outputs ready for immediate analysis - avoid reprocessing via remote bash/code execute tools.
     * 
     *   Prerequisites:
     * - Alwyas use valid tool slugs and their parameters discovered through COMPOSIO_SEARCH_TOOLS. NEVER invent tool slugs. ALWAYS pass arguments with the tool_slug in each tool.
     * - Active connection statuses for the tools that are going to be executed through COMPOSIO_MANAGE_CONNECTIONS.
     * - Ensure proper plan creation using COMPOSIO_CREATE_PLAN has been done if required.
     * - Cannot have any dependency of the response among the tools.
     * 
     * Usage guidelines:
     * - To be used whenever a tool is discovered and has to be called, either as part of a multi-step workflow or as a standalone tool.
     * - If COMPOSIO_SEARCH_TOOLS returns a tool that can perform the task, prefer calling it via this executor. Do not write custom API calls or ad-hoc scripts for tasks that can be completed by available Composio tools.
     * - Tools should be used highly parallelly.
     * - Predictively set sync_response_to_workbench=true if the response may be large or needed for later scripting. It still shows inline. However, if the actual response data turns out small and manageable without scripting, SKIP the workbench and use inline response directly.
     * - Responses contain structured outputs for each tool. RULE: Small data - process yourself inline; large data - process in the workbench.
     * - ALWAYS include inline references/links to sources in MARKDOWN format directly next to the relevant text. Eg provide slack thread links along with summary.
     * - CRITICAL: You MUST always include the 'memory' parameter - never omit it. Even if you think there's nothing to remember, include an empty object {} for memory.
     * 
     * Memory Storage:
     * - CRITICAL FORMAT: Memory must be a dictionary where keys are app names (strings) and values are arrays of strings. NEVER pass nested objects or dictionaries as values.
     * - CORRECT format: {"slack": ["Channel general has ID C1234567"], "gmail": ["John's email is john@example.com"]}
     * - Write memory entries in natural, descriptive language - NOT as key-value pairs. Use full sentences that clearly describe the relationship or information.
     * - ONLY store information that will be valuable for future tool executions - focus on persistent data that saves API calls.
     * - STORE: ID mappings, entity relationships, configs, stable identifiers.
     * - DO NOT STORE: Action descriptions, temporary status updates, logs, or "sent/fetched" confirmations.
     * - Examples of GOOD memory (store these):
     *   * "The important channel in Slack has ID C1234567 and is called #general"
     *   * "The team's main repository is owned by user 'teamlead' with ID 98765"
     *   * "The user prefers markdown docs with professional writing, no emojis" (user_preference)
     * - Examples of BAD memory (DON'T store these):
     *   * "Successfully sent email to john@example.com with message hi"
     *   * "Fetching emails from last day (Sep 6, 2025) for analysis"
     * - Do not repeat the memories stored or found previously.
     * 
     */
    MULTI_EXECUTE_TOOL: "COMPOSIO_MULTI_EXECUTE_TOOL",
    /**
     * 
     *   Execute bash commands in a REMOTE sandbox for file operations, data processing, and system tasks. Essential for handling large tool responses saved to remote files.
     *   PRIMARY USE CASES:
     * - Process large tool responses saved by COMPOSIO_MULTI_EXECUTE_TOOL to remote sandbox
     * - File system operations, extract specific information from JSON with shell tools like jq, awk, sed, grep, etc.
     * - Commands run from /home/user directory by default
     *     
     */
    REMOTE_BASH_TOOL: "COMPOSIO_REMOTE_BASH_TOOL",
    /**
     * 
     *   Process REMOTE FILES or script BULK TOOL EXECUTIONS using Python code IN A REMOTE SANDBOX. If you can see the data in chat, DON'T USE THIS TOOL.
     * **ONLY** use this when processing **data stored in a remote file** or when scripting bulk tool executions.
     * 
     * DO NOT USE
     * - When the complete response is already inline/in-memory, or you only need quick parsing, summarization, or basic math.
     * 
     * USE IF
     * - To parse/analyze tool outputs saved to a remote file in the sandbox or to script multi-tool chains there.
     * - For bulk or repeated executions of known Composio tools (e.g., add a label to 100 emails).
     * - To call APIs via proxy_execute when no Composio tool exists for that API.
     * 
     * OUTPUTS
     * - Returns a compact result or, if too long, artifacts under `/home/user/.code_out`.
     * 
     * IMPORTANT CODING RULES:
     *   1. Stepwise Execution: Split work into small steps. Save intermediate outputs in variables or temporary file in `/tmp/`. Call COMPOSIO_REMOTE_WORKBENCH again for the next step. This improves composability and avoids timeouts.
     *   2. Notebook Persistence: This is a persistent Jupyter notebook cell: variables, functions, imports, and in-memory state from previous and future code executions are preserved in the notebook’s history and available for reuse. You also have a few helper functions available.
     *   3. Parallelism & Timeout (CRITICAL): There is a hard timeout of 4 minutes so complete the code within that. Prioritize PARALLEL execution using ThreadPoolExecutor with suitable concurrency for bulk operations - e.g., call run_composio_tool or invoke_llm parallelly across rows to maximize efficiency.
     *     3.1 If the data is large, split into smaller batches and call the workbench multiple times.
     *   4. Checkpoints: Implement checkpoints (in memory or files) so that long runs can be resumed from the last completed step.
     *   5. Schema Safety: Never assume the response schema for run_composio_tool if not known already from previous tools. To inspect schema, either run a simple request **outside** the workbench via COMPOSIO_MULTI_EXECUTE_TOOL or use invoke_llm helper.
     *   6. LLM Helpers: Always use invoke_llm helper for summary, analysis, or field extraction on results. This is a smart LLM that will give much better results than any adhoc filtering.
     *   7. Avoid Meta Loops: Do not use run_composio_tool to call COMPOSIO_MULTI_EXECUTE_TOOL or other COMPOSIO_* meta tools to avoid cycles. Only use it for app tools.
     *   8. Pagination: Use when data spans multiple pages. Continue fetching pages with the returned next_page_token or cursor until none remains. Parallelize fetching pages if tool supports page_number.
     *   9. No Hardcoding: Never hardcode data in code. Always load it from files or tool responses, iterating to construct intermediate or final inputs/outputs.
     *   10. Code Correctness (CRITICAL): Code must be syntactically and semantically correct and executable.
     *   11. If the final output is in a workbench file, use upload_local_file to download it - never expose the raw workbench file path to the user. Prefer to download useful artifacts after task is complete.
     * 
     * 
     * ENV & HELPERS:
     * 1. Home directory: `/home/user`.
     * 2. Helper functions already initialized in the workbench - never import or redeclare them:
     *     1) 
     * `run_composio_tool(tool_slug: str, arguments: dict) -> tuple[Dict[str, Any], str]`: Execute a known Composio **app** tool (from COMPOSIO_SEARCH_TOOLS). Do not invent names; match the tool's input schema. Suited for loops/parallel/bulk over datasets.
     *       i) run_composio_tool returns JSON with top-level "data". Parse carefully—structure may be nested.
     *     
     *     2) 
     * `invoke_llm(query: str) -> tuple[str, str]`: Invoke an LLM for semantic tasks. Pass MAX 400000 characters in input.
     *       i) NOTE Prompting guidance: When building prompts for invoke_llm, prefer f-strings (or concatenation) so literal braces stay intact. If using str.format, escape braces by doubling them ({{ }}).
     *       ii) Define the exact JSON schema you want and batch items into smaller groups to stay within token limit.
     * 
     *     3) `proxy_execute(method, endpoint, toolkit, query_params=None, body=None, headers=None) -> tuple[Any, str]`: Call a toolkit API directly when no Composio tool exists. Only one toolkit can be invoked with proxy_execute per workbench call
     *     4) `web_search(query: str) -> tuple[str, str]`: Search the web for information.
     *     5) `upload_local_file(*file_paths) -> tuple[Dict[str, Any], str]`: Upload files to Composio S3/R2 storage. Use this to download any generated files/artifacts from the sandbox.
     *     6) `smart_file_extract(file_path: str, show_preview: bool = True) -> tuple[str, str]`: Process different file types and extract text content.
     *     7) Workbench comes with comprehensive Image Processing (PIL/Pillow, OpenCV, scikit-image), PyTorch ML libraries, Document and Report handling tools (pandoc, python-docx, pdfplumber, reportlab), and standard Data Analysis tools (pandas, numpy, matplotlib) for advanced visual, analytical, and AI tasks."
     *   All helper functions return a tuple (result, error). Always check error before using result.
     * 
     * ## Python Helper Functions for LLM Scripting
     * 
     * 
     * ### run_composio_tool(tool_slug, arguments)
     * Executes a known Composio tool via backend API. Do NOT call COMPOSIO_* meta tools to avoid cyclic calls.
     * 
     *     def run_composio_tool(tool_slug: str, arguments: Dict[str, Any]) -> tuple[Dict[str, Any], str]
     *     # Returns: (tool_response_dict, error_message)
     *     #   Success: ({"data": {actual_data}}, "") - Note the top-level data
     *     #   Error:   ({}, "error_message") or (response_data, "error_message")
     * 
     *     result, error = run_composio_tool("GMAIL_FETCH_EMAILS", {"max_results": 1, "user_id": "me"})
     *     if error:
     *         print("GMAIL_FETCH_EMAILS error:", error); return
     *     email_data = result.get("data", {})
     *     print("Fetched:", email_data)
     *     
     * 
     * 
     * ### invoke_llm(query)
     * Calls LLM for reasoning, analysis, and semantic tasks. Pass MAX 400k characters input.
     * 
     *     def invoke_llm(query: str) -> tuple[str, str]
     *     # Returns: (llm_response, error_message)
     * 
     *     resp, error = invoke_llm("Summarize the key points from this data")
     *     if not error:
     *       print("LLM:", resp)
     * 
     *     # Example: analyze tool response with LLM
     *     tool_resp, err = run_composio_tool("GMAIL_FETCH_EMAILS", {"max_results": 5, "user_id": "me"})
     *     if not err:
     *       parsed = tool_resp.get("data", {})
     *       resp, err2 = invoke_llm(f"Analyze these emails and summarize: {parsed}")
     *       if not err2:
     *         print("LLM Gmail Summary:", resp)
     *     # TIP: batch prompts to reduce LLM calls.
     *     
     * 
     * 
     * ### proxy_execute(method, endpoint, toolkit, query_params=None, body=None, headers=None)
     * Direct API call to a connected toolkit service.
     * 
     *     def proxy_execute(
     *         method: Literal["GET","POST","PUT","DELETE","PATCH"],
     *         endpoint: str,
     *         toolkit: str,
     *         query_params: Optional[Dict[str, str]] = None,
     *         body: Optional[object] = None,
     *         headers: Optional[Dict[str, str]] = None,
     *     ) -> tuple[Any, str]
     *     # Returns: (response_data, error_message)
     * 
     *     # Example: GET request with query parameters
     *     query_params = {"q": "is:unread", "maxResults": "10"}
     *     data, error = proxy_execute("GET", "/gmail/v1/users/me/messages", "gmail", query_params=query_params)
     *     if not error:
     *       print("Success:", data)
     * 
     * 
     * ### web_search(query)
     * Searches the web via Exa AI.
     * 
     *     def web_search(query: str) -> tuple[str, str]
     *     # Returns: (search_results_text, error_message)
     * 
     *     results, error = web_search("latest developments in AI")
     *     if not error:
     *         print("Results:", results)
     * 
     * 
     * ### upload_local_file(*file_paths)
     * Uploads files to Composio S3/R2 storage. Single files upload directly, multiple files are auto-zipped.
     * Use this when you need to upload/download any generated artifacts from the sandbox.
     * 
     *     def upload_local_file(*file_paths) -> tuple[Dict[str, Any], str]
     *     # Returns: (result_dict, error_string)
     *     # Success: ({"s3_url": str, "uploaded_file": str, "type": str, "id": str, "key": str, "message": str}, "")
     *     # Error: ({}, "error_message")
     * 
     *     # Single file
     *     result, error = upload_local_file("/path/to/report.pdf")
     * 
     *     # Multiple files (auto-zipped)
     *     result, error = upload_local_file("/home/user/doc1.txt", "/home/user/doc2.txt")
     * 
     *     if not error:
     *       print("Uploaded:", result["s3_url"])
     * 
     * ## Best Practices
     * 
     * 
     * ### Error-first pattern and Defensive parsing (print keys while narrowing)
     *     res, err = run_composio_tool("GMAIL_FETCH_EMAILS", {"max_results": 5})
     *     if err:
     *         print("error:", err); return
     *     if isinstance(res, dict):
     *         print("res keys:", list(res.keys()))
     *         data = res.get("data") or {}
     *         print("data keys:", list(data.keys()))
     *         msgs = data.get("messages") or []
     *         print("messages count:", len(msgs))
     *         for m in msgs:
     *             print("subject:", m.get("subject", "<missing>"))
     * 
     * ### Parallelize (4-min sandbox timeout)
     * Adjust concurrency so all tasks finish within 4 minutes.
     * 
     *     import concurrent.futures
     * 
     *     MAX_CONCURRENCY = 10 # Adjust as needed
     * 
     *     def send_bulk_emails(email_list):
     *         def send_single(email):
     *             result, error = run_composio_tool("GMAIL_SEND_EMAIL", {
     *                 "to": email["recipient"], "subject": email["subject"], "body": email["body"]
     *             })
     *             if error:
     *                 print(f"Failed {email['recipient']}: {error}")
     *                 return {"status": "failed", "error": error}
     *             return {"status": "sent", "data": result}
     * 
     *         results = []
     *         with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_CONCURRENCY) as ex:
     *             futures = [ex.submit(send_single, e) for e in email_list]
     *             for f in concurrent.futures.as_completed(futures):
     *                 results.append(f.result())
     *         return results
     * 
     *     email_list = [{"recipient": f"user{i}@example.com", "subject": "Test", "body": "Hello"} for i in range(1000)]
     *     results = send_bulk_emails(email_list)
     *     
     * 
     * 
     * Guidance: Ensure to peform the task with High Accuracy and Completeness. For large data, use parallel processing (ThreadPoolExecutor) and fewer batches in each call to maximise efficiency. Leverage invoke_llm for smart analysis whenever needed. NEVER hardcode data in code and NEVER run COMPOSIO_MULTI_EXECUTE_TOOL in the workbench.
     *     
     */
    REMOTE_WORKBENCH: "COMPOSIO_REMOTE_WORKBENCH",
    /**
     * Toolkits are like github, linear, gmail, etc. tools are like send email, create issue, etc programmatic functions that can be used to perform the action. not all toolkits support all tools. some toolkits support only a subset of tools that might be possible to perform with that toolkit. use this action to retrieve the toolkits that can be used to perform the action. this list is only probabilistic. retrieve toolkits for a specified usecase. so for example, if use case is to "send an email" this action will return all the toolkits that can be used to send email. simiarly if use case is to "create a github issue" this action will return all the toolkits that can be used to create a github issue. after using this, to confirm whether the toolkit can indeed potentially support the use case, use the action retrieve actions.
     */
    RETRIEVE_TOOLKITS: "COMPOSIO_RETRIEVE_TOOLKITS",
    /**
     * Discover tools and analyze dependencies for complex workflows using ai agent. this action uses an ai agent to intelligently search for tools across toolkits and create optimized execution sequences with detailed instructions.
     */
    SEARCH_AGENT: "COMPOSIO_SEARCH_AGENT",
    /**
     * The duckduckgosearch class utilizes the composio duckduckgo search api to perform searches, focusing on web information and details. it leverages the duckduckgo search engine via the composio duckduckgo search api to retrieve relevant web data based on the provided query.
     */
    SEARCH_DUCK_DUCK_GO_SEARCH: "COMPOSIO_SEARCH_DUCK_DUCK_GO_SEARCH",
    /**
     * The eventsearch class enables scraping of google events search queries. it conducts an event search using the composio events search api, retrieving information on events such as concerts, festivals, and other activities based on the provided query.
     */
    SEARCH_EVENT_SEARCH: "COMPOSIO_SEARCH_EVENT_SEARCH",
    /**
     * Get answers with citations using the exa api.
     */
    SEARCH_EXA_ANSWER: "COMPOSIO_SEARCH_EXA_ANSWER",
    /**
     * Perform a search to find similar links and retrieve a list of relevant results. the search can optionally return contents.
     */
    SEARCH_EXA_SIMILARLINK: "COMPOSIO_SEARCH_EXA_SIMILARLINK",
    /**
     * The financesearch class utilizes the composio finance search api to conduct financial searches, focusing on financial data and stock information. it leverages the google finance search engine via the composio finance search api to retrieve pertinent financial details based on the provided query.
     */
    SEARCH_FINANCE_SEARCH: "COMPOSIO_SEARCH_FINANCE_SEARCH",
    /**
     * The googlemapssearch class performs a location-specific search using the composio goolge maps search api. this class extends the functionality of the base action class to specifically target locations related to the given query. by utilizing the google maps search engine through the composio goolge maps search api, it fetches the most relevant location data based on the input query. the `googlemapssearch` class is particularly useful for applications that need to retrieve and display location information about a specific area. it leverages the powerful search capabilities of google's maps search engine, ensuring that the returned results are accurate and relevant.
     */
    SEARCH_GOOGLE_MAPS_SEARCH: "COMPOSIO_SEARCH_GOOGLE_MAPS_SEARCH",
    /**
     * The imagesearch class performs an image search using the composio image search api, to target image data and information. it uses the google images search engine through the composio image search api to fetch relevant image information based on the input query.
     */
    SEARCH_IMAGE_SEARCH: "COMPOSIO_SEARCH_IMAGE_SEARCH",
    /**
     * The newssearch class performs a news-specific search using the composio news search api. this class extends the functionality of the base action class to specifically target news articles related to the given query. by utilizing the google news search engine through the composio news search api, it fetches the most relevant news articles based on the input query. the `newssearch` class is particularly useful for applications that need to retrieve and display the latest news articles about a specific topic. it leverages the powerful search capabilities of google's news search engine, ensuring that the returned results are current and relevant.
     */
    SEARCH_NEWS_SEARCH: "COMPOSIO_SEARCH_NEWS_SEARCH",
    /**
     * Scholar api allows you to scrape results from a google scholar search query. the scholarsearch class performs an academic search using the composio scholar search api, academic papers and scholarly articles. it uses the google scholar search engine through the serp api to fetch relevant academic information based on the input query.
     */
    SEARCH_SCHOLAR_SEARCH: "COMPOSIO_SEARCH_SCHOLAR_SEARCH",
    /**
     * Perform a google search using the composio google search api.
     */
    SEARCH_SEARCH: "COMPOSIO_SEARCH_SEARCH",
    /**
     * The shoppingsearch class performs a product search using the composio shopping search api.it specifically target shopping results related to the given query. by utilizing the google shopping search engine through the composio shopping search api, it fetches the most relevant product listings based on the input query. the `shoppingsearch` class is particularly useful for applications that need to retrieve and display the latest product listings and shopping results for a specific item. it leverages the powerful search capabilities of google's shopping search engine, ensuring that the returned results are current and relevant.
     */
    SEARCH_SHOPPING_SEARCH: "COMPOSIO_SEARCH_SHOPPING_SEARCH",
    /**
     * The composio llm search class serves as a gateway to the composio llm search api, allowing users to perform searches across a broad range of content with multiple filtering options. it accommodates complex queries, including both keyword and phrase searches, with additional parameters to fine-tune the search results. this class enables a tailored search experience by allowing users to specify the search depth, include images and direct answers, apply domain-specific filters, and control the number of results returned. it is designed to meet various search requirements, from quick lookups to in-depth research.
     */
    SEARCH_TAVILY_SEARCH: "COMPOSIO_SEARCH_TAVILY_SEARCH",
    /**
     * 
     *   MCP Server Info: COMPOSIO MCP connects 500+ apps—Slack, GitHub, Notion, Google Workspace (Gmail, Sheets, Drive, Calendar), Microsoft (Outlook, Teams), X, Figma, Web Search, Browser Tool, Meta apps (WhatsApp, Instagram), TikTok, AI tools like Nano Banana & Veo3, and more—for seamless cross-app automation.
     *   Use this MCP server to discover new tools and connect to apps.
     *   ALWAYS call this tool first whenever a user mentions or implies an external app, service, or workflow—never say "I don’t have access to X/Y app" before calling it.
     * 
     *   Tool Info: Extremely fast search tool to discover available MCP callable tools that can be used to solve a particular problem, user query or complete a task.
     * Usage guidelines:
     *   - Use this tool whenever kicking off a task. Post this, keep coming back to this tool to discover new tools.
     *   - If the user pivots to a different use case in same chat, you MUST call this tool again with the new use case.
     *   - Specify the use_case with a normalized description of the problem, query, or task. Be clear and precise so the system can find the most relevant tools. Queries can be simple single-app actions, or multiple queries can be linked to form complex cross-app workflows.
     *   - Pass known_fields along with use_case as a list of key-value pairs to help the search provide tools to look up missing details (for example, finding channel_id from a given channel_name).
     * 
     *   Example:
     *   User query: "send an email to John welcoming him and create a meeting invite"
     *   Search call: queries: [{use_case: "send an email to someone", known_fields: "recipient_name: John"}, {use_case: "create a meeting invite", known_fields: "meeting_subject: Welcome John"}]
     * 
     * Response:
     *   - The response lists toolkits (apps) and tools suitable for the task, along with their tool_slug, description, input schema, and related tools for prerequisites, alternatives, or next steps. Includes detailed plan and pitfalls for optimal execution.
     *   - If a toolkit has an active connection, the response includes it along with any available current user information. If no active connection exists, the response lists any required parameters for establishing a new one.
     *   - The response includes the current UTC time for reference. You can reference UTC time from the response if needed.
     *   - The response includes a memory parameter containing relevant information about the use case and the known fields that can be used to determine the flow of execution. Any user preferences in memory should be adhered to.
     *   - The tools returned to you through this are to be called via COMPOSIO_MULTI_EXECUTE_TOOL. Make sure to specify the tool_slug and arguments for each tool execution properly.
     * 
     * SESSION: ALWAYS set this parameter, first for any workflow. Pass session: {generate_id: true} for new workflows OR session: {id: "EXISTING_ID"} to continue. ALWAYS use the returned session_id in ALL subsequent meta tool calls.
     *     
     */
    SEARCH_TOOLS: "COMPOSIO_SEARCH_TOOLS",
    /**
     * The trendssearch class performs a trend search using the google trends search api, to target trend data and information. it uses the google trends search engine through the google trends search api to fetch relevant trend information based on the input query.
     */
    SEARCH_TRENDS_SEARCH: "COMPOSIO_SEARCH_TRENDS_SEARCH",
    /**
     * 
     * Wait for the user to complete authentication AFTER you have given them an auth URL from COMPOSIO_MANAGE_CONNECTIONS. Use this **immediately after** sharing the auth URL so you can automatically continue once the connection is established — without waiting for the user to manually come back and say they’re done. Make sure you have printed the auth URL, DO NOT call this tool without printing auth URL first.
     *     This ensures a smooth, uninterrupted flow and a better user experience.
     *   You NEED NOT wait if there is no auth URL in the response of COMPOSIO_MANAGE_CONNECTIONS like in cases you ask user for  api_key, client_id or client_secret.
     *     Input params <toolkits: list of toolkit names>, <mode (any / all) : wait for ANY or ALL connections to reach success/failed state (default: any) >
     *     Output params <connection statuses>
     *     Example:
     *     input:
     *     toolkits: [gmail, outlook]
     *     mode: [any]
     *     output: {
     *       gmail: {
     *         status: [connected]
     *       },
     *       outlook: {
     *         status: [initiated]
     *       }
     *     }
     *     
     */
    WAIT_FOR_CONNECTION: "COMPOSIO_WAIT_FOR_CONNECTION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "COMPOSIO".
 */
export type COMPOSIO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "COMPOSIO".
 */
export type COMPOSIO_TRIGGER_EVENTS = {}
