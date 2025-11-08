// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FRESHDESK's FRESHDESK_CREATE_TICKET tool input.
 */
type FRESHDESK_CREATE_TICKET_INPUT = {
  /**
   * Attachments
   * @description Ticket attachments
   */
  attachments?: unknown[];
  /**
   * Cc Emails
   * @description Email addresses added in the 'cc' field of the incoming ticket email
   */
  cc_emails?: unknown[];
  /**
   * Company Id
   * @description Company ID of the requester
   */
  company_id?: number;
  /**
   * Custom Fields
   * @description Key value pairs containing the names and values of custom fields
   */
  custom_fields?: {
      [key: string]: unknown;
  };
  /**
   * Description
   * @description HTML content of the ticket
   */
  description?: string;
  /**
   * Due By
   * @description Timestamp that denotes when the ticket is due to be resolved
   */
  due_by?: string;
  /**
   * Email
   * @description Email address of the requester
   */
  email?: string;
  /**
   * Email Config Id
   * @description ID of email config which is used for this ticket
   */
  email_config_id?: number;
  /**
   * Facebook Id
   * @description Facebook ID of the requester
   */
  facebook_id?: string;
  /**
   * Fr Due By
   * @description Timestamp that denotes when the first response is due
   */
  fr_due_by?: string;
  /**
   * Group Id
   * @description ID of the group to which the ticket has been assigned
   */
  group_id?: number;
  /**
   * Internal Agent Id
   * @description ID of the internal agent which the ticket should be assigned with
   */
  internal_agent_id?: number;
  /**
   * Internal Group Id
   * @description ID of the internal group to which the ticket should be assigned with
   */
  internal_group_id?: number;
  /**
   * Lookup Parameter
   * @description Lookup field for custom objects
   */
  lookup_parameter?: string;
  /**
   * Name
   * @description Name of the requester
   */
  name?: string;
  /**
   * Phone
   * @description Phone number of the requester
   */
  phone?: string;
  /**
   * Priority
   * @description Priority of the ticket
   * @default 1
   */
  priority: number;
  /**
   * Product Id
   * @description ID of the product linked to the ticket
   */
  product_id?: number;
  /**
   * Requester Id
   * @description User ID of the requester
   */
  requester_id?: number;
  /**
   * Responder Id
   * @description ID of the agent to whom the ticket has been assigned
   */
  responder_id?: number;
  /**
   * Source
   * @description The channel through which the ticket was created
   * @default 2
   */
  source: number;
  /**
   * Status
   * @description Status of the ticket
   * @default 2
   */
  status: number;
  /**
   * Subject
   * @description Subject of the ticket
   */
  subject?: string;
  /**
   * Tags
   * @description Tags that have been associated with the ticket
   */
  tags?: unknown[];
  /**
   * Twitter Id
   * @description Twitter handle of the requester
   */
  twitter_id?: string;
  /**
   * Unique External Id
   * @description External ID of the requester
   */
  unique_external_id?: string;
};

/**
 * Type of FRESHDESK's FRESHDESK_CREATE_TICKET tool output.
 */
