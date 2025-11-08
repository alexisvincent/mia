// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ABUSELPDB's ABUSELPDB_BLACKLIST tool input.
 */
type ABUSELPDB_BLACKLIST_INPUT = {
  /**
   * Confidence Minimum
   * @description Minimum abuse confidence score for results. Must be between 25 and 100. Subscriber feature.
   * @default null
   */
  confidenceMinimum: number | null;
  /**
   * Except Countries
   * @description Comma-separated list of ISO 3166-1 alpha-2 country codes to exclude. Subscriber feature.
   * @default null
   */
  exceptCountries: unknown;
  /**
   * Ip Version
   * @description IP version to filter by: 4 or 6.
   * @default null
   * @enum {integer|null}
   */
  ipVersion: 4 | 6 | null;
  /**
   * Limit
   * @description Maximum number of IP addresses to return. Will be truncated to subscription's hard limit.
   * @default null
   */
  limit: number | null;
  /**
   * Only Countries
   * @description Comma-separated list of ISO 3166-1 alpha-2 country codes to include. Subscriber feature.
   * @default null
   */
  onlyCountries: unknown;
  /**
   * Plaintext
   * @description Return results as newline-separated plaintext if true.
   * @default null
   */
  plaintext: boolean | null;
};

/**
 * Type of ABUSELPDB's ABUSELPDB_BLACKLIST tool output.
 */
