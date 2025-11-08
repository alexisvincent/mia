// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of NEVERBOUNCE's NEVERBOUNCE_ACCOUNT_INFO tool input.
 */
type NEVERBOUNCE_ACCOUNT_INFO_INPUT = object;

/**
 * Type of NEVERBOUNCE's NEVERBOUNCE_ACCOUNT_INFO tool output.
 */
type NEVERBOUNCE_ACCOUNT_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits Info
       * @description Details about free and paid credits
       */
      credits_info: {
          /**
           * Free Credits
           * @description Number of free credits available
           */
          free_credits: number;
          /**
           * Paid Credits
           * @description Number of paid credits available
           */
          paid_credits: number;
      };
      /**
       * Execution Time
       * @description Time taken to execute the request in milliseconds
       */
      execution_time: number;
      /**
       * Jobs
       * @description Details about job counts
       */
      jobs: {
          /**
           * Completed
           * @description Total number of completed jobs
           */
          completed: number;
          /**
           * Processing
           * @description Number of jobs currently processing
           */
          processing: number;
      };
      /**
       * Status
       * @description Status of the API request
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
 * Type of NEVERBOUNCE's NEVERBOUNCE_JOBS_CREATE tool input.
 */
type NEVERBOUNCE_JOBS_CREATE_INPUT = {
  /**
   * Auto Parse
   * @description Automatically parse the job after creation (default false).
   * @default false
   */
  auto_parse: boolean;
  /**
   * Auto Start
   * @description Automatically start verification after parsing (default false).
   * @default false
   */
  auto_start: boolean;
  /**
   * Callback Headers
   * @description Custom headers for callback POST requests.
   * @default null
   */
  callback_headers: {
      [key: string]: string;
  } | null;
  /**
   * Callback Url
   * Format: uri
   * @description HTTP/HTTPS URL to receive lifecycle callbacks.
   * @default null
   */
  callback_url: unknown;
  /**
   * Filename
   * @description Display name for the job in the dashboard.
   * @default null
   */
  filename: string | null;
  /**
   * Input
   * @description When 'remote_url', a URL to CSV or newline-delimited file. When 'supplied', an array of rows: lists or dicts of primitives.
   */
  input?: string | null;
  /**
   * Input Location
   * @description 'remote_url' to reference a hosted file; 'supplied' to send inline data.
   * @enum {string}
   */
  input_location?: "remote_url" | "supplied";
  /**
   * RequestMetaData
   * @description Settings for manual review behavior.
   * @default null
   */
  request_meta_data: {
      /**
       * Allow Manual Review
       * @description If true, the job may enter the manual review queue on high unknown rates, delaying completion up to 1 business day.
       * @default false
       */
      allow_manual_review: boolean;
  } | null;
  /**
   * Run Sample
   * @description Run a free sample analysis instead of the full job (default false).
   * @default false
   */
  run_sample: boolean;
};

/**
 * Type of NEVERBOUNCE's NEVERBOUNCE_JOBS_CREATE tool output.
 */
type NEVERBOUNCE_JOBS_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Execution Time
       * @description Server processing time in milliseconds.
       */
      execution_time: number;
      /**
       * Job Id
       * @description Identifier of the created job.
       */
      job_id: number;
      /**
       * Status
       * @description Result status, e.g., 'success'.
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
 * Type of NEVERBOUNCE's NEVERBOUNCE_JOBS_DELETE tool input.
 */
type NEVERBOUNCE_JOBS_DELETE_INPUT = {
  /**
   * Job Id
   * @description Identifier of the job to permanently delete.
   */
  job_id?: number;
};

/**
 * Type of NEVERBOUNCE's NEVERBOUNCE_JOBS_DELETE tool output.
 */
type NEVERBOUNCE_JOBS_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Execution Time
       * @description Time in milliseconds taken to process the request.
       * @default null
       */
      execution_time: number | null;
      /**
       * Message
       * @description Additional information or error message if the operation failed.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Outcome of the delete operation.
       * @enum {string}
       */
      status: "success" | "general_failure" | "auth_failure" | "temp_unavail" | "throttle_triggered" | "bad_referrer";
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
 * Type of NEVERBOUNCE's NEVERBOUNCE_JOBS_DOWNLOAD_GET tool input.
 */