type FRESHDESK_CREATE_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: {
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
 * Type of FRESHDESK's FRESHDESK_DELETE_TICKET tool input.
 */
type FRESHDESK_DELETE_TICKET_INPUT = {
  /**
   * Ticket Id
   * @description ID of the ticket to be deleted
   */
  ticket_id?: number;
};

/**
 * Type of FRESHDESK's FRESHDESK_DELETE_TICKET tool output.
 */
type FRESHDESK_DELETE_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: {
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
 * Type of FRESHDESK's FRESHDESK_GET_TICKETS tool input.
 */
type FRESHDESK_GET_TICKETS_INPUT = {
  /**
   * Agent Id
   * @description Filter tickets by agent ID
   */
  agent_id?: number;
  /**
   * Created Since
   * Format: date-time
   * @description Retrieve tickets created since this timestamp. Format: YYYY-MM-DDTHH:MM:SSZ
   */
  created_since?: string;
  /**
   * Email
   * @description Filter tickets by requester email
   */
  email?: string;
  /**
   * Filter
   * @description Predefined filter to apply. Possible values include 'new_and_my_open', 'watching', 'spam', 'deleted', etc.
   */
  filter?: string;
  /**
   * Group Id
   * @description Filter tickets by group ID
   */
  group_id?: number;
  /**
   * Page
   * @description Page number to retrieve
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of tickets per page
   * @default 30
   */
  per_page: number;
  /**
   * Priority
   * @description Filter tickets by priority. E.g., 1 for Low, 2 for Medium, etc.
   */
  priority?: number;
  /**
   * Requester Id
   * @description Filter tickets by requester ID
   */
  requester_id?: number;
  /**
   * Sort By
   * @description Field to sort tickets by, e.g., 'created_at'
   */
  sort_by?: string;
  /**
   * Sort Order
   * @description Order of sorting: 'asc' or 'desc'
   */
  sort_order?: string;
  /**
   * Status
   * @description Filter tickets by status. E.g., 2 for Open, 3 for Pending, etc.
   */
  status?: number;
};

/**
 * Type of FRESHDESK's FRESHDESK_GET_TICKETS tool output.
 */
type FRESHDESK_GET_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: unknown[];
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
 * Type of FRESHDESK's FRESHDESK_LIST_ALL_TICKETS tool input.
 */
type FRESHDESK_LIST_ALL_TICKETS_INPUT = object;

/**
 * Type of FRESHDESK's FRESHDESK_LIST_ALL_TICKETS tool output.
 */
type FRESHDESK_LIST_ALL_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: {
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
 * Type of FRESHDESK's FRESHDESK_REPLY_TICKET tool input.
 */
type FRESHDESK_REPLY_TICKET_INPUT = {
  /**
   * Attachments
   * @description List of attachment file URLs or paths
   * @default []
   */
  attachments: string[];
  /**
   * Bcc Emails
   * @description List of email addresses to be BCC'd
   * @default []
   */
  bcc_emails: string[];
  /**
   * Body
   * @description Content of the reply
   */
  body?: string;
  /**
   * Cc Emails
   * @description List of email addresses to be CC'd
   * @default []
   */
  cc_emails: string[];
  /**
   * Ticket Id
   * @description ID of the ticket to reply to
   */
  ticket_id?: number;
};

/**
 * Type of FRESHDESK's FRESHDESK_REPLY_TICKET tool output.
 */
type FRESHDESK_REPLY_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: {
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
 * Type of FRESHDESK's FRESHDESK_UPDATE_TICKET tool input.
 */
type FRESHDESK_UPDATE_TICKET_INPUT = {
  /**
   * Attachments
   * @description Ticket attachments
   */
  attachments?: unknown[];
  /**
   * Company Id
   * @description Company ID of the requester
   */
  company_id?: number;
  /**
   * Custom Fields
   * @description Key value pairs containing the names and values of custom fields
   */
  custom_fields?: {
      [key: string]: unknown;
  };
  /**
   * Description
   * @description HTML content of the ticket
   */
  description?: string;
  /**
   * Due By
   * @description Timestamp that denotes when the ticket is due to be resolved
   */
  due_by?: string;
  /**
   * Email
   * @description Email address of the requester
   */
  email?: string;
  /**
   * Email Config Id
   * @description ID of email config which is used for this ticket
   */
  email_config_id?: number;
  /**
   * Facebook Id
   * @description Facebook ID of the requester
   */
  facebook_id?: string;
  /**
   * Fr Due By
   * @description Timestamp that denotes when the first response is due
   */
  fr_due_by?: string;
  /**
   * Group Id
   * @description ID of the group to which the ticket has been assigned
   */
  group_id?: number;
  /**
   * Internal Agent Id
   * @description ID of the internal agent which the ticket should be assigned with
   */
  internal_agent_id?: number;
  /**
   * Internal Group Id
   * @description ID of the internal group to which the ticket should be assigned with
   */
  internal_group_id?: number;
  /**
   * Lookup Parameter
   * @description Lookup field for custom objects
   */
  lookup_parameter?: string;
  /**
   * Name
   * @description Name of the requester
   */
  name?: string;
  /**
   * Parent Id
   * @description ID of the parent ticket that this ticket should be linked to
   */
  parent_id?: number;
  /**
   * Phone
   * @description Phone number of the requester
   */
  phone?: string;
  /**
   * Priority
   * @description Priority of the ticket
   * @default 1
   */
  priority: number;
  /**
   * Product Id
   * @description ID of the product linked to the ticket
   */
  product_id?: number;
  /**
   * Requester Id
   * @description User ID of the requester
   */
  requester_id?: number;
  /**
   * Responder Id
   * @description ID of the agent to whom the ticket has been assigned
   */
  responder_id?: number;
  /**
   * Source
   * @description The channel through which the ticket was created
   * @default 2
   */
  source: number;
  /**
   * Status
   * @description Status of the ticket
   * @default 2
   */
  status: number;
  /**
   * Subject
   * @description Subject of the ticket
   */
  subject?: string;
  /**
   * Tags
   * @description Tags that have been associated with the ticket
   */
  tags?: unknown[];
  /**
   * Ticket Id
   * @description ID of the ticket to be updated
   */
  ticket_id?: number;
  /**
   * Twitter Id
   * @description Twitter handle of the requester
   */
  twitter_id?: string;
  /**
   * Type
   * @description Type of the ticket
   */
  type?: string;
  /**
   * Unique External Id
   * @description External ID of the requester
   */
  unique_external_id?: string;
};

/**
 * Type of FRESHDESK's FRESHDESK_UPDATE_TICKET tool output.
 */
type FRESHDESK_UPDATE_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: {
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
 * Type of FRESHDESK's FRESHDESK_VIEW_TICKET tool input.
 */
type FRESHDESK_VIEW_TICKET_INPUT = {
  /**
   * Ticket Id
   * @description ID of the ticket to be viewed
   */
  ticket_id?: number;
};

/**
 * Type of FRESHDESK's FRESHDESK_VIEW_TICKET tool output.
 */
type FRESHDESK_VIEW_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response data from the API
       */
      response_data?: {
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
 * Type map of all available tool input types for toolkit "FRESHDESK".
 */
export type FRESHDESK_TOOL_INPUTS = {
  CREATE_TICKET: FRESHDESK_CREATE_TICKET_INPUT
  DELETE_TICKET: FRESHDESK_DELETE_TICKET_INPUT
  GET_TICKETS: FRESHDESK_GET_TICKETS_INPUT
  LIST_ALL_TICKETS: FRESHDESK_LIST_ALL_TICKETS_INPUT
  REPLY_TICKET: FRESHDESK_REPLY_TICKET_INPUT
  UPDATE_TICKET: FRESHDESK_UPDATE_TICKET_INPUT
  VIEW_TICKET: FRESHDESK_VIEW_TICKET_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FRESHDESK".
 */
export type FRESHDESK_TOOL_OUTPUTS = {
  CREATE_TICKET: FRESHDESK_CREATE_TICKET_OUTPUT
  DELETE_TICKET: FRESHDESK_DELETE_TICKET_OUTPUT
  GET_TICKETS: FRESHDESK_GET_TICKETS_OUTPUT
  LIST_ALL_TICKETS: FRESHDESK_LIST_ALL_TICKETS_OUTPUT
  REPLY_TICKET: FRESHDESK_REPLY_TICKET_OUTPUT
  UPDATE_TICKET: FRESHDESK_UPDATE_TICKET_OUTPUT
  VIEW_TICKET: FRESHDESK_VIEW_TICKET_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FRESHDESK toolkit.
 */
export const FRESHDESK = {
  slug: "freshdesk",
  tools: {
    /**
     * Creates a new ticket in freshdesk.
     */
    CREATE_TICKET: "FRESHDESK_CREATE_TICKET",
    /**
     * Deletes an existing ticket in freshdesk.
     */
    DELETE_TICKET: "FRESHDESK_DELETE_TICKET",
    /**
     * Retrieves a list of tickets from freshdesk.
     */
    GET_TICKETS: "FRESHDESK_GET_TICKETS",
    /**
     * Lists all tickets in freshdesk.
     */
    LIST_ALL_TICKETS: "FRESHDESK_LIST_ALL_TICKETS",
    /**
     * Replies to an existing ticket in freshdesk.
     */
    REPLY_TICKET: "FRESHDESK_REPLY_TICKET",
    /**
     * Updates an existing ticket in freshdesk.
     */
    UPDATE_TICKET: "FRESHDESK_UPDATE_TICKET",
    /**
     * Views an existing ticket in freshdesk.
     */
    VIEW_TICKET: "FRESHDESK_VIEW_TICKET",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FRESHDESK".
 */
export type FRESHDESK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FRESHDESK".
 */
export type FRESHDESK_TRIGGER_EVENTS = {}