type ABUSELPDB_BLACKLIST_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Abuse Confidence Score
       * @description Calculated abuse confidence score of the IP.
       */
      abuseConfidenceScore: number;
      /**
       * Country Code
       * @description Country code of the IP address if provided.
       * @default null
       */
      countryCode: string | null;
      /**
       * Ip Address
       * @description The reported IP address.
       */
      ipAddress: string;
      /**
       * Last Reported At
       * @description ISO 8601 timestamp of the last report.
       */
      lastReportedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** Meta */
  meta?: {
      /**
       * Generated At
       * @description ISO 8601 timestamp when the blacklist was generated.
       */
      generatedAt: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ABUSELPDB's ABUSELPDB_BULK_REPORT tool input.
 */
type ABUSELPDB_BULK_REPORT_INPUT = {
  /**
   * Csv
   * Format: binary
   * @description Binary content of the CSV file containing IP reports. CSV must include headers: IP, Categories, ReportDate, Comment.
   */
  csv?: string;
};

/**
 * Type of ABUSELPDB's ABUSELPDB_BULK_REPORT tool output.
 */
type ABUSELPDB_BULK_REPORT_OUTPUT = {
  /**
   * Data
   * @description Bulk report result containing counts and any invalid entries
   */
  data?: {
      /**
       * Invalid Reports
       * @description List of individual report errors with details
       */
      invalidReports: {
          /**
           * Error
           * @description Description of why the individual report failed
           */
          error: string;
          /**
           * Input
           * @description The input data that caused the failure for this report
           */
          input: string;
          /**
           * Row Number
           * @description CSV row number where the error occurred
           */
          rowNumber: number;
      }[];
      /**
       * Saved Reports
       * @description Number of reports successfully saved
       */
      savedReports: number;
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
 * Type of ABUSELPDB's ABUSELPDB_CHECK_BLOCK tool input.
 */
type ABUSELPDB_CHECK_BLOCK_INPUT = {
  /**
   * Max Age In Days
   * @description Days back to include reports (1–365). Defaults to 30 if omitted.
   * @default 30
   */
  maxAgeInDays: number | null;
  /**
   * Network
   * @description CIDR notation of the network to check; should be URL-encoded
   */
  network?: string;
};

/**
 * Type of ABUSELPDB's ABUSELPDB_CHECK_BLOCK tool output.
 */
type ABUSELPDB_CHECK_BLOCK_OUTPUT = {
  /**
   * Data
   * @description Check block response payload
   */
  data?: {
      /**
       * Address Space Desc
       * @description Description of the address space
       */
      addressSpaceDesc: string;
      /**
       * Max Address
       * @description Highest host IP in the block
       */
      maxAddress: string;
      /**
       * Min Address
       * @description Lowest host IP in the block
       */
      minAddress: string;
      /**
       * Netmask
       * @description Netmask of the network block
       */
      netmask: string;
      /**
       * Network Address
       * @description Network address of the CIDR block
       */
      networkAddress: string;
      /**
       * Num Possible Hosts
       * @description Total number of possible hosts in the network
       */
      numPossibleHosts: number;
      /**
       * Reported Address
       * @description List of reported IPs in the network block
       */
      reportedAddress: {
          /**
           * Abuse Confidence Score
           * @description Abuse confidence score for this IP address
           */
          abuseConfidenceScore: number;
          /**
           * Country Code
           * @description ISO 3166-1 alpha-2 country code, if available
           * @default null
           */
          countryCode: string | null;
          /**
           * Ip Address
           * @description IP address in the block
           */
          ipAddress: string;
          /**
           * Most Recent Report
           * Format: date-time
           * @description Timestamp of the most recent abuse report for this IP
           */
          mostRecentReport: string;
          /**
           * Num Reports
           * @description Number of abuse reports for this IP address
           */
          numReports: number;
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
 * Type of ABUSELPDB's ABUSELPDB_CHECK_IP tool input.
 */
type ABUSELPDB_CHECK_IP_INPUT = {
  /**
   * Ip Address
   * @description IPv4 address to check for abuse reports.
   */
  ipAddress?: string;
  /**
   * Max Age In Days
   * @description Look-back period for reports in days (default=30, max=365).
   * @default 30
   */
  maxAgeInDays: number | null;
  /**
   * Verbose
   * @description Include additional data such as hostnames and domains.
   * @default false
   */
  verbose: boolean | null;
};

/**
 * Type of ABUSELPDB's ABUSELPDB_CHECK_IP tool output.
 */
type ABUSELPDB_CHECK_IP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Abuse Confidence Score
       * @description Abuse confidence score (0–100).
       */
      abuseConfidenceScore: number;
      /**
       * Country Code
       * @description ISO 3166 country code.
       */
      countryCode: string;
      /**
       * Domain
       * @description Primary domain associated with the IP.
       */
      domain: string;
      /**
       * Hostnames
       * @description List of hostnames resolved to the IP.
       */
      hostnames: string[];
      /**
       * Ip Address
       * @description The IP address that was checked.
       */
      ipAddress: string;
      /**
       * Is Public
       * @description Whether the IP is a public address.
       */
      isPublic: boolean;
      /**
       * Is Whitelisted
       * @description Whether the IP is whitelisted.
       */
      isWhitelisted: boolean;
      /**
       * Isp
       * @description Name of the Internet Service Provider.
       */
      isp: string;
      /**
       * Last Reported At
       * @description Timestamp of the most recent report (ISO 8601).
       */
      lastReportedAt: string;
      /**
       * Num Distinct Users
       * @description Number of distinct users who reported the IP.
       */
      numDistinctUsers: number;
      /**
       * Total Reports
       * @description Total number of abuse reports for the IP.
       */
      totalReports: number;
      /**
       * Usage Type
       * @description Usage classification for the IP.
       */
      usageType: string;
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
 * Type of ABUSELPDB's ABUSELPDB_CLEAR_ADDRESS tool input.
 */
type ABUSELPDB_CLEAR_ADDRESS_INPUT = {
  /**
   * Ip Address
   * @description A valid IPv4 or IPv6 address whose reports will be removed.
   */
  ipAddress?: string;
};

/**
 * Type of ABUSELPDB's ABUSELPDB_CLEAR_ADDRESS tool output.
 */
type ABUSELPDB_CLEAR_ADDRESS_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Num Reports Deleted
       * @description Number of reports deleted from your account for the given IP.
       */
      numReportsDeleted: number;
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
 * Type of ABUSELPDB's ABUSELPDB_GET_REPORTS tool input.
 */
type ABUSELPDB_GET_REPORTS_INPUT = {
  /**
   * Date From
   * @description ISO8601-formatted start date for filtering reports
   * @default null
   */
  dateFrom: string | null;
  /**
   * Date To
   * @description ISO8601-formatted end date for filtering reports
   * @default null
   */
  dateTo: string | null;
  /**
   * Ip Address
   * @description IP address to retrieve reports for
   */
  ipAddress?: string;
  /**
   * Limit
   * @description Maximum number of reports to return per page
   * @default null
   */
  limit: number | null;
  /**
   * Max Age In Days
   * @description Filter reports no older than this number of days (1-365)
   * @default null
   */
  maxAgeInDays: number | null;
  /**
   * Offset
   * @description Number of reports to skip for pagination
   * @default null
   */
  offset: number | null;
  /**
   * Reporter Id
   * @description Filter reports by specific reporter ID
   * @default null
   */
  reporterId: number | null;
  /**
   * Status
   * @description Filter by report status (open or closed)
   * @default null
   */
  status: string | null;
};

/**
 * Type of ABUSELPDB's ABUSELPDB_GET_REPORTS tool output.
 */
type ABUSELPDB_GET_REPORTS_OUTPUT = {
  /**
   * Data
   * @description List of abuse report records
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the report was created (ISO8601 format)
       */
      createdAt: string;
      /**
       * Details
       * @description Content or comment of the report
       */
      details: string;
      /**
       * Id
       * @description Unique report identifier
       */
      id: number;
      /**
       * Reporter
       * @description Details about who reported the IP
       */
      reporter: {
          /**
           * Email
           * @description Email of the reporter
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique reporter identifier
           */
          id: number;
          /**
           * Name
           * @description Name of the reporter
           */
          name: string;
          /**
           * Organization
           * @description Organization of the reporter
           * @default null
           */
          organization: string | null;
      };
      /**
       * Status
       * @description Current status of the report (open or closed)
       */
      status: string;
      /**
       * Subject
       * @description Details about the subject of the report
       */
      subject: {
          /**
           * Id
           * @description Unique subject record identifier
           */
          id: number;
          /**
           * Ip Address
           * @description Reported IP address
           */
          ipAddress: string;
      };
      /**
       * Updated At
       * @description Timestamp when the report was last updated (ISO8601 format)
       */
      updatedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata for reports
   */
  meta?: {
      /**
       * Limit
       * @description Limit used for this response pagination
       */
      limit: number;
      /**
       * Offset
       * @description Offset used for this response pagination
       */
      offset: number;
      /**
       * Total
       * @description Total number of reports matching the query
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
 * Type map of all available tool input types for toolkit "ABUSELPDB".
 */
export type ABUSELPDB_TOOL_INPUTS = {
  BLACKLIST: ABUSELPDB_BLACKLIST_INPUT
  BULK_REPORT: ABUSELPDB_BULK_REPORT_INPUT
  CHECK_BLOCK: ABUSELPDB_CHECK_BLOCK_INPUT
  CHECK_IP: ABUSELPDB_CHECK_IP_INPUT
  CLEAR_ADDRESS: ABUSELPDB_CLEAR_ADDRESS_INPUT
  GET_REPORTS: ABUSELPDB_GET_REPORTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ABUSELPDB".
 */
export type ABUSELPDB_TOOL_OUTPUTS = {
  BLACKLIST: ABUSELPDB_BLACKLIST_OUTPUT
  BULK_REPORT: ABUSELPDB_BULK_REPORT_OUTPUT
  CHECK_BLOCK: ABUSELPDB_CHECK_BLOCK_OUTPUT
  CHECK_IP: ABUSELPDB_CHECK_IP_OUTPUT
  CLEAR_ADDRESS: ABUSELPDB_CLEAR_ADDRESS_OUTPUT
  GET_REPORTS: ABUSELPDB_GET_REPORTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ABUSELPDB toolkit.
 */
export const ABUSELPDB = {
  slug: "abuselpdb",
  tools: {
    /**
     * Tool to retrieve a list of the most reported ip addresses. use when building dynamic blocklists or threat intelligence feeds.
     */
    BLACKLIST: "ABUSELPDB_BLACKLIST",
    /**
     * Tool to submit multiple ip abuse reports in bulk. use when you need to report a large set of ips at once by uploading a csv file with required headers. csv must include columns: ip, categories, reportdate, comment.
     */
    BULK_REPORT: "ABUSELPDB_BULK_REPORT",
    /**
     * Tool to check the reputation of all ip addresses in a cidr range. use when you need aggregated abuse data for a network block.
     */
    CHECK_BLOCK: "ABUSELPDB_CHECK_BLOCK",
    /**
     * Tool to check the reputation of an ip address. use when you need to determine if an ip address has been reported for abusive activity within a specified look-back period. example: checkip(ipaddress='8.8.8.8', maxageindays=90).
     */
    CHECK_IP: "ABUSELPDB_CHECK_IP",
    /**
     * Tool to remove all reports associated with a specific ip address. use when you need to purge your own abuse records after verifying control of the ip.
     */
    CLEAR_ADDRESS: "ABUSELPDB_CLEAR_ADDRESS",
    /**
     * Tool to retrieve a list of abuse reports for a specific ip address. use when you need to fetch historic reports with optional filtering by status, date range, reporter, and pagination.
     */
    GET_REPORTS: "ABUSELPDB_GET_REPORTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ABUSELPDB".
 */
export type ABUSELPDB_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ABUSELPDB".
 */
export type ABUSELPDB_TRIGGER_EVENTS = {}
