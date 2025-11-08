// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TURBOT_PIPES's TURBOT_PIPES_ACTOR_GET tool input.
 */
type TURBOT_PIPES_ACTOR_GET_INPUT = object;

/**
 * Type of TURBOT_PIPES's TURBOT_PIPES_ACTOR_GET tool output.
 */
type TURBOT_PIPES_ACTOR_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the actor was created
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the actor
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the actor
       */
      id: string;
      /**
       * Name
       * @description Name of the actor
       */
      name: string;
      /**
       * State
       * @description Current state of the actor (e.g., active, inactive)
       */
      state: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the actor was last updated
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
 * Type of TURBOT_PIPES's TURBOT_PIPES_ACTOR_LIST_ACTIVITY tool input.
 */
type TURBOT_PIPES_ACTOR_LIST_ACTIVITY_INPUT = {
  /**
   * Filter
   * @description Query to filter actor activities (e.g., 'action=login').
   * @default null
   */
  filter: string | null;
  /**
   * Limit
   * @description Maximum number of activity records to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip for pagination.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of TURBOT_PIPES's TURBOT_PIPES_ACTOR_LIST_ACTIVITY tool output.
 */
type TURBOT_PIPES_ACTOR_LIST_ACTIVITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of actor activity records.
       */
      items: {
          /**
           * Action
           * @description Action performed.
           */
          action: string;
          /**
           * Actor Id
           * @description ID of the actor.
           */
          actor_id: string;
          /**
           * Details
           * @description Additional details for the activity.
           */
          details: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique activity ID.
           */
          id: string;
          /**
           * Timestamp
           * @description ISO 8601 timestamp when the activity occurred.
           */
          timestamp: string;
      }[];
      /**
       * Limit
       * @description Limit used in this response.
       */
      limit: number;
      /**
       * Offset
       * @description Offset used in this response.
       */
      offset: number;
      /**
       * Total
       * @description Total number of matching records.
       */
      total: number;
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
 * Type of TURBOT_PIPES's TURBOT_PIPES_ACTOR_LIST_CONNECTIONS tool input.
 */
type TURBOT_PIPES_ACTOR_LIST_CONNECTIONS_INPUT = {
  /**
   * Actor Id
   * @description Filter by actor ID
   * @default null
   */
  actorId: string | null;
  /**
   * Limit
   * @description Maximum number of results to return, must be >=1
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Pagination offset, must be >=0
   * @default null
   */
  offset: number | null;
  /**
   * Type
   * @description Filter by connection type
   * @default null
   */
  type: string | null;
};

/**
 * Type of TURBOT_PIPES's TURBOT_PIPES_ACTOR_LIST_CONNECTIONS tool output.
 */
type TURBOT_PIPES_ACTOR_LIST_CONNECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connections
       * @description List of connections associated with the actor
       */
      connections: {
          /**
           * Details
           * @description Additional connection properties
           */
          details: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Connection identifier
           */
          id: string;
          /**
           * Name
           * @description Connection name
           */
          name: string;
          /**
           * Status
           * @description Current connection status
           */
          status: string;
          /**
           * Type
           * @description Connection type
           */
          type: string;
      }[];
      /**
       * Total
       * @description Total number of connections found
       */
      total: number;
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
 * Type of TURBOT_PIPES's TURBOT_PIPES_ACTOR_LIST_ORGS tool input.
 */
type TURBOT_PIPES_ACTOR_LIST_ORGS_INPUT = object;

/**
 * Type of TURBOT_PIPES's TURBOT_PIPES_ACTOR_LIST_ORGS tool output.
 */
type TURBOT_PIPES_ACTOR_LIST_ORGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Organizations
       * @description List of organizations associated with the authenticated actor.
       */
      organizations: {
          /**
           * Created At
           * @description Timestamp when the organization was created (ISO 8601).
           * @default null
           */
          createdAt: string | null;
          /**
           * Description
           * @description Optional text describing the organization.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Organization's unique identifier.
           */
          id: string;
          /**
           * Name
           * @description Organization's display name.
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the organization was last updated (ISO 8601).
           * @default null
           */
          updatedAt: string | null;
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
 * Type of TURBOT_PIPES's TURBOT_PIPES_ACTOR_LIST_WORKSPACES tool input.
 */
type TURBOT_PIPES_ACTOR_LIST_WORKSPACES_INPUT = object;

/**
 * Type of TURBOT_PIPES's TURBOT_PIPES_ACTOR_LIST_WORKSPACES tool output.
 */
type TURBOT_PIPES_ACTOR_LIST_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Workspaces
       * @description List of workspaces associated with the authenticated actor
       */
      workspaces: {
          /**
           * Created At
           * @description ISO-8601 timestamp when the workspace was created
           */
          created_at: string;
          /**
           * Id
           * @description Workspace identifier
           */
          id: string;
          /**
           * Name
           * @description Name of the workspace
           */
          name: string;
          /**
           * Updated At
           * @description ISO-8601 timestamp when the workspace was last updated
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
 * Type of TURBOT_PIPES's TURBOT_PIPES_AUTH_LOGIN_TOKEN_EMAIL_CREATE tool input.
 */
type TURBOT_PIPES_AUTH_LOGIN_TOKEN_EMAIL_CREATE_INPUT = {
  /**
   * Email
   * Format: email
   * @description User's email address to receive the login confirmation code
   */
  email?: unknown;
};

/**
 * Type of TURBOT_PIPES's TURBOT_PIPES_AUTH_LOGIN_TOKEN_EMAIL_CREATE tool output.
 */
type TURBOT_PIPES_AUTH_LOGIN_TOKEN_EMAIL_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Message indicating if the confirmation code was sent
       */
      message: string;
      /**
       * Status
       * @description Status of the request (e.g., 'success')
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
 * Type of TURBOT_PIPES's TURBOT_PIPES_IDENTITIES_GET tool input.
 */
type TURBOT_PIPES_IDENTITIES_GET_INPUT = {
  /**
   * Identity Handle
   * @description Unique identifier for the identity to retrieve
   */
  identity_handle?: string;
};

/**
 * Type of TURBOT_PIPES's TURBOT_PIPES_IDENTITIES_GET tool output.
 */
type TURBOT_PIPES_IDENTITIES_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the identity was created
       */
      createdAt: string;
      /**
       * Identity Handle
       * @description Unique identifier of the identity
       */
      identityHandle: string;
      /**
       * Name
       * @description Name of the identity
       */
      name: string;
      /**
       * Type
       * @description Type or classification of the identity
       */
      type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the identity was last updated
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
 * Type of TURBOT_PIPES's TURBOT_PIPES_IDENTITIES_GET_AVATAR tool input.
 */
type TURBOT_PIPES_IDENTITIES_GET_AVATAR_INPUT = {
  /**
   * Identity Handle
   * @description Handle or ID of the identity for which to retrieve the avatar image
   */
  identity_handle?: string;
};

/**
 * Type of TURBOT_PIPES's TURBOT_PIPES_IDENTITIES_GET_AVATAR tool output.
 */
type TURBOT_PIPES_IDENTITIES_GET_AVATAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Binary image data of the avatar
       */
      content: string;
      /**
       * Content Type
       * @description MIME type of the avatar image, e.g., image/png or image/jpeg
       */
      content_type: string;
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
 * Type of TURBOT_PIPES's TURBOT_PIPES_IDENTITIES_LIST tool input.
 */
type TURBOT_PIPES_IDENTITIES_LIST_INPUT = {
  /**
   * Filter
   * @description Filter expression to limit the identities returned (e.g., 'type:user').
   * @default null
   */
  filter: string | null;
  /**
   * Page
   * @description Page number to retrieve; must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of results per page; must be >= 1.
   * @default null
   */
  pageSize: number | null;
  /**
   * Sort
   * @description Comma-separated list of fields to sort by (e.g., 'name,createdAt').
   * @default null
   */
  sort: string | null;
};

/**
 * Type of TURBOT_PIPES's TURBOT_PIPES_IDENTITIES_LIST tool output.
 */
type TURBOT_PIPES_IDENTITIES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of identity objects.
       */
      items: {
          /**
           * Id
           * @description Unique identifier for the identity.
           */
          id: string;
          /**
           * Name
           * @description Display name of the identity.
           */
          name: string;
          /**
           * Type
           * @description Type of the identity (e.g., 'user', 'group').
           */
          type: string;
      }[];
      /**
       * Page Info
       * @description Pagination metadata.
       */
      pageInfo: {
          /**
           * Page
           * @description Current page number.
           */
          page: number;
          /**
           * Page Size
           * @description Number of identities per page.
           */
          pageSize: number;
          /**
           * Total
           * @description Total number of identities found.
           */
          total: number;
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
 * Type of TURBOT_PIPES's TURBOT_PIPES_USER_NOTIFIERS_LIST tool input.
 */
type TURBOT_PIPES_USER_NOTIFIERS_LIST_INPUT = {
  /**
   * User Handle
   * @description Handle of the user whose notifiers to list
   */
  user_handle?: string;
};

/**
 * Type of TURBOT_PIPES's TURBOT_PIPES_USER_NOTIFIERS_LIST tool output.
 */
type TURBOT_PIPES_USER_NOTIFIERS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Notifiers
       * @description List of user notifier summaries
       */
      notifiers: {
          /**
           * Config
           * @description Notifier configuration details
           */
          config: {
              [key: string]: unknown;
          };
          /**
           * Created At
           * @description ISO 8601 timestamp when the notifier was created
           */
          created_at: string;
          /**
           * Enabled
           * @description Flag indicating if the notifier is enabled
           */
          enabled: boolean;
          /**
           * Name
           * @description Name of the notifier
           */
          name: string;
          /**
           * Type
           * @description Type of notifier (e.g., 'email', 'slack')
           */
          type: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the notifier was last updated
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
 * Type of TURBOT_PIPES's TURBOT_PIPES_USER_TOKENS_DELETE tool input.
 */
type TURBOT_PIPES_USER_TOKENS_DELETE_INPUT = {
  /**
   * Token Id
   * @description Unique identifier of the token to be deleted
   */
  token_id?: string;
  /**
   * User Handle
   * @description Unique handle or identifier for the user whose token will be deleted
   */
  user_handle?: string;
};

/**
 * Type of TURBOT_PIPES's TURBOT_PIPES_USER_TOKENS_DELETE tool output.
 */
type TURBOT_PIPES_USER_TOKENS_DELETE_OUTPUT = {
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
 * Type of TURBOT_PIPES's TURBOT_PIPES_USER_TOKENS_GET tool input.
 */
type TURBOT_PIPES_USER_TOKENS_GET_INPUT = {
  /**
   * Token Id
   * @description Unique identifier of the token to retrieve
   */
  token_id?: string;
  /**
   * User Handle
   * @description Handle of the user in the system
   */
  user_handle?: string;
};

/**
 * Type of TURBOT_PIPES's TURBOT_PIPES_USER_TOKENS_GET tool output.
 */
type TURBOT_PIPES_USER_TOKENS_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the token was created (ISO 8601)
       */
      created_at: string;
      /**
       * Expires At
       * @description Expiration timestamp of the token, if set (ISO 8601)
       * @default null
       */
      expires_at: string | null;
      /**
       * Id
       * @description Unique identifier of the token
       */
      id: string;
      /**
       * Last Used At
       * @description Timestamp when the token was last used (ISO 8601)
       * @default null
       */
      last_used_at: string | null;
      /**
       * Scopes
       * @description Scopes or permissions associated with the token
       */
      scopes: string[];
      /**
       * Title
       * @description Title or name assigned to the token
       */
      title: string;
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
 * Type map of all available tool input types for toolkit "TURBOT_PIPES".
 */
export type TURBOT_PIPES_TOOL_INPUTS = {
  ACTOR_GET: TURBOT_PIPES_ACTOR_GET_INPUT
  ACTOR_LIST_ACTIVITY: TURBOT_PIPES_ACTOR_LIST_ACTIVITY_INPUT
  ACTOR_LIST_CONNECTIONS: TURBOT_PIPES_ACTOR_LIST_CONNECTIONS_INPUT
  ACTOR_LIST_ORGS: TURBOT_PIPES_ACTOR_LIST_ORGS_INPUT
  ACTOR_LIST_WORKSPACES: TURBOT_PIPES_ACTOR_LIST_WORKSPACES_INPUT
  AUTH_LOGIN_TOKEN_EMAIL_CREATE: TURBOT_PIPES_AUTH_LOGIN_TOKEN_EMAIL_CREATE_INPUT
  IDENTITIES_GET: TURBOT_PIPES_IDENTITIES_GET_INPUT
  IDENTITIES_GET_AVATAR: TURBOT_PIPES_IDENTITIES_GET_AVATAR_INPUT
  IDENTITIES_LIST: TURBOT_PIPES_IDENTITIES_LIST_INPUT
  USER_NOTIFIERS_LIST: TURBOT_PIPES_USER_NOTIFIERS_LIST_INPUT
  USER_TOKENS_DELETE: TURBOT_PIPES_USER_TOKENS_DELETE_INPUT
  USER_TOKENS_GET: TURBOT_PIPES_USER_TOKENS_GET_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TURBOT_PIPES".
 */
export type TURBOT_PIPES_TOOL_OUTPUTS = {
  ACTOR_GET: TURBOT_PIPES_ACTOR_GET_OUTPUT
  ACTOR_LIST_ACTIVITY: TURBOT_PIPES_ACTOR_LIST_ACTIVITY_OUTPUT
  ACTOR_LIST_CONNECTIONS: TURBOT_PIPES_ACTOR_LIST_CONNECTIONS_OUTPUT
  ACTOR_LIST_ORGS: TURBOT_PIPES_ACTOR_LIST_ORGS_OUTPUT
  ACTOR_LIST_WORKSPACES: TURBOT_PIPES_ACTOR_LIST_WORKSPACES_OUTPUT
  AUTH_LOGIN_TOKEN_EMAIL_CREATE: TURBOT_PIPES_AUTH_LOGIN_TOKEN_EMAIL_CREATE_OUTPUT
  IDENTITIES_GET: TURBOT_PIPES_IDENTITIES_GET_OUTPUT
  IDENTITIES_GET_AVATAR: TURBOT_PIPES_IDENTITIES_GET_AVATAR_OUTPUT
  IDENTITIES_LIST: TURBOT_PIPES_IDENTITIES_LIST_OUTPUT
  USER_NOTIFIERS_LIST: TURBOT_PIPES_USER_NOTIFIERS_LIST_OUTPUT
  USER_TOKENS_DELETE: TURBOT_PIPES_USER_TOKENS_DELETE_OUTPUT
  USER_TOKENS_GET: TURBOT_PIPES_USER_TOKENS_GET_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TURBOT_PIPES toolkit.
 */
export const TURBOT_PIPES = {
  slug: "turbot_pipes",
  tools: {
    /**
     * Tool to retrieve the authenticated actor. use when you need details about the currently authenticated actor after obtaining a valid token.
     */
    ACTOR_GET: "TURBOT_PIPES_ACTOR_GET",
    /**
     * Tool to list activities for the authenticated actor. use when you need detailed activity logs with optional filtering and pagination.
     */
    ACTOR_LIST_ACTIVITY: "TURBOT_PIPES_ACTOR_LIST_ACTIVITY",
    /**
     * Tool to list connections associated with the authenticated actor. use after confirming authentication to retrieve the actor's connection list.
     */
    ACTOR_LIST_CONNECTIONS: "TURBOT_PIPES_ACTOR_LIST_CONNECTIONS",
    /**
     * Tool to list organizations associated with the authenticated actor. use when you have a valid access token.
     */
    ACTOR_LIST_ORGS: "TURBOT_PIPES_ACTOR_LIST_ORGS",
    /**
     * Tool to list workspaces for the authenticated actor. use when you need to retrieve all workspaces the actor has access to.
     */
    ACTOR_LIST_WORKSPACES: "TURBOT_PIPES_ACTOR_LIST_WORKSPACES",
    /**
     * Tool to start login process by sending a confirmation code to a user's email. use when initiating a passwordless email login flow.
     */
    AUTH_LOGIN_TOKEN_EMAIL_CREATE: "TURBOT_PIPES_AUTH_LOGIN_TOKEN_EMAIL_CREATE",
    /**
     * Tool to retrieve a specific identity by handle. use when you need details of an identity by its handle after authenticating.
     */
    IDENTITIES_GET: "TURBOT_PIPES_IDENTITIES_GET",
    /**
     * Tool to retrieve avatar image for an identity. use when you need to display or download the user's avatar after knowing their identity handle.
     */
    IDENTITIES_GET_AVATAR: "TURBOT_PIPES_IDENTITIES_GET_AVATAR",
    /**
     * Tool to list all identities. use when you need to retrieve identities with optional filtering, sorting, and pagination after authentication.
     */
    IDENTITIES_LIST: "TURBOT_PIPES_IDENTITIES_LIST",
    /**
     * Tool to list all notifiers for a user. use when you need to view a user's configured notification endpoints.
     */
    USER_NOTIFIERS_LIST: "TURBOT_PIPES_USER_NOTIFIERS_LIST",
    /**
     * Tool to delete a specific user token. use when you need to revoke a user's token after confirming handle and token id.
     */
    USER_TOKENS_DELETE: "TURBOT_PIPES_USER_TOKENS_DELETE",
    /**
     * Tool to retrieve details of a specific user token. use when you need to inspect token metadata (e.g., creation time and scopes) after confirming the user handle and token id.
     */
    USER_TOKENS_GET: "TURBOT_PIPES_USER_TOKENS_GET",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TURBOT_PIPES".
 */
export type TURBOT_PIPES_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TURBOT_PIPES".
 */
export type TURBOT_PIPES_TRIGGER_EVENTS = {}
