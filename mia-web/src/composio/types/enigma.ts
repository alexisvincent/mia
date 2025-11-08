// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ENIGMA's ENIGMA_KYB_VERIFICATION tool input.
 */
type ENIGMA_KYB_VERIFICATION_INPUT = {
  /**
   * Address
   * @description Address details of the business
   */
  address?: {
      /**
       * City
       * @description City where the business is located
       * @default null
       */
      city: string | null;
      /**
       * Postal Code
       * @description Postal code of the business location
       * @default null
       */
      postal_code: string | null;
      /**
       * State
       * @description State where the business is located
       * @default null
       */
      state: string | null;
      /**
       * Street Address1
       * @description Primary street address of the business
       * @default null
       */
      street_address1: string | null;
      /**
       * Street Address2
       * @description Secondary street address of the business
       * @default null
       */
      street_address2: string | null;
  };
  /**
   * Attrs
   * @description Comma-separated list of additional attributes to include in the response
   * @default null
   */
  attrs: string | null;
  /**
   * Match Threshold
   * @description Minimum match confidence score (0 to 1)
   * @default 0.5
   */
  match_threshold: number | null;
  /**
   * Name
   * @description Name of the business to verify
   */
  name?: string;
  /**
   * Package
   * @description Package type for the response. Can be 'identify' or 'verify'
   * @default verify
   */
  package: string | null;
  /**
   * Top N
   * @description Number of matches to return
   * @default 1
   */
  top_n: number | null;
};

/**
 * Type of ENIGMA's ENIGMA_KYB_VERIFICATION tool output.
 */
