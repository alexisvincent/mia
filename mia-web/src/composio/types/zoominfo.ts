// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ZOOMINFO's ZOOMINFO_ENRICH_COMPANY tool input.
 */
type ZOOMINFO_ENRICH_COMPANY_INPUT = {
  /**
   * Company City
   * @description City for the company's primary address
   */
  companyCity?: string;
  /**
   * Company Country
   * @description Country for the company's primary address. You can use free text or see the Country lookup endpoint for values.
   */
  companyCountry?: string;
  /**
   * Company Fax
   * @description Fax number of the company headquarters
   */
  companyFax?: string;
  /**
   * Company Id
   * @description Unique ZoomInfo identifier for a company
   */
  companyId?: string;
  /**
   * Company Name
   * @description Company name
   */
  companyName?: string;
  /**
   * Company Phone
   * @description Phone number of the company headquarters
   */
  companyPhone?: string;
  /**
   * Company State
   * @description Company state (U.S.) or province (Canada). You can use free text state or province names (e.g., 'new hampshire'), the two-letter common abbreviation for a U.S. state (e.g., 'nh'), or values provided in the State lookup endpoint.
   */
  companyState?: string;
  /**
   * Company Street
   * @description Street address for the company's primary address
   */
  companyStreet?: string;
  /**
   * Company Ticker
   * @description Company stock ticker symbol
   */
  companyTicker?: string;
  /**
   * Company Website
   * @description Company website URL in http://www.example.com format
   */
  companyWebsite?: string;
  /**
   * Company Zip Code
   * @description Zip Code or Postal Code for the company's primary address
   */
  companyZipCode?: string;
  /**
   * Ip Address
   * @description IP address associated with the company
   */
  ipAddress?: string;
};

/**
 * Type of ZOOMINFO's ZOOMINFO_ENRICH_COMPANY tool output.
 */
type ZOOMINFO_ENRICH_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_ENRICH_CONTACT tool input.
 */
type ZOOMINFO_ENRICH_CONTACT_INPUT = {
  /**
   * Company Id
   * @description Unique ZoomInfo identifier for the company
   */
  companyId?: number | null;
  /**
   * Company Name
   * @description Name of the company for which the contact works, or has worked
   */
  companyName?: string;
  /**
   * Contact Accuracy Score Min
   * @description Return contacts that meet the minimum accuracy score or higher
   */
  contactAccuracyScoreMin?: number;
  /**
   * Email Address
   * @description Business or Personal email address for the contact in example@example.com format
   */
  emailAddress?: string;
  /**
   * External Url
   * @description Social media URLs for the contact (e.g., Facebook, Twitter, LinkedIn)
   */
  externalURL?: string;
  /**
   * First Name
   * @description Contact first name
   */
  firstName?: string;
  /**
   * Full Name
   * @description Contact full name
   */
  fullName?: string;
  /**
   * Hashed Email
   * @description Hashed email value for the contact. Allows matching via an email address with the extra security of not exposing the email. Supported hash algorithms are: MD5, SHA1, SHA256 and SHA512.
   */
  hashedEmail?: string;
  /**
   * Job Title
   * @description Contact title at current place of employment
   */
  jobTitle?: string;
  /**
   * Last Name
   * @description Contact last name
   */
  lastName?: string;
  /**
   * Last Updated Date After
   * @description The date after which the contact's profile was last updated in YYYY-MM-DD format
   */
  lastUpdatedDateAfter?: string;
  /**
   * Person Id
   * @description Unique ZoomInfo identifier for the contact
   */
  personId?: number | null;
  /**
   * Phone
   * @description Contact direct or mobile phone number
   */
  phone?: string;
  /**
   * Valid Date After
   * @description The date after which the contact's profile was last validated in YYYY-MM-DD format
   */
  validDateAfter?: string;
};

/**
 * Type of ZOOMINFO's ZOOMINFO_ENRICH_CONTACT tool output.
 */
type ZOOMINFO_ENRICH_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_ENRICH_INTENT tool input.
 */
type ZOOMINFO_ENRICH_INTENT_INPUT = {
  /**
   * Audience Strength Max
   * @description Maximum audience strength score. Use with audienceStrengthMin to form a range. Values are A, B, C, D, and E, with A indicating a larger audience.
   */
  audienceStrengthMax?: string;
  /**
   * Audience Strength Min
   * @description Minimum audience strength score. Use with audienceStrengthMax to form a range. Values are A, B, C, D, and E, with A indicating a larger audience.
   */
  audienceStrengthMin?: string;
  /**
   * Company Id
   * @description Unique ZoomInfo identifier for a company
   */
  companyId?: string;
  /**
   * Company Name
   * @description Company name
   */
  companyName?: string;
  /**
   * Company Website
   * @description Company website URL in http://www.example.com format
   */
  companyWebsite?: string;
  /**
   * Find Recommended Contacts
   * @description Choose whether to get the recommended contacts using the findRecommendedContacts flag. Default is true.
   */
  findRecommendedContacts?: boolean;
  /**
   * Page
   * @description Provides the results for the given page, used in conjunction with rpp
   */
  page?: number;
  /**
   * Rpp
   * @description Limits the results returned to the given number of results per page. Default is 25.
   */
  rpp?: number;
  /**
   * Signal End Date
   * @description End date for a company signaling interest in a topic
   */
  signalEndDate?: string;
  /**
   * Signal Score Max
   * @description Maximum signal score. Use with signalScoreMin to form a range. Minimum score is 60 and maximum is 100.
   */
  signalScoreMax?: number;
  /**
   * Signal Score Min
   * @description Minimum signal score. Use with signalScoreMax to form a range. Minimum score is 60 and maximum is 100.
   */
  signalScoreMin?: number;
  /**
   * Signal Start Date
   * @description Start date for a company signaling interest in a topic
   */
  signalStartDate?: string;
  /**
   * Sort By
   * @description Sort results by valid output fields. Valid values are: signalDate, signalScore, category, topic, audienceStrength.
   */
  sortBy?: string;
  /**
   * Sort Order
   * @description Provide sortBy if specifying sortOrder. Valid values are asc, ascending, desc, and descending. By default, results are sorted in descending order.
   */
  sortOrder?: string;
  /**
   * Topics
   * @description Intent topics. Separate multiple topics with the pipe symbol. See the Intent Topics lookup endpoint for values.
   */
  topics?: string;
};

/**
 * Type of ZOOMINFO's ZOOMINFO_ENRICH_INTENT tool output.
 */
type ZOOMINFO_ENRICH_INTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_ENRICH_LOCATION tool input.
 */
type ZOOMINFO_ENRICH_LOCATION_INPUT = {
  /**
   * Company Id
   * @description ZoomInfo unique identifier for the company. Will accept a comma-separated list.
   */
  companyId?: string;
};

/**
 * Type of ZOOMINFO's ZOOMINFO_ENRICH_LOCATION tool output.
 */
type ZOOMINFO_ENRICH_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_ENRICH_NEWS tool input.
 */
