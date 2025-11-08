// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LIVESESSION's LIVESESSION_LIST_SESSIONS tool input.
 */
type LIVESESSION_LIST_SESSIONS_INPUT = {
  /**
   * Filter
   * @description Text filter to apply to session name or status.
   * @default null
   */
  filter: string | null;
  /**
   * Page
   * @description Page number to retrieve (1-indexed).
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of sessions per page.
   * @default null
   */
  page_size: number | null;
};

/**
 * Type of LIVESESSION's LIVESESSION_LIST_SESSIONS tool output.
 */
type LIVESESSION_LIST_SESSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sessions
       * @description List of live session objects.
       */
      sessions: {
          /**
           * End Time
           * @description ISO 8601 timestamp when the session ended, if applicable.
           * @default null
           */
          end_time: string | null;
          /**
           * Id
           * @description Unique session identifier.
           */
          id: string;
          /**
           * Name
           * @description Name or title of the session.
           */
          name: string;
          /**
           * Participants
           * @description Number of participants in the session.
           */
          participants: number;
          /**
           * Start Time
           * @description ISO 8601 timestamp when the session started.
           */
          start_time: string;
          /**
           * Status
           * @description Current status of the session.
           */
          status: string;
      }[];
      /**
       * Total
       * @description Total number of sessions matching the query.
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
 * Type map of all available tool input types for toolkit "LIVESESSION".
 */
export type LIVESESSION_TOOL_INPUTS = {
  LIST_SESSIONS: LIVESESSION_LIST_SESSIONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LIVESESSION".
 */
export type LIVESESSION_TOOL_OUTPUTS = {
  LIST_SESSIONS: LIVESESSION_LIST_SESSIONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LIVESESSION toolkit.
 */
export const LIVESESSION = {
  slug: "livesession",
  tools: {
    /**
     * Tool to list live sessions. use when you need paginated session data filtered by criteria after authentication.
     */
    LIST_SESSIONS: "LIVESESSION_LIST_SESSIONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LIVESESSION".
 */
export type LIVESESSION_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LIVESESSION".
 */
export type LIVESESSION_TRIGGER_EVENTS = {}
