// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GORGIAS's GORGIAS_ADD_TICKET_TAGS tool input.
 */
type GORGIAS_ADD_TICKET_TAGS_INPUT = {
  /**
   * Tag Ids
   * @description List of tag IDs to add to the ticket
   */
  tag_ids?: number[];
  /**
   * Ticket Id
   * @description The ID of the ticket
   */
  ticket_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_ADD_TICKET_TAGS tool output.
 */
type GORGIAS_ADD_TICKET_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated ticket tags
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
 * Type of GORGIAS's GORGIAS_CREATE_ACCOUNT_SETTING tool input.
 */
type GORGIAS_CREATE_ACCOUNT_SETTING_INPUT = {
  /**
   * Description
   * @description Description of the setting
   */
  description?: string;
  /**
   * Name
   * @description The name of the setting
   */
  name?: string;
  /**
   * Value
   * @description The value of the setting
   */
  value?: unknown;
};

/**
 * Type of GORGIAS's GORGIAS_CREATE_ACCOUNT_SETTING tool output.
 */
type GORGIAS_CREATE_ACCOUNT_SETTING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The created setting data
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
 * Type of GORGIAS's GORGIAS_CREATE_CUSTOMER tool input.
 */
type GORGIAS_CREATE_CUSTOMER_INPUT = {
  /**
   * Address
   * @description The customer's address information
   */
  address?: {
      [key: string]: unknown;
  };
  /**
   * Channels
   * @description The customer's communication channels
   */
  channels?: {
      /**
       * Preferred
       * @description Whether this is the preferred channel
       * @default false
       */
      preferred: boolean;
      /**
       * Type
       * @description The channel type (email, phone, etc.)
       */
      type: string;
      /**
       * Value
       * @description The channel value (email address, phone number, etc.)
       */
      value: string;
  }[];
  /**
   * Data
   * @description Additional customer data
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Email
   * @description The customer's email address
   */
  email?: string;
  /**
   * External Id
   * @description External identifier for the customer
   */
  external_id?: string;
  /**
   * Name
   * @description The customer's full name
   */
  name?: string;
};

/**
 * Type of GORGIAS's GORGIAS_CREATE_CUSTOMER tool output.
 */
type GORGIAS_CREATE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The created customer data
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
 * Type of GORGIAS's GORGIAS_CREATE_TEAM tool input.
 */
type GORGIAS_CREATE_TEAM_INPUT = {
  /**
   * Decoration
   * @description Object describing how the team appears on the webpage
   */
  decoration?: {
      /**
       * Emoji
       * @description Emoji that shows before the team's name
       */
      emoji?: string;
  };
  /**
   * Description
   * @description Longer description of the team
   */
  description?: string;
  /**
   * Members
   * @description The list of users within the team
   */
  members?: number[];
  /**
   * Name
   * @description Name of the team
   */
  name?: string;
};

/**
 * Type of GORGIAS's GORGIAS_CREATE_TEAM tool output.
 */
type GORGIAS_CREATE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The created team data
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
 * Type of GORGIAS's GORGIAS_CREATE_TICKET tool input.
 */
type GORGIAS_CREATE_TICKET_INPUT = {
  /**
   * Assignee Team Id
   * @description ID of the team to assign the ticket to
   */
  assignee_team_id?: number;
  /**
   * Assignee User Id
   * @description ID of the user to assign the ticket to
   */
  assignee_user_id?: number;
  /**
   * Channel
   * @description The channel of the ticket (email, chat, etc.)
   */
  channel?: string;
  /**
   * Customer Id
   * @description The ID of the customer for this ticket
   */
  customer_id?: number;
  /**
   * External Id
   * @description External identifier for the ticket
   */
  external_id?: string;
  /**
   * Language
   * @description The language of the ticket
   */
  language?: string;
  /**
   * Messages
   * @description Messages to add to the ticket
   */
  messages?: {
      /**
       * Channel
       * @description The channel of the message (email, chat, etc.)
       */
      channel: string;
      /**
       * Content
       * @description The content of the message
       */
      content: {
          [key: string]: unknown;
      };
      /**
       * From Agent
       * @description Whether the message is from an agent
       */
      from_agent?: boolean;
      /**
       * Source
       * @description The source of the message
       */
      source?: {
          [key: string]: unknown;
      };
      /**
       * Via
       * @description How the message was created
       */
      via?: string;
  }[];
  /**
   * Meta
   * @description Extra metadata about the ticket
   */
  meta?: {
      [key: string]: unknown;
  };
  /**
   * Priority
   * @description The priority of the ticket
   */
  priority?: string;
  /**
   * Status
   * @description The status of the ticket
   */
  status?: string;
  /**
   * Subject
   * @description The subject of the ticket
   */
  subject?: string;
  /**
   * Tags
   * @description List of tag IDs to apply to the ticket
   */
  tags?: number[];
  /**
   * Via
   * @description How the ticket was created
   */
  via?: string;
};

/**
 * Type of GORGIAS's GORGIAS_CREATE_TICKET tool output.
 */
type GORGIAS_CREATE_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The created ticket data
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
 * Type of GORGIAS's GORGIAS_DELETE_CUSTOMER tool input.
 */
type GORGIAS_DELETE_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description The ID of the customer to delete
   */
  customer_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_DELETE_CUSTOMER tool output.
 */
type GORGIAS_DELETE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The deletion operation result
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
 * Type of GORGIAS's GORGIAS_DELETE_CUSTOMERS tool input.
 */
type GORGIAS_DELETE_CUSTOMERS_INPUT = {
  /**
   * Customer Ids
   * @description List of customer IDs to delete
   */
  customer_ids?: number[];
};

/**
 * Type of GORGIAS's GORGIAS_DELETE_CUSTOMERS tool output.
 */
type GORGIAS_DELETE_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The deletion operation result
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
 * Type of GORGIAS's GORGIAS_DELETE_CUSTOMER_FIELD_VALUE tool input.
 */
type GORGIAS_DELETE_CUSTOMER_FIELD_VALUE_INPUT = {
  /**
   * Customer Id
   * @description The ID of the customer
   */
  customer_id?: number;
  /**
   * Field Id
   * @description The ID of the custom field
   */
  field_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_DELETE_CUSTOMER_FIELD_VALUE tool output.
 */
type GORGIAS_DELETE_CUSTOMER_FIELD_VALUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The deletion operation result
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
 * Type of GORGIAS's GORGIAS_DELETE_TEAM tool input.
 */
type GORGIAS_DELETE_TEAM_INPUT = {
  /**
   * Team Id
   * @description The ID of the team to delete
   */
  team_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_DELETE_TEAM tool output.
 */
type GORGIAS_DELETE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The deletion operation result
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
 * Type of GORGIAS's GORGIAS_DELETE_TICKET tool input.
 */
type GORGIAS_DELETE_TICKET_INPUT = {
  /**
   * Ticket Id
   * @description The ID of the ticket to delete
   */
  ticket_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_DELETE_TICKET tool output.
 */
type GORGIAS_DELETE_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The deletion operation result
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
 * Type of GORGIAS's GORGIAS_DELETE_TICKET_FIELD_VALUE tool input.
 */
type GORGIAS_DELETE_TICKET_FIELD_VALUE_INPUT = {
  /**
   * Field Id
   * @description The ID of the custom field
   */
  field_id?: number;
  /**
   * Ticket Id
   * @description The ID of the ticket
   */
  ticket_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_DELETE_TICKET_FIELD_VALUE tool output.
 */
type GORGIAS_DELETE_TICKET_FIELD_VALUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The deletion operation result
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
 * Type of GORGIAS's GORGIAS_GET_ACCOUNT tool input.
 */
type GORGIAS_GET_ACCOUNT_INPUT = object;

/**
 * Type of GORGIAS's GORGIAS_GET_ACCOUNT tool output.
 */
type GORGIAS_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full account information response data
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
 * Type of GORGIAS's GORGIAS_GET_CUSTOMER tool input.
 */
type GORGIAS_GET_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description The ID of the customer to retrieve
   */
  customer_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_GET_CUSTOMER tool output.
 */
type GORGIAS_GET_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The customer data
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
 * Type of GORGIAS's GORGIAS_GET_EVENT tool input.
 */
type GORGIAS_GET_EVENT_INPUT = {
  /**
   * Event Id
   * @description The ID of the event to retrieve
   */
  event_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_GET_EVENT tool output.
 */
type GORGIAS_GET_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The event data
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
 * Type of GORGIAS's GORGIAS_GET_TEAM tool input.
 */
type GORGIAS_GET_TEAM_INPUT = {
  /**
   * Team Id
   * @description The ID of the team to retrieve
   */
  team_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_GET_TEAM tool output.
 */
type GORGIAS_GET_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The team data
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
 * Type of GORGIAS's GORGIAS_GET_TICKET tool input.
 */
type GORGIAS_GET_TICKET_INPUT = {
  /**
   * Ticket Id
   * @description The ID of the ticket to retrieve
   */
  ticket_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_GET_TICKET tool output.
 */
type GORGIAS_GET_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The ticket data
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
 * Type of GORGIAS's GORGIAS_LIST_ACCOUNT_SETTINGS tool input.
 */
type GORGIAS_LIST_ACCOUNT_SETTINGS_INPUT = {
  /**
   * Limit
   * @description Number of settings to return (default: 20, max: 100)
   */
  limit?: number;
  /**
   * Offset
   * @description Offset for pagination
   */
  offset?: number;
};

/**
 * Type of GORGIAS's GORGIAS_LIST_ACCOUNT_SETTINGS tool output.
 */
type GORGIAS_LIST_ACCOUNT_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The list of account settings and pagination information
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
 * Type of GORGIAS's GORGIAS_LIST_CUSTOMERS tool input.
 */
type GORGIAS_LIST_CUSTOMERS_INPUT = {
  /**
   * Created From
   * @description Filter by creation date (ISO format)
   */
  created_from?: string;
  /**
   * Created To
   * @description Filter by creation date (ISO format)
   */
  created_to?: string;
  /**
   * Email
   * @description Filter by customer email
   */
  email?: string;
  /**
   * External Id
   * @description Filter by external ID
   */
  external_id?: string;
  /**
   * Limit
   * @description Number of customers to return (default: 20, max: 100)
   */
  limit?: number;
  /**
   * Name
   * @description Filter by customer name
   */
  name?: string;
  /**
   * Offset
   * @description Offset for pagination
   */
  offset?: number;
  /**
   * Order By
   * @description Field to order by (e.g., 'created_datetime')
   */
  order_by?: string;
  /**
   * Order Dir
   * @description Order direction ('asc' or 'desc')
   */
  order_dir?: string;
};

/**
 * Type of GORGIAS's GORGIAS_LIST_CUSTOMERS tool output.
 */
type GORGIAS_LIST_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The list of customers and pagination information
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
 * Type of GORGIAS's GORGIAS_LIST_CUSTOMER_FIELD_VALUES tool input.
 */
type GORGIAS_LIST_CUSTOMER_FIELD_VALUES_INPUT = {
  /**
   * Customer Id
   * @description The ID of the customer
   */
  customer_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_LIST_CUSTOMER_FIELD_VALUES tool output.
 */
type GORGIAS_LIST_CUSTOMER_FIELD_VALUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The list of customer field values
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
 * Type of GORGIAS's GORGIAS_LIST_EVENTS tool input.
 */
type GORGIAS_LIST_EVENTS_INPUT = {
  /**
   * Context
   * @description Filter by context UUID
   */
  context?: string;
  /**
   * Created From
   * @description Filter by creation date (ISO format)
   */
  created_from?: string;
  /**
   * Created To
   * @description Filter by creation date (ISO format)
   */
  created_to?: string;
  /**
   * Limit
   * @description Number of events to return ( max: 100)
   */
  limit?: number;
  /**
   * Object Id
   * @description Filter by object ID
   */
  object_id?: number;
  /**
   * Object Type
   * @description Filter by object type
   */
  object_type?: string;
  /**
   * Offset
   * @description Offset for pagination
   */
  offset?: number;
  /**
   * Type
   * @description Filter by event type
   */
  type?: string;
  /**
   * User Id
   * @description Filter by user ID
   */
  user_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_LIST_EVENTS tool output.
 */
type GORGIAS_LIST_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response including events list and metadata
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
 * Type of GORGIAS's GORGIAS_LIST_TEAMS tool input.
 */
type GORGIAS_LIST_TEAMS_INPUT = object;

/**
 * Type of GORGIAS's GORGIAS_LIST_TEAMS tool output.
 */
type GORGIAS_LIST_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The full response including teams list and metadata
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
 * Type of GORGIAS's GORGIAS_LIST_TICKETS tool input.
 */
type GORGIAS_LIST_TICKETS_INPUT = {
  /**
   * Assignee Team Id
   * @description Filter by assigned team ID
   */
  assignee_team_id?: number;
  /**
   * Assignee User Id
   * @description Filter by assigned user ID
   */
  assignee_user_id?: number;
  /**
   * Channel
   * @description Filter by ticket channel
   */
  channel?: string;
  /**
   * Created From
   * @description Filter by creation date (ISO format)
   */
  created_from?: string;
  /**
   * Created To
   * @description Filter by creation date (ISO format)
   */
  created_to?: string;
  /**
   * Customer Id
   * @description Filter by customer ID
   */
  customer_id?: number;
  /**
   * External Id
   * @description Filter by external ID
   */
  external_id?: string;
  /**
   * Language
   * @description Filter by language
   */
  language?: string;
  /**
   * Limit
   * @description Number of tickets to return (default: 20, max: 100)
   */
  limit?: number;
  /**
   * Offset
   * @description Offset for pagination
   */
  offset?: number;
  /**
   * Order By
   * @description Field to order by (e.g., 'created_datetime')
   */
  order_by?: string;
  /**
   * Order Dir
   * @description Order direction ('asc' or 'desc')
   */
  order_dir?: string;
  /**
   * Priority
   * @description Filter by ticket priority
   */
  priority?: string;
  /**
   * Status
   * @description Filter by ticket status
   */
  status?: string;
  /**
   * Tag Id
   * @description Filter by tag ID
   */
  tag_id?: number;
  /**
   * Updated From
   * @description Filter by update date (ISO format)
   */
  updated_from?: string;
  /**
   * Updated To
   * @description Filter by update date (ISO format)
   */
  updated_to?: string;
};

/**
 * Type of GORGIAS's GORGIAS_LIST_TICKETS tool output.
 */
type GORGIAS_LIST_TICKETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The response data containing the list of tickets
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
 * Type of GORGIAS's GORGIAS_LIST_TICKET_FIELD_VALUES tool input.
 */
type GORGIAS_LIST_TICKET_FIELD_VALUES_INPUT = {
  /**
   * Ticket Id
   * @description The ID of the ticket
   */
  ticket_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_LIST_TICKET_FIELD_VALUES tool output.
 */
type GORGIAS_LIST_TICKET_FIELD_VALUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The list of ticket field values
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
 * Type of GORGIAS's GORGIAS_LIST_TICKET_TAGS tool input.
 */
type GORGIAS_LIST_TICKET_TAGS_INPUT = {
  /**
   * Ticket Id
   * @description The ID of the ticket
   */
  ticket_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_LIST_TICKET_TAGS tool output.
 */
type GORGIAS_LIST_TICKET_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The list of ticket tags
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
 * Type of GORGIAS's GORGIAS_MERGE_CUSTOMERS tool input.
 */
type GORGIAS_MERGE_CUSTOMERS_INPUT = {
  /**
   * Source Customer Id
   * @description The ID of the source customer (will be merged into the target)
   */
  source_customer_id?: number;
  /**
   * Target Customer Id
   * @description The ID of the target customer (will remain after merge)
   */
  target_customer_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_MERGE_CUSTOMERS tool output.
 */
type GORGIAS_MERGE_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The merge operation result
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
 * Type of GORGIAS's GORGIAS_REMOVE_TICKET_TAGS tool input.
 */
type GORGIAS_REMOVE_TICKET_TAGS_INPUT = {
  /**
   * Tag Ids
   * @description List of tag IDs to remove from the ticket
   */
  tag_ids?: number[];
  /**
   * Ticket Id
   * @description The ID of the ticket
   */
  ticket_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_REMOVE_TICKET_TAGS tool output.
 */
type GORGIAS_REMOVE_TICKET_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated ticket tags
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
 * Type of GORGIAS's GORGIAS_SET_CUSTOMER_DATA tool input.
 */
type GORGIAS_SET_CUSTOMER_DATA_INPUT = {
  /**
   * Customer Id
   * @description The ID of the customer
   */
  customer_id?: number;
  /**
   * Data
   * @description The complete data object to set for the customer
   */
  data?: {
      [key: string]: unknown;
  };
};

/**
 * Type of GORGIAS's GORGIAS_SET_CUSTOMER_DATA tool output.
 */
type GORGIAS_SET_CUSTOMER_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated customer data
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
 * Type of GORGIAS's GORGIAS_SET_TICKET_TAGS tool input.
 */
type GORGIAS_SET_TICKET_TAGS_INPUT = {
  /**
   * Tag Ids
   * @description List of tag IDs to set for the ticket
   */
  tag_ids?: number[];
  /**
   * Ticket Id
   * @description The ID of the ticket
   */
  ticket_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_SET_TICKET_TAGS tool output.
 */
type GORGIAS_SET_TICKET_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated ticket tags
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
 * Type of GORGIAS's GORGIAS_UPDATE_ACCOUNT_SETTING tool input.
 */
type GORGIAS_UPDATE_ACCOUNT_SETTING_INPUT = {
  /**
   * Description
   * @description Updated description of the setting
   */
  description?: string;
  /**
   * Setting Id
   * @description The ID of the setting to update
   */
  setting_id?: number;
  /**
   * Value
   * @description The new value of the setting
   */
  value?: unknown;
};

/**
 * Type of GORGIAS's GORGIAS_UPDATE_ACCOUNT_SETTING tool output.
 */
type GORGIAS_UPDATE_ACCOUNT_SETTING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated setting data
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
 * Type of GORGIAS's GORGIAS_UPDATE_CUSTOMER tool input.
 */
type GORGIAS_UPDATE_CUSTOMER_INPUT = {
  /**
   * Address
   * @description The customer's address information
   */
  address?: {
      [key: string]: unknown;
  };
  /**
   * Channels
   * @description The customer's communication channels
   */
  channels?: {
      /**
       * Preferred
       * @description Whether this is the preferred channel
       * @default false
       */
      preferred: boolean;
      /**
       * Type
       * @description The channel type (email, phone, etc.)
       */
      type: string;
      /**
       * Value
       * @description The channel value (email address, phone number, etc.)
       */
      value: string;
  }[];
  /**
   * Customer Id
   * @description The ID of the customer to update
   */
  customer_id?: number;
  /**
   * Data
   * @description Additional customer data
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Email
   * @description The customer's email address
   */
  email?: string;
  /**
   * External Id
   * @description External identifier for the customer
   */
  external_id?: string;
  /**
   * Name
   * @description The customer's full name
   */
  name?: string;
};

/**
 * Type of GORGIAS's GORGIAS_UPDATE_CUSTOMER tool output.
 */
type GORGIAS_UPDATE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated customer data
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
 * Type of GORGIAS's GORGIAS_UPDATE_TEAM tool input.
 */
type GORGIAS_UPDATE_TEAM_INPUT = {
  /**
   * Decoration
   * @description Object describing how the team appears on the webpage
   */
  decoration?: {
      /**
       * Emoji
       * @description Emoji that shows before the team's name
       */
      emoji?: string;
  };
  /**
   * Description
   * @description Longer description of the team
   */
  description?: string;
  /**
   * Members
   * @description The list of users within the team
   */
  members?: number[];
  /**
   * Name
   * @description Name of the team
   */
  name?: string;
  /**
   * Team Id
   * @description The ID of the team to update
   */
  team_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_UPDATE_TEAM tool output.
 */
type GORGIAS_UPDATE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated team data
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
 * Type of GORGIAS's GORGIAS_UPDATE_TICKET tool input.
 */
type GORGIAS_UPDATE_TICKET_INPUT = {
  /**
   * Assignee Team Id
   * @description ID of the team to assign the ticket to
   */
  assignee_team_id?: number;
  /**
   * Assignee User Id
   * @description ID of the user to assign the ticket to
   */
  assignee_user_id?: number;
  /**
   * Customer Id
   * @description The ID of the customer for this ticket
   */
  customer_id?: number;
  /**
   * External Id
   * @description External identifier for the ticket
   */
  external_id?: string;
  /**
   * Language
   * @description The language of the ticket
   */
  language?: string;
  /**
   * Meta
   * @description Extra metadata about the ticket
   */
  meta?: {
      [key: string]: unknown;
  };
  /**
   * Priority
   * @description The priority of the ticket
   */
  priority?: string;
  /**
   * Status
   * @description The status of the ticket
   */
  status?: string;
  /**
   * Subject
   * @description The subject of the ticket
   */
  subject?: string;
  /**
   * Ticket Id
   * @description The ID of the ticket to update
   */
  ticket_id?: number;
};

/**
 * Type of GORGIAS's GORGIAS_UPDATE_TICKET tool output.
 */
type GORGIAS_UPDATE_TICKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated ticket data
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
 * Type map of all available tool input types for toolkit "GORGIAS".
 */
export type GORGIAS_TOOL_INPUTS = {
  ADD_TICKET_TAGS: GORGIAS_ADD_TICKET_TAGS_INPUT
  CREATE_ACCOUNT_SETTING: GORGIAS_CREATE_ACCOUNT_SETTING_INPUT
  CREATE_CUSTOMER: GORGIAS_CREATE_CUSTOMER_INPUT
  CREATE_TEAM: GORGIAS_CREATE_TEAM_INPUT
  CREATE_TICKET: GORGIAS_CREATE_TICKET_INPUT
  DELETE_CUSTOMER: GORGIAS_DELETE_CUSTOMER_INPUT
  DELETE_CUSTOMERS: GORGIAS_DELETE_CUSTOMERS_INPUT
  DELETE_CUSTOMER_FIELD_VALUE: GORGIAS_DELETE_CUSTOMER_FIELD_VALUE_INPUT
  DELETE_TEAM: GORGIAS_DELETE_TEAM_INPUT
  DELETE_TICKET: GORGIAS_DELETE_TICKET_INPUT
  DELETE_TICKET_FIELD_VALUE: GORGIAS_DELETE_TICKET_FIELD_VALUE_INPUT
  GET_ACCOUNT: GORGIAS_GET_ACCOUNT_INPUT
  GET_CUSTOMER: GORGIAS_GET_CUSTOMER_INPUT
  GET_EVENT: GORGIAS_GET_EVENT_INPUT
  GET_TEAM: GORGIAS_GET_TEAM_INPUT
  GET_TICKET: GORGIAS_GET_TICKET_INPUT
  LIST_ACCOUNT_SETTINGS: GORGIAS_LIST_ACCOUNT_SETTINGS_INPUT
  LIST_CUSTOMERS: GORGIAS_LIST_CUSTOMERS_INPUT
  LIST_CUSTOMER_FIELD_VALUES: GORGIAS_LIST_CUSTOMER_FIELD_VALUES_INPUT
  LIST_EVENTS: GORGIAS_LIST_EVENTS_INPUT
  LIST_TEAMS: GORGIAS_LIST_TEAMS_INPUT
  LIST_TICKETS: GORGIAS_LIST_TICKETS_INPUT
  LIST_TICKET_FIELD_VALUES: GORGIAS_LIST_TICKET_FIELD_VALUES_INPUT
  LIST_TICKET_TAGS: GORGIAS_LIST_TICKET_TAGS_INPUT
  MERGE_CUSTOMERS: GORGIAS_MERGE_CUSTOMERS_INPUT
  REMOVE_TICKET_TAGS: GORGIAS_REMOVE_TICKET_TAGS_INPUT
  SET_CUSTOMER_DATA: GORGIAS_SET_CUSTOMER_DATA_INPUT
  SET_TICKET_TAGS: GORGIAS_SET_TICKET_TAGS_INPUT
  UPDATE_ACCOUNT_SETTING: GORGIAS_UPDATE_ACCOUNT_SETTING_INPUT
  UPDATE_CUSTOMER: GORGIAS_UPDATE_CUSTOMER_INPUT
  UPDATE_TEAM: GORGIAS_UPDATE_TEAM_INPUT
  UPDATE_TICKET: GORGIAS_UPDATE_TICKET_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GORGIAS".
 */
export type GORGIAS_TOOL_OUTPUTS = {
  ADD_TICKET_TAGS: GORGIAS_ADD_TICKET_TAGS_OUTPUT
  CREATE_ACCOUNT_SETTING: GORGIAS_CREATE_ACCOUNT_SETTING_OUTPUT
  CREATE_CUSTOMER: GORGIAS_CREATE_CUSTOMER_OUTPUT
  CREATE_TEAM: GORGIAS_CREATE_TEAM_OUTPUT
  CREATE_TICKET: GORGIAS_CREATE_TICKET_OUTPUT
  DELETE_CUSTOMER: GORGIAS_DELETE_CUSTOMER_OUTPUT
  DELETE_CUSTOMERS: GORGIAS_DELETE_CUSTOMERS_OUTPUT
  DELETE_CUSTOMER_FIELD_VALUE: GORGIAS_DELETE_CUSTOMER_FIELD_VALUE_OUTPUT
  DELETE_TEAM: GORGIAS_DELETE_TEAM_OUTPUT
  DELETE_TICKET: GORGIAS_DELETE_TICKET_OUTPUT
  DELETE_TICKET_FIELD_VALUE: GORGIAS_DELETE_TICKET_FIELD_VALUE_OUTPUT
  GET_ACCOUNT: GORGIAS_GET_ACCOUNT_OUTPUT
  GET_CUSTOMER: GORGIAS_GET_CUSTOMER_OUTPUT
  GET_EVENT: GORGIAS_GET_EVENT_OUTPUT
  GET_TEAM: GORGIAS_GET_TEAM_OUTPUT
  GET_TICKET: GORGIAS_GET_TICKET_OUTPUT
  LIST_ACCOUNT_SETTINGS: GORGIAS_LIST_ACCOUNT_SETTINGS_OUTPUT
  LIST_CUSTOMERS: GORGIAS_LIST_CUSTOMERS_OUTPUT
  LIST_CUSTOMER_FIELD_VALUES: GORGIAS_LIST_CUSTOMER_FIELD_VALUES_OUTPUT
  LIST_EVENTS: GORGIAS_LIST_EVENTS_OUTPUT
  LIST_TEAMS: GORGIAS_LIST_TEAMS_OUTPUT
  LIST_TICKETS: GORGIAS_LIST_TICKETS_OUTPUT
  LIST_TICKET_FIELD_VALUES: GORGIAS_LIST_TICKET_FIELD_VALUES_OUTPUT
  LIST_TICKET_TAGS: GORGIAS_LIST_TICKET_TAGS_OUTPUT
  MERGE_CUSTOMERS: GORGIAS_MERGE_CUSTOMERS_OUTPUT
  REMOVE_TICKET_TAGS: GORGIAS_REMOVE_TICKET_TAGS_OUTPUT
  SET_CUSTOMER_DATA: GORGIAS_SET_CUSTOMER_DATA_OUTPUT
  SET_TICKET_TAGS: GORGIAS_SET_TICKET_TAGS_OUTPUT
  UPDATE_ACCOUNT_SETTING: GORGIAS_UPDATE_ACCOUNT_SETTING_OUTPUT
  UPDATE_CUSTOMER: GORGIAS_UPDATE_CUSTOMER_OUTPUT
  UPDATE_TEAM: GORGIAS_UPDATE_TEAM_OUTPUT
  UPDATE_TICKET: GORGIAS_UPDATE_TICKET_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GORGIAS toolkit.
 */
export const GORGIAS = {
  slug: "gorgias",
  tools: {
    /**
     * Adds tags to a ticket in gorgias.
     */
    ADD_TICKET_TAGS: "GORGIAS_ADD_TICKET_TAGS",
    /**
     * Creates a new account setting in gorgias.
     */
    CREATE_ACCOUNT_SETTING: "GORGIAS_CREATE_ACCOUNT_SETTING",
    /**
     * Creates a new customer in gorgias.
     */
    CREATE_CUSTOMER: "GORGIAS_CREATE_CUSTOMER",
    /**
     * Creates a new team in gorgias.
     */
    CREATE_TEAM: "GORGIAS_CREATE_TEAM",
    /**
     * Creates a new ticket in gorgias.
     */
    CREATE_TICKET: "GORGIAS_CREATE_TICKET",
    /**
     * Deletes a specific customer from gorgias.
     */
    DELETE_CUSTOMER: "GORGIAS_DELETE_CUSTOMER",
    /**
     * Deletes multiple customers from gorgias.
     */
    DELETE_CUSTOMERS: "GORGIAS_DELETE_CUSTOMERS",
    /**
     * Deletes a specific field value for a customer in gorgias.
     */
    DELETE_CUSTOMER_FIELD_VALUE: "GORGIAS_DELETE_CUSTOMER_FIELD_VALUE",
    /**
     * Deletes a specific team from gorgias.
     */
    DELETE_TEAM: "GORGIAS_DELETE_TEAM",
    /**
     * Deletes a specific ticket from gorgias.
     */
    DELETE_TICKET: "GORGIAS_DELETE_TICKET",
    /**
     * Deletes a specific field value for a ticket in gorgias.
     */
    DELETE_TICKET_FIELD_VALUE: "GORGIAS_DELETE_TICKET_FIELD_VALUE",
    /**
     * Retrieves your gorgias account information.
     */
    GET_ACCOUNT: "GORGIAS_GET_ACCOUNT",
    /**
     * Retrieves a specific customer from gorgias.
     */
    GET_CUSTOMER: "GORGIAS_GET_CUSTOMER",
    /**
     * Retrieves a specific event from gorgias.
     */
    GET_EVENT: "GORGIAS_GET_EVENT",
    /**
     * Retrieves a specific team from gorgias.
     */
    GET_TEAM: "GORGIAS_GET_TEAM",
    /**
     * Retrieves a specific ticket from gorgias.
     */
    GET_TICKET: "GORGIAS_GET_TICKET",
    /**
     * Lists all account settings in gorgias.
     */
    LIST_ACCOUNT_SETTINGS: "GORGIAS_LIST_ACCOUNT_SETTINGS",
    /**
     * Lists customers in gorgias with various filtering options.
     */
    LIST_CUSTOMERS: "GORGIAS_LIST_CUSTOMERS",
    /**
     * Lists all field values for a customer in gorgias.
     */
    LIST_CUSTOMER_FIELD_VALUES: "GORGIAS_LIST_CUSTOMER_FIELD_VALUES",
    /**
     * Lists events in gorgias with various filtering options.
     */
    LIST_EVENTS: "GORGIAS_LIST_EVENTS",
    /**
     * Lists teams in gorgias.
     */
    LIST_TEAMS: "GORGIAS_LIST_TEAMS",
    /**
     * Lists tickets in gorgias with various filtering options.
     */
    LIST_TICKETS: "GORGIAS_LIST_TICKETS",
    /**
     * Lists all field values for a ticket in gorgias.
     */
    LIST_TICKET_FIELD_VALUES: "GORGIAS_LIST_TICKET_FIELD_VALUES",
    /**
     * Lists all tags for a ticket in gorgias.
     */
    LIST_TICKET_TAGS: "GORGIAS_LIST_TICKET_TAGS",
    /**
     * Merges two customers in gorgias, combining their data and history.
     */
    MERGE_CUSTOMERS: "GORGIAS_MERGE_CUSTOMERS",
    /**
     * Removes tags from a ticket in gorgias.
     */
    REMOVE_TICKET_TAGS: "GORGIAS_REMOVE_TICKET_TAGS",
    /**
     * Sets the complete data object for a customer in gorgias.
     */
    SET_CUSTOMER_DATA: "GORGIAS_SET_CUSTOMER_DATA",
    /**
     * Sets the complete list of tags for a ticket in gorgias.
     */
    SET_TICKET_TAGS: "GORGIAS_SET_TICKET_TAGS",
    /**
     * Updates an existing account setting in gorgias.
     */
    UPDATE_ACCOUNT_SETTING: "GORGIAS_UPDATE_ACCOUNT_SETTING",
    /**
     * Updates an existing customer in gorgias.
     */
    UPDATE_CUSTOMER: "GORGIAS_UPDATE_CUSTOMER",
    /**
     * Updates an existing team in gorgias.
     */
    UPDATE_TEAM: "GORGIAS_UPDATE_TEAM",
    /**
     * Updates an existing ticket in gorgias.
     */
    UPDATE_TICKET: "GORGIAS_UPDATE_TICKET",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GORGIAS".
 */
export type GORGIAS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GORGIAS".
 */
export type GORGIAS_TRIGGER_EVENTS = {}
