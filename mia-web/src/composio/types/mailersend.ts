// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MAILERSEND's MAILERSEND_CREATE_DOMAIN tool input.
 */
type MAILERSEND_CREATE_DOMAIN_INPUT = {
  /**
   * Add Dns Records
   * @description If true, automatically add recommended DNS records when supported.
   * @default false
   */
  add_dns_records: boolean | null;
  /**
   * Domain Type
   * @description Type of the domain (e.g., "custom").
   * @default null
   */
  domain_type: string | null;
  /**
   * Name
   * @description Fully qualified domain name to add for sending emails.
   */
  name?: string;
  /**
   * Return Path Domain Id
   * @description Existing domain ID to use as the return-path for this domain.
   * @default null
   */
  return_path_domain_id: string | null;
  /**
   * Skip Verification
   * @description If true, skip verification steps during domain creation.
   * @default false
   */
  skip_verification: boolean | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_CREATE_DOMAIN tool output.
 */
type MAILERSEND_CREATE_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Details of the created domain.
   */
  data?: {
      /**
       * Add Dns Records
       * @description Whether automatic DNS record addition was requested.
       */
      add_dns_records: boolean;
      /**
       * Can Verified
       * @description Whether the domain can be verified.
       */
      can_verified: boolean;
      /**
       * Created At
       * @description Timestamp of when the domain was created (ISO 8601).
       */
      created_at: string;
      /**
       * Dns
       * @description DNS records required and their details.
       */
      dns: {
          /**
           * Custom Tracking Subdomain
           * @description Custom tracking subdomain DNS record information.
           */
          custom_tracking_subdomain: {
              /**
               * Host
               * @description DNS record host name.
               */
              host: string;
              /**
               * Type
               * @description DNS record type (e.g., TXT, CNAME).
               */
              type: string;
              /**
               * Valid
               * @description Whether the DNS record is currently valid/verifies correctly.
               * @default null
               */
              valid: boolean | null;
              /**
               * Value
               * @description Value of the DNS record.
               */
              value: string;
          };
          /**
           * Dkim
           * @description DKIM DNS record information.
           */
          dkim: {
              /**
               * Default
               * @description Default DKIM record for the domain.
               */
              default: {
                  /**
                   * Host
                   * @description DNS record host name.
                   */
                  host: string;
                  /**
                   * Type
                   * @description DNS record type (e.g., TXT, CNAME).
                   */
                  type: string;
                  /**
                   * Valid
                   * @description Whether the DNS record is currently valid/verifies correctly.
                   * @default null
                   */
                  valid: boolean | null;
                  /**
                   * Value
                   * @description Value of the DNS record.
                   */
                  value: string;
              };
          };
          /**
           * Return Path
           * @description Return-path DNS record information.
           */
          "return-path": {
              /**
               * Host
               * @description DNS record host name.
               */
              host: string;
              /**
               * Type
               * @description DNS record type (e.g., TXT, CNAME).
               */
              type: string;
              /**
               * Valid
               * @description Whether the DNS record is currently valid/verifies correctly.
               * @default null
               */
              valid: boolean | null;
              /**
               * Value
               * @description Value of the DNS record.
               */
              value: string;
          };
          /**
           * Spf
           * @description SPF DNS record information.
           */
          spf: {
              /**
               * Host
               * @description DNS record host name.
               */
              host: string;
              /**
               * Type
               * @description DNS record type (e.g., TXT, CNAME).
               */
              type: string;
              /**
               * Valid
               * @description Whether the DNS record is currently valid/verifies correctly.
               * @default null
               */
              valid: boolean | null;
              /**
               * Value
               * @description Value of the DNS record.
               */
              value: string;
          };
      };
      /**
       * Domain Type
       * @description Type of the domain.
       */
      domain_type: string;
      /**
       * Id
       * @description Unique identifier of the created domain.
       */
      id: string;
      /**
       * Is Verified
       * @description Whether the domain is verified.
       */
      is_verified: boolean;
      /**
       * Name
       * @description Domain name added.
       */
      name: string;
      /**
       * Return Path Domain Id
       * @description ID of the domain used as return-path, if provided.
       * @default null
       */
      return_path_domain_id: string | null;
      /**
       * Status
       * @description Verification status of the domain.
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
 * Type of MAILERSEND's MAILERSEND_CREATE_SMTP_USER tool input.
 */
type MAILERSEND_CREATE_SMTP_USER_INPUT = {
  /**
   * Domain Id
   * @description ID of the domain to associate with this SMTP user.
   */
  domain_id?: string;
  /**
   * Name
   * @description Display name for the SMTP user.
   */
  name?: string;
  /**
   * Password
   * @description Optional password for the SMTP user. If omitted, MailerSend will generate one.
   * @default null
   */
  password: string | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_CREATE_SMTP_USER tool output.
 */
type MAILERSEND_CREATE_SMTP_USER_OUTPUT = {
  /**
   * Data
   * @description Details of the created SMTP user.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the SMTP user was created.
       */
      created_at: string;
      /**
       * Domain Id
       * @description Identifier of the associated domain.
       */
      domain_id: string;
      /**
       * Id
       * @description Unique identifier of the SMTP user.
       */
      id: string;
      /**
       * Name
       * @description Display name of the SMTP user.
       */
      name: string;
      /**
       * Password
       * @description SMTP password only if returned/generated at creation.
       * @default null
       */
      password: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the SMTP user was last updated.
       */
      updated_at: string;
      /**
       * Username
       * @description SMTP username for authentication.
       */
      username: string;
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
 * Type of MAILERSEND's MAILERSEND_CREATE_TOKEN tool input.
 */
type MAILERSEND_CREATE_TOKEN_INPUT = {
  /**
   * Name
   * @description A descriptive name for the new API token.
   */
  name?: string;
  /**
   * Scopes
   * @description List of permission scopes to grant this token, e.g., ['email.send', 'email.read'].
   */
  scopes?: string[];
};

/**
 * Type of MAILERSEND's MAILERSEND_CREATE_TOKEN tool output.
 */
type MAILERSEND_CREATE_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Details of the newly created API token.
   */
  data?: {
      /**
       * Created At
       * @description Token creation timestamp (ISO 8601).
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the token.
       */
      id: string;
      /**
       * Name
       * @description Name assigned to the token.
       */
      name: string;
      /**
       * Scopes
       * @description Granted permission scopes.
       */
      scopes: string[];
      /**
       * Token
       * @description The generated API token value.
       */
      token: string;
      /**
       * Updated At
       * @description Token update timestamp (ISO 8601).
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
 * Type of MAILERSEND's MAILERSEND_CREATE_WEBHOOK tool input.
 */
type MAILERSEND_CREATE_WEBHOOK_INPUT = {
  /**
   * Domain Id
   * @description The ID of the domain to attach the webhook to.
   */
  domain_id?: string;
  /**
   * Enabled
   * @description Whether the webhook is enabled immediately after creation.
   * @default true
   */
  enabled: boolean | null;
  /**
   * Events
   * @description List of events the webhook listens for (e.g., 'message.sent', 'message.delivered').
   */
  events?: string[];
  /**
   * Name
   * @description The name of the webhook.
   */
  name?: string;
  /**
   * Url
   * @description The callback URL where MailerSend will send POST requests.
   */
  url?: string;
};

/**
 * Type of MAILERSEND's MAILERSEND_CREATE_WEBHOOK tool output.
 */
type MAILERSEND_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Details of the created webhook.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the webhook was created (ISO 8601).
       */
      created_at: string;
      /**
       * Domain Id
       * @description Identifier of the domain associated with the webhook.
       */
      domain_id: string;
      /**
       * Enabled
       * @description Whether the webhook is enabled.
       */
      enabled: boolean;
      /**
       * Events
       * @description List of subscribed events.
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier of the webhook.
       */
      id: string;
      /**
       * Name
       * @description Name of the webhook.
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the webhook was last updated (ISO 8601).
       */
      updated_at: string;
      /**
       * Url
       * @description Webhook endpoint URL.
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
 * Type of MAILERSEND's MAILERSEND_DELETE_WEBHOOK tool input.
 */
type MAILERSEND_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description The unique identifier of the webhook to be deleted.
   */
  webhook_id?: string;
};

/**
 * Type of MAILERSEND's MAILERSEND_DELETE_WEBHOOK tool output.
 */
type MAILERSEND_DELETE_WEBHOOK_OUTPUT = {
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
 * Type of MAILERSEND's MAILERSEND_GET_API_QUOTA tool input.
 */
type MAILERSEND_GET_API_QUOTA_INPUT = object;

/**
 * Type of MAILERSEND's MAILERSEND_GET_API_QUOTA tool output.
 */
type MAILERSEND_GET_API_QUOTA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description Current API quota usage and limits
       */
      account: {
          /**
           * Limit
           * @description Total number of allowed API requests
           */
          limit: number;
          /**
           * Remaining
           * @description Number of API requests remaining
           */
          remaining: number;
          /**
           * Reset
           * @description Seconds until the quota resets
           */
          reset: number;
          /**
           * Used
           * @description Number of API requests already used
           */
          used: number;
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
 * Type of MAILERSEND's MAILERSEND_GET_DOMAIN tool input.
 */
type MAILERSEND_GET_DOMAIN_INPUT = {
  /**
   * Domain Id
   * @description Unique identifier for the sending domain
   */
  domain_id?: string;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_DOMAIN tool output.
 */
type MAILERSEND_GET_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Configuration Settings
       * @description SMTP and API configuration settings
       */
      configuration_settings: {
          /**
           * Api
           * @description API configuration settings
           */
          api: {
              /**
               * Token
               * @description API token for sending
               * @default null
               */
              token: string | null;
              /**
               * Valid
               * @description API configuration validity
               */
              valid: boolean;
          };
          /**
           * Smtp
           * @description SMTP configuration settings
           */
          smtp: {
              /**
               * Host
               * @description SMTP host address
               * @default null
               */
              host: string | null;
              /**
               * Password
               * @description SMTP password for sending
               * @default null
               */
              password: string | null;
              /**
               * Port
               * @description SMTP port number
               * @default null
               */
              port: number | null;
              /**
               * Tls
               * @description Whether TLS is used for SMTP
               * @default null
               */
              tls: boolean | null;
              /**
               * Username
               * @description SMTP username for sending
               * @default null
               */
              username: string | null;
              /**
               * Valid
               * @description SMTP configuration validity
               */
              valid: boolean;
          };
      };
      /**
       * Created At
       * @description Domain creation timestamp (ISO 8601 format)
       */
      created_at: string;
      /**
       * Dns
       * @description DNS settings related to domain verification and sending
       */
      dns: {
          /**
           * Dkim
           * @description DKIM DNS settings and records
           */
          dkim: {
              /**
               * Public
               * @description Public DKIM key
               */
              public: string;
              /**
               * Records
               * @description List of DKIM DNS records
               */
              records: {
                  /**
                   * Host
                   * @description Host of the DKIM record
                   */
                  host: string;
                  /**
                   * Record
                   * @description Record value for DKIM
                   */
                  record: string;
                  /**
                   * Type
                   * @description DNS record type for DKIM
                   */
                  type: string;
                  /**
                   * Valid
                   * @description Verification status of the DKIM record
                   */
                  valid: boolean;
              }[];
              /**
               * Selector
               * @description DKIM selector for the domain
               */
              selector: string;
          };
          /**
           * Spf
           * @description SPF DNS settings
           */
          spf: {
              /**
               * Record
               * @description SPF record value
               */
              record: string;
              /**
               * Valid
               * @description Verification status of the SPF record
               */
              valid: boolean;
          };
          /**
           * Tracking
           * @description Tracking CNAME settings
           */
          tracking: {
              /**
               * Cname Host
               * @description CNAME host for tracking
               */
              cname_host: string;
              /**
               * Cname Record
               * @description CNAME record for tracking
               */
              cname_record: string;
              /**
               * Valid
               * @description Verification status of the tracking CNAME
               */
              valid: boolean;
          };
      };
      /**
       * Id
       * @description Unique domain identifier
       */
      id: string;
      /**
       * Name
       * @description Domain name
       */
      name: string;
      /**
       * Recipients Count
       * @description Number of recipients associated with the domain
       */
      recipients_count: number;
      /**
       * Status
       * @description Status of the domain
       */
      status: string;
      /**
       * Updated At
       * @description Domain update timestamp (ISO 8601 format)
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
 * Type of MAILERSEND's MAILERSEND_GET_DOMAINS tool input.
 */
type MAILERSEND_GET_DOMAINS_INPUT = {
  /**
   * Limit
   * @description Number of results per page (default 25, maximum 100)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve, starting from 1
   * @default null
   */
  page: number | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_DOMAINS tool output.
 */
type MAILERSEND_GET_DOMAINS_OUTPUT = {
  /**
   * Data
   * @description List of sending domain objects
   */
  data?: {
      /**
       * Created At
       * @description Timestamp of domain creation (ISO 8601)
       */
      created_at: string;
      /**
       * Dns Records
       * @description List of DNS records required for domain verification
       */
      dns_records: {
          /**
           * Id
           * @description Unique identifier for the DNS record
           */
          id: string;
          /**
           * Name
           * @description Name of the DNS record
           */
          name: string;
          /**
           * Type
           * @description Record type (e.g., TXT, MX)
           */
          type: string;
          /**
           * Valid
           * @description Whether the DNS record is valid
           */
          valid: boolean;
          /**
           * Value
           * @description Value of the DNS record
           */
          value: string;
      }[];
      /**
       * Id
       * @description Unique domain identifier
       */
      id: string;
      /**
       * Name
       * @description Domain name
       */
      name: string;
      /**
       * Status
       * @description Domain status, e.g., 'active'
       */
      status: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page
       */
      first: string;
      /**
       * Last
       * @description URL of the last page
       */
      last: string;
      /**
       * Next
       * @description URL of the next page, if available
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page, if available
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * Last Page
       * @description Total number of pages available
       */
      last_page: number;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * Total
       * @description Total number of items across all pages
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
 * Type of MAILERSEND's MAILERSEND_GET_DOMAIN_RECIPIENTS tool input.
 */
type MAILERSEND_GET_DOMAIN_RECIPIENTS_INPUT = {
  /**
   * Domain Id
   * @description The ID of the domain to fetch recipients for
   */
  domain_id?: string;
  /**
   * Limit
   * @description Number of recipients per page, must be >= 1
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default null
   */
  page: number | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_DOMAIN_RECIPIENTS tool output.
 */
type MAILERSEND_GET_DOMAIN_RECIPIENTS_OUTPUT = {
  /**
   * Data
   * @description List of recipients for the domain
   */
  data?: {
      /**
       * Created At
       * @description Timestamp of recipient creation in ISO 8601 format
       */
      created_at: string;
      /**
       * Domain Id
       * @description ID of the associated domain
       */
      domain_id: string;
      /**
       * Email
       * Format: email
       * @description Email address of the recipient
       */
      email: unknown;
      /**
       * Id
       * @description Recipient ID
       */
      id: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description URL of the last page
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description URL of the next page
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * Last Page
       * @description Last page number
       */
      last_page: number;
      /**
       * Per Page
       * @description Number of recipients per page
       */
      per_page: number;
      /**
       * Total
       * @description Total number of recipients
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
 * Type of MAILERSEND's MAILERSEND_GET_GENERAL_RESOURCES tool input.
 */
type MAILERSEND_GET_GENERAL_RESOURCES_INPUT = object;

/**
 * Type of MAILERSEND's MAILERSEND_GET_GENERAL_RESOURCES tool output.
 */
type MAILERSEND_GET_GENERAL_RESOURCES_OUTPUT = {
  /**
   * Data
   * @description List of resource categories and their endpoints.
   */
  data?: {
      /**
       * Endpoints
       * @description Available endpoints under this resource category.
       */
      endpoints: {
          /**
           * Description
           * @description Short description of the endpoint.
           * @default null
           */
          description: string | null;
          /**
           * Method
           * @description HTTP method for the endpoint.
           */
          method: string;
          /**
           * Params
           * @description List of parameters accepted by this endpoint.
           * @default null
           */
          params: {
              /**
               * Description
               * @description Parameter description.
               */
              description: string;
              /**
               * Name
               * @description Parameter name.
               */
              name: string;
              /**
               * Required
               * @description Whether the parameter is required.
               */
              required: boolean;
              /**
               * Type
               * @description Parameter data type.
               */
              type: string;
          }[] | null;
          /**
           * Path
           * @description Endpoint path.
           */
          path: string;
          /**
           * Responses
           * @description List of possible responses for this endpoint.
           * @default null
           */
          responses: {
              /**
               * Code
               * @description HTTP status code for this response.
               */
              code: number;
              /**
               * Description
               * @description Description of this response.
               */
              description: string;
          }[] | null;
      }[];
      /**
       * Name
       * @description Name of the resource category.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_IDENTITIES tool input.
 */
type MAILERSEND_GET_IDENTITIES_INPUT = {
  /**
   * Limit
   * @description Number of results per page, must be >= 1
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default null
   */
  page: number | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_IDENTITIES tool output.
 */
type MAILERSEND_GET_IDENTITIES_OUTPUT = {
  /**
   * Data
   * @description Array of sender identity objects
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 creation timestamp
       */
      created_at: string;
      /**
       * Domain Id
       * @description Associated domain ID
       */
      domain_id: string;
      /**
       * Email
       * @description Email address (only present if identity_type='email')
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of this identity
       */
      id: string;
      /**
       * Identity Type
       * @description Type of identity: 'email' or 'domain'
       * @enum {string}
       */
      identity_type: "email" | "domain";
      /**
       * Name
       * @description Display name of the identity
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 last update timestamp
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination details
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description First item index on this page
       * @default null
       */
      from_: number | null;
      /**
       * Last Page
       * @description Last available page number
       */
      last_page: number;
      /**
       * To
       * @description Last item index on this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of identities
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
 * Type of MAILERSEND's MAILERSEND_GET_MESSAGES tool input.
 */
type MAILERSEND_GET_MESSAGES_INPUT = {
  /**
   * Date From
   * Format: date-time
   * @description Filter messages sent on or after this datetime (ISO 8601)
   * @default null
   */
  date_from: string | null;
  /**
   * Date To
   * Format: date-time
   * @description Filter messages sent on or before this datetime (ISO 8601)
   * @default null
   */
  date_to: string | null;
  /**
   * Limit
   * @description Number of messages per page (max 100)
   * @default 25
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination (starts at 1)
   * @default 1
   */
  page: number | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_MESSAGES tool output.
 */
type MAILERSEND_GET_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Array of sent message objects
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when message sent (ISO 8601)
       */
      created_at: string;
      /**
       * Domain Id
       * @description Sending domain identifier
       */
      domain_id: string;
      /**
       * From
       * @description Sender details
       */
      from: {
          /**
           * Email
           * @description Sender email address
           */
          email: string;
          /**
           * Name
           * @description Sender name
           * @default null
           */
          name: string | null;
      };
      /**
       * Id
       * @description Unique message identifier
       */
      id: string;
      /**
       * Status
       * @description Message status (queued, sent, etc.)
       */
      status: string;
      /**
       * Subject
       * @description Message subject
       */
      subject: string;
      /**
       * To
       * @description List of recipients
       */
      to: {
          /**
           * Email
           * @description Recipient email address
           */
          email: string;
          /**
           * Name
           * @description Recipient name
           * @default null
           */
          name: string | null;
      }[];
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination navigation links
   */
  links?: {
      /**
       * First
       * @description URL for the first page
       */
      first: string;
      /**
       * Last
       * @description URL for the last page
       */
      last: string;
      /**
       * Next
       * @description URL for the next page, if available
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL for the previous page, if available
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata info
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Index of the first item on this page
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Total number of pages
       */
      last_page: number;
      /**
       * Path
       * @description API endpoint base path
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * To
       * @description Index of the last item on this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items across all pages
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
 * Type of MAILERSEND's MAILERSEND_GET_RECIPIENTS tool input.
 */
type MAILERSEND_GET_RECIPIENTS_INPUT = {
  /**
   * Limit
   * @description Number of results per page (default 25, maximum 100)
   * @default null
   */
  limit: number | null;
  /**
   * List Id
   * @description Filter recipients by this mailing list ID
   * @default null
   */
  list_id: string | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default null
   */
  page: number | null;
  /**
   * Search
   * @description Term to search in recipient email address or name
   * @default null
   */
  search: string | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_RECIPIENTS tool output.
 */
type MAILERSEND_GET_RECIPIENTS_OUTPUT = {
  /**
   * Data
   * @description List of recipient objects
   */
  data?: {
      /**
       * Created At
       * @description Timestamp of creation in ISO 8601 format
       */
      created_at: string;
      /**
       * Email
       * @description Recipient email address
       */
      email: string;
      /**
       * Id
       * @description Recipient ID
       */
      id: string;
      /**
       * Lists
       * @description Lists to which the recipient belongs
       */
      lists: {
          /**
           * Id
           * @description Unique identifier of the mailing list
           */
          id: string;
          /**
           * Name
           * @description Name of the mailing list
           */
          name: string;
      }[];
      /**
       * Name
       * @description Recipient name, if available
       * @default null
       */
      name: string | null;
      /**
       * Updated At
       * @description Timestamp of last update in ISO 8601 format
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page
       */
      first: string;
      /**
       * Last
       * @description URL of the last page
       */
      last: string;
      /**
       * Next
       * @description URL of the next page, if available
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page, if available
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Index of the first item on this page
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Total number of pages
       */
      last_page: number;
      /**
       * Path
       * @description Base path of the endpoint
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * To
       * @description Index of the last item on this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items across all pages
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
 * Type of MAILERSEND's MAILERSEND_GET_SMS_ACTIVITY tool input.
 */
type MAILERSEND_GET_SMS_ACTIVITY_INPUT = {
  /**
   * Date From
   * @description Filter activities created after this ISO 8601 date (e.g., 2022-01-01T00:00:00+0000)
   * @default null
   */
  date_from: string | null;
  /**
   * Date To
   * @description Filter activities created before this ISO 8601 date
   * @default null
   */
  date_to: string | null;
  /**
   * Limit
   * @description Number of results per page (default: 25, max: 100)
   * @default null
   */
  limit: number | null;
  /**
   * Message Id
   * @description Filter SMS activities by specific message ID
   * @default null
   */
  message_id: string | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default null
   */
  page: number | null;
  /**
   * Sms Number Id
   * @description Filter by SMS number ID
   * @default null
   */
  sms_number_id: string | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_SMS_ACTIVITY tool output.
 */
type MAILERSEND_GET_SMS_ACTIVITY_OUTPUT = {
  /**
   * Data
   * @description List of SMS activity objects
   */
  data?: {
      /**
       * Created At
       * @description Date/time sent in ISO 8601 format
       */
      created_at: string;
      /**
       * Id
       * @description Unique activity ID
       */
      id: string;
      /**
       * Message Id
       * @description Related message UUID
       */
      message_id: string;
      /**
       * Recipient
       * @description Phone number of the recipient
       */
      recipient: string;
      /**
       * Sms Number Id
       * @description SMS number resource ID
       */
      sms_number_id: string;
      /**
       * Status
       * @description Activity status (sent, delivered, etc.)
       */
      status: string;
      /**
       * Updated At
       * @description Last updated time in ISO 8601 format
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page of results
       */
      first: string;
      /**
       * Last
       * @description URL of the last page of results
       */
      last: string;
      /**
       * Next
       * @description URL of the next page, if available
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page, if available
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number | null;
      /**
       * From
       * @description Index of the first result on this page
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Last page number
       */
      last_page: number | null;
      /**
       * Path
       * @description Base path used for pagination links
       */
      path: string;
      /**
       * Per Page
       * @description Number of results per page
       */
      per_page: number;
      /**
       * To
       * @description Index of the last result on this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of results
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
 * Type of MAILERSEND's MAILERSEND_GET_SMS_INBOUNDS tool input.
 */
type MAILERSEND_GET_SMS_INBOUNDS_INPUT = {
  /**
   * Limit
   * @description Number of results per page (default: 25, max: 100)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default null
   */
  page: number | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_SMS_INBOUNDS tool output.
 */
type MAILERSEND_GET_SMS_INBOUNDS_OUTPUT = {
  /**
   * Data
   * @description List of inbound SMS message objects
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when message was received
       */
      created_at: string;
      /**
       * From
       * @description Sender phone number
       */
      from: string;
      /**
       * Id
       * @description Unique identifier of the inbound message
       */
      id: string;
      /**
       * Text
       * @description Message body content
       */
      text: string;
      /**
       * To
       * @description Recipient phone number (your MailerSend SMS number)
       */
      to: string;
      /**
       * Webhook Url
       * @description URL that received the webhook, if applicable
       * @default null
       */
      webhook_url: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page of results
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description URL of the last page of results
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description URL of the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page of results
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Index of the first result on this page
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Last page number
       */
      last_page: number;
      /**
       * Path
       * @description Base path used for pagination links
       */
      path: string;
      /**
       * Per Page
       * @description Number of results per page
       */
      per_page: number;
      /**
       * To
       * @description Index of the last result on this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of results
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
 * Type of MAILERSEND's MAILERSEND_GET_SMS_MESSAGES tool input.
 */
type MAILERSEND_GET_SMS_MESSAGES_INPUT = {
  /**
   * Date From
   * @description Start date filter in YYYY-MM-DD format
   * @default null
   */
  date_from: string | null;
  /**
   * Date To
   * @description End date filter in YYYY-MM-DD format
   * @default null
   */
  date_to: string | null;
  /**
   * Limit
   * @description Number of results per page (min 10, max 100)
   * @default 25
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination (must be >= 1)
   * @default 1
   */
  page: number | null;
  /**
   * Recipient
   * @description Filter by recipient phone number
   * @default null
   */
  recipient: string | null;
  /**
   * Status
   * @description Filter by message status
   * @default null
   * @enum {string|null}
   */
  status: "queued" | "sent" | "delivered" | "undelivered" | "failed" | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_SMS_MESSAGES tool output.
 */
type MAILERSEND_GET_SMS_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description List of SMS messages
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the message was created (ISO 8601)
       */
      created_at: string;
      /**
       * From
       * @description Sender ID or phone number
       */
      from: string;
      /**
       * Id
       * @description Unique SMS message identifier
       */
      id: string;
      /**
       * Status
       * @description Current status of the message
       */
      status: string;
      /**
       * Text
       * @description SMS message content
       */
      text: string;
      /**
       * To
       * @description Recipient phone numbers
       */
      to: string[];
      /**
       * Updated At
       * @description Timestamp when the message was last updated (ISO 8601)
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination navigation links
   */
  links?: {
      /**
       * First
       * @description URL to first page of results
       * @default null
       */
      first: string | null;
      /**
       * Last
       * @description URL to last page of results
       * @default null
       */
      last: string | null;
      /**
       * Next
       * @description URL to next page of results
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL to previous page of results
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Starting item number on this page
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Last available page number
       */
      last_page: number;
      /**
       * Path
       * @description API path for pagination links
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * To
       * @description Ending item number on this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items
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
 * Type of MAILERSEND's MAILERSEND_GET_SMS_NUMBERS tool input.
 */
type MAILERSEND_GET_SMS_NUMBERS_INPUT = {
  /**
   * Limit
   * @description Number of SMS numbers per page
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default null
   */
  page: number | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_SMS_NUMBERS tool output.
 */
type MAILERSEND_GET_SMS_NUMBERS_OUTPUT = {
  /**
   * Data
   * @description List of SMS number objects
   */
  data?: {
      /**
       * Country Code
       * @description Country code of the number
       */
      country_code: string;
      /**
       * Expires At
       * Format: date-time
       * @description Expiry timestamp (ISO 8601)
       */
      expires_at: string;
      /**
       * Id
       * @description Unique SMS number identifier
       */
      id: string;
      /**
       * Phone Number
       * @description Phone number in E.164 format
       */
      phone_number: string;
      /**
       * Purchased At
       * Format: date-time
       * @description Timestamp when the number was purchased (ISO 8601)
       */
      purchased_at: string;
      /**
       * Status
       * @description Status of the number (e.g., active, inactive)
       */
      status: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page
       */
      first: string;
      /**
       * Last
       * @description URL of the last page
       */
      last: string;
      /**
       * Next
       * @description URL of the next page, if available
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page, if available
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Index of the first item on this page
       * @default null
       */
      from_: number | null;
      /**
       * Last Page
       * @description Total number of pages
       */
      last_page: number;
      /**
       * Path
       * @description API path for pagination links
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * To
       * @description Index of the last item on this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items across all pages
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
 * Type of MAILERSEND's MAILERSEND_GET_SMS_RECIPIENTS tool input.
 */
type MAILERSEND_GET_SMS_RECIPIENTS_INPUT = {
  /**
   * Limit
   * @description Number of recipients per page (default 25, maximum 100)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve, starting from 1
   * @default null
   */
  page: number | null;
  /**
   * Sms Number Id
   * @description Filter recipients by SMS number ID.
   * @default null
   */
  sms_number_id: string | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_SMS_RECIPIENTS tool output.
 */
type MAILERSEND_GET_SMS_RECIPIENTS_OUTPUT = {
  /**
   * Data
   * @description List of SMS recipient objects
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the recipient was added (ISO 8601)
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the recipient
       */
      id: string;
      /**
       * Phone Number
       * @description Recipient phone number in E.164 format
       */
      phone_number: string;
      /**
       * Status
       * @description Status of the recipient, e.g., 'active' or 'unsubscribed'
       */
      status: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * Next
       * @description URL for the next page, if available
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL for the previous page, if available
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Index of the first item on this page
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Last page number
       */
      last_page: number;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * To
       * @description Index of the last item on this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items across all pages
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
 * Type of MAILERSEND's MAILERSEND_GET_SMTP_USERS tool input.
 */
type MAILERSEND_GET_SMTP_USERS_INPUT = {
  /**
   * Domain Id
   * @description Identifier of the domain for scoping SMTP users listing
   * @default null
   */
  domain_id: string | null;
  /**
   * Limit
   * @description Number of records per page (default 25, maximum 100)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve, starting from 1
   * @default null
   */
  page: number | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_SMTP_USERS tool output.
 */
type MAILERSEND_GET_SMTP_USERS_OUTPUT = {
  /**
   * Data
   * @description List of SMTP user objects
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the user was created (ISO 8601)
       */
      created_at: string;
      /**
       * Domain Id
       * @description Identifier of the domain associated with this SMTP user
       */
      domain_id: string;
      /**
       * Id
       * @description Unique identifier of the SMTP user
       */
      id: string;
      /**
       * Name
       * @description Friendly name of the SMTP user
       */
      name: string;
      /**
       * Password
       * @description SMTP password (returned only when creating a user)
       * @default null
       */
      password: string | null;
      /**
       * Updated At
       * @description Timestamp when the user was last updated (ISO 8601)
       */
      updated_at: string;
      /**
       * Username
       * @description SMTP username
       */
      username: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page
       */
      first: string;
      /**
       * Last
       * @description URL of the last page
       */
      last: string;
      /**
       * Next
       * @description URL of the next page, if available
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page, if available
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * From
       * @description Index of the first item on this page
       * @default null
       */
      from: number | null;
      /**
       * Last Page
       * @description Total number of pages
       */
      last_page: number;
      /**
       * Path
       * @description Base path of the endpoint
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * To
       * @description Index of the last item on this page
       * @default null
       */
      to: number | null;
      /**
       * Total
       * @description Total number of items across all pages
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
 * Type of MAILERSEND's MAILERSEND_GET_TEMPLATES tool input.
 */
type MAILERSEND_GET_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description Number of templates per page (default 25, maximum 100)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default null
   */
  page: number | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_TEMPLATES tool output.
 */
type MAILERSEND_GET_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description List of email templates
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the template was created (ISO 8601)
       */
      created_at: string;
      /**
       * Domain Id
       * @description ID of the domain this template belongs to
       */
      domain_id: string;
      /**
       * Id
       * @description Unique identifier of the template
       */
      id: string;
      /**
       * Name
       * @description Name of the template
       */
      name: string;
      /**
       * Type
       * @description Type of the template, e.g., 'html'
       */
      type: string;
      /**
       * Updated At
       * @description Timestamp when the template was last updated (ISO 8601)
       */
      updated_at: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page
       */
      first: string;
      /**
       * Last
       * @description URL of the last page
       */
      last: string;
      /**
       * Next
       * @description URL of the next page, if available
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page, if available
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * Last Page
       * @description Total number of pages
       */
      last_page: number;
      /**
       * Path
       * @description API path for pagination links
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * Total
       * @description Total number of items across all pages
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
 * Type of MAILERSEND's MAILERSEND_GET_TOKENS tool input.
 */
type MAILERSEND_GET_TOKENS_INPUT = {
  /**
   * Limit
   * @description Number of items per page (min=10, max=100)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default null
   */
  page: number | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_TOKENS tool output.
 */
type MAILERSEND_GET_TOKENS_OUTPUT = {
  /**
   * Data
   * @description Array of token objects
   */
  data?: {
      /**
       * Created At
       * @description Timestamp of token creation in ISO 8601 format
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the token
       */
      id: string;
      /**
       * Name
       * @description Name of the token
       */
      name: string;
      /**
       * Scopes
       * @description List of scopes (permissions) associated with the token
       */
      scopes: string[];
      /**
       * Status
       * @description Status of the token (e.g., 'active', 'unpause')
       */
      status: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page
       */
      first: string;
      /**
       * Last
       * @description URL of the last page
       */
      last: string;
      /**
       * Next
       * @description URL of the next page, if available
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page, if available
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * Last Page
       * @description Total number of pages
       */
      last_page: number;
      /**
       * Path
       * @description API path for pagination links
       */
      path: string;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * Total
       * @description Total number of items across all pages
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
 * Type of MAILERSEND's MAILERSEND_GET_USERS tool input.
 */
type MAILERSEND_GET_USERS_INPUT = {
  /**
   * Limit
   * @description Number of users per page (default 25, maximum 100)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default null
   */
  page: number | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_USERS tool output.
 */
type MAILERSEND_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description List of user objects
   */
  data?: {
      /**
       * Avatar Url
       * @description URL of the user's avatar image
       * @default null
       */
      avatar_url: string | null;
      /**
       * Created At
       * @description Timestamp of when the user was created (ISO 8601)
       */
      created_at: string;
      /**
       * Email
       * @description User's email address
       */
      email: string;
      /**
       * Id
       * @description Unique user identifier
       */
      id: string;
      /**
       * Name
       * @description User's name
       */
      name: string;
      /**
       * Role
       * @description User's role within the organization
       */
      role: string;
      /**
       * Status
       * @description User account status (e.g., 'active', 'pending')
       */
      status: string;
      /**
       * Updated At
       * @description Timestamp of when the user was last updated (ISO 8601)
       */
      updated_at: string;
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
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * Last Page
       * @description Last page number
       */
      last_page: number;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * Total
       * @description Total number of users across all pages
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
 * Type of MAILERSEND's MAILERSEND_GET_WEBHOOKS tool input.
 */
type MAILERSEND_GET_WEBHOOKS_INPUT = {
  /**
   * Domain Id
   * @description Filter webhooks belonging to this domain
   * @default null
   */
  domain_id: string | null;
  /**
   * Limit
   * @description Number of webhooks per page (default 25)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve, starting from 1
   * @default null
   */
  page: number | null;
};

/**
 * Type of MAILERSEND's MAILERSEND_GET_WEBHOOKS tool output.
 */
type MAILERSEND_GET_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description List of webhook objects
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the webhook was created (ISO 8601)
       */
      created_at: string;
      /**
       * Domain Id
       * @description Identifier of the domain associated with the webhook
       */
      domain_id: string;
      /**
       * Enabled
       * @description Whether the webhook is enabled
       */
      enabled: boolean;
      /**
       * Events
       * @description List of event types that trigger the webhook
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier of the webhook
       */
      id: string;
      /**
       * Name
       * @description Name of the webhook
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the webhook was last updated (ISO 8601)
       */
      updated_at: string;
      /**
       * Url
       * @description The URL endpoint for the webhook
       */
      url: string;
      /**
       * User Id
       * @description User ID who created the webhook
       */
      user_id: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Links
   * @description Pagination links
   */
  links?: {
      /**
       * First
       * @description URL of the first page
       */
      first: string;
      /**
       * Last
       * @description URL of the last page
       */
      last: string;
      /**
       * Next
       * @description URL of the next page, if any
       * @default null
       */
      next: string | null;
      /**
       * Prev
       * @description URL of the previous page, if any
       * @default null
       */
      prev: string | null;
  };
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * Last Page
       * @description Total number of pages available
       */
      last_page: number;
      /**
       * Per Page
       * @description Number of items per page
       */
      per_page: number;
      /**
       * Total
       * @description Total number of items across all pages
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
 * Type map of all available tool input types for toolkit "MAILERSEND".
 */
export type MAILERSEND_TOOL_INPUTS = {
  CREATE_DOMAIN: MAILERSEND_CREATE_DOMAIN_INPUT
  CREATE_SMTP_USER: MAILERSEND_CREATE_SMTP_USER_INPUT
  CREATE_TOKEN: MAILERSEND_CREATE_TOKEN_INPUT
  CREATE_WEBHOOK: MAILERSEND_CREATE_WEBHOOK_INPUT
  DELETE_WEBHOOK: MAILERSEND_DELETE_WEBHOOK_INPUT
  GET_API_QUOTA: MAILERSEND_GET_API_QUOTA_INPUT
  GET_DOMAIN: MAILERSEND_GET_DOMAIN_INPUT
  GET_DOMAINS: MAILERSEND_GET_DOMAINS_INPUT
  GET_DOMAIN_RECIPIENTS: MAILERSEND_GET_DOMAIN_RECIPIENTS_INPUT
  GET_GENERAL_RESOURCES: MAILERSEND_GET_GENERAL_RESOURCES_INPUT
  GET_IDENTITIES: MAILERSEND_GET_IDENTITIES_INPUT
  GET_MESSAGES: MAILERSEND_GET_MESSAGES_INPUT
  GET_RECIPIENTS: MAILERSEND_GET_RECIPIENTS_INPUT
  GET_SMS_ACTIVITY: MAILERSEND_GET_SMS_ACTIVITY_INPUT
  GET_SMS_INBOUNDS: MAILERSEND_GET_SMS_INBOUNDS_INPUT
  GET_SMS_MESSAGES: MAILERSEND_GET_SMS_MESSAGES_INPUT
  GET_SMS_NUMBERS: MAILERSEND_GET_SMS_NUMBERS_INPUT
  GET_SMS_RECIPIENTS: MAILERSEND_GET_SMS_RECIPIENTS_INPUT
  GET_SMTP_USERS: MAILERSEND_GET_SMTP_USERS_INPUT
  GET_TEMPLATES: MAILERSEND_GET_TEMPLATES_INPUT
  GET_TOKENS: MAILERSEND_GET_TOKENS_INPUT
  GET_USERS: MAILERSEND_GET_USERS_INPUT
  GET_WEBHOOKS: MAILERSEND_GET_WEBHOOKS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MAILERSEND".
 */
export type MAILERSEND_TOOL_OUTPUTS = {
  CREATE_DOMAIN: MAILERSEND_CREATE_DOMAIN_OUTPUT
  CREATE_SMTP_USER: MAILERSEND_CREATE_SMTP_USER_OUTPUT
  CREATE_TOKEN: MAILERSEND_CREATE_TOKEN_OUTPUT
  CREATE_WEBHOOK: MAILERSEND_CREATE_WEBHOOK_OUTPUT
  DELETE_WEBHOOK: MAILERSEND_DELETE_WEBHOOK_OUTPUT
  GET_API_QUOTA: MAILERSEND_GET_API_QUOTA_OUTPUT
  GET_DOMAIN: MAILERSEND_GET_DOMAIN_OUTPUT
  GET_DOMAINS: MAILERSEND_GET_DOMAINS_OUTPUT
  GET_DOMAIN_RECIPIENTS: MAILERSEND_GET_DOMAIN_RECIPIENTS_OUTPUT
  GET_GENERAL_RESOURCES: MAILERSEND_GET_GENERAL_RESOURCES_OUTPUT
  GET_IDENTITIES: MAILERSEND_GET_IDENTITIES_OUTPUT
  GET_MESSAGES: MAILERSEND_GET_MESSAGES_OUTPUT
  GET_RECIPIENTS: MAILERSEND_GET_RECIPIENTS_OUTPUT
  GET_SMS_ACTIVITY: MAILERSEND_GET_SMS_ACTIVITY_OUTPUT
  GET_SMS_INBOUNDS: MAILERSEND_GET_SMS_INBOUNDS_OUTPUT
  GET_SMS_MESSAGES: MAILERSEND_GET_SMS_MESSAGES_OUTPUT
  GET_SMS_NUMBERS: MAILERSEND_GET_SMS_NUMBERS_OUTPUT
  GET_SMS_RECIPIENTS: MAILERSEND_GET_SMS_RECIPIENTS_OUTPUT
  GET_SMTP_USERS: MAILERSEND_GET_SMTP_USERS_OUTPUT
  GET_TEMPLATES: MAILERSEND_GET_TEMPLATES_OUTPUT
  GET_TOKENS: MAILERSEND_GET_TOKENS_OUTPUT
  GET_USERS: MAILERSEND_GET_USERS_OUTPUT
  GET_WEBHOOKS: MAILERSEND_GET_WEBHOOKS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MAILERSEND toolkit.
 */
export const MAILERSEND = {
  slug: "mailersend",
  tools: {
    /**
     * Tool to add a new sending domain to mailersend. use when you need to register and configure a domain before sending emails.
     */
    CREATE_DOMAIN: "MAILERSEND_CREATE_DOMAIN",
    /**
     * Tool to create a new smtp user. use after domain setup to obtain smtp credentials.
     */
    CREATE_SMTP_USER: "MAILERSEND_CREATE_SMTP_USER",
    /**
     * Tool to create a new api token. use when you need to generate a token with specific permissions in mailersend.
     */
    CREATE_TOKEN: "MAILERSEND_CREATE_TOKEN",
    /**
     * Tool to create a new webhook for a mailersend domain. use after you have a domain id and need to receive event notifications like sent, delivered, opened, etc.
     */
    CREATE_WEBHOOK: "MAILERSEND_CREATE_WEBHOOK",
    /**
     * Tool to delete an existing webhook. use when the webhook is no longer needed. returns empty response on successful deletion (http 204).
     */
    DELETE_WEBHOOK: "MAILERSEND_DELETE_WEBHOOK",
    /**
     * Tool to retrieve current api usage quota. use when monitoring api rate limits to avoid exceeding allowed calls.
     */
    GET_API_QUOTA: "MAILERSEND_GET_API_QUOTA",
    /**
     * Tool to fetch information for a specific sending domain. use when you need to verify domain status and dns configuration after setup or changes.
     */
    GET_DOMAIN: "MAILERSEND_GET_DOMAIN",
    /**
     * Tool to retrieve a list of sending domains. use after configuring the mailersend api key.
     */
    GET_DOMAINS: "MAILERSEND_GET_DOMAINS",
    /**
     * Tool to list recipients for a domain. use after obtaining the domain id to view recipients with optional pagination.
     */
    GET_DOMAIN_RECIPIENTS: "MAILERSEND_GET_DOMAIN_RECIPIENTS",
    /**
     * Tool to retrieve general api resources and information. use when you need an overview of all mailersend endpoints before constructing specific calls.
     */
    GET_GENERAL_RESOURCES: "MAILERSEND_GET_GENERAL_RESOURCES",
    /**
     * Tool to list sender identities. use when you need to retrieve all configured email or domain sender identities after authenticating with your mailersend api token.
     */
    GET_IDENTITIES: "MAILERSEND_GET_IDENTITIES",
    /**
     * Tool to retrieve a paginated list of sent messages. use after sending emails to view message logs.
     */
    GET_MESSAGES: "MAILERSEND_GET_MESSAGES",
    /**
     * Tool to retrieve a list of email recipients. use when you need to list and filter recipients by list id or search term.
     */
    GET_RECIPIENTS: "MAILERSEND_GET_RECIPIENTS",
    /**
     * Tool to retrieve sms activity logs. use when you need to fetch delivery status and logs of sent sms messages.
     */
    GET_SMS_ACTIVITY: "MAILERSEND_GET_SMS_ACTIVITY",
    /**
     * Tool to retrieve inbound sms messages. use when you need to fetch sms messages received on your mailersend numbers.
     */
    GET_SMS_INBOUNDS: "MAILERSEND_GET_SMS_INBOUNDS",
    /**
     * Tool to list sent sms messages with optional filters. use after sending sms to review message logs.
     */
    GET_SMS_MESSAGES: "MAILERSEND_GET_SMS_MESSAGES",
    /**
     * Tool to retrieve a paginated list of sms phone numbers. use after purchasing numbers to fetch available sms numbers.
     */
    GET_SMS_NUMBERS: "MAILERSEND_GET_SMS_NUMBERS",
    /**
     * Tool to retrieve a list of sms recipients. use when you need to list and paginate sms recipients, optionally filtering by sms number id.
     */
    GET_SMS_RECIPIENTS: "MAILERSEND_GET_SMS_RECIPIENTS",
    /**
     * Tool to retrieve a list of smtp users. use when you need to list and paginate smtp users.
     */
    GET_SMTP_USERS: "MAILERSEND_GET_SMTP_USERS",
    /**
     * Tool to retrieve a list of email templates. use when you need to list and paginate email templates.
     */
    GET_TEMPLATES: "MAILERSEND_GET_TEMPLATES",
    /**
     * Tool to retrieve a list of api tokens. use when you need to list and paginate api tokens after authentication.
     */
    GET_TOKENS: "MAILERSEND_GET_TOKENS",
    /**
     * Tool to retrieve a list of users associated with your account. use after authenticating with a valid api token.
     */
    GET_USERS: "MAILERSEND_GET_USERS",
    /**
     * Tool to retrieve a list of webhooks. use when you need to list and paginate all configured webhooks, optionally filtering by domain.
     */
    GET_WEBHOOKS: "MAILERSEND_GET_WEBHOOKS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MAILERSEND".
 */
export type MAILERSEND_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MAILERSEND".
 */
export type MAILERSEND_TRIGGER_EVENTS = {}
