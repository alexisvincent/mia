// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WORKIOM's WORKIOM_CREATE_RECORD tool input.
 */
type WORKIOM_CREATE_RECORD_INPUT = {
  /**
   * List Id
   * @description The ID of the list where the record will be created
   */
  list_id?: string;
  /**
   * Record Data
   * @description A JSON object containing the field values for the new record. Each key should be a field ID, and the value should match the expected data type. Supported field types: strings for text, numbers for numeric fields, ISO 8601 date strings for dates, objects with {id, label} for static list items, and arrays of objects for linked records.
   */
  record_data?: {
      [key: string]: unknown;
  };
};

/**
 * Type of WORKIOM's WORKIOM_CREATE_RECORD tool output.
 */
type WORKIOM_CREATE_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message describing the result of the operation
       */
      message: string;
      /**
       * Record Id
       * @description The ID of the newly created record
       */
      record_id: string;
      /**
       * Success
       * @description Whether the record was created successfully
       */
      success: boolean;
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
 * Type of WORKIOM's WORKIOM_GET_ALL_LISTS tool input.
 */
type WORKIOM_GET_ALL_LISTS_INPUT = {
  /**
   * Include Fields
   * @description Whether to include field definitions for each list
   * @default true
   */
  include_fields: boolean;
  /**
   * Page Number
   * @description Page number for pagination
   * @default 1
   */
  page_number: number;
  /**
   * Page Size
   * @description Number of lists to return per page
   * @default 50
   */
  page_size: number;
  /**
   * Workspace Id
   * @description The ID of the workspace to fetch lists from
   */
  workspace_id?: string;
};

/**
 * Type of WORKIOM's WORKIOM_GET_ALL_LISTS tool output.
 */
type WORKIOM_GET_ALL_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Lists
       * @description The lists in the workspace
       */
      lists: {
          /**
           * Created At
           * Format: date-time
           * @description When the list was created
           */
          created_at: string;
          /**
           * Description
           * @description The description of the list
           */
          description?: string;
          /**
           * Fields
           * @description The fields in the list
           */
          fields?: {
              /**
               * Id
               * @description The ID of the field
               */
              id: string;
              /**
               * Name
               * @description The name of the field
               */
              name: string;
              /**
               * Options
               * @description Options for the field if applicable
               */
              options?: {
                  [key: string]: unknown;
              }[];
              /**
               * Required
               * @description Whether the field is required
               */
              required: boolean;
              /**
               * Type
               * @description The type of the field
               */
              type: string;
          }[];
          /**
           * Id
           * @description The ID of the list
           */
          id: string;
          /**
           * Name
           * @description The name of the list
           */
          name: string;
          /**
           * Updated At
           * Format: date-time
           * @description When the list was last updated
           */
          updated_at: string;
      }[];
      /**
       * Page Count
       * @description Total number of pages
       */
      page_count: number;
      /**
       * Total Count
       * @description Total number of lists in the workspace
       */
      total_count: number;
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
 * Type of WORKIOM's WORKIOM_GET_RECORDS tool input.
 */
type WORKIOM_GET_RECORDS_INPUT = {
  /**
   * Filters
   * @description Array of filter objects to filter the records
   * @default null
   */
  filters: {
      /**
       * Field Id
       * @description The ID of the field to filter on
       */
      field_id: number;
      /**
       * Operator
       * @description The operator to use for filtering
       */
      operator: number;
      /**
       * Value
       * @description The value to filter by
       */
      value: unknown;
  }[] | null;
  /**
   * List Id
   * @description The ID of the list to fetch records from
   */
  list_id?: string;
  /**
   * Max Result Count
   * @description Number of records to return per page (for pagination)
   * @default null
   */
  max_result_count: number | null;
  /**
   * Skip Count
   * @description Number of records to skip (for pagination)
   * @default null
   */
  skip_count: number | null;
  /**
   * Sorting
   * @description Field ID and direction for sorting (e.g., '11284 ASC' or '11284 DESC')
   * @default null
   */
  sorting: string | null;
};

/**
 * Type of WORKIOM's WORKIOM_GET_RECORDS tool output.
 */
type WORKIOM_GET_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of record objects with field values
       */
      items: {
          [key: string]: unknown;
      }[];
      /**
       * RecordSummary
       * @description Summary information about the records
       * @default null
       */
      summary: {
          /**
           * Additional Prop1
           * @description First additional property in the summary
           * @default null
           */
          additional_prop1: number | null;
          /**
           * Additional Prop2
           * @description Second additional property in the summary
           * @default null
           */
          additional_prop2: number | null;
          /**
           * Additional Prop3
           * @description Third additional property in the summary
           * @default null
           */
          additional_prop3: number | null;
      } | null;
      /**
       * Total Count
       * @description Total number of records that match the query
       */
      total_count: number;
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
 * Type map of all available tool input types for toolkit "WORKIOM".
 */
export type WORKIOM_TOOL_INPUTS = {
  CREATE_RECORD: WORKIOM_CREATE_RECORD_INPUT
  GET_ALL_LISTS: WORKIOM_GET_ALL_LISTS_INPUT
  GET_RECORDS: WORKIOM_GET_RECORDS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WORKIOM".
 */
export type WORKIOM_TOOL_OUTPUTS = {
  CREATE_RECORD: WORKIOM_CREATE_RECORD_OUTPUT
  GET_ALL_LISTS: WORKIOM_GET_ALL_LISTS_OUTPUT
  GET_RECORDS: WORKIOM_GET_RECORDS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WORKIOM toolkit.
 */
export const WORKIOM = {
  slug: "workiom",
  tools: {
    /**
     * Creates a new record in a specified workiom list. this tool creates a record with basic field types like text, numbers, dates, and static list items. the record data should be provided as a json object where each key is a field id and the value matches the expected data type for that field.
     */
    CREATE_RECORD: "WORKIOM_CREATE_RECORD",
    /**
     * Get all lists from a workiom workspace. this action fetches all available lists in a workiom workspace. it's a fundamental tool that serves as a prerequisite for most other operations (like creating records, which require a list id). the action supports pagination and can optionally include field definitions for each list.
     */
    GET_ALL_LISTS: "WORKIOM_GET_ALL_LISTS",
    /**
     * Retrieves records from a specified list in workiom. this tool fetches records from a specified list with optional filtering, sorting, and pagination capabilities. the response includes the records along with summary information and total count.
     */
    GET_RECORDS: "WORKIOM_GET_RECORDS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WORKIOM".
 */
export type WORKIOM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WORKIOM".
 */
export type WORKIOM_TRIGGER_EVENTS = {}
