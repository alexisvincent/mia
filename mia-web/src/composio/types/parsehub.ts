// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PARSEHUB's PARSEHUB_GET_PROJECTS tool input.
 */
type PARSEHUB_GET_PROJECTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of projects to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Index of the first project to return for pagination (0-based)
   * @default null
   */
  offset: number | null;
};

/**
 * Type of PARSEHUB's PARSEHUB_GET_PROJECTS tool output.
 */
type PARSEHUB_GET_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Limit value used in the request
       */
      limit: number;
      /**
       * Offset
       * @description Offset value used in the request
       */
      offset: number;
      /**
       * Projects
       * @description List of projects accessible by the user
       */
      projects: {
          /**
           * LastRun
           * @description Details of the most recent run of the project
           * @default null
           */
          last_run: {
              /**
               * Data
               * @description URL to the JSON data of this run
               */
              data: string;
              /**
               * Date Created
               * @description Timestamp when the run was created
               */
              date_created: string;
              /**
               * Date Updated
               * @description Timestamp when the run was last updated
               * @default null
               */
              date_updated: string | null;
              /**
               * Status
               * @description Status of the project run
               */
              status: string;
          } | null;
          /**
           * Name
           * @description Name of the project
           */
          name: string;
          /**
           * Templates
           * @description List of templates defined in the project
           * @default null
           */
          templates: {
              /**
               * Name
               * @description Name of the template
               */
              name: string;
              /**
               * Template Token
               * @description Identifier of the template
               */
              template_token: string;
          }[] | null;
          /**
           * Token
           * @description Unique identifier for the project
           */
          token: string;
      }[];
      /**
       * Total Projects
       * @description Total number of projects for this account
       */
      total_projects: number;
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
 * Type map of all available tool input types for toolkit "PARSEHUB".
 */
export type PARSEHUB_TOOL_INPUTS = {
  GET_PROJECTS: PARSEHUB_GET_PROJECTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PARSEHUB".
 */
export type PARSEHUB_TOOL_OUTPUTS = {
  GET_PROJECTS: PARSEHUB_GET_PROJECTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PARSEHUB toolkit.
 */
export const PARSEHUB = {
  slug: "parsehub",
  tools: {
    /**
     * Tool to retrieve all projects for the authenticated user. use after confirming account's api key.
     */
    GET_PROJECTS: "PARSEHUB_GET_PROJECTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PARSEHUB".
 */
export type PARSEHUB_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PARSEHUB".
 */
export type PARSEHUB_TRIGGER_EVENTS = {}
