// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of OPENCAGE's OPENCAGE_GEOCODE_FORWARD tool input.
 */
type OPENCAGE_GEOCODE_FORWARD_INPUT = {
  /**
   * Abbrv
   * @description Return abbreviated results (0=false,1=true)
   * @default null
   */
  abbrv: number | null;
  /**
   * Add Request
   * @description Include original request in response (0=false,1=true)
   * @default null
   */
  add_request: number | null;
  /**
   * Bounds
   * @description Bias results to bounding box: west,south,east,north
   * @default null
   */
  bounds: string | null;
  /**
   * Countrycode
   * @description Restrict to country codes (comma-separated ISO 3166-1 alpha-2)
   * @default null
   */
  countrycode: string | null;
  /**
   * Language
   * @description Preferred language for results (ISO 639-1 code)
   * @default null
   */
  language: string | null;
  /**
   * Limit
   * @description Maximum number of results (1-100)
   * @default null
   */
  limit: number | null;
  /**
   * Min Confidence
   * @description Minimum confidence score (1-10)
   * @default null
   */
  min_confidence: number | null;
  /**
   * No Annotations
   * @description Exclude supplementary information in results
   * @default false
   */
  no_annotations: boolean;
  /**
   * Pretty
   * @description Format the JSON response for readability
   * @default false
   */
  pretty: boolean;
  /**
   * Proximity
   * @description Bias results near a point: latitude,longitude
   * @default null
   */
  proximity: string | null;
  /**
   * Q
   * @description The address or free-form query to geocode
   */
  q?: string;
};

/**
 * Type of OPENCAGE's OPENCAGE_GEOCODE_FORWARD tool output.
 */
type OPENCAGE_GEOCODE_FORWARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Documentation
       * @description Link to API documentation
       */
      documentation: string;
      /**
       * Licenses
       * @description List of data licenses
       */
      licenses: {
          /**
           * Name
           * @description License name
           */
          name: string;
          /**
           * Url
           * @description License URL
           */
          url: string;
      }[];
      /**
       * Rate
       * @description API rate limit status
       */
      rate: {
          /**
           * Limit
           * @description Maximum number of requests
           */
          limit: number;
          /**
           * Remaining
           * @description Remaining requests
           */
          remaining: number;
          /**
           * Reset
           * @description Reset timestamp (UNIX)
           */
          reset: number;
      };
      /**
       * Results
       * @description List of geocoding results
       */
      results: {
          /**
           * Annotations
           * @description Supplementary annotations
           */
          annotations: {
              [key: string]: unknown;
          };
          /**
           * Bounds
           * @description Bounding box of result
           */
          bounds: {
              /**
               * Northeast
               * @description Northeast corner of bounding box
               */
              northeast: {
                  /**
                   * Lat
                   * @description Latitude
                   */
                  lat: number;
                  /**
                   * Lng
                   * @description Longitude
                   */
                  lng: number;
              };
              /**
               * Southwest
               * @description Southwest corner of bounding box
               */
              southwest: {
                  /**
                   * Lat
                   * @description Latitude
                   */
                  lat: number;
                  /**
                   * Lng
                   * @description Longitude
                   */
                  lng: number;
              };
          };
          /**
           * Components
           * @description Address component breakdown
           */
          components: {
              [key: string]: unknown;
          };
          /**
           * Confidence
           * @description Confidence score
           */
          confidence: number;
          /**
           * Formatted
           * @description Formatted address string
           */
          formatted: string;
          /**
           * Geometry
           * @description Coordinates of the result
           */
          geometry: {
              /**
               * Lat
               * @description Latitude of result
               */
              lat: number;
              /**
               * Lng
               * @description Longitude of result
               */
              lng: number;
          };
      }[];
      /**
       * Status
       * @description API request status
       */
      status: {
          /**
           * Code
           * @description Status code
           */
          code: number;
          /**
           * Message
           * @description Status message
           */
          message: string;
      };
      /**
       * Stay Informed
       * @description Info on geocoding best practices
       */
      stay_informed: {
          /**
           * Blog
           * @description Blog URL
           * @default null
           */
          blog: string | null;
          /**
           * Twitter
           * @description Twitter URL
           * @default null
           */
          twitter: string | null;
      };
      /**
       * Thanks
       * @description Thank you message
       */
      thanks: string;
      /**
       * Timestamp
       * @description Query timestamp
       */
      timestamp: {
          /**
           * Created Http
           * @description Creation time (HTTP format)
           */
          created_http: string;
          /**
           * Created Unix
           * @description Creation time (UNIX timestamp)
           */
          created_unix: number;
      };
      /**
       * Total Results
       * @description Total number of results returned
       */
      total_results: number;
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
 * Type of OPENCAGE's OPENCAGE_GEOCODE_GEOJSON tool input.
 */
