// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CARBONE's CARBONE_DELETE_TEMPLATE tool input.
 */
type CARBONE_DELETE_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description Unique identifier (SHA-256 hash) of the template to delete, as returned when uploading
   */
  templateId?: string;
};

/**
 * Type of CARBONE's CARBONE_DELETE_TEMPLATE tool output.
 */
type CARBONE_DELETE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the template was successfully deleted
       */
      success: boolean;
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
 * Type of CARBONE's CARBONE_DOWNLOAD_TEMPLATE tool input.
 */
type CARBONE_DOWNLOAD_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description The unique identifier (SHA256) of the template to download.
   */
  template_id?: string;
};

/**
 * Type of CARBONE's CARBONE_DOWNLOAD_TEMPLATE tool output.
 */
type CARBONE_DOWNLOAD_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Raw binary content of the downloaded template file
       */
      content: string;
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
 * Type of CARBONE's CARBONE_GENERATE_REPORT tool input.
 */
type CARBONE_GENERATE_REPORT_INPUT = {
  /**
   * Batch Output
   * @description Output type for batch processing: 'zip' or 'pdf'
   * @default null
   * @enum {string|null}
   */
  batchOutput: "zip" | "pdf" | null;
  /**
   * Batch Split By
   * @description Batch processing split key, e.g. 'd.items'
   * @default null
   */
  batchSplitBy: string | null;
  /**
   * Carbone Webhook Headers
   * @description Custom headers for webhook calls, as a map of header name to value.
   * @default null
   */
  "carbone-webhook-headers": {
      [key: string]: string;
  } | null;
  /**
   * Carbone Webhook Url
   * @description Webhook URL for asynchronous report generation. Include to enable async jobs.
   * @default null
   */
  "carbone-webhook-url": string | null;
  /**
   * Complement
   * @description Extra data object merged into the template with tags {c.}
   * @default null
   */
  complement: {
      [key: string]: unknown;
  } | null;
  /**
   * Convert To
   * @description Output file format as a string, e.g. 'pdf', or an object with formatName and formatOptions
   * @default null
   */
  convertTo: string | null;
  /**
   * Currency Rates
   * @description Mapping of currency codes to exchange rates
   * @default null
   */
  currencyRates: {
      [key: string]: number;
  } | null;
  /**
   * Currency Source
   * @description Currency source code for conversions, e.g. 'EUR'
   * @default null
   */
  currencySource: string | null;
  /**
   * Currency Target
   * @description Target currency code for conversions, e.g. 'USD'
   * @default null
   */
  currencyTarget: string | null;
  /**
   * Data
   * @description Data to merge into the template as a JSON object or an array of objects
   */
  data?: {
      [key: string]: unknown;
  } | null;
  /**
   * Enum
   * @description Enumerations to use with convEnum formatter, e.g. {'ORDER_STATUS': ['open', 'close']}
   * @default null
   */
  enum: {
      [key: string]: unknown;
  } | null;
  /**
   * Hard Refresh
   * @description Force recompute pagination and table of contents
   * @default null
   */
  hardRefresh: boolean | null;
  /**
   * Lang
   * @description Locale of the generated document, e.g. 'en-us'
   * @default null
   */
  lang: string | null;
  /**
   * Report Name
   * @description Static or dynamic file name returned in the content-disposition header, e.g. '{d.date}.odt'
   * @default null
   */
  reportName: string | null;
  /**
   * Template Id
   * @description Unique identifier of the Carbone template used to generate the report
   */
  templateId?: string;
  /**
   * Timezone
   * @description Convert document dates to this timezone, e.g. 'Europe/Paris'
   * @default null
   */
  timezone: string | null;
  /**
   * Translations
   * @description Localization dictionary for translations formatter, e.g. {'fr-ca': {'one': 'un'}}
   * @default null
   */
  translations: {
      [key: string]: {
          [key: string]: string;
      };
  } | null;
  /**
   * Variable Str
   * @description Predefined alias for template variables, e.g. '{#def = d.id}'
   * @default null
   */
  variableStr: string | null;
};

/**
 * Type of CARBONE's CARBONE_GENERATE_REPORT tool output.
 */