type ZOOMINFO_ENRICH_NEWS_INPUT = {
  /**
   * Categories
   * @description Category of news articles. See the News Categories endpoint for values.
   */
  categories?: string;
  /**
   * Company Id
   * @description Unique ZoomInfo identifier for a company
   */
  companyId?: string;
  /**
   * Limit
   * @description Number of articles to return per page. The maximum limit is 100.
   */
  limit?: number;
  /**
   * Page
   * @description Provides the results for the given page. Used in conjunction with limit.
   */
  page?: number;
  /**
   * Page Date Max
   * @description Specify the latest publishing date for news articles. For example, 2020-01-31 will return all new articles published on or before Jan 31, 2020.
   */
  pageDateMax?: string;
  /**
   * Page Date Min
   * @description Specify the earliest publishing date for news articles returned. For example, 2020-01-01 will return all news articles published on or after Jan 1, 2020.
   */
  pageDateMin?: string;
  /**
   * Url
   * @description Search news by text contained in URL strings. You must specify a minimum of 5 characters per input.
   */
  url?: string[];
};

/**
 * Type of ZOOMINFO's ZOOMINFO_ENRICH_NEWS tool output.
 */
type ZOOMINFO_ENRICH_NEWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_ENRICH_SCOOP tool input.
 */
type ZOOMINFO_ENRICH_SCOOP_INPUT = {
  /**
   * Company Id
   * @description ZoomInfo unique identifier for the company. Will accept a comma-separated list.
   */
  companyId?: string;
  /**
   * Company Name
   * @description Company name
   */
  companyName?: string;
  /**
   * Company Website
   * @description Company domain
   */
  companyWebsite?: string;
  /**
   * Department
   * @description Retrieve scoops based on department (IT, finance, HR and so on). See the Scoop Departments lookup endpoint for valid inputs.
   */
  department?: string;
  /**
   * Description
   * @description Search for scoops based on description. Will accept a comma-separated list of keywords.
   */
  description?: string;
  /**
   * Page
   * @description Provides the results for the given page, used in conjunction with rpp
   */
  page?: number;
  /**
   * Published End Date
   * @description Ending date to search for scoops based on when published. Form a range using publishedEndDate. Uses YYYY-MM-DD format.
   */
  publishedEndDate?: string;
  /**
   * Published Start Date
   * @description Starting date to search for scoops based on when published. Form a range using publishedEndDate or omit publishedEndDate to search to the current date. Uses YYYY-MM-DD format.
   */
  publishedStartDate?: string;
  /**
   * Rpp
   * @description Limits the results returned to the given number of results per page. Default is 25.
   */
  rpp?: number;
  /**
   * Scoop Id
   * @description ZoomInfo unique identifier for a scoop. Will accept a comma-separated list.
   */
  scoopId?: string;
  /**
   * Scoop Topic
   * @description Retrieve scoops based on topic (e.g., integrations, technology, compliance and so on). See the Scoop Topics lookup endpoint for valid inputs.
   */
  scoopTopic?: string;
  /**
   * Scoop Type
   * @description Retrieve scoops based on type (e.g., earnings, awards, partnerships and so on). See the Scoop Types lookup endpoint for valid inputs.
   */
  scoopType?: string;
  /**
   * Sort By
   * @description Sort results by valid output fields: scoopId, originalPublishedDate, description, link, or linkText
   */
  sortBy?: string;
  /**
   * Sort Order
   * @description Provide sortBy if specifying sortOrder. Valid values are asc, ascending, desc, and descending. By default, results are sorted in descending order.
   */
  sortOrder?: string;
  /**
   * Updated Since Creation
   * @description Include scoops that have been updated since publishedStartDate
   */
  updatedSinceCreation?: boolean;
};

/**
 * Type of ZOOMINFO's ZOOMINFO_ENRICH_SCOOP tool output.
 */
type ZOOMINFO_ENRICH_SCOOP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_ENRICH_TECHNOLOGY tool input.
 */
type ZOOMINFO_ENRICH_TECHNOLOGY_INPUT = {
  /**
   * Company Id
   * @description ZoomInfo unique identifier for the company. Will accept a comma-separated list.
   */
  companyId?: string;
};

/**
 * Type of ZOOMINFO's ZOOMINFO_ENRICH_TECHNOLOGY tool output.
 */
type ZOOMINFO_ENRICH_TECHNOLOGY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_COMPANY tool input.
 */
