// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of IP2WHOIS's IP2WHOIS_DOMAIN_LOOKUP tool input.
 */
type IP2WHOIS_DOMAIN_LOOKUP_INPUT = {
  /**
   * Domain
   * @description Domain name to look up
   */
  domain?: string;
  /**
   * Format
   * @description Response format, either 'json' or 'xml'
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
};

/**
 * Type of IP2WHOIS's IP2WHOIS_DOMAIN_LOOKUP tool output.
 */
type IP2WHOIS_DOMAIN_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Admin
       * @description Administrative contact details
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
           */
          name: string;
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
           * @description Contact region
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
           * @description Contact ZIP code
           * @default null
           */
          zip_code: string | null;
      };
      /**
       * Billing
       * @description Billing contact details
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
           */
          name: string;
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
           * @description Contact region
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
           * @description Contact ZIP code
           * @default null
           */
          zip_code: string | null;
      };
      /**
       * Create Date
       * @description Creation date
       */
      create_date: string;
      /**
       * Domain
       * @description Domain name
       */
      domain: string;
      /**
       * Domain Age
       * @description Age of the domain in days
       */
      domain_age: number;
      /**
       * Domain Id
       * @description Domain ID
       */
      domain_id: string;
      /**
       * Expire Date
       * @description Expiration date
       */
      expire_date: string;
      /**
       * Nameservers
       * @description List of name servers
       */
      nameservers: string[];
      /**
       * Registrant
       * @description Registrant contact details
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
           */
          name: string;
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
           * @description Contact region
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
           * @description Contact ZIP code
           * @default null
           */
          zip_code: string | null;
      };
      /**
       * Registrar
       * @description Registrar details
       */
      registrar: {
          /**
           * Iana Id
           * @description Registrar IANA ID
           */
          iana_id: string;
          /**
           * Name
           * @description Registrar name
           */
          name: string;
          /**
           * Url
           * @description Registrar website URL
           */
          url: string;
      };
      /**
       * Status
       * @description Domain status
       */
      status: string;
      /**
       * Tech
       * @description Technical contact details
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
           */
          name: string;
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
           * @description Contact region
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
           * @description Contact ZIP code
           * @default null
           */
          zip_code: string | null;
      };
      /**
       * Update Date
       * @description Last update date
       */
      update_date: string;
      /**
       * Whois Server
       * @description WHOIS server
       */
      whois_server: string;
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
 * Type of IP2WHOIS's IP2WHOIS_HOSTED_DOMAINS_LOOKUP tool input.
 */
type IP2WHOIS_HOSTED_DOMAINS_LOOKUP_INPUT = {
  /**
   * Format
   * @description Response format; one of 'json' or 'xml'
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
   * Page
   * @description Page number for paginated results, must be >= 1
   * @default 1
   */
  page: number;
};

/**
 * Type of IP2WHOIS's IP2WHOIS_HOSTED_DOMAINS_LOOKUP tool output.
 */
type IP2WHOIS_HOSTED_DOMAINS_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domains
       * @description List of hosted domain names
       */
      domains: string[];
      /**
       * Ip
       * @description Queried IP address
       */
      ip: string;
      /**
       * Page
       * @description Current result page
       */
      page: number;
      /**
       * Per Page
       * @description Number of domains per page; varies by subscription plan (Free=1, Starter=5, Plus=20, Security=100)
       */
      per_page: number;
      /**
       * Total Domains
       * @description Total number of hosted domains found
       */
      total_domains: number;
      /**
       * Total Pages
       * @description Total number of pages available
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
 * Type map of all available tool input types for toolkit "IP2WHOIS".
 */
export type IP2WHOIS_TOOL_INPUTS = {
  DOMAIN_LOOKUP: IP2WHOIS_DOMAIN_LOOKUP_INPUT
  HOSTED_DOMAINS_LOOKUP: IP2WHOIS_HOSTED_DOMAINS_LOOKUP_INPUT
}

/**
 * Type map of all available tool input types for toolkit "IP2WHOIS".
 */
export type IP2WHOIS_TOOL_OUTPUTS = {
  DOMAIN_LOOKUP: IP2WHOIS_DOMAIN_LOOKUP_OUTPUT
  HOSTED_DOMAINS_LOOKUP: IP2WHOIS_HOSTED_DOMAINS_LOOKUP_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's IP2WHOIS toolkit.
 */
export const IP2WHOIS = {
  slug: "ip2whois",
  tools: {
    /**
     * Tool to retrieve WHOIS information for a domain. Use when you need registrar and contact details for a specific domain.
     */
    DOMAIN_LOOKUP: "IP2WHOIS_DOMAIN_LOOKUP",
    /**
     * Tool to retrieve hosted domains for a given IP address. Use this after validating the IP.
     */
    HOSTED_DOMAINS_LOOKUP: "IP2WHOIS_HOSTED_DOMAINS_LOOKUP",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "IP2WHOIS".
 */
export type IP2WHOIS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "IP2WHOIS".
 */
export type IP2WHOIS_TRIGGER_EVENTS = {}
