// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GEOKEO's GEOKEO_FORWARD_GEOCODING tool input.
 */
type GEOKEO_FORWARD_GEOCODING_INPUT = {
  /**
   * Api
   * @description API key for authentication from your Geokeo dashboard.
   */
  api?: string;
  /**
   * Country
   * @description Optional two-letter ISO 3166-1 alpha-2 country code to restrict results.
   * @default null
   */
  country: string | null;
  /**
   * Format
   * @description Response format; only 'json' is supported.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Q
   * @description Search query (address or place name), max 50 characters.
   */
  q?: string;
};

/**
 * Type of GEOKEO's GEOKEO_FORWARD_GEOCODING tool output.
 */
type GEOKEO_FORWARD_GEOCODING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits
       * @description URL for data source credits
       */
      credits: string;
      /**
       * Results
       * @description Array of geocoding results
       */
      results: {
          /**
           * Address Components
           * @description Structured address parts
           */
          address_components: {
              /**
               * City
               * @description City
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country
               * @default null
               */
              country: string | null;
              /**
               * District
               * @description District
               * @default null
               */
              district: string | null;
              /**
               * Island
               * @description Island
               * @default null
               */
              island: string | null;
              /**
               * Name
               * @description Name component
               * @default null
               */
              name: string | null;
              /**
               * Neighbourhood
               * @description Neighbourhood
               * @default null
               */
              neighbourhood: string | null;
              /**
               * Postcode
               * @description Postal code
               * @default null
               */
              postcode: string | null;
              /**
               * State
               * @description State
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Street
               * @default null
               */
              street: string | null;
              /**
               * Subdistrict
               * @description Subdistrict
               * @default null
               */
              subdistrict: string | null;
          };
          /**
           * Class
           * @description Feature class (e.g., tourism)
           */
          class: string;
          /**
           * Distance
           * @description Distance from query point, if available
           * @default null
           */
          distance: string | null;
          /**
           * Formatted Address
           * @description Formatted address
           */
          formatted_address: string;
          /**
           * Geometry
           * @description Spatial geometry data
           */
          geometry: {
              /**
               * Location
               * @description Location coordinates
               */
              location: {
                  /**
                   * Lat
                   * @description Latitude in decimal degrees
                   */
                  lat: number;
                  /**
                   * Lng
                   * @description Longitude in decimal degrees
                   */
                  lng: number;
              };
              /**
               * Viewport
               * @description Bounding box viewport
               */
              viewport: {
                  /**
                   * Northeast
                   * @description Northeast corner of the viewport
                   */
                  northeast: {
                      /**
                       * Lat
                       * @description Latitude boundary in decimal degrees
                       */
                      lat: number;
                      /**
                       * Lng
                       * @description Longitude boundary in decimal degrees
                       */
                      lng: number;
                  };
                  /**
                   * Southwest
                   * @description Southwest corner of the viewport
                   */
                  southwest: {
                      /**
                       * Lat
                       * @description Latitude boundary in decimal degrees
                       */
                      lat: number;
                      /**
                       * Lng
                       * @description Longitude boundary in decimal degrees
                       */
                      lng: number;
                  };
              };
          };
          /**
           * Osmurl
           * @description OpenStreetMap URL for the feature
           */
          osmurl: string;
          /**
           * Type
           * @description Feature type (e.g., attraction)
           */
          type: string;
      }[];
      /**
       * Status
       * @description Response status: 'ok' for success or an error code
       */
      status: string;
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
 * Type of GEOKEO's GEOKEO_REVERSE_GEOCODING tool input.
 */
type GEOKEO_REVERSE_GEOCODING_INPUT = {
  /**
   * Api
   * @description API key for authentication; uses metadata if not provided
   * @default null
   */
  api: string | null;
  /**
   * Format
   * @description Response format, either 'json' or 'xml'
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Lat
   * @description Latitude to reverse geocode, must be between -90 and 90
   */
  lat?: number;
  /**
   * Lng
   * @description Longitude to reverse geocode, must be between -180 and 180
   */
  lng?: number;
};

/**
 * Type of GEOKEO's GEOKEO_REVERSE_GEOCODING tool output.
 */
