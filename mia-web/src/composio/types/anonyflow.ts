// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ANONYFLOW's ANONYFLOW_ANONYMIZE_VALUE tool input.
 */
type ANONYFLOW_ANONYMIZE_VALUE_INPUT = {
  /**
   * Data
   * @description List of plaintext string values to anonymize.
   */
  data?: string[];
};

/**
 * Type of ANONYFLOW's ANONYFLOW_ANONYMIZE_VALUE tool output.
 */
type ANONYFLOW_ANONYMIZE_VALUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description True if the request was successful.
       */
      status: boolean;
      /**
       * Value
       * @description Anonymized string values corresponding to each input data.
       */
      value: string[];
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
 * Type of ANONYFLOW's ANONYFLOW_DEANONYMIZE_PACKET tool input.
 */
type ANONYFLOW_DEANONYMIZE_PACKET_INPUT = {
  /**
   * Data
   * @description JSON object representing the data packet to deanonymize. Values can be string, number, or boolean.
   */
  data?: {
      [key: string]: string | number | boolean;
  };
  /**
   * Keys
   * @description List of keys within the data packet whose values to deanonymize. Empty list deanonymizes entire packet.
   */
  keys?: string[];
};

/**
 * Type of ANONYFLOW's ANONYFLOW_DEANONYMIZE_PACKET tool output.
 */
type ANONYFLOW_DEANONYMIZE_PACKET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description True if request was successful.
       */
      status: boolean;
      /**
       * Value
       * @description Data packet with specified fields deanonymized; values that fail decryption will be set to 'Error'.
       */
      value: {
          [key: string]: string | number | boolean;
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
 * Type of ANONYFLOW's ANONYFLOW_DEANONYMIZE_VALUE tool input.
 */
type ANONYFLOW_DEANONYMIZE_VALUE_INPUT = {
  /**
   * Data
   * @description List of anonymized string values to deanonymize.
   */
  data?: string[];
};

/**
 * Type of ANONYFLOW's ANONYFLOW_DEANONYMIZE_VALUE tool output.
 */
type ANONYFLOW_DEANONYMIZE_VALUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description True if request succeeded.
       */
      status: boolean;
      /**
       * Value
       * @description Original string values corresponding to input anonymized data.
       */
      value: string[];
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
 * Type of ANONYFLOW's ANONYFLOW_TEST_CONNECTION tool input.
 */
type ANONYFLOW_TEST_CONNECTION_INPUT = object;

/**
 * Type of ANONYFLOW's ANONYFLOW_TEST_CONNECTION tool output.
 */
type ANONYFLOW_TEST_CONNECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description True if the AnonyFlow API is reachable and operational
       */
      status: boolean;
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
 * Type map of all available tool input types for toolkit "ANONYFLOW".
 */
export type ANONYFLOW_TOOL_INPUTS = {
  ANONYMIZE_VALUE: ANONYFLOW_ANONYMIZE_VALUE_INPUT
  DEANONYMIZE_PACKET: ANONYFLOW_DEANONYMIZE_PACKET_INPUT
  DEANONYMIZE_VALUE: ANONYFLOW_DEANONYMIZE_VALUE_INPUT
  TEST_CONNECTION: ANONYFLOW_TEST_CONNECTION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ANONYFLOW".
 */
export type ANONYFLOW_TOOL_OUTPUTS = {
  ANONYMIZE_VALUE: ANONYFLOW_ANONYMIZE_VALUE_OUTPUT
  DEANONYMIZE_PACKET: ANONYFLOW_DEANONYMIZE_PACKET_OUTPUT
  DEANONYMIZE_VALUE: ANONYFLOW_DEANONYMIZE_VALUE_OUTPUT
  TEST_CONNECTION: ANONYFLOW_TEST_CONNECTION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ANONYFLOW toolkit.
 */
export const ANONYFLOW = {
  slug: "anonyflow",
  tools: {
    /**
     * Tool to anonymize a string or array of string values. use when you need to conceal sensitive text before storage or transmission. example: `anonymizevalue().execute(anonymizevaluerequest(data=['secret']))` limitations: only supports list of strings, not nested structures.
     */
    ANONYMIZE_VALUE: "ANONYFLOW_ANONYMIZE_VALUE",
    /**
     * Tool to deanonymize a json data packet using your private key. use after receiving an anonymized packet to recover specific fields.
     */
    DEANONYMIZE_PACKET: "ANONYFLOW_DEANONYMIZE_PACKET",
    /**
     * Tool to deanonymize one or more anonymized string values. use when you need to recover the original plaintext values after encryption-based anonymization. example: `deanonymizevalue().execute(deanonymizevaluerequest(data=["<anonymized string>"]))`
     */
    DEANONYMIZE_VALUE: "ANONYFLOW_DEANONYMIZE_VALUE",
    /**
     * Tool to test the connection to the anonyflow api. use when verifying that the anonyflow service is reachable and operational before performing anonymization tasks. example: `testconnection().execute(testconnectionrequest())`
     */
    TEST_CONNECTION: "ANONYFLOW_TEST_CONNECTION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ANONYFLOW".
 */
export type ANONYFLOW_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ANONYFLOW".
 */
export type ANONYFLOW_TRIGGER_EVENTS = {}
