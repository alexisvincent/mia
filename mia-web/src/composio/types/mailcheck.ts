// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MAILCHECK's MAILCHECK_MAILCHECK_VERIFY_EMAIL tool input.
 */
type MAILCHECK_MAILCHECK_VERIFY_EMAIL_INPUT = {
  /**
   * Accept Disposable
   * @description Whether to accept disposable email domains.
   * @default null
   */
  accept_disposable: boolean | null;
  /**
   * Accept Role
   * @description Whether to accept role-based email addresses (e.g., admin@company.com).
   * @default null
   */
  accept_role: boolean | null;
  /**
   * Email
   * Format: email
   * @description The email address to verify.
   */
  email?: unknown;
};

/**
 * Type of MAILCHECK's MAILCHECK_MAILCHECK_VERIFY_EMAIL tool output.
 */
type MAILCHECK_MAILCHECK_VERIFY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain
       * @description The domain of the email address.
       */
      domain: string;
      /**
       * Email
       * @description The verified email address.
       */
      email: string;
      /**
       * Error
       * @description Error message if verification failed.
       * @default null
       */
      error: string | null;
      /**
       * Is Disposable
       * @description Whether the email is disposable.
       */
      is_disposable: boolean;
      /**
       * Is Mx Found
       * @description Whether MX records were found for the domain.
       */
      is_mx_found: boolean;
      /**
       * Is Role
       * @description Whether the email is role-based.
       */
      is_role: boolean;
      /**
       * Is Smtp Valid
       * @description Whether SMTP validation succeeded.
       */
      is_smtp_valid: boolean;
      /**
       * Is Valid
       * @description Whether the email is valid.
       */
      is_valid: boolean;
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
 * Type map of all available tool input types for toolkit "MAILCHECK".
 */
export type MAILCHECK_TOOL_INPUTS = {
  MAILCHECK_VERIFY_EMAIL: MAILCHECK_MAILCHECK_VERIFY_EMAIL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MAILCHECK".
 */
export type MAILCHECK_TOOL_OUTPUTS = {
  MAILCHECK_VERIFY_EMAIL: MAILCHECK_MAILCHECK_VERIFY_EMAIL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MAILCHECK toolkit.
 */
export const MAILCHECK = {
  slug: "mailcheck",
  tools: {
    /**
     * Tool to verify provided email address. use after obtaining user email input.
     */
    MAILCHECK_VERIFY_EMAIL: "MAILCHECK_MAILCHECK_VERIFY_EMAIL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MAILCHECK".
 */
export type MAILCHECK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MAILCHECK".
 */
export type MAILCHECK_TRIGGER_EVENTS = {}
