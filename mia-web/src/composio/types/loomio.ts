// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LOOMIO's LOOMIO_LIST_GROUPS tool input.
 */
type LOOMIO_LIST_GROUPS_INPUT = {
  /**
   * Filter
   * @description Search phrase to filter groups by name or description.
   * @default null
   */
  filter: string | null;
  /**
   * Includes
   * @description List of related records to include (e.g., 'members').
   * @default null
   */
  includes: string[] | null;
  /**
   * Page
   * @description Page number to retrieve (pagination). Must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of groups per page (pagination). Must be >= 1.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of LOOMIO's LOOMIO_LIST_GROUPS tool output.
 */
type LOOMIO_LIST_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Groups
       * @description List of group objects.
       */
      groups: ({
          /**
           * Avatar Url
           * @description URL of the group avatar image.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Created At
           * @description ISO8601 timestamp when group was created.
           */
          created_at: string;
          /**
           * Description
           * @description Description of the group.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique group identifier.
           */
          id: number;
          /**
           * Name
           * @description Name of the group.
           */
          name: string;
      } & {
          [key: string]: unknown;
      })[];
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Page
           * @description Current page number.
           */
          page: number;
          /**
           * Per Page
           * @description Number of groups returned per page.
           */
          per_page: number;
          /**
           * Total Count
           * @description Total number of groups matching criteria.
           */
          total_count: number;
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
 * Type of LOOMIO's LOOMIO_LIST_POLLS tool input.
 */
type LOOMIO_LIST_POLLS_INPUT = {
  /**
   * Context Id
   * @description Filter polls by context ID (e.g., a specific discussion).
   * @default null
   */
  context_id: number | null;
  /**
   * Group Id
   * @description Filter polls by group ID.
   * @default null
   */
  group_id: number | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of polls per page for pagination, must be >= 1.
   * @default null
   */
  per_page: number | null;
  /**
   * State
   * @description Filter polls by state: 'open' or 'closed'.
   * @default null
   * @enum {string|null}
   */
  state: "open" | "closed" | null;
};

/**
 * Type of LOOMIO's LOOMIO_LIST_POLLS tool output.
 */
type LOOMIO_LIST_POLLS_OUTPUT = {
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
           * @description Number of polls per page.
           */
          per_page: number;
          /**
           * Total Count
           * @description Total number of polls.
           */
          total_count: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          total_pages: number;
      };
      /**
       * Polls
       * @description List of poll objects.
       */
      polls: ({
          /**
           * Context Id
           * @description Associated context ID (e.g., discussion).
           * @default null
           */
          context_id: number | null;
          /**
           * Created At
           * @description Timestamp when the poll was created (ISO8601).
           */
          created_at: string;
          /**
           * Group Id
           * @description ID of the group the poll belongs to.
           */
          group_id: number;
          /**
           * Id
           * @description Unique identifier of the poll.
           */
          id: number;
          /**
           * State
           * @description Current state of the poll, e.g., 'open' or 'closed'.
           */
          state: string;
          /**
           * Title
           * @description Title of the poll.
           */
          title: string;
          /**
           * Updated At
           * @description Timestamp when the poll was last updated (ISO8601).
           */
          updated_at: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of LOOMIO's LOOMIO_SHOW_GROUP tool input.
 */
type LOOMIO_SHOW_GROUP_INPUT = {
  /**
   * Group Id
   * @description The unique identifier of the Loomio group to retrieve.
   */
  group_id?: number;
};

/**
 * Type of LOOMIO's LOOMIO_SHOW_GROUP tool output.
 */
type LOOMIO_SHOW_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the group was created.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the group.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique ID of the group.
       */
      id: number;
      /**
       * Logo Url
       * @description URL of the group's logo image.
       * @default null
       */
      logo_url: string | null;
      /**
       * Name
       * @description Name of the group.
       */
      name: string;
      /**
       * Privacy
       * @description Privacy level of the group (e.g., 'open', 'closed').
       */
      privacy: string;
      /**
       * Status
       * @description Status of the group (e.g., 'active').
       */
      status: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the group was last updated.
       */
      updated_at: string;
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
 * Type of LOOMIO's LOOMIO_SHOW_POLL tool input.
 */
type LOOMIO_SHOW_POLL_INPUT = {
  /**
   * Poll Id
   * @description The ID of the poll to retrieve
   */
  poll_id?: string;
};

/**
 * Type of LOOMIO's LOOMIO_SHOW_POLL tool output.
 */
type LOOMIO_SHOW_POLL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Closes At
       * @description Timestamp when poll closes
       * @default null
       */
      closes_at: string | null;
      /**
       * Created At
       * @description Timestamp when poll was created
       */
      created_at: string;
      /**
       * Created By Id
       * @description User ID of the poll creator
       */
      created_by_id: string;
      /**
       * Extras
       * @description Any additional fields returned by the API
       * @default null
       */
      extras: {
          [key: string]: unknown;
      } | null;
      /**
       * Group Id
       * @description Identifier of the group containing the poll
       */
      group_id: string;
      /**
       * Id
       * @description Unique identifier for the poll
       */
      id: string;
      /**
       * Kind
       * @description Type of poll, e.g. proposal or poll
       */
      kind: string;
      /**
       * Options
       * @description List of available options for this poll
       */
      options: {
          /**
           * Created At
           * @description Timestamp when this option was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the poll option
           */
          id: string;
          /**
           * Text
           * @description Display text for this option
           */
          text: string;
          /**
           * Votes
           * @description Number of votes recorded for this option
           */
          votes: number;
      }[];
      /**
       * Status
       * @description Current status of the poll, e.g. open or closed
       */
      status: string;
      /**
       * Title
       * @description Title of the poll
       */
      title: string;
      /**
       * Updated At
       * @description Timestamp when poll was last updated
       */
      updated_at: string;
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
 * Type map of all available tool input types for toolkit "LOOMIO".
 */
export type LOOMIO_TOOL_INPUTS = {
  LIST_GROUPS: LOOMIO_LIST_GROUPS_INPUT
  LIST_POLLS: LOOMIO_LIST_POLLS_INPUT
  SHOW_GROUP: LOOMIO_SHOW_GROUP_INPUT
  SHOW_POLL: LOOMIO_SHOW_POLL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LOOMIO".
 */
export type LOOMIO_TOOL_OUTPUTS = {
  LIST_GROUPS: LOOMIO_LIST_GROUPS_OUTPUT
  LIST_POLLS: LOOMIO_LIST_POLLS_OUTPUT
  SHOW_GROUP: LOOMIO_SHOW_GROUP_OUTPUT
  SHOW_POLL: LOOMIO_SHOW_POLL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LOOMIO toolkit.
 */
export const LOOMIO = {
  slug: "loomio",
  tools: {
    /**
     * Tool to list all groups accessible to the user. use when you need to retrieve and paginate user groups.
     */
    LIST_GROUPS: "LOOMIO_LIST_GROUPS",
    /**
     * Tool to list all polls accessible to the user. use when you need to retrieve poll ids and basic metadata.
     */
    LIST_POLLS: "LOOMIO_LIST_POLLS",
    /**
     * Tool to retrieve details of a specific group. use when you have a group id and need its full metadata.
     */
    SHOW_GROUP: "LOOMIO_SHOW_GROUP",
    /**
     * Tool to retrieve details of a specific poll. use when you have a poll id and need its full metadata.
     */
    SHOW_POLL: "LOOMIO_SHOW_POLL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LOOMIO".
 */
export type LOOMIO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LOOMIO".
 */
export type LOOMIO_TRIGGER_EVENTS = {}
