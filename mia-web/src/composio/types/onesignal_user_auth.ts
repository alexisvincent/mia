// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ONESIGNAL_USER_AUTH's ONESIGNAL_USER_AUTH_ADD_TAGS tool input.
 */
type ONESIGNAL_USER_AUTH_ADD_TAGS_INPUT = {
  /**
   * App Id
   * @description OneSignal App ID to associate the tags update.
   */
  app_id?: string;
  /**
   * Player Id
   * @description Unique OneSignal player (device) ID to update tags for.
   */
  player_id?: string;
  /**
   * Tags
   * @description Mapping of tag keys to values. Keys must be strings (max length 30) and values can be strings or null to delete a tag. Up to 20 tags may be provided.
   */
  tags?: {
      [key: string]: string | null;
  };
};

/**
 * Type of ONESIGNAL_USER_AUTH's ONESIGNAL_USER_AUTH_ADD_TAGS tool output.
 */
type ONESIGNAL_USER_AUTH_ADD_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages if any occurred.
       * @default null
       */
      errors: string[] | null;
      /**
       * Message
       * @description Additional information about the operation.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the tag update succeeded.
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
 * Type of ONESIGNAL_USER_AUTH's ONESIGNAL_USER_AUTH_EDIT_DEVICE tool input.
 */
type ONESIGNAL_USER_AUTH_EDIT_DEVICE_INPUT = {
  /**
   * Ad Id
   * @description Advertising identifier (IDFA or AAID).
   * @default null
   */
  ad_id: string | null;
  /**
   * Amount Spent
   * @description Total amount spent by the user.
   * @default null
   */
  amount_spent: number | null;
  /**
   * App Id
   * @description OneSignal App ID the device belongs to.
   * @default null
   */
  app_id: string | null;
  /**
   * Badge Count
   * @description Current iOS badge count displayed on the app icon.
   * @default null
   */
  badge_count: number | null;
  /**
   * Country
   * @description Country code (e.g., 'US').
   * @default null
   */
  country: string | null;
  /**
   * Created At
   * @description Unix timestamp when the device was created.
   * @default null
   */
  created_at: number | null;
  /**
   * Device Model
   * @description Hardware model of the device.
   * @default null
   */
  device_model: string | null;
  /**
   * Device Os
   * @description Operating system version of the device.
   * @default null
   */
  device_os: string | null;
  /**
   * Game Version
   * @description App version of the device.
   * @default null
   */
  game_version: string | null;
  /**
   * Identifier
   * @description Push token (e.g., FCM or APNS token) or email.
   * @default null
   */
  identifier: string | null;
  /**
   * Language
   * @description Locale code of the device (ISO 639-1).
   * @default null
   */
  language: string | null;
  /**
   * Last Active
   * @description Last active time as a Unix timestamp.
   * @default null
   */
  last_active: number | null;
  /**
   * Lat
   * @description Device latitude.
   * @default null
   */
  lat: number | null;
  /**
   * Long
   * @description Device longitude.
   * @default null
   */
  long: number | null;
  /**
   * Notification Types
   * @description 1 = subscribed, -2 = unsubscribed (iOS only).
   * @default null
   */
  notification_types: number | null;
  /**
   * Player Id
   * @description Unique device (player) ID to update.
   */
  player_id?: string;
  /**
   * Playtime
   * @description Seconds the player has been online.
   * @default null
   */
  playtime: number | null;
  /**
   * Sdk
   * @description Version of the OneSignal SDK.
   * @default null
   */
  sdk: string | null;
  /**
   * Session Count
   * @description Number of times the app has been opened.
   * @default null
   */
  session_count: number | null;
  /**
   * Tags
   * @description Custom tags to set on the device.
   * @default null
   */
  tags: {
      [key: string]: unknown;
  } | null;
  /**
   * Timezone
   * @description Offset in seconds from UTC (negative if behind).
   * @default null
   */
  timezone: number | null;
};

/**
 * Type of ONESIGNAL_USER_AUTH's ONESIGNAL_USER_AUTH_EDIT_DEVICE tool output.
 */
type ONESIGNAL_USER_AUTH_EDIT_DEVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Device (player) ID.
       */
      id: string;
      /**
       * Success
       * @description True if the update succeeded.
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
 * Type of ONESIGNAL_USER_AUTH's ONESIGNAL_USER_AUTH_ONESIGNAL_VIEW_SEGMENT tool input.
 */
type ONESIGNAL_USER_AUTH_ONESIGNAL_VIEW_SEGMENT_INPUT = {
  /**
   * App Id
   * @description The OneSignal App ID to retrieve segment for.
   */
  app_id?: string;
  /**
   * Segment Id
   * @description The OneSignal Segment ID to retrieve details for.
   */
  segment_id?: string;
};

