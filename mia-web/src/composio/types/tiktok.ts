// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TIKTOK's TIKTOK_FETCH_PUBLISH_STATUS tool input.
 */
type TIKTOK_FETCH_PUBLISH_STATUS_INPUT = {
  /**
   * Publish Id
   * @description Publish ID to check status for
   */
  publish_id?: string;
};

/**
 * Type of TIKTOK's TIKTOK_FETCH_PUBLISH_STATUS tool output.
 */
type TIKTOK_FETCH_PUBLISH_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON from status endpoint
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
 * Type of TIKTOK's TIKTOK_GET_USER_BASIC_INFO tool input.
 */
type TIKTOK_GET_USER_BASIC_INFO_INPUT = {
  /**
   * Fields
   * @description Fields to request for basic user info (comma-joined). Typical fields: open_id, display_name, avatar_url, profile_deep_link
   */
  fields?: string[];
};

/**
 * Type of TIKTOK's TIKTOK_GET_USER_BASIC_INFO tool output.
 */
type TIKTOK_GET_USER_BASIC_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from TikTok user info endpoint.
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
 * Type of TIKTOK's TIKTOK_GET_USER_PROFILE tool input.
 */
type TIKTOK_GET_USER_PROFILE_INPUT = {
  /**
   * Fields
   * @description Fields to request for profile info; example fields include bio_description, follower_count, following_count, video_count, likes_count
   */
  fields?: string[];
};

/**
 * Type of TIKTOK's TIKTOK_GET_USER_PROFILE tool output.
 */
type TIKTOK_GET_USER_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from TikTok user profile endpoint.
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
 * Type of TIKTOK's TIKTOK_GET_USER_STATS tool input.
 */
type TIKTOK_GET_USER_STATS_INPUT = {
  /**
   * Fields
   * @description Fields to request for user stats; example fields include follower_count, following_count, likes_count, video_count
   */
  fields?: string[];
};

/**
 * Type of TIKTOK's TIKTOK_GET_USER_STATS tool output.
 */
type TIKTOK_GET_USER_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from TikTok user stats endpoint.
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
 * Type of TIKTOK's TIKTOK_LIST_VIDEOS tool input.
 */
type TIKTOK_LIST_VIDEOS_INPUT = {
  /**
   * Creator Id
   * @description Optional creator open_id to list videos for; omit for current user.
   * @default null
   */
  creator_id: string | null;
  /**
   * Cursor
   * @description Pagination cursor returned by previous call.
   * @default null
   */
  cursor: string | null;
  /**
   * Max Count
   * @description Maximum number of videos to retrieve.
   * @default 20
   */
  max_count: number;
};

/**
 * Type of TIKTOK's TIKTOK_LIST_VIDEOS tool output.
 */
type TIKTOK_LIST_VIDEOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from TikTok video list endpoint.
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
 * Type of TIKTOK's TIKTOK_POST_PHOTO tool input.
 */
type TIKTOK_POST_PHOTO_INPUT = {
  /**
   * Auto Add Music
   * @description DIRECT_POST only. Auto add recommended music.
   * @default null
   */
  auto_add_music: boolean | null;
  /**
   * Brand Content Toggle
   * @description DIRECT_POST only. True if content is a paid partnership to promote a third-party business.
   * @default null
   */
  brand_content_toggle: boolean | null;
  /**
   * Brand Organic Toggle
   * @description DIRECT_POST only. True if content promotes the creator's own business.
   * @default null
   */
  brand_organic_toggle: boolean | null;
  /**
   * Description
   * @description Post description (<= 4000 UTF-16 runes)
   * @default null
   */
  description: string | null;
  /**
   * Disable Comment
   * @description DIRECT_POST only. Disallow comments if true.
   * @default null
   */
  disable_comment: boolean | null;
  /**
   * Photo Cover Index
   * @description Zero-based index of cover image among photo_images
   */
  photo_cover_index?: number;
  /**
   * Photo Images
   * @description Up to 35 publicly accessible image URLs
   */
  photo_images?: string[];
  /**
   * Post Mode
   * @description Use DIRECT_POST to publish immediately (requires video.publish), or MEDIA_UPLOAD to send to inbox for editing (requires video.upload)
   * @default MEDIA_UPLOAD
   * @enum {string}
   */
  post_mode: "DIRECT_POST" | "MEDIA_UPLOAD";
  /**
   * Privacy Level
   * @description Required for DIRECT_POST. Must match options from creator_info/query.
   * @default null
   */
  privacy_level: string | null;
  /**
   * Title
   * @description Post title (<= 90 UTF-16 runes)
   * @default null
   */
  title: string | null;
};

