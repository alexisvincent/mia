// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EMAILABLE's EMAILABLE_GET_ACCOUNT_INFO tool input.
 */
type EMAILABLE_GET_ACCOUNT_INFO_INPUT = object;

/**
 * Type of EMAILABLE's EMAILABLE_GET_ACCOUNT_INFO tool output.
 */
type EMAILABLE_GET_ACCOUNT_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits
       * @description Remaining available credits
       */
      credits: number;
      /**
       * Id
       * @description Unique account identifier
       */
      id: string;
      /**
       * Owner
       * Format: email
       * @description Email address of the account owner
       */
      owner: unknown;
      /**
       * Plan
       * @description Billing plan type
       * @enum {string}
       */
      plan: "payg" | "monthly";
      /**
       * Status
       * @description Current account status
       * @enum {string}
       */
      status: "active" | "inactive";
      /**
       * Timezone
       * @description Timezone setting for the account, in TZ database format
       */
      timezone: string;
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
 * Type of EMAILABLE's EMAILABLE_GET_BATCH_STATUS tool input.
 */
type EMAILABLE_GET_BATCH_STATUS_INPUT = {
  /**
   * Batch Id
   * @description The unique identifier for the batch verification job.
   */
  batch_id?: string;
};

/**
 * Type of EMAILABLE's EMAILABLE_GET_BATCH_STATUS tool output.
 */
type EMAILABLE_GET_BATCH_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description The date and time the batch was created in ISO 8601 format.
       */
      created_at: string;
      /**
       * Id
       * @description Unique batch identifier.
       */
      id: string;
      /**
       * Processed
       * @description Number of records processed so far.
       */
      processed: number;
      /**
       * Records
       * @description Total number of records in the batch.
       */
      records: number;
      /**
       * Status
       * @description The current status of the batch verification job.
       * @enum {string}
       */
      status: "pending" | "processing" | "complete" | "failed";
      /**
       * Updated At
       * Format: date-time
       * @description The date and time the batch was last updated in ISO 8601 format.
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
 * Type of EMAILABLE's EMAILABLE_O_AUTH_AUTHORIZE tool input.
 */
type EMAILABLE_O_AUTH_AUTHORIZE_INPUT = {
  /**
   * Client Id
   * @description The application's unique client identifier
   */
  client_id?: string;
  /**
   * Redirect Uri
   * Format: uri
   * @description Redirection URI to which the authorization code will be sent
   */
  redirect_uri?: unknown;
  /**
   * Response Type
   * @description Must be set to 'code' for authorization code flow
   * @default code
   * @constant
   */
  response_type: "code";
  /**
   * Scope
   * @description Space-delimited OAuth scopes (e.g., 'emails:read emails:write')
   * @default null
   */
  scope: string | null;
  /**
   * State
   * @description Opaque value to maintain state between request and callback
   * @default null
   */
  state: string | null;
};

/**
 * Type of EMAILABLE's EMAILABLE_O_AUTH_AUTHORIZE tool output.
 */
type EMAILABLE_O_AUTH_AUTHORIZE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description The URL to redirect the user to for OAuth authorization
       */
      url: string;
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
 * Type of EMAILABLE's EMAILABLE_VERIFY_BATCH_EMAILS tool input.
 */
type EMAILABLE_VERIFY_BATCH_EMAILS_INPUT = {
  /**
   * Emails
   * @description List of email addresses to verify (1 to 50,000).
   */
  emails?: string[];
};

/**
 * Type of EMAILABLE's EMAILABLE_VERIFY_BATCH_EMAILS tool output.
 */
type EMAILABLE_VERIFY_BATCH_EMAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Batch Id
       * @description Unique batch identifier.
       */
      batch_id: string;
      /**
       * Completed
       * @description True if batch processing is complete.
       */
      completed: boolean;
      /**
       * Emails
       * @description Detailed verification results for each email.
       */
      emails: {
          /**
           * Accept All
           * @description True if domain accepts all addresses (catch-all).
           */
          accept_all: boolean;
          /**
           * Did You Mean
           * @description Suggested correction if the address appears mistyped.
           * @default null
           */
          did_you_mean: string | null;
          /**
           * Disposable
           * @description True if from a disposable/temporary email provider.
           */
          disposable: boolean;
          /**
           * Email
           * Format: email
           * @description The email address verified.
           */
          email: string;
          /**
           * Free
           * @description True if from a free email provider (e.g., Gmail).
           */
          free: boolean;
          /**
           * Result
           * @description Verification result status, e.g., 'deliverable', 'undeliverable', 'risky'.
           */
          result: string;
          /**
           * Role
           * @description True if email is role-based (e.g., postmaster@).
           */
          role: boolean;
          /**
           * Score
           * @description Trust score between 0 (low) and 1 (high).
           */
          score: number;
      }[];
      /**
       * Errors
       * @description List of any errors encountered during batch processing.
       */
      errors: {
          [key: string]: unknown;
      }[];
      /**
       * Processed
       * @description Number of emails processed so far.
       */
      processed: number;
      /**
       * Status
       * @description Current processing status, e.g., 'queued', 'completed'.
       */
      status: string;
      /**
       * Total
       * @description Total number of emails submitted.
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
 * Type of EMAILABLE's EMAILABLE_VERIFY_EMAIL tool input.
 */
