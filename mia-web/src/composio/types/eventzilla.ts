// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EVENTZILLA's EVENTZILLA_GET_USER_DETAILS tool input.
 */
type EVENTZILLA_GET_USER_DETAILS_INPUT = {
  /**
   * User Id
   * @description Unique identifier for the user
   */
  user_id?: string;
};

/**
 * Type of EVENTZILLA's EVENTZILLA_GET_USER_DETAILS tool output.
 */
type EVENTZILLA_GET_USER_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description Email address of the user
       */
      email: string;
      /**
       * Id
       * @description Unique identifier of the user
       */
      id: string;
      /**
       * Name
       * @description Name of the user
       */
      name: string;
      /**
       * Role
       * @description Role of the user within the account
       */
      role: string;
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
 * Type of EVENTZILLA's EVENTZILLA_LIST_CATEGORIES tool input.
 */
type EVENTZILLA_LIST_CATEGORIES_INPUT = object;

/**
 * Type of EVENTZILLA's EVENTZILLA_LIST_CATEGORIES tool output.
 */
type EVENTZILLA_LIST_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description Array of available event categories
       */
      categories: {
          /**
           * Id
           * @description Unique identifier for the category
           */
          id: number;
          /**
           * Name
           * @description Name of the category
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
 * Type of EVENTZILLA's EVENTZILLA_LIST_EVENTS tool input.
 */
type EVENTZILLA_LIST_EVENTS_INPUT = {
  /**
   * Order
   * @description Sort order direction. Use 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Page
   * @description Page number to retrieve (default: 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of events to return per page (default: 10, max: 100).
   * @default null
   */
  per_page: number | null;
  /**
   * Status
   * @description Filter events by status. Allowed values: 'live', 'draft', 'past'.
   * @default null
   * @enum {string|null}
   */
  status: "live" | "draft" | "past" | null;
};

/**
 * Type of EVENTZILLA's EVENTZILLA_LIST_EVENTS tool output.
 */
type EVENTZILLA_LIST_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description List of event objects
       */
      events: {
          /**
           * City
           * @description City where the event takes place
           * @default null
           */
          city: string | null;
          /**
           * End Time
           * @description Event end date/time in UTC (ISO 8601)
           */
          end_time: string;
          /**
           * Id
           * @description Unique event identifier
           */
          id: number;
          /**
           * Name
           * @description Event name
           */
          name: string;
          /**
           * Start Time
           * @description Event start date/time in UTC (ISO 8601)
           */
          start_time: string;
          /**
           * Status
           * @description Event status
           */
          status: string;
          /**
           * Timezone
           * @description Event timezone identifier
           */
          timezone: string;
          /**
           * Url
           * @description Public event URL
           */
          url: string;
          /**
           * Venue
           * @description Event venue location
           * @default null
           */
          venue: string | null;
      }[];
      /**
       * Pagination
       * @description Pagination metadata
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number
           */
          current_page: number;
          /**
           * Per Page
           * @description Events per page
           */
          per_page: number;
          /**
           * Total Events
           * @description Total number of events
           */
          total_events: number;
          /**
           * Total Pages
           * @description Total number of pages
           */
          total_pages: number;
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
 * Type of EVENTZILLA's EVENTZILLA_LIST_USERS tool input.
 */
type EVENTZILLA_LIST_USERS_INPUT = {
  /**
   * Limit
   * @description Maximum number of records to return. Defaults to 20.
   * @default 20
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to offset before returning the specified limit. Defaults to 0.
   * @default 0
   */
  offset: number | null;
};

/**
 * Type of EVENTZILLA's EVENTZILLA_LIST_USERS tool output.
 */
type EVENTZILLA_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of user objects associated with the account.
       */
      users: {
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
          /**
           * Role
           * @description Role of the user within the account.
           */
          role: string;
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
 * Type map of all available tool input types for toolkit "EVENTZILLA".
 */
export type EVENTZILLA_TOOL_INPUTS = {
  GET_USER_DETAILS: EVENTZILLA_GET_USER_DETAILS_INPUT
  LIST_CATEGORIES: EVENTZILLA_LIST_CATEGORIES_INPUT
  LIST_EVENTS: EVENTZILLA_LIST_EVENTS_INPUT
  LIST_USERS: EVENTZILLA_LIST_USERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EVENTZILLA".
 */
export type EVENTZILLA_TOOL_OUTPUTS = {
  GET_USER_DETAILS: EVENTZILLA_GET_USER_DETAILS_OUTPUT
  LIST_CATEGORIES: EVENTZILLA_LIST_CATEGORIES_OUTPUT
  LIST_EVENTS: EVENTZILLA_LIST_EVENTS_OUTPUT
  LIST_USERS: EVENTZILLA_LIST_USERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EVENTZILLA toolkit.
 */
export const EVENTZILLA = {
  slug: "eventzilla",
  tools: {
    /**
     * Tool to retrieve detailed information of a specific user. use after listing users to fetch full profile.
     */
    GET_USER_DETAILS: "EVENTZILLA_GET_USER_DETAILS",
    /**
     * Tool to retrieve event categories available in eventzilla. use when you need to present or choose from available categories before creating or filtering events.
     */
    LIST_CATEGORIES: "EVENTZILLA_LIST_CATEGORIES",
    /**
     * Tool to retrieve a list of events associated with your account (supports filtering). use when you need to list or filter events for your organization.
     */
    LIST_EVENTS: "EVENTZILLA_LIST_EVENTS",
    /**
     * Tool to retrieve a list of users associated with your account. use when you need to fetch and paginate through users.
     */
    LIST_USERS: "EVENTZILLA_LIST_USERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EVENTZILLA".
 */
export type EVENTZILLA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EVENTZILLA".
 */
export type EVENTZILLA_TRIGGER_EVENTS = {}