/**
 * Type of TIKTOK's TIKTOK_POST_PHOTO tool output.
 */
type TIKTOK_POST_PHOTO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Publish Id
       * @description Identifier to track the posting action (use for status fetch)
       */
      publish_id: string;
      /**
       * Response Data
       * @description Raw JSON response from TikTok API
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
 * Type of TIKTOK's TIKTOK_PUBLISH_VIDEO tool input.
 */
type TIKTOK_PUBLISH_VIDEO_INPUT = {
  /**
   * Caption
   * @description Optional caption/title for the post
   * @default null
   */
  caption: string | null;
  /**
   * Publish Id
   * @description Publish ID returned by init upload
   */
  publish_id?: string;
};

/**
 * Type of TIKTOK's TIKTOK_PUBLISH_VIDEO tool output.
 */
type TIKTOK_PUBLISH_VIDEO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON from publish endpoint
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
 * Type of TIKTOK's TIKTOK_UPLOAD_VIDEO tool input.
 */
type TIKTOK_UPLOAD_VIDEO_INPUT = {
  /**
   * Caption
   * @description Optional caption/title used when publish=true
   * @default null
   */
  caption: string | null;
  /**
   * Chunk Size Bytes
   * @description Chunk size hint sent during init (bytes). Currently uploaded in a single PUT.
   * @default 5242880
   */
  chunk_size_bytes: number;
  /**
   * FileUploadable
   * @description Video file to upload to TikTok using Content Posting API presigned URL.
   */
  file_to_upload?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
  /**
   * Publish
   * @description If true, attempts to publish after upload using the returned publish_id.
   * @default false
   */
  publish: boolean;
};

/**
 * Type of TIKTOK's TIKTOK_UPLOAD_VIDEO tool output.
 */
type TIKTOK_UPLOAD_VIDEO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Publish Id
       * @description TikTok publish identifier for the uploaded media.
       */
      publish_id: string;
      /**
       * Publish Response
       * @description Raw JSON response if publish=true
       * @default null
       */
      publish_response: {
          [key: string]: unknown;
      } | null;
      /**
       * Upload Status Code
       * @description HTTP status code returned by the upload PUT request (e.g., 200 or 204).
       */
      upload_status_code: number;
      /**
       * Upload Url
       * @description Presigned upload URL used for the PUT upload.
       */
      upload_url: string;
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
 * Type of TIKTOK's TIKTOK_UPLOAD_VIDEOS tool input.
 */
type TIKTOK_UPLOAD_VIDEOS_INPUT = {
  /**
   * Caption
   * @description Optional caption/title used when publish=true
   * @default null
   */
  caption: string | null;
  /**
   * Chunk Size Bytes
   * @description Chunk size hint to use during each init step
   * @default 5242880
   */
  chunk_size_bytes: number;
  /**
   * Files To Upload
   * @description List of videos to upload to TikTok in parallel
   */
  files_to_upload?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  }[];
  /**
   * Max Workers
   * @description Maximum number of parallel uploads
   * @default 4
   */
  max_workers: number;
  /**
   * Publish
   * @description If true, attempts to publish after each upload using the returned publish_id.
   * @default false
   */
  publish: boolean;
};

/**
 * Type of TIKTOK's TIKTOK_UPLOAD_VIDEOS tool output.
 */
