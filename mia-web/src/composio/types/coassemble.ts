// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of COASSEMBLE's COASSEMBLE_GET_CLIENTS tool input.
 */
type COASSEMBLE_GET_CLIENTS_INPUT = {
  /**
   * Page
   * @description Page number to return (1-indexed).
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (max 200).
   * @default 20
   */
  per_page: number | null;
};

/**
 * Type of COASSEMBLE's COASSEMBLE_GET_CLIENTS tool output.
 */
type COASSEMBLE_GET_CLIENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clients
       * @description List of client objects on this page.
       */
      clients: {
          /**
           * Id
           * @description Client ID.
           */
          id: number;
          /**
           * Name
           * @description Client name.
           */
          name: string;
      }[];
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of results per page.
           */
          per_page: number;
          /**
           * Total Count
           * @description Total number of clients.
           */
          total_count: number;
          /**
           * Total Pages
           * @description Total number of pages.
           */
          total_pages: number;
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
 * Type of COASSEMBLE's COASSEMBLE_GET_COURSES tool input.
 */
type COASSEMBLE_GET_COURSES_INPUT = {
  /**
   * Client Identifier
   * @description Filter to courses created by this client identifier
   */
  clientIdentifier?: string;
  /**
   * Identifier
   * @description Filter to courses created by this identifier
   */
  identifier?: string;
  /**
   * Length
   * @description Number of courses to return
   */
  length?: number;
  /**
   * Page
   * @description Page of courses to return
   */
  page?: number;
};

/**
 * Type of COASSEMBLE's COASSEMBLE_GET_COURSES tool output.
 */
