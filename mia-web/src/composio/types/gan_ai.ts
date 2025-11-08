// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GAN_AI's GAN_AI_GAN_AI_LOGIN tool input.
 */
type GAN_AI_GAN_AI_LOGIN_INPUT = {
  /**
   * Email
   * Format: email
   * @description User's email address.
   * @default null
   */
  email: string | null;
  /**
   * Expiry Days
   * @description Days until token expiry (0-30).
   * @default null
   */
  expiry_days: number | null;
  /**
   * Expiry Hours
   * @description Hours until token expiry (0-23).
   * @default null
   */
  expiry_hours: number | null;
  /**
   * Expiry Minutes
   * @description Minutes until token expiry (0-59).
   * @default null
   */
  expiry_minutes: number | null;
  /**
   * Password
   * @description User's password.
   * @default null
   */
  password: string | null;
  /**
   * Token Name
   * @description Optional name for the dynamic token. Must be unique per user.
   * @default null
   */
  token_name: string | null;
};

/**
 * Type of GAN_AI's GAN_AI_GAN_AI_LOGIN tool output.
 */
type GAN_AI_GAN_AI_LOGIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Token
       * @description JWT access token.
       */
      access_token: string;
      /**
       * Refresh Token
       * @description JWT refresh token (present only for classic login).
       * @default null
       */
      refresh_token: string | null;
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
 * Type of GAN_AI's GAN_AI_GAN_AI_TTS tool input.
 */
type GAN_AI_GAN_AI_TTS_INPUT = {
  /**
   * Text
   * @description Text to synthesize; length must be between 40 and 500 characters.
   */
  text?: string;
  /**
   * Voice Id
   * @description Unique ID of the voice to use. Obtain from the Get Voices endpoint.
   */
  voice_id?: string;
};

/**
 * Type of GAN_AI's GAN_AI_GAN_AI_TTS tool output.
 */
type GAN_AI_GAN_AI_TTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Audio
       * Format: binary
       * @description Binary WAV audio of the synthesized speech.
       */
      audio: string;
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
 * Type of GAN_AI's GAN_AI_GET_AVATAR_VIDEO_INFERENCE_DETAILS tool input.
 */
type GAN_AI_GET_AVATAR_VIDEO_INFERENCE_DETAILS_INPUT = {
  /**
   * Inference Id
   * @description The unique identifier (UUID) of the avatar video inference to retrieve.
   */
  inference_id?: string;
};

/**
 * Type of GAN_AI's GAN_AI_GET_AVATAR_VIDEO_INFERENCE_DETAILS tool output.
 */
type GAN_AI_GET_AVATAR_VIDEO_INFERENCE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Id
       * @description Avatar ID (UUID).
       */
      avatar_id: string;
      /**
       * Avatar Title
       * @description Avatar title, if available.
       * @default null
       */
      avatar_title: string | null;
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the inference was created.
       * @default null
       */
      created_at: string | null;
      /**
       * Inference Id
       * @description Inference ID (UUID).
       */
      inference_id: string;
      /**
       * Input Text
       * @description Input text used for the inference, if any.
       * @default null
       */
      input_text: string | null;
      /**
       * Status
       * @description Current state of the inference.
       * @enum {string}
       */
      status: "draft" | "processing" | "failed" | "succeeded" | "deleted";
      /**
       * Thumbnail
       * @description URL of the thumbnail image, if ready.
       * @default null
       */
      thumbnail: string | null;
      /**
       * Title
       * @description Inference title, if available.
       * @default null
       */
      title: string | null;
      /**
       * Video
       * @description URL of the generated video, if ready.
       * @default null
       */
      video: string | null;
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
 * Type of GAN_AI's GAN_AI_GET_PHOTO_AVATAR_DETAILS tool input.
 */
type GAN_AI_GET_PHOTO_AVATAR_DETAILS_INPUT = {
  /**
   * Photo Avatar Id
   * @description UUID of the photo avatar to retrieve details for
   */
  photo_avatar_id?: string;
};

