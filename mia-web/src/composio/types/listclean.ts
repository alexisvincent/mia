// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LISTCLEAN's LISTCLEAN_CREATE_BULK_VERIFICATION_LIST tool input.
 */
type LISTCLEAN_CREATE_BULK_VERIFICATION_LIST_INPUT = {
  /**
   * Emails
   * @description List of valid email addresses to include in the CSV file
   */
  emails?: unknown[];
};

/**
 * Type of LISTCLEAN's LISTCLEAN_CREATE_BULK_VERIFICATION_LIST tool output.
 */
type LISTCLEAN_CREATE_BULK_VERIFICATION_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Path
       * @description Filesystem path to the generated CSV file containing the provided email addresses
       */
      file_path: string;
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
 * Type of LISTCLEAN's LISTCLEAN_GET_ACCOUNT_PROFILE tool input.
 */
type LISTCLEAN_GET_ACCOUNT_PROFILE_INPUT = object;

/**
 * Type of LISTCLEAN's LISTCLEAN_GET_ACCOUNT_PROFILE tool output.
 */
type LISTCLEAN_GET_ACCOUNT_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Account creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Email
       * @description Account email address
       */
      email: string;
      /**
       * Id
       * @description Unique user identifier
       */
      id: string;
      /**
       * Name
       * @description User's full name
       */
      name: string;
      /**
       * Status
       * @description Account status
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
 * Type of LISTCLEAN's LISTCLEAN_GET_CREDITS tool input.
 */
type LISTCLEAN_GET_CREDITS_INPUT = object;

/**
 * Type of LISTCLEAN's LISTCLEAN_GET_CREDITS tool output.
 */
type LISTCLEAN_GET_CREDITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits
       * @description Number of remaining verification credits
       */
      credits: number;
      /**
       * Message
       * @description Status or result message returned by the API
       */
      message: string;
      /**
       * Success
       * @description Indicates if the request was successful
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
 * Type of LISTCLEAN's LISTCLEAN_VERIFY_EMAIL tool input.
 */
type LISTCLEAN_VERIFY_EMAIL_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to verify
   */
  email?: unknown;
};

/**
 * Type of LISTCLEAN's LISTCLEAN_VERIFY_EMAIL tool output.
 */
type LISTCLEAN_VERIFY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Detailed email verification results
   */
  data?: {
      /**
       * Email
       * @description The verified email address
       */
      email: string;
      /**
       * Is Disposable
       * @description True if the address is from a disposable provider
       */
      is_disposable: boolean;
      /**
       * Is Free
       * @description True if the address is from a free provider
       */
      is_free: boolean;
      /**
       * Is Role
       * @description True if the address is a role-based account
       */
      is_role: boolean;
      /**
       * Is Valid
       * @description True if email is valid
       */
      is_valid: boolean;
      /**
       * Reason
       * @description If invalid, a short reason for invalidation
       * @default null
       */
      reason: string | null;
      /**
       * Score
       * @description Numeric quality/risk score of the email (0–1)
       */
      score: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Additional info or error message if status is 'error'
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Request status, e.g., 'success' or 'error'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "LISTCLEAN".
 */
export type LISTCLEAN_TOOL_INPUTS = {
  CREATE_BULK_VERIFICATION_LIST: LISTCLEAN_CREATE_BULK_VERIFICATION_LIST_INPUT
  GET_ACCOUNT_PROFILE: LISTCLEAN_GET_ACCOUNT_PROFILE_INPUT
  GET_CREDITS: LISTCLEAN_GET_CREDITS_INPUT
  VERIFY_EMAIL: LISTCLEAN_VERIFY_EMAIL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LISTCLEAN".
 */
export type LISTCLEAN_TOOL_OUTPUTS = {
  CREATE_BULK_VERIFICATION_LIST: LISTCLEAN_CREATE_BULK_VERIFICATION_LIST_OUTPUT
  GET_ACCOUNT_PROFILE: LISTCLEAN_GET_ACCOUNT_PROFILE_OUTPUT
  GET_CREDITS: LISTCLEAN_GET_CREDITS_OUTPUT
  VERIFY_EMAIL: LISTCLEAN_VERIFY_EMAIL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LISTCLEAN toolkit.
 */
export const LISTCLEAN = {
  slug: "listclean",
  tools: {
    /**
     * Tool to create a csv file with provided email addresses for bulk verification. use when you need to generate a file for bulk upload through listclean upload list.
     */
    CREATE_BULK_VERIFICATION_LIST: "LISTCLEAN_CREATE_BULK_VERIFICATION_LIST",
    /**
     * Tool to retrieve the authenticated account's profile. use after obtaining a valid auth token to fetch user account data.
     */
    GET_ACCOUNT_PROFILE: "LISTCLEAN_GET_ACCOUNT_PROFILE",
    /**
     * Tool to retrieve remaining verification credits. use when you need to check your available account credits before performing more email verifications.
     */
    GET_CREDITS: "LISTCLEAN_GET_CREDITS",
    /**
     * Tool to verify an email's validity. use when you need to ensure an address is deliverable and non-disposable, after collecting a user's email.
     */
    VERIFY_EMAIL: "LISTCLEAN_VERIFY_EMAIL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LISTCLEAN".
 */
export type LISTCLEAN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LISTCLEAN".
 */
export type LISTCLEAN_TRIGGER_EVENTS = {}
