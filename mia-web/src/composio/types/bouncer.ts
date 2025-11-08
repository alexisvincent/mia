// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BOUNCER's BOUNCER_CHECK_TOXICITY_LIST_JOB_STATUS tool input.
 */
type BOUNCER_CHECK_TOXICITY_LIST_JOB_STATUS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the toxicity list job to query
   */
  id?: string;
};

/**
 * Type of BOUNCER's BOUNCER_CHECK_TOXICITY_LIST_JOB_STATUS tool output.
 */
type BOUNCER_CHECK_TOXICITY_LIST_JOB_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the job was created
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the toxicity list job
       */
      id: string;
      /**
       * Status
       * @description Current status of the job; poll until 'completed' or 'failed'
       * @enum {string}
       */
      status: "processing" | "completed" | "failed";
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
 * Type of BOUNCER's BOUNCER_CREATE_BATCH_REQUEST tool input.
 */
type BOUNCER_CREATE_BATCH_REQUEST_INPUT = {
  /**
   * Callback
   * @description Optional URL to receive a callback when processing completes
   * @default null
   */
  callback: string | null;
  /**
   * Items
   * @description List of email objects to verify in the batch
   */
  items?: {
      /**
       * Email
       * @description Email address to verify
       */
      email: string;
      /**
       * Name
       * @description Optional name associated with the email address
       * @default null
       */
      name: string | null;
  }[];
};

/**
 * Type of BOUNCER's BOUNCER_CREATE_BATCH_REQUEST tool output.
 */
type BOUNCER_CREATE_BATCH_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Batch Id
       * @description Unique identifier for the created batch
       */
      batchId: string;
      /**
       * Created
       * @description Timestamp when the batch was created (ISO8601)
       */
      created: string;
      /**
       * Duplicates
       * @description Number of duplicate email addresses detected
       */
      duplicates: number;
      /**
       * Quantity
       * @description Number of email addresses in the batch
       */
      quantity: number;
      /**
       * Status
       * @description Current status of the batch (e.g., 'queued')
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
 * Type of BOUNCER's BOUNCER_CREATE_TOXICITY_LIST_JOB tool input.
 */
type BOUNCER_CREATE_TOXICITY_LIST_JOB_INPUT = {
  /**
   * Emails
   * @description List of email addresses to analyze for toxicity
   */
  emails?: unknown[];
};

/**
 * Type of BOUNCER's BOUNCER_CREATE_TOXICITY_LIST_JOB tool output.
 */
type BOUNCER_CREATE_TOXICITY_LIST_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the job was created, in ISO 8601 format
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier for the created job
       */
      id: string;
      /**
       * Status
       * @description Current processing status of the job
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
 * Type of BOUNCER's BOUNCER_DELETE_BATCH_REQUEST tool input.
 */
type BOUNCER_DELETE_BATCH_REQUEST_INPUT = {
  /**
   * Batch Id
   * @description The unique identifier of the batch to delete.
   */
  batch_id?: string;
};

/**
 * Type of BOUNCER's BOUNCER_DELETE_BATCH_REQUEST tool output.
 */
type BOUNCER_DELETE_BATCH_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of BOUNCER's BOUNCER_DELETE_TOXICITY_LIST_JOB tool input.
 */
type BOUNCER_DELETE_TOXICITY_LIST_JOB_INPUT = {
  /**
   * Id
   * @description The unique identifier of the toxicity list job to delete
   */
  id?: string;
};

/**
 * Type of BOUNCER's BOUNCER_DELETE_TOXICITY_LIST_JOB tool output.
 */
type BOUNCER_DELETE_TOXICITY_LIST_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of BOUNCER's BOUNCER_FINISH_BATCH tool input.
 */
type BOUNCER_FINISH_BATCH_INPUT = {
  /**
   * Batch Id
   * @description Unique identifier of the batch to finish
   */
  batch_id?: string;
};

/**
 * Type of BOUNCER's BOUNCER_FINISH_BATCH tool output.
 */
type BOUNCER_FINISH_BATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of BOUNCER's BOUNCER_GET_BATCH_RESULTS tool input.
 */
type BOUNCER_GET_BATCH_RESULTS_INPUT = {
  /**
   * Batch Id
   * @description Unique identifier of the batch to retrieve results for.
   */
  batch_id?: string;
  /**
   * Download
   * @description Filter which email statuses to include in results; one of: 'all', 'deliverable', 'risky', 'undeliverable', 'unknown'.
   * @default null
   * @enum {string|null}
   */
  download: "all" | "deliverable" | "risky" | "undeliverable" | "unknown" | null;
};

/**
 * Type of BOUNCER's BOUNCER_GET_BATCH_RESULTS tool output.
 */
