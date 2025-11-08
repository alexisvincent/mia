// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BREX's BREX_CREATE_BUDGET tool input.
 */
type BREX_CREATE_BUDGET_INPUT = {
  /**
   * Budget Amount
   * @description Budget amount and currency
   */
  budget_amount?: {
      [key: string]: unknown;
  };
  /**
   * Budget Type
   * @description Type of budget
   * @default EXPENSE
   */
  budget_type: string;
  /**
   * Description
   * @description Description of the budget
   * @default
   */
  description: string;
  /**
   * Display Name
   * @description Display name for the budget
   */
  display_name?: string;
  /**
   * Member User Ids
   * @description List of user IDs who are members of this budget
   */
  member_user_ids?: string[];
  /**
   * Owner User Ids
   * @description List of user IDs who own this budget
   */
  owner_user_ids?: string[];
  /**
   * Parent Budget Id
   * @description Parent budget ID if this is a sub-budget
   * @default
   */
  parent_budget_id: string;
  /**
   * Period Type
   * @description Budget period type
   * @default MONTHLY
   */
  period_type: string;
};

/**
 * Type of BREX's BREX_CREATE_BUDGET tool output.
 */
type BREX_CREATE_BUDGET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Budget
       * @description Created budget details
       */
      budget: {
          [key: string]: unknown;
      };
      /**
       * Budget Id
       * @description ID of the created budget
       */
      budget_id: string;
      /**
       * Status
       * @description Status of budget creation
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
 * Type of BREX's BREX_CREATE_CARD tool input.
 */
type BREX_CREATE_CARD_INPUT = {
  /**
   * Card Type
   * @description Type of card to create (VIRTUAL or PHYSICAL)
   * @default VIRTUAL
   */
  card_type: string;
  /**
   * Display Name
   * @description Display name for the card
   */
  display_name?: string;
  /**
   * Limit Type
   * @description Type of spend limit (CARD or BUDGET)
   * @default CARD
   */
  limit_type: string;
  /**
   * Owner User Id
   * @description User ID of the card owner
   */
  owner_user_id?: string;
  /**
   * Spend Controls
   * @description Spend control settings for the card
   */
  spend_controls?: {
      [key: string]: unknown;
  };
};

/**
 * Type of BREX's BREX_CREATE_CARD tool output.
 */
type BREX_CREATE_CARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Card
       * @description Created card details
       */
      card: {
          [key: string]: unknown;
      };
      /**
       * Card Id
       * @description ID of the created card
       */
      card_id: string;
      /**
       * Status
       * @description Status of card creation
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
 * Type of BREX's BREX_CREATE_DEPARTMENT tool input.
 */
type BREX_CREATE_DEPARTMENT_INPUT = {
  /**
   * Description
   * @description Description of the department
   * @default
   */
  description: string;
  /**
   * Name
   * @description Name of the department
   */
  name?: string;
};

/**
 * Type of BREX's BREX_CREATE_DEPARTMENT tool output.
 */
