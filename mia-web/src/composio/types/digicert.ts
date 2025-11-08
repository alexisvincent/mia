// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DIGICERT's DIGICERT_CHECK_PERMISSION tool input.
 */
type DIGICERT_CHECK_PERMISSION_INPUT = {
  /**
   * Permission
   * @description The specific permission to verify. e.g. 'cert:create', 'cert:reissue'. See https://dev.digicert.com/en/certcentral-apis/glossary.html#permissions
   */
  permission?: string;
};

/**
 * Type of DIGICERT's DIGICERT_CHECK_PERMISSION tool output.
 */
type DIGICERT_CHECK_PERMISSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authorized
       * @description True if the user is allowed to perform this action; false otherwise
       */
      authorized: boolean;
      /**
       * Permission
       * @description The exact permission string that was checked
       */
      permission: string;
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
 * Type of DIGICERT's DIGICERT_CREATE_API_KEY tool input.
 */
type DIGICERT_CREATE_API_KEY_INPUT = {
  /**
   * Name
   * @description Name of the API key. Choose a meaningful label.
   */
  name?: string;
  /**
   * Restricted To Role Id
   * @description Optional API key role ID to limit permissions. Allowed values: 0, 100, 101, 102, 103.
   * @default null
   * @enum {integer|null}
   */
  restricted_to_role_id: 0 | 100 | 101 | 102 | 103 | null;
  /**
   * User Id
   * @description DigiCert user ID for whom to generate the API key.
   */
  user_id?: number;
};

/**
 * Type of DIGICERT's DIGICERT_CREATE_API_KEY tool output.
 */
type DIGICERT_CREATE_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Key
       * @description Randomly generated API key. Shown only once; store securely.
       */
      api_key: string;
      /**
       * Id
       * @description Unique identifier for the created API key.
       */
      id: number;
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
 * Type of DIGICERT's DIGICERT_LIST_API_ACCESS_ROLES tool input.
 */
type DIGICERT_LIST_API_ACCESS_ROLES_INPUT = object;

/**
 * Type of DIGICERT's DIGICERT_LIST_API_ACCESS_ROLES tool output.
 */
