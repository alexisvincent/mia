// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MEMBERSTACK's MEMBERSTACK_CREATE_MEMBER tool input.
 */
type MEMBERSTACK_CREATE_MEMBER_INPUT = {
  /**
   * Custom Fields
   * @description Custom fields for the member (replaces existing fields).
   * @default null
   */
  customFields: {
      [key: string]: unknown;
  } | null;
  /**
   * Email
   * @description The member's unique email address
   */
  email?: string;
  /**
   * Json
   * @description Arbitrary JSON data for the member (replaces existing JSON).
   * @default null
   */
  json: {
      [key: string]: unknown;
  } | null;
  /**
   * Login Redirect
   * @description URL path to redirect to after login
   * @default null
   */
  loginRedirect: string | null;
  /**
   * Meta Data
   * @description Metadata for the member (replaces existing metadata).
   * @default null
   */
  metaData: {
      [key: string]: unknown;
  } | null;
  /**
   * Password
   * @description The member's password
   */
  password?: string;
  /**
   * Plans
   * @description Array of free plan objects to assign to the member on creation.
   * @default null
   */
  plans: {
      /**
       * Plan Id
       * @description ID of a free plan to assign (must start with 'pln_')
       */
      planId: string;
  }[] | null;
};

/**
 * Type of MEMBERSTACK's MEMBERSTACK_CREATE_MEMBER tool output.
 */
