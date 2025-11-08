// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HUMANLOOP's HUMANLOOP_CREATE_PROJECT tool input.
 */
type HUMANLOOP_CREATE_PROJECT_INPUT = {
  /**
   * Description
   * @description A description of the project.
   * @default null
   */
  description: string | null;
  /**
   * Directory Id
   * @description ID of the directory to assign the project to.
   * @default null
   */
  directory_id: string | null;
  /**
   * Name
   * @description The name of the project (required).
   */
  name?: string;
};

/**
 * Type of HUMANLOOP's HUMANLOOP_CREATE_PROJECT tool output.
 */
type HUMANLOOP_CREATE_PROJECT_OUTPUT = {
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
           * Active Config
           * @description Active configuration of the project
           * @default null
           */
          active_config: {
              [key: string]: unknown;
          } | null;
          /**
           * Active Evaluators
           * @description List of active evaluators
           * @default null
           */
          active_evaluators: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Config Type
           * @description Type of configuration
           * @default null
           */
          config_type: string | null;
          /**
           * Created At
           * @description Creation timestamp of the project
           */
          created_at: string;
          /**
           * Data Count
           * @description Count of data in the project
           */
          data_count: number;
          /**
           * Description
           * @description Description of the project
           * @default null
           */
          description: string | null;
          /**
           * Directory Id
           * @description ID of the directory containing the project
           * @default null
           */
          directory_id: string | null;
          /**
           * Feedback Types
           * @description Types of feedback available
           */
          feedback_types: string[];
          /**
           * Id
           * @description Unique identifier of the project
           */
          id: string;
          /**
           * Name
           * @description Name of the project
           */
          name: string;
          /**
           * Organization Id
           * @description ID of the organization
           * @default null
           */
          organization_id: string | null;
          /**
           * Team Id
           * @description ID of the team the project belongs to
           */
          team_id: string;
          /**
           * Updated At
           * @description Last update timestamp of the project
           */
          updated_at: string;
          /**
           * Users
           * @description List of users associated with the project
           */
          users: {
              [key: string]: unknown;
          }[];
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
 * Type of HUMANLOOP's HUMANLOOP_DELETE_PROJECT tool input.
 */
type HUMANLOOP_DELETE_PROJECT_INPUT = {
  /**
   * Project Id
   * @description The ID of the project to delete (must start with 'pr_')
   */
  project_id?: string;
};

/**
 * Type of HUMANLOOP's HUMANLOOP_DELETE_PROJECT tool output.
 */
type HUMANLOOP_DELETE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Project Id
       * @description The ID of the project that was deleted
       */
      project_id: string;
      /**
       * Success
       * @description Indicates if the project was successfully deleted
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
 * Type of HUMANLOOP's HUMANLOOP_LIST_EXPERIMENTS tool input.
 */
type HUMANLOOP_LIST_EXPERIMENTS_INPUT = {
  /**
   * Project Id
   * @description The unique identifier of the project (must start with 'pr_')
   */
  project_id?: string;
};

/**
 * Type of HUMANLOOP's HUMANLOOP_LIST_EXPERIMENTS tool output.
 */
type HUMANLOOP_LIST_EXPERIMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Experiments
       * @description Array of experiment objects
       */
      experiments: {
          /**
           * Configuration
           * @description Configuration details of the experiment
           */
          configuration: {
              [key: string]: unknown;
          };
          /**
           * Created At
           * @description Creation timestamp of the experiment
           */
          created_at: string;
          /**
           * Description
           * @description Description of the experiment
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the experiment
           */
          id: string;
          /**
           * Metrics
           * @description Metrics and results of the experiment
           * @default null
           */
          metrics: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Name of the experiment
           */
          name: string;
          /**
           * Status
           * @description Current status of the experiment
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
 * Type of HUMANLOOP's HUMANLOOP_LIST_SESSIONS tool input.
 */
type HUMANLOOP_LIST_SESSIONS_INPUT = {
  /**
   * Page
   * @description Page offset for pagination. Defaults to 1.
   * @default null
   */
  page: number | null;
  /**
   * Project Id
   * @description The unique identifier of the project (starts with 'pr_')
   */
  project_id?: string;
  /**
   * Size
   * @description Number of sessions per page. Defaults to 10.
   * @default null
   */
  size: number | null;
};

/**
 * Type of HUMANLOOP's HUMANLOOP_LIST_SESSIONS tool output.
 */
type HUMANLOOP_LIST_SESSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Records
       * @description Array of session objects
       */
      records: {
          /**
           * Created At
           * @description Creation timestamp of the session
           */
          created_at: string;
          /**
           * Datapoints Count
           * @description Count of datapoints in the session
           */
          datapoints_count: number;
          /**
           * First Inputs
           * @description First inputs of the session
           * @default null
           */
          first_inputs: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Unique identifier of the session
           */
          id: string;
          /**
           * Last Output
           * @description Last output of the session
           * @default null
           */
          last_output: {
              [key: string]: unknown;
          } | null;
          /**
           * Projects
           * @description List of projects associated with the session
           */
          projects: {
              [key: string]: unknown;
          }[];
          /**
           * Reference Id
           * @description Reference identifier of the session
           * @default null
           */
          reference_id: string | null;
          /**
           * Updated At
           * @description Last update timestamp of the session
           */
          updated_at: string;
      }[];
      /**
       * Size
       * @description Number of sessions per page
       */
      size: number;
      /**
       * Total
       * @description Total number of sessions
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
 * Type map of all available tool input types for toolkit "HUMANLOOP".
 */
export type HUMANLOOP_TOOL_INPUTS = {
  CREATE_PROJECT: HUMANLOOP_CREATE_PROJECT_INPUT
  DELETE_PROJECT: HUMANLOOP_DELETE_PROJECT_INPUT
  LIST_EXPERIMENTS: HUMANLOOP_LIST_EXPERIMENTS_INPUT
  LIST_SESSIONS: HUMANLOOP_LIST_SESSIONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HUMANLOOP".
 */
export type HUMANLOOP_TOOL_OUTPUTS = {
  CREATE_PROJECT: HUMANLOOP_CREATE_PROJECT_OUTPUT
  DELETE_PROJECT: HUMANLOOP_DELETE_PROJECT_OUTPUT
  LIST_EXPERIMENTS: HUMANLOOP_LIST_EXPERIMENTS_OUTPUT
  LIST_SESSIONS: HUMANLOOP_LIST_SESSIONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HUMANLOOP toolkit.
 */
export const HUMANLOOP = {
  slug: "humanloop",
  tools: {
    /**
     * This tool creates a new project in humanloop. it is an independent action that generates a project by accepting a project's name (required), an optional description, and an optional organization id. upon execution, it returns details of the created project, including the project's id, name, description, created at timestamp, and organization id.
     */
    CREATE_PROJECT: "HUMANLOOP_CREATE_PROJECT",
    /**
     * This tool allows you to delete a specific project from your humanloop organization. the deletion is permanent and cannot be undone. all associated data, including sessions, datapoints, and evaluations linked to the project, will be permanently removed.
     */
    DELETE_PROJECT: "HUMANLOOP_DELETE_PROJECT",
    /**
     * This tool retrieves an array of experiments associated with a specific project in humanloop. it requires a project id (starting with 'pr ') and returns details including experiment id, name, description, creation timestamp, status, configuration details, and metrics/results. it is useful for monitoring experiments, analyzing results, tracking model configurations, and comparing experimental setups.
     */
    LIST_EXPERIMENTS: "HUMANLOOP_LIST_EXPERIMENTS",
    /**
     * This tool retrieves a paginated list of sessions for a specific project in humanloop. it requires a project id (and optionally, page and size for pagination) and returns session details such as id, reference id, project information, datapoints count, first inputs, last output, created at, and updated at. this enables users to monitor and analyze historical project interactions.
     */
    LIST_SESSIONS: "HUMANLOOP_LIST_SESSIONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HUMANLOOP".
 */
export type HUMANLOOP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HUMANLOOP".
 */
export type HUMANLOOP_TRIGGER_EVENTS = {}
