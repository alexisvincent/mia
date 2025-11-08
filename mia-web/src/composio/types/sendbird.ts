// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SENDBIRD's SENDBIRD_ADD_MEMBERS_GROUP_CHANNEL tool input.
 */
type SENDBIRD_ADD_MEMBERS_GROUP_CHANNEL_INPUT = {
  /**
   * Channel Url
   * @description URL-encoded identifier of the target group channel.
   */
  channel_url?: string;
  /**
   * Hide Existing Messages
   * @description Whether to hide previous messages for new members.
   * @default null
   */
  hide_existing_messages: boolean | null;
  /**
   * Seconds
   * @description Duration in seconds to hide previous messages. Required if hide_existing_messages is true.
   * @default null
   */
  seconds: number | null;
  /**
   * User Ids
   * @description List of User IDs to add to the channel.
   */
  user_ids?: string[];
};

/**
 * Type of SENDBIRD's SENDBIRD_ADD_MEMBERS_GROUP_CHANNEL tool output.
 */
type SENDBIRD_ADD_MEMBERS_GROUP_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Members
       * @description List of members successfully added to the channel.
       */
      members: {
          /**
           * Connection Id
           * @description Connection identifier if connected.
           * @default null
           */
          connection_id: number | null;
          /**
           * Friend Name
           * @description Friend name if available.
           * @default null
           */
          friend_name: string | null;
          /**
           * Hide Start Ts
           * @description Timestamp (ms) when hiding messages started for the user.
           * @default null
           */
          hide_start_ts: number | null;
          /**
           * Is Active
           * @description Whether the user is active (online status).
           * @default null
           */
          is_active: boolean | null;
          /**
           * Last Seen At
           * @description Timestamp (ms) when the user was last seen.
           * @default null
           */
          last_seen_at: number | null;
          /**
           * Member State
           * @description State of the member in channel (joined, invited, etc.).
           * @default null
           */
          member_state: string | null;
          /**
           * Nickname
           * @description Nickname of the member.
           * @default null
           */
          nickname: string | null;
          /**
           * Preferred Languages
           * @description Preferred language codes of the member.
           * @default null
           */
          preferred_languages: string[] | null;
          /**
           * Profile Url
           * @description Profile URL of the member.
           * @default null
           */
          profile_url: string | null;
          /**
           * Registered At
           * @description Timestamp (ms) when the user registered.
           * @default null
           */
          registered_at: number | null;
          /**
           * Require Auth For Profile Image
           * @description Whether the member requires auth for profile image access.
           * @default null
           */
          require_auth_for_profile_image: boolean | null;
          /**
           * User Id
           * @description User ID of the member.
           */
          user_id: string;
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
 * Type of SENDBIRD's SENDBIRD_AI_CHABOT_CREATE_BOT tool input.
 */
type SENDBIRD_AI_CHABOT_CREATE_BOT_INPUT = {
  /**
   * Bot Callback Url
   * Format: uri
   * @description Callback URL for the bot’s webhook events
   * @default null
   */
  bot_callback_url: string | null;
  /**
   * Bot Nickname
   * @description Nickname for the bot, maximum 80 characters
   */
  bot_nickname?: string;
  /**
   * Bot Profile Url
   * Format: uri
   * @description Profile image URL for the bot
   * @default null
   */
  bot_profile_url: string | null;
  /**
   * Bot Type
   * @description Type of the bot
   * @default AI
   * @enum {string|null}
   */
  bot_type: "AI" | "DEFAULT" | null;
  /**
   * Bot Userid
   * @description Unique ID for the bot, maximum 80 characters
   */
  bot_userid?: string;
  /**
   * Channel Invitation Preference
   * @description Channel invitation handling options for the bot. 0 = disable auto accept, 1 = auto accept
   * @default null
   */
  channel_invitation_preference: number | null;
  /**
   * Enable Mark As Read
   * @description Whether the bot marks messages as read automatically
   * @default false
   */
  enable_mark_as_read: boolean | null;
  /**
   * Is Privacy Mode
   * @description Whether the bot operates in privacy mode
   * @default false
   */
  is_privacy_mode: boolean | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_AI_CHABOT_CREATE_BOT tool output.
 */
type SENDBIRD_AI_CHABOT_CREATE_BOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bot
       * @description The created bot object
       */
      bot: {
          /**
           * Bot Callback Url
           * Format: uri
           * @description Callback URL for the bot’s webhook events
           * @default null
           */
          bot_callback_url: string | null;
          /**
           * Bot Nickname
           * @description Bot's nickname
           */
          bot_nickname: string;
          /**
           * Bot Profile Url
           * Format: uri
           * @description Bot's profile image URL
           * @default null
           */
          bot_profile_url: string | null;
          /**
           * Bot Type
           * @description Type of the bot
           * @enum {string}
           */
          bot_type: "AI" | "DEFAULT";
          /**
           * Bot Userid
           * @description Bot's unique user ID
           */
          bot_userid: string;
          /**
           * ChannelInvitationPreference
           * @description Preferences for channel invitations for the bot
           * @default null
           */
          channel_invitation_preference: {
              /**
               * Auto Accept Channel Invitation
               * @description Whether the bot will automatically accept invitations to new channels
               * @default false
               */
              auto_accept_channel_invitation: boolean | null;
          } | null;
          /**
           * Created At
           * @description Timestamp (in milliseconds) when the bot was created
           */
          created_at: number;
          /**
           * Enable Mark As Read
           * @description Whether the bot marks messages as read automatically
           */
          enable_mark_as_read: boolean;
          /**
           * Is Privacy Mode
           * @description Whether the bot operates in privacy mode
           */
          is_privacy_mode: boolean;
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
 * Type of SENDBIRD's SENDBIRD_AI_CHABOT_GET_BOT tool input.
 */
type SENDBIRD_AI_CHABOT_GET_BOT_INPUT = {
  /**
   * Bot User Id
   * @description The unique user ID of the bot to retrieve.
   */
  bot_user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_AI_CHABOT_GET_BOT tool output.
 */
type SENDBIRD_AI_CHABOT_GET_BOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bot
       * @description The retrieved bot information.
       */
      bot: {
          /**
           * Bot User Id
           * @description Unique user ID of the bot.
           */
          bot_user_id: string;
          /**
           * Channel Invitation Preference
           * @description Channel invitation preference setting.
           * @default null
           */
          channel_invitation_preference: string | null;
          /**
           * Created At
           * @description Timestamp when the bot was created in milliseconds.
           */
          created_at: number;
          /**
           * Is Privacy Mode
           * @description Indicates if privacy mode is enabled for the bot.
           * @default null
           */
          is_privacy_mode: boolean | null;
          /**
           * Issue Status
           * @description Issue status if any.
           * @default null
           */
          issue_status: string | null;
          /**
           * Name
           * @description Name of the bot.
           */
          name: string;
          /**
           * Profile Url
           * @description Profile image URL of the bot.
           * @default null
           */
          profile_url: string | null;
          /**
           * Show Member
           * @description Indicates if the bot is shown as a member.
           * @default null
           */
          show_member: boolean | null;
          /**
           * Status
           * @description Current status of the bot.
           */
          status: string;
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
 * Type of SENDBIRD's SENDBIRD_AI_CHABOT_LIST_BOTS tool input.
 */
type SENDBIRD_AI_CHABOT_LIST_BOTS_INPUT = {
  /**
   * Bot Id
   * @description Filter results by a specific bot ID.
   * @default null
   */
  bot_id: string | null;
  /**
   * Limit
   * @description Number of results to return per page (1–100). Defaults to 10 if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Token
   * @description Pagination token for a paginated result.
   * @default null
   */
  token: string | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_AI_CHABOT_LIST_BOTS tool output.
 */
type SENDBIRD_AI_CHABOT_LIST_BOTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bots
       * @description List of bot objects.
       */
      bots: {
          /**
           * Bot Callback Url
           * @description Callback URL of the bot.
           * @default null
           */
          bot_callback_url: string | null;
          /**
           * Bot Id
           * @description Unique identifier for the bot.
           */
          bot_id: string;
          /**
           * Bot Nickname
           * @description Nickname (display name) of the bot.
           */
          bot_nickname: string;
          /**
           * Bot Profile Url
           * @description URL for the bot's profile image.
           * @default null
           */
          bot_profile_url: string | null;
          /**
           * Bot Userid
           * @description The user ID for the bot.
           */
          bot_userid: string;
          /**
           * Created At
           * @description Creation timestamp in milliseconds since the epoch.
           */
          created_at: number;
          /**
           * Enable Webhook Event
           * @description Whether webhook events are enabled for this bot.
           */
          enable_webhook_event: boolean;
          /**
           * Is Privacy Mode
           * @description Whether the bot is in privacy mode.
           */
          is_privacy_mode: boolean;
      }[];
      /**
       * Next
       * @description Pagination token for the next page; null if no further pages.
       * @default null
       */
      next: string | null;
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
 * Type of SENDBIRD's SENDBIRD_AI_CHABOT_LIST_GROUP_CHANNELS tool input.
 */
type SENDBIRD_AI_CHABOT_LIST_GROUP_CHANNELS_INPUT = {
  /**
   * Channel Urls
   * @description Filter by specific channel URLs.
   * @default null
   */
  channel_urls: string[] | null;
  /**
   * Created After
   * @description Filter channels created after this timestamp (ms since epoch).
   * @default null
   */
  created_after: number | null;
  /**
   * Created Before
   * @description Filter channels created before this timestamp (ms since epoch).
   * @default null
   */
  created_before: number | null;
  /**
   * Custom Type
   * @description Filter by a specific custom type.
   * @default null
   */
  custom_type: string | null;
  /**
   * Custom Types
   * @description Filter by multiple custom types.
   * @default null
   */
  custom_types: string[] | null;
  /**
   * Distinct Mode
   * @description Filter by distinct mode: all, distinct, or nondistinct.
   * @default null
   * @enum {string|null}
   */
  distinct_mode: "all" | "distinct" | "nondistinct" | null;
  /**
   * Limit
   * @description Number of results to return per page (1-100).
   * @default null
   */
  limit: number | null;
  /**
   * Member User Ids
   * @description Filter by members' user IDs.
   * @default null
   */
  member_user_ids: string[] | null;
  /**
   * Members Exactly In
   * @description Filter channels where exactly these user IDs are members.
   * @default null
   */
  members_exactly_in: string[] | null;
  /**
   * Members Include In
   * @description Filter channels including any of these user IDs.
   * @default null
   */
  members_include_in: string[] | null;
  /**
   * Members Nickname
   * @description Filter by members' nickname.
   * @default null
   */
  members_nickname: string | null;
  /**
   * Members Nickname Prefix
   * @description Filter by members' nickname prefix.
   * @default null
   */
  members_nickname_prefix: string | null;
  /**
   * Name
   * @description Filter by exact channel name.
   * @default null
   */
  name: string | null;
  /**
   * Name Contains
   * @description Filter by partial channel name match.
   * @default null
   */
  name_contains: string | null;
  /**
   * Public Mode
   * @description Filter by public mode: all, public, or private.
   * @default null
   * @enum {string|null}
   */
  public_mode: "all" | "public" | "private" | null;
  /**
   * Query Type
   * @description Query type to combine member_user_ids: AND or OR.
   * @default null
   * @enum {string|null}
   */
  query_type: "AND" | "OR" | null;
  /**
   * Show Empty
   * @description Include channels with no messages.
   * @default null
   */
  show_empty: boolean | null;
  /**
   * Super Mode
   * @description Filter by super channel mode: all, super, or nonsuper.
   * @default null
   * @enum {string|null}
   */
  super_mode: "all" | "super" | "nonsuper" | null;
  /**
   * Token
   * @description Pagination token for the next page.
   * @default null
   */
  token: string | null;
  /**
   * Url
   * @description Filter by channel URL.
   * @default null
   */
  url: string | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_AI_CHABOT_LIST_GROUP_CHANNELS tool output.
 */
type SENDBIRD_AI_CHABOT_LIST_GROUP_CHANNELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channels
       * @description List of group channel objects.
       */
      channels: {
          /**
           * Channel Url
           * @description URL identifier of the group channel.
           */
          channel_url: string;
          /**
           * Cover Url
           * @description Cover image URL of the group channel.
           * @default null
           */
          cover_url: string | null;
          /**
           * Created At
           * @description Creation timestamp of the channel (ms since epoch).
           */
          created_at: number;
          /**
           * Created By
           * @description User who created the channel.
           */
          created_by: {
              /**
               * Nickname
               * @description User nickname.
               * @default null
               */
              nickname: string | null;
              /**
               * Profile Url
               * @description User profile URL.
               * @default null
               */
              profile_url: string | null;
              /**
               * User Id
               * @description User ID.
               */
              user_id: string;
          };
          /**
           * Custom Type
           * @description Custom type of the channel.
           * @default null
           */
          custom_type: string | null;
          /**
           * Data
           * @description Custom data of the channel.
           * @default null
           */
          data: string | null;
          /**
           * Is Distinct
           * @description Whether the channel is distinct.
           */
          is_distinct: boolean;
          /**
           * Is Public
           * @description Whether the channel is public.
           */
          is_public: boolean;
          /**
           * Is Super
           * @description Whether the channel is a super channel.
           */
          is_super: boolean;
          /**
           * Joined Member Count
           * @description Number of joined members in the channel.
           */
          joined_member_count: number;
          /**
           * LastMessage
           * @description Details of the last message in the channel.
           * @default null
           */
          last_message: {
              /**
               * Created At
               * @description Timestamp of the last message (ms since epoch).
               */
              created_at: number;
              /**
               * Message
               * @description Content of the last message.
               * @default null
               */
              message: string | null;
              /**
               * Message Id
               * @description Unique ID of the last message.
               */
              message_id: number;
              /**
               * Message Type
               * @description Type of the last message.
               */
              message_type: string;
          } | null;
          /**
           * Max Member Count
           * @description Maximum members allowed in the channel.
           */
          max_member_count: number;
          /**
           * Member Count
           * @description Total members in the channel.
           */
          member_count: number;
          /**
           * Name
           * @description Name of the group channel.
           * @default null
           */
          name: string | null;
          /**
           * Unread Mention Count
           * @description Number of unread mentions.
           */
          unread_mention_count: number;
          /**
           * Unread Message Count
           * @description Number of unread messages.
           */
          unread_message_count: number;
      }[];
      /**
       * Next
       * @description Pagination token for the next page; null if no more results.
       * @default null
       */
      next: string | null;
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
 * Type of SENDBIRD's SENDBIRD_AI_CHABOT_UNREGISTER_BOT_WEBHOOK tool input.
 */
type SENDBIRD_AI_CHABOT_UNREGISTER_BOT_WEBHOOK_INPUT = {
  /**
   * Bot Id
   * @description Unique ID of the bot whose webhook will be unregistered.
   */
  bot_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_AI_CHABOT_UNREGISTER_BOT_WEBHOOK tool output.
 */
type SENDBIRD_AI_CHABOT_UNREGISTER_BOT_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bot Id
       * @description Unique ID of the bot for which the webhook was unregistered.
       */
      bot_id: string;
      /**
       * Webhook Url
       * @description The webhook URL that was unregistered; null if none was set.
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
 * Type of SENDBIRD's SENDBIRD_AI_CHABOT_UPDATE_BOT tool input.
 */
type SENDBIRD_AI_CHABOT_UPDATE_BOT_INPUT = {
  /**
   * Bot Id
   * @description The unique ID of the bot to update
   */
  bot_id?: string;
  /**
   * Bot Nickname
   * @description Specifies a new nickname for the bot
   * @default null
   */
  bot_nickname: string | null;
  /**
   * Bot Profile Url
   * @description Specifies a new profile image URL for the bot
   * @default null
   */
  bot_profile_url: string | null;
  /**
   * Bot Userid
   * @description Specifies a new user ID for the bot
   * @default null
   */
  bot_userid: string | null;
  /**
   * Enable Mark As Read
   * @description Determines whether the bot marks messages as read
   * @default null
   */
  enable_mark_as_read: boolean | null;
  /**
   * Is Privacy Mode
   * @description Determines bot privacy mode
   * @default null
   */
  is_privacy_mode: boolean | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_AI_CHABOT_UPDATE_BOT tool output.
 */
type SENDBIRD_AI_CHABOT_UPDATE_BOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bot
       * @description The updated bot object
       */
      bot: {
          /**
           * Bot Callback Url
           * @description The callback URL of the bot
           * @default null
           */
          bot_callback_url: string | null;
          /**
           * Bot Error
           * @description Error message associated with the bot if any
           * @default null
           */
          bot_error: string | null;
          /**
           * Bot Nickname
           * @description The nickname of the bot
           */
          bot_nickname: string;
          /**
           * Bot Profile Url
           * @description The profile image URL of the bot
           * @default null
           */
          bot_profile_url: string | null;
          /**
           * Bot Status
           * @description Status of the bot
           */
          bot_status: string;
          /**
           * Bot Token
           * @description Access token for the bot
           */
          bot_token: string;
          /**
           * Bot Type
           * @description The type of the bot
           */
          bot_type: string;
          /**
           * Bot Userid
           * @description The user ID of the bot
           */
          bot_userid: string;
          /**
           * Created At
           * @description Creation timestamp in UNIX epoch
           */
          created_at: number;
          /**
           * Enable Mark As Read
           * @description Whether mark as read is enabled
           */
          enable_mark_as_read: boolean;
          /**
           * Is Privacy Mode
           * @description Whether privacy mode is enabled
           */
          is_privacy_mode: boolean;
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
 * Type of SENDBIRD's SENDBIRD_AI_CHABOT_UPDATE_BOT_WEBHOOK tool input.
 */
type SENDBIRD_AI_CHABOT_UPDATE_BOT_WEBHOOK_INPUT = {
  /**
   * Bot Id
   * @description The unique ID of the bot to update
   */
  bot_id?: string;
  /**
   * Enable Webhook
   * @description Enable or disable the bot's webhook. If omitted, retains current setting.
   * @default null
   */
  enable_webhook: boolean | null;
  /**
   * Webhook Url
   * Format: uri
   * @description The new webhook URL for the bot
   */
  webhook_url?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_AI_CHABOT_UPDATE_BOT_WEBHOOK tool output.
 */
type SENDBIRD_AI_CHABOT_UPDATE_BOT_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bot
       * @description The updated bot object
       */
      bot: {
          /**
           * Bot Callback Url
           * Format: uri
           * @description Callback (webhook) URL of the bot
           * @default null
           */
          bot_callback_url: string | null;
          /**
           * Bot Error
           * @description Error message associated with the bot if any
           * @default null
           */
          bot_error: string | null;
          /**
           * Bot Nickname
           * @description The nickname of the bot
           */
          bot_nickname: string;
          /**
           * Bot Profile Url
           * Format: uri
           * @description Profile image URL of the bot
           * @default null
           */
          bot_profile_url: string | null;
          /**
           * Bot Status
           * @description Current status of the bot
           */
          bot_status: string;
          /**
           * Bot Token
           * @description Access token for the bot
           */
          bot_token: string;
          /**
           * Bot Type
           * @description Type of the bot (e.g., AI, DEFAULT)
           */
          bot_type: string;
          /**
           * Bot Userid
           * @description The user ID of the bot
           */
          bot_userid: string;
          /**
           * Created At
           * @description Creation timestamp in milliseconds
           */
          created_at: number;
          /**
           * Enable Mark As Read
           * @description Whether the bot marks messages as read automatically
           */
          enable_mark_as_read: boolean;
          /**
           * Is Privacy Mode
           * @description Whether the bot operates in privacy mode
           */
          is_privacy_mode: boolean;
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
 * Type of SENDBIRD's SENDBIRD_BAN_USER_FROM_GROUP_CHANNEL tool input.
 */
type SENDBIRD_BAN_USER_FROM_GROUP_CHANNEL_INPUT = {
  /**
   * Agent Id
   * @description ID of the admin or moderator performing the ban.
   * @default null
   */
  agent_id: string | null;
  /**
   * Channel Url
   * @description URL-encoded identifier of the group channel to ban the user from.
   */
  channel_url?: string;
  /**
   * Description
   * @description Reason for the ban in moderation records.
   * @default null
   */
  description: string | null;
  /**
   * Seconds
   * @description Duration of the ban in seconds. If omitted, ban is permanent.
   * @default null
   */
  seconds: number | null;
  /**
   * User Id
   * @description ID of the user to ban from the channel.
   */
  user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_BAN_USER_FROM_GROUP_CHANNEL tool output.
 */
type SENDBIRD_BAN_USER_FROM_GROUP_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Unix epoch timestamp when ban was created.
       * @default null
       */
      created_at: number | null;
      /**
       * Description
       * @description Reason for the ban.
       * @default null
       */
      description: string | null;
      /**
       * End At
       * @description Unix epoch timestamp when ban ends.
       * @default null
       */
      end_at: number | null;
      /**
       * Seconds
       * @description Duration of the ban in seconds.
       * @default null
       */
      seconds: number | null;
      /**
       * User
       * @description Information about the banned user.
       */
      user: {
          /**
           * Nickname
           * @description Nickname of the banned user.
           * @default null
           */
          nickname: string | null;
          /**
           * Profile Url
           * @description Profile image URL of the banned user.
           * @default null
           */
          profile_url: string | null;
          /**
           * User Id
           * @description ID of the banned user.
           */
          user_id: string;
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
 * Type of SENDBIRD's SENDBIRD_CREATE_CHANNEL tool input.
 */
type SENDBIRD_CREATE_CHANNEL_INPUT = {
  /**
   * Access Code
   * @description Access code for private channels
   * @default null
   */
  access_code: string | null;
  /**
   * Channel Url
   * @description Custom URL of the channel; autogenerated if omitted
   * @default null
   */
  channel_url: string | null;
  /**
   * Cover File
   * Format: binary
   * @description Binary content of the cover image for multipart upload
   * @default null
   */
  cover_file: string | null;
  /**
   * Cover Url
   * @description URL of the channel cover image
   * @default null
   */
  cover_url: string | null;
  /**
   * Custom Fields
   * @description Custom fields object
   * @default null
   */
  custom_fields: {
      [key: string]: unknown;
  } | null;
  /**
   * Custom Type
   * @description Custom type identifier for the channel
   * @default null
   */
  custom_type: string | null;
  /**
   * Data
   * @description Custom data for the channel
   * @default null
   */
  data: string | null;
  /**
   * Is Chat Notification
   * @description True to send system notifications for channel events
   * @default null
   */
  is_chat_notification: boolean | null;
  /**
   * Is Discoverable
   * @description True to list the channel in search results
   * @default null
   */
  is_discoverable: boolean | null;
  /**
   * Is Distinct
   * @description True to create a distinct channel
   * @default null
   */
  is_distinct: boolean | null;
  /**
   * Is Ephemeral
   * @description True to create an ephemeral channel
   * @default null
   */
  is_ephemeral: boolean | null;
  /**
   * Is Public
   * @description True to create a public channel
   * @default null
   */
  is_public: boolean | null;
  /**
   * Is Super
   * @description True to create a supergroup channel
   * @default null
   */
  is_super: boolean | null;
  /**
   * Message Survival Seconds
   * @description Message retention period in seconds
   * @default null
   */
  message_survival_seconds: number | null;
  /**
   * Name
   * @description Name of the channel
   * @default null
   */
  name: string | null;
  /**
   * Operator Ids
   * @description List of user IDs to assign as operators
   * @default null
   */
  operator_ids: string[] | null;
  /**
   * Strict
   * @description True for strict creation; fails if channel exists
   * @default null
   */
  strict: boolean | null;
  /**
   * User Ids
   * @description List of user IDs to invite to the channel (max 100)
   * @default null
   */
  user_ids: string[] | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_CREATE_CHANNEL tool output.
 */
type SENDBIRD_CREATE_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channel Url
       * @description Unique URL of the group channel
       */
      channel_url: string;
      /**
       * Cover Url
       * @description Cover image URL of the channel
       * @default null
       */
      cover_url: string | null;
      /**
       * Created At
       * @description Timestamp when the channel was created (ms)
       */
      created_at: number;
      /**
       * Custom Type
       * @description Custom type identifier of the channel
       * @default null
       */
      custom_type: string | null;
      /**
       * Data
       * @description Custom data of the channel
       * @default null
       */
      data: string | null;
      /**
       * Delivery Receipt
       * @description Delivery receipt per user mapping
       * @default null
       */
      delivery_receipt: {
          [key: string]: number;
      } | null;
      /**
       * Freeze
       * @description Whether the channel is frozen
       */
      freeze: boolean;
      /**
       * Is Broadcast
       * @description Whether the channel is broadcast type
       */
      is_broadcast: boolean;
      /**
       * Is Discoverable
       * @description Whether the channel is discoverable in search
       */
      is_discoverable: boolean;
      /**
       * Is Distinct
       * @description Whether the channel is distinct
       */
      is_distinct: boolean;
      /**
       * Is Ephemeral
       * @description Whether the channel is ephemeral
       */
      is_ephemeral: boolean;
      /**
       * Is Public
       * @description Whether the channel is public
       */
      is_public: boolean;
      /**
       * Is Super
       * @description Whether the channel is a supergroup channel
       */
      is_super: boolean;
      /**
       * Joined Member Count
       * @description Number of joined members in the channel
       */
      joined_member_count: number;
      /**
       * LastMessage
       * @description Last message in the channel
       * @default null
       */
      last_message: {
          /**
           * Created At
           * @description Timestamp when the last message was created (ms)
           */
          created_at: number;
          /**
           * Custom Type
           * @description Custom type of the last message
           * @default null
           */
          custom_type: string | null;
          /**
           * Data
           * @description Data payload of the last message
           * @default null
           */
          data: string | null;
          /**
           * Message
           * @description Content of the last message if text-based
           * @default null
           */
          message: string | null;
          /**
           * Message Id
           * @description ID of the last message
           */
          message_id: number;
          /**
           * Message Type
           * @description Type of the last message (MESG, FILE, ADMM)
           */
          message_type: string;
          /**
           * Updated At
           * @description Timestamp when the last message was last updated (ms)
           */
          updated_at: number;
      } | null;
      /**
       * Member Count
       * @description Number of members in the channel
       */
      member_count: number;
      /**
       * Members
       * @description List of channel members
       */
      members: {
          /**
           * Connection Id
           * @description Member connection ID
           * @default null
           */
          connection_id: number | null;
          /**
           * Has Pin
           * @description Whether member has pinned the channel
           * @default null
           */
          has_pin: boolean | null;
          /**
           * Last Seen At
           * @description Timestamp when member was last active (ms)
           * @default null
           */
          last_seen_at: number | null;
          /**
           * Nickname
           * @description Member nickname
           * @default null
           */
          nickname: string | null;
          /**
           * Pin Timestamp
           * @description Timestamp when channel was pinned (ms)
           * @default null
           */
          pin_timestamp: number | null;
          /**
           * Profile Url
           * @description Member profile image URL
           * @default null
           */
          profile_url: string | null;
          /**
           * State
           * @description Member state (joined, invited, etc.)
           * @default null
           */
          state: string | null;
          /**
           * User Id
           * @description Member user ID
           */
          user_id: string;
      }[];
      /**
       * Metadata
       * @description Channel metadata key-value pairs
       * @default null
       */
      metadata: {
          [key: string]: string;
      } | null;
      /**
       * Name
       * @description Name of the channel
       * @default null
       */
      name: string | null;
      /**
       * Operators
       * @description List of channel operators
       */
      operators: {
          /**
           * Connection Id
           * @description Member connection ID
           * @default null
           */
          connection_id: number | null;
          /**
           * Has Pin
           * @description Whether member has pinned the channel
           * @default null
           */
          has_pin: boolean | null;
          /**
           * Last Seen At
           * @description Timestamp when member was last active (ms)
           * @default null
           */
          last_seen_at: number | null;
          /**
           * Nickname
           * @description Member nickname
           * @default null
           */
          nickname: string | null;
          /**
           * Pin Timestamp
           * @description Timestamp when channel was pinned (ms)
           * @default null
           */
          pin_timestamp: number | null;
          /**
           * Profile Url
           * @description Member profile image URL
           * @default null
           */
          profile_url: string | null;
          /**
           * State
           * @description Member state (joined, invited, etc.)
           * @default null
           */
          state: string | null;
          /**
           * User Id
           * @description Member user ID
           */
          user_id: string;
      }[];
      /**
       * Read Receipt
       * @description Read receipt per user mapping
       * @default null
       */
      read_receipt: {
          [key: string]: number;
      } | null;
      /**
       * Unread Message Count
       * @description Count of unread messages for the user
       */
      unread_message_count: number;
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
 * Type of SENDBIRD's SENDBIRD_CREATE_USER tool input.
 */
type SENDBIRD_CREATE_USER_INPUT = {
  /**
   * Discovery Keys
   * @description List of discovery keys for the user
   * @default null
   */
  discovery_keys: string[] | null;
  /**
   * Has Ever Logged In
   * @description Indicates if the user has ever logged in before
   * @default false
   */
  has_ever_logged_in: boolean | null;
  /**
   * Is Active
   * @description Whether the user is active upon creation
   * @default true
   */
  is_active: boolean | null;
  /**
   * Issue Access Token
   * @description Whether to generate an access token for the user
   * @default false
   */
  issue_access_token: boolean | null;
  /**
   * Metadata
   * @description Arbitrary key/value pairs for custom user data
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Nickname
   * @description Display name of the user
   * @default null
   */
  nickname: string | null;
  /**
   * Phone Number
   * @description User's phone number, E.164 format recommended
   * @default null
   */
  phone_number: string | null;
  /**
   * Preferred Languages
   * @description User's preferred language codes
   * @default null
   */
  preferred_languages: string[] | null;
  /**
   * Profile File
   * Format: binary
   * @description Binary content of the user's profile image; use for multipart upload
   * @default null
   */
  profile_file: string | null;
  /**
   * Profile Url
   * @description URL for the user's profile image
   * @default null
   */
  profile_url: string | null;
  /**
   * User Id
   * @description Unique identifier for the new user
   */
  user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_CREATE_USER tool output.
 */
type SENDBIRD_CREATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Token
       * @description Issued access token, if requested
       * @default null
       */
      access_token: string | null;
      /**
       * Created At
       * @description Timestamp of user creation
       */
      created_at: number;
      /**
       * Discovery Keys
       * @description User's discovery keys
       * @default null
       */
      discovery_keys: string[] | null;
      /**
       * Is Active
       * @description Whether the user is active
       */
      is_active: boolean;
      /**
       * Last Seen At
       * @description Timestamp of last user activity
       */
      last_seen_at: number;
      /**
       * Metadata
       * @description User metadata key/value pairs
       * @default null
       */
      metadata: {
          [key: string]: string;
      } | null;
      /**
       * Nickname
       * @description The user's nickname
       * @default null
       */
      nickname: string | null;
      /**
       * Phone Number
       * @description User's phone number
       * @default null
       */
      phone_number: string | null;
      /**
       * Preferred Languages
       * @description User's preferred languages
       * @default null
       */
      preferred_languages: string[] | null;
      /**
       * Profile Url
       * @description URL of the user's profile image
       * @default null
       */
      profile_url: string | null;
      /**
       * User Id
       * @description The user's unique ID
       */
      user_id: string;
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
 * Type of SENDBIRD's SENDBIRD_DELETE_CHANNEL tool input.
 */
type SENDBIRD_DELETE_CHANNEL_INPUT = {
  /**
   * Channel Url
   * @description The unique URL of the group channel to delete. Example: 'sendbird_group_channel_1234567890abcdef'
   */
  channel_url?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_DELETE_CHANNEL tool output.
 */
type SENDBIRD_DELETE_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if deletion was successful (HTTP 204 No Content).
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
 * Type of SENDBIRD's SENDBIRD_DELETE_MESSAGE tool input.
 */
type SENDBIRD_DELETE_MESSAGE_INPUT = {
  /**
   * Channel Url
   * @description URL identifier of the group channel containing the message
   */
  channel_url?: string;
  /**
   * Message Id
   * @description Unique ID of the message to delete; must be a non-negative integer
   */
  message_id?: number;
};

/**
 * Type of SENDBIRD's SENDBIRD_DELETE_MESSAGE tool output.
 */
type SENDBIRD_DELETE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the message was deleted successfully
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
 * Type of SENDBIRD's SENDBIRD_DELETE_USER tool input.
 */
type SENDBIRD_DELETE_USER_INPUT = {
  /**
   * Hard Delete
   * @description Whether to permanently delete the user and all associated data.
   * @default false
   */
  hard_delete: boolean;
  /**
   * User Id
   * @description Unique ID of the user to delete.
   */
  user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_DELETE_USER tool output.
 */
type SENDBIRD_DELETE_USER_OUTPUT = {
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
 * Type of SENDBIRD's SENDBIRD_GET_COUNT_PREFERENCE_OF_CHANNEL tool input.
 */
type SENDBIRD_GET_COUNT_PREFERENCE_OF_CHANNEL_INPUT = {
  /**
   * Channel Url
   * @description URL (identifier) of the group channel.
   */
  channel_url?: string;
  /**
   * User Id
   * @description The unique ID of the user.
   */
  user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_GET_COUNT_PREFERENCE_OF_CHANNEL tool output.
 */
type SENDBIRD_GET_COUNT_PREFERENCE_OF_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channel Url
       * @description The URL of the group channel.
       */
      channel_url: string;
      /**
       * Count Preference
       * @description The user's count preference for the channel.
       * @enum {string}
       */
      count_preference: "all" | "unread_message_count" | "mention_count";
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
 * Type of SENDBIRD's SENDBIRD_GET_NUMBER_OF_CHANNELS_BY_JOIN_STATUS tool input.
 */
type SENDBIRD_GET_NUMBER_OF_CHANNELS_BY_JOIN_STATUS_INPUT = {
  /**
   * Custom Types
   * @description List of custom channel types to filter by.
   * @default null
   */
  custom_types: string[] | null;
  /**
   * Distinct Mode
   * @description Return count of distinct, nondistinct channels, or all.
   * @default null
   * @enum {string|null}
   */
  distinct_mode: "all" | "distinct" | "nondistinct" | null;
  /**
   * Public Mode
   * @description Filter by public or private channels, or all.
   * @default null
   * @enum {string|null}
   */
  public_mode: "all" | "public" | "private" | null;
  /**
   * Super Mode
   * @description Filter by super or non-super channels, or all.
   * @default null
   * @enum {string|null}
   */
  super_mode: "all" | "super" | "nonsuper" | null;
  /**
   * User Id
   * @description Unique ID of the user to fetch channel counts for.
   */
  user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_GET_NUMBER_OF_CHANNELS_BY_JOIN_STATUS tool output.
 */
type SENDBIRD_GET_NUMBER_OF_CHANNELS_BY_JOIN_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invited
       * @description Number of channels the user is invited to.
       */
      invited: number;
      /**
       * Invited By Friend
       * @description Number of channels user is invited by a friend.
       */
      invited_by_friend: number;
      /**
       * Invited By Non Friend
       * @description Number of channels user is invited by a non-friend.
       */
      invited_by_non_friend: number;
      /**
       * Joined
       * @description Number of channels the user has joined.
       */
      joined: number;
      /**
       * Total
       * @description Total number of relevant channels.
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
 * Type of SENDBIRD's SENDBIRD_GET_NUMBER_OF_UNREAD_ITEMS tool input.
 */
type SENDBIRD_GET_NUMBER_OF_UNREAD_ITEMS_INPUT = {
  /**
   * User Id
   * @description Unique ID of the user whose unread counts are to be retrieved.
   */
  user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_GET_NUMBER_OF_UNREAD_ITEMS tool output.
 */
type SENDBIRD_GET_NUMBER_OF_UNREAD_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ts
       * @description Timestamp in milliseconds when the counts were last updated.
       */
      ts: number;
      /**
       * Unread Channel Count
       * @description Number of group channels with unread messages.
       */
      unread_channel_count: number;
      /**
       * Unread Mention Count
       * @description Total number of unread mentions.
       */
      unread_mention_count: number;
      /**
       * Unread Message Count
       * @description Total number of unread messages.
       */
      unread_message_count: number;
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
 * Type of SENDBIRD's SENDBIRD_ISSUE_SESSION_TOKEN tool input.
 */
type SENDBIRD_ISSUE_SESSION_TOKEN_INPUT = {
  /**
   * Expires At
   * @description Optional token expiration timestamp in Unix milliseconds. If omitted, the default token lifetime is used.
   * @default null
   */
  expires_at: number | null;
  /**
   * User Id
   * @description The unique ID of the user to issue a session token for.
   */
  user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_ISSUE_SESSION_TOKEN tool output.
 */
type SENDBIRD_ISSUE_SESSION_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expires At
       * @description Expiration timestamp of the session token in Unix milliseconds.
       */
      expires_at: number;
      /**
       * Issued At
       * @description Timestamp when the token was issued in Unix milliseconds.
       */
      issued_at: number;
      /**
       * Token
       * @description The session token issued for the user.
       */
      token: string;
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
 * Type of SENDBIRD's SENDBIRD_LEAVE_GROUP_CHANNELS tool input.
 */
type SENDBIRD_LEAVE_GROUP_CHANNELS_INPUT = {
  /**
   * Channel Urls
   * @description List of group channel URLs to leave. Ignored if `should_leave_all` is true.
   */
  channel_urls?: string[];
  /**
   * Should Leave All
   * @description Whether to leave all joined group channels. If true, `channel_urls` is ignored.
   * @default null
   */
  should_leave_all: boolean | null;
  /**
   * User Id
   * @description Unique ID of the user who will leave group channels.
   */
  user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_LEAVE_GROUP_CHANNELS tool output.
 */
type SENDBIRD_LEAVE_GROUP_CHANNELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Affected Channels
       * @description List of group channel URLs the user has left.
       */
      affected_channels: string[];
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
 * Type of SENDBIRD's SENDBIRD_LIST_BANNED_MEMBERS tool input.
 */
type SENDBIRD_LIST_BANNED_MEMBERS_INPUT = {
  /**
   * Channel Url
   * @description Unique URL of the group channel to list banned members from.
   */
  channel_url?: string;
  /**
   * Limit
   * @description Number of banned members to return per page (1-100). Default is 10.
   * @default null
   */
  limit: number | null;
  /**
   * Token
   * @description Pagination token from previous response; omit for first request.
   * @default null
   */
  token: string | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_LIST_BANNED_MEMBERS tool output.
 */
type SENDBIRD_LIST_BANNED_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Banned List
       * @description List of banned member objects in the group channel.
       */
      banned_list: {
          /**
           * Ban End At
           * @description Unix timestamp in milliseconds when the ban ends.
           */
          ban_end_at: number;
          /**
           * Ban Start At
           * @description Unix timestamp in milliseconds when the ban started.
           */
          ban_start_at: number;
          /**
           * Description
           * @description Description or reason for the ban.
           * @default null
           */
          description: string | null;
          /**
           * Nickname
           * @description Nickname of the banned user.
           * @default null
           */
          nickname: string | null;
          /**
           * Profile Url
           * @description Profile image URL of the banned user.
           * @default null
           */
          profile_url: string | null;
          /**
           * User Id
           * @description User ID of the banned member.
           */
          user_id: string;
      }[];
      /**
       * Next
       * @description Pagination token for fetching the next page of results.
       * @default null
       */
      next: string | null;
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
 * Type of SENDBIRD's SENDBIRD_LIST_GROUP_CHANNELS tool input.
 */
type SENDBIRD_LIST_GROUP_CHANNELS_INPUT = {
  /**
   * Channel Urls
   * @description Filter channels by exact URLs
   * @default null
   */
  channel_urls: string[] | null;
  /**
   * Created After
   * @description List channels created after this timestamp (in milliseconds)
   * @default null
   */
  created_after: number | null;
  /**
   * Created Before
   * @description List channels created before this timestamp (in milliseconds)
   * @default null
   */
  created_before: number | null;
  /**
   * Custom Type Startswith
   * @description Filter channels whose custom type starts with this prefix
   * @default null
   */
  custom_type_startswith: string | null;
  /**
   * Custom Types
   * @description Filter channels by custom types
   * @default null
   */
  custom_types: string[] | null;
  /**
   * Distinct Mode
   * @description Filter by distinct channel type: all, distinct, or nondistinct
   * @default null
   * @enum {string|null}
   */
  distinct_mode: "all" | "distinct" | "nondistinct" | null;
  /**
   * Limit
   * @description Number of results per page (1-100)
   * @default null
   */
  limit: number | null;
  /**
   * Members Exactly In
   * @description List of user IDs who must all be members of the channel
   * @default null
   */
  members_exactly_in: string[] | null;
  /**
   * Members Include In
   * @description List of user IDs one of whom must be a member of the channel
   * @default null
   */
  members_include_in: string[] | null;
  /**
   * Members Nickname
   * @description Filter channels by member nickname
   * @default null
   */
  members_nickname: string | null;
  /**
   * My Member State
   * @description Filter by member state: all, joined_only, invited_only, invited_by_friend, or invited_by_non_friend
   * @default null
   * @enum {string|null}
   */
  my_member_state: "all" | "joined_only" | "invited_only" | "invited_by_friend" | "invited_by_non_friend" | null;
  /**
   * Name
   * @description Filter channels by channel name
   * @default null
   */
  name: string | null;
  /**
   * Public Mode
   * @description Filter by public channel type: all, public, or private
   * @default null
   * @enum {string|null}
   */
  public_mode: "all" | "public" | "private" | null;
  /**
   * Show Delivery Receipt
   * @description Whether to include delivery receipt data
   * @default null
   */
  show_delivery_receipt: boolean | null;
  /**
   * Show Empty
   * @description Whether to include empty channels in the results
   * @default null
   */
  show_empty: boolean | null;
  /**
   * Show Frozen
   * @description Whether to include frozen channels in the results
   * @default null
   */
  show_frozen: boolean | null;
  /**
   * Show Metadata
   * @description Whether to include channel metadata
   * @default null
   */
  show_metadata: boolean | null;
  /**
   * Show Read Receipt
   * @description Whether to include read receipt data
   * @default null
   */
  show_read_receipt: boolean | null;
  /**
   * Super Mode
   * @description Filter by super channel type: all, super, or nonsuper
   * @default null
   * @enum {string|null}
   */
  super_mode: "all" | "super" | "nonsuper" | null;
  /**
   * Token
   * @description Pagination token to retrieve the next page
   * @default null
   */
  token: string | null;
  /**
   * Url Contains
   * @description Filter channels whose URL contains this substring
   * @default null
   */
  url_contains: string | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_LIST_GROUP_CHANNELS tool output.
 */
type SENDBIRD_LIST_GROUP_CHANNELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channels
       * @description List of group channels
       */
      channels: {
          /**
           * Channel Url
           * @description Unique URL of the group channel
           */
          channel_url: string;
          /**
           * Cover Url
           * @description URL of the channel cover image
           * @default null
           */
          cover_url: string | null;
          /**
           * Created At
           * @description Timestamp when the channel was created (ms)
           */
          created_at: number;
          /**
           * Custom Type
           * @description Custom type of the channel
           * @default null
           */
          custom_type: string | null;
          /**
           * Data
           * @description Custom data of the channel
           * @default null
           */
          data: string | null;
          /**
           * Delivery Receipt
           * @description Delivery receipt mapping user IDs to message sequence numbers
           * @default null
           */
          delivery_receipt: {
              [key: string]: number;
          } | null;
          /**
           * Freeze
           * @description Whether the channel is frozen
           */
          freeze: boolean;
          /**
           * Is Broadcast
           * @description Whether the channel is broadcast
           */
          is_broadcast: boolean;
          /**
           * Is Distinct
           * @description Whether the channel is distinct
           */
          is_distinct: boolean;
          /**
           * Is Public
           * @description Whether the channel is public
           */
          is_public: boolean;
          /**
           * Is Super
           * @description Whether the channel is a super channel
           */
          is_super: boolean;
          /**
           * Joined Member Count
           * @description Number of joined members in the channel
           */
          joined_member_count: number;
          /**
           * LastMessage
           * @description Last message sent in the channel
           * @default null
           */
          last_message: {
              /**
               * Created At
               * @description Timestamp when message was created (ms)
               */
              created_at: number;
              /**
               * Custom Type
               * @description Custom type of the message
               * @default null
               */
              custom_type: string | null;
              /**
               * Data
               * @description Message data payload
               * @default null
               */
              data: string | null;
              /**
               * Message
               * @description Message text if applicable
               * @default null
               */
              message: string | null;
              /**
               * Message Id
               * @description Message ID of the last message
               */
              message_id: number;
              /**
               * Message Type
               * @description Type of the message (MESG, FILE, ADMM)
               */
              message_type: string;
              /**
               * Updated At
               * @description Timestamp when message was last updated (ms)
               */
              updated_at: number;
          } | null;
          /**
           * Member Count
           * @description Number of members in the channel
           */
          member_count: number;
          /**
           * Members
           * @description List of members in the channel
           */
          members: {
              /**
               * Connection Id
               * @description Member connection ID
               * @default null
               */
              connection_id: number | null;
              /**
               * Has Pin
               * @description Whether the member has pinned the channel
               * @default null
               */
              has_pin: boolean | null;
              /**
               * Last Seen At
               * @description Last seen timestamp (ms)
               * @default null
               */
              last_seen_at: number | null;
              /**
               * Nickname
               * @description Member nickname
               * @default null
               */
              nickname: string | null;
              /**
               * Pin Timestamp
               * @description Timestamp when channel was pinned by member
               * @default null
               */
              pin_timestamp: number | null;
              /**
               * Profile Url
               * @description Member profile URL
               * @default null
               */
              profile_url: string | null;
              /**
               * State
               * @description Member state (joined, invited, etc.)
               * @default null
               */
              state: string | null;
              /**
               * User Id
               * @description Member user ID
               */
              user_id: string;
          }[];
          /**
           * Metadata
           * @description Channel metadata key-value pairs
           * @default null
           */
          metadata: {
              [key: string]: string;
          } | null;
          /**
           * Name
           * @description Name of the channel
           * @default null
           */
          name: string | null;
          /**
           * Read Receipt
           * @description Read receipt mapping user IDs to message sequence numbers
           * @default null
           */
          read_receipt: {
              [key: string]: number;
          } | null;
          /**
           * Unread Message Count
           * @description Number of unread messages for the authenticated user
           */
          unread_message_count: number;
      }[];
      /**
       * Next
       * @description Pagination token for next page
       * @default null
       */
      next: string | null;
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
 * Type of SENDBIRD's SENDBIRD_LIST_MEMBERS_GROUP_CHANNEL tool input.
 */
type SENDBIRD_LIST_MEMBERS_GROUP_CHANNEL_INPUT = {
  /**
   * Channel Url
   * @description Unique URL of the group channel
   */
  channel_url?: string;
  /**
   * Limit
   * @description Maximum number of results to return (1-100)
   * @default null
   */
  limit: number | null;
  /**
   * Member State Filter
   * @description Filter by membership state
   * @default null
   * @enum {string|null}
   */
  member_state_filter: "all" | "joined_only" | "invited_only" | null;
  /**
   * Muted Member Filter
   * @description Filter by muted status of members
   * @default null
   * @enum {string|null}
   */
  muted_member_filter: "all" | "muted" | "unmuted" | null;
  /**
   * Nickname Startswith
   * @description Search members whose nicknames start with this string
   * @default null
   */
  nickname_startswith: string | null;
  /**
   * Offset
   * @description Number of results to skip before returning the set (deprecated; use token instead)
   * @default null
   */
  offset: number | null;
  /**
   * Operator Filter
   * @description Filter by operator status
   * @default null
   * @enum {string|null}
   */
  operator_filter: "all" | "operator" | "nonoperator" | null;
  /**
   * Order
   * @description Sorting order of members list
   * @default null
   * @enum {string|null}
   */
  order: "nickname_alphabetical" | "operator_alphabetical" | null;
  /**
   * Token
   * @description Pagination token for fetching the next page
   * @default null
   */
  token: string | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_LIST_MEMBERS_GROUP_CHANNEL tool output.
 */
type SENDBIRD_LIST_MEMBERS_GROUP_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Members
       * @description List of channel members
       */
      members: {
          /**
           * Is Muted
           * @description If the user is muted in the channel
           */
          is_muted: boolean;
          /**
           * Is Online
           * @description Online status of the user
           */
          is_online: boolean;
          /**
           * Is Operator
           * @description Whether the member is an operator
           */
          is_operator: boolean;
          /**
           * Last Seen At
           * @description Timestamp (ms) when the user was last seen
           */
          last_seen_at: number;
          /**
           * Metadata
           * @description Custom metadata associated with the member
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Nickname
           * @description The user's nickname
           * @default null
           */
          nickname: string | null;
          /**
           * Profile Url
           * @description The user's profile image URL
           * @default null
           */
          profile_url: string | null;
          /**
           * State
           * @description Membership state, e.g., joined, invited
           */
          state: string;
          /**
           * User Id
           * @description The user's unique ID
           */
          user_id: string;
      }[];
      /**
       * Next
       * @description Token for retrieving the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Total Count
       * @description Total number of members (when using filters)
       * @default null
       */
      total_count: number | null;
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
 * Type of SENDBIRD's SENDBIRD_LIST_OPERATORS_CUSTOM_CHANNEL_TYPE tool input.
 */
type SENDBIRD_LIST_OPERATORS_CUSTOM_CHANNEL_TYPE_INPUT = {
  /**
   * Custom Type
   * @description Custom channel type to list operators for.
   */
  custom_type?: string;
  /**
   * Limit
   * @description Maximum number of operators to return per page (1-100).
   * @default null
   */
  limit: number | null;
  /**
   * Token
   * @description Pagination cursor from a previous call; omit for the first request.
   * @default null
   */
  token: string | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_LIST_OPERATORS_CUSTOM_CHANNEL_TYPE tool output.
 */
type SENDBIRD_LIST_OPERATORS_CUSTOM_CHANNEL_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description Pagination token for the next set of results; absent if no more pages.
       * @default null
       */
      next: string | null;
      /**
       * Operators
       * @description List of operator user objects for the custom channel type.
       */
      operators: {
          /**
           * Metadata
           * @description Custom metadata associated with the operator user.
           * @default null
           */
          metadata: {
              [key: string]: string;
          } | null;
          /**
           * Nickname
           * @description Operator's display nickname.
           * @default null
           */
          nickname: string | null;
          /**
           * Profile Url
           * @description URL of the operator's profile image.
           * @default null
           */
          profile_url: string | null;
          /**
           * User Id
           * @description Unique user ID of the operator.
           */
          user_id: string;
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
 * Type of SENDBIRD's SENDBIRD_LIST_OPERATORS_GROUP_CHANNEL tool input.
 */
type SENDBIRD_LIST_OPERATORS_GROUP_CHANNEL_INPUT = {
  /**
   * Channel Url
   * @description URL of the group channel to retrieve operators from
   */
  channel_url?: string;
  /**
   * Limit
   * @description Number of operators to return per page (1-100). Default is 10.
   * @default null
   */
  limit: number | null;
  /**
   * Token
   * @description Pagination token from previous response; omit for first page
   * @default null
   */
  token: string | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_LIST_OPERATORS_GROUP_CHANNEL tool output.
 */
type SENDBIRD_LIST_OPERATORS_GROUP_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description Token for fetching the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Operators
       * @description List of operator user objects
       */
      operators: {
          /**
           * Nickname
           * @description Nickname of the operator
           * @default null
           */
          nickname: string | null;
          /**
           * Profile Url
           * @description Profile image URL of the operator
           * @default null
           */
          profile_url: string | null;
          /**
           * User Id
           * @description Unique user ID of the operator
           */
          user_id: string;
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
 * Type of SENDBIRD's SENDBIRD_LIST_OPERATORS_OPEN_CHANNEL tool input.
 */
type SENDBIRD_LIST_OPERATORS_OPEN_CHANNEL_INPUT = {
  /**
   * Channel Url
   * @description URL-encoded unique identifier of the open channel to list operators for.
   */
  channel_url?: string;
  /**
   * Limit
   * @description Maximum number of operators to return per page (1-100).
   * @default null
   */
  limit: number | null;
  /**
   * Token
   * @description Pagination cursor from a previous response; omit for the first request.
   * @default null
   */
  token: string | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_LIST_OPERATORS_OPEN_CHANNEL tool output.
 */
type SENDBIRD_LIST_OPERATORS_OPEN_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description Pagination token for the next set of results; absent if no more pages.
       * @default null
       */
      next: string | null;
      /**
       * Operators
       * @description List of operator user objects for the open channel.
       */
      operators: {
          /**
           * Metadata
           * @description Custom metadata associated with the operator user (key-value pairs as strings).
           * @default null
           */
          metadata: {
              [key: string]: string;
          } | null;
          /**
           * Nickname
           * @description Operator's display nickname.
           * @default null
           */
          nickname: string | null;
          /**
           * Profile Url
           * @description URL of the operator's profile image.
           * @default null
           */
          profile_url: string | null;
          /**
           * User Id
           * @description Unique user ID of the operator.
           */
          user_id: string;
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
 * Type of SENDBIRD's SENDBIRD_LIST_USERS tool input.
 */
type SENDBIRD_LIST_USERS_INPUT = {
  /**
   * Custom Type
   * @description Custom type to filter users by.
   * @default null
   */
  custom_type: string | null;
  /**
   * Has Ever Logged In
   * @description Filter users by whether they have ever logged in.
   * @default null
   */
  has_ever_logged_in: boolean | null;
  /**
   * Is Active
   * @description Filter users by their active status.
   * @default null
   */
  is_active: boolean | null;
  /**
   * Limit
   * @description Number of users to return per page (1-100). Default is 10.
   * @default null
   */
  limit: number | null;
  /**
   * Metatag Key
   * @description Metatag key to filter users who have this key.
   * @default null
   */
  metatag_key: string | null;
  /**
   * Metatag Values
   * @description List of metatag values to filter; requires `metatag_key`.
   * @default null
   */
  metatag_values: string[] | null;
  /**
   * Nickname
   * @description Exact nickname to filter (case-insensitive substring match).
   * @default null
   */
  nickname: string | null;
  /**
   * Nickname Contains
   * @description Substring filter for nicknames (case-insensitive).
   * @default null
   */
  nickname_contains: string | null;
  /**
   * Order
   * @description Sort order: nickname_alphabetical, created_at, or user_id_alphabetical.
   * @default null
   * @enum {string|null}
   */
  order: "nickname_alphabetical" | "created_at" | "user_id_alphabetical" | null;
  /**
   * Token
   * @description Pagination token from previous response; omit for first request.
   * @default null
   */
  token: string | null;
  /**
   * User Ids
   * @description List of user IDs to filter; sent as comma-separated string.
   * @default null
   */
  user_ids: string[] | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_LIST_USERS tool output.
 */
type SENDBIRD_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description Token for fetching the next page.
       * @default null
       */
      next: string | null;
      /**
       * Total Count
       * @description Total number of matched users; returned on first page only.
       * @default null
       */
      total_count: number | null;
      /**
       * Users
       * @description List of user objects.
       */
      users: {
          /**
           * Connection Status
           * @description Online/offline status of the user.
           * @default null
           */
          connection_status: string | null;
          /**
           * Custom Type
           * @description Custom type for grouping users.
           * @default null
           */
          custom_type: string | null;
          /**
           * Favorite Topic Ids
           * @description List of favorite topic IDs.
           * @default null
           */
          favorite_topic_ids: string[] | null;
          /**
           * Is Active
           * @description Whether the user is active.
           * @default null
           */
          is_active: boolean | null;
          /**
           * Issued At
           * @description Timestamp (ms) when the user was issued.
           * @default null
           */
          issued_at: number | null;
          /**
           * Last Seen At
           * @description Timestamp (ms) when user was last seen.
           * @default null
           */
          last_seen_at: number | null;
          /**
           * Last Update At
           * @description Timestamp (ms) of last update.
           * @default null
           */
          last_update_at: number | null;
          /**
           * Metadata
           * @description User metadata as key-value pairs.
           * @default null
           */
          metadata: {
              [key: string]: string;
          } | null;
          /**
           * Nickname
           * @description User nickname.
           * @default null
           */
          nickname: string | null;
          /**
           * Profile Url
           * @description Profile image URL.
           * @default null
           */
          profile_url: string | null;
          /**
           * Require Auth For Profile Image
           * @description Whether profile image requires authentication.
           * @default null
           */
          require_auth_for_profile_image: boolean | null;
          /**
           * User Id
           * @description Unique user ID.
           */
          user_id: string;
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
 * Type of SENDBIRD's SENDBIRD_MARK_ALL_USER_MESSAGES_AS_READ tool input.
 */
type SENDBIRD_MARK_ALL_USER_MESSAGES_AS_READ_INPUT = {
  /**
   * User Id
   * @description Unique ID of the user whose messages will be marked as read.
   */
  user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_MARK_ALL_USER_MESSAGES_AS_READ tool output.
 */
type SENDBIRD_MARK_ALL_USER_MESSAGES_AS_READ_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ts
       * @description Timestamp when messages were marked as read.
       */
      ts: number;
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
 * Type of SENDBIRD's SENDBIRD_MUTE_USER tool input.
 */
type SENDBIRD_MUTE_USER_INPUT = {
  /**
   * Channel Url
   * @description URL-encoded identifier of the target group channel
   */
  channel_url?: string;
  /**
   * Description
   * @description Custom description for the mute action
   * @default null
   */
  description: string | null;
  /**
   * Seconds
   * @description Mute duration in seconds (0 = indefinite)
   * @default null
   */
  seconds: number | null;
  /**
   * User Id
   * @description ID of the user to mute
   */
  user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_MUTE_USER tool output.
 */
type SENDBIRD_MUTE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * User
       * @description The muted user object
       */
      user: {
          /**
           * Is Active
           * @description Active status of the user
           */
          is_active: boolean;
          /**
           * Is Online
           * @description Online status of the user
           */
          is_online: boolean;
          /**
           * Last Seen At
           * @description Timestamp (ms) when the user was last seen
           */
          last_seen_at: number;
          /**
           * Muted By
           * @description Information about who muted the user
           */
          muted_by: {
              /**
               * Nickname
               * @description Nickname of the muter
               * @default null
               */
              nickname: string | null;
              /**
               * Profile Url
               * @description Profile image URL of the muter
               * @default null
               */
              profile_url: string | null;
              /**
               * User Id
               * @description User ID of the muter
               */
              user_id: string;
          };
          /**
           * Muted End At
           * @description Timestamp (ms) when the mute ends (0 for indefinite)
           */
          muted_end_at: number;
          /**
           * Nickname
           * @description Nickname of the muted user
           * @default null
           */
          nickname: string | null;
          /**
           * Profile Url
           * @description Profile image URL of the muted user
           * @default null
           */
          profile_url: string | null;
          /**
           * User Id
           * @description ID of the muted user
           */
          user_id: string;
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
 * Type of SENDBIRD's SENDBIRD_REGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE tool input.
 */
type SENDBIRD_REGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE_INPUT = {
  /**
   * Custom Type
   * @description Custom channel type identifier
   */
  custom_type?: string;
  /**
   * Operator Ids
   * @description List of user IDs to register as operators (at least one)
   */
  operator_ids?: string[];
};

/**
 * Type of SENDBIRD's SENDBIRD_REGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE tool output.
 */
type SENDBIRD_REGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Operators
       * @description List of operators registered for the custom channel type
       */
      operators: {
          /**
           * Metadata
           * @description Custom metadata key-value pairs for the operator
           * @default null
           */
          metadata: {
              [key: string]: string;
          } | null;
          /**
           * Nickname
           * @description Nickname of the operator
           * @default null
           */
          nickname: string | null;
          /**
           * Profile Url
           * @description Profile image URL of the operator
           * @default null
           */
          profile_url: string | null;
          /**
           * User Id
           * @description Unique ID of the operator user
           */
          user_id: string;
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
 * Type of SENDBIRD's SENDBIRD_REGISTER_OPERATORS_GROUP_CHANNEL tool input.
 */
type SENDBIRD_REGISTER_OPERATORS_GROUP_CHANNEL_INPUT = {
  /**
   * Channel Url
   * @description URL-encoded identifier of the group channel
   */
  channel_url?: string;
  /**
   * User Ids
   * @description List of user IDs to register as operators
   */
  user_ids?: string[];
};

/**
 * Type of SENDBIRD's SENDBIRD_REGISTER_OPERATORS_GROUP_CHANNEL tool output.
 */
type SENDBIRD_REGISTER_OPERATORS_GROUP_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Operators
       * @description List of operator objects after registration
       */
      operators: {
          /**
           * Metadata
           * @description Custom metadata key-value pairs for the operator
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Nickname
           * @description Nickname of the operator
           * @default null
           */
          nickname: string | null;
          /**
           * Profile Url
           * @description Profile image URL of the operator
           * @default null
           */
          profile_url: string | null;
          /**
           * User Id
           * @description Unique ID of the operator user
           */
          user_id: string;
      }[];
      /**
       * Total Count
       * @description Total number of operators in the group channel
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
 * Type of SENDBIRD's SENDBIRD_REGISTER_OPERATORS_OPEN_CHANNEL tool input.
 */
type SENDBIRD_REGISTER_OPERATORS_OPEN_CHANNEL_INPUT = {
  /**
   * Channel Url
   * @description URL-encoded identifier of the open channel
   */
  channel_url?: string;
  /**
   * User Ids
   * @description List of user IDs to register as operators (at least one)
   */
  user_ids?: string[];
};

/**
 * Type of SENDBIRD's SENDBIRD_REGISTER_OPERATORS_OPEN_CHANNEL tool output.
 */
type SENDBIRD_REGISTER_OPERATORS_OPEN_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Operators
       * @description List of operators registered to the open channel
       */
      operators: {
          /**
           * Metadata
           * @description Custom metadata for the operator
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Nickname
           * @description Nickname of the operator
           * @default null
           */
          nickname: string | null;
          /**
           * Profile Url
           * @description Profile image URL of the operator
           * @default null
           */
          profile_url: string | null;
          /**
           * User Id
           * @description User ID of the operator
           */
          user_id: string;
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
 * Type of SENDBIRD's SENDBIRD_REVOKE_ALL_SESSION_TOKENS tool input.
 */
type SENDBIRD_REVOKE_ALL_SESSION_TOKENS_INPUT = {
  /**
   * User Id
   * @description Unique ID of the user whose session tokens will be revoked.
   */
  user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_REVOKE_ALL_SESSION_TOKENS tool output.
 */
type SENDBIRD_REVOKE_ALL_SESSION_TOKENS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Status of the revoke operation, e.g., 'success'
       */
      status: string;
      /**
       * User Id
       * @description The ID of the user whose tokens were revoked
       */
      user_id: string;
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
 * Type of SENDBIRD's SENDBIRD_SENDBIRD_VIEW_MESSAGE tool input.
 */
type SENDBIRD_SENDBIRD_VIEW_MESSAGE_INPUT = {
  /**
   * Channel Url
   * @description URL-encoded identifier of the group channel.
   */
  channel_url?: string;
  /**
   * Message Id
   * @description Unique ID of the message.
   */
  message_id?: number;
  /**
   * With Sorted Metaarray
   * @description Whether to include sorted_metaarray arrays in the response.
   * @default null
   */
  with_sorted_metaarray: boolean | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_SENDBIRD_VIEW_MESSAGE tool output.
 */
type SENDBIRD_SENDBIRD_VIEW_MESSAGE_OUTPUT = {
  /**
   * Channel Url
   * @description URL of the group channel.
   */
  channel_url?: string;
  /**
   * Created At
   * @description Creation timestamp (ms).
   */
  created_at?: number;
  /**
   * Custom Type
   * @description Custom message type.
   * @default null
   */
  custom_type: string | null;
  /**
   * Data
   * @description Custom message data.
   * @default null
   */
  data: string | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Mention Type
   * @description Mention type.
   * @default null
   */
  mention_type: string | null;
  /**
   * Mentioned Users
   * @description Users mentioned in the message.
   * @default null
   */
  mentioned_users: {
      /**
       * Connection Status
       * @description Connection status of the user.
       * @default null
       */
      connection_status: string | null;
      /**
       * Last Seen At
       * @description Timestamp (ms) when the user was last seen.
       * @default null
       */
      last_seen_at: number | null;
      /**
       * Metadata
       * @description Additional metadata for the user.
       * @default null
       */
      metadata: {
          [key: string]: string;
      } | null;
      /**
       * Nickname
       * @description Nickname of the user.
       * @default null
       */
      nickname: string | null;
      /**
       * Profile Url
       * @description URL of the user's profile image.
       * @default null
       */
      profile_url: string | null;
      /**
       * User Id
       * @description ID of the user who sent the message.
       */
      user_id: string;
  }[] | null;
  /**
   * Message
   * @description Text content of the message.
   * @default null
   */
  message: string | null;
  /**
   * Message Id
   * @description Unique ID of the message.
   */
  message_id?: number;
  /**
   * OGTag
   * @description Open graph metadata if present.
   * @default null
   */
  og_tag: {
      /**
       * Description
       * @description Open graph description.
       * @default null
       */
      description: string | null;
      /**
       * Title
       * @description Open graph title.
       * @default null
       */
      title: string | null;
      /**
       * Url
       * @description Open graph URL.
       */
      url: string;
  } | null;
  /**
   * Parent Message
   * @description Parent message details if threaded.
   * @default null
   */
  parent_message: {
      [key: string]: unknown;
  } | null;
  /**
   * Reactions
   * @description List of reactions.
   * @default null
   */
  reactions: {
      /**
       * Created At
       * @description Timestamp (ms) when reaction was created.
       */
      created_at: number;
      /**
       * Key
       * @description Reaction key (emoji).
       */
      key: string;
      /**
       * User Ids
       * @description User IDs who reacted.
       */
      user_ids: string[];
  }[] | null;
  /**
   * Sorted Metaarray
   * @description Sorted metadata array.
   * @default null
   */
  sorted_metaarray: {
      /**
       * Created At
       * @description Timestamp (ms) when metadata was created.
       */
      created_at: number;
      /**
       * Key
       * @description Metadata key.
       */
      key: string;
      /**
       * Updated At
       * @description Timestamp (ms) when metadata was updated.
       */
      updated_at: number;
      /**
       * Value
       * @description Metadata value.
       */
      value: string;
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * ThreadInfo
   * @description Thread information if applicable.
   * @default null
   */
  thread_info: {
      /**
       * Most Recent Message
       * @description Most recent message in thread as simple JSON object.
       * @default null
       */
      most_recent_message: {
          [key: string]: unknown;
      } | null;
      /**
       * Reply Count
       * @description Number of replies in the thread.
       */
      reply_count: number;
      /**
       * Reply Timestamp
       * @description Timestamp (ms) of latest reply.
       */
      reply_timestamp: number;
  } | null;
  /**
   * Translations
   * @description Translated texts keyed by language.
   * @default null
   */
  translations: {
      [key: string]: string;
  } | null;
  /**
   * Type
   * @description Type of the message (MESG, FILE, ADMIN).
   */
  type?: string;
  /**
   * Updated At
   * @description Update timestamp (ms).
   */
  updated_at?: number;
  /**
   * User
   * @description User who sent the message.
   */
  user?: {
      /**
       * Connection Status
       * @description Connection status of the user.
       * @default null
       */
      connection_status: string | null;
      /**
       * Last Seen At
       * @description Timestamp (ms) when the user was last seen.
       * @default null
       */
      last_seen_at: number | null;
      /**
       * Metadata
       * @description Additional metadata for the user.
       * @default null
       */
      metadata: {
          [key: string]: string;
      } | null;
      /**
       * Nickname
       * @description Nickname of the user.
       * @default null
       */
      nickname: string | null;
      /**
       * Profile Url
       * @description URL of the user's profile image.
       * @default null
       */
      profile_url: string | null;
      /**
       * User Id
       * @description ID of the user who sent the message.
       */
      user_id: string;
  };
};

/**
 * Type of SENDBIRD's SENDBIRD_SENDBIRD_VIEW_USER tool input.
 */
type SENDBIRD_SENDBIRD_VIEW_USER_INPUT = {
  /**
   * User Id
   * @description The unique ID of the user to retrieve.
   */
  user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_SENDBIRD_VIEW_USER tool output.
 */
type SENDBIRD_SENDBIRD_VIEW_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp (ms) of user creation.
       */
      created_at: number;
      /**
       * Discovery Keys
       * @description Discovery keys if Discovery feature is enabled.
       * @default null
       */
      discovery_keys: string[] | null;
      /**
       * Has Ever Logged In
       * @description Whether the user has ever logged in.
       */
      has_ever_logged_in: boolean;
      /**
       * Is Active
       * @description Whether the user is an active Sendbird user.
       */
      is_active: boolean;
      /**
       * Is Online
       * @description Whether the user is currently connected to Sendbird.
       */
      is_online: boolean;
      /**
       * Last Seen At
       * @description Timestamp (ms) when the user was last connected.
       * @default null
       */
      last_seen_at: number | null;
      /**
       * Metadata
       * @description Additional user metadata as key-value pairs.
       * @default null
       */
      metadata: {
          [key: string]: string;
      } | null;
      /**
       * Nickname
       * @description User's nickname.
       * @default null
       */
      nickname: string | null;
      /**
       * Phone Number
       * @description User's phone number if configured.
       * @default null
       */
      phone_number: string | null;
      /**
       * Preferred Languages
       * @description User's preferred languages.
       * @default null
       */
      preferred_languages: string[] | null;
      /**
       * Profile Url
       * @description URL of the user's profile image.
       * @default null
       */
      profile_url: string | null;
      /**
       * User Id
       * @description Unique ID of the user.
       */
      user_id: string;
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
 * Type of SENDBIRD's SENDBIRD_SEND_MESSAGE tool input.
 */
type SENDBIRD_SEND_MESSAGE_INPUT = {
  /**
   * Channel Url
   * @description URL-encoded identifier of the target group channel
   */
  channel_url?: string;
  /**
   * Custom Type
   * @description Custom message type for classification
   * @default null
   */
  custom_type: string | null;
  /**
   * Data
   * @description Free-form custom data string (often JSON)
   * @default null
   */
  data: string | null;
  /**
   * Is Operator Message
   * @description Mark as operator (moderator) message
   * @default false
   */
  is_operator_message: boolean | null;
  /**
   * Is Silent
   * @description Send as silent message (no push notifications)
   * @default false
   */
  is_silent: boolean | null;
  /**
   * Mention Type
   * @description Mention scope: 'users' to mention specific users or 'channel' to mention all
   * @default null
   * @enum {string|null}
   */
  mention_type: "users" | "channel" | null;
  /**
   * Mentioned User Ids
   * @description List of user IDs to mention when mention_type is 'users'
   * @default null
   */
  mentioned_user_ids: string[] | null;
  /**
   * Message
   * @description Text content of the message. Required when message_type is 'MESG'
   * @default null
   */
  message: string | null;
  /**
   * Message Type
   * @description Type of message: 'MESG' for text, 'FILE' for file, 'ADMM' for admin message
   * @enum {string}
   */
  message_type?: "MESG" | "FILE" | "ADMM";
  /**
   * Metaarray
   * @description Array of metadata objects
   * @default null
   */
  metaarray: {
      /**
       * Key
       * @description Metadata key
       */
      key: string;
      /**
       * User Id
       * @description User ID associated with this metadata
       * @default null
       */
      user_id: string | null;
      /**
       * Value
       * @description Metadata value
       */
      value: string;
  }[] | null;
  /**
   * Parent Message Id
   * @description Reply in a thread to the message with this ID
   * @default null
   */
  parent_message_id: number | null;
  /**
   * Poll Id
   * @description Attach an existing poll by its ID
   * @default null
   */
  poll_id: number | null;
  /**
   * Push Notification Delivery Option
   * @description Push notification option: 'default', 'suppress', or 'include_offline_user'
   * @default null
   * @enum {string|null}
   */
  push_notification_delivery_option: "default" | "suppress" | "include_offline_user" | null;
  /**
   * Translation Target Languages
   * @description List of language codes for auto-translation, e.g., ['en', 'es']
   * @default null
   */
  translation_target_languages: string[] | null;
  /**
   * User Id
   * @description Sender's user ID. Required unless using API token as acting user
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_SEND_MESSAGE tool output.
 */
type SENDBIRD_SEND_MESSAGE_OUTPUT = {
  /**
   * Channel Url
   * @description URL of the group channel where message was sent
   */
  channel_url?: string;
  /**
   * Created At
   * @description Timestamp (ms) when message was created
   */
  created_at?: number;
  /**
   * Custom Type
   * @description Custom message type
   * @default null
   */
  custom_type: string | null;
  /**
   * Data
   * @description Custom data payload
   * @default null
   */
  data: string | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Mention Type
   * @description Mention type used in the message
   * @default null
   * @enum {string|null}
   */
  mention_type: "users" | "channel" | null;
  /**
   * Mentioned User Ids
   * @description List of user IDs mentioned in the message
   * @default null
   */
  mentioned_user_ids: string[] | null;
  /**
   * Message
   * @description Text content of the message
   * @default null
   */
  message: string | null;
  /**
   * Message Id
   * @description Unique message ID
   */
  message_id?: number;
  /**
   * Operator Message
   * @description Whether this is an operator message
   * @default null
   */
  operator_message: boolean | null;
  /**
   * Parent Message Id
   * @description Parent message ID if it's a reply
   * @default null
   */
  parent_message_id: number | null;
  /**
   * Silent
   * @description Whether the message is silent
   */
  silent?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * ThreadInfo
   * @description Thread details when message has replies.
   * @default null
   */
  thread_info: {
      /**
       * Parent Message Id
       * @description Parent message ID if this is a thread reply
       * @default null
       */
      parent_message_id: number | null;
      /**
       * Reply Count
       * @description Number of replies in this thread
       * @default null
       */
      reply_count: number | null;
      /**
       * Updated At
       * @description Timestamp (ms) when the thread was last updated
       * @default null
       */
      updated_at: number | null;
  } | null;
  /**
   * Translations
   * @description Auto-translation results for this message
   * @default null
   */
  translations: {
      /**
       * Target Lang
       * @description Target language code for translation
       */
      target_lang: string;
      /**
       * Text
       * @description Translated text content
       */
      text: string;
  }[] | null;
  /**
   * Type
   * @description Type of the message
   * @enum {string}
   */
  type?: "MESG" | "FILE" | "ADMM";
  /**
   * Updated At
   * @description Timestamp (ms) when message was last updated
   */
  updated_at?: number;
  /**
   * User
   * @description Sender user information
   */
  user?: {
      /**
       * Nickname
       * @description Nickname of the sender user
       * @default null
       */
      nickname: string | null;
      /**
       * Profile Url
       * @description Profile image URL of the sender user
       * @default null
       */
      profile_url: string | null;
      /**
       * User Id
       * @description Unique ID of the sender user
       */
      user_id: string;
  };
};

/**
 * Type of SENDBIRD's SENDBIRD_UNBAN_USER tool input.
 */
type SENDBIRD_UNBAN_USER_INPUT = {
  /**
   * Banned User Id
   * @description The unique ID of the banned user to unban.
   */
  banned_user_id?: string;
  /**
   * Channel Url
   * @description The URL of the group channel from which to unban the user.
   */
  channel_url?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_UNBAN_USER tool output.
 */
type SENDBIRD_UNBAN_USER_OUTPUT = {
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
 * Type of SENDBIRD's SENDBIRD_UNMUTE_USER tool input.
 */
type SENDBIRD_UNMUTE_USER_INPUT = {
  /**
   * Channel Url
   * @description URL-encoded identifier of the group channel to unmute the user in.
   */
  channel_url?: string;
  /**
   * Muted User Id
   * @description User ID to unmute from the channel.
   */
  muted_user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_UNMUTE_USER tool output.
 */
type SENDBIRD_UNMUTE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Is Active
       * @description Whether the user is currently active in Sendbird.
       */
      is_active: boolean;
      /**
       * Is Blocked By Me
       * @description Indicates if the user is blocked by the requester.
       */
      is_blocked_by_me: boolean;
      /**
       * Last Seen At
       * @description Timestamp (ms) when the user was last seen.
       */
      last_seen_at: number;
      /**
       * Nickname
       * @description User's nickname.
       * @default null
       */
      nickname: string | null;
      /**
       * Profile Url
       * @description URL of the user's profile image.
       * @default null
       */
      profile_url: string | null;
      /**
       * User Id
       * @description ID of the user being unmuted.
       */
      user_id: string;
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
 * Type of SENDBIRD's SENDBIRD_UNREGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE tool input.
 */
type SENDBIRD_UNREGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE_INPUT = {
  /**
   * Custom Type
   * @description Custom channel type to target. Example: 'my_custom_type'
   */
  custom_type?: string;
  /**
   * User Ids
   * @description List of user IDs to unregister as operators.
   */
  user_ids?: string[];
};

/**
 * Type of SENDBIRD's SENDBIRD_UNREGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE tool output.
 */
type SENDBIRD_UNREGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Affected Channels
       * @description Channels impacted and their remaining operators
       */
      affected_channels: {
          /**
           * Channel Url
           * @description URL-encoded channel URL where operators were removed
           */
          channel_url: string;
          /**
           * Operator Ids
           * @description List of current operator IDs in the channel after removal
           */
          operator_ids: string[];
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
 * Type of SENDBIRD's SENDBIRD_UPDATE_COUNT_PREFERENCE_OF_CHANNEL tool input.
 */
type SENDBIRD_UPDATE_COUNT_PREFERENCE_OF_CHANNEL_INPUT = {
  /**
   * Channel Url
   * @description URL identifier of the group channel.
   */
  channel_url?: string;
  /**
   * Count Preference
   * @description The user's count preference for the channel: one of 'all', 'unread_message_count_only', 'mention_count_only', or 'none'.
   * @enum {string}
   */
  count_preference?: "all" | "unread_message_count_only" | "mention_count_only" | "none";
  /**
   * User Id
   * @description The unique ID of the user.
   */
  user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_UPDATE_COUNT_PREFERENCE_OF_CHANNEL tool output.
 */
type SENDBIRD_UPDATE_COUNT_PREFERENCE_OF_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channel Url
       * @description URL identifier of the group channel.
       */
      channel_url: string;
      /**
       * Count Preference
       * @description The updated user count preference: 'all', 'unread', or 'mention'.
       * @enum {string}
       */
      count_preference: "all" | "unread" | "mention";
      /**
       * User Id
       * @description The unique ID of the user.
       */
      user_id: string;
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
 * Type of SENDBIRD's SENDBIRD_UPDATE_GROUP_CHANNEL tool input.
 */
type SENDBIRD_UPDATE_GROUP_CHANNEL_INPUT = {
  /**
   * Access Code
   * @description Access code required for joining this channel
   * @default null
   */
  access_code: string | null;
  /**
   * Channel Url
   * @description URL identifier of the group channel to update
   */
  channel_url?: string;
  /**
   * Cover Url
   * @description HTTPS URL for the channel's cover image
   * @default null
   */
  cover_url: string | null;
  /**
   * Custom Type
   * @description Custom type label for the channel
   * @default null
   */
  custom_type: string | null;
  /**
   * Data
   * @description Custom channel data as a JSON-encoded string
   * @default null
   */
  data: string | null;
  /**
   * Is Distinct
   * @description Whether this is a distinct channel
   * @default null
   */
  is_distinct: boolean | null;
  /**
   * Is Ephemeral
   * @description Whether this channel is ephemeral
   * @default null
   */
  is_ephemeral: boolean | null;
  /**
   * Is Public
   * @description Whether this channel is publicly joinable
   * @default null
   */
  is_public: boolean | null;
  /**
   * Is Super
   * @description Whether this is a supergroup channel
   * @default null
   */
  is_super: boolean | null;
  /**
   * My Count Preference
   * @description Unread count preference ("unread_message_count_only" or "all_count")
   * @default null
   * @enum {string|null}
   */
  my_count_preference: "unread_message_count_only" | "all_count" | null;
  /**
   * Name
   * @description New name for the channel
   * @default null
   */
  name: string | null;
  /**
   * Operators
   * @description List of user IDs to assign as channel operators
   * @default null
   */
  operators: string[] | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_UPDATE_GROUP_CHANNEL tool output.
 */
type SENDBIRD_UPDATE_GROUP_CHANNEL_OUTPUT = {
  /**
   * Access Code
   * @description Access code for channel joining
   * @default null
   */
  access_code: string | null;
  /**
   * Channel Url
   * @description Unique URL of the group channel
   */
  channel_url?: string;
  /**
   * Cover Url
   * @description Cover image URL
   * @default null
   */
  cover_url: string | null;
  /**
   * Custom Type
   * @description Custom type of the channel
   * @default null
   */
  custom_type: string | null;
  /**
   * Data
   * @description Custom data string for the channel
   * @default null
   */
  data: string | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Is Distinct
   * @description True if channel is distinct
   */
  is_distinct?: boolean;
  /**
   * Is Ephemeral
   * @description True if channel is ephemeral
   */
  is_ephemeral?: boolean;
  /**
   * Is Public
   * @description True if channel is public
   */
  is_public?: boolean;
  /**
   * Is Super
   * @description True if channel is a supergroup
   */
  is_super?: boolean;
  /**
   * My Count Preference
   * @description Unread count setting
   * @default null
   */
  my_count_preference: string | null;
  /**
   * Name
   * @description Name of the channel
   * @default null
   */
  name: string | null;
  /**
   * Operators
   * @description User IDs of channel operators
   */
  operators?: string[];
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDBIRD's SENDBIRD_UPDATE_MESSAGE tool input.
 */
type SENDBIRD_UPDATE_MESSAGE_INPUT = {
  /**
   * Apns Bundle Id
   * @description APNs bundle ID for iOS push notifications
   * @default null
   */
  apns_bundle_id: string | null;
  /**
   * Channel Url
   * @description URL identifier of the group channel containing the message
   */
  channel_url?: string;
  /**
   * Content
   * @description New text content of the message
   * @default null
   */
  content: string | null;
  /**
   * Custom Type
   * @description Custom type label for the message
   * @default null
   */
  custom_type: string | null;
  /**
   * Data
   * @description Additional data for the message as a JSON-encoded string
   * @default null
   */
  data: string | null;
  /**
   * Dedup Id
   * @description Deduplication ID for the message update
   * @default null
   */
  dedup_id: string | null;
  /**
   * Is Silent
   * @description Whether the message update should be silent (no push notification)
   * @default null
   */
  is_silent: boolean | null;
  /**
   * Mention Type
   * @description Mention type for the message (e.g., 'users' or 'channel')
   * @default null
   */
  mention_type: string | null;
  /**
   * Mentioned User Ids
   * @description List of user IDs to mention in the message
   * @default null
   */
  mentioned_user_ids: string[] | null;
  /**
   * Message Id
   * @description Unique ID of the message to update
   */
  message_id?: number;
  /**
   * Message Type
   * @description Type of the message (e.g., 'MESG' or 'FILE')
   * @default null
   */
  message_type: string | null;
  /**
   * Push Notification Delivery Option
   * @description Push notification delivery option ('default', 'suppress')
   * @default null
   */
  push_notification_delivery_option: string | null;
  /**
   * Sorted Metaarray
   * @description Sorted metaarray objects for the message
   * @default null
   */
  sorted_metaarray: {
      [key: string]: unknown;
  }[] | null;
  /**
   * User Id
   * @description ID of the user performing the update
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_UPDATE_MESSAGE tool output.
 */
type SENDBIRD_UPDATE_MESSAGE_OUTPUT = {
  /**
   * Apple Critical Alert Options
   * @description Apple critical alert options for the message
   * @default null
   */
  apple_critical_alert_options: {
      [key: string]: unknown;
  } | null;
  /**
   * Channel Url
   * @description URL of the channel containing the message
   */
  channel_url?: string;
  /**
   * Content
   * @description Content of the message
   * @default null
   */
  content: string | null;
  /**
   * Created At
   * @description Timestamp when the message was created (ms since epoch)
   */
  created_at?: number;
  /**
   * Custom Type
   * @description Custom type of the message
   * @default null
   */
  custom_type: string | null;
  /**
   * Data
   * @description Additional data in the message
   * @default null
   */
  data: string | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * File
   * @description File object if the message contains a file
   * @default null
   */
  file: {
      [key: string]: unknown;
  } | null;
  /**
   * Is Reply To Channel
   * @description True if message is a direct reply to channel
   * @default null
   */
  is_reply_to_channel: boolean | null;
  /**
   * Is Silent
   * @description True if the update was silent
   */
  is_silent?: boolean;
  /**
   * Mention Type
   * @description Mention type in the message
   * @default null
   */
  mention_type: string | null;
  /**
   * Mentioned Users
   * @description List of mentioned user objects
   */
  mentioned_users?: {
      [key: string]: unknown;
  }[];
  /**
   * Message Id
   * @description Unique ID of the updated message
   */
  message_id?: number;
  /**
   * Og Tag
   * @description Open Graph tag information for the message
   * @default null
   */
  og_tag: {
      [key: string]: unknown;
  } | null;
  /**
   * Parent Message Id
   * @description ID of the parent message if this is a reply
   * @default null
   */
  parent_message_id: number | null;
  /**
   * Parent Message Info
   * @description Parent message data if this is a reply
   * @default null
   */
  parent_message_info: {
      [key: string]: unknown;
  } | null;
  /**
   * Reactions
   * @description List of reaction objects on the message
   */
  reactions?: {
      [key: string]: unknown;
  }[];
  /**
   * Sorted Metaarray
   * @description Sorted metaarray objects for the message
   */
  sorted_metaarray?: {
      [key: string]: unknown;
  }[];
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Thread Info
   * @description Thread information if part of a thread
   * @default null
   */
  thread_info: {
      [key: string]: unknown;
  } | null;
  /**
   * Translations
   * @description Translations available for the message
   * @default null
   */
  translations: {
      [key: string]: unknown;
  } | null;
  /**
   * Type
   * @description Type of the message
   */
  type?: string;
  /**
   * Updated At
   * @description Timestamp when the message was last updated (ms since epoch)
   */
  updated_at?: number;
  /**
   * User
   * @description User object who sent the message
   */
  user?: {
      [key: string]: unknown;
  };
};

/**
 * Type of SENDBIRD's SENDBIRD_UPDATE_USER tool input.
 */
type SENDBIRD_UPDATE_USER_INPUT = {
  /**
   * Is Active
   * @description Set to false to deactivate the user account
   * @default null
   */
  is_active: boolean | null;
  /**
   * Issue Access Token
   * @description Whether to issue a new access token for the user
   * @default null
   */
  issue_access_token: boolean | null;
  /**
   * Metadata
   * @description Custom key-value store for user metadata
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Nickname
   * @description New display name for the user
   * @default null
   */
  nickname: string | null;
  /**
   * Preferred Languages
   * @description List of language tags for localization
   * @default null
   */
  preferred_languages: string[] | null;
  /**
   * Profile Url
   * @description URL of the new profile image
   * @default null
   */
  profile_url: string | null;
  /**
   * User Id
   * @description Unique ID of the user to update
   */
  user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_UPDATE_USER tool output.
 */
type SENDBIRD_UPDATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp of when the user was created (Unix epoch)
       */
      created_at: number;
      /**
       * Is Active
       * @description Active status of the user
       */
      is_active: boolean;
      /**
       * Is Online
       * @description Online status of the user
       */
      is_online: boolean;
      /**
       * Metadata
       * @description Custom metadata of the user
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Nickname
       * @description Display name of the user
       * @default null
       */
      nickname: string | null;
      /**
       * Preferred Languages
       * @description Language preferences of the user
       */
      preferred_languages: string[];
      /**
       * Profile Url
       * @description Profile image URL of the user
       * @default null
       */
      profile_url: string | null;
      /**
       * User Id
       * @description Unique ID of the user
       */
      user_id: string;
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
 * Type of SENDBIRD's SENDBIRD_VIEW_GROUP_CHANNEL tool input.
 */
type SENDBIRD_VIEW_GROUP_CHANNEL_INPUT = {
  /**
   * Channel Url
   * @description URL-encoded identifier of the group channel to retrieve.
   */
  channel_url?: string;
  /**
   * Show Delivery Receipt
   * @description Whether to include delivery receipt information in the response.
   * @default false
   */
  show_delivery_receipt: boolean | null;
  /**
   * Show Member
   * @description Whether to include the channel's member list in the response.
   * @default false
   */
  show_member: boolean | null;
  /**
   * Show Metadata
   * @description Whether to include channel metadata in the response.
   * @default false
   */
  show_metadata: boolean | null;
  /**
   * Show Migration Info
   * @description Whether to include migration information in the response.
   * @default false
   */
  show_migration_info: boolean | null;
  /**
   * Show Read Receipt
   * @description Whether to include read receipt information in the response.
   * @default false
   */
  show_read_receipt: boolean | null;
};

/**
 * Type of SENDBIRD's SENDBIRD_VIEW_GROUP_CHANNEL tool output.
 */
type SENDBIRD_VIEW_GROUP_CHANNEL_OUTPUT = {
  /**
   * Channel Url
   * @description URL of the group channel.
   */
  channel_url?: string;
  /**
   * Cover Url
   * @description Cover image URL of the channel.
   * @default null
   */
  cover_url: string | null;
  /**
   * Custom Type
   * @description Custom type of the channel.
   * @default null
   */
  custom_type: string | null;
  /**
   * Data
   * @description Custom data of the channel.
   * @default null
   */
  data: string | null;
  /**
   * Delivery Receipt
   * @description Delivery receipt mapping (user_id to count) if requested.
   * @default null
   */
  delivery_receipt: {
      [key: string]: number;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Is Broadcast
   * @description Whether the channel is a broadcast channel.
   */
  is_broadcast?: boolean;
  /**
   * Is Distinct
   * @description Whether the channel is distinct.
   */
  is_distinct?: boolean;
  /**
   * Is Public
   * @description Whether the channel is public.
   */
  is_public?: boolean;
  /**
   * Is Super
   * @description Whether the channel is a super group.
   */
  is_super?: boolean;
  /**
   * Members
   * @description List of members if show_member=true.
   * @default null
   */
  members: {
      /**
       * Connection Status
       * @description Connection status of the member.
       * @default null
       */
      connection_status: string | null;
      /**
       * Joined At
       * @description Timestamp when the member joined the channel.
       * @default null
       */
      joined_at: number | null;
      /**
       * Last Seen At
       * @description Timestamp when the member was last seen.
       * @default null
       */
      last_seen_at: number | null;
      /**
       * Metadata
       * @description Custom metadata for the member.
       * @default null
       */
      metadata: {
          [key: string]: string;
      } | null;
      /**
       * Nickname
       * @description Nickname of the channel member.
       * @default null
       */
      nickname: string | null;
      /**
       * Preferred Languages
       * @description Preferred languages of the member.
       * @default null
       */
      preferred_languages: string[] | null;
      /**
       * Profile Url
       * @description Profile image URL of the channel member.
       * @default null
       */
      profile_url: string | null;
      /**
       * Role
       * @description Role of the member in the channel (operator or member).
       * @default null
       */
      role: string | null;
      /**
       * User Id
       * @description User ID of the channel member.
       */
      user_id: string;
  }[] | null;
  /**
   * Metadata
   * @description Channel metadata if show_metadata=true.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Migration Info
   * @description Migration information if show_migration_info=true.
   * @default null
   */
  migration_info: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Name of the channel.
   * @default null
   */
  name: string | null;
  /**
   * Read Receipt
   * @description Read receipt mapping (user_id to timestamp) if requested.
   * @default null
   */
  read_receipt: {
      [key: string]: number;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDBIRD's SENDBIRD_VIEW_USER tool input.
 */
type SENDBIRD_VIEW_USER_INPUT = {
  /**
   * User Id
   * @description The unique ID of the user to retrieve.
   */
  user_id?: string;
};

/**
 * Type of SENDBIRD's SENDBIRD_VIEW_USER tool output.
 */
type SENDBIRD_VIEW_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp (ms) of user creation.
       */
      created_at: number;
      /**
       * Discovery Keys
       * @description Discovery keys if Discovery feature is enabled.
       * @default null
       */
      discovery_keys: string[] | null;
      /**
       * Has Ever Logged In
       * @description Whether the user has ever logged in.
       */
      has_ever_logged_in: boolean;
      /**
       * Is Active
       * @description Whether the user is an active Sendbird user.
       */
      is_active: boolean;
      /**
       * Is Online
       * @description Whether the user is currently connected to Sendbird.
       */
      is_online: boolean;
      /**
       * Last Seen At
       * @description Timestamp (ms) when the user was last connected.
       * @default null
       */
      last_seen_at: number | null;
      /**
       * Metadata
       * @description Additional user metadata as key-value pairs.
       * @default null
       */
      metadata: {
          [key: string]: string;
      } | null;
      /**
       * Nickname
       * @description User's nickname.
       * @default null
       */
      nickname: string | null;
      /**
       * Phone Number
       * @description User's phone number if configured.
       * @default null
       */
      phone_number: string | null;
      /**
       * Preferred Languages
       * @description User's preferred languages.
       * @default null
       */
      preferred_languages: string[] | null;
      /**
       * Profile Url
       * @description URL of the user's profile image.
       * @default null
       */
      profile_url: string | null;
      /**
       * User Id
       * @description Unique ID of the user.
       */
      user_id: string;
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
 * Type map of all available tool input types for toolkit "SENDBIRD".
 */
export type SENDBIRD_TOOL_INPUTS = {
  ADD_MEMBERS_GROUP_CHANNEL: SENDBIRD_ADD_MEMBERS_GROUP_CHANNEL_INPUT
  AI_CHABOT_CREATE_BOT: SENDBIRD_AI_CHABOT_CREATE_BOT_INPUT
  AI_CHABOT_GET_BOT: SENDBIRD_AI_CHABOT_GET_BOT_INPUT
  AI_CHABOT_LIST_BOTS: SENDBIRD_AI_CHABOT_LIST_BOTS_INPUT
  AI_CHABOT_LIST_GROUP_CHANNELS: SENDBIRD_AI_CHABOT_LIST_GROUP_CHANNELS_INPUT
  AI_CHABOT_UNREGISTER_BOT_WEBHOOK: SENDBIRD_AI_CHABOT_UNREGISTER_BOT_WEBHOOK_INPUT
  AI_CHABOT_UPDATE_BOT: SENDBIRD_AI_CHABOT_UPDATE_BOT_INPUT
  AI_CHABOT_UPDATE_BOT_WEBHOOK: SENDBIRD_AI_CHABOT_UPDATE_BOT_WEBHOOK_INPUT
  BAN_USER_FROM_GROUP_CHANNEL: SENDBIRD_BAN_USER_FROM_GROUP_CHANNEL_INPUT
  CREATE_CHANNEL: SENDBIRD_CREATE_CHANNEL_INPUT
  CREATE_USER: SENDBIRD_CREATE_USER_INPUT
  DELETE_CHANNEL: SENDBIRD_DELETE_CHANNEL_INPUT
  DELETE_MESSAGE: SENDBIRD_DELETE_MESSAGE_INPUT
  DELETE_USER: SENDBIRD_DELETE_USER_INPUT
  GET_COUNT_PREFERENCE_OF_CHANNEL: SENDBIRD_GET_COUNT_PREFERENCE_OF_CHANNEL_INPUT
  GET_NUMBER_OF_CHANNELS_BY_JOIN_STATUS: SENDBIRD_GET_NUMBER_OF_CHANNELS_BY_JOIN_STATUS_INPUT
  GET_NUMBER_OF_UNREAD_ITEMS: SENDBIRD_GET_NUMBER_OF_UNREAD_ITEMS_INPUT
  ISSUE_SESSION_TOKEN: SENDBIRD_ISSUE_SESSION_TOKEN_INPUT
  LEAVE_GROUP_CHANNELS: SENDBIRD_LEAVE_GROUP_CHANNELS_INPUT
  LIST_BANNED_MEMBERS: SENDBIRD_LIST_BANNED_MEMBERS_INPUT
  LIST_GROUP_CHANNELS: SENDBIRD_LIST_GROUP_CHANNELS_INPUT
  LIST_MEMBERS_GROUP_CHANNEL: SENDBIRD_LIST_MEMBERS_GROUP_CHANNEL_INPUT
  LIST_OPERATORS_CUSTOM_CHANNEL_TYPE: SENDBIRD_LIST_OPERATORS_CUSTOM_CHANNEL_TYPE_INPUT
  LIST_OPERATORS_GROUP_CHANNEL: SENDBIRD_LIST_OPERATORS_GROUP_CHANNEL_INPUT
  LIST_OPERATORS_OPEN_CHANNEL: SENDBIRD_LIST_OPERATORS_OPEN_CHANNEL_INPUT
  LIST_USERS: SENDBIRD_LIST_USERS_INPUT
  MARK_ALL_USER_MESSAGES_AS_READ: SENDBIRD_MARK_ALL_USER_MESSAGES_AS_READ_INPUT
  MUTE_USER: SENDBIRD_MUTE_USER_INPUT
  REGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE: SENDBIRD_REGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE_INPUT
  REGISTER_OPERATORS_GROUP_CHANNEL: SENDBIRD_REGISTER_OPERATORS_GROUP_CHANNEL_INPUT
  REGISTER_OPERATORS_OPEN_CHANNEL: SENDBIRD_REGISTER_OPERATORS_OPEN_CHANNEL_INPUT
  REVOKE_ALL_SESSION_TOKENS: SENDBIRD_REVOKE_ALL_SESSION_TOKENS_INPUT
  SENDBIRD_VIEW_MESSAGE: SENDBIRD_SENDBIRD_VIEW_MESSAGE_INPUT
  SENDBIRD_VIEW_USER: SENDBIRD_SENDBIRD_VIEW_USER_INPUT
  SEND_MESSAGE: SENDBIRD_SEND_MESSAGE_INPUT
  UNBAN_USER: SENDBIRD_UNBAN_USER_INPUT
  UNMUTE_USER: SENDBIRD_UNMUTE_USER_INPUT
  UNREGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE: SENDBIRD_UNREGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE_INPUT
  UPDATE_COUNT_PREFERENCE_OF_CHANNEL: SENDBIRD_UPDATE_COUNT_PREFERENCE_OF_CHANNEL_INPUT
  UPDATE_GROUP_CHANNEL: SENDBIRD_UPDATE_GROUP_CHANNEL_INPUT
  UPDATE_MESSAGE: SENDBIRD_UPDATE_MESSAGE_INPUT
  UPDATE_USER: SENDBIRD_UPDATE_USER_INPUT
  VIEW_GROUP_CHANNEL: SENDBIRD_VIEW_GROUP_CHANNEL_INPUT
  VIEW_USER: SENDBIRD_VIEW_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SENDBIRD".
 */
export type SENDBIRD_TOOL_OUTPUTS = {
  ADD_MEMBERS_GROUP_CHANNEL: SENDBIRD_ADD_MEMBERS_GROUP_CHANNEL_OUTPUT
  AI_CHABOT_CREATE_BOT: SENDBIRD_AI_CHABOT_CREATE_BOT_OUTPUT
  AI_CHABOT_GET_BOT: SENDBIRD_AI_CHABOT_GET_BOT_OUTPUT
  AI_CHABOT_LIST_BOTS: SENDBIRD_AI_CHABOT_LIST_BOTS_OUTPUT
  AI_CHABOT_LIST_GROUP_CHANNELS: SENDBIRD_AI_CHABOT_LIST_GROUP_CHANNELS_OUTPUT
  AI_CHABOT_UNREGISTER_BOT_WEBHOOK: SENDBIRD_AI_CHABOT_UNREGISTER_BOT_WEBHOOK_OUTPUT
  AI_CHABOT_UPDATE_BOT: SENDBIRD_AI_CHABOT_UPDATE_BOT_OUTPUT
  AI_CHABOT_UPDATE_BOT_WEBHOOK: SENDBIRD_AI_CHABOT_UPDATE_BOT_WEBHOOK_OUTPUT
  BAN_USER_FROM_GROUP_CHANNEL: SENDBIRD_BAN_USER_FROM_GROUP_CHANNEL_OUTPUT
  CREATE_CHANNEL: SENDBIRD_CREATE_CHANNEL_OUTPUT
  CREATE_USER: SENDBIRD_CREATE_USER_OUTPUT
  DELETE_CHANNEL: SENDBIRD_DELETE_CHANNEL_OUTPUT
  DELETE_MESSAGE: SENDBIRD_DELETE_MESSAGE_OUTPUT
  DELETE_USER: SENDBIRD_DELETE_USER_OUTPUT
  GET_COUNT_PREFERENCE_OF_CHANNEL: SENDBIRD_GET_COUNT_PREFERENCE_OF_CHANNEL_OUTPUT
  GET_NUMBER_OF_CHANNELS_BY_JOIN_STATUS: SENDBIRD_GET_NUMBER_OF_CHANNELS_BY_JOIN_STATUS_OUTPUT
  GET_NUMBER_OF_UNREAD_ITEMS: SENDBIRD_GET_NUMBER_OF_UNREAD_ITEMS_OUTPUT
  ISSUE_SESSION_TOKEN: SENDBIRD_ISSUE_SESSION_TOKEN_OUTPUT
  LEAVE_GROUP_CHANNELS: SENDBIRD_LEAVE_GROUP_CHANNELS_OUTPUT
  LIST_BANNED_MEMBERS: SENDBIRD_LIST_BANNED_MEMBERS_OUTPUT
  LIST_GROUP_CHANNELS: SENDBIRD_LIST_GROUP_CHANNELS_OUTPUT
  LIST_MEMBERS_GROUP_CHANNEL: SENDBIRD_LIST_MEMBERS_GROUP_CHANNEL_OUTPUT
  LIST_OPERATORS_CUSTOM_CHANNEL_TYPE: SENDBIRD_LIST_OPERATORS_CUSTOM_CHANNEL_TYPE_OUTPUT
  LIST_OPERATORS_GROUP_CHANNEL: SENDBIRD_LIST_OPERATORS_GROUP_CHANNEL_OUTPUT
  LIST_OPERATORS_OPEN_CHANNEL: SENDBIRD_LIST_OPERATORS_OPEN_CHANNEL_OUTPUT
  LIST_USERS: SENDBIRD_LIST_USERS_OUTPUT
  MARK_ALL_USER_MESSAGES_AS_READ: SENDBIRD_MARK_ALL_USER_MESSAGES_AS_READ_OUTPUT
  MUTE_USER: SENDBIRD_MUTE_USER_OUTPUT
  REGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE: SENDBIRD_REGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE_OUTPUT
  REGISTER_OPERATORS_GROUP_CHANNEL: SENDBIRD_REGISTER_OPERATORS_GROUP_CHANNEL_OUTPUT
  REGISTER_OPERATORS_OPEN_CHANNEL: SENDBIRD_REGISTER_OPERATORS_OPEN_CHANNEL_OUTPUT
  REVOKE_ALL_SESSION_TOKENS: SENDBIRD_REVOKE_ALL_SESSION_TOKENS_OUTPUT
  SENDBIRD_VIEW_MESSAGE: SENDBIRD_SENDBIRD_VIEW_MESSAGE_OUTPUT
  SENDBIRD_VIEW_USER: SENDBIRD_SENDBIRD_VIEW_USER_OUTPUT
  SEND_MESSAGE: SENDBIRD_SEND_MESSAGE_OUTPUT
  UNBAN_USER: SENDBIRD_UNBAN_USER_OUTPUT
  UNMUTE_USER: SENDBIRD_UNMUTE_USER_OUTPUT
  UNREGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE: SENDBIRD_UNREGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE_OUTPUT
  UPDATE_COUNT_PREFERENCE_OF_CHANNEL: SENDBIRD_UPDATE_COUNT_PREFERENCE_OF_CHANNEL_OUTPUT
  UPDATE_GROUP_CHANNEL: SENDBIRD_UPDATE_GROUP_CHANNEL_OUTPUT
  UPDATE_MESSAGE: SENDBIRD_UPDATE_MESSAGE_OUTPUT
  UPDATE_USER: SENDBIRD_UPDATE_USER_OUTPUT
  VIEW_GROUP_CHANNEL: SENDBIRD_VIEW_GROUP_CHANNEL_OUTPUT
  VIEW_USER: SENDBIRD_VIEW_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SENDBIRD toolkit.
 */
export const SENDBIRD = {
  slug: "sendbird",
  tools: {
    /**
     * Tool to add members to a group channel. use when you need to invite one or more users into an existing group channel.
     */
    ADD_MEMBERS_GROUP_CHANNEL: "SENDBIRD_ADD_MEMBERS_GROUP_CHANNEL",
    /**
     * Tool to create a new bot. use when you need to add an ai or default bot to your sendbird app.
     */
    AI_CHABOT_CREATE_BOT: "SENDBIRD_AI_CHABOT_CREATE_BOT",
    /**
     * Tool to retrieve information on a specific bot by its user id. use when you need to fetch bot details before performing subsequent operations.
     */
    AI_CHABOT_GET_BOT: "SENDBIRD_AI_CHABOT_GET_BOT",
    /**
     * Tool to list all bots in the sendbird application. use when you need to fetch bot details with optional filters and pagination.
     */
    AI_CHABOT_LIST_BOTS: "SENDBIRD_AI_CHABOT_LIST_BOTS",
    /**
     * Tool to list group channels. use when you need to fetch available group channels with filters and pagination.
     */
    AI_CHABOT_LIST_GROUP_CHANNELS: "SENDBIRD_AI_CHABOT_LIST_GROUP_CHANNELS",
    /**
     * Tool to unregister the webhook url for a bot. use when you need to remove webhook configuration for a specific bot.
     */
    AI_CHABOT_UNREGISTER_BOT_WEBHOOK: "SENDBIRD_AI_CHABOT_UNREGISTER_BOT_WEBHOOK",
    /**
     * Tool to update information on an existing bot. use when you need to change a bot's user id, nickname, profile image url, or toggle read-receipt or privacy settings after creation. run after confirming the bot id.
     */
    AI_CHABOT_UPDATE_BOT: "SENDBIRD_AI_CHABOT_UPDATE_BOT",
    /**
     * Tool to update the webhook url of an existing bot. use when you need to change or enable/disable a bot's webhook after creation.
     */
    AI_CHABOT_UPDATE_BOT_WEBHOOK: "SENDBIRD_AI_CHABOT_UPDATE_BOT_WEBHOOK",
    /**
     * Tool to ban a user from a group channel. use when moderating group channels to restrict member access. execute after confirming channel url and user id.
     */
    BAN_USER_FROM_GROUP_CHANNEL: "SENDBIRD_BAN_USER_FROM_GROUP_CHANNEL",
    /**
     * Tool to create a new group channel. use when you need to start a conversation with specific users. execute after specifying users and optional settings.
     */
    CREATE_CHANNEL: "SENDBIRD_CREATE_CHANNEL",
    /**
     * Tool to create a new user. use when you need to register a user account in sendbird.
     */
    CREATE_USER: "SENDBIRD_CREATE_USER",
    /**
     * Tool to delete a specific group channel. use when you have the channel url and want to permanently remove the channel. execute after confirming the channel exists.
     */
    DELETE_CHANNEL: "SENDBIRD_DELETE_CHANNEL",
    /**
     * Tool to delete a specific message in a sendbird group channel. use when you need to permanently remove a sent message after confirming deletion permissions.
     */
    DELETE_MESSAGE: "SENDBIRD_DELETE_MESSAGE",
    /**
     * Tool to delete a sendbird user. use when you need to remove a user from your sendbird application, optionally permanently.
     */
    DELETE_USER: "SENDBIRD_DELETE_USER",
    /**
     * Tool to retrieve a user's count preference for a specific group channel. use after confirming the user and channel exist to determine whether to display all, unread-only, or mention-only counts.
     */
    GET_COUNT_PREFERENCE_OF_CHANNEL: "SENDBIRD_GET_COUNT_PREFERENCE_OF_CHANNEL",
    /**
     * Tool to retrieve number of group channels by join status for a user. use when you need counts of invited, joined, and total channels for a specific user.
     */
    GET_NUMBER_OF_CHANNELS_BY_JOIN_STATUS: "SENDBIRD_GET_NUMBER_OF_CHANNELS_BY_JOIN_STATUS",
    /**
     * Tool to retrieve a user's unread item counts. use after you need the total unread messages, mentions, and channel counts for a specific user.
     */
    GET_NUMBER_OF_UNREAD_ITEMS: "SENDBIRD_GET_NUMBER_OF_UNREAD_ITEMS",
    /**
     * Tool to issue a session token for a user. use when you need to generate or refresh a user's session token.
     */
    ISSUE_SESSION_TOKEN: "SENDBIRD_ISSUE_SESSION_TOKEN",
    /**
     * Tool to leave group channels for a user. use when you need to make a user exit one or more joined group channels.
     */
    LEAVE_GROUP_CHANNELS: "SENDBIRD_LEAVE_GROUP_CHANNELS",
    /**
     * Tool to list banned members in a group channel. use when you need to see which users are banned from a specific group channel.
     */
    LIST_BANNED_MEMBERS: "SENDBIRD_LIST_BANNED_MEMBERS",
    /**
     * Tool to list group channels. use when you need to fetch paginated group channels with optional filters.
     */
    LIST_GROUP_CHANNELS: "SENDBIRD_LIST_GROUP_CHANNELS",
    /**
     * Tool to list members of a group channel. use when you need to paginate through members of a specified group channel.
     */
    LIST_MEMBERS_GROUP_CHANNEL: "SENDBIRD_LIST_MEMBERS_GROUP_CHANNEL",
    /**
     * Tool to list operators of a channel by custom channel type. use when you need to fetch operators for a specific custom channel type with pagination.
     */
    LIST_OPERATORS_CUSTOM_CHANNEL_TYPE: "SENDBIRD_LIST_OPERATORS_CUSTOM_CHANNEL_TYPE",
    /**
     * Tool to list operators of a group channel. use after specifying the channel url when needing to paginate through operators.
     */
    LIST_OPERATORS_GROUP_CHANNEL: "SENDBIRD_LIST_OPERATORS_GROUP_CHANNEL",
    /**
     * Tool to list operators of an open channel. use when you have the open channel url and need to fetch its operators. supports pagination via token and limit.
     */
    LIST_OPERATORS_OPEN_CHANNEL: "SENDBIRD_LIST_OPERATORS_OPEN_CHANNEL",
    /**
     * Tool to retrieve a list of users. use after setting up sendbird api credentials to paginate or filter all users in your application.
     */
    LIST_USERS: "SENDBIRD_LIST_USERS",
    /**
     * Tool to mark all of a user's messages as read in group channels. use when resetting unread message counts after a user has viewed all messages.
     */
    MARK_ALL_USER_MESSAGES_AS_READ: "SENDBIRD_MARK_ALL_USER_MESSAGES_AS_READ",
    /**
     * Tool to mute a user in a group channel. use when you need to prevent a user from sending messages for a specified duration.
     */
    MUTE_USER: "SENDBIRD_MUTE_USER",
    /**
     * Tool to register users as operators to channels by custom channel type. use when assigning operator roles for all channels of a specified custom type.
     */
    REGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE: "SENDBIRD_REGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE",
    /**
     * Tool to register one or more users as operators in a sendbird group channel. use when elevating permissions of existing channel members.
     */
    REGISTER_OPERATORS_GROUP_CHANNEL: "SENDBIRD_REGISTER_OPERATORS_GROUP_CHANNEL",
    /**
     * Tool to register operators to an open channel. use after creating or updating an open channel when you need to assign operator roles.
     */
    REGISTER_OPERATORS_OPEN_CHANNEL: "SENDBIRD_REGISTER_OPERATORS_OPEN_CHANNEL",
    /**
     * Tool to revoke all session tokens for a user. use when you need to invalidate all active sessions for security.
     */
    REVOKE_ALL_SESSION_TOKENS: "SENDBIRD_REVOKE_ALL_SESSION_TOKENS",
    /**
     * Tool to view a specific message in a group channel. use after confirming channel url and message id.
     */
    SENDBIRD_VIEW_MESSAGE: "SENDBIRD_SENDBIRD_VIEW_MESSAGE",
    /**
     * Tool to view user information. use when retrieving details of a specific sendbird user by id.
     */
    SENDBIRD_VIEW_USER: "SENDBIRD_SENDBIRD_VIEW_USER",
    /**
     * Tool to send a message to a group channel. use when you need to post a text, file, or admin message to an existing group channel.
     */
    SEND_MESSAGE: "SENDBIRD_SEND_MESSAGE",
    /**
     * Tool to unban a user from a group channel. use when reinstating a previously banned user. execute after confirming the user is currently banned.
     */
    UNBAN_USER: "SENDBIRD_UNBAN_USER",
    /**
     * Tool to unmute a user in a group channel. use when you want to restore a muted user's ability to send messages after confirming they are muted.
     */
    UNMUTE_USER: "SENDBIRD_UNMUTE_USER",
    /**
     * Tool to unregister operators from channels by custom channel type. use when you need to remove operator roles from users across channels of a specific custom type.
     */
    UNREGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE: "SENDBIRD_UNREGISTER_OPERATORS_CUSTOM_CHANNEL_TYPE",
    /**
     * Tool to update a user's unread count preference for a specific group channel. use when you want to include or suppress a channel in the user's unread counts.
     */
    UPDATE_COUNT_PREFERENCE_OF_CHANNEL: "SENDBIRD_UPDATE_COUNT_PREFERENCE_OF_CHANNEL",
    /**
     * Tool to update group channel information. use when you need to modify channel attributes such as name, cover image, privacy settings, or operator list after channel creation.
     */
    UPDATE_GROUP_CHANNEL: "SENDBIRD_UPDATE_GROUP_CHANNEL",
    /**
     * Tool to update an existing group channel message in sendbird. use after you need to modify content or metadata of a sent message.
     */
    UPDATE_MESSAGE: "SENDBIRD_UPDATE_MESSAGE",
    /**
     * Tool to update a user's information. use when modifying nickname, profile image url, activation status, or metadata.
     */
    UPDATE_USER: "SENDBIRD_UPDATE_USER",
    /**
     * Tool to view information about a specific group channel. use when you need channel details after confirming the channel url.
     */
    VIEW_GROUP_CHANNEL: "SENDBIRD_VIEW_GROUP_CHANNEL",
    /**
     * Tool to retrieve information about a specific sendbird user. use when you need to fetch detailed user data by their user id.
     */
    VIEW_USER: "SENDBIRD_VIEW_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SENDBIRD".
 */
export type SENDBIRD_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SENDBIRD".
 */
export type SENDBIRD_TRIGGER_EVENTS = {}
