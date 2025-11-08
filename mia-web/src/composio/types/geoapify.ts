// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GEOAPIFY's GEOAPIFY_ADDRESS_AUTOCOMPLETE tool input.
 */
type GEOAPIFY_ADDRESS_AUTOCOMPLETE_INPUT = {
  /**
   * Bias
   * @description Bias results by proximity or boundary using formats: proximity:lon,lat|circle:lon,lat,radius|rect:lon1,lat1,lon2,lat2|countrycode:CC; combine with '|' for OR
   * @default null
   */
  bias: string | null;
  /**
   * Filter
   * @description Filter results by boundary or country using formats: circle:lon,lat,radius|rect:lon1,lat1,lon2,lat2|countrycode:CC|place:placeId; combine with '|' for AND
   * @default null
   */
  filter: string | null;
  /**
   * Format
   * @description Response format; one of: 'geojson' (default), 'json', 'xml'
   * @default null
   * @enum {string|null}
   */
  format: "geojson" | "json" | "xml" | null;
  /**
   * Lang
   * @description Language code (ISO 639-1, 2 letters, e.g., 'en')
   * @default null
   */
  lang: string | null;
  /**
   * Limit
   * @description Maximum number of results to return, must be >= 1
   * @default null
   */
  limit: number | null;
  /**
   * Text
   * @description Partial address text to autocomplete
   */
  text?: string;
  /**
   * Type
   * @description Restrict suggestions by location type
   * @default null
   * @enum {string|null}
   */
  type: "country" | "state" | "city" | "postcode" | "street" | "amenity" | "locality" | null;
};

/**
 * Type of GEOAPIFY's GEOAPIFY_ADDRESS_AUTOCOMPLETE tool output.
 */
type GEOAPIFY_ADDRESS_AUTOCOMPLETE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Features
       * @description List of suggested place features
       */
      features: {
          /**
           * Geometry
           * @description Geometry data for the feature
           */
          geometry: {
              /**
               * Coordinates
               * @description [longitude, latitude] coordinates of the place
               */
              coordinates: number[];
              /**
               * Type
               * @description Geometry type, typically 'Point'
               */
              type: string;
          };
          /**
           * Properties
           * @description Properties of the suggested place
           */
          properties: {
              /**
               * Address Line1
               * @description First line of address
               * @default null
               */
              address_line1: string | null;
              /**
               * Address Line2
               * @description Second line of address
               * @default null
               */
              address_line2: string | null;
              /**
               * Category
               * @description Place category
               * @default null
               */
              category: string | null;
              /**
               * City
               * @description City name
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Country Code
               * @description ISO 3166-1 alpha-2 country code
               * @default null
               */
              country_code: string | null;
              /**
               * County
               * @description County name
               * @default null
               */
              county: string | null;
              /**
               * County Code
               * @description County code
               * @default null
               */
              county_code: string | null;
              /**
               * Datasource
               * @description Data source information
               * @default null
               */
              datasource: {
                  /**
                   * Name
                   * @description Name of the data source
                   * @default null
                   */
                  name: string | null;
              } | null;
              /**
               * Distance
               * @description Distance in meters to bias point, if applied
               * @default null
               */
              distance: number | null;
              /**
               * Formatted
               * @description Full formatted address
               * @default null
               */
              formatted: string | null;
              /**
               * Housenumber
               * @description House number
               * @default null
               */
              housenumber: string | null;
              /**
               * Lat
               * @description Latitude of the location
               * @default null
               */
              lat: number | null;
              /**
               * Lon
               * @description Longitude of the location
               * @default null
               */
              lon: number | null;
              /**
               * Name
               * @description Location name
               * @default null
               */
              name: string | null;
              /**
               * Postcode
               * @description Postal code
               * @default null
               */
              postcode: string | null;
              /**
               * Rank
               * @description Ranking details
               * @default null
               */
              rank: {
                  /**
                   * Confidence
                   * @description Overall confidence score (0-1)
                   */
                  confidence: number;
                  /**
                   * Confidence Building Level
                   * @description Building-level confidence score
                   * @default null
                   */
                  confidence_building_level: number | null;
                  /**
                   * Confidence City Level
                   * @description City-level confidence score
                   * @default null
                   */
                  confidence_city_level: number | null;
                  /**
                   * Confidence Street Level
                   * @description Street-level confidence score
                   * @default null
                   */
                  confidence_street_level: number | null;
                  /**
                   * Match Type
                   * @description Type of match (e.g., full_match, inner_part etc.)
                   * @default null
                   */
                  match_type: string | null;
              } | null;
              /**
               * Result Type
               * @description Detected result type
               * @default null
               */
              result_type: string | null;
              /**
               * State
               * @description State name
               * @default null
               */
              state: string | null;
              /**
               * State Code
               * @description State code
               * @default null
               */
              state_code: string | null;
              /**
               * Street
               * @description Street name
               * @default null
               */
              street: string | null;
              /**
               * Timezone
               * @description Timezone information
               * @default null
               */
              timezone: {
                  /**
                   * Abbreviation Dst
                   * @description Daylight savings time abbreviation
                   * @default null
                   */
                  abbreviation_DST: string | null;
                  /**
                   * Abbreviation Std
                   * @description Standard time abbreviation
                   * @default null
                   */
                  abbreviation_STD: string | null;
                  /**
                   * Name
                   * @description Time zone name
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Name Alt
                   * @description Alternative time zone name
                   * @default null
                   */
                  name_alt: string | null;
                  /**
                   * Offset Dst
                   * @description Daylight savings time offset string
                   * @default null
                   */
                  offset_DST: string | null;
                  /**
                   * Offset Dst Seconds
                   * @description Daylight savings time offset in seconds
                   * @default null
                   */
                  offset_DST_seconds: number | null;
                  /**
                   * Offset Std
                   * @description Standard time offset string
                   * @default null
                   */
                  offset_STD: string | null;
                  /**
                   * Offset Std Seconds
                   * @description Standard time offset in seconds
                   * @default null
                   */
                  offset_STD_seconds: number | null;
              } | null;
          };
          /**
           * Type
           * @description GeoJSON feature type, typically 'Feature'
           */
          type: string;
      }[];
      /**
       * Type
       * @description GeoJSON type, e.g., 'FeatureCollection'
       */
      type: string;
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
 * Type of GEOAPIFY's GEOAPIFY_BATCH_REQUESTS tool input.
 */
