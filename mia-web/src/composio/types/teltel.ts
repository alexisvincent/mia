// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TELTEL's TELTEL_GET_CALL_LIST tool input.
 */
type TELTEL_GET_CALL_LIST_INPUT = {
  /**
   * Direction
   * @description Filter by call direction
   * @default null
   * @enum {string|null}
   */
  direction: "inbound" | "outbound" | null;
  /**
   * From Datetime
   * @description Start datetime filter (ISO 8601)
   * @default null
   */
  from_datetime: string | null;
  /**
   * Limit
   * @description Number of results per page (max 100)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve
   * @default null
   */
  page: number | null;
  /**
   * Search
   * @description Search by phone number or contact name
   * @default null
   */
  search: string | null;
  /**
   * Sort Field
   * @description Sort by this field (e.g., start_time)
   * @default null
   */
  sort_field: string | null;
  /**
   * Sort Order
   * @description Sort order: asc or desc
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
  /**
   * Status
   * @description Filter by call status (e.g., completed, missed)
   * @default null
   */
  status: string | null;
  /**
   * To Datetime
   * @description End datetime filter (ISO 8601)
   * @default null
   */
  to_datetime: string | null;
};

/**
 * Type of TELTEL's TELTEL_GET_CALL_LIST tool output.
 */
type TELTEL_GET_CALL_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calls
       * @description List of call records
       */
      calls: {
          /**
           * Direction
           * @description Call direction
           * @enum {string}
           */
          direction: "inbound" | "outbound";
          /**
           * Duration
           * @description Duration of the call in seconds
           */
          duration: number;
          /**
           * End Time
           * @description Call end time in ISO 8601 format
           */
          end_time: string;
          /**
           * From Number
           * @description Caller phone number
           */
          from_number: string;
          /**
           * Id
           * @description Unique call ID
           */
          id: string;
          /**
           * Recording Url
           * @description URL to the recording file, if available
           * @default null
           */
          recording_url: string | null;
          /**
           * Start Time
           * @description Call start time in ISO 8601 format
           */
          start_time: string;
          /**
           * Status
           * @description Call status (e.g., completed, missed)
           */
          status: string;
          /**
           * To Number
           * @description Receiver phone number
           */
          to_number: string;
      }[];
      /**
       * Limit
       * @description Number of records returned in this page
       */
      limit: number;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Total
       * @description Total number of call records available
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TELTEL's TELTEL_GET_SMS_LIST tool input.
 */
type TELTEL_GET_SMS_LIST_INPUT = {
  /**
   * End Time
   * @description Filter messages sent/received before this ISO8601 timestamp
   * @default null
   */
  end_time: string | null;
  /**
   * From Number
   * @description Filter by sender phone number (E.164 format)
   * @default null
   */
  from_number: string | null;
  /**
   * Page
   * @description Page number for pagination (1-indexed)
   * @default null
   */
  page: number | null;
  /**
   * Size
   * @description Number of items per page (max 100)
   * @default null
   */
  size: number | null;
  /**
   * Start Time
   * @description Filter messages sent/received after this ISO8601 timestamp
   * @default null
   */
  start_time: string | null;
  /**
   * Status
   * @description Filter by message status
   * @default null
   * @enum {string|null}
   */
  status: "sent" | "delivered" | "failed" | null;
  /**
   * To
   * @description Filter by recipient phone number (E.164 format)
   * @default null
   */
  to: string | null;
};

/**
 * Type of TELTEL's TELTEL_GET_SMS_LIST tool output.
 */
type TELTEL_GET_SMS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * List
       * @description Array of SMS message objects
       */
      list: {
          /**
           * Content
           * @description SMS message content
           */
          content: string;
          /**
           * From Number
           * @description Sender phone number
           */
          from_number: string;
          /**
           * Id
           * @description Unique identifier of the SMS message
           */
          id: string;
          /**
           * Status
           * @description Delivery status of the message
           */
          status: string;
          /**
           * Time
           * @description Timestamp of the message in ISO8601 format
           */
          time: string;
          /**
           * To Number
           * @description Recipient phone number
           */
          to_number: string;
      }[];
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Size
       * @description Number of items returned per page
       */
      size: number;
      /**
       * Total
       * @description Total count of matching SMS messages
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TELTEL's TELTEL_GET_USERS_LIST tool input.
 */
