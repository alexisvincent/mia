// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CRUSTDATA's CRUSTDATA_ENRICH_PERSON_SCREENER tool input.
 */
type CRUSTDATA_ENRICH_PERSON_SCREENER_INPUT = {
  /**
   * Enrich Realtime
   * @description Indicates whether the data should be enriched in real-time
   */
  enrich_realtime?: boolean;
  /**
   * Fields
   * @description Comma-separated list of fields to be included in the response
   */
  fields?: string;
  /**
   * Linkedin Profile Url
   * @description The LinkedIn profile URL of the person to be enriched
   */
  linkedin_profile_url?: string;
};

/**
 * Type of CRUSTDATA's CRUSTDATA_ENRICH_PERSON_SCREENER tool output.
 */
type CRUSTDATA_ENRICH_PERSON_SCREENER_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * All Degrees
       * @description All degrees
       * @default null
       */
      all_degrees: string[] | null;
      /**
       * All Employers
       * @description All employers
       * @default null
       */
      all_employers: string[] | null;
      /**
       * All Employers Company Id
       * @description All employers company ID
       * @default null
       */
      all_employers_company_id: number[] | null;
      /**
       * All Schools
       * @description All schools
       * @default null
       */
      all_schools: string[] | null;
      /**
       * All Titles
       * @description All titles
       * @default null
       */
      all_titles: string[] | null;
      /**
       * Current Employers
       * @description Current employers
       * @default null
       */
      current_employers: {
          /**
           * Employee Description
           * @description Description of the employee's role
           * @default null
           */
          employee_description: string | null;
          /**
           * Employee Location
           * @description Location of the employee
           * @default null
           */
          employee_location: string | null;
          /**
           * Employee Position Id
           * @description Position ID of the employee
           * @default null
           */
          employee_position_id: number | null;
          /**
           * Employee Title
           * @description Title of the employee
           */
          employee_title: string;
          /**
           * Employer Company Id
           * @description Company ID of the employer
           * @default null
           */
          employer_company_id: number[] | null;
          /**
           * Employer Company Website Domain
           * @description Website domain of the employer
           * @default null
           */
          employer_company_website_domain: string[] | null;
          /**
           * Employer Linkedin Description
           * @description LinkedIn description of the employer
           * @default null
           */
          employer_linkedin_description: string | null;
          /**
           * Employer Linkedin Id
           * @description LinkedIn ID of the employer
           */
          employer_linkedin_id: string;
          /**
           * Employer Logo Url
           * @description Logo URL of the employer
           * @default null
           */
          employer_logo_url: string | null;
          /**
           * Employer Name
           * @description Name of the employer
           */
          employer_name: string;
          /**
           * End Date
           * @description End date of employment
           * @default null
           */
          end_date: string | null;
          /**
           * Start Date
           * @description Start date of employment
           */
          start_date: string;
      }[] | null;
      /**
       * Education Background
       * @description Education background
       * @default null
       */
      education_background: {
          /**
           * Activities And Societies
           * @description Activities and societies
           * @default null
           */
          activities_and_societies: string | null;
          /**
           * Degree Name
           * @description Name of the degree
           */
          degree_name: string;
          /**
           * End Date
           * @description End date of education
           * @default null
           */
          end_date: string | null;
          /**
           * Field Of Study
           * @description Field of study
           * @default null
           */
          field_of_study: string | null;
          /**
           * Institute Linkedin Id
           * @description LinkedIn ID of the institute
           * @default null
           */
          institute_linkedin_id: string | null;
          /**
           * Institute Linkedin Url
           * @description LinkedIn URL of the institute
           */
          institute_linkedin_url: string;
          /**
           * Institute Logo Url
           * @description Logo URL of the institute
           * @default null
           */
          institute_logo_url: string | null;
          /**
           * Institute Name
           * @description Name of the institute
           */
          institute_name: string;
          /**
           * Start Date
           * @description Start date of education
           * @default null
           */
          start_date: string | null;
      }[] | null;
      /**
       * Email
       * @description Email of the person
       * @default null
       */
      email: string | null;
      /**
       * Enriched Realtime
       * @description Indicates if the data was enriched in real-time
       */
      enriched_realtime: boolean;
      /**
       * Headline
       * @description Headline of the person
       * @default null
       */
      headline: string | null;
      /**
       * Languages
       * @description Languages known
       * @default null
       */
      languages: string[] | null;
      /**
       * Last Updated
       * @description Last updated date
       * @default null
       */
      last_updated: string | null;
      /**
       * Linkedin Flagship Url
       * @description LinkedIn flagship URL
       * @default null
       */
      linkedin_flagship_url: string | null;
      /**
       * Linkedin Profile Url
       * @description LinkedIn profile URL
       */
      linkedin_profile_url: string;
      /**
       * Location
       * @description Location of the person
       * @default null
       */
      location: string | null;
      /**
       * Name
       * @description Name of the person
       */
      name: string;
      /**
       * Num Of Connections
       * @description Number of connections
       * @default null
       */
      num_of_connections: number | null;
      /**
       * Past Employers
       * @description Past employers
       * @default null
       */
      past_employers: {
          /**
           * Employee Description
           * @description Description of the employee's role
           * @default null
           */
          employee_description: string | null;
          /**
           * Employee Location
           * @description Location of the employee
           * @default null
           */
          employee_location: string | null;
          /**
           * Employee Position Id
           * @description Position ID of the employee
           * @default null
           */
          employee_position_id: number | null;
          /**
           * Employee Title
           * @description Title of the employee
           */
          employee_title: string;
          /**
           * Employer Company Id
           * @description Company ID of the employer
           * @default null
           */
          employer_company_id: number[] | null;
          /**
           * Employer Company Website Domain
           * @description Website domain of the employer
           * @default null
           */
          employer_company_website_domain: string[] | null;
          /**
           * Employer Linkedin Description
           * @description LinkedIn description of the employer
           * @default null
           */
          employer_linkedin_description: string | null;
          /**
           * Employer Linkedin Id
           * @description LinkedIn ID of the employer
           */
          employer_linkedin_id: string;
          /**
           * Employer Logo Url
           * @description Logo URL of the employer
           * @default null
           */
          employer_logo_url: string | null;
          /**
           * Employer Name
           * @description Name of the employer
           */
          employer_name: string;
          /**
           * End Date
           * @description End date of employment
           * @default null
           */
          end_date: string | null;
          /**
           * Start Date
           * @description Start date of employment
           */
          start_date: string;
      }[] | null;
      /**
       * Profile Picture Url
       * @description Profile picture URL
       * @default null
       */
      profile_picture_url: string | null;
      /**
       * Query Linkedin Profile Urn Or Slug
       * @description LinkedIn profile URN or slug
       * @default null
       */
      query_linkedin_profile_urn_or_slug: string[] | null;
      /**
       * Skills
       * @description Skills of the person
       * @default null
       */
      skills: string[] | null;
      /**
       * Summary
       * @description Summary of the person
       * @default null
       */
      summary: string | null;
      /**
       * Title
       * @description Title of the person
       * @default null
       */
      title: string | null;
      /**
       * Twitter Handle
       * @description Twitter handle
       * @default null
       */
      twitter_handle: string | null;
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
 * Type of CRUSTDATA's CRUSTDATA_FETCH_HEADCOUNT_BY_FACET_TIMESERIES tool input.
 */
type CRUSTDATA_FETCH_HEADCOUNT_BY_FACET_TIMESERIES_INPUT = {
  /**
   * Count
   * @description The number of results to be returned
   */
  count?: number;
  /**
   * Filters  Conditions
   * @description The conditions for filtering
   */
  filters__conditions?: {
      [key: string]: unknown;
  }[];
  /**
   * Filters  Op
   * @description The logical operator for combining conditions
   * @enum {string}
   */
  filters__op?: "and" | "or";
  /**
   * Offset
   * @description The offset for paginating the results
   */
  offset?: number;
  /**
   * Sorts
   * @description Specifies the sorting criteria
   */
  sorts?: Record<string, never>[];
};

