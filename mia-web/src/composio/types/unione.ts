// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of UNIONE's UNIONE_EMAIL_BALANCE tool input.
 */
type UNIONE_EMAIL_BALANCE_INPUT = object;

/**
 * Type of UNIONE's UNIONE_EMAIL_BALANCE tool output.
 */
type UNIONE_EMAIL_BALANCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounting
       * @description Account-level usage counters for the current billing period
       */
      accounting: {
          /**
           * Emails Included
           * @description Number of emails included in the plan for this period
           */
          emails_included: number;
          /**
           * Emails Sent
           * @description Number of emails sent in this period
           */
          emails_sent: number;
          /**
           * Period End
           * @description End of billing period in UTC (YYYY-MM-DD hh:mm:ss)
           */
          period_end: string;
          /**
           * Period Start
           * @description Start of billing period in UTC (YYYY-MM-DD hh:mm:ss)
           */
          period_start: string;
      };
      /**
       * Email
       * Format: email
       * @description User email address
       */
      email: unknown;
      /**
       * ProjectAccounting
       * @description Email counters for the current project.
       * @default null
       */
      project_accounting: {
          /**
           * Email Counter
           * @description Number of emails sent in this project period
           */
          email_counter: number;
          /**
           * Email Counter Limit
           * @description Maximum allowed emails for this project period
           */
          email_counter_limit: number;
          /**
           * Email Counter Mode
           * @description Mode of the email counter limit (e.g., "unlimited", "quota")
           */
          email_counter_mode: string;
      } | null;
      /**
       * Project Id
       * @description Project identifier when using a project API key
       * @default null
       */
      project_id: string | null;
      /**
       * Project Name
       * @description Project name when using a project API key
       * @default null
       */
      project_name: string | null;
      /**
       * Status
       * @description Operation result; 'success' on success
       */
      status: string;
      /**
       * User Id
       * @description Unique user identifier
       */
      user_id: number;
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
 * Type of UNIONE's UNIONE_EMAIL_CANCEL tool input.
 */
type UNIONE_EMAIL_CANCEL_INPUT = {
  /**
   * Job Id
   * @description ID of the scheduled email job to cancel.
   */
  job_id?: string;
};

/**
 * Type of UNIONE's UNIONE_EMAIL_CANCEL tool output.
 */
type UNIONE_EMAIL_CANCEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code if status is 'error'.
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Additional information or error details.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Response status: 'success' or 'error'.
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
 * Type of UNIONE's UNIONE_EMAIL_DOMAIN tool input.
 */
type UNIONE_EMAIL_DOMAIN_INPUT = {
  /**
   * Domain
   * @description Domain name to operate on. Required for all operations except 'list'.
   * @default null
   */
  domain: string | null;
  /**
   * Limit
   * @description Maximum number of items to return (only for 'list').
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Index of first item (0-based) (only for 'list').
   * @default null
   */
  offset: number | null;
  /**
   * Operation
   * @description Operation to perform on sender domains.
   * @enum {string}
   */
  operation?: "get_dns_records" | "validate_verification_record" | "validate_dkim" | "list" | "delete";
};

/**
 * Type of UNIONE's UNIONE_EMAIL_DOMAIN tool output.
 */
type UNIONE_EMAIL_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Dkim
       * @description DKIM key value for domain verification
       * @default null
       */
      dkim: string | null;
      /**
       * Domain
       * @description Domain name involved in the operation
       * @default null
       */
      domain: string | null;
      /**
       * Domains
       * @description List of domains with their verification and DKIM statuses
       * @default null
       */
      domains: {
          /**
           * Dkim
           * @description DKIM record state
           */
          dkim: {
              /**
               * Key
               * @description DKIM key value
               */
              key: string;
              /**
               * Status
               * @description DKIM status, e.g., 'active' or 'inactive'
               */
              status: string;
          };
          /**
           * Domain
           * @description Domain name
           */
          domain: string;
          /**
           * Verification Record
           * @description Ownership record state
           */
          verification_record: {
              /**
               * Status
               * @description Verification status, e.g., 'confirmed' or 'unconfirmed'
               */
              status: string;
              /**
               * Value
               * @description TXT value to publish for domain verification
               */
              value: string;
          };
      }[] | null;
      /**
       * Message
       * @description Debug message for operations returning a message
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description API operation status, must be 'success'
       * @constant
       */
      status: "success";
      /**
       * Verification Record
       * @description TXT record for domain ownership verification
       * @default null
       */
      verification_record: string | null;
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
 * Type of UNIONE's UNIONE_EMAIL_EVENT_GET tool input.
 */
type UNIONE_EMAIL_EVENT_GET_INPUT = {
  /**
   * Event Id
   * @description Unique identifier of the email event to retrieve.
   */
  event_id?: string;
};

/**
 * Type of UNIONE's UNIONE_EMAIL_EVENT_GET tool output.
 */
type UNIONE_EMAIL_EVENT_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code when status is 'error'
       * @default null
       */
      code: number | null;
      /**
       * EmailEvent
       * @description Properties of an email event.
       * @default null
       */
      event: {
          /**
           * Delivery Status
           * @description Detailed delivery status code provided by UniOne
           */
          delivery_status: string;
          /**
           * Destination Response
           * @description SMTP or HTTP response from the destination
           * @default null
           */
          destination_response: string | null;
          /**
           * Email
           * Format: email
           * @description Recipient email address
           */
          email: unknown;
          /**
           * Event Time
           * @description UTC timestamp of the event (YYYY-MM-DD hh:mm:ss UTC)
           */
          event_time: string;
          /**
           * From Email
           * Format: email
           * @description Sender email address
           */
          from_email: unknown;
          /**
           * Id
           * @description Unique event identifier
           */
          id: string;
          /**
           * Ip
           * @description IP address from which the event originated
           * @default null
           */
          ip: string | null;
          /**
           * Job Id
           * @description Identifier of the sending job
           */
          job_id: string;
          /**
           * Metadata
           * @description Custom metadata associated with the email, if any
           * @default null
           */
          metadata: string | null;
          /**
           * Status
           * @description General status of the event
           * @enum {string}
           */
          status: "accepted" | "sent" | "delivered" | "opened" | "clicked" | "unsubscribed" | "subscribed" | "soft_bounced" | "hard_bounced" | "spam";
          /**
           * Subject
           * @description Email subject line, if included in the event
           * @default null
           */
          subject: string | null;
          /**
           * Tags
           * @description List of tags associated with the email
           * @default null
           */
          tags: string[] | null;
          /**
           * Url
           * @description URL clicked by the user, if the event is 'clicked'
           * @default null
           */
          url: string | null;
          /**
           * User Agent
           * @description User agent string from the event, if available
           * @default null
           */
          user_agent: string | null;
      } | null;
      /**
       * Message
       * @description Error message when status is 'error'
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Operation result: 'success' or 'error'
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type of UNIONE's UNIONE_EMAIL_EVENT_TYPES tool input.
 */
type UNIONE_EMAIL_EVENT_TYPES_INPUT = object;

/**
 * Type of UNIONE's UNIONE_EMAIL_EVENT_TYPES tool output.
 */
type UNIONE_EMAIL_EVENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event Types
       * @description List of supported email event type codes
       */
      event_types: string[];
      /**
       * Status
       * @description API response status, e.g., 'success'
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
 * Type of UNIONE's UNIONE_EMAIL_GET tool input.
 */
type UNIONE_EMAIL_GET_INPUT = {
  /**
   * Job Id
   * @description Unique identifier of the email send job
   */
  job_id?: string;
};

/**
 * Type of UNIONE's UNIONE_EMAIL_GET tool output.
 */
type UNIONE_EMAIL_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code when status is 'error'
       * @default null
       */
      code: number | null;
      /**
       * EmailJobDetails
       * @description Detailed properties of the email send job.
       * @default null
       */
      job: {
          /**
           * Bounced
           * @description Number of bounced emails
           */
          bounced: number;
          /**
           * Clicked
           * @description Number of link clicks in emails
           */
          clicked: number;
          /**
           * Created At
           * @description UTC timestamp when the job was created (YYYY-MM-DD hh:mm:ss)
           */
          created_at: string;
          /**
           * Delivered
           * @description Number of successfully delivered emails
           */
          delivered: number;
          /**
           * From Email
           * @description Sender email address
           */
          from_email: string;
          /**
           * From Name
           * @description Sender display name, if provided
           * @default null
           */
          from_name: string | null;
          /**
           * Job Id
           * @description Unique identifier of the email job
           */
          job_id: string;
          /**
           * Opened
           * @description Number of emails opened by recipients
           */
          opened: number;
          /**
           * Recipients
           * @description Status list for each recipient of the email job
           */
          recipients?: {
              /**
               * Detail
               * @description Additional information for bounce or rejection reasons
               * @default null
               */
              detail: string | null;
              /**
               * Email
               * @description Recipient email address
               */
              email: string;
              /**
               * Status
               * @description Delivery status for the recipient
               * @enum {string}
               */
              status: "queued" | "delivered" | "bounced" | "opened" | "clicked" | "rejected";
          }[];
          /**
           * Send At
           * @description UTC timestamp when the job is scheduled or sent (YYYY-MM-DD hh:mm:ss)
           * @default null
           */
          send_at: string | null;
          /**
           * Spam Complaints
           * @description Number of spam complaints
           */
          spam_complaints: number;
          /**
           * Subject
           * @description Email subject
           */
          subject: string;
          /**
           * Total Recipients
           * @description Total number of recipients
           */
          total_recipients: number;
          /**
           * Unsubscribed
           * @description Number of unsubscribe requests
           */
          unsubscribed: number;
      } | null;
      /**
       * Message
       * @description Error message when status is 'error'
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description API call status: 'success' or 'error'
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type of UNIONE's UNIONE_EMAIL_LIST tool input.
 */
