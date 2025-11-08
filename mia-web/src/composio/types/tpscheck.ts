// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TPSCHECK's TPSCHECK_CHECK_PHONE_NUMBER tool input.
 */
type TPSCHECK_CHECK_PHONE_NUMBER_INPUT = {
  /**
   * Check Ctps
   * @description Set to true to check numbers against the CTPS list.
   * @default true
   */
  check_ctps: boolean;
  /**
   * Check Tps
   * @description Set to true to check numbers against the TPS list.
   * @default true
   */
  check_tps: boolean;
  /**
   * No Logging
   * @description Set to true to prevent full numbers from being stored in logs for privacy. Only the first 6 digits will be saved.
   * @default false
   */
  no_logging: boolean;
  /**
   * Phone Numbers
   * @description A list of UK phone numbers to check. Maximum 10,000 numbers per request.
   */
  phone_numbers?: string[];
  /**
   * Return Date Added
   * @description Set to true to include the date the number was added to a list (if found).
   * @default true
   */
  return_date_added: boolean;
  /**
   * Return Prettier Numbers
   * @description Set to true to include a formatted version of the phone number in the response.
   * @default true
   */
  return_prettier_numbers: boolean;
};

/**
 * Type of TPSCHECK's TPSCHECK_CHECK_PHONE_NUMBER tool output.
 */
type TPSCHECK_CHECK_PHONE_NUMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message from the API, often present in case of errors or warnings.
       * @default null
       */
      message: string | null;
      /**
       * Results
       * @description List of results for each phone number checked.
       * @default null
       */
      results: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Tokens Remaining
       * @description Number of tokens remaining for the account.
       * @default null
       */
      tokens_remaining: number | null;
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
 * Type map of all available tool input types for toolkit "TPSCHECK".
 */
export type TPSCHECK_TOOL_INPUTS = {
  CHECK_PHONE_NUMBER: TPSCHECK_CHECK_PHONE_NUMBER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TPSCHECK".
 */
export type TPSCHECK_TOOL_OUTPUTS = {
  CHECK_PHONE_NUMBER: TPSCHECK_CHECK_PHONE_NUMBER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TPSCHECK toolkit.
 */
export const TPSCHECK = {
  slug: "tpscheck",
  tools: {
    /**
     * Checks if one or more uk phone numbers are registered on the telephone preference service (tps) and/or corporate telephone preference service (ctps) lists using the tpsapi.com api.
     */
    CHECK_PHONE_NUMBER: "TPSCHECK_CHECK_PHONE_NUMBER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TPSCHECK".
 */
export type TPSCHECK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TPSCHECK".
 */
export type TPSCHECK_TRIGGER_EVENTS = {}
