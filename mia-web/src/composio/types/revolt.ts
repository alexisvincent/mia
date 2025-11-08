// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of REVOLT's REVOLT_FETCH_USER tool input.
 */
type REVOLT_FETCH_USER_INPUT = {
  /**
   * User Id
   * @description The ID of the user to fetch
   */
  user_id?: string;
};

/**
 * Type of REVOLT's REVOLT_FETCH_USER tool output.
 */
type REVOLT_FETCH_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Unique user ID
       */
      _id: string;
      /**
       * Avatar
       * @description Avatar object containing avatar file information.
       * @default null
       */
      avatar: {
          /**
           * Id
           * @description Avatar file ID
           */
          id: string;
          /**
           * Tag
           * @description Avatar tag
           */
          tag: string;
      } | null;
      /**
       * Badges
       * @description Bitfield of badge flags on the user
       */
      badges: number;
      /**
       * BotInfo
       * @description Bot information if the user is a bot account.
       * @default null
       */
      bot: {
          /**
           * Owner
           * @description Bot owner's user ID
           * @default null
           */
          owner: string | null;
      } | null;
      /**
       * Created At
       * @description Account creation timestamp (ISO8601)
       */
      createdAt: string;
      /**
       * Discriminator
       * @description 4-digit discriminator tag
       */
      discriminator: string;
      /**
       * Flags
       * @description Bitfield of user flags
       */
      flags: number;
      /**
       * Privileged
       * @description Whether the user has elevated privileges
       */
      privileged: boolean;
      /**
       * Profile
       * @description User profile metadata
       */
      profile: {
          /**
           * Background
           * @description Background asset ID
           * @default null
           */
          background: string | null;
          /**
           * Content
           * @description Profile bio/content
           * @default null
           */
          content: string | null;
      };
      /**
       * Relations
       * @description List of user relationships
       */
      relations: {
          /**
           *  Id
           * @description Relationship ID
           */
          _id: string;
          /**
           * Type
           * @description Type of the relationship (e.g., 'Friend')
           */
          type: string;
          /**
           * User
           * @description Related user ID
           */
          user: string;
      }[];
      /**
       * Status
       * @description User presence and status
       */
      status: {
          /**
           * Emote
           * @description Custom status emote ID
           * @default null
           */
          emote: string | null;
          /**
           * Presence
           * @description Online presence status
           * @default null
           */
          presence: string | null;
          /**
           * Text
           * @description Custom status text
           * @default null
           */
          text: string | null;
      };
      /**
       * Username
       * @description User's username
       */
      username: string;
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
 * Type of REVOLT's REVOLT_FETCH_USER_FLAGS tool input.
 */
type REVOLT_FETCH_USER_FLAGS_INPUT = {
  /**
   * User Id
   * @description The unique identifier of the user whose flags will be fetched
   */
  user_id?: string;
};

/**
 * Type of REVOLT's REVOLT_FETCH_USER_FLAGS tool output.
 */
type REVOLT_FETCH_USER_FLAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Flags
       * @description Integer bitfield representing flags for the specified user
       */
      flags: number;
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
 * Type of REVOLT's REVOLT_UPDATE_USER tool input.
 */
type REVOLT_UPDATE_USER_INPUT = {
  /**
   * Avatar
   * @description Avatar file ID to set as new avatar
   * @default null
   */
  avatar: string | null;
  /**
   * Clear
   * @description List of profile fields to clear
   * @default null
   */
  clear: string[] | null;
  /**
   * Profile Background
   * @description Profile background asset ID or base64 data
   * @default null
   */
  profile_background: string | null;
  /**
   * Profile Content
   * @description Profile content asset ID or base64 data
   * @default null
   */
  profile_content: string | null;
  /**
   * Status Text
   * @description New status text for the user
   * @default null
   */
  status_text: string | null;
  /**
   * User Id
   * @description The ID of the user to update
   */
  user_id?: string;
};

/**
 * Type of REVOLT's REVOLT_UPDATE_USER tool output.
 */
type REVOLT_UPDATE_USER_OUTPUT = {
  /**
   * Clear
   * @description Fields that were cleared
   */
  clear?: string[];
  /**
   * Data
   * @description Object containing updated user fields
   */
  data?: {
      /**
       * Avatar
       * @description Avatar file ID
       * @default null
       */
      avatar: string | null;
      /**
       * ProfileData
       * @description Profile data containing updated content and background.
       * @default null
       */
      profile: {
          /**
           * Background
           * @description Updated profile background asset ID or base64 data
           * @default null
           */
          background: string | null;
          /**
           * Content
           * @description Updated profile content asset ID or base64 data
           * @default null
           */
          content: string | null;
      } | null;
      /**
       * StatusData
       * @description Status data containing updated status text.
       * @default null
       */
      status: {
          /**
           * Text
           * @description Updated status text
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
   * Id
   * @description The ID of the user that was updated
   */
  id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Type
   * @description Event type, always 'UserUpdate'
   */
  type?: string;
};

/**
 * Type map of all available tool input types for toolkit "REVOLT".
 */
export type REVOLT_TOOL_INPUTS = {
  FETCH_USER: REVOLT_FETCH_USER_INPUT
  FETCH_USER_FLAGS: REVOLT_FETCH_USER_FLAGS_INPUT
  UPDATE_USER: REVOLT_UPDATE_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "REVOLT".
 */
export type REVOLT_TOOL_OUTPUTS = {
  FETCH_USER: REVOLT_FETCH_USER_OUTPUT
  FETCH_USER_FLAGS: REVOLT_FETCH_USER_FLAGS_OUTPUT
  UPDATE_USER: REVOLT_UPDATE_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's REVOLT toolkit.
 */
export const REVOLT = {
  slug: "revolt",
  tools: {
    /**
     * Tool to fetch detailed information about a user. use when you have a valid user id and need full account details. call after authenticating with bot token.
     */
    FETCH_USER: "REVOLT_FETCH_USER",
    /**
     * Tool to fetch flags associated with a specific user. use after obtaining the user id to inspect their special statuses or roles.
     */
    FETCH_USER_FLAGS: "REVOLT_FETCH_USER_FLAGS",
    /**
     * Tool to update user information. use when you need to modify user profile or status fields. call after authenticating with bot token.
     */
    UPDATE_USER: "REVOLT_UPDATE_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "REVOLT".
 */
export type REVOLT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "REVOLT".
 */
export type REVOLT_TRIGGER_EVENTS = {}
