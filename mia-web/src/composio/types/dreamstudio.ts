// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DREAMSTUDIO's DREAMSTUDIO_GENERATE_IMAGE_FROM_IMAGE tool input.
 */
type DREAMSTUDIO_GENERATE_IMAGE_FROM_IMAGE_INPUT = {
  /**
   * Cfg Scale
   * @description Guidance scale (how strongly to follow the prompt, 0-35)
   * @default 7
   * @example 7
   */
  cfg_scale: number;
  /**
   * Clip Guidance Preset
   * @description Preset mode for CLIP guidance; choose one for tuned performance
   * @default null
   * @example FAST_BLUE
   * @enum {string|null}
   */
  clip_guidance_preset: "NONE" | "FAST_BLUE" | "FAST_GREEN" | "SIMPLE" | "DETAILED" | "FAST_RED" | null;
  /**
   * Engine Id
   * @description Engine identifier for generation, e.g. 'stable-diffusion-v1-5'
   * @example stable-diffusion-v1-5
   */
  engine_id?: string;
  /**
   * Height
   * @description Output image height in pixels (must be multiple of 8)
   * @default 512
   * @example 512
   */
  height: number;
  /**
   * Image Strength
   * @description Controls how much the original image is preserved (0-1). Required when init_image_mode='IMAGE_STRENGTH'.
   * @default null
   * @example 0.7
   */
  image_strength: number | null;
  /**
   * Init Image
   * Format: binary
   * @description Binary content of the input image to guide generation
   */
  init_image?: string;
  /**
   * Init Image Mode
   * @description Guidance mode for how the init_image influences the result. 'IMAGE_STRENGTH' uses image_strength, 'STEP_SCHEDULE' uses step_schedule_start/end.
   * @example IMAGE_STRENGTH
   * @enum {string}
   */
  init_image_mode?: "IMAGE_STRENGTH" | "STEP_SCHEDULE";
  /**
   * Samples
   * @description How many images to generate in one call
   * @default 1
   * @example 1
   */
  samples: number;
  /**
   * Seed
   * @description Optional random seed for reproducible results
   * @default null
   * @example 42
   */
  seed: number | null;
  /**
   * Step Schedule End
   * @description Optional end fraction for image influence in the schedule (0-1). Defaults to 1.0 if omitted.
   * @default null
   * @example 1
   */
  step_schedule_end: number | null;
  /**
   * Step Schedule Start
   * @description Fraction at which to start image influence in the sampling schedule (0-1). Required when init_image_mode='STEP_SCHEDULE'.
   * @default null
   * @example 0.3
   */
  step_schedule_start: number | null;
  /**
   * Steps
   * @description Number of diffusion steps to run
   * @default 30
   * @example 30
   */
  steps: number;
  /**
   * Text Prompts
   * @description List of prompt objects each with text and optional weight
   */
  text_prompts?: {
      /**
       * Text
       * @description The text of the prompt to guide generation
       * @example A scenic landscape
       */
      text: string;
      /**
       * Weight
       * @description Relative weight for this prompt. Higher values increase influence.
       * @default 1
       * @example 1
       */
      weight: number;
  }[];
  /**
   * Width
   * @description Output image width in pixels (must be multiple of 8)
   * @default 512
   * @example 512
   */
  width: number;
};

/**
 * Type of DREAMSTUDIO's DREAMSTUDIO_GENERATE_IMAGE_FROM_IMAGE tool output.
 */
