// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SUPPORTIVEKOALA's SUPPORTIVEKOALA_CREATE_IMAGE tool input.
 */
type SUPPORTIVEKOALA_CREATE_IMAGE_INPUT = {
  /**
   * Modifications
   * @description Key-value mapping of template-specific fields and their replacement values
   */
  modifications?: {
      [key: string]: string | number | boolean | (string | number | boolean)[] | {
          [key: string]: string | number | boolean;
      };
  };
  /**
   * Template
   * @description UUID or slug of the template to use for image generation
   */
  template?: string;
  /**
   * Webhook Url
   * @description Optional callback URL to receive a webhook when the image is ready
   * @default null
   */
  webhook_url: string | null;
};

/**
 * Type of SUPPORTIVEKOALA's SUPPORTIVEKOALA_CREATE_IMAGE tool output.
 */
type SUPPORTIVEKOALA_CREATE_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message, if the image creation failed
       * @default null
       */
      error: string | null;
      /**
       * Id
       * @description Unique identifier for the image generation task
       */
      id: string;
      /**
       * Status
       * @description Current status of the image generation task
       * @enum {string}
       */
      status: "queued" | "processing";
      /**
       * Url
       * @description Direct URL to the generated image, if immediately available
       * @default null
       */
      url: string | null;
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
 * Type of SUPPORTIVEKOALA's SUPPORTIVEKOALA_CREATE_TEMPLATE tool input.
 */
type SUPPORTIVEKOALA_CREATE_TEMPLATE_INPUT = {
  /**
   * Image Url
   * Format: uri
   * @description URL of the base image for the template.
   */
  image_url?: string;
  /**
   * Json Schema
   * @description JSON Schema object describing variable fields for the template.
   */
  json_schema?: {
      [key: string]: unknown;
  };
  /**
   * Name
   * @description Name of the template.
   */
  name?: string;
  /**
   * Webhook Url
   * Format: uri
   * @description Optional webhook URL for callbacks when generation is complete.
   * @default null
   */
  webhook_url: string | null;
};

/**
 * Type of SUPPORTIVEKOALA's SUPPORTIVEKOALA_CREATE_TEMPLATE tool output.
 */
type SUPPORTIVEKOALA_CREATE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp when the template was created.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the template.
       */
      id: string;
      /**
       * Image Url
       * Format: uri
       * @description URL of the template image.
       */
      image_url: string;
      /**
       * Json Schema
       * @description JSON Schema object defining template variables.
       */
      json_schema: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description Name of the template.
       */
      name: string;
      /**
       * Updated At
       * @description ISO timestamp when the template was last updated.
       */
      updated_at: string;
      /**
       * Webhook Url
       * Format: uri
       * @description Webhook URL if configured.
       * @default null
       */
      webhook_url: string | null;
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
 * Type of SUPPORTIVEKOALA's SUPPORTIVEKOALA_LIST_IMAGES tool input.
 */
type SUPPORTIVEKOALA_LIST_IMAGES_INPUT = object;

/**
 * Type of SUPPORTIVEKOALA's SUPPORTIVEKOALA_LIST_IMAGES tool output.
 */