type OPENCAGE_GEOCODE_GEOJSON_INPUT = {
  /**
   * Abbrv
   * @description Use abbreviated fields: 1 or 0.
   * @default null
   */
  abbrv: number | null;
  /**
   * Add Request
   * @description Include original request in response.
   * @default false
   */
  add_request: boolean;
  /**
   * Address Only
   * @description Return only address-type results.
   * @default false
   */
  address_only: boolean;
  /**
   * Bounds
   * @description Restrict to bounding box: min_lon,min_lat,max_lon,max_lat.
   * @default null
   */
  bounds: string | null;
  /**
   * Countrycode
   * @description Restrict to country (ISO 3166-1 alpha-2).
   * @default null
   */
  countrycode: string | null;
  /**
   * Language
   * @description Preferred language (IETF code, e.g., 'en').
   * @default null
   */
  language: string | null;
  /**
   * Limit
   * @description Maximum results to return (1-100).
   * @default null
   */
  limit: number | null;
  /**
   * Min Confidence
   * @description Minimum confidence level (0-10).
   * @default null
   */
  min_confidence: number | null;
  /**
   * No Annotations
   * @description Exclude detailed annotations (timezone, currency, etc.).
   * @default false
   */
  no_annotations: boolean;
  /**
   * Pretty
   * @description Pretty-print the JSON response.
   * @default false
   */
  pretty: boolean;
  /**
   * Proximity
   * @description Bias results near 'lat,lng'.
   * @default null
   */
  proximity: string | null;
  /**
   * Q
   * @description Query string (address, placename, or 'lat,lng').
   */
  q?: string;
  /**
   * Roadinfo
   * @description Include road information.
   * @default false
   */
  roadinfo: boolean;
};

/**
 * Type of OPENCAGE's OPENCAGE_GEOCODE_GEOJSON tool output.
 */
type OPENCAGE_GEOCODE_GEOJSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Features
       * @description List of GeoJSON features.
       */
      features: {
          /**
           * Geometry
           * @description GeoJSON geometry object.
           */
          geometry: {
              /**
               * Coordinates
               * @description Longitude and latitude [lon, lat].
               */
              coordinates: number[];
              /**
               * Type
               * @description GeoJSON geometry type, always 'Point'.
               * @constant
               */
              type: "Point";
          };
          /**
           * Properties
           * @description Feature properties.
           */
          properties: {
              /**
               * Annotations
               * @description Additional geographic annotations.
               */
              annotations: {
                  /**
                   * Dms
                   * @description Coordinates in DMS format.
                   */
                  DMS: {
                      /**
                       * Lat
                       * @description Latitude in DMS format.
                       */
                      lat: string;
                      /**
                       * Lng
                       * @description Longitude in DMS format.
                       */
                      lng: string;
                  };
                  /**
                   * Mgrs
                   * @description Military Grid Reference System coordinate.
                   */
                  MGRS: string;
                  /**
                   * Maidenhead
                   * @description Maidenhead grid locator.
                   */
                  Maidenhead: string;
                  /**
                   * Mercator
                   * @description Coordinates in Mercator projection.
                   */
                  Mercator: {
                      /**
                       * X
                       * @description Mercator x-coordinate.
                       */
                      x: number;
                      /**
                       * Y
                       * @description Mercator y-coordinate.
                       */
                      y: number;
                  };
                  /**
                   * Osm
                   * @description OpenStreetMap URL info.
                   */
                  OSM: {
                      /**
                       * Edit Url
                       * @description OpenStreetMap edit URL.
                       */
                      edit_url: string;
                      /**
                       * Url
                       * @description OpenStreetMap details URL.
                       */
                      url: string;
                  };
                  /**
                   * Callingcode
                   * @description International calling code.
                   */
                  callingcode: number;
                  /**
                   * Currency
                   * @description Currency information.
                   */
                  currency: {
                      /**
                       * Code
                       * @description Currency code.
                       */
                      code: string;
                      /**
                       * Name
                       * @description Currency name.
                       */
                      name: string;
                      /**
                       * Symbol
                       * @description Currency symbol.
                       */
                      symbol: string;
                  };
                  /**
                   * Flag
                   * @description Flag emoji.
                   */
                  flag: string;
                  /**
                   * Geohash
                   * @description Geohash.
                   */
                  geohash: string;
                  /**
                   * Roadinfo
                   * @description Detailed road information.
                   */
                  roadinfo: {
                      /**
                       * Drive On
                       * @description Drive side ('left' or 'right').
                       */
                      drive_on: string;
                      /**
                       * Speed In
                       * @description Speed unit.
                       */
                      speed_in: string;
                  };
                  /**
                   * Sun
                   * @description Sunrise and sunset times.
                   */
                  sun: {
                      /**
                       * Rise
                       * @description Sunrise time.
                       */
                      rise: string;
                      /**
                       * Set
                       * @description Sunset time.
                       */
                      set: string;
                  };
                  /**
                   * Timezone
                   * @description Timezone information.
                   */
                  timezone: {
                      /**
                       * Abbr
                       * @description Timezone abbreviation.
                       */
                      abbr: string;
                      /**
                       * Dst Offset Sec
                       * @description DST offset in seconds.
                       */
                      dst_offset_sec: number;
                      /**
                       * Name
                       * @description IANA timezone name.
                       */
                      name: string;
                      /**
                       * Offset Sec
                       * @description UTC offset in seconds.
                       */
                      offset_sec: number;
                      /**
                       * Offset String
                       * @description UTC offset as string.
                       */
                      offset_string: string;
                  };
              };
              /**
               * Components
               * @description Structured address components.
               */
              components: {
                  [key: string]: string;
              };
              /**
               * Confidence
               * @description Confidence level (0-10).
               */
              confidence: number;
              /**
               * Formatted
               * @description Formatted address string.
               */
              formatted: string;
          };
          /**
           * Type
           * @description GeoJSON feature type.
           * @constant
           */
          type: "Feature";
      }[];
      /**
       * License
       * @description License information.
       */
      license: {
          /**
           * Name
           * @description License name.
           */
          name: string;
          /**
           * Url
           * @description License URL.
           */
          url: string;
      };
      /**
       * Type
       * @description GeoJSON type, always 'FeatureCollection'.
       * @constant
       */
      type: "FeatureCollection";
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
 * Type of OPENCAGE's OPENCAGE_GEOCODE_GEOJSONP tool input.
 */
