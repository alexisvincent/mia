// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of IP2LOCATION_IO's IP2LOCATION_IO_BULK_IP_GEOLOCATION tool input.
 */
type IP2LOCATION_IO_BULK_IP_GEOLOCATION_INPUT = {
  /**
   * Fields
   * @description Optional subset of fields to include. Allowed values: country_code, country_name, region_name, city_name, latitude, longitude, zip_code, time_zone, asn, as, is_proxy
   * @default null
   */
  fields: string[] | null;
  /**
   * Format
   * @description Response format: 'json' or 'csv'
   * @default json
   * @enum {string}
   */
  format: "json" | "csv";
  /**
   * Ip List
   * @description List of IPv4 or IPv6 addresses (1-1000 entries)
   */
  ip_list?: string[];
};

/**
 * Type of IP2LOCATION_IO's IP2LOCATION_IO_BULK_IP_GEOLOCATION tool output.
 */
type IP2LOCATION_IO_BULK_IP_GEOLOCATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Csv
       * @description Raw CSV text output when format is 'csv'
       * @default null
       */
      csv: string | null;
      /**
       * Results
       * @description Mapping of IP address to geolocation record for JSON output
       * @default null
       */
      results: {
          [key: string]: {
              /**
               * As Info
               * @description Autonomous System organization name
               * @default null
               */
              as_info: string | null;
              /**
               * Asn
               * @description Autonomous System Number
               * @default null
               */
              asn: string | null;
              /**
               * City Name
               * @description City name
               * @default null
               */
              city_name: string | null;
              /**
               * Country Code
               * @description Country ISO code
               * @default null
               */
              country_code: string | null;
              /**
               * Country Name
               * @description Full country name
               * @default null
               */
              country_name: string | null;
              /**
               * Is Proxy
               * @description True if IP is from a known proxy/VPN
               * @default null
               */
              is_proxy: boolean | null;
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
               * Region Name
               * @description Region or state name
               * @default null
               */
              region_name: string | null;
              /**
               * Time Zone
               * @description Time zone of the location
               * @default null
               */
              time_zone: string | null;
              /**
               * Zip Code
               * @description Postal or ZIP code
               * @default null
               */
              zip_code: string | null;
          };
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
 * Type of IP2LOCATION_IO's IP2LOCATION_IO_DOMAIN_WHOIS tool input.
 */
type IP2LOCATION_IO_DOMAIN_WHOIS_INPUT = {
  /**
   * Domain
   * @description Domain name to look up, e.g., 'example.com'
   */
  domain?: string;
  /**
   * Format
   * @description Response format; valid values: 'json' or 'xml'
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Key
   * @description API key for IP2Location.io WHOIS service
   */
  key?: string;
};

/**
 * Type of IP2LOCATION_IO's IP2LOCATION_IO_DOMAIN_WHOIS tool output.
 */
type IP2LOCATION_IO_DOMAIN_WHOIS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact
       * @description Admin contact information
       * @default null
       */
      admin: {
          /**
           * City
           * @description Contact city
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Contact country
           * @default null
           */
          country: string | null;
          /**
           * Email
           * @description Contact email address
           * @default null
           */
          email: string | null;
          /**
           * Fax
           * @description Contact fax number
           * @default null
           */
          fax: string | null;
          /**
           * Name
           * @description Contact name
           * @default null
           */
          name: string | null;
          /**
           * Organization
           * @description Contact organization
           * @default null
           */
          organization: string | null;
          /**
           * Phone
           * @description Contact phone number
           * @default null
           */
          phone: string | null;
          /**
           * Region
           * @description Contact region/state
           * @default null
           */
          region: string | null;
          /**
           * Street Address
           * @description Contact street address
           * @default null
           */
          street_address: string | null;
          /**
           * Zip Code
           * @description Contact postal code
           * @default null
           */
          zip_code: string | null;
      } | null;
      /**
       * Contact
       * @description Billing contact information
       * @default null
       */
      billing: {
          /**
           * City
           * @description Contact city
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Contact country
           * @default null
           */
          country: string | null;
          /**
           * Email
           * @description Contact email address
           * @default null
           */
          email: string | null;
          /**
           * Fax
           * @description Contact fax number
           * @default null
           */
          fax: string | null;
          /**
           * Name
           * @description Contact name
           * @default null
           */
          name: string | null;
          /**
           * Organization
           * @description Contact organization
           * @default null
           */
          organization: string | null;
          /**
           * Phone
           * @description Contact phone number
           * @default null
           */
          phone: string | null;
          /**
           * Region
           * @description Contact region/state
           * @default null
           */
          region: string | null;
          /**
           * Street Address
           * @description Contact street address
           * @default null
           */
          street_address: string | null;
          /**
           * Zip Code
           * @description Contact postal code
           * @default null
           */
          zip_code: string | null;
      } | null;
      /**
       * Create Date
       * @description Domain creation date
       * @default null
       */
      create_date: string | null;
      /**
       * Domain
       * @description Domain name
       * @default null
       */
      domain: string | null;
      /**
       * Domain Age
       * @description Domain age in years
       * @default null
       */
      domain_age: number | null;
      /**
       * Domain Id
       * @description Registrar assigned domain ID
       * @default null
       */
      domain_id: string | null;
      /**
       * Error
       * @description Error details, if any
       * @default null
       */
      error: {
          /**
           * Error Code
           * @description Error code
           * @default null
           */
          error_code: number | null;
          /**
           * Error Message
           * @description Error message
           * @default null
           */
          error_message: string | null;
      } | null;
      /**
       * Expire Date
       * @description Expiry date
       * @default null
       */
      expire_date: string | null;
      /**
       * Nameservers
       * @description List of nameservers
       * @default null
       */
      nameservers: string[] | null;
      /**
       * Contact
       * @description Registrant contact information
       * @default null
       */
      registrant: {
          /**
           * City
           * @description Contact city
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Contact country
           * @default null
           */
          country: string | null;
          /**
           * Email
           * @description Contact email address
           * @default null
           */
          email: string | null;
          /**
           * Fax
           * @description Contact fax number
           * @default null
           */
          fax: string | null;
          /**
           * Name
           * @description Contact name
           * @default null
           */
          name: string | null;
          /**
           * Organization
           * @description Contact organization
           * @default null
           */
          organization: string | null;
          /**
           * Phone
           * @description Contact phone number
           * @default null
           */
          phone: string | null;
          /**
           * Region
           * @description Contact region/state
           * @default null
           */
          region: string | null;
          /**
           * Street Address
           * @description Contact street address
           * @default null
           */
          street_address: string | null;
          /**
           * Zip Code
           * @description Contact postal code
           * @default null
           */
          zip_code: string | null;
      } | null;
      /**
       * Registrar
       * @description Registrar information
       * @default null
       */
      registrar: {
          /**
           * Iana Id
           * @description Registrar IANA ID
           * @default null
           */
          iana_id: string | null;
          /**
           * Name
           * @description Registrar name
           * @default null
           */
          name: string | null;
          /**
           * Url
           * @description Registrar URL
           * @default null
           */
          url: string | null;
      } | null;
      /**
       * Status
       * @description Domain status
       * @default null
       */
      status: string | null;
      /**
       * Contact
       * @description Technical contact information
       * @default null
       */
      tech: {
          /**
           * City
           * @description Contact city
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Contact country
           * @default null
           */
          country: string | null;
          /**
           * Email
           * @description Contact email address
           * @default null
           */
          email: string | null;
          /**
           * Fax
           * @description Contact fax number
           * @default null
           */
          fax: string | null;
          /**
           * Name
           * @description Contact name
           * @default null
           */
          name: string | null;
          /**
           * Organization
           * @description Contact organization
           * @default null
           */
          organization: string | null;
          /**
           * Phone
           * @description Contact phone number
           * @default null
           */
          phone: string | null;
          /**
           * Region
           * @description Contact region/state
           * @default null
           */
          region: string | null;
          /**
           * Street Address
           * @description Contact street address
           * @default null
           */
          street_address: string | null;
          /**
           * Zip Code
           * @description Contact postal code
           * @default null
           */
          zip_code: string | null;
      } | null;
      /**
       * Update Date
       * @description Last update date
       * @default null
       */
      update_date: string | null;
      /**
       * Whois Server
       * @description WHOIS server
       * @default null
       */
      whois_server: string | null;
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
 * Type of IP2LOCATION_IO's IP2LOCATION_IO_GET_API_KEY tool input.
 */
type IP2LOCATION_IO_GET_API_KEY_INPUT = object;

/**
 * Type of IP2LOCATION_IO's IP2LOCATION_IO_GET_API_KEY tool output.
 */
type IP2LOCATION_IO_GET_API_KEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Key
       * @description Retrieved API key for IP2Location.io
       */
      key: string;
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
 * Type of IP2LOCATION_IO's IP2LOCATION_IO_IP2_WHOIS_HOSTED_DOMAIN tool input.
 */
type IP2LOCATION_IO_IP2_WHOIS_HOSTED_DOMAIN_INPUT = {
  /**
   * Format
   * @description Response format
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Ip
   * @description IPv4 or IPv6 address to lookup hosted domains
   */
  ip?: string;
  /**
   * Page
   * @description Page number for pagination
   * @default 1
   */
  page: number;
};

/**
 * Type of IP2LOCATION_IO's IP2LOCATION_IO_IP2_WHOIS_HOSTED_DOMAIN tool output.
 */
type IP2LOCATION_IO_IP2_WHOIS_HOSTED_DOMAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domains
       * @description List of hosted domain names associated with the IP.
       */
      domains: string[];
      /**
       * ErrorResponse
       * @description Error object if an error occurred.
       * @default null
       */
      error: {
          /**
           * Error Code
           * @description Error code.
           */
          error_code: number;
          /**
           * Error Message
           * @description Error message.
           */
          error_message: string;
      } | null;
      /**
       * Ip
       * @description IP address returned by the API.
       */
      ip: string;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of domains per page.
       */
      per_page: number;
      /**
       * Total Domains
       * @description Total number of hosted domains found.
       */
      total_domains: number;
      /**
       * Total Pages
       * @description Total number of pages available.
       */
      total_pages: number;
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
 * Type map of all available tool input types for toolkit "IP2LOCATION_IO".
 */
export type IP2LOCATION_IO_TOOL_INPUTS = {
  BULK_IP_GEOLOCATION: IP2LOCATION_IO_BULK_IP_GEOLOCATION_INPUT
  DOMAIN_WHOIS: IP2LOCATION_IO_DOMAIN_WHOIS_INPUT
  GET_API_KEY: IP2LOCATION_IO_GET_API_KEY_INPUT
  IP2_WHOIS_HOSTED_DOMAIN: IP2LOCATION_IO_IP2_WHOIS_HOSTED_DOMAIN_INPUT
}

/**
 * Type map of all available tool input types for toolkit "IP2LOCATION_IO".
 */
export type IP2LOCATION_IO_TOOL_OUTPUTS = {
  BULK_IP_GEOLOCATION: IP2LOCATION_IO_BULK_IP_GEOLOCATION_OUTPUT
  DOMAIN_WHOIS: IP2LOCATION_IO_DOMAIN_WHOIS_OUTPUT
  GET_API_KEY: IP2LOCATION_IO_GET_API_KEY_OUTPUT
  IP2_WHOIS_HOSTED_DOMAIN: IP2LOCATION_IO_IP2_WHOIS_HOSTED_DOMAIN_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's IP2LOCATION_IO toolkit.
 */
export const IP2LOCATION_IO = {
  slug: "ip2location_io",
  tools: {
    /**
     * Tool to retrieve geolocation information for multiple IP addresses in bulk. Use when processing up to 1000 IPs at once.
     */
    BULK_IP_GEOLOCATION: "IP2LOCATION_IO_BULK_IP_GEOLOCATION",
    /**
     * Tool to retrieve WHOIS information for a given domain. Use when you need domain registration and contact details via IP2WHOIS API.
     */
    DOMAIN_WHOIS: "IP2LOCATION_IO_DOMAIN_WHOIS",
    /**
     * Tool to retrieve the configured API key. Use when authentication is needed for IP2Location.io requests.
     */
    GET_API_KEY: "IP2LOCATION_IO_GET_API_KEY",
    /**
     * Tool to retrieve hosted domain names by IP address. Use when you need to list domains hosted on a given IP. Call after confirming the IP.
     */
    IP2_WHOIS_HOSTED_DOMAIN: "IP2LOCATION_IO_IP2_WHOIS_HOSTED_DOMAIN",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "IP2LOCATION_IO".
 */
export type IP2LOCATION_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "IP2LOCATION_IO".
 */
export type IP2LOCATION_IO_TRIGGER_EVENTS = {}
