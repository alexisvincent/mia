// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HONEYBADGER's HONEYBADGER_REPORT_CHECK_IN tool input.
 */
type HONEYBADGER_REPORT_CHECK_IN_INPUT = {
  /**
   * Id
   * @description The unique identifier of the check-in to report. Provide this OR `project_api_key` and `slug`.
   * @default null
   */
  id: string | null;
  /**
   * Project Api Key
   * @description The API key of the project. Required when reporting by `slug` instead of `id`.
   * @default null
   */
  project_api_key: string | null;
  /**
   * Slug
   * @description The slug identifier of the check-in. Required when reporting by slug instead of `id`.
   * @default null
   */
  slug: string | null;
};

/**
 * Type of HONEYBADGER's HONEYBADGER_REPORT_CHECK_IN tool output.
 */
type HONEYBADGER_REPORT_CHECK_IN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the check-in was successfully reported (HTTP 200 OK).
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
 * Type of HONEYBADGER's HONEYBADGER_REPORT_DEPLOYMENT tool input.
 */
type HONEYBADGER_REPORT_DEPLOYMENT_INPUT = {
  /**
   * Deploy
   * @description Deployment details
   */
  deploy?: {
      /**
       * Environment
       * @description Environment name (e.g., 'production')
       * @default null
       */
      environment: string | null;
      /**
       * Local Username
       * @description Name of the user deploying
       * @default null
       */
      local_username: string | null;
      /**
       * Repository
       * @description HTTPS URL of the repository
       * @default null
       */
      repository: string | null;
      /**
       * Revision
       * @description VCS revision or tag deployed
       * @default null
       */
      revision: string | null;
  };
};

/**
 * Type of HONEYBADGER's HONEYBADGER_REPORT_DEPLOYMENT tool output.
 */
type HONEYBADGER_REPORT_DEPLOYMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Status of the deployment report, expected 'OK'
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
 * Type of HONEYBADGER's HONEYBADGER_REPORT_EVENT tool input.
 */