/**
 * Type of GAN_AI's GAN_AI_GET_PHOTO_AVATAR_DETAILS tool output.
 */
type GAN_AI_GET_PHOTO_AVATAR_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Base Image
       * @description Presigned URL of the processed base image
       * @default null
       */
      base_image: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the avatar was created
       * @default null
       */
      created_at: string | null;
      /**
       * Photo Avatar Id
       * @description The avatar's unique identifier
       */
      photo_avatar_id: string;
      /**
       * Status
       * @description Current status of the photo avatar
       * @enum {string}
       */
      status: "draft" | "failed" | "processing" | "published" | "deleted";
      /**
       * Title
       * @description Avatar title if set
       * @default null
       */
      title: string | null;
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
 * Type of GAN_AI's GAN_AI_GET_PHOTO_AVATAR_INFERENCE_DETAILS tool input.
 */
type GAN_AI_GET_PHOTO_AVATAR_INFERENCE_DETAILS_INPUT = {
  /**
   * Downloadable Link
   * @description Include downloadable video link when true (default: false).
   * @default false
   */
  downloadable_link: boolean;
  /**
   * Photo Avatar Inference Id
   * @description The photo avatar inference ID to fetch.
   */
  photo_avatar_inference_id?: string;
};

/**
 * Type of GAN_AI's GAN_AI_GET_PHOTO_AVATAR_INFERENCE_DETAILS tool output.
 */
type GAN_AI_GET_PHOTO_AVATAR_INFERENCE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Creation timestamp of the inference.
       * @default null
       */
      created_at: string | null;
      /**
       * Credit Details
       * @description Cost breakdown of the inference.
       */
      credit_details: {
          /**
           * Gan Cost
           * @description GAN processing cost used in the inference.
           */
          gan_cost: number;
          /**
           * Tts Cost
           * @description Text-to-speech cost used in the inference.
           */
          tts_cost: number;
      };
      /**
       * Downloadable Video Link
       * @description Download URL if requested.
       * @default null
       */
      downloadable_video_link: string | null;
      /**
       * Input Text
       * @description Input text used for generation.
       * @default null
       */
      input_text: string | null;
      /**
       * Photo Avatar Id
       * @description Photo avatar ID.
       */
      photo_avatar_id: string;
      /**
       * Photo Avatar Inference Id
       * @description Inference ID.
       */
      photo_avatar_inference_id: string;
      /**
       * Status
       * @description Current status of the inference.
       * @enum {string}
       */
      status: "draft" | "processing" | "failed" | "succeeded" | "deleted";
      /**
       * Title
       * @description Title of the inference.
       * @default null
       */
      title: string | null;
      /**
       * Video
       * @description CloudFront URL of the generated video.
       * @default null
       */
      video: string | null;
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
 * Type of GAN_AI's GAN_AI_LIST_AVATAR_VIDEOS tool input.
 */
type GAN_AI_LIST_AVATAR_VIDEOS_INPUT = {
  /**
   * Avatar Id
   * @description UUID of the avatar to filter by.
   * @default null
   */
  avatar_id: string | null;
  /**
   * Avatar Title
   * @description Filter by avatar title.
   * @default null
   */
  avatar_title: string | null;
  /**
   * End Datetime
   * @description ISO 8601 end timestamp for filtering.
   * @default null
   */
  end_datetime: string | null;
  /**
   * Inference Title
   * @description Filter by inference/video title.
   * @default null
   */
  inference_title: string | null;
  /**
   * Limit
   * @description Maximum number of items to return. Default is 10.
   * @default 10
   */
  limit: number | null;
  /**
   * Skip
   * @description Pagination offset (number of items to skip). Default is 0.
   * @default 0
   */
  skip: number | null;
  /**
   * Start Datetime
   * @description ISO 8601 start timestamp for filtering.
   * @default null
   */
  start_datetime: string | null;
  /**
   * Status
   * @description Filter by one or more inference statuses.
   * @default null
   */
  status: string[] | null;
};

/**
 * Type of GAN_AI's GAN_AI_LIST_AVATAR_VIDEOS tool output.
 */
