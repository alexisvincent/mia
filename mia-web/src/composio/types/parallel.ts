// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PARALLEL's PARALLEL_CREATE_TASK_GROUP tool input.
 */
type PARALLEL_CREATE_TASK_GROUP_INPUT = {
  /**
   * TaskGroupConfig
   * @description Configuration settings for a task group.
   * @default null
   */
  config: {
      /**
       * Batch Size
       * @description Number of tasks to process in one batch.
       * @default null
       */
      batchSize: number | null;
      /**
       * Max Parallel Tasks
       * @description Maximum number of tasks to run in parallel.
       * @default null
       */
      maxParallelTasks: number | null;
  } | null;
  /**
   * Description
   * @description A description for the task group.
   * @default null
   */
  description: string | null;
  /**
   * Display Name
   * @description The display name for the task group.
   */
  displayName?: string;
  /**
   * Task Template Ids
   * @description List of task template IDs to be grouped.
   */
  taskTemplateIds?: string[];
};

/**
 * Type of PARALLEL's PARALLEL_CREATE_TASK_GROUP tool output.
 */
type PARALLEL_CREATE_TASK_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task Group
       * @description Created task group resource
       */
      task_group: {
          /**
           * Config
           * @description Returned configuration details, including batchSize and maxParallelTasks.
           */
          config: {
              /**
               * Batch Size
               * @description Number of tasks to process in one batch.
               * @default null
               */
              batchSize: number | null;
              /**
               * Max Parallel Tasks
               * @description Maximum number of tasks to run in parallel.
               * @default null
               */
              maxParallelTasks: number | null;
          };
          /**
           * Create Time
           * @description ISO timestamp when the task group was created.
           */
          createTime: string;
          /**
           * Description
           * @description The description of the task group.
           * @default null
           */
          description: string | null;
          /**
           * Display Name
           * @description The display name of the task group.
           */
          displayName: string;
          /**
           * Id
           * @description Unique identifier for the newly created task group.
           */
          id: string;
          /**
           * Task Template Ids
           * @description The list of task template IDs associated.
           */
          taskTemplateIds: string[];
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
 * Type of PARALLEL's PARALLEL_PARALLEL_SEARCH tool input.
 */
type PARALLEL_PARALLEL_SEARCH_INPUT = {
  /**
   * Search Queries
   * @description List of search query texts to run in parallel
   */
  search_queries?: string[];
};

/**
 * Type of PARALLEL's PARALLEL_PARALLEL_SEARCH tool output.
 */
type PARALLEL_PARALLEL_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Search results for each query
       */
      results: {
          /**
           * Hits
           * @description List of matched items
           */
          hits: {
              /**
               * Id
               * @description Identifier of the matched document/item
               */
              id: string;
              /**
               * Metadata
               * @description Associated metadata for the matched item
               */
              metadata: {
                  [key: string]: unknown;
              };
              /**
               * Score
               * @description Relevance score of the match
               */
              score: number;
          }[];
          /**
           * Query Index
           * @description Index of the original query in the request
           */
          query_index: number;
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
 * Type of PARALLEL's PARALLEL_RETRIEVE_TASK_GROUP tool input.
 */
type PARALLEL_RETRIEVE_TASK_GROUP_INPUT = {
  /**
   * Taskgroup Id
   * @description Unique identifier of the task group to retrieve.
   */
  taskgroup_id?: string;
};

/**
 * Type of PARALLEL's PARALLEL_RETRIEVE_TASK_GROUP tool output.
 */
type PARALLEL_RETRIEVE_TASK_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp when the task group was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier of the task group
       */
      id: string;
      /**
       * Status
       * @description Current status of the task group
       */
      status: string;
      /**
       * Tasks
       * @description List of tasks contained in the task group
       */
      tasks: ({
          /**
           * Id
           * @description Unique identifier for the task
           */
          id: string;
          /**
           * Status
           * @description Current status of the task
           */
          status: string;
      } & {
          [key: string]: unknown;
      })[];
      /**
       * Updated At
       * @description ISO timestamp when the task group was last updated
       */
      updated_at: string;
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
 * Type of PARALLEL's PARALLEL_STREAM_TASK_GROUP_EVENTS tool input.
 */
type PARALLEL_STREAM_TASK_GROUP_EVENTS_INPUT = {
  /**
   * Last Event Id
   * @description ID of the last received event to resume streaming from.
   * @default null
   */
  last_event_id: string | null;
  /**
   * Taskgroup Id
   * @description Unique identifier of the Task Group to stream events from.
   */
  taskgroup_id?: string;
  /**
   * Timeout
   * @description Duration in seconds to keep the connection open if no new events occur.
   * @default null
   */
  timeout: number | null;
};

/**
 * Type of PARALLEL's PARALLEL_STREAM_TASK_GROUP_EVENTS tool output.
 */
type PARALLEL_STREAM_TASK_GROUP_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description List of events received from the Task Group stream
       */
      events: ({
          /**
           * Event Id
           * @description Unique identifier for the event
           */
          event_id: string;
          /**
           * TaskGroupStatus
           * @description Current status of the Task Group
           */
          status: {
              /**
               * Is Active
               * @description Indicates if the Task Group is still active
               */
              is_active: boolean;
              /**
               * Modified At
               * @description ISO8601 timestamp of last modification
               */
              modified_at: string;
              /**
               * Num Task Runs
               * @description Total number of task runs in the group
               */
              num_task_runs: number;
              /**
               * Status Message
               * @description Human-readable status message
               * @default null
               */
              status_message: string | null;
              /**
               * Task Run Status Counts
               * @description Breakdown of task runs by status
               */
              task_run_status_counts: {
                  [key: string]: number;
              };
          };
          /**
           * Type
           * @description Event type
           * @constant
           */
          type: "task_group_status";
      } | {
          /**
           * Event Id
           * @description Unique identifier for the event
           */
          event_id: string;
          /**
           * Input
           * @description Input provided for the task run
           * @default null
           */
          input: {
              [key: string]: unknown;
          } | null;
          /**
           * Output
           * @description Output generated by the task run
           * @default null
           */
          output: {
              [key: string]: unknown;
          } | null;
          /**
           * TaskRunInfo
           * @description Details of the task run
           */
          run: {
              /**
               * Created At
               * @description ISO8601 timestamp when the task run was created
               */
              created_at: string;
              /**
               * Is Active
               * @description Indicates if the task run is active
               */
              is_active: boolean;
              /**
               * Modified At
               * @description ISO8601 timestamp of last modification
               */
              modified_at: string;
              /**
               * Processor
               * @description Processor used for the task run
               */
              processor: string;
              /**
               * Run Id
               * @description Unique identifier of the task run
               */
              run_id: string;
              /**
               * Status
               * @description Current status of the task run
               */
              status: string;
          };
          /**
           * Type
           * @description Event type
           * @constant
           */
          type: "task_run";
      } | {
          /**
           * ErrorDetail
           * @description Error details
           */
          error: {
              /**
               * Detail
               * @description Additional details about the error
               * @default null
               */
              detail: {
                  [key: string]: unknown;
              } | null;
              /**
               * Message
               * @description Human-readable error message
               */
              message: string;
              /**
               * Ref Id
               * @description Reference ID for the error
               */
              ref_id: string;
          };
          /**
           * Event Id
           * @description Unique identifier for the event
           */
          event_id: string;
          /**
           * Type
           * @description Event type
           * @constant
           */
          type: "error";
      })[];
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
 * Type of PARALLEL's PARALLEL_SUGGEST_TASK tool input.
 */
type PARALLEL_SUGGEST_TASK_INPUT = {
  /**
   * Context
   * @description Scope identifiers for suggestions
   */
  context?: {
      /**
       * Project Id
       * @description Identifier of the project to scope suggestions
       * @default null
       */
      projectId: string | null;
      /**
       * User Id
       * @description Identifier of the user for whom to suggest tasks
       * @default null
       */
      userId: string | null;
  };
  /**
   * Input
   * @description Seed data to base suggestions on
   */
  input?: {
      /**
       * Description
       * @description A seed description to guide the suggestion (optional)
       * @default null
       */
      description: string | null;
      /**
       * Title
       * @description A seed title to guide the suggestion (optional)
       * @default null
       */
      title: string | null;
  };
  /**
   * User Intent
   * @description User intent to guide the suggestion
   */
  user_intent?: string;
};

/**
 * Type of PARALLEL's PARALLEL_SUGGEST_TASK tool output.
 */
type PARALLEL_SUGGEST_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Overall status of the suggestion operation
       */
      status: string;
      /**
       * Tasks
       * @description List of suggested tasks
       */
      tasks: {
          /**
           * Description
           * @description Detailed description of the suggested task
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the suggested task
           */
          id: string;
          /**
           * Metadata
           * @description Additional metadata for this suggestion
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Title
           * @description Title of the suggested task
           */
          title: string;
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
 * Type map of all available tool input types for toolkit "PARALLEL".
 */
export type PARALLEL_TOOL_INPUTS = {
  CREATE_TASK_GROUP: PARALLEL_CREATE_TASK_GROUP_INPUT
  PARALLEL_SEARCH: PARALLEL_PARALLEL_SEARCH_INPUT
  RETRIEVE_TASK_GROUP: PARALLEL_RETRIEVE_TASK_GROUP_INPUT
  STREAM_TASK_GROUP_EVENTS: PARALLEL_STREAM_TASK_GROUP_EVENTS_INPUT
  SUGGEST_TASK: PARALLEL_SUGGEST_TASK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PARALLEL".
 */
export type PARALLEL_TOOL_OUTPUTS = {
  CREATE_TASK_GROUP: PARALLEL_CREATE_TASK_GROUP_OUTPUT
  PARALLEL_SEARCH: PARALLEL_PARALLEL_SEARCH_OUTPUT
  RETRIEVE_TASK_GROUP: PARALLEL_RETRIEVE_TASK_GROUP_OUTPUT
  STREAM_TASK_GROUP_EVENTS: PARALLEL_STREAM_TASK_GROUP_EVENTS_OUTPUT
  SUGGEST_TASK: PARALLEL_SUGGEST_TASK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PARALLEL toolkit.
 */
export const PARALLEL = {
  slug: "parallel",
  tools: {
    /**
     * Tool to create a new task group. use when batching multiple tasks for parallel execution.
     */
    CREATE_TASK_GROUP: "PARALLEL_CREATE_TASK_GROUP",
    /**
     * Tool to perform parallel semantic search. use when you need to retrieve top matching documents for multiple queries in a single call.
     */
    PARALLEL_SEARCH: "PARALLEL_PARALLEL_SEARCH",
    /**
     * Tool to retrieve details of a specific task group. use when you have a valid task group id and want to view its details.
     */
    RETRIEVE_TASK_GROUP: "PARALLEL_RETRIEVE_TASK_GROUP",
    /**
     * Tool to stream events for a task group. use when you want real-time updates of group status and run completions.
     */
    STREAM_TASK_GROUP_EVENTS: "PARALLEL_STREAM_TASK_GROUP_EVENTS",
    /**
     * Tool to suggest tasks based on user or project context. use when you need task specifications generated from intent after providing context.
     */
    SUGGEST_TASK: "PARALLEL_SUGGEST_TASK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PARALLEL".
 */
export type PARALLEL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PARALLEL".
 */
export type PARALLEL_TRIGGER_EVENTS = {}