/**
 * Type of ONESIGNAL_USER_AUTH's ONESIGNAL_USER_AUTH_ONESIGNAL_VIEW_SEGMENT tool output.
 */
type ONESIGNAL_USER_AUTH_ONESIGNAL_VIEW_SEGMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Unix timestamp when the segment was created
       */
      created_at: number;
      /**
       * Filters
       * @description List of filter conditions defining the segment
       */
      filters: {
          [key: string]: unknown;
      }[];
      /**
       * Id
       * @description Unique segment identifier
       */
      id: string;
      /**
       * Name
       * @description Human-readable segment name
       */
      name: string;
      /**
       * Updated At
       * @description Unix timestamp when the segment was last updated
       */
      updated_at: number;
      /**
       * Users
       * @description Number of users in the segment; null if not calculated
       * @default null
       */
      users: number | null;
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
 * Type of ONESIGNAL_USER_AUTH's ONESIGNAL_USER_AUTH_VIEW_APP tool input.
 */
type ONESIGNAL_USER_AUTH_VIEW_APP_INPUT = {
  /**
   * App Id
   * @description The OneSignal App ID to retrieve details for.
   */
  app_id?: string;
};

/**
 * Type of ONESIGNAL_USER_AUTH's ONESIGNAL_USER_AUTH_VIEW_APP tool output.
 */
type ONESIGNAL_USER_AUTH_VIEW_APP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Apns Env
       * @description APNS environment (sandbox or production)
       * @default null
       */
      apns_env: string | null;
      /**
       * Apns P12
       * @description APNS p12 certificate contents
       * @default null
       */
      apns_p12: string | null;
      /**
       * Apns P12 Password
       * @description Password for APNS p12 certificate
       * @default null
       */
      apns_p12_password: string | null;
      /**
       * Basic Auth Key
       * @description Basic authorization key
       */
      basic_auth_key: string;
      /**
       * Chrome Key
       * @description Chrome web push key (if configured)
       * @default null
       */
      chrome_key: string | null;
      /**
       * Chrome Web Default Notification Icon
       * @description Default notification icon URL for Chrome web push
       * @default null
       */
      chrome_web_default_notification_icon: string | null;
      /**
       * Chrome Web Gcm Sender Id
       * @description GCM sender ID for Chrome web push
       * @default null
       */
      chrome_web_gcm_sender_id: string | null;
      /**
       * Chrome Web Origin
       * @description Chrome web origin for push notifications
       * @default null
       */
      chrome_web_origin: string | null;
      /**
       * Chrome Web Sub Domain
       * @description Subdomain used for Chrome web push
       * @default null
       */
      chrome_web_sub_domain: string | null;
      /**
       * Gcm Key
       * @description Google Cloud Messaging key (if any)
       * @default null
       */
      gcm_key: string | null;
      /**
       * Id
       * @description OneSignal App ID
       */
      id: string;
      /**
       * Messageable Players
       * @description Number of users eligible to receive notifications
       */
      messageable_players: number;
      /**
       * Name
       * @description Name of the OneSignal app
       */
      name: string;
      /**
       * Organization Id
       * @description Organization ID associated with the app if applicable
       * @default null
       */
      organization_id: string | null;
      /**
       * Players
       * @description Total number of users (players)
       */
      players: number;
      /**
       * Safari Apns Cert
       * @description Safari APNS certificate contents
       * @default null
       */
      safari_apns_cert: string | null;
      /**
       * Safari Apns Cert Password
       * @description Password for Safari APNS certificate
       * @default null
       */
      safari_apns_cert_password: string | null;
      /**
       * Safari Icon 128 128
       * @description Safari icon 128x128 URL
       * @default null
       */
      safari_icon_128_128: string | null;
      /**
       * Safari Icon 16 16
       * @description Safari icon 16x16 URL
       * @default null
       */
      safari_icon_16_16: string | null;
      /**
       * Safari Icon 256 256
       * @description Safari icon 256x256 URL
       * @default null
       */
      safari_icon_256_256: string | null;
      /**
       * Safari Icon 32 32
       * @description Safari icon 32x32 URL
       * @default null
       */
      safari_icon_32_32: string | null;
      /**
       * Safari Icon 64 64
       * @description Safari icon 64x64 URL
       * @default null
       */
      safari_icon_64_64: string | null;
      /**
       * Safari Push Id
       * @description Safari Push ID
       * @default null
       */
      safari_push_id: string | null;
      /**
       * Safari Site Origin
       * @description Safari site origin for push notifications
       * @default null
       */
      safari_site_origin: string | null;
      /**
       * Site Name
       * @description Optional site name configured for web push
       * @default null
       */
      site_name: string | null;
      /**
       * Web Push Certificate
       * @description Web push certificate (if configured)
       * @default null
       */
      web_push_certificate: string | null;
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
 * Type of ONESIGNAL_USER_AUTH's ONESIGNAL_USER_AUTH_VIEW_DEVICE tool input.
 */
