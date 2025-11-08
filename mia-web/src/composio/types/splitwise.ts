// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SPLITWISE's SPLITWISE_ADD_FRIEND tool input.
 */
type SPLITWISE_ADD_FRIEND_INPUT = {
  /**
   * User Email
   * Format: email
   * @description Email address of the friend to add
   */
  user_email?: unknown;
  /**
   * User First Name
   * @description First name of the friend; required if they are not already a Splitwise user
   * @default null
   */
  user_first_name: string | null;
  /**
   * User Last Name
   * @description Last name of the friend (optional)
   * @default null
   */
  user_last_name: string | null;
};

/**
 * Type of SPLITWISE's SPLITWISE_ADD_FRIEND tool output.
 */
type SPLITWISE_ADD_FRIEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Friend
       * @description The newly added friend object
       */
      friend: {
          /**
           * Balance
           * @description Overall balances with this friend
           */
          balance?: {
              /**
               * Amount
               * @description Balance amount as string
               */
              amount: string;
              /**
               * Currency Code
               * @description Currency code, e.g., 'USD'
               */
              currency_code: string;
          }[];
          /**
           * Custom Picture
           * @description Whether they have a custom profile picture
           */
          custom_picture: boolean;
          /**
           * Email
           * @description Email address of the friend
           * @default null
           */
          email: string | null;
          /**
           * First Name
           * @description First name of the friend
           */
          first_name: string;
          /**
           * Groups
           * @description Groups the friend belongs to
           */
          groups?: {
              /**
               * Balance
               * @description List of balances within this group
               */
              balance: {
                  /**
                   * Amount
                   * @description Balance amount as string
                   */
                  amount: string;
                  /**
                   * Currency Code
                   * @description Currency code, e.g., 'USD'
                   */
                  currency_code: string;
              }[];
              /**
               * Group Id
               * @description Unique ID of the group
               */
              group_id: number;
          }[];
          /**
           * Id
           * @description Unique friend ID
           */
          id: number;
          /**
           * Last Name
           * @description Last name of the friend
           * @default null
           */
          last_name: string | null;
          /**
           * Picture
           * @description Profile picture URLs
           */
          picture: {
              /**
               * Large
               * @description URL for large profile picture
               * @default null
               */
              large: string | null;
              /**
               * Medium
               * @description URL for medium profile picture
               * @default null
               */
              medium: string | null;
              /**
               * Small
               * @description URL for small profile picture
               * @default null
               */
              small: string | null;
          };
          /**
           * Registration Status
           * @description Registration status, e.g., 'registered'
           * @default null
           */
          registration_status: string | null;
          /**
           * Updated At
           * @description Timestamp of last update to this friend
           */
          updated_at: string;
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
 * Type of SPLITWISE's SPLITWISE_CREATE_EXPENSE tool input.
 */
type SPLITWISE_CREATE_EXPENSE_INPUT = {
  /**
   * Category Id
   * @description Category ID from get_categories
   * @default null
   */
  category_id: number | null;
  /**
   * Cost
   * @description Total cost as string decimal with 2 dp
   */
  cost?: string;
  /**
   * Currency Code
   * @description 3-letter currency code, e.g., USD
   * @default null
   */
  currency_code: string | null;
  /**
   * Date
   * @description When the expense took place (ISO 8601)
   * @default null
   */
  date: string | null;
  /**
   * Description
   * @description Short description of the expense
   */
  description?: string;
  /**
   * Details
   * @description Notes or details for the expense
   * @default null
   */
  details: string | null;
  /**
   * Group Id
   * @description Group ID to assign this expense to (0 for no group)
   */
  group_id?: number;
  /**
   * Repeat Interval
   * @description Repeat interval for the expense
   * @default null
   * @enum {string|null}
   */
  repeat_interval: "never" | "weekly" | "fortnightly" | "monthly" | "yearly" | null;
  /**
   * Split Equally
   * @description If true, split equally among group members; omit when using users
   * @default null
   */
  split_equally: boolean | null;
  /**
   * Users
   * @description List of custom share allocations; omit when using split_equally
   * @default null
   */
  users: {
      /**
       * Email
       * @description Email of the participant
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description First name of the participant
       * @default null
       */
      first_name: string | null;
      /**
       * Last Name
       * @description Last name of the participant
       * @default null
       */
      last_name: string | null;
      /**
       * Owed Share
       * @description Amount this user owes (string decimal, 2 dp)
       */
      owed_share: string;
      /**
       * Paid Share
       * @description Amount this user paid (string decimal, 2 dp)
       */
      paid_share: string;
      /**
       * User Id
       * @description ID of an existing Splitwise user
       * @default null
       */
      user_id: number | null;
  }[] | null;
};

/**
 * Type of SPLITWISE's SPLITWISE_CREATE_EXPENSE tool output.
 */
type SPLITWISE_CREATE_EXPENSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API; empty if none
       */
      errors: {
          [key: string]: string[];
      };
      /**
       * Expenses
       * @description List of created expense objects
       */
      expenses: {
          [key: string]: unknown;
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
 * Type of SPLITWISE's SPLITWISE_DELETE_EXPENSE tool input.
 */
type SPLITWISE_DELETE_EXPENSE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the expense to delete.
   */
  id?: number;
};

/**
 * Type of SPLITWISE's SPLITWISE_DELETE_EXPENSE tool output.
 */
type SPLITWISE_DELETE_EXPENSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages returned by the API, if any.
       * @default null
       */
      errors: string[] | null;
      /**
       * Success
       * @description Indicates whether the deletion was successful.
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
 * Type of SPLITWISE's SPLITWISE_DELETE_FRIEND tool input.
 */
type SPLITWISE_DELETE_FRIEND_INPUT = {
  /**
   * Friend Id
   * @description The unique identifier of the friend to delete.
   */
  friend_id?: number;
};

/**
 * Type of SPLITWISE's SPLITWISE_DELETE_FRIEND tool output.
 */
type SPLITWISE_DELETE_FRIEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages if the deletion failed.
       */
      errors?: string[];
      /**
       * Success
       * @description Indicates whether the deletion was successful.
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
 * Type of SPLITWISE's SPLITWISE_GET_CATEGORIES tool input.
 */
type SPLITWISE_GET_CATEGORIES_INPUT = object;

/**
 * Type of SPLITWISE's SPLITWISE_GET_CATEGORIES tool output.
 */
type SPLITWISE_GET_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description List of expense categories and their subcategories
       */
      categories: {
          /**
           * Id
           * @description Unique ID of the category
           */
          id: number;
          /**
           * Name
           * @description Name of the category
           */
          name: string;
          /**
           * Subcategories
           * @description List of subcategories belonging to this category
           */
          subcategories: {
              /**
               * Id
               * @description Unique ID of the subcategory
               */
              id: number;
              /**
               * Name
               * @description Name of the subcategory
               */
              name: string;
          }[];
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
 * Type of SPLITWISE's SPLITWISE_GET_CURRENCIES tool input.
 */
type SPLITWISE_GET_CURRENCIES_INPUT = object;

/**
 * Type of SPLITWISE's SPLITWISE_GET_CURRENCIES tool output.
 */
type SPLITWISE_GET_CURRENCIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Currencies
       * @description List of supported currencies
       */
      currencies: {
          /**
           * Currency Code
           * @description ISO currency code, e.g., 'USD'
           */
          currency_code: string;
          /**
           * Currency Name
           * @description Full currency name, e.g., 'US Dollar'
           * @default null
           */
          currency_name: string | null;
          /**
           * Currency Symbol
           * @description Symbol of the currency, e.g., '$'
           * @default null
           */
          currency_symbol: string | null;
          /**
           * Decimal Places
           * @description Number of decimal places, e.g., 2
           * @default null
           */
          decimal_places: number | null;
          /**
           * Decimal Separator
           * @description Symbol used for decimal separator, e.g., '.'
           * @default null
           */
          decimal_separator: string | null;
          /**
           * Thousands Separator
           * @description Symbol used for thousands separator, e.g., ','
           * @default null
           */
          thousands_separator: string | null;
          /**
           * Unit
           * @description Currency unit name, e.g., 'dollar'
           */
          unit: string;
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
 * Type of SPLITWISE's SPLITWISE_GET_CURRENT_USER tool input.
 */
type SPLITWISE_GET_CURRENT_USER_INPUT = object;

/**
 * Type of SPLITWISE's SPLITWISE_GET_CURRENT_USER tool output.
 */
type SPLITWISE_GET_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * User
       * @description Details of the currently authenticated user.
       */
      user: {
          /**
           * Custom Picture
           * @description Indicates whether the user has a custom profile picture.
           */
          custom_picture: boolean;
          /**
           * Default Currency
           * @description User's default currency code.
           */
          default_currency: string;
          /**
           * Email
           * Format: email
           * @description User's email address.
           */
          email: unknown;
          /**
           * First Name
           * @description User's first name.
           */
          first_name: string;
          /**
           * Id
           * @description Unique identifier for the user.
           */
          id: number;
          /**
           * Last Name
           * @description User's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Locale
           * @description User's locale setting.
           */
          locale: string;
          /**
           * Notifications
           * @description Notification detail flags.
           */
          notifications: {
              /**
               * Added As Friend
               * @description Indicates if someone has added the user as a friend.
               */
              added_as_friend: boolean;
          };
          /**
           * Notifications Count
           * @description Number of unread notifications.
           */
          notifications_count: number;
          /**
           * Notifications Read
           * Format: date-time
           * @description Timestamp when notifications were last read.
           */
          notifications_read: unknown;
          /**
           * Picture
           * @description Profile picture URLs.
           */
          picture: {
              /**
               * Large
               * @description URL for the large-sized profile picture.
               */
              large: string;
              /**
               * Medium
               * @description URL for the medium-sized profile picture.
               */
              medium: string;
              /**
               * Small
               * @description URL for the small-sized profile picture.
               */
              small: string;
          };
          /**
           * Registration Status
           * @description Registration status of the user.
           */
          registration_status: string;
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
 * Type of SPLITWISE's SPLITWISE_GET_GROUP tool input.
 */
type SPLITWISE_GET_GROUP_INPUT = {
  /**
   * Id
   * @description The unique identifier of the group.
   */
  id?: number;
};

/**
 * Type of SPLITWISE's SPLITWISE_GET_GROUP tool output.
 */
type SPLITWISE_GET_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description The entire response body from the operation.
       */
      response: {
          [key: string]: unknown;
      };
      /**
       * Success
       * @description Indicates whether the operation was successful.
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
 * Type map of all available tool input types for toolkit "SPLITWISE".
 */
export type SPLITWISE_TOOL_INPUTS = {
  ADD_FRIEND: SPLITWISE_ADD_FRIEND_INPUT
  CREATE_EXPENSE: SPLITWISE_CREATE_EXPENSE_INPUT
  DELETE_EXPENSE: SPLITWISE_DELETE_EXPENSE_INPUT
  DELETE_FRIEND: SPLITWISE_DELETE_FRIEND_INPUT
  GET_CATEGORIES: SPLITWISE_GET_CATEGORIES_INPUT
  GET_CURRENCIES: SPLITWISE_GET_CURRENCIES_INPUT
  GET_CURRENT_USER: SPLITWISE_GET_CURRENT_USER_INPUT
  GET_GROUP: SPLITWISE_GET_GROUP_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SPLITWISE".
 */
export type SPLITWISE_TOOL_OUTPUTS = {
  ADD_FRIEND: SPLITWISE_ADD_FRIEND_OUTPUT
  CREATE_EXPENSE: SPLITWISE_CREATE_EXPENSE_OUTPUT
  DELETE_EXPENSE: SPLITWISE_DELETE_EXPENSE_OUTPUT
  DELETE_FRIEND: SPLITWISE_DELETE_FRIEND_OUTPUT
  GET_CATEGORIES: SPLITWISE_GET_CATEGORIES_OUTPUT
  GET_CURRENCIES: SPLITWISE_GET_CURRENCIES_OUTPUT
  GET_CURRENT_USER: SPLITWISE_GET_CURRENT_USER_OUTPUT
  GET_GROUP: SPLITWISE_GET_GROUP_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SPLITWISE toolkit.
 */
export const SPLITWISE = {
  slug: "splitwise",
  tools: {
    /**
     * Tool to add a new friend to splitwise. use when you have the friend's email and name details ready.
     */
    ADD_FRIEND: "SPLITWISE_ADD_FRIEND",
    /**
     * Tool to create a new splitwise expense. use when you need to record a payment or bill in a group or between users. provide either split equally or a custom users list for shares.
     */
    CREATE_EXPENSE: "SPLITWISE_CREATE_EXPENSE",
    /**
     * Tool to delete an existing expense by its id. use after confirming you have a valid expense id.
     */
    DELETE_EXPENSE: "SPLITWISE_DELETE_EXPENSE",
    /**
     * Tool to delete an existing friend by id. use when you need to remove a friend relationship by its user id. call after confirming the correct friend id.
     */
    DELETE_FRIEND: "SPLITWISE_DELETE_FRIEND",
    /**
     * Tool to retrieve expense categories. use when you need to list available categories before creating an expense.
     */
    GET_CATEGORIES: "SPLITWISE_GET_CATEGORIES",
    /**
     * Tool to retrieve a list of supported currencies. use when you need to display or validate currency options.
     */
    GET_CURRENCIES: "SPLITWISE_GET_CURRENCIES",
    /**
     * Tool to retrieve information about the current authenticated user. use when you need profile details of the logged-in user.
     */
    GET_CURRENT_USER: "SPLITWISE_GET_CURRENT_USER",
    /**
     * Action to retrieve information about a group.
     */
    GET_GROUP: "SPLITWISE_GET_GROUP",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SPLITWISE".
 */
export type SPLITWISE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SPLITWISE".
 */
export type SPLITWISE_TRIGGER_EVENTS = {}
