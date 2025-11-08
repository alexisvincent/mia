// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DESKTIME's DESKTIME_CREATE_PROJECT_WITH_TASK tool input.
 */
type DESKTIME_CREATE_PROJECT_WITH_TASK_INPUT = {
  /**
   * Project
   * @description Name of the project to be created
   */
  project?: string;
  /**
   * Task
   * @description Optional initial task name to associate with the project
   * @default null
   */
  task: string | null;
};

/**
 * Type of DESKTIME's DESKTIME_CREATE_PROJECT_WITH_TASK tool output.
 */
type DESKTIME_CREATE_PROJECT_WITH_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the newly created project
       */
      id: number;
      /**
       * Name
       * @description Name of the newly created project
       */
      name: string;
      /**
       * Tasks
       * @description List of tasks associated with the project, if any
       */
      tasks: string[];
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
 * Type of DESKTIME's DESKTIME_GET_ACCOUNT_DETAILS tool input.
 */
type DESKTIME_GET_ACCOUNT_DETAILS_INPUT = object;

/**
 * Type of DESKTIME's DESKTIME_GET_ACCOUNT_DETAILS tool output.
 */
type DESKTIME_GET_ACCOUNT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Timezone
       * @description The timezone set for the authenticated account.
       */
      account_timezone: string;
      /**
       * Company Name
       * @description The name of the company associated with the authenticated account.
       */
      company_name: string;
      /**
       * Timestamp
       * @description Server timestamp when the account details were fetched (ISO 8601).
       */
      timestamp: string;
      /**
       * Work Settings
       * @description Configuration settings related to work.
       */
      work_settings: {
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
 * Type of DESKTIME's DESKTIME_GET_ALL_COMPANY_EMPLOYEES tool input.
 */
type DESKTIME_GET_ALL_COMPANY_EMPLOYEES_INPUT = {
  /**
   * Date
   * @description Target date in "YYYY-MM-DD" format. Defaults to today if omitted.
   * @default null
   */
  date: string | null;
  /**
   * Period
   * @description Time period granularity: "day" or "month". Defaults to "day".
   * @default null
   * @enum {string|null}
   */
  period: "day" | "month" | null;
};

/**
 * Type of DESKTIME's DESKTIME_GET_ALL_COMPANY_EMPLOYEES tool output.
 */
type DESKTIME_GET_ALL_COMPANY_EMPLOYEES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Employees
       * @description List of employee records with basic profile and status
       */
      employees: {
          /**
           * Email
           * @description Work email address
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique employee identifier
           */
          id: number;
          /**
           * Name
           * @description Full name of the employee
           */
          name: string;
          /**
           * Role
           * @description Role or position within the company
           * @default null
           */
          role: string | null;
          /**
           * Status
           * @description Current employment status, e.g., "active" or "inactive"
           * @default null
           */
          status: string | null;
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
 * Type of DESKTIME's DESKTIME_GET_EMPLOYEE_DATA tool input.
 */
type DESKTIME_GET_EMPLOYEE_DATA_INPUT = object;

/**
 * Type of DESKTIME's DESKTIME_GET_EMPLOYEE_DATA tool output.
 */
type DESKTIME_GET_EMPLOYEE_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Employees
       * @description List of employee records retrieved from DeskTime
       */
      employees: {
          /**
           * Department
           * @description Department where the employee works
           */
          department: string;
          /**
           * Email
           * @description Employee's email address
           */
          email: string;
          /**
           * Id
           * @description Employee ID
           */
          id: number;
          /**
           * Name
           * @description Employee's full name
           */
          name: string;
          /**
           * Position
           * @description Employee's position within the company
           */
          position: string;
          /**
           * Status
           * @description Current work status of the employee
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
 * Type of DESKTIME's DESKTIME_GET_EMPLOYEE_PROJECTS tool input.
 */
type DESKTIME_GET_EMPLOYEE_PROJECTS_INPUT = {
  /**
   * Date
   * Format: date
   * @description Date in YYYY-MM-DD format. If omitted, returns data for today.
   */
  date?: unknown;
  /**
   * Id
   * @description Employee ID. If omitted, returns data for the current API-key user.
   * @default null
   */
  id: number | null;
};

/**
 * Type of DESKTIME's DESKTIME_GET_EMPLOYEE_PROJECTS tool output.
 */
type DESKTIME_GET_EMPLOYEE_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tracking Data
       * @description Project tracking data for the date.
       */
      tracking_data: {
          /**
           * Date
           * Format: date
           * @description Date of the tracking data.
           */
          date: unknown;
          /**
           * Projects
           * @description List of projects tracked on the specified date.
           */
          projects: {
              /**
               * Duration
               * @description Time spent on the project in seconds.
               */
              duration: number;
              /**
               * Id
               * @description Project ID.
               */
              id: number;
              /**
               * Name
               * @description Project name.
               */
              name: string;
              /**
               * Status
               * @description Project status (e.g., active, completed).
               */
              status: string;
          }[];
      };
      /**
       * User
       * @description Employee profile information.
       */
      user: {
          /**
           * Email
           * @description Employee's email address.
           */
          email: string;
          /**
           * Id
           * @description Employee ID.
           */
          id: number;
          /**
           * Name
           * @description Employee's name.
           */
          name: string;
      };
      /**
       * Work Settings
       * @description Work hours and days settings.
       */
      work_settings: {
          /**
           * Work Days
           * @description Days of the week considered work days.
           */
          work_days: string[];
          /**
           * Work Hours
           * @description Number of work hours per day.
           */
          work_hours: number;
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
 * Type of DESKTIME's DESKTIME_GET_EMPLOYEE_PROJECTS_AND_APPS tool input.
 */
type DESKTIME_GET_EMPLOYEE_PROJECTS_AND_APPS_INPUT = {
  /**
   * Date
   * @description Date in YYYY-MM-DD format. Optional; defaults to today's date if omitted
   * @default null
   */
  date: string | null;
  /**
   * Id
   * @description Employee ID. Optional; if omitted, returns data for the authenticated user
   * @default null
   */
  id: string | null;
};

/**
 * Type of DESKTIME's DESKTIME_GET_EMPLOYEE_PROJECTS_AND_APPS tool output.
 */
type DESKTIME_GET_EMPLOYEE_PROJECTS_AND_APPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tracking Data
       * @description Combined project and app usage data
       */
      tracking_data: {
          /**
           * Apps
           * @description List of used applications
           */
          apps: {
              /**
               * Name
               * @description Application name
               */
              name: string;
              /**
               * Time Spent
               * @description Time spent on the application in seconds
               */
              time_spent: number;
          }[];
          /**
           * Projects
           * @description List of tracked projects
           */
          projects: {
              /**
               * Id
               * @description Project ID
               */
              id: string;
              /**
               * Name
               * @description Project name
               */
              name: string;
              /**
               * Time Spent
               * @description Time spent on the project in seconds
               */
              time_spent: number;
          }[];
      };
      /**
       * User
       * @description Basic employee information
       */
      user: {
          /**
           * Email
           * @description Employee email address
           */
          email: string;
          /**
           * Id
           * @description Employee ID
           */
          id: string;
          /**
           * Name
           * @description Employee full name
           */
          name: string;
      };
      /**
       * Work Settings
       * @description Employee's work settings
       */
      work_settings: {
          /**
           * Timezone
           * @description Employee's timezone
           */
          timezone: string;
          /**
           * Work Hours
           * @description Standard work hours
           */
          work_hours: string;
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
 * Type of DESKTIME's DESKTIME_GET_PROJECTS_LIST tool input.
 */
type DESKTIME_GET_PROJECTS_LIST_INPUT = object;

/**
 * Type of DESKTIME's DESKTIME_GET_PROJECTS_LIST tool output.
 */
type DESKTIME_GET_PROJECTS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description Array of active projects including related tasks
       */
      projects: {
          /**
           * Created At
           * @description Creation date of the project in ISO-8601 format
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the project
           */
          id: number;
          /**
           * Name
           * @description Name of the project
           */
          name: string;
          /**
           * Tasks
           * @description List of related tasks for this project
           */
          tasks: {
              /**
               * Id
               * @description Unique identifier of the task
               */
              id: number;
              /**
               * Name
               * @description Name of the task
               */
              name: string;
          }[];
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
 * Type of DESKTIME's DESKTIME_PING_REQUEST tool input.
 */
type DESKTIME_PING_REQUEST_INPUT = object;

/**
 * Type of DESKTIME's DESKTIME_PING_REQUEST tool output.
 */
type DESKTIME_PING_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Status message indicating server availability.
       */
      message: string;
      /**
       * Timestamp
       * @description Timestamp when the server generated the response in ISO 8601 format.
       */
      timestamp: string;
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
 * Type of DESKTIME's DESKTIME_START_PROJECT_TASK tool input.
 */
type DESKTIME_START_PROJECT_TASK_INPUT = {
  /**
   * Project
   * @description Project name to start tracking time for
   */
  project?: string;
  /**
   * Task
   * @description Optional task name to associate with the time entry
   * @default null
   */
  task: string | null;
};

/**
 * Type of DESKTIME's DESKTIME_START_PROJECT_TASK tool output.
 */
type DESKTIME_START_PROJECT_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the tracking was started successfully
       */
      success: boolean;
      /**
       * Timestamp
       * Format: date-time
       * @description Timestamp when the request was processed (ISO 8601)
       */
      timestamp: string;
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
 * Type of DESKTIME's DESKTIME_STOP_PROJECT_TASK tool input.
 */
type DESKTIME_STOP_PROJECT_TASK_INPUT = {
  /**
   * Project
   * @description Project name to stop tracking time for
   */
  project?: string;
  /**
   * Task
   * @description Optional task name to stop tracking time for
   * @default null
   */
  task: string | null;
};

/**
 * Type of DESKTIME's DESKTIME_STOP_PROJECT_TASK tool output.
 */
type DESKTIME_STOP_PROJECT_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the tracking was stopped successfully
       */
      success: boolean;
      /**
       * Timestamp
       * Format: date-time
       * @description Timestamp when the request was processed (ISO 8601)
       */
      timestamp: string;
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
 * Type map of all available tool input types for toolkit "DESKTIME".
 */
export type DESKTIME_TOOL_INPUTS = {
  CREATE_PROJECT_WITH_TASK: DESKTIME_CREATE_PROJECT_WITH_TASK_INPUT
  GET_ACCOUNT_DETAILS: DESKTIME_GET_ACCOUNT_DETAILS_INPUT
  GET_ALL_COMPANY_EMPLOYEES: DESKTIME_GET_ALL_COMPANY_EMPLOYEES_INPUT
  GET_EMPLOYEE_DATA: DESKTIME_GET_EMPLOYEE_DATA_INPUT
  GET_EMPLOYEE_PROJECTS: DESKTIME_GET_EMPLOYEE_PROJECTS_INPUT
  GET_EMPLOYEE_PROJECTS_AND_APPS: DESKTIME_GET_EMPLOYEE_PROJECTS_AND_APPS_INPUT
  GET_PROJECTS_LIST: DESKTIME_GET_PROJECTS_LIST_INPUT
  PING_REQUEST: DESKTIME_PING_REQUEST_INPUT
  START_PROJECT_TASK: DESKTIME_START_PROJECT_TASK_INPUT
  STOP_PROJECT_TASK: DESKTIME_STOP_PROJECT_TASK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DESKTIME".
 */
export type DESKTIME_TOOL_OUTPUTS = {
  CREATE_PROJECT_WITH_TASK: DESKTIME_CREATE_PROJECT_WITH_TASK_OUTPUT
  GET_ACCOUNT_DETAILS: DESKTIME_GET_ACCOUNT_DETAILS_OUTPUT
  GET_ALL_COMPANY_EMPLOYEES: DESKTIME_GET_ALL_COMPANY_EMPLOYEES_OUTPUT
  GET_EMPLOYEE_DATA: DESKTIME_GET_EMPLOYEE_DATA_OUTPUT
  GET_EMPLOYEE_PROJECTS: DESKTIME_GET_EMPLOYEE_PROJECTS_OUTPUT
  GET_EMPLOYEE_PROJECTS_AND_APPS: DESKTIME_GET_EMPLOYEE_PROJECTS_AND_APPS_OUTPUT
  GET_PROJECTS_LIST: DESKTIME_GET_PROJECTS_LIST_OUTPUT
  PING_REQUEST: DESKTIME_PING_REQUEST_OUTPUT
  START_PROJECT_TASK: DESKTIME_START_PROJECT_TASK_OUTPUT
  STOP_PROJECT_TASK: DESKTIME_STOP_PROJECT_TASK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DESKTIME toolkit.
 */
export const DESKTIME = {
  slug: "desktime",
  tools: {
    /**
     * Tool to create a new project with an optional initial task. use when you need to set up a new desktime project programmatically.
     */
    CREATE_PROJECT_WITH_TASK: "DESKTIME_CREATE_PROJECT_WITH_TASK",
    /**
     * Tool to retrieve detailed information about the authenticated user's company account. use after confirming the api key is valid to fetch company name, work settings, account timezone, and timestamp.
     */
    GET_ACCOUNT_DETAILS: "DESKTIME_GET_ACCOUNT_DETAILS",
    /**
     * Tool to list all employees in the company, including their roles and statuses. use after confirming valid credentials to fetch the organization’s roster.
     */
    GET_ALL_COMPANY_EMPLOYEES: "DESKTIME_GET_ALL_COMPANY_EMPLOYEES",
    /**
     * Tool to fetch data for all employees within the company. use after verifying the api key is valid.
     */
    GET_EMPLOYEE_DATA: "DESKTIME_GET_EMPLOYEE_DATA",
    /**
     * Tool to retrieve information about projects assigned to employees, including project names, durations, and statuses. use when you need to fetch per-employee project tracking data for a specific date.
     */
    GET_EMPLOYEE_PROJECTS: "DESKTIME_GET_EMPLOYEE_PROJECTS",
    /**
     * Tool to retrieve an employee's tracked projects and application usage. use when you need combined project/app time data for a given employee and date (defaults to current user and today). example: "get projects and apps for employee 711867 on 2025-07-28."
     */
    GET_EMPLOYEE_PROJECTS_AND_APPS: "DESKTIME_GET_EMPLOYEE_PROJECTS_AND_APPS",
    /**
     * Tool to retrieve all active projects for the company, including related tasks. use when you need projects overview after authentication.
     */
    GET_PROJECTS_LIST: "DESKTIME_GET_PROJECTS_LIST",
    /**
     * Tool to check the api's availability and confirm the service is operational. use when you need to verify that the desktime api is reachable and responsive.
     */
    PING_REQUEST: "DESKTIME_PING_REQUEST",
    /**
     * Tool to start tracking time for a specified project and optional task. use when you need to begin timing work on a project and optionally tag a task.
     */
    START_PROJECT_TASK: "DESKTIME_START_PROJECT_TASK",
    /**
     * Tool to stop tracking time for a specified project and optional task. use when you have finished work and need to record end time.
     */
    STOP_PROJECT_TASK: "DESKTIME_STOP_PROJECT_TASK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DESKTIME".
 */
export type DESKTIME_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DESKTIME".
 */
export type DESKTIME_TRIGGER_EVENTS = {}
