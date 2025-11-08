// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LESSONSPACE's LESSONSPACE_CREATE_DEMO_SPACE tool input.
 */
type LESSONSPACE_CREATE_DEMO_SPACE_INPUT = object;

/**
 * Type of LESSONSPACE's LESSONSPACE_CREATE_DEMO_SPACE tool output.
 */
type LESSONSPACE_CREATE_DEMO_SPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expires At
       * @description ISO8601 timestamp when the demo space will automatically expire.
       */
      expiresAt: string;
      /**
       * Space Id
       * @description Unique identifier for the created demo space.
       */
      spaceId: string;
      /**
       * Url
       * @description The URL at which the newly created demo space can be embedded.
       */
      url: string;
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
 * Type of LESSONSPACE's LESSONSPACE_GET_ORGANISATION_DETAILS tool input.
 */
type LESSONSPACE_GET_ORGANISATION_DETAILS_INPUT = object;

/**
 * Type of LESSONSPACE's LESSONSPACE_GET_ORGANISATION_DETAILS tool output.
 */
type LESSONSPACE_GET_ORGANISATION_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Organisation's country
       */
      country: string;
      /**
       * Created
       * @description ISO8601 creation date of the organisation
       */
      created: string;
      /**
       * Id
       * @description Organisation ID
       */
      id: string;
      /**
       * Name
       * @description Organisation name
       */
      name: string;
      /**
       * Plan
       * @description Current plan name
       */
      plan: string;
      /**
       * Spaces Limit
       * @description Maximum spaces allowed
       */
      spaces_limit: number;
      /**
       * Spaces Remaining
       * @description Spaces remaining
       */
      spaces_remaining: number;
      /**
       * Spaces Used
       * @description Number of spaces currently used
       */
      spaces_used: number;
      /**
       * Timezone
       * @description Organisation's timezone
       */
      timezone: string;
      /**
       * Users Limit
       * @description Maximum users allowed
       */
      users_limit: number;
      /**
       * Users Remaining
       * @description Users remaining
       */
      users_remaining: number;
      /**
       * Users Used
       * @description Number of users currently used
       */
      users_used: number;
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
 * Type of LESSONSPACE's LESSONSPACE_GET_ORGANISATION_SESSION_LIST tool input.
 */
type LESSONSPACE_GET_ORGANISATION_SESSION_LIST_INPUT = {
  /**
   * Ordering
   * @description Sort field, prefix with '-' for descending (e.g., '-created')
   * @default null
   */
  ordering: string | null;
  /**
   * Organisation
   * @description Unique identifier of the organisation
   */
  organisation?: string;
  /**
   * Page
   * @description Page number for paginated results, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of sessions per page, must be >= 1
   * @default null
   */
  page_size: number | null;
  /**
   * Search
   * @description Filter sessions by ID, title, or user
   * @default null
   */
  search: string | null;
};

/**
 * Type of LESSONSPACE's LESSONSPACE_GET_ORGANISATION_SESSION_LIST tool output.
 */