type NEVERBOUNCE_JOBS_DOWNLOAD_GET_INPUT = {
  /**
   * Addr
   * @description Append addr column
   * @default null
   * @enum {integer|null}
   */
  addr: 0 | 1 | null;
  /**
   * Alias
   * @description Append alias column
   * @default null
   * @enum {integer|null}
   */
  alias: 0 | 1 | null;
  /**
   * Bad Syntax
   * @description Append bad_syntax column
   * @default null
   * @enum {integer|null}
   */
  bad_syntax: 0 | 1 | null;
  /**
   * Binary Operators Type
   * @description Representation for binary flags. Default is 1/0. Options: BIN_1_0, BIN_Y_N, BIN_y_n, BIN_yes_no, BIN_Yes_No, BIN_true_false
   * @default null
   * @enum {string|null}
   */
  binary_operators_type: "BIN_1_0" | "BIN_Y_N" | "BIN_y_n" | "BIN_yes_no" | "BIN_Yes_No" | "BIN_true_false" | null;
  /**
   * Catchalls
   * @description Include catchall emails
   * @default null
   * @enum {integer|null}
   */
  catchalls: 0 | 1 | null;
  /**
   * Disposables
   * @description Include disposable emails
   * @default null
   * @enum {integer|null}
   */
  disposables: 0 | 1 | null;
  /**
   * Domain
   * @description Append domain column
   * @default null
   * @enum {integer|null}
   */
  domain: 0 | 1 | null;
  /**
   * Email Status
   * @description Append email_status column
   * @default null
   * @enum {integer|null}
   */
  email_status: 0 | 1 | null;
  /**
   * Email Status Int
   * @description Append email_status_int column
   * @default null
   * @enum {integer|null}
   */
  email_status_int: 0 | 1 | null;
  /**
   * Fqdn
   * @description Append fqdn column
   * @default null
   * @enum {integer|null}
   */
  fqdn: 0 | 1 | null;
  /**
   * Free Email Host
   * @description Append free_email_host column
   * @default null
   * @enum {integer|null}
   */
  free_email_host: 0 | 1 | null;
  /**
   * Has Dns Info
   * @description Append has_dns_info column
   * @default null
   * @enum {integer|null}
   */
  has_dns_info: 0 | 1 | null;
  /**
   * Has Mail Server
   * @description Append has_mail_server column
   * @default null
   * @enum {integer|null}
   */
  has_mail_server: 0 | 1 | null;
  /**
   * Host
   * @description Append host column
   * @default null
   * @enum {integer|null}
   */
  host: 0 | 1 | null;
  /**
   * Include Duplicates
   * @description Include duplicate entries
   * @default null
   * @enum {integer|null}
   */
  include_duplicates: 0 | 1 | null;
  /**
   * Invalids
   * @description Include invalid emails
   * @default null
   * @enum {integer|null}
   */
  invalids: 0 | 1 | null;
  /**
   * Job Id
   * @description ID of the finished job to download results for
   */
  job_id?: number;
  /**
   * Line Feed Type
   * @description CSV linefeed style. Default
   *
  . Options: LINEFEED_0A0D (
   *
  ), LINEFEED_0D0A (
   *     ), LINEFEED_0A (
   *     ), LINEFEED_0D (
  )
   * @default null
   * @enum {string|null}
   */
  line_feed_type: "LINEFEED_0A0D" | "LINEFEED_0D0A" | "LINEFEED_0A" | "LINEFEED_0D" | null;
  /**
   * Mail Server Reachable
   * @description Append mail_server_reachable column
   * @default null
   * @enum {integer|null}
   */
  mail_server_reachable: 0 | 1 | null;
  /**
   * Network
   * @description Append network column
   * @default null
   * @enum {integer|null}
   */
  network: 0 | 1 | null;
  /**
   * Only Bad Syntax
   * @description Return only bad-syntax records
   * @default null
   * @enum {integer|null}
   */
  only_bad_syntax: 0 | 1 | null;
  /**
   * Only Duplicates
   * @description Return only duplicate entries
   * @default null
   * @enum {integer|null}
   */
  only_duplicates: 0 | 1 | null;
  /**
   * Role Account
   * @description Append role_account column
   * @default null
   * @enum {integer|null}
   */
  role_account: 0 | 1 | null;
  /**
   * Subdomain
   * @description Append subdomain column
   * @default null
   * @enum {integer|null}
   */
  subdomain: 0 | 1 | null;
  /**
   * Tld
   * @description Append tld column
   * @default null
   * @enum {integer|null}
   */
  tld: 0 | 1 | null;
  /**
   * Unknowns
   * @description Include unknown emails
   * @default null
   * @enum {integer|null}
   */
  unknowns: 0 | 1 | null;
  /**
   * Valids
   * @description Include valid emails
   * @default null
   * @enum {integer|null}
   */
  valids: 0 | 1 | null;
};