type BREX_CREATE_DEPARTMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Department
       * @description Created department details
       */
      department: {
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
 * Type of BREX's BREX_CREATE_EXPENSE tool input.
 */
type BREX_CREATE_EXPENSE_INPUT = {
  /**
   * Amount
   * @description Expense amount and currency
   */
  amount?: {
      [key: string]: unknown;
  };
  /**
   * Memo
   * @description Memo for the expense
   */
  memo?: string;
  /**
   * Owner User Id
   * @description User ID of the expense owner
   */
  owner_user_id?: string;
};

/**
 * Type of BREX's BREX_CREATE_EXPENSE tool output.
 */
type BREX_CREATE_EXPENSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expense
       * @description Created expense details
       */
      expense: {
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
 * Type of BREX's BREX_CREATE_LOCATION tool input.
 */
type BREX_CREATE_LOCATION_INPUT = {
  /**
   * Description
   * @description Description of the location
   * @default
   */
  description: string;
  /**
   * Name
   * @description Name of the location
   */
  name?: string;
};

/**
 * Type of BREX's BREX_CREATE_LOCATION tool output.
 */
type BREX_CREATE_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Location
       * @description Created location details
       */
      location: {
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
 * Type of BREX's BREX_CREATE_TITLE tool input.
 */
type BREX_CREATE_TITLE_INPUT = {
  /**
   * Name
   * @description Name of the job title
   */
  name?: string;
};

/**
 * Type of BREX's BREX_CREATE_TITLE tool output.
 */
type BREX_CREATE_TITLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Title
       * @description Created title details
       */
      title: {
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
 * Type of BREX's BREX_CREATE_USER tool input.
 */
type BREX_CREATE_USER_INPUT = {
  /**
   * Department Id
   * @description Department ID to assign the user to (optional)
   * @default
   */
  department_id: string;
  /**
   * Email
   * @description Email address of the user
   */
  email?: string;
  /**
   * First Name
   * @description First name of the user
   */
  first_name?: string;
  /**
   * Last Name
   * @description Last name of the user
   */
  last_name?: string;
  /**
   * Manager User Id
   * @description User ID of the manager (optional)
   * @default
   */
  manager_user_id: string;
};

/**
 * Type of BREX's BREX_CREATE_USER tool output.
 */
type BREX_CREATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Status of user creation
       */
      status: string;
      /**
       * User
       * @description Created user details
       */
      user: {
          [key: string]: unknown;
      };
      /**
       * User Id
       * @description ID of the created user
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BREX's BREX_CREATE_VENDOR_CARD tool input.
 */
type BREX_CREATE_VENDOR_CARD_INPUT = {
  /**
   * Card Type
   * @description Type of card (VIRTUAL or PHYSICAL)
   * @default VIRTUAL
   */
  card_type: string;
  /**
   * Display Name
   * @description Display name for the vendor card
   */
  display_name?: string;
  /**
   * Owner User Id
   * @description User ID of the card owner
   */
  owner_user_id?: string;
  /**
   * Spend Controls
   * @description Spend control settings
   */
  spend_controls?: {
      [key: string]: unknown;
  };
  /**
   * Vendor Name
   * @description Name of the vendor
   */
  vendor_name?: string;
};

/**
 * Type of BREX's BREX_CREATE_VENDOR_CARD tool output.
 */
type BREX_CREATE_VENDOR_CARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Card
       * @description Created vendor card details
       */
      card: {
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
 * Type of BREX's BREX_GET_ACCOUNT_DETAILS tool input.
 */
type BREX_GET_ACCOUNT_DETAILS_INPUT = object;

/**
 * Type of BREX's BREX_GET_ACCOUNT_DETAILS tool output.
 */
type BREX_GET_ACCOUNT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description Account details
       */
      account: {
          [key: string]: unknown;
      };
      /**
       * Account Id
       * @description Account ID
       */
      account_id: string;
      /**
       * Company Name
       * @description Company name
       * @default
       */
      company_name: string;
      /**
       * Status
       * @description Account status
       * @default
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
 * Type of BREX's BREX_GET_ACCOUNT_STATEMENTS tool input.
 */
type BREX_GET_ACCOUNT_STATEMENTS_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination
   * @default
   */
  cursor: string;
  /**
   * Limit
   * @description Maximum number of statements to return
   * @default 100
   */
  limit: number;
};

/**
 * Type of BREX's BREX_GET_ACCOUNT_STATEMENTS tool output.
 */
type BREX_GET_ACCOUNT_STATEMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of account statements
       */
      items: unknown[];
      /**
       * Next Cursor
       * @description Cursor for next page
       * @default
       */
      next_cursor: string;
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
 * Type of BREX's BREX_GET_BUDGET_DETAILS tool input.
 */
type BREX_GET_BUDGET_DETAILS_INPUT = {
  /**
   * Budget Id
   * @description ID of the budget to get details for
   */
  budget_id?: string;
};

/**
 * Type of BREX's BREX_GET_BUDGET_DETAILS tool output.
 */
type BREX_GET_BUDGET_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Available Amount
       * @description Amount available to spend
       * @default 0
       */
      available_amount: number;
      /**
       * Budget
       * @description Budget details
       */
      budget: {
          [key: string]: unknown;
      };
      /**
       * Budget Amount
       * @description Total budget amount
       * @default 0
       */
      budget_amount: number;
      /**
       * Budget Name
       * @description Name of the budget
       * @default
       */
      budget_name: string;
      /**
       * Currency
       * @description Currency code
       * @default USD
       */
      currency: string;
      /**
       * Period Type
       * @description Budget period type (monthly, quarterly, etc.)
       * @default
       */
      period_type: string;
      /**
       * Spent Amount
       * @description Amount already spent
       * @default 0
       */
      spent_amount: number;
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
 * Type of BREX's BREX_GET_BUDGET_TRANSACTIONS tool input.
 */
type BREX_GET_BUDGET_TRANSACTIONS_INPUT = {
  /**
   * Budget Id
   * @description Budget ID to get transactions for
   */
  budget_id?: string;
  /**
   * Limit
   * @description Maximum number of transactions to return
   * @default 100
   */
  limit: number;
  /**
   * Posted At End
   * @description End date for transactions in YYYY-MM-DD format
   */
  posted_at_end?: string;
  /**
   * Posted At Start
   * @description Start date for transactions in YYYY-MM-DD format
   */
  posted_at_start?: string;
};

/**
 * Type of BREX's BREX_GET_BUDGET_TRANSACTIONS tool output.
 */
type BREX_GET_BUDGET_TRANSACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of transactions for the budget
       */
      items: unknown[];
      /**
       * Next Cursor
       * @description Cursor for next page
       * @default
       */
      next_cursor: string;
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
 * Type of BREX's BREX_GET_CARD_DETAILS tool input.
 */
type BREX_GET_CARD_DETAILS_INPUT = {
  /**
   * Card Id
   * @description ID of the card to get details for
   */
  card_id?: string;
};

/**
 * Type of BREX's BREX_GET_CARD_DETAILS tool output.
 */
type BREX_GET_CARD_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Card
       * @description Card details
       */
      card: {
          [key: string]: unknown;
      };
      /**
       * Card Name
       * @description Name of the card
       * @default
       */
      card_name: string;
      /**
       * Card Type
       * @description Type of card (virtual, physical)
       * @default
       */
      card_type: string;
      /**
       * Spend Controls
       * @description Spend control settings for the card
       */
      spend_controls?: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Status of the card
       * @default
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
 * Type of BREX's BREX_GET_CARD_TRANSACTIONS tool input.
 */
type BREX_GET_CARD_TRANSACTIONS_INPUT = {
  /**
   * Limit
   * @description Maximum number of transactions to return
   * @default 100
   */
  limit: number;
  /**
   * Posted At End
   * @description End date for transactions in YYYY-MM-DD format (optional)
   * @default
   */
  posted_at_end: string;
  /**
   * Posted At Start
   * @description Start date for transactions in YYYY-MM-DD format (optional)
   * @default
   */
  posted_at_start: string;
};

/**
 * Type of BREX's BREX_GET_CARD_TRANSACTIONS tool output.
 */
type BREX_GET_CARD_TRANSACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of card transactions
       */
      items: unknown[];
      /**
       * Next Cursor
       * @description Cursor for next page
       * @default
       */
      next_cursor: string;
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
 * Type of BREX's BREX_GET_COMPANY_CASH_ACCOUNTS tool input.
 */
type BREX_GET_COMPANY_CASH_ACCOUNTS_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination
   * @default
   */
  cursor: string;
  /**
   * Limit
   * @description Maximum number of accounts to return
   * @default 100
   */
  limit: number;
};

/**
 * Type of BREX's BREX_GET_COMPANY_CASH_ACCOUNTS tool output.
 */
type BREX_GET_COMPANY_CASH_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of cash accounts
       */
      items: unknown[];
      /**
       * Next Cursor
       * @description Cursor for next page
       * @default
       */
      next_cursor: string;
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
 * Type of BREX's BREX_GET_EXPENSES tool input.
 */
type BREX_GET_EXPENSES_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination
   * @default
   */
  cursor: string;
  /**
   * Limit
   * @description Maximum number of expenses to return
   * @default 100
   */
  limit: number;
  /**
   * Posted At End
   * @description End date for expenses in YYYY-MM-DD format
   */
  posted_at_end?: string;
  /**
   * Posted At Start
   * @description Start date for expenses in YYYY-MM-DD format
   */
  posted_at_start?: string;
};

/**
 * Type of BREX's BREX_GET_EXPENSES tool output.
 */
type BREX_GET_EXPENSES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of expenses
       */
      items: unknown[];
      /**
       * Next Cursor
       * @description Cursor for next page
       * @default
       */
      next_cursor: string;
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
 * Type of BREX's BREX_GET_EXPENSE_DETAILS tool input.
 */
type BREX_GET_EXPENSE_DETAILS_INPUT = {
  /**
   * Expense Id
   * @description ID of the expense to get details for
   */
  expense_id?: string;
};

/**
 * Type of BREX's BREX_GET_EXPENSE_DETAILS tool output.
 */
type BREX_GET_EXPENSE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expense
       * @description Expense details
       */
      expense: {
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
 * Type of BREX's BREX_GET_SPEND_LIMITS tool input.
 */
type BREX_GET_SPEND_LIMITS_INPUT = {
  /**
   * Limit
   * @description Maximum number of spend limits to return
   * @default 100
   */
  limit: number;
};

/**
 * Type of BREX's BREX_GET_SPEND_LIMITS tool output.
 */
type BREX_GET_SPEND_LIMITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of spend limits
       */
      items: unknown[];
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
 * Type of BREX's BREX_GET_TRANSACTIONS tool input.
 */
type BREX_GET_TRANSACTIONS_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination
   * @default
   */
  cursor: string;
  /**
   * Limit
   * @description Maximum number of transactions to return
   * @default 100
   */
  limit: number;
  /**
   * Posted At End
   * @description End date for transactions in YYYY-MM-DD format
   */
  posted_at_end?: string;
  /**
   * Posted At Start
   * @description Start date for transactions in YYYY-MM-DD format
   */
  posted_at_start?: string;
};

/**
 * Type of BREX's BREX_GET_TRANSACTIONS tool output.
 */
type BREX_GET_TRANSACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of transactions
       */
      items: unknown[];
      /**
       * Next Cursor
       * @description Cursor for next page
       * @default
       */
      next_cursor: string;
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
 * Type of BREX's BREX_GET_TRANSACTIONS_BY_AMOUNT_RANGE tool input.
 */
type BREX_GET_TRANSACTIONS_BY_AMOUNT_RANGE_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination
   * @default
   */
  cursor: string;
  /**
   * Limit
   * @description Maximum number of transactions to return
   * @default 100
   */
  limit: number;
  /**
   * Max Amount
   * @description Maximum transaction amount
   */
  max_amount?: number;
  /**
   * Min Amount
   * @description Minimum transaction amount
   */
  min_amount?: number;
  /**
   * Posted At End
   * @description End date for transactions in YYYY-MM-DD format
   */
  posted_at_end?: string;
  /**
   * Posted At Start
   * @description Start date for transactions in YYYY-MM-DD format
   */
  posted_at_start?: string;
};

/**
 * Type of BREX's BREX_GET_TRANSACTIONS_BY_AMOUNT_RANGE tool output.
 */
type BREX_GET_TRANSACTIONS_BY_AMOUNT_RANGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of transactions within the amount range
       */
      items: unknown[];
      /**
       * Next Cursor
       * @description Cursor for next page
       * @default
       */
      next_cursor: string;
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
 * Type of BREX's BREX_GET_TRANSACTIONS_BY_DESCRIPTION tool input.
 */
type BREX_GET_TRANSACTIONS_BY_DESCRIPTION_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination
   * @default
   */
  cursor: string;
  /**
   * Description
   * @description Description text to search for in transactions
   */
  description?: string;
  /**
   * Limit
   * @description Maximum number of transactions to return
   * @default 100
   */
  limit: number;
  /**
   * Posted At End
   * @description End date for transactions in YYYY-MM-DD format
   */
  posted_at_end?: string;
  /**
   * Posted At Start
   * @description Start date for transactions in YYYY-MM-DD format
   */
  posted_at_start?: string;
};

