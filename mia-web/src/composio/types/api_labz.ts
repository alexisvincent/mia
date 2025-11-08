// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of API_LABZ's API_LABZ_IBAN_VALIDATOR tool input.
 */
type API_LABZ_IBAN_VALIDATOR_INPUT = {
  /**
   * Iban
   * @description The IBAN to validate, e.g., 'GB82WEST12345698765432'
   */
  iban?: string;
};

/**
 * Type of API_LABZ's API_LABZ_IBAN_VALIDATOR tool output.
 */
type API_LABZ_IBAN_VALIDATOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Detail of the validation result message
       */
      message: string;
      /**
       * Response
       * @description Validation details for the IBAN
       */
      response: {
          /**
           * Account Number
           * @description Account number extracted from the IBAN, if applicable
           * @default null
           */
          account_number: string | null;
          /**
           * Bank Code
           * @description Bank code extracted from the IBAN, if applicable
           * @default null
           */
          bank_code: string | null;
          /**
           * Bban
           * @description Basic Bank Account Number part of the IBAN
           */
          bban: string;
          /**
           * Branch Code
           * @description Branch code extracted from the IBAN, if applicable
           * @default null
           */
          branch_code: string | null;
          /**
           * Check Digits
           * @description Check digits extracted from the IBAN
           */
          check_digits: string;
          /**
           * Country Code
           * @description Two-letter country code extracted from the IBAN
           */
          country_code: string;
          /**
           * Formatted
           * @description Formatted IBAN with grouping separators for readability
           * @default null
           */
          formatted: string | null;
          /**
           * Iban
           * @description The original IBAN provided
           */
          iban: string;
          /**
           * Valid
           * @description Indicates if the IBAN is valid according to international standards
           */
          valid: boolean;
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
 * Type of API_LABZ's API_LABZ_INTEGRATE_DEAL tool input.
 */
type API_LABZ_INTEGRATE_DEAL_INPUT = {
  /**
   * Amount
   * @description Monetary value of the deal, must be non-negative
   */
  amount?: number;
  /**
   * Currency
   * @description Currency code for the amount, e.g., USD, EUR
   * @default null
   */
  currency: string | null;
  /**
   * Custom Fields
   * @description Additional custom fields as key/value pairs
   * @default null
   */
  customFields: {
      [key: string]: string | number | boolean;
  } | null;
  /**
   * Deal Id
   * @description Unique identifier for the deal
   */
  dealId?: string;
  /**
   * Status
   * @description Current status of the deal, e.g., open, closed
   */
  status?: string;
  /**
   * Title
   * @description Title of the deal
   */
  title?: string;
};

/**
 * Type of API_LABZ's API_LABZ_INTEGRATE_DEAL tool output.
 */
type API_LABZ_INTEGRATE_DEAL_OUTPUT = {
  /**
   * Data
   * @description Details of the created or updated deal
   * @default null
   */
  data: {
      [key: string]: string | number | boolean;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Response message or error details
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Whether the deal was successfully integrated
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of API_LABZ's API_LABZ_LIST_TABLES tool input.
 */
type API_LABZ_LIST_TABLES_INPUT = {
  /**
   * Base Id
   * @description The Airtable base ID to fetch tables from.
   */
  base_id?: string;
};

/**
 * Type of API_LABZ's API_LABZ_LIST_TABLES tool output.
 */
type API_LABZ_LIST_TABLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tables
       * @description List of tables within the specified Airtable base
       */
      tables: {
          /**
           * Id
           * @description The unique ID of the Airtable table
           */
          id: string;
          /**
           * Name
           * @description The name of the Airtable table
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
 * Type of API_LABZ's API_LABZ_TRELLO_AI_SEARCH_ENGINE tool input.
 */
type API_LABZ_TRELLO_AI_SEARCH_ENGINE_INPUT = {
  /**
   * Board Id
   * @description Filter results to a specific board by its ID.
   * @default null
   */
  boardId: string | null;
  /**
   * Include Archived
   * @description Whether to include archived cards.
   * @default false
   */
  includeArchived: boolean;
  /**
   * Limit
   * @description Number of results to return (must be >= 1).
   * @default 10
   */
  limit: number | null;
  /**
   * List Id
   * @description Filter results to a specific list by its ID.
   * @default null
   */
  listId: string | null;
  /**
   * Query
   * @description The search query string.
   */
  query?: string;
};

/**
 * Type of API_LABZ's API_LABZ_TRELLO_AI_SEARCH_ENGINE tool output.
 */
type API_LABZ_TRELLO_AI_SEARCH_ENGINE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of matched cards.
       */
      count: number;
      /**
       * Results
       * @description List of matching cards and their details.
       */
      results: {
          /**
           * Board Id
           * @description ID of the board containing the card.
           */
          boardId: string;
          /**
           * Card Desc
           * @description Description of the Trello card.
           */
          cardDesc: string;
          /**
           * Card Id
           * @description ID of the Trello card.
           */
          cardId: string;
          /**
           * Card Name
           * @description Name of the Trello card.
           */
          cardName: string;
          /**
           * List Id
           * @description ID of the list containing the card.
           */
          listId: string;
          /**
           * Url
           * @description Direct URL to the Trello card.
           */
          url: string;
      }[];
      /**
       * Status
       * @description Request status message.
       */
      status: string;
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
 * Type map of all available tool input types for toolkit "API_LABZ".
 */
export type API_LABZ_TOOL_INPUTS = {
  IBAN_VALIDATOR: API_LABZ_IBAN_VALIDATOR_INPUT
  INTEGRATE_DEAL: API_LABZ_INTEGRATE_DEAL_INPUT
  LIST_TABLES: API_LABZ_LIST_TABLES_INPUT
  TRELLO_AI_SEARCH_ENGINE: API_LABZ_TRELLO_AI_SEARCH_ENGINE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "API_LABZ".
 */
export type API_LABZ_TOOL_OUTPUTS = {
  IBAN_VALIDATOR: API_LABZ_IBAN_VALIDATOR_OUTPUT
  INTEGRATE_DEAL: API_LABZ_INTEGRATE_DEAL_OUTPUT
  LIST_TABLES: API_LABZ_LIST_TABLES_OUTPUT
  TRELLO_AI_SEARCH_ENGINE: API_LABZ_TRELLO_AI_SEARCH_ENGINE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's API_LABZ toolkit.
 */
export const API_LABZ = {
  slug: "api_labz",
  tools: {
    /**
     * Tool to validate international bank account numbers (ibans). use when you need to verify an iban's structure before processing transactions.
     */
    IBAN_VALIDATOR: "API_LABZ_IBAN_VALIDATOR",
    /**
     * Tool to integrate a deal into api labz. use when you need to push a new or updated deal record into the system after preparing required fields.
     */
    INTEGRATE_DEAL: "API_LABZ_INTEGRATE_DEAL",
    /**
     * Tool to list all airtable tables for a given base. use when you need to retrieve table names before interacting with a table.
     */
    LIST_TABLES: "API_LABZ_LIST_TABLES",
    /**
     * Tool to search trello boards, lists, and cards using ai-driven queries. use when you need to quickly locate relevant trello cards, lists, or boards.
     */
    TRELLO_AI_SEARCH_ENGINE: "API_LABZ_TRELLO_AI_SEARCH_ENGINE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "API_LABZ".
 */
export type API_LABZ_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "API_LABZ".
 */
export type API_LABZ_TRIGGER_EVENTS = {}