/**
 * Type of NEVERBOUNCE's NEVERBOUNCE_JOBS_DOWNLOAD_GET tool output.
 */
type NEVERBOUNCE_JOBS_DOWNLOAD_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description CSV file byte stream
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
 * Type of NEVERBOUNCE's NEVERBOUNCE_JOBS_RESULTS tool input.
 */
type NEVERBOUNCE_JOBS_RESULTS_INPUT = {
  /**
   * Items Per Page
   * @description Number of items per page (1–1000). Defaults to 10.
   * @default 10
   */
  items_per_page: number;
  /**
   * Job Id
   * @description The ID of the completed job whose results you want to retrieve.
   */
  job_id?: number;
  /**
   * Page
   * @description Page number to fetch (must be ≥1). Defaults to 1.
   * @default 1
   */
  page: number;
};

/**
 * Type of NEVERBOUNCE's NEVERBOUNCE_JOBS_RESULTS tool output.
 */
type NEVERBOUNCE_JOBS_RESULTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Query
       * @description Echoes back your query parameters and counts, e.g. {'job_id':12345,'page':1,'items_per_page':10}.
       */
      query: {
          [key: string]: unknown;
      };
      /**
       * Results
       * @description List of result rows for the requested page.
       */
      results: {
          /**
           * Data
           * @description Original record data as submitted (keys = CSV headers or API payload fields).
           */
          data: {
              [key: string]: unknown;
          };
          /**
           * Execution Time
           * @description Time in milliseconds spent verifying this record.
           */
          execution_time: number;
          /**
           * Verification
           * @description NeverBounce single/check verification output for this record.
           */
          verification: {
              [key: string]: unknown;
          };
      }[];
      /**
       * Status
       * @description API response status (e.g., 'success').
       */
      status: string;
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      total_pages: number;
      /**
       * Total Results
       * @description Total number of results across all pages.
       */
      total_results: number;
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
 * Type of NEVERBOUNCE's NEVERBOUNCE_JOBS_START tool input.
 */
type NEVERBOUNCE_JOBS_START_INPUT = {
  /**
   * Job Id
   * @description The ID of the job to start. Must reference an existing job created with auto_start disabled.
   */
  job_id?: number;
  /**
   * Run Sample
   * @description Run a sample of the job list instead of full processing (default: false).
   * @default false
   */
  run_sample: boolean;
};

/**
 * Type of NEVERBOUNCE's NEVERBOUNCE_JOBS_START tool output.
 */
type NEVERBOUNCE_JOBS_START_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Execution Time
       * @description Time in seconds that the request took to enqueue (defaults to 0).
       */
      execution_time: number;
      /**
       * Queue Id
       * @description Identifier of the queue entry for this job.
       */
      queue_id: string;
      /**
       * Status
       * @description Overall status of the start request (e.g., 'queued', 'started').
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
 * Type of NEVERBOUNCE's NEVERBOUNCE_JOBS_STATUS tool input.
 */
type NEVERBOUNCE_JOBS_STATUS_INPUT = {
  /**
   * Job Id
   * @description The unique identifier of the bulk verification job.
   */
  job_id?: string;
};

/**
 * Type of NEVERBOUNCE's NEVERBOUNCE_JOBS_STATUS tool output.
 */
