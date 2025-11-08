// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of APILIO's APILIO_GET_BOOLEAN_VARIABLES tool input.
 */
type APILIO_GET_BOOLEAN_VARIABLES_INPUT = object;

/**
 * Type of APILIO's APILIO_GET_BOOLEAN_VARIABLES tool output.
 */
type APILIO_GET_BOOLEAN_VARIABLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Name
       * @description Name of the boolean variable
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp of last update
       */
      updated_at: string;
      /**
       * Uuid
       * @description UUID of the boolean variable
       */
      uuid: string;
      /**
       * Value
       * @description Boolean value of the variable
       */
      value: boolean;
  }[];
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
 * Type of APILIO's APILIO_GET_CONDITIONS tool input.
 */
type APILIO_GET_CONDITIONS_INPUT = object;

/**
 * Type of APILIO's APILIO_GET_CONDITIONS tool output.
 */
type APILIO_GET_CONDITIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Name
       * @description Name of the condition
       */
      name: string;
      /**
       * Updated At
       * Format: date-time
       * @description ISO-8601 timestamp when this condition was last updated
       */
      updated_at: string;
      /**
       * Uuid
       * @description UUID of the condition
       */
      uuid: string;
  }[];
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
 * Type of APILIO's APILIO_GET_LOGICBLOCKS tool input.
 */
type APILIO_GET_LOGICBLOCKS_INPUT = object;

/**
 * Type of APILIO's APILIO_GET_LOGICBLOCKS tool output.
 */
type APILIO_GET_LOGICBLOCKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the logicblock is active
       */
      active: boolean;
      /**
       * Last Evaluation Result
       * @description Result of the last evaluation; null if never evaluated
       * @default null
       */
      last_evaluation_result: boolean | null;
      /**
       * Name
       * @description User-readable name of the logicblock
       */
      name: string;
      /**
       * Updated At
       * Format: date-time
       * @description ISO-8601 timestamp when this logicblock was last updated
       */
      updated_at: string;
      /**
       * Uuid
       * @description UUID of the logicblock
       */
      uuid: string;
  }[];
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
 * Type of APILIO's APILIO_GET_NUMERIC_VARIABLES tool input.
 */
type APILIO_GET_NUMERIC_VARIABLES_INPUT = object;

/**
 * Type of APILIO's APILIO_GET_NUMERIC_VARIABLES tool output.
 */
type APILIO_GET_NUMERIC_VARIABLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Name
       * @description Name of the numeric variable
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp of last update
       */
      updated_at: string;
      /**
       * Uuid
       * @description UUID of the numeric variable
       */
      uuid: string;
      /**
       * Value
       * @description String representation of numeric value, e.g. '1.0'
       */
      value: string;
  }[];
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
 * Type of APILIO's APILIO_GET_STRING_VARIABLES tool input.
 */
type APILIO_GET_STRING_VARIABLES_INPUT = object;

/**
 * Type of APILIO's APILIO_GET_STRING_VARIABLES tool output.
 */
type APILIO_GET_STRING_VARIABLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Name
       * @description Name of the string variable
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp of last update
       */
      updated_at: string;
      /**
       * Uuid
       * @description UUID of the string variable
       */
      uuid: string;
      /**
       * Value
       * @description String value of the variable
       */
      value: string;
  }[];
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
 * Type map of all available tool input types for toolkit "APILIO".
 */
export type APILIO_TOOL_INPUTS = {
  GET_BOOLEAN_VARIABLES: APILIO_GET_BOOLEAN_VARIABLES_INPUT
  GET_CONDITIONS: APILIO_GET_CONDITIONS_INPUT
  GET_LOGICBLOCKS: APILIO_GET_LOGICBLOCKS_INPUT
  GET_NUMERIC_VARIABLES: APILIO_GET_NUMERIC_VARIABLES_INPUT
  GET_STRING_VARIABLES: APILIO_GET_STRING_VARIABLES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "APILIO".
 */
export type APILIO_TOOL_OUTPUTS = {
  GET_BOOLEAN_VARIABLES: APILIO_GET_BOOLEAN_VARIABLES_OUTPUT
  GET_CONDITIONS: APILIO_GET_CONDITIONS_OUTPUT
  GET_LOGICBLOCKS: APILIO_GET_LOGICBLOCKS_OUTPUT
  GET_NUMERIC_VARIABLES: APILIO_GET_NUMERIC_VARIABLES_OUTPUT
  GET_STRING_VARIABLES: APILIO_GET_STRING_VARIABLES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's APILIO toolkit.
 */
export const APILIO = {
  slug: "apilio",
  tools: {
    /**
     * Tool to fetch all boolean variables. use when you need the full list of boolean variables and their current states.
     */
    GET_BOOLEAN_VARIABLES: "APILIO_GET_BOOLEAN_VARIABLES",
    /**
     * Tool to fetch all evaluatable conditions. use when you need to list available conditions.
     */
    GET_CONDITIONS: "APILIO_GET_CONDITIONS",
    /**
     * Tool to fetch all logicblocks of a user. use after authenticating with apilio api when you need to list available logicblocks.
     */
    GET_LOGICBLOCKS: "APILIO_GET_LOGICBLOCKS",
    /**
     * Tool to fetch all numeric variables. use after authenticating the apilio api.
     */
    GET_NUMERIC_VARIABLES: "APILIO_GET_NUMERIC_VARIABLES",
    /**
     * Tool to fetch all string variables. use after authenticating the apilio api.
     */
    GET_STRING_VARIABLES: "APILIO_GET_STRING_VARIABLES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "APILIO".
 */
export type APILIO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "APILIO".
 */
export type APILIO_TRIGGER_EVENTS = {}
