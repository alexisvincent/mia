// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DOCSUMO's DOCSUMO_GET_ENABLED_DOCUMENT_TYPES tool input.
 */
type DOCSUMO_GET_ENABLED_DOCUMENT_TYPES_INPUT = object;

/**
 * Type of DOCSUMO's DOCSUMO_GET_ENABLED_DOCUMENT_TYPES tool output.
 */
type DOCSUMO_GET_ENABLED_DOCUMENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description Summary data of document types
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code if any
   * @default null
   */
  error_code: string | null;
  /**
   * Message
   * @description Additional message if any
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Response status (e.g., 'success')
   */
  status?: string;
  /**
   * Status Code
   * @description HTTP status code
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DOCSUMO's DOCSUMO_GET_USER_DOCUMENT_TYPES tool input.
 */
type DOCSUMO_GET_USER_DOCUMENT_TYPES_INPUT = object;

/**
 * Type of DOCSUMO's DOCSUMO_GET_USER_DOCUMENT_TYPES tool output.
 */
type DOCSUMO_GET_USER_DOCUMENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data containing document types and user info
   */
  data?: {
      /**
       * Document Types
       * @description List of available document types for the user
       */
      document_types: {
          /**
           * Title
           * @description Title of the document type
           */
          title: string;
          /**
           * Value
           * @description Internal identifier for the document type
           */
          value: string;
      }[];
      /**
       * Email
       * @description User's email address
       */
      email: string;
      /**
       * Full Name
       * @description User's full name
       */
      full_name: string;
      /**
       * Monthly Doc Current
       * @description Current number of documents processed this month
       */
      monthly_doc_current: number;
      /**
       * Monthly Doc Limit
       * @description Monthly document processing limit
       */
      monthly_doc_limit: number;
      /**
       * User Id
       * @description Internal user identifier
       */
      user_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Error Code
   * @description Error code if any
   * @default null
   */
  error_code: string | null;
  /**
   * Message
   * @description API response message
   */
  message?: string;
  /**
   * Status
   * @description Response status (e.g., 'success')
   */
  status?: string;
  /**
   * Status Code
   * @description HTTP status code
   */
  status_code?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DOCSUMO's DOCSUMO_POST_MCA_ANALYSIS tool input.
 */
type DOCSUMO_POST_MCA_ANALYSIS_INPUT = {
  /**
   * Doc Ids
   * @description List of document IDs representing the bank statements to be analyzed.
   */
  doc_ids?: string[];
};

/**
 * Type of DOCSUMO's DOCSUMO_POST_MCA_ANALYSIS tool output.
 */
type DOCSUMO_POST_MCA_ANALYSIS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Info
       * @description Account information.
       */
      account_info: {
          /**
           * Account Holder Name
           * @description Name of the account holder.
           */
          account_holder_name: string;
          /**
           * Account Number
           * @description Account number.
           */
          account_number: string;
      };
      /**
       * Financial Summary
       * @description Overall financial summary.
       */
      financial_summary: {
          /**
           * Balance
           * @description Net balance for the period.
           */
          balance: number;
          /**
           * Total Credits
           * @description Total credits amount.
           */
          total_credits: number;
          /**
           * Total Debits
           * @description Total debits amount.
           */
          total_debits: number;
      };
      /**
       * Monthly Data
       * @description Month-by-month financial breakdown.
       */
      monthly_data: {
          /**
           * Balance
           * @description Net balance for the month.
           */
          balance: number;
          /**
           * Categorized Transactions
           * @description Mapping of categories to their total transaction amounts for the month.
           */
          categorized_transactions: {
              [key: string]: number;
          };
          /**
           * Month
           * @description Month in YYYY-MM format.
           */
          month: string;
          /**
           * Total Credits
           * @description Total credits for the month.
           */
          total_credits: number;
          /**
           * Total Debits
           * @description Total debits for the month.
           */
          total_debits: number;
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
 * Type map of all available tool input types for toolkit "DOCSUMO".
 */
export type DOCSUMO_TOOL_INPUTS = {
  GET_ENABLED_DOCUMENT_TYPES: DOCSUMO_GET_ENABLED_DOCUMENT_TYPES_INPUT
  GET_USER_DOCUMENT_TYPES: DOCSUMO_GET_USER_DOCUMENT_TYPES_INPUT
  POST_MCA_ANALYSIS: DOCSUMO_POST_MCA_ANALYSIS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DOCSUMO".
 */
export type DOCSUMO_TOOL_OUTPUTS = {
  GET_ENABLED_DOCUMENT_TYPES: DOCSUMO_GET_ENABLED_DOCUMENT_TYPES_OUTPUT
  GET_USER_DOCUMENT_TYPES: DOCSUMO_GET_USER_DOCUMENT_TYPES_OUTPUT
  POST_MCA_ANALYSIS: DOCSUMO_POST_MCA_ANALYSIS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DOCSUMO toolkit.
 */
export const DOCSUMO = {
  slug: "docsumo",
  tools: {
    /**
     * Tool to retrieve enabled document types summary for the user.
     */
    GET_ENABLED_DOCUMENT_TYPES: "DOCSUMO_GET_ENABLED_DOCUMENT_TYPES",
    /**
     * Tool to list available user document types and user info. use when you need to discover all supported document classifications and user limits.
     */
    GET_USER_DOCUMENT_TYPES: "DOCSUMO_GET_USER_DOCUMENT_TYPES",
    /**
     * Tool to perform merchant cash advance (mca) analysis on bank statements. use when you need a month-by-month breakdown of account credits, debits, and balances after documents are processed.
     */
    POST_MCA_ANALYSIS: "DOCSUMO_POST_MCA_ANALYSIS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DOCSUMO".
 */
export type DOCSUMO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DOCSUMO".
 */
export type DOCSUMO_TRIGGER_EVENTS = {}
