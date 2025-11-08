// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TIMECAMP's TIMECAMP_GET_PROJECTS_LIST tool input.
 */
type TIMECAMP_GET_PROJECTS_LIST_INPUT = {
  /**
   * Format
   * @description The format of the response (json, xml, or csv)
   * @default json
   */
  format: string | null;
};

/**
 * Type of TIMECAMP's TIMECAMP_GET_PROJECTS_LIST tool output.
 */
type TIMECAMP_GET_PROJECTS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of projects retrieved from TimeCamp
       */
      projects: {
          /**
           * Add Date
           * @description Date when the project was added
           * @default null
           */
          add_date: string | null;
          /**
           * Archived
           * @description Whether the project is archived
           * @default null
           */
          archived: boolean | null;
          /**
           * Budgeted
           * @description Budgeted time for the project
           * @default null
           */
          budgeted: number | null;
          /**
           * External Task Id
           * @description External task ID if integrated with other systems
           * @default null
           */
          external_task_id: string | null;
          /**
           * Level
           * @description Hierarchical level of the project
           * @default null
           */
          level: number | null;
          /**
           * Name
           * @description Name of the project
           */
          name: string;
          /**
           * Tags
           * @description List of tags associated with the project
           * @default null
           */
          tags: string[] | null;
          /**
           * Task Id
           * @description Unique identifier of the project
           */
          task_id: string;
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
 * Type map of all available tool input types for toolkit "TIMECAMP".
 */
export type TIMECAMP_TOOL_INPUTS = {
  GET_PROJECTS_LIST: TIMECAMP_GET_PROJECTS_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TIMECAMP".
 */
export type TIMECAMP_TOOL_OUTPUTS = {
  GET_PROJECTS_LIST: TIMECAMP_GET_PROJECTS_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TIMECAMP toolkit.
 */
export const TIMECAMP = {
  slug: "timecamp",
  tools: {
    /**
     * This tool retrieves a list of all projects from timecamp. in timecamp's api, projects are represented as tasks with no parent id (root-level tasks). it requires the api token parameter for authentication and supports an optional 'format' parameter to specify the output format (defaulting to json). the response includes detailed project information including task id, name, hierarchical data, and additional attributes.
     */
    GET_PROJECTS_LIST: "TIMECAMP_GET_PROJECTS_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TIMECAMP".
 */
export type TIMECAMP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TIMECAMP".
 */
export type TIMECAMP_TRIGGER_EVENTS = {}
