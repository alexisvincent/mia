// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GENDERAPI_IO's GENDERAPI_IO_GENDERAPI_GET_STATS tool input.
 */
type GENDERAPI_IO_GENDERAPI_GET_STATS_INPUT = object;

/**
 * Type of GENDERAPI_IO's GENDERAPI_IO_GENDERAPI_GET_STATS tool output.
 */
type GENDERAPI_IO_GENDERAPI_GET_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expires At
       * @description UNIX timestamp when the current package expires
       */
      expiresAt: number;
      /**
       * Remaining
       * @description Number of remaining API credits on this API key
       */
      remaining: number;
      /**
       * Status
       * @description Whether the request was successful.
       */
      status: boolean;
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
 * Type of GENDERAPI_IO's GENDERAPI_IO_GENDER_API_QUERY_BY_FIRST_NAME tool input.
 */
type GENDERAPI_IO_GENDER_API_QUERY_BY_FIRST_NAME_INPUT = {
  /**
   * Ask To Ai
   * @description Ask AI model when the name isn’t present in the database.
   * @default null
   */
  askToAI: boolean | null;
  /**
   * Country
   * @description Optional ISO 3166 alpha-2 country code to localize the query.
   * @default null
   */
  country: string | null;
  /**
   * Force To Genderize
   * @description Attempt to genderize even for non-typical names (e.g., nicknames).
   * @default null
   */
  forceToGenderize: boolean | null;
  /**
   * Id
   * @description Optional arbitrary identifier (up to 50 characters) to correlate the response.
   * @default null
   */
  id: string | null;
  /**
   * Ip
   * @description Optional IP address (IPv4 or IPv6) to localize the query.
   * @default null
   */
  ip: string | null;
  /**
   * Locale
   * @description Optional locale to guide gender inference.
   * @default null
   */
  locale: string | null;
  /**
   * Name
   * @description First name to query gender for.
   */
  name?: string;
};

/**
 * Type of GENDERAPI_IO's GENDERAPI_IO_GENDER_API_QUERY_BY_FIRST_NAME tool output.
 */
type GENDERAPI_IO_GENDER_API_QUERY_BY_FIRST_NAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Most likely country code determined by the service.
       * @default null
       */
      country: string | null;
      /**
       * Duration
       * @description Server processing time (e.g., '4ms').
       * @default null
       */
      duration: string | null;
      /**
       * Expires
       * @description Package expiry time as Unix timestamp (seconds).
       * @default null
       */
      expires: number | null;
      /**
       * Gender
       * @description Predicted gender ('male' or 'female'); null if unknown.
       * @default null
       */
      gender: string | null;
      /**
       * Name
       * @description Found/extracted first name from the input.
       * @default null
       */
      name: string | null;
      /**
       * Probability
       * @description Reliability percentage between 0 and 100.
       * @default null
       */
      probability: number | null;
      /**
       * Q
       * @description Echo of your input (name).
       */
      q: string;
      /**
       * Remaining Credits
       * @description Credits remaining after this request.
       * @default null
       */
      remaining_credits: number | null;
      /**
       * Status
       * @description True if request succeeded.
       */
      status: boolean;
      /**
       * Total Names
       * @description Number of matching name samples in the database.
       * @default null
       */
      total_names: number | null;
      /**
       * Used Credits
       * @description Number of credits used for this query.
       */
      used_credits: number;
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
 * Type of GENDERAPI_IO's GENDERAPI_IO_GET_GENDER_FROM_USERNAME tool input.
 */
type GENDERAPI_IO_GET_GENDER_FROM_USERNAME_INPUT = {
  /**
   * Ask To Ai
   * @description If true, asks the AI model when the name is not found in the database.
   * @default null
   */
  askToAI: boolean | null;
  /**
   * Country
   * @description Optional ISO 3166-1 alpha-2 country code to improve prediction accuracy.
   * @default null
   */
  country: string | null;
  /**
   * Force To Genderize
   * @description If true, attempts prediction even for usernames that don't resemble real names.
   * @default null
   */
  forceToGenderize: boolean | null;
  /**
   * Username
   * @description Username or nickname to analyze for gender inference.
   */
  username?: string;
};

/**
 * Type of GENDERAPI_IO's GENDERAPI_IO_GET_GENDER_FROM_USERNAME tool output.
 */
