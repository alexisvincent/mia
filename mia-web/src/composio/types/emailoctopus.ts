// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EMAILOCTOPUS's EMAILOCTOPUS_CREATE_CONTACT tool input.
 */
type EMAILOCTOPUS_CREATE_CONTACT_INPUT = {
  /**
   * Email Address
   * Format: email
   * @description The email address of the contact
   */
  email_address?: string;
  /**
   * Fields
   * @description An object containing key/value pairs of field values, using the field's tag as the key
   * @default null
   */
  fields: {
      [key: string]: string;
  } | null;
  /**
   * List Id
   * @description The ID of the list to add the contact to
   */
  list_id?: string;
  /**
   * Status
   * @description The initial status of the contact: SUBSCRIBED, UNSUBSCRIBED or PENDING
   * @default null
   */
  status: string | null;
  /**
   * Tags
   * @description An array of tags to add to the contact
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of EMAILOCTOPUS's EMAILOCTOPUS_CREATE_CONTACT tool output.
 */
type EMAILOCTOPUS_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description When the contact was created, in ISO 8601 format
       */
      created_at: string;
      /**
       * Email Address
       * @description The email address of the contact
       */
      email_address: string;
      /**
       * Fields
       * @description An object containing key/value pairs of field values
       * @default null
       */
      fields: {
          [key: string]: string;
      } | null;
      /**
       * Id
       * @description The identifier of the contact
       */
      id: string;
      /**
       * Last Updated At
       * @description When the contact was last updated, in ISO 8601 format
       */
      last_updated_at: string;
      /**
       * Status
       * @description The status of the contact: SUBSCRIBED, UNSUBSCRIBED or PENDING
       */
      status: string;
      /**
       * Tags
       * @description An array of tags associated with the contact
       * @default null
       */
      tags: string[] | null;
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
 * Type of EMAILOCTOPUS's EMAILOCTOPUS_CREATE_LIST tool input.
 */
type EMAILOCTOPUS_CREATE_LIST_INPUT = {
  /**
   * Name
   * @description The name of the new mailing list
   */
  name?: string;
};

/**
 * Type of EMAILOCTOPUS's EMAILOCTOPUS_CREATE_LIST tool output.
 */
type EMAILOCTOPUS_CREATE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description The creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Id
       * @description The unique identifier of the list
       */
      id: string;
      /**
       * Name
       * @description The name of the list
       */
      name: string;
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
 * Type of EMAILOCTOPUS's EMAILOCTOPUS_DELETE_CONTACT tool input.
 */
type EMAILOCTOPUS_DELETE_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description The ID of the contact to delete, or an MD5 hash of the lowercase version of the contact's email address
   */
  contact_id?: string;
  /**
   * List Id
   * @description The ID of the list containing the contact to be deleted
   */
  list_id?: string;
};

/**
 * Type of EMAILOCTOPUS's EMAILOCTOPUS_DELETE_CONTACT tool output.
 */