type SUPPORTIVEKOALA_LIST_IMAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Images
       * @description List of images for the authenticated user
       */
      images: {
          /**
           * Created At
           * @description Timestamp when the image was created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the image
           */
          id: string;
          /**
           * Metadata
           * @description Related metadata for the image
           */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Template Id
           * @description Template ID associated with the image
           */
          templateId: string;
          /**
           * Url
           * @description Direct URL to the image
           */
          url: string;
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
 * Type of SUPPORTIVEKOALA's SUPPORTIVEKOALA_LIST_TEMPLATES tool input.
 */
type SUPPORTIVEKOALA_LIST_TEMPLATES_INPUT = object;

/**
 * Type of SUPPORTIVEKOALA's SUPPORTIVEKOALA_LIST_TEMPLATES tool output.
 */
type SUPPORTIVEKOALA_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description List of template objects
       */
      templates: {
          /**
           * Created At
           * @description Date and time when the template was created (ISO 8601)
           */
          created_at: string;
          /**
           * Description
           * @description Description of the template
           */
          description: string;
          /**
           * Id
           * @description Unique identifier for the template
           */
          id: string;
          /**
           * Name
           * @description Name of the template
           */
          name: string;
          /**
           * Preview Url
           * @description URL to preview the template
           */
          preview_url: string;
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
 * Type of SUPPORTIVEKOALA's SUPPORTIVEKOALA_REGISTER_USER tool input.
 */
type SUPPORTIVEKOALA_REGISTER_USER_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address of the user. Must be a valid email format.
   */
  email?: unknown;
  /**
   * Password
   * @description The password for the user account. Choose a strong password.
   */
  password?: string;
};

/**
 * Type of SUPPORTIVEKOALA's SUPPORTIVEKOALA_REGISTER_USER tool output.
 */
type SUPPORTIVEKOALA_REGISTER_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the user was created (ISO 8601 format).
       */
      created_at: string;
      /**
       * Email
       * Format: email
       * @description The email address of the newly created user.
       */
      email: unknown;
      /**
       * Id
       * @description Unique identifier for the newly created user.
       */
      id: string;
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
 * Type of SUPPORTIVEKOALA's SUPPORTIVEKOALA_RETRIEVE_TEMPLATE tool input.
 */
type SUPPORTIVEKOALA_RETRIEVE_TEMPLATE_INPUT = {
  /**
   * Id
   * @description The unique ID of the template to retrieve.
   */
  id?: string;
};

/**
 * Type of SUPPORTIVEKOALA's SUPPORTIVEKOALA_RETRIEVE_TEMPLATE tool output.
 */
type SUPPORTIVEKOALA_RETRIEVE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The content or structure of the template as a JSON object.
       */
      content: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO 8601 timestamp when the template was created.
       */
      created_at: string;
      /**
       * Id
       * @description The unique ID of the template.
       */
      id: string;
      /**
       * Name
       * @description The name of the template.
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp of the last update to the template.
       */
      updated_at: string;
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
 * Type map of all available tool input types for toolkit "SUPPORTIVEKOALA".
 */
export type SUPPORTIVEKOALA_TOOL_INPUTS = {
  CREATE_IMAGE: SUPPORTIVEKOALA_CREATE_IMAGE_INPUT
  CREATE_TEMPLATE: SUPPORTIVEKOALA_CREATE_TEMPLATE_INPUT
  LIST_IMAGES: SUPPORTIVEKOALA_LIST_IMAGES_INPUT
  LIST_TEMPLATES: SUPPORTIVEKOALA_LIST_TEMPLATES_INPUT
  REGISTER_USER: SUPPORTIVEKOALA_REGISTER_USER_INPUT
  RETRIEVE_TEMPLATE: SUPPORTIVEKOALA_RETRIEVE_TEMPLATE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SUPPORTIVEKOALA".
 */
export type SUPPORTIVEKOALA_TOOL_OUTPUTS = {
  CREATE_IMAGE: SUPPORTIVEKOALA_CREATE_IMAGE_OUTPUT
  CREATE_TEMPLATE: SUPPORTIVEKOALA_CREATE_TEMPLATE_OUTPUT
  LIST_IMAGES: SUPPORTIVEKOALA_LIST_IMAGES_OUTPUT
  LIST_TEMPLATES: SUPPORTIVEKOALA_LIST_TEMPLATES_OUTPUT
  REGISTER_USER: SUPPORTIVEKOALA_REGISTER_USER_OUTPUT
  RETRIEVE_TEMPLATE: SUPPORTIVEKOALA_RETRIEVE_TEMPLATE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SUPPORTIVEKOALA toolkit.
 */
export const SUPPORTIVEKOALA = {
  slug: "supportivekoala",
  tools: {
    /**
     * Tool to create a new image based on a template. use when you have selected your template and prepared modifications.
     */
    CREATE_IMAGE: "SUPPORTIVEKOALA_CREATE_IMAGE",
    /**
     * Tool to create a new template for image generation. use after gathering template details.
     */
    CREATE_TEMPLATE: "SUPPORTIVEKOALA_CREATE_TEMPLATE",
    /**
     * Tool to list images associated with the authenticated user. use after confirming authentication.
     */
    LIST_IMAGES: "SUPPORTIVEKOALA_LIST_IMAGES",
    /**
     * Tool to retrieve all templates. use when you need to list all templates for the authenticated user.
     */
    LIST_TEMPLATES: "SUPPORTIVEKOALA_LIST_TEMPLATES",
    /**
     * Tool to register a new user account. use after collecting valid user credentials.
     */
    REGISTER_USER: "SUPPORTIVEKOALA_REGISTER_USER",
    /**
     * Tool to retrieve a template by id. use when you have a valid template id and need full template details. use after confirming this detail.
     */
    RETRIEVE_TEMPLATE: "SUPPORTIVEKOALA_RETRIEVE_TEMPLATE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SUPPORTIVEKOALA".
 */
export type SUPPORTIVEKOALA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SUPPORTIVEKOALA".
 */
export type SUPPORTIVEKOALA_TRIGGER_EVENTS = {}
