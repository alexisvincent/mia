// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_AUTOCOMPLETE_FIELD_SUGGESTIONS tool input.
 */
type PEOPLEDATALABS_AUTOCOMPLETE_FIELD_SUGGESTIONS_INPUT = {
  /**
   * Field
   * @description Field for which to request autocompletion suggestions. Supported values: company, country, industry, location, major, region, role, school, skill, sub_role, title, website.
   */
  field?: string;
  /**
   * Pretty
   * @description If true, formats the JSON output for human readability.
   * @default false
   */
  pretty: boolean;
  /**
   * Size
   * @description Maximum number of autocomplete suggestions to return.
   * @default 10
   */
  size: number;
  /**
   * Text
   * @description Initial text to autocomplete (e.g., 'goo' for 'google').
   */
  text?: string;
  /**
   * Titlecase
   * @description If true, returns suggestions in title case.
   * @default false
   */
  titlecase: boolean;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_AUTOCOMPLETE_FIELD_SUGGESTIONS tool output.
 */
type PEOPLEDATALABS_AUTOCOMPLETE_FIELD_SUGGESTIONS_OUTPUT = {
  /**
   * Data
   * @description Array of suggestion objects, each detailing an autocomplete suggestion.
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Fields
   * @description List of fields for which suggestions were actually provided.
   */
  fields?: string[];
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_CLEAN_COMPANY_DATA tool input.
 */
type PEOPLEDATALABS_CLEAN_COMPANY_DATA_INPUT = {
  /**
   * Name
   * @description The company's current or known name.
   * @default
   */
  name: string;
  /**
   * Pretty
   * @description If true, formats the JSON response with human-readable indentation.
   * @default false
   */
  pretty: boolean;
  /**
   * Profile
   * @description The company's social media profile URL.
   * @default
   */
  profile: string;
  /**
   * Website
   * @description The company's website URL.
   * @default
   */
  website: string;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_CLEAN_COMPANY_DATA tool output.
 */
type PEOPLEDATALABS_CLEAN_COMPANY_DATA_OUTPUT = {
  /**
   * Data
   * @description Cleaned and standardized company data. Its structure and fields can vary based on the input and the information cleaned.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_CLEAN_LOCATION_DATA tool input.
 */
type PEOPLEDATALABS_CLEAN_LOCATION_DATA_INPUT = {
  /**
   * Location
   * @description The raw, unformatted location string to be cleaned and standardized. This can be a full address, a city/state pair, or just a place name.
   */
  location?: string;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_CLEAN_LOCATION_DATA tool output.
 */
type PEOPLEDATALABS_CLEAN_LOCATION_DATA_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the cleaned, standardized, and potentially enriched location data returned by the API. The structure and fields within this dictionary can vary based on the input and the information derived (e.g., city, state, country, postal_code, geo-coordinates).
   */
  data?: {
      [key: string]: unknown;
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
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_CLEAN_SCHOOL_DATA tool input.
 */
type PEOPLEDATALABS_CLEAN_SCHOOL_DATA_INPUT = {
  /**
   * Name
   * @description The name of the school.
   */
  name?: string;
  /**
   * Pretty
   * @description If true, the JSON response is pretty-printed with human-readable indentations.
   * @default false
   */
  pretty: boolean;
  /**
   * Profile
   * @description The social media profile URL (e.g., LinkedIn, Twitter) of the school.
   */
  profile?: string;
  /**
   * Website
   * @description The website URL of the school.
   */
  website?: string;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_CLEAN_SCHOOL_DATA tool output.
 */
type PEOPLEDATALABS_CLEAN_SCHOOL_DATA_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the cleaned, standardized, and potentially enriched school information returned by the API.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_COMPANY_SEARCH_ELASTIC tool input.
 */
type PEOPLEDATALABS_COMPANY_SEARCH_ELASTIC_INPUT = {
  /**
   * Dataset
   * @description Specifies the dataset category to search against. Accepted values are: 'resume', 'email', 'phone', 'mobile_phone', 'street_address', 'consumer_social', 'developer', or 'all'.
   * @default resume
   */
  dataset: string;
  /**
   * Pretty
   * @description If true, the JSON response will be pretty-printed with human-readable indentation. Defaults to false.
   * @default false
   */
  pretty: boolean;
  /**
   * Query
   * @description Elasticsearch DSL query string used to search for person profiles from People Data Labs.
   *     This field requires a well-formed JSON object as a string, representing the Elasticsearch query.
   *
   *     **Key Guidelines for Query Construction:**
   *     1.  **Valid Fields:** Queries must use fields corresponding to the PDL person profile schema (e.g., `job_title`, `location_country`, `skills`, `inferred_years_experience`).
   *     2.  **Query Types:** Employ appropriate Elasticsearch query types based on the field type and desired logic:
   *         *   `term`: For exact matches on keyword fields (e.g., specific IDs, canonicalized location names, tags).
   *         *   `terms`: For matching any of multiple exact terms in keyword fields.
   *         *   `match`: For full-text searches on analyzed text fields (e.g., free-form text in summaries, job descriptions).
   *         *   `match_phrase`: For exact phrase matching within text fields.
   *         *   `range`: For filtering by numeric or date ranges (e.g., `inferred_years_experience: {"gte": 5}`).
   *         *   `exists`: To find documents where a specific field has a value (is not null).
   *         *   `bool`: To combine multiple query clauses using:
   *             *   `must`: Clauses that *must* match (AND logic).
   *             *   `should`: Clauses where at least one *should* match (OR logic).
   *             *   `filter`: Clauses that *must* match, but are executed in a non-scoring context (often for performance).
   *             *   `must_not`: Clauses that *must not* match (NOT logic).
   *         *   `wildcard`: For pattern matching using `*` (multiple characters) or `?` (single character). Especially useful for location fields (e.g., `location_name: "*francisco*"`).
   *         *   `prefix`: For matching terms that start with a given prefix.
   *     3.  **Contextual Queries:** Use `query` context (e.g., within `must` or `should` of a `bool` query) for conditions that should affect the relevance score. Use `filter` context for exact criteria that do not need to influence scoring, which can be more performant.
   *     4.  **Best Practices & Important Notes:**
   *         *   **Field Specifics:** This action searches *person* data. Ensure query fields are relevant to person attributes.
   *         *   **Canonical Values:** For fields with predefined (canonical) values, use exact matches with `term` or `terms` queries.
   *         *   **Location Searches:** `wildcard` queries are often effective for location fields like `location_country`, `location_region`, `location_name`. For example: `{"wildcard": {"location_country": "*united states*"}}`.
   *         *   **Boolean Logic:** When using `bool` queries, ensure that conditions in `must` or `filter` clauses are not logically mutually exclusive, as this would yield no results.
   *         *   **Exclusions:** Do NOT include `size` or `scroll_token` parameters within this DSL query string; use the dedicated request fields for these pagination parameters.
   *         *   **`minimum_should_match`:** Do NOT use the `minimum_should_match` parameter in `bool` queries.
   *         *   **Non-Canonical Inputs:** If dealing with user input that may not be canonical (e.g., free-text location), attempt to map it to a known canonical value for a `term` query, or use broader `match` or `wildcard` queries.
   *     This summary provides key guidelines. For comprehensive DSL syntax, advanced features, specific field mappings for PDL person data, and detailed behavior of query types, always consult the official Elasticsearch documentation and People Data Labs API documentation.
   */
  query?: string;
  /**
   * Scroll Token
   * @description A token returned from a previous search response, used for paginating through large result sets. Provide this token to retrieve the next batch of `size` records. Leave empty or omit for the first request.
   * @default
   */
  scroll_token: string;
  /**
   * Size
   * @description The number of matched person records to return. Must be an integer between 1 and 100, inclusive.
   * @default 1
   */
  size: number;
  /**
   * Titlecase
   * @description If true, an attempt will be made to title-case relevant text fields in the returned person records. Defaults to false.
   * @default false
   */
  titlecase: boolean;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_COMPANY_SEARCH_ELASTIC tool output.
 */
type PEOPLEDATALABS_COMPANY_SEARCH_ELASTIC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Query
       * @description The Elasticsearch DSL query string that was executed for the search.
       */
      query: string;
      /**
       * Records
       * @description A list of person records matching the search query. Each record is a JSON object containing details of a person.
       */
      records: unknown;
      /**
       * Scroll Token
       * @description A token that can be used in a subsequent request's `scroll_token` field to retrieve the next page of results. If empty or not present, it may indicate no more results are available or pagination was not initiated.
       */
      scroll_token: string;
      /**
       * Total
       * @description The total number of person records found that match the query. This count may be an estimate for very large result sets or when scrolling.
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
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_ENRICH_COMPANY_DATA tool input.
 */
type PEOPLEDATALABS_ENRICH_COMPANY_DATA_INPUT = {
  /**
   * Country
   * @description The country where the company is located. Can be a full name or an ISO country code.
   */
  country?: string;
  /**
   * Locality
   * @description The city or locality where the company is situated (e.g., 'Mountain View').
   */
  locality?: string;
  /**
   * Location
   * @description A general text query for the company's location (e.g., 'San Francisco, CA' or 'London'). Can be a partial or complete location string.
   */
  location?: string;
  /**
   * Name
   * @description The company's official or commonly known name.
   */
  name?: string;
  /**
   * Pdl Id
   * @description The People Data Labs (PDL) unique identifier for a company record. Use this for the most precise match if available.
   */
  pdl_id?: string;
  /**
   * Postal Code
   * @description The postal or ZIP code for the company's location.
   */
  postal_code?: string;
  /**
   * Pretty
   * @description If true, the JSON response will be pretty-printed with human-readable indentation for easier inspection.
   * @default true
   */
  pretty: boolean;
  /**
   * Profile
   * @description A URL for one of the company's social media profiles (e.g., LinkedIn, Crunchbase).
   */
  profile?: string;
  /**
   * Region
   * @description The state, province, or administrative region where the company is located (e.g., 'California' or 'TX').
   */
  region?: string;
  /**
   * Street Address
   * @description The street address component of the company's location.
   */
  street_address?: string;
  /**
   * Ticker
   * @description The company's stock market ticker symbol.
   */
  ticker?: string;
  /**
   * Titlecase
   * @description If set to true, textual data in the API response will be converted to title case. If omitted, the API's default casing is used.
   */
  titlecase?: boolean;
  /**
   * Website
   * @description The company's primary website URL.
   */
  website?: string;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_ENRICH_COMPANY_DATA tool output.
 */
type PEOPLEDATALABS_ENRICH_COMPANY_DATA_OUTPUT = {
  /**
   * Data
   * @description Contains the enriched company information returned by the API.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_ENRICH_IP_DATA tool input.
 */
type PEOPLEDATALABS_ENRICH_IP_DATA_INPUT = {
  /**
   * Ip
   * @description The IP address to enrich. Must be a valid IPv4 or IPv6 address string.
   */
  ip?: string;
  /**
   * Min Confidence
   * @description Specifies the minimum confidence level required for a company match to be returned. Matches below this threshold are excluded. If unspecified, the API's default (often 'very low') is used. Accepted values: `very low`, `low`, `medium`, `high`, `very high`.
   * @default null
   */
  min_confidence: string | null;
  /**
   * Pretty
   * @description If true, the JSON response will be formatted with human-readable indentation for easier manual inspection.
   * @default false
   */
  pretty: boolean;
  /**
   * Return If Unmatched
   * @description If true, IP-specific data (like location or metadata if requested) will be returned even if no company profile is matched to the IP.
   * @default false
   */
  return_if_unmatched: boolean;
  /**
   * Return Ip Location
   * @description If true, includes location data specific to the IP address (e.g., city, region, country, GPS coordinates).
   * @default false
   */
  return_ip_location: boolean;
  /**
   * Return Ip Metadata
   * @description If true, includes metadata specific to the IP address (e.g., connection type, line speed, ISP).
   * @default false
   */
  return_ip_metadata: boolean;
  /**
   * Return Person
   * @description If true, attempts to include person data associated with the IP address, provided a match is found.
   * @default false
   */
  return_person: boolean;
  /**
   * Titlecase
   * @description If true, relevant string values in the response data (e.g., names, locations) will be converted to title case.
   * @default false
   */
  titlecase: boolean;
  /**
   * Updated Title Roles
   * @description If true, the API will use an updated taxonomy for job title roles in the response. Refer to People Data Labs documentation for specifics on this taxonomy.
   * @default false
   */
  updated_title_roles: boolean;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_ENRICH_IP_DATA tool output.
 */
type PEOPLEDATALABS_ENRICH_IP_DATA_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the enriched data for the specified IP address. The exact structure and content of this dictionary depend on the input parameters and the information found by the API.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_ENRICH_JOB_TITLE_DATA tool input.
 */
type PEOPLEDATALABS_ENRICH_JOB_TITLE_DATA_INPUT = {
  /**
   * Job Title
   * @description Job title to be enriched.
   */
  job_title?: string;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_ENRICH_JOB_TITLE_DATA tool output.
 */
type PEOPLEDATALABS_ENRICH_JOB_TITLE_DATA_OUTPUT = {
  /**
   * Data
   * @description Enriched information for the provided job title.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_ENRICH_PERSON_DATA tool input.
 */
type PEOPLEDATALABS_ENRICH_PERSON_DATA_INPUT = {
  /**
   * Birth Date
   * @description Birth date (YYYY-MM-DD format).
   */
  birth_date?: string;
  /**
   * Company
   * @description Company name where person has worked.
   */
  company?: string;
  /**
   * Country
   * @description Country of residence (ISO 3166-1 alpha-2 code or full name).
   */
  country?: string;
  /**
   * Data Include
   * @description Comma-separated data fields to include in response (e.g., 'emails,phones'). Refer to People Data Labs docs for all fields.
   */
  data_include?: string;
  /**
   * Email
   * @description Email address.
   */
  email?: string;
  /**
   * Email Hash
   * @description SHA-256 or MD5 hash of an email, for matching without exposing the raw email.
   */
  email_hash?: string;
  /**
   * First Name
   * @description First name.
   */
  first_name?: string;
  /**
   * Include If Matched
   * @description Include input parameters used for matching in the response if true.
   * @default false
   */
  include_if_matched: boolean;
  /**
   * Last Name
   * @description Last name.
   */
  last_name?: string;
  /**
   * Lid
   * @description LinkedIn ID.
   */
  lid?: string;
  /**
   * Locality
   * @description City or locality of residence.
   */
  locality?: string;
  /**
   * Location
   * @description General location (e.g., city, state, country).
   */
  location?: string;
  /**
   * Min Likelihood
   * @description Minimum confidence score (0-10) for a match to be returned; higher is stricter.
   * @default 2
   */
  min_likelihood: number;
  /**
   * Name
   * @description Full name.
   */
  name?: string;
  /**
   * Pdl Id
   * @description People Data Labs unique record ID.
   */
  pdl_id?: string;
  /**
   * Phone
   * @description Phone number; E.164 format recommended.
   */
  phone?: string;
  /**
   * Postal Code
   * @description Postal or ZIP code of residence.
   */
  postal_code?: string;
  /**
   * Pretty
   * @description Format JSON response with indentation for readability.
   * @default true
   */
  pretty: boolean;
  /**
   * Profile
   * @description Social profile URL (e.g., LinkedIn, Facebook).
   */
  profile?: string;
  /**
   * Region
   * @description State, province, or region of residence.
   */
  region?: string;
  /**
   * Required
   * @description Comma-separated fields required in enriched profile for a match (e.g., 'emails.address,phones.number'). See PDL docs for field paths.
   */
  required?: string;
  /**
   * School
   * @description School name attended.
   */
  school?: string;
  /**
   * Street Address
   * @description Street address.
   */
  street_address?: string;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_ENRICH_PERSON_DATA tool output.
 */
type PEOPLEDATALABS_ENRICH_PERSON_DATA_OUTPUT = {
  /**
   * Data
   * @description Dictionary with enriched person profile; structure and fields vary by input and availability.
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Likelihood
   * @description Confidence score (0-10) of the match; present if a match found. Higher score means more confident.
   * @default null
   */
  likelihood: number | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_ENRICH_SKILL_DATA tool input.
 */
type PEOPLEDATALABS_ENRICH_SKILL_DATA_INPUT = {
  /**
   * Skill
   * @description The specific skill term to be enriched. This skill will be matched against a skill dataset to retrieve detailed information.
   */
  skill?: string;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_ENRICH_SKILL_DATA tool output.
 */
type PEOPLEDATALABS_ENRICH_SKILL_DATA_OUTPUT = {
  /**
   * Data
   * @description A dictionary containing the enriched information for the specified skill. This typically includes details retrieved from a skill dataset after matching the input skill.
   */
  data?: {
      [key: string]: unknown;
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
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_GENERATE_SEARCH_QUERY_ACTION tool input.
 */
type PEOPLEDATALABS_GENERATE_SEARCH_QUERY_ACTION_INPUT = {
  /**
   * Query
   * @description A natural language query to search for information about people or companies, interpreted to fetch relevant data from the PeopleDataLabs dataset.
   */
  query?: string;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_GENERATE_SEARCH_QUERY_ACTION tool output.
 */
type PEOPLEDATALABS_GENERATE_SEARCH_QUERY_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description The generated Elasticsearch query structure from the agent
       */
      result: unknown;
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
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_GET_COLUMN_DETAILS tool input.
 */
type PEOPLEDATALABS_GET_COLUMN_DETAILS_INPUT = {
  /**
   * Column
   * @description Name of the column to fetch enum values for; must be a key in `enum_mappings.json`.
   */
  column?: string;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_GET_COLUMN_DETAILS tool output.
 */
type PEOPLEDATALABS_GET_COLUMN_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Column
       * @description Column name for which details were retrieved.
       */
      column: string;
      /**
       * Enum Values
       * @description List of possible enum values for the column; populated only if `is_enum` is true.
       * @default null
       */
      enum_values: {
          /**
           * Description
           * @description Explanation of the meaning or context of this enum value.
           * @default
           */
          description: string;
          /**
           * Value
           * @description The enumerated value.
           */
          value: string;
      }[] | null;
      /**
       * Error
       * @description Details any issues encountered, like problems accessing or parsing data mappings.
       * @default null
       */
      error: string | null;
      /**
       * Is Enum
       * @description Indicates if the column is an enum type with predefined values based on `enum_mappings.json`.
       * @default false
       */
      is_enum: boolean;
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
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_GET_SCHEMA tool input.
 */
type PEOPLEDATALABS_GET_SCHEMA_INPUT = {
  /**
   * Entity Type
   * @description The type of entity for which to retrieve the schema. Must be either 'person' or 'company'.
   */
  entity_type?: string;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_GET_SCHEMA tool output.
 */
type PEOPLEDATALABS_GET_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if schema retrieval failed; will be null if the operation succeeded.
       * @default null
       */
      error: string | null;
      /**
       * Fields
       * @description List of SchemaField objects, each detailing a field in the entity's schema.
       * @default []
       */
      fields: {
          /**
           * Column
           * @description The name of the field as it appears in the entity's schema.
           */
          column: string;
          /**
           * Description
           * @description Textual explanation of the field's purpose and content.
           */
          description: string;
          /**
           * Type
           * @description Data type of the field (e.g., String, Integer, Array [Object]).
           */
          type: string;
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
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_IDENTIFY_PERSON_DATA tool input.
 */
type PEOPLEDATALABS_IDENTIFY_PERSON_DATA_INPUT = {
  /**
   * Company
   * @description The name of a company where the person is or was employed.
   */
  company?: string;
  /**
   * Email
   * @description An email address associated with the person.
   */
  email?: string;
  /**
   * Email Hash
   * @description An MD5 or SHA-256 hash of the person's email address.
   */
  email_hash?: string;
  /**
   * First Name
   * @description The first name of the person.
   */
  first_name?: string;
  /**
   * Include If Matched
   * @description If true, the response will include a 'matched_on' attribute, an array of strings indicating which input parameters led to the match.
   * @default false
   */
  include_if_matched: boolean;
  /**
   * Last Name
   * @description The last name of the person.
   */
  last_name?: string;
  /**
   * Lid
   * @description The person's LinkedIn ID. This is a numerical ID found in some LinkedIn URLs.
   */
  lid?: string;
  /**
   * Locality
   * @description The city or locality where the person resides or has resided.
   */
  locality?: string;
  /**
   * Location
   * @description A general location query (e.g., 'San Francisco, CA', 'London, UK') associated with the person.
   */
  location?: string;
  /**
   * Name
   * @description The full name of the person.
   */
  name?: string;
  /**
   * Phone
   * @description A phone number associated with the person.
   */
  phone?: string;
  /**
   * Postal Code
   * @description The postal or ZIP code where the person resides or has resided.
   */
  postal_code?: string;
  /**
   * Pretty
   * @description If true, the JSON response is pretty-printed for easier human readability.
   * @default false
   */
  pretty: boolean;
  /**
   * Profile
   * @description A social media profile URL associated with the person, e.g., a LinkedIn or Twitter profile URL.
   */
  profile?: string;
  /**
   * Region
   * @description The state, province, or region where the person resides or has resided.
   */
  region?: string;
  /**
   * School
   * @description The name of an educational institution the person attended.
   */
  school?: string;
  /**
   * Street Address
   * @description The street address where the person resides or has resided.
   */
  street_address?: string;
  /**
   * Titlecase
   * @description If true, returns all text values in title case (e.g., 'John Doe'). Otherwise, text is returned as is.
   * @default false
   */
  titlecase: boolean;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_IDENTIFY_PERSON_DATA tool output.
 */
type PEOPLEDATALABS_IDENTIFY_PERSON_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Matches
       * @description A dictionary containing the API response for the person identification query. This typically includes details of the matched person if found, or may contain error information if no match is made or if the input was insufficient.
       */
      matches: {
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
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_PEOPLE_SEARCH_ELASTIC tool input.
 */
type PEOPLEDATALABS_PEOPLE_SEARCH_ELASTIC_INPUT = {
  /**
   * Dataset
   * @description Specifies the dataset category to search against. Allowed values are 'resume', 'email', 'phone', 'mobile_phone', 'street_address', 'consumer_social', 'developer', 'all'.
   * @default resume
   */
  dataset: string;
  /**
   * Pretty
   * @description If true, formats the JSON response with human-readable indentation. Defaults to false.
   * @default false
   */
  pretty: boolean;
  /**
   * Query
   * @description An Elasticsearch Domain Specific Language (DSL) query string, formatted as a JSON object, for searching People Data Labs (PDL) person profiles. This allows for complex searches using boolean logic, term matching, wildcards, and filters on attributes like job title, industry, and location. The query must use fields defined in the PDL schema. For detailed syntax and field names, consult Elasticsearch and PDL documentation. Incorrect queries may lead to errors.
   */
  query?: string;
  /**
   * Scroll Token
   * @description A token returned in a previous search response. Provide this token to retrieve the next page of results. Omit or pass an empty string for the first request.
   * @default
   */
  scroll_token: string;
  /**
   * Size
   * @description The number of matched person records to return. Must be an integer between 1 and 100, inclusive.
   * @default 1
   */
  size: number;
  /**
   * Titlecase
   * @description If true, titlecases the person records in the response. Defaults to false.
   * @default false
   */
  titlecase: boolean;
};

/**
 * Type of PEOPLEDATALABS's PEOPLEDATALABS_PEOPLE_SEARCH_ELASTIC tool output.
 */
type PEOPLEDATALABS_PEOPLE_SEARCH_ELASTIC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Query
       * @description The Elasticsearch query that was executed.
       */
      query: string;
      /**
       * Records
       * @description A list of person records matching the search query. The structure of each record depends on the data available.
       */
      records: unknown;
      /**
       * Scroll Token
       * @description A token to be used in subsequent requests to fetch the next set of results. Empty if no more results are available or if the query returned no records.
       */
      scroll_token: string;
      /**
       * Total
       * @description The total number of records found that match the query.
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
 * Type map of all available tool input types for toolkit "PEOPLEDATALABS".
 */
export type PEOPLEDATALABS_TOOL_INPUTS = {
  AUTOCOMPLETE_FIELD_SUGGESTIONS: PEOPLEDATALABS_AUTOCOMPLETE_FIELD_SUGGESTIONS_INPUT
  CLEAN_COMPANY_DATA: PEOPLEDATALABS_CLEAN_COMPANY_DATA_INPUT
  CLEAN_LOCATION_DATA: PEOPLEDATALABS_CLEAN_LOCATION_DATA_INPUT
  CLEAN_SCHOOL_DATA: PEOPLEDATALABS_CLEAN_SCHOOL_DATA_INPUT
  COMPANY_SEARCH_ELASTIC: PEOPLEDATALABS_COMPANY_SEARCH_ELASTIC_INPUT
  ENRICH_COMPANY_DATA: PEOPLEDATALABS_ENRICH_COMPANY_DATA_INPUT
  ENRICH_IP_DATA: PEOPLEDATALABS_ENRICH_IP_DATA_INPUT
  ENRICH_JOB_TITLE_DATA: PEOPLEDATALABS_ENRICH_JOB_TITLE_DATA_INPUT
  ENRICH_PERSON_DATA: PEOPLEDATALABS_ENRICH_PERSON_DATA_INPUT
  ENRICH_SKILL_DATA: PEOPLEDATALABS_ENRICH_SKILL_DATA_INPUT
  GENERATE_SEARCH_QUERY_ACTION: PEOPLEDATALABS_GENERATE_SEARCH_QUERY_ACTION_INPUT
  GET_COLUMN_DETAILS: PEOPLEDATALABS_GET_COLUMN_DETAILS_INPUT
  GET_SCHEMA: PEOPLEDATALABS_GET_SCHEMA_INPUT
  IDENTIFY_PERSON_DATA: PEOPLEDATALABS_IDENTIFY_PERSON_DATA_INPUT
  PEOPLE_SEARCH_ELASTIC: PEOPLEDATALABS_PEOPLE_SEARCH_ELASTIC_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PEOPLEDATALABS".
 */
export type PEOPLEDATALABS_TOOL_OUTPUTS = {
  AUTOCOMPLETE_FIELD_SUGGESTIONS: PEOPLEDATALABS_AUTOCOMPLETE_FIELD_SUGGESTIONS_OUTPUT
  CLEAN_COMPANY_DATA: PEOPLEDATALABS_CLEAN_COMPANY_DATA_OUTPUT
  CLEAN_LOCATION_DATA: PEOPLEDATALABS_CLEAN_LOCATION_DATA_OUTPUT
  CLEAN_SCHOOL_DATA: PEOPLEDATALABS_CLEAN_SCHOOL_DATA_OUTPUT
  COMPANY_SEARCH_ELASTIC: PEOPLEDATALABS_COMPANY_SEARCH_ELASTIC_OUTPUT
  ENRICH_COMPANY_DATA: PEOPLEDATALABS_ENRICH_COMPANY_DATA_OUTPUT
  ENRICH_IP_DATA: PEOPLEDATALABS_ENRICH_IP_DATA_OUTPUT
  ENRICH_JOB_TITLE_DATA: PEOPLEDATALABS_ENRICH_JOB_TITLE_DATA_OUTPUT
  ENRICH_PERSON_DATA: PEOPLEDATALABS_ENRICH_PERSON_DATA_OUTPUT
  ENRICH_SKILL_DATA: PEOPLEDATALABS_ENRICH_SKILL_DATA_OUTPUT
  GENERATE_SEARCH_QUERY_ACTION: PEOPLEDATALABS_GENERATE_SEARCH_QUERY_ACTION_OUTPUT
  GET_COLUMN_DETAILS: PEOPLEDATALABS_GET_COLUMN_DETAILS_OUTPUT
  GET_SCHEMA: PEOPLEDATALABS_GET_SCHEMA_OUTPUT
  IDENTIFY_PERSON_DATA: PEOPLEDATALABS_IDENTIFY_PERSON_DATA_OUTPUT
  PEOPLE_SEARCH_ELASTIC: PEOPLEDATALABS_PEOPLE_SEARCH_ELASTIC_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PEOPLEDATALABS toolkit.
 */
export const PEOPLEDATALABS = {
  slug: "peopledatalabs",
  tools: {
    /**
     * Provides autocompletion suggestions for a specific field (e.g., company, skill, title) based on partial text input.
     */
    AUTOCOMPLETE_FIELD_SUGGESTIONS: "PEOPLEDATALABS_AUTOCOMPLETE_FIELD_SUGGESTIONS",
    /**
     * Cleans and standardizes company information based on a name, website, or profile url; providing at least one of these inputs is highly recommended for meaningful results.
     */
    CLEAN_COMPANY_DATA: "PEOPLEDATALABS_CLEAN_COMPANY_DATA",
    /**
     * Cleans and standardizes a raw, unformatted location string into a structured representation, provided the input is a recognizable geographical place.
     */
    CLEAN_LOCATION_DATA: "PEOPLEDATALABS_CLEAN_LOCATION_DATA",
    /**
     * Cleans and standardizes school information; provide at least one of the school's name, website, or profile for optimal results.
     */
    CLEAN_SCHOOL_DATA: "PEOPLEDATALABS_CLEAN_SCHOOL_DATA",
    /**
     * Performs a search for person profiles within people data labs using a custom elasticsearch domain specific language (dsl) query. this action allows for detailed and complex filtering based on various attributes of a person's profile, such as job title, skills, location, experience, and more. results can be paginated using the `size` and `scroll token` parameters. preconditions: - the `query` parameter must contain a valid elasticsearch dsl query string, structured as a json object. - if the `dataset` parameter is specified, it must be one of the allowed values: 'resume', 'email', 'phone', 'mobile phone', 'street address', 'consumer social', 'developer', 'all'. - note: this action queries the people data labs person search endpoint (`/v5/person/search`) and returns person records.
     */
    COMPANY_SEARCH_ELASTIC: "PEOPLEDATALABS_COMPANY_SEARCH_ELASTIC",
    /**
     * Enriches company data from people data labs with details like firmographics and employee counts, requiring at least one company identifier.
     */
    ENRICH_COMPANY_DATA: "PEOPLEDATALABS_ENRICH_COMPANY_DATA",
    /**
     * Enriches an ip address with company, location, metadata, and person data from people data labs.
     */
    ENRICH_IP_DATA: "PEOPLEDATALABS_ENRICH_IP_DATA",
    /**
     * Enhances a job title by providing additional contextual information and details.
     */
    ENRICH_JOB_TITLE_DATA: "PEOPLEDATALABS_ENRICH_JOB_TITLE_DATA",
    /**
     * Enriches person data using various identifiers; requires a primary id (profile, email, phone, email hash, lid, pdl id) or a name (full, or first and last) combined with another demographic detail (e.g., company, school, location).
     */
    ENRICH_PERSON_DATA: "PEOPLEDATALABS_ENRICH_PERSON_DATA",
    /**
     * Retrieves detailed, standardized information for a given skill by querying the people data labs skill enrichment api; for best results, provide a recognized professional skill or area of expertise.
     */
    ENRICH_SKILL_DATA: "PEOPLEDATALABS_ENRICH_SKILL_DATA",
    /**
     * Converts natural language queries into structured pdl elasticsearch queries for people or company searches; generates optimized query structure without executing the search.
     */
    GENERATE_SEARCH_QUERY_ACTION: "PEOPLEDATALABS_GENERATE_SEARCH_QUERY_ACTION",
    /**
     * Retrieves predefined enum values for a column name from `enum mappings.json`; `is enum` in the response will be false if the column is not found or is not an enum type.
     */
    GET_COLUMN_DETAILS: "PEOPLEDATALABS_GET_COLUMN_DETAILS",
    /**
     * Retrieves the schema, including field names, descriptions, and data types, for 'person' or 'company' entity types.
     */
    GET_SCHEMA: "PEOPLEDATALABS_GET_SCHEMA",
    /**
     * Retrieves detailed profile information for an individual from people data labs (pdl), requiring at least one identifier such as email, phone, profile url, name, or company.
     */
    IDENTIFY_PERSON_DATA: "PEOPLEDATALABS_IDENTIFY_PERSON_DATA",
    /**
     * Searches for person profiles in the people data labs (pdl) database using an elasticsearch domain specific language (dsl) query. this action allows for highly targeted searches based on criteria such as job titles, skills, company details, location, experience, and more. preconditions: - the provided elasticsearch query (in the `query` field) must be a syntactically correct json object representing a valid elasticsearch query. - the query must utilize fields that are defined in the people data labs person schema. - the `dataset` parameter must specify one of the allowed dataset categories.
     */
    PEOPLE_SEARCH_ELASTIC: "PEOPLEDATALABS_PEOPLE_SEARCH_ELASTIC",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PEOPLEDATALABS".
 */
export type PEOPLEDATALABS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PEOPLEDATALABS".
 */
export type PEOPLEDATALABS_TRIGGER_EVENTS = {}
