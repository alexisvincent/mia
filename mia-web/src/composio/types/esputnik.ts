// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ESPUTNIK's ESPUTNIK_ADD_DOMAIN tool input.
 */
type ESPUTNIK_ADD_DOMAIN_INPUT = {
  /**
   * Domain
   * @description Domain to register for web tracking or widgets
   */
  domain?: string;
  /**
   * Site Id
   * @description Identifier of the site to associate the domain with (optional)
   * @default null
   */
  siteId: string | null;
};

/**
 * Type of ESPUTNIK's ESPUTNIK_ADD_DOMAIN tool output.
 */
type ESPUTNIK_ADD_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain
       * @description The registered domain
       */
      domain: string;
      /**
       * Site Id
       * @description The site identifier associated with the domain, if applicable
       * @default null
       */
      siteId: string | null;
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
 * Type of ESPUTNIK's ESPUTNIK_ADD_ORDERS tool input.
 */
type ESPUTNIK_ADD_ORDERS_INPUT = {
  /**
   * Orders
   * @description Array of order objects (up to 1000)
   */
  orders?: {
      /**
       * Currency
       * @description Currency code (ISO 4217)
       */
      currency: string;
      /**
       * Date
       * Format: date-time
       * @description Order date/time in ISO 8601 format with offset
       */
      date: string;
      /**
       * Delivery Address
       * @description Delivery address
       * @default null
       */
      deliveryAddress: string | null;
      /**
       * Delivery Method
       * @description Delivery method
       * @default null
       */
      deliveryMethod: string | null;
      /**
       * Discount
       * @description Order-level discount
       * @default null
       */
      discount: number | null;
      /**
       * Email
       * Format: email
       * @description Customer email; required if externalCustomerId and phone are not provided
       * @default null
       */
      email: string | null;
      /**
       * External Customer Id
       * @description External customer identifier; required if email and phone are not provided
       * @default null
       */
      externalCustomerId: string | null;
      /**
       * External Order Id
       * @description Unique order key used as the identifier
       */
      externalOrderId: string;
      /**
       * First Name
       * @description Customer first name
       * @default null
       */
      firstName: string | null;
      /**
       * Items
       * @description Array of product items; may be omitted if not needed
       * @default null
       */
      items: {
          /**
           * Category
           * @description Item category
           * @default null
           */
          category: string | null;
          /**
           * Cost
           * @description Item cost
           * @default null
           */
          cost: number | null;
          /**
           * Description
           * @description Item description
           * @default null
           */
          description: string | null;
          /**
           * External Item Id
           * @description Item identifier
           */
          externalItemId: string;
          /**
           * Image Url
           * Format: uri
           * @description Item image URL
           * @default null
           */
          imageUrl: string | null;
          /**
           * Name
           * @description Item name
           * @default null
           */
          name: string | null;
          /**
           * Quantity
           * @description Quantity purchased
           */
          quantity: number;
          /**
           * Url
           * Format: uri
           * @description Item URL
           * @default null
           */
          url: string | null;
      }[] | null;
      /**
       * Last Name
       * @description Customer last name
       * @default null
       */
      lastName: string | null;
      /**
       * Payment Method
       * @description Payment method
       * @default null
       */
      paymentMethod: string | null;
      /**
       * Phone
       * @description Customer phone; required if externalCustomerId and email are not provided
       * @default null
       */
      phone: string | null;
      /**
       * Shipping
       * @description Shipping amount
       * @default null
       */
      shipping: number | null;
      /**
       * Status
       * @description Order status
       * @enum {string}
       */
      status: "INITIALIZED" | "IN_PROGRESS" | "DELIVERED" | "CANCELLED" | "ABANDONED_SHOPPING_CART";
      /**
       * Total Cost
       * @description Total order amount; must equal the sum of item costs
       */
      totalCost: number;
  }[];
};

/**
 * Type of ESPUTNIK's ESPUTNIK_ADD_ORDERS tool output.
 */
type ESPUTNIK_ADD_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
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
 * Type of ESPUTNIK's ESPUTNIK_BULK_ADD_OR_UPDATE_CONTACTS tool input.
 */
