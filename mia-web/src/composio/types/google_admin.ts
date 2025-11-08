// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_ADD_USER_ALIAS tool input.
 */
type GOOGLE_ADMIN_ADD_USER_ALIAS_INPUT = {
  /**
   * Alias
   * @description Alias email address to add to the user
   */
  alias?: string;
  /**
   * User Key
   * @description User's primary email address or unique user ID
   */
  user_key?: string;
};

/**
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_ADD_USER_ALIAS tool output.
 */
type GOOGLE_ADMIN_ADD_USER_ALIAS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full API response from Google Admin for the added alias
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
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_ADD_USER_TO_GROUP tool input.
 */
type GOOGLE_ADMIN_ADD_USER_TO_GROUP_INPUT = {
  /**
   * Group Key
   * @description Group's email address or unique group ID
   */
  group_key?: string;
  /**
   * Role
   * @description Role of the user in the group (MEMBER, MANAGER, OWNER)
   * @default MEMBER
   */
  role: string;
  /**
   * User Key
   * @description User's primary email address or unique user ID to add to the group
   */
  user_key?: string;
};

/**
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_ADD_USER_TO_GROUP tool output.
 */
type GOOGLE_ADMIN_ADD_USER_TO_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full API response from Google Admin for the added group member
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
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_CREATE_GROUP tool input.
 */
type GOOGLE_ADMIN_CREATE_GROUP_INPUT = {
  /**
   * Description
   * @description Description of the group's purpose
   * @default
   */
  description: string;
  /**
   * Email
   * @description Group's email address (will be the group ID)
   */
  email?: string;
  /**
   * Name
   * @description Display name for the group
   */
  name?: string;
};

/**
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_CREATE_GROUP tool output.
 */
type GOOGLE_ADMIN_CREATE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full API response from Google Admin for the created group
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
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_CREATE_USER tool input.
 */
type GOOGLE_ADMIN_CREATE_USER_INPUT = {
  /**
   * Change Password At Next Login
   * @description Whether user must change password at next login
   * @default true
   */
  change_password_at_next_login: boolean;
  /**
   * Family Name
   * @description User's last name
   */
  family_name?: string;
  /**
   * Given Name
   * @description User's first name
   */
  given_name?: string;
  /**
   * Org Unit Path
   * @description Organizational unit path for the user
   * @default /
   */
  org_unit_path: string;
  /**
   * Password
   * @description User's password (must meet domain password requirements)
   */
  password?: string;
  /**
   * Primary Email
   * @description User's primary email address
   */
  primary_email?: string;
  /**
   * Recovery Email
   * @description Recovery email address
   * @default null
   */
  recovery_email: string | null;
  /**
   * Recovery Phone
   * @description Recovery phone number
   * @default null
   */
  recovery_phone: string | null;
  /**
   * Suspended
   * @description Whether the user account is suspended
   * @default false
   */
  suspended: boolean;
};

/**
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_CREATE_USER tool output.
 */
type GOOGLE_ADMIN_CREATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full API response from Google Admin for the created user
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
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_DELETE_USER tool input.
 */
type GOOGLE_ADMIN_DELETE_USER_INPUT = {
  /**
   * User Key
   * @description User's primary email address or unique user ID
   */
  user_key?: string;
};

/**
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_DELETE_USER tool output.
 */
type GOOGLE_ADMIN_DELETE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message
       * @default User deleted successfully
       */
      message: string;
      /**
       * Success
       * @description Whether the user was successfully deleted
       * @default true
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
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_GET_GROUP tool input.
 */
type GOOGLE_ADMIN_GET_GROUP_INPUT = {
  /**
   * Group Key
   * @description Group's email address or unique group ID
   */
  group_key?: string;
};

/**
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_GET_GROUP tool output.
 */
type GOOGLE_ADMIN_GET_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full API response from Google Admin for the group details
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
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_GET_USER tool input.
 */
type GOOGLE_ADMIN_GET_USER_INPUT = {
  /**
   * User Key
   * @description User's primary email address or unique user ID
   */
  user_key?: string;
};

