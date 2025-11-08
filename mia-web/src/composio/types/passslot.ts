// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PASSSLOT's PASSSLOT_GET_PASSES tool input.
 */
type PASSSLOT_GET_PASSES_INPUT = {
  /**
   * Limit
   * @description Maximum number of passes to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of passes to skip before starting to collect the result set
   * @default null
   */
  offset: number | null;
  /**
   * Serial Number
   * @description Filter passes by serial number
   * @default null
   */
  serial_number: string | null;
  /**
   * Template Id
   * @description Filter passes by template ID
   * @default null
   */
  template_id: string | null;
  /**
   * Updated At
   * @description Filter passes updated after this date-time (ISO 8601)
   * @default null
   */
  updated_at: string | null;
};

/**
 * Type of PASSSLOT's PASSSLOT_GET_PASSES tool output.
 */
type PASSSLOT_GET_PASSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Passes
       * @description List of pass objects
       */
      passes: {
          /**
           * Created At
           * @description Creation timestamp (ISO 8601)
           */
          created_at: string;
          /**
           * Id
           * @description Pass ID
           */
          id: string;
          /**
           * Pass Type Identifier
           * @description Pass type identifier
           */
          pass_type_identifier: string;
          /**
           * Serial Number
           * @description Pass serial number
           */
          serial_number: string;
          /**
           * Template Id
           * @description Associated template ID
           */
          template_id: string;
          /**
           * Updated At
           * @description Last update timestamp (ISO 8601)
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
 * Type of PASSSLOT's PASSSLOT_GET_PASSES_BY_PASS_TYPE tool input.
 */
type PASSSLOT_GET_PASSES_BY_PASS_TYPE_INPUT = {
  /**
   * Limit
   * @description Maximum number of passes to return (pagination limit)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Index of the first pass to return (pagination offset)
   * @default null
   */
  offset: number | null;
  /**
   * Passtype Id
   * @description Filter passes by this Pass Type ID
   * @default null
   */
  passtype_id: string | null;
};

/**
 * Type of PASSSLOT's PASSSLOT_GET_PASSES_BY_PASS_TYPE tool output.
 */
type PASSSLOT_GET_PASSES_BY_PASS_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Passes
       * @description List of pass objects matching the query
       */
      passes: {
          /**
           * Created At
           * @description Pass creation timestamp
           */
          created_at: string;
          /**
           * Id
           * @description Unique pass identifier
           */
          id: string;
          /**
           * Passtype Id
           * @description ID of the pass type
           */
          passtype_id: string;
          /**
           * Serial Number
           * @description Serial number of the pass
           */
          serial_number: string;
          /**
           * Status
           * @description Status of the pass (e.g., active, voided)
           */
          status: string;
          /**
           * Updated At
           * @description Pass last update timestamp
           */
          updated_at: string;
      }[];
      /**
       * Total
       * @description Total number of matching passes
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
 * Type of PASSSLOT's PASSSLOT_GET_PASS_TYPES tool input.
 */
type PASSSLOT_GET_PASS_TYPES_INPUT = object;

/**
 * Type of PASSSLOT's PASSSLOT_GET_PASS_TYPES tool output.
 */
type PASSSLOT_GET_PASS_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the pass type
       */
      description: string;
      /**
       * Id
       * @description Unique identifier for the pass type
       */
      id: string;
      /**
       * Name
       * @description Name of the pass type
       */
      name: string;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "PASSSLOT".
 */
export type PASSSLOT_TOOL_INPUTS = {
  GET_PASSES: PASSSLOT_GET_PASSES_INPUT
  GET_PASSES_BY_PASS_TYPE: PASSSLOT_GET_PASSES_BY_PASS_TYPE_INPUT
  GET_PASS_TYPES: PASSSLOT_GET_PASS_TYPES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PASSSLOT".
 */
export type PASSSLOT_TOOL_OUTPUTS = {
  GET_PASSES: PASSSLOT_GET_PASSES_OUTPUT
  GET_PASSES_BY_PASS_TYPE: PASSSLOT_GET_PASSES_BY_PASS_TYPE_OUTPUT
  GET_PASS_TYPES: PASSSLOT_GET_PASS_TYPES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PASSSLOT toolkit.
 */
export const PASSSLOT = {
  slug: "passslot",
  tools: {
    /**
     * Tool to retrieve descriptions of all created wallet passes. use when you need to list existing passes and apply optional filters.
     */
    GET_PASSES: "PASSSLOT_GET_PASSES",
    /**
     * Tool to list wallet passes for a given pass type id. use when you need to fetch passes filtered by a specific pass type, optionally paginated.
     */
    GET_PASSES_BY_PASS_TYPE: "PASSSLOT_GET_PASSES_BY_PASS_TYPE",
    /**
     * Tool to list all available pass types. use when you need to retrieve supported pass-type identifiers before creating passes.
     */
    GET_PASS_TYPES: "PASSSLOT_GET_PASS_TYPES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PASSSLOT".
 */
export type PASSSLOT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PASSSLOT".
 */
export type PASSSLOT_TRIGGER_EVENTS = {}
