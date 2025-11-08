// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLOUDCONVERT's CLOUDCONVERT_CREATE_EXPORT_GOOGLE_CLOUD_STORAGE_TASK tool input.
 */
type CLOUDCONVERT_CREATE_EXPORT_GOOGLE_CLOUD_STORAGE_TASK_INPUT = {
  /**
   * Bucket
   * @description The Google Cloud Storage bucket name.
   */
  bucket?: string;
  /**
   * Client Email
   * @description Service account client email (e.g., `my-sa@api-project-123456.iam.gserviceaccount.com`).
   */
  client_email?: string;
  /**
   * File
   * @description Filename/path for the exported file in the bucket.
   * @default null
   */
  file: string | null;
  /**
   * File Prefix
   * @description Prefix for exported files in the bucket when exporting multiple files.
   * @default null
   */
  file_prefix: string | null;
  /**
   * Input
   * @description The ID of the task to export. Multiple task IDs can be provided as a list.
   */
  input?: string | null;
  /**
   * Private Key
   * @description The private key of the service account (PEM-encoded).
   */
  private_key?: string;
  /**
   * Project Id
   * @description The Google Cloud Project ID (`api-project-...`).
   */
  project_id?: string;
};

/**
 * Type of CLOUDCONVERT's CLOUDCONVERT_CREATE_EXPORT_GOOGLE_CLOUD_STORAGE_TASK tool output.
 */
type CLOUDCONVERT_CREATE_EXPORT_GOOGLE_CLOUD_STORAGE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the task was created.
       */
      created_at: string;
      /**
       * Ended At
       * @description ISO 8601 timestamp when the task ended.
       * @default null
       */
      ended_at: string | null;
      /**
       * Id
       * @description Unique task identifier.
       */
      id: string;
      /**
       * Message
       * @description Informational or error message, if any.
       * @default null
       */
      message: string | null;
      /**
       * Operation
       * @description Operation name
       * @constant
       */
      operation: "export/google-cloud-storage";
      /**
       * Result
       * @description Result object containing exported file info
       */
      result: {
          /**
           * Files
           * @description List of files exported to the GCS bucket.
           */
          files: {
              /**
               * Filename
               * @description Name of the file exported to the GCS bucket.
               */
              filename: string;
          }[];
      };
      /**
       * Started At
       * @description ISO 8601 timestamp when the task started.
       * @default null
       */
      started_at: string | null;
      /**
       * Status
       * @description Current task status: 'waiting', 'processing', or 'finished'.
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
 * Type of CLOUDCONVERT's CLOUDCONVERT_CREATE_EXPORT_S3_TASK tool input.
 */
type CLOUDCONVERT_CREATE_EXPORT_S3_TASK_INPUT = {
  /**
   * Access Key Id
   * @description AWS access key ID with `s3:PutObject` permission.
   */
  access_key_id?: string;
  /**
   * Acl
   * @description S3 ACL for stored objects. Defaults to 'private'.
   * @default private
   * @enum {string}
   */
  acl: "private" | "public-read" | "public-read-write" | "authenticated-read" | "bucket-owner-read" | "bucket-owner-full-control";
  /**
   * Bucket
   * @description The Amazon S3 bucket where to store the file(s).
   */
  bucket?: string;
  /**
   * Cache Control
   * @description Value for the 'Cache-Control' header (e.g., 'max-age=172800').
   * @default null
   */
  cache_control: string | null;
  /**
   * Content Disposition
   * @description Value for the 'Content-Disposition' header (e.g., 'attachment' or 'inline').
   * @default null
   */
  content_disposition: string | null;
  /**
   * Content Type
   * @description Value for the 'Content-Type' header. Auto-detected if omitted.
   * @default null
   */
  content_type: string | null;
  /**
   * Endpoint
   * @description Custom S3 API endpoint URL. Overrides default built from region. Use for S3-compatible services.
   * @default null
   */
  endpoint: string | null;
  /**
   * Input
   * @description The ID of the task to export, or a list of task IDs.
   */
  input?: string | null;
  /**
   * Key
   * @description S3 object key (filename and path) for storing the file. Supports printf-style placeholders for multiple files, e.g., 'file-%d.pdf'.
   * @default null
   */
  key: string | null;
  /**
   * Key Prefix
   * @description Prefix to prepend to the S3 object key when exporting multiple files.
   * @default null
   */
  key_prefix: string | null;
  /**
   * Metadata
   * @description Additional S3 metadata as key–value pairs (e.g., 'x-amz-meta-*').
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Region
   * @description S3 region identifier (e.g., 'us-west-2' or 'eu-west-1').
   */
  region?: string;
  /**
   * Secret Access Key
   * @description AWS secret access key.
   */
  secret_access_key?: string;
  /**
   * Server Side Encryption
   * @description Server-side encryption algorithm to use (AES256 or aws:kms).
   * @default null
   * @enum {string|null}
   */
  server_side_encryption: "AES256" | "aws:kms" | null;
  /**
   * Session Token
   * @description AWS session token for temporary (STS) credentials.
   * @default null
   */
  session_token: string | null;
  /**
   * Tagging
   * @description S3 object tags as key–value pairs.
   * @default null
   */
  tagging: {
      [key: string]: string;
  } | null;
};

