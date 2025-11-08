// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ASYNC_INTERVIEW's ASYNC_INTERVIEW_DELETE_JOB tool input.
 */
type ASYNC_INTERVIEW_DELETE_JOB_INPUT = {
  /**
   * Job Id
   * @description ID of the interview job to delete
   */
  job_id?: string;
};

/**
 * Type of ASYNC_INTERVIEW's ASYNC_INTERVIEW_DELETE_JOB tool output.
 */
type ASYNC_INTERVIEW_DELETE_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the job was deleted successfully
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
 * Type of ASYNC_INTERVIEW's ASYNC_INTERVIEW_LIST_JOBS tool input.
 */
type ASYNC_INTERVIEW_LIST_JOBS_INPUT = object;

/**
 * Type of ASYNC_INTERVIEW's ASYNC_INTERVIEW_LIST_JOBS tool output.
 */
type ASYNC_INTERVIEW_LIST_JOBS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Jobs
       * @description List of interview jobs
       */
      jobs: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the job was created
           */
          created_at: string;
          /**
           * Description
           * @description Detailed description of the job
           */
          description: string;
          /**
           * Id
           * @description Unique identifier for the job
           */
          id: string;
          /**
           * Status
           * @description Current status of the job
           */
          status: string;
          /**
           * Title
           * @description Title of the job
           */
          title: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the job was last updated
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
 * Type of ASYNC_INTERVIEW's ASYNC_INTERVIEW_UPDATE_JOB tool input.
 */
type ASYNC_INTERVIEW_UPDATE_JOB_INPUT = {
  /**
   * Job Id
   * @description Unique identifier of the interview job to update
   */
  job_id?: string;
  /**
   * Name
   * @description New name for the job
   * @default null
   */
  name: string | null;
  /**
   * Parameters
   * @description Updated configuration parameters for the job
   * @default null
   */
  parameters: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of ASYNC_INTERVIEW's ASYNC_INTERVIEW_UPDATE_JOB tool output.
 */
type ASYNC_INTERVIEW_UPDATE_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the updated job
       */
      id: string;
      /**
       * Name
       * @description Name of the updated job
       */
      name: string;
      /**
       * Status
       * @description Current status of the job
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
 * Type map of all available tool input types for toolkit "ASYNC_INTERVIEW".
 */
export type ASYNC_INTERVIEW_TOOL_INPUTS = {
  DELETE_JOB: ASYNC_INTERVIEW_DELETE_JOB_INPUT
  LIST_JOBS: ASYNC_INTERVIEW_LIST_JOBS_INPUT
  UPDATE_JOB: ASYNC_INTERVIEW_UPDATE_JOB_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ASYNC_INTERVIEW".
 */
export type ASYNC_INTERVIEW_TOOL_OUTPUTS = {
  DELETE_JOB: ASYNC_INTERVIEW_DELETE_JOB_OUTPUT
  LIST_JOBS: ASYNC_INTERVIEW_LIST_JOBS_OUTPUT
  UPDATE_JOB: ASYNC_INTERVIEW_UPDATE_JOB_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ASYNC_INTERVIEW toolkit.
 */
export const ASYNC_INTERVIEW = {
  slug: "async_interview",
  tools: {
    /**
     * Tool to delete an interview job. use when you need to permanently remove a job after reviewing responses.
     */
    DELETE_JOB: "ASYNC_INTERVIEW_DELETE_JOB",
    /**
     * Tool to retrieve a list of all interview jobs. use when you need to display or manage existing jobs.
     */
    LIST_JOBS: "ASYNC_INTERVIEW_LIST_JOBS",
    /**
     * Tool to update an existing interview job. use when you need to modify job details after creation.
     */
    UPDATE_JOB: "ASYNC_INTERVIEW_UPDATE_JOB",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ASYNC_INTERVIEW".
 */
export type ASYNC_INTERVIEW_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ASYNC_INTERVIEW".
 */
export type ASYNC_INTERVIEW_TRIGGER_EVENTS = {}
