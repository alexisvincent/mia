// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLASSMARKER's CLASSMARKER_CREATE_ACCESS_LIST_ITEM tool input.
 */
type CLASSMARKER_CREATE_ACCESS_LIST_ITEM_INPUT = {
  /**
   * Access List Id
   * @description ID of the access list to modify
   */
  access_list_id?: number;
  /**
   * Codes
   * @description List of access codes to add; up to 100 codes, each up to 255 characters
   */
  codes?: string[];
};

/**
 * Type of CLASSMARKER's CLASSMARKER_CREATE_ACCESS_LIST_ITEM tool output.
 */
type CLASSMARKER_CREATE_ACCESS_LIST_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * CreateAccessListItemAccessLists
       * @description Wrapper for access list information
       * @default null
       */
      access_lists: {
          /**
           * Access List
           * @description Access list details after addition
           */
          access_list: {
              /**
               * Access List Id
               * @description Access list ID
               */
              access_list_id: number;
              /**
               * Access List Name
               * @description Access list name
               */
              access_list_name: string;
              /**
               * Num Codes Added
               * @description Number of codes added in this request
               */
              num_codes_added: number;
              /**
               * Num Codes Total
               * @description Total codes in the list after adding
               */
              num_codes_total: number;
          };
      } | null;
      /**
       * ErrorInfo
       * @description Error details if status is 'error'
       * @default null
       */
      error: {
          /**
           * Error Code
           * @description Error code returned by the API
           */
          error_code: string;
          /**
           * Error Message
           * @description Error message returned by the API
           */
          error_message: string;
          /**
           * Next Request After
           * @description UNIX timestamp when rate limit resets (if applicable)
           * @default null
           */
          next_request_after: number | null;
      } | null;
      /**
       * Request Path
       * @description API endpoint called
       */
      request_path: string;
      /**
       * Server Timestamp
       * @description Server UNIX timestamp in seconds
       */
      server_timestamp: number;
      /**
       * Status
       * @description "ok" on success or "error" on failure
       */
      status: string;
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
 * Type of CLASSMARKER's CLASSMARKER_CREATE_CATEGORY tool input.
 */