type ZOOMINFO_SEARCH_COMPANY_INPUT = {
  /**
   * Address
   * @description Company address
   */
  address?: string;
  /**
   * Business Model
   * @description Search using Business Model (B2C, B2B, B2G) for a company. Default is All
   */
  businessModel?: string[];
  /**
   * Certified
   * @description Denotes if ZoomInfo's research and data team has confirmed activity within the past 12 months
   */
  certified?: number;
  /**
   * Company Description
   * @description Text description unique to the company you want to use as search criteria
   */
  companyDescription?: string;
  /**
   * Company Id
   * @description ZoomInfo unique identifier for the company. Will accept-comma-separated list.
   */
  companyId?: string;
  /**
   * Company Name
   * @description Company name
   */
  companyName?: string;
  /**
   * Company Ranking
   * @description Company ranking list (e.g., Fortune 500 and so on). See the Company Ranking lookup endpoint for values.
   */
  companyRanking?: string;
  /**
   * Company Structure Included Sub Unit Types
   * @description Company hierarchical structure
   */
  companyStructureIncludedSubUnitTypes?: string;
  /**
   * Company Ticker
   * @description Company stock ticker symbol
   */
  companyTicker?: string[];
  /**
   * Company Type
   * @description Company type (private, public, and so on). See the Company Type lookup endpoint for values.
   */
  companyType?: string;
  /**
   * Company Website
   * @description URL to the company website in http://www.example.com format
   */
  companyWebsite?: string;
  /**
   * Continent
   * @description Continent for the company's primary address. See the Continent lookup endpoint for values.
   */
  continent?: string;
  /**
   * Country
   * @description Country for the company's primary address. You can use free text or see the Country lookup endpoint for values.
   */
  country?: string;
  /**
   * Employee Count
   * @description Employee count range. Accepts a comma-separated list of values. See the Employee Count lookup endpoint for values. Alternatively, to get more granular ranges, you can use the employeeRangeMin and employeeRangeMax parameters.
   */
  employeeCount?: string;
  /**
   * Employee Range Max
   * @description Maximum employee count for a company. Use with employeeRangeMin to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges.
   */
  employeeRangeMax?: string;
  /**
   * Employee Range Min
   * @description Minimum employee count for a company. Use with employeeRangeMax to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges.
   */
  employeeRangeMin?: string;
  /**
   * Engagement End Date
   * @description Engagement end date in YYYY-MM-DD format. EngagementStartDate is required.
   */
  engagementEndDate?: string;
  /**
   * Engagement Start Date
   * @description Engagement start date in YYYY-MM-DD format.
   */
  engagementStartDate?: string;
  /**
   * Engagement Type
   * @description List of engagement types to search for. Accepted values are a list of email, phone, online meeting.
   */
  engagementType?: string[];
  /**
   * Exclude Defunct Companies
   * @description Include or exclude defunct companies. The default value is false.
   * @default false
   */
  excludeDefunctCompanies: boolean;
  /**
   * Excluded Regions
   * @description Exclude a company metro area. Accepts a comma-separated list of U.S. and Canada metro areas. See the Metro Area lookup endpoint for values.
   */
  excludedRegions?: string;
  /**
   * Funding Amount Max
   * @description Maximum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMax is used without fundingAmountMin, the result will be the amount specified or less.
   */
  fundingAmountMax?: number;
  /**
   * Funding Amount Min
   * @description Minimum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMin is used without fundingAmountMax, the result will be the amount specified or greater.
   */
  fundingAmountMin?: number;
  /**
   * Funding End Date
   * @description End date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
   */
  fundingEndDate?: string;
  /**
   * Funding Start Date
   * @description Start date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
   */
  fundingStartDate?: string;
  /**
   * Hash Tag String
   * @description Hash tags for a company. Can include a comma-separated list.
   */
  hashTagString?: string;
  /**
   * Industry Codes
   * @description Top-level Industry that the contact works in. A contact can have multiple top level industries. Tags are based on the contact's current company. Can include a comma-separated list. See the Industry Codes lookup endpoint for values.
   */
  industryCodes?: string;
  /**
   * Industry Keywords
   * @description Industry keywords associated with a company. Can include either 'AND' or 'OR' operators. For example, 'software AND security' or 'software OR security'.
   */
  industryKeywords?: string;
  /**
   * Location Search Type
   * @description Location criteria for search. Values are PersonOrHQ, PersonAndHQ, Person, HQ, PersonThenHQ.
   */
  locationSearchType?: string;
  /**
   * Metro Region
   * @description Company metro area. Accepts a comma-separated list of U.S. and Canada metro areas. See the Metro Area lookup endpoint for values.
   */
  metroRegion?: string;
  /**
   * Naics Codes
   * @description The North American Industry Classification System (NAICS) is the standard used by Federal statistical agencies in classifying business establishments for the purpose of collecting, analyzing, and publishing statistical data related to the U.S. business economy. See the NAICS Codes lookup endpoint for values.
   */
  naicsCodes?: string;
  /**
   * One Year Employee Growth Rate Max
   * @description Maximum one year employee growth rate for a company. Use with oneYearEmployeeGrowthRateMin to set a range.
   */
  oneYearEmployeeGrowthRateMax?: string;
  /**
   * One Year Employee Growth Rate Min
   * @description Minimum one year employee growth rate for a company. Use with oneYearEmployeeGrowthRateMax to set a range.
   */
  oneYearEmployeeGrowthRateMin?: string;
  /**
   * Page
   * @description Provides the results for the given page, used in conjunction with rpp
   */
  page?: number;
  /**
   * Parent Id
   * @description ZoomInfo Company ID for parent company
   */
  parentId?: string;
  /**
   * Primary Industries Only
   * @description Used in conjunction with the industryCodes input parameter. When set to true, any result returned must have one of the specified industries as a primary industry. If no industries are specified, then this parameter will be ignored. Default is false.
   * @default false
   */
  primaryIndustriesOnly: boolean;
  /**
   * Revenue
   * @description Annual revenue range in U.S. dollars. Accepts a comma-separated list of values. See the Revenue Range lookup endpoint for values. Alternatively, to get more granular ranges, you can use the revenueMin and revenueMax parameters.
   */
  revenue?: string;
  /**
   * Revenue Max
   * @description Maximum annual revenue for a company in U.S. dollars. Use with revenueMin to set a range. Alternatively, you can use the revenue parameter to search for pre-defined ranges.
   */
  revenueMax?: number;
  /**
   * Revenue Min
   * @description Minimum annual revenue for a company in U.S. dollars. Use with revenueMax to set a range. Alternatively, you can use the revenue parameter to search for pre-defined ranges.
   */
  revenueMin?: number;
  /**
   * Rpp
   * @description Limits the results returned to the given number of results per page. Default is 25.
   * @default 25
   */
  rpp: number;
  /**
   * Sic Codes
   * @description The Standard Industrial Classification is a system for classifying industries by a four-digit code. See the SIC Codes lookup endpoint for values.
   */
  sicCodes?: string;
  /**
   * Sort By
   * @description Sort results by valid output fields: name, employeeCount, revenue
   */
  sortBy?: string;
  /**
   * Sort Order
   * @description Provide sortBy if specifying sortOrder. Valid values are asc, ascending, desc, and descending. By default, results are sorted in descending order.
   */
  sortOrder?: string;
  /**
   * State
   * @description Company state (U.S.) or province (Canada). You can use free text state or province names (e.g., 'new hampshire'), the two-letter common abbreviation for a U.S. state (e.g., 'nh'), or values provided in the State lookup endpoint for values.
   */
  state?: string;
  /**
   * Street
   * @description Company street
   */
  street?: string;
  /**
   * Sub Unit Types
   * @description Company sub types (e.g., division, subsidiary and so on). See the Sub Unit Type lookup endpoint for values.
   */
  subUnitTypes?: string;
  /**
   * Tech Attribute Tag List
   * @description Specify technology product tags. See the Tech - Product lookup endpoint for values. This string uses a numerical dot notation format similar to an IP address. The notation denotes the hierarchical structure: parent-category.category.vendor. For example, 333.202.28. You can use wildcards in the notation (e.g., 333.202.\\*, \\*.202.\\*, and so on).
   */
  techAttributeTagList?: string;
  /**
   * Two Year Employee Growth Rate Max
   * @description Maximum two year employee growth rate for a company. Use with twoYearEmployeeGrowthRateMin to set a range.
   */
  twoYearEmployeeGrowthRateMax?: string;
  /**
   * Two Year Employee Growth Rate Min
   * @description Minimum two year employee growth rate for a company. Use with twoYearEmployeeGrowthRateMax to set a range.
   */
  twoYearEmployeeGrowthRateMin?: string;
  /**
   * Ultimate Parent Id
   * @description ZoomInfo Company ID for ultimate parent company
   */
  ultimateParentId?: string;
  /**
   * Zip Code
   * @description Zip Code of the company's primary address
   */
  zipCode?: string;
  /**
   * Zip Code Radius Miles
   * @description Used in conjunction with zipCode, designates a geographical radius (in miles) from the zipCode provided.
   */
  zipCodeRadiusMiles?: string;
  /**
   * Zoominfo Contacts Max
   * @description Maximum number of ZoomInfo contacts associated with company
   */
  zoominfoContactsMax?: string;
  /**
   * Zoominfo Contacts Min
   * @description Minimum number of ZoomInfo contacts associated with company
   */
  zoominfoContactsMin?: string;
};

/**
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_COMPANY tool output.
 */
type ZOOMINFO_SEARCH_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_COMPANY_INPUT tool input.
 */
type ZOOMINFO_SEARCH_COMPANY_INPUT_INPUT = object;

/**
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_COMPANY_INPUT tool output.
 */
