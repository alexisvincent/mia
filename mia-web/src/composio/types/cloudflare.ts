// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_CREATE_DNS_RECORD tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_CREATE_DNS_RECORD tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_CREATE_LOCKDOWN_RULE tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_CREATE_LOCKDOWN_RULE tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_CREATE_RULESET tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_CREATE_RULESET tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_CREATE_RULE_IN_RULESET tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_CREATE_RULE_IN_RULESET tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_DELETE_DNSSEC tool input.
 */
type CLOUDFLARE_API_KEY_DELETE_DNSSEC_INPUT = {
  /**
   * Zone Id
   * @description Zone identifier to delete DNSSEC for
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_DELETE_DNSSEC tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_DELETE_DNS_RECORD tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_DELETE_DNS_RECORD tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_DELETE_RULESET tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_DELETE_RULESET tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_DELETE_RULE_FROM_RULESET tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_DELETE_RULE_FROM_RULESET tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_DELETE_ZONE tool input.
 */
type CLOUDFLARE_API_KEY_DELETE_ZONE_INPUT = {
  /**
   * Zone Id
   * @description Zone identifier to delete
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_DELETE_ZONE tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_GET_ENTRYPOINT_RULESET_VERSION tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_GET_ENTRYPOINT_RULESET_VERSION tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_GET_LOCKDOWN_RULE tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_GET_LOCKDOWN_RULE tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_GET_REGIONAL_TIERED_CACHE tool input.
 */
type CLOUDFLARE_API_KEY_GET_REGIONAL_TIERED_CACHE_INPUT = {
  /**
   * Zone Id
   * @description Identifier of the Cloudflare zone (max 32 characters)
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_GET_REGIONAL_TIERED_CACHE tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_GET_RULESET tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_GET_RULESET tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_GET_ZONE_DETAILS tool input.
 */
type CLOUDFLARE_API_KEY_GET_ZONE_DETAILS_INPUT = {
  /**
   * Zone Id
   * @description Identifier for the zone (max length 32)
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_GET_ZONE_DETAILS tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_LIST_DNS_RECORDS tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_LIST_DNS_RECORDS tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_LIST_ZONES tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_LIST_ZONES tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_OVERWRITE_DNS_RECORD tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_OVERWRITE_DNS_RECORD tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_RERUN_ZONE_ACTIVATION_CHECK tool input.
 */
type CLOUDFLARE_API_KEY_RERUN_ZONE_ACTIVATION_CHECK_INPUT = {
  /**
   * Zone Id
   * @description Zone identifier (max length 32 characters)
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_RERUN_ZONE_ACTIVATION_CHECK tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_UPDATE_DNSSEC_STATUS tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_UPDATE_DNSSEC_STATUS tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_UPDATE_LOCKDOWN_RULE tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_UPDATE_LOCKDOWN_RULE tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_UPDATE_RULESET tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_UPDATE_RULESET tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_UPDATE_RULE_IN_RULESET tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_UPDATE_RULE_IN_RULESET tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_UPDATE_ZONE tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_UPDATE_ZONE tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_UPLOAD_FILE_TO_S3 tool input.
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
 * Type of CLOUDFLARE's CLOUDFLARE_API_KEY_UPLOAD_FILE_TO_S3 tool output.
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
 * Type of CLOUDFLARE's CLOUDFLARE_BROWSER_RENDERING_CAPTURE_SCREENSHOT tool input.
 */
type CLOUDFLARE_BROWSER_RENDERING_CAPTURE_SCREENSHOT_INPUT = {
  /**
   * Account Id
   * @description Cloudflare account identifier
   */
  account_id?: string;
  /**
   * Cache Ttl
   * @description Cache TTL in seconds (0 disables cache)
   * @default null
   */
  cacheTTL: number | null;
  /**
   * Html
   * @description Raw HTML content to render; required if `url` is unset
   * @default null
   */
  html: string | null;
  /**
   * ScreenshotOptions
   * @description Screenshot options like fullPage or clip
   * @default null
   */
  screenshotOptions: {
      /**
       * Clip
       * @description Clipping region to capture; mutually exclusive with fullPage
       * @default null
       */
      clip: {
          /**
           * Height
           * @description Height of clipping region in pixels
           */
          height: number;
          /**
           * Width
           * @description Width of clipping region in pixels
           */
          width: number;
          /**
           * X
           * @description X coordinate of clipping region in pixels
           */
          x: number;
          /**
           * Y
           * @description Y coordinate of clipping region in pixels
           */
          y: number;
      } | null;
      /**
       * Full Page
       * @description Capture the full scrollable page if True
       * @default false
       */
      fullPage: boolean | null;
  } | null;
  /**
   * Url
   * Format: uri
   * @description URL of the page to capture; required if `html` is unset
   * @default null
   */
  url: string | null;
  /**
   * Viewport
   * @description Viewport dimensions
   * @default null
   */
  viewport: {
      /**
       * Height
       * @description Viewport height in pixels
       */
      height: number;
      /**
       * Width
       * @description Viewport width in pixels
       */
      width: number;
  } | null;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_BROWSER_RENDERING_CAPTURE_SCREENSHOT tool output.
 */
type CLOUDFLARE_BROWSER_RENDERING_CAPTURE_SCREENSHOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Browser Time Ms
       * @description Milliseconds of browser runtime (X-Browser-Ms-Used header)
       * @default null
       */
      browserTimeMs: number | null;
      /**
       * Errors
       * @description Error details if any
       * @default null
       */
      errors: {
          /**
           * Code
           * @description Error code returned by API
           */
          code: number;
          /**
           * Message
           * @description Error message returned by API
           */
          message: string;
      }[] | null;
      /**
       * Image
       * @description Base64-encoded screenshot image data
       */
      image: string;
      /**
       * Status
       * @description True if screenshot operation succeeded
       */
      status: boolean;
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
 * Type of CLOUDFLARE's CLOUDFLARE_BROWSER_RENDERING_LIST_ACCOUNTS tool input.
 */
type CLOUDFLARE_BROWSER_RENDERING_LIST_ACCOUNTS_INPUT = {
  /**
   * Direction
   * @description Sort direction of results. Allowed values: 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  direction: "asc" | "desc" | null;
  /**
   * Name
   * @description Filter accounts by name (partial match)
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number (1-based).
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of accounts per page (5-50).
   * @default 20
   */
  per_page: number | null;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_BROWSER_RENDERING_LIST_ACCOUNTS tool output.
 */
type CLOUDFLARE_BROWSER_RENDERING_LIST_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors if the API call failed
       * @default null
       */
      errors: {
          /**
           * Code
           * @description Error code returned by API
           */
          code: number;
          /**
           * Message
           * @description Error message returned by API
           */
          message: string;
      }[] | null;
      /**
       * Result
       * @description Array of accounts returned by the API
       */
      result: {
          /**
           * Created On
           * Format: date-time
           * @description Timestamp when the account was created
           */
          created_on: string;
          /**
           * Id
           * @description Unique account identifier
           */
          id: string;
          /**
           * ManagedBy
           * @description Information about the parent container
           * @default null
           */
          managed_by: {
              /**
               * Parent Org Id
               * @description ID of the parent organization
               * @default null
               */
              parent_org_id: string | null;
              /**
               * Parent Org Name
               * @description Name of the parent organization
               * @default null
               */
              parent_org_name: string | null;
          } | null;
          /**
           * Name
           * @description Account name
           */
          name: string;
          /**
           * AccountSettings
           * @description Account settings
           * @default null
           */
          settings: {
              /**
               * Abuse Contact Email
               * @description Email for abuse-report notifications
               * @default null
               */
              abuse_contact_email: string | null;
              /**
               * Enforce Twofactor
               * @description Require two-factor authentication for account membership
               * @default null
               */
              enforce_twofactor: boolean | null;
          } | null;
          /**
           * Type
           * @description Type of account
           * @enum {string}
           */
          type: "standard" | "enterprise";
      }[];
      /**
       * Success
       * @description True if API call succeeded
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
 * Type of CLOUDFLARE's CLOUDFLARE_BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS tool input.
 */
type CLOUDFLARE_BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS_INPUT = {
  /**
   * Account Id
   * @description Cloudflare Account ID
   */
  account_id?: string;
  /**
   * Action Timeout
   * @description Max time after load to run actions, in milliseconds (max 300000)
   * @default null
   */
  actionTimeout: number | null;
  /**
   * Cache Ttl
   * @description Optional cache TTL in seconds; default=5; set 0 to disable
   * @default null
   */
  cacheTTL: number | null;
  /**
   * Elements
   * @description List of CSS selectors to scrape
   */
  elements?: {
      /**
       * Selector
       * @description CSS selector to scrape (e.g., 'h1', 'a[href]')
       */
      selector: string;
  }[];
  /**
   * Html
   * @description Inline HTML document to render and scrape
   * @default null
   */
  html: string | null;
  /**
   * Url
   * Format: uri
   * @description Page URL to navigate and scrape
   * @default null
   */
  url: string | null;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS tool output.
 */
type CLOUDFLARE_BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error details if the request failed
       * @default null
       */
      errors: {
          /**
           * Code
           * @description Error code returned by Cloudflare API
           */
          code: number;
          /**
           * Message
           * @description Error message returned by Cloudflare API
           */
          message: string;
      }[] | null;
      /**
       * Result
       * @description Results for each requested selector
       */
      result: {
          /**
           * Results
           * @description Scraping results per matched element
           */
          results: {
              /**
               * Attributes
               * @description List of attributes extracted from the element
               */
              attributes: {
                  /**
                   * Name
                   * @description Attribute name
                   */
                  name: string;
                  /**
                   * Value
                   * @description Attribute value
                   */
                  value: string;
              }[];
              /**
               * Height
               * @description Height of the element in pixels
               */
              height: number;
              /**
               * Html
               * @description Inner HTML of the element
               */
              html: string;
              /**
               * Left
               * @description Left position of the element relative to viewport
               */
              left: number;
              /**
               * Text
               * @description Inner text of the element
               */
              text: string;
              /**
               * Top
               * @description Top position of the element relative to viewport
               */
              top: number;
              /**
               * Width
               * @description Width of the element in pixels
               */
              width: number;
          }[];
          /**
           * Selector
           * @description CSS selector used for scraping
           */
          selector: string;
      }[];
      /**
       * Status
       * @description Indicates success or failure of the request
       */
      status: boolean;
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
 * Type of CLOUDFLARE's CLOUDFLARE_BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT tool input.
 */
type CLOUDFLARE_BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT_INPUT = {
  /**
   * Account Id
   * @description Cloudflare account identifier
   */
  account_id?: string;
  /**
   * Action Timeout
   * @description Max time in ms for post-load actions
   * @default null
   */
  actionTimeout: number | null;
  /**
   * Add Script Tag
   * @description Scripts to inject into the page
   * @default null
   */
  addScriptTag: {
      /**
       * Content
       * @description Inline JavaScript content
       * @default null
       */
      content: string | null;
      /**
       * Id
       * @description ID for injected <script>
       * @default null
       */
      id: string | null;
      /**
       * Type
       * @description MIME type of script
       * @default null
       */
      type: string | null;
      /**
       * Url
       * Format: uri
       * @description URL of external script to inject
       * @default null
       */
      url: string | null;
  }[] | null;
  /**
   * Add Style Tag
   * @description Styles to inject into the page
   * @default null
   */
  addStyleTag: {
      /**
       * Content
       * @description Inline CSS content
       * @default null
       */
      content: string | null;
      /**
       * Url
       * Format: uri
       * @description URL of external stylesheet to inject
       * @default null
       */
      url: string | null;
  }[] | null;
  /**
   * Allow Request Pattern
   * @description Regex patterns to allow requests
   * @default null
   */
  allowRequestPattern: string[] | null;
  /**
   * Allow Resource Types
   * @description Allowed resource types
   * @default null
   */
  allowResourceTypes: string[] | null;
  /**
   * HttpAuth
   * @description HTTP authentication credentials
   * @default null
   */
  authenticate: {
      /**
       * Password
       * @description HTTP authentication password
       */
      password: string;
      /**
       * Username
       * @description HTTP authentication username
       */
      username: string;
  } | null;
  /**
   * Best Attempt
   * @description Continue even if certain events fail
   * @default null
   */
  bestAttempt: boolean | null;
  /**
   * Cache Ttl
   * @description Cache TTL in seconds (0 disables caching, max 86400)
   * @default null
   */
  cacheTTL: number | null;
  /**
   * Cookies
   * @description List of cookies to set before navigation
   * @default null
   */
  cookies: {
      /**
       * Domain
       * @description Cookie domain
       * @default null
       */
      domain: string | null;
      /**
       * Expires
       * @description Expiration UNIX timestamp
       * @default null
       */
      expires: number | null;
      /**
       * Http Only
       * @description HTTP only flag
       * @default null
       */
      httpOnly: boolean | null;
      /**
       * Name
       * @description Cookie name
       */
      name: string;
      /**
       * Partition Key
       * @description Cookie partition key
       * @default null
       */
      partitionKey: string | null;
      /**
       * Path
       * @description Cookie path
       * @default null
       */
      path: string | null;
      /**
       * Priority
       * @description Cookie priority
       * @default null
       * @enum {string|null}
       */
      priority: "Low" | "Medium" | "High" | null;
      /**
       * Same Party
       * @description SameParty flag
       * @default null
       */
      sameParty: boolean | null;
      /**
       * Same Site
       * @description SameSite policy
       * @default null
       * @enum {string|null}
       */
      sameSite: "Strict" | "Lax" | "None" | null;
      /**
       * Secure
       * @description Secure flag
       * @default null
       */
      secure: boolean | null;
      /**
       * Source Port
       * @description Source port
       * @default null
       */
      sourcePort: number | null;
      /**
       * Source Scheme
       * @description Source scheme
       * @default null
       * @enum {string|null}
       */
      sourceScheme: "Unset" | "NonSecure" | "Secure" | null;
      /**
       * Url
       * Format: uri
       * @description Associated URL
       * @default null
       */
      url: string | null;
      /**
       * Value
       * @description Cookie value
       */
      value: string;
  }[] | null;
  /**
   * Emulate Media Type
   * @description Emulate CSS media type (e.g., 'print')
   * @default null
   */
  emulateMediaType: string | null;
  /**
   * GotoOptions
   * @description Navigation settings before snapshot
   * @default null
   */
  gotoOptions: {
      /**
       * Referer
       * @description Referer header to use during navigation
       * @default null
       */
      referer: string | null;
      /**
       * Referrer Policy
       * @description Referrer policy (e.g., 'no-referrer', 'origin-when-cross-origin')
       * @default null
       */
      referrerPolicy: string | null;
      /**
       * Timeout
       * @description Maximum navigation time in milliseconds
       * @default 30000
       */
      timeout: number;
      /**
       * Wait Until
       * @description When to consider navigation succeeded
       * @default domcontentloaded
       * @enum {string|null}
       */
      waitUntil: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" | null;
  } | null;
  /**
   * Html
   * @description Raw HTML to render instead of URL
   * @default null
   */
  html: string | null;
  /**
   * Reject Request Pattern
   * @description Regex patterns to block requests
   * @default null
   */
  rejectRequestPattern: string[] | null;
  /**
   * Reject Resource Types
   * @description Blocked resource types
   * @default null
   */
  rejectResourceTypes: string[] | null;
  /**
   * ScreenshotOptions
   * @description Options controlling screenshot capture
   * @default null
   */
  screenshotOptions: {
      /**
       * Capture Beyond Viewport
       * @description Capture beyond the viewport bounds
       * @default null
       */
      captureBeyondViewport: boolean | null;
      /**
       * Clip
       * @description Clipping region for screenshot
       * @default null
       */
      clip: {
          /**
           * Height
           * @description Height of clipping region
           */
          height: number;
          /**
           * Width
           * @description Width of clipping region
           */
          width: number;
          /**
           * X
           * @description X-coordinate of clipping region
           */
          x: number;
          /**
           * Y
           * @description Y-coordinate of clipping region
           */
          y: number;
      } | null;
      /**
       * Encoding
       * @description Encoding of the returned image
       * @default binary
       * @enum {string}
       */
      encoding: "binary" | "base64";
      /**
       * From Surface
       * @description Prefer GPU surface for screenshot
       * @default null
       */
      fromSurface: boolean | null;
      /**
       * Full Page
       * @description Capture the full scrollable page
       * @default null
       */
      fullPage: boolean | null;
      /**
       * Omit Background
       * @description Hide default white background
       * @default null
       */
      omitBackground: boolean | null;
      /**
       * Optimize For Speed
       * @description Optimize capture speed over quality
       * @default null
       */
      optimizeForSpeed: boolean | null;
      /**
       * Quality
       * @description Quality (0-100) for jpeg/webp
       * @default null
       */
      quality: number | null;
      /**
       * Scroll Page
       * @description Scroll through the page while capturing
       * @default null
       */
      scrollPage: boolean | null;
      /**
       * Selector
       * @description CSS selector to capture only the element
       * @default null
       */
      selector: string | null;
      /**
       * Type
       * @description Image format of the screenshot
       * @default png
       * @enum {string}
       */
      type: "png" | "jpeg" | "webp";
  } | null;
  /**
   * Set Extra Http Headers
   * @description Additional HTTP headers for navigation
   * @default null
   */
  setExtraHTTPHeaders: {
      [key: string]: string;
  } | null;
  /**
   * Set Java Script Enabled
   * @description Enable or disable JavaScript execution
   * @default null
   */
  setJavaScriptEnabled: boolean | null;
  /**
   * Url
   * Format: uri
   * @description Page URL to navigate to (must set url or html)
   * @default null
   */
  url: string | null;
  /**
   * User Agent
   * @description Custom user agent string
   * @default null
   */
  userAgent: string | null;
  /**
   * Viewport
   * @description Viewport dimensions and device emulation
   * @default null
   */
  viewport: {
      /**
       * Device Scale Factor
       * @description Device scale factor
       * @default null
       */
      deviceScaleFactor: number | null;
      /**
       * Has Touch
       * @description Whether viewport supports touch events
       * @default null
       */
      hasTouch: boolean | null;
      /**
       * Height
       * @description Viewport height in pixels
       * @default 1080
       */
      height: number;
      /**
       * Is Landscape
       * @description Landscape orientation if true
       * @default null
       */
      isLandscape: boolean | null;
      /**
       * Is Mobile
       * @description Mobile device emulation if true
       * @default null
       */
      isMobile: boolean | null;
      /**
       * Width
       * @description Viewport width in pixels
       * @default 1920
       */
      width: number;
  } | null;
  /**
   * WaitForSelector
   * @description Wait for an element before snapshot
   * @default null
   */
  waitForSelector: {
      /**
       * Hidden
       * @description Resolve when element is hidden
       * @default null
       */
      hidden: boolean | null;
      /**
       * Selector
       * @description CSS selector to wait for
       */
      selector: string;
      /**
       * Timeout
       * @description Max wait time in ms for selector
       * @default null
       */
      timeout: number | null;
      /**
       * Visible
       * @description Resolve when element is visible
       * @default null
       */
      visible: boolean | null;
  } | null;
  /**
   * Wait For Timeout
   * @description Wait time in ms before proceeding
   * @default null
   */
  waitForTimeout: number | null;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT tool output.
 */
type CLOUDFLARE_BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API, if any
       * @default null
       */
      errors: {
          [key: string]: unknown;
      }[] | null;
      /**
       * SnapshotResult
       * @description Snapshot result payload (present on success)
       * @default null
       */
      result: {
          /**
           * Content
           * @description Rendered HTML content of the page
           */
          content: string;
          /**
           * Screenshot
           * @description Base64-encoded screenshot image
           */
          screenshot: string;
      } | null;
      /**
       * Status
       * @description True if the snapshot was captured successfully
       */
      status: boolean;
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
 * Type of CLOUDFLARE's CLOUDFLARE_CREATE_DNS_RECORD tool input.
 */
type CLOUDFLARE_CREATE_DNS_RECORD_INPUT = {
  /**
   * Comment
   * @description Human-readable comment for the DNS record
   * @default null
   */
  comment: string | null;
  /**
   * Content
   * @description DNS record content (e.g., IP for A records)
   */
  content?: string;
  /**
   * Data
   * @description Additional data object for record types like SRV, LOC, or CAA
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description DNS record name (e.g., example.com or www.example.com)
   */
  name?: string;
  /**
   * Priority
   * @description Priority for MX, SRV, and URI records; required for those types
   * @default null
   */
  priority: number | null;
  /**
   * Proxied
   * @description Whether the record is receiving Cloudflare performance and security benefits
   * @default null
   */
  proxied: boolean | null;
  /**
   * Tags
   * @description List of tags to associate with the record
   * @default null
   */
  tags: string[] | null;
  /**
   * Ttl
   * @description Time to live in seconds; minimum 1. Use 1 for automatic TTL
   * @default null
   */
  ttl: number | null;
  /**
   * Type
   * @description DNS record type
   * @enum {string}
   */
  type?: "A" | "AAAA" | "CNAME" | "MX" | "TXT" | "SRV" | "LOC" | "CAA";
  /**
   * Zone Identifier
   * Format: uuid
   * @description Zone identifier (UUID) where the DNS record will be created
   */
  zone_identifier?: unknown;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_CREATE_DNS_RECORD tool output.
 */
type CLOUDFLARE_CREATE_DNS_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API, if any
       */
      errors: {
          /**
           * Code
           * @description Error code returned by the API
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
      }[];
      /**
       * Messages
       * @description Informational messages from the API
       */
      messages: {
          /**
           * Code
           * @description Optional status or informational message code
           * @default null
           */
          code: number | null;
          /**
           * Message
           * @description Optional status or informational message content
           * @default null
           */
          message: string | null;
      }[];
      /**
       * Result
       * @description The created DNS record details
       */
      result: {
          /**
           * Comment
           * @description Optional comment for the DNS record
           * @default null
           */
          comment: string | null;
          /**
           * Content
           * @description DNS record content
           */
          content: string;
          /**
           * Created On
           * @description Timestamp when the record was created
           */
          created_on: string;
          /**
           * Data
           * @description Additional data for certain record types
           * @default null
           */
          data: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Unique identifier for the DNS record
           */
          id: string;
          /**
           * Locked
           * @description Whether the record is locked from changes
           * @default null
           */
          locked: boolean | null;
          /**
           * Meta
           * @description Metadata about the DNS record
           * @default null
           */
          meta: {
              [key: string]: unknown;
          } | null;
          /**
           * Modified On
           * @description Timestamp when the record was last modified
           */
          modified_on: string;
          /**
           * Name
           * @description DNS record name
           */
          name: string;
          /**
           * Priority
           * @description Priority for MX, SRV, and URI records; null if not applicable
           * @default null
           */
          priority: number | null;
          /**
           * Proxied
           * @description Whether the record is proxied through Cloudflare
           */
          proxied: boolean;
          /**
           * Tags
           * @description List of user-defined tags associated with the record
           * @default null
           */
          tags: string[] | null;
          /**
           * Ttl
           * @description Time to live in seconds for the DNS record
           */
          ttl: number;
          /**
           * Type
           * @description DNS record type
           */
          type: string;
          /**
           * Zone Id
           * @description Identifier of the zone this record belongs to
           * @default null
           */
          zone_id: string | null;
          /**
           * Zone Name
           * @description Name of the zone this record belongs to
           * @default null
           */
          zone_name: string | null;
      };
      /**
       * Success
       * @description Indicates whether the API call succeeded
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
 * Type of CLOUDFLARE's CLOUDFLARE_CREATE_LIST tool input.
 */
type CLOUDFLARE_CREATE_LIST_INPUT = {
  /**
   * Account Id
   * @description Cloudflare account identifier
   */
  account_id?: string;
  /**
   * Description
   * @description Optional description of the list.
   * @default null
   */
  description: string | null;
  /**
   * Kind
   * @description Type of the list. One of 'ip', 'redirect', 'hostname', or 'asn'.
   * @enum {string}
   */
  kind?: "ip" | "redirect" | "hostname" | "asn";
  /**
   * Name
   * @description Informative name for the list. Use this name in filter and rule expressions.
   */
  name?: string;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_CREATE_LIST tool output.
 */
type CLOUDFLARE_CREATE_LIST_OUTPUT = {
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
           * @description Error code returned by the API.
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to documentation describing the error.
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
          /**
           * ResponseInfoSource
           * @description Source location of the error.
           * @default null
           */
          source: {
              /**
               * Pointer
               * @description JSON pointer to the source of the error.
               * @default null
               */
              pointer: string | null;
          } | null;
      }[];
      /**
       * Messages
       * @description List of informational messages returned by the API.
       */
      messages: {
          /**
           * Code
           * @description Error code returned by the API.
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to documentation describing the error.
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
          /**
           * ResponseInfoSource
           * @description Source location of the error.
           * @default null
           */
          source: {
              /**
               * Pointer
               * @description JSON pointer to the source of the error.
               * @default null
               */
              pointer: string | null;
          } | null;
      }[];
      /**
       * Result
       * @description Details of the created WAF list.
       */
      result: {
          /**
           * Created On
           * @description Timestamp (UTC) when the list was created.
           */
          created_on: string;
          /**
           * Description
           * @description Description of the list.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the created list.
           */
          id: string;
          /**
           * Kind
           * @description Type of the list.
           * @enum {string}
           */
          kind: "ip" | "redirect" | "hostname" | "asn";
          /**
           * Name
           * @description Name of the list.
           */
          name: string;
          /**
           * Num Items
           * @description Number of items in the list.
           */
          num_items: number;
          /**
           * Num Referencing Filters
           * @description Number of filters referencing this list.
           */
          num_referencing_filters: number;
      };
      /**
       * Success
       * @description Indicates if the API call was successful.
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
 * Type of CLOUDFLARE's CLOUDFLARE_CREATE_ZONE tool input.
 */
type CLOUDFLARE_CREATE_ZONE_INPUT = {
  /**
   * Account
   * @description Container for account ID
   */
  account?: {
      /**
       * Id
       * @description Account identifier under which to create the zone
       */
      id: string;
  };
  /**
   * Jump Start
   * @description Auto-import existing DNS records. Ignored for partial zones.
   * @default false
   */
  jump_start: boolean | null;
  /**
   * Name
   * @description The domain name for the new zone
   */
  name?: string;
  /**
   * Type
   * @description Zone setup mode: 'full' or 'partial'
   * @default full
   * @enum {string}
   */
  type: "full" | "partial";
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_CREATE_ZONE tool output.
 */
type CLOUDFLARE_CREATE_ZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors, if any
       */
      errors: {
          [key: string]: unknown;
      }[];
      /**
       * Messages
       * @description Additional messages from the API
       */
      messages: {
          [key: string]: unknown;
      }[];
      /**
       * Result
       * @description Details of the created zone
       */
      result: {
          /** Account */
          account: {
              /**
               * Name
               * @description Account name
               */
              name: string;
          };
          /**
           * Activated On
           * Format: date-time
           */
          activated_on: string | null;
          /**
           * Created On
           * Format: date-time
           */
          created_on: string;
          /** Development Mode */
          development_mode: number;
          /** Id */
          id: string;
          /** Meta */
          meta: {
              /**
               * Custom Certificate Quota
               * @description Quota for custom certificates
               */
              custom_certificate_quota: number;
              /**
               * Page Rule Quota
               * @description Quota for page rules
               */
              page_rule_quota: number;
              /**
               * Phishing Detected
               * @description Whether phishing was detected
               */
              phishing_detected: boolean;
              /**
               * Step
               * @description DNS scan step reached by Cloudflare
               */
              step: number;
              /**
               * Wildcard Available
               * @description Whether wildcard records are available
               * @default null
               */
              wildcard_available: boolean | null;
              /**
               * Wildcard Proxiable
               * @description Whether wildcard records can be proxied
               * @default null
               */
              wildcard_proxiable: boolean | null;
          };
          /**
           * Modified On
           * Format: date-time
           */
          modified_on: string;
          /** Name */
          name: string;
          /** Name Servers */
          name_servers: string[];
          /** Original Dnshost */
          original_dnshost: string | null;
          /** Original Name Servers */
          original_name_servers: string[] | null;
          /** Original Registrar */
          original_registrar: string | null;
          /** Owner */
          owner: {
              /**
               * Email
               * @description Owner email
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description Owner identifier
               * @default null
               */
              id: string | null;
              /**
               * Type
               * @description Type of the owner, e.g., 'user' or 'organization'
               */
              type: string;
          };
          /** Paused */
          paused: boolean;
          /** Permissions */
          permissions: string[];
          /** Plan */
          plan: {
              /**
               * Can Subscribe
               * @description Whether subscription is available
               */
              can_subscribe: boolean;
              /**
               * Currency
               * @description Currency code for the plan
               */
              currency: string;
              /**
               * Frequency
               * @description Billing frequency, e.g., 'monthly'
               */
              frequency: string;
              /**
               * Id
               * @description Plan identifier
               */
              id: string;
              /**
               * Is Subscribed
               * @description Subscription status for the plan
               */
              is_subscribed: boolean;
              /**
               * Legacy Id
               * @description Legacy plan identifier if any
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
               * @description Plan price in cents or units
               */
              price: number;
          };
          /**
           * ZonePlan
           * @default null
           */
          plan_pending: {
              /**
               * Can Subscribe
               * @description Whether subscription is available
               */
              can_subscribe: boolean;
              /**
               * Currency
               * @description Currency code for the plan
               */
              currency: string;
              /**
               * Frequency
               * @description Billing frequency, e.g., 'monthly'
               */
              frequency: string;
              /**
               * Id
               * @description Plan identifier
               */
              id: string;
              /**
               * Is Subscribed
               * @description Subscription status for the plan
               */
              is_subscribed: boolean;
              /**
               * Legacy Id
               * @description Legacy plan identifier if any
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
               * @description Plan price in cents or units
               */
              price: number;
          } | null;
          /** Status */
          status: string;
          /** Type */
          type: string;
      };
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
 * Type of CLOUDFLARE's CLOUDFLARE_DELETE_DNS_RECORD tool input.
 */
type CLOUDFLARE_DELETE_DNS_RECORD_INPUT = {
  /**
   * Identifier
   * @description Identifier of the DNS record to delete (e.g., '372e67954025e0ba6aaa6d586b9e0b59').
   */
  identifier?: unknown;
  /**
   * Zone Identifier
   * @description Identifier of the DNS zone (e.g., '023e105f4ecef8ad9ca31a8372d0c353').
   */
  zone_identifier?: unknown;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_DELETE_DNS_RECORD tool output.
 */
type CLOUDFLARE_DELETE_DNS_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors returned by the API, if any.
       */
      errors?: {
          /**
           * Code
           * @description Error code returned by the API.
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
      }[];
      /**
       * Messages
       * @description List of informational messages returned by the API.
       */
      messages?: {
          /**
           * Code
           * @description Message code returned by the API.
           */
          code: number;
          /**
           * Message
           * @description Informational message from the API.
           */
          message: string;
      }[];
      /**
       * DeleteDnsRecordResult
       * @description Empty result for delete DNS record, always an empty JSON object.
       * @default null
       */
      result: Record<string, never> | null;
      /**
       * Success
       * @description Whether the deletion was successful.
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
 * Type of CLOUDFLARE's CLOUDFLARE_DELETE_LIST tool input.
 */
type CLOUDFLARE_DELETE_LIST_INPUT = {
  /**
   * Account Id
   * @description Cloudflare account identifier
   */
  account_id?: string;
  /**
   * List Id
   * @description Unique identifier of the WAF list to delete
   */
  list_id?: string;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_DELETE_LIST tool output.
 */
type CLOUDFLARE_DELETE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors, if any
       */
      errors: {
          [key: string]: unknown;
      }[];
      /**
       * Messages
       * @description Additional messages from API
       */
      messages: {
          [key: string]: unknown;
      }[];
      /**
       * Result
       * @description Details of the deleted list
       */
      result: {
          /**
           * Id
           * @description ID of the deleted list
           */
          id: string;
      };
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
 * Type of CLOUDFLARE's CLOUDFLARE_DELETE_ZONE tool input.
 */
type CLOUDFLARE_DELETE_ZONE_INPUT = {
  /**
   * Zone Identifier
   * @description Identifier of the zone to delete (32-character hex string).
   */
  zone_identifier?: unknown;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_DELETE_ZONE tool output.
 */
type CLOUDFLARE_DELETE_ZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors returned by the API, if any.
       */
      errors?: {
          /**
           * Code
           * @description Error code returned by the API.
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API.
           */
          message: string;
      }[];
      /**
       * Messages
       * @description List of informational messages returned by the API.
       */
      messages?: {
          /**
           * Code
           * @description Informational message code returned by the API.
           */
          code: number;
          /**
           * Message
           * @description Informational message text returned by the API.
           */
          message: string;
      }[];
      /**
       * DeleteZoneResponseResult
       * @description Result object for delete zone action.
       * @default null
       */
      result: {
          /**
           * Id
           * @description Identifier of the deleted zone.
           */
          id: string;
      } | null;
      /**
       * Success
       * @description Whether the deletion was successful.
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
 * Type of CLOUDFLARE's CLOUDFLARE_GET_LISTS tool input.
 */
type CLOUDFLARE_GET_LISTS_INPUT = {
  /**
   * Account Id
   * @description Cloudflare account identifier (UUID)
   */
  account_id?: string;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_GET_LISTS tool output.
 */
type CLOUDFLARE_GET_LISTS_OUTPUT = {
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
           * @description Error code returned by the API
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to documentation describing the error
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
          /**
           * ResponseInfoSource
           * @description Source location of the error
           * @default null
           */
          source: {
              /**
               * Pointer
               * @description JSON pointer to the source of the error
               * @default null
               */
              pointer: string | null;
          } | null;
      }[];
      /**
       * Messages
       * @description List of messages returned by the API
       */
      messages: {
          /**
           * Code
           * @description Error code returned by the API
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to documentation describing the error
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
          /**
           * ResponseInfoSource
           * @description Source location of the error
           * @default null
           */
          source: {
              /**
               * Pointer
               * @description JSON pointer to the source of the error
               * @default null
               */
              pointer: string | null;
          } | null;
      }[];
      /**
       * Result
       * @description List of WAF lists
       */
      result: {
          /**
           * Created On
           * @description Timestamp (RFC3339) when the list was created
           */
          created_on: string;
          /**
           * Description
           * @description Description of the WAF list
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the WAF list
           */
          id: string;
          /**
           * Kind
           * @description Type of the WAF list
           * @enum {string}
           */
          kind: "ip" | "hostname" | "asn" | "redirect";
          /**
           * Modified On
           * @description Timestamp (RFC3339) when the list was last modified
           */
          modified_on: string;
          /**
           * Name
           * @description Name of the WAF list
           */
          name: string;
          /**
           * Num Items
           * @description Number of items in the WAF list
           */
          num_items: number;
          /**
           * Num Referencing Filters
           * @description Number of filters referencing this list
           */
          num_referencing_filters: number;
      }[];
      /**
       * Success
       * @description Indicates if the API call was successful
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
 * Type of CLOUDFLARE's CLOUDFLARE_LIST_ACCOUNTS tool input.
 */
type CLOUDFLARE_LIST_ACCOUNTS_INPUT = {
  /**
   * Direction
   * @description Direction to order results: 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  direction: "asc" | "desc" | null;
  /**
   * Name
   * @description Filter accounts by name
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number to retrieve, starting from 1
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page, between 5 and 50
   * @default 20
   */
  per_page: number | null;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_LIST_ACCOUNTS tool output.
 */
type CLOUDFLARE_LIST_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors, if any
       */
      errors: {
          /**
           * Code
           * @description Error code returned by the API
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to relevant documentation for this error
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
      }[];
      /**
       * Messages
       * @description Additional messages from the API
       */
      messages: {
          /**
           * Code
           * @description Message code returned by the API
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to relevant documentation for this message
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Message text returned by the API
           */
          message: string;
      }[];
      /**
       * Result
       * @description List of account summaries
       */
      result: {
          /**
           * Created On
           * Format: date-time
           * @description Timestamp when the account was created
           */
          created_on: string;
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
      }[];
      /**
       * Result Info
       * @description Pagination information
       */
      result_info: {
          /**
           * Count
           * @description Number of results in this page
           */
          count: number;
          /**
           * Page
           * @description Current page number
           */
          page: number;
          /**
           * Per Page
           * @description Number of results per page
           */
          per_page: number;
          /**
           * Total Count
           * @description Total number of available results
           */
          total_count: number;
      };
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
 * Type of CLOUDFLARE's CLOUDFLARE_LIST_ACCOUNT_MEMBERS tool input.
 */
type CLOUDFLARE_LIST_ACCOUNT_MEMBERS_INPUT = {
  /**
   * Account Id
   * @description Cloudflare account identifier (UUID)
   */
  account_id?: string;
  /**
   * Direction
   * @description Order of results: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  direction: "asc" | "desc" | null;
  /**
   * Order
   * @description Field to sort by: 'user.first_name', 'user.last_name', 'user.email', or 'status'.
   * @default null
   * @enum {string|null}
   */
  order: "user.first_name" | "user.last_name" | "user.email" | "status" | null;
  /**
   * Page
   * @description Page number (min 1).
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Results per page (min 5, max 50).
   * @default null
   */
  per_page: number | null;
  /**
   * Status
   * @description Filter by member status: 'accepted', 'pending', or 'rejected'.
   * @default null
   * @enum {string|null}
   */
  status: "accepted" | "pending" | "rejected" | null;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_LIST_ACCOUNT_MEMBERS tool output.
 */
type CLOUDFLARE_LIST_ACCOUNT_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors if any
       */
      errors: {
          /**
           * Code
           * @description API error code
           */
          code: number;
          /**
           * Message
           * @description Error message
           */
          message: string;
      }[];
      /**
       * Messages
       * @description Messages if any
       */
      messages: {
          /**
           * Code
           * @description Message code
           */
          code: number;
          /**
           * Message
           * @description Additional info message
           */
          message: string;
      }[];
      /**
       * Result
       * @description List of members
       */
      result: {
          /**
           * Created On
           * @description Timestamp when added to account
           * @default null
           */
          created_on: string | null;
          /**
           * Id
           * @description Member unique identifier
           */
          id: string;
          /**
           * Modified On
           * @description Timestamp of last update
           * @default null
           */
          modified_on: string | null;
          /**
           * Roles
           * @description Assigned roles for member
           */
          roles: {
              /**
               * Id
               * @description Role unique identifier
               */
              id: string;
              /**
               * Name
               * @description Role name
               */
              name: string;
          }[];
          /**
           * Status
           * @description Membership status in the account
           */
          status: string;
          /**
           * User
           * @description Associated user details
           */
          user: {
              /**
               * Email
               * @description User email address
               */
              email: string;
              /**
               * First Name
               * @description User first name
               */
              first_name: string;
              /**
               * Id
               * @description User unique identifier
               */
              id: string;
              /**
               * Last Name
               * @description User last name
               * @default null
               */
              last_name: string | null;
              /**
               * Two Factor Authentication Enabled
               * @description Two factor authentication enabled flag
               * @default null
               */
              two_factor_authentication_enabled: boolean | null;
          };
      }[];
      /**
       * Result Info
       * @description Pagination details
       */
      result_info: {
          /**
           * Count
           * @description Number of results on this page
           */
          count: number;
          /**
           * Page
           * @description Current page number
           */
          page: number;
          /**
           * Per Page
           * @description Results per page
           */
          per_page: number;
          /**
           * Total Count
           * @description Total number of results
           */
          total_count: number;
          /**
           * Total Pages
           * @description Total available pages
           */
          total_pages: number;
      };
      /**
       * Success
       * @description API call success status
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
 * Type of CLOUDFLARE's CLOUDFLARE_LIST_FIREWALL_RULES tool input.
 */
type CLOUDFLARE_LIST_FIREWALL_RULES_INPUT = {
  /**
   * Direction
   * @description Sort direction: 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  direction: "asc" | "desc" | null;
  /**
   * Match
   * @description Match criteria when multiple filters provided: 'all' or 'any'
   * @default null
   * @enum {string|null}
   */
  match: "all" | "any" | null;
  /**
   * Order
   * @description Field to order results by (e.g., 'priority', 'created_on')
   * @default null
   */
  order: string | null;
  /**
   * Page
   * @description Page number for paginated results, starting from 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page (1-1000)
   * @default null
   */
  per_page: number | null;
  /**
   * Zone Id
   * Format: uuid
   * @description UUID of the zone to list firewall rules for
   */
  zone_id?: unknown;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_LIST_FIREWALL_RULES tool output.
 */
type CLOUDFLARE_LIST_FIREWALL_RULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API, if any
       */
      errors: {
          /**
           * Code
           * @description Error code returned by the API
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to API documentation for the error
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
      }[];
      /**
       * Messages
       * @description Informational messages returned by the API
       */
      messages: {
          /**
           * Code
           * @description Message code returned by the API
           * @default null
           */
          code: number | null;
          /**
           * Documentation Url
           * @description URL to API documentation for the message
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Informational message returned by the API
           * @default null
           */
          message: string | null;
      }[];
      /**
       * Result
       * @description List of firewall rules
       */
      result: {
          /**
           * Action
           * @description Action executed when the rule matches
           */
          action: string;
          /**
           * Action Parameters
           * @description Additional parameters for the action
           * @default null
           */
          action_parameters: {
              [key: string]: unknown;
          } | null;
          /**
           * Created On
           * @description Timestamp when the rule was created (ISO 8601)
           */
          created_on: string;
          /**
           * Description
           * @description Description of the firewall rule
           * @default null
           */
          description: string | null;
          /**
           * Filter
           * @description Filter configuration for the rule
           */
          filter: {
              /**
               * Expression
               * @description Cloudflare firewall expression to match
               */
              expression: string;
              /**
               * Paused
               * @description Whether the filter is paused (rule disabled)
               */
              paused: boolean;
          };
          /**
           * Id
           * @description Unique identifier of the firewall rule
           */
          id: string;
          /**
           * Modified On
           * @description Timestamp when the rule was last modified (ISO 8601)
           */
          modified_on: string;
          /**
           * Paused
           * @description Whether the rule is currently paused
           */
          paused: boolean;
          /**
           * Priority
           * @description Priority of the rule; lower values run first
           */
          priority: number;
      }[];
      /**
       * Result Info
       * @description Pagination meta-information
       */
      result_info: {
          /**
           * Count
           * @description Number of items returned on this page
           */
          count: number;
          /**
           * Page
           * @description Current page number
           */
          page: number;
          /**
           * Per Page
           * @description Number of results per page
           */
          per_page: number;
          /**
           * Total Count
           * @description Total number of items available
           */
          total_count: number;
      };
      /**
       * Success
       * @description Indicates if the API call was successful
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
 * Type of CLOUDFLARE's CLOUDFLARE_LIST_MONITORS tool input.
 */
type CLOUDFLARE_LIST_MONITORS_INPUT = {
  /**
   * Account Id
   * @description Cloudflare account identifier
   */
  account_id?: string;
  /**
   * Direction
   * @description Sort direction: 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  direction: "asc" | "desc" | null;
  /**
   * Order
   * @description Field to sort by (e.g., 'created_on', 'description')
   * @default null
   */
  order: string | null;
  /**
   * Page
   * @description Page number for paginated results (1-indexed)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of monitors per page (max 100)
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_LIST_MONITORS tool output.
 */
type CLOUDFLARE_LIST_MONITORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors, if any
       */
      errors: {
          /**
           * Code
           * @description API error code
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to API documentation for this error
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description API error message
           */
          message: string;
          /**
           * ErrorSource
           * @description JSON pointer to the relevant field for errors and messages.
           * @default null
           */
          source: {
              /**
               * Pointer
               * @description JSON pointer to the relevant field
               */
              pointer: string;
          } | null;
      }[];
      /**
       * Messages
       * @description List of messages, if any
       */
      messages: {
          /**
           * Code
           * @description API message code
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to API documentation for this message
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description API message text
           */
          message: string;
          /**
           * ErrorSource
           * @description JSON pointer to the relevant field for errors and messages.
           * @default null
           */
          source: {
              /**
               * Pointer
               * @description JSON pointer to the relevant field
               */
              pointer: string;
          } | null;
      }[];
      /**
       * Result
       * @description List of monitor objects
       */
      result: {
          /**
           * Allow Insecure
           * @description Whether to allow insecure SSL/TLS certificates
           */
          allow_insecure: boolean;
          /**
           * Created On
           * @description ISO timestamp when the monitor was created
           */
          created_on: string;
          /**
           * Description
           * @description Human-readable description of the monitor
           * @default null
           */
          description: string | null;
          /**
           * Expected Codes
           * @description Expected HTTP status codes, e.g., '2xx' or '200-204'
           * @default null
           */
          expected_codes: string | null;
          /**
           * Follow Redirects
           * @description Whether to follow redirects during the health check
           */
          follow_redirects: boolean;
          /**
           * Header
           * @description Additional HTTP headers for the health check
           * @default null
           */
          header: {
              [key: string]: string;
          } | null;
          /**
           * Id
           * @description Unique identifier for the monitor
           */
          id: string;
          /**
           * Interval
           * @description Interval in seconds between health checks
           */
          interval: number;
          /**
           * Method
           * @description HTTP method used for the health check
           * @default null
           */
          method: string | null;
          /**
           * Modified On
           * @description ISO timestamp when the monitor was last modified
           */
          modified_on: string;
          /**
           * Name
           * @description Name of the monitor
           */
          name: string;
          /**
           * Path
           * @description Endpoint path used for the health check
           * @default null
           */
          path: string | null;
          /**
           * Port
           * @description Port used for the health check
           * @default null
           */
          port: number | null;
          /**
           * Probe Zone
           * @description Zone ID used for the health check origin zone
           * @default null
           */
          probe_zone: string | null;
          /**
           * Retries
           * @description Number of retries before marking as unhealthy
           */
          retries: number;
          /**
           * Timeout
           * @description Timeout in seconds before marking as failed
           */
          timeout: number;
          /**
           * Type
           * @description Protocol used for the health check (HTTP, HTTPS, TCP, ICMP)
           */
          type: string;
      }[];
      /**
       * Result Info
       * @description Pagination details
       */
      result_info: {
          /**
           * Count
           * @description Number of monitors returned on this page
           */
          count: number;
          /**
           * Page
           * @description Current page number
           */
          page: number;
          /**
           * Per Page
           * @description Number of monitors per page
           */
          per_page: number;
          /**
           * Total Count
           * @description Total number of monitors available
           */
          total_count: number;
      };
      /**
       * Success
       * @description True if the API call succeeded
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
 * Type of CLOUDFLARE's CLOUDFLARE_LIST_POOLS tool input.
 */
type CLOUDFLARE_LIST_POOLS_INPUT = {
  /**
   * Account Id
   * Format: uuid
   * @description Cloudflare account identifier (UUID)
   */
  account_id?: unknown;
  /**
   * Direction
   * @description Direction to order results ('asc' or 'desc')
   * @default null
   * @enum {string|null}
   */
  direction: "asc" | "desc" | null;
  /**
   * Name
   * @description Filter pools by exact name
   * @default null
   */
  name: string | null;
  /**
   * Order
   * @description Field to order results by, e.g., 'name' or 'created_on'
   * @default null
   */
  order: string | null;
  /**
   * Page
   * @description Page number of results (1-based)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (max 50)
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_LIST_POOLS tool output.
 */
type CLOUDFLARE_LIST_POOLS_OUTPUT = {
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
           * @description Error code returned by the API
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to documentation for the error
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
      }[];
      /**
       * Messages
       * @description List of messages returned by the API
       */
      messages: {
          /**
           * Code
           * @description Message code returned by the API
           * @default null
           */
          code: number | null;
          /**
           * Documentation Url
           * @description URL to documentation for the message
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Message returned by the API
           * @default null
           */
          message: string | null;
      }[];
      /**
       * Result
       * @description List of pool summaries
       */
      result: {
          /**
           * Created On
           * @description Timestamp when the pool was created
           */
          created_on: string;
          /**
           * Description
           * @description Human-readable description of the pool
           * @default null
           */
          description: string | null;
          /**
           * Enabled
           * @description Whether the pool is enabled
           */
          enabled: boolean;
          /**
           * Id
           * @description Unique pool identifier
           */
          id: string;
          /**
           * Modified On
           * @description Timestamp when the pool was last modified
           */
          modified_on: string;
          /**
           * Monitor
           * @description Health check monitor ID
           * @default null
           */
          monitor: string | null;
          /**
           * Name
           * @description Name of the pool
           */
          name: string;
          /**
           * Origins
           * @description List of origins in the pool
           */
          origins: {
              /**
               * Address
               * @description IP address or hostname of the origin
               */
              address: string;
              /**
               * Enabled
               * @description Whether the origin is enabled
               */
              enabled: boolean;
              /**
               * Name
               * @description Name of the origin
               * @default null
               */
              name: string | null;
              /**
               * Weight
               * @description Relative weight for load distribution
               * @default null
               */
              weight: number | null;
          }[];
      }[];
      /**
       * Result Info
       * @description Pagination info for the results
       */
      result_info: {
          /**
           * Count
           * @description Number of items on the current page
           */
          count: number;
          /**
           * Page
           * @description Current page number
           */
          page: number;
          /**
           * Per Page
           * @description Number of items per page
           */
          per_page: number;
          /**
           * Total Count
           * @description Total number of items available
           */
          total_count: number;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          total_pages: number;
      };
      /**
       * Success
       * @description Whether the request was successful
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
 * Type of CLOUDFLARE's CLOUDFLARE_LIST_ZONES tool input.
 */
type CLOUDFLARE_LIST_ZONES_INPUT = {
  /**
   * AccountInfo
   * @description Filter zones by account ID and/or account name.
   * @default null
   */
  account: {
      /**
       * Id
       * @description An account ID
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description An account Name. Optional filter operators can be provided to extend refine the search
       * @default null
       */
      name: string | null;
  } | null;
  /**
   * DirectionEnum
   * @description Direction to order zones.
   * @default null
   * @enum {string|null}
   */
  direction: "asc" | "desc" | null;
  /**
   * MatchEnum
   * @description Whether to match all search requirements or at least one (any).
   * @default all
   * @enum {string|null}
   */
  match: "all" | "any" | null;
  /**
   * Name
   * @description A domain name. Optional filter operators can be provided to extend refine the search.
   * @default null
   */
  name: string | null;
  /**
   * OrderEnum
   * @description Field to order zones by.
   * @default null
   * @enum {string|null}
   */
  order: "name" | "status" | "account.id" | "account.name" | "plan.id" | null;
  /**
   * Page
   * @description Page number of paginated results.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of zones per page.
   * @default 20
   */
  per_page: number | null;
  /**
   * StatusEnum
   * @description A zone status
   * @default null
   * @enum {string|null}
   */
  status: "initializing" | "pending" | "active" | "moved" | null;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_LIST_ZONES tool output.
 */
type CLOUDFLARE_LIST_ZONES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Errors */
      errors: {
          [key: string]: unknown;
      }[];
      /** Messages */
      messages: {
          [key: string]: unknown;
      }[];
      /**
       * Result
       * @default null
       */
      result: {
          /** Account */
          account: {
              /**
               * Id
               * @description Identifier
               */
              id: string;
              /**
               * Name
               * @description The name of the account
               */
              name: string;
          };
          /**
           * Activated On
           * @default null
           */
          activated_on: string | null;
          /**
           * Cname Suffix
           * @default null
           */
          cname_suffix: string | null;
          /** Created On */
          created_on: string;
          /** Development Mode */
          development_mode: number;
          /**
           * Id
           * @description Identifier
           */
          id: string;
          /** Meta */
          meta: {
              /**
               * Cdn Only
               * @default null
               */
              cdn_only: boolean | null;
              /**
               * Custom Certificate Quota
               * @default null
               */
              custom_certificate_quota: number | null;
              /**
               * Dns Only
               * @default null
               */
              dns_only: boolean | null;
              /**
               * Foundation Dns
               * @default null
               */
              foundation_dns: boolean | null;
              /**
               * Page Rule Quota
               * @default null
               */
              page_rule_quota: number | null;
              /**
               * Phishing Detected
               * @default null
               */
              phishing_detected: boolean | null;
              /**
               * Step
               * @default null
               */
              step: number | null;
          };
          /** Modified On */
          modified_on: string;
          /**
           * Name
           * @description The domain name
           */
          name: string;
          /**
           * Original Dnshost
           * @default null
           */
          original_dnshost: string | null;
          /**
           * Original Name Servers
           * @default null
           */
          original_name_servers: string[] | null;
          /**
           * Original Registrar
           * @default null
           */
          original_registrar: string | null;
          /** Owner */
          owner: {
              /**
               * Id
               * @description Identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Name of the owner
               * @default null
               */
              name: string | null;
              /**
               * Type
               * @description Type of owner
               * @default null
               */
              type: string | null;
          };
          /** Paused */
          paused: boolean;
          /** Permissions */
          permissions: string[];
          /**
           * ZonePlan
           * @default null
           */
          plan: {
              /**
               * Can Subscribe
               * @default null
               */
              can_subscribe: boolean | null;
              /**
               * Currency
               * @default null
               */
              currency: string | null;
              /**
               * Externally Managed
               * @default null
               */
              externally_managed: boolean | null;
              /**
               * Frequency
               * @default null
               */
              frequency: string | null;
              /**
               * Id
               * @description Identifier
               * @default null
               */
              id: string | null;
              /**
               * Is Subscribed
               * @default null
               */
              is_subscribed: boolean | null;
              /**
               * Legacy Discount
               * @default null
               */
              legacy_discount: boolean | null;
              /**
               * Legacy Id
               * @default null
               */
              legacy_id: string | null;
              /**
               * Name
               * @default null
               */
              name: string | null;
              /**
               * Price
               * @default null
               */
              price: number | null;
          } | null;
          /** Status */
          status: string;
          /**
           * ZoneTenant
           * @default null
           */
          tenant: {
              /**
               * Id
               * @description Identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Name of the tenant
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * ZoneTenantUnit
           * @default null
           */
          tenant_unit: {
              /**
               * Id
               * @description Identifier
               * @default null
               */
              id: string | null;
          } | null;
          /** Type */
          type: string;
          /**
           * Vanity Name Servers
           * @default null
           */
          vanity_name_servers: string[] | null;
      }[] | null;
      /**
       * ResultInfo
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
 * Type of CLOUDFLARE's CLOUDFLARE_UPDATE_DNS_RECORD tool input.
 */
type CLOUDFLARE_UPDATE_DNS_RECORD_INPUT = {
  /**
   * Content
   * @description DNS record content (e.g., IP address for A records)
   */
  content?: string;
  /**
   * Data
   * @description Additional record-specific data for LOC, SRV, and CAA records
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Identifier
   * Format: uuid
   * @description DNS record identifier (UUID) to update
   */
  identifier?: unknown;
  /**
   * Name
   * @description DNS record name (e.g., 'example.com')
   */
  name?: string;
  /**
   * Priority
   * @description Priority for MX, SRV, and URI records; required for these record types
   * @default null
   */
  priority: number | null;
  /**
   * Proxied
   * @description Whether the record is receiving Cloudflare's benefits
   * @default null
   */
  proxied: boolean | null;
  /**
   * Ttl
   * @description Time to live in seconds; use 1 for 'automatic' TTL
   * @default null
   */
  ttl: number | null;
  /**
   * Type
   * @description DNS record type
   * @enum {string}
   */
  type?: "A" | "AAAA" | "CNAME" | "CERT" | "DNSKEY" | "DS" | "LOC" | "MX" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT" | "URI";
  /**
   * Zone Identifier
   * Format: uuid
   * @description Zone identifier (UUID) of the DNS record to update
   */
  zone_identifier?: unknown;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_UPDATE_DNS_RECORD tool output.
 */
type CLOUDFLARE_UPDATE_DNS_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API, if any
       */
      errors: {
          /**
           * Code
           * @description Error code returned by the API
           */
          code: number;
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
      }[];
      /**
       * Messages
       * @description Informational messages from the API
       */
      messages: {
          /**
           * Code
           * @description Optional status or informational message code
           * @default null
           */
          code: number | null;
          /**
           * Message
           * @description Optional status or informational message content
           * @default null
           */
          message: string | null;
      }[];
      /**
       * Result
       * @description The updated DNS record details
       */
      result: {
          /**
           * Comment
           * @description Optional comment for the DNS record
           * @default null
           */
          comment: string | null;
          /**
           * Content
           * @description DNS record content
           */
          content: string;
          /**
           * Created On
           * @description Timestamp when the record was created
           */
          created_on: string;
          /**
           * Data
           * @description Additional data for certain record types
           * @default null
           */
          data: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Unique identifier for the DNS record
           */
          id: string;
          /**
           * Meta
           * @description Metadata about the DNS record
           */
          meta: {
              [key: string]: unknown;
          };
          /**
           * Modified On
           * @description Timestamp when the record was last modified
           */
          modified_on: string;
          /**
           * Name
           * @description DNS record name
           */
          name: string;
          /**
           * Priority
           * @description Priority for MX, SRV, and URI records; null if not applicable
           * @default null
           */
          priority: number | null;
          /**
           * Proxiable
           * @description Whether the record can be proxied through Cloudflare
           */
          proxiable: boolean;
          /**
           * Proxied
           * @description Whether the record is currently proxied through Cloudflare
           */
          proxied: boolean;
          /**
           * Settings
           * @description Additional settings information for the DNS record
           */
          settings: {
              [key: string]: unknown;
          };
          /**
           * Tags
           * @description List of user-defined tags associated with the record
           */
          tags: string[];
          /**
           * Ttl
           * @description Time to live in seconds for the DNS record
           */
          ttl: number;
          /**
           * Type
           * @description DNS record type
           */
          type: string;
      };
      /**
       * Success
       * @description Indicates whether the API call succeeded
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
 * Type of CLOUDFLARE's CLOUDFLARE_UPDATE_LIST tool input.
 */
type CLOUDFLARE_UPDATE_LIST_INPUT = {
  /**
   * Account Id
   * @description Cloudflare account identifier
   * @example 01a7362d577a6c3019a474fd6f485823
   */
  account_id?: string;
  /**
   * Description
   * @description New description for the WAF list
   * @example This is a note
   */
  description?: string;
  /**
   * List Id
   * @description Unique identifier of the WAF list
   * @example 0123456789abcdef0123456789abcdef
   */
  list_id?: string;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_UPDATE_LIST tool output.
 */
type CLOUDFLARE_UPDATE_LIST_OUTPUT = {
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
           * @description Error code returned by the API
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to documentation describing the error
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
          /**
           * ResponseInfoSource
           * @description Source location of the error
           * @default null
           */
          source: {
              /**
               * Pointer
               * @description JSON pointer to the source of the error
               * @default null
               */
              pointer: string | null;
          } | null;
      }[];
      /**
       * Messages
       * @description List of informational messages returned by the API
       */
      messages: {
          /**
           * Code
           * @description Error code returned by the API
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to documentation describing the error
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
          /**
           * ResponseInfoSource
           * @description Source location of the error
           * @default null
           */
          source: {
              /**
               * Pointer
               * @description JSON pointer to the source of the error
               * @default null
               */
              pointer: string | null;
          } | null;
      }[];
      /**
       * Result
       * @description Details of the updated WAF list
       */
      result: {
          /**
           * Created On
           * @description Timestamp (UTC) when the list was created
           */
          created_on: string;
          /**
           * Description
           * @description Description of the list
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the WAF list
           */
          id: string;
          /**
           * Kind
           * @description Type of the list
           * @enum {string}
           */
          kind: "ip" | "redirect" | "hostname" | "asn";
          /**
           * Modified On
           * @description Timestamp (UTC) when the list was last modified
           */
          modified_on: string;
          /**
           * Name
           * @description Name of the list
           */
          name: string;
          /**
           * Num Items
           * @description Number of items in the list
           */
          num_items: number;
          /**
           * Num Referencing Filters
           * @description Number of filters referencing this list
           */
          num_referencing_filters: number;
          /**
           * Version
           * @description Version number of the list
           * @default null
           */
          version: number | null;
      };
      /**
       * Success
       * @description Indicates if the API call was successful
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
 * Type of CLOUDFLARE's CLOUDFLARE_UPDATE_ZONE tool input.
 */
type CLOUDFLARE_UPDATE_ZONE_INPUT = {
  /**
   * Paused
   * @description Whether to pause the zone (true to pause, false to unpause)
   * @default null
   */
  paused: boolean | null;
  /**
   * Type
   * @description Zone type: 'full', 'partial', or 'secondary'
   * @default null
   * @enum {string|null}
   */
  type: "full" | "partial" | "secondary" | null;
  /**
   * Vanity Name Servers
   * @description Custom name servers for vanity mode, array of strings
   * @default null
   */
  vanity_name_servers: string[] | null;
  /**
   * Zone Id
   * @description Zone identifier (UUID)
   */
  zone_id?: string;
};

/**
 * Type of CLOUDFLARE's CLOUDFLARE_UPDATE_ZONE tool output.
 */
type CLOUDFLARE_UPDATE_ZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors returned by the API, if any
       */
      errors: {
          /**
           * Code
           * @description Error code returned by the API
           */
          code: number;
          /**
           * Documentation Url
           * @description URL to documentation describing the error
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Error message returned by the API
           */
          message: string;
          /**
           * ErrorSource
           * @description Source of the error in the request
           * @default null
           */
          source: {
              /**
               * Pointer
               * @description JSON pointer to the part of the request causing the error
               * @default null
               */
              pointer: string | null;
          } | null;
      }[];
      /**
       * Messages
       * @description List of messages returned by the API, if any
       */
      messages: {
          /**
           * Code
           * @description Optional message code returned by the API
           * @default null
           */
          code: number | null;
          /**
           * Documentation Url
           * @description URL to documentation for this message
           * @default null
           */
          documentation_url: string | null;
          /**
           * Message
           * @description Optional message content from the API
           * @default null
           */
          message: string | null;
          /**
           * ErrorSource
           * @description Pointer to the part of the request related to this message
           * @default null
           */
          source: {
              /**
               * Pointer
               * @description JSON pointer to the part of the request causing the error
               * @default null
               */
              pointer: string | null;
          } | null;
      }[];
      /**
       * Result
       * @description Updated zone properties
       */
      result: {
          /**
           * Account
           * @description Account information for the zone
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
          };
          /**
           * Activated On
           * @description Timestamp when the zone was activated
           * @default null
           */
          activated_on: string | null;
          /**
           * Created On
           * @description Timestamp when the zone was created
           */
          created_on: string;
          /**
           * Development Mode
           * @description Development mode TTL in seconds
           */
          development_mode: number;
          /**
           * Id
           * @description Zone identifier
           */
          id: string;
          /**
           * Meta
           * @description Metadata for the zone
           */
          meta: {
              /**
               * Custom Certificate Quota
               * @description Quota for custom certificates
               */
              custom_certificate_quota: number;
              /**
               * Page Rule Quota
               * @description Quota for page rules
               */
              page_rule_quota: number;
              /**
               * Phishing Detected
               * @description Whether phishing was detected for zone scan
               * @default null
               */
              phishing_detected: boolean | null;
              /**
               * Step
               * @description DNS scan step reached by Cloudflare
               */
              step: number;
              /**
               * Wildcard Available
               * @description Whether wildcard records are available
               * @default null
               */
              wildcard_available: boolean | null;
              /**
               * Wildcard Proxiable
               * @description Whether wildcard records can be proxied
               * @default null
               */
              wildcard_proxiable: boolean | null;
          };
          /**
           * Modified On
           * @description Timestamp when the zone was last modified
           */
          modified_on: string;
          /**
           * Name
           * @description Domain name of the zone
           */
          name: string;
          /**
           * Name Servers
           * @description Name servers assigned to the zone
           */
          name_servers: string[];
          /**
           * Original Dnshost
           * @description Original DNS host of the domain
           * @default null
           */
          original_dnshost: string | null;
          /**
           * Original Name Servers
           * @description Original authoritative name servers
           */
          original_name_servers: string[];
          /**
           * Original Registrar
           * @description Original registrar of the domain
           * @default null
           */
          original_registrar: string | null;
          /**
           * Owner
           * @description Owner information for the zone
           */
          owner: {
              /**
               * Email
               * @description Email of the owner
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description Owner identifier
               * @default null
               */
              id: string | null;
              /**
               * Type
               * @description Type of the owner, e.g., 'user' or 'organization'
               */
              type: string;
          };
          /**
           * Paused
           * @description Whether the zone is paused
           */
          paused: boolean;
          /**
           * Permissions
           * @description List of permissions for the zone
           */
          permissions: string[];
          /**
           * Plan
           * @description Currently active plan for the zone
           */
          plan: {
              /**
               * Can Subscribe
               * @description Whether subscription is available for this plan
               */
              can_subscribe: boolean;
              /**
               * Currency
               * @description Currency code for the plan
               */
              currency: string;
              /**
               * Frequency
               * @description Billing frequency, e.g., 'monthly'
               */
              frequency: string;
              /**
               * Id
               * @description Plan identifier
               */
              id: string;
              /**
               * Is Subscribed
               * @description Whether the subscription is active
               */
              is_subscribed: boolean;
              /**
               * Legacy Id
               * @description Legacy identifier for the plan, if any
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
               * @description Plan price in the smallest currency unit
               */
              price: number;
          };
          /**
           * ZonePlan
           * @description Pending plan change, if any
           * @default null
           */
          plan_pending: {
              /**
               * Can Subscribe
               * @description Whether subscription is available for this plan
               */
              can_subscribe: boolean;
              /**
               * Currency
               * @description Currency code for the plan
               */
              currency: string;
              /**
               * Frequency
               * @description Billing frequency, e.g., 'monthly'
               */
              frequency: string;
              /**
               * Id
               * @description Plan identifier
               */
              id: string;
              /**
               * Is Subscribed
               * @description Whether the subscription is active
               */
              is_subscribed: boolean;
              /**
               * Legacy Id
               * @description Legacy identifier for the plan, if any
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
               * @description Plan price in the smallest currency unit
               */
              price: number;
          } | null;
          /**
           * Status
           * @description Status of the zone
           */
          status: string;
          /**
           * Type
           * @description Type of the zone
           */
          type: string;
      };
      /**
       * Success
       * @description Indicates if the API call succeeded
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
 * Type map of all available tool input types for toolkit "CLOUDFLARE".
 */
export type CLOUDFLARE_TOOL_INPUTS = {
  API_KEY_CREATE_DNS_RECORD: CLOUDFLARE_API_KEY_CREATE_DNS_RECORD_INPUT
  API_KEY_CREATE_LOCKDOWN_RULE: CLOUDFLARE_API_KEY_CREATE_LOCKDOWN_RULE_INPUT
  API_KEY_CREATE_RULESET: CLOUDFLARE_API_KEY_CREATE_RULESET_INPUT
  API_KEY_CREATE_RULE_IN_RULESET: CLOUDFLARE_API_KEY_CREATE_RULE_IN_RULESET_INPUT
  API_KEY_DELETE_DNSSEC: CLOUDFLARE_API_KEY_DELETE_DNSSEC_INPUT
  API_KEY_DELETE_DNS_RECORD: CLOUDFLARE_API_KEY_DELETE_DNS_RECORD_INPUT
  API_KEY_DELETE_RULESET: CLOUDFLARE_API_KEY_DELETE_RULESET_INPUT
  API_KEY_DELETE_RULE_FROM_RULESET: CLOUDFLARE_API_KEY_DELETE_RULE_FROM_RULESET_INPUT
  API_KEY_DELETE_ZONE: CLOUDFLARE_API_KEY_DELETE_ZONE_INPUT
  API_KEY_GET_ENTRYPOINT_RULESET_VERSION: CLOUDFLARE_API_KEY_GET_ENTRYPOINT_RULESET_VERSION_INPUT
  API_KEY_GET_LOCKDOWN_RULE: CLOUDFLARE_API_KEY_GET_LOCKDOWN_RULE_INPUT
  API_KEY_GET_REGIONAL_TIERED_CACHE: CLOUDFLARE_API_KEY_GET_REGIONAL_TIERED_CACHE_INPUT
  API_KEY_GET_RULESET: CLOUDFLARE_API_KEY_GET_RULESET_INPUT
  API_KEY_GET_ZONE_DETAILS: CLOUDFLARE_API_KEY_GET_ZONE_DETAILS_INPUT
  API_KEY_LIST_DNS_RECORDS: CLOUDFLARE_API_KEY_LIST_DNS_RECORDS_INPUT
  API_KEY_LIST_ZONES: CLOUDFLARE_API_KEY_LIST_ZONES_INPUT
  API_KEY_OVERWRITE_DNS_RECORD: CLOUDFLARE_API_KEY_OVERWRITE_DNS_RECORD_INPUT
  API_KEY_RERUN_ZONE_ACTIVATION_CHECK: CLOUDFLARE_API_KEY_RERUN_ZONE_ACTIVATION_CHECK_INPUT
  API_KEY_UPDATE_DNSSEC_STATUS: CLOUDFLARE_API_KEY_UPDATE_DNSSEC_STATUS_INPUT
  API_KEY_UPDATE_LOCKDOWN_RULE: CLOUDFLARE_API_KEY_UPDATE_LOCKDOWN_RULE_INPUT
  API_KEY_UPDATE_RULESET: CLOUDFLARE_API_KEY_UPDATE_RULESET_INPUT
  API_KEY_UPDATE_RULE_IN_RULESET: CLOUDFLARE_API_KEY_UPDATE_RULE_IN_RULESET_INPUT
  API_KEY_UPDATE_ZONE: CLOUDFLARE_API_KEY_UPDATE_ZONE_INPUT
  API_KEY_UPLOAD_FILE_TO_S3: CLOUDFLARE_API_KEY_UPLOAD_FILE_TO_S3_INPUT
  BROWSER_RENDERING_CAPTURE_SCREENSHOT: CLOUDFLARE_BROWSER_RENDERING_CAPTURE_SCREENSHOT_INPUT
  BROWSER_RENDERING_LIST_ACCOUNTS: CLOUDFLARE_BROWSER_RENDERING_LIST_ACCOUNTS_INPUT
  BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS: CLOUDFLARE_BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS_INPUT
  BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT: CLOUDFLARE_BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT_INPUT
  CREATE_DNS_RECORD: CLOUDFLARE_CREATE_DNS_RECORD_INPUT
  CREATE_LIST: CLOUDFLARE_CREATE_LIST_INPUT
  CREATE_ZONE: CLOUDFLARE_CREATE_ZONE_INPUT
  DELETE_DNS_RECORD: CLOUDFLARE_DELETE_DNS_RECORD_INPUT
  DELETE_LIST: CLOUDFLARE_DELETE_LIST_INPUT
  DELETE_ZONE: CLOUDFLARE_DELETE_ZONE_INPUT
  GET_LISTS: CLOUDFLARE_GET_LISTS_INPUT
  LIST_ACCOUNTS: CLOUDFLARE_LIST_ACCOUNTS_INPUT
  LIST_ACCOUNT_MEMBERS: CLOUDFLARE_LIST_ACCOUNT_MEMBERS_INPUT
  LIST_FIREWALL_RULES: CLOUDFLARE_LIST_FIREWALL_RULES_INPUT
  LIST_MONITORS: CLOUDFLARE_LIST_MONITORS_INPUT
  LIST_POOLS: CLOUDFLARE_LIST_POOLS_INPUT
  LIST_ZONES: CLOUDFLARE_LIST_ZONES_INPUT
  UPDATE_DNS_RECORD: CLOUDFLARE_UPDATE_DNS_RECORD_INPUT
  UPDATE_LIST: CLOUDFLARE_UPDATE_LIST_INPUT
  UPDATE_ZONE: CLOUDFLARE_UPDATE_ZONE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLOUDFLARE".
 */
export type CLOUDFLARE_TOOL_OUTPUTS = {
  API_KEY_CREATE_DNS_RECORD: CLOUDFLARE_API_KEY_CREATE_DNS_RECORD_OUTPUT
  API_KEY_CREATE_LOCKDOWN_RULE: CLOUDFLARE_API_KEY_CREATE_LOCKDOWN_RULE_OUTPUT
  API_KEY_CREATE_RULESET: CLOUDFLARE_API_KEY_CREATE_RULESET_OUTPUT
  API_KEY_CREATE_RULE_IN_RULESET: CLOUDFLARE_API_KEY_CREATE_RULE_IN_RULESET_OUTPUT
  API_KEY_DELETE_DNSSEC: CLOUDFLARE_API_KEY_DELETE_DNSSEC_OUTPUT
  API_KEY_DELETE_DNS_RECORD: CLOUDFLARE_API_KEY_DELETE_DNS_RECORD_OUTPUT
  API_KEY_DELETE_RULESET: CLOUDFLARE_API_KEY_DELETE_RULESET_OUTPUT
  API_KEY_DELETE_RULE_FROM_RULESET: CLOUDFLARE_API_KEY_DELETE_RULE_FROM_RULESET_OUTPUT
  API_KEY_DELETE_ZONE: CLOUDFLARE_API_KEY_DELETE_ZONE_OUTPUT
  API_KEY_GET_ENTRYPOINT_RULESET_VERSION: CLOUDFLARE_API_KEY_GET_ENTRYPOINT_RULESET_VERSION_OUTPUT
  API_KEY_GET_LOCKDOWN_RULE: CLOUDFLARE_API_KEY_GET_LOCKDOWN_RULE_OUTPUT
  API_KEY_GET_REGIONAL_TIERED_CACHE: CLOUDFLARE_API_KEY_GET_REGIONAL_TIERED_CACHE_OUTPUT
  API_KEY_GET_RULESET: CLOUDFLARE_API_KEY_GET_RULESET_OUTPUT
  API_KEY_GET_ZONE_DETAILS: CLOUDFLARE_API_KEY_GET_ZONE_DETAILS_OUTPUT
  API_KEY_LIST_DNS_RECORDS: CLOUDFLARE_API_KEY_LIST_DNS_RECORDS_OUTPUT
  API_KEY_LIST_ZONES: CLOUDFLARE_API_KEY_LIST_ZONES_OUTPUT
  API_KEY_OVERWRITE_DNS_RECORD: CLOUDFLARE_API_KEY_OVERWRITE_DNS_RECORD_OUTPUT
  API_KEY_RERUN_ZONE_ACTIVATION_CHECK: CLOUDFLARE_API_KEY_RERUN_ZONE_ACTIVATION_CHECK_OUTPUT
  API_KEY_UPDATE_DNSSEC_STATUS: CLOUDFLARE_API_KEY_UPDATE_DNSSEC_STATUS_OUTPUT
  API_KEY_UPDATE_LOCKDOWN_RULE: CLOUDFLARE_API_KEY_UPDATE_LOCKDOWN_RULE_OUTPUT
  API_KEY_UPDATE_RULESET: CLOUDFLARE_API_KEY_UPDATE_RULESET_OUTPUT
  API_KEY_UPDATE_RULE_IN_RULESET: CLOUDFLARE_API_KEY_UPDATE_RULE_IN_RULESET_OUTPUT
  API_KEY_UPDATE_ZONE: CLOUDFLARE_API_KEY_UPDATE_ZONE_OUTPUT
  API_KEY_UPLOAD_FILE_TO_S3: CLOUDFLARE_API_KEY_UPLOAD_FILE_TO_S3_OUTPUT
  BROWSER_RENDERING_CAPTURE_SCREENSHOT: CLOUDFLARE_BROWSER_RENDERING_CAPTURE_SCREENSHOT_OUTPUT
  BROWSER_RENDERING_LIST_ACCOUNTS: CLOUDFLARE_BROWSER_RENDERING_LIST_ACCOUNTS_OUTPUT
  BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS: CLOUDFLARE_BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS_OUTPUT
  BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT: CLOUDFLARE_BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT_OUTPUT
  CREATE_DNS_RECORD: CLOUDFLARE_CREATE_DNS_RECORD_OUTPUT
  CREATE_LIST: CLOUDFLARE_CREATE_LIST_OUTPUT
  CREATE_ZONE: CLOUDFLARE_CREATE_ZONE_OUTPUT
  DELETE_DNS_RECORD: CLOUDFLARE_DELETE_DNS_RECORD_OUTPUT
  DELETE_LIST: CLOUDFLARE_DELETE_LIST_OUTPUT
  DELETE_ZONE: CLOUDFLARE_DELETE_ZONE_OUTPUT
  GET_LISTS: CLOUDFLARE_GET_LISTS_OUTPUT
  LIST_ACCOUNTS: CLOUDFLARE_LIST_ACCOUNTS_OUTPUT
  LIST_ACCOUNT_MEMBERS: CLOUDFLARE_LIST_ACCOUNT_MEMBERS_OUTPUT
  LIST_FIREWALL_RULES: CLOUDFLARE_LIST_FIREWALL_RULES_OUTPUT
  LIST_MONITORS: CLOUDFLARE_LIST_MONITORS_OUTPUT
  LIST_POOLS: CLOUDFLARE_LIST_POOLS_OUTPUT
  LIST_ZONES: CLOUDFLARE_LIST_ZONES_OUTPUT
  UPDATE_DNS_RECORD: CLOUDFLARE_UPDATE_DNS_RECORD_OUTPUT
  UPDATE_LIST: CLOUDFLARE_UPDATE_LIST_OUTPUT
  UPDATE_ZONE: CLOUDFLARE_UPDATE_ZONE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLOUDFLARE toolkit.
 */
export const CLOUDFLARE = {
  slug: "cloudflare",
  tools: {
    /**
     * Tool to create a new DNS record in a Cloudflare zone. Use when you need to add a record (A, CNAME, TXT, MX, etc.) to a specified zone.
     */
    API_KEY_CREATE_DNS_RECORD: "CLOUDFLARE_API_KEY_CREATE_DNS_RECORD",
    /**
     * Tool to create a Zone Lockdown rule. Use when you need to restrict access to specific URL patterns to defined IPs/CIDR ranges. Use after confirming zone_id.
     */
    API_KEY_CREATE_LOCKDOWN_RULE: "CLOUDFLARE_API_KEY_CREATE_LOCKDOWN_RULE",
    /**
     * Tool to create an account- or zone-scoped ruleset. Use after defining your ruleset details and selecting the correct scope.
     */
    API_KEY_CREATE_RULESET: "CLOUDFLARE_API_KEY_CREATE_RULESET",
    /**
     * Tool to add a rule to an existing ruleset. Use when you need to append or insert a new rule in a Cloudflare ruleset.
     */
    API_KEY_CREATE_RULE_IN_RULESET: "CLOUDFLARE_API_KEY_CREATE_RULE_IN_RULESET",
    /**
     * Tool to delete DNSSEC records for a zone. Use after disabling DNSSEC at the registrar to remove DNSSEC configuration.
     */
    API_KEY_DELETE_DNSSEC: "CLOUDFLARE_API_KEY_DELETE_DNSSEC",
    /**
     * Tool to delete a DNS record. Use when you need to remove a specific DNS record from a zone after confirming both zone and record IDs.
     */
    API_KEY_DELETE_DNS_RECORD: "CLOUDFLARE_API_KEY_DELETE_DNS_RECORD",
    /**
     * Tool to delete all versions of a ruleset. Use when you need to remove a ruleset from an account or zone after confirming no references exist.
     */
    API_KEY_DELETE_RULESET: "CLOUDFLARE_API_KEY_DELETE_RULESET",
    /**
     * Tool to delete a specific rule from a ruleset. Use when you need to remove an outdated or incorrect rule from an account or zone ruleset after confirming IDs.
     */
    API_KEY_DELETE_RULE_FROM_RULESET: "CLOUDFLARE_API_KEY_DELETE_RULE_FROM_RULESET",
    /**
     * Tool to delete an existing zone. Use after confirming the zone_id to permanently remove the zone.
     */
    API_KEY_DELETE_ZONE: "CLOUDFLARE_API_KEY_DELETE_ZONE",
    /**
     * Tool to get a specific version of an entry point ruleset. Use after determining the ruleset phase and version.
     */
    API_KEY_GET_ENTRYPOINT_RULESET_VERSION: "CLOUDFLARE_API_KEY_GET_ENTRYPOINT_RULESET_VERSION",
    /**
     * Tool to get a Zone Lockdown rule. Use when you need to fetch details of a specific lockdown rule by its ID within a Cloudflare zone.
     */
    API_KEY_GET_LOCKDOWN_RULE: "CLOUDFLARE_API_KEY_GET_LOCKDOWN_RULE",
    /**
     * Tool to get the regional tiered cache setting for a zone. Use when you need to verify if regional tiered cache is enabled for performance optimization after zone activation.
     */
    API_KEY_GET_REGIONAL_TIERED_CACHE: "CLOUDFLARE_API_KEY_GET_REGIONAL_TIERED_CACHE",
    /**
     * Tool to fetch the latest version of a ruleset by ID. Use after you have the ruleset scope and ID.
     */
    API_KEY_GET_RULESET: "CLOUDFLARE_API_KEY_GET_RULESET",
    /**
     * Tool to get details for a specific zone. Use when you need detailed zone metadata by ID.
     */
    API_KEY_GET_ZONE_DETAILS: "CLOUDFLARE_API_KEY_GET_ZONE_DETAILS",
    /**
     * Tool to list DNS records for a given Cloudflare zone.
     */
    API_KEY_LIST_DNS_RECORDS: "CLOUDFLARE_API_KEY_LIST_DNS_RECORDS",
    /**
     * Tool to list, search, sort, and filter Cloudflare zones. Use when you need to retrieve a paginated list of zones available to the authenticated user.
     */
    API_KEY_LIST_ZONES: "CLOUDFLARE_API_KEY_LIST_ZONES",
    /**
     * Tool to completely overwrite a DNS record. Use when you need to replace all record details after confirming record type and name.
     */
    API_KEY_OVERWRITE_DNS_RECORD: "CLOUDFLARE_API_KEY_OVERWRITE_DNS_RECORD",
    /**
     * Tool to trigger a new activation check for a PENDING zone. Use after initial zone creation to revalidate DNS activation. Limited rate: every 5 minutes on paygo/Enterprise or hourly on Free.
     */
    API_KEY_RERUN_ZONE_ACTIVATION_CHECK: "CLOUDFLARE_API_KEY_RERUN_ZONE_ACTIVATION_CHECK",
    /**
     * Tool to update DNSSEC configuration for a zone. Use when you need to enable or disable DNSSEC or adjust DNSSEC options after confirming the zone ID.
     */
    API_KEY_UPDATE_DNSSEC_STATUS: "CLOUDFLARE_API_KEY_UPDATE_DNSSEC_STATUS",
    /**
     * Tool to update a zone lockdown rule. Use when you need to modify the IP or URL settings of an existing Zone Lockdown rule after confirming the rule exists.
     */
    API_KEY_UPDATE_LOCKDOWN_RULE: "CLOUDFLARE_API_KEY_UPDATE_LOCKDOWN_RULE",
    /**
     * Tool to update a Cloudflare ruleset, creating a new version. Use when you need to modify ruleset description or rules list.
     */
    API_KEY_UPDATE_RULESET: "CLOUDFLARE_API_KEY_UPDATE_RULESET",
    /**
     * Tool to update a specific rule in a ruleset. Use when you need to modify a rule's configuration or reorder it after reviewing its current settings.
     */
    API_KEY_UPDATE_RULE_IN_RULESET: "CLOUDFLARE_API_KEY_UPDATE_RULE_IN_RULESET",
    /**
     * Tool to edit a Cloudflare zone. Use when you need to update a single zone property at a time. Ensure only one of paused, type, or vanity_name_servers is provided per call.
     */
    API_KEY_UPDATE_ZONE: "CLOUDFLARE_API_KEY_UPDATE_ZONE",
    /**
     * Tool to upload arbitrary file content to the app’s temporary R2/S3 bucket. Use when you need to stage files for actions requiring FileUploadable.
     */
    API_KEY_UPLOAD_FILE_TO_S3: "CLOUDFLARE_API_KEY_UPLOAD_FILE_TO_S3",
    /**
     * Tool to capture a webpage screenshot. Use when you need a visual snapshot of a URL or HTML with optional viewport and clipping.
     */
    BROWSER_RENDERING_CAPTURE_SCREENSHOT: "CLOUDFLARE_BROWSER_RENDERING_CAPTURE_SCREENSHOT",
    /**
     * Tool to list all Cloudflare accounts accessible. Use to retrieve a valid account_id for further browser rendering actions.
     */
    BROWSER_RENDERING_LIST_ACCOUNTS: "CLOUDFLARE_BROWSER_RENDERING_LIST_ACCOUNTS",
    /**
     * Tool to scrape HTML elements for text, HTML, attributes, and box metrics. Use when you need detailed data of matched selectors after rendering a page.
     */
    BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS: "CLOUDFLARE_BROWSER_RENDERING_SCRAPE_HTML_ELEMENTS",
    /**
     * Tool to capture rendered HTML and screenshot of a webpage. Use when you need both DOM content and an image in one request with custom loading and capture settings.
     */
    BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT: "CLOUDFLARE_BROWSER_RENDERING_TAKE_WEBPAGE_SNAPSHOT",
    /**
     * Tool to create a new dns record within a specific zone. use after obtaining the zone id to programmatically add dns entries.
     */
    CREATE_DNS_RECORD: "CLOUDFLARE_CREATE_DNS_RECORD",
    /**
     * Tool to create a new empty waf list for the account. use after confirming the account id. example: create list(account id="<id>", kind="ip", name="blocklist")
     */
    CREATE_LIST: "CLOUDFLARE_CREATE_LIST",
    /**
     * Tool to create a new zone. use after confirming account id when adding a domain to cloudflare.
     */
    CREATE_ZONE: "CLOUDFLARE_CREATE_ZONE",
    /**
     * Tool to delete a dns record within a specific zone. use after confirming zone and record ids. example: "delete dns record 372e6795... from zone 023e105f4ecef..."
     */
    DELETE_DNS_RECORD: "CLOUDFLARE_DELETE_DNS_RECORD",
    /**
     * Tool to delete a waf list. use when you need to remove a list after verifying no filters reference it. example: delete list(account id="<account id>", list id="<list id>")
     */
    DELETE_LIST: "CLOUDFLARE_DELETE_LIST",
    /**
     * Tool to delete a zone. use after confirming the zone identifier to permanently remove a dns zone from your cloudflare account. example: delete zone(zone identifier="023e105f4ecef8ad9ca31a8372d0c353")
     */
    DELETE_ZONE: "CLOUDFLARE_DELETE_ZONE",
    /**
     * Tool to fetch all waf lists (no items) for an account. use after confirming account id.
     */
    GET_LISTS: "CLOUDFLARE_GET_LISTS",
    /**
     * Tool to list all accounts accessible to the user. use when you need to enumerate cloudflare accounts for selection or auditing.
     */
    LIST_ACCOUNTS: "CLOUDFLARE_LIST_ACCOUNTS",
    /**
     * Tool to list members of a given cloudflare account. use after confirming the account id.
     */
    LIST_ACCOUNT_MEMBERS: "CLOUDFLARE_LIST_ACCOUNT_MEMBERS",
    /**
     * Tool to list firewall rules for a specific zone. use after confirming the zone id to retrieve and audit current firewall rules.
     */
    LIST_FIREWALL_RULES: "CLOUDFLARE_LIST_FIREWALL_RULES",
    /**
     * Tool to list all load-balancer monitors in a cloudflare account. use after creating or updating monitors to retrieve a paginated list.
     */
    LIST_MONITORS: "CLOUDFLARE_LIST_MONITORS",
    /**
     * Tool to list all load balancer pools in a cloudflare account. use after confirming account id to discover pool ids.
     */
    LIST_POOLS: "CLOUDFLARE_LIST_POOLS",
    /**
     * This tool lists, searches, sorts, and filters your zones.
     */
    LIST_ZONES: "CLOUDFLARE_LIST_ZONES",
    /**
     * Tool to update an existing dns record within a specific zone. use after confirming both zone and record identifiers; only provided fields are modified.
     */
    UPDATE_DNS_RECORD: "CLOUDFLARE_UPDATE_DNS_RECORD",
    /**
     * Tool to update the description of a waf list (cannot update items). use after confirming list metadata.
     */
    UPDATE_LIST: "CLOUDFLARE_UPDATE_LIST",
    /**
     * Tool to update properties of an existing zone. use after confirming the zone id; only one field can be modified per call.
     */
    UPDATE_ZONE: "CLOUDFLARE_UPDATE_ZONE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLOUDFLARE".
 */
export type CLOUDFLARE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLOUDFLARE".
 */
export type CLOUDFLARE_TRIGGER_EVENTS = {}