type GEOAPIFY_BATCH_REQUESTS_INPUT = {
  /**
   * Api
   * @description API path to call. Supported values: /v1/geocode/search, /v1/geocode/reverse, /v1/routing, /v1/isoline.
   * @default null
   * @enum {string|null}
   */
  api: "/v1/geocode/search" | "/v1/geocode/reverse" | "/v1/routing" | "/v1/isoline" | null;
  /**
   * Body
   * @description Common JSON body for all inputs, e.g., routing mode.
   * @default null
   */
  body: {
      [key: string]: unknown;
  } | null;
  /**
   * Id
   * @description Batch job ID. Provide to retrieve status and results; omit to create a new job.
   * @default null
   */
  id: string | null;
  /**
   * Inputs
   * @description Array of input objects; up to 1000 elements when creating a job.
   * @default null
   */
  inputs: {
      /**
       * Body
       * @description Specific JSON body for this input if required by the API.
       * @default null
       */
      body: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description Optional identifier for the individual input.
       * @default null
       */
      id: string | null;
      /**
       * Params
       * @description Specific API request parameters for this input.
       */
      params: {
          [key: string]: unknown;
      };
  }[] | null;
  /**
   * Params
   * @description Common query parameters for all inputs, e.g., language code.
   * @default null
   */
  params: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of GEOAPIFY's GEOAPIFY_BATCH_REQUESTS tool output.
 */
type GEOAPIFY_BATCH_REQUESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Batch job ID.
       */
      id: string;
      /**
       * Results
       * @description Results array, present when job execution is complete.
       * @default null
       */
      results: {
          /**
           * Id
           * @description Identifier of the input if provided.
           * @default null
           */
          id: string | null;
          /**
           * Result
           * @description Result returned by the specified API for this input.
           */
          result: {
              [key: string]: unknown;
          };
      }[] | null;
      /**
       * Status
       * @description Job status; present when job is pending or still processing.
       * @default null
       */
      status: string | null;
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
 * Type of GEOAPIFY's GEOAPIFY_BOUNDARIES tool input.
 */
type GEOAPIFY_BOUNDARIES_INPUT = {
  /**
   * Boundaries
   * @description Type of boundary to retrieve.
   * @default administrative
   * @enum {string}
   */
  boundaries: "administrative" | "postal_code" | "political" | "low_emission_zone";
  /**
   * Geometry
   * @description Level of geometry detail to return.
   * @default point
   * @enum {string}
   */
  geometry: "point" | "geometry_1000" | "geometry_5000" | "geometry_10000";
  /**
   * Id
   * @description Place ID from Geometry or Places API. Mutually exclusive with lat and lon.
   * @default null
   */
  id: string | null;
  /**
   * Lang
   * @description Language code for results (ISO 639-1).
   * @default null
   */
  lang: string | null;
  /**
   * Lat
   * @description Latitude of the location. Required with lon if id is omitted.
   * @default null
   */
  lat: number | null;
  /**
   * Lon
   * @description Longitude of the location. Required with lat if id is omitted.
   * @default null
   */
  lon: number | null;
};

/**
 * Type of GEOAPIFY's GEOAPIFY_BOUNDARIES tool output.
 */
type GEOAPIFY_BOUNDARIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bbox
       * @description Bounding box of the feature collection, if present.
       * @default null
       */
      bbox: number[] | null;
      /**
       * Features
       * @description List of GeoJSON features for the boundaries.
       */
      features: {
          /**
           * Geometry
           * @description Geometry of the feature.
           */
          geometry: {
              /**
               * Coordinates
               * @description Coordinates of the geometry.
               */
              coordinates: unknown[];
              /**
               * Type
               * @description Geometry type of the feature.
               * @enum {string}
               */
              type: "Point" | "Polygon" | "MultiPolygon";
          };
          /**
           * Properties
           * @description Properties of the feature.
           */
          properties: {
              /**
               * Address Line1
               * @description First address line of the feature.
               * @default null
               */
              address_line1: string | null;
              /**
               * Address Line2
               * @description Second address line of the feature.
               * @default null
               */
              address_line2: string | null;
              /**
               * City
               * @description City of the feature.
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country of the feature.
               * @default null
               */
              country: string | null;
              /**
               * Formatted
               * @description Formatted address of the feature.
               * @default null
               */
              formatted: string | null;
              /**
               * Housenumber
               * @description House number of the feature.
               * @default null
               */
              housenumber: string | null;
              /**
               * Lat
               * @description Latitude of the feature.
               * @default null
               */
              lat: number | null;
              /**
               * Lon
               * @description Longitude of the feature.
               * @default null
               */
              lon: number | null;
              /**
               * Name
               * @description Name of the feature.
               * @default null
               */
              name: string | null;
              /**
               * Postcode
               * @description Postcode of the feature.
               * @default null
               */
              postcode: string | null;
              /**
               * State
               * @description State of the feature.
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Street of the feature.
               * @default null
               */
              street: string | null;
          };
          /**
           * Type
           * @description Object type (Feature).
           * @constant
           */
          type: "Feature";
      }[];
      /**
       * Type
       * @description GeoJSON type (FeatureCollection).
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
 * Type of GEOAPIFY's GEOAPIFY_FORWARD_GEOCODING tool input.
 */
type GEOAPIFY_FORWARD_GEOCODING_INPUT = {
  /**
   * Api Key
   * @description Geoapify API key
   */
  apiKey?: string;
  /**
   * Bias
   * @description Location bias. Formats: 'circle:lon,lat,radiusMeters', 'rect:lon1,lat1,lon2,lat2', 'countrycode:code1,code2', 'proximity:lon,lat'. Combine multiple with '|' for OR logic. Default is countrycode:auto.
   * @default null
   */
  bias: string | null;
  /**
   * City
   * @description City name for structured address search
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Country name for structured address search
   * @default null
   */
  country: string | null;
  /**
   * Filter
   * @description Location filters. Formats: 'circle:lon,lat,radiusMeters', 'rect:lon1,lat1,lon2,lat2', 'countrycode:code1,code2', 'place:placeId'. Combine multiple with '|' for AND logic.
   * @default null
   */
  filter: string | null;
  /**
   * Format
   * @description Response format. One of: geojson (default), json, xml
   * @default geojson
   * @enum {string}
   */
  format: "geojson" | "json" | "xml";
  /**
   * Housenumber
   * @description House number for structured address search
   * @default null
   */
  housenumber: string | null;
  /**
   * Lang
   * @description Result language (ISO 639-1 2-letter code, e.g., 'en')
   * @default null
   */
  lang: string | null;
  /**
   * Limit
   * @description Maximum number of results to return (default 5)
   * @default 5
   */
  limit: number | null;
  /**
   * Name
   * @description Amenity or place name for structured address search
   * @default null
   */
  name: string | null;
  /**
   * Postcode
   * @description Postal code or ZIP for structured address search
   * @default null
   */
  postcode: string | null;
  /**
   * State
   * @description State or province for structured address search
   * @default null
   */
  state: string | null;
  /**
   * Street
   * @description Street name for structured address search
   * @default null
   */
  street: string | null;
  /**
   * Text
   * @description Free-form address to search, e.g., 'Berlin, Germany'
   * @default null
   */
  text: string | null;
  /**
   * Type
   * @description Location type filter. Allowed: country, state, city, postcode, street, amenity, locality
   * @default null
   * @enum {string|null}
   */
  type: "country" | "state" | "city" | "postcode" | "street" | "amenity" | "locality" | null;
};

/**
 * Type of GEOAPIFY's GEOAPIFY_FORWARD_GEOCODING tool output.
 */
type GEOAPIFY_FORWARD_GEOCODING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Query
       * @description Query details and parsed components
       */
      query: {
          /**
           * QueryParsed
           * @description Parsed components of the search text
           * @default null
           */
          parsed: {
              /**
               * City
               * @description Parsed city from query
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Parsed country from query
               * @default null
               */
              country: string | null;
              /**
               * Expected Type
               * @description Expected result type based on parsed input
               * @default null
               */
              expected_type: string | null;
              /**
               * Housenumber
               * @description Parsed house number from query
               * @default null
               */
              housenumber: string | null;
              /**
               * Postcode
               * @description Parsed postal code from query
               * @default null
               */
              postcode: string | null;
              /**
               * State
               * @description Parsed state from query
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Parsed street from query
               * @default null
               */
              street: string | null;
          } | null;
          /**
           * Text
           * @description Original search text
           * @default null
           */
          text: string | null;
      };
      /**
       * Results
       * @description List of location results
       */
      results: {
          /**
           * Address Line1
           * @description Primary address line
           * @default null
           */
          address_line1: string | null;
          /**
           * Address Line2
           * @description Secondary address line
           * @default null
           */
          address_line2: string | null;
          /**
           * Category
           * @description Place category from Places API
           * @default null
           */
          category: string | null;
          /**
           * City
           * @description City component
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country component
           * @default null
           */
          country: string | null;
          /**
           * Country Code
           * @description ISO 3166-1 alpha-2 country code
           * @default null
           */
          country_code: string | null;
          /**
           * County
           * @description County component
           * @default null
           */
          county: string | null;
          /**
           * County Code
           * @description County shortcode
           * @default null
           */
          county_code: string | null;
          /**
           * Datasource
           * @description Data source information
           */
          datasource: {
              /**
               * Attribution
               * @description Attribution string for the data source
               * @default null
               */
              attribution: string | null;
              /**
               * License
               * @description License information for the data source
               * @default null
               */
              license: string | null;
              /**
               * Sourcename
               * @description Name of the data source
               * @default null
               */
              sourcename: string | null;
          };
          /**
           * Distance
           * @description Distance in meters to bias location if provided
           * @default null
           */
          distance: number | null;
          /**
           * Formatted
           * @description Formatted display address
           * @default null
           */
          formatted: string | null;
          /**
           * Housenumber
           * @description House number
           * @default null
           */
          housenumber: string | null;
          /**
           * Lat
           * @description Latitude of the location
           */
          lat: number;
          /**
           * Lon
           * @description Longitude of the location
           */
          lon: number;
          /**
           * Name
           * @description Location name
           * @default null
           */
          name: string | null;
          /**
           * Place Id
           * @description Unique place identifier
           * @default null
           */
          place_id: string | null;
          /**
           * Postcode
           * @description Postal code or ZIP
           * @default null
           */
          postcode: string | null;
          /**
           * Rank
           * @description Ranking and confidence information
           */
          rank: {
              /**
               * Confidence
               * @description Overall confidence (0-1)
               */
              confidence: number;
              /**
               * Confidence Building Level
               * @description Building-level confidence (0-1)
               */
              confidence_building_level: number;
              /**
               * Confidence City Level
               * @description City-level confidence (0-1)
               */
              confidence_city_level: number;
              /**
               * Confidence Street Level
               * @description Street-level confidence (0-1)
               */
              confidence_street_level: number;
              /**
               * Match Type
               * @description Match type of the result
               * @enum {string}
               */
              match_type: "full_match" | "inner_part" | "match_by_building" | "match_by_street" | "match_by_postcode" | "match_by_city_or_disrict" | "match_by_country_or_state";
          };
          /**
           * Result Type
           * @description Type of the result
           * @default null
           * @enum {string|null}
           */
          result_type: "unknown" | "amenity" | "building" | "street" | "suburb" | "district" | "postcode" | "city" | "county" | "state" | "country" | null;
          /**
           * State
           * @description State component
           * @default null
           */
          state: string | null;
          /**
           * State Code
           * @description State shortcode
           * @default null
           */
          state_code: string | null;
          /**
           * Street
           * @description Street component
           * @default null
           */
          street: string | null;
          /**
           * Timezone
           * @description Timezone information
           */
          timezone: {
              /**
               * Abbreviation Dst
               * @description Daylight saving timezone abbreviation
               * @default null
               */
              abbreviation_DST: string | null;
              /**
               * Abbreviation Std
               * @description Standard timezone abbreviation
               * @default null
               */
              abbreviation_STD: string | null;
              /**
               * Name
               * @description Timezone name (e.g., 'Europe/Berlin')
               */
              name: string;
              /**
               * Name Alt
               * @description Alternate timezone name if available
               * @default null
               */
              name_alt: string | null;
              /**
               * Offset Dst
               * @description Daylight saving time offset
               * @default null
               */
              offset_DST: string | null;
              /**
               * Offset Dst Seconds
               * @description Daylight saving offset in seconds
               * @default null
               */
              offset_DST_seconds: number | null;
              /**
               * Offset Std
               * @description Standard time offset (e.g., '+01:00')
               * @default null
               */
              offset_STD: string | null;
              /**
               * Offset Std Seconds
               * @description Standard offset in seconds
               * @default null
               */
              offset_STD_seconds: number | null;
          };
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
 * Type of GEOAPIFY's GEOAPIFY_GEOMETRY tool input.
 */
type GEOAPIFY_GEOMETRY_INPUT = {
  /**
   * Id
   * @description List of at least two geometry IDs to combine or intersect.
   */
  id?: string[];
  /**
   * Operation
   * @description Geometric operation to apply. Must be 'union' or 'intersection'.
   * @enum {string}
   */
  operation?: "union" | "intersection";
};

/**
 * Type of GEOAPIFY's GEOAPIFY_GEOMETRY tool output.
 */
type GEOAPIFY_GEOMETRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Features
       * @description List of resulting geometries.
       */
      features: {
          /** Geometry */
          geometry: {
              /**
               * Coordinates
               * @description Nested list of coordinates for the MultiPolygon.
               */
              coordinates: number[][][][];
              /**
               * Type
               * @description Geometry type (MultiPolygon).
               * @constant
               */
              type: "MultiPolygon";
          };
          /** Properties */
          properties: {
              /**
               * Id
               * @description Identifier for the resulting geometry.
               */
              id: string;
          };
          /**
           * Type
           * @description Feature object.
           * @constant
           */
          type: "Feature";
      }[];
      /**
       * Type
       * @description Collection of feature geometries.
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
 * Type of GEOAPIFY's GEOAPIFY_IP_GEOLOCATION tool input.
 */
type GEOAPIFY_IP_GEOLOCATION_INPUT = {
  /**
   * Ip
   * @description IP address to lookup; if omitted, uses the caller's IP.
   * @default null
   */
  ip: string | null;
};

/**
 * Type of GEOAPIFY's GEOAPIFY_IP_GEOLOCATION tool output.
 */
type GEOAPIFY_IP_GEOLOCATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asn
       * @description Autonomous System Number details.
       */
      asn: {
          /**
           * Asn
           * @description Autonomous system number, e.g., 'AS15169'.
           */
          asn: string;
          /**
           * Domain
           * @description ASN domain, e.g., 'google.com'.
           */
          domain: string;
          /**
           * Name
           * @description Name of the ASN owner, e.g., 'Google LLC'.
           */
          name: string;
          /**
           * Route
           * @description Network route prefix, e.g., '8.8.8.0/24'.
           */
          route: string;
          /**
           * Type
           * @description Type of ASN, e.g., 'business'.
           */
          type: string;
      };
      /**
       * Calling Code
       * @description International calling code, e.g., '+1'.
       * @default null
       */
      calling_code: string | null;
      /**
       * City
       * @description City name.
       * @default null
       */
      city: string | null;
      /**
       * Continent
       * @description Continent name.
       * @default null
       */
      continent: string | null;
      /**
       * Country
       * @description Country details.
       */
      country: {
          /**
           * Iso Code
           * @description ISO 3166-1 alpha-2 country code, e.g., 'US'.
           */
          iso_code: string;
          /**
           * Name
           * @description Country name, e.g., 'United States'.
           */
          name: string;
      };
      /**
       * Currency
       * @description Currency details of the IP location.
       */
      currency: {
          /**
           * Code
           * @description Currency code, e.g., 'USD'.
           */
          code: string;
          /**
           * Name
           * @description Currency name, e.g., 'US Dollar'.
           */
          name: string;
          /**
           * Symbol
           * @description Currency symbol, e.g., '$'.
           */
          symbol: string;
      };
      /**
       * Ip
       * @description Queried IP address.
       */
      ip: string;
      /**
       * Latitude
       * @description Latitude coordinate.
       * @default null
       */
      latitude: number | null;
      /**
       * Longitude
       * @description Longitude coordinate.
       * @default null
       */
      longitude: number | null;
      /**
       * Region
       * @description Region or state name.
       * @default null
       */
      region: string | null;
      /**
       * Timezone
       * @description Timezone details.
       */
      timezone: {
          /**
           * Name
           * @description IANA timezone name, e.g., 'America/Los_Angeles'.
           */
          name: string;
          /**
           * Offset Dst
           * @description Timezone offset during daylight savings time.
           * @default null
           */
          offset_DST: number | null;
          /**
           * Offset Std
           * @description Standard timezone offset.
           * @default null
           */
          offset_STD: number | null;
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
 * Type of GEOAPIFY's GEOAPIFY_ISOLINE tool input.
 */
type GEOAPIFY_ISOLINE_INPUT = {
  /**
   * Avoid
   * @description Avoid rules separated by '|', e.g. tolls or ferries.
   * @default null
   */
  avoid: string | null;
  /**
   * Id
   * @description Unique identifier of previously generated isoline (valid 24h). Exclusive with lat/lon/type/mode/range.
   * @default null
   */
  id: string | null;
  /**
   * Lat
   * @description Latitude of the origin point in decimal degrees. Required for new calculation.
   * @default null
   */
  lat: number | null;
  /**
   * Lon
   * @description Longitude of the origin point in decimal degrees. Required for new calculation.
   * @default null
   */
  lon: number | null;
  /**
   * Max Speed
   * @description Vehicle max speed in KPH (10-252). Applies to drive/truck/bus modes.
   * @default null
   */
  max_speed: number | null;
  /**
   * Mode
   * @description Travel mode for route calculation. Required for new calculation.
   * @default null
   * @enum {string|null}
   */
  mode: "drive" | "light_truck" | "medium_truck" | "truck" | "heavy_truck" | "truck_dangerous_goods" | "long_truck" | "bus" | "scooter" | "motorcycle" | "bicycle" | "mountain_bike" | "road_bike" | "walk" | "hike" | "transit" | "approximated_transit" | null;
  /**
   * Range
   * @description Isoline range(s): seconds for time or meters for distance. Supply single int or list for multiple.
   * @default null
   */
  range: number | null;
  /**
   * Route Type
   * @description Route optimization. Default balanced.
   * @default null
   * @enum {string|null}
   */
  route_type: "balanced" | "short" | "less_maneuvers" | null;
  /**
   * Traffic
   * @description Traffic model (motorized modes only). Default free_flow.
   * @default null
   * @enum {string|null}
   */
  traffic: "free_flow" | "approximated" | null;
  /**
   * Type
   * @description Isoline type: 'time' (seconds) or 'distance' (meters). Required for new calculation.
   * @default null
   * @enum {string|null}
   */
  type: "time" | "distance" | null;
  /**
   * Units
   * @description Units for distance calculations. Default metric.
   * @default null
   * @enum {string|null}
   */
  units: "metric" | "imperial" | null;
};

/**
 * Type of GEOAPIFY's GEOAPIFY_ISOLINE tool output.
 */
type GEOAPIFY_ISOLINE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Features
       * @description List of isoline features.
       */
      features: {
          /**
           * Geometry
           * @description Geometry of the isoline feature.
           */
          geometry: {
              /**
               * Coordinates
               * @description Coordinates as per GeoJSON.
               */
              coordinates: number[][][] | null;
              /**
               * Type
               * @description Geometry type of the isoline feature.
               * @enum {string}
               */
              type: "Polygon" | "MultiPolygon";
          };
          /**
           * Properties
           * @description Properties of the isoline feature.
           */
          properties: {
              /**
               * Avoid
               * @description Avoid rules applied.
               * @default null
               */
              avoid: string[] | null;
              /**
               * Id
               * @description Isoline unique identifier.
               * @default null
               */
              id: string | null;
              /**
               * Lat
               * @description Origin latitude of the isoline.
               */
              lat: number;
              /**
               * Lon
               * @description Origin longitude of the isoline.
               */
              lon: number;
              /**
               * Mode
               * @description Travel mode used.
               */
              mode: string;
              /**
               * Range
               * @description Range value for this isoline.
               */
              range: number;
              /**
               * Route Type
               * @description Route type used.
               * @default null
               */
              route_type: string | null;
              /**
               * Traffic
               * @description Traffic model used.
               * @default null
               */
              traffic: string | null;
              /**
               * Type
               * @description Isoline type used.
               * @enum {string}
               */
              type: "time" | "distance";
          };
          /**
           * Type
           * @description GeoJSON feature type.
           * @constant
           */
          type: "Feature";
      }[];
      /**
       * Type
       * @description GeoJSON FeatureCollection of isoline features.
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
 * Type of GEOAPIFY's GEOAPIFY_MAP_MATCHING tool input.
 */
type GEOAPIFY_MAP_MATCHING_INPUT = {
  /**
   * Api Key
   * @description Geoapify API key
   */
  apiKey?: string;
  /**
   * Mode
   * @description Travel mode: drive, walk, or bicycle
   * @enum {string}
   */
  mode?: "drive" | "walk" | "bicycle";
  /**
   * Waypoints
   * @description List of GPS waypoints to match (1 to 1000 points)
   */
  waypoints?: {
      /**
       * Bearing
       * @description Bearing in degrees (0-360)
       * @default null
       */
      bearing: number | null;
      /**
       * Location
       * @description GPS location as [longitude, latitude]
       */
      location: number[];
      /**
       * Timestamp
       * @description ISO 8601 timestamp of the point
       * @default null
       */
      timestamp: string | null;
  }[];
};

/**
 * Type of GEOAPIFY's GEOAPIFY_MAP_MATCHING tool output.
 */
type GEOAPIFY_MAP_MATCHING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Features
       * @description Array of matched route features (usually one)
       */
      features: {
          /**
           * Geometry
           * @description Geometry of the matched route
           */
          geometry: {
              /**
               * Coordinates
               * @description Coordinates array for the MultiLineString geometry
               */
              coordinates: number[][][];
              /**
               * Type
               * @description Geometry type, always MultiLineString
               * @constant
               */
              type: "MultiLineString";
          };
          /**
           * Properties
           * @description Properties of the matched route
           */
          properties: {
              /**
               * Distance
               * @description Total distance in meters of the matched route
               */
              distance: number;
              /**
               * Legs
               * @description Detailed route legs
               */
              legs: {
                  /**
                   * Distance
                   * @description Distance in meters for the route leg
                   */
                  distance: number;
                  /**
                   * Steps
                   * @description Ordered list of steps within this leg
                   */
                  steps: {
                      /**
                       * Begin Bearing
                       * @description Starting bearing of the segment
                       */
                      begin_bearing: number;
                      /**
                       * Bridge
                       * @description True if the segment is a bridge
                       * @default null
                       */
                      bridge: boolean | null;
                      /**
                       * Distance
                       * @description Distance in meters for the segment
                       */
                      distance: number;
                      /**
                       * End Bearing
                       * @description Ending bearing of the segment
                       */
                      end_bearing: number;
                      /**
                       * From Index
                       * @description Start index in geometry coordinates
                       */
                      from_index: number;
                      /**
                       * Lane Count
                       * @description Number of lanes for the segment
                       * @default null
                       */
                      lane_count: number | null;
                      /**
                       * Name
                       * @description Step name, e.g., street name
                       */
                      name: string;
                      /**
                       * Road Class
                       * @description Road classification: e.g., motorway, residential
                       */
                      road_class: string;
                      /**
                       * Speed
                       * @description Calculated speed for the segment
                       */
                      speed: number;
                      /**
                       * Speed Limit
                       * @description Speed limit for the segment
                       * @default null
                       */
                      speed_limit: number | null;
                      /**
                       * Surface
                       * @description Surface type of the road segment
                       */
                      surface: string;
                      /**
                       * Time
                       * @description Time in seconds for the segment
                       */
                      time: number;
                      /**
                       * To Index
                       * @description End index in geometry coordinates
                       */
                      to_index: number;
                      /**
                       * Toll
                       * @description True if the segment includes toll roads
                       * @default null
                       */
                      toll: boolean | null;
                      /**
                       * Traversability
                       * @description Allowed direction of travel: forward, backward, both
                       */
                      traversability: string;
                      /**
                       * Tunnel
                       * @description True if the segment is a tunnel
                       * @default null
                       */
                      tunnel: boolean | null;
                  }[];
                  /**
                   * Time
                   * @description Time in seconds for the route leg
                   */
                  time: number;
              }[];
              /**
               * Mode
               * @description Travel mode used for matching
               */
              mode: string;
              /**
               * Time
               * @description Total time in seconds of the matched route
               */
              time: number;
              /**
               * Waypoints
               * @description Details of matched waypoints
               */
              waypoints: {
                  /**
                   * Leg Index
                   * @description Index of the route leg containing this waypoint
                   */
                  leg_index: number;
                  /**
                   * Location
                   * @description Matched coordinate as [longitude, latitude]
                   */
                  location: number[];
                  /**
                   * Match Distance
                   * @description Distance in meters between matched and original point
                   */
                  match_distance: number;
                  /**
                   * Match Type
                   * @description Type of match
                   * @enum {string}
                   */
                  match_type: "matched" | "unmatched" | "interpolated";
                  /**
                   * Original Index
                   * @description Index of the original waypoint in the request
                   */
                  original_index: number;
                  /**
                   * Original Location
                   * @description Original coordinate as [longitude, latitude]
                   */
                  original_location: number[];
                  /**
                   * Step Index
                   * @description Index of the step within the leg
                   */
                  step_index: number;
              }[];
          };
          /**
           * Type
           * @description Feature type, always Feature
           * @constant
           */
          type: "Feature";
      }[];
      /**
       * Type
       * @description Type, always FeatureCollection
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
 * Type of GEOAPIFY's GEOAPIFY_MAP_TILES tool input.
 */
type GEOAPIFY_MAP_TILES_INPUT = {
  /**
   * Api Key
   * @description Your Geoapify API key.
   */
  apiKey?: string;
  /**
   * Mode
   * @description Choose 'tile' to fetch a raster PNG tile, or 'style' to fetch the style JSON.
   * @default tile
   * @enum {string}
   */
  mode: "tile" | "style";
  /**
   * Retina
   * @description Whether to request high-DPI '@2x' tile (only when mode='tile').
   * @default false
   */
  retina: boolean;
  /**
   * Style
   * @description Map style ID. E.g., 'osm-bright', 'positron', 'dark-matter'.
   */
  style?: string;
  /**
   * X
   * @description Tile column X (required when mode='tile').
   * @default null
   */
  x: number | null;
  /**
   * Y
   * @description Tile row Y (required when mode='tile').
   * @default null
   */
  y: number | null;
  /**
   * Z
   * @description Zoom level (required when mode='tile').
   * @default null
   */
  z: number | null;
};

/**
 * Type of GEOAPIFY's GEOAPIFY_MAP_TILES tool output.
 */
type GEOAPIFY_MAP_TILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Style Json
       * @description Mapbox-compatible style JSON (mode='style').
       * @default null
       */
      style_json: {
          [key: string]: unknown;
      } | null;
      /**
       * FileType
       * @description PNG image of the requested map tile (mode='tile').
       * @default null
       */
      tile: {
          /**
           * Content
           * Format: binary
           * @description File content in base64
           */
          content: string;
          /**
           * Name
           * @description File name, contains extension to indetify the file type
           */
          name: string;
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
 * Type of GEOAPIFY's GEOAPIFY_MARKER_ICON tool input.
 */
type GEOAPIFY_MARKER_ICON_INPUT = {
  /**
   * Color
   * @description Background color; ignored for type='plain'; must be URL-encoded, '#' as '%23'.
   * @default null
   */
  color: string | null;
  /**
   * Content Color
   * @description Color of inner icon/text; must be URL-encoded, '#' as '%23'.
   * @default null
   */
  contentColor: string | null;
  /**
   * Content Size
   * @description Inner icon/text height in pixels.
   * @default null
   */
  contentSize: number | null;
  /**
   * Icon
   * @description Inner icon name per the selected library.
   * @default null
   */
  icon: string | null;
  /**
   * Icon Type
   * @description Icon library; defaults to match 'type'.
   * @default null
   * @enum {string|null}
   */
  iconType: "material" | "awesome" | null;
  /**
   * No Shadow
   * @description Flag to disable default shadow.
   * @default false
   */
  noShadow: boolean;
  /**
   * No White Circle
   * @description Flag to remove the white circle.
   * @default false
   */
  noWhiteCircle: boolean;
  /**
   * Shadow Color
   * @description Shadow color; must be URL-encoded, '#' as '%23'.
   * @default null
   */
  shadowColor: string | null;
  /**
   * Size
   * @description Total icon image height in pixels.
   * @default null
   */
  size: number | null;
  /**
   * Stroke Color
   * @description Border color; ignored for type='plain'; must be URL-encoded, '#' as '%23'.
   * @default null
   */
  strokeColor: string | null;
  /**
   * Text
   * @description Text to display instead of an icon.
   * @default null
   */
  text: string | null;
  /**
   * Type
   * @description Marker style/shape. Defaults to 'material' if not specified.
   * @default null
   * @enum {string|null}
   */
  type: "material" | "awesome" | "circle" | "plain" | null;
};

/**
 * Type of GEOAPIFY's GEOAPIFY_MARKER_ICON tool output.
 */
type GEOAPIFY_MARKER_ICON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Downloaded PNG marker icon file.
       */
      content: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of GEOAPIFY's GEOAPIFY_PLACES tool input.
 */
type GEOAPIFY_PLACES_INPUT = {
  /**
   * Bias
   * @description Proximity bias toward a location: 'proximity:lon,lat'.
   * @default null
   */
  bias: string | null;
  /**
   * Categories
   * @description Primary place category keys (comma-separated).
   */
  categories?: string[];
  /**
   * Conditions
   * @description Additional filters such as accessibility/amenities (comma-separated).
   * @default null
   */
  conditions: string[] | null;
  /**
   * Filter
   * @description Spatial filter to constrain the search area. Formats: 'circle:lon,lat,radiusMeters', 'rect:lon1,lat1,lon2,lat2', 'geometry:geometryId', 'place:placeId', 'countrycode:code1,code2' (coming soon).
   * @default null
   */
  filter: string | null;
  /**
   * Lang
   * @description Response language code (ISO 639-1), e.g., 'en'.
   * @default null
   */
  lang: string | null;
  /**
   * Limit
   * @description Maximum number of results per page. Must be >= 1.
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description Return only places matching this name.
   * @default null
   */
  name: string | null;
  /**
   * Offset
   * @description Start index for pagination; use with limit. Must be >= 0.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of GEOAPIFY's GEOAPIFY_PLACES tool output.
 */
type GEOAPIFY_PLACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Features
       * @description List of POI features.
       */
      features: {
          /**
           * Geometry
           * @description Geometry of the POI (Point).
           */
          geometry: {
              /**
               * Coordinates
               * @description [longitude, latitude] coordinates of the place
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
           * @description Properties of the place.
           */
          properties: {
              /**
               * Address Line1
               * @description First line of display address.
               * @default null
               */
              address_line1: string | null;
              /**
               * Address Line2
               * @description Second line of display address.
               * @default null
               */
              address_line2: string | null;
              /**
               * Categories
               * @description All categories or conditions assigned to this place.
               * @default null
               */
              categories: string[] | null;
              /**
               * City
               * @description City component of address.
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country component of address.
               * @default null
               */
              country: string | null;
              /**
               * Distance
               * @description Distance in meters to the bias location.
               * @default null
               */
              distance: number | null;
              /**
               * Formatted
               * @description Full formatted address.
               * @default null
               */
              formatted: string | null;
              /**
               * Housenumber
               * @description House number component.
               * @default null
               */
              housenumber: string | null;
              /**
               * Lat
               * @description Latitude of the place.
               * @default null
               */
              lat: number | null;
              /**
               * Lon
               * @description Longitude of the place.
               * @default null
               */
              lon: number | null;
              /**
               * Name
               * @description Place name.
               * @default null
               */
              name: string | null;
              /**
               * Place Id
               * @description Unique place identifier.
               * @default null
               */
              place_id: string | null;
              /**
               * Postcode
               * @description ZIP or postcode.
               * @default null
               */
              postcode: string | null;
              /**
               * State
               * @description State component of address.
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Street component of address.
               * @default null
               */
              street: string | null;
          };
          /**
           * Type
           * @description GeoJSON feature type, always 'Feature'.
           * @constant
           */
          type: "Feature";
      }[];
      /**
       * Type
       * @description GeoJSON collection type.
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
 * Type of GEOAPIFY's GEOAPIFY_PLACE_DETAILS tool input.
 */
type GEOAPIFY_PLACE_DETAILS_INPUT = {
  /**
   * Features
   * @description Comma-separated list of features to return. Defaults to `details` when request is by `id`.
   * @default null
   */
  features: string | null;
  /**
   * Id
   * @description Place unique identifier returned by Geoapify Places or Geocoding API. Required if `lat` and `lon` are not provided.
   * @default null
   */
  id: string | null;
  /**
   * Lang
   * @description Response language (ISO 639-1 code, two lowercase letters).
   * @default null
   */
  lang: string | null;
  /**
   * Lat
   * @description Latitude of the place. Must be provided together with `lon` if `id` is omitted.
   * @default null
   */
  lat: number | null;
  /**
   * Lon
   * @description Longitude of the place. Must be provided together with `lat` if `id` is omitted.
   * @default null
   */
  lon: number | null;
};

/**
 * Type of GEOAPIFY's GEOAPIFY_PLACE_DETAILS tool output.
 */
type GEOAPIFY_PLACE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Features
       * @description List of GeoJSON feature objects. Each feature has its own feature_type in properties.
       */
      features: {
          /**
           * Geometry
           * @description Geometry of the feature (Point, LineString, Polygon, etc.).
           * @default null
           */
          geometry: {
              [key: string]: unknown;
          } | null;
          /**
           * Properties
           * @description Properties of the feature, including feature_type and metadata.
           */
          properties: {
              [key: string]: unknown;
          };
          /**
           * Type
           * @description Feature object type, always 'Feature'.
           * @constant
           */
          type: "Feature";
      }[];
      /**
       * Type
       * @description Type of the collection, always 'FeatureCollection'.
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
 * Type of GEOAPIFY's GEOAPIFY_POSTCODE tool input.
 */
type GEOAPIFY_POSTCODE_INPUT = {
  /**
   * Countrycode
   * @description Restrict search to country (ISO 3166-1 alpha-2)
   * @default null
   */
  countrycode: string | null;
  /**
   * Format
   * @description Response format; one of: 'json', 'geojson', 'xml'
   * @default null
   * @enum {string|null}
   */
  format: "geojson" | "json" | "xml" | null;
  /**
   * Geometry
   * @description Return geometry as 'point' or 'original' boundary
   * @default null
   * @enum {string|null}
   */
  geometry: "point" | "original" | null;
  /**
   * Lang
   * @description Response language (ISO 639-1 code, 2 letters)
   * @default null
   */
  lang: string | null;
  /**
   * Lat
   * @description Latitude of location; must be provided with lon
   * @default null
   */
  lat: number | null;
  /**
   * Lon
   * @description Longitude of location; must be provided with lat
   * @default null
   */
  lon: number | null;
  /**
   * Postcode
   * @description Postal code to search for
   * @default null
   */
  postcode: string | null;
};

/**
 * Type of GEOAPIFY's GEOAPIFY_POSTCODE tool output.
 */
type GEOAPIFY_POSTCODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bbox
       * @description Bounding box of all features as [minLon, minLat, maxLon, maxLat]
       * @default null
       */
      bbox: number[] | null;
      /**
       * Features
       * @description List of postcode features
       */
      features: {
          /**
           * Geometry
           * @description Geometry data for the feature
           */
          geometry: {
              /**
               * Coordinates
               * @description Coordinates representing the feature geometry
               */
              coordinates: number[];
              /**
               * Type
               * @description Geometry type, e.g., 'Point' or 'Polygon'
               */
              type: string;
          };
          /**
           * Properties
           * @description Properties of the postcode feature
           */
          properties: {
              /**
               * Address Line1
               * @description First line of address
               * @default null
               */
              address_line1: string | null;
              /**
               * Address Line2
               * @description Second line of address
               * @default null
               */
              address_line2: string | null;
              /**
               * City
               * @description City name
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Country Code
               * @description ISO 3166-1 alpha-2 country code
               * @default null
               */
              country_code: string | null;
              /**
               * County
               * @description County name
               * @default null
               */
              county: string | null;
              /**
               * Formatted
               * @description Full formatted address
               * @default null
               */
              formatted: string | null;
              /**
               * Lat
               * @description Latitude of the location
               * @default null
               */
              lat: number | null;
              /**
               * Lon
               * @description Longitude of the location
               * @default null
               */
              lon: number | null;
              /**
               * Municipality
               * @description Municipality name
               * @default null
               */
              municipality: string | null;
              /**
               * Place Id
               * @description Unique place identifier
               * @default null
               */
              place_id: string | null;
              /**
               * Plus Code
               * @description Full Plus Code
               * @default null
               */
              plus_code: string | null;
              /**
               * Plus Code Short
               * @description Short Plus Code
               * @default null
               */
              plus_code_short: string | null;
              /**
               * Postcode
               * @description Postal code
               * @default null
               */
              postcode: string | null;
              /**
               * State
               * @description State name
               * @default null
               */
              state: string | null;
              /**
               * State Code
               * @description State code
               * @default null
               */
              state_code: string | null;
              /**
               * Timezone
               * @description Timezone information
               * @default null
               */
              timezone: {
                  /**
                   * Abbreviation Dst
                   * @description Daylight savings time abbreviation
                   * @default null
                   */
                  abbreviation_DST: string | null;
                  /**
                   * Abbreviation Std
                   * @description Standard time abbreviation
                   * @default null
                   */
                  abbreviation_STD: string | null;
                  /**
                   * Name
                   * @description Time zone name
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Offset Dst
                   * @description Daylight savings time offset string
                   * @default null
                   */
                  offset_DST: string | null;
                  /**
                   * Offset Dst Seconds
                   * @description Daylight savings time offset in seconds
                   * @default null
                   */
                  offset_DST_seconds: number | null;
                  /**
                   * Offset Std
                   * @description Standard time offset string
                   * @default null
                   */
                  offset_STD: string | null;
                  /**
                   * Offset Std Seconds
                   * @description Standard time offset in seconds
                   * @default null
                   */
                  offset_STD_seconds: number | null;
              } | null;
          };
          /**
           * Type
           * @description GeoJSON feature type, typically 'Feature'
           */
          type: string;
      }[];
      /**
       * Type
       * @description GeoJSON type, e.g., 'FeatureCollection'
       */
      type: string;
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
 * Type of GEOAPIFY's GEOAPIFY_REVERSE_GEOCODING tool input.
 */
type GEOAPIFY_REVERSE_GEOCODING_INPUT = {
  /**
   * Format
   * @description Response format: one of geojson, json, xml (default: geojson).
   * @default geojson
   * @enum {string}
   */
  format: "geojson" | "json" | "xml";
  /**
   * Lang
   * @description 2-letter ISO 639-1 language code for the result.
   * @default null
   */
  lang: string | null;
  /**
   * Lat
   * @description Latitude coordinate in decimal degrees.
   */
  lat?: number;
  /**
   * Limit
   * @description Maximum number of results to return (default: 1).
   * @default null
   */
  limit: number | null;
  /**
   * Lon
   * @description Longitude coordinate in decimal degrees.
   */
  lon?: number;
  /**
   * Type
   * @description Address level to search; one of country, state, city, postcode, street, amenity.
   * @default null
   * @enum {string|null}
   */
  type: "country" | "state" | "city" | "postcode" | "street" | "amenity" | null;
};

/**
 * Type of GEOAPIFY's GEOAPIFY_REVERSE_GEOCODING tool output.
 */
type GEOAPIFY_REVERSE_GEOCODING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Features
       * @description List of address features.
       */
      features: {
          /**
           * Geometry
           * @description GeoJSON geometry object.
           */
          geometry: {
              [key: string]: unknown;
          };
          /**
           * Properties
           * @description Feature properties with address details.
           */
          properties: {
              /**
               * Address Line1
               * @description Primary display line (street + number).
               * @default null
               */
              address_line1: string | null;
              /**
               * Address Line2
               * @description Secondary display line.
               * @default null
               */
              address_line2: string | null;
              /**
               * Category
               * @description Place category.
               * @default null
               */
              category: string | null;
              /**
               * City
               * @description City component.
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country component.
               * @default null
               */
              country: string | null;
              /**
               * Country Code
               * @description ISO 3166-1 alpha-2 country code.
               * @default null
               */
              country_code: string | null;
              /**
               * County
               * @description County component.
               * @default null
               */
              county: string | null;
              /**
               * County Code
               * @description County shortcode.
               * @default null
               */
              county_code: string | null;
              /**
               * Datasource
               * @description Data source information.
               * @default null
               */
              datasource: {
                  [key: string]: unknown;
              } | null;
              /**
               * Distance
               * @description Distance in meters to input coordinates.
               * @default null
               */
              distance: number | null;
              /**
               * Formatted
               * @description Formatted display address.
               * @default null
               */
              formatted: string | null;
              /**
               * Housenumber
               * @description House number.
               * @default null
               */
              housenumber: string | null;
              /**
               * Lat
               * @description Result latitude.
               */
              lat: number;
              /**
               * Lon
               * @description Result longitude.
               */
              lon: number;
              /**
               * Name
               * @description Location name.
               * @default null
               */
              name: string | null;
              /**
               * Postcode
               * @description Postcode/ZIP code.
               * @default null
               */
              postcode: string | null;
              /**
               * Rank
               * @description Rank details of the result.
               * @default null
               */
              rank: {
                  /**
                   * Confidence
                   * @description Overall confidence (0-1).
                   */
                  confidence: number;
                  /**
                   * Confidence City Level
                   * @description City-level confidence (0-1).
                   */
                  confidence_city_level: number;
                  /**
                   * Confidence Street Level
                   * @description Street-level confidence (0-1).
                   */
                  confidence_street_level: number;
                  /**
                   * Match Type
                   * @description Match type of the result.
                   * @enum {string}
                   */
                  match_type: "full_match" | "inner_part" | "match_by_building" | "match_by_street" | "match_by_postcode" | "match_by_city_or_disrict" | "match_by_country_or_state";
              } | null;
              /**
               * Result Type
               * @description Result type category.
               * @default null
               * @enum {string|null}
               */
              result_type: "unknown" | "amenity" | "building" | "street" | "suburb" | "district" | "postcode" | "city" | "county" | "state" | "country" | null;
              /**
               * State
               * @description State component.
               * @default null
               */
              state: string | null;
              /**
               * State Code
               * @description State shortcode.
               * @default null
               */
              state_code: string | null;
              /**
               * Street
               * @description Street component.
               * @default null
               */
              street: string | null;
              /**
               * Timezone
               * @description Time zone information.
               * @default null
               */
              timezone: {
                  /**
                   * Abbreviation Dst
                   * @description DST time abbreviation.
                   * @default null
                   */
                  abbreviation_DST: string | null;
                  /**
                   * Abbreviation Std
                   * @description Standard time abbreviation.
                   * @default null
                   */
                  abbreviation_STD: string | null;
                  /**
                   * Name
                   * @description Time zone name.
                   */
                  name: string;
                  /**
                   * Name Alt
                   * @description Alternative time zone name if available.
                   * @default null
                   */
                  name_alt: string | null;
                  /**
                   * Offset Dst
                   * @description Daylight saving offset.
                   */
                  offset_DST: string;
                  /**
                   * Offset Dst Seconds
                   * @description DST offset in seconds.
                   */
                  offset_DST_seconds: number;
                  /**
                   * Offset Std
                   * @description Standard offset.
                   */
                  offset_STD: string;
                  /**
                   * Offset Std Seconds
                   * @description Standard offset in seconds.
                   */
                  offset_STD_seconds: number;
              } | null;
          };
          /**
           * Type
           * @description GeoJSON feature type.
           * @constant
           */
          type: "Feature";
      }[];
      /**
       * Type
       * @description GeoJSON FeatureCollection of results.
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
 * Type of GEOAPIFY's GEOAPIFY_ROUTE_MATRIX tool input.
 */
type GEOAPIFY_ROUTE_MATRIX_INPUT = {
  /**
   * Api Key
   * @description Geoapify API key
   */
  apiKey?: string;
  /**
   * Avoid
   * @description Road types or areas to avoid (see Routing API avoid options)
   * @default null
   */
  avoid: string[] | null;
  /**
   * Max Speed
   * @description Maximum vehicle speed in KPH (10-252)
   * @default null
   */
  max_speed: number | null;
  /**
   * Mode
   * @description Travel mode; see Routing API Travel Modes
   * @default null
   */
  mode: string | null;
  /**
   * Sources
   * @description List of origin waypoints
   * @default null
   */
  sources: {
      /**
       * Location
       * @description Coordinates as [lon, lat]
       */
      location: number[];
  }[] | null;
  /**
   * Targets
   * @description List of destination waypoints
   * @default null
   */
  targets: {
      /**
       * Location
       * @description Coordinates as [lon, lat]
       */
      location: number[];
  }[] | null;
  /**
   * Traffic
   * @description Traffic model; motorized modes only; default 'free_flow'
   * @default null
   * @enum {string|null}
   */
  traffic: "free_flow" | "approximated" | null;
  /**
   * Type
   * @description Route type; default 'balanced'
   * @default null
   * @enum {string|null}
   */
  type: "balanced" | "short" | "less_maneuvers" | null;
  /**
   * Units
   * @description Units for distance; default 'metric'
   * @default null
   * @enum {string|null}
   */
  units: "metric" | "imperial" | null;
};

/**
 * Type of GEOAPIFY's GEOAPIFY_ROUTE_MATRIX tool output.
 */
type GEOAPIFY_ROUTE_MATRIX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sources
       * @description List of source waypoints with matched locations
       */
      sources: {
          /**
           * Location
           * @description Matched road network coordinates [lon, lat]
           */
          location: number[];
          /**
           * Original Location
           * @description Original waypoint coordinates [lon, lat]
           */
          original_location: number[];
      }[];
      /**
       * Sources To Targets
       * @description Matrix of distances and times per source-target pair
       */
      sources_to_targets: {
          /**
           * Distance
           * @description Distance between source and target in meters
           */
          distance: number;
          /**
           * Source Index
           * @description Index of the source waypoint
           */
          source_index: number;
          /**
           * Target Index
           * @description Index of the target waypoint
           */
          target_index: number;
          /**
           * Time
           * @description Travel time between source and target in seconds
           */
          time: number;
      }[][];
      /**
       * Targets
       * @description List of target waypoints with matched locations
       */
      targets: {
          /**
           * Location
           * @description Matched road network coordinates [lon, lat]
           */
          location: number[];
          /**
           * Original Location
           * @description Original waypoint coordinates [lon, lat]
           */
          original_location: number[];
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
 * Type of GEOAPIFY's GEOAPIFY_ROUTE_PLANNER tool input.
 */
type GEOAPIFY_ROUTE_PLANNER_INPUT = {
  /**
   * Agents
   * @description List of agents (vehicles/workers)
   * @default null
   */
  agents: {
      /**
       * Breaks
       * @description Scheduled breaks for this agent
       * @default null
       */
      breaks: {
          /**
           * Duration
           * @description Duration of the break in seconds, must be non-negative
           */
          duration: number;
          /**
           * Time Windows
           * @description Allowed break windows, each as [start, end] in seconds relative to start
           */
          time_windows: number[][];
      }[] | null;
      /**
       * Capabilities
       * @description Tags this agent can serve
       * @default null
       */
      capabilities: string[] | null;
      /**
       * Delivery Capacity
       * @description Max aggregate delivery capacity; infinite if omitted
       * @default null
       */
      delivery_capacity: number | null;
      /**
       * Description
       * @description Human-readable description of the agent
       * @default null
       */
      description: string | null;
      /**
       * End Location
       * @description Ending [lon, lat] coordinates (exclusive with end_location_index)
       * @default null
       */
      end_location: number[] | null;
      /**
       * End Location Index
       * @description Index into global locations list for end (exclusive with end_location)
       * @default null
       */
      end_location_index: number | null;
      /**
       * Id
       * @description Unique identifier for this agent
       * @default null
       */
      id: string | null;
      /**
       * Pickup Capacity
       * @description Max aggregate pickup capacity; infinite if omitted
       * @default null
       */
      pickup_capacity: number | null;
      /**
       * Start Location
       * @description Starting [lon, lat] coordinates (exclusive with start_location_index)
       * @default null
       */
      start_location: number[] | null;
      /**
       * Start Location Index
       * @description Index into global locations list for start (exclusive with start_location)
       * @default null
       */
      start_location_index: number | null;
      /**
       * Time Windows
       * @description Allowed work windows, each as [start, end]
       * @default null
       */
      time_windows: number[][] | null;
  }[] | null;
  /**
   * Avoid
   * @description Avoid rules objects as per Route Planner API
   * @default null
   */
  avoid: {
      /**
       * Type
       * @description Type of avoid rule
       * @enum {string}
       */
      type: "tolls" | "ferries" | "highways" | "locations";
      /**
       * Values
       * @description List of points to avoid (required for type=locations)
       * @default null
       */
      values: {
          /**
           * Lat
           * @description Latitude
           */
          lat: number;
          /**
           * Lon
           * @description Longitude
           */
          lon: number;
      }[] | null;
  }[] | null;
  /**
   * Jobs
   * @description One-way jobs to assign
   * @default null
   */
  jobs: {
      /**
       * Delivery Amount
       * @description Amount to deliver; must not exceed agent capacity
       * @default null
       */
      delivery_amount: number | null;
      /**
       * Description
       * @description Human-readable job description
       * @default null
       */
      description: string | null;
      /**
       * Duration
       * @description Service duration at job in seconds
       * @default null
       */
      duration: number | null;
      /**
       * Id
       * @description Unique job identifier
       * @default null
       */
      id: string | null;
      /**
       * Location
       * @description Job coordinates [lon, lat] (exclusive with location_index)
       * @default null
       */
      location: number[] | null;
      /**
       * Location Index
       * @description Index into locations list for job (exclusive with location)
       * @default null
       */
      location_index: number | null;
      /**
       * Pickup Amount
       * @description Amount to pick up; must not exceed agent capacity
       * @default null
       */
      pickup_amount: number | null;
      /**
       * Priority
       * @description Priority 0-100; higher means more important
       * @default null
       */
      priority: number | null;
      /**
       * Requirements
       * @description Tags required; agent must have matching capability
       * @default null
       */
      requirements: string[] | null;
      /**
       * Time Windows
       * @description Allowed service windows, each as [start, end]
       * @default null
       */
      time_windows: number[][] | null;
  }[] | null;
  /**
   * Locations
   * @description Reusable locations for indexing
   * @default null
   */
  locations: {
      /**
       * Id
       * @description Identifier for this location
       * @default null
       */
      id: string | null;
      /**
       * Location
       * @description Coords [lon, lat]
       */
      location: number[];
  }[] | null;
  /**
   * Max Speed
   * @description Max speed km/h for driving modes
   * @default null
   */
  max_speed: number | null;
  /**
   * Mode
   * @description Travel mode (e.g., drive, bicycle, walk)
   * @default null
   */
  mode: string | null;
  /**
   * Shipments
   * @description Paired pickups/deliveries to assign
   * @default null
   */
  shipments: {
      /**
       * Amount
       * @description Quantity to move; must fit in agent capacity
       * @default null
       */
      amount: number | null;
      /**
       * Delivery
       * @description Delivery endpoint details
       */
      delivery: {
          /**
           * Duration
           * @description Service duration at endpoint in seconds
           * @default null
           */
          duration: number | null;
          /**
           * Location
           * @description Endpoint coords [lon, lat] (exclusive with location_index)
           * @default null
           */
          location: number[] | null;
          /**
           * Location Index
           * @description Index into locations list for endpoint (exclusive with location)
           * @default null
           */
          location_index: number | null;
          /**
           * Time Windows
           * @description Allowed service windows, each as [start, end]
           * @default null
           */
          time_windows: number[][] | null;
      };
      /**
       * Description
       * @description Human-readable description
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique shipment identifier
       */
      id: string;
      /**
       * Pickup
       * @description Pickup endpoint details
       */
      pickup: {
          /**
           * Duration
           * @description Service duration at endpoint in seconds
           * @default null
           */
          duration: number | null;
          /**
           * Location
           * @description Endpoint coords [lon, lat] (exclusive with location_index)
           * @default null
           */
          location: number[] | null;
          /**
           * Location Index
           * @description Index into locations list for endpoint (exclusive with location)
           * @default null
           */
          location_index: number | null;
          /**
           * Time Windows
           * @description Allowed service windows, each as [start, end]
           * @default null
           */
          time_windows: number[][] | null;
      };
      /**
       * Priority
       * @description Priority 0-100; higher means more important
       * @default null
       */
      priority: number | null;
      /**
       * Requirements
       * @description Tags required; agent must have matching capability
       * @default null
       */
      requirements: string[] | null;
  }[] | null;
  /**
   * Traffic
   * @description Traffic model
   * @default null
   * @enum {string|null}
   */
  traffic: "free_flow" | "approximated" | null;
  /**
   * Type
   * @description Route optimization preference
   * @default null
   * @enum {string|null}
   */
  type: "balanced" | "short" | "less_maneuvers" | null;
  /**
   * Units
   * @description Distance units
   * @default null
   * @enum {string|null}
   */
  units: "metric" | "imperial" | null;
};

/**
 * Type of GEOAPIFY's GEOAPIFY_ROUTE_PLANNER tool output.
 */
type GEOAPIFY_ROUTE_PLANNER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Features */
      features: {
          /** Geometry */
          geometry: {
              [key: string]: unknown;
          };
          /** Properties */
          properties: {
              /** Actions */
              actions: {
                  /**
                   * Duration
                   * @description Duration in seconds
                   */
                  duration: number;
                  /** Job Id */
                  job_id: string | null;
                  /** Job Index */
                  job_index: number | null;
                  /** Shipment Id */
                  shipment_id: string | null;
                  /** Shipment Index */
                  shipment_index: number | null;
                  /**
                   * Start Time
                   * @description Action start time in seconds
                   */
                  start_time: number;
                  /**
                   * Type
                   * @description Action type
                   * @enum {string}
                   */
                  type: "start" | "end" | "pickup" | "delivery";
                  /** Waypoint Index */
                  waypoint_index: number | null;
              }[];
              /** Agent Index */
              agent_index: number;
              /** Distance */
              distance: number;
              /** Legs */
              legs: {
                  /**
                   * Distance
                   * @description Distance in meters
                   */
                  distance: number;
                  /** From Waypoint Index */
                  from_waypoint_index: number;
                  /** Steps */
                  steps: {
                      /**
                       * Distance
                       * @description Distance in meters
                       */
                      distance: number;
                      /** From Index */
                      from_index: number;
                      /**
                       * Time
                       * @description Time in seconds
                       */
                      time: number;
                      /** To Index */
                      to_index: number;
                  }[];
                  /**
                   * Time
                   * @description Time in seconds
                   */
                  time: number;
                  /** To Waypoint Index */
                  to_waypoint_index: number;
              }[];
              /** Mode */
              mode: string;
              /** Start Time */
              start_time: number;
              /** Time */
              time: number;
              /** Total Time */
              total_time: number;
              /** Waypoints */
              waypoints: {
                  /** Actions */
                  actions: {
                      /**
                       * Duration
                       * @description Duration in seconds
                       */
                      duration: number;
                      /** Job Id */
                      job_id: string | null;
                      /** Job Index */
                      job_index: number | null;
                      /** Shipment Id */
                      shipment_id: string | null;
                      /** Shipment Index */
                      shipment_index: number | null;
                      /**
                       * Start Time
                       * @description Action start time in seconds
                       */
                      start_time: number;
                      /**
                       * Type
                       * @description Action type
                       * @enum {string}
                       */
                      type: "start" | "end" | "pickup" | "delivery";
                      /** Waypoint Index */
                      waypoint_index: number | null;
                  }[];
                  /** Duration */
                  duration: number;
                  /** Location */
                  location: number[];
                  /** Next Leg Index */
                  next_leg_index: number | null;
                  /** Original Location */
                  original_location: number[];
                  /** Original Location Id */
                  original_location_id: string | null;
                  /** Original Location Index */
                  original_location_index: number | null;
                  /** Prev Leg Index */
                  prev_leg_index: number | null;
                  /** Start Time */
                  start_time: number;
              }[];
          };
          /**
           * Type
           * @constant
           */
          type: "Feature";
      }[];
      /** Properties */
      properties: {
          /** Mode */
          mode: string;
          /** Params */
          params: {
              [key: string]: unknown;
          };
          /** Unassigned Agents */
          unassignedAgents: number[] | null;
          /** Unassigned Jobs */
          unassignedJobs: number[] | null;
          /** Unassigned Shipments */
          unassignedShipments: number[] | null;
          /** Unassigned Agents */
          unassigned_agents: number[] | null;
          /** Unassigned Jobs */
          unassigned_jobs: number[] | null;
          /** Unassigned Shipments */
          unassigned_shipments: number[] | null;
      };
      /**
       * Type
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
 * Type of GEOAPIFY's GEOAPIFY_ROUTING tool input.
 */
type GEOAPIFY_ROUTING_INPUT = {
  /**
   * Avoid
   * @description Avoid options separated by '|', e.g., 'tolls|ferries:0.5|highways'.
   * @default null
   */
  avoid: string | null;
  /**
   * Details
   * @description Comma-separated extra details: instruction_details, route_details, elevation.
   * @default null
   */
  details: string | null;
  /**
   * Format
   * @description Response format: geojson (default), json, xml.
   * @default geojson
   * @enum {string}
   */
  format: "geojson" | "json" | "xml";
  /**
   * Lang
   * @description Language code for instructions (e.g., en, de, fr).
   * @default null
   * @enum {string|null}
   */
  lang: "bg" | "ca" | "cs" | "da" | "de" | "el" | "en-GB" | "en" | "es" | "et" | "fi" | "fr" | "hi" | "hu" | "it" | "ja" | "nb-NO" | "nl" | "pl" | "pt-BR" | "pt" | "ro" | "ru" | "sk" | "sl" | "sv" | "tr" | "uk" | null;
  /**
   * Max Speed
   * @description Max vehicle speed in KPH (10-252).
   * @default null
   */
  max_speed: number | null;
  /**
   * Mode
   * @description Travel mode (default: drive).
   * @default drive
   * @enum {string}
   */
  mode: "drive" | "light_truck" | "medium_truck" | "truck" | "heavy_truck" | "truck_dangerous_goods" | "long_truck" | "bus" | "scooter" | "motorcycle" | "bicycle" | "mountain_bike" | "road_bike" | "walk" | "hike" | "transit" | "approximated_transit";
  /**
   * Traffic
   * @description Traffic model for motorized modes (default: free_flow).
   * @default free_flow
   * @enum {string}
   */
  traffic: "free_flow" | "approximated";
  /**
   * Type
   * @description Route optimization: balanced (default), short, less_maneuvers. (less_maneuvers only for motorized road modes)
   * @default balanced
   * @enum {string}
   */
  type: "balanced" | "short" | "less_maneuvers";
  /**
   * Units
   * @description Distance units; metric (default) or imperial.
   * @default metric
   * @enum {string}
   */
  units: "metric" | "imperial";
  /**
   * Waypoints
   * @description Two or more waypoints in 'lat,lon' or 'lonlat:lon,lat' format, pipe-separated. E.g. '36.734770,-76.610637|36.761226,-76.488354'
   */
  waypoints?: string;
};

/**
 * Type of GEOAPIFY's GEOAPIFY_ROUTING tool output.
 */
type GEOAPIFY_ROUTING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Features
       * @description List of routing features.
       */
      features: {
          /**
           * Geometry
           * @description Route geometry.
           */
          geometry: {
              /**
               * Coordinates
               * @description Coordinates for MultiLineString geometry.
               */
              coordinates: number[][][];
              /**
               * Type
               * @description Geometry type, always MultiLineString.
               * @constant
               */
              type: "MultiLineString";
          };
          /**
           * Properties
           * @description Route properties.
           */
          properties: {
              /**
               * Distance
               * @description Total route distance.
               */
              distance: number;
              /**
               * Distance Units
               * @description Distance units (Miles or Meters).
               */
              distance_units: string;
              /**
               * Ferry
               * @description True if route uses a ferry.
               */
              ferry: boolean;
              /**
               * Legs
               * @description Array of route legs.
               */
              legs: {
                  /**
                   * Country Code
                   * @description Country codes crossed by the leg.
                   * @default null
                   */
                  country_code: string[] | null;
                  /**
                   * Distance
                   * @description Leg distance.
                   */
                  distance: number;
                  /**
                   * Elevation
                   * @description Elevations along leg geometry points.
                   * @default null
                   */
                  elevation: number[] | null;
                  /**
                   * Elevation Range
                   * @description Distance-height pairs for elevation.
                   * @default null
                   */
                  elevation_range: [
                      number,
                      number
                  ][] | null;
                  /**
                   * Steps
                   * @description Steps for this leg.
                   */
                  steps: {
                      /**
                       * Bridge
                       * @description True if step is on bridge.
                       * @default null
                       */
                      bridge: boolean | null;
                      /**
                       * Distance
                       * @description Step distance.
                       */
                      distance: number;
                      /**
                       * Elevation
                       * @description Average elevation.
                       * @default null
                       */
                      elevation: number | null;
                      /**
                       * Elevation Gain
                       * @description Elevation gain.
                       * @default null
                       */
                      elevation_gain: number | null;
                      /**
                       * Ferry
                       * @description True if step uses ferry.
                       */
                      ferry: boolean;
                      /**
                       * From Index
                       * @description Start index in leg geometry.
                       */
                      from_index: number;
                      /**
                       * StepInstruction
                       * @description Turn-by-turn instruction object.
                       * @default null
                       */
                      instruction: {
                          /**
                           * Contains Next Instruction
                           * @description True if instruction includes next maneuver.
                           * @default null
                           */
                          contains_next_instruction: boolean | null;
                          /**
                           * Exit Number
                           * @description Exit numbers considered.
                           * @default null
                           */
                          exitNumber: string[] | null;
                          /**
                           * Exit Road Name
                           * @description Exit road names considered.
                           * @default null
                           */
                          exitRoadName: string[] | null;
                          /**
                           * Exit Towards
                           * @description Exit directions considered.
                           * @default null
                           */
                          exitTowards: string[] | null;
                          /**
                           * Post Transition Instruction
                           * @description Instruction after transition.
                           * @default null
                           */
                          post_transition_instruction: string | null;
                          /**
                           * Pre Transition Instruction
                           * @description Instruction before transition.
                           * @default null
                           */
                          pre_transition_instruction: string | null;
                          /**
                           * Roundabout Exit
                           * @description Roundabout exit number.
                           * @default null
                           */
                          roundabout_exit: number | null;
                          /**
                           * Streets
                           * @description List of street names for the maneuver.
                           * @default null
                           */
                          streets: string[] | null;
                          /**
                           * Text
                           * @description Navigation instruction text.
                           */
                          text: string;
                          /**
                           * Transition Instruction
                           * @description Transition instruction text.
                           * @default null
                           */
                          transition_instruction: string | null;
                          /**
                           * Type
                           * @description Maneuver type of the instruction.
                           */
                          type: string;
                      } | null;
                      /**
                       * Lane Count
                       * @description Number of lanes.
                       * @default null
                       */
                      lane_count: number | null;
                      /**
                       * Max Elevation
                       * @description Maximum elevation.
                       * @default null
                       */
                      max_elevation: number | null;
                      /**
                       * Min Elevation
                       * @description Minimum elevation.
                       * @default null
                       */
                      min_elevation: number | null;
                      /**
                       * Name
                       * @description Road name.
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Rightside
                       * @description True if driving on right side.
                       * @default null
                       */
                      rightside: boolean | null;
                      /**
                       * Road Class
                       * @description Road class.
                       * @default null
                       */
                      road_class: string | null;
                      /**
                       * Roundabout
                       * @description True if step is at roundabout.
                       * @default null
                       */
                      roundabout: boolean | null;
                      /**
                       * Speed
                       * @description Estimated speed for step.
                       * @default null
                       */
                      speed: number | null;
                      /**
                       * Speed Limit
                       * @description Speed limit at step.
                       * @default null
                       */
                      speed_limit: number | null;
                      /**
                       * Surface
                       * @description Road surface type.
                       * @default null
                       */
                      surface: string | null;
                      /**
                       * Time
                       * @description Step travel time in seconds.
                       */
                      time: number;
                      /**
                       * To Index
                       * @description End index in leg geometry.
                       */
                      to_index: number;
                      /**
                       * Toll
                       * @description True if step has toll.
                       */
                      toll: boolean;
                      /**
                       * Traversability
                       * @description Traversability of segment.
                       * @default null
                       */
                      traversability: string | null;
                      /**
                       * Truck Limit
                       * @description Truck speed limit.
                       * @default null
                       */
                      truck_limit: number | null;
                      /**
                       * Tunnel
                       * @description True if step is in tunnel.
                       * @default null
                       */
                      tunnel: boolean | null;
                  }[];
                  /**
                   * Time
                   * @description Leg travel time in seconds.
                   */
                  time: number;
              }[];
              /**
               * Time
               * @description Estimated travel time in seconds.
               */
              time: number;
              /**
               * Toll
               * @description True if route uses tolls.
               */
              toll: boolean;
          };
          /**
           * Type
           * @description GeoJSON feature type.
           * @constant
           */
          type: "Feature";
      }[];
      /**
       * Properties
       * @description Echoed request parameters.
       */
      properties: {
          /**
           * Avoid
           * @description Avoid options set.
           * @default null
           */
          avoid: string | null;
          /**
           * Details
           * @description Details flags requested.
           * @default null
           */
          details: string | null;
          /**
           * Format
           * @description Response format.
           */
          format: string;
          /**
           * Lang
           * @description Language code used.
           * @default null
           */
          lang: string | null;
          /**
           * Max Speed
           * @description Max speed applied.
           * @default null
           */
          max_speed: number | null;
          /**
           * Mode
           * @description Travel mode.
           */
          mode: string;
          /**
           * Traffic
           * @description Traffic model used.
           */
          traffic: string;
          /**
           * Type
           * @description Route optimization type.
           */
          type: string;
          /**
           * Units
           * @description Distance units.
           */
          units: string;
          /**
           * Waypoints
           * @description Waypoints used for calculation.
           */
          waypoints: string;
      };
      /**
       * Type
       * @description GeoJSON FeatureCollection type.
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
 * Type map of all available tool input types for toolkit "GEOAPIFY".
 */
export type GEOAPIFY_TOOL_INPUTS = {
  ADDRESS_AUTOCOMPLETE: GEOAPIFY_ADDRESS_AUTOCOMPLETE_INPUT
  BATCH_REQUESTS: GEOAPIFY_BATCH_REQUESTS_INPUT
  BOUNDARIES: GEOAPIFY_BOUNDARIES_INPUT
  FORWARD_GEOCODING: GEOAPIFY_FORWARD_GEOCODING_INPUT
  GEOMETRY: GEOAPIFY_GEOMETRY_INPUT
  IP_GEOLOCATION: GEOAPIFY_IP_GEOLOCATION_INPUT
  ISOLINE: GEOAPIFY_ISOLINE_INPUT
  MAP_MATCHING: GEOAPIFY_MAP_MATCHING_INPUT
  MAP_TILES: GEOAPIFY_MAP_TILES_INPUT
  MARKER_ICON: GEOAPIFY_MARKER_ICON_INPUT
  PLACES: GEOAPIFY_PLACES_INPUT
  PLACE_DETAILS: GEOAPIFY_PLACE_DETAILS_INPUT
  POSTCODE: GEOAPIFY_POSTCODE_INPUT
  REVERSE_GEOCODING: GEOAPIFY_REVERSE_GEOCODING_INPUT
  ROUTE_MATRIX: GEOAPIFY_ROUTE_MATRIX_INPUT
  ROUTE_PLANNER: GEOAPIFY_ROUTE_PLANNER_INPUT
  ROUTING: GEOAPIFY_ROUTING_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GEOAPIFY".
 */
export type GEOAPIFY_TOOL_OUTPUTS = {
  ADDRESS_AUTOCOMPLETE: GEOAPIFY_ADDRESS_AUTOCOMPLETE_OUTPUT
  BATCH_REQUESTS: GEOAPIFY_BATCH_REQUESTS_OUTPUT
  BOUNDARIES: GEOAPIFY_BOUNDARIES_OUTPUT
  FORWARD_GEOCODING: GEOAPIFY_FORWARD_GEOCODING_OUTPUT
  GEOMETRY: GEOAPIFY_GEOMETRY_OUTPUT
  IP_GEOLOCATION: GEOAPIFY_IP_GEOLOCATION_OUTPUT
  ISOLINE: GEOAPIFY_ISOLINE_OUTPUT
  MAP_MATCHING: GEOAPIFY_MAP_MATCHING_OUTPUT
  MAP_TILES: GEOAPIFY_MAP_TILES_OUTPUT
  MARKER_ICON: GEOAPIFY_MARKER_ICON_OUTPUT
  PLACES: GEOAPIFY_PLACES_OUTPUT
  PLACE_DETAILS: GEOAPIFY_PLACE_DETAILS_OUTPUT
  POSTCODE: GEOAPIFY_POSTCODE_OUTPUT
  REVERSE_GEOCODING: GEOAPIFY_REVERSE_GEOCODING_OUTPUT
  ROUTE_MATRIX: GEOAPIFY_ROUTE_MATRIX_OUTPUT
  ROUTE_PLANNER: GEOAPIFY_ROUTE_PLANNER_OUTPUT
  ROUTING: GEOAPIFY_ROUTING_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GEOAPIFY toolkit.
 */
export const GEOAPIFY = {
  slug: "geoapify",
  tools: {
    /**
     * Tool to fetch address suggestions based on partial input. Use when you need to get predictive suggestions from incomplete address text.
     */
    ADDRESS_AUTOCOMPLETE: "GEOAPIFY_ADDRESS_AUTOCOMPLETE",
    /**
     * Tool to create or retrieve batch jobs. Use when processing multiple API calls asynchronously in one operation.
     */
    BATCH_REQUESTS: "GEOAPIFY_BATCH_REQUESTS",
    /**
     * Tool to retrieve administrative boundaries a location is part of. Use when you have either a place ID or coordinates and need GeoJSON boundaries. Returns a FeatureCollection.
     */
    BOUNDARIES: "GEOAPIFY_BOUNDARIES",
    /**
     * Tool to convert an address into geographic coordinates. Use when you need latitude and longitude from an address.
     */
    FORWARD_GEOCODING: "GEOAPIFY_FORWARD_GEOCODING",
    /**
     * Tool to perform geometric operations on stored polygon geometries. Use when combining or intersecting multiple stored geometries.
     */
    GEOMETRY: "GEOAPIFY_GEOMETRY",
    /**
     * Tool to determine geographic location of an IP address. Use when you need to lookup location information by IP.
     */
    IP_GEOLOCATION: "GEOAPIFY_IP_GEOLOCATION",
    /**
     * Tool to generate isochrone or isodistance isolines. Use when visualizing reachable areas from a point; use `id` to poll ongoing calculations.
     */
    ISOLINE: "GEOAPIFY_ISOLINE",
    /**
     * Tool to snap GPS traces to the road network and correct inaccuracies. Use when raw GPS points need alignment to roads.
     */
    MAP_MATCHING: "GEOAPIFY_MAP_MATCHING",
    /**
     * Tool to fetch raster map tiles or style JSON from Geoapify. Use when rendering custom maps with specific styles.
     */
    MAP_TILES: "GEOAPIFY_MAP_TILES",
    /**
     * Tool to create custom map marker icons. Use when you need a tailored marker after defining map annotations.
     */
    MARKER_ICON: "GEOAPIFY_MARKER_ICON",
    /**
     * Tool to search for points of interest within a specified area. Use when you need POIs matching categories after defining spatial filter or bias.
     */
    PLACES: "GEOAPIFY_PLACES",
    /**
     * Tool to retrieve detailed information about a specific place. Use when you have a place ID or coordinates and need comprehensive metadata.
     */
    PLACE_DETAILS: "GEOAPIFY_PLACE_DETAILS",
    /**
     * Tool to retrieve postcode information for a location. Use when you need to fetch postcode details based on a given postcode or geographic coordinates.
     */
    POSTCODE: "GEOAPIFY_POSTCODE",
    /**
     * Tool to reverse geocode coordinates into a structured address. Use when converting lat/lon to human-readable addresses.
     */
    REVERSE_GEOCODING: "GEOAPIFY_REVERSE_GEOCODING",
    /**
     * Tool to compute travel time and distance matrices. Use when you need durations and distances between multiple origin and destination pairs.
     */
    ROUTE_MATRIX: "GEOAPIFY_ROUTE_MATRIX",
    /**
     * Tool to optimize multi-agent routes and schedules. Use after defining agents and jobs/shipments.
     */
    ROUTE_PLANNER: "GEOAPIFY_ROUTE_PLANNER",
    /**
     * Tool to calculate routes between multiple waypoints. Use when you need both distance, time, and turn-by-turn directions for two or more coordinates.
     */
    ROUTING: "GEOAPIFY_ROUTING",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GEOAPIFY".
 */
export type GEOAPIFY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GEOAPIFY".
 */
export type GEOAPIFY_TRIGGER_EVENTS = {}
