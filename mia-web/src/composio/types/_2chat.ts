// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of _2CHAT's _2CHAT_CREATE_CONTACT tool input.
 */
type _2CHAT_CREATE_CONTACT_INPUT = {
  /**
   * Contact Detail
   * @description A list of contact detail entries; at least one entry is required
   */
  contact_detail?: {
      /**
       * Type
       * @description Type of contact detail: E=email, A=address, PH=phone, WAPH=WhatsApp phone
       * @enum {string}
       */
      type: "E" | "A" | "PH" | "WAPH";
      /**
       * Value
       * @description Value of the contact detail. For phone numbers use international format; for email use a valid address
       */
      value: string;
  }[];
  /**
   * First Name
   * @description First name of the new contact
   */
  first_name?: string;
  /**
   * Last Name
   * @description Last name of the new contact
   * @default null
   */
  last_name: string | null;
  /**
   * Profile Pic Url
   * @description Publicly accessible URL of the contact's profile picture
   * @default null
   */
  profile_pic_url: string | null;
};

/**
 * Type of _2CHAT's _2CHAT_CREATE_CONTACT tool output.
 */
type _2CHAT_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact
       * @description The newly created contact object
       */
      contact: {
          /**
           * Channel Uuid
           * @description Channel UUID, if assigned
           * @default null
           */
          channel_uuid: string | null;
          /**
           * Details
           * @description List of detail entries for the contact
           */
          details: {
              /**
               * Created At
               * @description Creation timestamp (epoch seconds)
               */
              created_at: number;
              /**
               * Id
               * @description Unique ID of the detail entry
               */
              id: number;
              /**
               * Type
               * @description Type code of the detail entry
               * @enum {string}
               */
              type: "E" | "A" | "PH" | "WAPH";
              /**
               * Updated At
               * @description Last update timestamp (epoch seconds)
               */
              updated_at: number;
              /**
               * Value
               * @description Value of the detail entry
               */
              value: string;
          }[];
          /**
           * First Name
           * @description First name of the contact
           */
          first_name: string;
          /**
           * Last Name
           * @description Last name of the contact
           * @default null
           */
          last_name: string | null;
          /**
           * Profile Pic Url
           * @description URL of the contact's profile picture
           * @default null
           */
          profile_pic_url: string | null;
          /**
           * Uuid
           * @description Unique identifier of the contact
           */
          uuid: string;
      };
      /**
       * Success
       * @description Indicates if the request was successful
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
 * Type of _2CHAT's _2CHAT_GET_API_USAGE_INFO tool input.
 */
type _2CHAT_GET_API_USAGE_INFO_INPUT = object;

/**
 * Type of _2CHAT's _2CHAT_GET_API_USAGE_INFO tool output.
 */