/**
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_GET_USER tool output.
 */
type GOOGLE_ADMIN_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full API response from Google Admin for the user details
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
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_LIST_GROUPS tool input.
 */
type GOOGLE_ADMIN_LIST_GROUPS_INPUT = {
  /**
   * Customer
   * @description Customer ID or 'my_customer' for the authenticated user's customer
   * @default my_customer
   */
  customer: string;
  /**
   * Domain
   * @description Domain name to list groups from
   * @default null
   */
  domain: string | null;
  /**
   * Max Results
   * @description Maximum number of results to return (1-200)
   * @default 200
   */
  max_results: number;
  /**
   * Order By
   * @description Property to order results by (email)
   * @default email
   */
  order_by: string;
  /**
   * Page Token
   * @description Token for retrieving next page of results
   * @default null
   */
  page_token: string | null;
  /**
   * Query
   * @description Query string for filtering groups (e.g., 'name=Engineering*')
   * @default null
   */
  query: string | null;
  /**
   * Sort Order
   * @description Sort order (ASCENDING or DESCENDING)
   * @default ASCENDING
   */
  sort_order: string;
};

/**
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_LIST_GROUPS tool output.
 */
type GOOGLE_ADMIN_LIST_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full API response from Google Admin for the groups list
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
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_LIST_GROUP_MEMBERS tool input.
 */
type GOOGLE_ADMIN_LIST_GROUP_MEMBERS_INPUT = {
  /**
   * Group Key
   * @description Group's email address or unique group ID
   */
  group_key?: string;
  /**
   * Include Derived Membership
   * @description Whether to include indirect memberships from nested groups
   * @default false
   */
  include_derived_membership: boolean;
  /**
   * Max Results
   * @description Maximum number of results to return (1-200)
   * @default 200
   */
  max_results: number;
  /**
   * Page Token
   * @description Token for retrieving next page of results
   * @default null
   */
  page_token: string | null;
  /**
   * Roles
   * @description Comma-separated list of roles to filter by (OWNER, MANAGER, MEMBER)
   * @default null
   */
  roles: string | null;
};

/**
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_LIST_GROUP_MEMBERS tool output.
 */
type GOOGLE_ADMIN_LIST_GROUP_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full API response from Google Admin for the group members list
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
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_LIST_USERS tool input.
 */
type GOOGLE_ADMIN_LIST_USERS_INPUT = {
  /**
   * Customer
   * @description Customer ID or 'my_customer' for the authenticated user's customer
   * @default my_customer
   */
  customer: string;
  /**
   * Domain
   * @description Domain name to list users from (if not specified, uses the authenticated user's domain)
   * @default null
   */
  domain: string | null;
  /**
   * Max Results
   * @description Maximum number of results to return (1-500)
   * @default 100
   */
  max_results: number;
  /**
   * Order By
   * @description Property to order results by (email, givenName, familyName)
   * @default email
   */
  order_by: string;
  /**
   * Page Token
   * @description Token for retrieving next page of results
   * @default null
   */
  page_token: string | null;
  /**
   * Query
   * @description Query string for filtering users (e.g., 'orgName=Engineering')
   * @default null
   */
  query: string | null;
  /**
   * Sort Order
   * @description Sort order (ASCENDING or DESCENDING)
   * @default ASCENDING
   */
  sort_order: string;
};

/**
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_LIST_USERS tool output.
 */
type GOOGLE_ADMIN_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full API response from Google Admin for the users list
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
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_REMOVE_USER_ALIAS tool input.
 */
type GOOGLE_ADMIN_REMOVE_USER_ALIAS_INPUT = {
  /**
   * Alias
   * @description Alias email address to remove from the user
   */
  alias?: string;
  /**
   * User Key
   * @description User's primary email address or unique user ID
   */
  user_key?: string;
};

/**
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_REMOVE_USER_ALIAS tool output.
 */
type GOOGLE_ADMIN_REMOVE_USER_ALIAS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message
       * @default User alias removed successfully
       */
      message: string;
      /**
       * Success
       * @description Whether the alias was successfully removed
       * @default true
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
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_REMOVE_USER_FROM_GROUP tool input.
 */
