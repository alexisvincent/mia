// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WORKSNAPS's WORKSNAPS_CREATE_PROJECT tool input.
 */
type WORKSNAPS_CREATE_PROJECT_INPUT = {
  /**
   * Budget
   * @description Budget of the project
   * @default null
   */
  budget: number | null;
  /**
   * Client Id
   * @description ID of the client associated with the project
   * @default null
   */
  client_id: number | null;
  /**
   * Description
   * @description Description of the project
   * @default null
   */
  description: string | null;
  /**
   * End Date
   * @description End date/time of the project in ISO8601 format
   * @default null
   */
  end_date: string | null;
  /**
   * Name
   * @description Name of the project
   */
  name?: string;
  /**
   * Start Date
   * @description Start date/time of the project in ISO8601 format
   * @default null
   */
  start_date: string | null;
  /**
   * Status
   * @description Status of the project (e.g., 'Active')
   * @default null
   */
  status: string | null;
};

/**
 * Type of WORKSNAPS's WORKSNAPS_CREATE_PROJECT tool output.
 */
type WORKSNAPS_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Project
       * @description Details of the created project
       */
      project: {
          /**
           * Budget
           * @description Budget of the project
           * @default null
           */
          budget: number | null;
          /**
           * Client Id
           * @description Client ID associated with the project
           * @default null
           */
          client_id: number | null;
          /**
           * Created At
           * @description Timestamp when the project was created
           */
          created_at: string;
          /**
           * Description
           * @description Description of the project
           * @default null
           */
          description: string | null;
          /**
           * End Date
           * @description End date/time of the project
           * @default null
           */
          end_date: string | null;
          /**
           * Id
           * @description ID of the project
           */
          id: number;
          /**
           * Name
           * @description Name of the project
           */
          name: string;
          /**
           * Start Date
           * @description Start date/time of the project
           * @default null
           */
          start_date: string | null;
          /**
           * Status
           * @description Status of the project
           * @default null
           */
          status: string | null;
          /**
           * Updated At
           * @description Timestamp when the project was last updated
           */
          updated_at: string;
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
 * Type of WORKSNAPS's WORKSNAPS_CREATE_TASK tool input.
 */
type WORKSNAPS_CREATE_TASK_INPUT = {
  /**
   * Assigned To
   * @description ID of the user to assign the task
   * @default null
   */
  assigned_to: number | null;
  /**
   * Description
   * @description Brief description of the task
   * @default null
   */
  description: string | null;
  /**
   * Due Date
   * @description Due date in YYYY-MM-DD format
   * @default null
   */
  due_date: string | null;
  /**
   * Name
   * @description Name of the task
   */
  name?: string;
  /**
   * Project Id
   * @description ID of the project to create the task in
   */
  project_id?: number;
};

/**
 * Type of WORKSNAPS's WORKSNAPS_CREATE_TASK tool output.
 */
type WORKSNAPS_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task
       * @description Details of the created task
       */
      task: {
          /**
           * Assigned To
           * @description ID of the user assigned to the task
           * @default null
           */
          assigned_to: number | null;
          /**
           * Created At
           * @description Timestamp when the task was created
           */
          created_at: string;
          /**
           * Description
           * @description Description of the task
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * @description Due date of the task in YYYY-MM-DD format
           * @default null
           */
          due_date: string | null;
          /**
           * Id
           * @description ID of the newly created task
           */
          id: number;
          /**
           * Name
           * @description Name of the task
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the task was last updated
           */
          updated_at: string;
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
 * Type of WORKSNAPS's WORKSNAPS_DELETE_TASK tool input.
 */
type WORKSNAPS_DELETE_TASK_INPUT = {
  /**
   * Project Id
   * @description The ID of the project containing the task
   */
  project_id?: number;
  /**
   * Task Id
   * @description The ID of the task to delete
   */
  task_id?: number;
};

/**
 * Type of WORKSNAPS's WORKSNAPS_DELETE_TASK tool output.
 */
type WORKSNAPS_DELETE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the task was deleted successfully
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
 * Type of WORKSNAPS's WORKSNAPS_GET_PROJECTS tool input.
 */
type WORKSNAPS_GET_PROJECTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (>=1)
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of projects per page (1-100)
   * @default 30
   */
  per_page: number | null;
};

/**
 * Type of WORKSNAPS's WORKSNAPS_GET_PROJECTS tool output.
 */
type WORKSNAPS_GET_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * Projects
       * @description List of projects
       */
      projects: {
          /**
           * Client Id
           * @description Associated client ID
           */
          client_id: number;
          /**
           * Description
           * @description Project description
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Project ID
           */
          id: number;
          /**
           * Name
           * @description Project name
           */
          name: string;
          /**
           * Start Date
           * @description Project start date, format YYYY-MM-DD
           * @default null
           */
          start_date: string | null;
          /**
           * Status
           * @description Project status, e.g., active or archived
           */
          status: string;
          /**
           * Updated At
           * @description Last updated timestamp, format YYYY-MM-DDTHH:MM:SSZ
           * @default null
           */
          updated_at: string | null;
      }[];
      /**
       * Total Entries
       * @description Total number of projects
       */
      total_entries: number;
      /**
       * Total Pages
       * @description Total number of pages
       */
      total_pages: number;
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
 * Type of WORKSNAPS's WORKSNAPS_GET_PROJECT_DETAILS tool input.
 */
type WORKSNAPS_GET_PROJECT_DETAILS_INPUT = {
  /**
   * Project Id
   * @description ID of the project to retrieve. Must be a positive integer.
   */
  project_id?: number;
};

/**
 * Type of WORKSNAPS's WORKSNAPS_GET_PROJECT_DETAILS tool output.
 */
type WORKSNAPS_GET_PROJECT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company Id
       * @description Associated company ID
       * @default null
       */
      company_id: number | null;
      /**
       * Created At
       * @description Timestamp when the project was created
       */
      created_at: string;
      /**
       * Description
       * @description Detailed project description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique project identifier
       */
      id: number;
      /**
       * Name
       * @description Name of the project
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the project was last updated
       */
      updated_at: string;
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
 * Type of WORKSNAPS's WORKSNAPS_GET_PROJECT_REPORT tool input.
 */
type WORKSNAPS_GET_PROJECT_REPORT_INPUT = {
  /**
   * From Date
   * Format: date
   * @description Start date for the report in YYYY-MM-DD format
   * @default null
   */
  from_date: unknown;
  /**
   * Project Id
   * @description ID of the project to retrieve the report for
   */
  project_id?: number;
  /**
   * To Date
   * Format: date
   * @description End date for the report in YYYY-MM-DD format
   * @default null
   */
  to_date: unknown;
  /**
   * User Id
   * @description Optional user ID to filter the report
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of WORKSNAPS's WORKSNAPS_GET_PROJECT_REPORT tool output.
 */
type WORKSNAPS_GET_PROJECT_REPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reports
       * @description List of project report entries
       */
      reports: {
          /**
           * Date
           * @description Date of report entry in YYYY-MM-DD format
           */
          date: string;
          /**
           * Duration In Minutes
           * @description Minutes logged
           */
          duration_in_minutes: number;
          /**
           * Id
           * @description Report ID
           */
          id: number;
          /**
           * Project Id
           * @description Project ID
           */
          project_id: number;
          /**
           * User Id
           * @description User ID
           */
          user_id: number;
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
 * Type of WORKSNAPS's WORKSNAPS_GET_TASKS tool input.
 */
type WORKSNAPS_GET_TASKS_INPUT = {
  /**
   * Page
   * @description Page number for pagination (optional, default=1)
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of tasks per page (optional, default=50)
   * @default 50
   */
  per_page: number | null;
  /**
   * Project Id
   * @description ID of the project to retrieve tasks for
   */
  project_id?: number;
  /**
   * Status
   * @description Filter tasks by status: 'open' or 'closed' (optional)
   * @default null
   * @enum {string|null}
   */
  status: "open" | "closed" | null;
  /**
   * User Id
   * @description Filter tasks by user ID (optional)
   * @default null
   */
  user_id: number | null;
};

/**
 * Type of WORKSNAPS's WORKSNAPS_GET_TASKS tool output.
 */
type WORKSNAPS_GET_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tasks
       * @description List of tasks for the project
       * @default []
       */
      tasks: {
          /**
           * Completed On
           * @description Completion timestamp of the task
           * @default null
           */
          completed_on: string | null;
          /**
           * Description
           * @description Detailed description of the task
           * @default null
           */
          description: string | null;
          /**
           * Estimated Minutes
           * @description Estimated minutes for task completion
           */
          estimated_minutes: number;
          /**
           * Id
           * @description Unique ID of the task
           */
          id: number;
          /**
           * Name
           * @description Name of the task
           */
          name: string;
          /**
           * Project Id
           * @description ID of the parent project
           */
          project_id: number;
          /**
           * Status
           * @description Current status of the task
           */
          status: string;
          /**
           * User Id
           * @description ID of the assigned user
           */
          user_id: number;
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
 * Type of WORKSNAPS's WORKSNAPS_GET_TASK_DETAILS tool input.
 */
type WORKSNAPS_GET_TASK_DETAILS_INPUT = {
  /**
   * Project Id
   * @description The unique identifier of the project containing the task
   */
  project_id?: number;
  /**
   * Task Id
   * @description The unique identifier of the task to retrieve
   */
  task_id?: number;
};

/**
 * Type of WORKSNAPS's WORKSNAPS_GET_TASK_DETAILS tool output.
 */
type WORKSNAPS_GET_TASK_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task
       * @description The task details
       */
      task: {
          /**
           * Created At
           * @description The creation timestamp of the task
           */
          created_at: string;
          /**
           * Description
           * @description A description of the task
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The task's unique identifier
           */
          id: number;
          /**
           * Name
           * @description The name of the task
           */
          name: string;
          /**
           * Status
           * @description The current status of the task
           */
          status: string;
          /**
           * Updated At
           * @description The last update timestamp of the task
           */
          updated_at: string;
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
 * Type of WORKSNAPS's WORKSNAPS_GET_USERS tool input.
 */
type WORKSNAPS_GET_USERS_INPUT = object;

/**
 * Type of WORKSNAPS's WORKSNAPS_GET_USERS tool output.
 */
type WORKSNAPS_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of users in the account
       */
      users: {
          /**
           * Active
           * @description Whether the user is active
           */
          active: boolean;
          /**
           * Email
           * @description User's email address
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description User's first name
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description User object ID
           */
          id: number;
          /**
           * Last Name
           * @description User's last name
           * @default null
           */
          last_name: string | null;
          /**
           * Time Zone
           * @description User's time zone
           * @default null
           */
          time_zone: string | null;
          /**
           * Username
           * @description User login name
           */
          username: string;
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
 * Type of WORKSNAPS's WORKSNAPS_GET_USER_ACCOUNT tool input.
 */
type WORKSNAPS_GET_USER_ACCOUNT_INPUT = {
  /**
   * User Id
   * @description The unique identifier of the user to retrieve
   */
  user_id?: number;
};

/**
 * Type of WORKSNAPS's WORKSNAPS_GET_USER_ACCOUNT tool output.
 */
type WORKSNAPS_GET_USER_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * User
       * @description User account details
       */
      user: {
          /**
           * Base Currency
           * @description Currency used for billing
           */
          base_currency: string;
          /**
           * Created At
           * @description Timestamp when the account was created (ISO8601)
           */
          created_at: string;
          /**
           * Email
           * @description Email address of the user
           */
          email: string;
          /**
           * Id
           * @description Unique identifier of the user
           */
          id: number;
          /**
           * Invoice Rate
           * @description Billing rate associated with the user
           */
          invoice_rate: number;
          /**
           * Name
           * @description Full name of the user
           */
          name: string;
          /**
           * Status
           * @description Current status of the user account
           */
          status: string;
          /**
           * Updated At
           * @description Timestamp when the account was last updated (ISO8601)
           */
          updated_at: string;
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
 * Type of WORKSNAPS's WORKSNAPS_GET_USER_ASSIGNMENTS tool input.
 */
type WORKSNAPS_GET_USER_ASSIGNMENTS_INPUT = {
  /**
   * Project Id
   * @description ID of the project to retrieve assignments for
   */
  project_id?: number;
};

/**
 * Type of WORKSNAPS's WORKSNAPS_GET_USER_ASSIGNMENTS tool output.
 */
type WORKSNAPS_GET_USER_ASSIGNMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * User Assignments
       * @description List of assignments for the authenticated user
       */
      user_assignments: {
          /**
           * Created At
           * @description Creation timestamp (ISO 8601)
           */
          created_at: string;
          /**
           * Id
           * @description User assignment ID
           */
          id: number;
          /**
           * Is Active
           * @description Whether the assignment is active
           */
          is_active: boolean;
          /**
           * Project Id
           * @description ID of the project
           */
          project_id: number;
          /**
           * Project Name
           * @description Name of the project
           */
          project_name: string;
          /**
           * Role
           * @description Role of the user in the project
           */
          role: string;
          /**
           * Updated At
           * @description Last update timestamp (ISO 8601)
           */
          updated_at: string;
          /**
           * User Id
           * @description ID of the user
           */
          user_id: number;
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
 * Type of WORKSNAPS's WORKSNAPS_PUT_UPDATE_PROJECT tool input.
 */
type WORKSNAPS_PUT_UPDATE_PROJECT_INPUT = {
  /**
   * Client Id
   * @description New client ID (optional)
   * @default null
   */
  client_id: number | null;
  /**
   * Description
   * @description New project description (optional)
   * @default null
   */
  description: string | null;
  /**
   * End Date
   * @description Project end date YYYY-MM-DD (optional)
   * @default null
   */
  end_date: string | null;
  /**
   * Name
   * @description New project name (optional)
   * @default null
   */
  name: string | null;
  /**
   * Project Id
   * @description ID of the project to update
   */
  project_id?: number;
  /**
   * Start Date
   * @description Project start date YYYY-MM-DD (optional)
   * @default null
   */
  start_date: string | null;
  /**
   * Status
   * @description Project status: 'active' or 'archived' (optional)
   * @default null
   * @enum {string|null}
   */
  status: "active" | "archived" | null;
};

/**
 * Type of WORKSNAPS's WORKSNAPS_PUT_UPDATE_PROJECT tool output.
 */
type WORKSNAPS_PUT_UPDATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Project
       * @description Updated project object
       */
      project: {
          /**
           * Client Id
           * @description Client ID associated with project
           * @default null
           */
          client_id: number | null;
          /**
           * Created At
           * @description Project creation timestamp
           */
          created_at: string;
          /**
           * Description
           * @description Project description
           * @default null
           */
          description: string | null;
          /**
           * End Date
           * @description End date YYYY-MM-DD
           * @default null
           */
          end_date: string | null;
          /**
           * Id
           * @description Unique project ID
           */
          id: number;
          /**
           * Name
           * @description Project name
           */
          name: string;
          /**
           * Start Date
           * @description Start date YYYY-MM-DD
           * @default null
           */
          start_date: string | null;
          /**
           * Status
           * @description Project status, e.g., active or archived
           */
          status: string;
          /**
           * Updated At
           * @description Project last update timestamp
           */
          updated_at: string;
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
 * Type of WORKSNAPS's WORKSNAPS_PUT_UPDATE_TASK tool input.
 */
type WORKSNAPS_PUT_UPDATE_TASK_INPUT = {
  /**
   * Description
   * @description New task description (optional)
   * @default null
   * @example Create UI mockups for settings page
   */
  description: string | null;
  /**
   * Due Date
   * @description New due date in YYYY-MM-DD format (optional)
   * @default null
   * @example 2023-07-01
   */
  due_date: string | null;
  /**
   * Name
   * @description New task name (optional)
   * @default null
   * @example Design mockups
   */
  name: string | null;
  /**
   * Project Id
   * @description ID of the project containing the task
   * @example 123
   */
  project_id?: number;
  /**
   * Status
   * @description New task status: 'open' or 'closed' (optional)
   * @default null
   * @example closed
   * @enum {string|null}
   */
  status: "open" | "closed" | null;
  /**
   * Task Id
   * @description ID of the task to update
   * @example 456
   */
  task_id?: number;
};

/**
 * Type of WORKSNAPS's WORKSNAPS_PUT_UPDATE_TASK tool output.
 */
type WORKSNAPS_PUT_UPDATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Task
       * @description Updated task object
       */
      task: {
          /**
           * Description
           * @description Task description
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * @description Task due date in YYYY-MM-DD format
           * @default null
           */
          due_date: string | null;
          /**
           * Id
           * @description Task ID
           */
          id: number;
          /**
           * Name
           * @description Task name
           */
          name: string;
          /**
           * Status
           * @description Task status
           */
          status: string;
          /**
           * Updated At
           * @description Timestamp when task was last updated
           */
          updated_at: string;
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
 * Type of WORKSNAPS's WORKSNAPS_PUT_UPDATE_USER_ACCOUNT tool input.
 */
type WORKSNAPS_PUT_UPDATE_USER_ACCOUNT_INPUT = {
  /**
   * Email
   * @description New email address for the user
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description New first name for the user
   * @default null
   */
  first_name: string | null;
  /**
   * Is Active
   * @description Set to true to activate or false to deactivate the user
   * @default null
   */
  is_active: boolean | null;
  /**
   * Is Manager
   * @description Set to true to grant manager privileges
   * @default null
   */
  is_manager: boolean | null;
  /**
   * Last Name
   * @description New last name for the user
   * @default null
   */
  last_name: string | null;
  /**
   * Password
   * @description New password for the user
   * @default null
   */
  password: string | null;
  /**
   * Password Confirmation
   * @description Confirmation of the new password
   * @default null
   */
  password_confirmation: string | null;
  /**
   * Time Zone
   * @description IANA time zone identifier, e.g., 'America/Los_Angeles'
   * @default null
   */
  time_zone: string | null;
  /**
   * User Id
   * @description ID of the user account to be updated
   */
  user_id?: number;
};

/**
 * Type of WORKSNAPS's WORKSNAPS_PUT_UPDATE_USER_ACCOUNT tool output.
 */
type WORKSNAPS_PUT_UPDATE_USER_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * User
       * @description Updated user account object
       */
      user: {
          /**
           * Created At
           * @description Timestamp when the user was created
           */
          created_at: string;
          /**
           * Email
           * @description Email address of the user
           */
          email: string;
          /**
           * First Name
           * @description First name of the user
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Unique ID of the user account
           */
          id: number;
          /**
           * Is Active
           * @description Whether the user account is active
           */
          is_active: boolean;
          /**
           * Is Manager
           * @description Whether the user has manager privileges
           */
          is_manager: boolean;
          /**
           * Last Name
           * @description Last name of the user
           * @default null
           */
          last_name: string | null;
          /**
           * Time Zone
           * @description IANA time zone of the user
           * @default null
           */
          time_zone: string | null;
          /**
           * Updated At
           * @description Timestamp when the user was last updated
           */
          updated_at: string;
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
 * Type map of all available tool input types for toolkit "WORKSNAPS".
 */
export type WORKSNAPS_TOOL_INPUTS = {
  CREATE_PROJECT: WORKSNAPS_CREATE_PROJECT_INPUT
  CREATE_TASK: WORKSNAPS_CREATE_TASK_INPUT
  DELETE_TASK: WORKSNAPS_DELETE_TASK_INPUT
  GET_PROJECTS: WORKSNAPS_GET_PROJECTS_INPUT
  GET_PROJECT_DETAILS: WORKSNAPS_GET_PROJECT_DETAILS_INPUT
  GET_PROJECT_REPORT: WORKSNAPS_GET_PROJECT_REPORT_INPUT
  GET_TASKS: WORKSNAPS_GET_TASKS_INPUT
  GET_TASK_DETAILS: WORKSNAPS_GET_TASK_DETAILS_INPUT
  GET_USERS: WORKSNAPS_GET_USERS_INPUT
  GET_USER_ACCOUNT: WORKSNAPS_GET_USER_ACCOUNT_INPUT
  GET_USER_ASSIGNMENTS: WORKSNAPS_GET_USER_ASSIGNMENTS_INPUT
  PUT_UPDATE_PROJECT: WORKSNAPS_PUT_UPDATE_PROJECT_INPUT
  PUT_UPDATE_TASK: WORKSNAPS_PUT_UPDATE_TASK_INPUT
  PUT_UPDATE_USER_ACCOUNT: WORKSNAPS_PUT_UPDATE_USER_ACCOUNT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WORKSNAPS".
 */
export type WORKSNAPS_TOOL_OUTPUTS = {
  CREATE_PROJECT: WORKSNAPS_CREATE_PROJECT_OUTPUT
  CREATE_TASK: WORKSNAPS_CREATE_TASK_OUTPUT
  DELETE_TASK: WORKSNAPS_DELETE_TASK_OUTPUT
  GET_PROJECTS: WORKSNAPS_GET_PROJECTS_OUTPUT
  GET_PROJECT_DETAILS: WORKSNAPS_GET_PROJECT_DETAILS_OUTPUT
  GET_PROJECT_REPORT: WORKSNAPS_GET_PROJECT_REPORT_OUTPUT
  GET_TASKS: WORKSNAPS_GET_TASKS_OUTPUT
  GET_TASK_DETAILS: WORKSNAPS_GET_TASK_DETAILS_OUTPUT
  GET_USERS: WORKSNAPS_GET_USERS_OUTPUT
  GET_USER_ACCOUNT: WORKSNAPS_GET_USER_ACCOUNT_OUTPUT
  GET_USER_ASSIGNMENTS: WORKSNAPS_GET_USER_ASSIGNMENTS_OUTPUT
  PUT_UPDATE_PROJECT: WORKSNAPS_PUT_UPDATE_PROJECT_OUTPUT
  PUT_UPDATE_TASK: WORKSNAPS_PUT_UPDATE_TASK_OUTPUT
  PUT_UPDATE_USER_ACCOUNT: WORKSNAPS_PUT_UPDATE_USER_ACCOUNT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WORKSNAPS toolkit.
 */
export const WORKSNAPS = {
  slug: "worksnaps",
  tools: {
    /**
     * Tool to create a new project in worksnaps. use after gathering project details before logging time.
     */
    CREATE_PROJECT: "WORKSNAPS_CREATE_PROJECT",
    /**
     * Tool to create a new task in a specified project. use after confirming project id exists.
     */
    CREATE_TASK: "WORKSNAPS_CREATE_TASK",
    /**
     * Tool to delete a task from a project. use when you need to remove a task by its id after confirming the project context.
     */
    DELETE_TASK: "WORKSNAPS_DELETE_TASK",
    /**
     * Tool to retrieve a paginated list of projects. use after authenticating to list accessible projects.
     */
    GET_PROJECTS: "WORKSNAPS_GET_PROJECTS",
    /**
     * Tool to retrieve details of a specific project. use when you have a project id and need its details.
     */
    GET_PROJECT_DETAILS: "WORKSNAPS_GET_PROJECT_DETAILS",
    /**
     * Tool to retrieve a project's time tracking report. use when you need summary of logged time per day for a project within an optional date range.
     */
    GET_PROJECT_REPORT: "WORKSNAPS_GET_PROJECT_REPORT",
    /**
     * Tool to retrieve tasks for a specific project. use when you have a project id and need its tasks. example: 'get tasks for project 42'.
     */
    GET_TASKS: "WORKSNAPS_GET_TASKS",
    /**
     * Tool to retrieve details of a specific task within a project. use after confirming project id and task id.
     */
    GET_TASK_DETAILS: "WORKSNAPS_GET_TASK_DETAILS",
    /**
     * Tool to retrieve a list of all users. use when you need to fetch all users in the worksnaps account.
     */
    GET_USERS: "WORKSNAPS_GET_USERS",
    /**
     * Tool to retrieve information about a specific user account. use after confirming the user id.
     */
    GET_USER_ACCOUNT: "WORKSNAPS_GET_USER_ACCOUNT",
    /**
     * Tool to retrieve a list of all user assignments for the authenticated user. use after authenticating to see which projects you're assigned to.
     */
    GET_USER_ASSIGNMENTS: "WORKSNAPS_GET_USER_ASSIGNMENTS",
    /**
     * Tool to update an existing project. use when you have project id and fields to modify.
     */
    PUT_UPDATE_PROJECT: "WORKSNAPS_PUT_UPDATE_PROJECT",
    /**
     * Tool to update details of an existing task. use when you have project id, task id, and fields to update.
     */
    PUT_UPDATE_TASK: "WORKSNAPS_PUT_UPDATE_TASK",
    /**
     * Tool to update information for a specific user account. use when modifying user details after confirming the user exists.
     */
    PUT_UPDATE_USER_ACCOUNT: "WORKSNAPS_PUT_UPDATE_USER_ACCOUNT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WORKSNAPS".
 */
export type WORKSNAPS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WORKSNAPS".
 */
export type WORKSNAPS_TRIGGER_EVENTS = {}
