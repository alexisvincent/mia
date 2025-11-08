import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DISCORD's DISCORD_GET_INVITE tool input.
 */
type DISCORD_GET_INVITE_INPUT = {
  /**
   * Guild Scheduled Event Id
   * @description The guild scheduled event to include with the invite.
   * @default null
   */
  guild_scheduled_event_id: string | null;
  /**
   * Invite Code
   * @description The invite code (e.g., "0vCdhLbwjZZTWZLD").
   */
  invite_code?: string;
  /**
   * With Counts
   * @description Whether the invite should contain approximate member counts.
   * @default null
   */
  with_counts: boolean | null;
  /**
   * With Expiration
   * @description Whether the invite should contain the expiration date.
   * @default null
   */
  with_expiration: boolean | null;
};

/**
 * Type of DISCORD's DISCORD_GET_INVITE tool output.
 */
type DISCORD_GET_INVITE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Approximate Member Count
       * @default null
       */
      approximate_member_count: number | null;
      /**
       * Approximate Presence Count
       * @default null
       */
      approximate_presence_count: number | null;
      /**
       * Channel
       * @default null
       */
      channel: {
          /** Id */
          id: string;
          /** Name */
          name: string;
          /** Type */
          type: number;
      } | null;
      /** Code */
      code: string;
      /**
       * Expires At
       * @default null
       */
      expires_at: string | null;
      /**
       * Guild
       * @default null
       */
      guild: {
          /** Banner */
          banner: string | null;
          /** Description */
          description: string | null;
          /** Features */
          features: string[];
          /** Icon */
          icon: string | null;
          /** Id */
          id: string;
          /** Name */
          name: string;
          /** Nsfw Level */
          nsfw_level: number;
          /** Premium Subscription Count */
          premium_subscription_count: number | null;
          /** Splash */
          splash: string | null;
          /** Vanity Url Code */
          vanity_url_code: string | null;
          /** Verification Level */
          verification_level: number;
      } | null;
      /**
       * GuildScheduledEvent
       * @default null
       */
      guild_scheduled_event: {
          /** Channel Id */
          channel_id: string | null;
          /** Creator Id */
          creator_id: string | null;
          /** Description */
          description: string | null;
          /** Entity Id */
          entity_id: string | null;
          /** Entity Type */
          entity_type: number;
          /** Guild Id */
          guild_id: string;
          /** Id */
          id: string;
          /** Image */
          image: string | null;
          /** Name */
          name: string;
          /** Privacy Level */
          privacy_level: number;
          /** Scheduled End Time */
          scheduled_end_time: string | null;
          /** Scheduled Start Time */
          scheduled_start_time: string;
          /** Status */
          status: number;
          /** User Count */
          user_count: number | null;
      } | null;
      /**
       * User
       * @default null
       */
      inviter: {
          /** Avatar */
          avatar: string | null;
          /** Discriminator */
          discriminator: string;
          /** Id */
          id: string;
          /** Public Flags */
          public_flags: number | null;
          /** Username */
          username: string;
      } | null;
      /**
       * Application
       * @default null
       */
      target_application: {
          /** Description */
          description: string;
          /**
           * Icon
           * @default null
           */
          icon: string | null;
          /** Id */
          id: string;
          /** Name */
          name: string;
          /**
           * Summary
           * @default
           */
          summary: string;
          /**
           * Type
           * @default null
           */
          type: number | null;
      } | null;
      /**
       * Target Type
       * @default null
       */
      target_type: number | null;
      /**
       * User
       * @default null
       */
      target_user: {
          /** Avatar */
          avatar: string | null;
          /** Discriminator */
          discriminator: string;
          /** Id */
          id: string;
          /** Public Flags */
          public_flags: number | null;
          /** Username */
          username: string;
      } | null;
      /** Type */
      type: number;
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
 * Type of DISCORD's DISCORD_GET_MY_GUILD_MEMBER tool input.
 */
