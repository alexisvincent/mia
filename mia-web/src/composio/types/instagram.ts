// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of INSTAGRAM's INSTAGRAM_CREATE_CAROUSEL_CONTAINER tool input.
 */
type INSTAGRAM_CREATE_CAROUSEL_CONTAINER_INPUT = {
  /**
   * Caption
   * @default null
   */
  caption: string | null;
  /**
   * Children
   * @description List of child creation_ids (image/video items)
   */
  children?: string[];
  /**
   * Graph Api Version
   * @default v21.0
   */
  graph_api_version: string | null;
  /**
   * Ig User Id
   * @description Instagram Business Account ID
   */
  ig_user_id?: string;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_CREATE_CAROUSEL_CONTAINER tool output.
 */
type INSTAGRAM_CREATE_CAROUSEL_CONTAINER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Id */
      id: string;
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
 * Type of INSTAGRAM's INSTAGRAM_CREATE_MEDIA_CONTAINER tool input.
 */
type INSTAGRAM_CREATE_MEDIA_CONTAINER_INPUT = {
  /**
   * Caption
   * @description Post caption
   * @default null
   */
  caption: string | null;
  /**
   * Content Type
   * @description What you want to post: 'photo', 'video', 'reel', or 'carousel_item' (for carousel drafts)
   * @default null
   * @enum {string|null}
   */
  content_type: "photo" | "video" | "reel" | "carousel_item" | null;
  /**
   * Cover Url
   * @description Optional cover image URL for reels/videos
   * @default null
   */
  cover_url: string | null;
  /**
   * Graph Api Version
   * @default v21.0
   */
  graph_api_version: string | null;
  /**
   * Ig User Id
   * @description Instagram Business Account ID
   */
  ig_user_id?: string;
  /**
   * Image Url
   * @description Public URL of the image
   * @default null
   */
  image_url: string | null;
  /**
   * Is Carousel Item
   * @default null
   */
  is_carousel_item: boolean | null;
  /**
   * Media Type
   * @description Explicit media type override, e.g., REELS or CAROUSEL.
   * @default null
   */
  media_type: string | null;
  /**
   * Video Url
   * @description Public URL of the video
   * @default null
   */
  video_url: string | null;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_CREATE_MEDIA_CONTAINER tool output.
 */
type INSTAGRAM_CREATE_MEDIA_CONTAINER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Creation (container) ID
       */
      id: string;
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
 * Type of INSTAGRAM's INSTAGRAM_CREATE_POST tool input.
 */
type INSTAGRAM_CREATE_POST_INPUT = {
  /**
   * Creation Id
   * @description Draft ID returned from create actions
   */
  creation_id?: string;
  /**
   * Graph Api Version
   * @default v21.0
   */
  graph_api_version: string | null;
  /**
   * Ig User Id
   * @description Instagram Business Account ID
   */
  ig_user_id?: string;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_CREATE_POST tool output.
 */
type INSTAGRAM_CREATE_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Published media id
       */
      id: string;
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
 * Type of INSTAGRAM's INSTAGRAM_GET_CONVERSATION tool input.
 */
type INSTAGRAM_GET_CONVERSATION_INPUT = {
  /**
   * Conversation Id
   * @description Conversation ID
   */
  conversation_id?: string;
  /**
   * Graph Api Version
   * @default v21.0
   */
  graph_api_version: string | null;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_GET_CONVERSATION tool output.
 */
type INSTAGRAM_GET_CONVERSATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Id */
      id: string;
      /** Participants */
      participants?: {
          /** Id */
          id: string;
          /**
           * Name
           * @default null
           */
          name: string | null;
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
 * Type of INSTAGRAM's INSTAGRAM_GET_POST_COMMENTS tool input.
 */
type INSTAGRAM_GET_POST_COMMENTS_INPUT = {
  /**
   * After
   * @description Cursor for pagination - get comments after this cursor
   * @default null
   */
  after: string | null;
  /**
   * Graph Api Version
   * @default v21.0
   */
  graph_api_version: string | null;
  /**
   * Ig Post Id
   * @description Instagram Post ID
   */
  ig_post_id?: string;
  /**
   * Limit
   * @description Number of comments to return (max 100)
   * @default 25
   */
  limit: number | null;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_GET_POST_COMMENTS tool output.
 */
type INSTAGRAM_GET_POST_COMMENTS_OUTPUT = {
  /** Data */
  data?: {
      /**
       * From User
       * @default null
       */
      from_user: {
          [key: string]: unknown;
      } | null;
      /**
       * Hidden
       * @default null
       */
      hidden: boolean | null;
      /** Id */
      id: string;
      /**
       * Like Count
       * @default null
       */
      like_count: number | null;
      /**
       * Replies
       * @default null
       */
      replies: {
          [key: string]: unknown;
      } | null;
      /**
       * Text
       * @default null
       */
      text: string | null;
      /**
       * Timestamp
       * @default null
       */
      timestamp: string | null;
      /**
       * Username
       * @default null
       */
      username: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Paging
   * @default null
   */
  paging: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Summary
   * @default null
   */
  summary: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_GET_POST_INSIGHTS tool input.
 */
type INSTAGRAM_GET_POST_INSIGHTS_INPUT = {
  /**
   * Graph Api Version
   * @default v21.0
   */
  graph_api_version: string | null;
  /**
   * Ig Post Id
   * @description Instagram Post ID
   */
  ig_post_id?: string;
  /**
   * Metric
   * @description Metrics to retrieve for the media
   */
  metric?: string[] | null;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_GET_POST_INSIGHTS tool output.
 */
type INSTAGRAM_GET_POST_INSIGHTS_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @default null
       */
      id: string | null;
      /** Name */
      name: string;
      /**
       * Period
       * @default null
       */
      period: string | null;
      /**
       * Title
       * @default null
       */
      title: string | null;
      /** Values */
      values?: {
          [key: string]: unknown;
      }[];
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Paging
   * @default null
   */
  paging: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_GET_POST_STATUS tool input.
 */
type INSTAGRAM_GET_POST_STATUS_INPUT = {
  /**
   * Creation Id
   * @description Post container creation id
   */
  creation_id?: string;
  /**
   * Graph Api Version
   * @default v21.0
   */
  graph_api_version: string | null;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_GET_POST_STATUS tool output.
 */
type INSTAGRAM_GET_POST_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @default null
       */
      id: string | null;
      /** Status Code */
      status_code: string;
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
 * Type of INSTAGRAM's INSTAGRAM_GET_USER_INFO tool input.
 */
type INSTAGRAM_GET_USER_INFO_INPUT = {
  /**
   * Graph Api Version
   * @default v21.0
   */
  graph_api_version: string | null;
  /**
   * Ig User Id
   * @description Instagram Business Account ID (optional, defaults to current user)
   * @default null
   */
  ig_user_id: string | null;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_GET_USER_INFO tool output.
 */
type INSTAGRAM_GET_USER_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Type
       * @default null
       */
      account_type: string | null;
      /**
       * Biography
       * @default null
       */
      biography: string | null;
      /**
       * Followers Count
       * @default null
       */
      followers_count: number | null;
      /**
       * Follows Count
       * @default null
       */
      follows_count: number | null;
      /**
       * Id
       * @default null
       */
      id: string | null;
      /**
       * Media Count
       * @default null
       */
      media_count: number | null;
      /**
       * Profile Picture Url
       * @default null
       */
      profile_picture_url: string | null;
      /**
       * Username
       * @default null
       */
      username: string | null;
      /**
       * Website
       * @default null
       */
      website: string | null;
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
 * Type of INSTAGRAM's INSTAGRAM_GET_USER_INSIGHTS tool input.
 */
type INSTAGRAM_GET_USER_INSIGHTS_INPUT = {
  /**
   * Graph Api Version
   * @default v21.0
   */
  graph_api_version: string | null;
  /**
   * Ig User Id
   * @description Instagram Business Account ID (optional, defaults to current user)
   * @default null
   */
  ig_user_id: string | null;
  /**
   * Metric
   * @description Metrics to retrieve for the user account
   */
  metric?: string[] | null;
  /**
   * Period
   * @description Time period for insights (day, week, days_28)
   * @default day
   */
  period: string | null;
  /**
   * Since
   * @description Start date for insights (YYYY-MM-DD format)
   * @default null
   */
  since: string | null;
  /**
   * Until
   * @description End date for insights (YYYY-MM-DD format)
   * @default null
   */
  until: string | null;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_GET_USER_INSIGHTS tool output.
 */
type INSTAGRAM_GET_USER_INSIGHTS_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @default null
       */
      id: string | null;
      /** Name */
      name: string;
      /**
       * Period
       * @default null
       */
      period: string | null;
      /**
       * Title
       * @default null
       */
      title: string | null;
      /** Values */
      values?: {
          [key: string]: unknown;
      }[];
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Paging
   * @default null
   */
  paging: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_GET_USER_MEDIA tool input.
 */
type INSTAGRAM_GET_USER_MEDIA_INPUT = {
  /**
   * After
   * @description Cursor for pagination - get media after this cursor
   * @default null
   */
  after: string | null;
  /**
   * Graph Api Version
   * @default v21.0
   */
  graph_api_version: string | null;
  /**
   * Ig User Id
   * @description Instagram Business Account ID (optional, defaults to current user)
   * @default null
   */
  ig_user_id: string | null;
  /**
   * Limit
   * @description Number of media items to return (max 100)
   * @default 25
   */
  limit: number | null;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_GET_USER_MEDIA tool output.
 */
type INSTAGRAM_GET_USER_MEDIA_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Caption
       * @default null
       */
      caption: string | null;
      /**
       * Comments Count
       * @default null
       */
      comments_count: number | null;
      /** Id */
      id: string;
      /**
       * Like Count
       * @default null
       */
      like_count: number | null;
      /**
       * Media Type
       * @default null
       */
      media_type: string | null;
      /**
       * Media Url
       * @default null
       */
      media_url: string | null;
      /**
       * Permalink
       * @default null
       */
      permalink: string | null;
      /**
       * Thumbnail Url
       * @default null
       */
      thumbnail_url: string | null;
      /**
       * Timestamp
       * @default null
       */
      timestamp: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Paging
   * @default null
   */
  paging: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_LIST_ALL_CONVERSATIONS tool input.
 */
type INSTAGRAM_LIST_ALL_CONVERSATIONS_INPUT = {
  /**
   * After
   * @description Cursor for pagination
   * @default null
   */
  after: string | null;
  /**
   * Graph Api Version
   * @default v21.0
   */
  graph_api_version: string | null;
  /**
   * Ig User Id
   * @description Instagram Business Account ID (optional for /me/conversations)
   * @default null
   */
  ig_user_id: string | null;
  /**
   * Limit
   * @default 25
   */
  limit: number | null;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_LIST_ALL_CONVERSATIONS tool output.
 */
type INSTAGRAM_LIST_ALL_CONVERSATIONS_OUTPUT = {
  /** Data */
  data?: {
      /** Id */
      id: string;
      /**
       * Link
       * @default null
       */
      link: string | null;
      /**
       * Participants
       * @default null
       */
      participants: unknown;
      /**
       * Updated Time
       * @default null
       */
      updated_time: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Paging
   * @default null
   */
  paging: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_LIST_ALL_MESSAGES tool input.
 */
type INSTAGRAM_LIST_ALL_MESSAGES_INPUT = {
  /**
   * After
   * @description Cursor for pagination
   * @default null
   */
  after: string | null;
  /**
   * Conversation Id
   * @description Conversation ID
   */
  conversation_id?: string;
  /**
   * Graph Api Version
   * @default v21.0
   */
  graph_api_version: string | null;
  /**
   * Limit
   * @default 25
   */
  limit: number | null;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_LIST_ALL_MESSAGES tool output.
 */
type INSTAGRAM_LIST_ALL_MESSAGES_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Attachments
       * @default null
       */
      attachments: unknown;
      /**
       * Created Time
       * @default null
       */
      created_time: string | null;
      /**
       * From
       * @description Sender
       * @default null
       */
      from: {
          [key: string]: unknown;
      } | null;
      /** Id */
      id: string;
      /**
       * Message
       * @default null
       */
      message: string | null;
      /**
       * To
       * @default null
       */
      to: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Paging
   * @default null
   */
  paging: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_MARK_SEEN tool input.
 */
type INSTAGRAM_MARK_SEEN_INPUT = {
  /**
   * Graph Api Version
   * @default v21.0
   */
  graph_api_version: string | null;
  /**
   * Recipient Id
   * @description Recipient PSID
   */
  recipient_id?: string;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_MARK_SEEN tool output.
 */
type INSTAGRAM_MARK_SEEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @default true
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
 * Type of INSTAGRAM's INSTAGRAM_REPLY_TO_COMMENT tool input.
 */
type INSTAGRAM_REPLY_TO_COMMENT_INPUT = {
  /**
   * Graph Api Version
   * @default v21.0
   */
  graph_api_version: string | null;
  /**
   * Ig Comment Id
   * @description Instagram Comment ID to reply to
   */
  ig_comment_id?: string;
  /**
   * Message
   * @description Reply message text
   */
  message?: string;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_REPLY_TO_COMMENT tool output.
 */
type INSTAGRAM_REPLY_TO_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @default null
       */
      id: string | null;
      /**
       * Success
       * @default false
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
 * Type of INSTAGRAM's INSTAGRAM_SEND_IMAGE tool input.
 */
type INSTAGRAM_SEND_IMAGE_INPUT = {
  /**
   * Caption
   * @default null
   */
  caption: string | null;
  /**
   * Graph Api Version
   * @default v21.0
   */
  graph_api_version: string | null;
  /**
   * Image Url
   * @description Publicly accessible image URL
   */
  image_url?: string;
  /**
   * Recipient Id
   * @description Recipient PSID
   */
  recipient_id?: string;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_SEND_IMAGE tool output.
 */
type INSTAGRAM_SEND_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @default true
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
 * Type of INSTAGRAM's INSTAGRAM_SEND_TEXT_MESSAGE tool input.
 */
type INSTAGRAM_SEND_TEXT_MESSAGE_INPUT = {
  /**
   * Graph Api Version
   * @description Instagram Graph API version
   * @default v21.0
   */
  graph_api_version: string | null;
  /**
   * Ig User Id
   * @description Instagram Business Account ID (optional when using /me/messages)
   * @default null
   */
  ig_user_id: string | null;
  /**
   * Recipient Id
   * @description Recipient PSID (Instagram-scoped ID)
   */
  recipient_id?: string;
  /**
   * Reply To Message Id
   * @description Optional message ID to reply to
   * @default null
   */
  reply_to_message_id: string | null;
  /**
   * Text
   * @description Message text to send
   */
  text?: string;
};

/**
 * Type of INSTAGRAM's INSTAGRAM_SEND_TEXT_MESSAGE tool output.
 */
type INSTAGRAM_SEND_TEXT_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message Id
       * @description ID of the created message if available
       * @default null
       */
      message_id: string | null;
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
 * Type map of all available tool input types for toolkit "INSTAGRAM".
 */
export type INSTAGRAM_TOOL_INPUTS = {
  CREATE_CAROUSEL_CONTAINER: INSTAGRAM_CREATE_CAROUSEL_CONTAINER_INPUT
  CREATE_MEDIA_CONTAINER: INSTAGRAM_CREATE_MEDIA_CONTAINER_INPUT
  CREATE_POST: INSTAGRAM_CREATE_POST_INPUT
  GET_CONVERSATION: INSTAGRAM_GET_CONVERSATION_INPUT
  GET_POST_COMMENTS: INSTAGRAM_GET_POST_COMMENTS_INPUT
  GET_POST_INSIGHTS: INSTAGRAM_GET_POST_INSIGHTS_INPUT
  GET_POST_STATUS: INSTAGRAM_GET_POST_STATUS_INPUT
  GET_USER_INFO: INSTAGRAM_GET_USER_INFO_INPUT
  GET_USER_INSIGHTS: INSTAGRAM_GET_USER_INSIGHTS_INPUT
  GET_USER_MEDIA: INSTAGRAM_GET_USER_MEDIA_INPUT
  LIST_ALL_CONVERSATIONS: INSTAGRAM_LIST_ALL_CONVERSATIONS_INPUT
  LIST_ALL_MESSAGES: INSTAGRAM_LIST_ALL_MESSAGES_INPUT
  MARK_SEEN: INSTAGRAM_MARK_SEEN_INPUT
  REPLY_TO_COMMENT: INSTAGRAM_REPLY_TO_COMMENT_INPUT
  SEND_IMAGE: INSTAGRAM_SEND_IMAGE_INPUT
  SEND_TEXT_MESSAGE: INSTAGRAM_SEND_TEXT_MESSAGE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "INSTAGRAM".
 */
export type INSTAGRAM_TOOL_OUTPUTS = {
  CREATE_CAROUSEL_CONTAINER: INSTAGRAM_CREATE_CAROUSEL_CONTAINER_OUTPUT
  CREATE_MEDIA_CONTAINER: INSTAGRAM_CREATE_MEDIA_CONTAINER_OUTPUT
  CREATE_POST: INSTAGRAM_CREATE_POST_OUTPUT
  GET_CONVERSATION: INSTAGRAM_GET_CONVERSATION_OUTPUT
  GET_POST_COMMENTS: INSTAGRAM_GET_POST_COMMENTS_OUTPUT
  GET_POST_INSIGHTS: INSTAGRAM_GET_POST_INSIGHTS_OUTPUT
  GET_POST_STATUS: INSTAGRAM_GET_POST_STATUS_OUTPUT
  GET_USER_INFO: INSTAGRAM_GET_USER_INFO_OUTPUT
  GET_USER_INSIGHTS: INSTAGRAM_GET_USER_INSIGHTS_OUTPUT
  GET_USER_MEDIA: INSTAGRAM_GET_USER_MEDIA_OUTPUT
  LIST_ALL_CONVERSATIONS: INSTAGRAM_LIST_ALL_CONVERSATIONS_OUTPUT
  LIST_ALL_MESSAGES: INSTAGRAM_LIST_ALL_MESSAGES_OUTPUT
  MARK_SEEN: INSTAGRAM_MARK_SEEN_OUTPUT
  REPLY_TO_COMMENT: INSTAGRAM_REPLY_TO_COMMENT_OUTPUT
  SEND_IMAGE: INSTAGRAM_SEND_IMAGE_OUTPUT
  SEND_TEXT_MESSAGE: INSTAGRAM_SEND_TEXT_MESSAGE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's INSTAGRAM toolkit.
 */
export const INSTAGRAM = {
  slug: "instagram",
  tools: {
    /**
     * Create a draft carousel post with multiple images/videos before publishing.
     */
    CREATE_CAROUSEL_CONTAINER: "INSTAGRAM_CREATE_CAROUSEL_CONTAINER",
    /**
     * Create a draft media container for photos/videos/reels before publishing.
     */
    CREATE_MEDIA_CONTAINER: "INSTAGRAM_CREATE_MEDIA_CONTAINER",
    /**
     * Publish a draft media container to instagram (final publishing step).
     */
    CREATE_POST: "INSTAGRAM_CREATE_POST",
    /**
     * Get details about a specific instagram dm conversation (participants, etc).
     */
    GET_CONVERSATION: "INSTAGRAM_GET_CONVERSATION",
    /**
     * Get comments on an instagram post.
     */
    GET_POST_COMMENTS: "INSTAGRAM_GET_POST_COMMENTS",
    /**
     * Get instagram post insights/analytics (impressions, reach, engagement, etc.).
     */
    GET_POST_INSIGHTS: "INSTAGRAM_GET_POST_INSIGHTS",
    /**
     * Check the processing status of a draft post container.
     */
    GET_POST_STATUS: "INSTAGRAM_GET_POST_STATUS",
    /**
     * Get instagram user info including profile details and statistics.
     */
    GET_USER_INFO: "INSTAGRAM_GET_USER_INFO",
    /**
     * Get instagram account-level insights/analytics (profile views, reach, impressions, etc.).
     */
    GET_USER_INSIGHTS: "INSTAGRAM_GET_USER_INSIGHTS",
    /**
     * Get instagram user's media (posts, photos, videos).
     */
    GET_USER_MEDIA: "INSTAGRAM_GET_USER_MEDIA",
    /**
     * List all instagram dm conversations for the authenticated user.
     */
    LIST_ALL_CONVERSATIONS: "INSTAGRAM_LIST_ALL_CONVERSATIONS",
    /**
     * List all messages from a specific instagram dm conversation.
     */
    LIST_ALL_MESSAGES: "INSTAGRAM_LIST_ALL_MESSAGES",
    /**
     * Mark instagram dm messages as read/seen for a specific user.
     */
    MARK_SEEN: "INSTAGRAM_MARK_SEEN",
    /**
     * Reply to a comment on instagram media.
     */
    REPLY_TO_COMMENT: "INSTAGRAM_REPLY_TO_COMMENT",
    /**
     * Send an image via instagram dm to a specific user.
     */
    SEND_IMAGE: "INSTAGRAM_SEND_IMAGE",
    /**
     * Send a text message to an instagram user via dm.
     */
    SEND_TEXT_MESSAGE: "INSTAGRAM_SEND_TEXT_MESSAGE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "INSTAGRAM".
 */
export type INSTAGRAM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "INSTAGRAM".
 */
export type INSTAGRAM_TRIGGER_EVENTS = {}