type ZOOMINFO_SEARCH_COMPANY_INPUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_CONTACT tool input.
 */
type ZOOMINFO_SEARCH_CONTACT_INPUT = {
  /**
   * Address
   * @description Company address
   */
  address?: string;
  /**
   * Board Member
   * @description Exclude or include board members from search results. By default, the API includes board members in results. See the Board Members lookup endpoint for values.
   */
  boardMember?: string;
  /**
   * Company Description
   * @description Text description unique to the company you want to use as search criteria
   */
  companyDescription?: string;
  /**
   * Company Id
   * @description ZoomInfo unique identifier for the company. Will accept a comma-separated list.
   */
  companyId?: string;
  /**
   * Company Name
   * @description Company name. Can use OR and NOT operators to include or exclude companies by name. For example, 'Vodaphone OR Comcast NOT Verizon'
   */
  companyName?: string;
  /**
   * Company Past Or Present
   * @description Returns companies based on a contact's work history. Values are present (default), past, and pastAndPresent.
   */
  companyPastOrPresent?: string;
  /**
   * Company Ranking
   * @description Company ranking list (e.g., Fortune 500 and so on). See the Company Ranking lookup endpoint for values.
   */
  companyRanking?: string;
  /**
   * Company Structure Included Sub Unit Types
   * @description Company hierarchical structure
   */
  companyStructureIncludedSubUnitTypes?: string;
  /**
   * Company Ticker
   * @description Company stock ticker symbol
   */
  companyTicker?: string[];
  /**
   * Company Type
   * @description Company type (private, public, and so on). See the Company Type lookup endpoint for values.
   */
  companyType?: string;
  /**
   * Company Website
   * @description URL to the company website in http://www.example.com format
   */
  companyWebsite?: string;
  /**
   * Contact Accuracy Score Max
   * @description Maximum accuracy score for search results. This score indicates the likelihood that a contact is reachable and still employed by the company listed. Minimum score is 70 and maximum is 99.
   */
  contactAccuracyScoreMax?: string;
  /**
   * Contact Accuracy Score Min
   * @description Minimum accuracy score for search results. This score indicates the likelihood that a contact is reachable and still employed by the company listed. Minimum score is 70 and maximum is 99.
   */
  contactAccuracyScoreMin?: string;
  /**
   * Continent
   * @description Continent for the company's primary address. See the Continent lookup endpoint for values.
   */
  continent?: string;
  /**
   * Country
   * @description Country for the company's primary address. You can use free text or see the Country lookup endpoint for values.
   */
  country?: string;
  /**
   * Degree
   * @description Contact education degree
   */
  degree?: string;
  /**
   * Department
   * @description Contact department at current place of employment. See the Contact Departments lookup endpoint for values.
   */
  department?: string;
  /**
   * Email Address
   * @description Work email address for the contact in example@example.com format
   */
  emailAddress?: string;
  /**
   * Employee Count
   * @description Employee count range. Accepts a comma-separated list of values. See the Employee Count lookup endpoint for values. Alternatively, to get more granular ranges, you can use the employeeRangeMin and employeeRangeMax parameters.
   */
  employeeCount?: string;
  /**
   * Employee Range Max
   * @description Maximum employee count for a company. Use with employeeRangeMin to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges.
   */
  employeeRangeMax?: string;
  /**
   * Employee Range Min
   * @description Minimum employee count for a company. Use with employeeRangeMax to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges.
   */
  employeeRangeMin?: string;
  /**
   * Engagement End Date
   * @description Engagement end date in YYYY-MM-DD format. EngagementStartDate is required.
   */
  engagementEndDate?: string;
  /**
   * Engagement Start Date
   * @description Engagement start date in YYYY-MM-DD format.
   */
  engagementStartDate?: string;
  /**
   * Engagement Type
   * @description List of engagement types to search for. Accepted values are a list of email, phone, online meeting.
   */
  engagementType?: string[];
  /**
   * Exclude Job Title
   * @description Exclude comma-separated list of job titles
   */
  excludeJobTitle?: string;
  /**
   * Exclude Management Level
   * @description Exclude contact based on management level. See the Management Levels lookup endpoint for values.
   */
  excludeManagementLevel?: string;
  /**
   * Exclude Partial Profiles
   * @description Contacts who do not have an active company associated with them are considered partial profiles. Exclude contacts with a partial profile from search results.
   */
  excludePartialProfiles?: boolean;
  /**
   * Excluded Regions
   * @description Exclude a company metro area. Accepts a comma-separated list of U.S. and Canada metro areas. See the Metro Area lookup endpoint for values.
   */
  excludedRegions?: string;
  /**
   * Executives Only
   * @description Return only executives
   */
  executivesOnly?: boolean;
  /**
   * Filter By Buying Committee
   * @description Boolean flag for Buying Committee. Setting this to TRUE will filter the results based on the Buying Committees set for the account. Default is FALSE.
   */
  filterByBuyingCommittee?: boolean;
  /**
   * First Name
   * @description Contact first name
   */
  firstName?: string;
  /**
   * Full Name
   * @description Contact full name
   */
  fullName?: string;
  /**
   * Funding Amount Max
   * @description Maximum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMax is used without fundingAmountMin, the result will be the amount specified or less.
   */
  fundingAmountMax?: number;
  /**
   * Funding Amount Min
   * @description Minimum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMin is used without fundingAmountMax, the result will be the amount specified or greater.
   */
  fundingAmountMin?: number;
  /**
   * Funding End Date
   * @description End date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
   */
  fundingEndDate?: string;
  /**
   * Funding Start Date
   * @description Start date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
   */
  fundingStartDate?: string;
  /**
   * Has Been Notified
   * @description Contacts who have been notified of inclusion in ZoomInfo's database. Values are exclude, include, and only.
   */
  hasBeenNotified?: string;
  /**
   * Hash Tag String
   * @description Hash tags for a company. Can include a comma-separated list.
   */
  hashTagString?: string;
  /**
   * Hashed Email
   * @description Hashed email value for the contact. Allows searching via an email address with the extra security of not exposing the email. Supported hash algorithms are: MD5, SHA1, SHA256 and SHA512.
   */
  hashedEmail?: string;
  /**
   * Industry Codes
   * @description Top-level industry that the contact works in. A contact can have multiple top level industries. Tags are based on the contact's current company. Can include a comma-separated list. See the Industry Codes lookup endpoint for values.
   */
  industryCodes?: string;
  /**
   * Industry Keywords
   * @description Industry keywords associated with a company. Can include a comma-separated list.
   */
  industryKeywords?: string;
  /**
   * Job Function
   * @description Contact job function at their current place of employment. See the Job Function lookup endpoint for values.
   */
  jobFunction?: string;
  /**
   * Job Title
   * @description Contact title at current place of employment. Use OR to input multiple job titles.
   */
  jobTitle?: string;
  /**
   * Last Name
   * @description Contact last name
   */
  lastName?: string;
  /**
   * Last Updated Date After
   * @description The date after which the contact's profile was last updated in YYYY-MM-DD format
   */
  lastUpdatedDateAfter?: string;
  /**
   * Last Updated In Months
   * @description Number of months within which the contact's profile was last updated. For example, if lastUpdatedinMonths is 12 only contacts that were updated in the last 12 months will be returned.
   */
  lastUpdatedInMonths?: number;
  /**
   * Location Company Id
   * @description Searches by contact's location IDs. Use the Location Enrich endpoint to obtain a list of location IDs for a company.
   */
  locationCompanyId?: string[];
  /**
   * Location Search Type
   * @description Location criteria for search. Values are PersonOrHQ, PersonAndHQ, Person, HQ, PersonThenHQ.
   */
  locationSearchType?: string;
  /**
   * Management Level
   * @description Contact management level at current place of employment. See the Management Levels lookup endpoint for values.
   */
  managementLevel?: string;
  /**
   * Metro Region
   * @description Company metro area. Accepts a comma-separated list of U.S. and Canada metro areas. See the Metro Area lookup endpoint for values.
   */
  metroRegion?: string;
  /**
   * Middle Initial
   * @description Contact middle initial
   */
  middleInitial?: string;
  /**
   * Naics Codes
   * @description The North American Industry Classification System (NAICS) is the standard used by Federal statistical agencies in classifying business establishments for the purpose of collecting, analyzing, and publishing statistical data related to the U.S. business economy. See the NAICS Codes lookup endpoint for values.
   */
  naicsCodes?: string;
  /**
   * One Year Employee Growth Rate Max
   * @description Maximum one year employee growth rate for a company. Use with oneYearEmployeeGrowthRateMin to set a range.
   */
  oneYearEmployeeGrowthRateMax?: string;
  /**
   * One Year Employee Growth Rate Min
   * @description Minimum one year employee growth rate for a company. Use with oneYearEmployeeGrowthRateMax to set a range.
   */
  oneYearEmployeeGrowthRateMin?: string;
  /**
   * Page
   * @description Provides the results for the given page, used in conjunction with rpp
   */
  page?: number;
  /**
   * Parent Id
   * @description ZoomInfo Company ID for parent company
   */
  parentId?: string;
  /**
   * Person Id
   * @description Unique ZoomInfo identifier for the contact. Can include a comma-separated list.
   */
  personId?: string;
  /**
   * Phone
   * @description List of person phones or mobile numbers. Here's an example list - any of the following phone number formats are acceptable: ['(123)-456-7890', '1234567890', '123 456 7890', '123-445-7890']. Alphabetical characters are not allowed.
   */
  phone?: string[];
  /**
   * Position Start Date Max
   * @description Maximum date for when a contact began current employment. Use with positionStartDateMin to set a range.
   */
  positionStartDateMax?: string;
  /**
   * Position Start Date Min
   * @description Minimum date for when a contact began current employment. Use with positionStartDateMax to set a range.
   */
  positionStartDateMin?: string;
  /**
   * Primary Industries Only
   * @description Used in conjunction with the industryCodes input parameter. When set to true, any result returned must have one of the specified industries as a primary industry. If no industries are specified, then this parameter will be ignored. Default is false.
   */
  primaryIndustriesOnly?: boolean;
  /**
   * Required Fields
   * @description Specify a list of required fields for each record returned. Can include email, phone (direct or company), directPhone, personalEmail, and mobilePhone. Can include a comma-separated list of these fields. For example, requiring direct phone (directPhone) will only return contacts which have the Direct Phone Number field populated.
   */
  requiredFields?: string;
  /**
   * Revenue
   * @description Annual revenue range in U.S. dollars. Accepts a comma-separated list of values. See the Revenue Range lookup endpoint for values. Alternatively, to get more granular ranges, you can use the revenueMin and revenueMax parameters.
   */
  revenue?: string;
  /**
   * Revenue Max
   * @description Maximum annual revenue for a company in U.S. dollars. Use with revenueMin to set a range. Alternatively, you can use the revenue parameter to search for pre-defined ranges.
   */
  revenueMax?: number;
  /**
   * Revenue Min
   * @description Minimum annual revenue for a company in U.S. dollars. Use with revenueMax to set a range. Alternatively, you can use the revenue parameter to search for pre-defined ranges.
   */
  revenueMin?: number;
  /**
   * Rpp
   * @description Limits the results returned to the given number of results per page. Default is 25.
   * @default 25
   */
  rpp: number;
  /**
   * School
   * @description Contact educational institution
   */
  school?: string;
  /**
   * Sic Codes
   * @description The Standard Industrial Classification is a system for classifying industries by a four-digit code. See the SIC Codes lookup endpoint for values.
   */
  sicCodes?: string;
  /**
   * Sort By
   * @description Sort results by valid output fields: contactAccuracyScore, lastName, companyName, hierarchy, sourceCount, lastMentioned, relevance
   */
  sortBy?: string;
  /**
   * Sort Order
   * @description Provide sortBy if specifying sortOrder. Valid values are asc, ascending, desc, and descending. By default, results are sorted in descending order.
   */
  sortOrder?: string;
  /**
   * State
   * @description Company state (U.S.) or province (Canada). You can use free text state or province names (e.g., 'new hampshire'), the two-letter common abbreviation for a U.S. state (e.g., 'nh'), or values provided in the State lookup endpoint.
   */
  state?: string;
  /**
   * Street
   * @description Company street
   */
  street?: string;
  /**
   * Sub Unit Types
   * @description Company sub types (e.g., division, subsidiary and so on). See the Sub Unit Type lookup endpoint for values.
   */
  subUnitTypes?: string;
  /**
   * Supplemental Email
   * @description Supplemental email address for the contact in example@example.com format
   */
  supplementalEmail?: string[];
  /**
   * Tech Attribute Tag List
   * @description Specify technology product tags. See the Tech - Product lookup endpoint for values. This string uses a numerical dot notation format similar to an IP address. The notation denotes the hierarchical structure: parent-category.category.vendor. For example, 333.202.28. You can use wildcards in the notation (e.g., 333.202.\*, \*.202.\*, and so on).
   */
  techAttributeTagList?: string;
  /**
   * Tech Skills
   * @description List of technology skills for a contact. Default criteria is OR between multiple values. Should only contain string numbers
   */
  techSkills?: string[];
  /**
   * Two Year Employee Growth Rate Max
   * @description Maximum two year employee growth rate for a company. Use with twoYearEmployeeGrowthRateMin to set a range.
   */
  twoYearEmployeeGrowthRateMax?: string;
  /**
   * Two Year Employee Growth Rate Min
   * @description Minimum two year employee growth rate for a company. Use with twoYearEmployeeGrowthRateMax to set a range.
   */
  twoYearEmployeeGrowthRateMin?: string;
  /**
   * Ultimate Parent Id
   * @description ZoomInfo Company ID for ultimate parent company
   */
  ultimateParentId?: string;
  /**
   * Valid Date After
   * @description The date after which the contact's profile was last validated in YYYY-MM-DD format
   */
  validDateAfter?: string;
  /**
   * Web References
   * @description List of web references for a contact. Default criteria is OR between multiple values. Should only contain english letters and numbers.
   */
  webReferences?: string[];
  /**
   * Years Of Experience
   * @description Years of overall experience. Must be a comma-separated string of values. See the Years of Experience lookup endpoint for values.
   */
  yearsOfExperience?: string;
  /**
   * Zip Code
   * @description Zip Code of the company's primary address
   */
  zipCode?: string;
  /**
   * Zip Code Radius Miles
   * @description Used in conjunction with zipCode, designates a geographical radius (in miles) from the zipCode provided.
   */
  zipCodeRadiusMiles?: string;
  /**
   * Zoominfo Contacts Max
   * @description Maximum number of ZoomInfo contacts associated with company
   */
  zoominfoContactsMax?: string;
  /**
   * Zoominfo Contacts Min
   * @description Minimum number of ZoomInfo contacts associated with company
   */
  zoominfoContactsMin?: string;
};

