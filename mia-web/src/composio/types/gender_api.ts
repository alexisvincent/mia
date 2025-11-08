// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GENDER_API's GENDER_API_GENDER_API_GET_COUNTRY_OF_ORIGIN tool input.
 */
type GENDER_API_GENDER_API_GET_COUNTRY_OF_ORIGIN_INPUT = {
  /**
   * Email
   * Format: email
   * @description Email address to query; can be provided instead of first_name.
   * @default null
   * @example sandra@example.com
   */
  email: string | null;
  /**
   * First Name
   * @description First name to query. Required if full_name and email are not provided.
   * @default null
   * @example Sandra
   */
  first_name: string | null;
  /**
   * Full Name
   * @description Full name to query; can be provided instead of first_name.
   * @default null
   * @example Sandra Bullock
   */
  full_name: string | null;
  /**
   * Id
   * @description Client-defined request ID for correlation (max 50 chars).
   * @default null
   */
  id: string | null;
};

/**
 * Type of GENDER_API's GENDER_API_GENDER_API_GET_COUNTRY_OF_ORIGIN tool output.
 */
type GENDER_API_GENDER_API_GET_COUNTRY_OF_ORIGIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country Of Origin
       * @description Top 25 likely countries of origin.
       */
      country_of_origin: {
          /**
           * Continental Region
           * @description Continental region name.
           * @default null
           */
          continental_region: string | null;
          /**
           * Country
           * @description ISO country code.
           * @example US
           */
          country: string;
          /**
           * Country Name
           * @description Full country name.
           * @example United States
           */
          country_name: string;
          /**
           * Probability
           * @description Probability score for this country's origin.
           */
          probability: number;
          /**
           * Statistical Region
           * @description Statistical sub-region name.
           * @default null
           */
          statistical_region: string | null;
      }[];
      /**
       * Country Of Origin Map Url
       * Format: uri
       * @description URL to interactive map for this name.
       */
      country_of_origin_map_url: string;
      /**
       * Details
       * @description Additional response details.
       */
      details: {
          /**
           * Country
           * @description Single best-guess country.
           * @default null
           */
          country: string | null;
          /**
           * Credits Used
           * @description Number of requests charged for this query.
           */
          credits_used: number;
          /**
           * Duration
           * @description Server processing time.
           */
          duration: string;
          /**
           * First Name Sanitized
           * @description Normalized version of the name.
           * @default null
           */
          first_name_sanitized: string | null;
          /**
           * Samples
           * @description Count of matching records used.
           */
          samples: number;
      };
      /**
       * Ethnicity
       * @description Primary ethnic group and distribution.
       * @default null
       */
      ethnicity: {
          /**
           * Distribution
           * @description Distribution across ethnic groups.
           */
          distribution: {
              /**
               * Id
               * @description Identifier of the ethnic group.
               * @example eu
               */
              id: string;
              /**
               * Name
               * @description Name of the ethnic group.
               * @example European
               */
              name: string;
              /**
               * Percentage
               * @description Percentage share of this ethnic group.
               */
              percentage: number;
          }[];
          /**
           * Id
           * @description Primary ethnic group identifier.
           * @example eu
           */
          id: string;
          /**
           * Name
           * @description Primary ethnic group name.
           * @example European
           */
          name: string;
      } | null;
      /**
       * First Name
       * @description First name used for analysis.
       * @default null
       */
      first_name: string | null;
      /**
       * Gender
       * @description Detected gender: male, female, or unknown.
       * @default null
       */
      gender: string | null;
      /**
       * Input
       * @description Echo of submitted payload.
       */
      input: {
          /**
           * Email
           * Format: email
           * @description Email address to query; can be provided instead of first_name.
           * @default null
           * @example sandra@example.com
           */
          email: string | null;
          /**
           * First Name
           * @description First name to query. Required if full_name and email are not provided.
           * @default null
           * @example Sandra
           */
          first_name: string | null;
          /**
           * Full Name
           * @description Full name to query; can be provided instead of first_name.
           * @default null
           * @example Sandra Bullock
           */
          full_name: string | null;
          /**
           * Id
           * @description Client-defined request ID for correlation (max 50 chars).
           * @default null
           */
          id: string | null;
      };
      /**
       * Language Of Origin
       * @description Likely language of origin.
       * @default null
       */
      language_of_origin: string | null;
      /**
       * Meaning
       * @description Short description of the name's meaning.
       * @default null
       */
      meaning: string | null;
      /**
       * Probability
       * @description Overall reliability score (0-1).
       */
      probability: number;
      /**
       * Result Found
       * @description Whether a result was found.
       */
      result_found: boolean;
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
 * Type of GENDER_API's GENDER_API_GET_STATISTIC tool input.
 */
