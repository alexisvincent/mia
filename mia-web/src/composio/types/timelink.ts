// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TIMELINK's TIMELINK_DELETE_PERSON tool input.
 */
type TIMELINK_DELETE_PERSON_INPUT = {
  /**
   * Id
   * @description Unique identifier of the person to delete
   */
  id?: number;
};

/**
 * Type of TIMELINK's TIMELINK_DELETE_PERSON tool output.
 */
type TIMELINK_DELETE_PERSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success or error message
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates if the person was successfully deleted
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
 * Type map of all available tool input types for toolkit "TIMELINK".
 */
export type TIMELINK_TOOL_INPUTS = {
  DELETE_PERSON: TIMELINK_DELETE_PERSON_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TIMELINK".
 */
export type TIMELINK_TOOL_OUTPUTS = {
  DELETE_PERSON: TIMELINK_DELETE_PERSON_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TIMELINK toolkit.
 */
export const TIMELINK = {
  slug: "timelink",
  tools: {
    /**
     * Tool to delete a person record. use when you need to remove a person by their unique identifier after confirming this detail.
     */
    DELETE_PERSON: "TIMELINK_DELETE_PERSON",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TIMELINK".
 */
export type TIMELINK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TIMELINK".
 */
export type TIMELINK_TRIGGER_EVENTS = {}