/**
 * Type of CLOUDCONVERT's CLOUDCONVERT_CREATE_EXPORT_S3_TASK tool output.
 */
type CLOUDCONVERT_CREATE_EXPORT_S3_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the task was created.
       */
      created_at: string;
      /**
       * Ended At
       * @description ISO 8601 timestamp when the task ended.
       * @default null
       */
      ended_at: string | null;
      /**
       * Id
       * @description Unique task identifier.
       */
      id: string;
      /**
       * Message
       * @description Informational or error message, if any.
       * @default null
       */
      message: string | null;
      /**
       * Operation
       * @description Operation name.
       * @constant
       */
      operation: "export/s3";
      /**
       * Result
       * @description Result object containing exported file info.
       */
      result: {
          /**
           * Files
           * @description List of files exported to the S3 bucket.
           */
          files: {
              /**
               * Filename
               * @description Name of the file exported to S3.
               */
              filename: string;
          }[];
      };
      /**
       * Started At
       * @description ISO 8601 timestamp when the task started.
       * @default null
       */
      started_at: string | null;
      /**
       * Status
       * @description Current task status: 'waiting', 'processing', or 'finished'.
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
 * Type of CLOUDCONVERT's CLOUDCONVERT_CREATE_WEBHOOK tool input.
 */
type CLOUDCONVERT_CREATE_WEBHOOK_INPUT = {
  /**
   * Event
   * @description Event type to subscribe to (e.g., 'job.finished').
   */
  event?: string;
  /**
   * Payload
   * @description Custom payload object to include in each webhook call.
   * @default null
   */
  payload: {
      [key: string]: unknown;
  } | null;
  /**
   * Signing Secret
   * @description Secret to sign webhook payloads via HMAC-SHA256.
   * @default null
   */
  signing_secret: string | null;
  /**
   * Url
   * Format: uri
   * @description The target URL to send webhook payloads to.
   */
  url?: string;
};

/**
 * Type of CLOUDCONVERT's CLOUDCONVERT_CREATE_WEBHOOK tool output.
 */
type CLOUDCONVERT_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the webhook was created.
       */
      created_at: string;
      /**
       * Event
       * @description Event name for the webhook.
       */
      event: string;
      /**
       * Id
       * @description Unique identifier for the webhook.
       */
      id: string;
      /**
       * Payload
       * @description Custom payload object included in the webhook.
       * @default null
       */
      payload: {
          [key: string]: unknown;
      } | null;
      /**
       * Signing Secret
       * @description Signing secret for webhook payloads, if set.
       * @default null
       */
      signing_secret: string | null;
      /**
       * Updated At
       * @description ISO8601 timestamp when the webhook was last updated.
       */
      updated_at: string;
      /**
       * Url
       * Format: uri
       * @description The target URL of the webhook.
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
 * Type of CLOUDCONVERT's CLOUDCONVERT_DELETE_WEBHOOK tool input.
 */
type CLOUDCONVERT_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description UUID of the webhook to delete
   */
  webhook_id?: string;
};

/**
 * Type of CLOUDCONVERT's CLOUDCONVERT_DELETE_WEBHOOK tool output.
 */