type MEMBERSTACK_CREATE_MEMBER_OUTPUT = {
  /**
   * Data
   * @description The newly created member object
   */
  data?: {
      /**
       * Auth
       * @description Authentication object containing email
       */
      auth: {
          /**
           * Email
           * @description The member's email address
           */
          email: string;
      };
      /**
       * Created At
       * @description ISO8601 timestamp of creation
       */
      createdAt: string;
      /**
       * Custom Fields
       * @description Custom fields stored with the member
       * @default null
       */
      customFields: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description The member ID
       */
      id: string;
      /**
       * Json
       * @description Arbitrary JSON data stored with the member
       * @default null
       */
      json: {
          [key: string]: unknown;
      } | null;
      /**
       * Last Login
       * @description ISO8601 timestamp of last login, if any
       * @default null
       */
      lastLogin: string | null;
      /**
       * Login Redirect
       * @description Redirect URL path after login
       * @default null
       */
      loginRedirect: string | null;
      /**
       * Meta Data
       * @description Metadata stored with the member
       * @default null
       */
      metaData: {
          [key: string]: unknown;
      } | null;
      /**
       * Permissions
       * @description List of permission strings granted to the member
       */
      permissions: string[];
      /**
       * Plan Connections
       * @description List of plan connections for the member
       */
      planConnections: {
          /**
           * Id
           * @description The plan connection ID
           */
          id: string;
          /**
           * Payment
           * @description Payment details for the plan (null for free plans)
           * @default null
           */
          payment: unknown;
          /**
           * Plan Id
           * @description The plan ID assigned to the member
           */
          planId: string;
          /**
           * Status
           * @description Status of the plan connection (e.g., ACTIVE)
           */
          status: string;
          /**
           * Type
           * @description Type of the plan (e.g., FREE)
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
 * Type of MEMBERSTACK's MEMBERSTACK_DELETE_MEMBER tool input.
 */
type MEMBERSTACK_DELETE_MEMBER_INPUT = {
  /**
   * Cancel Stripe Subscriptions
   * @description Whether to cancel the associated Stripe subscriptions. Defaults to false.
   * @default false
   */
  cancelStripeSubscriptions: boolean;
  /**
   * Delete Stripe Customer
   * @description Whether to delete the associated Stripe customer. Defaults to false.
   * @default false
   */
  deleteStripeCustomer: boolean;
  /**
   * Id
   * @description The ID of the member to delete.
   */
  id?: string;
};

/**
 * Type of MEMBERSTACK's MEMBERSTACK_DELETE_MEMBER tool output.
 */
type MEMBERSTACK_DELETE_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The ID of the deleted member.
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
 * Type of MEMBERSTACK's MEMBERSTACK_GET_MEMBER tool input.
 */
type MEMBERSTACK_GET_MEMBER_INPUT = {
  /**
   * Id Or Email
   * @description The member's ID (starting with 'mem_') or URL-encoded email address.
   */
  id_or_email?: string;
};

/**
 * Type of MEMBERSTACK's MEMBERSTACK_GET_MEMBER tool output.
 */
type MEMBERSTACK_GET_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auth
       * @description Authentication details of the member.
       */
      auth: {
          /**
           * Email
           * @description The member's email address.
           */
          email: string;
      };
      /**
       * Created At
       * @description Timestamp when the member was created.
       */
      createdAt: string;
      /**
       * Custom Fields
       * @description Custom fields associated with the member.
       */
      customFields: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description The member's unique identifier.
       */
      id: string;
      /**
       * Last Login
       * @description Timestamp of the member's last login, if any.
       * @default null
       */
      lastLogin: string | null;
      /**
       * Login Redirect
       * @description URL to redirect the member after login.
       * @default null
       */
      loginRedirect: string | null;
      /**
       * Meta Data
       * @description Metadata related to the member.
       */
      metaData: {
          [key: string]: unknown;
      };
      /**
       * Permissions
       * @description List of permissions assigned to the member.
       */
      permissions: string[];
      /**
       * Plan Connections
       * @description Array of plan connection objects.
       */
      planConnections: {
          /**
           * Id
           * @description Plan connection ID.
           */
          id: string;
          /**
           * Payment
           * @description Payment details if applicable.
           * @default null
           */
          payment: {
              [key: string]: unknown;
          } | null;
          /**
           * Plan Id
           * @description Associated plan ID.
           */
          planId: string;
          /**
           * Status
           * @description Status of the plan connection.
           */
          status: string;
          /**
           * Type
           * @description Type of the plan (e.g., 'FREE').
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
 * Type of MEMBERSTACK's MEMBERSTACK_LIST_MEMBERS tool input.
 */
type MEMBERSTACK_LIST_MEMBERS_INPUT = {
  /**
   * After
   * @description The endCursor after which to start listing members
   * @default null
   */
  after: number | null;
  /**
   * Limit
   * @description Maximum number of members to return (max 200)
   * @default 50
   */
  limit: number;
  /**
   * Order
   * @description Sort order for members (ASC or DESC)
   * @default ASC
   * @enum {string}
   */
  order: "ASC" | "DESC";
};

/**
 * Type of MEMBERSTACK's MEMBERSTACK_LIST_MEMBERS tool output.
 */
type MEMBERSTACK_LIST_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Array of member objects
   */
  data?: {
      /**
       * Auth
       * @description Authentication details (e.g., email)
       */
      auth: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO creation timestamp
       */
      createdAt: string;
      /**
       * Custom Fields
       * @description Custom fields defined for the member
       */
      customFields?: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Member ID (starts with 'mem_')
       */
      id: string;
      /**
       * Last Login
       * @description ISO last-login timestamp
       * @default null
       */
      lastLogin: string | null;
      /**
       * Login Redirect
       * @description Redirect URL after login
       * @default null
       */
      loginRedirect: string | null;
      /**
       * Meta Data
       * @description Metadata associated with the member
       */
      metaData?: {
          [key: string]: unknown;
      };
      /**
       * Permissions
       * @description List of permission strings
       */
      permissions: string[];
      /**
       * Plan Connections
       * @description Active plan connections
       */
      planConnections: {
          /**
           * Id
           * @description Connection ID (starts with 'con_')
           */
          id: string;
          /**
           * Payment
           * @description Payment details if available, else null
           * @default null
           */
          payment: {
              [key: string]: unknown;
          } | null;
          /**
           * Plan Id
           * @description ID of the plan
           */
          planId: string;
          /**
           * Status
           * @description Status of the plan connection
           */
          status: string;
          /**
           * Type
           * @description Type of the plan connection
           */
          type: string;
      }[];
  }[];
  /**
   * End Cursor
   * @description Cursor for next page
   * @default null
   */
  endCursor: number | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Has Next Page
   * @description Whether more results exist
   */
  hasNextPage?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Count
   * @description Total number of members
   */
  totalCount?: number;
};

/**
 * Type of MEMBERSTACK's MEMBERSTACK_LIST_PLANS tool input.
 */
type MEMBERSTACK_LIST_PLANS_INPUT = object;

/**
 * Type of MEMBERSTACK's MEMBERSTACK_LIST_PLANS tool output.
 */
type MEMBERSTACK_LIST_PLANS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Plans
       * @description Array of available membership plans.
       */
      plans: {
          /**
           * Description
           * @description Description of the plan.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique plan identifier.
           */
          id: string;
          /**
           * Interval
           * @description Billing interval for the plan (e.g., 'monthly', 'yearly').
           */
          interval: string;
          /**
           * Name
           * @description Name of the plan.
           */
          name: string;
          /**
           * Price
           * @description Price of the plan.
           */
          price: number;
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
 * Type of MEMBERSTACK's MEMBERSTACK_REMOVE_FREE_PLAN tool input.
 */
type MEMBERSTACK_REMOVE_FREE_PLAN_INPUT = {
  /**
   * Id
   * @description Member ID (starts with 'mem_').
   */
  id?: string;
  /**
   * Plan Id
   * @description Free plan ID (starts with 'pln_').
   */
  planId?: string;
};

/**
 * Type of MEMBERSTACK's MEMBERSTACK_REMOVE_FREE_PLAN tool output.
 */
type MEMBERSTACK_REMOVE_FREE_PLAN_OUTPUT = {
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
 * Type of MEMBERSTACK's MEMBERSTACK_UPDATE_MEMBER tool input.
 */
type MEMBERSTACK_UPDATE_MEMBER_INPUT = {
  /**
   * Custom Fields
   * @description Object of custom fields to replace existing ones
   * @default null
   */
  customFields: {
      [key: string]: unknown;
  } | null;
  /**
   * Email
   * @description New email address for the member
   * @default null
   */
  email: string | null;
  /**
   * Id
   * @description Member ID (starts with 'mem_')
   */
  id?: string;
  /**
   * Json
   * @description Arbitrary JSON object to replace existing data
   * @default null
   */
  json: {
      [key: string]: unknown;
  } | null;
  /**
   * Login Redirect
   * @description URL path to redirect to after login
   * @default null
   */
  loginRedirect: string | null;
  /**
   * Meta Data
   * @description Object of metadata to replace existing ones
   * @default null
   */
  metaData: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of MEMBERSTACK's MEMBERSTACK_UPDATE_MEMBER tool output.
 */
type MEMBERSTACK_UPDATE_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auth
       * @description Authentication details (contains email)
       */
      auth: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO 8601 timestamp when the member was created
       */
      createdAt: string;
      /**
       * Custom Fields
       * @description Custom fields for the member
       */
      customFields?: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Unique identifier of the member
       */
      id: string;
      /**
       * Json
       * @description JSON data stored for the member
       * @default null
       */
      json: {
          [key: string]: unknown;
      } | null;
      /**
       * Last Login
       * @default null
       */
      lastLogin: string | null;
      /**
       * Login Redirect
       * @description Login redirect URL for the member
       * @default null
       */
      loginRedirect: string | null;
      /**
       * Meta Data
       * @description Metadata associated with the member
       */
      metaData?: {
          [key: string]: unknown;
      };
      /**
       * Permissions
       * @description List of permission strings assigned to the member
       */
      permissions: string[];
      /**
       * Plan Connections
       * @description List of plan connection objects for the member
       */
      planConnections: {
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
 * Type map of all available tool input types for toolkit "MEMBERSTACK".
 */
export type MEMBERSTACK_TOOL_INPUTS = {
  CREATE_MEMBER: MEMBERSTACK_CREATE_MEMBER_INPUT
  DELETE_MEMBER: MEMBERSTACK_DELETE_MEMBER_INPUT
  GET_MEMBER: MEMBERSTACK_GET_MEMBER_INPUT
  LIST_MEMBERS: MEMBERSTACK_LIST_MEMBERS_INPUT
  LIST_PLANS: MEMBERSTACK_LIST_PLANS_INPUT
  REMOVE_FREE_PLAN: MEMBERSTACK_REMOVE_FREE_PLAN_INPUT
  UPDATE_MEMBER: MEMBERSTACK_UPDATE_MEMBER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MEMBERSTACK".
 */
export type MEMBERSTACK_TOOL_OUTPUTS = {
  CREATE_MEMBER: MEMBERSTACK_CREATE_MEMBER_OUTPUT
  DELETE_MEMBER: MEMBERSTACK_DELETE_MEMBER_OUTPUT
  GET_MEMBER: MEMBERSTACK_GET_MEMBER_OUTPUT
  LIST_MEMBERS: MEMBERSTACK_LIST_MEMBERS_OUTPUT
  LIST_PLANS: MEMBERSTACK_LIST_PLANS_OUTPUT
  REMOVE_FREE_PLAN: MEMBERSTACK_REMOVE_FREE_PLAN_OUTPUT
  UPDATE_MEMBER: MEMBERSTACK_UPDATE_MEMBER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MEMBERSTACK toolkit.
 */
export const MEMBERSTACK = {
  slug: "memberstack",
  tools: {
    /**
     * Tool to create a new member in your application. use after gathering email, password, optional plans, custom fields, metadata, and redirect.
     */
    CREATE_MEMBER: "MEMBERSTACK_CREATE_MEMBER",
    /**
     * Tool to permanently delete a member from your application. use after confirming you no longer need the member's data and have the member id.
     */
    DELETE_MEMBER: "MEMBERSTACK_DELETE_MEMBER",
    /**
     * Tool to retrieve a specific member by id or email. use when you need to fetch member profile details for a given identifier (id or email). example: "get member mem sb 12345".
     */
    GET_MEMBER: "MEMBERSTACK_GET_MEMBER",
    /**
     * Tool to retrieve a paginated list of all members in your application. use when you need to iterate through members with cursor-based pagination.
     */
    LIST_MEMBERS: "MEMBERSTACK_LIST_MEMBERS",
    /**
     * Tool to list all available membership plans. use when you need to retrieve plan ids and details before assigning or comparing plans.
     */
    LIST_PLANS: "MEMBERSTACK_LIST_PLANS",
    /**
     * Tool to remove a free plan from an existing member. use after confirming the member's subscription status. example: "remove free plan pln sb 67890 from member mem sb 12345".
     */
    REMOVE_FREE_PLAN: "MEMBERSTACK_REMOVE_FREE_PLAN",
    /**
     * Tool to update an existing member's information. use when you have a member id and need to modify their email, customfields, metadata, json data, or loginredirect.
     */
    UPDATE_MEMBER: "MEMBERSTACK_UPDATE_MEMBER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MEMBERSTACK".
 */
export type MEMBERSTACK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MEMBERSTACK".
 */
export type MEMBERSTACK_TRIGGER_EVENTS = {}
