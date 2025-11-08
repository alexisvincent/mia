// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of STOREROCKET's STOREROCKET_GET_USERS tool input.
 */
type STOREROCKET_GET_USERS_INPUT = {
  /**
   * Limit
   * @description Maximum number of users to return.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of users to skip before starting to collect the result set.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of STOREROCKET's STOREROCKET_GET_USERS tool output.
 */
type STOREROCKET_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Limit used for the request.
       */
      limit: number;
      /**
       * Offset
       * @description Offset used for the request.
       */
      offset: number;
      /**
       * Total
       * @description Total number of users.
       */
      total: number;
      /**
       * Users
       * @description List of user objects.
       */
      users: {
          /**
           * Created At
           * @description User creation timestamp in ISO8601 format.
           */
          created_at: string;
          /**
           * Email
           * @description Email address of the user.
           */
          email: string;
          /**
           * Id
           * @description Unique identifier for the user.
           */
          id: string;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
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
 * Type of STOREROCKET's STOREROCKET_GET_USER_INFO tool input.
 */
type STOREROCKET_GET_USER_INFO_INPUT = object;

/**
 * Type of STOREROCKET's STOREROCKET_GET_USER_INFO tool output.
 */
type STOREROCKET_GET_USER_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Account creation date in ISO8601.
       */
      created_at: string;
      /**
       * Email
       * @description User's email address.
       */
      email: string;
      /**
       * Id
       * @description Unique user identifier.
       */
      id: string;
      /**
       * Name
       * @description Full name of the user.
       */
      name: string;
      /**
       * Plan
       * @description Current subscription plan details.
       */
      plan: {
          /**
           * Id
           * @description Plan ID
           */
          id: string;
          /**
           * Name
           * @description Plan name
           */
          name: string;
          /**
           * Status
           * @description Plan status, e.g., 'active', 'trialing'
           */
          status: string;
      };
      /**
       * Stores Count
       * @description Number of stores owned by the user.
       */
      stores_count: number;
      /**
       * Teams
       * @description List of teams the user is a member of.
       */
      teams: {
          /**
           * Id
           * @description Team ID
           */
          id: string;
          /**
           * Name
           * @description Team name
           */
          name: string;
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
 * Type map of all available tool input types for toolkit "STOREROCKET".
 */
export type STOREROCKET_TOOL_INPUTS = {
  GET_USERS: STOREROCKET_GET_USERS_INPUT
  GET_USER_INFO: STOREROCKET_GET_USER_INFO_INPUT
}

/**
 * Type map of all available tool input types for toolkit "STOREROCKET".
 */
export type STOREROCKET_TOOL_OUTPUTS = {
  GET_USERS: STOREROCKET_GET_USERS_OUTPUT
  GET_USER_INFO: STOREROCKET_GET_USER_INFO_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's STOREROCKET toolkit.
 */
export const STOREROCKET = {
  slug: "storerocket",
  tools: {
    /**
     * Tool to retrieve a list of all users. use when you need to list users with optional pagination after authentication.
     */
    GET_USERS: "STOREROCKET_GET_USERS",
    /**
     * Tool to retrieve authenticated user information. use when you need current user details after authentication.
     */
    GET_USER_INFO: "STOREROCKET_GET_USER_INFO",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "STOREROCKET".
 */
export type STOREROCKET_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "STOREROCKET".
 */
export type STOREROCKET_TRIGGER_EVENTS = {}
