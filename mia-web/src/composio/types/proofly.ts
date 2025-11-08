// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PROOFLY's PROOFLY_GET_ACTIVITY_LOGS tool input.
 */
type PROOFLY_GET_ACTIVITY_LOGS_INPUT = object;

/**
 * Type of PROOFLY's PROOFLY_GET_ACTIVITY_LOGS tool output.
 */
type PROOFLY_GET_ACTIVITY_LOGS_OUTPUT = {
  /**
   * Data
   * @description List of activity log entries.
   */
  data?: {
      /**
       * Date
       * @description Timestamp of the activity in 'YYYY-MM-DD HH:MM:SS' format.
       */
      date: string;
      /**
       * Ip
       * @description IP address from which the activity originated.
       */
      ip: string;
      /**
       * Type
       * @description Type of activity (e.g., 'login.success', 'register.success').
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Ok
   * @description Indicates the success status of the request.
   */
  ok?: boolean;
  /**
   * Status
   * @description HTTP status code of the response.
   */
  status?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PROOFLY's PROOFLY_GET_CAMPAIGNS tool input.
 */
type PROOFLY_GET_CAMPAIGNS_INPUT = object;

/**
 * Type of PROOFLY's PROOFLY_GET_CAMPAIGNS tool output.
 */
type PROOFLY_GET_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaigns
       * @description List of campaigns retrieved from the account
       */
      campaigns: {
          /**
           * Created At
           * @description Creation timestamp in ISO8601 format
           */
          created_at: string;
          /**
           * Id
           * @description Unique ID of the campaign
           */
          id: number;
          /**
           * Name
           * @description Name of the campaign
           */
          name: string;
          /**
           * Status
           * @description Current status of the campaign
           */
          status: string;
          /**
           * Updated At
           * @description Last update timestamp in ISO8601 format
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
 * Type of PROOFLY's PROOFLY_GET_USER tool input.
 */
type PROOFLY_GET_USER_INPUT = object;

/**
 * Type of PROOFLY's PROOFLY_GET_USER tool output.
 */
type PROOFLY_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Account creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Email
       * @description User's email address
       */
      email: string;
      /**
       * Id
       * @description User's unique identifier
       */
      id: string;
      /**
       * Name
       * @description User's full name
       */
      name: string;
      /**
       * Updated At
       * @description Last profile update timestamp in ISO 8601 format
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
 * Type map of all available tool input types for toolkit "PROOFLY".
 */
export type PROOFLY_TOOL_INPUTS = {
  GET_ACTIVITY_LOGS: PROOFLY_GET_ACTIVITY_LOGS_INPUT
  GET_CAMPAIGNS: PROOFLY_GET_CAMPAIGNS_INPUT
  GET_USER: PROOFLY_GET_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PROOFLY".
 */
export type PROOFLY_TOOL_OUTPUTS = {
  GET_ACTIVITY_LOGS: PROOFLY_GET_ACTIVITY_LOGS_OUTPUT
  GET_CAMPAIGNS: PROOFLY_GET_CAMPAIGNS_OUTPUT
  GET_USER: PROOFLY_GET_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PROOFLY toolkit.
 */
export const PROOFLY = {
  slug: "proofly",
  tools: {
    /**
     * Tool to retrieve activity logs of the user. use when needing recent actions; call after confirming authentication.
     */
    GET_ACTIVITY_LOGS: "PROOFLY_GET_ACTIVITY_LOGS",
    /**
     * Tool to retrieve all proofly campaigns. use after authenticating to list your campaigns.
     */
    GET_CAMPAIGNS: "PROOFLY_GET_CAMPAIGNS",
    /**
     * Tool to retrieve general information of the authenticated user. use after authentication to fetch user profile details.
     */
    GET_USER: "PROOFLY_GET_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PROOFLY".
 */
export type PROOFLY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PROOFLY".
 */
export type PROOFLY_TRIGGER_EVENTS = {}