type TELTEL_GET_USERS_LIST_INPUT = {
  /**
   * Limit
   * @description Number of users to fetch, between 1 and 100. Defaults to 30 if not provided.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset for pagination, must be >= 0. Defaults to 0 if not provided.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of TELTEL's TELTEL_GET_USERS_LIST tool output.
 */
type TELTEL_GET_USERS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Total
       * @description Total number of users.
       */
      total: number;
      /**
       * Users
       * @description List of user objects.
       */
      users: {
          /**
           * Crm User Id
           * @description Linked CRM user ID, if mapped.
           * @default null
           */
          crmUserId: string | null;
          /**
           * Email
           * @description User's email address.
           */
          email: string;
          /**
           * Id
           * @description Unique user identifier.
           */
          id: string;
          /**
           * Name
           * @description User's name.
           */
          name: string;
          /**
           * Phone
           * @description User's phone number, if available.
           * @default null
           */
          phone: string | null;
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
 * Type of TELTEL's TELTEL_RECEIVE_INBOUND_SMS tool input.
 */
type TELTEL_RECEIVE_INBOUND_SMS_INPUT = {
  /**
   * Encoding
   * @description Type of message encoding (e.g., utf-8)
   * @default null
   */
  encoding: string | null;
  /**
   * From Number
   * @description Sender's phone number who sent the SMS
   */
  from_number?: string;
  /**
   * Message
   * @description Content of the received SMS message
   */
  message?: string;
  /**
   * Msgid
   * @description Unique message identifier provided by Teltel
   */
  msgid?: string;
  /**
   * Time
   * @description Timestamp of when the SMS was received (ISO 8601 format)
   */
  time?: string;
  /**
   * To
   * @description Destination number that received the SMS
   */
  to?: string;
};

/**
 * Type of TELTEL's TELTEL_RECEIVE_INBOUND_SMS tool output.
 */
type TELTEL_RECEIVE_INBOUND_SMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Status of the webhook processing (e.g., 'success')
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
 * Type map of all available tool input types for toolkit "TELTEL".
 */
export type TELTEL_TOOL_INPUTS = {
  GET_CALL_LIST: TELTEL_GET_CALL_LIST_INPUT
  GET_SMS_LIST: TELTEL_GET_SMS_LIST_INPUT
  GET_USERS_LIST: TELTEL_GET_USERS_LIST_INPUT
  RECEIVE_INBOUND_SMS: TELTEL_RECEIVE_INBOUND_SMS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TELTEL".
 */
export type TELTEL_TOOL_OUTPUTS = {
  GET_CALL_LIST: TELTEL_GET_CALL_LIST_OUTPUT
  GET_SMS_LIST: TELTEL_GET_SMS_LIST_OUTPUT
  GET_USERS_LIST: TELTEL_GET_USERS_LIST_OUTPUT
  RECEIVE_INBOUND_SMS: TELTEL_RECEIVE_INBOUND_SMS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TELTEL toolkit.
 */
export const TELTEL = {
  slug: "teltel",
  tools: {
    /**
     * Tool to retrieve a list of calls with details (duration, time, status). use when you need to filter and page through call records.
     */
    GET_CALL_LIST: "TELTEL_GET_CALL_LIST",
    /**
     * Tool to retrieve a list of sent and received sms messages. use when you need to page or filter sms logs by sender, recipient, status, or time range.
     */
    GET_SMS_LIST: "TELTEL_GET_SMS_LIST",
    /**
     * Tool to retrieve a list of users from your teltel account. use when you need to page through or synchronize user records.
     */
    GET_USERS_LIST: "TELTEL_GET_USERS_LIST",
    /**
     * Tool to receive inbound sms via webhook. use when handling incoming sms messages from teltel.
     */
    RECEIVE_INBOUND_SMS: "TELTEL_RECEIVE_INBOUND_SMS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TELTEL".
 */
export type TELTEL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TELTEL".
 */
export type TELTEL_TRIGGER_EVENTS = {}