type DREAMSTUDIO_GENERATE_IMAGE_FROM_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Artifacts
       * @description List of generated artifacts
       */
      artifacts: {
          /**
           * Base64
           * @description Base64-encoded output image
           */
          base64: string;
          /**
           * Finish Reason
           * @description Reason for generation finish, e.g., 'SUCCESS'
           */
          finishReason: string;
          /**
           * Seed
           * @description Seed used for generation
           */
          seed: number;
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
 * Type of DREAMSTUDIO's DREAMSTUDIO_LIST_ENGINES tool input.
 */
type DREAMSTUDIO_LIST_ENGINES_INPUT = object;

/**
 * Type of DREAMSTUDIO's DREAMSTUDIO_LIST_ENGINES tool output.
 */
type DREAMSTUDIO_LIST_ENGINES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Engines
       * @description List of engine objects
       */
      engines: {
          /**
           * Description
           * @description Description of the engine
           */
          description: string;
          /**
           * Id
           * @description Unique identifier for the engine
           */
          id: string;
          /**
           * Name
           * @description Name of the engine
           */
          name: string;
          /**
           * Ready
           * @description Whether the engine is available for use
           */
          ready: boolean;
          /**
           * Type
           * @description Type of engine (e.g., image-generation)
           */
          type: string;
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
 * Type of DREAMSTUDIO's DREAMSTUDIO_USER_ACCOUNT tool input.
 */
type DREAMSTUDIO_USER_ACCOUNT_INPUT = object;

/**
 * Type of DREAMSTUDIO's DREAMSTUDIO_USER_ACCOUNT tool output.
 */
type DREAMSTUDIO_USER_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits
       * @description Available credits in the user's plan
       */
      credits: number;
      /**
       * Email
       * @description User's email address
       */
      email: string;
      /**
       * Id
       * @description Unique identifier of the user
       */
      id: string;
      /**
       * Profile
       * @description User's profile information object
       */
      profile: {
          /**
           * Avatar Url
           * @description URL of the user's avatar
           */
          avatar_url: string;
          /**
           * Name
           * @description User's display name
           */
          name: string;
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
 * Type of DREAMSTUDIO's DREAMSTUDIO_USER_BALANCE tool input.
 */
type DREAMSTUDIO_USER_BALANCE_INPUT = object;

/**
 * Type of DREAMSTUDIO's DREAMSTUDIO_USER_BALANCE tool output.
 */
type DREAMSTUDIO_USER_BALANCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits
       * @description Number of credits available (user balance)
       */
      credits: number;
      /**
       * Email
       * Format: email
       * @description User's email address
       */
      email: string;
      /**
       * Id
       * @description Unique user ID
       */
      id: string;
      /**
       * Profile Picture
       * Format: uri
       * @description URL to the user's profile picture
       * @default null
       */
      profile_picture: string | null;
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
 * Type map of all available tool input types for toolkit "DREAMSTUDIO".
 */
export type DREAMSTUDIO_TOOL_INPUTS = {
  GENERATE_IMAGE_FROM_IMAGE: DREAMSTUDIO_GENERATE_IMAGE_FROM_IMAGE_INPUT
  LIST_ENGINES: DREAMSTUDIO_LIST_ENGINES_INPUT
  USER_ACCOUNT: DREAMSTUDIO_USER_ACCOUNT_INPUT
  USER_BALANCE: DREAMSTUDIO_USER_BALANCE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DREAMSTUDIO".
 */
export type DREAMSTUDIO_TOOL_OUTPUTS = {
  GENERATE_IMAGE_FROM_IMAGE: DREAMSTUDIO_GENERATE_IMAGE_FROM_IMAGE_OUTPUT
  LIST_ENGINES: DREAMSTUDIO_LIST_ENGINES_OUTPUT
  USER_ACCOUNT: DREAMSTUDIO_USER_ACCOUNT_OUTPUT
  USER_BALANCE: DREAMSTUDIO_USER_BALANCE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DREAMSTUDIO toolkit.
 */
export const DREAMSTUDIO = {
  slug: "dreamstudio",
  tools: {
    /**
     * Tool to generate a new image from an initial image and text prompts. use after you have a reference image and want to transform it via text guidance.
     */
    GENERATE_IMAGE_FROM_IMAGE: "DREAMSTUDIO_GENERATE_IMAGE_FROM_IMAGE",
    /**
     * Tool to retrieve a list of all engines available to your organization or user. use when you need to discover which dreamstudio engines you can invoke.
     */
    LIST_ENGINES: "DREAMSTUDIO_LIST_ENGINES",
    /**
     * Tool to retrieve user account details, including id, email, credits, and profile. use after authenticating with the stability api to check account status.
     */
    USER_ACCOUNT: "DREAMSTUDIO_USER_ACCOUNT",
    /**
     * Tool to retrieve the user's balance information, including available credits and usage. use after authenticating to verify current credits.
     */
    USER_BALANCE: "DREAMSTUDIO_USER_BALANCE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DREAMSTUDIO".
 */
export type DREAMSTUDIO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DREAMSTUDIO".
 */
export type DREAMSTUDIO_TRIGGER_EVENTS = {}