/**
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_CONTACT tool output.
 */
type ZOOMINFO_SEARCH_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_CONTACT_INPUT tool input.
 */
type ZOOMINFO_SEARCH_CONTACT_INPUT_INPUT = object;

/**
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_CONTACT_INPUT tool output.
 */
type ZOOMINFO_SEARCH_CONTACT_INPUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_INTENT tool input.
 */
type ZOOMINFO_SEARCH_INTENT_INPUT = {
  /**
   * Audience Strength Max
   * @description Maximum audience strength score. Use with audienceStrengthMin to form a range. Values are A, B, C, D, and E, with A indicating a larger audience.
   */
  audienceStrengthMax?: string;
  /**
   * Audience Strength Min
   * @description Minimum audience strength score. Use with audienceStrengthMax to form a range. Values are A, B, C, D, and E, with A indicating a larger audience.
   */
  audienceStrengthMin?: string;
  /**
   * Page
   * @description Provides the results for the given page, used in conjunction with rpp.
   */
  page?: number;
  /**
   * Rpp
   * @description Limits the results returned to the given number of results per page. Default is 25.
   * @default 25
   */
  rpp: number;
  /**
   * Signal End Date
   * @description End date for a company signaling interest in a topic.
   */
  signalEndDate?: string;
  /**
   * Signal Score Max
   * @description Maximum signal score. Use with signalScoreMin to form a range. Minimum score is 60 and maximum is 100.
   */
  signalScoreMax?: number;
  /**
   * Signal Score Min
   * @description Minimum signal score. Use with signalScoreMax to form a range. Minimum score is 60 and maximum is 100.
   */
  signalScoreMin?: number;
  /**
   * Signal Start Date
   * @description Start date for a company signaling interest in a topic.
   */
  signalStartDate?: string;
  /**
   * Sort By
   * @description Sort results by valid output fields. Valid values are: signalDate, companyName, signalScore, category, topic, audienceStrength.
   */
  sortBy?: string;
  /**
   * Sort Order
   * @description Provide sortBy if specifying sortOrder. Valid values are asc, ascending, desc, and descending. By default, results are sorted in descending order.
   */
  sortOrder?: string;
  /**
   * Topics
   * @description Required. Intent topic(s). Accepts an array of strings. See the Intent Topics lookup endpoint for values.
   */
  topics?: string[];
};

