// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HEYGEN's HEYGEN_ADD_NEW_ASSET tool input.
 */
type HEYGEN_ADD_NEW_ASSET_INPUT = {
  /**
   * FileUploadable
   * @description Path to file
   */
  file?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
};

/**
 * Type of HEYGEN's HEYGEN_ADD_NEW_ASSET tool output.
 */
type HEYGEN_ADD_NEW_ASSET_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_PERSONALIZED_VIDEO_ADD_CONTACT tool input.
 */
type HEYGEN_PERSONALIZED_VIDEO_ADD_CONTACT_INPUT = {
  /**
   * Project Id
   * @description Project identifier
   */
  project_id?: string;
  /**
   * Variables List
   * @description Variables List
   */
  variables_list?: {
      /**
       * Email
       * Format: email
       * @description Contact"s email
       */
      email: string;
      /**
       * First Name
       * @description Contact"s first name
       */
      first_name: string;
  }[];
};

/**
 * Type of HEYGEN's HEYGEN_PERSONALIZED_VIDEO_ADD_CONTACT tool output.
 */
type HEYGEN_PERSONALIZED_VIDEO_ADD_CONTACT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_PERSONALIZED_VIDEO_AUDIENCE_DETAIL tool input.
 */
type HEYGEN_PERSONALIZED_VIDEO_AUDIENCE_DETAIL_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of HEYGEN's HEYGEN_PERSONALIZED_VIDEO_AUDIENCE_DETAIL tool output.
 */
type HEYGEN_PERSONALIZED_VIDEO_AUDIENCE_DETAIL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_PERSONALIZED_VIDEO_PROJECT_DETAIL tool input.
 */
type HEYGEN_PERSONALIZED_VIDEO_PROJECT_DETAIL_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of HEYGEN's HEYGEN_PERSONALIZED_VIDEO_PROJECT_DETAIL tool output.
 */
type HEYGEN_PERSONALIZED_VIDEO_PROJECT_DETAIL_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_POST_TALKING_PHOTO_BINARY_IMAGE tool input.
 */
type HEYGEN_POST_TALKING_PHOTO_BINARY_IMAGE_INPUT = {
  /**
   * FileUploadable
   * @description Path to file
   */
  file?: {
      /** Mimetype */
      mimetype: string;
      /** Name */
      name: string;
      /** S3Key */
      s3key: string;
  };
};

/**
 * Type of HEYGEN's HEYGEN_POST_TALKING_PHOTO_BINARY_IMAGE tool output.
 */
type HEYGEN_POST_TALKING_PHOTO_BINARY_IMAGE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_STREAMING_AVATAR_LIST tool input.
 */
type HEYGEN_STREAMING_AVATAR_LIST_INPUT = object;

/**
 * Type of HEYGEN's HEYGEN_STREAMING_AVATAR_LIST tool output.
 */
type HEYGEN_STREAMING_AVATAR_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_STREAMING_CREATE_TOKEN tool input.
 */
type HEYGEN_STREAMING_CREATE_TOKEN_INPUT = {
  /**
   * Expiry
   * @description Token expiry time in seconds
   * @default 3600
   */
  expiry: number;
};

/**
 * Type of HEYGEN's HEYGEN_STREAMING_CREATE_TOKEN tool output.
 */
type HEYGEN_STREAMING_CREATE_TOKEN_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_STREAMING_ICE tool input.
 */
type HEYGEN_STREAMING_ICE_INPUT = {
  /**
   * Candidate  Candidate
   * @description ICE candidate string
   */
  candidate__candidate?: string;
  /**
   * Candidate  Sdp M Line Index
   * @description Index of the media line
   */
  candidate__sdpMLineIndex?: number;
  /**
   * Candidate  Sdp Mid
   * @description Media stream identifier
   */
  candidate__sdpMid?: string;
  /**
   * Candidate  Username Fragment
   * @description ICE username fragment
   */
  candidate__usernameFragment?: string;
  /**
   * Session Id
   * @description Streaming session ID
   */
  session_id?: string;
};

/**
 * Type of HEYGEN's HEYGEN_STREAMING_ICE tool output.
 */
type HEYGEN_STREAMING_ICE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_STREAMING_INTERRUPT tool input.
 */
type HEYGEN_STREAMING_INTERRUPT_INPUT = {
  /**
   * Session Id
   * @description ID of the streaming session to interrupt
   */
  session_id?: string;
};

/**
 * Type of HEYGEN's HEYGEN_STREAMING_INTERRUPT tool output.
 */
type HEYGEN_STREAMING_INTERRUPT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_STREAMING_LIST tool input.
 */
type HEYGEN_STREAMING_LIST_INPUT = object;

/**
 * Type of HEYGEN's HEYGEN_STREAMING_LIST tool output.
 */
type HEYGEN_STREAMING_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_STREAMING_NEW tool input.
 */
type HEYGEN_STREAMING_NEW_INPUT = {
  /**
   * Quality
   * @description Streaming quality
   * @default medium
   * @enum {string}
   */
  quality: "high" | "low" | "medium";
};

/**
 * Type of HEYGEN's HEYGEN_STREAMING_NEW tool output.
 */
type HEYGEN_STREAMING_NEW_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_STREAMING_START tool input.
 */
type HEYGEN_STREAMING_START_INPUT = object;

/**
 * Type of HEYGEN's HEYGEN_STREAMING_START tool output.
 */
type HEYGEN_STREAMING_START_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_STREAMING_STOP tool input.
 */
type HEYGEN_STREAMING_STOP_INPUT = {
  /**
   * Session Id
   * @description Session to stop
   */
  session_id?: string;
};

