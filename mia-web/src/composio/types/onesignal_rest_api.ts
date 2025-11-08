// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_CREATE_NOTIFICATION tool input.
 */
type ONESIGNAL_REST_API_CREATE_NOTIFICATION_INPUT = {
  /**
   * Android Channel Id
   * @description Android channel ID to post notification to
   * @default null
   */
  android_channel_id: string | null;
  /**
   * Android Sound
   * @description Custom Android sound file
   * @default null
   */
  android_sound: string | null;
  /**
   * App Id
   * @description Your OneSignal App ID
   */
  app_id?: string;
  /**
   * Big Picture
   * Format: uri
   * @description URL for Android big picture
   * @default null
   */
  big_picture: string | null;
  /**
   * Buttons
   * @description Action buttons; see OneSignal docs for fields (id, text, icon, url)
   * @default null
   */
  buttons: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Contents
   * @description Notification message per language
   */
  contents?: {
      [key: string]: string;
  };
  /**
   * Data
   * @description Custom key/value data payload
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Delayed Option
   * @description Delay delivery based on 'timezone' or 'last-active'
   * @default null
   * @enum {string|null}
   */
  delayed_option: "timezone" | "last-active" | null;
  /**
   * Extra Params
   * @description Additional OneSignal parameters not explicitly modeled above
   * @default null
   */
  extra_params: {
      [key: string]: unknown;
  } | null;
  /**
   * Filters
   * @description Advanced audience filters; see OneSignal docs for syntax
   * @default null
   */
  filters: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Headings
   * @description Notification title per language
   * @default null
   */
  headings: {
      [key: string]: string;
  } | null;
  /**
   * Include Player Ids
   * @description Specific device/player IDs to send the notification to
   * @default null
   */
  include_player_ids: string[] | null;
  /**
   * Included Segments
   * @description Predefined audience segments (e.g., ['All'])
   * @default null
   */
  included_segments: string[] | null;
  /**
   * Ios Attachments
   * @description iOS media attachments mapping identifiers to URLs
   * @default null
   */
  ios_attachments: {
      [key: string]: unknown;
  } | null;
  /**
   * Ios Sound
   * @description Custom iOS sound file
   * @default null
   */
  ios_sound: string | null;
  /**
   * Large Icon
   * Format: uri
   * @description URL for Android large icon
   * @default null
   */
  large_icon: string | null;
  /**
   * Send After
   * @description Schedule delivery time in ISO 8601 format (e.g., '2023-09-01T12:00:00Z')
   * @default null
   */
  send_after: string | null;
  /**
   * Subtitle
   * @description Notification subtitle per language
   * @default null
   */
  subtitle: {
      [key: string]: string;
  } | null;
  /**
   * Url
   * Format: uri
   * @description URL to open when the notification is tapped
   * @default null
   */
  url: string | null;
};

/**
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_CREATE_NOTIFICATION tool output.
 */
type ONESIGNAL_REST_API_CREATE_NOTIFICATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Error details if the request failed
       * @default null
       */
      errors: unknown;
      /**
       * External Id
       * @description Echo of external_id if provided in the request
       * @default null
       */
      external_id: string | null;
      /**
       * Id
       * @description Generated OneSignal notification ID
       */
      id: string;
      /**
       * Recipients
       * @description Number of recipients the notification was sent to
       */
      recipients: number;
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
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_DELETE_DEVICE tool input.
 */
type ONESIGNAL_REST_API_DELETE_DEVICE_INPUT = {
  /**
   * App Id
   * @description The OneSignal App ID
   */
  app_id?: string;
  /**
   * Player Id
   * @description The OneSignal Player (Device) ID to delete
   */
  player_id?: string;
};

/**
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_DELETE_DEVICE tool output.
 */
type ONESIGNAL_REST_API_DELETE_DEVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors if deletion fails
       * @default null
       */
      errors: string[] | null;
      /**
       * Id
       * @description The ID of the deleted player if successful
       * @default null
       */
      id: string | null;
      /**
       * Success
       * @description Indicates whether the delete was successful
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
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_UPDATE_DEVICE tool input.
 */
