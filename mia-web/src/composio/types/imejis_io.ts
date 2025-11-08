// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of IMEJIS_IO's IMEJIS_IO_LIST_DESIGNS tool input.
 */
type IMEJIS_IO_LIST_DESIGNS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for fetching the next page of results
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Maximum number of designs to return
   * @default null
   */
  limit: number | null;
  /**
   * Public
   * @description Whether to fetch only public designs if supported
   * @default null
   */
  public: boolean | null;
  /**
   * Search
   * @description Search term to filter designs by name/description
   * @default null
   */
  search: string | null;
};

/**
 * Type of IMEJIS_IO's IMEJIS_IO_LIST_DESIGNS tool output.
 */
type IMEJIS_IO_LIST_DESIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Designs
       * @description List of available design templates
       */
      designs: {
          /**
           * Description
           * @description A brief description of the design template
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The unique identifier for the design template
           */
          id: string;
          /**
           * Name
           * @description The name of the design template
           */
          name: string;
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
 * Type map of all available tool input types for toolkit "IMEJIS_IO".
 */
export type IMEJIS_IO_TOOL_INPUTS = {
  LIST_DESIGNS: IMEJIS_IO_LIST_DESIGNS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "IMEJIS_IO".
 */
export type IMEJIS_IO_TOOL_OUTPUTS = {
  LIST_DESIGNS: IMEJIS_IO_LIST_DESIGNS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's IMEJIS_IO toolkit.
 */
export const IMEJIS_IO = {
  slug: "imejis_io",
  tools: {
    /**
     * Tool to list available design templates. Use after authenticating the account.
     */
    LIST_DESIGNS: "IMEJIS_IO_LIST_DESIGNS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "IMEJIS_IO".
 */
export type IMEJIS_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "IMEJIS_IO".
 */
export type IMEJIS_IO_TRIGGER_EVENTS = {}