/**
 * Type of HEYGEN's HEYGEN_STREAMING_STOP tool output.
 */
type HEYGEN_STREAMING_STOP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_STREAMING_TASK tool input.
 */
type HEYGEN_STREAMING_TASK_INPUT = {
  /**
   * Session Id
   * @description Session identifier
   */
  session_id?: string;
  /**
   * Text
   * @description Text for avatar to speak
   */
  text?: string;
};

/**
 * Type of HEYGEN's HEYGEN_STREAMING_TASK tool output.
 */
type HEYGEN_STREAMING_TASK_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V1_AVATAR_LIST tool input.
 */
type HEYGEN_V1_AVATAR_LIST_INPUT = object;

/**
 * Type of HEYGEN's HEYGEN_V1_AVATAR_LIST tool output.
 */
type HEYGEN_V1_AVATAR_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V1_TALKING_PHOTO_LIST tool input.
 */
type HEYGEN_V1_TALKING_PHOTO_LIST_INPUT = object;

/**
 * Type of HEYGEN's HEYGEN_V1_TALKING_PHOTO_LIST tool output.
 */
type HEYGEN_V1_TALKING_PHOTO_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V1_VIDEO_DELETE tool input.
 */
type HEYGEN_V1_VIDEO_DELETE_INPUT = {
  /**
   * Video Id
   * @description Video Id
   */
  video_id?: string;
};

/**
 * Type of HEYGEN's HEYGEN_V1_VIDEO_DELETE tool output.
 */
type HEYGEN_V1_VIDEO_DELETE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V1_VIDEO_LIST tool input.
 */
type HEYGEN_V1_VIDEO_LIST_INPUT = object;

/**
 * Type of HEYGEN's HEYGEN_V1_VIDEO_LIST tool output.
 */
type HEYGEN_V1_VIDEO_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V1_VIDEO_STATUS_GET_LATEST_ID tool input.
 */
type HEYGEN_V1_VIDEO_STATUS_GET_LATEST_ID_INPUT = {
  /**
   * Video Id
   * @description Video Id
   */
  video_id?: string;
};

/**
 * Type of HEYGEN's HEYGEN_V1_VIDEO_STATUS_GET_LATEST_ID tool output.
 */
type HEYGEN_V1_VIDEO_STATUS_GET_LATEST_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V1_VOICE_LIST tool input.
 */
type HEYGEN_V1_VOICE_LIST_INPUT = object;

/**
 * Type of HEYGEN's HEYGEN_V1_VOICE_LIST tool output.
 */
type HEYGEN_V1_VOICE_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V1_WEBHOOK_ENDPOINT_ADD tool input.
 */
type HEYGEN_V1_WEBHOOK_ENDPOINT_ADD_INPUT = {
  /**
   * Events
   * @description Event types to subscribe to
   */
  events?: string[];
  /**
   * Url
   * Format: uri
   * @description Webhook URL
   */
  url?: string;
};

/**
 * Type of HEYGEN's HEYGEN_V1_WEBHOOK_ENDPOINT_ADD tool output.
 */
type HEYGEN_V1_WEBHOOK_ENDPOINT_ADD_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V1_WEBHOOK_ENDPOINT_DELETE tool input.
 */
type HEYGEN_V1_WEBHOOK_ENDPOINT_DELETE_INPUT = {
  /**
   * Endpoint Id
   * @description Endpoint Id
   */
  endpoint_id?: string;
};

/**
 * Type of HEYGEN's HEYGEN_V1_WEBHOOK_ENDPOINT_DELETE tool output.
 */
type HEYGEN_V1_WEBHOOK_ENDPOINT_DELETE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V1_WEBHOOK_ENDPOINT_LIST tool input.
 */
type HEYGEN_V1_WEBHOOK_ENDPOINT_LIST_INPUT = object;

/**
 * Type of HEYGEN's HEYGEN_V1_WEBHOOK_ENDPOINT_LIST tool output.
 */
type HEYGEN_V1_WEBHOOK_ENDPOINT_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V1_WEBHOOK_WEBHOOK_LIST tool input.
 */
type HEYGEN_V1_WEBHOOK_WEBHOOK_LIST_INPUT = object;

/**
 * Type of HEYGEN's HEYGEN_V1_WEBHOOK_WEBHOOK_LIST tool output.
 */
type HEYGEN_V1_WEBHOOK_WEBHOOK_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V2_AVATARS tool input.
 */
type HEYGEN_V2_AVATARS_INPUT = object;

/**
 * Type of HEYGEN's HEYGEN_V2_AVATARS tool output.
 */
type HEYGEN_V2_AVATARS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V2_TALKING_PHOTO_ID_DELETE tool input.
 */
type HEYGEN_V2_TALKING_PHOTO_ID_DELETE_INPUT = {
  /**
   * Id
   * @description id
   */
  id?: string;
};

/**
 * Type of HEYGEN's HEYGEN_V2_TALKING_PHOTO_ID_DELETE tool output.
 */
type HEYGEN_V2_TALKING_PHOTO_ID_DELETE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V2_TEMPLATES tool input.
 */
type HEYGEN_V2_TEMPLATES_INPUT = object;

/**
 * Type of HEYGEN's HEYGEN_V2_TEMPLATES tool output.
 */
type HEYGEN_V2_TEMPLATES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V2_TEMPLATE_GENERATE tool input.
 */