type ESPUTNIK_BULK_ADD_OR_UPDATE_CONTACTS_INPUT = {
  /**
   * Contacts
   * @description 1–3000 contacts to add or update in this batch
   */
  contacts?: {
      /**
       * Address
       * @description Postal address for a contact.
       * @default null
       */
      address: {
          /**
           * Address
           * @description Street address
           * @default null
           */
          address: string | null;
          /**
           * Postcode
           * @description Postal code
           * @default null
           */
          postcode: string | null;
          /**
           * Region
           * @description Region or state
           * @default null
           */
          region: string | null;
          /**
           * Town
           * @description Town or city
           * @default null
           */
          town: string | null;
      } | null;
      /**
       * Channels
       * @description List of one or more contact channels
       */
      channels: {
          /**
           * ContactDevice
           * @description Device metadata for mobilepush channels.
           * @default null
           */
          device: {
              /**
               * Active
               * @description Whether the device is active
               * @default null
               */
              active: boolean | null;
              /**
               * App Id
               * @description Mobile push application identifier
               */
              appId: string;
              /**
               * App Version
               * @description App version installed on device
               * @default null
               */
              appVersion: string | null;
              /**
               * Client Version
               * @description Client SDK version
               * @default null
               */
              clientVersion: string | null;
              /**
               * Device Model
               * @description Device model
               * @default null
               */
              deviceModel: string | null;
              /**
               * Locale
               * @description Locale, e.g., 'en-US'
               * @default null
               */
              locale: string | null;
              /**
               * Os
               * @description Operating system of the device
               * @default null
               */
              os: string | null;
          } | null;
          /**
           * Type
           * @description Channel type: 'email', 'sms', or 'mobilepush'
           * @enum {string}
           */
          type: "email" | "sms" | "mobilepush";
          /**
           * Value
           * @description Channel value, e.g. email address or phone number
           */
          value: string;
      }[];
      /**
       * External Customer Id
       * @description External ID for deduplication and matching
       * @default null
       */
      externalCustomerId: string | null;
      /**
       * Fields
       * @description Additional custom fields to set
       * @default null
       */
      fields: {
          /**
           * Id
           * @description Custom field identifier
           */
          id: number;
          /**
           * Value
           * @description Value to set for this custom field
           */
          value: string;
      }[] | null;
      /**
       * First Name
       * @description First name of the contact
       * @default null
       */
      firstName: string | null;
      /**
       * Last Name
       * @description Last name of the contact
       * @default null
       */
      lastName: string | null;
  }[];
  /**
   * Custom Fields I Ds
   * @description List of custom field IDs corresponding to contacts[*].fields; update only these if provided
   * @default null
   */
  customFieldsIDs: number[] | null;
  /**
   * Dedupe On
   * @description Channel type used for uniqueness check
   * @enum {string}
   */
  dedupeOn?: "email" | "sms" | "mobilepush";
  /**
   * Event Key For New Contacts
   * @description Event key (Latin letters/digits, no spaces) for new contacts
   * @default null
   */
  eventKeyForNewContacts: string | null;
  /**
   * Group Names
   * @description Segments to which all these contacts will be added
   * @default null
   */
  groupNames: string[] | null;
  /**
   * Group Names Exclude
   * @description Segments from which all these contacts will be removed
   * @default null
   */
  groupNamesExclude: string[] | null;
  /**
   * Restore Deleted
   * @description If true, previously deleted contacts are restored and updated; if false, deleted contacts are skipped
   * @default null
   */
  restoreDeleted: boolean | null;
};

/**
 * Type of ESPUTNIK's ESPUTNIK_BULK_ADD_OR_UPDATE_CONTACTS tool output.
 */
type ESPUTNIK_BULK_ADD_OR_UPDATE_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Async Session Id
       * @description ID of the async import session for status polling
       */
      asyncSessionId: string;
      /**
       * Failed Contacts
       * @description Details of any contacts that failed to process; present even on HTTP 200 when there are partial failures
       * @default null
       */
      failedContacts: {
          [key: string]: unknown;
      }[] | null;
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
 * Type of ESPUTNIK's ESPUTNIK_CHANGE_TOKEN_ACTIVITY tool input.
 */