type GENDERAPI_IO_GET_GENDER_FROM_USERNAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Country code considered during prediction.
       * @default null
       */
      country: string | null;
      /**
       * Duration
       * @description Processing time, e.g., '6ms'.
       */
      duration: string;
      /**
       * Expires
       * @description UNIX timestamp when plan expires.
       */
      expires: number;
      /**
       * Gender
       * @description Predicted gender: 'male', 'female', or null if undetermined.
       * @default null
       * @enum {string|null}
       */
      gender: "male" | "female" | null;
      /**
       * Name
       * @description Name extracted from the username, if any.
       * @default null
       */
      name: string | null;
      /**
       * Probability
       * @description Confidence score as a percentage (0-100).
       */
      probability: number;
      /**
       * Q
       * @description The input username submitted.
       */
      q: string;
      /**
       * Remaining Credits
       * @description Remaining credits after the request.
       */
      remaining_credits: number;
      /**
       * Status
       * @description Whether the request was successful.
       */
      status: boolean;
      /**
       * Total Names
       * @description Number of name samples used.
       */
      total_names: number;
      /**
       * Used Credits
       * @description Number of credits used for this request.
       */
      used_credits: number;
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
 * Type of GENDERAPI_IO's GENDERAPI_IO_LIST_ERROR_CODES tool input.
 */
type GENDERAPI_IO_LIST_ERROR_CODES_INPUT = object;

/**
 * Type of GENDERAPI_IO's GENDERAPI_IO_LIST_ERROR_CODES tool output.
 */
