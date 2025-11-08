// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of RESPOND_IO's RESPOND_IO_CREATE_COMMENT tool input.
 */
type RESPOND_IO_CREATE_COMMENT_INPUT = {
  /**
   * Identifier
   * @description Identifier of the contact; either 'id:<contact_id>', 'email:<email>' or 'phone:<E.164_phone>'. Example: 'id:123', 'email:abdc@gmail.com', 'phone:+60121233112'
   */
  identifier?: string;
  /**
   * Text
   * @description Content of the comment (internal note), up to 1000 characters. You can mention other users using `{{@user.ID}}`.
   */
  text?: string;
};

/**
 * Type of RESPOND_IO's RESPOND_IO_CREATE_COMMENT tool output.
 */
type RESPOND_IO_CREATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Id
       * @description Numeric ID of the contact for which the comment was added.
       */
      contactId: number;
      /**
       * Created At
       * @description Unix timestamp (in seconds) when the comment was created.
       */
      created_at: number;
      /**
       * Text
       * @description Text of the created comment.
       */
      text: string;
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
 * Type of RESPOND_IO's RESPOND_IO_CREATE_CONTACT tool input.
 */
type RESPOND_IO_CREATE_CONTACT_INPUT = {
  /**
   * Country Code
   * @description ISO 3166-1 alpha-2 country code
   * @default null
   */
  countryCode: unknown;
  /**
   * Custom Fields
   * @description List of custom fields for the contact
   * @default null
   */
  custom_fields: {
      /**
       * Name
       * @description Name of the custom field
       */
      name: string;
      /**
       * Value
       * @description Value of the custom field
       * @default null
       */
      value: string | null;
  }[] | null;
  /**
   * Email
   * Format: email
   * @description Email address of the contact
   */
  email?: unknown;
  /**
   * First Name
   * @description First name of the contact
   */
  firstName?: string;
  /**
   * Identifier
   * @description Identifier of the contact: either 'email:<address>', 'phone:<number>' or contact ID
   */
  identifier?: string;
  /**
   * Language
   * @description ISO 639-1 language code
   * @default null
   */
  language: unknown;
  /**
   * Last Name
   * @description Last name of the contact
   * @default null
   */
  lastName: string | null;
  /**
   * Phone
   * @description Phone number of the contact including country code
   * @default null
   */
  phone: string | null;
  /**
   * Profile Pic
   * Format: uri
   * @description URL of the contact's profile picture
   * @default null
   */
  profilePic: string | null;
};

/**
 * Type of RESPOND_IO's RESPOND_IO_CREATE_CONTACT tool output.
 */
type RESPOND_IO_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Code */
      code: string;
      /**
       * Message
       * @description API response message
       */
      message: string;
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
 * Type of RESPOND_IO's RESPOND_IO_LIST_CHANNELS tool input.
 */
type RESPOND_IO_LIST_CHANNELS_INPUT = {
  /**
   * Cursor Id
   * @description Pointer to the channel ID from where the next batch of records should start.
   * @default null
   */
  cursorId: number | null;
  /**
   * Limit
   * @description Number of items to return (page size). Default is 10, maximum 100.
   * @default 10
   */
  limit: number | null;
};

/**
 * Type of RESPOND_IO's RESPOND_IO_LIST_CHANNELS tool output.
 */
