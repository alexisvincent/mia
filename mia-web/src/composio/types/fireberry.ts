// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FIREBERRY's FIREBERRY_CREATE_RECORD tool input.
 */
type FIREBERRY_CREATE_RECORD_INPUT = {
  /**
   * Record
   * @description Key-value pairs representing the record fields as defined in Fireberry.
   */
  record?: {
      [key: string]: unknown;
  };
  /**
   * Table Name
   * @description Name of the Fireberry object/table where record is to be created (e.g., 'leads').
   */
  table_name?: string;
};

/**
 * Type of FIREBERRY's FIREBERRY_CREATE_RECORD tool output.
 */
type FIREBERRY_CREATE_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the newly created record in Fireberry.
       */
      id: string;
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
 * Type of FIREBERRY's FIREBERRY_GET_PICKLIST_VALUES tool input.
 */
type FIREBERRY_GET_PICKLIST_VALUES_INPUT = {
  /**
   * Fieldid
   * @description ID or API name of the picklist field
   */
  fieldid?: string;
  /**
   * Recordid
   * @description ID or system name of the record type (e.g., Account, Contact)
   */
  recordid?: string;
};

/**
 * Type of FIREBERRY's FIREBERRY_GET_PICKLIST_VALUES tool output.
 */
type FIREBERRY_GET_PICKLIST_VALUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Values
       * @description List of picklist values for the specified field
       */
      values: {
          /**
           * Id
           * @description Internal identifier of the picklist value
           */
          id: string;
          /**
           * Is Active
           * @description Indicates if the picklist value is currently active
           */
          isActive: boolean;
          /**
           * Label
           * @description Display label of the picklist value
           */
          label: string;
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
 * Type of FIREBERRY's FIREBERRY_QUERY_RECORDS tool input.
 */
type FIREBERRY_QUERY_RECORDS_INPUT = {
  /**
   * Fields
   * @description List of fields to include in results
   * @default null
   */
  fields: string[] | null;
  /**
   * FilterItem
   * @description Defines a single filter condition.
   * @default null
   */
  filter: {
      /**
       * Field
       * @description Name of the field to filter on
       */
      field: string;
      /**
       * Operator
       * @description Operator to apply for filtering
       * @enum {string}
       */
      operator: "=" | ">" | "<" | ">=" | "<=" | "contains" | "startsWith" | "endsWith";
      /**
       * Value
       * @description Value to compare the field against
       */
      value: string;
  } | null;
  /**
   * Module Id
   * @description The module's unique identifier
   */
  moduleId?: string;
  /**
   * Page
   * @description Page number for pagination (must be >= 1)
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of records per page (must be >= 1)
   * @default 10
   */
  pageSize: number | null;
  /**
   * Sort
   * @description Sorting preferences for results
   * @default null
   */
  sort: {
      /**
       * Direction
       * @description Sort direction (ascending or descending)
       * @enum {string}
       */
      direction: "asc" | "desc";
      /**
       * Field
       * @description Field name to sort by
       */
      field: string;
  }[] | null;
};

/**
 * Type of FIREBERRY's FIREBERRY_QUERY_RECORDS tool output.
 */
type FIREBERRY_QUERY_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Page Size
       * @description Number of records on this page
       */
      pageSize: number;
      /**
       * Records
       * @description List of records matching the query
       */
      records: {
          [key: string]: unknown;
      }[];
      /**
       * Total
       * @description Total number of records matching filter
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
 * Type map of all available tool input types for toolkit "FIREBERRY".
 */
export type FIREBERRY_TOOL_INPUTS = {
  CREATE_RECORD: FIREBERRY_CREATE_RECORD_INPUT
  GET_PICKLIST_VALUES: FIREBERRY_GET_PICKLIST_VALUES_INPUT
  QUERY_RECORDS: FIREBERRY_QUERY_RECORDS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FIREBERRY".
 */
export type FIREBERRY_TOOL_OUTPUTS = {
  CREATE_RECORD: FIREBERRY_CREATE_RECORD_OUTPUT
  GET_PICKLIST_VALUES: FIREBERRY_GET_PICKLIST_VALUES_OUTPUT
  QUERY_RECORDS: FIREBERRY_QUERY_RECORDS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FIREBERRY toolkit.
 */
export const FIREBERRY = {
  slug: "fireberry",
  tools: {
    /**
     * Tool to create a new record in a specified fireberry table. use when you have the table name and record data ready for insertion.
     */
    CREATE_RECORD: "FIREBERRY_CREATE_RECORD",
    /**
     * Tool to retrieve all possible picklist (dropdown) values for a specific field. use when you need to load all available options for a picklist field in a record type.
     */
    GET_PICKLIST_VALUES: "FIREBERRY_GET_PICKLIST_VALUES",
    /**
     * Tool to query records with filtering, sorting, and pagination. use when you need to retrieve specific fireberry records by module.
     */
    QUERY_RECORDS: "FIREBERRY_QUERY_RECORDS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FIREBERRY".
 */
export type FIREBERRY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FIREBERRY".
 */
export type FIREBERRY_TRIGGER_EVENTS = {}
