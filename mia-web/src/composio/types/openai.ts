// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of OPENAI's OPENAI_CREATE_ASSISTANT tool input.
 */
type OPENAI_CREATE_ASSISTANT_INPUT = {
  /**
   * Description
   * @description Brief description of the assistant's purpose
   * @default null
   */
  description: string | null;
  /**
   * File Ids
   * @description List of file IDs the assistant may access
   * @default null
   */
  file_ids: string[] | null;
  /**
   * Instructions
   * @description System-level instructions guiding assistant behavior
   * @default null
   */
  instructions: string | null;
  /**
   * Metadata
   * @description Arbitrary JSON metadata to attach to the assistant
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Model
   * @description ID of the model to use for this assistant
   */
  model?: string;
  /**
   * Name
   * @description User-friendly name for the assistant
   * @default null
   */
  name: string | null;
  /**
   * Tools
   * @description List of tools the assistant can invoke
   * @default null
   */
  tools: {
      /**
       * Description
       * @description Short description of the tool's purpose
       * @default null
       */
      description: string | null;
      /**
       * Name
       * @description Unique name of the tool
       */
      name: string;
      /**
       * AssistantToolParameters
       * @description JSON schema for an assistant tool's parameters.
       * @default null
       */
      parameters: {
          /**
           * Properties
           * @description Schema properties mapping parameter names to schemas
           */
          properties: {
              [key: string]: unknown;
          };
          /**
           * Required
           * @description List of required parameter names
           */
          required: string[];
          /**
           * Type
           * @description Must be 'object'
           * @constant
           */
          type: "object";
      } | null;
  }[] | null;
};

/**
 * Type of OPENAI's OPENAI_CREATE_ASSISTANT tool output.
 */
type OPENAI_CREATE_ASSISTANT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Unix time (seconds) when created
       */
      created_at: number;
      /**
       * Description
       * @description Description of the assistant
       * @default null
       */
      description: string | null;
      /**
       * File Ids
       * @description IDs of files associated with the assistant
       * @default null
       */
      file_ids: string[] | null;
      /**
       * Id
       * @description Unique identifier for the assistant
       */
      id: string;
      /**
       * Instructions
       * @description System instructions for the assistant
       * @default null
       */
      instructions: string | null;
      /**
       * Metadata
       * @description Custom metadata attached to the assistant
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Model
       * @description Model ID used by the assistant
       */
      model: string;
      /**
       * Name
       * @description User-friendly name of the assistant
       * @default null
       */
      name: string | null;
      /**
       * Object
       * @description Object type, always 'assistant'
       */
      object: string;
      /**
       * Tools
       * @description Tools assigned to the assistant
       * @default null
       */
      tools: {
          /**
           * Description
           * @description Short description of the tool's purpose
           * @default null
           */
          description: string | null;
          /**
           * Name
           * @description Unique name of the tool
           */
          name: string;
          /**
           * AssistantToolParameters
           * @description JSON schema for an assistant tool's parameters.
           * @default null
           */
          parameters: {
              /**
               * Properties
               * @description Schema properties mapping parameter names to schemas
               */
              properties: {
                  [key: string]: unknown;
              };
              /**
               * Required
               * @description List of required parameter names
               */
              required: string[];
              /**
               * Type
               * @description Must be 'object'
               * @constant
               */
              type: "object";
          } | null;
      }[] | null;
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
 * Type of OPENAI's OPENAI_CREATE_MESSAGE tool input.
 */
type OPENAI_CREATE_MESSAGE_INPUT = {
  /**
   * Attachments
   * @description Optional files to attach to the message
   * @default null
   */
  attachments: {
      /**
       * File Id
       * @description ID of the file to attach
       */
      file_id: string;
      /**
       * Tools
       * @description List of tools to which this file should be added
       */
      tools: {
          /**
           * Description
           * @description Description of the tool
           * @default null
           */
          description: string | null;
          /**
           * Name
           * @description Name of the tool to add the file to
           */
          name: string;
      }[];
  }[] | null;
  /**
   * Content
   * @description Message content as a string or list of structured parts
   */
  content?: string | null;
  /**
   * Metadata
   * @description Up to 16 key-value pairs of metadata (keys ≤64 chars, values ≤512 chars)
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Role
   * @description Role of the message sender: 'user' or 'assistant'
   * @enum {string}
   */
  role?: "user" | "assistant";
  /**
   * Thread Id
   * @description ID of the thread to create the message in
   */
  thread_id?: string;
};