type _2CHAT_GET_API_USAGE_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description Account metadata and status
       */
      account: {
          /**
           * Blocked
           * @description Indicates if the account is blocked
           */
          blocked: boolean;
          /**
           * Created At
           * @description Account creation timestamp (ISO 8601 format)
           */
          created_at: string;
          /**
           * Expires At
           * @description Account expiration timestamp (ISO 8601 format)
           */
          expires_at: string;
          /**
           * Name
           * @description Account name
           */
          name: string;
          /**
           * On Trial
           * @description Indicates if the account is on a trial period
           */
          on_trial: boolean;
          /**
           * Uuid
           * @description Unique identifier for the account
           */
          uuid: string;
      };
      /**
       * Limits
       * @description Configured rate limits for this account
       */
      limits: {
          /**
           * Requests Per Minute
           * @description Maximum number of API requests allowed per minute
           */
          requests_per_minute: number;
      };
      /**
       * Success
       * @description Indicates whether the request was successful
       */
      success: boolean;
      /**
       * Usage
       * @description Current usage statistics for this account
       */
      usage: {
          /**
           * Api Request Count
           * @description Number of API requests made so far
           */
          api_request_count: number;
          /**
           * Max Api Request Count
           * @description Maximum number of API requests allowed
           */
          max_api_request_count: number;
          /**
           * Max Number Check Count
           * @description Maximum number of number check operations allowed
           */
          max_number_check_count: number;
          /**
           * Number Check Count
           * @description Number of number check operations performed
           */
          number_check_count: number;
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
 * Type of _2CHAT's _2CHAT_LIST_CONTACTS tool input.
 */
type _2CHAT_LIST_CONTACTS_INPUT = {
  /**
   * Channel Uuid
   * @description Optional. Used to filter contacts by connected number UUID.
   * @default null
   */
  channel_uuid: string | null;
  /**
   * Page Number
   * @description Zero-indexed page number to retrieve.
   * @default null
   */
  page_number: number | null;
  /**
   * Results Per Page
   * @description Number of results returned per page. Must be between 1 and 100.
   * @default null
   */
  results_per_page: number | null;
};

/**
 * Type of _2CHAT's _2CHAT_LIST_CONTACTS tool output.
 */
type _2CHAT_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts on this page.
       */
      contacts: {
          /**
           * Channel Uuid
           * @description UUID of the channel (phone number) associated with this contact, if any.
           * @default null
           */
          channel_uuid: string | null;
          /**
           * Details
           * @description List of contact details such as phone numbers and emails.
           */
          details: {
              /**
               * Created At
               * @description Timestamp when the detail was created.
               */
              created_at: string;
              /**
               * Id
               * @description Unique detail ID.
               */
              id: number;
              /**
               * Type
               * @description Detail type (e.g., 'WAPH' for WhatsApp phone, 'E' for email).
               */
              type: string;
              /**
               * Updated At
               * @description Timestamp when the detail was last updated, if applicable.
               * @default null
               */
              updated_at: string | null;
              /**
               * Value
               * @description The contact detail value (e.g., phone number, email).
               */
              value: string;
          }[];
          /**
           * First Name
           * @description First name of the contact.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Internal contact ID.
           */
          id: number;
          /**
           * Last Name
           * @description Last name of the contact.
           * @default null
           */
          last_name: string | null;
          /**
           * Profile Pic Url
           * @description URL to the contact's profile picture, if available.
           * @default null
           */
          profile_pic_url: string | null;
          /**
           * Uuid
           * @description Universal unique identifier for the contact.
           */
          uuid: string;
      }[];
      /**
       * Count
       * @description Total number of contacts available.
       */
      count: number;
      /**
       * Page
       * @description Zero-indexed page number of the returned results.
       */
      page: number;
      /**
       * Success
       * @description Indicates whether the request was successful.
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
 * Type of _2CHAT's _2CHAT_LIST_WEBHOOKS tool input.
 */
type _2CHAT_LIST_WEBHOOKS_INPUT = object;

/**
 * Type of _2CHAT's _2CHAT_LIST_WEBHOOKS tool output.
 */
type _2CHAT_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the request was successful.
       */
      success: boolean;
      /**
       * Webhooks
       * @description List of configured and enabled webhook subscriptions.
       */
      webhooks: {
          /**
           * Channel Uuid
           * @description The UUID of the channel this webhook is bound to.
           */
          channel_uuid: string;
          /**
           * Created At
           * @description UTC timestamp (ISO 8601) when the webhook was created.
           */
          created_at: string;
          /**
           * Event Name
           * @description The name of the event this webhook is subscribed to.
           */
          event_name: string;
          /**
           * Hook Params
           * @description Custom parameters 2Chat includes to make the webhook functional.
           */
          hook_params: {
              /**
               * Waweb Uuid
               * @description Internal parameter for routing the webhook, typically the channel UUID.
               */
              waweb_uuid: string;
          };
          /**
           * Hook Url
           * @description The URL that 2Chat will call when the event is triggered.
           */
          hook_url: string;
          /**
           * Uuid
           * @description The unique identifier of the webhook subscription.
           */
          uuid: string;
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
 * Type of _2CHAT's _2CHAT_TEST_API_KEY tool input.
 */
type _2CHAT_TEST_API_KEY_INPUT = object;

/**
 * Type of _2CHAT's _2CHAT_TEST_API_KEY tool output.
 */
type _2CHAT_TEST_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description Detailed account information and limits
       */
      account: {
          /**
           * Email
           * @description Account email address
           */
          email: string;
          /**
           * Id
           * @description Unique account identifier
           */
          id: string;
          /**
           * Limits
           * @description Usage limits associated with the account
           */
          limits: {
              /**
               * Connected Numbers
               * @description Number of connected numbers allowed
               */
              connected_numbers: number;
              /**
               * Messages Per Day
               * @description Number of messages allowed per day
               */
              messages_per_day: number;
          };
          /**
           * Status
           * @description Account status (e.g., active, inactive)
           */
          status: string;
      };
      /**
       * Success
       * @description Indicates if the API key is valid and the request succeeded
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
 * Type map of all available tool input types for toolkit "_2CHAT".
 */
export type _2CHAT_TOOL_INPUTS = {
  CREATE_CONTACT: _2CHAT_CREATE_CONTACT_INPUT
  GET_API_USAGE_INFO: _2CHAT_GET_API_USAGE_INFO_INPUT
  LIST_CONTACTS: _2CHAT_LIST_CONTACTS_INPUT
  LIST_WEBHOOKS: _2CHAT_LIST_WEBHOOKS_INPUT
  TEST_API_KEY: _2CHAT_TEST_API_KEY_INPUT
}

/**
 * Type map of all available tool input types for toolkit "_2CHAT".
 */
export type _2CHAT_TOOL_OUTPUTS = {
  CREATE_CONTACT: _2CHAT_CREATE_CONTACT_OUTPUT
  GET_API_USAGE_INFO: _2CHAT_GET_API_USAGE_INFO_OUTPUT
  LIST_CONTACTS: _2CHAT_LIST_CONTACTS_OUTPUT
  LIST_WEBHOOKS: _2CHAT_LIST_WEBHOOKS_OUTPUT
  TEST_API_KEY: _2CHAT_TEST_API_KEY_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's _2CHAT toolkit.
 */
export const _2CHAT = {
  slug: "_2chat",
  tools: {
    /**
     * Tool to create a new contact in your 2chat account. use after gathering and verifying first name and at least one contact detail (email, phone, or address).
     */
    CREATE_CONTACT: "_2CHAT_CREATE_CONTACT",
    /**
     * Tool to retrieve current api usage and account information. use when you need to monitor your remaining quotas before sending more requests.
     */
    GET_API_USAGE_INFO: "_2CHAT_GET_API_USAGE_INFO",
    /**
     * Tool to list all contacts in your 2chat account. use when you need to retrieve your contact list after confirming your account connection.
     */
    LIST_CONTACTS: "_2CHAT_LIST_CONTACTS",
    /**
     * Tool to list all configured webhook subscriptions. use when you need to audit or review your active whatsapp webhook subscriptions.
     */
    LIST_WEBHOOKS: "_2CHAT_LIST_WEBHOOKS",
    /**
     * Tool to validate your api key and retrieve account info. use when confirming credentials before performing other operations.
     */
    TEST_API_KEY: "_2CHAT_TEST_API_KEY",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "_2CHAT".
 */
export type _2CHAT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "_2CHAT".
 */
export type _2CHAT_TRIGGER_EVENTS = {}
