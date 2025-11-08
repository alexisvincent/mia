// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FINDYMAIL's FINDYMAIL_CREATE_LIST tool input.
 */
type FINDYMAIL_CREATE_LIST_INPUT = {
  /**
   * Name
   * @description Name of the new contact list
   */
  name?: string;
};

/**
 * Type of FINDYMAIL's FINDYMAIL_CREATE_LIST tool output.
 */
type FINDYMAIL_CREATE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * List
       * @description The newly created contact list
       */
      list: {
          /**
           * Created At
           * @description ISO timestamp when the list was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the list
           */
          id: number;
          /**
           * Is Owner
           * @description Indicates if the current user is the owner of the list
           */
          is_owner: boolean;
          /**
           * Name
           * @description Name of the list
           */
          name: string;
          /**
           * Shared With Team
           * @description Indicates if the list is shared with the team
           */
          shared_with_team: boolean;
          /**
           * Updated At
           * @description ISO timestamp when the list was last updated
           */
          updated_at: string;
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
 * Type of FINDYMAIL's FINDYMAIL_DELETE_LIST tool input.
 */
type FINDYMAIL_DELETE_LIST_INPUT = {
  /**
   * Id
   * @description ID of the contact list to delete.
   */
  id?: number;
};

/**
 * Type of FINDYMAIL's FINDYMAIL_DELETE_LIST tool output.
 */
type FINDYMAIL_DELETE_LIST_OUTPUT = {
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
 * Type of FINDYMAIL's FINDYMAIL_FIND_EMAIL_BY_NAME tool input.
 */
type FINDYMAIL_FIND_EMAIL_BY_NAME_INPUT = {
  /**
   * Domain
   * @description Email domain (best) or company name
   */
  domain?: string;
  /**
   * Name
   * @description Person's full name
   */
  name?: string;
  /**
   * Webhook Url
   * Format: uri
   * @description Webhook URL that will receive the result as callback. If provided, endpoint will process asynchronously.
   * @default null
   */
  webhook_url: string | null;
};

/**
 * Type of FINDYMAIL's FINDYMAIL_FIND_EMAIL_BY_NAME tool output.
 */
type FINDYMAIL_FIND_EMAIL_BY_NAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact
       * @description Synchronous contact information result
       * @default null
       */
      contact: {
          /**
           * Domain
           * @description Contact's email domain
           */
          domain: string;
          /**
           * Email
           * @description Found email address
           */
          email: string;
          /**
           * Name
           * @description Person's full name
           */
          name: string;
      } | null;
      /**
       * AsyncPayload
       * @description Asynchronous payload when webhook_url provided
       * @default null
       */
      payload: {
          /**
           * Contact
           * @description Contact information in async callback payload
           */
          contact: {
              /**
               * Domain
               * @description Contact's email domain
               */
              domain: string;
              /**
               * Email
               * @description Found email address
               */
              email: string;
              /**
               * Name
               * @description Person's full name
               */
              name: string;
          };
      } | null;
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
 * Type of FINDYMAIL's FINDYMAIL_GET_CONTACT_LISTS tool input.
 */
type FINDYMAIL_GET_CONTACT_LISTS_INPUT = object;

/**
 * Type of FINDYMAIL's FINDYMAIL_GET_CONTACT_LISTS tool output.
 */
type FINDYMAIL_GET_CONTACT_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Lists
       * @description Array of contact list metadata objects.
       */
      lists: {
          /**
           * Created At
           * @description Timestamp when the list was created (ISO 8601).
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the contact list.
           */
          id: number;
          /**
           * Is Owner
           * @description Indicates if the authenticated user is the owner of the list.
           */
          is_owner: boolean;
          /**
           * Name
           * @description Name of the contact list.
           */
          name: string;
          /**
           * Shared With Team
           * @description Indicates if the list is shared with the team.
           */
          shared_with_team: boolean;
          /**
           * Updated At
           * @description Timestamp when the list was last updated (ISO 8601).
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
 * Type of FINDYMAIL's FINDYMAIL_LIST_CONTACTS tool input.
 */
type FINDYMAIL_LIST_CONTACTS_INPUT = {
  /**
   * Id
   * @description The ID of the contact list. Use 0 for "All contacts".
   */
  id?: number;
};

/**
 * Type of FINDYMAIL's FINDYMAIL_LIST_CONTACTS tool output.
 */
type FINDYMAIL_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description List of contacts on the current page
   */
  data?: {
      /**
       * Company
       * @description Company name of the contact
       * @default null
       */
      company: string | null;
      /**
       * Email
       * Format: email
       * @description Email address of the contact
       */
      email: unknown;
      /**
       * Id
       * @description Unique contact ID
       */
      id: number;
      /**
       * Job Title
       * @description Job title of the contact
       * @default null
       */
      job_title: string | null;
      /**
       * Linkedin Url
       * @description LinkedIn profile URL of the contact
       * @default null
       */
      linkedin_url: string | null;
      /**
       * Name
       * @description Full name of the contact
       */
      name: string;
  }[];
  /**
   * Draw
   * @description Draw counter for client-side pagination
   */
  draw?: number;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Records Filtered
   * @description Total number of contacts after filtering
   */
  recordsFiltered?: number;
  /**
   * Records Total
   * @description Total number of contacts before filtering
   */
  recordsTotal?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FINDYMAIL's FINDYMAIL_VERIFY_EMAIL tool input.
 */
type FINDYMAIL_VERIFY_EMAIL_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to be verified.
   */
  email?: unknown;
};

/**
 * Type of FINDYMAIL's FINDYMAIL_VERIFY_EMAIL tool output.
 */
type FINDYMAIL_VERIFY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description The email address that was verified.
       */
      email: string;
      /**
       * Status
       * @description Provides additional information about the verification result.
       */
      status: string;
      /**
       * Verified
       * @description Indicates whether the email is deliverable (true) or not (false).
       */
      verified: boolean;
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
 * Type map of all available tool input types for toolkit "FINDYMAIL".
 */
export type FINDYMAIL_TOOL_INPUTS = {
  CREATE_LIST: FINDYMAIL_CREATE_LIST_INPUT
  DELETE_LIST: FINDYMAIL_DELETE_LIST_INPUT
  FIND_EMAIL_BY_NAME: FINDYMAIL_FIND_EMAIL_BY_NAME_INPUT
  GET_CONTACT_LISTS: FINDYMAIL_GET_CONTACT_LISTS_INPUT
  LIST_CONTACTS: FINDYMAIL_LIST_CONTACTS_INPUT
  VERIFY_EMAIL: FINDYMAIL_VERIFY_EMAIL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FINDYMAIL".
 */
export type FINDYMAIL_TOOL_OUTPUTS = {
  CREATE_LIST: FINDYMAIL_CREATE_LIST_OUTPUT
  DELETE_LIST: FINDYMAIL_DELETE_LIST_OUTPUT
  FIND_EMAIL_BY_NAME: FINDYMAIL_FIND_EMAIL_BY_NAME_OUTPUT
  GET_CONTACT_LISTS: FINDYMAIL_GET_CONTACT_LISTS_OUTPUT
  LIST_CONTACTS: FINDYMAIL_LIST_CONTACTS_OUTPUT
  VERIFY_EMAIL: FINDYMAIL_VERIFY_EMAIL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FINDYMAIL toolkit.
 */
export const FINDYMAIL = {
  slug: "findymail",
  tools: {
    /**
     * Tool to create a new contact list. use when you need to organize contacts into a named list before adding them.
     */
    CREATE_LIST: "FINDYMAIL_CREATE_LIST",
    /**
     * Tool to delete a specified contact list by its id. use after confirming the list id to remove it.
     */
    DELETE_LIST: "FINDYMAIL_DELETE_LIST",
    /**
     * Tool to find someone's email using their full name and company domain. use when you have a person's name and domain and need their email address. supports asynchronous search via webhook url.
     */
    FIND_EMAIL_BY_NAME: "FINDYMAIL_FIND_EMAIL_BY_NAME",
    /**
     * Tool to retrieve all contact lists. use when you need an overview of your existing findymail lists.
     */
    GET_CONTACT_LISTS: "FINDYMAIL_GET_CONTACT_LISTS",
    /**
     * Tool to retrieve contacts from a specified list (paginated). use after selecting a list to fetch its contacts.
     */
    LIST_CONTACTS: "FINDYMAIL_LIST_CONTACTS",
    /**
     * Tool to verify the deliverability of an email address. use when you need to confirm that an email can receive messages before outreach.
     */
    VERIFY_EMAIL: "FINDYMAIL_VERIFY_EMAIL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FINDYMAIL".
 */
export type FINDYMAIL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FINDYMAIL".
 */
export type FINDYMAIL_TRIGGER_EVENTS = {}