type OPENCAGE_GEOCODE_GEOJSONP_INPUT = {
  /**
   * Abbrv
   * @description Whether to abbreviate results; 1 to shorten, 0 otherwise
   * @default null
   */
  abbrv: number | null;
  /**
   * Add Request
   * @description Whether to include the request in the response; 1 to include
   * @default null
   */
  add_request: number | null;
  /**
   * Bounds
   * @description Restrict the search region to a bounding box as 'minLon,minLat,maxLon,maxLat'
   * @default null
   */
  bounds: string | null;
  /**
   * Callback
   * @description Name of the JavaScript callback function
   */
  callback?: string;
  /**
   * Countrycode
   * @description Limit results to this ISO 3166-1 alpha-2 country code
   * @default null
   */
  countrycode: string | null;
  /**
   * Jsonp
   * @description Force JSONP output; set to 1 to output JSONP
   * @default null
   */
  jsonp: number | null;
  /**
   * Language
   * @description Preferred language for results (ISO 639-1 code)
   * @default null
   */
  language: string | null;
  /**
   * Limit
   * @description Maximum number of results (default: 10; max: 100)
   * @default null
   */
  limit: number | null;
  /**
   * Min Confidence
   * @description Minimum confidence level to return (0-10)
   * @default null
   */
  min_confidence: number | null;
  /**
   * No Annotations
   * @description Exclude extra information; 1 to exclude
   * @default null
   */
  no_annotations: number | null;
  /**
   * No Dedupe
   * @description Disable result deduplication; 1 to disable
   * @default null
   */
  no_dedupe: number | null;
  /**
   * No Record
   * @description Do not log this request; 1 to disable logging
   * @default null
   */
  no_record: number | null;
  /**
   * Pretty
   * @description Pretty-print output; for debugging only
   * @default null
   */
  pretty: number | null;
  /**
   * Proximity
   * @description Bias results to this location as 'lat,lon'
   * @default null
   */
  proximity: string | null;
  /**
   * Q
   * @description The address or coordinates to geocode
   */
  q?: string;
};

/**
 * Type of OPENCAGE's OPENCAGE_GEOCODE_GEOJSONP tool output.
 */
type OPENCAGE_GEOCODE_GEOJSONP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Jsonp
       * @description Raw JSONP-formatted response including callback wrapper
       */
      jsonp: string;
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
 * Type of OPENCAGE's OPENCAGE_GEOCODE_REVERSE tool input.
 */
