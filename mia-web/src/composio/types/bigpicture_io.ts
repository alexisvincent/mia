// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BIGPICTURE_IO's BIGPICTURE_IO_COMPANY_FIND tool input.
 */
type BIGPICTURE_IO_COMPANY_FIND_INPUT = {
  /**
   * Domain
   * @description The domain name of the company to look up (e.g., 'uber.com')
   */
  domain?: string;
};

/**
 * Type of BIGPICTURE_IO's BIGPICTURE_IO_COMPANY_FIND tool output.
 */
type BIGPICTURE_IO_COMPANY_FIND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Aliases
       * @description Alternative names for the company.
       * @default null
       */
      aliases: string[] | null;
      /**
       * Category
       * @description Company category information.
       */
      category?: {
          /**
           * Industry
           * @description Industry.
           * @default null
           */
          industry: string | null;
          /**
           * Industry Group
           * @description Industry group.
           * @default null
           */
          industryGroup: string | null;
          /**
           * Naics Code
           * @description NAICS code.
           * @default null
           */
          naicsCode: string | null;
          /**
           * Sector
           * @description Sector.
           * @default null
           */
          sector: string | null;
          /**
           * Sub Industry
           * @description Sub-industry.
           * @default null
           */
          subIndustry: string | null;
      };
      /**
       * Crunchbase
       * @description Crunchbase information.
       */
      crunchbase?: {
          /**
           * Handle
           * @description Crunchbase handle.
           * @default null
           */
          handle: string | null;
      };
      /**
       * Description
       * @description Company description.
       * @default null
       */
      description: string | null;
      /**
       * Domain
       * @description Company's domain name.
       * @default null
       */
      domain: string | null;
      /**
       * Domain Aliases
       * @description Domain aliases.
       * @default null
       */
      domainAliases: string[] | null;
      /**
       * Email Provider
       * @description Indicates if the company is an email provider.
       * @default null
       */
      emailProvider: boolean | null;
      /**
       * Facebook
       * @description Facebook information.
       */
      facebook?: {
          /**
           * Handle
           * @description Facebook handle.
           * @default null
           */
          handle: string | null;
      };
      /**
       * Founded Year
       * @description Year the company was founded.
       * @default null
       */
      foundedYear: number | null;
      /**
       * Geo
       * @description Geographical information.
       */
      geo?: {
          /**
           * City
           * @description City name.
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country name.
           * @default null
           */
          country: string | null;
          /**
           * Country Code
           * @description Country code.
           * @default null
           */
          countryCode: string | null;
          /**
           * Lat
           * @description Latitude.
           */
          lat?: number;
          /**
           * Lng
           * @description Longitude.
           */
          lng?: number;
          /**
           * Postal Code
           * @description Postal code.
           * @default null
           */
          postalCode: string | null;
          /**
           * State
           * @description State name.
           * @default null
           */
          state: string | null;
          /**
           * State Code
           * @description State code.
           * @default null
           */
          stateCode: string | null;
          /**
           * Street Name
           * @description Street name.
           * @default null
           */
          streetName: string | null;
          /**
           * Street Number
           * @description Street number.
           * @default null
           */
          streetNumber: string | null;
          /**
           * Sub Premise
           * @description Sub-premise information.
           * @default null
           */
          subPremise: string | null;
      };
      /**
       * Indexed At
       * @description Date and time when the data was indexed.
       * @default null
       */
      indexedAt: string | null;
      /**
       * Legal Name
       * @description Legal name of the company.
       * @default null
       */
      legalName: string | null;
      /**
       * Linkedin
       * @description LinkedIn information.
       */
      linkedin?: {
          /**
           * Handle
           * @description LinkedIn handle.
           * @default null
           */
          handle: string | null;
          /**
           * Industry
           * @description LinkedIn industry.
           * @default null
           */
          industry: string | null;
      };
      /**
       * Location
       * @description Company's full address.
       * @default null
       */
      location: string | null;
      /**
       * Logo
       * @description URL to the company's logo.
       * @default null
       */
      logo: string | null;
      /**
       * Metrics
       * @description Company metrics.
       */
      metrics?: {
          /**
           * Alexa Global Rank
           * @description Alexa global rank.
           * @default null
           */
          alexaGlobalRank: number | null;
          /**
           * Alexa Us Rank
           * @description Alexa US rank.
           * @default null
           */
          alexaUsRank: number | null;
          /**
           * Annual Revenue
           * @description Annual revenue.
           * @default null
           */
          annualRevenue: number | null;
          /**
           * Employees
           * @description Number of employees.
           * @default null
           */
          employees: number | null;
          /**
           * Employees Range
           * @description Employee range.
           * @default null
           */
          employeesRange: string | null;
          /**
           * Estimated Annual Revenue
           * @description Estimated annual revenue.
           * @default null
           */
          estimatedAnnualRevenue: string | null;
          /**
           * Fiscal Year End
           * @description Fiscal year end.
           * @default null
           */
          fiscalYearEnd: string | null;
          /**
           * Market Cap
           * @description Market capitalization.
           * @default null
           */
          marketCap: number | null;
          /**
           * Raised
           * @description Amount raised.
           * @default null
           */
          raised: number | null;
          /**
           * Tranco Rank
           * @description Tranco rank.
           * @default null
           */
          trancoRank: number | null;
      };
      /**
       * Name
       * @description Company name.
       * @default null
       */
      name: string | null;
      /**
       * Phone
       * @description Company's phone number.
       * @default null
       */
      phone: string | null;
      /**
       * Tags
       * @description Tags associated with the company.
       * @default null
       */
      tags: string[] | null;
      /**
       * Tech
       * @description Technologies used by the company.
       * @default null
       */
      tech: string[] | null;
      /**
       * Ticker
       * @description Stock ticker symbol.
       * @default null
       */
      ticker: string | null;
      /**
       * Twitter
       * @description Twitter information.
       */
      twitter?: {
          /**
           * Avatar
           * @description Twitter avatar URL.
           * @default null
           */
          avatar: string | null;
          /**
           * Bio
           * @description Twitter bio.
           * @default null
           */
          bio: string | null;
          /**
           * Followers
           * @description Number of followers.
           * @default null
           */
          followers: number | null;
          /**
           * Following
           * @description Number of following.
           * @default null
           */
          following: number | null;
          /**
           * Handle
           * @description Twitter handle.
           * @default null
           */
          handle: string | null;
          /**
           * Id
           * @description Twitter ID.
           * @default null
           */
          id: string | null;
          /**
           * Location
           * @description Twitter location.
           * @default null
           */
          location: string | null;
          /**
           * Site
           * @description Twitter site URL.
           * @default null
           */
          site: string | null;
      };
      /**
       * Type
       * @description Company type (e.g., public, private).
       * @default null
       */
      type: string | null;
      /**
       * Url
       * @description Company's website URL.
       * @default null
       */
      url: string | null;
      /**
       * Utc Offset
       * @description UTC offset.
       * @default null
       */
      utcOffset: string | null;
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
 * Type of BIGPICTURE_IO's BIGPICTURE_IO_IP_TO_COMPANY tool input.
 */
