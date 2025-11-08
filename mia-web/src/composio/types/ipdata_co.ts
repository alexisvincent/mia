// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of IPDATA_CO's IPDATA_CO_ADVANCED_ASN_LOOKUP tool input.
 */
type IPDATA_CO_ADVANCED_ASN_LOOKUP_INPUT = {
  /**
   * Asn
   * @description Autonomous System Number to look up (positive integer, e.g., 2).
   */
  asn?: number;
  /**
   * Fields
   * @description Comma-separated list of specific fields to return (e.g., 'name,ipv4_prefixes').
   * @default null
   */
  fields: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_ADVANCED_ASN_LOOKUP tool output.
 */
type IPDATA_CO_ADVANCED_ASN_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Two-letter country code of the ASN assignment.
       */
      country: string;
      /**
       * Date
       * @description Date of ASN assignment in YYYY-MM-DD format.
       */
      date: string;
      /**
       * Domain
       * @description Organization's website domain, if available.
       * @default null
       */
      domain: string | null;
      /**
       * Downstream
       * @description List of downstream provider ASNs.
       */
      downstream: number[];
      /**
       * Ipv4 Prefixes
       * @description List of IPv4 network prefixes announced by the ASN.
       */
      ipv4_prefixes: string[];
      /**
       * Ipv6 Prefixes
       * @description List of IPv6 network prefixes announced by the ASN.
       */
      ipv6_prefixes: string[];
      /**
       * Name
       * @description Organization name associated with the ASN.
       * @default null
       */
      name: string | null;
      /**
       * Num Ips
       * @description Total count of IP addresses announced by this ASN, as a string.
       */
      num_ips: string;
      /**
       * Peers
       * @description List of peer ASNs.
       */
      peers: number[];
      /**
       * Registry
       * @description Regional internet registry (e.g., 'ARIN').
       */
      registry: string;
      /**
       * Status
       * @description ASN registration status (e.g., 'active').
       */
      status: string;
      /**
       * Upstream
       * @description List of upstream provider ASNs.
       */
      upstream: number[];
      /**
       * Usage
       * @description Usage type for the ASN (e.g., 'Transit').
       * @default null
       */
      usage: string | null;
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
 * Type of IPDATA_CO's IPDATA_CO_CARRIER_FOR_IP tool input.
 */
type IPDATA_CO_CARRIER_FOR_IP_INPUT = {
  /**
   * Ip
   * @description The IPv4 or IPv6 address for which to retrieve mobile carrier details.
   */
  ip?: string;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_CARRIER_FOR_IP tool output.
 */
type IPDATA_CO_CARRIER_FOR_IP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Mcc
       * @description Mobile Country Code
       */
      mcc: string;
      /**
       * Mnc
       * @description Mobile Network Code identifying the carrier
       */
      mnc: string;
      /**
       * Name
       * @description Carrier’s brand name that owns the IP address
       */
      name: string;
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
 * Type of IPDATA_CO's IPDATA_CO_EU_LOOKUP_SPECIFIC_IP tool input.
 */
type IPDATA_CO_EU_LOOKUP_SPECIFIC_IP_INPUT = {
  /**
   * Callback
   * @description Function name for JSONP callback wrapping; supported by standard endpoint. EU endpoint supports same functionality.
   * @default null
   */
  callback: string | null;
  /**
   * Fields
   * @description Comma-separated list of response fields to include, e.g., 'ip,city,country_name'. See docs for available fields.
   * @default null
   */
  fields: string | null;
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up
   */
  ip?: string;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_EU_LOOKUP_SPECIFIC_IP tool output.
 */
type IPDATA_CO_EU_LOOKUP_SPECIFIC_IP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asn
       * @description Autonomous System data
       * @default null
       */
      asn: {
          /**
           * Asn
           * @description Autonomous System Number
           */
          asn: string;
          /**
           * Domain
           * @description Organization domain
           */
          domain: string;
          /**
           * Name
           * @description ASN owner name
           */
          name: string;
          /**
           * Route
           * @description Network prefix for the IP
           */
          route: string;
          /**
           * Type
           * @description Usage type of the ASN, e.g., hosting, isp, cdn
           */
          type: string;
      } | null;
      /**
       * Calling Code
       * @description International calling code
       * @default null
       */
      calling_code: string | null;
      /**
       * Carrier
       * @description Mobile carrier information
       * @default null
       */
      carrier: {
          /**
           * Mcc
           * @description Mobile Country Code
           */
          mcc: string;
          /**
           * Mnc
           * @description Mobile Network Code
           */
          mnc: string;
          /**
           * Name
           * @description Carrier name
           */
          name: string;
      } | null;
      /**
       * City
       * @description City name
       * @default null
       */
      city: string | null;
      /**
       * Company
       * @description Registered company information
       * @default null
       */
      company: {
          /**
           * Domain
           * @description Organization domain
           */
          domain: string;
          /**
           * Name
           * @description End-user organization name
           */
          name: string;
          /**
           * Network
           * @description Assigned network prefix
           */
          network: string;
          /**
           * Type
           * @description Organization type
           */
          type: string;
      } | null;
      /**
       * Continent Code
       * @description Continent code
       * @default null
       */
      continent_code: string | null;
      /**
       * Continent Name
       * @description Continent name
       * @default null
       */
      continent_name: string | null;
      /**
       * Count
       * @description Total requests by API key in last 24h
       */
      count: string;
      /**
       * Country Code
       * @description ISO country code
       * @default null
       */
      country_code: string | null;
      /**
       * Country Name
       * @description Country name
       * @default null
       */
      country_name: string | null;
      /**
       * Currency
       * @description Currency information
       * @default null
       */
      currency: {
          /**
           * Code
           * @description ISO 4217 currency code
           */
          code: string;
          /**
           * Name
           * @description Currency name
           */
          name: string;
          /**
           * Native
           * @description Native currency symbol
           */
          native: string;
          /**
           * Plural
           * @description Plural form of the currency name
           */
          plural: string;
          /**
           * Symbol
           * @description Currency symbol
           */
          symbol: string;
      } | null;
      /**
       * Emoji Flag
       * @description Emoji flag
       * @default null
       */
      emoji_flag: string | null;
      /**
       * Emoji Unicode
       * @description Unicode for emoji flag
       * @default null
       */
      emoji_unicode: string | null;
      /**
       * Flag
       * @description URL to country flag image
       * @default null
       */
      flag: string | null;
      /**
       * Ip
       * @description The IP address looked up
       */
      ip: string;
      /**
       * Is Eu
       * @description Whether the country is an EU member
       */
      is_eu: boolean;
      /**
       * Languages
       * @description List of languages spoken
       * @default null
       */
      languages: {
          /**
           * Name
           * @description Language name
           */
          name: string;
          /**
           * Native
           * @description Native language name
           */
          native: string;
      }[] | null;
      /**
       * Latitude
       * @description Latitude coordinate
       * @default null
       */
      latitude: number | null;
      /**
       * Longitude
       * @description Longitude coordinate
       * @default null
       */
      longitude: number | null;
      /**
       * Postal
       * @description Postal code
       * @default null
       */
      postal: string | null;
      /**
       * Region
       * @description Region name
       * @default null
       */
      region: string | null;
      /**
       * Region Code
       * @description Region ISO code
       * @default null
       */
      region_code: string | null;
      /**
       * Region Type
       * @description Administrative region type
       * @default null
       */
      region_type: string | null;
      /**
       * Threat
       * @description Threat intelligence data
       * @default null
       */
      threat: {
          /**
           * Blocklists
           * @description List of blocklist entries
           */
          blocklists: {
              /**
               * Name
               * @description Blocklist name
               */
              name: string;
              /**
               * Site
               * @description Blocklist site URL
               */
              site: string;
              /**
               * Type
               * @description Blocklist type
               */
              type: string;
          }[];
          /**
           * Is Anonymous
           * @description True if is_tor or is_proxy
           */
          is_anonymous: boolean;
          /**
           * Is Bogon
           * @description True if a bogon IP
           */
          is_bogon: boolean;
          /**
           * Is Datacenter
           * @description True if belongs to a datacenter
           */
          is_datacenter: boolean;
          /**
           * Is Icloud Relay
           * @description True if Apple iCloud relay IP
           */
          is_icloud_relay: boolean;
          /**
           * Is Known Abuser
           * @description Known source of abuse
           */
          is_known_abuser: boolean;
          /**
           * Is Known Attacker
           * @description Known source of malicious activity
           */
          is_known_attacker: boolean;
          /**
           * Is Proxy
           * @description True if a known proxy
           */
          is_proxy: boolean;
          /**
           * Is Threat
           * @description True if known attacker or abuser
           */
          is_threat: boolean;
          /**
           * Is Tor
           * @description True if associated with Tor
           */
          is_tor: boolean;
          /**
           * Is Vpn
           * @description True if a known VPN exit node
           */
          is_vpn: boolean;
          /**
           * Scores
           * @description Reputation scores map
           */
          scores: {
              [key: string]: number;
          };
      } | null;
      /**
       * TimeZone
       * @description Timezone information
       * @default null
       */
      time_zone: {
          /**
           * Abbr
           * @description Timezone abbreviation
           */
          abbr: string;
          /**
           * Current Time
           * @description Current time in ISO-8601 format
           */
          current_time: string;
          /**
           * Is Dst
           * @description Is daylight savings time in effect
           */
          is_dst: boolean;
          /**
           * Name
           * @description Timezone name
           */
          name: string;
          /**
           * Offset
           * @description UTC offset
           */
          offset: string;
      } | null;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_CALLING_CODE tool input.
 */
type IPDATA_CO_FIELD_CALLING_CODE_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to lookup. If omitted, the caller's IP address is used.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_CALLING_CODE tool output.
 */
type IPDATA_CO_FIELD_CALLING_CODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calling Code
       * @description International calling code for the IP's country as a string.
       */
      calling_code: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_CARRIER tool input.
 */
type IPDATA_CO_FIELD_CARRIER_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to query. If omitted, defaults to the caller's IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_CARRIER tool output.
 */
type IPDATA_CO_FIELD_CARRIER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Mcc
       * @description Mobile Country Code
       */
      mcc: string;
      /**
       * Mnc
       * @description Mobile Network Code
       */
      mnc: string;
      /**
       * Name
       * @description Carrier brand name (e.g., Verizon, T-Mobile)
       */
      name: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_CITY tool input.
 */
type IPDATA_CO_FIELD_CITY_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, uses the calling IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_CITY tool output.
 */
type IPDATA_CO_FIELD_CITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * City
       * @description Name of the city associated with the IP.
       */
      city: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_CONTINENT_CODE tool input.
 */
type IPDATA_CO_FIELD_CONTINENT_CODE_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, uses the calling IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_CONTINENT_CODE tool output.
 */
type IPDATA_CO_FIELD_CONTINENT_CODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Continent Code
       * @description Two-letter continent code (ISO 3166-1 alpha-2).
       */
      continent_code: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_CONTINENT_NAME tool input.
 */
type IPDATA_CO_FIELD_CONTINENT_NAME_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, uses the calling IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_CONTINENT_NAME tool output.
 */
type IPDATA_CO_FIELD_CONTINENT_NAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Continent Name
       * @description Name of the continent associated with the IP.
       */
      continent_name: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_COUNT tool input.
 */
type IPDATA_CO_FIELD_COUNT_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to query. If omitted, returns count for the API key.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_COUNT tool output.
 */
type IPDATA_CO_FIELD_COUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of requests made by your API key in the last 24 hours.
       */
      count: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_COUNTRY_CODE tool input.
 */
type IPDATA_CO_FIELD_COUNTRY_CODE_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, uses the calling IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_COUNTRY_CODE tool output.
 */
type IPDATA_CO_FIELD_COUNTRY_CODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country Code
       * @description 2-letter ISO 3166-1 alpha-2 country code.
       */
      country_code: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_COUNTRY_NAME tool input.
 */
type IPDATA_CO_FIELD_COUNTRY_NAME_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, uses the calling IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_COUNTRY_NAME tool output.
 */
type IPDATA_CO_FIELD_COUNTRY_NAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country Name
       * @description Name of the country associated with the IP.
       */
      country_name: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_CURRENCY tool input.
 */
type IPDATA_CO_FIELD_CURRENCY_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to query. If omitted, uses the caller's IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_CURRENCY tool output.
 */
type IPDATA_CO_FIELD_CURRENCY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description The ISO 4217 currency code.
       */
      code: string;
      /**
       * Name
       * @description The singular name of the currency.
       */
      name: string;
      /**
       * Native
       * @description The native symbol of the currency.
       */
      native: string;
      /**
       * Plural
       * @description The plural form of the currency name.
       */
      plural: string;
      /**
       * Symbol
       * @description The symbol of the currency.
       */
      symbol: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_EMOJI_FLAG tool input.
 */
type IPDATA_CO_FIELD_EMOJI_FLAG_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, uses the calling IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_EMOJI_FLAG tool output.
 */
type IPDATA_CO_FIELD_EMOJI_FLAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Emoji Flag
       * @description Emoji representation of the country flag for the IP.
       */
      emoji_flag: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_EMOJI_UNICODE tool input.
 */
type IPDATA_CO_FIELD_EMOJI_UNICODE_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, uses the calling IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_EMOJI_UNICODE tool output.
 */
type IPDATA_CO_FIELD_EMOJI_UNICODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Emoji Unicode
       * @description Unicode sequence for the country flag emoji (e.g., 'U+1F1FA U+1F1F8').
       */
      emoji_unicode: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_IP tool input.
 */
type IPDATA_CO_FIELD_IP_INPUT = object;

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_IP tool output.
 */
type IPDATA_CO_FIELD_IP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ip
       * @description The IP address of the calling client.
       */
      ip: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_IS_EU tool input.
 */
type IPDATA_CO_FIELD_IS_EU_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, uses the calling IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_IS_EU tool output.
 */
type IPDATA_CO_FIELD_IS_EU_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Is Eu
       * @description True if the IP's country is a recognized EU member, otherwise False.
       */
      is_eu: boolean;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_LANGUAGES tool input.
 */
type IPDATA_CO_FIELD_LANGUAGES_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, uses the calling IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_LANGUAGES tool output.
 */
type IPDATA_CO_FIELD_LANGUAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Languages
       * @description Array of languages for the IP.
       */
      languages: {
          /**
           * Code
           * @description Language code (ISO 639-1).
           */
          code: string;
          /**
           * Name
           * @description Language name.
           */
          name: string;
          /**
           * Native
           * @description Native name of the language.
           */
          native: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_LATITUDE tool input.
 */
type IPDATA_CO_FIELD_LATITUDE_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, uses the caller's IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_LATITUDE tool output.
 */
type IPDATA_CO_FIELD_LATITUDE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Latitude
       * @description Latitude coordinate of the specified or calling IP.
       */
      latitude: number;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_LONGITUDE tool input.
 */
type IPDATA_CO_FIELD_LONGITUDE_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, uses the calling IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_LONGITUDE tool output.
 */
type IPDATA_CO_FIELD_LONGITUDE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Longitude
       * @description Approximate longitudinal location of the IP address.
       */
      longitude: number;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_POSTAL tool input.
 */
type IPDATA_CO_FIELD_POSTAL_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, uses the calling IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_POSTAL tool output.
 */
type IPDATA_CO_FIELD_POSTAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Postal
       * @description Postal (ZIP/postcode) code associated with the IP address.
       */
      postal: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_REGION tool input.
 */
type IPDATA_CO_FIELD_REGION_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up; if omitted, uses the calling IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_REGION tool output.
 */
type IPDATA_CO_FIELD_REGION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Region
       * @description Name of the region (state/province) associated with the IP.
       */
      region: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_REGION_CODE tool input.
 */
type IPDATA_CO_FIELD_REGION_CODE_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, uses the calling IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_REGION_CODE tool output.
 */
type IPDATA_CO_FIELD_REGION_CODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Region Code
       * @description ISO 3166-2 region code.
       */
      region_code: string;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_THREAT tool input.
 */
type IPDATA_CO_FIELD_THREAT_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, uses the calling IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_THREAT tool output.
 */
type IPDATA_CO_FIELD_THREAT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Blocklists
       * @description Lists where the IP appears
       */
      blocklists: {
          /**
           * Name
           * @description Name of the blocklist where the IP appears
           */
          name: string;
          /**
           * Site
           * @description URL of the blocklist
           */
          site: string;
          /**
           * Type
           * @description Type of the blocklist
           */
          type: string;
      }[];
      /**
       * Is Anonymous
       * @description True if either is_tor or is_proxy is true
       */
      is_anonymous: boolean;
      /**
       * Is Bogon
       * @description True if the IP is a bogon
       */
      is_bogon: boolean;
      /**
       * Is Datacenter
       * @description True if the IP belongs to a datacenter/cloud provider
       */
      is_datacenter: boolean;
      /**
       * Is Icloud Relay
       * @description True if the IP belongs to Apple iCloud Private Relay
       */
      is_icloud_relay: boolean;
      /**
       * Is Known Abuser
       * @description True if the IP is a known source of abuse (spam, bots, etc.)
       */
      is_known_abuser: boolean;
      /**
       * Is Known Attacker
       * @description True if the IP is a known source of malicious activity
       */
      is_known_attacker: boolean;
      /**
       * Is Proxy
       * @description True for known proxies (HTTP/HTTPS/SSL/SOCKS/CONNECT, transparent)
       */
      is_proxy: boolean;
      /**
       * Is Threat
       * @description True if either is_known_abuser or is_known_attacker is true
       */
      is_threat: boolean;
      /**
       * Is Tor
       * @description True if the IP is a Tor node
       */
      is_tor: boolean;
      /**
       * Is Vpn
       * @description True if the IP is a commercial VPN exit-node; Business/Enterprise only
       */
      is_vpn: boolean;
      /**
       * ThreatScores
       * @description Map of reputation scores; may be omitted if no data
       * @default null
       */
      scores: {
          /**
           * Proxy Score
           * @description Proxy reputation score (0–100)
           */
          proxy_score: number;
          /**
           * Threat Score
           * @description Threat reputation score (0–100)
           */
          threat_score: number;
          /**
           * Trust Score
           * @description Trust reputation score (0–100)
           */
          trust_score: number;
          /**
           * Vpn Score
           * @description VPN reputation score (0–100)
           */
          vpn_score: number;
      } | null;
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
 * Type of IPDATA_CO's IPDATA_CO_FIELD_TIME_ZONE tool input.
 */
type IPDATA_CO_FIELD_TIME_ZONE_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up. If omitted, uses the calling IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_FIELD_TIME_ZONE tool output.
 */
type IPDATA_CO_FIELD_TIME_ZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Abbr
       * @description The timezone abbreviation.
       */
      abbr: string;
      /**
       * Current Time
       * @description Current time in that timezone (ISO 8601 format).
       */
      current_time: string;
      /**
       * Is Dst
       * @description Whether Daylight Saving Time is in effect.
       */
      is_dst: boolean;
      /**
       * Name
       * @description The name of the timezone.
       */
      name: string;
      /**
       * Offset
       * @description The UTC offset of the timezone.
       */
      offset: string;
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
 * Type of IPDATA_CO's IPDATA_CO_GET_CURRENCY_FOR_IP tool input.
 */
type IPDATA_CO_GET_CURRENCY_FOR_IP_INPUT = {
  /**
   * Ip
   * @description IPv4 address to look up currency information for
   */
  ip?: string;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_GET_CURRENCY_FOR_IP tool output.
 */
type IPDATA_CO_GET_CURRENCY_FOR_IP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description The ISO 4217 currency code.
       */
      code: string;
      /**
       * Name
       * @description The singular name of the currency.
       */
      name: string;
      /**
       * Native
       * @description The native symbol of the currency.
       */
      native: string;
      /**
       * Plural
       * @description The plural form of the currency name.
       */
      plural: string;
      /**
       * Symbol
       * @description The currency symbol.
       */
      symbol: string;
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
 * Type of IPDATA_CO's IPDATA_CO_IPDATA_BULK_LOOKUP_V1 tool input.
 */
type IPDATA_CO_IPDATA_BULK_LOOKUP_V1_INPUT = {
  /**
   * Ips
   * @description List of IPv4 or IPv6 addresses to lookup (1-100).
   */
  ips?: string[];
};

/**
 * Type of IPDATA_CO's IPDATA_CO_IPDATA_BULK_LOOKUP_V1 tool output.
 */
type IPDATA_CO_IPDATA_BULK_LOOKUP_V1_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of lookup result objects for each IP.
       */
      results: {
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
 * Type of IPDATA_CO's IPDATA_CO_IPDATA_EU_LOOKUP_CALLING_IP tool input.
 */
type IPDATA_CO_IPDATA_EU_LOOKUP_CALLING_IP_INPUT = {
  /**
   * Callback
   * @description Function name for JSONP callback wrapping; supported by standard endpoint and also EU endpoint.
   * @default null
   */
  callback: string | null;
  /**
   * Fields
   * @description Comma-separated list of response fields to include, e.g., 'ip,city,country_name'.
   * @default null
   */
  fields: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_IPDATA_EU_LOOKUP_CALLING_IP tool output.
 */
type IPDATA_CO_IPDATA_EU_LOOKUP_CALLING_IP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ASN
       * @description Autonomous System data
       * @default null
       */
      asn: {
          /**
           * Asn
           * @description Autonomous System Number
           */
          asn: string;
          /**
           * Country
           * @description Country of the ASN (advanced)
           * @default null
           */
          country: string | null;
          /**
           * Date
           * @description Assignment date of the ASN (advanced)
           * @default null
           */
          date: string | null;
          /**
           * Domain
           * @description Organization domain
           */
          domain: string;
          /**
           * Downstream
           * @description Related downstream ASNs (advanced)
           * @default null
           */
          downstream: string[] | null;
          /**
           * Ipv4 Prefixes
           * @description List of IPv4 prefixes (advanced)
           * @default null
           */
          ipv4_prefixes: string[] | null;
          /**
           * Ipv6 Prefixes
           * @description List of IPv6 prefixes (advanced)
           * @default null
           */
          ipv6_prefixes: string[] | null;
          /**
           * Name
           * @description ASN owner name
           */
          name: string;
          /**
           * Num Ips
           * @description Count of IPs in the ASN (advanced)
           * @default null
           */
          num_ips: number | null;
          /**
           * Peers
           * @description Related peer ASNs (advanced)
           * @default null
           */
          peers: string[] | null;
          /**
           * Registry
           * @description Registry or administrator (advanced)
           * @default null
           */
          registry: string | null;
          /**
           * Route
           * @description Network prefix for the IP
           */
          route: string;
          /**
           * Status
           * @description ASN status (advanced)
           * @default null
           */
          status: string | null;
          /**
           * Type
           * @description Usage type of the ASN, e.g., hosting, isp, cdn
           */
          type: string;
          /**
           * Upstream
           * @description Related upstream ASNs (advanced)
           * @default null
           */
          upstream: string[] | null;
          /**
           * Usage
           * @description ASN usage type (advanced)
           * @default null
           */
          usage: string | null;
      } | null;
      /**
       * Calling Code
       * @description International calling code
       * @default null
       */
      calling_code: string | null;
      /**
       * Carrier
       * @description Mobile carrier information
       * @default null
       */
      carrier: {
          /**
           * Mcc
           * @description Mobile Country Code
           */
          mcc: string;
          /**
           * Mnc
           * @description Mobile Network Code
           */
          mnc: string;
          /**
           * Name
           * @description Carrier name
           */
          name: string;
      } | null;
      /**
       * City
       * @description City name
       * @default null
       */
      city: string | null;
      /**
       * Company
       * @description Registered company information
       * @default null
       */
      company: {
          /**
           * Domain
           * @description Organization domain
           */
          domain: string;
          /**
           * Name
           * @description End-user organization name
           */
          name: string;
          /**
           * Network
           * @description Assigned network prefix
           */
          network: string;
          /**
           * Type
           * @description Organization type
           */
          type: string;
      } | null;
      /**
       * Continent Code
       * @description Continent code
       * @default null
       */
      continent_code: string | null;
      /**
       * Continent Name
       * @description Continent name
       * @default null
       */
      continent_name: string | null;
      /**
       * Count
       * @description Total requests by API key in last 24h
       */
      count: string;
      /**
       * Country Code
       * @description ISO country code
       * @default null
       */
      country_code: string | null;
      /**
       * Country Name
       * @description Country name
       * @default null
       */
      country_name: string | null;
      /**
       * Currency
       * @description Currency information
       * @default null
       */
      currency: {
          /**
           * Code
           * @description ISO 4217 currency code
           */
          code: string;
          /**
           * Name
           * @description Currency name
           */
          name: string;
          /**
           * Native
           * @description Native currency symbol
           */
          native: string;
          /**
           * Plural
           * @description Plural form of the currency name
           */
          plural: string;
          /**
           * Symbol
           * @description Currency symbol
           */
          symbol: string;
      } | null;
      /**
       * Emoji Flag
       * @description Emoji flag
       * @default null
       */
      emoji_flag: string | null;
      /**
       * Emoji Unicode
       * @description Unicode for emoji flag
       * @default null
       */
      emoji_unicode: string | null;
      /**
       * Flag
       * @description URL to country flag image
       * @default null
       */
      flag: string | null;
      /**
       * Ip
       * @description The IP address looked up
       */
      ip: string;
      /**
       * Is Eu
       * @description Whether the country is an EU member
       */
      is_eu: boolean;
      /**
       * Languages
       * @description List of languages spoken
       * @default null
       */
      languages: {
          /**
           * Name
           * @description Language name
           */
          name: string;
          /**
           * Native
           * @description Native language name
           */
          native: string;
      }[] | null;
      /**
       * Latitude
       * @description Latitude coordinate
       * @default null
       */
      latitude: number | null;
      /**
       * Longitude
       * @description Longitude coordinate
       * @default null
       */
      longitude: number | null;
      /**
       * Postal
       * @description Postal code
       * @default null
       */
      postal: string | null;
      /**
       * Region
       * @description Region name
       * @default null
       */
      region: string | null;
      /**
       * Region Code
       * @description Region ISO code
       * @default null
       */
      region_code: string | null;
      /**
       * Region Type
       * @description Administrative region type
       * @default null
       */
      region_type: string | null;
      /**
       * Threat
       * @description Threat intelligence data
       * @default null
       */
      threat: {
          /**
           * Blocklists
           * @description List of blocklist entries
           */
          blocklists: {
              /**
               * Name
               * @description Blocklist name
               */
              name: string;
              /**
               * Site
               * @description Blocklist site URL
               */
              site: string;
              /**
               * Type
               * @description Blocklist type
               */
              type: string;
          }[];
          /**
           * Is Anonymous
           * @description True if is_tor or is_proxy
           */
          is_anonymous: boolean;
          /**
           * Is Bogon
           * @description True if a bogon IP
           */
          is_bogon: boolean;
          /**
           * Is Datacenter
           * @description True if belongs to a datacenter
           */
          is_datacenter: boolean;
          /**
           * Is Icloud Relay
           * @description True if Apple iCloud relay IP
           */
          is_icloud_relay: boolean;
          /**
           * Is Known Abuser
           * @description Known source of abuse
           */
          is_known_abuser: boolean;
          /**
           * Is Known Attacker
           * @description Known source of malicious activity
           */
          is_known_attacker: boolean;
          /**
           * Is Proxy
           * @description True if a known proxy
           */
          is_proxy: boolean;
          /**
           * Is Threat
           * @description True if known attacker or abuser
           */
          is_threat: boolean;
          /**
           * Is Tor
           * @description True if associated with Tor
           */
          is_tor: boolean;
          /**
           * Is Vpn
           * @description True if a known VPN exit node
           */
          is_vpn: boolean;
          /**
           * Scores
           * @description Reputation scores map
           */
          scores: {
              [key: string]: number;
          };
      } | null;
      /**
       * TimeZone
       * @description Timezone information
       * @default null
       */
      time_zone: {
          /**
           * Abbr
           * @description Timezone abbreviation
           */
          abbr: string;
          /**
           * Current Time
           * @description Current time in ISO-8601 format
           */
          current_time: string;
          /**
           * Is Dst
           * @description Is daylight savings time in effect
           */
          is_dst: boolean;
          /**
           * Name
           * @description Timezone name
           */
          name: string;
          /**
           * Offset
           * @description UTC offset
           */
          offset: string;
      } | null;
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
 * Type of IPDATA_CO's IPDATA_CO_IP_DATA_BASIC_ASN_FOR_IP tool input.
 */
type IPDATA_CO_IP_DATA_BASIC_ASN_FOR_IP_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up
   */
  ip?: string;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_IP_DATA_BASIC_ASN_FOR_IP tool output.
 */
type IPDATA_CO_IP_DATA_BASIC_ASN_FOR_IP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asn
       * @description Autonomous System Number
       */
      asn: string;
      /**
       * Domain
       * @description Website domain of the organization
       */
      domain: string;
      /**
       * Name
       * @description Name of the organization that owns the ASN
       */
      name: string;
      /**
       * Route
       * @description Network prefix the IP address belongs to
       */
      route: string;
      /**
       * Type
       * @description Usage type associated with the IP and ASN
       * @enum {string}
       */
      type: "hosting" | "isp" | "cdn" | "edu" | "gov" | "mil" | "business";
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
 * Type of IPDATA_CO's IPDATA_CO_IP_DATA_COMPANY_FOR_IP tool input.
 */
type IPDATA_CO_IP_DATA_COMPANY_FOR_IP_INPUT = {
  /**
   * Ip
   * @description Target IPv4 or IPv6 address (e.g. '8.8.8.8' or '2001:4860:4860::8888')
   */
  ip?: string;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_IP_DATA_COMPANY_FOR_IP tool output.
 */
type IPDATA_CO_IP_DATA_COMPANY_FOR_IP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain
       * @description The website of the organization
       * @default null
       */
      domain: string | null;
      /**
       * Name
       * @description The name of the end-user organization the network has been assigned to
       * @default null
       */
      name: string | null;
      /**
       * Network
       * @description The network prefix assigned to the organization (for example, 144.178.56.0/21)
       * @default null
       */
      network: string | null;
      /**
       * Type
       * @description The usage type associated with the IP address and company
       * @enum {string}
       */
      type: "hosting" | "isp" | "cdn" | "edu" | "gov" | "mil" | "business";
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
 * Type of IPDATA_CO's IPDATA_CO_IP_DATA_LOOKUP_IP_V1 tool input.
 */
type IPDATA_CO_IP_DATA_LOOKUP_IP_V1_INPUT = {
  /**
   * Callback
   * @description JSONP callback function name
   * @default null
   */
  callback: string | null;
  /**
   * Fields
   * @description Comma-separated list of response fields to return, e.g., ip,is_eu,city,region,region_code,country_name,country_code,continent_name,continent_code,latitude,longitude,asn,company,postal,calling_code,flag,emoji_flag,emoji_unicode,carrier,languages,currency,time_zone,threat,count
   * @default null
   */
  fields: string | null;
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up
   */
  ip?: string;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_IP_DATA_LOOKUP_IP_V1 tool output.
 */
type IPDATA_CO_IP_DATA_LOOKUP_IP_V1_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asn
       * @description Autonomous System Number details
       */
      asn: {
          /**
           * Asn
           * @description Autonomous System Number
           */
          asn: string;
          /**
           * Domain
           * @description Organization's domain
           */
          domain: string;
          /**
           * Name
           * @description Name of the organization that owns the ASN
           */
          name: string;
          /**
           * Route
           * @description Network prefix the IP belongs to
           */
          route: string;
          /**
           * Type
           * @description Usage type associated with the IP and ASN
           */
          type: string;
      };
      /**
       * Calling Code
       * @description Country calling code
       */
      calling_code: string;
      /**
       * Carrier
       * @description Mobile carrier information
       */
      carrier: {
          /**
           * Mcc
           * @description Mobile country code of the carrier
           */
          mcc: string;
          /**
           * Mnc
           * @description Mobile network code of the carrier
           */
          mnc: string;
          /**
           * Name
           * @description Carrier name
           */
          name: string;
      };
      /**
       * City
       * @description City name
       * @default null
       */
      city: string | null;
      /**
       * Company
       * @description End-user company details
       */
      company: {
          /**
           * Domain
           * @description Company's domain
           */
          domain: string;
          /**
           * Name
           * @description Company name
           */
          name: string;
          /**
           * Network
           * @description Network used by the company
           */
          network: string;
          /**
           * Type
           * @description Company usage type
           */
          type: string;
      };
      /**
       * Continent Code
       * @description Continent code (AF, AN, AS, EU, NA, OC, SA)
       */
      continent_code: string;
      /**
       * Continent Name
       * @description Continent name
       */
      continent_name: string;
      /**
       * Count
       * @description Number of API requests made in the last 24 hours
       */
      count: string;
      /**
       * Country Code
       * @description ISO 3166-1 alpha-2 country code
       */
      country_code: string;
      /**
       * Country Name
       * @description Country name
       */
      country_name: string;
      /**
       * Currency
       * @description Currency details
       */
      currency: {
          /**
           * Code
           * @description Currency code
           */
          code: string;
          /**
           * Name
           * @description Currency name
           */
          name: string;
          /**
           * Native
           * @description Native currency symbol
           */
          native: string;
          /**
           * Plural
           * @description Plural form of the currency name
           */
          plural: string;
          /**
           * Symbol
           * @description Currency symbol
           */
          symbol: string;
      };
      /**
       * Emoji Flag
       * @description Emoji flag representation
       */
      emoji_flag: string;
      /**
       * Emoji Unicode
       * @description Emoji unicode for the flag
       */
      emoji_unicode: string;
      /**
       * Flag
       * @description URL to country flag image (PNG or SVG)
       */
      flag: string;
      /**
       * Ip
       * @description Looked-up IP address
       */
      ip: string;
      /**
       * Is Eu
       * @description Whether the IP's country is in the EU
       */
      is_eu: boolean;
      /**
       * Languages
       * @description Languages spoken in the IP's country
       */
      languages: {
          /**
           * Name
           * @description Language name
           */
          name: string;
          /**
           * Native
           * @description Native name of the language
           */
          native: string;
      }[];
      /**
       * Latitude
       * @description Approximate latitude of the IP location
       */
      latitude: number;
      /**
       * Longitude
       * @description Approximate longitude of the IP location
       */
      longitude: number;
      /**
       * Postal
       * @description Postal/ZIP code
       * @default null
       */
      postal: string | null;
      /**
       * Region
       * @description Region/state/province name
       * @default null
       */
      region: string | null;
      /**
       * Region Code
       * @description ISO 3166-2 region code
       * @default null
       */
      region_code: string | null;
      /**
       * Region Type
       * @description Administrative region type (e.g., state, province)
       * @default null
       */
      region_type: string | null;
      /**
       * Threat
       * @description Threat intelligence data for the IP
       */
      threat: {
          /**
           * Blocklists
           * @description List of blocklists where the IP appears
           */
          blocklists: {
              /**
               * Name
               * @description Blocklist name
               */
              name: string;
              /**
               * Site
               * @description Blocklist site or provider URL
               */
              site: string;
              /**
               * Type
               * @description Type of blocklist
               */
              type: string;
          }[];
          /**
           * Is Anonymous
           * @description Whether IP is anonymous
           */
          is_anonymous: boolean;
          /**
           * Is Bogon
           * @description Whether IP is bogon (unallocated)
           */
          is_bogon: boolean;
          /**
           * Is Datacenter
           * @description Whether IP is in a data center
           */
          is_datacenter: boolean;
          /**
           * Is Icloud Relay
           * @description Whether IP is Apple iCloud relay
           */
          is_icloud_relay: boolean;
          /**
           * Is Known Abuser
           * @description Whether IP is a known abuser
           */
          is_known_abuser: boolean;
          /**
           * Is Known Attacker
           * @description Whether IP is a known attacker
           */
          is_known_attacker: boolean;
          /**
           * Is Proxy
           * @description Whether IP is a proxy server
           */
          is_proxy: boolean;
          /**
           * Is Threat
           * @description Whether IP poses a threat
           */
          is_threat: boolean;
          /**
           * Is Tor
           * @description Whether IP is a TOR exit node
           */
          is_tor: boolean;
          /**
           * Is Vpn
           * @description Whether IP is a VPN
           */
          is_vpn: boolean;
          /**
           * Scores
           * @description Reputation scores for various threat categories
           */
          scores: {
              [key: string]: number;
          };
      };
      /**
       * Time Zone
       * @description Time zone details
       */
      time_zone: {
          /**
           * Abbr
           * @description Abbreviation of the time zone
           */
          abbr: string;
          /**
           * Current Time
           * @description Current time in the time zone
           */
          current_time: string;
          /**
           * Is Dst
           * @description Whether daylight savings time is in effect
           */
          is_dst: boolean;
          /**
           * Name
           * @description Time zone name
           */
          name: string;
          /**
           * Offset
           * @description UTC offset of the time zone
           */
          offset: string;
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
 * Type of IPDATA_CO's IPDATA_CO_IP_DATA_THREAT_FOR_IP tool input.
 */
type IPDATA_CO_IP_DATA_THREAT_FOR_IP_INPUT = {
  /**
   * Callback
   * @description JSONP callback function name, if using JSONP
   * @default null
   */
  callback: string | null;
  /**
   * Ip
   * @description IPv4 or IPv6 address to query threat data
   */
  ip?: string;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_IP_DATA_THREAT_FOR_IP tool output.
 */
type IPDATA_CO_IP_DATA_THREAT_FOR_IP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Blocklists
       * @description List of blocklists on which this IP is reported
       */
      blocklists: {
          /**
           * Name
           * @description Blocklist name reporting this IP
           */
          name: string;
          /**
           * Site
           * @description URL of the blocklist provider
           */
          site: string;
          /**
           * Type
           * @description Category/type of the blocklist
           */
          type: string;
      }[];
      /**
       * Is Anonymous
       * @description True if either is_tor or is_proxy is true
       */
      is_anonymous: boolean;
      /**
       * Is Bogon
       * @description True if the IP is a bogon (unallocated or reserved)
       */
      is_bogon: boolean;
      /**
       * Is Datacenter
       * @description True if the IP belongs to a datacenter/cloud provider
       */
      is_datacenter: boolean;
      /**
       * Is Icloud Relay
       * @description True if the IP is Apple iCloud Private Relay
       */
      is_icloud_relay: boolean;
      /**
       * Is Known Abuser
       * @description True if the IP is known to perform abuse such as spam or scraping
       */
      is_known_abuser: boolean;
      /**
       * Is Known Attacker
       * @description True if the IP is known to perform malicious activity
       */
      is_known_attacker: boolean;
      /**
       * Is Proxy
       * @description True if the IP is a known proxy
       */
      is_proxy: boolean;
      /**
       * Is Threat
       * @description True if is_known_attacker or is_known_abuser is true
       */
      is_threat: boolean;
      /**
       * Is Tor
       * @description True if the IP is a Tor node
       */
      is_tor: boolean;
      /**
       * Is Vpn
       * @description True if the IP is a known VPN exit (Business/Enterprise only)
       */
      is_vpn: boolean;
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
 * Type of IPDATA_CO's IPDATA_CO_IP_DATA_TIME_ZONE_FOR_IP tool input.
 */
type IPDATA_CO_IP_DATA_TIME_ZONE_FOR_IP_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up timezone data (e.g., '8.8.8.8').
   */
  ip?: string;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_IP_DATA_TIME_ZONE_FOR_IP tool output.
 */
type IPDATA_CO_IP_DATA_TIME_ZONE_FOR_IP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Abbr
       * @description Timezone abbreviation (e.g., 'PDT')
       */
      abbr: string;
      /**
       * Current Time
       * @description Exact current time in the timezone in ISO 8601 format
       */
      current_time: string;
      /**
       * Is Dst
       * @description Whether Daylight Saving Time is currently in effect
       */
      is_dst: boolean;
      /**
       * Name
       * @description Name of the timezone (e.g., 'America/Los_Angeles')
       */
      name: string;
      /**
       * Offset
       * @description UTC offset for the timezone (e.g., '-0700')
       */
      offset: string;
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
 * Type of IPDATA_CO's IPDATA_CO_LOOKUP_CALLING_IP tool input.
 */
type IPDATA_CO_LOOKUP_CALLING_IP_INPUT = {
  /**
   * Callback
   * @description JSONP callback function name (response wrapped in callback).
   * @default null
   */
  callback: string | null;
  /**
   * Fields
   * @description Comma-separated list of specific response fields to include. Omit to return all available fields.
   * @default null
   */
  fields: string | null;
};

/**
 * Type of IPDATA_CO's IPDATA_CO_LOOKUP_CALLING_IP tool output.
 */
type IPDATA_CO_LOOKUP_CALLING_IP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asn
       * @description Autonomous System data
       */
      asn: {
          /**
           * Asn
           * @description Autonomous System Number
           */
          asn: string;
          /**
           * Domain
           * @description Domain of the ASN owner organization
           */
          domain: string;
          /**
           * Name
           * @description Name of the ASN owner organization
           */
          name: string;
          /**
           * Route
           * @description Network prefix announced by the ASN
           */
          route: string;
          /**
           * Type
           * @description Usage type of the ASN (e.g., hosting, isp)
           */
          type: string;
      };
      /**
       * Calling Code
       * @description International dialing code
       */
      calling_code: string;
      /**
       * Carrier
       * @description Mobile carrier data
       */
      carrier: {
          /**
           * Mcc
           * @description Mobile Country Code
           */
          mcc: string;
          /**
           * Mnc
           * @description Mobile Network Code
           */
          mnc: string;
          /**
           * Name
           * @description Mobile carrier name
           */
          name: string;
      };
      /**
       * City
       * @description City name
       * @default null
       */
      city: string | null;
      /**
       * Company
       * @description End-user organization data
       */
      company: {
          /**
           * Domain
           * @description Organization's website domain
           */
          domain: string;
          /**
           * Name
           * @description End-user organization name
           */
          name: string;
          /**
           * Network
           * @description Network prefix assigned to the organization
           */
          network: string;
          /**
           * Type
           * @description Usage type of the organization (e.g., business)
           */
          type: string;
      };
      /**
       * Continent Code
       * @description Continent code (AF, AN, AS, EU, NA, OC, SA)
       */
      continent_code: string;
      /**
       * Continent Name
       * @description Continent name
       */
      continent_name: string;
      /**
       * Count
       * @description Total API requests in last 24 hours
       */
      count: string;
      /**
       * Country Code
       * @description ISO 3166-1 alpha-2 country code
       */
      country_code: string;
      /**
       * Country Name
       * @description Country name
       */
      country_name: string;
      /**
       * Currency
       * @description Currency information
       */
      currency: {
          /**
           * Code
           * @description ISO 4217 currency code (e.g., USD)
           */
          code: string;
          /**
           * Name
           * @description Currency name (e.g., US Dollar)
           */
          name: string;
          /**
           * Native
           * @description Native currency symbol
           */
          native: string;
          /**
           * Plural
           * @description Plural currency name (e.g., US dollars)
           */
          plural: string;
          /**
           * Symbol
           * @description Currency symbol (e.g., $)
           */
          symbol: string;
      };
      /**
       * Emoji Flag
       * @description Emoji flag
       */
      emoji_flag: string;
      /**
       * Emoji Unicode
       * @description Emoji Unicode code
       */
      emoji_unicode: string;
      /**
       * Flag
       * @description URL to country flag image (PNG/SVG)
       */
      flag: string;
      /**
       * Ip
       * @description The IP address looked up
       */
      ip: string;
      /**
       * Is Eu
       * @description True if the IP is from an EU country
       */
      is_eu: boolean;
      /**
       * Languages
       * @description List of language objects
       */
      languages: {
          /**
           * Name
           * @description Language name in English
           */
          name: string;
          /**
           * Native
           * @description Language native name
           */
          native: string;
      }[];
      /**
       * Latitude
       * @description Approximate latitude
       */
      latitude: number;
      /**
       * Longitude
       * @description Approximate longitude
       */
      longitude: number;
      /**
       * Postal
       * @description Postal/ZIP code
       * @default null
       */
      postal: string | null;
      /**
       * Region
       * @description Region name
       * @default null
       */
      region: string | null;
      /**
       * Region Code
       * @description ISO 3166-2 region code
       * @default null
       */
      region_code: string | null;
      /**
       * Region Type
       * @description Administrative subdivision type
       * @default null
       */
      region_type: string | null;
      /**
       * Threat
       * @description Threat intelligence data
       */
      threat: {
          /**
           * Blocklists
           * @description List of blocklist entries
           */
          blocklists: {
              /**
               * Name
               * @description Blocklist name
               */
              name: string;
              /**
               * Site
               * @description Blocklist site URL
               */
              site: string;
              /**
               * Type
               * @description Blocklist type (e.g., malware, phishing)
               */
              type: string;
          }[];
          /**
           * Is Anonymous
           * @description True if proxy or Tor
           */
          is_anonymous: boolean;
          /**
           * Is Bogon
           * @description True if bogon IP range
           */
          is_bogon: boolean;
          /**
           * Is Datacenter
           * @description True if datacenter IP
           */
          is_datacenter: boolean;
          /**
           * Is Icloud Relay
           * @description True if Apple iCloud Private Relay
           */
          is_icloud_relay: boolean;
          /**
           * Is Known Abuser
           * @description True if known abuser source
           */
          is_known_abuser: boolean;
          /**
           * Is Known Attacker
           * @description True if known attacker source
           */
          is_known_attacker: boolean;
          /**
           * Is Proxy
           * @description True if known proxy
           */
          is_proxy: boolean;
          /**
           * Is Threat
           * @description True if overall threat detected
           */
          is_threat: boolean;
          /**
           * Is Tor
           * @description True if associated with Tor network
           */
          is_tor: boolean;
          /**
           * Is Vpn
           * @description True if recognized VPN exit node
           */
          is_vpn: boolean;
          /**
           * Scores
           * @description Reputation scores by category
           */
          scores: {
              [key: string]: number;
          };
      };
      /**
       * Time Zone
       * @description Time zone information
       */
      time_zone: {
          /**
           * Abbr
           * @description Time zone abbreviation (e.g., PDT)
           */
          abbr: string;
          /**
           * Current Time
           * @description Current time in ISO 8601 format
           */
          current_time: string;
          /**
           * Is Dst
           * @description Whether daylight saving time is in effect
           */
          is_dst: boolean;
          /**
           * Name
           * @description Time zone identifier (e.g., America/Los_Angeles)
           */
          name: string;
          /**
           * Offset
           * @description UTC offset (e.g., -07:00)
           */
          offset: string;
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
 * Type map of all available tool input types for toolkit "IPDATA_CO".
 */
export type IPDATA_CO_TOOL_INPUTS = {
  ADVANCED_ASN_LOOKUP: IPDATA_CO_ADVANCED_ASN_LOOKUP_INPUT
  CARRIER_FOR_IP: IPDATA_CO_CARRIER_FOR_IP_INPUT
  EU_LOOKUP_SPECIFIC_IP: IPDATA_CO_EU_LOOKUP_SPECIFIC_IP_INPUT
  FIELD_CALLING_CODE: IPDATA_CO_FIELD_CALLING_CODE_INPUT
  FIELD_CARRIER: IPDATA_CO_FIELD_CARRIER_INPUT
  FIELD_CITY: IPDATA_CO_FIELD_CITY_INPUT
  FIELD_CONTINENT_CODE: IPDATA_CO_FIELD_CONTINENT_CODE_INPUT
  FIELD_CONTINENT_NAME: IPDATA_CO_FIELD_CONTINENT_NAME_INPUT
  FIELD_COUNT: IPDATA_CO_FIELD_COUNT_INPUT
  FIELD_COUNTRY_CODE: IPDATA_CO_FIELD_COUNTRY_CODE_INPUT
  FIELD_COUNTRY_NAME: IPDATA_CO_FIELD_COUNTRY_NAME_INPUT
  FIELD_CURRENCY: IPDATA_CO_FIELD_CURRENCY_INPUT
  FIELD_EMOJI_FLAG: IPDATA_CO_FIELD_EMOJI_FLAG_INPUT
  FIELD_EMOJI_UNICODE: IPDATA_CO_FIELD_EMOJI_UNICODE_INPUT
  FIELD_IP: IPDATA_CO_FIELD_IP_INPUT
  FIELD_IS_EU: IPDATA_CO_FIELD_IS_EU_INPUT
  FIELD_LANGUAGES: IPDATA_CO_FIELD_LANGUAGES_INPUT
  FIELD_LATITUDE: IPDATA_CO_FIELD_LATITUDE_INPUT
  FIELD_LONGITUDE: IPDATA_CO_FIELD_LONGITUDE_INPUT
  FIELD_POSTAL: IPDATA_CO_FIELD_POSTAL_INPUT
  FIELD_REGION: IPDATA_CO_FIELD_REGION_INPUT
  FIELD_REGION_CODE: IPDATA_CO_FIELD_REGION_CODE_INPUT
  FIELD_THREAT: IPDATA_CO_FIELD_THREAT_INPUT
  FIELD_TIME_ZONE: IPDATA_CO_FIELD_TIME_ZONE_INPUT
  GET_CURRENCY_FOR_IP: IPDATA_CO_GET_CURRENCY_FOR_IP_INPUT
  IPDATA_BULK_LOOKUP_V1: IPDATA_CO_IPDATA_BULK_LOOKUP_V1_INPUT
  IPDATA_EU_LOOKUP_CALLING_IP: IPDATA_CO_IPDATA_EU_LOOKUP_CALLING_IP_INPUT
  IP_DATA_BASIC_ASN_FOR_IP: IPDATA_CO_IP_DATA_BASIC_ASN_FOR_IP_INPUT
  IP_DATA_COMPANY_FOR_IP: IPDATA_CO_IP_DATA_COMPANY_FOR_IP_INPUT
  IP_DATA_LOOKUP_IP_V1: IPDATA_CO_IP_DATA_LOOKUP_IP_V1_INPUT
  IP_DATA_THREAT_FOR_IP: IPDATA_CO_IP_DATA_THREAT_FOR_IP_INPUT
  IP_DATA_TIME_ZONE_FOR_IP: IPDATA_CO_IP_DATA_TIME_ZONE_FOR_IP_INPUT
  LOOKUP_CALLING_IP: IPDATA_CO_LOOKUP_CALLING_IP_INPUT
}

/**
 * Type map of all available tool input types for toolkit "IPDATA_CO".
 */
export type IPDATA_CO_TOOL_OUTPUTS = {
  ADVANCED_ASN_LOOKUP: IPDATA_CO_ADVANCED_ASN_LOOKUP_OUTPUT
  CARRIER_FOR_IP: IPDATA_CO_CARRIER_FOR_IP_OUTPUT
  EU_LOOKUP_SPECIFIC_IP: IPDATA_CO_EU_LOOKUP_SPECIFIC_IP_OUTPUT
  FIELD_CALLING_CODE: IPDATA_CO_FIELD_CALLING_CODE_OUTPUT
  FIELD_CARRIER: IPDATA_CO_FIELD_CARRIER_OUTPUT
  FIELD_CITY: IPDATA_CO_FIELD_CITY_OUTPUT
  FIELD_CONTINENT_CODE: IPDATA_CO_FIELD_CONTINENT_CODE_OUTPUT
  FIELD_CONTINENT_NAME: IPDATA_CO_FIELD_CONTINENT_NAME_OUTPUT
  FIELD_COUNT: IPDATA_CO_FIELD_COUNT_OUTPUT
  FIELD_COUNTRY_CODE: IPDATA_CO_FIELD_COUNTRY_CODE_OUTPUT
  FIELD_COUNTRY_NAME: IPDATA_CO_FIELD_COUNTRY_NAME_OUTPUT
  FIELD_CURRENCY: IPDATA_CO_FIELD_CURRENCY_OUTPUT
  FIELD_EMOJI_FLAG: IPDATA_CO_FIELD_EMOJI_FLAG_OUTPUT
  FIELD_EMOJI_UNICODE: IPDATA_CO_FIELD_EMOJI_UNICODE_OUTPUT
  FIELD_IP: IPDATA_CO_FIELD_IP_OUTPUT
  FIELD_IS_EU: IPDATA_CO_FIELD_IS_EU_OUTPUT
  FIELD_LANGUAGES: IPDATA_CO_FIELD_LANGUAGES_OUTPUT
  FIELD_LATITUDE: IPDATA_CO_FIELD_LATITUDE_OUTPUT
  FIELD_LONGITUDE: IPDATA_CO_FIELD_LONGITUDE_OUTPUT
  FIELD_POSTAL: IPDATA_CO_FIELD_POSTAL_OUTPUT
  FIELD_REGION: IPDATA_CO_FIELD_REGION_OUTPUT
  FIELD_REGION_CODE: IPDATA_CO_FIELD_REGION_CODE_OUTPUT
  FIELD_THREAT: IPDATA_CO_FIELD_THREAT_OUTPUT
  FIELD_TIME_ZONE: IPDATA_CO_FIELD_TIME_ZONE_OUTPUT
  GET_CURRENCY_FOR_IP: IPDATA_CO_GET_CURRENCY_FOR_IP_OUTPUT
  IPDATA_BULK_LOOKUP_V1: IPDATA_CO_IPDATA_BULK_LOOKUP_V1_OUTPUT
  IPDATA_EU_LOOKUP_CALLING_IP: IPDATA_CO_IPDATA_EU_LOOKUP_CALLING_IP_OUTPUT
  IP_DATA_BASIC_ASN_FOR_IP: IPDATA_CO_IP_DATA_BASIC_ASN_FOR_IP_OUTPUT
  IP_DATA_COMPANY_FOR_IP: IPDATA_CO_IP_DATA_COMPANY_FOR_IP_OUTPUT
  IP_DATA_LOOKUP_IP_V1: IPDATA_CO_IP_DATA_LOOKUP_IP_V1_OUTPUT
  IP_DATA_THREAT_FOR_IP: IPDATA_CO_IP_DATA_THREAT_FOR_IP_OUTPUT
  IP_DATA_TIME_ZONE_FOR_IP: IPDATA_CO_IP_DATA_TIME_ZONE_FOR_IP_OUTPUT
  LOOKUP_CALLING_IP: IPDATA_CO_LOOKUP_CALLING_IP_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's IPDATA_CO toolkit.
 */
export const IPDATA_CO = {
  slug: "ipdata_co",
  tools: {
    /**
     * Tool to perform advanced ASN lookup returning prefixes, peers, and registry details. Use after confirming ASN number when detailed ASN info is required.
     */
    ADVANCED_ASN_LOOKUP: "IPDATA_CO_ADVANCED_ASN_LOOKUP",
    /**
     * Tool to return mobile carrier data for a specific IP. Use when you need carrier name, MCC, and MNC for an IP address.
     */
    CARRIER_FOR_IP: "IPDATA_CO_CARRIER_FOR_IP",
    /**
     * Tool to lookup a specific IP address via the EU-only data residency endpoint. Use when you need IP lookup processed and stored within the EU.
     */
    EU_LOOKUP_SPECIFIC_IP: "IPDATA_CO_EU_LOOKUP_SPECIFIC_IP",
    /**
     * Tool to fetch the international calling_code for an IP's country. Use when you need only the calling code field from ipdata_co.
     */
    FIELD_CALLING_CODE: "IPDATA_CO_FIELD_CALLING_CODE",
    /**
     * Tool to return only the carrier object for the calling IP. Use when you need mobile carrier details of a specific IP.
     */
    FIELD_CARRIER: "IPDATA_CO_FIELD_CARRIER",
    /**
     * Tool to return only city for an IP. Use when only the city name is required.
     */
    FIELD_CITY: "IPDATA_CO_FIELD_CITY",
    /**
     * Tool to return only continent_code for an IP. Use when only the continent code is required.
     */
    FIELD_CONTINENT_CODE: "IPDATA_CO_FIELD_CONTINENT_CODE",
    /**
     * Tool to return only continent name for an IP. Use when only the continent name is required.
     */
    FIELD_CONTINENT_NAME: "IPDATA_CO_FIELD_CONTINENT_NAME",
    /**
     * Tool to return only the request count made by your API key in the last 24 hours. Use when monitoring your API usage and you only need the total count.
     */
    FIELD_COUNT: "IPDATA_CO_FIELD_COUNT",
    /**
     * Tool to return only country_code for an IP. Use when only the 2-letter country code is required.
     */
    FIELD_COUNTRY_CODE: "IPDATA_CO_FIELD_COUNTRY_CODE",
    /**
     * Tool to return only country name for an IP. Use when only the country name is required.
     */
    FIELD_COUNTRY_NAME: "IPDATA_CO_FIELD_COUNTRY_NAME",
    /**
     * Tool to return only currency object for an IP. Use when currency details are needed.
     */
    FIELD_CURRENCY: "IPDATA_CO_FIELD_CURRENCY",
    /**
     * Tool to return only emoji flag for an IP. Use when only the country flag emoji is required.
     */
    FIELD_EMOJI_FLAG: "IPDATA_CO_FIELD_EMOJI_FLAG",
    /**
     * Tool to return only emoji_unicode for an IP. Use when only the Unicode country flag emoji is required.
     */
    FIELD_EMOJI_UNICODE: "IPDATA_CO_FIELD_EMOJI_UNICODE",
    /**
     * Tool to return only the caller’s IP string. Use when you need just the origin IP of your request.
     */
    FIELD_IP: "IPDATA_CO_FIELD_IP",
    /**
     * Tool to return only is_eu for an IP. Use when you need to determine if an IP's country belongs to the EU.
     */
    FIELD_IS_EU: "IPDATA_CO_FIELD_IS_EU",
    /**
     * Tool to return only the languages array for an IP. Use when only language details for an IP are required.
     */
    FIELD_LANGUAGES: "IPDATA_CO_FIELD_LANGUAGES",
    /**
     * Tool to return only the latitude for an IP. Use when only the latitude coordinate is needed.
     */
    FIELD_LATITUDE: "IPDATA_CO_FIELD_LATITUDE",
    /**
     * Tool to return only longitude for an IP. Use when only the longitude value is required.
     */
    FIELD_LONGITUDE: "IPDATA_CO_FIELD_LONGITUDE",
    /**
     * Tool to return only postal code for an IP. Use when only the postal code (ZIP/postcode) is required.
     */
    FIELD_POSTAL: "IPDATA_CO_FIELD_POSTAL",
    /**
     * Tool to return only region for an IP. Use when only the region name is required.
     */
    FIELD_REGION: "IPDATA_CO_FIELD_REGION",
    /**
     * Tool to return only region_code for an IP. Use when only the ISO 3166-2 region code is required.
     */
    FIELD_REGION_CODE: "IPDATA_CO_FIELD_REGION_CODE",
    /**
     * Tool to return only the threat object for the calling IP. Use when only the threat details are required for the current IP.
     */
    FIELD_THREAT: "IPDATA_CO_FIELD_THREAT",
    /**
     * Tool to return only the time_zone object for an IP. Use when only timezone data is required.
     */
    FIELD_TIME_ZONE: "IPDATA_CO_FIELD_TIME_ZONE",
    /**
     * Tool to retrieve currency information for a specific IP. Use when you need currency details based on the geolocation of an IP address.
     */
    GET_CURRENCY_FOR_IP: "IPDATA_CO_GET_CURRENCY_FOR_IP",
    /**
     * Tool to bulk lookup up to 100 IP addresses via ipdata.co. Use when you have multiple IPs and need geolocation and threat data in one call.
     */
    IPDATA_BULK_LOOKUP_V1: "IPDATA_CO_IPDATA_BULK_LOOKUP_V1",
    /**
     * Tool to lookup the calling client IP via EU-residency endpoint. Use when you need IP data processed and stored within EU.
     */
    IPDATA_EU_LOOKUP_CALLING_IP: "IPDATA_CO_IPDATA_EU_LOOKUP_CALLING_IP",
    /**
     * Tool to return basic ASN data for a specific IP. Use when you need ASN number, organization, domain, route, and type details.
     */
    IP_DATA_BASIC_ASN_FOR_IP: "IPDATA_CO_IP_DATA_BASIC_ASN_FOR_IP",
    /**
     * Tool to retrieve company data for a given IP address. Use when you need the organization name, domain, network prefix, and usage type for an IPv4 or IPv6.
     */
    IP_DATA_COMPANY_FOR_IP: "IPDATA_CO_IP_DATA_COMPANY_FOR_IP",
    /**
     * Tool to lookup comprehensive IP information (geolocation, network, company, and threat data) in one call. Use when you need all IP insights together.
     */
    IP_DATA_LOOKUP_IP_V1: "IPDATA_CO_IP_DATA_LOOKUP_IP_V1",
    /**
     * Tool to return threat intelligence data for a specific IP. Use when you need to determine if an IP is a Tor node, VPN, proxy, datacenter, threat actor, or listed on blocklists.
     */
    IP_DATA_THREAT_FOR_IP: "IPDATA_CO_IP_DATA_THREAT_FOR_IP",
    /**
     * Tool to return timezone data for a specific IP. Use when you need timezone details, including name, abbreviation, offset, DST status, and local current time for an IP.
     */
    IP_DATA_TIME_ZONE_FOR_IP: "IPDATA_CO_IP_DATA_TIME_ZONE_FOR_IP",
    /**
     * Tool to lookup full data for the calling client IP. Use when you need geolocation, network, and threat intelligence for the current IP.
     */
    LOOKUP_CALLING_IP: "IPDATA_CO_LOOKUP_CALLING_IP",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "IPDATA_CO".
 */
export type IPDATA_CO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "IPDATA_CO".
 */
export type IPDATA_CO_TRIGGER_EVENTS = {}