type GOOGLE_ADMIN_REMOVE_USER_FROM_GROUP_INPUT = {
  /**
   * Group Key
   * @description Group's email address or unique group ID
   */
  group_key?: string;
  /**
   * User Key
   * @description User's primary email address or unique user ID to remove from the group
   */
  user_key?: string;
};

/**
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_REMOVE_USER_FROM_GROUP tool output.
 */
type GOOGLE_ADMIN_REMOVE_USER_FROM_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message
       * @default User removed from group successfully
       */
      message: string;
      /**
       * Success
       * @description Whether the user was successfully removed from the group
       * @default true
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
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_SUSPEND_USER tool input.
 */
type GOOGLE_ADMIN_SUSPEND_USER_INPUT = {
  /**
   * Suspended
   * @description Whether to suspend (True) or unsuspend (False) the user
   * @default true
   */
  suspended: boolean;
  /**
   * Suspension Reason
   * @description Reason for suspension (optional)
   * @default null
   */
  suspension_reason: string | null;
  /**
   * User Key
   * @description User's primary email address or unique user ID
   */
  user_key?: string;
};

/**
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_SUSPEND_USER tool output.
 */
type GOOGLE_ADMIN_SUSPEND_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full API response from Google Admin for the updated user
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
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_UPDATE_GROUP_SETTINGS tool input.
 */
type GOOGLE_ADMIN_UPDATE_GROUP_SETTINGS_INPUT = {
  /**
   * Description
   * @description Updated group description
   * @default null
   */
  description: string | null;
  /**
   * Group Key
   * @description Group's email address or unique group ID
   */
  group_key?: string;
  /**
   * Name
   * @description Updated display name for the group
   * @default null
   */
  name: string | null;
};

/**
 * Type of GOOGLE_ADMIN's GOOGLE_ADMIN_UPDATE_GROUP_SETTINGS tool output.
 */
type GOOGLE_ADMIN_UPDATE_GROUP_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full API response from Google Admin for the updated group
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
 * Type map of all available tool input types for toolkit "GOOGLE_ADMIN".
 */
