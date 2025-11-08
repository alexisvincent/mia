// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EMAILLISTVERIFY's EMAILLISTVERIFY_VERIFY_EMAIL tool input.
 */
type EMAILLISTVERIFY_VERIFY_EMAIL_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to be verified
   */
  email?: unknown;
};

/**
 * Type of EMAILLISTVERIFY's EMAILLISTVERIFY_VERIFY_EMAIL tool output.
 */
type EMAILLISTVERIFY_VERIFY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Verification status of the email
       * @enum {string}
       */
      status: "ok" | "failed" | "unknown" | "incorrect" | "key_not_valid" | "missing parameters";
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
 * Type of EMAILLISTVERIFY's EMAILLISTVERIFY_VERIFY_EMAIL_DETAILED tool input.
 */
type EMAILLISTVERIFY_VERIFY_EMAIL_DETAILED_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to be verified in detail
   */
  email?: unknown;
};

/**
 * Type of EMAILLISTVERIFY's EMAILLISTVERIFY_VERIFY_EMAIL_DETAILED tool output.
 */
type EMAILLISTVERIFY_VERIFY_EMAIL_DETAILED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Info
       * @description Detailed validation information for the email
       */
      info: {
          /**
           * Accept All
           * @description Indicates if the recipient domain accepts all emails
           */
          accept_all: boolean;
          /**
           * Disposable
           * @description Indicates if the email address is from a disposable provider
           */
          disposable: boolean;
          /**
           * Domain
           * @description Indicates if the email domain is valid
           */
          domain: boolean;
          /**
           * Free
           * @description Indicates if the email provider is free (e.g., Gmail, Yahoo)
           */
          free: boolean;
          /**
           * Mx
           * @description Indicates if the domain has valid MX records
           */
          mx: boolean;
          /**
           * Role
           * @description Indicates if the email address is a role-based address
           */
          role: boolean;
          /**
           * Syntax
           * @description Indicates if the email syntax is valid
           */
          syntax: boolean;
      };
      /**
       * Status
       * @description Overall verification status of the email
       * @enum {string}
       */
      status: "ok" | "failed" | "unknown" | "incorrect" | "key_not_valid" | "missing parameters";
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
 * Type map of all available tool input types for toolkit "EMAILLISTVERIFY".
 */
export type EMAILLISTVERIFY_TOOL_INPUTS = {
  VERIFY_EMAIL: EMAILLISTVERIFY_VERIFY_EMAIL_INPUT
  VERIFY_EMAIL_DETAILED: EMAILLISTVERIFY_VERIFY_EMAIL_DETAILED_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EMAILLISTVERIFY".
 */
export type EMAILLISTVERIFY_TOOL_OUTPUTS = {
  VERIFY_EMAIL: EMAILLISTVERIFY_VERIFY_EMAIL_OUTPUT
  VERIFY_EMAIL_DETAILED: EMAILLISTVERIFY_VERIFY_EMAIL_DETAILED_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EMAILLISTVERIFY toolkit.
 */
export const EMAILLISTVERIFY = {
  slug: "emaillistverify",
  tools: {
    /**
     * Tool to verify a single email address in real time. use when you need to confirm deliverability before e.g. user signup.
     */
    VERIFY_EMAIL: "EMAILLISTVERIFY_VERIFY_EMAIL",
    /**
     * Tool to verify a single email address and return detailed validation information. use when you need deep validation insights beyond a simple status.
     */
    VERIFY_EMAIL_DETAILED: "EMAILLISTVERIFY_VERIFY_EMAIL_DETAILED",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EMAILLISTVERIFY".
 */
export type EMAILLISTVERIFY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EMAILLISTVERIFY".
 */
export type EMAILLISTVERIFY_TRIGGER_EVENTS = {}
