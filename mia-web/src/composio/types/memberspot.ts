// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MEMBERSPOT's MEMBERSPOT_CREATE_LOGIN_TOKEN tool input.
 */
type MEMBERSPOT_CREATE_LOGIN_TOKEN_INPUT = {
  /**
   * Uid
   * @description The unique ID of the user to create a login token for
   */
  uid?: string;
};

/**
 * Type of MEMBERSPOT's MEMBERSPOT_CREATE_LOGIN_TOKEN tool output.
 */
type MEMBERSPOT_CREATE_LOGIN_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Login Url
       * @description URL for automatic sign-in using the generated token
       */
      loginUrl: string;
      /**
       * Token
       * @description One-hour login token for the user
       */
      token: string;
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
 * Type of MEMBERSPOT's MEMBERSPOT_DELETE_USERS tool input.
 */
type MEMBERSPOT_DELETE_USERS_INPUT = {
  /**
   * Emails
   * @description List of user email addresses to delete. Only existing school users will be deleted; invalid emails are ignored.
   */
  emails?: unknown[];
};

/**
 * Type of MEMBERSPOT's MEMBERSPOT_DELETE_USERS tool output.
 */
type MEMBERSPOT_DELETE_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Response text from the API, typically 'ok' if deletion was successful.
       */
      result: string;
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
 * Type of MEMBERSPOT's MEMBERSPOT_FIND_USER_BY_MAIL tool input.
 */
type MEMBERSPOT_FIND_USER_BY_MAIL_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address of the user to search for.
   */
  email?: unknown;
};

/**
 * Type of MEMBERSPOT's MEMBERSPOT_FIND_USER_BY_MAIL tool output.
 */
type MEMBERSPOT_FIND_USER_BY_MAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Indicates if the user is active
       */
      active?: boolean;
      /**
       * Created
       * @description ISO 8601 timestamp when the user was created
       */
      created?: string;
      /**
       * Custom User Properties
       * @description Custom user properties as key-value pairs
       */
      customUserProperties?: {
          [key: string]: unknown;
      };
      /**
       * Email
       * @description User's email address
       */
      email?: string;
      /**
       * Firstname
       * @description User's first name
       */
      firstname?: string;
      /**
       * Name
       * @description User's last name
       */
      name?: string;
      /**
       * Progress
       * @description List of progress entries per course
       */
      progress?: {
          /**
           * Active Posts
           * @description Number of active posts
           */
          activePosts: number;
          /**
           * Completed Posts
           * @description Number of completed posts
           */
          completedPosts: number;
          /**
           * Course Id
           * @description Course ID
           */
          courseId: string;
      }[];
      /**
       * Uid
       * @description User's unique identifier
       */
      uid?: string;
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
 * Type of MEMBERSPOT's MEMBERSPOT_LIST_CUSTOM_USER_PROPERTIES tool input.
 */
type MEMBERSPOT_LIST_CUSTOM_USER_PROPERTIES_INPUT = object;

/**
 * Type of MEMBERSPOT's MEMBERSPOT_LIST_CUSTOM_USER_PROPERTIES tool output.
 */
