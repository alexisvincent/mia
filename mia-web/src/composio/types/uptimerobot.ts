// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_ADD_MONITOR tool input.
 */
type UPTIMEROBOT_ADD_MONITOR_INPUT = {
  /**
   * Alert Contacts
   * @description Comma-separated IDs of alert contacts
   * @default null
   */
  alert_contacts: string | null;
  /**
   * Friendly Name
   * @description User-friendly name for the monitor
   */
  friendly_name?: string;
  /**
   * Http Password
   * @description Password for HTTP authentication
   * @default null
   */
  http_password: string | null;
  /**
   * Http Username
   * @description Username for HTTP authentication
   * @default null
   */
  http_username: string | null;
  /**
   * Interval
   * @description Monitoring interval in minutes (min=1, default=5)
   * @default null
   */
  interval: number | null;
  /**
   * Keyword Type
   * @description For keyword monitors (type=2): 1=exists,2=not exists
   * @default null
   */
  keyword_type: number | null;
  /**
   * Keyword Value
   * @description Keyword to monitor on the page for type=2
   * @default null
   */
  keyword_value: string | null;
  /**
   * Mwindows
   * @description Comma-separated maintenance window IDs
   * @default null
   */
  mwindows: string | null;
  /**
   * Port
   * @description Port number for custom port monitors (subtype=99)
   * @default null
   */
  port: number | null;
  /**
   * Ssl
   * @description Enable SSL validation: 1=yes, 0=no
   * @default null
   */
  ssl: number | null;
  /**
   * Subtype
   * @description Port-monitor subtype if type=4: 1=HTTP,2=HTTPS,3=FTP,4=SMTP,5=POP3,6=IMAP,99=Custom
   * @default null
   */
  subtype: number | null;
  /**
   * Timeout
   * @description Request timeout in seconds (1-60, default=30)
   * @default null
   */
  timeout: number | null;
  /**
   * Type
   * @description Type of monitor: 1=HTTP(s), 2=Keyword, 3=Ping, 4=Port
   */
  type?: number;
  /**
   * Url
   * @description URL or IP address to monitor
   */
  url?: string;
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_ADD_MONITOR tool output.
 */
type UPTIMEROBOT_ADD_MONITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorDetail
       * @description Error details returned by the UptimeRobot API.
       * @default null
       */
      error: {
          /**
           * Message
           * @description Human-readable error message
           */
          message: string;
          /**
           * Parameter Name
           * @description Parameter that caused the error
           * @default null
           */
          parameter_name: string | null;
          /**
           * Type
           * @description Type or code of the error
           */
          type: string;
      } | null;
      /**
       * Monitor
       * @description Model representing an UptimeRobot monitor.
       * @default null
       */
      monitor: {
          /**
           * Alert Contacts
           * @description Alert contact IDs
           * @default null
           */
          alert_contacts: string | null;
          /**
           * Friendly Name
           * @description Friendly name of the monitor
           */
          friendly_name: string;
          /**
           * Http Password
           * @description HTTP auth password
           * @default null
           */
          http_password: string | null;
          /**
           * Http Username
           * @description HTTP auth username
           * @default null
           */
          http_username: string | null;
          /**
           * Id
           * @description Unique Monitor ID
           */
          id: number;
          /**
           * Interval
           * @description Monitor interval in minutes
           * @default null
           */
          interval: number | null;
          /**
           * Keyword Type
           * @description Keyword type if type=2 monitors
           * @default null
           */
          keyword_type: number | null;
          /**
           * Keyword Value
           * @description Keyword checked for type=2 monitors
           * @default null
           */
          keyword_value: string | null;
          /**
           * Mwindows
           * @description Maintenance window IDs
           * @default null
           */
          mwindows: string | null;
          /**
           * Port
           * @description Port number if type=4 and subtype=99
           * @default null
           */
          port: number | null;
          /**
           * Ssl
           * @description SSL validation enabled flag
           * @default null
           */
          ssl: number | null;
          /**
           * Subtype
           * @description Sub-type for port monitor if type=4
           * @default null
           */
          subtype: number | null;
          /**
           * Timeout
           * @description Timeout in seconds
           * @default null
           */
          timeout: number | null;
          /**
           * Type
           * @description Type of the monitor
           */
          type: number;
          /**
           * Url
           * @description URL or IP being monitored
           */
          url: string;
      } | null;
      /**
       * Stat
       * @description Status of the API response, 'ok' or 'fail'
       */
      stat: string;
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_DELETE_MONITOR tool input.
 */
type UPTIMEROBOT_DELETE_MONITOR_INPUT = {
  /**
   * Id
   * @description The ID of the monitor to delete
   */
  id?: number;
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_DELETE_MONITOR tool output.
 */
type UPTIMEROBOT_DELETE_MONITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Details of an error response when the API call fails.
       * @default null
       */
      error: {
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
          /**
           * Type
           * @description Error type code returned by the API
           */
          type: string;
      } | null;
      /**
       * DeletedMonitorInfo
       * @description Details of the deleted monitor when the API call succeeds.
       * @default null
       */
      monitor: {
          /**
           * Id
           * @description The ID of the monitor that was deleted
           */
          id: number;
      } | null;
      /**
       * Stat
       * @description Status of the request: 'ok' if successful, 'fail' otherwise
       * @enum {string}
       */
      stat: "ok" | "fail";
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_EDIT_MAINTENANCE_WINDOW tool input.
 */
type UPTIMEROBOT_EDIT_MAINTENANCE_WINDOW_INPUT = {
  /**
   * Duration
   * @description Duration of the maintenance window in minutes.
   */
  duration?: number;
  /**
   * Friendly Name
   * @description A friendly name for the maintenance window.
   * @default null
   */
  friendly_name: string | null;
  /**
   * Id
   * @description ID of the maintenance window to edit.
   */
  id?: number;
  /**
   * Start Time
   * @description Start time: 'YYYY-MM-DD HH:mm:ss' for once, 'HH:mm' for recurring or Unix timestamp in seconds.
   */
  start_time?: string | null;
  /**
   * Type
   * @description Type of maintenance window: 1=once, 2=daily, 3=weekly.
   * @enum {integer}
   */
  type?: 1 | 2 | 3;
  /**
   * Value
   * @description Comma-separated day numbers for daily (2) or weekly (3); not needed for once (1).
   * @default null
   */
  value: string | null;
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_EDIT_MAINTENANCE_WINDOW tool output.
 */
type UPTIMEROBOT_EDIT_MAINTENANCE_WINDOW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Error details if the request fails.
       * @default null
       */
      error: {
          /** Message */
          message: string;
          /** Type */
          type: number;
      } | null;
      /**
       * MaintenanceWindow
       * @description The updated maintenance window object.
       * @default null
       */
      maintenance_window: {
          /** Duration */
          duration: number;
          /** Friendly Name */
          friendly_name: string;
          /** Id */
          id: number;
          /** Start Time */
          start_time: string;
          /** Type */
          type: number;
          /** Value */
          value: string | null;
      } | null;
      /**
       * Stat
       * @description Status of the API response.
       * @enum {string}
       */
      stat: "ok" | "fail";
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_EDIT_MONITOR tool input.
 */
type UPTIMEROBOT_EDIT_MONITOR_INPUT = {
  /**
   * Alert Contacts
   * @description Comma-separated alert contact IDs
   * @default null
   */
  alert_contacts: string | null;
  /**
   * Custom Http Headers
   * @description Custom HTTP headers as a dict; will be JSON-encoded
   * @default null
   */
  custom_http_headers: {
      [key: string]: string;
  } | null;
  /**
   * Friendly Name
   * @description New friendly name for the monitor
   * @default null
   */
  friendly_name: string | null;
  /**
   * Http Method
   * @description HTTP method to use for monitor checks
   * @default null
   */
  http_method: string | null;
  /**
   * Http Password
   * @description Password for HTTP authentication
   * @default null
   */
  http_password: string | null;
  /**
   * Http Username
   * @description Username for HTTP authentication
   * @default null
   */
  http_username: string | null;
  /**
   * Id
   * @description ID of the monitor to be edited (required)
   */
  id?: number;
  /**
   * Ignore Ssl
   * @description Ignore SSL errors: 1=Yes,0=No
   * @default null
   */
  ignore_ssl: number | null;
  /**
   * Interval
   * @description Monitoring interval in minutes
   * @default null
   */
  interval: number | null;
  /**
   * Keyword Type
   * @description Keyword check type: 1=Exists,2=Not Exists
   * @default null
   */
  keyword_type: number | null;
  /**
   * Keyword Value
   * @description Keyword value to check in keyword monitors
   * @default null
   */
  keyword_value: string | null;
  /**
   * Maintenance Windows
   * @description Comma-separated maintenance window IDs
   * @default null
   */
  maintenance_windows: string | null;
  /**
   * Port
   * @description Port number for type=4 monitors
   * @default null
   */
  port: number | null;
  /**
   * Post Type
   * @description POST data type: 1=Raw,2=URL-encoded
   * @default null
   */
  post_type: number | null;
  /**
   * Post Value
   * @description POST data payload content
   * @default null
   */
  post_value: string | null;
  /**
   * Ssl
   * @description Enable SSL notifications: 1=Yes,0=No
   * @default null
   */
  ssl: number | null;
  /**
   * Subtype
   * @description Subtype for port monitoring if type=4
   * @default null
   */
  subtype: number | null;
  /**
   * Timeout
   * @description Timeout in seconds before a check is considered failed
   * @default null
   */
  timeout: number | null;
  /**
   * Type
   * @description Monitor type: 1=HTTP(s),2=Keyword,3=Ping,4=Port,5=Heartbeat,6=SSL
   * @default null
   */
  type: number | null;
  /**
   * Up Uptime Threshold
   * @description Uptime threshold percentage (0-100) for 'UP' status
   * @default null
   */
  up_uptime_threshold: number | null;
  /**
   * Url
   * @description New URL to be monitored
   * @default null
   */
  url: string | null;
  /**
   * Verify Ssl
   * @description Verify SSL certificate: 1=Yes,0=No
   * @default null
   */
  verify_ssl: number | null;
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_EDIT_MONITOR tool output.
 */
type UPTIMEROBOT_EDIT_MONITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error details, if the call failed
       * @default null
       */
      error: {
          [key: string]: unknown;
      } | null;
      /**
       * Monitor
       * @description The edited monitor object
       */
      monitor: {
          [key: string]: unknown;
      };
      /**
       * Stat
       * @description Result of the API call ('ok' or 'fail')
       */
      stat: string;
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_EDIT_PUBLIC_STATUS_PAGE tool input.
 */
type UPTIMEROBOT_EDIT_PUBLIC_STATUS_PAGE_INPUT = {
  /**
   * Custom Domain
   * @description Custom domain or subdomain where the status page will be hosted.
   * @default null
   */
  custom_domain: string | null;
  /**
   * Friendly Name
   * @description New friendly name for the status page. Leave blank to keep current name.
   * @default null
   */
  friendly_name: string | null;
  /**
   * Hide Url Links
   * @description If true, removes the UptimeRobot link from the status page (Pro plan only).
   * @default null
   */
  hide_url_links: boolean | null;
  /**
   * Id
   * @description The unique integer ID of the public status page to edit.
   */
  id?: number;
  /**
   * Monitors
   * @description Dash-separated list of monitor IDs to include on the page, e.g. '123-456-789'. Use '0' to include all monitors.
   * @default null
   */
  monitors: string | null;
  /**
   * Password
   * @description Password to protect the status page (if enabled).
   * @default null
   */
  password: string | null;
  /**
   * Sort
   * @description Order in which monitors appear: 1=A–Z, 2=Z–A, 3=Up–Down–Paused, 4=Down–Up–Paused.
   * @default null
   * @enum {integer|null}
   */
  sort: 1 | 2 | 3 | 4 | null;
  /**
   * Status
   * @description 0=Paused, 1=Active. Use to enable or disable the public page.
   * @default null
   * @enum {integer|null}
   */
  status: 0 | 1 | null;
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_EDIT_PUBLIC_STATUS_PAGE tool output.
 */
type UPTIMEROBOT_EDIT_PUBLIC_STATUS_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorModel
       * @description Error model returned by UptimeRobot API when a request fails.
       * @default null
       */
      error: {
          /**
           * Message
           * @description Human-readable error message from the API.
           */
          message: string;
          /**
           * Type
           * @description Error type identifier from UptimeRobot.
           */
          type: string;
      } | null;
      /**
       * Stat
       * @description Status of the API response ('ok' or 'fail').
       * @enum {string}
       */
      stat: "ok" | "fail";
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_ACCOUNT_DETAILS tool input.
 */
type UPTIMEROBOT_GET_ACCOUNT_DETAILS_INPUT = object;

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_ACCOUNT_DETAILS tool output.
 */
type UPTIMEROBOT_GET_ACCOUNT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description Account details payload
       * @default null
       */
      account: {
          /**
           * Down Monitors
           * @description Number of monitors currently down
           */
          down_monitors: number;
          /**
           * Email
           * @description Account email address
           */
          email: string;
          /**
           * Is Billing Active
           * @description 1 if billing is active, 0 otherwise
           */
          is_billing_active: number;
          /**
           * Mms Left
           * @description MMS alerts remaining
           */
          mms_left: number;
          /**
           * Mms Limit
           * @description MMS alert limit
           */
          mms_limit: number;
          /**
           * Monitor Interval
           * @description Default monitoring interval in seconds
           */
          monitor_interval: number;
          /**
           * Monitor Limit
           * @description Max number of monitors allowed
           */
          monitor_limit: number;
          /**
           * Paused Monitors
           * @description Number of monitors currently paused
           */
          paused_monitors: number;
          /**
           * Sms Left
           * @description SMS alerts remaining
           */
          sms_left: number;
          /**
           * Sms Limit
           * @description SMS alert limit
           */
          sms_limit: number;
          /**
           * Up Monitors
           * @description Number of monitors currently up
           */
          up_monitors: number;
          /**
           * User Id
           * @description Unique user identifier
           */
          user_id: number;
      } | null;
      /**
       * ErrorInfo
       * @description Error details, if any
       * @default null
       */
      error: {
          /**
           * Message
           * @description Human-readable error message
           */
          message: string;
          /**
           * Parameter Name
           * @description Parameter causing the error
           */
          parameter_name: string;
          /**
           * Type
           * @description Error type
           */
          type: string;
      } | null;
      /**
       * Stat
       * @description Response status: 'ok' or 'fail'
       */
      stat: string;
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MAINTENANCE_WINDOWS tool input.
 */
type UPTIMEROBOT_GET_MAINTENANCE_WINDOWS_INPUT = {
  /**
   * Limit
   * @description Maximum number of records to return (default: 50, max: 50).
   * @default null
   */
  limit: number | null;
  /**
   * Mwindows
   * @description Comma-separated list of maintenance window IDs to retrieve; if omitted, returns all windows.
   * @default null
   */
  mwindows: string | null;
  /**
   * Offset
   * @description Pagination offset; record to start returning from (default: 0).
   * @default null
   */
  offset: number | null;
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MAINTENANCE_WINDOWS tool output.
 */
type UPTIMEROBOT_GET_MAINTENANCE_WINDOWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Error details, if any
       * @default null
       */
      error: {
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
          /**
           * Type
           * @description Error type returned by the API
           */
          type: string;
      } | null;
      /**
       * Mwindows
       * @description List of maintenance windows returned by the API
       * @default null
       */
      mwindows: {
          /**
           * Duration
           * @description Duration of the maintenance window in minutes
           */
          duration: number;
          /**
           * Friendly Name
           * @description Name of the maintenance window
           */
          friendly_name: string;
          /**
           * Id
           * @description Maintenance window ID
           */
          id: number;
          /**
           * Monitor Ids
           * @description Comma-separated list of associated monitor IDs
           */
          monitor_ids: string;
          /**
           * Start Time
           * @description Start time of the maintenance window
           */
          start_time: string;
          /**
           * Status
           * @description Status: 0=Paused,1=Active
           */
          status: number;
          /**
           * Type
           * @description Type of window: 1=Once,2=Daily,3=Weekly,4=Monthly
           */
          type: number;
          /**
           * Value
           * @description Value associated with the maintenance window type
           */
          value: string;
      }[] | null;
      /**
       * Stat
       * @description API response status: 'ok' or 'fail'
       */
      stat: string;
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MONITORS tool input.
 */
type UPTIMEROBOT_GET_MONITORS_INPUT = {
  /**
   * Alert Contacts
   * @description 1 to include alert contact details, 0 to omit.
   * @default 1
   */
  alert_contacts: number | null;
  /**
   * All Time Uptime Durations
   * @description Hyphen-separated day intervals for total uptime durations, e.g. '30-60-90'.
   * @default null
   */
  all_time_uptime_durations: string | null;
  /**
   * Custom Uptime Ranges
   * @description Hyphen-separated date ranges (YYYY-MM-DD_YYYY-MM-DD), e.g. '2023-01-01_2023-01-07'.
   * @default null
   */
  custom_uptime_ranges: string | null;
  /**
   * Custom Uptime Ratios
   * @description Hyphen-separated days for custom uptime ratios, e.g. '7-30-45'.
   * @default null
   */
  custom_uptime_ratios: string | null;
  /**
   * Limit
   * @description Maximum number of monitors to return (max 50).
   * @default null
   */
  limit: number | null;
  /**
   * Logs
   * @description 1 to include up to 21 log entries, 0 to omit.
   * @default 1
   */
  logs: number | null;
  /**
   * Monitors
   * @description Hyphen-separated monitor IDs to retrieve, e.g. '1234-5678'.
   * @default null
   */
  monitors: string | null;
  /**
   * Offset
   * @description Zero-based pagination offset.
   * @default null
   */
  offset: number | null;
  /**
   * Response Times
   * @description 1 to include response time data, 0 to omit.
   * @default 0
   */
  response_times: number | null;
  /**
   * Response Times End Date
   * @description UNIX timestamp (seconds) to end response time data.
   * @default null
   */
  response_times_end_date: number | null;
  /**
   * Response Times Limit
   * @description Maximum number of response time records per monitor.
   * @default null
   */
  response_times_limit: number | null;
  /**
   * Response Times Start Date
   * @description UNIX timestamp (seconds) to start response time data.
   * @default null
   */
  response_times_start_date: number | null;
  /**
   * Search
   * @description Search term for friendly_name, URL, or type.
   * @default null
   */
  search: string | null;
  /**
   * Sort
   * @description Field by which to sort results.
   * @default null
   * @enum {string|null}
   */
  sort: "friendly_name" | "url" | "status" | "type" | null;
  /**
   * Statuses
   * @description Hyphen-separated monitor status codes, e.g. '2-8'.
   * @default null
   */
  statuses: string | null;
  /**
   * Types
   * @description Hyphen-separated monitor type codes, e.g. '1-2'.
   * @default null
   */
  types: string | null;
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MONITORS tool output.
 */
type UPTIMEROBOT_GET_MONITORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Error details if the request failed.
       * @default null
       */
      error: {
          /**
           * Message
           * @description Detailed error message.
           */
          message: string;
          /**
           * Parameter Name
           * @description Parameter that caused the error.
           * @default null
           */
          parameter_name: string | null;
          /**
           * Type
           * @description Error type code.
           */
          type: string;
      } | null;
      /**
       * Monitors
       * @description List of monitors returned by the API.
       */
      monitors: {
          /**
           * Alert Contacts
           * @description List of alert contact details, if requested.
           * @default null
           */
          alert_contacts: {
              /**
               * Id
               * @description Alert contact ID.
               */
              id: number;
              /**
               * Status
               * @description Current status code of the alert contact.
               */
              status: number;
              /**
               * Type
               * @description Alert contact type code.
               */
              type: number;
              /**
               * Value
               * @description Contact value, e.g., email or phone.
               */
              value: string;
          }[] | null;
          /**
           * Create Datetime
           * @description UNIX timestamp when monitor was created.
           * @default null
           */
          create_datetime: number | null;
          /**
           * Custom Uptime Ranges
           * @description Custom uptime ranges as hyphen-separated ranges.
           * @default null
           */
          custom_uptime_ranges: string | null;
          /**
           * Custom Uptime Ratio
           * @description Custom uptime ratios as hyphen-separated string.
           * @default null
           */
          custom_uptime_ratio: string | null;
          /**
           * Friendly Name
           * @description Friendly name of the monitor.
           */
          friendly_name: string;
          /**
           * Id
           * @description Monitor ID.
           */
          id: number;
          /**
           * Interval
           * @description Monitoring interval in minutes.
           * @default null
           */
          interval: number | null;
          /**
           * Is Group Main
           * @description 1 if this is the main monitor in a group.
           * @default null
           */
          is_group_main: number | null;
          /**
           * Logs
           * @description List of log entries, if requested.
           * @default null
           */
          logs: {
              /**
               * Datetime
               * @description UNIX timestamp of the log entry.
               */
              datetime: number;
              /**
               * Duration
               * @description Duration in seconds of downtime (if applicable).
               * @default null
               */
              duration: number | null;
              /**
               * Id
               * @description Log entry ID.
               */
              id: number;
              /**
               * Type
               * @description Type code of the log entry.
               */
              type: number;
          }[] | null;
          /**
           * Monitor Group
           * @description Group name if monitor belongs to a group.
           * @default null
           */
          monitor_group: string | null;
          /**
           * Port
           * @description Port number for custom port monitors.
           * @default null
           */
          port: number | null;
          /**
           * Response Times
           * @description List of response time entries, if requested.
           * @default null
           */
          response_times: {
              /**
               * Datetime
               * @description UNIX timestamp of the measurement.
               */
              datetime: number;
              /**
               * Value
               * @description Response time in milliseconds.
               */
              value: number;
          }[] | null;
          /**
           * Status
           * @description Current status code of the monitor.
           */
          status: number;
          /**
           * Subtype
           * @description Subtype code for port monitors.
           * @default null
           */
          subtype: number | null;
          /**
           * Type
           * @description Monitor type code.
           */
          type: number;
          /**
           * Url
           * @description Monitored URL or IP.
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Pagination
       * @description Pagination information.
       */
      pagination: {
          /**
           * Limit
           * @description Number of items returned.
           */
          limit: number;
          /**
           * Offset
           * @description Pagination offset.
           */
          offset: number;
          /**
           * Total
           * @description Total number of items available.
           */
          total: number;
      };
      /**
       * Stat
       * @description API response status: 'ok' or 'fail'.
       */
      stat: string;
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MONITOR_AUTHENTICATION_TYPE tool input.
 */
type UPTIMEROBOT_GET_MONITOR_AUTHENTICATION_TYPE_INPUT = {
  /**
   * Monitor Ids
   * @description List of UptimeRobot monitor IDs to retrieve authentication type for
   */
  monitor_ids?: number[];
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MONITOR_AUTHENTICATION_TYPE tool output.
 */
type UPTIMEROBOT_GET_MONITOR_AUTHENTICATION_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authentication
       * @description Mapping of each monitor ID to its authentication type ('basic' or 'none')
       */
      authentication: {
          [key: string]: "basic" | "none";
      };
      /**
       * ErrorInfo
       * @description Details of an error response when the API call fails.
       * @default null
       */
      error: {
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
          /**
           * Type
           * @description Error type code returned by the API
           */
          type: string;
      } | null;
      /**
       * Stat
       * @description Status of the request: 'ok' if successful, 'fail' otherwise
       * @enum {string}
       */
      stat: "ok" | "fail";
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MONITOR_CUSTOM_HTTP_HEADERS tool input.
 */
type UPTIMEROBOT_GET_MONITOR_CUSTOM_HTTP_HEADERS_INPUT = {
  /**
   * Monitors
   * @description Monitor IDs separated by '-' e.g. '12345-67890'
   */
  monitors?: string;
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MONITOR_CUSTOM_HTTP_HEADERS tool output.
 */
type UPTIMEROBOT_GET_MONITOR_CUSTOM_HTTP_HEADERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Error details returned by the UptimeRobot API.
       * @default null
       */
      error: {
          /**
           * Message
           * @description Error message
           */
          message: string;
          /**
           * Parameter Name
           * @description Parameter causing the error, if any
           * @default null
           */
          parameter_name: string | null;
          /**
           * Type
           * @description Error type code
           */
          type: string;
      } | null;
      /**
       * Monitors
       * @description List of monitors with custom headers
       */
      monitors: {
          /**
           * Custom Http Headers
           * @description List of custom HTTP headers for the monitor
           */
          custom_http_headers: {
              /**
               * Name
               * @description Header name
               */
              name: string;
              /**
               * Value
               * @description Header value
               */
              value: string;
          }[];
          /**
           * Id
           * @description Monitor ID
           */
          id: number;
      }[];
      /**
       * Pagination
       * @description Pagination details
       */
      pagination: {
          /**
           * Limit
           * @description Number of items returned
           */
          limit: number;
          /**
           * Offset
           * @description Pagination offset
           */
          offset: number;
          /**
           * Total
           * @description Total number of items
           */
          total: number;
      };
      /**
       * Stat
       * @description API response status: 'ok' or 'fail'
       */
      stat: string;
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MONITOR_CUSTOM_HTTP_STATUSES tool input.
 */
type UPTIMEROBOT_GET_MONITOR_CUSTOM_HTTP_STATUSES_INPUT = {
  /**
   * Monitors
   * @description Monitor IDs separated by hyphens, e.g., '12345-67890'
   */
  monitors?: string;
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MONITOR_CUSTOM_HTTP_STATUSES tool output.
 */
type UPTIMEROBOT_GET_MONITOR_CUSTOM_HTTP_STATUSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Error details if the API call failed
       * @default null
       */
      error: {
          /**
           * Message
           * @description Human-readable error message
           */
          message: string;
          /**
           * Parameter Name
           * @description Parameter that caused the error
           * @default null
           */
          parameter_name: string | null;
          /**
           * Type
           * @description Error type returned by the API
           */
          type: string;
      } | null;
      /**
       * Monitors
       * @description List of monitor objects with custom HTTP statuses
       */
      monitors: {
          /**
           * Custom Http Statuses
           * @description Custom HTTP status codes configured for this monitor
           */
          custom_http_statuses: string;
          /**
           * Friendly Name
           * @description Friendly name of the monitor
           */
          friendly_name: string;
          /**
           * Id
           * @description Unique Monitor ID
           */
          id: number;
          /**
           * Url
           * @description URL or IP address being monitored
           */
          url: string;
      }[];
      /**
       * Pagination
       * @description Pagination information, if provided
       * @default null
       */
      pagination: {
          /**
           * Limit
           * @description Maximum number of items returned
           */
          limit: number;
          /**
           * Offset
           * @description Response pagination offset
           */
          offset: number;
          /**
           * Total
           * @description Total number of items available
           */
          total: number;
      } | null;
      /**
       * Stat
       * @description API response status: 'ok' or 'fail'
       */
      stat: string;
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MONITOR_RESPONSE_TIMES tool input.
 */
type UPTIMEROBOT_GET_MONITOR_RESPONSE_TIMES_INPUT = {
  /**
   * Average
   * @description Interval in minutes to average response times over (e.g., 180 for 3h)
   * @default null
   */
  average: number | null;
  /**
   * Limit
   * @description Maximum number of response time entries to return (max 100)
   * @default null
   */
  limit: number | null;
  /**
   * Monitor Ids
   * @description List of UptimeRobot monitor IDs to retrieve response times for
   */
  monitor_ids?: number[];
  /**
   * Offset
   * @description Pagination offset for response time entries
   * @default null
   */
  offset: number | null;
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MONITOR_RESPONSE_TIMES tool output.
 */
type UPTIMEROBOT_GET_MONITOR_RESPONSE_TIMES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Details of an error response when the API call fails.
       * @default null
       */
      error: {
          /**
           * Message
           * @description Human-readable error message
           */
          message: string;
          /**
           * Parameter Name
           * @description Parameter that caused the error, if any
           * @default null
           */
          parameter_name: string | null;
          /**
           * Type
           * @description Type or code of the error
           */
          type: string;
      } | null;
      /**
       * Response Times
       * @description Mapping of each monitor ID to its list of response time data points
       */
      response_times: {
          [key: string]: {
              /**
               * Datetime
               * @description UNIX timestamp of the measurement
               */
              datetime: number;
              /**
               * Value
               * @description Response time in milliseconds
               */
              value: number;
          }[];
      };
      /**
       * Stat
       * @description Status of the API response: 'ok' or 'fail'
       * @enum {string}
       */
      stat: "ok" | "fail";
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MONITOR_SSL_CERTIFICATE_INFO tool input.
 */
type UPTIMEROBOT_GET_MONITOR_SSL_CERTIFICATE_INFO_INPUT = {
  /**
   * Monitors
   * @description Monitor IDs separated by hyphens (e.g., '12345-67890')
   */
  monitors?: string;
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MONITOR_SSL_CERTIFICATE_INFO tool output.
 */
type UPTIMEROBOT_GET_MONITOR_SSL_CERTIFICATE_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Error details returned by the UptimeRobot API.
       * @default null
       */
      error: {
          /**
           * Message
           * @description Human-readable error message
           */
          message: string;
          /**
           * Parameter Name
           * @description Name of the parameter causing the error
           * @default null
           */
          parameter_name: string | null;
          /**
           * Type
           * @description Error type returned by the API
           */
          type: string;
      } | null;
      /**
       * Monitors
       * @description List of monitors with SSL info
       */
      monitors: {
          /**
           * Id
           * @description Monitor ID
           */
          id: number;
          /**
           * Ssl
           * @description SSL certificate information
           */
          ssl: {
              /**
               * Brand
               * @description SSL certificate brand name
               */
              brand: string;
              /**
               * Days Remaining
               * @description Days remaining until expiration
               */
              days_remaining: number;
              /**
               * Expires
               * @description UNIX timestamp for certificate expiration
               */
              expires: number;
              /**
               * Issuer Common Name
               * @description Issuer common name
               */
              issuer_common_name: string;
              /**
               * Issuer Organization
               * @description Issuer organization
               * @default null
               */
              issuer_organization: string | null;
              /**
               * Product
               * @description SSL certificate product name
               */
              product: string;
              /**
               * Self Signed
               * @description Whether the certificate is self-signed
               */
              self_signed: boolean;
              /**
               * Serial Number
               * @description Certificate serial number
               */
              serial_number: string;
              /**
               * Signature Algorithm
               * @description Certificate signature algorithm
               */
              signature_algorithm: string;
              /**
               * Subject Common Name
               * @description Subject common name
               */
              subject_common_name: string;
              /**
               * Subject Organization
               * @description Subject organization
               * @default null
               */
              subject_organization: string | null;
              /**
               * Valid
               * @description Certificate validity status
               */
              valid: boolean;
              /**
               * Version
               * @description Certificate version
               */
              version: number;
          };
      }[];
      /**
       * Pagination
       * @description Pagination details in API responses.
       * @default null
       */
      pagination: {
          /**
           * Limit
           * @description Number of items returned
           */
          limit: number;
          /**
           * Offset
           * @description Pagination offset
           */
          offset: number;
          /**
           * Total
           * @description Total number of items available
           */
          total: number;
      } | null;
      /**
       * Stat
       * @description API response status: 'ok' or 'fail'
       */
      stat: string;
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MONITOR_TIMEZONE tool input.
 */
type UPTIMEROBOT_GET_MONITOR_TIMEZONE_INPUT = {
  /**
   * Monitor Ids
   * @description List of UptimeRobot monitor IDs to retrieve timezone for
   */
  monitor_ids?: number[];
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_MONITOR_TIMEZONE tool output.
 */
type UPTIMEROBOT_GET_MONITOR_TIMEZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Details of an error response when the API call fails.
       * @default null
       */
      error: {
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
          /**
           * Type
           * @description Error type code returned by the API
           */
          type: string;
      } | null;
      /**
       * Stat
       * @description Status of the request: 'ok' if successful, 'fail' otherwise
       * @enum {string}
       */
      stat: "ok" | "fail";
      /**
       * Timezones
       * @description Mapping of each monitor ID to its timezone string (e.g., 'Europe/London')
       */
      timezones: {
          [key: string]: string;
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_PUBLIC_STATUS_PAGES tool input.
 */
type UPTIMEROBOT_GET_PUBLIC_STATUS_PAGES_INPUT = {
  /**
   * Limit
   * @description Maximum number of public status pages to return (1-50)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Pagination start offset; must be non-negative
   * @default 0
   */
  offset: number;
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_PUBLIC_STATUS_PAGES tool output.
 */
type UPTIMEROBOT_GET_PUBLIC_STATUS_PAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination details
       */
      pagination: {
          /**
           * Limit
           * @description Returned pagination limit
           */
          limit: number;
          /**
           * Offset
           * @description Returned pagination offset
           */
          offset: number;
          /**
           * Total
           * @description Total number of public status pages available
           */
          total: number;
      };
      /**
       * Public Status Pages
       * @description List of retrieved public status pages
       */
      public_status_pages: {
          /**
           * Custom Domain
           * @description Custom domain for this public status page, if any
           * @default null
           */
          custom_domain: string | null;
          /**
           * Friendly Name
           * @description User-assigned friendly name
           */
          friendly_name: string;
          /**
           * Id
           * @description Unique identifier of the public status page
           */
          id: number;
          /**
           * Monitors
           * @description List of monitor IDs included in this status page
           */
          monitors: number[];
          /**
           * Sort
           * @description Order in which monitors appear: 1=A-Z, 2=Z-A, 3=Up-Down-Paused, 4=Down-Up-Paused
           */
          sort: number;
          /**
           * Status
           * @description Current status: 1=Active, 0=Inactive
           */
          status: number;
          /**
           * Url
           * @description URL of the public status page
           */
          url: string;
      }[];
      /**
       * Stat
       * @description Response status: 'ok' or 'fail'
       * @enum {string}
       */
      stat: "ok" | "fail";
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_UPTIME_RATIOS tool input.
 */
type UPTIMEROBOT_GET_UPTIME_RATIOS_INPUT = {
  /**
   * Custom Uptime Ratios
   * @description Comma-separated list of time periods (in minutes) for uptime ratios, e.g. '7,30,45'.
   */
  custom_uptime_ratios?: string;
  /**
   * Monitors
   * @description Hyphen-separated monitor IDs to retrieve ratios for. If omitted, all monitors.
   * @default null
   */
  monitors: string | null;
  /**
   * Response Times Average
   * @description Interval in minutes to average response times, e.g., 30 for 30-minute averages.
   * @default null
   */
  response_times_average: number | null;
  /**
   * Response Times End Date
   * @description UNIX timestamp to end response time calculation.
   * @default null
   */
  response_times_end_date: number | null;
  /**
   * Response Times Start Date
   * @description UNIX timestamp to start response time calculation.
   * @default null
   */
  response_times_start_date: number | null;
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_GET_UPTIME_RATIOS tool output.
 */
type UPTIMEROBOT_GET_UPTIME_RATIOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Error details if the request failed.
       * @default null
       */
      error: {
          /**
           * Message
           * @description Detailed error message.
           */
          message: string;
          /**
           * Parameter Name
           * @description Parameter that caused the error, if any.
           * @default null
           */
          parameter_name: string | null;
          /**
           * Type
           * @description Error type code.
           */
          type: string;
      } | null;
      /**
       * Monitors
       * @description List of monitor-specific uptime ratios.
       * @default null
       */
      monitors: {
          /**
           * Custom Uptime Ratio
           * @description Comma-separated uptime ratios for the requested periods.
           */
          custom_uptime_ratio: string;
          /**
           * Id
           * @description Monitor ID.
           */
          id: number;
      }[] | null;
      /**
       * Stat
       * @description API response status: 'ok' or 'fail'.
       * @enum {string}
       */
      stat: "ok" | "fail";
      /**
       * Uptime Ratios
       * @description Comma-separated uptime ratios corresponding to the periods requested.
       * @default null
       */
      uptime_ratios: string | null;
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_NEW_MAINTENANCE_WINDOW tool input.
 */
type UPTIMEROBOT_NEW_MAINTENANCE_WINDOW_INPUT = {
  /**
   * Day
   * @description Day of the week for weekly windows (1=Monday to 7=Sunday); required if type=3.
   * @default null
   */
  day: number | null;
  /**
   * Friendly Name
   * @description User-friendly name for the maintenance window.
   */
  friendly_name?: string;
  /**
   * Monitors
   * @description Comma-separated monitor IDs to apply the window to; if omitted, applies to all monitors.
   * @default null
   */
  monitors: string | null;
  /**
   * Start Time
   * @description Start time as Unix timestamp in seconds.
   */
  start_time?: number;
  /**
   * Type
   * @description Type of maintenance window: 1=once, 2=daily, 3=weekly.
   * @enum {integer}
   */
  type?: 1 | 2 | 3;
  /**
   * Value
   * @description Duration of the maintenance window in minutes.
   */
  value?: number;
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_NEW_MAINTENANCE_WINDOW tool output.
 */
type UPTIMEROBOT_NEW_MAINTENANCE_WINDOW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorDetail
       * @description Error details if the request failed.
       * @default null
       */
      error: {
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
          /**
           * Type
           * @description Error type returned by the API.
           */
          type: string;
      } | null;
      /**
       * MWindow
       * @description Details of the created maintenance window if successful.
       * @default null
       */
      mwindow: {
          /**
           * Friendly Name
           * @description Friendly name of the created maintenance window.
           */
          friendly_name: string;
          /**
           * Id
           * @description ID of the created maintenance window.
           */
          id: number;
      } | null;
      /**
       * Stat
       * @description Status of the API response: 'ok' or 'fail'.
       * @enum {string}
       */
      stat: "ok" | "fail";
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
 * Type of UPTIMEROBOT's UPTIMEROBOT_NEW_PUBLIC_STATUS_PAGE tool input.
 */
type UPTIMEROBOT_NEW_PUBLIC_STATUS_PAGE_INPUT = {
  /**
   * Custom Domains
   * @description Comma-separated custom domains for the status page
   * @default null
   */
  custom_domains: string | null;
  /**
   * Custom Url
   * @description Custom URL slug for the status page
   * @default null
   */
  custom_url: string | null;
  /**
   * Friendly Name
   * @description User-assigned friendly name for the status page
   */
  friendly_name?: string;
  /**
   * Hide Url Links
   * @description Hide monitor URL links: 1=yes, 0=no
   * @default null
   */
  hide_url_links: number | null;
  /**
   * Monitors
   * @description Comma-separated IDs of monitors to display, or '*' for all monitors
   */
  monitors?: string;
  /**
   * Password
   * @description Password for viewing the status page
   * @default null
   */
  password: string | null;
  /**
   * Sort
   * @description Sorting mode: 0=no sorting, 1=by status, 2=custom order
   * @default null
   */
  sort: number | null;
  /**
   * Status
   * @description Page status: 0=paused, 1=active
   * @default null
   */
  status: number | null;
};

/**
 * Type of UPTIMEROBOT's UPTIMEROBOT_NEW_PUBLIC_STATUS_PAGE tool output.
 */
type UPTIMEROBOT_NEW_PUBLIC_STATUS_PAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorDetail
       * @description Error details returned by the API when a request fails.
       * @default null
       */
      error: {
          /**
           * Message
           * @description Human-readable error message
           */
          message: string;
          /**
           * Parameter Name
           * @description Name of the parameter that caused the error, if any
           * @default null
           */
          parameter_name: string | null;
          /**
           * Type
           * @description Error code or type returned by API
           */
          type: string;
      } | null;
      /**
       * PublicStatusPage
       * @description Model representing a public status page.
       * @default null
       */
      page: {
          /**
           * Custom Domains
           * @description Comma-separated custom domains, if any
           * @default null
           */
          custom_domains: string | null;
          /**
           * Custom Url
           * @description Custom URL slug for the status page
           * @default null
           */
          custom_url: string | null;
          /**
           * Friendly Name
           * @description User-assigned friendly name
           */
          friendly_name: string;
          /**
           * Hide Url Links
           * @description Flag indicating if monitor URL links are hidden: 1=yes, 0=no
           */
          hide_url_links: number;
          /**
           * Id
           * @description Unique identifier of the public status page
           */
          id: number;
          /**
           * Monitors
           * @description Comma-separated monitor IDs on this status page
           */
          monitors: string;
          /**
           * Password
           * @description Password for viewing the status page
           * @default null
           */
          password: string | null;
          /**
           * Sort
           * @description Sorting mode set for this page
           */
          sort: number;
          /**
           * Status
           * @description Current status of the page: 0=paused, 1=active
           */
          status: number;
      } | null;
      /**
       * Stat
       * @description Response status: 'ok' or 'fail'
       */
      stat: string;
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
 * Type map of all available tool input types for toolkit "UPTIMEROBOT".
 */
export type UPTIMEROBOT_TOOL_INPUTS = {
  ADD_MONITOR: UPTIMEROBOT_ADD_MONITOR_INPUT
  DELETE_MONITOR: UPTIMEROBOT_DELETE_MONITOR_INPUT
  EDIT_MAINTENANCE_WINDOW: UPTIMEROBOT_EDIT_MAINTENANCE_WINDOW_INPUT
  EDIT_MONITOR: UPTIMEROBOT_EDIT_MONITOR_INPUT
  EDIT_PUBLIC_STATUS_PAGE: UPTIMEROBOT_EDIT_PUBLIC_STATUS_PAGE_INPUT
  GET_ACCOUNT_DETAILS: UPTIMEROBOT_GET_ACCOUNT_DETAILS_INPUT
  GET_MAINTENANCE_WINDOWS: UPTIMEROBOT_GET_MAINTENANCE_WINDOWS_INPUT
  GET_MONITORS: UPTIMEROBOT_GET_MONITORS_INPUT
  GET_MONITOR_AUTHENTICATION_TYPE: UPTIMEROBOT_GET_MONITOR_AUTHENTICATION_TYPE_INPUT
  GET_MONITOR_CUSTOM_HTTP_HEADERS: UPTIMEROBOT_GET_MONITOR_CUSTOM_HTTP_HEADERS_INPUT
  GET_MONITOR_CUSTOM_HTTP_STATUSES: UPTIMEROBOT_GET_MONITOR_CUSTOM_HTTP_STATUSES_INPUT
  GET_MONITOR_RESPONSE_TIMES: UPTIMEROBOT_GET_MONITOR_RESPONSE_TIMES_INPUT
  GET_MONITOR_SSL_CERTIFICATE_INFO: UPTIMEROBOT_GET_MONITOR_SSL_CERTIFICATE_INFO_INPUT
  GET_MONITOR_TIMEZONE: UPTIMEROBOT_GET_MONITOR_TIMEZONE_INPUT
  GET_PUBLIC_STATUS_PAGES: UPTIMEROBOT_GET_PUBLIC_STATUS_PAGES_INPUT
  GET_UPTIME_RATIOS: UPTIMEROBOT_GET_UPTIME_RATIOS_INPUT
  NEW_MAINTENANCE_WINDOW: UPTIMEROBOT_NEW_MAINTENANCE_WINDOW_INPUT
  NEW_PUBLIC_STATUS_PAGE: UPTIMEROBOT_NEW_PUBLIC_STATUS_PAGE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "UPTIMEROBOT".
 */
export type UPTIMEROBOT_TOOL_OUTPUTS = {
  ADD_MONITOR: UPTIMEROBOT_ADD_MONITOR_OUTPUT
  DELETE_MONITOR: UPTIMEROBOT_DELETE_MONITOR_OUTPUT
  EDIT_MAINTENANCE_WINDOW: UPTIMEROBOT_EDIT_MAINTENANCE_WINDOW_OUTPUT
  EDIT_MONITOR: UPTIMEROBOT_EDIT_MONITOR_OUTPUT
  EDIT_PUBLIC_STATUS_PAGE: UPTIMEROBOT_EDIT_PUBLIC_STATUS_PAGE_OUTPUT
  GET_ACCOUNT_DETAILS: UPTIMEROBOT_GET_ACCOUNT_DETAILS_OUTPUT
  GET_MAINTENANCE_WINDOWS: UPTIMEROBOT_GET_MAINTENANCE_WINDOWS_OUTPUT
  GET_MONITORS: UPTIMEROBOT_GET_MONITORS_OUTPUT
  GET_MONITOR_AUTHENTICATION_TYPE: UPTIMEROBOT_GET_MONITOR_AUTHENTICATION_TYPE_OUTPUT
  GET_MONITOR_CUSTOM_HTTP_HEADERS: UPTIMEROBOT_GET_MONITOR_CUSTOM_HTTP_HEADERS_OUTPUT
  GET_MONITOR_CUSTOM_HTTP_STATUSES: UPTIMEROBOT_GET_MONITOR_CUSTOM_HTTP_STATUSES_OUTPUT
  GET_MONITOR_RESPONSE_TIMES: UPTIMEROBOT_GET_MONITOR_RESPONSE_TIMES_OUTPUT
  GET_MONITOR_SSL_CERTIFICATE_INFO: UPTIMEROBOT_GET_MONITOR_SSL_CERTIFICATE_INFO_OUTPUT
  GET_MONITOR_TIMEZONE: UPTIMEROBOT_GET_MONITOR_TIMEZONE_OUTPUT
  GET_PUBLIC_STATUS_PAGES: UPTIMEROBOT_GET_PUBLIC_STATUS_PAGES_OUTPUT
  GET_UPTIME_RATIOS: UPTIMEROBOT_GET_UPTIME_RATIOS_OUTPUT
  NEW_MAINTENANCE_WINDOW: UPTIMEROBOT_NEW_MAINTENANCE_WINDOW_OUTPUT
  NEW_PUBLIC_STATUS_PAGE: UPTIMEROBOT_NEW_PUBLIC_STATUS_PAGE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's UPTIMEROBOT toolkit.
 */
export const UPTIMEROBOT = {
  slug: "uptimerobot",
  tools: {
    /**
     * Tool to create a new monitor. use when you need to start monitoring a url or service; call after obtaining a valid api key.
     */
    ADD_MONITOR: "UPTIMEROBOT_ADD_MONITOR",
    /**
     * Tool to delete a monitor. use when you need to remove an existing monitor by its id; use after confirming the monitor id.
     */
    DELETE_MONITOR: "UPTIMEROBOT_DELETE_MONITOR",
    /**
     * Tool to edit an existing maintenance window. use when you need to update its name, timing, recurrence, or duration after confirming the window id.
     */
    EDIT_MAINTENANCE_WINDOW: "UPTIMEROBOT_EDIT_MAINTENANCE_WINDOW",
    /**
     * Tool to edit an existing monitor. use after confirming the monitor id exists.
     */
    EDIT_MONITOR: "UPTIMEROBOT_EDIT_MONITOR",
    /**
     * Tool to edit an existing public status page. use after confirming the page id. updates friendly name, monitor set, domain, and status options in one call.
     */
    EDIT_PUBLIC_STATUS_PAGE: "UPTIMEROBOT_EDIT_PUBLIC_STATUS_PAGE",
    /**
     * Tool to retrieve account details. use after authenticating with a valid api key to fetch account metrics.
     */
    GET_ACCOUNT_DETAILS: "UPTIMEROBOT_GET_ACCOUNT_DETAILS",
    /**
     * Tool to retrieve maintenance windows. use after confirming a valid api key.
     */
    GET_MAINTENANCE_WINDOWS: "UPTIMEROBOT_GET_MAINTENANCE_WINDOWS",
    /**
     * Tool to fetch monitor details and status. use after confirming account connection.
     */
    GET_MONITORS: "UPTIMEROBOT_GET_MONITORS",
    /**
     * Tool to get authentication type for specified monitors. use after providing monitor ids to check http basic auth status.
     */
    GET_MONITOR_AUTHENTICATION_TYPE: "UPTIMEROBOT_GET_MONITOR_AUTHENTICATION_TYPE",
    /**
     * Tool to retrieve custom http headers for specified monitors. use when you need to inspect the headers set on your monitors.
     */
    GET_MONITOR_CUSTOM_HTTP_HEADERS: "UPTIMEROBOT_GET_MONITOR_CUSTOM_HTTP_HEADERS",
    /**
     * Tool to retrieve custom http statuses for specified monitors. use when you need to view user-defined up/down http codes after confirming monitor ids.
     */
    GET_MONITOR_CUSTOM_HTTP_STATUSES: "UPTIMEROBOT_GET_MONITOR_CUSTOM_HTTP_STATUSES",
    /**
     * Tool to fetch historical response times for specified monitors. use when you need performance trends over time after retrieving monitor ids.
     */
    GET_MONITOR_RESPONSE_TIMES: "UPTIMEROBOT_GET_MONITOR_RESPONSE_TIMES",
    /**
     * Tool to retrieve ssl certificate information for specified monitors. use when you need ssl details after confirming monitor ids.
     */
    GET_MONITOR_SSL_CERTIFICATE_INFO: "UPTIMEROBOT_GET_MONITOR_SSL_CERTIFICATE_INFO",
    /**
     * Tool to retrieve timezone for specified monitors. use after providing monitor ids to get monitor timezones.
     */
    GET_MONITOR_TIMEZONE: "UPTIMEROBOT_GET_MONITOR_TIMEZONE",
    /**
     * Tool to retrieve public status pages. use after confirming api credentials to list all public status pages for an account. supports pagination.
     */
    GET_PUBLIC_STATUS_PAGES: "UPTIMEROBOT_GET_PUBLIC_STATUS_PAGES",
    /**
     * Tool to retrieve uptime ratios for monitors. use after obtaining monitor ids to analyze sla performance over custom periods.
     */
    GET_UPTIME_RATIOS: "UPTIMEROBOT_GET_UPTIME_RATIOS",
    /**
     * Tool to create a new maintenance window. use after confirming window parameters.
     */
    NEW_MAINTENANCE_WINDOW: "UPTIMEROBOT_NEW_MAINTENANCE_WINDOW",
    /**
     * Tool to create a new public status page. use when you want to publish a public status page for selected monitors after specifying a friendly name.
     */
    NEW_PUBLIC_STATUS_PAGE: "UPTIMEROBOT_NEW_PUBLIC_STATUS_PAGE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "UPTIMEROBOT".
 */
export type UPTIMEROBOT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "UPTIMEROBOT".
 */
export type UPTIMEROBOT_TRIGGER_EVENTS = {}
