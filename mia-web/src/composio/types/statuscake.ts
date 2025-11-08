// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of STATUSCAKE's STATUSCAKE_DELETE_CONTACT_GROUP tool input.
 */
type STATUSCAKE_DELETE_CONTACT_GROUP_INPUT = {
  /**
   * Contact Group Id
   * @description The unique identifier of the contact group to delete
   */
  contact_group_id?: string;
};

/**
 * Type of STATUSCAKE's STATUSCAKE_DELETE_CONTACT_GROUP tool output.
 */
type STATUSCAKE_DELETE_CONTACT_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the contact group deletion was successful
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
 * Type of STATUSCAKE's STATUSCAKE_DELETE_TEST tool input.
 */
type STATUSCAKE_DELETE_TEST_INPUT = {
  /**
   * Test Id
   * @description The unique identifier of the test to delete.
   */
  test_id?: string;
};

/**
 * Type of STATUSCAKE's STATUSCAKE_DELETE_TEST tool output.
 */
type STATUSCAKE_DELETE_TEST_OUTPUT = {
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
 * Type of STATUSCAKE's STATUSCAKE_GET_ALL_CONTACT_GROUPS tool input.
 */
type STATUSCAKE_GET_ALL_CONTACT_GROUPS_INPUT = {
  /**
   * Limit
   * @description Maximum number of contact groups to return (1-500). Default is 100 if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination of results. Default is 1 if omitted.
   * @default null
   */
  page: number | null;
  /**
   * Search
   * @description Filter contact groups by name (case-insensitive partial match).
   * @default null
   */
  search: string | null;
};

/**
 * Type of STATUSCAKE's STATUSCAKE_GET_ALL_CONTACT_GROUPS tool output.
 */
type STATUSCAKE_GET_ALL_CONTACT_GROUPS_OUTPUT = {
  /**
   * Data
   * @description List of contact groups.
   */
  data?: {
      /**
       * Contact Group Id
       * @description Unique identifier of the contact group.
       */
      contact_group_id: string;
      /**
       * Emails
       * @description List of email addresses associated with this contact group.
       */
      emails: string[];
      /**
       * Integrations
       * @description Integration details for the contact group; structure varies by integration type.
       */
      integrations: {
          [key: string]: unknown;
      }[];
      /**
       * Name
       * @description Name of the contact group.
       */
      name: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Metadata
   * @description Pagination information.
   */
  metadata?: {
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of results returned per page.
       */
      per_page: number;
      /**
       * Total
       * @description Total number of contact groups.
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
 * Type of STATUSCAKE's STATUSCAKE_GET_ALL_LOCATIONS tool input.
 */
type STATUSCAKE_GET_ALL_LOCATIONS_INPUT = object;

/**
 * Type of STATUSCAKE's STATUSCAKE_GET_ALL_LOCATIONS tool output.
 */
type STATUSCAKE_GET_ALL_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description List of monitoring locations
   */
  data?: {
      /**
       * City
       * @description City name (nullable)
       * @default null
       */
      city: string | null;
      /**
       * Country Code
       * @description ISO country code
       */
      country_code: string;
      /**
       * Location Id
       * @description Location identifier
       */
      location_id: string;
      /**
       * Name
       * @description Location name
       */
      name: string;
      /**
       * Region
       * @description Geographic region name
       */
      region: string;
      /**
       * State
       * @description State or province (nullable)
       * @default null
       */
      state: string | null;
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
 * Type of STATUSCAKE's STATUSCAKE_GET_ALL_PAGESPEED_TESTS tool input.
 */
type STATUSCAKE_GET_ALL_PAGESPEED_TESTS_INPUT = {
  /**
   * Page
   * @description Page number of results to return (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of results per page.
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of STATUSCAKE's STATUSCAKE_GET_ALL_PAGESPEED_TESTS tool output.
 */
type STATUSCAKE_GET_ALL_PAGESPEED_TESTS_OUTPUT = {
  /**
   * Data
   * @description List of PageSpeed test objects.
   */
  data?: {
      /**
       * Check Rate
       * @description Frequency of tests, e.g., 'DAILY'.
       */
      check_rate: string;
      /**
       * Domain
       * @description Domain being tested.
       */
      domain: string;
      /**
       * Id
       * @description Unique test ID.
       */
      id: string;
      /**
       * Last Tested
       * @description ISO8601 datetime of the last test run.
       */
      last_tested: string;
      /**
       * Locale
       * @description Locale of PageSpeed run, e.g., 'en_US'.
       */
      locale: string;
      /**
       * Name
       * @description Name of the PageSpeed test.
       */
      name: string;
      /**
       * Strategy
       * @description Test strategy, 'mobile' or 'desktop'.
       */
      strategy: string;
      /**
       * Tags
       * @description Tags associated with the test.
       */
      tags: string[];
      /**
       * Urls
       * @description URLs tested by this PageSpeed test.
       */
      urls: string[];
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Metadata
   * @description Pagination metadata.
   */
  metadata?: {
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Page Count
       * @description Total number of pages available.
       */
      page_count: number;
      /**
       * Page Size
       * @description Number of items returned per page.
       */
      page_size: number;
      /**
       * Total
       * @description Total number of items across all pages.
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
 * Type of STATUSCAKE's STATUSCAKE_GET_ALL_TESTS tool input.
 */
type STATUSCAKE_GET_ALL_TESTS_INPUT = {
  /**
   * Limit
   * @description Number of results per page (1-100). Server default is 25.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number of results to return (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Tags
   * @description Comma-separated list of tags to filter tests by.
   * @default null
   */
  tags: string | null;
  /**
   * Uptime
   * @description Include uptime data if true.
   * @default null
   */
  uptime: boolean | null;
};

/**
 * Type of STATUSCAKE's STATUSCAKE_GET_ALL_TESTS tool output.
 */
type STATUSCAKE_GET_ALL_TESTS_OUTPUT = {
  /**
   * Data
   * @description List of test objects.
   */
  data?: ({
      /**
       * Id
       * @description Unique identifier for the test.
       */
      id: string;
      /**
       * Name
       * @description Name of the test.
       */
      name: string;
      /**
       * Status
       * @description Current status of the test.
       */
      status: string;
      /**
       * Tags
       * @description List of tags assigned to the test.
       */
      tags?: string[];
      /**
       * Type
       * @description Type of the test (e.g., HTTP, TCP).
       */
      type: string;
      /**
       * Website Url
       * @description URL that is monitored.
       */
      website_url: string;
  } & {
      [key: string]: unknown;
  })[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Metadata
   * @description Pagination metadata.
   */
  metadata?: {
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of items per page.
       */
      per_page: number;
      /**
       * Total Items
       * @description Total number of items across all pages.
       */
      total_items: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of STATUSCAKE's STATUSCAKE_GET_CONTACT_GROUP_DETAILS tool input.
 */
type STATUSCAKE_GET_CONTACT_GROUP_DETAILS_INPUT = {
  /**
   * Contact Group Id
   * @description The unique identifier for the contact group to retrieve.
   */
  contact_group_id?: string;
};

/**
 * Type of STATUSCAKE's STATUSCAKE_GET_CONTACT_GROUP_DETAILS tool output.
 */
type STATUSCAKE_GET_CONTACT_GROUP_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Group Id
       * @description Unique identifier for the contact group.
       */
      contact_group_id: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the contact group was created.
       */
      created_at: string;
      /**
       * Emails
       * @description List of email addresses in the contact group.
       */
      emails: string[];
      /**
       * Group Name
       * @description Name of the contact group.
       */
      group_name: string;
      /**
       * Integrations
       * @description List of integrations associated with the contact group.
       */
      integrations: {
          [key: string]: unknown;
      }[];
      /**
       * Push
       * @description List of push notification recipients for the contact group.
       */
      push: {
          [key: string]: unknown;
      }[];
      /**
       * Sms
       * @description List of SMS recipients in the contact group.
       */
      sms: string[];
      /**
       * Updated At
       * @description ISO 8601 timestamp when the contact group was last updated.
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
 * Type of STATUSCAKE's STATUSCAKE_GET_HEARTBEAT_CHECKS tool input.
 */
type STATUSCAKE_GET_HEARTBEAT_CHECKS_INPUT = {
  /**
   * Page
   * @description Page number of results to return (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (1-100).
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of STATUSCAKE's STATUSCAKE_GET_HEARTBEAT_CHECKS tool output.
 */
type STATUSCAKE_GET_HEARTBEAT_CHECKS_OUTPUT = {
  /**
   * Data
   * @description List of heartbeat check objects.
   */
  data?: {
      /**
       * Contact Groups
       * @description List of contact group IDs to notify on missed heartbeats.
       */
      contact_groups?: string[];
      /**
       * Grace
       * @description Grace period in seconds before alerting.
       */
      grace: number;
      /**
       * Group Id
       * @description Numeric group ID if this check is part of a group.
       * @default null
       */
      group_id: number | null;
      /**
       * Hostname
       * @description Monitored hostname.
       */
      hostname: string;
      /**
       * Id
       * @description Unique identifier for the heartbeat check.
       */
      id: string;
      /**
       * Last Ping
       * @description ISO timestamp of the last received heartbeat ping.
       * @default null
       */
      last_ping: string | null;
      /**
       * Name
       * @description Name of the heartbeat check.
       */
      name: string;
      /**
       * Paused
       * @description Whether the heartbeat check is currently paused.
       */
      paused: boolean;
      /**
       * Period
       * @description Interval in seconds between expected heartbeats.
       */
      period: number;
      /**
       * Pos
       * @description Position used for ordering in the StatusCake UI.
       */
      pos: number;
      /**
       * Tags
       * @description List of tags assigned to this check.
       */
      tags?: string[];
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Metadata
   * @description Pagination metadata.
   */
  metadata?: {
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of items per page.
       */
      per_page: number;
      /**
       * Total Items
       * @description Total number of items across all pages.
       */
      total_items: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of STATUSCAKE's STATUSCAKE_GET_SSL_CHECKS tool input.
 */
type STATUSCAKE_GET_SSL_CHECKS_INPUT = {
  /**
   * Limit
   * @description Maximum number of SSL checks to return (1-100). Default is 100 if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Offset for pagination of results (0-based).
   * @default null
   */
  offset: number | null;
  /**
   * Search
   * @description Filter SSL checks by domain name (case-insensitive partial match).
   * @default null
   */
  search: string | null;
  /**
   * Status
   * @description Filter SSL checks by status. Must be one of valid, warning, expired, tba, pending.
   * @default null
   * @enum {string|null}
   */
  status: "valid" | "warning" | "expired" | "tba" | "pending" | null;
  /**
   * Tags
   * @description Comma-separated list of tags to filter SSL checks by.
   * @default null
   */
  tags: string | null;
};

/**
 * Type of STATUSCAKE's STATUSCAKE_GET_SSL_CHECKS tool output.
 */
type STATUSCAKE_GET_SSL_CHECKS_OUTPUT = {
  /**
   * Data
   * @description List of SSL check objects.
   */
  data?: {
      /**
       * Check Rate
       * @description Frequency of checks in minutes.
       */
      check_rate: number;
      /**
       * Contact Groups
       * @description List of linked contact group IDs.
       */
      contact_groups: number[];
      /**
       * Created At
       * @description Timestamp when the SSL check was created (ISO 8601).
       */
      created_at: string;
      /**
       * Domain
       * @description Domain name being tested.
       */
      domain: string;
      /**
       * Id
       * @description Unique identifier for the SSL check.
       */
      id: number;
      /**
       * Status
       * @description Current SSL status (valid, warning, expired, tba, pending).
       */
      status: string;
      /**
       * Tags
       * @description List of tags associated with the SSL check.
       */
      tags: string[];
      /**
       * Updated At
       * @description Timestamp when the SSL check was last updated (ISO 8601).
       */
      updated_at: string;
      /**
       * Valid Until
       * @description Expiry date of the certificate (ISO 8601).
       */
      valid_until: string;
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
 * Type of STATUSCAKE's STATUSCAKE_GET_SSL_CHECK_DETAILS tool input.
 */
type STATUSCAKE_GET_SSL_CHECK_DETAILS_INPUT = {
  /**
   * Test Id
   * @description The unique identifier for the SSL test to retrieve.
   */
  test_id?: string;
};

/**
 * Type of STATUSCAKE's STATUSCAKE_GET_SSL_CHECK_DETAILS tool output.
 */
type STATUSCAKE_GET_SSL_CHECK_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Algorithm
       * @description SSL encryption algorithm.
       */
      algorithm: string;
      /**
       * Checkrate
       * @description Frequency in minutes between checks.
       */
      checkrate: number;
      /**
       * Contact Groups
       * @description List of contact group IDs associated with the SSL test.
       */
      contact_groups?: string[];
      /**
       * Domain
       * @description Domain name for the SSL test.
       */
      domain: string;
      /**
       * Enabled
       * @description Whether the SSL test is enabled.
       */
      enabled: boolean;
      /**
       * Expires
       * @description ISO 8601 timestamp when the SSL certificate expires.
       */
      expires: string;
      /**
       * Fingerprint
       * @description SSL certificate fingerprint.
       */
      fingerprint: string;
      /**
       * Id
       * @description Unique identifier of the SSL test.
       */
      id: number;
      /**
       * Issuer
       * @description SSL certificate issuer.
       */
      issuer: string;
      /**
       * Last Reminder
       * @description ISO 8601 timestamp of the last reminder sent.
       */
      last_reminder: string;
      /**
       * Next Check
       * @description ISO 8601 timestamp of the next scheduled check.
       */
      next_check: string;
      /**
       * Valid
       * @description Whether the SSL certificate is currently valid.
       */
      valid: boolean;
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
 * Type of STATUSCAKE's STATUSCAKE_UPDATE_CONTACT_GROUP tool input.
 */
type STATUSCAKE_UPDATE_CONTACT_GROUP_INPUT = {
  /**
   * Contact Group Id
   * @description ID of the contact group to update
   */
  contact_group_id?: string;
  /**
   * Emails
   * @description List of email addresses for notifications
   * @default null
   */
  emails: string[] | null;
  /**
   * Integration Ids
   * @description List of integration IDs to associate with the group
   * @default null
   */
  integration_ids: string[] | null;
  /**
   * Name
   * @description New name for the contact group
   */
  name?: string;
  /**
   * Push Notifications
   * @description Whether push notifications are enabled
   * @default null
   */
  push_notifications: boolean | null;
  /**
   * Sms
   * @description List of phone numbers for SMS notifications
   * @default null
   */
  sms: string[] | null;
  /**
   * Webhook Urls
   * @description List of webhook URLs for HTTP notifications
   * @default null
   */
  webhook_urls: string[] | null;
};

/**
 * Type of STATUSCAKE's STATUSCAKE_UPDATE_CONTACT_GROUP tool output.
 */
type STATUSCAKE_UPDATE_CONTACT_GROUP_OUTPUT = {
  /**
   * Data
   * @description Updated contact group details
   */
  data?: {
      /**
       * Contact Group Id
       * @description ID of the contact group
       */
      contact_group_id: string;
      /**
       * Emails
       * @description Email addresses associated with the group
       */
      emails: string[];
      /**
       * Integration Ids
       * @description Integration IDs associated with the group
       */
      integration_ids: string[];
      /**
       * Name
       * @description Name of the contact group
       */
      name: string;
      /**
       * Push Notifications
       * @description Whether push notifications are enabled
       */
      push_notifications: boolean;
      /**
       * Sms
       * @description SMS numbers for notifications
       */
      sms: string[];
      /**
       * Webhook Urls
       * @description Webhook URLs for HTTP notifications
       */
      webhook_urls: string[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Metadata
   * @description Additional metadata about the response
   */
  metadata?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "STATUSCAKE".
 */
export type STATUSCAKE_TOOL_INPUTS = {
  DELETE_CONTACT_GROUP: STATUSCAKE_DELETE_CONTACT_GROUP_INPUT
  DELETE_TEST: STATUSCAKE_DELETE_TEST_INPUT
  GET_ALL_CONTACT_GROUPS: STATUSCAKE_GET_ALL_CONTACT_GROUPS_INPUT
  GET_ALL_LOCATIONS: STATUSCAKE_GET_ALL_LOCATIONS_INPUT
  GET_ALL_PAGESPEED_TESTS: STATUSCAKE_GET_ALL_PAGESPEED_TESTS_INPUT
  GET_ALL_TESTS: STATUSCAKE_GET_ALL_TESTS_INPUT
  GET_CONTACT_GROUP_DETAILS: STATUSCAKE_GET_CONTACT_GROUP_DETAILS_INPUT
  GET_HEARTBEAT_CHECKS: STATUSCAKE_GET_HEARTBEAT_CHECKS_INPUT
  GET_SSL_CHECKS: STATUSCAKE_GET_SSL_CHECKS_INPUT
  GET_SSL_CHECK_DETAILS: STATUSCAKE_GET_SSL_CHECK_DETAILS_INPUT
  UPDATE_CONTACT_GROUP: STATUSCAKE_UPDATE_CONTACT_GROUP_INPUT
}

/**
 * Type map of all available tool input types for toolkit "STATUSCAKE".
 */
export type STATUSCAKE_TOOL_OUTPUTS = {
  DELETE_CONTACT_GROUP: STATUSCAKE_DELETE_CONTACT_GROUP_OUTPUT
  DELETE_TEST: STATUSCAKE_DELETE_TEST_OUTPUT
  GET_ALL_CONTACT_GROUPS: STATUSCAKE_GET_ALL_CONTACT_GROUPS_OUTPUT
  GET_ALL_LOCATIONS: STATUSCAKE_GET_ALL_LOCATIONS_OUTPUT
  GET_ALL_PAGESPEED_TESTS: STATUSCAKE_GET_ALL_PAGESPEED_TESTS_OUTPUT
  GET_ALL_TESTS: STATUSCAKE_GET_ALL_TESTS_OUTPUT
  GET_CONTACT_GROUP_DETAILS: STATUSCAKE_GET_CONTACT_GROUP_DETAILS_OUTPUT
  GET_HEARTBEAT_CHECKS: STATUSCAKE_GET_HEARTBEAT_CHECKS_OUTPUT
  GET_SSL_CHECKS: STATUSCAKE_GET_SSL_CHECKS_OUTPUT
  GET_SSL_CHECK_DETAILS: STATUSCAKE_GET_SSL_CHECK_DETAILS_OUTPUT
  UPDATE_CONTACT_GROUP: STATUSCAKE_UPDATE_CONTACT_GROUP_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's STATUSCAKE toolkit.
 */
export const STATUSCAKE = {
  slug: "statuscake",
  tools: {
    /**
     * Tool to delete a contact group. use when you need to remove an existing contact group by its id after confirming its existence.
     */
    DELETE_CONTACT_GROUP: "STATUSCAKE_DELETE_CONTACT_GROUP",
    /**
     * Tool to delete a statuscake test. use when you need to remove a test by its id after it's no longer needed.
     */
    DELETE_TEST: "STATUSCAKE_DELETE_TEST",
    /**
     * Tool to retrieve all contact groups. use when you need to list existing contact groups in statuscake after authenticating.
     */
    GET_ALL_CONTACT_GROUPS: "STATUSCAKE_GET_ALL_CONTACT_GROUPS",
    /**
     * Tool to retrieve a list of all monitoring locations. use when you need to display or choose from available statuscake locations.
     */
    GET_ALL_LOCATIONS: "STATUSCAKE_GET_ALL_LOCATIONS",
    /**
     * Tool to retrieve all pagespeed tests. use when you need to list existing pagespeed performance tests in statuscake after authenticating.
     */
    GET_ALL_PAGESPEED_TESTS: "STATUSCAKE_GET_ALL_PAGESPEED_TESTS",
    /**
     * Tool to retrieve a list of all tests. use when you need to list your monitoring tests in statuscake.
     */
    GET_ALL_TESTS: "STATUSCAKE_GET_ALL_TESTS",
    /**
     * Tool to retrieve details of a specific contact group. use when you need group metadata by providing its id. example: "get details for contact group 12345".
     */
    GET_CONTACT_GROUP_DETAILS: "STATUSCAKE_GET_CONTACT_GROUP_DETAILS",
    /**
     * Tool to list heartbeat checks. use when you need to retrieve all heartbeat monitoring tests for your account.
     */
    GET_HEARTBEAT_CHECKS: "STATUSCAKE_GET_HEARTBEAT_CHECKS",
    /**
     * Tool to retrieve a list of ssl checks. use when you need to list all ssl tests for your account.
     */
    GET_SSL_CHECKS: "STATUSCAKE_GET_SSL_CHECKS",
    /**
     * Tool to retrieve details of a specific ssl check. use when you need configuration and status of an ssl test by providing its id. example: "get ssl check details for 123".
     */
    GET_SSL_CHECK_DETAILS: "STATUSCAKE_GET_SSL_CHECK_DETAILS",
    /**
     * Tool to update an existing contact group. use when you have the contact group id and want to change its configuration.
     */
    UPDATE_CONTACT_GROUP: "STATUSCAKE_UPDATE_CONTACT_GROUP",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "STATUSCAKE".
 */
export type STATUSCAKE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "STATUSCAKE".
 */
export type STATUSCAKE_TRIGGER_EVENTS = {}
