// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of VEO's VEO_DOWNLOAD_VIDEO tool input.
 */
type VEO_DOWNLOAD_VIDEO_INPUT = {
  /**
   * Download Path
   * @description Local file path to save the video
   */
  download_path?: string;
  /**
   * Video Uri
   * @description Download URI from operation response
   */
  video_uri?: string;
};

/**
 * Type of VEO's VEO_DOWNLOAD_VIDEO tool output.
 */
type VEO_DOWNLOAD_VIDEO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Path */
      path: string;
      /** Size Bytes */
      size_bytes: number;
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
 * Type of VEO's VEO_GENERATE_VIDEOS tool input.
 */
type VEO_GENERATE_VIDEOS_INPUT = {
  /**
   * Aspect Ratio
   * @description Desired aspect ratio, e.g., 16:9, 1:1, 9:16
   * @default null
   */
  aspect_ratio: string | null;
  /**
   * Extras
   * @description Additional parameters passed through to API
   * @default null
   */
  extras: {
      [key: string]: unknown;
  } | null;
  /**
   * Model
   * @description Model to use. Examples: 'veo-3.0-generate-preview', 'veo-3.0-fast-generate-preview', 'veo-2.0-generate-001'
   * @default veo-3.0-generate-preview
   */
  model: string | null;
  /**
   * Negative Prompt
   * @description Elements to avoid in the generated video
   * @default null
   */
  negative_prompt: string | null;
  /**
   * Person Generation
   * @description allow | dont_allow (regional constraints apply)
   * @default null
   */
  person_generation: string | null;
  /**
   * Prompt
   * @description Text prompt for Veo video generation
   */
  prompt?: string;
};

/**
 * Type of VEO's VEO_GENERATE_VIDEOS tool output.
 */
type VEO_GENERATE_VIDEOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Operation Name
       * @description Long-running operation name/id
       */
      operation_name: string;
      /** Raw */
      raw?: {
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
 * Type of VEO's VEO_GET_VIDEOS_OPERATION tool input.
 */
type VEO_GET_VIDEOS_OPERATION_INPUT = {
  /**
   * Operation Name
   * @description Operation resource name returned by predictLongRunning
   */
  operation_name?: string;
};

/**
 * Type of VEO's VEO_GET_VIDEOS_OPERATION tool output.
 */
type VEO_GET_VIDEOS_OPERATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Done */
      done: boolean;
      /**
       * Error
       * @default null
       */
      error: {
          [key: string]: unknown;
      } | null;
      /** Raw */
      raw?: {
          [key: string]: unknown;
      };
      /**
       * Response
       * @default null
       */
      response: {
          [key: string]: unknown;
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
 * Type of VEO's VEO_LIST_MODELS tool input.
 */
type VEO_LIST_MODELS_INPUT = {
  /**
   * Filter Prefix
   * @description Filter models by name prefix (client-side)
   * @default veo-
   */
  filter_prefix: string;
};

/**
 * Type of VEO's VEO_LIST_MODELS tool output.
 */
type VEO_LIST_MODELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Models */
      models?: {
          [key: string]: unknown;
      }[];
      /** Raw */
      raw?: {
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
 * Type of VEO's VEO_WAIT_FOR_VIDEO tool input.
 */
type VEO_WAIT_FOR_VIDEO_INPUT = {
  /** Operation Name */
  operation_name?: string;
  /**
   * Poll Interval S
   * @default 10
   */
  poll_interval_s: number;
  /**
   * Timeout S
   * @default null
   */
  timeout_s: number | null;
};

/**
 * Type of VEO's VEO_WAIT_FOR_VIDEO tool output.
 */
type VEO_WAIT_FOR_VIDEO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Done */
      done: boolean;
      /** Raw */
      raw?: {
          [key: string]: unknown;
      };
      /**
       * Video Uri
       * @default null
       */
      video_uri: string | null;
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
 * Type map of all available tool input types for toolkit "VEO".
 */
export type VEO_TOOL_INPUTS = {
  DOWNLOAD_VIDEO: VEO_DOWNLOAD_VIDEO_INPUT
  GENERATE_VIDEOS: VEO_GENERATE_VIDEOS_INPUT
  GET_VIDEOS_OPERATION: VEO_GET_VIDEOS_OPERATION_INPUT
  LIST_MODELS: VEO_LIST_MODELS_INPUT
  WAIT_FOR_VIDEO: VEO_WAIT_FOR_VIDEO_INPUT
}

/**
 * Type map of all available tool input types for toolkit "VEO".
 */
export type VEO_TOOL_OUTPUTS = {
  DOWNLOAD_VIDEO: VEO_DOWNLOAD_VIDEO_OUTPUT
  GENERATE_VIDEOS: VEO_GENERATE_VIDEOS_OUTPUT
  GET_VIDEOS_OPERATION: VEO_GET_VIDEOS_OPERATION_OUTPUT
  LIST_MODELS: VEO_LIST_MODELS_OUTPUT
  WAIT_FOR_VIDEO: VEO_WAIT_FOR_VIDEO_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's VEO toolkit.
 */
export const VEO = {
  slug: "veo",
  tools: {
    /**
     * Download video (veo)
     */
    DOWNLOAD_VIDEO: "VEO_DOWNLOAD_VIDEO",
    /**
     * Generate videos (veo)
     */
    GENERATE_VIDEOS: "VEO_GENERATE_VIDEOS",
    /**
     * Get videos operation (veo)
     */
    GET_VIDEOS_OPERATION: "VEO_GET_VIDEOS_OPERATION",
    /**
     * List models (gemini api)
     */
    LIST_MODELS: "VEO_LIST_MODELS",
    /**
     * Wait for video (veo)
     */
    WAIT_FOR_VIDEO: "VEO_WAIT_FOR_VIDEO",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "VEO".
 */
export type VEO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "VEO".
 */
export type VEO_TRIGGER_EVENTS = {}