type EMAILOCTOPUS_DELETE_CONTACT_OUTPUT = {
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
 * Type of EMAILOCTOPUS's EMAILOCTOPUS_DELETE_LIST tool input.
 */
type EMAILOCTOPUS_DELETE_LIST_INPUT = {
  /**
   * List Id
   * @description The unique identifier of the list to be deleted
   */
  list_id?: string;
};

/**
 * Type of EMAILOCTOPUS's EMAILOCTOPUS_DELETE_LIST tool output.
 */
type EMAILOCTOPUS_DELETE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the list was successfully deleted
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
 * Type of EMAILOCTOPUS's EMAILOCTOPUS_GET_ALL_LISTS tool input.
 */
type EMAILOCTOPUS_GET_ALL_LISTS_INPUT = {
  /**
   * Limit
   * @description Number of records to return per page (max 100)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination
   * @default null
   */
  page: number | null;
};

/**
 * Type of EMAILOCTOPUS's EMAILOCTOPUS_GET_ALL_LISTS tool output.
 */
type EMAILOCTOPUS_GET_ALL_LISTS_OUTPUT = {
  /**
   * Data
   * @description Array containing details of each list
   */
  data?: {
      /**
       * Counts
       * @description Object summarizing the list's contact counts
       */
      counts: {
          /**
           * Pending
           * @description Number of pending contacts
           */
          pending: number;
          /**
           * Subscribed
           * @description Number of subscribed contacts
           */
          subscribed: number;
          /**
           * Unsubscribed
           * @description Number of unsubscribed contacts
           */
          unsubscribed: number;
      };
      /**
       * Created At
       * @description The creation date of the list in ISO 8601 format
       */
      created_at: string;
      /**
       * Double Opt In
       * @description Indicates if double opt-in is enabled
       */
      double_opt_in: boolean;
      /**
       * Fields
       * @description Array of field objects
       */
      fields: {
          /**
           * Fallback
           * @description A default value for the field
           * @default null
           */
          fallback: unknown;
          /**
           * Label
           * @description A human-readable label for the field
           */
          label: string;
          /**
           * Tag
           * @description The identifier used to reference the field in emails
           */
          tag: string;
          /**
           * Type
           * @description The type of the field (NUMBER, TEXT, or DATE)
           */
          type: string;
      }[];
      /**
       * Id
       * @description The unique identifier of the list
       */
      id: string;
      /**
       * Name
       * @description The name assigned to the list
       */
      name: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Paging
   * @description Object containing pagination links
   */
  paging?: {
      /**
       * Next
       * @description URL for the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page of results
       * @default null
       */
      previous: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of EMAILOCTOPUS's EMAILOCTOPUS_GET_RECENT_CAMPAIGNS tool input.
 */
type EMAILOCTOPUS_GET_RECENT_CAMPAIGNS_INPUT = {
  /**
   * Limit
   * @description Number of records to return per page (default is 100)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve (default is 1)
   * @default null
   */
  page: number | null;
};

/**
 * Type of EMAILOCTOPUS's EMAILOCTOPUS_GET_RECENT_CAMPAIGNS tool output.
 */
type EMAILOCTOPUS_GET_RECENT_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description List of campaigns
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the campaign was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the campaign
       */
      id: string;
      /**
       * Name
       * @description Name of the campaign
       */
      name: string;
      /**
       * Sent At
       * @description Timestamp when the campaign was sent
       * @default null
       */
      sent_at: string | null;
      /**
       * Status
       * @description Current status of the campaign
       */
      status: string;
      /**
       * Subject
       * @description Subject line of the campaign
       */
      subject: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Paging
   * @description Paging information including current page and total pages
   */
  paging?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of EMAILOCTOPUS's EMAILOCTOPUS_UNSUBSCRIBE_CONTACT tool input.
 */
type EMAILOCTOPUS_UNSUBSCRIBE_CONTACT_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address of the contact to unsubscribe
   */
  email?: string;
  /**
   * List Id
   * @description The ID of the list containing the contact
   */
  list_id?: string;
};

/**
 * Type of EMAILOCTOPUS's EMAILOCTOPUS_UNSUBSCRIBE_CONTACT tool output.
 */
type EMAILOCTOPUS_UNSUBSCRIBE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email Address
       * Format: email
       * @description The email address of the unsubscribed contact
       */
      email_address: string;
      /**
       * List Id
       * @description The ID of the list the contact was unsubscribed from
       */
      list_id: string;
      /**
       * Status
       * @description The status of the contact (will be UNSUBSCRIBED)
       */
      status: string;
      /**
       * Success
       * @description Indicates whether the unsubscribe operation was successful
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
 * Type map of all available tool input types for toolkit "EMAILOCTOPUS".
 */
export type EMAILOCTOPUS_TOOL_INPUTS = {
  CREATE_CONTACT: EMAILOCTOPUS_CREATE_CONTACT_INPUT
  CREATE_LIST: EMAILOCTOPUS_CREATE_LIST_INPUT
  DELETE_CONTACT: EMAILOCTOPUS_DELETE_CONTACT_INPUT
  DELETE_LIST: EMAILOCTOPUS_DELETE_LIST_INPUT
  GET_ALL_LISTS: EMAILOCTOPUS_GET_ALL_LISTS_INPUT
  GET_RECENT_CAMPAIGNS: EMAILOCTOPUS_GET_RECENT_CAMPAIGNS_INPUT
  UNSUBSCRIBE_CONTACT: EMAILOCTOPUS_UNSUBSCRIBE_CONTACT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EMAILOCTOPUS".
 */
export type EMAILOCTOPUS_TOOL_OUTPUTS = {
  CREATE_CONTACT: EMAILOCTOPUS_CREATE_CONTACT_OUTPUT
  CREATE_LIST: EMAILOCTOPUS_CREATE_LIST_OUTPUT
  DELETE_CONTACT: EMAILOCTOPUS_DELETE_CONTACT_OUTPUT
  DELETE_LIST: EMAILOCTOPUS_DELETE_LIST_OUTPUT
  GET_ALL_LISTS: EMAILOCTOPUS_GET_ALL_LISTS_OUTPUT
  GET_RECENT_CAMPAIGNS: EMAILOCTOPUS_GET_RECENT_CAMPAIGNS_OUTPUT
  UNSUBSCRIBE_CONTACT: EMAILOCTOPUS_UNSUBSCRIBE_CONTACT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EMAILOCTOPUS toolkit.
 */
export const EMAILOCTOPUS = {
  slug: "emailoctopus",
  tools: {
    /**
     * This tool creates a new contact in emailoctopus. the tool will add a contact to a specified list with the provided information.
     */
    CREATE_CONTACT: "EMAILOCTOPUS_CREATE_CONTACT",
    /**
     * This tool creates a new mailing list in emailoctopus. it allows users to create a new list where contacts can be added and managed.
     */
    CREATE_LIST: "EMAILOCTOPUS_CREATE_LIST",
    /**
     * This tool allows you to delete a contact from a specified list in emailoctopus. it uses the delete /api/1.6/lists/{list id}/contacts/{contact id} endpoint to permanently remove the contact from the list. this action is irreversible and is essential for list management and data privacy compliance.
     */
    DELETE_CONTACT: "EMAILOCTOPUS_DELETE_CONTACT",
    /**
     * This tool allows you to delete an existing mailing list from your emailoctopus account. once a list is deleted, it cannot be recovered, and all contacts within the list will be permanently removed. note: lists can only be deleted if no contacts within the list have received an email in the last 7 days.
     */
    DELETE_LIST: "EMAILOCTOPUS_DELETE_LIST",
    /**
     * This tool retrieves all the mailing lists associated with the emailoctopus account.
     */
    GET_ALL_LISTS: "EMAILOCTOPUS_GET_ALL_LISTS",
    /**
     * This tool retrieves a list of recent campaigns from the emailoctopus account. it uses the get endpoint at https://emailoctopus.com/api/1.6/campaigns and allows filtering by parameters like limit and page.
     */
    GET_RECENT_CAMPAIGNS: "EMAILOCTOPUS_GET_RECENT_CAMPAIGNS",
    /**
     * This tool unsubscribes a contact from an emailoctopus list. it takes an email address as input, retrieves the contact's details using the find contact functionality, and unsubscribes the contact from the associated list.
     */
    UNSUBSCRIBE_CONTACT: "EMAILOCTOPUS_UNSUBSCRIBE_CONTACT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EMAILOCTOPUS".
 */
export type EMAILOCTOPUS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EMAILOCTOPUS".
 */
export type EMAILOCTOPUS_TRIGGER_EVENTS = {}