type ONESIGNAL_USER_AUTH_VIEW_DEVICE_INPUT = {
  /**
   * App Id
   * @description OneSignal App ID to scope the lookup. If omitted, uses the default app from authentication.
   * @default null
   */
  app_id: string | null;
  /**
   * Player Id
   * @description The OneSignal Player (device) ID to retrieve details for.
   */
  player_id?: string;
};

/**
 * Type of ONESIGNAL_USER_AUTH's ONESIGNAL_USER_AUTH_VIEW_DEVICE tool output.
 */
type ONESIGNAL_USER_AUTH_VIEW_DEVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Additional Data
       * @description Additional response fields not explicitly modeled
       * @default {}
       */
      additional_data: {
          [key: string]: unknown;
      };
      /**
       * Amount Spent
       * @description Amount spent by the user, if tracked
       * @default null
       */
      amount_spent: number | null;
      /**
       * Created At
       * @description Datetime when the device was created (ISO 8601 format)
       * @default null
       */
      created_at: string | null;
      /**
       * Device Os
       * @description Operating system version of the device
       * @default null
       */
      device_os: string | null;
      /**
       * Device Type
       * @description Device platform code
       */
      device_type: number;
      /**
       * External User Id
       * @description Custom external user ID linked to the device
       * @default null
       */
      external_user_id: string | null;
      /**
       * Game Version
       * @description Version of the app installed on the device
       * @default null
       */
      game_version: string | null;
      /**
       * Id
       * @description Unique OneSignal player ID.
       */
      id: string;
      /**
       * Identifier
       * @description Device identifier (e.g., push token)
       * @default null
       */
      identifier: string | null;
      /**
       * Invalid Identifier
       * @description True if the device token is invalid
       * @default null
       */
      invalid_identifier: boolean | null;
      /**
       * Language
       * @description Locale code of the device (ISO 639-1)
       * @default null
       */
      language: string | null;
      /**
       * Last Active
       * @description Last active datetime (ISO 8601 format)
       * @default null
       */
      last_active: string | null;
      /**
       * Notification Types
       * @description Notification permission setting
       * @default null
       */
      notification_types: number | null;
      /**
       * Session Count
       * @description Number of times the user has opened the app
       */
      session_count: number;
      /**
       * Tags
       * @description Custom tags set on the device
       * @default null
       */
      tags: {
          [key: string]: unknown;
      } | null;
      /**
       * Timezone
       * @description Offset in seconds from UTC (negative if behind)
       * @default null
       */
      timezone: number | null;
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
 * Type of ONESIGNAL_USER_AUTH's ONESIGNAL_USER_AUTH_VIEW_SEGMENTS tool input.
 */
type ONESIGNAL_USER_AUTH_VIEW_SEGMENTS_INPUT = {
  /**
   * App Id
   * @description OneSignal App ID to list segments for
   */
  app_id?: string;
  /**
   * Limit
   * @description Number of segments to return (1 to 300). Defaults to OneSignal default if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset for pagination (number of items to skip).
   * @default null
   */
  offset: number | null;
};

/**
 * Type of ONESIGNAL_USER_AUTH's ONESIGNAL_USER_AUTH_VIEW_SEGMENTS tool output.
 */
type ONESIGNAL_USER_AUTH_VIEW_SEGMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Segments
       * @description List of segment objects for the app
       */
      segments: {
          /**
           * Created At
           * @description Unix timestamp of segment creation
           */
          created_at: number;
          /**
           * Deleted
           * @description Whether the segment is deleted
           */
          deleted: boolean;
          /**
           * Filters
           * @description Filters used to create the segment (if applicable)
           */
          filters: {
              [key: string]: unknown;
          }[];
          /**
           * Id
           * @description Segment ID
           */
          id: string;
          /**
           * Name
           * @description Name of the segment
           */
          name: string;
          /**
           * Updated At
           * @description Unix timestamp of last segment update
           */
          updated_at: number;
      }[];
      /**
       * Total Count
       * @description Total number of segments available for the app
       */
      total_count: number;
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
 * Type of ONESIGNAL_USER_AUTH's ONESIGNAL_USER_AUTH_VIEW_TAGS tool input.
 */
