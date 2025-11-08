// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CODEREADR's CODEREADR_COLLECT_DATA_WITH_QUESTIONS tool input.
 */
type CODEREADR_COLLECT_DATA_WITH_QUESTIONS_INPUT = {
  /**
   * Questions
   * @description List of custom questions to collect after each scan.
   */
  questions?: {
      /**
       * Id
       * @description Existing question ID to update. Omit for new questions.
       * @default null
       */
      id: string | null;
      /**
       * Options
       * @description List of options for choice-based questions.
       * @default null
       */
      options: string[] | null;
      /**
       * Prompt
       * @description The question text to display after each scan.
       */
      prompt: string;
      /**
       * Required
       * @description Whether answering the question is mandatory.
       * @default false
       */
      required: boolean;
      /**
       * Type
       * @description The type of answer to collect.
       * @enum {string}
       */
      type: "text" | "number" | "single_choice" | "multi_choice";
  }[];
  /**
   * Service Id
   * @description ID of the service/workflow to attach questions to.
   */
  service_id?: string;
};

/**
 * Type of CODEREADR's CODEREADR_COLLECT_DATA_WITH_QUESTIONS tool output.
 */
type CODEREADR_COLLECT_DATA_WITH_QUESTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information returned by the API.
       * @default null
       */
      message: string | null;
      /**
       * Question Ids
       * @description IDs of the created or updated questions.
       */
      question_ids: string[];
      /**
       * Success
       * @description Whether the configuration was applied successfully.
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
 * Type of CODEREADR's CODEREADR_CONFIGURE_CONNECTOR tool input.
 */
type CODEREADR_CONFIGURE_CONNECTOR_INPUT = {
  /**
   * Include Legacy Probe
   * @description If true, also attempt a legacy section/action probe as a secondary check.
   * @default false
   */
  include_legacy_probe: boolean;
  /**
   * Note
   * @description Optional note to include in the resulting guidance message (for testing/logging).
   * @default null
   */
  note: string | null;
  /**
   * Perform Connectivity Check
   * @description If true, perform a lightweight API call to validate connectivity and API key.
   * @default true
   */
  perform_connectivity_check: boolean;
};

/**
 * Type of CODEREADR's CODEREADR_CONFIGURE_CONNECTOR tool output.
 */
type CODEREADR_CONFIGURE_CONNECTOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Instruction and diagnostics message for manual configuration
       */
      message: string;
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
 * Type of CODEREADR's CODEREADR_CONFIGURE_DSU tool input.
 */
type CODEREADR_CONFIGURE_DSU_INPUT = {
  /**
   * Postback Url
   * Format: uri
   * @description Destination URL where scanners will post scan results (DSU callback)
   */
  postback_url?: string;
  /**
   * Scan Properties
   * @description Key/value pairs to include with each scan for additional context or security
   * @default null
   */
  scan_properties: {
      [key: string]: unknown;
  } | null;
  /**
   * Service Id
   * @description ID of the service to configure DSU for
   */
  service_id?: number;
};

/**
 * Type of CODEREADR's CODEREADR_CONFIGURE_DSU tool output.
 */
type CODEREADR_CONFIGURE_DSU_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional message or error information from the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether DSU was configured successfully
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
 * Type of CODEREADR's CODEREADR_CONFIGURE_KIOSK_MODE tool input.
 */
type CODEREADR_CONFIGURE_KIOSK_MODE_INPUT = {
  /**
   * Android Screen Pinning
   * @description Enable Android screen pinning when true
   * @default null
   */
  android_screen_pinning: boolean | null;
  /**
   * Manual Input
   * @description Allow manual data entry when true
   * @default null
   */
  manual_input: boolean | null;
  /**
   * Pin
   * @description Administrator PIN to lock/unlock Kiosk Mode
   */
  pin?: string;
  /**
   * Stop Auto Next
   * @description Prevent automatic progression to next scan when true
   * @default null
   */
  stop_auto_next: boolean | null;
  /**
   * Webify
   * Format: uri
   * @description Custom URL for a branded portal; omit for default scan view
   * @default null
   */
  webify: string | null;
};

/**
 * Type of CODEREADR's CODEREADR_CONFIGURE_KIOSK_MODE tool output.
 */
type CODEREADR_CONFIGURE_KIOSK_MODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CODEREADR's CODEREADR_CONFIGURE_PICKING_DELIVERY_APP tool input.
 */
