// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PROCESS_STREET's PROCESS_STREET_COMPLETE_WORKFLOW_RUN tool input.
 */
type PROCESS_STREET_COMPLETE_WORKFLOW_RUN_INPUT = {
  /**
   * Workflow Run Id
   * @description The ID of the workflow run to complete.
   */
  workflow_run_id?: string;
};

/**
 * Type of PROCESS_STREET's PROCESS_STREET_COMPLETE_WORKFLOW_RUN tool output.
 */
type PROCESS_STREET_COMPLETE_WORKFLOW_RUN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Whether the workflow run was completed successfully.
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
 * Type of PROCESS_STREET's PROCESS_STREET_CREATE_WORKFLOW_RUN tool input.
 */
type PROCESS_STREET_CREATE_WORKFLOW_RUN_INPUT = {
  /**
   * Due Date
   * @description Due date for the workflow run in ISO 8601 format
   * @default null
   */
  due_date: string | null;
  /**
   * Name
   * @description Custom name for the workflow run
   * @default null
   */
  name: string | null;
  /**
   * Shared
   * @description Whether to enable a share link for the workflow run
   * @default null
   */
  shared: boolean | null;
  /**
   * Workflow Template Id
   * @description The ID of the workflow template to create a run from
   */
  workflow_template_id?: string;
};

/**
 * Type of PROCESS_STREET's PROCESS_STREET_CREATE_WORKFLOW_RUN tool output.
 */
type PROCESS_STREET_CREATE_WORKFLOW_RUN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the workflow run was created
       */
      created_at: string;
      /**
       * Due Date
       * @description Due date of the workflow run (if set)
       * @default null
       */
      due_date: string | null;
      /**
       * Name
       * @description Name of the workflow run
       */
      name: string;
      /**
       * Share Link
       * @description Share link URL (if enabled)
       * @default null
       */
      share_link: string | null;
      /**
       * Status
       * @description Current status of the workflow run
       */
      status: string;
      /**
       * Workflow Run Id
       * @description The ID of the created workflow run
       */
      workflow_run_id: string;
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
 * Type of PROCESS_STREET's PROCESS_STREET_FIND_DATA_SET_ROWS tool input.
 */
type PROCESS_STREET_FIND_DATA_SET_ROWS_INPUT = {
  /**
   * Data Set Id
   * @description The ID of the data set to search in
   */
  data_set_id?: string;
  /**
   * Limit
   * @description Number of records per page. Default is 20.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination. Starts from 1.
   * @default null
   */
  page: number | null;
  /**
   * Query
   * @description Search query to filter the records
   * @default null
   */
  query: string | null;
};

/**
 * Type of PROCESS_STREET's PROCESS_STREET_FIND_DATA_SET_ROWS tool output.
 */
type PROCESS_STREET_FIND_DATA_SET_ROWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Number of records per page
       */
      limit: number;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Records
       * @description List of records matching the search criteria
       */
      records: {
          /**
           * Created At
           * @description The timestamp when the record was created
           */
          created_at: string;
          /**
           * Data
           * @description The record data containing field values
           */
          data: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description The unique identifier of the record
           */
          id: string;
          /**
           * Updated At
           * @description The timestamp when the record was last updated
           */
          updated_at: string;
      }[];
      /**
       * Total
       * @description Total number of records matching the search criteria
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
 * Type of PROCESS_STREET's PROCESS_STREET_LIST_WORKFLOWS tool input.
 */
type PROCESS_STREET_LIST_WORKFLOWS_INPUT = object;

/**
 * Type of PROCESS_STREET's PROCESS_STREET_LIST_WORKFLOWS tool output.
 */
