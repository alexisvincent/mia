// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PLISIO's PLISIO_GET_BALANCE tool input.
 */
type PLISIO_GET_BALANCE_INPUT = {
  /**
   * Psys Cid
   * @description Currency code to filter balances, e.g., 'BTC'
   */
  psys_cid?: string;
};

/**
 * Type of PLISIO's PLISIO_GET_BALANCE tool output.
 */
type PLISIO_GET_BALANCE_OUTPUT = {
  /**
   * Data
   * @description Mapping of currency codes to their balance details
   */
  data?: {
      [key: string]: {
          /**
           * Available
           * @description Available amount for withdrawal as a string
           */
          available: string;
          /**
           * Balance
           * @description Total balance amount as a string
           */
          balance: string;
          /**
           * Pending
           * @description Amount currently pending as a string
           */
          pending: string;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Result status, e.g., 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PLISIO's PLISIO_GET_BALANCES tool input.
 */
type PLISIO_GET_BALANCES_INPUT = {
  /**
   * Psys Cid
   * @description Currency code to filter balances, e.g., 'BTC'
   */
  psys_cid?: string;
};

/**
 * Type of PLISIO's PLISIO_GET_BALANCES tool output.
 */
type PLISIO_GET_BALANCES_OUTPUT = {
  /**
   * Data
   * @description Mapping of currency codes to their balance strings
   */
  data?: {
      [key: string]: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Result status, e.g., 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PLISIO's PLISIO_GET_FEE_PLANS tool input.
 */
type PLISIO_GET_FEE_PLANS_INPUT = {
  /**
   * Currency
   * @description Cryptocurrency symbol, e.g., 'BTC'
   */
  currency?: string;
};

/**
 * Type of PLISIO's PLISIO_GET_FEE_PLANS tool output.
 */
type PLISIO_GET_FEE_PLANS_OUTPUT = {
  /**
   * Data
   * @description Data object mapping plan keys to fee details
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
   * Status
   * @description API response status
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PLISIO's PLISIO_GET_OPERATIONS tool input.
 */
type PLISIO_GET_OPERATIONS_INPUT = {
  /**
   * Currency
   * @description Filter by cryptocurrency code, e.g., 'BTC', 'ETH'.
   * @default null
   */
  currency: string | null;
  /**
   * Limit
   * @description Number of results per page (max 100).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip for pagination, must be >= 0.
   * @default null
   */
  offset: number | null;
  /**
   * Page
   * @description Page number (0-indexed) for pagination, must be >= 0.
   * @default null
   */
  page: number | null;
  /**
   * Type
   * @description Filter by operation type: 'deposit' or 'withdraw'.
   * @default null
   * @enum {string|null}
   */
  type: "deposit" | "withdraw" | null;
};

/**
 * Type of PLISIO's PLISIO_GET_OPERATIONS tool output.
 */
type PLISIO_GET_OPERATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Crypto address for the operation.
       * @default null
       */
      address: string | null;
      /**
       * Amount
       * @description Amount of cryptocurrency in the operation.
       */
      amount: string;
      /**
       * Created At
       * @description Creation timestamp in ISO8601 format.
       */
      created_at: string;
      /**
       * Currency
       * @description Currency code, e.g., 'BTC', 'ETH'.
       */
      currency: string;
      /**
       * Id
       * @description Unique identifier for the operation.
       */
      id: string;
      /**
       * Status
       * @description Status of the operation, e.g., 'completed', 'pending'.
       */
      status: string;
      /**
       * Type
       * @description Operation type, e.g., 'deposit' or 'withdraw'.
       */
      type: string;
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
 * Type of PLISIO's PLISIO_GET_TRANSACTIONS tool input.
 */
type PLISIO_GET_TRANSACTIONS_INPUT = {
  /**
   * Currency
   * @description Filter by cryptocurrency code, e.g., 'BTC'
   * @default null
   */
  currency: string | null;
  /**
   * Limit
   * @description Number of results per page (max 100)
   * @default 50
   */
  limit: number;
  /**
   * Order Id
   * @description Filter by your own order ID
   * @default null
   */
  order_id: string | null;
  /**
   * Order Name
   * @description Filter by your own order name
   * @default null
   */
  order_name: string | null;
  /**
   * Page
   * @description Page number (0-indexed)
   * @default 0
   */
  page: number;
  /**
   * Since
   * @description Start date as UNIX timestamp (inclusive)
   * @default null
   */
  since: number | null;
  /**
   * Status
   * @description Filter by operation status (pending, paid, cancelled, error, expired, processing)
   * @default null
   * @enum {string|null}
   */
  status: "pending" | "paid" | "cancelled" | "error" | "expired" | "processing" | null;
  /**
   * To
   * @description End date as UNIX timestamp (inclusive)
   * @default null
   */
  to: number | null;
  /**
   * Type
   * @description Filter by operation type (withdraw, invoice, mass_withdraw)
   * @default null
   * @enum {string|null}
   */
  type: "withdraw" | "invoice" | "mass_withdraw" | null;
};

/**
 * Type of PLISIO's PLISIO_GET_TRANSACTIONS tool output.
 */
type PLISIO_GET_TRANSACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Plisio receiving address
       * @default null
       */
      address: string | null;
      /**
       * Amount
       * @description Operation amount
       */
      amount: string;
      /**
       * Commission
       * @description Plisio commission amount
       * @default null
       */
      commission: string | null;
      /**
       * Confirmations
       * @description Number of confirmations
       * @default null
       */
      confirmations: number | null;
      /**
       * Created At
       * @description Creation timestamp (UTC)
       * @default null
       */
      created_at: number | null;
      /**
       * Currency
       * @description Cryptocurrency code
       */
      currency: string;
      /**
       * Email
       * @description Customer email (if provided)
       * @default null
       */
      email: string | null;
      /**
       * Expire Utc
       * @description Expiration timestamp (UTC)
       * @default null
       */
      expire_utc: number | null;
      /**
       * Invoice Url
       * @description Direct invoice URL
       * @default null
       */
      invoice_url: string | null;
      /**
       * Order Id
       * @description Your order ID
       * @default null
       */
      order_id: string | null;
      /**
       * Order Name
       * @description Your order name/label
       * @default null
       */
      order_name: string | null;
      /**
       * Pending Amount
       * @description Pending amount remaining
       * @default null
       */
      pending_amount: string | null;
      /**
       * Required Confirmations
       * @description Required number of confirmations
       * @default null
       */
      required_confirmations: number | null;
      /**
       * Source Amount
       * @description Source amount paid
       * @default null
       */
      source_amount: string | null;
      /**
       * Source Currency
       * @description Source currency of payment
       * @default null
       */
      source_currency: string | null;
      /**
       * Status
       * @description Operation status
       */
      status: string;
      /**
       * To
       * @description Receiving address or invoice URL destination
       * @default null
       */
      to: string | null;
      /**
       * Tx Id
       * @description Blockchain transaction ID
       * @default null
       */
      tx_id: string | null;
      /**
       * Tx Urls
       * @description Blockchain explorer URLs for transaction
       * @default null
       */
      tx_urls: string[] | null;
      /**
       * Type
       * @description Operation type
       */
      type: string;
      /**
       * Updated At
       * @description Last updated timestamp (UTC)
       * @default null
       */
      updated_at: number | null;
      /**
       * Uuid
       * @description Operation unique identifier
       */
      uuid: string;
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
 * Type of PLISIO's PLISIO_GET_WITHDRAWALS tool input.
 */
type PLISIO_GET_WITHDRAWALS_INPUT = {
  /**
   * Currency
   * @description Filter by cryptocurrency code, e.g., 'BTC'
   * @default null
   */
  currency: string | null;
  /**
   * Limit
   * @description Number of results per page (max 100)
   * @default 50
   */
  limit: number;
  /**
   * Page
   * @description Page number (0-indexed)
   * @default 0
   */
  page: number;
  /**
   * Since
   * @description Start timestamp as UNIX epoch (inclusive)
   * @default null
   */
  since: number | null;
  /**
   * Status
   * @description Filter by withdrawal status (pending, paid, cancelled, error, expired, processing)
   * @default null
   * @enum {string|null}
   */
  status: "pending" | "paid" | "cancelled" | "error" | "expired" | "processing" | null;
  /**
   * To
   * @description End timestamp as UNIX epoch (inclusive)
   * @default null
   */
  to: number | null;
  /**
   * Wallet Hash
   * @description Filter by specific wallet hash
   * @default null
   */
  wallet_hash: string | null;
};

/**
 * Type of PLISIO's PLISIO_GET_WITHDRAWALS tool output.
 */
type PLISIO_GET_WITHDRAWALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Operation amount
       */
      amount: string;
      /**
       * Commission
       * @description Plisio commission amount
       * @default null
       */
      commission: string | null;
      /**
       * Created At
       * @description Creation timestamp (UTC)
       * @default null
       */
      created_at: number | null;
      /**
       * Currency
       * @description Cryptocurrency code
       */
      currency: string;
      /**
       * Status
       * @description Operation status
       */
      status: string;
      /**
       * Tx Id
       * @description Blockchain transaction ID
       * @default null
       */
      tx_id: string | null;
      /**
       * Type
       * @description Operation type
       */
      type: string;
      /**
       * Updated At
       * @description Last updated timestamp (UTC)
       * @default null
       */
      updated_at: number | null;
      /**
       * Uuid
       * @description Operation unique identifier
       */
      uuid: string;
      /**
       * Wallet Hash
       * @description Plisio wallet hash
       * @default null
       */
      wallet_hash: string | null;
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
 * Type map of all available tool input types for toolkit "PLISIO".
 */
export type PLISIO_TOOL_INPUTS = {
  GET_BALANCE: PLISIO_GET_BALANCE_INPUT
  GET_BALANCES: PLISIO_GET_BALANCES_INPUT
  GET_FEE_PLANS: PLISIO_GET_FEE_PLANS_INPUT
  GET_OPERATIONS: PLISIO_GET_OPERATIONS_INPUT
  GET_TRANSACTIONS: PLISIO_GET_TRANSACTIONS_INPUT
  GET_WITHDRAWALS: PLISIO_GET_WITHDRAWALS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PLISIO".
 */
export type PLISIO_TOOL_OUTPUTS = {
  GET_BALANCE: PLISIO_GET_BALANCE_OUTPUT
  GET_BALANCES: PLISIO_GET_BALANCES_OUTPUT
  GET_FEE_PLANS: PLISIO_GET_FEE_PLANS_OUTPUT
  GET_OPERATIONS: PLISIO_GET_OPERATIONS_OUTPUT
  GET_TRANSACTIONS: PLISIO_GET_TRANSACTIONS_OUTPUT
  GET_WITHDRAWALS: PLISIO_GET_WITHDRAWALS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PLISIO toolkit.
 */
export const PLISIO = {
  slug: "plisio",
  tools: {
    /**
     * Tool to retrieve all account balances. use after api credentials are configured.
     */
    GET_BALANCE: "PLISIO_GET_BALANCE",
    /**
     * Tool to retrieve balances for a specific cryptocurrency. requires psys cid (currency code).
     */
    GET_BALANCES: "PLISIO_GET_BALANCES",
    /**
     * Tool to retrieve available fee plans for a given cryptocurrency. specify a currency symbol like 'btc', 'eth' to get fee plan details.
     */
    GET_FEE_PLANS: "PLISIO_GET_FEE_PLANS",
    /**
     * Tool to retrieve a list of operations (deposits and withdrawals). use when you need to fetch deposit and withdrawal transactions with optional filters and pagination. example: getoperations(currency='btc', limit=50).
     */
    GET_OPERATIONS: "PLISIO_GET_OPERATIONS",
    /**
     * Tool to retrieve a list of transactions and invoices. use after authenticating with your api key to fetch historical operations with optional filters and pagination. example: gettransactions(status='paid', limit=20).
     */
    GET_TRANSACTIONS: "PLISIO_GET_TRANSACTIONS",
    /**
     * Tool to retrieve a list of withdrawal operations. use when you need to fetch only withdrawal operations with optional filters and pagination. example: getwithdrawals(status='paid', limit=20).
     */
    GET_WITHDRAWALS: "PLISIO_GET_WITHDRAWALS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PLISIO".
 */
export type PLISIO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PLISIO".
 */
export type PLISIO_TRIGGER_EVENTS = {}