type HEYGEN_V2_TEMPLATE_GENERATE_INPUT = {
  /**
   * Caption
   * @description Enable captions
   */
  caption?: boolean;
  /**
   * Dimension  Height
   * @description Video height
   */
  dimension__height?: number;
  /**
   * Dimension  Width
   * @description Video width
   */
  dimension__width?: number;
  /**
   * Id
   * @description Template ID
   */
  id?: string;
  /**
   * Test
   * @description Test mode flag
   */
  test?: boolean;
  /**
   * Title
   * @description Video title
   */
  title?: string;
  /**
   * Variables
   * @description Variables
   */
  variables?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
};

/**
 * Type of HEYGEN's HEYGEN_V2_TEMPLATE_GENERATE tool output.
 */
type HEYGEN_V2_TEMPLATE_GENERATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V2_TEMPLATE_ID tool input.
 */
type HEYGEN_V2_TEMPLATE_ID_INPUT = {
  /**
   * Id
   * @description Template ID
   */
  id?: string;
};

/**
 * Type of HEYGEN's HEYGEN_V2_TEMPLATE_ID tool output.
 */
type HEYGEN_V2_TEMPLATE_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V2_USER_REMAINING_QUOTA tool input.
 */
type HEYGEN_V2_USER_REMAINING_QUOTA_INPUT = object;

/**
 * Type of HEYGEN's HEYGEN_V2_USER_REMAINING_QUOTA tool output.
 */
type HEYGEN_V2_USER_REMAINING_QUOTA_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V2_VIDEO_GENERATE tool input.
 */
type HEYGEN_V2_VIDEO_GENERATE_INPUT = {
  /**
   * Aspect Ratio
   * @description Video aspect ratio
   */
  aspect_ratio?: string;
  /**
   * Callback Id
   * @description Optional callback ID
   */
  callback_id?: string;
  /**
   * Dimension  Height
   * @description Video height in pixels
   */
  dimension__height?: number;
  /**
   * Dimension  Width
   * @description Video width in pixels
   */
  dimension__width?: number;
  /**
   * Test
   * @description Test mode flag
   */
  test?: boolean;
  /**
   * Title
   * @description The title of the video
   */
  title?: string;
  /**
   * Video Inputs
   * @description Array of video input configurations
   */
  video_inputs?: {
      /**
       * Character  Avatar  Id
       * @description ID of the avatar
       */
      character__avatar__id?: string;
      /**
       * Character  Avatar  Style
       * @description Style of the avatar
       */
      character__avatar__style?: string;
      /**
       * Character  Type
       * @description Type of character
       * @enum {string}
       */
      character__type?: "avatar";
      /**
       * Voice  Input  Text
       * @description Text to be spoken
       */
      voice__input__text?: string;
      /**
       * Voice  Type
       * @description Type of voice input
       * @enum {string}
       */
      voice__type?: "text";
      /**
       * Voice  Voice  Id
       * @description ID of the voice
       */
      voice__voice__id?: string;
  }[];
};

/**
 * Type of HEYGEN's HEYGEN_V2_VIDEO_GENERATE tool output.
 */
type HEYGEN_V2_VIDEO_GENERATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V2_VIDEO_TRANSLATE tool input.
 */
type HEYGEN_V2_VIDEO_TRANSLATE_INPUT = {
  /**
   * Output Language
   * @description Target language
   */
  output_language?: string;
  /**
   * Speaker Num
   * @description Number of speakers
   */
  speaker_num?: number;
  /**
   * Title
   * @description Title for translated video
   */
  title?: string;
  /**
   * Translate Audio Only
   * @description Translate only audio
   * @default false
   */
  translate_audio_only: boolean;
  /**
   * Video Url
   * Format: uri
   * @description Source video URL
   */
  video_url?: string;
};

/**
 * Type of HEYGEN's HEYGEN_V2_VIDEO_TRANSLATE tool output.
 */
type HEYGEN_V2_VIDEO_TRANSLATE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V2_VIDEO_TRANSLATE_ID_STATUS tool input.
 */
type HEYGEN_V2_VIDEO_TRANSLATE_ID_STATUS_INPUT = {
  /**
   * Id
   * @description Video ID
   */
  id?: string;
};

/**
 * Type of HEYGEN's HEYGEN_V2_VIDEO_TRANSLATE_ID_STATUS tool output.
 */
type HEYGEN_V2_VIDEO_TRANSLATE_ID_STATUS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V2_VIDEO_TRANSLATE_TARGET_LANGUAGES tool input.
 */
type HEYGEN_V2_VIDEO_TRANSLATE_TARGET_LANGUAGES_INPUT = object;

/**
 * Type of HEYGEN's HEYGEN_V2_VIDEO_TRANSLATE_TARGET_LANGUAGES tool output.
 */
type HEYGEN_V2_VIDEO_TRANSLATE_TARGET_LANGUAGES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type of HEYGEN's HEYGEN_V2_VOICES tool input.
 */
type HEYGEN_V2_VOICES_INPUT = object;

/**
 * Type of HEYGEN's HEYGEN_V2_VOICES tool output.
 */
type HEYGEN_V2_VOICES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "HEYGEN".
 */
