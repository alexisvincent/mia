// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MSG91's MSG91_CREATE_USER_EVENTS tool input.
 */
type MSG91_CREATE_USER_EVENTS_INPUT = {
  /**
   * Events
   * @description List of user events to record
   */
  events?: {
      /**
       * Name
       * @description Name of the event (e.g., 'login')
       */
      name: string;
      /**
       * Properties
       * @description Custom properties for the event as key-value pairs
       * @default null
       */
      properties: {
          [key: string]: string;
      } | null;
      /**
       * Timestamp
       * @description ISO8601 formatted event timestamp. Defaults to server time if omitted
       * @default null
       */
      timestamp: string | null;
  }[];
  /**
   * Identifier
   * @description Unique identifier for the user (email or phone)
   */
  identifier?: string;
};

/**
 * Type of MSG91's MSG91_CREATE_USER_EVENTS tool output.
 */
type MSG91_CREATE_USER_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Additional data returned by the API
   */
  data?: {
      [key: string]: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Response message with details
   */
  message?: string;
  /**
   * Status
   * @description API call status ('success' or 'error')
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MSG91's MSG91_GET_EVENT_TYPES tool input.
 */
type MSG91_GET_EVENT_TYPES_INPUT = object;

/**
 * Type of MSG91's MSG91_GET_EVENT_TYPES tool output.
 */
type MSG91_GET_EVENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description List of event types retrieved from the phonebook.
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description ISO 8601 timestamp when the event type was created.
       */
      createdAt: unknown;
      /**
       * Description
       * @description Description of the event type.
       */
      description: string;
      /**
       * Event Type Id
       * @description Unique identifier of the event type.
       */
      event_type_id: string;
      /**
       * Name
       * @description Name of the event type.
       */
      name: string;
      /**
       * Updated At
       * Format: date-time
       * @description ISO 8601 timestamp when the event type was last updated.
       */
      updatedAt: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Informational message from the API.
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Status of the API call, e.g., 'success' or 'error'.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MSG91's MSG91_GET_FAILED_EVENTS tool input.
 */
type MSG91_GET_FAILED_EVENTS_INPUT = {
  /**
   * Campaign Id
   * @description The unique ID of the campaign for which to fetch failed events.
   */
  campaign_id?: string;
  /**
   * End Date
   * @description End date (YYYY-MM-DD) to filter failed events.
   * @default null
   */
  end_date: string | null;
  /**
   * Limit
   * @description Number of records per page. Must be >=1.
   * @default 10
   */
  limit: number;
  /**
   * Page
   * @description Page number for paginated response. Must be >=1.
   * @default 1
   */
  page: number;
  /**
   * Start Date
   * @description Start date (YYYY-MM-DD) to filter failed events.
   * @default null
   */
  start_date: string | null;
};

/**
 * Type of MSG91's MSG91_GET_FAILED_EVENTS tool output.
 */
type MSG91_GET_FAILED_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Payload containing failed events and pagination info.
   */
  data?: {
      /**
       * Failed Events
       * @description List of failed event objects.
       */
      failedEvents: {
          /**
           * Event Id
           * @description Unique identifier for the failed event.
           */
          eventId: string;
          /**
           * Reason
           * @description Reason for failure.
           */
          reason: string;
          /**
           * Recipient
           * @description Recipient identity (email, number, etc.).
           */
          recipient: string;
          /**
           * Timestamp
           * @description Failure occurrence time in ISO8601 format.
           */
          timestamp: string;
      }[];
      /**
       * Limit
       * @description Number of records per page.
       */
      limit: number;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Total
       * @description Total number of failed events.
       */
      total: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Additional information about the response.
   */
  message?: string;
  /**
   * Status
   * @description Status of the request (e.g., 'success', 'error').
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MSG91's MSG91_LIST_CAMPAIGNS tool input.
 */
type MSG91_LIST_CAMPAIGNS_INPUT = {
  /**
   * Limit
   * @description Number of campaigns per page.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
};

/**
 * Type of MSG91's MSG91_LIST_CAMPAIGNS tool output.
 */
type MSG91_LIST_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Paginated campaign list data.
   */
  data?: {
      /**
       * Campaigns
       * @description List of campaigns.
       */
      campaigns: {
          /**
           * Campaign Id
           * @description Unique identifier of the campaign.
           */
          campaign_id: number;
          /**
           * Name
           * @description Name of the campaign.
           */
          name: string;
      }[];
      /**
       * Current Page
       * @description Current page number.
       */
      current_page: number;
      /**
       * Per Page
       * @description Number of campaigns per page.
       */
      per_page: number;
      /**
       * Total
       * @description Total number of campaigns.
       */
      total: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Informational message returned by the API.
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description API call status, e.g., 'success' or 'error'.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MSG91's MSG91_SEND_SMS tool input.
 */
type MSG91_SEND_SMS_INPUT = {
  /**
   * Country
   * @description Country code, e.g., '91' for India
   */
  country?: string;
  /**
   * Flash
   * @description 1 for flash SMS, 0 or omit for default
   * @default null
   */
  flash: number | null;
  /**
   * Route
   * @description Route for the SMS, e.g., '4' for transactional, '1' for promotional
   */
  route?: string;
  /**
   * Sender
   * @description Sender ID (max 6 chars for transactional, 11 for promotional)
   */
  sender?: string;
  /**
   * Sms
   * @description List of SMS objects to send
   */
  sms?: {
      /**
       * Message
       * @description SMS content to send
       */
      message: string;
      /**
       * To
       * @description List of recipient phone numbers in international format without '+'
       */
      to: string[];
  }[];
  /**
   * Unicode
   * @description 1 for unicode messages, 0 or omit for default
   * @default null
   */
  unicode: number | null;
};

/**
 * Type of MSG91's MSG91_SEND_SMS tool output.
 */
type MSG91_SEND_SMS_OUTPUT = {
  /**
   * Data
   * @description Mapping of recipient numbers to message IDs
   */
  data?: {
      [key: string]: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Status message from the API
   */
  message?: string;
  /**
   * Request Id
   * @description Unique reference ID for the request
   */
  request_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Type
   * @description Type of status (success or failure)
   */
  type?: string;
};

/**
 * Type map of all available tool input types for toolkit "MSG91".
 */
export type MSG91_TOOL_INPUTS = {
  CREATE_USER_EVENTS: MSG91_CREATE_USER_EVENTS_INPUT
  GET_EVENT_TYPES: MSG91_GET_EVENT_TYPES_INPUT
  GET_FAILED_EVENTS: MSG91_GET_FAILED_EVENTS_INPUT
  LIST_CAMPAIGNS: MSG91_LIST_CAMPAIGNS_INPUT
  SEND_SMS: MSG91_SEND_SMS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MSG91".
 */
export type MSG91_TOOL_OUTPUTS = {
  CREATE_USER_EVENTS: MSG91_CREATE_USER_EVENTS_OUTPUT
  GET_EVENT_TYPES: MSG91_GET_EVENT_TYPES_OUTPUT
  GET_FAILED_EVENTS: MSG91_GET_FAILED_EVENTS_OUTPUT
  LIST_CAMPAIGNS: MSG91_LIST_CAMPAIGNS_OUTPUT
  SEND_SMS: MSG91_SEND_SMS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MSG91 toolkit.
 */
export const MSG91 = {
  slug: "msg91",
  tools: {
    /**
     * Tool to create user events in msg91 segmento. use when you need to record user actions and behaviors.
     */
    CREATE_USER_EVENTS: "MSG91_CREATE_USER_EVENTS",
    /**
     * Tool to retrieve all available event types in segmento. use when you need to list recorded event types after authenticating.
     */
    GET_EVENT_TYPES: "MSG91_GET_EVENT_TYPES",
    /**
     * Tool to retrieve failed segmento events. use when needing to inspect validation failures for a campaign after execution.
     */
    GET_FAILED_EVENTS: "MSG91_GET_FAILED_EVENTS",
    /**
     * Tool to list all campaigns in segmento. use when you need to retrieve campaigns with pagination support.
     */
    LIST_CAMPAIGNS: "MSG91_LIST_CAMPAIGNS",
    /**
     * Tool to send sms messages. use when you need to dispatch one or multiple messages after gathering user details.
     */
    SEND_SMS: "MSG91_SEND_SMS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MSG91".
 */
export type MSG91_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MSG91".
 */
export type MSG91_TRIGGER_EVENTS = {}
