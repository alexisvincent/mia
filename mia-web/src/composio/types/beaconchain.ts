// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BEACONCHAIN's BEACONCHAIN_GET_NODE_HEALTH tool input.
 */
type BEACONCHAIN_GET_NODE_HEALTH_INPUT = {
  /**
   * Syncing Status
   * @description Customize syncing status code instead of default 206. Must be between 100 and 599 inclusive.
   * @default null
   */
  syncing_status: number | null;
};

/**
 * Type of BEACONCHAIN's BEACONCHAIN_GET_NODE_HEALTH tool output.
 */
type BEACONCHAIN_GET_NODE_HEALTH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description Raw response body text, may be empty
       */
      body: string;
      /**
       * Status Code
       * @description HTTP status code: 200=ready, 206=syncing, 400=invalid status code, 503=error state
       */
      status_code: number;
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
 * Type of BEACONCHAIN's BEACONCHAIN_GET_VALIDATOR tool input.
 */
type BEACONCHAIN_GET_VALIDATOR_INPUT = {
  /**
   * Validator Id
   * @description Validator identifier: index, public key, or eth1 address.
   */
  validator_id?: string;
};

/**
 * Type of BEACONCHAIN's BEACONCHAIN_GET_VALIDATOR tool output.
 */
type BEACONCHAIN_GET_VALIDATOR_OUTPUT = {
  /**
   * Data
   * @description Wrapper containing status and validator details.
   */
  data?: {
      /**
       * Data
       * @description Validator details.
       */
      data: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description API result status, e.g., OK or ERROR.
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
  /**
   * Successfull
   * @description Indicates if the API call was successful.
   */
  successfull?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "BEACONCHAIN".
 */
export type BEACONCHAIN_TOOL_INPUTS = {
  GET_NODE_HEALTH: BEACONCHAIN_GET_NODE_HEALTH_INPUT
  GET_VALIDATOR: BEACONCHAIN_GET_VALIDATOR_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BEACONCHAIN".
 */
export type BEACONCHAIN_TOOL_OUTPUTS = {
  GET_NODE_HEALTH: BEACONCHAIN_GET_NODE_HEALTH_OUTPUT
  GET_VALIDATOR: BEACONCHAIN_GET_VALIDATOR_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BEACONCHAIN toolkit.
 */
export const BEACONCHAIN = {
  slug: "beaconchain",
  tools: {
    /**
     * Tool to get the health status of the node. use when you need to check if the node is ready, syncing, or in an error state.
     */
    GET_NODE_HEALTH: "BEACONCHAIN_GET_NODE_HEALTH",
    /**
     * Tool to retrieve information for a specific validator from beaconcha.in api.
     */
    GET_VALIDATOR: "BEACONCHAIN_GET_VALIDATOR",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BEACONCHAIN".
 */
export type BEACONCHAIN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BEACONCHAIN".
 */
export type BEACONCHAIN_TRIGGER_EVENTS = {}