type CODEREADR_CONFIGURE_PICKING_DELIVERY_APP_INPUT = {
  /**
   * Dsu Postback Url
   * Format: uri
   * @description URL where direct scan results (DSU) are posted.
   */
  dsu_postback_url?: string;
  /**
   * Questions
   * @description List of questions to collect during picking, delivery, and receiving steps.
   */
  questions?: {
      /**
       * Id
       * @description Existing question ID to update; omit to create a new question.
       * @default null
       */
      id: string | null;
      /**
       * Options
       * @description Answer options for choice-based questions.
       * @default null
       */
      options: string[] | null;
      /**
       * Prompt
       * @description Question text to display during the workflow.
       */
      prompt: string;
      /**
       * Required
       * @description Whether this question must be answered before proceeding.
       * @default false
       */
      required: boolean;
      /**
       * Type
       * @description Type of answer to collect.
       * @enum {string}
       */
      type: "text" | "number" | "single_choice" | "multi_choice";
  }[];
  /**
   * Real Time Postback Url
   * Format: uri
   * @description HTTPS endpoint to receive real-time scan callbacks.
   */
  real_time_postback_url?: string;
  /**
   * Service Id
   * @description Identifier of the existing service to configure.
   */
  service_id?: number;
};

/**
 * Type of CODEREADR's CODEREADR_CONFIGURE_PICKING_DELIVERY_APP tool output.
 */
type CODEREADR_CONFIGURE_PICKING_DELIVERY_APP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Dsu */
      dsu: {
          /**
           * Message
           * @description Message returned from DSU configuration.
           * @default null
           */
          message: string | null;
          /**
           * Success
           * @description Indicates DSU configuration success.
           */
          success: boolean;
      };
      /** Postback */
      postback: {
          /**
           * Error
           * @description Error message if postback configuration fails.
           * @default null
           */
          error: string | null;
          /**
           * Status
           * @description 1 on success; 0 on failure for postback configuration.
           */
          status: number;
      };
      /** Questions */
      questions: {
          /**
           * Message
           * @description Additional info from questions API.
           * @default null
           */
          message: string | null;
          /**
           * Question Ids
           * @description IDs of created or updated questions.
           */
          question_ids: string[];
          /**
           * Success
           * @description Indicates questions configuration success.
           */
          success: boolean;
      };
      /**
       * Service Id
       * @description Configured service identifier.
       */
      service_id: number;
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
 * Type of CODEREADR's CODEREADR_CONFIGURE_POSTBACK_URL tool input.
 */
type CODEREADR_CONFIGURE_POSTBACK_URL_INPUT = {
  /**
   * Postback Url
   * Format: uri
   * @description HTTPS URL endpoint to receive real-time scan callbacks
   */
  postback_url?: string;
  /**
   * Scan Properties
   * @description Additional key/value pairs to include with each scan; will be JSON-encoded automatically
   * @default null
   */
  scan_properties: {
      [key: string]: unknown;
  } | null;
  /**
   * Service Id
   * @description Identifier of the existing CodeREADr service to configure
   */
  service_id?: number;
};

/**
 * Type of CODEREADR's CODEREADR_CONFIGURE_POSTBACK_URL tool output.
 */
type CODEREADR_CONFIGURE_POSTBACK_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the configuration fails
       * @default null
       */
      error: string | null;
      /**
       * Status
       * @description 1 on success; 0 on failure
       */
      status: number;
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
 * Type of CODEREADR's CODEREADR_CREATE_SERVICE tool input.
 */
type CODEREADR_CREATE_SERVICE_INPUT = {
  /**
   * Postback Url
   * Format: uri
   * @description Optional HTTPS endpoint to receive scan-postback (DSU) callbacks.
   * @default null
   */
  postback_url: string | null;
  /**
   * Scan Properties
   * @description Additional key/value properties to embed in each scan for added security. Will be JSON-encoded automatically.
   * @default null
   */
  scan_properties: {
      [key: string]: unknown;
  } | null;
  /**
   * Service Id
   * @description Optional ID to assign to the new service. If omitted, the server will generate one.
   * @default null
   */
  service_id: string | null;
  /**
   * Service Name
   * @description Human-readable name for the service to create.
   * @default null
   */
  service_name: string | null;
};

/**
 * Type of CODEREADR's CODEREADR_CREATE_SERVICE tool output.
 */
type CODEREADR_CREATE_SERVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CODEREADR's CODEREADR_DELETE_DATABASE tool input.
 */
type CODEREADR_DELETE_DATABASE_INPUT = {
  /**
   * Database Id
   * @description The unique identifier of the database to delete (UUID)
   */
  database_id?: string;
};

/**
 * Type of CODEREADR's CODEREADR_DELETE_DATABASE tool output.
 */
type CODEREADR_DELETE_DATABASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional message or information from the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the database was successfully deleted
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
 * Type of CODEREADR's CODEREADR_DELETE_DEVICE tool input.
 */
