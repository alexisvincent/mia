// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HONEYHIVE's HONEYHIVE_ADD_DATAPOINTS_TO_DATASET tool input.
 */
type HONEYHIVE_ADD_DATAPOINTS_TO_DATASET_INPUT = {
  /**
   * Data
   * @description List of JSON objects representing datapoints to add
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Dataset Id
   * @description Dataset identifier to which datapoints will be added
   */
  dataset_id?: string;
  /**
   * Mapping
   * @description Mapping of data fields to inputs, ground truth, and history
   */
  mapping?: {
      /**
       * Ground Truth
       * @description Field names to treat as ground truth
       */
      ground_truth: string[];
      /**
       * History
       * @description Field names to treat as chat history
       */
      history: string[];
      /**
       * Inputs
       * @description Field names to treat as inputs
       */
      inputs: string[];
  };
  /**
   * Project
   * @description Project name associated with the dataset
   */
  project?: string;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_ADD_DATAPOINTS_TO_DATASET tool output.
 */
type HONEYHIVE_ADD_DATAPOINTS_TO_DATASET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Datapoint Ids
       * @description List of IDs of the newly added datapoints
       */
      datapoint_ids: string[];
      /**
       * Inserted
       * @description Whether the datapoints were successfully added
       */
      inserted: boolean;
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
 * Type of HONEYHIVE's HONEYHIVE_CREATE_BATCH_MODEL_EVENTS tool input.
 */
type HONEYHIVE_CREATE_BATCH_MODEL_EVENTS_INPUT = {
  /**
   * Model Events
   * @description Array of model event objects to create
   */
  model_events?: {
      /**
       * Cost
       * @description Cost of the request
       */
      cost: number;
      /**
       * Duration
       * @description Duration of the request in milliseconds
       */
      duration: number;
      /**
       * Error
       * @description Error message if any
       * @default null
       */
      error: string | null;
      /**
       * Event Name
       * @description Event label or name
       * @default null
       */
      event_name: string | null;
      /**
       * Hyperparameters
       * @description Hyperparameters used for the request
       * @default null
       */
      hyperparameters: {
          /**
           * Frequency Penalty
           * @description Frequency penalty
           * @default null
           */
          frequency_penalty?: number | null;
          /**
           * Max Tokens
           * @description Maximum tokens in completion
           * @default null
           */
          max_tokens?: number | null;
          /**
           * N
           * @description Number of completions to generate
           * @default null
           */
          n?: number | null;
          /**
           * Presence Penalty
           * @description Presence penalty
           * @default null
           */
          presence_penalty?: number | null;
          /**
           * Stop
           * @description Stop sequences
           * @default null
           */
          stop?: string[] | null;
          /**
           * Temperature
           * @description Sampling temperature
           * @default null
           */
          temperature?: number | null;
          /**
           * Top P
           * @description Nucleus sampling probability
           * @default null
           */
          top_p?: number | null;
      } | null;
      /**
       * Messages
       * @description Input chat messages
       */
      messages: {
          /**
           * Content
           * @description Content of the message
           */
          content: string;
          /**
           * Role
           * @description Role of the message author (e.g., 'user', 'assistant')
           */
          role: string;
      }[];
      /**
       * Model
       * @description Model name (e.g., 'gpt-4o')
       */
      model: string;
      /**
       * Project
       * @description HoneyHive project name
       */
      project: string;
      /**
       * Provider
       * @description Model provider (e.g., 'openai')
       */
      provider: string;
      /**
       * Response
       * @description Model response content
       */
      response: {
          /**
           * Content
           * @description Content of the message
           */
          content: string;
          /**
           * Role
           * @description Role of the message author (e.g., 'user', 'assistant')
           */
          role: string;
      };
      /**
       * Response Format
       * @description Desired response format
       * @default null
       */
      response_format: {
          [key: string]: unknown;
      } | null;
      /**
       * Source
       * @description Source label (e.g., 'playground')
       * @default null
       */
      source: string | null;
      /**
       * Template
       * @description Prompt template messages
       * @default null
       */
      template: {
          /**
           * Content
           * @description Content of the message
           */
          content: string;
          /**
           * Role
           * @description Role of the message author (e.g., 'user', 'assistant')
           */
          role: string;
      }[] | null;
      /**
       * Template Inputs
       * @description Values for prompt template placeholders
       * @default null
       */
      template_inputs: {
          [key: string]: unknown;
      } | null;
      /**
       * Tool Choice
       * @description Tool selection choice
       * @default null
       */
      tool_choice: string | null;
      /**
       * Tools
       * @description Tool definitions (OpenAI-compatible)
       * @default null
       */
      tools: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Usage
       * @description Token usage for the request
       */
      usage: {
          /**
           * Completion Tokens
           * @description Number of completion tokens used
           */
          completion_tokens: number;
          /**
           * Prompt Tokens
           * @description Number of prompt tokens used
           */
          prompt_tokens: number;
          /**
           * Total Tokens
           * @description Total tokens used
           */
          total_tokens: number;
      };
  }[];
};

/**
 * Type of HONEYHIVE's HONEYHIVE_CREATE_BATCH_MODEL_EVENTS tool output.
 */
type HONEYHIVE_CREATE_BATCH_MODEL_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event Ids
       * @description IDs of the created model events
       */
      event_ids: string[];
      /**
       * Success
       * @description Whether the batch creation succeeded
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
 * Type of HONEYHIVE's HONEYHIVE_CREATE_BATCH_TOOL_EVENTS tool input.
 */
type HONEYHIVE_CREATE_BATCH_TOOL_EVENTS_INPUT = {
  /**
   * Events
   * @description Array of tool event objects to create
   */
  events?: {
      /**
       * Children Ids
       * @description List of identifiers for child events
       * @default null
       */
      children_ids: string[] | null;
      /**
       * Config
       * @description Configuration object for the event (e.g., model settings)
       * @default null
       */
      config: {
          [key: string]: unknown;
      } | null;
      /**
       * Duration
       * @description Duration of the event in milliseconds
       * @default null
       */
      duration: number | null;
      /**
       * End Time
       * @description End timestamp in milliseconds
       * @default null
       */
      end_time: number | null;
      /**
       * Error
       * @description Error details or message if the event failed
       * @default null
       */
      error: unknown;
      /**
       * Event Id
       * @description Unique identifier for this event (if supplying your own)
       * @default null
       */
      event_id: string | null;
      /**
       * Event Name
       * @description Human-readable name for the event
       */
      event_name: string;
      /**
       * Event Type
       * @description Type of the event; one of model, tool, or chain
       * @enum {string}
       */
      event_type: "model" | "tool" | "chain";
      /**
       * Feedback
       * @description User or ground-truth feedback for the event
       * @default null
       */
      feedback: {
          [key: string]: unknown;
      } | null;
      /**
       * Inputs
       * @description Inputs payload for the event
       * @default null
       */
      inputs: {
          [key: string]: unknown;
      } | null;
      /**
       * Metadata
       * @description Additional metadata (e.g., cost, token counts)
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Metrics
       * @description Numeric or derived metrics for the event
       * @default null
       */
      metrics: {
          [key: string]: unknown;
      } | null;
      /**
       * Outputs
       * @description Outputs payload for the event
       * @default null
       */
      outputs: {
          [key: string]: unknown;
      } | null;
      /**
       * Parent Id
       * @description Identifier of the parent event, if any
       * @default null
       */
      parent_id: string | null;
      /**
       * Project
       * @description Name of the project this event belongs to
       */
      project: string;
      /**
       * Session Id
       * @description Session identifier to group related events
       * @default null
       */
      session_id: string | null;
      /**
       * Source
       * @description Environment or source label (e.g., production, dev)
       */
      source: string;
      /**
       * Start Time
       * @description Start timestamp in milliseconds
       * @default null
       */
      start_time: number | null;
      /**
       * User Properties
       * @description User-specific properties (e.g., user ID)
       * @default null
       */
      user_properties: {
          [key: string]: unknown;
      } | null;
  }[];
  /**
   * Is Single Session
   * @description If true, all events in the batch are associated with the same session. Defaults to false.
   * @default false
   */
  is_single_session: boolean;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_CREATE_BATCH_TOOL_EVENTS tool output.
 */
type HONEYHIVE_CREATE_BATCH_TOOL_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Event Ids
       * @description IDs of the events created in this batch
       */
      event_ids: string[];
      /**
       * Session Id
       * @description Session identifier returned by the operation
       */
      session_id: string;
      /**
       * Success
       * @description Indicates whether the batch creation succeeded
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
 * Type of HONEYHIVE's HONEYHIVE_CREATE_DATASET tool input.
 */
type HONEYHIVE_CREATE_DATASET_INPUT = {
  /**
   * Datapoints
   * @description List of unique datapoint IDs to include in the dataset
   * @default null
   */
  datapoints: string[] | null;
  /**
   * Description
   * @description A description for the dataset
   * @default null
   */
  description: string | null;
  /**
   * Linked Evals
   * @description List of unique evaluation run IDs to associate with the dataset
   * @default null
   */
  linked_evals: string[] | null;
  /**
   * Metadata
   * @description Any helpful metadata to track for the dataset
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Name of the dataset
   */
  name?: string;
  /**
   * Pipeline Type
   * @description Type of data pipeline
   * @default event
   * @enum {string}
   */
  pipeline_type: "event" | "session";
  /**
   * Project
   * @description Name of the project associated with this dataset
   */
  project?: string;
  /**
   * Saved
   * @description Flag indicating if the dataset is saved
   * @default null
   */
  saved: boolean | null;
  /**
   * Type
   * @description What the dataset is used for
   * @default evaluation
   * @enum {string}
   */
  type: "evaluation" | "fine-tuning";
};

/**
 * Type of HONEYHIVE's HONEYHIVE_CREATE_DATASET tool output.
 */
type HONEYHIVE_CREATE_DATASET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Inserted
       * @description Whether the insert operation succeeded
       */
      inserted: boolean;
      /**
       * Result
       * @description Container for the created resource identifiers
       */
      result: {
          /**
           * Inserted Id
           * @description The ID of the newly created dataset
           */
          insertedId: string;
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
 * Type of HONEYHIVE's HONEYHIVE_CREATE_TOOL tool input.
 */
type HONEYHIVE_CREATE_TOOL_INPUT = {
  /**
   * Description
   * @description Optional detailed description of the tool's purpose.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Human-readable name of the tool.
   */
  name?: string;
  /**
   * Parameters
   * @description JSON schema defining the tool's callable parameters.
   */
  parameters?: {
      [key: string]: unknown;
  };
  /**
   * Task
   * @description Name of the project associated with this tool.
   */
  task?: string;
  /**
   * Type
   * @description Type of the tool; must be either 'function' or 'tool'.
   * @enum {string}
   */
  type?: "function" | "tool";
};

/**
 * Type of HONEYHIVE's HONEYHIVE_CREATE_TOOL tool output.
 */
type HONEYHIVE_CREATE_TOOL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Container for the created resource identifiers
       */
      result: {
          /**
           * Inserted Id
           * @description Identifier of the newly created tool
           */
          insertedId: string;
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
 * Type of HONEYHIVE's HONEYHIVE_DELETE_DATAPOINT tool input.
 */
type HONEYHIVE_DELETE_DATAPOINT_INPUT = {
  /**
   * Id
   * @description Datapoint ID to delete (24-character hexadecimal string)
   */
  id?: string;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_DELETE_DATAPOINT tool output.
 */
type HONEYHIVE_DELETE_DATAPOINT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Indicates whether the datapoint was successfully deleted
       */
      deleted: boolean;
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
 * Type of HONEYHIVE's HONEYHIVE_DELETE_DATASET tool input.
 */
type HONEYHIVE_DELETE_DATASET_INPUT = {
  /**
   * Dataset Id
   * @description Unique identifier of the dataset to delete
   */
  dataset_id?: string;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_DELETE_DATASET tool output.
 */
type HONEYHIVE_DELETE_DATASET_OUTPUT = {
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
 * Type of HONEYHIVE's HONEYHIVE_END_EVALUATION_RUN tool input.
 */
type HONEYHIVE_END_EVALUATION_RUN_INPUT = {
  /**
   * Configuration
   * @description Configuration parameters used in this run
   * @default null
   */
  configuration: {
      [key: string]: unknown;
  } | null;
  /**
   * Datapoint Ids
   * @description List of datapoint UUIDs to associate with this run
   * @default null
   */
  datapoint_ids: string[] | null;
  /**
   * Dataset Id
   * @description The UUID of the dataset this run is associated with
   * @default null
   */
  dataset_id: string | null;
  /**
   * Event Ids
   * @description List of session/event UUIDs to associate with this run
   * @default null
   */
  event_ids: string[] | null;
  /**
   * Metadata
   * @description Arbitrary metadata fields to attach to the run
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Display name for the evaluation run
   * @default null
   */
  name: string | null;
  /**
   * Run Id
   * @description Unique identifier of the evaluation run to update
   */
  run_id?: string;
  /**
   * Status
   * @description Must be set to 'completed' to mark the run as finished
   * @enum {string}
   */
  status?: "pending" | "completed";
};

/**
 * Type of HONEYHIVE's HONEYHIVE_END_EVALUATION_RUN tool output.
 */
type HONEYHIVE_END_EVALUATION_RUN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Evaluation
       * @description Object containing details of the updated evaluation run
       */
      evaluation: {
          [key: string]: unknown;
      };
      /**
       * Warning
       * @description Warning message if some events lacked an associated datapoint_id
       * @default null
       */
      warning: string | null;
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
 * Type of HONEYHIVE's HONEYHIVE_GET_CONFIGURATIONS tool input.
 */
type HONEYHIVE_GET_CONFIGURATIONS_INPUT = {
  /**
   * Env
   * @description Environment to filter by. Allowed values: dev, staging, prod.
   * @default null
   * @enum {string|null}
   */
  env: "dev" | "staging" | "prod" | null;
  /**
   * Name
   * @description The name of the configuration to filter by, e.g. 'v0'.
   * @default null
   */
  name: string | null;
  /**
   * Project
   * @description Project name for configuration like 'Example Project'.
   */
  project?: string;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_GET_CONFIGURATIONS tool output.
 */
type HONEYHIVE_GET_CONFIGURATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Configurations
       * @description List of configuration objects.
       */
      configurations: {
          /**
           *  Id
           * @description Unique ID of the configuration.
           */
          _id: string;
          /**
           * Env
           * @description List of environments where the configuration is active.
           */
          env: string[];
          /**
           * Name
           * @description Name of the configuration.
           */
          name: string;
          /**
           * Parameters
           * @description Configuration parameters.
           */
          parameters: {
              [key: string]: unknown;
          };
          /**
           * Project
           * @description ID of the project to which this configuration belongs.
           */
          project: string;
          /**
           * Provider
           * @description Name of the provider, e.g. 'openai', 'anthropic', etc.
           */
          provider: string;
          /**
           * Type
           * @description Type of the configuration. One of 'LLM' or 'pipeline'.
           * @enum {string}
           */
          type: "LLM" | "pipeline";
          /**
           * User Properties
           * @description Details of the user who created the configuration.
           */
          user_properties: {
              [key: string]: unknown;
          };
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
 * Type of HONEYHIVE's HONEYHIVE_GET_DATASETS tool input.
 */
type HONEYHIVE_GET_DATASETS_INPUT = {
  /**
   * Dataset Id
   * @description Unique dataset ID to filter a specific dataset
   * @default null
   */
  dataset_id: string | null;
  /**
   * Project
   * @description Project name associated with the datasets
   */
  project?: string;
  /**
   * Type
   * @description Dataset type filter. Allowed: 'evaluation', 'fine-tuning'
   * @default null
   * @enum {string|null}
   */
  type: "evaluation" | "fine-tuning" | null;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_GET_DATASETS tool output.
 */
type HONEYHIVE_GET_DATASETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Testcases
       * @description List of dataset objects
       */
      testcases: {
          /**
           * Created At
           * @description Creation timestamp in ISO format
           */
          created_at: string;
          /**
           * Datapoints
           * @description List of datapoint IDs
           */
          datapoints: string[];
          /**
           * Description
           * @description Dataset description
           * @default null
           */
          description: string | null;
          /**
           * Linked Evals
           * @description List of linked evaluations
           */
          linked_evals: unknown[];
          /**
           * Name
           * @description Dataset name
           */
          name: string;
          /**
           * Num Points
           * @description Number of datapoints
           */
          num_points: number;
          /**
           * Pipeline Type
           * @description Pipeline type
           * @default null
           */
          pipeline_type: string | null;
          /**
           * Project
           * @description Project name
           */
          project: string;
          /**
           * Saved
           * @description Indicates if dataset is saved
           */
          saved: boolean;
          /**
           * Type
           * @description Dataset type
           */
          type: string;
          /**
           * Updated At
           * @description Last update timestamp in ISO format
           */
          updated_at: string;
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
 * Type of HONEYHIVE's HONEYHIVE_GET_METRICS tool input.
 */
type HONEYHIVE_GET_METRICS_INPUT = {
  /**
   * Project Name
   * @description Project name associated with metrics
   */
  project_name?: string;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_GET_METRICS tool output.
 */
type HONEYHIVE_GET_METRICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Metrics
       * @description List of all metrics for the given project
       */
      metrics: {
          /**
           *  Id
           * @description Unique identifier
           * @default null
           */
          _id: string | null;
          /**
           * Code Snippet
           * @description Associated code block for the metric
           * @default null
           */
          code_snippet: string | null;
          /**
           * Criteria
           * @description Criteria for human-evaluated metrics
           * @default null
           */
          criteria: string | null;
          /**
           * Description
           * @description What the metric measures
           */
          description: string;
          /**
           * Enabled In Prod
           * @description Whether the metric computes automatically on production events
           */
          enabled_in_prod: boolean;
          /**
           * Event Name
           * @description Event name on which this metric is computed
           * @default null
           */
          event_name: string | null;
          /**
           * Event Type
           * @description Event type on which this metric is computed
           * @default null
           */
          event_type: string | null;
          /**
           * Name
           * @description Name of the metric
           */
          name: string;
          /**
           * Needs Ground Truth
           * @description Whether ground truth data is required
           */
          needs_ground_truth: boolean;
          /**
           * Pass When
           * @description Expected pass condition for boolean metrics
           * @default null
           */
          pass_when: boolean | null;
          /**
           * Prompt
           * @description Evaluator prompt for the metric
           * @default null
           */
          prompt: string | null;
          /**
           * Return Type
           * @description Data type of metric value
           * @enum {string}
           */
          return_type: "boolean" | "float" | "string";
          /**
           * Task
           * @description Project name associated with this metric
           */
          task: string;
          /**
           * Threshold
           * @description Threshold for numeric metrics
           * @default null
           */
          threshold: {
              /**
               * Max
               * @description Upper bound for numeric metric (inclusive)
               * @default null
               */
              max: number | null;
              /**
               * Min
               * @description Lower bound for numeric metric (inclusive)
               * @default null
               */
              min: number | null;
          } | null;
          /**
           * Type
           * @description Metric type
           * @enum {string}
           */
          type: "custom" | "model" | "human";
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
 * Type of HONEYHIVE's HONEYHIVE_GET_PROJECTS tool input.
 */
type HONEYHIVE_GET_PROJECTS_INPUT = {
  /**
   * Name
   * @description Optional filter to return only projects whose name contains this string
   * @default null
   */
  name: string | null;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_GET_PROJECTS tool output.
 */
type HONEYHIVE_GET_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description Array of project objects
       */
      projects: {
          /**
           * Description
           * @description Project description
           */
          description: string;
          /**
           * Id
           * @description Unique project identifier
           */
          id: string;
          /**
           * Name
           * @description Project name
           */
          name: string;
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
 * Type of HONEYHIVE's HONEYHIVE_LIST_TOOLS tool input.
 */
type HONEYHIVE_LIST_TOOLS_INPUT = {
  /**
   * Limit
   * @description Maximum number of tools to return per page
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for paginated results
   * @default null
   */
  page: number | null;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_LIST_TOOLS tool output.
 */
type HONEYHIVE_LIST_TOOLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tools
       * @description Array of tool objects
       */
      tools: {
          /**
           *  Id
           * @description Unique identifier of the tool
           */
          _id: string;
          /**
           * Description
           * @description Description of the tool
           * @default null
           */
          description: string | null;
          /**
           * Name
           * @description Name of the tool
           */
          name: string;
          /**
           * Parameters
           * @description Function or plugin parameters schema
           */
          parameters: {
              [key: string]: unknown;
          };
          /**
           * Task
           * @description Project name associated with this tool
           */
          task: string;
          /**
           * Tool Type
           * @description Type of the tool, either 'function' or 'tool'
           * @enum {string}
           */
          tool_type: "function" | "tool";
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
 * Type of HONEYHIVE's HONEYHIVE_RETRIEVE_DATAPOINT tool input.
 */
type HONEYHIVE_RETRIEVE_DATAPOINT_INPUT = {
  /**
   * Id
   * @description Datapoint ID to retrieve (string identifier)
   */
  id?: string;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_RETRIEVE_DATAPOINT tool output.
 */
type HONEYHIVE_RETRIEVE_DATAPOINT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Datapoint
       * @description Array containing the requested datapoint object(s)
       */
      datapoint: {
          /**
           *  Id
           * @description Unique datapoint identifier
           */
          _id: string;
          /**
           * Created At
           * @description Creation time in ISO 8601 format
           */
          created_at: string;
          /**
           * Ground Truth
           * @description Expected or ground truth response
           */
          ground_truth: {
              /**
               * Content
               * @description Ground truth content
               */
              content: string;
              /**
               * Role
               * @description Role label for the ground truth, e.g. 'assistant'
               */
              role: string;
          };
          /**
           * History
           * @description Conversation history leading to this datapoint
           */
          history: {
              /**
               * Content
               * @description Message content
               */
              content: string;
              /**
               * Role
               * @description Role in the conversation, e.g. 'user' or 'system'
               */
              role: string;
          }[];
          /**
           * Inputs
           * @description Input payload for the datapoint
           */
          inputs: {
              [key: string]: string;
          };
          /**
           * Linked Datasets
           * @description List of linked dataset IDs
           */
          linked_datasets: string[];
          /**
           * Linked Evals
           * @description List of linked evaluation IDs
           */
          linked_evals: string[];
          /**
           * Linked Event
           * @description Linked event ID, if any
           * @default null
           */
          linked_event: string | null;
          /**
           * Metadata
           * @description Token usage and question metadata
           */
          metadata: {
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
               * Question Type
               * @description Type of question asked, if available
               * @default null
               */
              question_type: string | null;
              /**
               * Total Tokens
               * @description Total tokens used (sum)
               */
              total_tokens: number;
          };
          /**
           * Project Id
           * @description Project identifier
           */
          project_id: string;
          /**
           * Saved
           * @description Whether this datapoint is saved by the user
           */
          saved: boolean;
          /**
           * Tenant
           * @description Tenant identifier
           */
          tenant: string;
          /**
           * Type
           * @description Type of datapoint, e.g. 'event'
           */
          type: string;
          /**
           * Updated At
           * @description Last updated time in ISO 8601 format
           */
          updated_at: string;
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
 * Type of HONEYHIVE's HONEYHIVE_RETRIEVE_DATAPOINTS tool input.
 */
type HONEYHIVE_RETRIEVE_DATAPOINTS_INPUT = {
  /**
   * Datapoint Ids
   * @description Optional list of datapoint IDs to retrieve.
   * @default null
   */
  datapoint_ids: string[] | null;
  /**
   * Dataset Name
   * @description Optional name of the dataset to filter datapoints.
   * @default null
   */
  dataset_name: string | null;
  /**
   * Project
   * @description Project name to filter datapoints.
   */
  project?: string;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_RETRIEVE_DATAPOINTS tool output.
 */
type HONEYHIVE_RETRIEVE_DATAPOINTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Datapoints
       * @description List of datapoint objects.
       */
      datapoints: {
          /**
           *  Id
           * @description Unique identifier for the datapoint.
           */
          _id: string;
          /**
           * Created At
           * @description Creation timestamp in ISO format.
           */
          created_at: string;
          /**
           * Ground Truth
           * @description Ground truth for the datapoint.
           */
          ground_truth: {
              [key: string]: unknown;
          };
          /**
           * History
           * @description Conversation history associated with the datapoint.
           */
          history: {
              [key: string]: unknown;
          }[];
          /**
           * Inputs
           * @description Arbitrary JSON inputs for the datapoint.
           */
          inputs: {
              [key: string]: unknown;
          };
          /**
           * Linked Datasets
           * @description IDs of datasets that include the datapoint.
           */
          linked_datasets: string[];
          /**
           * Linked Evals
           * @description List of linked evaluation IDs.
           */
          linked_evals: string[];
          /**
           * Linked Event
           * @description Event ID from which the datapoint originated.
           * @default null
           */
          linked_event: string | null;
          /**
           * Metadata
           * @description Additional metadata for the datapoint.
           */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Project Id
           * @description Project identifier.
           */
          project_id: string;
          /**
           * Saved
           * @description Indicates if the datapoint is marked as saved.
           */
          saved: boolean;
          /**
           * Tenant
           * @description Tenant identifier.
           */
          tenant: string;
          /**
           * Type
           * @description Type of datapoint, e.g., 'session' or 'event'.
           */
          type: string;
          /**
           * Updated At
           * @description Last update timestamp in ISO format.
           */
          updated_at: string;
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
 * Type of HONEYHIVE's HONEYHIVE_RETRIEVE_EVENTS tool input.
 */
type HONEYHIVE_RETRIEVE_EVENTS_INPUT = {
  /**
   * DateRange
   * @description Date range filter for events, using ISO 8601 timestamps.
   * @default null
   */
  dateRange: {
      /**
       * $Gte
       * @description Start of date range (ISO 8601)
       * @default null
       */
      $gte: string | null;
      /**
       * $Lte
       * @description End of date range (ISO 8601)
       * @default null
       */
      $lte: string | null;
  } | null;
  /**
   * Filters
   * @description Array of filter objects to narrow results
   */
  filters?: {
      /**
       * Field
       * @description Field to filter by (e.g., event_type, metadata.cost, inputs.chat_history.content)
       */
      field: string;
      /**
       * Operator
       * @description Comparison operator for the filter
       * @enum {string}
       */
      operator: "is" | "is not" | "contains" | "not contains" | "greater than";
      /**
       * Type
       * @description Data type of the field/value (e.g., 'string')
       * @default null
       */
      type: string | null;
      /**
       * Value
       * @description Value matched against the field using the operator
       */
      value: unknown;
  }[];
  /**
   * Limit
   * @description Limit number of events returned (default 1000; max 7500)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination (default 1)
   * @default null
   */
  page: number | null;
  /**
   * Project
   * @description Name of the project to query
   */
  project?: string;
  /**
   * Projections
   * @description Fields to include in the response
   * @default null
   */
  projections: string[] | null;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_RETRIEVE_EVENTS tool output.
 */
type HONEYHIVE_RETRIEVE_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description List of events matching filters
       */
      events: {
          /**
           * Children Ids
           * @description List of child event IDs
           * @default null
           */
          children_ids: string[] | null;
          /**
           * Config
           * @description Event configuration object
           * @default null
           */
          config: {
              [key: string]: unknown;
          } | null;
          /**
           * Duration
           * @description Duration of the event in seconds
           * @default null
           */
          duration: number | null;
          /**
           * End Time
           * @description Event end time in ISO 8601 format
           */
          end_time: string;
          /**
           * Error
           * @description Error object if any
           * @default null
           */
          error: {
              [key: string]: unknown;
          } | null;
          /**
           * Event Id
           * @description Event ID
           */
          event_id: string;
          /**
           * Event Name
           * @description Event name
           * @default null
           */
          event_name: string | null;
          /**
           * Event Type
           * @description Event type
           */
          event_type: string;
          /**
           * Feedback
           * @description Feedback object
           * @default null
           */
          feedback: {
              [key: string]: unknown;
          } | null;
          /**
           * Inputs
           * @description Event inputs object
           * @default null
           */
          inputs: {
              [key: string]: unknown;
          } | null;
          /**
           * Metadata
           * @description Metadata object (cost, tokens, etc.)
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Metrics
           * @description Metrics computed for the event
           * @default null
           */
          metrics: {
              [key: string]: unknown;
          } | null;
          /**
           * Outputs
           * @description Event outputs object
           * @default null
           */
          outputs: {
              [key: string]: unknown;
          } | null;
          /**
           * Parent Id
           * @description Parent event ID
           * @default null
           */
          parent_id: string | null;
          /**
           * Project Id
           * @description Project identifier of the event
           */
          project_id: string;
          /**
           * Session Id
           * @description Session ID of the event
           */
          session_id: string;
          /**
           * Source
           * @description Source of the event
           */
          source: string;
          /**
           * Start Time
           * @description Event start time in ISO 8601 format
           */
          start_time: string;
          /**
           * User Properties
           * @description User-defined properties
           * @default null
           */
          user_properties: {
              [key: string]: unknown;
          } | null;
      }[];
      /**
       * Total Events
       * @description Total number of events matching filters
       */
      totalEvents: number;
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
 * Type of HONEYHIVE's HONEYHIVE_RETRIEVE_EXPERIMENT_RESULT tool input.
 */
type HONEYHIVE_RETRIEVE_EXPERIMENT_RESULT_INPUT = {
  /**
   * Aggregate Function
   * @description Optional aggregation function for metrics. Allowed: average, min, max, median, p95, p99, p90, sum, count
   * @default null
   * @enum {string|null}
   */
  aggregate_function: "average" | "min" | "max" | "median" | "p95" | "p99" | "p90" | "sum" | "count" | null;
  /**
   * Project Id
   * @description Unique identifier of the project this run belongs to
   */
  project_id?: string;
  /**
   * Run Id
   * @description Unique identifier of the experiment run
   */
  run_id?: string;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_RETRIEVE_EXPERIMENT_RESULT tool output.
 */
type HONEYHIVE_RETRIEVE_EXPERIMENT_RESULT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Datapoints
       * @description Detailed datapoint-level results
       */
      datapoints: {
          /**
           * Datapoint Id
           * @description Unique ID of the datapoint
           */
          datapoint_id: string;
          /**
           * Metrics
           * @description List of metric results for this datapoint
           */
          metrics: {
              /**
               * Event Name
               * @description Event associated with this metric
               */
              event_name: string;
              /**
               * Event Type
               * @description Event type associated with this metric
               */
              event_type: string;
              /**
               * Name
               * @description Metric name for this datapoint
               */
              name: string;
              /**
               * Passed
               * @description Whether this datapoint passed this metric threshold
               */
              passed: boolean;
              /**
               * Value
               * @description Metric value
               */
              value: number;
          }[];
          /**
           * Passed
           * @description Overall pass/fail status of the datapoint
           */
          passed: boolean;
          /**
           * Session Id
           * @description Session ID during which this datapoint was recorded
           */
          session_id: string;
      }[];
      /**
       * Failed
       * @description List of datapoint IDs that failed overall
       */
      failed: string[];
      /**
       * Metrics
       * @description Aggregated metrics overview
       */
      metrics: {
          /**
           * Aggregation Function
           * @description Function used to aggregate metrics
           */
          aggregation_function: string;
          /**
           * Details
           * @description Detailed metrics entries
           */
          details: {
              /**
               * Aggregate
               * @description Aggregated metric value
               */
              aggregate: number;
              /**
               * Datapoints
               * @description Breakdown of datapoint pass/fail for this metric
               */
              datapoints: {
                  /**
                   * Failed
                   * @description List of datapoint IDs that failed for this metric
                   */
                  failed: string[];
                  /**
                   * Passed
                   * @description List of datapoint IDs that passed for this metric
                   */
                  passed: string[];
              };
              /**
               * Event Name
               * @description Associated event name
               */
              event_name: string;
              /**
               * Event Type
               * @description Associated event type
               */
              event_type: string;
              /**
               * Metric Name
               * @description Name of the metric
               */
              metric_name: string;
              /**
               * Metric Type
               * @description Type/category of the metric
               */
              metric_type: string;
              /**
               * Values
               * @description Raw metric values
               */
              values: number[];
          }[];
      };
      /**
       * Passed
       * @description List of datapoint IDs that passed overall
       */
      passed: string[];
      /**
       * Status
       * @description Current status of the run
       */
      status: string;
      /**
       * Success
       * @description Whether the API call was successful
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
 * Type of HONEYHIVE's HONEYHIVE_START_EVALUATION_RUN tool input.
 */
type HONEYHIVE_START_EVALUATION_RUN_INPUT = {
  /**
   * Configuration
   * @description Configuration used for this run
   * @default null
   */
  configuration: {
      [key: string]: unknown;
  } | null;
  /**
   * Datapoint Ids
   * @description UUIDs of datapoints from the original dataset linked to this run
   * @default null
   */
  datapoint_ids: string[] | null;
  /**
   * Dataset Id
   * @description UUID of the dataset associated with this run
   * @default null
   */
  dataset_id: string | null;
  /**
   * Event Ids
   * @description UUIDs of the sessions/events this run is associated with
   */
  event_ids?: string[];
  /**
   * Metadata
   * @description Additional metadata for the run
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Name of the evaluation run to be displayed
   */
  name?: string;
  /**
   * Project
   * @description UUID of the project this run is associated with
   */
  project?: string;
  /**
   * Status
   * @description Status of the run; allowed: 'pending', 'completed'
   * @default null
   * @enum {string|null}
   */
  status: "pending" | "completed" | null;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_START_EVALUATION_RUN tool output.
 */
type HONEYHIVE_START_EVALUATION_RUN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Evaluation
       * @description Details of the created evaluation run
       */
      evaluation: {
          /**
           * Configuration
           * @description Configuration used for the run
           */
          configuration: {
              [key: string]: unknown;
          };
          /**
           * Created At
           * @description Timestamp when the run was created (ISO 8601)
           */
          created_at: string;
          /**
           * Datapoint Ids
           * @description Datapoint UUIDs included in this run
           * @default null
           */
          datapoint_ids: string[] | null;
          /**
           * Dataset Id
           * @description Linked dataset UUID, if provided
           * @default null
           */
          dataset_id: string | null;
          /**
           * Event Ids
           * @description UUIDs of the sessions/events for this run
           */
          event_ids: string[];
          /**
           * Metadata
           * @description Additional metadata for the run
           */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Name
           * @description Display name of the run
           */
          name: string;
          /**
           * Project
           * @description Project UUID associated with this run
           */
          project: string;
          /**
           * Results
           * @description Results object for evaluation metrics
           */
          results: {
              [key: string]: unknown;
          };
          /**
           * Run Id
           * @description UUID of the created evaluation run
           */
          run_id: string;
          /**
           * Status
           * @description Current status of the run
           * @enum {string}
           */
          status: "pending" | "completed";
      };
      /**
       * Run Id
       * @description UUID of the created evaluation run (top-level duplicate)
       */
      run_id: string;
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
 * Type of HONEYHIVE's HONEYHIVE_START_SESSION tool input.
 */
type HONEYHIVE_START_SESSION_INPUT = {
  /**
   * Session
   * @description Session metadata payload
   */
  session?: {
      /**
       * Children Ids
       * @description List of identifiers for nested child events
       * @default null
       */
      children_ids: string[] | null;
      /**
       * Duration
       * @description Duration of the event in milliseconds
       * @default null
       */
      duration: number | null;
      /**
       * End Time
       * @description UTC timestamp (ms) when the event ended
       * @default null
       */
      end_time: number | null;
      /**
       * Error
       * @description Error message if this event failed
       * @default null
       */
      error: string | null;
      /**
       * Event Id
       * @description Unique identifier of this session-start event
       */
      event_id: string;
      /**
       * Event Type
       * @description Type of the event. One of: session, model, tool, chain
       * @enum {string}
       */
      event_type: "session" | "model" | "tool" | "chain";
      /**
       * Feedback
       * @description User feedback associated with this event
       * @default null
       */
      feedback: {
          [key: string]: unknown;
      } | null;
      /**
       * Inputs
       * @description Input payload for this event
       * @default null
       */
      inputs: {
          [key: string]: unknown;
      } | null;
      /**
       * Metadata
       * @description System or application metadata for this event
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Metrics
       * @description Computed metrics over event outputs
       * @default null
       */
      metrics: {
          [key: string]: unknown;
      } | null;
      /**
       * Outputs
       * @description Output payload for this event
       * @default null
       */
      outputs: {
          [key: string]: unknown;
      } | null;
      /**
       * Parent Id
       * @description Identifier of the parent event, if any
       * @default null
       */
      parent_id: string | null;
      /**
       * Project
       * @description Project identifier to which this session belongs
       */
      project: string;
      /**
       * Session Id
       * @description Unique identifier to assign to this session
       */
      session_id: string;
      /**
       * Session Name
       * @description Human-readable name for this session
       */
      session_name: string;
      /**
       * Source
       * @description Source of the event (e.g., production, staging)
       */
      source: string;
      /**
       * Start Time
       * @description UTC timestamp (ms) when the event started
       * @default null
       */
      start_time: number | null;
      /**
       * User Properties
       * @description User-defined properties for this event
       * @default null
       */
      user_properties: {
          [key: string]: unknown;
      } | null;
  };
};

/**
 * Type of HONEYHIVE's HONEYHIVE_START_SESSION tool output.
 */
type HONEYHIVE_START_SESSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Session Id
       * @description Identifier of the newly started session
       */
      session_id: string;
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
 * Type of HONEYHIVE's HONEYHIVE_UPDATE_DATAPOINT tool input.
 */
type HONEYHIVE_UPDATE_DATAPOINT_INPUT = {
  /**
   * Ground Truth
   * @description Expected output JSON object for the datapoint
   * @default null
   */
  ground_truth: {
      [key: string]: unknown;
  } | null;
  /**
   * History
   * @description Conversation history associated with the datapoint
   * @default null
   */
  history: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Id
   * @description Datapoint ID to update (string)
   */
  id?: string;
  /**
   * Inputs
   * @description Arbitrary JSON object containing the inputs for the datapoint
   * @default null
   */
  inputs: {
      [key: string]: unknown;
  } | null;
  /**
   * Linked Datasets
   * @description IDs of datasets that include the datapoint
   * @default null
   */
  linked_datasets: string[] | null;
  /**
   * Linked Evals
   * @description IDs of evaluations where the datapoint is included
   * @default null
   */
  linked_evals: string[] | null;
  /**
   * Metadata
   * @description Additional metadata for the datapoint
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_UPDATE_DATAPOINT tool output.
 */
type HONEYHIVE_UPDATE_DATAPOINT_OUTPUT = {
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
 * Type of HONEYHIVE's HONEYHIVE_UPDATE_DATASET tool input.
 */
type HONEYHIVE_UPDATE_DATASET_INPUT = {
  /**
   * Datapoints
   * @description Full list of datapoint IDs to associate with the dataset
   * @default null
   */
  datapoints: string[] | null;
  /**
   * Dataset Id
   * @description Unique identifier of the dataset to update
   */
  dataset_id?: string;
  /**
   * Description
   * @description Updated description for the dataset
   * @default null
   */
  description: string | null;
  /**
   * Linked Evals
   * @description List of evaluation run IDs to link to this dataset
   * @default null
   */
  linked_evals: string[] | null;
  /**
   * Metadata
   * @description Arbitrary metadata to attach to the dataset
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Updated name for the dataset
   * @default null
   */
  name: string | null;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_UPDATE_DATASET tool output.
 */
type HONEYHIVE_UPDATE_DATASET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Datapoints
       * @description List of datapoint IDs now associated with the dataset
       * @default null
       */
      datapoints: string[] | null;
      /**
       * Description
       * @description Description of the updated dataset
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description ID of the updated dataset
       */
      id: string;
      /**
       * Linked Evals
       * @description List of evaluation run IDs now linked to the dataset
       * @default null
       */
      linked_evals: string[] | null;
      /**
       * Metadata
       * @description Metadata stored for the dataset
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Name
       * @description Name of the updated dataset
       * @default null
       */
      name: string | null;
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
 * Type of HONEYHIVE's HONEYHIVE_UPDATE_EVENT tool input.
 */
type HONEYHIVE_UPDATE_EVENT_INPUT = {
  /**
   * Config
   * @description Configuration to apply/update
   * @default null
   */
  config: {
      [key: string]: unknown;
  } | null;
  /**
   * Duration
   * @description Duration of the event in seconds
   * @default null
   */
  duration: number | null;
  /**
   * Event Id
   * @description ID of the event to update
   */
  event_id?: string;
  /**
   * Feedback
   * @description Feedback payload to attach/update
   * @default null
   */
  feedback: {
      [key: string]: unknown;
  } | null;
  /**
   * Metadata
   * @description Additional metadata to set/update for the event
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Metrics
   * @description Metrics to record/update
   * @default null
   */
  metrics: {
      [key: string]: unknown;
  } | null;
  /**
   * Outputs
   * @description Outputs to set/update for the event
   * @default null
   */
  outputs: {
      [key: string]: unknown;
  } | null;
  /**
   * User Properties
   * @description Custom user properties to set/update
   * @default null
   */
  user_properties: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_UPDATE_EVENT tool output.
 */
type HONEYHIVE_UPDATE_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response message from API
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
 * Type of HONEYHIVE's HONEYHIVE_UPDATE_METRIC tool input.
 */
type HONEYHIVE_UPDATE_METRIC_INPUT = {
  /**
   * Code Snippet
   * @description Updated code block for the metric
   * @default null
   */
  code_snippet: string | null;
  /**
   * Criteria
   * @description Criteria for human-evaluated metrics
   * @default null
   */
  criteria: string | null;
  /**
   * Description
   * @description Short description of what the metric does
   * @default null
   */
  description: string | null;
  /**
   * Enabled In Prod
   * @description Whether to compute this metric automatically on production events
   * @default null
   */
  enabled_in_prod: boolean | null;
  /**
   * Event Name
   * @description Name of the event the metric is computed on
   * @default null
   */
  event_name: string | null;
  /**
   * Event Type
   * @description Type of event the metric is computed on
   * @default null
   * @enum {string|null}
   */
  event_type: "model" | "tool" | "chain" | "session" | null;
  /**
   * Metric Id
   * @description Unique identifier of the metric to update
   */
  metric_id?: string;
  /**
   * Name
   * @description Updated name of the metric
   * @default null
   */
  name: string | null;
  /**
   * Needs Ground Truth
   * @description Whether a ground truth value is required to compute this metric
   * @default null
   */
  needs_ground_truth: boolean | null;
  /**
   * Pass When
   * @description Expected pass condition for boolean metrics
   * @default null
   */
  pass_when: boolean | null;
  /**
   * Prompt
   * @description Updated evaluator prompt for the metric
   * @default null
   */
  prompt: string | null;
  /**
   * Return Type
   * @description Expected return type of the metric
   * @default null
   * @enum {string|null}
   */
  return_type: "boolean" | "float" | "string" | null;
  /**
   * Threshold
   * @description Threshold settings for numeric metrics.
   * @default null
   */
  threshold: {
      /**
       * Max
       * @description Upper bound for numeric metric (inclusive)
       * @default null
       */
      max: number | null;
      /**
       * Min
       * @description Lower bound for numeric metric (inclusive)
       * @default null
       */
      min: number | null;
  } | null;
  /**
   * Type
   * @description Type of the metric
   * @default null
   * @enum {string|null}
   */
  type: "custom" | "model" | "human" | null;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_UPDATE_METRIC tool output.
 */
type HONEYHIVE_UPDATE_METRIC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message returned by the API
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
 * Type of HONEYHIVE's HONEYHIVE_UPDATE_PROJECT tool input.
 */
type HONEYHIVE_UPDATE_PROJECT_INPUT = {
  /**
   * Description
   * @description New description for the project
   * @default null
   */
  description: string | null;
  /**
   * Id
   * @description Unique identifier of the project to update
   */
  id?: string;
  /**
   * Name
   * @description New name for the project
   * @default null
   */
  name: string | null;
};

/**
 * Type of HONEYHIVE's HONEYHIVE_UPDATE_PROJECT tool output.
 */
type HONEYHIVE_UPDATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Project description
       */
      description: string;
      /**
       * Id
       * @description Unique project identifier
       */
      id: string;
      /**
       * Name
       * @description Project name
       */
      name: string;
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
 * Type map of all available tool input types for toolkit "HONEYHIVE".
 */
export type HONEYHIVE_TOOL_INPUTS = {
  ADD_DATAPOINTS_TO_DATASET: HONEYHIVE_ADD_DATAPOINTS_TO_DATASET_INPUT
  CREATE_BATCH_MODEL_EVENTS: HONEYHIVE_CREATE_BATCH_MODEL_EVENTS_INPUT
  CREATE_BATCH_TOOL_EVENTS: HONEYHIVE_CREATE_BATCH_TOOL_EVENTS_INPUT
  CREATE_DATASET: HONEYHIVE_CREATE_DATASET_INPUT
  CREATE_TOOL: HONEYHIVE_CREATE_TOOL_INPUT
  DELETE_DATAPOINT: HONEYHIVE_DELETE_DATAPOINT_INPUT
  DELETE_DATASET: HONEYHIVE_DELETE_DATASET_INPUT
  END_EVALUATION_RUN: HONEYHIVE_END_EVALUATION_RUN_INPUT
  GET_CONFIGURATIONS: HONEYHIVE_GET_CONFIGURATIONS_INPUT
  GET_DATASETS: HONEYHIVE_GET_DATASETS_INPUT
  GET_METRICS: HONEYHIVE_GET_METRICS_INPUT
  GET_PROJECTS: HONEYHIVE_GET_PROJECTS_INPUT
  LIST_TOOLS: HONEYHIVE_LIST_TOOLS_INPUT
  RETRIEVE_DATAPOINT: HONEYHIVE_RETRIEVE_DATAPOINT_INPUT
  RETRIEVE_DATAPOINTS: HONEYHIVE_RETRIEVE_DATAPOINTS_INPUT
  RETRIEVE_EVENTS: HONEYHIVE_RETRIEVE_EVENTS_INPUT
  RETRIEVE_EXPERIMENT_RESULT: HONEYHIVE_RETRIEVE_EXPERIMENT_RESULT_INPUT
  START_EVALUATION_RUN: HONEYHIVE_START_EVALUATION_RUN_INPUT
  START_SESSION: HONEYHIVE_START_SESSION_INPUT
  UPDATE_DATAPOINT: HONEYHIVE_UPDATE_DATAPOINT_INPUT
  UPDATE_DATASET: HONEYHIVE_UPDATE_DATASET_INPUT
  UPDATE_EVENT: HONEYHIVE_UPDATE_EVENT_INPUT
  UPDATE_METRIC: HONEYHIVE_UPDATE_METRIC_INPUT
  UPDATE_PROJECT: HONEYHIVE_UPDATE_PROJECT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HONEYHIVE".
 */
export type HONEYHIVE_TOOL_OUTPUTS = {
  ADD_DATAPOINTS_TO_DATASET: HONEYHIVE_ADD_DATAPOINTS_TO_DATASET_OUTPUT
  CREATE_BATCH_MODEL_EVENTS: HONEYHIVE_CREATE_BATCH_MODEL_EVENTS_OUTPUT
  CREATE_BATCH_TOOL_EVENTS: HONEYHIVE_CREATE_BATCH_TOOL_EVENTS_OUTPUT
  CREATE_DATASET: HONEYHIVE_CREATE_DATASET_OUTPUT
  CREATE_TOOL: HONEYHIVE_CREATE_TOOL_OUTPUT
  DELETE_DATAPOINT: HONEYHIVE_DELETE_DATAPOINT_OUTPUT
  DELETE_DATASET: HONEYHIVE_DELETE_DATASET_OUTPUT
  END_EVALUATION_RUN: HONEYHIVE_END_EVALUATION_RUN_OUTPUT
  GET_CONFIGURATIONS: HONEYHIVE_GET_CONFIGURATIONS_OUTPUT
  GET_DATASETS: HONEYHIVE_GET_DATASETS_OUTPUT
  GET_METRICS: HONEYHIVE_GET_METRICS_OUTPUT
  GET_PROJECTS: HONEYHIVE_GET_PROJECTS_OUTPUT
  LIST_TOOLS: HONEYHIVE_LIST_TOOLS_OUTPUT
  RETRIEVE_DATAPOINT: HONEYHIVE_RETRIEVE_DATAPOINT_OUTPUT
  RETRIEVE_DATAPOINTS: HONEYHIVE_RETRIEVE_DATAPOINTS_OUTPUT
  RETRIEVE_EVENTS: HONEYHIVE_RETRIEVE_EVENTS_OUTPUT
  RETRIEVE_EXPERIMENT_RESULT: HONEYHIVE_RETRIEVE_EXPERIMENT_RESULT_OUTPUT
  START_EVALUATION_RUN: HONEYHIVE_START_EVALUATION_RUN_OUTPUT
  START_SESSION: HONEYHIVE_START_SESSION_OUTPUT
  UPDATE_DATAPOINT: HONEYHIVE_UPDATE_DATAPOINT_OUTPUT
  UPDATE_DATASET: HONEYHIVE_UPDATE_DATASET_OUTPUT
  UPDATE_EVENT: HONEYHIVE_UPDATE_EVENT_OUTPUT
  UPDATE_METRIC: HONEYHIVE_UPDATE_METRIC_OUTPUT
  UPDATE_PROJECT: HONEYHIVE_UPDATE_PROJECT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HONEYHIVE toolkit.
 */
export const HONEYHIVE = {
  slug: "honeyhive",
  tools: {
    /**
     * Tool to add datapoints to a dataset. Use when you need to append multiple entries with specified input, ground truth, and history mappings.
     */
    ADD_DATAPOINTS_TO_DATASET: "HONEYHIVE_ADD_DATAPOINTS_TO_DATASET",
    /**
     * Tool to create multiple model events in a single request. Use when you need to log a batch of event interactions to HoneyHive.
     */
    CREATE_BATCH_MODEL_EVENTS: "HONEYHIVE_CREATE_BATCH_MODEL_EVENTS",
    /**
     * Tool to log a batch of external API calls as tool events. Use when you need to record multiple tool events in one request—use after gathering all event data.
     */
    CREATE_BATCH_TOOL_EVENTS: "HONEYHIVE_CREATE_BATCH_TOOL_EVENTS",
    /**
     * Tool to create a dataset. Use when you need to initialize a new dataset within a project.
     */
    CREATE_DATASET: "HONEYHIVE_CREATE_DATASET",
    /**
     * Tool to create a new tool. Use when you need to register a new function or plugin for invocation.
     */
    CREATE_TOOL: "HONEYHIVE_CREATE_TOOL",
    /**
     * Tool to delete a specific datapoint by its ID. Use when you need to remove a datapoint from HoneyHive after confirming its identifier.
     */
    DELETE_DATAPOINT: "HONEYHIVE_DELETE_DATAPOINT",
    /**
     * Tool to delete a dataset by ID. Use when you need to remove a dataset after confirming its ID.
     */
    DELETE_DATASET: "HONEYHIVE_DELETE_DATASET",
    /**
     * Tool to mark an evaluation run as completed. Use after finishing manual evaluations to update the run status to completed.
     */
    END_EVALUATION_RUN: "HONEYHIVE_END_EVALUATION_RUN",
    /**
     * Tool to retrieve a list of configurations. Use when you need to fetch all configurations for a specific project before making changes.
     */
    GET_CONFIGURATIONS: "HONEYHIVE_GET_CONFIGURATIONS",
    /**
     * Tool to retrieve a list of datasets. Use when you need to fetch datasets for a specific project with optional filters.
     */
    GET_DATASETS: "HONEYHIVE_GET_DATASETS",
    /**
     * Tool to retrieve all metrics. Use when you need to list metrics for a specific project, after obtaining project context.
     */
    GET_METRICS: "HONEYHIVE_GET_METRICS",
    /**
     * Tool to retrieve projects. Use when you need to list all available projects.
     */
    GET_PROJECTS: "HONEYHIVE_GET_PROJECTS",
    /**
     * Tool to list all available Honeyhive tools. Use when you need to discover which functions or plugins are registered for use.
     */
    LIST_TOOLS: "HONEYHIVE_LIST_TOOLS",
    /**
     * Tool to retrieve a specific datapoint by its ID. Use when you have a datapoint ID and need its full details.
     */
    RETRIEVE_DATAPOINT: "HONEYHIVE_RETRIEVE_DATAPOINT",
    /**
     * Tool to retrieve a list of datapoints. Use when you need to fetch datapoints for a project with optional filters.
     */
    RETRIEVE_DATAPOINTS: "HONEYHIVE_RETRIEVE_DATAPOINTS",
    /**
     * Tool to retrieve events by filters. Use when you need to export events based on filter criteria, date range, and pagination.
     */
    RETRIEVE_EVENTS: "HONEYHIVE_RETRIEVE_EVENTS",
    /**
     * Tool to retrieve the result of a specific experiment run. Use when you need the status, metrics, and datapoint-level details of a completed experiment.
     */
    RETRIEVE_EXPERIMENT_RESULT: "HONEYHIVE_RETRIEVE_EXPERIMENT_RESULT",
    /**
     * Tool to initiate an evaluation run using external datasets. Use after selecting a project and events; optionally link a dataset.
     */
    START_EVALUATION_RUN: "HONEYHIVE_START_EVALUATION_RUN",
    /**
     * Tool to start a new session. Use when you need to initiate a new tracking session and retrieve its session_id.
     */
    START_SESSION: "HONEYHIVE_START_SESSION",
    /**
     * Tool to update a specific datapoint. Use when you need to modify fields of an existing datapoint.
     */
    UPDATE_DATAPOINT: "HONEYHIVE_UPDATE_DATAPOINT",
    /**
     * Tool to update an existing dataset. Use when you need to modify a dataset's details (name, description, datapoints, linked evaluations, or metadata) after confirming its ID.
     */
    UPDATE_DATASET: "HONEYHIVE_UPDATE_DATASET",
    /**
     * Tool to update an event. Use when updating event details by ID.
     */
    UPDATE_EVENT: "HONEYHIVE_UPDATE_EVENT",
    /**
     * Tool to update an existing metric. Use when you need to modify a metric’s properties after creation. Ensure you retrieve the metric first to verify its current state.
     */
    UPDATE_METRIC: "HONEYHIVE_UPDATE_METRIC",
    /**
     * Tool to update a project's name or description. Use when you need to modify an existing project by its ID after creation.
     */
    UPDATE_PROJECT: "HONEYHIVE_UPDATE_PROJECT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HONEYHIVE".
 */
export type HONEYHIVE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HONEYHIVE".
 */
export type HONEYHIVE_TRIGGER_EVENTS = {}