type BOUNCER_GET_BATCH_RESULTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of email verification results returned from the batch.
       */
      results: {
          /** Account */
          account: {
              /**
               * Disabled
               * @description Indicates if the account is disabled.
               * @enum {string}
               */
              disabled: "yes" | "no";
              /**
               * Full Mailbox
               * @description Indicates if the mailbox is full.
               * @enum {string}
               */
              fullMailbox: "yes" | "no";
              /**
               * Role
               * @description Indicates if the email is role-based.
               * @enum {string}
               */
              role: "yes" | "no";
          };
          /** Dns */
          dns: {
              /**
               * Record
               * @description DNS record value.
               */
              record: string;
              /**
               * Type
               * @description Type of DNS record (e.g., MX).
               */
              type: string;
          };
          /** Domain */
          domain: {
              /**
               * Accept All
               * @description Indicates if the domain accepts all emails.
               * @enum {string}
               */
              acceptAll: "yes" | "no";
              /**
               * Disposable
               * @description Indicates if the domain is disposable.
               * @enum {string}
               */
              disposable: "yes" | "no";
              /**
               * Free
               * @description Indicates if the domain is free.
               * @enum {string}
               */
              free: "yes" | "no";
              /**
               * Name
               * @description The domain name.
               */
              name: string;
          };
          /**
           * Email
           * @description The verified email address.
           */
          email: string;
          /**
           * Provider
           * @description Email service provider.
           */
          provider: string;
          /**
           * Reason
           * @description Reason for this status.
           */
          reason: string;
          /**
           * Score
           * @description Quality score of the email address (0–100).
           */
          score: number;
          /**
           * Status
           * @description Verification status of the email.
           * @enum {string}
           */
          status: "deliverable" | "risky" | "undeliverable" | "unknown";
          /**
           * Toxic
           * @description Indicates if the email is considered toxic.
           * @enum {string}
           */
          toxic: "yes" | "no" | "unknown";
          /**
           * Toxicity
           * @description Toxicity score (0–100).
           */
          toxicity: number;
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
 * Type of BOUNCER's BOUNCER_VERIFY_DOMAIN tool input.
 */
type BOUNCER_VERIFY_DOMAIN_INPUT = {
  /**
   * Domain
   * @description Domain name to verify (e.g., 'usebouncer.com').
   */
  domain?: string;
};

/**
 * Type of BOUNCER's BOUNCER_VERIFY_DOMAIN tool output.
 */
type BOUNCER_VERIFY_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Dns
       * @description DNS lookup details.
       */
      dns: {
          /**
           * Record
           * @description DNS record value.
           */
          record: string;
          /**
           * Type
           * @description Type of DNS record (e.g., 'MX').
           */
          type: string;
      };
      /**
       * Domain
       * @description Domain detail information.
       */
      domain: {
          /**
           * Accept All
           * @description Whether the domain accepts all emails (catch-all).
           * @enum {string}
           */
          acceptAll: "yes" | "no";
          /**
           * Disposable
           * @description Whether the domain is disposable.
           * @enum {string}
           */
          disposable: "yes" | "no";
          /**
           * Free
           * @description Whether the domain is a free email provider.
           * @enum {string}
           */
          free: "yes" | "no";
          /**
           * Name
           * @description The domain name.
           */
          name: string;
      };
      /**
       * Provider
       * @description Email service provider associated with the domain.
       */
      provider: string;
      /**
       * Toxic
       * @description Indicates if the domain is considered toxic.
       */
      toxic: string;
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
 * Type of BOUNCER's BOUNCER_VERIFY_EMAIL tool input.
 */
type BOUNCER_VERIFY_EMAIL_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address to verify in real-time.
   */
  email?: unknown;
  /**
   * Timeout
   * @description Timeout for verification in seconds (default: 10).
   * @default 10
   */
  timeout: number | null;
};

/**
 * Type of BOUNCER's BOUNCER_VERIFY_EMAIL tool output.
 */
type BOUNCER_VERIFY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description Details about the email account status.
       */
      account: {
          /**
           * Disabled
           * @description Indicates if the account is disabled.
           * @enum {string}
           */
          disabled: "yes" | "no";
          /**
           * Full Mailbox
           * @description Indicates if the mailbox is full.
           * @enum {string}
           */
          fullMailbox: "yes" | "no";
          /**
           * Role
           * @description Indicates if the email is role-based.
           * @enum {string}
           */
          role: "yes" | "no";
      };
      /**
       * Dns
       * @description DNS verification details.
       */
      dns: {
          /**
           * Record
           * @description DNS record value.
           */
          record: string;
          /**
           * Type
           * @description Type of DNS record (e.g., MX).
           */
          type: string;
      };
      /**
       * Domain
       * @description Details about the email's domain.
       */
      domain: {
          /**
           * Accept All
           * @description Indicates if the domain accepts all emails (catch-all).
           * @enum {string}
           */
          acceptAll: "yes" | "no";
          /**
           * Disposable
           * @description Indicates if the domain is disposable.
           * @enum {string}
           */
          disposable: "yes" | "no";
          /**
           * Free
           * @description Indicates if the domain is a free email provider.
           * @enum {string}
           */
          free: "yes" | "no";
          /**
           * Name
           * @description The domain name of the email address.
           */
          name: string;
      };
      /**
       * Email
       * @description The verified email address.
       */
      email: string;
      /**
       * Provider
       * @description Email service provider for the address.
       */
      provider: string;
      /**
       * Reason
       * @description Reason for the status.
       */
      reason: string;
      /**
       * Score
       * @description Quality score of the email address (0–100).
       */
      score: number;
      /**
       * Status
       * @description Verification status of the email.
       * @enum {string}
       */
      status: "deliverable" | "risky" | "undeliverable" | "unknown";
      /**
       * Toxic
       * @description Indicates if the email is considered toxic.
       * @enum {string}
       */
      toxic: "yes" | "no" | "unknown";
      /**
       * Toxicity
       * @description Toxicity score (0–100).
       */
      toxicity: number;
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
 * Type map of all available tool input types for toolkit "BOUNCER".
 */