type CLASSMARKER_CREATE_CATEGORY_INPUT = {
  /**
   * Category Name
   * @description Name for the new category
   */
  category_name?: string;
  /**
   * Parent Category Id
   * @description ID of the existing parent category under which this will be created
   */
  parent_category_id?: number;
  /**
   * Verify Only
   * @description If true, only validates parameters without creating the category
   * @default false
   */
  verify_only: boolean | null;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_CREATE_CATEGORY tool output.
 */
type CLASSMARKER_CREATE_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Wrapped response data for the new category
   */
  data?: {
      /**
       * Category
       * @description Container for created category details
       */
      category: {
          /**
           * Category Id
           * @description ID of the created category
           */
          category_id: number;
          /**
           * Category Name
           * @description Name of the created category
           */
          category_name: string;
          /**
           * Parent Category Id
           * @description Parent category ID
           */
          parent_category_id: number;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Path
   * @description Echoed API path
   */
  request_path?: string;
  /**
   * Server Timestamp
   * @description Server UNIX timestamp in seconds
   */
  server_timestamp?: number;
  /**
   * Status
   * @description Request status, e.g., 'ok'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_CREATE_GROUP tool input.
 */
type CLASSMARKER_CREATE_GROUP_INPUT = {
  /**
   * Description
   * @description Optional description for the group
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the group to create
   */
  name?: string;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_CREATE_GROUP tool output.
 */
type CLASSMARKER_CREATE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the group was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the created group
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the created group
       */
      id: number;
      /**
       * Name
       * @description Name of the created group
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the group was last updated
       * @default null
       */
      updated_at: string | null;
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
 * Type of CLASSMARKER's CLASSMARKER_CREATE_QUESTION tool input.
 */
type CLASSMARKER_CREATE_QUESTION_INPUT = {
  /**
   * Category Id
   * @description Category identifier to assign this question.
   */
  category_id?: number;
  /**
   * Correct Feedback
   * @description Optional feedback for a correct answer.
   * @default null
   */
  correct_feedback: string | null;
  /**
   * Correct Options
   * @description List of letters indicating the correct option(s); single for multiplechoice/truefalse.
   * @default null
   */
  correct_options: string[] | null;
  /**
   * Grade Style
   * @description Grading style for multipleresponse; ignored otherwise.
   * @default null
   * @enum {string|null}
   */
  grade_style: "partial_with_deduction" | "partial_without_deduction" | "off" | null;
  /**
   * Incorrect Feedback
   * @description Optional feedback for an incorrect answer.
   * @default null
   */
  incorrect_feedback: string | null;
  /**
   * Options
   * @description Map of option letters (A-J) to {'content': text}; required for choice and truefalse types.
   * @default null
   */
  options: {
      [key: string]: {
          [key: string]: string;
      };
  } | null;
  /**
   * Points
   * @description Points awarded for a correct answer.
   */
  points?: number;
  /**
   * Question
   * @description The text of the question to create.
   */
  question?: string;
  /**
   * Question Type
   * @description One of the creatable types: multiplechoice, multipleresponse, truefalse, essay
   * @enum {string}
   */
  question_type?: "multiplechoice" | "multipleresponse" | "truefalse" | "essay";
  /**
   * Random Answers
   * @description Whether to randomize the order of options.
   */
  random_answers?: boolean;
  /**
   * Verify Only
   * @description If true, validates payload without creating; returns status 'verified'.
   * @default false
   */
  verify_only: boolean | null;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_CREATE_QUESTION tool output.
 */
type CLASSMARKER_CREATE_QUESTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category Id
       * @description Category identifier.
       * @default null
       */
      category_id: number | null;
      /**
       * Correct Feedback
       * @description Feedback for correct answer.
       * @default null
       */
      correct_feedback: string | null;
      /**
       * Correct Options
       * @description List of correct option letters.
       * @default null
       */
      correct_options: string[] | null;
      /**
       * ErrorInfo
       * @description Error details if the API returned an error status
       * @default null
       */
      error: {
          /**
           * Error Code
           * @description Error code returned by the API when status is 'error'
           * @default null
           */
          error_code: string | null;
          /**
           * Error Message
           * @description Error message returned by the API when status is 'error'
           * @default null
           */
          error_message: string | null;
          /**
           * Next Request After
           * @description UNIX timestamp to retry after (rate limiting)
           * @default null
           */
          next_request_after: number | null;
      } | null;
      /**
       * Incorrect Feedback
       * @description Feedback for incorrect answer.
       * @default null
       */
      incorrect_feedback: string | null;
      /**
       * Last Updated Timestamp
       * @description UNIX timestamp of last update.
       * @default null
       */
      last_updated_timestamp: number | null;
      /**
       * Options
       * @description Options map for choice and truefalse types.
       * @default null
       */
      options: {
          [key: string]: {
              /**
               * Content
               * @description Option text.
               */
              content: string;
          };
      } | null;
      /**
       * Points
       * @description Points awarded for a correct answer.
       * @default null
       */
      points: number | null;
      /**
       * Question
       * @description Question text.
       * @default null
       */
      question: string | null;
      /**
       * Question Id
       * @description Unique question identifier.
       * @default null
       */
      question_id: number | null;
      /**
       * Question Type
       * @description Type of the question.
       * @default null
       * @enum {string|null}
       */
      question_type: "multiplechoice" | "multipleresponse" | "truefalse" | "essay" | null;
      /**
       * Random Answers
       * @description Whether options are randomized.
       * @default null
       */
      random_answers: boolean | null;
      /**
       * Request Path
       * @description API endpoint path when verify_only is used.
       * @default null
       */
      request_path: string | null;
      /**
       * Server Timestamp
       * @description Server UNIX timestamp when verify_only is used.
       * @default null
       */
      server_timestamp: number | null;
      /**
       * Status
       * @description Status of the operation or question (e.g., 'active', 'archived', 'verified', 'error').
       */
      status: string;
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
 * Type of CLASSMARKER's CLASSMARKER_CREATE_USER tool input.
 */
type CLASSMARKER_CREATE_USER_INPUT = {
  /**
   * Email
   * Format: email
   * @description User's email address
   * @example john@example.com
   */
  email?: string;
  /**
   * First Name
   * @description User's first name
   */
  first_name?: string;
  /**
   * Group Ids
   * @description List of group IDs to assign the user to
   * @default null
   * @example [
   *       1,
   *       2,
   *       3
   *     ]
   */
  group_ids: number[] | null;
  /**
   * Is Admin
   * @description Indicates if the user should have admin privileges
   * @default false
   */
  is_admin: boolean;
  /**
   * Last Name
   * @description User's last name
   * @example Doe
   */
  last_name?: string;
  /**
   * Password
   * @description User's password, minimum length 8
   * @example pass1234
   */
  password?: string;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_CREATE_USER tool output.
 */
type CLASSMARKER_CREATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description Full JSON response from ClassMarker API
       */
      raw_response: {
          [key: string]: unknown;
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
 * Type of CLASSMARKER's CLASSMARKER_DELETE_ACCESS_LIST_ITEM tool input.
 */
type CLASSMARKER_DELETE_ACCESS_LIST_ITEM_INPUT = {
  /**
   * Access List Id
   * @description ID of the access list to remove codes from
   */
  access_list_id?: number;
  /**
   * Codes
   * @description List of access codes to remove; 1 to 100 codes per request
   */
  codes?: string[];
};

/**
 * Type of CLASSMARKER's CLASSMARKER_DELETE_ACCESS_LIST_ITEM tool output.
 */
type CLASSMARKER_DELETE_ACCESS_LIST_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * AccessListsContainer
       * @description Container for access list response data when status is 'ok'
       * @default null
       */
      access_lists: {
          /**
           * Access List
           * @description Details of the affected access list
           */
          access_list: {
              /**
               * Access List Id
               * @description ID of the access list after deletion
               */
              access_list_id: number;
              /**
               * Access List Name
               * @description Name of the access list
               */
              access_list_name: string;
              /**
               * Num Codes Deleted
               * @description Number of codes deleted in this operation
               */
              num_codes_deleted: number;
              /**
               * Num Codes Total
               * @description Total codes remaining on the list after deletion
               */
              num_codes_total: number;
          };
      } | null;
      /**
       * Error
       * @description Error details when status is 'error'
       * @default null
       */
      error: {
          [key: string]: unknown;
      } | null;
      /**
       * Request Path
       * @description API path that was called
       */
      request_path: string;
      /**
       * Server Timestamp
       * @description Server UNIX timestamp (seconds)
       */
      server_timestamp: number;
      /**
       * Status
       * @description Request status, e.g. 'ok' or 'error'
       */
      status: string;
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
 * Type of CLASSMARKER's CLASSMARKER_DELETE_API_KEY tool input.
 */
type CLASSMARKER_DELETE_API_KEY_INPUT = {
  /**
   * Api Key Id
   * @description Unique identifier of the API key to delete
   */
  api_key_id?: number;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_DELETE_API_KEY tool output.
 */
type CLASSMARKER_DELETE_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Path
       * @description Echoed API path
       */
      request_path: string;
      /**
       * Server Timestamp
       * @description Server UNIX timestamp in seconds
       */
      server_timestamp: number;
      /**
       * Status
       * @description Request status, e.g., 'ok'
       */
      status: string;
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
 * Type of CLASSMARKER's CLASSMARKER_DELETE_GROUP tool input.
 */
type CLASSMARKER_DELETE_GROUP_INPUT = {
  /**
   * Group Id
   * @description ID of the group to delete
   */
  group_id?: string;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_DELETE_GROUP tool output.
 */
type CLASSMARKER_DELETE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Whether the deletion was successful
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
 * Type of CLASSMARKER's CLASSMARKER_DELETE_TEST_LINK tool input.
 */
type CLASSMARKER_DELETE_TEST_LINK_INPUT = {
  /**
   * Link Id
   * @description ID of the link to delete
   */
  link_id?: number;
  /**
   * Test Id
   * @description ID of the test that owns the link
   */
  test_id?: number;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_DELETE_TEST_LINK tool output.
 */
type CLASSMARKER_DELETE_TEST_LINK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the test link was successfully deleted
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
 * Type of CLASSMARKER's CLASSMARKER_DELETE_USER tool input.
 */
type CLASSMARKER_DELETE_USER_INPUT = {
  /**
   * User Id
   * @description ID of the user to delete
   */
  user_id?: string;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_DELETE_USER tool output.
 */
type CLASSMARKER_DELETE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Whether the deletion was successful
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
 * Type of CLASSMARKER's CLASSMARKER_DELETE_WEBHOOK tool input.
 */
type CLASSMARKER_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description ID of the webhook to delete
   */
  webhook_id?: string;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_DELETE_WEBHOOK tool output.
 */
type CLASSMARKER_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message returned by the API
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Whether the deletion was successful
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
 * Type of CLASSMARKER's CLASSMARKER_GET_ALL_GROUPS_LINKS_EXAMS tool input.
 */
type CLASSMARKER_GET_ALL_GROUPS_LINKS_EXAMS_INPUT = object;

/**
 * Type of CLASSMARKER's CLASSMARKER_GET_ALL_GROUPS_LINKS_EXAMS tool output.
 */
type CLASSMARKER_GET_ALL_GROUPS_LINKS_EXAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Groups
       * @description List of groups the API key can access
       */
      groups?: {
          /**
           * Group
           * @description Group metadata and its assigned tests.
           */
          group: {
              /**
               * Assigned Tests
               * @description List of tests assigned to this group
               */
              assigned_tests?: {
                  /**
                   * Test
                   * @description Details of an individual test/exam.
                   */
                  test: {
                      /**
                       * Test Id
                       * @description Exam/Test ID
                       */
                      test_id: number;
                      /**
                       * Test Name
                       * @description Exam/Test name
                       */
                      test_name: string;
                  };
              }[];
              /**
               * Group Id
               * @description Group ID
               */
              group_id: number;
              /**
               * Group Name
               * @description Group name
               */
              group_name: string;
          };
      }[];
      /**
       * Links
       * @description List of links the API key can access
       */
      links?: {
          /**
           * Link
           * @description Link metadata and its assigned tests.
           */
          link: {
              /**
               * Access List Id
               * @description Access list ID if present
               * @default null
               */
              access_list_id: number | null;
              /**
               * Assigned Tests
               * @description List of tests assigned to this link
               */
              assigned_tests?: {
                  /**
                   * Test
                   * @description Details of an individual test/exam.
                   */
                  test: {
                      /**
                       * Test Id
                       * @description Exam/Test ID
                       */
                      test_id: number;
                      /**
                       * Test Name
                       * @description Exam/Test name
                       */
                      test_name: string;
                  };
              }[];
              /**
               * Link Id
               * @description Link ID
               */
              link_id: number;
              /**
               * Link Name
               * @description Link name
               */
              link_name: string;
              /**
               * Link Url Id
               * @description Unique link identifier (used as quiz_id)
               * @default null
               */
              link_url_id: string | null;
          };
      }[];
      /**
       * Request Path
       * @description API path returned by the server
       */
      request_path: string;
      /**
       * Server Timestamp
       * @description Server UNIX timestamp (seconds)
       */
      server_timestamp: number;
      /**
       * Status
       * @description Request status (e.g., 'ok')
       */
      status: string;
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
 * Type of CLASSMARKER's CLASSMARKER_GET_GROUP_DETAILS tool input.
 */
type CLASSMARKER_GET_GROUP_DETAILS_INPUT = {
  /**
   * Group Id
   * @description ID of the group to retrieve
   */
  group_id?: number;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_GET_GROUP_DETAILS tool output.
 */
type CLASSMARKER_GET_GROUP_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Error details when status is 'error'
       * @default null
       */
      error: {
          /**
           * Error Code
           * @description Error code returned by the API
           */
          error_code: string;
          /**
           * Error Message
           * @description Error message returned by the API
           */
          error_message: string;
          /**
           * Next Request After
           * @description UNIX timestamp when rate limit resets (if applicable)
           * @default null
           */
          next_request_after: number | null;
      } | null;
      /**
       * GroupDetail
       * @description Detailed information about the group if available
       * @default null
       */
      group: {
          /**
           * Assigned Tests
           * @description List of tests assigned to the group
           */
          assigned_tests?: {
              /**
               * Test
               * @description Test object assigned to the group
               */
              test: {
                  /**
                   * Test Id
                   * @description Unique identifier of the test
                   */
                  test_id: number;
                  /**
                   * Test Name
                   * @description Name of the test
                   */
                  test_name: string;
              };
          }[];
          /**
           * Group Id
           * @description Unique identifier of the group
           */
          group_id: number;
          /**
           * Group Name
           * @description Name of the group
           */
          group_name: string;
      } | null;
      /**
       * Request Path
       * @description API path that was called
       */
      request_path: string;
      /**
       * Server Timestamp
       * @description Server UNIX timestamp in seconds
       */
      server_timestamp: number;
      /**
       * Status
       * @description API request status: ok | no_results | error
       */
      status: string;
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
 * Type of CLASSMARKER's CLASSMARKER_GET_INITIAL_FINISHED_AFTER_TIMESTAMP tool input.
 */
type CLASSMARKER_GET_INITIAL_FINISHED_AFTER_TIMESTAMP_INPUT = object;

/**
 * Type of CLASSMARKER's CLASSMARKER_GET_INITIAL_FINISHED_AFTER_TIMESTAMP tool output.
 */
type CLASSMARKER_GET_INITIAL_FINISHED_AFTER_TIMESTAMP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Initial Finished After Timestamp
       * @description Unix timestamp for two weeks ago (current time minus 14 days)
       */
      initial_finished_after_timestamp: number;
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
 * Type of CLASSMARKER's CLASSMARKER_GET_QUESTION tool input.
 */
type CLASSMARKER_GET_QUESTION_INPUT = {
  /**
   * Question Id
   * @description Unique identifier of the question to retrieve
   */
  question_id?: number;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_GET_QUESTION tool output.
 */
type CLASSMARKER_GET_QUESTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Question
       * @description The retrieved question object
       */
      question: {
          /**
           * Category Id
           * @description Category identifier of the question
           */
          category_id: number;
          /**
           * Correct Feedback
           * @description Feedback displayed when the user answers correctly
           * @default null
           */
          correct_feedback: string | null;
          /**
           * Correct Options
           * @description List of correct option letters, e.g., ['A','C']; empty or omitted for essay/freetext questions
           * @default null
           */
          correct_options: string[] | null;
          /**
           * Incorrect Feedback
           * @description Feedback displayed when the user answers incorrectly
           * @default null
           */
          incorrect_feedback: string | null;
          /**
           * Last Updated Timestamp
           * @description UNIX timestamp of the last update to this question
           */
          last_updated_timestamp: number;
          /**
           * Options
           * @description Mapping from option letter (A–J) to option details; only present for choice-style questions
           * @default null
           */
          options: {
              [key: string]: {
                  /**
                   * Content
                   * @description The text content of this option.
                   */
                  content: string;
              };
          } | null;
          /**
           * Points
           * @description Points available for the question, e.g., '2.0'
           */
          points: string;
          /**
           * Question
           * @description The question text
           */
          question: string;
          /**
           * Question Id
           * @description Unique identifier of the question
           */
          question_id: number;
          /**
           * Question Type
           * @description Type of the question, e.g., 'multiplechoice'
           */
          question_type: string;
          /**
           * Random Answers
           * @description Whether answer options are randomized
           */
          random_answers: boolean;
          /**
           * Status
           * @description Current state of the question
           * @enum {string}
           */
          status: "active" | "archived";
      };
      /**
       * Request Path
       * @description The API request path that was called
       */
      request_path: string;
      /**
       * Server Timestamp
       * @description Server UNIX timestamp in seconds
       */
      server_timestamp: number;
      /**
       * Status
       * @description API response status, e.g., 'ok'
       */
      status: string;
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
 * Type of CLASSMARKER's CLASSMARKER_GET_RECENT_RESULTS_GROUP_EXAM tool input.
 */
type CLASSMARKER_GET_RECENT_RESULTS_GROUP_EXAM_INPUT = {
  /**
   * Finished After Timestamp
   * @description UNIX timestamp (seconds) to return only results finished after this time. Must be less than 3 months old.
   */
  finishedAfterTimestamp?: number;
  /**
   * Group Id
   * @description Unique identifier of the group
   */
  group_id?: number;
  /**
   * Limit
   * @description Number of results to return; default 200; maximum 200.
   * @default null
   */
  limit: number | null;
  /**
   * Test Id
   * @description Unique identifier of the test/exam
   */
  test_id?: number;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_GET_RECENT_RESULTS_GROUP_EXAM tool output.
 */
type CLASSMARKER_GET_RECENT_RESULTS_GROUP_EXAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Error details if status is 'error'
       * @default null
       */
      error: {
          /**
           * Error Code
           * @description Error code returned by the API
           */
          error_code: string;
          /**
           * Error Message
           * @description Error message returned by the API
           */
          error_message: string;
          /**
           * Next Request After
           * @description UNIX timestamp when rate limit resets (if applicable)
           * @default null
           */
          next_request_after: number | null;
      } | null;
      /**
       * Finished After Timestamp Used
       * @description Finished-after timestamp used by the API
       * @default null
       */
      finished_after_timestamp_used: number | null;
      /**
       * Groups
       * @description List of groups associated with results
       */
      groups?: {
          /** Group */
          group: {
              /**
               * Group Id
               * @description Unique identifier of the group
               */
              group_id: number;
              /**
               * Group Name
               * @description Name of the group
               */
              group_name: string;
          };
      }[];
      /**
       * More Results Exist
       * @description True if additional results exist
       * @default null
       */
      more_results_exist: boolean | null;
      /**
       * Next Finished After Timestamp
       * @description Timestamp to use for finishedAfterTimestamp in the next request to paginate without duplicates
       * @default null
       */
      next_finished_after_timestamp: number | null;
      /**
       * Num Results Available
       * @description Total results available
       * @default null
       */
      num_results_available: number | null;
      /**
       * Num Results Returned
       * @description Number of results returned
       * @default null
       */
      num_results_returned: number | null;
      /**
       * Request Path
       * @description API request path returned for debugging
       */
      request_path: string;
      /**
       * Results
       * @description List of result records
       */
      results?: {
          /** Result */
          result: {
              /**
               * Certificate Serial
               * @description Certificate serial number
               * @default null
               */
              certificate_serial: string | null;
              /**
               * Certificate Url
               * Format: uri
               * @description URL to download the certificate, if issued
               * @default null
               */
              certificate_url: string | null;
              /**
               * Duration
               * @description Duration in HH:MM:SS format
               */
              duration: string;
              /**
               * Email
               * @description User email address
               */
              email: string;
              /**
               * First
               * @description User first name
               */
              first: string;
              /**
               * Give Certificate Only When Passed
               * @description Only issue certificate when passed
               */
              give_certificate_only_when_passed: boolean;
              /**
               * Group Id
               * @description Group identifier
               */
              group_id: number;
              /**
               * Last
               * @description User last name
               */
              last: string;
              /**
               * Passed
               * @description True if passed; true if no passmark set
               */
              passed: boolean;
              /**
               * Percentage
               * @description Score percentage (0–100)
               */
              percentage: number;
              /**
               * Percentage Passmark
               * @description Percent required to pass
               */
              percentage_passmark: number;
              /**
               * Points Available
               * @description Total points available
               */
              points_available: number;
              /**
               * Points Scored
               * @description Points earned
               */
              points_scored: number;
              /**
               * Requires Grading
               * @description Whether manual grading is needed
               * @enum {string}
               */
              requires_grading: "Yes" | "No";
              /**
               * Status
               * @description Result status; always 'f' for finished
               * @constant
               */
              status: "f";
              /**
               * Test Id
               * @description Test identifier
               */
              test_id: number;
              /**
               * Test Type
               * @description Type of the exam; surveys return zero scores
               * @enum {string}
               */
              test_type: "Test" | "Survey";
              /**
               * Time Finished
               * @description Unix timestamp finished
               */
              time_finished: number;
              /**
               * Time Started
               * @description Unix timestamp started
               */
              time_started: number;
              /**
               * User Id
               * @description User identifier
               */
              user_id: number;
              /**
               * View Results Url
               * Format: uri
               * @description URL to view formatted results
               * @default null
               */
              view_results_url: string | null;
          };
      }[];
      /**
       * Server Timestamp
       * @description Server UNIX timestamp
       */
      server_timestamp: number;
      /**
       * Status
       * @description Response status: ok | no_results | error
       */
      status: string;
      /**
       * Tests
       * @description List of tests associated with results
       */
      tests?: {
          /** Test */
          test: {
              /**
               * Test Id
               * @description Unique identifier of the test
               */
              test_id: number;
              /**
               * Test Name
               * @description Name of the test
               */
              test_name: string;
          };
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
 * Type of CLASSMARKER's CLASSMARKER_GET_RECENT_RESULTS_LINK_EXAM tool input.
 */
type CLASSMARKER_GET_RECENT_RESULTS_LINK_EXAM_INPUT = {
  /**
   * Finished After Timestamp
   * @description UNIX timestamp (seconds) to return only results finished after this time; must be less than 3 months old
   */
  finishedAfterTimestamp?: number;
  /**
   * Limit
   * @description Number of results to return; default 200; maximum 200.
   * @default null
   */
  limit: number | null;
  /**
   * Link Id
   * @description Unique identifier of the link
   */
  link_id?: number;
  /**
   * Test Id
   * @description Unique identifier of the test/exam
   */
  test_id?: number;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_GET_RECENT_RESULTS_LINK_EXAM tool output.
 */
type CLASSMARKER_GET_RECENT_RESULTS_LINK_EXAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Error details if status is 'error'
       * @default null
       */
      error: {
          /**
           * Error Code
           * @description Error code returned by the API
           */
          error_code: string;
          /**
           * Error Message
           * @description Error message returned by the API
           */
          error_message: string;
          /**
           * Next Request After
           * @description Unix timestamp when you can retry (if rate limited)
           * @default null
           */
          next_request_after: number | null;
      } | null;
      /**
       * Finished After Timestamp Used
       * @description Finished-after timestamp used by the API
       * @default 0
       */
      finished_after_timestamp_used: number | null;
      /**
       * Links
       * @description Link metadata included for context
       */
      links?: {
          /** Link */
          link: {
              /**
               * Access List Id
               * @description Access list ID assigned to this link, if any
               * @default null
               */
              access_list_id: number | null;
              /**
               * Link Id
               * @description Unique identifier of the link
               */
              link_id: number;
              /**
               * Link Name
               * @description Name of the link
               */
              link_name: string;
              /**
               * Link Url Id
               * @description Unique URL identifier for the link, if enabled
               * @default null
               */
              link_url_id: string | null;
          };
      }[];
      /**
       * More Results Exist
       * @description True if additional results exist
       * @default false
       */
      more_results_exist: boolean | null;
      /**
       * Next Finished After Timestamp
       * @description Use as finishedAfterTimestamp in next request for pagination
       * @default null
       */
      next_finished_after_timestamp: number | null;
      /**
       * Num Results Available
       * @description Total results available
       * @default 0
       */
      num_results_available: number | null;
      /**
       * Num Results Returned
       * @description Number of results returned
       * @default 0
       */
      num_results_returned: number | null;
      /**
       * Request Path
       * @description API request path for debugging
       * @default
       */
      request_path: string | null;
      /**
       * Results
       * @description List of recent result records
       */
      results?: {
          /** Result */
          result: {
              /**
               * Access Code
               * @description Access code used for the exam
               * @default null
               */
              access_code: string | null;
              /**
               * Certificate Serial
               * @description Certificate serial number
               * @default null
               */
              certificate_serial: string | null;
              /**
               * Certificate Url
               * Format: uri
               * @description URL to download the certificate, if issued
               * @default null
               */
              certificate_url: string | null;
              /**
               * Cm User Id
               * @description Custom user ID if provided
               * @default null
               */
              cm_user_id: string | null;
              /**
               * Duration
               * @description Exam duration in HH:MM:SS format
               */
              duration: string;
              /**
               * Email
               * @description Email address of the user
               */
              email: string;
              /**
               * Extra Info
               * @description Extra info field 1, if provided
               * @default null
               */
              extra_info: string | null;
              /**
               * Extra Info2
               * @description Extra info field 2, if provided
               * @default null
               */
              extra_info2: string | null;
              /**
               * Extra Info3
               * @description Extra info field 3, if provided
               * @default null
               */
              extra_info3: string | null;
              /**
               * Extra Info4
               * @description Extra info field 4, if provided
               * @default null
               */
              extra_info4: string | null;
              /**
               * Extra Info5
               * @description Extra info field 5, if provided
               * @default null
               */
              extra_info5: string | null;
              /**
               * First
               * @description First name of the user
               */
              first: string;
              /**
               * Give Certificate Only When Passed
               * @description Only issue certificate when passed
               */
              give_certificate_only_when_passed: boolean;
              /**
               * Ip Address
               * @description User's IP address
               * @default null
               */
              ip_address: string | null;
              /**
               * Last
               * @description Last name of the user
               */
              last: string;
              /**
               * Link Id
               * @description Link ID
               */
              link_id: number;
              /**
               * Link Result Id
               * @description Unique Test Result ID
               */
              link_result_id: number;
              /**
               * Passed
               * @description True if passed; true if no passmark set
               */
              passed: boolean;
              /**
               * Percentage
               * @description Score percentage (0-100)
               */
              percentage: number;
              /**
               * Percentage Passmark
               * @description Passmark percentage
               */
              percentage_passmark: number;
              /**
               * Points Available
               * @description Points available
               */
              points_available: number;
              /**
               * Points Scored
               * @description Points scored
               */
              points_scored: number;
              /**
               * Requires Grading
               * @description Whether manual grading is needed
               * @enum {string}
               */
              requires_grading: "Yes" | "No";
              /**
               * Status
               * @description Result status; always 'f' for finished
               * @constant
               */
              status: "f";
              /**
               * Test Id
               * @description Test ID
               */
              test_id: number;
              /**
               * Test Type
               * @description Type of the exam; surveys return zero scores
               * @enum {string}
               */
              test_type: "Test" | "Survey";
              /**
               * Time Finished
               * @description Unix timestamp when finished
               */
              time_finished: number;
              /**
               * Time Started
               * @description Unix timestamp when started
               */
              time_started: number;
              /**
               * View Results Url
               * Format: uri
               * @description URL to view formatted results
               * @default null
               */
              view_results_url: string | null;
          };
      }[];
      /**
       * Server Timestamp
       * @description Server UNIX timestamp
       * @default 0
       */
      server_timestamp: number | null;
      /**
       * Status
       * @description Response status: ok | no_results | error
       */
      status: string;
      /**
       * Tests
       * @description Test metadata included for context
       */
      tests?: {
          /** Test */
          test: {
              /**
               * Test Id
               * @description Unique identifier of the test/exam
               */
              test_id: number;
              /**
               * Test Name
               * @description Name of the test/exam
               */
              test_name: string;
          };
      }[];
  } & {
      [key: string]: unknown;
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
 * Type of CLASSMARKER's CLASSMARKER_GET_TEST_DETAILS tool input.
 */
type CLASSMARKER_GET_TEST_DETAILS_INPUT = {
  /**
   * Test Id
   * @description ID of the test to retrieve details
   */
  test_id?: number;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_GET_TEST_DETAILS tool output.
 */
type CLASSMARKER_GET_TEST_DETAILS_OUTPUT = {
  /**
   * TestContainer
   * @description Container for the test detail.
   * @default null
   */
  data: {
      /**
       * Test
       * @description Wrapped test detail
       */
      test: {
          /**
           * Contexts
           * @description List of contexts (groups or links) where this test is assigned
           */
          contexts?: {
              /**
               * Id
               * @description Identifier of the group or link
               */
              id: number;
              /**
               * Name
               * @description Name of the group or link
               */
              name: string;
              /**
               * Type
               * @description Type of context: 'group' or 'link'
               * @enum {string}
               */
              type: "group" | "link";
              /**
               * Url Id
               * @description URL ID for links (if context type is 'link')
               * @default null
               */
              url_id: string | null;
          }[];
          /**
           * Test Id
           * @description Unique identifier of the test
           */
          test_id: number;
          /**
           * Test Name
           * @description Name of the test
           */
          test_name: string;
      };
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Path
   * @description Echoed API request path
   */
  request_path?: string;
  /**
   * Server Timestamp
   * @description Server UNIX timestamp in seconds
   */
  server_timestamp?: number;
  /**
   * Status
   * @description Request status, e.g., 'ok', 'no_results', or 'error'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_GET_USER_DETAILS tool input.
 */
type CLASSMARKER_GET_USER_DETAILS_INPUT = {
  /**
   * User Id
   * @description ID of the user to retrieve
   */
  user_id?: number;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_GET_USER_DETAILS tool output.
 */
type CLASSMARKER_GET_USER_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description User's company name, if provided
       * @default null
       * @example Acme Corp
       */
      company: string | null;
      /**
       * Created At
       * @description Timestamp when the user account was created
       * @example 2023-01-01T12:00:00Z
       */
      created_at: string;
      /**
       * Email
       * @description User's email address
       * @example john.doe@example.com
       */
      email: string;
      /**
       * First Name
       * @description User's first name
       * @example John
       */
      first_name: string;
      /**
       * Id
       * @description User's unique ID
       * @example 123
       */
      id: number;
      /**
       * Last Name
       * @description User's last name
       * @example Doe
       */
      last_name: string;
      /**
       * Phone
       * @description User's phone number, if provided
       * @default null
       * @example +1234567890
       */
      phone: string | null;
      /**
       * Status
       * @description Account status, e.g., 'active' or 'inactive'
       * @example active
       */
      status: string;
      /**
       * Timezone
       * @description User's timezone
       * @example America/New_York
       */
      timezone: string;
      /**
       * Updated At
       * @description Timestamp when the user account was last updated
       * @default null
       * @example 2023-06-01T09:30:00Z
       */
      updated_at: string | null;
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
 * Type of CLASSMARKER's CLASSMARKER_LIST_ASSIGNMENTS tool input.
 */
type CLASSMARKER_LIST_ASSIGNMENTS_INPUT = object;

/**
 * Type of CLASSMARKER's CLASSMARKER_LIST_ASSIGNMENTS tool output.
 */
type CLASSMARKER_LIST_ASSIGNMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Error details if status is 'error'
       * @default null
       */
      error: {
          /**
           * Error Code
           * @description Error code returned by the API
           */
          error_code: string;
          /**
           * Error Message
           * @description Error message returned by the API
           */
          error_message: string;
          /**
           * Next Request After
           * @description UNIX timestamp when rate limit resets (if rate limited)
           * @default null
           */
          next_request_after: number | null;
      } | null;
      /**
       * Groups
       * @description Groups accessible with their assigned tests
       */
      groups?: {
          /**
           * Assigned Tests
           * @description Tests assigned to this group
           */
          assigned_tests: {
              /**
               * Test Id
               * @description Unique identifier of the test
               */
              test_id: number;
              /**
               * Test Name
               * @description Name of the test
               */
              test_name: string;
          }[];
          /**
           * Group Id
           * @description Unique identifier of the group
           */
          group_id: number;
          /**
           * Group Name
           * @description Name of the group
           */
          group_name: string;
      }[];
      /**
       * Links
       * @description Links accessible with their assigned tests
       */
      links?: {
          /**
           * Access List Id
           * @description Access list ID assigned to this link, if any
           * @default null
           */
          access_list_id: number | null;
          /**
           * Assigned Tests
           * @description Tests assigned to this link
           */
          assigned_tests: {
              /**
               * Test Id
               * @description Unique identifier of the test
               */
              test_id: number;
              /**
               * Test Name
               * @description Name of the test
               */
              test_name: string;
          }[];
          /**
           * Link Id
           * @description Unique identifier of the link
           */
          link_id: number;
          /**
           * Link Name
           * @description Name of the link
           */
          link_name: string;
          /**
           * Link Url Id
           * @description Unique URL ID for the link; present if permission enabled
           * @default null
           */
          link_url_id: string | null;
      }[];
      /**
       * Request Path
       * @description Request path returned by the API for debugging
       */
      request_path: string;
      /**
       * Server Timestamp
       * @description Server UNIX timestamp when response was generated
       */
      server_timestamp: number;
      /**
       * Status
       * @description Response status: ok | no_results | error
       */
      status: string;
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
 * Type of CLASSMARKER's CLASSMARKER_LIST_CATEGORIES tool input.
 */
type CLASSMARKER_LIST_CATEGORIES_INPUT = object;

/**
 * Type of CLASSMARKER's CLASSMARKER_LIST_CATEGORIES tool output.
 */
type CLASSMARKER_LIST_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Response data containing categories
   */
  data?: {
      /**
       * Parent Categories
       * @description List of parent categories with nested sub-categories
       */
      parent_categories: {
          /**
           * Categories
           * @description List of sub-categories under this parent category
           */
          categories: {
              /**
               * Category Id
               * @description ID of the sub-category
               */
              category_id: number;
              /**
               * Category Name
               * @description Name of the sub-category
               */
              category_name: string;
              /**
               * Parent Category Id
               * @description ID of the parent category
               */
              parent_category_id: number;
          }[];
          /**
           * Parent Category Id
           * @description ID of the parent category
           */
          parent_category_id: number;
          /**
           * Parent Category Name
           * @description Name of the parent category
           */
          parent_category_name: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Path
   * @description Echoed API request path
   */
  request_path?: string;
  /**
   * Server Timestamp
   * @description Server's UNIX timestamp in seconds
   */
  server_timestamp?: number;
  /**
   * Status
   * @description Response status, e.g., 'ok'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_LIST_CERTIFICATES tool input.
 */
type CLASSMARKER_LIST_CERTIFICATES_INPUT = object;

/**
 * Type of CLASSMARKER's CLASSMARKER_LIST_CERTIFICATES tool output.
 */
type CLASSMARKER_LIST_CERTIFICATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Certificates
       * @description List of certificate objects available in the account
       */
      certificates: {
          /**
           * Created At
           * @description Timestamp when the certificate was created
           * @default null
           */
          created_at: string | null;
          /**
           * Id
           * @description Unique identifier of the certificate
           */
          id: number;
          /**
           * Name
           * @description Name of the certificate
           */
          name: string;
          /**
           * Serial
           * @description Serial number of the certificate
           * @default null
           */
          serial: string | null;
          /**
           * Template
           * @description Template used for the certificate
           */
          template: string;
          /**
           * Url
           * @description URL where the certificate can be accessed
           * @default null
           */
          url: string | null;
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
 * Type of CLASSMARKER's CLASSMARKER_LIST_GROUPS tool input.
 */
type CLASSMARKER_LIST_GROUPS_INPUT = object;

/**
 * Type of CLASSMARKER's CLASSMARKER_LIST_GROUPS tool output.
 */
type CLASSMARKER_LIST_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Error details returned when the API responds with an error.
       * @default null
       */
      error: {
          /**
           * Error Code
           * @description Error code returned by the API
           */
          error_code: string;
          /**
           * Error Message
           * @description Error message returned by the API
           */
          error_message: string;
          /**
           * Next Request After
           * @description UNIX timestamp when rate limit resets (if rate limited)
           * @default null
           */
          next_request_after: number | null;
      } | null;
      /**
       * Groups
       * @description Groups accessible with their assigned tests
       */
      groups?: {
          /**
           * Assigned Tests
           * @description Tests assigned to this group
           */
          assigned_tests: {
              /**
               * Test Id
               * @description Unique identifier of the test
               */
              test_id: number;
              /**
               * Test Name
               * @description Name of the test
               */
              test_name: string;
          }[];
          /**
           * Group Id
           * @description Unique identifier of the group
           */
          group_id: number;
          /**
           * Group Name
           * @description Name of the group
           */
          group_name: string;
      }[];
      /**
       * Links
       * @description Links accessible with their assigned tests
       */
      links?: {
          /**
           * Access List Id
           * @description Access list ID assigned to this link, if any
           * @default null
           */
          access_list_id: number | null;
          /**
           * Assigned Tests
           * @description Tests assigned to this link
           */
          assigned_tests: {
              /**
               * Test Id
               * @description Unique identifier of the test
               */
              test_id: number;
              /**
               * Test Name
               * @description Name of the test
               */
              test_name: string;
          }[];
          /**
           * Link Id
           * @description Unique identifier of the link
           */
          link_id: number;
          /**
           * Link Name
           * @description Name of the link
           */
          link_name: string;
          /**
           * Link Url Id
           * @description Unique URL ID for the link; present if permission enabled
           * @default null
           */
          link_url_id: string | null;
      }[];
      /**
       * Request Path
       * @description Request path returned by the API for debugging
       */
      request_path: string;
      /**
       * Server Timestamp
       * @description Server UNIX timestamp when response was generated
       */
      server_timestamp: number;
      /**
       * Status
       * @description Response status: ok | no_results | error
       */
      status: string;
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
 * Type of CLASSMARKER's CLASSMARKER_LIST_QUESTIONS tool input.
 */
type CLASSMARKER_LIST_QUESTIONS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve; defaults to 1 if omitted. Each page returns up to 200 questions.
   * @default null
   */
  page: number | null;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_LIST_QUESTIONS tool output.
 */
type CLASSMARKER_LIST_QUESTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Questions
       * @description Array of question objects.
       */
      questions: {
          /**
           * Category Id
           * @description Category identifier for this question.
           */
          category_id: number;
          /**
           * Correct Feedback
           * @description Feedback displayed when the user answers correctly.
           * @default null
           */
          correct_feedback: string | null;
          /**
           * Correct Options
           * @description List of correct option letters, e.g., ['A','C']; empty or omitted for essay/freetext.
           * @default null
           */
          correct_options: string[] | null;
          /**
           * Grade Style
           * @description For multipleresponse questions, how partial credit is handled.
           * @default null
           * @enum {string|null}
           */
          grade_style: "partial_with_deduction" | "partial_without_deduction" | "off" | null;
          /**
           * Incorrect Feedback
           * @description Feedback displayed when the user answers incorrectly.
           * @default null
           */
          incorrect_feedback: string | null;
          /**
           * Last Updated Timestamp
           * @description UNIX timestamp (as string) of the last update to this question.
           */
          last_updated_timestamp: string;
          /**
           * Options
           * @description Mapping from option letter (A–J) to option details; only present for choice-style questions.
           * @default null
           */
          options: {
              [key: string]: {
                  /**
                   * Content
                   * @description The text content of this option.
                   */
                  content: string;
                  /**
                   * Type
                   * @description Option type, only present for freetext questions (e.g., 'exact_match').
                   * @default null
                   */
                  type: string | null;
              };
          } | null;
          /**
           * Points
           * @description Points awarded for a correct answer.
           */
          points: number;
          /**
           * Question
           * @description The question text.
           */
          question: string;
          /**
           * Question Id
           * @description Unique identifier for this question.
           */
          question_id: number;
          /**
           * Question Type
           * @description Type of question.
           * @enum {string}
           */
          question_type: "multiplechoice" | "multipleresponse" | "truefalse" | "essay" | "freetext" | "grammar" | "matching";
          /**
           * Random Answers
           * @description Whether answer options are randomized for this question.
           */
          random_answers: boolean;
          /**
           * Status
           * @description Current state of the question.
           * @enum {string}
           */
          status: "active" | "archived";
      }[];
      /**
       * Request Path
       * @description The request path that was called.
       */
      request_path: string;
      /**
       * Server Timestamp
       * @description Server UNIX timestamp at response.
       */
      server_timestamp: number;
      /**
       * Status
       * @description API response status, e.g., 'ok'.
       */
      status: string;
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
 * Type of CLASSMARKER's CLASSMARKER_LIST_RECENT_RESULTS_FOR_GROUPS tool input.
 */
type CLASSMARKER_LIST_RECENT_RESULTS_FOR_GROUPS_INPUT = {
  /**
   * Finished After Timestamp
   * @description UNIX timestamp (seconds) to return only results finished after this time. Must be less than 3 months old.
   */
  finishedAfterTimestamp?: number;
  /**
   * Limit
   * @description Number of results to return; default 200; maximum 200.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_LIST_RECENT_RESULTS_FOR_GROUPS tool output.
 */
type CLASSMARKER_LIST_RECENT_RESULTS_FOR_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Finished After Timestamp Used
       * @description Finished-after timestamp used by the API
       */
      finished_after_timestamp_used: number;
      /**
       * Groups
       * @description List of groups associated with results
       */
      groups: {
          /** Group */
          group: {
              /**
               * Group Id
               * @description Unique identifier of the group
               */
              group_id: number;
              /**
               * Group Name
               * @description Name of the group
               */
              group_name: string;
          };
      }[];
      /**
       * More Results Exist
       * @description True if additional results exist
       */
      more_results_exist: boolean;
      /**
       * Next Finished After Timestamp
       * @description Timestamp to use for finishedAfterTimestamp in the next request to paginate without duplicates
       * @default null
       */
      next_finished_after_timestamp: number | null;
      /**
       * Num Results Available
       * @description Total results available
       */
      num_results_available: number;
      /**
       * Num Results Returned
       * @description Number of results returned
       */
      num_results_returned: number;
      /**
       * Request Path
       * @description API request path returned for debugging
       */
      request_path: string;
      /**
       * Results
       * @description List of result records
       */
      results: {
          /** Result */
          result: {
              /**
               * Certificate Serial
               * @description Certificate serial number
               * @default null
               */
              certificate_serial: string | null;
              /**
               * Certificate Url
               * Format: uri
               * @description URL to download the certificate, if issued
               * @default null
               */
              certificate_url: string | null;
              /**
               * Duration
               * @description Duration in HH:MM:SS format
               */
              duration: string;
              /**
               * Email
               * @description User email address
               */
              email: string;
              /**
               * First
               * @description User first name
               */
              first: string;
              /**
               * Give Certificate Only When Passed
               * @description Only issue certificate when passed
               */
              give_certificate_only_when_passed: boolean;
              /**
               * Group Id
               * @description Unique group ID
               */
              group_id: number;
              /**
               * Last
               * @description User last name
               */
              last: string;
              /**
               * Passed
               * @description True if passed; true if no passmark set
               */
              passed: boolean;
              /**
               * Percentage
               * @description Score percentage (0–100)
               */
              percentage: number;
              /**
               * Percentage Passmark
               * @description Percent required to pass
               */
              percentage_passmark: number;
              /**
               * Points Available
               * @description Total points available
               */
              points_available: number;
              /**
               * Points Scored
               * @description Total points scored
               */
              points_scored: number;
              /**
               * Requires Grading
               * @description Whether manual grading is needed
               * @enum {string}
               */
              requires_grading: "Yes" | "No";
              /**
               * Status
               * @description Result status; always 'f' for finished
               * @constant
               */
              status: "f";
              /**
               * Test Id
               * @description Unique exam ID
               */
              test_id: number;
              /**
               * Test Type
               * @description Type of the exam; surveys return zero scores
               * @enum {string}
               */
              test_type: "Test" | "Survey";
              /**
               * Time Finished
               * @description Finish time (UNIX seconds)
               */
              time_finished: number;
              /**
               * Time Started
               * @description Start time (UNIX seconds)
               */
              time_started: number;
              /**
               * User Id
               * @description Unique ClassMarker user ID
               */
              user_id: number;
              /**
               * View Results Url
               * Format: uri
               * @description URL to view formatted results
               * @default null
               */
              view_results_url: string | null;
          };
      }[];
      /**
       * Server Timestamp
       * @description Server UNIX timestamp
       */
      server_timestamp: number;
      /**
       * Status
       * @description Response status: ok | no_results | error
       */
      status: string;
      /**
       * Tests
       * @description List of tests associated with results
       */
      tests: {
          /** Test */
          test: {
              /**
               * Test Id
               * @description Unique identifier of the test
               */
              test_id: number;
              /**
               * Test Name
               * @description Name of the test
               */
              test_name: string;
          };
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
 * Type of CLASSMARKER's CLASSMARKER_LIST_RECENT_RESULTS_FOR_LINKS tool input.
 */
type CLASSMARKER_LIST_RECENT_RESULTS_FOR_LINKS_INPUT = {
  /**
   * Finished After Timestamp
   * @description Return only results finished after this UNIX timestamp; use the next_finished_after_timestamp from a previous response to avoid duplicates.
   */
  finishedAfterTimestamp?: number;
  /**
   * Limit
   * @description Number of results to return; default and maximum is 200. Set lower to reduce payload size.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_LIST_RECENT_RESULTS_FOR_LINKS tool output.
 */
type CLASSMARKER_LIST_RECENT_RESULTS_FOR_LINKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Finished After Timestamp Used
       * @description The finishedAfterTimestamp value that was applied.
       */
      finished_after_timestamp_used: number;
      /**
       * Links
       * @description Details of all links accessible to the API key.
       */
      links: {
          /**
           * Access List Id
           * @description Access list ID assigned to this link, if any.
           * @default null
           */
          access_list_id: number | null;
          /**
           * Link Id
           * @description Unique identifier of the link.
           */
          link_id: number;
          /**
           * Link Name
           * @description Name of the link.
           */
          link_name: string;
          /**
           * Link Url Id
           * @description URL identifier for the link, if enabled for the API key.
           * @default null
           */
          link_url_id: string | null;
      }[];
      /**
       * More Results Exist
       * @description Whether more results exist when using the next timestamp.
       */
      more_results_exist: boolean;
      /**
       * Next Finished After Timestamp
       * @description Use as finishedAfterTimestamp in your next request to paginate.
       */
      next_finished_after_timestamp: number;
      /**
       * Num Results Available
       * @description Total available results found.
       */
      num_results_available: number;
      /**
       * Num Results Returned
       * @description Count returned in this response (max/default 200).
       */
      num_results_returned: number;
      /**
       * Request Path
       * @description API path that was called.
       */
      request_path: string;
      /**
       * Results
       * @description Array of recent test results.
       */
      results: {
          /**
           * Access Code
           * @description Access code used by the test taker.
           */
          access_code: string;
          /**
           * Certificate Serial
           * @description Serial number of the certificate, if any.
           * @default null
           */
          certificate_serial: string | null;
          /**
           * Certificate Url
           * @description URL of the issued certificate, if any.
           * @default null
           */
          certificate_url: string | null;
          /**
           * Cm User Id
           * @description ClassMarker user ID of the test taker.
           */
          cm_user_id: string;
          /**
           * Duration
           * @description Duration of the test in hh:mm:ss.
           */
          duration: string;
          /**
           * Email
           * @description Test taker's email address.
           */
          email: string;
          /**
           * Extra Info
           * @description Extra info field 1.
           */
          extra_info: string;
          /**
           * Extra Info2
           * @description Extra info field 2.
           */
          extra_info2: string;
          /**
           * Extra Info3
           * @description Extra info field 3.
           */
          extra_info3: string;
          /**
           * Extra Info4
           * @description Extra info field 4.
           */
          extra_info4: string;
          /**
           * Extra Info5
           * @description Extra info field 5.
           */
          extra_info5: string;
          /**
           * First
           * @description Test taker's first name.
           */
          first: string;
          /**
           * Give Certificate Only When Passed
           * @description Whether certificate is issued only on passing.
           */
          give_certificate_only_when_passed: boolean;
          /**
           * Ip Address
           * @description IP address from which the test was taken.
           */
          ip_address: string;
          /**
           * Last
           * @description Test taker's last name.
           */
          last: string;
          /**
           * Link Id
           * @description Identifier of the link used.
           */
          link_id: number;
          /**
           * Link Result Id
           * @description Unique identifier of this link result.
           */
          link_result_id: number;
          /**
           * Passed
           * @description Whether the test was passed (true/false).
           */
          passed: boolean;
          /**
           * Percentage
           * @description Score percentage (0–100, may include one decimal).
           */
          percentage: number;
          /**
           * Percentage Passmark
           * @description Passmark percentage for the test.
           */
          percentage_passmark: number;
          /**
           * Points Available
           * @description Total points available (may include one decimal).
           */
          points_available: number;
          /**
           * Points Scored
           * @description Points scored (may include one decimal).
           */
          points_scored: number;
          /**
           * Requires Grading
           * @description Whether the test requires manual grading ('Yes' | 'No').
           */
          requires_grading: string;
          /**
           * Status
           * @description Completion status (always 'f').
           */
          status: string;
          /**
           * Test Id
           * @description Identifier of the test taken.
           */
          test_id: number;
          /**
           * Test Type
           * @description Type of item: 'Test' or 'Survey'.
           */
          test_type: string;
          /**
           * Time Finished
           * @description UNIX timestamp when test finished.
           */
          time_finished: number;
          /**
           * Time Started
           * @description UNIX timestamp when test started.
           */
          time_started: number;
          /**
           * View Results Url
           * @description URL where results can be viewed.
           */
          view_results_url: string;
      }[];
      /**
       * Server Timestamp
       * @description Server UNIX timestamp when response was generated.
       */
      server_timestamp: number;
      /**
       * Status
       * @description Response status: ok | no_results | error.
       */
      status: string;
      /**
       * Tests
       * @description Details of tests associated with those links.
       */
      tests: {
          /**
           * Test Id
           * @description Unique identifier of the test.
           */
          test_id: number;
          /**
           * Test Name
           * @description Name of the test.
           */
          test_name: string;
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
 * Type of CLASSMARKER's CLASSMARKER_LIST_TESTS tool input.
 */
type CLASSMARKER_LIST_TESTS_INPUT = object;

/**
 * Type of CLASSMARKER's CLASSMARKER_LIST_TESTS tool output.
 */
type CLASSMARKER_LIST_TESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ErrorInfo
       * @description Details of an error if the API returns status 'error'.
       * @default null
       */
      error: {
          /**
           * Error Code
           * @description Error code returned by the API
           */
          error_code: string;
          /**
           * Error Message
           * @description Error message returned by the API
           */
          error_message: string;
          /**
           * Next Request After
           * @description UNIX timestamp when rate limit resets (if rate limited)
           * @default null
           */
          next_request_after: number | null;
      } | null;
      /**
       * Request Path
       * @description Echo of the requested path for debugging
       */
      request_path: string;
      /**
       * Server Timestamp
       * @description Server UNIX timestamp when response was generated
       */
      server_timestamp: number;
      /**
       * Status
       * @description Response status: ok | no_results | error
       */
      status: string;
      /**
       * Tests
       * @description List of tests available in the account
       */
      tests?: {
          /**
           * Test Id
           * @description Unique identifier of the test
           */
          test_id: number;
          /**
           * Test Name
           * @description Name of the test
           */
          test_name: string;
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
 * Type of CLASSMARKER's CLASSMARKER_LIST_USERS tool input.
 */
type CLASSMARKER_LIST_USERS_INPUT = object;

/**
 * Type of CLASSMARKER's CLASSMARKER_LIST_USERS tool output.
 */
type CLASSMARKER_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Response data containing list of users
   */
  data?: {
      /**
       * Users
       * @description List of users retrieved
       */
      users: {
          /**
           * Company
           * @description User's company name, if provided
           * @default null
           * @example Acme Corp
           */
          company: string | null;
          /**
           * Created At
           * @description Timestamp when the user account was created
           * @example 2023-01-01T12:00:00Z
           */
          created_at: string;
          /**
           * Email
           * @description User's email address
           * @example john.doe@example.com
           */
          email: string;
          /**
           * First Name
           * @description User's first name
           * @example John
           */
          first_name: string;
          /**
           * Id
           * @description User's unique ID
           * @example 123
           */
          id: number;
          /**
           * Last Name
           * @description User's last name
           * @example Doe
           */
          last_name: string;
          /**
           * Phone
           * @description User's phone number, if provided
           * @default null
           * @example +1234567890
           */
          phone: string | null;
          /**
           * Status
           * @description Account status, e.g., 'active' or 'inactive'
           * @example active
           */
          status: string;
          /**
           * Timezone
           * @description User's timezone
           * @example America/New_York
           */
          timezone: string;
          /**
           * Updated At
           * @description Timestamp when the user account was last updated
           * @default null
           * @example 2023-06-01T09:30:00Z
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
   * Request Path
   * @description API request path returned for debugging
   */
  request_path?: string;
  /**
   * Server Timestamp
   * @description Server UNIX timestamp when response was generated
   */
  server_timestamp?: number;
  /**
   * Status
   * @description Response status, e.g., 'ok'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_LIST_WEBHOOKS tool input.
 */
type CLASSMARKER_LIST_WEBHOOKS_INPUT = object;

/**
 * Type of CLASSMARKER's CLASSMARKER_LIST_WEBHOOKS tool output.
 */
type CLASSMARKER_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Path
       * @description Echoed API request path for debugging
       */
      request_path: string;
      /**
       * Server Timestamp
       * @description Server UNIX timestamp when response was generated
       */
      server_timestamp: number;
      /**
       * Status
       * @description Response status, e.g., 'ok' or 'no_results'
       */
      status: string;
      /**
       * Webhooks
       * @description List of webhooks configured in the account
       */
      webhooks?: {
          /**
           * Events
           * @description List of events for which the webhook is triggered
           */
          events: string[];
          /**
           * Url
           * @description Callback URL of the webhook
           */
          url: string;
          /**
           * Webhook Id
           * @description Unique identifier of the webhook
           */
          webhook_id: string;
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
 * Type of CLASSMARKER's CLASSMARKER_PUT_CATEGORY tool input.
 */
type CLASSMARKER_PUT_CATEGORY_INPUT = {
  /**
   * Category Id
   * @description ID of the sub-category to update
   */
  category_id?: number;
  /**
   * Category Name
   * @description New name for the sub-category
   */
  category_name?: string;
  /**
   * Parent Category Id
   * @description New parent category ID for the sub-category
   */
  parent_category_id?: number;
  /**
   * Path Parent Category Id
   * @description ID of the current parent category containing the sub-category
   */
  path_parent_category_id?: number;
  /**
   * Verify Only
   * @description If true, only validate the request without applying changes
   * @default false
   */
  verify_only: boolean | null;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_PUT_CATEGORY tool output.
 */
type CLASSMARKER_PUT_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Response payload containing updated sub-category details
   */
  data?: {
      /**
       * Category
       * @description Updated sub-category details
       */
      category: {
          /**
           * Category Id
           * @description ID of the updated sub-category
           */
          category_id: number;
          /**
           * Category Name
           * @description Name of the updated sub-category
           */
          category_name: string;
          /**
           * Parent Category Id
           * @description Parent category ID of the updated sub-category
           */
          parent_category_id: number;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Path
   * @description Echoed API request path
   */
  request_path?: string;
  /**
   * Server Timestamp
   * @description Server's UNIX timestamp in seconds
   */
  server_timestamp?: number;
  /**
   * Status
   * @description Request status, e.g., 'ok'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_PUT_PARENT_CATEGORY tool input.
 */
type CLASSMARKER_PUT_PARENT_CATEGORY_INPUT = {
  /**
   * Parent Category Id
   * @description ID of the parent category to update
   */
  parent_category_id?: number;
  /**
   * Parent Category Name
   * @description New name for the parent category
   */
  parent_category_name?: string;
  /**
   * Verify Only
   * @description If true, only validates parameters without updating the category
   * @default false
   */
  verify_only: boolean | null;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_PUT_PARENT_CATEGORY tool output.
 */
type CLASSMARKER_PUT_PARENT_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Wrapped response data for the updated parent category
   */
  data?: {
      /**
       * Parent Category
       * @description Container for updated parent category details
       */
      parent_category: {
          /**
           * Categories
           * @description Child categories under this parent
           * @default []
           */
          categories: {
              /**
               * Category Id
               * @description Category ID
               */
              category_id: number;
              /**
               * Category Name
               * @description Category name
               */
              category_name: string;
              /**
               * Parent Category Id
               * @description ID of the parent category for this category
               */
              parent_category_id: number;
          }[];
          /**
           * Parent Category Id
           * @description The parent category ID
           */
          parent_category_id: number;
          /**
           * Parent Category Name
           * @description The parent category name
           */
          parent_category_name: string;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Request Path
   * @description Echoed API path
   */
  request_path?: string;
  /**
   * Server Timestamp
   * @description Server UNIX timestamp in seconds
   */
  server_timestamp?: number;
  /**
   * Status
   * @description Request status, e.g., 'ok'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_PUT_QUESTION tool input.
 */
type CLASSMARKER_PUT_QUESTION_INPUT = {
  /**
   * Category Id
   * @description Category identifier for this question.
   */
  category_id?: number;
  /**
   * Correct Feedback
   * @description Optional feedback message for correct answers.
   * @default null
   */
  correct_feedback: string | null;
  /**
   * Correct Options
   * @description List of letters for correct options; single value for multiplechoice/truefalse, multiple allowed for multipleresponse.
   * @default null
   */
  correct_options: string[] | null;
  /**
   * Grade Style
   * @description Grading style for multipleresponse type only.
   * @default null
   * @enum {string|null}
   */
  grade_style: "partial_with_deduction" | "partial_without_deduction" | "off" | null;
  /**
   * Incorrect Feedback
   * @description Optional feedback message for incorrect answers.
   * @default null
   */
  incorrect_feedback: string | null;
  /**
   * Options
   * @description Map of option letters (A-J) to {'content': text}; required for choice and truefalse types.
   * @default null
   */
  options: {
      [key: string]: {
          [key: string]: string;
      };
  } | null;
  /**
   * Points
   * @description Points awarded for a correct answer.
   */
  points?: number;
  /**
   * Question
   * @description The text of the question to update.
   */
  question?: string;
  /**
   * Question Id
   * @description ID of the question to update
   */
  question_id?: number;
  /**
   * Question Type
   * @description One of the question types: multiplechoice, multipleresponse, truefalse, essay
   * @enum {string}
   */
  question_type?: "multiplechoice" | "multipleresponse" | "truefalse" | "essay";
  /**
   * Random Answers
   * @description Whether to randomize the order of options (for choice types).
   */
  random_answers?: boolean;
  /**
   * Verify Only
   * @description If true, payload is validated without updating; returns status 'verified'.
   * @default false
   */
  verify_only: boolean | null;
};

/**
 * Type of CLASSMARKER's CLASSMARKER_PUT_QUESTION tool output.
 */
type CLASSMARKER_PUT_QUESTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category Id
       * @description Category identifier.
       * @default null
       */
      category_id: number | null;
      /**
       * Correct Feedback
       * @description Feedback for correct answer.
       * @default null
       */
      correct_feedback: string | null;
      /**
       * Correct Options
       * @description List of correct option letters.
       * @default null
       */
      correct_options: string[] | null;
      /**
       * Grade Style
       * @description Grading style for multipleresponse.
       * @default null
       * @enum {string|null}
       */
      grade_style: "partial_with_deduction" | "partial_without_deduction" | "off" | null;
      /**
       * Incorrect Feedback
       * @description Feedback for incorrect answer.
       * @default null
       */
      incorrect_feedback: string | null;
      /**
       * Last Updated Timestamp
       * @description UNIX timestamp of last update.
       * @default null
       */
      last_updated_timestamp: number | null;
      /**
       * Options
       * @description Options map for choice and truefalse types.
       * @default null
       */
      options: {
          [key: string]: {
              [key: string]: string;
          };
      } | null;
      /**
       * Points
       * @description Points awarded for a correct answer.
       * @default null
       */
      points: number | null;
      /**
       * Question
       * @description Question text.
       * @default null
       */
      question: string | null;
      /**
       * Question Id
       * @description Unique question identifier.
       * @default null
       */
      question_id: number | null;
      /**
       * Question Type
       * @description Type of the question.
       * @default null
       * @enum {string|null}
       */
      question_type: "multiplechoice" | "multipleresponse" | "truefalse" | "essay" | null;
      /**
       * Random Answers
       * @description Whether options are randomized.
       * @default null
       */
      random_answers: boolean | null;
      /**
       * Request Path
       * @description API endpoint path when verify_only=True is used.
       * @default null
       */
      request_path: string | null;
      /**
       * Server Timestamp
       * @description Server UNIX timestamp when verify_only=True is used.
       * @default null
       */
      server_timestamp: number | null;
      /**
       * Status
       * @description 'active' or 'archived' for updates; 'verified' when verify_only=True
       * @enum {string}
       */
      status: "active" | "archived" | "verified";
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
 * Type map of all available tool input types for toolkit "CLASSMARKER".
 */
export type CLASSMARKER_TOOL_INPUTS = {
  CREATE_ACCESS_LIST_ITEM: CLASSMARKER_CREATE_ACCESS_LIST_ITEM_INPUT
  CREATE_CATEGORY: CLASSMARKER_CREATE_CATEGORY_INPUT
  CREATE_GROUP: CLASSMARKER_CREATE_GROUP_INPUT
  CREATE_QUESTION: CLASSMARKER_CREATE_QUESTION_INPUT
  CREATE_USER: CLASSMARKER_CREATE_USER_INPUT
  DELETE_ACCESS_LIST_ITEM: CLASSMARKER_DELETE_ACCESS_LIST_ITEM_INPUT
  DELETE_API_KEY: CLASSMARKER_DELETE_API_KEY_INPUT
  DELETE_GROUP: CLASSMARKER_DELETE_GROUP_INPUT
  DELETE_TEST_LINK: CLASSMARKER_DELETE_TEST_LINK_INPUT
  DELETE_USER: CLASSMARKER_DELETE_USER_INPUT
  DELETE_WEBHOOK: CLASSMARKER_DELETE_WEBHOOK_INPUT
  GET_ALL_GROUPS_LINKS_EXAMS: CLASSMARKER_GET_ALL_GROUPS_LINKS_EXAMS_INPUT
  GET_GROUP_DETAILS: CLASSMARKER_GET_GROUP_DETAILS_INPUT
  GET_INITIAL_FINISHED_AFTER_TIMESTAMP: CLASSMARKER_GET_INITIAL_FINISHED_AFTER_TIMESTAMP_INPUT
  GET_QUESTION: CLASSMARKER_GET_QUESTION_INPUT
  GET_RECENT_RESULTS_GROUP_EXAM: CLASSMARKER_GET_RECENT_RESULTS_GROUP_EXAM_INPUT
  GET_RECENT_RESULTS_LINK_EXAM: CLASSMARKER_GET_RECENT_RESULTS_LINK_EXAM_INPUT
  GET_TEST_DETAILS: CLASSMARKER_GET_TEST_DETAILS_INPUT
  GET_USER_DETAILS: CLASSMARKER_GET_USER_DETAILS_INPUT
  LIST_ASSIGNMENTS: CLASSMARKER_LIST_ASSIGNMENTS_INPUT
  LIST_CATEGORIES: CLASSMARKER_LIST_CATEGORIES_INPUT
  LIST_CERTIFICATES: CLASSMARKER_LIST_CERTIFICATES_INPUT
  LIST_GROUPS: CLASSMARKER_LIST_GROUPS_INPUT
  LIST_QUESTIONS: CLASSMARKER_LIST_QUESTIONS_INPUT
  LIST_RECENT_RESULTS_FOR_GROUPS: CLASSMARKER_LIST_RECENT_RESULTS_FOR_GROUPS_INPUT
  LIST_RECENT_RESULTS_FOR_LINKS: CLASSMARKER_LIST_RECENT_RESULTS_FOR_LINKS_INPUT
  LIST_TESTS: CLASSMARKER_LIST_TESTS_INPUT
  LIST_USERS: CLASSMARKER_LIST_USERS_INPUT
  LIST_WEBHOOKS: CLASSMARKER_LIST_WEBHOOKS_INPUT
  PUT_CATEGORY: CLASSMARKER_PUT_CATEGORY_INPUT
  PUT_PARENT_CATEGORY: CLASSMARKER_PUT_PARENT_CATEGORY_INPUT
  PUT_QUESTION: CLASSMARKER_PUT_QUESTION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLASSMARKER".
 */
export type CLASSMARKER_TOOL_OUTPUTS = {
  CREATE_ACCESS_LIST_ITEM: CLASSMARKER_CREATE_ACCESS_LIST_ITEM_OUTPUT
  CREATE_CATEGORY: CLASSMARKER_CREATE_CATEGORY_OUTPUT
  CREATE_GROUP: CLASSMARKER_CREATE_GROUP_OUTPUT
  CREATE_QUESTION: CLASSMARKER_CREATE_QUESTION_OUTPUT
  CREATE_USER: CLASSMARKER_CREATE_USER_OUTPUT
  DELETE_ACCESS_LIST_ITEM: CLASSMARKER_DELETE_ACCESS_LIST_ITEM_OUTPUT
  DELETE_API_KEY: CLASSMARKER_DELETE_API_KEY_OUTPUT
  DELETE_GROUP: CLASSMARKER_DELETE_GROUP_OUTPUT
  DELETE_TEST_LINK: CLASSMARKER_DELETE_TEST_LINK_OUTPUT
  DELETE_USER: CLASSMARKER_DELETE_USER_OUTPUT
  DELETE_WEBHOOK: CLASSMARKER_DELETE_WEBHOOK_OUTPUT
  GET_ALL_GROUPS_LINKS_EXAMS: CLASSMARKER_GET_ALL_GROUPS_LINKS_EXAMS_OUTPUT
  GET_GROUP_DETAILS: CLASSMARKER_GET_GROUP_DETAILS_OUTPUT
  GET_INITIAL_FINISHED_AFTER_TIMESTAMP: CLASSMARKER_GET_INITIAL_FINISHED_AFTER_TIMESTAMP_OUTPUT
  GET_QUESTION: CLASSMARKER_GET_QUESTION_OUTPUT
  GET_RECENT_RESULTS_GROUP_EXAM: CLASSMARKER_GET_RECENT_RESULTS_GROUP_EXAM_OUTPUT
  GET_RECENT_RESULTS_LINK_EXAM: CLASSMARKER_GET_RECENT_RESULTS_LINK_EXAM_OUTPUT
  GET_TEST_DETAILS: CLASSMARKER_GET_TEST_DETAILS_OUTPUT
  GET_USER_DETAILS: CLASSMARKER_GET_USER_DETAILS_OUTPUT
  LIST_ASSIGNMENTS: CLASSMARKER_LIST_ASSIGNMENTS_OUTPUT
  LIST_CATEGORIES: CLASSMARKER_LIST_CATEGORIES_OUTPUT
  LIST_CERTIFICATES: CLASSMARKER_LIST_CERTIFICATES_OUTPUT
  LIST_GROUPS: CLASSMARKER_LIST_GROUPS_OUTPUT
  LIST_QUESTIONS: CLASSMARKER_LIST_QUESTIONS_OUTPUT
  LIST_RECENT_RESULTS_FOR_GROUPS: CLASSMARKER_LIST_RECENT_RESULTS_FOR_GROUPS_OUTPUT
  LIST_RECENT_RESULTS_FOR_LINKS: CLASSMARKER_LIST_RECENT_RESULTS_FOR_LINKS_OUTPUT
  LIST_TESTS: CLASSMARKER_LIST_TESTS_OUTPUT
  LIST_USERS: CLASSMARKER_LIST_USERS_OUTPUT
  LIST_WEBHOOKS: CLASSMARKER_LIST_WEBHOOKS_OUTPUT
  PUT_CATEGORY: CLASSMARKER_PUT_CATEGORY_OUTPUT
  PUT_PARENT_CATEGORY: CLASSMARKER_PUT_PARENT_CATEGORY_OUTPUT
  PUT_QUESTION: CLASSMARKER_PUT_QUESTION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLASSMARKER toolkit.
 */
export const CLASSMARKER = {
  slug: "classmarker",
  tools: {
    /**
     * Tool to add one or more access codes to an access list. Use after obtaining a valid access_list_id to grant exam access.
     */
    CREATE_ACCESS_LIST_ITEM: "CLASSMARKER_CREATE_ACCESS_LIST_ITEM",
    /**
     * Tool to create a new question category. Use after confirming the parent category ID.
     */
    CREATE_CATEGORY: "CLASSMARKER_CREATE_CATEGORY",
    /**
     * Tool to create a new group. Use when you need to organize users into a specific group after planning your user structure.
     */
    CREATE_GROUP: "CLASSMARKER_CREATE_GROUP",
    /**
     * Tool to create a new question with specified text, type, and category. Use after finalizing details. Set verify_only=True to validate without creating.
     */
    CREATE_QUESTION: "CLASSMARKER_CREATE_QUESTION",
    /**
     * Tool to create a new user in ClassMarker. Use after gathering user details to provision accounts. Provide user info and optional group assignments. Returns the complete API response.
     */
    CREATE_USER: "CLASSMARKER_CREATE_USER",
    /**
     * Tool to delete one or more codes from an access list. Use after confirming the list exists.
     */
    DELETE_ACCESS_LIST_ITEM: "CLASSMARKER_DELETE_ACCESS_LIST_ITEM",
    /**
     * Tool to delete an API key by its ID. Use when you need to revoke an API key immediately.
     */
    DELETE_API_KEY: "CLASSMARKER_DELETE_API_KEY",
    /**
     * Tool to delete a group by its ID. Use when you need to remove a group from ClassMarker.
     */
    DELETE_GROUP: "CLASSMARKER_DELETE_GROUP",
    /**
     * Tool to delete a specific test link. Use after confirming the test and link IDs.
     */
    DELETE_TEST_LINK: "CLASSMARKER_DELETE_TEST_LINK",
    /**
     * Tool to delete a specific user by ID. Use when you need to remove a user from ClassMarker after verifying the user's identity.
     */
    DELETE_USER: "CLASSMARKER_DELETE_USER",
    /**
     * Tool to delete a specific webhook listener. Use after confirming the webhook_id for removal.
     */
    DELETE_WEBHOOK: "CLASSMARKER_DELETE_WEBHOOK",
    /**
     * Tool to retrieve all available groups, links, and their exams. Use when you need an overview of all resources your credentials permit.
     */
    GET_ALL_GROUPS_LINKS_EXAMS: "CLASSMARKER_GET_ALL_GROUPS_LINKS_EXAMS",
    /**
     * Tool to retrieve detailed information about a specific group. Use after obtaining the group ID to inspect its properties.
     */
    GET_GROUP_DETAILS: "CLASSMARKER_GET_GROUP_DETAILS",
    /**
     * Tool to compute the initial finishedAfter timestamp. Use when performing initial pagination of recent results. Defaults to two weeks ago.
     */
    GET_INITIAL_FINISHED_AFTER_TIMESTAMP: "CLASSMARKER_GET_INITIAL_FINISHED_AFTER_TIMESTAMP",
    /**
     * Tool to retrieve a specific question by its ID. Use when you need detailed information of a question after confirming the question_id.
     */
    GET_QUESTION: "CLASSMARKER_GET_QUESTION",
    /**
     * Tool to fetch recent test results for a specific group and exam. Use after determining a UNIX timestamp to retrieve only results finished after that time for the group and exam.
     */
    GET_RECENT_RESULTS_GROUP_EXAM: "CLASSMARKER_GET_RECENT_RESULTS_GROUP_EXAM",
    /**
     * Tool to fetch recent results for a specific link and exam. Use after identifying link and test IDs to paginate results.
     */
    GET_RECENT_RESULTS_LINK_EXAM: "CLASSMARKER_GET_RECENT_RESULTS_LINK_EXAM",
    /**
     * Tool to retrieve detailed information for a specific test. Use when you need test metadata and its assigned contexts by ID.
     */
    GET_TEST_DETAILS: "CLASSMARKER_GET_TEST_DETAILS",
    /**
     * Tool to retrieve detailed information about a specific user. Use after you have the user's ID and need the full user profile.
     */
    GET_USER_DETAILS: "CLASSMARKER_GET_USER_DETAILS",
    /**
     * Tool to list all assignments. Use when you need every test assignment grouped by group and link.
     */
    LIST_ASSIGNMENTS: "CLASSMARKER_LIST_ASSIGNMENTS",
    /**
     * Tool to retrieve all question categories. Use when you need to display or process category hierarchy.
     */
    LIST_CATEGORIES: "CLASSMARKER_LIST_CATEGORIES",
    /**
     * Tool to list all certificates. Use when you need to retrieve all certificates available in the account.
     */
    LIST_CERTIFICATES: "CLASSMARKER_LIST_CERTIFICATES",
    /**
     * Tool to list all groups in your ClassMarker account. Use when you need to view group details and associated tests.
     */
    LIST_GROUPS: "CLASSMARKER_LIST_GROUPS",
    /**
     * Tool to list all questions. Use when you need to fetch or enumerate your account's question bank.
     */
    LIST_QUESTIONS: "CLASSMARKER_LIST_QUESTIONS",
    /**
     * Tool to retrieve recent exam results for all groups. Use after determining the timestamp when you need to fetch results finished after a specific UNIX time (<3 months old).
     */
    LIST_RECENT_RESULTS_FOR_GROUPS: "CLASSMARKER_LIST_RECENT_RESULTS_FOR_GROUPS",
    /**
     * Tool to retrieve recent exam results for all links. Use when you need to fetch new results since a previous timestamp to avoid duplicates.
     */
    LIST_RECENT_RESULTS_FOR_LINKS: "CLASSMARKER_LIST_RECENT_RESULTS_FOR_LINKS",
    /**
     * Tool to list all available tests. Use when you need an overview of every test before assignment or reporting.
     */
    LIST_TESTS: "CLASSMARKER_LIST_TESTS",
    /**
     * Tool to list all users. Use when you need to retrieve every user in your account after confirming authentication.
     */
    LIST_USERS: "CLASSMARKER_LIST_USERS",
    /**
     * Tool to retrieve all configured webhooks. Use when you need to programmatically list your webhook configurations.
     */
    LIST_WEBHOOKS: "CLASSMARKER_LIST_WEBHOOKS",
    /**
     * Tool to update an existing sub-category. Use when you need to rename or move a sub-category after confirming its IDs.
     */
    PUT_CATEGORY: "CLASSMARKER_PUT_CATEGORY",
    /**
     * Tool to update an existing parent category. Use after confirming the parent category ID.
     */
    PUT_PARENT_CATEGORY: "CLASSMARKER_PUT_PARENT_CATEGORY",
    /**
     * Tool to update an existing question in the question bank. Use after confirming the question ID and payload details. Set verify_only=True to validate without applying updates.
     */
    PUT_QUESTION: "CLASSMARKER_PUT_QUESTION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLASSMARKER".
 */
export type CLASSMARKER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLASSMARKER".
 */
export type CLASSMARKER_TRIGGER_EVENTS = {}
