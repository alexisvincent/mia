// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TEAMCAMP's TEAMCAMP_CREATE_TASK tool input.
 */
type TEAMCAMP_CREATE_TASK_INPUT = {
  /**
   * Assignee Ids
   * @description List of user IDs to assign the task to
   * @default null
   */
  assigneeIds: string[] | null;
  /**
   * Description
   * @description Detailed description of the task
   * @default null
   */
  description: string | null;
  /**
   * Due Date
   * @description Due date/time for the task in ISO 8601 format
   * @default null
   */
  dueDate: string | null;
  /**
   * Labels
   * @description Custom label tags for the task
   * @default null
   */
  labels: string[] | null;
  /**
   * Parent Id
   * @description The ID of parent task if this is a subtask
   * @default null
   */
  parentId: string | null;
  /**
   * Priority
   * @description Priority level of the task
   * @default null
   * @enum {string|null}
   */
  priority: "low" | "medium" | "high" | null;
  /**
   * Project Id
   * @description The ID of the project the task belongs to
   */
  projectId?: string;
  /**
   * Title
   * @description The title of the task
   */
  title?: string;
  /**
   * Watchers
   * @description List of user IDs to be notified of task changes
   * @default null
   */
  watchers: string[] | null;
};

/**
 * Type of TEAMCAMP's TEAMCAMP_CREATE_TASK tool output.
 */
type TEAMCAMP_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the task creation was successful
       */
      success: boolean;
      /**
       * Task
       * @description Details of the created task
       */
      task: {
          /**
           * Assignee Ids
           * @description List of user IDs assigned to the task
           * @default null
           */
          assigneeIds: string[] | null;
          /**
           * Created At
           * @description Timestamp when the task was created
           */
          createdAt: string;
          /**
           * Description
           * @description The task's description
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * @description Task's due date/time in ISO 8601 format
           * @default null
           */
          dueDate: string | null;
          /**
           * Id
           * @description Unique identifier of the created task
           */
          id: string;
          /**
           * Labels
           * @description Labels associated with the task
           * @default null
           */
          labels: string[] | null;
          /**
           * Parent Id
           * @description Parent task ID if this is a subtask
           * @default null
           */
          parentId: string | null;
          /**
           * Priority
           * @description Priority level of the task
           * @default null
           */
          priority: string | null;
          /**
           * Project Id
           * @description Project ID to which the task belongs
           */
          projectId: string;
          /**
           * Title
           * @description The title of the task
           */
          title: string;
          /**
           * Updated At
           * @description Timestamp when the task was last updated
           */
          updatedAt: string;
          /**
           * Watchers
           * @description Users watching the task
           * @default null
           */
          watchers: string[] | null;
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
 * Type of TEAMCAMP's TEAMCAMP_DELETE_PROJECT tool input.
 */
type TEAMCAMP_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description Unique identifier of the project to delete
   */
  projectId?: string;
};

/**
 * Type of TEAMCAMP's TEAMCAMP_DELETE_PROJECT tool output.
 */
type TEAMCAMP_DELETE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information about the deletion
       */
      message: string;
      /**
       * Status
       * @description Status of the deletion operation, e.g., 'success'
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
 * Type of TEAMCAMP's TEAMCAMP_GET_PROJECT_LIST tool input.
 */
type TEAMCAMP_GET_PROJECT_LIST_INPUT = object;

/**
 * Type of TEAMCAMP's TEAMCAMP_GET_PROJECT_LIST tool output.
 */
