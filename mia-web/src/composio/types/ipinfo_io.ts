// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of IPINFO_IO's IPINFO_IO_BATCH_LITE_LOOKUP tool input.
 */
type IPINFO_IO_BATCH_LITE_LOOKUP_INPUT = {
  /**
   * Queries
   * @description List of IP addresses or URL paths (e.g., '8.8.8.8', '8.8.8.8/country')
   */
  queries?: string[];
};

/**
 * Type of IPINFO_IO's IPINFO_IO_BATCH_LITE_LOOKUP tool output.
 */
type IPINFO_IO_BATCH_LITE_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: {
          /**
           * As Domain
           * @description AS organization domain
           */
          as_domain: string;
          /**
           * As Name
           * @description AS organization name
           */
          as_name: string;
          /**
           * Asn
           * @description Autonomous System Number
           */
          asn: string;
          /**
           * Continent
           * @description Continent name
           */
          continent: string;
          /**
           * Continent Code
           * @description Two-letter continent code
           */
          continent_code: string;
          /**
           * Country
           * @description Country name
           */
          country: string;
          /**
           * Country Code
           * @description ISO 3166-1 alpha-2 country code
           */
          country_code: string;
          /**
           * Ip
           * @description IP address
           */
          ip: string;
      } | string;
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
 * Type of IPINFO_IO's IPINFO_IO_BATCH_LOOKUP tool input.
 */
type IPINFO_IO_BATCH_LOOKUP_INPUT = {
  /**
   * Filter
   * @description If True, entries with no response are omitted (query param filter=1).
   * @default false
   */
  filter: boolean;
  /**
   * Ips
   * @description List of up to 1000 IP address or URL-pattern strings to look up. Each item may be a bare IP (e.g., '1.1.1.1') or a URL pattern like 'lookup/8.8.8.8/anonymous', 'lite/8.8.4.4/country', etc.
   */
  ips?: string[];
};

/**
 * Type of IPINFO_IO's IPINFO_IO_BATCH_LOOKUP tool output.
 */
type IPINFO_IO_BATCH_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
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
 * Type of IPINFO_IO's IPINFO_IO_GET_ABUSE_CONTACT tool input.
 */
type IPINFO_IO_GET_ABUSE_CONTACT_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up
   */
  ip?: string;
};

/**
 * Type of IPINFO_IO's IPINFO_IO_GET_ABUSE_CONTACT tool output.
 */
type IPINFO_IO_GET_ABUSE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Abuse
       * @description Abuse contact information object
       */
      abuse: {
          /**
           * Address
           * @description Organizational address of the abuse contact
           * @default null
           */
          address: string | null;
          /**
           * Country
           * @description ISO 3166 country code
           * @default null
           */
          country: string | null;
          /**
           * Email
           * @description Organizational email of the abuse contact
           * @default null
           */
          email: string | null;
          /**
           * Name
           * @description Name of the abuse contact
           * @default null
           */
          name: string | null;
          /**
           * Network
           * @description Network in CIDR notation e.g. 8.8.8.0/24
           * @default null
           */
          network: string | null;
          /**
           * Phone
           * @description Organizational phone number of the abuse contact
           * @default null
           */
          phone: string | null;
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
 * Type of IPINFO_IO's IPINFO_IO_GET_CARRIER_INFO tool input.
 */
type IPINFO_IO_GET_CARRIER_INFO_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address. Use 'me' to query the caller's IP.
   */
  ip?: string;
};

/**
 * Type of IPINFO_IO's IPINFO_IO_GET_CARRIER_INFO tool output.
 */
