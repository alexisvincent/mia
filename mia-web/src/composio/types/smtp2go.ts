// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SMTP2GO's SMTP2GO_ACTIVITY_SEARCH tool input.
 */
type SMTP2GO_ACTIVITY_SEARCH_INPUT = {
  /**
   * Limit
   * @description Number of results to return, defaults to 100, maximum 1000
   * @default 100
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip for pagination
   * @default 0
   */
  offset: number | null;
  /**
   * SearchParams
   * @description Filter criteria for searching email activity.
   * @default null
   */
  search: {
      /**
       * Date End
       * Format: date
       * @description End date in YYYY-MM-DD format
       * @default null
       */
      date_end: unknown;
      /**
       * Date Start
       * Format: date
       * @description Start date in YYYY-MM-DD format
       * @default null
       */
      date_start: unknown;
      /**
       * Email Address
       * @description Email address to search for
       * @default null
       */
      email_address: string | null;
      /**
       * Event
       * @description Event type to filter
       * @default null
       * @enum {string|null}
       */
      event: "sent" | "bounced" | "opened" | "clicked" | null;
      /**
       * Message Id
       * @description Specific message ID
       * @default null
       */
      message_id: string | null;
      /**
       * Recipient
       * @description Recipient email address
       * @default null
       */
      recipient: string | null;
  } | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_ACTIVITY_SEARCH tool output.
 */
type SMTP2GO_ACTIVITY_SEARCH_OUTPUT = {
  /**
   * Data
   * @description List of activity records matching search criteria
   */
  data?: {
      /**
       * Email Address
       * @description Associated email address
       */
      email_address: string;
      /**
       * Event
       * @description Event type
       */
      event: string;
      /**
       * Ip
       * @description IP address involved
       * @default null
       */
      ip: string | null;
      /**
       * Location
       * @description Geographical location for open/click events
       * @default null
       */
      location: string | null;
      /**
       * Message Id
       * @description Message ID
       */
      message_id: string;
      /**
       * Recipient
       * @description Recipient email address
       */
      recipient: string;
      /**
       * Sender
       * @description Sender email address
       */
      sender: string;
      /**
       * Smtp Response
       * @description SMTP server response, if applicable
       * @default null
       */
      smtp_response: string | null;
      /**
       * Subject
       * @description Subject of the email
       * @default null
       */
      subject: string | null;
      /**
       * Timestamp
       * @description Date/time of the event in ISO 8601 format
       */
      timestamp: string;
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
  /**
   * Total
   * @description Total number of matching records
   */
  total?: number;
};

/**
 * Type of SMTP2GO's SMTP2GO_ALLOWED_SENDERS_ADD tool input.
 */
type SMTP2GO_ALLOWED_SENDERS_ADD_INPUT = {
  /**
   * Email Address
   * Format: email
   * @description Email address to add as an allowed sender.
   */
  email_address?: unknown;
};

/**
 * Type of SMTP2GO's SMTP2GO_ALLOWED_SENDERS_ADD tool output.
 */
type SMTP2GO_ALLOWED_SENDERS_ADD_OUTPUT = {
  /**
   * Data
   * @description Data returned for the added allowed sender.
   */
  data?: {
      /**
       * Allowed Sender Id
       * @description Unique ID of the allowed sender
       */
      allowed_sender_id: string;
      /**
       * Email Address
       * @description Email address that was added
       */
      email_address: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code returned by SMTP2GO API
   */
  error_code?: number;
  /**
   * Error Message
   * @description Error message returned by SMTP2GO API
   * @default null
   */
  error_message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_ALLOWED_SENDERS_REMOVE tool input.
 */
type SMTP2GO_ALLOWED_SENDERS_REMOVE_INPUT = {
  /**
   * Email Address
   * Format: email
   * @description The email address to remove from the allowed senders list
   */
  email_address?: unknown;
};

/**
 * Type of SMTP2GO's SMTP2GO_ALLOWED_SENDERS_REMOVE tool output.
 */
type SMTP2GO_ALLOWED_SENDERS_REMOVE_OUTPUT = {
  /**
   * AllowedSendersRemoveData
   * @description Data section of the response.
   * @default null
   */
  data: {
      /**
       * Succeeded
       * @description Indicates if the removal operation succeeded
       */
      succeeded: boolean;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code if the operation failed
   * @default null
   */
  error_code: number | null;
  /**
   * Error Message
   * @description Error message if the operation failed or was unsuccessful
   * @default null
   */
  error_message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_ALLOWED_SENDERS_UPDATE tool input.
 */
type SMTP2GO_ALLOWED_SENDERS_UPDATE_INPUT = {
  /**
   * Allowed Sender Id
   * @description The ID of the allowed sender to update
   */
  allowed_sender_id?: string;
  /**
   * Email Address
   * Format: email
   * @description New email address for the allowed sender
   * @default null
   */
  email_address: unknown;
  /**
   * Name
   * @description New display name for the allowed sender
   * @default null
   */
  name: string | null;
  /**
   * Reply Prompt
   * @description Whether reply prompt is enabled for this sender
   * @default null
   */
  reply_prompt: boolean | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_ALLOWED_SENDERS_UPDATE tool output.
 */
type SMTP2GO_ALLOWED_SENDERS_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Updated allowed sender details
   */
  data?: {
      /**
       * Allowed Sender Id
       * @description The unique ID of the allowed sender
       */
      allowed_sender_id: string;
      /**
       * Email Address
       * Format: email
       * @description Email address of the allowed sender
       */
      email_address: unknown;
      /**
       * Name
       * @description Display name of the allowed sender
       */
      name: string;
      /**
       * Reply Prompt
       * @description Whether reply prompt is enabled for this sender
       */
      reply_prompt: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique ID for this API request
   */
  request_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_ALLOWED_SENDERS_VIEW tool input.
 */
type SMTP2GO_ALLOWED_SENDERS_VIEW_INPUT = {
  /**
   * Limit
   * @description Maximum number of results to return (1-1000).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of results to skip for pagination.
   * @default null
   */
  offset: number | null;
  /**
   * Sender Email
   * @description Filter by exact sender email address.
   * @default null
   */
  sender_email: string | null;
  /**
   * Verified
   * @description Filter by verification status ('verified' or 'unverified').
   * @default null
   * @enum {string|null}
   */
  verified: "verified" | "unverified" | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_ALLOWED_SENDERS_VIEW tool output.
 */
type SMTP2GO_ALLOWED_SENDERS_VIEW_OUTPUT = {
  /**
   * Data
   * @description List of allowed sender records matching the query.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when this sender was added (ISO 8601 format).
       */
      created_at: string;
      /**
       * Sender Email
       * @description Allowed sender's email address.
       */
      sender_email: string;
      /**
       * Verified
       * @description Verification status.
       * @enum {string}
       */
      verified: "verified" | "unverified";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Zero if successful; otherwise an error code.
   */
  error_code?: number;
  /**
   * Request Id
   * @description Unique ID for this API request.
   */
  request_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of matched senders.
   */
  total?: number;
};

/**
 * Type of SMTP2GO's SMTP2GO_DOMAIN_ADD tool input.
 */
type SMTP2GO_DOMAIN_ADD_INPUT = {
  /**
   * Auto Verify
   * @description If true, SMTP2GO will attempt to verify SPF/DKIM records automatically.
   * @default null
   */
  auto_verify: boolean | null;
  /**
   * Domain
   * @description The domain to add as a sending domain (top-level or subdomain).
   */
  domain?: string;
  /**
   * Returnpath Subdomain
   * @description Subdomain to use as the return-path (bounce) domain.
   * @default null
   */
  returnpath_subdomain: string | null;
  /**
   * Subaccount Id
   * @description Unique ID of the subaccount (if you manage multiple subaccounts).
   * @default null
   */
  subaccount_id: string | null;
  /**
   * Tracking Subdomain
   * @description Subdomain for click/open tracking and unsubscribe links; defaults to 'link' if omitted.
   * @default null
   */
  tracking_subdomain: string | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_DOMAIN_ADD tool output.
 */
type SMTP2GO_DOMAIN_ADD_OUTPUT = {
  /**
   * Data
   * @description Details of the added domain(s).
   */
  data?: {
      /** Domains */
      domains: {
          /** Domain */
          domain: {
              /**
               * Dkim Selector
               * @description DKIM selector.
               */
              dkim_selector: string;
              /**
               * Dkim Status
               * @description DKIM verification status or error.
               * @default null
               */
              dkim_status: string | null;
              /**
               * Dkim Value
               * @description Value for the DKIM TXT record.
               */
              dkim_value: string;
              /**
               * Dkim Verified
               * @description Whether DKIM is verified.
               */
              dkim_verified: boolean;
              /**
               * Domain
               * @description Primary domain.
               */
              domain: string;
              /**
               * Fulldomain
               * @description Full sender domain name.
               */
              fulldomain: string;
              /**
               * Rpath Selector
               * @description Return-path (bounce) selector.
               */
              rpath_selector: string;
              /**
               * Rpath Status
               * @description Return-path verification status or error.
               * @default null
               */
              rpath_status: string | null;
              /**
               * Rpath Value
               * @description Value for the return-path CNAME record.
               */
              rpath_value: string;
              /**
               * Rpath Verified
               * @description Whether return-path is verified.
               */
              rpath_verified: boolean;
              /**
               * Subdomain
               * @description Subdomain value of the sender domain.
               */
              subdomain: string;
              /**
               * Suffix
               * @description Domain suffix.
               */
              suffix: string;
          };
          /** Trackers */
          trackers: {
              /**
               * Cname Status
               * @description CNAME verification status or error.
               * @default null
               */
              cname_status: string | null;
              /**
               * Cname Value
               * @description Value for the CNAME record.
               */
              cname_value: string;
              /**
               * Cname Verified
               * @description Whether CNAME is verified.
               */
              cname_verified: boolean;
              /**
               * Domain
               * @description Primary domain for tracker.
               */
              domain: string;
              /**
               * Enabled
               * @description Whether this tracking domain is enabled.
               */
              enabled: boolean;
              /**
               * Fulldomain
               * @description Full tracking domain.
               */
              fulldomain: string;
              /**
               * Ssl Status
               * @description SSL issuance status.
               */
              ssl_status: string;
              /**
               * Subdomain
               * @description Tracking subdomain value.
               */
              subdomain: string;
              /**
               * Suffix
               * @description Domain suffix for tracker.
               */
              suffix: string;
          }[];
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique ID for this API request.
   */
  request_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_EMAIL_SEARCH tool input.
 */
type SMTP2GO_EMAIL_SEARCH_INPUT = {
  /**
   * Date End
   * Format: date
   * @description End date (YYYY-MM-DD) for filtering results.
   * @default null
   */
  date_end: unknown;
  /**
   * Date Start
   * Format: date
   * @description Start date (YYYY-MM-DD) for filtering results.
   * @default null
   */
  date_start: unknown;
  /**
   * Email Id
   * @description Return only results for this specific email ID.
   * @default null
   */
  email_id: string | null;
  /**
   * Event
   * @description Filter only events matching this type (e.g., 'bounce', 'spam', etc.).
   * @default null
   */
  event: string | null;
  /**
   * Limit
   * @description Number of results to return (default 100, max 500).
   * @default 100
   */
  limit: number | null;
  /**
   * Offset
   * @description Pagination offset (default 0).
   * @default 0
   */
  offset: number | null;
  /**
   * Recipient
   * Format: email
   * @description Return only results for this specific recipient email.
   * @default null
   */
  recipient: unknown;
  /**
   * Sender
   * Format: email
   * @description Return only results for this specific sender email.
   * @default null
   */
  sender: unknown;
  /**
   * Sort By
   * @description Sort returned items by this field.
   * @default null
   * @constant
   */
  sort_by: "date";
  /**
   * Sort Order
   * @description Order of returned results.
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
  /**
   * Status
   * @description Return only results with this status (e.g., 'sent', 'dropped').
   * @default null
   */
  status: string | null;
  /**
   * Subject
   * @description Return only results with this exact subject line.
   * @default null
   */
  subject: string | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_EMAIL_SEARCH tool output.
 */
type SMTP2GO_EMAIL_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Container for search results; includes 'emails' list.
   */
  data?: {
      [key: string]: ({
          /**
           * Date
           * @description Date/time of the event.
           */
          date: string;
          /**
           * From
           * @description Sender's email address.
           */
          from: string;
          /**
           * Id
           * @description Unique email ID.
           */
          id: string;
          /**
           * Status
           * @description Status of the email (sent, dropped, etc.).
           */
          status: string;
          /**
           * Subject
           * @description Email subject line.
           */
          subject: string;
          /**
           * To
           * @description Recipient's email address.
           */
          to: string;
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
   * Status
   * @description API call status.
   * @enum {string}
   */
  status?: "success" | "error";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_IP_ALLOW_LIST_ADD tool input.
 */
type SMTP2GO_IP_ALLOW_LIST_ADD_INPUT = {
  /**
   * Ip
   * @description IP address (e.g., '192.168.1.1') or CIDR range (e.g., '192.168.1.0/24') to add to the allow list.
   */
  ip?: string;
  /**
   * Reference Note
   * @description Optional note for your reference (max 255 characters).
   * @default null
   */
  note: string | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_IP_ALLOW_LIST_ADD tool output.
 */
type SMTP2GO_IP_ALLOW_LIST_ADD_OUTPUT = {
  /**
   * Data
   * @description Data returned after adding an IP to the allow list.
   */
  data?: {
      /**
       * Ip
       * @description IP address or CIDR range added
       */
      ip: string;
      /**
       * Ip Allow List Id
       * @description Unique ID of the allow list entry
       */
      ip_allow_list_id: number;
      /**
       * Note
       * @description Note associated with the entry
       * @default null
       */
      note: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code returned by SMTP2GO API
   */
  error_code?: number;
  /**
   * Error Message
   * @description Error message returned by SMTP2GO API
   * @default null
   */
  error_message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_IP_ALLOW_LIST_REMOVE tool input.
 */
type SMTP2GO_IP_ALLOW_LIST_REMOVE_INPUT = {
  /**
   * Ip Address
   * Format: ipv4
   * @description The IPv4 address to remove from the allow list.
   */
  ip_address?: unknown;
};

/**
 * Type of SMTP2GO's SMTP2GO_IP_ALLOW_LIST_REMOVE tool output.
 */
type SMTP2GO_IP_ALLOW_LIST_REMOVE_OUTPUT = {
  /**
   * Data
   * @description Result of the removal operation.
   */
  data?: {
      /**
       * Succeeded
       * @description Indicates if the removal was successful.
       */
      succeeded: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Status of the API call.
   * @enum {string}
   */
  status?: "success" | "error";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_IP_ALLOW_LIST_VIEW tool input.
 */
type SMTP2GO_IP_ALLOW_LIST_VIEW_INPUT = object;

/**
 * Type of SMTP2GO's SMTP2GO_IP_ALLOW_LIST_VIEW tool output.
 */
type SMTP2GO_IP_ALLOW_LIST_VIEW_OUTPUT = {
  /**
   * Data
   * @description List of allowed IP address entries.
   */
  data?: {
      /**
       * Created At
       * @description Date and time the IP was added (ISO 8601 format).
       */
      created_at: string;
      /**
       * Ip
       * @description The allowed IP address.
       */
      ip: string;
      /**
       * Notes
       * @description Notes associated with the IP address, if any.
       * @default null
       */
      notes: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description SMTP2GO error code if the request failed.
   * @default null
   */
  error_code: number | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_SMS_VIEW_RECEIVED tool input.
 */
type SMTP2GO_SMS_VIEW_RECEIVED_INPUT = {
  /**
   * Limit
   * @description Number of received SMS messages to return (default 100, max 500)
   * @default 100
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of messages to skip for pagination (default 0)
   * @default 0
   */
  offset: number | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_SMS_VIEW_RECEIVED tool output.
 */
type SMTP2GO_SMS_VIEW_RECEIVED_OUTPUT = {
  /**
   * Data
   * @description List of received SMS messages
   */
  data?: {
      /**
       * Content
       * @description Content of the SMS message
       */
      content: string;
      /**
       * From
       * @description Sender phone number
       */
      from: string;
      /**
       * Message Id
       * @description Unique identifier for the SMS message
       */
      message_id: string;
      /**
       * Received At
       * @description ISO 8601 timestamp when the message was received
       */
      received_at: string;
      /**
       * To
       * @description Recipient phone number
       */
      to: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description API error code (0 if no error)
   */
  error_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of received SMS messages available
   */
  total?: number;
};

/**
 * Type of SMTP2GO's SMTP2GO_STATS_EMAIL_BOUNCES tool input.
 */
type SMTP2GO_STATS_EMAIL_BOUNCES_INPUT = {
  /**
   * Date End
   * Format: date
   * @description End date (inclusive) in YYYY-MM-DD format to filter bounces
   * @default null
   */
  date_end: unknown;
  /**
   * Date Start
   * Format: date
   * @description Start date (inclusive) in YYYY-MM-DD format to filter bounces
   * @default null
   */
  date_start: unknown;
  /**
   * Email
   * Format: email
   * @description Filter results by a specific email address
   * @default null
   */
  email: unknown;
  /**
   * Limit
   * @description Number of records to return, defaults to API default
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Record offset for pagination, defaults to API default
   * @default null
   */
  offset: number | null;
  /**
   * Sort Direction
   * @description Sort direction for results, either ASC or DESC
   * @default null
   * @enum {string|null}
   */
  sort_direction: "ASC" | "DESC" | null;
  /**
   * Sort Field
   * @description Field by which to sort results, e.g., date_bounced
   * @default null
   */
  sort_field: string | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_STATS_EMAIL_BOUNCES tool output.
 */
type SMTP2GO_STATS_EMAIL_BOUNCES_OUTPUT = {
  /**
   * Data
   * @description Array of bounce record objects
   */
  data?: {
      /**
       * Bounce Description
       * @description Description of the bounce event
       */
      bounce_description: string;
      /**
       * Bounce Status
       * @description SMTP status code of the bounce
       */
      bounce_status: string;
      /**
       * Bounce Type
       * @description Type or category of the bounce
       */
      bounce_type: string;
      /**
       * Custom Id
       * @description Custom identifier supplied when the email was sent
       * @default null
       */
      custom_id: string | null;
      /**
       * Date Bounced
       * @description Timestamp of when the bounce occurred in ISO 8601 format
       */
      date_bounced: string;
      /**
       * Email Address
       * @description Email address that bounced
       */
      email_address: string;
      /**
       * Smtp Response
       * @description Raw SMTP response for the bounce
       */
      smtp_response: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code if the request failed
   * @default null
   */
  error_code: string | null;
  /**
   * Error Message
   * @description Error message if the request failed
   * @default null
   */
  error_message: string | null;
  /**
   * Success
   * @description Indicates if the request was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of bounces matching filters
   */
  total?: number;
};

/**
 * Type of SMTP2GO's SMTP2GO_STATS_EMAIL_CYCLE tool input.
 */
type SMTP2GO_STATS_EMAIL_CYCLE_INPUT = {
  /**
   * Date From
   * Format: date
   * @description Start date for the report in YYYY-MM-DD format
   */
  date_from?: unknown;
  /**
   * Date To
   * Format: date
   * @description End date for the report in YYYY-MM-DD format
   */
  date_to?: unknown;
  /**
   * Group By
   * @description Time granularity to group statistics by
   * @default day
   * @enum {string}
   */
  group_by: "day" | "week" | "month";
  /**
   * Grouping
   * @description Optional secondary grouping key, e.g., 'user'
   * @default null
   */
  grouping: string | null;
  /**
   * Limit
   * @description Maximum number of records to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip for pagination
   * @default null
   */
  offset: number | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_STATS_EMAIL_CYCLE tool output.
 */
type SMTP2GO_STATS_EMAIL_CYCLE_OUTPUT = {
  /**
   * Data
   * @description List of statistics grouped by cycle
   */
  data?: {
      /**
       * Bounced
       * @description Number of emails bounced
       */
      bounced: number;
      /**
       * Clicked
       * @description Number of emails clicked
       */
      clicked: number;
      /**
       * Complained
       * @description Number of spam complaints
       */
      complained: number;
      /**
       * Cycle
       * @description Time period label (date/week/month)
       */
      cycle: string;
      /**
       * Delivered
       * @description Number of emails delivered
       */
      delivered: number;
      /**
       * Opened
       * @description Number of emails opened
       */
      opened: number;
      /**
       * Spam
       * @description Number of emails marked as spam
       */
      spam: number;
      /**
       * Unsubscribed
       * @description Number of unsubscribes
       */
      unsubscribed: number;
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
  /**
   * Total
   * @description Total number of records returned
   */
  total?: number;
};

/**
 * Type of SMTP2GO's SMTP2GO_STATS_EMAIL_HISTORY tool input.
 */
type SMTP2GO_STATS_EMAIL_HISTORY_INPUT = {
  /**
   * Date End
   * Format: date
   * @description End date for filtering (YYYY-MM-DD).
   * @default null
   */
  date_end: unknown;
  /**
   * Date Start
   * Format: date
   * @description Start date for filtering (YYYY-MM-DD).
   * @default null
   */
  date_start: unknown;
  /**
   * Email
   * Format: email
   * @description Filter results by recipient email address.
   * @default null
   */
  email: unknown;
  /**
   * Limit
   * @description Maximum number of records to return (1–1000).
   * @default 50
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip for pagination.
   * @default 0
   */
  offset: number | null;
  /**
   * Sender
   * Format: email
   * @description Filter results by sender email address.
   * @default null
   */
  sender: unknown;
  /**
   * Tag
   * @description Filter results by message tag.
   * @default null
   */
  tag: string | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_STATS_EMAIL_HISTORY tool output.
 */
type SMTP2GO_STATS_EMAIL_HISTORY_OUTPUT = {
  /**
   * Data
   * @description List of email history records returned.
   */
  data?: {
      /**
       * Bounces
       * @description Number of bounces for the email.
       */
      bounces: number;
      /**
       * Clicks
       * @description Number of times links in the email were clicked.
       */
      clicks: number;
      /**
       * Created
       * @description Timestamp when the email was created (ISO 8601).
       */
      created: string;
      /**
       * Email Id
       * @description Unique identifier for the email.
       */
      email_id: string;
      /**
       * Opens
       * @description Number of times the email was opened.
       */
      opens: number;
      /**
       * Recipient
       * @description Recipient email address.
       */
      recipient: string;
      /**
       * Sender
       * @description Sender email address.
       */
      sender: string;
      /**
       * Status
       * @description Delivery status of the email.
       */
      status: string;
      /**
       * Subject
       * @description Email subject line.
       * @default null
       */
      subject: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique ID for this API request.
   */
  request_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of emails matching the query.
   */
  total?: number;
};

/**
 * Type of SMTP2GO's SMTP2GO_STATS_EMAIL_SPAM tool input.
 */
type SMTP2GO_STATS_EMAIL_SPAM_INPUT = {
  /**
   * Date End
   * Format: date
   * @description End date (YYYY-MM-DD) for filtering spam statistics.
   */
  date_end?: unknown;
  /**
   * Date Start
   * Format: date
   * @description Start date (YYYY-MM-DD) for filtering spam statistics.
   */
  date_start?: unknown;
  /**
   * Limit
   * @description Number of records to return (default 100, max 1000).
   * @default 100
   */
  limit: number | null;
  /**
   * Offset
   * @description Pagination offset (default 0).
   * @default 0
   */
  offset: number | null;
  /**
   * Recipient
   * Format: email
   * @description Filter results by recipient email address.
   * @default null
   */
  recipient: unknown;
  /**
   * Sender
   * Format: email
   * @description Filter results by sender email address.
   * @default null
   */
  sender: unknown;
  /**
   * Transaction Id
   * @description Filter results by transaction ID.
   * @default null
   */
  transaction_id: string | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_STATS_EMAIL_SPAM tool output.
 */
type SMTP2GO_STATS_EMAIL_SPAM_OUTPUT = {
  /**
   * Data
   * @description List of spam report statistics.
   */
  data?: {
      /**
       * Date
       * @description Date of the event (YYYY-MM-DD).
       */
      date: string;
      /**
       * Recipient
       * @description Recipient email address.
       */
      recipient: string;
      /**
       * Sender
       * @description Sender email address.
       */
      sender: string;
      /**
       * Subject
       * @description Subject line of the email.
       */
      subject: string;
      /**
       * Transaction Id
       * @description Transaction ID of the email.
       */
      transaction_id: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code if the request failed.
   * @default null
   */
  error_code: number | null;
  /**
   * Error Message
   * @description Error message if the request failed.
   * @default null
   */
  error_message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_STATS_EMAIL_UNSUBS tool input.
 */
type SMTP2GO_STATS_EMAIL_UNSUBS_INPUT = {
  /**
   * Date End
   * Format: date
   * @description Ending date (YYYY-MM-DD) for the unsubscribe report.
   * @default null
   */
  date_end: unknown;
  /**
   * Date Start
   * Format: date
   * @description Starting date (YYYY-MM-DD) for the unsubscribe report.
   * @default null
   */
  date_start: unknown;
  /**
   * Email Address
   * Format: email
   * @description Restrict results to this email address.
   * @default null
   */
  email_address: unknown;
  /**
   * Result Limit
   * @description Maximum number of records to return (1-1000).
   * @default 1000
   */
  result_limit: number | null;
  /**
   * Result Offset
   * @description Number of records to skip for pagination.
   * @default 0
   */
  result_offset: number | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_STATS_EMAIL_UNSUBS tool output.
 */
type SMTP2GO_STATS_EMAIL_UNSUBS_OUTPUT = {
  /**
   * Data
   * @description List of unsubscription records.
   */
  data?: {
      /**
       * Campaign Id
       * @description Campaign ID if applicable.
       * @default null
       */
      campaign_id: string | null;
      /**
       * Date
       * @description Date and time of unsubscription (YYYY-MM-DD HH:MM:SS).
       */
      date: string;
      /**
       * Email Address
       * @description Unsubscribed email address.
       */
      email_address: string;
      /**
       * List Id
       * @description List ID if applicable.
       * @default null
       */
      list_id: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description API error code (0 indicates success).
   */
  error_code?: number;
  /**
   * Error Message
   * @description Error message if the request failed.
   * @default null
   */
  error_message: string | null;
  /**
   * Request Id
   * @description Unique identifier for this API request.
   */
  request_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_SUBACCOUNTS_SEARCH tool input.
 */
type SMTP2GO_SUBACCOUNTS_SEARCH_INPUT = {
  /**
   * Active
   * @description Filter results by active status (true or false).
   * @default null
   */
  active: boolean | null;
  /**
   * Email
   * Format: email
   * @description Filter results to subaccounts with this email address.
   * @default null
   */
  email: string | null;
  /**
   * Limit
   * @description Number of records to return (default 100, max 1000).
   * @default 100
   */
  limit: number | null;
  /**
   * Name
   * @description Filter results to subaccounts with this name.
   * @default null
   */
  name: string | null;
  /**
   * Offset
   * @description Number of records to skip for pagination (default 0).
   * @default 0
   */
  offset: number | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_SUBACCOUNTS_SEARCH tool output.
 */
type SMTP2GO_SUBACCOUNTS_SEARCH_OUTPUT = {
  /**
   * Data
   * @description List of subaccount records matching the search criteria.
   */
  data?: {
      /**
       * Active
       * @description Indicates if the subaccount is currently active.
       */
      active: boolean;
      /**
       * Email
       * Format: email
       * @description Email address of the subaccount.
       */
      email: string;
      /**
       * Id
       * @description Unique identifier for the subaccount.
       */
      id: string;
      /**
       * Name
       * @description Name of the subaccount.
       */
      name: string;
      /**
       * Timezone
       * @description IANA timezone for the subaccount (if set).
       * @default null
       */
      timezone: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Zero if successful; non-zero if an error occurred.
   * @default null
   */
  error_code: number | null;
  /**
   * Request Id
   * @description Unique ID for the API request.
   * @default null
   */
  request_id: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of matching subaccounts.
   */
  total?: number;
};

/**
 * Type of SMTP2GO's SMTP2GO_SUBACCOUNTS_USAGE tool input.
 */
type SMTP2GO_SUBACCOUNTS_USAGE_INPUT = {
  /**
   * Subaccount Id
   * @description ID of the subaccount for which to retrieve usage statistics. If omitted, statistics for all subaccounts are returned.
   * @default null
   */
  subaccount_id: string | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_SUBACCOUNTS_USAGE tool output.
 */
type SMTP2GO_SUBACCOUNTS_USAGE_OUTPUT = {
  /**
   * Data
   * @description Usage statistics data
   */
  data?: {
      /**
       * Subaccounts
       * @description List of subaccounts with usage statistics
       */
      subaccounts: {
          /**
           * Email
           * @description Email address associated with the subaccount
           */
          email: string;
          /**
           * Id
           * @description ID of the subaccount
           */
          id: string;
          /**
           * Name
           * @description Name of the subaccount
           */
          name: string;
          /**
           * Plan Remaining
           * @description Number of emails remaining in the current billing cycle
           */
          plan_remaining: number;
          /**
           * Plan Size
           * @description Total emails allowed in the current billing cycle
           */
          plan_size: number;
          /**
           * Plan Used
           * @description Number of emails sent in the current billing cycle
           */
          plan_used: number;
          /**
           * State
           * @description Current state of the subaccount, e.g., 'Active'
           */
          state: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique ID for this API request
   */
  request_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_SUPPRESSION_ADD tool input.
 */
type SMTP2GO_SUPPRESSION_ADD_INPUT = {
  /**
   * Description
   * @description Optional note about the suppression reason.
   * @default null
   */
  description: string | null;
  /**
   * Email Address
   * @description A single email address or list of addresses to add to suppression list. Use domain format (e.g., '@example.com') to suppress entire domain.
   */
  email_address?: string | null;
  /**
   * Type
   * @description Type of suppression: EMAIL to suppress addresses, DOMAIN to suppress domains, ALL for both.
   * @default EMAIL
   * @enum {string}
   */
  type: "EMAIL" | "DOMAIN" | "ALL";
};

/**
 * Type of SMTP2GO's SMTP2GO_SUPPRESSION_ADD tool output.
 */
type SMTP2GO_SUPPRESSION_ADD_OUTPUT = {
  /**
   * Data
   * @description Result data returned by SMTP2GO API.
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Failed
   * @description List of addresses or domains that could not be added
   */
  failed?: string[];
  /**
   * Succeeded
   * @description Indicates if the suppression add was successful.
   */
  succeeded?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_SUPPRESSION_REMOVE tool input.
 */
type SMTP2GO_SUPPRESSION_REMOVE_INPUT = {
  /**
   * Domain
   * Format: hostname
   * @description Domain to remove from suppression list.
   */
  domain?: unknown;
  /**
   * Email
   * Format: email
   * @description Email address to remove from suppression list.
   */
  email?: unknown;
  /**
   * Subaccount Id
   * @description Subaccount ID from which to remove suppression entry.
   * @default null
   */
  subaccount_id: string | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_SUPPRESSION_REMOVE tool output.
 */
type SMTP2GO_SUPPRESSION_REMOVE_OUTPUT = {
  /**
   * Data
   * @description Result details of suppression removal.
   */
  data?: {
      /**
       * Not Found
       * @description Number of suppression entries not found.
       */
      not_found: number;
      /**
       * Removed
       * @description Number of suppression entries successfully removed.
       */
      removed: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique identifier for the removal request.
   */
  request_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_SUPPRESSION_VIEW tool input.
 */
type SMTP2GO_SUPPRESSION_VIEW_INPUT = {
  /**
   * Email Address
   * Format: email
   * @description Filter by specific email address
   * @default null
   */
  email_address: unknown;
  /**
   * End Date
   * Format: date
   * @description Only list suppressions added on or before this date (YYYY-MM-DD)
   * @default null
   */
  end_date: unknown;
  /**
   * Limit
   * @description Maximum number of results to return (default 100)
   * @default 100
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of results to skip for pagination
   * @default 0
   */
  offset: number | null;
  /**
   * Start Date
   * Format: date
   * @description Only list suppressions added on or after this date (YYYY-MM-DD)
   * @default null
   */
  start_date: unknown;
  /**
   * Suppression Type
   * @description Type of suppression to filter
   * @default null
   * @enum {string|null}
   */
  suppression_type: "bounces" | "unsubscribes" | "spam complaints" | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_SUPPRESSION_VIEW tool output.
 */
type SMTP2GO_SUPPRESSION_VIEW_OUTPUT = {
  /**
   * Data
   * @description List of suppressed email entries
   */
  data?: {
      /**
       * Creation Date
       * @description Date suppression was added (YYYY-MM-DD)
       */
      creation_date: string;
      /**
       * Email Address
       * @description Suppressed email address
       */
      email_address: string;
      /**
       * Last Update
       * @description Timestamp of last update (ISO 8601 format)
       */
      last_update: string;
      /**
       * Suppression Type
       * @description Reason for suppression
       */
      suppression_type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API response status
   * @enum {string}
   */
  status?: "success" | "error";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of matched suppressed addresses
   */
  total?: number;
};

/**
 * Type of SMTP2GO's SMTP2GO_TEMPLATE_EDIT tool input.
 */
type SMTP2GO_TEMPLATE_EDIT_INPUT = {
  /**
   * Editor Code
   * @description New code view content for drag-and-drop editor templates
   * @default null
   */
  editor_code: string | null;
  /**
   * Html Body
   * @description New HTML content for the template
   * @default null
   */
  html_body: string | null;
  /**
   * Is Archived
   * @description Whether to archive (true) or unarchive (false) the template
   * @default null
   */
  is_archived: boolean | null;
  /**
   * Name
   * @description New name for the template
   * @default null
   */
  name: string | null;
  /**
   * Subject
   * @description New subject line for the template
   * @default null
   */
  subject: string | null;
  /**
   * Template Id
   * @description ID of the template to edit
   */
  template_id?: string;
  /**
   * Text Body
   * @description New plain text content for the template
   * @default null
   */
  text_body: string | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_TEMPLATE_EDIT tool output.
 */
type SMTP2GO_TEMPLATE_EDIT_OUTPUT = {
  /**
   * Data
   * @description Data object containing edited template ID
   */
  data?: {
      /**
       * Template Id
       * @description ID of the edited template
       */
      template_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code if the request failed
   * @default null
   */
  error_code: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_TEMPLATE_SEARCH tool input.
 */
type SMTP2GO_TEMPLATE_SEARCH_INPUT = {
  /**
   * Limit
   * @description Number of results per page (1-1000).
   * @default 100
   */
  limit: number | null;
  /**
   * Name
   * @description Filter by the template name.
   * @default null
   */
  name: string | null;
  /**
   * Offset
   * @description Number of results to skip for pagination.
   * @default 0
   */
  offset: number | null;
  /**
   * Template Id
   * @description Filter by the unique template identifier.
   * @default null
   */
  template_id: string | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_TEMPLATE_SEARCH tool output.
 */
type SMTP2GO_TEMPLATE_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Search results data.
   */
  data?: {
      /**
       * Templates
       * @description List of matching templates.
       */
      templates: {
          /**
           * Created
           * @description Creation timestamp (UTC ISO 8601).
           */
          created: string;
          /**
           * Name
           * @description Name of the template.
           */
          name: string;
          /**
           * Subject
           * @description Default subject for the template.
           */
          subject: string;
          /**
           * Template Id
           * @description Unique ID of the template.
           */
          template_id: string;
          /**
           * Updated
           * @description Last update timestamp (UTC ISO 8601).
           */
          updated: string;
      }[];
      /**
       * Total
       * @description Total number of templates matching criteria.
       */
      total: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API call status.
   * @enum {string}
   */
  status?: "success" | "error";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_TEMPLATE_VIEW tool input.
 */
type SMTP2GO_TEMPLATE_VIEW_INPUT = {
  /**
   * Template Id
   * @description ID of the email template to view
   */
  template_id?: string;
};

/**
 * Type of SMTP2GO's SMTP2GO_TEMPLATE_VIEW tool output.
 */
type SMTP2GO_TEMPLATE_VIEW_OUTPUT = {
  /**
   * Data
   * @description Details of the email template
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp of the template
       */
      created_at: string;
      /**
       * Html Body
       * @description HTML content of the template
       */
      html_body: string;
      /**
       * Name
       * @description Name of the template
       */
      name: string;
      /**
       * Subject
       * @description Subject line of the template
       */
      subject: string;
      /**
       * Template Id
       * @description Unique identifier of the template
       */
      template_id: string;
      /**
       * Text Body
       * @description Plain text content of the template
       */
      text_body: string;
      /**
       * Updated At
       * @description Last update timestamp of the template
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
   * Error Code
   * @description Error code if the request failed
   * @default null
   */
  error_code: string | null;
  /**
   * Request Id
   * @description Unique ID for the request
   */
  request_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_USERS_SMTP_ADD tool input.
 */
type SMTP2GO_USERS_SMTP_ADD_INPUT = {
  /**
   * User Data
   * @description The SMTP user details to add
   */
  user_data?: {
      /**
       * Archive Enabled
       * @description Whether archiving is enabled for this user
       * @default null
       */
      archive_enabled: boolean | null;
      /**
       * Audit Email
       * @description Bcc address for this user key
       * @default null
       */
      audit_email: string | null;
      /**
       * Comments
       * @description Optional comments about the user
       * @default null
       */
      comments: string | null;
      /**
       * Custom Ratelimit
       * @description Whether this user has a custom rate limit
       * @default null
       */
      custom_ratelimit: boolean | null;
      /**
       * Custom Ratelimit Period
       * @description If custom_ratelimit=true, the period (in seconds) over which the rate limit applies
       * @default null
       */
      custom_ratelimit_period: string | null;
      /**
       * Custom Ratelimit Value
       * @description If custom_ratelimit=true, the max emails this user can send in the specified period
       * @default null
       */
      custom_ratelimit_value: number | null;
      /**
       * Description
       * @description Additional information about the user
       * @default null
       */
      description: string | null;
      /**
       * Email Password
       * @description Password for the new SMTP user
       */
      email_password: string;
      /**
       * Feedback Domain
       * @description Domain to use in custom feedback links
       * @default null
       */
      feedback_domain: string | null;
      /**
       * Feedback Enabled
       * @description Whether custom feedback inserts are enabled
       * @default null
       */
      feedback_enabled: boolean | null;
      /**
       * Feedback Html
       * @description HTML content for text/html feedback body
       * @default null
       */
      feedback_html: string | null;
      /**
       * Feedback Text
       * @description Text content for text/plain feedback body
       * @default null
       */
      feedback_text: string | null;
      /**
       * Open Tracking Enabled
       * @description Whether open tracking is enabled for this user
       * @default null
       */
      open_tracking_enabled: boolean | null;
      /**
       * Username
       * @description Desired username for the new SMTP user
       */
      username: string;
  };
};

/**
 * Type of SMTP2GO's SMTP2GO_USERS_SMTP_ADD tool output.
 */
type SMTP2GO_USERS_SMTP_ADD_OUTPUT = {
  /**
   * Data
   * @description Details of the newly added SMTP user(s)
   */
  data?: {
      /**
       * Results
       * @description Array of created SMTP user details
       */
      results: {
          /** Archive Enabled */
          archive_enabled: boolean;
          /** Audit Email */
          audit_email: string | null;
          /** Comments */
          comments: string | null;
          /** Custom Ratelimit */
          custom_ratelimit: boolean;
          /** Custom Ratelimit Period */
          custom_ratelimit_period: string | null;
          /** Custom Ratelimit Value */
          custom_ratelimit_value: number | null;
          /** Description */
          description: string | null;
          /** Email Password */
          email_password: string;
          /** Feedback Domain */
          feedback_domain: string | null;
          /** Feedback Enabled */
          feedback_enabled: boolean;
          /** Feedback Html */
          feedback_html: string | null;
          /** Feedback Text */
          feedback_text: string | null;
          /** Open Tracking Enabled */
          open_tracking_enabled: boolean;
          /** Username */
          username: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique ID for this API request
   */
  request_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_USERS_SMTP_EDIT tool input.
 */
type SMTP2GO_USERS_SMTP_EDIT_INPUT = {
  /**
   * Allow Senders
   * @description List of specific email addresses this SMTP user is allowed to send from. Omit or pass an empty list to allow any sender.
   * @default null
   */
  allow_senders: string[] | null;
  /**
   * Allowed Ips
   * @description List of IP addresses permitted for this SMTP user. Omit or pass an empty list to allow any IP.
   * @default null
   */
  allowed_ips: string[] | null;
  /**
   * Disable Senders
   * @description If true, disables all senders for this SMTP user.
   * @default null
   */
  disable_senders: boolean | null;
  /**
   * Disabled
   * @description If true, disables this SMTP user entirely.
   * @default null
   */
  disabled: boolean | null;
  /**
   * New Username
   * @description New SMTP username if you wish to change it.
   * @default null
   */
  new_username: string | null;
  /**
   * Password
   * @description New password for the SMTP user (minimum 8 characters).
   * @default null
   */
  password: string | null;
  /**
   * Reset Stats
   * @description If true, resets all usage statistics for this SMTP user.
   * @default null
   */
  reset_stats: boolean | null;
  /**
   * Sender Domain
   * @description Restrict sending to this domain only (e.g., 'example.com').
   * @default null
   */
  sender_domain: string | null;
  /**
   * Username
   * @description The existing SMTP username to edit.
   */
  username?: string;
};

/**
 * Type of SMTP2GO's SMTP2GO_USERS_SMTP_EDIT tool output.
 */
type SMTP2GO_USERS_SMTP_EDIT_OUTPUT = {
  /**
   * Data
   * @description Details of the edited SMTP user.
   */
  data?: {
      /**
       * User Id
       * @description The ID for the SMTP user.
       */
      user_id: string;
      /**
       * Username
       * @description The SMTP username.
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
   * Error Code
   * @description Error code returned by SMTP2GO API (0 if successful).
   */
  error_code?: number;
  /**
   * Error Message
   * @description Error message returned by SMTP2GO API, if any.
   * @default null
   */
  error_message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_USERS_SMTP_REMOVE tool input.
 */
type SMTP2GO_USERS_SMTP_REMOVE_INPUT = {
  /**
   * Username
   * @description SMTP username to remove, typically an email address or SMTP user ID.
   */
  username?: string;
};

/**
 * Type of SMTP2GO's SMTP2GO_USERS_SMTP_REMOVE tool output.
 */
type SMTP2GO_USERS_SMTP_REMOVE_OUTPUT = {
  /**
   * Data
   * @description Details of the removed SMTP user(s)
   */
  data?: {
      /**
       * Results
       * @description List of removed SMTP user results
       */
      results: {
          /**
           * Status
           * @description Status of the removal operation for the user
           * @default null
           */
          status: string | null;
          /**
           * Username
           * @description The SMTP username that was removed.
           */
          username: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Id
   * @description Unique ID for this API request
   */
  request_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_USERS_SMTP_VIEW tool input.
 */
type SMTP2GO_USERS_SMTP_VIEW_INPUT = object;

/**
 * Type of SMTP2GO's SMTP2GO_USERS_SMTP_VIEW tool output.
 */
type SMTP2GO_USERS_SMTP_VIEW_OUTPUT = {
  /**
   * Data
   * @description List of SMTP user configurations
   */
  data?: {
      /**
       * Created
       * @description Creation timestamp of the SMTP user (ISO 8601 format)
       */
      created: string;
      /**
       * Description
       * @description Description of the SMTP user
       * @default null
       */
      description: string | null;
      /**
       * Last Used
       * @description Last used timestamp of the SMTP user (ISO 8601 format)
       * @default null
       */
      last_used: string | null;
      /**
       * Status
       * @description Status of the SMTP user, e.g., 'active' or 'locked'
       */
      status: string;
      /**
       * User Id
       * @description Unique identifier of the SMTP user
       */
      user_id: string;
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
   * Error Code
   * @description SMTP2GO error code if the request failed
   * @default null
   */
  error_code: number | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_WEBHOOK_ADD tool input.
 */
type SMTP2GO_WEBHOOK_ADD_INPUT = {
  /**
   * Events
   * @description List of event types to trigger this webhook.
   */
  events?: string[];
  /**
   * Name
   * @description Optional human-readable name for the webhook.
   * @default null
   */
  name: string | null;
  /**
   * Webhook Url
   * Format: uri
   * @description The destination URL where SMTP2GO will send event notifications.
   */
  webhook_url?: unknown;
};

/**
 * Type of SMTP2GO's SMTP2GO_WEBHOOK_ADD tool output.
 */
type SMTP2GO_WEBHOOK_ADD_OUTPUT = {
  /**
   * Data
   * @description Details of the created webhook.
   */
  data?: {
      /**
       * Webhook Id
       * @description Unique ID of the created webhook.
       */
      webhook_id: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code returned by SMTP2GO API, 0 means success.
   */
  error_code?: number;
  /**
   * Error Message
   * @description Error message if API call failed.
   * @default null
   */
  error_message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_WEBHOOK_EDIT tool input.
 */
type SMTP2GO_WEBHOOK_EDIT_INPUT = {
  /**
   * Authorization Header
   * @description Custom authorization header to include with each webhook request
   * @default null
   */
  authorization_header: string | null;
  /**
   * Email Events
   * @description List of email events that will trigger this webhook
   * @default null
   */
  email_events: string[] | null;
  /**
   * Email Headers
   * @description Custom email headers to include in the webhook payload
   * @default null
   */
  email_headers: string[] | null;
  /**
   * Output Type
   * @description Format of the webhook payload
   * @default null
   * @enum {string|null}
   */
  output_type: "json" | "form" | null;
  /**
   * Sms Events
   * @description List of SMS events that will trigger this webhook
   * @default null
   */
  sms_events: string[] | null;
  /**
   * Url
   * Format: uri
   * @description Destination URL where SMTP2GO will POST webhook events
   */
  url?: unknown;
  /**
   * Users
   * @description List of SMTP2GO user IDs for which this webhook should fire
   * @default null
   */
  users: string[] | null;
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to be edited
   */
  webhook_id?: string;
};

/**
 * Type of SMTP2GO's SMTP2GO_WEBHOOK_EDIT tool output.
 */
type SMTP2GO_WEBHOOK_EDIT_OUTPUT = {
  /**
   * Data
   * @description Data returned after editing a webhook.
   */
  data?: {
      /**
       * Authorization Header
       * @description Authorization header included in webhook requests
       * @default null
       */
      authorization_header: string | null;
      /**
       * Email Events
       * @description Email events that trigger the webhook
       */
      email_events: string[];
      /**
       * Email Headers
       * @description Custom email headers included in the webhook payload
       */
      email_headers: string[];
      /**
       * Output Type
       * @description Format of the webhook payload
       * @enum {string}
       */
      output_type: "json" | "form";
      /**
       * Sms Events
       * @description SMS events that trigger the webhook
       */
      sms_events: string[];
      /**
       * Url
       * @description Destination URL of the webhook
       */
      url: string;
      /**
       * Users
       * @description Users for whom the webhook triggers
       */
      users: string[];
      /**
       * Webhook Id
       * @description Unique identifier of the webhook
       */
      webhook_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code returned by SMTP2GO API
   */
  error_code?: number;
  /**
   * Error Message
   * @description Error message returned by SMTP2GO API
   * @default null
   */
  error_message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_WEBHOOK_REMOVE tool input.
 */
type SMTP2GO_WEBHOOK_REMOVE_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to remove
   */
  webhook_id?: string;
};

/**
 * Type of SMTP2GO's SMTP2GO_WEBHOOK_REMOVE tool output.
 */
type SMTP2GO_WEBHOOK_REMOVE_OUTPUT = {
  /**
   * Data
   * @description Result details of the webhook removal operation
   */
  data?: {
      /**
       * Message
       * @description Informational message about the result
       */
      message: string;
      /**
       * Succeeded
       * @description True if the webhook was successfully removed
       */
      succeeded: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code: 0 if successful, non-zero if error
   */
  error_code?: number;
  /**
   * Error Message
   * @description Error message if the request failed
   */
  error_message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SMTP2GO's SMTP2GO_WEBHOOK_VIEW tool input.
 */
type SMTP2GO_WEBHOOK_VIEW_INPUT = {
  /**
   * Subaccount Id
   * @description ID of the subaccount to retrieve webhooks for. If omitted, retrieves webhooks for the main account.
   * @default null
   */
  subaccount_id: string | null;
};

/**
 * Type of SMTP2GO's SMTP2GO_WEBHOOK_VIEW tool output.
 */
type SMTP2GO_WEBHOOK_VIEW_OUTPUT = {
  /**
   * Data
   * @description List of configured webhooks.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the webhook was created.
       */
      created_at: string;
      /**
       * Events
       * @description List of events triggering this webhook.
       */
      events: string[];
      /**
       * Headers
       * @description Custom headers included in webhook requests.
       */
      headers?: {
          [key: string]: string;
      };
      /**
       * Id
       * @description Unique identifier for the webhook.
       */
      id: string;
      /**
       * Output Type
       * @description Format of the webhook payload.
       * @enum {string}
       */
      output_type: "json" | "form";
      /**
       * Updated At
       * @description Timestamp when the webhook was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description Destination URL for webhook POSTs.
       */
      url: string;
      /**
       * Usernames
       * @description SMTP usernames, API keys, or authenticated IPs associated with the webhook.
       */
      usernames: string[];
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code returned by SMTP2GO API. 0 indicates success.
   */
  error_code?: number;
  /**
   * Error Message
   * @description Error message returned by SMTP2GO API if the call failed.
   * @default null
   */
  error_message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "SMTP2GO".
 */
export type SMTP2GO_TOOL_INPUTS = {
  ACTIVITY_SEARCH: SMTP2GO_ACTIVITY_SEARCH_INPUT
  ALLOWED_SENDERS_ADD: SMTP2GO_ALLOWED_SENDERS_ADD_INPUT
  ALLOWED_SENDERS_REMOVE: SMTP2GO_ALLOWED_SENDERS_REMOVE_INPUT
  ALLOWED_SENDERS_UPDATE: SMTP2GO_ALLOWED_SENDERS_UPDATE_INPUT
  ALLOWED_SENDERS_VIEW: SMTP2GO_ALLOWED_SENDERS_VIEW_INPUT
  DOMAIN_ADD: SMTP2GO_DOMAIN_ADD_INPUT
  EMAIL_SEARCH: SMTP2GO_EMAIL_SEARCH_INPUT
  IP_ALLOW_LIST_ADD: SMTP2GO_IP_ALLOW_LIST_ADD_INPUT
  IP_ALLOW_LIST_REMOVE: SMTP2GO_IP_ALLOW_LIST_REMOVE_INPUT
  IP_ALLOW_LIST_VIEW: SMTP2GO_IP_ALLOW_LIST_VIEW_INPUT
  SMS_VIEW_RECEIVED: SMTP2GO_SMS_VIEW_RECEIVED_INPUT
  STATS_EMAIL_BOUNCES: SMTP2GO_STATS_EMAIL_BOUNCES_INPUT
  STATS_EMAIL_CYCLE: SMTP2GO_STATS_EMAIL_CYCLE_INPUT
  STATS_EMAIL_HISTORY: SMTP2GO_STATS_EMAIL_HISTORY_INPUT
  STATS_EMAIL_SPAM: SMTP2GO_STATS_EMAIL_SPAM_INPUT
  STATS_EMAIL_UNSUBS: SMTP2GO_STATS_EMAIL_UNSUBS_INPUT
  SUBACCOUNTS_SEARCH: SMTP2GO_SUBACCOUNTS_SEARCH_INPUT
  SUBACCOUNTS_USAGE: SMTP2GO_SUBACCOUNTS_USAGE_INPUT
  SUPPRESSION_ADD: SMTP2GO_SUPPRESSION_ADD_INPUT
  SUPPRESSION_REMOVE: SMTP2GO_SUPPRESSION_REMOVE_INPUT
  SUPPRESSION_VIEW: SMTP2GO_SUPPRESSION_VIEW_INPUT
  TEMPLATE_EDIT: SMTP2GO_TEMPLATE_EDIT_INPUT
  TEMPLATE_SEARCH: SMTP2GO_TEMPLATE_SEARCH_INPUT
  TEMPLATE_VIEW: SMTP2GO_TEMPLATE_VIEW_INPUT
  USERS_SMTP_ADD: SMTP2GO_USERS_SMTP_ADD_INPUT
  USERS_SMTP_EDIT: SMTP2GO_USERS_SMTP_EDIT_INPUT
  USERS_SMTP_REMOVE: SMTP2GO_USERS_SMTP_REMOVE_INPUT
  USERS_SMTP_VIEW: SMTP2GO_USERS_SMTP_VIEW_INPUT
  WEBHOOK_ADD: SMTP2GO_WEBHOOK_ADD_INPUT
  WEBHOOK_EDIT: SMTP2GO_WEBHOOK_EDIT_INPUT
  WEBHOOK_REMOVE: SMTP2GO_WEBHOOK_REMOVE_INPUT
  WEBHOOK_VIEW: SMTP2GO_WEBHOOK_VIEW_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SMTP2GO".
 */
export type SMTP2GO_TOOL_OUTPUTS = {
  ACTIVITY_SEARCH: SMTP2GO_ACTIVITY_SEARCH_OUTPUT
  ALLOWED_SENDERS_ADD: SMTP2GO_ALLOWED_SENDERS_ADD_OUTPUT
  ALLOWED_SENDERS_REMOVE: SMTP2GO_ALLOWED_SENDERS_REMOVE_OUTPUT
  ALLOWED_SENDERS_UPDATE: SMTP2GO_ALLOWED_SENDERS_UPDATE_OUTPUT
  ALLOWED_SENDERS_VIEW: SMTP2GO_ALLOWED_SENDERS_VIEW_OUTPUT
  DOMAIN_ADD: SMTP2GO_DOMAIN_ADD_OUTPUT
  EMAIL_SEARCH: SMTP2GO_EMAIL_SEARCH_OUTPUT
  IP_ALLOW_LIST_ADD: SMTP2GO_IP_ALLOW_LIST_ADD_OUTPUT
  IP_ALLOW_LIST_REMOVE: SMTP2GO_IP_ALLOW_LIST_REMOVE_OUTPUT
  IP_ALLOW_LIST_VIEW: SMTP2GO_IP_ALLOW_LIST_VIEW_OUTPUT
  SMS_VIEW_RECEIVED: SMTP2GO_SMS_VIEW_RECEIVED_OUTPUT
  STATS_EMAIL_BOUNCES: SMTP2GO_STATS_EMAIL_BOUNCES_OUTPUT
  STATS_EMAIL_CYCLE: SMTP2GO_STATS_EMAIL_CYCLE_OUTPUT
  STATS_EMAIL_HISTORY: SMTP2GO_STATS_EMAIL_HISTORY_OUTPUT
  STATS_EMAIL_SPAM: SMTP2GO_STATS_EMAIL_SPAM_OUTPUT
  STATS_EMAIL_UNSUBS: SMTP2GO_STATS_EMAIL_UNSUBS_OUTPUT
  SUBACCOUNTS_SEARCH: SMTP2GO_SUBACCOUNTS_SEARCH_OUTPUT
  SUBACCOUNTS_USAGE: SMTP2GO_SUBACCOUNTS_USAGE_OUTPUT
  SUPPRESSION_ADD: SMTP2GO_SUPPRESSION_ADD_OUTPUT
  SUPPRESSION_REMOVE: SMTP2GO_SUPPRESSION_REMOVE_OUTPUT
  SUPPRESSION_VIEW: SMTP2GO_SUPPRESSION_VIEW_OUTPUT
  TEMPLATE_EDIT: SMTP2GO_TEMPLATE_EDIT_OUTPUT
  TEMPLATE_SEARCH: SMTP2GO_TEMPLATE_SEARCH_OUTPUT
  TEMPLATE_VIEW: SMTP2GO_TEMPLATE_VIEW_OUTPUT
  USERS_SMTP_ADD: SMTP2GO_USERS_SMTP_ADD_OUTPUT
  USERS_SMTP_EDIT: SMTP2GO_USERS_SMTP_EDIT_OUTPUT
  USERS_SMTP_REMOVE: SMTP2GO_USERS_SMTP_REMOVE_OUTPUT
  USERS_SMTP_VIEW: SMTP2GO_USERS_SMTP_VIEW_OUTPUT
  WEBHOOK_ADD: SMTP2GO_WEBHOOK_ADD_OUTPUT
  WEBHOOK_EDIT: SMTP2GO_WEBHOOK_EDIT_OUTPUT
  WEBHOOK_REMOVE: SMTP2GO_WEBHOOK_REMOVE_OUTPUT
  WEBHOOK_VIEW: SMTP2GO_WEBHOOK_VIEW_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SMTP2GO toolkit.
 */
export const SMTP2GO = {
  slug: "smtp2go",
  tools: {
    /**
     * Tool to search activity events like sends, opens, clicks, and bounces. use when you need to filter account email activity by date, event, recipient, or message id.
     */
    ACTIVITY_SEARCH: "SMTP2GO_ACTIVITY_SEARCH",
    /**
     * Tool to add a new allowed sender email address. use when you need to whitelist a sender before sending email. example: add "user@example.com" to allowed senders list.
     */
    ALLOWED_SENDERS_ADD: "SMTP2GO_ALLOWED_SENDERS_ADD",
    /**
     * Tool to remove a sender email address from the allowed senders list. use when you need to revoke send permissions for a validated address.
     */
    ALLOWED_SENDERS_REMOVE: "SMTP2GO_ALLOWED_SENDERS_REMOVE",
    /**
     * Tool to update details of an existing allowed sender. use after confirming the allowed sender id.
     */
    ALLOWED_SENDERS_UPDATE: "SMTP2GO_ALLOWED_SENDERS_UPDATE",
    /**
     * Tool to view the list of allowed senders configured in your account. use after setting up smtp2go authentication to retrieve your allowed-senders list. example: 'show me all verified allowed senders.'
     */
    ALLOWED_SENDERS_VIEW: "SMTP2GO_ALLOWED_SENDERS_VIEW",
    /**
     * Tool to add a new sender domain for spf/dkim verification. use when you need to register a domain and optionally set tracking/return-path subdomains.
     */
    DOMAIN_ADD: "SMTP2GO_DOMAIN_ADD",
    /**
     * Tool to search sent emails. use when filtering your smtp2go account's email activity by criteria like date, sender, or recipient. call after authentication.
     */
    EMAIL_SEARCH: "SMTP2GO_EMAIL_SEARCH",
    /**
     * Tool to add an ip address or cidr range to your account’s ip allow list. use when you need to whitelist specific sending sources by ip or cidr after confirming accuracy.
     */
    IP_ALLOW_LIST_ADD: "SMTP2GO_IP_ALLOW_LIST_ADD",
    /**
     * Tool to remove an ip address from your account's ip allow list. use after identifying the ip you wish to revoke.
     */
    IP_ALLOW_LIST_REMOVE: "SMTP2GO_IP_ALLOW_LIST_REMOVE",
    /**
     * Tool to view the list of ip addresses in your ip allow list. use after confirming your smtp2go api key is set.
     */
    IP_ALLOW_LIST_VIEW: "SMTP2GO_IP_ALLOW_LIST_VIEW",
    /**
     * Tool to retrieve received sms replies for your smtp2go account. use when you need to fetch incoming sms messages for analysis or display. pagination supported via limit and offset.
     */
    SMS_VIEW_RECEIVED: "SMTP2GO_SMS_VIEW_RECEIVED",
    /**
     * Tool to retrieve email bounces statistics. use after sending emails to analyze bounce metrics over a time period.
     */
    STATS_EMAIL_BOUNCES: "SMTP2GO_STATS_EMAIL_BOUNCES",
    /**
     * Tool to retrieve email cycle statistics. use when you need to analyze email delivery metrics over a specified date range.
     */
    STATS_EMAIL_CYCLE: "SMTP2GO_STATS_EMAIL_CYCLE",
    /**
     * Tool to retrieve email history statistics. use when you need detailed delivery metrics within a date range.
     */
    STATS_EMAIL_HISTORY: "SMTP2GO_STATS_EMAIL_HISTORY",
    /**
     * Tool to retrieve email spam report statistics. use when analyzing spam trends for sent emails.
     */
    STATS_EMAIL_SPAM: "SMTP2GO_STATS_EMAIL_SPAM",
    /**
     * Tool to retrieve email unsubscribe statistics. use when you need unsubscribe data for your account over a date range.
     */
    STATS_EMAIL_UNSUBS: "SMTP2GO_STATS_EMAIL_UNSUBS",
    /**
     * Tool to search subaccounts. use after authenticating to filter and paginate your subaccounts by name, email, or status.
     */
    SUBACCOUNTS_SEARCH: "SMTP2GO_SUBACCOUNTS_SEARCH",
    /**
     * Tool to retrieve usage statistics for subaccounts. use when you need to monitor per-subaccount email usage.
     */
    SUBACCOUNTS_USAGE: "SMTP2GO_SUBACCOUNTS_USAGE",
    /**
     * Tool to add email addresses or domains to the suppression list. use when you need to block sending emails to specific recipients or entire domains after unsubscribes or bounces.
     */
    SUPPRESSION_ADD: "SMTP2GO_SUPPRESSION_ADD",
    /**
     * Tool to remove an email address or domain from the suppression list. use when you want to resume sending to the address or domain.
     */
    SUPPRESSION_REMOVE: "SMTP2GO_SUPPRESSION_REMOVE",
    /**
     * Tool to view the suppression list. use when you need to inspect suppressed email addresses in your account.
     */
    SUPPRESSION_VIEW: "SMTP2GO_SUPPRESSION_VIEW",
    /**
     * Tool to edit details of an existing email template. use when you need to update template properties after confirming its id.
     */
    TEMPLATE_EDIT: "SMTP2GO_TEMPLATE_EDIT",
    /**
     * Tool to search your collection of email templates by id or name. use when you need to find templates matching specific criteria after authentication.
     */
    TEMPLATE_SEARCH: "SMTP2GO_TEMPLATE_SEARCH",
    /**
     * Tool to view details of a specific email template. use after you have the template id to inspect.
     */
    TEMPLATE_VIEW: "SMTP2GO_TEMPLATE_VIEW",
    /**
     * Tool to add a new smtp user. use when you need to provision a fresh smtp credential after collecting username and password.
     */
    USERS_SMTP_ADD: "SMTP2GO_USERS_SMTP_ADD",
    /**
     * Tool to edit details of an existing smtp user. use when you need to update username, password, sender restrictions, or enable/disable a user after confirming the target username.
     */
    USERS_SMTP_EDIT: "SMTP2GO_USERS_SMTP_EDIT",
    /**
     * Tool to remove an smtp user from your account. use when you need to revoke smtp access for a user.
     */
    USERS_SMTP_REMOVE: "SMTP2GO_USERS_SMTP_REMOVE",
    /**
     * Tool to list all smtp users configured on your account. use when you need to retrieve smtp user configurations.
     */
    USERS_SMTP_VIEW: "SMTP2GO_USERS_SMTP_VIEW",
    /**
     * Tool to create a new webhook. use when you need real-time notifications of email or sms events.
     */
    WEBHOOK_ADD: "SMTP2GO_WEBHOOK_ADD",
    /**
     * Tool to edit an existing webhook’s settings. use when you need to update a webhook's configuration after creation.
     */
    WEBHOOK_EDIT: "SMTP2GO_WEBHOOK_EDIT",
    /**
     * Tool to remove a webhook. use when you want to delete a webhook by its id from your smtp2go account.
     */
    WEBHOOK_REMOVE: "SMTP2GO_WEBHOOK_REMOVE",
    /**
     * Tool to view all webhooks configured in your account. use when you need to inspect existing webhook configurations after setup.
     */
    WEBHOOK_VIEW: "SMTP2GO_WEBHOOK_VIEW",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SMTP2GO".
 */
export type SMTP2GO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SMTP2GO".
 */
export type SMTP2GO_TRIGGER_EVENTS = {}
