// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of RAMP's RAMP_CREATE_DEPARTMENT tool input.
 */
type RAMP_CREATE_DEPARTMENT_INPUT = {
  /**
   * Name
   * @description Name of the department
   */
  name?: string;
  /**
   * Parent Department Id
   * @description Parent department ID for hierarchy
   * @default null
   */
  parent_department_id: string | null;
};

/**
 * Type of RAMP's RAMP_CREATE_DEPARTMENT tool output.
 */
type RAMP_CREATE_DEPARTMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The department creation API response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_CREATE_NEW_CUSTOM_ACCOUNTING_FIELD tool input.
 */
type RAMP_CREATE_NEW_CUSTOM_ACCOUNTING_FIELD_INPUT = {
  /**
   * Id
   * @description Remote/external ID of custom accounting field from ERP system.
   */
  id?: string;
  /**
   * Input Type
   * @description The input type could be SINGLE_CHOICE, BOOLEAN or FREE_FORM_TEXT.
   * @enum {string}
   */
  input_type?: "SINGLE_CHOICE" | "BOOLEAN" | "FREE_FORM_TEXT";
  /**
   * Is Required For
   * @description Types of objects that require this accounting field to be used for coding before they can be marked as ready to sync.
   * @default null
   */
  is_required_for: string[] | null;
  /**
   * Is Splittable
   * @description If set to True, the accounting field can be used to annotate split line items.
   * @default null
   */
  is_splittable: boolean | null;
  /**
   * Name
   * @description Name of the custom accounting field.
   */
  name?: string;
};

/**
 * Type of RAMP's RAMP_CREATE_NEW_CUSTOM_ACCOUNTING_FIELD tool output.
 */
type RAMP_CREATE_NEW_CUSTOM_ACCOUNTING_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The custom accounting field creation API response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_FETCH_CUSTOM_ACCOUNTING_FIELD tool input.
 */
type RAMP_FETCH_CUSTOM_ACCOUNTING_FIELD_INPUT = {
  /**
   * Field Id
   * @description UUID of the custom accounting field.
   */
  field_id?: string;
};

/**
 * Type of RAMP's RAMP_FETCH_CUSTOM_ACCOUNTING_FIELD tool output.
 */
type RAMP_FETCH_CUSTOM_ACCOUNTING_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The custom accounting field API response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_GET_ALL_TRANSACTIONS tool input.
 */