type GENDER_API_GET_STATISTIC_INPUT = object;

/**
 * Type of GENDER_API's GENDER_API_GET_STATISTIC tool output.
 */
type GENDER_API_GET_STATISTIC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Details
       * @description Info about this query.
       */
      details: {
          /**
           * Credits Used
           * @description Requests consumed by this query.
           */
          credits_used: number;
          /**
           * Duration
           * @description Server processing time for this query, e.g., '83ms'.
           */
          duration: string;
      };
      /**
       * Is Limit Reached
       * @description True if no requests left.
       */
      is_limit_reached: boolean;
      /**
       * Remaining Credits
       * @description Number of requests left.
       */
      remaining_credits: number;
      /**
       * Usage Last Month
       * @description Last month's usage summary.
       */
      usage_last_month: {
          /**
           * Credits Used
           * @description Requests used last month.
           */
          credits_used: number;
          /**
           * Date
           * @description Month of usage in 'YYYY-MM' format.
           */
          date: string;
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
 * Type of GENDER_API's GENDER_API_QUERY_BY_EMAIL_ADDRESS tool input.
 */
type GENDER_API_QUERY_BY_EMAIL_ADDRESS_INPUT = {
  /**
   * Country
   * @description ISO 3166 ALPHA-2 country code
   * @default null
   */
  country: string | null;
  /**
   * Email
   * Format: email
   * @description Email address to query for gender determination
   */
  email?: string;
  /**
   * Id
   * @description Client-provided correlation ID
   * @default null
   */
  id: string | null;
  /**
   * Ip
   * @description Valid IPv4 or IPv6 address
   * @default null
   */
  ip: string | null;
  /**
   * Locale
   * @description Browser locale code (e.g., 'en_US')
   * @default null
   */
  locale: string | null;
};

/**
 * Type of GENDER_API's GENDER_API_QUERY_BY_EMAIL_ADDRESS tool output.
 */
type GENDER_API_QUERY_BY_EMAIL_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Details
       * @description Detailed statistics about the query
       */
      details: {
          /**
           * Country
           * @description Country code used or found for the query
           * @default null
           */
          country: string | null;
          /**
           * Credits Used
           * @description Number of credits used by this query
           */
          credits_used: number;
          /**
           * Duration
           * @description Server processing time (e.g., '12ms')
           */
          duration: string;
          /**
           * Email Sanitized
           * @description Sanitized email name token count
           * @default null
           */
          email_sanitized: number | null;
          /**
           * First Name Sanitized
           * @description Normalized first name extracted from email
           */
          first_name_sanitized: string;
          /**
           * Samples
           * @description Count of matching records in the database
           */
          samples: number;
      };
      /**
       * Email
       * Format: email
       * @description Queried email address
       */
      email: string;
      /**
       * First Name
       * @description First name parsed from the email
       * @default null
       */
      first_name: string | null;
      /**
       * Gender
       * @description Determined gender
       * @enum {string}
       */
      gender: "male" | "female" | "unknown";
      /**
       * Input
       * @description Echo of the submitted request payload
       */
      input: {
          [key: string]: unknown;
      };
      /**
       * Last Name
       * @description Last name parsed from the email
       * @default null
       */
      last_name: string | null;
      /**
       * Probability
       * @description Reliability measure between 0 and 1 (1 = 100% accurate)
       */
      probability: number;
      /**
       * Result Found
       * @description True if a gender was determined
       */
      result_found: boolean;
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
 * Type of GENDER_API's GENDER_API_QUERY_BY_FIRST_NAME tool input.
 */
type GENDER_API_QUERY_BY_FIRST_NAME_INPUT = {
  /**
   * Country
   * @description ISO 3166 ALPHA-2 country code.
   * @default null
   */
  country: string | null;
  /**
   * First Name
   * @description Name to query.
   */
  first_name?: string;
  /**
   * Id
   * @description Client-defined correlation ID, max 50 characters.
   * @default null
   */
  id: string | null;
  /**
   * Ip
   * @description Valid IPv4 or IPv6 address.
   * @default null
   */
  ip: string | null;
  /**
   * Locale
   * @description Browser locale, e.g., 'en-US'.
   * @default null
   */
  locale: string | null;
};

/**
 * Type of GENDER_API's GENDER_API_QUERY_BY_FIRST_NAME tool output.
 */
type GENDER_API_QUERY_BY_FIRST_NAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Details
       * @description Processing details.
       */
      details: {
          /**
           * Country
           * @description The country found (may be null).
           * @default null
           */
          country: string | null;
          /**
           * Credits Used
           * @description Requests (credits) used for this query.
           */
          credits_used: number;
          /**
           * Duration
           * @description Server processing time, e.g., '436ms'.
           */
          duration: string;
          /**
           * First Name Sanitized
           * @description Name after normalization.
           */
          first_name_sanitized: string;
          /**
           * Samples
           * @description Number of database records matching the request.
           */
          samples: number;
      };
      /**
       * First Name
       * @description The first name used for genderization.
       */
      first_name: string;
      /**
       * Gender
       * @description One of: male, female, unknown.
       * @enum {string}
       */
      gender: "male" | "female" | "unknown";
      /**
       * Input
       * @description The submitted payload.
       */
      input: {
          /**
           * Country
           * @description ISO 3166 ALPHA-2 country code.
           * @default null
           */
          country: string | null;
          /**
           * First Name
           * @description Name to query.
           */
          first_name: string;
          /**
           * Id
           * @description Client-defined correlation ID, max 50 characters.
           * @default null
           */
          id: string | null;
          /**
           * Ip
           * @description Valid IPv4 or IPv6 address.
           * @default null
           */
          ip: string | null;
          /**
           * Locale
           * @description Browser locale, e.g., 'en-US'.
           * @default null
           */
          locale: string | null;
      };
      /**
       * Probability
       * @description Reliability of the result between 0 and 1.
       */
      probability: number;
      /**
       * Result Found
       * @description True if a gender could be determined for the name.
       */
      result_found: boolean;
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
 * Type of GENDER_API's GENDER_API_QUERY_BY_FULL_NAME tool input.
 */
type GENDER_API_QUERY_BY_FULL_NAME_INPUT = {
  /**
   * Country
   * @description ISO 3166 alpha-2 country code to hint regional gender conventions.
   * @default null
   */
  country: string | null;
  /**
   * Full Name
   * @description Full name to query; must contain at least one non-space character.
   */
  full_name?: string;
  /**
   * Id
   * @description Arbitrary ID (max 50 chars) for correlating batch responses.
   * @default null
   */
  id: string | null;
  /**
   * Ip
   * @description Valid IPv4 or IPv6 address for geo-based gender inference.
   * @default null
   */
  ip: string | null;
  /**
   * Locale
   * @description Browser locale string (e.g., en_US) for more accurate inference.
   * @default null
   */
  locale: string | null;
};

/**
 * Type of GENDER_API's GENDER_API_QUERY_BY_FULL_NAME tool output.
 */
type GENDER_API_QUERY_BY_FULL_NAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Details
       * @description Metadata about this request.
       */
      details: {
          /**
           * Country
           * @description Country code determined by API.
           * @default null
           */
          country: string | null;
          /**
           * Credits Used
           * @description Number of credits consumed by this query.
           */
          credits_used: number;
          /**
           * Duration
           * @description Server processing time (e.g., '0.123s').
           */
          duration: string;
          /**
           * First Name Sanitized
           * @description Sanitized first name used for lookup.
           */
          first_name_sanitized: string;
          /**
           * Samples
           * @description Number of matching records.
           */
          samples: number;
      };
      /**
       * First Name
       * @description Parsed first name from the full_name.
       */
      first_name: string;
      /**
       * Gender
       * @description Inferred gender category.
       * @enum {string}
       */
      gender: "male" | "female" | "unknown";
      /**
       * Input
       * @description Echo of the submitted query.
       */
      input: {
          /**
           * Country
           * @description ISO 3166 alpha-2 country code to hint regional gender conventions.
           * @default null
           */
          country: string | null;
          /**
           * Full Name
           * @description Full name to query; must contain at least one non-space character.
           */
          full_name: string;
          /**
           * Id
           * @description Arbitrary ID (max 50 chars) for correlating batch responses.
           * @default null
           */
          id: string | null;
          /**
           * Ip
           * @description Valid IPv4 or IPv6 address for geo-based gender inference.
           * @default null
           */
          ip: string | null;
          /**
           * Locale
           * @description Browser locale string (e.g., en_US) for more accurate inference.
           * @default null
           */
          locale: string | null;
      };
      /**
       * Last Name
       * @description Parsed last name from the full_name.
       */
      last_name: string;
      /**
       * Probability
       * @description Confidence score from 0.0 to 1.0.
       */
      probability: number;
      /**
       * Result Found
       * @description Whether a matching gender record was found.
       */
      result_found: boolean;
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
 * Type map of all available tool input types for toolkit "GENDER_API".
 */
export type GENDER_API_TOOL_INPUTS = {
  GENDER_API_GET_COUNTRY_OF_ORIGIN: GENDER_API_GENDER_API_GET_COUNTRY_OF_ORIGIN_INPUT
  GET_STATISTIC: GENDER_API_GET_STATISTIC_INPUT
  QUERY_BY_EMAIL_ADDRESS: GENDER_API_QUERY_BY_EMAIL_ADDRESS_INPUT
  QUERY_BY_FIRST_NAME: GENDER_API_QUERY_BY_FIRST_NAME_INPUT
  QUERY_BY_FULL_NAME: GENDER_API_QUERY_BY_FULL_NAME_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GENDER_API".
 */
export type GENDER_API_TOOL_OUTPUTS = {
  GENDER_API_GET_COUNTRY_OF_ORIGIN: GENDER_API_GENDER_API_GET_COUNTRY_OF_ORIGIN_OUTPUT
  GET_STATISTIC: GENDER_API_GET_STATISTIC_OUTPUT
  QUERY_BY_EMAIL_ADDRESS: GENDER_API_QUERY_BY_EMAIL_ADDRESS_OUTPUT
  QUERY_BY_FIRST_NAME: GENDER_API_QUERY_BY_FIRST_NAME_OUTPUT
  QUERY_BY_FULL_NAME: GENDER_API_QUERY_BY_FULL_NAME_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GENDER_API toolkit.
 */
export const GENDER_API = {
  slug: "gender_api",
  tools: {
    /**
     * Tool to retrieve a name's likely countries of origin. Use after confirming the name identifier.
     */
    GENDER_API_GET_COUNTRY_OF_ORIGIN: "GENDER_API_GENDER_API_GET_COUNTRY_OF_ORIGIN",
    /**
     * Tool to retrieve account statistics from Gender-API, including remaining credits and usage details. Use when you need to check your credit balance before performing further gender lookups.
     */
    GET_STATISTIC: "GENDER_API_GET_STATISTIC",
    /**
     * Tool to determine gender from an email address. Use when you need the likely gender based on an email.
     */
    QUERY_BY_EMAIL_ADDRESS: "GENDER_API_QUERY_BY_EMAIL_ADDRESS",
    /**
     * Tool to determine the gender of a first name. Use when you need to identify gender based on a given name.
     */
    QUERY_BY_FIRST_NAME: "GENDER_API_QUERY_BY_FIRST_NAME",
    /**
     * Tool to determine gender by splitting a full name. Use when you have an exact full name string and want to infer gender. Slightly less reliable for rare or ambiguous names.
     */
    QUERY_BY_FULL_NAME: "GENDER_API_QUERY_BY_FULL_NAME",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GENDER_API".
 */
export type GENDER_API_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GENDER_API".
 */
export type GENDER_API_TRIGGER_EVENTS = {}
