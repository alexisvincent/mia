// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LEADFEEDER's LEADFEEDER_GET_ACCOUNTS tool input.
 */
type LEADFEEDER_GET_ACCOUNTS_INPUT = object;

/**
 * Type of LEADFEEDER's LEADFEEDER_GET_ACCOUNTS tool output.
 */
type LEADFEEDER_GET_ACCOUNTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accounts
       * @description List of accounts the authenticated user has access to.
       */
      accounts: {
          /**
           * Created At
           * @description The ISO 8601 timestamp when the account was created.
           */
          created_at: string;
          /**
           * Id
           * @description The unique identifier of the account.
           */
          id: string;
          /**
           * Name
           * @description The name of the account.
           */
          name: string;
          /**
           * Updated At
           * @description The ISO 8601 timestamp when the account was last updated.
           */
          updated_at: string;
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
 * Type of LEADFEEDER's LEADFEEDER_GET_ALL_VISITS tool input.
 */
type LEADFEEDER_GET_ALL_VISITS_INPUT = {
  /**
   * Account Id
   * @description The ID of the account to retrieve visits for
   */
  account_id?: string;
  /**
   * End Date
   * Format: date
   * @description Filter visits on or before this date (YYYY-MM-DD)
   */
  end_date?: unknown;
  /**
   * Lead Id
   * @description The ID of the lead to retrieve visits for
   */
  lead_id?: string;
  /**
   * Start Date
   * Format: date
   * @description Filter visits on or after this date (YYYY-MM-DD)
   */
  start_date?: unknown;
};

/**
 * Type of LEADFEEDER's LEADFEEDER_GET_ALL_VISITS tool output.
 */
type LEADFEEDER_GET_ALL_VISITS_OUTPUT = {
  /**
   * Data
   * @description Array of visit objects
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the visit
       */
      attributes: {
          /**
           * Campaign
           * @description Campaign associated with the visit
           * @default null
           */
          campaign: string | null;
          /**
           * Country Code
           * @description Country code of the visitor
           * @default null
           */
          country_code: string | null;
          /**
           * Date
           * @description Date of the visit (YYYY-MM-DD)
           * @default null
           */
          date: string | null;
          /**
           * Device Type
           * @description Type of device used during visit
           * @default null
           */
          device_type: string | null;
          /**
           * Ga Client Ids
           * @description Google Analytics client IDs associated with the visit
           * @default null
           */
          ga_client_ids: string[] | null;
          /**
           * Hour
           * @description Hour of the visit (0-23)
           * @default null
           */
          hour: number | null;
          /**
           * Keyword
           * @description Keyword used if visit came from a search engine
           * @default null
           */
          keyword: string | null;
          /**
           * Landing Page Path
           * @description Path of the landing page for the visit
           * @default null
           */
          landing_page_path: string | null;
          /**
           * Lead Id
           * @description Lead ID associated with the visit
           * @default null
           */
          lead_id: string | null;
          /**
           * Lf Client Id
           * @description Leadfeeder client ID for the visit
           * @default null
           */
          lf_client_id: number | null;
          /**
           * Medium
           * @description Medium of the visit, e.g., 'cpc'
           * @default null
           */
          medium: string | null;
          /**
           * Page Depth
           * @description Number of pages viewed during the visit
           * @default null
           */
          page_depth: number | null;
          /**
           * Referring Url
           * @description URL that referred the visitor
           * @default null
           */
          referring_url: string | null;
          /**
           * Source
           * @description Source of the visit, e.g., 'Google'
           * @default null
           */
          source: string | null;
          /**
           * Started At
           * @description Timestamp when the visit started (ISO 8601)
           * @default null
           */
          started_at: string | null;
          /**
           * Visit Length
           * @description Duration of the visit in seconds
           * @default null
           */
          visit_length: number | null;
          /**
           * Visit Route
           * @description Sequence of pages visited during the session
           * @default null
           */
          visit_route: {
              /**
               * Display Page Name
               * @description Display name of the page
               * @default null
               */
              display_page_name: string | null;
              /**
               * Hostname
               * @description Hostname of the page visited
               */
              hostname: string;
              /**
               * Page Path
               * @description Path of the page visited
               */
              page_path: string;
              /**
               * Page Title
               * @description Title of the page visited
               * @default null
               */
              page_title: string | null;
              /**
               * Page Url
               * @description Full URL of the page visited
               * @default null
               */
              page_url: string | null;
              /**
               * Previous Page Path
               * @description Path of the previous page visited
               * @default null
               */
              previous_page_path: string | null;
              /**
               * Time On Page
               * @description Time spent on the page in seconds
               */
              time_on_page: number;
          }[] | null;
          /**
           * Visitor Email
           * @description Email of the visitor if available
           * @default null
           */
          visitor_email: string | null;
          /**
           * Visitor First Name
           * @description First name of the visitor
           * @default null
           */
          visitor_first_name: string | null;
          /**
           * Visitor Last Name
           * @description Last name of the visitor
           * @default null
           */
          visitor_last_name: string | null;
      };
      /**
       * Id
       * @description Unique identifier for the visit
       */
      id: string;
      /**
       * Relationships
       * @description Relationships for the visit resource
       */
      relationships: {
          /**
           * Location
           * @description Relationship data for the visit's location
           */
          location: {
              [key: string]: {
                  /**
                   * Id
                   * @description ID of the related resource
                   */
                  id: string;
                  /**
                   * Type
                   * @description Type of the related resource, always 'locations'
                   * @constant
                   */
                  type: "locations";
              };
          };
      };
      /**
       * Type
       * @description Resource type, always 'visits'
       * @constant
       */
      type: "visits";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Included
   * @description Included related resources, such as locations
   * @default null
   */
  included: {
      /**
       * Attributes
       * @description Attributes of the location
       */
      attributes: {
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
           * Country Code
           * @description ISO 3166-1 alpha-2 country code
           * @default null
           */
          country_code: string | null;
          /**
           * Region
           * @description Name of the region
           * @default null
           */
          region: string | null;
          /**
           * Region Code
           * @description Code of the region, if available
           * @default null
           */
          region_code: string | null;
          /**
           * State Code
           * @description Two-letter state code (US only)
           * @default null
           */
          state_code: string | null;
      };
      /**
       * Id
       * @description Unique ID of the location
       */
      id: string;
      /**
       * Type
       * @description Resource type, always 'locations'
       * @constant
       */
      type: "locations";
  }[] | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of LEADFEEDER's LEADFEEDER_GET_COMPANY_INFO_BY_IP tool input.
 */
type LEADFEEDER_GET_COMPANY_INFO_BY_IP_INPUT = {
  /**
   * Ip
   * Format: ipvanyaddress
   * @description A valid IPv4 or IPv6 address to enrich, e.g. '185.70.216.139' or '2620:0:862:ed1a::1'.
   */
  ip?: string;
};

/**
 * Type of LEADFEEDER's LEADFEEDER_GET_COMPANY_INFO_BY_IP tool output.
 */
type LEADFEEDER_GET_COMPANY_INFO_BY_IP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * CompanyData
       * @description Enriched company information.
       * @default null
       */
      company: {
          /**
           * Business Ids
           * @description List of country-specific business IDs; may be empty or null.
           * @default null
           */
          business_ids: {
              /**
               * Country Code
               * @description ISO 3166-1 alpha-2 country code.
               * @default null
               */
              country_code: string | null;
              /**
               * Key
               * @description Short country-specific business ID key.
               * @default null
               */
              key: string | null;
              /**
               * Value
               * @description Business ID value in the registry.
               * @default null
               */
              value: string | null;
          }[] | null;
          /**
           * Domain
           * @description Company domain name.
           * @default null
           */
          domain: string | null;
          /**
           * EmployeesRange
           * @description Employee count range information.
           * @default null
           */
          employees_range: {
              /**
               * Max
               * @description Maximum number of employees; null means open-ended.
               * @default null
               */
              max: string | null;
              /**
               * Min
               * @description Minimum number of employees.
               * @default null
               */
              min: string | null;
          } | null;
          /**
           * Industries
           * @description Industry classification info.
           * @default null
           */
          industries: {
              /**
               * Naics
               * @description List of NAICS codes (strings).
               * @default null
               */
              naics: string[] | null;
              /**
               * Name
               * @description Industry name; see reference list in docs.
               * @default null
               */
              name: string | null;
              /**
               * Sic
               * @description List of SIC codes (strings).
               * @default null
               */
              sic: string[] | null;
          } | null;
          /**
           * Logo Url
           * Format: uri
           * @description URL to the company logo image.
           * @default null
           */
          logo_url: string | null;
          /**
           * Name
           * @description Company name.
           * @default null
           */
          name: string | null;
          /**
           * CompanyRevenue
           * @description Latest available revenue information.
           * @default null
           */
          revenue: {
              /**
               * Amount
               * @description Amount in USD.
               * @default null
               */
              amount: string | null;
              /**
               * Year
               * @description Year when the revenue was reported.
               * @default null
               */
              year: string | null;
          } | null;
          /**
           * SocialLinks
           * @description Company's social media URLs.
           * @default null
           */
          social: {
              /**
               * Facebook
               * Format: uri
               * @description Facebook page URL.
               * @default null
               */
              facebook: string | null;
              /**
               * Linkedin
               * Format: uri
               * @description LinkedIn company URL.
               * @default null
               */
              linkedin: string | null;
              /**
               * Twitter
               * Format: uri
               * @description Twitter profile URL.
               * @default null
               */
              twitter: string | null;
          } | null;
      } | null;
      /**
       * Confidence Score
       * @description Confidence level associating IP with a company: 'very high', 'high', 'medium', or 'low'.
       * @default null
       * @enum {string|null}
       */
      confidence_score: "very high" | "high" | "medium" | "low" | null;
      /**
       * Id
       * @description Unique lookup identifier.
       * @default null
       */
      id: string | null;
      /**
       * Ip Address
       * @description Echoed IP address.
       * @default null
       */
      ip_address: string | null;
      /**
       * Location
       * @description Geographic location of the IP.
       * @default null
       */
      location: {
          /**
           * City
           * @description City associated with the IP.
           * @default null
           */
          city: string | null;
          /**
           * Country Code
           * @description ISO 3166-1 alpha-2 country code.
           * @default null
           */
          country_code: string | null;
          /**
           * Region
           * @description Region or state name.
           * @default null
           */
          region: string | null;
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
 * Type of LEADFEEDER's LEADFEEDER_GET_CUSTOM_FEEDS tool input.
 */
type LEADFEEDER_GET_CUSTOM_FEEDS_INPUT = {
  /**
   * Account Id
   * @description ID of the account for which to retrieve custom feeds
   */
  account_id?: string;
};

/**
 * Type of LEADFEEDER's LEADFEEDER_GET_CUSTOM_FEEDS tool output.
 */
type LEADFEEDER_GET_CUSTOM_FEEDS_OUTPUT = {
  /**
   * Data
   * @description Array of custom feeds for the account
   */
  data?: {
      /**
       * Attributes
       * @description Attributes of the custom feed
       */
      attributes: {
          /**
           * Criteria
           * @description List of criteria defining the custom feed
           */
          criteria: {
              /**
               * Criterion Type
               * @description Type of the criterion, e.g., 'assignee', 'pageviews', 'industry_code'
               */
              criterion_type: string;
              /**
               * Display Value
               * @description Human-readable representation of the criterion
               */
              display_value: string;
              /**
               * Excluded
               * @description Indicates if this criterion is excluded from the feed
               */
              excluded: boolean;
              /**
               * Search Value
               * @description Value used for the criterion, can be string, number, or boolean
               */
              search_value: string | null;
          }[];
          /**
           * Name
           * @description Name of the custom feed
           */
          name: string;
      };
      /**
       * Id
       * @description Unique identifier of the custom feed
       */
      id: string;
      /**
       * Type
       * @description Resource type, e.g., 'custom_feeds'
       */
      type: string;
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
 * Type map of all available tool input types for toolkit "LEADFEEDER".
 */
export type LEADFEEDER_TOOL_INPUTS = {
  GET_ACCOUNTS: LEADFEEDER_GET_ACCOUNTS_INPUT
  GET_ALL_VISITS: LEADFEEDER_GET_ALL_VISITS_INPUT
  GET_COMPANY_INFO_BY_IP: LEADFEEDER_GET_COMPANY_INFO_BY_IP_INPUT
  GET_CUSTOM_FEEDS: LEADFEEDER_GET_CUSTOM_FEEDS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LEADFEEDER".
 */
export type LEADFEEDER_TOOL_OUTPUTS = {
  GET_ACCOUNTS: LEADFEEDER_GET_ACCOUNTS_OUTPUT
  GET_ALL_VISITS: LEADFEEDER_GET_ALL_VISITS_OUTPUT
  GET_COMPANY_INFO_BY_IP: LEADFEEDER_GET_COMPANY_INFO_BY_IP_OUTPUT
  GET_CUSTOM_FEEDS: LEADFEEDER_GET_CUSTOM_FEEDS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LEADFEEDER toolkit.
 */
export const LEADFEEDER = {
  slug: "leadfeeder",
  tools: {
    /**
     * Tool to retrieve a list of accounts the user has access to. use when you need to discover all available leadfeeder accounts after authentication.
     */
    GET_ACCOUNTS: "LEADFEEDER_GET_ACCOUNTS",
    /**
     * Tool to retrieve all visits for a specific lead. use when you need detailed visit history for a lead, optionally filtered by date range.
     */
    GET_ALL_VISITS: "LEADFEEDER_GET_ALL_VISITS",
    /**
     * Tool to retrieve company information based on an ip address. use when you need to enrich an ip and obtain its company profile. returns 404 if no match is found.
     */
    GET_COMPANY_INFO_BY_IP: "LEADFEEDER_GET_COMPANY_INFO_BY_IP",
    /**
     * Tool to retrieve a list of custom feeds for a specific account. use after confirming the account id to list all its custom feed configurations.
     */
    GET_CUSTOM_FEEDS: "LEADFEEDER_GET_CUSTOM_FEEDS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LEADFEEDER".
 */
export type LEADFEEDER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LEADFEEDER".
 */
export type LEADFEEDER_TRIGGER_EVENTS = {}