/**
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_INTENT tool output.
 */
type ZOOMINFO_SEARCH_INTENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_INTENT_INPUT tool input.
 */
type ZOOMINFO_SEARCH_INTENT_INPUT_INPUT = object;

/**
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_INTENT_INPUT tool output.
 */
type ZOOMINFO_SEARCH_INTENT_INPUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_NEWS tool input.
 */
type ZOOMINFO_SEARCH_NEWS_INPUT = {
  /**
   * Categories
   * @description Category of news articles. Accepts an array of strings. See the News Categories lookup endpoint for values.
   */
  categories?: string[];
  /**
   * Page
   * @description Provides the results for the given page, used in conjunction with rpp. The maximum page number supported is 1000.
   */
  page?: number;
  /**
   * Page Date Max
   * @description Specify the latest publishing date for news articles returned. For example, 2020-01-31 will return all news articles published on or before Jan 31, 2020.
   */
  pageDateMax?: string;
  /**
   * Page Date Min
   * @description Specify the earliest publishing date for news articles returned. For example, 2020-01-01 will return all news articles published on or after Jan 1, 2020.
   */
  pageDateMin?: string;
  /**
   * Rpp
   * @description Limits the results returned to the given number of results per page. The default is 25 and the maximum rpp supported is 100.
   * @default 25
   */
  rpp: number;
  /**
   * Url
   * @description Search news by text contained in URL strings. You must specify a minimum of 5 characters per input.
   */
  url?: string[];
};

/**
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_NEWS tool output.
 */
type ZOOMINFO_SEARCH_NEWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_NEWS_INPUT tool input.
 */
type ZOOMINFO_SEARCH_NEWS_INPUT_INPUT = object;

/**
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_NEWS_INPUT tool output.
 */
type ZOOMINFO_SEARCH_NEWS_INPUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_SCOOP tool input.
 */