/**
 * Type of BREX's BREX_GET_TRANSACTIONS_BY_DESCRIPTION tool output.
 */
type BREX_GET_TRANSACTIONS_BY_DESCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of transactions matching the description
       */
      items: unknown[];
      /**
       * Next Cursor
       * @description Cursor for next page
       * @default
       */
      next_cursor: string;
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
 * Type of BREX's BREX_GET_TRANSACTION_BY_ID tool input.
 */
type BREX_GET_TRANSACTION_BY_ID_INPUT = {
  /**
   * Transaction Id
   * @description ID of the transaction to get details for
   */
  transaction_id?: string;
};

/**
 * Type of BREX's BREX_GET_TRANSACTION_BY_ID tool output.
 */
type BREX_GET_TRANSACTION_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Transaction
       * @description Transaction details
       */
      transaction: {
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
 * Type of BREX's BREX_GET_USER_PROFILE tool input.
 */
type BREX_GET_USER_PROFILE_INPUT = {
  /**
   * User Id
   * @description User ID to get profile for ('me' for current user)
   * @default me
   */
  user_id: string;
};

/**
 * Type of BREX's BREX_GET_USER_PROFILE tool output.
 */
type BREX_GET_USER_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description Email address of the user
       * @default
       */
      email: string;
      /**
       * First Name
       * @description First name of the user
       * @default
       */
      first_name: string;
      /**
       * Last Name
       * @description Last name of the user
       * @default
       */
      last_name: string;
      /**
       * Status
       * @description Status of the user
       * @default
       */
      status: string;
      /**
       * User
       * @description User profile details
       */
      user: {
          [key: string]: unknown;
      };
      /**
       * User Id
       * @description ID of the user
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BREX's BREX_LIST_BUDGETS tool input.
 */
type BREX_LIST_BUDGETS_INPUT = {
  /**
   * Limit
   * @description Maximum number of budgets to return
   * @default 100
   */
  limit: number;
};

/**
 * Type of BREX's BREX_LIST_BUDGETS tool output.
 */
type BREX_LIST_BUDGETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Available Budgets Summary
       * @description Summary of available budgets across all cards
       */
      available_budgets_summary?: {
          [key: string]: unknown;
      };
      /**
       * Budgets
       * @description List of budgets
       */
      budgets: unknown[];
      /**
       * Total Count
       * @description Total number of budgets found
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
 * Type of BREX's BREX_LIST_CARDS tool input.
 */
type BREX_LIST_CARDS_INPUT = {
  /**
   * Limit
   * @description Maximum number of cards to return
   * @default 100
   */
  limit: number;
};

/**
 * Type of BREX's BREX_LIST_CARDS tool output.
 */
type BREX_LIST_CARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cards
       * @description List of cards
       */
      cards: unknown[];
      /**
       * Total Count
       * @description Total number of cards found
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
 * Type of BREX's BREX_LIST_DEPARTMENTS tool input.
 */
type BREX_LIST_DEPARTMENTS_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination
   * @default
   */
  cursor: string;
  /**
   * Limit
   * @description Maximum number of departments to return
   * @default 100
   */
  limit: number;
};

