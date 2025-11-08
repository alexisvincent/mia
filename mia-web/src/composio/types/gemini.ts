// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GEMINI's GEMINI_COUNT_TOKENS tool input.
 */
type GEMINI_COUNT_TOKENS_INPUT = {
  /**
   * Model
   * @description Model to use for token counting. Examples: 'gemini-1.5-flash', 'gemini-1.5-pro'
   * @default gemini-1.5-flash
   */
  model: string | null;
  /**
   * Text
   * @description Text to count tokens for
   */
  text?: string;
};

/**
 * Type of GEMINI's GEMINI_COUNT_TOKENS tool output.
 */
type GEMINI_COUNT_TOKENS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Raw */
      raw?: {
          [key: string]: unknown;
      };
      /**
       * Total Tokens
       * @description Total number of tokens
       */
      total_tokens: number;
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
 * Type of GEMINI's GEMINI_DOWNLOAD_VIDEO tool input.
 */
type GEMINI_DOWNLOAD_VIDEO_INPUT = {
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
 * Type of GEMINI's GEMINI_DOWNLOAD_VIDEO tool output.
 */
type GEMINI_DOWNLOAD_VIDEO_OUTPUT = {
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
 * Type of GEMINI's GEMINI_EMBED_CONTENT tool input.
 */
type GEMINI_EMBED_CONTENT_INPUT = {
  /**
   * Model
   * @description Embedding model to use. Examples: 'text-embedding-004', 'embedding-001'
   * @default text-embedding-004
   */
  model: string | null;
  /**
   * Task Type
   * @description Task type: 'RETRIEVAL_QUERY', 'RETRIEVAL_DOCUMENT', 'SEMANTIC_SIMILARITY', 'CLASSIFICATION', 'CLUSTERING'
   * @default null
   */
  task_type: string | null;
  /**
   * Text
   * @description Text to generate embeddings for
   */
  text?: string;
  /**
   * Title
   * @description Optional title for the content (for document embeddings)
   * @default null
   */
  title: string | null;
};

/**
 * Type of GEMINI's GEMINI_EMBED_CONTENT tool output.
 */
type GEMINI_EMBED_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Embedding
       * @description Embedding vector
       */
      embedding: number[];
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
 * Type of GEMINI's GEMINI_GENERATE_CONTENT tool input.
 */
type GEMINI_GENERATE_CONTENT_INPUT = {
  /**
   * Max Output Tokens
   * @description Maximum number of tokens to generate
   * @default null
   */
  max_output_tokens: number | null;
  /**
   * Model
   * @description Model to use. Examples: 'gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-2.0-flash-exp'
   * @default gemini-1.5-flash
   */
  model: string | null;
  /**
   * Prompt
   * @description Text prompt for content generation
   */
  prompt?: string;
  /**
   * Safety Settings
   * @description Safety filter settings
   * @default null
   */
  safety_settings: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Stop Sequences
   * @description Sequences where generation should stop
   * @default null
   */
  stop_sequences: string[] | null;
  /**
   * System Instruction
   * @description System instruction to guide the model's behavior
   * @default null
   */
  system_instruction: string | null;
  /**
   * Temperature
   * @description Controls randomness (0.0 to 2.0)
   * @default null
   */
  temperature: number | null;
  /**
   * Top K
   * @description Top-k sampling parameter
   * @default null
   */
  top_k: number | null;
  /**
   * Top P
   * @description Nucleus sampling parameter (0.0 to 1.0)
   * @default null
   */
  top_p: number | null;
};

/**
 * Type of GEMINI's GEMINI_GENERATE_CONTENT tool output.
 */
type GEMINI_GENERATE_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Candidates */
      candidates?: {
          [key: string]: unknown;
      }[];
      /** Raw */
      raw?: {
          [key: string]: unknown;
      };
      /**
       * Text
       * @description Generated text content
       */
      text: string;
      /**
       * Usage Metadata
       * @default null
       */
      usage_metadata: {
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
 * Type of GEMINI's GEMINI_GENERATE_IMAGE tool input.
 */
type GEMINI_GENERATE_IMAGE_INPUT = {
  /**
   * Max Output Tokens
   * @description Maximum number of tokens to generate (max 32,768)
   * @default null
   */
  max_output_tokens: number | null;
  /**
   * Model
   * @description Model to use. Use 'gemini-2.5-flash-image-preview' for image generation
   * @default gemini-2.5-flash-image-preview
   */
  model: string | null;
  /**
   * Prompt
   * @description Text prompt for image generation
   */
  prompt?: string;
  /**
   * Safety Settings
   * @description Safety filter settings
   * @default null
   */
  safety_settings: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Save Path
   * @description Optional local path to save the generated image
   * @default null
   */
  save_path: string | null;
  /**
   * System Instruction
   * @description System instruction to guide image generation behavior
   * @default null
   */
  system_instruction: string | null;
  /**
   * Temperature
   * @description Controls randomness (0.0 to 2.0)
   * @default null
   */
  temperature: number | null;
  /**
   * Top K
   * @description Top-k sampling parameter
   * @default null
   */
  top_k: number | null;
  /**
   * Top P
   * @description Nucleus sampling parameter (0.0 to 1.0)
   * @default null
   */
  top_p: number | null;
};

/**
 * Type of GEMINI's GEMINI_GENERATE_IMAGE tool output.
 */
type GEMINI_GENERATE_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Candidates */
      candidates?: {
          [key: string]: unknown;
      }[];
      /**
       * Image Data
       * @description Base64 encoded image data
       * @default null
       */
      image_data: string | null;
      /**
       * Image Mime Type
       * @description MIME type of the generated image
       * @default null
       */
      image_mime_type: string | null;
      /** Raw */
      raw?: {
          [key: string]: unknown;
      };
      /**
       * Saved Path
       * @description Path where image was saved (if save_path provided)
       * @default null
       */
      saved_path: string | null;
      /**
       * Text Response
       * @description Any text response from the model
       * @default
       */
      text_response: string;
      /**
       * Usage Metadata
       * @default null
       */
      usage_metadata: {
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
 * Type of GEMINI's GEMINI_GENERATE_VIDEOS tool input.
 */
type GEMINI_GENERATE_VIDEOS_INPUT = {
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
 * Type of GEMINI's GEMINI_GENERATE_VIDEOS tool output.
 */
type GEMINI_GENERATE_VIDEOS_OUTPUT = {
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
 * Type of GEMINI's GEMINI_GET_VIDEOS_OPERATION tool input.
 */
type GEMINI_GET_VIDEOS_OPERATION_INPUT = {
  /**
   * Operation Name
   * @description Operation resource name returned by predictLongRunning
   */
  operation_name?: string;
};

/**
 * Type of GEMINI's GEMINI_GET_VIDEOS_OPERATION tool output.
 */
type GEMINI_GET_VIDEOS_OPERATION_OUTPUT = {
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
 * Type of GEMINI's GEMINI_LIST_MODELS tool input.
 */
type GEMINI_LIST_MODELS_INPUT = {
  /**
   * Filter Prefix
   * @description Filter models by name prefix (client-side). Leave empty to get all models.
   * @default
   */
  filter_prefix: string;
};

/**
 * Type of GEMINI's GEMINI_LIST_MODELS tool output.
 */
type GEMINI_LIST_MODELS_OUTPUT = {
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
 * Type of GEMINI's GEMINI_WAIT_FOR_VIDEO tool input.
 */
type GEMINI_WAIT_FOR_VIDEO_INPUT = {
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
 * Type of GEMINI's GEMINI_WAIT_FOR_VIDEO tool output.
 */
type GEMINI_WAIT_FOR_VIDEO_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "GEMINI".
 */
export type GEMINI_TOOL_INPUTS = {
  COUNT_TOKENS: GEMINI_COUNT_TOKENS_INPUT
  DOWNLOAD_VIDEO: GEMINI_DOWNLOAD_VIDEO_INPUT
  EMBED_CONTENT: GEMINI_EMBED_CONTENT_INPUT
  GENERATE_CONTENT: GEMINI_GENERATE_CONTENT_INPUT
  GENERATE_IMAGE: GEMINI_GENERATE_IMAGE_INPUT
  GENERATE_VIDEOS: GEMINI_GENERATE_VIDEOS_INPUT
  GET_VIDEOS_OPERATION: GEMINI_GET_VIDEOS_OPERATION_INPUT
  LIST_MODELS: GEMINI_LIST_MODELS_INPUT
  WAIT_FOR_VIDEO: GEMINI_WAIT_FOR_VIDEO_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GEMINI".
 */
export type GEMINI_TOOL_OUTPUTS = {
  COUNT_TOKENS: GEMINI_COUNT_TOKENS_OUTPUT
  DOWNLOAD_VIDEO: GEMINI_DOWNLOAD_VIDEO_OUTPUT
  EMBED_CONTENT: GEMINI_EMBED_CONTENT_OUTPUT
  GENERATE_CONTENT: GEMINI_GENERATE_CONTENT_OUTPUT
  GENERATE_IMAGE: GEMINI_GENERATE_IMAGE_OUTPUT
  GENERATE_VIDEOS: GEMINI_GENERATE_VIDEOS_OUTPUT
  GET_VIDEOS_OPERATION: GEMINI_GET_VIDEOS_OPERATION_OUTPUT
  LIST_MODELS: GEMINI_LIST_MODELS_OUTPUT
  WAIT_FOR_VIDEO: GEMINI_WAIT_FOR_VIDEO_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GEMINI toolkit.
 */
export const GEMINI = {
  slug: "gemini",
  tools: {
    /**
     * Counts the number of tokens in text using gemini tokenization. useful for estimating costs, checking input limits, and optimizing prompts before making api calls.
     */
    COUNT_TOKENS: "GEMINI_COUNT_TOKENS",
    /**
     * Downloads a generated veo video to local storage. takes the video uri from a completed operation and saves it to the specified file path.
     */
    DOWNLOAD_VIDEO: "GEMINI_DOWNLOAD_VIDEO",
    /**
     * Generates text embeddings using gemini embedding models. converts text into numerical vectors for semantic search, similarity comparison, clustering, and classification tasks.
     */
    EMBED_CONTENT: "GEMINI_EMBED_CONTENT",
    /**
     * Generates text content from prompts using gemini models. supports various models like gemini flash and pro with configurable temperature, token limits, and safety settings for diverse text generation tasks.
     */
    GENERATE_CONTENT: "GEMINI_GENERATE_CONTENT",
    /**
     * Generates images from text prompts using gemini 2.5 flash image preview model. supports creative image generation with customizable parameters like aspect ratio, safety settings, and optional file saving.
     */
    GENERATE_IMAGE: "GEMINI_GENERATE_IMAGE",
    /**
     * Generates videos from text prompts using google's veo models. creates high-quality video content with customizable aspect ratios, duration, and style controls. returns operation id for tracking progress.
     */
    GENERATE_VIDEOS: "GEMINI_GENERATE_VIDEOS",
    /**
     * Checks the status of a veo video generation operation. use the operation name from generatevideos to track progress and get the download url when complete.
     */
    GET_VIDEOS_OPERATION: "GEMINI_GET_VIDEOS_OPERATION",
    /**
     * Lists available gemini and veo models with their capabilities and limits. useful for discovering supported models and their features before making generation requests.
     */
    LIST_MODELS: "GEMINI_LIST_MODELS",
    /**
     * Polls a veo video generation operation until completion or timeout. automatically checks status at intervals and returns the final video url when ready.
     */
    WAIT_FOR_VIDEO: "GEMINI_WAIT_FOR_VIDEO",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GEMINI".
 */
export type GEMINI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GEMINI".
 */
export type GEMINI_TRIGGER_EVENTS = {}
