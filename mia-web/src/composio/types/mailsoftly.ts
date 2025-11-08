// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MAILSOFTLY's MAILSOFTLY_AUTHENTICATE_FIRM tool input.
 */
type MAILSOFTLY_AUTHENTICATE_FIRM_INPUT = object;

/**
 * Type of MAILSOFTLY's MAILSOFTLY_AUTHENTICATE_FIRM tool output.
 */
type MAILSOFTLY_AUTHENTICATE_FIRM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Admin Name
       * @description Name of the admin user associated with the firm.
       */
      admin_name: string;
      /**
       * Firm Id
       * @description Unique identifier of the firm.
       */
      firm_id: number;
      /**
       * Firm Name
       * @description Name of the firm.
       */
      firm_name: string;
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
 * Type map of all available tool input types for toolkit "MAILSOFTLY".
 */
export type MAILSOFTLY_TOOL_INPUTS = {
  AUTHENTICATE_FIRM: MAILSOFTLY_AUTHENTICATE_FIRM_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MAILSOFTLY".
 */
export type MAILSOFTLY_TOOL_OUTPUTS = {
  AUTHENTICATE_FIRM: MAILSOFTLY_AUTHENTICATE_FIRM_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MAILSOFTLY toolkit.
 */
export const MAILSOFTLY = {
  slug: "mailsoftly",
  tools: {
    /**
     * Tool to validate the api key and retrieve firm details. use when confirming credentials before making other mailsoftly api calls.
     */
    AUTHENTICATE_FIRM: "MAILSOFTLY_AUTHENTICATE_FIRM",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MAILSOFTLY".
 */
export type MAILSOFTLY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MAILSOFTLY".
 */
export type MAILSOFTLY_TRIGGER_EVENTS = {}
