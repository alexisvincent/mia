// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FORMCARRY's FORMCARRY_RETRIEVE_SUBMISSIONS tool input.
 */
type FORMCARRY_RETRIEVE_SUBMISSIONS_INPUT = {
  /**
   * Form Id
   * @description The ID of the form to retrieve submissions for.
   */
  formId?: string;
  /**
   * Limit
   * @description Number of submissions per page. Default is 25, Max is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination. Starts from 1.
   * @default null
   */
  page: number | null;
};

/**
 * Type of FORMCARRY's FORMCARRY_RETRIEVE_SUBMISSIONS tool output.
 */
type FORMCARRY_RETRIEVE_SUBMISSIONS_OUTPUT = {
  /**
   * Data
   * @description The list of submissions.
   */
  data?: {
      /**
       *  Id
       * @description Submission ID.
       */
      _id: string;
      /**
       * Created At
       * @description Creation timestamp of the submission.
       */
      createdAt: string;
      /**
       * Fields
       * @description Submitted form fields and their values.
       */
      fields: {
          [key: string]: unknown;
      };
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Metadata for pagination.
   */
  meta?: {
      /**
       * Limit
       * @description Number of submissions per page.
       */
      limit: number;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Total
       * @description Total number of submissions.
       */
      total: number;
  };
  /**
   * Status
   * @description The status of the request, e.g., 'success'.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "FORMCARRY".
 */
export type FORMCARRY_TOOL_INPUTS = {
  RETRIEVE_SUBMISSIONS: FORMCARRY_RETRIEVE_SUBMISSIONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FORMCARRY".
 */
export type FORMCARRY_TOOL_OUTPUTS = {
  RETRIEVE_SUBMISSIONS: FORMCARRY_RETRIEVE_SUBMISSIONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FORMCARRY toolkit.
 */
export const FORMCARRY = {
  slug: "formcarry",
  tools: {
    /**
     * Tool to retrieve a list of submissions for a specific form identified by its id. supports pagination to navigate through large sets of submissions.
     */
    RETRIEVE_SUBMISSIONS: "FORMCARRY_RETRIEVE_SUBMISSIONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FORMCARRY".
 */
export type FORMCARRY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FORMCARRY".
 */
export type FORMCARRY_TRIGGER_EVENTS = {}