type PROCESS_STREET_LIST_WORKFLOWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Total Count
       * @description Total number of workflows
       */
      total_count: number;
      /**
       * Workflows
       * @description List of workflows in the Process Street account
       */
      workflows: {
          /**
           * Active
           * @description Whether the workflow is active or archived
           */
          active: boolean;
          /**
           * Created At
           * @description Timestamp when the workflow was created
           */
          created_at: string;
          /**
           * Id
           * @description The unique identifier of the workflow
           */
          id: string;
          /**
           * Name
           * @description The name of the workflow
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the workflow was last updated
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
 * Type of PROCESS_STREET's PROCESS_STREET_UNDELETE_WORKFLOW_RUN tool input.
 */
type PROCESS_STREET_UNDELETE_WORKFLOW_RUN_INPUT = {
  /**
   * Workflow Run Id
   * @description The ID of the workflow run to restore.
   */
  workflow_run_id?: string;
};

/**
 * Type of PROCESS_STREET's PROCESS_STREET_UNDELETE_WORKFLOW_RUN tool output.
 */
type PROCESS_STREET_UNDELETE_WORKFLOW_RUN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the workflow run was successfully restored.
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
 * Type map of all available tool input types for toolkit "PROCESS_STREET".
 */
export type PROCESS_STREET_TOOL_INPUTS = {
  COMPLETE_WORKFLOW_RUN: PROCESS_STREET_COMPLETE_WORKFLOW_RUN_INPUT
  CREATE_WORKFLOW_RUN: PROCESS_STREET_CREATE_WORKFLOW_RUN_INPUT
  FIND_DATA_SET_ROWS: PROCESS_STREET_FIND_DATA_SET_ROWS_INPUT
  LIST_WORKFLOWS: PROCESS_STREET_LIST_WORKFLOWS_INPUT
  UNDELETE_WORKFLOW_RUN: PROCESS_STREET_UNDELETE_WORKFLOW_RUN_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PROCESS_STREET".
 */
export type PROCESS_STREET_TOOL_OUTPUTS = {
  COMPLETE_WORKFLOW_RUN: PROCESS_STREET_COMPLETE_WORKFLOW_RUN_OUTPUT
  CREATE_WORKFLOW_RUN: PROCESS_STREET_CREATE_WORKFLOW_RUN_OUTPUT
  FIND_DATA_SET_ROWS: PROCESS_STREET_FIND_DATA_SET_ROWS_OUTPUT
  LIST_WORKFLOWS: PROCESS_STREET_LIST_WORKFLOWS_OUTPUT
  UNDELETE_WORKFLOW_RUN: PROCESS_STREET_UNDELETE_WORKFLOW_RUN_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PROCESS_STREET toolkit.
 */
export const PROCESS_STREET = {
  slug: "process_street",
  tools: {
    /**
     * This tool marks an entire workflow run as completed in process street. it updates the workflow run's status to 'completed', distinguishing it from process street complete task which completes individual tasks.
     */
    COMPLETE_WORKFLOW_RUN: "PROCESS_STREET_COMPLETE_WORKFLOW_RUN",
    /**
     * This tool creates a new workflow run from a specified workflow template. it is one of the most fundamental operations in process street, allowing users to initiate a new instance of a workflow. the tool requires a workflow template id and optionally allows setting a custom name, due date, and whether to enable a share link.
     */
    CREATE_WORKFLOW_RUN: "PROCESS_STREET_CREATE_WORKFLOW_RUN",
    /**
     * This tool allows you to search for records within a data set based on form fields. it's useful for retrieving specific records from a data set when you need to find matching entries based on certain criteria.
     */
    FIND_DATA_SET_ROWS: "PROCESS_STREET_FIND_DATA_SET_ROWS",
    /**
     * This tool retrieves a list of all workflows available in the process street account. it is a fundamental action that allows users to view and access all their workflows, which is essential for other operations that require workflow ids. this action is important because it provides the foundation for other actions that require workflow ids as input parameters, such as creating workflow runs or managing workflow-specific tasks, thereby enabling better workflow management and automation.
     */
    LIST_WORKFLOWS: "PROCESS_STREET_LIST_WORKFLOWS",
    /**
     * This tool allows you to restore a previously deleted workflow run in process street. it uses the put /v1.1/workflow-runs/{workflowrunid}/undelete endpoint to recover a workflow run within a valid recovery period. it complements the existing process street delete workflow run action by providing a data recovery option to correct deletion mistakes.
     */
    UNDELETE_WORKFLOW_RUN: "PROCESS_STREET_UNDELETE_WORKFLOW_RUN",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PROCESS_STREET".
 */
export type PROCESS_STREET_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PROCESS_STREET".
 */
export type PROCESS_STREET_TRIGGER_EVENTS = {}
