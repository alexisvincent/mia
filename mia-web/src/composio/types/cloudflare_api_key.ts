// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_CREATE_DNS_RECORD tool input.
 */
type CLOUDFLARE_API_KEY_CREATE_DNS_RECORD_INPUT = {
  /**
   * Comment
   * @description Free-form comment for the DNS record.
   * @default null
   */
  comment: string | null;
  /**
   * Content
   * @description Record content; for types like A/AAAA use IP address, for CNAME use target hostname, etc.
   * @default null
   */
  content: string | null;
  /**
   * Name
   * @description Fully qualified DNS record name in Punycode.
   */
  name?: string;
  /**
   * Proxied
   * @description Whether the record is receiving the performance and security benefits of Cloudflare.
   * @default null
   */
  proxied: boolean | null;
  /**
   * ARecordSettings
   * @description Settings specific to A record when proxied.
   * @default null
   */
  settings: {
      /**
       * Ipv4 Only
       * @description Only generate A records for proxied names (no AAAA)
       * @default null
       */
      ipv4_only: boolean | null;
      /**
       * Ipv6 Only
       * @description Only generate AAAA records for proxied names (no A)
       * @default null
       */
      ipv6_only: boolean | null;
  } | null;
  /**
   * Tags
   * @description Custom tags in the form "name:value".
   * @default null
   */
  tags: string[] | null;
  /**
   * Ttl
   * @description Time to live for DNS record in seconds; 1 means automatic (Cloudflare default).
   * @default 1
   */
  ttl: number | null;
  /**
   * Type
   * @description DNS record type.
   * @enum {string}
   */
  type?: "A" | "AAAA" | "CNAME" | "MX" | "TXT" | "SRV" | "LOC" | "SPF" | "CERT" | "DNSKEY" | "DS" | "NAPTR" | "SMIMEA" | "SSHFP" | "TLSA" | "URI" | "CAA";
  /**
   * Zone Id
   * @description Zone identifier in which to create the DNS record.
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_CREATE_DNS_RECORD tool output.
 */
type CLOUDFLARE_API_KEY_CREATE_DNS_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API.
       */
      errors?: {
          [key: string]: unknown;
      }[];
      /**
       * Messages
       * @description Informational messages returned by the API.
       */
      messages?: {
          [key: string]: unknown;
      }[];
      /**
       * DnsRecord
       * @description Representation of a DNS record in Cloudflare.
       * @default null
       */
      result: {
          /**
           * Comment
           * @description Free-form comment for the DNS record.
           * @default null
           */
          comment: string | null;
          /**
           * Comment Modified On
           * @description Timestamp when the comment was last modified.
           * @default null
           */
          comment_modified_on: string | null;
          /**
           * Content
           * @description Record content; format depends on record type.
           * @default null
           */
          content: string | null;
          /**
           * Created On
           * @description Timestamp when the record was created.
           */
          created_on: string;
          /**
           * Data
           * @description Record-type-specific structured data (for types like SRV, MX, etc.).
           * @default null
           */
          data: {
              [key: string]: unknown;
          } | null;
          /**
           * Flags
           * @description Flags for DNSKEY, DS, SSHFP records.
           * @default null
           */
          flags: number | null;
          /**
           * Id
           * @description Unique identifier for the DNS record.
           */
          id: string;
          /**
           * Locked
           * @description Whether the record is locked for editing.
           */
          locked: boolean;
          /**
           * Meta
           * @description Auxiliary metadata for the record.
           */
          meta: {
              [key: string]: unknown;
          };
          /**
           * Modified On
           * @description Timestamp when the record was modified.
           */
          modified_on: string;
          /**
           * Name
           * @description DNS record name in Punycode.
           */
          name: string;
          /**
           * Port
           * @description Port for SRV records.
           * @default null
           */
          port: number | null;
          /**
           * Priority
           * @description Priority for MX and SRV records.
           * @default null
           */
          priority: number | null;
          /**
           * Protocol
           * @description Protocol for SRV and SSHFP records.
           * @default null
           */
          protocol: string | null;
          /**
           * Proxiable
           * @description Whether this record type supports Cloudflare proxying.
           */
          proxiable: boolean;
          /**
           * Proxied
           * @description Whether the record is receiving Cloudflare proxy.
           * @default null
           */
          proxied: boolean | null;
          /**
           * Tags
           * @description Custom tags for the DNS record.
           */
          tags: string[];
          /**
           * Tags Modified On
           * @description Timestamp when tags were last modified.
           * @default null
           */
          tags_modified_on: string | null;
          /**
           * Ttl
           * @description Time to live for DNS record in seconds; 1 means automatic.
           */
          ttl: number;
          /**
           * Type
           * @description DNS record type.
           */
          type: string;
          /**
           * Weight
           * @description Weight for SRV records.
           * @default null
           */
          weight: number | null;
          /**
           * Zone Id
           * @description Zone identifier where the record exists.
           */
          zone_id: string;
          /**
           * Zone Name
           * @description Zone name where the record exists.
           */
          zone_name: string;
      } | null;
      /**
       * Success
       * @description Whether the API call was successful.
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_CREATE_LOCKDOWN_RULE tool input.
 */
type CLOUDFLARE_API_KEY_CREATE_LOCKDOWN_RULE_INPUT = {
  /**
   * Configurations
   * @description One or more sources to allow (IP or CIDR ranges).
   */
  configurations?: {
      /**
       * Target
       * @description Type of configuration: 'ip' for single IP, 'ip_range' for CIDR range.
       * @enum {string}
       */
      target: "ip" | "ip_range";
      /**
       * Value
       * @description IP address or CIDR range (e.g., '192.0.2.1' or '192.0.2.0/24').
       */
      value: string;
  }[];
  /**
   * Description
   * @description Optional summary of the rule.
   * @default null
   */
  description: string | null;
  /**
   * Paused
   * @description Whether to start the rule in a paused state.
   * @default null
   */
  paused: boolean | null;
  /**
   * Priority
   * @description Processing priority (lower numbers run first).
   * @default null
   */
  priority: number | null;
  /**
   * Urls
   * @description URLs to lock down; supports simple wildcard '*' patterns.
   */
  urls?: string[];
  /**
   * Zone Id
   * @description Zone identifier.
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_CREATE_LOCKDOWN_RULE tool output.
 */
type CLOUDFLARE_API_KEY_CREATE_LOCKDOWN_RULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Error details.
       */
      errors: {
          [key: string]: unknown;
      }[];
      /**
       * Messages
       * @description Informational messages.
       */
      messages: {
          [key: string]: unknown;
      }[];
      /**
       * LockdownRule
       * @description Representation of a Zone Lockdown rule.
       * @default null
       */
      result: {
          /**
           * Configurations
           * @description List of IP or IP range configurations in this rule.
           */
          configurations: {
              /**
               * Target
               * @description Type of configuration: 'ip' for single IP, 'ip_range' for CIDR range.
               * @enum {string}
               */
              target: "ip" | "ip_range";
              /**
               * Value
               * @description IP address or CIDR range (e.g., '192.0.2.1' or '192.0.2.0/24').
               */
              value: string;
          }[];
          /**
           * Created On
           * @description Creation timestamp (ISO 8601).
           */
          created_on: string;
          /**
           * Description
           * @description Informative summary of the rule.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the lockdown rule.
           */
          id: string;
          /**
           * Modified On
           * @description Last modification timestamp (ISO 8601).
           */
          modified_on: string;
          /**
           * Paused
           * @description Whether the rule is paused.
           */
          paused: boolean;
          /**
           * Urls
           * @description List of URL patterns covered by this rule.
           */
          urls: string[];
      } | null;
      /**
       * Success
       * @description Whether the API call was successful.
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_CREATE_RULESET tool input.
 */
type CLOUDFLARE_API_KEY_CREATE_RULESET_INPUT = {
  /**
   * Account Or Zone Id
   * @description Identifier of the account or zone where the ruleset will be created
   */
  account_or_zone_id?: string;
  /**
   * Accounts Or Zones
   * @description Scope for the ruleset: 'accounts' or 'zones'
   * @enum {string}
   */
  accounts_or_zones?: "accounts" | "zones";
  /**
   * Description
   * @description Optional description for the ruleset
   * @default null
   */
  description: string | null;
  /**
   * Kind
   * @description Type of ruleset. Allowed values: custom, root, zone
   * @enum {string}
   */
  kind?: "custom" | "root" | "zone";
  /**
   * Name
   * @description Human-readable name for the ruleset
   */
  name?: string;
  /**
   * Phase
   * @description Execution phase for the ruleset (e.g., http_request_firewall_custom, http_config_settings, ddos_l7, http_response_headers_transform, etc.)
   */
  phase?: string;
  /**
   * Rules
   * @description Optional list of rules to include in the ruleset
   * @default null
   */
  rules: {
      /**
       * Action
       * @description Action to perform when a rule matches
       */
      action: string;
      /**
       * Action Parameters
       * @description Parameters required by the specified action
       * @default null
       */
      action_parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Description
       * @description Optional human-readable description
       * @default null
       */
      description: string | null;
      /**
       * Enabled
       * @description Whether this rule is active
       * @default true
       */
      enabled: boolean | null;
      /**
       * Expression
       * @description Filter expression determining matches
       */
      expression: string;
      /**
       * Logging
       * @description Logging configuration for the rule
       * @default null
       */
      logging: {
          [key: string]: unknown;
      } | null;
  }[] | null;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_CREATE_RULESET tool output.
 */
type CLOUDFLARE_API_KEY_CREATE_RULESET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Error details returned by the API.
       */
      errors: {
          [key: string]: unknown;
      }[];
      /**
       * Messages
       * @description Informational messages returned by the API.
       */
      messages: {
          [key: string]: unknown;
      }[];
      /**
       * Ruleset
       * @description Represents a Cloudflare ruleset returned from the API.
       * @default null
       */
      result: {
          /**
           * Description
           * @description Description provided at creation time
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the ruleset
           */
          id: string;
          /**
           * Kind
           * @description Type of the ruleset
           */
          kind: string;
          /**
           * Last Updated
           * @description ISO8601 timestamp of last update
           */
          last_updated: string;
          /**
           * Name
           * @description Name of the ruleset
           */
          name: string;
          /**
           * Phase
           * @description Execution phase of the ruleset
           */
          phase: string;
          /**
           * Rules
           * @description List of rules in this ruleset
           */
          rules: {
              /**
               * Action
               * @description Action to perform when a rule matches
               */
              action: string;
              /**
               * Action Parameters
               * @description Parameters required by the specified action
               * @default null
               */
              action_parameters: {
                  [key: string]: unknown;
              } | null;
              /**
               * Description
               * @description Optional human-readable description
               * @default null
               */
              description: string | null;
              /**
               * Enabled
               * @description Whether this rule is active
               * @default true
               */
              enabled: boolean | null;
              /**
               * Expression
               * @description Filter expression determining matches
               */
              expression: string;
              /**
               * Logging
               * @description Logging configuration for the rule
               * @default null
               */
              logging: {
                  [key: string]: unknown;
              } | null;
          }[];
          /**
           * Version
           * @description Version tag for this ruleset
           */
          version: string;
      } | null;
      /**
       * Success
       * @description Whether the API call was successful.
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_CREATE_RULE_IN_RULESET tool input.
 */
type CLOUDFLARE_API_KEY_CREATE_RULE_IN_RULESET_INPUT = {
  /**
   * Account Id
   * @description Account identifier; required if using accounts segment
   * @default null
   */
  account_id: string | null;
  /**
   * Accounts Or Zones
   * @description Segment for owner: 'accounts' or 'zones'
   * @enum {string}
   */
  accounts_or_zones?: "accounts" | "zones";
  /**
   * Rule
   * @description Definition of the rule to add
   */
  rule?: {
      /**
       * Action
       * @description Action to execute when expression matches
       * @default null
       */
      action: string | null;
      /**
       * Action Parameters
       * @description Parameters configuring the chosen action
       */
      action_parameters?: {
          [key: string]: unknown;
      };
      /**
       * Description
       * @description Informative description for the rule
       * @default null
       */
      description: string | null;
      /**
       * Enabled
       * @description Whether this rule should be executed
       * @default true
       */
      enabled: boolean;
      /**
       * ExposedCredentialCheckConfig
       * @description Configuration for exposed-credential check (http_request_firewall_custom at account level).
       * @default null
       */
      exposed_credential_check: {
          /**
           * Password Expression
           * @description JMESPath expression to extract password value
           */
          password_expression: string;
          /**
           * Username Expression
           * @description JMESPath expression to extract username value
           */
          username_expression: string;
      } | null;
      /**
       * Expression
       * @description Filter expression for matching traffic
       * @default null
       */
      expression: string | null;
      /**
       * Id
       * @description Rule identifier (server-generated if omitted)
       * @default null
       */
      id: string | null;
      /**
       * LoggingConfig
       * @description Configuration for rule logging behavior.
       * @default null
       */
      logging: {
          /**
           * Enabled
           * @description Whether logging is enabled for the rule
           */
          enabled: boolean;
      } | null;
      /**
       * Position
       * @description Where to place the new rule in the ruleset.
       *     Include only one of before, after, or index.
       * @default null
       */
      position: {
          /**
           * After
           * @description Insert new rule after this rule ID
           * @default null
           */
          after: string | null;
          /**
           * Before
           * @description Insert new rule before this rule ID
           * @default null
           */
          before: string | null;
          /**
           * Index
           * @description 1-based index to insert the new rule
           * @default null
           */
          index: number | null;
      } | null;
      /**
       * RateLimitConfig
       * @description Configuration for rate limiting behavior (http_ratelimit phase).
       * @default null
       */
      ratelimit: {
          /**
           * Characteristics
           * @description List of IP characteristics for rate limiting
           */
          characteristics: string[];
          /**
           * Counting Expression
           * @description Expression used to count requests
           * @default null
           */
          counting_expression: string | null;
          /**
           * Mitigation Timeout
           * @description Time (in seconds) to mitigate requests after limit is reached
           * @default null
           */
          mitigation_timeout: number | null;
          /**
           * Period
           * @description Time window (in seconds) for the rate limit
           */
          period: number;
          /**
           * Requests Per Period
           * @description Max requests allowed per period
           * @default null
           */
          requests_per_period: number | null;
          /**
           * Requests To Origin
           * @description Whether to send excess requests to origin
           * @default null
           */
          requests_to_origin: boolean | null;
          /**
           * Score Per Period
           * @description Score threshold per period
           * @default null
           */
          score_per_period: number | null;
          /**
           * Score Response Header Name
           * @description Header name for score in response
           * @default null
           */
          score_response_header_name: string | null;
      } | null;
      /**
       * Ref
       * @description Reference string for the rule
       * @default null
       */
      ref: string | null;
  };
  /**
   * Ruleset Id
   * @description ID of the target ruleset
   */
  ruleset_id?: string;
  /**
   * Zone Id
   * @description Zone identifier; required if using zones segment
   * @default null
   */
  zone_id: string | null;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_CREATE_RULE_IN_RULESET tool output.
 */
type CLOUDFLARE_API_KEY_CREATE_RULE_IN_RULESET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API
       */
      errors: {
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
          /**
           * Source
           * @description Pointer to the source of the error
           * @default null
           */
          source: {
              [key: string]: string;
          } | null;
      }[];
      /**
       * Messages
       * @description Informational messages
       */
      messages: {
          /**
           * Code
           * @description Message code
           */
          code: number;
          /**
           * Message
           * @description Message text
           */
          message: string;
          /**
           * Source
           * @description Pointer to the source of the message
           * @default null
           */
          source: {
              [key: string]: string;
          } | null;
      }[];
      /**
       * Ruleset
       * @description The complete ruleset after adding the rule, if available
       * @default null
       */
      result: {
          /**
           * Description
           * @description Ruleset description
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique ruleset ID
           */
          id: string;
          /**
           * Kind
           * @description Ruleset kind (root | zone | managed | custom)
           */
          kind: string;
          /**
           * Last Updated
           * @description Timestamp of last modification
           * @default null
           */
          last_updated: string | null;
          /**
           * Name
           * @description Human-readable name of the ruleset
           */
          name: string;
          /**
           * Phase
           * @description Execution phase of the ruleset
           * @default null
           */
          phase: string | null;
          /**
           * Rules
           * @description Full list of rules including newly added one
           */
          rules: {
              /**
               * Action
               * @description Configured action
               * @default null
               */
              action: string | null;
              /**
               * Action Parameters
               * @description Parameters for the action
               * @default null
               */
              action_parameters: {
                  [key: string]: unknown;
              } | null;
              /**
               * Categories
               * @description Categories (read-only for managed rules)
               * @default null
               */
              categories: string[] | null;
              /**
               * Description
               * @description Rule description
               * @default null
               */
              description: string | null;
              /**
               * Enabled
               * @description Whether the rule is enabled
               * @default null
               */
              enabled: boolean | null;
              /**
               * ExposedCredentialCheckConfig
               * @description Configuration for exposed-credential check (http_request_firewall_custom at account level).
               * @default null
               */
              exposed_credential_check: {
                  /**
                   * Password Expression
                   * @description JMESPath expression to extract password value
                   */
                  password_expression: string;
                  /**
                   * Username Expression
                   * @description JMESPath expression to extract username value
                   */
                  username_expression: string;
              } | null;
              /**
               * Expression
               * @description Match criteria expression
               * @default null
               */
              expression: string | null;
              /**
               * Id
               * @description Rule identifier
               */
              id: string;
              /**
               * Last Updated
               * @description Timestamp of last update
               * @default null
               */
              last_updated: string | null;
              /**
               * LoggingConfig
               * @description Configuration for rule logging behavior.
               * @default null
               */
              logging: {
                  /**
                   * Enabled
                   * @description Whether logging is enabled for the rule
                   */
                  enabled: boolean;
              } | null;
              /**
               * RateLimitConfig
               * @description Configuration for rate limiting behavior (http_ratelimit phase).
               * @default null
               */
              ratelimit: {
                  /**
                   * Characteristics
                   * @description List of IP characteristics for rate limiting
                   */
                  characteristics: string[];
                  /**
                   * Counting Expression
                   * @description Expression used to count requests
                   * @default null
                   */
                  counting_expression: string | null;
                  /**
                   * Mitigation Timeout
                   * @description Time (in seconds) to mitigate requests after limit is reached
                   * @default null
                   */
                  mitigation_timeout: number | null;
                  /**
                   * Period
                   * @description Time window (in seconds) for the rate limit
                   */
                  period: number;
                  /**
                   * Requests Per Period
                   * @description Max requests allowed per period
                   * @default null
                   */
                  requests_per_period: number | null;
                  /**
                   * Requests To Origin
                   * @description Whether to send excess requests to origin
                   * @default null
                   */
                  requests_to_origin: boolean | null;
                  /**
                   * Score Per Period
                   * @description Score threshold per period
                   * @default null
                   */
                  score_per_period: number | null;
                  /**
                   * Score Response Header Name
                   * @description Header name for score in response
                   * @default null
                   */
                  score_response_header_name: string | null;
              } | null;
              /**
               * Ref
               * @description Reference string for the rule
               * @default null
               */
              ref: string | null;
              /**
               * Version
               * @description Rule version
               * @default null
               */
              version: string | null;
          }[];
          /**
           * Version
           * @description Ruleset version
           * @default null
           */
          version: string | null;
      } | null;
      /**
       * Success
       * @description Whether the API call succeeded
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_DELETE_DNSSEC tool input.
 */
type CLOUDFLARE_API_KEY_DELETE_DNSSEC_INPUT = {
  /**
   * Zone Id
   * @description Zone identifier to delete DNSSEC for
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_DELETE_DNSSEC tool output.
 */
type CLOUDFLARE_API_KEY_DELETE_DNSSEC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors returned by the API, if any
       */
      errors?: {
          /**
           * Code
           * @description Error code returned by Cloudflare
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to documentation for this error
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message returned by Cloudflare
           */
          message: string;
          /**
           * DeleteDnssecSource
           * @description Source of the error in the request.
           * @default null
           */
          source: {
              /**
               * Pointer
               * @description JSON pointer to the error source
               * @default null
               */
              pointer: string | null;
          } | null;
      }[];
      /**
       * Messages
       * @description List of informational messages returned by the API
       */
      messages?: {
          /**
           * Code
           * @description Error code returned by Cloudflare
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to documentation for this error
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message returned by Cloudflare
           */
          message: string;
          /**
           * DeleteDnssecSource
           * @description Source of the error in the request.
           * @default null
           */
          source: {
              /**
               * Pointer
               * @description JSON pointer to the error source
               * @default null
               */
              pointer: string | null;
          } | null;
      }[];
      /**
       * Result
       * @description Empty string upon successful deletion; may be omitted on errors
       * @default null
       */
      result: string | null;
      /**
       * Success
       * @description Whether the API call was successful
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_DELETE_DNS_RECORD tool input.
 */
type CLOUDFLARE_API_KEY_DELETE_DNS_RECORD_INPUT = {
  /**
   * Dns Record Id
   * @description DNS record identifier (max length 32).
   */
  dns_record_id?: string;
  /**
   * Zone Id
   * @description Zone identifier (max length 32).
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_DELETE_DNS_RECORD tool output.
 */
type CLOUDFLARE_API_KEY_DELETE_DNS_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API, if any.
       */
      errors?: {
          [key: string]: unknown;
      }[];
      /**
       * Messages
       * @description Messages returned by the API, if any.
       */
      messages?: {
          [key: string]: unknown;
      }[];
      /**
       * DeleteDnsRecordResult
       * @description Result model for deleted DNS record.
       * @default null
       */
      result: {
          /**
           * Id
           * @description Identifier of the deleted DNS record.
           */
          id: string;
      } | null;
      /**
       * Success
       * @description Whether the API call was successful.
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_DELETE_RULESET tool input.
 */
type CLOUDFLARE_API_KEY_DELETE_RULESET_INPUT = {
  /**
   * Account Or Zone Id
   * @description Account ID if scope is 'accounts', or Zone ID if scope is 'zones'.
   */
  account_or_zone_id?: string;
  /**
   * Accounts Or Zones
   * @description Scope of the ruleset. Must be 'accounts' or 'zones'.
   * @enum {string}
   */
  accounts_or_zones?: "accounts" | "zones";
  /**
   * Ruleset Id
   * @description Unique identifier of the ruleset to delete.
   */
  ruleset_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_DELETE_RULESET tool output.
 */
type CLOUDFLARE_API_KEY_DELETE_RULESET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors returned by the API. Empty on success.
       */
      errors: {
          [key: string]: unknown;
      }[];
      /**
       * Messages
       * @description Informational messages returned by the API.
       */
      messages: {
          [key: string]: unknown;
      }[];
      /**
       * Result
       * @description Optional result payload; typically None for delete.
       * @default null
       */
      result: {
          [key: string]: unknown;
      } | null;
      /**
       * Success
       * @description Whether the API call was successful.
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_DELETE_RULE_FROM_RULESET tool input.
 */
type CLOUDFLARE_API_KEY_DELETE_RULE_FROM_RULESET_INPUT = {
  /**
   * Account Or Zone Id
   * @description Identifier of the account or zone owning the ruleset
   */
  account_or_zone_id?: string;
  /**
   * Accounts Or Zones
   * @description Scope for the ruleset: 'accounts' or 'zones'
   * @enum {string}
   */
  accounts_or_zones?: "accounts" | "zones";
  /**
   * Rule Id
   * @description Unique identifier of the rule to delete
   */
  rule_id?: string;
  /**
   * Ruleset Id
   * @description Unique identifier of the ruleset
   */
  ruleset_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_DELETE_RULE_FROM_RULESET tool output.
 */
type CLOUDFLARE_API_KEY_DELETE_RULE_FROM_RULESET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Error details returned by the API.
       */
      errors?: {
          [key: string]: unknown;
      }[];
      /**
       * Messages
       * @description Informational messages returned by the API.
       */
      messages?: {
          [key: string]: unknown;
      }[];
      /**
       * Ruleset
       * @description Represents a Cloudflare ruleset returned from the API.
       * @default null
       */
      result: {
          /**
           * Description
           * @description Description provided at creation time
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the ruleset
           */
          id: string;
          /**
           * Kind
           * @description Type of the ruleset
           * @enum {string}
           */
          kind: "custom" | "root" | "zone";
          /**
           * Last Updated
           * @description ISO8601 timestamp of last update
           */
          last_updated: string;
          /**
           * Name
           * @description Name of the ruleset
           */
          name: string;
          /**
           * Phase
           * @description Execution phase of the ruleset
           */
          phase: string;
          /**
           * Rules
           * @description List of rules in this ruleset
           */
          rules: {
              /**
               * Action
               * @description Action to perform when a rule matches
               */
              action: string;
              /**
               * Action Parameters
               * @description Parameters required by the specified action
               * @default null
               */
              action_parameters: {
                  [key: string]: unknown;
              } | null;
              /**
               * Description
               * @description Optional human-readable description
               * @default null
               */
              description: string | null;
              /**
               * Enabled
               * @description Whether this rule is active
               * @default true
               */
              enabled: boolean | null;
              /**
               * Expression
               * @description Filter expression determining matches
               */
              expression: string;
              /**
               * Logging
               * @description Logging configuration for the rule
               * @default null
               */
              logging: {
                  [key: string]: unknown;
              } | null;
          }[];
          /**
           * Version
           * @description Version tag for this ruleset
           */
          version: string;
      } | null;
      /**
       * Success
       * @description Whether the API call was successful.
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_DELETE_ZONE tool input.
 */
type CLOUDFLARE_API_KEY_DELETE_ZONE_INPUT = {
  /**
   * Zone Id
   * @description Zone identifier to delete
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_DELETE_ZONE tool output.
 */
type CLOUDFLARE_API_KEY_DELETE_ZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors encountered during the API call
       */
      errors: {
          /**
           * Code
           * @description Error code
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to documentation for this error
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message
           */
          message: string;
          /**
           * DeleteZoneSource
           * @description Source of the error in the request.
           * @default null
           */
          source: {
              /**
               * Pointer
               * @description JSON pointer to the error source
               * @default null
               */
              pointer: string | null;
          } | null;
      }[];
      /**
       * Messages
       * @description Informational messages from the API call
       */
      messages: {
          /**
           * Code
           * @description Error code
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to documentation for this error
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message
           */
          message: string;
          /**
           * DeleteZoneSource
           * @description Source of the error in the request.
           * @default null
           */
          source: {
              /**
               * Pointer
               * @description JSON pointer to the error source
               * @default null
               */
              pointer: string | null;
          } | null;
      }[];
      /**
       * DeleteZoneResult
       * @description Result object returned upon successful deletion of a zone.
       * @default null
       */
      result: {
          /**
           * Id
           * @description Identifier of the deleted zone
           */
          id: string;
      } | null;
      /**
       * Success
       * @description Whether the API call was successful
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_GET_ENTRYPOINT_RULESET_VERSION tool input.
 */
type CLOUDFLARE_API_KEY_GET_ENTRYPOINT_RULESET_VERSION_INPUT = {
  /**
   * Account Or Zone Id
   * @description Identifier of the account (when accounts) or zone (when zones)
   */
  account_or_zone_id?: string;
  /**
   * Accounts Or Zones
   * @description Scope for the ruleset: 'accounts' or 'zones'
   * @enum {string}
   */
  accounts_or_zones?: "accounts" | "zones";
  /**
   * Ruleset Phase
   * @description Execution phase of the ruleset. E.g., ddos_l4, http_request_firewall_custom, http_request_transform, http_response_headers_transform, magic_transit, etc.
   */
  ruleset_phase?: string;
  /**
   * Ruleset Version
   * @description The specific version identifier of the entry point ruleset to fetch
   */
  ruleset_version?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_GET_ENTRYPOINT_RULESET_VERSION tool output.
 */
type CLOUDFLARE_API_KEY_GET_ENTRYPOINT_RULESET_VERSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API
       */
      errors?: {
          [key: string]: unknown;
      }[];
      /**
       * Messages
       * @description Informational messages returned by the API
       */
      messages?: {
          [key: string]: unknown;
      }[];
      /**
       * RulesetVersion
       * @description A single entry point ruleset version.
       * @default null
       */
      result: {
          /**
           * Description
           * @description Description of this ruleset version
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the ruleset version
           */
          id: string;
          /**
           * Kind
           * @description Type of the ruleset
           * @enum {string}
           */
          kind: "managed" | "custom" | "root" | "zone";
          /**
           * Last Updated
           * @description Timestamp of last update (ISO 8601)
           */
          last_updated: string;
          /**
           * Name
           * @description Human-readable name of the ruleset
           */
          name: string;
          /**
           * Phase
           * @description Execution phase of the ruleset
           */
          phase: string;
          /**
           * Rules
           * @description List of rules in this version
           */
          rules: {
              [key: string]: unknown;
          }[];
          /**
           * Version
           * @description Version identifier of the ruleset version
           */
          version: string;
      } | null;
      /**
       * Success
       * @description Whether the API call was successful
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_GET_LOCKDOWN_RULE tool input.
 */
type CLOUDFLARE_API_KEY_GET_LOCKDOWN_RULE_INPUT = {
  /**
   * Lockdown Id
   * @description Unique identifier of the Zone Lockdown rule (max length 32)
   */
  lockdown_id?: string;
  /**
   * Zone Id
   * @description Identifier of the Cloudflare zone (max length 32)
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_GET_LOCKDOWN_RULE tool output.
 */
type CLOUDFLARE_API_KEY_GET_LOCKDOWN_RULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors returned by the API
       */
      errors?: {
          /**
           * Code
           * @description Numeric code of the error
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to related Cloudflare documentation
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Human-readable error message
           */
          message: string;
          /**
           * Source
           * @description Pointer to the request field that caused the error
           * @default null
           */
          source: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Messages
       * @description List of messages returned by the API
       */
      messages?: {
          /**
           * Code
           * @description Numeric code of the message
           * @default null
           */
          code: number | null;
          /**
           * Message
           * @description Human-readable message text
           */
          message: string;
      }[];
      /**
       * LockdownRule
       * @description Representation of a Zone Lockdown rule.
       * @default null
       */
      result: {
          /**
           * Configurations
           * @description List of configuration items (IP or CIDR)
           */
          configurations: {
              /**
               * Target
               * @description Target type for the configuration, e.g., 'ip' or 'cidr'
               */
              target: string;
              /**
               * Value
               * @description Value for the configuration, such as an IP address or CIDR block
               */
              value: string;
          }[];
          /**
           * Created On
           * @description Creation timestamp of the rule in ISO 8601 format
           */
          created_on: string;
          /**
           * Description
           * @description Informative summary of the rule
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the Zone Lockdown rule
           */
          id: string;
          /**
           * Modified On
           * @description Last modified timestamp of the rule in ISO 8601 format
           */
          modified_on: string;
          /**
           * Paused
           * @description Whether the rule is paused
           */
          paused: boolean;
          /**
           * Urls
           * @description List of URLs included in the rule; wildcards allowed
           */
          urls: string[];
      } | null;
      /**
       * Success
       * @description Whether the API call succeeded
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_GET_REGIONAL_TIERED_CACHE tool input.
 */
type CLOUDFLARE_API_KEY_GET_REGIONAL_TIERED_CACHE_INPUT = {
  /**
   * Zone Id
   * @description Identifier of the Cloudflare zone (max 32 characters)
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_GET_REGIONAL_TIERED_CACHE tool output.
 */
type CLOUDFLARE_API_KEY_GET_REGIONAL_TIERED_CACHE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error objects, if any
       */
      errors?: {
          /**
           * Code
           * @description Numeric code of the error or message
           * @default null
           */
          code: number | null;
          /**
           * Documentation Url
           * @description URL with more information about the error or message
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Human-readable error or message text
           * @default null
           */
          message: string | null;
          /**
           * Source
           * @description Source context for the error or message
           * @default null
           */
          source: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Messages
       * @description List of informational messages, if any
       */
      messages?: {
          /**
           * Code
           * @description Numeric code of the error or message
           * @default null
           */
          code: number | null;
          /**
           * Documentation Url
           * @description URL with more information about the error or message
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Human-readable error or message text
           * @default null
           */
          message: string | null;
          /**
           * Source
           * @description Source context for the error or message
           * @default null
           */
          source: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * RegionalTieredCacheResult
       * @description The regional tiered cache setting details for a zone.
       * @default null
       */
      result: {
          /**
           * Editable
           * @description Whether this setting can be changed
           */
          editable: boolean;
          /**
           * Id
           * @description Setting identifier; always 'tc_regional'
           * @constant
           */
          id: "tc_regional";
          /**
           * Modified On
           * @description Date-time when this setting was last modified in ISO format
           * @default null
           */
          modified_on: string | null;
          /**
           * Value
           * @description Current regional tiered cache status
           * @enum {string}
           */
          value: "on" | "off";
      } | null;
      /**
       * Success
       * @description Whether the API call succeeded
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_GET_RULESET tool input.
 */
type CLOUDFLARE_API_KEY_GET_RULESET_INPUT = {
  /**
   * Account Id
   * @description Cloudflare account ID; required if accounts_or_zones='accounts', mutually exclusive with zone_id.
   * @default null
   */
  account_id: string | null;
  /**
   * Accounts Or Zones
   * @description Must be 'accounts' or 'zones' to select the account- or zone-level endpoint.
   * @enum {string}
   */
  accounts_or_zones?: "accounts" | "zones";
  /**
   * Ruleset Id
   * @description The unique ID of the ruleset to retrieve.
   */
  ruleset_id?: string;
  /**
   * Zone Id
   * @description DNS zone ID; required if accounts_or_zones='zones', mutually exclusive with account_id.
   * @default null
   */
  zone_id: string | null;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_GET_RULESET tool output.
 */
type CLOUDFLARE_API_KEY_GET_RULESET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors returned by the API.
       */
      errors: {
          /**
           * Code
           * @description Error or message code
           * @default null
           */
          code: number | null;
          /**
           * Message
           * @description Error or informational message
           * @default null
           */
          message: string | null;
          /**
           * Source
           * @description Pointer to the related data, if available
           * @default null
           */
          source: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Messages
       * @description List of informational messages returned by the API.
       */
      messages: {
          /**
           * Code
           * @description Error or message code
           * @default null
           */
          code: number | null;
          /**
           * Message
           * @description Error or informational message
           * @default null
           */
          message: string | null;
          /**
           * Source
           * @description Pointer to the related data, if available
           * @default null
           */
          source: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Ruleset
       * @description The retrieved ruleset object, if available.
       * @default null
       */
      result: {
          /**
           * Description
           * @description Optional human-friendly description of the ruleset.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique ruleset ID.
           */
          id: string;
          /**
           * Kind
           * @description Kind of ruleset.
           * @enum {string}
           */
          kind: "managed" | "custom" | "root" | "zone";
          /**
           * Last Updated
           * Format: date-time
           * @description Timestamp when the ruleset was last modified.
           */
          last_updated: string;
          /**
           * Name
           * @description Human-readable name of the ruleset.
           */
          name: string;
          /**
           * Phase
           * @description Execution phase of the ruleset.
           */
          phase: string;
          /**
           * Rules
           * @description List of rules contained in the ruleset.
           */
          rules: {
              [key: string]: unknown;
          }[];
          /**
           * Version
           * @description Version identifier of the ruleset.
           */
          version: string;
      } | null;
      /**
       * Success
       * @description Whether the API call was successful.
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_GET_ZONE_DETAILS tool input.
 */
type CLOUDFLARE_API_KEY_GET_ZONE_DETAILS_INPUT = {
  /**
   * Zone Id
   * @description Identifier for the zone (max length 32)
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_GET_ZONE_DETAILS tool output.
 */
type CLOUDFLARE_API_KEY_GET_ZONE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors returned by the API
       */
      errors: {
          /**
           * Code
           * @description Error or message code
           * @default null
           */
          code: number | null;
          /**
           * Message
           * @description Error or informational message
           * @default null
           */
          message: string | null;
      }[];
      /**
       * Messages
       * @description List of messages returned by the API
       */
      messages: {
          /**
           * Code
           * @description Error or message code
           * @default null
           */
          code: number | null;
          /**
           * Message
           * @description Error or informational message
           * @default null
           */
          message: string | null;
      }[];
      /**
       * Zone
       * @description Zone resource details if available
       * @default null
       */
      result: ({
          /**
           * Account
           * @description Account object the zone belongs to
           */
          account: {
              /**
               * Id
               * @description Account identifier
               */
              id: string;
              /**
               * Name
               * @description Account name
               * @default null
               */
              name: string | null;
          };
          /**
           * Activated On
           * Format: date-time
           * @description Datetime when zone was activated
           * @default null
           */
          activated_on: string | null;
          /**
           * Cname Suffix
           * @description Custom CNAME suffix for partial (tenants only)
           * @default null
           */
          cname_suffix: string | null;
          /**
           * Created On
           * Format: date-time
           * @description Datetime when zone was created
           */
          created_on: string;
          /**
           * Development Mode
           * @description Seconds until dev mode expires or negative if expired
           */
          development_mode: number;
          /**
           * Id
           * @description Zone identifier
           */
          id: string;
          /**
           * Meta
           * @description Metadata about the zone
           */
          meta: {
              /**
               * Step
               * @description Step metadata for zone setup
               * @default null
               */
              step: number | null;
              /**
               * Wildcard
               * @description Indicates if wildcard is enabled
               * @default null
               */
              wildcard: boolean | null;
          } & {
              [key: string]: unknown;
          };
          /**
           * Modified On
           * Format: date-time
           * @description Datetime when zone was last modified
           */
          modified_on: string;
          /**
           * Name
           * @description Domain name of the zone
           */
          name: string;
          /**
           * Name Servers
           * @description Cloudflare-assigned nameservers
           */
          name_servers: string[];
          /**
           * Original Dnshost
           * @description DNS host before switching to Cloudflare
           * @default null
           */
          original_dnshost: string | null;
          /**
           * Original Name Servers
           * @description Nameservers before moving to Cloudflare
           * @default null
           */
          original_name_servers: string[] | null;
          /**
           * Original Registrar
           * @description Registrar before switching to Cloudflare
           * @default null
           */
          original_registrar: string | null;
          /**
           * Owner
           * @description Owner object of the zone
           */
          owner: {
              /**
               * Email
               * @description Owner email address
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description Owner identifier
               */
              id: string;
          } & {
              [key: string]: unknown;
          };
          /**
           * Paused
           * @description If true, DNS-only mode (no performance/security features)
           * @default null
           */
          paused: boolean | null;
          /**
           * Permissions
           * @description Deprecated legacy permissions for the zone
           * @default null
           */
          permissions: string[] | null;
          /**
           * Plan
           * @description Deprecated zone subscription info
           * @default null
           */
          plan: {
              /**
               * Can Subscribe
               * @description Indicates if user can subscribe to plan
               */
              can_subscribe: boolean;
              /**
               * Currency
               * @description Currency code for plan price
               */
              currency: string;
              /**
               * Frequency
               * @description Billing frequency e.g., monthly
               */
              frequency: string;
              /**
               * Id
               * @description Plan identifier
               */
              id: string;
              /**
               * Is Subscribed
               * @description Indicates if subscription is active
               */
              is_subscribed: boolean;
              /**
               * Legacy Id
               * @description Deprecated legacy plan identifier
               * @default null
               */
              legacy_id: string | null;
              /**
               * Name
               * @description Plan name
               */
              name: string;
              /**
               * Price
               * @description Plan price in cents
               */
              price: number;
          } | null;
          /**
           * Status
           * @description Current status of the zone
           * @default null
           * @enum {string|null}
           */
          status: "initializing" | "pending" | "active" | "moved" | null;
          /**
           * Tenant
           * @description Root organization unit for the zone
           * @default null
           */
          tenant: ({
              /**
               * Id
               * @description Tenant identifier
               */
              id: string;
              /**
               * Name
               * @description Tenant name
               * @default null
               */
              name: string | null;
          } & {
              [key: string]: unknown;
          }) | null;
          /**
           * TenantUnit
           * @description Immediate parent organization unit for the zone
           * @default null
           */
          tenant_unit: ({
              /**
               * Id
               * @description Tenant unit identifier
               */
              id: string;
              /**
               * Name
               * @description Tenant unit name
               * @default null
               */
              name: string | null;
          } & {
              [key: string]: unknown;
          }) | null;
          /**
           * Type
           * @description Zone type, e.g., full, partial
           * @default null
           * @enum {string|null}
           */
          type: "full" | "partial" | "secondary" | "internal" | null;
          /**
           * Vanity Name Servers
           * @description User-provided vanity nameservers
           * @default null
           */
          vanity_name_servers: string[] | null;
          /**
           * Verification Key
           * @description Key for partial zone verification
           * @default null
           */
          verification_key: string | null;
      } & {
          [key: string]: unknown;
      }) | null;
      /**
       * Success
       * @description Whether the API call was successful
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_LIST_DNS_RECORDS tool input.
 */
type CLOUDFLARE_API_KEY_LIST_DNS_RECORDS_INPUT = {
  /**
   * Content
   * @description Filter by record content; semantics depend on record type (e.g., IP for A, target for CNAME).
   * @default null
   */
  content: string | null;
  /**
   * Direction
   * @description Direction to order records.
   * @default null
   * @enum {string|null}
   */
  direction: "asc" | "desc" | null;
  /**
   * Match
   * @description Whether to match any or all filter requirements (default: all).
   * @default all
   * @enum {string|null}
   */
  match: "any" | "all" | null;
  /**
   * Name
   * @description Filter by fully qualified record name in Punycode.
   * @default null
   */
  name: string | null;
  /**
   * Order
   * @description Field to order by.
   * @default null
   * @enum {string|null}
   */
  order: "type" | "name" | "content" | "ttl" | "proxied" | null;
  /**
   * Page
   * @description Page number (min: 1, default: 1).
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Results per page (min: 5, max: 100, default: 20).
   * @default 20
   */
  per_page: number | null;
  /**
   * Type
   * @description Filter by DNS record type.
   * @default null
   * @enum {string|null}
   */
  type: "A" | "AAAA" | "CNAME" | "MX" | "TXT" | "SRV" | "LOC" | "SPF" | "CERT" | "DNSKEY" | "DS" | "NAPTR" | "SMIMEA" | "SSHFP" | "TLSA" | "URI" | "CAA" | null;
  /**
   * Zone Id
   * @description Zone identifier to list DNS records for.
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_LIST_DNS_RECORDS tool output.
 */
type CLOUDFLARE_API_KEY_LIST_DNS_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API.
       */
      errors?: {
          [key: string]: unknown;
      }[];
      /**
       * Messages
       * @description Informational messages returned by the API.
       */
      messages?: {
          [key: string]: unknown;
      }[];
      /**
       * Result
       * @description List of DNS records matching the query.
       */
      result?: {
          /**
           * Comment
           * @description Free-form comment for the DNS record.
           * @default null
           */
          comment: string | null;
          /**
           * Content
           * @description Record content; format depends on record type.
           * @default null
           */
          content: string | null;
          /**
           * Created On
           * @description Timestamp when the record was created.
           */
          created_on: string;
          /**
           * Data
           * @description Record-type-specific structured data (for types like SRV, MX, etc.).
           * @default null
           */
          data: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Unique identifier for the DNS record.
           */
          id: string;
          /**
           * Locked
           * @description Whether the record is locked for editing.
           */
          locked: boolean;
          /**
           * Meta
           * @description Auxiliary metadata for the record.
           */
          meta?: {
              [key: string]: unknown;
          };
          /**
           * Modified On
           * @description Timestamp when the record was modified.
           */
          modified_on: string;
          /**
           * Name
           * @description DNS record name in Punycode.
           */
          name: string;
          /**
           * Proxiable
           * @description Whether this record type supports Cloudflare proxying.
           */
          proxiable: boolean;
          /**
           * Proxied
           * @description Whether the record is receiving Cloudflare proxy.
           * @default null
           */
          proxied: boolean | null;
          /**
           * Tags
           * @description Custom tags for the DNS record.
           */
          tags?: string[];
          /**
           * Ttl
           * @description Time to live for DNS record in seconds; 1 means automatic.
           */
          ttl: number;
          /**
           * Type
           * @description DNS record type.
           */
          type: string;
          /**
           * Zone Id
           * @description Zone identifier where the record exists.
           */
          zone_id: string;
          /**
           * Zone Name
           * @description Zone name where the record exists.
           */
          zone_name: string;
      }[];
      /**
       * ResultInfo
       * @description Pagination metadata.
       * @default null
       */
      result_info: {
          /** Count */
          count: number;
          /** Page */
          page: number;
          /** Per Page */
          per_page: number;
          /** Total Count */
          total_count: number;
          /** Total Pages */
          total_pages: number;
      } | null;
      /**
       * Success
       * @description Whether the API call was successful.
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_LIST_ZONES tool input.
 */
type CLOUDFLARE_API_KEY_LIST_ZONES_INPUT = {
  /**
   * Account.Id
   * @description Filter by an account ID.
   * @default null
   */
  "account.id": string | null;
  /**
   * Account.Name
   * @description Account name; supports operators: equal (default), not_equal, starts_with, ends_with, contains, starts_with_case_sensitive, ends_with_case_sensitive, contains_case_sensitive.
   * @default null
   */
  "account.name": string | null;
  /**
   * Direction
   * @description Direction to order zones.
   * @default null
   * @enum {string|null}
   */
  direction: "asc" | "desc" | null;
  /**
   * Match
   * @description Whether to match any or all search requirements (default: all).
   * @default all
   * @enum {string|null}
   */
  match: "any" | "all" | null;
  /**
   * Name
   * @description A domain name; supports the same operators as account.name.
   * @default null
   */
  name: string | null;
  /**
   * Order
   * @description Field to order by.
   * @default null
   * @enum {string|null}
   */
  order: "name" | "status" | "account.id" | "account.name" | "plan.id" | null;
  /**
   * Page
   * @description Page number (min: 1, default: 1).
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Results per page (min: 5, max: 50, default: 20).
   * @default 20
   */
  per_page: number | null;
  /**
   * Status
   * @description Filter by zone status.
   * @default null
   * @enum {string|null}
   */
  status: "initializing" | "pending" | "active" | "moved" | null;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_LIST_ZONES tool output.
 */
type CLOUDFLARE_API_KEY_LIST_ZONES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API.
       */
      errors: {
          [key: string]: unknown;
      }[];
      /**
       * Messages
       * @description Informational messages returned by the API.
       */
      messages: {
          [key: string]: unknown;
      }[];
      /**
       * Result
       * @description List of zones matching the query.
       */
      result: {
          /**
           * Development Mode
           * @description Development mode TTL setting.
           */
          development_mode: number;
          /**
           * Id
           * @description Zone identifier.
           */
          id: string;
          /**
           * Name
           * @description Zone name.
           */
          name: string;
          /**
           * Paused
           * @description Whether the zone is paused.
           */
          paused: boolean;
          /**
           * Status
           * @description Zone status.
           */
          status: string;
          /**
           * Type
           * @description Zone type.
           */
          type: string;
      }[];
      /**
       * Result Info
       * @description Pagination metadata.
       */
      result_info: {
          /**
           * Count
           * @description Number of zones in the current page.
           */
          count: number;
          /**
           * Page
           * @description Current page number.
           */
          page: number;
          /**
           * Per Page
           * @description Number of zones per page.
           */
          per_page: number;
          /**
           * Total Count
           * @description Total number of zones matching the filter.
           */
          total_count: number;
          /**
           * Total Pages
           * @description Total number of pages.
           */
          total_pages: number;
      };
      /**
       * Success
       * @description Whether the API call was successful.
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_OVERWRITE_DNS_RECORD tool input.
 */
type CLOUDFLARE_API_KEY_OVERWRITE_DNS_RECORD_INPUT = {
  /**
   * Comment
   * @description Free-form comment for the DNS record.
   * @default null
   */
  comment: string | null;
  /**
   * Content
   * @description Record content; e.g., IPv4 address for A records, target hostname for CNAME, etc.
   * @default null
   */
  content: string | null;
  /**
   * Dns Record Id
   * @description Identifier of the DNS record to overwrite.
   */
  dns_record_id?: string;
  /**
   * Name
   * @description Fully qualified DNS record name in Punycode.
   */
  name?: string;
  /**
   * Proxied
   * @description Whether the record is receiving the performance and security benefits of Cloudflare.
   * @default null
   */
  proxied: boolean | null;
  /**
   * Settings
   * @description Type-specific settings object for proxied record; passed through to the API.
   * @default null
   */
  settings: {
      [key: string]: unknown;
  } | null;
  /**
   * Tags
   * @description Custom tags in the form 'name:value'.
   * @default null
   */
  tags: string[] | null;
  /**
   * Ttl
   * @description Time to live for DNS record in seconds; 1 means automatic (Cloudflare default).
   * @default 1
   */
  ttl: number | null;
  /**
   * Type
   * @description DNS record type.
   * @enum {string}
   */
  type?: "A" | "AAAA" | "CNAME" | "MX" | "TXT" | "SRV" | "LOC" | "SPF" | "CERT" | "DNSKEY" | "DS" | "NAPTR" | "SMIMEA" | "SSHFP" | "TLSA" | "URI" | "CAA";
  /**
   * Zone Id
   * @description Zone identifier containing the DNS record.
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_OVERWRITE_DNS_RECORD tool output.
 */
type CLOUDFLARE_API_KEY_OVERWRITE_DNS_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API.
       */
      errors?: {
          [key: string]: unknown;
      }[];
      /**
       * Messages
       * @description Informational messages returned by the API.
       */
      messages?: {
          [key: string]: unknown;
      }[];
      /**
       * DnsRecord
       * @description Representation of a DNS record in Cloudflare.
       * @default null
       */
      result: {
          /**
           * Comment
           * @description Free-form comment for the DNS record.
           * @default null
           */
          comment: string | null;
          /**
           * Comment Modified On
           * @description Timestamp when the comment was last modified.
           * @default null
           */
          comment_modified_on: string | null;
          /**
           * Content
           * @description Record content; format depends on record type.
           * @default null
           */
          content: string | null;
          /**
           * Created On
           * @description Timestamp when the record was created.
           */
          created_on: string;
          /**
           * Data
           * @description Record-type-specific structured data (for types like SRV, MX, etc.).
           * @default null
           */
          data: {
              [key: string]: unknown;
          } | null;
          /**
           * Flags
           * @description Flags for DNSKEY, DS, SSHFP records.
           * @default null
           */
          flags: number | null;
          /**
           * Id
           * @description Unique identifier for the DNS record.
           */
          id: string;
          /**
           * Locked
           * @description Whether the record is locked for editing.
           */
          locked: boolean;
          /**
           * Meta
           * @description Auxiliary metadata for the record.
           */
          meta: {
              [key: string]: unknown;
          };
          /**
           * Modified On
           * @description Timestamp when the record was modified.
           */
          modified_on: string;
          /**
           * Name
           * @description DNS record name in Punycode.
           */
          name: string;
          /**
           * Port
           * @description Port for SRV records.
           * @default null
           */
          port: number | null;
          /**
           * Priority
           * @description Priority for MX and SRV records.
           * @default null
           */
          priority: number | null;
          /**
           * Protocol
           * @description Protocol for SRV and SSHFP records.
           * @default null
           */
          protocol: string | null;
          /**
           * Proxiable
           * @description Whether this record type supports Cloudflare proxying.
           */
          proxiable: boolean;
          /**
           * Proxied
           * @description Whether the record is receiving Cloudflare proxy.
           * @default null
           */
          proxied: boolean | null;
          /**
           * Tags
           * @description Custom tags for the DNS record.
           */
          tags: string[];
          /**
           * Tags Modified On
           * @description Timestamp when tags were last modified.
           * @default null
           */
          tags_modified_on: string | null;
          /**
           * Ttl
           * @description Time to live for DNS record in seconds; 1 means automatic.
           */
          ttl: number;
          /**
           * Type
           * @description DNS record type.
           */
          type: string;
          /**
           * Weight
           * @description Weight for SRV records.
           * @default null
           */
          weight: number | null;
          /**
           * Zone Id
           * @description Zone identifier where the record exists.
           */
          zone_id: string;
          /**
           * Zone Name
           * @description Zone name where the record exists.
           */
          zone_name: string;
      } | null;
      /**
       * Success
       * @description Whether the API call was successful.
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_RERUN_ZONE_ACTIVATION_CHECK tool input.
 */
type CLOUDFLARE_API_KEY_RERUN_ZONE_ACTIVATION_CHECK_INPUT = {
  /**
   * Zone Id
   * @description Zone identifier (max length 32 characters)
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_RERUN_ZONE_ACTIVATION_CHECK tool output.
 */
type CLOUDFLARE_API_KEY_RERUN_ZONE_ACTIVATION_CHECK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors returned by the API
       */
      errors?: {
          /**
           * Code
           * @description Numeric error code
           */
          code: number;
          /**
           * Documentation Url
           * @description Link to related Cloudflare documentation
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message
           */
          message: string;
          /**
           * Source
           * @description Pointer to the offending part of the request
           * @default null
           */
          source: {
              [key: string]: string;
          } | null;
      }[];
      /**
       * Messages
       * @description List of informational messages returned by the API
       */
      messages?: {
          /**
           * Code
           * @description Numeric error code
           */
          code: number;
          /**
           * Documentation Url
           * @description Link to related Cloudflare documentation
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message
           */
          message: string;
          /**
           * Source
           * @description Pointer to the offending part of the request
           * @default null
           */
          source: {
              [key: string]: string;
          } | null;
      }[];
      /**
       * ResultItem
       * @description Result object containing activation check ID
       * @default null
       */
      result: {
          /**
           * Id
           * @description Identifier of the activation check task
           */
          id: string;
      } | null;
      /**
       * Success
       * @description Whether the API call was successful
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_UPDATE_DNSSEC_STATUS tool input.
 */
type CLOUDFLARE_API_KEY_UPDATE_DNSSEC_STATUS_INPUT = {
  /**
   * Dnssec Multi Signer
   * @description Enable multi-signer DNSSEC so multiple providers can serve a signed zone.
   * @default null
   */
  dnssec_multi_signer: boolean | null;
  /**
   * Dnssec Presigned
   * @description Allow transfer-in of a pre-signed zone without on-the-fly signing.
   * @default null
   */
  dnssec_presigned: boolean | null;
  /**
   * Dnssec Use Nsec3
   * @description Enable NSEC3 together with DNSSEC (commonly used when transferring from another provider).
   * @default null
   */
  dnssec_use_nsec3: boolean | null;
  /**
   * Status
   * @description Desired DNSSEC state. Use 'active' to enable or 'disabled' to turn off DNSSEC.
   * @default null
   * @enum {string|null}
   */
  status: "active" | "disabled" | null;
  /**
   * Zone Id
   * @description Identifier of the zone to update.
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_UPDATE_DNSSEC_STATUS tool output.
 */
type CLOUDFLARE_API_KEY_UPDATE_DNSSEC_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error objects, if any.
       */
      errors?: {
          [key: string]: unknown;
      }[];
      /**
       * Messages
       * @description Informational messages.
       */
      messages?: {
          [key: string]: unknown;
      }[];
      /**
       * DNSSEC
       * @description DNSSEC configuration details returned by Cloudflare.
       * @default null
       */
      result: {
          /**
           * Algorithm
           * @description Algorithm key code.
           * @default null
           */
          algorithm: string | null;
          /**
           * Digest
           * @description Digest hash.
           * @default null
           */
          digest: string | null;
          /**
           * Digest Algorithm
           * @description Type of digest algorithm.
           * @default null
           */
          digest_algorithm: string | null;
          /**
           * Digest Type
           * @description Coded type for digest algorithm.
           * @default null
           */
          digest_type: string | null;
          /**
           * Dnssec Multi Signer
           * @description Whether multi-signer DNSSEC is enabled.
           * @default null
           */
          dnssec_multi_signer: boolean | null;
          /**
           * Dnssec Presigned
           * @description Whether presigned transfer-in is enabled.
           * @default null
           */
          dnssec_presigned: boolean | null;
          /**
           * Dnssec Use Nsec3
           * @description Whether NSEC3 is enabled.
           * @default null
           */
          dnssec_use_nsec3: boolean | null;
          /**
           * Ds
           * @description Full DS record.
           * @default null
           */
          ds: string | null;
          /**
           * Flags
           * @description DNSSEC record flag.
           * @default null
           */
          flags: number | null;
          /**
           * Key Tag
           * @description Key tag code.
           * @default null
           */
          key_tag: number | null;
          /**
           * Key Type
           * @description Algorithm key type.
           * @default null
           */
          key_type: string | null;
          /**
           * Modified On
           * @description ISO 8601 timestamp of last modification.
           * @default null
           */
          modified_on: string | null;
          /**
           * Public Key
           * @description Public key for DS record.
           * @default null
           */
          public_key: string | null;
          /**
           * Status
           * @description Current DNSSEC status.
           * @default null
           * @enum {string|null}
           */
          status: "active" | "pending" | "disabled" | "pending-disabled" | "error" | null;
      } | null;
      /**
       * Success
       * @description Whether the API call was successful.
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_UPDATE_LOCKDOWN_RULE tool input.
 */
type CLOUDFLARE_API_KEY_UPDATE_LOCKDOWN_RULE_INPUT = {
  /**
   * Configurations
   * @description List of allowed IP or CIDR configurations.
   */
  configurations?: ({
      /**
       * Target
       * @description Must be 'ip' when specifying a single IP address.
       * @default ip
       * @constant
       */
      target: "ip";
      /**
       * Value
       * @description A single IPv4 or IPv6 address to allow.
       */
      value: string;
  } | {
      /**
       * Target
       * @description Must be 'ip_range' when specifying a CIDR block.
       * @default ip_range
       * @constant
       */
      target: "ip_range";
      /**
       * Value
       * @description A CIDR range (e.g., '192.0.2.0/24') to allow.
       */
      value: string;
  })[];
  /**
   * Lock Downs Id
   * @description Identifier of the Zone Lockdown rule to update.
   */
  lock_downs_id?: string;
  /**
   * Urls
   * @description List of URLs to include in the rule; wildcards supported.
   */
  urls?: string[];
  /**
   * Zone Id
   * @description Identifier of the Cloudflare zone.
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_UPDATE_LOCKDOWN_RULE tool output.
 */
type CLOUDFLARE_API_KEY_UPDATE_LOCKDOWN_RULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API.
       */
      errors?: {
          /**
           * Code
           * @description Numeric code of the error or message.
           */
          code: number;
          /**
           * Documentation Url
           * @description URL with more information about this issue.
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Human-readable error or message text.
           */
          message: string;
          /**
           * Source
           * @description Source context for the error or message.
           * @default null
           */
          source: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Messages
       * @description Informational messages returned by the API.
       */
      messages?: {
          /**
           * Code
           * @description Numeric code of the error or message.
           */
          code: number;
          /**
           * Documentation Url
           * @description URL with more information about this issue.
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Human-readable error or message text.
           */
          message: string;
          /**
           * Source
           * @description Source context for the error or message.
           * @default null
           */
          source: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * LockdownRuleResult
       * @description Details of a Zone Lockdown rule.
       * @default null
       */
      result: {
          /**
           * Configurations
           * @description List of configurations applied in this rule.
           */
          configurations: ({
              /**
               * Target
               * @description Must be 'ip' when specifying a single IP address.
               * @default ip
               * @constant
               */
              target: "ip";
              /**
               * Value
               * @description A single IPv4 or IPv6 address to allow.
               */
              value: string;
          } | {
              /**
               * Target
               * @description Must be 'ip_range' when specifying a CIDR block.
               * @default ip_range
               * @constant
               */
              target: "ip_range";
              /**
               * Value
               * @description A CIDR range (e.g., '192.0.2.0/24') to allow.
               */
              value: string;
          })[];
          /**
           * Created On
           * Format: date-time
           * @description When the rule was created.
           */
          created_on: string;
          /**
           * Description
           * @description Optional description of the rule.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the lockdown rule.
           */
          id: string;
          /**
           * Modified On
           * Format: date-time
           * @description When the rule was last modified.
           */
          modified_on: string;
          /**
           * Paused
           * @description Whether the rule is paused.
           */
          paused: boolean;
          /**
           * Urls
           * @description URLs matched by this rule.
           */
          urls: string[];
      } | null;
      /**
       * Success
       * @description True if the API call succeeded.
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_UPDATE_RULESET tool input.
 */
type CLOUDFLARE_API_KEY_UPDATE_RULESET_INPUT = {
  /**
   * Account Or Zone Id
   * @description Identifier of the account or zone depending on the scope.
   */
  account_or_zone_id?: string;
  /**
   * Accounts Or Zones
   * @description Scope: "accounts" to update account-level rulesets or "zones" for zone-level.
   * @enum {string}
   */
  accounts_or_zones?: "accounts" | "zones";
  /**
   * Description
   * @description Informative description of the new ruleset version.
   * @default null
   */
  description: string | null;
  /**
   * Kind
   * @description Ruleset kind (e.g., firewall); generally immutable via this endpoint.
   * @default null
   */
  kind: string | null;
  /**
   * Name
   * @description Human-readable name for the new ruleset version.
   * @default null
   */
  name: string | null;
  /**
   * Phase
   * @description Execution phase of the ruleset (e.g., http_request_firewall_custom).
   * @default null
   */
  phase: string | null;
  /**
   * Rules
   * @description List of rule objects defining this ruleset version.
   * @default null
   */
  rules: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Ruleset Id
   * @description Identifier of the ruleset to update.
   */
  ruleset_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_UPDATE_RULESET tool output.
 */
type CLOUDFLARE_API_KEY_UPDATE_RULESET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors returned by the API.
       */
      errors: {
          [key: string]: unknown;
      }[];
      /**
       * Messages
       * @description Informational messages returned by the API.
       */
      messages: {
          [key: string]: unknown;
      }[];
      /**
       * Ruleset
       * @description The newly created ruleset version, present when success=true.
       * @default null
       */
      result: {
          /**
           * Description
           * @description Description of the ruleset.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the ruleset.
           */
          id: string;
          /**
           * Kind
           * @description Kind of the ruleset.
           */
          kind: string;
          /**
           * Last Updated
           * @description Timestamp of last modification (ISO 8601).
           */
          last_updated: string;
          /**
           * Name
           * @description Human-readable name of the ruleset.
           */
          name: string;
          /**
           * Phase
           * @description Execution phase of the ruleset.
           */
          phase: string;
          /**
           * Rules
           * @description Rules contained in the ruleset.
           */
          rules: {
              [key: string]: unknown;
          }[];
          /**
           * Version
           * @description Version identifier of the ruleset.
           */
          version: string;
      } | null;
      /**
       * Success
       * @description Indicates if the update succeeded.
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_UPDATE_RULE_IN_RULESET tool input.
 */
type CLOUDFLARE_API_KEY_UPDATE_RULE_IN_RULESET_INPUT = {
  /**
   * Account Or Zone Id
   * @description ID of the account or zone.
   */
  account_or_zone_id?: string;
  /**
   * Accounts Or Zones
   * @description Scope type: 'accounts' for account rulesets or 'zones' for zone rulesets.
   * @enum {string}
   */
  accounts_or_zones?: "accounts" | "zones";
  /**
   * Position
   * @description Position for reordering a rule within its ruleset.
   * @default null
   */
  position: {
      /**
       * After
       * @description ID of rule to place this rule after; empty string to make last.
       * @default null
       */
      after: string | null;
      /**
       * Before
       * @description ID of rule to place this rule before; empty string to make first.
       * @default null
       */
      before: string | null;
      /**
       * Index
       * @description 1-based position in list; shifts others accordingly.
       * @default null
       */
      index: number | null;
  } | null;
  /**
   * RuleUpdateFields
   * @description Fields to update on a rule.
   * @default null
   */
  rule: {
      /**
       * Action
       * @description Action to perform on match (e.g., block, allow).
       * @default null
       */
      action: string | null;
      /**
       * Action Parameters
       * @description Parameters for the action (shape varies by action).
       * @default null
       */
      action_parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Description
       * @description Human-readable description for the rule.
       * @default null
       */
      description: string | null;
      /**
       * Enabled
       * @description Whether the rule is active; default true.
       * @default null
       */
      enabled: boolean | null;
      /**
       * ExposedCredentialCheck
       * @description Configuration for exposed credential checking.
       * @default null
       */
      exposed_credential_check: {
          /**
           * Password Expression
           * @description Expression to extract password for credential checks.
           */
          password_expression: string;
          /**
           * Username Expression
           * @description Expression to extract username for credential checks.
           */
          username_expression: string;
      } | null;
      /**
       * Expression
       * @description Filter expression defining matching traffic.
       * @default null
       */
      expression: string | null;
      /**
       * Id
       * @description Rule ID (if modifying it).
       * @default null
       */
      id: string | null;
      /**
       * LoggingConfig
       * @description Configuration for rule logging.
       * @default null
       */
      logging: {
          /**
           * Enabled
           * @description Whether to log matches for this rule.
           */
          enabled: boolean;
      } | null;
      /**
       * RateLimitConfig
       * @description Configuration for rate limiting.
       * @default null
       */
      ratelimit: {
          /**
           * Characteristics
           * @description List of characteristics (e.g., IP, header) to rate limit on.
           */
          characteristics: string[];
          /**
           * Counting Expression
           * @description Expression for counting requests; default is client IP.
           * @default null
           */
          counting_expression: string | null;
          /**
           * Mitigation Timeout
           * @description Duration in seconds for mitigation action.
           * @default null
           */
          mitigation_timeout: number | null;
          /**
           * Period
           * @description Time window in seconds.
           */
          period: number;
          /**
           * Requests Per Period
           * @description Allowed requests per period.
           * @default null
           */
          requests_per_period: number | null;
          /**
           * Requests To Origin
           * @description If true, count only requests forwarded to origin.
           * @default null
           */
          requests_to_origin: boolean | null;
          /**
           * Score Per Period
           * @description Score points per period for scoring limits.
           * @default null
           */
          score_per_period: number | null;
          /**
           * Score Response Header Name
           * @description Header name for rate-limit scores.
           * @default null
           */
          score_response_header_name: string | null;
      } | null;
      /**
       * Ref
       * @description User-defined reference for this rule.
       * @default null
       */
      ref: string | null;
  } | null;
  /**
   * Rule Id
   * @description ID of the rule to update.
   */
  rule_id?: string;
  /**
   * Ruleset Id
   * @description ID of the ruleset containing the rule.
   */
  ruleset_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_UPDATE_RULE_IN_RULESET tool output.
 */
type CLOUDFLARE_API_KEY_UPDATE_RULE_IN_RULESET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API.
       */
      errors: {
          /**
           * Code
           * @description Numeric error code.
           */
          code: number;
          /**
           * Message
           * @description Error message from the API.
           */
          message: string;
          /**
           * Source
           * @description Error source context.
           * @default null
           */
          source: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Messages
       * @description Informational messages.
       */
      messages: {
          /**
           * Code
           * @description Numeric message code.
           */
          code: number;
          /**
           * Message
           * @description Informational message from the API.
           */
          message: string;
          /**
           * Source
           * @description Message source context.
           * @default null
           */
          source: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Ruleset
       * @description Updated ruleset object when success=true; otherwise None.
       * @default null
       */
      result: {
          /**
           * Description
           * @description Optional description of the ruleset.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Ruleset identifier.
           */
          id: string;
          /**
           * Kind
           * @description Type of the ruleset.
           * @enum {string}
           */
          kind: "managed" | "custom" | "root" | "zone";
          /**
           * Last Updated
           * @description ISO 8601 timestamp of last modification.
           */
          last_updated: string;
          /**
           * Name
           * @description Human-readable name of the ruleset.
           */
          name: string;
          /**
           * Phase
           * @description Ruleset processing phase.
           */
          phase: string;
          /**
           * Rules
           * @description List of rules within this ruleset.
           */
          rules: {
              [key: string]: unknown;
          }[];
          /**
           * Version
           * @description Version of the ruleset.
           */
          version: string;
      } | null;
      /**
       * Success
       * @description Whether the API call succeeded.
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_UPDATE_ZONE tool input.
 */
type CLOUDFLARE_API_KEY_UPDATE_ZONE_INPUT = {
  /**
   * Paused
   * @description Toggle DNS-only mode; true to disable security and performance features
   * @default null
   */
  paused: boolean | null;
  /**
   * Type
   * @description Zone type: 'full' (Cloudflare DNS), 'partial' (CNAME setup), or 'secondary'
   * @default null
   * @enum {string|null}
   */
  type: "full" | "partial" | "secondary" | null;
  /**
   * Vanity Name Servers
   * @description Custom nameserver domains (Business and Enterprise plans only)
   * @default null
   */
  vanity_name_servers: string[] | null;
  /**
   * Zone Id
   * @description Identifier of the zone to update (max length 32)
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_UPDATE_ZONE tool output.
 */
type CLOUDFLARE_API_KEY_UPDATE_ZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Error details, if any
       */
      errors: {
          /**
           * Code
           * @description Error or message code
           * @default null
           */
          code: number | null;
          /**
           * Message
           * @description Detailed message
           * @default null
           */
          message: string | null;
      }[];
      /**
       * Messages
       * @description Informational messages
       */
      messages: {
          /**
           * Code
           * @description Error or message code
           * @default null
           */
          code: number | null;
          /**
           * Message
           * @description Detailed message
           * @default null
           */
          message: string | null;
      }[];
      /**
       * Zone
       * @description The updated zone object, or null on error responses
       * @default null
       */
      result: {
          /**
           * Account
           * @description Account information for zone
           * @default null
           */
          account: {
              /**
               * Id
               * @description Account identifier
               */
              id: string;
              /**
               * Name
               * @description Account name
               */
              name: string;
          } | null;
          /**
           * Id
           * @description Zone identifier
           */
          id: string;
          /**
           * Name
           * @description Domain name of the zone
           */
          name: string;
          /**
           * Name Servers
           * @description Cloudflare-assigned nameservers
           * @default null
           */
          name_servers: string[] | null;
          /**
           * Owner
           * @description Owner information for zone
           * @default null
           */
          owner: {
              /**
               * Email
               * @description Owner email address
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description Owner identifier
               */
              id: string;
          } | null;
          /**
           * Paused
           * @description Whether the zone is paused
           * @default null
           */
          paused: boolean | null;
          /**
           * Status
           * @description Current zone status
           * @default null
           */
          status: string | null;
          /**
           * Type
           * @description Zone type
           * @default null
           */
          type: string | null;
          /**
           * Vanity Name Servers
           * @description Custom nameserver domains
           * @default null
           */
          vanity_name_servers: string[] | null;
      } | null;
      /**
       * Success
       * @description True if the operation succeeded
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
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_UPLOAD_FILE_TO_S3 tool input.
 */
type CLOUDFLARE_API_KEY_UPLOAD_FILE_TO_S3_INPUT = {
  /**
   * Content
   * @description Raw content of the file as a string; encoded as UTF-8 when uploaded.
   */
  content?: string;
  /**
   * File Name
   * @description Filename (including extension) to store in R2/S3.
   */
  file_name?: string;
  /**
   * Mimetype
   * @description MIME type of the file.
   * @default text/plain
   */
  mimetype: string;
};

/**
 * Type of CLOUDFLARE_API_KEY's CLOUDFLARE_API_KEY_UPLOAD_FILE_TO_S3 tool output.
 */
type CLOUDFLARE_API_KEY_UPLOAD_FILE_TO_S3_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Mimetype
       * @description MIME type of the uploaded file.
       */
      mimetype: string;
      /**
       * Name
       * @description Original file name.
       */
      name: string;
      /**
       * S3Key
       * @description Key under which the file was stored in the temporary R2/S3 bucket.
       */
      s3key: string;
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
 * Type map of all available tool input types for toolkit "CLOUDFLARE_API_KEY".
 */
export type CLOUDFLARE_API_KEY_TOOL_INPUTS = {
  CREATE_DNS_RECORD: CLOUDFLARE_API_KEY_CREATE_DNS_RECORD_INPUT
  CREATE_LOCKDOWN_RULE: CLOUDFLARE_API_KEY_CREATE_LOCKDOWN_RULE_INPUT
  CREATE_RULESET: CLOUDFLARE_API_KEY_CREATE_RULESET_INPUT
  CREATE_RULE_IN_RULESET: CLOUDFLARE_API_KEY_CREATE_RULE_IN_RULESET_INPUT
  DELETE_DNSSEC: CLOUDFLARE_API_KEY_DELETE_DNSSEC_INPUT
  DELETE_DNS_RECORD: CLOUDFLARE_API_KEY_DELETE_DNS_RECORD_INPUT
  DELETE_RULESET: CLOUDFLARE_API_KEY_DELETE_RULESET_INPUT
  DELETE_RULE_FROM_RULESET: CLOUDFLARE_API_KEY_DELETE_RULE_FROM_RULESET_INPUT
  DELETE_ZONE: CLOUDFLARE_API_KEY_DELETE_ZONE_INPUT
  GET_ENTRYPOINT_RULESET_VERSION: CLOUDFLARE_API_KEY_GET_ENTRYPOINT_RULESET_VERSION_INPUT
  GET_LOCKDOWN_RULE: CLOUDFLARE_API_KEY_GET_LOCKDOWN_RULE_INPUT
  GET_REGIONAL_TIERED_CACHE: CLOUDFLARE_API_KEY_GET_REGIONAL_TIERED_CACHE_INPUT
  GET_RULESET: CLOUDFLARE_API_KEY_GET_RULESET_INPUT
  GET_ZONE_DETAILS: CLOUDFLARE_API_KEY_GET_ZONE_DETAILS_INPUT
  LIST_DNS_RECORDS: CLOUDFLARE_API_KEY_LIST_DNS_RECORDS_INPUT
  LIST_ZONES: CLOUDFLARE_API_KEY_LIST_ZONES_INPUT
  OVERWRITE_DNS_RECORD: CLOUDFLARE_API_KEY_OVERWRITE_DNS_RECORD_INPUT
  RERUN_ZONE_ACTIVATION_CHECK: CLOUDFLARE_API_KEY_RERUN_ZONE_ACTIVATION_CHECK_INPUT
  UPDATE_DNSSEC_STATUS: CLOUDFLARE_API_KEY_UPDATE_DNSSEC_STATUS_INPUT
  UPDATE_LOCKDOWN_RULE: CLOUDFLARE_API_KEY_UPDATE_LOCKDOWN_RULE_INPUT
  UPDATE_RULESET: CLOUDFLARE_API_KEY_UPDATE_RULESET_INPUT
  UPDATE_RULE_IN_RULESET: CLOUDFLARE_API_KEY_UPDATE_RULE_IN_RULESET_INPUT
  UPDATE_ZONE: CLOUDFLARE_API_KEY_UPDATE_ZONE_INPUT
  UPLOAD_FILE_TO_S3: CLOUDFLARE_API_KEY_UPLOAD_FILE_TO_S3_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLOUDFLARE_API_KEY".
 */
export type CLOUDFLARE_API_KEY_TOOL_OUTPUTS = {
  CREATE_DNS_RECORD: CLOUDFLARE_API_KEY_CREATE_DNS_RECORD_OUTPUT
  CREATE_LOCKDOWN_RULE: CLOUDFLARE_API_KEY_CREATE_LOCKDOWN_RULE_OUTPUT
  CREATE_RULESET: CLOUDFLARE_API_KEY_CREATE_RULESET_OUTPUT
  CREATE_RULE_IN_RULESET: CLOUDFLARE_API_KEY_CREATE_RULE_IN_RULESET_OUTPUT
  DELETE_DNSSEC: CLOUDFLARE_API_KEY_DELETE_DNSSEC_OUTPUT
  DELETE_DNS_RECORD: CLOUDFLARE_API_KEY_DELETE_DNS_RECORD_OUTPUT
  DELETE_RULESET: CLOUDFLARE_API_KEY_DELETE_RULESET_OUTPUT
  DELETE_RULE_FROM_RULESET: CLOUDFLARE_API_KEY_DELETE_RULE_FROM_RULESET_OUTPUT
  DELETE_ZONE: CLOUDFLARE_API_KEY_DELETE_ZONE_OUTPUT
  GET_ENTRYPOINT_RULESET_VERSION: CLOUDFLARE_API_KEY_GET_ENTRYPOINT_RULESET_VERSION_OUTPUT
  GET_LOCKDOWN_RULE: CLOUDFLARE_API_KEY_GET_LOCKDOWN_RULE_OUTPUT
  GET_REGIONAL_TIERED_CACHE: CLOUDFLARE_API_KEY_GET_REGIONAL_TIERED_CACHE_OUTPUT
  GET_RULESET: CLOUDFLARE_API_KEY_GET_RULESET_OUTPUT
  GET_ZONE_DETAILS: CLOUDFLARE_API_KEY_GET_ZONE_DETAILS_OUTPUT
  LIST_DNS_RECORDS: CLOUDFLARE_API_KEY_LIST_DNS_RECORDS_OUTPUT
  LIST_ZONES: CLOUDFLARE_API_KEY_LIST_ZONES_OUTPUT
  OVERWRITE_DNS_RECORD: CLOUDFLARE_API_KEY_OVERWRITE_DNS_RECORD_OUTPUT
  RERUN_ZONE_ACTIVATION_CHECK: CLOUDFLARE_API_KEY_RERUN_ZONE_ACTIVATION_CHECK_OUTPUT
  UPDATE_DNSSEC_STATUS: CLOUDFLARE_API_KEY_UPDATE_DNSSEC_STATUS_OUTPUT
  UPDATE_LOCKDOWN_RULE: CLOUDFLARE_API_KEY_UPDATE_LOCKDOWN_RULE_OUTPUT
  UPDATE_RULESET: CLOUDFLARE_API_KEY_UPDATE_RULESET_OUTPUT
  UPDATE_RULE_IN_RULESET: CLOUDFLARE_API_KEY_UPDATE_RULE_IN_RULESET_OUTPUT
  UPDATE_ZONE: CLOUDFLARE_API_KEY_UPDATE_ZONE_OUTPUT
  UPLOAD_FILE_TO_S3: CLOUDFLARE_API_KEY_UPLOAD_FILE_TO_S3_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLOUDFLARE_API_KEY toolkit.
 */
export const CLOUDFLARE_API_KEY = {
  slug: "cloudflare_api_key",
  tools: {
    /**
     * Tool to create a new DNS record in a Cloudflare zone. Use when you need to add a record (A, CNAME, TXT, MX, etc.) to a specified zone.
     */
    CREATE_DNS_RECORD: "CLOUDFLARE_API_KEY_CREATE_DNS_RECORD",
    /**
     * Tool to create a Zone Lockdown rule. Use when you need to restrict access to specific URL patterns to defined IPs/CIDR ranges. Use after confirming zone_id.
     */
    CREATE_LOCKDOWN_RULE: "CLOUDFLARE_API_KEY_CREATE_LOCKDOWN_RULE",
    /**
     * Tool to create an account- or zone-scoped ruleset. Use after defining your ruleset details and selecting the correct scope.
     */
    CREATE_RULESET: "CLOUDFLARE_API_KEY_CREATE_RULESET",
    /**
     * Tool to add a rule to an existing ruleset. Use when you need to append or insert a new rule in a Cloudflare ruleset.
     */
    CREATE_RULE_IN_RULESET: "CLOUDFLARE_API_KEY_CREATE_RULE_IN_RULESET",
    /**
     * Tool to delete DNSSEC records for a zone. Use after disabling DNSSEC at the registrar to remove DNSSEC configuration.
     */
    DELETE_DNSSEC: "CLOUDFLARE_API_KEY_DELETE_DNSSEC",
    /**
     * Tool to delete a DNS record. Use when you need to remove a specific DNS record from a zone after confirming both zone and record IDs.
     */
    DELETE_DNS_RECORD: "CLOUDFLARE_API_KEY_DELETE_DNS_RECORD",
    /**
     * Tool to delete all versions of a ruleset. Use when you need to remove a ruleset from an account or zone after confirming no references exist.
     */
    DELETE_RULESET: "CLOUDFLARE_API_KEY_DELETE_RULESET",
    /**
     * Tool to delete a specific rule from a ruleset. Use when you need to remove an outdated or incorrect rule from an account or zone ruleset after confirming IDs.
     */
    DELETE_RULE_FROM_RULESET: "CLOUDFLARE_API_KEY_DELETE_RULE_FROM_RULESET",
    /**
     * Tool to delete an existing zone. Use after confirming the zone_id to permanently remove the zone.
     */
    DELETE_ZONE: "CLOUDFLARE_API_KEY_DELETE_ZONE",
    /**
     * Tool to get a specific version of an entry point ruleset. Use after determining the ruleset phase and version.
     */
    GET_ENTRYPOINT_RULESET_VERSION: "CLOUDFLARE_API_KEY_GET_ENTRYPOINT_RULESET_VERSION",
    /**
     * Tool to get a Zone Lockdown rule. Use when you need to fetch details of a specific lockdown rule by its ID within a Cloudflare zone.
     */
    GET_LOCKDOWN_RULE: "CLOUDFLARE_API_KEY_GET_LOCKDOWN_RULE",
    /**
     * Tool to get the regional tiered cache setting for a zone. Use when you need to verify if regional tiered cache is enabled for performance optimization after zone activation.
     */
    GET_REGIONAL_TIERED_CACHE: "CLOUDFLARE_API_KEY_GET_REGIONAL_TIERED_CACHE",
    /**
     * Tool to fetch the latest version of a ruleset by ID. Use after you have the ruleset scope and ID.
     */
    GET_RULESET: "CLOUDFLARE_API_KEY_GET_RULESET",
    /**
     * Tool to get details for a specific zone. Use when you need detailed zone metadata by ID.
     */
    GET_ZONE_DETAILS: "CLOUDFLARE_API_KEY_GET_ZONE_DETAILS",
    /**
     * Tool to list DNS records for a given Cloudflare zone.
     */
    LIST_DNS_RECORDS: "CLOUDFLARE_API_KEY_LIST_DNS_RECORDS",
    /**
     * Tool to list, search, sort, and filter Cloudflare zones. Use when you need to retrieve a paginated list of zones available to the authenticated user.
     */
    LIST_ZONES: "CLOUDFLARE_API_KEY_LIST_ZONES",
    /**
     * Tool to completely overwrite a DNS record. Use when you need to replace all record details after confirming record type and name.
     */
    OVERWRITE_DNS_RECORD: "CLOUDFLARE_API_KEY_OVERWRITE_DNS_RECORD",
    /**
     * Tool to trigger a new activation check for a PENDING zone. Use after initial zone creation to revalidate DNS activation. Limited rate: every 5 minutes on paygo/Enterprise or hourly on Free.
     */
    RERUN_ZONE_ACTIVATION_CHECK: "CLOUDFLARE_API_KEY_RERUN_ZONE_ACTIVATION_CHECK",
    /**
     * Tool to update DNSSEC configuration for a zone. Use when you need to enable or disable DNSSEC or adjust DNSSEC options after confirming the zone ID.
     */
    UPDATE_DNSSEC_STATUS: "CLOUDFLARE_API_KEY_UPDATE_DNSSEC_STATUS",
    /**
     * Tool to update a zone lockdown rule. Use when you need to modify the IP or URL settings of an existing Zone Lockdown rule after confirming the rule exists.
     */
    UPDATE_LOCKDOWN_RULE: "CLOUDFLARE_API_KEY_UPDATE_LOCKDOWN_RULE",
    /**
     * Tool to update a Cloudflare ruleset, creating a new version. Use when you need to modify ruleset description or rules list.
     */
    UPDATE_RULESET: "CLOUDFLARE_API_KEY_UPDATE_RULESET",
    /**
     * Tool to update a specific rule in a ruleset. Use when you need to modify a rule's configuration or reorder it after reviewing its current settings.
     */
    UPDATE_RULE_IN_RULESET: "CLOUDFLARE_API_KEY_UPDATE_RULE_IN_RULESET",
    /**
     * Tool to edit a Cloudflare zone. Use when you need to update a single zone property at a time. Ensure only one of paused, type, or vanity_name_servers is provided per call.
     */
    UPDATE_ZONE: "CLOUDFLARE_API_KEY_UPDATE_ZONE",
    /**
     * Tool to upload arbitrary file content to the app’s temporary R2/S3 bucket. Use when you need to stage files for actions requiring FileUploadable.
     */
    UPLOAD_FILE_TO_S3: "CLOUDFLARE_API_KEY_UPLOAD_FILE_TO_S3",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLOUDFLARE_API_KEY".
 */
export type CLOUDFLARE_API_KEY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLOUDFLARE_API_KEY".
 */
export type CLOUDFLARE_API_KEY_TRIGGER_EVENTS = {}