type NEVERBOUNCE_JOBS_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bad Syntax
       * @description Number of emails with bad syntax detected.
       */
      bad_syntax: number;
      /**
       * Catchall
       * @description Number of catchall emails detected.
       */
      catchall: number;
      /**
       * Created
       * @description Creation datetime of the job in ISO 8601 format.
       */
      created: string;
      /**
       * Disposable
       * @description Number of disposable emails detected.
       */
      disposable: number;
      /**
       * Duplicate
       * @description Number of duplicate emails detected.
       */
      duplicate: number;
      /**
       * Execution Time
       * @description Time taken to process the job in seconds.
       */
      execution_time: number;
      /**
       * Filename
       * @description Original filename uploaded for verification.
       */
      filename: string;
      /**
       * Finished
       * @description Completion datetime of the job in ISO 8601 format, or null if still running.
       * @default null
       */
      finished: string | null;
      /**
       * Invalid
       * @description Number of invalid emails detected.
       */
      invalid: number;
      /**
       * Job Id
       * @description The unique identifier of the job.
       */
      job_id: string;
      /**
       * Job Status
       * @description Processing status of the job.
       * @enum {string}
       */
      job_status: "under_review" | "queued" | "failed" | "complete" | "running" | "parsing" | "waiting" | "waiting_analyzed" | "uploading";
      /**
       * Processed
       * @description Number of emails processed so far.
       */
      processed: number;
      /**
       * Result
       * @description Summary result of the job (e.g., 'complete').
       */
      result: string;
      /**
       * Status
       * @description Overall API call status.
       */
      status: string;
      /**
       * Total
       * @description Total number of emails submitted in the job.
       */
      total: number;
      /**
       * Unknown
       * @description Number of unknown emails detected.
       */
      unknown: number;
      /**
       * Valid
       * @description Number of valid emails detected.
       */
      valid: number;
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
 * Type of NEVERBOUNCE's NEVERBOUNCE_NEVERBOUNCE_ACCOUNT_INFO tool input.
 */
type NEVERBOUNCE_NEVERBOUNCE_ACCOUNT_INFO_INPUT = object;

/**
 * Type of NEVERBOUNCE's NEVERBOUNCE_NEVERBOUNCE_ACCOUNT_INFO tool output.
 */
type NEVERBOUNCE_NEVERBOUNCE_ACCOUNT_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits Info
       * @description Details about credit usage and remaining credits
       */
      credits_info: {
          /**
           * Free Credits Remaining
           * @description Number of free credits remaining
           */
          free_credits_remaining: number;
          /**
           * Free Credits Used
           * @description Number of free credits used
           */
          free_credits_used: number;
          /**
           * Paid Credits Remaining
           * @description Number of paid credits remaining
           */
          paid_credits_remaining: number;
          /**
           * Paid Credits Used
           * @description Number of paid credits used
           */
          paid_credits_used: number;
      };
      /**
       * Execution Time
       * @description Time taken to execute the request in milliseconds
       */
      execution_time: number;
      /**
       * Job Counts
       * @description Details about job counts
       */
      job_counts: {
          /**
           * Completed
           * @description Total number of completed jobs
           */
          completed: number;
          /**
           * Processing
           * @description Number of jobs currently processing
           */
          processing: number;
          /**
           * Queued
           * @description Number of jobs queued
           */
          queued: number;
          /**
           * Under Review
           * @description Number of jobs under review
           */
          under_review: number;
      };
      /**
       * Status
       * @description Status of the API request
       */
      status: string;
      /**
       * Subscription Type
       * @description Type of subscription
       */
      subscription_type: string;
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
 * Type of NEVERBOUNCE's NEVERBOUNCE_NEVERBOUNCE_JOBS_DELETE tool input.
 */
type NEVERBOUNCE_NEVERBOUNCE_JOBS_DELETE_INPUT = {
  /**
   * Job Id
   * @description Identifier of the bulk verification job to permanently delete.
   */
  job_id?: number;
};

/**
 * Type of NEVERBOUNCE's NEVERBOUNCE_NEVERBOUNCE_JOBS_DELETE tool output.
 */
type NEVERBOUNCE_NEVERBOUNCE_JOBS_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Execution Time
       * @description Time in milliseconds taken to process the request.
       * @default null
       */
      execution_time: number | null;
      /**
       * Message
       * @description Additional info or error message if the operation failed.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Outcome of the delete operation.
       * @enum {string}
       */
      status: "success" | "general_failure" | "auth_failure" | "temp_unavail" | "throttle_triggered" | "bad_referrer";
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
 * Type of NEVERBOUNCE's NEVERBOUNCE_NEVERBOUNCE_JOBS_DOWNLOAD_POST tool input.
 */