type ENIGMA_KYB_VERIFICATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Match Metadata
       * @description Metadata about the matching process
       * @default null
       */
      match_metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Matches
       * @description List of matching business entities
       */
      matches: {
          [key: string]: unknown;
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
 * Type of ENIGMA's ENIGMA_SCREENING_VERIFICATION tool input.
 */
type ENIGMA_SCREENING_VERIFICATION_INPUT = {
  /**
   * Caller Id
   * @description Optional hostname information
   * @default null
   */
  caller_id: string | null;
  /**
   * ConfigurationOverrides
   * @description Configuration overrides for the screening
   */
  configuration_overrides?: {
      /** Entity */
      entity?: {
          /**
           * Alert Threshold
           * @description Threshold for generating alerts
           * @default 0.8
           */
          alert_threshold: number;
          /**
           * Hit Threshold
           * @description Threshold for considering a hit
           * @default 0.5
           */
          hit_threshold: number;
          /**
           * Max Results
           * @description Maximum number of results to return
           * @default 30
           */
          max_results: number;
          /** Weights */
          weights?: {
              /**
               * Address
               * @description Weight for address matching
               * @default 1
               */
              address: number;
              /**
               * Country Of Affiliation
               * @description Weight for country affiliation matching
               * @default 2
               */
              country_of_affiliation: number;
              /**
               * Dob
               * @description Weight for date of birth matching
               * @default 1
               */
              dob: number;
              /**
               * Org Name
               * @description Weight for organization name matching
               * @default 3
               */
              org_name: number;
              /**
               * Person Name
               * @description Weight for person name matching
               * @default 3
               */
              person_name: number;
          };
      };
      /** General */
      general?: {
          /**
           * Archive Retention Days
           * @description Number of days to retain archive data
           * @default 90
           */
          archive_retention_days: number;
          /**
           * Entity Detail Level
           * @description Level of detail in entity information
           * @default minimum
           */
          entity_detail_level: string;
          /**
           * Overrides On
           * @description Whether to enable configuration overrides
           * @default true
           */
          overrides_on: boolean;
      };
      /**
       * List Groups
       * @description List of watchlist groups to check against
       */
      list_groups?: string[];
      /** Text */
      text?: {
          /**
           * Alert Threshold
           * @description Threshold for text matching alerts
           * @default 0.8
           */
          alert_threshold: number;
          /**
           * Hit Threshold
           * @description Threshold for text matching hits
           * @default 0.5
           */
          hit_threshold: number;
      };
  } | null;
  /**
   * Query Type
   * @description Type of query to execute
   * @default enigma_data
   */
  query_type: string;
  /**
   * Searches
   * @description List of searches to perform
   */
  searches?: {
      /**
       * EntityDescription
       * @description Entity description for ENTITY type searches
       * @default null
       */
      entity_description: {
          /**
           * Address
           * @description List of addresses
           * @default null
           */
          address: string[] | null;
          /**
           * Country Of Affiliation
           * @description List of countries of affiliation
           * @default null
           */
          country_of_affiliation: string[] | null;
          /**
           * Dob
           * @description List of dates of birth in YYYYMMDD format
           * @default null
           */
          dob: string[] | null;
          /**
           * Org Name
           * @description List of organization names
           * @default null
           */
          org_name: string[] | null;
          /**
           * Person Name
           * @description List of person names to check
           * @default null
           */
          person_name: string[] | null;
      } | null;
      /**
       * Tag
       * @description Optional tag for the search
       * @default
       */
      tag: string;
      /**
       * Text
       * @description Text content for TEXT type searches
       * @default null
       */
      text: string | null;
      /**
       * Type
       * @description Type of search: ENTITY or TEXT
       */
      type: string;
  }[];
  /**
   * Tag
   * @description Description or identifier for the screening request
   */
  tag?: string;
};

/**
 * Type of ENIGMA's ENIGMA_SCREENING_VERIFICATION tool output.
 */
type ENIGMA_SCREENING_VERIFICATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alert
       * @description Whether any search generated an alert
       */
      alert: boolean;
      /**
       * Caller Id
       * @description Caller ID from the request
       * @default null
       */
      caller_id: string | null;
      /**
       * Configuration Used
       * @description Configuration used for screening
       */
      configuration_used: {
          /** Entity */
          entity?: {
              /**
               * Alert Threshold
               * @description Threshold for generating alerts
               * @default 0.8
               */
              alert_threshold: number;
              /**
               * Hit Threshold
               * @description Threshold for considering a hit
               * @default 0.5
               */
              hit_threshold: number;
              /**
               * Max Results
               * @description Maximum number of results to return
               * @default 30
               */
              max_results: number;
              /** Weights */
              weights?: {
                  /**
                   * Address
                   * @description Weight for address matching
                   * @default 1
                   */
                  address: number;
                  /**
                   * Country Of Affiliation
                   * @description Weight for country affiliation matching
                   * @default 2
                   */
                  country_of_affiliation: number;
                  /**
                   * Dob
                   * @description Weight for date of birth matching
                   * @default 1
                   */
                  dob: number;
                  /**
                   * Org Name
                   * @description Weight for organization name matching
                   * @default 3
                   */
                  org_name: number;
                  /**
                   * Person Name
                   * @description Weight for person name matching
                   * @default 3
                   */
                  person_name: number;
              };
          };
          /** General */
          general?: {
              /**
               * Archive Retention Days
               * @description Number of days to retain archive data
               * @default 90
               */
              archive_retention_days: number;
              /**
               * Entity Detail Level
               * @description Level of detail in entity information
               * @default minimum
               */
              entity_detail_level: string;
              /**
               * Overrides On
               * @description Whether to enable configuration overrides
               * @default true
               */
              overrides_on: boolean;
          };
          /**
           * List Groups
           * @description List of watchlist groups to check against
           */
          list_groups?: string[];
          /** Text */
          text?: {
              /**
               * Alert Threshold
               * @description Threshold for text matching alerts
               * @default 0.8
               */
              alert_threshold: number;
              /**
               * Hit Threshold
               * @description Threshold for text matching hits
               * @default 0.5
               */
              hit_threshold: number;
          };
      };
      /**
       * Query Type
       * @description Type of query executed
       */
      query_type: string;
      /**
       * Request Id
       * @description Unique ID for this request
       */
      request_id: string;
      /**
       * Request Timestamp
       * @description Timestamp of the request
       */
      request_timestamp: string;
      /**
       * Search Results
       * @description Results of all searches
       */
      search_results: {
          /**
           * Alert
           * @description Whether this search generated an alert
           */
          alert: boolean;
          /**
           * Hits
           * @description List of hits for this search
           */
          hits: {
              /**
               * Alert
               * @description Whether this hit generated an alert
               */
              alert: boolean;
              /**
               * Attributes
               * @description Matched attributes
               */
              attributes: {
                  [key: string]: {
                      /**
                       * Id
                       * @description ID of the attribute
                       */
                      id: string;
                      /**
                       * Score
                       * @description Match score for the attribute
                       */
                      score: number;
                      /**
                       * Value
                       * @description Value of the attribute
                       */
                      value: string;
                      /**
                       * View Ids
                       * @description List of view IDs
                       */
                      view_ids: string[];
                  };
              };
              /**
               * Entity
               * @description Entity information
               */
              entity: {
                  /**
                   * Id
                   * @description Entity ID
                   */
                  id: string;
              };
              /**
               * Score
               * @description Overall match score
               */
              score: number;
          }[];
          /**
           * Search Index
           * @description Index of the search in the request
           */
          search_index: number;
          /**
           * Tag
           * @description Tag from the search request
           */
          tag: string;
          /**
           * Type
           * @description Type of search performed
           */
          type: string;
      }[];
      /**
       * Tag
       * @description Tag from the request
       */
      tag: string;
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
 * Type map of all available tool input types for toolkit "ENIGMA".
 */
export type ENIGMA_TOOL_INPUTS = {
  KYB_VERIFICATION: ENIGMA_KYB_VERIFICATION_INPUT
  SCREENING_VERIFICATION: ENIGMA_SCREENING_VERIFICATION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ENIGMA".
 */
export type ENIGMA_TOOL_OUTPUTS = {
  KYB_VERIFICATION: ENIGMA_KYB_VERIFICATION_OUTPUT
  SCREENING_VERIFICATION: ENIGMA_SCREENING_VERIFICATION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ENIGMA toolkit.
 */
export const ENIGMA = {
  slug: "enigma",
  tools: {
    /**
     * This tool performs a know your business (kyb) check on a business by querying enigma's dataset of legal entities based on official state records. it verifies business information and returns comprehensive details about the business, including best match, legal entities, brands, and watchlists.
     */
    KYB_VERIFICATION: "ENIGMA_KYB_VERIFICATION",
    /**
     * A tool to screen customers and transactions against sanctions and other watchlists. this endpoint allows for independent verification without requiring any external resource ids.
     */
    SCREENING_VERIFICATION: "ENIGMA_SCREENING_VERIFICATION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ENIGMA".
 */
export type ENIGMA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ENIGMA".
 */
export type ENIGMA_TRIGGER_EVENTS = {}