type ONESIGNAL_USER_AUTH_VIEW_TAGS_INPUT = {
  /**
   * App Id
   * @description OneSignal App ID to scope the lookup
   */
  app_id?: string;
  /**
   * Player Id
   * @description The OneSignal Player (device) ID to retrieve tags for.
   */
  player_id?: string;
};

/**
 * Type of ONESIGNAL_USER_AUTH's ONESIGNAL_USER_AUTH_VIEW_TAGS tool output.
 */
type ONESIGNAL_USER_AUTH_VIEW_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages if the request failed
       * @default null
       */
      errors: string[] | null;
      /**
       * Success
       * @description True if the request was successful
       */
      success: boolean;
      /**
       * Tags
       * @description Custom tag key/value pairs assigned to the device
       */
      tags: {
          [key: string]: string;
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
 * Type map of all available tool input types for toolkit "ONESIGNAL_USER_AUTH".
 */
export type ONESIGNAL_USER_AUTH_TOOL_INPUTS = {
  ADD_TAGS: ONESIGNAL_USER_AUTH_ADD_TAGS_INPUT
  EDIT_DEVICE: ONESIGNAL_USER_AUTH_EDIT_DEVICE_INPUT
  ONESIGNAL_VIEW_SEGMENT: ONESIGNAL_USER_AUTH_ONESIGNAL_VIEW_SEGMENT_INPUT
  VIEW_APP: ONESIGNAL_USER_AUTH_VIEW_APP_INPUT
  VIEW_DEVICE: ONESIGNAL_USER_AUTH_VIEW_DEVICE_INPUT
  VIEW_SEGMENTS: ONESIGNAL_USER_AUTH_VIEW_SEGMENTS_INPUT
  VIEW_TAGS: ONESIGNAL_USER_AUTH_VIEW_TAGS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ONESIGNAL_USER_AUTH".
 */
export type ONESIGNAL_USER_AUTH_TOOL_OUTPUTS = {
  ADD_TAGS: ONESIGNAL_USER_AUTH_ADD_TAGS_OUTPUT
  EDIT_DEVICE: ONESIGNAL_USER_AUTH_EDIT_DEVICE_OUTPUT
  ONESIGNAL_VIEW_SEGMENT: ONESIGNAL_USER_AUTH_ONESIGNAL_VIEW_SEGMENT_OUTPUT
  VIEW_APP: ONESIGNAL_USER_AUTH_VIEW_APP_OUTPUT
  VIEW_DEVICE: ONESIGNAL_USER_AUTH_VIEW_DEVICE_OUTPUT
  VIEW_SEGMENTS: ONESIGNAL_USER_AUTH_VIEW_SEGMENTS_OUTPUT
  VIEW_TAGS: ONESIGNAL_USER_AUTH_VIEW_TAGS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ONESIGNAL_USER_AUTH toolkit.
 */
export const ONESIGNAL_USER_AUTH = {
  slug: "onesignal_user_auth",
  tools: {
    /**
     * Tool to assign or update tags on a onesignal device. use when you need to apply or change custom tags for a player for segmentation.
     */
    ADD_TAGS: "ONESIGNAL_USER_AUTH_ADD_TAGS",
    /**
     * Tool to update an existing onesignal device (player) record. use when you have the player id and need to modify device attributes.
     */
    EDIT_DEVICE: "ONESIGNAL_USER_AUTH_EDIT_DEVICE",
    /**
     * Tool to retrieve details for a specific onesignal segment. use when you need to inspect segment definition.
     */
    ONESIGNAL_VIEW_SEGMENT: "ONESIGNAL_USER_AUTH_ONESIGNAL_VIEW_SEGMENT",
    /**
     * Tool to retrieve details for a specific onesignal app. use after authenticating to inspect app settings.
     */
    VIEW_APP: "ONESIGNAL_USER_AUTH_VIEW_APP",
    /**
     * Tool to retrieve details for a specific device/player. use when you have a player id and optional app id.
     */
    VIEW_DEVICE: "ONESIGNAL_USER_AUTH_VIEW_DEVICE",
    /**
     * Tool to list all segments for an app. use after obtaining the app id to retrieve a paginated list of segments.
     */
    VIEW_SEGMENTS: "ONESIGNAL_USER_AUTH_VIEW_SEGMENTS",
    /**
     * Tool to get tags assigned to a device. use when you need to fetch key/value tags for a specific onesignal player.
     */
    VIEW_TAGS: "ONESIGNAL_USER_AUTH_VIEW_TAGS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ONESIGNAL_USER_AUTH".
 */
export type ONESIGNAL_USER_AUTH_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ONESIGNAL_USER_AUTH".
 */
export type ONESIGNAL_USER_AUTH_TRIGGER_EVENTS = {}
