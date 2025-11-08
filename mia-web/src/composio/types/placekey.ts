// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PLACEKEY's PLACEKEY_GET_GEOCODE_FROM_ADDRESS tool input.
 */
type PLACEKEY_GET_GEOCODE_FROM_ADDRESS_INPUT = {
  /**
   * City
   * @description City name
   */
  city?: string;
  /**
   * Iso Country Code
   * @description Two-letter country code
   */
  iso_country_code?: string;
  /**
   * Postal Code
   * @description Postal/ZIP code
   */
  postal_code?: string;
  /**
   * Region
   * @description State/region code
   */
  region?: string;
  /**
   * Street Address
   * @description Street address of the location
   */
  street_address?: string;
};

/**
 * Type of PLACEKEY's PLACEKEY_GET_GEOCODE_FROM_ADDRESS tool output.
 */
type PLACEKEY_GET_GEOCODE_FROM_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Geocode
       * @description Geocode information including coordinates and precision
       */
      geocode: {
          /**
           * Location
           * @description Location coordinates
           */
          location: {
              /**
               * Lat
               * @description Latitude of the location
               */
              lat: number;
              /**
               * Lng
               * @description Longitude of the location
               */
              lng: number;
          };
          /**
           * Location Type
           * @description Precision of the geocode (ROOFTOP, PARCEL, APPROXIMATE, RANGE_INTERPOLATED)
           */
          location_type: string;
      };
      /**
       * Placekey
       * @description Unique Placekey identifier
       */
      placekey: string;
      /**
       * Query Id
       * @description Unique identifier for the query
       */
      query_id: string;
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
 * Type of PLACEKEY's PLACEKEY_GET_PLACEKEY_FROM_ADDRESS tool input.
 */
type PLACEKEY_GET_PLACEKEY_FROM_ADDRESS_INPUT = {
  /**
   * City
   * @description The city name
   */
  city?: string;
  /**
   * Iso Country Code
   * @description The two-letter ISO country code (e.g., 'US' for United States)
   */
  iso_country_code?: string;
  /**
   * Location Name
   * @description Name of the location/business if available
   * @default null
   */
  location_name: string | null;
  /**
   * Postal Code
   * @description The postal/ZIP code
   */
  postal_code?: string;
  /**
   * Region
   * @description The state/region code (e.g., 'CA' for California)
   */
  region?: string;
  /**
   * Street Address
   * @description The street address of the location
   */
  street_address?: string;
};

/**
 * Type of PLACEKEY's PLACEKEY_GET_PLACEKEY_FROM_ADDRESS tool output.
 */
type PLACEKEY_GET_PLACEKEY_FROM_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Placekey
       * @description A unique identifier for the location in Placekey's format
       */
      placekey: string;
      /**
       * Query Id
       * @description An identifier for the query
       */
      query_id: string;
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
 * Type of PLACEKEY's PLACEKEY_GET_PLACEKEY_FROM_COORDINATES tool input.
 */
type PLACEKEY_GET_PLACEKEY_FROM_COORDINATES_INPUT = {
  /**
   * Latitude
   * @description The latitude coordinate of the location
   */
  latitude?: number;
  /**
   * Longitude
   * @description The longitude coordinate of the location
   */
  longitude?: number;
};

/**
 * Type of PLACEKEY's PLACEKEY_GET_PLACEKEY_FROM_COORDINATES tool output.
 */
type PLACEKEY_GET_PLACEKEY_FROM_COORDINATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Placekey
       * @description A unique identifier for the location in Placekey's format
       */
      placekey: string;
      /**
       * Query Id
       * @description An identifier for the query
       */
      query_id: string;
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
 * Type map of all available tool input types for toolkit "PLACEKEY".
 */
export type PLACEKEY_TOOL_INPUTS = {
  GET_GEOCODE_FROM_ADDRESS: PLACEKEY_GET_GEOCODE_FROM_ADDRESS_INPUT
  GET_PLACEKEY_FROM_ADDRESS: PLACEKEY_GET_PLACEKEY_FROM_ADDRESS_INPUT
  GET_PLACEKEY_FROM_COORDINATES: PLACEKEY_GET_PLACEKEY_FROM_COORDINATES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PLACEKEY".
 */
export type PLACEKEY_TOOL_OUTPUTS = {
  GET_GEOCODE_FROM_ADDRESS: PLACEKEY_GET_GEOCODE_FROM_ADDRESS_OUTPUT
  GET_PLACEKEY_FROM_ADDRESS: PLACEKEY_GET_PLACEKEY_FROM_ADDRESS_OUTPUT
  GET_PLACEKEY_FROM_COORDINATES: PLACEKEY_GET_PLACEKEY_FROM_COORDINATES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PLACEKEY toolkit.
 */
export const PLACEKEY = {
  slug: "placekey",
  tools: {
    /**
     * This tool retrieves geocode information (latitude and longitude) for a given address using the placekey api. it accepts address components (street address, city, region, postal code, iso country code) and returns geocode data including the unique placekey identifier and location details.
     */
    GET_GEOCODE_FROM_ADDRESS: "PLACEKEY_GET_GEOCODE_FROM_ADDRESS",
    /**
     * Convert a physical address into a unique placekey identifier. the placekey is a universal standard identifier for any physical place that helps in location matching, enrichment, and deduplication.
     */
    GET_PLACEKEY_FROM_ADDRESS: "PLACEKEY_GET_PLACEKEY_FROM_ADDRESS",
    /**
     * Get a placekey (unique identifier) for a given pair of latitude and longitude coordinates. this is the most basic and independent operation in placekey's api that requires minimal input parameters. the tool returns a "where" part of the placekey, which represents the physical location.
     */
    GET_PLACEKEY_FROM_COORDINATES: "PLACEKEY_GET_PLACEKEY_FROM_COORDINATES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PLACEKEY".
 */
export type PLACEKEY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PLACEKEY".
 */
export type PLACEKEY_TRIGGER_EVENTS = {}