type NEVERBOUNCE_NEVERBOUNCE_JOBS_DOWNLOAD_POST_INPUT = {
  /**
   * Alias
   * @description Append alias column
   * @default null
   * @enum {integer|null}
   */
  alias: 0 | 1 | null;
  /**
   * Bad Syntax
   * @description Append bad_syntax column
   * @default null
   * @enum {integer|null}
   */
  bad_syntax: 0 | 1 | null;
  /**
   * Binary Operators Type
   * @description Representation for binary flags. Default is 1/0. Options: BIN_1_0, BIN_Y_N, BIN_y_n, BIN_yes_no, BIN_Yes_No, BIN_true_false
   * @default null
   * @enum {string|null}
   */
  binary_operators_type: "BIN_1_0" | "BIN_Y_N" | "BIN_y_n" | "BIN_yes_no" | "BIN_Yes_No" | "BIN_true_false" | null;
  /**
   * Catchalls
   * @description Include catchall emails
   * @default null
   * @enum {integer|null}
   */
  catchalls: 0 | 1 | null;
  /**
   * Disposables
   * @description Include disposable emails
   * @default null
   * @enum {integer|null}
   */
  disposables: 0 | 1 | null;
  /**
   * Domain
   * @description Append domain column
   * @default null
   * @enum {integer|null}
   */
  domain: 0 | 1 | null;
  /**
   * Email Status
   * @description Append email_status column
   * @default null
   * @enum {integer|null}
   */
  email_status: 0 | 1 | null;
  /**
   * Email Status Int
   * @description Append email_status_int column
   * @default null
   * @enum {integer|null}
   */
  email_status_int: 0 | 1 | null;
  /**
   * Fqdn
   * @description Append fqdn column
   * @default null
   * @enum {integer|null}
   */
  fqdn: 0 | 1 | null;
  /**
   * Free Email Host
   * @description Append free_email_host column
   * @default null
   * @enum {integer|null}
   */
  free_email_host: 0 | 1 | null;
  /**
   * Has Dns Info
   * @description Append has_dns_info column
   * @default null
   * @enum {integer|null}
   */
  has_dns_info: 0 | 1 | null;
  /**
   * Has Mail Server
   * @description Append has_mail_server column
   * @default null
   * @enum {integer|null}
   */
  has_mail_server: 0 | 1 | null;
  /**
   * Host
   * @description Append host column
   * @default null
   * @enum {integer|null}
   */
  host: 0 | 1 | null;
  /**
   * Include Duplicates
   * @description Include duplicate entries
   * @default null
   * @enum {integer|null}
   */
  include_duplicates: 0 | 1 | null;
  /**
   * Invalids
   * @description Include invalid emails
   * @default null
   * @enum {integer|null}
   */
  invalids: 0 | 1 | null;
  /**
   * Job Id
   * @description ID of the finished job to download results for
   */
  job_id?: number;
  /**
   * Line Feed Type
   * @description CSV linefeed style. Default is
   *
  . Options: LINEFEED_0A0D (
   *
  ), LINEFEED_0D0A (
   *     ), LINEFEED_0A (
   *     ), LINEFEED_0D (
  )
   * @default null
   * @enum {string|null}
   */
  line_feed_type: "LINEFEED_0A0D" | "LINEFEED_0D0A" | "LINEFEED_0A" | "LINEFEED_0D" | null;
  /**
   * Mail Server Reachable
   * @description Append mail_server_reachable column
   * @default null
   * @enum {integer|null}
   */
  mail_server_reachable: 0 | 1 | null;
  /**
   * Network
   * @description Append network column
   * @default null
   * @enum {integer|null}
   */
  network: 0 | 1 | null;
  /**
   * Only Bad Syntax
   * @description Return only bad-syntax records
   * @default null
   * @enum {integer|null}
   */
  only_bad_syntax: 0 | 1 | null;
  /**
   * Only Duplicates
   * @description Return only duplicate entries
   * @default null
   * @enum {integer|null}
   */
  only_duplicates: 0 | 1 | null;
  /**
   * Role Account
   * @description Append role_account column
   * @default null
   * @enum {integer|null}
   */
  role_account: 0 | 1 | null;
  /**
   * Subdomain
   * @description Append subdomain column
   * @default null
   * @enum {integer|null}
   */
  subdomain: 0 | 1 | null;
  /**
   * Tld
   * @description Append tld column
   * @default null
   * @enum {integer|null}
   */
  tld: 0 | 1 | null;
  /**
   * Unknowns
   * @description Include unknown emails
   * @default null
   * @enum {integer|null}
   */
  unknowns: 0 | 1 | null;
  /**
   * Valids
   * @description Include valid emails
   * @default null
   * @enum {integer|null}
   */
  valids: 0 | 1 | null;
};

