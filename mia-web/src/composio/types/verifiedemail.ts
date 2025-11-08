// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of VERIFIEDEMAIL's VERIFIEDEMAIL_CHECK_CREDITS tool input.
 */
type VERIFIEDEMAIL_CHECK_CREDITS_INPUT = object;

/**
 * Type of VERIFIEDEMAIL's VERIFIEDEMAIL_CHECK_CREDITS tool output.
 */
type VERIFIEDEMAIL_CHECK_CREDITS_OUTPUT = {
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
       * Status
       * @description Result of the request, typically 'success'
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
 * Type of VERIFIEDEMAIL's VERIFIEDEMAIL_CHECK_FILE_STATUS tool input.
 */
type VERIFIEDEMAIL_CHECK_FILE_STATUS_INPUT = {
  /**
   * File Id
   * @description The ID of the file returned by the upload endpoint.
   */
  file_id?: string;
};

/**
 * Type of VERIFIEDEMAIL's VERIFIEDEMAIL_CHECK_FILE_STATUS tool output.
 */
type VERIFIEDEMAIL_CHECK_FILE_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Number of errors encountered during processing.
       */
      errors: number;
      /**
       * Message
       * @description Additional message or information from the API.
       * @default null
       */
      message: string | null;
      /**
       * Progress
       * @description Percentage of the file processed so far.
       */
      progress: number;
      /**
       * Status
       * @description Current verification status of the file (e.g., 'pending', 'finished').
       */
      status: string;
      /**
       * Total
       * @description Total number of emails contained in the file.
       */
      total: number;
      /**
       * Verified
       * @description Number of emails successfully verified so far.
       */
      verified: number;
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
 * Type of VERIFIEDEMAIL's VERIFIEDEMAIL_GET1_CLICK_USER_DATA tool input.
 */
type VERIFIEDEMAIL_GET1_CLICK_USER_DATA_INPUT = {
  /**
   * Identity Uuid
   * @description The unique identifier for the user, obtained from the SDK or as a URL parameter on the redirect URL
   */
  identityUuid?: string;
};

/**
 * Type of VERIFIEDEMAIL's VERIFIEDEMAIL_GET1_CLICK_USER_DATA tool output.
 */
type VERIFIEDEMAIL_GET1_CLICK_USER_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description User's address information
       */
      address: {
          /**
           * City
           * @description City
           */
          city: string;
          /**
           * Country
           * @description Country
           */
          country: string;
          /**
           * Line1
           * @description Street address
           */
          line1: string;
          /**
           * State
           * @description State
           */
          state: string;
          /**
           * Zip Code
           * @description ZIP code
           */
          zipCode: string;
      }[];
      /**
       * Birth Date
       * @description User's birth date in YYYY-MM-DD format
       */
      birthDate: string;
      /**
       * Email
       * @description The user's email address
       */
      email: string;
      /**
       * Full Name
       * @description User's full name
       */
      fullName: {
          /**
           * First Name
           * @description User's first name
           */
          firstName: string;
          /**
           * Last Name
           * @description User's last name
           */
          lastName: string;
      };
      /**
       * Metadata
       * @description Metadata about verification methods used
       */
      metadata: {
          /** Credentials */
          credentials: {
              /** Verification Method */
              verificationMethod: {
                  /**
                   * Address
                   * @description Verification methods for address fields
                   */
                  address: {
                      /**
                       * City
                       * @description Verification method for city
                       */
                      city: string;
                      /**
                       * Country
                       * @description Verification method for country
                       */
                      country: string;
                      /**
                       * Line1
                       * @description Verification method for address line1 (e.g., 'credit_bureau')
                       */
                      line1: string;
                      /**
                       * State
                       * @description Verification method for state
                       */
                      state: string;
                      /**
                       * Zip Code
                       * @description Verification method for ZIP code
                       */
                      zipCode: string;
                  }[];
                  /**
                   * Birth Date
                   * @description Verification method for birth date
                   */
                  birthDate: string;
                  /** Full Name */
                  fullName: {
                      /**
                       * First Name
                       * @description Verification method for first name (e.g., 'phone_carrier')
                       */
                      firstName: string;
                      /**
                       * Last Name
                       * @description Verification method for last name
                       */
                      lastName: string;
                  };
                  /**
                   * Ssn
                   * @description Verification method for SSN
                   */
                  ssn: string;
              };
          };
          /** Identifiers */
          identifiers: {
              /** Verification Method */
              verificationMethod: {
                  /**
                   * Phone
                   * @description Method used to verify the phone number (e.g., 'otp')
                   */
                  phone: string;
              };
          };
      };
      /**
       * Phone
       * @description The user's phone number
       */
      phone: string;
      /**
       * Ssn
       * @description User's Social Security Number
       */
      ssn: string;
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
 * Type of VERIFIEDEMAIL's VERIFIEDEMAIL_GET_SHARED_CREDENTIALS tool input.
 */
type VERIFIEDEMAIL_GET_SHARED_CREDENTIALS_INPUT = object;

/**
 * Type of VERIFIEDEMAIL's VERIFIEDEMAIL_GET_SHARED_CREDENTIALS tool output.
 */
type VERIFIEDEMAIL_GET_SHARED_CREDENTIALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credentials
       * @description List of shared credential objects
       */
      credentials: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the credential was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique credential ID
           */
          id: string;
          /**
           * Shared With
           * @description Identifiers with whom the credential is shared
           */
          shared_with: string[];
          /**
           * Updated At
           * @description ISO 8601 timestamp when the credential was last updated
           */
          updated_at: string;
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
 * Type of VERIFIEDEMAIL's VERIFIEDEMAIL_POST1_CLICK_CREDENTIALS_UPDATE tool input.
 */
type VERIFIEDEMAIL_POST1_CLICK_CREDENTIALS_UPDATE_INPUT = {
  /**
   * Credentials
   * @description An object containing the updated credential values. Keys are credential names and values are either simple strings or nested objects.
   */
  credentials?: {
      [key: string]: string | {
          [key: string]: string;
      };
  };
  /**
   * Uuid
   * @description The unique identifier for the 1-Click session
   */
  uuid?: string;
};

/**
 * Type of VERIFIEDEMAIL's VERIFIEDEMAIL_POST1_CLICK_CREDENTIALS_UPDATE tool output.
 */
type VERIFIEDEMAIL_POST1_CLICK_CREDENTIALS_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credentials
       * @description The updated credentials object returned by Verified Inc.
       */
      credentials: {
          [key: string]: string | {
              [key: string]: string;
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
 * Type of VERIFIEDEMAIL's VERIFIEDEMAIL_POST_GET_SHARED_CREDENTIALS tool input.
 */
type VERIFIEDEMAIL_POST_GET_SHARED_CREDENTIALS_INPUT = {
  /**
   * Credential Ids
   * @description List of credential IDs to fetch shared credential data for
   */
  credential_ids?: string[];
};

/**
 * Type of VERIFIEDEMAIL's VERIFIEDEMAIL_POST_GET_SHARED_CREDENTIALS tool output.
 */
type VERIFIEDEMAIL_POST_GET_SHARED_CREDENTIALS_OUTPUT = {
  /**
   * Data
   * @description List of credential objects matching requested IDs
   */
  data?: {
      /**
       * Email
       * @description Email address associated with the credential
       */
      email: string;
      /**
       * Expires At
       * @description ISO 8601 timestamp when the credential expires, if applicable
       * @default null
       */
      expiresAt: string | null;
      /**
       * Id
       * @description Unique credential identifier
       */
      id: string;
      /**
       * Issued At
       * @description ISO 8601 timestamp when issued
       */
      issuedAt: string;
      /**
       * Status
       * @description Current status of the credential
       */
      status: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Errors
   * @description List of errors for credentials that failed to fetch
   * @default null
   */
  errors: {
      /**
       * Code
       * @description Error code
       */
      code: string;
      /**
       * Message
       * @description Error message
       */
      message: string;
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of VERIFIEDEMAIL's VERIFIEDEMAIL_VERIFY_EMAIL tool input.
 */
type VERIFIEDEMAIL_VERIFY_EMAIL_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to verify.
   */
  email?: unknown;
};

/**
 * Type of VERIFIEDEMAIL's VERIFIEDEMAIL_VERIFY_EMAIL tool output.
 */
type VERIFIEDEMAIL_VERIFY_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description The email address that was verified.
       */
      address: string;
      /**
       * Catch All
       * @description Whether the server accepts all emails for the domain.
       */
      catch_all: boolean;
      /**
       * Deliverable
       * @description Whether the email can accept mail.
       */
      deliverable: boolean;
      /**
       * Disposable
       * @description Whether the email is a temporary/disposable address.
       */
      disposable: boolean;
      /**
       * Free
       * @description Whether the email is from a free provider.
       */
      free: boolean;
      /**
       * Full Inbox
       * @description Whether the mailbox is full.
       */
      full_inbox: boolean;
      /**
       * Host Exists
       * @description Whether the email server exists.
       */
      host_exists: boolean;
      /**
       * Message
       * @description Additional status message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Mx Records
       * @description List of MX records for the email's domain.
       */
      mx_records?: string[];
      /**
       * Reason
       * @description Main reason for undeliverability, if applicable.
       * @default null
       */
      reason: string | null;
      /**
       * Role
       * @description Whether the email is a role-based address.
       */
      role: boolean;
      /**
       * Success
       * @description True if the API request succeeded.
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
 * Type map of all available tool input types for toolkit "VERIFIEDEMAIL".
 */
export type VERIFIEDEMAIL_TOOL_INPUTS = {
  CHECK_CREDITS: VERIFIEDEMAIL_CHECK_CREDITS_INPUT
  CHECK_FILE_STATUS: VERIFIEDEMAIL_CHECK_FILE_STATUS_INPUT
  GET1_CLICK_USER_DATA: VERIFIEDEMAIL_GET1_CLICK_USER_DATA_INPUT
  GET_SHARED_CREDENTIALS: VERIFIEDEMAIL_GET_SHARED_CREDENTIALS_INPUT
  POST1_CLICK_CREDENTIALS_UPDATE: VERIFIEDEMAIL_POST1_CLICK_CREDENTIALS_UPDATE_INPUT
  POST_GET_SHARED_CREDENTIALS: VERIFIEDEMAIL_POST_GET_SHARED_CREDENTIALS_INPUT
  VERIFY_EMAIL: VERIFIEDEMAIL_VERIFY_EMAIL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "VERIFIEDEMAIL".
 */
export type VERIFIEDEMAIL_TOOL_OUTPUTS = {
  CHECK_CREDITS: VERIFIEDEMAIL_CHECK_CREDITS_OUTPUT
  CHECK_FILE_STATUS: VERIFIEDEMAIL_CHECK_FILE_STATUS_OUTPUT
  GET1_CLICK_USER_DATA: VERIFIEDEMAIL_GET1_CLICK_USER_DATA_OUTPUT
  GET_SHARED_CREDENTIALS: VERIFIEDEMAIL_GET_SHARED_CREDENTIALS_OUTPUT
  POST1_CLICK_CREDENTIALS_UPDATE: VERIFIEDEMAIL_POST1_CLICK_CREDENTIALS_UPDATE_OUTPUT
  POST_GET_SHARED_CREDENTIALS: VERIFIEDEMAIL_POST_GET_SHARED_CREDENTIALS_OUTPUT
  VERIFY_EMAIL: VERIFIEDEMAIL_VERIFY_EMAIL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's VERIFIEDEMAIL toolkit.
 */
export const VERIFIEDEMAIL = {
  slug: "verifiedemail",
  tools: {
    /**
     * Tool to retrieve the remaining verification credits. use after confirming account authentication to ensure you have sufficient credits before performing verification operations.
     */
    CHECK_CREDITS: "VERIFIEDEMAIL_CHECK_CREDITS",
    /**
     * Tool to check the status of a previously uploaded file. use after uploading a file when polling for verification progress.
     */
    CHECK_FILE_STATUS: "VERIFIEDEMAIL_CHECK_FILE_STATUS",
    /**
     * Tool to retrieve data for a user who has completed a 1-click signup flow. use after you have the identityuuid to fetch the verified user's full profile.
     */
    GET1_CLICK_USER_DATA: "VERIFIEDEMAIL_GET1_CLICK_USER_DATA",
    /**
     * Tool to retrieve a list of shared credential ids. use when you need to fetch all credentials shared to your account after authentication.
     */
    GET_SHARED_CREDENTIALS: "VERIFIEDEMAIL_GET_SHARED_CREDENTIALS",
    /**
     * Tool to update 1-click credentials. use after obtaining a 1-click session uuid when you need to update user-provided credential values in a non-hosted or trusted flow.
     */
    POST1_CLICK_CREDENTIALS_UPDATE: "VERIFIEDEMAIL_POST1_CLICK_CREDENTIALS_UPDATE",
    /**
     * Tool to retrieve verified credential data shared by a user. use after obtaining a list of credential ids to fetch their details.
     */
    POST_GET_SHARED_CREDENTIALS: "VERIFIEDEMAIL_POST_GET_SHARED_CREDENTIALS",
    /**
     * Tool to verify the deliverability and validity of an email address. use when you need to confirm if an email can receive mail by checking server existence, mailbox status, and more.
     */
    VERIFY_EMAIL: "VERIFIEDEMAIL_VERIFY_EMAIL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "VERIFIEDEMAIL".
 */
export type VERIFIEDEMAIL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "VERIFIEDEMAIL".
 */
export type VERIFIEDEMAIL_TRIGGER_EVENTS = {}
