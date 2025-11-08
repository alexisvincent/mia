// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_BIMI_RECORD tool input.
 */
type MX_TOOLBOX_LOOKUP_BIMI_RECORD_INPUT = {
  /**
   * Domain
   * @description The domain to perform BIMI lookup on, for example 'example.com'
   */
  domain?: string;
};

/**
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_BIMI_RECORD tool output.
 */
type MX_TOOLBOX_LOOKUP_BIMI_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Record address of the BIMI entry
       */
      Address: string;
      /**
       * Details
       * @description Additional details or diagnostic information
       */
      Details: string;
      /**
       * Lookup Type
       * @description Type of lookup performed
       */
      LookupType: string;
      /**
       * Name
       * @description Name of the BIMI record
       */
      Name: string;
      /**
       * Record Type
       * @description Type of DNS record retrieved
       */
      RecordType: string;
      /**
       * Ttl
       * @description Time to live for the BIMI record in seconds
       */
      TTL: number;
      /**
       * Value
       * @description BIMI record value/details
       */
      Value: string;
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
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_BLACKLIST tool input.
 */
type MX_TOOLBOX_LOOKUP_BLACKLIST_INPUT = {
  /**
   * Domain Or Ip
   * @description The domain name or IP address to lookup in blacklists
   */
  domain_or_ip?: string;
};

/**
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_BLACKLIST tool output.
 */
type MX_TOOLBOX_LOOKUP_BLACKLIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Blacklists
       * @description List of blacklist status entries
       */
      Blacklists: {
          /**
           * Detail
           * @description Additional details when listed
           * @default null
           */
          Detail: string | null;
          /**
           * List Name
           * @description Name of the blacklist
           */
          ListName: string;
          /**
           * Listed
           * @description True if the domain or IP is listed
           */
          Listed: boolean;
      }[];
      /**
       * Domain
       * @description The checked domain or IP address
       */
      Domain: string;
      /**
       * Error Message
       * @description Populated if an error occurred
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Success
       * @description Indicates whether the lookup succeeded
       */
      Success: boolean;
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
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_DKIM tool input.
 */
type MX_TOOLBOX_LOOKUP_DKIM_INPUT = {
  /**
   * Domain
   * @description Domain name to lookup DKIM records for (e.g., example.com, selector._domainkey.domain, or domain:selector)
   */
  domain?: string;
};

/**
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_DKIM tool output.
 */
