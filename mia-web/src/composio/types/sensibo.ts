// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SENSIBO's SENSIBO_GET_ALL_DEVICES tool input.
 */
type SENSIBO_GET_ALL_DEVICES_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of fields to include in the response, defaults to '*'
   * @default null
   */
  fields: string | null;
};

/**
 * Type of SENSIBO's SENSIBO_GET_ALL_DEVICES tool output.
 */
type SENSIBO_GET_ALL_DEVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Error message if the call failed
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description List of pods associated with user
       */
      result: {
          /**
           * Ac State
           * @description Air conditioner state
           */
          acState: {
              /**
               * Fan Level
               * @description Fan level setting
               */
              fanLevel: string;
              /**
               * Mode
               * @description AC operating mode, e.g., 'cool', 'heat'
               */
              mode: string;
              /**
               * On
               * @description AC power status
               */
              on: boolean;
              /**
               * Swing
               * @description Swing setting
               * @default null
               */
              swing: string | null;
              /**
               * Target Temperature
               * @description Target temperature setpoint
               */
              targetTemperature: number;
          };
          /**
           * Battery
           * @description Battery information if applicable, values may include battery level or type
           * @default null
           */
          battery: {
              [key: string]: string | number | boolean;
          } | null;
          /**
           * Connection Status
           * @description Connection status and timestamp
           */
          connectionStatus: {
              /**
               * Since
               * @description ISO timestamp when status last changed
               */
              since: string;
              /**
               * Status
               * @description Connection status, e.g., 'ONLINE' or 'OFFLINE'
               */
              status: string;
          };
          /**
           * Created At
           * @description Timestamp when the pod was created
           * @default null
           */
          createdAt: string | null;
          /**
           * Features
           * @description Capabilities of the pod
           * @default null
           */
          features: {
              /**
               * Cooling
               * @description Whether cooling is supported
               */
              cooling: boolean;
              /**
               * Heating
               * @description Whether heating is supported
               */
              heating: boolean;
              /**
               * Humidity Control
               * @description Whether humidity control is supported
               */
              humidityControl: boolean;
              /**
               * Scheduling
               * @description Whether scheduling is supported
               */
              scheduling: boolean;
              /**
               * Sensors
               * @description List of available sensors
               */
              sensors: string[];
          } | null;
          /**
           * Id
           * @description Unique pod identifier
           */
          id: string;
          /**
           * Mac Address
           * @description MAC address of the pod
           */
          macAddress: string;
          /**
           * Measurements
           * @description Measured environmental data
           */
          measurements: {
              /**
               * Co2
               * @description CO2 level in ppm
               * @default null
               */
              co2: number | null;
              /**
               * Humidity
               * @description Current humidity percentage
               */
              humidity: number;
              /**
               * Temperature
               * @description Current temperature in Celsius
               */
              temperature: number;
              /**
               * Tvoc
               * @description Total volatile organic compounds level
               * @default null
               */
              tvoc: number | null;
          };
          /**
           * Model
           * @description Model of the pod device
           * @default null
           */
          model: string | null;
          /**
           * Name
           * @description Name assigned to the pod
           * @default null
           */
          name: string | null;
          /**
           * Os Version
           * @description Operating system version
           * @default null
           */
          osVersion: string | null;
          /**
           * Pod Type
           * @description Type of pod
           * @default null
           */
          podType: string | null;
          /**
           * Room
           * @description Room information
           */
          room: {
              /**
               * Id
               * @description Unique identifier of the room
               */
              id: string;
              /**
               * Name
               * @description Name of the room
               * @default null
               */
              name: string | null;
              /**
               * Uid
               * @description Unique uid of the room
               * @default null
               */
              uid: string | null;
          };
          /**
           * Timezone
           * @description Timezone of the pod location
           * @default null
           */
          timezone: string | null;
          /**
           * Updated At
           * @description Timestamp when the pod was last updated
           * @default null
           */
          updatedAt: string | null;
      }[];
      /**
       * Status
       * @description API result status, e.g., 'success'
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
 * Type map of all available tool input types for toolkit "SENSIBO".
 */
export type SENSIBO_TOOL_INPUTS = {
  GET_ALL_DEVICES: SENSIBO_GET_ALL_DEVICES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SENSIBO".
 */
export type SENSIBO_TOOL_OUTPUTS = {
  GET_ALL_DEVICES: SENSIBO_GET_ALL_DEVICES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SENSIBO toolkit.
 */
export const SENSIBO = {
  slug: "sensibo",
  tools: {
    /**
     * Tool to retrieve all sensibo pods for the authenticated user. use when you need an up-to-date list of all devices linked to your sensibo account.
     */
    GET_ALL_DEVICES: "SENSIBO_GET_ALL_DEVICES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SENSIBO".
 */
export type SENSIBO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SENSIBO".
 */
export type SENSIBO_TRIGGER_EVENTS = {}
