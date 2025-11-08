// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DRAFTABLE's DRAFTABLE_LIST_COMPARISONS tool input.
 */
type DRAFTABLE_LIST_COMPARISONS_INPUT = {
  /**
   * Page Size
   * @description Maximum number of comparisons per page (min 1; max 100).
   * @default null
   */
  page_size: number | null;
  /**
   * Page Token
   * @description Opaque pagination token from a previous call; omit to fetch the first page.
   * @default null
   */
  page_token: string | null;
};

/**
 * Type of DRAFTABLE's DRAFTABLE_LIST_COMPARISONS tool output.
 */
type DRAFTABLE_LIST_COMPARISONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comparisons
       * @description List of comparison summary objects.
       */
      comparisons: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the comparison was created.
           */
          created_at: string;
          /**
           * Expiry
           * @description ISO 8601 timestamp when the comparison will expire, if set.
           * @default null
           */
          expiry: string | null;
          /**
           * External Id
           * @description Client-provided external ID, if any.
           * @default null
           */
          external_id: string | null;
          /**
           * Status
           * @description Current status of the comparison (e.g., 'processing', 'completed', 'failed').
           */
          status: string;
          /**
           * Url
           * @description URL to view the comparison in Draftable Online.
           */
          url: string;
          /**
           * Uuid
           * @description Unique identifier of the comparison.
           */
          uuid: string;
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, if any.
       * @default null
       */
      next_page_token: string | null;
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
 * Type map of all available tool input types for toolkit "DRAFTABLE".
 */
export type DRAFTABLE_TOOL_INPUTS = {
  LIST_COMPARISONS: DRAFTABLE_LIST_COMPARISONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DRAFTABLE".
 */
export type DRAFTABLE_TOOL_OUTPUTS = {
  LIST_COMPARISONS: DRAFTABLE_LIST_COMPARISONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DRAFTABLE toolkit.
 */
export const DRAFTABLE = {
  slug: "draftable",
  tools: {
    /**
     * Tool to retrieve a paginated list of document comparisons. use when you need to browse comparisons across pages.
     */
    LIST_COMPARISONS: "DRAFTABLE_LIST_COMPARISONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DRAFTABLE".
 */
export type DRAFTABLE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DRAFTABLE".
 */
export type DRAFTABLE_TRIGGER_EVENTS = {}
