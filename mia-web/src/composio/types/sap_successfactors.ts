// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SAP_SUCCESSFACTORS's SAP_SUCCESSFACTORS_GET_CURRENT_USER tool input.
 */
type SAP_SUCCESSFACTORS_GET_CURRENT_USER_INPUT = {
  /**
   * Select Fields
   * @description Comma-separated list of fields to retrieve via OData $select parameter
   * @default userId,username,defaultFullName,email
   */
  select_fields: string | null;
};

/**
 * Type of SAP_SUCCESSFACTORS's SAP_SUCCESSFACTORS_GET_CURRENT_USER tool output.
 */
type SAP_SUCCESSFACTORS_GET_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Default Full Name
       * @description The user's full name
       * @default null
       */
      defaultFullName: string | null;
      /**
       * Email
       * @description The user's email address
       * @default null
       */
      email: string | null;
      /**
       * User Id
       * @description The user's unique identifier
       * @default null
       */
      userId: string | null;
      /**
       * Username
       * @description The user's username
       * @default null
       */
      username: string | null;
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
 * Type map of all available tool input types for toolkit "SAP_SUCCESSFACTORS".
 */
export type SAP_SUCCESSFACTORS_TOOL_INPUTS = {
  GET_CURRENT_USER: SAP_SUCCESSFACTORS_GET_CURRENT_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SAP_SUCCESSFACTORS".
 */
export type SAP_SUCCESSFACTORS_TOOL_OUTPUTS = {
  GET_CURRENT_USER: SAP_SUCCESSFACTORS_GET_CURRENT_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SAP_SUCCESSFACTORS toolkit.
 */
export const SAP_SUCCESSFACTORS = {
  slug: "sap_successfactors",
  tools: {
    /**
     * Retrieves the currently authenticated user's information from SAP SuccessFactors.
     */
    GET_CURRENT_USER: "SAP_SUCCESSFACTORS_GET_CURRENT_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SAP_SUCCESSFACTORS".
 */
export type SAP_SUCCESSFACTORS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SAP_SUCCESSFACTORS".
 */
export type SAP_SUCCESSFACTORS_TRIGGER_EVENTS = {}