type GEOKEO_REVERSE_GEOCODING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits
       * Format: uri
       * @description Link to credits page
       */
      credits: string;
      /**
       * Results
       * @description List of reverse geocoding results
       */
      results: {
          /**
           * Address Components
           * @description Structured address components
           */
          address_components: {
              /**
               * City
               * @description City component of the address, if available
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country component of the address, if available
               * @default null
               */
              country: string | null;
              /**
               * District
               * @description District component of the address, if available
               * @default null
               */
              district: string | null;
              /**
               * Island
               * @description Island component of the address, if available
               * @default null
               */
              island: string | null;
              /**
               * Name
               * @description Name component of the address, if available
               * @default null
               */
              name: string | null;
              /**
               * Neighbourhood
               * @description Neighbourhood component of the address, if available
               * @default null
               */
              neighbourhood: string | null;
              /**
               * Postcode
               * @description Postal code component, if available
               * @default null
               */
              postcode: string | null;
              /**
               * State
               * @description State component of the address, if available
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Street name, if available
               * @default null
               */
              street: string | null;
              /**
               * Subdistrict
               * @description Subdistrict component of the address, if available
               * @default null
               */
              subdistrict: string | null;
          };
          /**
           * Class
           * @description Feature class of the result
           */
          class: string;
          /**
           * Distance
           * @description Distance from provided coordinates to result, in kilometers
           */
          distance: string;
          /**
           * Formatted Address
           * @description Human-readable formatted address
           */
          formatted_address: string;
          /**
           * Geometry
           * @description Geometry information for the result
           */
          geometry: {
              /**
               * Location
               * @description Centroid location coordinates
               */
              location: {
                  /**
                   * Lat
                   * @description Latitude of the location as string
                   */
                  lat: string;
                  /**
                   * Lng
                   * @description Longitude of the location as string
                   */
                  lng: string;
              };
              /**
               * Viewport
               * @description Bounding box for the result geometry
               */
              viewport: {
                  /**
                   * Northeast
                   * @description Northeast corner of viewport bounding box
                   */
                  northeast: {
                      /**
                       * Lat
                       * @description Latitude of the location as string
                       */
                      lat: string;
                      /**
                       * Lng
                       * @description Longitude of the location as string
                       */
                      lng: string;
                  };
                  /**
                   * Southwest
                   * @description Southwest corner of viewport bounding box
                   */
                  southwest: {
                      /**
                       * Lat
                       * @description Latitude of the location as string
                       */
                      lat: string;
                      /**
                       * Lng
                       * @description Longitude of the location as string
                       */
                      lng: string;
                  };
              };
          };
          /**
           * Osmurl
           * Format: uri
           * @description OpenStreetMap URL for the coordinates
           */
          osmurl: string;
          /**
           * Type
           * @description Feature type of the result
           */
          type: string;
      }[];
      /**
       * Status
       * @description Response status code, e.g., 'OK', 'ZERO_RESULTS', etc.
       */
      status: string;
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
 * Type map of all available tool input types for toolkit "GEOKEO".
 */
export type GEOKEO_TOOL_INPUTS = {
  FORWARD_GEOCODING: GEOKEO_FORWARD_GEOCODING_INPUT
  REVERSE_GEOCODING: GEOKEO_REVERSE_GEOCODING_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GEOKEO".
 */
export type GEOKEO_TOOL_OUTPUTS = {
  FORWARD_GEOCODING: GEOKEO_FORWARD_GEOCODING_OUTPUT
  REVERSE_GEOCODING: GEOKEO_REVERSE_GEOCODING_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GEOKEO toolkit.
 */
export const GEOKEO = {
  slug: "geokeo",
  tools: {
    /**
     * Tool to perform forward geocoding lookup by address or place name. Use when you need to convert a query string into geographic coordinates and structured address information.
     */
    FORWARD_GEOCODING: "GEOKEO_FORWARD_GEOCODING",
    /**
     * Tool to perform reverse geocoding. Use when you have latitude and longitude and need an address.
     */
    REVERSE_GEOCODING: "GEOKEO_REVERSE_GEOCODING",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GEOKEO".
 */
export type GEOKEO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GEOKEO".
 */
export type GEOKEO_TRIGGER_EVENTS = {}
