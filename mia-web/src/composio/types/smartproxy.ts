// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SMARTPROXY's SMARTPROXY_GET_API_KEY tool input.
 */
type SMARTPROXY_GET_API_KEY_INPUT = object;

/**
 * Type of SMARTPROXY's SMARTPROXY_GET_API_KEY tool output.
 */
type SMARTPROXY_GET_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Instructions
       * @description Step-by-step instructions to obtain your Smartproxy API key.
       */
      instructions: string;
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
 * Type of SMARTPROXY's SMARTPROXY_LIST_ENDPOINTS_AND_PORTS tool input.
 */
type SMARTPROXY_LIST_ENDPOINTS_AND_PORTS_INPUT = object;

/**
 * Type of SMARTPROXY's SMARTPROXY_LIST_ENDPOINTS_AND_PORTS tool output.
 */
type SMARTPROXY_LIST_ENDPOINTS_AND_PORTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Endpoints
       * @description List of proxy endpoints and their configuration details.
       */
      endpoints: {
          /**
           * City
           * @description City name for this endpoint, if available.
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Two-letter country code where the endpoint is located, if available.
           * @default null
           */
          country: string | null;
          /**
           * Hostname
           * @description The hostname of the proxy endpoint.
           */
          hostname: string;
          /**
           * Port
           * @description The port number for this endpoint.
           */
          port: number;
          /**
           * State
           * @description Region/state code for this endpoint, if available.
           * @default null
           */
          state: string | null;
          /**
           * Type
           * @description Type of endpoint (e.g., 'http', 'socks5').
           */
          type: string;
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
 * Type map of all available tool input types for toolkit "SMARTPROXY".
 */
export type SMARTPROXY_TOOL_INPUTS = {
  GET_API_KEY: SMARTPROXY_GET_API_KEY_INPUT
  LIST_ENDPOINTS_AND_PORTS: SMARTPROXY_LIST_ENDPOINTS_AND_PORTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SMARTPROXY".
 */
export type SMARTPROXY_TOOL_OUTPUTS = {
  GET_API_KEY: SMARTPROXY_GET_API_KEY_OUTPUT
  LIST_ENDPOINTS_AND_PORTS: SMARTPROXY_LIST_ENDPOINTS_AND_PORTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SMARTPROXY toolkit.
 */
export const SMARTPROXY = {
  slug: "smartproxy",
  tools: {
    /**
     * Tool to instruct how to obtain smartproxy api key. use when you need to authenticate api requests but don't have your key (manual dashboard process).
     */
    GET_API_KEY: "SMARTPROXY_GET_API_KEY",
    /**
     * Tool to retrieve all available proxy endpoints and corresponding ports. use when you need to fetch the full inventory of smartproxy endpoints.
     */
    LIST_ENDPOINTS_AND_PORTS: "SMARTPROXY_LIST_ENDPOINTS_AND_PORTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SMARTPROXY".
 */
export type SMARTPROXY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SMARTPROXY".
 */
export type SMARTPROXY_TRIGGER_EVENTS = {}
