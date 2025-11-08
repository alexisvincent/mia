// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of REALPHONEVALIDATION's REALPHONEVALIDATION_EMAIL_VERIFY tool input.
 */
type REALPHONEVALIDATION_EMAIL_VERIFY_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address to verify
   */
  email?: unknown;
  /**
   * Output
   * @description Response format: 'json' or 'xml'. Defaults to 'json'
   * @default json
   * @enum {string}
   */
  output: "json" | "xml";
  /**
   * Token
   * @description Unique API token provided by RealPhoneValidation
   */
  token?: string;
};

/**
 * Type of REALPHONEVALIDATION's REALPHONEVALIDATION_EMAIL_VERIFY tool output.
 */
type REALPHONEVALIDATION_EMAIL_VERIFY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Connected
       * @description Whether the email is connected to active networks: 'Y' or 'N'
       * @default null
       * @enum {string|null}
       */
      connected: "Y" | "N" | null;
      /**
       * Disposable
       * @description Whether the email is disposable: 'Y' or 'N'
       * @default null
       * @enum {string|null}
       */
      disposable: "Y" | "N" | null;
      /**
       * Error
       * @description Detailed error description
       * @default null
       */
      error: string | null;
      /**
       * Error Code
       * @description Machine-readable error code
       * @default null
       */
      error_code: string | null;
      /**
       * Error Text
       * @description Human-readable error message, if any
       * @default null
       */
      error_text: string | null;
      /**
       * Id
       * @description Internal request ID
       * @default null
       */
      id: string | null;
      /**
       * Retval
       * @description Return code (0=success, negative/error codes)
       */
      retval: number;
      /**
       * Status
       * @description Verification status: valid, invalid, unknown, or accept_all
       * @default null
       * @enum {string|null}
       */
      status: "valid" | "invalid" | "unknown" | "accept_all" | null;
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
 * Type of REALPHONEVALIDATION's REALPHONEVALIDATION_RPV_ACTIVE tool input.
 */
type REALPHONEVALIDATION_RPV_ACTIVE_INPUT = {
  /**
   * Cc
   * @description ISO 2-digit country code if not included in phone number
   * @default null
   */
  cc: string | null;
  /**
   * Output
   * @description Response format. JSON or XML. XML output is not supported by this tool.
   * @default json
   * @enum {string}
   */
  output: "json" | "xml";
  /**
   * Phone
   * @description Phone number in international format, digits only, optional leading +
   */
  phone?: string;
  /**
   * Token
   * @description Unique API token provided by RealPhoneValidation
   */
  token?: string;
};

/**
 * Type of REALPHONEVALIDATION's REALPHONEVALIDATION_RPV_ACTIVE tool output.
 */
type REALPHONEVALIDATION_RPV_ACTIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description True if phone is active and can receive calls or texts
       */
      active: boolean;
      /**
       * Cc
       * @description ISO country code of the phone number
       */
      cc: string;
      /**
       * Line Type
       * @description Type of line, e.g., mobile, landline
       */
      line_type: string;
      /**
       * Number Format
       * @description Internationally formatted phone number
       */
      number_format: string;
      /**
       * Phone
       * @description The phone number tested
       */
      phone: string;
      /**
       * Reason
       * @description Reason for fail status or additional information
       * @default null
       */
      reason: string | null;
      /**
       * Request Id
       * @description Unique identifier for this request
       */
      request_id: string;
      /**
       * Status
       * @description Status of the request: success or fail
       * @enum {string}
       */
      status: "success" | "fail";
      /**
       * Valid
       * @description True if number has a valid format
       */
      valid: boolean;
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
 * Type of REALPHONEVALIDATION's REALPHONEVALIDATION_RPV_REASSIGNED_NUMBER_LOOKUP tool input.
 */
type REALPHONEVALIDATION_RPV_REASSIGNED_NUMBER_LOOKUP_INPUT = {
  /**
   * Contact Date
   * @description Date you received permission to contact in YYYY-MM-DD format
   */
  contact_date?: string;
  /**
   * Output
   * @description Response format: 'json' or 'xml'. Defaults to 'json'.
   * @default json
   * @enum {string}
   */
  output: "json" | "xml";
  /**
   * Phone
   * @description 10-digit US phone number (digits only)
   */
  phone?: string;
  /**
   * Token
   * @description RealPhoneValidation API token
   */
  token?: string;
};

/**
 * Type of REALPHONEVALIDATION's REALPHONEVALIDATION_RPV_REASSIGNED_NUMBER_LOOKUP tool output.
 */
