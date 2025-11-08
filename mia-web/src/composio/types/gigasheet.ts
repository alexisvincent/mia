// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GIGASHEET's GIGASHEET_DELETE_DELETE_HANDLE tool input.
 */
type GIGASHEET_DELETE_DELETE_HANDLE_INPUT = {
  /**
   * Handle
   * @description Unique handle (identifier) of the sheet or folder to delete
   */
  handle?: string;
  /**
   * Recursive
   * @description If true, deletes a folder and all its children. Only applicable when handle refers to a folder
   * @default null
   */
  recursive: boolean | null;
};

/**
 * Type of GIGASHEET's GIGASHEET_DELETE_DELETE_HANDLE tool output.
 */
type GIGASHEET_DELETE_DELETE_HANDLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the delete operation succeeded
       */
      success: boolean;
  } & {
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
 * Type of GIGASHEET's GIGASHEET_GET_CLIENT_STATE_CURRENT_VERSION tool input.
 */
type GIGASHEET_GET_CLIENT_STATE_CURRENT_VERSION_INPUT = {
  /**
   * Handle
   * @description Unique identifier (handle) of the sheet whose client state version to retrieve.
   */
  handle?: string;
};

/**
 * Type of GIGASHEET's GIGASHEET_GET_CLIENT_STATE_CURRENT_VERSION tool output.
 */
type GIGASHEET_GET_CLIENT_STATE_CURRENT_VERSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Version
       * @description Version identifier for the current client state.
       * @default null
       */
      version: string | null;
  } & {
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
 * Type of GIGASHEET's GIGASHEET_GET_CONNECTORS_CONNECTIONS tool input.
 */
type GIGASHEET_GET_CONNECTORS_CONNECTIONS_INPUT = object;

/**
 * Type of GIGASHEET's GIGASHEET_GET_CONNECTORS_CONNECTIONS tool output.
 */
type GIGASHEET_GET_CONNECTORS_CONNECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connections
       * @description List of connector connections available to the authenticated user.
       */
      connections: {
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
 * Type of GIGASHEET's GIGASHEET_GET_DATASET_HANDLE tool input.
 */
type GIGASHEET_GET_DATASET_HANDLE_INPUT = {
  /**
   * Handle
   * @description Unique identifier (handle) of the dataset to retrieve.
   */
  handle?: string;
};

/**
 * Type of GIGASHEET's GIGASHEET_GET_DATASET_HANDLE tool output.
 */
type GIGASHEET_GET_DATASET_HANDLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Columns
       * @description List of columns in the dataset, including name and type.
       * @default null
       */
      columns: {
          /**
           * Name
           * @description Name of the column.
           */
          name: string;
          /**
           * Type
           * @description Data type of the column.
           */
          type: string;
      }[] | null;
      /**
       * Detailed Status
       * @description Additional status information when there is an error.
       * @default null
       */
      detailedStatus: string | null;
      /**
       * File Name
       * @description Original file name of the dataset.
       * @default null
       */
      fileName: string | null;
      /**
       * Modified Time
       * @description Timestamp of last modification of the dataset.
       * @default null
       */
      modifiedTime: string | null;
      /**
       * Status
       * @description Processing state of the dataset: loading, processing, processed, or error.
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
 * Type of GIGASHEET's GIGASHEET_GET_DATASET_HANDLE_COLUMNS tool input.
 */
type GIGASHEET_GET_DATASET_HANDLE_COLUMNS_INPUT = {
  /**
   * Handle
   * @description Unique identifier (handle) of the dataset whose columns to list.
   */
  handle?: string;
};

/**
 * Type of GIGASHEET's GIGASHEET_GET_DATASET_HANDLE_COLUMNS tool output.
 */
type GIGASHEET_GET_DATASET_HANDLE_COLUMNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Columns
       * @description List of column detail objects for the specified dataset handle.
       */
      columns: {
          /**
           * Id
           * @description Unique identifier of the column.
           */
          id: string;
          /**
           * Index
           * @description Zero-based index of the column in the dataset.
           * @default null
           */
          index: number | null;
          /**
           * Name
           * @description Display name of the column.
           */
          name: string;
          /**
           * Type
           * @description Data type of the column, if provided.
           * @default null
           */
          type: string | null;
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
 * Type of GIGASHEET's GIGASHEET_GET_DATASET_HANDLE_DOWNLOAD_EXPORT tool input.
 */
type GIGASHEET_GET_DATASET_HANDLE_DOWNLOAD_EXPORT_INPUT = {
  /**
   * Handle
   * @description Export handle returned by the Create Export endpoint (not the sheet handle).
   */
  handle?: string;
};

/**
 * Type of GIGASHEET's GIGASHEET_GET_DATASET_HANDLE_DOWNLOAD_EXPORT tool output.
 */
type GIGASHEET_GET_DATASET_HANDLE_DOWNLOAD_EXPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if request failed; empty string on success.
       */
      error: string;
      /**
       * Presigned Url
       * @description Temporary presigned S3 URL for the ZIP containing the exported CSV.
       */
      presignedUrl: string;
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
 * Type of GIGASHEET's GIGASHEET_GET_DATASET_HANDLE_VIEWS tool input.
 */
type GIGASHEET_GET_DATASET_HANDLE_VIEWS_INPUT = {
  /**
   * Handle
   * @description Unique identifier (handle) of the dataset for which to list views.
   */
  handle?: string;
};

/**
 * Type of GIGASHEET's GIGASHEET_GET_DATASET_HANDLE_VIEWS tool output.
 */
type GIGASHEET_GET_DATASET_HANDLE_VIEWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Views
       * @description List of views associated with the specified dataset
       */
      views: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the view was created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the view
           */
          id: string;
          /**
           * Name
           * @description Name of the view
           */
          name: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the view was last updated
           * @default null
           */
          updatedAt: string | null;
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
 * Type of GIGASHEET's GIGASHEET_GET_DOCS_FORMULAS_FUNCTIONS tool input.
 */
type GIGASHEET_GET_DOCS_FORMULAS_FUNCTIONS_INPUT = {
  /**
   * Accept
   * @description Accept header value to request response format
   * @default application/json
   */
  accept: string;
  /**
   * Flatten
   * @description If true, attempt to coerce dictionary responses into a list of functions
   * @default false
   */
  flatten: boolean;
};

/**
 * Type of GIGASHEET's GIGASHEET_GET_DOCS_FORMULAS_FUNCTIONS tool output.
 */
type GIGASHEET_GET_DOCS_FORMULAS_FUNCTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Functions
       * @description List of supported formula functions as generic dictionaries
       */
      functions: {
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
 * Type of GIGASHEET's GIGASHEET_GET_FILTER_TEMPLATES tool input.
 */
type GIGASHEET_GET_FILTER_TEMPLATES_INPUT = {
  /**
   * Page
   * @description Page number for paginated results (>= 1).
   * @default null
   */
  page: number | null;
};

/**
 * Type of GIGASHEET's GIGASHEET_GET_FILTER_TEMPLATES tool output.
 */
type GIGASHEET_GET_FILTER_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Templates
       * @description List of saved filter templates
       */
      templates: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the filter template was created
           * @default null
           */
          CreatedAt: string | null;
          /**
           * Id
           * @description Unique identifier of the saved filter template
           */
          Id: string;
          /**
           * Name
           * @description Name assigned to the saved filter template
           */
          Name: string;
          /**
           * Owner
           * @description Email of the owner of the filter template
           * @default null
           */
          Owner: string | null;
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
 * Type of GIGASHEET's GIGASHEET_GET_FILTER_TEMPLATE_ON_SHEET tool input.
 */
type GIGASHEET_GET_FILTER_TEMPLATE_ON_SHEET_INPUT = {
  /**
   * Filter Handle
   * @description The unique handle (ID) of the saved filter template to apply.
   */
  filter_handle?: string;
  /**
   * Handle
   * @description The unique handle (ID) of the target sheet/dataset.
   */
  handle?: string;
};

/**
 * Type of GIGASHEET's GIGASHEET_GET_FILTER_TEMPLATE_ON_SHEET tool output.
 */
type GIGASHEET_GET_FILTER_TEMPLATE_ON_SHEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp of creation (ISO 8601).
       */
      createdAt: string;
      /**
       * Filter Model
       * @description Filter model structure for use in filtering endpoints.
       */
      filterModel: {
          /**
           *  Cnf
           * @description List of CNF groups, each an OR-list of FilterClause items.
           */
          _cnf_: {
              /**
               * Colid
               * @description Column identifier, e.g., 'D'.
               */
              colId: string;
              /**
               * Filter
               * @description List of filter values to match.
               */
              filter: string[];
              /**
               * Filtertype
               * @description Type of filter, e.g., 'text'.
               */
              filterType: string;
              /**
               * Iscasesensitive
               * @description Whether the match is case sensitive.
               */
              isCaseSensitive: boolean;
              /**
               * Type
               * @description Condition type, e.g., 'containsAny', 'equals', etc.
               */
              type: string;
          }[][];
      };
      /**
       * Id
       * @description Saved filter's handle (ID).
       */
      id: string;
      /**
       * Name
       * @description Saved filter's name.
       */
      name: string;
      /**
       * Owner
       * @description Owner email of the saved filter.
       */
      owner: string;
      /**
       * Sheet
       * @description Handle of the sheet used to generate the model.
       */
      sheet: string;
      /**
       * Updated At
       * @description Timestamp of last update (ISO 8601).
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
 * Type of GIGASHEET's GIGASHEET_GET_GENERATE_HANDLE tool input.
 */
type GIGASHEET_GET_GENERATE_HANDLE_INPUT = object;

/**
 * Type of GIGASHEET's GIGASHEET_GET_GENERATE_HANDLE tool output.
 */
type GIGASHEET_GET_GENERATE_HANDLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Handle
       * @description Newly generated unique dataset handle (FileUuid).
       */
      handle: string;
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
 * Type of GIGASHEET's GIGASHEET_GET_USERS_AUTOFILL tool input.
 */
type GIGASHEET_GET_USERS_AUTOFILL_INPUT = {
  /**
   * Filters
   * @description Optional query parameters as key-value pairs to filter which users' autofill details are returned
   * @default null
   */
  filters: {
      [key: string]: string;
  } | null;
};

/**
 * Type of GIGASHEET's GIGASHEET_GET_USERS_AUTOFILL tool output.
 */
type GIGASHEET_GET_USERS_AUTOFILL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: string[];
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
 * Type of GIGASHEET's GIGASHEET_GET_USER_WHOAMI tool input.
 */
type GIGASHEET_GET_USER_WHOAMI_INPUT = object;

/**
 * Type of GIGASHEET's GIGASHEET_GET_USER_WHOAMI tool output.
 */
type GIGASHEET_GET_USER_WHOAMI_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Authenticated
       * @description True if the request was authenticated; false otherwise.
       */
      authenticated: boolean;
      /**
       * Username
       * @description Username associated with the provided API token; empty if no token provided.
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
 * Type of GIGASHEET's GIGASHEET_POST_DATASET_HANDLE_APPEND_BY_NAME tool input.
 */
type GIGASHEET_POST_DATASET_HANDLE_APPEND_BY_NAME_INPUT = {
  /**
   * Handle
   * @description Dataset (sheet) handle to append rows to
   */
  handle?: string;
  /**
   * Records
   * @description List of row objects to append; each object must use column names as keys
   */
  records?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of GIGASHEET's GIGASHEET_POST_DATASET_HANDLE_APPEND_BY_NAME tool output.
 */
type GIGASHEET_POST_DATASET_HANDLE_APPEND_BY_NAME_OUTPUT = {
  /**
   * Data
   * @description Complete JSON response from GigaSheet API
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
 * Type of GIGASHEET's GIGASHEET_POST_DATASET_HANDLE_EXPORT tool input.
 */
type GIGASHEET_POST_DATASET_HANDLE_EXPORT_INPUT = {
  /**
   * Grid State
   * @description Optional export state object containing filtering and view state. Should follow Gigasheet Filter Model structure.
   * @default null
   */
  gridState: {
      [key: string]: unknown;
  } | null;
  /**
   * Handle
   * @description Dataset (sheet) handle to export
   */
  handle?: string;
};

/**
 * Type of GIGASHEET's GIGASHEET_POST_DATASET_HANDLE_EXPORT tool output.
 */
type GIGASHEET_POST_DATASET_HANDLE_EXPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Handle
       * @description Handle of the queued export job. Use this handle to poll status and download the export when ready.
       */
      handle: string;
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
 * Type of GIGASHEET's GIGASHEET_POST_DATASET_HANDLE_INSERT_BLANK_ROW tool input.
 */
type GIGASHEET_POST_DATASET_HANDLE_INSERT_BLANK_ROW_INPUT = {
  /**
   * Handle
   * @description Dataset handle identifying the target dataset.
   */
  handle?: string;
  /**
   * Index
   * @description Zero-based index where the new blank row will be inserted.
   */
  index?: number;
};

/**
 * Type of GIGASHEET's GIGASHEET_POST_DATASET_HANDLE_INSERT_BLANK_ROW tool output.
 */
type GIGASHEET_POST_DATASET_HANDLE_INSERT_BLANK_ROW_OUTPUT = {
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
 * Type of GIGASHEET's GIGASHEET_POST_DATASET_HANDLE_RENAME_COLUMNS_TO_UNIQUE tool input.
 */
type GIGASHEET_POST_DATASET_HANDLE_RENAME_COLUMNS_TO_UNIQUE_INPUT = {
  /**
   * Handle
   * @description Dataset handle for which to ensure unique column names.
   */
  handle?: string;
};

/**
 * Type of GIGASHEET's GIGASHEET_POST_DATASET_HANDLE_RENAME_COLUMNS_TO_UNIQUE tool output.
 */
type GIGASHEET_POST_DATASET_HANDLE_RENAME_COLUMNS_TO_UNIQUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Raw JSON response from Gigasheet API.
       */
      result: {
          [key: string]: unknown;
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
 * Type of GIGASHEET's GIGASHEET_POST_DATASET_HANDLE_SAVE_CURRENT_VIEW tool input.
 */
type GIGASHEET_POST_DATASET_HANDLE_SAVE_CURRENT_VIEW_INPUT = {
  /**
   * Handle
   * @description Unique dataset handle under which to save the current view.
   */
  handle?: string;
};

/**
 * Type of GIGASHEET's GIGASHEET_POST_DATASET_HANDLE_SAVE_CURRENT_VIEW tool output.
 */
type GIGASHEET_POST_DATASET_HANDLE_SAVE_CURRENT_VIEW_OUTPUT = {
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
 * Type of GIGASHEET's GIGASHEET_POST_FILES_COMBINE_BY_NAME tool input.
 */
type GIGASHEET_POST_FILES_COMBINE_BY_NAME_INPUT = {
  /**
   * Column Name
   * @description Column header name to use as the key when combining files
   */
  columnName?: string;
  /**
   * File Handles
   * @description List of Gigasheet file handles to combine
   */
  fileHandles?: string[];
  /**
   * Output Name
   * @description Optional name for the newly combined file.
   * @default null
   */
  outputName: string | null;
};

/**
 * Type of GIGASHEET's GIGASHEET_POST_FILES_COMBINE_BY_NAME tool output.
 */
type GIGASHEET_POST_FILES_COMBINE_BY_NAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Handle
       * @description Handle of the newly combined file
       */
      handle: string;
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
 * Type of GIGASHEET's GIGASHEET_POST_FILE_HANDLE_FILTER_SHEET_ROW_NR tool input.
 */
type GIGASHEET_POST_FILE_HANDLE_FILTER_SHEET_ROW_NR_INPUT = {
  /**
   * Handle
   * @description Unique sheet handle (as returned by other Gigasheet file endpoints)
   */
  handle?: string;
  /**
   * Row Nr
   * @description Unfiltered row number (1-based) to translate into its index in the filtered view
   */
  row_nr?: number;
};

/**
 * Type of GIGASHEET's GIGASHEET_POST_FILE_HANDLE_FILTER_SHEET_ROW_NR tool output.
 */
type GIGASHEET_POST_FILE_HANDLE_FILTER_SHEET_ROW_NR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Row Index
       * @description Row index (1-based) in the filtered result for the given unfiltered row number
       */
      RowIndex: number;
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
 * Type of GIGASHEET's GIGASHEET_POST_MAVEN_EXPORT tool input.
 */
type GIGASHEET_POST_MAVEN_EXPORT_INPUT = {
  /**
   * Connector
   * @description Must be 'S3' to use the AWS S3 export connector.
   * @constant
   */
  connector?: "S3";
  /**
   * Export Handle
   * @description Handle of the pre-created Gigasheet export to deliver to S3.
   */
  exportHandle?: string;
  /**
   * Params
   * @description Connector-specific parameters for the export.
   */
  params?: {
      /**
       * Bucket Path
       * @description Full S3 path including bucket and optional prefix (e.g., 's3://MYBUCKET/path/'). Gigasheet appends a timestamped subfolder for the exported ZIP.
       */
      bucketPath: string;
  };
};

/**
 * Type of GIGASHEET's GIGASHEET_POST_MAVEN_EXPORT tool output.
 */
type GIGASHEET_POST_MAVEN_EXPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message or details returned by the service.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Status of the export request, e.g., 'queued' or 'completed'.
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
 * Type of GIGASHEET's GIGASHEET_POST_MAVEN_IMPORT tool input.
 */
type GIGASHEET_POST_MAVEN_IMPORT_INPUT = {
  /**
   * Connector
   * @description Connector type, must be 'S3' for S3 import
   * @constant
   */
  connector?: "S3";
  /**
   * Params
   * @description Container for S3 import-specific settings
   */
  params?: {
      /**
       * Bucket Path
       * @description Full S3 URI including bucket and optional prefix or exact key. If ending with '/' or only bucket, treated as prefix import; otherwise, exact object import. S3 Import limited to buckets in us-east-1 and objects smaller than 5 GB.
       */
      bucketPath: string;
  };
};

/**
 * Type of GIGASHEET's GIGASHEET_POST_MAVEN_IMPORT tool output.
 */
type GIGASHEET_POST_MAVEN_IMPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Details
       * @description Full JSON response payload from Gigasheet import endpoint
       */
      details: {
          [key: string]: unknown;
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
 * Type of GIGASHEET's GIGASHEET_POST_REQUEST_API_ACCESS tool input.
 */
type GIGASHEET_POST_REQUEST_API_ACCESS_INPUT = object;

/**
 * Type of GIGASHEET's GIGASHEET_POST_REQUEST_API_ACCESS tool output.
 */
type GIGASHEET_POST_REQUEST_API_ACCESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API, if any
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description True if the API access request was submitted successfully
       */
      success: boolean;
  } & {
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
 * Type of GIGASHEET's GIGASHEET_POST_UNROLL_DELIMITED_COLUMN_HANDLE_COLUMN tool input.
 */
type GIGASHEET_POST_UNROLL_DELIMITED_COLUMN_HANDLE_COLUMN_INPUT = {
  /**
   * Column
   * @description Name or identifier of the column to unroll.
   */
  column?: string;
  /**
   * Handle
   * @description Unique sheet handle/identifier.
   */
  handle?: string;
  /**
   * Split By
   * @description Delimiter to split the column values by (e.g., ',' or '|'). If not provided, the column must already be of an array type.
   * @default null
   */
  splitBy: string | null;
};

/**
 * Type of GIGASHEET's GIGASHEET_POST_UNROLL_DELIMITED_COLUMN_HANDLE_COLUMN tool output.
 */
type GIGASHEET_POST_UNROLL_DELIMITED_COLUMN_HANDLE_COLUMN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Operation Id
       * @description Unique identifier for the unroll operation.
       */
      operationId: string;
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
 * Type of GIGASHEET's GIGASHEET_POST_UPLOAD_URL tool input.
 */
type GIGASHEET_POST_UPLOAD_URL_INPUT = {
  /**
   * Name
   * @description Optional friendly filename to display in Gigasheet.
   * @default null
   */
  name: string | null;
  /**
   * Url
   * @description Public or pre-signed URL of the file to ingest.
   */
  url?: string;
};

/**
 * Type of GIGASHEET's GIGASHEET_POST_UPLOAD_URL tool output.
 */
type GIGASHEET_POST_UPLOAD_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if any; null on success.
       * @default null
       */
      error: string | null;
      /**
       * Handle
       * @description Handle (unique identifier) of the created sheet/file.
       */
      handle: string;
      /**
       * Message
       * @description Human-readable status message (e.g., 'File entry created').
       */
      message: string;
      /**
       * Success
       * @description Indicates whether the request succeeded.
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
 * Type of GIGASHEET's GIGASHEET_PUT_DATASET_HANDLE_CLIENTSTATE_VERSION tool input.
 */
type GIGASHEET_PUT_DATASET_HANDLE_CLIENTSTATE_VERSION_INPUT = {
  /**
   * Handle
   * @description Unique identifier for the dataset handle.
   */
  handle?: string;
  /**
   * Version
   * @description Client state version identifier to apply.
   */
  version?: string;
};

/**
 * Type of GIGASHEET's GIGASHEET_PUT_DATASET_HANDLE_CLIENTSTATE_VERSION tool output.
 */
type GIGASHEET_PUT_DATASET_HANDLE_CLIENTSTATE_VERSION_OUTPUT = {
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
 * Type of GIGASHEET's GIGASHEET_PUT_DATASET_HANDLE_COL_ROW_BY_NAME tool input.
 */
type GIGASHEET_PUT_DATASET_HANDLE_COL_ROW_BY_NAME_INPUT = {
  /**
   * Column
   * @description Name of the column to update. Must uniquely match an existing column.
   */
  column?: string;
  /**
   * Handle
   * @description Unique identifier (handle) of the dataset.
   */
  handle?: string;
  /**
   * Row
   * @description Row number to update (1-based index).
   */
  row?: number;
  /**
   * Value
   * @description New value to set for the specified cell. Can be any valid JSON value.
   */
  value?: unknown;
};

/**
 * Type of GIGASHEET's GIGASHEET_PUT_DATASET_HANDLE_COL_ROW_BY_NAME tool output.
 */
type GIGASHEET_PUT_DATASET_HANDLE_COL_ROW_BY_NAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Updated Cell
       * @description Object representing the updated cell, including row, column, and new value.
       */
      updatedCell: {
          [key: string]: unknown;
      };
  } & {
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
 * Type of GIGASHEET's GIGASHEET_PUT_FILE_HANDLE_SHARE_FILE tool input.
 */
type GIGASHEET_PUT_FILE_HANDLE_SHARE_FILE_INPUT = {
  /**
   * Emails
   * @description List of recipient email addresses to invite
   */
  emails?: string[];
  /**
   * Handle
   * @description Unique file handle to share
   */
  handle?: string;
  /**
   * Message
   * @description Optional message to include in the share invitation
   * @default null
   */
  message: string | null;
  /**
   * Permissions
   * @description List of permission codes to grant (e.g., [0] for view)
   */
  permissions?: number[];
};

/**
 * Type of GIGASHEET's GIGASHEET_PUT_FILE_HANDLE_SHARE_FILE tool output.
 */
type GIGASHEET_PUT_FILE_HANDLE_SHARE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invites
       * @description Details for each email invite, including status and permission code
       * @default null
       */
      invites: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the share invitation was sent successfully
       */
      success: boolean;
  } & {
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
 * Type of GIGASHEET's GIGASHEET_PUT_FILTER_TEMPLATES_FILTER_HANDLE tool input.
 */
type GIGASHEET_PUT_FILTER_TEMPLATES_FILTER_HANDLE_INPUT = {
  /**
   * Filter Model
   * @description Arbitrary JSON object defining the filter conditions per the Gigasheet Filter Model schema. Must include a top-level `_cnf_` array of OR groups.
   */
  filterModel?: {
      [key: string]: unknown;
  };
  /**
   * Filter Handle
   * @description Handle of the saved filter to create or update. Must be lowercase hex + digits + underscores.
   */
  filter_handle?: string;
  /**
   * Sheet
   * @description Optional sheet/dataset handle to associate the saved filter template with. Required by API when creating a new saved filter.
   * @default null
   */
  sheet: string | null;
};

/**
 * Type of GIGASHEET's GIGASHEET_PUT_FILTER_TEMPLATES_FILTER_HANDLE tool output.
 */
type GIGASHEET_PUT_FILTER_TEMPLATES_FILTER_HANDLE_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "GIGASHEET".
 */
export type GIGASHEET_TOOL_INPUTS = {
  DELETE_DELETE_HANDLE: GIGASHEET_DELETE_DELETE_HANDLE_INPUT
  GET_CLIENT_STATE_CURRENT_VERSION: GIGASHEET_GET_CLIENT_STATE_CURRENT_VERSION_INPUT
  GET_CONNECTORS_CONNECTIONS: GIGASHEET_GET_CONNECTORS_CONNECTIONS_INPUT
  GET_DATASET_HANDLE: GIGASHEET_GET_DATASET_HANDLE_INPUT
  GET_DATASET_HANDLE_COLUMNS: GIGASHEET_GET_DATASET_HANDLE_COLUMNS_INPUT
  GET_DATASET_HANDLE_DOWNLOAD_EXPORT: GIGASHEET_GET_DATASET_HANDLE_DOWNLOAD_EXPORT_INPUT
  GET_DATASET_HANDLE_VIEWS: GIGASHEET_GET_DATASET_HANDLE_VIEWS_INPUT
  GET_DOCS_FORMULAS_FUNCTIONS: GIGASHEET_GET_DOCS_FORMULAS_FUNCTIONS_INPUT
  GET_FILTER_TEMPLATES: GIGASHEET_GET_FILTER_TEMPLATES_INPUT
  GET_FILTER_TEMPLATE_ON_SHEET: GIGASHEET_GET_FILTER_TEMPLATE_ON_SHEET_INPUT
  GET_GENERATE_HANDLE: GIGASHEET_GET_GENERATE_HANDLE_INPUT
  GET_USERS_AUTOFILL: GIGASHEET_GET_USERS_AUTOFILL_INPUT
  GET_USER_WHOAMI: GIGASHEET_GET_USER_WHOAMI_INPUT
  POST_DATASET_HANDLE_APPEND_BY_NAME: GIGASHEET_POST_DATASET_HANDLE_APPEND_BY_NAME_INPUT
  POST_DATASET_HANDLE_EXPORT: GIGASHEET_POST_DATASET_HANDLE_EXPORT_INPUT
  POST_DATASET_HANDLE_INSERT_BLANK_ROW: GIGASHEET_POST_DATASET_HANDLE_INSERT_BLANK_ROW_INPUT
  POST_DATASET_HANDLE_RENAME_COLUMNS_TO_UNIQUE: GIGASHEET_POST_DATASET_HANDLE_RENAME_COLUMNS_TO_UNIQUE_INPUT
  POST_DATASET_HANDLE_SAVE_CURRENT_VIEW: GIGASHEET_POST_DATASET_HANDLE_SAVE_CURRENT_VIEW_INPUT
  POST_FILES_COMBINE_BY_NAME: GIGASHEET_POST_FILES_COMBINE_BY_NAME_INPUT
  POST_FILE_HANDLE_FILTER_SHEET_ROW_NR: GIGASHEET_POST_FILE_HANDLE_FILTER_SHEET_ROW_NR_INPUT
  POST_MAVEN_EXPORT: GIGASHEET_POST_MAVEN_EXPORT_INPUT
  POST_MAVEN_IMPORT: GIGASHEET_POST_MAVEN_IMPORT_INPUT
  POST_REQUEST_API_ACCESS: GIGASHEET_POST_REQUEST_API_ACCESS_INPUT
  POST_UNROLL_DELIMITED_COLUMN_HANDLE_COLUMN: GIGASHEET_POST_UNROLL_DELIMITED_COLUMN_HANDLE_COLUMN_INPUT
  POST_UPLOAD_URL: GIGASHEET_POST_UPLOAD_URL_INPUT
  PUT_DATASET_HANDLE_CLIENTSTATE_VERSION: GIGASHEET_PUT_DATASET_HANDLE_CLIENTSTATE_VERSION_INPUT
  PUT_DATASET_HANDLE_COL_ROW_BY_NAME: GIGASHEET_PUT_DATASET_HANDLE_COL_ROW_BY_NAME_INPUT
  PUT_FILE_HANDLE_SHARE_FILE: GIGASHEET_PUT_FILE_HANDLE_SHARE_FILE_INPUT
  PUT_FILTER_TEMPLATES_FILTER_HANDLE: GIGASHEET_PUT_FILTER_TEMPLATES_FILTER_HANDLE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GIGASHEET".
 */
export type GIGASHEET_TOOL_OUTPUTS = {
  DELETE_DELETE_HANDLE: GIGASHEET_DELETE_DELETE_HANDLE_OUTPUT
  GET_CLIENT_STATE_CURRENT_VERSION: GIGASHEET_GET_CLIENT_STATE_CURRENT_VERSION_OUTPUT
  GET_CONNECTORS_CONNECTIONS: GIGASHEET_GET_CONNECTORS_CONNECTIONS_OUTPUT
  GET_DATASET_HANDLE: GIGASHEET_GET_DATASET_HANDLE_OUTPUT
  GET_DATASET_HANDLE_COLUMNS: GIGASHEET_GET_DATASET_HANDLE_COLUMNS_OUTPUT
  GET_DATASET_HANDLE_DOWNLOAD_EXPORT: GIGASHEET_GET_DATASET_HANDLE_DOWNLOAD_EXPORT_OUTPUT
  GET_DATASET_HANDLE_VIEWS: GIGASHEET_GET_DATASET_HANDLE_VIEWS_OUTPUT
  GET_DOCS_FORMULAS_FUNCTIONS: GIGASHEET_GET_DOCS_FORMULAS_FUNCTIONS_OUTPUT
  GET_FILTER_TEMPLATES: GIGASHEET_GET_FILTER_TEMPLATES_OUTPUT
  GET_FILTER_TEMPLATE_ON_SHEET: GIGASHEET_GET_FILTER_TEMPLATE_ON_SHEET_OUTPUT
  GET_GENERATE_HANDLE: GIGASHEET_GET_GENERATE_HANDLE_OUTPUT
  GET_USERS_AUTOFILL: GIGASHEET_GET_USERS_AUTOFILL_OUTPUT
  GET_USER_WHOAMI: GIGASHEET_GET_USER_WHOAMI_OUTPUT
  POST_DATASET_HANDLE_APPEND_BY_NAME: GIGASHEET_POST_DATASET_HANDLE_APPEND_BY_NAME_OUTPUT
  POST_DATASET_HANDLE_EXPORT: GIGASHEET_POST_DATASET_HANDLE_EXPORT_OUTPUT
  POST_DATASET_HANDLE_INSERT_BLANK_ROW: GIGASHEET_POST_DATASET_HANDLE_INSERT_BLANK_ROW_OUTPUT
  POST_DATASET_HANDLE_RENAME_COLUMNS_TO_UNIQUE: GIGASHEET_POST_DATASET_HANDLE_RENAME_COLUMNS_TO_UNIQUE_OUTPUT
  POST_DATASET_HANDLE_SAVE_CURRENT_VIEW: GIGASHEET_POST_DATASET_HANDLE_SAVE_CURRENT_VIEW_OUTPUT
  POST_FILES_COMBINE_BY_NAME: GIGASHEET_POST_FILES_COMBINE_BY_NAME_OUTPUT
  POST_FILE_HANDLE_FILTER_SHEET_ROW_NR: GIGASHEET_POST_FILE_HANDLE_FILTER_SHEET_ROW_NR_OUTPUT
  POST_MAVEN_EXPORT: GIGASHEET_POST_MAVEN_EXPORT_OUTPUT
  POST_MAVEN_IMPORT: GIGASHEET_POST_MAVEN_IMPORT_OUTPUT
  POST_REQUEST_API_ACCESS: GIGASHEET_POST_REQUEST_API_ACCESS_OUTPUT
  POST_UNROLL_DELIMITED_COLUMN_HANDLE_COLUMN: GIGASHEET_POST_UNROLL_DELIMITED_COLUMN_HANDLE_COLUMN_OUTPUT
  POST_UPLOAD_URL: GIGASHEET_POST_UPLOAD_URL_OUTPUT
  PUT_DATASET_HANDLE_CLIENTSTATE_VERSION: GIGASHEET_PUT_DATASET_HANDLE_CLIENTSTATE_VERSION_OUTPUT
  PUT_DATASET_HANDLE_COL_ROW_BY_NAME: GIGASHEET_PUT_DATASET_HANDLE_COL_ROW_BY_NAME_OUTPUT
  PUT_FILE_HANDLE_SHARE_FILE: GIGASHEET_PUT_FILE_HANDLE_SHARE_FILE_OUTPUT
  PUT_FILTER_TEMPLATES_FILTER_HANDLE: GIGASHEET_PUT_FILTER_TEMPLATES_FILTER_HANDLE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GIGASHEET toolkit.
 */
export const GIGASHEET = {
  slug: "gigasheet",
  tools: {
    /**
     * Tool to delete a sheet or folder by handle. Use after obtaining the handle of a sheet or empty folder. Set recursive=True to delete all children of a folder.
     */
    DELETE_DELETE_HANDLE: "GIGASHEET_DELETE_DELETE_HANDLE",
    /**
     * Tool to fetch the current client-state version metadata for a sheet. Use after obtaining a sheet handle to determine the current version identifier for creating views.
     */
    GET_CLIENT_STATE_CURRENT_VERSION: "GIGASHEET_GET_CLIENT_STATE_CURRENT_VERSION",
    /**
     * Tool to list connector connections. Use after setting a valid Gigasheet API token.
     */
    GET_CONNECTORS_CONNECTIONS: "GIGASHEET_GET_CONNECTORS_CONNECTIONS",
    /**
     * Tool to get dataset metadata. Use after you have obtained the dataset handle.
     */
    GET_DATASET_HANDLE: "GIGASHEET_GET_DATASET_HANDLE",
    /**
     * Tool to list all column metadata (IDs, names, types) for a dataset. Use after obtaining a dataset handle.
     */
    GET_DATASET_HANDLE_COLUMNS: "GIGASHEET_GET_DATASET_HANDLE_COLUMNS",
    /**
     * Tool to retrieve the download URL for an exported dataset. Use after initiating an export and obtaining its handle.
     */
    GET_DATASET_HANDLE_DOWNLOAD_EXPORT: "GIGASHEET_GET_DATASET_HANDLE_DOWNLOAD_EXPORT",
    /**
     * Tool to list all views associated with a specific dataset. Use after confirming the dataset handle and its status.
     */
    GET_DATASET_HANDLE_VIEWS: "GIGASHEET_GET_DATASET_HANDLE_VIEWS",
    /**
     * Tool to retrieve all supported formula functions. Use after authenticating with a valid API token.
     */
    GET_DOCS_FORMULAS_FUNCTIONS: "GIGASHEET_GET_DOCS_FORMULAS_FUNCTIONS",
    /**
     * Tool to retrieve all saved filter templates. Use after authentication is confirmed.
     */
    GET_FILTER_TEMPLATES: "GIGASHEET_GET_FILTER_TEMPLATES",
    /**
     * Tool to fetch a saved filter template's model for a given sheet. Use when you need the exact filter structure for a specific sheet and template.
     */
    GET_FILTER_TEMPLATE_ON_SHEET: "GIGASHEET_GET_FILTER_TEMPLATE_ON_SHEET",
    /**
     * Tool to generate a new unique dataset handle. Use when you need a fresh FileUuid before creating or referencing datasets.
     */
    GET_GENERATE_HANDLE: "GIGASHEET_GET_GENERATE_HANDLE",
    /**
     * Tool to fetch autofill info for the authenticated user. Use after setting a valid Gigasheet API token.
     */
    GET_USERS_AUTOFILL: "GIGASHEET_GET_USERS_AUTOFILL",
    /**
     * Tool to fetch the authenticated user's details. Use after setting a valid Gigasheet API token.
     */
    GET_USER_WHOAMI: "GIGASHEET_GET_USER_WHOAMI",
    /**
     * Tool to append rows to a sheet by column names. Use after verifying the sheet handle and column names.
     */
    POST_DATASET_HANDLE_APPEND_BY_NAME: "GIGASHEET_POST_DATASET_HANDLE_APPEND_BY_NAME",
    /**
     * Tool to initiate an export of a dataset. Use when you need to queue an export job with optional filtering. Use after preparing any filter state. Example: Initiate export for sheet `sheet_abc123` with filters: `{"gridState": {"filterModel": { ... }}}`
     */
    POST_DATASET_HANDLE_EXPORT: "GIGASHEET_POST_DATASET_HANDLE_EXPORT",
    /**
     * Tool to insert a blank row with null values into a dataset. Use after determining the insertion index.
     */
    POST_DATASET_HANDLE_INSERT_BLANK_ROW: "GIGASHEET_POST_DATASET_HANDLE_INSERT_BLANK_ROW",
    /**
     * Tool to rename all columns in a dataset to unique names. Use when duplicate column names could cause conflicts in downstream processing.
     */
    POST_DATASET_HANDLE_RENAME_COLUMNS_TO_UNIQUE: "GIGASHEET_POST_DATASET_HANDLE_RENAME_COLUMNS_TO_UNIQUE",
    /**
     * Tool to persist the current view in a Gigasheet dataset. Use after configuring a view to ensure the current layout and filters are saved on the server.
     */
    POST_DATASET_HANDLE_SAVE_CURRENT_VIEW: "GIGASHEET_POST_DATASET_HANDLE_SAVE_CURRENT_VIEW",
    /**
     * Tool to combine multiple files by a shared column name. Use when you need to merge several Gigasheet files based on a common header.
     */
    POST_FILES_COMBINE_BY_NAME: "GIGASHEET_POST_FILES_COMBINE_BY_NAME",
    /**
     * Tool to retrieve the filtered-set row index for a given unfiltered row number. Use after applying filters when you need the row's position in the filtered view.
     */
    POST_FILE_HANDLE_FILTER_SHEET_ROW_NR: "GIGASHEET_POST_FILE_HANDLE_FILTER_SHEET_ROW_NR",
    /**
     * Tool to export Gigasheet data to AWS S3. Use after generating an export handle and ensuring the S3 bucket has correct permissions.
     */
    POST_MAVEN_EXPORT: "GIGASHEET_POST_MAVEN_EXPORT",
    /**
     * Tool to import data from AWS S3 into your Gigasheet Library. Use when you need to pull objects or prefixes from an S3 bucket into Gigasheet.
     */
    POST_MAVEN_IMPORT: "GIGASHEET_POST_MAVEN_IMPORT",
    /**
     * Tool to request access to the Gigasheet API. Use when you need to obtain an API key.
     */
    POST_REQUEST_API_ACCESS: "GIGASHEET_POST_REQUEST_API_ACCESS",
    /**
     * Tool to explode a column containing delimited data into multiple rows. Use after confirming dataset handle and target column.
     */
    POST_UNROLL_DELIMITED_COLUMN_HANDLE_COLUMN: "GIGASHEET_POST_UNROLL_DELIMITED_COLUMN_HANDLE_COLUMN",
    /**
     * Tool to upload data to Gigasheet from a specified URL. Use when you have a public or pre-signed link and want to ingest it directly.
     */
    POST_UPLOAD_URL: "GIGASHEET_POST_UPLOAD_URL",
    /**
     * Tool to set the client state version of a dataset. Use when you need to apply or revert to a saved client state version after data updates.
     */
    PUT_DATASET_HANDLE_CLIENTSTATE_VERSION: "GIGASHEET_PUT_DATASET_HANDLE_CLIENTSTATE_VERSION",
    /**
     * Tool to update a cell in a dataset by specifying column name and row number. Use after dataset is loaded and column name uniqueness is ensured.
     */
    PUT_DATASET_HANDLE_COL_ROW_BY_NAME: "GIGASHEET_PUT_DATASET_HANDLE_COL_ROW_BY_NAME",
    /**
     * Tool to share a Gigasheet file with specified recipients. Use after creating or updating a sheet to grant email-based access.
     */
    PUT_FILE_HANDLE_SHARE_FILE: "GIGASHEET_PUT_FILE_HANDLE_SHARE_FILE",
    /**
     * Tool to create or update a saved filter template. Use when you need to persist or modify filter criteria by providing a filter handle and the filter model.
     */
    PUT_FILTER_TEMPLATES_FILTER_HANDLE: "GIGASHEET_PUT_FILTER_TEMPLATES_FILTER_HANDLE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GIGASHEET".
 */
export type GIGASHEET_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GIGASHEET".
 */
export type GIGASHEET_TRIGGER_EVENTS = {}