type RAMP_GET_ALL_TRANSACTIONS_INPUT = {
  /**
   * Accounting Field Selection Id
   * @description Filter transactions by accounting field selection UUID
   * @default null
   */
  accounting_field_selection_id: string | null;
  /**
   * Approval Status
   * @description Filter by transaction approval status
   * @default null
   */
  approval_status: string | null;
  /**
   * Awaiting Approval By User Id
   * @description Filter for transactions awaiting approval by a specific user UUID
   * @default null
   */
  awaiting_approval_by_user_id: string | null;
  /**
   * Card Id
   * @description Filter by physical card UUID
   * @default null
   */
  card_id: string | null;
  /**
   * Department Id
   * @description Filter by department UUID
   * @default null
   */
  department_id: string | null;
  /**
   * Entity Id
   * @description Filter transactions by business entity UUID
   * @default null
   */
  entity_id: string | null;
  /**
   * From Date
   * @description Filter for transactions with user_transaction_time after the given date (ISO 8601 datetime)
   * @default null
   */
  from_date: string | null;
  /**
   * Has No Sync Commits
   * @description Filter for transactions that have not been synced to ERP systems yet
   * @default null
   */
  has_no_sync_commits: boolean | null;
  /**
   * Include Merchant Data
   * @description Include all purchase data provided by the merchant
   * @default null
   */
  include_merchant_data: boolean | null;
  /**
   * Limit Id
   * @description Filter by limit UUID
   * @default null
   */
  limit_id: string | null;
  /**
   * Location Id
   * @description Filter by location UUID
   * @default null
   */
  location_id: string | null;
  /**
   * Max Amount
   * @description Filter for transactions with amount smaller than given amount (USD)
   * @default null
   */
  max_amount: string | null;
  /**
   * Merchant Id
   * @description Filter by merchant UUID
   * @default null
   */
  merchant_id: string | null;
  /**
   * Min Amount
   * @description Filter for transactions with amount larger than given amount (USD)
   * @default null
   */
  min_amount: string | null;
  /**
   * Order By Amount Asc
   * @description Sort transactions by amount in ascending order
   * @default null
   */
  order_by_amount_asc: boolean | null;
  /**
   * Order By Amount Desc
   * @description Sort transactions by amount in descending order
   * @default null
   */
  order_by_amount_desc: boolean | null;
  /**
   * Order By Date Asc
   * @description Sort transactions by user_transaction_date in ascending order
   * @default null
   */
  order_by_date_asc: boolean | null;
  /**
   * Order By Date Desc
   * @description Sort transactions by user_transaction_date in descending order
   * @default null
   */
  order_by_date_desc: boolean | null;
  /**
   * Page Size
   * @description Number of results per page (2-100, default: 20)
   * @default 20
   */
  page_size: number | null;
  /**
   * Requires Memo
   * @description Filters for transactions which require a memo but do not have one (can only be set to true)
   * @default null
   */
  requires_memo: boolean | null;
  /**
   * Sk Category Id
   * @description Filter by Ramp category code (integer)
   * @default null
   */
  sk_category_id: string | null;
  /**
   * Spend Program Id
   * @description Filter by spend program UUID
   * @default null
   */
  spend_program_id: string | null;
  /**
   * Start
   * @description ID of the last entity of the previous page for pagination
   * @default null
   */
  start: string | null;
  /**
   * State
   * @description Filter by transaction state. If set to 'ALL', all transactions including 'DECLINED' will be listed
   * @default null
   */
  state: string | null;
  /**
   * Statement Id
   * @description Filter by statement UUID
   * @default null
   */
  statement_id: string | null;
  /**
   * Sync Ready
   * @description Filter for transactions that are coded with accounting fields and ready to sync to ERP systems
   * @default null
   */
  sync_ready: boolean | null;
  /**
   * Sync Status
   * @description Filter for transactions by sync status. Supersedes sync_ready and has_no_sync_commits if set
   * @default null
   */
  sync_status: string | null;
  /**
   * Synced After
   * @description Filter for transactions synced after the given date (ISO 8601 datetime)
   * @default null
   */
  synced_after: string | null;
  /**
   * To Date
   * @description Filter for transactions with user_transaction_time before the given date (ISO 8601 datetime, default: today)
   * @default null
   */
  to_date: string | null;
  /**
   * Trip Id
   * @description Filter for trip UUID
   * @default null
   */
  trip_id: string | null;
  /**
   * User Id
   * @description Filter by user UUID
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of RAMP's RAMP_GET_ALL_TRANSACTIONS tool output.
 */
type RAMP_GET_ALL_TRANSACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The transactions API response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_GET_CARD tool input.
 */
type RAMP_GET_CARD_INPUT = {
  /**
   * Card Id
   * @description The ID of the card to retrieve
   */
  card_id?: string;
};

/**
 * Type of RAMP's RAMP_GET_CARD tool output.
 */
type RAMP_GET_CARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The card details API response. Key fields typically include: 'id', 'display_name', 'state' (ACTIVE, SUSPENDED, TERMINATED), 'is_physical', 'last_four', 'expiration', 'cardholder_id', 'cardholder_name', 'created_at', 'entity_id', 'card_program_id', 'has_program_overridden', 'spending_restrictions' (with amount, interval, categories, blocked_categories, suspended, auto_lock_date, transaction_amount_limit), 'fulfillment' (with shipping details and status), and more.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_GET_DEPARTMENT tool input.
 */
type RAMP_GET_DEPARTMENT_INPUT = {
  /**
   * Department Id
   * @description The ID of the department to retrieve
   */
  department_id?: string;
};

/**
 * Type of RAMP's RAMP_GET_DEPARTMENT tool output.
 */
type RAMP_GET_DEPARTMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The department details API response. Key fields typically include: 'id', 'name', 'code' (department code), 'parent_department_id' (for hierarchical structure), 'is_deletable', 'created_at', and other department-specific metadata.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_GET_MY_CARDS tool input.
 */
type RAMP_GET_MY_CARDS_INPUT = {
  /**
   * Card Type
   * @description Filter by card type: PHYSICAL, VIRTUAL
   * @default null
   */
  card_type: string | null;
  /**
   * Page Size
   * @description Maximum number of cards to return (default: 50, max: 100)
   * @default 50
   */
  page_size: number;
  /**
   * Page Token
   * @description Token for pagination - use 'page.cursor' from previous response
   * @default null
   */
  page_token: string | null;
  /**
   * State
   * @description Filter by card state: ACTIVE, SUSPENDED, TERMINATED
   * @default null
   */
  state: string | null;
};

/**
 * Type of RAMP's RAMP_GET_MY_CARDS tool output.
 */
type RAMP_GET_MY_CARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The cards API response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_GET_MY_TRANSACTIONS tool input.
 */
type RAMP_GET_MY_TRANSACTIONS_INPUT = {
  /**
   * Accounting Field Selection Id
   * @description Filter transactions by accounting field selection UUID
   * @default null
   */
  accounting_field_selection_id: string | null;
  /**
   * Approval Status
   * @description Filter by transaction approval status
   * @default null
   */
  approval_status: string | null;
  /**
   * Awaiting Approval By User Id
   * @description Filter for transactions awaiting approval by a specific user UUID
   * @default null
   */
  awaiting_approval_by_user_id: string | null;
  /**
   * Card Id
   * @description Filter by physical card UUID
   * @default null
   */
  card_id: string | null;
  /**
   * Department Id
   * @description Filter by department UUID
   * @default null
   */
  department_id: string | null;
  /**
   * Entity Id
   * @description Filter transactions by business entity UUID
   * @default null
   */
  entity_id: string | null;
  /**
   * From Date
   * @description Filter for transactions with user_transaction_time after the given date (ISO 8601 datetime)
   * @default null
   */
  from_date: string | null;
  /**
   * Has No Sync Commits
   * @description Filter for transactions that have not been synced to ERP systems yet
   * @default null
   */
  has_no_sync_commits: boolean | null;
  /**
   * Include Merchant Data
   * @description Include all purchase data provided by the merchant
   * @default null
   */
  include_merchant_data: boolean | null;
  /**
   * Limit Id
   * @description Filter by limit UUID
   * @default null
   */
  limit_id: string | null;
  /**
   * Location Id
   * @description Filter by location UUID
   * @default null
   */
  location_id: string | null;
  /**
   * Max Amount
   * @description Filter for transactions with amount smaller than given amount (USD)
   * @default null
   */
  max_amount: string | null;
  /**
   * Merchant Id
   * @description Filter by merchant UUID
   * @default null
   */
  merchant_id: string | null;
  /**
   * Min Amount
   * @description Filter for transactions with amount larger than given amount (USD)
   * @default null
   */
  min_amount: string | null;
  /**
   * Order By Amount Asc
   * @description Sort transactions by amount in ascending order
   * @default null
   */
  order_by_amount_asc: boolean | null;
  /**
   * Order By Amount Desc
   * @description Sort transactions by amount in descending order
   * @default null
   */
  order_by_amount_desc: boolean | null;
  /**
   * Order By Date Asc
   * @description Sort transactions by user_transaction_date in ascending order
   * @default null
   */
  order_by_date_asc: boolean | null;
  /**
   * Order By Date Desc
   * @description Sort transactions by user_transaction_date in descending order
   * @default null
   */
  order_by_date_desc: boolean | null;
  /**
   * Page Size
   * @description Number of results per page (2-100, default: 20)
   * @default 20
   */
  page_size: number | null;
  /**
   * Requires Memo
   * @description Filters for transactions which require a memo but do not have one (can only be set to true)
   * @default null
   */
  requires_memo: boolean | null;
  /**
   * Sk Category Id
   * @description Filter by Ramp category code (integer)
   * @default null
   */
  sk_category_id: string | null;
  /**
   * Spend Program Id
   * @description Filter by spend program UUID
   * @default null
   */
  spend_program_id: string | null;
  /**
   * Start
   * @description ID of the last entity of the previous page for pagination
   * @default null
   */
  start: string | null;
  /**
   * State
   * @description Filter by transaction state. If set to 'ALL', all transactions including 'DECLINED' will be listed
   * @default null
   */
  state: string | null;
  /**
   * Statement Id
   * @description Filter by statement UUID
   * @default null
   */
  statement_id: string | null;
  /**
   * Sync Ready
   * @description Filter for transactions that are coded with accounting fields and ready to sync to ERP systems
   * @default null
   */
  sync_ready: boolean | null;
  /**
   * Sync Status
   * @description Filter for transactions by sync status. Supersedes sync_ready and has_no_sync_commits if set
   * @default null
   */
  sync_status: string | null;
  /**
   * Synced After
   * @description Filter for transactions synced after the given date (ISO 8601 datetime)
   * @default null
   */
  synced_after: string | null;
  /**
   * To Date
   * @description Filter for transactions with user_transaction_time before the given date (ISO 8601 datetime)
   * @default null
   */
  to_date: string | null;
  /**
   * Trip Id
   * @description Filter for trip UUID
   * @default null
   */
  trip_id: string | null;
  /**
   * User Id
   * @description Filter by user UUID
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of RAMP's RAMP_GET_MY_TRANSACTIONS tool output.
 */
type RAMP_GET_MY_TRANSACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The transactions API response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_GET_STATEMENT tool input.
 */
type RAMP_GET_STATEMENT_INPUT = {
  /**
   * Format
   * @description Format of the statement: json, pdf, csv
   * @default json
   */
  format: string;
  /**
   * Statement Id
   * @description ID of the statement to retrieve
   */
  statement_id?: string;
};

/**
 * Type of RAMP's RAMP_GET_STATEMENT tool output.
 */
type RAMP_GET_STATEMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The statement API response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_GET_TRANSACTION tool input.
 */
type RAMP_GET_TRANSACTION_INPUT = {
  /**
   * Transaction Id
   * @description ID of the transaction to retrieve
   */
  transaction_id?: string;
};

/**
 * Type of RAMP's RAMP_GET_TRANSACTION tool output.
 */
type RAMP_GET_TRANSACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The transaction API response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_GET_VENDOR tool input.
 */
type RAMP_GET_VENDOR_INPUT = {
  /**
   * Vendor Id
   * @description The ID of the vendor to retrieve
   */
  vendor_id?: string;
};

/**
 * Type of RAMP's RAMP_GET_VENDOR tool output.
 */
type RAMP_GET_VENDOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The vendor details API response. Key fields typically include: 'id', 'name', 'is_active', 'is_deletable', 'country', 'state', 'address', 'contacts', 'vendor_type', 'billing_frequency', 'description', 'sk_category_name' (spending category), 'sk_category_id', 'total_spend_all_time', 'total_spend_ytd', 'total_spend_last_30_days', 'total_spend_last_365_days' (all as amount/currency objects), 'merchant_id', 'created_at', 'federal_tax_classification', 'name_legal', 'tax_address', and more.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_ISSUE_VIRTUAL_CARD tool input.
 */
type RAMP_ISSUE_VIRTUAL_CARD_INPUT = {
  /**
   * Card Program Id
   * @description Card program ID to use for the card
   * @default null
   */
  card_program_id: string | null;
  /**
   * Display Name
   * @description Display name for the card
   * @default null
   */
  display_name: string | null;
  /**
   * Memo
   * @description Memo for the card creation
   * @default null
   */
  memo: string | null;
  /**
   * SpendingRestrictions
   * @description Spending restrictions for the card
   * @default null
   */
  spending_restrictions: {
      /**
       * Amount
       * @description Spending limit amount in cents
       */
      amount: number;
      /**
       * Auto Lock Date
       * @description ISO 8601 date when the card will automatically lock
       * @default null
       */
      auto_lock_date: string | null;
      /**
       * Blocked Categories
       * @description List of blocked merchant category codes
       * @default null
       */
      blocked_categories: number[] | null;
      /**
       * Categories
       * @description List of allowed merchant category codes
       * @default null
       */
      categories: number[] | null;
      /**
       * Interval
       * @description Spending limit interval: DAILY, WEEKLY, MONTHLY, QUARTERLY, YEARLY, or TOTAL
       */
      interval: string;
      /**
       * Transaction Amount Limit
       * @description Maximum amount in cents for a single transaction
       * @default null
       */
      transaction_amount_limit: number | null;
  } | null;
  /**
   * User Id
   * @description User ID to issue the card to
   */
  user_id?: string;
};

/**
 * Type of RAMP's RAMP_ISSUE_VIRTUAL_CARD tool output.
 */
type RAMP_ISSUE_VIRTUAL_CARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The virtual card creation API response. Key fields include: 'id' (card ID), 'display_name', 'last_four', 'expiration', 'cardholder_id', 'cardholder_name', 'state', 'spending_restrictions', 'card_number' (full card number), 'cvv', 'created_at', and more sensitive card details.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_LIST_CARDS tool input.
 */
type RAMP_LIST_CARDS_INPUT = {
  /**
   * Card Program Id
   * @description Filter by card program UUID
   * @default null
   */
  card_program_id: string | null;
  /**
   * Display Name
   * @description Filter by display name
   * @default null
   */
  display_name: string | null;
  /**
   * Entity Id
   * @description Filter by business entity UUID
   * @default null
   */
  entity_id: string | null;
  /**
   * Is Activated
   * @description Filter only for activated cards. Defaults to True if not specified
   * @default null
   */
  is_activated: boolean | null;
  /**
   * Is Terminated
   * @description Filter only for terminated cards. Defaults to False if not specified
   * @default null
   */
  is_terminated: boolean | null;
  /**
   * Page Size
   * @description Number of results per page (2-100, default: 20)
   * @default 20
   */
  page_size: number | null;
  /**
   * Start
   * @description ID of the last entity of the previous page for pagination
   * @default null
   */
  start: string | null;
  /**
   * User Id
   * @description Filter by card owner UUID
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of RAMP's RAMP_LIST_CARDS tool output.
 */
type RAMP_LIST_CARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The cards API response containing a list of cards. Key fields include 'data' (array of card objects), 'page' (pagination info). Each card typically includes: 'id', 'display_name', 'state', 'is_physical', 'last_four', 'expiration', 'cardholder_id', 'cardholder_name', 'created_at', 'entity_id', 'spending_restrictions' (with amount, interval, categories), 'fulfillment' details, and more.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_LIST_DEPARTMENTS tool input.
 */
type RAMP_LIST_DEPARTMENTS_INPUT = {
  /**
   * Page Size
   * @description Number of results per page (2-100, default: 20)
   * @default 20
   */
  page_size: number | null;
  /**
   * Start
   * @description ID of the last entity of the previous page for pagination
   * @default null
   */
  start: string | null;
};

/**
 * Type of RAMP's RAMP_LIST_DEPARTMENTS tool output.
 */
type RAMP_LIST_DEPARTMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The departments API response containing a list of departments. Key fields include 'data' (array of department objects), 'page' (pagination info). Each department typically includes: 'id', 'name', 'code', 'parent_department_id', 'is_deletable', 'created_at', and more.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_LIST_STATEMENTS tool input.
 */
type RAMP_LIST_STATEMENTS_INPUT = {
  /**
   * From Date
   * @description Filter statements with end_date on or after this date (ISO 8601 datetime)
   * @default null
   */
  from_date: string | null;
  /**
   * Page Size
   * @description Number of results per page (2-100, default: 20)
   * @default 20
   */
  page_size: number | null;
  /**
   * Start
   * @description ID of the last entity of the previous page for pagination
   * @default null
   */
  start: string | null;
  /**
   * To Date
   * @description Filter statements with end_date on or before this date (ISO 8601 datetime). Defaults to current time
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of RAMP's RAMP_LIST_STATEMENTS tool output.
 */
type RAMP_LIST_STATEMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The statements list API response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_LIST_USERS tool input.
 */
type RAMP_LIST_USERS_INPUT = {
  /**
   * Department Id
   * @description Filter by department UUID
   * @default null
   */
  department_id: string | null;
  /**
   * Email
   * @description Filter by email address
   * @default null
   */
  email: string | null;
  /**
   * Employee Id
   * @description Filter by user employee_id
   * @default null
   */
  employee_id: string | null;
  /**
   * Entity Id
   * @description Filter by business entity UUID
   * @default null
   */
  entity_id: string | null;
  /**
   * Location Id
   * @description Filter by location UUID
   * @default null
   */
  location_id: string | null;
  /**
   * Page Size
   * @description Number of results per page (2-100, default: 20)
   * @default 20
   */
  page_size: number | null;
  /**
   * Role
   * @description Filter by user role
   * @default null
   */
  role: string | null;
  /**
   * Start
   * @description ID of the last entity of the previous page for pagination
   * @default null
   */
  start: string | null;
};

/**
 * Type of RAMP's RAMP_LIST_USERS tool output.
 */
type RAMP_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The users list API response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_LIST_VENDORS tool input.
 */
type RAMP_LIST_VENDORS_INPUT = {
  /**
   * From Created At
   * @description Show only vendors with created_at after this date (ISO 8601 datetime)
   * @default null
   */
  from_created_at: string | null;
  /**
   * Is Active
   * @description Filter by vendor active status
   * @default null
   */
  is_active: boolean | null;
  /**
   * Name
   * @description Filter vendors by name
   * @default null
   */
  name: string | null;
  /**
   * Page Size
   * @description Number of results per page (2-100, default: 20)
   * @default 20
   */
  page_size: number | null;
  /**
   * Sk Category Ids
   * @description Show only vendors whose sk_category_id matches a Ramp Category Code in the passed list. Expects a comma-separated list of integers
   * @default null
   */
  sk_category_ids: string | null;
  /**
   * Start
   * @description ID of the last entity of the previous page for pagination
   * @default null
   */
  start: string | null;
  /**
   * Vendor Owner Id
   * @description Unique identifier of the user which owns this vendor (UUID)
   * @default null
   */
  vendor_owner_id: string | null;
};

/**
 * Type of RAMP's RAMP_LIST_VENDORS tool output.
 */
type RAMP_LIST_VENDORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The vendors API response containing a list of vendors with their details. Key fields include 'data' (array of vendor objects), 'page' (pagination info). Each vendor typically includes: 'id', 'name', 'is_active', 'sk_category_name' (spending category), 'total_spend_all_time', 'total_spend_ytd', 'total_spend_last_30_days', 'total_spend_last_365_days' (all as amount/currency objects), 'merchant_id', 'created_at', 'country', 'state', 'contacts', and more.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_OPTIONS_FOR_CUSTOM_ACCOUNTING_FIELD tool input.
 */
type RAMP_OPTIONS_FOR_CUSTOM_ACCOUNTING_FIELD_INPUT = {
  /**
   * Field Id
   * @description UUID of the custom accounting field.
   */
  field_id?: string;
};

/**
 * Type of RAMP's RAMP_OPTIONS_FOR_CUSTOM_ACCOUNTING_FIELD tool output.
 */
type RAMP_OPTIONS_FOR_CUSTOM_ACCOUNTING_FIELD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The accounting field options API response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_SEARCH_TRANSACTIONS tool input.
 */
type RAMP_SEARCH_TRANSACTIONS_INPUT = {
  /**
   * Accounting Field Selection Id
   * @description Filter transactions by accounting field selection UUID
   * @default null
   */
  accounting_field_selection_id: string | null;
  /**
   * Approval Status
   * @description Filter by transaction approval status
   * @default null
   */
  approval_status: string | null;
  /**
   * Awaiting Approval By User Id
   * @description Filter for transactions awaiting approval by a specific user UUID
   * @default null
   */
  awaiting_approval_by_user_id: string | null;
  /**
   * Card Id
   * @description Filter by physical card UUID
   * @default null
   */
  card_id: string | null;
  /**
   * Department Id
   * @description Filter by department UUID
   * @default null
   */
  department_id: string | null;
  /**
   * Entity Id
   * @description Filter transactions by business entity UUID
   * @default null
   */
  entity_id: string | null;
  /**
   * From Date
   * @description Filter for transactions with user_transaction_time after the given date (ISO 8601 datetime)
   * @default null
   */
  from_date: string | null;
  /**
   * Has No Sync Commits
   * @description Filter for transactions that have not been synced to ERP systems yet
   * @default null
   */
  has_no_sync_commits: boolean | null;
  /**
   * Include Merchant Data
   * @description Include all purchase data provided by the merchant
   * @default null
   */
  include_merchant_data: boolean | null;
  /**
   * Limit Id
   * @description Filter by limit UUID
   * @default null
   */
  limit_id: string | null;
  /**
   * Location Id
   * @description Filter by location UUID
   * @default null
   */
  location_id: string | null;
  /**
   * Max Amount
   * @description Filter for transactions with amount smaller than given amount (USD)
   * @default null
   */
  max_amount: string | null;
  /**
   * Merchant Id
   * @description Filter by merchant UUID
   * @default null
   */
  merchant_id: string | null;
  /**
   * Min Amount
   * @description Filter for transactions with amount larger than given amount (USD)
   * @default null
   */
  min_amount: string | null;
  /**
   * Order By Amount Asc
   * @description Sort transactions by amount in ascending order
   * @default null
   */
  order_by_amount_asc: boolean | null;
  /**
   * Order By Amount Desc
   * @description Sort transactions by amount in descending order
   * @default null
   */
  order_by_amount_desc: boolean | null;
  /**
   * Order By Date Asc
   * @description Sort transactions by user_transaction_date in ascending order
   * @default null
   */
  order_by_date_asc: boolean | null;
  /**
   * Order By Date Desc
   * @description Sort transactions by user_transaction_date in descending order
   * @default null
   */
  order_by_date_desc: boolean | null;
  /**
   * Page Size
   * @description Number of results per page (2-100, default: 20)
   * @default 20
   */
  page_size: number | null;
  /**
   * Query
   * @description Search query for merchant name, memo, or other transaction details
   */
  query?: string;
  /**
   * Requires Memo
   * @description Filters for transactions which require a memo but do not have one (can only be set to true)
   * @default null
   */
  requires_memo: boolean | null;
  /**
   * Sk Category Id
   * @description Filter by Ramp category code (integer)
   * @default null
   */
  sk_category_id: string | null;
  /**
   * Spend Program Id
   * @description Filter by spend program UUID
   * @default null
   */
  spend_program_id: string | null;
  /**
   * Start
   * @description ID of the last entity of the previous page for pagination
   * @default null
   */
  start: string | null;
  /**
   * State
   * @description Filter by transaction state. If set to 'ALL', all transactions including 'DECLINED' will be listed
   * @default null
   */
  state: string | null;
  /**
   * Statement Id
   * @description Filter by statement UUID
   * @default null
   */
  statement_id: string | null;
  /**
   * Sync Ready
   * @description Filter for transactions that are coded with accounting fields and ready to sync to ERP systems
   * @default null
   */
  sync_ready: boolean | null;
  /**
   * Sync Status
   * @description Filter for transactions by sync status. Supersedes sync_ready and has_no_sync_commits if set
   * @default null
   */
  sync_status: string | null;
  /**
   * Synced After
   * @description Filter for transactions synced after the given date (ISO 8601 datetime)
   * @default null
   */
  synced_after: string | null;
  /**
   * To Date
   * @description Filter for transactions with user_transaction_time before the given date (ISO 8601 datetime)
   * @default null
   */
  to_date: string | null;
  /**
   * Trip Id
   * @description Filter for trip UUID
   * @default null
   */
  trip_id: string | null;
  /**
   * User Id
   * @description Filter by user UUID
   * @default null
   */
  user_id: string | null;
};

/**
 * Type of RAMP's RAMP_SEARCH_TRANSACTIONS tool output.
 */
type RAMP_SEARCH_TRANSACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The transactions search API response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_UPDATE_CARD_LIMIT tool input.
 */
type RAMP_UPDATE_CARD_LIMIT_INPUT = {
  /**
   * Amount
   * @description New spending limit amount in cents
   */
  amount?: number;
  /**
   * Card Id
   * @description The ID of the card to update limits for
   */
  card_id?: string;
  /**
   * Interval
   * @description Spending limit interval: DAILY, WEEKLY, MONTHLY, QUARTERLY, YEARLY, or TOTAL
   */
  interval?: string;
};

/**
 * Type of RAMP's RAMP_UPDATE_CARD_LIMIT tool output.
 */
type RAMP_UPDATE_CARD_LIMIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The limit update API response. Returns the limits associated with the card after update.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_UPDATE_DEPARTMENT tool input.
 */
type RAMP_UPDATE_DEPARTMENT_INPUT = {
  /**
   * Code
   * @description New department code/identifier
   * @default null
   */
  code: string | null;
  /**
   * Department Id
   * @description ID of the department to update
   */
  department_id?: string;
  /**
   * Name
   * @description New name for the department
   * @default null
   */
  name: string | null;
  /**
   * Parent Department Id
   * @description New parent department ID
   * @default null
   */
  parent_department_id: string | null;
};

/**
 * Type of RAMP's RAMP_UPDATE_DEPARTMENT tool output.
 */
type RAMP_UPDATE_DEPARTMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The department update API response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of RAMP's RAMP_UPLOAD_NEW_OPTIONS tool input.
 */
type RAMP_UPLOAD_NEW_OPTIONS_INPUT = {
  /**
   * Field Id
   * @description UUID of the custom accounting field.
   */
  field_id?: string;
  /**
   * Options
   * @description A list of field options for a given custom accounting field.
   */
  options?: {
      /**
       * Code
       * @description Code of the custom accounting field option; e.g. 400-100.
       * @default null
       */
      code: string | null;
      /**
       * Id
       * @description Remote/external ID of custom accounting field option from ERP system.
       */
      id: string;
      /**
       * Value
       * @description e.g. Employees:Salaries & Wages
       */
      value: string;
  }[];
};

/**
 * Type of RAMP's RAMP_UPLOAD_NEW_OPTIONS tool output.
 */
type RAMP_UPLOAD_NEW_OPTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The accounting field options upload API response.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "RAMP".
 */
export type RAMP_TOOL_INPUTS = {
  CREATE_DEPARTMENT: RAMP_CREATE_DEPARTMENT_INPUT
  CREATE_NEW_CUSTOM_ACCOUNTING_FIELD: RAMP_CREATE_NEW_CUSTOM_ACCOUNTING_FIELD_INPUT
  FETCH_CUSTOM_ACCOUNTING_FIELD: RAMP_FETCH_CUSTOM_ACCOUNTING_FIELD_INPUT
  GET_ALL_TRANSACTIONS: RAMP_GET_ALL_TRANSACTIONS_INPUT
  GET_CARD: RAMP_GET_CARD_INPUT
  GET_DEPARTMENT: RAMP_GET_DEPARTMENT_INPUT
  GET_MY_CARDS: RAMP_GET_MY_CARDS_INPUT
  GET_MY_TRANSACTIONS: RAMP_GET_MY_TRANSACTIONS_INPUT
  GET_STATEMENT: RAMP_GET_STATEMENT_INPUT
  GET_TRANSACTION: RAMP_GET_TRANSACTION_INPUT
  GET_VENDOR: RAMP_GET_VENDOR_INPUT
  ISSUE_VIRTUAL_CARD: RAMP_ISSUE_VIRTUAL_CARD_INPUT
  LIST_CARDS: RAMP_LIST_CARDS_INPUT
  LIST_DEPARTMENTS: RAMP_LIST_DEPARTMENTS_INPUT
  LIST_STATEMENTS: RAMP_LIST_STATEMENTS_INPUT
  LIST_USERS: RAMP_LIST_USERS_INPUT
  LIST_VENDORS: RAMP_LIST_VENDORS_INPUT
  OPTIONS_FOR_CUSTOM_ACCOUNTING_FIELD: RAMP_OPTIONS_FOR_CUSTOM_ACCOUNTING_FIELD_INPUT
  SEARCH_TRANSACTIONS: RAMP_SEARCH_TRANSACTIONS_INPUT
  UPDATE_CARD_LIMIT: RAMP_UPDATE_CARD_LIMIT_INPUT
  UPDATE_DEPARTMENT: RAMP_UPDATE_DEPARTMENT_INPUT
  UPLOAD_NEW_OPTIONS: RAMP_UPLOAD_NEW_OPTIONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "RAMP".
 */
export type RAMP_TOOL_OUTPUTS = {
  CREATE_DEPARTMENT: RAMP_CREATE_DEPARTMENT_OUTPUT
  CREATE_NEW_CUSTOM_ACCOUNTING_FIELD: RAMP_CREATE_NEW_CUSTOM_ACCOUNTING_FIELD_OUTPUT
  FETCH_CUSTOM_ACCOUNTING_FIELD: RAMP_FETCH_CUSTOM_ACCOUNTING_FIELD_OUTPUT
  GET_ALL_TRANSACTIONS: RAMP_GET_ALL_TRANSACTIONS_OUTPUT
  GET_CARD: RAMP_GET_CARD_OUTPUT
  GET_DEPARTMENT: RAMP_GET_DEPARTMENT_OUTPUT
  GET_MY_CARDS: RAMP_GET_MY_CARDS_OUTPUT
  GET_MY_TRANSACTIONS: RAMP_GET_MY_TRANSACTIONS_OUTPUT
  GET_STATEMENT: RAMP_GET_STATEMENT_OUTPUT
  GET_TRANSACTION: RAMP_GET_TRANSACTION_OUTPUT
  GET_VENDOR: RAMP_GET_VENDOR_OUTPUT
  ISSUE_VIRTUAL_CARD: RAMP_ISSUE_VIRTUAL_CARD_OUTPUT
  LIST_CARDS: RAMP_LIST_CARDS_OUTPUT
  LIST_DEPARTMENTS: RAMP_LIST_DEPARTMENTS_OUTPUT
  LIST_STATEMENTS: RAMP_LIST_STATEMENTS_OUTPUT
  LIST_USERS: RAMP_LIST_USERS_OUTPUT
  LIST_VENDORS: RAMP_LIST_VENDORS_OUTPUT
  OPTIONS_FOR_CUSTOM_ACCOUNTING_FIELD: RAMP_OPTIONS_FOR_CUSTOM_ACCOUNTING_FIELD_OUTPUT
  SEARCH_TRANSACTIONS: RAMP_SEARCH_TRANSACTIONS_OUTPUT
  UPDATE_CARD_LIMIT: RAMP_UPDATE_CARD_LIMIT_OUTPUT
  UPDATE_DEPARTMENT: RAMP_UPDATE_DEPARTMENT_OUTPUT
  UPLOAD_NEW_OPTIONS: RAMP_UPLOAD_NEW_OPTIONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's RAMP toolkit.
 */
export const RAMP = {
  slug: "ramp",
  tools: {
    /**
     * Tool for creating a new department in your ramp organization. perfect for setting up organizational structure and expense categorization.
     */
    CREATE_DEPARTMENT: "RAMP_CREATE_DEPARTMENT",
    /**
     * Tool for creating a new custom accounting field. note: this operation requires elevated permissions not available in the demo api.
     */
    CREATE_NEW_CUSTOM_ACCOUNTING_FIELD: "RAMP_CREATE_NEW_CUSTOM_ACCOUNTING_FIELD",
    /**
     * Tool for fetching a custom accounting field.
     */
    FETCH_CUSTOM_ACCOUNTING_FIELD: "RAMP_FETCH_CUSTOM_ACCOUNTING_FIELD",
    /**
     * Get all the transactions.
     */
    GET_ALL_TRANSACTIONS: "RAMP_GET_ALL_TRANSACTIONS",
    /**
     * Tool for retrieving detailed information about a specific card. returns comprehensive card details including spending limits, cardholder info, and fulfillment status. use this to get complete card profile for analysis or troubleshooting.
     */
    GET_CARD: "RAMP_GET_CARD",
    /**
     * Tool for retrieving detailed information about a specific department. returns comprehensive department details including hierarchy information. use this to get complete department profile for organizational analysis.
     */
    GET_DEPARTMENT: "RAMP_GET_DEPARTMENT",
    /**
     * Tool for fetching cards assigned to you, including physical and virtual cards. useful for checking card status, limits, and managing your payment methods.
     */
    GET_MY_CARDS: "RAMP_GET_MY_CARDS",
    /**
     * Get my transactions.
     */
    GET_MY_TRANSACTIONS: "RAMP_GET_MY_TRANSACTIONS",
    /**
     * Tool for retrieving statement details or downloading statements. supports json, pdf, and csv formats for financial reporting.
     */
    GET_STATEMENT: "RAMP_GET_STATEMENT",
    /**
     * Tool for retrieving complete details of a specific transaction. includes merchant details, receipts, accounting codes, and dispute information.
     */
    GET_TRANSACTION: "RAMP_GET_TRANSACTION",
    /**
     * Tool for retrieving detailed information about a specific vendor. returns comprehensive vendor details including spending totals, category, and contact information. use this to get complete vendor profile for analysis or updates.
     */
    GET_VENDOR: "RAMP_GET_VENDOR",
    /**
     * Tool for issuing virtual cards to users instantly. creates cards with customizable spending limits and restrictions. returns full card details including card number and cvv.
     */
    ISSUE_VIRTUAL_CARD: "RAMP_ISSUE_VIRTUAL_CARD",
    /**
     * Tool for listing all cards across the organization with optional filters. returns card details including spending limits, cardholder info, and state. use this to analyze card distribution, monitor card states, or find specific cards.
     */
    LIST_CARDS: "RAMP_LIST_CARDS",
    /**
     * Tool for listing all departments in the organization. returns department details including names, codes, and hierarchy information. use this to analyze organizational structure and department relationships.
     */
    LIST_DEPARTMENTS: "RAMP_LIST_DEPARTMENTS",
    /**
     * Tool for listing all statements with filtering options. perfect for financial reporting and reconciliation workflows.
     */
    LIST_STATEMENTS: "RAMP_LIST_STATEMENTS",
    /**
     * Tool for listing users in your ramp organization with flexible filtering. perfect for user audits, access management, and organizational analysis. helps identify inactive users, role distribution, and departmental structures.
     */
    LIST_USERS: "RAMP_LIST_USERS",
    /**
     * Tool for listing vendors with their spending information. returns vendor details including spending totals, categories, and activity status. use this to analyze vendor relationships and procurement patterns.
     */
    LIST_VENDORS: "RAMP_LIST_VENDORS",
    /**
     * Tool for listing options for a given accounting field.
     */
    OPTIONS_FOR_CUSTOM_ACCOUNTING_FIELD: "RAMP_OPTIONS_FOR_CUSTOM_ACCOUNTING_FIELD",
    /**
     * Search transactions with filters.
     */
    SEARCH_TRANSACTIONS: "RAMP_SEARCH_TRANSACTIONS",
    /**
     * Tool for updating spending limits on a card. note: this returns the limits associated with the card. the actual update might require using the limit id directly via patch /limits/{limit id}.
     */
    UPDATE_CARD_LIMIT: "RAMP_UPDATE_CARD_LIMIT",
    /**
     * Tool for updating an existing department in your ramp organization. useful for reorganizing departmental structure or renaming departments.
     */
    UPDATE_DEPARTMENT: "RAMP_UPDATE_DEPARTMENT",
    /**
     * Tool for uploading new options for a given accounting field.
     */
    UPLOAD_NEW_OPTIONS: "RAMP_UPLOAD_NEW_OPTIONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "RAMP".
 */
export type RAMP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "RAMP".
 */
export type RAMP_TRIGGER_EVENTS = {}
