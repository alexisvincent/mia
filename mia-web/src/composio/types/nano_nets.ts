// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of NANO_NETS's NANO_NETS_CREATE_MODEL tool input.
 */
type NANO_NETS_CREATE_MODEL_INPUT = {
  /**
   * Categories
   * @description List of OCR model categories. Exactly one category 'ocr' is supported.
   */
  categories?: string[];
  /**
   * Model Type
   * @description Optional model type. If provided, must be 'ocr'.
   * @default null
   */
  model_type: string | null;
  /**
   * Name
   * @description Optional human-readable name for the model.
   * @default null
   */
  name: string | null;
};

/**
 * Type of NANO_NETS's NANO_NETS_CREATE_MODEL tool output.
 */
type NANO_NETS_CREATE_MODEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description Categories assigned to the model.
       */
      categories: string[];
      /**
       * Created
       * @description Timestamp when the model was created.
       */
      created: string;
      /**
       * Model Id
       * @description Unique identifier for the created model.
       */
      model_id: string;
      /**
       * Name
       * @description Human-readable name of the model.
       */
      name: string;
      /**
       * State
       * @description Current state of the model (e.g., 'CREATED').
       */
      state: string;
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
 * Type of NANO_NETS's NANO_NETS_DELETE_MODEL tool input.
 */
type NANO_NETS_DELETE_MODEL_INPUT = {
  /**
   * Model Id
   * @description The unique identifier of the OCR model to delete.
   */
  model_id?: string;
};

/**
 * Type of NANO_NETS's NANO_NETS_DELETE_MODEL tool output.
 */
type NANO_NETS_DELETE_MODEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message confirming deletion, e.g., 'Model deleted'.
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
 * Type of NANO_NETS's NANO_NETS_GET_ALL_MODELS tool input.
 */
type NANO_NETS_GET_ALL_MODELS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (>= 1).
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of results per page (>= 1).
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of NANO_NETS's NANO_NETS_GET_ALL_MODELS tool output.
 */
type NANO_NETS_GET_ALL_MODELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Status message of the API response.
       */
      message: string;
      /**
       * Models
       * @description List of OCR model details.
       */
      models: {
          /**
           * Api Key
           * @description API key associated with the model.
           */
          api_key: string;
          /**
           * Categories
           * @description List of categories associated with the model.
           */
          categories: string[];
          /**
           * Created
           * @description Creation timestamp in ISO 8601 format.
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for the model.
           */
          id: string;
          /**
           * Model Type
           * @description Type of the model (e.g., OCR, Invoice).
           */
          model_type: string;
          /**
           * Name
           * @description Human-readable name of the model.
           */
          name: string;
          /**
           * State
           * @description Current model state (e.g., TRAINED, DEPLOYED).
           */
          state: string;
      }[];
      /**
       * Next
       * @description URL for next page of results, if any.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for previous page of results, if any.
       * @default null
       */
      previous: string | null;
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
 * Type of NANO_NETS's NANO_NETS_GET_ALL_PREDICTION_FILES tool input.
 */
type NANO_NETS_GET_ALL_PREDICTION_FILES_INPUT = {
  /**
   * Limit
   * @description Number of items per page
   * @default 50
   */
  limit: number | null;
  /**
   * Model Id
   * @description Unique identifier of the model
   */
  model_id?: string;
  /**
   * Page
   * @description Page number for pagination
   * @default 1
   */
  page: number | null;
};

/**
 * Type of NANO_NETS's NANO_NETS_GET_ALL_PREDICTION_FILES tool output.
 */