type DISCORD_GET_MY_GUILD_MEMBER_INPUT = {
  /**
   * Guild Id
   * @description The unique identifier of the Discord guild (server) from which to fetch the member object.
   */
  guild_id?: string;
};

/**
 * Type of DISCORD's DISCORD_GET_MY_GUILD_MEMBER tool output.
 */
type DISCORD_GET_MY_GUILD_MEMBER_OUTPUT = {
  /**
   * Data
   * @description The guild member object containing comprehensive details for the authenticated user within the specified guild.
   */
  data?: {
      /**
       * Avatar
       * @description The member's guild-specific avatar hash; if set, this overrides the user's main avatar within this guild. Refer to Discord's documentation for image URL construction.
       * @default null
       */
      avatar: string | null;
      /**
       * Avatar Decoration Data
       * @description Data for the member's avatar decoration, typically including `asset` and `sku_id` for the applied decoration.
       * @default null
       */
      avatar_decoration_data: {
          [key: string]: unknown;
      } | null;
      /**
       * Banner
       * @description The hash of the member's guild-specific banner, displayed on their profile card within the guild. This is a Nitro feature and requires the guild to have the 'GUILD_BANNER' feature enabled.
       * @default null
       */
      banner: string | null;
      /**
       * Communication Disabled Until
       * Format: date-time
       * @description The ISO8601 timestamp indicating when the user's timeout (communication restriction) in this guild will expire.
       * @default null
       */
      communication_disabled_until: string | null;
      /**
       * Deaf
       * @description True if the user is currently server-deafened in voice channels by a moderator, preventing them from speaking and hearing. False otherwise.
       */
      deaf: boolean;
      /**
       * Flags
       * @description Guild member-specific flags, represented as a bitfield integer. These flags indicate various states such as whether the member `DID_REJOIN`, `COMPLETED_ONBOARDING`, or `BYPASSES_VERIFICATION`. Refer to Discord API documentation for a full list of guild member flag bit values.
       */
      flags: number;
      /**
       * Joined At
       * Format: date-time
       * @description The ISO8601 timestamp indicating when the user joined the guild.
       */
      joined_at: string;
      /**
       * Mute
       * @description True if the user is currently server-muted in voice channels by a moderator, preventing them from speaking. False otherwise.
       */
      mute: boolean;
      /**
       * Nick
       * @description The user's nickname in this guild; if not set, the user's global or regular username is displayed.
       * @default null
       */
      nick: string | null;
      /**
       * Pending
       * @description True if the user has not yet passed the guild's membership screening requirements (e.g., accepting rules via the welcome screen). False if they have passed or if screening is not enabled.
       */
      pending: boolean;
      /**
       * Premium Since
       * Format: date-time
       * @description The ISO8601 timestamp indicating when the user started boosting this guild (contributing a Server Nitro Subscription).
       * @default null
       */
      premium_since: string | null;
      /**
       * Roles
       * @description A list of role snowflake IDs that this member has been assigned within the guild.
       */
      roles: string[];
      /**
       * User
       * @description The user object associated with this guild member, containing general user information like username, ID, and avatar.
       */
      user: {
          /**
           * Accent Color
           * @description The integer representation of the user's profile accent color, used for profile theming.
           * @default null
           */
          accent_color: number | null;
          /**
           * Avatar
           * @description The user's avatar hash. Refer to Discord's documentation for CDN image URL formatting and constructing the full image URL.
           * @default null
           */
          avatar: string | null;
          /**
           * Banner
           * @description The user's profile banner hash. Refer to Discord's documentation for CDN image URL formatting.
           * @default null
           */
          banner: string | null;
          /**
           * Bot
           * @description True if the user is a bot account; otherwise false.
           * @default null
           */
          bot: boolean | null;
          /**
           * Discriminator
           * @description The user's 4-digit tag (e.g., '0001'). This will be '0' for users who have migrated to the new username system without a discriminator.
           */
          discriminator: string;
          /**
           * Flags
           * @description The internal flags on a user's account, represented as a bitfield integer. Refer to Discord API documentation for specific flag bit values.
           */
          flags: number;
          /**
           * Global Name
           * @description The user's global display name. For users on the new username system, this is their primary display name. For others, it may be null or their classic username.
           * @default null
           */
          global_name: string | null;
          /**
           * Id
           * @description The user's unique snowflake ID.
           */
          id: string;
          /**
           * Public Flags
           * @description The public flags on a user's account, represented as a bitfield integer. These flags indicate badges such as HypeSquad membership, Discord Certified Moderator status, etc. Refer to Discord API documentation for a comprehensive list of flag bit values.
           */
          public_flags: number;
          /**
           * System
           * @description True if the user is an official Discord System user (e.g., for urgent messages or official announcements from Discord); otherwise false.
           * @default null
           */
          system: boolean | null;
          /**
           * Username
           * @description The user's username (not unique across the platform).
           */
          username: string;
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
 * Type of DISCORD's DISCORD_GET_MY_OAUTH2_AUTHORIZATION tool input.
 */
type DISCORD_GET_MY_OAUTH2_AUTHORIZATION_INPUT = object;

/**
 * Type of DISCORD's DISCORD_GET_MY_OAUTH2_AUTHORIZATION tool output.
 */
type DISCORD_GET_MY_OAUTH2_AUTHORIZATION_OUTPUT = {
  /**
   * Data
   * @description Authorized application details, token expiration, granted scopes, and optional user information (contingent on scopes).
   */
  data?: {
      /**
       * Application
       * @description The OAuth2 application that was authorized.
       */
      application: {
          /**
           * Bot
           * @description Discord bot user associated with an application.
           * @default null
           */
          bot: {
              /**
               * Accent Color
               * @description Bot's banner color (integer representation of hex).
               * @default null
               */
              accent_color: number | null;
              /**
               * Avatar
               * @description Avatar hash of the bot; used to construct the avatar URL.
               * @default null
               */
              avatar: string | null;
              /**
               * Banner
               * @description Banner hash of the bot; used to construct the banner URL.
               * @default null
               */
              banner: string | null;
              /**
               * Bot
               * @description Indicates if the user belongs to an OAuth2 application; typically true for bot accounts.
               * @default null
               */
              bot: boolean | null;
              /**
               * Discriminator
               * @description The 4-digit discord-tag for the bot (e.g., 0001); '0' for users on the new username system.
               */
              discriminator: string;
              /**
               * Flags
               * @description Flags on the bot's user account (bitwise value).
               */
              flags: number;
              /**
               * Global Name
               * @description Bot's display name, if set; primary name shown in Discord if global name exists.
               * @default null
               */
              global_name: string | null;
              /**
               * Id
               * @description Unique ID of the bot user.
               */
              id: string;
              /**
               * Public Flags
               * @description Public flags on the bot's user account (bitwise value).
               */
              public_flags: number;
              /**
               * System
               * @description Indicates if the user is an Official Discord System user (part of urgent message system).
               * @default null
               */
              system: boolean | null;
              /**
               * Username
               * @description Username of the bot.
               */
              username: string;
          } | null;
          /**
           * Bot Public
           * @description If true, anyone can join the application's bot to their guild.
           * @default null
           */
          bot_public: boolean | null;
          /**
           * Bot Require Code Grant
           * @description If true, the application's bot only joins after OAuth2 code grant flow completion.
           * @default null
           */
          bot_require_code_grant: boolean | null;
          /**
           * Cover Image
           * @description Cover image hash if the application is a game sold on Discord.
           * @default null
           */
          cover_image: string | null;
          /**
           * Custom Install Url
           * Format: uri
           * @description Custom URL for installing the application, if set by the developer.
           * @default null
           */
          custom_install_url: string | null;
          /**
           * Description
           * @description Description of the application.
           */
          description: string;
          /**
           * Flags
           * @description Gateway intent flags for the application (bitwise value), indicating events the bot wishes to receive.
           */
          flags: number;
          /**
           * GuildId
           * @description Discord Guild (Server) ID.
           * @default null
           */
          guild_id: string | null;
          /**
           * Icon
           * @description Icon hash of the application; used to construct the icon URL.
           * @default null
           */
          icon: string | null;
          /**
           * Id
           * @description Unique ID of the application.
           */
          id: string;
          /**
           * InstallParams
           * @description Parameters for application installation, including OAuth2 scopes and permissions.
           * @default null
           */
          install_params: {
              /**
               * Permissions
               * @description Permissions (bitwise value string) requested for the bot during installation.
               */
              permissions: string;
              /**
               * Scopes
               * @description OAuth2 scopes requested during application installation.
               */
              scopes: Record<string, never>[];
          } | null;
          /**
           * Max Participants
           * @description Maximum participants for an activity in a voice channel, if supported.
           * @default null
           */
          max_participants: number | null;
          /**
           * Name
           * @description Name of the application.
           */
          name: string;
          /**
           * PrimarySkuId
           * @description Primary SKU ID of a game application sold on Discord.
           * @default null
           */
          primary_sku_id: string | null;
          /**
           * Privacy Policy Url
           * Format: uri
           * @description URL for the application's privacy policy.
           * @default null
           */
          privacy_policy_url: string | null;
          /**
           * Rpc Origins
           * @description Array of RPC origin URLs, if RPC is enabled.
           * @default null
           */
          rpc_origins: (string | null)[] | null;
          /**
           * Slug
           * @description URL slug for the application's game page in the Discord store, if it exists.
           * @default null
           */
          slug: string | null;
          /**
           * Tags
           * @description Tags describing the application, used for discovery in the app directory.
           * @default null
           */
          tags: string[] | null;
          /**
           * Terms Of Service Url
           * Format: uri
           * @description URL for the application's terms of service.
           * @default null
           */
          terms_of_service_url: string | null;
          /**
           * Type
           * @description Type of the application (e.g., for Rich Presence-enabled games).
           * @default null
           */
          type: number | null;
          /**
           * Verify Key
           * @description Hex encoded key for verifying incoming interactions from Discord.
           */
          verify_key: string;
      };
      /**
       * Expires
       * Format: date-time
       * @description Expiration date and time of the access token.
       */
      expires: string;
      /**
       * Scopes
       * @description Granted OAuth2 scopes (e.g., 'identify', 'guilds').
       */
      scopes: string[];
      /**
       * User
       * @description Discord user identity and profile information.
       * @default null
       */
      user: {
          /**
           * Accent Color
           * @description User's banner color (integer representation of hex; requires Discord Nitro).
           * @default null
           */
          accent_color: number | null;
          /**
           * Avatar
           * @description Avatar hash of the user; used to construct the avatar URL.
           * @default null
           */
          avatar: string | null;
          /**
           * Banner
           * @description Banner hash of the user; used to construct the banner URL (requires Discord Nitro).
           * @default null
           */
          banner: string | null;
          /**
           * Bot
           * @description Indicates if the user belongs to an OAuth2 application; false for regular users, true for bots.
           * @default null
           */
          bot: boolean | null;
          /**
           * Discriminator
           * @description The 4-digit discord-tag for the user (e.g., 0001); '0' for users on the new username system.
           */
          discriminator: string;
          /**
           * Flags
           * @description Flags on the user's account (bitwise value).
           */
          flags: number;
          /**
           * Global Name
           * @description User's display name, if set; primary name shown in Discord for users with a global name.
           * @default null
           */
          global_name: string | null;
          /**
           * Id
           * @description Unique ID of the user.
           */
          id: string;
          /**
           * Public Flags
           * @description Public flags on the user's account (bitwise value, e.g., HypeSquad affiliation).
           */
          public_flags: number;
          /**
           * System
           * @description Indicates if the user is an Official Discord System user (e.g., for system messages).
           * @default null
           */
          system: boolean | null;
          /**
           * Username
           * @description Username of the user.
           */
          username: string;
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
 * Type of DISCORD's DISCORD_GET_MY_USER tool input.
 */
type DISCORD_GET_MY_USER_INPUT = object;

/**
 * Type of DISCORD's DISCORD_GET_MY_USER tool output.
 */
type DISCORD_GET_MY_USER_OUTPUT = {
  /**
   * Data
   * @description Detailed profile information for the authenticated user.
   */
  data?: {
      /**
       * Accent Color
       * @description User's profile accent color (integer encoding of hex); null if not set.
       * @default null
       */
      accent_color: number | null;
      /**
       * Avatar
       * @description User's avatar hash; null if no custom avatar.
       * @default null
       */
      avatar: string | null;
      /**
       * Banner
       * @description User's profile banner hash; null if no banner.
       * @default null
       */
      banner: string | null;
      /**
       * Bot
       * @description Indicates if user is an OAuth2 application bot.
       * @default null
       */
      bot: boolean | null;
      /**
       * Discriminator
       * @description User's 4-digit discriminator tag (e.g., '1234'), used with username for a unique tag.
       */
      discriminator: string;
      /**
       * Email
       * @description User's email address; populated if 'email' scope granted.
       * @default null
       */
      email: string | null;
      /**
       * Flags
       * @description Bitfield for general account flags/settings.
       */
      flags: number;
      /**
       * Global Name
       * @description User's global display name; for bots, it's application's name. Null if not set.
       * @default null
       */
      global_name: string | null;
      /**
       * Id
       * @description The user's unique ID. Pattern: '^(0|[1-9][0-9]*)$'.
       */
      id: string;
      /**
       * Locale
       * @description User's language/regional settings (e.g., 'en-US').
       */
      locale: string;
      /**
       * Mfa Enabled
       * @description Indicates if multi-factor authentication is enabled.
       */
      mfa_enabled: boolean;
      /**
       * Premium Type
       * @description Nitro subscription type: 0 (None), 1 (Classic), 2 (Nitro), 3 (Basic). Null if none.
       * @default null
       */
      premium_type: number | null;
      /**
       * Public Flags
       * @description Bitfield for public flags (e.g., HypeSquad). See Discord API for meanings.
       */
      public_flags: number;
      /**
       * System
       * @description Indicates if user is an official Discord System user.
       * @default null
       */
      system: boolean | null;
      /**
       * Username
       * @description The user's username; use with discriminator for uniqueness.
       */
      username: string;
      /**
       * Verified
       * @description Indicates if user's email is verified.
       * @default null
       */
      verified: boolean | null;
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
 * Type of DISCORD's DISCORD_LIST_MY_CONNECTIONS tool input.
 */
type DISCORD_LIST_MY_CONNECTIONS_INPUT = object;

/**
 * Type of DISCORD's DISCORD_LIST_MY_CONNECTIONS tool output.
 */
type DISCORD_LIST_MY_CONNECTIONS_OUTPUT = {
  /**
   * Data
   * @description List of connection objects for the user's linked external accounts.
   */
  data?: {
      /**
       * Friend Sync
       * @description Whether friend synchronization is enabled for this connection.
       */
      friend_sync: boolean;
      /**
       * Id
       * @description Unique identifier of the connection.
       */
      id: string;
      /**
       * Integrations
       * @description Server integrations associated with this connection.
       * @default null
       */
      integrations: {
          /**
           * Account
           * @description Account details for this integration.
           */
          account: {
              /**
               * Id
               * @description Unique identifier of the connected account.
               */
              id: string;
              /**
               * Name
               * @description Name of the connected account (e.g., username).
               * @default null
               */
              name: string | null;
          };
          /**
           * Guild
           * @description Guild details for this integration.
           */
          guild: {
              /**
               * Icon
               * @description Icon hash of the guild, used to construct the guild's icon URL.
               * @default null
               */
              icon: string | null;
              /**
               * Id
               * @description Unique identifier of the guild (server) associated with an integration; a numerical string.
               */
              id: string;
              /**
               * Name
               * @description Name of the guild.
               */
              name: string;
          };
          /**
           * Id
           * @description Unique identifier for this integration.
           */
          id: string;
          /**
           * Type
           * @description Type of the integration (e.g., 'twitch', 'youtube').
           */
          type: string;
      }[] | null;
      /**
       * Name
       * @description Username of the account on the connected service.
       * @default null
       */
      name: string | null;
      /**
       * Revoked
       * @description Whether the connection has been revoked by the user.
       * @default null
       */
      revoked: boolean | null;
      /**
       * Show Activity
       * @description Whether activities from this connection are displayed on the user's profile.
       */
      show_activity: boolean;
      /**
       * Two Way Link
       * @description Whether this connection provides a two-way link.
       */
      two_way_link: boolean;
      /**
       * Type
       * @description Type of the connection service.
       */
      type: string;
      /**
       * Verified
       * @description Whether the connection has been verified by Discord.
       */
      verified: boolean;
      /**
       * Visibility
       * @description Visibility of this connection on the user's profile: 0 for not visible, 1 for visible.
       */
      visibility: number;
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
 * Type of DISCORD's DISCORD_LIST_MY_GUILDS tool input.
 */
type DISCORD_LIST_MY_GUILDS_INPUT = {
  /**
   * After
   * @description Get guilds after this guild ID.
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Get guilds before this guild ID.
   * @default null
   */
  before: string | null;
  /**
   * Limit
   * @description Max number of guilds to return (1-200, default 200).
   * @default null
   */
  limit: number | null;
  /**
   * With Counts
   * @description Include approximate member and presence counts for each guild (defaults to false).
   * @default null
   */
  with_counts: boolean | null;
};

/**
 * Type of DISCORD's DISCORD_LIST_MY_GUILDS tool output.
 */
type DISCORD_LIST_MY_GUILDS_OUTPUT = {
  /**
   * Data
   * @description A list of partial guild objects for the guilds the current user is a member of.
   */
  data?: {
      /**
       * Approximate Member Count
       * @description Approximate member count; included if `with_counts` is true in the request.
       * @default null
       */
      approximate_member_count: number | null;
      /**
       * Approximate Presence Count
       * @description Approximate online member count; included if `with_counts` is true in the request.
       * @default null
       */
      approximate_presence_count: number | null;
      /**
       * Features
       * @description List of enabled guild features (e.g., "COMMUNITY", "NEWS").
       */
      features: string[];
      /**
       * Icon
       * @description Icon hash of the guild; null if the guild has no icon.
       * @default null
       */
      icon: string | null;
      /**
       * Id
       * @description The unique snowflake ID of the guild.
       */
      id: string;
      /**
       * Name
       * @description The name of the guild.
       */
      name: string;
      /**
       * Owner
       * @description True if the current user is the owner of the guild.
       */
      owner: boolean;
      /**
       * Permissions
       * @description Current user's effective permissions in the guild (bitwise integer string).
       */
      permissions: string;
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
 * Type map of all available tool input types for toolkit "DISCORD".
 */
export type DISCORD_TOOL_INPUTS = {
  GET_INVITE: DISCORD_GET_INVITE_INPUT
  GET_MY_GUILD_MEMBER: DISCORD_GET_MY_GUILD_MEMBER_INPUT
  GET_MY_OAUTH2_AUTHORIZATION: DISCORD_GET_MY_OAUTH2_AUTHORIZATION_INPUT
  GET_MY_USER: DISCORD_GET_MY_USER_INPUT
  LIST_MY_CONNECTIONS: DISCORD_LIST_MY_CONNECTIONS_INPUT
  LIST_MY_GUILDS: DISCORD_LIST_MY_GUILDS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DISCORD".
 */
export type DISCORD_TOOL_OUTPUTS = {
  GET_INVITE: DISCORD_GET_INVITE_OUTPUT
  GET_MY_GUILD_MEMBER: DISCORD_GET_MY_GUILD_MEMBER_OUTPUT
  GET_MY_OAUTH2_AUTHORIZATION: DISCORD_GET_MY_OAUTH2_AUTHORIZATION_OUTPUT
  GET_MY_USER: DISCORD_GET_MY_USER_OUTPUT
  LIST_MY_CONNECTIONS: DISCORD_LIST_MY_CONNECTIONS_OUTPUT
  LIST_MY_GUILDS: DISCORD_LIST_MY_GUILDS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of DISCORD's NEW_MESSAGE_TRIGGER trigger payload.
 */
type DISCORD_NEW_MESSAGE_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of Discord message event
   * @default new_message
   */
  event_type: string;
  /**
   * Message
   * @description The Discord message that was created
   */
  message?: {
      /**
       * Author Id
       * @description User ID of the message author.
       * @default
       */
      author_id: string;
      /**
       * Channel Id
       * @description Which channel the message is in.
       */
      channel_id: string;
      /**
       * Content
       * @description The text content of the message.
       * @default
       */
      content: string;
      /**
       * Message Id
       * @description The ID of the message.
       */
      message_id: string;
      /**
       * Timestamp
       * @description ISO8601 timestamp of when the message was created.
       * @default
       */
      timestamp: string;
      /**
       * Username
       * @description Username of the message author.
       * @default
       */
      username: string;
  };
};

/**
 * Map of Composio's DISCORD toolkit.
 */
export const DISCORD = {
  slug: "discord",
  tools: {
    /**
     * Tool to retrieve information about a specific invite code. use when you need to get details about a guild or channel associated with an invite.
     */
    GET_INVITE: "DISCORD_GET_INVITE",
    /**
     * Retrieves the guild member object for the currently authenticated user within a specified guild, provided they are a member of that guild.
     */
    GET_MY_GUILD_MEMBER: "DISCORD_GET_MY_GUILD_MEMBER",
    /**
     * Retrieves current oauth2 authorization details for the application, including app info, scopes, token expiration, and user data (contingent on scopes like 'identify').
     */
    GET_MY_OAUTH2_AUTHORIZATION: "DISCORD_GET_MY_OAUTH2_AUTHORIZATION",
    /**
     * Fetches comprehensive profile information for the currently authenticated discord user, including email if the 'email' scope is granted.
     */
    GET_MY_USER: "DISCORD_GET_MY_USER",
    /**
     * Retrieves a list of the authenticated user's connected third-party accounts on discord.
     */
    LIST_MY_CONNECTIONS: "DISCORD_LIST_MY_CONNECTIONS",
    /**
     * Lists the current user's guilds, returning partial data for each; primarily used for displaying server lists or verifying memberships.
     */
    LIST_MY_GUILDS: "DISCORD_LIST_MY_GUILDS",
  },
  triggerTypes: {
    /**
     * Polls a specific Discord channel for new messages.
     */
    NEW_MESSAGE_TRIGGER: "DISCORD_NEW_MESSAGE_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "DISCORD".
 */
export type DISCORD_TRIGGER_PAYLOADS = {
  NEW_MESSAGE_TRIGGER: DISCORD_NEW_MESSAGE_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "DISCORD".
 */
export type DISCORD_TRIGGER_EVENTS = {
  NEW_MESSAGE_TRIGGER: TriggerEvent<DISCORD_NEW_MESSAGE_TRIGGER_PAYLOAD>
}