type MX_TOOLBOX_LOOKUP_DKIM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error details if the lookup failed
       * @default null
       */
      Error: string | null;
      /**
       * Gobbledygook
       * @description Internal or debugging data
       * @default null
       */
      Gobbledygook: string | null;
      /**
       * Information
       * @description Diagnostic messages about the lookup
       */
      Information: string[];
      /**
       * Passed
       * @description Indicates whether the DKIM check passed
       */
      Passed: boolean;
      /**
       * Records
       * @description List of DKIM record entries
       */
      Records: ({
          /**
           * Host Name
           * @description Host name if provided in the response
           * @default null
           */
          HostName: string | null;
          /**
           * Ip Address
           * @description IP address if provided in the response
           * @default null
           */
          IPAddress: string | null;
          /**
           * Public Key
           * @description The DKIM public key
           */
          PublicKey: string;
          /**
           * Selector
           * @description DKIM selector used for the record
           */
          Selector: string;
          /**
           * Ttl
           * @description Time to live for the DKIM record
           * @default null
           */
          TTL: number | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_DMARC tool input.
 */
type MX_TOOLBOX_LOOKUP_DMARC_INPUT = {
  /**
   * Domain
   * @description The domain to lookup DMARC record for.
   */
  domain?: string;
};

/**
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_DMARC tool output.
 */
type MX_TOOLBOX_LOOKUP_DMARC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description The resolved record data/address.
       */
      address: string;
      /**
       * Errors
       * @description List of errors encountered during lookup, if any.
       */
      errors: string[];
      /**
       * Information
       * @description General information about the lookup
       */
      information: string;
      /**
       * Lookup Results
       * @description Detailed list of DNS lookup items.
       */
      lookup_results: {
          /**
           * Address
           * @description Record data/address (e.g., DMARC policy string).
           */
          address: string;
          /**
           * Name
           * @description Record name (e.g., "_dmarc.example.com").
           */
          name: string;
          /**
           * Ttl
           * @description Time to live for the DNS record in seconds.
           */
          ttl: number;
          /**
           * Type
           * @description DNS record type (e.g., "TXT").
           */
          type: string;
      }[];
      /**
       * Name
       * @description The queried record name (usually the domain or subdomain for DMARC).
       */
      name: string;
      /**
       * Passed
       * @description Indicates if the lookup passed without critical errors.
       */
      passed: boolean;
      /**
       * Ttl
       * @description Time to live for the record in seconds.
       */
      ttl: number;
      /**
       * Type
       * @description The DNS record type (e.g., TXT, DMARC).
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
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_DNS tool input.
 */
type MX_TOOLBOX_LOOKUP_DNS_INPUT = {
  /**
   * Domain
   * @description Domain to perform DNS lookup on, for example 'google.com'
   */
  domain?: string;
};

/**
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_DNS tool output.
 */
type MX_TOOLBOX_LOOKUP_DNS_OUTPUT = {
  /**
   * Data
   * @description List of DNS records returned for the domain
   */
  data?: {
      /**
       * Address
       * @description Record value, such as IP address or hostname
       */
      address: string;
      /**
       * Exchange
       * @description Mail exchanger for MX records, if applicable
       * @default null
       */
      exchange: string | null;
      /**
       * Name
       * @description Queried domain name
       */
      name: string;
      /**
       * Preference
       * @description Priority for MX records, if applicable
       * @default null
       */
      preference: number | null;
      /**
       * Ttl
       * @description Time to live for the DNS record in seconds
       */
      ttl: number;
      /**
       * Type
       * @description DNS record type, e.g., 'A', 'MX'
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Information
   * @description Additional DNS query information from the API
   */
  information?: string[];
  /**
   * Messages
   * @description Diagnostic or return messages from the API
   */
  messages?: string[];
  /**
   * Success
   * @description Indicates if lookup was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_HTTP tool input.
 */
type MX_TOOLBOX_LOOKUP_HTTP_INPUT = {
  /**
   * Domain
   * @description The domain to perform HTTP diagnostics on (e.g., 'example.com'). Do not include protocol or paths.
   */
  domain?: string;
};

/**
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_HTTP tool output.
 */
type MX_TOOLBOX_LOOKUP_HTTP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain
       * @description The queried domain name
       */
      Domain: string;
      /**
       * Error Message
       * @description Error message if the lookup failed
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Host Changed
       * @description Whether the host IP changed during resolution
       */
      HostChanged: boolean;
      /**
       * Ip Address
       * @description Resolved IP address for the domain
       */
      IPAddress: string;
      /**
       * Information
       * @description General summary information about the lookup
       */
      Information: string;
      /**
       * Is Success
       * @description True if the lookup completed successfully
       */
      IsSuccess: boolean;
      /**
       * Response Time
       * @description HTTP response time as reported by the API
       */
      ResponseTime: string;
      /**
       * Result Array
       * @description Array of detailed test results
       */
      ResultArray: {
          /**
           * Name
           * @description Name/description of the specific test performed
           */
          Name: string;
          /**
           * Result
           * @description Outcome or status of the test
           */
          Result: string;
          /**
           * Ttl
           * @description Time-to-live for DNS lookup, if applicable
           * @default null
           */
          TTL: string | null;
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
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_MTA_STS_RECORD tool input.
 */
type MX_TOOLBOX_LOOKUP_MTA_STS_RECORD_INPUT = {
  /**
   * Domain
   * @description The domain to perform MTA-STS lookup on.
   */
  domain?: string;
};

/**
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_MTA_STS_RECORD tool output.
 */
type MX_TOOLBOX_LOOKUP_MTA_STS_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Any error messages returned during the lookup.
       */
      Errors?: string[];
      /**
       * Information
       * @description Details or summary of the lookup result.
       */
      Information: string;
      /**
       * Passed
       * @description Indicates if the MTA-STS lookup test passed.
       */
      Passed: boolean;
      /**
       * Records
       * @description Detailed records found for MTA-STS.
       */
      Records?: {
          /**
           * Name
           * @description Record name.
           */
          Name: string;
          /**
           * Record Type
           * @description Type of the MTA-STS record.
           */
          RecordType: string;
          /**
           * Result
           * @description Outcome for this record check.
           */
          Result: string;
          /**
           * Ttl
           * @description Time to live for the record in seconds.
           */
          TTL: number;
          /**
           * Value
           * @description Record value.
           */
          Value: string;
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
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_MX tool input.
 */
type MX_TOOLBOX_LOOKUP_MX_INPUT = {
  /**
   * Domain
   * @description Domain name to lookup MX records for (e.g., example.com)
   */
  domain?: string;
};

/**
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_MX tool output.
 */
type MX_TOOLBOX_LOOKUP_MX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Records
       * @description List of MX records for the domain
       */
      records: {
          /**
           * Exchange
           * @description MX exchange host name
           */
          Exchange: string;
          /**
           * Host Name
           * @description Host name if provided in the response
           * @default null
           */
          HostName: string | null;
          /**
           * Ip Address
           * @description IP address if provided in the response
           * @default null
           */
          IPAddress: string | null;
          /**
           * Information
           * @description Human-readable summary of the MX lookup result
           */
          Information: string;
          /**
           * Preference
           * @description Priority value for the MX record
           */
          Preference: number;
          /**
           * Ttl
           * @description Time to live for the DNS record
           */
          TTL: number;
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
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_PING tool input.
 */
type MX_TOOLBOX_LOOKUP_PING_INPUT = {
  /**
   * Domain Or Ip
   * @description The domain name or IP address to ping (e.g., 'google.com' or '8.8.8.8').
   */
  domain_or_ip?: unknown;
};

/**
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_PING tool output.
 */
type MX_TOOLBOX_LOOKUP_PING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Code
       * @description Error code if the ping test failed
       * @default null
       */
      ErrorCode: number | null;
      /**
       * Error Message
       * @description Error message if the ping test failed
       * @default null
       */
      ErrorMessage: string | null;
      /**
       * Information
       * @description List of hop details including name, address, time, TTL, and buffer size
       */
      Information: {
          /**
           * Address
           * @description IP address of this hop
           */
          Address: string;
          /**
           * Buffer Size
           * @description Size of the ping packet in bytes
           */
          BufferSize: number;
          /**
           * Name
           * @description Hostname for this hop
           */
          Name: string;
          /**
           * Ttl
           * @description Time-to-live value
           */
          TTL: number;
          /**
           * Time
           * @description Round-trip time (e.g., '23 ms')
           */
          Time: string;
      }[];
      /**
       * Success
       * @description Indicates if the ping test completed successfully
       */
      Success: boolean;
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
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_SMTP tool input.
 */
type MX_TOOLBOX_LOOKUP_SMTP_INPUT = {
  /**
   * Domain
   * Format: hostname
   * @description Domain to perform SMTP test on (must be a valid hostname, e.g. 'google.com')
   */
  domain?: unknown;
};

/**
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_SMTP tool output.
 */
type MX_TOOLBOX_LOOKUP_SMTP_OUTPUT = {
  /**
   * Data
   * @description SMTP lookup results
   */
  Data?: {
      /**
       * Details
       * @description List of individual test step results
       */
      Details: {
          /**
           * Info
           * @description Additional info or error message
           * @default null
           */
          Info: string | null;
          /**
           * Result
           * @description Result of the test step
           */
          Result: string;
          /**
           * Test
           * @description Name of the SMTP test step
           */
          Test: string;
      }[];
      /**
       * Host
       * @description Target host for SMTP test
       */
      Host: string;
      /**
       * Test Result
       * @description Overall test result for the host
       */
      TestResult: string;
  }[];
  /**
   * Information
   * @description Additional information returned by the API
   * @default null
   */
  Information: string | null;
  /**
   * Message
   * @description Status message returned by the API
   */
  Message?: string;
  /**
   * Requirements
   * @description List of requirements if any
   * @default null
   */
  Requirements: string[] | null;
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
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_SPF tool input.
 */
type MX_TOOLBOX_LOOKUP_SPF_INPUT = {
  /**
   * Domain
   * @description The domain to perform the SPF lookup on.
   */
  domain?: string;
};

/**
 * Type of MX_TOOLBOX's MX_TOOLBOX_LOOKUP_SPF tool output.
 */
type MX_TOOLBOX_LOOKUP_SPF_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * LookupSpfError
       * @description Error information if the lookup failed.
       * @default null
       */
      error: {
          /**
           * Message
           * @description Error message if the lookup failed.
           */
          message: string;
      } | null;
      /**
       * Information
       * @description Lookup summary and results.
       */
      information: {
          /**
           * Additional Details
           * @description Additional lookup details, such as DNS specifics or error information.
           */
          additionalDetails: {
              /**
               * Name
               * @description Detail key name from the SPF lookup result.
               */
              name: string;
              /**
               * Value
               * @description Detail value corresponding to the name.
               */
              value: string;
          }[];
          /**
           * Exchange
           * @description The SPF record data or result.
           */
          exchange: string;
          /**
           * Lookup Type
           * @description Type of lookup performed. Should be 'SPF'.
           */
          lookupType: string;
          /**
           * Name
           * @description The domain looked up.
           */
          name: string;
          /**
           * Response Time
           * @description Time taken for the lookup, e.g., '55ms'.
           */
          responseTime: string;
      };
      /**
       * Success
       * @description Indicates if the lookup was successful.
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
 * Type of MX_TOOLBOX's MX_TOOLBOX_MONITOR_STATUS tool input.
 */
type MX_TOOLBOX_MONITOR_STATUS_INPUT = object;

/**
 * Type of MX_TOOLBOX's MX_TOOLBOX_MONITOR_STATUS tool output.
 */
type MX_TOOLBOX_MONITOR_STATUS_OUTPUT = {
  /**
   * Data
   * @description List of monitor status items
   */
  Data?: {
      /**
       * Last Checked
       * @description Timestamp of the last status check in ISO 8601 format
       */
      LastChecked: string;
      /**
       * Monitor Id
       * @description Unique identifier of the monitor
       */
      MonitorId: string;
      /**
       * Monitor Name
       * @description Name or label of the monitor
       */
      MonitorName: string;
      /**
       * Monitor Type
       * @description Type of monitor (e.g., HTTP, SMTP)
       */
      MonitorType: string;
      /**
       * Status
       * @description Current status of the monitor (e.g., Up, Down)
       */
      Status: string;
      /**
       * Status Details
       * @description Additional details or error information
       * @default null
       */
      StatusDetails: string | null;
  }[];
  /**
   * Error Message
   * @description Error message if the retrieval failed
   * @default null
   */
  ErrorMessage: string | null;
  /**
   * Success
   * @description Indicates if retrieval was successful
   */
  Success?: boolean;
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
 * Type of MX_TOOLBOX's MX_TOOLBOX_USAGE_CHECK tool input.
 */
type MX_TOOLBOX_USAGE_CHECK_INPUT = object;

/**
 * Type of MX_TOOLBOX's MX_TOOLBOX_USAGE_CHECK tool output.
 */
type MX_TOOLBOX_USAGE_CHECK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calls Remaining
       * @description Number of API calls left in the current cycle
       */
      CallsRemaining: number;
      /**
       * Calls Used
       * @description Number of API calls used so far
       */
      CallsUsed: number;
      /**
       * Reset Time Utc
       * @description UTC time when the quota will reset in ISO 8601 format
       */
      ResetTimeUtc: string;
      /**
       * Time Until Reset
       * @description Time until the usage count is reset, in HH:MM:SS format
       */
      TimeUntilReset: string;
      /**
       * Total Calls Allowed
       * @description Total number of API calls allowed
       */
      TotalCallsAllowed: number;
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
 * Type map of all available tool input types for toolkit "MX_TOOLBOX".
 */
export type MX_TOOLBOX_TOOL_INPUTS = {
  LOOKUP_BIMI_RECORD: MX_TOOLBOX_LOOKUP_BIMI_RECORD_INPUT
  LOOKUP_BLACKLIST: MX_TOOLBOX_LOOKUP_BLACKLIST_INPUT
  LOOKUP_DKIM: MX_TOOLBOX_LOOKUP_DKIM_INPUT
  LOOKUP_DMARC: MX_TOOLBOX_LOOKUP_DMARC_INPUT
  LOOKUP_DNS: MX_TOOLBOX_LOOKUP_DNS_INPUT
  LOOKUP_HTTP: MX_TOOLBOX_LOOKUP_HTTP_INPUT
  LOOKUP_MTA_STS_RECORD: MX_TOOLBOX_LOOKUP_MTA_STS_RECORD_INPUT
  LOOKUP_MX: MX_TOOLBOX_LOOKUP_MX_INPUT
  LOOKUP_PING: MX_TOOLBOX_LOOKUP_PING_INPUT
  LOOKUP_SMTP: MX_TOOLBOX_LOOKUP_SMTP_INPUT
  LOOKUP_SPF: MX_TOOLBOX_LOOKUP_SPF_INPUT
  MONITOR_STATUS: MX_TOOLBOX_MONITOR_STATUS_INPUT
  USAGE_CHECK: MX_TOOLBOX_USAGE_CHECK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MX_TOOLBOX".
 */
export type MX_TOOLBOX_TOOL_OUTPUTS = {
  LOOKUP_BIMI_RECORD: MX_TOOLBOX_LOOKUP_BIMI_RECORD_OUTPUT
  LOOKUP_BLACKLIST: MX_TOOLBOX_LOOKUP_BLACKLIST_OUTPUT
  LOOKUP_DKIM: MX_TOOLBOX_LOOKUP_DKIM_OUTPUT
  LOOKUP_DMARC: MX_TOOLBOX_LOOKUP_DMARC_OUTPUT
  LOOKUP_DNS: MX_TOOLBOX_LOOKUP_DNS_OUTPUT
  LOOKUP_HTTP: MX_TOOLBOX_LOOKUP_HTTP_OUTPUT
  LOOKUP_MTA_STS_RECORD: MX_TOOLBOX_LOOKUP_MTA_STS_RECORD_OUTPUT
  LOOKUP_MX: MX_TOOLBOX_LOOKUP_MX_OUTPUT
  LOOKUP_PING: MX_TOOLBOX_LOOKUP_PING_OUTPUT
  LOOKUP_SMTP: MX_TOOLBOX_LOOKUP_SMTP_OUTPUT
  LOOKUP_SPF: MX_TOOLBOX_LOOKUP_SPF_OUTPUT
  MONITOR_STATUS: MX_TOOLBOX_MONITOR_STATUS_OUTPUT
  USAGE_CHECK: MX_TOOLBOX_USAGE_CHECK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MX_TOOLBOX toolkit.
 */
export const MX_TOOLBOX = {
  slug: "mx_toolbox",
  tools: {
    /**
     * Tool to retrieve bimi (brand indicators for message identification) record for a domain. use when checking domain brand identity via bimi lookup.
     */
    LOOKUP_BIMI_RECORD: "MX_TOOLBOX_LOOKUP_BIMI_RECORD",
    /**
     * Tool to perform a blacklist check on a domain or ip. use when you need to verify whether a domain or ip is listed in common blacklists.
     */
    LOOKUP_BLACKLIST: "MX_TOOLBOX_LOOKUP_BLACKLIST",
    /**
     * Tool to retrieve dkim records for a domain. use when verifying dkim configuration before sending email.
     */
    LOOKUP_DKIM: "MX_TOOLBOX_LOOKUP_DKIM",
    /**
     * Tool to retrieve dmarc records for a domain. use after confirming the domain is correctly formatted.
     */
    LOOKUP_DMARC: "MX_TOOLBOX_LOOKUP_DMARC",
    /**
     * Tool to retrieve dns records for a given domain. use when you need dns lookup details.
     */
    LOOKUP_DNS: "MX_TOOLBOX_LOOKUP_DNS",
    /**
     * Tool to perform an http test on a domain. use when you need to assess http connectivity and status for a given domain.
     */
    LOOKUP_HTTP: "MX_TOOLBOX_LOOKUP_HTTP",
    /**
     * Tool to lookup mta-sts record for a domain. use when validating mail transport security policy.
     */
    LOOKUP_MTA_STS_RECORD: "MX_TOOLBOX_LOOKUP_MTA_STS_RECORD",
    /**
     * Tool to retrieve mx records for a given domain. use when you need to discover mail exchange servers after obtaining a domain.
     */
    LOOKUP_MX: "MX_TOOLBOX_LOOKUP_MX",
    /**
     * Tool to perform a ping test on a specified domain or ip address. use when you need hop-by-hop network latency diagnostics.
     */
    LOOKUP_PING: "MX_TOOLBOX_LOOKUP_PING",
    /**
     * Tool to perform an smtp test on the specified domain. use when verifying smtp connectivity for a domain.
     */
    LOOKUP_SMTP: "MX_TOOLBOX_LOOKUP_SMTP",
    /**
     * Tool to retrieve spf records for a specified domain. use when confirming email sender authorization policies.
     */
    LOOKUP_SPF: "MX_TOOLBOX_LOOKUP_SPF",
    /**
     * Tool to retrieve all monitor statuses. use when you need to get current health details of all account monitors.
     */
    MONITOR_STATUS: "MX_TOOLBOX_MONITOR_STATUS",
    /**
     * Tool to retrieve api usage statistics. use when you need to monitor remaining api calls and quota reset timing.
     */
    USAGE_CHECK: "MX_TOOLBOX_USAGE_CHECK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MX_TOOLBOX".
 */
export type MX_TOOLBOX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MX_TOOLBOX".
 */
export type MX_TOOLBOX_TRIGGER_EVENTS = {}