type NANO_NETS_GET_ALL_PREDICTION_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Inference Requests
       * @description List of inference request records
       */
      inference_requests: ({
          /**
           * Created
           * @description Timestamp when the request was created (ISO 8601)
           */
          created: string;
          /**
           * Data
           * @description Input data used for the inference
           */
          data: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Unique identifier for the inference request
           */
          id: string;
          /**
           * Result
           * @description Inference results object
           */
          result: {
              [key: string]: unknown;
          } | null;
          /**
           * Status
           * @description Status of the inference request (e.g., COMPLETED)
           */
          status: string;
      } & {
          [key: string]: unknown;
      })[];
      /**
       * Limit
       * @description Number of items per page
       */
      limit: number;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Total
       * @description Total number of inference requests
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NANO_NETS's NANO_NETS_GET_MODEL_DETAILS tool input.
 */
type NANO_NETS_GET_MODEL_DETAILS_INPUT = {
  /**
   * Model Id
   * @description Unique identifier of the OCR model to retrieve details.
   */
  model_id?: string;
};

/**
 * Type of NANO_NETS's NANO_NETS_GET_MODEL_DETAILS tool output.
 */
type NANO_NETS_GET_MODEL_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description List of categories associated with the model.
       */
      categories: string[];
      /**
       * Created
       * @description Creation timestamp in ISO 8601 format.
       */
      created: string;
      /**
       * Input Type
       * @description Type of input accepted by the model.
       */
      input_type: string;
      /**
       * Model Id
       * @description Unique identifier of the model.
       */
      model_id: string;
      /**
       * Model Type
       * @description Type of the model (e.g., OCR, Invoice).
       */
      model_type: string;
      /**
       * Status
       * @description Current status of the model (e.g., TRAINED, DEPLOYED).
       */
      status: string;
      /**
       * Updated
       * @description Last updated timestamp in ISO 8601 format.
       */
      updated: string;
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
 * Type of NANO_NETS's NANO_NETS_GET_TRAINING_IMAGES tool input.
 */
type NANO_NETS_GET_TRAINING_IMAGES_INPUT = {
  /**
   * Model Id
   * @description Unique identifier of the OCR model
   */
  model_id?: string;
  /**
   * Page
   * @description Page number for pagination
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of images per page
   * @default 50
   */
  page_size: number | null;
};

/**
 * Type of NANO_NETS's NANO_NETS_GET_TRAINING_IMAGES tool output.
 */
type NANO_NETS_GET_TRAINING_IMAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of training images
       */
      count: number;
      /**
       * Images
       * @description List of training images and their metadata
       */
      images: {
          /**
           * Feedback
           * @description List of feedback annotations for the image
           * @default null
           */
          feedback: ({
              [key: string]: unknown;
          } | unknown[] | string | number | boolean | null)[] | null;
          /**
           * Filename
           * @description Filename of the image
           */
          filename: string;
          /**
           * Id
           * @description Unique identifier of the image
           */
          id: string;
          /**
           * Status
           * @description Status of the image
           */
          status: string;
          /**
           * Uploaded
           * @description Upload timestamp in ISO 8601 format
           */
          uploaded: string;
          /**
           * Url
           * @description URL of the training image
           */
          url: string;
      }[];
      /**
       * Next
       * @description URL to the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results
       * @default null
       */
      previous: string | null;
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
 * Type of NANO_NETS's NANO_NETS_GET_WORKFLOWS tool input.
 */
type NANO_NETS_GET_WORKFLOWS_INPUT = object;

/**
 * Type of NANO_NETS's NANO_NETS_GET_WORKFLOWS tool output.
 */