export type GOOGLE_ADMIN_TOOL_INPUTS = {
  ADD_USER_ALIAS: GOOGLE_ADMIN_ADD_USER_ALIAS_INPUT
  ADD_USER_TO_GROUP: GOOGLE_ADMIN_ADD_USER_TO_GROUP_INPUT
  CREATE_GROUP: GOOGLE_ADMIN_CREATE_GROUP_INPUT
  CREATE_USER: GOOGLE_ADMIN_CREATE_USER_INPUT
  DELETE_USER: GOOGLE_ADMIN_DELETE_USER_INPUT
  GET_GROUP: GOOGLE_ADMIN_GET_GROUP_INPUT
  GET_USER: GOOGLE_ADMIN_GET_USER_INPUT
  LIST_GROUPS: GOOGLE_ADMIN_LIST_GROUPS_INPUT
  LIST_GROUP_MEMBERS: GOOGLE_ADMIN_LIST_GROUP_MEMBERS_INPUT
  LIST_USERS: GOOGLE_ADMIN_LIST_USERS_INPUT
  REMOVE_USER_ALIAS: GOOGLE_ADMIN_REMOVE_USER_ALIAS_INPUT
  REMOVE_USER_FROM_GROUP: GOOGLE_ADMIN_REMOVE_USER_FROM_GROUP_INPUT
  SUSPEND_USER: GOOGLE_ADMIN_SUSPEND_USER_INPUT
  UPDATE_GROUP_SETTINGS: GOOGLE_ADMIN_UPDATE_GROUP_SETTINGS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLE_ADMIN".
 */
export type GOOGLE_ADMIN_TOOL_OUTPUTS = {
  ADD_USER_ALIAS: GOOGLE_ADMIN_ADD_USER_ALIAS_OUTPUT
  ADD_USER_TO_GROUP: GOOGLE_ADMIN_ADD_USER_TO_GROUP_OUTPUT
  CREATE_GROUP: GOOGLE_ADMIN_CREATE_GROUP_OUTPUT
  CREATE_USER: GOOGLE_ADMIN_CREATE_USER_OUTPUT
  DELETE_USER: GOOGLE_ADMIN_DELETE_USER_OUTPUT
  GET_GROUP: GOOGLE_ADMIN_GET_GROUP_OUTPUT
  GET_USER: GOOGLE_ADMIN_GET_USER_OUTPUT
  LIST_GROUPS: GOOGLE_ADMIN_LIST_GROUPS_OUTPUT
  LIST_GROUP_MEMBERS: GOOGLE_ADMIN_LIST_GROUP_MEMBERS_OUTPUT
  LIST_USERS: GOOGLE_ADMIN_LIST_USERS_OUTPUT
  REMOVE_USER_ALIAS: GOOGLE_ADMIN_REMOVE_USER_ALIAS_OUTPUT
  REMOVE_USER_FROM_GROUP: GOOGLE_ADMIN_REMOVE_USER_FROM_GROUP_OUTPUT
  SUSPEND_USER: GOOGLE_ADMIN_SUSPEND_USER_OUTPUT
  UPDATE_GROUP_SETTINGS: GOOGLE_ADMIN_UPDATE_GROUP_SETTINGS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GOOGLE_ADMIN toolkit.
 */
export const GOOGLE_ADMIN = {
  slug: "google_admin",
  tools: {
    /**
     * Adds an email alias to a google workspace user.
     */
    ADD_USER_ALIAS: "GOOGLE_ADMIN_ADD_USER_ALIAS",
    /**
     * Adds a user to a google workspace group with the specified role.
     */
    ADD_USER_TO_GROUP: "GOOGLE_ADMIN_ADD_USER_TO_GROUP",
    /**
     * Creates a new google workspace group with the specified details.
     */
    CREATE_GROUP: "GOOGLE_ADMIN_CREATE_GROUP",
    /**
     * Creates a new google workspace user with the specified details.
     */
    CREATE_USER: "GOOGLE_ADMIN_CREATE_USER",
    /**
     * Deletes a google workspace user permanently. this action cannot be undone.
     */
    DELETE_USER: "GOOGLE_ADMIN_DELETE_USER",
    /**
     * Retrieves detailed information about a google workspace group.
     */
    GET_GROUP: "GOOGLE_ADMIN_GET_GROUP",
    /**
     * Retrieves detailed information about a google workspace user.
     */
    GET_USER: "GOOGLE_ADMIN_GET_USER",
    /**
     * Lists google workspace groups with optional filtering and pagination.
     */
    LIST_GROUPS: "GOOGLE_ADMIN_LIST_GROUPS",
    /**
     * Lists all members of a google workspace group with optional filtering and pagination.
     */
    LIST_GROUP_MEMBERS: "GOOGLE_ADMIN_LIST_GROUP_MEMBERS",
    /**
     * Lists google workspace users with optional filtering and pagination.
     */
    LIST_USERS: "GOOGLE_ADMIN_LIST_USERS",
    /**
     * Removes an email alias from a google workspace user.
     */
    REMOVE_USER_ALIAS: "GOOGLE_ADMIN_REMOVE_USER_ALIAS",
    /**
     * Removes a user from a google workspace group, revoking their group access.
     */
    REMOVE_USER_FROM_GROUP: "GOOGLE_ADMIN_REMOVE_USER_FROM_GROUP",
    /**
     * Suspends or unsuspends a google workspace user account.
     */
    SUSPEND_USER: "GOOGLE_ADMIN_SUSPEND_USER",
    /**
     * Updates settings for a google workspace group.
     */
    UPDATE_GROUP_SETTINGS: "GOOGLE_ADMIN_UPDATE_GROUP_SETTINGS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLE_ADMIN".
 */
export type GOOGLE_ADMIN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GOOGLE_ADMIN".
 */
export type GOOGLE_ADMIN_TRIGGER_EVENTS = {}
