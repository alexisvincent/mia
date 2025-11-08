// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MAILBOXLAYER's MAILBOXLAYER_CHECK_EMAIL tool input.
 */
type MAILBOXLAYER_CHECK_EMAIL_INPUT = {
  /**
   * Access Key
   * @description Your API access key for mailboxlayer.
   */
  access_key?: string;
  /**
   * Catch All
   * @description Detect catch-all addresses (1) or not (0).
   * @default null
   */
  catch_all: number | null;
  /**
   * Disposable
   * @description Detect disposable email addresses (1) or not (0).
   * @default null
   */
  disposable: number | null;
  /**
   * Email
   * Format: email
   * @description The email address to validate.
   */
  email?: unknown;
  /**
   * Format
   * @description Enable strict format validation (1) or not (0).
   * @default null
   */
  format: number | null;
  /**
   * Free
   * @description Detect free email providers (1) or not (0).
   * @default null
   */
  free: number | null;
  /**
   * Mx
   * @description Enable MX record check (1) or not (0).
   * @default null
   */
  mx: number | null;
  /**
   * Role
   * @description Detect role-based addresses (1) or not (0).
   * @default null
   */
  role: number | null;
  /**
   * Smtp
   * @description Enable SMTP check (1) or not (0).
   * @default null
   */
  smtp: number | null;
};

/**
 * Type of MAILBOXLAYER's MAILBOXLAYER_CHECK_EMAIL tool output.
 */
type MAILBOXLAYER_CHECK_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Catch All
       * @description Whether domain is catch-all.
       * @default null
       */
      catch_all: boolean | null;
      /**
       * CreditsInfo
       * @description API credit usage info.
       * @default null
       */
      credits_info: {
          /**
           * Credits Remaining
           * @description Number of API credits remaining.
           * @default null
           */
          credits_remaining: number | null;
          /**
           * Credits Used
           * @description Number of API credits used by this request.
           * @default null
           */
          credits_used: number | null;
      } | null;
      /**
       * Did You Mean
       * @description Suggestion if the email was mistyped.
       * @default null
       */
      did_you_mean: string | null;
      /**
       * Disposable
       * @description Whether email is disposable.
       * @default null
       */
      disposable: boolean | null;
      /**
       * Domain
       * @description Domain part of the email.
       * @default null
       */
      domain: string | null;
      /**
       * Email
       * @description The email address checked.
       */
      email: string;
      /**
       * Format Valid
       * @description Whether email format is valid.
       * @default null
       */
      format_valid: boolean | null;
      /**
       * Free
       * @description Whether provider is free.
       * @default null
       */
      free: boolean | null;
      /**
       * Mx Found
       * @description Whether MX records were found.
       * @default null
       */
      mx_found: boolean | null;
      /**
       * Role
       * @description Whether email is role-based.
       * @default null
       */
      role: boolean | null;
      /**
       * Score
       * @description Quality score between 0 and 1.
       * @default null
       */
      score: number | null;
      /**
       * Smtp Check
       * @description Result of SMTP check.
       * @default null
       */
      smtp_check: boolean | null;
      /**
       * Status
       * @description API status code.
       * @default null
       */
      status: number | null;
      /**
       * Success
       * @description Whether API request was successful.
       * @default null
       */
      success: boolean | null;
      /**
       * User
       * @description Local part of the email.
       * @default null
       */
      user: string | null;
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
 * Type map of all available tool input types for toolkit "MAILBOXLAYER".
 */
export type MAILBOXLAYER_TOOL_INPUTS = {
  CHECK_EMAIL: MAILBOXLAYER_CHECK_EMAIL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MAILBOXLAYER".
 */
export type MAILBOXLAYER_TOOL_OUTPUTS = {
  CHECK_EMAIL: MAILBOXLAYER_CHECK_EMAIL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MAILBOXLAYER toolkit.
 */
export const MAILBOXLAYER = {
  slug: "mailboxlayer",
  tools: {
    /**
     * Tool to validate a single email address. use when you need to check syntax, domain, smtp, and meta-flags.
     */
    CHECK_EMAIL: "MAILBOXLAYER_CHECK_EMAIL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MAILBOXLAYER".
 */
export type MAILBOXLAYER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MAILBOXLAYER".
 */
export type MAILBOXLAYER_TRIGGER_EVENTS = {}