type GAN_AI_LIST_AVATAR_VIDEOS_OUTPUT = {
  /**
   * Data
   * @description List of avatar video inference objects.
   * @default null
   */
  data: {
      /**
       * Avatar Id
       * @description UUID of the avatar.
       */
      avatar_id: string;
      /**
       * Avatar Title
       * @description Title of the avatar.
       * @default null
       */
      avatar_title: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp of creation.
       * @default null
       */
      created_at: string | null;
      /**
       * Inference Id
       * @description UUID of the generated video inference.
       */
      inference_id: string;
      /**
       * Input Text
       * @description Input text used for generation.
       * @default null
       */
      input_text: string | null;
      /**
       * Status
       * @description Status of the inference.
       * @enum {string}
       */
      status: "draft" | "processing" | "failed" | "succeeded" | "deleted";
      /**
       * Thumbnail
       * @description URL of the video thumbnail.
       * @default null
       */
      thumbnail: string | null;
      /**
       * Title
       * @description Inference/video title.
       * @default null
       */
      title: string | null;
      /**
       * Video
       * @description URL of the generated video.
       * @default null
       */
      video: string | null;
  }[] | null;
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
  /**
   * Total
   * @description Total number of matching inferences.
   */
  total?: number;
};

/**
 * Type of GAN_AI's GAN_AI_LIST_PHOTO_AVATARS tool input.
 */
type GAN_AI_LIST_PHOTO_AVATARS_INPUT = {
  /**
   * End Datetime
   * @description ISO 8601 end timestamp for filtering (inclusive).
   * @default null
   */
  end_datetime: string | null;
  /**
   * Limit
   * @description Maximum number of records to return. Default is 10.
   * @default 10
   */
  limit: number;
  /**
   * Skip
   * @description Number of records to skip for pagination (offset). Default is 0.
   * @default 0
   */
  skip: number;
  /**
   * Start Datetime
   * @description ISO 8601 start timestamp for filtering (inclusive).
   * @default null
   */
  start_datetime: string | null;
  /**
   * Status
   * @description Filter by one or more statuses; common values include: consent_pending, processing, consent_failed, failed, published, deleted, draft.
   * @default null
   */
  status: string[] | null;
  /**
   * Title
   * @description Filter by avatar title (exact match).
   * @default null
   */
  title: string | null;
};

/**
 * Type of GAN_AI's GAN_AI_LIST_PHOTO_AVATARS tool output.
 */
type GAN_AI_LIST_PHOTO_AVATARS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatars List
       * @description Array of avatar objects (may be null if none).
       * @default null
       */
      avatars_list: {
          /**
           * Avatar Id
           * @description Unique UUID of the avatar.
           */
          avatar_id: string;
          /**
           * AvatarWebhook
           * @description Webhook registration details, if present.
           * @default null
           */
          avatar_webhook: {
              /**
               * Webhook Url
               * @description Webhook URL registered for the avatar
               */
              webhook_url: string;
          } | null;
          /**
           * Base Video
           * @description URL for the avatar base video.
           * @default null
           */
          base_video: string | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when the avatar was created.
           * @default null
           */
          created_at: string | null;
          /**
           * Status
           * @description Current status of the avatar.
           * @default null
           */
          status: string | null;
          /**
           * Thumbnail
           * @description URL for the avatar thumbnail.
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description User-defined title of the avatar.
           * @default null
           */
          title: string | null;
      }[] | null;
      /**
       * Total Avatars
       * @description Total number of avatars matching the query.
       */
      total_avatars: number;
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
 * Type of GAN_AI's GAN_AI_LIST_PHOTO_AVATAR_INFERENCES tool input.
 */
