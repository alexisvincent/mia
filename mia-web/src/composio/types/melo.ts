// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MELO's MELO_GET_CITIES tool input.
 */
type MELO_GET_CITIES_INPUT = {
  /**
   * Country Code
   * @description Filter by ISO 2-letter country code (e.g., 'US').
   * @default null
   */
  country_code: string | null;
  /**
   * Page
   * @description Page number for paginated results (must be ≥ 1).
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (1–50).
   * @default 50
   */
  per_page: number | null;
  /**
   * Search
   * @description Search keyword to filter cities.
   * @default null
   */
  search: string | null;
};

/**
 * Type of MELO's MELO_GET_CITIES tool output.
 */
type MELO_GET_CITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cities
       * @description List of city objects.
       */
      cities: {
          /**
           * Country
           * @description Country name.
           */
          country: string;
          /**
           * Country Code
           * @description ISO 2-letter country code.
           */
          country_code: string;
          /**
           * Id
           * @description City ID.
           */
          id: number;
          /**
           * Name
           * @description City name.
           */
          name: string;
          /**
           * Region
           * @description Region name.
           */
          region: string;
      }[];
      /**
       * Pagination
       * @description Pagination metadata.
       */
      pagination: {
          /**
           * Current Page
           * @description Current results page.
           */
          current_page: number;
          /**
           * Per Page
           * @description Results per page.
           */
          per_page: number;
          /**
           * Total Pages
           * @description Total result pages.
           */
          total_pages: number;
          /**
           * Total Results
           * @description Total number of results.
           */
          total_results: number;
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
 * Type of MELO's MELO_LIST_SEARCHES tool input.
 */
type MELO_LIST_SEARCHES_INPUT = {
  /**
   * Limit
   * @description Number of results per page (must be >= 1)
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination (must be >= 1)
   * @default null
   */
  page: number | null;
  /**
   * Sort
   * @description Sort order of the results, e.g., 'created_at' or '-created_at'
   * @default null
   */
  sort: string | null;
  /**
   * Status
   * @description Filter searches by status
   * @default null
   */
  status: string | null;
};

/**
 * Type of MELO's MELO_LIST_SEARCHES tool output.
 */
type MELO_LIST_SEARCHES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Searches
       * @description List of search objects
       */
      searches: {
          /**
           * Created At
           * @description Timestamp of search creation
           */
          created_at: string;
          /**
           * Extra
           * @description Additional fields
           * @default null
           */
          extra: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Unique identifier for the search
           */
          id: string;
          /**
           * Name
           * @description Name of the search
           */
          name: string;
          /**
           * Status
           * @description Current status of the search
           */
          status: string;
          /**
           * Updated At
           * @description Timestamp of last update
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
 * Type of MELO's MELO_LOCATION_AUTOCOMPLETE tool input.
 */
type MELO_LOCATION_AUTOCOMPLETE_INPUT = {
  /**
   * Country Code
   * @description ISO 3166-1 alpha-2 country code to filter results.
   * @default null
   */
  countryCode: string | null;
  /**
   * Limit
   * @description Maximum number of results (default is 5, maximum is 20).
   * @default 5
   */
  limit: number;
  /**
   * Query
   * @description Text query to autocomplete locations for.
   */
  query?: string;
  /**
   * Type
   * @description Type of location to retrieve (city, region, or country).
   * @default null
   * @enum {string|null}
   */
  type: "city" | "region" | "country" | null;
};

/**
 * Type of MELO's MELO_LOCATION_AUTOCOMPLETE tool output.
 */
type MELO_LOCATION_AUTOCOMPLETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Locations
       * @description List of matched location objects.
       */
      locations: {
          /**
           * Country Code
           * @description Country code in ISO 3166-1 alpha-2 format.
           */
          countryCode: string;
          /**
           * Id
           * @description Unique identifier of the location.
           */
          id: string;
          /**
           * Lat
           * @description Latitude of the location.
           */
          lat: number;
          /**
           * Lng
           * @description Longitude of the location.
           */
          lng: number;
          /**
           * Name
           * @description Name of the location.
           */
          name: string;
          /**
           * Region
           * @description Region name if applicable, otherwise null.
           * @default null
           */
          region: string | null;
          /**
           * Type
           * @description Type of location: city, region, or country.
           * @enum {string}
           */
          type: "city" | "region" | "country";
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
 * Type of MELO's MELO_SIMULATE_WEBHOOK tool input.
 */
type MELO_SIMULATE_WEBHOOK_INPUT = {
  /**
   * Payload
   * @description Data payload to send with the webhook.
   */
  payload?: {
      [key: string]: unknown;
  };
  /**
   * Url
   * @description Target URL to which the webhook should be sent.
   */
  url?: string;
};

/**
 * Type of MELO's MELO_SIMULATE_WEBHOOK tool output.
 */
type MELO_SIMULATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Body
       * @description The response returned from the webhook endpoint.
       */
      responseBody: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description HTTP status code returned by the webhook endpoint.
       */
      status: number;
      /**
       * Success
       * @description Indicates if the webhook was successfully sent (simulated).
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
 * Type map of all available tool input types for toolkit "MELO".
 */
export type MELO_TOOL_INPUTS = {
  GET_CITIES: MELO_GET_CITIES_INPUT
  LIST_SEARCHES: MELO_LIST_SEARCHES_INPUT
  LOCATION_AUTOCOMPLETE: MELO_LOCATION_AUTOCOMPLETE_INPUT
  SIMULATE_WEBHOOK: MELO_SIMULATE_WEBHOOK_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MELO".
 */
export type MELO_TOOL_OUTPUTS = {
  GET_CITIES: MELO_GET_CITIES_OUTPUT
  LIST_SEARCHES: MELO_LIST_SEARCHES_OUTPUT
  LOCATION_AUTOCOMPLETE: MELO_LOCATION_AUTOCOMPLETE_OUTPUT
  SIMULATE_WEBHOOK: MELO_SIMULATE_WEBHOOK_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MELO toolkit.
 */
export const MELO = {
  slug: "melo",
  tools: {
    /**
     * Tool to retrieve a list of cities with optional filters. use when you need to fetch available cities before processing location-specific data.
     */
    GET_CITIES: "MELO_GET_CITIES",
    /**
     * Tool to list all searches. use after authenticating to retrieve the user's searches.
     */
    LIST_SEARCHES: "MELO_LIST_SEARCHES",
    /**
     * Tool to fetch location autocomplete suggestions. use when you have a partial location query and need possible matching locations from melo api. supports filtering by country and location type. use after forming the query string.
     */
    LOCATION_AUTOCOMPLETE: "MELO_LOCATION_AUTOCOMPLETE",
    /**
     * Tool to simulate sending a webhook event. use when testing webhook integrations. call after configuring endpoint and payload.
     */
    SIMULATE_WEBHOOK: "MELO_SIMULATE_WEBHOOK",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MELO".
 */
export type MELO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MELO".
 */
export type MELO_TRIGGER_EVENTS = {}