type ONESIGNAL_REST_API_UPDATE_DEVICE_INPUT = {
  /**
   * Ad Id
   * @description Advertising ID
   * @default null
   */
  ad_id: string | null;
  /**
   * Amount Spent
   * @description Amount the user has spent
   * @default null
   */
  amount_spent: string | null;
  /**
   * App Id
   * @description Your OneSignal App ID
   */
  app_id?: string;
  /**
   * Badge Count
   * @description iOS badge count
   * @default null
   */
  badge_count: number | null;
  /**
   * Country
   * @description Country code, e.g., 'US'
   * @default null
   */
  country: string | null;
  /**
   * Created At
   * @description Unix timestamp when the device was created
   * @default null
   */
  created_at: number | null;
  /**
   * Custom Attributes
   * @description Additional custom attributes
   * @default null
   */
  custom_attributes: {
      [key: string]: unknown;
  } | null;
  /**
   * Device Model
   * @description Device model
   * @default null
   */
  device_model: string | null;
  /**
   * Device Os
   * @description Operating system version
   * @default null
   */
  device_os: string | null;
  /**
   * Device Type
   * @description Device type. See OneSignal docs for list
   * @default null
   */
  device_type: number | null;
  /**
   * Email Auth Hash
   * @description Email authentication hash
   * @default null
   */
  email_auth_hash: string | null;
  /**
   * External User Id
   * @description External user ID
   * @default null
   */
  external_user_id: string | null;
  /**
   * External User Id Auth Hash
   * @description Auth hash for external_user_id
   * @default null
   */
  external_user_id_auth_hash: string | null;
  /**
   * Game Version
   * @description Version of the app/game
   * @default null
   */
  game_version: string | null;
  /**
   * Identifier
   * @description Push token, email address, or external user ID
   * @default null
   */
  identifier: string | null;
  /**
   * Language
   * @description Language code, e.g., 'en'
   * @default null
   */
  language: string | null;
  /**
   * Last Active
   * @description Unix timestamp when the device was last active
   * @default null
   */
  last_active: number | null;
  /**
   * Latitude
   * @description Latitude coordinate
   * @default null
   */
  latitude: number | null;
  /**
   * Longitude
   * @description Longitude coordinate
   * @default null
   */
  longitude: number | null;
  /**
   * Notification Types
   * @description Notification permission state
   * @default null
   */
  notification_types: number | null;
  /**
   * Player Id
   * @description Unique OneSignal device/player ID
   */
  player_id?: string;
  /**
   * Playtime
   * @description Total playtime in seconds
   * @default null
   */
  playtime: number | null;
  /**
   * Sms Auth Hash
   * @description SMS authentication hash
   * @default null
   */
  sms_auth_hash: string | null;
  /**
   * Tags
   * @description Custom tags for the device
   * @default null
   */
  tags: {
      [key: string]: unknown;
  } | null;
  /**
   * Test Type
   * @description 1 for development, 2 for ad-hoc
   * @default null
   */
  test_type: number | null;
  /**
   * Timezone
   * @description Timezone offset in seconds from UTC
   * @default null
   */
  timezone: number | null;
};

/**
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_UPDATE_DEVICE tool output.
 */
type ONESIGNAL_REST_API_UPDATE_DEVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The OneSignal device/player ID that was updated
       */
      id: string;
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
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_VIEW_AN_APP tool input.
 */
type ONESIGNAL_REST_API_VIEW_AN_APP_INPUT = {
  /**
   * App Id
   * @description Unique identifier for the OneSignal app.
   */
  app_id?: string;
};

/**
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_VIEW_AN_APP tool output.
 */
