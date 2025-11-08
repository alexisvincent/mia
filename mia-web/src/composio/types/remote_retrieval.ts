// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of REMOTE_RETRIEVAL's REMOTE_RETRIEVAL_GET_ALL_ORDERS tool input.
 */
type REMOTE_RETRIEVAL_GET_ALL_ORDERS_INPUT = {
  /**
   * From Date
   * Format: date-time
   * @description ISO 8601 start date for filtering orders, e.g., '2023-01-01T00:00:00Z'.
   * @default null
   */
  from_date: unknown;
  /**
   * Page
   * @description Page number for pagination (must be ≥ 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of orders per page (1–100).
   * @default null
   */
  per_page: number | null;
  /**
   * Status
   * @description Filter orders by status, e.g., 'pending' or 'completed'.
   * @default null
   */
  status: string | null;
  /**
   * To Date
   * Format: date-time
   * @description ISO 8601 end date for filtering orders, e.g., '2023-01-31T23:59:59Z'.
   * @default null
   */
  to_date: unknown;
};

/**
 * Type of REMOTE_RETRIEVAL's REMOTE_RETRIEVAL_GET_ALL_ORDERS tool output.
 */
type REMOTE_RETRIEVAL_GET_ALL_ORDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Orders
       * @description List of order records.
       */
      orders: {
          /**
           * Created At
           * @description ISO 8601 creation timestamp.
           */
          created_at: string;
          /**
           * Currency
           * @description ISO currency code, e.g., 'USD'.
           */
          currency: string;
          /**
           * Customer Id
           * @description Customer identifier.
           */
          customer_id: string;
          /**
           * Id
           * @description Unique order identifier.
           */
          id: string;
          /**
           * Items
           * @description List of order items.
           */
          items: {
              /**
               * Item Id
               * @description Item identifier.
               */
              item_id: string;
              /**
               * Name
               * @description Name of the item.
               */
              name: string;
              /**
               * Price
               * @description Price per item.
               */
              price: number;
              /**
               * Quantity
               * @description Quantity ordered (must be ≥ 1).
               */
              quantity: number;
          }[];
          /**
           * Status
           * @description Current order status.
           */
          status: string;
          /**
           * Total
           * @description Total order amount.
           */
          total: number;
          /**
           * Updated At
           * @description ISO 8601 last update timestamp.
           */
          updated_at: string;
      }[];
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of orders per page.
       */
      per_page: number;
      /**
       * Total
       * @description Total number of orders.
       */
      total: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
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
 * Type of REMOTE_RETRIEVAL's REMOTE_RETRIEVAL_GET_COMPANY_DETAILS tool input.
 */
type REMOTE_RETRIEVAL_GET_COMPANY_DETAILS_INPUT = {
  /**
   * Company Id
   * @description Unique identifier for the company
   */
  company_id?: string;
  /**
   * Expand Contacts
   * @description Whether to include company contact details
   * @default false
   */
  expand_contacts: boolean | null;
  /**
   * Include Financials
   * @description Whether to include financial data
   * @default false
   */
  include_financials: boolean | null;
  /**
   * Industry Filter
   * @description Filter results by industry category
   * @default null
   */
  industry_filter: string | null;
};

/**
 * Type of REMOTE_RETRIEVAL's REMOTE_RETRIEVAL_GET_COMPANY_DETAILS tool output.
 */
type REMOTE_RETRIEVAL_GET_COMPANY_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Company's registered address
       */
      address: string;
      /**
       * Company Id
       * @description The company's unique identifier
       */
      company_id: string;
      /**
       * Contacts
       * @description List of contact persons
       * @default null
       */
      contacts: {
          /**
           * Email
           * Format: email
           * @description Contact's email address
           */
          email: unknown;
          /**
           * Name
           * @description Contact person's name
           */
          name: string;
          /**
           * Phone
           * @description Contact's phone number
           */
          phone: string;
      }[] | null;
      /**
       * Created At
       * @description Record creation timestamp (ISO8601)
       */
      created_at: string;
      /**
       * Error
       * @description Error message if request failed
       * @default null
       */
      error: string | null;
      /**
       * CompanyFinancials
       * @description Model for company financial data
       * @default null
       */
      financials: {
          /**
           * Profit
           * @description Latest annual profit
           */
          profit: number;
          /**
           * Revenue
           * @description Latest annual revenue
           */
          revenue: number;
          /**
           * Year
           * @description Reporting year
           */
          year: number;
      } | null;
      /**
       * Industry
       * @description Industry category
       */
      industry: string;
      /**
       * Name
       * @description The full name of the company
       */
      name: string;
      /**
       * Updated At
       * @description Record last update timestamp (ISO8601)
       */
      updated_at: string;
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
 * Type of REMOTE_RETRIEVAL's REMOTE_RETRIEVAL_VALIDATE_USER tool input.
 */
type REMOTE_RETRIEVAL_VALIDATE_USER_INPUT = object;

/**
 * Type of REMOTE_RETRIEVAL's REMOTE_RETRIEVAL_VALIDATE_USER tool output.
 */
type REMOTE_RETRIEVAL_VALIDATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description Email associated with the API key
       */
      email: string;
      /**
       * Message
       * @description Indicates the validation result, e.g., 'Valid Key!'
       */
      message: string;
      /**
       * Response Code
       * @description HTTP response code, e.g., 200
       */
      response_code: number;
      /**
       * Status
       * @description Status of the validation, e.g., 'Success'
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
 * Type map of all available tool input types for toolkit "REMOTE_RETRIEVAL".
 */
export type REMOTE_RETRIEVAL_TOOL_INPUTS = {
  GET_ALL_ORDERS: REMOTE_RETRIEVAL_GET_ALL_ORDERS_INPUT
  GET_COMPANY_DETAILS: REMOTE_RETRIEVAL_GET_COMPANY_DETAILS_INPUT
  VALIDATE_USER: REMOTE_RETRIEVAL_VALIDATE_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "REMOTE_RETRIEVAL".
 */
export type REMOTE_RETRIEVAL_TOOL_OUTPUTS = {
  GET_ALL_ORDERS: REMOTE_RETRIEVAL_GET_ALL_ORDERS_OUTPUT
  GET_COMPANY_DETAILS: REMOTE_RETRIEVAL_GET_COMPANY_DETAILS_OUTPUT
  VALIDATE_USER: REMOTE_RETRIEVAL_VALIDATE_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's REMOTE_RETRIEVAL toolkit.
 */
export const REMOTE_RETRIEVAL = {
  slug: "remote_retrieval",
  tools: {
    /**
     * Tool to retrieve a paginated list of all orders. use when you need to list orders with optional filters like status or dates. call after authentication.
     */
    GET_ALL_ORDERS: "REMOTE_RETRIEVAL_GET_ALL_ORDERS",
    /**
     * Tool to retrieve detailed information for a company. use after confirming a valid company id.
     */
    GET_COMPANY_DETAILS: "REMOTE_RETRIEVAL_GET_COMPANY_DETAILS",
    /**
     * Tool to validate the provided api key. use when you need to confirm the api key's validity.
     */
    VALIDATE_USER: "REMOTE_RETRIEVAL_VALIDATE_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "REMOTE_RETRIEVAL".
 */
export type REMOTE_RETRIEVAL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "REMOTE_RETRIEVAL".
 */
export type REMOTE_RETRIEVAL_TRIGGER_EVENTS = {}
