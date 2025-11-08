// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of NANGO's NANGO_ACTION_TRIGGER_POST tool input.
 */
type NANGO_ACTION_TRIGGER_POST_INPUT = {
  /**
   * Action
   * @description The unique identifier of the action to trigger.
   */
  action?: string;
  /**
   * Connection Id
   * @description The ID of the connection to use.
   */
  connection_id?: string;
  /**
   * Input
   * @description The input payload for the workflow/action.
   * @default null
   */
  input: {
      [key: string]: unknown;
  } | null;
  /**
   * Provider Config Key
   * @description The provider configuration key.
   */
  provider_config_key?: string;
};

/**
 * Type of NANGO's NANGO_ACTION_TRIGGER_POST tool output.
 */
type NANGO_ACTION_TRIGGER_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the action fails.
       * @default null
       */
      error: string | null;
      /**
       * Output
       * @description The response data specific to the triggered action.
       */
      output: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Status of the action, e.g. 'success' or 'error'.
       */
      status: string;
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
 * Type of NANGO's NANGO_CONNECTION_GET tool input.
 */
type NANGO_CONNECTION_GET_INPUT = object;

/**
 * Type of NANGO's NANGO_CONNECTION_GET tool output.
 */
type NANGO_CONNECTION_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connections
       * @description List of connection objects
       */
      connections: {
          /**
           * Connection Id
           * @description Provider-specific connection ID
           */
          connection_id: string;
          /**
           * Created At
           * @description Timestamp when the connection was created (ISO8601)
           */
          created_at: string;
          /**
           * Credentials
           * @description Stored credentials for the connection
           */
          credentials: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique ID of the Nango connection
           */
          id: string;
          /**
           * Provider
           * @description Provider name (e.g., 'github')
           */
          provider: string;
          /**
           * Provider Config Key
           * @description Provider config key associated with the connection
           */
          provider_config_key: string;
          /**
           * Updated At
           * @description Timestamp when the connection was last updated (ISO8601)
           */
          updated_at: string;
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
 * Type of NANGO's NANGO_CONNECTION_LIST_GET tool input.
 */
type NANGO_CONNECTION_LIST_GET_INPUT = {
  /**
   * Connection Id
   * @description Filter connections by specific connection ID.
   * @default null
   */
  connection_id: string | null;
  /**
   * Provider Config Key
   * @description Filter connections by provider configuration key.
   * @default null
   */
  provider_config_key: string | null;
};

/**
 * Type of NANGO's NANGO_CONNECTION_LIST_GET tool output.
 */
type NANGO_CONNECTION_LIST_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connections
       * @description List of connection objects without credentials.
       */
      connections: {
          /**
           * Connection Config
           * @description Provider-specific configuration object without credentials.
           */
          connection_config: {
              [key: string]: unknown;
          };
          /**
           * Connection Id
           * @description Connection identifier.
           */
          connection_id: string;
          /**
           * Created At
           * @description Connection creation timestamp in ISO 8601 format.
           */
          created_at: string;
          /**
           * Id
           * @description Unique connection ID.
           */
          id: string;
          /**
           * Provider
           * @description Name of the provider.
           */
          provider: string;
          /**
           * Provider Config Key
           * @description Provider configuration key.
           */
          provider_config_key: string;
          /**
           * Updated At
           * @description Last update timestamp in ISO 8601 format.
           */
          updated_at: string;
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
 * Type of NANGO's NANGO_PROVIDERS_GET_GET tool input.
 */
type NANGO_PROVIDERS_GET_GET_INPUT = {
  /**
   * Provider
   * @description The unique provider key or identifier
   */
  provider?: string;
};

/**
 * Type of NANGO's NANGO_PROVIDERS_GET_GET tool output.
 */
type NANGO_PROVIDERS_GET_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Additional Fields
       * @description Provider-specific extra fields.
       */
      additional_fields: {
          [key: string]: unknown;
      };
      /**
       * Auth Mode
       * @description Provider's authentication mode (e.g., oauth2, oauth1, api_key).
       */
      auth_mode: string;
      /**
       * Docs
       * @description Link to provider's documentation.
       */
      docs: string;
      /**
       * Provider
       * @description Name of the provider.
       */
      provider: string;
      /**
       * Unique Key
       * @description Provider's unique key.
       */
      unique_key: string;
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
 * Type of NANGO's NANGO_PROVIDERS_LIST_GET tool input.
 */
type NANGO_PROVIDERS_LIST_GET_INPUT = object;

/**
 * Type of NANGO's NANGO_PROVIDERS_LIST_GET tool output.
 */
type NANGO_PROVIDERS_LIST_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Providers
       * @description List of all available providers
       */
      providers: {
          /**
           * Category
           * @description Category of the provider
           */
          category: string;
          /**
           * Display Name
           * @description Human-readable name of the provider
           */
          display_name: string;
          /**
           * Docs
           * @description URL to the provider's documentation
           */
          docs: string;
          /**
           * Image
           * @description URL to an image/icon for the provider
           */
          image: string;
          /**
           * Name
           * @description Internal identifier of the provider
           */
          name: string;
          /**
           * Status
           * @description Visibility status of the provider (e.g., 'public', 'private', 'beta')
           */
          status: string;
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
 * Type of NANGO's NANGO_SCRIPTS_CONFIG_GET tool input.
 */
type NANGO_SCRIPTS_CONFIG_GET_INPUT = object;

/**
 * Type of NANGO's NANGO_SCRIPTS_CONFIG_GET tool output.
 */
type NANGO_SCRIPTS_CONFIG_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Scripts
       * @description List of script configurations.
       */
      scripts: {
          /**
           * File
           * @description Filename of the script.
           */
          file: string;
          /**
           * Function
           * @description Function name in the script.
           */
          function: string;
          /**
           * Name
           * @description Name of the script.
           */
          name: string;
          /**
           * Runs On
           * @description Trigger type for the script.
           */
          runs_on: string;
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
 * Type of NANGO's NANGO_SYNC_TRIGGER_POST tool input.
 */
type NANGO_SYNC_TRIGGER_POST_INPUT = {
  /**
   * Connection Id
   * @description Identifier of the connection under which to run the sync.
   */
  connection_id?: string;
  /**
   * Sync Id
   * @description Unique ID of the sync definition to trigger.
   */
  sync_id?: string;
};

/**
 * Type of NANGO's NANGO_SYNC_TRIGGER_POST tool output.
 */
type NANGO_SYNC_TRIGGER_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job Id
       * @description ID of the triggered sync job.
       */
      job_id: string;
      /**
       * Message
       * @description Optional message with further details.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the sync trigger was successful.
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
 * Type map of all available tool input types for toolkit "NANGO".
 */
export type NANGO_TOOL_INPUTS = {
  ACTION_TRIGGER_POST: NANGO_ACTION_TRIGGER_POST_INPUT
  CONNECTION_GET: NANGO_CONNECTION_GET_INPUT
  CONNECTION_LIST_GET: NANGO_CONNECTION_LIST_GET_INPUT
  PROVIDERS_GET_GET: NANGO_PROVIDERS_GET_GET_INPUT
  PROVIDERS_LIST_GET: NANGO_PROVIDERS_LIST_GET_INPUT
  SCRIPTS_CONFIG_GET: NANGO_SCRIPTS_CONFIG_GET_INPUT
  SYNC_TRIGGER_POST: NANGO_SYNC_TRIGGER_POST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "NANGO".
 */
export type NANGO_TOOL_OUTPUTS = {
  ACTION_TRIGGER_POST: NANGO_ACTION_TRIGGER_POST_OUTPUT
  CONNECTION_GET: NANGO_CONNECTION_GET_OUTPUT
  CONNECTION_LIST_GET: NANGO_CONNECTION_LIST_GET_OUTPUT
  PROVIDERS_GET_GET: NANGO_PROVIDERS_GET_GET_OUTPUT
  PROVIDERS_LIST_GET: NANGO_PROVIDERS_LIST_GET_OUTPUT
  SCRIPTS_CONFIG_GET: NANGO_SCRIPTS_CONFIG_GET_OUTPUT
  SYNC_TRIGGER_POST: NANGO_SYNC_TRIGGER_POST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's NANGO toolkit.
 */
export const NANGO = {
  slug: "nango",
  tools: {
    /**
     * Tool to trigger nango workflow actions via api. use when you need to execute an action by specifying the connection, provider config, and action identifier.
     */
    ACTION_TRIGGER_POST: "NANGO_ACTION_TRIGGER_POST",
    /**
     * Tool to list all connections. use when you need to retrieve existing connections.
     */
    CONNECTION_GET: "NANGO_CONNECTION_GET",
    /**
     * Tool to list all connections without credentials. use when you need connection metadata across your account without exposing credentials.
     */
    CONNECTION_LIST_GET: "NANGO_CONNECTION_LIST_GET",
    /**
     * Tool to retrieve details for a specific provider. use when you need to fetch provider configuration details by name (e.g., 'salesforce'). use after selecting the provider.
     */
    PROVIDERS_GET_GET: "NANGO_PROVIDERS_GET_GET",
    /**
     * Tool to retrieve a list of all available providers. use when you need to display or iterate through every provider before creating connections.
     */
    PROVIDERS_LIST_GET: "NANGO_PROVIDERS_LIST_GET",
    /**
     * Tool to fetch the nango scripts configuration. use when you need to get the available scripts and their triggers.
     */
    SCRIPTS_CONFIG_GET: "NANGO_SCRIPTS_CONFIG_GET",
    /**
     * Tool to trigger a sync process manually. use after establishing a connection and defining a sync.
     */
    SYNC_TRIGGER_POST: "NANGO_SYNC_TRIGGER_POST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "NANGO".
 */
export type NANGO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "NANGO".
 */
export type NANGO_TRIGGER_EVENTS = {}
