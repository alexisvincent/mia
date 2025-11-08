// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SIDETRACKER's SIDETRACKER_GET_LISTS tool input.
 */
type SIDETRACKER_GET_LISTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of lists to retrieve per page
   * @default 1
   */
  page_size: number;
};

/**
 * Type of SIDETRACKER's SIDETRACKER_GET_LISTS tool output.
 */
type SIDETRACKER_GET_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Lists
       * @description Collection of list items retrieved
       */
      lists: {
          /**
           * Created At
           * @description Timestamp when the list was created (ISO 8601 format)
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the list
           */
          id: string;
          /**
           * Name
           * @description Name of the list
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the list was last updated (ISO 8601 format)
           */
          updated_at: string;
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
 * Type of SIDETRACKER's SIDETRACKER_GET_LIST_DETAILS tool input.
 */
type SIDETRACKER_GET_LIST_DETAILS_INPUT = {
  /**
   * List Id
   * @description The unique identifier of the list to retrieve
   */
  list_id?: string;
};

/**
 * Type of SIDETRACKER's SIDETRACKER_GET_LIST_DETAILS tool output.
 */
type SIDETRACKER_GET_LIST_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the list was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the list
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the list
       */
      id: string;
      /**
       * Items
       * @description Array of items in the list
       */
      items: {
          /**
           * Item Id
           * @description Unique identifier of the item
           */
          item_id: string;
          /**
           * Item Name
           * @description Name of the item
           */
          item_name: string;
      }[];
      /**
       * Name
       * @description Name of the list
       */
      name: string;
      /**
       * Updated At
       * @description Timestamp when the list was last updated
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
 * Type map of all available tool input types for toolkit "SIDETRACKER".
 */
export type SIDETRACKER_TOOL_INPUTS = {
  GET_LISTS: SIDETRACKER_GET_LISTS_INPUT
  GET_LIST_DETAILS: SIDETRACKER_GET_LIST_DETAILS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SIDETRACKER".
 */
export type SIDETRACKER_TOOL_OUTPUTS = {
  GET_LISTS: SIDETRACKER_GET_LISTS_OUTPUT
  GET_LIST_DETAILS: SIDETRACKER_GET_LIST_DETAILS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SIDETRACKER toolkit.
 */
export const SIDETRACKER = {
  slug: "sidetracker",
  tools: {
    /**
     * Tool to retrieve lists from sidetracker. use when you need to paginate through available lists.
     */
    GET_LISTS: "SIDETRACKER_GET_LISTS",
    /**
     * Tool to retrieve details of a specific list by its id. use after confirming the list id is correct.
     */
    GET_LIST_DETAILS: "SIDETRACKER_GET_LIST_DETAILS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SIDETRACKER".
 */
export type SIDETRACKER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SIDETRACKER".
 */
export type SIDETRACKER_TRIGGER_EVENTS = {}
