// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_ACS1_YEAR_ESTIMATES tool input.
 */
type CENSUS_BUREAU_GET_ACS1_YEAR_ESTIMATES_INPUT = {
  /**
   * For
   * @description Geography filter in 'type:code' format. Examples: 'state:06' for California, 'us:1' for nation-wide.
   */
  for?: string;
  /**
   * Get
   * @description Comma-separated list of variables or group specifiers to return. Examples: 'NAME,B01001_001E', 'group(B01001)'
   */
  get?: string;
  /**
   * In
   * @description Parent geography filter in 'type:code' format for nested queries. Required when querying sub-geographies.
   * @default null
   */
  in: string | null;
  /**
   * Key
   * @description API key for authenticated access. If not provided, the default key from metadata will be used.
   * @default null
   */
  key: string | null;
};

/**
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_ACS1_YEAR_ESTIMATES tool output.
 */
type CENSUS_BUREAU_GET_ACS1_YEAR_ESTIMATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Rows of data returned; first row is header names.
       */
      results: string[][];
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
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_ACS5_YEAR_ESTIMATES tool input.
 */
type CENSUS_BUREAU_GET_ACS5_YEAR_ESTIMATES_INPUT = {
  /**
   * Geo For
   * @description Geography clause for the 'for' parameter, e.g. 'state:*' or 'us:1'
   */
  geo_for?: string;
  /**
   * Geo In
   * @description Optional geography clause for the 'in' parameter, e.g. 'state:06'
   * @default null
   */
  geo_in: string | null;
  /**
   * Key
   * @description Census API key. If omitted, uses key from metadata or environment
   * @default null
   */
  key: string | null;
  /**
   * Variables
   * @description Comma-separated ACS variables or groups, e.g. 'NAME,B01001_001E' or 'group(B01001)'
   */
  variables?: string;
  /**
   * Year
   * @description Year of the ACS 5-year data release (between 2009 and 2023)
   */
  year?: number;
};

/**
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_ACS5_YEAR_ESTIMATES tool output.
 */
