// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PASSCREATOR's PASSCREATOR_CHECK_PASS_EXISTENCE tool input.
 */
type PASSCREATOR_CHECK_PASS_EXISTENCE_INPUT = {
  /**
   * External Id
   * @description The external identifier of the pass to check existence.
   */
  externalId?: string;
};

/**
 * Type of PASSCREATOR's PASSCREATOR_CHECK_PASS_EXISTENCE tool output.
 */
type PASSCREATOR_CHECK_PASS_EXISTENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Exists
       * @description True if a pass with the given externalId exists, False otherwise.
       */
      exists: boolean;
      /**
       * External Id
       * @description The external identifier that was checked.
       */
      externalId: string;
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
 * Type of PASSCREATOR's PASSCREATOR_LIST_PASSES tool input.
 */
type PASSCREATOR_LIST_PASSES_INPUT = {
  /**
   * External Id
   * @description Exact external ID to search for, e.g. 'ext-456'.
   * @default null
   */
  externalId: string | null;
  /**
   * Limit
   * @description Max items to return (default 100, maximum 500).
   * @default 100
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip for paging (zero-based).
   * @default 0
   */
  offset: number | null;
  /**
   * Query
   * @description Search term to filter passes, e.g. 'event'.
   * @default null
   */
  query: string | null;
  /**
   * Serial Number
   * @description Exact serial number to search for, e.g. 'ABC123'.
   * @default null
   */
  serialNumber: string | null;
  /**
   * Sort By
   * @description Field to sort by, e.g. 'created'.
   * @default null
   */
  sortBy: string | null;
  /**
   * Sort Direction
   * @description Sort order direction ('asc' or 'desc').
   * @default asc
   * @enum {string|null}
   */
  sortDirection: "asc" | "desc" | null;
  /**
   * Status
   * @description Filter by pass status. Common values: ACTIVE, INACTIVE, EXPIRED.
   * @default null
   */
  status: string | null;
  /**
   * Template Id
   * @description Only return passes for this template ID, e.g. 'tmpl-789'.
   * @default null
   */
  templateId: string | null;
};

/**
 * Type of PASSCREATOR's PASSCREATOR_LIST_PASSES tool output.
 */
type PASSCREATOR_LIST_PASSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message, if any.
       * @default null
       */
      error: string | null;
      /**
       * Limit
       * @description Number of items returned (paging).
       */
      limit: number;
      /**
       * Offset
       * @description Number of items skipped (paging).
       */
      offset: number;
      /**
       * Passes
       * @description List of pass objects matching the query.
       */
      passes: {
          /**
           * Created
           * @description ISO datetime when pass was created.
           */
          created: string;
          /**
           * Custom Fields
           * @description Custom field values keyed by custom field ID.
           */
          customFields?: {
              [key: string]: string;
          };
          /**
           * External Id
           * @description User-defined external ID.
           * @default null
           */
          externalId: string | null;
          /**
           * Id
           * @description Unique pass identifier.
           */
          id: string;
          /**
           * Serial Number
           * @description Pass serial number.
           */
          serialNumber: string;
          /**
           * Status
           * @description Current pass status.
           */
          status: string;
          /**
           * Template Id
           * @description Template identifier used.
           */
          templateId: string;
          /**
           * Updated
           * @description ISO datetime when pass was last updated.
           */
          updated: string;
      }[];
      /**
       * Total
       * @description Total number of passes matching filters.
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
 * Type of PASSCREATOR's PASSCREATOR_LIST_PASS_TEMPLATES tool input.
 */
type PASSCREATOR_LIST_PASS_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description Number of results to return per page
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before collecting results
   * @default null
   */
  offset: number | null;
  /**
   * Order
   * @description Sorting order, either 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Search
   * @description Search term to filter templates by name or description
   * @default null
   */
  search: string | null;
  /**
   * Sort
   * @description Field to sort by (e.g., name or createdAt)
   * @default null
   */
  sort: string | null;
};

/**
 * Type of PASSCREATOR's PASSCREATOR_LIST_PASS_TEMPLATES tool output.
 */
type PASSCREATOR_LIST_PASS_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description List of pass template objects
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the pass template
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Pass template identifier
       */
      id: string;
      /**
       * Name
       * @description Name of the pass template
       */
      name: string;
      /**
       * Updated At
       * @description Last updated timestamp (ISO 8601)
       */
      updatedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Limit
   * @description Limit for page size
   */
  limit?: number;
  /**
   * Offset
   * @description Offset for pagination
   */
  offset?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of pass templates available
   */
  total?: number;
};

/**
 * Type map of all available tool input types for toolkit "PASSCREATOR".
 */
export type PASSCREATOR_TOOL_INPUTS = {
  CHECK_PASS_EXISTENCE: PASSCREATOR_CHECK_PASS_EXISTENCE_INPUT
  LIST_PASSES: PASSCREATOR_LIST_PASSES_INPUT
  LIST_PASS_TEMPLATES: PASSCREATOR_LIST_PASS_TEMPLATES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PASSCREATOR".
 */
export type PASSCREATOR_TOOL_OUTPUTS = {
  CHECK_PASS_EXISTENCE: PASSCREATOR_CHECK_PASS_EXISTENCE_OUTPUT
  LIST_PASSES: PASSCREATOR_LIST_PASSES_OUTPUT
  LIST_PASS_TEMPLATES: PASSCREATOR_LIST_PASS_TEMPLATES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PASSCREATOR toolkit.
 */
export const PASSCREATOR = {
  slug: "passcreator",
  tools: {
    /**
     * Tool to check if a pass exists for a given external id. use when verifying pass existence before subsequent operations.
     */
    CHECK_PASS_EXISTENCE: "PASSCREATOR_CHECK_PASS_EXISTENCE",
    /**
     * Tool to list or search passes. use when you need to retrieve passes by filters or paging.
     */
    LIST_PASSES: "PASSCREATOR_LIST_PASSES",
    /**
     * Tool to list pass templates. use when you need to retrieve pass templates for your account, optionally with pagination or filters.
     */
    LIST_PASS_TEMPLATES: "PASSCREATOR_LIST_PASS_TEMPLATES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PASSCREATOR".
 */
export type PASSCREATOR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PASSCREATOR".
 */
export type PASSCREATOR_TRIGGER_EVENTS = {}
