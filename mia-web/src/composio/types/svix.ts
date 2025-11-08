// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SVIX's SVIX_APP_CREATE tool input.
 */
type SVIX_APP_CREATE_INPUT = {
  /**
   * Metadata
   * @description Optional metadata key-value pairs (string values) for the application.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Name
   * @description The name of the application to create.
   */
  name?: string;
  /**
   * Rate Limit
   * @description Optional rate limit (messages per second) for this application.
   * @default null
   */
  rateLimit: number | null;
  /**
   * Uid
   * @description Optional unique identifier for the application.
   * @default null
   */
  uid: string | null;
};

/**
 * Type of SVIX's SVIX_APP_CREATE tool output.
 */
type SVIX_APP_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the application was created.
       */
      createdAt: string;
      /**
       * Id
       * @description The unique identifier of the created application.
       */
      id: string;
      /**
       * Metadata
       * @description Metadata key-value pairs (string values) associated with the application.
       */
      metadata?: {
          [key: string]: string;
      };
      /**
       * Name
       * @description The name of the application.
       */
      name: string;
      /**
       * Rate Limit
       * @description Rate limit configured for the application.
       */
      rateLimit: number;
      /**
       * Uid
       * @description The unique identifier for the application.
       */
      uid: string;
      /**
       * Updated At
       * @description Timestamp when the application was last updated.
       */
      updatedAt: string;
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
 * Type of SVIX's SVIX_APP_DELETE tool input.
 */
type SVIX_APP_DELETE_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the application to delete
   */
  app_id?: string;
};

/**
 * Type of SVIX's SVIX_APP_DELETE tool output.
 */
type SVIX_APP_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message of the deletion
       * @default null
       */
      message: string | null;
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
 * Type of SVIX's SVIX_APP_GET tool input.
 */
type SVIX_APP_GET_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the Svix application to retrieve.
   */
  app_id?: string;
};

/**
 * Type of SVIX's SVIX_APP_GET tool output.
 */
type SVIX_APP_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the app was created.
       */
      created_at: string;
      /**
       * Id
       * @description The application's unique identifier.
       */
      id: string;
      /**
       * Name
       * @description The display name of the application.
       */
      name: string;
      /**
       * Uid
       * @description The external unique ID for the application.
       */
      uid: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the app was last updated.
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
 * Type of SVIX's SVIX_APP_LIST tool input.
 */
type SVIX_APP_LIST_INPUT = {
  /**
   * Iterator
   * @description Cursor for pagination. Use the iterator from a previous response to fetch the next set of results.
   * @default null
   */
  iterator: string | null;
  /**
   * Limit
   * @description Number of items to return. Must be between 1 and 100. Defaults to server default (50).
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Sorting order for the applications list.
   * @default desc
   * @enum {string}
   */
  order: "asc" | "desc";
};

/**
 * Type of SVIX's SVIX_APP_LIST tool output.
 */