type OPENCAGE_GEOCODE_REVERSE_INPUT = {
  /**
   * Abbrv
   * @description 1 to abbreviate road and route types
   * @default 0
   */
  abbrv: number | null;
  /**
   * Add Request
   * @description 1 to include request parameters in the response
   * @default 0
   */
  add_request: number | null;
  /**
   * Countrycode
   * @description Restrict results to one or more ISO 3166-1 alpha-2 country codes separated by commas
   * @default null
   */
  countrycode: string | null;
  /**
   * Language
   * @description Preferred response language as ISO 639-1 code, e.g., 'en'
   * @default null
   */
  language: string | null;
  /**
   * Limit
   * @description Maximum number of results to return (1-10)
   * @default 10
   */
  limit: number | null;
  /**
   * Min Confidence
   * @description Minimum confidence level (0-10) to filter results
   * @default null
   */
  min_confidence: number | null;
  /**
   * No Annotations
   * @description 1 to exclude annotations in the response
   * @default 0
   */
  no_annotations: number | null;
  /**
   * Normalizecity
   * @description 1 to normalize city names
   * @default 0
   */
  normalizecity: number | null;
  /**
   * Pretty
   * @description 1 for pretty-printed JSON, 0 (default) for compact output
   * @default 0
   */
  pretty: number | null;
  /**
   * Q
   * @description Latitude and longitude as a comma-separated string, e.g., '51.952659,7.632473'
   */
  q?: string;
  /**
   * Roadinfo
   * @description 1 to include road information in the response
   * @default 0
   */
  roadinfo: number | null;
};

/**
 * Type of OPENCAGE's OPENCAGE_GEOCODE_REVERSE tool output.
 */
type OPENCAGE_GEOCODE_REVERSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rate
       * @description Rate limit information
       */
      rate: {
          /**
           * Limit
           * @description Rate limit
           */
          limit: number;
          /**
           * Remaining
           * @description Remaining requests in current rate window
           */
          remaining: number;
          /**
           * Reset
           * @description Seconds until rate limit resets
           */
          reset: number;
      };
      /**
       * Results
       * @description List of reverse geocoded results
       */
      results: {
          /**
           * Annotations
           * @description Additional annotation metadata
           */
          annotations: {
              [key: string]: unknown;
          };
          /**
           * Components
           * @description Address components breakdown
           */
          components: {
              [key: string]: string;
          };
          /**
           * Confidence
           * @description Confidence score (0-10)
           */
          confidence: number;
          /**
           * Formatted
           * @description Human-readable formatted address
           */
          formatted: string;
          /**
           * Geometry
           * @description Latitude/longitude pair of the result
           */
          geometry: {
              /**
               * Lat
               * @description Latitude of the result
               */
              lat: number;
              /**
               * Lng
               * @description Longitude of the result
               */
              lng: number;
          };
      }[];
      /**
       * Status
       * @description Status of the API response
       */
      status: {
          /**
           * Code
           * @description Status code of the request, 200 indicates success
           */
          code: number;
          /**
           * Message
           * @description Status message of the request
           */
          message: string;
      };
      /**
       * Stay Informed
       * @description Information on how to stay informed about the service
       */
      stay_informed: {
          /**
           * Blog
           * @description URL to the OpenCage blog
           * @default null
           */
          blog: string | null;
          /**
           * Facebook
           * @description OpenCage Facebook page URL
           * @default null
           */
          facebook: string | null;
          /**
           * Twitter
           * @description OpenCage Twitter handle
           * @default null
           */
          twitter: string | null;
      };
      /**
       * Thanks
       * @description Attribution text
       */
      thanks: string;
      /**
       * Timestamp
       * @description Response timestamp information
       */
      timestamp: {
          /**
           * Created Http
           * @description Timestamp when the response was created (HTTP-format)
           */
          created_http: string;
          /**
           * Created Unix
           * @description Timestamp when the response was created (Unix time)
           */
          created_unix: number;
      };
      /**
       * Total Results
       * @description Total number of results
       */
      total_results: number;
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
 * Type of OPENCAGE's OPENCAGE_GEOCODE_XML tool input.
 */