/**
 * Type of BREX's BREX_LIST_DEPARTMENTS tool output.
 */
type BREX_LIST_DEPARTMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of departments
       */
      items: unknown[];
      /**
       * Next Cursor
       * @description Cursor for next page
       * @default
       */
      next_cursor: string;
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
 * Type of BREX's BREX_LIST_LOCATIONS tool input.
 */
type BREX_LIST_LOCATIONS_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination
   * @default
   */
  cursor: string;
  /**
   * Limit
   * @description Maximum number of locations to return
   * @default 100
   */
  limit: number;
};

/**
 * Type of BREX's BREX_LIST_LOCATIONS tool output.
 */
type BREX_LIST_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of locations
       */
      items: unknown[];
      /**
       * Next Cursor
       * @description Cursor for next page
       * @default
       */
      next_cursor: string;
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
 * Type of BREX's BREX_LIST_TITLES tool input.
 */
type BREX_LIST_TITLES_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination
   * @default
   */
  cursor: string;
  /**
   * Limit
   * @description Maximum number of titles to return
   * @default 100
   */
  limit: number;
};

/**
 * Type of BREX's BREX_LIST_TITLES tool output.
 */
type BREX_LIST_TITLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of job titles
       */
      items: unknown[];
      /**
       * Next Cursor
       * @description Cursor for next page
       * @default
       */
      next_cursor: string;
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
 * Type of BREX's BREX_LIST_USERS tool input.
 */