type COASSEMBLE_GET_COURSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Courses
       * @description List of courses retrieved
       */
      courses: {
          /**
           * Active
           * @description Indicates if the course is active
           */
          active: boolean;
          /**
           * Description
           * @description Course description
           * @default null
           */
          description: string | null;
          /**
           * Emails
           * @description Associated emails
           */
          emails: string[];
          /**
           * Id
           * @description Course ID
           */
          id: string;
          /**
           * Identified
           * @description Indicates if the course is identified
           */
          identified: boolean;
          /**
           * Image
           * @description URL to the course image
           * @default null
           */
          image: string | null;
          /**
           * Key
           * @description Course key
           * @default null
           */
          key: string | null;
          /**
           * Private
           * @description Indicates if the course is private
           */
          private: boolean;
          /**
           * Source
           * @description Source of the course
           * @default null
           */
          source: string | null;
          /**
           * Thumbnail
           * @description URL to the course thumbnail
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Course title
           */
          title: string;
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
 * Type of COASSEMBLE's COASSEMBLE_GET_TRACKINGS tool input.
 */
type COASSEMBLE_GET_TRACKINGS_INPUT = {
  /**
   * Client Identifier
   * @description Filter to trackings associated with this clientIdentifier
   * @default null
   */
  clientIdentifier: string | null;
  /**
   * Completed
   * @description Return only completed (true) or only incomplete (false) trackings
   * @default null
   */
  completed: boolean | null;
  /**
   * End
   * @description Filter to trackings created before this date (ISO 8601 format, e.g., YYYY-MM-DD)
   * @default null
   */
  end: string | null;
  /**
   * Id
   * @description Filter to trackings for a specific Course ID
   * @default null
   */
  id: number | null;
  /**
   * Identifier
   * @description Filter to trackings associated with this identifier
   * @default null
   */
  identifier: string | null;
  /**
   * Length
   * @description Number of items per page (0–100)
   * @default null
   */
  length: number | null;
  /**
   * Page
   * @description Zero-based page index to retrieve
   * @default null
   */
  page: number | null;
  /**
   * Start
   * @description Filter to trackings created after this date (ISO 8601 format, e.g., YYYY-MM-DD)
   * @default null
   */
  start: string | null;
};

/**
 * Type of COASSEMBLE's COASSEMBLE_GET_TRACKINGS tool output.
 */
type COASSEMBLE_GET_TRACKINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Trackings
       * @description List of tracking records retrieved
       */
      trackings: {
          /**
           * Client Identifier
           * @description Client identifier associated with the tracking
           */
          clientIdentifier: string;
          /**
           * Completed
           * @description Completion status
           */
          completed: boolean;
          /**
           * Course Id
           * @description Associated Course ID
           */
          courseId: number;
          /**
           * Created At
           * @description Creation date in ISO 8601 format
           */
          createdAt: string;
          /**
           * Id
           * @description Tracking ID
           */
          id: number;
          /**
           * Identifier
           * @description Identifier associated with the tracking
           */
          identifier: string;
          /**
           * Progress
           * @description Progress percentage
           */
          progress: number;
          /**
           * Updated At
           * @description Last update date in ISO 8601 format
           */
          updatedAt: string;
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
 * Type of COASSEMBLE's COASSEMBLE_GET_USERS tool input.
 */
type COASSEMBLE_GET_USERS_INPUT = {
  /**
   * Client Identifier
   * @description Filter users by clientIdentifier.
   * @default null
   */
  clientIdentifier: string | null;
  /**
   * Length
   * @description Number of results to return. Default is 100.
   * @default 100
   */
  length: number | null;
  /**
   * Page
   * @description Page number to return (0-indexed). Default is 0.
   * @default 0
   */
  page: number | null;
};

/**
 * Type of COASSEMBLE's COASSEMBLE_GET_USERS tool output.
 */
type COASSEMBLE_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Current Page
           * @description Current page number.
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of results per page.
           */
          per_page: number;
          /**
           * Total Count
           * @description Total number of users.
           */
          total_count: number;
          /**
           * Total Pages
           * @description Total number of pages.
           */
          total_pages: number;
      };
      /**
       * Users
       * @description List of user objects on this page.
       */
      users: {
          /**
           * Client Identifier
           * @description Client identifier associated with the user.
           * @default null
           */
          clientIdentifier: string | null;
          /**
           * Created At
           * @description ISO8601 timestamp when the user was created.
           * @default null
           */
          createdAt: string | null;
          /**
           * Email
           * @description Email address of the user.
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description First name of the user.
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description User ID.
           */
          id: string;
          /**
           * Last Name
           * @description Last name of the user.
           * @default null
           */
          lastName: string | null;
          /**
           * Updated At
           * @description ISO8601 timestamp when the user was last updated.
           * @default null
           */
          updatedAt: string | null;
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
 * Type map of all available tool input types for toolkit "COASSEMBLE".
 */
export type COASSEMBLE_TOOL_INPUTS = {
  GET_CLIENTS: COASSEMBLE_GET_CLIENTS_INPUT
  GET_COURSES: COASSEMBLE_GET_COURSES_INPUT
  GET_TRACKINGS: COASSEMBLE_GET_TRACKINGS_INPUT
  GET_USERS: COASSEMBLE_GET_USERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "COASSEMBLE".
 */
export type COASSEMBLE_TOOL_OUTPUTS = {
  GET_CLIENTS: COASSEMBLE_GET_CLIENTS_OUTPUT
  GET_COURSES: COASSEMBLE_GET_COURSES_OUTPUT
  GET_TRACKINGS: COASSEMBLE_GET_TRACKINGS_OUTPUT
  GET_USERS: COASSEMBLE_GET_USERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's COASSEMBLE toolkit.
 */
export const COASSEMBLE = {
  slug: "coassemble",
  tools: {
    /**
     * Tool to retrieve a paginated list of clients. use when you need to browse or process organisation records sequentially.
     */
    GET_CLIENTS: "COASSEMBLE_GET_CLIENTS",
    /**
     * Tool to retrieve all courses with optional filters and pagination. use when you need to list courses after setting identifier and client identifier, and control page size and number.
     */
    GET_COURSES: "COASSEMBLE_GET_COURSES",
    /**
     * Tool to retrieve tracking objects with filters. use when you need to fetch learner progress data filtered by course id, date range, identifier, or completion status.
     */
    GET_TRACKINGS: "COASSEMBLE_GET_TRACKINGS",
    /**
     * Tool to retrieve a paginated list of users. use when you need to browse or process user records optionally filtered by clientidentifier.
     */
    GET_USERS: "COASSEMBLE_GET_USERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "COASSEMBLE".
 */
export type COASSEMBLE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "COASSEMBLE".
 */
export type COASSEMBLE_TRIGGER_EVENTS = {}
