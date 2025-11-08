// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of IP2LOCATION's IP2LOCATION_BULK_IP_GEOLOCATION tool input.
 */
type IP2LOCATION_BULK_IP_GEOLOCATION_INPUT = {
  /**
   * Fields
   * @description Optional subset of fields to return; if omitted, all fields are returned.
   * @default null
   */
  fields: string[] | null;
  /**
   * Format
   * @description Response format: 'json' for structured data or 'csv' for raw CSV text.
   * @default json
   * @enum {string}
   */
  format: "json" | "csv";
  /**
   * Ips
   * @description List of IPv4 or IPv6 addresses to look up (1 to 1000 entries).
   */
  ips?: string[];
};

/**
 * Type of IP2LOCATION's IP2LOCATION_BULK_IP_GEOLOCATION tool output.
 */
type IP2LOCATION_BULK_IP_GEOLOCATION_OUTPUT = {
  /**
   * Data
   * @description Bulk geolocation result: map of IP to GeoInfo (JSON) or raw CSV text.
   */
  data?: {
      [key: string]: {
          /**
           * As
           * @description Autonomous System name
           * @default null
           */
          as: string | null;
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
           * @description Country code
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
           * Is Proxy
           * @description Whether the IP is a proxy
           * @default null
           */
          is_proxy: boolean | null;
          /**
           * Latitude
           * @description Latitude
           * @default null
           */
          latitude: number | null;
          /**
           * Longitude
           * @description Longitude
           * @default null
           */
          longitude: number | null;
          /**
           * Region Name
           * @description Region name
           * @default null
           */
          region_name: string | null;
          /**
           * Time Zone
           * @description Time zone
           * @default null
           */
          time_zone: string | null;
          /**
           * Zip Code
           * @description ZIP or postal code
           * @default null
           */
          zip_code: string | null;
      };
  } | null;
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
 * Type of IP2LOCATION's IP2LOCATION_CHECK_CREDITS tool input.
 */
type IP2LOCATION_CHECK_CREDITS_INPUT = {
  /**
   * Key
   * @description API key for IP2Location; if omitted, uses the metadata-configured key.
   * @default null
   */
  key: string | null;
};

/**
 * Type of IP2LOCATION's IP2LOCATION_CHECK_CREDITS tool output.
 */
type IP2LOCATION_CHECK_CREDITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credit Left
       * @description Number of remaining API query credits for the API key.
       */
      credit_left: number;
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
 * Type of IP2LOCATION's IP2LOCATION_GET_HOSTED_DOMAINS tool input.
 */
type IP2LOCATION_GET_HOSTED_DOMAINS_INPUT = {
  /**
   * Format
   * @description Response format. Valid values: 'json' (default) or 'xml'.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up hosted domains.
   */
  ip?: string;
  /**
   * Key
   * @description IP2WHOIS API key/license key.
   */
  key?: string;
  /**
   * Page
   * @description Results page for pagination (>=1). Default is 1.
   * @default 1
   */
  page: number;
};

/**
 * Type of IP2LOCATION's IP2LOCATION_GET_HOSTED_DOMAINS tool output.
 */
type IP2LOCATION_GET_HOSTED_DOMAINS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domains
       * @description List of hosted domain names.
       */
      domains: string[];
      /**
       * Ip
       * @description IP address looked up.
       */
      ip: string;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of domains returned in this page.
       */
      per_page: number;
      /**
       * Total Domains
       * @description Total number of hosted domains found.
       */
      total_domains: number;
      /**
       * Total Pages
       * @description Total pages available for the query.
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
 * Type of IP2LOCATION's IP2LOCATION_GET_IP_GEOLOCATION tool input.
 */
type IP2LOCATION_GET_IP_GEOLOCATION_INPUT = {
  /**
   * Addon
   * @description Extra data to include; valid values: continent, country, region, city, geotargeting, country_groupings, time_zone_info
   * @default null
   */
  addon: string[] | null;
  /**
   * Format
   * @description Response format; default is json
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Ip
   * @description IPv4 or IPv6 address to look up
   */
  ip?: string;
  /**
   * Lang
   * @description Translation language for certain addon fields; valid values as ISO language codes
   * @default null
   * @enum {string|null}
   */
  lang: "ar" | "cs" | "da" | "de" | "en" | "es" | "et" | "fi" | "fr" | "ga" | "it" | "ja" | "ko" | "ms" | "nl" | "pt" | "ru" | "sv" | "tr" | "vi" | "zh-cn" | "zh-tw" | null;
  /**
   * Package
   * @description Web service package controlling which fields are returned; valid values WS1–WS25
   * @enum {string}
   */
  package?: "WS1" | "WS2" | "WS3" | "WS4" | "WS5" | "WS6" | "WS7" | "WS8" | "WS9" | "WS10" | "WS11" | "WS12" | "WS13" | "WS14" | "WS15" | "WS16" | "WS17" | "WS18" | "WS19" | "WS20" | "WS21" | "WS22" | "WS23" | "WS24" | "WS25";
};

/**
 * Type of IP2LOCATION's IP2LOCATION_GET_IP_GEOLOCATION tool output.
 */
type IP2LOCATION_GET_IP_GEOLOCATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address Type
       * @description IP address type (e.g., A/U/M/B)
       * @default null
       */
      address_type: string | null;
      /**
       * Area Code
       * @description Telephone area code
       * @default null
       */
      area_code: string | null;
      /**
       * Category
       * @description IAB domain category code
       * @default null
       */
      category: string | null;
      /**
       * Category Name
       * @description IAB domain category name
       * @default null
       */
      category_name: string | null;
      /**
       * CityAddon
       * @description City addon data if requested
       * @default null
       */
      city: {
          /**
           * Name
           * @description City name
           * @default null
           */
          name: string | null;
          /**
           * Translations
           * @description Translations for city name
           * @default null
           */
          translations: {
              [key: string]: string;
          } | null;
      } | null;
      /**
       * City Name
       * @description City name
       * @default null
       */
      city_name: string | null;
      /**
       * ContinentAddon
       * @description Continent addon data if requested
       * @default null
       */
      continent: {
          /**
           * Code
           * @description Continent two-letter code
           * @default null
           */
          code: string | null;
          /**
           * Hemisphere
           * @description Hemisphere
           * @default null
           */
          hemisphere: string | null;
          /**
           * Name
           * @description Continent name
           * @default null
           */
          name: string | null;
          /**
           * Translations
           * @description Map of language code to translation of continent name
           * @default null
           */
          translations: {
              [key: string]: string;
          } | null;
      } | null;
      /**
       * CountryAddon
       * @description Country addon data if requested
       * @default null
       */
      country: {
          /**
           * Alpha3 Code
           * @description Three-letter ISO country code
           * @default null
           */
          alpha3_code: string | null;
          /**
           * Capital
           * @description Country capital city
           * @default null
           */
          capital: string | null;
          /**
           * CurrencyAddon
           * @description Country currency info
           * @default null
           */
          currency: {
              /**
               * Code
               * @description Currency code (ISO 4217)
               * @default null
               */
              code: string | null;
              /**
               * Name
               * @description Currency name
               * @default null
               */
              name: string | null;
              /**
               * Symbol
               * @description Currency symbol
               * @default null
               */
              symbol: string | null;
          } | null;
          /**
           * Flag
           * @description URL to country flag image
           * @default null
           */
          flag: string | null;
          /**
           * Idd Code
           * @description International dialing prefix
           * @default null
           */
          idd_code: string | null;
          /**
           * Is Eu
           * @description Flag indicating if country is in the EU
           * @default null
           */
          is_eu: boolean | null;
          /**
           * LanguageAddon
           * @description Primary language info
           * @default null
           */
          language: {
              /**
               * Code
               * @description Language code
               * @default null
               */
              code: string | null;
              /**
               * Name
               * @description Language name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Name
           * @description Country name
           * @default null
           */
          name: string | null;
          /**
           * Numeric Code
           * @description Numeric ISO country code
           * @default null
           */
          numeric_code: string | null;
          /**
           * Population
           * @description Population count
           * @default null
           */
          population: number | null;
          /**
           * Tld
           * @description Top-level domain
           * @default null
           */
          tld: string | null;
          /**
           * Total Area
           * @description Total area in square kilometers
           * @default null
           */
          total_area: number | null;
          /**
           * Translations
           * @description Translations for country name
           * @default null
           */
          translations: {
              [key: string]: string;
          } | null;
      } | null;
      /**
       * Country Code
       * @description Two-character ISO 3166 country code
       * @default null
       */
      country_code: string | null;
      /**
       * Country Groupings
       * @description Country groupings addon data if requested
       * @default null
       */
      country_groupings: {
          /**
           * Acronym
           * @description Grouping acronym
           * @default null
           */
          acronym: string | null;
          /**
           * Name
           * @description Grouping name
           * @default null
           */
          name: string | null;
      }[] | null;
      /**
       * Country Name
       * @description Country name (ISO 3166)
       * @default null
       */
      country_name: string | null;
      /**
       * Credits Consumed
       * @description Lookup credits consumed
       * @default null
       */
      credits_consumed: number | null;
      /**
       * Domain
       * @description Domain name of the IP range
       * @default null
       */
      domain: string | null;
      /**
       * Elevation
       * @description Average city elevation in meters
       * @default null
       */
      elevation: number | null;
      /**
       * GeotargetingAddon
       * @description Geotargeting addon data if requested
       * @default null
       */
      geotargeting: {
          /**
           * Metro
           * @description Metro code for geotargeting
           * @default null
           */
          metro: string | null;
      } | null;
      /**
       * Idd Code
       * @description International dialing prefix
       * @default null
       */
      idd_code: string | null;
      /**
       * Isp
       * @description ISP or organization name
       * @default null
       */
      isp: string | null;
      /**
       * Latitude
       * @description Latitude of the location
       * @default null
       */
      latitude: number | null;
      /**
       * Longitude
       * @description Longitude of the location
       * @default null
       */
      longitude: number | null;
      /**
       * Mcc
       * @description Mobile Country Code
       * @default null
       */
      mcc: string | null;
      /**
       * Mnc
       * @description Mobile Network Code
       * @default null
       */
      mnc: string | null;
      /**
       * Mobile Brand
       * @description Mobile carrier brand
       * @default null
       */
      mobile_brand: string | null;
      /**
       * Net Speed
       * @description Network connection type
       * @default null
       */
      net_speed: string | null;
      /**
       * RegionAddon
       * @description Region addon data if requested
       * @default null
       */
      region: {
          /**
           * Code
           * @description Region code
           * @default null
           */
          code: string | null;
          /**
           * Name
           * @description Region or state name
           * @default null
           */
          name: string | null;
          /**
           * Translations
           * @description Translations for region name
           * @default null
           */
          translations: {
              [key: string]: string;
          } | null;
      } | null;
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
       * TimeZoneInfoAddon
       * @description Time zone info addon data if requested
       * @default null
       */
      time_zone_info: {
          /**
           * Current Time
           * @description Current local time
           * @default null
           */
          current_time: string | null;
          /**
           * Gmt Offset
           * @description Offset from GMT in seconds
           * @default null
           */
          gmt_offset: number | null;
          /**
           * Is Dst
           * @description Daylight saving time flag
           * @default null
           */
          is_dst: boolean | null;
          /**
           * Olson
           * @description Olson time zone identifier
           * @default null
           */
          olson: string | null;
          /**
           * Sunrise
           * @description Sunrise time
           * @default null
           */
          sunrise: string | null;
          /**
           * Sunset
           * @description Sunset time
           * @default null
           */
          sunset: string | null;
      } | null;
      /**
       * Usage Type
       * @description Usage type of the IP
       * @default null
       */
      usage_type: string | null;
      /**
       * Weather Station Code
       * @description Nearest weather station code
       * @default null
       */
      weather_station_code: string | null;
      /**
       * Weather Station Name
       * @description Nearest weather station name
       * @default null
       */
      weather_station_name: string | null;
      /**
       * Zip Code
       * @description ZIP or postal code
       * @default null
       */
      zip_code: string | null;
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
 * Type of IP2LOCATION's IP2LOCATION_GET_PROXY_DETECTION tool input.
 */
type IP2LOCATION_GET_PROXY_DETECTION_INPUT = {
  /**
   * Check
   * @description Set to 1 to return only remaining credits instead of lookup data
   * @default null
   * @constant
   */
  check: 1;
  /**
   * Ip
   * @description IPv4 or IPv6 address to check for proxy/VPN/TOR usage
   */
  ip?: string;
  /**
   * Package
   * @description Level of detail/package (PX1=basic to PX11=full)
   * @default PX1
   * @enum {string}
   */
  package: "PX1" | "PX2" | "PX3" | "PX4" | "PX5" | "PX6" | "PX7" | "PX8" | "PX9" | "PX10" | "PX11";
};

/**
 * Type of IP2LOCATION's IP2LOCATION_GET_PROXY_DETECTION tool output.
 */
type IP2LOCATION_GET_PROXY_DETECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * As
       * @description Autonomous System name
       * @default null
       */
      as: string | null;
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
       * Credits
       * @description Remaining credits if check=1
       * @default null
       */
      credits: number | null;
      /**
       * Credits Consumed
       * @description Credits consumed for this lookup
       * @default null
       */
      creditsConsumed: number | null;
      /**
       * Domain
       * @description Associated domain name
       * @default null
       */
      domain: string | null;
      /**
       * Is Proxy
       * @description 'YES' if proxy/VPN/TOR, otherwise 'NO'
       * @default null
       */
      isProxy: string | null;
      /**
       * Isp
       * @description ISP or company name
       * @default null
       */
      isp: string | null;
      /**
       * Last Seen
       * @description Days since proxy last seen
       * @default null
       */
      lastSeen: number | null;
      /**
       * Provider
       * @description VPN provider name if available
       * @default null
       */
      provider: string | null;
      /**
       * Proxy Type
       * @description Proxy type (e.g., VPN, TOR, DCH, WEB, PUB, SES, RES)
       * @default null
       */
      proxyType: string | null;
      /**
       * Region Name
       * @description Region or state name
       * @default null
       */
      regionName: string | null;
      /**
       * Response
       * @description Request status, e.g., 'OK' or error message
       */
      response: string;
      /**
       * Threat
       * @description Threat tag (e.g., SPAM, SCANNER, BOTNET)
       * @default null
       */
      threat: string | null;
      /**
       * Usage Type
       * @description Usage type code (e.g., DCH, MOB, CDN)
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
 * Type of IP2LOCATION's IP2LOCATION_IO_BULK_IP_GEOLOCATION tool input.
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
 * Type of IP2LOCATION's IP2LOCATION_IO_BULK_IP_GEOLOCATION tool output.
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
 * Type of IP2LOCATION's IP2LOCATION_IO_DOMAIN_WHOIS tool input.
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
 * Type of IP2LOCATION's IP2LOCATION_IO_DOMAIN_WHOIS tool output.
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
 * Type of IP2LOCATION's IP2LOCATION_IO_GET_API_KEY tool input.
 */
type IP2LOCATION_IO_GET_API_KEY_INPUT = object;

/**
 * Type of IP2LOCATION's IP2LOCATION_IO_GET_API_KEY tool output.
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
 * Type of IP2LOCATION's IP2LOCATION_IO_IP2_WHOIS_HOSTED_DOMAIN tool input.
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
 * Type of IP2LOCATION's IP2LOCATION_IO_IP2_WHOIS_HOSTED_DOMAIN tool output.
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
 * Type of IP2LOCATION's IP2LOCATION_IP2LOCATION_DISTANCE tool input.
 */
type IP2LOCATION_IP2LOCATION_DISTANCE_INPUT = {
  /**
   * Ip1
   * @description First IPv4 or IPv6 address
   */
  ip1?: string;
  /**
   * Ip2
   * @description Second IPv4 or IPv6 address
   */
  ip2?: string;
};

/**
 * Type of IP2LOCATION's IP2LOCATION_IP2LOCATION_DISTANCE tool output.
 */
type IP2LOCATION_IP2LOCATION_DISTANCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Destination Ip
       * @description Second IP address
       */
      destination_ip: string;
      /**
       * Destination Latitude
       * @description Latitude of the second IP
       */
      destination_latitude: number;
      /**
       * Destination Longitude
       * @description Longitude of the second IP
       */
      destination_longitude: number;
      /**
       * Distance Km
       * @description Great-circle distance between the IPs in kilometers
       */
      distance_km: number;
      /**
       * Origin Ip
       * @description First IP address
       */
      origin_ip: string;
      /**
       * Origin Latitude
       * @description Latitude of the first IP
       */
      origin_latitude: number;
      /**
       * Origin Longitude
       * @description Longitude of the first IP
       */
      origin_longitude: number;
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
 * Type of IP2LOCATION's IP2LOCATION_IP2_WHOIS_DOMAIN_WHOIS tool input.
 */
type IP2LOCATION_IP2_WHOIS_DOMAIN_WHOIS_INPUT = {
  /**
   * Domain
   * @description Domain name to query, e.g. 'example.com'
   */
  domain?: string;
  /**
   * Format
   * @description Response format; either 'json' or 'xml'. Defaults to 'json'
   * @default json
   * @enum {string|null}
   */
  format: "json" | "xml" | null;
};

/**
 * Type of IP2LOCATION's IP2LOCATION_IP2_WHOIS_DOMAIN_WHOIS tool output.
 */
type IP2LOCATION_IP2_WHOIS_DOMAIN_WHOIS_OUTPUT = {
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
           * @description City name
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country name
           * @default null
           */
          country: string | null;
          /**
           * Email
           * @description Email address
           * @default null
           */
          email: string | null;
          /**
           * Fax
           * @description Fax number
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
           * @description Organization name
           * @default null
           */
          organization: string | null;
          /**
           * Phone
           * @description Phone number
           * @default null
           */
          phone: string | null;
          /**
           * Region
           * @description Region or state
           * @default null
           */
          region: string | null;
          /**
           * Street Address
           * @description Street address
           * @default null
           */
          street_address: string | null;
          /**
           * Zip Code
           * @description ZIP or postal code
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
           * @description City name
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country name
           * @default null
           */
          country: string | null;
          /**
           * Email
           * @description Email address
           * @default null
           */
          email: string | null;
          /**
           * Fax
           * @description Fax number
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
           * @description Organization name
           * @default null
           */
          organization: string | null;
          /**
           * Phone
           * @description Phone number
           * @default null
           */
          phone: string | null;
          /**
           * Region
           * @description Region or state
           * @default null
           */
          region: string | null;
          /**
           * Street Address
           * @description Street address
           * @default null
           */
          street_address: string | null;
          /**
           * Zip Code
           * @description ZIP or postal code
           * @default null
           */
          zip_code: string | null;
      } | null;
      /**
       * Create Date
       * @description Creation date (ISO 8601)
       * @default null
       */
      create_date: string | null;
      /**
       * Domain
       * @description Domain name
       */
      domain: string;
      /**
       * Domain Age
       * @description Domain age in days
       * @default null
       */
      domain_age: number | null;
      /**
       * Domain Id
       * @description Domain ID
       * @default null
       */
      domain_id: string | null;
      /**
       * Expire Date
       * @description Expiration date (ISO 8601)
       * @default null
       */
      expire_date: string | null;
      /**
       * Nameservers
       * @description List of name servers
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
           * @description City name
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country name
           * @default null
           */
          country: string | null;
          /**
           * Email
           * @description Email address
           * @default null
           */
          email: string | null;
          /**
           * Fax
           * @description Fax number
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
           * @description Organization name
           * @default null
           */
          organization: string | null;
          /**
           * Phone
           * @description Phone number
           * @default null
           */
          phone: string | null;
          /**
           * Region
           * @description Region or state
           * @default null
           */
          region: string | null;
          /**
           * Street Address
           * @description Street address
           * @default null
           */
          street_address: string | null;
          /**
           * Zip Code
           * @description ZIP or postal code
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
           * @description City name
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country name
           * @default null
           */
          country: string | null;
          /**
           * Email
           * @description Email address
           * @default null
           */
          email: string | null;
          /**
           * Fax
           * @description Fax number
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
           * @description Organization name
           * @default null
           */
          organization: string | null;
          /**
           * Phone
           * @description Phone number
           * @default null
           */
          phone: string | null;
          /**
           * Region
           * @description Region or state
           * @default null
           */
          region: string | null;
          /**
           * Street Address
           * @description Street address
           * @default null
           */
          street_address: string | null;
          /**
           * Zip Code
           * @description ZIP or postal code
           * @default null
           */
          zip_code: string | null;
      } | null;
      /**
       * Update Date
       * @description Last updated date (ISO 8601)
       * @default null
       */
      update_date: string | null;
      /**
       * Whois Server
       * @description WHOIS server name
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
 * Type of IP2LOCATION's IP2LOCATION_LIST_IPS tool input.
 */
type IP2LOCATION_LIST_IPS_INPUT = {
  /**
   * Type
   * @description IP version filter: 'ipv4', 'ipv6', or 'all' to return both.
   * @default all
   * @enum {string}
   */
  type: "ipv4" | "ipv6" | "all";
};

/**
 * Type of IP2LOCATION's IP2LOCATION_LIST_IPS tool output.
 */
type IP2LOCATION_LIST_IPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ips
       * @description List of sample IP addresses.
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
 * Type map of all available tool input types for toolkit "IP2LOCATION".
 */
export type IP2LOCATION_TOOL_INPUTS = {
  BULK_IP_GEOLOCATION: IP2LOCATION_BULK_IP_GEOLOCATION_INPUT
  CHECK_CREDITS: IP2LOCATION_CHECK_CREDITS_INPUT
  GET_HOSTED_DOMAINS: IP2LOCATION_GET_HOSTED_DOMAINS_INPUT
  GET_IP_GEOLOCATION: IP2LOCATION_GET_IP_GEOLOCATION_INPUT
  GET_PROXY_DETECTION: IP2LOCATION_GET_PROXY_DETECTION_INPUT
  IO_BULK_IP_GEOLOCATION: IP2LOCATION_IO_BULK_IP_GEOLOCATION_INPUT
  IO_DOMAIN_WHOIS: IP2LOCATION_IO_DOMAIN_WHOIS_INPUT
  IO_GET_API_KEY: IP2LOCATION_IO_GET_API_KEY_INPUT
  IO_IP2_WHOIS_HOSTED_DOMAIN: IP2LOCATION_IO_IP2_WHOIS_HOSTED_DOMAIN_INPUT
  IP2LOCATION_DISTANCE: IP2LOCATION_IP2LOCATION_DISTANCE_INPUT
  IP2_WHOIS_DOMAIN_WHOIS: IP2LOCATION_IP2_WHOIS_DOMAIN_WHOIS_INPUT
  LIST_IPS: IP2LOCATION_LIST_IPS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "IP2LOCATION".
 */
export type IP2LOCATION_TOOL_OUTPUTS = {
  BULK_IP_GEOLOCATION: IP2LOCATION_BULK_IP_GEOLOCATION_OUTPUT
  CHECK_CREDITS: IP2LOCATION_CHECK_CREDITS_OUTPUT
  GET_HOSTED_DOMAINS: IP2LOCATION_GET_HOSTED_DOMAINS_OUTPUT
  GET_IP_GEOLOCATION: IP2LOCATION_GET_IP_GEOLOCATION_OUTPUT
  GET_PROXY_DETECTION: IP2LOCATION_GET_PROXY_DETECTION_OUTPUT
  IO_BULK_IP_GEOLOCATION: IP2LOCATION_IO_BULK_IP_GEOLOCATION_OUTPUT
  IO_DOMAIN_WHOIS: IP2LOCATION_IO_DOMAIN_WHOIS_OUTPUT
  IO_GET_API_KEY: IP2LOCATION_IO_GET_API_KEY_OUTPUT
  IO_IP2_WHOIS_HOSTED_DOMAIN: IP2LOCATION_IO_IP2_WHOIS_HOSTED_DOMAIN_OUTPUT
  IP2LOCATION_DISTANCE: IP2LOCATION_IP2LOCATION_DISTANCE_OUTPUT
  IP2_WHOIS_DOMAIN_WHOIS: IP2LOCATION_IP2_WHOIS_DOMAIN_WHOIS_OUTPUT
  LIST_IPS: IP2LOCATION_LIST_IPS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's IP2LOCATION toolkit.
 */
export const IP2LOCATION = {
  slug: "ip2location",
  tools: {
    /**
     * Tool to retrieve geolocation information for multiple IP addresses in bulk. Use when you need batch processing of up to 1000 IPs per request.
     */
    BULK_IP_GEOLOCATION: "IP2LOCATION_BULK_IP_GEOLOCATION",
    /**
     * Tool to check remaining IP2Location API credits. Use after setting up authentication to monitor usage.
     */
    CHECK_CREDITS: "IP2LOCATION_CHECK_CREDITS",
    /**
     * Tool to retrieve hosted domains for a given IP address. Use when you need to list domains hosted on an IP.
     */
    GET_HOSTED_DOMAINS: "IP2LOCATION_GET_HOSTED_DOMAINS",
    /**
     * Tool to retrieve geolocation data for an IP address. Use when detailed IP location info is needed.
     */
    GET_IP_GEOLOCATION: "IP2LOCATION_GET_IP_GEOLOCATION",
    /**
     * Tool to detect if an IP is a proxy, VPN, or TOR exit node. Use when verifying anonymizing services.
     */
    GET_PROXY_DETECTION: "IP2LOCATION_GET_PROXY_DETECTION",
    /**
     * Tool to retrieve geolocation information for multiple IP addresses in bulk. Use when processing up to 1000 IPs at once.
     */
    IO_BULK_IP_GEOLOCATION: "IP2LOCATION_IO_BULK_IP_GEOLOCATION",
    /**
     * Tool to retrieve WHOIS information for a given domain. Use when you need domain registration and contact details via IP2WHOIS API.
     */
    IO_DOMAIN_WHOIS: "IP2LOCATION_IO_DOMAIN_WHOIS",
    /**
     * Tool to retrieve the configured API key. Use when authentication is needed for IP2Location.io requests.
     */
    IO_GET_API_KEY: "IP2LOCATION_IO_GET_API_KEY",
    /**
     * Tool to retrieve hosted domain names by IP address. Use when you need to list domains hosted on a given IP. Call after confirming the IP.
     */
    IO_IP2_WHOIS_HOSTED_DOMAIN: "IP2LOCATION_IO_IP2_WHOIS_HOSTED_DOMAIN",
    /**
     * Tool to calculate distance between two IPs. Use when geographic separation between two IP addresses is needed.
     */
    IP2LOCATION_DISTANCE: "IP2LOCATION_IP2LOCATION_DISTANCE",
    /**
     * Tool to retrieve WHOIS information for a domain. Use when you need domain registration details.
     */
    IP2_WHOIS_DOMAIN_WHOIS: "IP2LOCATION_IP2_WHOIS_DOMAIN_WHOIS",
    /**
     * Tool to list a curated set of test IPv4 and IPv6 addresses. Use when sample IPs are needed for IP2Location or IP2Proxy lookups during development or testing.
     */
    LIST_IPS: "IP2LOCATION_LIST_IPS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "IP2LOCATION".
 */
export type IP2LOCATION_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "IP2LOCATION".
 */
export type IP2LOCATION_TRIGGER_EVENTS = {}