type ONESIGNAL_REST_API_VIEW_AN_APP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in seconds since epoch.
       */
      created_at: number;
      /**
       * Id
       * @description Unique identifier of the OneSignal app.
       */
      id: string;
      /**
       * Messageable Players
       * @description Number of devices eligible to receive notifications.
       */
      messageable_players: number;
      /**
       * Name
       * @description Name of the OneSignal app.
       */
      name: string;
      /**
       * Organization Id
       * @description Organization ID if the app belongs to one.
       * @default null
       */
      organization_id: string | null;
      /**
       * Players
       * @description Number of registered devices (players).
       */
      players: number;
      /**
       * Updated At
       * @description Last update timestamp in seconds since epoch.
       */
      updated_at: number;
  } & {
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
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_VIEW_DEVICE tool input.
 */
type ONESIGNAL_REST_API_VIEW_DEVICE_INPUT = {
  /**
   * App Id
   * @description Your OneSignal App ID.
   */
  app_id?: string;
  /**
   * Player Id
   * @description Unique ID of the device (player) to retrieve.
   */
  player_id?: string;
};

/**
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_VIEW_DEVICE tool output.
 */
type ONESIGNAL_REST_API_VIEW_DEVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ad Id
       * @description Advertising ID of the device.
       * @default null
       */
      ad_id: string | null;
      /**
       * Amount Spent
       * @description Total USD amount spent by the user on the app.
       */
      amount_spent: number;
      /**
       * Badge Count
       * @description Badge count on the device (iOS).
       */
      badge_count: number;
      /**
       * Created At
       * @description UNIX timestamp when the device record was created.
       */
      created_at: number;
      /**
       * Device Model
       * @description Device model (e.g., 'iPhone13,2').
       * @default null
       */
      device_model: string | null;
      /**
       * Device Os
       * @description Operating system of the device (e.g., 'iOS', 'Android').
       * @default null
       */
      device_os: string | null;
      /**
       * Device Type
       * @description Device platform type (e.g., iOS=0, Android=1, etc.).
       */
      device_type: number;
      /**
       * External User Id
       * @description External user ID associated with the device, if set.
       * @default null
       */
      external_user_id: string | null;
      /**
       * Game Version
       * @description Version of the app installed on the device.
       * @default null
       */
      game_version: string | null;
      /**
       * Id
       * @description Unique device (player) ID.
       */
      id: string;
      /**
       * Identifier
       * @description Device push token, email, or external user ID.
       */
      identifier: string;
      /**
       * Ip
       * @description Last known IP address of the device.
       * @default null
       */
      ip: string | null;
      /**
       * Language
       * @description Language code of the device (e.g., 'en').
       */
      language: string;
      /**
       * Last Active
       * @description ISO datetime string of the device's last activity.
       */
      last_active: string;
      /**
       * Playtime
       * @description Total playtime in seconds for the device.
       */
      playtime: number;
      /**
       * Rooted
       * @description Whether the device is rooted/jailbroken.
       * @default null
       */
      rooted: boolean | null;
      /**
       * Sdk
       * @description SDK version used by the device.
       * @default null
       */
      sdk: string | null;
      /**
       * Session Count
       * @description Number of sessions recorded for the device.
       */
      session_count: number;
      /**
       * Tags
       * @description Custom key/value tags associated with the device.
       * @default null
       */
      tags: {
          [key: string]: string;
      } | null;
      /**
       * Timezone
       * @description Time zone offset in seconds from UTC for the device.
       */
      timezone: number;
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
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_VIEW_DEVICES tool input.
 */
type ONESIGNAL_REST_API_VIEW_DEVICES_INPUT = {
  /**
   * App Id
   * @description Your OneSignal App ID.
   */
  app_id?: string;
  /**
   * Limit
   * @description Maximum number of devices to return (1-300). Defaults to 300.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Pagination offset. Defaults to 0.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_VIEW_DEVICES tool output.
 */
type ONESIGNAL_REST_API_VIEW_DEVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Maximum number of devices returned.
       */
      limit: number;
      /**
       * Offset
       * @description Offset used for pagination.
       */
      offset: number;
      /**
       * Players
       * @description List of player (device) objects.
       */
      players: {
          /**
           * Ad Id
           * @description Advertising ID for the device.
           * @default null
           */
          ad_id: string | null;
          /**
           * Amount Spent
           * @description Total amount spent by the player.
           */
          amount_spent: number;
          /**
           * Android Version
           * @description Android version if applicable.
           * @default null
           */
          android_version: string | null;
          /**
           * Badge Count
           * @description iOS badge count for the player.
           * @default null
           */
          badge_count: number | null;
          /**
           * Country
           * @description Country code of the player (e.g., 'US').
           * @default null
           */
          country: string | null;
          /**
           * Created At
           * @description Creation time of the player as a UNIX timestamp.
           */
          created_at: number;
          /**
           * Device Model
           * @description Device model (e.g., 'iPhone10,6').
           * @default null
           */
          device_model: string | null;
          /**
           * Device Os
           * @description Device operating system (e.g., '14.4').
           * @default null
           */
          device_os: string | null;
          /**
           * Device Type
           * @description Device type (1=iOS, 2=Android, etc.).
           */
          device_type: number;
          /**
           * First Name
           * @description First name of the player, if provided.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description OneSignal player (device) ID.
           */
          id: string;
          /**
           * Identifier
           * @description Device identifier (e.g., push token).
           * @default null
           */
          identifier: string | null;
          /**
           * Language
           * @description Language code of the player (e.g., 'en').
           * @default null
           */
          language: string | null;
          /**
           * Last Active
           * @description Last active time as a UNIX timestamp.
           */
          last_active: number;
          /**
           * Last Name
           * @description Last name of the player, if provided.
           * @default null
           */
          last_name: string | null;
          /**
           * Notification Types
           * @description Notification types available to the player.
           */
          notification_types: number;
          /**
           * Playtime
           * @description Total playtime in seconds.
           */
          playtime: number;
          /**
           * Purchases
           * @description List of purchases associated with this player.
           */
          purchases: {
              /**
               * Amount
               * @description Amount of the purchase.
               */
              amount: number;
              /**
               * Id
               * @description Purchase unique identifier.
               */
              id: string;
          }[];
          /**
           * Rooted
           * @description Whether the device is rooted or jailbroken.
           */
          rooted: boolean;
          /**
           * Sdk
           * @description SDK used by the player.
           * @default null
           */
          sdk: string | null;
          /**
           * Session Count
           * @description Number of sessions recorded for the device.
           */
          session_count: number;
          /**
           * Subscribable Status
           * @description Subscription status of the player.
           */
          subscribable_status: number;
          /**
           * Tags
           * @description Dictionary of player tags.
           */
          tags: {
              [key: string]: string;
          };
          /**
           * Timezone
           * @description Timezone of the player (e.g., 'America/Los_Angeles').
           * @default null
           */
          timezone: string | null;
      }[];
      /**
       * Total Count
       * @description Total number of devices.
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
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_VIEW_NOTIFICATIONS tool input.
 */
type ONESIGNAL_REST_API_VIEW_NOTIFICATIONS_INPUT = {
  /**
   * App Id
   * @description Your OneSignal App ID.
   */
  app_id?: string;
  /**
   * Limit
   * @description Maximum number of notifications to return (1-300). Defaults to 50.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Result offset for pagination. Defaults to 0.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_VIEW_NOTIFICATIONS tool output.
 */
type ONESIGNAL_REST_API_VIEW_NOTIFICATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Maximum number of notifications returned.
       */
      limit: number;
      /**
       * Notifications
       * @description List of notification summary objects.
       */
      notifications: {
          /**
           * Attachments
           * @description Attachments included (e.g., images).
           * @default null
           */
          attachments: {
              [key: string]: unknown;
          } | null;
          /**
           * Completed At
           * @description UNIX timestamp when completed.
           * @default null
           */
          completed_at: number | null;
          /**
           * Contents
           * @description Localized contents of notification.
           * @default null
           */
          contents: {
              [key: string]: string;
          } | null;
          /**
           * Converted
           * @description Number of conversions (clicks).
           * @default null
           */
          converted: number | null;
          /**
           * Data
           * @description Custom key/value pairs sent.
           * @default null
           */
          data: {
              [key: string]: unknown;
          } | null;
          /**
           * Excluded Segments
           * @description Segments excluded from notification.
           * @default null
           */
          excluded_segments: string[] | null;
          /**
           * Failed
           * @description Number of failed sends.
           * @default null
           */
          failed: number | null;
          /**
           * Headings
           * @description Localized headings of notification.
           * @default null
           */
          headings: {
              [key: string]: string;
          } | null;
          /**
           * Id
           * @description Notification ID.
           */
          id: string;
          /**
           * Include Player Ids
           * @description Specific player IDs targeted, if any.
           * @default null
           */
          include_player_ids: string[] | null;
          /**
           * Included Segments
           * @description Predefined audience segments targeted.
           * @default null
           */
          included_segments: string[] | null;
          /**
           * Queued At
           * @description UNIX timestamp when queued.
           * @default null
           */
          queued_at: number | null;
          /**
           * Send After
           * @description Scheduled ISO datetime for send-out, or null if sent immediately.
           * @default null
           */
          send_after: string | null;
          /**
           * Successful
           * @description Number of successful sends.
           * @default null
           */
          successful: number | null;
          /**
           * Url
           * @description Destination URL of notification.
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Offset
       * @description Offset used for pagination.
       */
      offset: number;
      /**
       * Total Count
       * @description Total number of notifications.
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
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_VIEW_SEGMENTS tool input.
 */
type ONESIGNAL_REST_API_VIEW_SEGMENTS_INPUT = {
  /**
   * App Id
   * @description OneSignal App ID to list segments for
   */
  app_id?: string;
  /**
   * Limit
   * @description Maximum number of segments to return (1-300). Default is 50.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Zero-based offset for pagination. Results sorted by creation time.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of ONESIGNAL_REST_API's ONESIGNAL_REST_API_VIEW_SEGMENTS tool output.
 */
type ONESIGNAL_REST_API_VIEW_SEGMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Segments
       * @description List of segments associated with the app
       */
      segments: {
          /**
           * Created At
           * @description Unix timestamp when the segment was created
           */
          created_at: number;
          /**
           * Filters
           * @description List of filter conditions that define this segment
           */
          filters: {
              [key: string]: string | number | boolean;
          }[];
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
      }[];
      /**
       * Total Count
       * @description Total number of segments for the app
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
 * Type map of all available tool input types for toolkit "ONESIGNAL_REST_API".
 */
export type ONESIGNAL_REST_API_TOOL_INPUTS = {
  CREATE_NOTIFICATION: ONESIGNAL_REST_API_CREATE_NOTIFICATION_INPUT
  DELETE_DEVICE: ONESIGNAL_REST_API_DELETE_DEVICE_INPUT
  UPDATE_DEVICE: ONESIGNAL_REST_API_UPDATE_DEVICE_INPUT
  VIEW_AN_APP: ONESIGNAL_REST_API_VIEW_AN_APP_INPUT
  VIEW_DEVICE: ONESIGNAL_REST_API_VIEW_DEVICE_INPUT
  VIEW_DEVICES: ONESIGNAL_REST_API_VIEW_DEVICES_INPUT
  VIEW_NOTIFICATIONS: ONESIGNAL_REST_API_VIEW_NOTIFICATIONS_INPUT
  VIEW_SEGMENTS: ONESIGNAL_REST_API_VIEW_SEGMENTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ONESIGNAL_REST_API".
 */
export type ONESIGNAL_REST_API_TOOL_OUTPUTS = {
  CREATE_NOTIFICATION: ONESIGNAL_REST_API_CREATE_NOTIFICATION_OUTPUT
  DELETE_DEVICE: ONESIGNAL_REST_API_DELETE_DEVICE_OUTPUT
  UPDATE_DEVICE: ONESIGNAL_REST_API_UPDATE_DEVICE_OUTPUT
  VIEW_AN_APP: ONESIGNAL_REST_API_VIEW_AN_APP_OUTPUT
  VIEW_DEVICE: ONESIGNAL_REST_API_VIEW_DEVICE_OUTPUT
  VIEW_DEVICES: ONESIGNAL_REST_API_VIEW_DEVICES_OUTPUT
  VIEW_NOTIFICATIONS: ONESIGNAL_REST_API_VIEW_NOTIFICATIONS_OUTPUT
  VIEW_SEGMENTS: ONESIGNAL_REST_API_VIEW_SEGMENTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ONESIGNAL_REST_API toolkit.
 */
export const ONESIGNAL_REST_API = {
  slug: "onesignal_rest_api",
  tools: {
    /**
     * Tool to create and send a onesignal push notification. use when you have your message and target audience ready to dispatch notifications.
     */
    CREATE_NOTIFICATION: "ONESIGNAL_REST_API_CREATE_NOTIFICATION",
    /**
     * Tool to delete a device (player) from a onesignal app. use when you need to remove a specific device by its player id.
     */
    DELETE_DEVICE: "ONESIGNAL_REST_API_DELETE_DEVICE",
    /**
     * Tool to update properties of an existing device. use when you need to modify device attributes after registration.
     */
    UPDATE_DEVICE: "ONESIGNAL_REST_API_UPDATE_DEVICE",
    /**
     * Tool to retrieve metadata for a single onesignal app. use when you need to fetch app details by its id.
     */
    VIEW_AN_APP: "ONESIGNAL_REST_API_VIEW_AN_APP",
    /**
     * Tool to retrieve details of a specific device (player). use when you have a onesignal player id and need current device info.
     */
    VIEW_DEVICE: "ONESIGNAL_REST_API_VIEW_DEVICE",
    /**
     * Tool to retrieve a paginated list of devices (players) for a onesignal app. use when you need to list or audit all registered devices for a given app.
     */
    VIEW_DEVICES: "ONESIGNAL_REST_API_VIEW_DEVICES",
    /**
     * Tool to retrieve details of multiple notifications. use when you need to list notifications for a specific app.
     */
    VIEW_NOTIFICATIONS: "ONESIGNAL_REST_API_VIEW_NOTIFICATIONS",
    /**
     * Tool to view segments for a onesignal app. use when you need to list all segments associated with an app.
     */
    VIEW_SEGMENTS: "ONESIGNAL_REST_API_VIEW_SEGMENTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ONESIGNAL_REST_API".
 */
export type ONESIGNAL_REST_API_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ONESIGNAL_REST_API".
 */
export type ONESIGNAL_REST_API_TRIGGER_EVENTS = {}