type MEMBERSPOT_LIST_CUSTOM_USER_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Properties
       * @description List of all custom user property definitions
       */
      properties: {
          /**
           * Id
           * @description Unique identifier of the custom user property
           */
          id: string;
          /**
           * Name
           * @description Name of the custom user property
           */
          name: string;
          /**
           * School Id
           * @description Identifier of the school the property belongs to
           */
          schoolId: string;
          /**
           * Type
           * @description Type of the custom property
           */
          type: string;
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
 * Type of MEMBERSPOT's MEMBERSPOT_LIST_OFFERS tool input.
 */
type MEMBERSPOT_LIST_OFFERS_INPUT = object;

/**
 * Type of MEMBERSPOT's MEMBERSPOT_LIST_OFFERS tool output.
 */
type MEMBERSPOT_LIST_OFFERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Offers
       * @description List of all offers available in the school
       */
      offers: {
          /**
           * Has Course Ids
           * @description List of course IDs associated with this offer
           */
          hasCourseIds: string[];
          /**
           * Id
           * @description Unique identifier of the offer
           */
          id: string;
          /**
           * Name
           * @description Human-readable name of the offer
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
 * Type of MEMBERSPOT's MEMBERSPOT_LIST_USERS tool input.
 */
type MEMBERSPOT_LIST_USERS_INPUT = {
  /**
   * Active
   * @description When true, return only active users; when false, return only inactive users.
   * @default null
   */
  active: boolean | null;
  /**
   * Course Id
   * @description Filter users by courseId.
   * @default null
   */
  courseId: string | null;
  /**
   * Last Loaded Id
   * @description Page to continue loading at (located in response in nextPage property).
   * @default null
   */
  lastLoadedId: string | null;
  /**
   * Offer Id
   * @description Filter users by offerId.
   * @default null
   */
  offerId: string | null;
  /**
   * Page Length
   * @description Number of users per page. Default is 10.
   * @default 10
   */
  pageLength: number | null;
};

/**
 * Type of MEMBERSPOT's MEMBERSPOT_LIST_USERS tool output.
 */
type MEMBERSPOT_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description List of user objects
   */
  data?: {
      /**
       * Active
       * @description Indicates if the user is active
       */
      active: boolean;
      /**
       * Created
       * @description ISO 8601 timestamp when the user was created
       */
      created: string;
      /**
       * Custom User Properties
       * @description Custom user properties as key-value pairs
       */
      customUserProperties: {
          [key: string]: unknown;
      };
      /**
       * Email
       * @description User's email address
       */
      email: string;
      /**
       * Firstname
       * @description User's first name
       */
      firstname: string;
      /**
       * Name
       * @description User's last name
       */
      name: string;
      /**
       * Progress
       * @description List of progress entries per course
       */
      progress: {
          /**
           * Active Posts
           * @description Number of active posts
           */
          activePosts: number;
          /**
           * Completed Posts
           * @description Number of completed posts
           */
          completedPosts: number;
          /**
           * Course Id
           * @description Course ID
           */
          courseId: string;
      }[];
      /**
       * Uid
       * @description Unique user identifier
       */
      uid: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Page
   * @description Token for the next page
   * @default null
   */
  nextPage: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MEMBERSPOT's MEMBERSPOT_SET_ORDER_STATE tool input.
 */
type MEMBERSPOT_SET_ORDER_STATE_INPUT = {
  /**
   * Active
   * @description Whether to activate (true) or deactivate (false) the offer. If omitted, the offer is deleted for the user.
   * @default null
   */
  active: boolean | null;
  /**
   * Email
   * Format: email
   * @description Email address of the user whose order state is to be set.
   */
  email?: unknown;
  /**
   * Order Id
   * @description Identifier of the order associated with the user's offer.
   */
  orderId?: string;
};

/**
 * Type of MEMBERSPOT's MEMBERSPOT_SET_ORDER_STATE tool output.
 */
type MEMBERSPOT_SET_ORDER_STATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Resulting active state of the order-based offer for the user.
       */
      active: boolean;
      /**
       * Email
       * @description Email address of the user.
       */
      email: string;
      /**
       * Order Id
       * @description Identifier of the order whose state was set.
       */
      orderId: string;
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
 * Type of MEMBERSPOT's MEMBERSPOT_SET_USER_OFFER_STATE tool input.
 */
type MEMBERSPOT_SET_USER_OFFER_STATE_INPUT = {
  /**
   * Active
   * @description Whether to activate (true) or revoke (false) the user's access to the offer.
   */
  active?: boolean;
  /**
   * Email
   * Format: email
   * @description Email address of the user whose offer state is to be set.
   */
  email?: unknown;
  /**
   * Offer Id
   * @description Identifier of the offer to activate or revoke for the user.
   */
  offerId?: string;
};

/**
 * Type of MEMBERSPOT's MEMBERSPOT_SET_USER_OFFER_STATE tool output.
 */
type MEMBERSPOT_SET_USER_OFFER_STATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Resulting active state of the offer for the user.
       */
      active: boolean;
      /**
       * Email
       * @description Email address of the user whose offer state was updated.
       */
      email: string;
      /**
       * Offer Id
       * @description Identifier of the offer whose state was updated.
       */
      offerId: string;
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
 * Type map of all available tool input types for toolkit "MEMBERSPOT".
 */
export type MEMBERSPOT_TOOL_INPUTS = {
  CREATE_LOGIN_TOKEN: MEMBERSPOT_CREATE_LOGIN_TOKEN_INPUT
  DELETE_USERS: MEMBERSPOT_DELETE_USERS_INPUT
  FIND_USER_BY_MAIL: MEMBERSPOT_FIND_USER_BY_MAIL_INPUT
  LIST_CUSTOM_USER_PROPERTIES: MEMBERSPOT_LIST_CUSTOM_USER_PROPERTIES_INPUT
  LIST_OFFERS: MEMBERSPOT_LIST_OFFERS_INPUT
  LIST_USERS: MEMBERSPOT_LIST_USERS_INPUT
  SET_ORDER_STATE: MEMBERSPOT_SET_ORDER_STATE_INPUT
  SET_USER_OFFER_STATE: MEMBERSPOT_SET_USER_OFFER_STATE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MEMBERSPOT".
 */
export type MEMBERSPOT_TOOL_OUTPUTS = {
  CREATE_LOGIN_TOKEN: MEMBERSPOT_CREATE_LOGIN_TOKEN_OUTPUT
  DELETE_USERS: MEMBERSPOT_DELETE_USERS_OUTPUT
  FIND_USER_BY_MAIL: MEMBERSPOT_FIND_USER_BY_MAIL_OUTPUT
  LIST_CUSTOM_USER_PROPERTIES: MEMBERSPOT_LIST_CUSTOM_USER_PROPERTIES_OUTPUT
  LIST_OFFERS: MEMBERSPOT_LIST_OFFERS_OUTPUT
  LIST_USERS: MEMBERSPOT_LIST_USERS_OUTPUT
  SET_ORDER_STATE: MEMBERSPOT_SET_ORDER_STATE_OUTPUT
  SET_USER_OFFER_STATE: MEMBERSPOT_SET_USER_OFFER_STATE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MEMBERSPOT toolkit.
 */
export const MEMBERSPOT = {
  slug: "memberspot",
  tools: {
    /**
     * Tool to generate a one-hour login token for a user. use when you need to auto-login a user by their uid (token expires after one hour).
     */
    CREATE_LOGIN_TOKEN: "MEMBERSPOT_CREATE_LOGIN_TOKEN",
    /**
     * Tool to delete one or more users from the platform. use when you need to remove specified users by their email addresses. only existing school users are removed; invalid or out-of-school emails are ignored.
     */
    DELETE_USERS: "MEMBERSPOT_DELETE_USERS",
    /**
     * Tool to retrieve a user's details by their email address. use when you need to look up a user after obtaining their email.
     */
    FIND_USER_BY_MAIL: "MEMBERSPOT_FIND_USER_BY_MAIL",
    /**
     * Tool to list all defined custom user properties. use when you need to retrieve metadata of custom user properties after authentication.
     */
    LIST_CUSTOM_USER_PROPERTIES: "MEMBERSPOT_LIST_CUSTOM_USER_PROPERTIES",
    /**
     * Tool to retrieve a list of all offers. use after authentication to fetch available offers.
     */
    LIST_OFFERS: "MEMBERSPOT_LIST_OFFERS",
    /**
     * Tool to list all users. use when you need to fetch users with optional filtering and pagination.
     */
    LIST_USERS: "MEMBERSPOT_LIST_USERS",
    /**
     * Tool to set the state of an order-based offer for a user. use when you need to activate, deactivate, or remove an offer based on its order id.
     */
    SET_ORDER_STATE: "MEMBERSPOT_SET_ORDER_STATE",
    /**
     * Tool to revoke or set the state of a specific offer for a user. use after confirming whether the user should gain or lose access.
     */
    SET_USER_OFFER_STATE: "MEMBERSPOT_SET_USER_OFFER_STATE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MEMBERSPOT".
 */
export type MEMBERSPOT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MEMBERSPOT".
 */
export type MEMBERSPOT_TRIGGER_EVENTS = {}
