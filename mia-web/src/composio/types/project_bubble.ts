// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PROJECT_BUBBLE's PROJECT_BUBBLE_DATA_API_GET_DATA_TYPE_FIELDS tool input.
 */
type PROJECT_BUBBLE_DATA_API_GET_DATA_TYPE_FIELDS_INPUT = {
  /**
   * Data Type
   * @description The Bubble data type name to inspect.
   */
  data_type?: string;
};

/**
 * Type of PROJECT_BUBBLE's PROJECT_BUBBLE_DATA_API_GET_DATA_TYPE_FIELDS tool output.
 */
type PROJECT_BUBBLE_DATA_API_GET_DATA_TYPE_FIELDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fields
       * @description List of fields for the data type
       */
      fields: {
          /**
           * Description
           * @description Optional description of the field
           * @default null
           */
          description: string | null;
          /**
           * Name
           * @description Name of the field
           */
          name: string;
          /**
           * Required
           * @description Whether the field is required
           */
          required: boolean;
          /**
           * Type
           * @description Data type of the field (e.g., 'text', 'number')
           */
          type: string;
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
 * Type of PROJECT_BUBBLE's PROJECT_BUBBLE_DATA_API_GET_OBJECTS tool input.
 */
type PROJECT_BUBBLE_DATA_API_GET_OBJECTS_INPUT = {
  /**
   * Constraints
   * @description JSON-encoded search constraints to filter objects. For example: '{"Status":"Active"}'.
   * @default null
   */
  constraints: string | null;
  /**
   * Count
   * @description If 'yes', return only the total count of matching objects instead of object data.
   * @default null
   * @enum {string|null}
   */
  count: "yes" | "no" | null;
  /**
   * Cursor
   * @description Pagination cursor from a previous response for fetching the next page.
   * @default null
   */
  cursor: string | null;
  /**
   * Data Type
   * @description Name of the Bubble data type to list objects from (case-sensitive).
   */
  data_type?: string;
  /**
   * Descending
   * @description Sort in descending order when 'yes'; ascending when 'no' or omitted.
   * @default null
   * @enum {string|null}
   */
  descending: "yes" | "no" | null;
  /**
   * Ignore Fields
   * @description If 'yes', omit null-valued fields in each returned object.
   * @default null
   * @enum {string|null}
   */
  ignore_fields: "yes" | "no" | null;
  /**
   * Limit
   * @description Maximum number of objects to return (1–1000). Defaults to server-side setting if omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Sort Field
   * @description Field name to sort results by (must be a valid field on the data type).
   * @default null
   */
  sort_field: string | null;
};

/**
 * Type of PROJECT_BUBBLE's PROJECT_BUBBLE_DATA_API_GET_OBJECTS tool output.
 */
type PROJECT_BUBBLE_DATA_API_GET_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total count of matching objects. Present only when count='yes'.
       * @default null
       */
      count: number | null;
      /**
       * Remaining
       * @description Estimated number of objects remaining beyond the returned results.
       * @default null
       */
      remaining: number | null;
      /**
       * Results
       * @description List of objects matching the query. Each object includes its fields and metadata. Omitted when count='yes'.
       * @default null
       */
      results: {
          [key: string]: unknown;
      }[] | null;
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
 * Type of PROJECT_BUBBLE's PROJECT_BUBBLE_DATA_API_GET_RECORD tool input.
 */
type PROJECT_BUBBLE_DATA_API_GET_RECORD_INPUT = {
  /**
   * Id
   * @description The unique ID of the record to retrieve.
   */
  id?: string;
  /**
   * Type
   * @description The Bubble data type (table) name.
   */
  type?: string;
};

/**
 * Type of PROJECT_BUBBLE's PROJECT_BUBBLE_DATA_API_GET_RECORD tool output.
 */
type PROJECT_BUBBLE_DATA_API_GET_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created Date
       * @description Creation date in ISO 8601 format.
       * @default null
       */
      created_date: string | null;
      /**
       * Id
       * @description Unique identifier of the record.
       */
      id: string;
      /**
       * Modified Date
       * @description Last modification date in ISO 8601 format.
       * @default null
       */
      modified_date: string | null;
  } & {
      [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "PROJECT_BUBBLE".
 */
export type PROJECT_BUBBLE_TOOL_INPUTS = {
  DATA_API_GET_DATA_TYPE_FIELDS: PROJECT_BUBBLE_DATA_API_GET_DATA_TYPE_FIELDS_INPUT
  DATA_API_GET_OBJECTS: PROJECT_BUBBLE_DATA_API_GET_OBJECTS_INPUT
  DATA_API_GET_RECORD: PROJECT_BUBBLE_DATA_API_GET_RECORD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PROJECT_BUBBLE".
 */
export type PROJECT_BUBBLE_TOOL_OUTPUTS = {
  DATA_API_GET_DATA_TYPE_FIELDS: PROJECT_BUBBLE_DATA_API_GET_DATA_TYPE_FIELDS_OUTPUT
  DATA_API_GET_OBJECTS: PROJECT_BUBBLE_DATA_API_GET_OBJECTS_OUTPUT
  DATA_API_GET_RECORD: PROJECT_BUBBLE_DATA_API_GET_RECORD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PROJECT_BUBBLE toolkit.
 */
export const PROJECT_BUBBLE = {
  slug: "project_bubble",
  tools: {
    /**
     * Tool to get the fields of a specific data type. use after discovering a data type to inspect its fields.
     */
    DATA_API_GET_DATA_TYPE_FIELDS: "PROJECT_BUBBLE_DATA_API_GET_DATA_TYPE_FIELDS",
    /**
     * Tool to retrieve a list of objects for a specified data type. use when you need to list items with optional filters, sorting, and pagination.
     */
    DATA_API_GET_OBJECTS: "PROJECT_BUBBLE_DATA_API_GET_OBJECTS",
    /**
     * Tool to retrieve a specific record by id from the bubble data api. use after confirming the data type and record id. example: request type='teams', id='a1b2c3d4'.
     */
    DATA_API_GET_RECORD: "PROJECT_BUBBLE_DATA_API_GET_RECORD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PROJECT_BUBBLE".
 */
export type PROJECT_BUBBLE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PROJECT_BUBBLE".
 */
export type PROJECT_BUBBLE_TRIGGER_EVENTS = {}