type ESPUTNIK_CHANGE_TOKEN_ACTIVITY_INPUT = {
  /**
   * Active
   * @description Desired token activity state: true=activate, false=deactivate
   */
  active?: boolean;
  /**
   * App Uuid
   * @description Application UUID associated with the token
   */
  app_uuid?: string;
  /**
   * Token Id
   * @description Mobile push token ID
   */
  token_id?: string;
};

/**
 * Type of ESPUTNIK's ESPUTNIK_CHANGE_TOKEN_ACTIVITY tool output.
 */
type ESPUTNIK_CHANGE_TOKEN_ACTIVITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Current token activity state
       */
      active: boolean;
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
 * Type of ESPUTNIK's ESPUTNIK_DELETE_CONTACT tool input.
 */
type ESPUTNIK_DELETE_CONTACT_INPUT = {
  /**
   * Id
   * @description Yespo ID of the contact to delete
   */
  id?: number;
};

/**
 * Type of ESPUTNIK's ESPUTNIK_DELETE_CONTACT tool output.
 */
type ESPUTNIK_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message parsed from the API response
       * @default null
       */
      message: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
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
 * Type of ESPUTNIK's ESPUTNIK_DELETE_CONTACT_BY_EXTERNAL_ID tool input.
 */
type ESPUTNIK_DELETE_CONTACT_BY_EXTERNAL_ID_INPUT = {
  /**
   * Erase
   * @description When true, performs GDPR-compliant full erasure; when false or omitted, performs regular deletion
   * @default null
   */
  erase: boolean | null;
  /**
   * External Customer Id
   * @description External customer ID of the contact to delete
   */
  externalCustomerId?: string;
};

/**
 * Type of ESPUTNIK's ESPUTNIK_DELETE_CONTACT_BY_EXTERNAL_ID tool output.
 */
type ESPUTNIK_DELETE_CONTACT_BY_EXTERNAL_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message parsed from the API response
       * @default null
       */
      message: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
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
 * Type of ESPUTNIK's ESPUTNIK_DELETE_SMS_MESSAGE tool input.
 */
type ESPUTNIK_DELETE_SMS_MESSAGE_INPUT = {
  /**
   * Id
   * @description Internal identifier of the SMS message to delete
   */
  id?: number;
};

/**
 * Type of ESPUTNIK's ESPUTNIK_DELETE_SMS_MESSAGE tool output.
 */
type ESPUTNIK_DELETE_SMS_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Indicates whether the SMS message was successfully deleted
       */
      deleted: boolean;
      /**
       * Id
       * @description Identifier of the deleted SMS message
       */
      id: number;
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
 * Type of ESPUTNIK's ESPUTNIK_GET_APP_INBOX_MESSAGE tool input.
 */
type ESPUTNIK_GET_APP_INBOX_MESSAGE_INPUT = {
  /**
   * Id
   * @description Identifier of the App Inbox message to retrieve
   */
  id?: number;
};

/**
 * Type of ESPUTNIK's ESPUTNIK_GET_APP_INBOX_MESSAGE tool output.
 */
type ESPUTNIK_GET_APP_INBOX_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Identifier of the message
       */
      id: number;
      /**
       * Language Code
       * @description Default language code
       * @default null
       */
      languageCode: string | null;
      /**
       * Languages
       * @description Languages available for this message
       * @default null
       */
      languages: string[] | null;
      /**
       * Name
       * @description Internal name of the message
       * @default null
       */
      name: string | null;
      /**
       * Subscriptions Keys
       * @description Subscription keys indicating recipient lists
       * @default null
       */
      subscriptionsKeys: string[] | null;
      /**
       * Tags
       * @description List of tags attached to the message
       * @default null
       */
      tags: string[] | null;
      /**
       * Translations
       * @description Localized message payloads
       * @default null
       */
      translations: {
          /**
           * Custom Data
           * @description Custom parameters as a JSON-formatted string
           * @default null
           */
          customData: string | null;
          /**
           * Image Source
           * @description Image URL (JPEG, PNG, or GIF)
           * @default null
           */
          imageSource: string | null;
          /**
           * Link
           * @description URL to open when the message is clicked
           * @default null
           */
          link: string | null;
          /**
           * Text
           * @description Message body text in the specific language
           */
          text: string;
          /**
           * Title
           * @description Message title in the specific language
           */
          title: string;
          /**
           * Ttl Sec
           * @description Time-to-live for the message in seconds
           * @default null
           */
          ttlSec: number | null;
      }[] | null;
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
 * Type of ESPUTNIK's ESPUTNIK_GET_BROADCASTS tool input.
 */
