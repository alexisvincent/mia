// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HOOKDECK's HOOKDECK_BULK_CANCEL_EVENTS tool input.
 */
type HOOKDECK_BULK_CANCEL_EVENTS_INPUT = {
  /**
   * Query
   * @description Filter object specifying conditions for selecting events to cancel.
   */
  query?: {
      /**
       * Source Id
       * @description List of source IDs to filter events for cancellation.
       */
      source_id: string[];
  };
};

/**
 * Type of HOOKDECK's HOOKDECK_BULK_CANCEL_EVENTS tool output.
 */
type HOOKDECK_BULK_CANCEL_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cancelled At
       * Format: date-time
       * @description Cancellation timestamp if aborted.
       * @default null
       */
      cancelled_at: string | null;
      /**
       * Completed At
       * Format: date-time
       * @description Completion timestamp if finished.
       * @default null
       */
      completed_at: string | null;
      /**
       * Completed Count
       * @description Number of events already cancelled.
       */
      completed_count: number;
      /**
       * Created At
       * Format: date-time
       * @description Creation timestamp in ISO-8601 format.
       */
      created_at: string;
      /**
       * Estimated Batch
       * @description Estimated number of batches.
       * @default null
       */
      estimated_batch: number | null;
      /**
       * Estimated Count
       * @description Estimated number of matching events.
       */
      estimated_count: number;
      /**
       * Failed Count
       * @description Number of cancellations that failed.
       * @default null
       */
      failed_count: number | null;
      /**
       * Id
       * @description ID of the bulk cancellation operation.
       */
      id: string;
      /**
       * In Progress
       * @description Whether the operation is currently running.
       */
      in_progress: boolean;
      /**
       * Number
       * @description Operation sequence number.
       */
      number: number;
      /**
       * Processed Batch
       * @description Number of batches processed so far.
       */
      processed_batch: number;
      /**
       * Progress
       * @description Progress ratio (0 to 1).
       */
      progress: number;
      /**
       * Query
       * @description Filters applied to select events.
       */
      query: {
          /**
           * Source Id
           * @description List of source IDs to filter events for cancellation.
           */
          source_id: string[];
      };
      /**
       * Team Id
       * @description Workspace (team) ID.
       */
      team_id: string;
      /**
       * Type
       * @description Operation type ("events.cancel").
       */
      type: string;
      /**
       * Updated At
       * Format: date-time
       * @description Last update timestamp in ISO-8601 format.
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
 * Type of HOOKDECK's HOOKDECK_BULK_RETRY_EVENTS tool input.
 */
type HOOKDECK_BULK_RETRY_EVENTS_INPUT = {
  /**
   * Query
   * @description Filter object specifying conditions for selecting events to retry.
   */
  query?: {
      /**
       * Rejection Cause
       * @description List of rejection cause codes to filter events for retry.
       * @default null
       */
      rejection_cause: string[] | null;
  };
};

/**
 * Type of HOOKDECK's HOOKDECK_BULK_RETRY_EVENTS tool output.
 */
type HOOKDECK_BULK_RETRY_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cancelled At
       * Format: date-time
       * @description Cancellation timestamp if the operation was cancelled.
       * @default null
       */
      cancelled_at: string | null;
      /**
       * Completed At
       * Format: date-time
       * @description Completion timestamp if the operation has finished.
       * @default null
       */
      completed_at: string | null;
      /**
       * Completed Count
       * @description Number of events successfully retried so far.
       */
      completed_count: number;
      /**
       * Created At
       * Format: date-time
       * @description Creation timestamp in ISO-8601 format.
       */
      created_at: string;
      /**
       * Estimated Batch
       * @description Number of batches required to complete retry.
       */
      estimated_batch: number;
      /**
       * Estimated Count
       * @description Estimated number of events to retry.
       */
      estimated_count: number;
      /**
       * Failed Count
       * @description Count of items that failed during retry.
       * @default null
       */
      failed_count: number | null;
      /**
       * Id
       * @description ID of the bulk retry operation.
       */
      id: string;
      /**
       * In Progress
       * @description Whether the bulk retry is still in progress.
       */
      in_progress: boolean;
      /**
       * Number
       * @description Operation sequence number.
       */
      number: number;
      /**
       * Processed Batch
       * @description Number of batches processed so far.
       */
      processed_batch: number;
      /**
       * Progress
       * @description Progress indicator (0 to 1).
       */
      progress: number;
      /**
       * Query
       * @description Filters applied to select records.
       */
      query: {
          /**
           * Rejection Cause
           * @description List of rejection cause codes to filter events for retry.
           * @default null
           */
          rejection_cause: string[] | null;
      };
      /**
       * Team Id
       * @description Workspace (team) ID.
       */
      team_id: string;
      /**
       * Type
       * @description Operation type (e.g., 'requests.retry').
       */
      type: string;
      /**
       * Updated At
       * Format: date-time
       * @description Last update timestamp in ISO-8601 format.
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
 * Type of HOOKDECK's HOOKDECK_CANCEL_EVENT tool input.
 */