/**
 * Type of NEVERBOUNCE's NEVERBOUNCE_NEVERBOUNCE_JOBS_DOWNLOAD_POST tool output.
 */
type NEVERBOUNCE_NEVERBOUNCE_JOBS_DOWNLOAD_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description CSV file as byte stream
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
 * Type of NEVERBOUNCE's NEVERBOUNCE_SINGLE_CHECK tool input.
 */
type NEVERBOUNCE_SINGLE_CHECK_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address to verify
   */
  email?: unknown;
  /**
   * RequestMetaData
   * @description Additional request metadata to control verification behavior
   * @default null
   */
  request_meta_data: {
      /**
       * Leverage Historical Data
       * @description Disable historical-driven results and force real-time verification when false. Set as 0 in form data to disable historical data usage.
       * @default null
       */
      leverage_historical_data: boolean | null;
  } | null;
  /**
   * Timeout
   * @description Timeout in milliseconds for the verification attempt. Network latency not included in timeout calculation.
   * @default null
   */
  timeout: number | null;
};

/**
 * Type of NEVERBOUNCE's NEVERBOUNCE_SINGLE_CHECK tool output.
 */
type NEVERBOUNCE_SINGLE_CHECK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Execution Time
       * @description Time taken to verify in milliseconds
       */
      execution_time: number;
      /**
       * Flags
       * @description Informational flags discovered during verification
       */
      flags?: string[];
      /**
       * Historical Response
       * @description True if the result was based on historical data
       */
      historical_response: boolean;
      /**
       * Result
       * @description Verification result code
       * @enum {string}
       */
      result: "valid" | "invalid" | "disposable" | "catchall" | "unknown";
      /**
       * Suggested Correction
       * @description Suggestion for correcting a common typo in the email address
       * @default null
       */
      suggested_correction: string | null;
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
 * Type of NEVERBOUNCE's NEVERBOUNCE_WIDGET_SEND_EVENT tool input.
 */
type NEVERBOUNCE_WIDGET_SEND_EVENT_INPUT = {
  /**
   * Event
   * @description The widget event to send. Supported values: 'form.load' (when the form appears) or 'form.completion' (when the form is successfully submitted).
   * @enum {string}
   */
  event?: "form.load" | "form.completion";
};

/**
 * Type of NEVERBOUNCE's NEVERBOUNCE_WIDGET_SEND_EVENT tool output.
 */
type NEVERBOUNCE_WIDGET_SEND_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Js
       * @description JavaScript snippet that invokes the NeverBounce widget API to record the event.
       */
      js: string;
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
 * Type map of all available tool input types for toolkit "NEVERBOUNCE".
 */