type TIKTOK_UPLOAD_VIDEOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Per-file upload results
       */
      results?: {
          /**
           * Error
           * @description Error message if the upload failed
           * @default null
           */
          error: string | null;
          /**
           * File Name
           * @description Name of the uploaded file
           */
          file_name: string;
          /**
           * Publish Id
           * @description TikTok publish identifier for this file
           * @default null
           */
          publish_id: string | null;
          /**
           * Publish Response
           * @description Raw JSON publish response if publish=true
           * @default null
           */
          publish_response: {
              [key: string]: unknown;
          } | null;
          /**
           * Upload Status Code
           * @description HTTP status code from upload PUT
           * @default null
           */
          upload_status_code: number | null;
          /**
           * Upload Url
           * @description Presigned upload URL used for this file
           * @default null
           */
          upload_url: string | null;
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
 * Type map of all available tool input types for toolkit "TIKTOK".
 */
export type TIKTOK_TOOL_INPUTS = {
  FETCH_PUBLISH_STATUS: TIKTOK_FETCH_PUBLISH_STATUS_INPUT
  GET_USER_BASIC_INFO: TIKTOK_GET_USER_BASIC_INFO_INPUT
  GET_USER_PROFILE: TIKTOK_GET_USER_PROFILE_INPUT
  GET_USER_STATS: TIKTOK_GET_USER_STATS_INPUT
  LIST_VIDEOS: TIKTOK_LIST_VIDEOS_INPUT
  POST_PHOTO: TIKTOK_POST_PHOTO_INPUT
  PUBLISH_VIDEO: TIKTOK_PUBLISH_VIDEO_INPUT
  UPLOAD_VIDEO: TIKTOK_UPLOAD_VIDEO_INPUT
  UPLOAD_VIDEOS: TIKTOK_UPLOAD_VIDEOS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TIKTOK".
 */
export type TIKTOK_TOOL_OUTPUTS = {
  FETCH_PUBLISH_STATUS: TIKTOK_FETCH_PUBLISH_STATUS_OUTPUT
  GET_USER_BASIC_INFO: TIKTOK_GET_USER_BASIC_INFO_OUTPUT
  GET_USER_PROFILE: TIKTOK_GET_USER_PROFILE_OUTPUT
  GET_USER_STATS: TIKTOK_GET_USER_STATS_OUTPUT
  LIST_VIDEOS: TIKTOK_LIST_VIDEOS_OUTPUT
  POST_PHOTO: TIKTOK_POST_PHOTO_OUTPUT
  PUBLISH_VIDEO: TIKTOK_PUBLISH_VIDEO_OUTPUT
  UPLOAD_VIDEO: TIKTOK_UPLOAD_VIDEO_OUTPUT
  UPLOAD_VIDEOS: TIKTOK_UPLOAD_VIDEOS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TIKTOK toolkit.
 */
export const TIKTOK = {
  slug: "tiktok",
  tools: {
    /**
     * Fetch current publish/upload status for a given publish id.
     */
    FETCH_PUBLISH_STATUS: "TIKTOK_FETCH_PUBLISH_STATUS",
    /**
     * Fetches basic tiktok user info for the authenticated user.
     */
    GET_USER_BASIC_INFO: "TIKTOK_GET_USER_BASIC_INFO",
    /**
     * Fetches extended tiktok profile info for the authenticated user.
     */
    GET_USER_PROFILE: "TIKTOK_GET_USER_PROFILE",
    /**
     * Fetches tiktok user stats for the authenticated user.
     */
    GET_USER_STATS: "TIKTOK_GET_USER_STATS",
    /**
     * Lists videos for the authenticated user (or specified creator).
     */
    LIST_VIDEOS: "TIKTOK_LIST_VIDEOS",
    /**
     * Create a photo post via content posting api (direct post or media upload). reference: https://developers.tiktok.com/doc/content-posting-api-reference-photo-post?enter method=left navigation
     */
    POST_PHOTO: "TIKTOK_POST_PHOTO",
    /**
     * Finalize and publish a video from the inbox using its publish id.
     */
    PUBLISH_VIDEO: "TIKTOK_PUBLISH_VIDEO",
    /**
     * Uploads a video to tiktok via the content posting api (init + single-part upload). this action initializes an upload session to obtain a presigned upload url, then uploads the entire file with a single put request. use a subsequent action to publish the post.
     */
    UPLOAD_VIDEO: "TIKTOK_UPLOAD_VIDEO",
    /**
     * Uploads multiple videos to tiktok concurrently (init + single-part upload per file).
     */
    UPLOAD_VIDEOS: "TIKTOK_UPLOAD_VIDEOS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TIKTOK".
 */
export type TIKTOK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TIKTOK".
 */
export type TIKTOK_TRIGGER_EVENTS = {}
