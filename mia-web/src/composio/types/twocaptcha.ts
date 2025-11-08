// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TWOCAPTCHA's TWOCAPTCHA_CREATE_TASK tool input.
 */
type TWOCAPTCHA_CREATE_TASK_INPUT = {
  /**
   * Callback Url
   * Format: uri
   * @description Your registered pingback URL to receive results.
   * @default null
   */
  callbackUrl: string | null;
  /**
   * Client Key
   * @description Your 2Captcha API key.
   */
  clientKey?: string;
  /**
   * Language Pool
   * @description Worker language preference: 'en' for English (default), 'rn' for Russian.
   * @default en
   * @enum {string}
   */
  languagePool: "en" | "rn";
  /**
   * Soft Id
   * @description Your software ID from 2Captcha's Software Catalog.
   * @default null
   */
  softId: number | null;
  /**
   * Task
   * @description Task object defining the captcha type and parameters. E.g., {'type':'RecaptchaV2TaskProxyless', 'websiteURL':'https://...', 'websiteKey':'...'}
   */
  task?: {
      [key: string]: unknown;
  };
};

/**
 * Type of TWOCAPTCHA's TWOCAPTCHA_CREATE_TASK tool output.
 */
type TWOCAPTCHA_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Id
       * @description 0 indicates success; non-zero indicates a specific error code.
       */
      errorId: number;
      /**
       * Task Id
       * @description Identifier of the created task. Present when errorId is 0.
       * @default null
       */
      taskId: number | null;
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
 * Type map of all available tool input types for toolkit "TWOCAPTCHA".
 */
export type TWOCAPTCHA_TOOL_INPUTS = {
  CREATE_TASK: TWOCAPTCHA_CREATE_TASK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TWOCAPTCHA".
 */
export type TWOCAPTCHA_TOOL_OUTPUTS = {
  CREATE_TASK: TWOCAPTCHA_CREATE_TASK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TWOCAPTCHA toolkit.
 */
export const TWOCAPTCHA = {
  slug: "twocaptcha",
  tools: {
    /**
     * Tool to create a new captcha-solving task. use when you need to initiate solving of any supported captcha type. call after assembling captcha parameters.
     */
    CREATE_TASK: "TWOCAPTCHA_CREATE_TASK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TWOCAPTCHA".
 */
export type TWOCAPTCHA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TWOCAPTCHA".
 */
export type TWOCAPTCHA_TRIGGER_EVENTS = {}
