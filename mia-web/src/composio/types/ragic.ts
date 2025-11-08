// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of RAGIC's RAGIC_SEARCH_RECORDS tool input.
 */
type RAGIC_SEARCH_RECORDS_INPUT = {
  /**
   * Account Name
   * @description Your Ragic account name.
   */
  account_name?: string;
  /**
   * Approval
   * @description Set to True to add the approval information related to this record to the response.
   * @default null
   */
  approval: boolean | null;
  /**
   * Bbcode
   * @description Set to True to retrieve the raw BBCode value saved to the field instead of being translated to HTML.
   * @default null
   */
  bbcode: boolean | null;
  /**
   * Comment
   * @description Set to True to add the comment thread related to this record to the response.
   * @default null
   */
  comment: boolean | null;
  /**
   * Conversation
   * @description Set to True to add the email conversation information related to this record to the response.
   * @default null
   */
  conversation: boolean | null;
  /**
   * History
   * @description Set to True to add the edit history related to this record to the response.
   * @default null
   */
  history: boolean | null;
  /**
   * Ignore Fixed Filter
   * @description When True, the fixed filter on this sheet will be ignored (requires SYSAdmin privilege).
   * @default null
   */
  ignoreFixedFilter: boolean | null;
  /**
   * Ignore Mask
   * @description When True, the field value of 'Masked text' will be unmasked if you are in the viewable groups.
   * @default null
   */
  ignoreMask: boolean | null;
  /**
   * Info
   * @description Set to True to add 'Create Date', 'Create User' information to the response.
   * @default null
   */
  info: boolean | null;
  /**
   * Listing
   * @description Set to True to only include fields in the Listing Page.
   * @default null
   */
  listing: boolean | null;
  /**
   * Reverse
   * @description Set to True to reverse the default ordering of the listing page response.
   * @default null
   */
  reverse: boolean | null;
  /**
   * Search Query
   * @description The full-text search query.
   */
  search_query?: string;
  /**
   * Sheet Path
   * @description Path to the Ragic sheet (e.g., 'sales/1' or 'support/2').
   */
  sheet_path?: string;
  /**
   * Subtables
   * @description Set to False to not include subtable information in the response. If True or not provided, subtables are included by default.
   * @default null
   */
  subtables: boolean | null;
};

/**
 * Type of RAGIC's RAGIC_SEARCH_RECORDS tool output.
 */
type RAGIC_SEARCH_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw Response
       * @description The raw JSON response from the API, for debugging or if the structure is not as expected.
       * @default null
       */
      raw_response: unknown;
      /**
       * Records
       * @description A dictionary of records that match the search criteria. Each key is a record ID, and the value is a dictionary of field names and values.
       */
      records?: {
          [key: string]: {
              [key: string]: unknown;
          };
      };
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
 * Type map of all available tool input types for toolkit "RAGIC".
 */
export type RAGIC_TOOL_INPUTS = {
  SEARCH_RECORDS: RAGIC_SEARCH_RECORDS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "RAGIC".
 */
export type RAGIC_TOOL_OUTPUTS = {
  SEARCH_RECORDS: RAGIC_SEARCH_RECORDS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's RAGIC toolkit.
 */
export const RAGIC = {
  slug: "ragic",
  tools: {
    /**
     * Search records
     */
    SEARCH_RECORDS: "RAGIC_SEARCH_RECORDS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "RAGIC".
 */
export type RAGIC_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "RAGIC".
 */
export type RAGIC_TRIGGER_EVENTS = {}