type HOOKDECK_CANCEL_EVENT_INPUT = {
  /**
   * Event Id
   * @description ID of the event to cancel
   */
  event_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_CANCEL_EVENT tool output.
 */
type HOOKDECK_CANCEL_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attempts
       * @description Number of delivery attempts made so far
       */
      attempts: number;
      /**
       * Cli Id
       * @description CLI identifier used to generate this event, if any
       * @default null
       */
      cli_id: string | null;
      /**
       * Created At
       * @description Timestamp when the event was created
       */
      created_at: string;
      /**
       * Destination Id
       * @description ID of the destination
       */
      destination_id: string;
      /**
       * Error Code
       * @description Error code of the last delivery failure
       * @default null
       */
      error_code: string | null;
      /**
       * Event Data Id
       * @description ID of the event payload data
       */
      event_data_id: string;
      /**
       * Id
       * @description ID of the event
       */
      id: string;
      /**
       * Last Attempt At
       * @description Timestamp of the most recent attempt
       * @default null
       */
      last_attempt_at: string | null;
      /**
       * Next Attempt At
       * @description Timestamp when the next attempt was scheduled; null after cancellation
       * @default null
       */
      next_attempt_at: string | null;
      /**
       * Request Id
       * @description Originating request ID
       */
      request_id: string;
      /**
       * Response Status
       * @description HTTP status code returned by the destination on the last attempt
       * @default null
       */
      response_status: number | null;
      /**
       * Source Id
       * @description ID of the source
       */
      source_id: string;
      /**
       * Status
       * @description Current status of the event, e.g., QUEUED, SUCCESSFUL, CANCELLED
       */
      status: string;
      /**
       * Successful At
       * @description Timestamp when a delivery attempt succeeded
       * @default null
       */
      successful_at: string | null;
      /**
       * Team Id
       * @description ID of the team/project
       */
      team_id: string;
      /**
       * Updated At
       * @description Timestamp when the event was last updated
       */
      updated_at: string;
      /**
       * Webhook Id
       * @description ID of the connection/webhook
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HOOKDECK's HOOKDECK_CANCEL_SCHEDULED_RETRIES tool input.
 */
type HOOKDECK_CANCEL_SCHEDULED_RETRIES_INPUT = {
  /**
   * Event Id
   * @description ID of the event to mute scheduled retries for
   */
  event_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_CANCEL_SCHEDULED_RETRIES tool output.
 */
type HOOKDECK_CANCEL_SCHEDULED_RETRIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attempts
       * @description Number of delivery attempts made so far
       */
      attempts: number;
      /**
       * Cli Id
       * @description CLI identifier used to generate this event, if any
       * @default null
       */
      cli_id: string | null;
      /**
       * Created At
       * @description Timestamp when the event was created
       */
      created_at: string;
      /**
       * Destination Id
       * @description ID of the destination
       */
      destination_id: string;
      /**
       * Error Code
       * @description Error code of the last delivery failure
       * @default null
       */
      error_code: string | null;
      /**
       * Event Data Id
       * @description ID of the event payload data
       */
      event_data_id: string;
      /**
       * Id
       * @description ID of the event
       */
      id: string;
      /**
       * Last Attempt At
       * @description Timestamp of the most recent attempt
       * @default null
       */
      last_attempt_at: string | null;
      /**
       * Next Attempt At
       * @description Timestamp for the next scheduled retry; null after muting
       * @default null
       */
      next_attempt_at: string | null;
      /**
       * Request Id
       * @description ID of the request that created the event
       */
      request_id: string;
      /**
       * Response Status
       * @description HTTP status code returned by the destination on the last attempt
       * @default null
       */
      response_status: number | null;
      /**
       * Source Id
       * @description ID of the source
       */
      source_id: string;
      /**
       * Status
       * @description Current status of the event
       */
      status: string;
      /**
       * Successful At
       * @description Timestamp when a delivery attempt succeeded
       * @default null
       */
      successful_at: string | null;
      /**
       * Team Id
       * @description ID of the team/project
       */
      team_id: string;
      /**
       * Updated At
       * @description Timestamp when the event was last updated
       */
      updated_at: string;
      /**
       * Webhook Id
       * @description ID of the webhook/connection
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HOOKDECK's HOOKDECK_CREATE_BOOKMARK tool input.
 */
type HOOKDECK_CREATE_BOOKMARK_INPUT = {
  /**
   * Event Data Id
   * @description ID of the event data to bookmark.
   */
  event_data_id?: string;
  /**
   * Label
   * @description Descriptive name for the bookmark shown in UI.
   */
  label?: string;
  /**
   * Webhook Id
   * @description ID of the associated connection (webhook).
   */
  webhook_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_CREATE_BOOKMARK tool output.
 */
type HOOKDECK_CREATE_BOOKMARK_OUTPUT = {
  /**
   * Alias
   * @description Optional alternate alias for the bookmark.
   * @default null
   */
  alias: string | null;
  /**
   * Created At
   * Format: date-time
   * @description When the bookmark was created.
   */
  created_at?: string;
  /**
   * ShortEventData
   * @description Snapshot of the original event request data at bookmark time.
   * @default null
   */
  data: {
      /**
       * Body
       * @description Parsed body of the original request.
       */
      body: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the event data was created.
       */
      created_at: string;
      /**
       * Headers
       * @description HTTP headers of the original request.
       */
      headers: {
          [key: string]: string;
      };
      /**
       * Id
       * @description Event data ID.
       */
      id: string;
      /**
       * Is Large Payload
       * @description Indicates if the payload was large.
       */
      is_large_payload: boolean;
      /**
       * Parsed Query
       * @description Parsed query parameters.
       */
      parsed_query: {
          [key: string]: unknown;
      };
      /**
       * Path
       * @description Request path.
       */
      path: string;
      /**
       * Query
       * @description Raw query string of the request.
       */
      query: string;
      /**
       * Raw Body
       * @description Raw serialized body of the original request.
       */
      raw_body: string;
      /**
       * Request Id
       * @description Associated request ID.
       */
      request_id: string;
      /**
       * Team Id
       * @description Team/project ID associated with the event.
       */
      team_id: string;
      /**
       * Verified
       * @description Indicates if the request signature was verified.
       */
      verified: boolean;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Event Data Id
   * @description Bookmarked event data ID.
   */
  event_data_id?: string;
  /**
   * Id
   * @description Unique bookmark ID.
   */
  id?: string;
  /**
   * Label
   * @description Bookmark label.
   */
  label?: string;
  /**
   * Last Used At
   * Format: date-time
   * @description When the bookmark was last manually triggered.
   * @default null
   */
  last_used_at: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Team Id
   * @description Project/workspace ID.
   */
  team_id?: string;
  /**
   * Updated At
   * Format: date-time
   * @description When the bookmark was last updated.
   */
  updated_at?: string;
  /**
   * Webhook Id
   * @description Associated connection (webhook) ID.
   */
  webhook_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_CREATE_CONNECTION tool input.
 */
type HOOKDECK_CREATE_CONNECTION_INPUT = {
  /**
   * Description
   * @description Optional human-readable description for the connection.
   * @default null
   */
  description: string | null;
  /**
   * DestinationInput
   * @description Inline input for creating a destination.
   * @default null
   */
  destination: {
      /**
       * Config
       * @description Configuration object specific to the destination type.
       */
      config: {
          /**
           * Auth
           * @description Auth credentials object matching chosen auth_type.
           * @default null
           */
          auth: {
              [key: string]: unknown;
          } | null;
          /**
           * Auth Type
           * @description Authentication scheme for the destination endpoint.
           * @default null
           * @enum {string|null}
           */
          auth_type: "none" | "basic" | "bearer" | "digest" | null;
          /**
           * Http Method
           * @description HTTP method to use when sending events.
           * @default null
           * @enum {string|null}
           */
          http_method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | null;
          /**
           * Path Forwarding Disabled
           * @description If true, original request path is not forwarded to destination.
           * @default null
           */
          path_forwarding_disabled: boolean | null;
          /**
           * Rate Limit
           * @description Maximum number of requests per rate limit period.
           * @default null
           */
          rate_limit: number | null;
          /**
           * Rate Limit Period
           * @description Time unit for rate limiting.
           * @default null
           * @enum {string|null}
           */
          rate_limit_period: "second" | "minute" | "hour" | "day" | null;
          /**
           * Url
           * @description Destination HTTP endpoint to which events will be sent.
           * @default null
           */
          url: string | null;
      };
      /**
       * Description
       * @description Human-readable description of the destination.
       * @default null
       */
      description: string | null;
      /**
       * Name
       * @description Unique alphanumeric name for the destination (letters, numbers, hyphens, underscores).
       */
      name: string;
      /**
       * Type
       * @description Destination type (e.g., HTTP, CLI, MOCK_API).
       * @default null
       */
      type: string | null;
  } | null;
  /**
   * Destination Id
   * @description ID of an existing destination to bind to this connection.
   * @default null
   */
  destination_id: string | null;
  /**
   * Name
   * @description Optional unique name for the connection.
   * @default null
   */
  name: string | null;
  /**
   * Rules
   * @description Optional list of retry rules for the connection.
   * @default null
   */
  rules: {
      /**
       * Count
       * @description Number of retry attempts.
       */
      count: number;
      /**
       * Interval
       * @description Delay in seconds between retries.
       */
      interval: number;
      /**
       * Response Status Codes
       * @description HTTP status codes that should trigger a retry.
       */
      response_status_codes: number[];
      /**
       * Strategy
       * @description Backoff strategy for retries.
       * @enum {string}
       */
      strategy: "exponential" | "linear";
  }[] | null;
  /**
   * SourceInput
   * @description Inline input for creating a source.
   * @default null
   */
  source: {
      /**
       * Config
       * @description Type-specific configuration for the source.
       * @default null
       */
      config: {
          [key: string]: unknown;
      } | null;
      /**
       * Description
       * @description Human-readable description of the source.
       * @default null
       */
      description: string | null;
      /**
       * Name
       * @description Unique alphanumeric name for the source.
       */
      name: string;
      /**
       * Type
       * @description Source type (e.g., WEBHOOK, INTERCOM, etc.).
       * @default null
       */
      type: string | null;
  } | null;
  /**
   * Source Id
   * @description ID of an existing source to bind to this connection.
   * @default null
   */
  source_id: string | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_CREATE_CONNECTION tool output.
 */
type HOOKDECK_CREATE_CONNECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the connection was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the connection.
       * @default null
       */
      description: string | null;
      /**
       * Destination
       * @description Destination object bound to this connection.
       */
      destination: {
          [key: string]: unknown;
      };
      /**
       * Disabled At
       * Format: date-time
       * @description Timestamp when the connection was disabled, if applicable.
       * @default null
       */
      disabled_at: string | null;
      /**
       * Full Name
       * @description Full hierarchical name (source→connection→destination).
       * @default null
       */
      full_name: string | null;
      /**
       * Id
       * @description Unique identifier of the connection.
       */
      id: string;
      /**
       * Name
       * @description Name of the connection.
       * @default null
       */
      name: string | null;
      /**
       * Paused At
       * Format: date-time
       * @description Timestamp when the connection was paused, if applicable.
       * @default null
       */
      paused_at: string | null;
      /**
       * Rules
       * @description Configured retry rules on the connection.
       * @default null
       */
      rules: {
          /**
           * Count
           * @description Number of retry attempts.
           */
          count: number;
          /**
           * Interval
           * @description Delay in seconds between retries.
           */
          interval: number;
          /**
           * Response Status Codes
           * @description HTTP status codes that should trigger a retry.
           */
          response_status_codes: number[];
          /**
           * Strategy
           * @description Backoff strategy for retries.
           * @enum {string}
           */
          strategy: "exponential" | "linear";
      }[] | null;
      /**
       * Source
       * @description Source object bound to this connection.
       */
      source: {
          [key: string]: unknown;
      };
      /**
       * Team Id
       * @description Identifier of the associated team/project.
       */
      team_id: string;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp when the connection was last updated.
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
 * Type of HOOKDECK's HOOKDECK_CREATE_DESTINATION tool input.
 */
type HOOKDECK_CREATE_DESTINATION_INPUT = {
  /**
   * Config
   * @description Configuration object specific to the chosen destination type.
   */
  config?: {
      /**
       * Auth
       * @description Authentication settings object; HTTP type only
       * @default null
       */
      auth: {
          [key: string]: unknown;
      } | null;
      /**
       * Auth Type
       * @description Authentication type for HTTP destinations
       * @default null
       */
      auth_type: string | null;
      /**
       * Http Method
       * @description HTTP method for destination requests; HTTP type only
       * @default null
       */
      http_method: string | null;
      /**
       * Path
       * @description CLI path for CLI type destinations
       * @default null
       */
      path: string | null;
      /**
       * Path Forwarding Disabled
       * @description Disable path forwarding from source; HTTP type only
       * @default null
       */
      path_forwarding_disabled: boolean | null;
      /**
       * Rate Limit
       * @description Max requests per rate limit period; HTTP type only
       * @default null
       */
      rate_limit: number | null;
      /**
       * Rate Limit Period
       * @description Rate limit period, e.g., 'minute' or 'hour'; HTTP type only
       * @default null
       */
      rate_limit_period: string | null;
      /**
       * Url
       * @description HTTP endpoint URL for HTTP type destinations
       * @default null
       */
      url: string | null;
  };
  /**
   * Description
   * @description Human-readable description of the destination.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Unique destination name; letters, numbers, hyphens, or underscores only; max 155 chars.
   */
  name?: string;
  /**
   * Type
   * @description Destination type; one of HTTP, CLI, or MOCK_API. Defaults to HTTP.
   * @default null
   * @enum {string|null}
   */
  type: "HTTP" | "CLI" | "MOCK_API" | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_CREATE_DESTINATION tool output.
 */
type HOOKDECK_CREATE_DESTINATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Config
       * @description Configuration details for the destination.
       */
      config: {
          /**
           * Auth
           * @description Authentication settings object; HTTP type only
           * @default null
           */
          auth: {
              [key: string]: unknown;
          } | null;
          /**
           * Auth Type
           * @description Authentication type for HTTP destinations
           * @default null
           */
          auth_type: string | null;
          /**
           * Http Method
           * @description HTTP method for destination requests; HTTP type only
           * @default null
           */
          http_method: string | null;
          /**
           * Path
           * @description CLI path for CLI type destinations
           * @default null
           */
          path: string | null;
          /**
           * Path Forwarding Disabled
           * @description Disable path forwarding from source; HTTP type only
           * @default null
           */
          path_forwarding_disabled: boolean | null;
          /**
           * Rate Limit
           * @description Max requests per rate limit period; HTTP type only
           * @default null
           */
          rate_limit: number | null;
          /**
           * Rate Limit Period
           * @description Rate limit period, e.g., 'minute' or 'hour'; HTTP type only
           * @default null
           */
          rate_limit_period: string | null;
          /**
           * Url
           * @description HTTP endpoint URL for HTTP type destinations
           * @default null
           */
          url: string | null;
      };
      /**
       * Created At
       * Format: date-time
       * @description ISO-8601 timestamp when the destination was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the destination.
       * @default null
       */
      description: string | null;
      /**
       * Disabled At
       * Format: date-time
       * @description ISO-8601 timestamp when the destination was disabled, if applicable.
       * @default null
       */
      disabled_at: string | null;
      /**
       * Id
       * @description Unique identifier of the destination.
       */
      id: string;
      /**
       * Name
       * @description Name of the destination.
       */
      name: string;
      /**
       * Team Id
       * @description Identifier of the associated team/project.
       */
      team_id: string;
      /**
       * Type
       * @description Type of the destination.
       */
      type: string;
      /**
       * Updated At
       * Format: date-time
       * @description ISO-8601 timestamp when the destination was last updated.
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
 * Type of HOOKDECK's HOOKDECK_CREATE_SOURCE tool input.
 */
type HOOKDECK_CREATE_SOURCE_INPUT = {
  /**
   * SourceConfig
   * @description Configuration object for the source; fields vary by source type.
   * @default null
   */
  config: {
      /**
       * Allowed Http Methods
       * @description List of HTTP methods this source will accept.
       * @default null
       */
      allowed_http_methods: string[] | null;
      /**
       * Auth
       * @description Authentication settings for this source (structure depends on auth_type).
       * @default null
       */
      auth: {
          [key: string]: unknown;
      } | null;
      /**
       * Auth Type
       * @description Authentication type enforced on incoming requests.
       * @default null
       * @enum {string|null}
       */
      auth_type: "BASIC_AUTH" | "OAUTH" | "NONE" | null;
      /**
       * Custom Response
       * @description Custom synchronous response configuration.
       * @default null
       */
      custom_response: {
          [key: string]: unknown;
      } | null;
  } | null;
  /**
   * Description
   * @description Human-readable description of the source.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Unique source name; letters, numbers, hyphens, or underscores only; max 155 chars.
   */
  name?: string;
  /**
   * Type
   * @description Predefined source type. Omit for a generic webhook source.
   * @default null
   * @enum {string|null}
   */
  type: "WEBHOOK" | "PUBLISH_API" | "AIPRISE" | "DOCUSIGN" | "INTERCOM" | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_CREATE_SOURCE tool output.
 */
type HOOKDECK_CREATE_SOURCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authenticated
       * @description Whether the source requires authentication.
       */
      authenticated: boolean;
      /**
       * Config
       * @description Configuration details for the source.
       */
      config: {
          /**
           * Allowed Http Methods
           * @description List of HTTP methods this source will accept.
           * @default null
           */
          allowed_http_methods: string[] | null;
          /**
           * Auth
           * @description Authentication settings for this source (structure depends on auth_type).
           * @default null
           */
          auth: {
              [key: string]: unknown;
          } | null;
          /**
           * Auth Type
           * @description Authentication type enforced on incoming requests.
           * @default null
           * @enum {string|null}
           */
          auth_type: "BASIC_AUTH" | "OAUTH" | "NONE" | null;
          /**
           * Custom Response
           * @description Custom synchronous response configuration.
           * @default null
           */
          custom_response: {
              [key: string]: unknown;
          } | null;
      };
      /**
       * Created At
       * Format: date-time
       * @description ISO-8601 timestamp when the source was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the source.
       * @default null
       */
      description: string | null;
      /**
       * Disabled At
       * Format: date-time
       * @description ISO-8601 timestamp when the source was disabled, if applicable.
       * @default null
       */
      disabled_at: string | null;
      /**
       * Id
       * @description Unique identifier of the source.
       */
      id: string;
      /**
       * Name
       * @description Name of the source.
       */
      name: string;
      /**
       * Team Id
       * @description Identifier of the associated team/project.
       */
      team_id: string;
      /**
       * Type
       * @description Type of the source.
       */
      type: string;
      /**
       * Updated At
       * Format: date-time
       * @description ISO-8601 timestamp when the source was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description Unique ingest URL for the source.
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
 * Type of HOOKDECK's HOOKDECK_CREATE_TRANSFORMATION tool input.
 */
type HOOKDECK_CREATE_TRANSFORMATION_INPUT = {
  /**
   * Code
   * @description JavaScript code to execute for the transformation.
   */
  code?: string;
  /**
   * Env
   * @description Key-value environment variables to pass to the transformation.
   * @default null
   */
  env: {
      [key: string]: string;
  } | null;
  /**
   * Name
   * @description Unique transformation name; letters, numbers, hyphens, or underscores only; max 155 chars.
   */
  name?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_CREATE_TRANSFORMATION tool output.
 */
type HOOKDECK_CREATE_TRANSFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description JavaScript code of the transformation.
       */
      code: string;
      /**
       * Code Hash
       * @description Hash of the transformation code.
       */
      code_hash: string;
      /**
       * Created At
       * Format: date-time
       * @description ISO-8601 timestamp when the transformation was created.
       */
      created_at: string;
      /**
       * Deleted At
       * Format: date-time
       * @description ISO-8601 timestamp when the transformation was deleted, if applicable.
       * @default null
       */
      deleted_at: string | null;
      /**
       * Env
       * @description Environment variables for the transformation.
       * @default null
       */
      env: {
          [key: string]: string;
      } | null;
      /**
       * Id
       * @description Unique identifier of the transformation.
       */
      id: string;
      /**
       * Name
       * @description Name of the transformation.
       */
      name: string;
      /**
       * Team Id
       * @description Identifier of the associated team/project.
       */
      team_id: string;
      /**
       * Updated At
       * Format: date-time
       * @description ISO-8601 timestamp when the transformation was last updated.
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
 * Type of HOOKDECK's HOOKDECK_DELETE_BOOKMARK tool input.
 */
type HOOKDECK_DELETE_BOOKMARK_INPUT = {
  /**
   * Bookmark Id
   * @description The unique identifier of the bookmark to permanently delete
   */
  bookmark_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_DELETE_BOOKMARK tool output.
 */
type HOOKDECK_DELETE_BOOKMARK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The identifier of the deleted bookmark
       */
      id: string;
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
 * Type of HOOKDECK's HOOKDECK_DELETE_CONNECTION tool input.
 */
type HOOKDECK_DELETE_CONNECTION_INPUT = {
  /**
   * Connection Id
   * @description The unique identifier of the connection to permanently delete
   */
  connection_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_DELETE_CONNECTION tool output.
 */
type HOOKDECK_DELETE_CONNECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The identifier of the deleted connection
       */
      id: string;
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
 * Type of HOOKDECK's HOOKDECK_DELETE_DESTINATION tool input.
 */
type HOOKDECK_DELETE_DESTINATION_INPUT = {
  /**
   * Destination Id
   * @description The unique identifier of the destination to permanently delete
   */
  destination_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_DELETE_DESTINATION tool output.
 */
type HOOKDECK_DELETE_DESTINATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The identifier of the deleted destination
       */
      id: string;
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
 * Type of HOOKDECK's HOOKDECK_DELETE_SOURCE tool input.
 */
type HOOKDECK_DELETE_SOURCE_INPUT = {
  /**
   * Source Id
   * @description The unique identifier of the source to permanently delete
   */
  source_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_DELETE_SOURCE tool output.
 */
type HOOKDECK_DELETE_SOURCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The identifier of the deleted source
       */
      id: string;
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
 * Type of HOOKDECK's HOOKDECK_DELETE_TRANSFORMATION tool input.
 */
type HOOKDECK_DELETE_TRANSFORMATION_INPUT = {
  /**
   * Transformation Id
   * @description The unique identifier of the transformation to permanently delete
   */
  transformation_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_DELETE_TRANSFORMATION tool output.
 */
type HOOKDECK_DELETE_TRANSFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The identifier of the deleted transformation
       */
      id: string;
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
 * Type of HOOKDECK's HOOKDECK_GET_ATTEMPT tool input.
 */
type HOOKDECK_GET_ATTEMPT_INPUT = {
  /**
   * Attempt Id
   * @description ID of the Hookdeck attempt to retrieve
   */
  attempt_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_GET_ATTEMPT tool output.
 */
type HOOKDECK_GET_ATTEMPT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attempt Number
       * @description Sequential number of the attempt
       * @default null
       */
      attempt_number: number | null;
      /**
       * Body
       * @description Destination's response body; may be 'NOT_AVAILABLE_YET' if not ready
       * @default null
       */
      body: unknown;
      /**
       * Created At
       * @description Record creation timestamp (ISO)
       */
      created_at: string;
      /**
       * Delivered At
       * @description When delivery was made (ISO timestamp)
       * @default null
       */
      delivered_at: string | null;
      /**
       * Delivery Latency
       * @description Delivery latency in milliseconds
       * @default null
       */
      delivery_latency: number | null;
      /**
       * Destination Id
       * @description Destination ID
       */
      destination_id: string;
      /**
       * Error Code
       * @description Delivery error code, e.g., CANCELLED, TIMEOUT, NOT_FOUND, CONNECTION_REFUSED, CONNECTION_RESET, etc.
       * @default null
       */
      error_code: string | null;
      /**
       * Event Id
       * @description Event ID
       */
      event_id: string;
      /**
       * Http Method
       * @description HTTP method used
       * @enum {string}
       */
      http_method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
      /**
       * Id
       * @description Attempt ID
       */
      id: string;
      /**
       * Requested Url
       * @description Destination URL attempted
       * @default null
       */
      requested_url: string | null;
      /**
       * Responded At
       * @description When destination responded (ISO timestamp)
       * @default null
       */
      responded_at: string | null;
      /**
       * Response Latency
       * @description Response latency in milliseconds
       * @default null
       */
      response_latency: number | null;
      /**
       * Response Status
       * @description HTTP status code returned by the destination
       * @default null
       */
      response_status: number | null;
      /**
       * Status
       * @description Attempt status, e.g., SUCCESSFUL, FAILED
       */
      status: string;
      /**
       * Successful At
       * @description When the attempt succeeded (ISO timestamp)
       * @default null
       */
      successful_at: string | null;
      /**
       * Team Id
       * @description Project/Team ID
       */
      team_id: string;
      /**
       * Trigger
       * @description How the attempt was triggered; one of INITIAL, MANUAL, BULK_RETRY, UNPAUSE, AUTOMATIC
       * @default null
       */
      trigger: string | null;
      /**
       * Updated At
       * @description Record last update timestamp (ISO)
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
 * Type of HOOKDECK's HOOKDECK_GET_ATTEMPTS tool input.
 */
type HOOKDECK_GET_ATTEMPTS_INPUT = {
  /**
   * Dir
   * @description Sort direction(s), e.g., asc or desc.
   * @default null
   */
  dir: string | null;
  /**
   * Event Id
   * @description Filter by one or more event IDs associated with the attempts.
   * @default null
   */
  event_id: string | null;
  /**
   * Id
   * @description Filter by one or more attempt IDs.
   * @default null
   */
  id: string | null;
  /**
   * Limit
   * @description Page size; max 255.
   * @default null
   */
  limit: number | null;
  /**
   * Next
   * @description Cursor to fetch the next page.
   * @default null
   */
  next: string | null;
  /**
   * Order By
   * @description Sort key(s) to order results by.
   * @default null
   */
  order_by: string | null;
  /**
   * Prev
   * @description Cursor to fetch the previous page.
   * @default null
   */
  prev: string | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_GET_ATTEMPTS tool output.
 */
type HOOKDECK_GET_ATTEMPTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of attempts in this page.
       */
      count: number;
      /**
       * Models
       * @description List of attempt objects.
       */
      models: {
          /**
           * Attempt Number
           * @description Sequential attempt number for this event (nullable).
           * @default null
           */
          attempt_number: number | null;
          /**
           * Body
           * @description Response body from destination (nullable).
           * @default null
           */
          body: {
              [key: string]: unknown;
          } | null;
          /**
           * Bulk Retry Id
           * @description Associated bulk retry ID (nullable).
           * @default null
           */
          bulk_retry_id: string | null;
          /**
           * Created At
           * @description Attempt record creation timestamp.
           */
          created_at: string;
          /**
           * Delivered At
           * @description Timestamp when delivery was attempted.
           */
          delivered_at: string;
          /**
           * Delivery Latency
           * @description Milliseconds from send to delivery.
           */
          delivery_latency: number;
          /**
           * Destination Id
           * @description Destination ID.
           */
          destination_id: string;
          /**
           * Error Code
           * @description Delivery error code.
           * @default null
           */
          error_code: string | null;
          /**
           * Event Id
           * @description Event ID associated with the attempt.
           */
          event_id: string;
          /**
           * Http Method
           * @description HTTP method used for delivery.
           */
          http_method: string;
          /**
           * Id
           * @description Attempt ID.
           */
          id: string;
          /**
           * Requested Url
           * @description Destination URL attempted (nullable).
           * @default null
           */
          requested_url: string | null;
          /**
           * Responded At
           * @description Timestamp when the destination responded.
           */
          responded_at: string;
          /**
           * Response Latency
           * @description Milliseconds from delivery to response.
           */
          response_latency: number;
          /**
           * Response Status
           * @description HTTP response status code (nullable).
           * @default null
           */
          response_status: number | null;
          /**
           * Status
           * @description Attempt status, e.g., SUCCESSFUL, FAILED.
           */
          status: string;
          /**
           * Successful At
           * @description Timestamp when attempt succeeded.
           * @default null
           */
          successful_at: string | null;
          /**
           * Team Id
           * @description Team (project) ID.
           */
          team_id: string;
          /**
           * Trigger
           * @description How the attempt was triggered (INITIAL, MANUAL, etc.).
           * @default null
           */
          trigger: string | null;
          /**
           * Updated At
           * @description Attempt record last update timestamp.
           */
          updated_at: string;
      }[];
      /**
       * Pagination
       * @description Pagination details.
       */
      pagination: {
          /**
           * Dir
           * @description Sort direction used for this response.
           */
          dir: string;
          /**
           * Limit
           * @description Page size used for this response.
           */
          limit: number;
          /**
           * Next
           * @description Cursor for next page.
           * @default null
           */
          next: string | null;
          /**
           * Order By
           * @description Sort key used for this response.
           */
          order_by: string;
          /**
           * Prev
           * @description Cursor for previous page.
           * @default null
           */
          prev: string | null;
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
 * Type of HOOKDECK's HOOKDECK_GET_CONNECTION tool input.
 */
type HOOKDECK_GET_CONNECTION_INPUT = {
  /**
   * Connection Id
   * @description ID of the connection to retrieve
   */
  connection_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_GET_CONNECTION tool output.
 */
type HOOKDECK_GET_CONNECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp of the connection
       */
      created_at: string;
      /**
       * Description
       * @description Description of the connection
       * @default null
       */
      description: string | null;
      /**
       * Destination
       * @description Associated destination object
       */
      destination: {
          /**
           * Config
           * @description Configuration settings for the destination
           */
          config: {
              /**
               * Auth
               * @description Authentication credentials for the destination
               * @default null
               */
              auth: {
                  [key: string]: string;
              } | null;
              /**
               * Auth Type
               * @description Authentication type used for this destination
               */
              auth_type: string;
              /**
               * Http Method
               * @description HTTP method for sending events
               * @default null
               */
              http_method: string | null;
              /**
               * Path Forwarding Disabled
               * @description Whether to disable path forwarding
               */
              path_forwarding_disabled: boolean;
              /**
               * Rate Limit
               * @description Maximum number of requests allowed
               */
              rate_limit: number;
              /**
               * Rate Limit Period
               * @description Time period for rate limit, e.g., 'minute', 'hour'
               */
              rate_limit_period: string;
              /**
               * Url
               * @description Destination URL
               */
              url: string;
          };
          /**
           * Created At
           * @description Creation timestamp of the destination
           */
          created_at: string;
          /**
           * Description
           * @description Description of the destination
           * @default null
           */
          description: string | null;
          /**
           * Disabled At
           * @description Timestamp when the destination was disabled
           * @default null
           */
          disabled_at: string | null;
          /**
           * Id
           * @description ID of the destination
           */
          id: string;
          /**
           * Name
           * @description Name of the destination
           */
          name: string;
          /**
           * Team Id
           * @description ID of the team/project owning the destination
           */
          team_id: string;
          /**
           * Type
           * @description Destination type, e.g., HTTP, CLI, MOCK_API
           */
          type: string;
          /**
           * Updated At
           * @description Last update timestamp of the destination
           */
          updated_at: string;
      };
      /**
       * Disabled At
       * @description Timestamp when the connection was disabled
       * @default null
       */
      disabled_at: string | null;
      /**
       * Full Name
       * @description Concatenated source and connection name, e.g., 'source -> connection'
       * @default null
       */
      full_name: string | null;
      /**
       * Id
       * @description ID of the connection
       */
      id: string;
      /**
       * Name
       * @description Unique name of the connection for this source
       * @default null
       */
      name: string | null;
      /**
       * Paused At
       * @description Timestamp when the connection was paused
       * @default null
       */
      paused_at: string | null;
      /**
       * Rules
       * @description Rules configured on the connection
       * @default null
       */
      rules: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Source
       * @description Associated source object
       */
      source: {
          /**
           * Authenticated
           * @description Whether the source is authenticated
           */
          authenticated: boolean;
          /**
           * Config
           * @description Configuration settings for the source
           */
          config: {
              /**
               * Allowed Http Methods
               * @description List of allowed HTTP methods for the source
               */
              allowed_http_methods: string[];
              /**
               * Auth
               * @description Authentication credentials; only returned when include=config.auth is supplied
               * @default null
               */
              auth: {
                  [key: string]: string;
              } | null;
              /**
               * Auth Type
               * @description Authentication type for the source, if configured
               * @default null
               */
              auth_type: string | null;
              /**
               * SourceConfigCustomResponse
               * @description Custom synchronous response settings, if configured
               * @default null
               */
              custom_response: {
                  /**
                   * Body
                   * @description Body content for the custom synchronous response
                   */
                  body: string;
                  /**
                   * Headers
                   * @description Headers for the custom synchronous response
                   */
                  headers: {
                      [key: string]: string;
                  };
                  /**
                   * Status
                   * @description HTTP status code for the custom synchronous response
                   */
                  status: number;
              } | null;
          };
          /**
           * Created At
           * @description Creation timestamp of the source
           */
          created_at: string;
          /**
           * Description
           * @description Description of the source
           * @default null
           */
          description: string | null;
          /**
           * Disabled At
           * @description Timestamp when the source was disabled
           * @default null
           */
          disabled_at: string | null;
          /**
           * Id
           * @description ID of the source
           */
          id: string;
          /**
           * Name
           * @description Name of the source
           */
          name: string;
          /**
           * Team Id
           * @description ID of the project/team owning the source
           */
          team_id: string;
          /**
           * Type
           * @description Source type, e.g., WEBHOOK
           */
          type: string;
          /**
           * Updated At
           * @description Last update timestamp of the source
           */
          updated_at: string;
          /**
           * Url
           * @description Unique Hookdeck URL for this source
           */
          url: string;
      };
      /**
       * Team Id
       * @description ID of the project/team owning the connection
       */
      team_id: string;
      /**
       * Updated At
       * @description Last update timestamp of the connection
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
 * Type of HOOKDECK's HOOKDECK_GET_CONNECTIONS tool input.
 */
type HOOKDECK_GET_CONNECTIONS_INPUT = {
  /**
   * Destination Id
   * @description Filter by one or more destination IDs.
   * @default null
   */
  destination_id: string | null;
  /**
   * Dir
   * @description Sort direction: asc or desc. Default: desc.
   * @default null
   * @enum {string|null}
   */
  dir: "asc" | "desc" | null;
  /**
   * Disabled
   * @description Include disabled connections if true.
   * @default null
   */
  disabled: boolean | null;
  /**
   * Disabled At
   * @description Filter by disabled date using operators (gte, gt, lte, lt).
   * @default null
   */
  disabled_at: {
      [key: string]: string;
  } | null;
  /**
   * Full Name
   * @description Fuzzy match on combined 'source -> connection' name.
   * @default null
   */
  full_name: string | null;
  /**
   * Id
   * @description Filter by one or more connection IDs.
   * @default null
   */
  id: string | null;
  /**
   * Limit
   * @description Page size: integer between 1 and 250. Defaults to 100.
   * @default null
   */
  limit: number | null;
  /**
   * Next
   * @description Cursor for next page of results.
   * @default null
   */
  next: string | null;
  /**
   * Order By
   * @description Sort key(s). Default: created_at.
   * @default null
   */
  order_by: string | null;
  /**
   * Paused At
   * @description Filter by paused date using operators (gte, gt, lte, lt).
   * @default null
   */
  paused_at: {
      [key: string]: string;
  } | null;
  /**
   * Prev
   * @description Cursor for previous page of results.
   * @default null
   */
  prev: string | null;
  /**
   * Source Id
   * @description Filter by one or more source IDs.
   * @default null
   */
  source_id: string | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_GET_CONNECTIONS tool output.
 */
type HOOKDECK_GET_CONNECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of items in this page.
       */
      count: number;
      /**
       * Models
       * @description List of connection objects.
       */
      models: {
          /**
           * Created At
           * @description ISO datetime when created.
           */
          created_at: string;
          /**
           * Description
           * @description Connection description.
           * @default null
           */
          description: string | null;
          /**
           * Destination
           * @description Associated destination.
           */
          destination: {
              /**
               * Config
               * @description Destination configuration.
               */
              config: {
                  /**
                   * Auth
                   * @description Authentication credentials.
                   * @default null
                   */
                  auth: {
                      [key: string]: unknown;
                  } | null;
                  /**
                   * Auth Type
                   * @description Authentication type for destination.
                   * @default null
                   */
                  auth_type: string | null;
                  /**
                   * Http Method
                   * @description HTTP method for destination.
                   * @default null
                   */
                  http_method: string | null;
                  /**
                   * Path Forwarding Disabled
                   * @description Disable path forwarding.
                   * @default null
                   */
                  path_forwarding_disabled: boolean | null;
                  /**
                   * Rate Limit
                   * @description Rate limit per period.
                   * @default null
                   */
                  rate_limit: number | null;
                  /**
                   * Rate Limit Period
                   * @description Rate limit period, e.g., minute.
                   * @default null
                   */
                  rate_limit_period: string | null;
                  /**
                   * Url
                   * @description Destination URL.
                   */
                  url: string;
              } & {
                  [key: string]: unknown;
              };
              /**
               * Id
               * @description Destination ID.
               */
              id: string;
              /**
               * Name
               * @description Destination name.
               */
              name: string;
              /**
               * Type
               * @description Destination type.
               * @enum {string}
               */
              type: "HTTP" | "CLI" | "MOCK_API";
          };
          /**
           * Disabled At
           * @description ISO datetime when disabled.
           * @default null
           */
          disabled_at: string | null;
          /**
           * Full Name
           * @description Combined source -> connection name.
           */
          full_name: string;
          /**
           * Id
           * @description Connection ID.
           */
          id: string;
          /**
           * Name
           * @description Connection name.
           */
          name: string;
          /**
           * Paused At
           * @description ISO datetime when paused.
           * @default null
           */
          paused_at: string | null;
          /**
           * Rules
           * @description List of connection rules.
           */
          rules: ({
              /**
               * Config
               * @description Configuration for this rule.
               */
              config: {
                  [key: string]: unknown;
              };
              /**
               * Type
               * @description Rule type, e.g., retry, filter, transform, delay.
               */
              type: string;
          } & {
              [key: string]: unknown;
          })[];
          /**
           * Source
           * @description Associated source.
           */
          source: {
              /**
               * Authenticated
               * @description Whether the source is authenticated.
               */
              authenticated: boolean;
              /**
               * Config
               * @description Source configuration.
               */
              config: {
                  /**
                   * Allowed Http Methods
                   * @description Allowed HTTP methods for source.
                   * @default null
                   */
                  allowed_http_methods: string[] | null;
                  /**
                   * Auth
                   * @description Authentication credentials.
                   * @default null
                   */
                  auth: {
                      [key: string]: unknown;
                  } | null;
                  /**
                   * Auth Type
                   * @description Authentication type for source.
                   * @default null
                   */
                  auth_type: string | null;
                  /**
                   * Custom Response
                   * @description Custom synchronous response settings.
                   * @default null
                   */
                  custom_response: {
                      [key: string]: unknown;
                  } | null;
              } & {
                  [key: string]: unknown;
              };
              /**
               * Id
               * @description Source ID.
               */
              id: string;
              /**
               * Name
               * @description Source name.
               */
              name: string;
              /**
               * Type
               * @description Source type.
               */
              type: string;
              /**
               * Url
               * @description Hookdeck URL for the source.
               */
              url: string;
          };
          /**
           * Team Id
           * @description Project/team ID.
           */
          team_id: string;
          /**
           * Updated At
           * @description ISO datetime when last updated.
           */
          updated_at: string;
      }[];
      /**
       * Pagination
       * @description Pagination details.
       */
      pagination: {
          /**
           * Dir
           * @description Sort direction returned in this response.
           */
          dir: string;
          /**
           * Limit
           * @description Page size returned in this response.
           */
          limit: number;
          /**
           * Next
           * @description Cursor for next page.
           * @default null
           */
          next: string | null;
          /**
           * Order By
           * @description Sort key returned in this response.
           */
          order_by: string;
          /**
           * Prev
           * @description Cursor for previous page.
           * @default null
           */
          prev: string | null;
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
 * Type of HOOKDECK's HOOKDECK_GET_DESTINATION tool input.
 */
type HOOKDECK_GET_DESTINATION_INPUT = {
  /**
   * Destination Id
   * @description ID of the destination to retrieve
   */
  destination_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_GET_DESTINATION tool output.
 */
type HOOKDECK_GET_DESTINATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Config
       * @description Configuration settings for the destination
       */
      config: {
          /**
           * Auth
           * @description Authentication credentials for the destination
           * @default null
           */
          auth: {
              [key: string]: string;
          } | null;
          /**
           * Auth Type
           * @description Authentication type used for this destination
           */
          auth_type: string;
          /**
           * Http Method
           * @description HTTP method for sending events
           * @default null
           */
          http_method: string | null;
          /**
           * Path Forwarding Disabled
           * @description Whether to disable path forwarding
           */
          path_forwarding_disabled: boolean;
          /**
           * Rate Limit
           * @description Maximum number of requests allowed
           */
          rate_limit: number;
          /**
           * Rate Limit Period
           * @description Time period for rate limit, e.g., 'minute', 'hour'
           */
          rate_limit_period: string;
          /**
           * Url
           * @description Destination URL
           */
          url: string;
      };
      /**
       * Created At
       * @description Creation timestamp of the destination
       */
      created_at: string;
      /**
       * Description
       * @description Description of the destination
       * @default null
       */
      description: string | null;
      /**
       * Disabled At
       * @description Timestamp when the destination was disabled
       * @default null
       */
      disabled_at: string | null;
      /**
       * Id
       * @description ID of the destination
       */
      id: string;
      /**
       * Name
       * @description Name of the destination
       */
      name: string;
      /**
       * Team Id
       * @description ID of the team/project owning the destination
       */
      team_id: string;
      /**
       * Type
       * @description Destination type
       * @enum {string}
       */
      type: "HTTP" | "CLI" | "MOCK_API";
      /**
       * Updated At
       * @description Last update timestamp of the destination
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
 * Type of HOOKDECK's HOOKDECK_GET_DESTINATIONS tool input.
 */
type HOOKDECK_GET_DESTINATIONS_INPUT = {
  /**
   * Dir
   * @description Sort direction: asc or desc. Defaults to desc.
   * @default null
   * @enum {string|null}
   */
  dir: "asc" | "desc" | null;
  /**
   * Disabled
   * @description Include disabled destinations if true.
   * @default null
   */
  disabled: boolean | null;
  /**
   * Disabled At
   * @description Filter destinations disabled at a specific timestamp or with operators.
   * @default null
   */
  disabled_at: string | null;
  /**
   * Id
   * @description Filter by one or more destination IDs.
   * @default null
   */
  id: string | null;
  /**
   * Limit
   * @description Page size: integer between 1 and 255. Defaults to 100.
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description Filter by one or more destination names.
   * @default null
   */
  name: string | null;
  /**
   * Next
   * @description Cursor for next page.
   * @default null
   */
  next: string | null;
  /**
   * Order By
   * @description Sort key: name, created_at, or updated_at. Defaults to created_at.
   * @default null
   * @enum {string|null}
   */
  order_by: "name" | "created_at" | "updated_at" | null;
  /**
   * Prev
   * @description Cursor for previous page.
   * @default null
   */
  prev: string | null;
  /**
   * Type
   * @description Filter by destination type. Allowed values: HTTP, CLI, MOCK_API.
   * @default null
   * @enum {string|null}
   */
  type: "HTTP" | "CLI" | "MOCK_API" | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_GET_DESTINATIONS tool output.
 */
type HOOKDECK_GET_DESTINATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of items in this page.
       */
      count: number;
      /**
       * Models
       * @description List of destinations.
       */
      models: {
          /**
           * Config
           * @description Configuration for the destination.
           */
          config: {
              /**
               * Auth
               * @description Authentication configuration.
               */
              auth: {
                  [key: string]: unknown;
              };
              /**
               * Auth Type
               * @description Authentication type for the destination.
               */
              auth_type: string;
              /**
               * Http Method
               * @description HTTP method for the destination.
               * @default null
               */
              http_method: string | null;
              /**
               * Path Forwarding Disabled
               * @description If true, original path isn't forwarded.
               */
              path_forwarding_disabled: boolean;
              /**
               * Rate Limit
               * @description Rate limit per period.
               * @default null
               */
              rate_limit: number | null;
              /**
               * Rate Limit Period
               * @description Period for rate limit, e.g., 'minute'.
               */
              rate_limit_period: string;
              /**
               * Url
               * @description Destination URL.
               */
              url: string;
          };
          /**
           * Created At
           * @description Timestamp of creation.
           */
          created_at: string;
          /**
           * Description
           * @description Human-friendly description.
           * @default null
           */
          description: string | null;
          /**
           * Disabled At
           * @description Timestamp when disabled, if any.
           * @default null
           */
          disabled_at: string | null;
          /**
           * Id
           * @description Destination ID.
           */
          id: string;
          /**
           * Name
           * @description Destination name.
           */
          name: string;
          /**
           * Team Id
           * @description Team (project) ID.
           */
          team_id: string;
          /**
           * Type
           * @description Destination type.
           * @enum {string}
           */
          type: "HTTP" | "CLI" | "MOCK_API";
          /**
           * Updated At
           * @description Timestamp of last update.
           */
          updated_at: string;
      }[];
      /**
       * Pagination
       * @description Pagination details.
       */
      pagination: {
          /**
           * Dir
           * @description Sort direction returned in response.
           */
          dir: string;
          /**
           * Limit
           * @description Page size returned in response.
           */
          limit: number;
          /**
           * Next
           * @description Cursor for next page.
           * @default null
           */
          next: string | null;
          /**
           * Order By
           * @description Sort key returned in response.
           */
          order_by: string;
          /**
           * Prev
           * @description Cursor for previous page.
           * @default null
           */
          prev: string | null;
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
 * Type of HOOKDECK's HOOKDECK_GET_EVENTS tool input.
 */
type HOOKDECK_GET_EVENTS_INPUT = {
  /**
   * Attempts
   * @description Filter by number of delivery attempts with operators. E.g., {'gte': 2, 'lte': 5}.
   * @default null
   */
  attempts: {
      [key: string]: number;
  } | null;
  /**
   * Created At
   * @description Filter by event creation timestamp with operators. E.g., {'gte': '2023-01-01T00:00:00Z'}.
   * @default null
   */
  created_at: {
      [key: string]: string;
  } | null;
  /**
   * Destination Id
   * @description Filter by one or more destination IDs.
   * @default null
   */
  destination_id: string | null;
  /**
   * Dir
   * @description Sort direction: asc or desc; default is 'desc'.
   * @default null
   * @enum {string|null}
   */
  dir: "asc" | "desc" | null;
  /**
   * Id
   * @description Filter by one or more event IDs.
   * @default null
   */
  id: string | null;
  /**
   * Limit
   * @description Page size; default 100; max 250.
   * @default null
   */
  limit: number | null;
  /**
   * Next
   * @description Cursor to fetch the next page.
   * @default null
   */
  next: string | null;
  /**
   * Order By
   * @description Sort key; default is 'created_at'.
   * @default null
   */
  order_by: string | null;
  /**
   * Prev
   * @description Cursor to fetch the previous page.
   * @default null
   */
  prev: string | null;
  /**
   * Response Status
   * @description Filter by HTTP response status code(s) or with operators. E.g., 200, [200,404], or {'gte':400}.
   * @default null
   */
  response_status: number | null;
  /**
   * Source Id
   * @description Filter by one or more source IDs.
   * @default null
   */
  source_id: string | null;
  /**
   * Status
   * @description Filter by event lifecycle status (e.g., SUCCESSFUL, QUEUED, FAILED).
   * @default null
   */
  status: string | null;
  /**
   * Webhook Id
   * @description Filter by one or more connection (webhook) IDs.
   * @default null
   */
  webhook_id: string | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_GET_EVENTS tool output.
 */
type HOOKDECK_GET_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of events in this page.
       */
      count: number;
      /**
       * Models
       * @description List of event objects.
       */
      models: {
          /**
           * Attempts
           * @description Number of delivery attempts.
           */
          attempts: number;
          /**
           * Cli Id
           * @description CLI session identifier if applicable (nullable).
           * @default null
           */
          cli_id: string | null;
          /**
           * Created At
           * @description Timestamp when event was created.
           */
          created_at: string;
          /**
           * Destination Id
           * @description Destination ID.
           */
          destination_id: string;
          /**
           * Error Code
           * @description Delivery attempt error code (nullable).
           * @default null
           */
          error_code: string | null;
          /**
           * Event Data Id
           * @description Event data record ID.
           */
          event_data_id: string;
          /**
           * Id
           * @description Event ID.
           */
          id: string;
          /**
           * Last Attempt At
           * @description Timestamp of most recent attempt (nullable).
           * @default null
           */
          last_attempt_at: string | null;
          /**
           * Next Attempt At
           * @description Timestamp of next scheduled attempt (nullable).
           * @default null
           */
          next_attempt_at: string | null;
          /**
           * Request Id
           * @description Originating request ID.
           */
          request_id: string;
          /**
           * Response Status
           * @description Last HTTP response status code (nullable).
           * @default null
           */
          response_status: number | null;
          /**
           * Source Id
           * @description Source ID.
           */
          source_id: string;
          /**
           * Status
           * @description Event lifecycle status.
           */
          status: string;
          /**
           * Successful At
           * @description Timestamp when event delivery succeeded (nullable).
           * @default null
           */
          successful_at: string | null;
          /**
           * Team Id
           * @description Project (team) ID.
           */
          team_id: string;
          /**
           * Updated At
           * @description Timestamp when event was last updated.
           */
          updated_at: string;
          /**
           * Webhook Id
           * @description Connection (webhook) ID.
           */
          webhook_id: string;
      }[];
      /**
       * Pagination
       * @description Pagination details.
       */
      pagination: {
          /**
           * Dir
           * @description Sort direction used for this response.
           */
          dir: string;
          /**
           * Limit
           * @description Page size used for this response.
           */
          limit: number;
          /**
           * Next
           * @description Cursor for next page.
           * @default null
           */
          next: string | null;
          /**
           * Order By
           * @description Sort key used for this response.
           */
          order_by: string;
          /**
           * Prev
           * @description Cursor for previous page.
           * @default null
           */
          prev: string | null;
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
 * Type of HOOKDECK's HOOKDECK_GET_REQUEST tool input.
 */
type HOOKDECK_GET_REQUEST_INPUT = {
  /**
   * Request Id
   * @description ID of the Hookdeck request to retrieve
   */
  request_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_GET_REQUEST tool output.
 */
type HOOKDECK_GET_REQUEST_OUTPUT = {
  /**
   * Cli Events Count
   * @description Number of CLI events created from this request
   * @default null
   */
  cli_events_count: number | null;
  /**
   * Created At
   * @description Creation timestamp of the request
   */
  created_at?: string;
  /**
   * RequestData
   * @description Detailed original request data for the Hookdeck request.
   * @default null
   */
  data: {
      /**
       * Body
       * @description Inbound request body details
       */
      body: {
          /**
           * Body
           * @description Actual payload of the request body
           */
          body: boolean | null;
          /**
           * Headers
           * @description Body-related headers
           */
          headers: {
              [key: string]: string;
          };
      };
      /**
       * Headers
       * @description Inbound request headers
       */
      headers: {
          [key: string]: string;
      };
      /**
       * Is Large Payload
       * @description Indicates large payload handling
       */
      is_large_payload: boolean;
      /**
       * Parsed Query
       * @description Parsed query parameters
       */
      parsed_query: {
          [key: string]: unknown;
      };
      /**
       * Path
       * @description Request path
       */
      path: string;
      /**
       * Query
       * @description Raw query string
       */
      query: string;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Events Count
   * @description Number of events created from this request
   * @default null
   */
  events_count: number | null;
  /**
   * Id
   * @description Request ID
   */
  id?: string;
  /**
   * Ignored Count
   * @description Count of ignored events
   */
  ignored_count?: number;
  /**
   * Ingested At
   * @description Timestamp when the request was ingested
   * @default null
   */
  ingested_at: string | null;
  /**
   * Original Event Data Id
   * @description ID of the original event data record
   * @default null
   */
  original_event_data_id: string | null;
  /**
   * Rejection Cause
   * @description Reason the request was rejected, if applicable
   * @default null
   */
  rejection_cause: string | null;
  /**
   * Service Tier
   * @description Service tier for this request
   */
  service_tier?: string;
  /**
   * Source Id
   * @description ID of the associated source
   */
  source_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Team Id
   * @description Team (project) ID
   */
  team_id?: string;
  /**
   * Updated At
   * @description Last update timestamp of the request
   */
  updated_at?: string;
  /**
   * Verified
   * @description Whether the request was verified when received
   * @default null
   */
  verified: boolean | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_GET_REQUESTS tool input.
 */
type HOOKDECK_GET_REQUESTS_INPUT = {
  /**
   * Body
   * @description Partial JSON match against request body.
   * @default null
   */
  body: {
      [key: string]: unknown;
  } | null;
  /**
   * Cli Events Count
   * @description Filter by number of CLI events created. Accepts integer, list, or operators dict.
   * @default null
   */
  cli_events_count: number | null;
  /**
   * Dir
   * @description Sort direction (asc or desc).
   * @default null
   * @enum {string|null}
   */
  dir: "asc" | "desc" | null;
  /**
   * Events Count
   * @description Filter by number of events created (excluding CLI events). Accepts integer, list, or operators dict.
   * @default null
   */
  events_count: number | null;
  /**
   * Headers
   * @description Partial JSON match against request headers.
   * @default null
   */
  headers: {
      [key: string]: unknown;
  } | null;
  /**
   * Id
   * @description Filter by one or more request IDs.
   * @default null
   */
  id: string | null;
  /**
   * Ignored Count
   * @description Filter by ignored events count. Accepts a single integer, list of integers, or operators dict like {'gte': 5}.
   * @default null
   */
  ignored_count: number | null;
  /**
   * Ingested At
   * @description Filter by request ingestion timestamp. Accepts ISO-8601 string or operators dict like {'gte': '2023-01-01T00:00:00Z'}.
   * @default null
   */
  ingested_at: string | null;
  /**
   * Limit
   * @description Page size (1-255).
   * @default null
   */
  limit: number | null;
  /**
   * Next
   * @description Cursor for next page of results.
   * @default null
   */
  next: string | null;
  /**
   * Order By
   * @description Sort key for results.
   * @default null
   * @enum {string|null}
   */
  order_by: "ingested_at" | "created_at" | null;
  /**
   * Parsed Query
   * @description Partial JSON match against parsed query parameters.
   * @default null
   */
  parsed_query: {
      [key: string]: unknown;
  } | null;
  /**
   * Path
   * @description Partial string match against the request path.
   * @default null
   */
  path: string | null;
  /**
   * Prev
   * @description Cursor for previous page of results.
   * @default null
   */
  prev: string | null;
  /**
   * Rejection Cause
   * @description Filter by one or more rejection causes.
   * @default null
   */
  rejection_cause: string | null;
  /**
   * Source Id
   * @description Filter by one or more source IDs.
   * @default null
   */
  source_id: string | null;
  /**
   * Status
   * @description Filter by request status.
   * @default null
   * @enum {string|null}
   */
  status: "accepted" | "rejected" | null;
  /**
   * Verified
   * @description Filter by whether the request was verified.
   * @default null
   */
  verified: boolean | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_GET_REQUESTS tool output.
 */
type HOOKDECK_GET_REQUESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of items in this page.
       */
      count: number;
      /**
       * Models
       * @description List of request objects.
       */
      models: {
          /**
           * Cli Events Count
           * @description Count of CLI events created.
           * @default null
           */
          cli_events_count: number | null;
          /**
           * Created At
           * @description ISO timestamp when the request was created.
           */
          created_at: string;
          /**
           * Events Count
           * @description Count of events created (excluding CLI events).
           * @default null
           */
          events_count: number | null;
          /**
           * Id
           * @description Request ID.
           */
          id: string;
          /**
           * Ignored Count
           * @description Count of ignored events for this request.
           */
          ignored_count: number;
          /**
           * Ingested At
           * @description ISO timestamp when the request was ingested.
           */
          ingested_at: string;
          /**
           * Original Event Data Id
           * @description ID of the stored request data.
           * @default null
           */
          original_event_data_id: string | null;
          /**
           * Rejection Cause
           * @description Rejection cause if rejected.
           * @default null
           */
          rejection_cause: string | null;
          /**
           * Service Tier
           * @description Service tier label when present.
           * @default null
           */
          service_tier: string | null;
          /**
           * Source Id
           * @description Associated source ID.
           */
          source_id: string;
          /**
           * Team Id
           * @description Project (team) ID.
           */
          team_id: string;
          /**
           * Updated At
           * @description ISO timestamp when the request was last updated.
           */
          updated_at: string;
          /**
           * Verified
           * @description Whether the request was verified.
           * @default null
           */
          verified: boolean | null;
      }[];
      /**
       * Pagination
       * @description Pagination details.
       */
      pagination: {
          /**
           * Dir
           * @description Sort direction returned in this response.
           */
          dir: string;
          /**
           * Limit
           * @description Page size returned in this response.
           */
          limit: number;
          /**
           * Next
           * @description Cursor for next page.
           * @default null
           */
          next: string | null;
          /**
           * Order By
           * @description Sort key returned in this response.
           */
          order_by: string;
          /**
           * Prev
           * @description Cursor for previous page.
           * @default null
           */
          prev: string | null;
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
 * Type of HOOKDECK's HOOKDECK_GET_SOURCES tool input.
 */
type HOOKDECK_GET_SOURCES_INPUT = {
  /**
   * Dir
   * @description Sort direction used in the response; defaults to desc if omitted.
   * @default null
   * @enum {string|null}
   */
  dir: "asc" | "desc" | null;
  /**
   * Disabled
   * @description Include disabled resources in the response.
   * @default null
   */
  disabled: boolean | null;
  /**
   * Disabled At
   * @description Filter by date disabled; use operators gte, gt, lte, lt, e.g., {'gte': '2021-01-01'}.
   * @default null
   */
  disabled_at: {
      [key: string]: string;
  } | null;
  /**
   * Id
   * @description Filter by source IDs.
   * @default null
   */
  id: string | null;
  /**
   * Limit
   * @description Result set size (max 255).
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description Filter by source name; supports string operators such as contains.
   * @default null
   */
  name: string | null;
  /**
   * Next
   * @description ID to get the next page of results.
   * @default null
   */
  next: string | null;
  /**
   * Order By
   * @description Sort key used in the response; defaults to created_at if omitted.
   * @default null
   * @enum {string|null}
   */
  order_by: "name" | "created_at" | "updated_at" | null;
  /**
   * Prev
   * @description ID to get the previous page of results.
   * @default null
   */
  prev: string | null;
  /**
   * Type
   * @description Filter by source type.
   * @default null
   */
  type: string | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_GET_SOURCES tool output.
 */
type HOOKDECK_GET_SOURCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of items returned in this page.
       */
      count: number;
      /**
       * Models
       * @description List of source objects.
       */
      models: {
          /**
           * Authenticated
           * @description Whether the source is authenticated.
           */
          authenticated: boolean;
          /**
           * Config
           * @description Configuration for the source type.
           */
          config: {
              /**
               * Allowed Http Methods
               * @description Allowed HTTP methods for the source.
               * @default null
               */
              allowed_http_methods: string[] | null;
              /**
               * Custom Response
               * @description Custom response configuration for the source.
               * @default null
               */
              custom_response: {
                  [key: string]: string | number | boolean | string[] | {
                      [key: string]: string;
                  };
              } | null;
          } & {
              [key: string]: unknown;
          };
          /**
           * Created At
           * @description When the source was created (date).
           */
          created_at: string;
          /**
           * Description
           * @description Source description (nullable).
           * @default null
           */
          description: string | null;
          /**
           * Disabled At
           * @description When the source was disabled (nullable date).
           * @default null
           */
          disabled_at: string | null;
          /**
           * Id
           * @description Source ID.
           */
          id: string;
          /**
           * Name
           * @description Source name.
           */
          name: string;
          /**
           * Team Id
           * @description Project/Team ID.
           */
          team_id: string;
          /**
           * Type
           * @description Source type (e.g., WEBHOOK).
           */
          type: string;
          /**
           * Updated At
           * @description When the source was last updated (date).
           */
          updated_at: string;
          /**
           * Url
           * @description Unique Hookdeck URL for the source.
           */
          url: string;
      }[];
      /**
       * Pagination
       * @description Pagination details.
       */
      pagination: {
          /**
           * Dir
           * @description Sort direction used for this response.
           */
          dir: string;
          /**
           * Limit
           * @description Page size used for this response.
           */
          limit: number;
          /**
           * Order By
           * @description Sort key used for this response.
           */
          order_by: string;
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
 * Type of HOOKDECK's HOOKDECK_GET_TRANSFORMATION tool input.
 */
type HOOKDECK_GET_TRANSFORMATION_INPUT = {
  /**
   * Transformation Id
   * @description ID of the transformation to retrieve
   */
  transformation_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_GET_TRANSFORMATION tool output.
 */
type HOOKDECK_GET_TRANSFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description JavaScript code of the transformation
       */
      code: string;
      /**
       * Created At
       * @description ISO timestamp when the transformation was created
       */
      created_at: string;
      /**
       * Env
       * @description Environment variables for the transformation
       */
      env: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Transformation ID
       */
      id: string;
      /**
       * Name
       * @description Human-friendly name of the transformation
       */
      name: string;
      /**
       * Team Id
       * @description Team ID associated with the transformation
       */
      team_id: string;
      /**
       * Updated At
       * @description ISO timestamp when the transformation was last updated
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
 * Type of HOOKDECK's HOOKDECK_GET_TRANSFORMATIONS tool input.
 */
type HOOKDECK_GET_TRANSFORMATIONS_INPUT = {
  /**
   * Dir
   * @description Sort direction used for this response.
   * @default null
   * @enum {string|null}
   */
  dir: "asc" | "desc" | null;
  /**
   * Id
   * @description Filter by transformation IDs.
   * @default null
   */
  id: string | null;
  /**
   * Limit
   * @description Page size; maximum of 255.
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description Filter by transformation name; supports string operators such as contains.
   * @default null
   */
  name: string | null;
  /**
   * Next
   * @description Cursor for next page of results.
   * @default null
   */
  next: string | null;
  /**
   * Order By
   * @description Sort key used for this response.
   * @default null
   * @enum {string|null}
   */
  order_by: "name" | "created_at" | "updated_at" | null;
  /**
   * Prev
   * @description Cursor for previous page of results.
   * @default null
   */
  prev: string | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_GET_TRANSFORMATIONS tool output.
 */
type HOOKDECK_GET_TRANSFORMATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of transformations returned in this page.
       */
      count: number;
      /**
       * Models
       * @description List of transformation objects.
       */
      models: {
          /**
           * Code
           * @description JavaScript code executed by the transformation.
           */
          code: string;
          /**
           * Created At
           * @description ISO timestamp when the transformation was created.
           */
          created_at: string;
          /**
           * Env
           * @description Environment variables for the transformation (key/value pairs).
           * @default null
           */
          env: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Transformation ID.
           */
          id: string;
          /**
           * Name
           * @description Human-friendly name of the transformation.
           */
          name: string;
          /**
           * Team Id
           * @description Team/project ID.
           */
          team_id: string;
          /**
           * Updated At
           * @description ISO timestamp when the transformation was last updated.
           */
          updated_at: string;
      }[];
      /**
       * Pagination
       * @description Pagination details.
       */
      pagination: {
          /**
           * Dir
           * @description Sort direction used for this response.
           */
          dir: string;
          /**
           * Limit
           * @description Page size used for this response.
           */
          limit: number;
          /**
           * Next
           * @description Cursor for next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Order By
           * @description Sort key used for this response.
           */
          order_by: string;
          /**
           * Prev
           * @description Cursor for previous page of results.
           * @default null
           */
          prev: string | null;
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
 * Type of HOOKDECK's HOOKDECK_HOOKDECK_GET_SOURCE tool input.
 */
type HOOKDECK_HOOKDECK_GET_SOURCE_INPUT = {
  /**
   * Include
   * @description Optional include parameter. For API version 2023-07-01 use 'verification.configs'; for newer versions, 'config.auth' is supported.
   * @default null
   * @enum {string|null}
   */
  include: "verification.configs" | "config.auth" | null;
  /**
   * Source Id
   * @description ID of the source to retrieve
   */
  source_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_HOOKDECK_GET_SOURCE tool output.
 */
type HOOKDECK_HOOKDECK_GET_SOURCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authenticated
       * @description Whether the source is authenticated
       */
      authenticated: boolean;
      /**
       * Config
       * @description Configuration settings for the source
       */
      config: {
          /**
           * Allowed Http Methods
           * @description List of allowed HTTP methods for the source
           */
          allowed_http_methods: string[];
          /**
           * Auth
           * @description Authentication credentials; only returned when include=config.auth is supplied
           * @default null
           */
          auth: {
              [key: string]: string;
          } | null;
          /**
           * Auth Type
           * @description Authentication type for the source, if configured
           * @default null
           */
          auth_type: string | null;
          /**
           * SourceConfigCustomResponse
           * @description Custom synchronous response settings, if configured
           * @default null
           */
          custom_response: {
              /**
               * Body
               * @description Body content for the custom synchronous response
               */
              body: string;
              /**
               * Headers
               * @description Headers for the custom synchronous response
               */
              headers: {
                  [key: string]: string;
              };
              /**
               * Status
               * @description HTTP status code for the custom synchronous response
               */
              status: number;
          } | null;
      };
      /**
       * Created At
       * @description Creation timestamp of the source
       */
      created_at: string;
      /**
       * Description
       * @description Description of the source
       * @default null
       */
      description: string | null;
      /**
       * Disabled At
       * @description Timestamp when the source was disabled
       * @default null
       */
      disabled_at: string | null;
      /**
       * Id
       * @description ID of the source
       */
      id: string;
      /**
       * Name
       * @description Name of the source
       */
      name: string;
      /**
       * Team Id
       * @description ID of the project/team owning the source
       */
      team_id: string;
      /**
       * Type
       * @description Source type, e.g., WEBHOOK
       */
      type: string;
      /**
       * Updated At
       * @description Last update timestamp of the source
       */
      updated_at: string;
      /**
       * Url
       * @description Unique Hookdeck URL for this source
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
 * Type of HOOKDECK's HOOKDECK_HOOKDECK_SEND_SOURCE_REQUEST tool input.
 */
type HOOKDECK_HOOKDECK_SEND_SOURCE_REQUEST_INPUT = {
  /**
   * Body
   * @description Optional JSON-compatible payload for POST/PUT/PATCH requests; serialized as JSON.
   * @default null
   */
  body: unknown;
  /**
   * Headers
   * @description Optional headers to include; do not include Hookdeck REST API auth headers.
   * @default null
   */
  headers: {
      [key: string]: string;
  } | null;
  /**
   * Method
   * @description HTTP method to use. GET is allowed only if enabled in the Source settings or via the x-hookdeck-allow-methods query parameter.
   * @default POST
   * @enum {string}
   */
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  /**
   * Path
   * @description Optional path appended after the source_id; must start with '/'.
   * @default null
   */
  path: string | null;
  /**
   * Query
   * @description Optional query parameters. Supports Hookdeck flags like x-hookdeck-allow-methods and x-hookdeck-response variants.
   * @default null
   */
  query: {
      [key: string]: string;
  } | null;
  /**
   * Source Id
   * @description The unique segment of the Source URL (not the internal object ID).
   */
  source_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_HOOKDECK_SEND_SOURCE_REQUEST tool output.
 */
type HOOKDECK_HOOKDECK_SEND_SOURCE_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Body
       * @description Raw response body text.
       */
      response_body: string;
      /**
       * Response Headers
       * @description Headers returned in the response.
       */
      response_headers: {
          [key: string]: unknown;
      };
      /**
       * Status Code
       * @description HTTP status code returned by the Source URL.
       */
      status_code: number;
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
 * Type of HOOKDECK's HOOKDECK_LIST_BOOKMARKS tool input.
 */
type HOOKDECK_LIST_BOOKMARKS_INPUT = {
  /**
   * Dir
   * @description Sort direction: 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  dir: "asc" | "desc" | null;
  /**
   * Event Data Id
   * @description Filter by one or more event data IDs
   * @default null
   */
  event_data_id: string | null;
  /**
   * Id
   * @description Filter by one or more bookmark IDs
   * @default null
   */
  id: string | null;
  /**
   * Label
   * @description Filter by one or more bookmark aliases or labels
   * @default null
   */
  label: string | null;
  /**
   * Limit
   * @description Page size limit (1-255)
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description Filter by one or more bookmark labels
   * @default null
   */
  name: string | null;
  /**
   * Next
   * @description Cursor for next page
   * @default null
   */
  next: string | null;
  /**
   * Order By
   * @description Field to order by, e.g., 'created_at' or 'last_used_at'
   * @default null
   */
  order_by: string | null;
  /**
   * Prev
   * @description Cursor for previous page
   * @default null
   */
  prev: string | null;
  /**
   * Webhook Id
   * @description Filter by one or more webhook (connection) IDs
   * @default null
   */
  webhook_id: string | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_LIST_BOOKMARKS tool output.
 */
type HOOKDECK_LIST_BOOKMARKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of bookmarks in this page
       */
      count: number;
      /**
       * Models
       * @description List of bookmarks returned
       */
      models: {
          /**
           * Alias
           * @description Alternate alias for the bookmark
           * @default null
           */
          alias: string | null;
          /**
           * Created At
           * @description ISO timestamp when bookmark was created
           */
          created_at: string;
          /**
           * ShortEventData
           * @description Truncated event data payload
           * @default null
           */
          data: {
              /**
               * Body
               * @description Request payload
               * @default null
               */
              body: boolean | null;
              /**
               * Headers
               * @description Request headers
               */
              headers: {
                  [key: string]: unknown;
              };
              /**
               * Method
               * @description HTTP method of the request
               */
              method: string;
              /**
               * Parsed Query
               * @description Parsed query parameters
               */
              parsed_query: {
                  [key: string]: unknown;
              };
              /**
               * Path
               * @description Request path
               */
              path: string;
              /**
               * Query
               * @description Raw query string
               */
              query: string;
              /**
               * Url
               * @description URL of the request
               */
              url: string;
          } | null;
          /**
           * Event Data Id
           * @description Event data record ID associated with bookmark
           */
          event_data_id: string;
          /**
           * Id
           * @description Bookmark ID
           */
          id: string;
          /**
           * Label
           * @description Bookmark label
           */
          label: string;
          /**
           * Last Used At
           * @description ISO timestamp when bookmark was last used
           * @default null
           */
          last_used_at: string | null;
          /**
           * Team Id
           * @description Team (workspace) ID
           */
          team_id: string;
          /**
           * Updated At
           * @description ISO timestamp when bookmark was last updated
           */
          updated_at: string;
          /**
           * Webhook Id
           * @description Connection (webhook) ID associated with bookmark
           */
          webhook_id: string;
      }[];
      /**
       * Pagination
       * @description Paging and ordering details
       */
      pagination: {
          /**
           * Dir
           * @description Sort direction for results
           */
          dir: string;
          /**
           * Limit
           * @description Page size limit used in query
           */
          limit: number;
          /**
           * Next
           * @description Cursor pointing to next page
           * @default null
           */
          next: string | null;
          /**
           * Order By
           * @description Field used for ordering results
           */
          order_by: string;
          /**
           * Prev
           * @description Cursor pointing to previous page
           * @default null
           */
          prev: string | null;
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
 * Type of HOOKDECK's HOOKDECK_LIST_ISSUES tool input.
 */
type HOOKDECK_LIST_ISSUES_INPUT = {
  /**
   * Aggregation Keys
   * @description Filter by aggregation keys as a JSON object.
   * @default null
   */
  aggregation_keys: {
      [key: string]: unknown;
  } | null;
  /**
   * Created At
   * @description Filter by creation timestamp using operators (gte, gt, lte, lt).
   * @default null
   */
  created_at: {
      [key: string]: string;
  } | null;
  /**
   * Dir
   * @description Sort direction: asc or desc.
   * @default null
   * @enum {string|null}
   */
  dir: "asc" | "desc" | null;
  /**
   * Dismissed At
   * @description Filter by dismissed timestamp using operators (gte, gt, lte, lt).
   * @default null
   */
  dismissed_at: {
      [key: string]: string;
  } | null;
  /**
   * First Seen At
   * @description Filter by first seen timestamp using operators (gte, gt, lte, lt).
   * @default null
   */
  first_seen_at: {
      [key: string]: string;
  } | null;
  /**
   * Id
   * @description Filter by one or more issue IDs.
   * @default null
   */
  id: string | null;
  /**
   * Issue Trigger Id
   * @description Filter by one or more issue trigger IDs.
   * @default null
   */
  issue_trigger_id: string | null;
  /**
   * Last Seen At
   * @description Filter by last seen timestamp using operators (gte, gt, lte, lt).
   * @default null
   */
  last_seen_at: {
      [key: string]: string;
  } | null;
  /**
   * Limit
   * @description Page size for pagination (1-250).
   * @default null
   */
  limit: number | null;
  /**
   * Merged With
   * @description Filter by one or more merged issue IDs.
   * @default null
   */
  merged_with: string | null;
  /**
   * Next
   * @description Cursor for next page of results.
   * @default null
   */
  next: string | null;
  /**
   * Order By
   * @description Sort key(s).
   * @default null
   */
  order_by: string | null;
  /**
   * Prev
   * @description Cursor for previous page of results.
   * @default null
   */
  prev: string | null;
  /**
   * Status
   * @description Filter by issue statuses: OPENED, IGNORED, ACKNOWLEDGED, RESOLVED.
   * @default null
   * @enum {string|null}
   */
  status: "OPENED" | "IGNORED" | "ACKNOWLEDGED" | "RESOLVED" | null;
  /**
   * Type
   * @description Filter by issue types: delivery, transformation, backpressure.
   * @default null
   * @enum {string|null}
   */
  type: "delivery" | "transformation" | "backpressure" | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_LIST_ISSUES tool output.
 */
type HOOKDECK_LIST_ISSUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of issues returned in this page.
       */
      count: number;
      /**
       * Models
       * @description List of issue objects.
       */
      models: {
          /**
           * Aggregation Keys
           * @description Aggregation keys for grouping issues.
           */
          aggregation_keys: {
              [key: string]: unknown;
          };
          /**
           * Auto Resolved At
           * @description ISO timestamp when auto-resolved, if applicable.
           * @default null
           */
          auto_resolved_at: string | null;
          /**
           * Created At
           * @description ISO timestamp when created.
           */
          created_at: string;
          /**
           * Dismissed At
           * @description ISO timestamp when dismissed, if applicable.
           * @default null
           */
          dismissed_at: string | null;
          /**
           * First Seen At
           * @description ISO timestamp when first detected.
           */
          first_seen_at: string;
          /**
           * Id
           * @description Unique identifier for the issue.
           */
          id: string;
          /**
           * Issue Trigger Id
           * @description ID of the associated issue trigger.
           */
          issue_trigger_id: string;
          /**
           * Last Seen At
           * @description ISO timestamp when last occurred.
           */
          last_seen_at: string;
          /**
           * Last Updated By
           * @description ID of the team member who last updated the issue.
           * @default null
           */
          last_updated_by: string | null;
          /**
           * Merged With
           * @description ID of the issue this issue was merged into, if any.
           * @default null
           */
          merged_with: string | null;
          /**
           * Opened At
           * @description ISO timestamp when last opened.
           */
          opened_at: string;
          /**
           * Reference
           * @description Contextual reference details.
           */
          reference: {
              /**
               * Attempt Body
               * @description Request body of the attempt if available.
               * @default null
               */
              attempt_body: {
                  [key: string]: unknown;
              } | null;
              /**
               * Attempt Id
               * @description ID of the related attempt.
               */
              attempt_id: string;
              /**
               * Event Id
               * @description ID of the related event.
               */
              event_id: string;
          } & {
              [key: string]: unknown;
          };
          /**
           * Status
           * @description Current status of the issue.
           * @enum {string}
           */
          status: "OPENED" | "IGNORED" | "ACKNOWLEDGED" | "RESOLVED";
          /**
           * Team Id
           * @description Workspace (team) ID.
           */
          team_id: string;
          /**
           * Type
           * @description Type of issue detected.
           * @enum {string}
           */
          type: "delivery" | "transformation" | "backpressure";
          /**
           * Updated At
           * @description ISO timestamp when last updated.
           */
          updated_at: string;
      }[];
      /**
       * Pagination
       * @description Pagination details.
       */
      pagination: {
          /**
           * Dir
           * @description Sort direction used for this response.
           */
          dir: string;
          /**
           * Limit
           * @description Page size used for this response.
           */
          limit: number;
          /**
           * Next
           * @description Cursor for next page.
           * @default null
           */
          next: string | null;
          /**
           * Order By
           * @description Sort key used for this response.
           */
          order_by: string;
          /**
           * Prev
           * @description Cursor for previous page.
           * @default null
           */
          prev: string | null;
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
 * Type of HOOKDECK's HOOKDECK_MANUALLY_RETRY_EVENT tool input.
 */
type HOOKDECK_MANUALLY_RETRY_EVENT_INPUT = {
  /**
   * Event Id
   * @description ID of the Hookdeck event to manually retry
   */
  event_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_MANUALLY_RETRY_EVENT tool output.
 */
type HOOKDECK_MANUALLY_RETRY_EVENT_OUTPUT = {
  /**
   * Attempts
   * @description Number of delivery attempts
   */
  attempts?: number;
  /**
   * Cli Id
   * @description CLI session ID if applicable
   * @default null
   */
  cli_id: string | null;
  /**
   * Created At
   * @description Timestamp when the event was created
   */
  created_at?: string;
  /**
   * Data
   * @description Details of the original event request
   */
  data?: {
      /**
       * Headers
       * @description Headers sent with the original webhook
       */
      headers: {
          [key: string]: string;
      };
      /**
       * Method
       * @description HTTP method of the original request
       */
      method: string;
      /**
       * Parsed Query
       * @description Parsed query parameters from the original request
       */
      parsed_query: {
          [key: string]: string;
      };
      /**
       * Path
       * @description Path of the original request URL
       */
      path: string;
      /**
       * Query
       * @description Raw query string of the original request
       */
      query: string;
      /**
       * Url
       * @description Original request URL
       */
      url: string;
  };
  /**
   * Destination Id
   * @description Associated destination ID
   */
  destination_id?: string;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code if delivery has failed
   * @default null
   */
  error_code: string | null;
  /**
   * Event Data Id
   * @description ID of the event data payload
   */
  event_data_id?: string;
  /**
   * Id
   * @description Unique identifier of the event
   */
  id?: string;
  /**
   * Last Attempt At
   * @description Timestamp of the last delivery attempt
   * @default null
   */
  last_attempt_at: string | null;
  /**
   * Next Attempt At
   * @description Timestamp scheduled for the next retry
   * @default null
   */
  next_attempt_at: string | null;
  /**
   * Request Id
   * @description Original request ID that triggered the event
   */
  request_id?: string;
  /**
   * Response Status
   * @description HTTP status code returned by the destination
   * @default null
   */
  response_status: number | null;
  /**
   * Source Id
   * @description Associated source ID
   */
  source_id?: string;
  /**
   * Status
   * @description Current status of the event
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Successful At
   * @description Timestamp when the event was successfully delivered
   * @default null
   */
  successful_at: string | null;
  /**
   * Team Id
   * @description ID of the team/project owning the event
   */
  team_id?: string;
  /**
   * Updated At
   * @description Timestamp when the event was last updated
   */
  updated_at?: string;
  /**
   * Webhook Id
   * @description Associated webhook (connection) ID
   */
  webhook_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_REPLAY_EVENT tool input.
 */
type HOOKDECK_REPLAY_EVENT_INPUT = {
  /**
   * Event Id
   * @description ID of the event to replay
   */
  event_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_REPLAY_EVENT tool output.
 */
type HOOKDECK_REPLAY_EVENT_OUTPUT = {
  /**
   * Attempts
   * @description Number of delivery attempts
   */
  attempts?: number;
  /**
   * Cli Id
   * @description CLI session ID if applicable
   * @default null
   */
  cli_id: string | null;
  /**
   * Created At
   * @description Timestamp when the event was created
   */
  created_at?: string;
  /**
   * Data
   * @description Details of the original event request
   */
  data?: {
      /**
       * Headers
       * @description Headers sent with the original webhook
       */
      headers: {
          [key: string]: string;
      };
      /**
       * Method
       * @description HTTP method of the original webhook
       */
      method: string;
      /**
       * Parsed Query
       * @description Parsed query parameters from the original request
       */
      parsed_query: {
          [key: string]: string;
      };
      /**
       * Path
       * @description Path of the original request URL
       */
      path: string;
      /**
       * Query
       * @description Raw query string of the original request
       */
      query: string;
      /**
       * Url
       * @description URL of the original webhook
       */
      url: string;
  };
  /**
   * Destination Id
   * @description Associated destination ID
   */
  destination_id?: string;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code if delivery has failed
   * @default null
   */
  error_code: string | null;
  /**
   * Event Data Id
   * @description ID of the event data payload
   */
  event_data_id?: string;
  /**
   * Id
   * @description Unique identifier of the event
   */
  id?: string;
  /**
   * Last Attempt At
   * @description Timestamp of the last delivery attempt
   * @default null
   */
  last_attempt_at: string | null;
  /**
   * Next Attempt At
   * @description Timestamp scheduled for the next retry
   * @default null
   */
  next_attempt_at: string | null;
  /**
   * Request Id
   * @description Original request ID that triggered the event
   */
  request_id?: string;
  /**
   * Response Status
   * @description HTTP status code returned by the destination
   * @default null
   */
  response_status: number | null;
  /**
   * Source Id
   * @description Associated source ID
   */
  source_id?: string;
  /**
   * Status
   * @description Current status of the event
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Successful At
   * @description Timestamp when the event was successfully delivered
   * @default null
   */
  successful_at: string | null;
  /**
   * Team Id
   * @description ID of the team/project owning the event
   */
  team_id?: string;
  /**
   * Updated At
   * @description Timestamp when the event was last updated
   */
  updated_at?: string;
  /**
   * Webhook Id
   * @description Associated webhook (connection) ID
   */
  webhook_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_RESOLVE_ISSUE tool input.
 */
type HOOKDECK_RESOLVE_ISSUE_INPUT = {
  /**
   * Issue Id
   * @description ID of the issue to resolve
   */
  issue_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_RESOLVE_ISSUE tool output.
 */
type HOOKDECK_RESOLVE_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Aggregation Keys
       * @description Aggregation details for the issue
       */
      aggregation_keys: {
          /**
           * Error Code
           * @description List of error codes associated with the issue
           * @default null
           */
          error_code: string[] | null;
          /**
           * Response Status
           * @description List of response status codes linked to the issue
           * @default null
           */
          response_status: number[] | null;
          /**
           * Webhook Id
           * @description List of webhook IDs related to the issue
           * @default null
           */
          webhook_id: string[] | null;
      };
      /**
       * Created At
       * @description ISO 8601 timestamp when the issue was created
       */
      created_at: string;
      /**
       * Dismissed At
       * @description ISO 8601 timestamp when the issue was dismissed, if applicable
       * @default null
       */
      dismissed_at: string | null;
      /**
       * First Seen At
       * @description ISO 8601 timestamp when the issue was first seen
       */
      first_seen_at: string;
      /**
       * Id
       * @description Unique identifier of the issue
       */
      id: string;
      /**
       * Last Seen At
       * @description ISO 8601 timestamp when the issue was last seen
       */
      last_seen_at: string;
      /**
       * Last Updated By
       * @description Identifier of the user who last updated the issue status
       * @default null
       */
      last_updated_by: string | null;
      /**
       * Merged With
       * @description ID of another issue this issue was merged into, if any
       * @default null
       */
      merged_with: string | null;
      /**
       * Opened At
       * @description ISO 8601 timestamp when the issue was opened
       */
      opened_at: string;
      /**
       * Reference
       * @description Reference context for the issue
       */
      reference: {
          /**
           * Attempt Body
           * @description Payload body of the triggering attempt
           * @default null
           */
          attempt_body: {
              [key: string]: unknown;
          } | null;
          /**
           * Attempt Id
           * @description ID of the attempt that caused the issue
           * @default null
           */
          attempt_id: string | null;
          /**
           * Event Id
           * @description ID of the event that triggered the issue
           * @default null
           */
          event_id: string | null;
      };
      /**
       * Status
       * @description Current status of the issue; will be "RESOLVED"
       */
      status: string;
      /**
       * Team Id
       * @description Team (project) identifier
       */
      team_id: string;
      /**
       * Type
       * @description Type of the issue, e.g., delivery, transformation, backpressure
       */
      type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the issue was last updated
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
 * Type of HOOKDECK's HOOKDECK_RETRIEVE_ISSUE tool input.
 */
type HOOKDECK_RETRIEVE_ISSUE_INPUT = {
  /**
   * Issue Id
   * @description ID of the Hookdeck issue to retrieve
   */
  issue_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_RETRIEVE_ISSUE tool output.
 */
type HOOKDECK_RETRIEVE_ISSUE_OUTPUT = {
  /**
   * Aggregation Keys
   * @description Grouping keys
   */
  aggregation_keys?: {
      /**
       * Error Code
       * @description Error codes.
       */
      error_code: string[];
      /**
       * Response Status
       * @description Response status codes.
       */
      response_status: number[];
      /**
       * Webhook Id
       * @description Related webhook IDs.
       */
      webhook_id: string[];
  };
  /**
   * Auto Resolved At
   * @description Auto-resolved timestamp (nullable)
   * @default null
   */
  auto_resolved_at: string | null;
  /**
   * Created At
   * @description Creation timestamp
   */
  created_at?: string;
  /**
   * Data
   * @description Detailed context data
   */
  data?: {
      /**
       * Trigger Attempt
       * @description Trigger attempt details
       */
      trigger_attempt: {
          /**
           * Attempt Number
           * @description Attempt number
           */
          attempt_number: number;
          /**
           * Body
           * @description Attempt context
           */
          body: {
              /**
               * Message
               * @description Attempt failure message
               */
              message: string;
              /**
               * Next Step
               * @description Next resolution step
               */
              next_step: string;
              /**
               * Received Data
               * @description Data received details for the attempt
               */
              received_data: {
                  /**
                   * Body
                   * @description Received data body for the attempt
                   */
                  body: boolean | null;
                  /**
                   * Headers
                   * @description Received headers for the attempt
                   */
                  headers: {
                      [key: string]: unknown;
                  };
                  /**
                   * Method
                   * @description HTTP method used
                   */
                  method: string;
                  /**
                   * Query
                   * @description Query string used
                   */
                  query: string;
              };
              /**
               * Requested Path
               * @description Requested path for the attempt
               */
              requested_path: string;
          };
          /**
           * Created At
           * @description Creation timestamp
           */
          created_at: string;
          /**
           * Delivered At
           * @description Delivery timestamp
           */
          delivered_at: string;
          /**
           * Delivery Latency
           * @description Delivery latency in ms
           */
          delivery_latency: number;
          /**
           * Destination Id
           * @description Destination ID
           */
          destination_id: string;
          /**
           * Error Code
           * @description Error code (nullable)
           * @default null
           */
          error_code: string | null;
          /**
           * Event Id
           * @description Event ID
           */
          event_id: string;
          /**
           * Id
           * @description Attempt ID
           */
          id: string;
          /**
           * Responded At
           * @description Response received timestamp
           */
          responded_at: string;
          /**
           * Response Latency
           * @description Response latency in ms
           */
          response_latency: number;
          /**
           * Response Status
           * @description Response status code
           */
          response_status: number;
          /**
           * State
           * @description Attempt state
           */
          state: string;
          /**
           * Status
           * @description Attempt status
           */
          status: string;
          /**
           * Successful At
           * @description Successful timestamp (nullable)
           * @default null
           */
          successful_at: string | null;
          /**
           * Team Id
           * @description Team ID
           */
          team_id: string;
          /**
           * Trigger
           * @description Trigger type
           */
          trigger: string;
          /**
           * Updated At
           * @description Last update timestamp
           */
          updated_at: string;
      };
      /**
       * Trigger Event
       * @description Trigger event details
       */
      trigger_event: {
          /**
           * Attempts
           * @description Number of attempts
           */
          attempts: number;
          /**
           * Cli Id
           * @description CLI event identifier (nullable)
           * @default null
           */
          cli_id: string | null;
          /**
           * Created At
           * @description Creation timestamp
           */
          created_at: string;
          /**
           * Data
           * @description Triggering event metadata
           */
          data: {
              /**
               * Appended Headers
               * @description Appended headers
               */
              appended_headers: string[];
              /**
               * Body
               * @description Structured body content
               */
              body: {
                  /**
                   * Body
                   * @description Actual request body
                   */
                  body: boolean | null;
                  /**
                   * Headers
                   * @description Body-related headers
                   */
                  headers: {
                      [key: string]: unknown;
                  };
              };
              /**
               * Headers
               * @description Original request headers
               */
              headers: {
                  [key: string]: unknown;
              };
              /**
               * Method
               * @description HTTP method of the original request
               */
              method: string;
              /**
               * Parsed Query
               * @description Parsed query parameters
               */
              parsed_query: {
                  [key: string]: unknown;
              };
              /**
               * Path
               * @description Request path
               */
              path: string;
              /**
               * Query
               * @description Raw query string
               */
              query: string;
              /**
               * Raw Body
               * @description Raw body content
               */
              raw_body: string;
              /**
               * Url
               * @description Original request URL
               */
              url: string;
          };
          /**
           * Destination Id
           * @description Destination ID
           */
          destination_id: string;
          /**
           * Error Code
           * @description Error code (nullable)
           * @default null
           */
          error_code: string | null;
          /**
           * Event Data Id
           * @description Event data record ID
           */
          event_data_id: string;
          /**
           * Id
           * @description Event ID
           */
          id: string;
          /**
           * Ingested At
           * @description Ingestion timestamp
           */
          ingested_at: string;
          /**
           * Issue Ids
           * @description Associated issue IDs
           */
          issue_ids: string[];
          /**
           * Last Attempt At
           * @description Last attempt timestamp
           */
          last_attempt_at: string;
          /**
           * Last Pending At
           * @description Last pending timestamp
           */
          last_pending_at: string;
          /**
           * Next Attempt At
           * @description Next attempt timestamp
           * @default null
           */
          next_attempt_at: string | null;
          /**
           * NextAttemptMeta
           * @description Next attempt metadata
           * @default null
           */
          next_attempt_meta: {
              [key: string]: unknown;
          } | null;
          /**
           * Request Id
           * @description Request ID
           */
          request_id: string;
          /**
           * Response Status
           * @description Response status code
           */
          response_status: number;
          /**
           * Source Id
           * @description Source ID
           */
          source_id: string;
          /**
           * State
           * @description Event state
           */
          state: string;
          /**
           * Status
           * @description Event status
           */
          status: string;
          /**
           * Successful At
           * @description Successful timestamp (nullable)
           * @default null
           */
          successful_at: string | null;
          /**
           * Team Id
           * @description Team ID
           */
          team_id: string;
          /**
           * Updated At
           * @description Last update timestamp
           */
          updated_at: string;
          /**
           * Webhook Id
           * @description Webhook ID
           */
          webhook_id: string;
      };
  };
  /**
   * Dismissed At
   * @description Dismissed timestamp (nullable)
   * @default null
   */
  dismissed_at: string | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * First Seen At
   * @description First seen timestamp
   */
  first_seen_at?: string;
  /**
   * Id
   * @description Issue ID
   */
  id?: string;
  /**
   * Issue Trigger Id
   * @description Issue trigger ID
   */
  issue_trigger_id?: string;
  /**
   * Last Seen At
   * @description Last seen timestamp
   */
  last_seen_at?: string;
  /**
   * Last Updated By
   * @description Last user who updated the issue
   * @default null
   */
  last_updated_by: string | null;
  /**
   * Merged With
   * @description Merged issue ID (nullable)
   * @default null
   */
  merged_with: string | null;
  /**
   * Opened At
   * @description Opened timestamp
   */
  opened_at?: string;
  /**
   * Reference
   * @description Trigger reference
   */
  reference?: {
      /**
       * Attempt Body
       * @description Context about the failing attempt
       */
      attempt_body: {
          /**
           * Message
           * @description Failure message
           */
          message: string;
          /**
           * Next Step
           * @description Next resolution step
           */
          next_step: string;
          /**
           * Received Data
           * @description Data received for the failing attempt
           */
          received_data: {
              /**
               * Body
               * @description Request body content
               */
              body: boolean | null;
              /**
               * Headers
               * @description Request headers
               */
              headers: {
                  [key: string]: unknown;
              };
              /**
               * Method
               * @description HTTP method of the failing attempt
               */
              method: string;
              /**
               * Query
               * @description Raw query string of the failing attempt
               */
              query: string;
          };
          /**
           * Requested Path
           * @description Path used in the failing request
           */
          requested_path: string;
      };
      /**
       * Attempt Id
       * @description Trigger attempt ID
       */
      attempt_id: string;
      /**
       * Event Id
       * @description Trigger event ID
       */
      event_id: string;
  };
  /**
   * Status
   * @description Issue status
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Team Id
   * @description Team ID
   */
  team_id?: string;
  /**
   * Type
   * @description Issue type
   */
  type?: string;
  /**
   * Updated At
   * @description Last update timestamp
   */
  updated_at?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_TRIGGER_BOOKMARK tool input.
 */
type HOOKDECK_TRIGGER_BOOKMARK_INPUT = {
  /**
   * Bookmark Id
   * @description ID of the bookmark to trigger for replaying its stored request
   */
  bookmark_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_TRIGGER_BOOKMARK tool output.
 */
type HOOKDECK_TRIGGER_BOOKMARK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attempts
       * @description Number of delivery attempts.
       */
      attempts: number;
      /**
       * Cli Id
       * @description CLI session identifier if applicable (nullable).
       * @default null
       */
      cli_id: string | null;
      /**
       * Created At
       * @description Timestamp when the event was created.
       */
      created_at: string;
      /**
       * Destination Id
       * @description Destination ID.
       */
      destination_id: string;
      /**
       * Error Code
       * @description Delivery attempt error code (nullable).
       * @default null
       */
      error_code: string | null;
      /**
       * Event Data Id
       * @description Event data record ID.
       */
      event_data_id: string;
      /**
       * Id
       * @description Event ID.
       */
      id: string;
      /**
       * Last Attempt At
       * @description Timestamp of the most recent attempt (nullable).
       * @default null
       */
      last_attempt_at: string | null;
      /**
       * Next Attempt At
       * @description Timestamp for the next scheduled attempt (nullable).
       * @default null
       */
      next_attempt_at: string | null;
      /**
       * Request Id
       * @description Originating request ID.
       */
      request_id: string;
      /**
       * Response Status
       * @description Last HTTP response status code (nullable).
       * @default null
       */
      response_status: number | null;
      /**
       * Source Id
       * @description Source ID.
       */
      source_id: string;
      /**
       * Status
       * @description Event lifecycle status.
       */
      status: string;
      /**
       * Successful At
       * @description Timestamp when the event was successfully delivered (nullable).
       * @default null
       */
      successful_at: string | null;
      /**
       * Team Id
       * @description Project (team) ID.
       */
      team_id: string;
      /**
       * Updated At
       * @description Timestamp when the event was last updated.
       */
      updated_at: string;
      /**
       * Webhook Id
       * @description Connection (webhook) ID.
       */
      webhook_id: string;
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
 * Type of HOOKDECK's HOOKDECK_UPDATE_CONNECTION tool input.
 */
type HOOKDECK_UPDATE_CONNECTION_INPUT = {
  /**
   * Connection Id
   * @description ID of the connection to update
   */
  connection_id?: string;
  /**
   * Description
   * @description Description for the connection; max 500 chars
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Unique name for the connection; pattern ^[A-Za-z0-9-_]+$, max 155 chars
   * @default null
   */
  name: string | null;
  /**
   * Rules
   * @description Array of rules for the connection (e.g., retry, filter)
   * @default null
   */
  rules: {
      [key: string]: unknown;
  }[] | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_UPDATE_CONNECTION tool output.
 */
type HOOKDECK_UPDATE_CONNECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp of the connection
       */
      created_at: string;
      /**
       * Description
       * @description Description of the connection
       * @default null
       */
      description: string | null;
      /**
       * Destination
       * @description Associated destination object
       */
      destination: {
          /**
           * Config
           * @description Configuration settings for the destination
           */
          config: {
              /**
               * Auth
               * @description Authentication credentials for the destination
               * @default null
               */
              auth: {
                  [key: string]: string;
              } | null;
              /**
               * Auth Type
               * @description Authentication type used for this destination
               */
              auth_type: string;
              /**
               * Http Method
               * @description HTTP method for sending events
               * @default null
               */
              http_method: string | null;
              /**
               * Path Forwarding Disabled
               * @description Whether to disable path forwarding
               */
              path_forwarding_disabled: boolean;
              /**
               * Rate Limit
               * @description Maximum number of requests allowed
               */
              rate_limit: number;
              /**
               * Rate Limit Period
               * @description Time period for rate limit, e.g., 'minute', 'hour'
               */
              rate_limit_period: string;
              /**
               * Url
               * @description Destination URL
               */
              url: string;
          };
          /**
           * Created At
           * @description Creation timestamp of the destination
           */
          created_at: string;
          /**
           * Description
           * @description Description of the destination
           * @default null
           */
          description: string | null;
          /**
           * Disabled At
           * @description Timestamp when the destination was disabled
           * @default null
           */
          disabled_at: string | null;
          /**
           * Id
           * @description ID of the destination
           */
          id: string;
          /**
           * Name
           * @description Name of the destination
           */
          name: string;
          /**
           * Team Id
           * @description ID of the team/project owning the destination
           */
          team_id: string;
          /**
           * Type
           * @description Destination type, e.g., HTTP, CLI, MOCK_API
           */
          type: string;
          /**
           * Updated At
           * @description Last update timestamp of the destination
           */
          updated_at: string;
      };
      /**
       * Disabled At
       * @description Timestamp when the connection was disabled
       * @default null
       */
      disabled_at: string | null;
      /**
       * Full Name
       * @description Concatenated source and connection name, e.g., 'source -> connection'
       * @default null
       */
      full_name: string | null;
      /**
       * Id
       * @description ID of the connection
       */
      id: string;
      /**
       * Name
       * @description Unique name of the connection
       * @default null
       */
      name: string | null;
      /**
       * Paused At
       * @description Timestamp when the connection was paused
       * @default null
       */
      paused_at: string | null;
      /**
       * Rules
       * @description Rules configured on the connection
       * @default null
       */
      rules: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Source
       * @description Associated source object
       */
      source: {
          /**
           * Authenticated
           * @description Whether the source is authenticated
           */
          authenticated: boolean;
          /**
           * Config
           * @description Configuration settings for the source
           */
          config: {
              /**
               * Allowed Http Methods
               * @description List of allowed HTTP methods for the source
               */
              allowed_http_methods: string[];
              /**
               * Auth
               * @description Authentication credentials; only returned when include=config.auth is supplied
               * @default null
               */
              auth: {
                  [key: string]: string;
              } | null;
              /**
               * Auth Type
               * @description Authentication type for the source, if configured
               * @default null
               */
              auth_type: string | null;
              /**
               * SourceConfigCustomResponse
               * @description Custom synchronous response settings, if configured
               * @default null
               */
              custom_response: {
                  /**
                   * Body
                   * @description Body content for the custom synchronous response
                   */
                  body: string;
                  /**
                   * Headers
                   * @description Headers for the custom synchronous response
                   */
                  headers: {
                      [key: string]: string;
                  };
                  /**
                   * Status
                   * @description HTTP status code for the custom synchronous response
                   */
                  status: number;
              } | null;
          };
          /**
           * Created At
           * @description Creation timestamp of the source
           */
          created_at: string;
          /**
           * Description
           * @description Description of the source
           * @default null
           */
          description: string | null;
          /**
           * Disabled At
           * @description Timestamp when the source was disabled
           * @default null
           */
          disabled_at: string | null;
          /**
           * Id
           * @description ID of the source
           */
          id: string;
          /**
           * Name
           * @description Name of the source
           */
          name: string;
          /**
           * Team Id
           * @description ID of the project/team owning the source
           */
          team_id: string;
          /**
           * Type
           * @description Source type, e.g., WEBHOOK
           */
          type: string;
          /**
           * Updated At
           * @description Last update timestamp of the source
           */
          updated_at: string;
          /**
           * Url
           * @description Unique Hookdeck URL for this source
           */
          url: string;
      };
      /**
       * Team Id
       * @description ID of the project/team owning the connection
       */
      team_id: string;
      /**
       * Updated At
       * @description Last update timestamp of the connection
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
 * Type of HOOKDECK's HOOKDECK_UPDATE_DESTINATION tool input.
 */
type HOOKDECK_UPDATE_DESTINATION_INPUT = {
  /**
   * DestinationConfig
   * @description Configuration for a Hookdeck destination.
   * @default null
   */
  config: {
      /**
       * Auth
       * @description Auth configuration object for the chosen auth_type
       * @default null
       */
      auth: {
          [key: string]: unknown;
      } | null;
      /**
       * Auth Type
       * @description Authentication type identifier
       * @default null
       */
      auth_type: string | null;
      /**
       * Http Method
       * @description HTTP method for outbound requests
       * @default null
       * @enum {string|null}
       */
      http_method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | null;
      /**
       * Path Forwarding Disabled
       * @description Disable forwarding the incoming path to the destination
       * @default null
       */
      path_forwarding_disabled: boolean | null;
      /**
       * Rate Limit
       * @description Maximum number of events per period, non-negative
       * @default null
       */
      rate_limit: number | null;
      /**
       * Rate Limit Period
       * @description Rate limit period
       * @default null
       * @enum {string|null}
       */
      rate_limit_period: "second" | "minute" | "hour" | "concurrent" | null;
      /**
       * Url
       * @description Destination endpoint URL (HTTP type)
       * @default null
       */
      url: string | null;
  } | null;
  /**
   * Description
   * @description Description for the destination, max length 500
   * @default null
   */
  description: string | null;
  /**
   * Destination Id
   * @description ID of the destination to update
   */
  destination_id?: string;
  /**
   * Name
   * @description New name for the destination. Pattern: ^[A-Za-z0-9\-_]+$, max length 155
   * @default null
   */
  name: string | null;
  /**
   * Type
   * @description Destination type
   * @default null
   * @enum {string|null}
   */
  type: "HTTP" | "CLI" | "MOCK_API" | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_UPDATE_DESTINATION tool output.
 */
type HOOKDECK_UPDATE_DESTINATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Config
       * @description Destination configuration
       */
      config: {
          /**
           * Auth
           * @description Auth configuration object for the chosen auth_type
           * @default null
           */
          auth: {
              [key: string]: unknown;
          } | null;
          /**
           * Auth Type
           * @description Authentication type identifier
           * @default null
           */
          auth_type: string | null;
          /**
           * Http Method
           * @description HTTP method for outbound requests
           * @default null
           * @enum {string|null}
           */
          http_method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | null;
          /**
           * Path Forwarding Disabled
           * @description Disable forwarding the incoming path to the destination
           * @default null
           */
          path_forwarding_disabled: boolean | null;
          /**
           * Rate Limit
           * @description Maximum number of events per period, non-negative
           * @default null
           */
          rate_limit: number | null;
          /**
           * Rate Limit Period
           * @description Rate limit period
           * @default null
           * @enum {string|null}
           */
          rate_limit_period: "second" | "minute" | "hour" | "concurrent" | null;
          /**
           * Url
           * @description Destination endpoint URL (HTTP type)
           * @default null
           */
          url: string | null;
      };
      /**
       * Created At
       * @description Creation timestamp (ISO-8601 format)
       */
      created_at: string;
      /**
       * Description
       * @description Description
       * @default null
       */
      description: string | null;
      /**
       * Disabled At
       * @description Disabled timestamp (ISO-8601 format)
       * @default null
       */
      disabled_at: string | null;
      /**
       * Id
       * @description Destination ID
       */
      id: string;
      /**
       * Name
       * @description Destination name
       */
      name: string;
      /**
       * Team Id
       * @description Project ID
       */
      team_id: string;
      /**
       * Type
       * @description Destination type
       * @enum {string}
       */
      type: "HTTP" | "CLI" | "MOCK_API";
      /**
       * Updated At
       * @description Last update timestamp (ISO-8601 format)
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
 * Type of HOOKDECK's HOOKDECK_UPDATE_SOURCE tool input.
 */
type HOOKDECK_UPDATE_SOURCE_INPUT = {
  /**
   * Config
   * @description Type-specific configuration object for the source
   * @default null
   */
  config: {
      [key: string]: unknown;
  } | null;
  /**
   * Description
   * @description Optional description for the source; max length 500
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Unique source name; alphanumeric characters, hyphens, and underscores only; pattern ^[A-z0-9-_]+$; max length 155
   * @default null
   */
  name: string | null;
  /**
   * Source Id
   * @description ID of the source to update
   */
  source_id?: string;
  /**
   * Type
   * @description Type of the source; must be one of the predefined source types
   * @default null
   * @enum {string|null}
   */
  type: "ADYEN" | "AIPRISE" | "AIRWALLEX" | "AKENEO" | "ALIPAY" | "AWS_SNS" | "BIGCOMMERCE" | "BONDSMITH" | "BRIDGE" | "CLIO" | "CLOUDSIGNAL" | "COMMERCELAYER" | "COURIER" | "CUSTOMERIO" | "DISCORD" | "DOCUSIGN" | "EBAY" | "ENODE" | "EXACT_ONLINE" | "FACEBOOK" | "FAVRO" | "FIREBLOCKS" | "FISERV" | "FRONTAPP" | "GITHUB" | "GITLAB" | "GOCARDLESS" | "HTTP" | "HUBSPOT" | "INTERCOM" | "LINEAR" | "LINKEDIN" | "MAILCHIMP" | "MAILGUN" | "MANAGED" | "MERAKI" | "MONDAY" | "NMI" | "NUVEMSHOP" | "NYLAS" | "OKTA" | "OPENAI" | "ORB" | "OURA" | "PADDLE" | "PAYPAL" | "PERSONA" | "PICQER" | "PIPEDRIVE" | "POLAR" | "POSTMARK" | "PRAXIS" | "PROPERTY-FINDER" | "PUBLISH_API" | "PYLON" | "QUOTER" | "RAZORPAY" | "RECHARGE" | "REPAY" | "REPLICATE" | "RING_CENTRAL" | "SANITY" | "SENDGRID" | "SHOPIFY" | "SHOPLINE" | "SLACK" | "SMILE" | "SOLIDGATE" | "SQUARE" | "STRAVA" | "STRIPE" | "SVIX" | "SYNCTERA" | "TALLY" | "TEBEX" | "TELNYX" | "THREE_D_EYE" | "TIKTOK" | "TIKTOK_SHOP" | "TOKENIO" | "TREEZOR" | "TRELLO" | "TWILIO" | "TWITCH" | "TWITTER" | "TYPEFORM" | "UPOLLO" | "UTILA" | "VERCEL" | "VERCEL_LOG_DRAINS" | "WEBHOOK" | "WHATSAPP" | "WIX" | "WOOCOMMERCE" | "WORKOS" | "XERO" | "ZENDESK" | "ZEROHASH" | "ZIFT" | "ZOOM" | null;
};

/**
 * Type of HOOKDECK's HOOKDECK_UPDATE_SOURCE tool output.
 */
type HOOKDECK_UPDATE_SOURCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authenticated
       * @description Whether the source is authenticated
       */
      authenticated: boolean;
      /**
       * Config
       * @description Source type configuration
       */
      config: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description ISO 8601 creation timestamp
       */
      created_at: string;
      /**
       * Description
       * @description Source description
       * @default null
       */
      description: string | null;
      /**
       * Disabled At
       * @description ISO 8601 timestamp when the source was disabled, null if enabled
       * @default null
       */
      disabled_at: string | null;
      /**
       * Id
       * @description Source ID
       */
      id: string;
      /**
       * Name
       * @description Source name
       */
      name: string;
      /**
       * Team Id
       * @description Team (project) ID
       */
      team_id: string;
      /**
       * Type
       * @description Source type
       * @enum {string}
       */
      type: "ADYEN" | "AIPRISE" | "AIRWALLEX" | "AKENEO" | "ALIPAY" | "AWS_SNS" | "BIGCOMMERCE" | "BONDSMITH" | "BRIDGE" | "CLIO" | "CLOUDSIGNAL" | "COMMERCELAYER" | "COURIER" | "CUSTOMERIO" | "DISCORD" | "DOCUSIGN" | "EBAY" | "ENODE" | "EXACT_ONLINE" | "FACEBOOK" | "FAVRO" | "FIREBLOCKS" | "FISERV" | "FRONTAPP" | "GITHUB" | "GITLAB" | "GOCARDLESS" | "HTTP" | "HUBSPOT" | "INTERCOM" | "LINEAR" | "LINKEDIN" | "MAILCHIMP" | "MAILGUN" | "MANAGED" | "MERAKI" | "MONDAY" | "NMI" | "NUVEMSHOP" | "NYLAS" | "OKTA" | "OPENAI" | "ORB" | "OURA" | "PADDLE" | "PAYPAL" | "PERSONA" | "PICQER" | "PIPEDRIVE" | "POLAR" | "POSTMARK" | "PRAXIS" | "PROPERTY-FINDER" | "PUBLISH_API" | "PYLON" | "QUOTER" | "RAZORPAY" | "RECHARGE" | "REPAY" | "REPLICATE" | "RING_CENTRAL" | "SANITY" | "SENDGRID" | "SHOPIFY" | "SHOPLINE" | "SLACK" | "SMILE" | "SOLIDGATE" | "SQUARE" | "STRAVA" | "STRIPE" | "SVIX" | "SYNCTERA" | "TALLY" | "TEBEX" | "TELNYX" | "THREE_D_EYE" | "TIKTOK" | "TIKTOK_SHOP" | "TOKENIO" | "TREEZOR" | "TRELLO" | "TWILIO" | "TWITCH" | "TWITTER" | "TYPEFORM" | "UPOLLO" | "UTILA" | "VERCEL" | "VERCEL_LOG_DRAINS" | "WEBHOOK" | "WHATSAPP" | "WIX" | "WOOCOMMERCE" | "WORKOS" | "XERO" | "ZENDESK" | "ZEROHASH" | "ZIFT" | "ZOOM";
      /**
       * Updated At
       * @description ISO 8601 last update timestamp
       */
      updated_at: string;
      /**
       * Url
       * @description Unique Hookdeck URL for the source
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
 * Type of HOOKDECK's HOOKDECK_UPDATE_TRANSFORMATION tool input.
 */
type HOOKDECK_UPDATE_TRANSFORMATION_INPUT = {
  /**
   * Code
   * @description JavaScript code to be executed in the transformation
   * @default null
   */
  code: string | null;
  /**
   * Env
   * @description Environment variables for the transformation as key-value pairs
   * @default null
   */
  env: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description A unique, human-friendly name for the transformation. Pattern: ^[A-Za-z0-9\-_]+$, max length 155
   * @default null
   */
  name: string | null;
  /**
   * Transformation Id
   * @description ID of the transformation to update
   */
  transformation_id?: string;
};

/**
 * Type of HOOKDECK's HOOKDECK_UPDATE_TRANSFORMATION tool output.
 */
type HOOKDECK_UPDATE_TRANSFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description JavaScript code of the transformation
       */
      code: string;
      /**
       * Code Hash
       * @description Hash of the transformation code
       */
      code_hash: string;
      /**
       * Created At
       * @description Creation timestamp (ISO-8601 format)
       */
      created_at: string;
      /**
       * Deleted At
       * @description Deletion timestamp if deleted (ISO-8601 format)
       * @default null
       */
      deleted_at: string | null;
      /**
       * Env
       * @description Environment variables for the transformation
       */
      env: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Transformation ID
       */
      id: string;
      /**
       * Name
       * @description Transformation name
       */
      name: string;
      /**
       * Team Id
       * @description Project (team) ID
       */
      team_id: string;
      /**
       * Updated At
       * @description Last update timestamp (ISO-8601 format)
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
 * Type map of all available tool input types for toolkit "HOOKDECK".
 */
export type HOOKDECK_TOOL_INPUTS = {
  BULK_CANCEL_EVENTS: HOOKDECK_BULK_CANCEL_EVENTS_INPUT
  BULK_RETRY_EVENTS: HOOKDECK_BULK_RETRY_EVENTS_INPUT
  CANCEL_EVENT: HOOKDECK_CANCEL_EVENT_INPUT
  CANCEL_SCHEDULED_RETRIES: HOOKDECK_CANCEL_SCHEDULED_RETRIES_INPUT
  CREATE_BOOKMARK: HOOKDECK_CREATE_BOOKMARK_INPUT
  CREATE_CONNECTION: HOOKDECK_CREATE_CONNECTION_INPUT
  CREATE_DESTINATION: HOOKDECK_CREATE_DESTINATION_INPUT
  CREATE_SOURCE: HOOKDECK_CREATE_SOURCE_INPUT
  CREATE_TRANSFORMATION: HOOKDECK_CREATE_TRANSFORMATION_INPUT
  DELETE_BOOKMARK: HOOKDECK_DELETE_BOOKMARK_INPUT
  DELETE_CONNECTION: HOOKDECK_DELETE_CONNECTION_INPUT
  DELETE_DESTINATION: HOOKDECK_DELETE_DESTINATION_INPUT
  DELETE_SOURCE: HOOKDECK_DELETE_SOURCE_INPUT
  DELETE_TRANSFORMATION: HOOKDECK_DELETE_TRANSFORMATION_INPUT
  GET_ATTEMPT: HOOKDECK_GET_ATTEMPT_INPUT
  GET_ATTEMPTS: HOOKDECK_GET_ATTEMPTS_INPUT
  GET_CONNECTION: HOOKDECK_GET_CONNECTION_INPUT
  GET_CONNECTIONS: HOOKDECK_GET_CONNECTIONS_INPUT
  GET_DESTINATION: HOOKDECK_GET_DESTINATION_INPUT
  GET_DESTINATIONS: HOOKDECK_GET_DESTINATIONS_INPUT
  GET_EVENTS: HOOKDECK_GET_EVENTS_INPUT
  GET_REQUEST: HOOKDECK_GET_REQUEST_INPUT
  GET_REQUESTS: HOOKDECK_GET_REQUESTS_INPUT
  GET_SOURCES: HOOKDECK_GET_SOURCES_INPUT
  GET_TRANSFORMATION: HOOKDECK_GET_TRANSFORMATION_INPUT
  GET_TRANSFORMATIONS: HOOKDECK_GET_TRANSFORMATIONS_INPUT
  HOOKDECK_GET_SOURCE: HOOKDECK_HOOKDECK_GET_SOURCE_INPUT
  HOOKDECK_SEND_SOURCE_REQUEST: HOOKDECK_HOOKDECK_SEND_SOURCE_REQUEST_INPUT
  LIST_BOOKMARKS: HOOKDECK_LIST_BOOKMARKS_INPUT
  LIST_ISSUES: HOOKDECK_LIST_ISSUES_INPUT
  MANUALLY_RETRY_EVENT: HOOKDECK_MANUALLY_RETRY_EVENT_INPUT
  REPLAY_EVENT: HOOKDECK_REPLAY_EVENT_INPUT
  RESOLVE_ISSUE: HOOKDECK_RESOLVE_ISSUE_INPUT
  RETRIEVE_ISSUE: HOOKDECK_RETRIEVE_ISSUE_INPUT
  TRIGGER_BOOKMARK: HOOKDECK_TRIGGER_BOOKMARK_INPUT
  UPDATE_CONNECTION: HOOKDECK_UPDATE_CONNECTION_INPUT
  UPDATE_DESTINATION: HOOKDECK_UPDATE_DESTINATION_INPUT
  UPDATE_SOURCE: HOOKDECK_UPDATE_SOURCE_INPUT
  UPDATE_TRANSFORMATION: HOOKDECK_UPDATE_TRANSFORMATION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HOOKDECK".
 */
export type HOOKDECK_TOOL_OUTPUTS = {
  BULK_CANCEL_EVENTS: HOOKDECK_BULK_CANCEL_EVENTS_OUTPUT
  BULK_RETRY_EVENTS: HOOKDECK_BULK_RETRY_EVENTS_OUTPUT
  CANCEL_EVENT: HOOKDECK_CANCEL_EVENT_OUTPUT
  CANCEL_SCHEDULED_RETRIES: HOOKDECK_CANCEL_SCHEDULED_RETRIES_OUTPUT
  CREATE_BOOKMARK: HOOKDECK_CREATE_BOOKMARK_OUTPUT
  CREATE_CONNECTION: HOOKDECK_CREATE_CONNECTION_OUTPUT
  CREATE_DESTINATION: HOOKDECK_CREATE_DESTINATION_OUTPUT
  CREATE_SOURCE: HOOKDECK_CREATE_SOURCE_OUTPUT
  CREATE_TRANSFORMATION: HOOKDECK_CREATE_TRANSFORMATION_OUTPUT
  DELETE_BOOKMARK: HOOKDECK_DELETE_BOOKMARK_OUTPUT
  DELETE_CONNECTION: HOOKDECK_DELETE_CONNECTION_OUTPUT
  DELETE_DESTINATION: HOOKDECK_DELETE_DESTINATION_OUTPUT
  DELETE_SOURCE: HOOKDECK_DELETE_SOURCE_OUTPUT
  DELETE_TRANSFORMATION: HOOKDECK_DELETE_TRANSFORMATION_OUTPUT
  GET_ATTEMPT: HOOKDECK_GET_ATTEMPT_OUTPUT
  GET_ATTEMPTS: HOOKDECK_GET_ATTEMPTS_OUTPUT
  GET_CONNECTION: HOOKDECK_GET_CONNECTION_OUTPUT
  GET_CONNECTIONS: HOOKDECK_GET_CONNECTIONS_OUTPUT
  GET_DESTINATION: HOOKDECK_GET_DESTINATION_OUTPUT
  GET_DESTINATIONS: HOOKDECK_GET_DESTINATIONS_OUTPUT
  GET_EVENTS: HOOKDECK_GET_EVENTS_OUTPUT
  GET_REQUEST: HOOKDECK_GET_REQUEST_OUTPUT
  GET_REQUESTS: HOOKDECK_GET_REQUESTS_OUTPUT
  GET_SOURCES: HOOKDECK_GET_SOURCES_OUTPUT
  GET_TRANSFORMATION: HOOKDECK_GET_TRANSFORMATION_OUTPUT
  GET_TRANSFORMATIONS: HOOKDECK_GET_TRANSFORMATIONS_OUTPUT
  HOOKDECK_GET_SOURCE: HOOKDECK_HOOKDECK_GET_SOURCE_OUTPUT
  HOOKDECK_SEND_SOURCE_REQUEST: HOOKDECK_HOOKDECK_SEND_SOURCE_REQUEST_OUTPUT
  LIST_BOOKMARKS: HOOKDECK_LIST_BOOKMARKS_OUTPUT
  LIST_ISSUES: HOOKDECK_LIST_ISSUES_OUTPUT
  MANUALLY_RETRY_EVENT: HOOKDECK_MANUALLY_RETRY_EVENT_OUTPUT
  REPLAY_EVENT: HOOKDECK_REPLAY_EVENT_OUTPUT
  RESOLVE_ISSUE: HOOKDECK_RESOLVE_ISSUE_OUTPUT
  RETRIEVE_ISSUE: HOOKDECK_RETRIEVE_ISSUE_OUTPUT
  TRIGGER_BOOKMARK: HOOKDECK_TRIGGER_BOOKMARK_OUTPUT
  UPDATE_CONNECTION: HOOKDECK_UPDATE_CONNECTION_OUTPUT
  UPDATE_DESTINATION: HOOKDECK_UPDATE_DESTINATION_OUTPUT
  UPDATE_SOURCE: HOOKDECK_UPDATE_SOURCE_OUTPUT
  UPDATE_TRANSFORMATION: HOOKDECK_UPDATE_TRANSFORMATION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HOOKDECK toolkit.
 */
export const HOOKDECK = {
  slug: "hookdeck",
  tools: {
    /**
     * Tool to create a bulk cancellation job for events. Use when you need to cancel multiple events matching filters.
     */
    BULK_CANCEL_EVENTS: "HOOKDECK_BULK_CANCEL_EVENTS",
    /**
     * Tool to initiate a bulk retry for a set of events. Use when you need to retry multiple failed events matching filters.
     */
    BULK_RETRY_EVENTS: "HOOKDECK_BULK_RETRY_EVENTS",
    /**
     * Tool to cancel all future delivery attempts for a specific event. Use when you need to stop retries of an event before manual intervention.
     */
    CANCEL_EVENT: "HOOKDECK_CANCEL_EVENT",
    /**
     * Tool to cancel all future scheduled retries for an event. Use when you need to mute automatic retry attempts after repeated failures.
     */
    CANCEL_SCHEDULED_RETRIES: "HOOKDECK_CANCEL_SCHEDULED_RETRIES",
    /**
     * Tool to create a new bookmark. Use when you want to bookmark a specific event for quick access.
     */
    CREATE_BOOKMARK: "HOOKDECK_CREATE_BOOKMARK",
    /**
     * Tool to create a connection between a source and a destination. Use after setting up or referencing source/destination.
     */
    CREATE_CONNECTION: "HOOKDECK_CREATE_CONNECTION",
    /**
     * Tool to create a new Hookdeck destination. Use after setting up sources when you need to route events to endpoints.
     */
    CREATE_DESTINATION: "HOOKDECK_CREATE_DESTINATION",
    /**
     * Tool to create a new Hookdeck source. Use after setting up your project when you need to receive and route incoming webhooks.
     */
    CREATE_SOURCE: "HOOKDECK_CREATE_SOURCE",
    /**
     * Tool to create a new Hookdeck transformation. Use when you need to execute custom JavaScript to modify event payloads before delivery.
     */
    CREATE_TRANSFORMATION: "HOOKDECK_CREATE_TRANSFORMATION",
    /**
     * Tool to delete a specific bookmark by its ID. Use when you need to permanently remove a bookmark after confirming it's no longer needed.
     */
    DELETE_BOOKMARK: "HOOKDECK_DELETE_BOOKMARK",
    /**
     * Tool to delete a specific connection by its ID. Use when you need to permanently remove a connection after confirming it's no longer needed.
     */
    DELETE_CONNECTION: "HOOKDECK_DELETE_CONNECTION",
    /**
     * Tool to delete a specific destination by its ID. Use when you need to permanently remove a destination after confirming it's no longer needed.
     */
    DELETE_DESTINATION: "HOOKDECK_DELETE_DESTINATION",
    /**
     * Tool to delete a specific source by its ID. Use when you need to permanently remove a source after confirming it's no longer needed.
     */
    DELETE_SOURCE: "HOOKDECK_DELETE_SOURCE",
    /**
     * Tool to delete a specific transformation by its ID. Use when you need to permanently remove a transformation after confirming it's no longer needed.
     */
    DELETE_TRANSFORMATION: "HOOKDECK_DELETE_TRANSFORMATION",
    /**
     * Tool to retrieve details of a specific Hookdeck attempt by its ID. Use after confirming the attempt ID.
     */
    GET_ATTEMPT: "HOOKDECK_GET_ATTEMPT",
    /**
     * Tool to list delivery attempts for your Hookdeck account. Use when you need to retrieve attempt logs, filter by event ID, and paginate through results.
     */
    GET_ATTEMPTS: "HOOKDECK_GET_ATTEMPTS",
    /**
     * Tool to retrieve details of a specific Hookdeck connection. Use after confirming the connection ID.
     */
    GET_CONNECTION: "HOOKDECK_GET_CONNECTION",
    /**
     * Tool to list Hookdeck connections. Use when you need to retrieve or filter your configured connections.
     */
    GET_CONNECTIONS: "HOOKDECK_GET_CONNECTIONS",
    /**
     * Tool to retrieve details of a specific Hookdeck destination. Use after confirming the destination ID.
     */
    GET_DESTINATION: "HOOKDECK_GET_DESTINATION",
    /**
     * Tool to list Hookdeck destinations. Use when you need to retrieve or filter your configured destinations.
     */
    GET_DESTINATIONS: "HOOKDECK_GET_DESTINATIONS",
    /**
     * Tool to list events for your Hookdeck account. Use when you need to retrieve delivery logs, filter by status or time, and paginate through results.
     */
    GET_EVENTS: "HOOKDECK_GET_EVENTS",
    /**
     * Tool to retrieve details of a specific Hookdeck request. Use after confirming the request ID.
     */
    GET_REQUEST: "HOOKDECK_GET_REQUEST",
    /**
     * Tool to list Hookdeck requests. Use when you need to retrieve requests with optional filters and pagination.
     */
    GET_REQUESTS: "HOOKDECK_GET_REQUESTS",
    /**
     * Tool to retrieve all sources associated with your Hookdeck account. Use when you need to list or filter hook sources.
     */
    GET_SOURCES: "HOOKDECK_GET_SOURCES",
    /**
     * Tool to retrieve details of a specific Hookdeck transformation. Use after confirming the transformation ID.
     */
    GET_TRANSFORMATION: "HOOKDECK_GET_TRANSFORMATION",
    /**
     * Tool to list Hookdeck transformations. Use when you need to retrieve or filter your Hookdeck transformations.
     */
    GET_TRANSFORMATIONS: "HOOKDECK_GET_TRANSFORMATIONS",
    /**
     * Tool to retrieve details of a specific Hookdeck source. Use after confirming the source ID.
     */
    HOOKDECK_GET_SOURCE: "HOOKDECK_HOOKDECK_GET_SOURCE",
    /**
     * Tool to send HTTP requests to a Hookdeck Source URL. Use when ingesting test payloads to generate events for testing HOOKDECK_GET_EVENT.
     */
    HOOKDECK_SEND_SOURCE_REQUEST: "HOOKDECK_HOOKDECK_SEND_SOURCE_REQUEST",
    /**
     * Tool to list bookmarks. Use when you need to retrieve your Hookdeck account's bookmarks with optional filters and pagination. Use after authenticating your session.
     */
    LIST_BOOKMARKS: "HOOKDECK_LIST_BOOKMARKS",
    /**
     * Tool to list all issues detected in your Hookdeck account. Use when you need to retrieve and filter issues by type, status, or time.
     */
    LIST_ISSUES: "HOOKDECK_LIST_ISSUES",
    /**
     * Tool to manually retry a specific Hookdeck event delivery. Use when an event has failed and you need a manual retry.
     */
    MANUALLY_RETRY_EVENT: "HOOKDECK_MANUALLY_RETRY_EVENT",
    /**
     * Tool to replay a specific Hookdeck event. Use when you need to manually retry a failed event delivery.
     */
    REPLAY_EVENT: "HOOKDECK_REPLAY_EVENT",
    /**
     * Tool to resolve a Hookdeck issue. Use after confirming the underlying issue has been addressed.
     */
    RESOLVE_ISSUE: "HOOKDECK_RESOLVE_ISSUE",
    /**
     * Tool to retrieve details of a specific Hookdeck issue. Use after confirming the issue ID.
     */
    RETRIEVE_ISSUE: "HOOKDECK_RETRIEVE_ISSUE",
    /**
     * Tool to trigger a stored request via its bookmark ID. Use when replaying the stored request associated with a bookmark.
     */
    TRIGGER_BOOKMARK: "HOOKDECK_TRIGGER_BOOKMARK",
    /**
     * Tool to update an existing connection. Use when you need to modify the name, description, or rules of a connection.
     */
    UPDATE_CONNECTION: "HOOKDECK_UPDATE_CONNECTION",
    /**
     * Tool to update an existing Hookdeck destination. Use when you need to modify a destination's settings after creation.
     */
    UPDATE_DESTINATION: "HOOKDECK_UPDATE_DESTINATION",
    /**
     * Tool to update a Hookdeck source. Use when you need to modify the name, type, description, or config of an existing source.
     */
    UPDATE_SOURCE: "HOOKDECK_UPDATE_SOURCE",
    /**
     * Tool to update an existing Hookdeck transformation. Use when you need to modify a transformation's code, name, or environment variables after creation.
     */
    UPDATE_TRANSFORMATION: "HOOKDECK_UPDATE_TRANSFORMATION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HOOKDECK".
 */
export type HOOKDECK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HOOKDECK".
 */
export type HOOKDECK_TRIGGER_EVENTS = {}
