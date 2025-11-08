// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SYMPLA's SYMPLA_LIST_EVENTS tool input.
 */
type SYMPLA_LIST_EVENTS_INPUT = {
  /**
   * Order
   * @description Sort order in format '<field>:<direction>' e.g., 'start_date:desc'.
   * @default null
   */
  order: string | null;
  /**
   * Page
   * @description Page number of the results (must be ≥1).
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (1–100).
   * @default 30
   */
  per_page: number | null;
  /**
   * Published
   * @description Filter events by published status (true/false).
   * @default null
   */
  published: boolean | null;
};

/**
 * Type of SYMPLA's SYMPLA_LIST_EVENTS tool output.
 */
type SYMPLA_LIST_EVENTS_OUTPUT = {
  /**
   * Data
   * @description List of event objects.
   */
  data?: {
      /**
       * Description
       * @description Event description.
       * @default null
       */
      description: string | null;
      /**
       * End Date
       * @description Event end date in ISO8601 format.
       * @default null
       */
      end_date: string | null;
      /**
       * Id
       * @description Event ID.
       */
      id: number;
      /**
       * Name
       * @description Event name.
       */
      name: string;
      /**
       * Published
       * @description Event published status.
       */
      published: boolean;
      /**
       * Start Date
       * @description Event start date in ISO8601 format.
       */
      start_date: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Pagination
   * @description Pagination details.
   */
  pagination?: {
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of items per page.
       */
      per_page: number;
      /**
       * Total Items
       * @description Total number of items.
       */
      total_items: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "SYMPLA".
 */
export type SYMPLA_TOOL_INPUTS = {
  LIST_EVENTS: SYMPLA_LIST_EVENTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SYMPLA".
 */
export type SYMPLA_TOOL_OUTPUTS = {
  LIST_EVENTS: SYMPLA_LIST_EVENTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SYMPLA toolkit.
 */
export const SYMPLA = {
  slug: "sympla",
  tools: {
    /**
     * Tool to list all events. use when you need to fetch all events created by the organizer after authentication. supports pagination and filtering by published status and sort order.
     */
    LIST_EVENTS: "SYMPLA_LIST_EVENTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SYMPLA".
 */
export type SYMPLA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SYMPLA".
 */
export type SYMPLA_TRIGGER_EVENTS = {}