type HONEYBADGER_REPORT_EVENT_INPUT = {
  /**
   * Events
   * @description List of event objects to send as NDJSON payload. Each event must be under 100 kB; total payload must be under 5 MB.
   */
  events?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of HONEYBADGER's HONEYBADGER_REPORT_EVENT tool output.
 */
type HONEYBADGER_REPORT_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Raw JSON response from Honeybadger Insights
       */
      result: {
          [key: string]: unknown;
      };
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
 * Type of HONEYBADGER's HONEYBADGER_REPORT_EXCEPTION tool input.
 */
type HONEYBADGER_REPORT_EXCEPTION_INPUT = {
  /**
   * Breadcrumbs
   * @description Breadcrumb trail leading up to the exception.
   * @default null
   */
  breadcrumbs: {
      /**
       * Enabled
       * @description Whether breadcrumbs are enabled for this notice
       */
      enabled: boolean;
      /**
       * Trail
       * @description Ordered list of breadcrumb events
       */
      trail: {
          /**
           * Category
           * @description Category of the event, e.g., 'request', 'db'
           */
          category: string;
          /**
           * Message
           * @description Message or description of the event
           */
          message: string;
          /**
           * Metadata
           * @description Additional key/value metadata for the event
           */
          metadata?: {
              [key: string]: unknown;
          };
          /**
           * Timestamp
           * @description ISO8601 timestamp for when the event occurred
           */
          timestamp: string;
      }[];
  } | null;
  /**
   * Error
   * @description Exception details including backtrace
   */
  error?: {
      /**
       * Backtrace
       * @description Stack frames for grouping and context
       */
      backtrace: {
          /**
           * File
           * @description Source filename for the frame
           */
          file: string;
          /**
           * Method
           * @description Method or function name for the frame
           */
          method: string;
          /**
           * Number
           * @description Frame number in the backtrace, starting at 0
           */
          number: number;
          /**
           * Source
           * @description Optional source context lines around the frame, keyed by line number
           * @default null
           */
          source: {
              [key: string]: string;
          } | null;
      }[];
      /**
       * Causes
       * @description Optional nested causes of the exception
       * @default null
       */
      causes: {
          /**
           * Backtrace
           * @description Backtrace frames for the cause
           */
          backtrace: {
              /**
               * File
               * @description Source filename for the frame
               */
              file: string;
              /**
               * Method
               * @description Method or function name for the frame
               */
              method: string;
              /**
               * Number
               * @description Frame number in the backtrace, starting at 0
               */
              number: number;
              /**
               * Source
               * @description Optional source context lines around the frame, keyed by line number
               * @default null
               */
              source: {
                  [key: string]: string;
              } | null;
          }[];
          /**
           * Class
           * @description Exception class name for the cause
           */
          class: string;
          /**
           * Message
           * @description Exception message for the cause
           */
          message: string;
      }[] | null;
      /**
       * Class
       * @description Exception class name, e.g., 'ZeroDivisionError'
       */
      class: string;
      /**
       * Fingerprint
       * @description Optional fingerprint to force grouping of related errors
       * @default null
       */
      fingerprint: string | null;
      /**
       * Message
       * @description Exception message, e.g., 'division by zero'
       */
      message: string;
      /**
       * Tags
       * @description Optional tags for the error grouping
       * @default null
       */
      tags: string[] | null;
  };
  /**
   * Notifier
   * @description Client library information for Honeybadger notifier.
   * @default null
   */
  notifier: {
      /**
       * Name
       * @description Notifier library name, e.g., 'honeybadger-python'
       */
      name: string;
      /**
       * Url
       * @description Notifier library URL, e.g., GitHub repo URL
       */
      url: string;
      /**
       * Version
       * @description Notifier library version, e.g., '2.0.0'
       */
      version: string;
  } | null;
  /**
   * RequestContext
   * @description HTTP request context at the time of the exception.
   * @default null
   */
  request: {
      /**
       * Action
       * @description Action or method name, e.g., 'create' or 'index'
       */
      action: string;
      /**
       * Cgi Data
       * @description CGI or environment data such as headers, server variables
       */
      cgi_data?: {
          [key: string]: unknown;
      };
      /**
       * Component
       * @description Controller or component name, e.g., 'UsersController'
       */
      component: string;
      /**
       * Context
       * @description User or application context, e.g., user_id, user_email
       */
      context?: {
          [key: string]: unknown;
      };
      /**
       * Params
       * @description Request parameters or query parameters
       */
      params?: {
          [key: string]: unknown;
      };
      /**
       * Session
       * @description Session data available during the request
       */
      session?: {
          [key: string]: unknown;
      };
      /**
       * Url
       * @description Request URL where the exception occurred
       */
      url: string;
  } | null;
  /**
   * ServerContext
   * @description Server and process context for the exception.
   * @default null
   */
  server: {
      /**
       * Environment Name
       * @description Runtime environment, e.g., 'production'
       */
      environment_name: string;
      /**
       * Hostname
       * @description Server hostname where the error occurred
       */
      hostname: string;
      /**
       * Pid
       * @description Process ID where the exception was raised
       * @default null
       */
      pid: number | null;
      /**
       * Project Root
       * @description Code root path of the application on the server
       */
      project_root: string;
      /**
       * Revision
       * @description Deployed code revision identifier, e.g., Git SHA
       * @default null
       */
      revision: string | null;
  } | null;
};

/**
 * Type of HONEYBADGER's HONEYBADGER_REPORT_EXCEPTION tool output.
 */
type HONEYBADGER_REPORT_EXCEPTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description UUID of the created exception notice
       */
      id: string;
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
 * Type of HONEYBADGER's HONEYBADGER_UPLOAD_FILE_TO_S3 tool input.
 */
type HONEYBADGER_UPLOAD_FILE_TO_S3_INPUT = {
  /**
   * Desired Name
   * @description Optional filename to use in S3. Defaults to basename of file_path.
   * @default null
   */
  desired_name: string | null;
  /**
   * File Path
   * @description Absolute path to the local file to upload.
   */
  file_path?: string;
  /**
   * Mimetype
   * @description Optional MIME type of the file.
   * @default null
   */
  mimetype: string | null;
};

/**
 * Type of HONEYBADGER's HONEYBADGER_UPLOAD_FILE_TO_S3 tool output.
 */
type HONEYBADGER_UPLOAD_FILE_TO_S3_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * S3Key
       * @description Unique key of the uploaded file in S3.
       */
      s3key: string;
      /**
       * Url
       * @description Presigned URL to access the uploaded file, if generated.
       * @default null
       */
      url: string | null;
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
 * Type of HONEYBADGER's HONEYBADGER_UPLOAD_SOURCE_MAP tool input.
 */
type HONEYBADGER_UPLOAD_SOURCE_MAP_INPUT = {
  /**
   * Additional Source Files
   * @description Additional source files referenced by the map; each file's name must match its URL.
   * @default null
   */
  additional_source_files: {
      /**
       * Mimetype
       * @description The MIME type of the file
       */
      mimetype: string;
      /**
       * Name
       * @description The filename that will be used when uploading the file to the destination service
       */
      name: string;
      /**
       * S3Key
       * @description The S3 key of a publicly accessible file, typically returned from a previous download action that stored the file in S3. This key references an existing file that can be uploaded to another service.
       */
      s3key: string;
  }[] | null;
  /**
   * FileUploadable
   * @description The minified JavaScript file to upload.
   */
  minified_file?: {
      /**
       * Mimetype
       * @description The MIME type of the file
       */
      mimetype: string;
      /**
       * Name
       * @description The filename that will be used when uploading the file to the destination service
       */
      name: string;
      /**
       * S3Key
       * @description The S3 key of a publicly accessible file, typically returned from a previous download action that stored the file in S3. This key references an existing file that can be uploaded to another service.
       */
      s3key: string;
  };
  /**
   * Minified Url
   * @description Absolute production URL of the minified JS file; supports '*' wildcard. Query strings are ignored.
   */
  minified_url?: string;
  /**
   * Revision
   * @description Deploy revision; should match honeybadger.js revision configuration.
   * @default null
   */
  revision: string | null;
  /**
   * FileUploadable
   * @description The corresponding source map file.
   */
  source_map?: {
      /**
       * Mimetype
       * @description The MIME type of the file
       */
      mimetype: string;
      /**
       * Name
       * @description The filename that will be used when uploading the file to the destination service
       */
      name: string;
      /**
       * S3Key
       * @description The S3 key of a publicly accessible file, typically returned from a previous download action that stored the file in S3. This key references an existing file that can be uploaded to another service.
       */
      s3key: string;
  };
};

/**
 * Type of HONEYBADGER's HONEYBADGER_UPLOAD_SOURCE_MAP tool output.
 */
type HONEYBADGER_UPLOAD_SOURCE_MAP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the source map upload succeeded (HTTP 201).
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
 * Type map of all available tool input types for toolkit "HONEYBADGER".
 */
export type HONEYBADGER_TOOL_INPUTS = {
  REPORT_CHECK_IN: HONEYBADGER_REPORT_CHECK_IN_INPUT
  REPORT_DEPLOYMENT: HONEYBADGER_REPORT_DEPLOYMENT_INPUT
  REPORT_EVENT: HONEYBADGER_REPORT_EVENT_INPUT
  REPORT_EXCEPTION: HONEYBADGER_REPORT_EXCEPTION_INPUT
  UPLOAD_FILE_TO_S3: HONEYBADGER_UPLOAD_FILE_TO_S3_INPUT
  UPLOAD_SOURCE_MAP: HONEYBADGER_UPLOAD_SOURCE_MAP_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HONEYBADGER".
 */
export type HONEYBADGER_TOOL_OUTPUTS = {
  REPORT_CHECK_IN: HONEYBADGER_REPORT_CHECK_IN_OUTPUT
  REPORT_DEPLOYMENT: HONEYBADGER_REPORT_DEPLOYMENT_OUTPUT
  REPORT_EVENT: HONEYBADGER_REPORT_EVENT_OUTPUT
  REPORT_EXCEPTION: HONEYBADGER_REPORT_EXCEPTION_OUTPUT
  UPLOAD_FILE_TO_S3: HONEYBADGER_UPLOAD_FILE_TO_S3_OUTPUT
  UPLOAD_SOURCE_MAP: HONEYBADGER_UPLOAD_SOURCE_MAP_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HONEYBADGER toolkit.
 */
export const HONEYBADGER = {
  slug: "honeybadger",
  tools: {
    /**
     * Tool to report a check-in (ping) to Honeybadger. Use when monitoring scheduled tasks to signal they're running on time.
     */
    REPORT_CHECK_IN: "HONEYBADGER_REPORT_CHECK_IN",
    /**
     * Tool to report a new deployment to Honeybadger. Use after a successful release to notify Honeybadger of the deployment.
     */
    REPORT_DEPLOYMENT: "HONEYBADGER_REPORT_DEPLOYMENT",
    /**
     * Tool to send custom events to Honeybadger Insights. Use when recording structured NDJSON telemetry.
     */
    REPORT_EVENT: "HONEYBADGER_REPORT_EVENT",
    /**
     * Tool to report an exception notice to Honeybadger. Use when sending error details (stack trace, context) for diagnostics.
     */
    REPORT_EXCEPTION: "HONEYBADGER_REPORT_EXCEPTION",
    /**
     * Tool to upload a local file to a managed S3 bucket. Use when preparing files for source-map uploads.
     */
    UPLOAD_FILE_TO_S3: "HONEYBADGER_UPLOAD_FILE_TO_S3",
    /**
     * Tool to upload JavaScript source maps for error de-minification. Use after deploying assets to Honeybadger to attach source maps.
     */
    UPLOAD_SOURCE_MAP: "HONEYBADGER_UPLOAD_SOURCE_MAP",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HONEYBADGER".
 */
export type HONEYBADGER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HONEYBADGER".
 */
export type HONEYBADGER_TRIGGER_EVENTS = {}
