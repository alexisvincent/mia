// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CONTROL_D's CONTROL_D_DELETE_DEVICES_DEVICE_ID tool input.
 */
type CONTROL_D_DELETE_DEVICES_DEVICE_ID_INPUT = {
  /**
   * Device Id
   * @description Unique identifier of the device to delete
   */
  device_id?: string;
  /**
   * X Force Org Id
   * @description Optional X-Force-Org-Id header to impersonate a child sub-organization admin (organization accounts only).
   * @default null
   */
  x_force_org_id: string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_DELETE_DEVICES_DEVICE_ID tool output.
 */
type CONTROL_D_DELETE_DEVICES_DEVICE_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload for success or error details.
       */
      body?: {
          [key: string]: unknown;
      };
      /**
       * ErrorResponse
       * @description Error details when success=false.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first 3 digits match HTTP status.
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True when the request completes successfully.
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
 * Type of CONTROL_D's CONTROL_D_DELETE_PROFILES_PROFILE_ID tool input.
 */
type CONTROL_D_DELETE_PROFILES_PROFILE_ID_INPUT = {
  /**
   * Profile Id
   * @description Profile primary key (PK). Example: '123abc'.
   */
  profile_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_DELETE_PROFILES_PROFILE_ID tool output.
 */
type CONTROL_D_DELETE_PROFILES_PROFILE_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Controller-specific data returned in the response. May be empty or omitted for DELETE operations.
       * @default null
       */
      body: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Message
       * @description Optional informational message from the server.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the profile was successfully deleted.
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
 * Type of CONTROL_D's CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_HOSTNAME tool input.
 */
type CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_HOSTNAME_INPUT = {
  /**
   * Hostname
   * @description The hostname of the custom rule to delete
   */
  hostname?: string;
  /**
   * Profile Id
   * @description Unique identifier of the profile from which to delete the rule
   */
  profile_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_HOSTNAME tool output.
 */
type CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_HOSTNAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Response body, structure depends on endpoint
       * @default null
       */
      body: {
          [key: string]: unknown;
      } | null;
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the deletion was successful
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
 * Type of CONTROL_D's CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID tool input.
 */
type CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID_INPUT = {
  /**
   * Profile Id
   * @description Unique identifier of the profile from which to delete the rule
   */
  profile_id?: string;
  /**
   * Rule Id
   * @description The identifier of the custom rule to delete
   */
  rule_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID tool output.
 */
type CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Response body, structure depends on endpoint
       * @default null
       */
      body: {
          [key: string]: unknown;
      } | null;
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code; first 3 digits match HTTP status code
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the deletion was successful
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
 * Type of CONTROL_D's CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID tool input.
 */
type CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID_INPUT = {
  /**
   * Folder Id
   * @description Unique identifier of the folder containing the rule
   */
  folder_id?: string;
  /**
   * Profile Id
   * @description Unique identifier of the profile from which to delete the rule
   */
  profile_id?: string;
  /**
   * Rule Id
   * @description Unique identifier of the custom rule to delete
   */
  rule_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID tool output.
 */
type CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Response body, structure depends on endpoint
       * @default null
       */
      body: {
          [key: string]: unknown;
      } | null;
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the deletion was successful
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
 * Type of CONTROL_D's CONTROL_D_DELETE_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID tool input.
 */
type CONTROL_D_DELETE_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID_INPUT = {
  /**
   * Profile Id
   * @description Unique identifier of the profile from which to delete the schedule
   */
  profile_id?: string;
  /**
   * Schedule Id
   * @description Unique identifier of the schedule to delete
   */
  schedule_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_DELETE_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID tool output.
 */
type CONTROL_D_DELETE_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Response body, structure depends on endpoint
       * @default null
       */
      body: {
          [key: string]: unknown;
      } | null;
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the deletion was successful
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
 * Type of CONTROL_D's CONTROL_D_GET_ACCESS tool input.
 */
type CONTROL_D_GET_ACCESS_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts, impersonate a child sub-organization admin to view/modify access IPs within that sub-org.
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Device Id
   * @description Unique identifier of the device whose access IPs should be listed.
   * @default null
   */
  device_id: string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_ACCESS tool output.
 */
type CONTROL_D_GET_ACCESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Container for returned data; contains 'access' field.
       */
      body: {
          /**
           * Access
           * @description List of IP addresses used to query against a device.
           */
          access: string[];
      };
      /**
       * ErrorResponse
       * @description Error response returned by the API on failure.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first 3 digits match the HTTP status code.
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional message returned by the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the request was successful, false otherwise.
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
 * Type of CONTROL_D's CONTROL_D_GET_ANALYTICS_ENDPOINTS tool input.
 */
type CONTROL_D_GET_ANALYTICS_ENDPOINTS_INPUT = object;

/**
 * Type of CONTROL_D's CONTROL_D_GET_ANALYTICS_ENDPOINTS tool output.
 */
type CONTROL_D_GET_ANALYTICS_ENDPOINTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Returned analytics endpoints data.
       */
      body: {
          /**
           * Endpoints
           * @description List of analytics storage regions and their endpoints.
           */
          endpoints: {
              /**
               * Region
               * @description Storage region code, e.g., 'us-east-1'.
               */
              region: string;
              /**
               * Url
               * Format: uri
               * @description Endpoint URL for the region.
               */
              url: string;
          }[];
      };
      /**
       * ErrorResponse
       * @description Error details if the request failed.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code.
           */
          code: number;
          /**
           * Message
           * @description Error message.
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional informational message.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded.
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
 * Type of CONTROL_D's CONTROL_D_GET_DEVICES tool input.
 */
type CONTROL_D_GET_DEVICES_INPUT = {
  /**
   * Device Type
   * @description Optional path filter: 'users' for user devices, 'routers' for router devices.
   * @default null
   * @enum {string|null}
   */
  device_type: "users" | "routers" | null;
  /**
   * X Force Org Id
   * @description Optional X-Force-Org-Id header to impersonate a child sub-organization admin (organization accounts only).
   * @default null
   */
  x_force_org_id: string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_DEVICES tool output.
 */
type CONTROL_D_GET_DEVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload containing devices array.
       */
      body: {
          /**
           * Devices
           * @description List of device objects.
           */
          devices: {
              [key: string]: unknown;
          }[];
      };
      /**
       * ErrorResponse
       * @description Error details when success=false.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first 3 digits match HTTP status.
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True when the request completes successfully.
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
 * Type of CONTROL_D's CONTROL_D_GET_ORGANIZATIONS_ORGANIZATION tool input.
 */
type CONTROL_D_GET_ORGANIZATIONS_ORGANIZATION_INPUT = object;

/**
 * Type of CONTROL_D's CONTROL_D_GET_ORGANIZATIONS_ORGANIZATION tool output.
 */
type CONTROL_D_GET_ORGANIZATIONS_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Organization details object
       */
      body: {
          /**
           * Billing Email
           * @description Billing contact email
           */
          billing_email: string;
          /**
           * Created At
           * @description ISO 8601 timestamp when the organization was created
           */
          created_at: string;
          /**
           * Handle
           * @description Organization handle
           */
          handle: string;
          /**
           * Id
           * @description Unique identifier for the organization
           */
          id: string;
          /**
           * Name
           * @description Organization name
           */
          name: string;
          /**
           * Plan
           * @description Current subscription plan of the organization
           */
          plan: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the organization was last updated
           */
          updated_at: string;
      };
      /**
       * Error
       * @description Error object returned when the API call is unsuccessful.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code
           */
          code: number;
          /**
           * Message
           * @description Error message
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional informational message from the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the request was successful
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES tool input.
 */
type CONTROL_D_GET_PROFILES_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts only; impersonate a child sub-organization admin for all Profiles-scope calls
   * @default null
   */
  "X-Force-Org-Id": string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES tool output.
 */
type CONTROL_D_GET_PROFILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Container for returned data; includes profiles list
       */
      body: {
          /**
           * Profiles
           * @description List of profile objects associated with the account
           */
          profiles: {
              /**
               * Pk
               * @description Primary key that identifies the profile
               */
              pk: string;
          }[];
      };
      /**
       * Message
       * @description Optional human-readable message
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_OPTIONS tool input.
 */
type CONTROL_D_GET_PROFILES_OPTIONS_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts only; impersonate a child sub-organization admin for all Profiles-scoped calls
   * @default null
   */
  "X-Force-Org-Id": string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_OPTIONS tool output.
 */
type CONTROL_D_GET_PROFILES_OPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload containing the list of profile options
       */
      body: {
          /**
           * Options
           * @description List of available profile options
           */
          options: {
              [key: string]: unknown;
          }[];
      };
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code; first three digits match HTTP status.
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional informational message
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts only; impersonate a child sub-organization admin to retrieve the profile in that context.
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Profile Id
   * @description Unique identifier of the profile to retrieve
   */
  profile_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Container for returned data; includes profile details
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * ErrorResponse
       * @description Error object returned when the API call is unsuccessful.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code; first 3 digits match HTTP status code
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional informational message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_INPUT = {
  /**
   * Profile Id
   * @description Unique identifier of the profile to fetch analytics for.
   */
  profile_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Analytics data payload.
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * ErrorResponse
       * @description Error details when the request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code; first three digits match HTTP status code.
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded.
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS_INPUT = {
  /**
   * X Force Org Id
   * @description Optional override of organization context for multi-org accounts.
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * From Date
   * @description UTC start timestamp for filtering logs (ISO 8601).
   * @default null
   */
  from_date: string | null;
  /**
   * Profile Id
   * @description Unique identifier of the profile to list analytics logs for.
   */
  profile_id?: string;
  /**
   * To Date
   * @description UTC end timestamp for filtering logs (ISO 8601).
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Logs data payload.
       */
      body: {
          /**
           * Logs
           * @description List of analytics log entries.
           */
          logs: {
              [key: string]: unknown;
          }[];
      };
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code; first three digits match HTTP status code.
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded.
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS_LOG_ID tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS_LOG_ID_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts, impersonate a child sub-organization admin for profiles-scope API calls. Optional.
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Log Id
   * @description Identifier of the analytics log entry to retrieve.
   */
  log_id?: string;
  /**
   * Profile Id
   * @description Identifier of the target profile (Profile PK).
   */
  profile_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS_LOG_ID tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS_LOG_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Analytics log entry data.
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first three digits match HTTP status.
           */
          code: number;
          /**
           * Message
           * @description Error message.
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional informational message.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded.
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_SUMMARY tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_SUMMARY_INPUT = {
  /**
   * From Date
   * @description Start date for analytics summary in ISO 8601 format, inclusive.
   * @default null
   */
  from_date: string | null;
  /**
   * Profile Id
   * @description Identifier of the target profile (Profile PK).
   */
  profile_id?: string;
  /**
   * To Date
   * @description End date for analytics summary in ISO 8601 format, inclusive.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_SUMMARY tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_SUMMARY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * AnalyticsSummaryBody
       * @description Container for analytics summary data.
       * @default null
       */
      body: {
          /**
           * Allowed
           * @description Number of requests allowed
           */
          allowed: number;
          /**
           * Blocked
           * @description Number of requests blocked
           */
          blocked: number;
          /**
           * Rate Limited
           * @description Number of requests rate limited
           */
          rate_limited: number;
          /**
           * Total Requests
           * @description Total number of requests processed
           */
          total_requests: number;
      } | null;
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first three digits match HTTP status code.
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional message returned by the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if API call was successful, false otherwise.
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_DOMAINS tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_DOMAINS_INPUT = {
  /**
   * From Date
   * @description Start date for analytics in ISO 8601 format, inclusive.
   * @default null
   */
  from_date: string | null;
  /**
   * Profile Id
   * @description Identifier of the target profile (Profile PK).
   */
  profile_id?: string;
  /**
   * To Date
   * @description End date for analytics in ISO 8601 format, inclusive.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_DOMAINS tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_DOMAINS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description List of top domains accessed within the profile.
       * @default null
       */
      body: {
          /**
           * Domain
           * @description The domain name.
           */
          domain: string;
          /**
           * Percentage
           * @description Percentage of total requests represented by this domain.
           */
          percentage: number;
          /**
           * Requests
           * @description Number of requests to this domain.
           */
          requests: number;
      }[] | null;
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first three digits match HTTP status code.
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional message returned by the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if API call was successful, false otherwise.
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_SERVICES tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_SERVICES_INPUT = {
  /**
   * From Date
   * @description Start date for analytics data in ISO 8601 format, inclusive.
   * @default null
   */
  from_date: string | null;
  /**
   * Profile Id
   * @description Identifier of the target profile (Profile PK).
   */
  profile_id?: string;
  /**
   * To Date
   * @description End date for analytics data in ISO 8601 format, inclusive.
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_SERVICES tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_SERVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Top services analytics data.
       */
      body: {
          /**
           * Services
           * @description List of top services with their access counts.
           */
          services: {
              /**
               * Count
               * @description Number of accesses for the service.
               */
              count: number;
              /**
               * Service
               * @description Service identifier or name.
               */
              service: string;
          }[];
      };
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first three digits match HTTP status code.
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional message returned by the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if API call was successful, false otherwise.
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_FILTERS tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_FILTERS_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts, impersonate a child sub-organization admin for profiles-scope API calls. Optional.
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Profile Id
   * @description Identifier of the target profile (Profile PK)
   */
  profile_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_FILTERS tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_FILTERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Mapping of controller name to list of profile filters
       */
      body: {
          [key: string]: {
              /**
               * Enabled
               * @description Whether this filter is enabled for the profile
               */
              enabled: boolean;
              /**
               * Id
               * @description Unique identifier of the filter
               */
              id: string;
              /**
               * Name
               * @description Human-readable name of the filter
               */
              name: string;
          }[];
      };
      /**
       * Message
       * @description Optional informational message
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_FILTERS_EXTERNAL tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_FILTERS_EXTERNAL_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts, impersonate a child sub-organization admin within Profiles scope
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Profile Id
   * @description The profile's ID used in the path
   */
  profile_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_FILTERS_EXTERNAL tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_FILTERS_EXTERNAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Container for endpoint data
       */
      body: {
          /**
           * Filters
           * @description List of external filters and their states
           */
          filters: {
              /**
               * Enabled
               * @description Whether the external filter is enabled
               */
              enabled: boolean;
              /**
               * Filter Id
               * @description Unique identifier for the external filter
               */
              filter_id: string;
              /**
               * Name
               * @description Name of the external filter
               */
              name: string;
              /**
               * Provider
               * @description Provider of the external filter
               */
              provider: string;
          }[];
      };
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first 3 digits match HTTP status
           */
          code: number;
          /**
           * Message
           * @description Error message
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message on success
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_FOLDERS tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_FOLDERS_INPUT = {
  /**
   * Profile Id
   * @description Identifier of the target profile
   */
  profile_id?: string;
  /**
   * X Force Org Id
   * @description For organization accounts, impersonate a child sub-organization admin for profile-scoped API calls. Optional.
   * @default null
   */
  x_force_org_id: string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_FOLDERS tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_FOLDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload containing the groups list
       */
      body: {
          /**
           * Groups
           * @description List of rule folder objects
           */
          groups: {
              [key: string]: unknown;
          }[];
      };
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first 3 digits match HTTP status code
           */
          code: number;
          /**
           * Message
           * @description Error message
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional informational message
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_RULES tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts, impersonate a child sub-organization admin within Profiles scope
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Folder Id
   * @description Target folder ID; if provided, lists rules from that folder; omit for root rules
   * @default null
   */
  folder_id: string | null;
  /**
   * Profile Id
   * @description The profile's ID used in the path
   */
  profile_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_RULES tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Container for endpoint data
       */
      body: {
          /**
           * Rules
           * @description List of custom rules
           */
          rules: {
              /**
               * Description
               * @description Description of the custom rule
               * @default null
               */
              description: string | null;
              /**
               * Enabled
               * @description Whether the custom rule is enabled
               */
              enabled: boolean;
              /**
               * Id
               * @description Unique identifier of the custom rule
               */
              id: string;
              /**
               * Name
               * @description Name of the custom rule
               */
              name: string;
              /**
               * Severity
               * @description Severity level of the custom rule
               */
              severity: number;
          }[];
      };
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first 3 digits match HTTP status
           */
          code: number;
          /**
           * Message
           * @description Error message
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message on success
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_FOLDER_ID tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_FOLDER_ID_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts, impersonate a child sub-organization admin within Profiles scope
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Folder Id
   * @description The folder ID used in the path
   */
  folder_id?: string;
  /**
   * Profile Id
   * @description The profile's ID used in the path
   */
  profile_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_FOLDER_ID tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_FOLDER_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Container for endpoint data
       */
      body: {
          /**
           * Rules
           * @description List of custom rules
           */
          rules: {
              /**
               * Description
               * @description Description of the custom rule
               * @default null
               */
              description: string | null;
              /**
               * Enabled
               * @description Whether the custom rule is enabled
               */
              enabled: boolean;
              /**
               * Id
               * @description Unique identifier of the custom rule
               */
              id: string;
              /**
               * Name
               * @description Name of the custom rule
               */
              name: string;
              /**
               * Severity
               * @description Severity level of the custom rule
               */
              severity: number;
          }[];
      };
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first 3 digits match HTTP status
           */
          code: number;
          /**
           * Message
           * @description Error message
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_RULE_ID tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_RULE_ID_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts: impersonate a child sub-organization admin within the Profiles scope
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Profile Id
   * @description Unique identifier of the profile to which the custom rule belongs
   */
  profile_id?: string;
  /**
   * Rule Id
   * @description Unique identifier of the custom rule to retrieve
   */
  rule_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_RULE_ID tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_RULE_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Details of the requested custom rule
       */
      body: {
          /**
           * Description
           * @description Description of the custom rule
           * @default null
           */
          description: string | null;
          /**
           * Enabled
           * @description Whether the custom rule is enabled
           */
          enabled: boolean;
          /**
           * Id
           * @description Unique identifier of the custom rule
           */
          id: string;
          /**
           * Name
           * @description Name of the custom rule
           */
          name: string;
          /**
           * Severity
           * @description Severity level of the custom rule
           */
          severity: number;
      };
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code; first 3 digits match HTTP status code
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the API call was successful
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID_INPUT = {
  /**
   * X Force Org Id
   * @description Optional header to impersonate a child sub-organization within Profiles scope
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Folder Id
   * @description Folder identifier used in the path
   */
  folder_id?: string;
  /**
   * Profile Id
   * @description Profile identifier used in the path
   */
  profile_id?: string;
  /**
   * Rule Id
   * @description Rule identifier used in the path
   */
  rule_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Container for endpoint data
       */
      body: {
          /**
           * Rule
           * @description Detailed information of the custom rule
           */
          rule: {
              /**
               * Description
               * @description Description of the custom rule
               * @default null
               */
              description: string | null;
              /**
               * Enabled
               * @description Whether the custom rule is enabled
               */
              enabled: boolean;
              /**
               * Id
               * @description Unique identifier of the custom rule
               */
              id: string;
              /**
               * Name
               * @description Name of the custom rule
               */
              name: string;
              /**
               * Severity
               * @description Severity level of the custom rule
               */
              severity: number;
          };
      };
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first 3 digits match HTTP status
           */
          code: number;
          /**
           * Message
           * @description Error message
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message from the server
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_SCHEDULES tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_SCHEDULES_INPUT = {
  /**
   * Profile Id
   * @description Identifier of the target profile (Profile PK)
   */
  profile_id?: string;
  /**
   * X Force Org Id
   * @description For organization accounts, impersonate a child sub-organization admin for profiles-scope API calls. Optional.
   * @default null
   */
  x_force_org_id: string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_SCHEDULES tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_SCHEDULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload containing the schedules list
       */
      body: {
          /**
           * Schedules
           * @description List of schedules associated with the profile
           */
          schedules: {
              [key: string]: unknown;
          }[];
      };
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first three digits match HTTP status
           */
          code: number;
          /**
           * Message
           * @description Error message
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional informational message
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts, impersonate a child sub-organization admin for profiles-scope API calls. Optional.
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Profile Id
   * @description Identifier of the target profile (Profile PK).
   */
  profile_id?: string;
  /**
   * Schedule Id
   * @description Identifier of the schedule to retrieve.
   */
  schedule_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload containing the schedule details
       */
      body: {
          /**
           * Schedule
           * @description Schedule details
           */
          schedule: {
              [key: string]: unknown;
          };
      };
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, matching HTTP status prefix
           */
          code: number;
          /**
           * Message
           * @description Error message
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional informational message
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_SERVICES tool input.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_SERVICES_INPUT = {
  /**
   * Profile Id
   * @description Identifier of the target profile (Profile PK).
   */
  profile_id?: string;
  /**
   * X Force Org Id
   * @description For organization accounts, impersonate a child sub-organization admin for profiles-scope API calls. Optional.
   * @default null
   */
  x_force_org_id: string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_PROFILES_PROFILE_ID_SERVICES tool output.
 */
type CONTROL_D_GET_PROFILES_PROFILE_ID_SERVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload containing the services list
       */
      body: {
          /**
           * Services
           * @description List of services with any associated rules
           */
          services: {
              [key: string]: unknown;
          }[];
      };
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first three digits match HTTP status
           */
          code: number;
          /**
           * Message
           * @description Error message
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional informational message
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_GET_SERVICES_CATEGORIES tool input.
 */
type CONTROL_D_GET_SERVICES_CATEGORIES_INPUT = object;

/**
 * Type of CONTROL_D's CONTROL_D_GET_SERVICES_CATEGORIES tool output.
 */
type CONTROL_D_GET_SERVICES_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload containing categories array.
       */
      body: {
          /**
           * Categories
           * @description List of service category objects.
           */
          categories: {
              [key: string]: unknown;
          }[];
      };
      /**
       * ErrorResponse
       * @description Error details when success=false.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first 3 digits match HTTP status.
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded.
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
 * Type of CONTROL_D's CONTROL_D_GET_SERVICES_CATEGORIES_CATEGORY tool input.
 */
type CONTROL_D_GET_SERVICES_CATEGORIES_CATEGORY_INPUT = {
  /**
   * Category
   * @description Identifier of the service category to list services from
   */
  category?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_GET_SERVICES_CATEGORIES_CATEGORY tool output.
 */
type CONTROL_D_GET_SERVICES_CATEGORIES_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description List of service objects in the specified category
       */
      body: {
          [key: string]: unknown;
      }[];
      /**
       * ErrorResponse
       * @description Error object returned when the API call is unsuccessful.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code; first 3 digits match HTTP status code
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional informational message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_GET_USERS tool input.
 */
type CONTROL_D_GET_USERS_INPUT = object;

/**
 * Type of CONTROL_D's CONTROL_D_GET_USERS tool output.
 */
type CONTROL_D_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload containing user account details.
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * ErrorResponse
       * @description Error details when success=false.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code; first three digits match HTTP status code.
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True when the request completes successfully.
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
 * Type of CONTROL_D's CONTROL_D_POST_DEVICES tool input.
 */
type CONTROL_D_POST_DEVICES_INPUT = {
  /**
   * Body
   * @description JSON object containing device properties for creation. Refer to API docs for required fields.
   */
  body?: {
      [key: string]: unknown;
  };
};

/**
 * Type of CONTROL_D's CONTROL_D_POST_DEVICES tool output.
 */
type CONTROL_D_POST_DEVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload containing the created device data or error details.
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * ErrorResponse
       * @description Error details when success=false.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first 3 digits match HTTP status.
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True when the request completes successfully.
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
 * Type of CONTROL_D's CONTROL_D_POST_PROFILES tool input.
 */
type CONTROL_D_POST_PROFILES_INPUT = {
  /**
   * X Force Org Id
   * @description Optional org ID to impersonate a child sub-organization admin for Profiles operations.
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Profile
   * @description JSON object representing new profile settings. Schema is undocumented; common keys include 'name' and 'clone_from_pk'.
   */
  profile?: {
      [key: string]: unknown;
  };
};

/**
 * Type of CONTROL_D's CONTROL_D_POST_PROFILES tool output.
 */
type CONTROL_D_POST_PROFILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Container for returned data; contains the created profile details
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * Message
       * @description Optional human-readable message
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_POST_PROFILES_PROFILE_ID_RULES tool input.
 */
type CONTROL_D_POST_PROFILES_PROFILE_ID_RULES_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts: impersonate a child sub-organization admin within the Profiles scope
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Profile Id
   * @description Profile primary key (PK) where rules will be created
   */
  profile_id?: string;
  /**
   * Rules
   * @description List of custom rule objects to create. Each object should follow the API schema, e.g., include 'name', 'description', 'severity', 'enabled', etc. Refer to the API docs.
   */
  rules?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of CONTROL_D's CONTROL_D_POST_PROFILES_PROFILE_ID_RULES tool output.
 */
type CONTROL_D_POST_PROFILES_PROFILE_ID_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload returned by the API for the created rules. Structure varies; refer to the API response schema.
       * @default null
       */
      body: unknown;
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first 3 digits mirror HTTP status
           */
          code: number;
          /**
           * Message
           * @description Error message from the API
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message from the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates request success
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
 * Type of CONTROL_D's CONTROL_D_POST_PROFILES_PROFILE_ID_RULES_FOLDER_ID tool input.
 */
type CONTROL_D_POST_PROFILES_PROFILE_ID_RULES_FOLDER_ID_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts: impersonate a child sub-organization admin within the Profiles scope
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Folder Id
   * @description Folder identifier within the profile where rules will be created
   */
  folder_id?: string;
  /**
   * Profile Id
   * @description Profile primary key (PK) where rules will be created
   */
  profile_id?: string;
  /**
   * Rules
   * @description List of custom rule objects to create. Each object should follow the API schema, e.g., include 'name', 'description', 'severity', 'enabled', etc. Refer to the API docs.
   */
  rules?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of CONTROL_D's CONTROL_D_POST_PROFILES_PROFILE_ID_RULES_FOLDER_ID tool output.
 */
type CONTROL_D_POST_PROFILES_PROFILE_ID_RULES_FOLDER_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload returned by the API for the created rules. Structure varies; refer to the API response schema.
       * @default null
       */
      body: unknown;
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first 3 digits mirror HTTP status
           */
          code: number;
          /**
           * Message
           * @description Error message from the API
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message from the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates request success
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
 * Type of CONTROL_D's CONTROL_D_POST_PROFILES_PROFILE_ID_SCHEDULES tool input.
 */
type CONTROL_D_POST_PROFILES_PROFILE_ID_SCHEDULES_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts: impersonate a child sub-organization admin within the Profiles scope
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Profile Id
   * @description Profile primary key (PK) where schedule will be created
   */
  profile_id?: string;
  /**
   * Schedule
   * @description Schedule object to create. Must follow the API schema, e.g., include 'name', 'start_time', 'recurrence', 'timezone', etc.
   */
  schedule?: {
      [key: string]: unknown;
  };
};

/**
 * Type of CONTROL_D's CONTROL_D_POST_PROFILES_PROFILE_ID_SCHEDULES tool output.
 */
type CONTROL_D_POST_PROFILES_PROFILE_ID_SCHEDULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload returned by the API for the created schedule. Structure varies; refer to API response schema.
       * @default null
       */
      body: {
          [key: string]: unknown;
      } | null;
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first 3 digits mirror HTTP status
           */
          code: number;
          /**
           * Message
           * @description Error message from the API
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message from the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates request success
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
 * Type of CONTROL_D's CONTROL_D_PUT_DEVICES_DEVICE_ID tool input.
 */
type CONTROL_D_PUT_DEVICES_DEVICE_ID_INPUT = {
  /**
   * Body
   * @description JSON object containing device fields to update. Refer to API docs for supported properties.
   */
  body?: {
      [key: string]: unknown;
  };
  /**
   * Device Id
   * @description Unique identifier of the device to modify.
   */
  device_id?: string;
  /**
   * X Force Org Id
   * @description Optional X-Force-Org-Id header to impersonate a child sub-organization admin (organization accounts only).
   * @default null
   */
  x_force_org_id: string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_PUT_DEVICES_DEVICE_ID tool output.
 */
type CONTROL_D_PUT_DEVICES_DEVICE_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload containing API response data; on success typically includes the updated device object.
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * ErrorResponse
       * @description Error details when success=false.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first 3 digits match HTTP status.
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True when the update completes successfully.
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
 * Type of CONTROL_D's CONTROL_D_PUT_ORGANIZATIONS tool input.
 */
type CONTROL_D_PUT_ORGANIZATIONS_INPUT = {
  /**
   * X Force Org Id
   * @description Optional header to impersonate a sub-organization by its ID
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Max Routers
   * @description Maximum number of routers allowed; changing this is a billable event
   * @default null
   */
  max_routers: number | null;
  /**
   * Max Users
   * @description Maximum number of users allowed; changing this is a billable event
   * @default null
   */
  max_users: number | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_PUT_ORGANIZATIONS tool output.
 */
type CONTROL_D_PUT_ORGANIZATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Updated organization details
       */
      body: {
          /**
           * Billing Email
           * @description Billing contact email
           */
          billing_email: string;
          /**
           * Created At
           * @description ISO 8601 timestamp when the organization was created
           */
          created_at: string;
          /**
           * Handle
           * @description Organization handle
           */
          handle: string;
          /**
           * Id
           * @description Unique identifier for the organization
           */
          id: string;
          /**
           * Name
           * @description Organization name
           */
          name: string;
          /**
           * Plan
           * @description Current subscription plan of the organization
           */
          plan: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the organization was last updated
           */
          updated_at: string;
      };
      /**
       * Error
       * @description Error object returned when the API call fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code
           */
          code: number;
          /**
           * Message
           * @description Error message
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional informational message from the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the request was successful
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
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID tool input.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts only; impersonate a child sub-organization admin for Profiles-scope calls
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Profile
   * @description JSON object containing the profile fields and values to update.
   */
  profile?: {
      [key: string]: unknown;
  };
  /**
   * Profile Id
   * @description Profile primary key (PK). Example: '123abc'.
   */
  profile_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID tool output.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload containing the updated profile object
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * Message
       * @description Optional human-readable message from the server
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS tool input.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_INPUT = {
  /**
   * Filters
   * @description List of filters to update with desired enabled states
   */
  filters?: {
      /**
       * Enabled
       * @description Whether this filter should be enabled for the profile
       */
      enabled: boolean;
      /**
       * Id
       * @description Unique identifier of the filter
       */
      id: string;
  }[];
  /**
   * Profile Id
   * @description Identifier of the target profile (Profile PK)
   */
  profile_id?: string;
  /**
   * X Force Org Id
   * @description For organization accounts, impersonate a child sub-organization admin for profiles-scope API calls. Optional.
   * @default null
   */
  x_force_org_id: string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS tool output.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Mapping of controller name to updated list of profile filters
       * @default null
       */
      body: {
          [key: string]: {
              /**
               * Enabled
               * @description Whether this filter is enabled for the profile
               */
              enabled: boolean;
              /**
               * Id
               * @description Unique identifier of the filter
               */
              id: string;
              /**
               * Name
               * @description Human-readable name of the filter
               */
              name: string;
          }[];
      } | null;
      /**
       * Message
       * @description Optional informational message from the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_EXTERNAL tool input.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_EXTERNAL_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts, impersonate a child sub-organization admin within the Profiles scope
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Filters
   * @description List of external filter update objects. Each must include 'filter_id' and 'enabled' flag.
   */
  filters?: {
      /**
       * Enabled
       * @description Flag to enable (true) or disable (false) the external filter
       */
      enabled: boolean;
      /**
       * Filter Id
       * @description Unique identifier for the external filter to update
       */
      filter_id: string;
  }[];
  /**
   * Profile Id
   * @description Unique identifier of the profile to update
   */
  profile_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_EXTERNAL tool output.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_EXTERNAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Container for endpoint data
       */
      body: {
          /**
           * Filters
           * @description List of external filters and their updated states
           */
          filters: {
              /**
               * Enabled
               * @description Whether the external filter is enabled
               */
              enabled: boolean;
              /**
               * Filter Id
               * @description Unique identifier for the external filter
               */
              filter_id: string;
              /**
               * Name
               * @description Name of the external filter
               */
              name: string;
              /**
               * Provider
               * @description Provider of the external filter
               */
              provider: string;
          }[];
      };
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, first 3 digits match HTTP status
           */
          code: number;
          /**
           * Message
           * @description Error message from the API
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message on success
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_FILTER_FILTER tool input.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_FILTER_FILTER_INPUT = {
  /**
   * Enabled
   * @description Whether to enable (true) or disable (false) the filter
   */
  enabled?: boolean;
  /**
   * Filter
   * @description Identifier of the filter to modify
   */
  filter?: string;
  /**
   * Profile Id
   * @description Identifier of the target profile (Profile PK)
   */
  profile_id?: string;
  /**
   * X Force Org Id
   * @description For organization accounts, impersonate a child sub-organization admin for profiles-scope API calls. Optional.
   * @default null
   */
  x_force_org_id: string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_FILTER_FILTER tool output.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_FILTER_FILTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Response body payload; structure depends on endpoint
       * @default null
       */
      body: {
          [key: string]: unknown;
      } | null;
      /**
       * Message
       * @description Optional informational message
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES tool input.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_INPUT = {
  /**
   * X Force Org Id
   * @description Optional: Impersonate a child sub-organization admin for Profiles scope
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Profile Id
   * @description Unique identifier of the profile to update
   */
  profile_id?: string;
  /**
   * Rules
   * @description List of custom rule updates for the profile
   */
  rules?: {
      /**
       * Description
       * @description Updated description of the custom rule
       * @default null
       */
      description: string | null;
      /**
       * Enabled
       * @description Updated enabled status of the custom rule
       * @default null
       */
      enabled: boolean | null;
      /**
       * Id
       * @description Unique identifier of the custom rule to update
       */
      id: string;
      /**
       * Name
       * @description Updated name of the custom rule
       * @default null
       */
      name: string | null;
      /**
       * Severity
       * @description Updated severity level of the custom rule
       * @default null
       */
      severity: number | null;
  }[];
};

/**
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES tool output.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Controller-specific data returned by the API
       * @default null
       */
      body: {
          [key: string]: unknown;
      } | null;
      /**
       * Message
       * @description Optional human-readable message from the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_RULE_ID tool input.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_RULE_ID_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts: impersonate a child sub-organization admin within the Profiles scope
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Description
   * @description Updated description of what the custom rule enforces
   * @default null
   */
  description: string | null;
  /**
   * Enabled
   * @description Updated enabled status of the custom rule
   * @default null
   */
  enabled: boolean | null;
  /**
   * Name
   * @description Updated name of the custom rule
   * @default null
   */
  name: string | null;
  /**
   * Profile Id
   * @description Unique identifier of the profile containing the custom rule
   */
  profile_id?: string;
  /**
   * Rule Id
   * @description Unique identifier of the custom rule to update
   */
  rule_id?: string;
  /**
   * Severity
   * @description Updated severity level of the custom rule (e.g., 0=low, 1=medium, 2=high)
   * @default null
   */
  severity: number | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_RULE_ID tool output.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_RULE_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Updated custom rule details or raw payload on failure
       * @default null
       */
      body: unknown;
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code; first 3 digits mirror HTTP status code
           */
          code: number;
          /**
           * Message
           * @description Error message from the API
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional human-readable message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the API call was successful
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
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID tool input.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID_INPUT = {
  /**
   * Folder Id
   * @description Target folder ID to assign the rule. Use 'root' to move the rule back to the root level.
   */
  folder_id?: string;
  /**
   * Profile Id
   * @description Unique identifier of the profile containing the rule
   */
  profile_id?: string;
  /**
   * Rule Id
   * @description Unique identifier of the custom rule to move
   */
  rule_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID tool output.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Controller-specific data returned by the API
       * @default null
       */
      body: {
          [key: string]: unknown;
      } | null;
      /**
       * Message
       * @description Optional human-readable message from the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID tool input.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID_INPUT = {
  /**
   * X Force Org Id
   * @description For organization accounts, impersonate a child sub-organization admin for profile-scope API calls.
   * @default null
   */
  "X-Force-Org-Id": string | null;
  /**
   * Profile Id
   * @description Identifier of the target profile (Profile PK).
   */
  profile_id?: string;
  /**
   * Schedule
   * @description JSON object containing the schedule fields and values to update.
   */
  schedule?: {
      [key: string]: unknown;
  };
  /**
   * Schedule Id
   * @description Identifier of the schedule to update.
   */
  schedule_id?: string;
};

/**
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID tool output.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Payload containing the updated schedule details
       */
      body: {
          /**
           * Schedule
           * @description Updated schedule details
           */
          schedule: {
              [key: string]: unknown;
          };
      };
      /**
       * ErrorInfo
       * @description Error details when a request fails.
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code, matching HTTP status prefix
           */
          code: number;
          /**
           * Message
           * @description Error message
           */
          message: string;
      } | null;
      /**
       * Message
       * @description Optional informational message
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_SERVICES_SERVICE tool input.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_SERVICES_SERVICE_INPUT = {
  /**
   * Do
   * @description Action to apply for service domains: 0=Block; 1=Bypass; 2=Spoof domains to IP; 3=Redirect domains via proxy
   * @enum {integer}
   */
  do?: 0 | 1 | 2 | 3;
  /**
   * Profile Id
   * @description Unique identifier of the profile to update
   */
  profile_id?: string;
  /**
   * Service
   * @description Identifier of the service to modify (e.g., 'http', 'ssh')
   */
  service?: string;
  /**
   * Status
   * @description Rule status: 0=disabled; 1=enabled
   * @enum {integer}
   */
  status?: 0 | 1;
  /**
   * Via
   * @description When do=2, supplies the A record or CNAME; when do=3, supplies a 3-letter IATA proxy code
   * @default null
   */
  via: string | null;
  /**
   * Via V6
   * @description When do=2, supplies the AAAA record; ignored otherwise
   * @default null
   */
  via_v6: string | null;
};

/**
 * Type of CONTROL_D's CONTROL_D_PUT_PROFILES_PROFILE_ID_SERVICES_SERVICE tool output.
 */
type CONTROL_D_PUT_PROFILES_PROFILE_ID_SERVICES_SERVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Controller-specific data returned by the API
       * @default null
       */
      body: {
          [key: string]: unknown;
      } | null;
      /**
       * Message
       * @description Optional human-readable message from the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the request succeeded
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
 * Type map of all available tool input types for toolkit "CONTROL_D".
 */
export type CONTROL_D_TOOL_INPUTS = {
  DELETE_DEVICES_DEVICE_ID: CONTROL_D_DELETE_DEVICES_DEVICE_ID_INPUT
  DELETE_PROFILES_PROFILE_ID: CONTROL_D_DELETE_PROFILES_PROFILE_ID_INPUT
  DELETE_PROFILES_PROFILE_ID_RULES_HOSTNAME: CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_HOSTNAME_INPUT
  DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID: CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID_INPUT
  DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID: CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID_INPUT
  DELETE_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID: CONTROL_D_DELETE_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID_INPUT
  GET_ACCESS: CONTROL_D_GET_ACCESS_INPUT
  GET_ANALYTICS_ENDPOINTS: CONTROL_D_GET_ANALYTICS_ENDPOINTS_INPUT
  GET_DEVICES: CONTROL_D_GET_DEVICES_INPUT
  GET_ORGANIZATIONS_ORGANIZATION: CONTROL_D_GET_ORGANIZATIONS_ORGANIZATION_INPUT
  GET_PROFILES: CONTROL_D_GET_PROFILES_INPUT
  GET_PROFILES_OPTIONS: CONTROL_D_GET_PROFILES_OPTIONS_INPUT
  GET_PROFILES_PROFILE_ID: CONTROL_D_GET_PROFILES_PROFILE_ID_INPUT
  GET_PROFILES_PROFILE_ID_ANALYTICS: CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_INPUT
  GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS: CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS_INPUT
  GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS_LOG_ID: CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS_LOG_ID_INPUT
  GET_PROFILES_PROFILE_ID_ANALYTICS_SUMMARY: CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_SUMMARY_INPUT
  GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_DOMAINS: CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_DOMAINS_INPUT
  GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_SERVICES: CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_SERVICES_INPUT
  GET_PROFILES_PROFILE_ID_FILTERS: CONTROL_D_GET_PROFILES_PROFILE_ID_FILTERS_INPUT
  GET_PROFILES_PROFILE_ID_FILTERS_EXTERNAL: CONTROL_D_GET_PROFILES_PROFILE_ID_FILTERS_EXTERNAL_INPUT
  GET_PROFILES_PROFILE_ID_FOLDERS: CONTROL_D_GET_PROFILES_PROFILE_ID_FOLDERS_INPUT
  GET_PROFILES_PROFILE_ID_RULES: CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_INPUT
  GET_PROFILES_PROFILE_ID_RULES_FOLDER_ID: CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_FOLDER_ID_INPUT
  GET_PROFILES_PROFILE_ID_RULES_RULE_ID: CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_RULE_ID_INPUT
  GET_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID: CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID_INPUT
  GET_PROFILES_PROFILE_ID_SCHEDULES: CONTROL_D_GET_PROFILES_PROFILE_ID_SCHEDULES_INPUT
  GET_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID: CONTROL_D_GET_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID_INPUT
  GET_PROFILES_PROFILE_ID_SERVICES: CONTROL_D_GET_PROFILES_PROFILE_ID_SERVICES_INPUT
  GET_SERVICES_CATEGORIES: CONTROL_D_GET_SERVICES_CATEGORIES_INPUT
  GET_SERVICES_CATEGORIES_CATEGORY: CONTROL_D_GET_SERVICES_CATEGORIES_CATEGORY_INPUT
  GET_USERS: CONTROL_D_GET_USERS_INPUT
  POST_DEVICES: CONTROL_D_POST_DEVICES_INPUT
  POST_PROFILES: CONTROL_D_POST_PROFILES_INPUT
  POST_PROFILES_PROFILE_ID_RULES: CONTROL_D_POST_PROFILES_PROFILE_ID_RULES_INPUT
  POST_PROFILES_PROFILE_ID_RULES_FOLDER_ID: CONTROL_D_POST_PROFILES_PROFILE_ID_RULES_FOLDER_ID_INPUT
  POST_PROFILES_PROFILE_ID_SCHEDULES: CONTROL_D_POST_PROFILES_PROFILE_ID_SCHEDULES_INPUT
  PUT_DEVICES_DEVICE_ID: CONTROL_D_PUT_DEVICES_DEVICE_ID_INPUT
  PUT_ORGANIZATIONS: CONTROL_D_PUT_ORGANIZATIONS_INPUT
  PUT_PROFILES_PROFILE_ID: CONTROL_D_PUT_PROFILES_PROFILE_ID_INPUT
  PUT_PROFILES_PROFILE_ID_FILTERS: CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_INPUT
  PUT_PROFILES_PROFILE_ID_FILTERS_EXTERNAL: CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_EXTERNAL_INPUT
  PUT_PROFILES_PROFILE_ID_FILTERS_FILTER_FILTER: CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_FILTER_FILTER_INPUT
  PUT_PROFILES_PROFILE_ID_RULES: CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_INPUT
  PUT_PROFILES_PROFILE_ID_RULES_RULE_ID: CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_RULE_ID_INPUT
  PUT_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID: CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID_INPUT
  PUT_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID: CONTROL_D_PUT_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID_INPUT
  PUT_PROFILES_PROFILE_ID_SERVICES_SERVICE: CONTROL_D_PUT_PROFILES_PROFILE_ID_SERVICES_SERVICE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CONTROL_D".
 */
export type CONTROL_D_TOOL_OUTPUTS = {
  DELETE_DEVICES_DEVICE_ID: CONTROL_D_DELETE_DEVICES_DEVICE_ID_OUTPUT
  DELETE_PROFILES_PROFILE_ID: CONTROL_D_DELETE_PROFILES_PROFILE_ID_OUTPUT
  DELETE_PROFILES_PROFILE_ID_RULES_HOSTNAME: CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_HOSTNAME_OUTPUT
  DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID: CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID_OUTPUT
  DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID: CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID_OUTPUT
  DELETE_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID: CONTROL_D_DELETE_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID_OUTPUT
  GET_ACCESS: CONTROL_D_GET_ACCESS_OUTPUT
  GET_ANALYTICS_ENDPOINTS: CONTROL_D_GET_ANALYTICS_ENDPOINTS_OUTPUT
  GET_DEVICES: CONTROL_D_GET_DEVICES_OUTPUT
  GET_ORGANIZATIONS_ORGANIZATION: CONTROL_D_GET_ORGANIZATIONS_ORGANIZATION_OUTPUT
  GET_PROFILES: CONTROL_D_GET_PROFILES_OUTPUT
  GET_PROFILES_OPTIONS: CONTROL_D_GET_PROFILES_OPTIONS_OUTPUT
  GET_PROFILES_PROFILE_ID: CONTROL_D_GET_PROFILES_PROFILE_ID_OUTPUT
  GET_PROFILES_PROFILE_ID_ANALYTICS: CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_OUTPUT
  GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS: CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS_OUTPUT
  GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS_LOG_ID: CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS_LOG_ID_OUTPUT
  GET_PROFILES_PROFILE_ID_ANALYTICS_SUMMARY: CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_SUMMARY_OUTPUT
  GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_DOMAINS: CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_DOMAINS_OUTPUT
  GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_SERVICES: CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_SERVICES_OUTPUT
  GET_PROFILES_PROFILE_ID_FILTERS: CONTROL_D_GET_PROFILES_PROFILE_ID_FILTERS_OUTPUT
  GET_PROFILES_PROFILE_ID_FILTERS_EXTERNAL: CONTROL_D_GET_PROFILES_PROFILE_ID_FILTERS_EXTERNAL_OUTPUT
  GET_PROFILES_PROFILE_ID_FOLDERS: CONTROL_D_GET_PROFILES_PROFILE_ID_FOLDERS_OUTPUT
  GET_PROFILES_PROFILE_ID_RULES: CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_OUTPUT
  GET_PROFILES_PROFILE_ID_RULES_FOLDER_ID: CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_FOLDER_ID_OUTPUT
  GET_PROFILES_PROFILE_ID_RULES_RULE_ID: CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_RULE_ID_OUTPUT
  GET_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID: CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID_OUTPUT
  GET_PROFILES_PROFILE_ID_SCHEDULES: CONTROL_D_GET_PROFILES_PROFILE_ID_SCHEDULES_OUTPUT
  GET_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID: CONTROL_D_GET_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID_OUTPUT
  GET_PROFILES_PROFILE_ID_SERVICES: CONTROL_D_GET_PROFILES_PROFILE_ID_SERVICES_OUTPUT
  GET_SERVICES_CATEGORIES: CONTROL_D_GET_SERVICES_CATEGORIES_OUTPUT
  GET_SERVICES_CATEGORIES_CATEGORY: CONTROL_D_GET_SERVICES_CATEGORIES_CATEGORY_OUTPUT
  GET_USERS: CONTROL_D_GET_USERS_OUTPUT
  POST_DEVICES: CONTROL_D_POST_DEVICES_OUTPUT
  POST_PROFILES: CONTROL_D_POST_PROFILES_OUTPUT
  POST_PROFILES_PROFILE_ID_RULES: CONTROL_D_POST_PROFILES_PROFILE_ID_RULES_OUTPUT
  POST_PROFILES_PROFILE_ID_RULES_FOLDER_ID: CONTROL_D_POST_PROFILES_PROFILE_ID_RULES_FOLDER_ID_OUTPUT
  POST_PROFILES_PROFILE_ID_SCHEDULES: CONTROL_D_POST_PROFILES_PROFILE_ID_SCHEDULES_OUTPUT
  PUT_DEVICES_DEVICE_ID: CONTROL_D_PUT_DEVICES_DEVICE_ID_OUTPUT
  PUT_ORGANIZATIONS: CONTROL_D_PUT_ORGANIZATIONS_OUTPUT
  PUT_PROFILES_PROFILE_ID: CONTROL_D_PUT_PROFILES_PROFILE_ID_OUTPUT
  PUT_PROFILES_PROFILE_ID_FILTERS: CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_OUTPUT
  PUT_PROFILES_PROFILE_ID_FILTERS_EXTERNAL: CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_EXTERNAL_OUTPUT
  PUT_PROFILES_PROFILE_ID_FILTERS_FILTER_FILTER: CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_FILTER_FILTER_OUTPUT
  PUT_PROFILES_PROFILE_ID_RULES: CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_OUTPUT
  PUT_PROFILES_PROFILE_ID_RULES_RULE_ID: CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_RULE_ID_OUTPUT
  PUT_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID: CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID_OUTPUT
  PUT_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID: CONTROL_D_PUT_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID_OUTPUT
  PUT_PROFILES_PROFILE_ID_SERVICES_SERVICE: CONTROL_D_PUT_PROFILES_PROFILE_ID_SERVICES_SERVICE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CONTROL_D toolkit.
 */
export const CONTROL_D = {
  slug: "control_d",
  tools: {
    /**
     * Tool to delete a Control-D device. Use when you need to remove a device by its identifier after confirming the device_id.
     */
    DELETE_DEVICES_DEVICE_ID: "CONTROL_D_DELETE_DEVICES_DEVICE_ID",
    /**
     * Tool to delete a profile. Use when you need to remove a profile by its ID after ensuring it is not enforced by any device.
     */
    DELETE_PROFILES_PROFILE_ID: "CONTROL_D_DELETE_PROFILES_PROFILE_ID",
    /**
     * Tool to delete a specific custom rule by hostname from a profile. Use after confirming profile_id and hostname.
     */
    DELETE_PROFILES_PROFILE_ID_RULES_HOSTNAME: "CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_HOSTNAME",
    /**
     * Tool to delete a specific custom rule by its ID within a profile. Use after confirming profile_id and rule_id.
     */
    DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID: "CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID",
    /**
     * Tool to delete a specific custom rule within a folder. Use after confirming profile_id, rule_id, and folder_id.
     */
    DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID: "CONTROL_D_DELETE_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID",
    /**
     * Tool to delete a specific schedule within a profile. Use after confirming profile_id and schedule_id.
     */
    DELETE_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID: "CONTROL_D_DELETE_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID",
    /**
     * Tool to list known IPs associated with the account. Use when you need to retrieve recent access IPs for device resolver queries.
     */
    GET_ACCESS: "CONTROL_D_GET_ACCESS",
    /**
     * Tool to list analytics storage regions and their endpoints. Use after authenticating to retrieve available analytics regions.
     */
    GET_ANALYTICS_ENDPOINTS: "CONTROL_D_GET_ANALYTICS_ENDPOINTS",
    /**
     * Tool to list all devices associated with the account. Use when you need to retrieve device inventory after authentication.
     */
    GET_DEVICES: "CONTROL_D_GET_DEVICES",
    /**
     * Tool to view the authenticated organization's details. Use after confirming a valid API token.
     */
    GET_ORGANIZATIONS_ORGANIZATION: "CONTROL_D_GET_ORGANIZATIONS_ORGANIZATION",
    /**
     * Tool to list all profiles associated with the authenticated account. Use when you need an overview of accessible profiles.
     */
    GET_PROFILES: "CONTROL_D_GET_PROFILES",
    /**
     * Tool to get all available profile options. Use when you need to retrieve the possible configurations for profiles after authenticating.
     */
    GET_PROFILES_OPTIONS: "CONTROL_D_GET_PROFILES_OPTIONS",
    /**
     * Tool to retrieve details of a specific profile by its ID. Use when you need full profile details after confirming the profile_id.
     */
    GET_PROFILES_PROFILE_ID: "CONTROL_D_GET_PROFILES_PROFILE_ID",
    /**
     * Tool to retrieve analytics data for a specific profile. Use after the profile has accrued usage data to fetch analytics.
     */
    GET_PROFILES_PROFILE_ID_ANALYTICS: "CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS",
    /**
     * Tool to list analytics log entries for a given profile. Use after confirming profile ID and optional date filters to fetch logs.
     */
    GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS: "CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS",
    /**
     * Tool to retrieve a specific analytics log entry by its ID. Use when you need details of an analytics log for a given profile.
     */
    GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS_LOG_ID: "CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_LOGS_LOG_ID",
    /**
     * Tool to fetch a summary of analytics data for a given profile. Use after confirming profile ID and desired date range.
     */
    GET_PROFILES_PROFILE_ID_ANALYTICS_SUMMARY: "CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_SUMMARY",
    /**
     * Tool to fetch top domains accessed within a specific profile. Use after confirming profile ID.
     */
    GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_DOMAINS: "CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_DOMAINS",
    /**
     * Tool to fetch top services accessed within a profile. Use after confirming the profile ID and desired date range.
     */
    GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_SERVICES: "CONTROL_D_GET_PROFILES_PROFILE_ID_ANALYTICS_TOP_SERVICES",
    /**
     * Tool to list native filters associated with a specific profile. Use when you have a profile ID and need to retrieve its filters and their states.
     */
    GET_PROFILES_PROFILE_ID_FILTERS: "CONTROL_D_GET_PROFILES_PROFILE_ID_FILTERS",
    /**
     * Tool to list third-party filters for a specific profile. Use when you need to retrieve all external filters and their states after confirming the profile ID.
     */
    GET_PROFILES_PROFILE_ID_FILTERS_EXTERNAL: "CONTROL_D_GET_PROFILES_PROFILE_ID_FILTERS_EXTERNAL",
    /**
     * Tool to list rule folders (groups) within a profile. Use when you need to retrieve all folders for a given profile after confirming the profile ID.
     */
    GET_PROFILES_PROFILE_ID_FOLDERS: "CONTROL_D_GET_PROFILES_PROFILE_ID_FOLDERS",
    /**
     * Tool to retrieve custom rules associated with a specific profile. Use after confirming the profile ID. Omit `folder_id` to list rules in the root folder.
     */
    GET_PROFILES_PROFILE_ID_RULES: "CONTROL_D_GET_PROFILES_PROFILE_ID_RULES",
    /**
     * Tool to retrieve custom rules in a specific folder of a profile. Use after confirming both profile ID and folder ID.
     */
    GET_PROFILES_PROFILE_ID_RULES_FOLDER_ID: "CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_FOLDER_ID",
    /**
     * Tool to retrieve details of a specific custom rule by its ID. Use after confirming the profile_id and rule_id to fetch that rule's metadata.
     */
    GET_PROFILES_PROFILE_ID_RULES_RULE_ID: "CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_RULE_ID",
    /**
     * Tool to retrieve a specific rule within a folder by its ID. Use when you need full details of a custom rule in a profile's folder.
     */
    GET_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID: "CONTROL_D_GET_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID",
    /**
     * Tool to list schedules associated with a specific profile. Use after confirming the profile ID.
     */
    GET_PROFILES_PROFILE_ID_SCHEDULES: "CONTROL_D_GET_PROFILES_PROFILE_ID_SCHEDULES",
    /**
     * Tool to retrieve a specific schedule by its ID within a profile. Use when you need details of a profile schedule after confirming the profile_id and schedule_id.
     */
    GET_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID: "CONTROL_D_GET_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID",
    /**
     * Tool to list services associated with a specific profile. Use when you need to retrieve all services that have any associated rules after confirming the profile ID.
     */
    GET_PROFILES_PROFILE_ID_SERVICES: "CONTROL_D_GET_PROFILES_PROFILE_ID_SERVICES",
    /**
     * Tool to list all service categories. Use when you need to retrieve available categories before filtering or assigning services.
     */
    GET_SERVICES_CATEGORIES: "CONTROL_D_GET_SERVICES_CATEGORIES",
    /**
     * Tool to list all services within a specific category. Use after confirming a valid category identifier.
     */
    GET_SERVICES_CATEGORIES_CATEGORY: "CONTROL_D_GET_SERVICES_CATEGORIES_CATEGORY",
    /**
     * Tool to retrieve user account data. Use when you need account details after authentication.
     */
    GET_USERS: "CONTROL_D_GET_USERS",
    /**
     * Tool to create a new device. Use when you need to provision devices and retrieve their DNS resolvers.
     */
    POST_DEVICES: "CONTROL_D_POST_DEVICES",
    /**
     * Tool to create a new blank profile or clone an existing one. Use when you need to provision a profile before assigning rules or devices.
     */
    POST_PROFILES: "CONTROL_D_POST_PROFILES",
    /**
     * Tool to create custom rules for a profile. Use after confirming the profile ID and preparing rule definitions. Provide a list of rule objects matching the API schema.
     */
    POST_PROFILES_PROFILE_ID_RULES: "CONTROL_D_POST_PROFILES_PROFILE_ID_RULES",
    /**
     * Tool to create custom rules within a specific folder for a profile. Use after confirming the profile and folder IDs and preparing rule definitions.
     */
    POST_PROFILES_PROFILE_ID_RULES_FOLDER_ID: "CONTROL_D_POST_PROFILES_PROFILE_ID_RULES_FOLDER_ID",
    /**
     * Tool to create a new schedule within a specific profile. Use after gathering profile_id and schedule details.
     */
    POST_PROFILES_PROFILE_ID_SCHEDULES: "CONTROL_D_POST_PROFILES_PROFILE_ID_SCHEDULES",
    /**
     * Tool to modify an existing device. Use when you need to update device settings by providing its ID.
     */
    PUT_DEVICES_DEVICE_ID: "CONTROL_D_PUT_DEVICES_DEVICE_ID",
    /**
     * Tool to modify organization settings and limits. Use when you need to change organization limits such as max_users or max_routers. Changing these fields is a billable event.
     */
    PUT_ORGANIZATIONS: "CONTROL_D_PUT_ORGANIZATIONS",
    /**
     * Tool to modify an existing profile by ID. Use when you need to update profile fields after confirming the current profile. Example: Update profile '123abc' with new name and settings.
     */
    PUT_PROFILES_PROFILE_ID: "CONTROL_D_PUT_PROFILES_PROFILE_ID",
    /**
     * Tool to bulk update filters on a specific profile. Use when you need to enable or disable multiple filters at once. Provide a list of filter IDs with desired states.
     */
    PUT_PROFILES_PROFILE_ID_FILTERS: "CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS",
    /**
     * Tool to update external filters for a specific profile. Use when toggling third-party filters after listing them.
     */
    PUT_PROFILES_PROFILE_ID_FILTERS_EXTERNAL: "CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_EXTERNAL",
    /**
     * Tool to modify the enabled state of a specific filter on a profile. Use when you need to enable or disable a particular filter.
     */
    PUT_PROFILES_PROFILE_ID_FILTERS_FILTER_FILTER: "CONTROL_D_PUT_PROFILES_PROFILE_ID_FILTERS_FILTER_FILTER",
    /**
     * Tool to modify existing custom rule(s) for a profile. Use when you need to update rule details such as name, description, severity, or enabled status. Ensure to include the rule IDs to modify.
     */
    PUT_PROFILES_PROFILE_ID_RULES: "CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES",
    /**
     * Tool to update an existing custom rule by its ID. Use when modifying details like name, description, severity, or enabled status for a specific rule.
     */
    PUT_PROFILES_PROFILE_ID_RULES_RULE_ID: "CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_RULE_ID",
    /**
     * Tool to move a specific custom rule into a different folder. Use after confirming profile_id, rule_id, and folder_id.
     */
    PUT_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID: "CONTROL_D_PUT_PROFILES_PROFILE_ID_RULES_RULE_ID_FOLDER_ID",
    /**
     * Tool to update a specific schedule within a profile. Use when you need to modify schedule details after confirming profile_id and schedule_id.
     */
    PUT_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID: "CONTROL_D_PUT_PROFILES_PROFILE_ID_SCHEDULES_SCHEDULE_ID",
    /**
     * Tool to modify a specific service rule for a profile. Use when you need to update blocking, bypassing, spoofing, or proxy-redirect settings after reviewing existing rules.
     */
    PUT_PROFILES_PROFILE_ID_SERVICES_SERVICE: "CONTROL_D_PUT_PROFILES_PROFILE_ID_SERVICES_SERVICE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CONTROL_D".
 */
export type CONTROL_D_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CONTROL_D".
 */
export type CONTROL_D_TRIGGER_EVENTS = {}