type BIGPICTURE_IO_IP_TO_COMPANY_INPUT = {
  /**
   * Ip
   * Format: ipv4
   * @description The IP address to lookup
   */
  ip?: unknown;
};

/**
 * Type of BIGPICTURE_IO's BIGPICTURE_IO_IP_TO_COMPANY tool output.
 */
type BIGPICTURE_IO_IP_TO_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Asn */
      asn: {
          /**
           * Asn
           * @description The Autonomous System Number
           */
          asn: string;
          /**
           * Name
           * @description Organization name associated with the ASN record
           */
          name: string;
          /**
           * Route
           * @description The subnet for the ASN record
           */
          route: string;
      };
      /** Company */
      company: {
          /**
           * Domain
           * @description Domain of the company
           */
          domain: string;
          /**
           * Id
           * @description Internal ID of the company
           */
          id: string;
          /**
           * Legal Name
           * @description Legal name of the company
           */
          legalName: string;
          /**
           * Logo
           * @description URL of the company logo
           */
          logo: string;
          /**
           * Name
           * @description Name of the company
           */
          name: string;
          /**
           * Tags
           * @description A list of descriptive tags to describe the company
           */
          tags: string[];
          /**
           * Url
           * @description URL of the company's website
           */
          url: string;
      };
      /**
       * Confidence
       * @description The confidence score of the matched company on a scale between 0-1
       */
      confidence: number;
      /**
       * Fuzzy
       * @description False if the company has their own dedicated ASN block or WHOIS record, otherwise true
       */
      fuzzy: boolean;
      /** Geo */
      geo: {
          /**
           * City
           * @description City that this IP is located in
           */
          city: string;
          /**
           * Continent
           * @description Continent that this IP is located in
           */
          continent: string;
          /**
           * Continent Code
           * @description Continent code for this IP’s continent
           */
          continentCode: string;
          /**
           * Country
           * @description Country that this IP is located in
           */
          country: string;
          /**
           * Country Code
           * @description Country code for this IP’s country
           */
          countryCode: string;
          /**
           * Is Eu
           * @description Whether this IP is located in the European Union
           */
          isEU: boolean;
          /**
           * State
           * @description State that this IP is located in
           */
          state: string;
          /**
           * State Code
           * @description State code for this IP’s state
           */
          stateCode: string;
      };
      /**
       * Ip
       * @description The IP address that was requested
       */
      ip: string;
      /**
       * Type
       * @description The type of result
       */
      type: string;
      /** Whois */
      whois: {
          /**
           * Domain
           * @description Domain associated with the WHOIS record
           */
          domain: string;
          /**
           * Name
           * @description Organization name associated with the WHOIS record
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
 * Type of BIGPICTURE_IO's BIGPICTURE_IO_NAME_TO_DOMAIN_SEARCH tool input.
 */
type BIGPICTURE_IO_NAME_TO_DOMAIN_SEARCH_INPUT = {
  /**
   * Name
   * @description Company name to look up (e.g., 'Google')
   */
  name?: string;
};

/**
 * Type of BIGPICTURE_IO's BIGPICTURE_IO_NAME_TO_DOMAIN_SEARCH tool output.
 */
type BIGPICTURE_IO_NAME_TO_DOMAIN_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Up to 3 matching companies with domains and confidence scores
   */
  data?: {
      /**
       * Confidence
       * @description Confidence score between 0.0 and 1.0
       */
      confidence: number;
      /**
       * Domain
       * @description Predicted domain name
       */
      domain: string;
      /**
       * Name
       * @description Resolved company name
       */
      name: string;
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
  /**
   * Total Count
   * @description Total number of matches found
   */
  totalCount?: number;
};

/**
 * Type map of all available tool input types for toolkit "BIGPICTURE_IO".
 */
export type BIGPICTURE_IO_TOOL_INPUTS = {
  COMPANY_FIND: BIGPICTURE_IO_COMPANY_FIND_INPUT
  IP_TO_COMPANY: BIGPICTURE_IO_IP_TO_COMPANY_INPUT
  NAME_TO_DOMAIN_SEARCH: BIGPICTURE_IO_NAME_TO_DOMAIN_SEARCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BIGPICTURE_IO".
 */
export type BIGPICTURE_IO_TOOL_OUTPUTS = {
  COMPANY_FIND: BIGPICTURE_IO_COMPANY_FIND_OUTPUT
  IP_TO_COMPANY: BIGPICTURE_IO_IP_TO_COMPANY_OUTPUT
  NAME_TO_DOMAIN_SEARCH: BIGPICTURE_IO_NAME_TO_DOMAIN_SEARCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BIGPICTURE_IO toolkit.
 */
export const BIGPICTURE_IO = {
  slug: "bigpicture_io",
  tools: {
    /**
     * Tool to lookup company data by domain name. use when you need detailed company profile by providing a website domain. use after confirming domain correctness.
     */
    COMPANY_FIND: "BIGPICTURE_IO_COMPANY_FIND",
    /**
     * Tool to lookup company by ip address. use after obtaining an ip to get detailed company info.
     */
    IP_TO_COMPANY: "BIGPICTURE_IO_IP_TO_COMPANY",
    /**
     * Tool to find company domain(s) by company name. use when you have a company name and need up to 3 likely domains.
     */
    NAME_TO_DOMAIN_SEARCH: "BIGPICTURE_IO_NAME_TO_DOMAIN_SEARCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BIGPICTURE_IO".
 */
export type BIGPICTURE_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BIGPICTURE_IO".
 */
export type BIGPICTURE_IO_TRIGGER_EVENTS = {}
