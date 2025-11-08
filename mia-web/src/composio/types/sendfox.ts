// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SENDFOX's SENDFOX_DELETE_CONTACT_FROM_LIST tool input.
 */
type SENDFOX_DELETE_CONTACT_FROM_LIST_INPUT = {
  /**
   * Contact Id
   * @description ID of the contact to remove from the list
   */
  contact_id?: number;
  /**
   * List Id
   * @description ID of the list to remove the contact from
   */
  list_id?: number;
};

/**
 * Type of SENDFOX's SENDFOX_DELETE_CONTACT_FROM_LIST tool output.
 */
type SENDFOX_DELETE_CONTACT_FROM_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the contact was created
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the contact
       */
      email: string;
      /**
       * First Name
       * @description First name of the contact
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description ID of the contact
       */
      id: number;
      /**
       * Ip Address
       * @description IP address associated with the contact
       * @default null
       */
      ip_address: string | null;
      /**
       * Last Name
       * @description Last name of the contact
       * @default null
       */
      last_name: string | null;
      /**
       * Unsubscribed At
       * @description Timestamp when the contact unsubscribed
       * @default null
       */
      unsubscribed_at: string | null;
      /**
       * Updated At
       * @description Timestamp when the contact was last updated
       */
      updated_at: string;
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
 * Type of SENDFOX's SENDFOX_GET_AUTOMATIONS tool input.
 */
type SENDFOX_GET_AUTOMATIONS_INPUT = object;

/**
 * Type of SENDFOX's SENDFOX_GET_AUTOMATIONS tool output.
 */