type ZOOMINFO_SEARCH_SCOOP_INPUT = {
  /**
   * Address
   * @description Company address
   */
  address?: string;
  /**
   * Company Description
   * @description Text description unique to the company you want to use as search criteria
   */
  companyDescription?: string;
  /**
   * Company Id
   * @description ZoomInfo unique identifier for the company. Will accept a comma-separated list.
   */
  companyId?: string;
  /**
   * Company Name
   * @description Company name
   */
  companyName?: string;
  /**
   * Company Ranking
   * @description Company ranking list (e.g., Fortune 500 and so on). See the Company Ranking lookup endpoint for values.
   */
  companyRanking?: string;
  /** Company Structure Included Sub Unit Types */
  companyStructureIncludedSubUnitTypes?: string;
  /**
   * Company Type
   * @description Company type (private, public, and so on). See the Company Type lookup endpoint for values.
   */
  companyType?: string;
  /**
   * Company Website
   * @description URL to the company website in http://www.example.com format
   */
  companyWebsite?: string;
  /**
   * Continent
   * @description Continent for the company's primary address. See the Continent lookup endpoint for values.
   */
  continent?: string;
  /**
   * Country
   * @description Country for the company's primary address. You can use free text or see the Country lookup endpoint for values.
   */
  country?: string;
  /**
   * Department
   * @description Retrieve scoops based on department (IT, finance, HR and so on). See the Scoop Departments lookup endpoint for values.
   */
  department?: string;
  /**
   * Description
   * @description Search for scoops based on description. Will accept a comma-separated list of keywords.
   */
  description?: string;
  /**
   * Employee Count
   * @description Employee count range. Accepts a comma-separated list of values. See the Employee Count lookup endpoint for values. Alternatively, to get more granular ranges, you can use the employeeRangeMin and employeeRangeMax parameters.
   */
  employeeCount?: string;
  /**
   * Employee Range Max
   * @description Maximum employee count for a company. Use with employeeRangeMin to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges.
   */
  employeeRangeMax?: string;
  /**
   * Employee Range Min
   * @description Minimum employee count for a company. Use with employeeRangeMax to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges.
   */
  employeeRangeMin?: string;
  /**
   * Excluded Regions
   * @description Exclude a company metro area. Accepts a comma-separated list of U.S. and Canada metro areas. See the Metro Area lookup endpoint for values.
   */
  excludedRegions?: string;
  /**
   * Funding Amount Max
   * @description Maximum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMax is used without fundingAmountMin, the result will be the amount specified or less.
   */
  fundingAmountMax?: number;
  /**
   * Funding Amount Min
   * @description Minimum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMin is used without fundingAmountMax, the result will be the amount specified or greater.
   */
  fundingAmountMin?: number;
  /**
   * Funding End Date
   * @description End date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
   */
  fundingEndDate?: string;
  /**
   * Funding Start Date
   * @description Start date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
   */
  fundingStartDate?: string;
  /**
   * Hash Tag String
   * @description Hash tags for the company. Can include a comma-separated list. Default AND operation with multiple inputs.
   */
  hashTagString?: string;
  /**
   * Industry Codes
   * @description Top-level Industry that the contact works in. A contact can have multiple top level industries. Tags are based on the contact's current company. Can include a comma-separated list. See the Industry Codes lookup endpoint for values.
   */
  industryCodes?: string;
  /**
   * Industry Keywords
   * @description Industry keywords associated with a company. Can include a comma-separated list.
   */
  industryKeywords?: string;
  /**
   * Location Search Type
   * @description Location criteria for search. Values are PersonOrHQ, PersonAndHQ, Person, HQ, PersonThenHQ.
   */
  locationSearchType?: string;
  /**
   * Metro Region
   * @description Company metro area. Accepts a comma-separated list of U.S. and Canada metro areas. See the Metro Area lookup endpoint for values.
   */
  metroRegion?: string;
  /**
   * Naics Codes
   * @description The North American Industry Classification System (NAICS) is the standard used by Federal statistical agencies in classifying business establishments for the purpose of collecting, analyzing, and publishing statistical data related to the U.S. business economy. See the NAICS Codes lookup endpoint for values.
   */
  naicsCodes?: string;
  /**
   * Page
   * @description Provides the results for the given page, used in conjunction with rpp
   */
  page?: number;
  /**
   * Parent Id
   * @description ZoomInfo Company ID for parent company
   */
  parentId?: string;
  /**
   * Primary Industries Only
   * @description Used in conjunction with the industryCodes input parameter. When set to true, any result returned must have one of the specified industries as a primary industry. If no industries are specified, then this parameter will be ignored. Default is false.
   * @default false
   */
  primaryIndustriesOnly: boolean;
  /**
   * Published End Date
   * @description Ending date to search for scoops based on when published. Form a range using publishedEndDate. Uses YYYY-MM-DD format.
   */
  publishedEndDate?: string;
  /**
   * Published Start Date
   * @description Starting date to search for scoops based on when published. Form a range using publishedEndDate or omit publishedEndDate to search to the current date. Uses YYYY-MM-DD format.
   */
  publishedStartDate?: string;
  /**
   * Revenue
   * @description Annual revenue range in U.S. dollars. Accepts a comma-separated list of values. See the Revenue Range lookup endpoint for values. Alternatively, to get more granular ranges, you can use the revenueMin and revenueMax parameters.
   */
  revenue?: string;
  /**
   * Revenue Max
   * @description Maximum annual revenue for a company in U.S. dollars. Use with revenueMin to set a range. Alternatively, you can use the revenue parameter to search for pre-defined ranges.
   */
  revenueMax?: number;
  /**
   * Revenue Min
   * @description Minimum annual revenue for a company in U.S. dollars. Use with revenueMax to set a range. Alternatively, you can use the revenue parameter to search for pre-defined ranges.
   */
  revenueMin?: number;
  /**
   * Rpp
   * @description Limits the results returned to the given number of results per page. Default is 25.
   * @default 25
   */
  rpp: number;
  /**
   * Scoop Id
   * @description ZoomInfo unique identifier for a scoop. Will accept a comma-separated list.
   */
  scoopId?: string;
  /**
   * Scoop Topic
   * @description Retrieve scoops based on topic (e.g., integrations, technology, compliance and so on). See the Scoop Topics lookup endpoint for values.
   */
  scoopTopic?: string;
  /**
   * Scoop Type
   * @description Retrieve scoops based on type (e.g., earnings, awards, partnerships and so on). See the Scoop Types lookup endpoint for values.
   */
  scoopType?: string;
  /**
   * Sic Codes
   * @description The Standard Industrial Classification is a system for classifying industries by a four-digit code. See the SIC Codes lookup endpoint for values.
   */
  sicCodes?: string;
  /**
   * Sort By
   * @description Sort results by valid output fields: scoopId, originalPublishedDate, description, url, urlText
   */
  sortBy?: string;
  /**
   * Sort Order
   * @description Provide sortBy if specifying sortOrder. Valid values are asc, ascending, desc, and descending. By default, results are sorted in descending order.
   */
  sortOrder?: string;
  /**
   * State
   * @description Company state (U.S.) or province (Canada). You can use free text state or province names (e.g., 'new hampshire'), the two-letter common abbreviation for a U.S. state (e.g., 'nh'), or values provided in the State lookup endpoint.
   */
  state?: string;
  /**
   * Street
   * @description Company street
   */
  street?: string;
  /**
   * Sub Unit Types
   * @description Company sub types (e.g., division, subsidiary and so on). See the Sub Unit Type lookup endpoint for values.
   */
  subUnitTypes?: string;
  /**
   * Tech Attribute Tag List
   * @description Specify technology product tags
   */
  techAttributeTagList?: string;
  /**
   * Ultimate Parent Id
   * @description ZoomInfo Company ID for ultimate parent company
   */
  ultimateParentId?: string;
  /**
   * Updated Since Creation
   * @description Include scoops that have been updated since publishedStartDate
   */
  updatedSinceCreation?: boolean;
  /**
   * Zip Code
   * @description Zip Code of the company's primary address
   */
  zipCode?: string;
  /**
   * Zip Code Radius Miles
   * @description Company Zip code radius
   */
  zipCodeRadiusMiles?: string;
  /**
   * Zoominfo Contacts Max
   * @description Maximum number of ZoomInfo contacts associated with company
   */
  zoominfoContactsMax?: string;
  /**
   * Zoominfo Contacts Min
   * @description Minimum number of ZoomInfo contacts associated with company
   */
  zoominfoContactsMin?: string;
};

/**
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_SCOOP tool output.
 */
type ZOOMINFO_SEARCH_SCOOP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_SCOOP_INPUT tool input.
 */
type ZOOMINFO_SEARCH_SCOOP_INPUT_INPUT = object;

/**
 * Type of ZOOMINFO's ZOOMINFO_SEARCH_SCOOP_INPUT tool output.
 */