type UNIONE_EMAIL_LIST_INPUT = {
  /**
   * Aggregate
   * @description Aggregation over the period; cannot combine with filters when set
   * @default null
   * @enum {string|null}
   */
  aggregate: "day_status" | "" | null;
  /**
   * Campaign Id
   * @description Campaign identifier (decimal or UUID up to 128-bit)
   * @default null
   */
  campaign_id: string | null;
  /**
   * Date From
   * @description ISO 8601 start timestamp
   */
  date_from?: string;
  /**
   * Date To
   * @description ISO 8601 end timestamp
   * @default null
   */
  date_to: string | null;
  /**
   * Delimiter
   * @description CSV delimiter: ',' or ';'
   * @default null
   * @enum {string|null}
   */
  delimiter: "," | ";" | null;
  /**
   * Delivery Status
   * @description Comma-separated internal delivery statuses
   * @default null
   */
  delivery_status: string | null;
  /**
   * Domain
   * @description Recipient domain
   * @default null
   */
  domain: string | null;
  /**
   * Dump Fields
   * @description Ordered list of columns for the report. Defaults to a useful set if omitted.
   * @default null
   */
  dump_fields: string[] | null;
  /**
   * Email
   * @description Recipient email address
   * @default null
   */
  email: string | null;
  /**
   * Format
   * @description Output format: 'csv' (default) or 'csv_gzip'
   * @default null
   * @enum {string|null}
   */
  format: "csv" | "csv_gzip" | null;
  /**
   * From Email
   * @description Sender email address
   * @default null
   */
  from_email: string | null;
  /**
   * Limit
   * @description Max events per dump file (default 50). If >100000, multiple files are created.
   * @default 50
   */
  limit: number | null;
  /**
   * Status
   * @description Email status filter
   * @default null
   * @enum {string|null}
   */
  status: "accepted" | "sent" | "delivered" | "opened" | "clicked" | "unsubscribed" | "subscribed" | "soft_bounced" | "hard_bounced" | "spam" | null;
};

/**
 * Type of UNIONE's UNIONE_EMAIL_LIST tool output.
 */
type UNIONE_EMAIL_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code when status is 'error'
       * @default null
       */
      code: number | null;
      /**
       * Dump Id
       * @description Identifier to retrieve the dump via event-dump/get
       * @default null
       */
      dump_id: string | null;
      /**
       * Message
       * @description Error message when status is 'error'
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description API call status
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type of UNIONE's UNIONE_EMAIL_LOG tool input.
 */
type UNIONE_EMAIL_LOG_INPUT = {
  /**
   * Aggregate
   * @description Aggregation over the period: 'day_status' for daily stats. Cannot combine with filters when set.
   * @default null
   * @enum {string|null}
   */
  aggregate: "day_status" | "" | null;
  /**
   * All Projects
   * @description If true and projects are enabled, fetches data across all projects.
   * @default null
   */
  all_projects: boolean | null;
  /**
   * Delimiter
   * @description Field delimiter for CSV: ',' or ';'.
   * @default null
   * @enum {string|null}
   */
  delimiter: "," | ";" | null;
  /**
   * Dump Fields
   * @description Ordered list of columns for the report. Defaults to all standard fields if omitted.
   * @default null
   */
  dump_fields: string[] | null;
  /**
   * End Time
   * Format: date-time
   * @description End of time window (non-inclusive) in UTC 'YYYY-MM-DD hh:mm:ss'.
   * @default null
   */
  end_time: string | null;
  /**
   * EmailLogFilter
   * @description Filters to apply for the event dump.
   * @default null
   */
  filter: {
      /**
       * Campaign Id
       * @description Campaign identifier (decimal or UUID up to 128-bit) passed in metadata under 'campaign_id'.
       * @default null
       */
      campaign_id: string | null;
      /**
       * Delivery Status
       * @description Comma-separated UniOne internal delivery statuses. Examples: err_user_unknown, ok_delivered, err_mailbox_full, etc.
       * @default null
       */
      delivery_status: string | null;
      /**
       * Domain
       * @description Recipient domain (e.g., example.com).
       * @default null
       */
      domain: string | null;
      /**
       * Email
       * Format: email
       * @description Recipient email address.
       * @default null
       */
      email: unknown;
      /**
       * Email From
       * Format: email
       * @description Sender email address.
       * @default null
       */
      email_from: unknown;
      /**
       * Job Id
       * @description Job ID returned by email/send.
       * @default null
       */
      job_id: string | null;
      /**
       * Status
       * @description Email status filter.
       * @default null
       * @enum {string|null}
       */
      status: "accepted" | "sent" | "delivered" | "opened" | "clicked" | "unsubscribed" | "subscribed" | "soft_bounced" | "hard_bounced" | "spam" | null;
  } | null;
  /**
   * Format
   * @description Output format: 'csv' (default) or 'csv_gzip'.
   * @default null
   * @enum {string|null}
   */
  format: "csv" | "csv_gzip" | null;
  /**
   * Limit
   * @description Max events per file (default 50). If >100000, multiple files of 100000 events are created.
   * @default null
   */
  limit: number | null;
  /**
   * Start Time
   * Format: date-time
   * @description Start of time window in UTC 'YYYY-MM-DD hh:mm:ss'.
   */
  start_time?: string;
};

/**
 * Type of UNIONE's UNIONE_EMAIL_LOG tool output.
 */
type UNIONE_EMAIL_LOG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description API error code when status is 'error'.
       * @default null
       */
      code: number | null;
      /**
       * Dump Id
       * @description Identifier to retrieve the dump via event-dump/get when successful.
       * @default null
       */
      dump_id: string | null;
      /**
       * Message
       * @description Human-readable error message when status is 'error'.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description API call status: 'success' or 'error'.
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type of UNIONE's UNIONE_EMAIL_PLAN tool input.
 */
type UNIONE_EMAIL_PLAN_INPUT = object;

/**
 * Type of UNIONE's UNIONE_EMAIL_PLAN tool output.
 */
type UNIONE_EMAIL_PLAN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounting
       * @description Current accounting period info
       */
      accounting: {
          /**
           * Emails Included
           * @description Emails included in the period
           */
          emails_included: number;
          /**
           * Emails Sent
           * @description Emails sent during the period
           */
          emails_sent: number;
          /**
           * Period End
           * @description Period end (UTC, YYYY-MM-DD hh:mm:ss)
           */
          period_end: string;
          /**
           * Period Start
           * @description Period start (UTC, YYYY-MM-DD hh:mm:ss)
           */
          period_start: string;
      };
      /**
       * Email
       * Format: email
       * @description User email address
       */
      email: unknown;
      /**
       * ProjectAccounting
       * @description Project3 email counter settings.
       * @default null
       */
      project_accounting: {
          /**
           * Email Counter
           * @description Project's email counter value
           */
          email_counter: number;
          /**
           * Email Counter Limit
           * @description Limit on emails sent by the project; 0 means no limit
           */
          email_counter_limit: number;
          /**
           * Email Counter Mode
           * @description Email counter mode; 'default' (resets each accounting period) or 'permanent' (never resets automatically)
           */
          email_counter_mode: string;
      } | null;
      /**
       * Project Id
       * @description Project identifier when using a project API key
       * @default null
       */
      project_id: string | null;
      /**
       * Project Name
       * @description Project name when using a project API key
       * @default null
       */
      project_name: string | null;
      /**
       * Status
       * @description Operation result; 'success' on success
       */
      status: string;
      /**
       * User Id
       * @description Unique user identifier
       */
      user_id: number;
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
 * Type of UNIONE's UNIONE_EMAIL_PRICING tool input.
 */
type UNIONE_EMAIL_PRICING_INPUT = object;

/**
 * Type of UNIONE's UNIONE_EMAIL_PRICING tool output.
 */
type UNIONE_EMAIL_PRICING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code if the operation failed
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Error message if the operation failed
       * @default null
       */
      message: string | null;
      /**
       * Pricing
       * @description List of pricing details for each applicable region
       * @default null
       */
      pricing: {
          /**
           * Currency
           * @description Currency code for the pricing rate, e.g., 'USD'
           */
          currency: string;
          /**
           * Price
           * @description Cost per email in the specified currency
           */
          price: number;
          /**
           * Region
           * @description Region or country code for which this rate applies
           * @default null
           */
          region: string | null;
      }[] | null;
      /**
       * Status
       * @description Operation result; 'success' on success
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type of UNIONE's UNIONE_EMAIL_QUOTA tool input.
 */
type UNIONE_EMAIL_QUOTA_INPUT = object;

/**
 * Type of UNIONE's UNIONE_EMAIL_QUOTA tool output.
 */
type UNIONE_EMAIL_QUOTA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounting
       * @description Account-level usage counters for the current billing period
       */
      accounting: {
          /**
           * Emails Included
           * @description Number of emails included in the plan for this period
           */
          emails_included: number;
          /**
           * Emails Sent
           * @description Number of emails sent in this period
           */
          emails_sent: number;
          /**
           * Period End
           * @description End of billing period in UTC (YYYY-MM-DD hh:mm:ss)
           */
          period_end: string;
          /**
           * Period Start
           * @description Start of billing period in UTC (YYYY-MM-DD hh:mm:ss)
           */
          period_start: string;
      };
      /**
       * Email
       * Format: email
       * @description User email address
       */
      email: unknown;
      /**
       * ProjectAccounting
       * @description Email counters for the current project.
       * @default null
       */
      project_accounting: {
          /**
           * Email Counter
           * @description Number of emails sent in this project period
           */
          email_counter: number;
          /**
           * Email Counter Limit
           * @description Maximum allowed emails for this project period
           */
          email_counter_limit: number;
          /**
           * Email Counter Mode
           * @description Mode of the email counter limit (e.g., "default" or "permanent")
           */
          email_counter_mode: string;
      } | null;
      /**
       * Project Id
       * @description Project identifier when using a project API key
       * @default null
       */
      project_id: string | null;
      /**
       * Project Name
       * @description Project name when using a project API key
       * @default null
       */
      project_name: string | null;
      /**
       * Status
       * @description Operation result; 'success' on success
       */
      status: string;
      /**
       * User Id
       * @description Unique user identifier
       */
      user_id: number;
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
 * Type of UNIONE's UNIONE_EMAIL_RESEND tool input.
 */
type UNIONE_EMAIL_RESEND_INPUT = {
  /**
   * Job Id
   * @description Unique job ID of the originally sent email to resend.
   */
  job_id?: string;
};

/**
 * Type of UNIONE's UNIONE_EMAIL_RESEND tool output.
 */
type UNIONE_EMAIL_RESEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message providing additional info or error details.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Response status: 'success' or 'error'.
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
 * Type of UNIONE's UNIONE_EMAIL_RESUBSCRIBE tool input.
 */