type GAN_AI_LIST_PHOTO_AVATAR_INFERENCES_INPUT = {
  /**
   * End Datetime
   * @description ISO 8601 end of the creation time window, e.g., '2023-01-07T23:59:59Z'.
   * @default null
   */
  end_datetime: string | null;
  /**
   * Limit
   * @description Maximum number of items to return.
   * @default 10
   */
  limit: number | null;
  /**
   * Photo Avatar Id
   * @description UUID of the photo avatar to filter by.
   * @default null
   */
  photo_avatar_id: string | null;
  /**
   * Skip
   * @description Pagination offset (number of items to skip).
   * @default 0
   */
  skip: number | null;
  /**
   * Start Datetime
   * @description ISO 8601 start of the creation time window, e.g., '2023-01-01T00:00:00Z'.
   * @default null
   */
  start_datetime: string | null;
  /**
   * Status
   * @description Filter by one or more inference statuses.
   * @default null
   */
  status: string[] | null;
  /**
   * Title
   * @description Filter by inference title.
   * @default null
   */
  title: string | null;
};

/**
 * Type of GAN_AI's GAN_AI_LIST_PHOTO_AVATAR_INFERENCES tool output.
 */
type GAN_AI_LIST_PHOTO_AVATAR_INFERENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Inference List
       * @description Page of inference detail objects.
       * @default null
       */
      inference_list: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the inference was created.
           * @default null
           */
          created_at: string | null;
          /**
           * Credit Details
           * @description Credit usage details.
           */
          credit_details: {
              /**
               * Gan Cost
               * @description Cost in credits for GAN processing.
               */
              gan_cost: number;
              /**
               * Tts Cost
               * @description Cost in credits for text-to-speech processing.
               */
              tts_cost: number;
          };
          /**
           * Downloadable Video Link
           * @description Direct download link for the video.
           * @default null
           */
          downloadable_video_link: string | null;
          /**
           * Input Text
           * @description Input text used to generate this inference.
           * @default null
           */
          input_text: string | null;
          /**
           * Photo Avatar Id
           * @description UUID of the photo avatar.
           */
          photo_avatar_id: string;
          /**
           * Photo Avatar Inference Id
           * @description UUID of the inference.
           */
          photo_avatar_inference_id: string;
          /**
           * Status
           * @description Status of the inference.
           * @enum {string}
           */
          status: "draft" | "processing" | "failed" | "succeeded" | "deleted";
          /**
           * Title
           * @description Inference title, if set.
           * @default null
           */
          title: string | null;
          /**
           * Video
           * @description CloudFront URL of the generated video.
           * @default null
           */
          video: string | null;
      }[] | null;
      /**
       * Total
       * @description Total number of matched inferences.
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
 * Type of GAN_AI's GAN_AI_LOGIN tool input.
 */
type GAN_AI_LOGIN_INPUT = {
  /**
   * Email
   * Format: email
   * @description User's email address.
   */
  email?: string;
  /**
   * Password
   * @description User's password.
   */
  password?: string;
};

/**
 * Type of GAN_AI's GAN_AI_LOGIN tool output.
 */
type GAN_AI_LOGIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Token
       * @description JWT access token.
       */
      access_token: string;
      /**
       * Refresh Token
       * @description JWT refresh token.
       */
      refresh_token: string;
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
 * Type map of all available tool input types for toolkit "GAN_AI".
 */
