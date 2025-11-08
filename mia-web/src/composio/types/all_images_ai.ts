// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ALL_IMAGES_AI's ALL_IMAGES_AI_CHECK_API_KEY tool input.
 */
type ALL_IMAGES_AI_CHECK_API_KEY_INPUT = object;

/**
 * Type of ALL_IMAGES_AI's ALL_IMAGES_AI_CHECK_API_KEY tool output.
 */
type ALL_IMAGES_AI_CHECK_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description Email associated with the API key
       */
      email: string;
      /**
       * Name
       * @description Name of the API key owner
       */
      name: string;
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
 * Type of ALL_IMAGES_AI's ALL_IMAGES_AI_CREATE_WEBHOOK_ENDPOINT tool input.
 */
type ALL_IMAGES_AI_CREATE_WEBHOOK_ENDPOINT_INPUT = {
  /**
   * Events
   * @description List of event types to subscribe to. Defaults to ['print.failed','print.completed'] if not provided.
   * @default null
   */
  events: string[] | null;
  /**
   * Url
   * @description The HTTPS URL to receive webhook callbacks.
   */
  url?: string;
};

/**
 * Type of ALL_IMAGES_AI's ALL_IMAGES_AI_CREATE_WEBHOOK_ENDPOINT tool output.
 */
type ALL_IMAGES_AI_CREATE_WEBHOOK_ENDPOINT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhook Id
       * @description Unique identifier of the created webhook endpoint.
       */
      webhookId: string;
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
 * Type of ALL_IMAGES_AI's ALL_IMAGES_AI_LIST_AUTOMATED_IMAGES tool input.
 */
type ALL_IMAGES_AI_LIST_AUTOMATED_IMAGES_INPUT = {
  /**
   * Limit
   * @description Maximum number of batches to return (>=1).
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description Filter batches by generation name (partial match).
   * @default null
   */
  name: string | null;
  /**
   * Offset
   * @description Number of batches to skip (>=0).
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Sort order, e.g., 'createdAt:desc' or 'name:asc'.
   * @default null
   */
  sort: string | null;
  /**
   * Tag
   * @description Filter batches by a single tag.
   * @default null
   */
  tag: string | null;
};

/**
 * Type of ALL_IMAGES_AI's ALL_IMAGES_AI_LIST_AUTOMATED_IMAGES tool output.
 */
type ALL_IMAGES_AI_LIST_AUTOMATED_IMAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Filtered Results
       * @description Total number of batches matching filters.
       */
      filteredResults: number;
      /**
       * Prints
       * @description List of automated-image generation batches.
       */
      prints: {
          /**
           * Created At
           * @description ISO-8601 timestamp when batch was created.
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the generation batch.
           */
          id: string;
          /**
           * Images
           * @description List of generated images.
           */
          images: {
              /**
               * Free
               * @description Whether the image is free to use.
               */
              free: boolean;
              /**
               * Id
               * @description Unique identifier of the image.
               */
              id: string;
              /**
               * Titles
               * @description Localized titles for the image.
               */
              titles: {
                  [key: string]: unknown;
              };
              /**
               * Url
               * @description URL of the preview image.
               */
              url: string;
              /**
               * Url Full
               * @description URL of the full-resolution image.
               */
              urlFull: string;
              /**
               * Validate
               * @description Whether the image has been validated.
               */
              validate: boolean;
          }[];
          /**
           * Meta Data
           * @description Additional metadata for the generation.
           */
          metaData: {
              [key: string]: unknown;
          };
          /**
           * Name
           * @description Name given to the generation batch.
           */
          name: string;
          /**
           * Nb Images
           * @description Number of images generated in this batch.
           */
          nbImages: number;
          /**
           * Params
           * @description List of parameter objects used for generation.
           */
          params: {
              [key: string]: unknown;
          }[];
          /**
           * Process Mode
           * @description Mode of the generation process.
           * @enum {string}
           */
          processMode: "fast" | "relax";
          /**
           * Prompt
           * @description Prompt used to generate the images.
           */
          prompt: string;
          /**
           * Status
           * @description Numeric status code of the generation (0=Pending, 1=Completed, etc.).
           */
          status: number;
          /**
           * Tags
           * @description Tags associated with the generation.
           */
          tags: string[];
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
 * Type map of all available tool input types for toolkit "ALL_IMAGES_AI".
 */
export type ALL_IMAGES_AI_TOOL_INPUTS = {
  CHECK_API_KEY: ALL_IMAGES_AI_CHECK_API_KEY_INPUT
  CREATE_WEBHOOK_ENDPOINT: ALL_IMAGES_AI_CREATE_WEBHOOK_ENDPOINT_INPUT
  LIST_AUTOMATED_IMAGES: ALL_IMAGES_AI_LIST_AUTOMATED_IMAGES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ALL_IMAGES_AI".
 */
export type ALL_IMAGES_AI_TOOL_OUTPUTS = {
  CHECK_API_KEY: ALL_IMAGES_AI_CHECK_API_KEY_OUTPUT
  CREATE_WEBHOOK_ENDPOINT: ALL_IMAGES_AI_CREATE_WEBHOOK_ENDPOINT_OUTPUT
  LIST_AUTOMATED_IMAGES: ALL_IMAGES_AI_LIST_AUTOMATED_IMAGES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ALL_IMAGES_AI toolkit.
 */
export const ALL_IMAGES_AI = {
  slug: "all_images_ai",
  tools: {
    /**
     * Tool to check validity of current api key. use after obtaining your api key to validate its authenticity.
     */
    CHECK_API_KEY: "ALL_IMAGES_AI_CHECK_API_KEY",
    /**
     * Tool to add a webhook endpoint to an api key. use when you want to receive print event callbacks at a custom endpoint.
     */
    CREATE_WEBHOOK_ENDPOINT: "ALL_IMAGES_AI_CREATE_WEBHOOK_ENDPOINT",
    /**
     * Tool to list all images generated automatically for bulk use. use after creating automated-image batches to review and manage them.
     */
    LIST_AUTOMATED_IMAGES: "ALL_IMAGES_AI_LIST_AUTOMATED_IMAGES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ALL_IMAGES_AI".
 */
export type ALL_IMAGES_AI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ALL_IMAGES_AI".
 */
export type ALL_IMAGES_AI_TRIGGER_EVENTS = {}
