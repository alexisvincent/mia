// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EVENIUM's EVENIUM_GET_CONTACTS tool input.
 */
type EVENIUM_GET_CONTACTS_INPUT = {
  /**
   * Order
   * @description Sort order, e.g., 'name' or 'email'
   * @default null
   */
  order: string | null;
  /**
   * Page
   * @description Page number to fetch, must be >=1
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of contacts per page, must be >=1
   * @default 10
   */
  pageSize: number | null;
  /**
   * Search
   * @description Filter contacts by name, email, or other criteria
   * @default null
   */
  search: string | null;
};

/**
 * Type of EVENIUM's EVENIUM_GET_CONTACTS tool output.
 */
type EVENIUM_GET_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of retrieved contacts
       */
      contacts: {
          /**
           * Country
           * @description Contact's country
           * @default null
           */
          country: string | null;
          /**
           * Email
           * Format: email
           * @description Contact's email address
           */
          email: string;
          /**
           * First Name
           * @description Contact's first name
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Unique identifier for the contact
           */
          id: string;
          /**
           * Last Name
           * @description Contact's last name
           * @default null
           */
          lastName: string | null;
          /**
           * Organization
           * @description Organization name
           * @default null
           */
          organization: string | null;
          /**
           * Phone
           * @description Phone number
           * @default null
           */
          phone: string | null;
          /**
           * State
           * @description Contact's state
           * @default null
           */
          state: string | null;
      }[];
      /**
       * Page
       * @description Current page number
       * @default null
       */
      page: number | null;
      /**
       * Page Size
       * @description Number of contacts per page
       * @default null
       */
      pageSize: number | null;
      /**
       * Total
       * @description Total number of contacts available
       * @default null
       */
      total: number | null;
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
 * Type of EVENIUM's EVENIUM_GET_EVENTS tool input.
 */
type EVENIUM_GET_EVENTS_INPUT = {
  /**
   * Archived
   * @description If true, only archived events are returned.
   * @default null
   */
  archived: boolean | null;
  /**
   * Direction
   * @description Sorting direction ('ASC' or 'DESC').
   * @default null
   * @enum {string|null}
   */
  direction: "ASC" | "DESC" | null;
  /**
   * Include Deleted
   * @description If true, includes deleted events.
   * @default null
   */
  includeDeleted: boolean | null;
  /**
   * Include Drafts
   * @description If true, includes draft events.
   * @default null
   */
  includeDrafts: boolean | null;
  /**
   * Limit
   * @description Maximum number of events to retrieve.
   * @default null
   */
  limit: number | null;
  /**
   * Search
   * @description Search term to filter events by title, code, or location.
   * @default null
   */
  search: string | null;
  /**
   * Sort
   * @description Sorting field, e.g., 'beginDate'.
   * @default null
   */
  sort: string | null;
  /**
   * Start
   * @description Zero-based index of the first event to retrieve for pagination.
   * @default null
   */
  start: number | null;
};

/**
 * Type of EVENIUM's EVENIUM_GET_EVENTS tool output.
 */
type EVENIUM_GET_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description List of event objects.
       */
      events: {
          /**
           * Begin Date
           * @description Event start date in ISO 8601 format.
           */
          beginDate: string;
          /**
           * Code
           * @description Event code.
           */
          code: string;
          /**
           * End Date
           * @description Event end date in ISO 8601 format.
           * @default null
           */
          endDate: string | null;
          /**
           * Id
           * @description Unique event identifier.
           */
          id: string;
          /**
           * Location
           * @description Event location information.
           * @default null
           */
          location: string | null;
          /**
           * Status
           * @description Event status (e.g., 'active', 'archived', 'draft').
           */
          status: string;
          /**
           * Title
           * @description Event title.
           */
          title: string;
      }[];
      /**
       * Nb Total
       * @description Total number of matching events.
       */
      nbTotal: number;
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
 * Type of EVENIUM's EVENIUM_LOGOUT tool input.
 */
type EVENIUM_LOGOUT_INPUT = object;

/**
 * Type of EVENIUM's EVENIUM_LOGOUT tool output.
 */
type EVENIUM_LOGOUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional human-readable confirmation message
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the logout succeeded and the session token was invalidated
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
 * Type map of all available tool input types for toolkit "EVENIUM".
 */
export type EVENIUM_TOOL_INPUTS = {
  GET_CONTACTS: EVENIUM_GET_CONTACTS_INPUT
  GET_EVENTS: EVENIUM_GET_EVENTS_INPUT
  LOGOUT: EVENIUM_LOGOUT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EVENIUM".
 */
export type EVENIUM_TOOL_OUTPUTS = {
  GET_CONTACTS: EVENIUM_GET_CONTACTS_OUTPUT
  GET_EVENTS: EVENIUM_GET_EVENTS_OUTPUT
  LOGOUT: EVENIUM_LOGOUT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EVENIUM toolkit.
 */
export const EVENIUM = {
  slug: "evenium",
  tools: {
    /**
     * Tool to retrieve a list of contacts from evenium. use when you need to fetch and optionally filter organizer contacts.
     */
    GET_CONTACTS: "EVENIUM_GET_CONTACTS",
    /**
     * Tool to retrieve a list of events with optional filters. use after authenticating with evenium.
     */
    GET_EVENTS: "EVENIUM_GET_EVENTS",
    /**
     * Tool to log out the current user and invalidate the session token. use when you need to explicitly end the current session.
     */
    LOGOUT: "EVENIUM_LOGOUT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EVENIUM".
 */
export type EVENIUM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EVENIUM".
 */
export type EVENIUM_TRIGGER_EVENTS = {}