type OPENCAGE_GEOCODE_XML_INPUT = {
  /**
   * Abbrv
   * @description 1 for abbreviated components, 0 for full components
   * @default 0
   * @enum {integer|null}
   */
  abbrv: 0 | 1 | null;
  /**
   * Add Request
   * @description 1 to include a copy of input parameters in the response
   * @default 0
   * @enum {integer|null}
   */
  add_request: 0 | 1 | null;
  /**
   * Callback
   * @description JSONP callback function name (not used for XML responses)
   * @default null
   */
  callback: string | null;
  /**
   * Countrycode
   * @description Restrict results to this two-letter country code
   * @default null
   */
  countrycode: unknown;
  /**
   * Key
   * @description Your OpenCage API key
   */
  key?: string;
  /**
   * Language
   * @description Two-letter IETF language tag for results (e.g., 'en', 'de')
   * @default null
   */
  language: string | null;
  /**
   * Limit
   * @description Maximum number of results to return (1–100)
   * @default 10
   */
  limit: number | null;
  /**
   * Min Confidence
   * @description Only include results with this confidence or higher (1–10)
   * @default null
   */
  min_confidence: number | null;
  /**
   * No Annotations
   * @description 1 to exclude annotations, 0 to include
   * @default 0
   * @enum {integer|null}
   */
  no_annotations: 0 | 1 | null;
  /**
   * No Dedupe
   * @description 1 to disable deduplication of results, 0 to dedupe
   * @default 0
   * @enum {integer|null}
   */
  no_dedupe: 0 | 1 | null;
  /**
   * Pretty
   * @description 1 for pretty-printed XML, 0 for compact output
   * @default 0
   * @enum {integer|null}
   */
  pretty: 0 | 1 | null;
  /**
   * Q
   * @description Location query for forward (text) or reverse ('lat,lng') geocoding
   */
  q?: string;
  /**
   * Roadinfo
   * @description 1 to include road information near the location
   * @default 0
   * @enum {integer|null}
   */
  roadinfo: 0 | 1 | null;
};

/**
 * Type of OPENCAGE's OPENCAGE_GEOCODE_XML tool output.
 */
type OPENCAGE_GEOCODE_XML_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Xml
       * @description Raw XML response from the OpenCage API
       */
      xml: string;
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
 * Type map of all available tool input types for toolkit "OPENCAGE".
 */
export type OPENCAGE_TOOL_INPUTS = {
  GEOCODE_FORWARD: OPENCAGE_GEOCODE_FORWARD_INPUT
  GEOCODE_GEOJSON: OPENCAGE_GEOCODE_GEOJSON_INPUT
  GEOCODE_GEOJSONP: OPENCAGE_GEOCODE_GEOJSONP_INPUT
  GEOCODE_REVERSE: OPENCAGE_GEOCODE_REVERSE_INPUT
  GEOCODE_XML: OPENCAGE_GEOCODE_XML_INPUT
}

/**
 * Type map of all available tool input types for toolkit "OPENCAGE".
 */
export type OPENCAGE_TOOL_OUTPUTS = {
  GEOCODE_FORWARD: OPENCAGE_GEOCODE_FORWARD_OUTPUT
  GEOCODE_GEOJSON: OPENCAGE_GEOCODE_GEOJSON_OUTPUT
  GEOCODE_GEOJSONP: OPENCAGE_GEOCODE_GEOJSONP_OUTPUT
  GEOCODE_REVERSE: OPENCAGE_GEOCODE_REVERSE_OUTPUT
  GEOCODE_XML: OPENCAGE_GEOCODE_XML_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's OPENCAGE toolkit.
 */
export const OPENCAGE = {
  slug: "opencage",
  tools: {
    /**
     * Tool to convert a human-readable address into geographic coordinates. use when you need to retrieve latitude and longitude from an address.
     */
    GEOCODE_FORWARD: "OPENCAGE_GEOCODE_FORWARD",
    /**
     * Tool to geocode and return geojson. use when you need geojson featurecollection.
     */
    GEOCODE_GEOJSON: "OPENCAGE_GEOCODE_GEOJSON",
    /**
     * Tool to perform geocoding and return results in geojsonp format. use when you need a javascript callback wrapped response.
     */
    GEOCODE_GEOJSONP: "OPENCAGE_GEOCODE_GEOJSONP",
    /**
     * Tool to convert coordinates to a human-readable address. use when you have latitude and longitude and need a readable location.
     */
    GEOCODE_REVERSE: "OPENCAGE_GEOCODE_REVERSE",
    /**
     * Tool to perform geocoding and return results in xml format. use when you need xml-formatted geocoding responses from opencage.
     */
    GEOCODE_XML: "OPENCAGE_GEOCODE_XML",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "OPENCAGE".
 */
export type OPENCAGE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "OPENCAGE".
 */
export type OPENCAGE_TRIGGER_EVENTS = {}