type DIGICERT_LIST_API_ACCESS_ROLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Roles
       * @description List of API key access roles
       */
      access_roles: {
          /**
           * Id
           * @description API key access role ID
           */
          id: number;
          /**
           * Name
           * @description API key access role name
           */
          name: string;
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
 * Type of DIGICERT's DIGICERT_LIST_INTERMEDIATE_CERTIFICATES tool input.
 */
type DIGICERT_LIST_INTERMEDIATE_CERTIFICATES_INPUT = object;

/**
 * Type of DIGICERT's DIGICERT_LIST_INTERMEDIATE_CERTIFICATES tool output.
 */
type DIGICERT_LIST_INTERMEDIATE_CERTIFICATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Intermediates
       * @description Array of intermediate certificate objects
       */
      intermediates: {
          /**
           * Id
           * @description Unique identifier for the intermediate certificate
           */
          id: string;
          /**
           * Is Private
           * @description Indicates if the certificate is private
           */
          is_private: boolean;
          /**
           * Is Root
           * @description Indicates if the certificate is a root certificate
           */
          is_root: boolean;
          /**
           * Issuer Common Name
           * @description Common name of the certificate issuer
           */
          issuer_common_name: string;
          /**
           * Pem
           * @description PEM-encoded certificate text
           */
          pem: string;
          /**
           * Serial Number
           * @description Serial number of the certificate
           */
          serial_number: string;
          /**
           * Signature Hash
           * @description Signature hash algorithm used
           */
          signature_hash: string;
          /**
           * Status
           * @description Status of the certificate (e.g., approved)
           */
          status: string;
          /**
           * Subject Common Name
           * @description Common name of the certificate subject
           */
          subject_common_name: string;
          /**
           * Subject Org Name
           * @description Organization name of the certificate subject
           */
          subject_org_name: string;
          /**
           * Thumbprint
           * @description Certificate thumbprint (SHA-1)
           */
          thumbprint: string;
          /**
           * Valid To
           * @description Expiration date in ISO 8601 UTC format
           */
          valid_to: string;
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
 * Type of DIGICERT's DIGICERT_LIST_USERS tool input.
 */
type DIGICERT_LIST_USERS_INPUT = {
  /**
   * Include Details
   * @description Whether to include additional details for each user.
   * @default null
   */
  include_details: boolean | null;
  /**
   * Limit
   * @description Maximum number of users to return (default: 100).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Starting point for the list of users returned.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of DIGICERT's DIGICERT_LIST_USERS tool output.
 */
type DIGICERT_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Total
       * @description Total number of users found.
       */
      total: number;
      /**
       * Users
       * @description List of CertCentral users.
       */
      users: {
          /**
           * Email
           * @description Email address of the user.
           */
          email: string;
          /**
           * First Name
           * @description First name of the user.
           */
          first_name: string;
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: number;
          /**
           * Job Title
           * @description Job title of the user.
           * @default null
           */
          job_title: string | null;
          /**
           * Last Name
           * @description Last name of the user.
           */
          last_name: string;
          /**
           * Organization
           * @description Organization details for a user.
           * @default null
           */
          organization: {
              /**
               * Id
               * @description Organization ID associated with the user.
               */
              id: number;
              /**
               * Name
               * @description Name of the organization.
               */
              name: string;
          } | null;
          /**
           * Status
           * @description Status of the user (e.g., active, inactive).
           */
          status: string;
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
 * Type of DIGICERT's DIGICERT_UPDATE_REPORT tool input.
 */
type DIGICERT_UPDATE_REPORT_INPUT = {
  /**
   * Display Name
   * @description New display name for the report.
   */
  display_name?: string;
  /**
   * Format
   * @description Output format for generated reports. Only one format.
   */
  format?: string[];
  /**
   * Notification Emails
   * @description List of users to notify when report is generated.
   * @default null
   */
  notification_emails: {
      /**
       * Email
       * Format: email
       * @description Email address of the notification recipient.
       */
      email: unknown;
      /**
       * First Name
       * @description First name of the notification recipient.
       */
      first_name: string;
      /**
       * Last Name
       * @description Last name of the notification recipient.
       */
      last_name: string;
      /**
       * User Id
       * @description User ID for report notification.
       */
      user_id: number;
  }[] | null;
  /**
   * Report Identifier
   * @description UUID of the report to update.
   */
  report_identifier?: string;
  /**
   * Report Metadata
   * @description Updated metadata defining report type, columns, filters, and sources.
   */
  report_metadata?: {
      /**
       * Columns
       * @description Ordered list of columns to include in the report.
       */
      columns: {
          /**
           * Identifier
           * @description Column identifier to include in the report.
           */
          identifier: string;
      }[];
      /**
       * Filters
       * @description Optional filters to apply to the report data.
       * @default null
       */
      filters: {
          /**
           * Column Identifier
           * @description Column to filter by.
           */
          column_identifier: string;
          /**
           * Filter Identifier
           * @description Operator defining how to filter a column.
           */
          filter_identifier: string;
          /**
           * Values
           * @description List of values to filter by.
           */
          values: string[];
      }[] | null;
      /**
       * Report Type
       * @description Identifier for the report type (e.g., orders, domains).
       */
      report_type: string;
      /**
       * Sources
       * @description Optional source filters for divisions or sub-accounts.
       * @default null
       */
      sources: {
          /**
           * Division Filter Type
           * @description Divisions to include in the report.
           * @default null
           * @enum {string|null}
           */
          division_filter_type: "INCLUDE_ALL_DIVISIONS" | "INCLUDE_TOP_DIVISION" | "CHOOSE_DIVISIONS" | "EXCLUDE_ALL_DIVISIONS" | null;
          /**
           * Divisions
           * @description List of division IDs when division_filter_type is CHOOSE_DIVISIONS.
           * @default null
           */
          divisions: number[] | null;
          /**
           * Sub Account Filter Type
           * @description Sub-accounts to include in the report.
           * @default null
           * @enum {string|null}
           */
          sub_account_filter_type: "INCLUDE_ALL_SUB_ACCOUNTS" | "EXCLUDE_ALL_SUB_ACCOUNTS" | "CHOOSE_SUB_ACCOUNTS" | null;
          /**
           * Sub Accounts
           * @description List of sub-account IDs when sub_account_filter_type is CHOOSE_SUB_ACCOUNTS.
           * @default null
           */
          sub_accounts: number[] | null;
      } | null;
  };
  /**
   * Schedule
   * @description Updated schedule settings for the report.
   */
  schedule?: {
      /**
       * Frequency
       * @description Frequency of report creation.
       * @enum {string}
       */
      frequency: "ON_DEMAND" | "WEEKLY" | "MONTHLY";
      /**
       * Repeat Every
       * @description Number of weeks or months between report runs (1-2 for WEEKLY; 1-3 for MONTHLY).
       * @default null
       */
      repeat_every: number | null;
      /**
       * Repeat On
       * @description For MONTHLY frequency, whether to initiate runs on a specific day name or date.
       * @default null
       * @enum {string|null}
       */
      repeat_on: "DAY_OF_THE_MONTH" | "DATE_OF_THE_MONTH" | null;
      /**
       * RepeatOnDate
       * @description Object defining the specific date for monthly scheduling. Required if repeat_on is DATE_OF_THE_MONTH.
       * @default null
       */
      repeat_on_date: {
          /**
           * Date
           * @description Day of the month when a new report run is initiated (1-28).
           * @default null
           */
          date: number | null;
          /**
           * Last Day Of The Month
           * @description Whether to initiate report run on the last day of the month.
           * @default null
           */
          last_day_of_the_month: boolean | null;
      } | null;
      /**
       * Run Until
       * Format: date
       * @description Date to stop generating reports (YYYY-MM-DD).
       * @default null
       */
      run_until: unknown;
      /**
       * Weekday Frequency
       * @description Week of the month to initiate a report run. Required for MONTHLY frequency when scheduling by weekday.
       * @default null
       * @enum {string|null}
       */
      weekday_frequency: "FIRST" | "SECOND" | "THIRD" | "FOURTH" | "LAST" | null;
      /**
       * Weekday To Run
       * @description Day of the week to initiate a report run. Required if frequency is WEEKLY.
       * @default null
       * @enum {string|null}
       */
      weekday_to_run: "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | null;
  };
};

/**
 * Type of DIGICERT's DIGICERT_UPDATE_REPORT tool output.
 */
type DIGICERT_UPDATE_REPORT_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "DIGICERT".
 */
export type DIGICERT_TOOL_INPUTS = {
  CHECK_PERMISSION: DIGICERT_CHECK_PERMISSION_INPUT
  CREATE_API_KEY: DIGICERT_CREATE_API_KEY_INPUT
  LIST_API_ACCESS_ROLES: DIGICERT_LIST_API_ACCESS_ROLES_INPUT
  LIST_INTERMEDIATE_CERTIFICATES: DIGICERT_LIST_INTERMEDIATE_CERTIFICATES_INPUT
  LIST_USERS: DIGICERT_LIST_USERS_INPUT
  UPDATE_REPORT: DIGICERT_UPDATE_REPORT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DIGICERT".
 */
export type DIGICERT_TOOL_OUTPUTS = {
  CHECK_PERMISSION: DIGICERT_CHECK_PERMISSION_OUTPUT
  CREATE_API_KEY: DIGICERT_CREATE_API_KEY_OUTPUT
  LIST_API_ACCESS_ROLES: DIGICERT_LIST_API_ACCESS_ROLES_OUTPUT
  LIST_INTERMEDIATE_CERTIFICATES: DIGICERT_LIST_INTERMEDIATE_CERTIFICATES_OUTPUT
  LIST_USERS: DIGICERT_LIST_USERS_OUTPUT
  UPDATE_REPORT: DIGICERT_UPDATE_REPORT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DIGICERT toolkit.
 */
export const DIGICERT = {
  slug: "digicert",
  tools: {
    /**
     * Tool to check if a specific permission is available. use when validating that the authenticated user may perform an operation before attempting it.
     */
    CHECK_PERMISSION: "DIGICERT_CHECK_PERMISSION",
    /**
     * Tool to create a new api key with specified permissions. use when you have a valid digicert user id and need to generate a new key. note the api key appears only once; save it securely.
     */
    CREATE_API_KEY: "DIGICERT_CREATE_API_KEY",
    /**
     * Tool to retrieve a list of available api access roles. use after confirming authentication with an api key.
     */
    LIST_API_ACCESS_ROLES: "DIGICERT_LIST_API_ACCESS_ROLES",
    /**
     * Tool to retrieve a list of intermediate certificates. use when you need to list all intermediate certificates for your account. no input required.
     */
    LIST_INTERMEDIATE_CERTIFICATES: "DIGICERT_LIST_INTERMEDIATE_CERTIFICATES",
    /**
     * Tool to retrieve a list of certcentral account users. use when you need to audit or manage users with support for pagination and optional detail inclusion.
     */
    LIST_USERS: "DIGICERT_LIST_USERS",
    /**
     * Tool to update an existing report’s configuration. use when you need to modify the schedule, recipients, or format of a scheduled report.
     */
    UPDATE_REPORT: "DIGICERT_UPDATE_REPORT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DIGICERT".
 */
export type DIGICERT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DIGICERT".
 */
export type DIGICERT_TRIGGER_EVENTS = {}
