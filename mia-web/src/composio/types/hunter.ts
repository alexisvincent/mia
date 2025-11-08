// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HUNTER's HUNTER_ACCOUNT_INFORMATION tool input.
 */
type HUNTER_ACCOUNT_INFORMATION_INPUT = object;

/**
 * Type of HUNTER's HUNTER_ACCOUNT_INFORMATION tool output.
 */
type HUNTER_ACCOUNT_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description Account email address
       */
      email: string;
      /**
       * Usage
       * @description Represents used and remaining quota for a resource.
       * @default null
       */
      monthly_searches: {
          /**
           * Available
           * @description Number of units still available
           */
          available: number;
          /**
           * Used
           * @description Number of units already used
           */
          used: number;
      } | null;
      /**
       * Usage
       * @description Represents used and remaining quota for a resource.
       * @default null
       */
      monthly_verifications: {
          /**
           * Available
           * @description Number of units still available
           */
          available: number;
          /**
           * Used
           * @description Number of units already used
           */
          used: number;
      } | null;
      /**
       * Plan Level
       * @description Numeric level of the current plan
       */
      plan_level: number;
      /**
       * Plan Name
       * @description Name of the current subscription plan
       */
      plan_name: string;
      /**
       * Reset Date
       * @description Date when usage counters reset (YYYY-MM-DD)
       */
      reset_date: string;
      /**
       * Searches
       * @description Searches quota information
       */
      searches: {
          /**
           * Available
           * @description Number of units still available
           */
          available: number;
          /**
           * Used
           * @description Number of units already used
           */
          used: number;
      };
      /**
       * Verifications
       * @description Verifications quota information
       */
      verifications: {
          /**
           * Available
           * @description Number of units still available
           */
          available: number;
          /**
           * Used
           * @description Number of units already used
           */
          used: number;
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
 * Type of HUNTER's HUNTER_COMPANY_ENRICHMENT tool input.
 */
type HUNTER_COMPANY_ENRICHMENT_INPUT = {
  /**
   * Clearbit Format
   * @description When provided, the response will be formatted according to Clearbit's schema.
   * @default null
   */
  clearbit_format: string | null;
  /**
   * Domain
   * @description The domain name for which to retrieve company information.
   */
  domain?: string;
};

/**
 * Type of HUNTER's HUNTER_COMPANY_ENRICHMENT tool output.
 */
type HUNTER_COMPANY_ENRICHMENT_OUTPUT = {
  /** Data */
  data?: {
      /** Category */
      category: {
          /**
           * Gics Code
           * @default null
           */
          gicsCode: string | null;
          /** Industry */
          industry: string | null;
          /**
           * Industry Group
           * @default null
           */
          industryGroup: string | null;
          /** Naics6 Codes */
          naics6Codes?: string[];
          /** Naics6 Codes2022 */
          naics6Codes2022?: string[];
          /**
           * Naics Code
           * @default null
           */
          naicsCode: string | null;
          /** Sector */
          sector: string | null;
          /** Sic4 Codes */
          sic4Codes?: string[];
          /**
           * Sic Code
           * @default null
           */
          sicCode: string | null;
          /**
           * Sub Industry
           * @default null
           */
          subIndustry: string | null;
      } | null;
      /** Crunchbase */
      crunchbase: {
          /** Handle */
          handle: string | null;
      } | null;
      /** Description */
      description: string | null;
      /** Domain */
      domain: string | null;
      /** Domain Aliases */
      domainAliases?: string[];
      /**
       * Email Provider
       * @default null
       */
      emailProvider: string | null;
      /** Facebook */
      facebook: {
          /** Handle */
          handle: string | null;
          /** Likes */
          likes: number | null;
      } | null;
      /**
       * Founded Year
       * @default null
       */
      foundedYear: number | null;
      /** Funding Rounds */
      fundingRounds?: Record<string, never>[];
      /** Geo */
      geo: {
          /** City */
          city: string | null;
          /** Country */
          country: string | null;
          /**
           * Country Code
           * @default null
           */
          countryCode: string | null;
          /** Lat */
          lat: number | null;
          /** Lng */
          lng: number | null;
          /**
           * Postal Code
           * @default null
           */
          postalCode: string | null;
          /** State */
          state: string | null;
          /**
           * State Code
           * @default null
           */
          stateCode: string | null;
          /**
           * Street Address
           * @default null
           */
          streetAddress: string | null;
          /**
           * Street Name
           * @default null
           */
          streetName: string | null;
          /**
           * Street Number
           * @default null
           */
          streetNumber: string | null;
          /**
           * Sub Premise
           * @default null
           */
          subPremise: string | null;
      } | null;
      /** Id */
      id: string;
      /** Identifiers */
      identifiers: {
          /**
           * Us Ein
           * @default null
           */
          usEIN: string | null;
      } | null;
      /**
       * Indexed At
       * @default null
       */
      indexedAt: string | null;
      /**
       * Legal Name
       * @default null
       */
      legalName: string | null;
      /** Linkedin */
      linkedin: {
          /** Handle */
          handle: string | null;
      } | null;
      /** Location */
      location: string | null;
      /** Logo */
      logo: string | null;
      /** Metrics */
      metrics: {
          /**
           * Alexa Global Rank
           * @default null
           */
          alexaGlobalRank: number | null;
          /**
           * Alexa Us Rank
           * @default null
           */
          alexaUsRank: number | null;
          /**
           * Annual Revenue
           * @default null
           */
          annualRevenue: string | null;
          /** Employees */
          employees: string | null;
          /**
           * Estimated Annual Revenue
           * @default null
           */
          estimatedAnnualRevenue: string | null;
          /**
           * Fiscal Year End
           * @default null
           */
          fiscalYearEnd: string | null;
          /**
           * Market Cap
           * @default null
           */
          marketCap: string | null;
          /** Raised */
          raised: string | null;
          /**
           * Traffic Rank
           * @default null
           */
          trafficRank: string | null;
      } | null;
      /** Name */
      name: string | null;
      /** Parent */
      parent: {
          /** Domain */
          domain: string | null;
      } | null;
      /** Phone */
      phone: string | null;
      /** Site */
      site: {
          /** Email Addresses */
          emailAddresses: string[];
          /** Phone Numbers */
          phoneNumbers: string[];
      } | null;
      /** Tags */
      tags: string[];
      /** Tech */
      tech: string[];
      /** Tech Categories */
      techCategories?: string[];
      /** Ticker */
      ticker: string | null;
      /**
       * Time Zone
       * @default null
       */
      timeZone: string | null;
      /** Twitter */
      twitter: {
          /** Avatar */
          avatar: string | null;
          /** Bio */
          bio: string | null;
          /** Followers */
          followers: number | null;
          /** Following */
          following: number | null;
          /** Handle */
          handle: string | null;
          /** Id */
          id: number | null;
          /** Location */
          location: string | null;
          /** Site */
          site: string | null;
      } | null;
      /** Type */
      type: string | null;
      /**
       * UltimateParent
       * @default null
       */
      ultimateParent: {
          /** Domain */
          domain: string | null;
      } | null;
      /**
       * Utc Offset
       * @default null
       */
      utcOffset: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** Meta */
  meta?: {
      /** Domain */
      domain: string | null;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUNTER's HUNTER_CREATE_CUSTOM_ATTRIBUTE tool input.
 */
type HUNTER_CREATE_CUSTOM_ATTRIBUTE_INPUT = {
  /**
   * Label
   * @description The name (label) of your custom attribute. Must be unique.
   */
  label?: string;
};

/**
 * Type of HUNTER's HUNTER_CREATE_CUSTOM_ATTRIBUTE tool output.
 */
type HUNTER_CREATE_CUSTOM_ATTRIBUTE_OUTPUT = {
  /**
   * Data
   * @description Data returned after a custom attribute is created.
   */
  data?: {
      /**
       * Id
       * @description Identifier of the new custom attribute.
       */
      id: number;
      /**
       * Label
       * @description Label of the custom attribute.
       */
      label: string;
      /**
       * Slug
       * @description Slug generated for the custom attribute.
       */
      slug: string;
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
 * Type of HUNTER's HUNTER_CREATE_LEAD tool input.
 */
type HUNTER_CREATE_LEAD_INPUT = {
  /**
   * Company
   * @description Company name of the lead
   * @default null
   */
  company: string | null;
  /**
   * Company Industry
   * @description Industry of the company, e.g. 'Technology', 'Finance'
   * @default null
   */
  company_industry: string | null;
  /**
   * Company Size
   * @description Size of the company, e.g. '201-500 employees'
   * @default null
   */
  company_size: string | null;
  /**
   * Confidence Score
   * @description Probability (0–100) that the email is correct
   * @default null
   */
  confidence_score: number | null;
  /**
   * Country Code
   * @description ISO 3166-1 alpha-2 country code
   * @default null
   */
  country_code: string | null;
  /**
   * Custom Attributes
   * @description Map of custom attribute slug to value
   * @default null
   */
  custom_attributes: {
      [key: string]: string;
  } | null;
  /**
   * Email
   * @description The email address of the lead
   */
  email?: string;
  /**
   * First Name
   * @description First name of the lead
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Last name of the lead
   * @default null
   */
  last_name: string | null;
  /**
   * Leads List Id
   * @description ID of a single leads list. Defaults to the last list created if unset
   * @default null
   */
  leads_list_id: number | null;
  /**
   * Leads List Ids
   * @description IDs of multiple leads lists. Defaults to the last list created if unset
   * @default null
   */
  leads_list_ids: number[] | null;
  /**
   * Linkedin Url
   * @description Public LinkedIn profile URL of the lead
   * @default null
   */
  linkedin_url: string | null;
  /**
   * Notes
   * @description Internal notes about the lead
   * @default null
   */
  notes: string | null;
  /**
   * Phone Number
   * @description Phone number of the lead
   * @default null
   */
  phone_number: string | null;
  /**
   * Position
   * @description Job title of the lead
   * @default null
   */
  position: string | null;
  /**
   * Source
   * @description Source where the lead was found
   * @default null
   */
  source: string | null;
  /**
   * Twitter
   * @description Twitter handle of the lead (without @)
   * @default null
   */
  twitter: string | null;
  /**
   * Website
   * @description Domain of the lead's company, e.g. 'reddit.com'
   * @default null
   */
  website: string | null;
};

/**
 * Type of HUNTER's HUNTER_CREATE_LEAD tool output.
 */
type HUNTER_CREATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description Company name of the lead
       * @default null
       */
      company: string | null;
      /**
       * Company Industry
       * @description Industry of the company
       * @default null
       */
      company_industry: string | null;
      /**
       * Company Size
       * @description Size of the company
       * @default null
       */
      company_size: string | null;
      /**
       * Confidence Score
       * @description Confidence score (0–100)
       * @default null
       */
      confidence_score: number | null;
      /**
       * Country Code
       * @description Country code of the lead
       * @default null
       */
      country_code: string | null;
      /**
       * Created At
       * @description Timestamp when the lead was created
       */
      created_at: string;
      /**
       * Customer Id
       * @description Value of the 'customer_id' attribute
       * @default null
       */
      customer_id: string | null;
      /**
       * Email
       * @description Email address of the lead
       */
      email: string;
      /**
       * First Name
       * @description First name of the lead
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Identifier of the created lead
       */
      id: number;
      /**
       * Last Activity At
       * @description Timestamp of last activity
       * @default null
       */
      last_activity_at: string | null;
      /**
       * Last Contacted At
       * @description Timestamp of last contact
       * @default null
       */
      last_contacted_at: string | null;
      /**
       * Last Name
       * @description Last name of the lead
       * @default null
       */
      last_name: string | null;
      /**
       * Leads List
       * @description Details of the leads list
       */
      leads_list: {
          /**
           * Id
           * @description Identifier of the leads list
           */
          id: number;
          /**
           * Leads Count
           * @description Number of leads in the list
           */
          leads_count: number;
          /**
           * Name
           * @description Name of the leads list
           */
          name: string;
      };
      /**
       * Linkedin Url
       * @description LinkedIn URL of the lead
       * @default null
       */
      linkedin_url: string | null;
      /**
       * Notes
       * @description Notes on the lead
       * @default null
       */
      notes: string | null;
      /**
       * Phone Number
       * @description Phone number of the lead
       * @default null
       */
      phone_number: string | null;
      /**
       * Position
       * @description Job title of the lead
       * @default null
       */
      position: string | null;
      /**
       * Sending Status
       * @description Sending status of the lead
       * @default null
       */
      sending_status: string | null;
      /**
       * Source
       * @description Source where the lead was found
       * @default null
       */
      source: string | null;
      /**
       * Sync Status
       * @description Synchronization status
       * @default null
       */
      sync_status: string | null;
      /**
       * Twitter
       * @description Twitter handle of the lead
       * @default null
       */
      twitter: string | null;
      /**
       * Verification
       * @description Verification details
       */
      verification: {
          /**
           * Date
           * @description Date of the last verification
           * @default null
           */
          date: string | null;
          /**
           * Status
           * @description Verification status
           * @default null
           */
          status: string | null;
      };
      /**
       * Website
       * @description Company domain
       * @default null
       */
      website: string | null;
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
 * Type of HUNTER's HUNTER_CREATE_LEADS_LIST tool input.
 */
type HUNTER_CREATE_LEADS_LIST_INPUT = {
  /**
   * Name
   * @description The name of the leads list to create.
   */
  name?: string;
};

/**
 * Type of HUNTER's HUNTER_CREATE_LEADS_LIST tool output.
 */
type HUNTER_CREATE_LEADS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description UTC timestamp of when the leads list was created.
       */
      created_at?: string;
      /**
       * Id
       * @description Unique identifier of the created leads list.
       */
      id?: number;
      /**
       * Leads Count
       * @description Number of leads in the created list (initially 0).
       */
      leads_count?: number;
      /**
       * Name
       * @description Name of the created leads list.
       */
      name?: string;
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
 * Type of HUNTER's HUNTER_DELETE_CUSTOM_ATTRIBUTE tool input.
 */
type HUNTER_DELETE_CUSTOM_ATTRIBUTE_INPUT = {
  /**
   * Id
   * @description Identifier of the custom attribute to be deleted
   */
  id?: number;
};

/**
 * Type of HUNTER's HUNTER_DELETE_CUSTOM_ATTRIBUTE tool output.
 */
type HUNTER_DELETE_CUSTOM_ATTRIBUTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the custom attribute was successfully deleted
       */
      success: boolean;
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
 * Type of HUNTER's HUNTER_DELETE_LEAD tool input.
 */
type HUNTER_DELETE_LEAD_INPUT = {
  /**
   * Id
   * @description The unique identifier of the lead to be deleted.
   */
  id?: number;
};

/**
 * Type of HUNTER's HUNTER_DELETE_LEAD tool output.
 */
type HUNTER_DELETE_LEAD_OUTPUT = {
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
 * Type of HUNTER's HUNTER_DELETE_LEADS_LIST tool input.
 */
type HUNTER_DELETE_LEADS_LIST_INPUT = {
  /**
   * Id
   * @description Identifier of the leads list to be deleted.
   */
  id?: number;
};

/**
 * Type of HUNTER's HUNTER_DELETE_LEADS_LIST tool output.
 */
type HUNTER_DELETE_LEADS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the leads list was successfully deleted
       */
      success: boolean;
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
 * Type of HUNTER's HUNTER_DOMAIN_SEARCH tool input.
 */
type HUNTER_DOMAIN_SEARCH_INPUT = {
  /**
   * Company
   * @description Company name to search for. Required if domain not provided.
   * @default null
   */
  company: string | null;
  /**
   * Department
   * @description Filter by one or more departments, e.g., 'executive','it','finance', etc.
   * @default null
   */
  department: string[] | null;
  /**
   * Domain
   * @description Domain name to search for. Required if company not provided.
   * @default null
   */
  domain: string | null;
  /**
   * Limit
   * @description Maximum number of email addresses to return. Defaults to 10.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of email addresses to skip. Defaults to 0.
   * @default null
   */
  offset: number | null;
  /**
   * Required Field
   * @description Filter by one or more required fields: 'full_name','position','phone_number'.
   * @default null
   */
  required_field: string[] | null;
  /**
   * Seniority
   * @description Filter by one or more seniority levels: 'junior','senior','executive'.
   * @default null
   */
  seniority: string[] | null;
  /**
   * Type
   * @description Filter by email type. Either 'personal' or 'generic'.
   * @default null
   */
  type: string | null;
};

/**
 * Type of HUNTER's HUNTER_DOMAIN_SEARCH tool output.
 */
type HUNTER_DOMAIN_SEARCH_OUTPUT = {
  /** Data */
  data?: {
      /** Accept All */
      accept_all: boolean;
      /** City */
      city: string | null;
      /** Company Type */
      company_type: string | null;
      /** Country */
      country: string | null;
      /** Description */
      description: string | null;
      /** Disposable */
      disposable: boolean;
      /** Domain */
      domain: string;
      /** Emails */
      emails: {
          /** Confidence */
          confidence: number;
          /** Department */
          department: string | null;
          /** First Name */
          first_name: string | null;
          /** Last Name */
          last_name: string | null;
          /** Linkedin */
          linkedin: string | null;
          /** Phone Number */
          phone_number: string | null;
          /** Position */
          position: string | null;
          /** Position Raw */
          position_raw: string | null;
          /** Seniority */
          seniority: string | null;
          /** Sources */
          sources: {
              /** Domain */
              domain: string;
              /** Extracted On */
              extracted_on: string;
              /** Last Seen On */
              last_seen_on: string;
              /** Still On Page */
              still_on_page: boolean;
              /** Uri */
              uri: string;
          }[];
          /** Twitter */
          twitter: string | null;
          /** Type */
          type: string;
          /** Value */
          value: string;
          /** Verification */
          verification: {
              /** Date */
              date: string;
              /** Status */
              status: string;
          } | null;
      }[];
      /** Facebook */
      facebook: string | null;
      /** Headcount */
      headcount: string | null;
      /** Industry */
      industry: string | null;
      /** Instagram */
      instagram: string | null;
      /** Linked Domains */
      linked_domains: string[];
      /** Linkedin */
      linkedin: string | null;
      /** Organization */
      organization: string | null;
      /** Pattern */
      pattern: string | null;
      /** Postal Code */
      postal_code: string | null;
      /** State */
      state: string | null;
      /** Street */
      street: string | null;
      /** Technologies */
      technologies: string[];
      /** Twitter */
      twitter: string | null;
      /** Webmail */
      webmail: boolean;
      /** Youtube */
      youtube: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** Meta */
  meta?: {
      /** Limit */
      limit: number;
      /** Offset */
      offset: number;
      /** Params */
      params: {
          /**
           * Company
           * @default null
           */
          company: string | null;
          /**
           * Department
           * @default null
           */
          department: string | null;
          /**
           * Domain
           * @default null
           */
          domain: string | null;
          /**
           * Required Field
           * @default null
           */
          required_field: string | null;
          /**
           * Seniority
           * @default null
           */
          seniority: string | null;
          /**
           * Type
           * @default null
           */
          type: string | null;
      };
      /** Results */
      results: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUNTER's HUNTER_EMAIL_FINDER tool input.
 */
type HUNTER_EMAIL_FINDER_INPUT = {
  /**
   * Company
   * @description Company name to search for the email (e.g., 'Reddit'). Used if domain is not provided.
   * @default null
   */
  company: string | null;
  /**
   * Domain
   * @description Target domain to search for the email (e.g., 'reddit.com'). Takes precedence over company if both are provided.
   * @default null
   */
  domain: string | null;
  /**
   * First Name
   * @description Person's first name. Required if last_name is set. Either both first_name+last_name or full_name must be provided.
   * @default null
   */
  first_name: string | null;
  /**
   * Full Name
   * @description Person's full name. Required if first_name and last_name are not both provided.
   * @default null
   */
  full_name: string | null;
  /**
   * Last Name
   * @description Person's last name. Required if first_name is set. Either both first_name+last_name or full_name must be provided.
   * @default null
   */
  last_name: string | null;
  /**
   * Max Duration
   * @description Max duration of the request in seconds (range 320). Longer durations yield more accurate results.
   * @default 10
   */
  max_duration: number | null;
};

/**
 * Type of HUNTER's HUNTER_EMAIL_FINDER tool output.
 */
type HUNTER_EMAIL_FINDER_OUTPUT = {
  /** Data */
  data?: {
      /** Accept All */
      accept_all: boolean;
      /** Company */
      company: string | null;
      /** Domain */
      domain: string;
      /** Email */
      email: string;
      /** First Name */
      first_name: string;
      /** Last Name */
      last_name: string;
      /** Linkedin Url */
      linkedin_url: string | null;
      /** Phone Number */
      phone_number: string | null;
      /** Position */
      position: string | null;
      /**
       * Score
       * @description Confidence score (0-100) for the email prediction.
       */
      score: number;
      /** Sources */
      sources: {
          /** Domain */
          domain: string;
          /** Extracted On */
          extracted_on: string;
          /** Last Seen On */
          last_seen_on: string;
          /** Still On Page */
          still_on_page: boolean;
          /** Uri */
          uri: string;
      }[];
      /** Twitter */
      twitter: string | null;
      /** Verification */
      verification: {
          /** Date */
          date: string;
          /** Status */
          status: string;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** Meta */
  meta?: {
      /** Params */
      params: {
          /** Company */
          company: string | null;
          /** Domain */
          domain: string | null;
          /** First Name */
          first_name: string | null;
          /** Full Name */
          full_name: string | null;
          /** Last Name */
          last_name: string | null;
          /** Max Duration */
          max_duration: number | null;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUNTER's HUNTER_EMAIL_VERIFIER tool input.
 */
type HUNTER_EMAIL_VERIFIER_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to verify.
   */
  email?: unknown;
};

/**
 * Type of HUNTER's HUNTER_EMAIL_VERIFIER tool output.
 */
type HUNTER_EMAIL_VERIFIER_OUTPUT = {
  /**
   * Data
   * @description Verification result data.
   */
  data?: {
      /**
       * Accept All
       * @description Whether the domain accepts all emails.
       */
      accept_all: boolean;
      /**
       * Block
       * @description Whether the email is identified as blocked.
       */
      block: boolean;
      /**
       * Disposable
       * @description Whether the email is from a disposable email provider.
       */
      disposable: boolean;
      /**
       * Gibberish
       * @description Whether the email address looks like a random string.
       */
      gibberish: boolean;
      /**
       * Mx Records
       * @description Whether MX records exist for the email's domain.
       */
      mx_records: boolean;
      /**
       * Regexp
       * @description Whether the email format matches the regex pattern.
       */
      regexp: boolean;
      /**
       * Result
       * @description Verification status (e.g., 'deliverable', 'undeliverable', 'risky').
       */
      result: string;
      /**
       * Score
       * @description Overall confidence score for the verification (0–100).
       */
      score: number;
      /**
       * Smtp Check
       * @description Whether SMTP check passed for this email.
       */
      smtp_check: boolean;
      /**
       * Smtp Server
       * @description Whether an SMTP server exists for the domain.
       */
      smtp_server: boolean;
      /**
       * Sources
       * @description List of external sources where the email was found.
       */
      sources?: {
          /**
           * Confidence
           * @description Confidence score of the source data (0–100).
           * @default null
           */
          confidence: number | null;
          /**
           * Domain
           * @description Domain of the source where the email was found.
           */
          domain: string;
          /**
           * Extracted On
           * @description Date when the email was first extracted from the source.
           */
          extracted_on: string;
          /**
           * Last Seen On
           * @description Date when the email was last seen on the source.
           */
          last_seen_on: string;
          /**
           * Still On Page
           * @description Whether the email still exists on the source page.
           */
          still_on_page: boolean;
          /**
           * Uri
           * @description URL of the page where the email was found.
           */
          uri: string;
      }[];
      /**
       * Webmail
       * @description Whether the email is from a webmail provider.
       */
      webmail: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response metadata.
   */
  meta?: {
      /**
       * Params
       * @description Parameters sent with the request (e.g., email).
       */
      params: {
          [key: string]: string;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUNTER's HUNTER_GET_CUSTOM_ATTRIBUTE tool input.
 */
type HUNTER_GET_CUSTOM_ATTRIBUTE_INPUT = {
  /**
   * Id
   * @description Identifier of the custom attribute, must be a positive integer
   */
  id?: number;
};

/**
 * Type of HUNTER's HUNTER_GET_CUSTOM_ATTRIBUTE tool output.
 */
type HUNTER_GET_CUSTOM_ATTRIBUTE_OUTPUT = {
  /**
   * Data
   * @description The custom attribute data
   */
  data?: {
      /**
       * Id
       * @description Identifier of the custom attribute
       */
      id: number;
      /**
       * Label
       * @description Label of the custom attribute
       */
      label: string;
      /**
       * Slug
       * @description Slug of the custom attribute
       */
      slug: string;
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
 * Type of HUNTER's HUNTER_GET_LEAD tool input.
 */
type HUNTER_GET_LEAD_INPUT = {
  /**
   * Id
   * @description The unique identifier of the lead to retrieve.
   */
  id?: number;
};

/**
 * Type of HUNTER's HUNTER_GET_LEAD tool output.
 */
type HUNTER_GET_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description Company name of the lead.
       * @default null
       */
      company: string | null;
      /**
       * Company Industry
       * @description Industry of the lead's company.
       * @default null
       */
      company_industry: string | null;
      /**
       * Company Size
       * @description Size of the lead's company.
       * @default null
       */
      company_size: string | null;
      /**
       * Confidence Score
       * @description Confidence score (0–100) of the email address.
       * @default null
       */
      confidence_score: number | null;
      /**
       * Country Code
       * @description ISO 3166-1 alpha-2 country code of the lead.
       * @default null
       */
      country_code: string | null;
      /**
       * Created At
       * @description Timestamp when the lead was created.
       */
      created_at: string;
      /**
       * Email
       * @description The email address of the lead.
       */
      email: string;
      /**
       * First Name
       * @description First name of the lead.
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description The unique identifier of the lead.
       */
      id: number;
      /**
       * Last Activity At
       * @description Timestamp of the last activity for the lead.
       * @default null
       */
      last_activity_at: string | null;
      /**
       * Last Contacted At
       * @description Timestamp of the last contact with the lead.
       * @default null
       */
      last_contacted_at: string | null;
      /**
       * Last Name
       * @description Last name of the lead.
       * @default null
       */
      last_name: string | null;
      /**
       * Leads List
       * @description Details of the leads list containing the lead.
       */
      leads_list: {
          /**
           * Id
           * @description Identifier of the leads list to which the lead belongs.
           * @default null
           */
          id: number | null;
          /**
           * Leads Count
           * @description Number of leads in the list.
           * @default null
           */
          leads_count: number | null;
          /**
           * Name
           * @description Name of the leads list.
           * @default null
           */
          name: string | null;
      };
      /**
       * Linkedin Url
       * @description LinkedIn profile URL of the lead.
       * @default null
       */
      linkedin_url: string | null;
      /**
       * Notes
       * @description Internal notes for the lead.
       * @default null
       */
      notes: string | null;
      /**
       * Phone Number
       * @description Phone number of the lead.
       * @default null
       */
      phone_number: string | null;
      /**
       * Position
       * @description Job title of the lead.
       * @default null
       */
      position: string | null;
      /**
       * Sending Status
       * @description Sending status of the lead.
       * @default null
       */
      sending_status: string | null;
      /**
       * Source
       * @description Source where the lead was obtained.
       * @default null
       */
      source: string | null;
      /**
       * Sync Status
       * @description Synchronization status of the lead.
       * @default null
       */
      sync_status: string | null;
      /**
       * Twitter
       * @description Twitter handle of the lead.
       * @default null
       */
      twitter: string | null;
      /**
       * Verification
       * @description Verification details of the lead's email address.
       */
      verification: {
          /**
           * Date
           * @description Date of the last verification.
           * @default null
           */
          date: string | null;
          /**
           * Status
           * @description Verification status of the lead's email address.
           * @default null
           */
          status: string | null;
      };
      /**
       * Website
       * @description Website of the lead's company.
       * @default null
       */
      website: string | null;
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
 * Type of HUNTER's HUNTER_GET_LEADS_LIST tool input.
 */
type HUNTER_GET_LEADS_LIST_INPUT = {
  /**
   * Id
   * @description Identifier of the leads list.
   */
  id?: number;
  /**
   * Limit
   * @description A limit on the number of leads to return. Limit can range between 1 and 100.
   * @default 20
   */
  limit: number;
  /**
   * Offset
   * @description The number of leads to skip. Use this parameter to fetch paginated results.
   * @default 0
   */
  offset: number;
};

/**
 * Type of HUNTER's HUNTER_GET_LEADS_LIST tool output.
 */
type HUNTER_GET_LEADS_LIST_OUTPUT = {
  /**
   * Data
   * @description Leads list data.
   */
  data?: {
      /**
       * Created At
       * @description UTC timestamp when the list was created.
       */
      created_at: string;
      /**
       * Id
       * @description Leads list unique identifier.
       */
      id: number;
      /**
       * Leads
       * @description Array of leads in the list.
       */
      leads: {
          /**
           * Company
           * @description Lead's company.
           * @default null
           */
          company: string | null;
          /**
           * Company Industry
           * @description Lead's company industry.
           * @default null
           */
          company_industry: string | null;
          /**
           * Company Size
           * @description Lead's company size.
           * @default null
           */
          company_size: string | null;
          /**
           * Confidence Score
           * @description Lead's email confidence score.
           * @default null
           */
          confidence_score: number | null;
          /**
           * Country Code
           * @description Lead's country code.
           * @default null
           */
          country_code: string | null;
          /**
           * Created At
           * @description UTC timestamp when the lead was created.
           */
          created_at: string;
          /**
           * Email
           * @description Lead's email address.
           */
          email: string;
          /**
           * First Name
           * @description Lead's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Lead's unique identifier.
           */
          id: number;
          /**
           * Last Activity At
           * @description Timestamp of the last activity.
           * @default null
           */
          last_activity_at: string | null;
          /**
           * Last Contacted At
           * @description Timestamp of the last contact.
           * @default null
           */
          last_contacted_at: string | null;
          /**
           * Last Name
           * @description Lead's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * Leads List Id
           * @description Identifier of the leads list this lead belongs to.
           */
          leads_list_id: number;
          /**
           * Linkedin Url
           * @description Lead's LinkedIn URL.
           * @default null
           */
          linkedin_url: string | null;
          /**
           * Notes
           * @description Notes associated with the lead.
           * @default null
           */
          notes: string | null;
          /**
           * Phone Number
           * @description Lead's phone number.
           * @default null
           */
          phone_number: string | null;
          /**
           * Position
           * @description Lead's position.
           * @default null
           */
          position: string | null;
          /**
           * Sending Status
           * @description Sending status of the lead.
           * @default null
           */
          sending_status: string | null;
          /**
           * Source
           * @description Source where the lead was found.
           * @default null
           */
          source: string | null;
          /**
           * Sync Status
           * @description Synchronization status of the lead.
           * @default null
           */
          sync_status: string | null;
          /**
           * Twitter
           * @description Lead's Twitter handle.
           * @default null
           */
          twitter: string | null;
          /**
           * Verification
           * @description Verification details of the lead.
           */
          verification: {
              /**
               * Date
               * @description Date of the last verification of the lead.
               * @default null
               */
              date: string | null;
              /**
               * Status
               * @description Verification status of the lead.
               * @default null
               */
              status: string | null;
          };
          /**
           * Website
           * @description Lead's company website.
           * @default null
           */
          website: string | null;
      }[];
      /**
       * Leads Count
       * @description Number of leads in the list.
       */
      leads_count: number;
      /**
       * Name
       * @description Name of the leads list.
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
   * Meta
   * @description Response metadata including pagination info.
   */
  meta?: {
      /**
       * Params
       * @description Parameters used in the request.
       */
      params: {
          /**
           * Leads List Id
           * @description Identifier of the leads list.
           */
          leads_list_id: number;
          /**
           * Limit
           * @description Limit parameter for pagination.
           */
          limit: number;
          /**
           * Offset
           * @description Offset parameter for pagination.
           */
          offset: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUNTER's HUNTER_LIST_CUSTOM_ATTRIBUTES tool input.
 */
type HUNTER_LIST_CUSTOM_ATTRIBUTES_INPUT = object;

/**
 * Type of HUNTER's HUNTER_LIST_CUSTOM_ATTRIBUTES tool output.
 */
type HUNTER_LIST_CUSTOM_ATTRIBUTES_OUTPUT = {
  /**
   * Data
   * @description Data object containing custom attributes
   */
  data?: {
      /**
       * Leads Custom Attributes
       * @description List of custom lead attributes
       */
      leads_custom_attributes: {
          /**
           * Id
           * @description Identifier of the custom attribute
           */
          id: number;
          /**
           * Label
           * @description Name of the custom attribute
           */
          label: string;
          /**
           * Slug
           * @description Slugified version of the label
           */
          slug: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Metadata about the result, e.g., total count
   */
  meta?: {
      /**
       * Total
       * @description Total number of custom attributes
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUNTER's HUNTER_LIST_LEADS tool input.
 */
type HUNTER_LIST_LEADS_INPUT = {
  /**
   * Company
   * @description Filter leads by company name.
   * @default null
   */
  company: string | null;
  /**
   * Country Code
   * @description Filter leads by country code (ISO 3166-1 alpha-2).
   * @default null
   */
  country_code: string | null;
  /**
   * Created At
   * @description Filter leads by creation date (ISO-8601 format).
   * @default null
   */
  created_at: string | null;
  /**
   * Custom Attributes
   * @description Filter leads by custom attributes.
   * @default null
   */
  custom_attributes: string[] | null;
  /**
   * Email
   * @description Filter leads by email address.
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description Filter leads by first name.
   * @default null
   */
  first_name: string | null;
  /**
   * Last Activity At
   * @description Filter leads by last activity date (ISO-8601 format).
   * @default null
   */
  last_activity_at: string | null;
  /**
   * Last Contacted At
   * @description Filter leads by last contacted date (ISO-8601 format).
   * @default null
   */
  last_contacted_at: string | null;
  /**
   * Last Name
   * @description Filter leads by last name.
   * @default null
   */
  last_name: string | null;
  /**
   * Leads List Id
   * @description Filter leads by a specific leads list ID.
   * @default null
   */
  leads_list_id: number | null;
  /**
   * Limit
   * @description Number of leads to return (1-1000). Defaults to 20.
   * @default 20
   */
  limit: number | null;
  /**
   * Linkedin Url
   * @description Filter leads by LinkedIn profile URL.
   * @default null
   */
  linkedin_url: string | null;
  /**
   * Max Confidence Score
   * @description Filter leads with a maximum confidence score (0-100).
   * @default null
   */
  max_confidence_score: number | null;
  /**
   * Min Confidence Score
   * @description Filter leads with a minimum confidence score (0-100).
   * @default null
   */
  min_confidence_score: number | null;
  /**
   * Offset
   * @description Number of leads to skip for pagination (0-100000). Defaults to 0.
   * @default 0
   */
  offset: number | null;
  /**
   * Phone Number
   * @description Filter leads by phone number.
   * @default null
   */
  phone_number: string | null;
  /**
   * Position
   * @description Filter leads by position.
   * @default null
   */
  position: string | null;
  /**
   * Query
   * @description Search leads by first name, last name, or email.
   * @default null
   */
  query: string | null;
  /**
   * Twitter
   * @description Filter leads by Twitter handle.
   * @default null
   */
  twitter: string | null;
  /**
   * Website
   * @description Filter leads by company website.
   * @default null
   */
  website: string | null;
};

/**
 * Type of HUNTER's HUNTER_LIST_LEADS tool output.
 */
type HUNTER_LIST_LEADS_OUTPUT = {
  /**
   * Data
   * @description Leads data.
   */
  data?: {
      /**
       * Leads
       * @description List of lead objects.
       */
      leads: {
          /**
           * Company
           * @description Lead's company.
           * @default null
           */
          company: string | null;
          /**
           * Company Industry
           * @description Lead's company industry.
           * @default null
           */
          company_industry: string | null;
          /**
           * Company Size
           * @description Lead's company size.
           * @default null
           */
          company_size: string | null;
          /**
           * Confidence Score
           * @description Confidence score of the lead.
           * @default null
           */
          confidence_score: number | null;
          /**
           * Country Code
           * @description Lead's country code.
           * @default null
           */
          country_code: string | null;
          /**
           * Created At
           * @description UTC timestamp when the lead was created.
           */
          created_at: string;
          /**
           * Email
           * @description Lead's email address.
           */
          email: string;
          /**
           * First Name
           * @description Lead's first name.
           * @default null
           */
          first_name: string | null;
          /**
           * Id
           * @description Lead's unique identifier.
           */
          id: number;
          /**
           * Last Activity At
           * @description Timestamp of the last activity.
           * @default null
           */
          last_activity_at: string | null;
          /**
           * Last Contacted At
           * @description Timestamp of the last contact.
           * @default null
           */
          last_contacted_at: string | null;
          /**
           * Last Name
           * @description Lead's last name.
           * @default null
           */
          last_name: string | null;
          /**
           * LeadsListInfo
           * @description Details of the leads list this lead belongs to.
           * @default null
           */
          leads_list: {
              /**
               * Id
               * @description Leads list unique identifier.
               */
              id: number;
              /**
               * Leads Count
               * @description Number of leads in the list.
               */
              leads_count: number;
              /**
               * Name
               * @description Name of the leads list.
               */
              name: string;
          } | null;
          /**
           * Linkedin Url
           * @description Lead's LinkedIn URL.
           * @default null
           */
          linkedin_url: string | null;
          /**
           * Notes
           * @description Notes associated with the lead.
           * @default null
           */
          notes: string | null;
          /**
           * Phone Number
           * @description Lead's phone number.
           * @default null
           */
          phone_number: string | null;
          /**
           * Position
           * @description Lead's position.
           * @default null
           */
          position: string | null;
          /**
           * Sending Status
           * @description Sending status of the lead.
           * @default null
           */
          sending_status: string | null;
          /**
           * Source
           * @description Source where the lead was found.
           * @default null
           */
          source: string | null;
          /**
           * Sync Status
           * @description Synchronization status of the lead.
           * @default null
           */
          sync_status: string | null;
          /**
           * Twitter
           * @description Lead's Twitter handle.
           * @default null
           */
          twitter: string | null;
          /**
           * Verification
           * @description Verification details of the lead.
           */
          verification: {
              /**
               * Date
               * @description Date of the last verification of the lead.
               * @default null
               */
              date: string | null;
              /**
               * Status
               * @description Verification status of the lead.
               * @default null
               */
              status: string | null;
          };
          /**
           * Website
           * @description Lead's company website.
           * @default null
           */
          website: string | null;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Response metadata including pagination info.
   */
  meta?: {
      /**
       * Count
       * @description Number of leads returned in this response.
       */
      count: number;
      /**
       * Params
       * @description Parameters used in the request.
       */
      params: {
          /**
           * Limit
           * @description Limit parameter value used in the request.
           */
          limit: number;
          /**
           * Offset
           * @description Offset parameter value used in the request.
           */
          offset: number;
      };
      /**
       * Total
       * @description Total number of leads available.
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUNTER's HUNTER_LIST_LEADS_LISTS tool input.
 */
type HUNTER_LIST_LEADS_LISTS_INPUT = {
  /**
   * Limit
   * @description A limit on the number of leads lists to be returned. Range between 1 and 100. Defaults to 20.
   * @default 20
   */
  limit: number;
  /**
   * Offset
   * @description The number of leads lists to skip for pagination. Defaults to 0.
   * @default 0
   */
  offset: number;
};

/**
 * Type of HUNTER's HUNTER_LIST_LEADS_LISTS tool output.
 */
type HUNTER_LIST_LEADS_LISTS_OUTPUT = {
  /**
   * Data
   * @description Paginated leads lists data.
   */
  data?: {
      /**
       * Leads Lists
       * @description Array of leads list objects.
       */
      leads_lists: {
          /**
           * Created At
           * @description UTC timestamp when the leads list was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier of the leads list.
           */
          id: number;
          /**
           * Leads Count
           * @description Number of leads in the leads list.
           */
          leads_count: number;
          /**
           * Name
           * @description Name of the leads list.
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
   * Meta
   * @description Pagination metadata including total count and params.
   */
  meta?: {
      /**
       * Params
       * @description Parameters used in the request.
       */
      params: {
          /**
           * Limit
           * @description Limit parameter value used in the request.
           */
          limit: number;
          /**
           * Offset
           * @description Offset parameter value used in the request.
           */
          offset: number;
      };
      /**
       * Total
       * @description Total number of leads lists available.
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of HUNTER's HUNTER_UPDATE_CUSTOM_ATTRIBUTE tool input.
 */
type HUNTER_UPDATE_CUSTOM_ATTRIBUTE_INPUT = {
  /**
   * Id
   * @description Identifier of the custom attribute, must be a positive integer
   */
  id?: number;
  /**
   * Label
   * @description The new label for the custom attribute. Must be unique.
   */
  label?: string;
};

/**
 * Type of HUNTER's HUNTER_UPDATE_CUSTOM_ATTRIBUTE tool output.
 */
type HUNTER_UPDATE_CUSTOM_ATTRIBUTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the custom attribute was successfully updated
       */
      success: boolean;
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
 * Type of HUNTER's HUNTER_UPDATE_LEAD tool input.
 */
type HUNTER_UPDATE_LEAD_INPUT = {
  /**
   * Company
   * @description Company name of the lead
   * @default null
   */
  company: string | null;
  /**
   * Company Industry
   * @description Industry sector of the lead's company, e.g. 'Technology', 'Finance'
   * @default null
   */
  company_industry: string | null;
  /**
   * Company Size
   * @description Size category of the lead's company, e.g. '201-500 employees'
   * @default null
   */
  company_size: string | null;
  /**
   * Confidence Score
   * @description Confidence score (0–100) that the email address is correct
   * @default null
   */
  confidence_score: number | null;
  /**
   * Country Code
   * @description ISO 3166-1 alpha-2 country code of the lead
   * @default null
   */
  country_code: string | null;
  /**
   * Custom Attributes
   * @description Map of custom attribute slugs to their values
   * @default null
   */
  custom_attributes: {
      [key: string]: string;
  } | null;
  /**
   * Email
   * @description Email address of the lead
   * @default null
   */
  email: string | null;
  /**
   * First Name
   * @description First name of the lead
   * @default null
   */
  first_name: string | null;
  /**
   * Id
   * @description Identifier of the lead to update, must be a positive integer
   */
  id?: number;
  /**
   * Last Name
   * @description Last name of the lead
   * @default null
   */
  last_name: string | null;
  /**
   * Leads List Id
   * @description Identifier of a leads list to assign the lead to
   * @default null
   */
  leads_list_id: number | null;
  /**
   * Leads List Ids
   * @description Identifiers of multiple leads lists to assign the lead to
   * @default null
   */
  leads_list_ids: number[] | null;
  /**
   * Linkedin Url
   * @description LinkedIn profile URL of the lead
   * @default null
   */
  linkedin_url: string | null;
  /**
   * Notes
   * @description Personal notes about the lead
   * @default null
   */
  notes: string | null;
  /**
   * Phone Number
   * @description Phone number of the lead
   * @default null
   */
  phone_number: string | null;
  /**
   * Position
   * @description Job title of the lead
   * @default null
   */
  position: string | null;
  /**
   * Source
   * @description Source where the lead was found
   * @default null
   */
  source: string | null;
  /**
   * Twitter
   * @description Twitter handle of the lead
   * @default null
   */
  twitter: string | null;
  /**
   * Website
   * @description Website or domain of the lead's company, e.g. 'reddit.com'
   * @default null
   */
  website: string | null;
};

/**
 * Type of HUNTER's HUNTER_UPDATE_LEAD tool output.
 */
type HUNTER_UPDATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the lead was successfully updated
       */
      success: boolean;
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
 * Type of HUNTER's HUNTER_UPDATE_LEADS_LIST tool input.
 */
type HUNTER_UPDATE_LEADS_LIST_INPUT = {
  /**
   * Id
   * @description Identifier of the leads list to update, must be a positive integer
   */
  id?: number;
  /**
   * Name
   * @description The new name for the leads list
   */
  name?: string;
};

/**
 * Type of HUNTER's HUNTER_UPDATE_LEADS_LIST tool output.
 */
type HUNTER_UPDATE_LEADS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the leads list was successfully updated
       */
      success: boolean;
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
 * Type of HUNTER's HUNTER_UPSERT_LEAD tool input.
 */
type HUNTER_UPSERT_LEAD_INPUT = {
  /**
   * Company
   * @description Company name of the lead
   * @default null
   */
  company: string | null;
  /**
   * Company Industry
   * @description Industry of the company, e.g., 'Technology', 'Finance'
   * @default null
   */
  company_industry: string | null;
  /**
   * Company Size
   * @description Size of the company, e.g., '201-500 employees'
   * @default null
   */
  company_size: string | null;
  /**
   * Confidence Score
   * @description Probability (0–100) that the email is correct
   * @default null
   */
  confidence_score: number | null;
  /**
   * Country Code
   * @description ISO 3166-1 alpha-2 country code
   * @default null
   */
  country_code: string | null;
  /**
   * Custom Attributes
   * @description Map of custom attribute slug to value
   * @default null
   */
  custom_attributes: {
      [key: string]: string;
  } | null;
  /**
   * Email
   * @description The email address of the lead
   */
  email?: string;
  /**
   * First Name
   * @description First name of the lead
   * @default null
   */
  first_name: string | null;
  /**
   * Last Name
   * @description Last name of the lead
   * @default null
   */
  last_name: string | null;
  /**
   * Leads List Id
   * @description ID of a single leads list. Defaults to the last list created if unset
   * @default null
   */
  leads_list_id: number | null;
  /**
   * Leads List Ids
   * @description IDs of multiple leads lists. Defaults to the last list created if unset
   * @default null
   */
  leads_list_ids: number[] | null;
  /**
   * Linkedin Url
   * @description Public LinkedIn profile URL of the lead
   * @default null
   */
  linkedin_url: string | null;
  /**
   * Notes
   * @description Internal notes about the lead
   * @default null
   */
  notes: string | null;
  /**
   * Phone Number
   * @description Phone number of the lead
   * @default null
   */
  phone_number: string | null;
  /**
   * Position
   * @description Job title of the lead
   * @default null
   */
  position: string | null;
  /**
   * Source
   * @description Source where the lead was found
   * @default null
   */
  source: string | null;
  /**
   * Twitter
   * @description Twitter handle of the lead (without @)
   * @default null
   */
  twitter: string | null;
  /**
   * Website
   * @description Domain of the lead's company, e.g., 'reddit.com'
   * @default null
   */
  website: string | null;
};

/**
 * Type of HUNTER's HUNTER_UPSERT_LEAD tool output.
 */
type HUNTER_UPSERT_LEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description Company name of the lead
       * @default null
       */
      company: string | null;
      /**
       * Company Industry
       * @description Industry of the company
       * @default null
       */
      company_industry: string | null;
      /**
       * Company Size
       * @description Size of the company
       * @default null
       */
      company_size: string | null;
      /**
       * Confidence Score
       * @description Confidence score (0–100)
       * @default null
       */
      confidence_score: number | null;
      /**
       * Country Code
       * @description Country code of the lead
       * @default null
       */
      country_code: string | null;
      /**
       * Created At
       * @description Timestamp when the lead was created
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the lead
       */
      email: string;
      /**
       * First Name
       * @description First name of the lead
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Identifier of the lead
       */
      id: number;
      /**
       * Last Activity At
       * @description Timestamp of last activity
       * @default null
       */
      last_activity_at: string | null;
      /**
       * Last Contacted At
       * @description Timestamp of last contact
       * @default null
       */
      last_contacted_at: string | null;
      /**
       * Last Name
       * @description Last name of the lead
       * @default null
       */
      last_name: string | null;
      /**
       * Leads List
       * @description Details of the leads list
       */
      leads_list: {
          /**
           * Id
           * @description Identifier of the leads list
           * @default null
           */
          id: number | null;
          /**
           * Leads Count
           * @description Number of leads in the list
           * @default null
           */
          leads_count: number | null;
          /**
           * Name
           * @description Name of the leads list
           * @default null
           */
          name: string | null;
      };
      /**
       * Linkedin Url
       * @description LinkedIn URL of the lead
       * @default null
       */
      linkedin_url: string | null;
      /**
       * Notes
       * @description Notes on the lead
       * @default null
       */
      notes: string | null;
      /**
       * Phone Number
       * @description Phone number of the lead
       * @default null
       */
      phone_number: string | null;
      /**
       * Position
       * @description Job title of the lead
       * @default null
       */
      position: string | null;
      /**
       * Sending Status
       * @description Sending status of the lead
       * @default null
       */
      sending_status: string | null;
      /**
       * Source
       * @description Source where the lead was found
       * @default null
       */
      source: string | null;
      /**
       * Sync Status
       * @description Synchronization status
       * @default null
       */
      sync_status: string | null;
      /**
       * Twitter
       * @description Twitter handle of the lead
       * @default null
       */
      twitter: string | null;
      /**
       * Verification
       * @description Verification details
       */
      verification: {
          /**
           * Date
           * @description Date of the last verification
           * @default null
           */
          date: string | null;
          /**
           * Status
           * @description Verification status of the lead
           * @default null
           */
          status: string | null;
      };
      /**
       * Website
       * @description Company domain
       * @default null
       */
      website: string | null;
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
 * Type map of all available tool input types for toolkit "HUNTER".
 */
export type HUNTER_TOOL_INPUTS = {
  ACCOUNT_INFORMATION: HUNTER_ACCOUNT_INFORMATION_INPUT
  COMPANY_ENRICHMENT: HUNTER_COMPANY_ENRICHMENT_INPUT
  CREATE_CUSTOM_ATTRIBUTE: HUNTER_CREATE_CUSTOM_ATTRIBUTE_INPUT
  CREATE_LEAD: HUNTER_CREATE_LEAD_INPUT
  CREATE_LEADS_LIST: HUNTER_CREATE_LEADS_LIST_INPUT
  DELETE_CUSTOM_ATTRIBUTE: HUNTER_DELETE_CUSTOM_ATTRIBUTE_INPUT
  DELETE_LEAD: HUNTER_DELETE_LEAD_INPUT
  DELETE_LEADS_LIST: HUNTER_DELETE_LEADS_LIST_INPUT
  DOMAIN_SEARCH: HUNTER_DOMAIN_SEARCH_INPUT
  EMAIL_FINDER: HUNTER_EMAIL_FINDER_INPUT
  EMAIL_VERIFIER: HUNTER_EMAIL_VERIFIER_INPUT
  GET_CUSTOM_ATTRIBUTE: HUNTER_GET_CUSTOM_ATTRIBUTE_INPUT
  GET_LEAD: HUNTER_GET_LEAD_INPUT
  GET_LEADS_LIST: HUNTER_GET_LEADS_LIST_INPUT
  LIST_CUSTOM_ATTRIBUTES: HUNTER_LIST_CUSTOM_ATTRIBUTES_INPUT
  LIST_LEADS: HUNTER_LIST_LEADS_INPUT
  LIST_LEADS_LISTS: HUNTER_LIST_LEADS_LISTS_INPUT
  UPDATE_CUSTOM_ATTRIBUTE: HUNTER_UPDATE_CUSTOM_ATTRIBUTE_INPUT
  UPDATE_LEAD: HUNTER_UPDATE_LEAD_INPUT
  UPDATE_LEADS_LIST: HUNTER_UPDATE_LEADS_LIST_INPUT
  UPSERT_LEAD: HUNTER_UPSERT_LEAD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HUNTER".
 */
export type HUNTER_TOOL_OUTPUTS = {
  ACCOUNT_INFORMATION: HUNTER_ACCOUNT_INFORMATION_OUTPUT
  COMPANY_ENRICHMENT: HUNTER_COMPANY_ENRICHMENT_OUTPUT
  CREATE_CUSTOM_ATTRIBUTE: HUNTER_CREATE_CUSTOM_ATTRIBUTE_OUTPUT
  CREATE_LEAD: HUNTER_CREATE_LEAD_OUTPUT
  CREATE_LEADS_LIST: HUNTER_CREATE_LEADS_LIST_OUTPUT
  DELETE_CUSTOM_ATTRIBUTE: HUNTER_DELETE_CUSTOM_ATTRIBUTE_OUTPUT
  DELETE_LEAD: HUNTER_DELETE_LEAD_OUTPUT
  DELETE_LEADS_LIST: HUNTER_DELETE_LEADS_LIST_OUTPUT
  DOMAIN_SEARCH: HUNTER_DOMAIN_SEARCH_OUTPUT
  EMAIL_FINDER: HUNTER_EMAIL_FINDER_OUTPUT
  EMAIL_VERIFIER: HUNTER_EMAIL_VERIFIER_OUTPUT
  GET_CUSTOM_ATTRIBUTE: HUNTER_GET_CUSTOM_ATTRIBUTE_OUTPUT
  GET_LEAD: HUNTER_GET_LEAD_OUTPUT
  GET_LEADS_LIST: HUNTER_GET_LEADS_LIST_OUTPUT
  LIST_CUSTOM_ATTRIBUTES: HUNTER_LIST_CUSTOM_ATTRIBUTES_OUTPUT
  LIST_LEADS: HUNTER_LIST_LEADS_OUTPUT
  LIST_LEADS_LISTS: HUNTER_LIST_LEADS_LISTS_OUTPUT
  UPDATE_CUSTOM_ATTRIBUTE: HUNTER_UPDATE_CUSTOM_ATTRIBUTE_OUTPUT
  UPDATE_LEAD: HUNTER_UPDATE_LEAD_OUTPUT
  UPDATE_LEADS_LIST: HUNTER_UPDATE_LEADS_LIST_OUTPUT
  UPSERT_LEAD: HUNTER_UPSERT_LEAD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HUNTER toolkit.
 */
export const HUNTER = {
  slug: "hunter",
  tools: {
    /**
     * Tool to retrieve information about your hunter account. use when you need to check your plan details and usage limits after confirming credentials.
     */
    ACCOUNT_INFORMATION: "HUNTER_ACCOUNT_INFORMATION",
    /**
     * Tool to get enrichment information for a company by its domain. use when you need full company details (industry, description, location, metrics) from hunter.
     */
    COMPANY_ENRICHMENT: "HUNTER_COMPANY_ENRICHMENT",
    /**
     * Tool to create a new custom lead attribute in your account. use after deciding on the attribute label.
     */
    CREATE_CUSTOM_ATTRIBUTE: "HUNTER_CREATE_CUSTOM_ATTRIBUTE",
    /**
     * Tool to create a new lead. use after gathering all prospect details to save them to your hunter account.
     */
    CREATE_LEAD: "HUNTER_CREATE_LEAD",
    /**
     * Tool to create a new leads list. use when you need to organize leads into a custom list before adding leads.
     */
    CREATE_LEADS_LIST: "HUNTER_CREATE_LEADS_LIST",
    /**
     * Tool to delete an existing custom attribute. use after confirming the attribute id to be removed.
     */
    DELETE_CUSTOM_ATTRIBUTE: "HUNTER_DELETE_CUSTOM_ATTRIBUTE",
    /**
     * Tool to delete a lead. use after confirming the lead's id to remove it from your hunter.io account.
     */
    DELETE_LEAD: "HUNTER_DELETE_LEAD",
    /**
     * Tool to delete a leads list by its id. use after confirming the leads list id to remove it from your hunter.io account.
     */
    DELETE_LEADS_LIST: "HUNTER_DELETE_LEADS_LIST",
    /**
     * Tool to search all email addresses for a given domain or company. use when you need public emails and metadata for outreach or enrichment.
     */
    DOMAIN_SEARCH: "HUNTER_DOMAIN_SEARCH",
    /**
     * Tool to find the most likely email address for a person at a domain or company. use when you have a person's name and a domain or company and need to infer their email.
     */
    EMAIL_FINDER: "HUNTER_EMAIL_FINDER",
    /**
     * Tool to verify the deliverability of an email address. use when you need to ensure an address is valid and reachable.
     */
    EMAIL_VERIFIER: "HUNTER_EMAIL_VERIFIER",
    /**
     * Tool to retrieve details of a specific custom attribute. use when you need the label and slug for an attribute id.
     */
    GET_CUSTOM_ATTRIBUTE: "HUNTER_GET_CUSTOM_ATTRIBUTE",
    /**
     * Tool to retrieve details of a specific lead by id. use after confirming the lead's id to fetch its full record.
     */
    GET_LEAD: "HUNTER_GET_LEAD",
    /**
     * Tool to retrieve details of a specific leads list by id. use when you need to inspect the contents of an existing leads list.
     */
    GET_LEADS_LIST: "HUNTER_GET_LEADS_LIST",
    /**
     * Tool to list all custom lead attributes in your account. use when you need to retrieve your account's custom lead attributes after authenticating.
     */
    LIST_CUSTOM_ATTRIBUTES: "HUNTER_LIST_CUSTOM_ATTRIBUTES",
    /**
     * Tool to list all leads saved in your account with optional filters. use when you need to retrieve leads with specific criteria after confirming your api key.
     */
    LIST_LEADS: "HUNTER_LIST_LEADS",
    /**
     * Tool to list all leads lists in your account. use when you need to retrieve and paginate through your leads lists.
     */
    LIST_LEADS_LISTS: "HUNTER_LIST_LEADS_LISTS",
    /**
     * Tool to update an existing custom attribute's label. use when renaming a custom attribute after creation.
     */
    UPDATE_CUSTOM_ATTRIBUTE: "HUNTER_UPDATE_CUSTOM_ATTRIBUTE",
    /**
     * Tool to update details of an existing lead by id. use when you need to modify saved lead attributes after creation.
     */
    UPDATE_LEAD: "HUNTER_UPDATE_LEAD",
    /**
     * Tool to update the name of a specific leads list. use when renaming an existing leads list.
     */
    UPDATE_LEADS_LIST: "HUNTER_UPDATE_LEADS_LIST",
    /**
     * Tool to create or update a lead by email in one call. use when you want to ensure a lead exists with the provided information without checking its existence first.
     */
    UPSERT_LEAD: "HUNTER_UPSERT_LEAD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HUNTER".
 */
export type HUNTER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HUNTER".
 */
export type HUNTER_TRIGGER_EVENTS = {}
