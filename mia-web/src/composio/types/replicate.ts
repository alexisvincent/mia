// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of REPLICATE's REPLICATE_COLLECTIONS_LIST tool input.
 */
type REPLICATE_COLLECTIONS_LIST_INPUT = object;

/**
 * Type of REPLICATE's REPLICATE_COLLECTIONS_LIST tool output.
 */
type REPLICATE_COLLECTIONS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description URL to fetch the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to fetch the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of collections returned in this page
       */
      results: {
          /**
           * Description
           * @description Description of what the collection contains
           */
          description: string;
          /**
           * Name
           * @description Name of the collection
           */
          name: string;
          /**
           * Slug
           * @description Slug identifier of the collection
           */
          slug: string;
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
 * Type of REPLICATE's REPLICATE_CREATE_FILE tool input.
 */
type REPLICATE_CREATE_FILE_INPUT = {
  /**
   * Content
   * Format: binary
   * @description Raw file content as bytes
   */
  content?: string;
  /**
   * Filename
   * @description Filename for the file (UTF-8, max 255 bytes)
   */
  filename?: string;
  /**
   * Metadata
   * @description Optional JSON metadata associated with the file
   * @default {}
   */
  metadata: {
      [key: string]: unknown;
  };
  /**
   * Type
   * @description MIME type of the file
   * @default application/octet-stream
   */
  type: string;
};

/**
 * Type of REPLICATE's REPLICATE_CREATE_FILE tool output.
 */
type REPLICATE_CREATE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp the file was created
       */
      created_at: string;
      /**
       * Filename
       * @description Name of the file
       */
      filename: string;
      /**
       * Id
       * @description Unique ID of the file
       */
      id: string;
      /**
       * Metadata
       * @description User-provided metadata
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Object
       * @description The object type, always 'file'
       */
      object: string;
      /**
       * Size
       * @description Size of the file in bytes
       */
      size: number;
      /**
       * Type
       * @description MIME type of the file
       */
      type: string;
      /**
       * Url
       * @description URL to download the file
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
 * Type of REPLICATE's REPLICATE_CREATE_PREDICTION tool input.
 */
type REPLICATE_CREATE_PREDICTION_INPUT = {
  /**
   * Deployment Name
   * @description Name of the deployment
   */
  deployment_name?: string;
  /**
   * Deployment Owner
   * @description User or organization that owns the deployment
   */
  deployment_owner?: string;
  /**
   * Input
   * @description JSON object of inputs for the model
   */
  input?: {
      [key: string]: unknown;
  };
  /**
   * Wait For
   * @description Seconds to wait for prediction completion; adds a 'Prefer: wait=<n>' header if provided
   * @default null
   */
  wait_for: number | null;
  /**
   * Webhook
   * @description HTTPS URL to receive webhook callbacks
   * @default null
   */
  webhook: string | null;
  /**
   * Webhook Events Filter
   * @description List of events to trigger webhook calls
   * @default null
   */
  webhook_events_filter: string[] | null;
};

/**
 * Type of REPLICATE's REPLICATE_CREATE_PREDICTION tool output.
 */
type REPLICATE_CREATE_PREDICTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Completed At
       * @description Timestamp when the prediction completed (ISO 8601), if available
       * @default null
       */
      completed_at: string | null;
      /**
       * Created At
       * @description Timestamp when the prediction was created (ISO 8601)
       */
      created_at: string;
      /**
       * Error
       * @description Error message if the prediction failed
       * @default null
       */
      error: string | null;
      /**
       * Id
       * @description Unique identifier of the prediction
       */
      id: string;
      /**
       * Input
       * @description Input provided for the prediction
       */
      input: {
          [key: string]: unknown;
      };
      /**
       * Logs
       * @description Logs generated during the prediction
       */
      logs: string;
      /**
       * Metrics
       * @description Performance metrics for the prediction, e.g., predict_time
       */
      metrics: {
          [key: string]: unknown;
      };
      /**
       * Model
       * @description Model associated with this prediction
       */
      model: string;
      /**
       * Output
       * @description Output of the prediction if completed
       * @default null
       */
      output: unknown;
      /**
       * Status
       * @description Current status of the prediction (e.g., 'starting', 'processing', 'succeeded', 'failed', 'canceled')
       */
      status: string;
      /**
       * Urls
       * @description Endpoints to get or cancel the prediction
       */
      urls: {
          /**
           * Cancel
           * @description URL to cancel the in-progress prediction
           */
          cancel: string;
          /**
           * Get
           * @description URL to retrieve the prediction's current status and results
           */
          get: string;
      };
      /**
       * Version
       * @description Version of the model used in prediction
       */
      version: string;
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
 * Type of REPLICATE's REPLICATE_FILES_GET tool input.
 */
type REPLICATE_FILES_GET_INPUT = {
  /**
   * File Id
   * @description The ID of the file to retrieve
   */
  file_id?: string;
};

/**
 * Type of REPLICATE's REPLICATE_FILES_GET tool output.
 */
type REPLICATE_FILES_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Type
       * @description The MIME type of the file
       */
      content_type: string;
      /**
       * Created At
       * @description Timestamp when the file was created (ISO 8601)
       */
      created_at: string;
      /**
       * Filename
       * @description The name of the file
       */
      filename: string;
      /**
       * Id
       * @description The unique identifier of the file
       */
      id: string;
      /**
       * Metadata
       * @description User-provided metadata associated with the file
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Size
       * @description Size of the file in bytes, must be non-negative
       */
      size: number;
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
 * Type of REPLICATE's REPLICATE_FILES_LIST tool input.
 */
type REPLICATE_FILES_LIST_INPUT = object;

/**
 * Type of REPLICATE's REPLICATE_FILES_LIST tool output.
 */
type REPLICATE_FILES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description URL to fetch the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to fetch the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of files returned in this page
       */
      results: {
          /**
           * Content Type
           * @description MIME type of the file
           */
          content_type: string;
          /**
           * Created At
           * @description Timestamp when the file was created (ISO 8601)
           */
          created_at: string;
          /**
           * Filename
           * @description Name of the file
           */
          filename: string;
          /**
           * Id
           * @description Unique identifier of the file
           */
          id: string;
          /**
           * Metadata
           * @description User-provided metadata associated with the file
           */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Size
           * @description Size of the file in bytes, must be non-negative
           */
          size: number;
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
 * Type of REPLICATE's REPLICATE_MODELS_EXAMPLES_LIST tool input.
 */
type REPLICATE_MODELS_EXAMPLES_LIST_INPUT = {
  /**
   * Model Name
   * @description The name of the model to list examples for.
   */
  model_name?: string;
  /**
   * Model Owner
   * @description The name of the user or organization that owns the model.
   */
  model_owner?: string;
};

/**
 * Type of REPLICATE's REPLICATE_MODELS_EXAMPLES_LIST tool output.
 */
type REPLICATE_MODELS_EXAMPLES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description URL to fetch the next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to fetch the previous page of results, if any.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of example prediction objects.
       */
      results: {
          /**
           * Completed At
           * @description Timestamp when the example completed (ISO 8601), if available.
           * @default null
           */
          completed_at: string | null;
          /**
           * Created At
           * @description Timestamp when the example was created (ISO 8601).
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the example prediction.
           */
          id: string;
          /**
           * Input
           * @description Input JSON object provided to the model for the example.
           */
          input: {
              [key: string]: unknown;
          };
          /**
           * Metrics
           * @description Metrics collected for the example prediction, e.g., predict time.
           */
          metrics: {
              [key: string]: unknown;
          };
          /**
           * Output
           * @description Output produced by the model for the example, may be a URL, object, or string.
           */
          output: string | null;
          /**
           * Status
           * @description Status of the example prediction, e.g., 'succeeded'.
           */
          status: string;
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
 * Type of REPLICATE's REPLICATE_MODELS_GET tool input.
 */
type REPLICATE_MODELS_GET_INPUT = {
  /**
   * Model Name
   * @description The name of the model, e.g., 'hello-world'
   */
  model_name?: string;
  /**
   * Model Owner
   * @description The username or organization that owns the model, e.g., 'replicate'
   */
  model_owner?: string;
};

/**
 * Type of REPLICATE's REPLICATE_MODELS_GET tool output.
 */
type REPLICATE_MODELS_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cover Image Url
       * @description URL to the model's cover image, if any
       * @default null
       */
      cover_image_url: string | null;
      /**
       * Default Example
       * @description Default example prediction object for the model, if provided
       * @default null
       */
      default_example: {
          [key: string]: unknown;
      } | null;
      /**
       * Description
       * @description Description of the model
       */
      description: string;
      /**
       * Github Url
       * @description URL to the model's GitHub repository, if any
       * @default null
       */
      github_url: string | null;
      /**
       * Latest Version
       * @description Metadata for the latest version of the model, including id, created_at, cog_version, openapi_schema
       */
      latest_version: {
          [key: string]: unknown;
      };
      /**
       * License Url
       * @description URL to the license of the model, if any
       * @default null
       */
      license_url: string | null;
      /**
       * Name
       * @description Name of the model
       */
      name: string;
      /**
       * Owner
       * @description Owner (username or organization) of the model
       */
      owner: string;
      /**
       * Paper Url
       * @description URL to the paper associated with the model, if any
       * @default null
       */
      paper_url: string | null;
      /**
       * Run Count
       * @description Total number of times the model has been run
       */
      run_count: number;
      /**
       * Url
       * @description Canonical URL of the model
       */
      url: string;
      /**
       * Visibility
       * @description Visibility of the model, either 'public' or 'private'
       */
      visibility: string;
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
 * Type of REPLICATE's REPLICATE_MODELS_README_GET tool input.
 */
type REPLICATE_MODELS_README_GET_INPUT = {
  /**
   * Model Name
   * @description The name of the model, e.g., 'hello-world'
   */
  model_name?: string;
  /**
   * Model Owner
   * @description The username or organization that owns the model, e.g., 'replicate'
   */
  model_owner?: string;
};

/**
 * Type of REPLICATE's REPLICATE_MODELS_README_GET tool output.
 */
type REPLICATE_MODELS_README_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The README content for the specified model in Markdown format
       */
      content: string;
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
 * Type map of all available tool input types for toolkit "REPLICATE".
 */
export type REPLICATE_TOOL_INPUTS = {
  COLLECTIONS_LIST: REPLICATE_COLLECTIONS_LIST_INPUT
  CREATE_FILE: REPLICATE_CREATE_FILE_INPUT
  CREATE_PREDICTION: REPLICATE_CREATE_PREDICTION_INPUT
  FILES_GET: REPLICATE_FILES_GET_INPUT
  FILES_LIST: REPLICATE_FILES_LIST_INPUT
  MODELS_EXAMPLES_LIST: REPLICATE_MODELS_EXAMPLES_LIST_INPUT
  MODELS_GET: REPLICATE_MODELS_GET_INPUT
  MODELS_README_GET: REPLICATE_MODELS_README_GET_INPUT
}

/**
 * Type map of all available tool input types for toolkit "REPLICATE".
 */
export type REPLICATE_TOOL_OUTPUTS = {
  COLLECTIONS_LIST: REPLICATE_COLLECTIONS_LIST_OUTPUT
  CREATE_FILE: REPLICATE_CREATE_FILE_OUTPUT
  CREATE_PREDICTION: REPLICATE_CREATE_PREDICTION_OUTPUT
  FILES_GET: REPLICATE_FILES_GET_OUTPUT
  FILES_LIST: REPLICATE_FILES_LIST_OUTPUT
  MODELS_EXAMPLES_LIST: REPLICATE_MODELS_EXAMPLES_LIST_OUTPUT
  MODELS_GET: REPLICATE_MODELS_GET_OUTPUT
  MODELS_README_GET: REPLICATE_MODELS_README_GET_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's REPLICATE toolkit.
 */
export const REPLICATE = {
  slug: "replicate",
  tools: {
    /**
     * Tool to list all collections of models. use when you need to retrieve available model collections.
     */
    COLLECTIONS_LIST: "REPLICATE_COLLECTIONS_LIST",
    /**
     * Tool to create a file by uploading content. use when you need to upload and store a file for later reference.
     */
    CREATE_FILE: "REPLICATE_CREATE_FILE",
    /**
     * Tool to create a prediction for a given deployment. use when you need to run model inference with specified inputs. use 'wait for' to wait until the prediction completes.
     */
    CREATE_PREDICTION: "REPLICATE_CREATE_PREDICTION",
    /**
     * Tool to get details of a file by its id. use when you need to inspect uploaded file information before further operations.
     */
    FILES_GET: "REPLICATE_FILES_GET",
    /**
     * Tool to list all files created by the user or organization. use after authenticating to fetch files list.
     */
    FILES_LIST: "REPLICATE_FILES_LIST",
    /**
     * Tool to list example predictions for a specific model. use when you want to retrieve author-provided illustrative examples after identifying the model.
     */
    MODELS_EXAMPLES_LIST: "REPLICATE_MODELS_EXAMPLES_LIST",
    /**
     * Tool to get details of a specific model by owner and name. use when you need model metadata (schema, urls) before running predictions.
     */
    MODELS_GET: "REPLICATE_MODELS_GET",
    /**
     * Tool to get the readme content for a model in markdown format. use after retrieving model details when you want to view its documentation.
     */
    MODELS_README_GET: "REPLICATE_MODELS_README_GET",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "REPLICATE".
 */
export type REPLICATE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "REPLICATE".
 */
export type REPLICATE_TRIGGER_EVENTS = {}