type RESPOND_IO_LIST_CHANNELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of channels connected to the workspace.
       */
      items: {
          /**
           * Created At
           * @description Unix timestamp (in seconds) when the channel was created.
           */
          created_at: number;
          /**
           * Id
           * @description Unique identifier for the channel.
           */
          id: number;
          /**
           * Name
           * @description Name of the channel.
           */
          name: string;
          /**
           * Source
           * @description Type of the channel.
           * @enum {string}
           */
          source: "facebook" | "instagram" | "line" | "telegram" | "viber" | "twitter" | "wechat" | "custom_channel" | "gmail" | "other_email" | "twilio" | "message_bird" | "nexmo" | "360dialog_whatsapp" | "twilio_whatsapp" | "message_bird_whatsapp" | "whatsappnexmo_whatsapp" | "whatsapp_cloud";
      }[];
      /**
       * Pagination
       * @description Pagination information for channels list.
       */
      pagination: {
          /**
           * Next
           * @description URL to the next page of results.
           */
          next: string | null;
          /**
           * Previous
           * @description URL to the previous page of results.
           * @default null
           */
          previous: string | null;
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
 * Type of RESPOND_IO's RESPOND_IO_LIST_USERS tool input.
 */
type RESPOND_IO_LIST_USERS_INPUT = object;

/**
 * Type of RESPOND_IO's RESPOND_IO_LIST_USERS tool output.
 */
type RESPOND_IO_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description List of users in the workspace.
   */
  data?: {
      /**
       * Email
       * @description Email address of the user.
       */
      email: string;
      /**
       * First Name
       * @description First name of the user.
       */
      firstName: string;
      /**
       * Id
       * @description Unique identifier of the user.
       */
      id: number;
      /**
       * Last Name
       * @description Last name of the user.
       */
      lastName: string;
      /**
       * Restrictions
       * @description Workspace-level restrictions applied to the user.
       */
      restrictions: string[];
      /**
       * Role
       * @description Role of the user in the workspace.
       * @enum {string}
       */
      role: "agent" | "manager" | "owner";
      /**
       * Team
       * @description Team object associated with a user.
       * @default null
       */
      team: {
          /**
           * Id
           * @description Unique identifier of the team.
           */
          id: number;
          /**
           * Name
           * @description Name of the team.
           */
          name: string;
      } | null;
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
 * Type of RESPOND_IO's RESPOND_IO_RESPOND_IO_CREATE_COMMENT tool input.
 */
type RESPOND_IO_RESPOND_IO_CREATE_COMMENT_INPUT = {
  /**
   * Identifier
   * @description Identifier of the contact; either 'id:<contact_id>', 'email:<email>' or 'phone:<E.164_phone>'. Example: 'id:123', 'email:abdc@gmail.com', 'phone:+60121233112'
   */
  identifier?: string;
  /**
   * Text
   * @description Content of the comment (internal note), up to 1000 characters. You can mention other users using `{{@user.ID}}`.
   */
  text?: string;
};

/**
 * Type of RESPOND_IO's RESPOND_IO_RESPOND_IO_CREATE_COMMENT tool output.
 */
type RESPOND_IO_RESPOND_IO_CREATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Id
       * @description Numeric ID of the contact for which the comment was added.
       */
      contactId: number;
      /**
       * Created At
       * @description Unix timestamp (in seconds) when the comment was created.
       */
      created_at: number;
      /**
       * Text
       * @description Text of the created comment.
       */
      text: string;
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
 * Type of RESPOND_IO's RESPOND_IO_RESPOND_IO_CREATE_SPACE_TAG tool input.
 */
type RESPOND_IO_RESPOND_IO_CREATE_SPACE_TAG_INPUT = {
  /**
   * Color
   * @description Hexadecimal color code for the tag, e.g., '#FF5733'.
   * @default null
   */
  color: string | null;
  /**
   * Description
   * @description Optional brief description to explain the tag's purpose.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the tag. Must be unique within the workspace.
   */
  name?: string;
};

/**
 * Type of RESPOND_IO's RESPOND_IO_RESPOND_IO_CREATE_SPACE_TAG tool output.
 */
type RESPOND_IO_RESPOND_IO_CREATE_SPACE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color
       * @description The tag's color in hex format.
       * @default null
       */
      color: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the tag was created.
       */
      created_at: string;
      /**
       * Description
       * @description The tag's description.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the created tag.
       */
      id: string;
      /**
       * Name
       * @description The name of the tag as stored in the workspace.
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the tag was last updated.
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
 * Type of RESPOND_IO's RESPOND_IO_RESPOND_IO_GET_MESSAGE tool input.
 */
type RESPOND_IO_RESPOND_IO_GET_MESSAGE_INPUT = {
  /**
   * Identifier
   * @description Identifier of the contact, can be a phone number ('+60121233112'), email ('abdc@gmail.com'), or contact ID prefixed by 'id:' (e.g., 'id:123').
   */
  identifier?: string;
  /**
   * Message Id
   * @description Unique ID of the message to retrieve.
   */
  messageId?: number;
};

/**
 * Type of RESPOND_IO's RESPOND_IO_RESPOND_IO_GET_MESSAGE tool output.
 */
type RESPOND_IO_RESPOND_IO_GET_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channel Id
       * @description ID of the channel through which the message was sent/received.
       */
      channelId: number;
      /**
       * Channel Message Id
       * @description Identifier of the message on the channel.
       * @default null
       */
      channelMessageId: string | null;
      /**
       * Contact Id
       * @description ID of the contact associated with the message.
       */
      contactId: number;
      /**
       * Message
       * @description Content of the message.
       */
      message: {
          /**
           * Message Tag
           * @description Tag for Facebook/Instagram messages sent outside 24h window. Allowed values: ACCOUNT_UPDATE, POST_PURCHASE_UPDATE, CONFIRMED_EVENT_UPDATE.
           * @default null
           * @enum {string|null}
           */
          messageTag: "ACCOUNT_UPDATE" | "POST_PURCHASE_UPDATE" | "CONFIRMED_EVENT_UPDATE" | null;
          /**
           * Text
           * @description Text content of the message.
           */
          text: string;
          /**
           * Type
           * @description Type of the message. Only 'text' is currently supported.
           * @constant
           */
          type: "text";
      };
      /**
       * Message Id
       * @description Unique ID of the message.
       */
      messageId: number;
      /**
       * Status
       * @description Delivery statuses of the message.
       */
      status: {
          /**
           * Message
           * @description Reason for failure, if status is 'failed'.
           * @default null
           */
          message: string | null;
          /**
           * Timestamp
           * @description Unix timestamp in seconds indicating when the status was recorded.
           */
          timestamp: number;
          /**
           * Value
           * @description Delivery status of the message.
           * @enum {string}
           */
          value: "pending" | "sent" | "delivered" | "read" | "failed";
      }[];
      /**
       * Traffic
       * @description Defines if the message was sent ('outgoing') or received ('incoming').
       * @enum {string}
       */
      traffic: "outgoing" | "incoming";
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
 * Type of RESPOND_IO's RESPOND_IO_UPDATE_SPACE_TAG tool input.
 */
type RESPOND_IO_UPDATE_SPACE_TAG_INPUT = {
  /**
   * Color Code
   * @description Hex color code for the tag (e.g., '#FF5733')
   * @default null
   */
  colorCode: string | null;
  /**
   * Current Name
   * @description Current name of the tag to update
   */
  currentName?: string;
  /**
   * Description
   * @description New description for the tag
   * @default null
   */
  description: string | null;
  /**
   * Emoji
   * @description Emoji associated with the tag (e.g., '🎉')
   * @default null
   */
  emoji: string | null;
  /**
   * Name
   * @description New name for the tag
   * @default null
   */
  name: string | null;
};

/**
 * Type of RESPOND_IO's RESPOND_IO_UPDATE_SPACE_TAG tool output.
 */
type RESPOND_IO_UPDATE_SPACE_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Color Code
       * @description Hex color code of the tag
       * @default null
       */
      colorCode: string | null;
      /**
       * Description
       * @description Description of the tag
       * @default null
       */
      description: string | null;
      /**
       * Emoji
       * @description Emoji of the tag
       * @default null
       */
      emoji: string | null;
      /**
       * Id
       * @description Unique identifier of the tag
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Name of the tag
       * @default null
       */
      name: string | null;
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
 * Type map of all available tool input types for toolkit "RESPOND_IO".
 */
export type RESPOND_IO_TOOL_INPUTS = {
  CREATE_COMMENT: RESPOND_IO_CREATE_COMMENT_INPUT
  CREATE_CONTACT: RESPOND_IO_CREATE_CONTACT_INPUT
  LIST_CHANNELS: RESPOND_IO_LIST_CHANNELS_INPUT
  LIST_USERS: RESPOND_IO_LIST_USERS_INPUT
  RESPOND_IO_CREATE_COMMENT: RESPOND_IO_RESPOND_IO_CREATE_COMMENT_INPUT
  RESPOND_IO_CREATE_SPACE_TAG: RESPOND_IO_RESPOND_IO_CREATE_SPACE_TAG_INPUT
  RESPOND_IO_GET_MESSAGE: RESPOND_IO_RESPOND_IO_GET_MESSAGE_INPUT
  UPDATE_SPACE_TAG: RESPOND_IO_UPDATE_SPACE_TAG_INPUT
}

/**
 * Type map of all available tool input types for toolkit "RESPOND_IO".
 */
export type RESPOND_IO_TOOL_OUTPUTS = {
  CREATE_COMMENT: RESPOND_IO_CREATE_COMMENT_OUTPUT
  CREATE_CONTACT: RESPOND_IO_CREATE_CONTACT_OUTPUT
  LIST_CHANNELS: RESPOND_IO_LIST_CHANNELS_OUTPUT
  LIST_USERS: RESPOND_IO_LIST_USERS_OUTPUT
  RESPOND_IO_CREATE_COMMENT: RESPOND_IO_RESPOND_IO_CREATE_COMMENT_OUTPUT
  RESPOND_IO_CREATE_SPACE_TAG: RESPOND_IO_RESPOND_IO_CREATE_SPACE_TAG_OUTPUT
  RESPOND_IO_GET_MESSAGE: RESPOND_IO_RESPOND_IO_GET_MESSAGE_OUTPUT
  UPDATE_SPACE_TAG: RESPOND_IO_UPDATE_SPACE_TAG_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's RESPOND_IO toolkit.
 */
export const RESPOND_IO = {
  slug: "respond_io",
  tools: {
    /**
     * Tool to add a comment (internal note) to a contact's conversation. use after verifying the contact identifier.
     */
    CREATE_COMMENT: "RESPOND_IO_CREATE_COMMENT",
    /**
     * Tool to create a new contact in the workspace. use when you need to add a contact by specifying an identifier; delay subsequent actions due to processing.
     */
    CREATE_CONTACT: "RESPOND_IO_CREATE_CONTACT",
    /**
     * Tool to retrieve a list of channels connected to the workspace. use when you need to enumerate all messaging channels with pagination support.
     */
    LIST_CHANNELS: "RESPOND_IO_LIST_CHANNELS",
    /**
     * Tool to retrieve a list of users in the workspace. use when you need to fetch all workspace users for auditing or assignment.
     */
    LIST_USERS: "RESPOND_IO_LIST_USERS",
    /**
     * Tool to add a comment (internal note) to a contact's conversation. use after verifying the contact identifier.
     */
    RESPOND_IO_CREATE_COMMENT: "RESPOND_IO_RESPOND_IO_CREATE_COMMENT",
    /**
     * Tool to create a new tag in the workspace. use when you need to label or categorize contacts or conversations after workspace setup.
     */
    RESPOND_IO_CREATE_SPACE_TAG: "RESPOND_IO_RESPOND_IO_CREATE_SPACE_TAG",
    /**
     * Tool to retrieve a specific message. use when you need the details of a message sent to or received from a contact.
     */
    RESPOND_IO_GET_MESSAGE: "RESPOND_IO_RESPOND_IO_GET_MESSAGE",
    /**
     * Tool to update an existing tag in the workspace. use when you need to modify a tag's name, description, color, or emoji after confirming it exists.
     */
    UPDATE_SPACE_TAG: "RESPOND_IO_UPDATE_SPACE_TAG",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "RESPOND_IO".
 */
export type RESPOND_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "RESPOND_IO".
 */
export type RESPOND_IO_TRIGGER_EVENTS = {}