type BREX_LIST_USERS_INPUT = {
  /**
   * Limit
   * @description Maximum number of users to return
   * @default 100
   */
  limit: number;
};

/**
 * Type of BREX's BREX_LIST_USERS tool output.
 */
type BREX_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Total Count
       * @description Total number of users found
       */
      total_count: number;
      /**
       * Users
       * @description List of users
       */
      users: unknown[];
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
 * Type of BREX's BREX_LIST_VENDORS tool input.
 */
type BREX_LIST_VENDORS_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination
   * @default
   */
  cursor: string;
  /**
   * Limit
   * @description Maximum number of vendors to return
   * @default 100
   */
  limit: number;
};

/**
 * Type of BREX's BREX_LIST_VENDORS tool output.
 */
type BREX_LIST_VENDORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of vendors
       */
      items: unknown[];
      /**
       * Next Cursor
       * @description Cursor for next page
       * @default
       */
      next_cursor: string;
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
 * Type of BREX's BREX_TRANSFER_CARD tool input.
 */
type BREX_TRANSFER_CARD_INPUT = {
  /**
   * Card Id
   * @description ID of the card to transfer
   */
  card_id?: string;
  /**
   * New Owner User Id
   * @description User ID of the new card owner
   */
  new_owner_user_id?: string;
};

/**
 * Type of BREX's BREX_TRANSFER_CARD tool output.
 */
