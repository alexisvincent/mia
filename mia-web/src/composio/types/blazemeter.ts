// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BLAZEMETER's BLAZEMETER_CREATE_API_MONITORING_SCHEDULE tool input.
 */
type BLAZEMETER_CREATE_API_MONITORING_SCHEDULE_INPUT = {
  /**
   * Cron
   * @description Cron expression defining when the test should run.
   */
  cron?: string;
  /**
   * Test Collection Id
   * @description ID of the multi-test collection to schedule. Required when scheduling a multi-test.
   * @default null
   */
  testCollectionId: number | null;
  /**
   * Test Id
   * @description ID of the single API monitoring test to schedule. Required when scheduling a single test.
   * @default null
   */
  testId: number | null;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_CREATE_API_MONITORING_SCHEDULE tool output.
 */
type BLAZEMETER_CREATE_API_MONITORING_SCHEDULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Timestamp when the schedule was created (Unix epoch)
       */
      created: number;
      /**
       * Created By Id
       * @description User ID of the creator of the schedule
       */
      createdById: number;
      /**
       * Cron
       * @description Cron expression defining when the test will run
       */
      cron: string;
      /**
       * Enabled
       * @description Indicates if the schedule is active
       */
      enabled: boolean;
      /**
       * Id
       * @description Unique identifier of the created schedule
       */
      id: string;
      /**
       * Last Updated By Id
       * @description User ID of the last updater of the schedule
       * @default null
       */
      lastUpdatedById: number | null;
      /**
       * Next Executions
       * @description List of upcoming execution timestamps
       * @default null
       */
      nextExecutions: number[] | null;
      /**
       * Next Run
       * @description Timestamp of the next scheduled run (Unix epoch)
       */
      nextRun: number;
      /**
       * Test Collection Id
       * @description ID of the multi-test collection scheduled, if applicable
       * @default null
       */
      testCollectionId: number | null;
      /**
       * Test Id
       * @description ID of the single test scheduled, if applicable
       * @default null
       */
      testId: number | null;
      /**
       * Type
       * @description Type of schedule, e.g., 'testRun'
       */
      type: string;
      /**
       * Updated
       * @description Timestamp when the schedule was last updated (Unix epoch)
       */
      updated: number;
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
 * Type of BLAZEMETER's BLAZEMETER_CREATE_MULTI_TEST tool input.
 */
type BLAZEMETER_CREATE_MULTI_TEST_INPUT = {
  /**
   * Collection Type
   * @description Type of multi-test. Must be 'multiV4'.
   * @default multiV4
   * @constant
   */
  collectionType: "multiV4";
  /**
   * Name
   * @description Name of the multi-test to create.
   */
  name?: string;
  /**
   * Project Id
   * @description ID of the project to which this multi-test belongs.
   */
  projectId?: number;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_CREATE_MULTI_TEST tool output.
 */
type BLAZEMETER_CREATE_MULTI_TEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Version
       * @description API version number.
       */
      api_version: number;
      /**
       * Error
       * @description Error information, if any.
       * @default null
       */
      error: {
          [key: string]: unknown;
      } | null;
      /**
       * Result
       * @description Details of the created multi-test.
       */
      result: {
          /**
           * Collection Type
           * @description Type of the multi-test.
           */
          collectionType: string;
          /**
           * Created
           * @description Timestamp when the multi-test was created.
           */
          created: number;
          /**
           * Creator Client Id
           * @description Identifier of the client that created the multi-test.
           */
          creatorClientId: string;
          /**
           * Data Files
           * @description List of data files associated with the multi-test.
           */
          dataFiles: {
              [key: string]: unknown;
          }[];
          /**
           * Files To Split
           * @description List of files to be split.
           */
          filesToSplit: {
              [key: string]: unknown;
          }[];
          /**
           * Id
           * @description Unique identifier of the multi-test.
           */
          id: number;
          /**
           * Name
           * @description Name of the multi-test.
           */
          name: string;
          /**
           * Project Id
           * @description ID of the project this multi-test belongs to.
           */
          projectId: number;
          /**
           * Should Send Report Email
           * @description Indicates if a report email should be sent after the test runs.
           */
          shouldSendReportEmail: boolean;
          /**
           * Updated
           * @description Timestamp when the multi-test was last updated.
           */
          updated: number;
          /**
           * User Id
           * @description ID of the user who created the multi-test.
           */
          userId: number;
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
 * Type of BLAZEMETER's BLAZEMETER_CREATE_PROJECT tool input.
 */
type BLAZEMETER_CREATE_PROJECT_INPUT = {
  /**
   * Description
   * @description Optional description of the project
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the project
   */
  name?: string;
  /**
   * Workspace Id
   * @description ID of the workspace to create the project in
   */
  workspaceId?: string;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_CREATE_PROJECT tool output.
 */
type BLAZEMETER_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp when the project was created
       */
      created: string;
      /**
       * Description
       * @description Description of the created project
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the created project
       */
      id: string;
      /**
       * Name
       * @description Name of the created project
       */
      name: string;
      /**
       * Updated
       * @description ISO 8601 timestamp when the project was last updated
       */
      updated: string;
      /**
       * Workspace Id
       * @description Workspace ID of the project
       */
      workspaceId: string;
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
 * Type of BLAZEMETER's BLAZEMETER_CREATE_TEST tool input.
 */
type BLAZEMETER_CREATE_TEST_INPUT = {
  /**
   * Configuration
   * @description Advanced BlazeMeter configuration settings for the test.
   */
  configuration?: {
      /**
       * Filename
       * @description The name of the file to be used in the test, e.g., 'DemoTest.jmx'. You must upload the file separately after creating the test.
       */
      filename: string;
      /**
       * Script Type
       * @description The scripting engine type for the test.
       * @enum {string}
       */
      scriptType: "apiritif" | "gatling" | "grinder" | "jmeter" | "locust" | "nose" | "pbench" | "pytest" | "robot" | "selenium" | "siege" | "taurus";
      /**
       * Test Mode
       * @description The test mode to use: 'script' for uploading your own script, 'http' for URL tests.
       * @enum {string}
       */
      testMode: "script" | "http";
      /**
       * Type
       * @description The test type, must be 'taurus'.
       * @constant
       */
      type: "taurus";
  };
  /**
   * Name
   * @description The name of the new test.
   */
  name?: string;
  /**
   * Project Id
   * @description ID of the BlazeMeter project under which to create this test.
   */
  projectId?: number;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_CREATE_TEST tool output.
 */
type BLAZEMETER_CREATE_TEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Version
       * @description API version of the response.
       */
      api_version: number;
      /**
       * Error
       * @description Error details if the request failed, otherwise null.
       * @default null
       */
      error: unknown;
      /**
       * Result
       * @description Details of the created test.
       */
      result: {
          /**
           * Configuration
           * @description Configuration details of the created test.
           */
          configuration: {
              /**
               * Execution Type
               * @description Execution environment type, e.g., 'taurusCloud'.
               */
              executionType: string;
              /**
               * Filename
               * @description Filename used in the test.
               */
              filename: string;
              /**
               * Script Type
               * @description Script type used.
               */
              scriptType: string;
              /**
               * Test Mode
               * @description Test mode used.
               */
              testMode: string;
              /**
               * Type
               * @description Test type returned by the server.
               */
              type: string;
          };
          /**
           * Created
           * @description Unix timestamp when the test was created.
           */
          created: number;
          /**
           * Creator Client Id
           * @description Client ID of the creator, e.g., 'api'.
           */
          creatorClientId: string;
          /**
           * Id
           * @description Unique identifier of the created test.
           */
          id: number;
          /**
           * Is New Test
           * @description True if this is the first version of the test.
           */
          isNewTest: boolean;
          /**
           * Last Updated By Id
           * @description ID of the user who last updated the test.
           */
          lastUpdatedById: number;
          /**
           * Name
           * @description Name of the test.
           */
          name: string;
          /**
           * Override Executions
           * @description List of override execution objects, if any.
           */
          overrideExecutions?: unknown[];
          /**
           * Project Id
           * @description ID of the project the test belongs to.
           */
          projectId: number;
          /**
           * Should Send Report Email
           * @description Whether the system will send a report email upon test completion.
           */
          shouldSendReportEmail: boolean;
          /**
           * Updated
           * @description Unix timestamp when the test was last updated.
           */
          updated: number;
          /**
           * User Id
           * @description ID of the user who created the test.
           */
          userId: number;
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
 * Type of BLAZEMETER's BLAZEMETER_DELETE_API_MONITORING_SCHEDULE tool input.
 */
type BLAZEMETER_DELETE_API_MONITORING_SCHEDULE_INPUT = {
  /**
   * Schedule Id
   * @description Unique identifier of the test schedule to delete.
   */
  schedule_id?: string;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_DELETE_API_MONITORING_SCHEDULE tool output.
 */
type BLAZEMETER_DELETE_API_MONITORING_SCHEDULE_OUTPUT = {
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
 * Type of BLAZEMETER's BLAZEMETER_GET_ACCOUNTS tool input.
 */
type BLAZEMETER_GET_ACCOUNTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of accounts to return
   * @default null
   */
  limit: number | null;
  /**
   * Sort
   * @description Sort order for returned accounts, e.g. ['name', '-created']
   * @default null
   */
  sort: string[] | null;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_GET_ACCOUNTS tool output.
 */
type BLAZEMETER_GET_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounts
       * @description List of accounts associated with the authenticated user
       */
      accounts: {
          /**
           * Created
           * @description Timestamp when the account was created (milliseconds since epoch)
           */
          created: number;
          /**
           * Id
           * @description Unique identifier of the account
           */
          id: number;
          /**
           * Name
           * @description Name of the account
           */
          name: string;
          /**
           * Owner
           * @description Owner information for the account
           */
          owner: {
              /**
               * Email
               * @description Email address of the owner
               */
              email: string;
              /**
               * Id
               * @description Unique identifier of the owner
               */
              id: number;
          };
          /**
           * Updated
           * @description Timestamp when the account was last updated (milliseconds since epoch)
           */
          updated: number;
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
 * Type of BLAZEMETER's BLAZEMETER_GET_API_MONITORING_SCHEDULE tool input.
 */
type BLAZEMETER_GET_API_MONITORING_SCHEDULE_INPUT = {
  /**
   * Schedule Id
   * @description Unique identifier of the API monitoring schedule to retrieve
   */
  schedule_id?: string;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_GET_API_MONITORING_SCHEDULE tool output.
 */
type BLAZEMETER_GET_API_MONITORING_SCHEDULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Unix epoch timestamp when schedule was created
       */
      created: number;
      /**
       * Created By Id
       * @description User ID who created the schedule
       */
      createdById: number;
      /**
       * Cron
       * @description Cron expression defining when the schedule runs
       */
      cron: string;
      /**
       * Enabled
       * @description Indicates whether the schedule is active
       */
      enabled: boolean;
      /**
       * Id
       * @description Unique identifier of the schedule
       */
      id: string;
      /**
       * Last Updated By Id
       * @description User ID who last updated the schedule
       * @default null
       */
      lastUpdatedById: number | null;
      /**
       * Next Executions
       * @description List of upcoming execution timestamps
       * @default null
       */
      nextExecutions: number[] | null;
      /**
       * Next Run
       * @description Unix epoch timestamp of the next scheduled run
       */
      nextRun: number;
      /**
       * Test Collection Id
       * @description ID of the multi-test collection scheduled, if applicable
       * @default null
       */
      testCollectionId: number | null;
      /**
       * Test Id
       * @description ID of the single test scheduled, if applicable
       * @default null
       */
      testId: number | null;
      /**
       * Type
       * @description Type of schedule, e.g., 'testRun'
       */
      type: string;
      /**
       * Updated
       * @description Unix epoch timestamp when schedule was last updated
       */
      updated: number;
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
 * Type of BLAZEMETER's BLAZEMETER_GET_API_MONITORING_SCHEDULES tool input.
 */
type BLAZEMETER_GET_API_MONITORING_SCHEDULES_INPUT = {
  /**
   * Account Id
   * @description Account ID to filter schedules by
   * @default null
   */
  accountId: number | null;
  /**
   * Collection Id
   * @description Collection ID to filter schedules by
   * @default null
   */
  collectionId: number | null;
  /**
   * Enabled
   * @description Filter schedules by enabled state
   * @default null
   */
  enabled: boolean | null;
  /**
   * Limit
   * @description Maximum number of schedules to return
   * @default null
   */
  limit: number | null;
  /**
   * Project Id
   * @description Project ID to filter schedules by
   * @default null
   */
  projectId: number | null;
  /**
   * Skip
   * @description Number of schedules to skip for pagination
   * @default null
   */
  skip: number | null;
  /**
   * Test Id
   * @description Test ID to filter schedules by
   * @default null
   */
  testId: number | null;
  /**
   * Workspace Id
   * @description Workspace ID to filter schedules by
   * @default null
   */
  workspaceId: number | null;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_GET_API_MONITORING_SCHEDULES tool output.
 */
type BLAZEMETER_GET_API_MONITORING_SCHEDULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Version
       * @description API version used
       */
      api_version: number;
      /**
       * Error
       * @description Error information, if any
       * @default null
       */
      error: {
          [key: string]: unknown;
      } | null;
      /**
       * Hidden
       * @description Number of hidden schedules
       */
      hidden: number;
      /**
       * Limit
       * @description Maximum number of schedules returned
       */
      limit: number;
      /**
       * Result
       * @description List of schedule objects
       */
      result: {
          /**
           * Created
           * @description Timestamp when the schedule was created (Unix epoch)
           */
          created: number;
          /**
           * Created By Id
           * @description User ID of the creator of the schedule
           */
          createdById: number;
          /**
           * Cron
           * @description Cron expression defining when the test will run
           */
          cron: string;
          /**
           * Enabled
           * @description Indicates if the schedule is active
           */
          enabled: boolean;
          /**
           * Id
           * @description Unique identifier of the schedule
           */
          id: string;
          /**
           * Last Updated By Id
           * @description User ID of the last updater of the schedule
           * @default null
           */
          lastUpdatedById: number | null;
          /**
           * Next Run
           * @description Timestamp of the next scheduled run (Unix epoch)
           */
          nextRun: number;
          /**
           * Test Collection Id
           * @description ID of the multi-test collection scheduled, if applicable
           * @default null
           */
          testCollectionId: number | null;
          /**
           * Test Id
           * @description ID of the single test scheduled, if applicable
           * @default null
           */
          testId: number | null;
          /**
           * Type
           * @description Type of schedule, e.g., 'testRun'
           */
          type: string;
          /**
           * Updated
           * @description Timestamp when the schedule was last updated (Unix epoch)
           */
          updated: number;
      }[];
      /**
       * Skip
       * @description Number of schedules skipped before this set
       */
      skip: number;
      /**
       * Total
       * @description Total number of schedules available
       */
      total: number;
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
 * Type of BLAZEMETER's BLAZEMETER_GET_MULTI_TEST tool input.
 */
type BLAZEMETER_GET_MULTI_TEST_INPUT = {
  /**
   * Collection Id
   * @description Unique identifier of the multi-test (collection) to retrieve.
   */
  collectionId?: number;
  /**
   * Populate Tests
   * @description If true, include detailed embedded test objects in the response.
   * @default false
   */
  populateTests: boolean | null;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_GET_MULTI_TEST tool output.
 */
type BLAZEMETER_GET_MULTI_TEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Version
       * @description API version number.
       */
      api_version: number;
      /**
       * Error
       * @description Error details, if any.
       * @default null
       */
      error: {
          [key: string]: unknown;
      } | null;
      /**
       * Result
       * @description Multi-test detail object.
       */
      result: {
          /**
           * Collection Type
           * @description Type of the multi-test (e.g., 'multiV4').
           */
          collectionType: string;
          /**
           * Created
           * @description Creation timestamp (epoch seconds).
           */
          created: number;
          /**
           * Creator Client Id
           * @description Client ID that created the multi-test.
           */
          creatorClientId: string;
          /**
           * Data Files
           * @description List of associated data file names.
           */
          dataFiles: string[];
          /**
           * Description
           * @description Description of the multi-test.
           * @default null
           */
          description: string | null;
          /**
           * Draft Id
           * @description Draft ID, if in draft state.
           * @default null
           */
          draftId: number | null;
          /**
           * Files To Split
           * @description List of file names to split.
           */
          filesToSplit: string[];
          /**
           * Id
           * @description Unique identifier of the multi-test.
           */
          id: number;
          /**
           * Items
           * @description List of collection items (empty or file splits).
           */
          items: {
              [key: string]: unknown;
          }[];
          /**
           * Kpi Tracking Data
           * @description Key performance indicator tracking data, if any.
           * @default null
           */
          kpiTrackingData: {
              [key: string]: unknown;
          } | null;
          /**
           * Last Run Time
           * @description Timestamp of last run (epoch seconds).
           * @default null
           */
          lastRunTime: number | null;
          /**
           * Last Updated By Id
           * @description User ID of the last updater.
           */
          lastUpdatedById: number;
          /**
           * Masters
           * @description List of master run objects created by this multi-test.
           */
          masters: {
              [key: string]: unknown;
          }[];
          /**
           * Migrated From Test Collection Id
           * @description ID from which this test was migrated, if any.
           * @default null
           */
          migratedFromTestCollectionId: number | null;
          /**
           * Migrated To Test Id
           * @description ID to which this test was migrated, if any.
           * @default null
           */
          migratedToTestId: number | null;
          /**
           * Name
           * @description Name of the multi-test.
           */
          name: string;
          /**
           * Note
           * @description Optional note attached to the multi-test.
           * @default null
           */
          note: string | null;
          /**
           * Old Version Id
           * @description Previous version ID, if any.
           * @default null
           */
          oldVersionId: number | null;
          /**
           * Project Id
           * @description ID of the project containing the multi-test.
           */
          projectId: number;
          /**
           * Should Send Report Email
           * @description Whether to send report email after run.
           */
          shouldSendReportEmail: boolean;
          /**
           * Tests
           * @description List of individual test summaries included in the multi-test.
           */
          tests: {
              [key: string]: unknown;
          }[];
          /**
           * Tests For Executions
           * @description Execution configurations for each test in the multi-test.
           */
          testsForExecutions: {
              [key: string]: unknown;
          }[];
          /**
           * Under Migration
           * @description Indicates if under migration.
           * @default null
           */
          underMigration: boolean | null;
          /**
           * Updated
           * @description Last updated timestamp (epoch seconds).
           */
          updated: number;
          /**
           * User Id
           * @description ID of the user who created the multi-test.
           */
          userId: number;
          /**
           * V4 Migrated Date
           * @description Migration timestamp, if applicable.
           * @default null
           */
          v4MigratedDate: number | null;
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
 * Type of BLAZEMETER's BLAZEMETER_GET_MULTI_TESTS tool input.
 */
type BLAZEMETER_GET_MULTI_TESTS_INPUT = {
  /**
   * Limit
   * @description Limits the number of multi-tests returned
   * @default null
   */
  limit: number | null;
  /**
   * Project Id
   * @description Filter multi-tests by project ID
   * @default null
   */
  projectId: number | null;
  /**
   * Sort
   * @description Sorting criteria, e.g., ['name:asc']
   * @default null
   */
  sort: string[] | null;
  /**
   * Workspace Id
   * @description Filter multi-tests by workspace ID
   * @default null
   */
  workspaceId: number | null;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_GET_MULTI_TESTS tool output.
 */
type BLAZEMETER_GET_MULTI_TESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description List of multi-test objects
       */
      result: {
          /**
           * Collection Type
           * @description Type of the multi-test
           */
          collectionType: string;
          /**
           * Creator Client Id
           * @description ID of the creator client
           * @default null
           */
          creatorClientId: string | null;
          /**
           * Data Files
           * @description List of data files associated with the multi-test
           */
          dataFiles: unknown[];
          /**
           * Description
           * @description Description of the multi-test
           * @default null
           */
          description: string | null;
          /**
           * Files To Split
           * @description List of files with CSV split settings
           */
          filesToSplit: unknown[];
          /**
           * Id
           * @description Unique identifier of the multi-test
           */
          id: number;
          /**
           * Last Run Time
           * @description Timestamp of the last test run
           * @default null
           */
          lastRunTime: number | null;
          /**
           * Name
           * @description Name of the multi-test
           */
          name: string;
          /**
           * Tests For Executions
           * @description List of tests to be executed in this multi-test
           */
          testsForExecutions: unknown[];
          /**
           * User Id
           * @description ID of the user who created the multi-test
           */
          userId: number;
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
 * Type of BLAZEMETER's BLAZEMETER_GET_PROJECTS tool input.
 */
type BLAZEMETER_GET_PROJECTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of projects to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Sort order for returned results, e.g., 'name:asc'
   * @default null
   */
  sort: string | null;
  /**
   * Workspace Id
   * @description Workspace ID to list projects from
   */
  workspaceId?: string;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_GET_PROJECTS tool output.
 */
type BLAZEMETER_GET_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Count
           * @description Number of projects returned in this response
           */
          count: number;
          /**
           * Total
           * @description Total number of projects available
           */
          total: number;
      };
      /**
       * Result
       * @description List of projects in the workspace
       */
      result: {
          /**
           * Created
           * @description ISO8601 timestamp when the project was created
           */
          created: string;
          /**
           * Id
           * @description Project unique identifier
           */
          id: string;
          /**
           * Name
           * @description Name of the project
           */
          name: string;
          /**
           * Updated
           * @description ISO8601 timestamp when the project was last updated
           */
          updated: string;
          /**
           * Workspace Id
           * @description Workspace unique identifier
           */
          workspaceId: string;
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
 * Type of BLAZEMETER's BLAZEMETER_GET_TESTS tool input.
 */
type BLAZEMETER_GET_TESTS_INPUT = {
  /**
   * Limit
   * @description Maximum number of tests to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set
   * @default null
   */
  offset: number | null;
  /**
   * Project Id
   * @description The ID of the project to filter tests.
   * @default null
   */
  projectId: string | null;
  /**
   * Sort
   * @description Sorting criteria for the results, as an array of strings. Each element should be '<field>,<direction>' e.g., ['name,asc','created,desc']
   * @default null
   */
  sort: string[] | null;
  /**
   * Workspace Id
   * @description The ID of the workspace to filter tests.
   * @default null
   */
  workspaceId: string | null;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_GET_TESTS tool output.
 */
type BLAZEMETER_GET_TESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Limit used in the request
       */
      limit: number;
      /**
       * Offset
       * @description Offset used in the request
       */
      offset: number;
      /**
       * Result
       * @description List of tests returned
       */
      result: {
          /**
           * Created
           * @description ISO8601 timestamp when the test was created
           */
          created: string;
          /**
           * Id
           * @description Unique identifier of the test
           */
          id: string;
          /**
           * Name
           * @description Name of the test
           */
          name: string;
          /**
           * Project Id
           * @description ID of the project the test belongs to
           * @default null
           */
          projectId: string | null;
          /**
           * Updated
           * @description ISO8601 timestamp when the test was last updated
           */
          updated: string;
          /**
           * Workspace Id
           * @description ID of the workspace the test belongs to
           * @default null
           */
          workspaceId: string | null;
      }[];
      /**
       * Total
       * @description Total number of tests available
       */
      total: number;
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
 * Type of BLAZEMETER's BLAZEMETER_GET_TEST_VALIDATIONS tool input.
 */
type BLAZEMETER_GET_TEST_VALIDATIONS_INPUT = {
  /**
   * Test Id
   * @description Unique identifier of the test to retrieve validation results for.
   */
  testId?: number;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_GET_TEST_VALIDATIONS tool output.
 */
type BLAZEMETER_GET_TEST_VALIDATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Validations
       * @description List of validation results for the specified test file.
       */
      validations: {
          /**
           * Errors
           * @description List of errors found during the validation. Empty if no issues.
           */
          errors: string[];
          /**
           * File Name
           * @description Name of the file being validated.
           */
          fileName: string;
          /**
           * Status
           * @description The status of the validation process. A status of 100 means completed.
           */
          status: number;
          /**
           * Timestamp
           * @description Timestamp (in milliseconds since epoch) when this validation status was recorded.
           */
          timestamp: number;
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
 * Type of BLAZEMETER's BLAZEMETER_GET_USER tool input.
 */
type BLAZEMETER_GET_USER_INPUT = object;

/**
 * Type of BLAZEMETER's BLAZEMETER_GET_USER tool output.
 */
type BLAZEMETER_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description User's address.
       * @default null
       */
      address: string | null;
      /**
       * City
       * @description City of the user's address.
       * @default null
       */
      city: string | null;
      /**
       * Company
       * @description Company name associated with the user.
       * @default null
       */
      company: string | null;
      /**
       * Country
       * @description Country of the user's address.
       * @default null
       */
      country: string | null;
      /**
       * Created
       * @description Timestamp of when the user was created.
       */
      created: string;
      /**
       * Email
       * @description User's email address.
       */
      email: string;
      /**
       * First Name
       * @description User's first name.
       */
      firstName: string;
      /**
       * Id
       * @description Unique identifier for the user.
       */
      id: string;
      /**
       * Last Login
       * @description Timestamp of the user's last login.
       */
      lastLogin: string;
      /**
       * Last Name
       * @description User's last name.
       */
      lastName: string;
      /**
       * Permissions
       * @description Permissions granted to the user.
       */
      permissions: string[];
      /**
       * Phone
       * @description User's phone number.
       * @default null
       */
      phone: string | null;
      /**
       * Roles
       * @description Roles assigned to the user.
       */
      roles: string[];
      /**
       * State
       * @description State of the user's address.
       * @default null
       */
      state: string | null;
      /**
       * Status
       * @description Current status of the user (e.g., active, inactive).
       */
      status: string;
      /**
       * Zip
       * @description ZIP code of the user's address.
       * @default null
       */
      zip: string | null;
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
 * Type of BLAZEMETER's BLAZEMETER_GET_WORKSPACES tool input.
 */
type BLAZEMETER_GET_WORKSPACES_INPUT = {
  /**
   * Account Id
   * @description ID of the account to retrieve workspaces for
   */
  accountId?: number;
  /**
   * Enabled
   * @description If true, returns only enabled workspaces; if false, only disabled workspaces
   * @default null
   */
  enabled: boolean | null;
  /**
   * Text Filter
   * @description Filter workspaces by name containing this string
   * @default null
   */
  textFilter: string | null;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_GET_WORKSPACES tool output.
 */
type BLAZEMETER_GET_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Version
       * @description API version used
       */
      api_version: number;
      /**
       * Error
       * @description Error information, if any
       * @default null
       */
      error: {
          [key: string]: unknown;
      } | null;
      /**
       * Hidden
       * @description Number of hidden workspaces
       */
      hidden: number;
      /**
       * Limit
       * @description Maximum number of workspaces returned
       */
      limit: number;
      /**
       * Result
       * @description List of workspace objects
       */
      result: {
          /**
           * Account Id
           * @description ID of the account to which the workspace belongs
           */
          accountId: number;
          /**
           * Allowance
           * @description Allowance information for the workspace
           */
          allowance: {
              /**
               * Amount
               * @description Allowance amount
               */
              amount: number;
              /**
               * Type
               * @description Type of allowance (e.g., 'credits')
               */
              type: string;
          };
          /**
           * Created
           * @description Timestamp when the workspace was created (Unix epoch)
           */
          created: number;
          /**
           * Dedicated Ips Enabled
           * @description Whether dedicated IPs are enabled
           */
          dedicatedIpsEnabled: boolean;
          /**
           * Enabled
           * @description Indicates if the workspace is enabled
           */
          enabled: boolean;
          /**
           * Id
           * @description Workspace unique identifier
           */
          id: number;
          /**
           * Members Count
           * @description Number of members in the workspace
           */
          membersCount: number;
          /**
           * Name
           * @description Workspace name
           */
          name: string;
          /**
           * Owner
           * @description Owner information for the workspace
           */
          owner: {
              /**
               * Display Name
               * @description Owner's display name
               */
              displayName: string;
              /**
               * Email
               * @description Owner's email address
               */
              email: string;
              /**
               * Id
               * @description Owner's user ID
               */
              id: number;
          };
          /**
           * Private Locations Enabled
           * @description Whether private locations are enabled
           */
          privateLocationsEnabled: boolean;
          /**
           * Updated
           * @description Timestamp when the workspace was last updated (Unix epoch)
           */
          updated: number;
          /**
           * User Id
           * @description ID of the user who created the workspace
           */
          userId: number;
      }[];
      /**
       * Skip
       * @description Number of workspaces skipped before this set
       */
      skip: number;
      /**
       * Total
       * @description Total number of workspaces available
       */
      total: number;
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
 * Type of BLAZEMETER's BLAZEMETER_STOP_MASTER tool input.
 */
type BLAZEMETER_STOP_MASTER_INPUT = {
  /**
   * Master Id
   * @description Unique identifier of the test execution (Master ID)
   */
  master_id?: number;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_STOP_MASTER tool output.
 */
type BLAZEMETER_STOP_MASTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Version
       * @description API version number.
       */
      api_version: number;
      /**
       * Error
       * @description Error information, if any.
       * @default null
       */
      error: {
          [key: string]: unknown;
      } | null;
      /**
       * Result
       * @description Details of the stopped test execution.
       */
      result: {
          /**
           * Created
           * @description Timestamp when the test was created (milliseconds since epoch).
           */
          created: number;
          /**
           * Creator Client Id
           * @description Client ID that created the test.
           */
          creatorClientId: string;
          /**
           * Executor Client Id
           * @description Client ID that executed the test.
           */
          executorClientId: string;
          /**
           * Id
           * @description Master ID of the test execution.
           */
          id: number;
          /**
           * Is Debug Run
           * @description Indicates if the test was a debug run.
           */
          isDebugRun: boolean;
          /**
           * Labels Collection Suffix
           * @description Suffix for labels collection.
           */
          labelsCollectionSuffix: string;
          /**
           * Locations
           * @description List of test execution locations.
           */
          locations: string[];
          /**
           * Name
           * @description Name of the test.
           */
          name: string;
          /**
           * Project Id
           * @description The ID of the project.
           */
          projectId: number;
          /**
           * Runner User Id
           * @description ID of the user who executed the test.
           */
          runnerUserId: number;
          /**
           * Scenarios
           * @description List of test scenarios.
           */
          scenarios: string[];
          /**
           * Seconds Per Label Doc
           * @description Time in seconds per label documentation.
           */
          secondsPerLabelDoc: number;
          /**
           * Sessions Id
           * @description List of session IDs associated with the test.
           */
          sessionsId: string[];
          /**
           * Test Id
           * @description The ID of the test.
           */
          testId: number;
          /**
           * Updated
           * @description Timestamp when the test was last updated (milliseconds since epoch).
           */
          updated: number;
          /**
           * User Id
           * @description ID of the user who created the test.
           */
          userId: number;
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
 * Type of BLAZEMETER's BLAZEMETER_UPDATE_API_MONITORING_SCHEDULE tool input.
 */
type BLAZEMETER_UPDATE_API_MONITORING_SCHEDULE_INPUT = {
  /**
   * Enabled
   * @description Indicates whether the schedule should be active (true) or inactive (false)
   */
  enabled?: boolean;
  /**
   * Schedule Id
   * @description Unique identifier of the API monitoring schedule to update
   */
  schedule_id?: string;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_UPDATE_API_MONITORING_SCHEDULE tool output.
 */
type BLAZEMETER_UPDATE_API_MONITORING_SCHEDULE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Unix epoch timestamp when schedule was created
       */
      created: number;
      /**
       * Created By Id
       * @description User ID who created the schedule
       */
      createdById: number;
      /**
       * Cron
       * @description Cron expression defining when the schedule runs
       */
      cron: string;
      /**
       * Enabled
       * @description Indicates if the schedule is active
       */
      enabled: boolean;
      /**
       * Id
       * @description Unique identifier of the schedule
       */
      id: string;
      /**
       * Last Updated By Id
       * @description User ID who last updated the schedule
       * @default null
       */
      lastUpdatedById: number | null;
      /**
       * Next Executions
       * @description List of upcoming execution timestamps
       * @default null
       */
      nextExecutions: number[] | null;
      /**
       * Next Run
       * @description Unix epoch timestamp of the next scheduled run
       */
      nextRun: number;
      /**
       * Test Collection Id
       * @description ID of the multi-test collection scheduled, if applicable
       * @default null
       */
      testCollectionId: number | null;
      /**
       * Test Id
       * @description ID of the single test scheduled, if applicable
       * @default null
       */
      testId: number | null;
      /**
       * Type
       * @description Type of schedule, e.g., 'testRun'
       */
      type: string;
      /**
       * Updated
       * @description Unix epoch timestamp when schedule was last updated
       */
      updated: number;
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
 * Type of BLAZEMETER's BLAZEMETER_UPDATE_TEST tool input.
 */
type BLAZEMETER_UPDATE_TEST_INPUT = {
  /**
   * UpdateTestConfiguration
   * @description Configuration settings for updating a BlazeMeter test.
   * @default null
   */
  configuration: {
      /**
       * Filename
       * @description The name of the file to be used in the test, e.g., 'DemoTest.jmx'.
       */
      filename: string;
  } | null;
  /**
   * Name
   * @description New name for the test.
   * @default null
   */
  name: string | null;
  /**
   * Test Id
   * @description Unique identifier of the test to update.
   */
  test_id?: string;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_UPDATE_TEST tool output.
 */
type BLAZEMETER_UPDATE_TEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Version
       * @description API version of the response.
       */
      api_version: number;
      /**
       * Error
       * @description Error details if the request failed, otherwise null.
       * @default null
       */
      error: unknown;
      /**
       * Result
       * @description Details of the updated test.
       */
      result: {
          /**
           * Configuration
           * @description Configuration details of the updated test.
           */
          configuration: {
              /**
               * Execution Type
               * @description Execution environment type, e.g., 'taurusCloud'.
               */
              executionType: string;
              /**
               * Filename
               * @description Filename used in the test.
               */
              filename: string;
              /**
               * Script Type
               * @description Script type used.
               */
              scriptType: string;
              /**
               * Test Mode
               * @description Test mode used.
               */
              testMode: string;
              /**
               * Type
               * @description Test type returned by the server.
               */
              type: string;
          };
          /**
           * Created
           * @description Unix timestamp when the test was created.
           */
          created: number;
          /**
           * Creator Client Id
           * @description Client ID of the creator, e.g., 'api'.
           */
          creatorClientId: string;
          /**
           * Id
           * @description Unique identifier of the test.
           */
          id: number;
          /**
           * Is New Test
           * @description True if this is the first version of the test.
           */
          isNewTest: boolean;
          /**
           * Last Updated By Id
           * @description ID of the user who last updated the test.
           */
          lastUpdatedById: number;
          /**
           * Name
           * @description Name of the test.
           */
          name: string;
          /**
           * Override Executions
           * @description List of override execution objects, if any.
           */
          overrideExecutions?: unknown[];
          /**
           * Project Id
           * @description ID of the project the test belongs to.
           */
          projectId: number;
          /**
           * Should Send Report Email
           * @description Whether the system will send a report email upon test completion.
           */
          shouldSendReportEmail: boolean;
          /**
           * Updated
           * @description Unix timestamp when the test was last updated.
           */
          updated: number;
          /**
           * User Id
           * @description ID of the user who owns the test.
           */
          userId: number;
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
 * Type of BLAZEMETER's BLAZEMETER_UPLOAD_TEST_FILES tool input.
 */
type BLAZEMETER_UPLOAD_TEST_FILES_INPUT = {
  /**
   * Files
   * @description List of files to upload
   */
  files?: {
      /**
       * Content
       * Format: binary
       * @description Binary content of the file
       */
      content: string;
      /**
       * File Name
       * @description Name of the file, e.g., 'script.jmx'
       */
      fileName: string;
  }[];
  /**
   * Test Id
   * @description Identifier of the test to upload files to
   */
  testId?: string;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_UPLOAD_TEST_FILES tool output.
 */
type BLAZEMETER_UPLOAD_TEST_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files
       * @description Metadata for uploaded files
       */
      files: {
          /**
           * Download Url
           * @description URL to download the uploaded file
           * @default null
           */
          downloadUrl: string | null;
          /**
           * Id
           * @description ID of the uploaded file
           */
          id: string;
          /**
           * Name
           * @description Name of the uploaded file
           */
          name: string;
          /**
           * Size
           * @description Size of the uploaded file in bytes
           */
          size: number;
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
 * Type of BLAZEMETER's BLAZEMETER_VALIDATE_TEST tool input.
 */
type BLAZEMETER_VALIDATE_TEST_INPUT = {
  /**
   * Test Id
   * Format: uuid
   * @description UUID of the test to validate.
   */
  testId?: unknown;
};

/**
 * Type of BLAZEMETER's BLAZEMETER_VALIDATE_TEST tool output.
 */
type BLAZEMETER_VALIDATE_TEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Object containing the validation status and any errors
       */
      result: {
          /**
           * Errors
           * @description List of validation errors if the test is invalid, empty if valid
           */
          errors: string[];
          /**
           * Status
           * @description Validation status of the test, e.g., 'VALID' or 'INVALID'
           */
          status: string;
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
 * Type map of all available tool input types for toolkit "BLAZEMETER".
 */
export type BLAZEMETER_TOOL_INPUTS = {
  CREATE_API_MONITORING_SCHEDULE: BLAZEMETER_CREATE_API_MONITORING_SCHEDULE_INPUT
  CREATE_MULTI_TEST: BLAZEMETER_CREATE_MULTI_TEST_INPUT
  CREATE_PROJECT: BLAZEMETER_CREATE_PROJECT_INPUT
  CREATE_TEST: BLAZEMETER_CREATE_TEST_INPUT
  DELETE_API_MONITORING_SCHEDULE: BLAZEMETER_DELETE_API_MONITORING_SCHEDULE_INPUT
  GET_ACCOUNTS: BLAZEMETER_GET_ACCOUNTS_INPUT
  GET_API_MONITORING_SCHEDULE: BLAZEMETER_GET_API_MONITORING_SCHEDULE_INPUT
  GET_API_MONITORING_SCHEDULES: BLAZEMETER_GET_API_MONITORING_SCHEDULES_INPUT
  GET_MULTI_TEST: BLAZEMETER_GET_MULTI_TEST_INPUT
  GET_MULTI_TESTS: BLAZEMETER_GET_MULTI_TESTS_INPUT
  GET_PROJECTS: BLAZEMETER_GET_PROJECTS_INPUT
  GET_TESTS: BLAZEMETER_GET_TESTS_INPUT
  GET_TEST_VALIDATIONS: BLAZEMETER_GET_TEST_VALIDATIONS_INPUT
  GET_USER: BLAZEMETER_GET_USER_INPUT
  GET_WORKSPACES: BLAZEMETER_GET_WORKSPACES_INPUT
  STOP_MASTER: BLAZEMETER_STOP_MASTER_INPUT
  UPDATE_API_MONITORING_SCHEDULE: BLAZEMETER_UPDATE_API_MONITORING_SCHEDULE_INPUT
  UPDATE_TEST: BLAZEMETER_UPDATE_TEST_INPUT
  UPLOAD_TEST_FILES: BLAZEMETER_UPLOAD_TEST_FILES_INPUT
  VALIDATE_TEST: BLAZEMETER_VALIDATE_TEST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BLAZEMETER".
 */
export type BLAZEMETER_TOOL_OUTPUTS = {
  CREATE_API_MONITORING_SCHEDULE: BLAZEMETER_CREATE_API_MONITORING_SCHEDULE_OUTPUT
  CREATE_MULTI_TEST: BLAZEMETER_CREATE_MULTI_TEST_OUTPUT
  CREATE_PROJECT: BLAZEMETER_CREATE_PROJECT_OUTPUT
  CREATE_TEST: BLAZEMETER_CREATE_TEST_OUTPUT
  DELETE_API_MONITORING_SCHEDULE: BLAZEMETER_DELETE_API_MONITORING_SCHEDULE_OUTPUT
  GET_ACCOUNTS: BLAZEMETER_GET_ACCOUNTS_OUTPUT
  GET_API_MONITORING_SCHEDULE: BLAZEMETER_GET_API_MONITORING_SCHEDULE_OUTPUT
  GET_API_MONITORING_SCHEDULES: BLAZEMETER_GET_API_MONITORING_SCHEDULES_OUTPUT
  GET_MULTI_TEST: BLAZEMETER_GET_MULTI_TEST_OUTPUT
  GET_MULTI_TESTS: BLAZEMETER_GET_MULTI_TESTS_OUTPUT
  GET_PROJECTS: BLAZEMETER_GET_PROJECTS_OUTPUT
  GET_TESTS: BLAZEMETER_GET_TESTS_OUTPUT
  GET_TEST_VALIDATIONS: BLAZEMETER_GET_TEST_VALIDATIONS_OUTPUT
  GET_USER: BLAZEMETER_GET_USER_OUTPUT
  GET_WORKSPACES: BLAZEMETER_GET_WORKSPACES_OUTPUT
  STOP_MASTER: BLAZEMETER_STOP_MASTER_OUTPUT
  UPDATE_API_MONITORING_SCHEDULE: BLAZEMETER_UPDATE_API_MONITORING_SCHEDULE_OUTPUT
  UPDATE_TEST: BLAZEMETER_UPDATE_TEST_OUTPUT
  UPLOAD_TEST_FILES: BLAZEMETER_UPLOAD_TEST_FILES_OUTPUT
  VALIDATE_TEST: BLAZEMETER_VALIDATE_TEST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BLAZEMETER toolkit.
 */
export const BLAZEMETER = {
  slug: "blazemeter",
  tools: {
    /**
     * Tool to create a new schedule for running api monitoring tests. use when you need to automate test runs at defined intervals after determining the correct cron expression and test or collection id.
     */
    CREATE_API_MONITORING_SCHEDULE: "BLAZEMETER_CREATE_API_MONITORING_SCHEDULE",
    /**
     * Tool to create a new multi-test within a specified project. use after confirming the project id. example: "create a multi-test named 'load-test' in project 12345."
     */
    CREATE_MULTI_TEST: "BLAZEMETER_CREATE_MULTI_TEST",
    /**
     * Tool to create a new project. use when you need to initialize a project in a specific workspace. use after confirming the workspace id.
     */
    CREATE_PROJECT: "BLAZEMETER_CREATE_PROJECT",
    /**
     * Tool to create a new single test within a specified project. use when registering a new performance test via api.
     */
    CREATE_TEST: "BLAZEMETER_CREATE_TEST",
    /**
     * Tool to delete a specific test schedule by its id. use when you need to remove a scheduled test by its unique schedule identifier.
     */
    DELETE_API_MONITORING_SCHEDULE: "BLAZEMETER_DELETE_API_MONITORING_SCHEDULE",
    /**
     * Tool to retrieve a list of accounts associated with the authenticated user. use after confirming valid authentication.
     */
    GET_ACCOUNTS: "BLAZEMETER_GET_ACCOUNTS",
    /**
     * Tool to retrieve details of a specific api monitoring schedule by its id. use when you need to inspect the configuration or timing of an existing schedule.
     */
    GET_API_MONITORING_SCHEDULE: "BLAZEMETER_GET_API_MONITORING_SCHEDULE",
    /**
     * Tool to retrieve a list of all test schedules in your account. use when you need to enumerate existing schedules to manage or review them.
     */
    GET_API_MONITORING_SCHEDULES: "BLAZEMETER_GET_API_MONITORING_SCHEDULES",
    /**
     * Tool to retrieve details of a specific multi-test. use after creating or listing multi-tests when you need full configuration and status. minimal example: "get multi-test 12345678 with populated tests."
     */
    GET_MULTI_TEST: "BLAZEMETER_GET_MULTI_TEST",
    /**
     * Tool to retrieve a list of multi-tests within a specified project or workspace. use when you need to enumerate available multi-tests by specifying a project or workspace id.
     */
    GET_MULTI_TESTS: "BLAZEMETER_GET_MULTI_TESTS",
    /**
     * Tool to retrieve a list of projects within a specified workspace. use when you need to enumerate or page through projects under a given workspace.
     */
    GET_PROJECTS: "BLAZEMETER_GET_PROJECTS",
    /**
     * Tool to retrieve a list of single tests within a specified project or workspace. use when you need to list tests after organizing them. example: "get tests for projectid=prj-5678".
     */
    GET_TESTS: "BLAZEMETER_GET_TESTS",
    /**
     * Tool to retrieve validation results for a specific test by its id. use after uploading or modifying test files to confirm file validation status.
     */
    GET_TEST_VALIDATIONS: "BLAZEMETER_GET_TEST_VALIDATIONS",
    /**
     * Tool to retrieve information about the authenticated user. use when you need the current user's profile and have valid authentication.
     */
    GET_USER: "BLAZEMETER_GET_USER",
    /**
     * Tool to retrieve a list of workspaces for a specified account. use when you need to list or filter workspaces by account, status, or name.
     */
    GET_WORKSPACES: "BLAZEMETER_GET_WORKSPACES",
    /**
     * Tool to stop a specific test execution (master) by its id. use when you need to abort a running test.
     */
    STOP_MASTER: "BLAZEMETER_STOP_MASTER",
    /**
     * Tool to update the configuration of an existing api monitoring schedule. use when you need to enable or disable a schedule after confirming its id.
     */
    UPDATE_API_MONITORING_SCHEDULE: "BLAZEMETER_UPDATE_API_MONITORING_SCHEDULE",
    /**
     * Tool to update details of a specific test by its id. use when you need to modify test configuration or name of an existing test after confirming its id. example: "update the test name to 'loadtest' for test with id '12345'."
     */
    UPDATE_TEST: "BLAZEMETER_UPDATE_TEST",
    /**
     * Tool to upload files to a specific test by its id. use after creating or selecting a test to attach scripts or resources before execution.
     */
    UPLOAD_TEST_FILES: "BLAZEMETER_UPLOAD_TEST_FILES",
    /**
     * Tool to validate a specific test by its id. use after creating or updating a test to ensure its configuration is valid.
     */
    VALIDATE_TEST: "BLAZEMETER_VALIDATE_TEST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BLAZEMETER".
 */
export type BLAZEMETER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BLAZEMETER".
 */
export type BLAZEMETER_TRIGGER_EVENTS = {}
