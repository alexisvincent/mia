// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GODIAL's GODIAL_ADD_CONTACT tool input.
 */
type GODIAL_ADD_CONTACT_INPUT = {
  /**
   * Assignment Mode
   * @description Assignment behavior for the contact (e.g., default)
   * @default null
   */
  assignmentMode: string | null;
  /**
   * Company Name
   * @description Company or organization name
   * @default null
   */
  companyName: string | null;
  /**
   * Email
   * Format: email
   * @description Contact's email address
   * @default null
   */
  email: string | null;
  /**
   * Extra
   * @description Any extra/custom data to store with the contact
   * @default null
   */
  extra: string | null;
  /**
   * List Id
   * @description ID of the list where the new contact will be added
   */
  listId?: string;
  /**
   * Name
   * @description Contact's name
   * @default null
   */
  name: string | null;
  /**
   * Note
   * @description Free-form note about the contact
   * @default null
   */
  note: string | null;
  /**
   * Phone
   * @description Primary phone number
   * @default null
   */
  phone: string | null;
  /**
   * Remarks
   * @description Additional remarks
   * @default null
   */
  remarks: string | null;
  /**
   * Second Phone
   * @description Secondary phone number
   * @default null
   */
  secondPhone: string | null;
};

/**
 * Type of GODIAL's GODIAL_ADD_CONTACT tool output.
 */
type GODIAL_ADD_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw
       * @description Full JSON response from GoDial API
       */
      raw: {
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
 * Type of GODIAL's GODIAL_LIST_ACCOUNTS tool input.
 */
type GODIAL_LIST_ACCOUNTS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve, 1-indexed
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of accounts per page
   * @default null
   */
  perPage: number | null;
};

/**
 * Type of GODIAL's GODIAL_LIST_ACCOUNTS tool output.
 */
type GODIAL_LIST_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounts
       * @description List of accounts available in the GoDial account
       */
      accounts: {
          /**
           * Id
           * @description Unique identifier of the account
           */
          id: string;
          /**
           * Name
           * @description Name of the account
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
 * Type of GODIAL's GODIAL_LIST_EXTERNAL_LISTS tool input.
 */
type GODIAL_LIST_EXTERNAL_LISTS_INPUT = object;

/**
 * Type of GODIAL's GODIAL_LIST_EXTERNAL_LISTS tool output.
 */
type GODIAL_LIST_EXTERNAL_LISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Lists
       * @description List of lists available in the GoDial account
       */
      lists: {
          /**
           * Id
           * @description Unique identifier of the list
           */
          id: string;
          /**
           * Name
           * @description Name of the list
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
 * Type of GODIAL's GODIAL_REMOVE_ACCOUNT tool input.
 */
type GODIAL_REMOVE_ACCOUNT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the GoDial account to remove
   */
  id?: string;
};

/**
 * Type of GODIAL's GODIAL_REMOVE_ACCOUNT tool output.
 */
type GODIAL_REMOVE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Detailed message regarding the removal operation
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Whether the account removal was successful
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
 * Type map of all available tool input types for toolkit "GODIAL".
 */
export type GODIAL_TOOL_INPUTS = {
  ADD_CONTACT: GODIAL_ADD_CONTACT_INPUT
  LIST_ACCOUNTS: GODIAL_LIST_ACCOUNTS_INPUT
  LIST_EXTERNAL_LISTS: GODIAL_LIST_EXTERNAL_LISTS_INPUT
  REMOVE_ACCOUNT: GODIAL_REMOVE_ACCOUNT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GODIAL".
 */
export type GODIAL_TOOL_OUTPUTS = {
  ADD_CONTACT: GODIAL_ADD_CONTACT_OUTPUT
  LIST_ACCOUNTS: GODIAL_LIST_ACCOUNTS_OUTPUT
  LIST_EXTERNAL_LISTS: GODIAL_LIST_EXTERNAL_LISTS_OUTPUT
  REMOVE_ACCOUNT: GODIAL_REMOVE_ACCOUNT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GODIAL toolkit.
 */
export const GODIAL = {
  slug: "godial",
  tools: {
    /**
     * Tool to add a new contact in GoDial CRM. Use when you need to create contacts programmatically.
     */
    ADD_CONTACT: "GODIAL_ADD_CONTACT",
    /**
     * Tool to retrieve all accounts in the authenticated GoDial account. Use after obtaining access token to fetch available accounts. Supports optional pagination.
     */
    LIST_ACCOUNTS: "GODIAL_LIST_ACCOUNTS",
    /**
     * Tool to retrieve all lists in the authenticated GoDial account. Use when you need to enumerate lists for selecting a target list ID after configuring your External API access token.
     */
    LIST_EXTERNAL_LISTS: "GODIAL_LIST_EXTERNAL_LISTS",
    /**
     * Tool to remove a GoDial account. Use when an account needs to be permanently deleted.
     */
    REMOVE_ACCOUNT: "GODIAL_REMOVE_ACCOUNT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GODIAL".
 */
export type GODIAL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GODIAL".
 */
export type GODIAL_TRIGGER_EVENTS = {}