type CLOUDCONVERT_DELETE_WEBHOOK_OUTPUT = {
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
 * Type of CLOUDCONVERT's CLOUDCONVERT_LIST_SUPPORTED_FORMATS tool input.
 */
type CLOUDCONVERT_LIST_SUPPORTED_FORMATS_INPUT = {
  /**
   * Alternatives
   * @description Set to true to include alternative conversion types.
   * @default null
   */
  alternatives: boolean | null;
  /**
   * Filter[Engine]
   * @description Filter to include only conversions with this engine name.
   * @default null
   */
  "filter[engine]": string | null;
  /**
   * Filter[Engine Version]
   * @description Filter to include only conversions with this engine version.
   * @default null
   */
  "filter[engine_version]": string | null;
  /**
   * Filter[Input Format]
   * @description Filter to include only conversions with this input format.
   * @default null
   */
  "filter[input_format]": string | null;
  /**
   * Filter[Output Format]
   * @description Filter to include only conversions with this output format.
   * @default null
   */
  "filter[output_format]": string | null;
  /**
   * Include
   * @description Include additional data: options and/or engine_versions.
   * @default null
   */
  include: string[] | null;
};

/**
 * Type of CLOUDCONVERT's CLOUDCONVERT_LIST_SUPPORTED_FORMATS tool output.
 */
type CLOUDCONVERT_LIST_SUPPORTED_FORMATS_OUTPUT = {
  /**
   * Data
   * @description List of supported conversion types.
   */
  data?: {
      /**
       * Credits
       * @description Conversion credits required.
       */
      credits: number;
      /**
       * Deprecated
       * @description Whether this conversion type is deprecated.
       * @default null
       */
      deprecated: boolean | null;
      /**
       * Engine
       * @description Engine name.
       */
      engine: string;
      /**
       * Engine Versions
       * @description List of available engine versions.
       * @default null
       */
      engine_versions: {
          /**
           * Default
           * @description Whether this version is the default one.
           * @default null
           */
          default: boolean | null;
          /**
           * Deprecated
           * @description Whether this version is deprecated.
           * @default null
           */
          deprecated: boolean | null;
          /**
           * Experimental
           * @description Whether this version is experimental.
           * @default null
           */
          experimental: boolean | null;
          /**
           * Latest
           * @description Whether this version is the latest one.
           * @default null
           */
          latest: boolean | null;
          /**
           * Version
           * @description Engine version.
           */
          version: string;
      }[] | null;
      /**
       * Experimental
       * @description Whether this conversion type is experimental.
       * @default null
       */
      experimental: boolean | null;
      /**
       * Input Format
       * @description Input file format.
       */
      input_format: string;
      /**
       * Meta
       * @description Additional metadata for the conversion type.
       * @default null
       */
      meta: {
          [key: string]: unknown;
      } | null;
      /**
       * Operation
       * @description Operation type, value will be 'convert'.
       */
      operation: string;
      /**
       * Options
       * @description List of available conversion options.
       * @default null
       */
      options: {
          /**
           * Default
           * @description Default value for the option.
           * @default null
           */
          default: string | null;
          /**
           * Name
           * @description Name of the option.
           */
          name: string;
          /**
           * Possible Values
           * @description Possible values if the option type is enum.
           * @default null
           */
          possible_values: string[] | null;
          /**
           * Type
           * @description Data type of the option: string, boolean, integer, float, enum or dictionary.
           */
          type: string;
      }[] | null;
      /**
       * Output Format
       * @description Output file format.
       */
      output_format: string;
  }[];
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
 * Type of CLOUDCONVERT's CLOUDCONVERT_LIST_TASKS tool input.
 */
type CLOUDCONVERT_LIST_TASKS_INPUT = {
  /**
   * Completed At
   * @description Filter tasks by completion datetime (ISO 8601).
   * @default null
   */
  completed_at: string | null;
  /**
   * Created At
   * @description Filter tasks by creation datetime (ISO 8601).
   * @default null
   */
  created_at: string | null;
  /**
   * Order By
   * @description Order the results by a column, e.g., 'created_at desc'.
   * @default null
   */
  order_by: string | null;
  /**
   * Page
   * @description Page number to retrieve.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of tasks per page.
   * @default null
   */
  per_page: number | null;
  /**
   * Status
   * @description Filter tasks by status.
   * @default null
   * @enum {string|null}
   */
  status: "waiting" | "processing" | "finished" | "error" | null;
};

/**
 * Type of CLOUDCONVERT's CLOUDCONVERT_LIST_TASKS tool output.
 */
type CLOUDCONVERT_LIST_TASKS_OUTPUT = {
  /**
   * Data
   * @description List of task objects.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the task was created.
       */
      created_at: string;
      /**
       * Ended At
       * @description Timestamp when the task processing ended.
       * @default null
       */
      ended_at: string | null;
      /**
       * Id
       * @description Unique identifier for the task.
       */
      id: string;
      /**
       * Operation
       * @description Operation type of the task, e.g., 'convert', 'import'.
       */
      operation: string;
      /**
       * Result
       * @description Result data of the task, present when finished.
       * @default null
       */
      result: {
          [key: string]: unknown;
      } | null;
      /**
       * Started At
       * @description Timestamp when the task processing started.
       * @default null
       */
      started_at: string | null;
      /**
       * Status
       * @description Current status of the task.
       * @enum {string}
       */
      status: "waiting" | "processing" | "finished" | "error";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number.
       */
      current_page: number;
      /**
       * Last Page
       * @description Last available page number.
       * @default null
       */
      last_page: number | null;
      /**
       * Per Page
       * @description Number of tasks per page.
       */
      per_page: number;
      /**
       * Total
       * @description Total number of tasks.
       * @default null
       */
      total: number | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLOUDCONVERT's CLOUDCONVERT_LIST_WEBHOOKS tool input.
 */
type CLOUDCONVERT_LIST_WEBHOOKS_INPUT = {
  /**
   * Filter[Url]
   * @description Filter results to webhooks with this URL
   * @default null
   */
  "filter[url]": string | null;
  /**
   * Page
   * @description Page number to return (default: 1)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of webhooks per page (default: 100)
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of CLOUDCONVERT's CLOUDCONVERT_LIST_WEBHOOKS tool output.
 */
type CLOUDCONVERT_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description List of webhooks
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when created
       */
      created_at: string;
      /**
       * Disabled
       * @description Whether the webhook is disabled
       */
      disabled: boolean;
      /**
       * Events
       * @description Events subscribed to by the webhook
       */
      events: string[];
      /**
       * Failing
       * @description Whether the last delivery attempt failed
       */
      failing: boolean;
      /**
       * Id
       * @description Unique webhook ID
       */
      id: number;
      /**
       * Last Error At
       * @description ISO timestamp of the last error occurrence
       * @default null
       */
      last_error_at: string | null;
      /**
       * Last Response Code
       * @description Last HTTP status or error code
       * @default null
       */
      last_response_code: string | null;
      /**
       * Links
       * @description Resource links, e.g., self URL
       */
      links: {
          [key: string]: string;
      };
      /**
       * Signing Secret
       * @description Secret used to sign webhook payloads via HMAC-SHA256
       */
      signing_secret: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when last updated
       */
      updated_at: string;
      /**
       * Url
       * @description Webhook target URL
       */
      url: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination link URLs
   */
  links?: {
      /**
       * First
       * @description URL of the first page
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description URL of the last page
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description URL of the next page
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Starting item index
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Last page number
       */
      last_page: number;
      /**
       * Links
       * @description Pagination links list
       */
      links: {
          /**
           * Active
           * @description Whether the link is active
           */
          active: boolean;
          /**
           * Label
           * @description Link label
           */
          label: string;
          /**
           * Url
           * @description URL of the pagination link
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Path
       * @description Request path for pagination
       */
      path: string;
      /**
       * Per Page
       * @description Items per page
       */
      per_page: number;
      /**
       * To
       * @description Ending item index
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLOUDCONVERT's CLOUDCONVERT_SHOW_USER tool input.
 */
type CLOUDCONVERT_SHOW_USER_INPUT = object;

/**
 * Type of CLOUDCONVERT's CLOUDCONVERT_SHOW_USER tool output.
 */
type CLOUDCONVERT_SHOW_USER_OUTPUT = {
  /**
   * Data
   * @description Current authenticated user details.
   */
  data?: {
      /**
       * 2Fa Enabled
       * @description Whether 2FA is enabled.
       */
      "2fa_enabled": boolean;
      /**
       * Created At
       * @description ISO8601 timestamp when the user was created.
       */
      created_at: string;
      /**
       * Credits
       * @description Available credits for the user.
       */
      credits: number;
      /**
       * Email
       * @description Email address of the user.
       */
      email: string;
      /**
       * Id
       * @description Unique identifier of the user.
       */
      id: number | null;
      /**
       * Links
       * @description Related resource links.
       */
      links: {
          [key: string]: string;
      };
      /**
       * Name
       * @description Full name of the user (optional).
       * @default null
       */
      name: string | null;
      /**
       * Paying
       * @description Whether the user is a paying customer.
       */
      paying: boolean;
      /**
       * Task Region
       * @description Task region of the user.
       * @default null
       */
      task_region: string | null;
      /**
       * Updated At
       * @description ISO8601 timestamp when the user was last updated.
       * @default null
       */
      updated_at: string | null;
      /**
       * Username
       * @description Username of the user.
       */
      username: string;
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
 * Type map of all available tool input types for toolkit "CLOUDCONVERT".
 */
export type CLOUDCONVERT_TOOL_INPUTS = {
  CREATE_EXPORT_GOOGLE_CLOUD_STORAGE_TASK: CLOUDCONVERT_CREATE_EXPORT_GOOGLE_CLOUD_STORAGE_TASK_INPUT
  CREATE_EXPORT_S3_TASK: CLOUDCONVERT_CREATE_EXPORT_S3_TASK_INPUT
  CREATE_WEBHOOK: CLOUDCONVERT_CREATE_WEBHOOK_INPUT
  DELETE_WEBHOOK: CLOUDCONVERT_DELETE_WEBHOOK_INPUT
  LIST_SUPPORTED_FORMATS: CLOUDCONVERT_LIST_SUPPORTED_FORMATS_INPUT
  LIST_TASKS: CLOUDCONVERT_LIST_TASKS_INPUT
  LIST_WEBHOOKS: CLOUDCONVERT_LIST_WEBHOOKS_INPUT
  SHOW_USER: CLOUDCONVERT_SHOW_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLOUDCONVERT".
 */
export type CLOUDCONVERT_TOOL_OUTPUTS = {
  CREATE_EXPORT_GOOGLE_CLOUD_STORAGE_TASK: CLOUDCONVERT_CREATE_EXPORT_GOOGLE_CLOUD_STORAGE_TASK_OUTPUT
  CREATE_EXPORT_S3_TASK: CLOUDCONVERT_CREATE_EXPORT_S3_TASK_OUTPUT
  CREATE_WEBHOOK: CLOUDCONVERT_CREATE_WEBHOOK_OUTPUT
  DELETE_WEBHOOK: CLOUDCONVERT_DELETE_WEBHOOK_OUTPUT
  LIST_SUPPORTED_FORMATS: CLOUDCONVERT_LIST_SUPPORTED_FORMATS_OUTPUT
  LIST_TASKS: CLOUDCONVERT_LIST_TASKS_OUTPUT
  LIST_WEBHOOKS: CLOUDCONVERT_LIST_WEBHOOKS_OUTPUT
  SHOW_USER: CLOUDCONVERT_SHOW_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLOUDCONVERT toolkit.
 */
export const CLOUDCONVERT = {
  slug: "cloudconvert",
  tools: {
    /**
     * Tool to create a task to export files to a google cloud storage bucket. use after conversion when you need to store results directly into gcs. ensure service account credentials have the proper permissions.
     */
    CREATE_EXPORT_GOOGLE_CLOUD_STORAGE_TASK: "CLOUDCONVERT_CREATE_EXPORT_GOOGLE_CLOUD_STORAGE_TASK",
    /**
     * Tool to create a task to export files to an amazon s3 bucket. use after conversion when you need to store results directly into s3. ensure aws credentials have s3:putobject (and putobjectacl if using non-default acl) permissions.
     */
    CREATE_EXPORT_S3_TASK: "CLOUDCONVERT_CREATE_EXPORT_S3_TASK",
    /**
     * Tool to create a new webhook. use when you need to receive event notifications into your system.
     */
    CREATE_WEBHOOK: "CLOUDCONVERT_CREATE_WEBHOOK",
    /**
     * Tool to delete a webhook by its id. use when you no longer need a webhook and want to remove it.
     */
    DELETE_WEBHOOK: "CLOUDCONVERT_DELETE_WEBHOOK",
    /**
     * Tool to list all supported conversion formats, engines, and options. use when you need to discover available conversions before creating tasks.
     */
    LIST_SUPPORTED_FORMATS: "CLOUDCONVERT_LIST_SUPPORTED_FORMATS",
    /**
     * Tool to retrieve a list of tasks. use when you need to enumerate tasks with optional filters like status or date ranges.
     */
    LIST_TASKS: "CLOUDCONVERT_LIST_TASKS",
    /**
     * Tool to list all webhooks. use when you need to retrieve existing webhooks before managing or inspecting them.
     */
    LIST_WEBHOOKS: "CLOUDCONVERT_LIST_WEBHOOKS",
    /**
     * Tool to show the current authenticated user's information. use after authentication to confirm account details.
     */
    SHOW_USER: "CLOUDCONVERT_SHOW_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLOUDCONVERT".
 */
export type CLOUDCONVERT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLOUDCONVERT".
 */
export type CLOUDCONVERT_TRIGGER_EVENTS = {}
