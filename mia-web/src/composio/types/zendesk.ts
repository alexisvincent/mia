import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ZENDESK's ZENDESK_COUNT_ZENDESK_ORGANIZATIONS tool input.
 */
type ZENDESK_COUNT_ZENDESK_ORGANIZATIONS_INPUT = object;

/**
 * Type of ZENDESK's ZENDESK_COUNT_ZENDESK_ORGANIZATIONS tool output.
 */
type ZENDESK_COUNT_ZENDESK_ORGANIZATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of organizations
       */
      count: number;
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
 * Type of ZENDESK's ZENDESK_CREATE_ZENDESK_ORGANIZATION tool input.
 */
type ZENDESK_CREATE_ZENDESK_ORGANIZATION_INPUT = {
  /**
   * External Id
   * @description Optional external ID for the organization
   */
  external_id?: string;
  /**
   * Name
   * @description Name of the organization
   */
  name?: string;
};

/**
 * Type of ZENDESK's ZENDESK_CREATE_ZENDESK_ORGANIZATION tool output.
 */
type ZENDESK_CREATE_ZENDESK_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Organization Id
       * @description ID of the created organization
       */
      organization_id: number;
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
 * Type of ZENDESK's ZENDESK_CREATE_ZENDESK_TICKET tool input.
 */
type ZENDESK_CREATE_ZENDESK_TICKET_INPUT = {
  /**
   * Description
   * @description Long-form description / steps to reproduce.
   */
  description?: string;
  /**
   * Priority
   * @description Zendesk priority. Must be one of: 'urgent', 'high', 'normal', 'low'.
   * @default normal
   * @enum {string}
   */
  priority: "urgent" | "high" | "normal" | "low";
  /**
   * Requester Email
   * @description Email of the requester. Must accompany `requester_name`.
   * @default null
   */
  requester_email: string | null;
  /**
   * Requester Name
   * @description Name of the requester. If you supply this, you MUST also supply `requester_email`. Leave both blank to default to the authenticated user.
   * @default null
   */
  requester_name: string | null;
  /**
   * Subject
   * @description Short summary of the issue. Keep it concise (e.g. 'Cannot log in').
   */
  subject?: string;
};

/**
 * Type of ZENDESK's ZENDESK_CREATE_ZENDESK_TICKET tool output.
 */
type ZENDESK_CREATE_ZENDESK_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the ticket creation was successful
       */
      success: boolean;
      /**
       * Ticket Id
       * @description ID of the created ticket
       */
      ticket_id: number;
      /**
       * Ticket Url
       * @description URL of the created ticket
       */
      ticket_url: string;
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
 * Type of ZENDESK's ZENDESK_DELETE_ZENDESK_ORGANIZATION tool input.
 */
type ZENDESK_DELETE_ZENDESK_ORGANIZATION_INPUT = {
  /**
   * Organization Id
   * @description ID of the organization to delete
   */
  organization_id?: string;
};

/**
 * Type of ZENDESK's ZENDESK_DELETE_ZENDESK_ORGANIZATION tool output.
 */
type ZENDESK_DELETE_ZENDESK_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the organization deletion was successful
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
 * Type of ZENDESK's ZENDESK_DELETE_ZENDESK_TICKET tool input.
 */
type ZENDESK_DELETE_ZENDESK_TICKET_INPUT = {
  /**
   * Ticket Id
   * @description ID of the ticket to delete
   */
  ticket_id?: number;
};

/**
 * Type of ZENDESK's ZENDESK_DELETE_ZENDESK_TICKET tool output.
 */
type ZENDESK_DELETE_ZENDESK_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the ticket deletion was successful
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
 * Type of ZENDESK's ZENDESK_GET_ABOUT_ME tool input.
 */
type ZENDESK_GET_ABOUT_ME_INPUT = object;

/**
 * Type of ZENDESK's ZENDESK_GET_ABOUT_ME tool output.
 */
type ZENDESK_GET_ABOUT_ME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
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
 * Type of ZENDESK's ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS tool input.
 */
type ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS_INPUT = object;

/**
 * Type of ZENDESK's ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS tool output.
 */
type ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Organizations
       * @description List of organizations
       */
      organizations: unknown[];
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
 * Type of ZENDESK's ZENDESK_GET_ZENDESK_ORGANIZATION tool input.
 */
type ZENDESK_GET_ZENDESK_ORGANIZATION_INPUT = {
  /**
   * Organization Id
   * @description Numeric ID of the organization to retrieve (e.g. 123456).
   */
  organization_id?: number;
};

/**
 * Type of ZENDESK's ZENDESK_GET_ZENDESK_ORGANIZATION tool output.
 */
type ZENDESK_GET_ZENDESK_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Organization Info
       * @description Information about the organization
       */
      organization_info: {
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
 * Type of ZENDESK's ZENDESK_GET_ZENDESK_TICKET_BY_ID tool input.
 */
type ZENDESK_GET_ZENDESK_TICKET_BY_ID_INPUT = {
  /**
   * Ticket Id
   * @description ID of the ticket to get details for.
   */
  ticket_id?: number;
};

/**
 * Type of ZENDESK's ZENDESK_GET_ZENDESK_TICKET_BY_ID tool output.
 */
type ZENDESK_GET_ZENDESK_TICKET_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description List of comments associated with the ticket
       * @default null
       */
      comments: {
          /**
           * Attachments
           * @description List of attachments associated with the comment
           * @default null
           */
          attachments: unknown[] | null;
          /**
           * Audit Id
           * @description The audit ID associated with the comment
           * @default null
           */
          audit_id: number | null;
          /**
           * Author Id
           * @description The ID of the author of the comment
           * @default null
           */
          author_id: number | null;
          /**
           * Body
           * @description The body content of the comment
           * @default null
           */
          body: string | null;
          /**
           * Created At
           * @description The timestamp when the comment was created
           * @default null
           */
          created_at: string | null;
          /**
           * Html Body
           * @description The HTML formatted body of the comment
           * @default null
           */
          html_body: string | null;
          /**
           * Id
           * @description The unique identifier of the comment
           * @default null
           */
          id: number | null;
          /**
           * Metadata
           * @description Additional metadata related to the comment
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Plain Body
           * @description The plain text body of the comment
           * @default null
           */
          plain_body: string | null;
          /**
           * Public
           * @description Indicates if the comment is public
           * @default null
           */
          public: boolean | null;
          /**
           * Type
           * @description The type of the comment
           * @default null
           */
          type: string | null;
          /**
           * Via
           * @description The method through which the comment was added
           * @default null
           */
          via: {
              [key: string]: unknown;
          } | null;
      }[] | null;
      /**
       * Description
       * @description The description of the ticket
       * @default null
       */
      description: string | null;
      /**
       * Title
       * @description The title of the ticket
       * @default null
       */
      title: string | null;
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
 * Type of ZENDESK's ZENDESK_LIST_ZENDESK_TICKETS tool input.
 */
type ZENDESK_LIST_ZENDESK_TICKETS_INPUT = {
  /**
   * External Id
   * @description Filter tickets by external ID
   * @default null
   */
  external_id: string | null;
  /**
   * Page
   * @description Page number for offset pagination (starts at 1)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of tickets per page (max 100)
   * @default null
   */
  per_page: number | null;
  /**
   * Sort By
   * @description Field to sort by: 'assignee', 'assignee.name', 'created_at', 'group', 'id', 'requester', 'requester.name', 'status', 'subject', 'updated_at'
   * @default null
   */
  sort_by: string | null;
  /**
   * Sort Order
   * @description Sort order: 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
};

/**
 * Type of ZENDESK's ZENDESK_LIST_ZENDESK_TICKETS tool output.
 */
type ZENDESK_LIST_ZENDESK_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of tickets
       */
      count: number;
      /**
       * Next Page
       * @description URL for next page of results
       * @default null
       */
      next_page: string | null;
      /**
       * Previous Page
       * @description URL for previous page of results
       * @default null
       */
      previous_page: string | null;
      /**
       * Tickets
       * @description List of tickets
       */
      tickets: {
          /**
           * Assignee Id
           * @description ID of the assigned agent
           * @default null
           */
          assignee_id: number | null;
          /**
           * Created At
           * @description Ticket creation timestamp
           */
          created_at: string;
          /**
           * Custom Fields
           * @description Custom field values
           */
          custom_fields?: {
              [key: string]: unknown;
          }[];
          /**
           * Description
           * @description Ticket description
           * @default null
           */
          description: string | null;
          /**
           * Group Id
           * @description ID of the assigned group
           * @default null
           */
          group_id: number | null;
          /**
           * Id
           * @description Unique ticket ID
           */
          id: number;
          /**
           * Organization Id
           * @description ID of the requester's organization
           * @default null
           */
          organization_id: number | null;
          /**
           * Priority
           * @description Ticket priority (urgent, high, normal, low)
           * @default null
           */
          priority: string | null;
          /**
           * Requester Id
           * @description ID of the user who requested the ticket
           */
          requester_id: number;
          /**
           * Status
           * @description Ticket status (new, open, pending, hold, solved, closed)
           */
          status: string;
          /**
           * Subject
           * @description Ticket subject
           * @default null
           */
          subject: string | null;
          /**
           * Tags
           * @description List of ticket tags
           */
          tags?: string[];
          /**
           * Type
           * @description Ticket type (problem, incident, question, task)
           * @default null
           */
          type: string | null;
          /**
           * Updated At
           * @description Ticket last update timestamp
           */
          updated_at: string;
          /**
           * Url
           * @description API URL of the ticket
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
 * Type of ZENDESK's ZENDESK_REPLY_ZENDESK_TICKET tool input.
 */
type ZENDESK_REPLY_ZENDESK_TICKET_INPUT = {
  /**
   * Body
   * @description Comment content
   * @default
   */
  body: string;
  /**
   * Public
   * @description Whether the comment is public or internal
   * @default true
   */
  public: boolean;
  /**
   * Ticket Id
   * @description ID of the ticket to reply to
   */
  ticket_id?: number;
};

/**
 * Type of ZENDESK's ZENDESK_REPLY_ZENDESK_TICKET tool output.
 */
type ZENDESK_REPLY_ZENDESK_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full response data returned by Zendesk
       * @default null
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of ZENDESK's ZENDESK_UPDATE_ZENDESK_ORGANIZATION tool input.
 */
type ZENDESK_UPDATE_ZENDESK_ORGANIZATION_INPUT = {
  /**
   * Data
   * @description New data for the organization
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Organization Id
   * @description ID of the organization to update
   */
  organization_id?: number;
};

/**
 * Type of ZENDESK's ZENDESK_UPDATE_ZENDESK_ORGANIZATION tool output.
 */
type ZENDESK_UPDATE_ZENDESK_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the update was successful
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
 * Type map of all available tool input types for toolkit "ZENDESK".
 */
export type ZENDESK_TOOL_INPUTS = {
  COUNT_ZENDESK_ORGANIZATIONS: ZENDESK_COUNT_ZENDESK_ORGANIZATIONS_INPUT
  CREATE_ZENDESK_ORGANIZATION: ZENDESK_CREATE_ZENDESK_ORGANIZATION_INPUT
  CREATE_ZENDESK_TICKET: ZENDESK_CREATE_ZENDESK_TICKET_INPUT
  DELETE_ZENDESK_ORGANIZATION: ZENDESK_DELETE_ZENDESK_ORGANIZATION_INPUT
  DELETE_ZENDESK_TICKET: ZENDESK_DELETE_ZENDESK_TICKET_INPUT
  GET_ABOUT_ME: ZENDESK_GET_ABOUT_ME_INPUT
  GET_ALL_ZENDESK_ORGANIZATIONS: ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS_INPUT
  GET_ZENDESK_ORGANIZATION: ZENDESK_GET_ZENDESK_ORGANIZATION_INPUT
  GET_ZENDESK_TICKET_BY_ID: ZENDESK_GET_ZENDESK_TICKET_BY_ID_INPUT
  LIST_ZENDESK_TICKETS: ZENDESK_LIST_ZENDESK_TICKETS_INPUT
  REPLY_ZENDESK_TICKET: ZENDESK_REPLY_ZENDESK_TICKET_INPUT
  UPDATE_ZENDESK_ORGANIZATION: ZENDESK_UPDATE_ZENDESK_ORGANIZATION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ZENDESK".
 */
export type ZENDESK_TOOL_OUTPUTS = {
  COUNT_ZENDESK_ORGANIZATIONS: ZENDESK_COUNT_ZENDESK_ORGANIZATIONS_OUTPUT
  CREATE_ZENDESK_ORGANIZATION: ZENDESK_CREATE_ZENDESK_ORGANIZATION_OUTPUT
  CREATE_ZENDESK_TICKET: ZENDESK_CREATE_ZENDESK_TICKET_OUTPUT
  DELETE_ZENDESK_ORGANIZATION: ZENDESK_DELETE_ZENDESK_ORGANIZATION_OUTPUT
  DELETE_ZENDESK_TICKET: ZENDESK_DELETE_ZENDESK_TICKET_OUTPUT
  GET_ABOUT_ME: ZENDESK_GET_ABOUT_ME_OUTPUT
  GET_ALL_ZENDESK_ORGANIZATIONS: ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS_OUTPUT
  GET_ZENDESK_ORGANIZATION: ZENDESK_GET_ZENDESK_ORGANIZATION_OUTPUT
  GET_ZENDESK_TICKET_BY_ID: ZENDESK_GET_ZENDESK_TICKET_BY_ID_OUTPUT
  LIST_ZENDESK_TICKETS: ZENDESK_LIST_ZENDESK_TICKETS_OUTPUT
  REPLY_ZENDESK_TICKET: ZENDESK_REPLY_ZENDESK_TICKET_OUTPUT
  UPDATE_ZENDESK_ORGANIZATION: ZENDESK_UPDATE_ZENDESK_ORGANIZATION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of ZENDESK's NEW_USER_TRIGGER trigger payload.
 */
type ZENDESK_NEW_USER_TRIGGER_PAYLOAD = {
  /**
   * Account Id
   * @description The Zendesk account ID
   */
  account_id?: number;
  /**
   * Detail
   * @description Detailed information about the user
   */
  detail?: {
      [key: string]: unknown;
  };
  /**
   * Event
   * @description Additional event information
   */
  event?: {
      [key: string]: unknown;
  };
  /**
   * Id
   * @description The event UUID
   */
  id?: string;
  /**
   * Subject
   * @description The subject of the event
   */
  subject?: string;
  /**
   * Time
   * @description The timestamp of the event
   */
  time?: string;
  /**
   * Type
   * @description The type of the event
   */
  type?: string;
  /**
   * Zendesk Event Version
   * @description The version of the Zendesk event
   */
  zendesk_event_version?: string;
};

/**
 * Type of ZENDESK's NEW_ZENDESK_TICKET_TRIGGER trigger payload.
 */
type ZENDESK_NEW_ZENDESK_TICKET_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of Zendesk ticket event
   * @default new_ticket
   */
  event_type: string;
  /**
   * Ticket
   * @description Ticket details
   */
  ticket?: {
      /**
       * Assignee Id
       * @description The ID of the assignee
       * @default null
       */
      assignee_id: number | null;
      /**
       * Created At
       * @description The creation timestamp
       * @default null
       */
      created_at: string | null;
      /**
       * Description
       * @description The description of the ticket
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The ticket ID
       * @default null
       */
      id: number | null;
      /**
       * Payload
       * @description The complete ticket payload
       * @default null
       */
      payload: {
          [key: string]: unknown;
      } | null;
      /**
       * Priority
       * @description The priority of the ticket
       * @default null
       */
      priority: string | null;
      /**
       * Requester Id
       * @description The ID of the requester
       * @default null
       */
      requester_id: number | null;
      /**
       * Status
       * @description The status of the ticket
       * @default null
       */
      status: string | null;
      /**
       * Subject
       * @description The subject of the ticket
       * @default null
       */
      subject: string | null;
      /**
       * Updated At
       * @description The last update timestamp
       * @default null
       */
      updated_at: string | null;
  };
};

/**
 * Map of Composio's ZENDESK toolkit.
 */
export const ZENDESK = {
  slug: "zendesk",
  tools: {
    /**
     * Count the number of organizations in zendesk.
     */
    COUNT_ZENDESK_ORGANIZATIONS: "ZENDESK_COUNT_ZENDESK_ORGANIZATIONS",
    /**
     * Create an organization in zendesk.
     */
    CREATE_ZENDESK_ORGANIZATION: "ZENDESK_CREATE_ZENDESK_ORGANIZATION",
    /**
     * Create a ticket in zendesk.
     */
    CREATE_ZENDESK_TICKET: "ZENDESK_CREATE_ZENDESK_TICKET",
    /**
     * Delete an organization in zendesk.
     */
    DELETE_ZENDESK_ORGANIZATION: "ZENDESK_DELETE_ZENDESK_ORGANIZATION",
    /**
     * Delete a ticket in zendesk.
     */
    DELETE_ZENDESK_TICKET: "ZENDESK_DELETE_ZENDESK_TICKET",
    /**
     * Get information about the owner account in zendesk.
     */
    GET_ABOUT_ME: "ZENDESK_GET_ABOUT_ME",
    /**
     * Get all organizations in zendesk.
     */
    GET_ALL_ZENDESK_ORGANIZATIONS: "ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS",
    /**
     * Get information about a specific organization in zendesk.
     */
    GET_ZENDESK_ORGANIZATION: "ZENDESK_GET_ZENDESK_ORGANIZATION",
    /**
     * Get ticket details from zendesk.
     */
    GET_ZENDESK_TICKET_BY_ID: "ZENDESK_GET_ZENDESK_TICKET_BY_ID",
    /**
     * List zendesk tickets with pagination and filtering.
     */
    LIST_ZENDESK_TICKETS: "ZENDESK_LIST_ZENDESK_TICKETS",
    /**
     * Action to reply to a zendesk ticket by adding a comment.
     */
    REPLY_ZENDESK_TICKET: "ZENDESK_REPLY_ZENDESK_TICKET",
    /**
     * Update an organization in zendesk.
     */
    UPDATE_ZENDESK_ORGANIZATION: "ZENDESK_UPDATE_ZENDESK_ORGANIZATION",
  },
  triggerTypes: {
    /**
     * Triggered when a new user is created in Zendesk.
     */
    NEW_USER_TRIGGER: "ZENDESK_NEW_USER_TRIGGER",
    /**
     * Triggers when a new ticket is created in a specified Zendesk view.
     */
    NEW_ZENDESK_TICKET_TRIGGER: "ZENDESK_NEW_ZENDESK_TICKET_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "ZENDESK".
 */
export type ZENDESK_TRIGGER_PAYLOADS = {
  NEW_USER_TRIGGER: ZENDESK_NEW_USER_TRIGGER_PAYLOAD
  NEW_ZENDESK_TICKET_TRIGGER: ZENDESK_NEW_ZENDESK_TICKET_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "ZENDESK".
 */
export type ZENDESK_TRIGGER_EVENTS = {
  NEW_USER_TRIGGER: TriggerEvent<ZENDESK_NEW_USER_TRIGGER_PAYLOAD>
  NEW_ZENDESK_TICKET_TRIGGER: TriggerEvent<ZENDESK_NEW_ZENDESK_TICKET_TRIGGER_PAYLOAD>
}
