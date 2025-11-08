// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TELEGRAM's TELEGRAM_ANSWER_CALLBACK_QUERY tool input.
 */
type TELEGRAM_ANSWER_CALLBACK_QUERY_INPUT = {
  /**
   * Cache Time
   * @description The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.
   * @default null
   */
  cache_time: number | null;
  /**
   * Callback Query Id
   * @description Unique identifier for the query to be answered
   */
  callback_query_id?: string;
  /**
   * Show Alert
   * @description If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.
   * @default null
   */
  show_alert: boolean | null;
  /**
   * Text
   * @description Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters
   * @default null
   */
  text: string | null;
  /**
   * Url
   * @description URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @Botfather, specify the URL that opens your game – note that this will only work if the query comes from a callback_game button.
   * @default null
   */
  url: string | null;
};

/**
 * Type of TELEGRAM's TELEGRAM_ANSWER_CALLBACK_QUERY tool output.
 */
type TELEGRAM_ANSWER_CALLBACK_QUERY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * Result
       * @description Returns True on success
       */
      result: boolean;
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
 * Type of TELEGRAM's TELEGRAM_DELETE_MESSAGE tool input.
 */
type TELEGRAM_DELETE_MESSAGE_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier for the target chat or username of the target channel
   */
  chat_id?: number | null;
  /**
   * Message Id
   * @description Identifier of the message to delete
   */
  message_id?: number;
};

/**
 * Type of TELEGRAM's TELEGRAM_DELETE_MESSAGE tool output.
 */
type TELEGRAM_DELETE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * Result
       * @description Returns True on success
       */
      result: boolean;
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
 * Type of TELEGRAM's TELEGRAM_EDIT_MESSAGE tool input.
 */
type TELEGRAM_EDIT_MESSAGE_INPUT = {
  /**
   * Chat Id
   * @description Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel
   * @default null
   */
  chat_id: number | null;
  /**
   * Disable Web Page Preview
   * @description Disables link previews for links in this message
   * @default null
   */
  disable_web_page_preview: boolean | null;
  /**
   * Inline Message Id
   * @description Required if chat_id and message_id are not specified. Identifier of the inline message
   * @default null
   */
  inline_message_id: string | null;
  /**
   * Message Id
   * @description Required if inline_message_id is not specified. Identifier of the message to edit
   * @default null
   */
  message_id: number | null;
  /**
   * Parse Mode
   * @description Mode for parsing entities in the message text. Options: 'Markdown', 'MarkdownV2', 'HTML'
   * @default null
   */
  parse_mode: string | null;
  /**
   * Reply Markup
   * @description JSON-serialized object for an inline keyboard
   * @default null
   */
  reply_markup: string | null;
  /**
   * Text
   * @description New text of the message, 1-4096 characters after entities parsing
   */
  text?: string;
};

/**
 * Type of TELEGRAM's TELEGRAM_EDIT_MESSAGE tool output.
 */
type TELEGRAM_EDIT_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * Result
       * @description On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned
       * @default null
       */
      result: boolean | null;
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
 * Type of TELEGRAM's TELEGRAM_EXPORT_CHAT_INVITE_LINK tool input.
 */
type TELEGRAM_EXPORT_CHAT_INVITE_LINK_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier for the target chat or username of the target supergroup or channel
   */
  chat_id?: number | null;
};

/**
 * Type of TELEGRAM's TELEGRAM_EXPORT_CHAT_INVITE_LINK tool output.
 */
type TELEGRAM_EXPORT_CHAT_INVITE_LINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * Result
       * @description The exported invite link as String on success
       * @default null
       */
      result: string | null;
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
 * Type of TELEGRAM's TELEGRAM_FORWARD_MESSAGE tool input.
 */
type TELEGRAM_FORWARD_MESSAGE_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier for the target chat or username of the target channel
   */
  chat_id?: number | null;
  /**
   * Disable Notification
   * @description Sends the message silently. Users will receive a notification with no sound.
   * @default null
   */
  disable_notification: boolean | null;
  /**
   * From Chat Id
   * @description Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
   */
  from_chat_id?: number | null;
  /**
   * Message Id
   * @description Message identifier in the chat specified in from_chat_id
   */
  message_id?: number;
};

/**
 * Type of TELEGRAM's TELEGRAM_FORWARD_MESSAGE tool output.
 */
type TELEGRAM_FORWARD_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * ForwardedMessage
       * @description Telegram forwarded message object
       * @default null
       */
      result: {
          /**
           * Chat
           * @description Conversation the message belongs to
           */
          chat: {
              /**
               * First Name
               * @description First name of the other party in a private chat
               * @default null
               */
              first_name: string | null;
              /**
               * Id
               * @description Unique identifier for this chat
               */
              id: number;
              /**
               * Last Name
               * @description Last name of the other party in a private chat
               * @default null
               */
              last_name: string | null;
              /**
               * Title
               * @description Title, for supergroups, channels and group chats
               * @default null
               */
              title: string | null;
              /**
               * Type
               * @description Type of chat
               */
              type: string;
              /**
               * Username
               * @description Username
               * @default null
               */
              username: string | null;
          };
          /**
           * Date
           * @description Date the message was sent in Unix time
           */
          date: number;
          /**
           * Document
           * @description Information about the document
           * @default null
           */
          document: {
              [key: string]: unknown;
          } | null;
          /**
           * Forward Date
           * @description For forwarded messages, date the original message was sent in Unix time
           * @default null
           */
          forward_date: number | null;
          /**
           * TelegramUser
           * @description Telegram user object
           * @default null
           */
          forward_from: {
              /**
               * First Name
               * @description User's or bot's first name
               */
              first_name: string;
              /**
               * Id
               * @description Unique identifier for this user or bot
               */
              id: number;
              /**
               * Is Bot
               * @description True, if this user is a bot
               */
              is_bot: boolean;
              /**
               * Last Name
               * @description User's or bot's last name
               * @default null
               */
              last_name: string | null;
              /**
               * Username
               * @description User's or bot's username
               * @default null
               */
              username: string | null;
          } | null;
          /**
           * TelegramChat
           * @description Telegram chat object
           * @default null
           */
          forward_from_chat: {
              /**
               * First Name
               * @description First name of the other party in a private chat
               * @default null
               */
              first_name: string | null;
              /**
               * Id
               * @description Unique identifier for this chat
               */
              id: number;
              /**
               * Last Name
               * @description Last name of the other party in a private chat
               * @default null
               */
              last_name: string | null;
              /**
               * Title
               * @description Title, for supergroups, channels and group chats
               * @default null
               */
              title: string | null;
              /**
               * Type
               * @description Type of chat
               */
              type: string;
              /**
               * Username
               * @description Username
               * @default null
               */
              username: string | null;
          } | null;
          /**
           * Forward From Message Id
           * @description For messages forwarded from channels, identifier of the original message in the channel
           * @default null
           */
          forward_from_message_id: number | null;
          /**
           * Forward Sender Name
           * @description Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages
           * @default null
           */
          forward_sender_name: string | null;
          /**
           * Forward Signature
           * @description For forwarded messages that were originally sent in channels or by an anonymous chat administrator, signature of the message author if present
           * @default null
           */
          forward_signature: string | null;
          /**
           * TelegramUser
           * @description Telegram user object
           * @default null
           */
          from: {
              /**
               * First Name
               * @description User's or bot's first name
               */
              first_name: string;
              /**
               * Id
               * @description Unique identifier for this user or bot
               */
              id: number;
              /**
               * Is Bot
               * @description True, if this user is a bot
               */
              is_bot: boolean;
              /**
               * Last Name
               * @description User's or bot's last name
               * @default null
               */
              last_name: string | null;
              /**
               * Username
               * @description User's or bot's username
               * @default null
               */
              username: string | null;
          } | null;
          /**
           * Location
           * @description Information about the location
           * @default null
           */
          location: {
              [key: string]: unknown;
          } | null;
          /**
           * Message Id
           * @description Unique message identifier inside this chat
           */
          message_id: number;
          /**
           * Photo
           * @description Available sizes of the photo
           * @default null
           */
          photo: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Text
           * @description For text messages, the actual UTF-8 text of the message
           * @default null
           */
          text: string | null;
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
 * Type of TELEGRAM's TELEGRAM_GET_CHAT tool input.
 */
type TELEGRAM_GET_CHAT_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier for the target chat or username of the target supergroup or channel
   */
  chat_id?: number | null;
};