type EMAILABLE_VERIFY_EMAIL_INPUT = {
  /**
   * Email
   * @description The email address to verify
   */
  email?: string;
};

/**
 * Type of EMAILABLE's EMAILABLE_VERIFY_EMAIL tool output.
 */
type EMAILABLE_VERIFY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Catch All
       * @description Whether the domain is catch-all (catches all mail).
       * @default null
       */
      catch_all: boolean | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the result was generated.
       */
      created_at: string;
      /**
       * Did You Mean
       * @description Suggested correction if the input may contain a typo.
       * @default null
       */
      did_you_mean: string | null;
      /**
       * Disposable
       * @description Whether the email is from a disposable provider.
       */
      disposable: boolean;
      /**
       * Domain
       * @description The domain of the email address.
       * @default null
       */
      domain: string | null;
      /**
       * Email
       * @description The normalized email address checked.
       */
      email: string;
      /**
       * Format Valid
       * @description Whether the email is syntactically valid.
       */
      format_valid: boolean;
      /**
       * Free
       * @description Whether the email is from a free provider.
       */
      free: boolean;
      /**
       * Mx Found
       * @description Whether MX records were found for the domain.
       */
      mx_found: boolean;
      /**
       * Reason
       * @description Reason for the result, e.g., 'accepted_email', 'rejected_email' or explanation.
       */
      reason: string;
      /**
       * Role
       * @description Whether the email is a role address (info@, support@, etc.).
       */
      role: boolean;
      /**
       * Score
       * @description Deliverability score (0.01 - 0.99).
       */
      score: number;
      /**
       * Smtp Check
       * @description Whether the email could be verified via SMTP.
       */
      smtp_check: boolean;
      /**
       * Smtp Response
       * @description SMTP server's full response, if available.
       * @default null
       */
      smtp_response: string | null;
      /**
       * State
       * @description One of 'deliverable', 'undeliverable', 'risky', 'unknown'.
       * @enum {string}
       */
      state: "deliverable" | "undeliverable" | "risky" | "unknown";
      /**
       * User
       * @description The local-part of the email address.
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
 * Type map of all available tool input types for toolkit "EMAILABLE".
 */
export type EMAILABLE_TOOL_INPUTS = {
  GET_ACCOUNT_INFO: EMAILABLE_GET_ACCOUNT_INFO_INPUT
  GET_BATCH_STATUS: EMAILABLE_GET_BATCH_STATUS_INPUT
  O_AUTH_AUTHORIZE: EMAILABLE_O_AUTH_AUTHORIZE_INPUT
  VERIFY_BATCH_EMAILS: EMAILABLE_VERIFY_BATCH_EMAILS_INPUT
  VERIFY_EMAIL: EMAILABLE_VERIFY_EMAIL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EMAILABLE".
 */
export type EMAILABLE_TOOL_OUTPUTS = {
  GET_ACCOUNT_INFO: EMAILABLE_GET_ACCOUNT_INFO_OUTPUT
  GET_BATCH_STATUS: EMAILABLE_GET_BATCH_STATUS_OUTPUT
  O_AUTH_AUTHORIZE: EMAILABLE_O_AUTH_AUTHORIZE_OUTPUT
  VERIFY_BATCH_EMAILS: EMAILABLE_VERIFY_BATCH_EMAILS_OUTPUT
  VERIFY_EMAIL: EMAILABLE_VERIFY_EMAIL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EMAILABLE toolkit.
 */
export const EMAILABLE = {
  slug: "emailable",
  tools: {
    /**
     * Tool to retrieve account information including owner email and available credits. use when you need to confirm account status before sending email verifications.
     */
    GET_ACCOUNT_INFO: "EMAILABLE_GET_ACCOUNT_INFO",
    /**
     * Tool to get the status and results of a batch verification job. use after submitting a batch to check its progress.
     */
    GET_BATCH_STATUS: "EMAILABLE_GET_BATCH_STATUS",
    /**
     * Tool to initiate oauth 2.0 authorization code flow. use when you need to obtain an authorization code from emailable. returns the url to redirect the user to.
     */
    O_AUTH_AUTHORIZE: "EMAILABLE_O_AUTH_AUTHORIZE",
    /**
     * Tool to verify a batch of up to 50,000 email addresses. use when you need bulk deliverability checks for many emails at once.
     */
    VERIFY_BATCH_EMAILS: "EMAILABLE_VERIFY_BATCH_EMAILS",
    /**
     * Tool to verify a single email address and return detailed results. use when you need to check email deliverability and risk.
     */
    VERIFY_EMAIL: "EMAILABLE_VERIFY_EMAIL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EMAILABLE".
 */
export type EMAILABLE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EMAILABLE".
 */
export type EMAILABLE_TRIGGER_EVENTS = {}
