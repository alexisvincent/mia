// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of KADOA's KADOA_CREATE_NOTIFICATION_CHANNEL tool input.
 */
type KADOA_CREATE_NOTIFICATION_CHANNEL_INPUT = {
  /**
   * Channel Type
   * @description Type of the notification channel
   * @enum {string}
   */
  channelType?: "EMAIL" | "SLACK" | "WEBHOOK" | "WEBSOCKET";
  /**
   * Config
   * @description Channel-specific configuration object
   * @example {
   *       "recipients": [
   *         "ops@example.com"
   *       ],
   *       "sender": "alerts@kadoa.com"
   *     }
   */
  config?: {
      [key: string]: unknown;
  };
  /**
   * Name
   * @description Human-readable name for the notification channel
   */
  name?: string;
};

/**
 * Type of KADOA's KADOA_CREATE_NOTIFICATION_CHANNEL tool output.
 */
type KADOA_CREATE_NOTIFICATION_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Container for the created channel
   */
  data?: {
      [key: string]: {
          /**
           * Channeltype
           * @enum {string}
           */
          channelType: "EMAIL" | "SLACK" | "WEBHOOK" | "WEBSOCKET";
          /** Config */
          config: {
              [key: string]: unknown;
          };
          /**
           * Createdat
           * Format: date-time
           */
          createdAt: string;
          /** Id */
          id: string;
          /** Name */
          name: string;
          /**
           * Updatedat
           * Format: date-time
           */
          updatedAt: string;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Human-readable message
   */
  message?: string;
  /**
   * Status
   * @description Operation status code
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KADOA's KADOA_ENABLE_DATA_VALIDATION tool input.
 */
type KADOA_ENABLE_DATA_VALIDATION_INPUT = {
  /**
   * Workflow Id
   * @description The ID of the workflow to enable data validation for.
   */
  workflowId?: string;
};

/**
 * Type of KADOA's KADOA_ENABLE_DATA_VALIDATION tool output.
 */
type KADOA_ENABLE_DATA_VALIDATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Enabled
       * @description The new validation status for the workflow.
       */
      enabled: boolean;
      /**
       * Error
       * @description Whether an error occurred.
       */
      error: boolean;
      /**
       * Message
       * @description Success message indicating the action performed.
       */
      message: string;
      /**
       * Workflow Id
       * @description The workflow ID that was updated.
       */
      workflowId: string;
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
 * Type of KADOA's KADOA_FETCH_WORKFLOW_CONFIGURATION tool input.
 */
type KADOA_FETCH_WORKFLOW_CONFIGURATION_INPUT = {
  /**
   * Workflow Id
   * @description ID of the advanced workflow to retrieve
   */
  workflow_id?: string;
};

/**
 * Type of KADOA's KADOA_FETCH_WORKFLOW_CONFIGURATION tool output.
 */
type KADOA_FETCH_WORKFLOW_CONFIGURATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Id
       * @description Workflow ID
       */
      _id: string;
      /**
       * Created At
       * @description ISO datetime when workflow was created
       */
      createdAt: string;
      /**
       * Is Advanced
       * @description Indicates whether this is an advanced workflow
       * @default null
       */
      isAdvanced: boolean | null;
      /**
       * Limit
       * @description Maximum number of records to process
       */
      limit: number;
      /**
       * Started At
       * @description ISO datetime when the workflow was first started
       * @default null
       */
      startedAt: string | null;
      /**
       * State
       * @description Current workflow state (e.g., 'RUNNING')
       */
      state: string;
      /**
       * Steps
       * @description Ordered list of workflow steps, each with its configuration (advanced workflows only)
       * @default null
       */
      steps: {
          /**
           * Id
           * @description Unique identifier for this step
           */
          id: string;
          /**
           * Modified At
           * @description ISO datetime when the step was last modified
           */
          modifiedAt: string;
          /**
           * Name
           * @description Human-readable name of the step
           */
          name: string;
          /**
           * Params
           * @description Operator-specific settings; field names and types vary by operator
           */
          params: {
              [key: string]: unknown;
          };
          /**
           * Type
           * @description Operator type (e.g., 'input', 'action')
           */
          type: string;
          /**
           * Version
           * @description Version number of the step
           */
          version: number;
      }[] | null;
      /**
       * Update Interval
       * @description Update interval setting for the workflow
       */
      updateInterval: string;
      /**
       * User Id
       * @description Identifier of the user who owns the workflow
       */
      userId: string;
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
 * Type of KADOA's KADOA_GET_ALL_LOCATIONS tool input.
 */
type KADOA_GET_ALL_LOCATIONS_INPUT = object;

/**
 * Type of KADOA's KADOA_GET_ALL_LOCATIONS tool output.
 */
type KADOA_GET_ALL_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Locations
       * @description List of available locations
       */
      locations: {
          /**
           * Country Name
           * @description Full country name
           */
          countryName: string;
          /**
           * Iso Code
           * @description ISO 3166-1 alpha-2 country code
           */
          isoCode: string;
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
 * Type of KADOA's KADOA_GET_CRAWLED_PAGES tool input.
 */
type KADOA_GET_CRAWLED_PAGES_INPUT = {
  /**
   * Current Page
   * @description Page number for pagination, must be >= 0
   * @default 0
   */
  currentPage: number;
  /**
   * Page Size
   * @description Number of items per page, must be >= 1
   * @default 50
   */
  pageSize: number;
  /**
   * Session Id
   * @description Unique ID of the crawling session
   */
  sessionId?: string;
};

/**
 * Type of KADOA's KADOA_GET_CRAWLED_PAGES tool output.
 */
type KADOA_GET_CRAWLED_PAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if any
       * @default null
       */
      error: string | null;
      /**
       * Pagination
       * @description Pagination details
       */
      pagination: {
          /**
           * Current Page
           * @description Current page index
           */
          currentPage: number;
          /**
           * Page Size
           * @description Number of items per page
           */
          pageSize: number;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          totalPages: number;
      };
      /**
       * Payload
       * @description List of crawled pages
       */
      payload: {
          /**
           * Id
           * @description Page ID
           */
          id: string;
          /**
           * Status
           * @description Page processing status
           */
          status: string;
          /**
           * Url
           * @description Page URL
           */
          url: string;
      }[];
      /**
       * Session Id
       * @description ID of the crawling session
       */
      sessionId: string;
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
 * Type of KADOA's KADOA_GET_CRAWLED_PAGE_CONTENT tool input.
 */
type KADOA_GET_CRAWLED_PAGE_CONTENT_INPUT = {
  /**
   * Format
   * @description Desired output format; html or md
   * @default html
   * @enum {string}
   */
  format: "html" | "md";
  /**
   * Page Id
   * @description Unique ID of the crawled page
   */
  pageId?: string;
  /**
   * Session Id
   * @description Unique ID of the crawling session
   */
  sessionId?: string;
};

/**
 * Type of KADOA's KADOA_GET_CRAWLED_PAGE_CONTENT tool output.
 */
type KADOA_GET_CRAWLED_PAGE_CONTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if any
       * @default null
       */
      error: string | null;
      /**
       * Page Format
       * @description Format of the retrieved page data
       */
      pageFormat: string;
      /**
       * Page Id
       * @description Unique ID of the page
       */
      pageId: string;
      /**
       * Payload
       * @description Page content in the requested format
       */
      payload: string;
      /**
       * Session Id
       * @description ID of the crawling session
       */
      sessionId: string;
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
 * Type of KADOA's KADOA_GET_CRAWL_STATUS tool input.
 */
type KADOA_GET_CRAWL_STATUS_INPUT = {
  /**
   * Session Id
   * @description Unique identifier of the crawling session
   */
  session_id?: string;
};

/**
 * Type of KADOA's KADOA_GET_CRAWL_STATUS tool output.
 */
type KADOA_GET_CRAWL_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the crawl failed
       * @default null
       */
      error: string | null;
      /**
       * Payload
       * @description Details about the crawling session status
       */
      payload: {
          /**
           * Crawled Pages
           * @description Number of pages that have been crawled so far
           */
          crawledPages: number;
          /**
           * Finished
           * @description Indicates whether the crawling session has finished
           */
          finished: boolean;
      };
      /**
       * Session Id
       * @description Identifier of the crawling session
       */
      sessionId: string;
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
 * Type of KADOA's KADOA_GET_EVENT_TYPES tool input.
 */
type KADOA_GET_EVENT_TYPES_INPUT = object;

/**
 * Type of KADOA's KADOA_GET_EVENT_TYPES tool output.
 */
type KADOA_GET_EVENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description Response payload container
   */
  data?: {
      /**
       * Event Types
       * @description List of available event types
       */
      eventTypes: {
          /**
           * Category
           * @description Event category
           */
          category: string;
          /**
           * Description
           * @description Event description
           */
          description: string;
          /**
           * Schema
           * @description Event payload schema object
           */
          schema: {
              [key: string]: unknown;
          };
          /**
           * Type
           * @description Event type identifier
           */
          type: string;
          /**
           * Version
           * @description Event schema version
           */
          version: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Human-readable message
   */
  message?: string;
  /**
   * Status
   * @description Operation status
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KADOA's KADOA_GET_LATEST_WORKFLOW_DATA tool input.
 */
type KADOA_GET_LATEST_WORKFLOW_DATA_INPUT = {
  /**
   * Filters
   * @description List of filter objects
   * @default null
   */
  filters: {
      /**
       * Field
       * @description Field to filter on
       */
      field: string;
      /**
       * Operator
       * @description Comparison operator, e.g., eq, ne, gt
       */
      operator: string;
      /**
       * Value
       * @description Value to compare against
       */
      value: string | null;
  }[] | null;
  /**
   * Format
   * @description Response format
   * @default json
   * @enum {string}
   */
  format: "json" | "csv";
  /**
   * Gzip
   * @description Enable gzip compression
   * @default false
   */
  gzip: boolean;
  /**
   * Limit
   * @description Items per page (0 for all)
   * @default 25
   */
  limit: number;
  /**
   * Order
   * @description Sort order
   * @default asc
   * @enum {string}
   */
  order: "asc" | "desc";
  /**
   * Page
   * @description Page number, must be >= 1
   * @default 1
   */
  page: number;
  /**
   * Run Id
   * @description ID of a specific run to retrieve data from
   * @default null
   */
  runId: string | null;
  /**
   * Sort By
   * @description Field to sort by
   * @default null
   */
  sortBy: string | null;
  /**
   * Workflow Id
   * @description ID of the workflow to retrieve data from
   */
  workflowId?: string;
};

/**
 * Type of KADOA's KADOA_GET_LATEST_WORKFLOW_DATA tool output.
 */
type KADOA_GET_LATEST_WORKFLOW_DATA_OUTPUT = {
  /**
   * Csv
   * @description Raw CSV output if requested
   * @default null
   */
  csv: string | null;
  /**
   * Data
   * @description Array of extracted records
   * @default null
   */
  data: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Executed At
   * @description Execution timestamp in ISO format
   * @default null
   */
  executedAt: string | null;
  /**
   * Pagination
   * @description Pagination information
   * @default null
   */
  pagination: {
      /**
       * Limit
       * @description Items per page
       */
      limit: number;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Total Count
       * @description Total number of items
       */
      totalCount: number;
      /**
       * Total Pages
       * @description Total number of pages
       */
      totalPages: number;
  } | null;
  /**
   * Run Id
   * @description Run identifier
   * @default null
   */
  runId: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Workflow Id
   * @description Workflow identifier
   * @default null
   */
  workflowId: string | null;
};

/**
 * Type of KADOA's KADOA_GET_NOTIFICATION_CHANNEL tool input.
 */
type KADOA_GET_NOTIFICATION_CHANNEL_INPUT = {
  /**
   * Channel Id
   * @description Unique identifier of the notification channel
   */
  channel_id?: string;
};

/**
 * Type of KADOA's KADOA_GET_NOTIFICATION_CHANNEL tool output.
 */
type KADOA_GET_NOTIFICATION_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Response data containing channel information
   */
  data?: {
      /**
       * Channel
       * @description The notification channel details
       */
      channel: {
          /**
           * Channel Type
           * @enum {string}
           */
          channelType: "EMAIL" | "SLACK" | "WEBHOOK" | "WEBSOCKET";
          /**
           * Config
           * @description Channel-type-specific configuration
           */
          config: {
              /**
               * Channel
               * @description Slack channel name (for SLACK channels)
               * @default null
               */
              channel: string | null;
              /**
               * From Address
               * @description Sender address (for EMAIL channels)
               * @default null
               */
              from_address: string | null;
              /**
               * Recipients
               * @description Email recipients (for EMAIL channels)
               * @default null
               */
              recipients: string[] | null;
              /**
               * Url
               * @description URL for WEBHOOK or WEBSOCKET channels
               * @default null
               */
              url: string | null;
              /**
               * Webhook Url
               * @description Slack webhook URL (for SLACK channels)
               * @default null
               */
              webhookUrl: string | null;
          };
          /**
           * Created At
           * @description Timestamp when the channel was created
           */
          createdAt: string;
          /**
           * Id
           * @description Channel identifier
           */
          id: string;
          /**
           * Name
           * @description Channel name
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the channel was last updated
           */
          updatedAt: string;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Additional message
   */
  message?: string;
  /**
   * Status
   * @description Operation status text
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KADOA's KADOA_GET_NOTIFICATION_SETTING tool input.
 */
type KADOA_GET_NOTIFICATION_SETTING_INPUT = {
  /**
   * Settings Id
   * @description Identifier of the notification setting to retrieve.
   */
  settingsId?: string;
};

/**
 * Type of KADOA's KADOA_GET_NOTIFICATION_SETTING tool output.
 */
type KADOA_GET_NOTIFICATION_SETTING_OUTPUT = {
  /**
   * Data
   * @description Payload containing the notification settings.
   */
  data?: {
      /**
       * Settings
       * @description Notification settings object.
       */
      settings: {
          /**
           * Channels
           * @description List of linked channels for this setting.
           */
          channels: {
              /**
               * Channel Type
               * @description Type of the channel.
               */
              channelType: string;
              /**
               * Id
               * @description Channel identifier.
               */
              id: string;
              /**
               * Name
               * @description Channel name.
               */
              name: string;
          }[];
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format.
           */
          createdAt: string;
          /**
           * Enabled
           * @description Whether the setting is active.
           */
          enabled: boolean;
          /**
           * Event Configuration
           * @description Event-specific configuration parameters.
           */
          eventConfiguration: {
              [key: string]: unknown;
          };
          /**
           * Event Type
           * @description Event type key.
           */
          eventType: string;
          /**
           * Id
           * @description Settings identifier.
           */
          id: string;
          /**
           * Updated At
           * @description Last update timestamp in ISO 8601 format.
           */
          updatedAt: string;
          /**
           * Workflow Id
           * @description Associated workflow identifier, if applicable.
           * @default null
           */
          workflowId: string | null;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Additional response message.
   */
  message?: string;
  /**
   * Status
   * @description API response status.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KADOA's KADOA_GET_VALIDATION_CONFIG tool input.
 */
type KADOA_GET_VALIDATION_CONFIG_INPUT = {
  /**
   * Workflow Id
   * @description ID of the workflow to retrieve validation configuration for
   */
  workflowId?: string;
};

/**
 * Type of KADOA's KADOA_GET_VALIDATION_CONFIG tool output.
 */
type KADOA_GET_VALIDATION_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Data Linking
       * @description Data linking configuration
       */
      dataLinking: {
          /**
           * Enabled
           * @description Whether data linking is enabled
           */
          enabled: boolean;
          /**
           * Linking Columns
           * @description Columns used for data linking
           */
          linkingColumns: string[];
      };
      /**
       * Data Validation
       * @description Data validation configuration
       */
      dataValidation: {
          /**
           * Alerting
           * @description Alerting settings for data validation
           */
          alerting: {
              /**
               * System
               * @description System alerting configuration
               */
              system: {
                  /**
                   * Enabled
                   * @description Whether system alerts are enabled
                   */
                  enabled: boolean;
                  /**
                   * Threshold
                   * @description Threshold value for system alerts
                   */
                  threshold: number;
              };
              /**
               * User
               * @description User alerting configuration
               */
              user: {
                  /**
                   * Enabled
                   * @description Whether user alerts are enabled
                   */
                  enabled: boolean;
                  /**
                   * Threshold
                   * @description Threshold value for user alerts
                   */
                  threshold: number;
              };
          };
          /**
           * Enabled
           * @description Whether data validation is enabled
           */
          enabled: boolean;
          /**
           * Rule Counts
           * @description Counts of validation rules
           */
          ruleCounts: {
              /**
               * Disabled
               * @description Count of disabled validation rules
               */
              disabled: number;
              /**
               * Enabled
               * @description Count of enabled validation rules
               */
              enabled: number;
              /**
               * Error
               * @description Indicates if there was an error counting rules
               */
              error: boolean;
              /**
               * Preview
               * @description Count of rules in preview mode
               */
              preview: number;
          };
      };
      /**
       * Error
       * @description Indicates if an error occurred
       */
      error: boolean;
      /**
       * Workflow Id
       * @description ID of the workflow
       */
      workflowId: string;
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
 * Type of KADOA's KADOA_GET_WORKFLOWS tool input.
 */
type KADOA_GET_WORKFLOWS_INPUT = {
  /**
   * Limit
   * @description Maximum number of items to return, must be >= 1
   * @default 25
   */
  limit: number;
  /**
   * Monitoring
   * @description Filter by monitoring status (true or false)
   * @default null
   */
  monitoring: boolean | null;
  /**
   * Search
   * @description Search term to filter workflows by name or URL
   * @default null
   */
  search: string | null;
  /**
   * Skip
   * @description Number of items to skip (offset), must be >= 0
   * @default 0
   */
  skip: number;
  /**
   * State
   * @description Filter by workflow state
   * @default null
   * @enum {string|null}
   */
  state: "ACTIVE" | "ERROR" | "PAUSED" | "NOT_SUPPORTED" | null;
  /**
   * Update Interval
   * @description Filter by update interval
   * @default null
   * @enum {string|null}
   */
  updateInterval: "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY" | null;
};

/**
 * Type of KADOA's KADOA_GET_WORKFLOWS tool output.
 */
type KADOA_GET_WORKFLOWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination details for the workflows list
       */
      pagination: {
          /**
           * Limit
           * @description Number of items per page
           */
          limit: number;
          /**
           * Page
           * @description Current page number
           */
          page: number;
          /**
           * Total Count
           * @description Total number of items across all pages
           */
          totalCount: number;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          totalPages: number;
      };
      /**
       * Workflows
       * @description List of retrieved workflows
       */
      workflows: {
          /**
           *  Id
           * @description Unique identifier of the workflow
           */
          _id: string;
          /**
           * Created At
           * @description Creation timestamp in ISO format
           */
          createdAt: string;
          /**
           * Data Key
           * @description Key to identify the data of the workflow
           */
          dataKey: string;
          /**
           * Display State
           * @description Aggregated state for frontend display
           * @enum {string}
           */
          displayState: "ACTIVE" | "ERROR" | "PAUSED" | "NOT_SUPPORTED" | "PREVIEW" | "QUEUED" | "SETUP_RUNNING" | "ERROR_SETUP" | "DRAFT" | "RUNNING";
          /**
           * Finished At
           * @description Timestamp when the workflow last finished
           * @default null
           */
          finishedAt: string | null;
          /**
           * Is Advanced
           * @description Whether the workflow uses advanced mode
           */
          isAdvanced: boolean;
          /**
           * Limit
           * @description Configured limit of items per run
           */
          limit: number;
          /**
           * Location
           * @description Location settings of the workflow
           */
          location: {
              /**
               * Iso Code
               * @description ISO code of the location
               * @enum {string}
               */
              isoCode: "DE" | "US" | "GB" | "NL" | "CA";
              /**
               * Type
               * @description Type of location assignment
               * @enum {string}
               */
              type: "auto" | "manual";
          };
          /**
           * Name
           * @description Name of the workflow
           */
          name: string;
          /**
           * Protocol
           * @description Protocol used by the workflow
           */
          protocol: string;
          /**
           * Run Costs
           * @description Recorded cost of the last run
           */
          runCosts: number;
          /**
           * Run State
           * @description State of the last run
           */
          runState: string;
          /**
           * Schema
           * @description Schema definition of the workflow data
           */
          schema: {
              [key: string]: unknown;
          };
          /**
           * Schema Type
           * @description Type of schema
           * @enum {string}
           */
          schemaType: "DETAIL" | "DIRECTORY";
          /**
           * Started At
           * @description Timestamp when the workflow last started
           * @default null
           */
          startedAt: string | null;
          /**
           * State
           * @description Actual workflow state in database
           * @enum {string}
           */
          state: "ACTIVE" | "ERROR" | "PAUSED" | "NOT_SUPPORTED" | "PREVIEW" | "QUEUED" | "SETUP_RUNNING" | "ERROR_SETUP";
          /**
           * Template Name
           * @description Name of the template used for the workflow
           */
          templateName: string;
          /**
           * Total Records
           * @description Total records processed in the last run
           */
          totalRecords: number;
          /**
           * Url
           * @description URL endpoint of the workflow
           */
          url: string;
          /**
           * User Id
           * @description ID of the user who created the workflow
           */
          userId: string;
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
 * Type of KADOA's KADOA_GET_WORKFLOW_RUN_HISTORY tool input.
 */
type KADOA_GET_WORKFLOW_RUN_HISTORY_INPUT = {
  /**
   * Workflow Id
   * @description Unique ID of the workflow whose run history is requested
   */
  workflowId?: string;
};

/**
 * Type of KADOA's KADOA_GET_WORKFLOW_RUN_HISTORY tool output.
 */
type KADOA_GET_WORKFLOW_RUN_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Workflow Id
       * @description Workflow identifier
       */
      workflowId: string;
      /**
       * Workflow Runs
       * @description List of workflow run records
       */
      workflowRuns: {
          /**
           * Credits
           * @description Credits used for this run
           */
          credits: number;
          /**
           * Finished At
           * @description Run end time in ISO format; may be null if still in progress
           * @default null
           */
          finishedAt: string | null;
          /**
           * Id
           * @description Run ID
           */
          id: string;
          /**
           * Protocol
           * @description Agent protocol details
           */
          protocol: {
              /**
               * Decision
               * @description Agent decision
               */
              decision: string;
              /**
               * Reasoning
               * @description Agent reasoning
               */
              reasoning: string;
          };
          /**
           * Records
           * @description Number of records processed
           */
          records: number;
          /**
           * Screenshot
           * @description Screenshot reference for the run
           * @default null
           */
          screenshot: string | null;
          /**
           * Started At
           * @description Run start time in ISO format
           */
          startedAt: string;
          /**
           * State
           * @description Run state (e.g., IN_PROGRESS)
           */
          state: string;
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
 * Type of KADOA's KADOA_GET_WORKFLOW_VALIDATION_RESULTS tool input.
 */
type KADOA_GET_WORKFLOW_VALIDATION_RESULTS_INPUT = {
  /**
   * Include Dry Run
   * @description Whether to include dry-run validation results
   * @default false
   */
  includeDryRun: boolean;
  /**
   * Job Id
   * @description Identifier of the job within the workflow
   */
  jobId?: string;
  /**
   * Workflow Id
   * @description Identifier of the workflow to fetch validation results for
   */
  workflowId?: string;
};

/**
 * Type of KADOA's KADOA_GET_WORKFLOW_VALIDATION_RESULTS tool output.
 */
type KADOA_GET_WORKFLOW_VALIDATION_RESULTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Anomalies By Rule
       * @description Detailed per-rule anomalies list
       */
      anomaliesByRule: {
          /**
           * Anomalies
           * @description List of anomalies for the rule
           */
          anomalies: {
              /**
               *   Bad Value
               * @description Value that failed validation
               */
              __bad_value__: unknown;
              /**
               *   Column
               * @description Column of the anomaly
               */
              __column__: string;
              /**
               *   Id
               * @description Record identifier where anomaly occurred
               */
              __id__: string;
              /**
               *   Rule
               * @description Rule that generated the anomaly
               */
              __rule__: string;
              /**
               *   Status
               * @description Status of the anomaly
               */
              __status__: string;
              /**
               *   Type
               * @description Anomaly type
               */
              __type__: string;
          }[];
          /**
           * Pagination
           * @description Pagination info for anomalies list
           */
          pagination: {
              /**
               * Page
               * @description Current page number
               */
              page: number;
              /**
               * Page Size
               * @description Number of items per page
               */
              pageSize: number;
              /**
               * Total Items
               * @description Total number of items
               */
              totalItems: number;
              /**
               * Total Pages
               * @description Total number of pages
               */
              totalPages: number;
          };
          /**
           * Rule Name
           * @description Name of the rule
           */
          ruleName: string;
      }[];
      /**
       * Anomalies Count By Rule
       * @description Counts of anomalies grouped by rule
       */
      anomaliesCountByRule: {
          [key: string]: number;
      };
      /**
       * Anomalies Count Total
       * @description Total number of anomalies found
       */
      anomaliesCountTotal: number;
      /**
       * Anomalies Parquet Path
       * @description Path to anomalies parquet file
       * @default null
       */
      anomaliesParquetPath: string | null;
      /**
       * Cdc
       * @description Change data capture summary
       */
      cdc: {
          /**
           * Anomalies Status Parquet Path
           * @description Parquet path for status data
           */
          anomaliesStatusParquetPath: string;
          /**
           * Anomaly Count Changes
           * @description Summary of anomaly count changes
           */
          anomalyCountChanges: {
              /**
               * Anomalies Count By Rule
               * @description Delta counts per rule
               */
              anomaliesCountByRule: {
                  [key: string]: {
                      /**
                       * Change
                       * @description Change from previous count
                       */
                      change: number;
                      /**
                       * Count
                       * @description Anomaly count
                       */
                      count: number;
                  };
              };
              /**
               * Anomalies Count Total
               * @description Total anomalies count and delta
               */
              anomaliesCountTotal: {
                  /**
                   * Change
                   * @description Change from previous count
                   */
                  change: number;
                  /**
                   * Count
                   * @description Anomaly count
                   */
                  count: number;
              };
              /**
               * Previous Job Id
               * @description Previous job identifier
               */
              previousJobId: string;
              /**
               * Previous Validation Id
               * @description Previous validation identifier
               */
              previousValidationId: string;
          };
          /**
           * Status Counts
           * @description Counts by anomaly status
           */
          statusCounts: {
              /**
               * New
               * @description Count of new anomalies
               */
              NEW: number;
              /**
               * Ongoing
               * @description Count of ongoing anomalies
               */
              ONGOING: number;
              /**
               * Reopened
               * @description Count of reopened anomalies
               */
              REOPENED: number;
              /**
               * Resolved
               * @description Count of resolved anomalies
               */
              RESOLVED: number;
          };
          /**
           * Strategy
           * @description Change data capture strategy used
           */
          strategy: string;
      };
      /**
       * Completed At
       * @description Timestamp when validation completed
       */
      completedAt: string;
      /**
       * Created At
       * @description Timestamp when validation started
       */
      createdAt: string;
      /**
       * Dataset Uri
       * @description URI of the dataset validated
       * @default null
       */
      datasetUri: string | null;
      /**
       * Error
       * @description Error message if validation failed
       * @default null
       */
      error: string | null;
      /**
       * Id
       * @description Unique validation identifier
       */
      id: string;
      /**
       * Is Dry Run
       * @description Whether validation was dry run
       */
      isDryRun: boolean;
      /**
       * Is Workflow Triggered
       * @description Triggered by workflow run
       */
      isWorkflowTriggered: boolean;
      /**
       * Job Id
       * @description Job identifier within workflow
       */
      jobId: string;
      /**
       * Metadata
       * @description Detailed execution metadata
       */
      metadata: {
          /**
           * Custom Rules
           * @description List of custom rules executed
           */
          customRules: {
              /**
               * Description
               * @description Description of the custom rule
               */
              description: string;
              /**
               * Name
               * @description Name of the custom rule
               */
              name: string;
              /**
               * Parameters
               * @description Custom rule parameters
               */
              parameters: {
                  [key: string]: unknown;
              };
              /**
               * Rule Type
               * @description Type of the custom rule
               */
              ruleType: string;
              /**
               * Target Columns
               * @description Columns targeted by the rule
               */
              targetColumns: string[];
          }[];
          /**
           * Invalid Rules
           * @description Rules that failed to execute
           */
          invalidRules: {
              /**
               * Error
               * @description Error encountered for this rule
               */
              error: string;
              /**
               * Name
               * @description Name of the invalid rule
               */
              name: string;
          }[];
          /**
           * Library Rules
           * @description List of library rules executed
           */
          libraryRules: {
              /**
               * Description
               * @description Description of the library rule
               */
              description: string;
              /**
               * Id
               * @description Identifier of the library rule
               */
              id: string;
              /**
               * Name
               * @description Name of the library rule
               */
              name: string;
              /**
               * Parameters
               * @description Library rule parameters
               */
              parameters: {
                  [key: string]: unknown;
              };
              /**
               * Target Columns
               * @description Columns targeted by the rule
               */
              targetColumns: string[];
          }[];
          /**
           * Records Validated
           * @description Number of records validated
           */
          recordsValidated: number;
          /**
           * Total Rules Executed
           * @description Total number of rules executed
           */
          totalRulesExecuted: number;
          /**
           * Used Prompt
           * @description Prompt used for validation
           */
          usedPrompt: string;
      };
      /**
       * Schema Issues
       * @description Schema comparison issues
       */
      schemaIssues: {
          /**
           * Extra Columns
           * @description Columns not present in schema but in dataset
           */
          extraColumns: string[];
          /**
           * Missing Columns
           * @description Columns missing from dataset
           */
          missingColumns: string[];
          /**
           * Missing Required Columns
           * @description Required columns missing
           */
          missingRequiredColumns: string[];
      };
      /**
       * Strategy
       * @description Validation strategy used
       * @enum {string}
       */
      strategy: "ISOLATED" | "LINKING_COLUMNS";
      /**
       * Updated At
       * @description Timestamp when validation last updated
       */
      updatedAt: string;
      /**
       * Workflow Id
       * @description Workflow identifier
       */
      workflowId: string;
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
 * Type of KADOA's KADOA_LIST_VALIDATION_RULES tool input.
 */
type KADOA_LIST_VALIDATION_RULES_INPUT = {
  /**
   * Group Id
   * @description Group ID to filter validation rules
   * @default null
   */
  groupId: string | null;
  /**
   * Include Deleted
   * @description Whether to include soft-deleted rules (admin only)
   * @default false
   */
  includeDeleted: boolean | null;
  /**
   * Page
   * @description Page number for pagination, must be ≥ 1
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of items per page, between 1 and 100
   * @default 50
   */
  pageSize: number;
  /**
   * Status
   * @description Filter rules by status
   * @default null
   * @enum {string|null}
   */
  status: "preview" | "enabled" | "disabled" | null;
  /**
   * Workflow Id
   * @description Workflow ID to filter validation rules. Optional; if omitted returns rules across workflows.
   * @default null
   */
  workflowId: string | null;
};

/**
 * Type of KADOA's KADOA_LIST_VALIDATION_RULES tool output.
 */
type KADOA_LIST_VALIDATION_RULES_OUTPUT = {
  /**
   * Data
   * @description List of validation rules
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the rule was created
       */
      createdAt: string;
      /**
       * Deleted At
       * @description Soft-deletion timestamp if applicable
       * @default null
       */
      deletedAt: string | null;
      /**
       * Deleted Reason
       * @description Soft-deletion reason if applicable
       * @default null
       */
      deletedReason: string | null;
      /**
       * Description
       * @description Rule description
       * @default null
       */
      description: string | null;
      /**
       * Disabled Reason
       * @description Reason when rule is disabled
       * @default null
       */
      disabledReason: string | null;
      /**
       * Group Id
       * @description Rule group ID
       * @default null
       */
      groupId: string | null;
      /**
       * Id
       * @description Rule identifier
       */
      id: string;
      /**
       * Metadata
       * @description Additional metadata for the rule
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Name
       * @description Rule name
       */
      name: string;
      /**
       * Parameters
       * @description Rule-specific parameters object
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Rule Type
       * @description Type of the rule
       */
      ruleType: string;
      /**
       * Status
       * @description Rule status: preview|enabled|disabled
       */
      status: string;
      /**
       * Target Columns
       * @description List of target columns for the rule
       */
      targetColumns: string[];
      /**
       * Team Id
       * @description Team ID
       * @default null
       */
      teamId: string | null;
      /**
       * Updated At
       * @description Timestamp when the rule was last updated
       */
      updatedAt: string;
      /**
       * User Id
       * @description Creator user ID
       * @default null
       */
      userId: string | null;
      /**
       * Workflow Id
       * @description ID of the associated workflow
       */
      workflowId: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination information
   */
  pagination?: {
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Page Size
       * @description Number of items per page
       */
      pageSize: number;
      /**
       * Total Items
       * @description Total number of items
       */
      totalItems: number;
      /**
       * Total Pages
       * @description Total number of pages
       */
      totalPages: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KADOA's KADOA_POST_ADVANCED_WORKFLOW tool input.
 */
type KADOA_POST_ADVANCED_WORKFLOW_INPUT = {
  /**
   * Limit
   * @description Optional maximum number of steps allowed in the workflow
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description Optional user-friendly name for the new advanced workflow
   * @default null
   */
  name: string | null;
};

/**
 * Type of KADOA's KADOA_POST_ADVANCED_WORKFLOW tool output.
 */
type KADOA_POST_ADVANCED_WORKFLOW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Workflow Id
       * @description Identifier of the newly created advanced workflow
       */
      workflowId: string;
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
 * Type of KADOA's KADOA_POST_CRAWL tool input.
 */
type KADOA_POST_CRAWL_INPUT = {
  /**
   * Max Depth
   * @description Maximum depth to traverse during the crawl
   * @default null
   */
  maxDepth: number | null;
  /**
   * Max Pages
   * @description Maximum number of pages to crawl
   * @default null
   */
  maxPages: number | null;
  /**
   * Paths Filter In
   * @description List of path patterns to include in the crawl
   * @default null
   */
  pathsFilterIn: string[] | null;
  /**
   * Paths Filter Out
   * @description List of path patterns to exclude from the crawl
   * @default null
   */
  pathsFilterOut: string[] | null;
  /**
   * Proxy Country
   * @description Country code for proxy configuration, e.g., 'DE'
   * @default null
   */
  proxyCountry: string | null;
  /**
   * Start Urls
   * @description Multiple start URLs (mutually exclusive with 'url'). Must belong to same domain/subdomain
   * @default null
   */
  startUrls: string[] | null;
  /**
   * Strict Domain
   * @description Restrict crawler to the exact domain without subdomains
   * @default null
   */
  strictDomain: boolean | null;
  /**
   * Timeout
   * @description Maximum crawling time in milliseconds, e.g., 1800000 for 30 minutes
   * @default null
   */
  timeout: number | null;
  /**
   * Url
   * @description URL to start crawling, must be a valid URI
   * @default null
   */
  url: string | null;
};

/**
 * Type of KADOA's KADOA_POST_CRAWL tool output.
 */
type KADOA_POST_CRAWL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the session failed
       * @default null
       */
      error: string | null;
      /**
       * Message
       * @description Human-readable status message
       */
      message: string;
      /**
       * Session Id
       * @description Unique ID for the started crawl session
       */
      sessionId: string;
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
 * Type of KADOA's KADOA_POST_NOTIFICATION_SETTING tool input.
 */
type KADOA_POST_NOTIFICATION_SETTING_INPUT = {
  /**
   * Channel Ids
   * @description List of notification channel IDs to link with this setting.
   */
  channelIds?: string[];
  /**
   * Enabled
   * @description Whether the subscription is active. Defaults to true.
   * @default true
   */
  enabled: boolean | null;
  /**
   * Event Configuration
   * @description Configuration object for the event. Currently accepts an empty object; reserved for future extensions.
   */
  eventConfiguration?: {
      [key: string]: unknown;
  };
  /**
   * Event Type
   * @description Type of event to subscribe to.
   * @enum {string}
   */
  eventType?: "workflow_started" | "workflow_finished" | "workflow_failed" | "workflow_sample_finished" | "workflow_data_change" | "system_maintenance" | "service_degradation" | "credits_low" | "free_trial_ending";
  /**
   * Workflow Id
   * @description Workflow ID to scope the setting; omit for a workspace-level setting.
   * @default null
   */
  workflowId: string | null;
};

/**
 * Type of KADOA's KADOA_POST_NOTIFICATION_SETTING tool output.
 */
type KADOA_POST_NOTIFICATION_SETTING_OUTPUT = {
  /**
   * Data
   * @description Container for the created setting.
   */
  data?: {
      /**
       * Settings
       * @description Notification settings object.
       */
      settings: {
          /**
           * Channels
           * @description List of linked channels for this setting.
           */
          channels: {
              /**
               * Channel Type
               * @description Type of the channel.
               */
              channelType: string;
              /**
               * Id
               * @description Channel identifier.
               */
              id: string;
              /**
               * Name
               * @description Channel name.
               */
              name: string;
          }[];
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format.
           */
          createdAt: string;
          /**
           * Enabled
           * @description Whether the setting is active.
           */
          enabled: boolean;
          /**
           * Event Configuration
           * @description Event-specific configuration parameters.
           */
          eventConfiguration: {
              [key: string]: unknown;
          };
          /**
           * Event Type
           * @description Event type key.
           */
          eventType: string;
          /**
           * Id
           * @description Settings identifier.
           */
          id: string;
          /**
           * Updated At
           * @description Last update timestamp in ISO 8601 format.
           */
          updatedAt: string;
          /**
           * Workflow Id
           * @description Associated workflow identifier, if applicable.
           * @default null
           */
          workflowId: string | null;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Human-readable response message.
   */
  message?: string;
  /**
   * Status
   * @description API response status.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KADOA's KADOA_POST_NOTIFICATION_TEST tool input.
 */
type KADOA_POST_NOTIFICATION_TEST_INPUT = {
  /**
   * Event Type
   * @description Event type to simulate; one of the supported notification event types
   * @enum {string}
   */
  eventType?: "workflow_data_change" | "workflow_sample_finished" | "workflow_finished" | "workflow_failed" | "workflow_validation_anomaly_change";
  /**
   * Workflow Id
   * @description Optional workflow ID to scope the test event
   * @default null
   */
  workflowId: string | null;
};

/**
 * Type of KADOA's KADOA_POST_NOTIFICATION_TEST tool output.
 */
type KADOA_POST_NOTIFICATION_TEST_OUTPUT = {
  /**
   * Data
   * @description Wrapper for the test event details
   */
  data?: {
      /**
       * Event Id
       * @description Identifier of the generated mock event
       */
      eventId: string;
      /**
       * Event Type
       * @description Event type used for the test
       */
      eventType: string;
      /**
       * Workflow Id
       * @description Workflow ID if provided
       * @default null
       */
      workflowId: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Human-readable message
   */
  message?: string;
  /**
   * Status
   * @description Request status code
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KADOA's KADOA_POST_WEBHOOK_SUBSCRIPTION tool input.
 */
type KADOA_POST_WEBHOOK_SUBSCRIPTION_INPUT = {
  /**
   * Channel Name
   * @description Optional name for the created webhook channel. If omitted, a default will be used.
   * @default null
   */
  channelName: string | null;
  /**
   * Events
   * @description List of event names to subscribe to. Fetch valid event types via GET /v5/notifications/events.
   */
  events?: string[];
  /**
   * Webhook Http Method
   * @description HTTP method to use when sending the webhook
   * @enum {string}
   */
  webhookHttpMethod?: "GET" | "POST";
  /**
   * Webhook Url
   * Format: uri
   * @description Destination URL for webhook deliveries
   */
  webhookUrl?: unknown;
  /**
   * Workflow Id
   * @description Optional workflow ID to scope the subscription. Omit for workspace-level.
   * @default null
   */
  workflowId: string | null;
};

/**
 * Type of KADOA's KADOA_POST_WEBHOOK_SUBSCRIPTION tool output.
 */
type KADOA_POST_WEBHOOK_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the created webhook subscription (notification setting)
       */
      id: string;
      /**
       * Message
       * @description Success message returned from API
       */
      message: string;
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
 * Type of KADOA's KADOA_POST_WORKFLOW tool input.
 */
type KADOA_POST_WORKFLOW_INPUT = {
  /**
   * Auto Start
   * @description If true, automatically start the workflow after creation
   * @default true
   */
  autoStart: boolean | null;
  /**
   * Bypass Preview
   * @description If true, bypass preview and install immediately
   * @default false
   */
  bypassPreview: boolean | null;
  /**
   * Description
   * @description Workflow description, max 500 characters
   * @default null
   */
  description: string | null;
  /**
   * Entity
   * @description Entity name for extraction; required unless using agentic-navigation or schemaId
   * @default null
   */
  entity: string | null;
  /**
   * Fields
   * @description Schema fields for extraction; required unless using agentic-navigation or schemaId
   * @default null
   */
  fields: {
      /**
       * Data Type
       * @description Data type of the field, e.g., 'string', 'integer'
       */
      dataType: string;
      /**
       * Description
       * @description Description of this field
       * @default null
       */
      description: string | null;
      /**
       * Example
       * @description Example value for this field
       * @default null
       */
      example: string | null;
      /**
       * Name
       * @description Name of the field to extract
       */
      name: string;
  }[] | null;
  /**
   * Interactions
   * @description Browser interactions to perform before scraping
   * @default null
   */
  interactions: {
      /**
       * Selector
       * @description CSS selector to target
       * @default null
       */
      selector: string | null;
      /**
       * Text
       * @description Text to input, if applicable
       * @default null
       */
      text: string | null;
      /**
       * Type
       * @description Type of browser interaction, e.g., 'click', 'type'
       */
      type: string;
  }[] | null;
  /**
   * Interval
   * @description Update frequency for the workflow
   * @default null
   * @enum {string|null}
   */
  interval: "ONLY_ONCE" | "EVERY_10_MINUTES" | "HALF_HOURLY" | "HOURLY" | "THREE_HOURLY" | "SIX_HOURLY" | "TWELVE_HOURLY" | "EIGHTEEN_HOURLY" | "DAILY" | "TWO_DAY" | "THREE_DAY" | "WEEKLY" | "BIWEEKLY" | "TRIWEEKLY" | "FOUR_WEEKLY" | "MONTHLY" | "REAL_TIME" | "CUSTOM" | null;
  /**
   * Limit
   * @description Maximum number of items to scrape
   * @default null
   */
  limit: number | null;
  /**
   * LocationConfig
   * @description Location configuration for scraping.
   * @default null
   */
  location: {
      /**
       * Iso Code
       * @description ISO code for the location
       * @default null
       */
      isoCode: string | null;
      /**
       * Type
       * @description Location type, e.g., 'auto'
       * @default null
       */
      type: string | null;
  } | null;
  /**
   * Monitoring
   * @description Monitoring configuration object
   * @default null
   */
  monitoring: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Human-readable name of the workflow
   * @default null
   */
  name: string | null;
  /**
   * Navigation Mode
   * @description Navigation mode; 'agentic-navigation' requires userPrompt
   * @enum {string}
   */
  navigationMode?: "single-page" | "paginated-page" | "page-and-detail" | "agentic-navigation";
  /**
   * Schedules
   * @description Cron expressions for custom schedules
   * @default null
   */
  schedules: string[] | null;
  /**
   * Schema Id
   * @description Reference an existing schema instead of providing entity/fields
   * @default null
   */
  schemaId: string | null;
  /**
   * Tags
   * @description Tags for categorization
   * @default null
   */
  tags: string[] | null;
  /**
   * Urls
   * @description List of URLs to scrape
   */
  urls?: string[];
  /**
   * User Prompt
   * @description Prompt for agentic-navigation; required when navigationMode is 'agentic-navigation'
   * @default null
   */
  userPrompt: string | null;
};

/**
 * Type of KADOA's KADOA_POST_WORKFLOW tool output.
 */
type KADOA_POST_WORKFLOW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Info
       * @description Additional information about workflow creation
       * @default null
       */
      info: string | null;
      /**
       * Success
       * @description Indicates if workflow creation was successful
       */
      success: boolean;
      /**
       * Workflow Id
       * @description ID of the created workflow
       */
      workflowId: string;
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
 * Type of KADOA's KADOA_POST_WORKFLOW_MONITORING tool input.
 */
type KADOA_POST_WORKFLOW_MONITORING_INPUT = {
  /**
   * MonitoringConfig
   * @description Monitoring configuration for this workflow
   * @default null
   */
  monitoring: {
      /**
       * MonitoringConditions
       * @description Conditional rules for monitoring
       * @default null
       */
      conditions: {
          /**
           * Conditions
           * @description Array of conditions
           * @default null
           */
          conditions: {
              /**
               * Field
               * @description Field to evaluate
               * @default null
               */
              field: string | null;
              /**
               * Operator
               * @description Comparison operator
               * @default null
               */
              operator: string | null;
              /**
               * Type
               * @description Condition type
               * @default null
               */
              type: string | null;
              /**
               * Value
               * @description Comparison value
               * @default null
               */
              value: string | null;
          }[] | null;
          /**
           * Logical Operator
           * @description Logical operator to combine conditions
           * @default null
           */
          logicalOperator: string | null;
      } | null;
      /**
       * Enabled
       * @description Enable/disable monitoring
       */
      enabled: boolean;
      /**
       * Fields
       * @description Field-level change tracking
       * @default null
       */
      fields: {
          /**
           * Field Name
           * @description Field to track for changes
           */
          fieldName: string;
          /**
           * Operator
           * @description Change operator, e.g., 'changed'
           * @default changed
           */
          operator: string | null;
      }[] | null;
  } | null;
  /**
   * Schedules
   * @description Cron expressions for custom schedules (required if updateInterval is CUSTOM)
   * @default null
   */
  schedules: string[] | null;
  /**
   * Update Interval
   * @description Update interval for the workflow
   * @default null
   * @enum {string|null}
   */
  updateInterval: "ONLY_ONCE" | "EVERY_10_MINUTES" | "HALF_HOURLY" | "HOURLY" | "THREE_HOURLY" | "SIX_HOURLY" | "TWELVE_HOURLY" | "EIGHTEEN_HOURLY" | "DAILY" | "TWO_DAY" | "THREE_DAY" | "WEEKLY" | "BIWEEKLY" | "TRIWEEKLY" | "FOUR_WEEKLY" | "MONTHLY" | "REAL_TIME" | "CUSTOM" | null;
  /**
   * Workflow Id
   * @description Workflow ID to update
   */
  workflowId?: string;
};

/**
 * Type of KADOA's KADOA_POST_WORKFLOW_MONITORING tool output.
 */
type KADOA_POST_WORKFLOW_MONITORING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information from the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the operation was successful.
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
 * Type of KADOA's KADOA_POST_WORKFLOW_VALIDATION_RULE tool input.
 */
type KADOA_POST_WORKFLOW_VALIDATION_RULE_INPUT = {
  /**
   * Is Preview Run
   * @description Optional flag to indicate this is a preview run.
   * @default null
   */
  isPreviewRun: boolean | null;
  /**
   * Job Id
   * @description Optional client or job correlation identifier.
   * @default null
   */
  jobId: string | null;
  /**
   * Selected Columns
   * @description Optional list of column names to target when generating the rule.
   * @default null
   */
  selectedColumns: string[] | null;
  /**
   * User Prompt
   * @description Natural-language description of the validation rule to generate.
   */
  userPrompt?: string;
  /**
   * Workflow Id
   * @description ID of the workflow to which the validation rule will be added.
   */
  workflowId?: string;
};

/**
 * Type of KADOA's KADOA_POST_WORKFLOW_VALIDATION_RULE tool output.
 */
type KADOA_POST_WORKFLOW_VALIDATION_RULE_OUTPUT = {
  /**
   * Data
   * @description The created validation rule object.
   */
  data?: {
      /**
       * Created At
       * @description ISO datetime when the rule was created.
       */
      createdAt: string;
      /**
       * Deleted At
       * @description ISO datetime when the rule was deleted, if applicable.
       * @default null
       */
      deletedAt: string | null;
      /**
       * Deleted Reason
       * @description Reason for deletion, if applicable.
       * @default null
       */
      deletedReason: string | null;
      /**
       * Description
       * @description Description of the validation rule.
       */
      description: string;
      /**
       * Disabled Reason
       * @description Reason why the rule is disabled, if any.
       * @default null
       */
      disabledReason: string | null;
      /**
       * Group Id
       * @description ID of the group owning the rule.
       */
      groupId: string;
      /**
       * Id
       * @description Unique identifier of the validation rule.
       */
      id: string;
      /**
       * Metadata
       * @description Additional metadata for the rule.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description Name of the validation rule.
       */
      name: string;
      /**
       * Parameters
       * @description Parameters and SQL for the validation rule.
       */
      parameters: {
          /**
           * Params
           * @description List of parameters for the SQL query.
           */
          params: unknown[];
          /**
           * Prompt
           * @description Original prompt used to generate the rule.
           */
          prompt: string;
          /**
           * Sql
           * @description Generated SQL expression for the validation rule.
           */
          sql: string;
      };
      /**
       * Rule Type
       * @description Type of the rule (e.g., custom_sql).
       */
      ruleType: string;
      /**
       * Status
       * @description Current status of the rule (e.g., preview).
       */
      status: string;
      /**
       * Target Columns
       * @description Columns targeted by the rule.
       */
      targetColumns: string[];
      /**
       * Team Id
       * @description ID of the team associated with the rule.
       */
      teamId: string;
      /**
       * Updated At
       * @description ISO datetime when the rule was last updated.
       */
      updatedAt: string;
      /**
       * User Id
       * @description ID of the user who created the rule.
       */
      userId: string;
      /**
       * Workflow Id
       * @description ID of the workflow.
       */
      workflowId: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Details about the operation status.
   */
  message?: string;
  /**
   * Metadata
   * @description Additional response metadata.
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KADOA's KADOA_PUT_NOTIFICATION_CHANNEL tool input.
 */
type KADOA_PUT_NOTIFICATION_CHANNEL_INPUT = {
  /**
   * Channel Id
   * @description ID of the notification channel to update
   */
  channelId?: string;
  /**
   * Channel Type
   * @description Type of the notification channel
   * @enum {string}
   */
  channelType?: "EMAIL" | "SLACK" | "WEBHOOK" | "WEBSOCKET";
  /**
   * Config
   * @description Channel-specific configuration object
   */
  config?: {
      [key: string]: unknown;
  };
  /**
   * Name
   * @description Human-readable name for the notification channel
   */
  name?: string;
};

/**
 * Type of KADOA's KADOA_PUT_NOTIFICATION_CHANNEL tool output.
 */
type KADOA_PUT_NOTIFICATION_CHANNEL_OUTPUT = {
  /**
   * Data
   * @description Container for the updated notification channel
   */
  data?: {
      [key: string]: {
          /**
           * Channeltype
           * @enum {string}
           */
          channelType: "EMAIL" | "SLACK" | "WEBHOOK" | "WEBSOCKET";
          /** Config */
          config: {
              [key: string]: unknown;
          };
          /**
           * Createdat
           * Format: date-time
           */
          createdAt: string;
          /** Id */
          id: string;
          /** Name */
          name: string;
          /**
           * Updatedat
           * Format: date-time
           */
          updatedAt: string;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Human-readable message
   */
  message?: string;
  /**
   * Status
   * @description Operation status code
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KADOA's KADOA_RUN_ADHOC_EXTRACTION tool input.
 */
type KADOA_RUN_ADHOC_EXTRACTION_INPUT = {
  /**
   * Link
   * @description The URL to scrape
   */
  link?: string;
  /**
   * Location
   * @description Proxy location settings, including selection type and ISO country code.
   * @default null
   */
  location: {
      /**
       * Iso Code
       * @description ISO country code for proxy location. Use codes from GET /v4/locations.
       * @default null
       */
      isoCode: string | null;
      /**
       * Type
       * @description Proxy selection method, e.g., 'manual'.
       * @default null
       */
      type: string | null;
  } | null;
  /**
   * Schema Id
   * @description Custom schema ID or one of 'html', 'body', 'markdown' to control output format
   */
  schemaId?: string;
};

/**
 * Type of KADOA's KADOA_RUN_ADHOC_EXTRACTION tool output.
 */
type KADOA_RUN_ADHOC_EXTRACTION_OUTPUT = {
  /**
   * Data
   * @description Extracted data payload (schema-based or raw).
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Link
   * @description The input URL that was scraped.
   */
  link?: string;
  /**
   * Location
   * @description Proxy location used for the request.
   * @default null
   */
  location: {
      /**
       * Iso Code
       * @description ISO country code for proxy location. Use codes from GET /v4/locations.
       * @default null
       */
      isoCode: string | null;
      /**
       * Type
       * @description Proxy selection method, e.g., 'manual'.
       * @default null
       */
      type: string | null;
  } | null;
  /**
   * Message
   * @description Optional informational or error message.
   * @default null
   */
  message: string | null;
  /**
   * Request Time Ms
   * @description Processing time in milliseconds.
   */
  requestTimeMs?: number;
  /**
   * Screenshot Url
   * @description URL of the captured page screenshot.
   * @default null
   */
  screenshotUrl: string | null;
  /**
   * Status
   * @description Status of the extraction request.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KADOA's KADOA_UNSUBSCRIBE_FROM_WEBHOOK_EVENTS tool input.
 */
type KADOA_UNSUBSCRIBE_FROM_WEBHOOK_EVENTS_INPUT = {
  /**
   * Settings Id
   * @description Identifier of the notification settings to delete (unsubscribe)
   */
  settingsId?: string;
};

/**
 * Type of KADOA's KADOA_UNSUBSCRIBE_FROM_WEBHOOK_EVENTS tool output.
 */
type KADOA_UNSUBSCRIBE_FROM_WEBHOOK_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Detailed message regarding the unsubscribe operation
       */
      message: string;
      /**
       * Status
       * @description Status of the unsubscribe operation
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
 * Type map of all available tool input types for toolkit "KADOA".
 */
export type KADOA_TOOL_INPUTS = {
  CREATE_NOTIFICATION_CHANNEL: KADOA_CREATE_NOTIFICATION_CHANNEL_INPUT
  ENABLE_DATA_VALIDATION: KADOA_ENABLE_DATA_VALIDATION_INPUT
  FETCH_WORKFLOW_CONFIGURATION: KADOA_FETCH_WORKFLOW_CONFIGURATION_INPUT
  GET_ALL_LOCATIONS: KADOA_GET_ALL_LOCATIONS_INPUT
  GET_CRAWLED_PAGES: KADOA_GET_CRAWLED_PAGES_INPUT
  GET_CRAWLED_PAGE_CONTENT: KADOA_GET_CRAWLED_PAGE_CONTENT_INPUT
  GET_CRAWL_STATUS: KADOA_GET_CRAWL_STATUS_INPUT
  GET_EVENT_TYPES: KADOA_GET_EVENT_TYPES_INPUT
  GET_LATEST_WORKFLOW_DATA: KADOA_GET_LATEST_WORKFLOW_DATA_INPUT
  GET_NOTIFICATION_CHANNEL: KADOA_GET_NOTIFICATION_CHANNEL_INPUT
  GET_NOTIFICATION_SETTING: KADOA_GET_NOTIFICATION_SETTING_INPUT
  GET_VALIDATION_CONFIG: KADOA_GET_VALIDATION_CONFIG_INPUT
  GET_WORKFLOWS: KADOA_GET_WORKFLOWS_INPUT
  GET_WORKFLOW_RUN_HISTORY: KADOA_GET_WORKFLOW_RUN_HISTORY_INPUT
  GET_WORKFLOW_VALIDATION_RESULTS: KADOA_GET_WORKFLOW_VALIDATION_RESULTS_INPUT
  LIST_VALIDATION_RULES: KADOA_LIST_VALIDATION_RULES_INPUT
  POST_ADVANCED_WORKFLOW: KADOA_POST_ADVANCED_WORKFLOW_INPUT
  POST_CRAWL: KADOA_POST_CRAWL_INPUT
  POST_NOTIFICATION_SETTING: KADOA_POST_NOTIFICATION_SETTING_INPUT
  POST_NOTIFICATION_TEST: KADOA_POST_NOTIFICATION_TEST_INPUT
  POST_WEBHOOK_SUBSCRIPTION: KADOA_POST_WEBHOOK_SUBSCRIPTION_INPUT
  POST_WORKFLOW: KADOA_POST_WORKFLOW_INPUT
  POST_WORKFLOW_MONITORING: KADOA_POST_WORKFLOW_MONITORING_INPUT
  POST_WORKFLOW_VALIDATION_RULE: KADOA_POST_WORKFLOW_VALIDATION_RULE_INPUT
  PUT_NOTIFICATION_CHANNEL: KADOA_PUT_NOTIFICATION_CHANNEL_INPUT
  RUN_ADHOC_EXTRACTION: KADOA_RUN_ADHOC_EXTRACTION_INPUT
  UNSUBSCRIBE_FROM_WEBHOOK_EVENTS: KADOA_UNSUBSCRIBE_FROM_WEBHOOK_EVENTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "KADOA".
 */
export type KADOA_TOOL_OUTPUTS = {
  CREATE_NOTIFICATION_CHANNEL: KADOA_CREATE_NOTIFICATION_CHANNEL_OUTPUT
  ENABLE_DATA_VALIDATION: KADOA_ENABLE_DATA_VALIDATION_OUTPUT
  FETCH_WORKFLOW_CONFIGURATION: KADOA_FETCH_WORKFLOW_CONFIGURATION_OUTPUT
  GET_ALL_LOCATIONS: KADOA_GET_ALL_LOCATIONS_OUTPUT
  GET_CRAWLED_PAGES: KADOA_GET_CRAWLED_PAGES_OUTPUT
  GET_CRAWLED_PAGE_CONTENT: KADOA_GET_CRAWLED_PAGE_CONTENT_OUTPUT
  GET_CRAWL_STATUS: KADOA_GET_CRAWL_STATUS_OUTPUT
  GET_EVENT_TYPES: KADOA_GET_EVENT_TYPES_OUTPUT
  GET_LATEST_WORKFLOW_DATA: KADOA_GET_LATEST_WORKFLOW_DATA_OUTPUT
  GET_NOTIFICATION_CHANNEL: KADOA_GET_NOTIFICATION_CHANNEL_OUTPUT
  GET_NOTIFICATION_SETTING: KADOA_GET_NOTIFICATION_SETTING_OUTPUT
  GET_VALIDATION_CONFIG: KADOA_GET_VALIDATION_CONFIG_OUTPUT
  GET_WORKFLOWS: KADOA_GET_WORKFLOWS_OUTPUT
  GET_WORKFLOW_RUN_HISTORY: KADOA_GET_WORKFLOW_RUN_HISTORY_OUTPUT
  GET_WORKFLOW_VALIDATION_RESULTS: KADOA_GET_WORKFLOW_VALIDATION_RESULTS_OUTPUT
  LIST_VALIDATION_RULES: KADOA_LIST_VALIDATION_RULES_OUTPUT
  POST_ADVANCED_WORKFLOW: KADOA_POST_ADVANCED_WORKFLOW_OUTPUT
  POST_CRAWL: KADOA_POST_CRAWL_OUTPUT
  POST_NOTIFICATION_SETTING: KADOA_POST_NOTIFICATION_SETTING_OUTPUT
  POST_NOTIFICATION_TEST: KADOA_POST_NOTIFICATION_TEST_OUTPUT
  POST_WEBHOOK_SUBSCRIPTION: KADOA_POST_WEBHOOK_SUBSCRIPTION_OUTPUT
  POST_WORKFLOW: KADOA_POST_WORKFLOW_OUTPUT
  POST_WORKFLOW_MONITORING: KADOA_POST_WORKFLOW_MONITORING_OUTPUT
  POST_WORKFLOW_VALIDATION_RULE: KADOA_POST_WORKFLOW_VALIDATION_RULE_OUTPUT
  PUT_NOTIFICATION_CHANNEL: KADOA_PUT_NOTIFICATION_CHANNEL_OUTPUT
  RUN_ADHOC_EXTRACTION: KADOA_RUN_ADHOC_EXTRACTION_OUTPUT
  UNSUBSCRIBE_FROM_WEBHOOK_EVENTS: KADOA_UNSUBSCRIBE_FROM_WEBHOOK_EVENTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's KADOA toolkit.
 */
export const KADOA = {
  slug: "kadoa",
  tools: {
    /**
     * Tool to create a notification channel for alerts delivery.
     */
    CREATE_NOTIFICATION_CHANNEL: "KADOA_CREATE_NOTIFICATION_CHANNEL",
    /**
     * Tool to enable data validation on a specified workflow. Use after creating or updating a workflow to enforce its validation rules.
     */
    ENABLE_DATA_VALIDATION: "KADOA_ENABLE_DATA_VALIDATION",
    /**
     * Tool to fetch an advanced workflow’s configuration details. Use when you have a workflow ID and need its steps and metadata.
     */
    FETCH_WORKFLOW_CONFIGURATION: "KADOA_FETCH_WORKFLOW_CONFIGURATION",
    /**
     * Tool to retrieve a list of all available locations. Use when you need to know supported locations before performing location-dependent operations. Use after authenticating with your API key.
     */
    GET_ALL_LOCATIONS: "KADOA_GET_ALL_LOCATIONS",
    /**
     * Tool to list pages crawled during a session. Use when you need to paginate through results after starting a crawl session.
     */
    GET_CRAWLED_PAGES: "KADOA_GET_CRAWLED_PAGES",
    /**
     * Tool to retrieve content of a crawled page. Use when you need the HTML or Markdown of a page from a specific crawling session.
     */
    GET_CRAWLED_PAGE_CONTENT: "KADOA_GET_CRAWLED_PAGE_CONTENT",
    /**
     * Tool to fetch current status of a crawling session. Use when you need to check progress of a crawl by its session ID.
     */
    GET_CRAWL_STATUS: "KADOA_GET_CRAWL_STATUS",
    /**
     * Tool to retrieve supported notification event types. Use when you need to enumerate available notification triggers.
     */
    GET_EVENT_TYPES: "KADOA_GET_EVENT_TYPES",
    /**
     * Tool to retrieve the most recent data produced by a workflow. Use after confirming workflowId.
     */
    GET_LATEST_WORKFLOW_DATA: "KADOA_GET_LATEST_WORKFLOW_DATA",
    /**
     * Tool to retrieve details of a specific notification channel. Use when you have a channel's ID and need its configuration.
     */
    GET_NOTIFICATION_CHANNEL: "KADOA_GET_NOTIFICATION_CHANNEL",
    /**
     * Tool to retrieve a specific notification setting by its identifier. Use when you need to fetch notification configuration details by ID.
     */
    GET_NOTIFICATION_SETTING: "KADOA_GET_NOTIFICATION_SETTING",
    /**
     * Tool to retrieve the configuration settings for data validation. Use when you need to inspect validation and linking settings for a specific workflow.
     */
    GET_VALIDATION_CONFIG: "KADOA_GET_VALIDATION_CONFIG",
    /**
     * Tool to retrieve all workflows. Use when you need to list and filter workflows after authenticating.
     */
    GET_WORKFLOWS: "KADOA_GET_WORKFLOWS",
    /**
     * Tool to fetch workflow run history. Use when you need to retrieve past run records for a workflow after execution.
     */
    GET_WORKFLOW_RUN_HISTORY: "KADOA_GET_WORKFLOW_RUN_HISTORY",
    /**
     * Tool to retrieve the latest validation results for a workflow job. Use after a workflow job completes to inspect its validation outcome.
     */
    GET_WORKFLOW_VALIDATION_RESULTS: "KADOA_GET_WORKFLOW_VALIDATION_RESULTS",
    /**
     * Tool to list all data validation rules with optional pagination and filtering.
     */
    LIST_VALIDATION_RULES: "KADOA_LIST_VALIDATION_RULES",
    /**
     * Tool to create an advanced workflow. Use when you need a valid advanced workflow ID before updating steps.
     */
    POST_ADVANCED_WORKFLOW: "KADOA_POST_ADVANCED_WORKFLOW",
    /**
     * Tool to start a web crawling session. Use when you need to initiate a crawl with configuration parameters.
     */
    POST_CRAWL: "KADOA_POST_CRAWL",
    /**
     * Tool to create a notification setting linking channels to events. Use when subscribing workflows or workspace-level notifications to specific events.
     */
    POST_NOTIFICATION_SETTING: "KADOA_POST_NOTIFICATION_SETTING",
    /**
     * Tool to send a test notification event. Use when verifying your notification channel configurations.
     */
    POST_NOTIFICATION_TEST: "KADOA_POST_NOTIFICATION_TEST",
    /**
     * Tool to subscribe to specified webhook events. This will create a webhook channel and then create notification settings for the provided events linking that channel.
     */
    POST_WEBHOOK_SUBSCRIPTION: "KADOA_POST_WEBHOOK_SUBSCRIPTION",
    /**
     * Tool to create a new workflow in kadoa. Use after configuring URLs and schema or prompt.
     */
    POST_WORKFLOW: "KADOA_POST_WORKFLOW",
    /**
     * Tool to configure monitoring for a workflow to detect data changes by updating workflow metadata. Use after creating or selecting the workflow.
     */
    POST_WORKFLOW_MONITORING: "KADOA_POST_WORKFLOW_MONITORING",
    /**
     * Tool to generate and add a new validation rule to a workflow. Use when you need AI-driven data quality rules for a workflow.
     */
    POST_WORKFLOW_VALIDATION_RULE: "KADOA_POST_WORKFLOW_VALIDATION_RULE",
    /**
     * Tool to update an existing notification channel. Use when you need to modify channel details.
     */
    PUT_NOTIFICATION_CHANNEL: "KADOA_PUT_NOTIFICATION_CHANNEL",
    /**
     * Tool to synchronously extract data from a URL using a given template. Use after choosing the schemaId (custom or 'html', 'body', 'markdown').
     */
    RUN_ADHOC_EXTRACTION: "KADOA_RUN_ADHOC_EXTRACTION",
    /**
     * Tool to unsubscribe from webhook event notifications by deleting a notification setting. Use when you need to remove an existing notification settings by its ID.
     */
    UNSUBSCRIBE_FROM_WEBHOOK_EVENTS: "KADOA_UNSUBSCRIBE_FROM_WEBHOOK_EVENTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "KADOA".
 */
export type KADOA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "KADOA".
 */
export type KADOA_TRIGGER_EVENTS = {}
