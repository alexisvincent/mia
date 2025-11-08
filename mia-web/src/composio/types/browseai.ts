// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BROWSEAI's BROWSEAI_BULK_RUN_TASKS tool input.
 */
type BROWSEAI_BULK_RUN_TASKS_INPUT = {
  /**
   * Input Parameters
   * @description Array of input parameters for each task to run. Each item is a dictionary of parameters for a single task. Maximum 50,000 tasks allowed.
   */
  input_parameters?: {
      [key: string]: unknown;
  }[];
  /**
   * Robot Id
   * @description The unique ID of the robot to run bulk tasks with.
   */
  robot_id?: string;
  /**
   * Title
   * @description A descriptive title for the bulk run (1-200 characters).
   */
  title?: string;
};

/**
 * Type of BROWSEAI's BROWSEAI_BULK_RUN_TASKS tool output.
 */
type BROWSEAI_BULK_RUN_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bulk Run
       * @description Information about the created bulk run.
       */
      bulk_run: {
          /**
           * Created At
           * @description Unix timestamp of when the bulk run was created.
           */
          created_at: number;
          /**
           * Failed Tasks
           * @description Number of failed tasks.
           */
          failed_tasks: number;
          /**
           * Id
           * @description The unique ID of the bulk run.
           */
          id: string;
          /**
           * Robot Id
           * @description The ID of the robot used for the bulk run.
           */
          robot_id: string;
          /**
           * Status
           * @description The current status of the bulk run.
           */
          status: string;
          /**
           * Successful Tasks
           * @description Number of successfully completed tasks.
           */
          successful_tasks: number;
          /**
           * Tasks Count
           * @description Total number of tasks in the bulk run.
           */
          tasks_count: number;
          /**
           * Title
           * @description The title of the bulk run.
           */
          title: string;
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
 * Type of BROWSEAI's BROWSEAI_CREATE_MONITOR tool input.
 */
type BROWSEAI_CREATE_MONITOR_INPUT = {
  /**
   * Input Parameters
   * @description Input parameters to override default input parameters
   */
  input_parameters?: {
      [key: string]: unknown;
  };
  /**
   * Name
   * @description Monitor name [1-200 characters]
   */
  name?: string;
  /**
   * Notify On Screenshot Change
   * @description Send email notification for screenshot changes
   */
  notify_on_screenshot_change?: boolean;
  /**
   * Notify On Text Change
   * @description Send email notification for text changes
   */
  notify_on_text_change?: boolean;
  /**
   * Robot Id
   * @description Unique robot ID. You can find a robot's ID by opening it on the dashboard.
   */
  robot_id?: string;
  /**
   * Schedule
   * @description Recurring schedule in format 'FREQ=HOURLY;INTERVAL=1;BYWEEKDAY=MO,TU,WE,TH,FR'
   * @default null
   */
  schedule: string | null;
  /**
   * Screenshot Notification Threshold
   * @description Threshold percentage for screenshot change notifications
   */
  screenshot_notification_threshold?: number;
};

/**
 * Type of BROWSEAI's BROWSEAI_CREATE_MONITOR tool output.
 */
type BROWSEAI_CREATE_MONITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message Code
       * @description Response message code
       */
      messageCode: string;
      /**
       * Monitor
       * @description Created monitor details
       */
      monitor: {
          /**
           * Captured Screenshot Notification Threshold
           * @description Threshold for screenshot change notifications
           */
          capturedScreenshotNotificationThreshold: number;
          /**
           * Created At
           * @description Monitor creation timestamp
           */
          createdAt: number;
          /**
           * Id
           * @description Unique monitor ID
           */
          id: string;
          /**
           * Input Parameters
           * @description Input parameters for the monitor
           */
          inputParameters: {
              [key: string]: unknown;
          };
          /**
           * Name
           * @description Monitor name
           */
          name: string;
          /**
           * Notify On Captured Screenshot Change
           * @description Whether to notify on screenshot changes
           */
          notifyOnCapturedScreenshotChange: boolean;
          /**
           * Notify On Captured Text Change
           * @description Whether to notify on text changes
           */
          notifyOnCapturedTextChange: boolean;
          /**
           * Paused At
           * @description Monitor pause timestamp if applicable
           * @default null
           */
          pausedAt: number | null;
          /**
           * Paused Reason
           * @description Reason for paused status if applicable
           * @default null
           */
          pausedReason: string | null;
          /**
           * Schedule
           * @description Monitor schedule
           * @default null
           */
          schedule: string | null;
          /**
           * Status
           * @description Monitor status
           */
          status: string;
          /**
           * Updated At
           * @description Monitor last update timestamp
           */
          updatedAt: number;
      };
      /**
       * Status Code
       * @description HTTP status code
       */
      statusCode: number;
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
 * Type of BROWSEAI's BROWSEAI_CREATE_WEBHOOK tool input.
 */
type BROWSEAI_CREATE_WEBHOOK_INPUT = {
  /**
   * Description
   * @description A description of the webhook
   * @default null
   */
  description: string | null;
  /**
   * Events
   * @description List of events to trigger the webhook
   * @default [
   *       "task.completed"
   *     ]
   */
  events: string[] | null;
  /**
   * Is Active
   * @description Whether the webhook should be active immediately
   * @default true
   */
  is_active: boolean | null;
  /**
   * Robot Id
   * @description The ID of the robot to attach the webhook to
   */
  robot_id?: string;
  /**
   * Url
   * Format: uri
   * @description The URL where webhook notifications will be sent
   */
  url?: string;
};

/**
 * Type of BROWSEAI's BROWSEAI_CREATE_WEBHOOK tool output.
 */
type BROWSEAI_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Details of the created webhook
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp of when the webhook was created
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the webhook
       * @default null
       */
      description: string | null;
      /**
       * Events
       * @description List of events that trigger this webhook
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier of the created webhook
       */
      id: string;
      /**
       * Is Active
       * @description Whether the webhook is currently active
       */
      isActive: boolean;
      /**
       * Robot Id
       * @description The ID of the robot this webhook is attached to
       */
      robotId: string;
      /**
       * Url
       * @description The URL where webhook notifications will be sent
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
 * Type of BROWSEAI's BROWSEAI_DELETE_MONITOR tool input.
 */
type BROWSEAI_DELETE_MONITOR_INPUT = {
  /**
   * Monitor Id
   * @description The unique ID of the monitor to be deleted
   */
  monitor_id?: string;
};

/**
 * Type of BROWSEAI's BROWSEAI_DELETE_MONITOR tool output.
 */
type BROWSEAI_DELETE_MONITOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success or error message
       * @default Monitor deleted successfully
       */
      message: string;
      /**
       * Success
       * @description Whether the deletion was successful
       * @default true
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
 * Type of BROWSEAI's BROWSEAI_DELETE_TASK tool input.
 */
type BROWSEAI_DELETE_TASK_INPUT = {
  /**
   * Robot Id
   * @description The unique ID of the robot that created the task
   */
  robot_id?: string;
  /**
   * Task Id
   * @description The unique ID of the task to be deleted
   */
  task_id?: string;
};

/**
 * Type of BROWSEAI's BROWSEAI_DELETE_TASK tool output.
 */
type BROWSEAI_DELETE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message Code
       * @description Success or error message
       * @default null
       */
      message_code: string | null;
      /**
       * Status Code
       * @description HTTP status code of the operation
       * @default null
       */
      status_code: number | null;
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
 * Type of BROWSEAI's BROWSEAI_GET_ROBOTS tool input.
 */
type BROWSEAI_GET_ROBOTS_INPUT = object;

/**
 * Type of BROWSEAI's BROWSEAI_GET_ROBOTS tool output.
 */
type BROWSEAI_GET_ROBOTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message Code
       * @description Response message code
       */
      messageCode: string;
      /**
       * Robots
       * @description Robots data containing total count and items
       */
      robots: {
          /**
           * Items
           * @description List of robots under your account
           */
          items: {
              /**
               * Created At
               * @description ISO timestamp of when the robot was created
               */
              createdAt: string;
              /**
               * Id
               * @description Unique identifier of the robot
               */
              id: string;
              /**
               * Name
               * @description Name of the robot
               */
              name: string;
              /**
               * Status
               * @description Current status of the robot (e.g., 'active', 'inactive')
               */
              status: string;
              /**
               * Updated At
               * @description ISO timestamp of when the robot was last updated
               * @default null
               */
              updatedAt: string | null;
          }[];
          /**
           * Total Count
           * @description Total number of robots
           */
          totalCount: number;
      };
      /**
       * Status Code
       * @description HTTP status code
       */
      statusCode: number;
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
 * Type of BROWSEAI's BROWSEAI_GET_ROBOT_TASKS tool input.
 */
type BROWSEAI_GET_ROBOT_TASKS_INPUT = {
  /**
   * Limit
   * @description Number of tasks to return per request
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Pagination offset for the results
   * @default null
   */
  offset: number | null;
  /**
   * Robot Id
   * @description The unique identifier of the robot whose tasks you want to retrieve
   */
  robot_id?: string;
};

/**
 * Type of BROWSEAI's BROWSEAI_GET_ROBOT_TASKS tool output.
 */
type BROWSEAI_GET_ROBOT_TASKS_OUTPUT = {
  /**
   * Data
   * @description List of tasks associated with the robot
   */
  data?: {
      /**
       * Captured Data
       * @description Data captured during the task execution
       * @default null
       */
      capturedData: {
          [key: string]: unknown;
      } | null;
      /**
       * Created At
       * @description ISO timestamp of when the task was created
       */
      createdAt: string;
      /**
       * Lists
       * @description List of data items extracted during the task execution
       * @default null
       */
      lists: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Parameters
       * @description Input parameters used for the task execution
       * @default null
       */
      parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Screenshots
       * @description List of screenshot URLs captured during the task execution
       * @default null
       */
      screenshots: string[] | null;
      /**
       * Status
       * @description Status of the task execution
       */
      status: string;
      /**
       * Updated At
       * @description ISO timestamp of when the task was last updated
       * @default null
       */
      updatedAt: string | null;
  }[];
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
 * Type of BROWSEAI's BROWSEAI_GET_TASK_DETAILS tool input.
 */
type BROWSEAI_GET_TASK_DETAILS_INPUT = {
  /**
   * Task Id
   * @description The unique identifier of the task to retrieve details for
   */
  task_id?: string;
};

/**
 * Type of BROWSEAI's BROWSEAI_GET_TASK_DETAILS tool output.
 */
type BROWSEAI_GET_TASK_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Detailed information about the requested task
   */
  data?: {
      /**
       * Captured Data
       * @description Data captured during the task execution
       * @default null
       */
      capturedData: {
          [key: string]: unknown;
      } | null;
      /**
       * Completed At
       * @description ISO timestamp of when the task execution completed
       * @default null
       */
      completedAt: string | null;
      /**
       * Created At
       * @description ISO timestamp of when the task was created
       */
      createdAt: string;
      /**
       * Error
       * @description Error details if the task failed
       * @default null
       */
      error: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description The unique identifier of the task
       */
      id: string;
      /**
       * Lists
       * @description List of data items extracted during the task execution
       * @default null
       */
      lists: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Parameters
       * @description Input parameters used for the task execution
       * @default null
       */
      parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Robot Id
       * @description The ID of the robot that executed this task
       */
      robotId: string;
      /**
       * Screenshots
       * @description List of screenshot URLs captured during the task execution
       * @default null
       */
      screenshots: string[] | null;
      /**
       * Started At
       * @description ISO timestamp of when the task execution started
       * @default null
       */
      startedAt: string | null;
      /**
       * Status
       * @description Current status of the task
       */
      status: string;
      /**
       * Updated At
       * @description ISO timestamp of when the task was last updated
       * @default null
       */
      updatedAt: string | null;
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
 * Type of BROWSEAI's BROWSEAI_RUN_ROBOT tool input.
 */
type BROWSEAI_RUN_ROBOT_INPUT = {
  /**
   * Input Parameters
   * @description Custom parameters for the robot execution (such as URL, search term, or other parameters)
   * @default null
   */
  input_parameters: {
      [key: string]: unknown;
  } | null;
  /**
   * Robot Id
   * @description The unique identifier of the robot to run
   */
  robot_id?: string;
};

/**
 * Type of BROWSEAI's BROWSEAI_RUN_ROBOT tool output.
 */
type BROWSEAI_RUN_ROBOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Details of the created task
       */
      result: {
          /**
           * Created At
           * @description ISO timestamp of when the task was created
           */
          createdAt: string;
          /**
           * Id
           * @description The unique identifier of the created task
           */
          id: string;
          /**
           * Parameters
           * @description The input parameters used for the task
           * @default null
           */
          parameters: {
              [key: string]: unknown;
          } | null;
          /**
           * Robot Id
           * @description The ID of the robot that was executed
           */
          robotId: string;
          /**
           * Status
           * @description The current status of the task
           */
          status: string;
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
 * Type map of all available tool input types for toolkit "BROWSEAI".
 */
export type BROWSEAI_TOOL_INPUTS = {
  BULK_RUN_TASKS: BROWSEAI_BULK_RUN_TASKS_INPUT
  CREATE_MONITOR: BROWSEAI_CREATE_MONITOR_INPUT
  CREATE_WEBHOOK: BROWSEAI_CREATE_WEBHOOK_INPUT
  DELETE_MONITOR: BROWSEAI_DELETE_MONITOR_INPUT
  DELETE_TASK: BROWSEAI_DELETE_TASK_INPUT
  GET_ROBOTS: BROWSEAI_GET_ROBOTS_INPUT
  GET_ROBOT_TASKS: BROWSEAI_GET_ROBOT_TASKS_INPUT
  GET_TASK_DETAILS: BROWSEAI_GET_TASK_DETAILS_INPUT
  RUN_ROBOT: BROWSEAI_RUN_ROBOT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BROWSEAI".
 */
export type BROWSEAI_TOOL_OUTPUTS = {
  BULK_RUN_TASKS: BROWSEAI_BULK_RUN_TASKS_OUTPUT
  CREATE_MONITOR: BROWSEAI_CREATE_MONITOR_OUTPUT
  CREATE_WEBHOOK: BROWSEAI_CREATE_WEBHOOK_OUTPUT
  DELETE_MONITOR: BROWSEAI_DELETE_MONITOR_OUTPUT
  DELETE_TASK: BROWSEAI_DELETE_TASK_OUTPUT
  GET_ROBOTS: BROWSEAI_GET_ROBOTS_OUTPUT
  GET_ROBOT_TASKS: BROWSEAI_GET_ROBOT_TASKS_OUTPUT
  GET_TASK_DETAILS: BROWSEAI_GET_TASK_DETAILS_OUTPUT
  RUN_ROBOT: BROWSEAI_RUN_ROBOT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BROWSEAI toolkit.
 */
export const BROWSEAI = {
  slug: "browseai",
  tools: {
    /**
     * This action allows users to bulk run up to 50,000 tasks using a specified robot. it provides a post endpoint at /v2/robots/{robotid}/bulk-tasks and supports parameters such as robot id (required), title (required), and input parameters (required). this bulk operation is essential for large-scale data extraction.
     */
    BULK_RUN_TASKS: "BROWSEAI_BULK_RUN_TASKS",
    /**
     * This tool creates a new monitor for a specific robot in browse ai. it allows you to configure a monitor with a schedule (frequency and interval) for automatic execution, along with optional custom name and input parameters, enabling automated tracking of website changes.
     */
    CREATE_MONITOR: "BROWSEAI_CREATE_MONITOR",
    /**
     * This tool creates a new webhook for a browseai robot. webhooks are used to receive notifications when tasks are completed or data changes are detected. the webhook will be called with the task details when specific events occur. it is useful for: - setting up automated notifications for task completion - receiving real-time updates when changes are detected - integrating browseai with your own systems - automating workflows based on robot task results the webhook can be configured to trigger on different events: - task.completed: when a task is successfully completed - task.failed: when a task fails - changes.detected: when changes are detected during monitoring
     */
    CREATE_WEBHOOK: "BROWSEAI_CREATE_WEBHOOK",
    /**
     * This tool allows users to delete a specific monitor from their browse ai account. it uses the delete method and requires a valid monitor id.
     */
    DELETE_MONITOR: "BROWSEAI_DELETE_MONITOR",
    /**
     * This tool allows you to delete a specific task in browseai by its task id. it is used for cleaning up completed or failed tasks, managing resources, and maintaining your task list.
     */
    DELETE_TASK: "BROWSEAI_DELETE_TASK",
    /**
     * This tool retrieves a list of all robots under your account in browse ai. each robot represents an automated task that can be trained to perform various web operations like opening webpages, logging in, clicking buttons, filling forms, extracting data, and monitoring changes. it is useful for: - getting an overview of all your automated tasks - checking the status of your robots - retrieving robot ids for use with other api endpoints - monitoring when robots were last updated or created
     */
    GET_ROBOTS: "BROWSEAI_GET_ROBOTS",
    /**
     * This tool retrieves all tasks associated with a specific robot in browse ai. it provides a paginated list of tasks with their details including status, input parameters, captured data, screenshots, and lists. it is useful for: - monitoring task execution status - retrieving captured data and screenshots - analyzing task execution history - debugging robot performance
     */
    GET_ROBOT_TASKS: "BROWSEAI_GET_ROBOT_TASKS",
    /**
     * This tool retrieves detailed information about a specific task in browse ai by its task id. it returns comprehensive details including the task's status, execution results, associated metadata, timestamps, and configuration. it complements existing tools by providing an in-depth view of individual task execution, including metadata and error details if applicable.
     */
    GET_TASK_DETAILS: "BROWSEAI_GET_TASK_DETAILS",
    /**
     * This tool allows you to trigger the execution of a browseai robot on demand. the tool will run a specified robot with the provided parameters and return the task details. it requires a robot id and optional input parameters (such as url, search term, or other parameters) to configure the robot's execution. it is useful for: - starting robot executions programmatically - automating data collection tasks - triggering robots with custom parameters - integrating robot execution in workflows
     */
    RUN_ROBOT: "BROWSEAI_RUN_ROBOT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BROWSEAI".
 */
export type BROWSEAI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BROWSEAI".
 */
export type BROWSEAI_TRIGGER_EVENTS = {}
