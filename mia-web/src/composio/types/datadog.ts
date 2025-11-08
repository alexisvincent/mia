// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DATADOG's DATADOG_CREATE_DASHBOARD tool input.
 */
type DATADOG_CREATE_DASHBOARD_INPUT = {
  /**
   * Description
   * @description Dashboard description
   * @default null
   */
  description: string | null;
  /**
   * Is Read Only
   * @description Whether the dashboard is read-only
   * @default false
   */
  is_read_only: boolean | null;
  /**
   * Layout Type
   * @description Dashboard layout type ('ordered' or 'free')
   * @default ordered
   */
  layout_type: string;
  /**
   * Notify List
   * @description List of users to notify of dashboard changes
   * @default null
   */
  notify_list: string[] | null;
  /**
   * Tags
   * @description Tags to associate with the dashboard
   */
  tags?: string[] | null;
  /**
   * Template Variables
   * @description Template variables for dynamic dashboards
   * @default null
   */
  template_variables: {
      /**
       * Available Values
       * @description Available values for the variable
       * @default null
       */
      available_values: string[] | null;
      /**
       * Default
       * @description Default value
       * @default null
       */
      default: string | null;
      /**
       * Name
       * @description Variable name
       */
      name: string;
      /**
       * Prefix
       * @description Variable prefix
       * @default null
       */
      prefix: string | null;
  }[] | null;
  /**
   * Title
   * @description Dashboard title
   */
  title?: string;
  /**
   * Widgets
   * @description List of widgets to include in the dashboard
   */
  widgets?: {
      /**
       * Definition
       * @description Widget definition including type, requests, and styling
       */
      definition: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Widget ID (auto-generated if not provided)
       * @default null
       */
      id: number | null;
      /**
       * Layout
       * @description Widget layout information
       * @default null
       */
      layout: {
          [key: string]: unknown;
      } | null;
  }[];
};

/**
 * Type of DATADOG's DATADOG_CREATE_DASHBOARD tool output.
 */
type DATADOG_CREATE_DASHBOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Author Handle
       * @description Dashboard author
       * @default null
       */
      author_handle: string | null;
      /**
       * Created At
       * @description Creation timestamp
       * @default null
       */
      created_at: string | null;
      /**
       * Description
       * @description Dashboard description
       * @default null
       */
      description: string | null;
      /**
       * Errors
       * @description List of errors if creation failed
       * @default null
       */
      errors: string[] | null;
      /**
       * Id
       * @description Created dashboard ID
       * @default null
       */
      id: string | null;
      /**
       * Modified At
       * @description Last modification timestamp
       * @default null
       */
      modified_at: string | null;
      /**
       * Success
       * @description Whether the dashboard was created successfully
       */
      success: boolean;
      /**
       * Title
       * @description Dashboard title
       * @default null
       */
      title: string | null;
      /**
       * Url
       * @description Dashboard URL
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
 * Type of DATADOG's DATADOG_CREATE_DOWNTIME tool input.
 */
type DATADOG_CREATE_DOWNTIME_INPUT = {
  /**
   * End
   * @description UNIX timestamp when downtime should end
   * @default null
   */
  end: number | null;
  /**
   * Message
   * @description Message to include with the downtime
   * @default null
   */
  message: string | null;
  /**
   * Monitor Id
   * @description Monitor ID to schedule downtime for (optional, can use scope instead)
   * @default null
   */
  monitor_id: number | null;
  /**
   * Monitor Tags
   * @description Monitor tags to match for downtime
   * @default null
   */
  monitor_tags: string[] | null;
  /**
   * DowntimeRecurrence
   * @description Downtime recurrence configuration.
   * @default null
   */
  recurrence: {
      /**
       * Period
       * @description Period between recurrences
       */
      period: number;
      /**
       * Type
       * @description Recurrence type. Valid values: 'days', 'weeks', 'months', 'years'
       */
      type: string;
      /**
       * Until Date
       * @description UNIX timestamp when recurrence should end
       * @default null
       */
      until_date: number | null;
      /**
       * Until Occurrences
       * @description Number of occurrences after which recurrence should end
       * @default null
       */
      until_occurrences: number | null;
      /**
       * Week Days
       * @description Days of the week for weekly recurrence. Valid values: 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
       * @default null
       */
      week_days: string[] | null;
  } | null;
  /**
   * Scope
   * @description Scope to apply downtime to (host, service, or monitor tags)
   */
  scope?: string[];
  /**
   * Start
   * @description UNIX timestamp when downtime should start. If not provided, starts immediately
   * @default null
   */
  start: number | null;
  /**
   * Timezone
   * @description Timezone for the downtime (e.g., 'UTC', 'America/New_York')
   * @default null
   */
  timezone: string | null;
};

/**
 * Type of DATADOG's DATADOG_CREATE_DOWNTIME tool output.
 */
type DATADOG_CREATE_DOWNTIME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether downtime is currently active
       * @default null
       */
      active: boolean | null;
      /**
       * Created
       * @description Creation timestamp
       * @default null
       */
      created: string | null;
      /**
       * Disabled
       * @description Whether downtime is disabled
       * @default null
       */
      disabled: boolean | null;
      /**
       * End
       * @description End timestamp
       * @default null
       */
      end: number | null;
      /**
       * Id
       * @description Downtime ID
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Downtime message
       * @default null
       */
      message: string | null;
      /**
       * Modified
       * @description Last modification timestamp
       * @default null
       */
      modified: string | null;
      /**
       * Scope
       * @description Downtime scope
       * @default null
       */
      scope: string[] | null;
      /**
       * Start
       * @description Start timestamp
       * @default null
       */
      start: number | null;
      /**
       * Timezone
       * @description Timezone
       * @default null
       */
      timezone: string | null;
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
 * Type of DATADOG's DATADOG_CREATE_EVENT tool input.
 */
type DATADOG_CREATE_EVENT_INPUT = {
  /**
   * Aggregation Key
   * @description Key for aggregating events together
   * @default null
   */
  aggregation_key: string | null;
  /**
   * Alert Type
   * @description Alert type. Valid values: 'error', 'warning', 'info', 'success'
   * @default null
   */
  alert_type: string | null;
  /**
   * Date Happened
   * @description UNIX timestamp when the event occurred. If not provided, current time is used
   * @default null
   */
  date_happened: number | null;
  /**
   * Device Name
   * @description Device name associated with the event
   * @default null
   */
  device_name: string | null;
  /**
   * Host
   * @description Host name associated with the event
   * @default null
   */
  host: string | null;
  /**
   * Priority
   * @description Event priority. Valid values: 'normal', 'low'
   * @default null
   */
  priority: string | null;
  /**
   * Source Type Name
   * @description Source type name (e.g., 'jenkins', 'docker', 'ansible')
   * @default null
   */
  source_type_name: string | null;
  /**
   * Tags
   * @description List of tags to associate with the event
   * @default null
   */
  tags: string[] | null;
  /**
   * Text
   * @description Event text/description (supports Markdown)
   */
  text?: string;
  /**
   * Title
   * @description Event title (limited to 100 characters)
   */
  title?: string;
};

/**
 * Type of DATADOG's DATADOG_CREATE_EVENT tool output.
 */
type DATADOG_CREATE_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors if any occurred
       * @default null
       */
      errors: string[] | null;
      /**
       * Event
       * @description Created event details
       * @default null
       */
      event: {
          [key: string]: unknown;
      } | null;
      /**
       * Message
       * @description Additional message from the API
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Creation status
       * @default null
       */
      status: string | null;
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
 * Type of DATADOG's DATADOG_CREATE_MONITOR tool input.
 */
type DATADOG_CREATE_MONITOR_INPUT = {
  /**
   * Message
   * @description Message to include in notifications (supports @mentions and markdown)
   * @default null
   */
  message: string | null;
  /**
   * Name
   * @description Name of the monitor
   */
  name?: string;
  /**
   * MonitorOptions
   * @description Monitor configuration options.
   * @default null
   */
  options: {
      /**
       * Escalation Message
       * @description Message for escalation notifications
       * @default null
       */
      escalation_message: string | null;
      /**
       * Include Tags
       * @description Include tags in alert notifications
       * @default null
       */
      include_tags: boolean | null;
      /**
       * Locked
       * @description Lock monitor from editing
       * @default null
       */
      locked: boolean | null;
      /**
       * New Host Delay
       * @description Delay in seconds for new hosts
       * @default null
       */
      new_host_delay: number | null;
      /**
       * No Data Timeframe
       * @description Number of minutes to wait before considering no data
       * @default null
       */
      no_data_timeframe: number | null;
      /**
       * Notify Audit
       * @description Notify when audit logs are enabled
       * @default null
       */
      notify_audit: boolean | null;
      /**
       * Notify No Data
       * @description Notify when monitor has no data
       * @default null
       */
      notify_no_data: boolean | null;
      /**
       * Renotify Interval
       * @description Minutes to wait before re-notifying
       * @default null
       */
      renotify_interval: number | null;
      /**
       * Require Full Window
       * @description Require full window of data for evaluation
       * @default null
       */
      require_full_window: boolean | null;
      /**
       * Thresholds
       * @description Alert thresholds (critical, warning, ok, critical_recovery, warning_recovery)
       * @default null
       */
      thresholds: {
          [key: string]: unknown;
      } | null;
      /**
       * Timeout H
       * @description Timeout in hours for no data
       * @default null
       */
      timeout_h: number | null;
  } | null;
  /**
   * Priority
   * @description Priority level (1-5, where 1 is highest)
   * @default null
   */
  priority: number | null;
  /**
   * Query
   * @description Query that defines what the monitor tracks
   */
  query?: string;
  /**
   * Tags
   * @description List of tags to assign to the monitor
   * @default null
   */
  tags: string[] | null;
  /**
   * Type
   * @description Type of monitor. Valid values: 'metric alert', 'service check', 'event alert', 'query alert', 'composite', 'log alert'
   */
  type?: string;
};

/**
 * Type of DATADOG's DATADOG_CREATE_MONITOR tool output.
 */
type DATADOG_CREATE_MONITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Creation timestamp
       * @default null
       */
      created: string | null;
      /**
       * Creator
       * @description Monitor creator information
       * @default null
       */
      creator: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description Monitor ID
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Monitor message
       * @default null
       */
      message: string | null;
      /**
       * Modified
       * @description Last modification timestamp
       * @default null
       */
      modified: string | null;
      /**
       * Name
       * @description Monitor name
       * @default null
       */
      name: string | null;
      /**
       * Options
       * @description Monitor options
       * @default null
       */
      options: {
          [key: string]: unknown;
      } | null;
      /**
       * Overall State
       * @description Overall state of the monitor
       * @default null
       */
      overall_state: string | null;
      /**
       * Query
       * @description Monitor query
       * @default null
       */
      query: string | null;
      /**
       * Tags
       * @description Monitor tags
       * @default null
       */
      tags: string[] | null;
      /**
       * Type
       * @description Monitor type
       * @default null
       */
      type: string | null;
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
 * Type of DATADOG's DATADOG_CREATE_SLO tool input.
 */
type DATADOG_CREATE_SLO_INPUT = {
  /**
   * Description
   * @description Optional description of the SLO
   * @default null
   */
  description: string | null;
  /**
   * Groups
   * @description List of groups for the SLO scope
   * @default null
   */
  groups: string[] | null;
  /**
   * Monitor Ids
   * @description Monitor IDs for monitor-based SLOs
   * @default null
   */
  monitor_ids: number[] | null;
  /**
   * Name
   * @description SLO display name
   */
  name?: string;
  /**
   * MonitorBasedSLOQuery
   * @description Query specification for monitor-based SLOs.
   * @default null
   */
  query: {
      /**
       * Denominator
       * @description Monitor query for total events
       */
      denominator: string;
      /**
       * Numerator
       * @description Monitor query for successful events
       */
      numerator: string;
  } | null;
  /**
   * Tags
   * @description Tags to associate with the SLO (format: 'key:value')
   */
  tags?: string[] | null;
  /**
   * Thresholds
   * @description List of SLO target thresholds
   */
  thresholds?: {
      /**
       * Target
       * @description Target percentage (0-100, e.g., 99.9 for 99.9%)
       */
      target: number;
      /**
       * Timeframe
       * @description Timeframe for the target ('7d', '30d', '90d')
       */
      timeframe: string;
      /**
       * Warning
       * @description Warning threshold percentage (optional)
       * @default null
       */
      warning: number | null;
  }[];
  /**
   * Type
   * @description SLO type: 'metric' or 'monitor'
   */
  type?: string;
};

/**
 * Type of DATADOG's DATADOG_CREATE_SLO tool output.
 */
