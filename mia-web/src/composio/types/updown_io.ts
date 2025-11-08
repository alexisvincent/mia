// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of UPDOWN_IO's UPDOWN_IO_LIST_NODES tool input.
 */
type UPDOWN_IO_LIST_NODES_INPUT = object;

/**
 * Type of UPDOWN_IO's UPDOWN_IO_LIST_NODES tool output.
 */
type UPDOWN_IO_LIST_NODES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Nodes
       * @description List of monitoring nodes.
       */
      nodes: {
          /**
           * Country
           * @description Country name, e.g., 'Ireland'.
           */
          country: string;
          /**
           * Country Code
           * @description ISO 2-letter country code, e.g., 'IE'.
           */
          country_code: string;
          /**
           * Enabled
           * @description Indicates if the node is operational.
           */
          enabled: boolean;
          /**
           * Id
           * @description Node identifier, e.g., 'eu-west-1'.
           */
          id: string;
          /**
           * Ip
           * @description IPv4 or IPv6 address of the node.
           */
          ip: string;
          /**
           * Name
           * @description Human-friendly location name, e.g., 'Ireland'.
           */
          name: string;
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
 * Type of UPDOWN_IO's UPDOWN_IO_LIST_NODE_IPS tool input.
 */
type UPDOWN_IO_LIST_NODE_IPS_INPUT = object;

/**
 * Type of UPDOWN_IO's UPDOWN_IO_LIST_NODE_IPS tool output.
 */
type UPDOWN_IO_LIST_NODE_IPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ips
       * @description List of public IP addresses of updown.io monitoring nodes
       */
      ips: string[];
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
 * Type of UPDOWN_IO's UPDOWN_IO_LIST_NODE_IPV4 tool input.
 */
type UPDOWN_IO_LIST_NODE_IPV4_INPUT = object;

/**
 * Type of UPDOWN_IO's UPDOWN_IO_LIST_NODE_IPV4 tool output.
 */
type UPDOWN_IO_LIST_NODE_IPV4_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: string[];
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
 * Type of UPDOWN_IO's UPDOWN_IO_LIST_NODE_IPV6 tool input.
 */
type UPDOWN_IO_LIST_NODE_IPV6_INPUT = object;

/**
 * Type of UPDOWN_IO's UPDOWN_IO_LIST_NODE_IPV6 tool output.
 */
type UPDOWN_IO_LIST_NODE_IPV6_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * City
       * @description City where the node is located
       */
      city: string;
      /**
       * Country
       * @description Country where the node is located
       */
      country: string;
      /**
       * Id
       * @description ID of the node
       */
      id: string;
      /**
       * Ip
       * @description IPv6 address of the node
       */
      ip: string;
      /**
       * Lat
       * @description Latitude of the node
       */
      lat: number;
      /**
       * Lng
       * @description Longitude of the node
       */
      lng: number;
      /**
       * Provider
       * @description Provider name
       */
      provider: string;
      /**
       * Status
       * @description Current status of the node (e.g., up)
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "UPDOWN_IO".
 */
export type UPDOWN_IO_TOOL_INPUTS = {
  LIST_NODES: UPDOWN_IO_LIST_NODES_INPUT
  LIST_NODE_IPS: UPDOWN_IO_LIST_NODE_IPS_INPUT
  LIST_NODE_IPV4: UPDOWN_IO_LIST_NODE_IPV4_INPUT
  LIST_NODE_IPV6: UPDOWN_IO_LIST_NODE_IPV6_INPUT
}

/**
 * Type map of all available tool input types for toolkit "UPDOWN_IO".
 */
export type UPDOWN_IO_TOOL_OUTPUTS = {
  LIST_NODES: UPDOWN_IO_LIST_NODES_OUTPUT
  LIST_NODE_IPS: UPDOWN_IO_LIST_NODE_IPS_OUTPUT
  LIST_NODE_IPV4: UPDOWN_IO_LIST_NODE_IPV4_OUTPUT
  LIST_NODE_IPV6: UPDOWN_IO_LIST_NODE_IPV6_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's UPDOWN_IO toolkit.
 */
export const UPDOWN_IO = {
  slug: "updown_io",
  tools: {
    /**
     * Tool to retrieve a list of all updown.io monitoring servers. use when you need to discover available monitoring nodes.
     */
    LIST_NODES: "UPDOWN_IO_LIST_NODES",
    /**
     * Tool to retrieve a list of all updown.io server ip addresses. use when configuring firewalls or ip allowlists to permit updown.io monitoring.
     */
    LIST_NODE_IPS: "UPDOWN_IO_LIST_NODE_IPS",
    /**
     * Tool to list all updown.io server ipv4 addresses. use when you need to retrieve the current set of updown.io node ipv4 addresses.
     */
    LIST_NODE_IPV4: "UPDOWN_IO_LIST_NODE_IPV4",
    /**
     * Tool to retrieve a list of all updown.io server ipv6 addresses. use when you need to enumerate available ipv6 monitoring nodes.
     */
    LIST_NODE_IPV6: "UPDOWN_IO_LIST_NODE_IPV6",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "UPDOWN_IO".
 */
export type UPDOWN_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "UPDOWN_IO".
 */
export type UPDOWN_IO_TRIGGER_EVENTS = {}
