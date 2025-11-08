// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLAID_AI's CLAID_AI_AI_PHOTOSHOOT tool input.
 */
type CLAID_AI_AI_PHOTOSHOOT_INPUT = {
  /**
   * Object
   * @description Product image and placement settings
   */
  object?: {
      /**
       * Image Url
       * @description HTTP(S) or storage URI to the input image
       */
      image_url: string;
      /**
       * Placement Type
       * @description 'absolute' (default) or 'original' placement
       * @default absolute
       * @enum {string}
       */
      placement_type: "absolute" | "original";
      /**
       * PositionModel
       * @description Position for absolute placement (required if placement_type is 'absolute')
       * @default null
       */
      position: {
          /**
           * X
           * @description X position (0.0-1.0), default center (0.5)
           * @default 0.5
           */
          x: number;
          /**
           * Y
           * @description Y position (0.0-1.0), default center (0.5)
           * @default 0.5
           */
          y: number;
      } | null;
      /**
       * Rotation Degree
       * @description Rotation in degrees (0-360). Only for placement_type='absolute'
       * @default null
       */
      rotation_degree: number | null;
      /**
       * Scale
       * @description Scale factor (0.1-1.0). Only for placement_type='absolute'
       * @default null
       */
      scale: number | null;
  };
  /**
   * Output
   * @description Output destination URI or detailed settings
   */
  output?: string | null;
  /**
   * ShadowScene
   * @description Scene generation settings
   */
  scene?: {
      /**
       * Color
       * @description Background color (hex), omit for transparent
       * @default null
       */
      color: string | null;
      /**
       * Effect
       * @description Must be 'shadows' for shadow effect
       * @constant
       */
      effect: "shadows";
      /**
       * View
       * @description Shadow view orientation: 'top'
       * @constant
       */
      view: "top";
  } | null;
};

/**
 * Type of CLAID_AI's CLAID_AI_AI_PHOTOSHOOT tool output.
 */