export type HEYGEN_TOOL_INPUTS = {
  ADD_NEW_ASSET: HEYGEN_ADD_NEW_ASSET_INPUT
  PERSONALIZED_VIDEO_ADD_CONTACT: HEYGEN_PERSONALIZED_VIDEO_ADD_CONTACT_INPUT
  PERSONALIZED_VIDEO_AUDIENCE_DETAIL: HEYGEN_PERSONALIZED_VIDEO_AUDIENCE_DETAIL_INPUT
  PERSONALIZED_VIDEO_PROJECT_DETAIL: HEYGEN_PERSONALIZED_VIDEO_PROJECT_DETAIL_INPUT
  POST_TALKING_PHOTO_BINARY_IMAGE: HEYGEN_POST_TALKING_PHOTO_BINARY_IMAGE_INPUT
  STREAMING_AVATAR_LIST: HEYGEN_STREAMING_AVATAR_LIST_INPUT
  STREAMING_CREATE_TOKEN: HEYGEN_STREAMING_CREATE_TOKEN_INPUT
  STREAMING_ICE: HEYGEN_STREAMING_ICE_INPUT
  STREAMING_INTERRUPT: HEYGEN_STREAMING_INTERRUPT_INPUT
  STREAMING_LIST: HEYGEN_STREAMING_LIST_INPUT
  STREAMING_NEW: HEYGEN_STREAMING_NEW_INPUT
  STREAMING_START: HEYGEN_STREAMING_START_INPUT
  STREAMING_STOP: HEYGEN_STREAMING_STOP_INPUT
  STREAMING_TASK: HEYGEN_STREAMING_TASK_INPUT
  V1_AVATAR_LIST: HEYGEN_V1_AVATAR_LIST_INPUT
  V1_TALKING_PHOTO_LIST: HEYGEN_V1_TALKING_PHOTO_LIST_INPUT
  V1_VIDEO_DELETE: HEYGEN_V1_VIDEO_DELETE_INPUT
  V1_VIDEO_LIST: HEYGEN_V1_VIDEO_LIST_INPUT
  V1_VIDEO_STATUS_GET_LATEST_ID: HEYGEN_V1_VIDEO_STATUS_GET_LATEST_ID_INPUT
  V1_VOICE_LIST: HEYGEN_V1_VOICE_LIST_INPUT
  V1_WEBHOOK_ENDPOINT_ADD: HEYGEN_V1_WEBHOOK_ENDPOINT_ADD_INPUT
  V1_WEBHOOK_ENDPOINT_DELETE: HEYGEN_V1_WEBHOOK_ENDPOINT_DELETE_INPUT
  V1_WEBHOOK_ENDPOINT_LIST: HEYGEN_V1_WEBHOOK_ENDPOINT_LIST_INPUT
  V1_WEBHOOK_WEBHOOK_LIST: HEYGEN_V1_WEBHOOK_WEBHOOK_LIST_INPUT
  V2_AVATARS: HEYGEN_V2_AVATARS_INPUT
  V2_TALKING_PHOTO_ID_DELETE: HEYGEN_V2_TALKING_PHOTO_ID_DELETE_INPUT
  V2_TEMPLATES: HEYGEN_V2_TEMPLATES_INPUT
  V2_TEMPLATE_GENERATE: HEYGEN_V2_TEMPLATE_GENERATE_INPUT
  V2_TEMPLATE_ID: HEYGEN_V2_TEMPLATE_ID_INPUT
  V2_USER_REMAINING_QUOTA: HEYGEN_V2_USER_REMAINING_QUOTA_INPUT
  V2_VIDEO_GENERATE: HEYGEN_V2_VIDEO_GENERATE_INPUT
  V2_VIDEO_TRANSLATE: HEYGEN_V2_VIDEO_TRANSLATE_INPUT
  V2_VIDEO_TRANSLATE_ID_STATUS: HEYGEN_V2_VIDEO_TRANSLATE_ID_STATUS_INPUT
  V2_VIDEO_TRANSLATE_TARGET_LANGUAGES: HEYGEN_V2_VIDEO_TRANSLATE_TARGET_LANGUAGES_INPUT
  V2_VOICES: HEYGEN_V2_VOICES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HEYGEN".
 */
export type HEYGEN_TOOL_OUTPUTS = {
  ADD_NEW_ASSET: HEYGEN_ADD_NEW_ASSET_OUTPUT
  PERSONALIZED_VIDEO_ADD_CONTACT: HEYGEN_PERSONALIZED_VIDEO_ADD_CONTACT_OUTPUT
  PERSONALIZED_VIDEO_AUDIENCE_DETAIL: HEYGEN_PERSONALIZED_VIDEO_AUDIENCE_DETAIL_OUTPUT
  PERSONALIZED_VIDEO_PROJECT_DETAIL: HEYGEN_PERSONALIZED_VIDEO_PROJECT_DETAIL_OUTPUT
  POST_TALKING_PHOTO_BINARY_IMAGE: HEYGEN_POST_TALKING_PHOTO_BINARY_IMAGE_OUTPUT
  STREAMING_AVATAR_LIST: HEYGEN_STREAMING_AVATAR_LIST_OUTPUT
  STREAMING_CREATE_TOKEN: HEYGEN_STREAMING_CREATE_TOKEN_OUTPUT
  STREAMING_ICE: HEYGEN_STREAMING_ICE_OUTPUT
  STREAMING_INTERRUPT: HEYGEN_STREAMING_INTERRUPT_OUTPUT
  STREAMING_LIST: HEYGEN_STREAMING_LIST_OUTPUT
  STREAMING_NEW: HEYGEN_STREAMING_NEW_OUTPUT
  STREAMING_START: HEYGEN_STREAMING_START_OUTPUT
  STREAMING_STOP: HEYGEN_STREAMING_STOP_OUTPUT
  STREAMING_TASK: HEYGEN_STREAMING_TASK_OUTPUT
  V1_AVATAR_LIST: HEYGEN_V1_AVATAR_LIST_OUTPUT
  V1_TALKING_PHOTO_LIST: HEYGEN_V1_TALKING_PHOTO_LIST_OUTPUT
  V1_VIDEO_DELETE: HEYGEN_V1_VIDEO_DELETE_OUTPUT
  V1_VIDEO_LIST: HEYGEN_V1_VIDEO_LIST_OUTPUT
  V1_VIDEO_STATUS_GET_LATEST_ID: HEYGEN_V1_VIDEO_STATUS_GET_LATEST_ID_OUTPUT
  V1_VOICE_LIST: HEYGEN_V1_VOICE_LIST_OUTPUT
  V1_WEBHOOK_ENDPOINT_ADD: HEYGEN_V1_WEBHOOK_ENDPOINT_ADD_OUTPUT
  V1_WEBHOOK_ENDPOINT_DELETE: HEYGEN_V1_WEBHOOK_ENDPOINT_DELETE_OUTPUT
  V1_WEBHOOK_ENDPOINT_LIST: HEYGEN_V1_WEBHOOK_ENDPOINT_LIST_OUTPUT
  V1_WEBHOOK_WEBHOOK_LIST: HEYGEN_V1_WEBHOOK_WEBHOOK_LIST_OUTPUT
  V2_AVATARS: HEYGEN_V2_AVATARS_OUTPUT
  V2_TALKING_PHOTO_ID_DELETE: HEYGEN_V2_TALKING_PHOTO_ID_DELETE_OUTPUT
  V2_TEMPLATES: HEYGEN_V2_TEMPLATES_OUTPUT
  V2_TEMPLATE_GENERATE: HEYGEN_V2_TEMPLATE_GENERATE_OUTPUT
  V2_TEMPLATE_ID: HEYGEN_V2_TEMPLATE_ID_OUTPUT
  V2_USER_REMAINING_QUOTA: HEYGEN_V2_USER_REMAINING_QUOTA_OUTPUT
  V2_VIDEO_GENERATE: HEYGEN_V2_VIDEO_GENERATE_OUTPUT
  V2_VIDEO_TRANSLATE: HEYGEN_V2_VIDEO_TRANSLATE_OUTPUT
  V2_VIDEO_TRANSLATE_ID_STATUS: HEYGEN_V2_VIDEO_TRANSLATE_ID_STATUS_OUTPUT
  V2_VIDEO_TRANSLATE_TARGET_LANGUAGES: HEYGEN_V2_VIDEO_TRANSLATE_TARGET_LANGUAGES_OUTPUT
  V2_VOICES: HEYGEN_V2_VOICES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HEYGEN toolkit.
 */
export const HEYGEN = {
  slug: "heygen",
  tools: {
    /**
     * Creates a new asset in the heygen platform. this endpoint allows users to add various types of assets that can be used in video generation, such as avatars, backgrounds, or other content elements. the asset is created by sending plain text data, which likely includes necessary metadata or configuration information. this tool should be used when integrating new assets into the heygen ecosystem for use in content creation workflows. it's important to note that this endpoint may not support direct file uploads; instead, it might expect references to pre-uploaded files or configuration data for asset creation.
     */
    ADD_NEW_ASSET: "HEYGEN_ADD_NEW_ASSET",
    /**
     * This endpoint allows you to add one or more contacts to a specific personalized video project in the heygen platform. it is used when you need to associate individual contact information with a project, likely for the purpose of creating tailored video content for each contact. the endpoint accepts a project identifier and a list of contacts, each with a first name and email address. this tool is essential for populating your project with recipient data, enabling the creation of personalized videos at scale. note that this endpoint only adds contacts to a project; it does not initiate video creation or sending. ensure that your project id is valid and that all contact information is accurate to avoid errors in video personalization or delivery.
     */
    PERSONALIZED_VIDEO_ADD_CONTACT: "HEYGEN_PERSONALIZED_VIDEO_ADD_CONTACT",
    /**
     * Retrieves detailed information about the audience for personalized videos. this endpoint provides insights into the target audience characteristics, preferences, and engagement metrics for heygen's ai-generated personalized video content. it can be used to gain a deeper understanding of the audience demographics, behavior patterns, and content preferences to optimize video creation and targeting strategies. the tool is particularly useful for content creators, marketers, and businesses looking to tailor their video content to specific audience segments using heygen's ai capabilities.
     */
    PERSONALIZED_VIDEO_AUDIENCE_DETAIL: "HEYGEN_PERSONALIZED_VIDEO_AUDIENCE_DETAIL",
    /**
     * Retrieves detailed information about a specific personalized video project in the heygen platform. this endpoint allows you to fetch comprehensive data about a project, including its current status, configuration settings, and any other relevant metadata. use this when you need to get an up-to-date overview of a particular video project, such as checking its progress, reviewing its settings, or gathering information for reporting purposes. the endpoint is read-only and does not modify any project data. note that it may not include the actual video content itself, but rather focuses on the project's attributes and status.
     */
    PERSONALIZED_VIDEO_PROJECT_DETAIL: "HEYGEN_PERSONALIZED_VIDEO_PROJECT_DETAIL",
    /**
     * Creates a talking photo by processing an uploaded image file. this endpoint enables users to transform static images into interactive, speaking visual content using heygen's advanced ai technology. it accepts jpeg or png image files and likely combines them with audio narration (though audio input is not specified in this schema). use this endpoint when you want to generate engaging, personalized content from still images, such as creating speaking avatars or animated photographs. the endpoint is particularly useful for marketing materials, educational content, or personalized messages. note that while image upload is specified, the method for providing or generating the associated audio is not detailed in this schema.
     */
    POST_TALKING_PHOTO_BINARY_IMAGE: "HEYGEN_POST_TALKING_PHOTO_BINARY_IMAGE",
    /**
     * Retrieves a list of available avatars for streaming purposes in the heygen platform. this endpoint allows developers to access the collection of realistic avatars that can be used for creating professional-looking videos with ai-generated content. it's designed to support applications requiring dynamic or live video content, enabling real-time access to the avatar library. the endpoint should be used when you need to fetch the current set of available avatars for integration into streaming or video generation workflows. it may not provide detailed information about each avatar's capabilities or customization options, focusing instead on delivering a quick, up-to-date list for immediate use in streaming contexts.
     */
    STREAMING_AVATAR_LIST: "HEYGEN_STREAMING_AVATAR_LIST",
    /**
     * Creates a new streaming token for use with heygen's real-time avatar and voice chat services. this endpoint generates a unique, time-limited token that authenticates and authorizes access to heygen's streaming capabilities. use this endpoint when initiating a new streaming session or when the previous token has expired. the generated token is typically for one-time use and should be obtained shortly before starting a streaming interaction. note that this endpoint does not initiate the streaming itself; it only provides the necessary credentials for subsequent streaming api calls.
     */
    STREAMING_CREATE_TOKEN: "HEYGEN_STREAMING_CREATE_TOKEN",
    /**
     * This endpoint is used to submit ice (interactive connectivity establishment) candidate information for a specific streaming session in the heygen platform. it plays a crucial role in establishing and managing peer-to-peer connections for real-time communication and streaming of avatar content. the endpoint should be called when new ice candidates are discovered during the connection setup process, typically as part of the webrtc negotiation. it's essential for ensuring optimal connectivity between clients, especially in scenarios involving nat traversal or complex network environments. this endpoint does not return the status of the connection or initiate the streaming itself; it only submits candidate information to be used in the connection process.
     */
    STREAMING_ICE: "HEYGEN_STREAMING_ICE",
    /**
     * Interrupts an ongoing streaming session with an interactive avatar. this endpoint allows immediate termination of the avatar's current action or speech, providing control over the flow of interaction. use this when you need to abruptly stop the avatar's current behavior, such as when changing topics or responding to user input that requires a different response. the interruption is immediate and irreversible, so use it judiciously to maintain a smooth user experience. this endpoint is particularly useful in scenarios where real-time responsiveness is crucial, like in customer service applications or interactive presentations.
     */
    STREAMING_INTERRUPT: "HEYGEN_STREAMING_INTERRUPT",
    /**
     * Retrieves a list of active or available streaming sessions or content within the heygen platform. this endpoint allows users to get an overview of ongoing streams, which may include live avatar interactions, real-time video generations, or other streaming content created using heygen's ai-driven tools. it's particularly useful for monitoring current streaming activities or checking the availability of streams for integration into applications. the endpoint returns basic information about each stream, such as stream ids, status, and possibly metadata, but does not provide the actual stream content. use this when you need to track or display a list of active streams in your application's interface or for administrative purposes.
     */
    STREAMING_LIST: "HEYGEN_STREAMING_LIST",
    /**
     * Initiates a new streaming session with heygen, allowing users to start an avatar-based stream with specified quality settings. this endpoint should be used when starting a new interactive content session or when creating a personalized digital avatar stream. it sets up the initial configuration for the streaming quality, which affects the overall user experience and bandwidth usage. the endpoint does not handle the actual streaming content or avatar creation; it only establishes the session parameters.
     */
    STREAMING_NEW: "HEYGEN_STREAMING_NEW",
    /**
     * Initiates a new streaming session for real-time communication in the heygen platform. this endpoint is used to set up a webrtc connection for video, audio, and data streaming, likely for interactions with ai avatars. it requires a unique session id and a session description protocol (sdp) offer to establish the connection. this endpoint should be called when starting a new interactive session with a heygen ai avatar or when initiating a live streaming event. it's crucial for setting up the initial parameters of the real-time communication channel.
     */
    STREAMING_START: "HEYGEN_STREAMING_START",
    /**
     * The streaming.stop endpoint is used to terminate an active streaming session in the heygen api. this endpoint should be called when you want to end a real-time data transfer session, such as when closing an interactive avatar conversation or stopping a live content stream. it's particularly useful for freeing up server resources and ensuring proper closure of streaming connections. the endpoint requires the unique session id to identify which specific session to stop, allowing for precise control over multiple concurrent sessions. note that once a session is stopped, it cannot be resumed; a new session must be started if streaming is needed again.
     */
    STREAMING_STOP: "HEYGEN_STREAMING_STOP",
    /**
     * The streamingtask endpoint initiates a real-time speaking task for an ai-driven avatar within an active streaming session. it enables developers to make avatars vocalize specified text, creating interactive and dynamic user experiences. this endpoint should be used when you want to generate speech from an avatar in response to user input or as part of a scripted interaction. it's particularly useful for applications requiring real-time avatar interactions, such as virtual assistants, interactive presentations, or educational content. note that this endpoint requires an active streaming session, and the avatar's voice and appearance are determined by the session configuration.
     */
    STREAMING_TASK: "HEYGEN_STREAMING_TASK",
    /**
     * Retrieves a list of available avatars from the heygen platform. this endpoint allows users to fetch both public and private avatars, depending on their access rights and the specified parameters. it's particularly useful for applications that need to display available avatars to users for selection or customization. the endpoint supports pagination to handle large numbers of avatars efficiently. use this when you need to present avatar options to users, manage avatar inventories, or sync local avatar data with the heygen platform. note that the response will likely include basic information about each avatar, such as id, name, and type, but may not include full avatar details or assets.
     */
    V1_AVATAR_LIST: "HEYGEN_V1_AVATAR_LIST",
    /**
     * Retrieves a list of talking photos created using the heygen platform. this endpoint allows users to fetch information about their existing talking photo projects, which are interactive images capable of speaking and engaging users. it's useful for managing and reviewing your talking photo content, or for integrating talking photo information into your application. the endpoint returns details about each talking photo, potentially including identifiers, creation dates, and associated metadata. note that this endpoint likely returns all talking photos by default, so for users with a large number of projects, implementing client-side filtering or pagination may be necessary.
     */
    V1_TALKING_PHOTO_LIST: "HEYGEN_V1_TALKING_PHOTO_LIST",
    /**
     * The video.delete endpoint allows users to remove a specific video from their heygen account. this operation moves the video to the trash, from where it can be restored if needed. use this endpoint when you want to delete a video that is no longer required or to manage your account's storage. it's important to note that this action doesn't permanently delete the video immediately, as it can be restored from the trash. exercise caution when using this endpoint, as deleted videos may not be recoverable after a certain period.
     */
    V1_VIDEO_DELETE: "HEYGEN_V1_VIDEO_DELETE",
    /**
     * Retrieves a list of videos associated with the user's account on the heygen platform. this endpoint is crucial for content management, allowing users to view and organize their video library efficiently. it provides an overview of all videos created or managed through the heygen service, including ai-generated videos with custom avatars. use this endpoint when you need to display a comprehensive list of videos, manage content, or track video creation progress. the response likely includes metadata for each video such as title, creation date, duration, and status. note that this endpoint does not provide the actual video content or detailed analytics; it's primarily for listing and basic information retrieval.
     */
    V1_VIDEO_LIST: "HEYGEN_V1_VIDEO_LIST",
    /**
     * Retrieves the current status of a video in the heygen platform. this endpoint is used to check the progress of video processing, particularly useful for avatar videos that may require time to generate. it provides real-time information on whether the video is still being processed or has been completed. use this endpoint to monitor the state of your video creation requests and determine when a video is ready for further actions or viewing. the status returned can help in managing user expectations and workflow sequencing in applications integrating heygen's video generation capabilities.
     */
    V1_VIDEO_STATUS_GET_LATEST_ID: "HEYGEN_V1_VIDEO_STATUS_GET_LATEST_ID",
    /**
     * Retrieves a comprehensive list of all available voices in the heygen platform. this endpoint should be used when you need to obtain information about the voice options that can be utilized for avatar creation or text-to-speech functionalities. the returned list likely includes details such as voice ids, names, languages, and potentially other characteristics like gender or accent. it's particularly useful for applications that need to present voice choices to users or for initializing voice-related features. note that this endpoint does not provide audio samples of the voices; it only lists their metadata.
     */
    V1_VOICE_LIST: "HEYGEN_V1_VOICE_LIST",
    /**
     * Adds a new webhook endpoint to receive real-time notifications for specified heygen events. this endpoint allows you to configure where and for which events you want to receive updates, enabling seamless integration of heygen's capabilities into your application. use this when you need to set up automated responses to specific events in the heygen platform, such as avatar creation or video completion. the webhook will send post requests to the specified url whenever the subscribed events occur. note that you may need to implement proper security measures on your receiving endpoint to validate incoming webhook requests.
     */
    V1_WEBHOOK_ENDPOINT_ADD: "HEYGEN_V1_WEBHOOK_ENDPOINT_ADD",
    /**
     * Deletes a specific webhook endpoint from the heygen system. this operation permanently removes the configured webhook, stopping any future notifications or data transmissions to the previously specified url. use this endpoint when you no longer need to receive real-time updates for certain events or when you want to change your webhook configuration. once deleted, you will need to create a new webhook endpoint if you wish to resume notifications. this action cannot be undone, so use it with caution. the deletion is typically immediate, but allow for a short processing time to ensure all systems are updated.
     */
    V1_WEBHOOK_ENDPOINT_DELETE: "HEYGEN_V1_WEBHOOK_ENDPOINT_DELETE",
    /**
     * Retrieves a list of all webhook endpoints configured for your heygen account. this endpoint allows you to view and manage the webhook configurations that receive notifications about various events in your heygen integration. use this endpoint to monitor your existing webhook setups, verify their status, or gather information for updating or removing webhooks. the response will likely include details such as the endpoint urls, associated event types, and current status of each webhook. this tool is particularly useful for developers managing multiple webhook integrations or troubleshooting notification issues within their heygen-powered applications.
     */
    V1_WEBHOOK_ENDPOINT_LIST: "HEYGEN_V1_WEBHOOK_ENDPOINT_LIST",
    /**
     * Retrieves a list of all webhooks configured for your heygen account. this endpoint allows you to view and manage the webhook integrations set up to receive real-time notifications about events in your heygen workspace, such as video generation status updates or avatar creation completions. use this endpoint when you need to audit your existing webhook configurations, verify webhook urls, or prepare for updating or deleting specific webhooks. the response typically includes details such as webhook ids, target urls, and the types of events each webhook is subscribed to. note that this endpoint does not create, modify, or delete webhooks; it only provides a read-only view of your current webhook configurations.
     */
    V1_WEBHOOK_WEBHOOK_LIST: "HEYGEN_V1_WEBHOOK_WEBHOOK_LIST",
    /**
     * Retrieves a list of available avatars from the heygen platform. this endpoint allows users to access the vast library of realistic avatars that can be used for video creation. it should be used when you need to browse or select avatars for your projects, such as creating marketing videos, educational content, or social media posts. the endpoint returns basic information about each avatar, which may include identifiers, names, and preview images. it does not provide detailed customization options or allow for avatar creation; it's purely for listing existing avatars. keep in mind that the returned list may be paginated, and additional calls might be needed to retrieve the full set of avatars.
     */
    V2_AVATARS: "HEYGEN_V2_AVATARS",
    /**
     * Deletes a specific talking photo from the heygen platform using its unique identifier. this endpoint should be used when you need to permanently remove a talking photo resource, such as when it's no longer needed or to manage storage. once deleted, the talking photo cannot be recovered, so use this endpoint with caution. it's important to note that this operation does not affect any videos or content that may have already been generated using this talking photo.
     */
    V2_TALKING_PHOTO_ID_DELETE: "HEYGEN_V2_TALKING_PHOTO_ID_DELETE",
    /**
     * Retrieves a list of available avatar templates from the heygen platform. this endpoint allows users to access pre-designed avatars that can be used for creating professional-looking videos. it's particularly useful when you need to browse or select from heygen's library of realistic avatars for your video projects. the endpoint returns template information, which likely includes details such as template ids, names, preview images, and customization options. use this endpoint when you want to display available avatar options to users or when you need to select a template for video generation.
     */
    V2_TEMPLATES: "HEYGEN_V2_TEMPLATES",
    /**
     * This endpoint generates a customized video based on a pre-existing template using heygen's ai-driven platform. it allows for dynamic content creation by accepting a video title and a set of variables that can be used to personalize the video content. the endpoint is ideal for creating tailored videos at scale, such as personalized marketing content, educational materials, or customized presentations. it supports optional features like test mode for preliminary checks, caption enablement for accessibility, and custom video dimensions for various output formats. this tool should be used when you need to produce videos with consistent structure but varying content, leveraging heygen's ai avatars and text-to-speech capabilities to create engaging, personalized video experiences.
     */
    V2_TEMPLATE_GENERATE: "HEYGEN_V2_TEMPLATE_GENERATE",
    /**
     * Retrieves a specific template from the heygen platform using its unique identifier. this endpoint allows users to access detailed information about a particular template, including its structure, elements, and customization options. it's particularly useful when you need to review or use an existing template for video creation or modification. the endpoint returns comprehensive template data, which may include settings for avatars, content placeholders, and customization parameters. use this when you want to fetch the complete details of a known template before applying it to create or edit a video. note that this endpoint retrieves template information only and does not create or modify any content.
     */
    V2_TEMPLATE_ID: "HEYGEN_V2_TEMPLATE_ID",
    /**
     * Retrieves the current remaining quota for the authenticated user on the heygen platform. this endpoint allows users to check their available resources or actions within their account limits. it should be used to monitor usage and plan resource allocation effectively. the returned information helps users understand how much of their quota is left before reaching account limits. note that this endpoint does not provide details on total quota or usage history, focusing solely on the remaining available quota.
     */
    V2_USER_REMAINING_QUOTA: "HEYGEN_V2_USER_REMAINING_QUOTA",
    /**
     * Generates a customized video using heygen's ai-driven platform. this endpoint allows you to create videos featuring digital avatars with specified voices, enabling dynamic content creation. it's ideal for producing personalized video content, such as explainer videos, product demonstrations, or interactive presentations. the endpoint supports multiple input configurations, allowing for complex video scenarios with different characters and voices. use this when you need to programmatically create ai-generated videos with specific avatar and voice combinations. note that while the endpoint offers extensive customization, real-time video generation is not supported, and processing times may vary based on complexity and system load.
     */
    V2_VIDEO_GENERATE: "HEYGEN_V2_VIDEO_GENERATE",
    /**
     * The translatevideo endpoint enables the translation of video content from one language to another. it offers flexible options for translating either the entire video or just the audio track, accommodating various use cases. this tool is ideal for creating multilingual versions of video content, making it accessible to a global audience. the endpoint requires specifying the source video url and the desired output language, with additional options to customize the translation process, such as handling multiple speakers and setting a title for the translated video. use this endpoint when you need to quickly and efficiently translate video content while maintaining the integrity of the original presentation.
     */
    V2_VIDEO_TRANSLATE: "HEYGEN_V2_VIDEO_TRANSLATE",
    /**
     * Retrieves the current status of a video translation job in the heygen platform. this endpoint allows users to check the progress of their requested video translations, providing information such as whether the translation is in progress, completed, or if any errors have occurred. it should be used when tracking the state of an ongoing translation task or to confirm if a translation has finished processing. the endpoint does not modify the translation job or initiate new translations; it's purely for status checking purposes.
     */
    V2_VIDEO_TRANSLATE_ID_STATUS: "HEYGEN_V2_VIDEO_TRANSLATE_ID_STATUS",
    /**
     * Retrieves a list of all available target languages supported by heygen's video translation feature. this endpoint should be used when you need to know which languages are available for translating your video content. it provides an up-to-date array of supported languages, including various dialects and locales, allowing you to make informed decisions about your video translation projects. the endpoint does not require any parameters and will return the complete list of supported languages, which currently includes over 77 options. this tool is particularly useful for planning multilingual content strategies or when preparing to use heygen's video translation services.
     */
    V2_VIDEO_TRANSLATE_TARGET_LANGUAGES: "HEYGEN_V2_VIDEO_TRANSLATE_TARGET_LANGUAGES",
    /**
     * Retrieves a list of available voice models and options that can be used with heygen's ai-driven video creation platform. this endpoint provides information about the various voice options, including different languages and voice characteristics, which can be applied to avatars in generated videos. use this endpoint when you need to present users with voice choices for their video projects or when implementing voice customization features in your application. the returned data likely includes details such as voice id, language, gender, and other relevant attributes for each available voice model. this endpoint is essential for applications that want to offer a range of voice options to enhance the personalization of ai-generated video content.
     */
    V2_VOICES: "HEYGEN_V2_VOICES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HEYGEN".
 */
export type HEYGEN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HEYGEN".
 */
export type HEYGEN_TRIGGER_EVENTS = {}