type DATADOG_CREATE_SLO_OUTPUT = {
  /**
   * Data
   * @description Created SLO data
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of errors if creation failed
   * @default null
   */
  errors: string[] | null;
  /**
   * Slo Id
   * @description ID of the created SLO
   * @default null
   */
  slo_id: string | null;
  /**
   * Success
   * @description Whether the SLO was created successfully
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DATADOG's DATADOG_CREATE_SYNTHETIC_API_TEST tool input.
 */
type DATADOG_CREATE_SYNTHETIC_API_TEST_INPUT = {
  /**
   * Config
   * @description Test configuration including request and assertions
   */
  config?: {
      /**
       * Assertions
       * @description List of assertions to validate
       */
      assertions: {
          /**
           * Operator
           * @description Assertion operator (e.g., 'is', 'contains', 'lessThan')
           */
          operator: string;
          /**
           * Property
           * @description Property to assert on (for JSON responses)
           * @default null
           */
          property: string | null;
          /**
           * Target
           * @description Expected value for the assertion
           */
          target: string | null;
          /**
           * Type
           * @description Assertion type (e.g., 'statusCode', 'responseTime', 'body')
           */
          type: string;
      }[];
      /**
       * Request
       * @description HTTP request configuration
       */
      request: {
          [key: string]: unknown;
      };
      /**
       * Variables
       * @description Variables to use in the test
       * @default null
       */
      variables: {
          [key: string]: unknown;
      }[] | null;
  };
  /**
   * Message
   * @description Message to include in notifications
   * @default null
   */
  message: string | null;
  /**
   * Name
   * @description Name of the synthetic test
   */
  name?: string;
  /**
   * Options
   * @description Test execution options
   */
  options?: {
      /**
       * Device Ids
       * @description Device IDs for mobile testing
       * @default null
       */
      device_ids: string[] | null;
      /**
       * Locations
       * @description List of locations to run the test from
       */
      locations: string[];
      /**
       * Min Failure Duration
       * @description Minimum failure duration before alerting
       * @default null
       */
      min_failure_duration: number | null;
      /**
       * Min Location Failed
       * @description Minimum locations that must fail
       * @default null
       */
      min_location_failed: number | null;
      /**
       * Monitor Options
       * @description Monitor configuration options
       * @default null
       */
      monitor_options: {
          [key: string]: unknown;
      } | null;
      /**
       * Tick Every
       * @description Frequency of test execution in seconds
       */
      tick_every: number;
  };
  /**
   * Status
   * @description Test status ('live' or 'paused')
   * @default live
   */
  status: string | null;
  /**
   * Subtype
   * @description Subtype of test ('http', 'ssl', 'tcp', 'dns', 'icmp')
   * @default http
   */
  subtype: string;
  /**
   * Tags
   * @description Tags to associate with the test
   * @default null
   */
  tags: string[] | null;
  /**
   * Type
   * @description Type of synthetic test (always 'api' for API tests)
   * @default api
   */
  type: string;
};

/**
 * Type of DATADOG's DATADOG_CREATE_SYNTHETIC_API_TEST tool output.
 */
type DATADOG_CREATE_SYNTHETIC_API_TEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp
       * @default null
       */
      created_at: string | null;
      /**
       * Created By
       * @description Creator information
       * @default null
       */
      created_by: {
          [key: string]: unknown;
      } | null;
      /**
       * Locations
       * @description Test locations
       */
      locations: string[];
      /**
       * Name
       * @description Name of the test
       */
      name: string;
      /**
       * Public Id
       * @description Public ID of the created test
       */
      public_id: string;
      /**
       * Status
       * @description Test status
       */
      status: string;
      /**
       * Subtype
       * @description Subtype of test
       */
      subtype: string;
      /**
       * Success
       * @description Whether the test was created successfully
       */
      success: boolean;
      /**
       * Type
       * @description Type of test
       */
      type: string;
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
 * Type of DATADOG's DATADOG_CREATE_WEBHOOK tool input.
 */
type DATADOG_CREATE_WEBHOOK_INPUT = {
  /**
   * Custom Headers
   * @description Custom headers in JSON format (optional)
   * @default null
   */
  custom_headers: string | null;
  /**
   * Encode As
   * @description Encoding type: 'json' or 'form'
   * @default json
   */
  encode_as: string | null;
  /**
   * Name
   * @description Name of the webhook
   */
  name?: string;
  /**
   * Payload
   * @description Custom payload template (optional)
   * @default null
   */
  payload: string | null;
  /**
   * Url
   * @description URL endpoint for the webhook
   */
  url?: string;
};

/**
 * Type of DATADOG's DATADOG_CREATE_WEBHOOK tool output.
 */
type DATADOG_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Custom Headers
       * @description Custom headers
       * @default null
       */
      custom_headers: string | null;
      /**
       * Encode As
       * @description Encoding type
       * @default null
       */
      encode_as: string | null;
      /**
       * Name
       * @description Name of the created webhook
       */
      name: string;
      /**
       * Payload
       * @description Custom payload
       * @default null
       */
      payload: string | null;
      /**
       * Success
       * @description Whether webhook was created successfully
       */
      success: boolean;
      /**
       * Url
       * @description URL of the webhook
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
 * Type of DATADOG's DATADOG_DELETE_DASHBOARD tool input.
 */
type DATADOG_DELETE_DASHBOARD_INPUT = {
  /**
   * Dashboard Id
   * @description Dashboard ID to delete
   */
  dashboard_id?: string;
};

/**
 * Type of DATADOG's DATADOG_DELETE_DASHBOARD tool output.
 */
type DATADOG_DELETE_DASHBOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted Dashboard Id
       * @description ID of the deleted dashboard
       */
      deleted_dashboard_id: string;
      /**
       * Message
       * @description Deletion confirmation message
       */
      message: string;
      /**
       * Success
       * @description Whether the dashboard was deleted successfully
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
 * Type of DATADOG's DATADOG_DELETE_MONITOR tool input.
 */
type DATADOG_DELETE_MONITOR_INPUT = {
  /**
   * Force
   * @description Force delete the monitor (skip confirmation)
   * @default null
   */
  force: boolean | null;
  /**
   * Monitor Id
   * @description The ID of the monitor to delete
   */
  monitor_id?: number;
};

/**
 * Type of DATADOG's DATADOG_DELETE_MONITOR tool output.
 */
type DATADOG_DELETE_MONITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted Monitor Id
       * @description ID of the deleted monitor
       * @default null
       */
      deleted_monitor_id: number | null;
      /**
       * Message
       * @description Deletion confirmation message
       * @default null
       */
      message: string | null;
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
 * Type of DATADOG's DATADOG_GET_DASHBOARD tool input.
 */
type DATADOG_GET_DASHBOARD_INPUT = {
  /**
   * Dashboard Id
   * @description Dashboard ID to retrieve
   */
  dashboard_id?: string;
};

/**
 * Type of DATADOG's DATADOG_GET_DASHBOARD tool output.
 */
type DATADOG_GET_DASHBOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Author Handle
       * @description Dashboard author
       * @default null
       */
      author_handle: string | null;
      /**
       * Created At
       * @description Creation timestamp
       * @default null
       */
      created_at: string | null;
      /**
       * Description
       * @description Dashboard description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Dashboard ID
       */
      id: string;
      /**
       * Is Read Only
       * @description Whether dashboard is read-only
       * @default null
       */
      is_read_only: boolean | null;
      /**
       * Layout Type
       * @description Dashboard layout type
       */
      layout_type: string;
      /**
       * Modified At
       * @description Last modification timestamp
       * @default null
       */
      modified_at: string | null;
      /**
       * Notify List
       * @description Notification list
       * @default null
       */
      notify_list: string[] | null;
      /**
       * Tags
       * @description Dashboard tags
       * @default null
       */
      tags: string[] | null;
      /**
       * Template Variables
       * @description Template variables
       * @default null
       */
      template_variables: {
          /**
           * Available Values
           * @description Available values
           * @default null
           */
          available_values: string[] | null;
          /**
           * Default
           * @description Default value
           * @default null
           */
          default: string | null;
          /**
           * Name
           * @description Variable name
           */
          name: string;
          /**
           * Prefix
           * @description Variable prefix
           * @default null
           */
          prefix: string | null;
      }[] | null;
      /**
       * Title
       * @description Dashboard title
       */
      title: string;
      /**
       * Url
       * @description Dashboard URL
       * @default null
       */
      url: string | null;
      /**
       * Widgets
       * @description Dashboard widgets
       */
      widgets?: {
          /**
           * Definition
           * @description Widget definition and configuration
           */
          definition: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Widget ID
           * @default null
           */
          id: number | null;
          /**
           * Layout
           * @description Widget layout information
           * @default null
           */
          layout: {
              [key: string]: unknown;
          } | null;
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
 * Type of DATADOG's DATADOG_GET_MONITOR tool input.
 */
type DATADOG_GET_MONITOR_INPUT = {
  /**
   * Group States
   * @description Filter by group states when retrieving monitor details. Valid values: 'all', 'alert', 'warn', 'no data'
   * @default null
   */
  group_states: string[] | null;
  /**
   * Monitor Id
   * @description The ID of the monitor to retrieve
   */
  monitor_id?: number;
  /**
   * With Downtimes
   * @description Include downtime information in the response
   * @default null
   */
  with_downtimes: boolean | null;
};

/**
 * Type of DATADOG's DATADOG_GET_MONITOR tool output.
 */
type DATADOG_GET_MONITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Creation timestamp
       * @default null
       */
      created: string | null;
      /**
       * Creator
       * @description Monitor creator information
       * @default null
       */
      creator: {
          [key: string]: unknown;
      } | null;
      /**
       * Deleted
       * @description Deletion timestamp if monitor was deleted
       * @default null
       */
      deleted: string | null;
      /**
       * Id
       * @description Monitor ID
       * @default null
       */
      id: number | null;
      /**
       * Matching Downtimes
       * @description Active downtimes affecting this monitor
       * @default null
       */
      matching_downtimes: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Message
       * @description Monitor message/notification
       * @default null
       */
      message: string | null;
      /**
       * Modified
       * @description Last modification timestamp
       * @default null
       */
      modified: string | null;
      /**
       * Name
       * @description Monitor name
       * @default null
       */
      name: string | null;
      /**
       * Options
       * @description Monitor options and settings
       * @default null
       */
      options: {
          [key: string]: unknown;
      } | null;
      /**
       * Overall State
       * @description Overall state of the monitor
       * @default null
       */
      overall_state: string | null;
      /**
       * Overall State Modified
       * @description Timestamp of last state change
       * @default null
       */
      overall_state_modified: string | null;
      /**
       * Query
       * @description Monitor query
       * @default null
       */
      query: string | null;
      /**
       * State
       * @description Detailed state information by group
       * @default null
       */
      state: {
          [key: string]: unknown;
      } | null;
      /**
       * Tags
       * @description Monitor tags
       * @default null
       */
      tags: string[] | null;
      /**
       * Type
       * @description Monitor type
       * @default null
       */
      type: string | null;
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
 * Type of DATADOG's DATADOG_GET_SERVICE_DEPENDENCIES tool input.
 */
type DATADOG_GET_SERVICE_DEPENDENCIES_INPUT = {
  /**
   * End Time
   * @description End time as UNIX timestamp (seconds)
   * @default null
   */
  end_time: number | null;
  /**
   * Env
   * @description Environment to filter by
   * @default null
   */
  env: string | null;
  /**
   * Service
   * @description The service name to get dependencies for
   */
  service?: string;
  /**
   * Start Time
   * @description Start time as UNIX timestamp (seconds)
   * @default null
   */
  start_time: number | null;
};

/**
 * Type of DATADOG's DATADOG_GET_SERVICE_DEPENDENCIES tool output.
 */
type DATADOG_GET_SERVICE_DEPENDENCIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Downstream Dependencies
       * @description Services that this service calls
       */
      downstream_dependencies?: {
          /**
           * Avg Duration
           * @description Average duration in milliseconds
           * @default null
           */
          avg_duration: number | null;
          /**
           * Calls Per Second
           * @description Average calls per second
           * @default null
           */
          calls_per_second: number | null;
          /**
           * Env
           * @description Environment
           * @default null
           */
          env: string | null;
          /**
           * Error Rate
           * @description Error rate percentage
           * @default null
           */
          error_rate: number | null;
          /**
           * Errors Per Second
           * @description Average errors per second
           * @default null
           */
          errors_per_second: number | null;
          /**
           * P50 Latency
           * @description 50th percentile latency
           * @default null
           */
          p50_latency: number | null;
          /**
           * P95 Latency
           * @description 95th percentile latency
           * @default null
           */
          p95_latency: number | null;
          /**
           * P99 Latency
           * @description 99th percentile latency
           * @default null
           */
          p99_latency: number | null;
          /**
           * Service
           * @description Dependent service name
           * @default null
           */
          service: string | null;
          /**
           * Total Calls
           * @description Total number of calls
           * @default null
           */
          total_calls: number | null;
          /**
           * Total Errors
           * @description Total number of errors
           * @default null
           */
          total_errors: number | null;
          /**
           * Type
           * @description Dependency type (upstream/downstream)
           * @default null
           */
          type: string | null;
      }[];
      /**
       * Meta
       * @description Response metadata
       * @default null
       */
      meta: {
          [key: string]: unknown;
      } | null;
      /**
       * ServiceInfo
       * @description Information about the service itself.
       * @default null
       */
      service_info: {
          /**
           * Avg Duration
           * @description Average duration in milliseconds
           * @default null
           */
          avg_duration: number | null;
          /**
           * Env
           * @description Environment
           * @default null
           */
          env: string | null;
          /**
           * Error Rate
           * @description Error rate percentage
           * @default null
           */
          error_rate: number | null;
          /**
           * Errors Per Second
           * @description Average errors per second
           * @default null
           */
          errors_per_second: number | null;
          /**
           * Languages
           * @description Programming languages used
           * @default null
           */
          languages: string[] | null;
          /**
           * Requests Per Second
           * @description Average requests per second
           * @default null
           */
          requests_per_second: number | null;
          /**
           * Service
           * @description Service name
           */
          service: string;
          /**
           * Type
           * @description Service type
           * @default null
           */
          type: string | null;
      } | null;
      /**
       * Total Downstream
       * @description Total number of downstream dependencies
       * @default null
       */
      total_downstream: number | null;
      /**
       * Total Upstream
       * @description Total number of upstream dependencies
       * @default null
       */
      total_upstream: number | null;
      /**
       * Upstream Dependencies
       * @description Services that call this service
       */
      upstream_dependencies?: {
          /**
           * Avg Duration
           * @description Average duration in milliseconds
           * @default null
           */
          avg_duration: number | null;
          /**
           * Calls Per Second
           * @description Average calls per second
           * @default null
           */
          calls_per_second: number | null;
          /**
           * Env
           * @description Environment
           * @default null
           */
          env: string | null;
          /**
           * Error Rate
           * @description Error rate percentage
           * @default null
           */
          error_rate: number | null;
          /**
           * Errors Per Second
           * @description Average errors per second
           * @default null
           */
          errors_per_second: number | null;
          /**
           * P50 Latency
           * @description 50th percentile latency
           * @default null
           */
          p50_latency: number | null;
          /**
           * P95 Latency
           * @description 95th percentile latency
           * @default null
           */
          p95_latency: number | null;
          /**
           * P99 Latency
           * @description 99th percentile latency
           * @default null
           */
          p99_latency: number | null;
          /**
           * Service
           * @description Dependent service name
           * @default null
           */
          service: string | null;
          /**
           * Total Calls
           * @description Total number of calls
           * @default null
           */
          total_calls: number | null;
          /**
           * Total Errors
           * @description Total number of errors
           * @default null
           */
          total_errors: number | null;
          /**
           * Type
           * @description Dependency type (upstream/downstream)
           * @default null
           */
          type: string | null;
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
 * Type of DATADOG's DATADOG_GET_SYNTHETICS_LOCATIONS tool input.
 */
type DATADOG_GET_SYNTHETICS_LOCATIONS_INPUT = object;

/**
 * Type of DATADOG's DATADOG_GET_SYNTHETICS_LOCATIONS tool output.
 */
type DATADOG_GET_SYNTHETICS_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Locations
       * @description List of all available synthetic locations.
       */
      locations: {
          /**
           * Id
           * @description Identifier of the location.
           */
          id: string;
          /**
           * Is Active
           * @description Whether the location is active.
           * @default null
           */
          is_active: boolean | null;
          /**
           * Is Public
           * @description Whether the location is public.
           * @default null
           */
          is_public: boolean | null;
          /**
           * Name
           * @description Name of the location.
           */
          name: string;
          /**
           * Region
           * @description Region of the location.
           * @default null
           */
          region: string | null;
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
 * Type of DATADOG's DATADOG_GET_TAGS tool input.
 */
type DATADOG_GET_TAGS_INPUT = {
  /**
   * Host Name
   * @description Name of the host to get tags from
   */
  host_name?: string;
  /**
   * Source
   * @description Source of tags to retrieve (e.g., 'users', 'chef', 'puppet')
   * @default null
   */
  source: string | null;
};

/**
 * Type of DATADOG's DATADOG_GET_TAGS tool output.
 */
type DATADOG_GET_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Host
       * @description Host name
       * @default null
       */
      host: string | null;
      /**
       * Tags
       * @description Tags organized by source
       */
      tags?: {
          [key: string]: string[];
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
 * Type of DATADOG's DATADOG_GET_TRACE_BY_ID tool input.
 */
type DATADOG_GET_TRACE_BY_ID_INPUT = {
  /**
   * Trace Id
   * @description The unique trace ID to retrieve
   */
  trace_id?: string;
};

/**
 * Type of DATADOG's DATADOG_GET_TRACE_BY_ID tool output.
 */
type DATADOG_GET_TRACE_BY_ID_OUTPUT = {
  /**
   * TraceDetail
   * @description Detailed trace information.
   * @default null
   */
  data: {
      /**
       * Duration
       * @description Total duration in nanoseconds
       * @default null
       */
      duration: number | null;
      /**
       * End Time
       * @description Trace end time
       * @default null
       */
      end_time: string | null;
      /**
       * Env
       * @description Environment
       * @default null
       */
      env: string | null;
      /**
       * Error
       * @description Whether trace contains errors
       * @default null
       */
      error: boolean | null;
      /**
       * Error Count
       * @description Number of spans with errors
       * @default null
       */
      error_count: number | null;
      /**
       * Resource Name
       * @description Root resource name
       * @default null
       */
      resource_name: string | null;
      /**
       * Root Span Id
       * @description ID of the root span
       * @default null
       */
      root_span_id: string | null;
      /**
       * Service
       * @description Primary service
       * @default null
       */
      service: string | null;
      /**
       * Services
       * @description List of services involved
       * @default null
       */
      services: string[] | null;
      /**
       * Span Count
       * @description Total number of spans
       * @default null
       */
      span_count: number | null;
      /**
       * Spans
       * @description List of spans in the trace
       */
      spans?: {
          /**
           * Duration
           * @description Duration in nanoseconds
           * @default null
           */
          duration: number | null;
          /**
           * Error
           * @description Error flag (0 or 1)
           * @default null
           */
          error: number | null;
          /**
           * Error Message
           * @description Error message if error occurred
           * @default null
           */
          error_message: string | null;
          /**
           * Error Stack
           * @description Error stack trace if available
           * @default null
           */
          error_stack: string | null;
          /**
           * Error Type
           * @description Error type if error occurred
           * @default null
           */
          error_type: string | null;
          /**
           * Meta
           * @description Span metadata including tags
           * @default null
           */
          meta: {
              [key: string]: unknown;
          } | null;
          /**
           * Metrics
           * @description Span metrics
           * @default null
           */
          metrics: {
              [key: string]: unknown;
          } | null;
          /**
           * Operation
           * @description Operation name
           * @default null
           */
          operation: string | null;
          /**
           * Parent Id
           * @description Parent span ID
           * @default null
           */
          parent_id: string | null;
          /**
           * Resource
           * @description Resource name
           * @default null
           */
          resource: string | null;
          /**
           * Service
           * @description Service name
           * @default null
           */
          service: string | null;
          /**
           * Span Id
           * @description Unique span ID
           * @default null
           */
          span_id: string | null;
          /**
           * Start
           * @description Start time in nanoseconds
           * @default null
           */
          start: number | null;
          /**
           * Tags
           * @description Span tags
           * @default null
           */
          tags: {
              [key: string]: unknown;
          } | null;
          /**
           * Trace Id
           * @description Parent trace ID
           * @default null
           */
          trace_id: string | null;
          /**
           * Type
           * @description Span type (web, db, cache, etc)
           * @default null
           */
          type: string | null;
      }[];
      /**
       * Start Time
       * @description Trace start time
       * @default null
       */
      start_time: string | null;
      /**
       * Tags
       * @description Trace-level tags
       * @default null
       */
      tags: {
          [key: string]: unknown;
      } | null;
      /**
       * Trace Id
       * @description Unique trace ID
       */
      trace_id: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response metadata
   * @default null
   */
  meta: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DATADOG's DATADOG_GET_USAGE_SUMMARY tool input.
 */
type DATADOG_GET_USAGE_SUMMARY_INPUT = {
  /**
   * End Month
   * @description End month in YYYY-MM format. If not provided, uses start_month
   * @default null
   */
  end_month: string | null;
  /**
   * Include Org Details
   * @description Include organization details in the response
   * @default null
   */
  include_org_details: boolean | null;
  /**
   * Start Month
   * @description Start month in YYYY-MM format
   */
  start_month?: string;
};

/**
 * Type of DATADOG's DATADOG_GET_USAGE_SUMMARY tool output.
 */
type DATADOG_GET_USAGE_SUMMARY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * End Date
       * @description End date of usage period
       * @default null
       */
      end_date: string | null;
      /**
       * Start Date
       * @description Start date of usage period
       * @default null
       */
      start_date: string | null;
      /**
       * UsageAttributionSummary
       * @description Usage attribution summary structure.
       * @default null
       */
      total_usage: {
          /**
           * Api Percentage
           * @description API usage percentage
           * @default null
           */
          api_percentage: number | null;
          /**
           * Api Usage
           * @description API usage count
           * @default null
           */
          api_usage: number | null;
          /**
           * Apm Host Percentage
           * @description APM host usage percentage
           * @default null
           */
          apm_host_percentage: number | null;
          /**
           * Apm Host Usage
           * @description APM host usage count
           * @default null
           */
          apm_host_usage: number | null;
          /**
           * Browser Percentage
           * @description Browser test usage percentage
           * @default null
           */
          browser_percentage: number | null;
          /**
           * Browser Usage
           * @description Browser test usage count
           * @default null
           */
          browser_usage: number | null;
          /**
           * Container Percentage
           * @description Container usage percentage
           * @default null
           */
          container_percentage: number | null;
          /**
           * Container Usage
           * @description Container usage count
           * @default null
           */
          container_usage: number | null;
          /**
           * Custom Timeseries Percentage
           * @description Custom metrics usage percentage
           * @default null
           */
          custom_timeseries_percentage: number | null;
          /**
           * Custom Timeseries Usage
           * @description Custom metrics usage count
           * @default null
           */
          custom_timeseries_usage: number | null;
          /**
           * Estimated Indexed Logs Percentage
           * @description Indexed logs usage percentage
           * @default null
           */
          estimated_indexed_logs_percentage: number | null;
          /**
           * Estimated Indexed Logs Usage
           * @description Indexed logs usage count
           * @default null
           */
          estimated_indexed_logs_usage: number | null;
          /**
           * Infra Host Percentage
           * @description Infrastructure host usage percentage
           * @default null
           */
          infra_host_percentage: number | null;
          /**
           * Infra Host Usage
           * @description Infrastructure host usage count
           * @default null
           */
          infra_host_usage: number | null;
          /**
           * Lambda Percentage
           * @description Lambda usage percentage
           * @default null
           */
          lambda_percentage: number | null;
          /**
           * Lambda Usage
           * @description Lambda usage count
           * @default null
           */
          lambda_usage: number | null;
      } | null;
      /**
       * Usage
       * @description Usage breakdown by month
       * @default null
       */
      usage: {
          /**
           * Api Percentage
           * @description API usage percentage
           * @default null
           */
          api_percentage: number | null;
          /**
           * Api Usage
           * @description API usage count
           * @default null
           */
          api_usage: number | null;
          /**
           * Apm Host Percentage
           * @description APM host usage percentage
           * @default null
           */
          apm_host_percentage: number | null;
          /**
           * Apm Host Usage
           * @description APM host usage count
           * @default null
           */
          apm_host_usage: number | null;
          /**
           * Browser Percentage
           * @description Browser test usage percentage
           * @default null
           */
          browser_percentage: number | null;
          /**
           * Browser Usage
           * @description Browser test usage count
           * @default null
           */
          browser_usage: number | null;
          /**
           * Container Percentage
           * @description Container usage percentage
           * @default null
           */
          container_percentage: number | null;
          /**
           * Container Usage
           * @description Container usage count
           * @default null
           */
          container_usage: number | null;
          /**
           * Custom Timeseries Percentage
           * @description Custom metrics usage percentage
           * @default null
           */
          custom_timeseries_percentage: number | null;
          /**
           * Custom Timeseries Usage
           * @description Custom metrics usage count
           * @default null
           */
          custom_timeseries_usage: number | null;
          /**
           * Estimated Indexed Logs Percentage
           * @description Indexed logs usage percentage
           * @default null
           */
          estimated_indexed_logs_percentage: number | null;
          /**
           * Estimated Indexed Logs Usage
           * @description Indexed logs usage count
           * @default null
           */
          estimated_indexed_logs_usage: number | null;
          /**
           * Infra Host Percentage
           * @description Infrastructure host usage percentage
           * @default null
           */
          infra_host_percentage: number | null;
          /**
           * Infra Host Usage
           * @description Infrastructure host usage count
           * @default null
           */
          infra_host_usage: number | null;
          /**
           * Lambda Percentage
           * @description Lambda usage percentage
           * @default null
           */
          lambda_percentage: number | null;
          /**
           * Lambda Usage
           * @description Lambda usage count
           * @default null
           */
          lambda_usage: number | null;
      }[] | null;
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
 * Type of DATADOG's DATADOG_LIST_ALL_TAGS tool input.
 */
type DATADOG_LIST_ALL_TAGS_INPUT = {
  /**
   * Source
   * @description Filter tags by source (e.g., 'chef', 'puppet', 'users', 'datadog')
   * @default null
   */
  source: string | null;
};

/**
 * Type of DATADOG's DATADOG_LIST_ALL_TAGS tool output.
 */
type DATADOG_LIST_ALL_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tags
       * @description List of tags
       */
      tags?: {
          /**
           * Count
           * @description Number of hosts with this tag
           * @default null
           */
          count: number | null;
          /**
           * Name
           * @description Tag name
           */
          name: string;
      }[];
      /**
       * Total Count
       * @description Total number of tags
       * @default null
       */
      total_count: number | null;
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
 * Type of DATADOG's DATADOG_LIST_API_KEYS tool input.
 */
type DATADOG_LIST_API_KEYS_INPUT = {
  /**
   * Filter Created At End
   * @description ISO timestamp to filter keys created before this time
   * @default null
   */
  filter_created_at_end: string | null;
  /**
   * Filter Created At Start
   * @description ISO timestamp to filter keys created after this time
   * @default null
   */
  filter_created_at_start: string | null;
  /**
   * Filter Modified At End
   * @description ISO timestamp to filter keys modified before this time
   * @default null
   */
  filter_modified_at_end: string | null;
  /**
   * Filter Modified At Start
   * @description ISO timestamp to filter keys modified after this time
   * @default null
   */
  filter_modified_at_start: string | null;
  /**
   * Page Number
   * @description Page number to retrieve (0-indexed)
   * @default null
   */
  page_number: number | null;
  /**
   * Page Size
   * @description Number of API keys to return per page (default 20, max 1000)
   * @default null
   */
  page_size: number | null;
  /**
   * Sort
   * @description Sort field. Options: 'created_at', 'last4', 'modified_at', 'name'
   * @default null
   */
  sort: string | null;
};

/**
 * Type of DATADOG's DATADOG_LIST_API_KEYS tool output.
 */
type DATADOG_LIST_API_KEYS_OUTPUT = {
  /**
   * Data
   * @description List of API keys
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp
       * @default null
       */
      created_at: string | null;
      /**
       * Created By
       * @description User who created the key
       * @default null
       */
      created_by: string | null;
      /**
       * Id
       * @description API key ID
       * @default null
       */
      id: string | null;
      /**
       * Last4
       * @description Last 4 characters of the key
       * @default null
       */
      last4: string | null;
      /**
       * Modified At
       * @description Last modification timestamp
       * @default null
       */
      modified_at: string | null;
      /**
       * Name
       * @description API key name
       * @default null
       */
      name: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata
   * @default null
   */
  meta: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Count
   * @description Total number of API keys
   */
  total_count?: number;
};

/**
 * Type of DATADOG's DATADOG_LIST_APM_SERVICES tool input.
 */
type DATADOG_LIST_APM_SERVICES_INPUT = {
  /**
   * End
   * @description End time for the query (UNIX timestamp in seconds)
   * @default null
   */
  end: number | null;
  /**
   * Env
   * @description Environment filter (e.g., 'production', 'staging')
   * @default null
   */
  env: string | null;
  /**
   * Limit
   * @description Maximum number of services to return (1-500, default: 50)
   * @default 50
   */
  limit: number | null;
  /**
   * Service
   * @description Filter by specific service name
   * @default null
   */
  service: string | null;
  /**
   * Start
   * @description Start time for the query (UNIX timestamp in seconds)
   * @default null
   */
  start: number | null;
};

/**
 * Type of DATADOG's DATADOG_LIST_APM_SERVICES tool output.
 */
type DATADOG_LIST_APM_SERVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Services
       * @description List of APM services
       */
      services?: {
          /**
           * Env
           * @description Environment name
           * @default null
           */
          env: string | null;
          /**
           * Operation Name
           * @description Operation name
           * @default null
           */
          operation_name: string | null;
          /**
           * Resource
           * @description Resource name
           * @default null
           */
          resource: string | null;
          /**
           * Service
           * @description Service name
           */
          service: string;
          /**
           * Span Type
           * @description Span type
           * @default null
           */
          span_type: string | null;
          /**
           * APMServiceStats
           * @description APM service statistics.
           * @default null
           */
          stats: {
              /**
               * Avg Apdex
               * @description Average Apdex score
               * @default null
               */
              avg_apdex: number | null;
              /**
               * Avg Duration
               * @description Average request duration in nanoseconds
               * @default null
               */
              avg_duration: number | null;
              /**
               * Avg Errors Per Second
               * @description Average errors per second
               * @default null
               */
              avg_errors_per_second: number | null;
              /**
               * Avg Hits Per Second
               * @description Average hits per second
               * @default null
               */
              avg_hits_per_second: number | null;
              /**
               * Error Rate
               * @description Error rate percentage
               * @default null
               */
              error_rate: number | null;
              /**
               * Total Errors
               * @description Total number of errors
               * @default null
               */
              total_errors: number | null;
              /**
               * Total Hits
               * @description Total number of hits
               * @default null
               */
              total_hits: number | null;
          } | null;
          /**
           * Tags
           * @description Service tags
           * @default null
           */
          tags: string[] | null;
      }[];
      /**
       * Total Count
       * @description Total number of services
       * @default null
       */
      total_count: number | null;
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
 * Type of DATADOG's DATADOG_LIST_AWS_INTEGRATION tool input.
 */
type DATADOG_LIST_AWS_INTEGRATION_INPUT = {
  /**
   * Account Id
   * @description Filter by specific AWS account ID
   * @default null
   */
  account_id: string | null;
  /**
   * Role Name
   * @description Filter by specific AWS IAM role name
   * @default null
   */
  role_name: string | null;
};

/**
 * Type of DATADOG's DATADOG_LIST_AWS_INTEGRATION tool output.
 */
type DATADOG_LIST_AWS_INTEGRATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounts
       * @description List of AWS account integrations
       */
      accounts?: {
          /**
           * Access Key Id
           * @description AWS access key ID (masked)
           * @default null
           */
          access_key_id: string | null;
          /**
           * Account Id
           * @description AWS account ID
           * @default null
           */
          account_id: string | null;
          /**
           * Cspm Resource Collection Enabled
           * @description Cloud Security Posture Management enabled
           * @default null
           */
          cspm_resource_collection_enabled: boolean | null;
          /**
           * Excluded Regions
           * @description AWS regions to exclude from monitoring
           * @default null
           */
          excluded_regions: string[] | null;
          /**
           * Filter Tags
           * @description Tags to filter AWS resources
           * @default null
           */
          filter_tags: string[] | null;
          /**
           * Host Tags
           * @description Host tags to apply
           * @default null
           */
          host_tags: string[] | null;
          /**
           * Metrics Collection Enabled
           * @description Metrics collection enabled
           * @default null
           */
          metrics_collection_enabled: boolean | null;
          /**
           * Resource Collection Enabled
           * @description Resource collection enabled
           * @default null
           */
          resource_collection_enabled: boolean | null;
          /**
           * Role Name
           * @description AWS IAM role name
           * @default null
           */
          role_name: string | null;
      }[];
      /**
       * Total Count
       * @description Total number of AWS integrations
       */
      total_count: number;
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
 * Type of DATADOG's DATADOG_LIST_DASHBOARDS tool input.
 */
type DATADOG_LIST_DASHBOARDS_INPUT = {
  /**
   * Filter Deleted
   * @description Include deleted dashboards in the results
   * @default null
   */
  filter_deleted: boolean | null;
  /**
   * Filter Shared
   * @description Filter dashboards by shared status
   * @default null
   */
  filter_shared: boolean | null;
};

/**
 * Type of DATADOG's DATADOG_LIST_DASHBOARDS tool output.
 */
type DATADOG_LIST_DASHBOARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Dashboards
       * @description List of dashboards
       */
      dashboards?: {
          /**
           * Author Handle
           * @description Author handle/email
           * @default null
           */
          author_handle: string | null;
          /**
           * Author Name
           * @description Author name
           * @default null
           */
          author_name: string | null;
          /**
           * Created At
           * @description Creation timestamp
           * @default null
           */
          created_at: string | null;
          /**
           * Description
           * @description Dashboard description
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Dashboard ID
           * @default null
           */
          id: string | null;
          /**
           * Is Shared
           * @description Whether dashboard is shared
           * @default null
           */
          is_shared: boolean | null;
          /**
           * Modified At
           * @description Last modification timestamp
           * @default null
           */
          modified_at: string | null;
          /**
           * Tags
           * @description Dashboard tags
           * @default null
           */
          tags: string[] | null;
          /**
           * Title
           * @description Dashboard title
           * @default null
           */
          title: string | null;
          /**
           * Url
           * @description Dashboard URL
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Total Count
       * @description Total number of dashboards
       * @default null
       */
      total_count: number | null;
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
 * Type of DATADOG's DATADOG_LIST_EVENTS tool input.
 */
type DATADOG_LIST_EVENTS_INPUT = {
  /**
   * End
   * @description End time as UNIX timestamp
   */
  end?: number;
  /**
   * Exclude Aggregate
   * @description Exclude aggregated events
   * @default null
   */
  exclude_aggregate: boolean | null;
  /**
   * Page
   * @description Page number for pagination
   * @default null
   */
  page: number | null;
  /**
   * Priority
   * @description Filter by event priority. Valid values: 'normal', 'low'
   * @default null
   */
  priority: string | null;
  /**
   * Sources
   * @description Filter by event sources (comma-separated)
   * @default null
   */
  sources: string | null;
  /**
   * Start
   * @description Start time as UNIX timestamp
   */
  start?: number;
  /**
   * Tags
   * @description Filter by tags
   * @default null
   */
  tags: string[] | null;
  /**
   * Unaggregated
   * @description Get unaggregated events (default: false)
   * @default null
   */
  unaggregated: boolean | null;
};

/**
 * Type of DATADOG's DATADOG_LIST_EVENTS tool output.
 */
type DATADOG_LIST_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description List of events
       */
      events?: {
          /**
           * Aggregation Key
           * @description Aggregation key
           * @default null
           */
          aggregation_key: string | null;
          /**
           * Alert Type
           * @description Alert type
           * @default null
           */
          alert_type: string | null;
          /**
           * Date Happened
           * @description Event timestamp
           * @default null
           */
          date_happened: number | null;
          /**
           * Device Name
           * @description Device name
           * @default null
           */
          device_name: string | null;
          /**
           * Host
           * @description Host name
           * @default null
           */
          host: string | null;
          /**
           * Id
           * @description Event ID
           * @default null
           */
          id: number | null;
          /**
           * Priority
           * @description Event priority
           * @default null
           */
          priority: string | null;
          /**
           * Resource
           * @description Resource identifier
           * @default null
           */
          resource: string | null;
          /**
           * Source Type Name
           * @description Source type name
           * @default null
           */
          source_type_name: string | null;
          /**
           * Tags
           * @description Event tags
           * @default null
           */
          tags: string[] | null;
          /**
           * Text
           * @description Event text/description
           * @default null
           */
          text: string | null;
          /**
           * Title
           * @description Event title
           * @default null
           */
          title: string | null;
          /**
           * Url
           * @description Event URL
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Status
       * @description Response status
       * @default null
       */
      status: string | null;
      /**
       * Total Count
       * @description Total number of events
       * @default null
       */
      total_count: number | null;
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
 * Type of DATADOG's DATADOG_LIST_HOSTS tool input.
 */
type DATADOG_LIST_HOSTS_INPUT = {
  /**
   * Count
   * @description Number of hosts to return (max 1000)
   * @default null
   */
  count: number | null;
  /**
   * Filter
   * @description Filter hosts by tags or attributes
   * @default null
   */
  filter: string | null;
  /**
   * From Timestamp
   * @description Start time as UNIX timestamp for host activity
   * @default null
   */
  from_timestamp: number | null;
  /**
   * Include Hosts Metadata
   * @description Include hosts metadata in response
   * @default null
   */
  include_hosts_metadata: boolean | null;
  /**
   * Include Muted Hosts Data
   * @description Include data for muted hosts
   * @default null
   */
  include_muted_hosts_data: boolean | null;
  /**
   * Sort Dir
   * @description Sort direction. Valid values: 'asc', 'desc'
   * @default null
   */
  sort_dir: string | null;
  /**
   * Sort Field
   * @description Field to sort by. Valid values: 'status', 'name', 'cpu', 'iowait', 'load'
   * @default null
   */
  sort_field: string | null;
  /**
   * Start
   * @description Starting position for pagination
   * @default null
   */
  start: number | null;
};

/**
 * Type of DATADOG's DATADOG_LIST_HOSTS tool output.
 */
type DATADOG_LIST_HOSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Host List
       * @description List of hosts
       */
      host_list?: {
          /**
           * Aliases
           * @description Host aliases
           * @default null
           */
          aliases: string[] | null;
          /**
           * Apps
           * @description Applications running on host
           * @default null
           */
          apps: string[] | null;
          /**
           * Aws Name
           * @description AWS instance name
           * @default null
           */
          aws_name: string | null;
          /**
           * Host Name
           * @description Host name
           * @default null
           */
          host_name: string | null;
          /**
           * Id
           * @description Host ID
           * @default null
           */
          id: number | null;
          /**
           * Is Muted
           * @description Whether host is muted
           * @default null
           */
          is_muted: boolean | null;
          /**
           * Last Reported Time
           * @description Last reported timestamp
           * @default null
           */
          last_reported_time: number | null;
          /**
           * Meta
           * @description Host metadata
           * @default null
           */
          meta: {
              [key: string]: unknown;
          } | null;
          /**
           * HostMetrics
           * @description Host metrics structure.
           * @default null
           */
          metrics: {
              /**
               * Cpu
               * @description CPU usage percentage
               * @default null
               */
              cpu: number | null;
              /**
               * Iowait
               * @description IO wait percentage
               * @default null
               */
              iowait: number | null;
              /**
               * Load
               * @description System load
               * @default null
               */
              load: number | null;
          } | null;
          /**
           * Mute Timeout
           * @description Mute timeout if muted
           * @default null
           */
          mute_timeout: number | null;
          /**
           * Name
           * @description Display name
           * @default null
           */
          name: string | null;
          /**
           * Platform
           * @description Platform/OS
           * @default null
           */
          platform: string | null;
          /**
           * Sources
           * @description Data sources
           * @default null
           */
          sources: string[] | null;
          /**
           * Tags By Source
           * @description Tags organized by source
           * @default null
           */
          tags_by_source: {
              [key: string]: unknown;
          } | null;
          /**
           * Up
           * @description Whether host is up
           * @default null
           */
          up: boolean | null;
      }[];
      /**
       * Total Matching
       * @description Total number of matching hosts
       * @default null
       */
      total_matching: number | null;
      /**
       * Total Returned
       * @description Number of hosts returned
       * @default null
       */
      total_returned: number | null;
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
 * Type of DATADOG's DATADOG_LIST_INCIDENTS tool input.
 */
type DATADOG_LIST_INCIDENTS_INPUT = {
  /**
   * Filter Query
   * @description Filter query for incidents (e.g., 'state:active')
   * @default null
   */
  filter_query: string | null;
  /**
   * Include
   * @description Related resources to include (e.g., 'users,attachments')
   * @default null
   */
  include: string | null;
  /**
   * Page Offset
   * @description Page offset for pagination (default: 0)
   * @default 0
   */
  page_offset: number | null;
  /**
   * Page Size
   * @description Number of incidents per page (1-100, default: 25)
   * @default 25
   */
  page_size: number | null;
  /**
   * Sort
   * @description Sort order for incidents (e.g., '-created', 'severity')
   * @default -created
   */
  sort: string | null;
};

/**
 * Type of DATADOG's DATADOG_LIST_INCIDENTS tool output.
 */
type DATADOG_LIST_INCIDENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Incidents
       * @description List of incidents
       */
      incidents?: {
          /**
           * Attributes
           * @description Incident attributes
           */
          attributes: {
              /**
               * Created
               * @description Creation timestamp
               * @default null
               */
              created: string | null;
              /**
               * Customer Impact End
               * @description Customer impact end time
               * @default null
               */
              customer_impact_end: string | null;
              /**
               * Customer Impact Scope
               * @description Customer impact scope
               * @default null
               */
              customer_impact_scope: string | null;
              /**
               * Customer Impact Start
               * @description Customer impact start time
               * @default null
               */
              customer_impact_start: string | null;
              /**
               * Customer Impacted
               * @description Whether customers are impacted
               * @default null
               */
              customer_impacted: boolean | null;
              /**
               * Detected
               * @description Detection timestamp
               * @default null
               */
              detected: string | null;
              /**
               * Modified
               * @description Last modification timestamp
               * @default null
               */
              modified: string | null;
              /**
               * Resolved
               * @description Resolution timestamp
               * @default null
               */
              resolved: string | null;
              /**
               * Severity
               * @description Incident severity (SEV-1, SEV-2, etc.)
               * @default null
               */
              severity: string | null;
              /**
               * State
               * @description Incident state (active, stable, resolved)
               */
              state: string;
              /**
               * Time To Detect
               * @description Time to detect in seconds
               * @default null
               */
              time_to_detect: number | null;
              /**
               * Time To Internal Response
               * @description Time to internal response in seconds
               * @default null
               */
              time_to_internal_response: number | null;
              /**
               * Time To Repair
               * @description Time to repair in seconds
               * @default null
               */
              time_to_repair: number | null;
              /**
               * Time To Resolve
               * @description Time to resolve in seconds
               * @default null
               */
              time_to_resolve: number | null;
              /**
               * Title
               * @description Incident title
               */
              title: string;
          };
          /**
           * Id
           * @description Incident ID
           */
          id: string;
          /**
           * IncidentRelationships
           * @description Incident relationships.
           * @default null
           */
          relationships: {
              /**
               * IncidentUser
               * @description Incident user information.
               * @default null
               */
              commander_user: {
                  /**
                   * Email
                   * @description User email
                   * @default null
                   */
                  email: string | null;
                  /**
                   * Handle
                   * @description User handle
                   * @default null
                   */
                  handle: string | null;
                  /**
                   * Id
                   * @description User ID
                   */
                  id: string;
                  /**
                   * Name
                   * @description User name
                   * @default null
                   */
                  name: string | null;
              } | null;
              /**
               * IncidentUser
               * @description Incident user information.
               * @default null
               */
              created_by_user: {
                  /**
                   * Email
                   * @description User email
                   * @default null
                   */
                  email: string | null;
                  /**
                   * Handle
                   * @description User handle
                   * @default null
                   */
                  handle: string | null;
                  /**
                   * Id
                   * @description User ID
                   */
                  id: string;
                  /**
                   * Name
                   * @description User name
                   * @default null
                   */
                  name: string | null;
              } | null;
              /**
               * IncidentUser
               * @description Incident user information.
               * @default null
               */
              last_modified_by_user: {
                  /**
                   * Email
                   * @description User email
                   * @default null
                   */
                  email: string | null;
                  /**
                   * Handle
                   * @description User handle
                   * @default null
                   */
                  handle: string | null;
                  /**
                   * Id
                   * @description User ID
                   */
                  id: string;
                  /**
                   * Name
                   * @description User name
                   * @default null
                   */
                  name: string | null;
              } | null;
          } | null;
          /**
           * Type
           * @description Resource type (always 'incidents')
           */
          type: string;
      }[];
      /**
       * Total Count
       * @description Total number of incidents
       * @default null
       */
      total_count: number | null;
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
 * Type of DATADOG's DATADOG_LIST_LOG_INDEXES tool input.
 */
type DATADOG_LIST_LOG_INDEXES_INPUT = object;

/**
 * Type of DATADOG's DATADOG_LIST_LOG_INDEXES tool output.
 */
type DATADOG_LIST_LOG_INDEXES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Indexes
       * @description An array of log index objects.
       * @default null
       */
      indexes: {
          /**
           * Daily Limit
           * @description The daily limit of logs for the index.
           * @default null
           */
          daily_limit: number | null;
          /**
           * DailyLimitReset
           * @description Information about the daily limit reset.
           * @default null
           */
          daily_limit_reset: {
              /**
               * Reset Time
               * @description The time when the daily limit resets.
               * @default null
               */
              reset_time: string | null;
              /**
               * Reset Utc Offset
               * @description The UTC offset for the reset time.
               * @default null
               */
              reset_utc_offset: string | null;
          } | null;
          /**
           * Daily Limit Warning Threshold Percentage
           * @description The percentage threshold for daily limit warnings.
           * @default null
           */
          daily_limit_warning_threshold_percentage: number | null;
          /**
           * Exclusion Filters
           * @description An array of exclusion filters.
           * @default null
           */
          exclusion_filters: {
              /**
               * ExclusionFilterDetails
               * @description The filter details.
               * @default null
               */
              filter: {
                  /**
                   * Query
                   * @description The query defining the filter.
                   * @default null
                   */
                  query: string | null;
                  /**
                   * Sample Rate
                   * @description The sample rate for the filter.
                   * @default null
                   */
                  sample_rate: number | null;
              } | null;
              /**
               * Is Enabled
               * @description Indicates if the exclusion filter is enabled.
               * @default null
               */
              is_enabled: boolean | null;
              /**
               * Name
               * @description The name of the exclusion filter.
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * LogIndexFilter
           * @description The filter applied to the log index.
           * @default null
           */
          filter: {
              /**
               * Query
               * @description The query defining the filter.
               * @default null
               */
              query: string | null;
          } | null;
          /**
           * Is Rate Limited
           * @description Indicates if the index is rate-limited.
           * @default null
           */
          is_rate_limited: boolean | null;
          /**
           * Name
           * @description The name of the log index.
           * @default null
           */
          name: string | null;
          /**
           * Num Retention Days
           * @description The number of days logs are retained in the index.
           * @default null
           */
          num_retention_days: number | null;
      }[] | null;
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
 * Type of DATADOG's DATADOG_LIST_MONITORS tool input.
 */
type DATADOG_LIST_MONITORS_INPUT = {
  /**
   * Group States
   * @description When specified, shows additional information about the group states. Choose one or more from Alert, Warn, or No Data.
   * @default null
   */
  group_states: string[] | null;
  /**
   * Id Offset
   * @description Monitor ID offset for pagination
   * @default null
   */
  id_offset: number | null;
  /**
   * Monitor Tags
   * @description A comma separated list indicating what service and/or custom tags, if any, should be used to filter the list of monitors. Tags created in the Datadog UI automatically have the service key prepended. For example service:my-app.
   * @default null
   */
  monitor_tags: string[] | null;
  /**
   * Name
   * @description Filter monitors by name (substring match)
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description The page to start paginating from. If this argument is not specified, the request returns all monitors without pagination.
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description The number of monitors to return per page. If the page argument is not specified, the default behavior returns all monitors without pagination. Page size is capped at 100.
   * @default null
   */
  page_size: number | null;
  /**
   * Tags
   * @description A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope. For example host:host0.
   * @default null
   */
  tags: string[] | null;
  /**
   * With Downtimes
   * @description If this argument is set to true, then the returned data includes all current downtimes for the monitor.
   * @default null
   */
  with_downtimes: boolean | null;
};

/**
 * Type of DATADOG's DATADOG_LIST_MONITORS tool output.
 */
type DATADOG_LIST_MONITORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Monitors
       * @description List of monitors matching the criteria
       */
      monitors?: {
          /**
           * Created
           * @description Creation timestamp
           * @default null
           */
          created: string | null;
          /**
           * Creator
           * @description Monitor creator information
           * @default null
           */
          creator: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Monitor ID
           * @default null
           */
          id: number | null;
          /**
           * Message
           * @description Monitor message/notification
           * @default null
           */
          message: string | null;
          /**
           * Modified
           * @description Last modification timestamp
           * @default null
           */
          modified: string | null;
          /**
           * Name
           * @description Monitor name
           * @default null
           */
          name: string | null;
          /**
           * Options
           * @description Monitor options and settings
           * @default null
           */
          options: {
              [key: string]: unknown;
          } | null;
          /**
           * Overall State
           * @description Overall state of the monitor
           * @default null
           */
          overall_state: string | null;
          /**
           * Query
           * @description Monitor query
           * @default null
           */
          query: string | null;
          /**
           * Tags
           * @description Monitor tags
           * @default null
           */
          tags: string[] | null;
          /**
           * Type
           * @description Monitor type (metric alert, service check, etc.)
           * @default null
           */
          type: string | null;
      }[];
      /**
       * Total Count
       * @description Total number of monitors available
       * @default null
       */
      total_count: number | null;
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
 * Type of DATADOG's DATADOG_LIST_ROLES tool input.
 */
type DATADOG_LIST_ROLES_INPUT = {
  /**
   * Filter Name
   * @description Filter roles by name (partial match)
   * @default null
   */
  filter_name: string | null;
  /**
   * Page Number
   * @description Page number for pagination (default: 0)
   * @default 0
   */
  page_number: number | null;
  /**
   * Page Size
   * @description Number of roles per page (1-100, default: 10)
   * @default 10
   */
  page_size: number | null;
  /**
   * Sort
   * @description Sort field (name, created_at, user_count)
   * @default null
   */
  sort: string | null;
};

/**
 * Type of DATADOG's DATADOG_LIST_ROLES tool output.
 */
type DATADOG_LIST_ROLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Roles
       * @description List of roles
       */
      roles?: {
          /**
           * Attributes
           * @description Role attributes
           */
          attributes: {
              /**
               * Created At
               * @description Role creation timestamp
               * @default null
               */
              created_at: string | null;
              /**
               * Modified At
               * @description Last modification timestamp
               * @default null
               */
              modified_at: string | null;
              /**
               * Name
               * @description Role name
               */
              name: string;
              /**
               * User Count
               * @description Number of users with this role
               * @default null
               */
              user_count: number | null;
          };
          /**
           * Id
           * @description Role ID
           */
          id: string;
          /**
           * RoleRelationships
           * @description Role relationships.
           * @default null
           */
          relationships: {
              /**
               * Permissions
               * @description Role permissions
               * @default null
               */
              permissions: {
                  [key: string]: unknown;
              }[] | null;
              /**
               * Users
               * @description Users with this role
               * @default null
               */
              users: {
                  [key: string]: unknown;
              }[] | null;
          } | null;
          /**
           * Type
           * @description Resource type (always 'roles')
           */
          type: string;
      }[];
      /**
       * Total Count
       * @description Total number of roles
       * @default null
       */
      total_count: number | null;
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
 * Type of DATADOG's DATADOG_LIST_SERVICE_CHECKS tool input.
 */
type DATADOG_LIST_SERVICE_CHECKS_INPUT = {
  /**
   * Check
   * @description Filter by service check name
   * @default null
   */
  check: string | null;
  /**
   * End
   * @description End time as UNIX timestamp
   * @default null
   */
  end: number | null;
  /**
   * Start
   * @description Start time as UNIX timestamp
   * @default null
   */
  start: number | null;
  /**
   * Status
   * @description Filter by service check status. Valid values: 'ok', 'warning', 'critical', 'unknown'
   * @default null
   */
  status: string | null;
  /**
   * Tags
   * @description Filter by tags
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of DATADOG's DATADOG_LIST_SERVICE_CHECKS tool output.
 */
type DATADOG_LIST_SERVICE_CHECKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Checks
       * @description List of service check results
       */
      checks?: {
          /**
           * Check
           * @description Service check name
           * @default null
           */
          check: string | null;
          /**
           * Host Name
           * @description Host name
           * @default null
           */
          host_name: string | null;
          /**
           * Message
           * @description Check message
           * @default null
           */
          message: string | null;
          /**
           * Status
           * @description Service check status (0=OK, 1=WARNING, 2=CRITICAL, 3=UNKNOWN)
           * @default null
           */
          status: number | null;
          /**
           * Tags
           * @description Check tags
           * @default null
           */
          tags: string[] | null;
          /**
           * Timestamp
           * @description Timestamp of the check
           * @default null
           */
          timestamp: number | null;
      }[];
      /**
       * Total Count
       * @description Total number of checks
       * @default null
       */
      total_count: number | null;
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
 * Type of DATADOG's DATADOG_LIST_SL_OS tool input.
 */
type DATADOG_LIST_SL_OS_INPUT = {
  /**
   * Limit
   * @description Maximum number of SLOs to return (1-1000, default: 25)
   * @default 25
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of SLOs to skip for pagination (default: 0)
   * @default 0
   */
  offset: number | null;
  /**
   * Query
   * @description Search query to filter SLOs by name or description
   * @default null
   */
  query: string | null;
  /**
   * Tags
   * @description Filter SLOs by tags using a comma-separated list (e.g., 'env:prod,team:backend')
   * @default null
   */
  tags: string | null;
};

/**
 * Type of DATADOG's DATADOG_LIST_SL_OS tool output.
 */
type DATADOG_LIST_SL_OS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Slos
       * @description List of SLOs
       */
      slos?: {
          /**
           * Created At
           * @description Creation timestamp
           * @default null
           */
          created_at: number | null;
          /**
           * Creator
           * @description Creator information
           * @default null
           */
          creator: {
              [key: string]: unknown;
          } | null;
          /**
           * Description
           * @description SLO description
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique SLO identifier
           */
          id: string;
          /**
           * Modified At
           * @description Last modification timestamp
           * @default null
           */
          modified_at: number | null;
          /**
           * Monitor Ids
           * @description List of monitor IDs used in the SLO
           */
          monitor_ids?: number[];
          /**
           * Name
           * @description SLO display name
           */
          name: string;
          /**
           * Tags
           * @description List of tags associated with the SLO
           */
          tags?: string[];
          /**
           * Thresholds
           * @description SLO target thresholds
           */
          thresholds?: {
              /**
               * Target
               * @description Target percentage (e.g., 99.9)
               */
              target: number;
              /**
               * Timeframe
               * @description Timeframe for the target (e.g., '7d', '30d')
               */
              timeframe: string;
              /**
               * Warning
               * @description Warning threshold percentage
               * @default null
               */
              warning: number | null;
          }[];
          /**
           * Type
           * @description SLO type (metric or monitor)
           */
          type: string;
      }[];
      /**
       * Total Count
       * @description Total number of SLOs
       * @default null
       */
      total_count: number | null;
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
 * Type of DATADOG's DATADOG_LIST_SYNTHETICS tool input.
 */
type DATADOG_LIST_SYNTHETICS_INPUT = {
  /**
   * Limit
   * @description Maximum number of tests to return (1-200, default: 50)
   * @default 50
   */
  limit: number | null;
  /**
   * Locations
   * @description Filter tests by locations using a comma-separated list
   * @default null
   */
  locations: string | null;
  /**
   * Offset
   * @description Number of tests to skip for pagination (default: 0)
   * @default 0
   */
  offset: number | null;
  /**
   * Tags
   * @description Filter tests by tags using a comma-separated list (e.g., 'env:prod,team:frontend')
   * @default null
   */
  tags: string | null;
};

/**
 * Type of DATADOG's DATADOG_LIST_SYNTHETICS tool output.
 */
type DATADOG_LIST_SYNTHETICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tests
       * @description List of Synthetics tests
       */
      tests?: {
          /**
           * SyntheticsConfig
           * @description Synthetics test configuration.
           * @default null
           */
          config: {
              /**
               * Assertions
               * @description List of assertions
               */
              assertions?: {
                  /**
                   * Operator
                   * @description Assertion operator
                   */
                  operator: string;
                  /**
                   * Property
                   * @description Property to assert on
                   * @default null
                   */
                  property: string | null;
                  /**
                   * Target
                   * @description Assertion target value
                   * @default null
                   */
                  target: string | null;
                  /**
                   * Type
                   * @description Assertion type
                   */
                  type: string;
              }[];
              /**
               * Request
               * @description Request configuration
               * @default null
               */
              request: {
                  [key: string]: unknown;
              } | null;
              /**
               * Variables
               * @description Test variables
               * @default null
               */
              variables: {
                  [key: string]: unknown;
              }[] | null;
          } | null;
          /**
           * Created At
           * @description Creation timestamp
           * @default null
           */
          created_at: string | null;
          /**
           * Created By
           * @description Creator information
           * @default null
           */
          created_by: {
              [key: string]: unknown;
          } | null;
          /**
           * Locations
           * @description Test execution locations
           */
          locations?: string[];
          /**
           * Message
           * @description Test message/description
           * @default null
           */
          message: string | null;
          /**
           * Modified At
           * @description Last modification timestamp
           * @default null
           */
          modified_at: string | null;
          /**
           * Modified By
           * @description Last modifier information
           * @default null
           */
          modified_by: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Test display name
           */
          name: string;
          /**
           * Public Id
           * @description Public test identifier
           */
          public_id: string;
          /**
           * Status
           * @description Test status (live, paused)
           */
          status: string;
          /**
           * Subtype
           * @description Test subtype
           * @default null
           */
          subtype: string | null;
          /**
           * Tags
           * @description List of tags associated with the test
           */
          tags?: string[];
          /**
           * Type
           * @description Test type (api, browser, etc.)
           */
          type: string;
      }[];
      /**
       * Total Count
       * @description Total number of tests
       * @default null
       */
      total_count: number | null;
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
 * Type of DATADOG's DATADOG_LIST_USERS tool input.
 */
type DATADOG_LIST_USERS_INPUT = {
  /**
   * Filter Status
   * @description Filter by user status (Active, Pending, Disabled)
   * @default null
   */
  filter_status: string | null;
  /**
   * Page Number
   * @description Page number for pagination (default: 0)
   * @default 0
   */
  page_number: number | null;
  /**
   * Page Size
   * @description Number of users per page (1-1000, default: 50)
   * @default 50
   */
  page_size: number | null;
  /**
   * Sort
   * @description Sort field (name, email, status, created_at)
   * @default null
   */
  sort: string | null;
  /**
   * Sort Dir
   * @description Sort direction (asc or desc)
   * @default asc
   */
  sort_dir: string | null;
};

/**
 * Type of DATADOG's DATADOG_LIST_USERS tool output.
 */
type DATADOG_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Total Count
       * @description Total number of users
       * @default null
       */
      total_count: number | null;
      /**
       * Total Filtered Count
       * @description Total number of users after filtering
       * @default null
       */
      total_filtered_count: number | null;
      /**
       * Users
       * @description List of users
       */
      users?: {
          /**
           * Attributes
           * @description User attributes
           */
          attributes: {
              /**
               * Created At
               * @description Account creation timestamp
               * @default null
               */
              created_at: string | null;
              /**
               * Disabled
               * @description Whether user is disabled
               * @default null
               */
              disabled: boolean | null;
              /**
               * Email
               * @description User's email address
               */
              email: string;
              /**
               * Handle
               * @description User's handle/username
               */
              handle: string;
              /**
               * Modified At
               * @description Last modification timestamp
               * @default null
               */
              modified_at: string | null;
              /**
               * Name
               * @description User's full name
               * @default null
               */
              name: string | null;
              /**
               * Service Account
               * @description Whether this is a service account
               * @default null
               */
              service_account: boolean | null;
              /**
               * Status
               * @description User status (Active, Pending, Disabled)
               * @default null
               */
              status: string | null;
              /**
               * Title
               * @description User's job title
               * @default null
               */
              title: string | null;
              /**
               * Verified
               * @description Whether user email is verified
               * @default null
               */
              verified: boolean | null;
          };
          /**
           * Id
           * @description User ID
           */
          id: string;
          /**
           * UserRelationships
           * @description User relationships.
           * @default null
           */
          relationships: {
              /**
               * Org
               * @description Organization information
               * @default null
               */
              org: {
                  [key: string]: unknown;
              } | null;
              /**
               * Roles
               * @description User roles
               * @default null
               */
              roles: {
                  [key: string]: unknown;
              }[] | null;
          } | null;
          /**
           * Type
           * @description Resource type (always 'users')
           */
          type: string;
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
 * Type of DATADOG's DATADOG_LIST_WEBHOOKS tool input.
 */
type DATADOG_LIST_WEBHOOKS_INPUT = {
  /**
   * Limit
   * @description Maximum number of webhooks to return (1-100, default: 50)
   * @default 50
   */
  limit: number | null;
};

/**
 * Type of DATADOG's DATADOG_LIST_WEBHOOKS tool output.
 */
type DATADOG_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Total Count
       * @description Total number of webhooks
       * @default null
       */
      total_count: number | null;
      /**
       * Webhooks
       * @description List of webhooks
       */
      webhooks?: {
          /**
           * Custom Headers
           * @description Custom headers for the webhook
           * @default null
           */
          custom_headers: string | null;
          /**
           * Encode As Form
           * @description Whether to encode payload as form data
           * @default null
           */
          encode_as_form: boolean | null;
          /**
           * Name
           * @description Webhook name
           */
          name: string;
          /**
           * Payload
           * @description Custom payload template
           * @default null
           */
          payload: string | null;
          /**
           * Url
           * @description Webhook URL endpoint
           */
          url: string;
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
 * Type of DATADOG's DATADOG_MUTE_MONITOR tool input.
 */
type DATADOG_MUTE_MONITOR_INPUT = {
  /**
   * End
   * @description POSIX timestamp for when the mute should expire (optional, if not specified the monitor remains muted until manually unmuted)
   * @default null
   */
  end: number | null;
  /**
   * Monitor Id
   * @description The ID of the monitor to mute
   */
  monitor_id?: number;
  /**
   * Override
   * @description Whether to override existing mute settings
   * @default null
   */
  override: boolean | null;
};

/**
 * Type of DATADOG's DATADOG_MUTE_MONITOR tool output.
 */
type DATADOG_MUTE_MONITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Mute confirmation message
       */
      message: string;
      /**
       * Monitor Id
       * @description ID of the muted monitor
       */
      monitor_id: number;
      /**
       * Mute End Time
       * @description POSIX timestamp when mute expires
       * @default null
       */
      mute_end_time: number | null;
      /**
       * Muted
       * @description Whether the monitor is now muted
       */
      muted: boolean;
      /**
       * Success
       * @description Whether the monitor was muted successfully
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
 * Type of DATADOG's DATADOG_QUERY_METRICS tool input.
 */
type DATADOG_QUERY_METRICS_INPUT = {
  /**
   * From Timestamp
   * @description Start time as UNIX timestamp. Note: Time range cannot exceed 1 year.
   */
  from_timestamp?: number;
  /**
   * Query
   * @description Datadog metrics query string
   */
  query?: string;
  /**
   * To Timestamp
   * @description End time as UNIX timestamp. Note: Time range cannot exceed 1 year.
   */
  to_timestamp?: number;
};

/**
 * Type of DATADOG's DATADOG_QUERY_METRICS tool output.
 */
type DATADOG_QUERY_METRICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if query failed
       * @default null
       */
      error: string | null;
      /**
       * From Date
       * @description Query start timestamp
       * @default null
       */
      from_date: number | null;
      /**
       * Message
       * @description Additional message from the API
       * @default null
       */
      message: string | null;
      /**
       * Query
       * @description Original query
       * @default null
       */
      query: string | null;
      /**
       * Res Type
       * @description Response type
       * @default null
       */
      res_type: string | null;
      /**
       * Resp Version
       * @description Response version
       * @default null
       */
      resp_version: number | null;
      /**
       * Series
       * @description Time series data
       * @default null
       */
      series: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Status
       * @description Query status
       * @default null
       */
      status: string | null;
      /**
       * To Date
       * @description Query end timestamp
       * @default null
       */
      to_date: number | null;
      /**
       * Values
       * @description Raw values if series not available
       * @default null
       */
      values: (number)[][] | null;
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
 * Type of DATADOG's DATADOG_SEARCH_LOGS tool input.
 */
type DATADOG_SEARCH_LOGS_INPUT = {
  /**
   * Index
   * @description Index name to search in
   * @default null
   */
  index: string | null;
  /**
   * Limit
   * @description Maximum number of logs to return (max 1000, default 50)
   * @default null
   */
  limit: number | null;
  /**
   * Query
   * @description Log search query string
   */
  query?: string;
  /**
   * Start At
   * @description Pagination cursor for next page
   * @default null
   */
  start_at: string | null;
  /**
   * Time From
   * @description Start time as UNIX timestamp (in milliseconds). Note: Time range cannot exceed 15 days.
   */
  time_from?: number;
  /**
   * Time To
   * @description End time as UNIX timestamp (in milliseconds). Note: Time range cannot exceed 15 days.
   */
  time_to?: number;
};

/**
 * Type of DATADOG's DATADOG_SEARCH_LOGS tool output.
 */
type DATADOG_SEARCH_LOGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Logs
       * @description List of log entries matching the search criteria
       */
      logs?: {
          /**
           * Attributes
           * @description Log attributes
           * @default null
           */
          attributes: {
              [key: string]: unknown;
          } | null;
          /**
           * Host
           * @description Host name
           * @default null
           */
          host: string | null;
          /**
           * Id
           * @description Log entry ID
           * @default null
           */
          id: string | null;
          /**
           * Message
           * @description Log message
           * @default null
           */
          message: string | null;
          /**
           * Service
           * @description Service name
           * @default null
           */
          service: string | null;
          /**
           * Tags
           * @description Log tags
           * @default null
           */
          tags: string[] | null;
          /**
           * Timestamp
           * @description Log timestamp
           * @default null
           */
          timestamp: string | null;
      }[];
      /**
       * Next Log Id
       * @description ID for pagination
       * @default null
       */
      nextLogId: string | null;
      /**
       * Request Id
       * @description Request ID for debugging
       * @default null
       */
      requestId: string | null;
      /**
       * Status
       * @description Search status
       * @default null
       */
      status: string | null;
      /**
       * Total
       * @description Total number of logs found
       * @default null
       */
      total: number | null;
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
 * Type of DATADOG's DATADOG_SEARCH_SPANS_ANALYTICS tool input.
 */
type DATADOG_SEARCH_SPANS_ANALYTICS_INPUT = {
  /**
   * Compute
   * @description Aggregations to compute
   * @default null
   */
  compute: {
      /**
       * Metric
       * @description Metric to aggregate
       */
      metric: string;
      /**
       * Percentile
       * @description Percentile value (required when type is 'percentile')
       * @default null
       */
      percentile: number | null;
      /**
       * Type
       * @description Aggregation type
       */
      type: string;
  }[] | null;
  /**
   * Filter
   * @description Filter criteria for span search
   */
  filter?: {
      /**
       * From Time
       * @description Start time in ISO format or relative time
       * @default null
       */
      from_time: string | null;
      /**
       * Indexes
       * @description List of indexes to search
       * @default null
       */
      indexes: string[] | null;
      /**
       * Query
       * @description Search query using Datadog's query syntax
       * @default null
       */
      query: string | null;
      /**
       * To Time
       * @description End time in ISO format or relative time
       * @default null
       */
      to_time: string | null;
  };
  /**
   * Group By
   * @description Group by configuration for aggregations
   * @default null
   */
  group_by: {
      /**
       * Facet
       * @description Field to group by
       */
      facet: string;
      /**
       * Limit
       * @description Maximum number of groups to return
       * @default 10
       */
      limit: number | null;
      /**
       * Sort
       * @description Sort configuration for groups
       * @default null
       */
      sort: {
          [key: string]: unknown;
      } | null;
  }[] | null;
  /**
   * Options
   * @description Additional search options
   * @default null
   */
  options: {
      [key: string]: unknown;
  } | null;
  /**
   * Page
   * @description Pagination options
   * @default null
   */
  page: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of DATADOG's DATADOG_SEARCH_SPANS_ANALYTICS tool output.
 */
type DATADOG_SEARCH_SPANS_ANALYTICS_OUTPUT = {
  /**
   * Buckets
   * @description Aggregated span buckets
   */
  buckets?: {
      /**
       * By
       * @description Group by values
       * @default null
       */
      by: {
          [key: string]: unknown;
      } | null;
      /**
       * Computes
       * @description Computed aggregation values
       * @default null
       */
      computes: {
          [key: string]: unknown;
      } | null;
  }[];
  /**
   * Data
   * @description Response data containing buckets
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response metadata
   * @default null
   */
  meta: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Count
   * @description Total number of spans matching the query
   * @default null
   */
  total_count: number | null;
};

/**
 * Type of DATADOG's DATADOG_SEARCH_TRACES tool input.
 */
type DATADOG_SEARCH_TRACES_INPUT = {
  /**
   * Filter
   * @description Filter criteria for trace search
   */
  filter?: {
      /**
       * From Time
       * @description Start time in ISO format or relative time
       */
      from_time: string;
      /**
       * Query
       * @description Search query using Datadog's trace query syntax
       * @default null
       */
      query: string | null;
      /**
       * To Time
       * @description End time in ISO format or relative time
       */
      to_time: string;
  };
  /**
   * Options
   * @description Additional search options
   * @default null
   */
  options: {
      [key: string]: unknown;
  } | null;
  /**
   * Page
   * @description Pagination options
   * @default null
   */
  page: {
      [key: string]: unknown;
  } | null;
  /**
   * TraceSearchSort
   * @description Sort configuration for trace search.
   * @default null
   */
  sort: {
      /**
       * Field
       * @description Field to sort by
       * @default timestamp
       */
      field: string;
      /**
       * Order
       * @description Sort order
       * @default desc
       */
      order: string;
  } | null;
};

/**
 * Type of DATADOG's DATADOG_SEARCH_TRACES tool output.
 */
type DATADOG_SEARCH_TRACES_OUTPUT = {
  /**
   * Data
   * @description List of traces matching the search criteria
   */
  data?: {
      /**
       * Duration
       * @description Total duration in nanoseconds
       * @default null
       */
      duration: number | null;
      /**
       * End Time
       * @description Trace end time
       * @default null
       */
      end_time: string | null;
      /**
       * Env
       * @description Environment
       * @default null
       */
      env: string | null;
      /**
       * Error
       * @description Whether trace contains errors
       * @default null
       */
      error: boolean | null;
      /**
       * Resource Name
       * @description Root resource name
       * @default null
       */
      resource_name: string | null;
      /**
       * Service
       * @description Primary service
       * @default null
       */
      service: string | null;
      /**
       * Spans
       * @description List of spans in the trace
       */
      spans?: {
          /**
           * Duration
           * @description Duration in nanoseconds
           * @default null
           */
          duration: number | null;
          /**
           * Error
           * @description Error flag (0 or 1)
           * @default null
           */
          error: number | null;
          /**
           * Meta
           * @description Span metadata
           * @default null
           */
          meta: {
              [key: string]: unknown;
          } | null;
          /**
           * Metrics
           * @description Span metrics
           * @default null
           */
          metrics: {
              [key: string]: unknown;
          } | null;
          /**
           * Operation
           * @description Operation name
           * @default null
           */
          operation: string | null;
          /**
           * Parent Id
           * @description Parent span ID
           * @default null
           */
          parent_id: string | null;
          /**
           * Resource
           * @description Resource name
           * @default null
           */
          resource: string | null;
          /**
           * Service
           * @description Service name
           * @default null
           */
          service: string | null;
          /**
           * Span Id
           * @description Unique span ID
           * @default null
           */
          span_id: string | null;
          /**
           * Start
           * @description Start time in nanoseconds
           * @default null
           */
          start: number | null;
          /**
           * Trace Id
           * @description Parent trace ID
           * @default null
           */
          trace_id: string | null;
          /**
           * Type
           * @description Span type
           * @default null
           */
          type: string | null;
      }[];
      /**
       * Start Time
       * @description Trace start time
       * @default null
       */
      start_time: string | null;
      /**
       * Trace Id
       * @description Unique trace ID
       * @default null
       */
      trace_id: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Links for pagination
   * @default null
   */
  links: {
      [key: string]: unknown;
  } | null;
  /**
   * Meta
   * @description Response metadata including pagination info
   * @default null
   */
  meta: {
      [key: string]: unknown;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total Count
   * @description Total number of traces found
   * @default null
   */
  total_count: number | null;
};

/**
 * Type of DATADOG's DATADOG_SUBMIT_METRICS tool input.
 */
type DATADOG_SUBMIT_METRICS_INPUT = {
  /**
   * Series
   * @description List of metric series to submit
   */
  series?: {
      /**
       * Host
       * @description Host name associated with the metric
       * @default null
       */
      host: string | null;
      /**
       * Interval
       * @description Interval in seconds between points (for rate metrics)
       * @default null
       */
      interval: number | null;
      /**
       * Metric
       * @description Name of the metric (must be unique within your organization)
       */
      metric: string;
      /**
       * Points
       * @description List of metric data points
       */
      points: {
          /**
           * Timestamp
           * @description UNIX timestamp for the metric point. If not provided, current time is used
           * @default null
           */
          timestamp: number | null;
          /**
           * Value
           * @description Numeric value for the metric
           */
          value: number;
      }[];
      /**
       * Tags
       * @description List of tags to associate with the metric
       * @default null
       */
      tags: string[] | null;
      /**
       * Type
       * @description Type of metric. Valid values: 'gauge', 'rate', 'count'
       * @default null
       */
      type: string | null;
  }[];
};

/**
 * Type of DATADOG's DATADOG_SUBMIT_METRICS tool output.
 */
type DATADOG_SUBMIT_METRICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors if any occurred
       * @default null
       */
      errors: string[] | null;
      /**
       * Message
       * @description Additional message from the API
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Status of the submission
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
 * Type of DATADOG's DATADOG_UNMUTE_MONITOR tool input.
 */
type DATADOG_UNMUTE_MONITOR_INPUT = {
  /**
   * All Scopes
   * @description Whether to unmute the monitor for all scopes (default: false)
   * @default null
   */
  all_scopes: boolean | null;
  /**
   * Monitor Id
   * @description The ID of the monitor to unmute
   */
  monitor_id?: number;
};

/**
 * Type of DATADOG's DATADOG_UNMUTE_MONITOR tool output.
 */
type DATADOG_UNMUTE_MONITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Unmute confirmation message
       */
      message: string;
      /**
       * Monitor Id
       * @description ID of the unmuted monitor
       */
      monitor_id: number;
      /**
       * Muted
       * @description Whether the monitor is now muted (should be False)
       */
      muted: boolean;
      /**
       * Success
       * @description Whether the monitor was unmuted successfully
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
 * Type of DATADOG's DATADOG_UPDATE_DASHBOARD tool input.
 */
type DATADOG_UPDATE_DASHBOARD_INPUT = {
  /**
   * Dashboard Id
   * @description Dashboard ID to update
   */
  dashboard_id?: string;
  /**
   * Description
   * @description Dashboard description
   * @default null
   */
  description: string | null;
  /**
   * Is Read Only
   * @description Whether the dashboard is read-only
   * @default null
   */
  is_read_only: boolean | null;
  /**
   * Layout Type
   * @description Dashboard layout type ('ordered' or 'free')
   * @default null
   */
  layout_type: string | null;
  /**
   * Notify List
   * @description List of users to notify of dashboard changes
   * @default null
   */
  notify_list: string[] | null;
  /**
   * Tags
   * @description Tags to associate with the dashboard
   * @default null
   */
  tags: string[] | null;
  /**
   * Template Variables
   * @description Template variables for dynamic dashboards
   * @default null
   */
  template_variables: {
      /**
       * Available Values
       * @description Available values for the variable
       * @default null
       */
      available_values: string[] | null;
      /**
       * Default
       * @description Default value
       * @default null
       */
      default: string | null;
      /**
       * Name
       * @description Variable name
       */
      name: string;
      /**
       * Prefix
       * @description Variable prefix
       * @default null
       */
      prefix: string | null;
  }[] | null;
  /**
   * Title
   * @description Dashboard title
   * @default null
   */
  title: string | null;
  /**
   * Widgets
   * @description List of widgets to include in the dashboard
   * @default null
   */
  widgets: {
      /**
       * Definition
       * @description Widget definition including type, requests, and styling
       */
      definition: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Widget ID (auto-generated if not provided)
       * @default null
       */
      id: number | null;
      /**
       * Layout
       * @description Widget layout information
       * @default null
       */
      layout: {
          [key: string]: unknown;
      } | null;
  }[] | null;
};

/**
 * Type of DATADOG's DATADOG_UPDATE_DASHBOARD tool output.
 */
type DATADOG_UPDATE_DASHBOARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Author Handle
       * @description Dashboard author
       * @default null
       */
      author_handle: string | null;
      /**
       * Created At
       * @description Creation timestamp
       * @default null
       */
      created_at: string | null;
      /**
       * Description
       * @description Dashboard description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Dashboard ID
       */
      id: string;
      /**
       * Layout Type
       * @description Dashboard layout type
       */
      layout_type: string;
      /**
       * Modified At
       * @description Last modification timestamp
       * @default null
       */
      modified_at: string | null;
      /**
       * Success
       * @description Whether the dashboard was updated successfully
       */
      success: boolean;
      /**
       * Title
       * @description Dashboard title
       */
      title: string;
      /**
       * Url
       * @description Dashboard URL
       * @default null
       */
      url: string | null;
      /**
       * Widgets
       * @description Dashboard widgets
       */
      widgets?: {
          [key: string]: unknown;
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
 * Type of DATADOG's DATADOG_UPDATE_HOST_TAGS tool input.
 */
type DATADOG_UPDATE_HOST_TAGS_INPUT = {
  /**
   * Host Name
   * @description Name of the host to update tags for
   */
  host_name?: string;
  /**
   * Source
   * @description Source of the tags (e.g., 'users', 'chef', 'puppet'). Defaults to 'users'
   * @default null
   */
  source: string | null;
  /**
   * Tags
   * @description List of tags to assign to the host (replaces existing tags)
   */
  tags?: string[];
};

/**
 * Type of DATADOG's DATADOG_UPDATE_HOST_TAGS tool output.
 */
type DATADOG_UPDATE_HOST_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Host
       * @description Host name
       * @default null
       */
      host: string | null;
      /**
       * Source
       * @description Source of the tags
       * @default null
       */
      source: string | null;
      /**
       * Tags
       * @description Updated tags
       * @default null
       */
      tags: string[] | null;
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
 * Type of DATADOG's DATADOG_UPDATE_MONITOR tool input.
 */
type DATADOG_UPDATE_MONITOR_INPUT = {
  /**
   * Message
   * @description Message to include in notifications (supports @mentions and markdown)
   * @default null
   */
  message: string | null;
  /**
   * Monitor Id
   * @description The ID of the monitor to update
   */
  monitor_id?: number;
  /**
   * Name
   * @description Name of the monitor
   * @default null
   */
  name: string | null;
  /**
   * MonitorUpdateOptions
   * @description Monitor update configuration options.
   * @default null
   */
  options: {
      /**
       * Escalation Message
       * @description Message for escalation notifications
       * @default null
       */
      escalation_message: string | null;
      /**
       * Include Tags
       * @description Include tags in alert notifications
       * @default null
       */
      include_tags: boolean | null;
      /**
       * Locked
       * @description Lock monitor from editing
       * @default null
       */
      locked: boolean | null;
      /**
       * New Host Delay
       * @description Delay in seconds for new hosts
       * @default null
       */
      new_host_delay: number | null;
      /**
       * No Data Timeframe
       * @description Number of minutes to wait before considering no data
       * @default null
       */
      no_data_timeframe: number | null;
      /**
       * Notify Audit
       * @description Notify when audit logs are enabled
       * @default null
       */
      notify_audit: boolean | null;
      /**
       * Notify No Data
       * @description Notify when monitor has no data
       * @default null
       */
      notify_no_data: boolean | null;
      /**
       * Renotify Interval
       * @description Minutes to wait before re-notifying
       * @default null
       */
      renotify_interval: number | null;
      /**
       * Require Full Window
       * @description Require full window of data for evaluation
       * @default null
       */
      require_full_window: boolean | null;
      /**
       * Thresholds
       * @description Alert thresholds (critical, warning, ok, critical_recovery, warning_recovery)
       * @default null
       */
      thresholds: {
          [key: string]: unknown;
      } | null;
      /**
       * Timeout H
       * @description Timeout in hours for no data
       * @default null
       */
      timeout_h: number | null;
  } | null;
  /**
   * Priority
   * @description Priority level (1-5, where 1 is highest)
   * @default null
   */
  priority: number | null;
  /**
   * Query
   * @description Query that defines what the monitor tracks
   * @default null
   */
  query: string | null;
  /**
   * Tags
   * @description List of tags to assign to the monitor
   * @default null
   */
  tags: string[] | null;
  /**
   * Type
   * @description Type of monitor. Valid values: 'metric alert', 'service check', 'event alert', 'query alert', 'composite', 'log alert'
   * @default null
   */
  type: string | null;
};

/**
 * Type of DATADOG's DATADOG_UPDATE_MONITOR tool output.
 */
type DATADOG_UPDATE_MONITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Creation timestamp
       * @default null
       */
      created: string | null;
      /**
       * Creator
       * @description Monitor creator information
       * @default null
       */
      creator: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description Monitor ID
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Monitor message
       * @default null
       */
      message: string | null;
      /**
       * Modified
       * @description Last modification timestamp
       * @default null
       */
      modified: string | null;
      /**
       * Name
       * @description Monitor name
       * @default null
       */
      name: string | null;
      /**
       * Options
       * @description Monitor options
       * @default null
       */
      options: {
          [key: string]: unknown;
      } | null;
      /**
       * Overall State
       * @description Overall state of the monitor
       * @default null
       */
      overall_state: string | null;
      /**
       * Query
       * @description Monitor query
       * @default null
       */
      query: string | null;
      /**
       * Tags
       * @description Monitor tags
       * @default null
       */
      tags: string[] | null;
      /**
       * Type
       * @description Monitor type
       * @default null
       */
      type: string | null;
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
 * Type map of all available tool input types for toolkit "DATADOG".
 */
export type DATADOG_TOOL_INPUTS = {
  CREATE_DASHBOARD: DATADOG_CREATE_DASHBOARD_INPUT
  CREATE_DOWNTIME: DATADOG_CREATE_DOWNTIME_INPUT
  CREATE_EVENT: DATADOG_CREATE_EVENT_INPUT
  CREATE_MONITOR: DATADOG_CREATE_MONITOR_INPUT
  CREATE_SLO: DATADOG_CREATE_SLO_INPUT
  CREATE_SYNTHETIC_API_TEST: DATADOG_CREATE_SYNTHETIC_API_TEST_INPUT
  CREATE_WEBHOOK: DATADOG_CREATE_WEBHOOK_INPUT
  DELETE_DASHBOARD: DATADOG_DELETE_DASHBOARD_INPUT
  DELETE_MONITOR: DATADOG_DELETE_MONITOR_INPUT
  GET_DASHBOARD: DATADOG_GET_DASHBOARD_INPUT
  GET_MONITOR: DATADOG_GET_MONITOR_INPUT
  GET_SERVICE_DEPENDENCIES: DATADOG_GET_SERVICE_DEPENDENCIES_INPUT
  GET_SYNTHETICS_LOCATIONS: DATADOG_GET_SYNTHETICS_LOCATIONS_INPUT
  GET_TAGS: DATADOG_GET_TAGS_INPUT
  GET_TRACE_BY_ID: DATADOG_GET_TRACE_BY_ID_INPUT
  GET_USAGE_SUMMARY: DATADOG_GET_USAGE_SUMMARY_INPUT
  LIST_ALL_TAGS: DATADOG_LIST_ALL_TAGS_INPUT
  LIST_API_KEYS: DATADOG_LIST_API_KEYS_INPUT
  LIST_APM_SERVICES: DATADOG_LIST_APM_SERVICES_INPUT
  LIST_AWS_INTEGRATION: DATADOG_LIST_AWS_INTEGRATION_INPUT
  LIST_DASHBOARDS: DATADOG_LIST_DASHBOARDS_INPUT
  LIST_EVENTS: DATADOG_LIST_EVENTS_INPUT
  LIST_HOSTS: DATADOG_LIST_HOSTS_INPUT
  LIST_INCIDENTS: DATADOG_LIST_INCIDENTS_INPUT
  LIST_LOG_INDEXES: DATADOG_LIST_LOG_INDEXES_INPUT
  LIST_MONITORS: DATADOG_LIST_MONITORS_INPUT
  LIST_ROLES: DATADOG_LIST_ROLES_INPUT
  LIST_SERVICE_CHECKS: DATADOG_LIST_SERVICE_CHECKS_INPUT
  LIST_SL_OS: DATADOG_LIST_SL_OS_INPUT
  LIST_SYNTHETICS: DATADOG_LIST_SYNTHETICS_INPUT
  LIST_USERS: DATADOG_LIST_USERS_INPUT
  LIST_WEBHOOKS: DATADOG_LIST_WEBHOOKS_INPUT
  MUTE_MONITOR: DATADOG_MUTE_MONITOR_INPUT
  QUERY_METRICS: DATADOG_QUERY_METRICS_INPUT
  SEARCH_LOGS: DATADOG_SEARCH_LOGS_INPUT
  SEARCH_SPANS_ANALYTICS: DATADOG_SEARCH_SPANS_ANALYTICS_INPUT
  SEARCH_TRACES: DATADOG_SEARCH_TRACES_INPUT
  SUBMIT_METRICS: DATADOG_SUBMIT_METRICS_INPUT
  UNMUTE_MONITOR: DATADOG_UNMUTE_MONITOR_INPUT
  UPDATE_DASHBOARD: DATADOG_UPDATE_DASHBOARD_INPUT
  UPDATE_HOST_TAGS: DATADOG_UPDATE_HOST_TAGS_INPUT
  UPDATE_MONITOR: DATADOG_UPDATE_MONITOR_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DATADOG".
 */
export type DATADOG_TOOL_OUTPUTS = {
  CREATE_DASHBOARD: DATADOG_CREATE_DASHBOARD_OUTPUT
  CREATE_DOWNTIME: DATADOG_CREATE_DOWNTIME_OUTPUT
  CREATE_EVENT: DATADOG_CREATE_EVENT_OUTPUT
  CREATE_MONITOR: DATADOG_CREATE_MONITOR_OUTPUT
  CREATE_SLO: DATADOG_CREATE_SLO_OUTPUT
  CREATE_SYNTHETIC_API_TEST: DATADOG_CREATE_SYNTHETIC_API_TEST_OUTPUT
  CREATE_WEBHOOK: DATADOG_CREATE_WEBHOOK_OUTPUT
  DELETE_DASHBOARD: DATADOG_DELETE_DASHBOARD_OUTPUT
  DELETE_MONITOR: DATADOG_DELETE_MONITOR_OUTPUT
  GET_DASHBOARD: DATADOG_GET_DASHBOARD_OUTPUT
  GET_MONITOR: DATADOG_GET_MONITOR_OUTPUT
  GET_SERVICE_DEPENDENCIES: DATADOG_GET_SERVICE_DEPENDENCIES_OUTPUT
  GET_SYNTHETICS_LOCATIONS: DATADOG_GET_SYNTHETICS_LOCATIONS_OUTPUT
  GET_TAGS: DATADOG_GET_TAGS_OUTPUT
  GET_TRACE_BY_ID: DATADOG_GET_TRACE_BY_ID_OUTPUT
  GET_USAGE_SUMMARY: DATADOG_GET_USAGE_SUMMARY_OUTPUT
  LIST_ALL_TAGS: DATADOG_LIST_ALL_TAGS_OUTPUT
  LIST_API_KEYS: DATADOG_LIST_API_KEYS_OUTPUT
  LIST_APM_SERVICES: DATADOG_LIST_APM_SERVICES_OUTPUT
  LIST_AWS_INTEGRATION: DATADOG_LIST_AWS_INTEGRATION_OUTPUT
  LIST_DASHBOARDS: DATADOG_LIST_DASHBOARDS_OUTPUT
  LIST_EVENTS: DATADOG_LIST_EVENTS_OUTPUT
  LIST_HOSTS: DATADOG_LIST_HOSTS_OUTPUT
  LIST_INCIDENTS: DATADOG_LIST_INCIDENTS_OUTPUT
  LIST_LOG_INDEXES: DATADOG_LIST_LOG_INDEXES_OUTPUT
  LIST_MONITORS: DATADOG_LIST_MONITORS_OUTPUT
  LIST_ROLES: DATADOG_LIST_ROLES_OUTPUT
  LIST_SERVICE_CHECKS: DATADOG_LIST_SERVICE_CHECKS_OUTPUT
  LIST_SL_OS: DATADOG_LIST_SL_OS_OUTPUT
  LIST_SYNTHETICS: DATADOG_LIST_SYNTHETICS_OUTPUT
  LIST_USERS: DATADOG_LIST_USERS_OUTPUT
  LIST_WEBHOOKS: DATADOG_LIST_WEBHOOKS_OUTPUT
  MUTE_MONITOR: DATADOG_MUTE_MONITOR_OUTPUT
  QUERY_METRICS: DATADOG_QUERY_METRICS_OUTPUT
  SEARCH_LOGS: DATADOG_SEARCH_LOGS_OUTPUT
  SEARCH_SPANS_ANALYTICS: DATADOG_SEARCH_SPANS_ANALYTICS_OUTPUT
  SEARCH_TRACES: DATADOG_SEARCH_TRACES_OUTPUT
  SUBMIT_METRICS: DATADOG_SUBMIT_METRICS_OUTPUT
  UNMUTE_MONITOR: DATADOG_UNMUTE_MONITOR_OUTPUT
  UPDATE_DASHBOARD: DATADOG_UPDATE_DASHBOARD_OUTPUT
  UPDATE_HOST_TAGS: DATADOG_UPDATE_HOST_TAGS_OUTPUT
  UPDATE_MONITOR: DATADOG_UPDATE_MONITOR_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DATADOG toolkit.
 */
export const DATADOG = {
  slug: "datadog",
  tools: {
    /**
     * Create a dashboard in datadog. dashboards provide customizable visualizations for monitoring your infrastructure, applications, and business metrics in a unified view.
     */
    CREATE_DASHBOARD: "DATADOG_CREATE_DASHBOARD",
    /**
     * Creates a new downtime in datadog to suppress alerts during maintenance windows or planned outages. useful for preventing false alarms during deployments or maintenance.
     */
    CREATE_DOWNTIME: "DATADOG_CREATE_DOWNTIME",
    /**
     * Creates a new event in datadog. events are useful for tracking deployments, outages, configuration changes, and other important occurrences.
     */
    CREATE_EVENT: "DATADOG_CREATE_EVENT",
    /**
     * Creates a new datadog monitor to track metrics, logs, or other data sources with configurable alerting thresholds and notifications.
     */
    CREATE_MONITOR: "DATADOG_CREATE_MONITOR",
    /**
     * Create a service level objective (slo) in datadog. slos help you define and track reliability targets for your services, enabling data-driven decisions about service quality and reliability investments.
     */
    CREATE_SLO: "DATADOG_CREATE_SLO",
    /**
     * Create a synthetic api test in datadog. creates a new synthetic api test that continuously monitors api endpoints from multiple locations worldwide. useful for proactive monitoring of api uptime, performance, and functionality.
     */
    CREATE_SYNTHETIC_API_TEST: "DATADOG_CREATE_SYNTHETIC_API_TEST",
    /**
     * Create a webhook in datadog. webhooks enable you to receive notifications from datadog monitors and alerts to external services and applications.
     */
    CREATE_WEBHOOK: "DATADOG_CREATE_WEBHOOK",
    /**
     * Delete a dashboard in datadog. permanently removes a dashboard from your organization. this action cannot be undone. use with caution.
     */
    DELETE_DASHBOARD: "DATADOG_DELETE_DASHBOARD",
    /**
     * Deletes a datadog monitor permanently. use with caution as this action cannot be undone.
     */
    DELETE_MONITOR: "DATADOG_DELETE_MONITOR",
    /**
     * Get a specific dashboard from datadog. retrieves detailed information about a dashboard including its widgets, layout, template variables, and metadata.
     */
    GET_DASHBOARD: "DATADOG_GET_DASHBOARD",
    /**
     * Retrieves detailed information about a specific datadog monitor, including its current state, configuration, and any active downtimes.
     */
    GET_MONITOR: "DATADOG_GET_MONITOR",
    /**
     * Get service dependency mapping from datadog apm. this action retrieves the dependency graph for a specific service, showing both upstream services (that call this service) and downstream services (that this service calls). it's essential for: - understanding the blast radius of service failures - identifying critical dependencies during incidents - analyzing service communication patterns - planning architectural changes - monitoring service health in context the dependency information includes call rates, error rates, and latency metrics to help assess the health of service relationships.
     */
    GET_SERVICE_DEPENDENCIES: "DATADOG_GET_SERVICE_DEPENDENCIES",
    /**
     * Tool to retrieve all available public and private locations for synthetic tests in datadog. use when you need a list of location identifiers for creating or managing synthetic tests.
     */
    GET_SYNTHETICS_LOCATIONS: "DATADOG_GET_SYNTHETICS_LOCATIONS",
    /**
     * Retrieves all tags associated with a specific host in datadog. useful for understanding host metadata and organizing infrastructure.
     */
    GET_TAGS: "DATADOG_GET_TAGS",
    /**
     * Get detailed information about a specific trace by its id. this action retrieves comprehensive details about a distributed trace, including all spans, timing information, errors, and metadata. it's essential for: - deep diving into specific request flows during incidents - understanding the complete journey of a problematic request - analyzing performance bottlenecks in detail - correlating errors across services - debugging complex distributed system issues the trace id is typically obtained from logs, error reports, or trace search results.
     */
    GET_TRACE_BY_ID: "DATADOG_GET_TRACE_BY_ID",
    /**
     * Retrieves usage summary information from datadog including api calls, hosts, containers, and other billable usage metrics. useful for cost monitoring and usage analysis.
     */
    GET_USAGE_SUMMARY: "DATADOG_GET_USAGE_SUMMARY",
    /**
     * List all tags from datadog. tags help organize and filter your infrastructure and applications. this action shows all tags in use across your organization.
     */
    LIST_ALL_TAGS: "DATADOG_LIST_ALL_TAGS",
    /**
     * List api keys in datadog. retrieves all api keys in the organization for security auditing, access management, and key rotation planning. helps maintain security posture by tracking key usage and ownership.
     */
    LIST_API_KEYS: "DATADOG_LIST_API_KEYS",
    /**
     * List apm services from datadog. application performance monitoring (apm) provides deep visibility into your applications, helping you track performance, errors, and dependencies.
     */
    LIST_APM_SERVICES: "DATADOG_LIST_APM_SERVICES",
    /**
     * List aws integrations in datadog. retrieves all configured aws account integrations, showing which aws accounts are monitored by datadog and their configuration settings. useful for cloud infrastructure management and ensuring comprehensive monitoring coverage.
     */
    LIST_AWS_INTEGRATION: "DATADOG_LIST_AWS_INTEGRATION",
    /**
     * Lists all datadog dashboards with basic information. useful for dashboard management and getting an overview of available dashboards.
     */
    LIST_DASHBOARDS: "DATADOG_LIST_DASHBOARDS",
    /**
     * Lists events from datadog within a specified time range. events track important occurrences like deployments, outages, and configuration changes.
     */
    LIST_EVENTS: "DATADOG_LIST_EVENTS",
    /**
     * Lists all hosts in your datadog infrastructure with detailed information including metrics, tags, and status. useful for infrastructure monitoring and management.
     */
    LIST_HOSTS: "DATADOG_LIST_HOSTS",
    /**
     * List incidents from datadog. incident management helps you track, manage, and resolve incidents efficiently with comprehensive timeline and impact tracking.
     */
    LIST_INCIDENTS: "DATADOG_LIST_INCIDENTS",
    /**
     * Tool to retrieve a list of all log indexes configured in datadog. use when you need to get the names and configurations of log indexes.
     */
    LIST_LOG_INDEXES: "DATADOG_LIST_LOG_INDEXES",
    /**
     * Get all monitor details. this endpoint allows you to retrieve information about all monitors configured in your organization. you can filter by group states, name, tags, and use pagination to manage large result sets.
     */
    LIST_MONITORS: "DATADOG_LIST_MONITORS",
    /**
     * List roles from datadog organization. roles define sets of permissions that control what users can do within your datadog organization.
     */
    LIST_ROLES: "DATADOG_LIST_ROLES",
    /**
     * Lists service checks from datadog. service checks are status checks that track the health of your services and infrastructure components.
     */
    LIST_SERVICE_CHECKS: "DATADOG_LIST_SERVICE_CHECKS",
    /**
     * List service level objectives (slos) from datadog. service level objectives help you track the reliability and performance of your services by setting measurable targets for key metrics.
     */
    LIST_SL_OS: "DATADOG_LIST_SL_OS",
    /**
     * List synthetics tests from datadog. synthetics monitoring allows you to proactively monitor your applications and apis by simulating user interactions and api calls from various locations.
     */
    LIST_SYNTHETICS: "DATADOG_LIST_SYNTHETICS",
    /**
     * List users from datadog organization. user management allows you to see team members, their roles, and access levels within your datadog organization.
     */
    LIST_USERS: "DATADOG_LIST_USERS",
    /**
     * List webhooks from datadog. webhooks allow you to send notifications to external services when monitors trigger, enabling integration with your workflows.
     */
    LIST_WEBHOOKS: "DATADOG_LIST_WEBHOOKS",
    /**
     * Mute a monitor in datadog. temporarily silences alerts from a monitor, which is useful during maintenance windows, deployments, or when investigating known issues to prevent alert fatigue.
     */
    MUTE_MONITOR: "DATADOG_MUTE_MONITOR",
    /**
     * Queries datadog metrics and returns time series data. useful for retrieving historical metric data, creating custom dashboards, or building reports.
     */
    QUERY_METRICS: "DATADOG_QUERY_METRICS",
    /**
     * Searches datadog logs with advanced filtering capabilities. important notes: - sort parameter is not supported by the datadog logs api and will cause errors - time parameters must be in milliseconds (13-digit unix timestamps) - limit parameter is passed as string to the api - log content is nested under 'content' field in api response useful for troubleshooting, monitoring application behavior, and analyzing log patterns.
     */
    SEARCH_LOGS: "DATADOG_SEARCH_LOGS",
    /**
     * Search and analyze span data with aggregations in datadog. this action uses the datadog spans analytics api to perform advanced queries and aggregations on trace span data. it's essential for: - analyzing error rates and latency patterns - understanding service dependencies and bottlenecks - root cause analysis during incidents - performance monitoring and optimization the api supports complex queries with grouping, filtering, and various aggregation functions similar to log analytics.
     */
    SEARCH_SPANS_ANALYTICS: "DATADOG_SEARCH_SPANS_ANALYTICS",
    /**
     * Search for traces in datadog apm. this action allows you to search for distributed traces across your services. it's essential for: - finding specific request flows during incident investigation - analyzing performance bottlenecks across services - understanding error propagation through your system - correlating user requests with backend operations traces provide the complete picture of a request as it travels through your distributed system, making them crucial for root cause analysis.
     */
    SEARCH_TRACES: "DATADOG_SEARCH_TRACES",
    /**
     * Submits custom metrics to datadog. useful for sending application-specific metrics, business kpis, or custom performance indicators.
     */
    SUBMIT_METRICS: "DATADOG_SUBMIT_METRICS",
    /**
     * Unmute a monitor in datadog. re-enables alerts from a previously muted monitor, returning it to normal monitoring and alerting behavior. use this after maintenance windows or issue resolution to resume monitoring.
     */
    UNMUTE_MONITOR: "DATADOG_UNMUTE_MONITOR",
    /**
     * Update a dashboard in datadog. updates an existing dashboard with new configuration, widgets, or layout while preserving its identity and creation metadata.
     */
    UPDATE_DASHBOARD: "DATADOG_UPDATE_DASHBOARD",
    /**
     * Updates tags for a specific host in datadog. this replaces all existing tags from the specified source with the new tags provided.
     */
    UPDATE_HOST_TAGS: "DATADOG_UPDATE_HOST_TAGS",
    /**
     * Updates an existing datadog monitor with new configuration, thresholds, or notification settings. only specified fields will be updated.
     */
    UPDATE_MONITOR: "DATADOG_UPDATE_MONITOR",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DATADOG".
 */
export type DATADOG_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DATADOG".
 */
export type DATADOG_TRIGGER_EVENTS = {}