/**
 * Type of CRUSTDATA's CRUSTDATA_FETCH_HEADCOUNT_BY_FACET_TIMESERIES tool output.
 */
type CRUSTDATA_FETCH_HEADCOUNT_BY_FACET_TIMESERIES_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Fields
       * @description Contains information about the fields in the response
       * @default null
       */
      fields: {
          /**
           * Api Name
           * @description The API name of the field
           * @default null
           */
          api_name: string | null;
          /**
           * Company Profile Name
           * @description The company profile name
           * @default null
           */
          company_profile_name: string | null;
          /**
           * Display Name
           * @description The display name of the field
           * @default null
           */
          display_name: string | null;
          /**
           * Geocode
           * @description Indicates if geocoding is enabled for the field
           * @default null
           */
          geocode: boolean | null;
          /**
           * Hidden
           * @description Indicates if the field is hidden
           * @default null
           */
          hidden: boolean | null;
          /**
           * Local Metric
           * @description Indicates if the field is a local metric
           * @default null
           */
          local_metric: boolean | null;
          /**
           * Options
           * @description Contains options for the field
           * @default null
           */
          options: string[] | null;
          /**
           * Preview Description
           * @description The preview description of the field
           * @default null
           */
          preview_description: string | null;
          /**
           * Summary
           * @description Summary of the field
           * @default null
           */
          summary: string | null;
          /**
           * Type
           * @description The type of the field
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Is Trial User
       * @description Indicates if the user is a trial user
       * @default null
       */
      is_trial_user: boolean | null;
      /**
       * Rows
       * @description Contains the rows of data returned
       * @default null
       */
      rows: {
          [key: string]: unknown;
      }[][] | null;
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
 * Type of CRUSTDATA's CRUSTDATA_FETCH_INVESTOR_PORTFOLIO_DATA tool input.
 */
type CRUSTDATA_FETCH_INVESTOR_PORTFOLIO_DATA_INPUT = {
  /**
   * Investor Name
   * @description The name of the investor
   */
  investor_name?: string;
};

/**
 * Type of CRUSTDATA's CRUSTDATA_FETCH_INVESTOR_PORTFOLIO_DATA tool output.
 */
type CRUSTDATA_FETCH_INVESTOR_PORTFOLIO_DATA_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Investments
       * @description An array of investment details
       */
      investments: {
          /** Company Details */
          company_details: {
              /**
               * Acquisition Status
               * @description The acquisition status of the company
               * @default null
               */
              acquisition_status: string | null;
              /**
               * Ceo Location
               * @description The location of the CEO
               * @default null
               */
              ceo_location: string | null;
              /**
               * Company Id
               * @description The ID of the company
               */
              company_id: number;
              /**
               * Company Name
               * @description The name of the company
               */
              company_name: string;
              /**
               * Company Type
               * @description The type of the company
               * @default null
               */
              company_type: string | null;
              /**
               * Company Website
               * @description The website of the company
               */
              company_website: string;
              /**
               * Company Website Domain
               * @description The domain of the company's website
               * @default null
               */
              company_website_domain: string | null;
              /**
               * Crunchbase Profile Url
               * @description The Crunchbase profile URL of the company
               * @default null
               */
              crunchbase_profile_url: string | null;
              /**
               * Employee Count Range
               * @description The range of employee count
               * @default null
               */
              employee_count_range: string | null;
              /**
               * Estimated Revenue Higher Bound Usd
               * @description The higher bound of the estimated revenue in USD
               * @default null
               */
              estimated_revenue_higher_bound_usd: number | null;
              /**
               * Estimated Revenue Lower Bound Usd
               * @description The lower bound of the estimated revenue in USD
               * @default null
               */
              estimated_revenue_lower_bound_usd: number | null;
              /**
               * Headquarters
               * @description The address of the company's headquarters
               * @default null
               */
              headquarters: string | null;
              /**
               * Hq Country
               * @description The country where the company is headquartered
               * @default null
               */
              hq_country: string | null;
              /**
               * Linkedin Company Description
               * @description The company description on LinkedIn
               * @default null
               */
              linkedin_company_description: string | null;
              /**
               * Linkedin Id
               * @description The LinkedIn ID of the company
               * @default null
               */
              linkedin_id: string | null;
              /**
               * Linkedin Logo Url
               * @description The URL of the company's LinkedIn logo
               * @default null
               */
              linkedin_logo_url: string | null;
              /**
               * Linkedin Profile Url
               * @description The LinkedIn profile URL of the company
               */
              linkedin_profile_url: string;
              /**
               * Year Founded
               * @description The year the company was founded
               * @default null
               */
              year_founded: string | null;
          };
          /**
           * Investment Details
           * @description Investment details
           */
          investment_details: {
              /**
               * Date
               * @description The date of the investment
               */
              date: string;
              /**
               * Funding Round
               * @description The funding round details
               */
              funding_round: string;
              /**
               * Funding Round Investors
               * @description An array of investors in the funding round
               * @default null
               */
              funding_round_investors: {
                  /**
                   * Name
                   * @description Investor name
                   */
                  name: string;
                  /**
                   * Uuid
                   * @description Investor UUID
                   */
                  uuid: string;
              }[] | null;
              /**
               * Investment Amount Usd
               * @description The amount of investment in USD
               * @default null
               */
              investment_amount_usd: number | null;
          }[];
      }[];
      /**
       * Investor Name
       * @description The name of the investor
       */
      investor_name: string;
      /**
       * Investor Uuid
       * @description The UUID of the investor
       */
      investor_uuid: string;
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
 * Type of CRUSTDATA's CRUSTDATA_FILTER_DECISION_MAKERS_DATA tool input.
 */
type CRUSTDATA_FILTER_DECISION_MAKERS_DATA_INPUT = {
  /**
   * Count
   * @description The number of results to be returned
   */
  count?: number;
  /**
   * Decision Maker Titles
   * @description Specifies the titles of the decision makers to filter by
   */
  decision_maker_titles?: string[];
  /**
   * Filters  Conditions
   * @description The conditions for filtering
   */
  filters__conditions?: {
      [key: string]: unknown;
  }[];
  /**
   * Filters  Op
   * @description The logical operator for combining conditions
   * @enum {string}
   */
  filters__op?: "and" | "or";
  /**
   * Offset
   * @description The offset for paginating the results
   */
  offset?: number;
  /**
   * Sorts
   * @description Specifies the sorting criteria
   */
  sorts?: Record<string, never>[];
};

/**
 * Type of CRUSTDATA's CRUSTDATA_FILTER_DECISION_MAKERS_DATA tool output.
 */
type CRUSTDATA_FILTER_DECISION_MAKERS_DATA_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Fields
       * @description Contains information about the fields in the response
       * @default null
       */
      fields: {
          /**
           * Api Name
           * @description The API name of the field
           * @default null
           */
          api_name: string | null;
          /**
           * Company Profile Name
           * @description The company profile name
           * @default null
           */
          company_profile_name: string | null;
          /**
           * Display Name
           * @description The display name of the field
           * @default null
           */
          display_name: string | null;
          /**
           * Geocode
           * @description Indicates if geocoding is enabled for the field
           * @default null
           */
          geocode: boolean | null;
          /**
           * Hidden
           * @description Indicates if the field is hidden
           * @default null
           */
          hidden: boolean | null;
          /**
           * Local Metric
           * @description Indicates if the field is a local metric
           * @default null
           */
          local_metric: boolean | null;
          /**
           * Options
           * @description Contains options for the field
           * @default null
           */
          options: string[] | null;
          /**
           * Preview Description
           * @description The preview description of the field
           * @default null
           */
          preview_description: string | null;
          /**
           * Summary
           * @description Summary of the field
           * @default null
           */
          summary: string | null;
          /**
           * Type
           * @description The type of the field
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Is Trial User
       * @description Indicates if the user is a trial user
       * @default null
       */
      is_trial_user: boolean | null;
      /**
       * Rows
       * @description Contains the rows of data returned
       * @default null
       */
      rows: {
          [key: string]: unknown;
      }[][] | null;
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
 * Type of CRUSTDATA's CRUSTDATA_POST_FUNDING_MILESTONE_TIME_SERIES_DATA tool input.
 */
type CRUSTDATA_POST_FUNDING_MILESTONE_TIME_SERIES_DATA_INPUT = {
  /**
   * Count
   * @description The number of results to be returned
   */
  count?: number;
  /**
   * Filters  Conditions
   * @description The conditions for filtering
   */
  filters__conditions?: {
      [key: string]: unknown;
  }[];
  /**
   * Filters  Op
   * @description The logical operator for combining conditions
   * @enum {string}
   */
  filters__op?: "and" | "or";
  /**
   * Offset
   * @description The offset for paginating the results
   */
  offset?: number;
  /**
   * Sorts
   * @description Specifies the sorting criteria
   */
  sorts?: Record<string, never>[];
};

/**
 * Type of CRUSTDATA's CRUSTDATA_POST_FUNDING_MILESTONE_TIME_SERIES_DATA tool output.
 */
type CRUSTDATA_POST_FUNDING_MILESTONE_TIME_SERIES_DATA_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Fields
       * @description Contains information about the fields in the response
       * @default null
       */
      fields: {
          /**
           * Api Name
           * @description The API name of the field
           * @default null
           */
          api_name: string | null;
          /**
           * Company Profile Name
           * @description The company profile name
           * @default null
           */
          company_profile_name: string | null;
          /**
           * Display Name
           * @description The display name of the field
           * @default null
           */
          display_name: string | null;
          /**
           * Geocode
           * @description Indicates if geocoding is enabled for the field
           * @default null
           */
          geocode: boolean | null;
          /**
           * Hidden
           * @description Indicates if the field is hidden
           * @default null
           */
          hidden: boolean | null;
          /**
           * Local Metric
           * @description Indicates if the field is a local metric
           * @default null
           */
          local_metric: boolean | null;
          /**
           * Options
           * @description Contains options for the field
           * @default null
           */
          options: string[] | null;
          /**
           * Preview Description
           * @description The preview description of the field
           * @default null
           */
          preview_description: string | null;
          /**
           * Summary
           * @description Summary of the field
           * @default null
           */
          summary: string | null;
          /**
           * Type
           * @description The type of the field
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Is Trial User
       * @description Indicates if the user is a trial user
       * @default null
       */
      is_trial_user: boolean | null;
      /**
       * Rows
       * @description Contains the rows of data returned
       * @default null
       */
      rows: {
          [key: string]: unknown;
      }[][] | null;
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
 * Type of CRUSTDATA's CRUSTDATA_POST_HEADCOUNT_TIMESERIES_DATA tool input.
 */
type CRUSTDATA_POST_HEADCOUNT_TIMESERIES_DATA_INPUT = {
  /**
   * Count
   * @description The number of results to be returned
   */
  count?: number;
  /**
   * Filters  Conditions
   * @description The conditions for filtering
   */
  filters__conditions?: {
      [key: string]: unknown;
  }[];
  /**
   * Filters  Op
   * @description The logical operator for combining conditions
   * @enum {string}
   */
  filters__op?: "and" | "or";
  /**
   * Offset
   * @description The offset for paginating the results
   */
  offset?: number;
  /**
   * Sorts
   * @description Specifies the sorting criteria
   */
  sorts?: Record<string, never>[];
};

/**
 * Type of CRUSTDATA's CRUSTDATA_POST_HEADCOUNT_TIMESERIES_DATA tool output.
 */
type CRUSTDATA_POST_HEADCOUNT_TIMESERIES_DATA_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Fields
       * @description Contains information about the fields in the response
       * @default null
       */
      fields: {
          /**
           * Api Name
           * @description The API name of the field
           * @default null
           */
          api_name: string | null;
          /**
           * Company Profile Name
           * @description The company profile name
           * @default null
           */
          company_profile_name: string | null;
          /**
           * Display Name
           * @description The display name of the field
           * @default null
           */
          display_name: string | null;
          /**
           * Geocode
           * @description Indicates if geocoding is enabled for the field
           * @default null
           */
          geocode: boolean | null;
          /**
           * Hidden
           * @description Indicates if the field is hidden
           * @default null
           */
          hidden: boolean | null;
          /**
           * Local Metric
           * @description Indicates if the field is a local metric
           * @default null
           */
          local_metric: boolean | null;
          /**
           * Options
           * @description Contains options for the field
           * @default null
           */
          options: string[] | null;
          /**
           * Preview Description
           * @description The preview description of the field
           * @default null
           */
          preview_description: string | null;
          /**
           * Summary
           * @description Summary of the field
           * @default null
           */
          summary: string | null;
          /**
           * Type
           * @description The type of the field
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Is Trial User
       * @description Indicates if the user is a trial user
       * @default null
       */
      is_trial_user: boolean | null;
      /**
       * Rows
       * @description Contains the rows of data returned
       * @default null
       */
      rows: {
          [key: string]: unknown;
      }[][] | null;
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
 * Type of CRUSTDATA's CRUSTDATA_POST_JOB_LISTINGS_TABLE_DATA tool input.
 */
type CRUSTDATA_POST_JOB_LISTINGS_TABLE_DATA_INPUT = {
  /**
   * Count
   * @description The number of results to be returned
   */
  count?: number;
  /**
   * Dataset  Id
   * @description The id of the dataset
   */
  dataset__id?: string;
  /**
   * Dataset  Name
   * @description The name of the dataset
   */
  dataset__name?: string;
  /**
   * Filters  Conditions
   * @description The conditions for filtering
   */
  filters__conditions?: {
      [key: string]: unknown;
  }[];
  /**
   * Filters  Op
   * @description The logical operator for combining conditions
   * @enum {string}
   */
  filters__op?: "and" | "or";
  /**
   * Offset
   * @description The offset for paginating the results
   */
  offset?: number;
  /**
   * Sorts
   * @description Specifies the sorting criteria
   */
  sorts?: Record<string, never>[];
  /**
   * Tickers
   * @description An array of tickers
   */
  tickers?: string[];
};

/**
 * Type of CRUSTDATA's CRUSTDATA_POST_JOB_LISTINGS_TABLE_DATA tool output.
 */
type CRUSTDATA_POST_JOB_LISTINGS_TABLE_DATA_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Fields
       * @description Contains information about the fields in the response
       * @default null
       */
      fields: {
          /**
           * Api Name
           * @description The API name of the field
           * @default null
           */
          api_name: string | null;
          /**
           * Company Profile Name
           * @description The company profile name
           * @default null
           */
          company_profile_name: string | null;
          /**
           * Display Name
           * @description The display name of the field
           * @default null
           */
          display_name: string | null;
          /**
           * Geocode
           * @description Indicates if geocoding is enabled for the field
           * @default null
           */
          geocode: boolean | null;
          /**
           * Hidden
           * @description Indicates if the field is hidden
           * @default null
           */
          hidden: boolean | null;
          /**
           * Local Metric
           * @description Indicates if the field is a local metric
           * @default null
           */
          local_metric: boolean | null;
          /**
           * Options
           * @description Contains options for the field
           * @default null
           */
          options: string[] | null;
          /**
           * Preview Description
           * @description The preview description of the field
           * @default null
           */
          preview_description: string | null;
          /**
           * Summary
           * @description Summary of the field
           * @default null
           */
          summary: string | null;
          /**
           * Type
           * @description The type of the field
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Is Trial User
       * @description Indicates if the user is a trial user
       * @default null
       */
      is_trial_user: boolean | null;
      /**
       * Rows
       * @description Contains the rows of data returned
       * @default null
       */
      rows: {
          [key: string]: unknown;
      }[][] | null;
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
 * Type of CRUSTDATA's CRUSTDATA_POST_WEB_TRAFFIC_DATA tool input.
 */
type CRUSTDATA_POST_WEB_TRAFFIC_DATA_INPUT = {
  /**
   * Count
   * @description The number of results to be returned
   */
  count?: number;
  /**
   * Filters  Conditions
   * @description The conditions for filtering
   */
  filters__conditions?: {
      [key: string]: unknown;
  }[];
  /**
   * Filters  Op
   * @description The logical operator for combining conditions
   * @enum {string}
   */
  filters__op?: "and" | "or";
  /**
   * Offset
   * @description The offset for paginating the results
   */
  offset?: number;
  /**
   * Sorts
   * @description Specifies the sorting criteria
   */
  sorts?: Record<string, never>[];
};

/**
 * Type of CRUSTDATA's CRUSTDATA_POST_WEB_TRAFFIC_DATA tool output.
 */
type CRUSTDATA_POST_WEB_TRAFFIC_DATA_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Fields
       * @description Contains information about the fields in the response
       * @default null
       */
      fields: {
          /**
           * Api Name
           * @description The API name of the field
           * @default null
           */
          api_name: string | null;
          /**
           * Company Profile Name
           * @description The company profile name
           * @default null
           */
          company_profile_name: string | null;
          /**
           * Display Name
           * @description The display name of the field
           * @default null
           */
          display_name: string | null;
          /**
           * Geocode
           * @description Indicates if geocoding is enabled for the field
           * @default null
           */
          geocode: boolean | null;
          /**
           * Hidden
           * @description Indicates if the field is hidden
           * @default null
           */
          hidden: boolean | null;
          /**
           * Local Metric
           * @description Indicates if the field is a local metric
           * @default null
           */
          local_metric: boolean | null;
          /**
           * Options
           * @description Contains options for the field
           * @default null
           */
          options: string[] | null;
          /**
           * Preview Description
           * @description The preview description of the field
           * @default null
           */
          preview_description: string | null;
          /**
           * Summary
           * @description Summary of the field
           * @default null
           */
          summary: string | null;
          /**
           * Type
           * @description The type of the field
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Is Trial User
       * @description Indicates if the user is a trial user
       * @default null
       */
      is_trial_user: boolean | null;
      /**
       * Rows
       * @description Contains the rows of data returned
       * @default null
       */
      rows: {
          [key: string]: unknown;
      }[][] | null;
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
 * Type of CRUSTDATA's CRUSTDATA_RETRIEVE_LINKED_IN_POSTS tool input.
 */
type CRUSTDATA_RETRIEVE_LINKED_IN_POSTS_INPUT = {
  /**
   * Company Linkedin Url
   * @description The LinkedIn URL of the company for which posts are to be retrieved
   */
  company_linkedin_url?: string;
};

/**
 * Type of CRUSTDATA's CRUSTDATA_RETRIEVE_LINKED_IN_POSTS tool output.
 */
type CRUSTDATA_RETRIEVE_LINKED_IN_POSTS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Posts
       * @description Array of LinkedIn posts
       */
      posts: {
          /**
           * Actor Name
           * @description Name of the actor
           * @default null
           */
          actor_name: string | null;
          /**
           * Backend Urn
           * @description URN of the backend
           * @default null
           */
          backend_urn: string | null;
          /**
           * Date Posted
           * @description Date when the post was published
           */
          date_posted: string;
          /**
           * Hyperlinks
           * @default null
           */
          hyperlinks: {
              /**
               * Company Linkedin Urls
               * @description Company LinkedIn URLs in the post
               */
              company_linkedin_urls: string[];
              /**
               * Other Urls
               * @description Other URLs in the post
               */
              other_urls: string[];
              /**
               * Person Linkedin Urls
               * @description Person LinkedIn URLs in the post
               */
              person_linkedin_urls: string[];
          } | null;
          /**
           * Is Repost Without Thoughts
           * @description Indicates if the post is a repost without thoughts
           * @default null
           */
          is_repost_without_thoughts: boolean | null;
          /**
           * Num Shares
           * @description Number of shares
           * @default null
           */
          num_shares: number | null;
          /**
           * ReactionsByType
           * @default null
           */
          reactions_by_type: {
              /**
               * Appreciation
               * @description Number of appreciation reactions
               * @default null
               */
              APPRECIATION: number | null;
              /**
               * Curious
               * @description Number of curious reactions
               * @default null
               */
              CURIOUS: number | null;
              /**
               * Empathy
               * @description Number of empathy reactions
               * @default null
               */
              EMPATHY: number | null;
              /**
               * Entertainment
               * @description Number of entertainment reactions
               * @default null
               */
              ENTERTAINMENT: number | null;
              /**
               * Interest
               * @description Number of interest reactions
               * @default null
               */
              INTEREST: number | null;
              /**
               * Like
               * @description Number of likes
               */
              LIKE: number;
              /**
               * Praise
               * @description Number of praise reactions
               * @default null
               */
              PRAISE: number | null;
          } | null;
          /**
           * Share Url
           * @description URL of the share
           */
          share_url: string;
          /**
           * Share Urn
           * @description URN of the share
           * @default null
           */
          share_urn: string | null;
          /**
           * Text
           * @description Content of the post
           */
          text: string;
          /**
           * Total Comments
           * @description Total number of comments
           */
          total_comments: number;
          /**
           * Total Reactions
           * @description Total number of reactions
           */
          total_reactions: number;
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
 * Type of CRUSTDATA's CRUSTDATA_SCREENER_COMPANY_INFORMATION tool input.
 */
type CRUSTDATA_SCREENER_COMPANY_INFORMATION_INPUT = {
  /**
   * Company Domain
   * @description The domain of the company for which information is requested
   */
  company_domain?: string;
  /**
   * Enrich Realtime
   * @description Indicates whether to enrich the data with real-time information
   * @enum {string}
   */
  enrich_realtime?: "False" | "True";
};

/**
 * Type of CRUSTDATA's CRUSTDATA_SCREENER_COMPANY_INFORMATION tool output.
 */
type CRUSTDATA_SCREENER_COMPANY_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Acquisition Status
       * @description Acquisition status
       * @default null
       */
      acquisition_status: string | null;
      /**
       * All Office Addresses
       * @description All office addresses
       * @default null
       */
      all_office_addresses: string[] | null;
      /**
       * Ceo Location
       * @description CEO location
       * @default null
       */
      ceo_location: string | null;
      /**
       * Company Id
       * @description Company ID
       */
      company_id: number;
      /**
       * Company Name
       * @description Company name
       */
      company_name: string;
      /**
       * Company Twitter Url
       * @description Company Twitter URL
       * @default null
       */
      company_twitter_url: string | null;
      /**
       * Company Type
       * @description Company type
       * @default null
       */
      company_type: string | null;
      /**
       * Company Website
       * @description Company website
       */
      company_website: string;
      /**
       * Company Website Domain
       * @description Company website domain
       */
      company_website_domain: string;
      /**
       * Competitors
       * @default null
       */
      competitors: {
          /**
           * Competitor Website Domains
           * @description Competitor website domains
           */
          competitor_website_domains: string[];
          /**
           * Organic Seo Competitors Website Domains
           * @description Organic SEO competitors website domains
           * @default null
           */
          organic_seo_competitors_website_domains: string[] | null;
          /**
           * Paid Seo Competitors Website Domains
           * @description Paid SEO competitors website domains
           * @default null
           */
          paid_seo_competitors_website_domains: string | null;
      } | null;
      /**
       * Crunchbase Profile Url
       * @description Crunchbase profile URL
       * @default null
       */
      crunchbase_profile_url: string | null;
      /**
       * Employee Count Range
       * @description Employee count range
       * @default null
       */
      employee_count_range: string | null;
      /**
       * Estimated Revenue Higher Bound Usd
       * @description Estimated revenue higher bound in USD
       * @default null
       */
      estimated_revenue_higher_bound_usd: number | null;
      /**
       * Estimated Revenue Lower Bound Usd
       * @description Estimated revenue lower bound in USD
       * @default null
       */
      estimated_revenue_lower_bound_usd: number | null;
      /**
       * Fiscal Year End
       * @description Fiscal year end
       * @default null
       */
      fiscal_year_end: string | null;
      /**
       * Headquarters
       * @description Headquarters location
       * @default null
       */
      headquarters: string | null;
      /**
       * Hq Country
       * @description Headquarters country
       * @default null
       */
      hq_country: string | null;
      /**
       * Hq Street Address
       * @description Headquarters street address
       * @default null
       */
      hq_street_address: string | null;
      /**
       * Is Full Domain Match
       * @description Indicates if there is a full domain match
       */
      is_full_domain_match: boolean;
      /**
       * Largest Headcount Country
       * @description Country with largest headcount
       * @default null
       */
      largest_headcount_country: string | null;
      /**
       * Linkedin Company Description
       * @description LinkedIn company description
       * @default null
       */
      linkedin_company_description: string | null;
      /**
       * Linkedin Id
       * @description LinkedIn ID
       */
      linkedin_id: string;
      /**
       * Linkedin Logo Url
       * @description LinkedIn logo URL
       * @default null
       */
      linkedin_logo_url: string | null;
      /**
       * Linkedin Profile Url
       * @description LinkedIn profile URL
       */
      linkedin_profile_url: string;
      /**
       * Markets
       * @description Markets
       * @default null
       */
      markets: string[] | null;
      /**
       * Stock Symbols
       * @description Stock symbols
       * @default null
       */
      stock_symbols: string[] | null;
      /**
       * Taxonomy
       * @default null
       */
      taxonomy: {
          /**
           * Crunchbase Categories
           * @description Crunchbase categories
           */
          crunchbase_categories: string[];
          /**
           * Linkedin Industries
           * @description LinkedIn industries
           */
          linkedin_industries: string[];
          /**
           * Linkedin Specialities
           * @description LinkedIn specialities
           * @default null
           */
          linkedin_specialities: string[] | null;
      } | null;
      /**
       * Year Founded
       * @description Year founded
       * @default null
       */
      year_founded: string | null;
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
 * Type of CRUSTDATA's CRUSTDATA_SCREEN_METRICS_AND_FILTER_CONDITIONS tool input.
 */
type CRUSTDATA_SCREEN_METRICS_AND_FILTER_CONDITIONS_INPUT = {
  /**
   * Count
   * @description The number of results to be returned
   */
  count?: number;
  /**
   * Filters  Conditions
   * @description The conditions for filtering
   */
  filters__conditions?: {
      [key: string]: unknown;
  }[];
  /**
   * Filters  Op
   * @description The logical operator for combining conditions
   * @enum {string}
   */
  filters__op?: "and" | "or";
  /**
   * Metrics
   * @description Specifies the metrics to be used for screening
   */
  metrics?: {
      /**
       * Metric Name
       * @description The name of the metric to be used
       */
      metric_name: string;
  }[];
  /**
   * Offset
   * @description The offset for paginating the results
   */
  offset?: number;
  /**
   * Sorts
   * @description Specifies the sorting criteria
   */
  sorts?: Record<string, never>[];
};

/**
 * Type of CRUSTDATA's CRUSTDATA_SCREEN_METRICS_AND_FILTER_CONDITIONS tool output.
 */
type CRUSTDATA_SCREEN_METRICS_AND_FILTER_CONDITIONS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Fields
       * @description Contains information about the fields in the response
       * @default null
       */
      fields: {
          /**
           * Api Name
           * @description The API name of the field
           * @default null
           */
          api_name: string | null;
          /**
           * Company Profile Name
           * @description The company profile name
           * @default null
           */
          company_profile_name: string | null;
          /**
           * Display Name
           * @description The display name of the field
           * @default null
           */
          display_name: string | null;
          /**
           * Geocode
           * @description Indicates if geocoding is enabled for the field
           * @default null
           */
          geocode: boolean | null;
          /**
           * Hidden
           * @description Indicates if the field is hidden
           * @default null
           */
          hidden: boolean | null;
          /**
           * Local Metric
           * @description Indicates if the field is a local metric
           * @default null
           */
          local_metric: boolean | null;
          /**
           * Options
           * @description Contains options for the field
           * @default null
           */
          options: string[] | null;
          /**
           * Preview Description
           * @description The preview description of the field
           * @default null
           */
          preview_description: string | null;
          /**
           * Summary
           * @description Summary of the field
           * @default null
           */
          summary: string | null;
          /**
           * Type
           * @description The type of the field
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * FilterInfo
       * @default null
       */
      filter_info: {
          /**
           * Conditions
           * @description The conditions for filtering
           */
          conditions: ({
              /**
               * Allow Null
               * @description Indicates if null values are allowed
               * @default null
               */
              allow_null: boolean | null;
              /**
               * Column
               * @description The column to apply the filter on
               */
              column: string;
              /**
               * Type
               * @description The type of filter to be applied
               */
              type: string;
              /**
               * Value
               * @description The value(s) to be used for filtering
               */
              value: string[] | number[] | string | number;
          } | {
              /**
               * Conditions
               * @description The conditions for filtering
               */
              conditions: ({
                  /**
                   * Allow Null
                   * @description Indicates if null values are allowed
                   * @default null
                   */
                  allow_null: boolean | null;
                  /**
                   * Column
                   * @description The column to apply the filter on
                   */
                  column: string;
                  /**
                   * Type
                   * @description The type of filter to be applied
                   */
                  type: string;
                  /**
                   * Value
                   * @description The value(s) to be used for filtering
                   */
                  value: string[] | number[] | string | number;
              } | {
                  [key: string]: unknown;
              })[];
              /**
               * Op
               * @description The logical operator for combining conditions
               * @enum {string}
               */
              op: "and" | "or";
          })[];
          /**
           * Op
           * @description The logical operator for combining conditions
           * @enum {string}
           */
          op: "and" | "or";
      } | null;
      /**
       * Gpt Parsed Keywords And Synonyms
       * @description Contains parsed keywords and synonyms from GPT
       * @default null
       */
      gpt_parsed_keywords_and_synonyms: {
          [key: string]: unknown;
      } | null;
      /**
       * Gpt Prompt
       * @description The GPT prompt
       * @default null
       */
      gpt_prompt: string | null;
      /**
       * Gpt Threshold
       * @description The GPT threshold
       * @default null
       */
      gpt_threshold: string | null;
      /**
       * Is Trial User
       * @description Indicates if the user is a trial user
       * @default null
       */
      is_trial_user: boolean | null;
      /**
       * Query Hash
       * @description The query hash
       * @default null
       */
      query_hash: string | null;
      /**
       * Ranked Company Ids List
       * @description Contains the ranked company IDs
       * @default null
       */
      ranked_company_ids_list: string[] | null;
      /**
       * Remaining Credits
       * @description The remaining credits
       * @default null
       */
      remaining_credits: number | null;
      /**
       * Rows
       * @description Contains the rows of data returned
       * @default null
       */
      rows: string[][] | null;
      /**
       * Success Status
       * @description Indicates the success status of the request
       * @default null
       */
      success_status: boolean | null;
      /**
       * What Company Does
       * @description Describes what the company does
       * @default null
       */
      what_company_does: string | null;
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
 * Type of CRUSTDATA's CRUSTDATA_SEARCH_COMPANIES_WITH_FILTERS tool input.
 */
type CRUSTDATA_SEARCH_COMPANIES_WITH_FILTERS_INPUT = {
  /**
   * Filters
   * @description Specifies the filters for the search
   */
  filters?: {
      /**
       * Filter Type
       * @description Type of filter
       */
      filter_type: string;
      /**
       * Type
       * @description Type of comparison
       */
      type: string;
      /**
       * Value
       * @description Values to be compared
       */
      value: string[];
  }[];
  /**
   * Page
   * @description Specifies the page number for paginated results
   */
  page?: number;
};

/**
 * Type of CRUSTDATA's CRUSTDATA_SEARCH_COMPANIES_WITH_FILTERS tool output.
 */
type CRUSTDATA_SEARCH_COMPANIES_WITH_FILTERS_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Companies
       * @description List of companies
       */
      companies: {
          /**
           * Company Type
           * @description Company type
           */
          company_type: string;
          /**
           * Decision Makers Count
           * @description Number of decision makers
           * @default null
           */
          decision_makers_count: string | null;
          /**
           * Description
           * @description Company description
           * @default null
           */
          description: string | null;
          /**
           * Employee Count
           * @description Number of employees
           * @default null
           */
          employee_count: number | null;
          /**
           * Employee Count Range
           * @description Employee count range
           */
          employee_count_range: string;
          /**
           * Employee Growth Percentages
           * @description Employee growth percentages
           * @default null
           */
          employee_growth_percentages: {
              /**
               * Percentage
               * @description Growth percentage
               */
              percentage: number;
              /**
               * Timespan
               * @description Time period for growth
               */
              timespan: string;
          }[] | null;
          /**
           * Founded Year
           * @description Year the company was founded
           * @default null
           */
          founded_year: number | null;
          /**
           * Headquarters
           * @description Company headquarters
           * @default null
           */
          headquarters: {
              [key: string]: unknown;
          } | null;
          /**
           * Industry
           * @description Company industry
           */
          industry: string;
          /**
           * Linkedin Company Id
           * @description LinkedIn company ID
           * @default null
           */
          linkedin_company_id: string | null;
          /**
           * Linkedin Company Url
           * @description LinkedIn company URL
           */
          linkedin_company_url: string;
          /**
           * Location
           * @description Company location
           * @default null
           */
          location: {
              [key: string]: unknown;
          } | null;
          /**
           * LogoUrls
           * @default null
           */
          logo_urls: {
              /**
               * 100X100
               * @description 100x100 logo URL
               */
              "100x100": string;
              /**
               * 200X200
               * @description 200x200 logo URL
               */
              "200x200": string;
              /**
               * 400X400
               * @description 400x400 logo URL
               */
              "400x400": string;
          } | null;
          /**
           * Name
           * @description Company name
           */
          name: string;
          /**
           * RevenueRange
           * @default null
           */
          revenue_range: {
              /** Estimated Max Revenue */
              estimatedMaxRevenue: {
                  /**
                   * Amount
                   * @description Amount
                   */
                  amount: number;
                  /**
                   * Currency Code
                   * @description Currency code
                   */
                  currencyCode: string;
                  /**
                   * Unit
                   * @description Unit
                   */
                  unit: string;
              };
              /** Estimated Min Revenue */
              estimatedMinRevenue: {
                  /**
                   * Amount
                   * @description Amount
                   */
                  amount: number;
                  /**
                   * Currency Code
                   * @description Currency code
                   */
                  currencyCode: string;
                  /**
                   * Unit
                   * @description Unit
                   */
                  unit: string;
              };
          } | null;
          /**
           * Specialties
           * @description Company specialties
           * @default null
           */
          specialties: string[] | null;
          /**
           * Website
           * @description Company website
           */
          website: string;
      }[];
      /**
       * Total Display Count
       * @description Total number of companies displayed
       */
      total_display_count: string;
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
 * Type of CRUSTDATA's CRUSTDATA_SEARCH_FOR_JOB_ID_IN_SCREENER tool input.
 */
type CRUSTDATA_SEARCH_FOR_JOB_ID_IN_SCREENER_INPUT = {
  /**
   * Job Id
   * @description The job ID to search for
   */
  job_id?: string;
};

/**
 * Type of CRUSTDATA's CRUSTDATA_SEARCH_FOR_JOB_ID_IN_SCREENER tool output.
 */
type CRUSTDATA_SEARCH_FOR_JOB_ID_IN_SCREENER_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Results
       * @description The search results
       * @default null
       */
      results: {
          [key: string]: unknown;
      }[] | null;
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
 * Type of CRUSTDATA's CRUSTDATA_SEARCH_LINKED_IN_POSTS_BY_KEYWORD tool input.
 */
type CRUSTDATA_SEARCH_LINKED_IN_POSTS_BY_KEYWORD_INPUT = {
  /**
   * Date Posted
   * @description The time frame for the posted content
   * @enum {string}
   */
  date_posted?: "all-time" | "past-day" | "past-month" | "past-quarter" | "past-week" | "past-year";
  /**
   * Keyword
   * @description The keyword to search for in the LinkedIn posts
   */
  keyword?: string;
  /**
   * Page
   * @description The page number of the search results
   */
  page?: number;
  /**
   * Sort By
   * @description The sorting criteria for the search results
   * @enum {string}
   */
  sort_by?: "date" | "relevance";
};

/**
 * Type of CRUSTDATA's CRUSTDATA_SEARCH_LINKED_IN_POSTS_BY_KEYWORD tool output.
 */
type CRUSTDATA_SEARCH_LINKED_IN_POSTS_BY_KEYWORD_OUTPUT = {
  /**
   * Data
   * @description The response schema
   */
  data?: {
      /**
       * Actor Type
       * @description Type of the actor
       * @default null
       */
      actor_type: string | null;
      /**
       * Backend Urn
       * @description URN of the backend
       * @default null
       */
      backend_urn: string | null;
      /**
       * Current Employers
       * @description Current employers of the person
       * @default null
       */
      current_employers: {
          /**
           * Employee Description
           * @description Description of the employee's role
           * @default null
           */
          employee_description: string | null;
          /**
           * Employee Location
           * @description Location of the employee
           * @default null
           */
          employee_location: string | null;
          /**
           * Employee Position Id
           * @description Position ID of the employee
           * @default null
           */
          employee_position_id: number | null;
          /**
           * Employee Title
           * @description Title of the employee
           */
          employee_title: string;
          /**
           * Employer Company Id
           * @description Company ID of the employer
           * @default null
           */
          employer_company_id: number[] | null;
          /**
           * Employer Company Website Domain
           * @description Website domain of the employer
           * @default null
           */
          employer_company_website_domain: string[] | null;
          /**
           * Employer Linkedin Description
           * @description LinkedIn description of the employer
           * @default null
           */
          employer_linkedin_description: string | null;
          /**
           * Employer Linkedin Id
           * @description LinkedIn ID of the employer
           */
          employer_linkedin_id: string;
          /**
           * Employer Logo Url
           * @description Logo URL of the employer
           * @default null
           */
          employer_logo_url: string | null;
          /**
           * Employer Name
           * @description Name of the employer
           */
          employer_name: string;
          /**
           * End Date
           * @description End date of employment
           * @default null
           */
          end_date: string | null;
          /**
           * Start Date
           * @description Start date of employment
           */
          start_date: string;
      }[] | null;
      /**
       * Date Posted
       * @description Date when the post was published
       */
      date_posted: string;
      /**
       * Hyperlinks
       * @default null
       */
      hyperlinks: {
          /**
           * Company Linkedin Urls
           * @description Company LinkedIn URLs in the post
           */
          company_linkedin_urls: string[];
          /**
           * Other Urls
           * @description Other URLs in the post
           */
          other_urls: string[];
          /**
           * Person Linkedin Urls
           * @description Person LinkedIn URLs in the post
           */
          person_linkedin_urls: string[];
      } | null;
      /**
       * Num Shares
       * @description Number of shares
       * @default null
       */
      num_shares: number | null;
      /**
       * Person Linkedin Flagship Profile Url
       * @description URL of the person's LinkedIn flagship profile
       */
      person_linkedin_flagship_profile_url: string;
      /**
       * Person Linkedin Urn
       * @description URN of the person's LinkedIn profile
       * @default null
       */
      person_linkedin_urn: string | null;
      /**
       * Person Location
       * @description Location of the person
       * @default null
       */
      person_location: string | null;
      /**
       * Person Name
       * @description Name of the person
       */
      person_name: string;
      /**
       * Person Title
       * @description Title of the person
       * @default null
       */
      person_title: string | null;
      /**
       * ReactionsByType
       * @default null
       */
      reactions_by_type: {
          /**
           * Appreciation
           * @description Number of appreciation reactions
           * @default null
           */
          APPRECIATION: number | null;
          /**
           * Curious
           * @description Number of curious reactions
           * @default null
           */
          CURIOUS: number | null;
          /**
           * Empathy
           * @description Number of empathy reactions
           * @default null
           */
          EMPATHY: number | null;
          /**
           * Entertainment
           * @description Number of entertainment reactions
           * @default null
           */
          ENTERTAINMENT: number | null;
          /**
           * Interest
           * @description Number of interest reactions
           * @default null
           */
          INTEREST: number | null;
          /**
           * Like
           * @description Number of likes
           */
          LIKE: number;
          /**
           * Praise
           * @description Number of praise reactions
           * @default null
           */
          PRAISE: number | null;
      } | null;
      /**
       * Share Url
       * @description URL of the share
       */
      share_url: string;
      /**
       * Share Urn
       * @description URN of the share
       * @default null
       */
      share_urn: string | null;
      /**
       * Text
       * @description Content of the post
       */
      text: string;
      /**
       * Total Comments
       * @description Total number of comments
       */
      total_comments: number;
      /**
       * Total Reactions
       * @description Total number of reactions
       */
      total_reactions: number;
      /**
       * Uid
       * @description Unique identifier
       * @default null
       */
      uid: string | null;
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
 * Type map of all available tool input types for toolkit "CRUSTDATA".
 */
export type CRUSTDATA_TOOL_INPUTS = {
  ENRICH_PERSON_SCREENER: CRUSTDATA_ENRICH_PERSON_SCREENER_INPUT
  FETCH_HEADCOUNT_BY_FACET_TIMESERIES: CRUSTDATA_FETCH_HEADCOUNT_BY_FACET_TIMESERIES_INPUT
  FETCH_INVESTOR_PORTFOLIO_DATA: CRUSTDATA_FETCH_INVESTOR_PORTFOLIO_DATA_INPUT
  FILTER_DECISION_MAKERS_DATA: CRUSTDATA_FILTER_DECISION_MAKERS_DATA_INPUT
  POST_FUNDING_MILESTONE_TIME_SERIES_DATA: CRUSTDATA_POST_FUNDING_MILESTONE_TIME_SERIES_DATA_INPUT
  POST_HEADCOUNT_TIMESERIES_DATA: CRUSTDATA_POST_HEADCOUNT_TIMESERIES_DATA_INPUT
  POST_JOB_LISTINGS_TABLE_DATA: CRUSTDATA_POST_JOB_LISTINGS_TABLE_DATA_INPUT
  POST_WEB_TRAFFIC_DATA: CRUSTDATA_POST_WEB_TRAFFIC_DATA_INPUT
  RETRIEVE_LINKED_IN_POSTS: CRUSTDATA_RETRIEVE_LINKED_IN_POSTS_INPUT
  SCREENER_COMPANY_INFORMATION: CRUSTDATA_SCREENER_COMPANY_INFORMATION_INPUT
  SCREEN_METRICS_AND_FILTER_CONDITIONS: CRUSTDATA_SCREEN_METRICS_AND_FILTER_CONDITIONS_INPUT
  SEARCH_COMPANIES_WITH_FILTERS: CRUSTDATA_SEARCH_COMPANIES_WITH_FILTERS_INPUT
  SEARCH_FOR_JOB_ID_IN_SCREENER: CRUSTDATA_SEARCH_FOR_JOB_ID_IN_SCREENER_INPUT
  SEARCH_LINKED_IN_POSTS_BY_KEYWORD: CRUSTDATA_SEARCH_LINKED_IN_POSTS_BY_KEYWORD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CRUSTDATA".
 */
export type CRUSTDATA_TOOL_OUTPUTS = {
  ENRICH_PERSON_SCREENER: CRUSTDATA_ENRICH_PERSON_SCREENER_OUTPUT
  FETCH_HEADCOUNT_BY_FACET_TIMESERIES: CRUSTDATA_FETCH_HEADCOUNT_BY_FACET_TIMESERIES_OUTPUT
  FETCH_INVESTOR_PORTFOLIO_DATA: CRUSTDATA_FETCH_INVESTOR_PORTFOLIO_DATA_OUTPUT
  FILTER_DECISION_MAKERS_DATA: CRUSTDATA_FILTER_DECISION_MAKERS_DATA_OUTPUT
  POST_FUNDING_MILESTONE_TIME_SERIES_DATA: CRUSTDATA_POST_FUNDING_MILESTONE_TIME_SERIES_DATA_OUTPUT
  POST_HEADCOUNT_TIMESERIES_DATA: CRUSTDATA_POST_HEADCOUNT_TIMESERIES_DATA_OUTPUT
  POST_JOB_LISTINGS_TABLE_DATA: CRUSTDATA_POST_JOB_LISTINGS_TABLE_DATA_OUTPUT
  POST_WEB_TRAFFIC_DATA: CRUSTDATA_POST_WEB_TRAFFIC_DATA_OUTPUT
  RETRIEVE_LINKED_IN_POSTS: CRUSTDATA_RETRIEVE_LINKED_IN_POSTS_OUTPUT
  SCREENER_COMPANY_INFORMATION: CRUSTDATA_SCREENER_COMPANY_INFORMATION_OUTPUT
  SCREEN_METRICS_AND_FILTER_CONDITIONS: CRUSTDATA_SCREEN_METRICS_AND_FILTER_CONDITIONS_OUTPUT
  SEARCH_COMPANIES_WITH_FILTERS: CRUSTDATA_SEARCH_COMPANIES_WITH_FILTERS_OUTPUT
  SEARCH_FOR_JOB_ID_IN_SCREENER: CRUSTDATA_SEARCH_FOR_JOB_ID_IN_SCREENER_OUTPUT
  SEARCH_LINKED_IN_POSTS_BY_KEYWORD: CRUSTDATA_SEARCH_LINKED_IN_POSTS_BY_KEYWORD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CRUSTDATA toolkit.
 */
export const CRUSTDATA = {
  slug: "crustdata",
  tools: {
    /**
     * The screener person enrich endpoint enriches person data by providing additional information based on the given query. it allows users to retrieve detailed information about individuals, which can be useful for various purposes such as customer profiling, lead generation, or data verification. this endpoint should be used when you need to augment existing person data with additional details or verify information about a specific individual. the enrichment process draws from crustdata's extensive database and real-time data sources to provide up-to-date and comprehensive information. users can customize the response by specifying the exact fields they need, optimizing data transfer and processing. note that the availability and accuracy of enriched data may vary depending on the input provided and the information available in crustdata's systems.
     */
    ENRICH_PERSON_SCREENER: "CRUSTDATA_ENRICH_PERSON_SCREENER",
    /**
     * Retrieves headcount data as a timeseries with faceted analysis capabilities. this endpoint allows users to fetch detailed headcount information over time, applying complex filters, pagination, and sorting. it's particularly useful for hr analytics, workforce planning, and organizational growth analysis. the endpoint supports nested logical operations in its filtering mechanism, enabling highly specific queries. users can paginate through large datasets and sort results based on multiple criteria. while powerful, this endpoint requires careful construction of the filters parameter to ensure accurate data retrieval. it should be used when detailed, time-based headcount analysis is needed, but may not be suitable for simple, non-time-series headcount queries or for real-time data needs due to its complexity.
     */
    FETCH_HEADCOUNT_BY_FACET_TIMESERIES: "CRUSTDATA_FETCH_HEADCOUNT_BY_FACET_TIMESERIES",
    /**
     * Retrieves comprehensive investor portfolio data from the data lab section of the crustdata api. this endpoint provides access to detailed information about investor portfolios, including investment holdings, performance metrics, and other relevant data points. it is designed to support investment analysis, portfolio management, and decision-making processes in a b2b context. the endpoint should be used when detailed investor portfolio information is required for tasks such as investment screening, performance tracking, or generating analytical reports. it's important to note that this endpoint may not provide real-time data and the frequency of updates should be verified in the api documentation. additionally, users should be aware of any data privacy and usage restrictions that may apply to the retrieved investor information.
     */
    FETCH_INVESTOR_PORTFOLIO_DATA: "CRUSTDATA_FETCH_INVESTOR_PORTFOLIO_DATA",
    /**
     * Filters and retrieves decision maker data from the crustdata b2b saas integration platform based on complex criteria. this endpoint allows for advanced querying of decision maker information using a combination of filters, pagination, sorting, and title-based filtering. it's designed for scenarios where specific subsets of decision maker data need to be extracted or analyzed. the endpoint supports nested logical conditions in filters, enabling highly targeted data retrieval. use this when you need to perform detailed analysis or reporting on decision makers across various organizations or industries. note that the endpoint requires careful structuring of the request body to effectively utilize its advanced filtering capabilities.
     */
    FILTER_DECISION_MAKERS_DATA: "CRUSTDATA_FILTER_DECISION_MAKERS_DATA",
    /**
     * The fundingmilestonetimeseries endpoint retrieves time-series data related to funding milestones for companies. it allows for complex querying of funding events over time, with flexible filtering, pagination, and sorting options. this endpoint is particularly useful for analyzing funding trends, comparing company funding histories, or tracking specific funding events across multiple organizations. the data returned is based on the specified filters and can be tailored to focus on particular time ranges, funding stages, or company characteristics. while it provides comprehensive funding milestone data, it does not include detailed company information beyond what's directly related to funding events.
     */
    POST_FUNDING_MILESTONE_TIME_SERIES_DATA: "CRUSTDATA_POST_FUNDING_MILESTONE_TIME_SERIES_DATA",
    /**
     * Retrieves filtered and sorted headcount timeseries data from the crustdata data lab. this endpoint allows for complex querying of historical headcount information, enabling users to analyze workforce trends over time. it supports advanced filtering with nested conditions, pagination for handling large datasets, and customizable sorting. ideal for generating reports, conducting workforce analysis, or integrating headcount data into third-party business intelligence tools. note that the specifics of the returned data structure are not provided in the given schema.
     */
    POST_HEADCOUNT_TIMESERIES_DATA: "CRUSTDATA_POST_HEADCOUNT_TIMESERIES_DATA",
    /**
     * This endpoint retrieves filtered and sorted job listings data for specified company tickers from a chosen dataset in the crustdata platform. it allows for highly customizable queries with complex filtering conditions, pagination, and sorting options. the endpoint is designed for bulk data retrieval and analysis of job market trends across multiple companies. use this endpoint when you need to fetch and analyze job listing data for specific companies, apply custom filters to narrow down the results, or when you want to paginate through large sets of job data. it's particularly useful for market research, competitive analysis, or tracking employment trends in specific industries or companies. note that this endpoint requires careful construction of the request body, especially for the filters parameter, which can support nested logical conditions. the performance and response time may vary depending on the complexity of the filters and the amount of data requested.
     */
    POST_JOB_LISTINGS_TABLE_DATA: "CRUSTDATA_POST_JOB_LISTINGS_TABLE_DATA",
    /**
     * Retrieves filtered and sorted web traffic data from the crustdata platform. this endpoint allows for complex querying of web traffic information using nested conditions and logical operators. it supports pagination for handling large datasets and provides sorting capabilities for customized data presentation. use this endpoint when you need to analyze web traffic patterns, filter data based on specific criteria, or extract insights from your web analytics. the endpoint is particularly useful for generating reports, identifying trends, or monitoring key performance indicators related to web traffic.
     */
    POST_WEB_TRAFFIC_DATA: "CRUSTDATA_POST_WEB_TRAFFIC_DATA",
    /**
     * Retrieves linkedin posts for a specified company using crustdata's screener functionality. this endpoint allows users to gather social media data from linkedin, which can be used for analyzing company activity, engagement, and sentiment. it's particularly useful for b2b marketers, sales professionals, and analysts who need insights into a company's social media presence and content strategy. the endpoint supports filtering by date range and customizing the response fields, making it versatile for various use cases such as competitive analysis, lead generation, and market research. note that the availability and completeness of data may depend on the company's linkedin activity and privacy settings.
     */
    RETRIEVE_LINKED_IN_POSTS: "CRUSTDATA_RETRIEVE_LINKED_IN_POSTS",
    /**
     * The getcompanyscreener endpoint allows users to search and filter companies based on various criteria such as headcount, growth rate, funding, and more. it provides a powerful way to identify specific companies that meet predefined conditions. this endpoint is particularly useful for tasks like lead generation, market research, and competitive analysis. the endpoint returns a list of companies matching the specified criteria, with each company entry containing key information such as name, industry, headcount, funding details, and growth metrics. users can customize their search using multiple filters, sort the results, and paginate through large result sets. note that the accuracy of the data depends on crustdata's real-time data collection and update frequency.
     */
    SCREENER_COMPANY_INFORMATION: "CRUSTDATA_SCREENER_COMPANY_INFORMATION",
    /**
     * The screendata endpoint enables advanced data screening and filtering on the crustdata platform. it allows users to construct complex queries for retrieving specific datasets based on custom metrics, filtering conditions, and sorting criteria. use this endpoint for targeted data extraction, custom reporting, or data analysis within the b2b saas integration ecosystem. note that while powerful, complex queries may impact performance with large datasets.
     */
    SCREEN_METRICS_AND_FILTER_CONDITIONS: "CRUSTDATA_SCREEN_METRICS_AND_FILTER_CONDITIONS",
    /**
     * The companysearch endpoint enables users to search and filter companies using the crustdata api. it provides a powerful mechanism for querying company data based on multiple criteria, supporting complex filtering and pagination. this endpoint is ideal for applications that need to retrieve specific sets of company information, such as financial analysis tools, market research platforms, or business intelligence systems. the search functionality allows for precise data retrieval, enhancing the efficiency of data integration and analysis processes in b2b scenarios. users should be aware that the endpoint requires careful construction of filter objects and proper use of pagination to ensure optimal performance and accurate results.
     */
    SEARCH_COMPANIES_WITH_FILTERS: "CRUSTDATA_SEARCH_COMPANIES_WITH_FILTERS",
    /**
     * The screener person search endpoint allows users to search for persons associated with a specific job id within the crustdata b2b saas integration platform. this post request accepts a json payload containing a job id and returns relevant person data linked to that job. it's particularly useful for scenarios where you need to quickly retrieve all individuals connected to a particular job or project. the endpoint is part of the platform's screening functionality, enabling efficient filtering of person records based on job-related criteria. while it provides a focused search based on job id, it may not offer advanced filtering options or return comprehensive job details.
     */
    SEARCH_FOR_JOB_ID_IN_SCREENER: "CRUSTDATA_SEARCH_FOR_JOB_ID_IN_SCREENER",
    /**
     * This endpoint enables searching for linkedin posts using a specific keyword. it allows users to retrieve relevant content from linkedin by specifying a search term, along with options for pagination, sorting, and filtering by post date. the function is particularly useful for conducting market research, competitor analysis, or tracking industry trends on the linkedin platform. users can fine-tune their search results by choosing how to sort the posts (by relevance or date) and selecting a specific time frame for the content. the endpoint returns paginated results, allowing for efficient navigation through large sets of matching posts.
     */
    SEARCH_LINKED_IN_POSTS_BY_KEYWORD: "CRUSTDATA_SEARCH_LINKED_IN_POSTS_BY_KEYWORD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CRUSTDATA".
 */
export type CRUSTDATA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CRUSTDATA".
 */
export type CRUSTDATA_TRIGGER_EVENTS = {}
