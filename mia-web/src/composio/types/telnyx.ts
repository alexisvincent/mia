// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TELNYX's TELNYX_CREATE_NETWORK tool input.
 */
type TELNYX_CREATE_NETWORK_INPUT = {
  /**
   * Name
   * @description A user-specified name for the network. Must be unique within your Telnyx account.
   */
  name?: string;
};

/**
 * Type of TELNYX's TELNYX_CREATE_NETWORK tool output.
 */
type TELNYX_CREATE_NETWORK_OUTPUT = {
  /**
   * Data
   * @description Details of the newly created network.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the network was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the network.
       */
      id: string;
      /**
       * Name
       * @description Name of the network.
       */
      name: string;
      /**
       * Record Type
       * @description Record type of the resource (should be 'network').
       */
      record_type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the network was last updated.
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
 * Type of TELNYX's TELNYX_CREATE_NOTIFICATION_CHANNEL tool input.
 */
type TELNYX_CREATE_NOTIFICATION_CHANNEL_INPUT = {
  /**
   * Channel Destination
   * @description Destination for the channel (e.g., phone number, email address, or webhook URL).
   */
  channel_destination?: string;
  /**
   * Channel Type Id
   * @description Type of channel. Must be one of 'sms', 'voice', 'email', or 'webhook'.
   * @enum {string}
   */
  channel_type_id?: "sms" | "voice" | "email" | "webhook";
  /**
   * Notification Profile Id
   * @description A UUID reference to the associated Notification Profile.
   */
  notification_profile_id?: string;
};

/**
 * Type of TELNYX's TELNYX_CREATE_NOTIFICATION_CHANNEL tool output.
 */
type TELNYX_CREATE_NOTIFICATION_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Response data containing the created notification channel.
   */
  data?: {
      /**
       * Channel Destination
       * @description Destination associated with the channel.
       */
      channel_destination: string;
      /**
       * Channel Type Id
       * @description Type of the created channel.
       * @enum {string}
       */
      channel_type_id: "sms" | "voice" | "email" | "webhook";
      /**
       * Created At
       * @description ISO 8601 timestamp when the channel was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique channel UUID.
       */
      id: string;
      /**
       * Notification Profile Id
       * @description UUID of the Notification Profile this channel belongs to.
       */
      notification_profile_id: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the channel was last updated.
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
 * Type of TELNYX's TELNYX_CREATE_NOTIFICATION_PROFILE tool input.
 */
type TELNYX_CREATE_NOTIFICATION_PROFILE_INPUT = {
  /**
   * Name
   * @description A human-readable name for the notification profile.
   */
  name?: string;
};

/**
 * Type of TELNYX's TELNYX_CREATE_NOTIFICATION_PROFILE tool output.
 */
type TELNYX_CREATE_NOTIFICATION_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Response data containing the created notification profile.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the profile was created.
       */
      created_at: string;
      /**
       * Id
       * @description A UUID representing the notification profile.
       */
      id: string;
      /**
       * Name
       * @description The human-readable name of the notification profile.
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the profile was last updated.
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
 * Type of TELNYX's TELNYX_CREATE_NOTIFICATION_SETTING tool input.
 */
type TELNYX_CREATE_NOTIFICATION_SETTING_INPUT = {
  /**
   * Notification Channel Id
   * @description UUID reference to the associated Notification Channel.
   */
  notification_channel_id?: string;
  /**
   * Notification Event Condition Id
   * @description UUID reference to the associated Notification Event Condition.
   */
  notification_event_condition_id?: string;
  /**
   * Notification Profile Id
   * @description UUID reference to the associated Notification Profile.
   */
  notification_profile_id?: string;
  /**
   * Parameters
   * @description Optional list of key/value parameters for this notification setting.
   * @default null
   */
  parameters: {
      /**
       * Name
       * @description Name of the parameter (key)
       */
      name: string;
      /**
       * Value
       * @description Value of the parameter
       */
      value: string;
  }[] | null;
};

/**
 * Type of TELNYX's TELNYX_CREATE_NOTIFICATION_SETTING tool output.
 */
type TELNYX_CREATE_NOTIFICATION_SETTING_OUTPUT = {
  /**
   * Data
   * @description Response data containing the created notification setting.
   */
  data?: {
      /**
       * Associated Record Type
       * @description Type of the associated record.
       */
      associated_record_type: string;
      /**
       * Associated Record Type Value
       * @description Value of the associated record type.
       */
      associated_record_type_value: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the resource was created.
       */
      created_at: string;
      /**
       * Id
       * @description UUID of the created notification setting.
       */
      id: string;
      /**
       * Notification Channel Id
       * @description UUID of the associated Notification Channel.
       */
      notification_channel_id: string;
      /**
       * Notification Event Condition Id
       * @description UUID of the associated Notification Event Condition.
       */
      notification_event_condition_id: string;
      /**
       * Notification Profile Id
       * @description UUID of the associated Notification Profile.
       */
      notification_profile_id: string;
      /**
       * Parameters
       * @description List of parameters configured on this setting.
       */
      parameters: {
          /**
           * Name
           * @description Name of the parameter (key)
           */
          name: string;
          /**
           * Value
           * @description Value of the parameter
           */
          value: string;
      }[];
      /**
       * Status
       * @description Current status of the notification setting.
       * @enum {string}
       */
      status: "enabled" | "enable-received" | "enable-pending" | "enable-submitted" | "delete-received" | "delete-pending" | "delete-submitted" | "deleted";
      /**
       * Updated At
       * @description ISO 8601 timestamp when the resource was last updated.
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
 * Type of TELNYX's TELNYX_DELETE_NETWORK tool input.
 */
type TELNYX_DELETE_NETWORK_INPUT = {
  /**
   * Network Id
   * @description Unique identifier for the network to delete.
   */
  network_id?: string;
};

/**
 * Type of TELNYX's TELNYX_DELETE_NETWORK tool output.
 */
type TELNYX_DELETE_NETWORK_OUTPUT = {
  /**
   * Data
   * @description Response data for the delete network action.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the network was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the network.
       */
      id: string;
      /**
       * Name
       * @description Name of the network.
       */
      name: string;
      /**
       * Record Type
       * @description Record type of the resource.
       */
      record_type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the network was last updated.
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
 * Type of TELNYX's TELNYX_DELETE_NOTIFICATION_CHANNEL tool input.
 */
type TELNYX_DELETE_NOTIFICATION_CHANNEL_INPUT = {
  /**
   * Notification Channel Id
   * @description Unique identifier for the notification channel to delete.
   */
  notification_channel_id?: string;
};

/**
 * Type of TELNYX's TELNYX_DELETE_NOTIFICATION_CHANNEL tool output.
 */
type TELNYX_DELETE_NOTIFICATION_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Response data for the deleted notification channel.
   */
  data?: {
      /**
       * Channel Destination
       * @description Destination for the notification channel (e.g., webhook URL, email address, or phone number).
       */
      channel_destination: string;
      /**
       * Channel Type Id
       * @description Type of the notification channel (e.g., 'sms', 'voice', 'email', 'webhook').
       */
      channel_type_id: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the notification channel was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the deleted notification channel.
       */
      id: string;
      /**
       * Notification Profile Id
       * @description UUID of the Notification Profile this channel belongs to.
       */
      notification_profile_id: string;
      /**
       * Record Type
       * @description Record type of the resource, e.g. 'notification_channel'.
       */
      record_type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the notification channel was last updated.
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
 * Type of TELNYX's TELNYX_DELETE_NOTIFICATION_PROFILE tool input.
 */
type TELNYX_DELETE_NOTIFICATION_PROFILE_INPUT = {
  /**
   * Notification Profile Id
   * @description Unique identifier for the notification profile to delete.
   */
  notification_profile_id?: string;
};

/**
 * Type of TELNYX's TELNYX_DELETE_NOTIFICATION_PROFILE tool output.
 */
type TELNYX_DELETE_NOTIFICATION_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Response data for the deleted notification profile.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the notification profile was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the deleted notification profile.
       */
      id: string;
      /**
       * Name
       * @description Name of the notification profile.
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the notification profile was last updated.
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
 * Type of TELNYX's TELNYX_DELETE_NOTIFICATION_SETTING tool input.
 */
type TELNYX_DELETE_NOTIFICATION_SETTING_INPUT = {
  /**
   * Notification Setting Id
   * @description Unique identifier for the notification setting to delete.
   */
  notification_setting_id?: string;
};

/**
 * Type of TELNYX's TELNYX_DELETE_NOTIFICATION_SETTING tool output.
 */
type TELNYX_DELETE_NOTIFICATION_SETTING_OUTPUT = {
  /**
   * Data
   * @description Response data for the deleted notification setting.
   */
  data?: {
      /**
       * Associated Record Type
       * @description Type of record associated with the notification setting.
       */
      associated_record_type: string;
      /**
       * Associated Record Type Value
       * @description Value of the associated record type.
       */
      associated_record_type_value: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the notification setting was created.
       */
      created_at: string;
      /**
       * Id
       * @description UUID of the deleted notification setting.
       */
      id: string;
      /**
       * Notification Channel Id
       * @description UUID reference to the associated Notification Channel.
       */
      notification_channel_id: string;
      /**
       * Notification Event Condition Id
       * @description UUID reference to the associated Notification Event Condition.
       */
      notification_event_condition_id: string;
      /**
       * Notification Profile Id
       * @description UUID reference to the associated Notification Profile.
       */
      notification_profile_id: string;
      /**
       * Parameters
       * @description Additional parameters for the notification setting.
       */
      parameters: {
          /**
           * Name
           * @description Name of the notification parameter.
           */
          name: string;
          /**
           * Value
           * @description Value of the notification parameter.
           */
          value: string;
      }[];
      /**
       * Status
       * @description Current status of the notification setting.
       * @enum {string}
       */
      status: "enabled" | "enable-received" | "enable-pending" | "enable-submitted" | "delete-received" | "delete-pending" | "delete-submitted" | "deleted";
      /**
       * Updated At
       * @description ISO 8601 timestamp when the notification setting was last updated.
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
 * Type of TELNYX's TELNYX_GET_USER_BALANCE tool input.
 */
type TELNYX_GET_USER_BALANCE_INPUT = object;

/**
 * Type of TELNYX's TELNYX_GET_USER_BALANCE tool output.
 */
type TELNYX_GET_USER_BALANCE_OUTPUT = {
  /**
   * Data
   * @description Response data containing account balance details.
   */
  data?: {
      /**
       * Available Credit
       * @description The available credit in the account.
       */
      available_credit: string;
      /**
       * Balance
       * @description The account balance.
       */
      balance: string;
      /**
       * Credit Limit
       * @description The credit limit for the account.
       */
      credit_limit: string;
      /**
       * Currency
       * @description Three-letter ISO currency code (e.g., 'USD').
       */
      currency: string;
      /**
       * Frozen
       * @description Amount frozen in the account.
       */
      frozen: string;
      /**
       * Pending
       * @description Amount pending in the account.
       */
      pending: string;
      /**
       * Record Type
       * @description Type of the record returned, typically 'balance'.
       */
      record_type: string;
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
 * Type of TELNYX's TELNYX_LIST_AUDIT_LOGS tool input.
 */
type TELNYX_LIST_AUDIT_LOGS_INPUT = {
  /**
   * Filter[Created After]
   * @description Filter for audit events created after this ISO 8601 timestamp.
   * @default null
   */
  "filter[created_after]": string | null;
  /**
   * Filter[Created Before]
   * @description Filter for audit events created before this ISO 8601 timestamp.
   * @default null
   */
  "filter[created_before]": string | null;
  /**
   * Page[Number]
   * @description Page number to load (must be ≥ 1).
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of items per page.
   * @default null
   */
  "page[size]": number | null;
  /**
   * Sort
   * @description Sort order of results by creation date: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  sort: "asc" | "desc" | null;
};

/**
 * Type of TELNYX's TELNYX_LIST_AUDIT_LOGS tool output.
 */
type TELNYX_LIST_AUDIT_LOGS_OUTPUT = {
  /**
   * Data
   * @description List of audit log entries.
   */
  data?: {
      /**
       * Change Type
       * @description Type of change that occurred.
       */
      change_type: string;
      /**
       * Created At
       * @description Timestamp when the change occurred (ISO 8601 formatted).
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the audit log entry.
       */
      id: string;
      /**
       * Organization Id
       * @description Unique identifier for the organization owning the resource.
       */
      organization_id: string;
      /**
       * Record Type
       * @description Type of the resource being audited.
       */
      record_type: string;
      /**
       * Resource Id
       * @description Unique identifier for the resource that was changed.
       */
      resource_id: string;
      /**
       * User Id
       * @description Unique identifier for the user who made the change.
       */
      user_id: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Page Number
       * @description Current page number.
       */
      page_number: number;
      /**
       * Page Size
       * @description Number of items per page.
       */
      page_size: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
      /**
       * Total Results
       * @description Total number of results.
       */
      total_results: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TELNYX's TELNYX_LIST_CONNECTIONS tool input.
 */
type TELNYX_LIST_CONNECTIONS_INPUT = {
  /**
   * Filter[Connection Name][Contains]
   * @description If present, returns connections with `connection_name` containing the given value. Case-insensitive; requires at least three characters.
   * @default null
   */
  "filter[connection_name][contains]": string | null;
  /**
   * Filter[Outbound Voice Profile Id]
   * @description Identifies the associated outbound voice profile.
   * @default null
   */
  "filter[outbound_voice_profile_id]": number | null;
  /**
   * Page[Number]
   * @description Page number to load. Default is 1. Must be ≥ 1.
   * @default 1
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Size of the page. Default is 250. Must be between 1 and 250.
   * @default 250
   */
  "page[size]": number | null;
  /**
   * Sort
   * @description Specifies sort order: `created_at`, `connection_name`, or `active`. Prefix with '-' for descending, e.g., '-connection_name'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of TELNYX's TELNYX_LIST_CONNECTIONS tool output.
 */
type TELNYX_LIST_CONNECTIONS_OUTPUT = {
  /**
   * Data
   * @description List of connection objects.
   */
  data?: {
      /**
       * Active
       * @description Indicates if the connection is active.
       */
      active: boolean;
      /**
       * Anchorsite Override
       * @description Anchorsite override setting (e.g., 'Latency', 'Chicago, IL', etc.).
       */
      anchorsite_override: string;
      /**
       * Connection Name
       * @description The name of the connection.
       */
      connection_name: string;
      /**
       * Created At
       * @description ISO 8601 formatted creation timestamp.
       */
      created_at: string;
      /**
       * Id
       * @description Identifies the specific resource.
       */
      id: number;
      /**
       * Outbound Voice Profile Id
       * @description Associated outbound voice profile ID.
       * @default null
       */
      outbound_voice_profile_id: number | null;
      /**
       * Record Type
       * @description Identifies the type of the resource.
       */
      record_type: string;
      /**
       * Tags
       * @description Tags associated with the connection.
       */
      tags: string[];
      /**
       * Updated At
       * @description ISO 8601 formatted last updated timestamp.
       */
      updated_at: string;
      /**
       * Webhook Api Version
       * @description Webhook API version ('1' or '2').
       */
      webhook_api_version: string;
      /**
       * Webhook Event Failover Url
       * @description Failover webhook event URL.
       * @default null
       */
      webhook_event_failover_url: string | null;
      /**
       * Webhook Event Url
       * @description Primary webhook event URL.
       * @default null
       */
      webhook_event_url: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Page Number
       * @description Current page number.
       */
      page_number: number;
      /**
       * Page Size
       * @description Number of results per page.
       */
      page_size: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
      /**
       * Total Results
       * @description Total number of results.
       */
      total_results: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TELNYX's TELNYX_LIST_DYNAMIC_EMERGENCY_ENDPOINTS tool input.
 */
type TELNYX_LIST_DYNAMIC_EMERGENCY_ENDPOINTS_INPUT = {
  /**
   * Filter[Country Code]
   * @description Filter by ISO 3166-1 alpha-2 country code (e.g., 'US', 'CA').
   * @default null
   */
  "filter[country_code]": string | null;
  /**
   * Filter[Status]
   * @description Filter by endpoint status. Possible values: 'pending', 'activated', 'rejected'.
   * @default null
   * @enum {string|null}
   */
  "filter[status]": "pending" | "activated" | "rejected" | null;
  /**
   * Page[Number]
   * @description Page number to load (must be >= 1).
   * @default 1
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of items per page (1–250).
   * @default 20
   */
  "page[size]": number | null;
};

/**
 * Type of TELNYX's TELNYX_LIST_DYNAMIC_EMERGENCY_ENDPOINTS tool output.
 */
type TELNYX_LIST_DYNAMIC_EMERGENCY_ENDPOINTS_OUTPUT = {
  /**
   * Data
   * @description List of dynamic emergency endpoint records.
   */
  data?: {
      /**
       * Callback Number
       * @description E.164 callback number for emergency services.
       */
      callback_number: string;
      /**
       * Caller Name
       * @description Caller display name for emergency services.
       */
      caller_name: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the endpoint was created.
       */
      created_at: string;
      /**
       * Dynamic Emergency Address Id
       * @description ID of the active dynamic emergency address tied to this endpoint.
       */
      dynamic_emergency_address_id: string;
      /**
       * Id
       * @description Unique identifier of the dynamic emergency endpoint.
       */
      id: string;
      /**
       * Record Type
       * @description Resource type, always 'dynamic_emergency_endpoint'.
       */
      record_type: string;
      /**
       * Sip From Id
       * @description SIP From ID associated with the endpoint.
       * @default null
       */
      sip_from_id: string | null;
      /**
       * Status
       * @description Current status of the endpoint.
       * @enum {string}
       */
      status: "pending" | "activated" | "rejected";
      /**
       * Updated At
       * @description ISO 8601 timestamp when the endpoint was last updated.
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata for the response.
   */
  meta?: {
      /**
       * Page Number
       * @description Current page number.
       */
      page_number: number;
      /**
       * Page Size
       * @description Number of results per page.
       */
      page_size: number;
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      total_pages: number;
      /**
       * Total Results
       * @description Total number of results available.
       */
      total_results: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TELNYX's TELNYX_LIST_MESSAGING_PROFILES tool input.
 */
type TELNYX_LIST_MESSAGING_PROFILES_INPUT = {
  /**
   * Page[Number]
   * @description Page number for pagination (starts at 1).
   * @default 1
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of results per page (1–250).
   * @default 20
   */
  "page[size]": number | null;
};

/**
 * Type of TELNYX's TELNYX_LIST_MESSAGING_PROFILES tool output.
 */
type TELNYX_LIST_MESSAGING_PROFILES_OUTPUT = {
  /**
   * Data
   * @description List of messaging profile records.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 formatted date indicating when the resource was created.
       */
      created_at: string;
      /**
       * Daily Spend Limit
       * @description Maximum amount of money (in USD) that can be spent by this profile before midnight UTC.
       */
      daily_spend_limit: string;
      /**
       * Daily Spend Limit Enabled
       * @description Whether to enforce the daily spend limit.
       */
      daily_spend_limit_enabled: boolean;
      /**
       * Enabled
       * @description Specifies whether the messaging profile is enabled.
       */
      enabled: boolean;
      /**
       * Id
       * @description Unique identifier for the messaging profile.
       */
      id: string;
      /**
       * Mms Fall Back To Sms
       * @description Enables SMS fallback for MMS messages.
       */
      mms_fall_back_to_sms: boolean;
      /**
       * Mms Transcoding
       * @description Enables automated resizing of MMS media.
       */
      mms_transcoding: boolean;
      /**
       * Name
       * @description A user-friendly name for the messaging profile.
       */
      name: string;
      /**
       * NumberPoolSettings
       * @description Settings for the number pool associated with the messaging profile.
       * @default null
       */
      number_pool_settings: {
          /**
           * Geomatch
           * @description If true, tries to choose a sending number with the same area code as the destination number.
           */
          geomatch: boolean;
          /**
           * Long Code Weight
           * @description Probability weight for selecting a Long Code number when sending a message.
           */
          long_code_weight: number;
          /**
           * Skip Unhealthy
           * @description If true, unhealthy numbers are excluded from the pool.
           */
          skip_unhealthy: boolean;
          /**
           * Sticky Sender
           * @description If true, attempts to use the same sending number for all messages to a recipient.
           */
          sticky_sender: boolean;
          /**
           * Toll Free Weight
           * @description Probability weight for selecting a Toll-Free number when sending a message.
           */
          toll_free_weight: number;
      } | null;
      /**
       * Record Type
       * @description Identifies the type of the resource. Always 'messaging_profile'.
       */
      record_type: string;
      /**
       * Updated At
       * @description ISO 8601 formatted date indicating when the resource was updated.
       */
      updated_at: string;
      /**
       * URLShortenerSettings
       * @description Settings for the URL shortener feature.
       * @default null
       */
      url_shortener_settings: {
          /**
           * Domain
           * @description Domain provided by the Telnyx URL shortener service.
           */
          domain: string;
          /**
           * Prefix
           * @description Optional prefix for branding in the generated URLs.
           * @default null
           */
          prefix: string | null;
          /**
           * Replace Blacklist Only
           * @description If true, only replaces URLs with domains that are blocked by Telnyx.
           */
          replace_blacklist_only: boolean;
          /**
           * Send Webhooks
           * @description If true, sends webhooks when replaced links are clicked.
           */
          send_webhooks: boolean;
      } | null;
      /**
       * V1 Secret
       * @description Secret used to authenticate with v1 endpoints.
       */
      v1_secret: string;
      /**
       * Webhook Api Version
       * @description Determines which webhook format will be used. Possible values: '1', '2', '2010-04-01'.
       */
      webhook_api_version: string;
      /**
       * Webhook Failover Url
       * @description The failover URL for webhooks if sending to the primary URL fails.
       * @default null
       */
      webhook_failover_url: string | null;
      /**
       * Webhook Url
       * @description The URL where webhooks related to this messaging profile will be sent.
       * @default null
       */
      webhook_url: string | null;
      /**
       * Whitelisted Destinations
       * @description Destinations to which the messaging profile is allowed to send. Must be ISO 3166-1 alpha-2 codes.
       */
      whitelisted_destinations: string[];
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * PaginationLinks
   * @description Pagination links for navigating list results.
   * @default null
   */
  links: {
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
      /**
       * Self
       * @description URL of this page.
       * @default null
       */
      self: string | null;
  } | null;
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Page Number
       * @description Current page number.
       */
      page_number: number;
      /**
       * Page Size
       * @description Number of records per page.
       */
      page_size: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
      /**
       * Total Results
       * @description Total number of results.
       */
      total_results: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TELNYX's TELNYX_LIST_MESSAGING_URL_DOMAINS tool input.
 */
type TELNYX_LIST_MESSAGING_URL_DOMAINS_INPUT = {
  /**
   * Filter[Profile Id]
   * @description Filter by messaging profile ID.
   * @default null
   */
  "filter[profile_id]": string | null;
  /**
   * Page[Number]
   * @description Page number for pagination. Defaults to 1.
   * @default 1
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of results per page. Defaults to 20; max is 100.
   * @default 20
   */
  "page[size]": number | null;
};

/**
 * Type of TELNYX's TELNYX_LIST_MESSAGING_URL_DOMAINS tool output.
 */
type TELNYX_LIST_MESSAGING_URL_DOMAINS_OUTPUT = {
  /**
   * Data
   * @description List of messaging URL domain objects.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 creation timestamp.
       */
      created_at: string;
      /**
       * Id
       * @description Identifier for the URL domain.
       */
      id: string;
      /**
       * Profile Id
       * @description Associated messaging profile ID.
       */
      profile_id: string;
      /**
       * Record Type
       * @description Type of the record.
       */
      record_type: string;
      /**
       * Status
       * @description Status of the URL domain.
       */
      status: string;
      /**
       * Updated At
       * @description ISO 8601 last update timestamp.
       */
      updated_at: string;
      /**
       * Url
       * @description Registered domain URL.
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
   * PaginationLinks
   * @description Pagination links for navigating results.
   * @default null
   */
  links: {
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
      /**
       * Self
       * @description URL of this page.
       * @default null
       */
      self: string | null;
  } | null;
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Page Number
       * @description Current page number.
       */
      page_number: number;
      /**
       * Page Size
       * @description Number of results per page.
       */
      page_size: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
      /**
       * Total Results
       * @description Total number of results.
       */
      total_results: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TELNYX's TELNYX_LIST_MOBILE_NETWORK_OPERATORS tool input.
 */
type TELNYX_LIST_MOBILE_NETWORK_OPERATORS_INPUT = {
  /**
   * Filter[Country Code]
   * @description Filter operators by country code (ISO 3166-1 alpha-2).
   * @default null
   */
  "filter[country_code]": string | null;
  /**
   * Filter[Operator Name]
   * @description Filter operators by operator name.
   * @default null
   */
  "filter[operator_name]": string | null;
  /**
   * Page[Number]
   * @description Page number for pagination (starting at 1).
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of results per page (maximum 100).
   * @default null
   */
  "page[size]": number | null;
};

/**
 * Type of TELNYX's TELNYX_LIST_MOBILE_NETWORK_OPERATORS tool output.
 */
type TELNYX_LIST_MOBILE_NETWORK_OPERATORS_OUTPUT = {
  /**
   * Data
   * @description List of mobile network operators.
   */
  data?: {
      /**
       * Country Code
       * @description Country code (ISO 3166-1 alpha-2).
       */
      country_code: string;
      /**
       * Id
       * @description Unique identifier for the mobile network operator.
       */
      id: string;
      /**
       * Mcc
       * @description Mobile Country Code (MCC).
       */
      mcc: string;
      /**
       * Mnc
       * @description Mobile Network Code (MNC).
       */
      mnc: string;
      /**
       * Name
       * @description Name of the mobile network operator.
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
   * Links
   * @description Pagination links.
   */
  links?: {
      /**
       * Next
       * @description URL to the next page.
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL to the previous page.
       * @default null
       */
      prev: string | null;
      /**
       * Self
       * @description URL to the current page.
       * @default null
       */
      self: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Page Number
       * @description Current page number.
       */
      page_number: number;
      /**
       * Page Size
       * @description Number of results per page.
       */
      page_size: number;
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      total_pages: number;
      /**
       * Total Results
       * @description Total number of results.
       */
      total_results: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TELNYX's TELNYX_LIST_NETWORKS tool input.
 */
type TELNYX_LIST_NETWORKS_INPUT = {
  /**
   * Filter[Name]
   * @description Filter results by network name.
   * @default null
   */
  "filter[name]": string | null;
  /**
   * Page[Number]
   * @description Page number to load. Default is 1. Must be ≥ 1.
   * @default 1
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Size of the page. Default is 20. Must be ≥ 1.
   * @default 20
   */
  "page[size]": number | null;
};

/**
 * Type of TELNYX's TELNYX_LIST_NETWORKS tool output.
 */
type TELNYX_LIST_NETWORKS_OUTPUT = {
  /**
   * Data
   * @description List of network objects.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 formatted creation timestamp.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the network.
       */
      id: string;
      /**
       * Name
       * @description Name of the network.
       */
      name: string;
      /**
       * Record Type
       * @description Type of the record.
       */
      record_type: string;
      /**
       * Updated At
       * @description ISO 8601 formatted last updated timestamp.
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Page Number
       * @description Current page number.
       */
      page_number: number;
      /**
       * Page Size
       * @description Number of results per page.
       */
      page_size: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
      /**
       * Total Results
       * @description Total number of results.
       */
      total_results: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TELNYX's TELNYX_LIST_NETWORK_INTERFACES tool input.
 */
type TELNYX_LIST_NETWORK_INTERFACES_INPUT = {
  /**
   * Filter[Name]
   * @description Filter results by interface name.
   * @default null
   */
  "filter[name]": string | null;
  /**
   * Filter[Status]
   * @description Filter results by interface status.
   * @default null
   * @enum {string|null}
   */
  "filter[status]": "created" | "provisioning" | "provisioned" | "deleting" | null;
  /**
   * Filter[Type]
   * @description Filter results by interface type.
   * @default null
   */
  "filter[type]": string | null;
  /**
   * Network Id
   * @description Unique identifier (UUID) of the network to list interfaces for.
   */
  network_id?: string;
  /**
   * Page[Number]
   * @description Page number to load. Default is 1. Must be ≥ 1.
   * @default 1
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of results per page. Default is 20. Must be between 1 and 250.
   * @default 20
   */
  "page[size]": number | null;
};

/**
 * Type of TELNYX's TELNYX_LIST_NETWORK_INTERFACES tool output.
 */
type TELNYX_LIST_NETWORK_INTERFACES_OUTPUT = {
  /**
   * Data
   * @description List of network interface objects.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the interface was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the interface.
       */
      id: string;
      /**
       * Name
       * @description Name of the interface.
       */
      name: string;
      /**
       * Network Id
       * @description Identifier of the associated network.
       */
      network_id: string;
      /**
       * Record Type
       * @description Type of the interface record.
       */
      record_type: string;
      /**
       * Region
       * @description Region details of the interface.
       */
      region: {
          /**
           * Code
           * @description Region code.
           */
          code: string;
          /**
           * Name
           * @description Region name.
           */
          name: string;
          /**
           * Record Type
           * @description Type of the region record.
           */
          record_type: string;
      };
      /**
       * Region Code
       * @description Code of the region where the interface is located.
       */
      region_code: string;
      /**
       * Status
       * @description Status of the interface.
       */
      status: string;
      /**
       * Type
       * @description Type of the interface.
       */
      type: string;
      /**
       * Updated At
       * @description Timestamp when the interface was last updated.
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Page Number
       * @description Current page number.
       */
      page_number: number;
      /**
       * Page Size
       * @description Number of results per page.
       */
      page_size: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
      /**
       * Total Results
       * @description Total number of results.
       */
      total_results: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TELNYX's TELNYX_LIST_NOTIFICATION_CHANNELS tool input.
 */
type TELNYX_LIST_NOTIFICATION_CHANNELS_INPUT = {
  /**
   * Filter[Channel Type Id][Eq]
   * @description Filter by the ID of the channel type. Possible values: 'webhook', 'sms', 'email', 'voice'.
   * @default null
   */
  "filter[channel_type_id][eq]": string | null;
  /**
   * Page[Number]
   * @description Page number for pagination. Defaults to 1.
   * @default 1
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of results per page. Defaults to 20; max is 100.
   * @default 20
   */
  "page[size]": number | null;
};

/**
 * Type of TELNYX's TELNYX_LIST_NOTIFICATION_CHANNELS tool output.
 */
type TELNYX_LIST_NOTIFICATION_CHANNELS_OUTPUT = {
  /**
   * Data
   * @description List of notification channel objects.
   */
  data?: {
      /**
       * Channel Destination
       * @description The destination associated with the channel type.
       */
      channel_destination: string;
      /**
       * Channel Type Id
       * @description The type of channel. Possible values: 'sms', 'voice', 'email', 'webhook'.
       */
      channel_type_id: string;
      /**
       * Created At
       * @description ISO 8601 date indicating when the resource was created.
       */
      created_at: string;
      /**
       * Id
       * @description A UUID identifying the notification channel.
       */
      id: string;
      /**
       * Notification Profile Id
       * @description UUID reference to the associated notification profile.
       */
      notification_profile_id: string;
      /**
       * Updated At
       * @description ISO 8601 date indicating when the resource was updated.
       */
      updated_at: string;
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
      /**
       * Self
       * @description URL of this page.
       * @default null
       */
      self: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Page Number
       * @description Current page number.
       */
      page_number: number;
      /**
       * Page Size
       * @description Number of results per page.
       */
      page_size: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
      /**
       * Total Results
       * @description Total number of results.
       */
      total_results: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TELNYX's TELNYX_LIST_NOTIFICATION_EVENTS tool input.
 */
type TELNYX_LIST_NOTIFICATION_EVENTS_INPUT = {
  /**
   * Page[Number]
   * @description Page number to load (must be ≥ 1). Defaults to 1.
   * @default 1
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of results per page (1–250). Defaults to 20.
   * @default 20
   */
  "page[size]": number | null;
};

/**
 * Type of TELNYX's TELNYX_LIST_NOTIFICATION_EVENTS tool output.
 */
type TELNYX_LIST_NOTIFICATION_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * PaginationLinks
       * @description Pagination links for navigating list results.
       * @default null
       */
      links: {
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
          /**
           * Self
           * @description URL of this page.
           * @default null
           */
          self: string | null;
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
 * Type of TELNYX's TELNYX_LIST_NOTIFICATION_EVENT_CONDITIONS tool input.
 */
type TELNYX_LIST_NOTIFICATION_EVENT_CONDITIONS_INPUT = {
  /**
   * Filter[Associated Record Type][Eq]
   * @description Filter by associated record type. Allowed values: 'account', 'phone_number'.
   * @default null
   * @enum {string|null}
   */
  "filter[associated_record_type][eq]": "account" | "phone_number" | null;
  /**
   * Page[Number]
   * @description Page number for pagination. Defaults to 1.
   * @default 1
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of results per page. Defaults to 20; max is 250.
   * @default 20
   */
  "page[size]": number | null;
};

/**
 * Type of TELNYX's TELNYX_LIST_NOTIFICATION_EVENT_CONDITIONS tool output.
 */
type TELNYX_LIST_NOTIFICATION_EVENT_CONDITIONS_OUTPUT = {
  /**
   * Data
   * @description List of notification event condition objects.
   */
  data?: {
      /**
       * Allow Multiple Channels
       * @description Whether multiple channels are allowed.
       */
      allow_multiple_channels: boolean;
      /**
       * Associated Record Type
       * @description Associated record type. Possible values: 'account', 'phone_number'.
       * @enum {string}
       */
      associated_record_type: "account" | "phone_number";
      /**
       * Asynchronous
       * @description Whether the condition is processed asynchronously.
       */
      asynchronous: boolean;
      /**
       * Created At
       * @description ISO 8601 creation timestamp.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the notification event condition.
       */
      description: string;
      /**
       * Enabled
       * @description Whether the condition is enabled.
       */
      enabled: boolean;
      /**
       * Id
       * @description A UUID identifying the notification event condition.
       */
      id: string;
      /**
       * Name
       * @description Name of the notification event condition.
       */
      name: string;
      /**
       * Notification Event Id
       * @description UUID of the parent notification event.
       */
      notification_event_id: string;
      /**
       * Parameters
       * @description List of parameters for the condition.
       */
      parameters: {
          /**
           * Data Type
           * @description Data type of the parameter.
           */
          data_type: string;
          /**
           * Name
           * @description Name of the parameter.
           */
          name: string;
          /**
           * Optional
           * @description Whether the parameter is optional.
           */
          optional: boolean;
      }[];
      /**
       * Supported Channels
       * @description List of supported channels for the condition.
       */
      supported_channels: string[];
      /**
       * Updated At
       * @description ISO 8601 last update timestamp.
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * PaginationLinks
   * @description Pagination links for navigating list results.
   * @default null
   */
  links: {
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
      /**
       * Self
       * @description URL of this page.
       * @default null
       */
      self: string | null;
  } | null;
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Page Number
       * @description Current page number.
       */
      page_number: number;
      /**
       * Page Size
       * @description Number of results per page.
       */
      page_size: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
      /**
       * Total Results
       * @description Total number of results.
       */
      total_results: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TELNYX's TELNYX_LIST_NOTIFICATION_PROFILES tool input.
 */
type TELNYX_LIST_NOTIFICATION_PROFILES_INPUT = {
  /**
   * Page[Number]
   * @description Page number for pagination. Defaults to 1.
   * @default 1
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Number of results per page. Defaults to 20.
   * @default 20
   */
  "page[size]": number | null;
};

/**
 * Type of TELNYX's TELNYX_LIST_NOTIFICATION_PROFILES tool output.
 */
type TELNYX_LIST_NOTIFICATION_PROFILES_OUTPUT = {
  /**
   * Data
   * @description List of notification profiles.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 formatted creation timestamp.
       */
      created_at: string;
      /**
       * Id
       * @description A UUID identifying the notification profile.
       */
      id: string;
      /**
       * Name
       * @description Human-readable name of the notification profile.
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 formatted last updated timestamp.
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Page Number
       * @description Current page number.
       */
      page_number: number;
      /**
       * Page Size
       * @description Number of results per page.
       */
      page_size: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
      /**
       * Total Results
       * @description Total number of results.
       */
      total_results: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TELNYX's TELNYX_LIST_PHONE_NUMBERS tool input.
 */
type TELNYX_LIST_PHONE_NUMBERS_INPUT = {
  /**
   * Filter[Connection Id]
   * @description Filter numbers by associated connection ID.
   * @default null
   */
  "filter[connection_id]": string | null;
  /**
   * Filter[National Destination Code]
   * @description Return numbers with this National Destination Code (NDC).
   * @default null
   */
  "filter[national_destination_code]": string | null;
  /**
   * Filter[Phone Number]
   * @description Return numbers matching this E.164 phone number format.
   * @default null
   */
  "filter[phone_number]": string | null;
  /**
   * Filter[Status]
   * @description Filter numbers by status (e.g., 'ported_in', 'ported_away', 'provisioned').
   * @default null
   */
  "filter[status]": string | null;
  /**
   * Page[Number]
   * @description Page number for results pagination (starts at 1).
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Results per page; maximum 1000.
   * @default null
   */
  "page[size]": number | null;
  /**
   * Sort
   * @description Comma-separated list of fields to sort by (e.g., 'phone_number').
   * @default null
   */
  sort: string | null;
};

/**
 * Type of TELNYX's TELNYX_LIST_PHONE_NUMBERS tool output.
 */
type TELNYX_LIST_PHONE_NUMBERS_OUTPUT = {
  /**
   * Data
   * @description List of phone number records.
   */
  data?: {
      /**
       * Connection Id
       * @description ID of the associated connection, if any.
       * @default null
       */
      connection_id: string | null;
      /**
       * Created At
       * @description Timestamp when the phone number was created (ISO 8601).
       */
      created_at: string;
      /**
       * E911 Address Id
       * @description Associated E911 address ID, if any.
       * @default null
       */
      e911_address_id: string | null;
      /**
       * Fax Enabled
       * @description Whether fax is enabled on the phone number.
       * @default null
       */
      fax_enabled: boolean | null;
      /**
       * Id
       * @description Unique identifier for the phone number.
       */
      id: string;
      /**
       * Lata
       * @description Local access and transport area code of the phone number.
       * @default null
       */
      lata: string | null;
      /**
       * Latitude
       * @description Latitude of the phone number location.
       * @default null
       */
      latitude: string | null;
      /**
       * Longitude
       * @description Longitude of the phone number location.
       * @default null
       */
      longitude: string | null;
      /**
       * Mms Enabled
       * @description Whether MMS is enabled on the phone number.
       * @default null
       */
      mms_enabled: boolean | null;
      /**
       * National Destination Code
       * @description National Destination Code of the phone number.
       */
      national_destination_code: string;
      /**
       * Phone Number
       * @description Phone number in E.164 format.
       */
      phone_number: string;
      /**
       * Rate Center
       * @description Rate center of the phone number.
       * @default null
       */
      rate_center: string | null;
      /**
       * Sms Enabled
       * @description Whether SMS is enabled on the phone number.
       * @default null
       */
      sms_enabled: boolean | null;
      /**
       * Status
       * @description Current status of the phone number.
       */
      status: string;
      /**
       * Updated At
       * @description Timestamp when the phone number was last updated (ISO 8601).
       */
      updated_at: string;
      /**
       * Voice Enabled
       * @description Whether voice is enabled on the phone number.
       * @default null
       */
      voice_enabled: boolean | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * PaginationLinks
   * @description Pagination links for navigating list results.
   * @default null
   */
  links: {
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
      /**
       * Self
       * @description URL of this page.
       * @default null
       */
      self: string | null;
  } | null;
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Page Number
       * @description Current page number.
       */
      page_number: number;
      /**
       * Page Size
       * @description Number of records per page.
       */
      page_size: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
      /**
       * Total Results
       * @description Total number of results.
       */
      total_results: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TELNYX's TELNYX_LIST_SSO_AUTHENTICATION_PROVIDERS tool input.
 */
type TELNYX_LIST_SSO_AUTHENTICATION_PROVIDERS_INPUT = {
  /**
   * Page[Number]
   * @description The page number to load. Must be ≥ 1.
   * @default 1
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Size of the page. Must be between 1 and 250.
   * @default 20
   */
  "page[size]": number | null;
  /**
   * Sort
   * @description Sort order for results. Prefix field with '-' for descending order.
   * @default -created_at
   * @enum {string|null}
   */
  sort: "name" | "-name" | "short_name" | "-short_name" | "active" | "-active" | "created_at" | "-created_at" | "updated_at" | "-updated_at" | null;
};

/**
 * Type of TELNYX's TELNYX_LIST_SSO_AUTHENTICATION_PROVIDERS tool output.
 */
type TELNYX_LIST_SSO_AUTHENTICATION_PROVIDERS_OUTPUT = {
  /**
   * Data
   * @description List of authentication provider records.
   */
  data?: {
      /**
       * Active
       * @description Active status of the authentication provider.
       */
      active: boolean;
      /**
       * Created At
       * @description ISO 8601 timestamp when the provider was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the authentication provider.
       */
      id: string;
      /**
       * Name
       * @description Human-friendly name of the authentication provider.
       */
      name: string;
      /**
       * Organization Id
       * @description ID of the Organization the provider belongs to.
       */
      organization_id: string;
      /**
       * Record Type
       * @description Resource type, always 'authentication_provider'.
       */
      record_type: string;
      /**
       * Settings
       * @description SAML settings for this provider.
       */
      settings: {
          /**
           * Assertion Consumer Service Url
           * Format: uri
           * @description The Assertion Consumer Service URL for the service provider (Telnyx).
           */
          assertion_consumer_service_url: string;
          /**
           * Idp Cert Fingerprint
           * @description The certificate fingerprint for the identity provider (IdP).
           */
          idp_cert_fingerprint: string;
          /**
           * Idp Cert Fingerprint Algorithm
           * @description The algorithm used to generate the IdP certificate fingerprint.
           * @enum {string}
           */
          idp_cert_fingerprint_algorithm: "sha1" | "sha256" | "sha384" | "sha512";
          /**
           * Idp Entity Id
           * Format: uri
           * @description The Entity ID for the identity provider (IdP).
           */
          idp_entity_id: string;
          /**
           * Idp Sso Target Url
           * Format: uri
           * @description The SSO target URL for the identity provider (IdP).
           */
          idp_sso_target_url: string;
          /**
           * Name Identifier Format
           * @description Name identifier format used by both the IdP and Telnyx.
           */
          name_identifier_format: string;
          /**
           * Service Provider Entity Id
           * Format: uri
           * @description The Entity ID for the service provider (Telnyx).
           */
          service_provider_entity_id: string;
      };
      /**
       * Short Name
       * @description URL-friendly short name of the authentication provider.
       */
      short_name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the provider was last updated.
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Page Number
       * @description Current page number.
       */
      page_number: number;
      /**
       * Page Size
       * @description Number of items per page.
       */
      page_size: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
      /**
       * Total Results
       * @description Total number of results.
       */
      total_results: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TELNYX's TELNYX_RETRIEVE_NETWORK tool input.
 */
type TELNYX_RETRIEVE_NETWORK_INPUT = {
  /**
   * Network Id
   * @description Unique identifier (UUID) of the network to retrieve.
   */
  network_id?: string;
};

/**
 * Type of TELNYX's TELNYX_RETRIEVE_NETWORK tool output.
 */
type TELNYX_RETRIEVE_NETWORK_OUTPUT = {
  /**
   * Data
   * @description Response data containing the network details.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the network was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the network.
       */
      id: string;
      /**
       * Name
       * @description Name of the network.
       */
      name: string;
      /**
       * Network Type
       * @description Type of the network (e.g., private, public).
       * @default null
       */
      network_type: string | null;
      /**
       * Organization Id
       * @description Identifier of the organization associated with the network.
       * @default null
       */
      organization_id: string | null;
      /**
       * Record Type
       * @description Type of the record for the network resource.
       */
      record_type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the network was last updated.
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
 * Type of TELNYX's TELNYX_RETRIEVE_NOTIFICATION_CHANNEL tool input.
 */
type TELNYX_RETRIEVE_NOTIFICATION_CHANNEL_INPUT = {
  /**
   * Id
   * @description Unique identifier of the notification channel to retrieve.
   */
  id?: string;
};

/**
 * Type of TELNYX's TELNYX_RETRIEVE_NOTIFICATION_CHANNEL tool output.
 */
type TELNYX_RETRIEVE_NOTIFICATION_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Notification channel resource wrapper.
   */
  data?: {
      /**
       * Channel Destination
       * @description Destination associated with the channel.
       */
      channel_destination: string;
      /**
       * Channel Type Id
       * @description Type of the channel (e.g., 'sms', 'voice', 'email', 'webhook').
       */
      channel_type_id: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the channel was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the notification channel.
       */
      id: string;
      /**
       * Notification Profile Id
       * @description UUID of the Notification Profile this channel belongs to.
       */
      notification_profile_id: string;
      /**
       * Record Type
       * @description Record type, always 'notification_channel'
       */
      record_type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the channel was last updated.
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
 * Type of TELNYX's TELNYX_RETRIEVE_NOTIFICATION_PROFILE tool input.
 */
type TELNYX_RETRIEVE_NOTIFICATION_PROFILE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the notification profile to retrieve.
   */
  id?: string;
};

/**
 * Type of TELNYX's TELNYX_RETRIEVE_NOTIFICATION_PROFILE tool output.
 */
type TELNYX_RETRIEVE_NOTIFICATION_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Notification profile resource wrapper.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the profile was created.
       */
      created_at: string;
      /**
       * Events
       * @description Events that trigger notifications.
       */
      events?: string[];
      /**
       * Id
       * @description Unique identifier of the notification profile.
       */
      id: string;
      /**
       * Name
       * @description Name of the notification profile.
       */
      name: string;
      /**
       * Record Type
       * @description Type of the record, typically 'notification_profile'.
       */
      record_type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the profile was last updated.
       */
      updated_at: string;
      /**
       * Webhook Failure Url
       * @description URL to which failed notifications are sent.
       * @default null
       */
      webhook_failure_url: string | null;
      /**
       * Webhook Url
       * @description URL to which notifications are sent.
       * @default null
       */
      webhook_url: string | null;
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
 * Type of TELNYX's TELNYX_RETRIEVE_NOTIFICATION_SETTING tool input.
 */
type TELNYX_RETRIEVE_NOTIFICATION_SETTING_INPUT = {
  /**
   * Id
   * @description Unique identifier of the notification setting to retrieve.
   */
  id?: string;
};

/**
 * Type of TELNYX's TELNYX_RETRIEVE_NOTIFICATION_SETTING tool output.
 */
type TELNYX_RETRIEVE_NOTIFICATION_SETTING_OUTPUT = {
  /**
   * Data
   * @description The retrieved notification setting object.
   */
  data?: {
      /**
       * Associated Record Type
       * @description Type of record associated with the notification setting.
       */
      associated_record_type: string;
      /**
       * Associated Record Type Value
       * @description Value of the associated record type.
       */
      associated_record_type_value: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the notification setting was created.
       */
      created_at: string;
      /**
       * Id
       * @description UUID of the notification setting.
       */
      id: string;
      /**
       * Notification Channel Id
       * @description UUID reference to the associated Notification Channel.
       */
      notification_channel_id: string;
      /**
       * Notification Event Condition Id
       * @description UUID reference to the associated Notification Event Condition.
       */
      notification_event_condition_id: string;
      /**
       * Notification Profile Id
       * @description UUID reference to the associated Notification Profile.
       */
      notification_profile_id: string;
      /**
       * Parameters
       * @description Additional parameters for the notification setting.
       */
      parameters: {
          /**
           * Name
           * @description Name of the notification parameter.
           */
          name: string;
          /**
           * Value
           * @description Value of the notification parameter.
           */
          value: string;
      }[];
      /**
       * Status
       * @description Current status of the notification setting.
       * @enum {string}
       */
      status: "enabled" | "enable-received" | "enable-pending" | "enable-submitted" | "delete-received" | "delete-pending" | "delete-submitted" | "deleted";
      /**
       * Updated At
       * @description ISO 8601 timestamp when the notification setting was last updated.
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
 * Type of TELNYX's TELNYX_UPDATE_NETWORK tool input.
 */
type TELNYX_UPDATE_NETWORK_INPUT = {
  /**
   * Name
   * @description New name for the network.
   * @default null
   */
  name: string | null;
  /**
   * Network Id
   * @description Unique identifier for the network to update.
   */
  network_id?: string;
  /**
   * Tags
   * @description List of tags to assign to the network.
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of TELNYX's TELNYX_UPDATE_NETWORK tool output.
 */
type TELNYX_UPDATE_NETWORK_OUTPUT = {
  /**
   * Data
   * @description Response data containing the updated network details.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the network was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the network.
       */
      id: string;
      /**
       * Record Type
       * @description Record type (always 'network').
       */
      record_type: string;
      /**
       * Tags
       * @description Tags associated with the network.
       */
      tags?: string[];
      /**
       * Updated At
       * @description ISO 8601 timestamp when the network was last updated.
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
 * Type map of all available tool input types for toolkit "TELNYX".
 */
export type TELNYX_TOOL_INPUTS = {
  CREATE_NETWORK: TELNYX_CREATE_NETWORK_INPUT
  CREATE_NOTIFICATION_CHANNEL: TELNYX_CREATE_NOTIFICATION_CHANNEL_INPUT
  CREATE_NOTIFICATION_PROFILE: TELNYX_CREATE_NOTIFICATION_PROFILE_INPUT
  CREATE_NOTIFICATION_SETTING: TELNYX_CREATE_NOTIFICATION_SETTING_INPUT
  DELETE_NETWORK: TELNYX_DELETE_NETWORK_INPUT
  DELETE_NOTIFICATION_CHANNEL: TELNYX_DELETE_NOTIFICATION_CHANNEL_INPUT
  DELETE_NOTIFICATION_PROFILE: TELNYX_DELETE_NOTIFICATION_PROFILE_INPUT
  DELETE_NOTIFICATION_SETTING: TELNYX_DELETE_NOTIFICATION_SETTING_INPUT
  GET_USER_BALANCE: TELNYX_GET_USER_BALANCE_INPUT
  LIST_AUDIT_LOGS: TELNYX_LIST_AUDIT_LOGS_INPUT
  LIST_CONNECTIONS: TELNYX_LIST_CONNECTIONS_INPUT
  LIST_DYNAMIC_EMERGENCY_ENDPOINTS: TELNYX_LIST_DYNAMIC_EMERGENCY_ENDPOINTS_INPUT
  LIST_MESSAGING_PROFILES: TELNYX_LIST_MESSAGING_PROFILES_INPUT
  LIST_MESSAGING_URL_DOMAINS: TELNYX_LIST_MESSAGING_URL_DOMAINS_INPUT
  LIST_MOBILE_NETWORK_OPERATORS: TELNYX_LIST_MOBILE_NETWORK_OPERATORS_INPUT
  LIST_NETWORKS: TELNYX_LIST_NETWORKS_INPUT
  LIST_NETWORK_INTERFACES: TELNYX_LIST_NETWORK_INTERFACES_INPUT
  LIST_NOTIFICATION_CHANNELS: TELNYX_LIST_NOTIFICATION_CHANNELS_INPUT
  LIST_NOTIFICATION_EVENTS: TELNYX_LIST_NOTIFICATION_EVENTS_INPUT
  LIST_NOTIFICATION_EVENT_CONDITIONS: TELNYX_LIST_NOTIFICATION_EVENT_CONDITIONS_INPUT
  LIST_NOTIFICATION_PROFILES: TELNYX_LIST_NOTIFICATION_PROFILES_INPUT
  LIST_PHONE_NUMBERS: TELNYX_LIST_PHONE_NUMBERS_INPUT
  LIST_SSO_AUTHENTICATION_PROVIDERS: TELNYX_LIST_SSO_AUTHENTICATION_PROVIDERS_INPUT
  RETRIEVE_NETWORK: TELNYX_RETRIEVE_NETWORK_INPUT
  RETRIEVE_NOTIFICATION_CHANNEL: TELNYX_RETRIEVE_NOTIFICATION_CHANNEL_INPUT
  RETRIEVE_NOTIFICATION_PROFILE: TELNYX_RETRIEVE_NOTIFICATION_PROFILE_INPUT
  RETRIEVE_NOTIFICATION_SETTING: TELNYX_RETRIEVE_NOTIFICATION_SETTING_INPUT
  UPDATE_NETWORK: TELNYX_UPDATE_NETWORK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TELNYX".
 */
export type TELNYX_TOOL_OUTPUTS = {
  CREATE_NETWORK: TELNYX_CREATE_NETWORK_OUTPUT
  CREATE_NOTIFICATION_CHANNEL: TELNYX_CREATE_NOTIFICATION_CHANNEL_OUTPUT
  CREATE_NOTIFICATION_PROFILE: TELNYX_CREATE_NOTIFICATION_PROFILE_OUTPUT
  CREATE_NOTIFICATION_SETTING: TELNYX_CREATE_NOTIFICATION_SETTING_OUTPUT
  DELETE_NETWORK: TELNYX_DELETE_NETWORK_OUTPUT
  DELETE_NOTIFICATION_CHANNEL: TELNYX_DELETE_NOTIFICATION_CHANNEL_OUTPUT
  DELETE_NOTIFICATION_PROFILE: TELNYX_DELETE_NOTIFICATION_PROFILE_OUTPUT
  DELETE_NOTIFICATION_SETTING: TELNYX_DELETE_NOTIFICATION_SETTING_OUTPUT
  GET_USER_BALANCE: TELNYX_GET_USER_BALANCE_OUTPUT
  LIST_AUDIT_LOGS: TELNYX_LIST_AUDIT_LOGS_OUTPUT
  LIST_CONNECTIONS: TELNYX_LIST_CONNECTIONS_OUTPUT
  LIST_DYNAMIC_EMERGENCY_ENDPOINTS: TELNYX_LIST_DYNAMIC_EMERGENCY_ENDPOINTS_OUTPUT
  LIST_MESSAGING_PROFILES: TELNYX_LIST_MESSAGING_PROFILES_OUTPUT
  LIST_MESSAGING_URL_DOMAINS: TELNYX_LIST_MESSAGING_URL_DOMAINS_OUTPUT
  LIST_MOBILE_NETWORK_OPERATORS: TELNYX_LIST_MOBILE_NETWORK_OPERATORS_OUTPUT
  LIST_NETWORKS: TELNYX_LIST_NETWORKS_OUTPUT
  LIST_NETWORK_INTERFACES: TELNYX_LIST_NETWORK_INTERFACES_OUTPUT
  LIST_NOTIFICATION_CHANNELS: TELNYX_LIST_NOTIFICATION_CHANNELS_OUTPUT
  LIST_NOTIFICATION_EVENTS: TELNYX_LIST_NOTIFICATION_EVENTS_OUTPUT
  LIST_NOTIFICATION_EVENT_CONDITIONS: TELNYX_LIST_NOTIFICATION_EVENT_CONDITIONS_OUTPUT
  LIST_NOTIFICATION_PROFILES: TELNYX_LIST_NOTIFICATION_PROFILES_OUTPUT
  LIST_PHONE_NUMBERS: TELNYX_LIST_PHONE_NUMBERS_OUTPUT
  LIST_SSO_AUTHENTICATION_PROVIDERS: TELNYX_LIST_SSO_AUTHENTICATION_PROVIDERS_OUTPUT
  RETRIEVE_NETWORK: TELNYX_RETRIEVE_NETWORK_OUTPUT
  RETRIEVE_NOTIFICATION_CHANNEL: TELNYX_RETRIEVE_NOTIFICATION_CHANNEL_OUTPUT
  RETRIEVE_NOTIFICATION_PROFILE: TELNYX_RETRIEVE_NOTIFICATION_PROFILE_OUTPUT
  RETRIEVE_NOTIFICATION_SETTING: TELNYX_RETRIEVE_NOTIFICATION_SETTING_OUTPUT
  UPDATE_NETWORK: TELNYX_UPDATE_NETWORK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TELNYX toolkit.
 */
export const TELNYX = {
  slug: "telnyx",
  tools: {
    /**
     * Tool to create a new network. use when you need to provision a fresh network resource before connecting devices.
     */
    CREATE_NETWORK: "TELNYX_CREATE_NETWORK",
    /**
     * Tool to create a notification channel. use when you need to register a channel (sms, voice, email, or webhook) to receive notifications. e.g., create a webhook channel for event callbacks.
     */
    CREATE_NOTIFICATION_CHANNEL: "TELNYX_CREATE_NOTIFICATION_CHANNEL",
    /**
     * Tool to create a notification profile. use when you need to register a new profile to group notification channels and define notification settings.
     */
    CREATE_NOTIFICATION_PROFILE: "TELNYX_CREATE_NOTIFICATION_PROFILE",
    /**
     * Tool to add a notification setting. use after creating the event condition, profile, and channel.
     */
    CREATE_NOTIFICATION_SETTING: "TELNYX_CREATE_NOTIFICATION_SETTING",
    /**
     * Tool to delete a network by id. use when you have obtained the network's identifier and need to remove it permanently.
     */
    DELETE_NETWORK: "TELNYX_DELETE_NETWORK",
    /**
     * Tool to delete a notification channel by id. use when you have the channel's identifier and need to remove it permanently.
     */
    DELETE_NOTIFICATION_CHANNEL: "TELNYX_DELETE_NOTIFICATION_CHANNEL",
    /**
     * Tool to delete a notification profile by id. use when you have the profile's identifier and need to remove it permanently.
     */
    DELETE_NOTIFICATION_PROFILE: "TELNYX_DELETE_NOTIFICATION_PROFILE",
    /**
     * Tool to delete a notification setting by id. use when you need to permanently remove an existing notification setting before reconfiguration.
     */
    DELETE_NOTIFICATION_SETTING: "TELNYX_DELETE_NOTIFICATION_SETTING",
    /**
     * Tool to retrieve the current user account balance and credit details. use after authenticating your account to check available balance.
     */
    GET_USER_BALANCE: "TELNYX_GET_USER_BALANCE",
    /**
     * Tool to retrieve a list of audit log entries for your account. use when you need to review recent resource changes with optional pagination and date filters.
     */
    LIST_AUDIT_LOGS: "TELNYX_LIST_AUDIT_LOGS",
    /**
     * Tool to retrieve all connections in your account. use when you need to list connections with pagination, filtering, and sorting.
     */
    LIST_CONNECTIONS: "TELNYX_LIST_CONNECTIONS",
    /**
     * Tool to list dynamic emergency endpoints. use when you need to retrieve dynamic emergency endpoint records, optionally filtered by status or country. example: "list all activated endpoints in us".
     */
    LIST_DYNAMIC_EMERGENCY_ENDPOINTS: "TELNYX_LIST_DYNAMIC_EMERGENCY_ENDPOINTS",
    /**
     * Tool to list messaging profiles. use when you need to retrieve messaging profiles with optional pagination.
     */
    LIST_MESSAGING_PROFILES: "TELNYX_LIST_MESSAGING_PROFILES",
    /**
     * Tool to list configured messaging url domains. use when you need to retrieve messaging url domains for a profile.
     */
    LIST_MESSAGING_URL_DOMAINS: "TELNYX_LIST_MESSAGING_URL_DOMAINS",
    /**
     * Tool to list available mobile network operators. use when you need to discover operators optionally filtered by country code, operator name, or with pagination.
     */
    LIST_MOBILE_NETWORK_OPERATORS: "TELNYX_LIST_MOBILE_NETWORK_OPERATORS",
    /**
     * Tool to list all networks in your account. use when you need to retrieve networks with optional pagination and filtering.
     */
    LIST_NETWORKS: "TELNYX_LIST_NETWORKS",
    /**
     * Tool to list all network interfaces for a specified network. use after retrieving a network's id to enumerate its interfaces.
     */
    LIST_NETWORK_INTERFACES: "TELNYX_LIST_NETWORK_INTERFACES",
    /**
     * Tool to list all notification channels. use when you need to retrieve and paginate existing notification channels, optionally filtering by channel type.
     */
    LIST_NOTIFICATION_CHANNELS: "TELNYX_LIST_NOTIFICATION_CHANNELS",
    /**
     * Tool to list all notification events. use when you need to retrieve and paginate available notification events.
     */
    LIST_NOTIFICATION_EVENTS: "TELNYX_LIST_NOTIFICATION_EVENTS",
    /**
     * Tool to list all notification event conditions. use when you need to retrieve and paginate notification event conditions, optionally filtering by associated record type.
     */
    LIST_NOTIFICATION_EVENT_CONDITIONS: "TELNYX_LIST_NOTIFICATION_EVENT_CONDITIONS",
    /**
     * Tool to list all notification profiles. use when you need to retrieve and paginate your notification profiles with optional pagination.
     */
    LIST_NOTIFICATION_PROFILES: "TELNYX_LIST_NOTIFICATION_PROFILES",
    /**
     * Tool to list phone numbers associated with your account. use when you need to retrieve and filter your phone numbers with optional pagination and sorting.
     */
    LIST_PHONE_NUMBERS: "TELNYX_LIST_PHONE_NUMBERS",
    /**
     * Tool to retrieve all configured sso authentication providers. use after authenticating to enumerate your organization's sso providers.
     */
    LIST_SSO_AUTHENTICATION_PROVIDERS: "TELNYX_LIST_SSO_AUTHENTICATION_PROVIDERS",
    /**
     * Tool to retrieve details of a specific network by id. use after obtaining the network's identifier to fetch its current attributes before update or delete operations.
     */
    RETRIEVE_NETWORK: "TELNYX_RETRIEVE_NETWORK",
    /**
     * Tool to retrieve a notification channel by id. use after you have a channel id and need its details, such as name, type, and status.
     */
    RETRIEVE_NOTIFICATION_CHANNEL: "TELNYX_RETRIEVE_NOTIFICATION_CHANNEL",
    /**
     * Tool to retrieve a notification profile by id. use after obtaining the profile id when you need details about its webhook endpoints and subscribed events.
     */
    RETRIEVE_NOTIFICATION_PROFILE: "TELNYX_RETRIEVE_NOTIFICATION_PROFILE",
    /**
     * Tool to retrieve a notification setting by id. use after obtaining the notification setting id to fetch its details, such as status, parameters, and associated channel.
     */
    RETRIEVE_NOTIFICATION_SETTING: "TELNYX_RETRIEVE_NOTIFICATION_SETTING",
    /**
     * Tool to update details of an existing network. use when you have a network's identifier and need to modify its name or tags.
     */
    UPDATE_NETWORK: "TELNYX_UPDATE_NETWORK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TELNYX".
 */
export type TELNYX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TELNYX".
 */
export type TELNYX_TRIGGER_EVENTS = {}
