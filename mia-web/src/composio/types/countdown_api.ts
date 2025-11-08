// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_CLEAR_ALL_REQUESTS tool input.
 */
type COUNTDOWN_API_CLEAR_ALL_REQUESTS_INPUT = {
  /**
   * Collection Id
   * @description ID of the collection whose requests should be cleared
   */
  collection_id?: string;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_CLEAR_ALL_REQUESTS tool output.
 */
type COUNTDOWN_API_CLEAR_ALL_REQUESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Info
       * @description Details about the clear requests request
       */
      request_info: {
          /**
           * Message
           * @description Server-provided message confirming the clear operation
           */
          message: string;
          /**
           * Success
           * @description Indicates whether the clear operation succeeded
           */
          success: boolean;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_COLLECTIONS_CREATE_COLLECTION tool input.
 */
type COUNTDOWN_API_COLLECTIONS_CREATE_COLLECTION_INPUT = {
  /**
   * Destination Ids
   * @description Destination IDs to upload results to
   * @default null
   */
  destination_ids: string[] | null;
  /**
   * Enabled
   * @description Enable or disable scheduled runs
   * @default null
   */
  enabled: boolean | null;
  /**
   * Name
   * @description Collection name
   */
  name?: string;
  /**
   * Notification As Csv
   * @description Output/upload results as CSV
   * @default null
   */
  notification_as_csv: boolean | null;
  /**
   * Notification As Json
   * @description Output/upload results as JSON
   * @default null
   */
  notification_as_json: boolean | null;
  /**
   * Notification As Jsonlines
   * @description Output/upload results as JSON Lines
   * @default null
   */
  notification_as_jsonlines: boolean | null;
  /**
   * Notification Csv Fields
   * @description Comma-separated field list when CSV enabled
   * @default null
   */
  notification_csv_fields: string | null;
  /**
   * Notification Email
   * @description Email to send notifications to
   * @default null
   */
  notification_email: string | null;
  /**
   * Notification Webhook
   * Format: uri
   * @description Webhook URL to POST when results are available
   * @default null
   */
  notification_webhook: string | null;
  /**
   * Priority
   * @description Collection priority
   * @default null
   * @enum {string|null}
   */
  priority: "highest" | "high" | "normal" | "low" | "lowest" | null;
  /**
   * Requests Type
   * @description Lock collection to a specific request type; cannot be changed after creation
   * @default null
   * @enum {string|null}
   */
  requests_type: "mixed" | "search" | "product" | "reviews" | "seller profile" | "seller feedback" | "autocomplete" | "deals" | null;
  /**
   * Schedule Days Of Month
   * @description Days of month (1-31) for monthly schedules
   * @default null
   */
  schedule_days_of_month: number[] | null;
  /**
   * Schedule Days Of Week
   * @description Days of week (0=Sun ... 6=Sat) for weekly schedules
   * @default null
   */
  schedule_days_of_week: number[] | null;
  /**
   * Schedule Hours
   * @description Hours (0-23) to run
   * @default null
   */
  schedule_hours: number[] | null;
  /**
   * Schedule Minutes
   * @description Minute interval when schedule_type='minutes'
   * @default null
   * @enum {string|null}
   */
  schedule_minutes: "every minute" | "5" | "10" | "15" | "20" | "25" | "30" | "hour" | null;
  /**
   * Schedule Type
   * @description Run schedule type
   * @default null
   * @enum {string|null}
   */
  schedule_type: "monthly" | "weekly" | "daily" | "minutes" | "manual" | null;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_COLLECTIONS_CREATE_COLLECTION tool output.
 */
type COUNTDOWN_API_COLLECTIONS_CREATE_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collection
       * @description Created collection object
       */
      collection: {
          /**
           * Created At
           * @description Creation timestamp
           */
          created_at: string;
          /**
           * Destination Ids
           * @description Destination IDs attached
           * @default null
           */
          destination_ids: string[] | null;
          /**
           * Enabled
           * @description Whether enabled
           */
          enabled: boolean;
          /**
           * Id
           * @description Collection ID
           */
          id: string;
          /**
           * Name
           * @description Collection name
           */
          name: string;
          /**
           * Next Result Set Id
           * @description Next result set identifier
           * @default null
           */
          next_result_set_id: number | null;
          /**
           * Notification As Csv
           * @description CSV output setting
           * @default null
           */
          notification_as_csv: boolean | null;
          /**
           * Notification As Json
           * @description JSON output setting
           * @default null
           */
          notification_as_json: boolean | null;
          /**
           * Notification Email
           * @description Notification email
           * @default null
           */
          notification_email: string | null;
          /**
           * Priority
           * @description Priority value
           * @default null
           */
          priority: string | null;
          /**
           * Request Page Count
           * @description Total request pages
           * @default null
           */
          request_page_count: number | null;
          /**
           * Request Total Count
           * @description Total requests in collection
           * @default null
           */
          request_total_count: number | null;
          /**
           * Request Type
           * @description Locked request type
           * @default null
           */
          request_type: string | null;
          /**
           * Request Type Locked
           * @description Whether collection is type-locked
           * @default null
           */
          request_type_locked: boolean | null;
          /**
           * Results Count
           * @description Number of result sets produced
           * @default null
           */
          results_count: number | null;
          /**
           * Schedule Hours
           * @description Scheduled hours
           * @default null
           */
          schedule_hours: number[] | null;
          /**
           * Schedule Type
           * @description Schedule type
           * @default null
           */
          schedule_type: string | null;
          /**
           * Status
           * @description Current status (e.g., idle)
           * @default null
           */
          status: string | null;
      };
      /**
       * Success
       * @description Whether the request succeeded
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_COLLECTIONS_GET_COLLECTION tool input.
 */
type COUNTDOWN_API_COLLECTIONS_GET_COLLECTION_INPUT = {
  /**
   * Collection Id
   * @description ID of the collection to retrieve
   */
  collection_id?: string;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_COLLECTIONS_GET_COLLECTION tool output.
 */
type COUNTDOWN_API_COLLECTIONS_GET_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collection
       * @description Collection details
       */
      collection: {
          /**
           * Created At
           * @description ISO UTC timestamp of creation
           */
          created_at: string;
          /**
           * Credits Required
           * @description Credits required to run the collection
           */
          credits_required: number;
          /**
           * Destination Ids
           * @description Destination IDs
           */
          destination_ids: string[];
          /**
           * Enabled
           * @description Whether the collection is enabled
           */
          enabled: boolean;
          /**
           * Id
           * @description Collection ID
           */
          id: string;
          /**
           * Name
           * @description Collection name
           */
          name: string;
          /**
           * Next Result Set Id
           * @description Next result set ID, if any
           * @default null
           */
          next_result_set_id: number | null;
          /**
           * Notification As Csv
           * @description Notify as CSV
           */
          notification_as_csv: boolean;
          /**
           * Notification As Json
           * @description Notify as JSON
           */
          notification_as_json: boolean;
          /**
           * Notification As Jsonlines
           * @description Notify as JSON Lines
           */
          notification_as_jsonlines: boolean;
          /**
           * Notification Email
           * @description Notification email address
           * @default null
           */
          notification_email: string | null;
          /**
           * Priority
           * @description Priority label
           */
          priority: string;
          /**
           * Request Page Count
           * @description Number of pages of requests
           */
          request_page_count: number;
          /**
           * Request Total Count
           * @description Total requests in the collection
           */
          request_total_count: number;
          /**
           * Results Count
           * @description Total result sets
           */
          results_count: number;
          /**
           * Schedule Hours
           * @description Hours of day when scheduled
           */
          schedule_hours: number[];
          /**
           * Schedule Type
           * @description Schedule frequency, one of manual/daily/weekly/monthly
           */
          schedule_type: string;
          /**
           * Status
           * @description Current status, one of idle/queued/running
           */
          status: string;
      };
      /**
       * Request Info
       * @description Overall request status
       */
      request_info: {
          /**
           * Success
           * @description True if the request succeeded
           */
          success: boolean;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_COLLECTIONS_LIST_COLLECTIONS tool input.
 */
type COUNTDOWN_API_COLLECTIONS_LIST_COLLECTIONS_INPUT = {
  /**
   * Created After
   * @description Only collections created after this ISO UTC timestamp (ISO 8601).
   * @default null
   */
  created_after: string | null;
  /**
   * Created Before
   * @description Only collections created before this ISO UTC timestamp (ISO 8601).
   * @default null
   */
  created_before: string | null;
  /**
   * Destination Id
   * @description Only collections with the specified destination id.
   * @default null
   */
  destination_id: string | null;
  /**
   * Last Run After
   * @description Only collections with last run after this ISO UTC timestamp (ISO 8601).
   * @default null
   */
  last_run_after: string | null;
  /**
   * Last Run Before
   * @description Only collections with last run before this ISO UTC timestamp (ISO 8601).
   * @default null
   */
  last_run_before: string | null;
  /**
   * Only With Results
   * @description Only return collections that have result sets available.
   * @default null
   */
  only_with_results: boolean | null;
  /**
   * Only Without Results
   * @description Only return collections with no result sets available.
   * @default null
   */
  only_without_results: boolean | null;
  /**
   * Page
   * @description Page number to retrieve (default is 1).
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Results per page (default 25, maximum 1000).
   * @default 25
   */
  page_size: number | null;
  /**
   * Search Term
   * @description Limit results to collections whose name contains this term.
   * @default null
   */
  search_term: string | null;
  /**
   * Search Type
   * @description How to match the search_term. One of: contains, starts_with, ends_with, exact.
   * @default null
   * @enum {string|null}
   */
  search_type: "contains" | "starts_with" | "ends_with" | "exact" | null;
  /**
   * Sort By
   * @description Field to sort by (default 'name').
   * @default name
   * @enum {string|null}
   */
  sort_by: "created_at" | "last_run" | "name" | "priority" | "status" | null;
  /**
   * Sort Direction
   * @description Sort direction (default 'ascending').
   * @default ascending
   * @enum {string|null}
   */
  sort_direction: "ascending" | "descending" | null;
  /**
   * Status
   * @description Filter by status. Default is 'all'.
   * @default all
   * @enum {string|null}
   */
  status: "all" | "idle" | "queued" | "running" | null;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_COLLECTIONS_LIST_COLLECTIONS tool output.
 */
type COUNTDOWN_API_COLLECTIONS_LIST_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collections
       * @description List of collection objects for this page.
       */
      collections: {
          /**
           * Created At
           * @description ISO UTC timestamp when created.
           */
          "created at": string;
          /**
           * Destination Ids
           * @description List of destination IDs for results.
           */
          "destination ids": string[];
          /**
           * Enabled
           * @description Whether the collection is enabled.
           */
          enabled: boolean;
          /**
           * Id
           * @description Unique identifier of the collection.
           */
          id: string;
          /**
           * Last Run
           * @description ISO UTC timestamp of last run.
           * @default null
           */
          "last run": string | null;
          /**
           * Name
           * @description Name of the collection.
           */
          name: string;
          /**
           * Next Result Set Id
           * @description Identifier of the next result set, if any.
           * @default null
           */
          "next result set id": number | null;
          /**
           * Notification As Csv
           * @description Whether notifications are sent as CSV.
           */
          "notification as csv": boolean;
          /**
           * Notification As Json
           * @description Whether notifications are sent as JSON.
           */
          "notification as json": boolean;
          /**
           * Notification As Jsonlines
           * @description Whether notifications are sent in JSON Lines.
           */
          "notification as jsonlines": boolean;
          /**
           * Notification Email
           * @description Email address for notifications.
           * @default null
           */
          "notification email": string | null;
          /**
           * Priority
           * @description Priority assigned to the collection.
           */
          priority: string;
          /**
           * Requests Page Count
           * @description Number of requests in this page.
           */
          "requests page count": number;
          /**
           * Requests Total Count
           * @description Total number of requests for this collection.
           */
          "requests total count": number;
          /**
           * Results Count
           * @description Number of results returned.
           */
          "results count": number;
          /**
           * Schedule Days Of Week
           * @description Days of week when scheduled (0=Sunday–6=Saturday).
           */
          "schedule days of week": number[];
          /**
           * Schedule Hours
           * @description Hours of the day when scheduled (0–23).
           */
          "schedule hours": number[];
          /**
           * Schedule Type
           * @description Schedule type for the collection.
           */
          "schedule type": string;
          /**
           * Status
           * @description Current status of the collection.
           */
          status: string;
      }[];
      /**
       * Count This Page
       * @description Number of collections returned in this page.
       */
      "count this page": number;
      /**
       * Current Page
       * @description Current page number.
       */
      "current page": number;
      /**
       * Request Info
       * @description High-level request status.
       */
      "request info": {
          /**
           * Success
           * @description Indicates whether the request succeeded.
           */
          success: boolean;
      };
      /**
       * Total Count
       * @description Total matching collections.
       */
      "total count": number;
      /**
       * Total Pages
       * @description Total pages available.
       */
      "total pages": number;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_COLLECTIONS_START_COLLECTION tool input.
 */
type COUNTDOWN_API_COLLECTIONS_START_COLLECTION_INPUT = {
  /**
   * Collection Id
   * @description ID of the collection to start processing
   */
  collection_id?: string;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_COLLECTIONS_START_COLLECTION tool output.
 */
type COUNTDOWN_API_COLLECTIONS_START_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Info
       * @description Operation result details
       */
      request_info: {
          /**
           * Message
           * @description Server-provided message about the start operation
           */
          message: string;
          /**
           * Success
           * @description Indicates if the collection was started successfully
           */
          success: boolean;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_COLLECTIONS_UPDATE_COLLECTION tool input.
 */
type COUNTDOWN_API_COLLECTIONS_UPDATE_COLLECTION_INPUT = {
  /**
   * Collection Id
   * @description ID of the collection to update
   */
  collection_id?: string;
  /**
   * Destination Ids
   * @description Destination IDs to upload results to
   * @default null
   */
  destination_ids: string[] | null;
  /**
   * Enabled
   * @description Enable or disable scheduled runs
   * @default null
   */
  enabled: boolean | null;
  /**
   * Name
   * @description Collection name
   */
  name?: string;
  /**
   * Notification As Csv
   * @description Output/upload results as CSV
   * @default null
   */
  notification_as_csv: boolean | null;
  /**
   * Notification As Json
   * @description Output/upload results as JSON
   * @default null
   */
  notification_as_json: boolean | null;
  /**
   * Notification As Jsonlines
   * @description Output/upload results as JSON Lines
   * @default null
   */
  notification_as_jsonlines: boolean | null;
  /**
   * Notification Csv Fields
   * @description Comma-separated field list when CSV enabled
   * @default null
   */
  notification_csv_fields: string | null;
  /**
   * Notification Email
   * @description Email to send notifications to
   * @default null
   */
  notification_email: string | null;
  /**
   * Notification Webhook
   * Format: uri
   * @description Webhook URL to POST when results are available
   * @default null
   */
  notification_webhook: string | null;
  /**
   * Priority
   * @description Collection priority
   * @default null
   * @enum {string|null}
   */
  priority: "highest" | "high" | "normal" | "low" | "lowest" | null;
  /**
   * Requests Type
   * @description Lock collection to a specific request type; cannot be changed after creation
   * @default null
   * @enum {string|null}
   */
  requests_type: "mixed" | "search" | "product" | "reviews" | "seller profile" | "seller feedback" | "autocomplete" | "deals" | null;
  /**
   * Schedule Days Of Month
   * @description Days of month (1-31) for monthly schedules
   * @default null
   */
  schedule_days_of_month: number[] | null;
  /**
   * Schedule Days Of Week
   * @description Days of week (0=Sun...6=Sat) for weekly schedules
   * @default null
   */
  schedule_days_of_week: number[] | null;
  /**
   * Schedule Hours
   * @description Hours (0-23) to run
   * @default null
   */
  schedule_hours: number[] | null;
  /**
   * Schedule Minutes
   * @description Minute interval when schedule_type='minutes'
   * @default null
   * @enum {string|null}
   */
  schedule_minutes: "every minute" | "every 5 minutes" | "every 10 minutes" | "every 15 minutes" | "every 20 minutes" | "every 25 minutes" | "every 30 minutes" | "every hour" | null;
  /**
   * Schedule Type
   * @description Run schedule type
   * @default null
   * @enum {string|null}
   */
  schedule_type: "monthly" | "weekly" | "daily" | "minutes" | "manual" | null;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_COLLECTIONS_UPDATE_COLLECTION tool output.
 */
type COUNTDOWN_API_COLLECTIONS_UPDATE_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collection
       * @description Updated collection object
       */
      collection: {
          /**
           * Created At
           * @description Creation timestamp
           */
          created_at: string;
          /**
           * Destination Ids
           * @description Destination IDs attached
           * @default null
           */
          destination_ids: string[] | null;
          /**
           * Enabled
           * @description Whether enabled
           */
          enabled: boolean;
          /**
           * Id
           * @description Collection ID
           */
          id: string;
          /**
           * Name
           * @description Collection name
           */
          name: string;
          /**
           * Next Result Set Id
           * @description Next result set identifier
           * @default null
           */
          next_result_set_id: number | null;
          /**
           * Notification As Csv
           * @description CSV output setting
           * @default null
           */
          notification_as_csv: boolean | null;
          /**
           * Notification As Json
           * @description JSON output setting
           * @default null
           */
          notification_as_json: boolean | null;
          /**
           * Notification As Jsonlines
           * @description JSON Lines output setting
           * @default null
           */
          notification_as_jsonlines: boolean | null;
          /**
           * Notification Csv Fields
           * @description CSV fields list
           * @default null
           */
          notification_csv_fields: string | null;
          /**
           * Notification Email
           * @description Notification email
           * @default null
           */
          notification_email: string | null;
          /**
           * Priority
           * @description Priority value
           * @default null
           */
          priority: string | null;
          /**
           * Request Page Count
           * @description Total request pages
           * @default null
           */
          request_page_count: number | null;
          /**
           * Request Total Count
           * @description Total requests in collection
           * @default null
           */
          request_total_count: number | null;
          /**
           * Request Type
           * @description Locked request type
           * @default null
           */
          request_type: string | null;
          /**
           * Request Type Locked
           * @description Whether collection is type-locked
           * @default null
           */
          request_type_locked: boolean | null;
          /**
           * Results Count
           * @description Number of result sets produced
           * @default null
           */
          results_count: number | null;
          /**
           * Schedule Days Of Month
           * @description Scheduled days of month
           * @default null
           */
          schedule_days_of_month: number[] | null;
          /**
           * Schedule Days Of Week
           * @description Scheduled days of week
           * @default null
           */
          schedule_days_of_week: number[] | null;
          /**
           * Schedule Hours
           * @description Scheduled hours
           * @default null
           */
          schedule_hours: number[] | null;
          /**
           * Schedule Minutes
           * @description Scheduled minute interval
           * @default null
           */
          schedule_minutes: string | null;
          /**
           * Schedule Type
           * @description Schedule type
           * @default null
           */
          schedule_type: string | null;
          /**
           * Status
           * @description Current status (e.g., idle)
           * @default null
           */
          status: string | null;
      };
      /**
       * Request Info
       * @description Overall request status
       */
      request_info: {
          /**
           * Success
           * @description True if the request succeeded
           */
          success: boolean;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_CORE_API_SEND_REQUEST tool input.
 */
type COUNTDOWN_API_CORE_API_SEND_REQUEST_INPUT = {
  /**
   * Api Key
   * @description Your Countdown API key.
   */
  api_key?: string;
  /**
   * Ebay Domain
   * @description eBay domain to retrieve autocomplete suggestions from, e.g., 'ebay.com'.
   */
  ebay_domain?: string;
  /**
   * Search Term
   * @description The search term to get autocomplete suggestions for.
   */
  search_term?: string;
  /**
   * Type
   * @description Must be "autocomplete" to retrieve autocomplete suggestions.
   * @constant
   */
  type?: "autocomplete";
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_CORE_API_SEND_REQUEST tool output.
 */
type COUNTDOWN_API_CORE_API_SEND_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of autocomplete suggestion strings.
       */
      suggestions: string[];
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_CREATE_DESTINATION tool input.
 */
type COUNTDOWN_API_CREATE_DESTINATION_INPUT = {
  /**
   * Azure Account Key
   * @description Azure account key (required when type is azure)
   * @default null
   */
  azure_account_key: string | null;
  /**
   * Azure Account Name
   * @description Azure account name (required when type is azure)
   * @default null
   */
  azure_account_name: string | null;
  /**
   * Azure Container Name
   * @description Azure container name (required when type is azure)
   * @default null
   */
  azure_container_name: string | null;
  /**
   * Azure Path Prefix
   * @description Azure path prefix (optional)
   * @default null
   */
  azure_path_prefix: string | null;
  /**
   * Enabled
   * @description Whether uploads are active for this destination.
   */
  enabled?: boolean;
  /**
   * Gcs Access Key
   * @description GCS access key (required when type is gcs)
   * @default null
   */
  gcs_access_key: string | null;
  /**
   * Gcs Bucket Name
   * @description GCS bucket name (required when type is gcs)
   * @default null
   */
  gcs_bucket_name: string | null;
  /**
   * Gcs Path Prefix
   * @description GCS path prefix (optional)
   * @default null
   */
  gcs_path_prefix: string | null;
  /**
   * Gcs Secret Key
   * @description GCS secret key (required when type is gcs)
   * @default null
   */
  gcs_secret_key: string | null;
  /**
   * Name
   * @description Destination name.
   */
  name?: string;
  /**
   * Oss Access Key
   * @description OSS access key (required when type is oss)
   * @default null
   */
  oss_access_key: string | null;
  /**
   * Oss Bucket Name
   * @description OSS bucket name (required when type is oss)
   * @default null
   */
  oss_bucket_name: string | null;
  /**
   * Oss Path Prefix
   * @description OSS path prefix (optional)
   * @default null
   */
  oss_path_prefix: string | null;
  /**
   * Oss Region Id
   * @description OSS region ID (required when type is oss)
   * @default null
   */
  oss_region_id: string | null;
  /**
   * Oss Secret Key
   * @description OSS secret key (required when type is oss)
   * @default null
   */
  oss_secret_key: string | null;
  /**
   * S3 Access Key Id
   * @description S3 access key id (required when type is s3 or s3compatible)
   * @default null
   */
  s3_access_key_id: string | null;
  /**
   * S3 Bucket Name
   * @description S3 bucket name (required when type is s3 or s3compatible)
   * @default null
   */
  s3_bucket_name: string | null;
  /**
   * S3 Endpoint
   * @description S3 endpoint (required when type is s3compatible)
   * @default null
   */
  s3_endpoint: string | null;
  /**
   * S3 Path Prefix
   * @description S3 path prefix (optional)
   * @default null
   */
  s3_path_prefix: string | null;
  /**
   * S3 Region
   * @description S3 region (optional when type is s3compatible)
   * @default null
   */
  s3_region: string | null;
  /**
   * S3 Secret Access Key
   * @description S3 secret access key (required when type is s3 or s3compatible)
   * @default null
   */
  s3_secret_access_key: string | null;
  /**
   * Type
   * @description Type of destination to create.
   * @enum {string}
   */
  type?: "s3" | "s3compatible" | "gcs" | "azure" | "oss";
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_CREATE_DESTINATION tool output.
 */
type COUNTDOWN_API_CREATE_DESTINATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Destination Id
       * @description ID of the newly created destination
       */
      destination_id: string;
      /**
       * Success
       * @description Indicates if creation succeeded
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_DELETE_COLLECTION tool input.
 */
type COUNTDOWN_API_DELETE_COLLECTION_INPUT = {
  /**
   * Collection Id
   * @description ID of the collection to delete
   */
  collection_id?: string;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_DELETE_COLLECTION tool output.
 */
type COUNTDOWN_API_DELETE_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Info
       * @description Details about the deletion request
       */
      request_info: {
          /**
           * Message
           * @description Server-provided message, e.g., 'collection deleted'
           */
          message: string;
          /**
           * Success
           * @description Indicates whether deletion succeeded
           */
          success: boolean;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_DELETE_DESTINATION tool input.
 */
type COUNTDOWN_API_DELETE_DESTINATION_INPUT = {
  /**
   * Destination Id
   * @description ID of the destination to delete
   */
  destination_id?: string;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_DELETE_DESTINATION tool output.
 */
type COUNTDOWN_API_DELETE_DESTINATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Info
       * @description Details about the deletion request
       */
      request_info: {
          /**
           * Message
           * @description Server-provided message, e.g., '1 destination deleted'
           */
          message: string;
          /**
           * Success
           * @description Indicates whether deletion succeeded
           */
          success: boolean;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_DELETE_SINGLE_REQUEST tool input.
 */
type COUNTDOWN_API_DELETE_SINGLE_REQUEST_INPUT = {
  /**
   * Collection Id
   * @description ID of the collection the request belongs to
   */
  collection_id?: string;
  /**
   * Request Id
   * @description ID of the request to delete
   */
  request_id?: string;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_DELETE_SINGLE_REQUEST tool output.
 */
type COUNTDOWN_API_DELETE_SINGLE_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Info
       * @description Details about the deletion request
       */
      request_info: {
          /**
           * Message
           * @description Server-provided message, e.g., 'request deleted'
           */
          message: string;
          /**
           * Success
           * @description Indicates whether deletion succeeded
           */
          success: boolean;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_DESTINATIONS_LIST_DESTINATIONS tool input.
 */
type COUNTDOWN_API_DESTINATIONS_LIST_DESTINATIONS_INPUT = {
  /**
   * Page
   * @description Page number to return; 10 destinations per page
   * @default 1
   */
  page: number | null;
  /**
   * Search Term
   * @description Filter results to destinations whose names contain this term
   * @default null
   */
  search_term: string | null;
  /**
   * Sort By
   * @description Sort field; valid values: 'type' or 'name'; use with sort_direction
   * @default null
   * @enum {string|null}
   */
  sort_by: "type" | "name" | null;
  /**
   * Sort Direction
   * @description Sort direction; valid values: ascending or descending; use with sort_by
   * @default ascending
   * @enum {string|null}
   */
  sort_direction: "ascending" | "descending" | null;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_DESTINATIONS_LIST_DESTINATIONS tool output.
 */
type COUNTDOWN_API_DESTINATIONS_LIST_DESTINATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Destinations
       * @description List of configured destinations
       */
      destinations: {
          /**
           * Enabled
           * @description Whether the destination is enabled
           */
          enabled: boolean;
          /**
           * Id
           * @description Destination identifier
           */
          id: string;
          /**
           * Name
           * @description Destination name
           */
          name: string;
          /**
           * S3 Bucket Name
           * @description S3 bucket name (present if type is 's3')
           * @default null
           */
          s3_bucket_name: string | null;
          /**
           * S3 Path Prefix
           * @description S3 path prefix (present if type is 's3')
           * @default null
           */
          s3_path_prefix: string | null;
          /**
           * Type
           * @description Destination type (e.g., 's3')
           */
          type: string;
          /**
           * Used By
           * @description Count of collections using this destination
           */
          used_by: number;
      }[];
      /**
       * Request Info
       * @description Overall request status
       */
      request_info: {
          /**
           * Success
           * @description Indicates whether the request succeeded
           */
          success: boolean;
      };
      /**
       * Usage
       * @description API usage metrics
       */
      usage: {
          /**
           * Available
           * @description Remaining API calls available
           */
          available: number;
          /**
           * Limit
           * @description API call limit
           */
          limit: number;
          /**
           * Used
           * @description Number of API calls used
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_GET_ACCOUNT tool input.
 */
type COUNTDOWN_API_GET_ACCOUNT_INPUT = object;

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_GET_ACCOUNT tool output.
 */
type COUNTDOWN_API_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Info
       * @description Detailed account information and quotas
       */
      account_info: {
          /**
           * Account Balance Message
           * @description Human-readable message about account balance
           */
          account_balance_message: string;
          /**
           * Account Balance Usd
           * @description Account balance in USD
           */
          account_balance_usd: number;
          /**
           * Api Key
           * @description The API key associated with the account
           */
          api_key: string;
          /**
           * Collections Available
           * @description Remaining collections available
           */
          collections_available: number;
          /**
           * Collections Limit
           * @description Maximum number of collections allowed
           */
          collections_limit: number;
          /**
           * Collections Used
           * @description Number of collections used
           */
          collections_used: number;
          /**
           * Credits Limit
           * @description Maximum credits allowed
           */
          credits_limit: number;
          /**
           * Credits Remaining
           * @description Remaining available credits
           */
          credits_remaining: number;
          /**
           * Credits Reset At
           * @description ISO timestamp when credits will reset
           */
          credits_reset_at: string;
          /**
           * Credits Used
           * @description Total credits used so far
           */
          credits_used: number;
          /**
           * Destinations Available
           * @description Remaining destinations available
           */
          destinations_available: number;
          /**
           * Destinations Limit
           * @description Maximum number of destinations allowed
           */
          destinations_limit: number;
          /**
           * Destinations Used
           * @description Number of API destinations used
           */
          destinations_used: number;
          /**
           * Email
           * @description Account holder's email address
           */
          email: string;
          /**
           * Name
           * @description Account holder's name
           */
          name: string;
          /**
           * Overage Allowed
           * @description Flag indicating if overage is allowed
           */
          overage_allowed: boolean;
          /**
           * Overage Enabled
           * @description Flag indicating if overage is enabled
           */
          overage_enabled: boolean;
          /**
           * Overage Limit
           * @description Maximum allowed overage credits
           */
          overage_limit: number;
          /**
           * Plan
           * @description Current subscription plan name
           */
          plan: string;
          /**
           * Status
           * @description List of component status entries
           */
          status: {
              /**
               * Component
               * @description Name of the platform component
               */
              component: string;
              /**
               * Status
               * @description Current status of the component
               */
              status: string;
          }[];
          /**
           * Timezone
           * @description Timezone configured for the account
           */
          timezone: string;
          /**
           * Usage History
           * @description Historical usage data for the past months
           */
          usage_history: {
              /**
               * Credits Total For Month
               * @description Total credits allocated for the month
               */
              credits_total_for_month: number;
              /**
               * Credits Total Per Day
               * @description Mapping of day of month to credits used on that day
               */
              credits_total_per_day: {
                  [key: string]: number;
              };
              /**
               * Is Current Month
               * @description Indicates if this entry is for the current month
               */
              is_current_month: boolean;
              /**
               * Month
               * @description Month name for usage entry
               */
              month: string;
              /**
               * Month Number
               * @description Numeric representation of the month (1-12)
               */
              month_number: number;
              /**
               * Year
               * @description Year for usage entry
               */
              year: number;
          }[];
      };
      /**
       * Request Info
       * @description Overall request status
       */
      request_info: {
          /**
           * Success
           * @description Indicates if the API request was successful
           */
          success: boolean;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_REQUESTS_EXPORT_CSV tool input.
 */
type COUNTDOWN_API_REQUESTS_EXPORT_CSV_INPUT = {
  /**
   * Collection Id
   * @description The ID of the collection whose requests you want to export as CSV.
   */
  collection_id?: string;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_REQUESTS_EXPORT_CSV tool output.
 */
type COUNTDOWN_API_REQUESTS_EXPORT_CSV_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collection Id
       * @description The collection identifier.
       */
      "collection id": string;
      /**
       * Download Links
       * @description Container for generated CSV download URLs.
       */
      "download links": {
          /**
           * Pages
           * @description Per-page CSV file URLs for all requests in the collection.
           */
          pages: string[];
      };
      /**
       * Request Info
       * @description High-level request status.
       */
      "request info": {
          /**
           * Success
           * @description Whether the API call was successful.
           */
          success: boolean;
      };
      /**
       * Requests Page Count
       * @description Number of CSV pages generated.
       */
      "requests page count": number;
      /**
       * Requests Total Count
       * @description Total number of requests in the collection.
       */
      "requests total count": number;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_REQUESTS_EXPORT_JSON tool input.
 */
type COUNTDOWN_API_REQUESTS_EXPORT_JSON_INPUT = {
  /**
   * Collection Id
   * @description ID of the collection to export requests from
   */
  collection_id?: string;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_REQUESTS_EXPORT_JSON tool output.
 */
type COUNTDOWN_API_REQUESTS_EXPORT_JSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collection Id
       * @description The ID of the collection.
       */
      "collection id": string;
      /**
       * Download Links
       * @description Container for file links.
       */
      "download links": {
          /**
           * Pages
           * @description List of per-page JSON file URLs for downloading the requests.
           */
          pages: string[];
      };
      /**
       * Request Info
       * @description Overall request status.
       */
      "request info": {
          /**
           * Success
           * @description Indicates whether the API call succeeded.
           */
          success: boolean;
      };
      /**
       * Requests Page Count
       * @description Total number of pages of request files.
       */
      "requests page count": number;
      /**
       * Requests Total Count
       * @description Total number of requests in the collection.
       */
      "requests total count": number;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_REQUESTS_LIST_REQUESTS_PAGED tool input.
 */
type COUNTDOWN_API_REQUESTS_LIST_REQUESTS_PAGED_INPUT = {
  /**
   * Collection Id
   * @description ID of the collection to list requests from
   */
  collection_id?: string;
  /**
   * Page
   * @description 1-indexed page number; each page returns up to 1000 requests
   */
  page?: number;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_REQUESTS_LIST_REQUESTS_PAGED tool output.
 */
type COUNTDOWN_API_REQUESTS_LIST_REQUESTS_PAGED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collection Id
       * @description The collection identifier
       */
      "collection id": string;
      /**
       * Request Info
       * @description Metadata about the API request
       */
      "request info": {
          /**
           * Success
           * @description Whether the API call was successful
           */
          success: boolean;
      };
      /**
       * Requests
       * @description List of request entries on this page
       */
      requests: {
          /**
           * Custom Id
           * @description Custom identifier provided when the request was created
           * @default null
           */
          custom_id: string | null;
          /**
           * Ebay Domain
           * @description eBay domain used for this request, e.g., 'ebay.com'
           */
          ebay_domain: string;
          /**
           * Epid
           * @description eBay product ID if applicable
           * @default null
           */
          epid: string | null;
          /**
           * Id
           * @description Unique identifier for this request
           */
          id: string;
          /**
           * Type
           * @description Type of the request, e.g., 'search' or 'history'
           */
          type: string;
      }[];
      /**
       * Requests Page Count
       * @description Total number of pages available
       */
      "requests page count": number;
      /**
       * Requests Page Current
       * @description Current page number
       */
      "requests page current": number;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_REQUESTS_UPDATE_SINGLE_REQUEST tool input.
 */
type COUNTDOWN_API_REQUESTS_UPDATE_SINGLE_REQUEST_INPUT = {
  /**
   * Body
   * @description Fields to update on the request; must conform to the eBay Product Data API common request parameters schema. Only include fields being updated.
   */
  body?: {
      [key: string]: unknown;
  };
  /**
   * Collection Id
   * @description ID of the collection containing the request to update.
   */
  collection_id?: string;
  /**
   * Request Id
   * @description ID of the specific request to update within the collection.
   */
  request_id?: string;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_REQUESTS_UPDATE_SINGLE_REQUEST tool output.
 */
type COUNTDOWN_API_REQUESTS_UPDATE_SINGLE_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request
       * @description Echo of the fields that were updated; keys match the sent parameters.
       */
      request: {
          [key: string]: unknown;
      };
      /**
       * Request Info
       * @description Metadata about the update operation.
       */
      request_info: {
          /**
           * Success
           * @description Indicates whether the update operation succeeded.
           */
          success: boolean;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_RESULTS_GET_RESULT_SET tool input.
 */
type COUNTDOWN_API_RESULTS_GET_RESULT_SET_INPUT = {
  /**
   * Collection Id
   * @description ID of the collection containing the result set
   */
  collection_id?: string;
  /**
   * Result Set Id
   * @description Numeric ID of the result set within the collection
   */
  result_set_id?: number;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_RESULTS_GET_RESULT_SET tool output.
 */
type COUNTDOWN_API_RESULTS_GET_RESULT_SET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collection Id
       * @description ID of the collection for this result set
       */
      collection_id: string;
      /**
       * Request Info
       * @description Overall request metadata and success flag
       */
      request_info: {
          /**
           * Success
           * @description Indicates if the API request was successful
           */
          success: boolean;
      };
      /**
       * Result
       * @description Full metadata and download links for the result set
       */
      result: {
          /**
           * Destination Status
           * @description Mapping of destination IDs to their delivery status
           */
          destination_status: {
              [key: string]: {
                  /**
                   * Log
                   * @description Log entries for this destination status
                   */
                  log: {
                      /**
                       * Date Time
                       * @description Timestamp of the log entry (ISO-8601)
                       */
                      date_time: string;
                      /**
                       * Text
                       * @description Log message detail
                       */
                      text: string;
                  }[];
                  /**
                   * Status
                   * @description Delivery status for this destination
                   */
                  status: string;
              };
          };
          /**
           * Download Links
           * @description Links to download result data
           */
          download_links: {
              /**
               * All Pages
               * @description URL to download all result pages as a single archive
               */
              all_pages: string;
              /**
               * Pages
               * @description List of URLs for each page of results
               */
              pages: string[];
          };
          /**
           * Ended At
           * @description Run end timestamp (ISO-8601)
           */
          ended_at: string;
          /**
           * Expires At
           * @description Expiration timestamp for this result set (ISO-8601)
           */
          expires_at: string;
          /**
           * Id
           * @description Result set ID
           */
          id: number;
          /**
           * Requests Completed
           * @description Number of completed requests
           */
          requests_completed: number;
          /**
           * Requests Failed
           * @description Number of failed requests
           */
          requests_failed: number;
          /**
           * Requests Total
           * @description Total number of requests attempted
           */
          requests_total: number;
          /**
           * Results Page Count
           * @description Total number of result pages
           */
          results_page_count: number;
          /**
           * Started At
           * @description Run start timestamp (ISO-8601)
           */
          started_at: string;
          /**
           * Webhook Status
           * @description Status of any webhook notifications
           */
          webhook_status: {
              /**
               * Log
               * @description History of webhook attempts
               */
              log: {
                  /**
                   * Date Time
                   * @description Timestamp of the log entry (ISO-8601)
                   */
                  date_time: string;
                  /**
                   * Text
                   * @description Log message detail
                   */
                  text: string;
              }[];
              /**
               * Status
               * @description Webhook dispatch status
               */
              status: string;
          };
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_RESULTS_LIST_RESULT_SETS tool input.
 */
type COUNTDOWN_API_RESULTS_LIST_RESULT_SETS_INPUT = {
  /**
   * Collection Id
   * @description ID of the collection to list result sets for
   */
  collection_id?: string;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_RESULTS_LIST_RESULT_SETS tool output.
 */
type COUNTDOWN_API_RESULTS_LIST_RESULT_SETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collection
       * @description Detailed information about the collection
       */
      collection: {
          /**
           * Created At
           * @description When the collection was created (ISO 8601 datetime)
           */
          created_at: string;
          /**
           * Enabled
           * @description Whether the collection is active
           */
          enabled: boolean;
          /**
           * Id
           * @description Collection identifier
           */
          id: string;
          /**
           * Name
           * @description Human-readable collection name
           */
          name: string;
          /**
           * Notification As Csv
           * @description Whether notifications are sent as CSV
           */
          notification_as_csv: boolean;
          /**
           * Notification As Json
           * @description Whether notifications are sent as JSON
           */
          notification_as_json: boolean;
          /**
           * Notification As Jsonlines
           * @description Whether notifications are sent as JSON Lines
           */
          notification_as_jsonlines: boolean;
          /**
           * Notification Email
           * @description Email address for notifications
           */
          notification_email: string;
          /**
           * Requests Page Count
           * @description Total pages of requests available
           */
          requests_page_count: number;
          /**
           * Requests Total Count
           * @description Total requests ever issued for this collection
           */
          requests_total_count: number;
          /**
           * Results Count
           * @description Total result sets retained
           */
          results_count: number;
          /**
           * Schedule Hours
           * @description Hours of day when the collection runs (0-23)
           */
          schedule_hours: number[];
          /**
           * Schedule Type
           * @description Type of scheduling (e.g., 'cron', 'interval')
           */
          schedule_type: string;
          /**
           * Status
           * @description Current status of the collection
           */
          status: string;
      };
      /**
       * Collection Id
       * @description Identifier of the queried collection
       */
      collection_id: string;
      /**
       * Request Info
       * @description Metadata about the API request, including success flag
       */
      request_info: {
          /**
           * Success
           * @description Indicates if the API request was successful
           */
          success: boolean;
      };
      /**
       * Results
       * @description List of result sets, most recent first
       */
      results: {
          /**
           * Destination Status
           * @description Map from destination ID to its delivery status and log
           */
          destination_status: {
              [key: string]: {
                  /**
                   * Log
                   * @description History of delivery events for this destination
                   */
                  log: {
                      /**
                       * Date Time
                       * @description Timestamp of the log entry (ISO 8601 datetime)
                       */
                      date_time: string;
                      /**
                       * Text
                       * @description Log message text
                       */
                      text: string;
                  }[];
                  /**
                   * Status
                   * @description Status for this destination delivery
                   */
                  status: string;
              };
          };
          /**
           * Ended At
           * @description When the result set ended (ISO 8601 datetime)
           */
          ended_at: string;
          /**
           * Expires At
           * @description When the result set will be purged (ISO 8601 datetime)
           */
          expires_at: string;
          /**
           * Id
           * @description Unique result set identifier
           */
          id: number;
          /**
           * Requests Completed
           * @description Number of completed requests
           */
          requests_completed: number;
          /**
           * Requests Failed
           * @description Number of failed requests
           */
          requests_failed: number;
          /**
           * Requests Total
           * @description Total number of requests
           */
          requests_total: number;
          /**
           * Results Page Count
           * @description Total pages of results
           */
          results_page_count: number;
          /**
           * Started At
           * @description When the result set started (ISO 8601 datetime)
           */
          started_at: string;
          /**
           * Webhook Status
           * @description Webhook dispatch status and log
           */
          webhook_status: {
              /**
               * Log
               * @description History of webhook delivery events
               */
              log: {
                  /**
                   * Date Time
                   * @description Timestamp of the log entry (ISO 8601 datetime)
                   */
                  date_time: string;
                  /**
                   * Text
                   * @description Log message text
                   */
                  text: string;
              }[];
              /**
               * Status
               * @description Status of the webhook delivery
               */
              status: string;
          };
      }[];
      /**
       * Results Count
       * @description Total number of result sets available
       */
      results_count: number;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_RESULTS_RESEND_RESULT_SET_WEBHOOK tool input.
 */
type COUNTDOWN_API_RESULTS_RESEND_RESULT_SET_WEBHOOK_INPUT = {
  /**
   * Collection Id
   * @description ID of the collection containing the result set
   */
  collection_id?: string;
  /**
   * Result Set Id
   * @description Numeric ID of the result set within the collection
   */
  result_set_id?: number;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_RESULTS_RESEND_RESULT_SET_WEBHOOK tool output.
 */
type COUNTDOWN_API_RESULTS_RESEND_RESULT_SET_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Info
       * @description Metadata about the resend attempt
       */
      request_info: {
          /**
           * Message
           * @description Status or error message from the API
           * @default null
           */
          message: string | null;
          /**
           * Success
           * @description Indicates if the resend operation was accepted/executed
           */
          success: boolean;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_STOP_ALL_COLLECTIONS tool input.
 */
type COUNTDOWN_API_STOP_ALL_COLLECTIONS_INPUT = object;

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_STOP_ALL_COLLECTIONS tool output.
 */
type COUNTDOWN_API_STOP_ALL_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collections Failed To Stop
       * @description Count of collections that could not be stopped
       */
      collections_failed_to_stop: number;
      /**
       * Collections Stopped
       * @description Count of collections successfully stopped
       */
      collections_stopped: number;
      /**
       * Request Info
       * @description Wrapper with request outcome details
       */
      request_info: {
          /**
           * Message
           * @description Outcome message, e.g., '23 collections stopped'
           */
          message: string;
          /**
           * Success
           * @description Whether the request succeeded
           */
          success: boolean;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_STOP_COLLECTION tool input.
 */
type COUNTDOWN_API_STOP_COLLECTION_INPUT = {
  /**
   * Collection Id
   * @description ID of the collection to stop
   */
  collection_id?: string;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_STOP_COLLECTION tool output.
 */
type COUNTDOWN_API_STOP_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Info
       * @description Details about the stop collection request
       */
      request_info: {
          /**
           * Message
           * @description Server-provided message, e.g., 'collection stopped'
           */
          message: string;
          /**
           * Success
           * @description Indicates whether stopping the collection succeeded
           */
          success: boolean;
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
 * Type of COUNTDOWN_API's COUNTDOWN_API_UPDATE_DESTINATION tool input.
 */
type COUNTDOWN_API_UPDATE_DESTINATION_INPUT = {
  /**
   * Azure Account Key
   * @description Azure account key (required when type is azure)
   * @default null
   */
  azure_account_key: string | null;
  /**
   * Azure Account Name
   * @description Azure account name (required when type is azure)
   * @default null
   */
  azure_account_name: string | null;
  /**
   * Azure Container Name
   * @description Azure container name (required when type is azure)
   * @default null
   */
  azure_container_name: string | null;
  /**
   * Azure Path Prefix
   * @description Azure path prefix (optional); supports tokens %collection_id%, %collection_name%, %result_set_id%, %date%
   * @default null
   */
  azure_path_prefix: string | null;
  /**
   * Destination Id
   * @description ID of the destination to update
   */
  destination_id?: string;
  /**
   * Enabled
   * @description Whether uploads are active for this destination
   * @default null
   */
  enabled: boolean | null;
  /**
   * Gcs Access Key
   * @description GCS access key (required when type is gcs)
   * @default null
   */
  gcs_access_key: string | null;
  /**
   * Gcs Bucket Name
   * @description GCS bucket name (required when type is gcs)
   * @default null
   */
  gcs_bucket_name: string | null;
  /**
   * Gcs Path Prefix
   * @description GCS path prefix (optional); supports tokens %collection_id%, %collection_name%, %result_set_id%, %date%
   * @default null
   */
  gcs_path_prefix: string | null;
  /**
   * Gcs Secret Key
   * @description GCS secret key (required when type is gcs)
   * @default null
   */
  gcs_secret_key: string | null;
  /**
   * Name
   * @description Destination name
   * @default null
   */
  name: string | null;
  /**
   * Oss Access Key
   * @description OSS access key (required when type is oss)
   * @default null
   */
  oss_access_key: string | null;
  /**
   * Oss Bucket Name
   * @description OSS bucket name (required when type is oss)
   * @default null
   */
  oss_bucket_name: string | null;
  /**
   * Oss Path Prefix
   * @description OSS path prefix (optional); supports tokens %collection_id%, %collection_name%, %result_set_id%, %date%
   * @default null
   */
  oss_path_prefix: string | null;
  /**
   * Oss Region Id
   * @description OSS region ID (required when type is oss)
   * @default null
   */
  oss_region_id: string | null;
  /**
   * Oss Secret Key
   * @description OSS secret key (required when type is oss)
   * @default null
   */
  oss_secret_key: string | null;
  /**
   * S3 Access Key Id
   * @description S3 access key id (required when type is s3 or s3compatible)
   * @default null
   */
  s3_access_key_id: string | null;
  /**
   * S3 Bucket Name
   * @description S3 bucket name (required when type is s3 or s3compatible)
   * @default null
   */
  s3_bucket_name: string | null;
  /**
   * S3 Endpoint
   * @description S3 endpoint URL (required when type is s3compatible)
   * @default null
   */
  s3_endpoint: string | null;
  /**
   * S3 Path Prefix
   * @description S3 path prefix (optional); supports tokens %collection_id%, %collection_name%, %result_set_id%, %date%
   * @default null
   */
  s3_path_prefix: string | null;
  /**
   * S3 Region
   * @description S3 region (optional when type is s3compatible)
   * @default null
   */
  s3_region: string | null;
  /**
   * S3 Secret Access Key
   * @description S3 secret access key (required when type is s3 or s3compatible)
   * @default null
   */
  s3_secret_access_key: string | null;
  /**
   * Type
   * @description Destination type
   * @default null
   * @enum {string|null}
   */
  type: "s3" | "s3compatible" | "gcs" | "azure" | "oss" | null;
};

/**
 * Type of COUNTDOWN_API's COUNTDOWN_API_UPDATE_DESTINATION tool output.
 */
type COUNTDOWN_API_UPDATE_DESTINATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connectivity Problem
       * @description Connectivity/credential problem flag
       * @default null
       */
      connectivity_problem: boolean | null;
      /**
       * Destination
       * @description Updated destination details
       * @default null
       */
      destination: {
          /**
           * Azure Account Name
           * @description Azure account name (if returned)
           * @default null
           */
          azure_account_name: string | null;
          /**
           * Azure Container Name
           * @description Azure container name (if returned)
           * @default null
           */
          azure_container_name: string | null;
          /**
           * Azure Path Prefix
           * @description Azure path prefix (if returned)
           * @default null
           */
          azure_path_prefix: string | null;
          /**
           * Enabled
           * @description Whether uploads are active for this destination
           */
          enabled: boolean;
          /**
           * Gcs Access Key
           * @description GCS access key (if returned)
           * @default null
           */
          gcs_access_key: string | null;
          /**
           * Gcs Bucket Name
           * @description GCS bucket name (if returned)
           * @default null
           */
          gcs_bucket_name: string | null;
          /**
           * Gcs Path Prefix
           * @description GCS path prefix (if returned)
           * @default null
           */
          gcs_path_prefix: string | null;
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
           * Oss Access Key
           * @description OSS access key (if returned)
           * @default null
           */
          oss_access_key: string | null;
          /**
           * Oss Bucket Name
           * @description OSS bucket name (if returned)
           * @default null
           */
          oss_bucket_name: string | null;
          /**
           * Oss Path Prefix
           * @description OSS path prefix (if returned)
           * @default null
           */
          oss_path_prefix: string | null;
          /**
           * Oss Region Id
           * @description OSS region ID (if returned)
           * @default null
           */
          oss_region_id: string | null;
          /**
           * S3 Access Key Id
           * @description S3 access key id (if returned)
           * @default null
           */
          s3_access_key_id: string | null;
          /**
           * S3 Bucket Name
           * @description S3 bucket name (if returned)
           * @default null
           */
          s3_bucket_name: string | null;
          /**
           * S3 Endpoint
           * @description S3 endpoint URL (if returned)
           * @default null
           */
          s3_endpoint: string | null;
          /**
           * S3 Path Prefix
           * @description S3 path prefix (if returned)
           * @default null
           */
          s3_path_prefix: string | null;
          /**
           * S3 Region
           * @description S3 region (if returned)
           * @default null
           */
          s3_region: string | null;
          /**
           * Type
           * @description Destination type
           * @enum {string}
           */
          type: "s3" | "s3compatible" | "gcs" | "azure" | "oss";
      } | null;
      /**
       * Message
       * @description Message returned by API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if update request succeeded
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
 * Type map of all available tool input types for toolkit "COUNTDOWN_API".
 */
export type COUNTDOWN_API_TOOL_INPUTS = {
  CLEAR_ALL_REQUESTS: COUNTDOWN_API_CLEAR_ALL_REQUESTS_INPUT
  COLLECTIONS_CREATE_COLLECTION: COUNTDOWN_API_COLLECTIONS_CREATE_COLLECTION_INPUT
  COLLECTIONS_GET_COLLECTION: COUNTDOWN_API_COLLECTIONS_GET_COLLECTION_INPUT
  COLLECTIONS_LIST_COLLECTIONS: COUNTDOWN_API_COLLECTIONS_LIST_COLLECTIONS_INPUT
  COLLECTIONS_START_COLLECTION: COUNTDOWN_API_COLLECTIONS_START_COLLECTION_INPUT
  COLLECTIONS_UPDATE_COLLECTION: COUNTDOWN_API_COLLECTIONS_UPDATE_COLLECTION_INPUT
  CORE_API_SEND_REQUEST: COUNTDOWN_API_CORE_API_SEND_REQUEST_INPUT
  CREATE_DESTINATION: COUNTDOWN_API_CREATE_DESTINATION_INPUT
  DELETE_COLLECTION: COUNTDOWN_API_DELETE_COLLECTION_INPUT
  DELETE_DESTINATION: COUNTDOWN_API_DELETE_DESTINATION_INPUT
  DELETE_SINGLE_REQUEST: COUNTDOWN_API_DELETE_SINGLE_REQUEST_INPUT
  DESTINATIONS_LIST_DESTINATIONS: COUNTDOWN_API_DESTINATIONS_LIST_DESTINATIONS_INPUT
  GET_ACCOUNT: COUNTDOWN_API_GET_ACCOUNT_INPUT
  REQUESTS_EXPORT_CSV: COUNTDOWN_API_REQUESTS_EXPORT_CSV_INPUT
  REQUESTS_EXPORT_JSON: COUNTDOWN_API_REQUESTS_EXPORT_JSON_INPUT
  REQUESTS_LIST_REQUESTS_PAGED: COUNTDOWN_API_REQUESTS_LIST_REQUESTS_PAGED_INPUT
  REQUESTS_UPDATE_SINGLE_REQUEST: COUNTDOWN_API_REQUESTS_UPDATE_SINGLE_REQUEST_INPUT
  RESULTS_GET_RESULT_SET: COUNTDOWN_API_RESULTS_GET_RESULT_SET_INPUT
  RESULTS_LIST_RESULT_SETS: COUNTDOWN_API_RESULTS_LIST_RESULT_SETS_INPUT
  RESULTS_RESEND_RESULT_SET_WEBHOOK: COUNTDOWN_API_RESULTS_RESEND_RESULT_SET_WEBHOOK_INPUT
  STOP_ALL_COLLECTIONS: COUNTDOWN_API_STOP_ALL_COLLECTIONS_INPUT
  STOP_COLLECTION: COUNTDOWN_API_STOP_COLLECTION_INPUT
  UPDATE_DESTINATION: COUNTDOWN_API_UPDATE_DESTINATION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "COUNTDOWN_API".
 */
export type COUNTDOWN_API_TOOL_OUTPUTS = {
  CLEAR_ALL_REQUESTS: COUNTDOWN_API_CLEAR_ALL_REQUESTS_OUTPUT
  COLLECTIONS_CREATE_COLLECTION: COUNTDOWN_API_COLLECTIONS_CREATE_COLLECTION_OUTPUT
  COLLECTIONS_GET_COLLECTION: COUNTDOWN_API_COLLECTIONS_GET_COLLECTION_OUTPUT
  COLLECTIONS_LIST_COLLECTIONS: COUNTDOWN_API_COLLECTIONS_LIST_COLLECTIONS_OUTPUT
  COLLECTIONS_START_COLLECTION: COUNTDOWN_API_COLLECTIONS_START_COLLECTION_OUTPUT
  COLLECTIONS_UPDATE_COLLECTION: COUNTDOWN_API_COLLECTIONS_UPDATE_COLLECTION_OUTPUT
  CORE_API_SEND_REQUEST: COUNTDOWN_API_CORE_API_SEND_REQUEST_OUTPUT
  CREATE_DESTINATION: COUNTDOWN_API_CREATE_DESTINATION_OUTPUT
  DELETE_COLLECTION: COUNTDOWN_API_DELETE_COLLECTION_OUTPUT
  DELETE_DESTINATION: COUNTDOWN_API_DELETE_DESTINATION_OUTPUT
  DELETE_SINGLE_REQUEST: COUNTDOWN_API_DELETE_SINGLE_REQUEST_OUTPUT
  DESTINATIONS_LIST_DESTINATIONS: COUNTDOWN_API_DESTINATIONS_LIST_DESTINATIONS_OUTPUT
  GET_ACCOUNT: COUNTDOWN_API_GET_ACCOUNT_OUTPUT
  REQUESTS_EXPORT_CSV: COUNTDOWN_API_REQUESTS_EXPORT_CSV_OUTPUT
  REQUESTS_EXPORT_JSON: COUNTDOWN_API_REQUESTS_EXPORT_JSON_OUTPUT
  REQUESTS_LIST_REQUESTS_PAGED: COUNTDOWN_API_REQUESTS_LIST_REQUESTS_PAGED_OUTPUT
  REQUESTS_UPDATE_SINGLE_REQUEST: COUNTDOWN_API_REQUESTS_UPDATE_SINGLE_REQUEST_OUTPUT
  RESULTS_GET_RESULT_SET: COUNTDOWN_API_RESULTS_GET_RESULT_SET_OUTPUT
  RESULTS_LIST_RESULT_SETS: COUNTDOWN_API_RESULTS_LIST_RESULT_SETS_OUTPUT
  RESULTS_RESEND_RESULT_SET_WEBHOOK: COUNTDOWN_API_RESULTS_RESEND_RESULT_SET_WEBHOOK_OUTPUT
  STOP_ALL_COLLECTIONS: COUNTDOWN_API_STOP_ALL_COLLECTIONS_OUTPUT
  STOP_COLLECTION: COUNTDOWN_API_STOP_COLLECTION_OUTPUT
  UPDATE_DESTINATION: COUNTDOWN_API_UPDATE_DESTINATION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's COUNTDOWN_API toolkit.
 */
export const COUNTDOWN_API = {
  slug: "countdown_api",
  tools: {
    /**
     * Tool to clear all requests from a specified collection. Use when you need to remove all queued requests for an idle collection.
     */
    CLEAR_ALL_REQUESTS: "COUNTDOWN_API_CLEAR_ALL_REQUESTS",
    /**
     * Tool to create a new collection. Use when you need to batch and orchestrate multiple requests on a schedule.
     */
    COLLECTIONS_CREATE_COLLECTION: "COUNTDOWN_API_COLLECTIONS_CREATE_COLLECTION",
    /**
     * Tool to retrieve details for a single collection by ID. Use when you need collection metadata and counts for a given collection ID.
     */
    COLLECTIONS_GET_COLLECTION: "COUNTDOWN_API_COLLECTIONS_GET_COLLECTION",
    /**
     * Tool to list all collections for the authenticated account. Use when you need to retrieve paginated collections with filtering, sorting, and timing constraints.
     */
    COLLECTIONS_LIST_COLLECTIONS: "COUNTDOWN_API_COLLECTIONS_LIST_COLLECTIONS",
    /**
     * Tool to start processing a collection's queued requests. Use after creating or pausing a collection to initiate its queued requests.
     */
    COLLECTIONS_START_COLLECTION: "COUNTDOWN_API_COLLECTIONS_START_COLLECTION",
    /**
     * Tool to update an existing collection. Use when you need to modify collection settings before scheduling runs.
     */
    COLLECTIONS_UPDATE_COLLECTION: "COUNTDOWN_API_COLLECTIONS_UPDATE_COLLECTION",
    /**
     * Tool to fetch eBay autocomplete suggestions. Use when needing search-term-based suggestions from Countdown API.
     */
    CORE_API_SEND_REQUEST: "COUNTDOWN_API_CORE_API_SEND_REQUEST",
    /**
     * Tool to create a destination. Use when you need to set up a new destination for results or notifications.
     */
    CREATE_DESTINATION: "COUNTDOWN_API_CREATE_DESTINATION",
    /**
     * Tool to delete a collection and its configuration by ID. Use when you need to remove an existing, non-running collection.
     */
    DELETE_COLLECTION: "COUNTDOWN_API_DELETE_COLLECTION",
    /**
     * Tool to delete a destination by ID. Use when you need to remove an existing destination.
     */
    DELETE_DESTINATION: "COUNTDOWN_API_DELETE_DESTINATION",
    /**
     * Tool to remove a specific request from a collection. Use when you need to delete one request by ID.
     */
    DELETE_SINGLE_REQUEST: "COUNTDOWN_API_DELETE_SINGLE_REQUEST",
    /**
     * Tool to list all destinations configured for the account. Use when you need to inspect or paginate through configured destinations.
     */
    DESTINATIONS_LIST_DESTINATIONS: "COUNTDOWN_API_DESTINATIONS_LIST_DESTINATIONS",
    /**
     * Tool to retrieve account usage and current platform status. Use when needing to check plan, usage, and quota details for the authenticated user.
     */
    GET_ACCOUNT: "COUNTDOWN_API_GET_ACCOUNT",
    /**
     * Tool to export all requests in a collection as CSV download links. Use when you need per-page CSV URLs for a given collection.
     */
    REQUESTS_EXPORT_CSV: "COUNTDOWN_API_REQUESTS_EXPORT_CSV",
    /**
     * Tool to download all requests in a collection as JSON. Use when you need to export the entire request history for a collection.
     */
    REQUESTS_EXPORT_JSON: "COUNTDOWN_API_REQUESTS_EXPORT_JSON",
    /**
     * Tool to list requests for a collection by page. Use when you need to fetch a specific batch of up to 1000 requests for a given collection.
     */
    REQUESTS_LIST_REQUESTS_PAGED: "COUNTDOWN_API_REQUESTS_LIST_REQUESTS_PAGED",
    /**
     * Tool to modify parameters of an existing request in a collection. Use when the collection is not running and you need to update eBay Product Data API parameters.
     */
    REQUESTS_UPDATE_SINGLE_REQUEST: "COUNTDOWN_API_REQUESTS_UPDATE_SINGLE_REQUEST",
    /**
     * Tool to retrieve a collection run's result set payload. Use after a collection run completes to fetch metadata and download links.
     */
    RESULTS_GET_RESULT_SET: "COUNTDOWN_API_RESULTS_GET_RESULT_SET",
    /**
     * Tool to list result sets produced by a collection. Use when you need to retrieve all summary status of result sets generated by a collection within the 14-day retention window.
     */
    RESULTS_LIST_RESULT_SETS: "COUNTDOWN_API_RESULTS_LIST_RESULT_SETS",
    /**
     * Tool to resend the webhook for a previously generated result set. Use when a result set's webhook delivery needs a retry.
     */
    RESULTS_RESEND_RESULT_SET_WEBHOOK: "COUNTDOWN_API_RESULTS_RESEND_RESULT_SET_WEBHOOK",
    /**
     * Tool to stop all collections. Use when you need to halt any running or queued collections after reviewing operations.
     */
    STOP_ALL_COLLECTIONS: "COUNTDOWN_API_STOP_ALL_COLLECTIONS",
    /**
     * Tool to stop (pause) a single collection’s processing by ID. Use when you need to halt a running or queued collection after confirming the target collection ID.
     */
    STOP_COLLECTION: "COUNTDOWN_API_STOP_COLLECTION",
    /**
     * Tool to update a destination's configuration by ID. Use after creating or retrieving a destination to modify its settings.
     */
    UPDATE_DESTINATION: "COUNTDOWN_API_UPDATE_DESTINATION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "COUNTDOWN_API".
 */
export type COUNTDOWN_API_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "COUNTDOWN_API".
 */
export type COUNTDOWN_API_TRIGGER_EVENTS = {}
