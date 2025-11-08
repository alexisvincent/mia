// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GAMMA's GAMMA_GENERATE_GAMMA tool input.
 */
type GAMMA_GENERATE_GAMMA_INPUT = {
  /**
   * Blocks
   * @description Optional structured content. If provided, Gamma will consider these blocks for generation.
   * @default null
   */
  blocks: ({
      /**
       * Type
       * @description Block type, e.g., 'text', 'image', 'list', etc.
       */
      type: string;
      /**
       * Value
       * @description Value or payload for the block (depends on type).
       * @default null
       */
      value: unknown;
  } & {
      [key: string]: unknown;
  })[] | null;
  /**
   * DeckOptions
   * @description Deck-level options for layout/structure; pass-through to Gamma API.
   * @default null
   */
  deckOptions: {
      [key: string]: unknown;
  } | null;
  /**
   * ExportOptions
   * @description Export formats requested from Gamma. If you request pdf/pptx, Gamma will return
   *     URLs only via the GET endpoint per docs.
   * @default null
   */
  export: ({
      /**
       * Pdf
       * @description Whether to generate and provide a downloadable PDF via GET endpoint.
       * @default null
       */
      pdf: boolean | null;
      /**
       * Pptx
       * @description Whether to generate and provide a downloadable PPTX via GET endpoint.
       * @default null
       */
      pptx: boolean | null;
  } & {
      [key: string]: unknown;
  }) | null;
  /**
   * ImageOptions
   * @description Image generation options. Model accepts a set of values defined by Gamma docs.
   *     We allow extra fields to be forward-compatible.
   * @default null
   */
  imageOptions: ({
      /**
       * Model
       * @description Image model to use (see Gamma 'Image Model Accepted Values').
       * @default null
       */
      model: string | null;
      /**
       * Negative Prompt
       * @description Negative prompt to avoid certain attributes.
       * @default null
       */
      negative_prompt: string | null;
      /**
       * Prompt
       * @description Prompt to guide image generation.
       * @default null
       */
      prompt: string | null;
  } & {
      [key: string]: unknown;
  }) | null;
  /**
   * Prompt
   * @description High-level prompt to guide the generation.
   * @default null
   */
  prompt: string | null;
  /**
   * TextOptions
   * @description Text generation options. 'language' accepts values listed in Gamma docs.
   * @default null
   */
  textOptions: ({
      /**
       * Language
       * @description Output language for the generated content (see 'Output Language Accepted Values').
       * @default null
       */
      language: string | null;
      /**
       * Style
       * @description Writing style or format guidance (e.g., bullet_points).
       * @default null
       */
      style: string | null;
      /**
       * Tone
       * @description Desired tone of the generated text (e.g., professional, casual).
       * @default null
       */
      tone: string | null;
  } & {
      [key: string]: unknown;
  }) | null;
  /**
   * Title
   * @description Optional title for the generated gamma.
   * @default null
   */
  title: string | null;
};

/**
 * Type of GAMMA's GAMMA_GENERATE_GAMMA tool output.
 */
type GAMMA_GENERATE_GAMMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Generation Id
       * @description Unique identifier for the requested generation.
       */
      generationId: string;
      /**
       * Status
       * @description Server-acknowledged status for the request (e.g., accepted).
       * @default null
       */
      status: string | null;
  } & {
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
 * Type of GAMMA's GAMMA_GET_GAMMA_FILE_URLS tool input.
 */
type GAMMA_GET_GAMMA_FILE_URLS_INPUT = {
  /**
   * Generation Id
   * @description The generationId obtained from the POST generations endpoint.
   */
  generation_id?: string;
};

/**
 * Type of GAMMA's GAMMA_GET_GAMMA_FILE_URLS tool output.
 */
type GAMMA_GET_GAMMA_FILE_URLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * FileUrls
       * @description Container for file URLs returned by Gamma generation GET endpoint.
       * @default null
       */
      fileUrls: ({
          /**
           * Gamma Url
           * Format: uri
           * @description URL to the generated Gamma (editable in Gamma app).
           * @default null
           */
          gamma_url: string | null;
          /**
           * Pdf Url
           * Format: uri
           * @description URL to the generated PDF, if requested at generation time.
           * @default null
           */
          pdf_url: string | null;
          /**
           * Pptx Url
           * Format: uri
           * @description URL to the generated PPTX, if requested at generation time.
           * @default null
           */
          pptx_url: string | null;
      } & {
          [key: string]: unknown;
      }) | null;
      /**
       * Status
       * @description Generation status (e.g., pending, completed, failed).
       */
      status: string;
  } & {
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
 * Type map of all available tool input types for toolkit "GAMMA".
 */
export type GAMMA_TOOL_INPUTS = {
  GENERATE_GAMMA: GAMMA_GENERATE_GAMMA_INPUT
  GET_GAMMA_FILE_URLS: GAMMA_GET_GAMMA_FILE_URLS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GAMMA".
 */
export type GAMMA_TOOL_OUTPUTS = {
  GENERATE_GAMMA: GAMMA_GENERATE_GAMMA_OUTPUT
  GET_GAMMA_FILE_URLS: GAMMA_GET_GAMMA_FILE_URLS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GAMMA toolkit.
 */
export const GAMMA = {
  slug: "gamma",
  tools: {
    /**
     * Create a new gamma generation. use to produce an ai-generated presentation/content. docs: https://developers.gamma.app/reference/generate-a-gamma
     */
    GENERATE_GAMMA: "GAMMA_GENERATE_GAMMA",
    /**
     * Retrieve generation status and file urls. poll this endpoint every ~5 seconds until status is 'completed'. docs: https://developers.gamma.app/reference/get-gamma-file-urls
     */
    GET_GAMMA_FILE_URLS: "GAMMA_GET_GAMMA_FILE_URLS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GAMMA".
 */
export type GAMMA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GAMMA".
 */
export type GAMMA_TRIGGER_EVENTS = {}