type SVIX_APP_LIST_OUTPUT = {
  /**
   * Data
   * @description List of application objects.
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the application was created, in ISO 8601 format.
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the application.
       */
      id: string;
      /**
       * Name
       * @description Application name.
       */
      name: string;
      /**
       * Uid
       * @description User-defined unique identifier.
       */
      uid: string;
      /**
       * Updated At
       * @description Timestamp when the application was last updated, in ISO 8601 format.
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
   * Iterator
   * @description Cursor for the next page, null if there are no additional results.
   * @default null
   */
  iterator: string | null;
  /**
   * Prev Iterator
   * @description Cursor for the previous page, null if at the beginning of the list.
   * @default null
   */
  prev_iterator: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SVIX's SVIX_APP_UPDATE tool input.
 */
type SVIX_APP_UPDATE_INPUT = {
  /**
   * App Id
   * @description The application's unique ID or UID.
   */
  app_id?: string;
  /**
   * Metadata
   * @description Additional metadata for the application.
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description The new name for the application.
   * @default null
   */
  name: string | null;
  /**
   * Rate Limit
   * @description The new rate limit for the application (requests per minute).
   * @default null
   */
  rateLimit: number | null;
  /**
   * Uid
   * @description The new user-defined ID for the application.
   * @default null
   */
  uid: string | null;
};

/**
 * Type of SVIX's SVIX_APP_UPDATE tool output.
 */
type SVIX_APP_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The application's ID.
       */
      id: string;
      /**
       * Metadata
       * @description The application's metadata.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description The application's name.
       */
      name: string;
      /**
       * Rate Limit
       * @description The application's rate limit.
       */
      rateLimit: number;
      /**
       * Uid
       * @description The application's user-defined ID.
       */
      uid: string;
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
 * Type of SVIX's SVIX_ATTEMPT_GET tool input.
 */
type SVIX_ATTEMPT_GET_INPUT = {
  /**
   * App Id
   * @description The application's unique ID or UID.
   */
  app_id?: string;
  /**
   * Attempt Id
   * @description The attempt's unique ID or UID.
   */
  attempt_id?: string;
  /**
   * Msg Id
   * @description The message's unique ID or UID.
   */
  msg_id?: string;
};

/**
 * Type of SVIX's SVIX_ATTEMPT_GET tool output.
 */
type SVIX_ATTEMPT_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Id
       * @description The unique identifier for the application.
       */
      app_id: string;
      /**
       * Endpoint Id
       * @description The unique identifier for the endpoint.
       */
      endpoint_id: string;
      /**
       * Id
       * @description The unique identifier for the attempt.
       */
      id: string;
      /**
       * Msg Id
       * @description The unique identifier for the message.
       */
      msg_id: string;
      /**
       * Response Body
       * @description The body returned by the endpoint.
       */
      response_body: string;
      /**
       * Response Headers
       * @description The headers returned by the endpoint.
       */
      response_headers: {
          [key: string]: string | string[];
      };
      /**
       * Response Status Code
       * @description The HTTP status code returned by the endpoint.
       */
      response_status_code: number;
      /**
       * Status
       * @description The status of the attempt (e.g., 0=Pending, 1=Success, 2=Failed).
       */
      status: number;
      /**
       * Timestamp
       * @description ISO 8601 timestamp of when the attempt occurred.
       */
      timestamp: string;
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
 * Type of SVIX's SVIX_ATTEMPT_LIST tool input.
 */
type SVIX_ATTEMPT_LIST_INPUT = {
  /**
   * App Id
   * @description The application's unique ID
   */
  app_id?: string;
  /**
   * Event Types
   * @description Filter attempts by one or more event types
   * @default null
   */
  event_types: string[] | null;
  /**
   * Iterator
   * @description Pagination cursor for the next set of results
   * @default null
   */
  iterator: string | null;
  /**
   * Limit
   * @description Maximum number of attempts to return (1-100, default 50)
   * @default null
   */
  limit: number | null;
  /**
   * Msg Id
   * @description The message's unique ID
   */
  msg_id?: string;
};

/**
 * Type of SVIX's SVIX_ATTEMPT_LIST tool output.
 */
type SVIX_ATTEMPT_LIST_OUTPUT = {
  /**
   * Data
   * @description Array of attempt records as opaque dictionaries
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Iterator
   * @description Cursor for fetching the next page
   * @default null
   */
  iterator: string | null;
  /**
   * Prev Iterator
   * @description Cursor for fetching the previous page
   * @default null
   */
  prev_iterator: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of attempts available
   * @default null
   */
  total: number | null;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_CREATE tool input.
 */
type SVIX_ENDPOINT_CREATE_INPUT = {
  /**
   * App Id
   * @description ID of the Svix application to add the endpoint to
   */
  app_id?: string;
  /**
   * Channels
   * @description List of delivery channels for this endpoint
   * @default null
   */
  channels: string[] | null;
  /**
   * Description
   * @description Human-readable description for the endpoint
   * @default null
   */
  description: string | null;
  /**
   * Disabled
   * @description Whether to disable the endpoint immediately upon creation
   * @default false
   */
  disabled: boolean | null;
  /**
   * Filter Types
   * @description List of event types to forward to this endpoint
   * @default null
   */
  filter_types: string[] | null;
  /**
   * Rate Limit
   * @description Maximum deliveries per second (rate limit)
   * @default null
   */
  rate_limit: number | null;
  /**
   * Secret
   * @description Optional signing secret; auto-generated if omitted
   * @default null
   */
  secret: string | null;
  /**
   * Url
   * @description Webhook endpoint URL that will receive POST requests
   */
  url?: string;
  /**
   * Version
   * @description Endpoint version number (default 1)
   * @default null
   */
  version: number | null;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_CREATE tool output.
 */
type SVIX_ENDPOINT_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channels
       * @description Delivery channels for this endpoint
       */
      channels: string[];
      /**
       * Created At
       * @description Timestamp (ISO 8601) when the endpoint was created
       */
      created_at: string;
      /**
       * Description
       * @description Description provided for the endpoint
       * @default null
       */
      description: string | null;
      /**
       * Disabled
       * @description Whether the endpoint is currently disabled
       */
      disabled: boolean;
      /**
       * Filter Types
       * @description Event types configured for this endpoint
       */
      filter_types: string[];
      /**
       * Id
       * @description Unique identifier for the created endpoint
       */
      id: string;
      /**
       * Rate Limit
       * @description Configured rate limit (deliveries per second)
       */
      rate_limit: number;
      /**
       * Secret
       * @description Secret key used to sign webhook payloads
       */
      secret: string;
      /**
       * Updated At
       * @description Timestamp (ISO 8601) when the endpoint was last updated
       */
      updated_at: string;
      /**
       * Url
       * @description The webhook receiver URL
       */
      url: string;
      /**
       * Version
       * @description Version number of the endpoint
       */
      version: number;
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
 * Type of SVIX's SVIX_ENDPOINT_DELETE tool input.
 */
type SVIX_ENDPOINT_DELETE_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the application.
   */
  app_id?: string;
  /**
   * Endpoint Id
   * @description The unique identifier of the endpoint to delete.
   */
  endpoint_id?: string;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_DELETE tool output.
 */
type SVIX_ENDPOINT_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the endpoint was successfully deleted.
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
 * Type of SVIX's SVIX_ENDPOINT_GET tool input.
 */
type SVIX_ENDPOINT_GET_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the Svix application.
   */
  app_id?: string;
  /**
   * Endpoint Id
   * @description The unique identifier of the webhook endpoint.
   */
  endpoint_id?: string;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_GET tool output.
 */
type SVIX_ENDPOINT_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channels
       * @description Delivery channels for this endpoint
       */
      channels: string[];
      /**
       * Created At
       * @description ISO 8601 timestamp when the endpoint was created
       */
      created_at: string;
      /**
       * Description
       * @description Human-readable description for the endpoint
       * @default null
       */
      description: string | null;
      /**
       * Disabled
       * @description Whether the endpoint is currently disabled
       */
      disabled: boolean;
      /**
       * Filter Types
       * @description Event types configured for this endpoint
       */
      filter_types: string[];
      /**
       * Id
       * @description Unique identifier for the endpoint
       */
      id: string;
      /**
       * Rate Limit
       * @description Maximum deliveries per second (rate limit)
       * @default null
       */
      rate_limit: number | null;
      /**
       * Secret
       * @description Signing secret for the endpoint
       */
      secret: string;
      /**
       * Uid
       * @description External unique identifier for the endpoint
       */
      uid: string;
      /**
       * Url
       * @description Webhook endpoint URL that will receive POST requests
       */
      url: string;
      /**
       * Version
       * @description Version of the endpoint
       */
      version: number;
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
 * Type of SVIX's SVIX_ENDPOINT_LIST tool input.
 */
type SVIX_ENDPOINT_LIST_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the application.
   */
  app_id?: string;
  /**
   * Iterator
   * @description Cursor for pagination. Use the iterator from a previous response to fetch the next set of results.
   * @default null
   */
  iterator: string | null;
  /**
   * Limit
   * @description Maximum number of endpoints to return. Must be between 1 and 100. Defaults to server default (50).
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Sorting order for the endpoints list.
   * @default asc
   * @enum {string}
   */
  order: "asc" | "desc";
};

/**
 * Type of SVIX's SVIX_ENDPOINT_LIST tool output.
 */
type SVIX_ENDPOINT_LIST_OUTPUT = {
  /**
   * Data
   * @description List of endpoint objects.
   */
  data?: ({
      /**
       * Channels
       * @description Delivery channels for this endpoint.
       */
      channels: string[];
      /**
       * Created At
       * @description ISO 8601 timestamp when the endpoint was created.
       */
      created_at: string;
      /**
       * Description
       * @description Human-readable description for the endpoint.
       * @default null
       */
      description: string | null;
      /**
       * Disabled
       * @description Whether the endpoint is currently disabled.
       */
      disabled: boolean;
      /**
       * Filter Types
       * @description Event types configured for this endpoint.
       */
      filter_types: string[];
      /**
       * Id
       * @description Unique identifier for the endpoint.
       */
      id: string;
      /**
       * Rate Limit
       * @description Configured rate limit (deliveries per second).
       */
      rate_limit: number;
      /**
       * Secret
       * @description Secret key used to sign webhook payloads.
       * @default null
       */
      secret: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the endpoint was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description The webhook receiver URL.
       */
      url: string;
      /**
       * Version
       * @description Version number of the endpoint.
       */
      version: number;
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
   * Iterator
   * @description Cursor for the next page, null if no more results.
   * @default null
   */
  iterator: string | null;
  /**
   * Prev Iterator
   * @description Cursor for the previous page, null if at beginning.
   * @default null
   */
  prev_iterator: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_PATCH tool input.
 */
type SVIX_ENDPOINT_PATCH_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the Svix application.
   */
  app_id?: string;
  /**
   * Channels
   * @description List of delivery channels for this endpoint.
   * @default null
   */
  channels: string[] | null;
  /**
   * Description
   * @description A new description for the endpoint.
   * @default null
   */
  description: string | null;
  /**
   * Disabled
   * @description Whether the endpoint should be disabled.
   * @default null
   */
  disabled: boolean | null;
  /**
   * Endpoint Id
   * @description The unique identifier of the endpoint to patch.
   */
  endpoint_id?: string;
  /**
   * Filter Types
   * @description List of event types to forward to this endpoint.
   * @default null
   */
  filter_types: string[] | null;
  /**
   * Rate Limit
   * @description Rate limit for the endpoint (deliveries per second). Must be non-negative.
   * @default null
   */
  rate_limit: number | null;
  /**
   * Secret
   * @description Optional new signing secret; only include to rotate the secret.
   * @default null
   */
  secret: string | null;
  /**
   * Uid
   * @description A custom unique identifier for the endpoint.
   * @default null
   */
  uid: string | null;
  /**
   * Url
   * @description The URL to which the endpoint will send events.
   * @default null
   */
  url: string | null;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_PATCH tool output.
 */
type SVIX_ENDPOINT_PATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Channels
       * @description Delivery channels for this endpoint.
       */
      channels: string[];
      /**
       * Created At
       * @description ISO 8601 timestamp when the endpoint was created.
       */
      created_at: string;
      /**
       * Description
       * @description Human-readable description for the endpoint.
       * @default null
       */
      description: string | null;
      /**
       * Disabled
       * @description Whether the endpoint is currently disabled.
       */
      disabled: boolean;
      /**
       * Filter Types
       * @description Event types configured for this endpoint.
       */
      filter_types: string[];
      /**
       * Id
       * @description Unique identifier for the endpoint.
       */
      id: string;
      /**
       * Rate Limit
       * @description Maximum deliveries per second (rate limit).
       * @default null
       */
      rate_limit: number | null;
      /**
       * Secret
       * @description Signing secret for the endpoint.
       * @default null
       */
      secret: string | null;
      /**
       * Uid
       * @description External unique identifier for the endpoint.
       */
      uid: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the endpoint was last updated.
       */
      updated_at: string;
      /**
       * Url
       * @description Webhook endpoint URL that will receive POST requests.
       */
      url: string;
      /**
       * Version
       * @description Version number of the endpoint.
       */
      version: number;
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
 * Type of SVIX's SVIX_ENDPOINT_PATCH_HEADERS tool input.
 */
type SVIX_ENDPOINT_PATCH_HEADERS_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the application.
   */
  app_id?: string;
  /**
   * Endpoint Id
   * @description The unique identifier of the endpoint to update headers for.
   */
  endpoint_id?: string;
  /**
   * Headers
   * @description A mapping of header names to values. Use string value to set or modify a header, or null to remove a header.
   */
  headers?: {
      [key: string]: string | null;
  };
};

/**
 * Type of SVIX's SVIX_ENDPOINT_PATCH_HEADERS tool output.
 */
type SVIX_ENDPOINT_PATCH_HEADERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Headers
       * @description The updated headers for the endpoint.
       */
      headers: {
          [key: string]: string;
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
 * Type of SVIX's SVIX_ENDPOINT_RECOVER_FAILED_WEBHOOKS tool input.
 */
type SVIX_ENDPOINT_RECOVER_FAILED_WEBHOOKS_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the Svix application.
   */
  app_id?: string;
  /**
   * Endpoint Id
   * @description The unique identifier of the Svix endpoint whose failed webhooks should be recovered.
   */
  endpoint_id?: string;
  /**
   * Since
   * @description Recover failed webhooks since this timestamp (ISO 8601).
   */
  since?: string;
  /**
   * Until
   * @description Recover failed webhooks up to this timestamp (ISO 8601).
   * @default null
   */
  until: string | null;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_RECOVER_FAILED_WEBHOOKS tool output.
 */
type SVIX_ENDPOINT_RECOVER_FAILED_WEBHOOKS_OUTPUT = {
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
 * Type of SVIX's SVIX_ENDPOINT_REPLAY_MISSING tool input.
 */
type SVIX_ENDPOINT_REPLAY_MISSING_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the Svix application.
   */
  app_id?: string;
  /**
   * Endpoint Id
   * @description The unique identifier of the webhook endpoint.
   */
  endpoint_id?: string;
  /**
   * Since
   * @description Replay missing webhooks since this timestamp (ISO 8601).
   */
  since?: string;
  /**
   * Until
   * @description Replay missing webhooks up to this timestamp (ISO 8601).
   * @default null
   */
  until: string | null;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_REPLAY_MISSING tool output.
 */
type SVIX_ENDPOINT_REPLAY_MISSING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the replay process was successfully initiated.
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
 * Type of SVIX's SVIX_ENDPOINT_SECRET_GET tool input.
 */
type SVIX_ENDPOINT_SECRET_GET_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the Svix application.
   */
  app_id?: string;
  /**
   * Endpoint Id
   * @description The unique identifier of the webhook endpoint.
   */
  endpoint_id?: string;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_SECRET_GET tool output.
 */
type SVIX_ENDPOINT_SECRET_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Secret
       * @description The secret for the specified endpoint.
       */
      secret: string;
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
 * Type of SVIX's SVIX_ENDPOINT_SECRET_ROTATE tool input.
 */
type SVIX_ENDPOINT_SECRET_ROTATE_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the Svix application.
   */
  app_id?: string;
  /**
   * Endpoint Id
   * @description The unique identifier of the webhook endpoint.
   */
  endpoint_id?: string;
  /**
   * Key
   * @description Optional new secret to use for rotation. If omitted, a secret will be generated.
   * @default null
   */
  key: string | null;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_SECRET_ROTATE tool output.
 */
type SVIX_ENDPOINT_SECRET_ROTATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Key
       * @description The newly rotated secret for the specified endpoint.
       */
      key: string;
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
 * Type of SVIX's SVIX_ENDPOINT_SEND_EXAMPLE_MESSAGE tool input.
 */
type SVIX_ENDPOINT_SEND_EXAMPLE_MESSAGE_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the Svix application.
   */
  app_id?: string;
  /**
   * Endpoint Id
   * @description The unique identifier of the Svix webhook endpoint.
   */
  endpoint_id?: string;
  /**
   * Event Type
   * @description The event type to send as an example.
   */
  event_type?: string;
  /**
   * Payload Overrides
   * @description Optional overrides for the default example payload.
   * @default null
   */
  payload_overrides: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_SEND_EXAMPLE_MESSAGE tool output.
 */
type SVIX_ENDPOINT_SEND_EXAMPLE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data of the sent example message.
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
   * Id
   * @description ID of the example message that was sent.
   */
  id?: string;
  /**
   * Status
   * @description Status of sending the example message.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_STATS_GET tool input.
 */
type SVIX_ENDPOINT_STATS_GET_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the Svix application.
   */
  app_id?: string;
  /**
   * Endpoint Id
   * @description The unique identifier of the webhook endpoint.
   */
  endpoint_id?: string;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_STATS_GET tool output.
 */
type SVIX_ENDPOINT_STATS_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Msg Attempted
       * @description Number of attempted messages.
       */
      msg_attempted: number;
      /**
       * Msg Failed
       * @description Number of failed messages.
       */
      msg_failed: number;
      /**
       * Msg Received
       * @description Number of messages received by the endpoint.
       */
      msg_received: number;
      /**
       * Msg Sent
       * @description Number of sent messages.
       */
      msg_sent: number;
      /**
       * Msg Success
       * @description Number of successful messages.
       */
      msg_success: number;
      /**
       * Rate Limit
       * @description Rate limit for this endpoint.
       */
      rate_limit: number;
      /**
       * Rate Limit Left
       * @description Remaining rate limit for this endpoint.
       */
      rate_limit_left: number;
      /**
       * Rate Limit Reset
       * @description Unix epoch seconds when the rate limit resets.
       */
      rate_limit_reset: number;
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
 * Type of SVIX's SVIX_ENDPOINT_TRANSFORMATION_GET tool input.
 */
type SVIX_ENDPOINT_TRANSFORMATION_GET_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the Svix application.
   */
  app_id?: string;
  /**
   * Endpoint Id
   * @description The unique identifier of the webhook endpoint.
   */
  endpoint_id?: string;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_TRANSFORMATION_GET tool output.
 */
type SVIX_ENDPOINT_TRANSFORMATION_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Transformation
       * @description The transformation code for the specified endpoint, or null if not set.
       * @default null
       */
      transformation: string | null;
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
 * Type of SVIX's SVIX_ENDPOINT_TRANSFORMATION_SET tool input.
 */
type SVIX_ENDPOINT_TRANSFORMATION_SET_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the Svix application.
   */
  app_id?: string;
  /**
   * Code
   * @description JavaScript code defining how to transform the webhook's HTTP method, URL, or body payload.
   * @default null
   */
  code: string | null;
  /**
   * Enabled
   * @description Set to true to enable the transformation; false to disable it.
   * @default null
   */
  enabled: boolean | null;
  /**
   * Endpoint Id
   * @description The unique identifier of the webhook endpoint.
   */
  endpoint_id?: string;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_TRANSFORMATION_SET tool output.
 */
type SVIX_ENDPOINT_TRANSFORMATION_SET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description The JavaScript transformation code currently set on the endpoint.
       * @default null
       */
      code: string | null;
      /**
       * Enabled
       * @description Whether the transformation is currently enabled.
       * @default null
       */
      enabled: boolean | null;
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
 * Type of SVIX's SVIX_ENDPOINT_UPDATE tool input.
 */
type SVIX_ENDPOINT_UPDATE_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the application.
   */
  app_id?: string;
  /**
   * Description
   * @description A description of the endpoint.
   * @default null
   */
  description: string | null;
  /**
   * Endpoint Id
   * @description The unique identifier of the endpoint to update.
   */
  endpoint_id?: string;
  /**
   * Metadata
   * @description Additional metadata for the endpoint.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Rate Limit
   * @description The rate limit for the endpoint.
   * @default null
   */
  rateLimit: number | null;
  /**
   * Uid
   * @description A unique identifier for the endpoint.
   * @default null
   */
  uid: string | null;
  /**
   * Url
   * @description The URL to which the endpoint will send events.
   */
  url?: string;
  /**
   * Version
   * @description The version of the endpoint.
   * @default null
   */
  version: string | null;
};

/**
 * Type of SVIX's SVIX_ENDPOINT_UPDATE tool output.
 */
type SVIX_ENDPOINT_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the endpoint was created.
       */
      createdAt: string;
      /**
       * Description
       * @description A description of the endpoint.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The unique identifier for the endpoint.
       */
      id: string;
      /**
       * Metadata
       * @description Additional metadata for the endpoint.
       */
      metadata?: {
          [key: string]: string;
      };
      /**
       * Rate Limit
       * @description The rate limit for the endpoint.
       */
      rateLimit: number;
      /**
       * Uid
       * @description A unique identifier for the endpoint.
       */
      uid: string;
      /**
       * Updated At
       * @description Timestamp when the endpoint was last updated.
       */
      updatedAt: string;
      /**
       * Url
       * @description The URL to which the endpoint sends events.
       */
      url: string;
      /**
       * Version
       * @description The version of the endpoint.
       * @default null
       */
      version: string | null;
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
 * Type of SVIX's SVIX_ENDPOINT_UPDATE_HEADERS tool input.
 */
type SVIX_ENDPOINT_UPDATE_HEADERS_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the application.
   */
  app_id?: string;
  /**
   * Endpoint Id
   * @description The unique identifier of the endpoint to update headers for.
   */
  endpoint_id?: string;
  /**
   * Headers
   * @description Mapping of header names to their values. All existing headers will be replaced.
   */
  headers?: {
      [key: string]: string;
  };
};

/**
 * Type of SVIX's SVIX_ENDPOINT_UPDATE_HEADERS tool output.
 */
type SVIX_ENDPOINT_UPDATE_HEADERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Headers
       * @description The updated set of headers for the endpoint.
       */
      headers: {
          [key: string]: string;
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
 * Type of SVIX's SVIX_EVENT_TYPE_CREATE tool input.
 */
type SVIX_EVENT_TYPE_CREATE_INPUT = {
  /**
   * Archived
   * @description Whether this event type is archived (set false to unarchive)
   * @default null
   */
  archived: boolean | null;
  /**
   * Description
   * @description Human-readable description of the event type
   * @default null
   */
  description: string | null;
  /**
   * Feature Flag
   * @description Optional feature flag key to gate this event type
   * @default null
   */
  feature_flag: string | null;
  /**
   * Name
   * @description Unique identifier for the event type
   */
  name?: string;
  /**
   * Schemas
   * @description Optional mapping of content types to JSON schema definitions for this event type.
   * @default null
   */
  schemas: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of SVIX's SVIX_EVENT_TYPE_CREATE tool output.
 */
type SVIX_EVENT_TYPE_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Application Id
       * @description ID of the application this event type belongs to
       */
      application_id: string;
      /**
       * Archived
       * @description Archive status of the event type
       */
      archived: boolean;
      /**
       * Created At
       * @description ISO 8601 timestamp when the event type was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the event type
       * @default null
       */
      description: string | null;
      /**
       * Feature Flag
       * @description Feature flag key associated with this event type
       * @default null
       */
      feature_flag: string | null;
      /**
       * Id
       * @description Unique identifier of the event type
       */
      id: string;
      /**
       * Name
       * @description Event type identifier
       */
      name: string;
      /**
       * Schemas
       * @description Mapping of content types to JSON schema definitions
       * @default null
       */
      schemas: {
          [key: string]: unknown;
      } | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the event type was last updated
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
 * Type of SVIX's SVIX_EVENT_TYPE_DELETE tool input.
 */
type SVIX_EVENT_TYPE_DELETE_INPUT = {
  /**
   * Event Type Name
   * @description The unique name (ID) of the event type to delete or archive.
   */
  event_type_name?: string;
  /**
   * Expunge
   * @description If true, permanently delete the event type instead of archiving it.
   * @default false
   */
  expunge: boolean;
};

/**
 * Type of SVIX's SVIX_EVENT_TYPE_DELETE tool output.
 */
type SVIX_EVENT_TYPE_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the event type was successfully deleted or archived.
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
 * Type of SVIX's SVIX_EVENT_TYPE_GET tool input.
 */
type SVIX_EVENT_TYPE_GET_INPUT = {
  /**
   * Event Type Id
   * @description The unique identifier of the event type to retrieve.
   */
  event_type_id?: string;
};

/**
 * Type of SVIX's SVIX_EVENT_TYPE_GET tool output.
 */
type SVIX_EVENT_TYPE_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Description of the event type.
       * @default null
       */
      description: string | null;
      /**
       * Feature Flag
       * @description Optional feature flag name enabling this event type.
       * @default null
       */
      feature_flag: string | null;
      /**
       * Id
       * @description Unique identifier of the event type.
       */
      id: string;
      /**
       * Name
       * @description Name of the event type.
       */
      name: string;
      /**
       * Schemas
       * @description Map of versioned JSON schemas associated with this event type.
       */
      schemas: {
          [key: string]: {
              [key: string]: unknown;
          };
      };
      /**
       * Version
       * @description Current schema version number for this event type.
       */
      version: number;
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
 * Type of SVIX's SVIX_EVENT_TYPE_LIST tool input.
 */
type SVIX_EVENT_TYPE_LIST_INPUT = {
  /**
   * Iterator
   * @description Cursor for pagination; use the iterator from a previous response to fetch next results.
   * @default null
   */
  iterator: string | null;
  /**
   * Limit
   * @description Maximum number of event types to return (1-100). Defaults to server default.
   * @default null
   */
  limit: number | null;
  /**
   * With Content
   * @description If true, include the JSON schema for each event type.
   * @default false
   */
  with_content: boolean;
};

/**
 * Type of SVIX's SVIX_EVENT_TYPE_LIST tool output.
 */
type SVIX_EVENT_TYPE_LIST_OUTPUT = {
  /**
   * Data
   * @description List of event type objects.
   */
  data?: {
      /**
       * Description
       * @description Human-readable description of the event type.
       * @default null
       */
      description: string | null;
      /**
       * Feature Flag
       * @description Associated feature-flag name, if any.
       * @default null
       */
      feature_flag: string | null;
      /**
       * Name
       * @description Name of the event type.
       */
      name: string;
      /**
       * Schemas
       * @description Versioned JSON schemas for the event type; present if with_content=true.
       * @default null
       */
      schemas: {
          [key: string]: {
              [key: string]: unknown;
          };
      } | null;
  }[];
  /**
   * Done
   * @description True if this is the last page of results.
   */
  done?: boolean;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Iterator
   * @description Cursor for the next page; null if no further results.
   * @default null
   */
  iterator: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SVIX's SVIX_EVENT_TYPE_UPDATE tool input.
 */
type SVIX_EVENT_TYPE_UPDATE_INPUT = {
  /**
   * Archived
   * @description Whether the event type should be marked as archived
   * @default null
   */
  archived: boolean | null;
  /**
   * Description
   * @description Optional human-readable description of the event type
   * @default null
   */
  description: string | null;
  /**
   * Event Type Id
   * @description Unique identifier of the event type to update
   */
  event_type_id?: string;
  /**
   * Feature Flag
   * @description Optional feature-flag key to associate with the event type
   * @default null
   */
  feature_flag: string | null;
  /**
   * Name
   * @description New name for the event type
   */
  name?: string;
  /**
   * Schemas
   * @description Optional mapping of schema versions or examples to JSON Schema definitions. Each value must be a valid JSON Schema object.
   * @default null
   */
  schemas: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of SVIX's SVIX_EVENT_TYPE_UPDATE tool output.
 */
type SVIX_EVENT_TYPE_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @description Archive status of the event type
       */
      archived: boolean;
      /**
       * Created At
       * @description ISO 8601 timestamp of creation
       */
      created_at: string;
      /**
       * Description
       * @description Human-readable description of the event type
       * @default null
       */
      description: string | null;
      /**
       * Feature Flag
       * @description Associated feature-flag key
       * @default null
       */
      feature_flag: string | null;
      /**
       * Id
       * @description Unique identifier of the event type
       */
      id: string;
      /**
       * Name
       * @description Name of the event type
       */
      name: string;
      /**
       * Schemas
       * @description Mapping of schema versions to JSON Schema definitions
       * @default null
       */
      schemas: {
          [key: string]: unknown;
      } | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp of last update
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
 * Type of SVIX's SVIX_INTEGRATION_CREATE tool input.
 */
type SVIX_INTEGRATION_CREATE_INPUT = {
  /**
   * App Id
   * @description ID of the Svix application to add the integration to
   */
  app_id?: string;
  /**
   * Description
   * @description Optional human-readable description of the integration
   * @default null
   */
  description: string | null;
  /**
   * Endpoint
   * @description Optional webhook or service endpoint URL (e.g., Slack, Discord)
   * @default null
   */
  endpoint: string | null;
  /**
   * Key
   * @description Optional pre-defined integration key
   * @default null
   */
  key: string | null;
  /**
   * Name
   * @description The integration's name
   */
  name?: string;
};

/**
 * Type of SVIX's SVIX_INTEGRATION_CREATE tool output.
 */
type SVIX_INTEGRATION_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp (ISO 8601) when the integration was created
       */
      created_at: string;
      /**
       * Description
       * @description Description provided for the integration
       * @default null
       */
      description: string | null;
      /**
       * Endpoint
       * @description Integration endpoint URL
       * @default null
       */
      endpoint: string | null;
      /**
       * Id
       * @description Unique identifier for the created integration
       */
      id: string;
      /**
       * Key
       * @description Assigned integration key
       */
      key: string;
      /**
       * Name
       * @description The integration's name
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp (ISO 8601) when the integration was last updated
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
 * Type of SVIX's SVIX_INTEGRATION_DELETE tool input.
 */
type SVIX_INTEGRATION_DELETE_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the application.
   */
  app_id?: string;
  /**
   * Integration Id
   * @description The unique identifier of the integration to delete.
   */
  integration_id?: string;
};

/**
 * Type of SVIX's SVIX_INTEGRATION_DELETE tool output.
 */
type SVIX_INTEGRATION_DELETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the integration was successfully deleted.
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
 * Type of SVIX's SVIX_INTEGRATION_GET tool input.
 */
type SVIX_INTEGRATION_GET_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the Svix application.
   */
  app_id?: string;
  /**
   * Integration Id
   * @description The unique identifier of the integration to retrieve.
   */
  integration_id?: string;
};

/**
 * Type of SVIX's SVIX_INTEGRATION_GET tool output.
 */
type SVIX_INTEGRATION_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Id
       * @description Associated application identifier
       */
      app_id: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the integration was created
       */
      created_at: string;
      /**
       * Deleted
       * @description Indicates whether the integration is deleted
       */
      deleted: boolean;
      /**
       * Id
       * @description Unique identifier of the integration
       */
      id: string;
      /**
       * Name
       * @description Name of the integration
       */
      name: string;
      /**
       * Type
       * @description Type of the integration
       */
      type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the integration was last updated
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
 * Type of SVIX's SVIX_INTEGRATION_LIST tool input.
 */
type SVIX_INTEGRATION_LIST_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the Svix application.
   */
  app_id?: string;
  /**
   * Iterator
   * @description Cursor for pagination; use the iterator from a previous response to fetch next results.
   * @default null
   */
  iterator: string | null;
  /**
   * Limit
   * @description Maximum number of integrations to return (1-100). Defaults to server default.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of SVIX's SVIX_INTEGRATION_LIST tool output.
 */
type SVIX_INTEGRATION_LIST_OUTPUT = {
  /**
   * Data
   * @description List of integration objects.
   */
  data?: {
      /**
       * App Id
       * @description Associated application identifier
       */
      app_id: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the integration was created
       */
      created_at: string;
      /**
       * Deleted
       * @description Indicates whether the integration is deleted
       */
      deleted: boolean;
      /**
       * Id
       * @description Unique identifier of the integration
       */
      id: string;
      /**
       * Name
       * @description Name of the integration
       */
      name: string;
      /**
       * Type
       * @description Type of the integration
       */
      type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the integration was last updated
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
   * Iterator
   * @description Cursor for the next page; null if no further results.
   * @default null
   */
  iterator: string | null;
  /**
   * Prev Iterator
   * @description Cursor for the previous page; null if at the beginning.
   * @default null
   */
  prev_iterator: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SVIX's SVIX_INTEGRATION_UPDATE tool input.
 */
type SVIX_INTEGRATION_UPDATE_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the application.
   */
  app_id?: string;
  /**
   * Enabled
   * @description Whether to enable or disable the integration.
   * @default null
   */
  enabled: boolean | null;
  /**
   * Integration Id
   * @description The unique identifier of the integration to update.
   */
  integration_id?: string;
  /**
   * Key
   * @description New key associated with the integration.
   * @default null
   */
  key: string | null;
  /**
   * Metadata
   * @description Additional key-value metadata to attach to the integration.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Name
   * @description New name for the integration.
   * @default null
   */
  name: string | null;
};

/**
 * Type of SVIX's SVIX_INTEGRATION_UPDATE tool output.
 */
type SVIX_INTEGRATION_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp when the integration was created.
       */
      created_at: string;
      /**
       * Enabled
       * @description Whether the integration is enabled.
       */
      enabled: boolean;
      /**
       * Id
       * @description Unique identifier for the integration.
       */
      id: string;
      /**
       * Key
       * @description Key associated with the integration.
       */
      key: string;
      /**
       * Metadata
       * @description Metadata attached to the integration.
       */
      metadata: {
          [key: string]: string;
      };
      /**
       * Name
       * @description Name of the integration.
       */
      name: string;
      /**
       * Updated At
       * @description ISO timestamp when the integration was last updated.
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
 * Type of SVIX's SVIX_MESSAGE_CREATE tool input.
 */
type SVIX_MESSAGE_CREATE_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the Svix application.
   */
  app_id?: string;
  /**
   * Channels
   * @description List of channels to deliver this message to (default: ['*']).
   * @default null
   */
  channels: string[] | null;
  /**
   * Event Type
   * @description The event type to dispatch (e.g., 'order.created').
   */
  eventType?: string;
  /**
   * Idempotency Key
   * @description Idempotency key for ensuring unique message creation.
   * @default null
   */
  idempotencyKey: string | null;
  /**
   * Payload
   * @description The JSON payload to include in the message event.
   */
  payload?: {
      [key: string]: unknown;
  };
  /**
   * Payload Retention Period
   * @description Number of seconds to retain the payload (default: 31536000 seconds).
   * @default null
   */
  payloadRetentionPeriod: number | null;
};

/**
 * Type of SVIX's SVIX_MESSAGE_CREATE tool output.
 */
type SVIX_MESSAGE_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Id
       * @description The application ID associated with the message.
       */
      appId: string;
      /**
       * Channels
       * @description Channels to which the message was delivered.
       */
      channels: string[];
      /**
       * Created At
       * @description ISO 8601 timestamp when the message was created.
       */
      createdAt: string;
      /**
       * Event Type
       * @description The event type of the message.
       */
      eventType: string;
      /**
       * Id
       * @description Unique identifier of the created message.
       */
      id: string;
      /**
       * Not Before
       * @description Scheduled time for message delivery, if set.
       * @default null
       */
      notBefore: string | null;
      /**
       * Payload
       * @description The JSON payload of the message.
       */
      payload: {
          [key: string]: unknown;
      };
      /**
       * Payload Retention Period
       * @description Number of seconds payload will be retained.
       */
      payloadRetentionPeriod: number;
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
 * Type of SVIX's SVIX_MESSAGE_GET tool input.
 */
type SVIX_MESSAGE_GET_INPUT = {
  /**
   * App Id
   * @description The unique identifier of the Svix application.
   */
  app_id?: string;
  /**
   * Msg Id
   * @description The unique identifier of the Svix message.
   */
  msg_id?: string;
};

/**
 * Type of SVIX's SVIX_MESSAGE_GET tool output.
 */
type SVIX_MESSAGE_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Id
       * @description Application unique identifier.
       */
      app_id: string;
      /**
       * Created At
       * @description Message creation time in ISO 8601 format.
       */
      created_at: string;
      /**
       * Event Type
       * @description Event type of the message.
       */
      event_type: string;
      /**
       * Id
       * @description Unique identifier for the message.
       */
      id: string;
      /**
       * Last Attempted At
       * @description Timestamp of last delivery attempt.
       * @default null
       */
      last_attempted_at: string | null;
      /**
       * Metadata
       * @description Custom metadata associated with the message.
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Next Attempt At
       * @description Timestamp of next scheduled attempt.
       * @default null
       */
      next_attempt_at: string | null;
      /**
       * Not Before
       * @description Scheduled delivery time (nullable).
       * @default null
       */
      not_before: string | null;
      /**
       * Num Attempts
       * @description Number of delivery attempts.
       */
      num_attempts: number;
      /**
       * Payload
       * @description Raw event payload.
       */
      payload: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Delivery status of the message.
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
 * Type of SVIX's SVIX_MESSAGE_LIST tool input.
 */
type SVIX_MESSAGE_LIST_INPUT = {
  /**
   * After
   * @description Fetch messages created after this timestamp (ISO 8601 format).
   * @default null
   */
  after: string | null;
  /**
   * App Id
   * @description The application's unique ID
   */
  app_id?: string;
  /**
   * Before
   * @description Fetch messages created before this timestamp (ISO 8601 format).
   * @default null
   */
  before: string | null;
  /**
   * Channel
   * @description Filter messages by channel.
   * @default null
   */
  channel: string | null;
  /**
   * Event Types
   * @description Filter messages by one or more event types.
   * @default null
   */
  event_types: string[] | null;
  /**
   * Iterator
   * @description Cursor for pagination. Use the iterator from a previous response to fetch the next page.
   * @default null
   */
  iterator: string | null;
  /**
   * Limit
   * @description Maximum number of messages to return (1-100). Defaults to server default.
   * @default null
   */
  limit: number | null;
  /**
   * Status
   * @description Filter messages by status code.
   * @default null
   */
  status: number | null;
  /**
   * Tag
   * @description Filter messages by tag.
   * @default null
   */
  tag: string | null;
  /**
   * With Content
   * @description Include message payloads in the response.
   * @default false
   */
  with_content: boolean | null;
};

/**
 * Type of SVIX's SVIX_MESSAGE_LIST tool output.
 */
type SVIX_MESSAGE_LIST_OUTPUT = {
  /**
   * Data
   * @description List of message objects.
   */
  data?: {
      /**
       * Channels
       * @description Delivery channels for the message.
       */
      channels: string[];
      /**
       * Event Id
       * @description Unique identifier for the associated event.
       */
      eventId: string;
      /**
       * Event Type
       * @description The event type of the message.
       */
      eventType: string;
      /**
       * Id
       * @description Unique identifier for the message.
       */
      id: string;
      /**
       * Payload
       * @description The message payload (present if with_content=true).
       * @default null
       */
      payload: {
          [key: string]: unknown;
      } | null;
      /**
       * Tags
       * @description Tags associated with the message.
       */
      tags: string[];
      /**
       * Timestamp
       * @description Timestamp when the message was created (ISO 8601 format).
       */
      timestamp: string;
  }[];
  /**
   * Done
   * @description True if this is the last page of results.
   */
  done?: boolean;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Iterator
   * @description Cursor for the next page; null if no more results.
   * @default null
   */
  iterator: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SVIX's SVIX_SOURCE_CREATE tool input.
 */
type SVIX_SOURCE_CREATE_INPUT = {
  /**
   * Description
   * @description Optional human-readable description for the source.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description The name of the source.
   */
  name?: string;
};

/**
 * Type of SVIX's SVIX_SOURCE_CREATE tool output.
 */
type SVIX_SOURCE_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the source was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description provided for the source.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the created source.
       */
      id: string;
      /**
       * Name
       * @description Name of the source.
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the source was last updated.
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
 * Type map of all available tool input types for toolkit "SVIX".
 */
export type SVIX_TOOL_INPUTS = {
  APP_CREATE: SVIX_APP_CREATE_INPUT
  APP_DELETE: SVIX_APP_DELETE_INPUT
  APP_GET: SVIX_APP_GET_INPUT
  APP_LIST: SVIX_APP_LIST_INPUT
  APP_UPDATE: SVIX_APP_UPDATE_INPUT
  ATTEMPT_GET: SVIX_ATTEMPT_GET_INPUT
  ATTEMPT_LIST: SVIX_ATTEMPT_LIST_INPUT
  ENDPOINT_CREATE: SVIX_ENDPOINT_CREATE_INPUT
  ENDPOINT_DELETE: SVIX_ENDPOINT_DELETE_INPUT
  ENDPOINT_GET: SVIX_ENDPOINT_GET_INPUT
  ENDPOINT_LIST: SVIX_ENDPOINT_LIST_INPUT
  ENDPOINT_PATCH: SVIX_ENDPOINT_PATCH_INPUT
  ENDPOINT_PATCH_HEADERS: SVIX_ENDPOINT_PATCH_HEADERS_INPUT
  ENDPOINT_RECOVER_FAILED_WEBHOOKS: SVIX_ENDPOINT_RECOVER_FAILED_WEBHOOKS_INPUT
  ENDPOINT_REPLAY_MISSING: SVIX_ENDPOINT_REPLAY_MISSING_INPUT
  ENDPOINT_SECRET_GET: SVIX_ENDPOINT_SECRET_GET_INPUT
  ENDPOINT_SECRET_ROTATE: SVIX_ENDPOINT_SECRET_ROTATE_INPUT
  ENDPOINT_SEND_EXAMPLE_MESSAGE: SVIX_ENDPOINT_SEND_EXAMPLE_MESSAGE_INPUT
  ENDPOINT_STATS_GET: SVIX_ENDPOINT_STATS_GET_INPUT
  ENDPOINT_TRANSFORMATION_GET: SVIX_ENDPOINT_TRANSFORMATION_GET_INPUT
  ENDPOINT_TRANSFORMATION_SET: SVIX_ENDPOINT_TRANSFORMATION_SET_INPUT
  ENDPOINT_UPDATE: SVIX_ENDPOINT_UPDATE_INPUT
  ENDPOINT_UPDATE_HEADERS: SVIX_ENDPOINT_UPDATE_HEADERS_INPUT
  EVENT_TYPE_CREATE: SVIX_EVENT_TYPE_CREATE_INPUT
  EVENT_TYPE_DELETE: SVIX_EVENT_TYPE_DELETE_INPUT
  EVENT_TYPE_GET: SVIX_EVENT_TYPE_GET_INPUT
  EVENT_TYPE_LIST: SVIX_EVENT_TYPE_LIST_INPUT
  EVENT_TYPE_UPDATE: SVIX_EVENT_TYPE_UPDATE_INPUT
  INTEGRATION_CREATE: SVIX_INTEGRATION_CREATE_INPUT
  INTEGRATION_DELETE: SVIX_INTEGRATION_DELETE_INPUT
  INTEGRATION_GET: SVIX_INTEGRATION_GET_INPUT
  INTEGRATION_LIST: SVIX_INTEGRATION_LIST_INPUT
  INTEGRATION_UPDATE: SVIX_INTEGRATION_UPDATE_INPUT
  MESSAGE_CREATE: SVIX_MESSAGE_CREATE_INPUT
  MESSAGE_GET: SVIX_MESSAGE_GET_INPUT
  MESSAGE_LIST: SVIX_MESSAGE_LIST_INPUT
  SOURCE_CREATE: SVIX_SOURCE_CREATE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SVIX".
 */
export type SVIX_TOOL_OUTPUTS = {
  APP_CREATE: SVIX_APP_CREATE_OUTPUT
  APP_DELETE: SVIX_APP_DELETE_OUTPUT
  APP_GET: SVIX_APP_GET_OUTPUT
  APP_LIST: SVIX_APP_LIST_OUTPUT
  APP_UPDATE: SVIX_APP_UPDATE_OUTPUT
  ATTEMPT_GET: SVIX_ATTEMPT_GET_OUTPUT
  ATTEMPT_LIST: SVIX_ATTEMPT_LIST_OUTPUT
  ENDPOINT_CREATE: SVIX_ENDPOINT_CREATE_OUTPUT
  ENDPOINT_DELETE: SVIX_ENDPOINT_DELETE_OUTPUT
  ENDPOINT_GET: SVIX_ENDPOINT_GET_OUTPUT
  ENDPOINT_LIST: SVIX_ENDPOINT_LIST_OUTPUT
  ENDPOINT_PATCH: SVIX_ENDPOINT_PATCH_OUTPUT
  ENDPOINT_PATCH_HEADERS: SVIX_ENDPOINT_PATCH_HEADERS_OUTPUT
  ENDPOINT_RECOVER_FAILED_WEBHOOKS: SVIX_ENDPOINT_RECOVER_FAILED_WEBHOOKS_OUTPUT
  ENDPOINT_REPLAY_MISSING: SVIX_ENDPOINT_REPLAY_MISSING_OUTPUT
  ENDPOINT_SECRET_GET: SVIX_ENDPOINT_SECRET_GET_OUTPUT
  ENDPOINT_SECRET_ROTATE: SVIX_ENDPOINT_SECRET_ROTATE_OUTPUT
  ENDPOINT_SEND_EXAMPLE_MESSAGE: SVIX_ENDPOINT_SEND_EXAMPLE_MESSAGE_OUTPUT
  ENDPOINT_STATS_GET: SVIX_ENDPOINT_STATS_GET_OUTPUT
  ENDPOINT_TRANSFORMATION_GET: SVIX_ENDPOINT_TRANSFORMATION_GET_OUTPUT
  ENDPOINT_TRANSFORMATION_SET: SVIX_ENDPOINT_TRANSFORMATION_SET_OUTPUT
  ENDPOINT_UPDATE: SVIX_ENDPOINT_UPDATE_OUTPUT
  ENDPOINT_UPDATE_HEADERS: SVIX_ENDPOINT_UPDATE_HEADERS_OUTPUT
  EVENT_TYPE_CREATE: SVIX_EVENT_TYPE_CREATE_OUTPUT
  EVENT_TYPE_DELETE: SVIX_EVENT_TYPE_DELETE_OUTPUT
  EVENT_TYPE_GET: SVIX_EVENT_TYPE_GET_OUTPUT
  EVENT_TYPE_LIST: SVIX_EVENT_TYPE_LIST_OUTPUT
  EVENT_TYPE_UPDATE: SVIX_EVENT_TYPE_UPDATE_OUTPUT
  INTEGRATION_CREATE: SVIX_INTEGRATION_CREATE_OUTPUT
  INTEGRATION_DELETE: SVIX_INTEGRATION_DELETE_OUTPUT
  INTEGRATION_GET: SVIX_INTEGRATION_GET_OUTPUT
  INTEGRATION_LIST: SVIX_INTEGRATION_LIST_OUTPUT
  INTEGRATION_UPDATE: SVIX_INTEGRATION_UPDATE_OUTPUT
  MESSAGE_CREATE: SVIX_MESSAGE_CREATE_OUTPUT
  MESSAGE_GET: SVIX_MESSAGE_GET_OUTPUT
  MESSAGE_LIST: SVIX_MESSAGE_LIST_OUTPUT
  SOURCE_CREATE: SVIX_SOURCE_CREATE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SVIX toolkit.
 */
export const SVIX = {
  slug: "svix",
  tools: {
    /**
     * Tool to create a new svix application. use when you need to register an application with specific settings.
     */
    APP_CREATE: "SVIX_APP_CREATE",
    /**
     * Tool to delete an application by its id. use when you need to permanently remove a svix application after confirming its id.
     */
    APP_DELETE: "SVIX_APP_DELETE",
    /**
     * Tool to retrieve details of a specific svix application by its id. use when you need application metadata after authenticating with svix.
     */
    APP_GET: "SVIX_APP_GET",
    /**
     * Tool to list all applications. use when you need to retrieve or paginate through your svix applications.
     */
    APP_LIST: "SVIX_APP_LIST",
    /**
     * Tool to update an existing svix application by id. use when you need to modify properties like name, rate limit, uid, or metadata. call after confirming the correct app id.
     */
    APP_UPDATE: "SVIX_APP_UPDATE",
    /**
     * Tool to retrieve details of a specific message attempt. use after confirming app id, msg id, and attempt id.
     */
    ATTEMPT_GET: "SVIX_ATTEMPT_GET",
    /**
     * Tool to list all delivery attempts for a specific message. use after confirming message id to debug attempts.
     */
    ATTEMPT_LIST: "SVIX_ATTEMPT_LIST",
    /**
     * Tool to create a new svix webhook endpoint. use after obtaining the app id to register your webhook receiver url.
     */
    ENDPOINT_CREATE: "SVIX_ENDPOINT_CREATE",
    /**
     * Tool to delete an endpoint. use when you need to remove a specific endpoint after confirming its application and endpoint ids.
     */
    ENDPOINT_DELETE: "SVIX_ENDPOINT_DELETE",
    /**
     * Tool to retrieve details of a specific endpoint. use after confirming app id and endpoint id.
     */
    ENDPOINT_GET: "SVIX_ENDPOINT_GET",
    /**
     * Tool to list all endpoints for a specific application. use after obtaining the application id to retrieve its endpoints.
     */
    ENDPOINT_LIST: "SVIX_ENDPOINT_LIST",
    /**
     * Tool to partially update an endpoint’s configuration. use when you need to adjust endpoint settings without full replacement.
     */
    ENDPOINT_PATCH: "SVIX_ENDPOINT_PATCH",
    /**
     * Tool to partially update headers for a specific endpoint. use when you need to add, modify, or remove custom headers after endpoint creation.
     */
    ENDPOINT_PATCH_HEADERS: "SVIX_ENDPOINT_PATCH_HEADERS",
    /**
     * Tool to recover messages that failed to send to an endpoint. use when you need to retry webhook delivery for failed events after identifying delivery failures.
     */
    ENDPOINT_RECOVER_FAILED_WEBHOOKS: "SVIX_ENDPOINT_RECOVER_FAILED_WEBHOOKS",
    /**
     * Tool to replay missing webhooks for a specific endpoint. use when some webhooks failed or were lost and need to be resent.
     */
    ENDPOINT_REPLAY_MISSING: "SVIX_ENDPOINT_REPLAY_MISSING",
    /**
     * Tool to retrieve the secret for a specific endpoint. use after confirming app id and endpoint id.
     */
    ENDPOINT_SECRET_GET: "SVIX_ENDPOINT_SECRET_GET",
    /**
     * Tool to rotate the signing secret key for an endpoint. use when you need to invalidate the current secret and generate or supply a new one. call after confirming app id and endpoint id.
     */
    ENDPOINT_SECRET_ROTATE: "SVIX_ENDPOINT_SECRET_ROTATE",
    /**
     * Tool to send a test message for a specific event type to an endpoint. use after setting up an endpoint to verify its configuration.
     */
    ENDPOINT_SEND_EXAMPLE_MESSAGE: "SVIX_ENDPOINT_SEND_EXAMPLE_MESSAGE",
    /**
     * Tool to retrieve basic statistics for a specific endpoint. use after confirming app id and endpoint id.
     */
    ENDPOINT_STATS_GET: "SVIX_ENDPOINT_STATS_GET",
    /**
     * Tool to retrieve transformation settings for a specific endpoint. use after confirming app id and endpoint id.
     */
    ENDPOINT_TRANSFORMATION_GET: "SVIX_ENDPOINT_TRANSFORMATION_GET",
    /**
     * Tool to set or update transformation settings for an endpoint. use when you need to configure or toggle an endpoint's transformation code after creation.
     */
    ENDPOINT_TRANSFORMATION_SET: "SVIX_ENDPOINT_TRANSFORMATION_SET",
    /**
     * Tool to update an existing endpoint. use when you need to modify endpoint settings after creation.
     */
    ENDPOINT_UPDATE: "SVIX_ENDPOINT_UPDATE",
    /**
     * Tool to completely replace headers for a specific endpoint. use when you need to set a full new header mapping.
     */
    ENDPOINT_UPDATE_HEADERS: "SVIX_ENDPOINT_UPDATE_HEADERS",
    /**
     * Tool to create a new event type or unarchive an existing one. use after confirming application context to register or revive an event type.
     */
    EVENT_TYPE_CREATE: "SVIX_EVENT_TYPE_CREATE",
    /**
     * Tool to delete an event type. use when you need to archive or permanently expunge a specific event type after confirming its name.
     */
    EVENT_TYPE_DELETE: "SVIX_EVENT_TYPE_DELETE",
    /**
     * Tool to retrieve details of a specific event type by its id. use when you need to inspect an existing event type after confirming its id.
     */
    EVENT_TYPE_GET: "SVIX_EVENT_TYPE_GET",
    /**
     * Tool to retrieve a list of all event types. use when you need to inspect available event types, optionally including their json schemas. use after authenticating the client.
     */
    EVENT_TYPE_LIST: "SVIX_EVENT_TYPE_LIST",
    /**
     * Tool to update an existing event type by id. use after confirming event type id to modify name, description, schemas, feature flag, or archive status.
     */
    EVENT_TYPE_UPDATE: "SVIX_EVENT_TYPE_UPDATE",
    /**
     * Tool to create a new integration for a specific application. use after confirming the application id.
     */
    INTEGRATION_CREATE: "SVIX_INTEGRATION_CREATE",
    /**
     * Tool to delete an integration. use when you need to remove a specific integration after confirming its application and integration ids.
     */
    INTEGRATION_DELETE: "SVIX_INTEGRATION_DELETE",
    /**
     * Tool to retrieve details of a specific integration. use after confirming app id and integration id.
     */
    INTEGRATION_GET: "SVIX_INTEGRATION_GET",
    /**
     * Tool to list all integrations for a specific application. use after confirming the application id, supporting pagination via limit and iterator. use when you need to enumerate integrations.
     */
    INTEGRATION_LIST: "SVIX_INTEGRATION_LIST",
    /**
     * Tool to update an existing integration by id. use when you need to modify integration settings like name, key, enabled status, or metadata after confirming the integration id.
     */
    INTEGRATION_UPDATE: "SVIX_INTEGRATION_UPDATE",
    /**
     * Tool to create a new message for a specific application in svix. use after confirming app id and event details.
     */
    MESSAGE_CREATE: "SVIX_MESSAGE_CREATE",
    /**
     * Tool to retrieve details of a specific message by its id. use when you need message metadata and status after dispatch.
     */
    MESSAGE_GET: "SVIX_MESSAGE_GET",
    /**
     * Tool to list all messages for a specific application. use when you need to fetch or paginate messages after obtaining the application id.
     */
    MESSAGE_LIST: "SVIX_MESSAGE_LIST",
    /**
     * Tool to create a source for message ingestion. use to register a new source before creating ingest endpoints.
     */
    SOURCE_CREATE: "SVIX_SOURCE_CREATE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SVIX".
 */
export type SVIX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SVIX".
 */
export type SVIX_TRIGGER_EVENTS = {}
