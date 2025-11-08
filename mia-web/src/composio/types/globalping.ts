// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GLOBALPING's GLOBALPING_CREATE_MEASUREMENT tool input.
 */
type GLOBALPING_CREATE_MEASUREMENT_INPUT = {
  /**
   * In Progress Updates
   * @description Stream partial results if true
   * @default false
   */
  inProgressUpdates: boolean | null;
  /**
   * Limit
   * @description Global max probes; mutually exclusive with per-location limit
   * @default null
   */
  limit: number | null;
  /**
   * Locations
   * @description Measurement locations (fuzzy string or list of filters)
   * @default null
   */
  locations: string | null;
  /**
   * PingOptions
   * @description Options specific to the chosen measurement type
   * @default null
   */
  measurementOptions: {
      /**
       * Ip Version
       * @description IP version (4 or 6); hostname targets only
       * @default null
       * @enum {integer|null}
       */
      ipVersion: 4 | 6 | null;
      /**
       * Packets
       * @description Number of ICMP packets to send
       * @default null
       */
      packets: number | null;
      /**
       * Port
       * @description Destination port for TCP ping
       * @default null
       */
      port: number | null;
      /**
       * Protocol
       * @description Protocol for ping probes
       * @default null
       * @enum {string|null}
       */
      protocol: "ICMP" | "TCP" | null;
  } | null;
  /**
   * Target
   * @description Publicly reachable target hostname or IP
   */
  target?: string;
  /**
   * Type
   * @description Measurement type to run
   * @enum {string}
   */
  type?: "ping" | "traceroute" | "dns" | "mtr" | "http";
};

/**
 * Type of GLOBALPING's GLOBALPING_CREATE_MEASUREMENT tool output.
 */
type GLOBALPING_CREATE_MEASUREMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the created measurement
       */
      id: string;
      /**
       * Probes Count
       * @description Number of probes assigned to measurement
       */
      probesCount: number;
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
 * Type of GLOBALPING's GLOBALPING_GET_MEASUREMENT tool input.
 */
type GLOBALPING_GET_MEASUREMENT_INPUT = {
  /**
   * Id
   * @description Measurement identifier to retrieve results for
   */
  id?: string;
};

/**
 * Type of GLOBALPING's GLOBALPING_GET_MEASUREMENT tool output.
 */
type GLOBALPING_GET_MEASUREMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Per-probe measurement results
       */
      results: {
          /**
           * Probe
           * @description Probe metadata
           */
          probe: {
              /**
               * Location
               * @description Location details of the probe
               */
              location: {
                  /**
                   * City
                   * @description Probe city
                   * @default null
                   */
                  city: string | null;
                  /**
                   * Country
                   * @description Probe country code
                   */
                  country: string;
              };
              /**
               * Network
               * @description Network of the probe
               * @default null
               */
              network: string | null;
              /**
               * Resolvers
               * @description Resolvers used by the probe
               * @default null
               */
              resolvers: string[] | null;
              /**
               * Tags
               * @description Tags associated with the probe
               * @default null
               */
              tags: string[] | null;
          };
          /**
           * PingResult
           * @description Command-specific measurement result
           */
          result: {
              /**
               * Raw Output
               * @description Raw ping output
               */
              rawOutput: string;
              /**
               * Stats
               * @description Summary statistics for ping results
               */
              stats: {
                  /**
                   * Avg
                   * @description Average round-trip time in ms
                   */
                  avg: number;
                  /**
                   * Max
                   * @description Maximum round-trip time in ms
                   */
                  max: number;
                  /**
                   * Min
                   * @description Minimum round-trip time in ms
                   */
                  min: number;
                  /**
                   * Packet Loss
                   * @description Packet loss percentage
                   */
                  packetLoss: number;
              };
              /**
               * Timings
               * @description Round-trip times for each packet
               */
              timings: number[];
          } | null;
      }[];
      /**
       * Status
       * @description Measurement state (e.g., in-progress or final)
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
 * Type of GLOBALPING's GLOBALPING_HEALTH_CHECK tool input.
 */
type GLOBALPING_HEALTH_CHECK_INPUT = object;

/**
 * Type of GLOBALPING's GLOBALPING_HEALTH_CHECK tool output.
 */
type GLOBALPING_HEALTH_CHECK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Overall health status of the API, e.g., 'ok'
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
 * Type of GLOBALPING's GLOBALPING_LIST_PROBES tool input.
 */
type GLOBALPING_LIST_PROBES_INPUT = {
  /**
   * Max Results
   * @description Limit the number of probes returned in the response (client-side trimming)
   * @default null
   */
  max_results: number | null;
};

/**
 * Type of GLOBALPING's GLOBALPING_LIST_PROBES tool output.
 */
type GLOBALPING_LIST_PROBES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Probes
       * @description List of currently connected probe objects with metadata
       */
      probes: {
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
 * Type map of all available tool input types for toolkit "GLOBALPING".
 */
export type GLOBALPING_TOOL_INPUTS = {
  CREATE_MEASUREMENT: GLOBALPING_CREATE_MEASUREMENT_INPUT
  GET_MEASUREMENT: GLOBALPING_GET_MEASUREMENT_INPUT
  HEALTH_CHECK: GLOBALPING_HEALTH_CHECK_INPUT
  LIST_PROBES: GLOBALPING_LIST_PROBES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GLOBALPING".
 */
export type GLOBALPING_TOOL_OUTPUTS = {
  CREATE_MEASUREMENT: GLOBALPING_CREATE_MEASUREMENT_OUTPUT
  GET_MEASUREMENT: GLOBALPING_GET_MEASUREMENT_OUTPUT
  HEALTH_CHECK: GLOBALPING_HEALTH_CHECK_OUTPUT
  LIST_PROBES: GLOBALPING_LIST_PROBES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GLOBALPING toolkit.
 */
export const GLOBALPING = {
  slug: "globalping",
  tools: {
    /**
     * Tool to create and trigger a network measurement. Use when you need connectivity checks from specific geographic or network locations.
     */
    CREATE_MEASUREMENT: "GLOBALPING_CREATE_MEASUREMENT",
    /**
     * Tool to get measurement results by ID. Use when you need to retrieve the status and detailed per-probe results of an existing measurement.
     */
    GET_MEASUREMENT: "GLOBALPING_GET_MEASUREMENT",
    /**
     * Tool to check API health status. Use when verifying API availability.
     */
    HEALTH_CHECK: "GLOBALPING_HEALTH_CHECK",
    /**
     * Tool to list all currently connected probes. Use after authenticating with the API to retrieve online probe metadata.
     */
    LIST_PROBES: "GLOBALPING_LIST_PROBES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GLOBALPING".
 */
export type GLOBALPING_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GLOBALPING".
 */
export type GLOBALPING_TRIGGER_EVENTS = {}