type BREX_TRANSFER_CARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Card
       * @description Transferred card details
       */
      card: {
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
 * Type of BREX's BREX_UPDATE_BUDGET tool input.
 */
type BREX_UPDATE_BUDGET_INPUT = {
  /**
   * Budget Amount
   * @description Budget amount and currency
   */
  budget_amount?: {
      [key: string]: unknown;
  };
  /**
   * Budget Id
   * @description ID of the budget to update
   */
  budget_id?: string;
  /**
   * Description
   * @description Description of the budget
   * @default
   */
  description: string;
  /**
   * Display Name
   * @description Display name for the budget
   * @default
   */
  display_name: string;
};

/**
 * Type of BREX's BREX_UPDATE_BUDGET tool output.
 */
type BREX_UPDATE_BUDGET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Budget
       * @description Updated budget details
       */
      budget: {
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
 * Type of BREX's BREX_UPDATE_CARD_LIMITS tool input.
 */
type BREX_UPDATE_CARD_LIMITS_INPUT = {
  /**
   * Card Id
   * @description ID of the card to update limits for
   */
  card_id?: string;
  /**
   * Spend Controls
   * @description New spend control settings
   */
  spend_controls?: {
      [key: string]: unknown;
  };
};

/**
 * Type of BREX's BREX_UPDATE_CARD_LIMITS tool output.
 */
type BREX_UPDATE_CARD_LIMITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Card
       * @description Updated card details
       */
      card: {
          [key: string]: unknown;
      };
      /**
       * Card Id
       * @description ID of the updated card
       */
      card_id: string;
      /**
       * Status
       * @description Status of the update
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
 * Type of BREX's BREX_UPDATE_CARD_STATUS tool input.
 */
type BREX_UPDATE_CARD_STATUS_INPUT = {
  /**
   * Card Id
   * @description ID of the card to update
   */
  card_id?: string;
  /**
   * Status
   * @description New status for the card
   */
  status?: string;
};

/**
 * Type of BREX's BREX_UPDATE_CARD_STATUS tool output.
 */
type BREX_UPDATE_CARD_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Card
       * @description Updated card details
       */
      card: {
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
 * Type of BREX's BREX_UPDATE_USER tool input.
 */
type BREX_UPDATE_USER_INPUT = {
  /**
   * Department Id
   * @description Department ID
   * @default
   */
  department_id: string;
  /**
   * First Name
   * @description First name of the user
   * @default
   */
  first_name: string;
  /**
   * Last Name
   * @description Last name of the user
   * @default
   */
  last_name: string;
  /**
   * Location Id
   * @description Location ID
   * @default
   */
  location_id: string;
  /**
   * Manager User Id
   * @description User ID of the manager
   * @default
   */
  manager_user_id: string;
  /**
   * Title Id
   * @description Title ID
   * @default
   */
  title_id: string;
  /**
   * User Id
   * @description ID of the user to update
   */
  user_id?: string;
};

/**
 * Type of BREX's BREX_UPDATE_USER tool output.
 */
type BREX_UPDATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * User
       * @description Updated user details
       */
      user: {
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
 * Type map of all available tool input types for toolkit "BREX".
 */
export type BREX_TOOL_INPUTS = {
  CREATE_BUDGET: BREX_CREATE_BUDGET_INPUT
  CREATE_CARD: BREX_CREATE_CARD_INPUT
  CREATE_DEPARTMENT: BREX_CREATE_DEPARTMENT_INPUT
  CREATE_EXPENSE: BREX_CREATE_EXPENSE_INPUT
  CREATE_LOCATION: BREX_CREATE_LOCATION_INPUT
  CREATE_TITLE: BREX_CREATE_TITLE_INPUT
  CREATE_USER: BREX_CREATE_USER_INPUT
  CREATE_VENDOR_CARD: BREX_CREATE_VENDOR_CARD_INPUT
  GET_ACCOUNT_DETAILS: BREX_GET_ACCOUNT_DETAILS_INPUT
  GET_ACCOUNT_STATEMENTS: BREX_GET_ACCOUNT_STATEMENTS_INPUT
  GET_BUDGET_DETAILS: BREX_GET_BUDGET_DETAILS_INPUT
  GET_BUDGET_TRANSACTIONS: BREX_GET_BUDGET_TRANSACTIONS_INPUT
  GET_CARD_DETAILS: BREX_GET_CARD_DETAILS_INPUT
  GET_CARD_TRANSACTIONS: BREX_GET_CARD_TRANSACTIONS_INPUT
  GET_COMPANY_CASH_ACCOUNTS: BREX_GET_COMPANY_CASH_ACCOUNTS_INPUT
  GET_EXPENSES: BREX_GET_EXPENSES_INPUT
  GET_EXPENSE_DETAILS: BREX_GET_EXPENSE_DETAILS_INPUT
  GET_SPEND_LIMITS: BREX_GET_SPEND_LIMITS_INPUT
  GET_TRANSACTIONS: BREX_GET_TRANSACTIONS_INPUT
  GET_TRANSACTIONS_BY_AMOUNT_RANGE: BREX_GET_TRANSACTIONS_BY_AMOUNT_RANGE_INPUT
  GET_TRANSACTIONS_BY_DESCRIPTION: BREX_GET_TRANSACTIONS_BY_DESCRIPTION_INPUT
  GET_TRANSACTION_BY_ID: BREX_GET_TRANSACTION_BY_ID_INPUT
  GET_USER_PROFILE: BREX_GET_USER_PROFILE_INPUT
  LIST_BUDGETS: BREX_LIST_BUDGETS_INPUT
  LIST_CARDS: BREX_LIST_CARDS_INPUT
  LIST_DEPARTMENTS: BREX_LIST_DEPARTMENTS_INPUT
  LIST_LOCATIONS: BREX_LIST_LOCATIONS_INPUT
  LIST_TITLES: BREX_LIST_TITLES_INPUT
  LIST_USERS: BREX_LIST_USERS_INPUT
  LIST_VENDORS: BREX_LIST_VENDORS_INPUT
  TRANSFER_CARD: BREX_TRANSFER_CARD_INPUT
  UPDATE_BUDGET: BREX_UPDATE_BUDGET_INPUT
  UPDATE_CARD_LIMITS: BREX_UPDATE_CARD_LIMITS_INPUT
  UPDATE_CARD_STATUS: BREX_UPDATE_CARD_STATUS_INPUT
  UPDATE_USER: BREX_UPDATE_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BREX".
 */
export type BREX_TOOL_OUTPUTS = {
  CREATE_BUDGET: BREX_CREATE_BUDGET_OUTPUT
  CREATE_CARD: BREX_CREATE_CARD_OUTPUT
  CREATE_DEPARTMENT: BREX_CREATE_DEPARTMENT_OUTPUT
  CREATE_EXPENSE: BREX_CREATE_EXPENSE_OUTPUT
  CREATE_LOCATION: BREX_CREATE_LOCATION_OUTPUT
  CREATE_TITLE: BREX_CREATE_TITLE_OUTPUT
  CREATE_USER: BREX_CREATE_USER_OUTPUT
  CREATE_VENDOR_CARD: BREX_CREATE_VENDOR_CARD_OUTPUT
  GET_ACCOUNT_DETAILS: BREX_GET_ACCOUNT_DETAILS_OUTPUT
  GET_ACCOUNT_STATEMENTS: BREX_GET_ACCOUNT_STATEMENTS_OUTPUT
  GET_BUDGET_DETAILS: BREX_GET_BUDGET_DETAILS_OUTPUT
  GET_BUDGET_TRANSACTIONS: BREX_GET_BUDGET_TRANSACTIONS_OUTPUT
  GET_CARD_DETAILS: BREX_GET_CARD_DETAILS_OUTPUT
  GET_CARD_TRANSACTIONS: BREX_GET_CARD_TRANSACTIONS_OUTPUT
  GET_COMPANY_CASH_ACCOUNTS: BREX_GET_COMPANY_CASH_ACCOUNTS_OUTPUT
  GET_EXPENSES: BREX_GET_EXPENSES_OUTPUT
  GET_EXPENSE_DETAILS: BREX_GET_EXPENSE_DETAILS_OUTPUT
  GET_SPEND_LIMITS: BREX_GET_SPEND_LIMITS_OUTPUT
  GET_TRANSACTIONS: BREX_GET_TRANSACTIONS_OUTPUT
  GET_TRANSACTIONS_BY_AMOUNT_RANGE: BREX_GET_TRANSACTIONS_BY_AMOUNT_RANGE_OUTPUT
  GET_TRANSACTIONS_BY_DESCRIPTION: BREX_GET_TRANSACTIONS_BY_DESCRIPTION_OUTPUT
  GET_TRANSACTION_BY_ID: BREX_GET_TRANSACTION_BY_ID_OUTPUT
  GET_USER_PROFILE: BREX_GET_USER_PROFILE_OUTPUT
  LIST_BUDGETS: BREX_LIST_BUDGETS_OUTPUT
  LIST_CARDS: BREX_LIST_CARDS_OUTPUT
  LIST_DEPARTMENTS: BREX_LIST_DEPARTMENTS_OUTPUT
  LIST_LOCATIONS: BREX_LIST_LOCATIONS_OUTPUT
  LIST_TITLES: BREX_LIST_TITLES_OUTPUT
  LIST_USERS: BREX_LIST_USERS_OUTPUT
  LIST_VENDORS: BREX_LIST_VENDORS_OUTPUT
  TRANSFER_CARD: BREX_TRANSFER_CARD_OUTPUT
  UPDATE_BUDGET: BREX_UPDATE_BUDGET_OUTPUT
  UPDATE_CARD_LIMITS: BREX_UPDATE_CARD_LIMITS_OUTPUT
  UPDATE_CARD_STATUS: BREX_UPDATE_CARD_STATUS_OUTPUT
  UPDATE_USER: BREX_UPDATE_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BREX toolkit.
 */
export const BREX = {
  slug: "brex",
  tools: {
    /**
     * Create a new budget for departments or projects.
     */
    CREATE_BUDGET: "BREX_CREATE_BUDGET",
    /**
     * Create a new card and assign it to a user.
     */
    CREATE_CARD: "BREX_CREATE_CARD",
    /**
     * Create a new department.
     */
    CREATE_DEPARTMENT: "BREX_CREATE_DEPARTMENT",
    /**
     * Create a new expense.
     */
    CREATE_EXPENSE: "BREX_CREATE_EXPENSE",
    /**
     * Create a new location.
     */
    CREATE_LOCATION: "BREX_CREATE_LOCATION",
    /**
     * Create a new job title.
     */
    CREATE_TITLE: "BREX_CREATE_TITLE",
    /**
     * Create a new user in the brex account.
     */
    CREATE_USER: "BREX_CREATE_USER",
    /**
     * Create a new vendor card.
     */
    CREATE_VENDOR_CARD: "BREX_CREATE_VENDOR_CARD",
    /**
     * Get details about the current brex account.
     */
    GET_ACCOUNT_DETAILS: "BREX_GET_ACCOUNT_DETAILS",
    /**
     * Get account statements.
     */
    GET_ACCOUNT_STATEMENTS: "BREX_GET_ACCOUNT_STATEMENTS",
    /**
     * Get detailed information about a specific budget.
     */
    GET_BUDGET_DETAILS: "BREX_GET_BUDGET_DETAILS",
    /**
     * Get transactions for a specific budget.
     */
    GET_BUDGET_TRANSACTIONS: "BREX_GET_BUDGET_TRANSACTIONS",
    /**
     * Get detailed information about a specific card.
     */
    GET_CARD_DETAILS: "BREX_GET_CARD_DETAILS",
    /**
     * Get card transactions for a date range.
     */
    GET_CARD_TRANSACTIONS: "BREX_GET_CARD_TRANSACTIONS",
    /**
     * Get company cash accounts.
     */
    GET_COMPANY_CASH_ACCOUNTS: "BREX_GET_COMPANY_CASH_ACCOUNTS",
    /**
     * Get expenses for a date range.
     */
    GET_EXPENSES: "BREX_GET_EXPENSES",
    /**
     * Get details of a specific expense.
     */
    GET_EXPENSE_DETAILS: "BREX_GET_EXPENSE_DETAILS",
    /**
     * Get spend limits configuration.
     */
    GET_SPEND_LIMITS: "BREX_GET_SPEND_LIMITS",
    /**
     * Get transactions for a date range.
     */
    GET_TRANSACTIONS: "BREX_GET_TRANSACTIONS",
    /**
     * Get transactions filtered by amount range.
     */
    GET_TRANSACTIONS_BY_AMOUNT_RANGE: "BREX_GET_TRANSACTIONS_BY_AMOUNT_RANGE",
    /**
     * Get transactions filtered by description text.
     */
    GET_TRANSACTIONS_BY_DESCRIPTION: "BREX_GET_TRANSACTIONS_BY_DESCRIPTION",
    /**
     * Get details of a specific transaction by id.
     */
    GET_TRANSACTION_BY_ID: "BREX_GET_TRANSACTION_BY_ID",
    /**
     * Get user profile information for current or specified user.
     */
    GET_USER_PROFILE: "BREX_GET_USER_PROFILE",
    /**
     * List all budgets and show available amounts across all cards.
     */
    LIST_BUDGETS: "BREX_LIST_BUDGETS",
    /**
     * List all cards associated with the account.
     */
    LIST_CARDS: "BREX_LIST_CARDS",
    /**
     * List all departments in the organization.
     */
    LIST_DEPARTMENTS: "BREX_LIST_DEPARTMENTS",
    /**
     * List all locations in the organization.
     */
    LIST_LOCATIONS: "BREX_LIST_LOCATIONS",
    /**
     * List all job titles in the organization.
     */
    LIST_TITLES: "BREX_LIST_TITLES",
    /**
     * List all users in the brex account.
     */
    LIST_USERS: "BREX_LIST_USERS",
    /**
     * List all vendors.
     */
    LIST_VENDORS: "BREX_LIST_VENDORS",
    /**
     * Transfer a card to a different user.
     */
    TRANSFER_CARD: "BREX_TRANSFER_CARD",
    /**
     * Update budget details.
     */
    UPDATE_BUDGET: "BREX_UPDATE_BUDGET",
    /**
     * Update spending limits and controls for a card.
     */
    UPDATE_CARD_LIMITS: "BREX_UPDATE_CARD_LIMITS",
    /**
     * Update the status of a card (activate/deactivate/terminate).
     */
    UPDATE_CARD_STATUS: "BREX_UPDATE_CARD_STATUS",
    /**
     * Update user details.
     */
    UPDATE_USER: "BREX_UPDATE_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BREX".
 */
export type BREX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BREX".
 */
export type BREX_TRIGGER_EVENTS = {}