/**
 * Type of OPENAI's OPENAI_CREATE_MESSAGE tool output.
 */
type OPENAI_CREATE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assistant Id
       * @description ID of the assistant that authored the message, if any
       * @default null
       */
      assistant_id: string | null;
      /**
       * Attachments
       * @description Files attached to the message
       * @default null
       */
      attachments: {
          /**
           * File Id
           * @description ID of the file to attach
           */
          file_id: string;
          /**
           * Tools
           * @description List of tools to which this file should be added
           */
          tools: {
              /**
               * Description
               * @description Description of the tool
               * @default null
               */
              description: string | null;
              /**
               * Name
               * @description Name of the tool to add the file to
               */
              name: string;
          }[];
      }[] | null;
      /**
       * Completed At
       * @description Unix timestamp when the message completed
       * @default null
       */
      completed_at: number | null;
      /**
       * Content
       * @description Structured content of the message
       */
      content: {
          /**
           * File
           * @description File ID if type is 'image_file'
           * @default null
           */
          file: string | null;
          /**
           * Text
           * @description Text content if type is 'text'
           * @default null
           */
          text: string | null;
          /**
           * Type
           * @description Type of the content part: 'text', 'image_url', or 'image_file'
           * @enum {string}
           */
          type: "text" | "image_url" | "image_file";
          /**
           * Url
           * @description Image URL if type is 'image_url'
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Created At
       * @description Unix timestamp when the message was created
       */
      created_at: number;
      /**
       * Id
       * @description ID of the created message
       */
      id: string;
      /**
       * Incomplete At
       * @description Unix timestamp when the message was marked incomplete
       * @default null
       */
      incomplete_at: number | null;
      /**
       * IncompleteDetails
       * @description Details about why a message is incomplete.
       * @default null
       */
      incomplete_details: {
          /**
           * Reason
           * @description Reason for incomplete status
           * @enum {string}
           */
          reason: "content_filter" | "max_tokens" | "run_cancelled" | "run_expired" | "run_failed";
      } | null;
      /**
       * Metadata
       * @description Metadata attached to the message
       * @default null
       */
      metadata: {
          [key: string]: string;
      } | null;
      /**
       * Object
       * @description Object type, always 'thread.message'
       */
      object: string;
      /**
       * Role
       * @description Role that created the message
       * @enum {string}
       */
      role: "user" | "assistant";
      /**
       * Run Id
       * @description ID of the run associated with message creation
       * @default null
       */
      run_id: string | null;
      /**
       * Status
       * @description Status of the message
       * @enum {string}
       */
      status: "in_progress" | "incomplete" | "completed";
      /**
       * Thread Id
       * @description ID of the thread containing this message
       */
      thread_id: string;
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
 * Type of OPENAI's OPENAI_CREATE_THREAD tool input.
 */
type OPENAI_CREATE_THREAD_INPUT = {
  /**
   * Messages
   * @description Optional initial messages to start the thread with
   * @default null
   */
  messages: {
      /**
       * Content
       * @description Text content of the message
       */
      content: string;
      /**
       * Role
       * @description Role of the message sender: 'user' or 'assistant'
       * @enum {string}
       */
      role: "user" | "assistant";
  }[] | null;
  /**
   * Metadata
   * @description Optional metadata key-value pairs to attach to the thread
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
};

/**
 * Type of OPENAI's OPENAI_CREATE_THREAD tool output.
 */
type OPENAI_CREATE_THREAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Unix timestamp when the thread was created
       */
      created_at: number;
      /**
       * Id
       * @description Identifier of the created thread
       */
      id: string;
      /**
       * Messages
       * @description Messages in the thread, if any were provided
       * @default null
       */
      messages: {
          /**
           * Content
           * @description Text content of the message
           */
          content: string;
          /**
           * Role
           * @description Role of the message sender: 'user' or 'assistant'
           * @enum {string}
           */
          role: "user" | "assistant";
      }[] | null;
      /**
       * Metadata
       * @description Metadata key-value pairs attached to the thread
       * @default null
       */
      metadata: {
          [key: string]: string;
      } | null;
      /**
       * Object
       * @description Object type, always 'thread'
       */
      object: string;
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
 * Type of OPENAI's OPENAI_DELETE_ASSISTANT tool input.
 */
type OPENAI_DELETE_ASSISTANT_INPUT = {
  /**
   * Assistant Id
   * @description Identifier of the assistant to delete (path parameter)
   */
  assistant_id?: string;
};

/**
 * Type of OPENAI's OPENAI_DELETE_ASSISTANT tool output.
 */
type OPENAI_DELETE_ASSISTANT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Indicates if the assistant was deleted successfully
       */
      deleted: boolean;
      /**
       * Id
       * @description The ID of the deleted assistant
       */
      id: string;
      /**
       * Object
       * @description The object type returned, always 'assistant.deleted'
       */
      object: string;
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
 * Type of OPENAI's OPENAI_DELETE_FILE tool input.
 */
type OPENAI_DELETE_FILE_INPUT = {
  /**
   * File Id
   * @description ID of the file to delete (path parameter)
   */
  file_id?: string;
};

/**
 * Type of OPENAI's OPENAI_DELETE_FILE tool output.
 */
type OPENAI_DELETE_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Indicates if the file was deleted successfully
       */
      deleted: boolean;
      /**
       * Id
       * @description The ID of the deleted file
       */
      id: string;
      /**
       * Object
       * @description The object type returned, always 'file'
       */
      object: string;
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
 * Type of OPENAI's OPENAI_LIST_FILES tool input.
 */
type OPENAI_LIST_FILES_INPUT = {
  /**
   * Limit
   * @description Number of files to retrieve
   * @default null
   */
  limit: number | null;
};

/**
 * Type of OPENAI's OPENAI_LIST_FILES tool output.
 */
type OPENAI_LIST_FILES_OUTPUT = {
  /**
   * Data
   * @description List of file objects
   */
  data?: {
      /**
       * Bytes
       * @description Number of bytes in the file
       */
      bytes: number;
      /**
       * Created At
       * @description Unix timestamp of file creation
       */
      created_at: number;
      /**
       * Filename
       * @description Name of the file
       */
      filename: string;
      /**
       * Id
       * @description File identifier
       */
      id: string;
      /**
       * Object
       * @description Object type, always 'file'
       */
      object: string;
      /**
       * Purpose
       * @description Purpose of the file, e.g., 'fine-tune'
       */
      purpose: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Object
   * @description Object type, always 'list'
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OPENAI's OPENAI_LIST_FINE_TUNES tool input.
 */
type OPENAI_LIST_FINE_TUNES_INPUT = object;

/**
 * Type of OPENAI's OPENAI_LIST_FINE_TUNES tool output.
 */
type OPENAI_LIST_FINE_TUNES_OUTPUT = {
  /**
   * Data
   * @description Array of fine-tune job objects.
   */
  data?: {
      /**
       * Created At
       * @description Unix timestamp (in seconds) when the job was created.
       */
      created_at: number;
      /**
       * Events
       * @description List of events that occurred during fine-tuning.
       */
      events: {
          /**
           * Created At
           * @description Unix timestamp (in seconds) when the event occurred.
           */
          created_at: number;
          /**
           * Level
           * @description The severity level of the event, e.g., 'info' or 'error'.
           */
          level: string;
          /**
           * Message
           * @description The content of the event message.
           */
          message: string;
          /**
           * Object
           * @description The object type, always 'event'.
           */
          object: string;
      }[];
      /**
       * Fine Tuned Model
       * @description Name of the resulting fine-tuned model, if available.
       * @default null
       */
      fine_tuned_model: string | null;
      /**
       * Hyperparams
       * @description Hyperparameters used for the fine-tuning job.
       */
      hyperparams: {
          /**
           * Batch Size
           * @description Batch size used for fine-tuning.
           * @default null
           */
          batch_size: number | null;
          /**
           * Classification Betas
           * @description Beta values for F-beta score calculations.
           * @default null
           */
          classification_betas: number[] | null;
          /**
           * Classification N Classes
           * @description Number of classes for classification tasks.
           * @default null
           */
          classification_n_classes: number | null;
          /**
           * Classification Positive Class
           * @description Positive class label for binary classification tasks.
           * @default null
           */
          classification_positive_class: string | null;
          /**
           * Learning Rate Multiplier
           * @description Learning rate multiplier applied during fine-tuning.
           * @default null
           */
          learning_rate_multiplier: number | null;
          /**
           * N Epochs
           * @description Number of epochs used for fine-tuning.
           */
          n_epochs: number;
          /**
           * Prompt Loss Weight
           * @description Weight for prompt loss during fine-tuning.
           * @default null
           */
          prompt_loss_weight: number | null;
      };
      /**
       * Id
       * @description The unique identifier for the fine-tune job.
       */
      id: string;
      /**
       * Model
       * @description The name of the base model being fine-tuned.
       */
      model: string;
      /**
       * Object
       * @description The object type, always 'fine-tune'.
       */
      object: string;
      /**
       * Organization Id
       * @description Organization identifier that owns the job.
       */
      organization_id: string;
      /**
       * Result Files
       * @description Files generated as results of fine-tuning.
       */
      result_files: {
          /**
           * Bytes
           * @description Size of the file in bytes.
           */
          bytes: number;
          /**
           * Created At
           * @description Unix timestamp (in seconds) when the file was created.
           */
          created_at: number;
          /**
           * Filename
           * @description Name of the file.
           */
          filename: string;
          /**
           * Id
           * @description The unique ID of the file.
           */
          id: string;
          /**
           * Object
           * @description The object type, usually 'file'.
           */
          object: string;
          /**
           * Purpose
           * @description Purpose of the file, e.g., 'fine-tune'.
           */
          purpose: string;
      }[];
      /**
       * Status
       * @description Status of the fine-tune job (e.g., 'succeeded', 'pending').
       */
      status: string;
      /**
       * Training Files
       * @description Training data files used for fine-tuning.
       */
      training_files: {
          /**
           * Bytes
           * @description Size of the file in bytes.
           */
          bytes: number;
          /**
           * Created At
           * @description Unix timestamp (in seconds) when the file was created.
           */
          created_at: number;
          /**
           * Filename
           * @description Name of the file.
           */
          filename: string;
          /**
           * Id
           * @description The unique ID of the file.
           */
          id: string;
          /**
           * Object
           * @description The object type, usually 'file'.
           */
          object: string;
          /**
           * Purpose
           * @description Purpose of the file, e.g., 'fine-tune'.
           */
          purpose: string;
      }[];
      /**
       * Updated At
       * @description Unix timestamp (in seconds) when the job was last updated.
       */
      updated_at: number;
      /**
       * Validation Files
       * @description Validation data files used for fine-tuning.
       */
      validation_files: {
          /**
           * Bytes
           * @description Size of the file in bytes.
           */
          bytes: number;
          /**
           * Created At
           * @description Unix timestamp (in seconds) when the file was created.
           */
          created_at: number;
          /**
           * Filename
           * @description Name of the file.
           */
          filename: string;
          /**
           * Id
           * @description The unique ID of the file.
           */
          id: string;
          /**
           * Object
           * @description The object type, usually 'file'.
           */
          object: string;
          /**
           * Purpose
           * @description Purpose of the file, e.g., 'fine-tune'.
           */
          purpose: string;
      }[];
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Object
   * @description The type of this object, always 'list'.
   */
  object?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OPENAI's OPENAI_LIST_MODELS tool input.
 */
type OPENAI_LIST_MODELS_INPUT = object;

/**
 * Type of OPENAI's OPENAI_LIST_MODELS tool output.
 */
type OPENAI_LIST_MODELS_OUTPUT = {
  /**
   * Data
   * @description Array of model objects returned by the API.
   */
  data?: {
      /**
       * Created
       * @description Unix timestamp when the model was created.
       */
      created: number;
      /**
       * Id
       * @description The model identifier, e.g., 'gpt-4'.
       */
      id: string;
      /**
       * Object
       * @description The object type, usually 'model'.
       */
      object: string;
      /**
       * Owned By
       * @description The organization or user that owns this model.
       */
      owned_by: string;
      /**
       * Parent
       * @description Immediate parent model ID for fine-tuned models, if any.
       * @default null
       */
      parent: string | null;
      /**
       * Permission
       * @description Permissions granted on this model.
       */
      permission?: {
          /**
           * Allow Create Engine
           * @description Whether creation of engines is allowed.
           */
          allow_create_engine: boolean;
          /**
           * Allow Fine Tuning
           * @description Whether fine-tuning is allowed.
           */
          allow_fine_tuning: boolean;
          /**
           * Allow Logprobs
           * @description Whether log probabilities are allowed.
           */
          allow_logprobs: boolean;
          /**
           * Allow Sampling
           * @description Whether sampling is allowed.
           */
          allow_sampling: boolean;
          /**
           * Allow Search Indices
           * @description Whether search indices are allowed.
           */
          allow_search_indices: boolean;
          /**
           * Allow View
           * @description Whether view access is allowed.
           */
          allow_view: boolean;
          /**
           * Created
           * @description Unix timestamp when permission was created.
           */
          created: number;
          /**
           * Group
           * @description Group name if applicable, null otherwise.
           * @default null
           */
          group: string | null;
          /**
           * Id
           * @description The permission identifier.
           */
          id: string;
          /**
           * Is Blocking
           * @description Whether the permission is blocking.
           */
          is_blocking: boolean;
          /**
           * Object
           * @description The object type, e.g., 'model_permission'.
           */
          object: string;
          /**
           * Organization
           * @description Organization identifier.
           */
          organization: string;
      }[];
      /**
       * Root
       * @description Root model ID for fine-tuned models, absent for base models.
       * @default null
       */
      root: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Object
   * @description The type of this object, always 'list'.
   * @constant
   */
  object?: "list";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OPENAI's OPENAI_LIST_RUN_STEPS tool input.
 */
type OPENAI_LIST_RUN_STEPS_INPUT = {
  /**
   * After
   * @description Return steps after this step ID
   * @default null
   */
  after: string | null;
  /**
   * Before
   * @description Return steps before this step ID
   * @default null
   */
  before: string | null;
  /**
   * Include[]
   * @description Additional fields to include in the response. Supported value: 'step_details.tool_calls[*].file_search.results[*].content'
   * @default null
   */
  "include[]": string[] | null;
  /**
   * Limit
   * @description Maximum number of steps to return (1-100)
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Sort order by step creation time
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Run Id
   * @description ID of the run to list steps for
   */
  run_id?: string;
  /**
   * Thread Id
   * @description ID of the thread that the run belongs to
   */
  thread_id?: string;
};

/**
 * Type of OPENAI's OPENAI_LIST_RUN_STEPS tool output.
 */
type OPENAI_LIST_RUN_STEPS_OUTPUT = {
  /**
   * Data
   * @description Array of run step objects
   */
  data?: {
      /**
       * Assistant Id
       * @description ID of the assistant associated with this step
       */
      assistant_id: string;
      /**
       * Cancelled At
       * @description Timestamp when the step was cancelled, if applicable
       * @default null
       */
      cancelled_at: number | null;
      /**
       * Completed At
       * @description Timestamp when the step was completed, if applicable
       * @default null
       */
      completed_at: number | null;
      /**
       * Created At
       * @description Unix timestamp when the step was created
       */
      created_at: number;
      /**
       * Expired At
       * @description Timestamp when the step expired, if applicable
       * @default null
       */
      expired_at: number | null;
      /**
       * Failed At
       * @description Timestamp when the step failed, if applicable
       * @default null
       */
      failed_at: number | null;
      /**
       * Id
       * @description Unique identifier for the run step
       */
      id: string;
      /**
       * ErrorObject
       * @description Error details if the run step encountered an error.
       * @default null
       */
      last_error: {
          /**
           * Code
           * @description Error code if available
           * @default null
           */
          code: string | null;
          /**
           * Message
           * @description Error message describing what went wrong
           */
          message: string;
          /**
           * Param
           * @description Parameter that caused the error if applicable
           * @default null
           */
          param: string | null;
      } | null;
      /**
       * Object
       * @description Object type, always 'thread.run.step'
       * @constant
       */
      object: "thread.run.step";
      /**
       * Run Id
       * @description ID of the run this step belongs to
       */
      run_id: string;
      /**
       * Status
       * @description Status of the run step, e.g., 'completed'
       */
      status: string;
      /**
       * Step Details
       * @description Detailed information about this run step
       */
      step_details: {
          /**
           * MessageCreationDetail
           * @description Details specific to message creation steps.
           * @default null
           */
          message_creation: {
              /**
               * Message Id
               * @description ID of the message created during this step
               */
              message_id: string;
          } | null;
          /**
           * Type
           * @description Type of the step detail, e.g., 'message_creation'
           */
          type: string;
      };
      /**
       * Thread Id
       * @description ID of the thread associated with this step
       */
      thread_id: string;
      /**
       * Type
       * @description Type of the run step, e.g., 'message_creation'
       */
      type: string;
      /**
       * Usage
       * @description Token usage stats for this run step
       */
      usage: {
          /**
           * Completion Tokens
           * @description Number of tokens in the completion
           */
          completion_tokens: number;
          /**
           * Prompt Tokens
           * @description Number of tokens in the prompt
           */
          prompt_tokens: number;
          /**
           * Total Tokens
           * @description Total number of tokens used
           */
          total_tokens: number;
      };
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * First Id
   * @description ID of the first run step in this list
   */
  first_id?: string;
  /**
   * Has More
   * @description Whether more run steps are available after this list
   */
  has_more?: boolean;
  /**
   * Last Id
   * @description ID of the last run step in this list
   */
  last_id?: string;
  /**
   * Object
   * @description The type of this object, always 'list'
   * @constant
   */
  object?: "list";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of OPENAI's OPENAI_MODIFY_THREAD tool input.
 */
type OPENAI_MODIFY_THREAD_INPUT = {
  /**
   * Metadata
   * @description Arbitrary JSON metadata to attach to the thread
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Thread Id
   * @description ID of the thread to modify
   */
  thread_id?: string;
};

/**
 * Type of OPENAI's OPENAI_MODIFY_THREAD tool output.
 */
type OPENAI_MODIFY_THREAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Unix timestamp when the thread was created
       */
      created_at: number;
      /**
       * Id
       * @description The thread's unique identifier
       */
      id: string;
      /**
       * Metadata
       * @description Metadata key-value pairs attached to the thread
       */
      metadata: {
          [key: string]: string;
      };
      /**
       * Object
       * @description Object type, always 'thread'
       */
      object: string;
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
 * Type of OPENAI's OPENAI_RETRIEVE_ASSISTANT tool input.
 */
type OPENAI_RETRIEVE_ASSISTANT_INPUT = {
  /**
   * Assistant Id
   * @description Identifier of the assistant to retrieve (path parameter)
   */
  assistant_id?: string;
};

/**
 * Type of OPENAI's OPENAI_RETRIEVE_ASSISTANT tool output.
 */
type OPENAI_RETRIEVE_ASSISTANT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Unix time (seconds) when created
       */
      created_at: number;
      /**
       * Description
       * @description Description of the assistant
       * @default null
       */
      description: string | null;
      /**
       * File Ids
       * @description IDs of files associated with the assistant
       * @default null
       */
      file_ids: string[] | null;
      /**
       * Id
       * @description Unique identifier for the assistant
       */
      id: string;
      /**
       * Instructions
       * @description System instructions for the assistant
       * @default null
       */
      instructions: string | null;
      /**
       * Metadata
       * @description Custom metadata attached to the assistant
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Model
       * @description Model ID used by the assistant
       */
      model: string;
      /**
       * Name
       * @description User-friendly name of the assistant
       * @default null
       */
      name: string | null;
      /**
       * Object
       * @description Object type, always 'assistant'
       */
      object: string;
      /**
       * Tools
       * @description Tools assigned to the assistant
       * @default null
       */
      tools: {
          /**
           * Description
           * @description Short description of the tool's purpose
           * @default null
           */
          description: string | null;
          /**
           * Name
           * @description Unique name of the tool
           */
          name: string;
          /**
           * AssistantToolParameters
           * @description JSON schema for an assistant tool's parameters.
           * @default null
           */
          parameters: {
              /**
               * Properties
               * @description Schema properties mapping parameter names to schemas
               */
              properties: {
                  [key: string]: unknown;
              };
              /**
               * Required
               * @description List of required parameter names
               */
              required: string[];
              /**
               * Type
               * @description Must be 'object'
               * @constant
               */
              type: "object";
          } | null;
      }[] | null;
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
 * Type of OPENAI's OPENAI_RETRIEVE_MODEL tool input.
 */
type OPENAI_RETRIEVE_MODEL_INPUT = {
  /**
   * Model
   * @description Identifier of the model to retrieve (path parameter)
   */
  model?: string;
};

/**
 * Type of OPENAI's OPENAI_RETRIEVE_MODEL tool output.
 */
type OPENAI_RETRIEVE_MODEL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Unix timestamp when the model was created.
       */
      created: number;
      /**
       * Id
       * @description The model identifier.
       */
      id: string;
      /**
       * Object
       * @description The object type, usually 'model'.
       */
      object: string;
      /**
       * Owned By
       * @description The organization or user that owns this model.
       */
      owned_by: string;
      /**
       * Parent
       * @description Immediate parent model ID for fine-tuned models, if any.
       * @default null
       */
      parent: string | null;
      /**
       * Permission
       * @description Permissions granted on this model.
       */
      permission: {
          /**
           * Allow Create Engine
           * @description Whether creation of engines is allowed.
           */
          allow_create_engine: boolean;
          /**
           * Allow Fine Tuning
           * @description Whether fine-tuning is allowed.
           */
          allow_fine_tuning: boolean;
          /**
           * Allow Logprobs
           * @description Whether log probabilities are allowed.
           */
          allow_logprobs: boolean;
          /**
           * Allow Sampling
           * @description Whether sampling is allowed.
           */
          allow_sampling: boolean;
          /**
           * Allow Search Indices
           * @description Whether search indices are allowed.
           */
          allow_search_indices: boolean;
          /**
           * Allow View
           * @description Whether view access is allowed.
           */
          allow_view: boolean;
          /**
           * Created
           * @description Unix timestamp when permission was created.
           */
          created: number;
          /**
           * Group
           * @description Group name if applicable, null otherwise.
           * @default null
           */
          group: string | null;
          /**
           * Id
           * @description The permission identifier.
           */
          id: string;
          /**
           * Is Blocking
           * @description Whether the permission is blocking.
           */
          is_blocking: boolean;
          /**
           * Object
           * @description The object type, e.g., 'model_permission'.
           */
          object: string;
          /**
           * Organization
           * @description Organization identifier.
           */
          organization: string;
      }[];
      /**
       * Root
       * @description Root model ID for fine-tuned models, absent for base models.
       * @default null
       */
      root: string | null;
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
 * Type of OPENAI's OPENAI_RETRIEVE_THREAD tool input.
 */
type OPENAI_RETRIEVE_THREAD_INPUT = {
  /**
   * Thread Id
   * @description Identifier of the thread to retrieve (path parameter)
   */
  thread_id?: string;
};

/**
 * Type of OPENAI's OPENAI_RETRIEVE_THREAD tool output.
 */
type OPENAI_RETRIEVE_THREAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Unix timestamp when the thread was created
       */
      created_at: number;
      /**
       * Id
       * @description The thread identifier
       */
      id: string;
      /**
       * Metadata
       * @description Application-specific metadata as key-value pairs
       */
      metadata: {
          [key: string]: string;
      };
      /**
       * Object
       * @description The object type, always 'thread'
       */
      object: string;
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
 * Type of OPENAI's OPENAI_UPLOAD_FILE tool input.
 */
type OPENAI_UPLOAD_FILE_INPUT = {
  /**
   * File
   * Format: binary
   * @description Binary content of the file to upload. E.g., open('data.jsonl','rb').read().
   */
  file?: string;
  /**
   * Purpose
   * @description Intended purpose of the uploaded file. Currently only 'fine-tune' is supported.
   */
  purpose?: string;
};

/**
 * Type of OPENAI's OPENAI_UPLOAD_FILE tool output.
 */
type OPENAI_UPLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bytes
       * @description Size of the file in bytes.
       */
      bytes: number;
      /**
       * Created At
       * @description Unix timestamp (seconds) when file was created.
       */
      created_at: number;
      /**
       * Filename
       * @description Name of the file.
       */
      filename: string;
      /**
       * Id
       * @description Unique identifier for the file.
       */
      id: string;
      /**
       * Object
       * @description Object type, always 'file'.
       */
      object: string;
      /**
       * Purpose
       * @description Purpose of the file upload.
       */
      purpose: string;
      /**
       * Status
       * @description Status of the file (e.g., 'uploaded').
       */
      status: string;
      /**
       * Status Details
       * @description Additional details about the file status, if any.
       * @default null
       */
      status_details: string | null;
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
 * Type map of all available tool input types for toolkit "OPENAI".
 */
export type OPENAI_TOOL_INPUTS = {
  CREATE_ASSISTANT: OPENAI_CREATE_ASSISTANT_INPUT
  CREATE_MESSAGE: OPENAI_CREATE_MESSAGE_INPUT
  CREATE_THREAD: OPENAI_CREATE_THREAD_INPUT
  DELETE_ASSISTANT: OPENAI_DELETE_ASSISTANT_INPUT
  DELETE_FILE: OPENAI_DELETE_FILE_INPUT
  LIST_FILES: OPENAI_LIST_FILES_INPUT
  LIST_FINE_TUNES: OPENAI_LIST_FINE_TUNES_INPUT
  LIST_MODELS: OPENAI_LIST_MODELS_INPUT
  LIST_RUN_STEPS: OPENAI_LIST_RUN_STEPS_INPUT
  MODIFY_THREAD: OPENAI_MODIFY_THREAD_INPUT
  RETRIEVE_ASSISTANT: OPENAI_RETRIEVE_ASSISTANT_INPUT
  RETRIEVE_MODEL: OPENAI_RETRIEVE_MODEL_INPUT
  RETRIEVE_THREAD: OPENAI_RETRIEVE_THREAD_INPUT
  UPLOAD_FILE: OPENAI_UPLOAD_FILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "OPENAI".
 */
export type OPENAI_TOOL_OUTPUTS = {
  CREATE_ASSISTANT: OPENAI_CREATE_ASSISTANT_OUTPUT
  CREATE_MESSAGE: OPENAI_CREATE_MESSAGE_OUTPUT
  CREATE_THREAD: OPENAI_CREATE_THREAD_OUTPUT
  DELETE_ASSISTANT: OPENAI_DELETE_ASSISTANT_OUTPUT
  DELETE_FILE: OPENAI_DELETE_FILE_OUTPUT
  LIST_FILES: OPENAI_LIST_FILES_OUTPUT
  LIST_FINE_TUNES: OPENAI_LIST_FINE_TUNES_OUTPUT
  LIST_MODELS: OPENAI_LIST_MODELS_OUTPUT
  LIST_RUN_STEPS: OPENAI_LIST_RUN_STEPS_OUTPUT
  MODIFY_THREAD: OPENAI_MODIFY_THREAD_OUTPUT
  RETRIEVE_ASSISTANT: OPENAI_RETRIEVE_ASSISTANT_OUTPUT
  RETRIEVE_MODEL: OPENAI_RETRIEVE_MODEL_OUTPUT
  RETRIEVE_THREAD: OPENAI_RETRIEVE_THREAD_OUTPUT
  UPLOAD_FILE: OPENAI_UPLOAD_FILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's OPENAI toolkit.
 */
export const OPENAI = {
  slug: "openai",
  tools: {
    /**
     * Tool to create a new assistant with specified parameters. use after finalizing model, tools, and instructions.
     */
    CREATE_ASSISTANT: "OPENAI_CREATE_ASSISTANT",
    /**
     * Tool to create a new message in a specific thread. use when adding messages to an existing conversation after confirming the thread id.
     */
    CREATE_MESSAGE: "OPENAI_CREATE_MESSAGE",
    /**
     * Tool to create a new thread. use when initializing a conversation with optional starter messages.
     */
    CREATE_THREAD: "OPENAI_CREATE_THREAD",
    /**
     * Tool to delete a specific assistant by its id. use when you need to remove an assistant after confirming its id.
     */
    DELETE_ASSISTANT: "OPENAI_DELETE_ASSISTANT",
    /**
     * Tool to delete a file. use when you need to remove an uploaded file by its id after confirming the target.
     */
    DELETE_FILE: "OPENAI_DELETE_FILE",
    /**
     * Tool to retrieve a list of files. use when you need to view all files uploaded to your organization.
     */
    LIST_FILES: "OPENAI_LIST_FILES",
    /**
     * Tool to list your organization's fine-tuning jobs. use when you need to review all fine-tune runs.
     */
    LIST_FINE_TUNES: "OPENAI_LIST_FINE_TUNES",
    /**
     * Tool to list available models. use when you need to discover which models you can call. use after confirming your api key is valid.
     */
    LIST_MODELS: "OPENAI_LIST_MODELS",
    /**
     * Tool to retrieve all steps of a specific run. use when you need to inspect each step's details after initiating a run.
     */
    LIST_RUN_STEPS: "OPENAI_LIST_RUN_STEPS",
    /**
     * Tool to modify an existing thread's metadata. use after obtaining the thread id when you need to update metadata.
     */
    MODIFY_THREAD: "OPENAI_MODIFY_THREAD",
    /**
     * Tool to retrieve details of a specific assistant. use when you need to confirm assistant metadata before performing further operations.
     */
    RETRIEVE_ASSISTANT: "OPENAI_RETRIEVE_ASSISTANT",
    /**
     * Tool to retrieve details of a specific model. use when you have a model id and need to confirm its metadata before using it.
     */
    RETRIEVE_MODEL: "OPENAI_RETRIEVE_MODEL",
    /**
     * Tool to retrieve details of a specific thread by its id. use when you need to fetch thread metadata before listing messages.
     */
    RETRIEVE_THREAD: "OPENAI_RETRIEVE_THREAD",
    /**
     * Tool to upload a file for use across openai endpoints. use before referencing the file in tasks like fine-tuning.
     */
    UPLOAD_FILE: "OPENAI_UPLOAD_FILE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "OPENAI".
 */
export type OPENAI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "OPENAI".
 */
export type OPENAI_TRIGGER_EVENTS = {}
