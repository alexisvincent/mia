// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BUGBUG's BUGBUG_GET_TEST_RUN_DETAILS tool input.
 */
type BUGBUG_GET_TEST_RUN_DETAILS_INPUT = {
  /**
   * Ordering
   * @description Sort order for results
   * @default -started
   */
  ordering: string | null;
  /**
   * Page
   * @description Page number for pagination
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page
   * @default 10
   */
  page_size: number | null;
  /**
   * Started After
   * @description ISO 8601 formatted timestamp to filter runs that started after this time
   * @default null
   */
  started_after: string | null;
};

/**
 * Type of BUGBUG's BUGBUG_GET_TEST_RUN_DETAILS tool output.
 */
type BUGBUG_GET_TEST_RUN_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of test runs
       */
      count: number;
      /**
       * Next
       * @description URL for the next page
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of test run results
       */
      results: {
          /**
           * Ended
           * @description End timestamp of the test run
           * @default null
           */
          ended: string | null;
          /**
           * Id
           * @description Test run ID
           */
          id: string;
          /**
           * Run Mode
           * @description Run mode of the test
           */
          runMode: string;
          /**
           * Started
           * @description Start timestamp of the test run
           */
          started: string;
          /**
           * Status
           * @description Current status of the test run
           */
          status: string;
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
 * Type of BUGBUG's BUGBUG_LIST_SUITES tool input.
 */
type BUGBUG_LIST_SUITES_INPUT = {
  /**
   * Page
   * @description Page number for pagination
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page
   * @default 10
   */
  page_size: number | null;
};

/**
 * Type of BUGBUG's BUGBUG_LIST_SUITES tool output.
 */
type BUGBUG_LIST_SUITES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of suites available
       */
      count: number;
      /**
       * Next
       * @description URL to the next page
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of suite objects containing suite details
       */
      results: {
          /**
           * Created At
           * @description Timestamp of when the suite was created
           * @default null
           */
          created_at: string | null;
          /**
           * Description
           * @description Description of what the suite tests
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the suite
           */
          id: string;
          /**
           * Name
           * @description Name of the test suite
           */
          name: string;
          /**
           * Tests Count
           * @description Number of tests in the suite
           */
          testsCount: number;
          /**
           * Updated At
           * @description Timestamp of when the suite was last updated
           * @default null
           */
          updated_at: string | null;
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
 * Type of BUGBUG's BUGBUG_LIST_TESTS tool input.
 */
type BUGBUG_LIST_TESTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination
   * @default 1
   */
  page: number | null;
};

/**
 * Type of BUGBUG's BUGBUG_LIST_TESTS tool output.
 */
type BUGBUG_LIST_TESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of tests
       */
      count: number;
      /**
       * Next
       * @description URL for the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page of results
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of test items
       */
      results: {
          /**
           * Description
           * @description Description of the test
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the test
           */
          id: string;
          /**
           * Is Active
           * @description Whether the test is active
           */
          isActive: boolean;
          /**
           * Is Recording
           * @description Whether the test is recording
           */
          isRecording: boolean;
          /**
           * Name
           * @description Name of the test
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
 * Type of BUGBUG's BUGBUG_RUN_TEST tool input.
 */
type BUGBUG_RUN_TEST_INPUT = {
  /**
   * ProfileConfig
   * @description Model for test run profile configuration.
   * @default null
   */
  profile: {
      /**
       * Browser
       * @description Browser to run the test in (e.g., 'chrome', 'firefox')
       * @default null
       */
      browser: string | null;
      /**
       * Device
       * @description Device to emulate (e.g., 'desktop', 'mobile')
       * @default null
       */
      device: string | null;
      /**
       * ViewportConfig
       * @description Model for viewport configuration.
       * @default null
       */
      viewport: {
          /**
           * Height
           * @description Viewport height in pixels
           */
          height: number;
          /**
           * Width
           * @description Viewport width in pixels
           */
          width: number;
      } | null;
  } | null;
  /**
   * Test Id
   * @description The ID of the test to run
   */
  test_id?: string;
  /**
   * Variables
   * @description List of variables to override for this test run
   * @default null
   */
  variables: {
      /**
       * Name
       * @description Variable name to override
       */
      name: string;
      /**
       * Value
       * @description New value for the variable
       */
      value: string;
  }[] | null;
};

/**
 * Type of BUGBUG's BUGBUG_RUN_TEST tool output.
 */
type BUGBUG_RUN_TEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Timestamp when the test run was created
       */
      created: string;
      /**
       * Finished
       * @description Timestamp when the test run finished
       */
      finished: string;
      /**
       * Id
       * @description Test run identifier
       */
      id: string;
      /**
       * Result
       * @description Final result of the test run
       */
      result: string;
      /**
       * Started
       * @description Timestamp when the test run started
       */
      started: string;
      /**
       * Status
       * @description Current status of the test run
       */
      status: string;
      /**
       * Steps
       * @description List of test steps and their status
       */
      steps: {
          /**
           * Error
           * @description Error message if step failed
           * @default null
           */
          error: string | null;
          /**
           * Id
           * @description Step identifier
           */
          id: string;
          /**
           * Name
           * @description Step name
           */
          name: string;
          /**
           * Status
           * @description Step execution status
           */
          status: string;
      }[];
      /**
       * Test
       * @description Information about the executed test
       */
      test: {
          /**
           * Id
           * @description Test identifier
           */
          id: string;
          /**
           * Name
           * @description Test name
           */
          name: string;
      };
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
 * Type map of all available tool input types for toolkit "BUGBUG".
 */
export type BUGBUG_TOOL_INPUTS = {
  GET_TEST_RUN_DETAILS: BUGBUG_GET_TEST_RUN_DETAILS_INPUT
  LIST_SUITES: BUGBUG_LIST_SUITES_INPUT
  LIST_TESTS: BUGBUG_LIST_TESTS_INPUT
  RUN_TEST: BUGBUG_RUN_TEST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BUGBUG".
 */
export type BUGBUG_TOOL_OUTPUTS = {
  GET_TEST_RUN_DETAILS: BUGBUG_GET_TEST_RUN_DETAILS_OUTPUT
  LIST_SUITES: BUGBUG_LIST_SUITES_OUTPUT
  LIST_TESTS: BUGBUG_LIST_TESTS_OUTPUT
  RUN_TEST: BUGBUG_RUN_TEST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BUGBUG toolkit.
 */
export const BUGBUG = {
  slug: "bugbug",
  tools: {
    /**
     * Get detailed information about test runs from bugbug. this action retrieves test run details with optional filtering parameters.
     */
    GET_TEST_RUN_DETAILS: "BUGBUG_GET_TEST_RUN_DETAILS",
    /**
     * List all available test suites in the bugbug platform. this tool makes a get request to the /suites/ endpoint and returns a list of available test suites with pagination support.
     */
    LIST_SUITES: "BUGBUG_LIST_SUITES",
    /**
     * Retrieves a list of all available tests in the bugbug account. this action provides access to all tests in the account with pagination support. it returns basic information about each test including its id, name, description, and timestamps.
     */
    LIST_TESTS: "BUGBUG_LIST_TESTS",
    /**
     * Execute a test in bugbug and return the test run details. this action allows you to run a specific test with optional configuration for browser, device, viewport, and variable overrides. it returns detailed information about the test run including step-by-step execution status.
     */
    RUN_TEST: "BUGBUG_RUN_TEST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BUGBUG".
 */
export type BUGBUG_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BUGBUG".
 */
export type BUGBUG_TRIGGER_EVENTS = {}
