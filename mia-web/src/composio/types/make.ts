// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MAKE's MAKE_GET_OPERATIONS tool input.
 */
type MAKE_GET_OPERATIONS_INPUT = object;

/**
 * Type of MAKE's MAKE_GET_OPERATIONS tool output.
 */
type MAKE_GET_OPERATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Operations
       * @description List of operations available to the authenticated user
       */
      operations: {
          /**
           * Description
           * @description Description of what the operation does
           */
          description: string;
          /**
           * Id
           * @description Unique identifier of the operation
           */
          id: string;
          /**
           * Name
           * @description Name of the operation
           */
          name: string;
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
 * Type of MAKE's MAKE_LIST_ENUMS_LANGUAGES tool input.
 */
type MAKE_LIST_ENUMS_LANGUAGES_INPUT = {
  /**
   * Localized
   * @description When true, returns only languages with localized names (e.g., Deutsch, Čeština). Defaults to false.
   * @default null
   */
  localized: boolean | null;
};

/**
 * Type of MAKE's MAKE_LIST_ENUMS_LANGUAGES tool output.
 */
type MAKE_LIST_ENUMS_LANGUAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Languages
       * @description Array of language objects returned by the API.
       */
      languages: {
          /**
           * Code
           * @description Language code (e.g., 'en').
           */
          code: string;
          /**
           * Name
           * @description Language name (e.g., 'English').
           */
          name: string;
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
 * Type of MAKE's MAKE_LIST_ENUMS_TIMEZONES tool input.
 */
type MAKE_LIST_ENUMS_TIMEZONES_INPUT = object;

/**
 * Type of MAKE's MAKE_LIST_ENUMS_TIMEZONES tool output.
 */
type MAKE_LIST_ENUMS_TIMEZONES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Timezones
       * @description Array of timezone objects returned by the API.
       */
      timezones: {
          /**
           * Id
           * @description Unique identifier for the timezone.
           */
          id: number;
          /**
           * Name
           * @description Name of the timezone, e.g., 'Europe/Berlin'.
           */
          name: string;
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
 * Type map of all available tool input types for toolkit "MAKE".
 */
export type MAKE_TOOL_INPUTS = {
  GET_OPERATIONS: MAKE_GET_OPERATIONS_INPUT
  LIST_ENUMS_LANGUAGES: MAKE_LIST_ENUMS_LANGUAGES_INPUT
  LIST_ENUMS_TIMEZONES: MAKE_LIST_ENUMS_TIMEZONES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MAKE".
 */
export type MAKE_TOOL_OUTPUTS = {
  GET_OPERATIONS: MAKE_GET_OPERATIONS_OUTPUT
  LIST_ENUMS_LANGUAGES: MAKE_LIST_ENUMS_LANGUAGES_OUTPUT
  LIST_ENUMS_TIMEZONES: MAKE_LIST_ENUMS_TIMEZONES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MAKE toolkit.
 */
export const MAKE = {
  slug: "make",
  tools: {
    /**
     * Tool to retrieve all operations. use when you need to discover available operations after authentication.
     */
    GET_OPERATIONS: "MAKE_GET_OPERATIONS",
    /**
     * Tool to retrieve a list of language codes and names. use when you need to populate language selectors after authentication.
     */
    LIST_ENUMS_LANGUAGES: "MAKE_LIST_ENUMS_LANGUAGES",
    /**
     * Tool to retrieve a list of timezone codes and names. use when populating timezone selectors after authentication.
     */
    LIST_ENUMS_TIMEZONES: "MAKE_LIST_ENUMS_TIMEZONES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MAKE".
 */
export type MAKE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MAKE".
 */
export type MAKE_TRIGGER_EVENTS = {}
