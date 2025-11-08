// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SENDBIRD_AI_CHABOT's SENDBIRD_AI_CHABOT_CREATE_BOT tool input.
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
 * Type of SENDBIRD_AI_CHABOT's SENDBIRD_AI_CHABOT_CREATE_BOT tool output.
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
 * Type of SENDBIRD_AI_CHABOT's SENDBIRD_AI_CHABOT_GET_BOT tool input.
 */
type SENDBIRD_AI_CHABOT_GET_BOT_INPUT = {
  /**
   * Bot User Id
   * @description The unique user ID of the bot to retrieve.
   */
  bot_user_id?: string;
};

/**
 * Type of SENDBIRD_AI_CHABOT's SENDBIRD_AI_CHABOT_GET_BOT tool output.
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
 * Type of SENDBIRD_AI_CHABOT's SENDBIRD_AI_CHABOT_LIST_BOTS tool input.
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
 * Type of SENDBIRD_AI_CHABOT's SENDBIRD_AI_CHABOT_LIST_BOTS tool output.
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
 * Type of SENDBIRD_AI_CHABOT's SENDBIRD_AI_CHABOT_LIST_GROUP_CHANNELS tool input.
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
 * Type of SENDBIRD_AI_CHABOT's SENDBIRD_AI_CHABOT_LIST_GROUP_CHANNELS tool output.
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
 * Type of SENDBIRD_AI_CHABOT's SENDBIRD_AI_CHABOT_UNREGISTER_BOT_WEBHOOK tool input.
 */
type SENDBIRD_AI_CHABOT_UNREGISTER_BOT_WEBHOOK_INPUT = {
  /**
   * Bot Id
   * @description Unique ID of the bot whose webhook will be unregistered.
   */
  bot_id?: string;
};

/**
 * Type of SENDBIRD_AI_CHABOT's SENDBIRD_AI_CHABOT_UNREGISTER_BOT_WEBHOOK tool output.
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
 * Type of SENDBIRD_AI_CHABOT's SENDBIRD_AI_CHABOT_UPDATE_BOT tool input.
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
 * Type of SENDBIRD_AI_CHABOT's SENDBIRD_AI_CHABOT_UPDATE_BOT tool output.
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
 * Type of SENDBIRD_AI_CHABOT's SENDBIRD_AI_CHABOT_UPDATE_BOT_WEBHOOK tool input.
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
 * Type of SENDBIRD_AI_CHABOT's SENDBIRD_AI_CHABOT_UPDATE_BOT_WEBHOOK tool output.
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
 * Type map of all available tool input types for toolkit "SENDBIRD_AI_CHABOT".
 */
export type SENDBIRD_AI_CHABOT_TOOL_INPUTS = {
  CREATE_BOT: SENDBIRD_AI_CHABOT_CREATE_BOT_INPUT
  GET_BOT: SENDBIRD_AI_CHABOT_GET_BOT_INPUT
  LIST_BOTS: SENDBIRD_AI_CHABOT_LIST_BOTS_INPUT
  LIST_GROUP_CHANNELS: SENDBIRD_AI_CHABOT_LIST_GROUP_CHANNELS_INPUT
  UNREGISTER_BOT_WEBHOOK: SENDBIRD_AI_CHABOT_UNREGISTER_BOT_WEBHOOK_INPUT
  UPDATE_BOT: SENDBIRD_AI_CHABOT_UPDATE_BOT_INPUT
  UPDATE_BOT_WEBHOOK: SENDBIRD_AI_CHABOT_UPDATE_BOT_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SENDBIRD_AI_CHABOT".
 */
export type SENDBIRD_AI_CHABOT_TOOL_OUTPUTS = {
  CREATE_BOT: SENDBIRD_AI_CHABOT_CREATE_BOT_OUTPUT
  GET_BOT: SENDBIRD_AI_CHABOT_GET_BOT_OUTPUT
  LIST_BOTS: SENDBIRD_AI_CHABOT_LIST_BOTS_OUTPUT
  LIST_GROUP_CHANNELS: SENDBIRD_AI_CHABOT_LIST_GROUP_CHANNELS_OUTPUT
  UNREGISTER_BOT_WEBHOOK: SENDBIRD_AI_CHABOT_UNREGISTER_BOT_WEBHOOK_OUTPUT
  UPDATE_BOT: SENDBIRD_AI_CHABOT_UPDATE_BOT_OUTPUT
  UPDATE_BOT_WEBHOOK: SENDBIRD_AI_CHABOT_UPDATE_BOT_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SENDBIRD_AI_CHABOT toolkit.
 */
export const SENDBIRD_AI_CHABOT = {
  slug: "sendbird_ai_chabot",
  tools: {
    /**
     * Tool to create a new bot. use when you need to add an ai or default bot to your sendbird app.
     */
    CREATE_BOT: "SENDBIRD_AI_CHABOT_CREATE_BOT",
    /**
     * Tool to retrieve information on a specific bot by its user id. use when you need to fetch bot details before performing subsequent operations.
     */
    GET_BOT: "SENDBIRD_AI_CHABOT_GET_BOT",
    /**
     * Tool to list all bots in the sendbird application. use when you need to fetch bot details with optional filters and pagination.
     */
    LIST_BOTS: "SENDBIRD_AI_CHABOT_LIST_BOTS",
    /**
     * Tool to list group channels. use when you need to fetch available group channels with filters and pagination.
     */
    LIST_GROUP_CHANNELS: "SENDBIRD_AI_CHABOT_LIST_GROUP_CHANNELS",
    /**
     * Tool to unregister the webhook url for a bot. use when you need to remove webhook configuration for a specific bot.
     */
    UNREGISTER_BOT_WEBHOOK: "SENDBIRD_AI_CHABOT_UNREGISTER_BOT_WEBHOOK",
    /**
     * Tool to update information on an existing bot. use when you need to change a bot's user id, nickname, profile image url, or toggle read-receipt or privacy settings after creation. run after confirming the bot id.
     */
    UPDATE_BOT: "SENDBIRD_AI_CHABOT_UPDATE_BOT",
    /**
     * Tool to update the webhook url of an existing bot. use when you need to change or enable/disable a bot's webhook after creation.
     */
    UPDATE_BOT_WEBHOOK: "SENDBIRD_AI_CHABOT_UPDATE_BOT_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SENDBIRD_AI_CHABOT".
 */
export type SENDBIRD_AI_CHABOT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SENDBIRD_AI_CHABOT".
 */
export type SENDBIRD_AI_CHABOT_TRIGGER_EVENTS = {}