type ZOOMINFO_SEARCH_SCOOP_INPUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owner Info
       * @description Information about the owner account
       */
      owner_info: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "ZOOMINFO".
 */
export type ZOOMINFO_TOOL_INPUTS = {
  ENRICH_COMPANY: ZOOMINFO_ENRICH_COMPANY_INPUT
  ENRICH_CONTACT: ZOOMINFO_ENRICH_CONTACT_INPUT
  ENRICH_INTENT: ZOOMINFO_ENRICH_INTENT_INPUT
  ENRICH_LOCATION: ZOOMINFO_ENRICH_LOCATION_INPUT
  ENRICH_NEWS: ZOOMINFO_ENRICH_NEWS_INPUT
  ENRICH_SCOOP: ZOOMINFO_ENRICH_SCOOP_INPUT
  ENRICH_TECHNOLOGY: ZOOMINFO_ENRICH_TECHNOLOGY_INPUT
  SEARCH_COMPANY: ZOOMINFO_SEARCH_COMPANY_INPUT
  SEARCH_COMPANY_INPUT: ZOOMINFO_SEARCH_COMPANY_INPUT_INPUT
  SEARCH_CONTACT: ZOOMINFO_SEARCH_CONTACT_INPUT
  SEARCH_CONTACT_INPUT: ZOOMINFO_SEARCH_CONTACT_INPUT_INPUT
  SEARCH_INTENT: ZOOMINFO_SEARCH_INTENT_INPUT
  SEARCH_INTENT_INPUT: ZOOMINFO_SEARCH_INTENT_INPUT_INPUT
  SEARCH_NEWS: ZOOMINFO_SEARCH_NEWS_INPUT
  SEARCH_NEWS_INPUT: ZOOMINFO_SEARCH_NEWS_INPUT_INPUT
  SEARCH_SCOOP: ZOOMINFO_SEARCH_SCOOP_INPUT
  SEARCH_SCOOP_INPUT: ZOOMINFO_SEARCH_SCOOP_INPUT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ZOOMINFO".
 */
export type ZOOMINFO_TOOL_OUTPUTS = {
  ENRICH_COMPANY: ZOOMINFO_ENRICH_COMPANY_OUTPUT
  ENRICH_CONTACT: ZOOMINFO_ENRICH_CONTACT_OUTPUT
  ENRICH_INTENT: ZOOMINFO_ENRICH_INTENT_OUTPUT
  ENRICH_LOCATION: ZOOMINFO_ENRICH_LOCATION_OUTPUT
  ENRICH_NEWS: ZOOMINFO_ENRICH_NEWS_OUTPUT
  ENRICH_SCOOP: ZOOMINFO_ENRICH_SCOOP_OUTPUT
  ENRICH_TECHNOLOGY: ZOOMINFO_ENRICH_TECHNOLOGY_OUTPUT
  SEARCH_COMPANY: ZOOMINFO_SEARCH_COMPANY_OUTPUT
  SEARCH_COMPANY_INPUT: ZOOMINFO_SEARCH_COMPANY_INPUT_OUTPUT
  SEARCH_CONTACT: ZOOMINFO_SEARCH_CONTACT_OUTPUT
  SEARCH_CONTACT_INPUT: ZOOMINFO_SEARCH_CONTACT_INPUT_OUTPUT
  SEARCH_INTENT: ZOOMINFO_SEARCH_INTENT_OUTPUT
  SEARCH_INTENT_INPUT: ZOOMINFO_SEARCH_INTENT_INPUT_OUTPUT
  SEARCH_NEWS: ZOOMINFO_SEARCH_NEWS_OUTPUT
  SEARCH_NEWS_INPUT: ZOOMINFO_SEARCH_NEWS_INPUT_OUTPUT
  SEARCH_SCOOP: ZOOMINFO_SEARCH_SCOOP_OUTPUT
  SEARCH_SCOOP_INPUT: ZOOMINFO_SEARCH_SCOOP_INPUT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ZOOMINFO toolkit.
 */
export const ZOOMINFO = {
  slug: "zoominfo",
  tools: {
    /**
     * Company enrich
     */
    ENRICH_COMPANY: "ZOOMINFO_ENRICH_COMPANY",
    /**
     * Contact enrich
     */
    ENRICH_CONTACT: "ZOOMINFO_ENRICH_CONTACT",
    /**
     * Intent enrich
     */
    ENRICH_INTENT: "ZOOMINFO_ENRICH_INTENT",
    /**
     * Location enrich
     */
    ENRICH_LOCATION: "ZOOMINFO_ENRICH_LOCATION",
    /**
     * News enrich
     */
    ENRICH_NEWS: "ZOOMINFO_ENRICH_NEWS",
    /**
     * Scoop enrich
     */
    ENRICH_SCOOP: "ZOOMINFO_ENRICH_SCOOP",
    /**
     * Technology enrich
     */
    ENRICH_TECHNOLOGY: "ZOOMINFO_ENRICH_TECHNOLOGY",
    /**
     * Returns a list of companies from zoominfo's data which meet the specified search criteria.
     */
    SEARCH_COMPANY: "ZOOMINFO_SEARCH_COMPANY",
    /**
     * Returns a list of fields you can use as input for the company search action.
     */
    SEARCH_COMPANY_INPUT: "ZOOMINFO_SEARCH_COMPANY_INPUT",
    /**
     * Returns a list of contacts from zoominfo's data that meet the specified search criteria.
     */
    SEARCH_CONTACT: "ZOOMINFO_SEARCH_CONTACT",
    /**
     * Returns a list of fields you can use as input for the contact search action.
     */
    SEARCH_CONTACT_INPUT: "ZOOMINFO_SEARCH_CONTACT_INPUT",
    /**
     * Use this endpoint to search for companies and recommended contacts based on intent data. use input values to return the desired output fields in the response. for charging purposes, each intent signal returned is counted as a record.
     */
    SEARCH_INTENT: "ZOOMINFO_SEARCH_INTENT",
    /**
     * Returns a list of fields you can use as input for the intent action.
     */
    SEARCH_INTENT_INPUT: "ZOOMINFO_SEARCH_INTENT_INPUT",
    /**
     * Returns a list of news articles from zoominfo's data which meet the specified search criteria. all inputs are optional, but you must use at least one input parameter to generate a successful response.
     */
    SEARCH_NEWS: "ZOOMINFO_SEARCH_NEWS",
    /**
     * Returns a list of fields you can use as input for the news search endpoint.
     */
    SEARCH_NEWS_INPUT: "ZOOMINFO_SEARCH_NEWS_INPUT",
    /**
     * Returns a list of scoops from zoominfo's data which meet the specified search criteria.
     */
    SEARCH_SCOOP: "ZOOMINFO_SEARCH_SCOOP",
    /**
     * Returns a list of fields you can use as input for the scoop search action.
     */
    SEARCH_SCOOP_INPUT: "ZOOMINFO_SEARCH_SCOOP_INPUT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ZOOMINFO".
 */
export type ZOOMINFO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ZOOMINFO".
 */
export type ZOOMINFO_TRIGGER_EVENTS = {}