type CARBONE_GENERATE_REPORT_OUTPUT = {
  /**
   * GenerateReportResponseData
   * @description Data containing the renderId if the generation succeeded
   * @default null
   */
  data: {
      /**
       * Render Id
       * @description Identifier of the generated report job
       */
      renderId: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description Whether the generation was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CARBONE's CARBONE_GENERATE_TEMPLATE_ID tool input.
 */
type CARBONE_GENERATE_TEMPLATE_ID_INPUT = {
  /**
   * Template
   * @description Base64-encoded content of the template file (pure base64 or data-URI), used to compute the template ID without uploading.
   */
  template?: string;
};

/**
 * Type of CARBONE's CARBONE_GENERATE_TEMPLATE_ID tool output.
 */
type CARBONE_GENERATE_TEMPLATE_ID_OUTPUT = {
  /**
   * Data
   * @description Container for the generated template ID.
   */
  data?: {
      /**
       * Template Id
       * @description Unique identifier (SHA256) of the template computed from its content.
       */
      templateId: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description Indicates if the ID generation was successful.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CARBONE's CARBONE_GET_STATUS tool input.
 */
type CARBONE_GET_STATUS_INPUT = object;

/**
 * Type of CARBONE's CARBONE_GET_STATUS tool output.
 */
type CARBONE_GET_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description HTTP status code returned by the Carbone API.
       */
      code: number;
      /**
       * Message
       * @description Response message (e.g., 'OK').
       */
      message: string;
      /**
       * Success
       * @description Indicates if the request succeeded.
       */
      success: boolean;
      /**
       * Version
       * @description Current Carbone API version.
       */
      version: string;
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
 * Type of CARBONE's CARBONE_SET_API_VERSION tool input.
 */
type CARBONE_SET_API_VERSION_INPUT = {
  /**
   * Version
   * @description Major Carbone API version (e.g., 4)
   */
  version?: number;
};

/**
 * Type of CARBONE's CARBONE_SET_API_VERSION tool output.
 */
type CARBONE_SET_API_VERSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message.
       */
      message: string;
      /**
       * Version
       * @description The Carbone API version now set for subsequent requests.
       */
      version: number;
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
 * Type of CARBONE's CARBONE_UPLOAD_TEMPLATE tool input.
 */
type CARBONE_UPLOAD_TEMPLATE_INPUT = {
  /**
   * Template
   * @description Template file content to upload. Provide raw bytes for multipart/form-data upload, or a base64-encoded string (pure base64 or data-URI) for JSON upload.
   */
  template?: string | null;
};

/**
 * Type of CARBONE's CARBONE_UPLOAD_TEMPLATE tool output.
 */
type CARBONE_UPLOAD_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Container for the template ID of the uploaded file.
   */
  data?: {
      /**
       * Template Id
       * @description Unique identifier (sha256) of the uploaded template.
       */
      templateId: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Success
   * @description True if the upload was successful.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "CARBONE".
 */
export type CARBONE_TOOL_INPUTS = {
  DELETE_TEMPLATE: CARBONE_DELETE_TEMPLATE_INPUT
  DOWNLOAD_TEMPLATE: CARBONE_DOWNLOAD_TEMPLATE_INPUT
  GENERATE_REPORT: CARBONE_GENERATE_REPORT_INPUT
  GENERATE_TEMPLATE_ID: CARBONE_GENERATE_TEMPLATE_ID_INPUT
  GET_STATUS: CARBONE_GET_STATUS_INPUT
  SET_API_VERSION: CARBONE_SET_API_VERSION_INPUT
  UPLOAD_TEMPLATE: CARBONE_UPLOAD_TEMPLATE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CARBONE".
 */
export type CARBONE_TOOL_OUTPUTS = {
  DELETE_TEMPLATE: CARBONE_DELETE_TEMPLATE_OUTPUT
  DOWNLOAD_TEMPLATE: CARBONE_DOWNLOAD_TEMPLATE_OUTPUT
  GENERATE_REPORT: CARBONE_GENERATE_REPORT_OUTPUT
  GENERATE_TEMPLATE_ID: CARBONE_GENERATE_TEMPLATE_ID_OUTPUT
  GET_STATUS: CARBONE_GET_STATUS_OUTPUT
  SET_API_VERSION: CARBONE_SET_API_VERSION_OUTPUT
  UPLOAD_TEMPLATE: CARBONE_UPLOAD_TEMPLATE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CARBONE toolkit.
 */
export const CARBONE = {
  slug: "carbone",
  tools: {
    /**
     * Tool to delete a template from the carbone server. use after confirming you have the correct template id.
     */
    DELETE_TEMPLATE: "CARBONE_DELETE_TEMPLATE",
    /**
     * Tool to download a template from carbone by template id. use when you need to retrieve the original template file.
     */
    DOWNLOAD_TEMPLATE: "CARBONE_DOWNLOAD_TEMPLATE",
    /**
     * Tool to generate a carbone report from a template and json data. use when you need to render documents in various formats.
     */
    GENERATE_REPORT: "CARBONE_GENERATE_REPORT",
    /**
     * Tool to generate a unique template id for a new template. use when you need the template identifier before uploading.
     */
    GENERATE_TEMPLATE_ID: "CARBONE_GENERATE_TEMPLATE_ID",
    /**
     * Tool to retrieve the current status and health of the carbone server. use before generating reports to ensure the service is operational.
     */
    GET_STATUS: "CARBONE_GET_STATUS",
    /**
     * Tool to set the carbone api version to be used for subsequent requests. use before rendering or managing templates to ensure correct version is applied.
     */
    SET_API_VERSION: "CARBONE_SET_API_VERSION",
    /**
     * Tool to upload a template to the carbone server. use when you need to add or replace a template by providing its content.
     */
    UPLOAD_TEMPLATE: "CARBONE_UPLOAD_TEMPLATE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CARBONE".
 */
export type CARBONE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CARBONE".
 */
export type CARBONE_TRIGGER_EVENTS = {}