/**
 * Type of TELEGRAM's TELEGRAM_GET_CHAT tool output.
 */
type TELEGRAM_GET_CHAT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * Chat
       * @description Telegram chat object with full information
       * @default null
       */
      result: {
          /**
           * Bio
           * @description Bio of the other party in a private chat
           * @default null
           */
          bio: string | null;
          /**
           * Can Set Sticker Set
           * @description True, if the bot can change the group sticker set
           * @default null
           */
          can_set_sticker_set: boolean | null;
          /**
           * Description
           * @description Description, for groups, supergroups and channel chats
           * @default null
           */
          description: string | null;
          /**
           * First Name
           * @description First name of the other party in a private chat
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Unique identifier for this chat
           */
          id: number;
          /**
           * Invite Link
           * @description Primary invite link, for groups, supergroups and channel chats
           * @default null
           */
          invite_link: string | null;
          /**
           * Last Name
           * @description Last name of the other party in a private chat
           * @default null
           */
          last_name: string | null;
          /**
           * Linked Chat Id
           * @description Unique identifier for the linked chat
           * @default null
           */
          linked_chat_id: number | null;
          /**
           * ChatLocation
           * @description Telegram chat location object
           * @default null
           */
          location: {
              /**
               * Address
               * @description Location address
               */
              address: string;
              /**
               * Latitude
               * @description Latitude of the location
               */
              latitude: number;
              /**
               * Longitude
               * @description Longitude of the location
               */
              longitude: number;
          } | null;
          /**
           * Message Auto Delete Time
           * @description The time after which all messages sent to the chat will be automatically deleted
           * @default null
           */
          message_auto_delete_time: number | null;
          /**
           * ChatPermissions
           * @description Telegram chat permissions object
           * @default null
           */
          permissions: {
              /**
               * Can Add Web Page Previews
               * @description True, if the user is allowed to add web page previews to their messages
               * @default null
               */
              can_add_web_page_previews: boolean | null;
              /**
               * Can Change Info
               * @description True, if the user is allowed to change the chat title, photo and other settings
               * @default null
               */
              can_change_info: boolean | null;
              /**
               * Can Invite Users
               * @description True, if the user is allowed to invite new users to the chat
               * @default null
               */
              can_invite_users: boolean | null;
              /**
               * Can Pin Messages
               * @description True, if the user is allowed to pin messages
               * @default null
               */
              can_pin_messages: boolean | null;
              /**
               * Can Send Media Messages
               * @description True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes
               * @default null
               */
              can_send_media_messages: boolean | null;
              /**
               * Can Send Messages
               * @description True, if the user is allowed to send text messages, contacts, locations and venues
               * @default null
               */
              can_send_messages: boolean | null;
              /**
               * Can Send Other Messages
               * @description True, if the user is allowed to send animations, games, stickers and use inline bots
               * @default null
               */
              can_send_other_messages: boolean | null;
              /**
               * Can Send Polls
               * @description True, if the user is allowed to send polls
               * @default null
               */
              can_send_polls: boolean | null;
          } | null;
          /**
           * ChatPhoto
           * @description Telegram chat photo object
           * @default null
           */
          photo: {
              /**
               * Big File Id
               * @description File identifier of big (640x640) chat photo
               */
              big_file_id: string;
              /**
               * Big File Unique Id
               * @description Unique file identifier of big chat photo
               */
              big_file_unique_id: string;
              /**
               * Small File Id
               * @description File identifier of small (160x160) chat photo
               */
              small_file_id: string;
              /**
               * Small File Unique Id
               * @description Unique file identifier of small chat photo
               */
              small_file_unique_id: string;
          } | null;
          /**
           * Pinned Message
           * @description The most recent pinned message
           * @default null
           */
          pinned_message: {
              [key: string]: unknown;
          } | null;
          /**
           * Slow Mode Delay
           * @description For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user
           * @default null
           */
          slow_mode_delay: number | null;
          /**
           * Sticker Set Name
           * @description For supergroups, name of group sticker set
           * @default null
           */
          sticker_set_name: string | null;
          /**
           * Title
           * @description Title, for supergroups, channels and group chats
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Type of chat, can be either 'private', 'group', 'supergroup' or 'channel'
           */
          type: string;
          /**
           * Username
           * @description Username, for private chats, supergroups and channels if available
           * @default null
           */
          username: string | null;
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
 * Type of TELEGRAM's TELEGRAM_GET_CHAT_ADMINISTRATORS tool input.
 */
type TELEGRAM_GET_CHAT_ADMINISTRATORS_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier for the target chat or username of the target supergroup or channel
   */
  chat_id?: number | null;
};

/**
 * Type of TELEGRAM's TELEGRAM_GET_CHAT_ADMINISTRATORS tool output.
 */
