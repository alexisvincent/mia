// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of IP2PROXY's IP2PROXY_CHECK_PROXY tool input.
 */
type IP2PROXY_CHECK_PROXY_INPUT = {
  /**
   * Format
   * @description Response format; defaults to json. Valid values: json or xml.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, the server IP is used.
   * @default null
   */
  ip: string | null;
  /**
   * Package
   * @description Data package level; defaults to PX1. Valid values: PX1–PX11.
   * @default PX1
   * @enum {string}
   */
  package: "PX1" | "PX2" | "PX3" | "PX4" | "PX5" | "PX6" | "PX7" | "PX8" | "PX9" | "PX10" | "PX11";
};

/**
 * Type of IP2PROXY's IP2PROXY_CHECK_PROXY tool output.
 */
type IP2PROXY_CHECK_PROXY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asn
       * @description Autonomous system number
       * @default null
       */
      asn: string | null;
      /**
       * City Name
       * @description City name
       * @default null
       */
      cityName: string | null;
      /**
       * Country Code
       * @description ISO 3166-1 alpha-2 country code
       * @default null
       */
      countryCode: string | null;
      /**
       * Country Name
       * @description Country name
       * @default null
       */
      countryName: string | null;
      /**
       * Credits Consumed
       * @description Credits used for the current query
       * @default null
       */
      creditsConsumed: number | null;
      /**
       * Domain
       * @description Domain associated with the IP range
       * @default null
       */
      domain: string | null;
      /**
       * Is Proxy
       * @description YES if IP is a proxy, NO otherwise
       */
      isProxy: string;
      /**
       * Isp
       * @description ISP or company name
       * @default null
       */
      isp: string | null;
      /**
       * Last Seen
       * @description Days since the proxy was last seen
       * @default null
       */
      lastSeen: number | null;
      /**
       * Provider
       * @description VPN/proxy provider name
       * @default null
       */
      provider: string | null;
      /**
       * Proxy Type
       * @description Proxy type (e.g., VPN, TOR, DCH, PUB, WEB, SES, RES)
       * @default null
       */
      proxyType: string | null;
      /**
       * Region Name
       * @description Region/state name
       * @default null
       */
      regionName: string | null;
      /**
       * Response
       * @description API status, e.g., 'OK'
       */
      response: string;
      /**
       * Threat
       * @description Reported security threat (e.g., SPAM, SCANNER, BOTNET)
       * @default null
       */
      threat: string | null;
      /**
       * Usage Type
       * @description ISP/company usage type (e.g., COM, ORG, GOV, MIL, EDU, LIB, CDN, ISP, MOB, DCH, SES, RSV)
       * @default null
       */
      usageType: string | null;
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
 * Type map of all available tool input types for toolkit "IP2PROXY".
 */
export type IP2PROXY_TOOL_INPUTS = {
  CHECK_PROXY: IP2PROXY_CHECK_PROXY_INPUT
}

/**
 * Type map of all available tool input types for toolkit "IP2PROXY".
 */
export type IP2PROXY_TOOL_OUTPUTS = {
  CHECK_PROXY: IP2PROXY_CHECK_PROXY_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's IP2PROXY toolkit.
 */
export const IP2PROXY = {
  slug: "ip2proxy",
  tools: {
    /**
     * Tool to check if an IP address is a proxy. Use after obtaining an IP to detect proxy, VPN, or Tor status.
     */
    CHECK_PROXY: "IP2PROXY_CHECK_PROXY",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "IP2PROXY".
 */
export type IP2PROXY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "IP2PROXY".
 */
export type IP2PROXY_TRIGGER_EVENTS = {}
