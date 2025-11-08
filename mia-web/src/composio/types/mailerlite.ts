// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MAILERLITE's MAILERLITE_CREATE_AUTOMATION tool input.
 */
type MAILERLITE_CREATE_AUTOMATION_INPUT = {
  /**
   * Is Active
   * @description Whether to activate the automation upon creation. Defaults to false.
   * @default null
   */
  is_active: boolean | null;
  /**
   * Name
   * @description Name of the automation workflow.
   */
  name?: string;
  /**
   * Trigger
   * @description Configuration object defining the automation trigger.
   */
  trigger?: {
      /**
       * Settings
       * @description Settings specific to the trigger type (e.g., {'group_id': '123'}).
       */
      settings: {
          [key: string]: string;
      };
      /**
       * Type
       * @description Trigger type for the automation, e.g., 'subscriber_any_of_group'.
       */
      type: string;
  };
};

/**
 * Type of MAILERLITE's MAILERLITE_CREATE_AUTOMATION tool output.
 */
type MAILERLITE_CREATE_AUTOMATION_OUTPUT = {
  /**
   * Data
   * @description Full response object from MailerLite API for automation creation.
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
 * Type of MAILERLITE's MAILERLITE_CREATE_ECOMMERCE_CUSTOMER tool input.
 */
type MAILERLITE_CREATE_ECOMMERCE_CUSTOMER_INPUT = {
  /**
   * Accepts Marketing
   * @description True if the customer accepts marketing emails, false otherwise
   * @default null
   */
  accepts_marketing: boolean | null;
  /**
   * Create Subscriber
   * @description If true and no subscriber exists, create a subscriber for the customer
   * @default null
   */
  create_subscriber: boolean | null;
  /**
   * Email
   * Format: email
   * @description Customer's email address
   */
  email?: unknown;
  /**
   * Shop Id
   * @description Unique identifier of the e-commerce shop.
   */
  shop_id?: string;
  /**
   * Total Spent
   * @description Total amount the customer has spent in the shop
   * @default null
   */
  total_spent: number | null;
};

/**
 * Type of MAILERLITE's MAILERLITE_CREATE_ECOMMERCE_CUSTOMER tool output.
 */
type MAILERLITE_CREATE_ECOMMERCE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Details of the created or updated customer
   */
  data?: {
      /**
       * Accepts Marketing
       * @description Customer marketing preference flag
       */
      accepts_marketing: boolean;
      /**
       * Created At
       * @description Creation timestamp 'YYYY-MM-DD HH:MM:SS'
       */
      created_at: string;
      /**
       * Email
       * @description Customer email address
       */
      email: string;
      /**
       * Id
       * @description Unique identifier for the customer
       */
      id: string;
      /**
       * SubscriberData
       * @description Associated subscriber object, null if none exists
       * @default null
       */
      subscriber: {
          /**
           * Click Rate
           * @description Click rate percentage as integer
           */
          click_rate: number;
          /**
           * Clicks Count
           * @description Total click events count
           */
          clicks_count: number;
          /**
           * Created At
           * @description Record creation timestamp in 'YYYY-MM-DD HH:MM:SS' format
           */
          created_at: string;
          /**
           * Email
           * @description Subscriber email address
           */
          email: string;
          /**
           * Fields
           * @description Subscriber custom fields with key-value pairs
           */
          fields: {
              [key: string]: string | null;
          };
          /**
           * Groups
           * @description List of group IDs the subscriber belongs to
           */
          groups: string[];
          /**
           * Id
           * @description Unique identifier for the subscriber
           */
          id: string;
          /**
           * Ip Address
           * @description IP address of subscriber, if available
           * @default null
           */
          ip_address: string | null;
          /**
           * Open Rate
           * @description Open rate percentage as integer
           */
          open_rate: number;
          /**
           * Opens Count
           * @description Total open events count
           */
          opens_count: number;
          /**
           * Opted In At
           * @description Opt-in timestamp in 'YYYY-MM-DD HH:MM:SS' format, if applicable
           * @default null
           */
          opted_in_at: string | null;
          /**
           * Optin Ip
           * @description IP address used for opt-in, if recorded
           * @default null
           */
          optin_ip: string | null;
          /**
           * Sent
           * @description Number of emails sent to subscriber
           */
          sent: number;
          /**
           * Source
           * @description Source of subscription
           */
          source: string;
          /**
           * Status
           * @description Subscriber status
           */
          status: string;
          /**
           * Subscribed At
           * @description Subscription timestamp in 'YYYY-MM-DD HH:MM:SS' format
           * @default null
           */
          subscribed_at: string | null;
          /**
           * Unsubscribed At
           * @description Unsubscription timestamp in 'YYYY-MM-DD HH:MM:SS' format, if unsubscribed
           * @default null
           */
          unsubscribed_at: string | null;
          /**
           * Updated At
           * @description Record last update timestamp in 'YYYY-MM-DD HH:MM:SS' format
           */
          updated_at: string;
      } | null;
      /**
       * Updated At
       * @description Last update timestamp 'YYYY-MM-DD HH:MM:SS'
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
 * Type of MAILERLITE's MAILERLITE_CREATE_ECOMMERCE_SHOP tool input.
 */
type MAILERLITE_CREATE_ECOMMERCE_SHOP_INPUT = {
  /**
   * Access Data
   * @description Platform-specific credentials (e.g., Shopify token or WooCommerce keys).
   * @default null
   */
  access_data: string | null;
  /**
   * Currency
   * @description ISO 4217 currency code that the shop uses (e.g., USD, EUR)
   */
  currency?: unknown;
  /**
   * Enable Popups
   * @description Enable popups on the shop (shop must have the universal script).
   * @default null
   */
  enable_popups: boolean | null;
  /**
   * Enabled
   * @description Enable or disable e-commerce features for the shop.
   * @default null
   */
  enabled: boolean | null;
  /**
   * Group Id
   * @description ID of the subscriber group to automatically add shop visitors to.
   * @default null
   */
  group_id: number | null;
  /**
   * Name
   * @description Shop name
   */
  name?: string;
  /**
   * Platform
   * @description Platform of the shop (e.g., shopify, woocommerce)
   * @default null
   */
  platform: string | null;
  /**
   * Url
   * @description Shop URL address
   */
  url?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_CREATE_ECOMMERCE_SHOP tool output.
 */
type MAILERLITE_CREATE_ECOMMERCE_SHOP_OUTPUT = {
  /**
   * Data
   * @description Created shop details.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the shop was created.
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code used by the shop.
       */
      currency: string;
      /**
       * Currency Sign
       * @description Currency symbol used by the shop.
       * @default null
       */
      currency_sign: string | null;
      /**
       * Enable Popups
       * @description Indicates if popups are enabled.
       * @default null
       */
      enable_popups: boolean | null;
      /**
       * Enabled
       * @description Indicates if the shop is enabled.
       * @default null
       */
      enabled: boolean | null;
      /**
       * Group
       * @description Group associated with the shop.
       * @default null
       */
      group: {
          /**
           * Active Count
           * @description Count of active subscribers in the group.
           */
          active_count: number;
          /**
           * Bounced Count
           * @description Count of bounced emails.
           */
          bounced_count: number;
          /**
           * Click Rate
           * @description Click rate statistics.
           */
          click_rate: {
              /**
               * Float
               * @description Click rate as a float.
               */
              float: number;
              /**
               * String
               * @description Click rate as percentage string.
               */
              string: string;
          };
          /**
           * Clicks Count
           * @description Total clicks count.
           */
          clicks_count: number;
          /**
           * Created At
           * @description Timestamp when the group was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the group.
           */
          id: string;
          /**
           * Junk Count
           * @description Count of junk marked.
           */
          junk_count: number;
          /**
           * Name
           * @description Name of the group.
           */
          name: string;
          /**
           * Open Rate
           * @description Open rate statistics.
           */
          open_rate: {
              /**
               * Float
               * @description Open rate as a float.
               */
              float: number;
              /**
               * String
               * @description Open rate as percentage string.
               */
              string: string;
          };
          /**
           * Opens Count
           * @description Total opens count.
           */
          opens_count: number;
          /**
           * Sent Count
           * @description Total campaigns sent count.
           */
          sent_count: number;
          /**
           * Unconfirmed Count
           * @description Count of unconfirmed members.
           */
          unconfirmed_count: number;
          /**
           * Unsubscribed Count
           * @description Count of unsubscribed members.
           */
          unsubscribed_count: number;
      } | null;
      /**
       * Id
       * @description Unique identifier for the shop.
       */
      id: string;
      /**
       * Name
       * @description Name of the shop.
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the shop was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description URL of the shop.
       */
      url: string;
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
 * Type of MAILERLITE's MAILERLITE_CREATE_FIELD tool input.
 */
type MAILERLITE_CREATE_FIELD_INPUT = {
  /**
   * Name
   * @description Name of the custom field (max 255 characters).
   */
  name?: string;
  /**
   * Type
   * @description Type of the custom field; one of 'text', 'number', or 'date'.
   * @enum {string}
   */
  type?: "text" | "number" | "date";
};

/**
 * Type of MAILERLITE's MAILERLITE_CREATE_FIELD tool output.
 */
type MAILERLITE_CREATE_FIELD_OUTPUT = {
  /**
   * Data
   * @description Details of the created custom field.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the field.
       */
      id: string;
      /**
       * Key
       * @description System key for referencing the field.
       */
      key: string;
      /**
       * Name
       * @description Name of the field.
       */
      name: string;
      /**
       * Type
       * @description Type of the field.
       * @enum {string}
       */
      type: "text" | "number" | "date";
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
 * Type of MAILERLITE's MAILERLITE_CREATE_GROUP tool input.
 */
type MAILERLITE_CREATE_GROUP_INPUT = {
  /**
   * Name
   * @description Name of the new subscriber group (max 255 characters).
   */
  name?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_CREATE_GROUP tool output.
 */
type MAILERLITE_CREATE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Details of the created group.
   */
  data?: {
      /**
       * Active Count
       * @description Count of active subscribers in the group.
       */
      active_count: number;
      /**
       * Bounced Count
       * @description Count of bounced emails.
       */
      bounced_count: number;
      /**
       * Click Rate
       * @description Click rate statistics.
       */
      click_rate: {
          /**
           * Float
           * @description Rate as a decimal number.
           */
          float: number;
          /**
           * String
           * @description Rate as a percentage string.
           */
          string: string;
      };
      /**
       * Clicks Count
       * @description Total clicks count.
       */
      clicks_count: number;
      /**
       * Created At
       * @description Timestamp when the group was created (YYYY-MM-DD HH:MM:SS).
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the group.
       */
      id: string;
      /**
       * Junk Count
       * @description Count of junk marked.
       */
      junk_count: number;
      /**
       * Name
       * @description Name of the group.
       */
      name: string;
      /**
       * Open Rate
       * @description Open rate statistics.
       */
      open_rate: {
          /**
           * Float
           * @description Rate as a decimal number.
           */
          float: number;
          /**
           * String
           * @description Rate as a percentage string.
           */
          string: string;
      };
      /**
       * Opens Count
       * @description Total opens count.
       */
      opens_count: number;
      /**
       * Sent Count
       * @description Total campaigns sent count.
       */
      sent_count: number;
      /**
       * Unconfirmed Count
       * @description Count of unconfirmed members.
       */
      unconfirmed_count: number;
      /**
       * Unsubscribed Count
       * @description Count of unsubscribed members.
       */
      unsubscribed_count: number;
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
 * Type of MAILERLITE's MAILERLITE_CREATE_SEGMENT tool input.
 */
type MAILERLITE_CREATE_SEGMENT_INPUT = {
  /**
   * Name
   * @description Name of the new subscriber segment (max 255 characters).
   */
  name?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_CREATE_SEGMENT tool output.
 */
type MAILERLITE_CREATE_SEGMENT_OUTPUT = {
  /**
   * Data
   * @description Details of the created segment.
   */
  data?: {
      /**
       * Click Rate
       * @description Click rate statistics.
       */
      click_rate: {
          /**
           * Float
           * @description Click rate as a decimal number.
           */
          float: number;
          /**
           * String
           * @description Click rate as a percentage string.
           */
          string: string;
      };
      /**
       * Created At
       * @description Timestamp when the segment was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the segment.
       */
      id: string;
      /**
       * Name
       * @description Name of the segment.
       */
      name: string;
      /**
       * Open Rate
       * @description Open rate statistics.
       */
      open_rate: {
          /**
           * Float
           * @description Open rate as a decimal number.
           */
          float: number;
          /**
           * String
           * @description Open rate as a percentage string.
           */
          string: string;
      };
      /**
       * Total
       * @description Total number of subscribers in this segment.
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
 * Type of MAILERLITE's MAILERLITE_CREATE_WEBHOOK tool input.
 */
type MAILERLITE_CREATE_WEBHOOK_INPUT = {
  /**
   * Batchable
   * @description If true, events will be sent in batches. Required for campaign.open and campaign.click events
   * @default null
   */
  batchable: boolean | null;
  /**
   * Enabled
   * @description Whether the webhook is active; defaults to true
   * @default null
   */
  enabled: boolean | null;
  /**
   * Events
   * @description List of events to subscribe to; choose from available webhook events
   */
  events?: string[];
  /**
   * Name
   * @description Optional name for the webhook
   * @default null
   */
  name: string | null;
  /**
   * Url
   * Format: uri
   * @description Endpoint URL where webhook notifications will be sent
   */
  url?: unknown;
};

/**
 * Type of MAILERLITE's MAILERLITE_CREATE_WEBHOOK tool output.
 */
type MAILERLITE_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Schema for a MailerLite webhook resource.
   */
  data?: {
      /**
       * Batchable
       * @description Whether the webhook uses batched deliveries.
       */
      batchable: boolean;
      /**
       * Created At
       * @description Timestamp when the webhook was created.
       */
      created_at: string;
      /**
       * Enabled
       * @description Whether the webhook is active.
       */
      enabled: boolean;
      /**
       * Events
       * @description Events subscribed to by the webhook.
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier of the created webhook.
       */
      id: string;
      /**
       * Name
       * @description Name of the webhook.
       * @default null
       */
      name: string | null;
      /**
       * Secret
       * @description Secret key used to sign webhook payloads.
       */
      secret: string;
      /**
       * Updated At
       * @description Timestamp when the webhook was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description Endpoint URL for the webhook.
       */
      url: string;
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
 * Type of MAILERLITE's MAILERLITE_DELETE_AUTOMATION tool input.
 */
type MAILERLITE_DELETE_AUTOMATION_INPUT = {
  /**
   * Automation Id
   * @description Unique identifier of the automation workflow to delete.
   */
  automation_id?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_DELETE_AUTOMATION tool output.
 */
type MAILERLITE_DELETE_AUTOMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the automation was deleted successfully.
       * @default null
       */
      success: boolean | null;
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
 * Type of MAILERLITE's MAILERLITE_DELETE_ECOMMERCE_CUSTOMER tool input.
 */
type MAILERLITE_DELETE_ECOMMERCE_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description Unique identifier of the customer to delete.
   */
  customer_id?: string;
  /**
   * Shop Id
   * @description Unique identifier of the e-commerce shop.
   */
  shop_id?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_DELETE_ECOMMERCE_CUSTOMER tool output.
 */
type MAILERLITE_DELETE_ECOMMERCE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Deleted customer details
   */
  data?: {
      /**
       * Accepts Marketing
       * @description Indicates if the customer accepts marketing emails
       */
      accepts_marketing: boolean;
      /**
       * Created At
       * @description Timestamp when the customer was created
       * @default null
       */
      created_at: string | null;
      /**
       * Email
       * @description Customer email address
       */
      email: string;
      /**
       * Id
       * @description Customer unique identifier
       */
      id: string;
      /**
       * CustomerSubscriber
       * @description Subscriber details if customer is also a subscriber
       * @default null
       */
      subscriber: {
          /**
           * Click Rate
           * @description Click rate percentage as integer
           */
          click_rate: number;
          /**
           * Clicks Count
           * @description Total click events count
           */
          clicks_count: number;
          /**
           * Created At
           * @description Record creation timestamp
           */
          created_at: string;
          /**
           * Email
           * @description Subscriber email address
           */
          email: string;
          /**
           * Fields
           * @description Subscriber custom fields with key-value pairs
           */
          fields: {
              [key: string]: string | null;
          };
          /**
           * Groups
           * @description List of group IDs the subscriber belongs to
           */
          groups: string[];
          /**
           * Id
           * @description Subscriber unique identifier
           */
          id: string;
          /**
           * Ip Address
           * @description IP address of subscriber, if available
           * @default null
           */
          ip_address: string | null;
          /**
           * Open Rate
           * @description Open rate percentage as integer
           */
          open_rate: number;
          /**
           * Opens Count
           * @description Total open events count
           */
          opens_count: number;
          /**
           * Opted In At
           * @description Opt-in timestamp, if applicable
           * @default null
           */
          opted_in_at: string | null;
          /**
           * Optin Ip
           * @description IP address used for opt-in, if recorded
           * @default null
           */
          optin_ip: string | null;
          /**
           * Sent
           * @description Number of emails sent to subscriber
           */
          sent: number;
          /**
           * Source
           * @description Source of subscription
           */
          source: string;
          /**
           * Status
           * @description Subscriber status
           * @enum {string}
           */
          status: "active" | "unsubscribed" | "unconfirmed" | "bounced" | "junk";
          /**
           * Subscribed At
           * @description Subscription timestamp in 'YYYY-MM-DD HH:MM:SS' format
           */
          subscribed_at: string;
          /**
           * Unsubscribed At
           * @description Unsubscription timestamp in 'YYYY-MM-DD HH:MM:SS', if unsubscribed
           * @default null
           */
          unsubscribed_at: string | null;
          /**
           * Updated At
           * @description Record last update timestamp
           */
          updated_at: string;
      } | null;
      /**
       * Updated At
       * @description Timestamp when the customer was last updated
       * @default null
       */
      updated_at: string | null;
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
 * Type of MAILERLITE's MAILERLITE_DELETE_ECOMMERCE_SHOP tool input.
 */
type MAILERLITE_DELETE_ECOMMERCE_SHOP_INPUT = {
  /**
   * Shop Id
   * @description Unique identifier of the e-commerce shop to delete.
   */
  shop_id?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_DELETE_ECOMMERCE_SHOP tool output.
 */
type MAILERLITE_DELETE_ECOMMERCE_SHOP_OUTPUT = {
  /**
   * Data
   * @description Deleted e-commerce shop details.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the shop was created.
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code used by the shop.
       */
      currency: string;
      /**
       * Currency Sign
       * @description Currency symbol used by the shop.
       */
      currency_sign: string;
      /**
       * Enable Popups
       * @description Indicates if popups are enabled for the shop.
       */
      enable_popups: boolean;
      /**
       * Enabled
       * @description Indicates if the shop is enabled.
       */
      enabled: boolean;
      /**
       * Group
       * @description Group associated with the shop.
       * @default null
       */
      group: {
          /**
           * Click Rate
           * @description Click rate statistics for the group.
           */
          click_rate: {
              /**
               * Float
               * @description Click rate as a float.
               */
              float: number;
              /**
               * String
               * @description Click rate as a percentage string.
               */
              string: string;
          };
          /**
           * Created At
           * @description Timestamp when the group was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the group.
           */
          id: string;
          /**
           * Name
           * @description Name of the group.
           */
          name: string;
          /**
           * Open Rate
           * @description Open rate statistics for the group.
           */
          open_rate: {
              /**
               * Float
               * @description Open rate as a float.
               */
              float: number;
              /**
               * String
               * @description Open rate as a percentage string.
               */
              string: string;
          };
          /**
           * Total
           * @description Total number of members in the group.
           */
          total: number;
      } | null;
      /**
       * Id
       * @description Unique identifier for the shop.
       */
      id: string;
      /**
       * Name
       * @description Name of the shop.
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the shop was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description URL of the shop.
       */
      url: string;
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
 * Type of MAILERLITE's MAILERLITE_DELETE_FIELD tool input.
 */
type MAILERLITE_DELETE_FIELD_INPUT = {
  /**
   * Field Id
   * @description Unique identifier of the custom field to delete.
   */
  field_id?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_DELETE_FIELD tool output.
 */
type MAILERLITE_DELETE_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the custom field was deleted successfully.
       * @default null
       */
      success: boolean | null;
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
 * Type of MAILERLITE's MAILERLITE_DELETE_GROUP tool input.
 */
type MAILERLITE_DELETE_GROUP_INPUT = {
  /**
   * Group Id
   * @description The unique identifier of the group to delete.
   */
  group_id?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_DELETE_GROUP tool output.
 */
type MAILERLITE_DELETE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the group was deleted successfully.
       * @default null
       */
      success: boolean | null;
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
 * Type of MAILERLITE's MAILERLITE_DELETE_SEGMENT tool input.
 */
type MAILERLITE_DELETE_SEGMENT_INPUT = {
  /**
   * Segment Id
   * @description The unique identifier of the segment to delete.
   */
  segment_id?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_DELETE_SEGMENT tool output.
 */
type MAILERLITE_DELETE_SEGMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the segment was deleted successfully.
       * @default null
       */
      success: boolean | null;
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
 * Type of MAILERLITE's MAILERLITE_DELETE_SUBSCRIBER tool input.
 */
type MAILERLITE_DELETE_SUBSCRIBER_INPUT = {
  /**
   * Id
   * @description The unique identifier of the subscriber to delete.
   */
  id?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_DELETE_SUBSCRIBER tool output.
 */
type MAILERLITE_DELETE_SUBSCRIBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the subscriber was deleted successfully.
       * @default null
       */
      success: boolean | null;
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
 * Type of MAILERLITE's MAILERLITE_DELETE_WEBHOOK tool input.
 */
type MAILERLITE_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to delete.
   */
  webhook_id?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_DELETE_WEBHOOK tool output.
 */
type MAILERLITE_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the webhook was deleted successfully.
       * @default null
       */
      success: boolean | null;
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
 * Type of MAILERLITE's MAILERLITE_FETCH_TOTAL_ECOMMERCE_CUSTOMERS_COUNT tool input.
 */
type MAILERLITE_FETCH_TOTAL_ECOMMERCE_CUSTOMERS_COUNT_INPUT = {
  /**
   * Shop Id
   * @description Unique identifier of the e-commerce shop.
   */
  shop_id?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_FETCH_TOTAL_ECOMMERCE_CUSTOMERS_COUNT tool output.
 */
type MAILERLITE_FETCH_TOTAL_ECOMMERCE_CUSTOMERS_COUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Total
       * @description Total number of customers in the specified shop.
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
 * Type of MAILERLITE's MAILERLITE_GET_ACCOUNT_INFO tool input.
 */
type MAILERLITE_GET_ACCOUNT_INFO_INPUT = object;

/**
 * Type of MAILERLITE's MAILERLITE_GET_ACCOUNT_INFO tool output.
 */
type MAILERLITE_GET_ACCOUNT_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the account was created
       */
      created_at: string;
      /**
       * Default Timezone
       * @description Default timezone for scheduling in IANA format
       */
      default_timezone: string;
      /**
       * Email
       * @description Primary contact email for the account
       */
      email: string;
      /**
       * Id
       * @description Unique account identifier
       */
      id: string;
      /**
       * Name
       * @description Account name
       */
      name: string;
      /**
       * Plan
       * @description Current billing plan details
       */
      plan: {
          /**
           * Id
           * @description Unique plan identifier
           */
          id: string;
          /**
           * Monthly Limit
           * @description Monthly limit of emails or actions, if applicable
           * @default null
           */
          monthly_limit: number | null;
          /**
           * Name
           * @description Plan display name
           */
          name: string;
          /**
           * Subscribers Limit
           * @description Maximum number of subscribers allowed, if applicable
           * @default null
           */
          subscribers_limit: number | null;
          /**
           * Type
           * @description Billing cycle or plan type, if provided
           * @default null
           */
          type: string | null;
      };
      /**
       * Roles
       * @description List of permission roles associated with this API token
       */
      roles: string[];
      /**
       * Website
       * @description Main website of the account, if set
       * @default null
       */
      website: string | null;
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
 * Type of MAILERLITE's MAILERLITE_GET_ACCOUNT_STATS tool input.
 */
type MAILERLITE_GET_ACCOUNT_STATS_INPUT = object;

/**
 * Type of MAILERLITE's MAILERLITE_GET_ACCOUNT_STATS tool output.
 */
type MAILERLITE_GET_ACCOUNT_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bounce Rate
       * @description Email bounce rate percentage.
       */
      bounce_rate: number;
      /**
       * Campaigns
       * @description Total number of campaigns sent.
       */
      campaigns: number;
      /**
       * Click Rate
       * @description Email click-through rate percentage.
       */
      click_rate: number;
      /**
       * Open Rate
       * @description Email open rate percentage.
       */
      open_rate: number;
      /**
       * Sent Emails
       * @description Total number of emails sent from the account.
       */
      sent_emails: number;
      /**
       * Subscribed
       * @description Number of subscribed users.
       */
      subscribed: number;
      /**
       * Unsubscribed
       * @description Number of unsubscribed users.
       */
      unsubscribed: number;
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
 * Type of MAILERLITE's MAILERLITE_GET_AUTOMATION tool input.
 */
type MAILERLITE_GET_AUTOMATION_INPUT = {
  /**
   * Automation Id
   * @description Unique identifier of the automation to retrieve
   */
  automation_id?: string;
  /**
   * Fields
   * @description Comma-separated list of fields to include in the response
   * @default null
   */
  fields: string | null;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_AUTOMATION tool output.
 */
type MAILERLITE_GET_AUTOMATION_OUTPUT = {
  /**
   * Data
   * @description Automation detail object
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
 * Type of MAILERLITE's MAILERLITE_GET_CAMPAIGNS tool input.
 */
type MAILERLITE_GET_CAMPAIGNS_INPUT = {
  /**
   * Filter[Status]
   * @description Filter campaigns by status: 'sent', 'draft', or 'ready'.
   * @default null
   * @enum {string|null}
   */
  "filter[status]": "sent" | "draft" | "ready" | null;
  /**
   * Filter[Type]
   * @description Filter campaigns by type: 'regular', 'ab', 'resend', or 'rss'.
   * @default null
   * @enum {string|null}
   */
  "filter[type]": "regular" | "ab" | "resend" | "rss" | null;
  /**
   * Limit
   * @description Items per page (min 1). Defaults to server default (25).
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number (min 1). Defaults to server default (1).
   * @default null
   */
  page: number | null;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_CAMPAIGNS tool output.
 */
type MAILERLITE_GET_CAMPAIGNS_OUTPUT = {
  /** Data */
  data?: {
      /** Account Id */
      account_id: string;
      /** Can Be Scheduled */
      can_be_scheduled: boolean;
      /** Created At */
      created_at: string;
      /** Default Email Id */
      default_email_id: string;
      /** Delivery Schedule */
      delivery_schedule: string;
      /** Emails */
      emails: {
          /** Account Id */
          account_id: string;
          /** Created At */
          created_at: string;
          /** Emailable Id */
          emailable_id: string;
          /** Emailable Type */
          emailable_type: string;
          /** From */
          from: string;
          /** From Name */
          from_name: string | null;
          /** Id */
          id: string;
          /** Is Designed */
          is_designed: boolean;
          /** Is Winner */
          is_winner: boolean;
          /** Language Id */
          language_id: string | null;
          /** Name */
          name: string | null;
          /** Plain Text */
          plain_text: string;
          /** Preview Url */
          preview_url: string | null;
          /** Reply To */
          reply_to: string | null;
          /** Screenshot Url */
          screenshot_url: string | null;
          /** Send After */
          send_after: string | null;
          /** Stats */
          stats: {
              /** Click Rate */
              click_rate: {
                  /**
                   * Float
                   * @description Rate as float.
                   */
                  float: number;
                  /**
                   * String
                   * @description Rate as human-readable string, e.g., '50%'.
                   */
                  string: string;
              };
              /** Clicks Count */
              clicks_count: number;
              /** Open Rate */
              open_rate: {
                  /**
                   * Float
                   * @description Rate as float.
                   */
                  float: number;
                  /**
                   * String
                   * @description Rate as human-readable string, e.g., '50%'.
                   */
                  string: string;
              };
              /** Opens Count */
              opens_count: number;
              /** Sent */
              sent: number;
              /** Unique Clicks Count */
              unique_clicks_count: number;
              /** Unique Opens Count */
              unique_opens_count: number;
              /** Unsubscribe Rate */
              unsubscribe_rate: {
                  /**
                   * Float
                   * @description Rate as float.
                   */
                  float: number;
                  /**
                   * String
                   * @description Rate as human-readable string, e.g., '50%'.
                   */
                  string: string;
              };
              /** Unsubscribes Count */
              unsubscribes_count: number;
          };
          /** Subject */
          subject: string;
          /** Track Opens */
          track_opens: boolean;
          /** Type */
          type: string;
          /** Updated At */
          updated_at: string;
      }[];
      /** Filter */
      filter: {
          /** Args */
          args: (string | string[])[];
          /** Operator */
          operator: string;
      }[][];
      /** Filter For Humans */
      filter_for_humans: string[][];
      /** Finished At */
      finished_at: string | null;
      /** Has Winner */
      has_winner: boolean | null;
      /** Id */
      id: string;
      /** Initial Created At */
      initial_created_at: string | null;
      /** Is Currently Sending Out */
      is_currently_sending_out: boolean;
      /** Is Stopped */
      is_stopped: boolean;
      /** Language Id */
      language_id: string;
      /** Missing Data */
      missing_data: unknown[];
      /** Name */
      name: string;
      /** Queued At */
      queued_at: string | null;
      /** Scheduled For */
      scheduled_for: string | null;
      /** Settings */
      settings: {
          /** Ecommerce Tracking */
          ecommerce_tracking: boolean;
          /** Track Opens */
          track_opens: boolean;
          /** Use Google Analytics */
          use_google_analytics: boolean;
      };
      /** Started At */
      started_at: string | null;
      /** Stats */
      stats: {
          /** Click Rate */
          click_rate: {
              /**
               * Float
               * @description Rate as float.
               */
              float: number;
              /**
               * String
               * @description Rate as human-readable string, e.g., '50%'.
               */
              string: string;
          };
          /** Clicks Count */
          clicks_count: number;
          /** Open Rate */
          open_rate: {
              /**
               * Float
               * @description Rate as float.
               */
              float: number;
              /**
               * String
               * @description Rate as human-readable string, e.g., '50%'.
               */
              string: string;
          };
          /** Opens Count */
          opens_count: number;
          /** Sent */
          sent: number;
          /** Unique Clicks Count */
          unique_clicks_count: number;
          /** Unique Opens Count */
          unique_opens_count: number;
          /** Unsubscribe Rate */
          unsubscribe_rate: {
              /**
               * Float
               * @description Rate as float.
               */
              float: number;
              /**
               * String
               * @description Rate as human-readable string, e.g., '50%'.
               */
              string: string;
          };
          /** Unsubscribes Count */
          unsubscribes_count: number;
      };
      /** Status */
      status: string;
      /** Stopped At */
      stopped_at: string | null;
      /** Type */
      type: string;
      /** Type For Humans */
      type_for_humans: string;
      /** Updated At */
      updated_at: string;
      /** Used In Automations */
      used_in_automations: boolean;
      /** Uses Ecommerce */
      uses_ecommerce: boolean;
      /** Uses Survey */
      uses_survey: boolean;
      /** Warnings */
      warnings: unknown[];
      /** Winner Selected Manually At */
      winner_selected_manually_at: string | null;
      /** Winner Sending Time For Humans */
      winner_sending_time_for_humans: string | null;
      /** Winner Version For Human */
      winner_version_for_human: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** Links */
  links?: {
      /** First */
      first: string | null;
      /** Last */
      last: string | null;
      /** Next */
      next: string | null;
      /** Prev */
      prev: string | null;
  };
  /** Meta */
  meta?: {
      /** Aggregations */
      aggregations: {
          /** All */
          all: number;
          /** Draft */
          draft: number;
          /** Ready */
          ready: number;
          /** Sent */
          sent: number;
      };
      /** Current Page */
      current_page: number;
      /**
       * From
       * @default null
       */
      from: number | null;
      /** Last Page */
      last_page: number;
      /** Links */
      links: {
          /** Active */
          active: boolean;
          /** Label */
          label: string;
          /** Url */
          url: string | null;
      }[];
      /** Path */
      path: string;
      /** Per Page */
      per_page: number;
      /** To */
      to: number | null;
      /** Total */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_ECOMMERCE_CUSTOMER tool input.
 */
type MAILERLITE_GET_ECOMMERCE_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description Unique identifier of the customer within the shop.
   */
  customer_id?: number;
  /**
   * Shop Id
   * @description Unique identifier of the e-commerce shop.
   */
  shop_id?: number;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_ECOMMERCE_CUSTOMER tool output.
 */
type MAILERLITE_GET_ECOMMERCE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description E-commerce customer detail object
   */
  data?: {
      /**
       * Accepts Marketing
       * @description Indicates if customer accepts marketing emails
       */
      accepts_marketing: boolean;
      /**
       * Email
       * @description Customer's email address
       */
      email: string;
      /**
       * Id
       * @description Unique identifier for the customer
       */
      id: string;
      /**
       * EcommerceSubscriber
       * @description Associated subscriber details, if any
       * @default null
       */
      subscriber: {
          /**
           * Click Rate
           * @description Click rate percentage as integer
           */
          click_rate: number;
          /**
           * Clicks Count
           * @description Number of times subscriber clicked links
           */
          clicks_count: number;
          /**
           * Created At
           * @description Record creation timestamp in 'YYYY-MM-DD HH:MM:SS' format
           */
          created_at: string;
          /**
           * Email
           * @description Subscriber's email address
           */
          email: string;
          /**
           * Fields
           * @description Custom fields associated with the subscriber
           */
          fields: {
              [key: string]: string | null;
          };
          /**
           * Groups
           * @description List of group IDs the subscriber belongs to
           */
          groups: string[];
          /**
           * Id
           * @description Subscriber's unique identifier
           */
          id: string;
          /**
           * Ip Address
           * @description IP address of the subscriber, if available
           * @default null
           */
          ip_address: string | null;
          /**
           * Open Rate
           * @description Open rate percentage as integer
           */
          open_rate: number;
          /**
           * Opens Count
           * @description Number of times subscriber opened emails
           */
          opens_count: number;
          /**
           * Opted In At
           * @description Opt-in timestamp in 'YYYY-MM-DD HH:MM:SS' format, if applicable
           * @default null
           */
          opted_in_at: string | null;
          /**
           * Optin Ip
           * @description IP address used for opt-in, if recorded
           * @default null
           */
          optin_ip: string | null;
          /**
           * Sent
           * @description Number of emails sent to the subscriber
           */
          sent: number;
          /**
           * Source
           * @description Source of the subscriber (e.g., api, webform)
           */
          source: string;
          /**
           * Status
           * @description Subscriber status
           * @enum {string}
           */
          status: "active" | "unsubscribed" | "unconfirmed" | "bounced" | "junk";
          /**
           * Subscribed At
           * @description Subscription timestamp in 'YYYY-MM-DD HH:MM:SS' format
           */
          subscribed_at: string;
          /**
           * Unsubscribed At
           * @description Unsubscription timestamp in 'YYYY-MM-DD HH:MM:SS' format, if unsubscribed
           * @default null
           */
          unsubscribed_at: string | null;
          /**
           * Updated At
           * @description Record last update timestamp in 'YYYY-MM-DD HH:MM:SS' format
           */
          updated_at: string;
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
 * Type of MAILERLITE's MAILERLITE_GET_ECOMMERCE_CUSTOMERS tool input.
 */
type MAILERLITE_GET_ECOMMERCE_CUSTOMERS_INPUT = {
  /**
   * Limit
   * @description Number of customers per page. Defaults to server-side default if not provided.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve. Defaults to 1 if not provided.
   * @default null
   */
  page: number | null;
  /**
   * Shop Id
   * @description Unique identifier of the e-commerce shop.
   */
  shop_id?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_ECOMMERCE_CUSTOMERS tool output.
 */
type MAILERLITE_GET_ECOMMERCE_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description List of customer objects
   */
  data?: {
      /**
       * Accepts Marketing
       * @description Indicates if the customer accepts marketing emails
       */
      accepts_marketing: boolean;
      /**
       * Created At
       * @description Timestamp when the customer was created
       * @default null
       */
      created_at: string | null;
      /**
       * Email
       * @description Customer email address
       */
      email: string;
      /**
       * Id
       * @description Customer unique identifier
       */
      id: string;
      /**
       * CustomerSubscriber
       * @description Subscriber details if customer is also a subscriber
       * @default null
       */
      subscriber: {
          /**
           * Click Rate
           * @description Click rate percentage as integer
           */
          click_rate: number;
          /**
           * Clicks Count
           * @description Total click events count
           */
          clicks_count: number;
          /**
           * Created At
           * @description Record creation timestamp
           * @default null
           */
          created_at: string | null;
          /**
           * Email
           * @description Subscriber email address
           */
          email: string;
          /**
           * Fields
           * @description Subscriber custom fields with key-value pairs
           * @default null
           */
          fields: {
              [key: string]: string | null;
          } | null;
          /**
           * Groups
           * @description List of group IDs the subscriber belongs to
           * @default null
           */
          groups: string[] | null;
          /**
           * Id
           * @description Subscriber unique identifier
           */
          id: string;
          /**
           * Ip Address
           * @description IP address of subscriber, if available
           * @default null
           */
          ip_address: string | null;
          /**
           * Open Rate
           * @description Open rate percentage as integer
           */
          open_rate: number;
          /**
           * Opens Count
           * @description Total open events count
           */
          opens_count: number;
          /**
           * Opted In At
           * @description Opt-in timestamp, if applicable
           * @default null
           */
          opted_in_at: string | null;
          /**
           * Optin Ip
           * @description IP address used for opt-in, if recorded
           * @default null
           */
          optin_ip: string | null;
          /**
           * Sent
           * @description Number of emails sent to subscriber
           */
          sent: number;
          /**
           * Source
           * @description Source of subscription
           */
          source: string;
          /**
           * Status
           * @description Subscriber status
           * @enum {string}
           */
          status: "active" | "unsubscribed" | "unconfirmed" | "bounced" | "junk";
          /**
           * Subscribed At
           * @description Subscription timestamp in 'YYYY-MM-DD HH:MM:SS' format
           * @default null
           */
          subscribed_at: string | null;
          /**
           * Unsubscribed At
           * @description Unsubscription timestamp in 'YYYY-MM-DD HH:MM:SS', if unsubscribed
           * @default null
           */
          unsubscribed_at: string | null;
          /**
           * Updated At
           * @description Record last update timestamp
           * @default null
           */
          updated_at: string | null;
      } | null;
      /**
       * Updated At
       * @description Timestamp when the customer was last updated
       * @default null
       */
      updated_at: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL to the first page
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description URL to the last page
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description URL to the next page, if any
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL to the previous page, if any
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Starting item number on current page
       */
      from: number;
      /**
       * Last Page
       * @description Total number of pages
       */
      last_page: number;
      /**
       * Links
       * @description Pagination link objects
       */
      links: {
          /**
           * Active
           * @description Indicates if this link is the current page
           */
          active: boolean;
          /**
           * Label
           * @description Label for the pagination link
           */
          label: string;
          /**
           * Url
           * @description URL of the page
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Path
       * @description Base path of the API endpoint
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * To
       * @description Ending item number on current page
       */
      to: number;
      /**
       * Total
       * @description Total number of items across all pages
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_ECOMMERCE_SHOP tool input.
 */
type MAILERLITE_GET_ECOMMERCE_SHOP_INPUT = {
  /**
   * Shop Id
   * @description Unique identifier of the e-commerce shop.
   */
  shop_id?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_ECOMMERCE_SHOP tool output.
 */
type MAILERLITE_GET_ECOMMERCE_SHOP_OUTPUT = {
  /**
   * Data
   * @description Details of the e-commerce shop.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the shop was created.
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code used by the shop.
       */
      currency: string;
      /**
       * Currency Sign
       * @description Currency symbol used by the shop.
       */
      currency_sign: string;
      /**
       * Enable Popups
       * @description Indicates if popups are enabled for the shop.
       */
      enable_popups: boolean;
      /**
       * Enabled
       * @description Indicates if the shop is enabled.
       */
      enabled: boolean;
      /**
       * Group
       * @description Group associated with the shop.
       * @default null
       */
      group: {
          /**
           * Click Rate
           * @description Click rate statistics for the group.
           */
          click_rate: {
              /**
               * Float
               * @description Click rate as a float.
               */
              float: number;
              /**
               * String
               * @description Click rate as a percentage string.
               */
              string: string;
          };
          /**
           * Created At
           * @description Timestamp when the group was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the group.
           */
          id: string;
          /**
           * Name
           * @description Name of the group.
           */
          name: string;
          /**
           * Open Rate
           * @description Open rate statistics for the group.
           */
          open_rate: {
              /**
               * Float
               * @description Open rate as a float.
               */
              float: number;
              /**
               * String
               * @description Open rate as a percentage string.
               */
              string: string;
          };
          /**
           * Total
           * @description Total number of members in the group.
           */
          total: number;
      } | null;
      /**
       * Id
       * @description Unique identifier for the shop.
       */
      id: string;
      /**
       * Name
       * @description Name of the shop.
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the shop was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description URL of the shop.
       */
      url: string;
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
 * Type of MAILERLITE's MAILERLITE_GET_ECOMMERCE_SHOPS tool input.
 */
type MAILERLITE_GET_ECOMMERCE_SHOPS_INPUT = {
  /**
   * Limit
   * @description Number of items per page. Defaults to 50 if not provided.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve. Defaults to 1 if not provided.
   * @default null
   */
  page: number | null;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_ECOMMERCE_SHOPS tool output.
 */
type MAILERLITE_GET_ECOMMERCE_SHOPS_OUTPUT = {
  /**
   * Data
   * @description List of e-commerce shops.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the shop was created.
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code used by the shop.
       */
      currency: string;
      /**
       * Currency Sign
       * @description Currency symbol used by the shop.
       */
      currency_sign: string;
      /**
       * Enable Popups
       * @description Indicates if popups are enabled for the shop.
       */
      enable_popups: boolean;
      /**
       * Enable Resubscribe
       * @description Indicates if resubscribe is enabled for the shop.
       * @default null
       */
      enable_resubscribe: boolean | null;
      /**
       * Enabled
       * @description Indicates if the shop is enabled.
       */
      enabled: boolean;
      /**
       * Group
       * @description Group associated with the shop.
       * @default null
       */
      group: {
          /**
           * Active Count
           * @description Count of active subscribers in the group.
           */
          active_count: number;
          /**
           * Bounced Count
           * @description Count of bounced emails.
           */
          bounced_count: number;
          /**
           * Click Rate
           * @description Click rate statistics for the group.
           */
          click_rate: {
              /**
               * Float
               * @description Click rate as a float.
               */
              float: number;
              /**
               * String
               * @description Click rate as percentage string.
               */
              string: string;
          };
          /**
           * Clicks Count
           * @description Total clicks count.
           */
          clicks_count: number;
          /**
           * Created At
           * @description Timestamp when the group was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the group.
           */
          id: string;
          /**
           * Junk Count
           * @description Count of junk marked.
           */
          junk_count: number;
          /**
           * Name
           * @description Name of the group.
           */
          name: string;
          /**
           * Open Rate
           * @description Open rate statistics for the group.
           */
          open_rate: {
              /**
               * Float
               * @description Open rate as a float.
               */
              float: number;
              /**
               * String
               * @description Open rate as percentage string.
               */
              string: string;
          };
          /**
           * Opens Count
           * @description Total opens count.
           */
          opens_count: number;
          /**
           * Sent Count
           * @description Total campaigns sent count.
           */
          sent_count: number;
          /**
           * Unconfirmed Count
           * @description Count of unconfirmed members.
           */
          unconfirmed_count: number;
          /**
           * Unsubscribed Count
           * @description Count of unsubscribed members.
           */
          unsubscribed_count: number;
      } | null;
      /**
       * Id
       * @description Unique identifier for the shop.
       */
      id: string;
      /**
       * Name
       * @description Name of the shop.
       */
      name: string;
      /**
       * Platform
       * @description Platform of the shop.
       * @default null
       */
      platform: string | null;
      /**
       * Updated At
       * @description Timestamp when the shop was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description URL of the shop.
       */
      url: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links.
   */
  links?: {
      /**
       * First
       * @description URL to the first page.
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description URL to the last page.
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description URL to the next page, if any.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL to the previous page, if any.
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number.
       */
      current_page: number;
      /**
       * From
       * @description Starting item number on current page.
       */
      from: number;
      /**
       * Last Page
       * @description Total number of pages.
       */
      last_page: number;
      /**
       * Links
       * @description Pagination link objects.
       */
      links: {
          /**
           * Active
           * @description Indicates if this link is the current page.
           */
          active: boolean;
          /**
           * Label
           * @description Label for the pagination link.
           */
          label: string;
          /**
           * Url
           * @description URL of the page.
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Path
       * @description Base path of the API endpoint.
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page.
       */
      per_page: number;
      /**
       * To
       * @description Ending item number on current page.
       */
      to: number;
      /**
       * Total
       * @description Total number of items across all pages.
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_FIELDS tool input.
 */
type MAILERLITE_GET_FIELDS_INPUT = {
  /**
   * Filter[Keyword]
   * @description Filter fields by keyword (matches name or key).
   * @default null
   */
  "filter[keyword]": string | null;
  /**
   * Filter[Type]
   * @description Filter fields by type; one of 'text', 'number', 'date'.
   * @default null
   * @enum {string|null}
   */
  "filter[type]": "text" | "number" | "date" | null;
  /**
   * Limit
   * @description Maximum number of fields to return.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve.
   * @default null
   */
  page: number | null;
  /**
   * Sort
   * @description Sort fields by 'name' or 'type'; prepend with '-' for descending order.
   * @default null
   * @enum {string|null}
   */
  sort: "name" | "type" | "-name" | "-type" | null;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_FIELDS tool output.
 */
type MAILERLITE_GET_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Array of field objects.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the field.
       */
      id: string;
      /**
       * Key
       * @description Unique key of the field.
       */
      key: string;
      /**
       * Name
       * @description Name of the field.
       */
      name: string;
      /**
       * Type
       * @description Type of the field; can be 'text', 'number', or 'date'.
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links.
   */
  links?: {
      /**
       * First
       * @description URL of the first page.
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description URL of the last page.
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description URL of the next page, if any.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page, if any.
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number.
       */
      current_page: number;
      /**
       * From
       * @description Starting item number on the current page.
       */
      from: number;
      /**
       * Last Page
       * @description Total number of pages.
       */
      last_page: number;
      /**
       * Links
       * @description Pagination link objects.
       */
      links: {
          /**
           * Active
           * @description Indicates if this link is the current page.
           */
          active: boolean;
          /**
           * Label
           * @description Label for the link.
           */
          label: string;
          /**
           * Url
           * @description URL of the page.
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Path
       * @description Base URL of the API endpoint.
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page.
       */
      per_page: number;
      /**
       * To
       * @description Ending item number on the current page.
       */
      to: number;
      /**
       * Total
       * @description Total number of items.
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_GROUPS tool input.
 */
type MAILERLITE_GET_GROUPS_INPUT = {
  /**
   * Filter[Name]
   * @description Filter groups by name; returns partial matches.
   * @default null
   */
  "filter[name]": string | null;
  /**
   * Limit
   * @description Maximum number of groups to return.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve (starting from 1).
   * @default null
   */
  page: number | null;
  /**
   * Sort
   * @description Sort results by field. Prepend with '-' for descending order.
   * @default null
   * @enum {string|null}
   */
  sort: "name" | "total" | "open_rate" | "click_rate" | "created_at" | "-name" | "-total" | "-open_rate" | "-click_rate" | "-created_at" | null;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_GROUPS tool output.
 */
type MAILERLITE_GET_GROUPS_OUTPUT = {
  /**
   * Data
   * @description List of group objects.
   */
  data?: {
      /**
       * Active Count
       * @description Number of active subscribers in the group.
       */
      active_count: number;
      /**
       * Bounced Count
       * @description Number of bounced emails in the group.
       */
      bounced_count: number;
      /**
       * Click Rate
       * @description Click rate statistics.
       */
      click_rate: {
          /**
           * Float
           * @description Click rate as a decimal.
           */
          float: number;
          /**
           * String
           * @description Click rate as a percentage string.
           */
          string: string;
      };
      /**
       * Clicks Count
       * @description Number of link clicks in the group emails.
       */
      clicks_count: number;
      /**
       * Created At
       * @description Timestamp when the group was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the group.
       */
      id: string;
      /**
       * Junk Count
       * @description Number of emails marked as junk in the group.
       */
      junk_count: number;
      /**
       * Name
       * @description Name of the group.
       */
      name: string;
      /**
       * Open Rate
       * @description Open rate statistics.
       */
      open_rate: {
          /**
           * Float
           * @description Open rate as a decimal.
           */
          float: number;
          /**
           * String
           * @description Open rate as a percentage string.
           */
          string: string;
      };
      /**
       * Opens Count
       * @description Number of times emails sent to the group were opened.
       */
      opens_count: number;
      /**
       * Sent Count
       * @description Number of emails sent to the group.
       */
      sent_count: number;
      /**
       * Unconfirmed Count
       * @description Number of unconfirmed subscribers in the group.
       */
      unconfirmed_count: number;
      /**
       * Unsubscribed Count
       * @description Number of subscribers who unsubscribed from the group.
       */
      unsubscribed_count: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links.
   */
  links?: {
      /**
       * First
       * @description URL to the first page of results.
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description URL to the last page of results.
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description URL to the next page of results.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL to the previous page of results.
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number.
       */
      current_page: number;
      /**
       * From
       * @description Starting index of the current page.
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Last page number.
       */
      last_page: number;
      /**
       * Links
       * @description Pagination link objects.
       */
      links: {
          /**
           * Active
           * @description Indicates if this link is for the current page.
           */
          active: boolean;
          /**
           * Label
           * @description Label for the pagination link.
           */
          label: string;
          /**
           * Url
           * @description URL of the page.
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Path
       * @description Base path of the API endpoint.
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page.
       */
      per_page: number;
      /**
       * To
       * @description Ending index of the current page.
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of groups.
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_GROUP_SUBSCRIBERS tool input.
 */
type MAILERLITE_GET_GROUP_SUBSCRIBERS_INPUT = {
  /**
   * Cursor
   * @description Cursor token for pagination (from meta.next_cursor).
   * @default null
   */
  cursor: string | null;
  /**
   * Filter[Status]
   * @description Filter subscribers by status: active, unsubscribed, unconfirmed, bounced, or junk.
   * @default null
   * @enum {string|null}
   */
  "filter[status]": "active" | "unsubscribed" | "unconfirmed" | "bounced" | "junk" | null;
  /**
   * Group Id
   * @description Unique identifier of the group.
   */
  group_id?: string;
  /**
   * Include
   * @description Include additional resources. Currently only 'groups'.
   * @default null
   * @constant
   */
  include: "groups";
  /**
   * Limit
   * @description Number of subscribers to return per page.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_GROUP_SUBSCRIBERS tool output.
 */
type MAILERLITE_GET_GROUP_SUBSCRIBERS_OUTPUT = {
  /**
   * Data
   * @description List of subscriber objects.
   */
  data?: {
      /**
       * Click Rate
       * @description Click rate percentage.
       */
      click_rate: number;
      /**
       * Clicks Count
       * @description Times subscriber clicked links.
       */
      clicks_count: number;
      /**
       * Created At
       * @description Timestamp when subscriber record was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Email
       * @description Subscriber email address.
       */
      email: string;
      /**
       * Fields
       * @description Custom fields associated with the subscriber.
       * @default null
       */
      fields: {
          [key: string]: string | number | boolean;
      } | null;
      /**
       * Id
       * @description Subscriber unique ID.
       */
      id: string;
      /**
       * Ip Address
       * @description Subscriber IP address.
       * @default null
       */
      ip_address: string | null;
      /**
       * Open Rate
       * @description Open rate percentage.
       */
      open_rate: number;
      /**
       * Opens Count
       * @description Times subscriber opened emails.
       */
      opens_count: number;
      /**
       * Opted In At
       * @description Timestamp when subscriber opted in.
       * @default null
       */
      opted_in_at: string | null;
      /**
       * Optin Ip
       * @description IP address used at opt-in.
       * @default null
       */
      optin_ip: string | null;
      /**
       * Sent
       * @description Number of emails sent to the subscriber.
       */
      sent: number;
      /**
       * Source
       * @description Origin of subscriber addition.
       */
      source: string;
      /**
       * Status
       * @description Subscriber status.
       */
      status: string;
      /**
       * Subscribed At
       * @description Timestamp when subscriber was added.
       * @default null
       */
      subscribed_at: string | null;
      /**
       * Unsubscribed At
       * @description Timestamp when subscriber unsubscribed.
       * @default null
       */
      unsubscribed_at: string | null;
      /**
       * Updated At
       * @description Timestamp when subscriber record was last updated.
       * @default null
       */
      updated_at: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links.
   */
  links?: {
      /**
       * First
       * @description URL of the first page.
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description URL of the last page.
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description URL of the next page.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page.
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Next Cursor
       * @description Cursor for the next page.
       * @default null
       */
      next_cursor: string | null;
      /**
       * Path
       * @description API endpoint path.
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page.
       */
      per_page: number;
      /**
       * Prev Cursor
       * @description Cursor for the previous page.
       * @default null
       */
      prev_cursor: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_SEGMENTS tool input.
 */
type MAILERLITE_GET_SEGMENTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of segments to return (max 250)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve (starting from 1)
   * @default null
   */
  page: number | null;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_SEGMENTS tool output.
 */
type MAILERLITE_GET_SEGMENTS_OUTPUT = {
  /**
   * Data
   * @description Array of segment objects
   */
  data?: {
      /**
       * Click Rate
       * @description Click rate statistics
       */
      click_rate: {
          /**
           * Float
           * @description Click rate as a float
           */
          float: number;
          /**
           * String
           * @description Click rate as a percentage string
           */
          string: string;
      };
      /**
       * Created At
       * @description Timestamp when the segment was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the segment
       */
      id: string;
      /**
       * Name
       * @description Name of the segment
       */
      name: string;
      /**
       * Open Rate
       * @description Open rate statistics
       */
      open_rate: {
          /**
           * Float
           * @description Open rate as a float
           */
          float: number;
          /**
           * String
           * @description Open rate as a percentage string
           */
          string: string;
      };
      /**
       * Total
       * @description Total number of subscribers in the segment
       */
      total: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description URL of the last page
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description URL of the next page, if any
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page, if any
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * From
       * @description Starting item number on the current page
       */
      from: number;
      /**
       * Last Page
       * @description Total number of pages
       */
      last_page: number;
      /**
       * Links
       * @description Pagination link objects
       */
      links: {
          /**
           * Active
           * @description Indicates if this link is the current page
           */
          active: boolean;
          /**
           * Label
           * @description Label for the link
           */
          label: string;
          /**
           * Url
           * @description URL of the page
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Path
       * @description Base path of the API endpoint
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * To
       * @description Ending item number on the current page
       */
      to: number;
      /**
       * Total
       * @description Total number of items
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_SUBSCRIBERS tool input.
 */
type MAILERLITE_GET_SUBSCRIBERS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for next page (from previous response meta.cursor).
   * @default null
   */
  cursor: string | null;
  /**
   * Filter[Status]
   * @description Filter subscribers by status: active, unsubscribed, unconfirmed, bounced, or junk.
   * @default null
   * @enum {string|null}
   */
  "filter[status]": "active" | "unsubscribed" | "unconfirmed" | "bounced" | "junk" | null;
  /**
   * Include
   * @description Include additional resources. Currently only 'groups'.
   * @default null
   * @constant
   */
  include: "groups";
  /**
   * Limit
   * @description Number of subscribers per page. Defaults to server default (usually 25).
   * @default null
   */
  limit: number | null;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_SUBSCRIBERS tool output.
 */
type MAILERLITE_GET_SUBSCRIBERS_OUTPUT = {
  /**
   * Data
   * @description List of subscriber objects.
   */
  data?: {
      /**
       * Click Rate
       * @description Click rate percentage.
       */
      click_rate: number;
      /**
       * Clicks Count
       * @description Number of clicks on links.
       */
      clicks_count: number;
      /**
       * Created At
       * @description Record creation timestamp.
       * @default null
       */
      created_at: string | null;
      /**
       * Email
       * @description Subscriber email address.
       */
      email: string;
      /**
       * Fields
       * @description Custom subscriber fields.
       * @default null
       */
      fields: {
          [key: string]: string | number | boolean | null;
      } | null;
      /**
       * Id
       * @description Unique subscriber ID.
       */
      id: string;
      /**
       * Ip Address
       * @description IP address of subscriber.
       * @default null
       */
      ip_address: string | null;
      /**
       * Open Rate
       * @description Open rate percentage.
       */
      open_rate: number;
      /**
       * Opens Count
       * @description Number of times opened.
       */
      opens_count: number;
      /**
       * Opted In At
       * @description Opt-in timestamp.
       * @default null
       */
      opted_in_at: string | null;
      /**
       * Optin Ip
       * @description IP address used during opt-in.
       * @default null
       */
      optin_ip: string | null;
      /**
       * Sent
       * @description Number of emails sent.
       */
      sent: number;
      /**
       * Source
       * @description Origin of the subscriber (e.g., 'api').
       */
      source: string;
      /**
       * Status
       * @description Subscriber status (active, unsubscribed, etc.).
       */
      status: string;
      /**
       * Subscribed At
       * @description Subscription timestamp.
       * @default null
       */
      subscribed_at: string | null;
      /**
       * Unsubscribed At
       * @description Unsubscription timestamp, if any.
       * @default null
       */
      unsubscribed_at: string | null;
      /**
       * Updated At
       * @description Record update timestamp.
       * @default null
       */
      updated_at: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links.
   */
  links?: {
      /**
       * First
       * @description First page URL.
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description Last page URL.
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description Next page URL, if any.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description Previous page URL, if any.
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Count
       * @description Number of items returned.
       * @default null
       */
      count: number | null;
      /**
       * Cursor
       * @description Cursor for next page.
       * @default null
       */
      cursor: string | null;
      /**
       * Limit
       * @description Items per page.
       * @default null
       */
      limit: number | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MAILERLITE's MAILERLITE_GET_WEBHOOKS tool input.
 */
type MAILERLITE_GET_WEBHOOKS_INPUT = object;

/**
 * Type of MAILERLITE's MAILERLITE_GET_WEBHOOKS tool output.
 */
type MAILERLITE_GET_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Array of webhook objects.
   */
  data?: {
      /**
       * Batchable
       * @description Whether the webhook uses batched deliveries.
       */
      batchable: boolean;
      /**
       * Created At
       * @description Timestamp when the webhook was created.
       */
      created_at: string;
      /**
       * Enabled
       * @description Whether the webhook is active.
       */
      enabled: boolean;
      /**
       * Events
       * @description List of events the webhook is subscribed to.
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier of the webhook.
       */
      id: string;
      /**
       * Name
       * @description Name of the webhook.
       * @default null
       */
      name: string | null;
      /**
       * Secret
       * @description Secret key used to sign webhook payloads.
       */
      secret: string;
      /**
       * Updated At
       * @description Timestamp when the webhook was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description Endpoint URL for the webhook.
       */
      url: string;
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
 * Type of MAILERLITE's MAILERLITE_SET_DOUBLE_OPTIN tool input.
 */
type MAILERLITE_SET_DOUBLE_OPTIN_INPUT = {
  /**
   * Double Opt In
   * @description Enable double opt-in for new subscribers if True, disable if False.
   */
  double_opt_in?: boolean;
};

/**
 * Type of MAILERLITE's MAILERLITE_SET_DOUBLE_OPTIN tool output.
 */
type MAILERLITE_SET_DOUBLE_OPTIN_OUTPUT = {
  /**
   * Data
   * @description Wrapper for the updated double opt-in setting.
   */
  data?: {
      /**
       * Double Opt In
       * @description Current double opt-in setting.
       */
      double_opt_in: boolean;
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
 * Type of MAILERLITE's MAILERLITE_UPDATE_ECOMMERCE_CUSTOMER tool input.
 */
type MAILERLITE_UPDATE_ECOMMERCE_CUSTOMER_INPUT = {
  /**
   * Accepts Marketing
   * @description True if the customer accepts marketing emails.
   * @default null
   */
  accepts_marketing: boolean | null;
  /**
   * Create Subscriber
   * @description If true, creates or associates a subscriber for this customer.
   * @default null
   */
  create_subscriber: boolean | null;
  /**
   * Customer Id
   * @description ID of the customer to update.
   */
  customer_id?: string;
  /**
   * Email
   * @description Valid email address of the customer.
   */
  email?: string;
  /**
   * Shop Id
   * @description ID of the e-commerce shop.
   */
  shop_id?: string;
  /**
   * Total Spent
   * @description Total amount the customer has spent in the shop.
   * @default null
   */
  total_spent: number | null;
};

/**
 * Type of MAILERLITE's MAILERLITE_UPDATE_ECOMMERCE_CUSTOMER tool output.
 */
type MAILERLITE_UPDATE_ECOMMERCE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Updated customer data object.
   */
  data?: {
      /**
       * Accepts Marketing
       * @description Indicates if customer accepts marketing emails.
       */
      accepts_marketing: boolean;
      /**
       * Created At
       * @description Customer record creation timestamp.
       */
      created_at: string;
      /**
       * Email
       * @description Customer's email address.
       */
      email: string;
      /**
       * Id
       * @description Customer ID.
       */
      id: string;
      /**
       * EcommerceCustomerSubscriber
       * @description Subscriber object associated with this customer, if any.
       * @default null
       */
      subscriber: {
          /**
           * Click Rate
           * @description Click rate percentage as a float.
           */
          click_rate: number;
          /**
           * Clicks Count
           * @description Total click events count.
           */
          clicks_count: number;
          /**
           * Created At
           * @description Record creation timestamp.
           */
          created_at: string;
          /**
           * Email
           * @description Subscriber's email address.
           */
          email: string;
          /**
           * Fields
           * @description Custom fields for the subscriber as key-value pairs.
           */
          fields: {
              [key: string]: string | null;
          };
          /**
           * Groups
           * @description List of group IDs the subscriber belongs to.
           */
          groups: string[];
          /**
           * Id
           * @description Unique identifier of the subscriber.
           */
          id: string;
          /**
           * Ip Address
           * @description IP address of the subscriber.
           * @default null
           */
          ip_address: string | null;
          /**
           * Open Rate
           * @description Open rate percentage as a float.
           */
          open_rate: number;
          /**
           * Opens Count
           * @description Total open events count.
           */
          opens_count: number;
          /**
           * Opted In At
           * @description Opt-in timestamp if applicable in 'YYYY-MM-DD HH:MM:SS' format.
           * @default null
           */
          opted_in_at: string | null;
          /**
           * Optin Ip
           * @description IP address used for opt-in if recorded.
           * @default null
           */
          optin_ip: string | null;
          /**
           * Sent
           * @description Number of emails sent to the subscriber.
           */
          sent: number;
          /**
           * Source
           * @description Source of the subscriber.
           */
          source: string;
          /**
           * Status
           * @description Subscriber status.
           */
          status: string;
          /**
           * Subscribed At
           * @description Subscription timestamp in 'YYYY-MM-DD HH:MM:SS' format.
           */
          subscribed_at: string;
          /**
           * Unsubscribed At
           * @description Unsubscription timestamp if applicable in 'YYYY-MM-DD HH:MM:SS' format.
           * @default null
           */
          unsubscribed_at: string | null;
          /**
           * Updated At
           * @description Record last update timestamp.
           */
          updated_at: string;
      } | null;
      /**
       * Updated At
       * @description Customer record last update timestamp.
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
 * Type of MAILERLITE's MAILERLITE_UPDATE_ECOMMERCE_SHOP tool input.
 */
type MAILERLITE_UPDATE_ECOMMERCE_SHOP_INPUT = {
  /**
   * Access Data
   * @description Platform-specific access credential for the shop
   * @default null
   */
  access_data: string | null;
  /**
   * Currency
   * @description ISO 4217 currency code that the shop uses
   */
  currency?: unknown;
  /**
   * Enable Popups
   * @description Enable popups for the shop; defaults to false
   * @default null
   */
  enable_popups: boolean | null;
  /**
   * Enabled
   * @description Enable e-commerce functionality for the shop; defaults to false
   * @default null
   */
  enabled: boolean | null;
  /**
   * Group Id
   * @description ID of the group that shop subscribers are automatically added to
   * @default null
   */
  group_id: number | null;
  /**
   * Name
   * @description Shop name
   */
  name?: string;
  /**
   * Platform
   * @description E-commerce platform of the shop (e.g., Shopify)
   * @default null
   */
  platform: string | null;
  /**
   * Shop Id
   * @description ID of the e-commerce shop to update
   */
  shop_id?: string;
  /**
   * Url
   * Format: uri
   * @description Shop URL address
   */
  url?: unknown;
};

/**
 * Type of MAILERLITE's MAILERLITE_UPDATE_ECOMMERCE_SHOP tool output.
 */
type MAILERLITE_UPDATE_ECOMMERCE_SHOP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the shop was created
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code used by the shop
       */
      currency: string;
      /**
       * Currency Sign
       * @description Currency symbol used by the shop
       */
      currency_sign: string;
      /**
       * Enable Popups
       * @description Indicates if popups are enabled for the shop
       */
      enable_popups: boolean;
      /**
       * Enabled
       * @description Indicates if the shop is enabled
       */
      enabled: boolean;
      /**
       * Group
       * @description Group associated with the shop
       * @default null
       */
      group: {
          /**
           * Click Rate
           * @description Click rate statistics for the group
           */
          click_rate: {
              /**
               * Float
               * @description Click rate as a float
               */
              float: number;
              /**
               * String
               * @description Click rate as a string
               */
              string: string;
          };
          /**
           * Created At
           * @description Timestamp when the group was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the group
           */
          id: string;
          /**
           * Name
           * @description Name of the group
           */
          name: string;
          /**
           * Open Rate
           * @description Open rate statistics for the group
           */
          open_rate: {
              /**
               * Float
               * @description Open rate as a float
               */
              float: number;
              /**
               * String
               * @description Open rate as a string
               */
              string: string;
          };
          /**
           * Total
           * @description Total number of members in the group
           */
          total: number;
      } | null;
      /**
       * Id
       * @description Shop ID
       */
      id: string;
      /**
       * Name
       * @description Shop name
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the shop was last updated
       */
      updated_at: string;
      /**
       * Url
       * @description Shop URL address
       */
      url: string;
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
 * Type of MAILERLITE's MAILERLITE_UPDATE_FIELD tool input.
 */
type MAILERLITE_UPDATE_FIELD_INPUT = {
  /**
   * Field Id
   * @description ID of the custom field to update
   */
  field_id?: string;
  /**
   * Name
   * @description New name for the custom field (max 255 characters)
   */
  name?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_UPDATE_FIELD tool output.
 */
type MAILERLITE_UPDATE_FIELD_OUTPUT = {
  /**
   * Data
   * @description Updated field details
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the field
       */
      id: string;
      /**
       * Key
       * @description System key for referencing the field
       */
      key: string;
      /**
       * Name
       * @description Name of the field
       */
      name: string;
      /**
       * Type
       * @description Type of the field: text, number, or date
       * @enum {string}
       */
      type: "text" | "number" | "date";
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
 * Type of MAILERLITE's MAILERLITE_UPDATE_GROUP tool input.
 */
type MAILERLITE_UPDATE_GROUP_INPUT = {
  /**
   * Id
   * @description Group's unique identifier
   */
  id?: string;
  /**
   * Name
   * @description New name for the group (max 255 characters)
   */
  name?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_UPDATE_GROUP tool output.
 */
type MAILERLITE_UPDATE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Details of a subscriber group.
   */
  data?: {
      /**
       * Active Count
       * @description Count of active subscribers in the group.
       */
      active_count: number;
      /**
       * Bounced Count
       * @description Count of bounced emails.
       */
      bounced_count: number;
      /**
       * Click Rate
       * @description Click rate statistics.
       */
      click_rate: {
          /**
           * Float
           * @description Rate as a decimal number.
           */
          float: number;
          /**
           * String
           * @description Rate as a percentage string, e.g. '20%'.
           */
          string: string;
      };
      /**
       * Clicks Count
       * @description Total clicks count.
       */
      clicks_count: number;
      /**
       * Created At
       * @description Timestamp when the group was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the group.
       */
      id: string;
      /**
       * Junk Count
       * @description Count of junk marked.
       */
      junk_count: number;
      /**
       * Name
       * @description Name of the group.
       */
      name: string;
      /**
       * Open Rate
       * @description Open rate statistics.
       */
      open_rate: {
          /**
           * Float
           * @description Rate as a decimal number.
           */
          float: number;
          /**
           * String
           * @description Rate as a percentage string, e.g. '20%'.
           */
          string: string;
      };
      /**
       * Opens Count
       * @description Total opens count.
       */
      opens_count: number;
      /**
       * Sent Count
       * @description Total campaigns sent count.
       */
      sent_count: number;
      /**
       * Unconfirmed Count
       * @description Count of unconfirmed members.
       */
      unconfirmed_count: number;
      /**
       * Unsubscribed Count
       * @description Count of unsubscribed members.
       */
      unsubscribed_count: number;
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
 * Type of MAILERLITE's MAILERLITE_UPDATE_SEGMENT tool input.
 */
type MAILERLITE_UPDATE_SEGMENT_INPUT = {
  /**
   * Id
   * @description Segment's unique identifier
   */
  id?: string;
  /**
   * Name
   * @description New name for the segment (max 255 characters)
   */
  name?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_UPDATE_SEGMENT tool output.
 */
type MAILERLITE_UPDATE_SEGMENT_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Click Rate
       * @description Click rate statistics for the segment
       */
      click_rate: {
          /**
           * Float
           * @description Click rate as a decimal
           */
          float: number;
          /**
           * String
           * @description Click rate as a percentage string
           */
          string: string;
      };
      /**
       * Created At
       * @description Timestamp when the segment was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the segment
       */
      id: string;
      /**
       * Name
       * @description Updated name of the segment
       */
      name: string;
      /**
       * Open Rate
       * @description Open rate statistics for the segment
       */
      open_rate: {
          /**
           * Float
           * @description Open rate as a decimal
           */
          float: number;
          /**
           * String
           * @description Open rate as a percentage string
           */
          string: string;
      };
      /**
       * Total
       * @description Total number of subscribers in the segment
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
 * Type of MAILERLITE's MAILERLITE_UPDATE_SUBSCRIBER tool input.
 */
type MAILERLITE_UPDATE_SUBSCRIBER_INPUT = {
  /**
   * Fields
   * @description Mapping of field names to values; omissions do not remove fields.
   * @default null
   */
  fields: {
      [key: string]: string;
  } | null;
  /**
   * Groups
   * @description List of group IDs to assign; subscriber will be removed from others.
   * @default null
   */
  groups: string[] | null;
  /**
   * Id
   * @description Subscriber's unique identifier
   */
  id?: string;
  /**
   * Ip Address
   * @description IP address for subscription record.
   * @default null
   */
  ip_address: string | null;
  /**
   * Opted In At
   * @description Opt-in timestamp in 'YYYY-MM-DD HH:MM:SS' format.
   * @default null
   */
  opted_in_at: string | null;
  /**
   * Optin Ip
   * @description IP address used when subscriber opted in.
   * @default null
   */
  optin_ip: string | null;
  /**
   * Status
   * @description Subscriber status.
   * @default null
   * @enum {string|null}
   */
  status: "active" | "unsubscribed" | "unconfirmed" | "bounced" | "junk" | null;
  /**
   * Subscribed At
   * @description Custom subscription timestamp in 'YYYY-MM-DD HH:MM:SS' format.
   * @default null
   */
  subscribed_at: string | null;
  /**
   * Unsubscribed At
   * @description Unsubscription timestamp in 'YYYY-MM-DD HH:MM:SS' format.
   * @default null
   */
  unsubscribed_at: string | null;
};

/**
 * Type of MAILERLITE's MAILERLITE_UPDATE_SUBSCRIBER tool output.
 */
type MAILERLITE_UPDATE_SUBSCRIBER_OUTPUT = {
  /**
   * Data
   * @description Updated subscriber object
   */
  data?: {
      /**
       * Click Rate
       * @description Click rate percentage as integer
       */
      click_rate: number;
      /**
       * Clicks Count
       * @description Number of click events
       */
      clicks_count: number;
      /**
       * Created At
       * @description Record creation timestamp
       */
      created_at: string;
      /**
       * Email
       * @description Subscriber's email address
       */
      email: string;
      /**
       * Fields
       * @description Custom fields key-value pairs
       */
      fields: {
          [key: string]: string | null;
      };
      /**
       * Groups
       * @description Group IDs subscriber belongs to
       */
      groups: string[];
      /**
       * Id
       * @description Subscriber's unique ID
       */
      id: string;
      /**
       * Ip Address
       * @description Subscriber IP address if available
       * @default null
       */
      ip_address: string | null;
      /**
       * Open Rate
       * @description Open rate percentage as integer
       */
      open_rate: number;
      /**
       * Opens Count
       * @description Number of open events
       */
      opens_count: number;
      /**
       * Opted In At
       * @description Opt-in timestamp if recorded
       * @default null
       */
      opted_in_at: string | null;
      /**
       * Optin Ip
       * @description IP address used for opt-in if recorded
       * @default null
       */
      optin_ip: string | null;
      /**
       * Sent
       * @description Number of emails sent
       */
      sent: number;
      /**
       * Source
       * @description Source of subscription
       */
      source: string;
      /**
       * Status
       * @description Subscriber status
       * @enum {string}
       */
      status: "active" | "unsubscribed" | "unconfirmed" | "bounced" | "junk";
      /**
       * Subscribed At
       * @description Subscription timestamp
       * @default null
       */
      subscribed_at: string | null;
      /**
       * Unsubscribed At
       * @description Unsubscription timestamp
       * @default null
       */
      unsubscribed_at: string | null;
      /**
       * Updated At
       * @description Last update timestamp
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
 * Type of MAILERLITE's MAILERLITE_UPDATE_WEBHOOK tool input.
 */
type MAILERLITE_UPDATE_WEBHOOK_INPUT = {
  /**
   * Batchable
   * @description Whether the webhook should use batched deliveries
   * @default null
   */
  batchable: boolean | null;
  /**
   * Enabled
   * @description Whether the webhook should be active; defaults to current setting
   * @default null
   */
  enabled: boolean | null;
  /**
   * Events
   * @description List of events to subscribe to; choose from available webhook events
   */
  events?: string[];
  /**
   * Name
   * @description Optional new name for the webhook
   * @default null
   */
  name: string | null;
  /**
   * Url
   * Format: uri
   * @description Endpoint URL where webhook notifications will be sent
   */
  url?: unknown;
  /**
   * Webhook Id
   * @description ID of the webhook to update
   */
  webhook_id?: string;
};

/**
 * Type of MAILERLITE's MAILERLITE_UPDATE_WEBHOOK tool output.
 */
type MAILERLITE_UPDATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Schema for a MailerLite webhook resource.
   */
  data?: {
      /**
       * Batchable
       * @description Whether the webhook uses batched deliveries.
       */
      batchable: boolean;
      /**
       * Created At
       * @description Timestamp when the webhook was created.
       */
      created_at: string;
      /**
       * Enabled
       * @description Whether the webhook is active.
       */
      enabled: boolean;
      /**
       * Events
       * @description Events subscribed to by the webhook.
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier of the webhook.
       */
      id: string;
      /**
       * Name
       * @description Name of the webhook.
       * @default null
       */
      name: string | null;
      /**
       * Secret
       * @description Secret key used to sign webhook payloads.
       */
      secret: string;
      /**
       * Updated At
       * @description Timestamp when the webhook was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description Endpoint URL for the webhook.
       */
      url: string;
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
 * Type map of all available tool input types for toolkit "MAILERLITE".
 */
export type MAILERLITE_TOOL_INPUTS = {
  CREATE_AUTOMATION: MAILERLITE_CREATE_AUTOMATION_INPUT
  CREATE_ECOMMERCE_CUSTOMER: MAILERLITE_CREATE_ECOMMERCE_CUSTOMER_INPUT
  CREATE_ECOMMERCE_SHOP: MAILERLITE_CREATE_ECOMMERCE_SHOP_INPUT
  CREATE_FIELD: MAILERLITE_CREATE_FIELD_INPUT
  CREATE_GROUP: MAILERLITE_CREATE_GROUP_INPUT
  CREATE_SEGMENT: MAILERLITE_CREATE_SEGMENT_INPUT
  CREATE_WEBHOOK: MAILERLITE_CREATE_WEBHOOK_INPUT
  DELETE_AUTOMATION: MAILERLITE_DELETE_AUTOMATION_INPUT
  DELETE_ECOMMERCE_CUSTOMER: MAILERLITE_DELETE_ECOMMERCE_CUSTOMER_INPUT
  DELETE_ECOMMERCE_SHOP: MAILERLITE_DELETE_ECOMMERCE_SHOP_INPUT
  DELETE_FIELD: MAILERLITE_DELETE_FIELD_INPUT
  DELETE_GROUP: MAILERLITE_DELETE_GROUP_INPUT
  DELETE_SEGMENT: MAILERLITE_DELETE_SEGMENT_INPUT
  DELETE_SUBSCRIBER: MAILERLITE_DELETE_SUBSCRIBER_INPUT
  DELETE_WEBHOOK: MAILERLITE_DELETE_WEBHOOK_INPUT
  FETCH_TOTAL_ECOMMERCE_CUSTOMERS_COUNT: MAILERLITE_FETCH_TOTAL_ECOMMERCE_CUSTOMERS_COUNT_INPUT
  GET_ACCOUNT_INFO: MAILERLITE_GET_ACCOUNT_INFO_INPUT
  GET_ACCOUNT_STATS: MAILERLITE_GET_ACCOUNT_STATS_INPUT
  GET_AUTOMATION: MAILERLITE_GET_AUTOMATION_INPUT
  GET_CAMPAIGNS: MAILERLITE_GET_CAMPAIGNS_INPUT
  GET_ECOMMERCE_CUSTOMER: MAILERLITE_GET_ECOMMERCE_CUSTOMER_INPUT
  GET_ECOMMERCE_CUSTOMERS: MAILERLITE_GET_ECOMMERCE_CUSTOMERS_INPUT
  GET_ECOMMERCE_SHOP: MAILERLITE_GET_ECOMMERCE_SHOP_INPUT
  GET_ECOMMERCE_SHOPS: MAILERLITE_GET_ECOMMERCE_SHOPS_INPUT
  GET_FIELDS: MAILERLITE_GET_FIELDS_INPUT
  GET_GROUPS: MAILERLITE_GET_GROUPS_INPUT
  GET_GROUP_SUBSCRIBERS: MAILERLITE_GET_GROUP_SUBSCRIBERS_INPUT
  GET_SEGMENTS: MAILERLITE_GET_SEGMENTS_INPUT
  GET_SUBSCRIBERS: MAILERLITE_GET_SUBSCRIBERS_INPUT
  GET_WEBHOOKS: MAILERLITE_GET_WEBHOOKS_INPUT
  SET_DOUBLE_OPTIN: MAILERLITE_SET_DOUBLE_OPTIN_INPUT
  UPDATE_ECOMMERCE_CUSTOMER: MAILERLITE_UPDATE_ECOMMERCE_CUSTOMER_INPUT
  UPDATE_ECOMMERCE_SHOP: MAILERLITE_UPDATE_ECOMMERCE_SHOP_INPUT
  UPDATE_FIELD: MAILERLITE_UPDATE_FIELD_INPUT
  UPDATE_GROUP: MAILERLITE_UPDATE_GROUP_INPUT
  UPDATE_SEGMENT: MAILERLITE_UPDATE_SEGMENT_INPUT
  UPDATE_SUBSCRIBER: MAILERLITE_UPDATE_SUBSCRIBER_INPUT
  UPDATE_WEBHOOK: MAILERLITE_UPDATE_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MAILERLITE".
 */
export type MAILERLITE_TOOL_OUTPUTS = {
  CREATE_AUTOMATION: MAILERLITE_CREATE_AUTOMATION_OUTPUT
  CREATE_ECOMMERCE_CUSTOMER: MAILERLITE_CREATE_ECOMMERCE_CUSTOMER_OUTPUT
  CREATE_ECOMMERCE_SHOP: MAILERLITE_CREATE_ECOMMERCE_SHOP_OUTPUT
  CREATE_FIELD: MAILERLITE_CREATE_FIELD_OUTPUT
  CREATE_GROUP: MAILERLITE_CREATE_GROUP_OUTPUT
  CREATE_SEGMENT: MAILERLITE_CREATE_SEGMENT_OUTPUT
  CREATE_WEBHOOK: MAILERLITE_CREATE_WEBHOOK_OUTPUT
  DELETE_AUTOMATION: MAILERLITE_DELETE_AUTOMATION_OUTPUT
  DELETE_ECOMMERCE_CUSTOMER: MAILERLITE_DELETE_ECOMMERCE_CUSTOMER_OUTPUT
  DELETE_ECOMMERCE_SHOP: MAILERLITE_DELETE_ECOMMERCE_SHOP_OUTPUT
  DELETE_FIELD: MAILERLITE_DELETE_FIELD_OUTPUT
  DELETE_GROUP: MAILERLITE_DELETE_GROUP_OUTPUT
  DELETE_SEGMENT: MAILERLITE_DELETE_SEGMENT_OUTPUT
  DELETE_SUBSCRIBER: MAILERLITE_DELETE_SUBSCRIBER_OUTPUT
  DELETE_WEBHOOK: MAILERLITE_DELETE_WEBHOOK_OUTPUT
  FETCH_TOTAL_ECOMMERCE_CUSTOMERS_COUNT: MAILERLITE_FETCH_TOTAL_ECOMMERCE_CUSTOMERS_COUNT_OUTPUT
  GET_ACCOUNT_INFO: MAILERLITE_GET_ACCOUNT_INFO_OUTPUT
  GET_ACCOUNT_STATS: MAILERLITE_GET_ACCOUNT_STATS_OUTPUT
  GET_AUTOMATION: MAILERLITE_GET_AUTOMATION_OUTPUT
  GET_CAMPAIGNS: MAILERLITE_GET_CAMPAIGNS_OUTPUT
  GET_ECOMMERCE_CUSTOMER: MAILERLITE_GET_ECOMMERCE_CUSTOMER_OUTPUT
  GET_ECOMMERCE_CUSTOMERS: MAILERLITE_GET_ECOMMERCE_CUSTOMERS_OUTPUT
  GET_ECOMMERCE_SHOP: MAILERLITE_GET_ECOMMERCE_SHOP_OUTPUT
  GET_ECOMMERCE_SHOPS: MAILERLITE_GET_ECOMMERCE_SHOPS_OUTPUT
  GET_FIELDS: MAILERLITE_GET_FIELDS_OUTPUT
  GET_GROUPS: MAILERLITE_GET_GROUPS_OUTPUT
  GET_GROUP_SUBSCRIBERS: MAILERLITE_GET_GROUP_SUBSCRIBERS_OUTPUT
  GET_SEGMENTS: MAILERLITE_GET_SEGMENTS_OUTPUT
  GET_SUBSCRIBERS: MAILERLITE_GET_SUBSCRIBERS_OUTPUT
  GET_WEBHOOKS: MAILERLITE_GET_WEBHOOKS_OUTPUT
  SET_DOUBLE_OPTIN: MAILERLITE_SET_DOUBLE_OPTIN_OUTPUT
  UPDATE_ECOMMERCE_CUSTOMER: MAILERLITE_UPDATE_ECOMMERCE_CUSTOMER_OUTPUT
  UPDATE_ECOMMERCE_SHOP: MAILERLITE_UPDATE_ECOMMERCE_SHOP_OUTPUT
  UPDATE_FIELD: MAILERLITE_UPDATE_FIELD_OUTPUT
  UPDATE_GROUP: MAILERLITE_UPDATE_GROUP_OUTPUT
  UPDATE_SEGMENT: MAILERLITE_UPDATE_SEGMENT_OUTPUT
  UPDATE_SUBSCRIBER: MAILERLITE_UPDATE_SUBSCRIBER_OUTPUT
  UPDATE_WEBHOOK: MAILERLITE_UPDATE_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MAILERLITE toolkit.
 */
export const MAILERLITE = {
  slug: "mailerlite",
  tools: {
    /**
     * Create automation
     */
    CREATE_AUTOMATION: "MAILERLITE_CREATE_AUTOMATION",
    /**
     * Tool to create or update a customer record for a shop. use when syncing shop customers or onboarding new purchases.
     */
    CREATE_ECOMMERCE_CUSTOMER: "MAILERLITE_CREATE_ECOMMERCE_CUSTOMER",
    /**
     * Tool to connect a new e-commerce shop. use when you need to integrate a store for automations, product imports, and sales tracking.
     */
    CREATE_ECOMMERCE_SHOP: "MAILERLITE_CREATE_ECOMMERCE_SHOP",
    /**
     * Tool to create a new custom field. use when distinct subscriber attributes are needed before assigning or updating subscriber data. call once per field key.
     */
    CREATE_FIELD: "MAILERLITE_CREATE_FIELD",
    /**
     * Tool to create a new subscriber group. use after deciding the group name for categorization.
     */
    CREATE_GROUP: "MAILERLITE_CREATE_GROUP",
    /**
     * Tool to create a new subscriber segment. use when grouping subscribers by custom criteria before sending targeted campaigns.
     */
    CREATE_SEGMENT: "MAILERLITE_CREATE_SEGMENT",
    /**
     * Tool to register a new webhook url for specified event types. use when you need real-time notifications for selected mailerlite events.
     */
    CREATE_WEBHOOK: "MAILERLITE_CREATE_WEBHOOK",
    /**
     * Tool to delete an automation workflow by id. use when you need to remove an automation after confirming it's no longer needed. returns success=true on 204 no content.
     */
    DELETE_AUTOMATION: "MAILERLITE_DELETE_AUTOMATION",
    /**
     * Tool to delete a customer from an e-commerce shop by ids. use when you need to remove a specific customer from your mailerlite store.
     */
    DELETE_ECOMMERCE_CUSTOMER: "MAILERLITE_DELETE_ECOMMERCE_CUSTOMER",
    /**
     * Tool to disconnect an e-commerce shop by id. use when you have the shop's unique identifier and want to remove it from your mailerlite account.
     */
    DELETE_ECOMMERCE_SHOP: "MAILERLITE_DELETE_ECOMMERCE_SHOP",
    /**
     * Tool to delete a custom field. use when a field is obsolete and you need to remove it from your mailerlite account. returns success=true on 204 no content.
     */
    DELETE_FIELD: "MAILERLITE_DELETE_FIELD",
    /**
     * Tool to delete a subscriber group by id. use when you need to remove an existing subscriber group from your mailerlite account. returns success=true on 204 no content.
     */
    DELETE_GROUP: "MAILERLITE_DELETE_GROUP",
    /**
     * Tool to delete a segment by id. use when you need to remove an existing segment from your mailerlite account. returns success=true on 204 no content.
     */
    DELETE_SEGMENT: "MAILERLITE_DELETE_SEGMENT",
    /**
     * Tool to delete a subscriber by id. use when you have the subscriber id and want to remove them from your mailerlite account. returns success=true on 204 no content.
     */
    DELETE_SUBSCRIBER: "MAILERLITE_DELETE_SUBSCRIBER",
    /**
     * Tool to remove a webhook subscription by id. use when you need to delete a webhook after confirming it is no longer needed. returns success=true on 204 no content.
     */
    DELETE_WEBHOOK: "MAILERLITE_DELETE_WEBHOOK",
    /**
     * Tool to fetch total ecommerce customers count for a shop. use when only the aggregate count is required without retrieving detailed records.
     */
    FETCH_TOTAL_ECOMMERCE_CUSTOMERS_COUNT: "MAILERLITE_FETCH_TOTAL_ECOMMERCE_CUSTOMERS_COUNT",
    /**
     * Tool to retrieve basic mailerlite account details. use when you need to verify authentication and review account metadata.
     */
    GET_ACCOUNT_INFO: "MAILERLITE_GET_ACCOUNT_INFO",
    /**
     * Tool to retrieve usage statistics and performance metrics for the account. use after sending campaigns to analyze engagement and deliverability.
     */
    GET_ACCOUNT_STATS: "MAILERLITE_GET_ACCOUNT_STATS",
    /**
     * Tool to retrieve details of a specific automation by id. use when you have the automation id and need its full configuration. example: "get automation 7267552".
     */
    GET_AUTOMATION: "MAILERLITE_GET_AUTOMATION",
    /**
     * Tool to retrieve a list of all campaigns. use when you need to fetch campaigns optionally filtered by status or type, with pagination.
     */
    GET_CAMPAIGNS: "MAILERLITE_GET_CAMPAIGNS",
    /**
     * Tool to fetch details of a customer by shop and customer id. use after confirming shop id and customer id.
     */
    GET_ECOMMERCE_CUSTOMER: "MAILERLITE_GET_ECOMMERCE_CUSTOMER",
    /**
     * Tool to list customers for a specific shop. use when you need to retrieve and paginate ecommerce customers after you have a shop id. example: "list customers for shop 123".
     */
    GET_ECOMMERCE_CUSTOMERS: "MAILERLITE_GET_ECOMMERCE_CUSTOMERS",
    /**
     * Tool to fetch details of a specific e-commerce shop by id. use when you need detailed configuration or stats of a connected shop.
     */
    GET_ECOMMERCE_SHOP: "MAILERLITE_GET_ECOMMERCE_SHOP",
    /**
     * Tool to list all e-commerce shops connected to the account. use when you need to retrieve and paginate shop listings for an account.
     */
    GET_ECOMMERCE_SHOPS: "MAILERLITE_GET_ECOMMERCE_SHOPS",
    /**
     * Tool to retrieve all custom fields defined in the account. use when you need to list or paginate through subscriber custom fields.
     */
    GET_FIELDS: "MAILERLITE_GET_FIELDS",
    /**
     * Tool to retrieve all subscriber groups. use when you need to list or paginate through subscriber groups.
     */
    GET_GROUPS: "MAILERLITE_GET_GROUPS",
    /**
     * Tool to list subscribers within a group by id. use when you need to retrieve subscribers belonging to a specific mailerlite group before targeted campaigns. use after confirming the group id is valid.
     */
    GET_GROUP_SUBSCRIBERS: "MAILERLITE_GET_GROUP_SUBSCRIBERS",
    /**
     * Tool to retrieve all segments in the account. use when you need to list or paginate through segments.
     */
    GET_SEGMENTS: "MAILERLITE_GET_SEGMENTS",
    /**
     * Tool to retrieve all subscribers. use after connecting account and when listing subscribers by status or paginating. limited by mailerlite connect api quotas.
     */
    GET_SUBSCRIBERS: "MAILERLITE_GET_SUBSCRIBERS",
    /**
     * Tool to retrieve all configured webhooks. use when you need to list webhooks for your mailerlite account.
     */
    GET_WEBHOOKS: "MAILERLITE_GET_WEBHOOKS",
    /**
     * Tool to enable or disable double opt-in for new subscribers. use when configuring subscription confirmation settings.
     */
    SET_DOUBLE_OPTIN: "MAILERLITE_SET_DOUBLE_OPTIN",
    /**
     * Tool to update a customer's data for a shop by ids. use when you need to change email, marketing opt-in, or spend totals for an existing customer.
     */
    UPDATE_ECOMMERCE_CUSTOMER: "MAILERLITE_UPDATE_ECOMMERCE_CUSTOMER",
    /**
     * Tool to update settings of a connected e-commerce shop by id. use when you need to modify shop details (name, url, currency) or toggle features after verifying the shop exists.
     */
    UPDATE_ECOMMERCE_SHOP: "MAILERLITE_UPDATE_ECOMMERCE_SHOP",
    /**
     * Tool to update the title of an existing custom field. use when renaming a field label (e.g., correct typos or rebranding).
     */
    UPDATE_FIELD: "MAILERLITE_UPDATE_FIELD",
    /**
     * Tool to update a group's name by id. use when renaming an existing group after confirming its id.
     */
    UPDATE_GROUP: "MAILERLITE_UPDATE_GROUP",
    /**
     * Tool to rename an existing segment by id. use when you need to update a segment's name after confirming its id.
     */
    UPDATE_SEGMENT: "MAILERLITE_UPDATE_SEGMENT",
    /**
     * Tool to update an existing subscriber's information by id. use when altering subscriber details.
     */
    UPDATE_SUBSCRIBER: "MAILERLITE_UPDATE_SUBSCRIBER",
    /**
     * Tool to update an existing mailerlite webhook. use when you need to change its url or event triggers by id.
     */
    UPDATE_WEBHOOK: "MAILERLITE_UPDATE_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MAILERLITE".
 */
export type MAILERLITE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MAILERLITE".
 */
export type MAILERLITE_TRIGGER_EVENTS = {}
