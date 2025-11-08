// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BOLT_IOT's BOLT_IOT_ANALOG_READ tool input.
 */
type BOLT_IOT_ANALOG_READ_INPUT = {
  /**
   * Pin
   * @description Analog input pin to read. Valid values: 'A0', 'A1', 'A2', 'A3'.
   * @enum {string}
   */
  pin?: "A0" | "A1" | "A2" | "A3";
};

/**
 * Type of BOLT_IOT's BOLT_IOT_ANALOG_READ tool output.
 */
type BOLT_IOT_ANALOG_READ_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Error message if the request failed.
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description 1 if the request was successful, 0 otherwise.
       */
      success: number;
      /**
       * Value
       * @description Analog reading from the specified pin (0 to 1023).
       */
      value: number;
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
 * Type of BOLT_IOT's BOLT_IOT_BOLT_IOT_DIGITAL_WRITE tool input.
 */
type BOLT_IOT_BOLT_IOT_DIGITAL_WRITE_INPUT = {
  /**
   * Device Name
   * @description The name or ID of the Bolt device as shown in your Bolt IoT account.
   */
  deviceName?: string;
  /**
   * Pin
   * @description The digital pin number to set (e.g., '0', '1', etc.).
   */
  pin?: string;
  /**
   * State
   * @description Desired digital output state for the pin: 'HIGH' or 'LOW'.
   * @enum {string}
   */
  state?: "HIGH" | "LOW";
};

/**
 * Type of BOLT_IOT's BOLT_IOT_BOLT_IOT_DIGITAL_WRITE tool output.
 */
type BOLT_IOT_BOLT_IOT_DIGITAL_WRITE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information about the request result.
       */
      message: string;
      /**
       * Success
       * @description '1' indicates the operation was successful; '0' indicates failure.
       * @enum {string}
       */
      success: "1" | "0";
      /**
       * Value
       * @description State that was set on the pin: '1' for HIGH, '0' for LOW.
       * @enum {string}
       */
      value: "1" | "0";
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
 * Type of BOLT_IOT's BOLT_IOT_CHECK_DEVICE_STATUS tool input.
 */
type BOLT_IOT_CHECK_DEVICE_STATUS_INPUT = {
  /**
   * Device Id
   * @description Unique identifier of the Bolt IoT device. Must be in the format 'BOLTXXXXXXX'.
   */
  deviceID?: string;
};

/**
 * Type of BOLT_IOT's BOLT_IOT_CHECK_DEVICE_STATUS tool output.
 */
type BOLT_IOT_CHECK_DEVICE_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information or error message, if any.
       */
      message: string;
      /**
       * Success
       * @description '1' indicates the API call was successful; '0' indicates failure.
       * @enum {string}
       */
      success: "1" | "0";
      /**
       * Value
       * @description '1' indicates the device is online; '0' indicates it is offline.
       * @enum {string}
       */
      value: "1" | "0";
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
 * Type of BOLT_IOT's BOLT_IOT_DIGITAL_WRITE tool input.
 */
type BOLT_IOT_DIGITAL_WRITE_INPUT = {
  /**
   * Device Name
   * @description The name or ID of the Bolt device as shown in your Bolt IoT account.
   */
  deviceName?: string;
  /**
   * Pin
   * @description The digital pin number to set (e.g., '0', '1', etc.).
   */
  pin?: string;
  /**
   * State
   * @description Desired digital output state for the pin: 'HIGH' or 'LOW'.
   * @enum {string}
   */
  state?: "HIGH" | "LOW";
};

/**
 * Type of BOLT_IOT's BOLT_IOT_DIGITAL_WRITE tool output.
 */
type BOLT_IOT_DIGITAL_WRITE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information about the request result.
       */
      message: string;
      /**
       * Success
       * @description '1' indicates the operation was successful; '0' indicates failure.
       * @enum {string}
       */
      success: "1" | "0";
      /**
       * Value
       * @description State that was set on the pin: '1' for HIGH, '0' for LOW.
       * @enum {string}
       */
      value: "1" | "0";
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
 * Type of BOLT_IOT's BOLT_IOT_SERIAL_READ tool input.
 */
type BOLT_IOT_SERIAL_READ_INPUT = {
  /**
   * Device Name
   * @description The name or ID of the Bolt device as shown in your Bolt IoT account.
   */
  deviceName?: string;
  /**
   * Till
   * @description ASCII value of the character up to which data should be read. If omitted, reads until newline (ASCII 10).
   * @default null
   */
  till: number | null;
};

/**
 * Type of BOLT_IOT's BOLT_IOT_SERIAL_READ tool output.
 */
type BOLT_IOT_SERIAL_READ_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information about the request status.
       */
      message: string;
      /**
       * Success
       * @description '1' indicates success; '0' indicates failure.
       * @enum {string}
       */
      success: "1" | "0";
      /**
       * Value
       * @description Data read from the UART interface up to the specified character.
       */
      value: string;
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
 * Type of BOLT_IOT's BOLT_IOT_SERIAL_WRITE tool input.
 */
type BOLT_IOT_SERIAL_WRITE_INPUT = {
  /**
   * Data
   * @description Data string to transmit as ASCII characters over UART.
   */
  data?: string;
  /**
   * Device Name
   * @description The name or ID of the Bolt device as shown in your Bolt IoT account.
   */
  deviceName?: string;
};