type NANO_NETS_GET_WORKFLOWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Workflows
       * @description List of workflows in the account.
       */
      workflows: {
          /**
           * Description
           * @description Description of the workflow.
           */
          description: string;
          /**
           * Id
           * @description Unique identifier for the workflow.
           */
          id: string;
          /**
           * Settings
           * @description Configuration settings for the workflow.
           */
          settings: {
              [key: string]: unknown;
          } | null;
          /**
           * Type
           * @description Type of the workflow (e.g., 'invoice', 'receipt').
           */
          type: string;
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
 * Type of NANO_NETS's NANO_NETS_LIST_DOCUMENTS tool input.
 */
type NANO_NETS_LIST_DOCUMENTS_INPUT = {
  /**
   * Limit
   * @description Number of items per page (must be >= 1).
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination (must be >= 1).
   * @default null
   */
  page: number | null;
  /**
   * Workflow Id
   * @description Unique identifier for the workflow.
   */
  workflow_id?: string;
};

/**
 * Type of NANO_NETS's NANO_NETS_LIST_DOCUMENTS tool output.
 */
type NANO_NETS_LIST_DOCUMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Documents
       * @description List of documents returned by the API.
       */
      documents: ({
          /**
           * Created
           * @description Timestamp when the document was created (ISO 8601).
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for the document.
           */
          id: string;
          /**
           * Last Updated
           * @description Timestamp of last document update (ISO 8601).
           */
          last_updated: string;
          /**
           * Pages
           * @description List of processed pages within the document.
           */
          pages: ({
              /**
               * Created
               * @description Timestamp when the page was created (ISO 8601).
               */
              created: string;
              /**
               * Document Id
               * @description Identifier of the parent document.
               */
              document_id: string;
              /**
               * Id
               * @description Unique identifier for the document page.
               */
              id: string;
              /**
               * Last Updated
               * @description Timestamp of last page update (ISO 8601).
               */
              last_updated: string;
              /**
               * Page Number
               * @description Page number within the document.
               * @default null
               */
              page_number: number | null;
              /**
               * Status
               * @description Processing status of the page.
               */
              status: string;
          } & {
              [key: string]: unknown;
          })[];
          /**
           * Status
           * @description Processing status of the document.
           */
          status: string;
      } & {
          [key: string]: unknown;
      })[];
      /**
       * Limit
       * @description Number of documents per page.
       */
      limit: number;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Total
       * @description Total number of documents in the workflow.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NANO_NETS's NANO_NETS_UPDATE_MODEL tool input.
 */
type NANO_NETS_UPDATE_MODEL_INPUT = {
  /**
   * Categories
   * @description List of categories for the model.
   * @default null
   */
  categories: string[] | null;
  /**
   * Is Document Classification
   * @description Flag indicating if the model is for document classification.
   * @default null
   */
  is_document_classification: boolean | null;
  /**
   * Model Id
   * @description Unique identifier of the OCR model to update.
   */
  model_id?: string;
  /**
   * Model Name
   * @description New human-readable name for the model.
   * @default null
   */
  model_name: string | null;
  /**
   * Notes
   * @description Additional notes or description for the model.
   * @default null
   */
  notes: string | null;
};

/**
 * Type of NANO_NETS's NANO_NETS_UPDATE_MODEL tool output.
 */
type NANO_NETS_UPDATE_MODEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Model Details
       * @description Updated details of the OCR model.
       */
      model_details: {
          /**
           * Categories
           * @description List of categories associated with the model.
           */
          categories: string[];
          /**
           * Model Id
           * @description Unique identifier of the model.
           */
          model_id: string;
          /**
           * Model Name
           * @description Name of the model.
           */
          model_name: string;
          /**
           * Notes
           * @description Additional notes or description for the model.
           * @default null
           */
          notes: string | null;
          /**
           * Updated At
           * @description Timestamp when the model was last updated in ISO 8601 format.
           */
          updated_at: string;
      };
      /**
       * Status
       * @description Status of the update operation.
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
 * Type of NANO_NETS's NANO_NETS_UPLOAD_TRAINING_IMAGES_BY_FILE tool input.
 */
type NANO_NETS_UPLOAD_TRAINING_IMAGES_BY_FILE_INPUT = {
  /**
   * Annotation
   * @description Optional JSON string for annotation data following NanoNets schema.
   * @default null
   */
  annotation: string | null;
  /**
   * Categories
   * @description Optional comma-separated category names to assign to the uploaded images, e.g., 'invoice,receipt'.
   * @default null
   */
  categories: string | null;
  /**
   * Files
   * @description List of local file paths of images to upload for training.
   */
  files?: string[];
  /**
   * Model Id
   * @description Unique identifier of the OCR model to which the images will be uploaded.
   */
  model_id?: string;
};

/**
 * Type of NANO_NETS's NANO_NETS_UPLOAD_TRAINING_IMAGES_BY_FILE tool output.
 */
type NANO_NETS_UPLOAD_TRAINING_IMAGES_BY_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages if any files failed.
       * @default null
       */
      errors: string[] | null;
      /**
       * Message
       * @description Status of the upload operation, e.g., 'Success'.
       */
      message: string;
      /**
       * Upload Ids
       * @description List of unique upload IDs for the files.
       */
      upload_ids: string[];
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
 * Type of NANO_NETS's NANO_NETS_UPLOAD_TRAINING_IMAGES_BY_URL tool input.
 */
type NANO_NETS_UPLOAD_TRAINING_IMAGES_BY_URL_INPUT = {
  /**
   * Model Id
   * @description Unique identifier of the OCR model to which the images will be uploaded.
   */
  model_id?: string;
  /**
   * Urls
   * @description List of publicly accessible image URLs to upload for training.
   */
  urls?: string[];
};

/**
 * Type of NANO_NETS's NANO_NETS_UPLOAD_TRAINING_IMAGES_BY_URL tool output.
 */
type NANO_NETS_UPLOAD_TRAINING_IMAGES_BY_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Duplicate
       * @description List of duplicate image details, if any.
       */
      duplicate: {
          /**
           * Upload Id
           * @description Upload ID of the original image.
           */
          upload_id: string;
          /**
           * Url
           * @description URL of the duplicate image.
           */
          url: string;
      }[];
      /**
       * Invalid
       * @description List of invalid URLs that could not be processed.
       */
      invalid: string[];
      /**
       * Message
       * @description Status message returned by the API.
       */
      message: string;
      /**
       * Uploaded
       * @description List of successfully uploaded image details.
       */
      uploaded: {
          /**
           * Upload Id
           * @description Unique upload ID for the image.
           */
          upload_id: string;
          /**
           * Url
           * @description URL of the successfully uploaded image.
           */
          url: string;
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
 * Type map of all available tool input types for toolkit "NANO_NETS".
 */
export type NANO_NETS_TOOL_INPUTS = {
  CREATE_MODEL: NANO_NETS_CREATE_MODEL_INPUT
  DELETE_MODEL: NANO_NETS_DELETE_MODEL_INPUT
  GET_ALL_MODELS: NANO_NETS_GET_ALL_MODELS_INPUT
  GET_ALL_PREDICTION_FILES: NANO_NETS_GET_ALL_PREDICTION_FILES_INPUT
  GET_MODEL_DETAILS: NANO_NETS_GET_MODEL_DETAILS_INPUT
  GET_TRAINING_IMAGES: NANO_NETS_GET_TRAINING_IMAGES_INPUT
  GET_WORKFLOWS: NANO_NETS_GET_WORKFLOWS_INPUT
  LIST_DOCUMENTS: NANO_NETS_LIST_DOCUMENTS_INPUT
  UPDATE_MODEL: NANO_NETS_UPDATE_MODEL_INPUT
  UPLOAD_TRAINING_IMAGES_BY_FILE: NANO_NETS_UPLOAD_TRAINING_IMAGES_BY_FILE_INPUT
  UPLOAD_TRAINING_IMAGES_BY_URL: NANO_NETS_UPLOAD_TRAINING_IMAGES_BY_URL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "NANO_NETS".
 */
export type NANO_NETS_TOOL_OUTPUTS = {
  CREATE_MODEL: NANO_NETS_CREATE_MODEL_OUTPUT
  DELETE_MODEL: NANO_NETS_DELETE_MODEL_OUTPUT
  GET_ALL_MODELS: NANO_NETS_GET_ALL_MODELS_OUTPUT
  GET_ALL_PREDICTION_FILES: NANO_NETS_GET_ALL_PREDICTION_FILES_OUTPUT
  GET_MODEL_DETAILS: NANO_NETS_GET_MODEL_DETAILS_OUTPUT
  GET_TRAINING_IMAGES: NANO_NETS_GET_TRAINING_IMAGES_OUTPUT
  GET_WORKFLOWS: NANO_NETS_GET_WORKFLOWS_OUTPUT
  LIST_DOCUMENTS: NANO_NETS_LIST_DOCUMENTS_OUTPUT
  UPDATE_MODEL: NANO_NETS_UPDATE_MODEL_OUTPUT
  UPLOAD_TRAINING_IMAGES_BY_FILE: NANO_NETS_UPLOAD_TRAINING_IMAGES_BY_FILE_OUTPUT
  UPLOAD_TRAINING_IMAGES_BY_URL: NANO_NETS_UPLOAD_TRAINING_IMAGES_BY_URL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's NANO_NETS toolkit.
 */
export const NANO_NETS = {
  slug: "nano_nets",
  tools: {
    /**
     * Tool to create a new ocr model. use when you need to initialize an ocr model before training.
     */
    CREATE_MODEL: "NANO_NETS_CREATE_MODEL",
    /**
     * Tool to delete an ocr model. use when you need to permanently remove a trained model by its id.
     */
    DELETE_MODEL: "NANO_NETS_DELETE_MODEL",
    /**
     * Tool to retrieve a paginated list of all ocr models. use when you need to inspect or manage existing ocr models. call after authentication to fetch your account's models.
     */
    GET_ALL_MODELS: "NANO_NETS_GET_ALL_MODELS",
    /**
     * Tool to fetch all prediction files associated with a specific model. use when you need to list all inference requests after model processing is complete.
     */
    GET_ALL_PREDICTION_FILES: "NANO_NETS_GET_ALL_PREDICTION_FILES",
    /**
     * Tool to retrieve details of an ocr model. use when you need full metadata of a model by its id.
     */
    GET_MODEL_DETAILS: "NANO_NETS_GET_MODEL_DETAILS",
    /**
     * Tool to retrieve training images for an ocr model. use when you need to page through images associated with a model before training or analysis.
     */
    GET_TRAINING_IMAGES: "NANO_NETS_GET_TRAINING_IMAGES",
    /**
     * Tool to retrieve a list of all workflows in your nanonets account. use when you need to inventory or inspect all configured workflows.
     */
    GET_WORKFLOWS: "NANO_NETS_GET_WORKFLOWS",
    /**
     * Tool to retrieve a paginated list of documents processed by a workflow. use when you need to view documents after processing.
     */
    LIST_DOCUMENTS: "NANO_NETS_LIST_DOCUMENTS",
    /**
     * Tool to update an ocr model's details. use after reviewing the model's current configuration to modify its name, categories, notes, or classification settings.
     */
    UPDATE_MODEL: "NANO_NETS_UPDATE_MODEL",
    /**
     * Tool to upload training images by file to a specified ocr model. use when adding files to a model for training purposes.
     */
    UPLOAD_TRAINING_IMAGES_BY_FILE: "NANO_NETS_UPLOAD_TRAINING_IMAGES_BY_FILE",
    /**
     * Tool to upload training images by url to a specified ocr model. use when adding urls of images to a model for training purposes.
     */
    UPLOAD_TRAINING_IMAGES_BY_URL: "NANO_NETS_UPLOAD_TRAINING_IMAGES_BY_URL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "NANO_NETS".
 */
export type NANO_NETS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "NANO_NETS".
 */
export type NANO_NETS_TRIGGER_EVENTS = {}