type SENDFOX_GET_AUTOMATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Automations
       * @description List of automations
       */
      automations: {
          /**
           * Id
           * @description Unique ID of the automation
           */
          id: number;
          /**
           * Name
           * @description Name of the automation
           */
          name: string;
          /**
           * Url
           * Format: uri
           * @description URL to manage the automation
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
 * Type of SENDFOX's SENDFOX_GET_CAMPAIGNS tool input.
 */
type SENDFOX_GET_CAMPAIGNS_INPUT = {
  /**
   * Limit
   * @description Number of results per page. Max is 100. Defaults to API default if not provided.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number of the results to fetch. Minimum value is 1. Defaults to API default if not provided.
   * @default null
   */
  page: number | null;
};

/**
 * Type of SENDFOX's SENDFOX_GET_CAMPAIGNS tool output.
 */
type SENDFOX_GET_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaigns
       * @description List of campaigns retrieved from SendFox.
       */
      campaigns: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the campaign was created.
           */
          created_at: string;
          /**
           * Html Content
           * @description HTML content of the campaign.
           */
          html_content: string;
          /**
           * Id
           * @description Unique campaign ID.
           */
          id: number;
          /**
           * Lists
           * @description Lists attached to this campaign (array of list objects).
           */
          lists: {
              [key: string]: unknown;
          }[];
          /**
           * Plain Content
           * @description Plain-text content of the campaign.
           */
          plain_content: string;
          /**
           * Scheduled At
           * @description ISO 8601 timestamp when the campaign is scheduled, if applicable.
           * @default null
           */
          scheduled_at: string | null;
          /**
           * Sent At
           * @description ISO 8601 timestamp when the campaign was sent, if applicable.
           * @default null
           */
          sent_at: string | null;
          /**
           * Status
           * @description Current status of the campaign.
           */
          status: string;
          /**
           * Subject
           * @description Subject line of the campaign.
           */
          subject: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the campaign was last updated.
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
 * Type of SENDFOX's SENDFOX_GET_CONTACTS tool input.
 */
type SENDFOX_GET_CONTACTS_INPUT = {
  /**
   * Email
   * @description Filter contacts by email address.
   * @default null
   */
  email: string | null;
  /**
   * Limit
   * @description Number of records per page (max 100).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Record offset for pagination.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of SENDFOX's SENDFOX_GET_CONTACTS tool output.
 */
type SENDFOX_GET_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts returned by the API.
       */
      contacts: {
          /**
           * Confirmed
           * @description Whether the email is confirmed.
           */
          confirmed: boolean;
          /**
           * Created At
           * @description Creation timestamp (ISO8601).
           */
          created_at: string;
          /**
           * Email
           * @description Email of the contact.
           */
          email: string;
          /**
           * First Name
           * @description First name of the contact.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description ID of the contact.
           */
          id: number;
          /**
           * Last Name
           * @description Last name of the contact.
           * @default null
           */
          last_name: string | null;
          /**
           * Lists
           * @description Lists the contact is subscribed to.
           */
          lists: string[];
          /**
           * Status
           * @description Status of the contact.
           */
          status: string;
          /**
           * Unsubscribed
           * @description Whether the contact is unsubscribed.
           */
          unsubscribed: boolean;
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
 * Type of SENDFOX's SENDFOX_GET_CONTACT_BY_EMAIL tool input.
 */
type SENDFOX_GET_CONTACT_BY_EMAIL_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address of the contact to search for
   */
  email?: unknown;
};

/**
 * Type of SENDFOX's SENDFOX_GET_CONTACT_BY_EMAIL tool output.
 */
type SENDFOX_GET_CONTACT_BY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Contact creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the contact
       */
      email: string;
      /**
       * First Name
       * @description First name of the contact
       */
      first_name: string;
      /**
       * Id
       * @description Unique ID of the contact
       */
      id: number;
      /**
       * Last Name
       * @description Last name of the contact
       */
      last_name: string;
      /**
       * State
       * @description Current state of the contact
       * @enum {string}
       */
      state: "active" | "unsubscribed" | "bounced" | "junk";
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
 * Type of SENDFOX's SENDFOX_GET_CONTACT_BY_ID tool input.
 */
type SENDFOX_GET_CONTACT_BY_ID_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier of the contact to retrieve.
   */
  contact_id?: number;
};

/**
 * Type of SENDFOX's SENDFOX_GET_CONTACT_BY_ID tool output.
 */
type SENDFOX_GET_CONTACT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the contact was created.
       */
      created_at: string;
      /**
       * Email
       * @description Contact's email address.
       */
      email: string;
      /**
       * First Name
       * @description First name of the contact.
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Unique contact ID.
       */
      id: number;
      /**
       * Last Name
       * @description Last name of the contact.
       * @default null
       */
      last_name: string | null;
      /**
       * Lists
       * @description List IDs the contact is a member of.
       */
      lists: number[];
      /**
       * Status
       * @description Subscription status of the contact (e.g., 'active', 'unsubscribed').
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
 * Type of SENDFOX's SENDFOX_GET_CONTACT_FIELDS tool input.
 */
type SENDFOX_GET_CONTACT_FIELDS_INPUT = object;

/**
 * Type of SENDFOX's SENDFOX_GET_CONTACT_FIELDS tool output.
 */
type SENDFOX_GET_CONTACT_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fields
       * @description List of contact fields available for the user
       */
      fields: {
          /**
           * Id
           * @description The unique identifier for the custom field
           */
          id: number;
          /**
           * Name
           * @description The name of the custom field
           */
          name: string;
          /**
           * Type
           * @description The type of the custom field (e.g., text, date)
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
 * Type of SENDFOX's SENDFOX_GET_LISTS tool input.
 */
type SENDFOX_GET_LISTS_INPUT = object;

/**
 * Type of SENDFOX's SENDFOX_GET_LISTS tool output.
 */
type SENDFOX_GET_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Count
       * @description Number of contacts in the list
       */
      contact_count: number;
      /**
       * Id
       * @description List ID
       */
      id: number;
      /**
       * Name
       * @description List name
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDFOX's SENDFOX_GET_LIST_BY_ID tool input.
 */
type SENDFOX_GET_LIST_BY_ID_INPUT = {
  /**
   * List Id
   * @description Unique identifier of the contact list to retrieve.
   */
  list_id?: number;
};

/**
 * Type of SENDFOX's SENDFOX_GET_LIST_BY_ID tool output.
 */
type SENDFOX_GET_LIST_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Count
       * @description Number of contacts in the list.
       */
      contact_count: number;
      /**
       * Id
       * @description Unique list ID.
       */
      id: number;
      /**
       * Name
       * @description Name of the contact list.
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
 * Type of SENDFOX's SENDFOX_PATCH_UNSUBSCRIBE_CONTACT tool input.
 */
type SENDFOX_PATCH_UNSUBSCRIBE_CONTACT_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address of the contact to unsubscribe
   */
  email?: unknown;
};

/**
 * Type of SENDFOX's SENDFOX_PATCH_UNSUBSCRIBE_CONTACT tool output.
 */
type SENDFOX_PATCH_UNSUBSCRIBE_CONTACT_OUTPUT = {
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
 * Type of SENDFOX's SENDFOX_POST_CREATE_CONTACT tool input.
 */
type SENDFOX_POST_CREATE_CONTACT_INPUT = {
  /**
   * Email
   * @description Email address of the contact to create.
   */
  email?: string;
  /**
   * First Name
   * @description First name of the contact.
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Last name of the contact.
   * @default null
   */
  last_name: string | null;
  /**
   * Lists
   * @description List IDs to add the contact to.
   * @default null
   */
  lists: number[] | null;
};

/**
 * Type of SENDFOX's SENDFOX_POST_CREATE_CONTACT tool output.
 */
type SENDFOX_POST_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description Email address of the contact.
       */
      email: string;
      /**
       * First Name
       * @description First name of the contact.
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Unique identifier of the contact.
       */
      id: number;
      /**
       * Last Name
       * @description Last name of the contact.
       * @default null
       */
      last_name: string | null;
      /**
       * Lists
       * @description List IDs the contact belongs to.
       */
      lists: number[];
      /**
       * Status
       * @description Subscription status of the contact.
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
 * Type of SENDFOX's SENDFOX_POST_CREATE_LIST tool input.
 */
type SENDFOX_POST_CREATE_LIST_INPUT = {
  /**
   * Name
   * @description Name of the contact list to create
   */
  name?: string;
};

/**
 * Type of SENDFOX's SENDFOX_POST_CREATE_LIST tool output.
 */
type SENDFOX_POST_CREATE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Count
       * @description Number of contacts in the list
       */
      contact_count: number;
      /**
       * Created At
       * @description Date/time the list was created in ISO 8601 format
       */
      created_at: string;
      /**
       * Id
       * @description ID of the created list
       */
      id: number;
      /**
       * Name
       * @description Name of the created list
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
 * Type map of all available tool input types for toolkit "SENDFOX".
 */
export type SENDFOX_TOOL_INPUTS = {
  DELETE_CONTACT_FROM_LIST: SENDFOX_DELETE_CONTACT_FROM_LIST_INPUT
  GET_AUTOMATIONS: SENDFOX_GET_AUTOMATIONS_INPUT
  GET_CAMPAIGNS: SENDFOX_GET_CAMPAIGNS_INPUT
  GET_CONTACTS: SENDFOX_GET_CONTACTS_INPUT
  GET_CONTACT_BY_EMAIL: SENDFOX_GET_CONTACT_BY_EMAIL_INPUT
  GET_CONTACT_BY_ID: SENDFOX_GET_CONTACT_BY_ID_INPUT
  GET_CONTACT_FIELDS: SENDFOX_GET_CONTACT_FIELDS_INPUT
  GET_LISTS: SENDFOX_GET_LISTS_INPUT
  GET_LIST_BY_ID: SENDFOX_GET_LIST_BY_ID_INPUT
  PATCH_UNSUBSCRIBE_CONTACT: SENDFOX_PATCH_UNSUBSCRIBE_CONTACT_INPUT
  POST_CREATE_CONTACT: SENDFOX_POST_CREATE_CONTACT_INPUT
  POST_CREATE_LIST: SENDFOX_POST_CREATE_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SENDFOX".
 */
export type SENDFOX_TOOL_OUTPUTS = {
  DELETE_CONTACT_FROM_LIST: SENDFOX_DELETE_CONTACT_FROM_LIST_OUTPUT
  GET_AUTOMATIONS: SENDFOX_GET_AUTOMATIONS_OUTPUT
  GET_CAMPAIGNS: SENDFOX_GET_CAMPAIGNS_OUTPUT
  GET_CONTACTS: SENDFOX_GET_CONTACTS_OUTPUT
  GET_CONTACT_BY_EMAIL: SENDFOX_GET_CONTACT_BY_EMAIL_OUTPUT
  GET_CONTACT_BY_ID: SENDFOX_GET_CONTACT_BY_ID_OUTPUT
  GET_CONTACT_FIELDS: SENDFOX_GET_CONTACT_FIELDS_OUTPUT
  GET_LISTS: SENDFOX_GET_LISTS_OUTPUT
  GET_LIST_BY_ID: SENDFOX_GET_LIST_BY_ID_OUTPUT
  PATCH_UNSUBSCRIBE_CONTACT: SENDFOX_PATCH_UNSUBSCRIBE_CONTACT_OUTPUT
  POST_CREATE_CONTACT: SENDFOX_POST_CREATE_CONTACT_OUTPUT
  POST_CREATE_LIST: SENDFOX_POST_CREATE_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SENDFOX toolkit.
 */
export const SENDFOX = {
  slug: "sendfox",
  tools: {
    /**
     * Tool to remove a contact from a specific list in sendfox. use when you need to disassociate a contact by its id from a sendfox list.
     */
    DELETE_CONTACT_FROM_LIST: "SENDFOX_DELETE_CONTACT_FROM_LIST",
    /**
     * Tool to retrieve a list of automations. use when you need to list all automations for your sendfox account.
     */
    GET_AUTOMATIONS: "SENDFOX_GET_AUTOMATIONS",
    /**
     * Tool to retrieve a paginated list of campaigns. use when you need to fetch campaigns in batches or implement pagination. example: "fetch campaigns page 2 with 50 per page.".
     */
    GET_CAMPAIGNS: "SENDFOX_GET_CAMPAIGNS",
    /**
     * Tool to retrieve a paginated list of contacts. use when you need to fetch contacts in pages, optionally filtering by email.
     */
    GET_CONTACTS: "SENDFOX_GET_CONTACTS",
    /**
     * Tool to retrieve a contact by their email address. use when you need to fetch an existing contact’s details by providing their email.
     */
    GET_CONTACT_BY_EMAIL: "SENDFOX_GET_CONTACT_BY_EMAIL",
    /**
     * Tool to retrieve a contact's details by id. use after obtaining the contact id to get full contact information.
     */
    GET_CONTACT_BY_ID: "SENDFOX_GET_CONTACT_BY_ID",
    /**
     * Tool to retrieve a list of user contact fields. use when you need to discover all contact field metadata before creating or updating contacts. use after authentication is complete.
     */
    GET_CONTACT_FIELDS: "SENDFOX_GET_CONTACT_FIELDS",
    /**
     * Tool to retrieve paginated contact lists. use when you need to fetch all your sendfox lists.
     */
    GET_LISTS: "SENDFOX_GET_LISTS",
    /**
     * Tool to retrieve a specific contact list by its id. use when you have a list id and need its details before performing list operations.
     */
    GET_LIST_BY_ID: "SENDFOX_GET_LIST_BY_ID",
    /**
     * Tool to unsubscribe a contact. use when you need to globally mark a contact as unsubscribed.
     */
    PATCH_UNSUBSCRIBE_CONTACT: "SENDFOX_PATCH_UNSUBSCRIBE_CONTACT",
    /**
     * Tool to create a new contact. use when you need to add a new subscriber to sendfox.
     */
    POST_CREATE_CONTACT: "SENDFOX_POST_CREATE_CONTACT",
    /**
     * Tool to create a new contact list. use when you need to add a new list to your sendfox account. example: create a list named 'newsletter subscribers'.
     */
    POST_CREATE_LIST: "SENDFOX_POST_CREATE_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SENDFOX".
 */
export type SENDFOX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SENDFOX".
 */
export type SENDFOX_TRIGGER_EVENTS = {}