export type NEVERBOUNCE_TOOL_INPUTS = {
  ACCOUNT_INFO: NEVERBOUNCE_ACCOUNT_INFO_INPUT
  JOBS_CREATE: NEVERBOUNCE_JOBS_CREATE_INPUT
  JOBS_DELETE: NEVERBOUNCE_JOBS_DELETE_INPUT
  JOBS_DOWNLOAD_GET: NEVERBOUNCE_JOBS_DOWNLOAD_GET_INPUT
  JOBS_RESULTS: NEVERBOUNCE_JOBS_RESULTS_INPUT
  JOBS_START: NEVERBOUNCE_JOBS_START_INPUT
  JOBS_STATUS: NEVERBOUNCE_JOBS_STATUS_INPUT
  NEVERBOUNCE_ACCOUNT_INFO: NEVERBOUNCE_NEVERBOUNCE_ACCOUNT_INFO_INPUT
  NEVERBOUNCE_JOBS_DELETE: NEVERBOUNCE_NEVERBOUNCE_JOBS_DELETE_INPUT
  NEVERBOUNCE_JOBS_DOWNLOAD_POST: NEVERBOUNCE_NEVERBOUNCE_JOBS_DOWNLOAD_POST_INPUT
  SINGLE_CHECK: NEVERBOUNCE_SINGLE_CHECK_INPUT
  WIDGET_SEND_EVENT: NEVERBOUNCE_WIDGET_SEND_EVENT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "NEVERBOUNCE".
 */
export type NEVERBOUNCE_TOOL_OUTPUTS = {
  ACCOUNT_INFO: NEVERBOUNCE_ACCOUNT_INFO_OUTPUT
  JOBS_CREATE: NEVERBOUNCE_JOBS_CREATE_OUTPUT
  JOBS_DELETE: NEVERBOUNCE_JOBS_DELETE_OUTPUT
  JOBS_DOWNLOAD_GET: NEVERBOUNCE_JOBS_DOWNLOAD_GET_OUTPUT
  JOBS_RESULTS: NEVERBOUNCE_JOBS_RESULTS_OUTPUT
  JOBS_START: NEVERBOUNCE_JOBS_START_OUTPUT
  JOBS_STATUS: NEVERBOUNCE_JOBS_STATUS_OUTPUT
  NEVERBOUNCE_ACCOUNT_INFO: NEVERBOUNCE_NEVERBOUNCE_ACCOUNT_INFO_OUTPUT
  NEVERBOUNCE_JOBS_DELETE: NEVERBOUNCE_NEVERBOUNCE_JOBS_DELETE_OUTPUT
  NEVERBOUNCE_JOBS_DOWNLOAD_POST: NEVERBOUNCE_NEVERBOUNCE_JOBS_DOWNLOAD_POST_OUTPUT
  SINGLE_CHECK: NEVERBOUNCE_SINGLE_CHECK_OUTPUT
  WIDGET_SEND_EVENT: NEVERBOUNCE_WIDGET_SEND_EVENT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's NEVERBOUNCE toolkit.
 */
export const NEVERBOUNCE = {
  slug: "neverbounce",
  tools: {
    /**
     * Tool to get account information including credits, job counts, and usage statistics. use when retrieving neverbounce account summary after authentication.
     */
    ACCOUNT_INFO: "NEVERBOUNCE_ACCOUNT_INFO",
    /**
     * Tool to create a new bulk verification job with parsing, sampling, and callback options. use for asynchronous list verification with advanced control.
     */
    JOBS_CREATE: "NEVERBOUNCE_JOBS_CREATE",
    /**
     * Tool to permanently delete a job and its results. use when you need to irreversibly remove a bulk verification job. this delete is irreversible.
     */
    JOBS_DELETE: "NEVERBOUNCE_JOBS_DELETE",
    /**
     * Tool to download job results as a csv file via get. use after job completion to retrieve segmented or enriched csv output.
     */
    JOBS_DOWNLOAD_GET: "NEVERBOUNCE_JOBS_DOWNLOAD_GET",
    /**
     * Tool to retrieve paginated results for a completed job, including original data and verification outcomes. use after confirming job completion and when paging through results.
     */
    JOBS_RESULTS: "NEVERBOUNCE_JOBS_RESULTS",
    /**
     * Tool to start a parsed job when auto start is disabled. use after creating a job with auto start=false.
     */
    JOBS_START: "NEVERBOUNCE_JOBS_START",
    /**
     * Tool to get the status and progress of a bulk verification job. use when
     */
    JOBS_STATUS: "NEVERBOUNCE_JOBS_STATUS",
    /**
     * Tool to get account information including credits, job counts, and usage statistics. use after authenticating to retrieve neverbounce account summary.
     */
    NEVERBOUNCE_ACCOUNT_INFO: "NEVERBOUNCE_NEVERBOUNCE_ACCOUNT_INFO",
    /**
     * Tool to permanently delete a job and its results. use when you need to irreversibly remove a bulk verification job. deletion is irreversible.
     */
    NEVERBOUNCE_JOBS_DELETE: "NEVERBOUNCE_NEVERBOUNCE_JOBS_DELETE",
    /**
     * Tool to download job results as a csv file via post. use after job completion to fetch segmented or enriched csv output.
     */
    NEVERBOUNCE_JOBS_DOWNLOAD_POST: "NEVERBOUNCE_NEVERBOUNCE_JOBS_DOWNLOAD_POST",
    /**
     * Tool to verify a single email address and gather additional information. use when you need real-time validation at the point of entry.
     */
    SINGLE_CHECK: "NEVERBOUNCE_SINGLE_CHECK",
    /**
     * Tool to send widget form events via the js widget api. use when reporting form.load or form.completion events after user interactions with your form.
     */
    WIDGET_SEND_EVENT: "NEVERBOUNCE_WIDGET_SEND_EVENT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "NEVERBOUNCE".
 */
export type NEVERBOUNCE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "NEVERBOUNCE".
 */
export type NEVERBOUNCE_TRIGGER_EVENTS = {}
