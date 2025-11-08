// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TEST_APP's TEST_APP_ACTION_ONE tool input.
 */
type TEST_APP_ACTION_ONE_INPUT = {
  /**
   * Aegument 1
   * @description argument 1
   */
  aegument_1?: string;
  /**
   * Aegument 2
   * @description argument 2
   */
  aegument_2?: string;
  /**
   * Aegument 3
   * @description argument 3
   */
  aegument_3?: string;
};

/**
 * Type of TEST_APP's TEST_APP_ACTION_ONE tool output.
 */
type TEST_APP_ACTION_ONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of TEST_APP's TEST_APP_ACTION_TWO tool input.
 */
type TEST_APP_ACTION_TWO_INPUT = object;

/**
 * Type of TEST_APP's TEST_APP_ACTION_TWO tool output.
 */
type TEST_APP_ACTION_TWO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type map of all available tool input types for toolkit "TEST_APP".
 */
export type TEST_APP_TOOL_INPUTS = {
  ACTION_ONE: TEST_APP_ACTION_ONE_INPUT
  ACTION_TWO: TEST_APP_ACTION_TWO_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TEST_APP".
 */
export type TEST_APP_TOOL_OUTPUTS = {
  ACTION_ONE: TEST_APP_ACTION_ONE_OUTPUT
  ACTION_TWO: TEST_APP_ACTION_TWO_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TEST_APP toolkit.
 */
export const TEST_APP = {
  slug: "test_app",
  tools: {
    /**
     * This action one of testapp.
     */
    ACTION_ONE: "TEST_APP_ACTION_ONE",
    /**
     * This action two of testapp.
     */
    ACTION_TWO: "TEST_APP_ACTION_TWO",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TEST_APP".
 */
export type TEST_APP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TEST_APP".
 */
export type TEST_APP_TRIGGER_EVENTS = {}