type UNIONE_EMAIL_RESUBSCRIBE_INPUT = {
  /**
   * From Email
   * Format: email
   * @description Sender's email address to send the resubscribe message
   */
  from_email?: unknown;
  /**
   * From Name
   * @description Name of the sender displayed to the recipient
   */
  from_name?: string;
  /**
   * To Email
   * Format: email
   * @description Email address of the user to be resubscribed
   */
  to_email?: unknown;
};

/**
 * Type of UNIONE's UNIONE_EMAIL_RESUBSCRIBE tool output.
 */
type UNIONE_EMAIL_RESUBSCRIBE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code if status is 'error'
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Error message if status is 'error'
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Response status: 'success' or 'error'
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type of UNIONE's UNIONE_EMAIL_RESUME tool input.
 */
type UNIONE_EMAIL_RESUME_INPUT = {
  /**
   * Job Id
   * @description ID of the paused email job to resume.
   */
  job_id?: string;
};

/**
 * Type of UNIONE's UNIONE_EMAIL_RESUME tool output.
 */
type UNIONE_EMAIL_RESUME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code if status is 'error'.
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Additional information or error details.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Response status: 'success' or 'error'.
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
 * Type of UNIONE's UNIONE_EMAIL_SCHEDULE tool input.
 */
type UNIONE_EMAIL_SCHEDULE_INPUT = {
  /**
   * Message
   * @description Email message container with scheduling options
   */
  message?: {
      /**
       * Attachments
       * @description List of attachments
       * @default null
       */
      attachments: {
          /**
           * Content
           * @description Base64-encoded content of the attachment
           */
          content: string;
          /**
           * Name
           * @description Filename of the attachment (no '/' )
           */
          name: string;
          /**
           * Type
           * @description MIME type of the attachment
           */
          type: string;
      }[] | null;
      /**
       * Body
       * @description Email body content; requires at least one of html, plaintext, or amp
       * @default null
       */
      body: {
          /**
           * Amp
           * @description AMP4EMAIL content for supported clients
           * @default null
           */
          amp: string | null;
          /**
           * Html
           * @description HTML content of the email
           * @default null
           */
          html: string | null;
          /**
           * Plaintext
           * @description Plaintext content of the email
           * @default null
           */
          plaintext: string | null;
      } | null;
      /**
       * Bypass Complained
       * @description Bypass complained list; requires bypass_global
       * @default null
       */
      bypass_complained: number | null;
      /**
       * Bypass Global
       * @description Bypass global suppression lists
       * @default null
       */
      bypass_global: number | null;
      /**
       * Bypass Unavailable
       * @description Bypass unavailable list; requires bypass_global
       * @default null
       */
      bypass_unavailable: number | null;
      /**
       * Bypass Unsubscribed
       * @description Bypass unsubscribed list; requires bypass_global
       * @default null
       */
      bypass_unsubscribed: number | null;
      /**
       * From Email
       * @description Sender email address (required if no template_id)
       * @default null
       */
      from_email: string | null;
      /**
       * From Name
       * @description Sender display name
       * @default null
       */
      from_name: string | null;
      /**
       * Global Language
       * @description Unsubscribe footer language
       * @default null
       * @enum {string|null}
       */
      global_language: "be" | "de" | "en" | "es" | "fr" | "it" | "pl" | "pt" | "ru" | "ua" | "kz" | null;
      /**
       * Global Metadata
       * @description Global metadata
       * @default null
       */
      global_metadata: {
          [key: string]: string;
      } | null;
      /**
       * Global Substitutions
       * @description Global substitutions
       * @default null
       */
      global_substitutions: {
          [key: string]: string;
      } | null;
      /**
       * Headers
       * @description Custom X-* headers
       * @default null
       */
      headers: {
          [key: string]: string;
      } | null;
      /**
       * Idempotence Key
       * @description Idempotency key up to 64 chars
       * @default null
       */
      idempotence_key: string | null;
      /**
       * Inline Attachments
       * @description List of inline attachments
       * @default null
       */
      inline_attachments: {
          /**
           * Content
           * @description Base64-encoded content of the inline attachment
           */
          content: string;
          /**
           * Name
           * @description Content-ID name referenced as cid:NAME
           */
          name: string;
          /**
           * Type
           * @description MIME type of the inline attachment
           */
          type: string;
      }[] | null;
      /**
       * Options
       * @description Scheduling options including send_at for scheduled send
       */
      options: {
          /**
           * Custom Backend Id
           * @description Custom backend domain ID
           * @default null
           */
          custom_backend_id: number | null;
          /**
           * Send At
           * @description Scheduled UTC send time 'YYYY-MM-DD hh:mm:ss' (max 24h ahead)
           */
          send_at: string;
          /**
           * Smtp Pool Id
           * @description SMTP pool UUID
           * @default null
           */
          smtp_pool_id: string | null;
          /**
           * Unsubscribe Url
           * @description Custom unsubscribe link
           * @default null
           */
          unsubscribe_url: string | null;
      };
      /**
       * Recipients
       * @description List of recipients (max 500)
       */
      recipients: {
          /**
           * Email
           * @description Recipient email address
           */
          email: string;
          /**
           * Metadata
           * @description Per-recipient metadata
           * @default null
           */
          metadata: {
              [key: string]: string;
          } | null;
          /**
           * Substitutions
           * @description Per-recipient merge variables
           * @default null
           */
          substitutions: {
              [key: string]: string;
          } | null;
      }[];
      /**
       * Reply To
       * @description Reply-To email address
       * @default null
       */
      reply_to: string | null;
      /**
       * Reply To Name
       * @description Reply-To display name
       * @default null
       */
      reply_to_name: string | null;
      /**
       * Skip Unsubscribe
       * @description 1 to skip unsubscribe footer; requires approval
       * @default null
       */
      skip_unsubscribe: number | null;
      /**
       * Subject
       * @description Subject of the email (required if no template_id)
       * @default null
       */
      subject: string | null;
      /**
       * Tags
       * @description List of tags (max 4)
       * @default null
       */
      tags: string[] | null;
      /**
       * Template Engine
       * @description Template engine
       * @default null
       * @enum {string|null}
       */
      template_engine: "simple" | "velocity" | "liquid" | "none" | null;
      /**
       * Template Id
       * @description Template UUID for default values
       * @default null
       */
      template_id: string | null;
      /**
       * Track Links
       * @description 1 enable link tracking; 0 disable
       * @default null
       */
      track_links: number | null;
      /**
       * Track Read
       * @description 1 enable read tracking; 0 disable
       * @default null
       */
      track_read: number | null;
  };
};

/**
 * Type of UNIONE's UNIONE_EMAIL_SCHEDULE tool output.
 */
type UNIONE_EMAIL_SCHEDULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code when status is error
       * @default null
       */
      code: number | null;
      /**
       * Emails
       * @description List of emails accepted for scheduling
       * @default null
       */
      emails: string[] | null;
      /**
       * Failed Emails
       * @description Mapping of emails to failure reasons
       * @default null
       */
      failed_emails: {
          [key: string]: string;
      } | null;
      /**
       * Job Id
       * @description Identifier for the schedule job
       * @default null
       */
      job_id: string | null;
      /**
       * Message
       * @description Error message when status is error
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Operation status
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type of UNIONE's UNIONE_EMAIL_SMTP tool input.
 */
type UNIONE_EMAIL_SMTP_INPUT = object;

/**
 * Type of UNIONE's UNIONE_EMAIL_SMTP tool output.
 */