type CLAID_AI_AI_PHOTOSHOOT_OUTPUT = {
  /** Data */
  data?: {
      /** Input */
      input: {
          /** Ext */
          ext: string;
          /** Format */
          format: string;
          /** Height */
          height: number;
          /** Mime */
          mime: string;
          /** Mps */
          mps: number;
          /** Width */
          width: number;
      };
      /** Output */
      output: {
          /** Claid Storage Uri */
          claid_storage_uri: string | null;
          /** Ext */
          ext: string;
          /** Format */
          format: string;
          /** Height */
          height: number;
          /** Mime */
          mime: string;
          /** Mps */
          mps: number;
          /** Object Bucket */
          object_bucket: string | null;
          /** Object Key */
          object_key: string | null;
          /** Object Uri */
          object_uri: string | null;
          /** Tmp Url */
          tmp_url: string;
          /** Width */
          width: number;
      }[];
      /**
       * Profiling
       * @description Profiling information from API
       */
      profiling: {
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
 * Type of CLAID_AI's CLAID_AI_BACKGROUND_GENERATE tool input.
 */
type CLAID_AI_BACKGROUND_GENERATE_INPUT = {
  /**
   * Object
   * @description Source product image and placement details.
   */
  object?: {
      /**
       * Image Url
       * Format: uri
       * @description URL to the input image.
       */
      image_url: string;
      /**
       * Placement Type
       * @description Placement type: 'absolute' or 'original'.
       * @default absolute
       * @enum {string|null}
       */
      placement_type: "absolute" | "original" | null;
      /**
       * Position
       * @description Position object for 'absolute' placement.
       * @default null
       */
      position: {
          /**
           * X
           * @description Relative x position (0.0-1.0).
           * @default 0.5
           */
          x: number | null;
          /**
           * Y
           * @description Relative y position (0.0-1.0).
           * @default 0.5
           */
          y: number | null;
      } | null;
      /**
       * Rotation Degree
       * @description Clockwise rotation in degrees (0-360).
       * @default 0
       */
      rotation_degree: number | null;
      /**
       * Scale
       * @description Relative object scale (0.0-1.0).
       * @default 1
       */
      scale: number | null;
  };
  /**
   * Output
   * @description Output configuration for generated images.
   * @default null
   */
  output: {
      /**
       * Destination
       * Format: uri
       * @description Cloud storage URI or web folder path for output files.
       * @default null
       */
      destination: string | null;
      /**
       * Format
       * @description Output format as string or object.
       * @default png
       * @enum {string|null}
       */
      format: "png" | "jpeg" | "webp" | "avif" | null;
      /**
       * Number Of Images
       * @description Number of images to generate (1-4).
       * @default 4
       */
      number_of_images: number | null;
  } | null;
  /**
   * Scene
   * @description Scene generation mode and parameters.
   */
  scene?: {
      /**
       * Aspect Ratio
       * @description Aspect ratio selection.
       * @default null
       * @enum {string|null}
       */
      aspect_ratio: "12:5" | "16:9" | "7:4" | "19:13" | "9:7" | "1:1" | "4:5" | "7:9" | "4:7" | "9:16" | "5:12" | null;
      /**
       * Color
       * @description Hex color code for background or template mode. Format: #RRGGBB
       * @default null
       */
      color: string | null;
      /**
       * Effect
       * @description Specify 'shadows' effect for shadows mode.
       * @default null
       * @constant
       */
      effect: "shadows";
      /**
       * Model
       * @description Model version to use.
       * @default v1
       * @enum {string}
       */
      model: "v1" | "v2";
      /**
       * Negative Prompt
       * @description Negative prompt string.
       * @default null
       */
      negative_prompt: string | null;
      /**
       * Preference
       * @description Generation preference; if negative_prompt is set, 'fast' is not allowed.
       * @default null
       * @enum {string|null}
       */
      preference: "fast" | "optimal" | "best" | null;
      /**
       * Prompt
       * @description Prompt text or Autoprompt object.
       * @default null
       */
      prompt: string | null;
      /**
       * Steps
       * @description Number of diffusion steps (1-49).
       * @default null
       */
      steps: number | null;
      /**
       * Template Mode
       * @description Template mode: 'transform', 'adjust', or 'lock'.
       * @default null
       * @enum {string|null}
       */
      template_mode: "transform" | "adjust" | "lock" | null;
      /**
       * Template Url
       * Format: uri
       * @description Template URL for template-based mode.
       * @default null
       */
      template_url: string | null;
      /**
       * View
       * @description Camera viewpoint: 'top' or 'front'.
       * @default null
       * @enum {string|null}
       */
      view: "top" | "front" | null;
  };
};

/**
 * Type of CLAID_AI's CLAID_AI_BACKGROUND_GENERATE tool output.
 */
type CLAID_AI_BACKGROUND_GENERATE_OUTPUT = {
  /**
   * Data
   * @description Response payload containing generated images and metadata.
   */
  data?: {
      /**
       * Input
       * @description Metadata for the input image.
       */
      input: {
          /**
           * Ext
           * @description File extension.
           */
          ext: string;
          /**
           * Format
           * @description File format.
           */
          format: string;
          /**
           * Height
           * @description Height in pixels.
           */
          height: number;
          /**
           * Mime
           * @description MIME type of the image.
           */
          mime: string;
          /**
           * Mps
           * @description Megapixel count.
           */
          mps: number;
          /**
           * Width
           * @description Width in pixels.
           */
          width: number;
      };
      /**
       * Output
       * @description Generated images metadata.
       */
      output: {
          /**
           * Claid Storage Uri
           * @description Returned when saving to Claid storage.
           * @default null
           */
          claid_storage_uri: string | null;
          /**
           * Ext
           * @description File extension.
           */
          ext: string;
          /**
           * Format
           * @description File format.
           */
          format: string;
          /**
           * Height
           * @description Height in pixels.
           */
          height: number;
          /**
           * Mime
           * @description MIME type.
           */
          mime: string;
          /**
           * Mps
           * @description Megapixel count.
           */
          mps: number;
          /**
           * Object Bucket
           * @description Returned when saving to connected storage.
           * @default null
           */
          object_bucket: string | null;
          /**
           * Object Key
           * @description Returned when saving to connected storage.
           * @default null
           */
          object_key: string | null;
          /**
           * Object Uri
           * @description Returned when saving to connected storage.
           * @default null
           */
          object_uri: string | null;
          /**
           * Tmp Url
           * Format: uri
           * @description Temporary URL for download; empty if destination specified.
           * @default null
           */
          tmp_url: string | null;
          /**
           * Width
           * @description Width in pixels.
           */
          width: number;
      }[];
      /**
       * Profiling
       * @description Profiling information if available.
       * @default null
       */
      profiling: {
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
 * Type of CLAID_AI's CLAID_AI_BACKGROUND_REMOVE tool input.
 */
type CLAID_AI_BACKGROUND_REMOVE_INPUT = {
  /**
   * Input
   * @description URL or storage URI of the input image. Supported schemes: http(s):// or storage://.
   */
  input?: string;
  /**
   * Operations
   * @description Background removal operation settings.
   */
  operations?: {
      /**
       * Background
       * @description Background processing options.
       */
      background: {
          /**
           * Color
           * @description Background fill color: 'transparent' or hex code (e.g. '#RRGGBB').
           * @default null
           */
          color: string | null;
          /**
           * Remove
           * @description True to remove background; or object to configure removal.
           */
          remove: boolean | null;
      };
  };
  /**
   * Output
   * @description Optional output destination or format settings. String endpoint or object with format.
   * @default null
   */
  output: string | null;
};

/**
 * Type of CLAID_AI's CLAID_AI_BACKGROUND_REMOVE tool output.
 */
type CLAID_AI_BACKGROUND_REMOVE_OUTPUT = {
  /**
   * Data
   * @description Wrapper for background removal response data.
   */
  data?: {
      /**
       * Input
       * @description Information about the source image.
       */
      input: {
          /**
           * Ext
           * @description File extension of the image (e.g., jpg, png).
           */
          ext: string;
          /**
           * Format
           * @description Image format (e.g., jpeg, png, webp).
           */
          format: string;
          /**
           * Height
           * @description Height of the image in pixels.
           */
          height: number;
          /**
           * Mime
           * @description MIME type of the image.
           */
          mime: string;
          /**
           * Mps
           * @description Megapixel count of the image.
           */
          mps: number;
          /**
           * Width
           * @description Width of the image in pixels.
           */
          width: number;
      };
      /**
       * Output
       * @description Information about the processed image.
       */
      output: {
          /**
           * Claid Storage Uri
           * @description CLaid-specific storage URI of the saved image.
           * @default null
           */
          claid_storage_uri: string | null;
          /**
           * Ext
           * @description File extension of the processed image.
           */
          ext: string;
          /**
           * Format
           * @description Format of the processed image.
           */
          format: string;
          /**
           * Height
           * @description Height of the processed image in pixels.
           */
          height: number;
          /**
           * Mime
           * @description MIME type of the processed image.
           */
          mime: string;
          /**
           * Mps
           * @description Megapixel count of the processed image.
           */
          mps: number;
          /**
           * Object Bucket
           * @description Storage bucket name if saved to connected storage.
           * @default null
           */
          object_bucket: string | null;
          /**
           * Object Key
           * @description Storage object key if saved to connected storage.
           * @default null
           */
          object_key: string | null;
          /**
           * Object Uri
           * @description Full storage URI of the saved image.
           * @default null
           */
          object_uri: string | null;
          /**
           * Tmp Url
           * @description Temporary public URL to access the processed image.
           * @default null
           */
          tmp_url: string | null;
          /**
           * Width
           * @description Width of the processed image in pixels.
           */
          width: number;
      };
      /**
       * Profiling
       * @description Optional profiling information for the request.
       * @default null
       */
      profiling: {
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
 * Type of CLAID_AI's CLAID_AI_CLAID_STORAGE_DETAILS tool input.
 */
type CLAID_AI_CLAID_STORAGE_DETAILS_INPUT = {
  /**
   * Storage Id
   * @description ID of the storage resource to fetch
   */
  storage_id?: number;
};

/**
 * Type of CLAID_AI's CLAID_AI_CLAID_STORAGE_DETAILS tool output.
 */
type CLAID_AI_CLAID_STORAGE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Storage details payload.
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Id
       * @description Storage ID
       */
      id: number;
      /**
       * Name
       * @description Storage name
       */
      name: string;
      /**
       * Parameters
       * @description Connector-specific parameters
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Type
       * @description Storage type
       * @enum {string}
       */
      type: "web_folder" | "s3" | "gcs";
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
 * Type of CLAID_AI's CLAID_AI_CREATE_STORAGE tool input.
 */
type CLAID_AI_CREATE_STORAGE_INPUT = {
  /**
   * Name
   * @description The storage name inside Claid
   */
  name?: string;
  /**
   * CreateS3Parameters
   * @description Parameters for S3 storage connector.
   */
  parameters?: {
      /**
       * Bucket
       * @description Name of the S3 bucket
       */
      bucket: string;
      /**
       * Credentials
       * @description Credentials for AWS S3
       */
      credentials: {
          /**
           * Access Key
           * @description AWS access key
           */
          access_key: string;
          /**
           * Secret Access Key
           * @description AWS secret access key
           */
          secret_access_key: string;
      };
      /**
       * Path
       * @description Optional prefix path within the bucket
       * @default null
       */
      path?: string | null;
  } | null;
  /**
   * Type
   * @description Type of storage connector
   * @enum {string}
   */
  type?: "s3" | "gcs" | "web_folder";
};

/**
 * Type of CLAID_AI's CLAID_AI_CREATE_STORAGE tool output.
 */
type CLAID_AI_CREATE_STORAGE_OUTPUT = {
  /**
   * Data
   * @description Detailed storage information as returned by Claid.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when storage was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique storage identifier
       */
      id: number;
      /**
       * Name
       * @description Storage display name
       */
      name: string;
      /**
       * Parameters
       * @description Connector-specific parameters (sensitive fields may be redacted)
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Type
       * @description Storage type
       * @enum {string}
       */
      type: "s3" | "gcs" | "web_folder";
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
 * Type of CLAID_AI's CLAID_AI_GENERATIVE_RESIZE tool input.
 */
type CLAID_AI_GENERATIVE_RESIZE_INPUT = {
  /**
   * Input
   * @description URL of the source image (public or Claid storage).
   */
  input?: string;
  /**
   * Operations
   * @description Pipeline describing generative resize (outpainting).
   */
  operations?: {
      /**
       * Resizing
       * @description Generative outpainting resize operations.
       */
      resizing: {
          /**
           * Fit
           * @description Fit mode: must be 'outpaint' or detailed fit options.
           * @default outpaint
           * @constant
           */
          fit: "outpaint";
          /**
           * Height
           * @description Target height in px, 'auto', or percentage string.
           * @default null
           */
          height: number | null;
          /**
           * Width
           * @description Target width in px, 'auto', or percentage string.
           * @default null
           */
          width: number | null;
      };
  };
  /**
   * Output
   * @description Destination URI or detailed output options.
   * @default null
   */
  output: string | null;
};

/**
 * Type of CLAID_AI's CLAID_AI_GENERATIVE_RESIZE tool output.
 */
type CLAID_AI_GENERATIVE_RESIZE_OUTPUT = {
  /** Data */
  data?: {
      /** Input */
      input: {
          /** Ext */
          ext: string;
          /** Format */
          format: string;
          /** Height */
          height: number;
          /** Mime */
          mime: string;
          /** Mps */
          mps: number;
          /** Width */
          width: number;
      };
      /** Output */
      output: {
          /** Claid Storage Uri */
          claid_storage_uri: string | null;
          /** Ext */
          ext: string;
          /** Format */
          format: string;
          /** Height */
          height: number;
          /** Mime */
          mime: string;
          /** Mps */
          mps: number;
          /** Object Bucket */
          object_bucket: string | null;
          /** Object Key */
          object_key: string | null;
          /** Object Uri */
          object_uri: string | null;
          /** Tmp Url */
          tmp_url: string | null;
          /** Width */
          width: number;
      };
      /**
       * Profiling
       * @description Profiling details returned by the service.
       * @default null
       */
      profiling: {
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
 * Type of CLAID_AI's CLAID_AI_IMAGE_AI_EDIT tool input.
 */
type CLAID_AI_IMAGE_AI_EDIT_INPUT = {
  /**
   * Input
   * @description Publicly accessible URL of the source image.
   */
  input?: string;
  /**
   * Options
   * @description AI editing options including prompt and generation parameters.
   */
  options?: {
      /**
       * Aspect Ratio
       * @description Final image aspect ratio; allowed: 1:1, 2:3, 3:2, 3:4, 4:3, 9:16, 16:9, 9:21, 21:9.
       * @default null
       * @enum {string|null}
       */
      aspect_ratio: "1:1" | "2:3" | "3:2" | "3:4" | "4:3" | "9:16" | "16:9" | "9:21" | "21:9" | null;
      /**
       * Guidance Scale
       * @description Classifier-free guidance scale (1.0–10.0). Default 4.0.
       * @default 4
       */
      guidance_scale: number;
      /**
       * Inference Steps
       * @description Number of diffusion steps (1–50). Default 50.
       * @default 50
       */
      inference_steps: number;
      /**
       * Prompt
       * @description Text instruction for the AI to apply edits.
       */
      prompt: string;
  };
  /**
   * Output
   * @description Output destination URI string or configuration object. If omitted, a temporary URL is returned.
   * @default null
   */
  output: string | null;
};

/**
 * Type of CLAID_AI's CLAID_AI_IMAGE_AI_EDIT tool output.
 */
type CLAID_AI_IMAGE_AI_EDIT_OUTPUT = {
  /**
   * Data
   * @description Details of the accepted edit job.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the job was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique task identifier.
       */
      id: number;
      /**
       * Request
       * @description Echo of the submitted request body.
       */
      request: {
          [key: string]: unknown;
      };
      /**
       * Result Url
       * @description URL to poll for job status and retrieve results.
       */
      result_url: string;
      /**
       * Status
       * @description Initial task status; always 'ACCEPTED' on success.
       * @constant
       */
      status: "ACCEPTED";
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
 * Type of CLAID_AI's CLAID_AI_IMAGE_EDIT_BATCH tool input.
 */
type CLAID_AI_IMAGE_EDIT_BATCH_INPUT = {
  /**
   * ImageInputOptions
   * @description Options for specifying a cloud storage folder input.
   */
  input?: {
      /**
       * Recursive
       * @description Whether to process images in subdirectories recursively
       * @default false
       */
      recursive: boolean | null;
      /**
       * Source
       * @description Cloud storage URL to an input folder (e.g., storage://storage_1/input_folder/)
       */
      source: string;
  } | null;
  /**
   * Operations
   * @description Editing operations to apply, e.g., resizing, adjustments, background
   */
  operations?: {
      [key: string]: {
          [key: string]: unknown;
      } | null;
  };
  /**
   * Output
   * @description Destination folder URL or detailed output configuration
   * @default null
   */
  output: string | null;
};

/**
 * Type of CLAID_AI's CLAID_AI_IMAGE_EDIT_BATCH tool output.
 */
type CLAID_AI_IMAGE_EDIT_BATCH_OUTPUT = {
  /**
   * Data
   * @description Batch request metadata and polling information
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the batch request was created
       */
      created_at: string;
      /**
       * Id
       * @description Task identifier for batch request
       */
      id: number;
      /**
       * Request
       * @description Echo of the submitted request payload
       */
      request: {
          [key: string]: unknown;
      };
      /**
       * Result Url
       * Format: uri
       * @description URL to poll for batch result status and data
       */
      result_url: string;
      /**
       * Status
       * @description Current status of the batch request, e.g., ACCEPTED
       */
      status: string;
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
 * Type of CLAID_AI's CLAID_AI_IMAGE_GENERATE tool input.
 */
type CLAID_AI_IMAGE_GENERATE_INPUT = {
  /**
   * Input
   * @description Text prompt to generate images from.
   */
  input?: string;
  /**
   * ImageGenerateOptions
   * @description Controls image generation behavior.
   * @default null
   */
  options: {
      /**
       * Guidance Scale
       * @description How closely output matches the prompt (1.0-49.99).
       * @default 5
       */
      guidance_scale: number;
      /**
       * Negative Prompt
       * @description Aspects or elements to avoid in the generated images.
       * @default null
       */
      negative_prompt: string | null;
      /**
       * Number Of Images
       * @description Number of images to generate (1-4).
       * @default 4
       */
      number_of_images: number;
  } | null;
  /**
   * Output
   * @description URI of the destination folder in storage. If omitted, temporary URLs will be returned.
   * @default null
   */
  output: string | null;
};

/**
 * Type of CLAID_AI's CLAID_AI_IMAGE_GENERATE tool output.
 */
type CLAID_AI_IMAGE_GENERATE_OUTPUT = {
  /**
   * Data
   * @description Result data wrapper.
   */
  data?: {
      /**
       * Input
       * @description Wrapper for echoed input.
       */
      input: {
          /**
           * Text
           * @description Echo of the input prompt.
           */
          text: string;
      };
      /**
       * Output
       * @description List of generated image metadata.
       */
      output: {
          /**
           * Claid Storage Uri
           * @description CLAID storage URI.
           * @default null
           */
          claid_storage_uri: string | null;
          /**
           * Ext
           * @description File extension (e.g., 'png').
           */
          ext: string;
          /**
           * Format
           * @description File format (e.g., 'PNG').
           */
          format: string;
          /**
           * Height
           * @description Image height in pixels.
           */
          height: number;
          /**
           * Mime
           * @description MIME type.
           */
          mime: string;
          /**
           * Mps
           * @description Megapixel count.
           */
          mps: number;
          /**
           * Object Bucket
           * @description Object bucket in storage.
           * @default null
           */
          object_bucket: string | null;
          /**
           * Object Key
           * @description Object key in storage.
           * @default null
           */
          object_key: string | null;
          /**
           * Object Uri
           * @description Object URI in storage.
           * @default null
           */
          object_uri: string | null;
          /**
           * Tmp Url
           * @description Temporary image URL; empty if output was specified.
           * @default null
           */
          tmp_url: string | null;
          /**
           * Width
           * @description Image width in pixels.
           */
          width: number;
      }[];
      /**
       * Profiling
       * @description Profiling information from the generation process.
       * @default null
       */
      profiling: {
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
 * Type of CLAID_AI's CLAID_AI_LICENSE_PLATE_BLUR tool input.
 */
type CLAID_AI_LICENSE_PLATE_BLUR_INPUT = {
  /**
   * Input
   * @description URL of the input image. Supported schemes: http(s):// or storage://; length 1–4096.
   */
  input?: string;
  /**
   * Output
   * @description Optional output settings or destination. Default format is JPEG if omitted.
   * @default null
   */
  output: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of CLAID_AI's CLAID_AI_LICENSE_PLATE_BLUR tool output.
 */
type CLAID_AI_LICENSE_PLATE_BLUR_OUTPUT = {
  /**
   * Data
   * @description Wrapper for license plate blur response data.
   */
  data?: {
      /**
       * Input
       * @description Information about the source image.
       */
      input: {
          /**
           * Ext
           * @description File extension of the image (e.g., jpg, png).
           */
          ext: string;
          /**
           * Format
           * @description Image format (e.g., jpeg, png, webp).
           */
          format: string;
          /**
           * Height
           * @description Height of the image in pixels.
           */
          height: number;
          /**
           * Mime
           * @description MIME type of the image.
           */
          mime: string;
          /**
           * Mps
           * @description Megapixel count of the image.
           */
          mps: number;
          /**
           * Width
           * @description Width of the image in pixels.
           */
          width: number;
      };
      /**
       * Output
       * @description Information about the processed image.
       */
      output: {
          /**
           * Claid Storage Uri
           * @description CLaid-specific storage URI of the saved image.
           * @default null
           */
          claid_storage_uri: string | null;
          /**
           * Ext
           * @description File extension of the processed image.
           */
          ext: string;
          /**
           * Format
           * @description Format of the processed image.
           */
          format: string;
          /**
           * Height
           * @description Height of the processed image in pixels.
           */
          height: number;
          /**
           * Mime
           * @description MIME type of the processed image.
           */
          mime: string;
          /**
           * Mps
           * @description Megapixel count of the processed image.
           */
          mps: number;
          /**
           * Object Bucket
           * @description Storage bucket name if saved to connected storage.
           * @default null
           */
          object_bucket: string | null;
          /**
           * Object Key
           * @description Storage object key if saved to connected storage.
           * @default null
           */
          object_key: string | null;
          /**
           * Object Uri
           * @description Full storage URI of the saved image.
           * @default null
           */
          object_uri: string | null;
          /**
           * Tmp Url
           * @description Temporary public URL to access the processed image.
           * @default null
           */
          tmp_url: string | null;
          /**
           * Width
           * @description Width of the processed image in pixels.
           */
          width: number;
      };
      /**
       * Profiling
       * @description Optional profiling information for the request.
       * @default null
       */
      profiling: {
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
 * Type of CLAID_AI's CLAID_AI_PATCH_STORAGE tool input.
 */
type CLAID_AI_PATCH_STORAGE_INPUT = {
  /**
   * Name
   * @description New display name for the storage
   * @default null
   */
  name: string | null;
  /**
   * S3ParametersUpdate
   * @description Parameters for updating an AWS S3 storage connector
   * @default null
   */
  parameters: {
      /**
       * Bucket
       * @description Name of the S3 bucket to use
       * @default null
       */
      bucket?: string | null;
      /**
       * S3CredentialsUpdate
       * @description AWS S3 credentials for updating storage parameters
       * @default null
       */
      credentials?: {
          /**
           * Access Key
           * @description AWS access key ID for the S3 bucket
           * @default null
           */
          access_key?: string | null;
          /**
           * Secret Access Key
           * @description AWS secret access key for the S3 bucket
           * @default null
           */
          secret_access_key?: string | null;
      } | null;
      /**
       * Name
       * @description New name for the S3 storage connector
       * @default null
       */
      name?: string | null;
      /**
       * Prefix
       * @description Key prefix within the S3 bucket
       * @default null
       */
      prefix?: string | null;
  } | null;
  /**
   * Storage Id
   * @description Identifier of the storage to update
   */
  storage_id?: number;
  /**
   * Type
   * @enum {string|null}
   */
  type?: "web_folder" | "s3" | "gcs" | null;
};

/**
 * Type of CLAID_AI's CLAID_AI_PATCH_STORAGE tool output.
 */
type CLAID_AI_PATCH_STORAGE_OUTPUT = {
  /**
   * Data
   * @description Detailed storage resource returned after update
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 creation timestamp
       */
      created_at: string;
      /**
       * Id
       * @description Storage identifier
       */
      id: number;
      /**
       * Name
       * @description Storage display name
       */
      name: string;
      /**
       * Parameters
       * @description Connector-specific parameters after update
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Type
       * @description Type of the storage connector
       * @enum {string}
       */
      type: "web_folder" | "s3" | "gcs";
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
 * Type of CLAID_AI's CLAID_AI_POLISH_IMAGE tool input.
 */
type CLAID_AI_POLISH_IMAGE_INPUT = {
  /**
   * Input
   * @description URL or storage URI of the input image. Supported schemes: http(s):// or storage://; length must be between 1 and 4096 characters.
   */
  input?: string;
  /**
   * Output
   * @description Optional output destination or format settings. Provide a storage URI string or an object with format settings. Defaults to JPEG if omitted.
   * @default null
   */
  output: string | null;
};

/**
 * Type of CLAID_AI's CLAID_AI_POLISH_IMAGE tool output.
 */
type CLAID_AI_POLISH_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Response data wrapper.
   */
  data?: {
      /**
       * Input
       * @description Metadata of the source image.
       */
      input: {
          /**
           * Ext
           * @description File extension of the source image (e.g., jpg, png).
           */
          ext: string;
          /**
           * Format
           * @description Format of the source image (e.g., JPEG, PNG).
           */
          format: string;
          /**
           * Height
           * @description Height of the source image in pixels.
           */
          height: number;
          /**
           * Mime
           * @description MIME type of the source image.
           */
          mime: string;
          /**
           * Mps
           * @description Megapixel count of the source image.
           */
          mps: number;
          /**
           * Width
           * @description Width of the source image in pixels.
           */
          width: number;
      };
      /**
       * Output
       * @description Metadata of the processed image.
       */
      output: {
          /**
           * Claid Storage Uri
           * @description CLaid-specific storage URI.
           * @default null
           */
          claid_storage_uri: string | null;
          /**
           * Ext
           * @description File extension of the processed image.
           */
          ext: string;
          /**
           * Format
           * @description Format of the processed image (e.g., JPEG, PNG).
           */
          format: string;
          /**
           * Height
           * @description Height of the processed image in pixels.
           */
          height: number;
          /**
           * Mime
           * @description MIME type of the processed image.
           */
          mime: string;
          /**
           * Mps
           * @description Megapixel count of the processed image.
           */
          mps: number;
          /**
           * Object Bucket
           * @description Storage bucket name if saved.
           * @default null
           */
          object_bucket: string | null;
          /**
           * Object Key
           * @description Storage object key if saved.
           * @default null
           */
          object_key: string | null;
          /**
           * Object Uri
           * @description Full storage URI of the saved image.
           * @default null
           */
          object_uri: string | null;
          /**
           * Tmp Url
           * @description Temporary public URL to access the processed image.
           * @default null
           */
          tmp_url: string | null;
          /**
           * Width
           * @description Width of the processed image in pixels.
           */
          width: number;
      };
      /**
       * Profiling
       * @description Profiling information returned by the service.
       * @default null
       */
      profiling: {
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
 * Type of CLAID_AI's CLAID_AI_SMART_FRAME tool input.
 */
type CLAID_AI_SMART_FRAME_INPUT = {
  /**
   * Input
   * @description URL or storage URI of the input image. Supports http(s):// or storage:// schemes.
   */
  input?: string;
  /**
   * Options
   * @description Framing options including target size, padding, and optional background color.
   */
  options?: {
      /**
       * Background
       * @description Background fill color: 'transparent' or hex code '#RRGGBB'.
       * @default null
       */
      background: string | null;
      /**
       * Height
       * @description Output frame height in pixels; must be positive.
       */
      height: number;
      /**
       * Padding
       * @description Padding around the subject; specify in percent (e.g., '10%') or pixels (e.g., '30px' or '10px 20px').
       */
      padding: string;
      /**
       * Width
       * @description Output frame width in pixels; must be positive.
       */
      width: number;
  };
};

/**
 * Type of CLAID_AI's CLAID_AI_SMART_FRAME tool output.
 */
type CLAID_AI_SMART_FRAME_OUTPUT = {
  /**
   * Data
   * @description Wrapper for smart frame response data.
   */
  data?: {
      /**
       * Input
       * @description Information about the source image.
       */
      input: {
          /**
           * Ext
           * @description File extension of the input image, e.g., 'jpg' or 'png'.
           */
          ext: string;
          /**
           * Format
           * @description Format of the input image, e.g., 'jpeg'.
           */
          format: string;
          /**
           * Height
           * @description Height of the input image in pixels.
           */
          height: number;
          /**
           * Mime
           * @description MIME type of the input image, e.g., 'image/jpeg'.
           */
          mime: string;
          /**
           * Mps
           * @description Megapixel count of the input image.
           */
          mps: number;
          /**
           * Width
           * @description Width of the input image in pixels.
           */
          width: number;
      };
      /**
       * Output
       * @description Information about the framed image.
       */
      output: {
          /**
           * Claid Storage Uri
           * @description CLaid-specific storage URI of the saved image.
           * @default null
           */
          claid_storage_uri: string | null;
          /**
           * Ext
           * @description File extension of the output image.
           */
          ext: string;
          /**
           * Format
           * @description Format of the output image.
           */
          format: string;
          /**
           * Height
           * @description Height of the output image in pixels.
           */
          height: number;
          /**
           * Mime
           * @description MIME type of the output image.
           */
          mime: string;
          /**
           * Mps
           * @description Megapixel count of the output image.
           */
          mps: number;
          /**
           * Object Bucket
           * @description Storage bucket name if saved to connected storage.
           * @default null
           */
          object_bucket: string | null;
          /**
           * Object Key
           * @description Storage object key if saved to connected storage.
           * @default null
           */
          object_key: string | null;
          /**
           * Object Uri
           * @description Full storage URI of the saved image.
           * @default null
           */
          object_uri: string | null;
          /**
           * Tmp Url
           * @description Temporary public URL to access the output image.
           * @default null
           */
          tmp_url: string | null;
          /**
           * Width
           * @description Width of the output image in pixels.
           */
          width: number;
      };
      /**
       * Profiling
       * @description Optional profiling information.
       * @default null
       */
      profiling: {
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
 * Type of CLAID_AI's CLAID_AI_STORAGE_LIST tool input.
 */
type CLAID_AI_STORAGE_LIST_INPUT = object;

/**
 * Type of CLAID_AI's CLAID_AI_STORAGE_LIST tool output.
 */
type CLAID_AI_STORAGE_LIST_OUTPUT = {
  /**
   * Data
   * @description List of storage connector objects.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 datetime when the storage was connected.
       */
      created_at: string;
      /**
       * Id
       * @description Storage identifier.
       */
      id: number;
      /**
       * Name
       * @description Storage display name.
       */
      name: string;
      /**
       * Parameters
       * @description Storage-specific parameters as key-value pairs.
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Type
       * @description Type of storage (e.g., 's3', 'gcs', 'web_folder').
       */
      type: string;
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
 * Type of CLAID_AI's CLAID_AI_STORAGE_TYPES tool input.
 */
type CLAID_AI_STORAGE_TYPES_INPUT = object;

/**
 * Type of CLAID_AI's CLAID_AI_STORAGE_TYPES tool output.
 */
type CLAID_AI_STORAGE_TYPES_OUTPUT = {
  /**
   * Data
   * @description List of supported storage types.
   */
  data?: string[];
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
 * Type map of all available tool input types for toolkit "CLAID_AI".
 */
export type CLAID_AI_TOOL_INPUTS = {
  AI_PHOTOSHOOT: CLAID_AI_AI_PHOTOSHOOT_INPUT
  BACKGROUND_GENERATE: CLAID_AI_BACKGROUND_GENERATE_INPUT
  BACKGROUND_REMOVE: CLAID_AI_BACKGROUND_REMOVE_INPUT
  CLAID_STORAGE_DETAILS: CLAID_AI_CLAID_STORAGE_DETAILS_INPUT
  CREATE_STORAGE: CLAID_AI_CREATE_STORAGE_INPUT
  GENERATIVE_RESIZE: CLAID_AI_GENERATIVE_RESIZE_INPUT
  IMAGE_AI_EDIT: CLAID_AI_IMAGE_AI_EDIT_INPUT
  IMAGE_EDIT_BATCH: CLAID_AI_IMAGE_EDIT_BATCH_INPUT
  IMAGE_GENERATE: CLAID_AI_IMAGE_GENERATE_INPUT
  LICENSE_PLATE_BLUR: CLAID_AI_LICENSE_PLATE_BLUR_INPUT
  PATCH_STORAGE: CLAID_AI_PATCH_STORAGE_INPUT
  POLISH_IMAGE: CLAID_AI_POLISH_IMAGE_INPUT
  SMART_FRAME: CLAID_AI_SMART_FRAME_INPUT
  STORAGE_LIST: CLAID_AI_STORAGE_LIST_INPUT
  STORAGE_TYPES: CLAID_AI_STORAGE_TYPES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLAID_AI".
 */
export type CLAID_AI_TOOL_OUTPUTS = {
  AI_PHOTOSHOOT: CLAID_AI_AI_PHOTOSHOOT_OUTPUT
  BACKGROUND_GENERATE: CLAID_AI_BACKGROUND_GENERATE_OUTPUT
  BACKGROUND_REMOVE: CLAID_AI_BACKGROUND_REMOVE_OUTPUT
  CLAID_STORAGE_DETAILS: CLAID_AI_CLAID_STORAGE_DETAILS_OUTPUT
  CREATE_STORAGE: CLAID_AI_CREATE_STORAGE_OUTPUT
  GENERATIVE_RESIZE: CLAID_AI_GENERATIVE_RESIZE_OUTPUT
  IMAGE_AI_EDIT: CLAID_AI_IMAGE_AI_EDIT_OUTPUT
  IMAGE_EDIT_BATCH: CLAID_AI_IMAGE_EDIT_BATCH_OUTPUT
  IMAGE_GENERATE: CLAID_AI_IMAGE_GENERATE_OUTPUT
  LICENSE_PLATE_BLUR: CLAID_AI_LICENSE_PLATE_BLUR_OUTPUT
  PATCH_STORAGE: CLAID_AI_PATCH_STORAGE_OUTPUT
  POLISH_IMAGE: CLAID_AI_POLISH_IMAGE_OUTPUT
  SMART_FRAME: CLAID_AI_SMART_FRAME_OUTPUT
  STORAGE_LIST: CLAID_AI_STORAGE_LIST_OUTPUT
  STORAGE_TYPES: CLAID_AI_STORAGE_TYPES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLAID_AI toolkit.
 */
export const CLAID_AI = {
  slug: "claid_ai",
  tools: {
    /**
     * Tool to transform product shots into model photoshoots. Use when you have a product image and want a professional photoshoot background generated.
     */
    AI_PHOTOSHOOT: "CLAID_AI_AI_PHOTOSHOOT",
    /**
     * Tool to generate AI backgrounds for a product image. Use when you want controllable scene options.
     */
    BACKGROUND_GENERATE: "CLAID_AI_BACKGROUND_GENERATE",
    /**
     * Tool to remove the background from images. Use when you need to isolate subjects in one step.
     */
    BACKGROUND_REMOVE: "CLAID_AI_BACKGROUND_REMOVE",
    /**
     * Tool to retrieve details of a connected storage resource. Use when you have a storage ID and need to inspect its configuration before performing further operations.
     */
    CLAID_STORAGE_DETAILS: "CLAID_AI_CLAID_STORAGE_DETAILS",
    /**
     * Tool to connect a storage resource. Use after you have bucket/folder details and credentials. E.g., to add a new AWS S3, GCS bucket, or public web folder for your image assets.
     */
    CREATE_STORAGE: "CLAID_AI_CREATE_STORAGE",
    /**
     * Tool to adjust image aspect ratios via generative outpainting. Use after specifying required new dimensions for outpainting.
     */
    GENERATIVE_RESIZE: "CLAID_AI_GENERATIVE_RESIZE",
    /**
     * Tool to submit an asynchronous AI-based image editing task. Use when you need text-driven edits on existing images and will poll for completion.
     */
    IMAGE_AI_EDIT: "CLAID_AI_IMAGE_AI_EDIT",
    /**
     * Tool to process multiple images in batch. Use when you need to apply the same edits to an entire cloud storage folder or list of public URLs.
     */
    IMAGE_EDIT_BATCH: "CLAID_AI_IMAGE_EDIT_BATCH",
    /**
     * Tool to generate images from text prompts. Use when you need custom visuals based on a description.
     */
    IMAGE_GENERATE: "CLAID_AI_IMAGE_GENERATE",
    /**
     * Tool to blur license plates in images to meet privacy requirements. Use when you need to obfuscate vehicle plates for privacy.
     */
    LICENSE_PLATE_BLUR: "CLAID_AI_LICENSE_PLATE_BLUR",
    /**
     * Tool to update a connected storage's settings. Use when you need to change name, type, or parameters of an existing storage. Use after confirming the storage exists.
     */
    PATCH_STORAGE: "CLAID_AI_PATCH_STORAGE",
    /**
     * Tool to remove AI artifacts via polish restoration. Use when you need to sharpen and clean up an upscaled image in one step.
     */
    POLISH_IMAGE: "CLAID_AI_POLISH_IMAGE",
    /**
     * Tool to smart-frame images: resize and add free space around the subject. Use when you need consistent framing for products.
     */
    SMART_FRAME: "CLAID_AI_SMART_FRAME",
    /**
     * Tool to list connected storage resources. Use when you need to retrieve all storage connectors for your account.
     */
    STORAGE_LIST: "CLAID_AI_STORAGE_LIST",
    /**
     * Tool to retrieve available storage types. Use when you need to list supported storage connectors before uploading files.
     */
    STORAGE_TYPES: "CLAID_AI_STORAGE_TYPES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLAID_AI".
 */
export type CLAID_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLAID_AI".
 */
export type CLAID_AI_TRIGGER_EVENTS = {}