type CENSUS_BUREAU_GET_ACS5_YEAR_ESTIMATES_OUTPUT = {
  /**
   * Data
   * @description List of rows from ACS API response (first row = header)
   */
  data?: string[][];
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
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_AMERICAN_BUSINESS_SURVEY tool input.
 */
type CENSUS_BUREAU_GET_AMERICAN_BUSINESS_SURVEY_INPUT = {
  /**
   * Endpoint
   * @description ABS dataset to query: 'abscs' (company summary), 'abscb' (business characteristics), 'abscbo' (owner characteristics), or 'absmcb' (module characteristics).
   * @enum {string}
   */
  endpoint?: "abscs" | "abscb" | "abscbo" | "absmcb";
  /**
   * Geo
   * @description Geography filter, e.g., 'us:*' for national or 'state:06' for California.
   */
  geo?: string;
  /**
   * Key
   * @description Census API key for authentication.
   */
  key?: string;
  /**
   * Variables
   * @description List of variable codes to retrieve (e.g., ['GEO_ID','NAME','EMP']).
   */
  variables?: string[];
  /**
   * Year
   * @description The survey year (between 2017 and latest available).
   */
  year?: number;
};

/**
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_AMERICAN_BUSINESS_SURVEY tool output.
 */
type CENSUS_BUREAU_GET_AMERICAN_BUSINESS_SURVEY_OUTPUT = {
  /**
   * Data
   * @description ABS API returns a 2D array where row[0] is column names.
   */
  data?: string[][];
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
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_COMMUNITY_RESILIENCE_ESTIMATES tool input.
 */
type CENSUS_BUREAU_GET_COMMUNITY_RESILIENCE_ESTIMATES_INPUT = {
  /**
   * For
   * @description Geographic filter, e.g., 'state:06' or 'county:06037'
   */
  for?: string;
  /**
   * Get
   * @description Comma-separated list of variables to retrieve, e.g., 'NAME,PRED12_M,PRED3_E'
   */
  get?: string;
  /**
   * Key
   * @description API key; if omitted, default key from metadata headers will be used
   * @default null
   */
  key: string | null;
  /**
   * Year
   * @description Year of the Community Resilience Estimates dataset (2016–2023)
   */
  year?: number;
};

/**
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_COMMUNITY_RESILIENCE_ESTIMATES tool output.
 */
type CENSUS_BUREAU_GET_COMMUNITY_RESILIENCE_ESTIMATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Estimates
       * @description Grid of data: first row is column names, following rows are data values
       */
      estimates: (string | number)[][];
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
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_COUNTY_BUSINESS_PATTERNS tool input.
 */
type CENSUS_BUREAU_GET_COUNTY_BUSINESS_PATTERNS_INPUT = {
  /**
   * Naics2017
   * @description Optional 2017 NAICS industry code(s), e.g., '31-33'
   * @default null
   */
  NAICS2017: string | null;
  /**
   * For
   * @description Geographic filter, e.g., 'county:001'
   */
  for?: string;
  /**
   * Get
   * @description Comma-separated list of fields to retrieve (e.g., 'EMP,ESTAB,NAICS2017')
   */
  get?: string;
  /**
   * In
   * @description Optional geographic constraint (parent geography), e.g., 'state:06'
   * @default null
   */
  in: string | null;
  /**
   * Key
   * @description API key for higher rate limits
   * @default null
   */
  key: string | null;
  /**
   * Year
   * @description CBP data year (e.g., 2021)
   */
  year?: number;
};

/**
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_COUNTY_BUSINESS_PATTERNS tool output.
 */
type CENSUS_BUREAU_GET_COUNTY_BUSINESS_PATTERNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Header
       * @description List of returned field names (first row of API response)
       */
      header: string[];
      /**
       * Rows
       * @description Data rows, each list corresponds to values in header
       */
      rows: string[][];
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
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_DECENNIAL_CENSUS_DATA tool input.
 */
type CENSUS_BUREAU_GET_DECENNIAL_CENSUS_DATA_INPUT = {
  /**
   * Dataset
   * @description Dataset identifier, e.g., 'sf1' for Summary File 1.
   */
  dataset?: string;
  /**
   * Geography
   * @description Geography specifier in format '<geography>:<value>', e.g., 'state:*'.
   */
  geography?: string;
  /**
   * Get
   * @description Comma-separated list of variables to retrieve.
   */
  get?: string;
  /**
   * Key
   * @description Census API key for authentication. Uses default key if not provided.
   * @default null
   */
  key: string | null;
  /**
   * Nested
   * @description Nested geography specifier, e.g., 'county:001'.
   * @default null
   */
  nested: string | null;
  /**
   * Vintage
   * @description Decennial census vintage year, e.g., '2020'.
   */
  vintage?: string;
};

/**
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_DECENNIAL_CENSUS_DATA tool output.
 */
type CENSUS_BUREAU_GET_DECENNIAL_CENSUS_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of rows: first row contains column names; subsequent rows contain data values.
       */
      results: string[][];
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
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_POPULATION_ESTIMATES tool input.
 */
type CENSUS_BUREAU_GET_POPULATION_ESTIMATES_INPUT = {
  /**
   * Dataset
   * @description PEP dataset to retrieve
   * @enum {string}
   */
  dataset?: "population" | "components" | "charagegroups";
  /**
   * For
   * @description Geographic area specifier (e.g., 'state:*' for all states)
   */
  for?: string;
  /**
   * Get
   * @description Comma-separated list of variables to retrieve (e.g., 'POP,AGE,SEX')
   */
  get?: string;
  /**
   * Key
   * @description Your Census API key; if omitted, the configured key in client metadata will be used
   * @default null
   */
  key: string | null;
  /**
   * Vintage
   * @description Year of the data vintage (e.g., 2023)
   */
  vintage?: number;
};

/**
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_POPULATION_ESTIMATES tool output.
 */
type CENSUS_BUREAU_GET_POPULATION_ESTIMATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Headers
       * @description List of variable names returned by the API
       */
      headers: string[];
      /**
       * Rows
       * @description Data rows corresponding to the headers
       */
      rows: string[][];
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
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_VARIABLE_DETAILS tool input.
 */
type CENSUS_BUREAU_GET_VARIABLE_DETAILS_INPUT = {
  /**
   * Dataset
   * @description Dataset path segment, e.g., 'acs/acs1' or 'acs/acs5'.
   */
  dataset?: string;
  /**
   * Key
   * @description Census API key. If omitted, default key from metadata will be used.
   * @default null
   */
  key: string | null;
  /**
   * Variable
   * @description Variable identifier, e.g., 'B01001_001E'. Case-sensitive.
   */
  variable?: string;
  /**
   * Year
   * @description Four-digit data vintage year, e.g., 2019.
   */
  year?: number;
};

/**
 * Type of CENSUS_BUREAU's CENSUS_BUREAU_GET_VARIABLE_DETAILS tool output.
 */
type CENSUS_BUREAU_GET_VARIABLE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attributes
       * @description List of attribute codes or suffixes associated with this variable.
       * @default null
       */
      attributes: string[] | null;
      /**
       * Concept
       * @description Topic or concept under which this variable is grouped.
       */
      concept: string;
      /**
       * Group
       * @description Group code if the variable belongs to a predefined group.
       * @default null
       */
      group: string | null;
      /**
       * Label
       * @description Human-readable description of the variable.
       */
      label: string;
      /**
       * Limit
       * @description Maximum number of values allowed if specified by the API.
       * @default null
       */
      limit: number | null;
      /**
       * Predicate Type
       * @description Data type or role, e.g., 'int', 'string'.
       */
      predicateType: string;
      /**
       * Valid Values
       * @description Valid values mapping if variable is restricted.
       * @default null
       */
      validValues: {
          [key: string]: unknown;
      } | null;
      /**
       * Values
       * @description Mapping of possible values to labels if applicable.
       * @default null
       */
      values: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "CENSUS_BUREAU".
 */
export type CENSUS_BUREAU_TOOL_INPUTS = {
  GET_ACS1_YEAR_ESTIMATES: CENSUS_BUREAU_GET_ACS1_YEAR_ESTIMATES_INPUT
  GET_ACS5_YEAR_ESTIMATES: CENSUS_BUREAU_GET_ACS5_YEAR_ESTIMATES_INPUT
  GET_AMERICAN_BUSINESS_SURVEY: CENSUS_BUREAU_GET_AMERICAN_BUSINESS_SURVEY_INPUT
  GET_COMMUNITY_RESILIENCE_ESTIMATES: CENSUS_BUREAU_GET_COMMUNITY_RESILIENCE_ESTIMATES_INPUT
  GET_COUNTY_BUSINESS_PATTERNS: CENSUS_BUREAU_GET_COUNTY_BUSINESS_PATTERNS_INPUT
  GET_DECENNIAL_CENSUS_DATA: CENSUS_BUREAU_GET_DECENNIAL_CENSUS_DATA_INPUT
  GET_POPULATION_ESTIMATES: CENSUS_BUREAU_GET_POPULATION_ESTIMATES_INPUT
  GET_VARIABLE_DETAILS: CENSUS_BUREAU_GET_VARIABLE_DETAILS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CENSUS_BUREAU".
 */
export type CENSUS_BUREAU_TOOL_OUTPUTS = {
  GET_ACS1_YEAR_ESTIMATES: CENSUS_BUREAU_GET_ACS1_YEAR_ESTIMATES_OUTPUT
  GET_ACS5_YEAR_ESTIMATES: CENSUS_BUREAU_GET_ACS5_YEAR_ESTIMATES_OUTPUT
  GET_AMERICAN_BUSINESS_SURVEY: CENSUS_BUREAU_GET_AMERICAN_BUSINESS_SURVEY_OUTPUT
  GET_COMMUNITY_RESILIENCE_ESTIMATES: CENSUS_BUREAU_GET_COMMUNITY_RESILIENCE_ESTIMATES_OUTPUT
  GET_COUNTY_BUSINESS_PATTERNS: CENSUS_BUREAU_GET_COUNTY_BUSINESS_PATTERNS_OUTPUT
  GET_DECENNIAL_CENSUS_DATA: CENSUS_BUREAU_GET_DECENNIAL_CENSUS_DATA_OUTPUT
  GET_POPULATION_ESTIMATES: CENSUS_BUREAU_GET_POPULATION_ESTIMATES_OUTPUT
  GET_VARIABLE_DETAILS: CENSUS_BUREAU_GET_VARIABLE_DETAILS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CENSUS_BUREAU toolkit.
 */
export const CENSUS_BUREAU = {
  slug: "census_bureau",
  tools: {
    /**
     * Tool to retrieve 1-year american community survey (acs) estimates for a specified geography. use when you need the most recent annual acs data for a given area.
     */
    GET_ACS1_YEAR_ESTIMATES: "CENSUS_BUREAU_GET_ACS1_YEAR_ESTIMATES",
    /**
     * Tool to retrieve 5-year american community survey estimates for a specified year. use when detailed acs data by geography and variables is required.
     */
    GET_ACS5_YEAR_ESTIMATES: "CENSUS_BUREAU_GET_ACS5_YEAR_ESTIMATES",
    /**
     * Tool to retrieve annual business survey (abs) data for a specified year and endpoint.
     */
    GET_AMERICAN_BUSINESS_SURVEY: "CENSUS_BUREAU_GET_AMERICAN_BUSINESS_SURVEY",
    /**
     * Tool to retrieve community resilience estimates for a specified year. use after selecting variables and geography to get cre data for analysis.
     */
    GET_COMMUNITY_RESILIENCE_ESTIMATES: "CENSUS_BUREAU_GET_COMMUNITY_RESILIENCE_ESTIMATES",
    /**
     * Tool to retrieve county business patterns (cbp) data for a specified year. use when you need county-level business establishment and employment statistics filtered by industry and geography.
     */
    GET_COUNTY_BUSINESS_PATTERNS: "CENSUS_BUREAU_GET_COUNTY_BUSINESS_PATTERNS",
    /**
     * Tool to retrieve decennial census data for a specified vintage and dataset. use when you need census variables for a given geography.
     */
    GET_DECENNIAL_CENSUS_DATA: "CENSUS_BUREAU_GET_DECENNIAL_CENSUS_DATA",
    /**
     * Tool to retrieve population estimates program (pep) data for a specified vintage and dataset. use when you need population or demographic estimates for specific geographies.
     */
    GET_POPULATION_ESTIMATES: "CENSUS_BUREAU_GET_POPULATION_ESTIMATES",
    /**
     * Tool to retrieve metadata for a specific variable in a census dataset for a given year. use when you need the label, concept, data type, attribute codes, and valid-value constraints.
     */
    GET_VARIABLE_DETAILS: "CENSUS_BUREAU_GET_VARIABLE_DETAILS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CENSUS_BUREAU".
 */
export type CENSUS_BUREAU_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CENSUS_BUREAU".
 */
export type CENSUS_BUREAU_TRIGGER_EVENTS = {}