type CODEREADR_DELETE_DEVICE_INPUT = {
  /**
   * Device Id
   * @description Unique identifier of the device to delete
   */
  device_id?: string;
};

/**
 * Type of CODEREADR's CODEREADR_DELETE_DEVICE tool output.
 */
type CODEREADR_DELETE_DEVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Numeric status code returned by the server, if provided
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Additional message or information from the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the device was successfully deleted
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
 * Type of CODEREADR's CODEREADR_DELETE_QUESTION tool input.
 */
type CODEREADR_DELETE_QUESTION_INPUT = {
  /**
   * Question Id
   * @description Identifier of the custom question to delete. Accepts numeric ID or string.
   */
  question_id?: string;
};

/**
 * Type of CODEREADR's CODEREADR_DELETE_QUESTION tool output.
 */
type CODEREADR_DELETE_QUESTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API response message or details
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the question deletion was successful
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
 * Type of CODEREADR's CODEREADR_DELETE_SERVICE tool input.
 */
type CODEREADR_DELETE_SERVICE_INPUT = {
  /**
   * Service Id
   * @description Identifier of the service to delete (UUID or numeric ID)
   */
  service_id?: string;
};

/**
 * Type of CODEREADR's CODEREADR_DELETE_SERVICE tool output.
 */
type CODEREADR_DELETE_SERVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API response message or details
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the service deletion was successful
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
 * Type of CODEREADR's CODEREADR_DELETE_USER tool input.
 */
type CODEREADR_DELETE_USER_INPUT = {
  /**
   * User Id
   * @description The unique identifier of the user to delete
   */
  user_id?: string;
};

/**
 * Type of CODEREADR's CODEREADR_DELETE_USER tool output.
 */
type CODEREADR_DELETE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Numeric status code returned by the server, if provided
       * @default null
       */
      code: number | null;
      /**
       * Message
       * @description Server message regarding the deletion
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the deletion was successful
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
 * Type of CODEREADR's CODEREADR_GENERATE_SCAN_LINK tool input.
 */
type CODEREADR_GENERATE_SCAN_LINK_INPUT = {
  /**
   * Scan Id
   * @description The scan value to embed in the URI; this will pre-fill the scanner input.
   */
  scan_id?: string;
};

/**
 * Type of CODEREADR's CODEREADR_GENERATE_SCAN_LINK tool output.
 */
type CODEREADR_GENERATE_SCAN_LINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Scan Link
       * @description The fully formatted CodeREADr URI scheme link to launch the scanner.
       */
      scan_link: string;
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
 * Type of CODEREADR's CODEREADR_LIST_SUPPORTED_BARCODE_TYPES tool input.
 */
type CODEREADR_LIST_SUPPORTED_BARCODE_TYPES_INPUT = {
  /**
   * Limit
   * @description If provided, limit the number of returned items to this count (must be > 0).
   * @default null
   */
  limit: number | null;
  /**
   * Only Barcode Types
   * @description If True, filter the results to only known barcode symbologies.
   * @default false
   */
  only_barcode_types: boolean;
};

/**
 * Type of CODEREADR's CODEREADR_LIST_SUPPORTED_BARCODE_TYPES tool output.
 */
type CODEREADR_LIST_SUPPORTED_BARCODE_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Supported Barcode Types
       * @description List of barcode symbologies supported by CodeREADr
       */
      supported_barcode_types: string[];
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
 * Type of CODEREADR's CODEREADR_MANAGE_RESPONSE_FIELDS tool input.
 */
type CODEREADR_MANAGE_RESPONSE_FIELDS_INPUT = {
  /**
   * Fields
   * @description List of response field keys to include in each scan payload.
   */
  fields?: string[];
  /**
   * Service Id
   * @description Identifier of the service to configure response fields for.
   */
  service_id?: number;
};

/**
 * Type of CODEREADR's CODEREADR_MANAGE_RESPONSE_FIELDS tool output.
 */
type CODEREADR_MANAGE_RESPONSE_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fields
       * @description List of fields currently configured to be returned with scans.
       */
      fields: string[];
      /**
       * Message
       * @description Additional information or error message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the response fields were successfully updated.
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
 * Type of CODEREADR's CODEREADR_RETRIEVE_DATABASES tool input.
 */
type CODEREADR_RETRIEVE_DATABASES_INPUT = object;

/**
 * Type of CODEREADR's CODEREADR_RETRIEVE_DATABASES tool output.
 */
