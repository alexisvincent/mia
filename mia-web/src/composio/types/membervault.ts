// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MEMBERVAULT's MEMBERVAULT_ADD_USER tool input.
 */
type MEMBERVAULT_ADD_USER_INPUT = {
  /**
   * Course Id
   * @description ID of the product (course) to grant access; use -1 to create a user without granting access to any course.
   */
  course_id?: number;
  /**
   * Email
   * Format: email
   * @description Email address of the user to add or grant access to.
   */
  email?: string;
  /**
   * First Name
   * @description Optional first name of the user.
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Optional last name of the user.
   * @default null
   */
  last_name: string | null;
};

/**
 * Type of MEMBERVAULT's MEMBERVAULT_ADD_USER tool output.
 */
type MEMBERVAULT_ADD_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Course Id
       * @description ID of the course that was granted to the user.
       */
      course_id: number;
      /**
       * Email
       * Format: email
       * @description Email address of the processed user.
       */
      email: string;
      /**
       * First Name
       * @description First name of the user, if provided.
       * @default null
       */
      first_name: string | null;
      /**
       * Last Name
       * @description Last name of the user, if provided.
       * @default null
       */
      last_name: string | null;
      /**
       * Message
       * @description Additional message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Operation status, e.g., 'success'.
       * @default null
       */
      status: string | null;
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
 * Type of MEMBERVAULT's MEMBERVAULT_DELETE_USER tool input.
 */
type MEMBERVAULT_DELETE_USER_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address of the user to completely delete
   */
  email?: unknown;
};

/**
 * Type of MEMBERVAULT's MEMBERVAULT_DELETE_USER tool output.
 */
type MEMBERVAULT_DELETE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description API response message confirming deletion
       * @default null
       */
      message: string | null;
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
 * Type of MEMBERVAULT's MEMBERVAULT_GET_COURSES tool input.
 */
type MEMBERVAULT_GET_COURSES_INPUT = object;

/**
 * Type of MEMBERVAULT's MEMBERVAULT_GET_COURSES tool output.
 */
type MEMBERVAULT_GET_COURSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Courses
       * @description List of courses (products) available in the account.
       */
      courses: {
          /**
           * Course Id
           * @description The unique identifier for the course, used for subsequent API calls.
           */
          course_id: number;
          /**
           * Course Name
           * @description The display name of the course.
           */
          course_name: string;
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
 * Type map of all available tool input types for toolkit "MEMBERVAULT".
 */
export type MEMBERVAULT_TOOL_INPUTS = {
  ADD_USER: MEMBERVAULT_ADD_USER_INPUT
  DELETE_USER: MEMBERVAULT_DELETE_USER_INPUT
  GET_COURSES: MEMBERVAULT_GET_COURSES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MEMBERVAULT".
 */
export type MEMBERVAULT_TOOL_OUTPUTS = {
  ADD_USER: MEMBERVAULT_ADD_USER_OUTPUT
  DELETE_USER: MEMBERVAULT_DELETE_USER_OUTPUT
  GET_COURSES: MEMBERVAULT_GET_COURSES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MEMBERVAULT toolkit.
 */
export const MEMBERVAULT = {
  slug: "membervault",
  tools: {
    /**
     * Tool to add a user to a specified product. use when enrolling a user into a course without duplication.
     */
    ADD_USER: "MEMBERVAULT_ADD_USER",
    /**
     * Tool to completely delete a user from the account, including all data, progress, and quiz answers (irreversible). use when you need to permanently remove a user. example: "delete user with email user@example.com"
     */
    DELETE_USER: "MEMBERVAULT_DELETE_USER",
    /**
     * Tool to retrieve all courses (products) in the membervault account. use when you need to list available courses after setting up authentication.
     */
    GET_COURSES: "MEMBERVAULT_GET_COURSES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MEMBERVAULT".
 */
export type MEMBERVAULT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MEMBERVAULT".
 */
export type MEMBERVAULT_TRIGGER_EVENTS = {}