export type BOUNCER_TOOL_INPUTS = {
  CHECK_TOXICITY_LIST_JOB_STATUS: BOUNCER_CHECK_TOXICITY_LIST_JOB_STATUS_INPUT
  CREATE_BATCH_REQUEST: BOUNCER_CREATE_BATCH_REQUEST_INPUT
  CREATE_TOXICITY_LIST_JOB: BOUNCER_CREATE_TOXICITY_LIST_JOB_INPUT
  DELETE_BATCH_REQUEST: BOUNCER_DELETE_BATCH_REQUEST_INPUT
  DELETE_TOXICITY_LIST_JOB: BOUNCER_DELETE_TOXICITY_LIST_JOB_INPUT
  FINISH_BATCH: BOUNCER_FINISH_BATCH_INPUT
  GET_BATCH_RESULTS: BOUNCER_GET_BATCH_RESULTS_INPUT
  VERIFY_DOMAIN: BOUNCER_VERIFY_DOMAIN_INPUT
  VERIFY_EMAIL: BOUNCER_VERIFY_EMAIL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BOUNCER".
 */
export type BOUNCER_TOOL_OUTPUTS = {
  CHECK_TOXICITY_LIST_JOB_STATUS: BOUNCER_CHECK_TOXICITY_LIST_JOB_STATUS_OUTPUT
  CREATE_BATCH_REQUEST: BOUNCER_CREATE_BATCH_REQUEST_OUTPUT
  CREATE_TOXICITY_LIST_JOB: BOUNCER_CREATE_TOXICITY_LIST_JOB_OUTPUT
  DELETE_BATCH_REQUEST: BOUNCER_DELETE_BATCH_REQUEST_OUTPUT
  DELETE_TOXICITY_LIST_JOB: BOUNCER_DELETE_TOXICITY_LIST_JOB_OUTPUT
  FINISH_BATCH: BOUNCER_FINISH_BATCH_OUTPUT
  GET_BATCH_RESULTS: BOUNCER_GET_BATCH_RESULTS_OUTPUT
  VERIFY_DOMAIN: BOUNCER_VERIFY_DOMAIN_OUTPUT
  VERIFY_EMAIL: BOUNCER_VERIFY_EMAIL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BOUNCER toolkit.
 */
export const BOUNCER = {
  slug: "bouncer",
  tools: {
    /**
     * Tool to check the status of a specific toxicity list job. use after creating a toxicity list job to poll its status until completion.
     */
    CHECK_TOXICITY_LIST_JOB_STATUS: "BOUNCER_CHECK_TOXICITY_LIST_JOB_STATUS",
    /**
     * Tool to initiate a batch email verification request. use when you have multiple emails to verify in one api call. returns a batch id and initial status.
     */
    CREATE_BATCH_REQUEST: "BOUNCER_CREATE_BATCH_REQUEST",
    /**
     * Tool to create a toxicity analysis job for a list of email addresses. use when you need to batch-process toxicity checks for multiple emails at once.
     */
    CREATE_TOXICITY_LIST_JOB: "BOUNCER_CREATE_TOXICITY_LIST_JOB",
    /**
     * Tool to delete a batch verification request. use when you need to remove all associated emails and results for a specific batch after confirming that the batch data is no longer required.
     */
    DELETE_BATCH_REQUEST: "BOUNCER_DELETE_BATCH_REQUEST",
    /**
     * Tool to delete a specific toxicity list job. use when you need to remove a completed or unwanted toxicity analysis job after confirming its id.
     */
    DELETE_TOXICITY_LIST_JOB: "BOUNCER_DELETE_TOXICITY_LIST_JOB",
    /**
     * Tool to mark a batch verification process as finished. use after batch processing completes to stop further verifications and reclaim unused credits.
     */
    FINISH_BATCH: "BOUNCER_FINISH_BATCH",
    /**
     * Tool to retrieve the results of a batch verification process. use after submitting a batch to fetch all processed email verification outcomes.
     */
    GET_BATCH_RESULTS: "BOUNCER_GET_BATCH_RESULTS",
    /**
     * Tool to verify the validity and configuration of a domain. use when you need to confirm the domain's mx records and catch-all behavior.
     */
    VERIFY_DOMAIN: "BOUNCER_VERIFY_DOMAIN",
    /**
     * Tool to verify a single email address in real-time. use when validating email entry form inputs instantly.
     */
    VERIFY_EMAIL: "BOUNCER_VERIFY_EMAIL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BOUNCER".
 */
export type BOUNCER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BOUNCER".
 */
export type BOUNCER_TRIGGER_EVENTS = {}
