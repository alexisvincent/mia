// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PUSHBULLET's PUSHBULLET_CREATE_CHAT tool input.
 */
type PUSHBULLET_CREATE_CHAT_INPUT = {
  /**
   * Email
   * @description Email of the person to create the chat with (does not have to be a Pushbullet user).
   */
  email?: string;
};

/**
 * Type of PUSHBULLET's PUSHBULLET_CREATE_CHAT tool output.
 */
type PUSHBULLET_CREATE_CHAT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description False if the chat has been deleted.
       */
      active: boolean;
      /**
       * Created
       * @description Creation time as Unix timestamp.
       */
      created: number;
      /**
       * Iden
       * @description Unique identifier for the chat.
       */
      iden: string;
      /**
       * Modified
       * @description Last modified time as Unix timestamp.
       */
      modified: number;
      /**
       * Muted
       * @description True if notifications from this chat are muted.
       */
      muted: boolean;
      /**
       * With
       * @description Information about the user or email this chat is with.
       */
      with: {
          /**
           * Email
           * @description Email address of the person.
           */
          email: string;
          /**
           * Email Normalized
           * @description Canonical email address of the person.
           */
          email_normalized: string;
          /**
           * Iden
           * @description User iden if this is a Pushbullet user.
           * @default null
           */
          iden: string | null;
          /**
           * Image Url
           * @description Image URL for the person.
           * @default null
           */
          image_url: string | null;
          /**
           * Name
           * @description Name of the person, if known.
           * @default null
           */
          name: string | null;
          /**
           * Type
           * @description Type of chat target: 'email' or 'user'.
           * @enum {string}
           */
          type: "email" | "user";
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
 * Type of PUSHBULLET's PUSHBULLET_CREATE_DEVICE tool input.
 */
type PUSHBULLET_CREATE_DEVICE_INPUT = {
  /**
   * App Version
   * @description Version of the Pushbullet app installed on the device (non-negative)
   */
  app_version?: number;
  /**
   * Has Sms
   * @description True if the device has SMS capability (Android only)
   * @default null
   */
  has_sms: boolean | null;
  /**
   * Icon
   * @description Icon for this device; e.g., desktop, phone, watch, etc.
   * @default null
   * @enum {string|null}
   */
  icon: "desktop" | "browser" | "website" | "laptop" | "tablet" | "phone" | "watch" | "system" | "ios" | null;
  /**
   * Manufacturer
   * @description Manufacturer of the device
   */
  manufacturer?: string;
  /**
   * Model
   * @description Model of the device
   */
  model?: string;
  /**
   * Nickname
   * @description Name to display for the device
   */
  nickname?: string;
  /**
   * Push Token
   * @description Platform-specific push token; leave blank for custom devices
   * @default null
   */
  push_token: string | null;
};

/**
 * Type of PUSHBULLET's PUSHBULLET_CREATE_DEVICE tool output.
 */
type PUSHBULLET_CREATE_DEVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description True if the device is active
       * @default null
       */
      active: boolean | null;
      /**
       * App Version
       * @description App version installed on the device
       * @default null
       */
      app_version: number | null;
      /**
       * Created
       * @description Creation time (Unix epoch seconds)
       * @default null
       */
      created: number | null;
      /**
       * Fingerprint
       * @description Device fingerprint to avoid duplicates
       * @default null
       */
      fingerprint: string | null;
      /**
       * Generated Nickname
       * @description True if nickname was auto-generated from manufacturer and model
       * @default null
       */
      generated_nickname: boolean | null;
      /**
       * Has Sms
       * @description True if the device has SMS capability
       * @default null
       */
      has_sms: boolean | null;
      /**
       * Icon
       * @description Icon string for the device
       * @default null
       */
      icon: string | null;
      /**
       * Iden
       * @description Unique identifier for the device
       * @default null
       */
      iden: string | null;
      /**
       * Key Fingerprint
       * @description Encryption key fingerprint
       * @default null
       */
      key_fingerprint: string | null;
      /**
       * Kind
       * @description (Deprecated) alias for type
       * @default null
       */
      kind: string | null;
      /**
       * Manufacturer
       * @description Manufacturer of the device
       * @default null
       */
      manufacturer: string | null;
      /**
       * Model
       * @description Model of the device
       * @default null
       */
      model: string | null;
      /**
       * Modified
       * @description Last modified time (Unix epoch seconds)
       * @default null
       */
      modified: number | null;
      /**
       * Nickname
       * @description Display name of the device
       * @default null
       */
      nickname: string | null;
      /**
       * Push Token
       * @description Platform-specific push token
       * @default null
       */
      push_token: string | null;
      /**
       * Pushable
       * @description (Deprecated) pushable flag for partial devices
       * @default null
       */
      pushable: boolean | null;
      /**
       * Type
       * @description (Deprecated) old device type field
       * @default null
       */
      type: string | null;
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
 * Type of PUSHBULLET's PUSHBULLET_CREATE_PUSH tool input.
 */
type PUSHBULLET_CREATE_PUSH_INPUT = {
  /**
   * Body
   * @description Body text of the note, link message, or file message.
   * @default null
   */
  body: string | null;
  /**
   * Channel Tag
   * @description Tag of channel to broadcast the push to subscribers.
   * @default null
   */
  channel_tag: string | null;
  /**
   * Client Iden
   * @description Identifier of OAuth client to send the push to its authorized users.
   * @default null
   */
  client_iden: string | null;
  /**
   * Device Iden
   * @description Identifier of device to send the push to.
   * @default null
   */
  device_iden: string | null;
  /**
   * Email
   * Format: email
   * @default null
   */
  email: unknown;
  /**
   * File Name
   * @description Filename for file push. Required when type='file'.
   * @default null
   */
  file_name: string | null;
  /**
   * File Type
   * @description MIME type of the file. Required when type='file'.
   * @default null
   */
  file_type: string | null;
  /**
   * File Url
   * Format: uri
   * @description URL of the file to push. Required when type='file'.
   * @default null
   */
  file_url: unknown;
  /**
   * Guid
   * @description Client-generated unique identifier for idempotency.
   * @default null
   */
  guid: string | null;
  /**
   * Source Device Iden
   * @description Identifier of the source device sending this push.
   * @default null
   */
  source_device_iden: string | null;
  /**
   * Title
   * @description Title of the note or link (optional).
   * @default null
   */
  title: string | null;
  /**
   * Type
   * @description Type of push to send: 'note', 'link', or 'file'.
   * @enum {string}
   */
  type?: "note" | "link" | "file";
  /**
   * Url
   * Format: uri
   * @description URL to include with a link push. Required when type='link'.
   * @default null
   */
  url: unknown;
};

/**
 * Type of PUSHBULLET's PUSHBULLET_CREATE_PUSH tool output.
 */
type PUSHBULLET_CREATE_PUSH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description True if the push is active.
       */
      active: boolean;
      /**
       * Body
       * @description Body of the push (if provided).
       * @default null
       */
      body: string | null;
      /**
       * Created
       * @description Creation timestamp (seconds since epoch).
       */
      created: number;
      /**
       * File Name
       * @description Filename for file pushes.
       * @default null
       */
      file_name: string | null;
      /**
       * File Type
       * @description MIME type for file pushes.
       * @default null
       */
      file_type: string | null;
      /**
       * File Url
       * @description URL of file for file pushes.
       * @default null
       */
      file_url: string | null;
      /**
       * Iden
       * @description Unique identifier for the push.
       */
      iden: string;
      /**
       * Modified
       * @description Last modified timestamp (seconds since epoch).
       */
      modified: number;
      /**
       * Receiver Email
       * @description Email of the receiver.
       */
      receiver_email: string;
      /**
       * Receiver Email Normalized
       * @description Normalized receiver email.
       */
      receiver_email_normalized: string;
      /**
       * Receiver Iden
       * @description Identifier of the receiver.
       */
      receiver_iden: string;
      /**
       * Sender Email
       * @description Email of the sender.
       * @default null
       */
      sender_email: string | null;
      /**
       * Sender Email Normalized
       * @description Normalized sender email.
       * @default null
       */
      sender_email_normalized: string | null;
      /**
       * Sender Iden
       * @description Identifier of the sender.
       * @default null
       */
      sender_iden: string | null;
      /**
       * Title
       * @description Title of the push (if provided).
       * @default null
       */
      title: string | null;
      /**
       * Type
       * @description Type of the push.
       * @enum {string}
       */
      type: "note" | "link" | "file";
      /**
       * Url
       * @description URL for link pushes.
       * @default null
       */
      url: string | null;
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
 * Type of PUSHBULLET's PUSHBULLET_DELETE_ALL_PUSHES tool input.
 */
type PUSHBULLET_DELETE_ALL_PUSHES_INPUT = object;

/**
 * Type of PUSHBULLET's PUSHBULLET_DELETE_ALL_PUSHES tool output.
 */
type PUSHBULLET_DELETE_ALL_PUSHES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of PUSHBULLET's PUSHBULLET_DELETE_CHAT tool input.
 */
type PUSHBULLET_DELETE_CHAT_INPUT = {
  /**
   * Iden
   * @description The unique identifier of the chat to delete.
   */
  iden?: string;
};

/**
 * Type of PUSHBULLET's PUSHBULLET_DELETE_CHAT tool output.
 */
type PUSHBULLET_DELETE_CHAT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of PUSHBULLET's PUSHBULLET_DELETE_DEVICE tool input.
 */
type PUSHBULLET_DELETE_DEVICE_INPUT = {
  /**
   * Device Iden
   * @description The unique identifier of the device to delete.
   */
  device_iden?: string;
};

/**
 * Type of PUSHBULLET's PUSHBULLET_DELETE_DEVICE tool output.
 */
type PUSHBULLET_DELETE_DEVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of PUSHBULLET's PUSHBULLET_DELETE_PUSH tool input.
 */
type PUSHBULLET_DELETE_PUSH_INPUT = {
  /**
   * Iden
   * @description Identifier of the push to delete
   */
  iden?: string;
};

/**
 * Type of PUSHBULLET's PUSHBULLET_DELETE_PUSH tool output.
 */
type PUSHBULLET_DELETE_PUSH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of PUSHBULLET's PUSHBULLET_GET_USER tool input.
 */
type PUSHBULLET_GET_USER_INPUT = object;

/**
 * Type of PUSHBULLET's PUSHBULLET_GET_USER tool output.
 */
type PUSHBULLET_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Account creation time as Unix timestamp (seconds)
       */
      created: number;
      /**
       * Email
       * @description User's email address
       */
      email: string;
      /**
       * Email Normalized
       * @description Canonical form of the email address
       */
      email_normalized: string;
      /**
       * Iden
       * @description Unique identifier for the current user
       */
      iden: string;
      /**
       * Image Url
       * @description URL of the user's profile image
       */
      image_url: string;
      /**
       * Max Upload Size
       * @description Maximum file upload size in bytes
       */
      max_upload_size: number;
      /**
       * Modified
       * @description Last profile modification time as Unix timestamp (seconds)
       */
      modified: number;
      /**
       * Name
       * @description Full name of the user
       */
      name: string;
      /**
       * Referred Count
       * @description Number of users referred by this user
       * @default null
       */
      referred_count: number | null;
      /**
       * Referrer Iden
       * @description User iden of the user who referred this user
       * @default null
       */
      referrer_iden: string | null;
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
 * Type of PUSHBULLET's PUSHBULLET_LIST_CHATS tool input.
 */
type PUSHBULLET_LIST_CHATS_INPUT = object;

/**
 * Type of PUSHBULLET's PUSHBULLET_LIST_CHATS tool output.
 */
type PUSHBULLET_LIST_CHATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Chats
       * @description List of chat objects ordered with most recently modified first
       */
      chats: {
          /**
           * Active
           * @description False if this chat has been deleted
           */
          active: boolean;
          /**
           * Created
           * @description Creation time in UNIX seconds
           */
          created: number;
          /**
           * Iden
           * @description Unique identifier for this chat
           */
          iden: string;
          /**
           * Modified
           * @description Last modified time in UNIX seconds
           */
          modified: number;
          /**
           * Muted
           * @description True if notifications for this chat are muted
           */
          muted: boolean;
          /**
           * With
           * @description Info about the other participant in this chat
           */
          with: {
              /**
               * Email
               * @description Email address of the chat participant
               */
              email: string;
              /**
               * Email Normalized
               * @description Canonical email address of the chat participant
               */
              email_normalized: string;
              /**
               * Iden
               * @description Identifier of the chat participant
               */
              iden: string;
              /**
               * Image Url
               * @description Avatar URL for this chat participant
               */
              image_url: string;
              /**
               * Name
               * @description Display name of the chat participant
               */
              name: string;
              /**
               * Type
               * @description Type of the chat participant: 'email' or 'user'
               * @enum {string}
               */
              type: "email" | "user";
          };
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
 * Type of PUSHBULLET's PUSHBULLET_LIST_DEVICES tool input.
 */
type PUSHBULLET_LIST_DEVICES_INPUT = object;

/**
 * Type of PUSHBULLET's PUSHBULLET_LIST_DEVICES tool output.
 */
type PUSHBULLET_LIST_DEVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Devices
       * @description List of devices belonging to the current user.
       */
      devices: {
          /**
           * Active
           * @description True if the device is active.
           */
          active: boolean;
          /**
           * App Version
           * @description Version of the Pushbullet application installed on the device.
           * @default null
           */
          app_version: number | null;
          /**
           * Created
           * @description Creation timestamp in floating-point seconds since epoch.
           */
          created: number;
          /**
           * Fingerprint
           * @description Device fingerprint (used to avoid duplicates).
           * @default null
           */
          fingerprint: string | null;
          /**
           * Generated Nickname
           * @description True if nickname was auto-generated from manufacturer/model.
           */
          generated_nickname: boolean;
          /**
           * Has Sms
           * @description True if device supports SMS (Android only).
           * @default null
           */
          has_sms: boolean | null;
          /**
           * Icon
           * @description Device icon type (e.g., 'desktop', 'phone').
           */
          icon: string;
          /**
           * Iden
           * @description Unique identifier for the device.
           */
          iden: string;
          /**
           * Key Fingerprint
           * @description Fingerprint for this device's encryption key.
           * @default null
           */
          key_fingerprint: string | null;
          /**
           * Kind
           * @description Deprecated: old name for type.
           * @default null
           */
          kind: string | null;
          /**
           * Manufacturer
           * @description Manufacturer of the device (e.g., 'Apple').
           * @default null
           */
          manufacturer: string | null;
          /**
           * Model
           * @description Model name/number of the device.
           * @default null
           */
          model: string | null;
          /**
           * Modified
           * @description Last modified timestamp in floating-point seconds since epoch.
           */
          modified: number;
          /**
           * Nickname
           * @description Nickname for the device, user-assigned or generated.
           * @default null
           */
          nickname: string | null;
          /**
           * Push Token
           * @description Platform-specific push token for this device.
           * @default null
           */
          push_token: string | null;
          /**
           * Pushable
           * @description True if you can push to this device.
           */
          pushable: boolean;
          /**
           * Type
           * @description Deprecated: legacy device type string.
           */
          type: string;
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
 * Type of PUSHBULLET's PUSHBULLET_LIST_PUSHES tool input.
 */
type PUSHBULLET_LIST_PUSHES_INPUT = {
  /**
   * Active
   * @description If true, only active pushes are returned.
   * @default null
   */
  active: boolean | null;
  /**
   * Cursor
   * @description Cursor for pagination to fetch the next set of pushes.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of pushes to return (max 500, default 500).
   * @default null
   */
  limit: number | null;
  /**
   * Modified After
   * @description Only return pushes modified after this UNIX timestamp (float).
   * @default null
   */
  modified_after: number | null;
};

/**
 * Type of PUSHBULLET's PUSHBULLET_LIST_PUSHES tool output.
 */
type PUSHBULLET_LIST_PUSHES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cursor
       * @description Cursor for fetching the next page of results, if present.
       * @default null
       */
      cursor: string | null;
      /**
       * Pushes
       * @description List of push objects.
       */
      pushes: {
          /**
           * Active
           * @description Whether the push is active.
           */
          active: boolean;
          /**
           * Body
           * @description Optional body text of the push.
           * @default null
           */
          body: string | null;
          /**
           * Channel Tag
           * @description Channel tag for channel pushes.
           * @default null
           */
          channel_tag: string | null;
          /**
           * Client Iden
           * @description Identifier of the client.
           * @default null
           */
          client_iden: string | null;
          /**
           * Created
           * @description Creation timestamp as UNIX float.
           */
          created: number;
          /**
           * Direction
           * @description Direction of the push (e.g., 'incoming').
           */
          direction: string;
          /**
           * Dismissed
           * @description Whether the push has been dismissed.
           */
          dismissed: boolean;
          /**
           * File Name
           * @description Filename for file pushes.
           * @default null
           */
          file_name: string | null;
          /**
           * File Type
           * @description MIME type for file pushes.
           * @default null
           */
          file_type: string | null;
          /**
           * File Url
           * @description URL for file pushes.
           * @default null
           */
          file_url: string | null;
          /**
           * Iden
           * @description Unique identifier for the push.
           */
          iden: string;
          /**
           * Image Url
           * @description URL for image previews.
           * @default null
           */
          image_url: string | null;
          /**
           * Modified
           * @description Last modification timestamp as UNIX float.
           */
          modified: number;
          /**
           * Receiver Iden
           * @description Identifier of the receiver.
           * @default null
           */
          receiver_iden: string | null;
          /**
           * Sender Iden
           * @description Identifier of the sender.
           * @default null
           */
          sender_iden: string | null;
          /**
           * Source User Iden
           * @description Identifier of the source user.
           * @default null
           */
          source_user_iden: string | null;
          /**
           * Target Device Iden
           * @description Identifier of the target device.
           * @default null
           */
          target_device_iden: string | null;
          /**
           * Title
           * @description Optional title of the push.
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Type of the push (e.g., 'note', 'link', 'file').
           */
          type: string;
          /**
           * Url
           * @description URL for link pushes.
           * @default null
           */
          url: string | null;
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
 * Type of PUSHBULLET's PUSHBULLET_PUSHBULLET_CREATE_DEVICE tool input.
 */
type PUSHBULLET_PUSHBULLET_CREATE_DEVICE_INPUT = {
  /**
   * App Version
   * @description Version of the Pushbullet application installed on the device (non-negative)
   */
  app_version?: number;
  /**
   * Has Sms
   * @description True if the device has SMS capability (Android only)
   * @default null
   */
  has_sms: boolean | null;
  /**
   * Icon
   * @description Icon to use for this device. Commonly: desktop, mobile, watch, etc.
   * @default null
   * @enum {string|null}
   */
  icon: "desktop" | "browser" | "website" | "laptop" | "tablet" | "phone" | "watch" | "system" | "ios" | null;
  /**
   * Manufacturer
   * @description Manufacturer of the device
   */
  manufacturer?: string;
  /**
   * Model
   * @description Model of the device
   */
  model?: string;
  /**
   * Nickname
   * @description Name to use when displaying the device
   */
  nickname?: string;
  /**
   * Push Token
   * @description Platform-specific push token. Leave blank for custom devices
   * @default null
   */
  push_token: string | null;
};

/**
 * Type of PUSHBULLET's PUSHBULLET_PUSHBULLET_CREATE_DEVICE tool output.
 */
type PUSHBULLET_PUSHBULLET_CREATE_DEVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description True if the device is active
       */
      active?: boolean;
      /**
       * App Version
       * @description App version installed on the device
       * @default null
       */
      app_version: number | null;
      /**
       * Created
       * @description Creation time in floating point seconds since epoch
       */
      created?: number;
      /**
       * Fingerprint
       * @description Platform-specific fingerprint to avoid duplicate devices
       * @default null
       */
      fingerprint: string | null;
      /**
       * Generated Nickname
       * @description True if the nickname was automatically generated from manufacturer and model
       * @default null
       */
      generated_nickname: boolean | null;
      /**
       * Has Sms
       * @description True if the device has SMS capability
       * @default null
       */
      has_sms: boolean | null;
      /**
       * Icon
       * @description Icon string for the device
       * @default null
       */
      icon: string | null;
      /**
       * Iden
       * @description Unique identifier for this device
       */
      iden?: string;
      /**
       * Key Fingerprint
       * @description Fingerprint for end-to-end encryption key
       * @default null
       */
      key_fingerprint: string | null;
      /**
       * Kind
       * @description (Deprecated) alias for type
       * @default null
       */
      kind: string | null;
      /**
       * Manufacturer
       * @description Manufacturer of the device
       * @default null
       */
      manufacturer: string | null;
      /**
       * Model
       * @description Model of the device
       * @default null
       */
      model: string | null;
      /**
       * Modified
       * @description Last modified time in floating point seconds since epoch
       */
      modified?: number;
      /**
       * Nickname
       * @description Name used for displaying the device
       * @default null
       */
      nickname: string | null;
      /**
       * Push Token
       * @description Platform-specific push token for notifications
       * @default null
       */
      push_token: string | null;
      /**
       * Pushable
       * @description (Deprecated) pushable flag for partially initialized devices
       * @default null
       */
      pushable: boolean | null;
      /**
       * Type
       * @description (Deprecated) old device type
       * @default null
       */
      type: string | null;
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
 * Type of PUSHBULLET's PUSHBULLET_PUSHBULLET_DELETE_ALL_PUSHES tool input.
 */
type PUSHBULLET_PUSHBULLET_DELETE_ALL_PUSHES_INPUT = object;

/**
 * Type of PUSHBULLET's PUSHBULLET_PUSHBULLET_DELETE_ALL_PUSHES tool output.
 */
type PUSHBULLET_PUSHBULLET_DELETE_ALL_PUSHES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of PUSHBULLET's PUSHBULLET_PUSHBULLET_DELETE_PUSH tool input.
 */
type PUSHBULLET_PUSHBULLET_DELETE_PUSH_INPUT = {
  /**
   * Iden
   * @description Identifier of the push to delete
   */
  iden?: string;
};

/**
 * Type of PUSHBULLET's PUSHBULLET_PUSHBULLET_DELETE_PUSH tool output.
 */
type PUSHBULLET_PUSHBULLET_DELETE_PUSH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of PUSHBULLET's PUSHBULLET_PUSHBULLET_UPDATE_CHAT tool input.
 */
type PUSHBULLET_PUSHBULLET_UPDATE_CHAT_INPUT = {
  /**
   * Iden
   * @description Unique identifier of the chat to update
   */
  iden?: string;
  /**
   * Muted
   * @description True to mute notifications for this chat, false to unmute
   */
  muted?: boolean;
};

/**
 * Type of PUSHBULLET's PUSHBULLET_PUSHBULLET_UPDATE_CHAT tool output.
 */
type PUSHBULLET_PUSHBULLET_UPDATE_CHAT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description False if the chat has been deleted
       */
      active: boolean;
      /**
       * Created
       * @description Creation time in floating point seconds (Unix timestamp)
       */
      created: number;
      /**
       * Iden
       * @description Unique identifier for this chat
       */
      iden: string;
      /**
       * Modified
       * @description Last modified time in floating point seconds (Unix timestamp)
       */
      modified: number;
      /**
       * Muted
       * @description True if the chat is muted
       * @default null
       */
      muted: boolean | null;
      /**
       * With
       * @description Information about the chat participant
       */
      with: {
          /**
           * Email
           * @description Email address of the chat participant
           */
          email: string;
          /**
           * Email Normalized
           * @description Canonical email address of the chat participant
           */
          email_normalized: string;
          /**
           * Iden
           * @description Identifier of the chat participant
           */
          iden: string;
          /**
           * Image Url
           * @description URL of the participant's avatar image
           */
          image_url?: string;
          /**
           * Name
           * @description Display name of the chat participant
           */
          name: string;
          /**
           * Type
           * @description Type of chat participant: 'email' or 'user'
           * @enum {string}
           */
          type: "email" | "user";
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
 * Type of PUSHBULLET's PUSHBULLET_PUSHBULLET_UPDATE_DEVICE tool input.
 */
type PUSHBULLET_PUSHBULLET_UPDATE_DEVICE_INPUT = {
  /**
   * App Version
   * @description Version of the Pushbullet app installed on the device (non-negative)
   * @default null
   */
  app_version: number | null;
  /**
   * Has Sms
   * @description Whether the device supports SMS (Android only).
   * @default null
   */
  has_sms: boolean | null;
  /**
   * Icon
   * @description Icon for the device. Common values: desktop, laptop, tablet, phone, watch, system, ios
   * @default null
   * @enum {string|null}
   */
  icon: "desktop" | "browser" | "website" | "laptop" | "tablet" | "phone" | "watch" | "system" | "ios" | null;
  /**
   * Iden
   * @description Identifier of the device to update
   */
  iden?: string;
  /**
   * Manufacturer
   * @description Manufacturer of the device
   * @default null
   */
  manufacturer: string | null;
  /**
   * Model
   * @description Model of the device
   * @default null
   */
  model: string | null;
  /**
   * Nickname
   * @description New display name for the device
   * @default null
   */
  nickname: string | null;
  /**
   * Push Token
   * @description Platform-specific push token. Leave blank for custom/listening devices
   * @default null
   */
  push_token: string | null;
};

/**
 * Type of PUSHBULLET's PUSHBULLET_PUSHBULLET_UPDATE_DEVICE tool output.
 */
type PUSHBULLET_PUSHBULLET_UPDATE_DEVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description True if the device is active
       */
      active?: boolean;
      /**
       * App Version
       * @description App version installed on the device
       * @default null
       */
      app_version: number | null;
      /**
       * Created
       * @description Creation time in floating point seconds since epoch
       */
      created?: number;
      /**
       * Fingerprint
       * @description Platform-specific fingerprint to avoid duplicate devices
       * @default null
       */
      fingerprint: string | null;
      /**
       * Generated Nickname
       * @description True if the device nickname was auto-generated
       * @default null
       */
      generated_nickname: boolean | null;
      /**
       * Has Sms
       * @description True if the device supports SMS (Android only)
       * @default null
       */
      has_sms: boolean | null;
      /**
       * Icon
       * @description Icon string for the device
       * @default null
       */
      icon: string | null;
      /**
       * Iden
       * @description Unique identifier for the device
       */
      iden?: string;
      /**
       * Key Fingerprint
       * @description Fingerprint for end-to-end encryption key
       * @default null
       */
      key_fingerprint: string | null;
      /**
       * Kind
       * @description Deprecated device kind field
       * @default null
       */
      kind: string | null;
      /**
       * Manufacturer
       * @description Manufacturer of the device
       * @default null
       */
      manufacturer: string | null;
      /**
       * Model
       * @description Model of the device
       * @default null
       */
      model: string | null;
      /**
       * Modified
       * @description Last modified time in floating point seconds since epoch
       */
      modified?: number;
      /**
       * Nickname
       * @description Display name of the device
       * @default null
       */
      nickname: string | null;
      /**
       * Push Token
       * @description Platform-specific push token for notifications
       * @default null
       */
      push_token: string | null;
      /**
       * Pushable
       * @description Deprecated pushable field
       * @default null
       */
      pushable: boolean | null;
      /**
       * Type
       * @description Deprecated device type field
       * @default null
       */
      type: string | null;
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
 * Type of PUSHBULLET's PUSHBULLET_UPDATE_DEVICE tool input.
 */
type PUSHBULLET_UPDATE_DEVICE_INPUT = {
  /**
   * App Version
   * @description Version of the Pushbullet app installed on the device (non-negative).
   * @default null
   */
  app_version: number | null;
  /**
   * Has Sms
   * @description Whether the device supports SMS (Android only).
   * @default null
   */
  has_sms: boolean | null;
  /**
   * Icon
   * @description Icon for the device. Common values: desktop, laptop, tablet, phone, watch, system, ios.
   * @default null
   * @enum {string|null}
   */
  icon: "desktop" | "browser" | "website" | "laptop" | "tablet" | "phone" | "watch" | "system" | "ios" | null;
  /**
   * Iden
   * @description Identifier of the device to update.
   */
  iden?: string;
  /**
   * Manufacturer
   * @description Manufacturer of the device.
   * @default null
   */
  manufacturer: string | null;
  /**
   * Model
   * @description Model of the device.
   * @default null
   */
  model: string | null;
  /**
   * Nickname
   * @description New display name for the device.
   * @default null
   */
  nickname: string | null;
  /**
   * Push Token
   * @description Platform-specific push token. Leave blank for custom or listening devices.
   * @default null
   */
  push_token: string | null;
};

/**
 * Type of PUSHBULLET's PUSHBULLET_UPDATE_DEVICE tool output.
 */
type PUSHBULLET_UPDATE_DEVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description True if the device is active.
       */
      active: boolean;
      /**
       * App Version
       * @description App version installed on the device.
       * @default null
       */
      app_version: number | null;
      /**
       * Created
       * @description Creation timestamp (UNIX time in seconds).
       */
      created: number;
      /**
       * Fingerprint
       * @description Platform-specific fingerprint.
       * @default null
       */
      fingerprint: string | null;
      /**
       * Generated Nickname
       * @description True if nickname was auto-generated.
       * @default null
       */
      generated_nickname: boolean | null;
      /**
       * Has Sms
       * @description True if device supports SMS.
       * @default null
       */
      has_sms: boolean | null;
      /**
       * Icon
       * @description Icon string for the device.
       * @default null
       */
      icon: string | null;
      /**
       * Iden
       * @description Unique identifier for the device.
       */
      iden: string;
      /**
       * Key Fingerprint
       * @description Encryption key fingerprint.
       * @default null
       */
      key_fingerprint: string | null;
      /**
       * Kind
       * @description Deprecated device kind field.
       * @default null
       */
      kind: string | null;
      /**
       * Manufacturer
       * @description Manufacturer of the device.
       * @default null
       */
      manufacturer: string | null;
      /**
       * Model
       * @description Model of the device.
       * @default null
       */
      model: string | null;
      /**
       * Modified
       * @description Last modified timestamp (UNIX time in seconds).
       */
      modified: number;
      /**
       * Nickname
       * @description Display name of the device.
       * @default null
       */
      nickname: string | null;
      /**
       * Push Token
       * @description Platform-specific push token for notifications.
       * @default null
       */
      push_token: string | null;
      /**
       * Pushable
       * @description Deprecated pushable field.
       * @default null
       */
      pushable: boolean | null;
      /**
       * Type
       * @description Deprecated device type field.
       * @default null
       */
      type: string | null;
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
 * Type of PUSHBULLET's PUSHBULLET_UPDATE_PUSH tool input.
 */
type PUSHBULLET_UPDATE_PUSH_INPUT = {
  /**
   * Dismissed
   * @description Set to true to mark the push as dismissed (hides notifications)
   * @default null
   */
  dismissed: boolean | null;
  /**
   * Iden
   * @description Unique identifier of the push to update
   */
  iden?: string;
  /**
   * Items
   * @description List of items to update for list-style pushes
   * @default null
   */
  items: {
      /**
       * Checked
       * @description Whether the list item is checked
       */
      checked: boolean;
      /**
       * Text
       * @description Text of the list item
       */
      text: string;
  }[] | null;
};

/**
 * Type of PUSHBULLET's PUSHBULLET_UPDATE_PUSH tool output.
 */
type PUSHBULLET_UPDATE_PUSH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description True if the push is active
       */
      active: boolean;
      /**
       * Body
       * @description Body text of the push (if any)
       * @default null
       */
      body: string | null;
      /**
       * Channel Tag
       * @description Channel tag for channel pushes
       * @default null
       */
      channel_tag: string | null;
      /**
       * Client Iden
       * @description Identifier of the client
       * @default null
       */
      client_iden: string | null;
      /**
       * Created
       * @description Creation timestamp (seconds since epoch)
       */
      created: number;
      /**
       * Direction
       * @description Direction of the push (e.g., 'self', 'incoming')
       */
      direction: string;
      /**
       * Dismissed
       * @description True if the push has been dismissed
       */
      dismissed: boolean;
      /**
       * File Name
       * @description Filename for file pushes (if any)
       * @default null
       */
      file_name: string | null;
      /**
       * File Type
       * @description MIME type for file pushes (if any)
       * @default null
       */
      file_type: string | null;
      /**
       * File Url
       * @description URL of the file for file pushes (if any)
       * @default null
       */
      file_url: string | null;
      /**
       * Iden
       * @description Unique identifier of the push
       */
      iden: string;
      /**
       * Image Url
       * @description URL of image previews (if any)
       * @default null
       */
      image_url: string | null;
      /**
       * Modified
       * @description Last modified timestamp (seconds since epoch)
       */
      modified: number;
      /**
       * Receiver Email
       * @description Email of the receiver
       * @default null
       */
      receiver_email: string | null;
      /**
       * Receiver Email Normalized
       * @description Normalized email of the receiver
       * @default null
       */
      receiver_email_normalized: string | null;
      /**
       * Receiver Iden
       * @description Identifier of the receiver
       * @default null
       */
      receiver_iden: string | null;
      /**
       * Sender Email
       * @description Email of the sender
       * @default null
       */
      sender_email: string | null;
      /**
       * Sender Email Normalized
       * @description Normalized email of the sender
       * @default null
       */
      sender_email_normalized: string | null;
      /**
       * Sender Iden
       * @description Identifier of the sender
       * @default null
       */
      sender_iden: string | null;
      /**
       * Source Device Iden
       * @description Identifier of the source device
       * @default null
       */
      source_device_iden: string | null;
      /**
       * Target Device Iden
       * @description Identifier of the target device
       * @default null
       */
      target_device_iden: string | null;
      /**
       * Title
       * @description Title of the push (if any)
       * @default null
       */
      title: string | null;
      /**
       * Type
       * @description Type of the push (e.g., 'note', 'link', 'file', 'list')
       */
      type: string;
      /**
       * Url
       * @description URL for link pushes (if any)
       * @default null
       */
      url: string | null;
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
 * Type of PUSHBULLET's PUSHBULLET_UPLOAD_REQUEST tool input.
 */
type PUSHBULLET_UPLOAD_REQUEST_INPUT = {
  /**
   * File Name
   * @description Name of the file to upload. Example: 'photo.jpg'
   */
  file_name?: string;
  /**
   * File Type
   * Format: mime-type
   * @description MIME type of the file. Example: 'image/jpeg'
   */
  file_type?: unknown;
};

/**
 * Type of PUSHBULLET's PUSHBULLET_UPLOAD_REQUEST tool output.
 */
type PUSHBULLET_UPLOAD_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Form data to send with the file upload.
   */
  data?: {
      /**
       * Acl
       * @description S3 ACL for the uploaded object.
       */
      acl: string;
      /**
       * Awsaccesskeyid
       * @description AWS access key ID for S3 upload.
       */
      awsaccesskeyid: string;
      /**
       * Content Type
       * @description Content-Type for the uploaded file.
       */
      "content-type": string;
      /**
       * Key
       * @description S3 object key (path) for the file.
       */
      key: string;
      /**
       * Policy
       * @description Base64-encoded policy document for the upload.
       */
      policy: string;
      /**
       * Signature
       * @description AWS signature for the upload request.
       */
      signature: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * File Name
   * @description Name of the file.
   */
  file_name?: string;
  /**
   * File Type
   * @description MIME type of the file.
   */
  file_type?: string;
  /**
   * File Url
   * Format: uri
   * @description URL where the file will be accessible after upload.
   */
  file_url?: unknown;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Upload Url
   * Format: uri
   * @description Signed URL for uploading the file.
   */
  upload_url?: unknown;
};

/**
 * Type map of all available tool input types for toolkit "PUSHBULLET".
 */
export type PUSHBULLET_TOOL_INPUTS = {
  CREATE_CHAT: PUSHBULLET_CREATE_CHAT_INPUT
  CREATE_DEVICE: PUSHBULLET_CREATE_DEVICE_INPUT
  CREATE_PUSH: PUSHBULLET_CREATE_PUSH_INPUT
  DELETE_ALL_PUSHES: PUSHBULLET_DELETE_ALL_PUSHES_INPUT
  DELETE_CHAT: PUSHBULLET_DELETE_CHAT_INPUT
  DELETE_DEVICE: PUSHBULLET_DELETE_DEVICE_INPUT
  DELETE_PUSH: PUSHBULLET_DELETE_PUSH_INPUT
  GET_USER: PUSHBULLET_GET_USER_INPUT
  LIST_CHATS: PUSHBULLET_LIST_CHATS_INPUT
  LIST_DEVICES: PUSHBULLET_LIST_DEVICES_INPUT
  LIST_PUSHES: PUSHBULLET_LIST_PUSHES_INPUT
  PUSHBULLET_CREATE_DEVICE: PUSHBULLET_PUSHBULLET_CREATE_DEVICE_INPUT
  PUSHBULLET_DELETE_ALL_PUSHES: PUSHBULLET_PUSHBULLET_DELETE_ALL_PUSHES_INPUT
  PUSHBULLET_DELETE_PUSH: PUSHBULLET_PUSHBULLET_DELETE_PUSH_INPUT
  PUSHBULLET_UPDATE_CHAT: PUSHBULLET_PUSHBULLET_UPDATE_CHAT_INPUT
  PUSHBULLET_UPDATE_DEVICE: PUSHBULLET_PUSHBULLET_UPDATE_DEVICE_INPUT
  UPDATE_DEVICE: PUSHBULLET_UPDATE_DEVICE_INPUT
  UPDATE_PUSH: PUSHBULLET_UPDATE_PUSH_INPUT
  UPLOAD_REQUEST: PUSHBULLET_UPLOAD_REQUEST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PUSHBULLET".
 */
export type PUSHBULLET_TOOL_OUTPUTS = {
  CREATE_CHAT: PUSHBULLET_CREATE_CHAT_OUTPUT
  CREATE_DEVICE: PUSHBULLET_CREATE_DEVICE_OUTPUT
  CREATE_PUSH: PUSHBULLET_CREATE_PUSH_OUTPUT
  DELETE_ALL_PUSHES: PUSHBULLET_DELETE_ALL_PUSHES_OUTPUT
  DELETE_CHAT: PUSHBULLET_DELETE_CHAT_OUTPUT
  DELETE_DEVICE: PUSHBULLET_DELETE_DEVICE_OUTPUT
  DELETE_PUSH: PUSHBULLET_DELETE_PUSH_OUTPUT
  GET_USER: PUSHBULLET_GET_USER_OUTPUT
  LIST_CHATS: PUSHBULLET_LIST_CHATS_OUTPUT
  LIST_DEVICES: PUSHBULLET_LIST_DEVICES_OUTPUT
  LIST_PUSHES: PUSHBULLET_LIST_PUSHES_OUTPUT
  PUSHBULLET_CREATE_DEVICE: PUSHBULLET_PUSHBULLET_CREATE_DEVICE_OUTPUT
  PUSHBULLET_DELETE_ALL_PUSHES: PUSHBULLET_PUSHBULLET_DELETE_ALL_PUSHES_OUTPUT
  PUSHBULLET_DELETE_PUSH: PUSHBULLET_PUSHBULLET_DELETE_PUSH_OUTPUT
  PUSHBULLET_UPDATE_CHAT: PUSHBULLET_PUSHBULLET_UPDATE_CHAT_OUTPUT
  PUSHBULLET_UPDATE_DEVICE: PUSHBULLET_PUSHBULLET_UPDATE_DEVICE_OUTPUT
  UPDATE_DEVICE: PUSHBULLET_UPDATE_DEVICE_OUTPUT
  UPDATE_PUSH: PUSHBULLET_UPDATE_PUSH_OUTPUT
  UPLOAD_REQUEST: PUSHBULLET_UPLOAD_REQUEST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PUSHBULLET toolkit.
 */
export const PUSHBULLET = {
  slug: "pushbullet",
  tools: {
    /**
     * Tool to create a new chat with the specified email address. use when you need to initiate a conversation thread by email.
     */
    CREATE_CHAT: "PUSHBULLET_CREATE_CHAT",
    /**
     * Tool to register a new device under the current user's account. use when adding a new hardware or app device to pushbullet.
     */
    CREATE_DEVICE: "PUSHBULLET_CREATE_DEVICE",
    /**
     * Tool to send a new push (note, link, or file) to a device, user, channel, or client. use when you need to share content to a specific target. example: "send a link to https://example.com to device abc123".
     */
    CREATE_PUSH: "PUSHBULLET_CREATE_PUSH",
    /**
     * Tool to delete all pushes for the current user asynchronously. use when you need to bulk-clear all existing pushes in one call.
     */
    DELETE_ALL_PUSHES: "PUSHBULLET_DELETE_ALL_PUSHES",
    /**
     * Tool to delete a chat by its identifier. use when you need to remove a chat from your pushbullet account after confirming its identifier.
     */
    DELETE_CHAT: "PUSHBULLET_DELETE_CHAT",
    /**
     * Tool to remove a device by its identifier. use when you need to delete a device from your pushbullet account after confirming its identifier.
     */
    DELETE_DEVICE: "PUSHBULLET_DELETE_DEVICE",
    /**
     * Tool to delete a specific push by its identifier. use when you need to remove a push after confirming its identifier.
     */
    DELETE_PUSH: "PUSHBULLET_DELETE_PUSH",
    /**
     * Tool to retrieve the currently authenticated user's profile. use when you need to verify the access token or display the current user's details.
     */
    GET_USER: "PUSHBULLET_GET_USER",
    /**
     * Tool to list all chat objects for the current user. use when you need the full set of chat threads before sending or muting messages.
     */
    LIST_CHATS: "PUSHBULLET_LIST_CHATS",
    /**
     * Tool to list all registered devices for the current user. use after obtaining a valid access token.
     */
    LIST_DEVICES: "PUSHBULLET_LIST_DEVICES",
    /**
     * Tool to list pushes with optional filtering and pagination. use when retrieving or syncing pushes after a certain time.
     */
    LIST_PUSHES: "PUSHBULLET_LIST_PUSHES",
    /**
     * Tool to register a new device under the current user’s account. use when adding a new hardware or app device to the user's pushbullet devices.
     */
    PUSHBULLET_CREATE_DEVICE: "PUSHBULLET_PUSHBULLET_CREATE_DEVICE",
    /**
     * Tool to delete all pushes for the current user asynchronously. use when you need to bulk-clear all existing pushes in one call.
     */
    PUSHBULLET_DELETE_ALL_PUSHES: "PUSHBULLET_PUSHBULLET_DELETE_ALL_PUSHES",
    /**
     * Tool to delete a specific push by its identifier. use when you need to remove a push you created.
     */
    PUSHBULLET_DELETE_PUSH: "PUSHBULLET_PUSHBULLET_DELETE_PUSH",
    /**
     * Tool to mute or unmute an existing chat. use when adjusting notification settings for a specific chat by its identifier.
     */
    PUSHBULLET_UPDATE_CHAT: "PUSHBULLET_PUSHBULLET_UPDATE_CHAT",
    /**
     * Tool to update metadata for a device by its identifier. use when you need to change device settings like nickname, model, or icon.
     */
    PUSHBULLET_UPDATE_DEVICE: "PUSHBULLET_PUSHBULLET_UPDATE_DEVICE",
    /**
     * Tool to update metadata for a device by its identifier. use when changing a device's nickname, model, or other settings.
     */
    UPDATE_DEVICE: "PUSHBULLET_UPDATE_DEVICE",
    /**
     * Tool to update a push (dismiss or modify list items) by its identifier. use when marking a push as dismissed or updating list push items.
     */
    UPDATE_PUSH: "PUSHBULLET_UPDATE_PUSH",
    /**
     * Tool to obtain a signed upload url for a file before pushing. use when you need to upload file content via the signed s3 form data.
     */
    UPLOAD_REQUEST: "PUSHBULLET_UPLOAD_REQUEST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PUSHBULLET".
 */
export type PUSHBULLET_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PUSHBULLET".
 */
export type PUSHBULLET_TRIGGER_EVENTS = {}