type ESPUTNIK_GET_BROADCASTS_INPUT = {
  /**
   * Maxrows
   * @description Maximum number of broadcasts to return (max 500)
   * @default 10
   */
  maxrows: number;
  /**
   * Startindex
   * @description Index of the first broadcast to return (1-based)
   * @default 1
   */
  startindex: number;
};

/**
 * Type of ESPUTNIK's ESPUTNIK_GET_BROADCASTS tool output.
 */
type ESPUTNIK_GET_BROADCASTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Broadcasts
       * @description List of broadcast records
       */
      broadcasts: {
          /**
           * Batch Interval Unit
           * @description Time unit for batching messages
           * @default null
           * @enum {string|null}
           */
          batchIntervalUnit: "MINUTE" | "HOUR" | "DAY" | "MONTH" | null;
          /**
           * Batch Size
           * @description Number of messages sent per batch interval
           * @default null
           */
          batchSize: number | null;
          /**
           * Broadcast Id
           * @description Unique identifier of the broadcast
           */
          broadcastId: string;
          /**
           * Group Id
           * @description List of segment IDs included in the broadcast
           */
          groupId: number[];
          /**
           * Message Id
           * @description Identifier of the message template used
           */
          messageId: string;
          /**
           * Start Date
           * @description Scheduled start date/time in ISO 8601 format
           */
          startDate: string;
          /**
           * Title
           * @description Broadcast title
           * @default null
           */
          title: string | null;
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
 * Type of ESPUTNIK's ESPUTNIK_GET_CONTACT_IMPORT_STATUS tool input.
 */
type ESPUTNIK_GET_CONTACT_IMPORT_STATUS_INPUT = {
  /**
   * Session Id
   * @description Asynchronous session identifier returned by bulk import.
   */
  sessionId?: string;
};

/**
 * Type of ESPUTNIK's ESPUTNIK_GET_CONTACT_IMPORT_STATUS tool output.
 */
type ESPUTNIK_GET_CONTACT_IMPORT_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Optional human-readable description.
       * @default null
       */
      description: string | null;
      /**
       * Mapping
       * @description List of dedupe mappings (dedupeValue/contactId) if returned by the API.
       * @default null
       */
      mapping: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Raw Text
       * @description Raw text of the API response (useful for debugging non-JSON payloads).
       */
      raw_text: string;
      /**
       * Session Id
       * @description The session ID that was queried.
       */
      sessionId: string;
      /**
       * Status
       * @description Status label returned by the API, e.g., STARTED | IMPORTING | FINISHED | ERROR.
       * @default null
       */
      status: string | null;
      /**
       * Status Code
       * @description HTTP status code returned by the API.
       */
      status_code: number;
      /**
       * Timestamp
       * @description ISO 8601 time when the current status was set.
       * @default null
       */
      timestamp: string | null;
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
 * Type of ESPUTNIK's ESPUTNIK_GET_CONTACT_SUBSCRIPTIONS tool input.
 */
type ESPUTNIK_GET_CONTACT_SUBSCRIPTIONS_INPUT = {
  /**
   * Id
   * @description Internal contact ID
   */
  id?: number;
};

/**
 * Type of ESPUTNIK's ESPUTNIK_GET_CONTACT_SUBSCRIPTIONS tool output.
 */
type ESPUTNIK_GET_CONTACT_SUBSCRIPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subscriptions
       * @description List of subscription categories assigned to the contact
       */
      subscriptions: {
          /**
           * Group Id
           * @description Group id related to the subscription category
           */
          groupId: number;
          /**
           * Id
           * @description Subscription category id
           */
          id: number;
          /**
           * Key
           * @description Unique subscription category key within the organization
           */
          key: string;
          /**
           * Name
           * @description Subscription category name
           */
          name: string;
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
 * Type of ESPUTNIK's ESPUTNIK_GET_ORGANIZATION_BALANCE tool input.
 */
type ESPUTNIK_GET_ORGANIZATION_BALANCE_INPUT = {
  /**
   * Note
   * @description Ignored parameter
   * @default null
   */
  note: string | null;
  /**
   * Optional
   * @description Ignored parameter
   * @default null
   */
  optional: string | null;
  /**
   * Test Case
   * @description Ignored parameter
   * @default null
   */
  test_case: boolean | null;
};

/**
 * Type of ESPUTNIK's ESPUTNIK_GET_ORGANIZATION_BALANCE tool output.
 */
type ESPUTNIK_GET_ORGANIZATION_BALANCE_OUTPUT = {
  /**
   * Data
   * @description Raw JSON response containing organization balance details
   */
  data?: {
      [key: string]: unknown;
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
 * Type of ESPUTNIK's ESPUTNIK_GET_ORGANIZATION_BILLING_HISTORY tool input.
 */
type ESPUTNIK_GET_ORGANIZATION_BILLING_HISTORY_INPUT = {
  /**
   * Date From
   * @description Start of period (ISO 8601). Maps to query param dateFrom.
   * @default null
   */
  date_from: string | null;
  /**
   * Date To
   * @description End of period (ISO 8601). Maps to query param dateTo.
   * @default null
   */
  date_to: string | null;
};

/**
 * Type of ESPUTNIK's ESPUTNIK_GET_ORGANIZATION_BILLING_HISTORY tool output.
 */
type ESPUTNIK_GET_ORGANIZATION_BILLING_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Organization billing history data
   */
  data?: {
      /**
       * Currency
       * @description Account currency code
       * @enum {string}
       */
      currency: "BYR" | "CAD" | "GBP" | "EUR" | "KZT" | "RUB" | "UAH" | "USD";
      /**
       * Daily Costs
       * @description Per-day breakdown of costs
       */
      dailyCosts: {
          /**
           * Channel Details
           * @description Details per media channel
           */
          channelDetails: {
              /**
               * Bonus Received
               * @description Prepaid messages credited (e.g., on subscription)
               */
              bonusReceived: number;
              /**
               * Bonus Spent
               * @description Prepaid messages debited
               */
              bonusSpent: number;
              /**
               * Funds Refund
               * @description Funds refunded
               */
              fundsRefund: number;
              /**
               * Funds Withdrawal
               * @description Funds debited
               */
              fundsWithdrawal: number;
              /**
               * Media Type
               * @description Media channel type
               * @enum {string}
               */
              mediaType: "email" | "sms" | "viber" | "mobilepush" | "webpush" | "appinbox" | "widget" | "inapp" | "telegrambot";
              /**
               * Reserved Funds Refund
               * @description Reserved funds refunded (Viber only)
               */
              reservedFundsRefund: number;
              /**
               * Reserved Funds Withdrawal
               * @description Reserved funds debited (Viber only)
               */
              reservedFundsWithdrawal: number;
              /**
               * Total Parts
               * @description Parts in sent messages (for SMS; otherwise equals totalSent)
               */
              totalParts: number;
              /**
               * Total Sent
               * @description Number of messages sent that day
               */
              totalSent: number;
          }[];
          /**
           * Date
           * @description Day the costs are reported for in ISO 8601 format
           */
          date: string;
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
 * Type of ESPUTNIK's ESPUTNIK_GET_PREPROCESSOR_FILE_STATUS tool input.
 */
type ESPUTNIK_GET_PREPROCESSOR_FILE_STATUS_INPUT = {
  /**
   * Id
   * @description Asynchronous preprocessor session identifier (path parameter).
   */
  id?: string;
};

/**
 * Type of ESPUTNIK's ESPUTNIK_GET_PREPROCESSOR_FILE_STATUS tool output.
 */
type ESPUTNIK_GET_PREPROCESSOR_FILE_STATUS_OUTPUT = {
  /**
   * Data
   * @description Detailed data payload returned by the API, if present.
   * @default null
   */
  data: unknown;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Id
   * @description The session ID that was queried.
   */
  id?: string;
  /**
   * Raw Text
   * @description Raw text of the API response (useful for debugging non-JSON payloads).
   */
  raw_text?: string;
  /**
   * Status
   * @description Status label returned by the API, if available.
   * @default null
   */
  status: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API.
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "ESPUTNIK".
 */
export type ESPUTNIK_TOOL_INPUTS = {
  ADD_DOMAIN: ESPUTNIK_ADD_DOMAIN_INPUT
  ADD_ORDERS: ESPUTNIK_ADD_ORDERS_INPUT
  BULK_ADD_OR_UPDATE_CONTACTS: ESPUTNIK_BULK_ADD_OR_UPDATE_CONTACTS_INPUT
  CHANGE_TOKEN_ACTIVITY: ESPUTNIK_CHANGE_TOKEN_ACTIVITY_INPUT
  DELETE_CONTACT: ESPUTNIK_DELETE_CONTACT_INPUT
  DELETE_CONTACT_BY_EXTERNAL_ID: ESPUTNIK_DELETE_CONTACT_BY_EXTERNAL_ID_INPUT
  DELETE_SMS_MESSAGE: ESPUTNIK_DELETE_SMS_MESSAGE_INPUT
  GET_APP_INBOX_MESSAGE: ESPUTNIK_GET_APP_INBOX_MESSAGE_INPUT
  GET_BROADCASTS: ESPUTNIK_GET_BROADCASTS_INPUT
  GET_CONTACT_IMPORT_STATUS: ESPUTNIK_GET_CONTACT_IMPORT_STATUS_INPUT
  GET_CONTACT_SUBSCRIPTIONS: ESPUTNIK_GET_CONTACT_SUBSCRIPTIONS_INPUT
  GET_ORGANIZATION_BALANCE: ESPUTNIK_GET_ORGANIZATION_BALANCE_INPUT
  GET_ORGANIZATION_BILLING_HISTORY: ESPUTNIK_GET_ORGANIZATION_BILLING_HISTORY_INPUT
  GET_PREPROCESSOR_FILE_STATUS: ESPUTNIK_GET_PREPROCESSOR_FILE_STATUS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ESPUTNIK".
 */
export type ESPUTNIK_TOOL_OUTPUTS = {
  ADD_DOMAIN: ESPUTNIK_ADD_DOMAIN_OUTPUT
  ADD_ORDERS: ESPUTNIK_ADD_ORDERS_OUTPUT
  BULK_ADD_OR_UPDATE_CONTACTS: ESPUTNIK_BULK_ADD_OR_UPDATE_CONTACTS_OUTPUT
  CHANGE_TOKEN_ACTIVITY: ESPUTNIK_CHANGE_TOKEN_ACTIVITY_OUTPUT
  DELETE_CONTACT: ESPUTNIK_DELETE_CONTACT_OUTPUT
  DELETE_CONTACT_BY_EXTERNAL_ID: ESPUTNIK_DELETE_CONTACT_BY_EXTERNAL_ID_OUTPUT
  DELETE_SMS_MESSAGE: ESPUTNIK_DELETE_SMS_MESSAGE_OUTPUT
  GET_APP_INBOX_MESSAGE: ESPUTNIK_GET_APP_INBOX_MESSAGE_OUTPUT
  GET_BROADCASTS: ESPUTNIK_GET_BROADCASTS_OUTPUT
  GET_CONTACT_IMPORT_STATUS: ESPUTNIK_GET_CONTACT_IMPORT_STATUS_OUTPUT
  GET_CONTACT_SUBSCRIPTIONS: ESPUTNIK_GET_CONTACT_SUBSCRIPTIONS_OUTPUT
  GET_ORGANIZATION_BALANCE: ESPUTNIK_GET_ORGANIZATION_BALANCE_OUTPUT
  GET_ORGANIZATION_BILLING_HISTORY: ESPUTNIK_GET_ORGANIZATION_BILLING_HISTORY_OUTPUT
  GET_PREPROCESSOR_FILE_STATUS: ESPUTNIK_GET_PREPROCESSOR_FILE_STATUS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ESPUTNIK toolkit.
 */
export const ESPUTNIK = {
  slug: "esputnik",
  tools: {
    /**
     * Tool to register a domain for web tracking or widgets. Use after confirming the site ID.
     */
    ADD_DOMAIN: "ESPUTNIK_ADD_DOMAIN",
    /**
     * Tool to transfer orders in bulk to eSputnik. Use when you need to import up to 1000 orders at once.
     */
    ADD_ORDERS: "ESPUTNIK_ADD_ORDERS",
    /**
     * Tool to bulk add or update up to 3000 contacts asynchronously. Use when you have a batch of contacts to import or update in one request and need a single session ID for tracking.
     */
    BULK_ADD_OR_UPDATE_CONTACTS: "ESPUTNIK_BULK_ADD_OR_UPDATE_CONTACTS",
    /**
     * Action to change (activate/deactivate) the activity state of a mobile push token. Endpoint: PUT /api/v1/contact/token/activated/{app_uuid}/{token_id} Body: { "active": boolean } Response: { "active": boolean }
     */
    CHANGE_TOKEN_ACTIVITY: "ESPUTNIK_CHANGE_TOKEN_ACTIVITY",
    /**
     * Tool to delete a contact by its Yespo ID. Use when you need to remove a contact with no pending interactions.
     */
    DELETE_CONTACT: "ESPUTNIK_DELETE_CONTACT",
    /**
     * Tool to delete a contact by externalCustomerId.
     */
    DELETE_CONTACT_BY_EXTERNAL_ID: "ESPUTNIK_DELETE_CONTACT_BY_EXTERNAL_ID",
    /**
     * Tool to delete a base SMS message by ID. Use when you need to remove an SMS template before sending. Example: "Delete SMS message with ID 123"
     */
    DELETE_SMS_MESSAGE: "ESPUTNIK_DELETE_SMS_MESSAGE",
    /**
     * Tool to retrieve an App Inbox message by ID. Use when you need to fetch its content, metadata, and translations before sending or editing.
     */
    GET_APP_INBOX_MESSAGE: "ESPUTNIK_GET_APP_INBOX_MESSAGE",
    /**
     * Tool to list broadcasts from eSputnik. Use when you need to retrieve paginated list of broadcasts.
     */
    GET_BROADCASTS: "ESPUTNIK_GET_BROADCASTS",
    /**
     * Tool to retrieve the status of a contact import session. Use this to poll the asynchronous processing status of a previously submitted bulk contacts import.
     */
    GET_CONTACT_IMPORT_STATUS: "ESPUTNIK_GET_CONTACT_IMPORT_STATUS",
    /**
     * Tool to retrieve subscription categories for a contact. Use when you need to get all subscription categories that a contact is enrolled in.
     */
    GET_CONTACT_SUBSCRIPTIONS: "ESPUTNIK_GET_CONTACT_SUBSCRIPTIONS",
    /**
     * Tool to retrieve the current organization balance. Use when you need to check the account's available funds before sending campaigns.
     */
    GET_ORGANIZATION_BALANCE: "ESPUTNIK_GET_ORGANIZATION_BALANCE",
    /**
     * Tool to retrieve the organization billing history by day and media channel.
     */
    GET_ORGANIZATION_BILLING_HISTORY: "ESPUTNIK_GET_ORGANIZATION_BILLING_HISTORY",
    /**
     * Tool to retrieve the status of a preprocessor file upload session. Use when polling for the asynchronous processing status of a previously submitted file.
     */
    GET_PREPROCESSOR_FILE_STATUS: "ESPUTNIK_GET_PREPROCESSOR_FILE_STATUS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ESPUTNIK".
 */
export type ESPUTNIK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ESPUTNIK".
 */
export type ESPUTNIK_TRIGGER_EVENTS = {}
