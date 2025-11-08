// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_AM_I_ROAMING_API tool input.
 */
type BIG_DATA_CLOUD_AM_I_ROAMING_API_INPUT = {
  /**
   * Latitude
   * @description Latitude value as per WGS 84 reference system, must be between -90 and 90.
   */
  latitude?: number;
  /**
   * Longitude
   * @description Longitude value as per WGS 84 reference system, must be between -180 and 180.
   */
  longitude?: number;
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_AM_I_ROAMING_API tool output.
 */
type BIG_DATA_CLOUD_AM_I_ROAMING_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Is Roaming
       * @description Roaming estimate result; true if IP geolocation and GPS indicate roaming.
       */
      isRoaming: boolean;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_ASN_EXTENDED_RECEIVING_FROM_INFO_API tool input.
 */
type BIG_DATA_CLOUD_ASN_EXTENDED_RECEIVING_FROM_INFO_API_INPUT = {
  /**
   * Asn
   * @description Autonomous System Number, either numeric (e.g., '123'), 'AS123', or 'ASN123'.
   */
  asn?: string;
  /**
   * Batch Size
   * @description Number of receivingFrom entries to retrieve; hard limit is 50.
   */
  batchSize?: number;
  /**
   * Locality Language
   * @description Preferred language for locality names in ISO 639-1 format (default: 'en'); falls back to English or native names if unavailable.
   * @default en
   */
  localityLanguage: string;
  /**
   * Offset
   * @description Number of receivingFrom entries to skip for pagination.
   */
  offset?: number;
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_ASN_EXTENDED_RECEIVING_FROM_INFO_API tool output.
 */
type BIG_DATA_CLOUD_ASN_EXTENDED_RECEIVING_FROM_INFO_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asn
       * @description Autonomous System Number string.
       */
      asn: string;
      /**
       * Asn Numeric
       * @description Autonomous System Number as integer.
       */
      asnNumeric: number;
      /**
       * Name
       * @description Registered name.
       */
      name: string;
      /**
       * Organisation
       * @description Registered organisation.
       */
      organisation: string;
      /**
       * Rank
       * @description Global rank by total number of IP addresses announced.
       */
      rank: number;
      /**
       * Rank Text
       * @description Global rank including total, e.g., '#41 out of 78,673'.
       */
      rankText: string;
      /**
       * Receiving From
       * @description List of active Autonomous Systems sending traffic to this ASN, limited by batchSize.
       */
      receivingFrom: {
          /**
           * Asn
           * @description Autonomous System Number string.
           */
          asn: string;
          /**
           * Asn Numeric
           * @description Autonomous System Number as integer.
           */
          asnNumeric: number;
          /**
           * Name
           * @description Registered name.
           */
          name: string;
          /**
           * Organisation
           * @description Registered organisation.
           */
          organisation: string;
          /**
           * Rank
           * @description Global rank by total number of IP addresses announced.
           */
          rank: number;
          /**
           * Rank Text
           * @description Global rank including total, e.g., '#5 out of 78,673'.
           */
          rankText: string;
          /**
           * Registered Country
           * @description Registered Country ISO 3166-1 Alpha-2 code.
           */
          registeredCountry: string;
          /**
           * Registered Country Name
           * @description Registered Country localised name.
           */
          registeredCountryName: string;
          /**
           * Registry
           * @description Regional Internet Registry (RIR) the AS is registered with.
           */
          registry: string;
          /**
           * Total Ipv4 Addresses
           * @description Total number of IPv4 addresses announced by the AS.
           */
          totalIpv4Addresses: number;
      }[];
      /**
       * Registered Country
       * @description Registered Country ISO 3166-1 Alpha-2 code.
       */
      registeredCountry: string;
      /**
       * Registered Country Name
       * @description Registered Country localised name.
       */
      registeredCountryName: string;
      /**
       * Registration Date
       * @description Registration date in 'yyyy-mm-dd' format.
       */
      registrationDate: string;
      /**
       * Registration Last Change
       * @description Registration modification date in 'yyyy-mm-dd' format.
       */
      registrationLastChange: string;
      /**
       * Registry
       * @description Regional Internet Registry (RIR) the AS is registered with.
       */
      registry: string;
      /**
       * Total Ipv4 Addresses
       * @description Total number of IPv4 addresses announced by the AS.
       */
      totalIpv4Addresses: number;
      /**
       * Total Ipv4 Bogon Prefixes
       * @description Total number of IPv4 bogon prefixes announced.
       */
      totalIpv4BogonPrefixes: number;
      /**
       * Total Ipv4 Prefixes
       * @description Total number of IPv4 BGP prefixes announced.
       */
      totalIpv4Prefixes: number;
      /**
       * Total Ipv6 Bogon Prefixes
       * @description Total number of IPv6 bogon prefixes announced.
       */
      totalIpv6BogonPrefixes: number;
      /**
       * Total Ipv6 Prefixes
       * @description Total number of IPv6 BGP prefixes announced.
       */
      totalIpv6Prefixes: number;
      /**
       * Total Receiving From
       * @description Total number of active Autonomous Systems receiving traffic from this ASN.
       */
      totalReceivingFrom: number;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_ASN_EXTENDED_TRANSIT_TO_INFO_API tool input.
 */
type BIG_DATA_CLOUD_ASN_EXTENDED_TRANSIT_TO_INFO_API_INPUT = {
  /**
   * Asn
   * @description Autonomous System Number as numeric or ASN format (e.g. '123', 'AS123', 'ASN123')
   */
  asn?: string;
  /**
   * Batch Size
   * @description Number of transitTo entries to retrieve (max 50)
   */
  batchSize?: number;
  /**
   * Locality Language
   * @description Preferred language for locality names in ISO 639-1 format, default 'en'. Falls back to English or native name if unavailable.
   * @default en
   */
  localityLanguage: string | null;
  /**
   * Offset
   * @description Number of transitTo entries to skip
   */
  offset?: number;
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_ASN_EXTENDED_TRANSIT_TO_INFO_API tool output.
 */
type BIG_DATA_CLOUD_ASN_EXTENDED_TRANSIT_TO_INFO_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_ASN_RANK_LIST_API tool input.
 */
type BIG_DATA_CLOUD_ASN_RANK_LIST_API_INPUT = {
  /**
   * Batch Size
   * @description Requested batch size. Optional, default is 10. Maximum value is 1000.
   * @default 10
   */
  batchSize: number;
  /**
   * Locality Language
   * @description Preferred language for locality names in ISO 639-1 format. Optional, default is 'en'.
   * @default en
   */
  localityLanguage: string;
  /**
   * Offset
   * @description Offset into the ranking list. Optional, default is 0.
   * @default 0
   */
  offset: number;
  /**
   * Order
   * @description Sort order. Optional, default is 'asc'.
   * @default asc
   * @enum {string}
   */
  order: "asc" | "desc";
  /**
   * Sort
   * @description Field to sort by. Optional, default is 'rank'.
   * @default rank
   * @enum {string}
   */
  sort: "rank" | "asn" | "asnNumeric" | "organisation" | "countryCode";
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_ASN_RANK_LIST_API tool output.
 */
type BIG_DATA_CLOUD_ASN_RANK_LIST_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asns
       * @description List of ASN ranking entries.
       */
      asns: {
          /**
           * Asn
           * @description Autonomous System Number string.
           */
          asn: string;
          /**
           * Asn Numeric
           * @description Autonomous System Number as integer.
           */
          asnNumeric: number;
          /**
           * Name
           * @description Registered name.
           */
          name: string;
          /**
           * Organisation
           * @description Registered organisation.
           */
          organisation: string;
          /**
           * Rank
           * @description Global rank by total number of IPv4 addresses announced.
           */
          rank: number;
          /**
           * Rank Text
           * @description Rank text including position and total count.
           */
          rankText: string;
          /**
           * Registered Country
           * @description Registered country ISO 3166-1 alpha-2 code.
           */
          registeredCountry: string;
          /**
           * Registered Country Name
           * @description Registered country name in requested language.
           */
          registeredCountryName: string;
          /**
           * Registry
           * @description Regional Internet Registry (RIR).
           */
          registry: string;
          /**
           * Total Ipv4 Addresses
           * @description Total IPv4 addresses announced by the AS.
           */
          totalIpv4Addresses: number;
      }[];
      /**
       * Batch
       * @description Number of entries in the current batch.
       */
      batch: number;
      /**
       * Offset
       * @description Number of entries skipped.
       */
      offset: number;
      /**
       * Total
       * @description Total number of ASN entries available.
       */
      total: number;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_BGP_ACTIVE_PREFIXES_API tool input.
 */
type BIG_DATA_CLOUD_BGP_ACTIVE_PREFIXES_API_INPUT = {
  /**
   * Asn
   * @description Autonomous System Number as numeric or ASN format (e.g., '123', 'AS123', or 'ASN123')
   */
  asn?: string;
  /**
   * Batch Size
   * @description Requested batch size (max 1000)
   * @default 10
   */
  batchSize: number;
  /**
   * Bogons Only
   * @description Limit to bogon routes only or not
   * @default false
   */
  bogonsOnly: boolean;
  /**
   * Isv4
   * @description True for IPv4 prefixes only, False for IPv6 prefixes
   * @default true
   */
  isv4: boolean;
  /**
   * Locality Language
   * @description Preferred language for locality names (ISO 639-1 code)
   * @default en
   */
  localityLanguage: string;
  /**
   * Offset
   * @description Offset, number of entries to skip
   * @default 0
   */
  offset: number;
  /**
   * Order
   * @description Sort order
   * @default asc
   * @enum {string}
   */
  order: "asc" | "desc";
  /**
   * Sort
   * @description Field to sort by
   * @default bgpPrefixNetworkAddress
   * @enum {string}
   */
  sort: "bgpPrefix" | "bgpPrefixNetworkAddress" | "bgpPrefixLastAddress" | "registryStatus" | "isBogon" | "isAnnounced" | "carriers";
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_BGP_ACTIVE_PREFIXES_API tool output.
 */
type BIG_DATA_CLOUD_BGP_ACTIVE_PREFIXES_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Batch
       * @description Number of entries in current batch
       * @default null
       */
      batch: number | null;
      /**
       * Offset
       * @description Number of entries skipped
       * @default null
       */
      offset: number | null;
      /**
       * Prefixes
       * @description Array of prefix entries returned
       * @default null
       */
      prefixes: {
          /**
           * Bgp Prefix
           * @description BGP prefix in CIDR format
           * @default null
           */
          bgpPrefix: string | null;
          /**
           * Bgp Prefix Last Address
           * @description Last address of the prefix
           * @default null
           */
          bgpPrefixLastAddress: string | null;
          /**
           * Bgp Prefix Network Address
           * @description Network (first) address of the prefix
           * @default null
           */
          bgpPrefixNetworkAddress: string | null;
          /**
           * Carriers
           * @description List of ASes announcing this prefix
           * @default null
           */
          carriers: {
              /**
               * Asn
               * @description Autonomous System Number string
               * @default null
               */
              asn: string | null;
              /**
               * Asn Numeric
               * @description Autonomous System Number (numeric)
               * @default null
               */
              asnNumeric: number | null;
              /**
               * Name
               * @description Registered name
               * @default null
               */
              name: string | null;
              /**
               * Organisation
               * @description Registered organisation
               * @default null
               */
              organisation: string | null;
              /**
               * Rank
               * @description Global rank by total number of IP addresses announced
               * @default null
               */
              rank: number | null;
              /**
               * Rank Text
               * @description Global rank with total count as text
               * @default null
               */
              rankText: string | null;
              /**
               * Registered Country
               * @description Registered country ISO 3166-1 alpha-2 code
               * @default null
               */
              registeredCountry: string | null;
              /**
               * Registered Country Name
               * @description Registered country localised name
               * @default null
               */
              registeredCountryName: string | null;
              /**
               * Registry
               * @description Regional Internet Registry (RIR)
               * @default null
               */
              registry: string | null;
              /**
               * Total Ipv4 Addresses
               * @description Total number of IP addresses announced by the AS
               * @default null
               */
              totalIpv4Addresses: number | null;
          }[] | null;
          /**
           * Is Announced
           * @description Whether the prefix is announced on BGP
           * @default null
           */
          isAnnounced: boolean | null;
          /**
           * Is Bogon
           * @description Whether the prefix is a bogon route
           * @default null
           */
          isBogon: boolean | null;
          /**
           * Registry Status
           * @description Registration status
           * @default null
           */
          registryStatus: string | null;
      }[] | null;
      /**
       * Total
       * @description Total prefixes found
       * @default null
       */
      total: number | null;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_BIG_DATA_CLOUD_REVERSE_GEOCODING_WITH_TIMEZONE_API tool input.
 */
type BIG_DATA_CLOUD_BIG_DATA_CLOUD_REVERSE_GEOCODING_WITH_TIMEZONE_API_INPUT = {
  /**
   * Latitude
   * @description Latitude value as per WGS 84 reference system (GPS). Range: -90 to 90.
   */
  latitude?: number;
  /**
   * Locality Language
   * @description Preferred language for locality names in ISO 639-1 format, such as 'en', 'es'. Defaults to 'en'. Use 'default' to adjust to first administrative language.
   * @default en
   */
  localityLanguage: string | null;
  /**
   * Longitude
   * @description Longitude value as per WGS 84 reference system (GPS). Range: -180 to 180.
   */
  longitude?: number;
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_BIG_DATA_CLOUD_REVERSE_GEOCODING_WITH_TIMEZONE_API tool output.
 */
type BIG_DATA_CLOUD_BIG_DATA_CLOUD_REVERSE_GEOCODING_WITH_TIMEZONE_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * City
       * @description Most significant populated place
       */
      city: string;
      /**
       * Continent
       * @description Localized continent name
       */
      continent: string;
      /**
       * Continent Code
       * @description Continent code
       */
      continentCode: string;
      /**
       * Country Code
       * @description ISO 3166-1 country code
       */
      countryCode: string;
      /**
       * Country Name
       * @description Localized country name
       */
      countryName: string;
      /**
       * Fips
       * @description FIPS code object if available
       * @default null
       */
      fips: {
          /**
           * County
           * @description County-level FIPS code (three digits)
           */
          county: string;
          /**
           * County Subdivision
           * @description County subdivision FIPS code (five digits)
           */
          countySubdivision: string;
          /**
           * Csd Code
           * @description Census Subdivision (CSD) code
           * @default null
           */
          csdCode: string | null;
          /**
           * Place
           * @description Place FIPS code (five digits)
           */
          place: string;
          /**
           * State
           * @description State-level FIPS code (two digits)
           */
          state: string;
      } | null;
      /**
       * Latitude
       * @description Requested latitude
       */
      latitude: number;
      /**
       * Locality
       * @description Smallest recognized geographic area
       */
      locality: string;
      /**
       * Locality Info
       * @description Detailed administrative & informative info
       */
      localityInfo: {
          /**
           * Administrative
           * @description Administrative boundaries ordered by area (most significant first)
           */
          administrative: {
              /**
               * Admin Level
               * @description OpenStreetMap administrative level
               * @default null
               */
              adminLevel: number | null;
              /**
               * China Admin Code
               * @description China administrative division code
               * @default null
               */
              chinaAdminCode: string | null;
              /**
               * Description
               * @description Localized description in requested language
               * @default null
               */
              description: string | null;
              /**
               * Geoname Id
               * @description GeoNames.org identifier
               * @default null
               */
              geonameId: number | null;
              /**
               * Iso Code
               * @description ISO 3166-2 standard code
               * @default null
               */
              isoCode: string | null;
              /**
               * Iso Name
               * @description ISO 3166-2 standard name
               * @default null
               */
              isoName: string | null;
              /**
               * Name
               * @description Localized name in requested language
               */
              name: string;
              /**
               * Order
               * @description Order value by geographic area (most significant first)
               */
              order: number;
              /**
               * Wikidata Id
               * @description Wikidata item identifier
               * @default null
               */
              wikidataId: string | null;
          }[];
          /**
           * Informative
           * @description Non-administrative boundaries ordered by area
           */
          informative: {
              /**
               * Admin Level
               * @description OpenStreetMap administrative level
               * @default null
               */
              adminLevel: number | null;
              /**
               * China Admin Code
               * @description China administrative division code
               * @default null
               */
              chinaAdminCode: string | null;
              /**
               * Description
               * @description Localized description in requested language
               * @default null
               */
              description: string | null;
              /**
               * Geoname Id
               * @description GeoNames.org identifier
               * @default null
               */
              geonameId: number | null;
              /**
               * Iso Code
               * @description ISO 3166-2 standard code
               * @default null
               */
              isoCode: string | null;
              /**
               * Iso Name
               * @description ISO 3166-2 standard name
               * @default null
               */
              isoName: string | null;
              /**
               * Name
               * @description Localized name in requested language
               */
              name: string;
              /**
               * Order
               * @description Order value by geographic area (most significant first)
               */
              order: number;
              /**
               * Wikidata Id
               * @description Wikidata item identifier
               * @default null
               */
              wikidataId: string | null;
          }[];
      };
      /**
       * Locality Language Requested
       * @description `localityLanguage` input parameter received
       */
      localityLanguageRequested: string;
      /**
       * Longitude
       * @description Requested longitude
       */
      longitude: number;
      /**
       * Plus Code
       * @description Open Location Code
       */
      plusCode: string;
      /**
       * Postcode
       * @description Postcode if available
       * @default null
       */
      postcode: string | null;
      /**
       * Principal Subdivision
       * @description Localized principal subdivision name
       */
      principalSubdivision: string;
      /**
       * Principal Subdivision Code
       * @description ISO 3166-2 subdivision code
       */
      principalSubdivisionCode: string;
      /**
       * Time Zone
       * @description Timezone details
       */
      timeZone: {
          /**
           * Display Name
           * @description Human-readable time zone display name
           */
          displayName: string;
          /**
           * Effective Time Zone Full
           * @description Full time zone name, adjusted for DST
           */
          effectiveTimeZoneFull: string;
          /**
           * Effective Time Zone Short
           * @description Short time zone name, adjusted for DST
           */
          effectiveTimeZoneShort: string;
          /**
           * Iana Time Id
           * @description Time zone name in IANA format
           */
          ianaTimeId: string;
          /**
           * Is Daylight Saving Time
           * @description Indicates if DST is in effect
           */
          isDaylightSavingTime: boolean;
          /**
           * Local Time
           * @description Local time in ISO 8601 format
           */
          localTime: string;
          /**
           * Utc Offset
           * @description Offset from UTC as string
           */
          utcOffset: string;
          /**
           * Utc Offset Seconds
           * @description Offset from UTC in seconds
           */
          utcOffsetSeconds: number;
          /**
           * Utc Time
           * @description UTC time in ISO 8601 format, if available
           * @default null
           */
          utcTime: string | null;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_COUNTRY_BY_IP_ADDRESS_API tool input.
 */
type BIG_DATA_CLOUD_COUNTRY_BY_IP_ADDRESS_API_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address. If omitted, caller's IP is assumed.
   * @default null
   */
  ip: string | null;
  /**
   * Locality Language
   * @description Preferred language for locality names in ISO 639-1 format, e.g., 'en'; use 'default' to select the first administrative language.
   * @default en
   */
  localityLanguage: string | null;
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_COUNTRY_BY_IP_ADDRESS_API tool output.
 */
type BIG_DATA_CLOUD_COUNTRY_BY_IP_ADDRESS_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Detailed country information.
       */
      country: {
          /**
           * Calling Code
           * @description International calling code.
           */
          callingCode: string;
          /**
           * Country Flag Emoji
           * @description Emoji flag for the country.
           */
          countryFlagEmoji: string;
          /**
           * Currency
           * @description Country currency information.
           */
          currency: {
              /**
               * Code
               * @description ISO 4217 alphabetic currency code.
               */
              code: string;
              /**
               * Minor Units
               * @description Decimal exponent as per ISO 4217 (e.g., 2 for cents).
               */
              minorUnits: number;
              /**
               * Name
               * @description ISO 4217 English currency name.
               */
              name: string;
              /**
               * Numeric Code
               * @description ISO 4217 numeric code.
               */
              numericCode: number;
          };
          /**
           * Geoname Id
           * @description GeoNames identifier.
           */
          geonameId: number;
          /**
           * Is Independent
           * @description Indicates if the country is an independent state.
           */
          isIndependent: boolean;
          /**
           * Iso Admin Languages
           * @description List of administrative languages for the country.
           */
          isoAdminLanguages: {
              /**
               * Iso Alpha2
               * @description ISO 3166-1 Alpha-2 language code.
               */
              isoAlpha2: string;
              /**
               * Iso Alpha3
               * @description ISO 3166-1 Alpha-3 language code.
               */
              isoAlpha3: string;
              /**
               * Iso Name
               * @description Language name as per ISO standard.
               */
              isoName: string;
              /**
               * Native Name
               * @description Native name of the language.
               */
              nativeName: string;
          }[];
          /**
           * Iso Alpha2
           * @description ISO 3166-1 Alpha-2 country code.
           */
          isoAlpha2: string;
          /**
           * Iso Alpha3
           * @description ISO 3166-1 Alpha-3 country code.
           */
          isoAlpha3: string;
          /**
           * Iso Name
           * @description Short ISO country name.
           */
          isoName: string;
          /**
           * Iso Name Full
           * @description Full ISO country name.
           */
          isoNameFull: string;
          /**
           * M49 Code
           * @description United Nations M.49 numeric code.
           */
          m49Code: number;
          /**
           * Name
           * @description Localized country name.
           */
          name: string;
          /**
           * Un Region
           * @description UN-defined region name.
           */
          unRegion: string;
          /**
           * Wb Income Level
           * @description World Bank income level classification.
           */
          wbIncomeLevel: {
              /**
               * Id
               * @description World Bank income level identifier.
               */
              id: string;
              /**
               * Iso2 Code
               * @description ISO alpha-2 code for this income level.
               */
              iso2Code: string;
              /**
               * Value
               * @description Income level name as per World Bank classification.
               */
              value: string;
          };
          /**
           * Wb Region
           * @description World Bank region classification.
           */
          wbRegion: {
              /**
               * Id
               * @description World Bank region identifier.
               */
              id: string;
              /**
               * Iso2 Code
               * @description ISO alpha-2 code for this region.
               */
              iso2Code: string;
              /**
               * Value
               * @description Region name as per World Bank classification.
               */
              value: string;
          };
          /**
           * Wikidata Id
           * @description Wikidata QID for the country, if available.
           * @default null
           */
          wikidataId: string | null;
      };
      /**
       * Ip
       * @description Requested IP address in string format.
       */
      ip: string;
      /**
       * Is Reachable Globally
       * @description Indicates if the IP is globally reachable.
       */
      isReachableGlobally: boolean;
      /**
       * Last Updated
       * @description Timestamp of the last geolocation assessment (ISO 8601).
       */
      lastUpdated: string;
      /**
       * Locality Language Requested
       * @description Locale language code returned, matching the request parameter.
       */
      localityLanguageRequested: string;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_COUNTRY_INFO_API tool input.
 */
type BIG_DATA_CLOUD_COUNTRY_INFO_API_INPUT = {
  /**
   * Code
   * @description Country code in ISO 3166-1 Alpha-2 (e.g., 'US'), Alpha-3 (e.g., 'USA'), or numeric (e.g., '840') format.
   */
  code?: string;
  /**
   * Locality Language
   * @description Preferred language for locality names in ISO 639-1 format, such as 'en', 'es'. Defaults to 'en' and falls back to native names if unavailable.
   * @default en
   */
  localityLanguage: string | null;
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_COUNTRY_INFO_API tool output.
 */
type BIG_DATA_CLOUD_COUNTRY_INFO_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calling Code
       * @description Country calling code.
       */
      callingCode: string;
      /**
       * Country Flag Emoji
       * @description Country flag emoji.
       */
      countryFlagEmoji: string;
      /**
       * Currency
       * @description Currency details.
       */
      currency: {
          /**
           * Code
           * @description ISO 4217 alphabetic code.
           */
          code: string;
          /**
           * Minor Units
           * @description Number of minor units (currency exponent).
           */
          minorUnits: number;
          /**
           * Name
           * @description ISO 4217 English name.
           */
          name: string;
          /**
           * Numeric Code
           * @description ISO 4217 numeric code.
           */
          numericCode: number;
      };
      /**
       * Geoname Id
       * @description Geonames.org ID.
       */
      geonameId: number;
      /**
       * Is Independent
       * @description Indicates if the country/territory is independent.
       */
      isIndependent: boolean;
      /**
       * Iso Admin Languages
       * @description List of administrative languages.
       */
      isoAdminLanguages: {
          /**
           * Iso Alpha2
           * @description ISO 3166-1 Alpha-2 language code.
           */
          isoAlpha2: string;
          /**
           * Iso Alpha3
           * @description ISO 3166-1 Alpha-3 language code.
           */
          isoAlpha3: string;
          /**
           * Iso Name
           * @description Language name in English.
           */
          isoName: string;
          /**
           * Native Name
           * @description Language name in its native script.
           */
          nativeName: string;
      }[];
      /**
       * Iso Alpha2
       * @description ISO 3166-1 Alpha-2 code.
       */
      isoAlpha2: string;
      /**
       * Iso Alpha3
       * @description ISO 3166-1 Alpha-3 code.
       */
      isoAlpha3: string;
      /**
       * Iso Name
       * @description ISO short country name.
       */
      isoName: string;
      /**
       * Iso Name Full
       * @description ISO full country name.
       */
      isoNameFull: string;
      /**
       * M49 Code
       * @description United Nations M.49 numeric code.
       */
      m49Code: number;
      /**
       * Name
       * @description Localized country name based on localityLanguage.
       */
      name: string;
      /**
       * Un Region
       * @description Region name defined by the United Nations.
       */
      unRegion: string;
      /**
       * Wb Income Level
       * @description World Bank income level details.
       */
      wbIncomeLevel: {
          /**
           * Id
           * @description World Bank income level ID, e.g., 'HIC'.
           */
          id: string;
          /**
           * Iso2 Code
           * @description ISO 2-letter income level code.
           */
          iso2Code: string;
          /**
           * Value
           * @description Income level name, e.g., 'High income'.
           */
          value: string;
      };
      /**
       * Wb Region
       * @description World Bank region details.
       */
      wbRegion: {
          /**
           * Id
           * @description World Bank region ID, e.g., 'EAS'.
           */
          id: string;
          /**
           * Iso2 Code
           * @description ISO 2-letter region code.
           */
          iso2Code: string;
          /**
           * Value
           * @description Region name, e.g., 'East Asia & Pacific'.
           */
          value: string;
      };
      /**
       * Wikidata Id
       * @description Wikidata item identifier, if available.
       * @default null
       */
      wikidataId: string | null;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_EMAIL_ADDRESS_VERIFICATION_API tool input.
 */
type BIG_DATA_CLOUD_EMAIL_ADDRESS_VERIFICATION_API_INPUT = {
  /**
   * Email Address
   * Format: email
   * @description The email address to verify. Must be a valid email format.
   */
  emailAddress?: unknown;
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_EMAIL_ADDRESS_VERIFICATION_API tool output.
 */
type BIG_DATA_CLOUD_EMAIL_ADDRESS_VERIFICATION_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Input Data
       * @description The original email address provided for verification.
       */
      inputData: string;
      /**
       * Is Disposable
       * @description Whether the address is from a disposable-email provider.
       */
      isDisposable: boolean;
      /**
       * Is Known Spammer Domain
       * @description Whether the domain is known for sending spam.
       */
      isKnownSpammerDomain: boolean;
      /**
       * Is Mail Server Defined
       * @description Whether the domain has mail servers configured (MX records).
       */
      isMailServerDefined: boolean;
      /**
       * Is Syntax Valid
       * @description Whether the email syntax is valid.
       */
      isSyntaxValid: boolean;
      /**
       * Is Valid
       * @description Overall validity of the email address (all checks passed).
       */
      isValid: boolean;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_HAZARD_REPORT_API tool input.
 */
type BIG_DATA_CLOUD_HAZARD_REPORT_API_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address. If omitted, the caller's IP address is assumed.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_HAZARD_REPORT_API tool output.
 */
type BIG_DATA_CLOUD_HAZARD_REPORT_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Hosting Likelihood
       * @description Likelihood (0-10) that the IP is assigned to a hosting environment
       */
      hostingLikelihood: number;
      /**
       * I Cloud Private Relay
       * @description Determines whether the IP is detected as an Apple iCloud Private Relay address
       */
      iCloudPrivateRelay: boolean;
      /**
       * Is Blacklisted Blocklist De
       * @description Determines whether the IP is blacklisted at blocklist.de
       */
      isBlacklistedBlocklistDe: boolean;
      /**
       * Is Blacklisted Uceprotect
       * @description Determines whether the IP is blacklisted at uceprotect.net or backscatterer.org
       */
      isBlacklistedUceprotect: boolean;
      /**
       * Is Bogon
       * @description Indicates whether the IP is a bogon (reserved but announced via BGP)
       */
      isBogon: boolean;
      /**
       * Is Cellular
       * @description Determines whether the IP is detected in a cellular network
       */
      isCellular: boolean;
      /**
       * Is Hosting Asn
       * @description Determines whether the IP's ASN is likely used for hosting networks
       */
      isHostingAsn: boolean;
      /**
       * Is Known As Mail Server
       * @description Determines whether the IP is known to be used by an SMTP mail server
       */
      isKnownAsMailServer: boolean;
      /**
       * Is Known As Proxy
       * @description Determines whether the IP is known to be used by a proxy server
       */
      isKnownAsProxy: boolean;
      /**
       * Is Known As Public Router
       * @description Determines whether the IP is known to be used by a public router
       */
      isKnownAsPublicRouter: boolean;
      /**
       * Is Known As Tor Server
       * @description Determines whether the IP is known to be used by a TOR server
       */
      isKnownAsTorServer: boolean;
      /**
       * Is Known As Vpn
       * @description Determines whether the IP is known to be used by a VPN server
       */
      isKnownAsVpn: boolean;
      /**
       * Is Spamhaus Asn Drop
       * @description Determines whether the IP's ASN is listed on the Spamhaus ASN-DROP list
       */
      isSpamhausAsnDrop: boolean;
      /**
       * Is Spamhaus Drop
       * @description Determines whether the IP is listed on the Spamhaus DROP all-traffic list
       */
      isSpamhausDrop: boolean;
      /**
       * Is Spamhaus Edrop
       * @description Determines whether the IP is listed on the Spamhaus EDROP extension list
       */
      isSpamhausEdrop: boolean;
      /**
       * Is Unreachable
       * @description Determines whether the IP is not reachable over the public Internet
       */
      isUnreachable: boolean;
      /**
       * Mail Server Domain
       * @description Last detected SMTP domain name using this IP address
       * @default null
       */
      mailServerDomain: string | null;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_NETWORK_BY_CIDR tool input.
 */
type BIG_DATA_CLOUD_NETWORK_BY_CIDR_INPUT = {
  /**
   * Bogons Only
   * @description If true, returns only bogon networks.
   * @default false
   */
  bogonsOnly: boolean | null;
  /**
   * Cidr
   * @description CIDR range in 'x.x.x.x/y' format. x: 0-255, y: 0-32.
   */
  cidr?: string;
  /**
   * Depth Limit
   * @description How many hierarchical levels down to include in the response.
   * @default 1
   */
  depthLimit: number | null;
  /**
   * Locality Language
   * @description Preferred language for locality names in ISO 639-1 format, e.g., 'en', 'es'.
   * @default en
   */
  localityLanguage: string | null;
  /**
   * Subnets Batch Size
   * @description Number of subnetwork entries to retrieve (max 20).
   * @default 20
   */
  subnetsBatchSize: number | null;
  /**
   * Subnets Offset
   * @description Number of subnetwork entries to skip.
   * @default 0
   */
  subnetsOffset: number | null;
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_NETWORK_BY_CIDR tool output.
 */
type BIG_DATA_CLOUD_NETWORK_BY_CIDR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Carriers
       * @description List of AS announcing this network.
       */
      carriers: {
          /**
           * Asn
           * @description Autonomous System Number string.
           */
          asn: string;
          /**
           * Asn Numeric
           * @description Autonomous System Number (numeric).
           */
          asnNumeric: number;
          /**
           * Name
           * @description Registered name.
           */
          name: string;
          /**
           * Organisation
           * @description Registered organisation for the AS.
           */
          organisation: string;
          /**
           * Rank
           * @description Global rank by total addresses announced.
           */
          rank: number;
          /**
           * Rank Text
           * @description Global rank including total addresses announced.
           */
          rankText: string;
          /**
           * Registered Country
           * @description Registered Country ISO 3166-1 Alpha-2 code.
           */
          registeredCountry: string;
          /**
           * Registered Country Name
           * @description Registered Country name in requested language.
           */
          registeredCountryName: string;
          /**
           * Registration Date
           * @description Registration date in 'yyyy-mm-dd' format.
           */
          registrationDate: string;
          /**
           * Registration Last Change
           * @description Registration modification date in 'yyyy-mm-dd' format.
           */
          registrationLastChange: string;
          /**
           * Registry
           * @description Regional Internet Registry (RIR) for the AS.
           */
          registry: string;
          /**
           * Total Ipv4 Addresses
           * @description Total IPv4 addresses announced.
           */
          totalIpv4Addresses: number;
          /**
           * Total Ipv4 Bogon Prefixes
           * @description Total IPv4 bogon prefixes announced.
           */
          totalIpv4BogonPrefixes: number;
          /**
           * Total Ipv4 Prefixes
           * @description Total IPv4 BGP prefixes announced.
           */
          totalIpv4Prefixes: number;
          /**
           * Total Ipv6 Bogon Prefixes
           * @description Total IPv6 bogon prefixes announced.
           */
          totalIpv6BogonPrefixes: number;
          /**
           * Total Ipv6 Prefixes
           * @description Total IPv6 BGP prefixes announced.
           */
          totalIpv6Prefixes: number;
      }[];
      /**
       * Cidr
       * @description Queried CIDR range.
       */
      cidr: string;
      /**
       * Networks
       * @description List of contained networks; omitted if single network.
       * @default null
       */
      networks: {
          /**
           * Bogons Count
           * @description Number of bogon addresses in this block.
           */
          bogonsCount: number;
          /**
           * Cidr
           * @description CIDR for the network.
           */
          cidr: string;
          /**
           * Deep Count
           * @description Number of deeper hierarchical levels.
           */
          deepCount: number;
          /**
           * Size
           * @description Size of the CIDR block (number of addresses).
           */
          size: number;
          /**
           * Total Announced
           * @description Total number of addresses announced.
           */
          totalAnnounced: number;
          /**
           * Type
           * @description Type of CIDR block, e.g., 'range'.
           */
          type: string;
      }[] | null;
      /**
       * Parent
       * @description Parent network in CIDR format.
       */
      parent: string;
      /**
       * Subnets
       * @description List of subnetwork objects.
       */
      subnets: {
          /**
           * End Address
           * @description Last IPv4 address of the subnet.
           */
          endAddress: string;
          /**
           * Is Cellular
           * @description True if subnet serves cellular network clients.
           * @default null
           */
          isCellular: boolean | null;
          /**
           * Organisation
           * @description Organisation for the subnet.
           */
          organisation: string;
          /**
           * Registered Country
           * @description Registered Country ISO code.
           */
          registeredCountry: string;
          /**
           * Registered Country Name
           * @description Registered Country name in requested language.
           */
          registeredCountryName: string;
          /**
           * Start Address
           * @description First IPv4 address of the subnet.
           */
          startAddress: string;
      }[];
      /**
       * Total Subnets
       * @description Total number of subnetworks detected.
       */
      totalSubnets: number;
      /**
       * Via Carriers
       * @description AS detected at last hop before announced parties.
       */
      viaCarriers: {
          /**
           * Asn
           * @description Autonomous System Number string.
           */
          asn: string;
          /**
           * Asn Numeric
           * @description Autonomous System Number (numeric).
           */
          asnNumeric: number;
          /**
           * Name
           * @description Registered name.
           */
          name: string;
          /**
           * Organisation
           * @description Registered organisation for the AS.
           */
          organisation: string;
          /**
           * Rank
           * @description Global rank by total addresses announced.
           */
          rank: number;
          /**
           * Rank Text
           * @description Global rank including total addresses announced.
           */
          rankText: string;
          /**
           * Registered Country
           * @description Registered Country ISO 3166-1 Alpha-2 code.
           */
          registeredCountry: string;
          /**
           * Registered Country Name
           * @description Registered Country name in requested language.
           */
          registeredCountryName: string;
          /**
           * Registry
           * @description Regional Internet Registry (RIR) for the AS.
           */
          registry: string;
          /**
           * Total Ipv4 Addresses
           * @description Total IPv4 addresses announced.
           */
          totalIpv4Addresses: number;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_NETWORK_BY_IP_ADDRESS_API tool input.
 */
type BIG_DATA_CLOUD_NETWORK_BY_IP_ADDRESS_API_INPUT = {
  /**
   * Ip
   * @description IPv4 IP address in a string or numeric format, or IPv6 address. If omitted, the caller's IP address is assumed.
   * @default null
   */
  ip: string | null;
  /**
   * Locality Language
   * @description Preferred language for locality names in ISO 639-1 format, such as 'en', 'es'; defaults to 'en'.
   * @default en
   */
  localityLanguage: string | null;
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_NETWORK_BY_IP_ADDRESS_API tool output.
 */
type BIG_DATA_CLOUD_NETWORK_BY_IP_ADDRESS_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bgp Prefix
       * @description The BGP prefix detected on the global network.
       */
      bgpPrefix: string;
      /**
       * Bgp Prefix Last Address
       * @description BGP prefix last address.
       */
      bgpPrefixLastAddress: string;
      /**
       * Bgp Prefix Network Address
       * @description BGP prefix network (first) address.
       */
      bgpPrefixNetworkAddress: string;
      /**
       * Carriers
       * @description List of Autonomous Systems (AS) announcing this network on BGP.
       */
      carriers: {
          /**
           * Asn
           * @description Autonomous System Number string.
           */
          asn: string;
          /**
           * Asn Numeric
           * @description Autonomous System Number.
           */
          asnNumeric: number;
          /**
           * Name
           * @description Registered name.
           */
          name: string;
          /**
           * Organisation
           * @description Registered organisation.
           */
          organisation: string;
          /**
           * Rank
           * @description Global rank by total number of IP addresses announced.
           */
          rank: number;
          /**
           * Rank Text
           * @description Global rank text including total number of IP addresses announced.
           */
          rankText: string;
          /**
           * Registered Country
           * @description Registered Country ISO 3166-1 Alpha-2 code.
           */
          registeredCountry: string;
          /**
           * Registered Country Name
           * @description Registered Country name localized to requested language.
           */
          registeredCountryName: string;
          /**
           * Registration Date
           * @description Registration date in 'yyyy-MM-dd' format.
           */
          registrationDate: string;
          /**
           * Registration Last Change
           * @description Registration modification date in 'yyyy-MM-dd' format.
           */
          registrationLastChange: string;
          /**
           * Registry
           * @description Regional Internet Registry.
           */
          registry: string;
          /**
           * Total Ipv4 Addresses
           * @description Total number of IPv4 addresses announced by the AS.
           */
          totalIpv4Addresses: number;
          /**
           * Total Ipv4 Bogon Prefixes
           * @description Total number of IPv4 bogon prefixes announced by the AS.
           */
          totalIpv4BogonPrefixes: number;
          /**
           * Total Ipv4 Prefixes
           * @description Total number of IPv4 BGP prefixes announced by the AS.
           */
          totalIpv4Prefixes: number;
          /**
           * Total Ipv6 Bogon Prefixes
           * @description Total number of IPv6 bogon prefixes announced by the AS.
           */
          totalIpv6BogonPrefixes: number;
          /**
           * Total Ipv6 Prefixes
           * @description Total number of IPv6 BGP prefixes announced by the AS.
           */
          totalIpv6Prefixes: number;
      }[];
      /**
       * Ip
       * @description Requested IP address in string format.
       */
      ip: string;
      /**
       * Is Bogon
       * @description Indicates whether the IP address is a bogon prefix.
       */
      isBogon: boolean;
      /**
       * Is Reachable Globally
       * @description Indicates whether the network was announced on BGP and reachable globally.
       */
      isReachableGlobally: boolean;
      /**
       * Organisation
       * @description Organisation or segment the network is registered for.
       */
      organisation: string;
      /**
       * Registered Country
       * @description Registered Country ISO 3166-1 Alpha-2 code.
       */
      registeredCountry: string;
      /**
       * Registered Country Name
       * @description Registered Country name localized to requested language.
       */
      registeredCountryName: string;
      /**
       * Registry
       * @description Regional Internet Registry (RIR) for the network.
       */
      registry: string;
      /**
       * Registry Status
       * @description Registration status.
       */
      registryStatus: string;
      /**
       * Total Addresses
       * @description Number of IP addresses in the network.
       */
      totalAddresses: number;
      /**
       * Via Carriers
       * @description List of Autonomous Systems (AS) detected at the last hop before the announced parties.
       */
      viaCarriers: {
          /**
           * Asn
           * @description Autonomous System Number string.
           */
          asn: string;
          /**
           * Asn Numeric
           * @description Autonomous System Number.
           */
          asnNumeric: number;
          /**
           * Name
           * @description Registered name.
           */
          name: string;
          /**
           * Organisation
           * @description Registered organisation.
           */
          organisation: string;
          /**
           * Rank
           * @description Global rank by total number of IP addresses announced.
           */
          rank: number;
          /**
           * Rank Text
           * @description Global rank text including total number of IP addresses announced.
           */
          rankText: string;
          /**
           * Registered Country
           * @description Registered Country ISO 3166-1 Alpha-2 code.
           */
          registeredCountry: string;
          /**
           * Registered Country Name
           * @description Registered Country name localized to requested language.
           */
          registeredCountryName: string;
          /**
           * Registry
           * @description Regional Internet Registry.
           */
          registry: string;
          /**
           * Total Ipv4 Addresses
           * @description Total number of IPv4 addresses announced by this AS.
           */
          totalIpv4Addresses: number;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_PHONE_NUMBER_VALIDATION_BY_IP tool input.
 */
type BIG_DATA_CLOUD_PHONE_NUMBER_VALIDATION_BY_IP_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address. If omitted, uses caller's IP
   * @default null
   */
  ip: string | null;
  /**
   * Locality Language
   * @description Preferred language for locality names in ISO 639-1 format
   * @default en
   */
  localityLanguage: string;
  /**
   * Number
   * @description Phone number to validate
   */
  number?: string;
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_PHONE_NUMBER_VALIDATION_BY_IP tool output.
 */
type BIG_DATA_CLOUD_PHONE_NUMBER_VALIDATION_BY_IP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Country information
       */
      country: {
          /**
           * Calling Code
           * @description Calling code
           */
          callingCode: string;
          /**
           * Country Flag Emoji
           * @description Country emoji
           */
          countryFlagEmoji: string;
          /**
           * Currency
           * @description Currency information
           */
          currency: {
              /**
               * Code
               * @description ISO 4217 standard code
               */
              code: string;
              /**
               * Minor Units
               * @description ISO 4217 minor units exponent
               */
              minorUnits: number;
              /**
               * Name
               * @description ISO 4217 English name
               */
              name: string;
              /**
               * Numeric Code
               * @description ISO 4217 standard numeric code
               */
              numericCode: number;
          };
          /**
           * Geoname Id
           * @description GeoNames.org ID
           * @default null
           */
          geonameId: number | null;
          /**
           * Is Independent
           * @description Whether the country is independent according to ISO 3166
           */
          isIndependent: boolean;
          /**
           * Iso Admin Languages
           * @description Administrative languages defined by ISO 3166-1
           */
          isoAdminLanguages: {
              /**
               * Iso Alpha2
               * @description ISO 3166-1 Alpha-2 code
               */
              isoAlpha2: string;
              /**
               * Iso Alpha3
               * @description ISO 3166-1 Alpha-3 code
               */
              isoAlpha3: string;
              /**
               * Iso Name
               * @description Language name
               */
              isoName: string;
              /**
               * Native Name
               * @description Native language name
               */
              nativeName: string;
          }[];
          /**
           * Iso Alpha2
           * @description ISO 3166-1 Alpha-2 code
           */
          isoAlpha2: string;
          /**
           * Iso Alpha3
           * @description ISO 3166-1 Alpha-3 code
           */
          isoAlpha3: string;
          /**
           * Iso Name
           * @description ISO 3166-1 country name short
           */
          isoName: string;
          /**
           * Iso Name Full
           * @description ISO 3166-1 country name full
           */
          isoNameFull: string;
          /**
           * M49 Code
           * @description United Nations M.49 code
           */
          m49Code: number;
          /**
           * Name
           * @description Country name localized to the requested language
           */
          name: string;
          /**
           * Un Region
           * @description Region name as defined by the United Nations
           */
          unRegion: string;
          /**
           * Wb Income Level
           * @description World Bank income level info
           */
          wbIncomeLevel: {
              /**
               * Id
               * @description World Bank income level ID
               */
              id: string;
              /**
               * Iso2 Code
               * @description ISO 2 letter code
               */
              iso2Code: string;
              /**
               * Value
               * @description Income level name
               */
              value: string;
          };
          /**
           * Wb Region
           * @description World Bank region info
           */
          wbRegion: {
              /**
               * Id
               * @description World Bank region ID
               */
              id: string;
              /**
               * Iso2 Code
               * @description ISO 2 letter code
               */
              iso2Code: string;
              /**
               * Value
               * @description Region name
               */
              value: string;
          };
          /**
           * Wikidata Id
           * @description Wikidata item identifier, if available
           * @default null
           */
          wikidataId: string | null;
      };
      /**
       * E164 Format
       * @description Number formatted in E.164 standard format
       */
      e164Format: string;
      /**
       * International Format
       * @description Number formatted in International dial format
       */
      internationalFormat: string;
      /**
       * Is Valid
       * @description Indicates whether the number is valid
       */
      isValid: boolean;
      /**
       * Line Type
       * @description Line type detected
       */
      lineType: string;
      /**
       * Location
       * @description Estimated location localized to the requested language
       */
      location: string;
      /**
       * National Format
       * @description Number formatted in local dial format
       */
      nationalFormat: string;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_TIME_ZONE_BY_IP_ADDRESS_API tool input.
 */
type BIG_DATA_CLOUD_TIME_ZONE_BY_IP_ADDRESS_API_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address. Defaults to caller's IP if omitted.
   * @default null
   */
  ip: string | null;
  /**
   * Utc Reference
   * @description UTC time reference in Unix time (seconds). Defaults to current time if omitted or invalid.
   * @default null
   */
  utcReference: number | null;
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_TIME_ZONE_BY_IP_ADDRESS_API tool output.
 */
type BIG_DATA_CLOUD_TIME_ZONE_BY_IP_ADDRESS_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Display Name
       * @description Display name of the time zone.
       */
      displayName: string;
      /**
       * Effective Time Zone Full
       * @description Full time zone name adjusted for DST status.
       */
      effectiveTimeZoneFull: string;
      /**
       * Effective Time Zone Short
       * @description Short time zone name adjusted for DST status.
       */
      effectiveTimeZoneShort: string;
      /**
       * Iana Time Id
       * @description Time Zone name in IANA format.
       */
      ianaTimeId: string;
      /**
       * Is Daylight Saving Time
       * @description Whether daylight saving is in effect.
       */
      isDaylightSavingTime: boolean;
      /**
       * Local Time
       * @description Local time in ISO 8601 format.
       */
      localTime: string;
      /**
       * Utc Offset
       * @description Offset from UTC as string.
       */
      utcOffset: string;
      /**
       * Utc Offset Seconds
       * @description Offset from UTC in seconds.
       */
      utcOffsetSeconds: number;
      /**
       * Utc Time
       * @description UTC time in ISO 8601 format. Present only when utcReference is supplied and valid.
       * @default null
       */
      utcTime: string | null;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_TOR_EXIT_NODES_GEOLOCATED_API tool input.
 */
type BIG_DATA_CLOUD_TOR_EXIT_NODES_GEOLOCATED_API_INPUT = {
  /**
   * Batch Size
   * @description Requested batch size. Maximum value = 1000
   * @default 10
   */
  batchSize: number;
  /**
   * Locality Language
   * @description Preferred language for locality names in ISO 639-1 format
   * @default en
   */
  localityLanguage: unknown;
  /**
   * Offset
   * @description Offset: Number of entries to skip
   * @default 0
   */
  offset: number;
  /**
   * Order
   * @description Sort order
   * @default asc
   * @enum {string}
   */
  order: "asc" | "desc";
  /**
   * Sort
   * @description Sort response by a field value
   * @default ip
   * @enum {string}
   */
  sort: "ip" | "countryCode" | "countryName" | "carriers";
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_TOR_EXIT_NODES_GEOLOCATED_API tool output.
 */
type BIG_DATA_CLOUD_TOR_EXIT_NODES_GEOLOCATED_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Batch
       * @description Number of entries in the current batch
       */
      batch: number;
      /**
       * Nodes
       * @description Array of node entries returned
       */
      nodes: {
          /**
           * Carriers
           * @description List of Autonomous Systems (AS) announcing this IP address on BGP
           */
          carriers: {
              /**
               * Asn
               * @description Autonomous System Number string
               */
              asn: string;
              /**
               * Asn Numeric
               * @description Autonomous System Number
               */
              asnNumeric: number;
              /**
               * Name
               * @description Registered name
               */
              name: string;
              /**
               * Organisation
               * @description Registered Organisation
               */
              organisation: string;
              /**
               * Rank
               * @description Global rank by total number of IP addresses announced
               */
              rank: number;
              /**
               * Rank Text
               * @description Global rank text, including total number announced, e.g., '#5,764 out of 78,673'
               */
              rankText: string;
              /**
               * Registered Country
               * @description Registered Country ISO 3166-1 Alpha-2 code
               */
              registeredCountry: string;
              /**
               * Registered Country Name
               * @description Registered Country localised name as per 'localityLanguage'
               */
              registeredCountryName: string;
              /**
               * Registration Date
               * @description Registration date in 'yyyy-mm-dd' format
               * @default null
               */
              registrationDate: string | null;
              /**
               * Registration Last Change
               * @description Registration modification date in 'yyyy-mm-dd' format
               * @default null
               */
              registrationLastChange: string | null;
              /**
               * Registry
               * @description Regional Internet Registry the AS is registered with
               */
              registry: string;
              /**
               * Total Ipv4 Addresses
               * @description Total number of IPv4 addresses announced by the AS
               */
              totalIpv4Addresses: number;
              /**
               * Total Ipv4 Bogon Prefixes
               * @description Total number of IPv4 bogon prefixes announced by the AS
               */
              totalIpv4BogonPrefixes: number;
              /**
               * Total Ipv4 Prefixes
               * @description Total number of IPv4 BGP prefixes announced by the AS
               */
              totalIpv4Prefixes: number;
              /**
               * Total Ipv6 Bogon Prefixes
               * @description Total number of IPv6 bogon prefixes announced by the AS
               */
              totalIpv6BogonPrefixes: number;
              /**
               * Total Ipv6 Prefixes
               * @description Total number of IPv6 BGP prefixes announced by the AS
               */
              totalIpv6Prefixes: number;
          }[];
          /**
           * Country Code
           * @description Country ISO 3166-1 Alpha-2 code
           */
          countryCode: string;
          /**
           * Country Name
           * @description Country name localized to the language defined by 'localityLanguage'
           */
          countryName: string;
          /**
           * Ip
           * @description TOR node IP address
           */
          ip: string;
      }[];
      /**
       * Offset
       * @description Number of entries skipped
       */
      offset: number;
      /**
       * Total
       * @description Total number of nodes available
       */
      total: number;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_USER_AGENT_PARSER_API tool input.
 */
type BIG_DATA_CLOUD_USER_AGENT_PARSER_API_INPUT = {
  /**
   * User Agent Raw
   * @description Raw User-Agent string to parse (from HTTP request header).
   */
  userAgentRaw?: string;
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_USER_AGENT_PARSER_API tool output.
 */
type BIG_DATA_CLOUD_USER_AGENT_PARSER_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Device
       * @description Device type parsed from the user-agent string
       */
      device: string;
      /**
       * Family
       * @description Device or bot family, if available
       * @default null
       */
      family: string | null;
      /**
       * Is Mobile
       * @description True if the UA indicates a mobile device
       */
      isMobile: boolean;
      /**
       * Is Spider
       * @description True if the UA likely belongs to a bot or spider
       */
      isSpider: boolean;
      /**
       * Os
       * @description Operating system parsed from the user-agent string
       */
      os: string;
      /**
       * User Agent
       * @description Primary user agent identifier parsed from input
       */
      userAgent: string;
      /**
       * User Agent Display
       * @description Human-readable summary of the parsed user-agent
       * @default null
       */
      userAgentDisplay: string | null;
      /**
       * User Agent Raw
       * @description Echo of the raw user-agent string submitted
       */
      userAgentRaw: string;
      /**
       * Version Major
       * @description Major version number, if available
       * @default null
       */
      versionMajor: string | null;
      /**
       * Version Minor
       * @description Minor version number, if available
       * @default null
       */
      versionMinor: string | null;
      /**
       * Version Patch
       * @description Patch version, if available
       * @default null
       */
      versionPatch: string | null;
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
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_USER_RISK_API tool input.
 */
type BIG_DATA_CLOUD_USER_RISK_API_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to assess. If omitted, defaults to the caller's IP address.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of BIG_DATA_CLOUD's BIG_DATA_CLOUD_USER_RISK_API tool output.
 */
type BIG_DATA_CLOUD_USER_RISK_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Human-readable explanation of the risk level.
       */
      description: string;
      /**
       * Risk
       * @description Risk level classification of the queried IP address.
       * @enum {string}
       */
      risk: "Low" | "Moderate" | "High";
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
 * Type map of all available tool input types for toolkit "BIG_DATA_CLOUD".
 */
export type BIG_DATA_CLOUD_TOOL_INPUTS = {
  AM_I_ROAMING_API: BIG_DATA_CLOUD_AM_I_ROAMING_API_INPUT
  ASN_EXTENDED_RECEIVING_FROM_INFO_API: BIG_DATA_CLOUD_ASN_EXTENDED_RECEIVING_FROM_INFO_API_INPUT
  ASN_EXTENDED_TRANSIT_TO_INFO_API: BIG_DATA_CLOUD_ASN_EXTENDED_TRANSIT_TO_INFO_API_INPUT
  ASN_RANK_LIST_API: BIG_DATA_CLOUD_ASN_RANK_LIST_API_INPUT
  BGP_ACTIVE_PREFIXES_API: BIG_DATA_CLOUD_BGP_ACTIVE_PREFIXES_API_INPUT
  BIG_DATA_CLOUD_REVERSE_GEOCODING_WITH_TIMEZONE_API: BIG_DATA_CLOUD_BIG_DATA_CLOUD_REVERSE_GEOCODING_WITH_TIMEZONE_API_INPUT
  COUNTRY_BY_IP_ADDRESS_API: BIG_DATA_CLOUD_COUNTRY_BY_IP_ADDRESS_API_INPUT
  COUNTRY_INFO_API: BIG_DATA_CLOUD_COUNTRY_INFO_API_INPUT
  EMAIL_ADDRESS_VERIFICATION_API: BIG_DATA_CLOUD_EMAIL_ADDRESS_VERIFICATION_API_INPUT
  HAZARD_REPORT_API: BIG_DATA_CLOUD_HAZARD_REPORT_API_INPUT
  NETWORK_BY_CIDR: BIG_DATA_CLOUD_NETWORK_BY_CIDR_INPUT
  NETWORK_BY_IP_ADDRESS_API: BIG_DATA_CLOUD_NETWORK_BY_IP_ADDRESS_API_INPUT
  PHONE_NUMBER_VALIDATION_BY_IP: BIG_DATA_CLOUD_PHONE_NUMBER_VALIDATION_BY_IP_INPUT
  TIME_ZONE_BY_IP_ADDRESS_API: BIG_DATA_CLOUD_TIME_ZONE_BY_IP_ADDRESS_API_INPUT
  TOR_EXIT_NODES_GEOLOCATED_API: BIG_DATA_CLOUD_TOR_EXIT_NODES_GEOLOCATED_API_INPUT
  USER_AGENT_PARSER_API: BIG_DATA_CLOUD_USER_AGENT_PARSER_API_INPUT
  USER_RISK_API: BIG_DATA_CLOUD_USER_RISK_API_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BIG_DATA_CLOUD".
 */
export type BIG_DATA_CLOUD_TOOL_OUTPUTS = {
  AM_I_ROAMING_API: BIG_DATA_CLOUD_AM_I_ROAMING_API_OUTPUT
  ASN_EXTENDED_RECEIVING_FROM_INFO_API: BIG_DATA_CLOUD_ASN_EXTENDED_RECEIVING_FROM_INFO_API_OUTPUT
  ASN_EXTENDED_TRANSIT_TO_INFO_API: BIG_DATA_CLOUD_ASN_EXTENDED_TRANSIT_TO_INFO_API_OUTPUT
  ASN_RANK_LIST_API: BIG_DATA_CLOUD_ASN_RANK_LIST_API_OUTPUT
  BGP_ACTIVE_PREFIXES_API: BIG_DATA_CLOUD_BGP_ACTIVE_PREFIXES_API_OUTPUT
  BIG_DATA_CLOUD_REVERSE_GEOCODING_WITH_TIMEZONE_API: BIG_DATA_CLOUD_BIG_DATA_CLOUD_REVERSE_GEOCODING_WITH_TIMEZONE_API_OUTPUT
  COUNTRY_BY_IP_ADDRESS_API: BIG_DATA_CLOUD_COUNTRY_BY_IP_ADDRESS_API_OUTPUT
  COUNTRY_INFO_API: BIG_DATA_CLOUD_COUNTRY_INFO_API_OUTPUT
  EMAIL_ADDRESS_VERIFICATION_API: BIG_DATA_CLOUD_EMAIL_ADDRESS_VERIFICATION_API_OUTPUT
  HAZARD_REPORT_API: BIG_DATA_CLOUD_HAZARD_REPORT_API_OUTPUT
  NETWORK_BY_CIDR: BIG_DATA_CLOUD_NETWORK_BY_CIDR_OUTPUT
  NETWORK_BY_IP_ADDRESS_API: BIG_DATA_CLOUD_NETWORK_BY_IP_ADDRESS_API_OUTPUT
  PHONE_NUMBER_VALIDATION_BY_IP: BIG_DATA_CLOUD_PHONE_NUMBER_VALIDATION_BY_IP_OUTPUT
  TIME_ZONE_BY_IP_ADDRESS_API: BIG_DATA_CLOUD_TIME_ZONE_BY_IP_ADDRESS_API_OUTPUT
  TOR_EXIT_NODES_GEOLOCATED_API: BIG_DATA_CLOUD_TOR_EXIT_NODES_GEOLOCATED_API_OUTPUT
  USER_AGENT_PARSER_API: BIG_DATA_CLOUD_USER_AGENT_PARSER_API_OUTPUT
  USER_RISK_API: BIG_DATA_CLOUD_USER_RISK_API_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BIG_DATA_CLOUD toolkit.
 */
export const BIG_DATA_CLOUD = {
  slug: "big_data_cloud",
  tools: {
    /**
     * Tool to determine if the user is roaming based on their ip address and gps coordinates. use after obtaining device location to verify roaming status before mobile actions.
     */
    AM_I_ROAMING_API: "BIG_DATA_CLOUD_AM_I_ROAMING_API",
    /**
     * Tool to return upstream providers (receivingfrom) for a given asn. use when you need a paginated list of ases feeding traffic for the specified asn.
     */
    ASN_EXTENDED_RECEIVING_FROM_INFO_API: "BIG_DATA_CLOUD_ASN_EXTENDED_RECEIVING_FROM_INFO_API",
    /**
     * Tool to return downstream customers (transitto) for a given asn. use when you need a paginated list of ases receiving traffic from a specific asn.
     */
    ASN_EXTENDED_TRANSIT_TO_INFO_API: "BIG_DATA_CLOUD_ASN_EXTENDED_TRANSIT_TO_INFO_API",
    /**
     * Tool to fetch a ranked list of autonomous systems by ipv4 announcement volumes. use after you need to compare or analyze as ranks.
     */
    ASN_RANK_LIST_API: "BIG_DATA_CLOUD_ASN_RANK_LIST_API",
    /**
     * Tool to retrieve ipv4 or ipv6 prefixes currently announced on bgp. use when inspecting bgp routing announcements for a given asn.
     */
    BGP_ACTIVE_PREFIXES_API: "BIG_DATA_CLOUD_BGP_ACTIVE_PREFIXES_API",
    /**
     * Tool to return reverse geocoding and time zone info for given coordinates. use when you need both locality details and timezone data in one call.
     */
    BIG_DATA_CLOUD_REVERSE_GEOCODING_WITH_TIMEZONE_API: "BIG_DATA_CLOUD_BIG_DATA_CLOUD_REVERSE_GEOCODING_WITH_TIMEZONE_API",
    /**
     * Tool to geolocate an ip address and retrieve country details and demographics. use when you need country-level data after obtaining the target ip address.
     */
    COUNTRY_BY_IP_ADDRESS_API: "BIG_DATA_CLOUD_COUNTRY_BY_IP_ADDRESS_API",
    /**
     * Tool to fetch detailed country information by iso code. use when you need localized names, currencies, regions, and other metadata for a country.
     */
    COUNTRY_INFO_API: "BIG_DATA_CLOUD_COUNTRY_INFO_API",
    /**
     * Tool to verify email addresses for syntax, domain validity, and disposability. use after obtaining the email input.
     */
    EMAIL_ADDRESS_VERIFICATION_API: "BIG_DATA_CLOUD_EMAIL_ADDRESS_VERIFICATION_API",
    /**
     * Tool to fetch a cybersecurity hazard report for a specified ip address. use when assessing an ip's threat profile (vpn, proxy, blacklists, hosting risk).
     */
    HAZARD_REPORT_API: "BIG_DATA_CLOUD_HAZARD_REPORT_API",
    /**
     * Tool to retrieve bgp-announced networks within a specified cidr range. use when you need to analyze network announcements within a particular cidr after confirming the range format.
     */
    NETWORK_BY_CIDR: "BIG_DATA_CLOUD_NETWORK_BY_CIDR",
    /**
     * Tool to retrieve registry, asn, and bgp details for a given ip address’s network. use when you need detailed network information (e.g., asns, prefixes) after confirming the target ip.
     */
    NETWORK_BY_IP_ADDRESS_API: "BIG_DATA_CLOUD_NETWORK_BY_IP_ADDRESS_API",
    /**
     * Tool to validate phone numbers by inferring country from client ip. use when you want to validate a number without specifying country.
     */
    PHONE_NUMBER_VALIDATION_BY_IP: "BIG_DATA_CLOUD_PHONE_NUMBER_VALIDATION_BY_IP",
    /**
     * Tool to retrieve time zone information for a given ip address. use when you need dst status, utc offsets, and local/utc time for a specific ip.
     */
    TIME_ZONE_BY_IP_ADDRESS_API: "BIG_DATA_CLOUD_TIME_ZONE_BY_IP_ADDRESS_API",
    /**
     * Tool to list active tor exit nodes geolocated by country with carrier info. use when you need to detect or filter anonymous exit node traffic on your site.
     */
    TOR_EXIT_NODES_GEOLOCATED_API: "BIG_DATA_CLOUD_TOR_EXIT_NODES_GEOLOCATED_API",
    /**
     * Tool to parse a user-agent string into device, os, browser, and bot details. use when you have a raw user-agent header and need structured client info.
     */
    USER_AGENT_PARSER_API: "BIG_DATA_CLOUD_USER_AGENT_PARSER_API",
    /**
     * Tool to return a risk assessment for a user based on ip signals for fraud prevention. use after initial ip checks to decide whether to bypass or require captcha challenges.
     */
    USER_RISK_API: "BIG_DATA_CLOUD_USER_RISK_API",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BIG_DATA_CLOUD".
 */
export type BIG_DATA_CLOUD_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BIG_DATA_CLOUD".
 */
export type BIG_DATA_CLOUD_TRIGGER_EVENTS = {}