type CODEREADR_RETRIEVE_DATABASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Databases
       * @description List of configured validation databases (raw objects from API)
       */
      databases: {
          [key: string]: unknown;
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
 * Type of CODEREADR's CODEREADR_RETRIEVE_DEVICES tool input.
 */
type CODEREADR_RETRIEVE_DEVICES_INPUT = {
  /**
   * Page
   * @description Pagination page number (optional)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Items per page (optional)
   * @default null
   */
  per_page: number | null;
  /**
   * Search
   * @description Search term (optional)
   * @default null
   */
  search: string | null;
  /**
   * Status
   * @description Device status filter (optional)
   * @default null
   */
  status: string | null;
};

/**
 * Type of CODEREADR's CODEREADR_RETRIEVE_DEVICES tool output.
 */
type CODEREADR_RETRIEVE_DEVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Devices */
      devices: {
          [key: string]: unknown;
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
 * Type of CODEREADR's CODEREADR_RETRIEVE_SCANS tool input.
 */
type CODEREADR_RETRIEVE_SCANS_INPUT = {
  /**
   * End Date
   * Format: date-time
   * @description End timestamp for filtering scans (inclusive), ISO 8601 format.
   * @default null
   */
  end_date: string | null;
  /**
   * Return Type
   * @description Format of returned data; 'json' for JSON payload, 'csv' for raw CSV.
   * @default json
   * @enum {string}
   */
  return_type: "json" | "csv";
  /**
   * Start Date
   * Format: date-time
   * @description Start timestamp for filtering scans (inclusive), ISO 8601 format.
   * @default null
   */
  start_date: string | null;
  /**
   * Template
   * @description ID of CSV export template; required when return_type is 'csv'.
   * @default null
   */
  template: number | null;
};

/**
 * Type of CODEREADR's CODEREADR_RETRIEVE_SCANS tool output.
 */
type CODEREADR_RETRIEVE_SCANS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Scans
       * @description List of scan records when return_type is 'json'.
       * @default null
       */
      Scans: {
          /**
           * Barcode Value
           * @description Scanned barcode value.
           */
          BarcodeValue: string;
          /**
           * Batch Number
           * @description Batch number associated with the scan, if any.
           * @default null
           */
          BatchNumber: string | null;
          /**
           * Date Time
           * Format: date-time
           * @description Timestamp of the scan in ISO 8601 format.
           */
          DateTime: string;
          /**
           * Location Id
           * @description Identifier of the scan location.
           * @default null
           */
          LocationID: string | null;
          /**
           * Scan Id
           * @description Unique identifier for the scan record.
           */
          ScanID: string;
          /**
           * User Id
           * @description Identifier of the user who performed the scan.
           * @default null
           */
          UserID: string | null;
      }[] | null;
      /**
       * Csv
       * @description Raw CSV string returned when return_type is 'csv'.
       * @default null
       */
      csv: string | null;
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
 * Type of CODEREADR's CODEREADR_RETRIEVE_SERVICES tool input.
 */
type CODEREADR_RETRIEVE_SERVICES_INPUT = object;

/**
 * Type of CODEREADR's CODEREADR_RETRIEVE_SERVICES tool output.
 */
type CODEREADR_RETRIEVE_SERVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Services
       * @description List of configured services (raw objects from API)
       */
      services: {
          [key: string]: unknown;
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
 * Type of CODEREADR's CODEREADR_SET_ADMIN_PIN tool input.
 */
type CODEREADR_SET_ADMIN_PIN_INPUT = {
  /**
   * Device Id
   * @description Optional device ID to apply the PIN to a specific device
   * @default null
   */
  device_id: string | null;
  /**
   * Pin
   * @description Administrator PIN to set for Kiosk Mode
   */
  pin?: string;
  /**
   * Service Id
   * @description Optional service ID to apply the PIN to a specific service
   * @default null
   */
  service_id: number | null;
};

/**
 * Type of CODEREADR's CODEREADR_SET_ADMIN_PIN tool output.
 */
type CODEREADR_SET_ADMIN_PIN_OUTPUT = {
  /**
   * Data
   * @description Parsed JSON response from API if available
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status Code
   * @description HTTP status code returned by the API
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CODEREADR's CODEREADR_UPDATE_QUESTION tool input.
 */
type CODEREADR_UPDATE_QUESTION_INPUT = {
  /**
   * Options
   * @description List of response options to update or add.
   * @default null
   */
  options: {
      /**
       * Option Id
       * @description ID of the option to update. Omit to add a new option.
       * @default null
       */
      option_id: number | null;
      /**
       * Text
       * @description Text content of the option.
       */
      text: string;
  }[] | null;
  /**
   * Question Id
   * @description Unique identifier of the question to update.
   */
  question_id?: number;
  /**
   * Text
   * @description New question text. If omitted, original text remains unchanged.
   * @default null
   */
  text: string | null;
};

/**
 * Type of CODEREADR's CODEREADR_UPDATE_QUESTION tool output.
 */
type CODEREADR_UPDATE_QUESTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages if update failed.
       * @default null
       */
      errors: string[] | null;
      /**
       * Options
       * @description List of response options after update.
       * @default null
       */
      options: {
          /**
           * Option Id
           * @description ID of the option to update. Omit to add a new option.
           * @default null
           */
          option_id: number | null;
          /**
           * Text
           * @description Text content of the option.
           */
          text: string;
      }[] | null;
      /**
       * Question Id
       * @description ID of the updated question.
       * @default null
       */
      question_id: number | null;
      /**
       * Success
       * @description True if the update succeeded.
       */
      success: boolean;
      /**
       * Text
       * @description Updated text of the question.
       * @default null
       */
      text: string | null;
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
 * Type of CODEREADR's CODEREADR_UPDATE_SERVICE tool input.
 */
type CODEREADR_UPDATE_SERVICE_INPUT = {
  /**
   * Action
   * @description Must be set to 'update'
   * @default update
   * @constant
   */
  action: "update";
  /**
   * Api Key
   * @description Your CodeREADr API key
   */
  api_key?: string;
  /**
   * Auto Next Scan
   * @description Control Auto-Next Scan feature; valid values 0-3
   * @default null
   * @enum {integer|null}
   */
  auto_next_scan: 0 | 1 | 2 | 3 | null;
  /**
   * Auto Next Scan Delay
   * @description Delay before Auto-Next triggers, in seconds
   * @default null
   */
  auto_next_scan_delay: number | null;
  /**
   * Auto Sync
   * @description Enable automatic sync of on-device scans/DB updates
   * @default null
   * @enum {integer|null}
   */
  auto_sync: 0 | 1 | null;
  /**
   * Auto Sync Down Delay
   * @description Delay between checks for DB updates, in seconds
   * @default null
   */
  auto_sync_down_delay: number | null;
  /**
   * Auto Sync Down Url
   * @description 0=disable automatic DB downloads; 1=re-enable
   * @default null
   * @enum {integer|null}
   */
  auto_sync_down_url: 0 | 1 | null;
  /**
   * Auto Sync Up Delay
   * @description Delay between upload attempts, in seconds
   * @default null
   */
  auto_sync_up_delay: number | null;
  /**
   * Auto Sync Up Url
   * Format: uri
   * @description Directly sync scans to your Postback URL when auto_sync is enabled
   * @default null
   */
  auto_sync_up_url: string | null;
  /**
   * Block Camera Scan
   * @description 1=disallow camera scans; 0=allow (default 0)
   * @default null
   * @enum {integer|null}
   */
  block_camera_scan: 0 | 1 | null;
  /**
   * Block Db Search
   * @description 1=disallow DB lookup; 0=allow (default 0)
   * @default null
   * @enum {integer|null}
   */
  block_db_search: 0 | 1 | null;
  /**
   * Block Manual Scan
   * @description 1=disallow manual entry; 0=allow (default 0)
   * @default null
   * @enum {integer|null}
   */
  block_manual_scan: 0 | 1 | null;
  /**
   * Database Id
   * @description ID of the database (if validation_method is database or ondevicedatabase)
   * @default null
   */
  database_id: string | null;
  /**
   * Description
   * @description New or updated description
   * @default null
   */
  description: string | null;
  /**
   * Device Duplicate Value
   * @description Duplicate status for on-device duplicates (overridden if duplicate_value=0)
   * @default null
   * @enum {integer|null}
   */
  device_duplicate_value: 0 | 1 | null;
  /**
   * Direct History Url
   * Format: uri
   * @description URL to open when user taps History; empty disables
   * @default null
   */
  direct_history_url: string | null;
  /**
   * Direct Lookup Url
   * Format: uri
   * @description URL to open when user taps Lookup; empty disables
   * @default null
   */
  direct_lookup_url: string | null;
  /**
   * Duplicate Value
   * @description Duplicate scan status for database/on-device database services (1=valid, 0=invalid)
   * @default null
   * @enum {integer|null}
   */
  duplicate_value: 0 | 1 | null;
  /**
   * Enable Gps
   * @description Include GPS with each scan (default 0)
   * @default null
   * @enum {integer|null}
   */
  enableGPS: 0 | 1 | null;
  /**
   * Period End Date
   * @description Service end date (MM/DD/YYYY or YYYY-MM-DD)
   * @default null
   */
  period_end_date: string | null;
  /**
   * Period End Time
   * @description End time (hh:mm:ss or hh:mma)
   * @default null
   */
  period_end_time: string | null;
  /**
   * Period Start Date
   * @description Service start date (MM/DD/YYYY or YYYY-MM-DD)
   * @default null
   */
  period_start_date: string | null;
  /**
   * Period Start Time
   * @description Start time (hh:mm:ss or hh:mma)
   * @default null
   */
  period_start_time: string | null;
  /**
   * Postback Real Time Scans
   * @description Enable real-time postback of each online scan (requires postback_url)
   * @default null
   * @enum {integer|null}
   */
  postback_real_time_scans: 0 | 1 | null;
  /**
   * Postback Receiver Only
   * @description 1 if postback_url can only receive; 0 if it can receive and respond
   * @default null
   * @enum {integer|null}
   */
  postback_receiver_only: 0 | 1 | null;
  /**
   * Postback Uploaded Scans
   * @description Enable postback of each uploaded on-device scan (requires postback_url)
   * @default null
   * @enum {integer|null}
   */
  postback_uploaded_scans: 0 | 1 | null;
  /**
   * Postback Url
   * Format: uri
   * @description Destination URL where scans will be forwarded
   * @default null
   */
  postback_url: string | null;
  /**
   * Regex Response Pattern
   * @description Regex pattern to match in scan response; used with regex_response_replacement
   * @default null
   */
  regex_response_pattern: string | null;
  /**
   * Regex Response Replacement
   * @description Replacement value for regex_response_pattern; used together
   * @default null
   */
  regex_response_replacement: string | null;
  /**
   * Regex Scan Pattern
   * @description Regex pattern to match in scan value; used with regex_scan_replacement
   * @default null
   */
  regex_scan_pattern: string | null;
  /**
   * Regex Scan Replacement
   * @description Replacement value for regex_scan_pattern; used together
   * @default null
   */
  regex_scan_replacement: string | null;
  /**
   * Section
   * @description Must be set to 'services'
   * @default services
   * @constant
   */
  section: "services";
  /**
   * Service Id
   * @description The ID of the service to update
   */
  service_id?: number;
  /**
   * Service Name
   * @description New service name
   * @default null
   */
  service_name: string | null;
  /**
   * Symbologies
   * @description Comma-separated list of integer symbology IDs; omitting resets to default
   * @default null
   */
  symbologies: string | null;
  /**
   * Upload Email
   * Format: email
   * @description Email to receive CSV after each upload
   * @default null
   */
  upload_email: string | null;
  /**
   * Upload Email Format
   * @description CSV format for emailed uploads
   * @default null
   * @enum {string|null}
   */
  upload_email_format: "regular" | "properties" | null;
  /**
   * View Other Scans
   * @description 0=user sees own scans only; 1=sees all authorized users’ scans (default 1)
   * @default null
   * @enum {integer|null}
   */
  viewOtherScans: 0 | 1 | null;
};

/**
 * Type of CODEREADR's CODEREADR_UPDATE_SERVICE tool output.
 */
type CODEREADR_UPDATE_SERVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message when status is 0
       * @default null
       */
      error: string | null;
      /**
       * Status
       * @description 1 on success; 0 on failure
       */
      status: number;
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
 * Type map of all available tool input types for toolkit "CODEREADR".
 */
export type CODEREADR_TOOL_INPUTS = {
  COLLECT_DATA_WITH_QUESTIONS: CODEREADR_COLLECT_DATA_WITH_QUESTIONS_INPUT
  CONFIGURE_CONNECTOR: CODEREADR_CONFIGURE_CONNECTOR_INPUT
  CONFIGURE_DSU: CODEREADR_CONFIGURE_DSU_INPUT
  CONFIGURE_KIOSK_MODE: CODEREADR_CONFIGURE_KIOSK_MODE_INPUT
  CONFIGURE_PICKING_DELIVERY_APP: CODEREADR_CONFIGURE_PICKING_DELIVERY_APP_INPUT
  CONFIGURE_POSTBACK_URL: CODEREADR_CONFIGURE_POSTBACK_URL_INPUT
  CREATE_SERVICE: CODEREADR_CREATE_SERVICE_INPUT
  DELETE_DATABASE: CODEREADR_DELETE_DATABASE_INPUT
  DELETE_DEVICE: CODEREADR_DELETE_DEVICE_INPUT
  DELETE_QUESTION: CODEREADR_DELETE_QUESTION_INPUT
  DELETE_SERVICE: CODEREADR_DELETE_SERVICE_INPUT
  DELETE_USER: CODEREADR_DELETE_USER_INPUT
  GENERATE_SCAN_LINK: CODEREADR_GENERATE_SCAN_LINK_INPUT
  LIST_SUPPORTED_BARCODE_TYPES: CODEREADR_LIST_SUPPORTED_BARCODE_TYPES_INPUT
  MANAGE_RESPONSE_FIELDS: CODEREADR_MANAGE_RESPONSE_FIELDS_INPUT
  RETRIEVE_DATABASES: CODEREADR_RETRIEVE_DATABASES_INPUT
  RETRIEVE_DEVICES: CODEREADR_RETRIEVE_DEVICES_INPUT
  RETRIEVE_SCANS: CODEREADR_RETRIEVE_SCANS_INPUT
  RETRIEVE_SERVICES: CODEREADR_RETRIEVE_SERVICES_INPUT
  SET_ADMIN_PIN: CODEREADR_SET_ADMIN_PIN_INPUT
  UPDATE_QUESTION: CODEREADR_UPDATE_QUESTION_INPUT
  UPDATE_SERVICE: CODEREADR_UPDATE_SERVICE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CODEREADR".
 */
export type CODEREADR_TOOL_OUTPUTS = {
  COLLECT_DATA_WITH_QUESTIONS: CODEREADR_COLLECT_DATA_WITH_QUESTIONS_OUTPUT
  CONFIGURE_CONNECTOR: CODEREADR_CONFIGURE_CONNECTOR_OUTPUT
  CONFIGURE_DSU: CODEREADR_CONFIGURE_DSU_OUTPUT
  CONFIGURE_KIOSK_MODE: CODEREADR_CONFIGURE_KIOSK_MODE_OUTPUT
  CONFIGURE_PICKING_DELIVERY_APP: CODEREADR_CONFIGURE_PICKING_DELIVERY_APP_OUTPUT
  CONFIGURE_POSTBACK_URL: CODEREADR_CONFIGURE_POSTBACK_URL_OUTPUT
  CREATE_SERVICE: CODEREADR_CREATE_SERVICE_OUTPUT
  DELETE_DATABASE: CODEREADR_DELETE_DATABASE_OUTPUT
  DELETE_DEVICE: CODEREADR_DELETE_DEVICE_OUTPUT
  DELETE_QUESTION: CODEREADR_DELETE_QUESTION_OUTPUT
  DELETE_SERVICE: CODEREADR_DELETE_SERVICE_OUTPUT
  DELETE_USER: CODEREADR_DELETE_USER_OUTPUT
  GENERATE_SCAN_LINK: CODEREADR_GENERATE_SCAN_LINK_OUTPUT
  LIST_SUPPORTED_BARCODE_TYPES: CODEREADR_LIST_SUPPORTED_BARCODE_TYPES_OUTPUT
  MANAGE_RESPONSE_FIELDS: CODEREADR_MANAGE_RESPONSE_FIELDS_OUTPUT
  RETRIEVE_DATABASES: CODEREADR_RETRIEVE_DATABASES_OUTPUT
  RETRIEVE_DEVICES: CODEREADR_RETRIEVE_DEVICES_OUTPUT
  RETRIEVE_SCANS: CODEREADR_RETRIEVE_SCANS_OUTPUT
  RETRIEVE_SERVICES: CODEREADR_RETRIEVE_SERVICES_OUTPUT
  SET_ADMIN_PIN: CODEREADR_SET_ADMIN_PIN_OUTPUT
  UPDATE_QUESTION: CODEREADR_UPDATE_QUESTION_OUTPUT
  UPDATE_SERVICE: CODEREADR_UPDATE_SERVICE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CODEREADR toolkit.
 */
export const CODEREADR = {
  slug: "codereadr",
  tools: {
    /**
     * Tool to configure data collection forms by adding custom questions. Use after creating a service to collect survey questions after each scan.
     */
    COLLECT_DATA_WITH_QUESTIONS: "CODEREADR_COLLECT_DATA_WITH_QUESTIONS",
    /**
     * Helper to guide configuring the CodeREADr Connector for Google Sheets. There is no public API to programmatically create connector configurations. This tool validates your API connectivity (optional) and returns clear steps to proceed via the Google Sheets Add-on UI: https://www.codereadr.com/knowledgebase/codereadr-connector-add-on/
     */
    CONFIGURE_CONNECTOR: "CODEREADR_CONFIGURE_CONNECTOR",
    /**
     * Tool to configure a Direct Scan URL (DSU). Use after obtaining a valid service ID to set up scan callbacks. Use when you need to enable or update the DSU postback settings for a CodeREADr service.
     */
    CONFIGURE_DSU: "CODEREADR_CONFIGURE_DSU",
    /**
     * Tool to enable and configure Kiosk Mode for unattended scanning. Use when setting up a dedicated scanning kiosk after service setup.
     */
    CONFIGURE_KIOSK_MODE: "CODEREADR_CONFIGURE_KIOSK_MODE",
    /**
     * Tool to configure the complete picking, delivery, and receiving workflow. Use when setting up scan workflow endpoints for an existing CodeREADr service.
     */
    CONFIGURE_PICKING_DELIVERY_APP: "CODEREADR_CONFIGURE_PICKING_DELIVERY_APP",
    /**
     * Tool to configure a real-time postback URL for a CodeREADr service. Use when you need to set up or modify scan forwarding for an existing service.
     */
    CONFIGURE_POSTBACK_URL: "CODEREADR_CONFIGURE_POSTBACK_URL",
    /**
     * Tool to create a new workflow configuration (service) for scanning tasks. Use after obtaining a valid API key when registering a new Service.
     */
    CREATE_SERVICE: "CODEREADR_CREATE_SERVICE",
    /**
     * Tool to delete an existing CodeREADr database. Use when you need to remove a database by its ID after confirming you no longer need its data. Example prompt: "Delete database with ID 123e4567-e89b-12d3-a456-426614174000".
     */
    DELETE_DATABASE: "CODEREADR_DELETE_DATABASE",
    /**
     * Tool to delete a device. Attempts the REST endpoint first and falls back to the legacy section/action API as needed. Parses JSON, XML, or text heuristically to avoid brittle failures.
     */
    DELETE_DEVICE: "CODEREADR_DELETE_DEVICE",
    /**
     * Tool to delete an existing custom question. Attempts the documented REST endpoint first; if unavailable, falls back to the legacy section/action API.
     */
    DELETE_QUESTION: "CODEREADR_DELETE_QUESTION",
    /**
     * Tool to delete an existing CodeREADr service. Use when you need to remove a service by its ID. Example prompt: "Delete service with ID 123e4567-e89b-12d3-a456-426614174000".
     */
    DELETE_SERVICE: "CODEREADR_DELETE_SERVICE",
    /**
     * Tool to delete an existing user account. Attempts the REST endpoint first and falls back to the legacy section/action API if needed.
     */
    DELETE_USER: "CODEREADR_DELETE_USER",
    /**
     * Tool to generate a CodeREADr scan link URI. Use when you want to open the CodeREADr app’s scanner pre-filled with a specific ID.
     */
    GENERATE_SCAN_LINK: "CODEREADR_GENERATE_SCAN_LINK",
    /**
     * Tool to list supported barcode types. Use when you need to know which symbologies CodeREADr can scan.
     */
    LIST_SUPPORTED_BARCODE_TYPES: "CODEREADR_LIST_SUPPORTED_BARCODE_TYPES",
    /**
     * Tool to create or update response fields returned with scan data. Use when customizing which fields to include in scan payloads.
     */
    MANAGE_RESPONSE_FIELDS: "CODEREADR_MANAGE_RESPONSE_FIELDS",
    /**
     * Tool to list all validation databases. Use when you need to fetch the configured scan-validation databases in your CodeREADr account after authentication.
     */
    RETRIEVE_DATABASES: "CODEREADR_RETRIEVE_DATABASES",
    /**
     * Tool to fetch registered devices. Use when you need to list all devices in your CodeREADr account.
     */
    RETRIEVE_DEVICES: "CODEREADR_RETRIEVE_DEVICES",
    /**
     * Tool to retrieve bulk scan records. Use after specifying filters to fetch scan history in JSON or CSV for reporting.
     */
    RETRIEVE_SCANS: "CODEREADR_RETRIEVE_SCANS",
    /**
     * Tool to list all services. Use when you need to fetch configured services in your CodeREADr account after authentication.
     */
    RETRIEVE_SERVICES: "CODEREADR_RETRIEVE_SERVICES",
    /**
     * Tool to set or update the administrator PIN for Kiosk Mode. Use when updating the global or device/service-specific kiosk admin PIN.
     */
    SET_ADMIN_PIN: "CODEREADR_SET_ADMIN_PIN",
    /**
     * Tool to update an existing custom question. Use when you need to modify question text or response options after creation. Use after confirming the question_id.
     */
    UPDATE_QUESTION: "CODEREADR_UPDATE_QUESTION",
    /**
     * Tool to update an existing service configuration. Use when you need to change settings of a CodeREADr service by ID.
     */
    UPDATE_SERVICE: "CODEREADR_UPDATE_SERVICE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CODEREADR".
 */
export type CODEREADR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CODEREADR".
 */
export type CODEREADR_TRIGGER_EVENTS = {}
