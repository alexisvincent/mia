// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FACEBOOK's FACEBOOK_ADD_PHOTOS_TO_ALBUM tool input.
 */
type FACEBOOK_ADD_PHOTOS_TO_ALBUM_INPUT = {
  /**
   * Album Id
   * @description The ID of the album to add photos to
   */
  album_id?: string;
  /**
   * Photo Urls
   * @description List of photo URLs to add to the album (alternative to 'photos')
   * @default null
   */
  photo_urls: string[] | null;
  /**
   * Photos
   * @description List of local photo files to add (alternative to 'photo_urls')
   * @default null
   */
  photos: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  }[] | null;
  /**
   * Published
   * @description Whether to publish the photos immediately
   * @default true
   */
  published: boolean;
};

/**
 * Type of FACEBOOK's FACEBOOK_ADD_PHOTOS_TO_ALBUM tool output.
 */
type FACEBOOK_ADD_PHOTOS_TO_ALBUM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing the added photo IDs
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_ADD_REACTION tool input.
 */
type FACEBOOK_ADD_REACTION_INPUT = {
  /**
   * Object Id
   * @description The ID of the post or comment to react to
   */
  object_id?: string;
  /**
   * Type
   * @description Reaction type: LIKE, LOVE, WOW, HAHA, SAD, ANGRY, THANKFUL
   * @default LIKE
   */
  type: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_ADD_REACTION tool output.
 */
type FACEBOOK_ADD_REACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from adding the reaction
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_ASSIGN_PAGE_TASK tool input.
 */
type FACEBOOK_ASSIGN_PAGE_TASK_INPUT = {
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
  /**
   * Tasks
   * @description List of tasks to assign (e.g., ['MANAGE', 'CREATE_CONTENT', 'MODERATE'])
   */
  tasks?: string[];
  /**
   * User
   * @description The ID or username of the user to assign tasks to
   */
  user?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_ASSIGN_PAGE_TASK tool output.
 */
type FACEBOOK_ASSIGN_PAGE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from the task assignment
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_CREATE_COMMENT tool input.
 */
type FACEBOOK_CREATE_COMMENT_INPUT = {
  /**
   * Attachment Id
   * @description ID of an unpublished photo to attach to the comment
   * @default null
   */
  attachment_id: string | null;
  /**
   * Attachment Share Url
   * @description URL of a GIF to attach to the comment
   * @default null
   */
  attachment_share_url: string | null;
  /**
   * Attachment Url
   * @description URL of a photo to attach to the comment
   * @default null
   */
  attachment_url: string | null;
  /**
   * Message
   * @description The text content of the comment
   */
  message?: string;
  /**
   * Object Id
   * @description The ID of the post or comment to comment on
   */
  object_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_CREATE_COMMENT tool output.
 */
type FACEBOOK_CREATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing the created comment ID
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_CREATE_PHOTO_ALBUM tool input.
 */
type FACEBOOK_CREATE_PHOTO_ALBUM_INPUT = {
  /**
   * Location
   * @description Location associated with the album
   * @default null
   */
  location: string | null;
  /**
   * Message
   * @description Description of the album
   * @default null
   */
  message: string | null;
  /**
   * Name
   * @description Name of the photo album
   */
  name?: string;
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
  /**
   * Privacy
   * @description Privacy settings for the album
   * @default null
   */
  privacy: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of FACEBOOK's FACEBOOK_CREATE_PHOTO_ALBUM tool output.
 */
type FACEBOOK_CREATE_PHOTO_ALBUM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing the created album ID
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_CREATE_PHOTO_POST tool input.
 */
type FACEBOOK_CREATE_PHOTO_POST_INPUT = {
  /**
   * Backdated Time
   * @description Unix timestamp to backdate the post
   * @default null
   */
  backdated_time: number | null;
  /**
   * Backdated Time Granularity
   * @description Granularity of backdated time: year, month, day, hour, or min
   * @default null
   */
  backdated_time_granularity: string | null;
  /**
   * Message
   * @description Caption text for the photo
   * @default null
   */
  message: string | null;
  /**
   * Page Id
   * @description The ID of the Facebook Page to post to
   */
  page_id?: string;
  /**
   * FileUploadable
   * @description Local photo file to upload (alternative to 'url')
   * @default null
   */
  photo: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  } | null;
  /**
   * Published
   * @description Set to true to publish immediately, false to save as unpublished
   * @default true
   */
  published: boolean;
  /**
   * Scheduled Publish Time
   * @description Unix timestamp for scheduled posts (required if published=false)
   * @default null
   */
  scheduled_publish_time: number | null;
  /**
   * Url
   * @description URL of the photo to upload (alternative to 'photo')
   * @default null
   */
  url: string | null;
};

/**
 * Type of FACEBOOK's FACEBOOK_CREATE_PHOTO_POST tool output.
 */
type FACEBOOK_CREATE_PHOTO_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing the created photo post ID
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_CREATE_POST tool input.
 */
type FACEBOOK_CREATE_POST_INPUT = {
  /**
   * Link
   * @description URL to include in the post
   * @default null
   */
  link: string | null;
  /**
   * Message
   * @description The text content of the post
   */
  message?: string;
  /**
   * Page Id
   * @description The ID of the Facebook Page to post to
   */
  page_id?: string;
  /**
   * Published
   * @description Set to true to publish immediately, false to save as draft or schedule
   * @default true
   */
  published: boolean;
  /**
   * Scheduled Publish Time
   * @description Unix timestamp for scheduled posts (required if published=false)
   * @default null
   */
  scheduled_publish_time: number | null;
  /**
   * Targeting
   * @description Audience targeting specifications
   * @default null
   */
  targeting: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of FACEBOOK's FACEBOOK_CREATE_POST tool output.
 */
type FACEBOOK_CREATE_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing the created post ID
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_CREATE_VIDEO_POST tool input.
 */
type FACEBOOK_CREATE_VIDEO_POST_INPUT = {
  /**
   * Description
   * @description Description of the video
   * @default null
   */
  description: string | null;
  /**
   * File Url
   * @description URL of the video file to upload (alternative to 'video')
   * @default null
   */
  file_url: string | null;
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
  /**
   * Published
   * @description Whether to publish immediately
   * @default true
   */
  published: boolean;
  /**
   * Scheduled Publish Time
   * @description Unix timestamp to schedule the video post
   * @default null
   */
  scheduled_publish_time: number | null;
  /**
   * Targeting
   * @description Audience targeting specifications
   * @default null
   */
  targeting: {
      [key: string]: unknown;
  } | null;
  /**
   * Title
   * @description Title of the video
   * @default null
   */
  title: string | null;
  /**
   * FileUploadable
   * @description Local video file to upload (alternative to 'file_url')
   * @default null
   */
  video: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  } | null;
};

/**
 * Type of FACEBOOK's FACEBOOK_CREATE_VIDEO_POST tool output.
 */
type FACEBOOK_CREATE_VIDEO_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing the video post ID
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_DELETE_COMMENT tool input.
 */
type FACEBOOK_DELETE_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment to delete
   */
  comment_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_DELETE_COMMENT tool output.
 */
type FACEBOOK_DELETE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from the deletion operation
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_DELETE_POST tool input.
 */
type FACEBOOK_DELETE_POST_INPUT = {
  /**
   * Post Id
   * @description The ID of the post to delete
   */
  post_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_DELETE_POST tool output.
 */
type FACEBOOK_DELETE_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from the deletion operation
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_COMMENT tool input.
 */
type FACEBOOK_GET_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment to retrieve
   */
  comment_id?: string;
  /**
   * Fields
   * @description Comma-separated list of fields to return
   * @default id,message,created_time,from,attachment,comment_count,like_count,is_hidden,parent
   */
  fields: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_COMMENT tool output.
 */
type FACEBOOK_GET_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing comment details
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_COMMENTS tool input.
 */
type FACEBOOK_GET_COMMENTS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to return for each comment
   * @default id,message,created_time,from,attachment,comment_count,like_count,is_hidden
   */
  fields: string;
  /**
   * Filter
   * @description Filter comments by type: stream (default) or toplevel
   * @default null
   */
  filter: string | null;
  /**
   * Limit
   * @description Number of comments to return (max 100)
   * @default 25
   */
  limit: number;
  /**
   * Object Id
   * @description The ID of the post or comment to get comments from
   */
  object_id?: string;
  /**
   * Order
   * @description Order of comments: chronological (oldest first) or reverse_chronological (newest first)
   * @default null
   */
  order: string | null;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_COMMENTS tool output.
 */
type FACEBOOK_GET_COMMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing list of comments
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_CONVERSATION_MESSAGES tool input.
 */
type FACEBOOK_GET_CONVERSATION_MESSAGES_INPUT = {
  /**
   * Conversation Id
   * @description The ID of the conversation
   */
  conversation_id?: string;
  /**
   * Fields
   * @description Fields to return for messages in the conversation
   * @default messages{id,created_time,from,to,message}
   */
  fields: string;
  /**
   * Limit
   * @description Number of messages to return (max 25)
   * @default 25
   */
  limit: number;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_CONVERSATION_MESSAGES tool output.
 */
type FACEBOOK_GET_CONVERSATION_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing messages in the conversation
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_MESSAGE_DETAILS tool input.
 */
type FACEBOOK_GET_MESSAGE_DETAILS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to return
   * @default id,created_time,from,to,message
   */
  fields: string;
  /**
   * Message Id
   * @description The ID of the message to retrieve details for
   */
  message_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_MESSAGE_DETAILS tool output.
 */
type FACEBOOK_GET_MESSAGE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing message details
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_PAGE_CONVERSATIONS tool input.
 */
type FACEBOOK_GET_PAGE_CONVERSATIONS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to return for each conversation
   * @default participants,updated_time,id
   */
  fields: string;
  /**
   * Limit
   * @description Number of conversations to return (max 25)
   * @default 25
   */
  limit: number;
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_PAGE_CONVERSATIONS tool output.
 */
type FACEBOOK_GET_PAGE_CONVERSATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing list of page conversations
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_PAGE_DETAILS tool input.
 */
type FACEBOOK_GET_PAGE_DETAILS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to return
   * @default id,name,about,category,description,fan_count,followers_count,website
   */
  fields: string;
  /**
   * Page Id
   * @description The ID of the Facebook Page to get details for
   */
  page_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_PAGE_DETAILS tool output.
 */
type FACEBOOK_GET_PAGE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing page details
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_PAGE_INSIGHTS tool input.
 */
type FACEBOOK_GET_PAGE_INSIGHTS_INPUT = {
  /**
   * Metrics
   * @description Comma-separated list of metrics to retrieve
   * @default page_impressions,page_engaged_users,page_fans,page_fan_adds,page_fan_removes,page_views_total,page_posts_impressions,page_actions_post_reactions_total
   */
  metrics: string;
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
  /**
   * Period
   * @description Period for the metrics: day, week, days_28, month, lifetime
   * @default day
   */
  period: string | null;
  /**
   * Since
   * @description Unix timestamp or strtotime date for the start of the range
   * @default null
   */
  since: string | null;
  /**
   * Until
   * @description Unix timestamp or strtotime date for the end of the range
   * @default null
   */
  until: string | null;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_PAGE_INSIGHTS tool output.
 */
type FACEBOOK_GET_PAGE_INSIGHTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing page insights data
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_PAGE_PHOTOS tool input.
 */
type FACEBOOK_GET_PAGE_PHOTOS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to return for each photo
   * @default id,created_time,name,picture,source,album,height,width,link
   */
  fields: string;
  /**
   * Limit
   * @description Number of photos to return (max 100)
   * @default 25
   */
  limit: number;
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
  /**
   * Type
   * @description Filter by photo type: uploaded, tagged
   * @default null
   */
  type: string | null;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_PAGE_PHOTOS tool output.
 */
type FACEBOOK_GET_PAGE_PHOTOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing page photos
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_PAGE_POSTS tool input.
 */
type FACEBOOK_GET_PAGE_POSTS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to return for each post
   * @default id,message,created_time,updated_time,permalink_url,attachments
   */
  fields: string;
  /**
   * Limit
   * @description Number of posts to return (max 100)
   * @default 25
   */
  limit: number;
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
  /**
   * Since
   * @description Unix timestamp or strtotime data value to filter posts created after this time
   * @default null
   */
  since: string | null;
  /**
   * Until
   * @description Unix timestamp or strtotime data value to filter posts created before this time
   * @default null
   */
  until: string | null;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_PAGE_POSTS tool output.
 */
type FACEBOOK_GET_PAGE_POSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing list of page posts
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_PAGE_ROLES tool input.
 */
type FACEBOOK_GET_PAGE_ROLES_INPUT = {
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_PAGE_ROLES tool output.
 */
type FACEBOOK_GET_PAGE_ROLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing page roles
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_PAGE_VIDEOS tool input.
 */
type FACEBOOK_GET_PAGE_VIDEOS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to return for each video
   * @default id,created_time,description,title,length,source,picture,views,likes.summary(true)
   */
  fields: string;
  /**
   * Limit
   * @description Number of videos to return (max 100)
   * @default 25
   */
  limit: number;
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
  /**
   * Type
   * @description Filter by video type: uploaded, tagged
   * @default null
   */
  type: string | null;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_PAGE_VIDEOS tool output.
 */
type FACEBOOK_GET_PAGE_VIDEOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing page videos
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_POST tool input.
 */
type FACEBOOK_GET_POST_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to return
   * @default id,message,created_time,updated_time,permalink_url,from,attachments,likes.summary(true),shares
   */
  fields: string;
  /**
   * Post Id
   * @description The ID of the post to retrieve
   */
  post_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_POST tool output.
 */
type FACEBOOK_GET_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing post details
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_POST_INSIGHTS tool input.
 */
type FACEBOOK_GET_POST_INSIGHTS_INPUT = {
  /**
   * Metrics
   * @description Comma-separated list of metrics to retrieve
   * @default post_impressions,post_engaged_users,post_clicks,post_reactions_by_type_total,post_engaged_fan,post_video_views,post_video_avg_time_watched
   */
  metrics: string;
  /**
   * Period
   * @description Period for the metrics (only applicable for some metrics): lifetime
   * @default null
   */
  period: string | null;
  /**
   * Post Id
   * @description The ID of the post to get insights for
   */
  post_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_POST_INSIGHTS tool output.
 */
type FACEBOOK_GET_POST_INSIGHTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing post insights data
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_POST_REACTIONS tool input.
 */
type FACEBOOK_GET_POST_REACTIONS_INPUT = {
  /**
   * Limit
   * @description Number of reactions to return (max 100)
   * @default 25
   */
  limit: number;
  /**
   * Post Id
   * @description The ID of the post to get reactions for
   */
  post_id?: string;
  /**
   * Summary
   * @description Include summary with total count per reaction type
   * @default true
   */
  summary: boolean;
  /**
   * Type
   * @description Filter by reaction type: LIKE, LOVE, WOW, HAHA, SAD, ANGRY, THANKFUL
   * @default null
   */
  type: string | null;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_POST_REACTIONS tool output.
 */
type FACEBOOK_GET_POST_REACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing reactions data
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_SCHEDULED_POSTS tool input.
 */
type FACEBOOK_GET_SCHEDULED_POSTS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to return for each post
   * @default id,message,created_time,scheduled_publish_time,is_published
   */
  fields: string;
  /**
   * Limit
   * @description Number of posts to return (max 100)
   * @default 25
   */
  limit: number;
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_SCHEDULED_POSTS tool output.
 */
type FACEBOOK_GET_SCHEDULED_POSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing scheduled/unpublished posts
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_GET_USER_PAGES tool input.
 */
type FACEBOOK_GET_USER_PAGES_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to return for each page.
   * @default id,name,access_token,tasks
   */
  fields: string;
  /**
   * User Id
   * @description The ID of the user whose pages to retrieve. Defaults to 'me' for current user.
   * @default me
   */
  user_id: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_GET_USER_PAGES tool output.
 */
type FACEBOOK_GET_USER_PAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing list of pages the user manages
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_LIKE_POST_OR_COMMENT tool input.
 */
type FACEBOOK_LIKE_POST_OR_COMMENT_INPUT = {
  /**
   * Object Id
   * @description The ID of the post or comment to like
   */
  object_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_LIKE_POST_OR_COMMENT tool output.
 */
type FACEBOOK_LIKE_POST_OR_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from the like operation
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_MARK_MESSAGE_SEEN tool input.
 */
type FACEBOOK_MARK_MESSAGE_SEEN_INPUT = {
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
  /**
   * Recipient Id
   * @description The ID of the user whose message to mark as seen
   */
  recipient_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_MARK_MESSAGE_SEEN tool output.
 */
type FACEBOOK_MARK_MESSAGE_SEEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from marking message as seen
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_PUBLISH_SCHEDULED_POST tool input.
 */
type FACEBOOK_PUBLISH_SCHEDULED_POST_INPUT = {
  /**
   * Post Id
   * @description The ID of the scheduled/unpublished post to publish
   */
  post_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_PUBLISH_SCHEDULED_POST tool output.
 */
type FACEBOOK_PUBLISH_SCHEDULED_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from publishing the post
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_REMOVE_PAGE_TASK tool input.
 */
type FACEBOOK_REMOVE_PAGE_TASK_INPUT = {
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
  /**
   * User
   * @description The ID or username of the user to remove
   */
  user?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_REMOVE_PAGE_TASK tool output.
 */
type FACEBOOK_REMOVE_PAGE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from the removal operation
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_RESCHEDULE_POST tool input.
 */
type FACEBOOK_RESCHEDULE_POST_INPUT = {
  /**
   * Post Id
   * @description The ID of the scheduled post to reschedule
   */
  post_id?: string;
  /**
   * Scheduled Publish Time
   * @description New Unix timestamp for when to publish the post
   */
  scheduled_publish_time?: number;
};

/**
 * Type of FACEBOOK's FACEBOOK_RESCHEDULE_POST tool output.
 */
type FACEBOOK_RESCHEDULE_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from rescheduling the post
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_SEND_MEDIA_MESSAGE tool input.
 */
type FACEBOOK_SEND_MEDIA_MESSAGE_INPUT = {
  /**
   * Is Reusable
   * @description Whether the attachment is reusable
   * @default false
   */
  is_reusable: boolean;
  /**
   * Media Type
   * @description Type of media: image, video, audio, or file
   */
  media_type?: string;
  /**
   * Media Url
   * @description URL of the media to send
   */
  media_url?: string;
  /**
   * Messaging Type
   * @description The messaging type - RESPONSE, UPDATE, or MESSAGE_TAG
   * @default RESPONSE
   */
  messaging_type: string;
  /**
   * Page Id
   * @description The ID of the Facebook Page sending the message
   */
  page_id?: string;
  /**
   * Recipient Id
   * @description The ID of the message recipient (user ID or PSID)
   */
  recipient_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_SEND_MEDIA_MESSAGE tool output.
 */
type FACEBOOK_SEND_MEDIA_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing the sent message details
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_SEND_MESSAGE tool input.
 */
type FACEBOOK_SEND_MESSAGE_INPUT = {
  /**
   * Message Text
   * @description The text content of the message to send
   */
  message_text?: string;
  /**
   * Messaging Type
   * @description The messaging type - RESPONSE, UPDATE, or MESSAGE_TAG
   * @default RESPONSE
   */
  messaging_type: string;
  /**
   * Page Id
   * @description The ID of the Facebook Page sending the message
   */
  page_id?: string;
  /**
   * Recipient Id
   * @description The ID of the message recipient (user ID or PSID)
   */
  recipient_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_SEND_MESSAGE tool output.
 */
type FACEBOOK_SEND_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing the sent message details
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_TOGGLE_TYPING_INDICATOR tool input.
 */
type FACEBOOK_TOGGLE_TYPING_INDICATOR_INPUT = {
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
  /**
   * Recipient Id
   * @description The ID of the user to show/hide typing indicator for
   */
  recipient_id?: string;
  /**
   * Typing On
   * @description True to show typing indicator, False to hide it
   */
  typing_on?: boolean;
};

/**
 * Type of FACEBOOK's FACEBOOK_TOGGLE_TYPING_INDICATOR tool output.
 */
type FACEBOOK_TOGGLE_TYPING_INDICATOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from toggling typing indicator
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_UNLIKE_POST_OR_COMMENT tool input.
 */
type FACEBOOK_UNLIKE_POST_OR_COMMENT_INPUT = {
  /**
   * Object Id
   * @description The ID of the post or comment to unlike
   */
  object_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_UNLIKE_POST_OR_COMMENT tool output.
 */
type FACEBOOK_UNLIKE_POST_OR_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from the unlike operation
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_UPDATE_COMMENT tool input.
 */
type FACEBOOK_UPDATE_COMMENT_INPUT = {
  /**
   * Comment Id
   * @description The ID of the comment to update
   */
  comment_id?: string;
  /**
   * Is Hidden
   * @description Whether to hide or unhide the comment
   * @default null
   */
  is_hidden: boolean | null;
  /**
   * Message
   * @description The new text content of the comment
   */
  message?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_UPDATE_COMMENT tool output.
 */
type FACEBOOK_UPDATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from the update operation
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_UPDATE_PAGE_SETTINGS tool input.
 */
type FACEBOOK_UPDATE_PAGE_SETTINGS_INPUT = {
  /**
   * About
   * @description Updated about section for the page
   * @default null
   */
  about: string | null;
  /**
   * Description
   * @description Updated description for the page
   * @default null
   */
  description: string | null;
  /**
   * Emails
   * @description Updated email addresses
   * @default null
   */
  emails: string[] | null;
  /**
   * General Info
   * @description Updated general information
   * @default null
   */
  general_info: string | null;
  /**
   * Page Id
   * @description The ID of the Facebook Page to update
   */
  page_id?: string;
  /**
   * Phone
   * @description Updated phone number
   * @default null
   */
  phone: string | null;
  /**
   * Website
   * @description Updated website URL
   * @default null
   */
  website: string | null;
};

/**
 * Type of FACEBOOK's FACEBOOK_UPDATE_PAGE_SETTINGS tool output.
 */
type FACEBOOK_UPDATE_PAGE_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from the update operation
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_UPDATE_POST tool input.
 */
type FACEBOOK_UPDATE_POST_INPUT = {
  /**
   * Message
   * @description Updated text content of the post
   * @default null
   */
  message: string | null;
  /**
   * Og Action Type Id
   * @description Open Graph action type ID
   * @default null
   */
  og_action_type_id: string | null;
  /**
   * Og Icon Id
   * @description Open Graph icon ID
   * @default null
   */
  og_icon_id: string | null;
  /**
   * Og Object Id
   * @description Open Graph object ID
   * @default null
   */
  og_object_id: string | null;
  /**
   * Og Phrase
   * @description Open Graph phrase
   * @default null
   */
  og_phrase: string | null;
  /**
   * Og Suggestion Mechanism
   * @description Open Graph suggestion mechanism
   * @default null
   */
  og_suggestion_mechanism: string | null;
  /**
   * Post Id
   * @description The ID of the post to update
   */
  post_id?: string;
};

/**
 * Type of FACEBOOK's FACEBOOK_UPDATE_POST tool output.
 */
type FACEBOOK_UPDATE_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response from the update operation
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_UPLOAD_PHOTO tool input.
 */
type FACEBOOK_UPLOAD_PHOTO_INPUT = {
  /**
   * Caption
   * @description Caption for the photo
   * @default null
   */
  caption: string | null;
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
  /**
   * FileUploadable
   * @description Photo file to upload (max 10MB). Alternative to 'url'
   * @default null
   */
  photo: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  } | null;
  /**
   * Published
   * @description Whether to publish the photo immediately
   * @default true
   */
  published: boolean;
  /**
   * Scheduled Publish Time
   * @description Unix timestamp to schedule the post
   * @default null
   */
  scheduled_publish_time: number | null;
  /**
   * Tags
   * @description List of user tags with format [{'tag_uid': 'USER_ID', 'x': 50, 'y': 50}]
   * @default null
   */
  tags: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Targeting
   * @description Audience targeting specifications
   * @default null
   */
  targeting: {
      [key: string]: unknown;
  } | null;
  /**
   * Url
   * @description Public URL of the photo. Alternative to 'photo'
   * @default null
   */
  url: string | null;
};

/**
 * Type of FACEBOOK's FACEBOOK_UPLOAD_PHOTO tool output.
 */
type FACEBOOK_UPLOAD_PHOTO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing the photo ID and post ID
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_UPLOAD_PHOTOS_BATCH tool input.
 */
type FACEBOOK_UPLOAD_PHOTOS_BATCH_INPUT = {
  /**
   * Album Id
   * @description ID of album to add photos to. If not provided, photos will be uploaded to timeline
   * @default null
   */
  album_id: string | null;
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
  /**
   * Photo Urls
   * @description List of photo URLs to upload (alternative to 'photos')
   * @default null
   */
  photo_urls: string[] | null;
  /**
   * Photos
   * @description List of photo files to upload (max 50 photos)
   * @default null
   */
  photos: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  }[] | null;
  /**
   * Published
   * @description Whether to publish the photos immediately
   * @default true
   */
  published: boolean;
};

/**
 * Type of FACEBOOK's FACEBOOK_UPLOAD_PHOTOS_BATCH tool output.
 */
type FACEBOOK_UPLOAD_PHOTOS_BATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing the uploaded photo IDs
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of FACEBOOK's FACEBOOK_UPLOAD_VIDEO tool input.
 */
type FACEBOOK_UPLOAD_VIDEO_INPUT = {
  /**
   * Content Tags
   * @description List of content tags
   * @default null
   */
  content_tags: string[] | null;
  /**
   * Custom Labels
   * @description Custom labels for the video
   * @default null
   */
  custom_labels: string[] | null;
  /**
   * Description
   * @description Description of the video
   * @default null
   */
  description: string | null;
  /**
   * Page Id
   * @description The ID of the Facebook Page
   */
  page_id?: string;
  /**
   * Published
   * @description Whether to publish immediately
   * @default true
   */
  published: boolean;
  /**
   * Scheduled Publish Time
   * @description Unix timestamp to schedule the video post
   * @default null
   */
  scheduled_publish_time: number | null;
  /**
   * Targeting
   * @description Audience targeting specifications
   * @default null
   */
  targeting: {
      [key: string]: unknown;
  } | null;
  /**
   * Title
   * @description Title of the video
   * @default null
   */
  title: string | null;
  /**
   * FileUploadable
   * @description Video file to upload (max 10GB, recommended under 1GB)
   */
  video?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
};

/**
 * Type of FACEBOOK's FACEBOOK_UPLOAD_VIDEO tool output.
 */
type FACEBOOK_UPLOAD_VIDEO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Response containing the video ID
       */
      response_data: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "FACEBOOK".
 */
export type FACEBOOK_TOOL_INPUTS = {
  ADD_PHOTOS_TO_ALBUM: FACEBOOK_ADD_PHOTOS_TO_ALBUM_INPUT
  ADD_REACTION: FACEBOOK_ADD_REACTION_INPUT
  ASSIGN_PAGE_TASK: FACEBOOK_ASSIGN_PAGE_TASK_INPUT
  CREATE_COMMENT: FACEBOOK_CREATE_COMMENT_INPUT
  CREATE_PHOTO_ALBUM: FACEBOOK_CREATE_PHOTO_ALBUM_INPUT
  CREATE_PHOTO_POST: FACEBOOK_CREATE_PHOTO_POST_INPUT
  CREATE_POST: FACEBOOK_CREATE_POST_INPUT
  CREATE_VIDEO_POST: FACEBOOK_CREATE_VIDEO_POST_INPUT
  DELETE_COMMENT: FACEBOOK_DELETE_COMMENT_INPUT
  DELETE_POST: FACEBOOK_DELETE_POST_INPUT
  GET_COMMENT: FACEBOOK_GET_COMMENT_INPUT
  GET_COMMENTS: FACEBOOK_GET_COMMENTS_INPUT
  GET_CONVERSATION_MESSAGES: FACEBOOK_GET_CONVERSATION_MESSAGES_INPUT
  GET_MESSAGE_DETAILS: FACEBOOK_GET_MESSAGE_DETAILS_INPUT
  GET_PAGE_CONVERSATIONS: FACEBOOK_GET_PAGE_CONVERSATIONS_INPUT
  GET_PAGE_DETAILS: FACEBOOK_GET_PAGE_DETAILS_INPUT
  GET_PAGE_INSIGHTS: FACEBOOK_GET_PAGE_INSIGHTS_INPUT
  GET_PAGE_PHOTOS: FACEBOOK_GET_PAGE_PHOTOS_INPUT
  GET_PAGE_POSTS: FACEBOOK_GET_PAGE_POSTS_INPUT
  GET_PAGE_ROLES: FACEBOOK_GET_PAGE_ROLES_INPUT
  GET_PAGE_VIDEOS: FACEBOOK_GET_PAGE_VIDEOS_INPUT
  GET_POST: FACEBOOK_GET_POST_INPUT
  GET_POST_INSIGHTS: FACEBOOK_GET_POST_INSIGHTS_INPUT
  GET_POST_REACTIONS: FACEBOOK_GET_POST_REACTIONS_INPUT
  GET_SCHEDULED_POSTS: FACEBOOK_GET_SCHEDULED_POSTS_INPUT
  GET_USER_PAGES: FACEBOOK_GET_USER_PAGES_INPUT
  LIKE_POST_OR_COMMENT: FACEBOOK_LIKE_POST_OR_COMMENT_INPUT
  MARK_MESSAGE_SEEN: FACEBOOK_MARK_MESSAGE_SEEN_INPUT
  PUBLISH_SCHEDULED_POST: FACEBOOK_PUBLISH_SCHEDULED_POST_INPUT
  REMOVE_PAGE_TASK: FACEBOOK_REMOVE_PAGE_TASK_INPUT
  RESCHEDULE_POST: FACEBOOK_RESCHEDULE_POST_INPUT
  SEND_MEDIA_MESSAGE: FACEBOOK_SEND_MEDIA_MESSAGE_INPUT
  SEND_MESSAGE: FACEBOOK_SEND_MESSAGE_INPUT
  TOGGLE_TYPING_INDICATOR: FACEBOOK_TOGGLE_TYPING_INDICATOR_INPUT
  UNLIKE_POST_OR_COMMENT: FACEBOOK_UNLIKE_POST_OR_COMMENT_INPUT
  UPDATE_COMMENT: FACEBOOK_UPDATE_COMMENT_INPUT
  UPDATE_PAGE_SETTINGS: FACEBOOK_UPDATE_PAGE_SETTINGS_INPUT
  UPDATE_POST: FACEBOOK_UPDATE_POST_INPUT
  UPLOAD_PHOTO: FACEBOOK_UPLOAD_PHOTO_INPUT
  UPLOAD_PHOTOS_BATCH: FACEBOOK_UPLOAD_PHOTOS_BATCH_INPUT
  UPLOAD_VIDEO: FACEBOOK_UPLOAD_VIDEO_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FACEBOOK".
 */
export type FACEBOOK_TOOL_OUTPUTS = {
  ADD_PHOTOS_TO_ALBUM: FACEBOOK_ADD_PHOTOS_TO_ALBUM_OUTPUT
  ADD_REACTION: FACEBOOK_ADD_REACTION_OUTPUT
  ASSIGN_PAGE_TASK: FACEBOOK_ASSIGN_PAGE_TASK_OUTPUT
  CREATE_COMMENT: FACEBOOK_CREATE_COMMENT_OUTPUT
  CREATE_PHOTO_ALBUM: FACEBOOK_CREATE_PHOTO_ALBUM_OUTPUT
  CREATE_PHOTO_POST: FACEBOOK_CREATE_PHOTO_POST_OUTPUT
  CREATE_POST: FACEBOOK_CREATE_POST_OUTPUT
  CREATE_VIDEO_POST: FACEBOOK_CREATE_VIDEO_POST_OUTPUT
  DELETE_COMMENT: FACEBOOK_DELETE_COMMENT_OUTPUT
  DELETE_POST: FACEBOOK_DELETE_POST_OUTPUT
  GET_COMMENT: FACEBOOK_GET_COMMENT_OUTPUT
  GET_COMMENTS: FACEBOOK_GET_COMMENTS_OUTPUT
  GET_CONVERSATION_MESSAGES: FACEBOOK_GET_CONVERSATION_MESSAGES_OUTPUT
  GET_MESSAGE_DETAILS: FACEBOOK_GET_MESSAGE_DETAILS_OUTPUT
  GET_PAGE_CONVERSATIONS: FACEBOOK_GET_PAGE_CONVERSATIONS_OUTPUT
  GET_PAGE_DETAILS: FACEBOOK_GET_PAGE_DETAILS_OUTPUT
  GET_PAGE_INSIGHTS: FACEBOOK_GET_PAGE_INSIGHTS_OUTPUT
  GET_PAGE_PHOTOS: FACEBOOK_GET_PAGE_PHOTOS_OUTPUT
  GET_PAGE_POSTS: FACEBOOK_GET_PAGE_POSTS_OUTPUT
  GET_PAGE_ROLES: FACEBOOK_GET_PAGE_ROLES_OUTPUT
  GET_PAGE_VIDEOS: FACEBOOK_GET_PAGE_VIDEOS_OUTPUT
  GET_POST: FACEBOOK_GET_POST_OUTPUT
  GET_POST_INSIGHTS: FACEBOOK_GET_POST_INSIGHTS_OUTPUT
  GET_POST_REACTIONS: FACEBOOK_GET_POST_REACTIONS_OUTPUT
  GET_SCHEDULED_POSTS: FACEBOOK_GET_SCHEDULED_POSTS_OUTPUT
  GET_USER_PAGES: FACEBOOK_GET_USER_PAGES_OUTPUT
  LIKE_POST_OR_COMMENT: FACEBOOK_LIKE_POST_OR_COMMENT_OUTPUT
  MARK_MESSAGE_SEEN: FACEBOOK_MARK_MESSAGE_SEEN_OUTPUT
  PUBLISH_SCHEDULED_POST: FACEBOOK_PUBLISH_SCHEDULED_POST_OUTPUT
  REMOVE_PAGE_TASK: FACEBOOK_REMOVE_PAGE_TASK_OUTPUT
  RESCHEDULE_POST: FACEBOOK_RESCHEDULE_POST_OUTPUT
  SEND_MEDIA_MESSAGE: FACEBOOK_SEND_MEDIA_MESSAGE_OUTPUT
  SEND_MESSAGE: FACEBOOK_SEND_MESSAGE_OUTPUT
  TOGGLE_TYPING_INDICATOR: FACEBOOK_TOGGLE_TYPING_INDICATOR_OUTPUT
  UNLIKE_POST_OR_COMMENT: FACEBOOK_UNLIKE_POST_OR_COMMENT_OUTPUT
  UPDATE_COMMENT: FACEBOOK_UPDATE_COMMENT_OUTPUT
  UPDATE_PAGE_SETTINGS: FACEBOOK_UPDATE_PAGE_SETTINGS_OUTPUT
  UPDATE_POST: FACEBOOK_UPDATE_POST_OUTPUT
  UPLOAD_PHOTO: FACEBOOK_UPLOAD_PHOTO_OUTPUT
  UPLOAD_PHOTOS_BATCH: FACEBOOK_UPLOAD_PHOTOS_BATCH_OUTPUT
  UPLOAD_VIDEO: FACEBOOK_UPLOAD_VIDEO_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FACEBOOK toolkit.
 */
export const FACEBOOK = {
  slug: "facebook",
  tools: {
    /**
     * Adds photos to an existing facebook album. note: currently adds one photo at a time. for true batch upload, use facebook's batch api endpoint directly.
     */
    ADD_PHOTOS_TO_ALBUM: "FACEBOOK_ADD_PHOTOS_TO_ALBUM",
    /**
     * Adds a specific reaction (like, love, wow, etc.) to a facebook post or comment.
     */
    ADD_REACTION: "FACEBOOK_ADD_REACTION",
    /**
     * Assigns tasks/roles to a user for a specific facebook page.
     */
    ASSIGN_PAGE_TASK: "FACEBOOK_ASSIGN_PAGE_TASK",
    /**
     * Creates a comment on a facebook post or replies to an existing comment.
     */
    CREATE_COMMENT: "FACEBOOK_CREATE_COMMENT",
    /**
     * Creates a new photo album on a facebook page.
     */
    CREATE_PHOTO_ALBUM: "FACEBOOK_CREATE_PHOTO_ALBUM",
    /**
     * Creates a photo post on a facebook page.
     */
    CREATE_PHOTO_POST: "FACEBOOK_CREATE_PHOTO_POST",
    /**
     * Creates a new post on a facebook page.
     */
    CREATE_POST: "FACEBOOK_CREATE_POST",
    /**
     * Creates a video post on a facebook page.
     */
    CREATE_VIDEO_POST: "FACEBOOK_CREATE_VIDEO_POST",
    /**
     * Deletes a facebook comment.
     */
    DELETE_COMMENT: "FACEBOOK_DELETE_COMMENT",
    /**
     * Deletes a facebook page post.
     */
    DELETE_POST: "FACEBOOK_DELETE_POST",
    /**
     * Retrieves details of a specific facebook comment.
     */
    GET_COMMENT: "FACEBOOK_GET_COMMENT",
    /**
     * Retrieves comments from a facebook post or comment (for replies).
     */
    GET_COMMENTS: "FACEBOOK_GET_COMMENTS",
    /**
     * Retrieves messages from a specific conversation.
     */
    GET_CONVERSATION_MESSAGES: "FACEBOOK_GET_CONVERSATION_MESSAGES",
    /**
     * Retrieves details of a specific message sent or received by the page.
     */
    GET_MESSAGE_DETAILS: "FACEBOOK_GET_MESSAGE_DETAILS",
    /**
     * Retrieves a list of conversations between users and the page.
     */
    GET_PAGE_CONVERSATIONS: "FACEBOOK_GET_PAGE_CONVERSATIONS",
    /**
     * Fetches details about a specific facebook page.
     */
    GET_PAGE_DETAILS: "FACEBOOK_GET_PAGE_DETAILS",
    /**
     * Retrieves analytics and insights for a facebook page.
     */
    GET_PAGE_INSIGHTS: "FACEBOOK_GET_PAGE_INSIGHTS",
    /**
     * Retrieves photos from a facebook page.
     */
    GET_PAGE_PHOTOS: "FACEBOOK_GET_PAGE_PHOTOS",
    /**
     * Retrieves posts from a facebook page.
     */
    GET_PAGE_POSTS: "FACEBOOK_GET_PAGE_POSTS",
    /**
     * Retrieves a list of people and their tasks/roles on a facebook page.
     */
    GET_PAGE_ROLES: "FACEBOOK_GET_PAGE_ROLES",
    /**
     * Retrieves videos from a facebook page.
     */
    GET_PAGE_VIDEOS: "FACEBOOK_GET_PAGE_VIDEOS",
    /**
     * Retrieves details of a specific facebook post.
     */
    GET_POST: "FACEBOOK_GET_POST",
    /**
     * Retrieves analytics and insights for a specific facebook post.
     */
    GET_POST_INSIGHTS: "FACEBOOK_GET_POST_INSIGHTS",
    /**
     * Retrieves reactions (like, love, wow, etc.) for a facebook post.
     */
    GET_POST_REACTIONS: "FACEBOOK_GET_POST_REACTIONS",
    /**
     * Retrieves scheduled and unpublished posts for a facebook page.
     */
    GET_SCHEDULED_POSTS: "FACEBOOK_GET_SCHEDULED_POSTS",
    /**
     * Retrieves a list of pages the user manages, including tasks and access tokens.
     */
    GET_USER_PAGES: "FACEBOOK_GET_USER_PAGES",
    /**
     * Likes a facebook post or comment.
     */
    LIKE_POST_OR_COMMENT: "FACEBOOK_LIKE_POST_OR_COMMENT",
    /**
     * Marks a user's message as seen by the page.
     */
    MARK_MESSAGE_SEEN: "FACEBOOK_MARK_MESSAGE_SEEN",
    /**
     * Publishes a previously scheduled or unpublished facebook post immediately.
     */
    PUBLISH_SCHEDULED_POST: "FACEBOOK_PUBLISH_SCHEDULED_POST",
    /**
     * Removes a user's tasks/access from a specific facebook page.
     */
    REMOVE_PAGE_TASK: "FACEBOOK_REMOVE_PAGE_TASK",
    /**
     * Changes the scheduled publish time of an unpublished facebook post.
     */
    RESCHEDULE_POST: "FACEBOOK_RESCHEDULE_POST",
    /**
     * Sends a media message (image, video, audio, or file) from the page to a user.
     */
    SEND_MEDIA_MESSAGE: "FACEBOOK_SEND_MEDIA_MESSAGE",
    /**
     * Sends a text message from the page to a user via messenger.
     */
    SEND_MESSAGE: "FACEBOOK_SEND_MESSAGE",
    /**
     * Shows or hides the typing indicator for a user in messenger.
     */
    TOGGLE_TYPING_INDICATOR: "FACEBOOK_TOGGLE_TYPING_INDICATOR",
    /**
     * Removes a like from a facebook post or comment.
     */
    UNLIKE_POST_OR_COMMENT: "FACEBOOK_UNLIKE_POST_OR_COMMENT",
    /**
     * Updates an existing facebook comment.
     */
    UPDATE_COMMENT: "FACEBOOK_UPDATE_COMMENT",
    /**
     * Updates settings for a specific facebook page.
     */
    UPDATE_PAGE_SETTINGS: "FACEBOOK_UPDATE_PAGE_SETTINGS",
    /**
     * Updates an existing facebook page post.
     */
    UPDATE_POST: "FACEBOOK_UPDATE_POST",
    /**
     * Uploads a photo file directly to a facebook page. supports local file upload up to 10mb.
     */
    UPLOAD_PHOTO: "FACEBOOK_UPLOAD_PHOTO",
    /**
     * Uploads multiple photo files in batch to a facebook page or album. uses facebook's batch api for efficient multi-photo upload. maximum 50 photos per batch.
     */
    UPLOAD_PHOTOS_BATCH: "FACEBOOK_UPLOAD_PHOTOS_BATCH",
    /**
     * Uploads a video file directly to a facebook page. supports local file upload. for large videos (>100mb), uses resumable upload.
     */
    UPLOAD_VIDEO: "FACEBOOK_UPLOAD_VIDEO",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FACEBOOK".
 */
export type FACEBOOK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FACEBOOK".
 */
export type FACEBOOK_TRIGGER_EVENTS = {}