type TEAMCAMP_GET_PROJECT_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of projects within the workspace
       */
      projects: {
          /**
           * Project Id
           * @description The ID of the project
           */
          projectId: string;
          /**
           * Project Name
           * @description The name of the project
           */
          projectName: string;
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
 * Type of TEAMCAMP's TEAMCAMP_GET_TASK_LIST tool input.
 */
type TEAMCAMP_GET_TASK_LIST_INPUT = {
  /**
   * Assignee
   * @description Filter tasks by assignee user ID
   * @default null
   */
  assignee: string | null;
  /**
   * Due Date From
   * @description Filter tasks with dueDate ≥ this date (format: yyyy-MM-dd)
   * @default null
   */
  dueDateFrom: string | null;
  /**
   * Due Date To
   * @description Filter tasks with dueDate ≤ this date (format: yyyy-MM-dd)
   * @default null
   */
  dueDateTo: string | null;
  /**
   * Limit
   * @description Maximum number of tasks per page (must be ≥ 1)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination (must be ≥ 1)
   * @default null
   */
  page: number | null;
  /**
   * Project Id
   * @description Filter tasks by project ID
   * @default null
   */
  projectId: string | null;
  /**
   * Status
   * @description Filter tasks by status (e.g., 'open', 'in_progress', 'done')
   * @default null
   */
  status: string | null;
};

/**
 * Type of TEAMCAMP's TEAMCAMP_GET_TASK_LIST tool output.
 */
type TEAMCAMP_GET_TASK_LIST_OUTPUT = {
  /**
   * Data
   * @description List of tasks
   */
  data?: {
      /**
       * TaskAssignee
       * @description Assigned user details, or null if unassigned
       * @default null
       */
      assignee: {
          /**
           * Id
           * @description User ID of the assignee
           */
          id: string;
          /**
           * Name
           * @description Name of the assignee
           */
          name: string;
      } | null;
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      createdAt: string;
      /**
       * Description
       * @description Detailed description of the task
       * @default null
       */
      description: string | null;
      /**
       * Due Date
       * @description Due date of the task (format: yyyy-MM-dd)
       * @default null
       */
      dueDate: string | null;
      /**
       * Id
       * @description Unique identifier for the task
       */
      id: string;
      /**
       * Name
       * @description Name of the task
       */
      name: string;
      /**
       * Project Id
       * @description ID of the related project
       */
      projectId: string;
      /**
       * Status
       * @description Current status of the task
       */
      status: string;
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       */
      updatedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Limit
       * @description Items per page
       */
      limit: number;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Total
       * @description Total items available
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "TEAMCAMP".
 */
export type TEAMCAMP_TOOL_INPUTS = {
  CREATE_TASK: TEAMCAMP_CREATE_TASK_INPUT
  DELETE_PROJECT: TEAMCAMP_DELETE_PROJECT_INPUT
  GET_PROJECT_LIST: TEAMCAMP_GET_PROJECT_LIST_INPUT
  GET_TASK_LIST: TEAMCAMP_GET_TASK_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TEAMCAMP".
 */
export type TEAMCAMP_TOOL_OUTPUTS = {
  CREATE_TASK: TEAMCAMP_CREATE_TASK_OUTPUT
  DELETE_PROJECT: TEAMCAMP_DELETE_PROJECT_OUTPUT
  GET_PROJECT_LIST: TEAMCAMP_GET_PROJECT_LIST_OUTPUT
  GET_TASK_LIST: TEAMCAMP_GET_TASK_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TEAMCAMP toolkit.
 */
export const TEAMCAMP = {
  slug: "teamcamp",
  tools: {
    /**
     * Tool to create a new task within a specified project. use when you have the project id and task details ready.
     */
    CREATE_TASK: "TEAMCAMP_CREATE_TASK",
    /**
     * Tool to delete a specific project by its id. use when you need to permanently remove a project after confirming it's no longer needed.
     */
    DELETE_PROJECT: "TEAMCAMP_DELETE_PROJECT",
    /**
     * Tool to retrieve all projects within the workspace. use when you need an overview of available projects.
     */
    GET_PROJECT_LIST: "TEAMCAMP_GET_PROJECT_LIST",
    /**
     * Tool to retrieve a list of tasks within a project. use when filtering tasks by project id, status, assignee, or due dates.
     */
    GET_TASK_LIST: "TEAMCAMP_GET_TASK_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TEAMCAMP".
 */
export type TEAMCAMP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TEAMCAMP".
 */
export type TEAMCAMP_TRIGGER_EVENTS = {}