export type GAN_AI_TOOL_INPUTS = {
  GAN_AI_LOGIN: GAN_AI_GAN_AI_LOGIN_INPUT
  GAN_AI_TTS: GAN_AI_GAN_AI_TTS_INPUT
  GET_AVATAR_VIDEO_INFERENCE_DETAILS: GAN_AI_GET_AVATAR_VIDEO_INFERENCE_DETAILS_INPUT
  GET_PHOTO_AVATAR_DETAILS: GAN_AI_GET_PHOTO_AVATAR_DETAILS_INPUT
  GET_PHOTO_AVATAR_INFERENCE_DETAILS: GAN_AI_GET_PHOTO_AVATAR_INFERENCE_DETAILS_INPUT
  LIST_AVATAR_VIDEOS: GAN_AI_LIST_AVATAR_VIDEOS_INPUT
  LIST_PHOTO_AVATARS: GAN_AI_LIST_PHOTO_AVATARS_INPUT
  LIST_PHOTO_AVATAR_INFERENCES: GAN_AI_LIST_PHOTO_AVATAR_INFERENCES_INPUT
  LOGIN: GAN_AI_LOGIN_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GAN_AI".
 */
export type GAN_AI_TOOL_OUTPUTS = {
  GAN_AI_LOGIN: GAN_AI_GAN_AI_LOGIN_OUTPUT
  GAN_AI_TTS: GAN_AI_GAN_AI_TTS_OUTPUT
  GET_AVATAR_VIDEO_INFERENCE_DETAILS: GAN_AI_GET_AVATAR_VIDEO_INFERENCE_DETAILS_OUTPUT
  GET_PHOTO_AVATAR_DETAILS: GAN_AI_GET_PHOTO_AVATAR_DETAILS_OUTPUT
  GET_PHOTO_AVATAR_INFERENCE_DETAILS: GAN_AI_GET_PHOTO_AVATAR_INFERENCE_DETAILS_OUTPUT
  LIST_AVATAR_VIDEOS: GAN_AI_LIST_AVATAR_VIDEOS_OUTPUT
  LIST_PHOTO_AVATARS: GAN_AI_LIST_PHOTO_AVATARS_OUTPUT
  LIST_PHOTO_AVATAR_INFERENCES: GAN_AI_LIST_PHOTO_AVATAR_INFERENCES_OUTPUT
  LOGIN: GAN_AI_LOGIN_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GAN_AI toolkit.
 */
export const GAN_AI = {
  slug: "gan_ai",
  tools: {
    /**
     * Tool to authenticate a user and retrieve tokens. - If email/password are provided: performs classic login (POST /users/login). - Otherwise: mints a dynamic access token using existing Authorization (POST /users/create_dynamic_token_v2).
     */
    GAN_AI_LOGIN: "GAN_AI_GAN_AI_LOGIN",
    /**
     * Tool to convert text to speech synchronously. Use after selecting a voice ID via Get Voices tool.
     */
    GAN_AI_TTS: "GAN_AI_GAN_AI_TTS",
    /**
     * Tool to retrieve detailed status and metadata for a specific avatar video inference. Use when you have an inference_id and need to check its processing status and access video URLs.
     */
    GET_AVATAR_VIDEO_INFERENCE_DETAILS: "GAN_AI_GET_AVATAR_VIDEO_INFERENCE_DETAILS",
    /**
     * Tool to retrieve detailed information for a specific photo avatar by ID. Use when you need to check photo avatar processing status and access its metadata and image URL.
     */
    GET_PHOTO_AVATAR_DETAILS: "GAN_AI_GET_PHOTO_AVATAR_DETAILS",
    /**
     * Tool to fetch photo avatar inference details. Use after obtaining a valid inference ID to retrieve detailed information.
     */
    GET_PHOTO_AVATAR_INFERENCE_DETAILS: "GAN_AI_GET_PHOTO_AVATAR_INFERENCE_DETAILS",
    /**
     * Tool to list avatar video inferences. Use when you need to retrieve generated avatar videos with optional filtering by avatar ID, title, status, or date range.
     */
    LIST_AVATAR_VIDEOS: "GAN_AI_LIST_AVATAR_VIDEOS",
    /**
     * Tool to list avatars. Use when you need a paginated collection of avatars with filters. Example: "List the first 10 published avatars created after 2023-01-01".
     */
    LIST_PHOTO_AVATARS: "GAN_AI_LIST_PHOTO_AVATARS",
    /**
     * Tool to list photo avatar inferences. Use when you need to retrieve inference videos with optional filtering by avatar, title, status, or date range.
     */
    LIST_PHOTO_AVATAR_INFERENCES: "GAN_AI_LIST_PHOTO_AVATAR_INFERENCES",
    /**
     * Tool to authenticate a user and retrieve access and refresh tokens. Use when you need to login before calling other GAN.AI API actions.
     */
    LOGIN: "GAN_AI_LOGIN",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GAN_AI".
 */
export type GAN_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GAN_AI".
 */
export type GAN_AI_TRIGGER_EVENTS = {}