type UNIONE_EMAIL_SMTP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Smtp
       * @description SMTP server configuration
       */
      smtp: {
          /**
           * Host
           * @description SMTP server host name
           */
          host: string;
          /**
           * Password
           * @description SMTP authentication password (use your API key)
           */
          password: string;
          /**
           * Ports
           * @description Available SMTP ports (e.g., 25, 465, 587)
           */
          ports: number[];
          /**
           * Username
           * @description SMTP authentication username
           */
          username: string;
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
 * Type of UNIONE's UNIONE_EMAIL_STATISTICS tool input.
 */
type UNIONE_EMAIL_STATISTICS_INPUT = {
  /**
   * Date From
   * @description Start date (inclusive) in YYYY-MM-DD format
   */
  date_from?: string;
  /**
   * Date To
   * @description End date (inclusive) in YYYY-MM-DD format
   */
  date_to?: string;
};

/**
 * Type of UNIONE's UNIONE_EMAIL_STATISTICS tool output.
 */
type UNIONE_EMAIL_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stats
       * @description Detailed statistics breakdown per day
       */
      stats: {
          /**
           * Bounced
           * @description Number of emails bounced on this date
           */
          bounced: number;
          /**
           * Clicked
           * @description Number of unique clicks on this date
           */
          clicked: number;
          /**
           * Date
           * @description Date in YYYY-MM-DD format
           */
          date: string;
          /**
           * Delivered
           * @description Number of emails delivered on this date
           */
          delivered: number;
          /**
           * Opened
           * @description Number of unique opens on this date
           */
          opened: number;
          /**
           * Sent
           * @description Number of emails sent on this date
           */
          sent: number;
      }[];
      /**
       * Status
       * @description Operation result; 'success' indicates success
       */
      status: string;
      /**
       * Total
       * @description Aggregate statistics over the specified period
       */
      total: {
          /**
           * Bounced
           * @description Total emails bounced in the period
           */
          bounced: number;
          /**
           * Clicked
           * @description Total unique clicks in the period
           */
          clicked: number;
          /**
           * Delivered
           * @description Total emails delivered in the period
           */
          delivered: number;
          /**
           * Opened
           * @description Total unique opens in the period
           */
          opened: number;
          /**
           * Sent
           * @description Total emails sent in the period
           */
          sent: number;
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
 * Type of UNIONE's UNIONE_EMAIL_UNSUBSCRIBE tool input.
 */
type UNIONE_EMAIL_UNSUBSCRIBE_INPUT = {
  /**
   * Cause
   * @description Suppression reason; must be 'unsubscribed' for this action
   * @constant
   */
  cause?: "unsubscribed";
  /**
   * Created
   * Format: date-time
   * @description UTC timestamp when the suppression was created (YYYY-MM-DD hh:mm:ss)
   * @default null
   */
  created: string | null;
  /**
   * Email
   * Format: email
   * @description Email address to unsubscribe
   */
  email?: unknown;
};

/**
 * Type of UNIONE's UNIONE_EMAIL_UNSUBSCRIBE tool output.
 */
type UNIONE_EMAIL_UNSUBSCRIBE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description API error code if error
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Human-readable message if error or information
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description API call status: 'success' or 'error'
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
 * Type of UNIONE's UNIONE_EMAIL_VALIDATE tool input.
 */
type UNIONE_EMAIL_VALIDATE_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address to be checked
   */
  email?: unknown;
};

/**
 * Type of UNIONE's UNIONE_EMAIL_VALIDATE tool output.
 */
type UNIONE_EMAIL_VALIDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cause
       * @description Primary cause if not valid or for diagnostics detail
       * @enum {string}
       */
      cause: "no_mx_record" | "syntax_error" | "possible_typo" | "mailbox_not_found" | "global_suppression" | "disposable" | "role" | "abuse" | "spamtrap" | "smtp_connection_failed";
      /**
       * Did You Mean
       * Format: email
       * @description Suggested correction if a typo is detected (only when cause = possible_typo)
       * @default null
       */
      did_you_mean: unknown;
      /**
       * Domain
       * @description Domain part after the @ sign
       */
      domain: string;
      /**
       * Email
       * Format: email
       * @description Email address that was checked
       */
      email: unknown;
      /**
       * Local Part
       * @description Part before the @ sign
       */
      local_part: string;
      /**
       * Mx Found
       * @description Whether the domain has an MX record
       */
      mx_found: boolean;
      /**
       * Mx Record
       * @description Preferred MX record for the domain, if available
       * @default null
       */
      mx_record: string | null;
      /**
       * Processed At
       * @description UTC timestamp when the check was done (YYYY-MM-DD hh:mm:ss UTC)
       */
      processed_at: string;
      /**
       * Result
       * @description Result of validation
       * @enum {string}
       */
      result: "valid" | "invalid" | "suspicious" | "unknown";
      /**
       * Status
       * @description API call status, must be 'success'
       * @constant
       */
      status: "success";
      /**
       * Validity
       * @description Validity score from 0 (invalid) to 100 (valid)
       */
      validity: number;
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
 * Type of UNIONE's UNIONE_EMAIL_VALIDATE_BATCH tool input.
 */
type UNIONE_EMAIL_VALIDATE_BATCH_INPUT = {
  /**
   * Emails
   * @description List of email addresses to validate (must be valid email format).
   */
  emails?: unknown[];
};

/**
 * Type of UNIONE's UNIONE_EMAIL_VALIDATE_BATCH tool output.
 */
type UNIONE_EMAIL_VALIDATE_BATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Validation results for each input email.
       */
      results: {
          /**
           * Cause
           * @description Reason code for invalid or edge-case status.
           */
          cause: string;
          /**
           * Did You Mean
           * @description Suggested corrected email if a typo was detected.
           * @default null
           */
          did_you_mean: string | null;
          /**
           * Domain
           * @description Domain part after the '@'.
           */
          domain: string;
          /**
           * Email
           * Format: email
           * @description Address that was checked.
           */
          email: unknown;
          /**
           * Local Part
           * @description Local part before the '@'.
           */
          local_part: string;
          /**
           * Mx Found
           * @description Whether an MX record was found for the domain.
           */
          mx_found: boolean;
          /**
           * Mx Record
           * @description Preferred MX record for the domain, if available.
           * @default null
           */
          mx_record: string | null;
          /**
           * Processed At
           * @description Timestamp when this address was processed (ISO8601).
           */
          processed_at: string;
          /**
           * Result
           * @description One of: valid, invalid, suspicious, unknown.
           */
          result: string;
          /**
           * Validity
           * @description Score from 0 (bad) to 100 (good).
           */
          validity: number;
      }[];
      /**
       * Status
       * @description 'success' if batch processed without errors; otherwise 'error'.
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
 * Type of UNIONE's UNIONE_EMAIL_VALIDATE_RESEND tool input.
 */
type UNIONE_EMAIL_VALIDATE_RESEND_INPUT = {
  /**
   * Id
   * @description Unique identifier of the email validation request to resend.
   */
  id?: string;
};

/**
 * Type of UNIONE's UNIONE_EMAIL_VALIDATE_RESEND tool output.
 */
type UNIONE_EMAIL_VALIDATE_RESEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description UniOne error code if any
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Optional message providing additional information or error details.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description API response status returned by UniOne
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type of UNIONE's UNIONE_EMAIL_VALIDATE_RESULT tool input.
 */
type UNIONE_EMAIL_VALIDATE_RESULT_INPUT = {
  /**
   * Id
   * @description Email address to validate (previously: validation request ID)
   */
  id?: string;
};

/**
 * Type of UNIONE's UNIONE_EMAIL_VALIDATE_RESULT tool output.
 */
type UNIONE_EMAIL_VALIDATE_RESULT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cause
       * @description Primary cause if not valid or diagnostics detail
       * @enum {string}
       */
      cause: "no_mx_record" | "syntax_error" | "possible_typo" | "mailbox_not_found" | "global_suppression" | "disposable" | "role" | "abuse" | "spamtrap" | "smtp_connection_failed";
      /**
       * Did You Mean
       * Format: email
       * @description Suggested correction if a typo is detected (only when cause = possible_typo)
       * @default null
       */
      did_you_mean: unknown;
      /**
       * Domain
       * @description Domain part of the email address
       */
      domain: string;
      /**
       * Email
       * Format: email
       * @description Validated email address
       */
      email: unknown;
      /**
       * Local Part
       * @description Local part of the email address
       */
      local_part: string;
      /**
       * Mx Found
       * @description Whether the domain has an MX record
       */
      mx_found: boolean;
      /**
       * Mx Record
       * @description Preferred MX record for the domain, if available
       * @default null
       */
      mx_record: string | null;
      /**
       * Processed At
       * @description UTC timestamp when the validation was processed (YYYY-MM-DD hh:mm:ss)
       */
      processed_at: string;
      /**
       * Result
       * @description Validation result
       * @enum {string}
       */
      result: "valid" | "invalid" | "suspicious" | "unknown";
      /**
       * Status
       * @description API response status
       * @constant
       */
      status: "success";
      /**
       * Validity
       * @description Validity score from 0 (invalid) to 100 (valid)
       */
      validity: number;
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
 * Type of UNIONE's UNIONE_EMAIL_VALIDATE_RETRY tool input.
 */
type UNIONE_EMAIL_VALIDATE_RETRY_INPUT = {
  /**
   * Id
   * @description Email address to (re)validate (previously: request ID)
   */
  id?: string;
};

/**
 * Type of UNIONE's UNIONE_EMAIL_VALIDATE_RETRY tool output.
 */
type UNIONE_EMAIL_VALIDATE_RETRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cause
       * @description Primary cause if not valid or for diagnostics detail
       * @default null
       * @enum {string|null}
       */
      cause: "no_mx_record" | "syntax_error" | "possible_typo" | "mailbox_not_found" | "global_suppression" | "disposable" | "role" | "abuse" | "spamtrap" | "smtp_connection_failed" | null;
      /**
       * Code
       * @description UniOne error code when status == 'error'
       * @default null
       */
      code: number | null;
      /**
       * Did You Mean
       * Format: email
       * @description Suggested correction if a typo is detected (only when cause = possible_typo)
       * @default null
       */
      did_you_mean: unknown;
      /**
       * Domain
       * @description Domain part after the @ sign
       * @default null
       */
      domain: string | null;
      /**
       * Email
       * Format: email
       * @description Email address that was (re)validated
       * @default null
       */
      email: unknown;
      /**
       * Local Part
       * @description Part before the @ sign
       * @default null
       */
      local_part: string | null;
      /**
       * Message
       * @description Error message when status == 'error'
       * @default null
       */
      message: string | null;
      /**
       * Mx Found
       * @description Whether the domain has an MX record
       * @default null
       */
      mx_found: boolean | null;
      /**
       * Mx Record
       * @description Preferred MX record for the domain, if available
       * @default null
       */
      mx_record: string | null;
      /**
       * Processed At
       * @description UTC timestamp when the validation was processed (YYYY-MM-DD hh:mm:ss UTC)
       * @default null
       */
      processed_at: string | null;
      /**
       * Result
       * @description Result of validation
       * @default null
       * @enum {string|null}
       */
      result: "valid" | "invalid" | "suspicious" | "unknown" | null;
      /**
       * Status
       * @description API call status returned by UniOne
       * @enum {string}
       */
      status: "success" | "error";
      /**
       * Validity
       * @description Validity score from 0 (invalid) to 100 (valid)
       * @default null
       */
      validity: number | null;
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
 * Type of UNIONE's UNIONE_EMAIL_VALIDATE_STATUS tool input.
 */
type UNIONE_EMAIL_VALIDATE_STATUS_INPUT = {
  /**
   * Id
   * @description Email address to validate (previously: validation request ID). This action now uses the single validation endpoint to provide status.
   */
  id?: string;
};

/**
 * Type of UNIONE's UNIONE_EMAIL_VALIDATE_STATUS tool output.
 */
type UNIONE_EMAIL_VALIDATE_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Completed At
       * @description Timestamp when validation completed (UTC), if available
       * @default null
       */
      completed_at: string | null;
      /**
       * Email
       * Format: email
       * @description Email address that was validated
       * @default null
       */
      email: unknown;
      /**
       * Id
       * @description Identifier for the status request (email string)
       */
      id: string;
      /**
       * Requested At
       * @description Timestamp when validation was requested (UTC)
       * @default null
       */
      requested_at: string | null;
      /**
       * Result
       * @description Validation result, one of valid, invalid, suspicious, or unknown
       * @default null
       * @enum {string|null}
       */
      result: "valid" | "invalid" | "suspicious" | "unknown" | null;
      /**
       * Score
       * @description Validation score from 0 (invalid) to 100 (valid)
       * @default null
       */
      score: number | null;
      /**
       * Status
       * @description Current status of the email validation request
       * @enum {string}
       */
      status: "processing" | "completed" | "error";
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
 * Type of UNIONE's UNIONE_EMAIL_WEBHOOK_TYPES tool input.
 */
type UNIONE_EMAIL_WEBHOOK_TYPES_INPUT = object;

/**
 * Type of UNIONE's UNIONE_EMAIL_WEBHOOK_TYPES tool output.
 */
type UNIONE_EMAIL_WEBHOOK_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email Status
       * @description List of supported email status event types
       */
      email_status: string[];
      /**
       * Spam Block
       * @description List of supported spam-block event types
       */
      spam_block: string[];
      /**
       * Status
       * @description API response status, e.g., 'success'
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
 * Type of UNIONE's UNIONE_EVENT_DUMP_CREATE tool input.
 */
type UNIONE_EVENT_DUMP_CREATE_INPUT = {
  /**
   * Aggregate
   * @description Aggregation over the period: 'day_status' for daily stats. Cannot combine with filters when set.
   * @default null
   * @enum {string|null}
   */
  aggregate: "day_status" | "" | null;
  /**
   * All Projects
   * @description If true and projects are enabled, fetches data across all projects.
   * @default null
   */
  all_projects: boolean | null;
  /**
   * Delimiter
   * @description Field delimiter for CSV: ',' or ';'.
   * @default null
   * @enum {string|null}
   */
  delimiter: "," | ";" | null;
  /**
   * Dump Fields
   * @description Ordered list of columns for the report. Defaults to all standard fields if omitted.
   * @default null
   */
  dump_fields: string[] | null;
  /**
   * End Time
   * Format: date-time
   * @description End of time window (non-inclusive) in UTC 'YYYY-MM-DD hh:mm:ss'.
   * @default null
   */
  end_time: string | null;
  /**
   * EventDumpFilter
   * @description Filters to apply when selecting events for the dump.
   * @default null
   */
  filter: {
      /**
       * Campaign Id
       * @description Campaign identifier (decimal or UUID up to 128-bit) passed in metadata under 'campaign_id'.
       * @default null
       */
      campaign_id: string | null;
      /**
       * Delivery Status
       * @description Comma-separated UniOne internal delivery statuses. Examples: err_user_unknown, ok_delivered, err_mailbox_full, etc.
       * @default null
       */
      delivery_status: string | null;
      /**
       * Domain
       * @description Recipient domain (e.g., example.com).
       * @default null
       */
      domain: string | null;
      /**
       * Email
       * Format: email
       * @description Recipient email address.
       * @default null
       */
      email: unknown;
      /**
       * Email From
       * Format: email
       * @description Sender email address.
       * @default null
       */
      email_from: unknown;
      /**
       * Job Id
       * @description Job ID returned by email/send.
       * @default null
       */
      job_id: string | null;
      /**
       * Status
       * @description Email status filter.
       * @default null
       * @enum {string|null}
       */
      status: "accepted" | "sent" | "delivered" | "opened" | "clicked" | "unsubscribed" | "subscribed" | "soft_bounced" | "hard_bounced" | "spam" | null;
  } | null;
  /**
   * Format
   * @description Output format: 'csv' (default) or 'csv_gzip'.
   * @default null
   * @enum {string|null}
   */
  format: "csv" | "csv_gzip" | null;
  /**
   * Limit
   * @description Max events per file (default 50). If >100000, multiple files of 100000 events are created.
   * @default null
   */
  limit: number | null;
  /**
   * Start Time
   * Format: date-time
   * @description Start of time window in UTC 'YYYY-MM-DD hh:mm:ss'.
   */
  start_time?: string;
};

/**
 * Type of UNIONE's UNIONE_EVENT_DUMP_CREATE tool output.
 */
type UNIONE_EVENT_DUMP_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description API error code when status is 'error'.
       * @default null
       */
      code: number | null;
      /**
       * Dump Id
       * @description Identifier to retrieve the dump via event-dump/get when successful.
       * @default null
       */
      dump_id: string | null;
      /**
       * Message
       * @description Human-readable error message when status is 'error'.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description API call status: 'success' or 'error'.
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type of UNIONE's UNIONE_EVENT_DUMP_LIST tool input.
 */
type UNIONE_EVENT_DUMP_LIST_INPUT = object;

/**
 * Type of UNIONE's UNIONE_EVENT_DUMP_LIST tool output.
 */
type UNIONE_EVENT_DUMP_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event Dumps
       * @description Array of event-dump objects, each containing its files and metadata
       */
      event_dumps: {
          /**
           * Dump Id
           * @description Unique identifier of the dump task
           */
          dump_id: string;
          /**
           * Dump Status
           * @description Current status of the dump (e.g., 'queued', 'in_process', 'ready', 'failed')
           */
          dump_status: string;
          /**
           * Files
           * @description List of files generated by this dump
           */
          files: {
              /**
               * Size
               * @description File size in bytes
               */
              size: number;
              /**
               * Url
               * @description File download URL
               */
              url: string;
          }[];
      }[];
      /**
       * Status
       * @description Operation result; 'success' on success
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
 * Type of UNIONE's UNIONE_SCHEDULE_EMAIL tool input.
 */
type UNIONE_SCHEDULE_EMAIL_INPUT = {
  /**
   * Message
   * @description Email message container with scheduling options
   */
  message?: {
      /**
       * Attachments
       * @description List of attachments
       * @default null
       */
      attachments: {
          /**
           * Content
           * @description Base64-encoded content of the attachment
           */
          content: string;
          /**
           * Name
           * @description Filename of the attachment (no '/')
           */
          name: string;
          /**
           * Type
           * @description MIME type of the attachment
           */
          type: string;
      }[] | null;
      /**
       * Body
       * @description Email body content
       */
      body: {
          /**
           * Amp
           * @description AMP4EMAIL content for supported clients
           * @default null
           */
          amp: string | null;
          /**
           * Html
           * @description HTML content of the email
           * @default null
           */
          html: string | null;
          /**
           * Plaintext
           * @description Plaintext content of the email
           * @default null
           */
          plaintext: string | null;
      };
      /**
       * Bypass Complained
       * @description Bypass complained list; requires bypass_global
       * @default null
       */
      bypass_complained: number | null;
      /**
       * Bypass Global
       * @description Bypass global suppression lists
       * @default null
       */
      bypass_global: number | null;
      /**
       * Bypass Unavailable
       * @description Bypass unavailable list; requires bypass_global
       * @default null
       */
      bypass_unavailable: number | null;
      /**
       * Bypass Unsubscribed
       * @description Bypass unsubscribed list; requires bypass_global
       * @default null
       */
      bypass_unsubscribed: number | null;
      /**
       * From Email
       * @description Sender email address (required if no template_id)
       * @default null
       */
      from_email: string | null;
      /**
       * From Name
       * @description Sender display name
       * @default null
       */
      from_name: string | null;
      /**
       * Global Language
       * @description Unsubscribe footer language
       * @default null
       * @enum {string|null}
       */
      global_language: "be" | "de" | "en" | "es" | "fr" | "it" | "pl" | "pt" | "ru" | "ua" | "kz" | null;
      /**
       * Global Metadata
       * @description Global metadata
       * @default null
       */
      global_metadata: {
          [key: string]: string;
      } | null;
      /**
       * Global Substitutions
       * @description Global substitutions
       * @default null
       */
      global_substitutions: {
          [key: string]: string;
      } | null;
      /**
       * Headers
       * @description Custom X-* headers
       * @default null
       */
      headers: {
          [key: string]: string;
      } | null;
      /**
       * Idempotence Key
       * @description Idempotency key up to 64 chars
       * @default null
       */
      idempotence_key: string | null;
      /**
       * Inline Attachments
       * @description List of inline attachments
       * @default null
       */
      inline_attachments: {
          /**
           * Content
           * @description Base64-encoded content of the inline attachment
           */
          content: string;
          /**
           * Name
           * @description Content-ID name referenced as cid:NAME
           */
          name: string;
          /**
           * Type
           * @description MIME type of the inline attachment
           */
          type: string;
      }[] | null;
      /**
       * Options
       * @description Additional options including send_at for scheduled send
       */
      options: {
          /**
           * Custom Backend Id
           * @description Custom backend domain ID
           * @default null
           */
          custom_backend_id: number | null;
          /**
           * Send At
           * @description Scheduled UTC send time 'YYYY-MM-DD hh:mm:ss' (max 24h ahead)
           */
          send_at: string;
          /**
           * Smtp Pool Id
           * @description SMTP pool UUID
           * @default null
           */
          smtp_pool_id: string | null;
          /**
           * Unsubscribe Url
           * @description Custom unsubscribe link
           * @default null
           */
          unsubscribe_url: string | null;
      };
      /**
       * Recipients
       * @description List of recipients (max 500)
       */
      recipients: {
          /**
           * Email
           * @description Recipient email address
           */
          email: string;
          /**
           * Metadata
           * @description Per-recipient metadata
           * @default null
           */
          metadata: {
              [key: string]: string;
          } | null;
          /**
           * Substitutions
           * @description Per-recipient merge variables
           * @default null
           */
          substitutions: {
              [key: string]: string;
          } | null;
      }[];
      /**
       * Reply To
       * @description Reply-To email address
       * @default null
       */
      reply_to: string | null;
      /**
       * Reply To Name
       * @description Reply-To display name
       * @default null
       */
      reply_to_name: string | null;
      /**
       * Skip Unsubscribe
       * @description 1 to skip unsubscribe footer; requires approval
       * @default null
       */
      skip_unsubscribe: number | null;
      /**
       * Subject
       * @description Subject of the email
       */
      subject: string;
      /**
       * Tags
       * @description List of tags (max 4)
       * @default null
       */
      tags: string[] | null;
      /**
       * Template Engine
       * @description Template engine
       * @default null
       * @enum {string|null}
       */
      template_engine: "simple" | "velocity" | "liquid" | "none" | null;
      /**
       * Template Id
       * @description Template UUID for default values
       * @default null
       */
      template_id: string | null;
      /**
       * Track Links
       * @description 1 enable link tracking; 0 disable
       * @default null
       */
      track_links: number | null;
      /**
       * Track Read
       * @description 1 enable read tracking; 0 disable
       * @default null
       */
      track_read: number | null;
  };
};

/**
 * Type of UNIONE's UNIONE_SCHEDULE_EMAIL tool output.
 */
type UNIONE_SCHEDULE_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code if status is error
       * @default null
       */
      code: number | null;
      /**
       * Emails
       * @description Accepted emails for scheduling
       * @default null
       */
      emails: string[] | null;
      /**
       * Failed Emails
       * @description Map of failed emails to reasons
       * @default null
       */
      failed_emails: {
          [key: string]: string;
      } | null;
      /**
       * Job Id
       * @description Scheduling job identifier
       * @default null
       */
      job_id: string | null;
      /**
       * Message
       * @description Error message if status is error
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Response status
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type of UNIONE's UNIONE_SUPPRESSION_LIST tool input.
 */
type UNIONE_SUPPRESSION_LIST_INPUT = {
  /**
   * Cause
   * @description Optional cause filter. One of: unsubscribed, temporary_unavailable, permanent_unavailable, complained, blocked. New causes may be added.
   * @default null
   * @enum {string|null}
   */
  cause: "unsubscribed" | "temporary_unavailable" | "permanent_unavailable" | "complained" | "blocked" | null;
  /**
   * Cursor
   * @description Pagination cursor. Omit for first call; use `cursor` from previous response for subsequent pages.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of records to return. Defaults to 50.
   * @default 50
   */
  limit: number | null;
  /**
   * Source
   * @description Optional source filter. One of: user (set via suppression/set), system, subscriber.
   * @default null
   * @enum {string|null}
   */
  source: "user" | "system" | "subscriber" | null;
  /**
   * Start Time
   * Format: date-time
   * @description UTC start time (YYYY-MM-DD hh:mm:ss) to fetch suppressions from. Ignored if `cursor` is provided.
   * @default null
   */
  start_time: string | null;
};

/**
 * Type of UNIONE's UNIONE_SUPPRESSION_LIST tool output.
 */
type UNIONE_SUPPRESSION_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description API error code when status is 'error'.
       * @default null
       */
      code: number | null;
      /**
       * Cursor
       * @description Cursor for next page of results if more data is available.
       * @default null
       */
      cursor: string | null;
      /**
       * Message
       * @description Human-readable error message when status is 'error'.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description API call status: 'success' or 'error'.
       */
      status: string;
      /**
       * Suppressions
       * @description List of suppression entries when status is 'success'.
       */
      suppressions?: {
          /**
           * Cause
           * @description Suppression cause (same values as request `cause`).
           */
          cause: string;
          /**
           * Created
           * Format: date-time
           * @description UTC timestamp when suppression was created (YYYY-MM-DD hh:mm:ss).
           */
          created: string;
          /**
           * Email
           * Format: email
           * @description Suppressed email address.
           */
          email: unknown;
          /**
           * Is Deletable
           * @description Whether this suppression may be removed via suppression/delete.
           */
          is_deletable: boolean;
          /**
           * Source
           * @description Suppression source (same values as request `source`).
           */
          source: string;
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
 * Type of UNIONE's UNIONE_TAG_DELETE tool input.
 */
type UNIONE_TAG_DELETE_INPUT = {
  /**
   * Tag Id
   * @description Unique identifier of the tag to delete.
   */
  tag_id?: number;
};

/**
 * Type of UNIONE's UNIONE_TAG_DELETE tool output.
 */
type UNIONE_TAG_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Optional error code returned by the API.
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Optional message providing additional information or error details.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Response status: 'success' or 'error'.
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
 * Type of UNIONE's UNIONE_TAG_LIST tool input.
 */
type UNIONE_TAG_LIST_INPUT = object;

/**
 * Type of UNIONE's UNIONE_TAG_LIST tool output.
 */
type UNIONE_TAG_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Operation result; 'success' on success
       */
      status: string;
      /**
       * Tags
       * @description Array of tag objects, each with its identifier and name
       */
      tags: {
          /**
           * Tag
           * @description Tag name
           */
          tag: string;
          /**
           * Tag Id
           * @description Unique tag identifier
           */
          tag_id: number;
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
 * Type of UNIONE's UNIONE_TEMPLATE_LIST tool input.
 */
type UNIONE_TEMPLATE_LIST_INPUT = {
  /**
   * Limit
   * @description Maximum number of templates to return, must be at least 1.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Starting index (0-based) for pagination.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of UNIONE's UNIONE_TEMPLATE_LIST tool output.
 */
type UNIONE_TEMPLATE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Operation result; 'success' on success.
       */
      status: string;
      /**
       * Templates
       * @description Array of template objects returned by the API.
       */
      templates: {
          /**
           * Attachments
           * @description List of attachments for the template.
           */
          attachments?: {
              /**
               * Content
               * @description Base64-encoded content of the attachment.
               */
              content: string;
              /**
               * Name
               * @description Filename of the attachment.
               */
              name: string;
              /**
               * Type
               * @description MIME type of the attachment.
               */
              type: string;
          }[];
          /**
           * Body
           * @description Object containing the HTML, plaintext, and AMP content.
           */
          body: {
              /**
               * Amp
               * @description AMP version of the email body.
               * @default null
               */
              amp: string | null;
              /**
               * Html
               * @description HTML version of the email body.
               * @default null
               */
              html: string | null;
              /**
               * Plaintext
               * @description Plaintext version of the email body.
               * @default null
               */
              plaintext: string | null;
          };
          /**
           * Created
           * @description UTC timestamp when the template was created, format YYYY-MM-DD HH:MM:SS.
           */
          created: string;
          /**
           * Editor Type
           * @description Type of editor, e.g., 'html' or 'visual'.
           * @default null
           */
          editor_type: string | null;
          /**
           * From Email
           * @description Default sender email address.
           */
          from_email: string;
          /**
           * From Name
           * @description Default sender name.
           * @default null
           */
          from_name: string | null;
          /**
           * Global Metadata
           * @description Global metadata key/value pairs attached to the template.
           */
          global_metadata?: {
              [key: string]: string;
          };
          /**
           * Global Substitutions
           * @description Global merge variables available across the template.
           */
          global_substitutions?: {
              [key: string]: string;
          };
          /**
           * Headers
           * @description Custom email headers applied to the message.
           */
          headers?: {
              [key: string]: string;
          };
          /**
           * Id
           * @description Unique template identifier.
           */
          id: string;
          /**
           * Inline Attachments
           * @description List of inline attachments for the template.
           */
          inline_attachments?: {
              /**
               * Content
               * @description Base64-encoded content of the attachment.
               */
              content: string;
              /**
               * Name
               * @description Filename of the attachment.
               */
              name: string;
              /**
               * Type
               * @description MIME type of the attachment.
               */
              type: string;
          }[];
          /**
           * Name
           * @description Name of the template.
           */
          name: string;
          /**
           * Project Id
           * @description Identifier of the project associated with the template.
           * @default null
           */
          project_id: string | null;
          /**
           * Project Name
           * @description Name of the project associated with the template.
           * @default null
           */
          project_name: string | null;
          /**
           * Reply To
           * @description Default reply-to email address.
           * @default null
           */
          reply_to: string | null;
          /**
           * Reply To Name
           * @description Default reply-to name.
           * @default null
           */
          reply_to_name: string | null;
          /**
           * Subject
           * @description Default subject line of the template.
           * @default null
           */
          subject: string | null;
          /**
           * Template Engine
           * @description Template engine in use, e.g., 'simple', 'velocity', 'liquid', or 'none'.
           * @default null
           */
          template_engine: string | null;
          /**
           * Track Links
           * @description Flag to enable link tracking (0 or 1).
           * @default null
           */
          track_links: number | null;
          /**
           * Track Read
           * @description Flag to enable read tracking (0 or 1).
           * @default null
           */
          track_read: number | null;
          /**
           * User Id
           * @description Identifier of the user who created the template.
           */
          user_id: number;
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
 * Type of UNIONE's UNIONE_TEMPLATE_SET tool input.
 */
type UNIONE_TEMPLATE_SET_INPUT = {
  /**
   * Template
   * @description Template object to create or update.
   */
  template?: {
      /**
       * Attachments
       * @default null
       */
      attachments: {
          /**
           * Content
           * @description Base64-encoded content; max 7MB (9786710 bytes in base64).
           */
          content: string;
          /**
           * Name
           * @description Unique filename for the attachment; must not contain '/'.
           */
          name: string;
          /**
           * Type
           * @description MIME type of the attachment (e.g., 'application/pdf').
           */
          type: string;
      }[] | null;
      /**
       * BodyModel
       * @description Email body content; requires HTML or plaintext.
       * @default null
       */
      body: {
          /**
           * Amp
           * @description AMP part of the email.
           * @default null
           */
          amp: string | null;
          /**
           * Html
           * @description HTML part of the email.
           * @default null
           */
          html: string | null;
          /**
           * Plaintext
           * @description Plaintext part of the email.
           * @default null
           */
          plaintext: string | null;
      } | null;
      /**
       * Editor Type
       * @default null
       * @enum {string|null}
       */
      editor_type: "html" | "visual" | null;
      /**
       * From Email
       * Format: email
       */
      from_email: unknown;
      /**
       * From Name
       * @default null
       */
      from_name: string | null;
      /**
       * Global Metadata
       * @default null
       */
      global_metadata: {
          [key: string]: string;
      } | null;
      /**
       * Global Substitutions
       * @default null
       */
      global_substitutions: {
          [key: string]: string;
      } | null;
      /**
       * Headers
       * @default null
       */
      headers: {
          [key: string]: string;
      } | null;
      /**
       * Id
       * Format: uuid
       * @description UUID of existing template; omit to create new.
       * @default null
       */
      id: unknown;
      /**
       * Inline Attachments
       * @default null
       */
      inline_attachments: {
          /**
           * Content
           * @description Base64-encoded content; max 7MB (9786710 bytes in base64).
           */
          content: string;
          /**
           * Name
           * @description Content-ID used in HTML as cid:NAME.
           */
          name: string;
          /**
           * Type
           * @description MIME type of the inline attachment (e.g., 'image/png').
           */
          type: string;
      }[] | null;
      /**
       * Name
       * @description Template name.
       */
      name: string;
      /**
       * Reply To
       * Format: email
       * @default null
       */
      reply_to: unknown;
      /**
       * Reply To Name
       * @default null
       */
      reply_to_name: string | null;
      /**
       * Subject
       * @default null
       */
      subject: string | null;
      /**
       * Template Engine
       * @default null
       * @enum {string|null}
       */
      template_engine: "simple" | "velocity" | "liquid" | "none" | null;
      /**
       * Track Links
       * @default null
       * @enum {integer|null}
       */
      track_links: 0 | 1 | null;
      /**
       * Track Read
       * @default null
       * @enum {integer|null}
       */
      track_read: 0 | 1 | null;
  };
};

/**
 * Type of UNIONE's UNIONE_TEMPLATE_SET tool output.
 */
type UNIONE_TEMPLATE_SET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code if status is error.
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Error message if status is error.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description API response status.
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type of UNIONE's UNIONE_UNIONE_EMAIL_VALIDATE_DELETE tool input.
 */
type UNIONE_UNIONE_EMAIL_VALIDATE_DELETE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the email validation request to delete.
   */
  id?: string;
};

/**
 * Type of UNIONE's UNIONE_UNIONE_EMAIL_VALIDATE_DELETE tool output.
 */
type UNIONE_UNIONE_EMAIL_VALIDATE_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message providing additional information or error details.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Response status: 'success' or 'error'.
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
 * Type of UNIONE's UNIONE_UNIONE_EVENT_DUMP_GET tool input.
 */
type UNIONE_UNIONE_EVENT_DUMP_GET_INPUT = {
  /**
   * Dump Id
   * @description Dump identifier returned by the event-dump/create endpoint
   */
  dump_id?: string;
};

/**
 * Type of UNIONE's UNIONE_UNIONE_EVENT_DUMP_GET tool output.
 */
type UNIONE_UNIONE_EVENT_DUMP_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event Dump
       * @description Properties of the requested event dump
       */
      event_dump: {
          /**
           * Dump Id
           * @description Dump identifier returned by event-dump/create
           */
          dump_id: string;
          /**
           * Dump Status
           * @description Task status: queued, in_process, ready, or failed
           * @enum {string}
           */
          dump_status: "queued" | "in_process" | "ready" | "failed";
          /**
           * Files
           * @description List of files ready for download (may be empty if no events)
           */
          files?: {
              /**
               * Size
               * @description Size of the file in bytes
               */
              size: number;
              /**
               * Url
               * @description Download URL for the dump file (.csv or .csv.gz)
               */
              url: string;
          }[];
      };
      /**
       * Status
       * @description Indicates successful retrieval
       * @constant
       */
      status: "success";
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
 * Type of UNIONE's UNIONE_WEBHOOK_SET tool input.
 */
type UNIONE_WEBHOOK_SET_INPUT = {
  /**
   * Delivery Info
   * @description 1 to include detailed delivery info, 0 otherwise
   * @default null
   */
  delivery_info: number | null;
  /**
   * Event Format
   * @description Notification format: 'json_post' (default) or 'json_post_gzip'
   * @default null
   * @enum {string|null}
   */
  event_format: "json_post" | "json_post_gzip" | null;
  /**
   * WebhookEvents
   * @description Events container for webhook notifications
   * @default null
   */
  events: {
      /**
       * Email Status
       * @description List of email status events to notify about
       * @default null
       */
      email_status: string[] | null;
      /**
       * Spam Block
       * @description Include to receive spam-block events; e.g., ['*']
       * @default null
       */
      spam_block: string[] | null;
  } | null;
  /**
   * Max Parallel
   * @description Maximum number of parallel requests allowed
   * @default null
   */
  max_parallel: number | null;
  /**
   * Single Event
   * @description 1 to send single event per call, 0 to batch multiple
   * @default null
   */
  single_event: number | null;
  /**
   * Status
   * @description Webhook status: 'active' (default), 'disabled' (user-disabled), or 'stopped' (auto-stopped after 24h of failed calls)
   * @default null
   * @enum {string|null}
   */
  status: "active" | "disabled" | "stopped" | null;
  /**
   * Url
   * @description Target URL to receive event notifications; ASCII only (use Punycode for non-ASCII)
   */
  url?: string;
};

/**
 * Type of UNIONE's UNIONE_WEBHOOK_SET tool output.
 */
type UNIONE_WEBHOOK_SET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Error code if status is error
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Error message if status is error
       * @default null
       */
      message: string | null;
      /**
       * WebhookProperties
       * @description Properties of a configured webhook
       * @default null
       */
      object: {
          /**
           * Delivery Info
           * @description 1 if delivery info is included, 0 otherwise
           */
          delivery_info: number;
          /**
           * Event Format
           * @description Configured notification format
           * @enum {string}
           */
          event_format: "json_post" | "json_post_gzip";
          /**
           * WebhookEvents
           * @description Events container for webhook notifications
           * @default null
           */
          events: {
              /**
               * Email Status
               * @description List of email status events to notify about
               * @default null
               */
              email_status: string[] | null;
              /**
               * Spam Block
               * @description Include to receive spam-block events; e.g., ['*']
               * @default null
               */
              spam_block: string[] | null;
          } | null;
          /**
           * Id
           * @description Unique webhook identifier
           */
          id: number;
          /**
           * Max Parallel
           * @description Configured max parallel calls
           */
          max_parallel: number;
          /**
           * Single Event
           * @description 1 if single event per call, 0 for batching
           */
          single_event: number;
          /**
           * Status
           * @description Current webhook status
           * @enum {string}
           */
          status: "active" | "disabled" | "stopped";
          /**
           * Updated At
           * @description Last update time in UTC (YYYY-MM-DD hh:mm:ss)
           * @default null
           */
          updated_at: string | null;
          /**
           * Url
           * @description Webhook URL
           */
          url: string;
      } | null;
      /**
       * Status
       * @description API response status
       * @enum {string}
       */
      status: "success" | "error";
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
 * Type map of all available tool input types for toolkit "UNIONE".
 */
export type UNIONE_TOOL_INPUTS = {
  EMAIL_BALANCE: UNIONE_EMAIL_BALANCE_INPUT
  EMAIL_CANCEL: UNIONE_EMAIL_CANCEL_INPUT
  EMAIL_DOMAIN: UNIONE_EMAIL_DOMAIN_INPUT
  EMAIL_EVENT_GET: UNIONE_EMAIL_EVENT_GET_INPUT
  EMAIL_EVENT_TYPES: UNIONE_EMAIL_EVENT_TYPES_INPUT
  EMAIL_GET: UNIONE_EMAIL_GET_INPUT
  EMAIL_LIST: UNIONE_EMAIL_LIST_INPUT
  EMAIL_LOG: UNIONE_EMAIL_LOG_INPUT
  EMAIL_PLAN: UNIONE_EMAIL_PLAN_INPUT
  EMAIL_PRICING: UNIONE_EMAIL_PRICING_INPUT
  EMAIL_QUOTA: UNIONE_EMAIL_QUOTA_INPUT
  EMAIL_RESEND: UNIONE_EMAIL_RESEND_INPUT
  EMAIL_RESUBSCRIBE: UNIONE_EMAIL_RESUBSCRIBE_INPUT
  EMAIL_RESUME: UNIONE_EMAIL_RESUME_INPUT
  EMAIL_SCHEDULE: UNIONE_EMAIL_SCHEDULE_INPUT
  EMAIL_SMTP: UNIONE_EMAIL_SMTP_INPUT
  EMAIL_STATISTICS: UNIONE_EMAIL_STATISTICS_INPUT
  EMAIL_UNSUBSCRIBE: UNIONE_EMAIL_UNSUBSCRIBE_INPUT
  EMAIL_VALIDATE: UNIONE_EMAIL_VALIDATE_INPUT
  EMAIL_VALIDATE_BATCH: UNIONE_EMAIL_VALIDATE_BATCH_INPUT
  EMAIL_VALIDATE_RESEND: UNIONE_EMAIL_VALIDATE_RESEND_INPUT
  EMAIL_VALIDATE_RESULT: UNIONE_EMAIL_VALIDATE_RESULT_INPUT
  EMAIL_VALIDATE_RETRY: UNIONE_EMAIL_VALIDATE_RETRY_INPUT
  EMAIL_VALIDATE_STATUS: UNIONE_EMAIL_VALIDATE_STATUS_INPUT
  EMAIL_WEBHOOK_TYPES: UNIONE_EMAIL_WEBHOOK_TYPES_INPUT
  EVENT_DUMP_CREATE: UNIONE_EVENT_DUMP_CREATE_INPUT
  EVENT_DUMP_LIST: UNIONE_EVENT_DUMP_LIST_INPUT
  SCHEDULE_EMAIL: UNIONE_SCHEDULE_EMAIL_INPUT
  SUPPRESSION_LIST: UNIONE_SUPPRESSION_LIST_INPUT
  TAG_DELETE: UNIONE_TAG_DELETE_INPUT
  TAG_LIST: UNIONE_TAG_LIST_INPUT
  TEMPLATE_LIST: UNIONE_TEMPLATE_LIST_INPUT
  TEMPLATE_SET: UNIONE_TEMPLATE_SET_INPUT
  UNIONE_EMAIL_VALIDATE_DELETE: UNIONE_UNIONE_EMAIL_VALIDATE_DELETE_INPUT
  UNIONE_EVENT_DUMP_GET: UNIONE_UNIONE_EVENT_DUMP_GET_INPUT
  WEBHOOK_SET: UNIONE_WEBHOOK_SET_INPUT
}

/**
 * Type map of all available tool input types for toolkit "UNIONE".
 */
export type UNIONE_TOOL_OUTPUTS = {
  EMAIL_BALANCE: UNIONE_EMAIL_BALANCE_OUTPUT
  EMAIL_CANCEL: UNIONE_EMAIL_CANCEL_OUTPUT
  EMAIL_DOMAIN: UNIONE_EMAIL_DOMAIN_OUTPUT
  EMAIL_EVENT_GET: UNIONE_EMAIL_EVENT_GET_OUTPUT
  EMAIL_EVENT_TYPES: UNIONE_EMAIL_EVENT_TYPES_OUTPUT
  EMAIL_GET: UNIONE_EMAIL_GET_OUTPUT
  EMAIL_LIST: UNIONE_EMAIL_LIST_OUTPUT
  EMAIL_LOG: UNIONE_EMAIL_LOG_OUTPUT
  EMAIL_PLAN: UNIONE_EMAIL_PLAN_OUTPUT
  EMAIL_PRICING: UNIONE_EMAIL_PRICING_OUTPUT
  EMAIL_QUOTA: UNIONE_EMAIL_QUOTA_OUTPUT
  EMAIL_RESEND: UNIONE_EMAIL_RESEND_OUTPUT
  EMAIL_RESUBSCRIBE: UNIONE_EMAIL_RESUBSCRIBE_OUTPUT
  EMAIL_RESUME: UNIONE_EMAIL_RESUME_OUTPUT
  EMAIL_SCHEDULE: UNIONE_EMAIL_SCHEDULE_OUTPUT
  EMAIL_SMTP: UNIONE_EMAIL_SMTP_OUTPUT
  EMAIL_STATISTICS: UNIONE_EMAIL_STATISTICS_OUTPUT
  EMAIL_UNSUBSCRIBE: UNIONE_EMAIL_UNSUBSCRIBE_OUTPUT
  EMAIL_VALIDATE: UNIONE_EMAIL_VALIDATE_OUTPUT
  EMAIL_VALIDATE_BATCH: UNIONE_EMAIL_VALIDATE_BATCH_OUTPUT
  EMAIL_VALIDATE_RESEND: UNIONE_EMAIL_VALIDATE_RESEND_OUTPUT
  EMAIL_VALIDATE_RESULT: UNIONE_EMAIL_VALIDATE_RESULT_OUTPUT
  EMAIL_VALIDATE_RETRY: UNIONE_EMAIL_VALIDATE_RETRY_OUTPUT
  EMAIL_VALIDATE_STATUS: UNIONE_EMAIL_VALIDATE_STATUS_OUTPUT
  EMAIL_WEBHOOK_TYPES: UNIONE_EMAIL_WEBHOOK_TYPES_OUTPUT
  EVENT_DUMP_CREATE: UNIONE_EVENT_DUMP_CREATE_OUTPUT
  EVENT_DUMP_LIST: UNIONE_EVENT_DUMP_LIST_OUTPUT
  SCHEDULE_EMAIL: UNIONE_SCHEDULE_EMAIL_OUTPUT
  SUPPRESSION_LIST: UNIONE_SUPPRESSION_LIST_OUTPUT
  TAG_DELETE: UNIONE_TAG_DELETE_OUTPUT
  TAG_LIST: UNIONE_TAG_LIST_OUTPUT
  TEMPLATE_LIST: UNIONE_TEMPLATE_LIST_OUTPUT
  TEMPLATE_SET: UNIONE_TEMPLATE_SET_OUTPUT
  UNIONE_EMAIL_VALIDATE_DELETE: UNIONE_UNIONE_EMAIL_VALIDATE_DELETE_OUTPUT
  UNIONE_EVENT_DUMP_GET: UNIONE_UNIONE_EVENT_DUMP_GET_OUTPUT
  WEBHOOK_SET: UNIONE_WEBHOOK_SET_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's UNIONE toolkit.
 */
export const UNIONE = {
  slug: "unione",
  tools: {
    /**
     * Tool to retrieve current account balance. use when you need to check your email usage and limits before sending large campaigns.
     */
    EMAIL_BALANCE: "UNIONE_EMAIL_BALANCE",
    /**
     * Tool to cancel a scheduled transactional email by its job id. use when you need to stop a pending email send before it's dispatched.
     */
    EMAIL_CANCEL: "UNIONE_EMAIL_CANCEL",
    /**
     * Tool to manage sender domains in unione. use when you need dns records for verification, trigger verification or dkim checks, list domains, or delete a domain.
     */
    EMAIL_DOMAIN: "UNIONE_EMAIL_DOMAIN",
    /**
     * Tool to retrieve details of a specific email event by its id. use when you need event information for auditing or diagnostics.
     */
    EMAIL_EVENT_GET: "UNIONE_EMAIL_EVENT_GET",
    /**
     * Tool to retrieve supported email event types. use when you need a list of possible event codes for filtering or analytics.
     */
    EMAIL_EVENT_TYPES: "UNIONE_EMAIL_EVENT_TYPES",
    /**
     * Tool to retrieve detailed information about a specific email send job. use when you need its delivery metrics and history.
     */
    EMAIL_GET: "UNIONE_EMAIL_GET",
    /**
     * Tool to export email events within a specified time frame. it creates an asynchronous event dump which can later be downloaded and parsed using unione event dump get.
     */
    EMAIL_LIST: "UNIONE_EMAIL_LIST",
    /**
     * Tool to initiate an asynchronous export of email events (event dump). use when you need to export transactional email events for a specified time window.
     */
    EMAIL_LOG: "UNIONE_EMAIL_LOG",
    /**
     * Tool to retrieve current subscription plan details. use when you need to check your project and account plan limits before sending bulk emails.
     */
    EMAIL_PLAN: "UNIONE_EMAIL_PLAN",
    /**
     * Tool to retrieve current email pricing. use when you need to check per-email cost rates before sending emails.
     */
    EMAIL_PRICING: "UNIONE_EMAIL_PRICING",
    /**
     * Tool to retrieve current email sending quota. use when you need to check your remaining quota before sending emails.
     */
    EMAIL_QUOTA: "UNIONE_EMAIL_QUOTA",
    /**
     * Tool to resend a previously sent email by its job id. use when you need to trigger a resend of an email that has already been sent and you have the original job id.
     */
    EMAIL_RESEND: "UNIONE_EMAIL_RESEND",
    /**
     * Tool to resubscribe a recipient who previously unsubscribed. use when you need to restore a user's subscription status after they opt in again.
     */
    EMAIL_RESUBSCRIBE: "UNIONE_EMAIL_RESUBSCRIBE",
    /**
     * Tool to resume a paused transactional email by its job id. use when you need to restart a paused pending email send.
     */
    EMAIL_RESUME: "UNIONE_EMAIL_RESUME",
    /**
     * Tool to schedule a transactional email up to 24 hours ahead. use when you need to send an email at a specific future time.
     */
    EMAIL_SCHEDULE: "UNIONE_EMAIL_SCHEDULE",
    /**
     * Tool to retrieve smtp server details and credentials. use when you need to configure your mail client or library for smtp sending.
     */
    EMAIL_SMTP: "UNIONE_EMAIL_SMTP",
    /**
     * Tool to retrieve email sending statistics over a specified time range. this action uses unione's event-dump aggregate api under the hood to compute daily statistics.
     */
    EMAIL_STATISTICS: "UNIONE_EMAIL_STATISTICS",
    /**
     * Tool to unsubscribe an email from future emails. use when you need to stop all further transactional emails.
     */
    EMAIL_UNSUBSCRIBE: "UNIONE_EMAIL_UNSUBSCRIBE",
    /**
     * Tool to validate an email address. use when you need deliverability diagnostics after compiling your recipient list.
     */
    EMAIL_VALIDATE: "UNIONE_EMAIL_VALIDATE",
    /**
     * Tool to validate multiple email addresses in a batch. use when you need to verify deliverability for a list of emails at once.
     */
    EMAIL_VALIDATE_BATCH: "UNIONE_EMAIL_VALIDATE_BATCH",
    /**
     * Tool to resend results of an email validation request. use when you need to retrieve validation results again by request id.
     */
    EMAIL_VALIDATE_RESEND: "UNIONE_EMAIL_VALIDATE_RESEND",
    /**
     * Tool to retrieve the detailed result of an email validation request. updated behavior: uses the official single email validation endpoint to synchronously obtain full diagnostics for the provided email address.
     */
    EMAIL_VALIDATE_RESULT: "UNIONE_EMAIL_VALIDATE_RESULT",
    /**
     * Tool to retry an email validation request. updated to re-run validation via the official single validation endpoint using the provided email address.
     */
    EMAIL_VALIDATE_RETRY: "UNIONE_EMAIL_VALIDATE_RETRY",
    /**
     * Tool to retrieve the current status of an email validation request. use when you need to poll for completion status.
     */
    EMAIL_VALIDATE_STATUS: "UNIONE_EMAIL_VALIDATE_STATUS",
    /**
     * Tool to retrieve supported email webhook event types. use when configuring your webhook callbacks.
     */
    EMAIL_WEBHOOK_TYPES: "UNIONE_EMAIL_WEBHOOK_TYPES",
    /**
     * Tool to create an asynchronous csv event dump. use when you need to export transactional email events for a specified time window.
     */
    EVENT_DUMP_CREATE: "UNIONE_EVENT_DUMP_CREATE",
    /**
     * Tool to retrieve the full list of event dumps. use when you need to view all existing event-dump tasks.
     */
    EVENT_DUMP_LIST: "UNIONE_EVENT_DUMP_LIST",
    /**
     * Tool to schedule a transactional email up to 24 hours ahead. use when you need to send an email at a specific future time.
     */
    SCHEDULE_EMAIL: "UNIONE_SCHEDULE_EMAIL",
    /**
     * Tool to return the suppression list since a given date. use when auditing bounced, unsubscribed, or blocked recipients.
     */
    SUPPRESSION_LIST: "UNIONE_SUPPRESSION_LIST",
    /**
     * Tool to delete a specific tag. use when you have confirmed the tag id you wish to remove.
     */
    TAG_DELETE: "UNIONE_TAG_DELETE",
    /**
     * Tool to retrieve all user-defined tags. use when you need to fetch the full list of tags after authentication.
     */
    TAG_LIST: "UNIONE_TAG_LIST",
    /**
     * Tool to list email templates. use when you need to retrieve available templates for transactional emails.
     */
    TEMPLATE_LIST: "UNIONE_TEMPLATE_LIST",
    /**
     * Tool to set or update an email template. use when you need to create or modify transactional email templates before sending messages.
     */
    TEMPLATE_SET: "UNIONE_TEMPLATE_SET",
    /**
     * Tool to delete an email validation request. use when a validation job should be canceled by its id.
     */
    UNIONE_EMAIL_VALIDATE_DELETE: "UNIONE_UNIONE_EMAIL_VALIDATE_DELETE",
    /**
     * Tool to retrieve the contents of a specific event dump. use when you have the dump identifier (from event-dump/create) and need its status and download urls.
     */
    UNIONE_EVENT_DUMP_GET: "UNIONE_UNIONE_EVENT_DUMP_GET",
    /**
     * Tool to set or edit a webhook event notification handler. use when you need to configure your webhook for event callbacks.
     */
    WEBHOOK_SET: "UNIONE_WEBHOOK_SET",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "UNIONE".
 */
export type UNIONE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "UNIONE".
 */
export type UNIONE_TRIGGER_EVENTS = {}