/**
 * Type of BOLT_IOT's BOLT_IOT_SERIAL_WRITE tool output.
 */
type BOLT_IOT_SERIAL_WRITE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description '1' indicates the operation was successful; '0' indicates failure.
       * @enum {string}
       */
      success: "1" | "0";
      /**
       * Value
       * @description Server response message confirming the serialWrite operation.
       */
      value: string;
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
 * Type of BOLT_IOT's BOLT_IOT_SERIAL_WRITE_READ tool input.
 */
type BOLT_IOT_SERIAL_WRITE_READ_INPUT = {
  /**
   * Data
   * @description ASCII string to transmit over UART.
   */
  data?: string;
  /**
   * Device Name
   * @description The name or ID of the Bolt device as shown in your Bolt IoT account.
   */
  deviceName?: string;
};

/**
 * Type of BOLT_IOT's BOLT_IOT_SERIAL_WRITE_READ tool output.
 */
type BOLT_IOT_SERIAL_WRITE_READ_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Read
       * @description Result object of the serialRead command.
       */
      read: {
          /**
           * Message
           * @description Optional additional information from the serialRead command.
           * @default null
           */
          message: string | null;
          /**
           * Success
           * @description '1' indicates the read operation was successful; '0' indicates failure.
           * @enum {string}
           */
          success: "1" | "0";
          /**
           * Value
           * @description Data read from the UART interface as an ASCII string.
           */
          value: string;
      };
      /**
       * Write
       * @description Result object of the serialWrite command.
       */
      write: {
          /**
           * Success
           * @description '1' indicates the write operation was successful; '0' indicates failure.
           * @enum {string}
           */
          success: "1" | "0";
          /**
           * Value
           * @description Server response message confirming the serialWrite operation.
           */
          value: string;
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
 * Type map of all available tool input types for toolkit "BOLT_IOT".
 */
export type BOLT_IOT_TOOL_INPUTS = {
  ANALOG_READ: BOLT_IOT_ANALOG_READ_INPUT
  BOLT_IOT_DIGITAL_WRITE: BOLT_IOT_BOLT_IOT_DIGITAL_WRITE_INPUT
  CHECK_DEVICE_STATUS: BOLT_IOT_CHECK_DEVICE_STATUS_INPUT
  DIGITAL_WRITE: BOLT_IOT_DIGITAL_WRITE_INPUT
  SERIAL_READ: BOLT_IOT_SERIAL_READ_INPUT
  SERIAL_WRITE: BOLT_IOT_SERIAL_WRITE_INPUT
  SERIAL_WRITE_READ: BOLT_IOT_SERIAL_WRITE_READ_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BOLT_IOT".
 */
export type BOLT_IOT_TOOL_OUTPUTS = {
  ANALOG_READ: BOLT_IOT_ANALOG_READ_OUTPUT
  BOLT_IOT_DIGITAL_WRITE: BOLT_IOT_BOLT_IOT_DIGITAL_WRITE_OUTPUT
  CHECK_DEVICE_STATUS: BOLT_IOT_CHECK_DEVICE_STATUS_OUTPUT
  DIGITAL_WRITE: BOLT_IOT_DIGITAL_WRITE_OUTPUT
  SERIAL_READ: BOLT_IOT_SERIAL_READ_OUTPUT
  SERIAL_WRITE: BOLT_IOT_SERIAL_WRITE_OUTPUT
  SERIAL_WRITE_READ: BOLT_IOT_SERIAL_WRITE_READ_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BOLT_IOT toolkit.
 */
export const BOLT_IOT = {
  slug: "bolt_iot",
  tools: {
    /**
     * Tool to read the analog value from a specified pin on a bolt device. use when you need sensor readings (0–1023) after confirming the device is online.
     */
    ANALOG_READ: "BOLT_IOT_ANALOG_READ",
    /**
     * Tool to set a digital pin high or low on a specified bolt device. use when controlling actuators or leds via digital output.
     */
    BOLT_IOT_DIGITAL_WRITE: "BOLT_IOT_BOLT_IOT_DIGITAL_WRITE",
    /**
     * Tool to check whether a specified bolt device is online. use when you need to verify device connectivity before sending commands (e.g., control signals). example: 'check if device bolt1234567 is online.'
     */
    CHECK_DEVICE_STATUS: "BOLT_IOT_CHECK_DEVICE_STATUS",
    /**
     * Tool to set a digital pin high or low on a specified bolt device. use when controlling actuators or leds via digital output.
     */
    DIGITAL_WRITE: "BOLT_IOT_DIGITAL_WRITE",
    /**
     * Tool to read incoming serial data from a bolt device. use when you've initialized uart with serialbegin and need to retrieve serial data.
     */
    SERIAL_READ: "BOLT_IOT_SERIAL_READ",
    /**
     * Tool to send serial data to a bolt device. use when you need to transmit ascii data over uart after initializing uart with serialbegin.
     */
    SERIAL_WRITE: "BOLT_IOT_SERIAL_WRITE",
    /**
     * Tool to send serial data and read the response on a bolt device. use when you need to transmit ascii data over uart and capture its reply immediately.
     */
    SERIAL_WRITE_READ: "BOLT_IOT_SERIAL_WRITE_READ",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BOLT_IOT".
 */
export type BOLT_IOT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BOLT_IOT".
 */
export type BOLT_IOT_TRIGGER_EVENTS = {}