type GENDERAPI_IO_LIST_ERROR_CODES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Codes
       * @description List of possible error codes returned by the Gender API
       */
      error_codes: {
          /**
           * Description
           * @description Human-readable description of the error
           */
          description: string;
          /**
           * Error Code
           * @description Unique string identifier for the error
           */
          error_code: string;
          /**
           * Http Status
           * @description Associated HTTP status code
           */
          http_status: number;
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
 * Type of GENDERAPI_IO's GENDERAPI_IO_QUERY_BY_EMAIL_ADDRESS tool input.
 */
type GENDERAPI_IO_QUERY_BY_EMAIL_ADDRESS_INPUT = {
  /**
   * Country
   * @description ISO 3166-1 alpha-2 country code to hint the endpoint (uppercase).
   * @default null
   */
  country: string | null;
  /**
   * Email
   * Format: email
   * @description Email address to query; must be a valid email format.
   */
  email?: string;
  /**
   * Id
   * @description Optional client-provided ID (max 50 characters) for tracing.
   * @default null
   */
  id: string | null;
  /**
   * Ip
   * @description Valid IPv4 or IPv6 address for geo-hinting.
   * @default null
   */
  ip: string | null;
  /**
   * Locale
   * @description Browser locale to improve name parsing (e.g., 'en', 'fr').
   * @default null
   */
  locale: string | null;
};

/**
 * Type of GENDERAPI_IO's GENDERAPI_IO_QUERY_BY_EMAIL_ADDRESS tool output.
 */
type GENDERAPI_IO_QUERY_BY_EMAIL_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Country code determined/used by the service.
       * @default null
       */
      country: string | null;
      /**
       * Duration
       * @description Server processing time (e.g., '5ms').
       * @default null
       */
      duration: string | null;
      /**
       * Expires
       * @description UNIX timestamp when the current package expires
       * @default null
       */
      expires: number | null;
      /**
       * Gender
       * @description Predicted gender ('male' or 'female'); null if unknown.
       * @default null
       */
      gender: string | null;
      /**
       * Name
       * @description Name extracted from the email address, if any.
       * @default null
       */
      name: string | null;
      /**
       * Probability
       * @description Reliability percentage between 0 and 100.
       * @default null
       */
      probability: number | null;
      /**
       * Q
       * @description Echo of the input (email address).
       */
      q: string;
      /**
       * Remaining Credits
       * @description Credits remaining after this request.
       * @default null
       */
      remaining_credits: number | null;
      /**
       * Status
       * @description Whether the request was successful.
       */
      status: boolean;
      /**
       * Total Names
       * @description Number of matching name samples in the database.
       * @default null
       */
      total_names: number | null;
      /**
       * Used Credits
       * @description Number of credits used for this query.
       */
      used_credits: number;
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
 * Type of GENDERAPI_IO's GENDERAPI_IO_QUERY_BY_FULL_NAME tool input.
 */
type GENDERAPI_IO_QUERY_BY_FULL_NAME_INPUT = {
  /**
   * Ask To Ai
   * @description Ask AI model when the name isn’t present in the database.
   * @default null
   */
  askToAI: boolean | null;
  /**
   * Country
   * @description ISO 3166 ALPHA-2 country code (optional)
   * @default null
   */
  country: string | null;
  /**
   * Force To Genderize
   * @description Attempt to genderize even for non-typical names (e.g., nicknames).
   * @default null
   */
  forceToGenderize: boolean | null;
  /**
   * Full Name
   * @description Full name to split and query gender for (e.g., 'Alice Johnson')
   */
  full_name?: string;
  /**
   * Id
   * @description Arbitrary identifier to correlate responses (max 50 chars)
   * @default null
   */
  id: string | null;
};

/**
 * Type of GENDERAPI_IO's GENDERAPI_IO_QUERY_BY_FULL_NAME tool output.
 */
type GENDERAPI_IO_QUERY_BY_FULL_NAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Most likely country code determined by the service.
       * @default null
       */
      country: string | null;
      /**
       * Duration
       * @description Server processing time (e.g., '4ms').
       * @default null
       */
      duration: string | null;
      /**
       * Expires
       * @description UNIX timestamp when the current package expires
       * @default null
       */
      expires: number | null;
      /**
       * Gender
       * @description Predicted gender ('male' or 'female'); null if unknown.
       * @default null
       */
      gender: string | null;
      /**
       * Name
       * @description Found/extracted first name from the input.
       * @default null
       */
      name: string | null;
      /**
       * Probability
       * @description Reliability percentage between 0 and 100.
       * @default null
       */
      probability: number | null;
      /**
       * Q
       * @description Echo of the input (name).
       */
      q: string;
      /**
       * Remaining Credits
       * @description Credits remaining after this request.
       * @default null
       */
      remaining_credits: number | null;
      /**
       * Status
       * @description Whether the request was successful.
       */
      status: boolean;
      /**
       * Total Names
       * @description Number of matching name samples in the database.
       * @default null
       */
      total_names: number | null;
      /**
       * Used Credits
       * @description Number of credits used for this query.
       */
      used_credits: number;
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
 * Type map of all available tool input types for toolkit "GENDERAPI_IO".
 */
export type GENDERAPI_IO_TOOL_INPUTS = {
  GENDERAPI_GET_STATS: GENDERAPI_IO_GENDERAPI_GET_STATS_INPUT
  GENDER_API_QUERY_BY_FIRST_NAME: GENDERAPI_IO_GENDER_API_QUERY_BY_FIRST_NAME_INPUT
  GET_GENDER_FROM_USERNAME: GENDERAPI_IO_GET_GENDER_FROM_USERNAME_INPUT
  LIST_ERROR_CODES: GENDERAPI_IO_LIST_ERROR_CODES_INPUT
  QUERY_BY_EMAIL_ADDRESS: GENDERAPI_IO_QUERY_BY_EMAIL_ADDRESS_INPUT
  QUERY_BY_FULL_NAME: GENDERAPI_IO_QUERY_BY_FULL_NAME_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GENDERAPI_IO".
 */
export type GENDERAPI_IO_TOOL_OUTPUTS = {
  GENDERAPI_GET_STATS: GENDERAPI_IO_GENDERAPI_GET_STATS_OUTPUT
  GENDER_API_QUERY_BY_FIRST_NAME: GENDERAPI_IO_GENDER_API_QUERY_BY_FIRST_NAME_OUTPUT
  GET_GENDER_FROM_USERNAME: GENDERAPI_IO_GET_GENDER_FROM_USERNAME_OUTPUT
  LIST_ERROR_CODES: GENDERAPI_IO_LIST_ERROR_CODES_OUTPUT
  QUERY_BY_EMAIL_ADDRESS: GENDERAPI_IO_QUERY_BY_EMAIL_ADDRESS_OUTPUT
  QUERY_BY_FULL_NAME: GENDERAPI_IO_QUERY_BY_FULL_NAME_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GENDERAPI_IO toolkit.
 */
export const GENDERAPI_IO = {
  slug: "genderapi_io",
  tools: {
    /**
     * Tool to retrieve account usage statistics from GenderAPI.io. Use when you need to check remaining API credits and expiry.
     */
    GENDERAPI_GET_STATS: "GENDERAPI_IO_GENDERAPI_GET_STATS",
    /**
     * Tool to determine gender by querying first name. Use when you need to infer likely gender for a given name with optional localization hints.
     */
    GENDER_API_QUERY_BY_FIRST_NAME: "GENDERAPI_IO_GENDER_API_QUERY_BY_FIRST_NAME",
    /**
     * Tool to determine gender from a username or nickname. Use when you have an alias or handle and want to infer gender from that identifier.
     */
    GET_GENDER_FROM_USERNAME: "GENDERAPI_IO_GET_GENDER_FROM_USERNAME",
    /**
     * Tool to list all possible error codes returned by Gender API. Use when debugging or validating API responses.
     */
    LIST_ERROR_CODES: "GENDERAPI_IO_LIST_ERROR_CODES",
    /**
     * Tool to determine gender from an email address. Use when you need to infer gender for personalization after obtaining proper consent.
     */
    QUERY_BY_EMAIL_ADDRESS: "GENDERAPI_IO_QUERY_BY_EMAIL_ADDRESS",
    /**
     * Tool to determine gender from a full name. Extracts the first valid name token and queries the GenderAPI.io single-name endpoint. Use when you have a full name and want to infer likely gender.
     */
    QUERY_BY_FULL_NAME: "GENDERAPI_IO_QUERY_BY_FULL_NAME",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GENDERAPI_IO".
 */
export type GENDERAPI_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GENDERAPI_IO".
 */
export type GENDERAPI_IO_TRIGGER_EVENTS = {}