type IPINFO_IO_GET_CARRIER_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Carrier
       * @description Carrier information object.
       */
      carrier: {
          /**
           * Mcc
           * @description Mobile Country Code of the carrier.
           */
          mcc: string;
          /**
           * Mnc
           * @description Mobile Network Code of the carrier.
           */
          mnc: string;
          /**
           * Name
           * @description Name of the mobile carrier organization.
           */
          name: string;
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
 * Type of IPINFO_IO's IPINFO_IO_GET_COMPANY_INFO tool input.
 */
type IPINFO_IO_GET_COMPANY_INFO_INPUT = {
  /**
   * Callback
   * @description JSONP callback function name to wrap the response
   * @default null
   */
  callback: string | null;
  /**
   * Ip
   * @description The IPv4 or IPv6 address to retrieve company information for
   */
  ip?: string;
  /**
   * Token
   * @description API token to use if not set via Authorization header
   * @default null
   */
  token: string | null;
};

/**
 * Type of IPINFO_IO's IPINFO_IO_GET_COMPANY_INFO tool output.
 */
type IPINFO_IO_GET_COMPANY_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain
       * @description Company domain
       */
      domain: string;
      /**
       * Name
       * @description Organization name associated with the IP
       */
      name: string;
      /**
       * Type
       * @description Company type, e.g., business, ISP, hosting
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
 * Type of IPINFO_IO's IPINFO_IO_GET_IP_INFO tool input.
 */
type IPINFO_IO_GET_IP_INFO_INPUT = {
  /**
   * Ip
   * @description IP address to look up (IPv4 or IPv6) or 'me' for the caller's IP
   */
  ip?: string;
};

/**
 * Type of IPINFO_IO's IPINFO_IO_GET_IP_INFO tool output.
 */
type IPINFO_IO_GET_IP_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asn
       * @description Autonomous System details
       */
      asn: {
          /**
           * Asn
           * @description Autonomous System Number (e.g., 'AS15169')
           */
          asn: string;
          /**
           * Domain
           * @description AS organization domain
           */
          domain: string;
          /**
           * Name
           * @description AS organization name
           */
          name: string;
          /**
           * Type
           * @description AS organization type (e.g., hosting, ISP, business)
           */
          type: string;
      };
      /**
       * Geo
       * @description City-level geolocation details
       */
      geo: {
          /**
           * City
           * @description City name
           */
          city: string;
          /**
           * Continent
           * @description Continent name
           */
          continent: string;
          /**
           * Continent Code
           * @description Two-letter continent code
           */
          continent_code: string;
          /**
           * Country
           * @description Country name
           */
          country: string;
          /**
           * Country Code
           * @description Two-letter country code (ISO 3166)
           */
          country_code: string;
          /**
           * Latitude
           * @description Latitude coordinate
           */
          latitude: number;
          /**
           * Longitude
           * @description Longitude coordinate
           */
          longitude: number;
          /**
           * Postal Code
           * @description Postal or ZIP code
           */
          postal_code: string;
          /**
           * Region
           * @description Region or state name
           */
          region: string;
          /**
           * Region Code
           * @description Two-letter region code (ISO 3166)
           */
          region_code: string;
          /**
           * Timezone
           * @description IANA time zone
           */
          timezone: string;
      };
      /**
       * Hostname
       * @description Reverse-DNS hostname, if resolvable
       * @default null
       */
      hostname: string | null;
      /**
       * Ip
       * @description The IP address that was looked up
       */
      ip: string;
      /**
       * Is Anonymous
       * @description True if this IP is linked to an anonymity service
       */
      is_anonymous: boolean;
      /**
       * Is Anycast
       * @description True if this IP is anycast
       */
      is_anycast: boolean;
      /**
       * Is Hosting
       * @description True if this IP is in a hosting or datacenter network
       */
      is_hosting: boolean;
      /**
       * Is Mobile
       * @description True if this IP is on a mobile carrier network
       */
      is_mobile: boolean;
      /**
       * Is Satellite
       * @description True if this IP is via satellite connection
       */
      is_satellite: boolean;
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
 * Type of IPINFO_IO's IPINFO_IO_GET_PRIVACY_DETAILS tool input.
 */
type IPINFO_IO_GET_PRIVACY_DETAILS_INPUT = {
  /**
   * Callback
   * @description JSONP callback name for client-side use only
   * @default null
   */
  callback: string | null;
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up
   */
  ip?: string;
};

/**
 * Type of IPINFO_IO's IPINFO_IO_GET_PRIVACY_DETAILS tool output.
 */
type IPINFO_IO_GET_PRIVACY_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Hosting
       * @description True if the IP is a hosting/cloud/data center address
       */
      hosting: boolean;
      /**
       * Proxy
       * @description True if the IP is an open web proxy
       */
      proxy: boolean;
      /**
       * Relay
       * @description True if the IP is an anonymizing or private relay
       */
      relay: boolean;
      /**
       * Service
       * @description Privacy service or provider name when known (e.g., NordVPN)
       * @default null
       */
      service: string | null;
      /**
       * Tor
       * @description True if the IP is a Tor exit node
       */
      tor: boolean;
      /**
       * Vpn
       * @description True if the IP is a VPN exit node
       */
      vpn: boolean;
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
 * Type map of all available tool input types for toolkit "IPINFO_IO".
 */
export type IPINFO_IO_TOOL_INPUTS = {
  BATCH_LITE_LOOKUP: IPINFO_IO_BATCH_LITE_LOOKUP_INPUT
  BATCH_LOOKUP: IPINFO_IO_BATCH_LOOKUP_INPUT
  GET_ABUSE_CONTACT: IPINFO_IO_GET_ABUSE_CONTACT_INPUT
  GET_CARRIER_INFO: IPINFO_IO_GET_CARRIER_INFO_INPUT
  GET_COMPANY_INFO: IPINFO_IO_GET_COMPANY_INFO_INPUT
  GET_IP_INFO: IPINFO_IO_GET_IP_INFO_INPUT
  GET_PRIVACY_DETAILS: IPINFO_IO_GET_PRIVACY_DETAILS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "IPINFO_IO".
 */
export type IPINFO_IO_TOOL_OUTPUTS = {
  BATCH_LITE_LOOKUP: IPINFO_IO_BATCH_LITE_LOOKUP_OUTPUT
  BATCH_LOOKUP: IPINFO_IO_BATCH_LOOKUP_OUTPUT
  GET_ABUSE_CONTACT: IPINFO_IO_GET_ABUSE_CONTACT_OUTPUT
  GET_CARRIER_INFO: IPINFO_IO_GET_CARRIER_INFO_OUTPUT
  GET_COMPANY_INFO: IPINFO_IO_GET_COMPANY_INFO_OUTPUT
  GET_IP_INFO: IPINFO_IO_GET_IP_INFO_OUTPUT
  GET_PRIVACY_DETAILS: IPINFO_IO_GET_PRIVACY_DETAILS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's IPINFO_IO toolkit.
 */
export const IPINFO_IO = {
  slug: "ipinfo_io",
  tools: {
    /**
     * Tool to perform bulk Lite IP lookups. Use when you need to group up to 1000 IP or URL pattern lookups into a single request.
     */
    BATCH_LITE_LOOKUP: "IPINFO_IO_BATCH_LITE_LOOKUP",
    /**
     * Tool to perform batch IP lookups. Use when grouping up to 1,000 IPs or URL patterns into a single POST request.
     */
    BATCH_LOOKUP: "IPINFO_IO_BATCH_LOOKUP",
    /**
     * Tool to retrieve abuse contact information for a specific IP address. Use when you need organizational abuse details of an IP.
     */
    GET_ABUSE_CONTACT: "IPINFO_IO_GET_ABUSE_CONTACT",
    /**
     * Tool to get carrier information for a given IP address. Use when you need mobile carrier details.
     */
    GET_CARRIER_INFO: "IPINFO_IO_GET_CARRIER_INFO",
    /**
     * Tool to retrieve company info for a specific IP. Use when you need organization details behind an IP.
     */
    GET_COMPANY_INFO: "IPINFO_IO_GET_COMPANY_INFO",
    /**
     * Tool to retrieve detailed information about an IP address. Use when you need geolocation, ASN, and network flags for a specific IP or 'me'.
     */
    GET_IP_INFO: "IPINFO_IO_GET_IP_INFO",
    /**
     * Tool to retrieve privacy-related flags (VPN, proxy, Tor, relay, hosting) for an IP address. Use when you need to detect anonymizing usage after confirming an IP.
     */
    GET_PRIVACY_DETAILS: "IPINFO_IO_GET_PRIVACY_DETAILS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "IPINFO_IO".
 */
export type IPINFO_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "IPINFO_IO".
 */
export type IPINFO_IO_TRIGGER_EVENTS = {}