type REALPHONEVALIDATION_RPV_REASSIGNED_NUMBER_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Responsecode
       * @description OK if successful; -1 on error
       * @enum {string}
       */
      RESPONSECODE: "OK" | "-1";
      /**
       * Responsemsg
       * @description Error message if any; empty on success
       */
      RESPONSEMSG: string;
      /**
       * Id
       * @description Lookup ID; -1 on error
       */
      id: string;
      /**
       * Reassigned
       * @description Determines if the number has been reassigned since the given date
       * @enum {string}
       */
      reassigned: "yes" | "no" | "no_data" | "undetermined";
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
 * Type of REALPHONEVALIDATION's REALPHONEVALIDATION_RPV_SCRUB_PLUS tool input.
 */
type REALPHONEVALIDATION_RPV_SCRUB_PLUS_INPUT = {
  /**
   * Phones
   * @description List of up to 500 ten-digit phone numbers without special characters
   */
  phones?: string[];
};

/**
 * Type of REALPHONEVALIDATION's REALPHONEVALIDATION_RPV_SCRUB_PLUS tool output.
 */
type REALPHONEVALIDATION_RPV_SCRUB_PLUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Container object for status and results array
       */
      result: {
          /**
           * Results
           * @description Detailed results for each phone number
           */
          results: {
              /**
               * Carrier
               * @description Carrier name
               */
              carrier: string;
              /**
               * City
               * @description City
               */
              city: string;
              /**
               * Country
               * @description Country code (e.g., 'US')
               */
              country: string;
              /**
               * Do Not Call
               * @description 'Y' or 'N' indicator for Do Not Call list status
               */
              do_not_call: string;
              /**
               * Error Msg
               * @description Error message if applicable
               * @default null
               */
              error_msg: string | null;
              /**
               * Is Ported
               * @description 'Y', 'N', or empty indicating ported status
               * @default null
               */
              is_ported: string | null;
              /**
               * Is Prepaid
               * @description 'Y', 'N', or empty indicating prepaid status
               * @default null
               */
              is_prepaid: string | null;
              /**
               * Line Provider Type
               * @description Provider type (e.g., 'MVNO')
               */
              line_provider_type: string;
              /**
               * Line Type
               * @description Type of number (e.g., 'Wireless', 'Landline', 'VOIP')
               */
              line_type: string;
              /**
               * Phone
               * @description The phone number processed
               */
              phone: string;
              /**
               * Ported Date
               * @description Date ported 'YYYY-MM-DD' if applicable
               * @default null
               */
              ported_date: string | null;
              /**
               * State
               * @description State abbreviation
               */
              state: string;
              /**
               * Valid
               * @description Whether the number is valid
               */
              valid: boolean;
              /**
               * Zipcode
               * @description Zip code
               */
              zipcode: string;
          }[];
          /**
           * Status
           * @description API call status message (e.g., 'success')
           */
          status: string;
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
 * Type of REALPHONEVALIDATION's REALPHONEVALIDATION_RPV_TURBO_V3 tool input.
 */
type REALPHONEVALIDATION_RPV_TURBO_V3_INPUT = {
  /**
   * Output
   * @description Response format; 'json' or 'xml'
   * @default json
   * @enum {string}
   */
  output: "json" | "xml";
  /**
   * Phone
   * @description 10 numeric digits ONLY
   */
  phone?: string;
  /**
   * Token
   * @description API token provided by RealPhoneValidation
   */
  token?: string;
};

/**
 * Type of REALPHONEVALIDATION's REALPHONEVALIDATION_RPV_TURBO_V3 tool output.
 */
type REALPHONEVALIDATION_RPV_TURBO_V3_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Caller Name
       * @description Subscriber name if available
       * @default null
       */
      caller_name: string | null;
      /**
       * Caller Type
       * @description Subscriber type
       * @enum {string}
       */
      caller_type: "Consumer" | "Business" | "Unavailable";
      /**
       * Carrier
       * @description Service provider (e.g., Verizon Wireless:6006 - SVR/2)
       * @default null
       */
      carrier: string | null;
      /**
       * Error Text
       * @description Error text or empty string if no error
       */
      error_text: string;
      /**
       * Phone Type
       * @description Type of the phone line
       * @enum {string}
       */
      phone_type: "Mobile" | "Landline" | "VoIP";
      /**
       * Status
       * @description Connection status of the phone
       * @enum {string}
       */
      status: "connected" | "connected-75" | "pending" | "disconnected" | "disconnected-70" | "busy" | "unreachable" | "invalid phone" | "restricted" | "ERROR" | "unauthorized" | "invalid-format" | "invalid-phone" | "bad-zip-code" | "server-unavailable";
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
 * Type of REALPHONEVALIDATION's REALPHONEVALIDATION_RPV_WIRELESS_ID tool input.
 */
type REALPHONEVALIDATION_RPV_WIRELESS_ID_INPUT = {
  /**
   * Output
   * @description Response format: 'json' or 'xml'
   * @default json
   * @enum {string}
   */
  output: "json" | "xml";
  /**
   * Phone
   * @description 10-digit US phone number, numeric digits only
   */
  phone?: string;
  /**
   * Token
   * @description Your RealValidation API token
   */
  token?: string;
};

/**
 * Type of REALPHONEVALIDATION's REALPHONEVALIDATION_RPV_WIRELESS_ID tool output.
 */
type REALPHONEVALIDATION_RPV_WIRELESS_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Responsecode
       * @description Result code: 'landline', 'cell', or '-1' for errors
       */
      RESPONSECODE: string;
      /**
       * Responsemsg
       * @description Error message when code is '-1'; empty string otherwise
       */
      RESPONSEMSG: string;
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
 * Type map of all available tool input types for toolkit "REALPHONEVALIDATION".
 */
export type REALPHONEVALIDATION_TOOL_INPUTS = {
  EMAIL_VERIFY: REALPHONEVALIDATION_EMAIL_VERIFY_INPUT
  RPV_ACTIVE: REALPHONEVALIDATION_RPV_ACTIVE_INPUT
  RPV_REASSIGNED_NUMBER_LOOKUP: REALPHONEVALIDATION_RPV_REASSIGNED_NUMBER_LOOKUP_INPUT
  RPV_SCRUB_PLUS: REALPHONEVALIDATION_RPV_SCRUB_PLUS_INPUT
  RPV_TURBO_V3: REALPHONEVALIDATION_RPV_TURBO_V3_INPUT
  RPV_WIRELESS_ID: REALPHONEVALIDATION_RPV_WIRELESS_ID_INPUT
}

/**
 * Type map of all available tool input types for toolkit "REALPHONEVALIDATION".
 */
export type REALPHONEVALIDATION_TOOL_OUTPUTS = {
  EMAIL_VERIFY: REALPHONEVALIDATION_EMAIL_VERIFY_OUTPUT
  RPV_ACTIVE: REALPHONEVALIDATION_RPV_ACTIVE_OUTPUT
  RPV_REASSIGNED_NUMBER_LOOKUP: REALPHONEVALIDATION_RPV_REASSIGNED_NUMBER_LOOKUP_OUTPUT
  RPV_SCRUB_PLUS: REALPHONEVALIDATION_RPV_SCRUB_PLUS_OUTPUT
  RPV_TURBO_V3: REALPHONEVALIDATION_RPV_TURBO_V3_OUTPUT
  RPV_WIRELESS_ID: REALPHONEVALIDATION_RPV_WIRELESS_ID_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's REALPHONEVALIDATION toolkit.
 */
export const REALPHONEVALIDATION = {
  slug: "realphonevalidation",
  tools: {
    /**
     * Tool to validate an email address and check connectivity and disposability. use after gathering an email to ensure it's deliverable and not disposable.
     */
    EMAIL_VERIFY: "REALPHONEVALIDATION_EMAIL_VERIFY",
    /**
     * Tool to determine if a phone number is active on a valid phone service provider. use after collecting the user's phone number for real-time verification.
     */
    RPV_ACTIVE: "REALPHONEVALIDATION_RPV_ACTIVE",
    /**
     * Tool to check if a phone number has been reassigned since a given consent date. use when verifying number ownership status after obtaining user consent.
     */
    RPV_REASSIGNED_NUMBER_LOOKUP: "REALPHONEVALIDATION_RPV_REASSIGNED_NUMBER_LOOKUP",
    /**
     * Tool to scrub phone numbers in bulk for connection status and type. use when validating multiple numbers at once.
     */
    RPV_SCRUB_PLUS: "REALPHONEVALIDATION_RPV_SCRUB_PLUS",
    /**
     * Tool to perform real-time phone number validation (status, type, carrier, caller name/type). use after collecting a 10-digit us phone number in webforms or crm for immediate validation.
     */
    RPV_TURBO_V3: "REALPHONEVALIDATION_RPV_TURBO_V3",
    /**
     * Tool to identify whether a us phone number is landline or wireless. use when conducting tcpa compliance checks.
     */
    RPV_WIRELESS_ID: "REALPHONEVALIDATION_RPV_WIRELESS_ID",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "REALPHONEVALIDATION".
 */
export type REALPHONEVALIDATION_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "REALPHONEVALIDATION".
 */
export type REALPHONEVALIDATION_TRIGGER_EVENTS = {}
