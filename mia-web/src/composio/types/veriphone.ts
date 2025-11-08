// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of VERIPHONE's VERIPHONE_GET_EXAMPLE_PHONE_NUMBER tool input.
 */
type VERIPHONE_GET_EXAMPLE_PHONE_NUMBER_INPUT = {
  /**
   * Country Code
   * @description 2-letter uppercase ISO country code (e.g., 'US', 'GB')
   */
  country_code?: unknown;
  /**
   * Purpose
   * @description Optional usage purpose (e.g., 'test', 'demo')
   * @default null
   */
  purpose: string | null;
  /**
   * Type
   * @description Optional phone number type; one of 'mobile', 'landline', 'voip', 'tollfree'
   * @default null
   * @enum {string|null}
   */
  type: "mobile" | "landline" | "voip" | "tollfree" | null;
};

/**
 * Type of VERIPHONE's VERIPHONE_GET_EXAMPLE_PHONE_NUMBER tool output.
 */
type VERIPHONE_GET_EXAMPLE_PHONE_NUMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description 2-letter ISO country code for the returned number
       */
      country: string;
      /**
       * Example Number
       * @description A valid example phone number including country code
       */
      example_number: string;
      /**
       * Purpose
       * @description Echoes the provided purpose if any
       * @default null
       */
      purpose: string | null;
      /**
       * Status
       * @description API status: 'success' or an error detail
       */
      status: string;
      /**
       * Type
       * @description Type of the returned number (e.g., 'mobile')
       */
      type: string;
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
 * Type of VERIPHONE's VERIPHONE_VERIFY_PHONE_NUMBER tool input.
 */
type VERIPHONE_VERIFY_PHONE_NUMBER_INPUT = {
  /**
   * Phone
   * @description Phone number to verify (E.164 or any common format).
   */
  phone?: string;
};

/**
 * Type of VERIPHONE's VERIPHONE_VERIFY_PHONE_NUMBER tool output.
 */
type VERIPHONE_VERIFY_PHONE_NUMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Carrier
       * @description Carrier name, if available
       * @default null
       */
      carrier: string | null;
      /**
       * Country
       * @description Country name
       */
      country: string;
      /**
       * Country Code
       * @description ISO 2-letter country code
       */
      country_code: string;
      /**
       * Country Prefix
       * @description Country dialing prefix
       */
      country_prefix: string;
      /**
       * E164
       * @description Number in E.164 format
       */
      e164: string;
      /**
       * Error
       * @description Error message if verification failed
       * @default null
       */
      error: string | null;
      /**
       * International Number
       * @description Number in international format
       */
      international_number: string;
      /**
       * Local Number
       * @description Local significant number
       */
      local_number: string;
      /**
       * Phone
       * @description The input phone number
       */
      phone: string;
      /**
       * Phone Region
       * @description Region or area the number belongs to
       */
      phone_region: string;
      /**
       * Phone Type
       * @description Type of phone line (mobile, landline, etc.)
       */
      phone_type: string;
      /**
       * Phone Valid
       * @description True if valid phone number
       */
      phone_valid: boolean;
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
 * Type map of all available tool input types for toolkit "VERIPHONE".
 */
export type VERIPHONE_TOOL_INPUTS = {
  GET_EXAMPLE_PHONE_NUMBER: VERIPHONE_GET_EXAMPLE_PHONE_NUMBER_INPUT
  VERIFY_PHONE_NUMBER: VERIPHONE_VERIFY_PHONE_NUMBER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "VERIPHONE".
 */
export type VERIPHONE_TOOL_OUTPUTS = {
  GET_EXAMPLE_PHONE_NUMBER: VERIPHONE_GET_EXAMPLE_PHONE_NUMBER_OUTPUT
  VERIFY_PHONE_NUMBER: VERIPHONE_VERIFY_PHONE_NUMBER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's VERIPHONE toolkit.
 */
export const VERIPHONE = {
  slug: "veriphone",
  tools: {
    /**
     * Tool to retrieve an example phone number for a specified country and type. use after confirming the country code. example: 'get an example mobile number for us'.
     */
    GET_EXAMPLE_PHONE_NUMBER: "VERIPHONE_GET_EXAMPLE_PHONE_NUMBER",
    /**
     * Tool to verify if a phone number is valid. use when you need to confirm formatting, region, and carrier details.
     */
    VERIFY_PHONE_NUMBER: "VERIPHONE_VERIFY_PHONE_NUMBER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "VERIPHONE".
 */
export type VERIPHONE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "VERIPHONE".
 */
export type VERIPHONE_TRIGGER_EVENTS = {}
