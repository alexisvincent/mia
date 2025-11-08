// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MAILS_SO's MAILS_SO_RETRIEVE_BATCH_RESULTS tool input.
 */
type MAILS_SO_RETRIEVE_BATCH_RESULTS_INPUT = {
  /**
   * Id
   * @description Unique identifier for the batch validation job
   */
  id?: string;
};

/**
 * Type of MAILS_SO's MAILS_SO_RETRIEVE_BATCH_RESULTS tool output.
 */
type MAILS_SO_RETRIEVE_BATCH_RESULTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Completed At
       * @description ISO 8601 timestamp of job completion, if finished
       * @default null
       */
      completed_at: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp of job creation
       */
      created_at: string;
      /**
       * Id
       * @description Unique batch identifier
       */
      id: string;
      /**
       * Processed
       * @description Number of emails processed so far
       */
      processed: number;
      /**
       * Results
       * @description Detailed verification results for each email in the batch
       */
      results: {
          /**
           * Email
           * @description Email address verified
           */
          email: string;
          /**
           * Reason
           * @description Optional reason for the status, if provided
           * @default null
           */
          reason: string | null;
          /**
           * Status
           * @description Result of verification (e.g., 'valid', 'invalid', 'unknown')
           */
          status: string;
      }[];
      /**
       * Status
       * @description Current status of the batch job
       */
      status: string;
      /**
       * Total
       * @description Total number of emails submitted in the batch
       */
      total: number;
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
 * Type of MAILS_SO's MAILS_SO_VALIDATE_BULK_EMAILS tool input.
 */
type MAILS_SO_VALIDATE_BULK_EMAILS_INPUT = {
  /**
   * Emails
   * @description List of 1–1000 email addresses to validate
   */
  emails?: unknown[];
};

/**
 * Type of MAILS_SO's MAILS_SO_VALIDATE_BULK_EMAILS tool output.
 */
type MAILS_SO_VALIDATE_BULK_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error details if the request failed
       * @default null
       */
      error: {
          [key: string]: string;
      } | null;
      /**
       * Results
       * @description Per-email validation details
       */
      results: {
          /**
           * Email
           * @description The email address that was validated
           */
          email: string;
          /**
           * Reason
           * @description Reason explaining the validation result
           */
          reason: string;
          /**
           * Result
           * @description Validation outcome for this address
           * @enum {string}
           */
          result: "valid" | "invalid" | "catch-all";
          /**
           * Safe To Send
           * @description Whether it is safe to send mail to this address
           */
          safe_to_send: boolean;
      }[];
      /**
       * Status
       * @description Overall request status (e.g., 'success')
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
 * Type of MAILS_SO's MAILS_SO_VALIDATE_SINGLE_EMAIL tool input.
 */
type MAILS_SO_VALIDATE_SINGLE_EMAIL_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to validate.
   */
  email?: unknown;
};

/**
 * Type of MAILS_SO's MAILS_SO_VALIDATE_SINGLE_EMAIL tool output.
 */
type MAILS_SO_VALIDATE_SINGLE_EMAIL_OUTPUT = {
  /**
   * ValidateSingleEmailData
   * @description The data object returned when validation succeeds.
   * @default null
   */
  data: {
      /**
       * Domain
       * @description Domain part of the email address after @
       * @default null
       */
      domain: string | null;
      /**
       * Email
       * @description The email address that was validated
       */
      email: string;
      /**
       * Id
       * @description Unique identifier for this validation request
       */
      id: string;
      /**
       * Is Free
       * @description Whether the email is from a free email provider
       */
      is_free: boolean;
      /**
       * Isv Domain
       * @description Whether the domain is valid
       */
      isv_domain: boolean;
      /**
       * Isv Format
       * @description Whether the email format is valid
       */
      isv_format: boolean;
      /**
       * Isv Mx
       * @description Whether the MX record is valid
       */
      isv_mx: boolean;
      /**
       * Isv Noblock
       * @description Whether the email is not in block lists
       */
      isv_noblock: boolean;
      /**
       * Isv Nocatchall
       * @description Whether the domain doesn't have a catch-all policy
       */
      isv_nocatchall: boolean;
      /**
       * Isv Nogeneric
       * @description Whether the email is not a generic (role-based) address
       */
      isv_nogeneric: boolean;
      /**
       * Mx Record
       * @description MX record for the email domain
       * @default null
       */
      mx_record: string | null;
      /**
       * Reason
       * @description Reason for the validation result
       * @default null
       */
      reason: string | null;
      /**
       * Result
       * @description Overall validation result
       * @enum {string}
       */
      result: "valid" | "invalid" | "risky";
      /**
       * Score
       * @description Validation score (0-100)
       */
      score: number;
      /**
       * Username
       * @description Local part of the email address before @
       * @default null
       */
      username: string | null;
  } | null;
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
 * Type map of all available tool input types for toolkit "MAILS_SO".
 */
export type MAILS_SO_TOOL_INPUTS = {
  RETRIEVE_BATCH_RESULTS: MAILS_SO_RETRIEVE_BATCH_RESULTS_INPUT
  VALIDATE_BULK_EMAILS: MAILS_SO_VALIDATE_BULK_EMAILS_INPUT
  VALIDATE_SINGLE_EMAIL: MAILS_SO_VALIDATE_SINGLE_EMAIL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MAILS_SO".
 */
export type MAILS_SO_TOOL_OUTPUTS = {
  RETRIEVE_BATCH_RESULTS: MAILS_SO_RETRIEVE_BATCH_RESULTS_OUTPUT
  VALIDATE_BULK_EMAILS: MAILS_SO_VALIDATE_BULK_EMAILS_OUTPUT
  VALIDATE_SINGLE_EMAIL: MAILS_SO_VALIDATE_SINGLE_EMAIL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MAILS_SO toolkit.
 */
export const MAILS_SO = {
  slug: "mails_so",
  tools: {
    /**
     * Tool to retrieve results of a bulk validation job. use after submitting a batch and you have its id.
     */
    RETRIEVE_BATCH_RESULTS: "MAILS_SO_RETRIEVE_BATCH_RESULTS",
    /**
     * Tool to validate multiple email addresses in bulk. use when you need to confirm deliverability of a list of emails at once.
     */
    VALIDATE_BULK_EMAILS: "MAILS_SO_VALIDATE_BULK_EMAILS",
    /**
     * Tool to validate a single email address. use when you need to check deliverability and quality details before sending an email.
     */
    VALIDATE_SINGLE_EMAIL: "MAILS_SO_VALIDATE_SINGLE_EMAIL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MAILS_SO".
 */
export type MAILS_SO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MAILS_SO".
 */
export type MAILS_SO_TRIGGER_EVENTS = {}