type TELEGRAM_GET_CHAT_ADMINISTRATORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * Result
       * @description Array of ChatMember objects that contains information about all chat administrators except other bots
       * @default null
       */
      result: {
          /**
           * Can Be Edited
           * @description True, if the bot is allowed to edit administrator privileges of that user
           * @default null
           */
          can_be_edited: boolean | null;
          /**
           * Can Change Info
           * @description True, if the user is allowed to change the chat title, photo and other settings
           * @default null
           */
          can_change_info: boolean | null;
          /**
           * Can Delete Messages
           * @description True, if the administrator can delete messages of other users
           * @default null
           */
          can_delete_messages: boolean | null;
          /**
           * Can Edit Messages
           * @description True, if the administrator can edit messages of other users and can pin messages; channels only
           * @default null
           */
          can_edit_messages: boolean | null;
          /**
           * Can Invite Users
           * @description True, if the user is allowed to invite new users to the chat
           * @default null
           */
          can_invite_users: boolean | null;
          /**
           * Can Manage Chat
           * @description True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode
           * @default null
           */
          can_manage_chat: boolean | null;
          /**
           * Can Manage Video Chats
           * @description True, if the administrator can manage video chats
           * @default null
           */
          can_manage_video_chats: boolean | null;
          /**
           * Can Pin Messages
           * @description True, if the user is allowed to pin messages; groups and supergroups only
           * @default null
           */
          can_pin_messages: boolean | null;
          /**
           * Can Post Messages
           * @description True, if the administrator can post in the channel; channels only
           * @default null
           */
          can_post_messages: boolean | null;
          /**
           * Can Promote Members
           * @description True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted
           * @default null
           */
          can_promote_members: boolean | null;
          /**
           * Can Restrict Members
           * @description True, if the administrator can restrict, ban or unban chat members
           * @default null
           */
          can_restrict_members: boolean | null;
          /**
           * Custom Title
           * @description Custom title for this user
           * @default null
           */
          custom_title: string | null;
          /**
           * Is Anonymous
           * @description True, if the user's presence in the chat is hidden
           * @default null
           */
          is_anonymous: boolean | null;
          /**
           * Status
           * @description The member's status in the chat. Can be 'creator', 'administrator', 'member', 'restricted', 'left' or 'kicked'
           */
          status: string;
          /**
           * User
           * @description Information about the user
           */
          user: {
              /**
               * First Name
               * @description User's or bot's first name
               */
              first_name: string;
              /**
               * Id
               * @description Unique identifier for this user or bot
               */
              id: number;
              /**
               * Is Bot
               * @description True, if this user is a bot
               */
              is_bot: boolean;
              /**
               * Language Code
               * @description IETF language tag of the user's language
               * @default null
               */
              language_code: string | null;
              /**
               * Last Name
               * @description User's or bot's last name
               * @default null
               */
              last_name: string | null;
              /**
               * Username
               * @description User's or bot's username
               * @default null
               */
              username: string | null;
          };
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
 * Type of TELEGRAM's TELEGRAM_GET_CHAT_HISTORY tool input.
 */
type TELEGRAM_GET_CHAT_HISTORY_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier for the target chat or username of the target supergroup or channel
   */
  chat_id?: number | null;
  /**
   * Limit
   * @description Limits the number of messages to be retrieved. Values between 1-100 are accepted. Defaults to 100.
   * @default null
   */
  limit: number | null;
  /**
   * Message Id
   * @description Identifier of a message in the chat as a starting point for getting history. If not specified, returns recent messages.
   * @default null
   */
  message_id: number | null;
  /**
   * Offset
   * @description Sequential number of the first message to be returned; negative values are allowed. Default is 0.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of TELEGRAM's TELEGRAM_GET_CHAT_HISTORY tool output.
 */
type TELEGRAM_GET_CHAT_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * Result
       * @description Array of messages if successful
       * @default null
       */
      result: {
          /**
           * Chat
           * @description Conversation the message belongs to
           */
          chat: {
              /**
               * First Name
               * @description First name of the other party in a private chat
               * @default null
               */
              first_name: string | null;
              /**
               * Id
               * @description Unique identifier for this chat
               */
              id: number;
              /**
               * Last Name
               * @description Last name of the other party in a private chat
               * @default null
               */
              last_name: string | null;
              /**
               * Title
               * @description Title, for supergroups, channels and group chats
               * @default null
               */
              title: string | null;
              /**
               * Type
               * @description Type of chat
               */
              type: string;
              /**
               * Username
               * @description Username
               * @default null
               */
              username: string | null;
          };
          /**
           * Date
           * @description Date the message was sent in Unix time
           */
          date: number;
          /**
           * Document
           * @description Information about the document
           * @default null
           */
          document: {
              [key: string]: unknown;
          } | null;
          /**
           * Entities
           * @description Special entities like usernames, URLs, bot commands, etc.
           * @default null
           */
          entities: {
              /**
               * Length
               * @description Length of the entity in UTF-16 code units
               */
              length: number;
              /**
               * Offset
               * @description Offset in UTF-16 code units to the start of the entity
               */
              offset: number;
              /**
               * Type
               * @description Type of the entity
               */
              type: string;
              /**
               * Url
               * @description For 'text_link' only, url that will be opened after user taps on the text
               * @default null
               */
              url: string | null;
              /**
               * User
               * @description For 'text_mention' only, the mentioned user
               * @default null
               */
              user: {
                  [key: string]: unknown;
              } | null;
          }[] | null;
          /**
           * Forward Date
           * @description For forwarded messages, date the original message was sent
           * @default null
           */
          forward_date: number | null;
          /**
           * TelegramUser
           * @description Telegram user object
           * @default null
           */
          forward_from: {
              /**
               * First Name
               * @description User's or bot's first name
               */
              first_name: string;
              /**
               * Id
               * @description Unique identifier for this user or bot
               */
              id: number;
              /**
               * Is Bot
               * @description True, if this user is a bot
               */
              is_bot: boolean;
              /**
               * Language Code
               * @description IETF language tag of the user's language
               * @default null
               */
              language_code: string | null;
              /**
               * Last Name
               * @description User's or bot's last name
               * @default null
               */
              last_name: string | null;
              /**
               * Username
               * @description User's or bot's username
               * @default null
               */
              username: string | null;
          } | null;
          /**
           * TelegramUser
           * @description Telegram user object
           * @default null
           */
          from: {
              /**
               * First Name
               * @description User's or bot's first name
               */
              first_name: string;
              /**
               * Id
               * @description Unique identifier for this user or bot
               */
              id: number;
              /**
               * Is Bot
               * @description True, if this user is a bot
               */
              is_bot: boolean;
              /**
               * Language Code
               * @description IETF language tag of the user's language
               * @default null
               */
              language_code: string | null;
              /**
               * Last Name
               * @description User's or bot's last name
               * @default null
               */
              last_name: string | null;
              /**
               * Username
               * @description User's or bot's username
               * @default null
               */
              username: string | null;
          } | null;
          /**
           * Location
           * @description Information about the location
           * @default null
           */
          location: {
              [key: string]: unknown;
          } | null;
          /**
           * Message Id
           * @description Unique message identifier inside this chat
           */
          message_id: number;
          /**
           * Photo
           * @description Available sizes of the photo
           * @default null
           */
          photo: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Reply To Message
           * @description For replies, the original message
           * @default null
           */
          reply_to_message: {
              [key: string]: unknown;
          } | null;
          /**
           * Text
           * @description For text messages, the actual UTF-8 text of the message
           * @default null
           */
          text: string | null;
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
 * Type of TELEGRAM's TELEGRAM_GET_CHAT_MEMBERS_COUNT tool input.
 */
type TELEGRAM_GET_CHAT_MEMBERS_COUNT_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier for the target chat or username of the target supergroup or channel
   */
  chat_id?: number | null;
};

/**
 * Type of TELEGRAM's TELEGRAM_GET_CHAT_MEMBERS_COUNT tool output.
 */
type TELEGRAM_GET_CHAT_MEMBERS_COUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * Result
       * @description Number of members in the chat if successful
       * @default null
       */
      result: number | null;
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
 * Type of TELEGRAM's TELEGRAM_GET_ME tool input.
 */
type TELEGRAM_GET_ME_INPUT = object;

/**
 * Type of TELEGRAM's TELEGRAM_GET_ME tool output.
 */
type TELEGRAM_GET_ME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * BotInfo
       * @description Telegram bot information object
       * @default null
       */
      result: {
          /**
           * Can Join Groups
           * @description True, if the bot can be invited to groups
           * @default null
           */
          can_join_groups: boolean | null;
          /**
           * Can Read All Group Messages
           * @description True, if privacy mode is disabled for the bot
           * @default null
           */
          can_read_all_group_messages: boolean | null;
          /**
           * First Name
           * @description Bot's first name
           */
          first_name: string;
          /**
           * Id
           * @description Unique identifier for this bot
           */
          id: number;
          /**
           * Is Bot
           * @description True, confirming this is a bot
           */
          is_bot: boolean;
          /**
           * Language Code
           * @description IETF language tag of the bot's language
           * @default null
           */
          language_code: string | null;
          /**
           * Last Name
           * @description Bot's last name
           * @default null
           */
          last_name: string | null;
          /**
           * Supports Inline Queries
           * @description True, if the bot supports inline queries
           * @default null
           */
          supports_inline_queries: boolean | null;
          /**
           * Username
           * @description Bot's username
           * @default null
           */
          username: string | null;
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
 * Type of TELEGRAM's TELEGRAM_GET_UPDATES tool input.
 */
type TELEGRAM_GET_UPDATES_INPUT = {
  /**
   * Allowed Updates
   * @description A JSON-serialized list of the update types you want your bot to receive. Specify an empty list to receive all update types except chat_member
   * @default null
   */
  allowed_updates: string[] | null;
  /**
   * Limit
   * @description Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates
   * @default null
   */
  offset: number | null;
  /**
   * Timeout
   * @description Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only
   * @default null
   */
  timeout: number | null;
};

/**
 * Type of TELEGRAM's TELEGRAM_GET_UPDATES tool output.
 */
type TELEGRAM_GET_UPDATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * Result
       * @description Array of Update objects if successful
       * @default null
       */
      result: {
          /**
           * CallbackQuery
           * @description Telegram callback query object
           * @default null
           */
          callback_query: {
              /**
               * Chat Instance
               * @description Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent
               */
              chat_instance: string;
              /**
               * Data
               * @description Data associated with the callback button
               * @default null
               */
              data: string | null;
              /**
               * From
               * @description Sender
               */
              from: {
                  /**
                   * First Name
                   * @description User's or bot's first name
                   */
                  first_name: string;
                  /**
                   * Id
                   * @description Unique identifier for this user or bot
                   */
                  id: number;
                  /**
                   * Is Bot
                   * @description True, if this user is a bot
                   */
                  is_bot: boolean;
                  /**
                   * Language Code
                   * @description IETF language tag of the user's language
                   * @default null
                   */
                  language_code: string | null;
                  /**
                   * Last Name
                   * @description User's or bot's last name
                   * @default null
                   */
                  last_name: string | null;
                  /**
                   * Username
                   * @description User's or bot's username
                   * @default null
                   */
                  username: string | null;
              };
              /**
               * Id
               * @description Unique identifier for this query
               */
              id: string;
              /**
               * Inline Message Id
               * @description Identifier of the message sent via the bot in inline mode
               * @default null
               */
              inline_message_id: string | null;
              /**
               * TelegramMessage
               * @description Telegram message object
               * @default null
               */
              message: {
                  /**
                   * Chat
                   * @description Conversation the message belongs to
                   */
                  chat: {
                      /**
                       * First Name
                       * @description First name of the other party in a private chat
                       * @default null
                       */
                      first_name: string | null;
                      /**
                       * Id
                       * @description Unique identifier for this chat
                       */
                      id: number;
                      /**
                       * Last Name
                       * @description Last name of the other party in a private chat
                       * @default null
                       */
                      last_name: string | null;
                      /**
                       * Title
                       * @description Title, for supergroups, channels and group chats
                       * @default null
                       */
                      title: string | null;
                      /**
                       * Type
                       * @description Type of chat
                       */
                      type: string;
                      /**
                       * Username
                       * @description Username
                       * @default null
                       */
                      username: string | null;
                  };
                  /**
                   * Date
                   * @description Date the message was sent in Unix time
                   */
                  date: number;
                  /**
                   * Entities
                   * @description Special entities like usernames, URLs, bot commands, etc. that appear in the text
                   * @default null
                   */
                  entities: {
                      [key: string]: unknown;
                  }[] | null;
                  /**
                   * TelegramUser
                   * @description Telegram user object
                   * @default null
                   */
                  from: {
                      /**
                       * First Name
                       * @description User's or bot's first name
                       */
                      first_name: string;
                      /**
                       * Id
                       * @description Unique identifier for this user or bot
                       */
                      id: number;
                      /**
                       * Is Bot
                       * @description True, if this user is a bot
                       */
                      is_bot: boolean;
                      /**
                       * Language Code
                       * @description IETF language tag of the user's language
                       * @default null
                       */
                      language_code: string | null;
                      /**
                       * Last Name
                       * @description User's or bot's last name
                       * @default null
                       */
                      last_name: string | null;
                      /**
                       * Username
                       * @description User's or bot's username
                       * @default null
                       */
                      username: string | null;
                  } | null;
                  /**
                   * Message Id
                   * @description Unique message identifier inside this chat
                   */
                  message_id: number;
                  /**
                   * Text
                   * @description For text messages, the actual UTF-8 text of the message
                   * @default null
                   */
                  text: string | null;
              } | null;
          } | null;
          /**
           * TelegramMessage
           * @description Telegram message object
           * @default null
           */
          channel_post: {
              /**
               * Chat
               * @description Conversation the message belongs to
               */
              chat: {
                  /**
                   * First Name
                   * @description First name of the other party in a private chat
                   * @default null
                   */
                  first_name: string | null;
                  /**
                   * Id
                   * @description Unique identifier for this chat
                   */
                  id: number;
                  /**
                   * Last Name
                   * @description Last name of the other party in a private chat
                   * @default null
                   */
                  last_name: string | null;
                  /**
                   * Title
                   * @description Title, for supergroups, channels and group chats
                   * @default null
                   */
                  title: string | null;
                  /**
                   * Type
                   * @description Type of chat
                   */
                  type: string;
                  /**
                   * Username
                   * @description Username
                   * @default null
                   */
                  username: string | null;
              };
              /**
               * Date
               * @description Date the message was sent in Unix time
               */
              date: number;
              /**
               * Entities
               * @description Special entities like usernames, URLs, bot commands, etc. that appear in the text
               * @default null
               */
              entities: {
                  [key: string]: unknown;
              }[] | null;
              /**
               * TelegramUser
               * @description Telegram user object
               * @default null
               */
              from: {
                  /**
                   * First Name
                   * @description User's or bot's first name
                   */
                  first_name: string;
                  /**
                   * Id
                   * @description Unique identifier for this user or bot
                   */
                  id: number;
                  /**
                   * Is Bot
                   * @description True, if this user is a bot
                   */
                  is_bot: boolean;
                  /**
                   * Language Code
                   * @description IETF language tag of the user's language
                   * @default null
                   */
                  language_code: string | null;
                  /**
                   * Last Name
                   * @description User's or bot's last name
                   * @default null
                   */
                  last_name: string | null;
                  /**
                   * Username
                   * @description User's or bot's username
                   * @default null
                   */
                  username: string | null;
              } | null;
              /**
               * Message Id
               * @description Unique message identifier inside this chat
               */
              message_id: number;
              /**
               * Text
               * @description For text messages, the actual UTF-8 text of the message
               * @default null
               */
              text: string | null;
          } | null;
          /**
           * TelegramMessage
           * @description Telegram message object
           * @default null
           */
          edited_channel_post: {
              /**
               * Chat
               * @description Conversation the message belongs to
               */
              chat: {
                  /**
                   * First Name
                   * @description First name of the other party in a private chat
                   * @default null
                   */
                  first_name: string | null;
                  /**
                   * Id
                   * @description Unique identifier for this chat
                   */
                  id: number;
                  /**
                   * Last Name
                   * @description Last name of the other party in a private chat
                   * @default null
                   */
                  last_name: string | null;
                  /**
                   * Title
                   * @description Title, for supergroups, channels and group chats
                   * @default null
                   */
                  title: string | null;
                  /**
                   * Type
                   * @description Type of chat
                   */
                  type: string;
                  /**
                   * Username
                   * @description Username
                   * @default null
                   */
                  username: string | null;
              };
              /**
               * Date
               * @description Date the message was sent in Unix time
               */
              date: number;
              /**
               * Entities
               * @description Special entities like usernames, URLs, bot commands, etc. that appear in the text
               * @default null
               */
              entities: {
                  [key: string]: unknown;
              }[] | null;
              /**
               * TelegramUser
               * @description Telegram user object
               * @default null
               */
              from: {
                  /**
                   * First Name
                   * @description User's or bot's first name
                   */
                  first_name: string;
                  /**
                   * Id
                   * @description Unique identifier for this user or bot
                   */
                  id: number;
                  /**
                   * Is Bot
                   * @description True, if this user is a bot
                   */
                  is_bot: boolean;
                  /**
                   * Language Code
                   * @description IETF language tag of the user's language
                   * @default null
                   */
                  language_code: string | null;
                  /**
                   * Last Name
                   * @description User's or bot's last name
                   * @default null
                   */
                  last_name: string | null;
                  /**
                   * Username
                   * @description User's or bot's username
                   * @default null
                   */
                  username: string | null;
              } | null;
              /**
               * Message Id
               * @description Unique message identifier inside this chat
               */
              message_id: number;
              /**
               * Text
               * @description For text messages, the actual UTF-8 text of the message
               * @default null
               */
              text: string | null;
          } | null;
          /**
           * TelegramMessage
           * @description Telegram message object
           * @default null
           */
          edited_message: {
              /**
               * Chat
               * @description Conversation the message belongs to
               */
              chat: {
                  /**
                   * First Name
                   * @description First name of the other party in a private chat
                   * @default null
                   */
                  first_name: string | null;
                  /**
                   * Id
                   * @description Unique identifier for this chat
                   */
                  id: number;
                  /**
                   * Last Name
                   * @description Last name of the other party in a private chat
                   * @default null
                   */
                  last_name: string | null;
                  /**
                   * Title
                   * @description Title, for supergroups, channels and group chats
                   * @default null
                   */
                  title: string | null;
                  /**
                   * Type
                   * @description Type of chat
                   */
                  type: string;
                  /**
                   * Username
                   * @description Username
                   * @default null
                   */
                  username: string | null;
              };
              /**
               * Date
               * @description Date the message was sent in Unix time
               */
              date: number;
              /**
               * Entities
               * @description Special entities like usernames, URLs, bot commands, etc. that appear in the text
               * @default null
               */
              entities: {
                  [key: string]: unknown;
              }[] | null;
              /**
               * TelegramUser
               * @description Telegram user object
               * @default null
               */
              from: {
                  /**
                   * First Name
                   * @description User's or bot's first name
                   */
                  first_name: string;
                  /**
                   * Id
                   * @description Unique identifier for this user or bot
                   */
                  id: number;
                  /**
                   * Is Bot
                   * @description True, if this user is a bot
                   */
                  is_bot: boolean;
                  /**
                   * Language Code
                   * @description IETF language tag of the user's language
                   * @default null
                   */
                  language_code: string | null;
                  /**
                   * Last Name
                   * @description User's or bot's last name
                   * @default null
                   */
                  last_name: string | null;
                  /**
                   * Username
                   * @description User's or bot's username
                   * @default null
                   */
                  username: string | null;
              } | null;
              /**
               * Message Id
               * @description Unique message identifier inside this chat
               */
              message_id: number;
              /**
               * Text
               * @description For text messages, the actual UTF-8 text of the message
               * @default null
               */
              text: string | null;
          } | null;
          /**
           * TelegramMessage
           * @description Telegram message object
           * @default null
           */
          message: {
              /**
               * Chat
               * @description Conversation the message belongs to
               */
              chat: {
                  /**
                   * First Name
                   * @description First name of the other party in a private chat
                   * @default null
                   */
                  first_name: string | null;
                  /**
                   * Id
                   * @description Unique identifier for this chat
                   */
                  id: number;
                  /**
                   * Last Name
                   * @description Last name of the other party in a private chat
                   * @default null
                   */
                  last_name: string | null;
                  /**
                   * Title
                   * @description Title, for supergroups, channels and group chats
                   * @default null
                   */
                  title: string | null;
                  /**
                   * Type
                   * @description Type of chat
                   */
                  type: string;
                  /**
                   * Username
                   * @description Username
                   * @default null
                   */
                  username: string | null;
              };
              /**
               * Date
               * @description Date the message was sent in Unix time
               */
              date: number;
              /**
               * Entities
               * @description Special entities like usernames, URLs, bot commands, etc. that appear in the text
               * @default null
               */
              entities: {
                  [key: string]: unknown;
              }[] | null;
              /**
               * TelegramUser
               * @description Telegram user object
               * @default null
               */
              from: {
                  /**
                   * First Name
                   * @description User's or bot's first name
                   */
                  first_name: string;
                  /**
                   * Id
                   * @description Unique identifier for this user or bot
                   */
                  id: number;
                  /**
                   * Is Bot
                   * @description True, if this user is a bot
                   */
                  is_bot: boolean;
                  /**
                   * Language Code
                   * @description IETF language tag of the user's language
                   * @default null
                   */
                  language_code: string | null;
                  /**
                   * Last Name
                   * @description User's or bot's last name
                   * @default null
                   */
                  last_name: string | null;
                  /**
                   * Username
                   * @description User's or bot's username
                   * @default null
                   */
                  username: string | null;
              } | null;
              /**
               * Message Id
               * @description Unique message identifier inside this chat
               */
              message_id: number;
              /**
               * Text
               * @description For text messages, the actual UTF-8 text of the message
               * @default null
               */
              text: string | null;
          } | null;
          /**
           * Update Id
           * @description The update's unique identifier
           */
          update_id: number;
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
 * Type of TELEGRAM's TELEGRAM_SEND_DOCUMENT tool input.
 */
type TELEGRAM_SEND_DOCUMENT_INPUT = {
  /**
   * Caption
   * @description Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing
   * @default null
   */
  caption: string | null;
  /**
   * Chat Id
   * @description Unique identifier for the target chat or username of the target channel
   */
  chat_id?: number | null;
  /**
   * Disable Content Type Detection
   * @description Disables automatic server-side content type detection for files uploaded using multipart/form-data
   * @default null
   */
  disable_content_type_detection: boolean | null;
  /**
   * Disable Notification
   * @description Sends the message silently. Users will receive a notification with no sound.
   * @default null
   */
  disable_notification: boolean | null;
  /**
   * Document
   * @description File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new file using multipart/form-data. More info on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  document?: string;
  /**
   * Parse Mode
   * @description Mode for parsing entities in the document caption. Options: 'Markdown', 'MarkdownV2', 'HTML'
   * @default null
   */
  parse_mode: string | null;
  /**
   * Reply Markup
   * @description JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @default null
   */
  reply_markup: string | null;
  /**
   * Reply To Message Id
   * @description If the message is a reply, ID of the original message
   * @default null
   */
  reply_to_message_id: number | null;
  /**
   * Thumbnail
   * @description Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side
   * @default null
   */
  thumbnail: string | null;
};

/**
 * Type of TELEGRAM's TELEGRAM_SEND_DOCUMENT tool output.
 */
type TELEGRAM_SEND_DOCUMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * DocumentMessage
       * @description Telegram message with document
       * @default null
       */
      result: {
          /**
           * Caption
           * @description Caption for the document
           * @default null
           */
          caption: string | null;
          /**
           * Chat
           * @description Conversation the message belongs to
           */
          chat: {
              /**
               * First Name
               * @description First name of the other party in a private chat
               * @default null
               */
              first_name: string | null;
              /**
               * Id
               * @description Unique identifier for this chat
               */
              id: number;
              /**
               * Last Name
               * @description Last name of the other party in a private chat
               * @default null
               */
              last_name: string | null;
              /**
               * Title
               * @description Title, for supergroups, channels and group chats
               * @default null
               */
              title: string | null;
              /**
               * Type
               * @description Type of chat
               */
              type: string;
              /**
               * Username
               * @description Username
               * @default null
               */
              username: string | null;
          };
          /**
           * Date
           * @description Date the message was sent in Unix time
           */
          date: number;
          /**
           * Document
           * @description Information about the document
           */
          document: {
              /**
               * File Id
               * @description Identifier for this file
               */
              file_id: string;
              /**
               * File Name
               * @description Original filename as defined by sender
               * @default null
               */
              file_name: string | null;
              /**
               * File Size
               * @description File size in bytes
               * @default null
               */
              file_size: number | null;
              /**
               * File Unique Id
               * @description Unique identifier for this file
               */
              file_unique_id: string;
              /**
               * Mime Type
               * @description MIME type of the file as defined by sender
               * @default null
               */
              mime_type: string | null;
          };
          /**
           * TelegramUser
           * @description Telegram user object
           * @default null
           */
          from: {
              /**
               * First Name
               * @description User's or bot's first name
               */
              first_name: string;
              /**
               * Id
               * @description Unique identifier for this user or bot
               */
              id: number;
              /**
               * Is Bot
               * @description True, if this user is a bot
               */
              is_bot: boolean;
              /**
               * Last Name
               * @description User's or bot's last name
               * @default null
               */
              last_name: string | null;
              /**
               * Username
               * @description User's or bot's username
               * @default null
               */
              username: string | null;
          } | null;
          /**
           * Message Id
           * @description Unique message identifier inside this chat
           */
          message_id: number;
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
 * Type of TELEGRAM's TELEGRAM_SEND_LOCATION tool input.
 */
type TELEGRAM_SEND_LOCATION_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier for the target chat or username of the target channel
   */
  chat_id?: number | null;
  /**
   * Disable Notification
   * @description Sends the message silently. Users will receive a notification with no sound.
   * @default null
   */
  disable_notification: boolean | null;
  /**
   * Heading
   * @description For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   * @default null
   */
  heading: number | null;
  /**
   * Horizontal Accuracy
   * @description The radius of uncertainty for the location, measured in meters; 0-1500
   * @default null
   */
  horizontal_accuracy: number | null;
  /**
   * Latitude
   * @description Latitude of the location
   */
  latitude?: number;
  /**
   * Live Period
   * @description Period in seconds for which the location will be updated (see Live Locations), should be between 60 and 86400
   * @default null
   */
  live_period: number | null;
  /**
   * Longitude
   * @description Longitude of the location
   */
  longitude?: number;
  /**
   * Proximity Alert Radius
   * @description For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   * @default null
   */
  proximity_alert_radius: number | null;
  /**
   * Reply Markup
   * @description JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @default null
   */
  reply_markup: string | null;
  /**
   * Reply To Message Id
   * @description If the message is a reply, ID of the original message
   * @default null
   */
  reply_to_message_id: number | null;
};

/**
 * Type of TELEGRAM's TELEGRAM_SEND_LOCATION tool output.
 */
type TELEGRAM_SEND_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * LocationMessage
       * @description Telegram message with location
       * @default null
       */
      result: {
          /**
           * Chat
           * @description Conversation the message belongs to
           */
          chat: {
              /**
               * First Name
               * @description First name of the other party in a private chat
               * @default null
               */
              first_name: string | null;
              /**
               * Id
               * @description Unique identifier for this chat
               */
              id: number;
              /**
               * Last Name
               * @description Last name of the other party in a private chat
               * @default null
               */
              last_name: string | null;
              /**
               * Title
               * @description Title, for supergroups, channels and group chats
               * @default null
               */
              title: string | null;
              /**
               * Type
               * @description Type of chat
               */
              type: string;
              /**
               * Username
               * @description Username
               * @default null
               */
              username: string | null;
          };
          /**
           * Date
           * @description Date the message was sent in Unix time
           */
          date: number;
          /**
           * TelegramUser
           * @description Telegram user object
           * @default null
           */
          from: {
              /**
               * First Name
               * @description User's or bot's first name
               */
              first_name: string;
              /**
               * Id
               * @description Unique identifier for this user or bot
               */
              id: number;
              /**
               * Is Bot
               * @description True, if this user is a bot
               */
              is_bot: boolean;
              /**
               * Last Name
               * @description User's or bot's last name
               * @default null
               */
              last_name: string | null;
              /**
               * Username
               * @description User's or bot's username
               * @default null
               */
              username: string | null;
          } | null;
          /**
           * Location
           * @description Information about the location
           */
          location: {
              /**
               * Heading
               * @description The direction in which user is moving, in degrees
               * @default null
               */
              heading: number | null;
              /**
               * Horizontal Accuracy
               * @description The radius of uncertainty for the location, measured in meters
               * @default null
               */
              horizontal_accuracy: number | null;
              /**
               * Latitude
               * @description Latitude as defined by sender
               */
              latitude: number;
              /**
               * Live Period
               * @description Time relative to the message sending date, during which the location can be updated
               * @default null
               */
              live_period: number | null;
              /**
               * Longitude
               * @description Longitude as defined by sender
               */
              longitude: number;
              /**
               * Proximity Alert Radius
               * @description Maximum distance for proximity alerts about approaching another chat member
               * @default null
               */
              proximity_alert_radius: number | null;
          };
          /**
           * Message Id
           * @description Unique message identifier inside this chat
           */
          message_id: number;
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
 * Type of TELEGRAM's TELEGRAM_SEND_MESSAGE tool input.
 */
type TELEGRAM_SEND_MESSAGE_INPUT = {
  /**
   * Chat Id
   * @description Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id?: number | null;
  /**
   * Disable Notification
   * @description Sends the message silently. Users will receive a notification with no sound.
   * @default null
   */
  disable_notification: boolean | null;
  /**
   * Disable Web Page Preview
   * @description Disables link previews for links in this message
   * @default null
   */
  disable_web_page_preview: boolean | null;
  /**
   * Parse Mode
   * @description Mode for parsing entities in the message text. Options: 'Markdown', 'MarkdownV2', 'HTML'
   * @default null
   */
  parse_mode: string | null;
  /**
   * Reply Markup
   * @description JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @default null
   */
  reply_markup: string | null;
  /**
   * Reply To Message Id
   * @description If the message is a reply, ID of the original message
   * @default null
   */
  reply_to_message_id: number | null;
  /**
   * Text
   * @description Text of the message to be sent, 1-4096 characters after entities parsing
   */
  text?: string;
};

/**
 * Type of TELEGRAM's TELEGRAM_SEND_MESSAGE tool output.
 */
type TELEGRAM_SEND_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * TelegramMessage
       * @description Telegram message object
       * @default null
       */
      result: {
          /**
           * Chat
           * @description Conversation the message belongs to
           */
          chat: {
              /**
               * First Name
               * @description First name of the other party in a private chat
               * @default null
               */
              first_name: string | null;
              /**
               * Id
               * @description Unique identifier for this chat
               */
              id: number;
              /**
               * Last Name
               * @description Last name of the other party in a private chat
               * @default null
               */
              last_name: string | null;
              /**
               * Title
               * @description Title, for supergroups, channels and group chats
               * @default null
               */
              title: string | null;
              /**
               * Type
               * @description Type of chat, can be either 'private', 'group', 'supergroup' or 'channel'
               */
              type: string;
              /**
               * Username
               * @description Username, for private chats, supergroups and channels if available
               * @default null
               */
              username: string | null;
          };
          /**
           * Date
           * @description Date the message was sent in Unix time
           */
          date: number;
          /**
           * TelegramUser
           * @description Telegram user object
           * @default null
           */
          from: {
              /**
               * First Name
               * @description User's or bot's first name
               */
              first_name: string;
              /**
               * Id
               * @description Unique identifier for this user or bot
               */
              id: number;
              /**
               * Is Bot
               * @description True, if this user is a bot
               */
              is_bot: boolean;
              /**
               * Language Code
               * @description IETF language tag of the user's language
               * @default null
               */
              language_code: string | null;
              /**
               * Last Name
               * @description User's or bot's last name
               * @default null
               */
              last_name: string | null;
              /**
               * Username
               * @description User's or bot's username
               * @default null
               */
              username: string | null;
          } | null;
          /**
           * Message Id
           * @description Unique message identifier inside this chat
           */
          message_id: number;
          /**
           * Text
           * @description For text messages, the actual UTF-8 text of the message, 0-4096 characters
           * @default null
           */
          text: string | null;
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
 * Type of TELEGRAM's TELEGRAM_SEND_PHOTO tool input.
 */
type TELEGRAM_SEND_PHOTO_INPUT = {
  /**
   * Caption
   * @description Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
   * @default null
   */
  caption: string | null;
  /**
   * Chat Id
   * @description Unique identifier for the target chat or username of the target channel
   */
  chat_id?: number | null;
  /**
   * Disable Notification
   * @description Sends the message silently. Users will receive a notification with no sound.
   * @default null
   */
  disable_notification: boolean | null;
  /**
   * Parse Mode
   * @description Mode for parsing entities in the photo caption. Options: 'Markdown', 'MarkdownV2', 'HTML'
   * @default null
   */
  parse_mode: string | null;
  /**
   * Photo
   * @description Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data
   */
  photo?: string;
  /**
   * Reply Markup
   * @description JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @default null
   */
  reply_markup: string | null;
  /**
   * Reply To Message Id
   * @description If the message is a reply, ID of the original message
   * @default null
   */
  reply_to_message_id: number | null;
};

/**
 * Type of TELEGRAM's TELEGRAM_SEND_PHOTO tool output.
 */
type TELEGRAM_SEND_PHOTO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * PhotoMessage
       * @description Telegram message with photo
       * @default null
       */
      result: {
          /**
           * Caption
           * @description Caption for the photo
           * @default null
           */
          caption: string | null;
          /**
           * Chat
           * @description Conversation the message belongs to
           */
          chat: {
              /**
               * First Name
               * @description First name of the other party in a private chat
               * @default null
               */
              first_name: string | null;
              /**
               * Id
               * @description Unique identifier for this chat
               */
              id: number;
              /**
               * Last Name
               * @description Last name of the other party in a private chat
               * @default null
               */
              last_name: string | null;
              /**
               * Title
               * @description Title, for supergroups, channels and group chats
               * @default null
               */
              title: string | null;
              /**
               * Type
               * @description Type of chat
               */
              type: string;
              /**
               * Username
               * @description Username
               * @default null
               */
              username: string | null;
          };
          /**
           * Date
           * @description Date the message was sent in Unix time
           */
          date: number;
          /**
           * TelegramUser
           * @description Telegram user object
           * @default null
           */
          from: {
              /**
               * First Name
               * @description User's or bot's first name
               */
              first_name: string;
              /**
               * Id
               * @description Unique identifier for this user or bot
               */
              id: number;
              /**
               * Is Bot
               * @description True, if this user is a bot
               */
              is_bot: boolean;
              /**
               * Last Name
               * @description User's or bot's last name
               * @default null
               */
              last_name: string | null;
              /**
               * Username
               * @description User's or bot's username
               * @default null
               */
              username: string | null;
          } | null;
          /**
           * Message Id
           * @description Unique message identifier inside this chat
           */
          message_id: number;
          /**
           * Photo
           * @description Available sizes of the photo
           */
          photo: {
              /**
               * File Id
               * @description Identifier for this file
               */
              file_id: string;
              /**
               * File Size
               * @description File size in bytes
               * @default null
               */
              file_size: number | null;
              /**
               * File Unique Id
               * @description Unique identifier for this file
               */
              file_unique_id: string;
              /**
               * Height
               * @description Photo height
               */
              height: number;
              /**
               * Width
               * @description Photo width
               */
              width: number;
          }[];
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
 * Type of TELEGRAM's TELEGRAM_SEND_POLL tool input.
 */
type TELEGRAM_SEND_POLL_INPUT = {
  /**
   * Allows Multiple Answers
   * @description True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
   * @default null
   */
  allows_multiple_answers: boolean | null;
  /**
   * Chat Id
   * @description Unique identifier for the target chat or username of the target channel
   */
  chat_id?: number | null;
  /**
   * Close Date
   * @description Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.
   * @default null
   */
  close_date: number | null;
  /**
   * Correct Option Id
   * @description 0-based identifier of the correct answer option, required for polls in quiz mode
   * @default null
   */
  correct_option_id: number | null;
  /**
   * Disable Notification
   * @description Sends the message silently. Users will receive a notification with no sound.
   * @default null
   */
  disable_notification: boolean | null;
  /**
   * Explanation
   * @description Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
   * @default null
   */
  explanation: string | null;
  /**
   * Explanation Parse Mode
   * @description Mode for parsing entities in the explanation. Options: 'Markdown', 'MarkdownV2', 'HTML'
   * @default null
   */
  explanation_parse_mode: string | null;
  /**
   * Is Anonymous
   * @description True, if the poll needs to be anonymous, defaults to True
   * @default null
   */
  is_anonymous: boolean | null;
  /**
   * Is Closed
   * @description Pass True, if the poll needs to be immediately closed. This can be useful for poll preview.
   * @default null
   */
  is_closed: boolean | null;
  /**
   * Open Period
   * @description Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
   * @default null
   */
  open_period: number | null;
  /**
   * Options
   * @description A list of answer options, 2-10 strings 1-100 characters each
   */
  options?: string[];
  /**
   * Question
   * @description Poll question, 1-300 characters
   */
  question?: string;
  /**
   * Reply Markup
   * @description JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @default null
   */
  reply_markup: string | null;
  /**
   * Reply To Message Id
   * @description If the message is a reply, ID of the original message
   * @default null
   */
  reply_to_message_id: number | null;
  /**
   * Type
   * @description Poll type, 'quiz' or 'regular', defaults to 'regular'
   * @default null
   */
  type: string | null;
};

/**
 * Type of TELEGRAM's TELEGRAM_SEND_POLL tool output.
 */
type TELEGRAM_SEND_POLL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * PollMessage
       * @description Telegram message with poll
       * @default null
       */
      result: {
          /**
           * Chat
           * @description Conversation the message belongs to
           */
          chat: {
              /**
               * First Name
               * @description First name of the other party in a private chat
               * @default null
               */
              first_name: string | null;
              /**
               * Id
               * @description Unique identifier for this chat
               */
              id: number;
              /**
               * Last Name
               * @description Last name of the other party in a private chat
               * @default null
               */
              last_name: string | null;
              /**
               * Title
               * @description Title, for supergroups, channels and group chats
               * @default null
               */
              title: string | null;
              /**
               * Type
               * @description Type of chat
               */
              type: string;
              /**
               * Username
               * @description Username
               * @default null
               */
              username: string | null;
          };
          /**
           * Date
           * @description Date the message was sent in Unix time
           */
          date: number;
          /**
           * TelegramUser
           * @description Telegram user object
           * @default null
           */
          from: {
              /**
               * First Name
               * @description User's or bot's first name
               */
              first_name: string;
              /**
               * Id
               * @description Unique identifier for this user or bot
               */
              id: number;
              /**
               * Is Bot
               * @description True, if this user is a bot
               */
              is_bot: boolean;
              /**
               * Last Name
               * @description User's or bot's last name
               * @default null
               */
              last_name: string | null;
              /**
               * Username
               * @description User's or bot's username
               * @default null
               */
              username: string | null;
          } | null;
          /**
           * Message Id
           * @description Unique message identifier inside this chat
           */
          message_id: number;
          /**
           * Poll
           * @description Information about the poll
           */
          poll: {
              /**
               * Allows Multiple Answers
               * @description True, if the poll allows multiple answers
               */
              allows_multiple_answers: boolean;
              /**
               * Close Date
               * @description Point in time (Unix timestamp) when the poll will be automatically closed
               * @default null
               */
              close_date: number | null;
              /**
               * Correct Option Id
               * @description 0-based identifier of the correct answer option. Available only for polls in the quiz mode
               * @default null
               */
              correct_option_id: number | null;
              /**
               * Explanation
               * @description Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll
               * @default null
               */
              explanation: string | null;
              /**
               * Id
               * @description Unique poll identifier
               */
              id: string;
              /**
               * Is Anonymous
               * @description True, if the poll is anonymous
               */
              is_anonymous: boolean;
              /**
               * Is Closed
               * @description True, if the poll is closed
               */
              is_closed: boolean;
              /**
               * Open Period
               * @description Amount of time in seconds the poll will be active after creation
               * @default null
               */
              open_period: number | null;
              /**
               * Options
               * @description List of poll options
               */
              options: {
                  /**
                   * Text
                   * @description Option text, 1-100 characters
                   */
                  text: string;
                  /**
                   * Voter Count
                   * @description Number of users that voted for this option
                   */
                  voter_count: number;
              }[];
              /**
               * Question
               * @description Poll question, 1-300 characters
               */
              question: string;
              /**
               * Total Voter Count
               * @description Total number of users that voted in the poll
               */
              total_voter_count: number;
              /**
               * Type
               * @description Poll type, currently can be 'regular' or 'quiz'
               */
              type: string;
          };
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
 * Type of TELEGRAM's TELEGRAM_SET_MY_COMMANDS tool input.
 */
type TELEGRAM_SET_MY_COMMANDS_INPUT = {
  /**
   * Commands
   * @description A list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.
   */
  commands?: {
      /**
       * Command
       * @description Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores.
       */
      command: string;
      /**
       * Description
       * @description Description of the command; 1-256 characters.
       */
      description: string;
  }[];
  /**
   * Language Code
   * @description A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
   * @default null
   */
  language_code: string | null;
  /**
   * Scope
   * @description JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
   * @default null
   */
  scope: string | null;
};

/**
 * Type of TELEGRAM's TELEGRAM_SET_MY_COMMANDS tool output.
 */
type TELEGRAM_SET_MY_COMMANDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the error if the request failed
       * @default null
       */
      description: string | null;
      /**
       * Error Code
       * @description Error code if the request failed
       * @default null
       */
      error_code: number | null;
      /**
       * Ok
       * @description True if the request was successful
       */
      ok: boolean;
      /**
       * Result
       * @description Returns True on success
       */
      result: boolean;
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
 * Type map of all available tool input types for toolkit "TELEGRAM".
 */
export type TELEGRAM_TOOL_INPUTS = {
  ANSWER_CALLBACK_QUERY: TELEGRAM_ANSWER_CALLBACK_QUERY_INPUT
  DELETE_MESSAGE: TELEGRAM_DELETE_MESSAGE_INPUT
  EDIT_MESSAGE: TELEGRAM_EDIT_MESSAGE_INPUT
  EXPORT_CHAT_INVITE_LINK: TELEGRAM_EXPORT_CHAT_INVITE_LINK_INPUT
  FORWARD_MESSAGE: TELEGRAM_FORWARD_MESSAGE_INPUT
  GET_CHAT: TELEGRAM_GET_CHAT_INPUT
  GET_CHAT_ADMINISTRATORS: TELEGRAM_GET_CHAT_ADMINISTRATORS_INPUT
  GET_CHAT_HISTORY: TELEGRAM_GET_CHAT_HISTORY_INPUT
  GET_CHAT_MEMBERS_COUNT: TELEGRAM_GET_CHAT_MEMBERS_COUNT_INPUT
  GET_ME: TELEGRAM_GET_ME_INPUT
  GET_UPDATES: TELEGRAM_GET_UPDATES_INPUT
  SEND_DOCUMENT: TELEGRAM_SEND_DOCUMENT_INPUT
  SEND_LOCATION: TELEGRAM_SEND_LOCATION_INPUT
  SEND_MESSAGE: TELEGRAM_SEND_MESSAGE_INPUT
  SEND_PHOTO: TELEGRAM_SEND_PHOTO_INPUT
  SEND_POLL: TELEGRAM_SEND_POLL_INPUT
  SET_MY_COMMANDS: TELEGRAM_SET_MY_COMMANDS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TELEGRAM".
 */
export type TELEGRAM_TOOL_OUTPUTS = {
  ANSWER_CALLBACK_QUERY: TELEGRAM_ANSWER_CALLBACK_QUERY_OUTPUT
  DELETE_MESSAGE: TELEGRAM_DELETE_MESSAGE_OUTPUT
  EDIT_MESSAGE: TELEGRAM_EDIT_MESSAGE_OUTPUT
  EXPORT_CHAT_INVITE_LINK: TELEGRAM_EXPORT_CHAT_INVITE_LINK_OUTPUT
  FORWARD_MESSAGE: TELEGRAM_FORWARD_MESSAGE_OUTPUT
  GET_CHAT: TELEGRAM_GET_CHAT_OUTPUT
  GET_CHAT_ADMINISTRATORS: TELEGRAM_GET_CHAT_ADMINISTRATORS_OUTPUT
  GET_CHAT_HISTORY: TELEGRAM_GET_CHAT_HISTORY_OUTPUT
  GET_CHAT_MEMBERS_COUNT: TELEGRAM_GET_CHAT_MEMBERS_COUNT_OUTPUT
  GET_ME: TELEGRAM_GET_ME_OUTPUT
  GET_UPDATES: TELEGRAM_GET_UPDATES_OUTPUT
  SEND_DOCUMENT: TELEGRAM_SEND_DOCUMENT_OUTPUT
  SEND_LOCATION: TELEGRAM_SEND_LOCATION_OUTPUT
  SEND_MESSAGE: TELEGRAM_SEND_MESSAGE_OUTPUT
  SEND_PHOTO: TELEGRAM_SEND_PHOTO_OUTPUT
  SEND_POLL: TELEGRAM_SEND_POLL_OUTPUT
  SET_MY_COMMANDS: TELEGRAM_SET_MY_COMMANDS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TELEGRAM toolkit.
 */
export const TELEGRAM = {
  slug: "telegram",
  tools: {
    /**
     * Use this method to send answers to callback queries sent from inline keyboards. the answer will be displayed to the user as a notification at the top of the chat screen or as an alert.
     */
    ANSWER_CALLBACK_QUERY: "TELEGRAM_ANSWER_CALLBACK_QUERY",
    /**
     * Delete a message, including service messages, with certain limitations.
     */
    DELETE_MESSAGE: "TELEGRAM_DELETE_MESSAGE",
    /**
     * Edit text messages sent by the bot.
     */
    EDIT_MESSAGE: "TELEGRAM_EDIT_MESSAGE",
    /**
     * Generate a new primary invite link for a chat; any previously generated primary link is revoked. the bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
     */
    EXPORT_CHAT_INVITE_LINK: "TELEGRAM_EXPORT_CHAT_INVITE_LINK",
    /**
     * Forward messages of any kind. service messages can't be forwarded.
     */
    FORWARD_MESSAGE: "TELEGRAM_FORWARD_MESSAGE",
    /**
     * Get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.).
     */
    GET_CHAT: "TELEGRAM_GET_CHAT",
    /**
     * Get a list of administrators in a chat. on success, returns an array of chatmember objects that contains information about all chat administrators except other bots.
     */
    GET_CHAT_ADMINISTRATORS: "TELEGRAM_GET_CHAT_ADMINISTRATORS",
    /**
     * Get chat history messages. note: this uses the getupdates method with specific parameters to retrieve historical messages.
     */
    GET_CHAT_HISTORY: "TELEGRAM_GET_CHAT_HISTORY",
    /**
     * Get the number of members in a chat. the bot must be an administrator in the chat for this to work.
     */
    GET_CHAT_MEMBERS_COUNT: "TELEGRAM_GET_CHAT_MEMBERS_COUNT",
    /**
     * Get basic information about the bot using the bot api getme method.
     */
    GET_ME: "TELEGRAM_GET_ME",
    /**
     * Use this method to receive incoming updates using long polling. an array of update objects is returned.
     */
    GET_UPDATES: "TELEGRAM_GET_UPDATES",
    /**
     * Send general files (documents) to a telegram chat using the bot api.
     */
    SEND_DOCUMENT: "TELEGRAM_SEND_DOCUMENT",
    /**
     * Send point on the map location to a telegram chat using the bot api.
     */
    SEND_LOCATION: "TELEGRAM_SEND_LOCATION",
    /**
     * Send a text message to a telegram chat using the bot api.
     */
    SEND_MESSAGE: "TELEGRAM_SEND_MESSAGE",
    /**
     * Send photos to a telegram chat using the bot api.
     */
    SEND_PHOTO: "TELEGRAM_SEND_PHOTO",
    /**
     * Send a native poll to a telegram chat using the bot api.
     */
    SEND_POLL: "TELEGRAM_SEND_POLL",
    /**
     * Use this method to change the list of the bot's commands. see https://core.telegram.org/bots#commands for more details about bot commands.
     */
    SET_MY_COMMANDS: "TELEGRAM_SET_MY_COMMANDS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TELEGRAM".
 */
export type TELEGRAM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TELEGRAM".
 */
export type TELEGRAM_TRIGGER_EVENTS = {}