type LESSONSPACE_GET_ORGANISATION_SESSION_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of sessions
       */
      count: number;
      /**
       * Next
       * @description URL for next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of session objects for this page
       */
      results: {
          /**
           * Created
           * @description Timestamp when the session was created
           */
          created: string;
          /**
           * Id
           * @description Unique session ID
           */
          id: string;
          /**
           * Scheduled End
           * @description Scheduled end time in ISO 8601 format, if ended
           * @default null
           */
          scheduled_end: string | null;
          /**
           * Scheduled Start
           * @description Scheduled start time in ISO 8601 format
           */
          scheduled_start: string;
          /**
           * Space Id
           * @description Associated space ID
           */
          space_id: string;
          /**
           * Status
           * @description Current status of the session
           */
          status: string;
          /**
           * Title
           * @description Session title
           */
          title: string;
          /**
           * Url
           * @description URL to access the session
           */
          url: string;
          /**
           * User
           * @description Host user object
           */
          user: {
              /**
               * Email
               * @description User's email address
               */
              email: string;
              /**
               * Id
               * @description Unique user ID
               */
              id: string;
              /**
               * Name
               * @description User's full name
               */
              name: string;
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
 * Type of LESSONSPACE's LESSONSPACE_LAUNCH_SPACE tool input.
 */
type LESSONSPACE_LAUNCH_SPACE_INPUT = {
  /**
   * Avatar
   * Format: uri
   * @description URL to the user's avatar image.
   * @default null
   */
  avatar: string | null;
  /**
   * Config
   * @description Advanced space configuration options as a JSON object.
   * @default null
   */
  config: {
      [key: string]: unknown;
  } | null;
  /**
   * Exp
   * @description Session expiration in seconds (non-negative).
   * @default null
   */
  exp: number | null;
  /**
   * Language
   * @description IETF language tag for the session locale.
   * @default null
   */
  language: string | null;
  /**
   * Name
   * @description Display name for the user.
   * @default null
   */
  name: string | null;
  /**
   * Role
   * @description Role of the user in the space.
   * @enum {string}
   */
  role?: "teacher" | "student";
  /**
   * Space Id
   * @description Identifier of the space to launch.
   */
  space_id?: string;
  /**
   * User Id
   * @description Unique identifier for the user.
   */
  user_id?: string;
};

/**
 * Type of LESSONSPACE's LESSONSPACE_LAUNCH_SPACE tool output.
 */
type LESSONSPACE_LAUNCH_SPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Session
       * @description Information about the user session.
       */
      session: {
          /**
           * Exp
           * @description Session expiration timestamp or duration.
           * @default null
           */
          exp: number | null;
          /**
           * Id
           * @description Session identifier.
           */
          id: string;
          /**
           * Role
           * @description User role in the session.
           * @enum {string}
           */
          role: "teacher" | "student";
          /**
           * User Id
           * @description User ID in the session.
           */
          user_id: string;
      } & {
          [key: string]: unknown;
      };
      /**
       * Space
       * @description Information about the space.
       */
      space: {
          /**
           * Name
           * @description Name of the space.
           * @default null
           */
          name: string | null;
          /**
           * Space Id
           * @description Identifier of the space.
           */
          space_id: string;
      } & {
          [key: string]: unknown;
      };
      /**
       * Token
       * @description JWT session authentication token.
       */
      token: string;
      /**
       * Url
       * Format: uri
       * @description URL of the launched space session.
       */
      url: string;
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
 * Type map of all available tool input types for toolkit "LESSONSPACE".
 */
export type LESSONSPACE_TOOL_INPUTS = {
  CREATE_DEMO_SPACE: LESSONSPACE_CREATE_DEMO_SPACE_INPUT
  GET_ORGANISATION_DETAILS: LESSONSPACE_GET_ORGANISATION_DETAILS_INPUT
  GET_ORGANISATION_SESSION_LIST: LESSONSPACE_GET_ORGANISATION_SESSION_LIST_INPUT
  LAUNCH_SPACE: LESSONSPACE_LAUNCH_SPACE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LESSONSPACE".
 */
export type LESSONSPACE_TOOL_OUTPUTS = {
  CREATE_DEMO_SPACE: LESSONSPACE_CREATE_DEMO_SPACE_OUTPUT
  GET_ORGANISATION_DETAILS: LESSONSPACE_GET_ORGANISATION_DETAILS_OUTPUT
  GET_ORGANISATION_SESSION_LIST: LESSONSPACE_GET_ORGANISATION_SESSION_LIST_OUTPUT
  LAUNCH_SPACE: LESSONSPACE_LAUNCH_SPACE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LESSONSPACE toolkit.
 */
export const LESSONSPACE = {
  slug: "lessonspace",
  tools: {
    /**
     * Tool to create a transient demo space for embedding in an iframe. use when you need a temporary environment to test lessonspace features.
     */
    CREATE_DEMO_SPACE: "LESSONSPACE_CREATE_DEMO_SPACE",
    /**
     * Tool to retrieve organisation details, including id, plan, and usage stats. use after authenticating with your organisation token.
     */
    GET_ORGANISATION_DETAILS: "LESSONSPACE_GET_ORGANISATION_DETAILS",
    /**
     * Tool to list sessions of an organisation. use after you have the organisation id to fetch paginated session records.
     */
    GET_ORGANISATION_SESSION_LIST: "LESSONSPACE_GET_ORGANISATION_SESSION_LIST",
    /**
     * Tool to launch a lessonspace space. use after determining user id, role, and space id.
     */
    LAUNCH_SPACE: "LESSONSPACE_LAUNCH_SPACE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LESSONSPACE".
 */
export type LESSONSPACE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LESSONSPACE".
 */
export type LESSONSPACE_TRIGGER_EVENTS = {}
