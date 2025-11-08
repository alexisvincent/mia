// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MAPBOX's MAPBOX_GEOCODING_BATCH tool input.
 */
type MAPBOX_GEOCODING_BATCH_INPUT = {
  /**
   * Autocomplete
   * @description Whether to return autocomplete results (forward only; default true).
   * @default null
   */
  autocomplete: boolean | null;
  /**
   * Bbox
   * @description Bounding box to restrict results: minLon,minLat,maxLon,maxLat.
   * @default null
   */
  bbox: string | null;
  /**
   * Coordinates
   * @description List of [lon, lat] pairs for reverse geocoding (up to 50 entries).
   * @default null
   */
  coordinates: number[][] | null;
  /**
   * Country
   * @description Filter results to one or more ISO 3166 alpha-2 country codes (comma-separated).
   * @default null
   */
  country: string | null;
  /**
   * Fuzzy Match
   * @description Whether to allow approximate string matching (forward only; default true).
   * @default null
   */
  fuzzy_match: boolean | null;
  /**
   * Language
   * @description IETF language tag(s) for returned text (comma-separated).
   * @default null
   */
  language: string | null;
  /**
   * Limit
   * @description Maximum number of results per query (1–10).
   * @default null
   */
  limit: number | null;
  /**
   * Proximity
   * @description Bias results toward a geographic location: lon,lat or 'ip'.
   * @default null
   */
  proximity: string | null;
  /**
   * Queries
   * @description List of search text strings for forward geocoding (up to 50 entries).
   * @default null
   */
  queries: string[] | null;
  /**
   * Reverse Mode
   * @description Reverse geocoding mode: 'distance' or 'score' (reverse only).
   * @default null
   * @enum {string|null}
   */
  reverse_mode: "distance" | "score" | null;
  /**
   * Routing
   * @description Include routable point metadata for address features.
   * @default null
   */
  routing: boolean | null;
  /**
   * Types
   * @description Comma-separated list of feature types to limit results.
   * @default null
   */
  types: string | null;
  /**
   * Worldview
   * @description Viewworld to bias results (e.g., 'us', 'cn').
   * @default null
   * @enum {string|null}
   */
  worldview: "ar" | "cn" | "in" | "jp" | "ma" | "rs" | "ru" | "tr" | "us" | null;
};

/**
 * Type of MAPBOX's MAPBOX_GEOCODING_BATCH tool output.
 */
type MAPBOX_GEOCODING_BATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attribution
       * @description Attribution text.
       */
      attribution: string;
      /**
       * Features
       * @description Array of returned features.
       */
      features: {
          /**
           * Bbox
           * @description Bounding box of the feature.
           * @default null
           */
          bbox: number[] | null;
          /**
           * Center
           * @description Center point [lon, lat].
           */
          center: number[];
          /**
           * Context
           * @description Feature context (parent features).
           * @default null
           */
          context: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Geometry
           * @description GeoJSON geometry object.
           */
          geometry: {
              /**
               * Coordinates
               * @description [lon, lat] coordinates.
               */
              coordinates: number[];
              /**
               * Interpolated
               * @description Whether coordinates are interpolated.
               * @default null
               */
              interpolated: boolean | null;
              /**
               * Omitted
               * @description Whether geometry omitted for data protection.
               * @default null
               */
              omitted: boolean | null;
              /**
               * Type
               * @description GeoJSON geometry type, e.g., 'Point'.
               */
              type: string;
          };
          /**
           * Id
           * @description Unique identifier of the feature.
           */
          id: string;
          /**
           * Language
           * @description Language of the feature name.
           * @default null
           */
          language: string | null;
          /**
           * Matching Place Name
           * @description Matched place name for highlighting.
           * @default null
           */
          matching_place_name: string | null;
          /**
           * Matching Text
           * @description Matched text for highlighting.
           * @default null
           */
          matching_text: string | null;
          /**
           * Place Name
           * @description Full feature label with hierarchy.
           */
          place_name: string;
          /**
           * Place Type
           * @description One or more feature types.
           */
          place_type: string[];
          /**
           * Properties
           * @description Additional feature properties.
           * @default null
           */
          properties: {
              [key: string]: unknown;
          } | null;
          /**
           * Relevance
           * @description Relevance score (0–1).
           */
          relevance: number;
          /**
           * RoutablePoints
           * @description Routable point metadata.
           * @default null
           */
          routable_points: {
              /**
               * Points
               * @description List of routable points.
               * @default null
               */
              points: {
                  /**
                   * Coordinates
                   * @description [lon, lat] coordinates of a routable point.
                   */
                  coordinates: number[];
              }[] | null;
          } | null;
          /**
           * Text
           * @description Primary feature label.
           */
          text: string;
          /**
           * Type
           * @description Feature type.
           * @constant
           */
          type: "Feature";
      }[];
      /**
       * Query
       * @description Query tokens or lon/lat pair.
       */
      query: unknown[];
      /**
       * Type
       * @description Collection type.
       * @constant
       */
      type: "FeatureCollection";
  }[];
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
 * Type of MAPBOX's MAPBOX_GEOCODING_FORWARD tool input.
 */
type MAPBOX_GEOCODING_FORWARD_INPUT = {
  /**
   * Address Line1
   * @description Combined house number and street name for structured input.
   * @default null
   */
  address_line1: string | null;
  /**
   * Address Number
   * @description House number component for structured input.
   * @default null
   */
  address_number: string | null;
  /**
   * Autocomplete
   * @description Return autocomplete results (default true).
   * @default true
   */
  autocomplete: boolean | null;
  /**
   * Bbox
   * @description Limit results to a bounding box: 'minLon,minLat,maxLon,maxLat'.
   * @default null
   */
  bbox: string | null;
  /**
   * Block
   * @description Block component (used in some countries like Japan).
   * @default null
   */
  block: string | null;
  /**
   * Country
   * @description ISO 3166-1 alpha-2 country code or full country name for structured input, or comma-separated list of codes to filter results.
   * @default null
   */
  country: string | null;
  /**
   * Format
   * @description Response format: 'geojson' (default) or 'v5' for backward compatibility.
   * @default geojson
   * @enum {string|null}
   */
  format: "geojson" | "v5" | null;
  /**
   * Language
   * @description Comma-separated IETF language tags affecting response text and ranking.
   * @default null
   */
  language: string | null;
  /**
   * Limit
   * @description Maximum number of results (default 5, max 10).
   * @default 5
   */
  limit: number | null;
  /**
   * Permanent
   * @description Whether results may be stored permanently (default false).
   * @default false
   */
  permanent: boolean | null;
  /**
   * Place
   * @description City or municipality component for structured input.
   * @default null
   */
  place: string | null;
  /**
   * Postcode
   * @description Postal code component for structured input.
   * @default null
   */
  postcode: string | null;
  /**
   * Proximity
   * @description Bias results to this 'lon,lat' or 'ip' for IP-based biasing.
   * @default null
   */
  proximity: string | null;
  /**
   * Q
   * @description Free-form search text (URL-encoded, ≤256 chars, ≤20 tokens, no semicolons). Required if no structured fields are provided.
   * @default null
   */
  q: string | null;
  /**
   * Region
   * @description State or region component for structured input.
   * @default null
   */
  region: string | null;
  /**
   * Street
   * @description Street name component for structured input.
   * @default null
   */
  street: string | null;
  /**
   * Types
   * @description Comma-separated filter of feature types: country, region, postcode, district, place, locality, neighborhood, street, address.
   * @default null
   */
  types: string | null;
  /**
   * Worldview
   * @description Boundary worldview for results (default 'us').
   * @default us
   * @enum {string|null}
   */
  worldview: "ar" | "cn" | "in" | "jp" | "ma" | "rs" | "ru" | "tr" | "us" | null;
};

/**
 * Type of MAPBOX's MAPBOX_GEOCODING_FORWARD tool output.
 */
type MAPBOX_GEOCODING_FORWARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attribution
       * @description Attribution text for the returned data.
       * @default null
       */
      attribution: string | null;
      /**
       * Features
       * @description Array of matching features ordered by relevance.
       */
      features: {
          /**
           * Geometry
           * @description Geometry of the result.
           */
          geometry: {
              /**
               * Coordinates
               * @description Longitude and latitude pair: [lon, lat].
               */
              coordinates: number[];
              /**
               * Type
               * @description Type of geometry, always 'Point'.
               * @constant
               */
              type: "Point";
          };
          /**
           * Id
           * @description Feature ID (same as properties.mapbox_id).
           */
          id: string;
          /**
           * Properties
           * @description Properties of the result.
           */
          properties: {
              /**
               * Bbox
               * @description Bounding box [minLon, minLat, maxLon, maxLat] of the result.
               * @default null
               */
              bbox: number[] | null;
              /**
               * Context
               * @description Hierarchical parent contexts.
               * @default null
               */
              context: {
                  /**
                   * Country Code
                   * @description ISO 3166-1 alpha-2 country code, if available.
                   * @default null
                   */
                  country_code: string | null;
                  /**
                   * Country Code Alpha 3
                   * @description ISO 3166-1 alpha-3 country code, if available.
                   * @default null
                   */
                  country_code_alpha_3: string | null;
                  /**
                   * Mapbox Id
                   * @description Unique Mapbox ID of this context object.
                   */
                  mapbox_id: string;
                  /**
                   * Name
                   * @description Name of the context object.
                   */
                  name: string;
                  /**
                   * Region Code
                   * @description ISO region code, if available.
                   * @default null
                   */
                  region_code: string | null;
                  /**
                   * Region Code Full
                   * @description Full region code, if available.
                   * @default null
                   */
                  region_code_full: string | null;
                  /**
                   * Short Code
                   * @description Context short code, if available.
                   * @default null
                   */
                  short_code: string | null;
                  /**
                   * Wikidata Id
                   * @description Wikidata identifier, if available.
                   * @default null
                   */
                  wikidata_id: string | null;
              }[] | null;
              /**
               * CoordinatesDetail
               * @description Detailed coordinates and accuracy information.
               * @default null
               */
              coordinates: {
                  /**
                   * Accuracy
                   * @description Accuracy: rooftop | parcel | point | interpolated | approximate | intersection.
                   * @default null
                   */
                  accuracy: string | null;
                  /**
                   * Latitude
                   * @description Latitude of the result.
                   */
                  latitude: number;
                  /**
                   * Longitude
                   * @description Longitude of the result.
                   */
                  longitude: number;
                  /**
                   * Routable Points
                   * @description Alternative routable points for navigation.
                   * @default null
                   */
                  routable_points: {
                      /**
                       * Latitude
                       * @description Latitude of the point.
                       */
                      latitude: number;
                      /**
                       * Longitude
                       * @description Longitude of the point.
                       */
                      longitude: number;
                      /**
                       * Name
                       * @description Name of the routable point.
                       */
                      name: string;
                  }[] | null;
              } | null;
              /**
               * Feature Type
               * @description Type of the returned feature.
               * @enum {string}
               */
              feature_type: "country" | "region" | "postcode" | "district" | "place" | "locality" | "neighborhood" | "street" | "address";
              /**
               * Full Address
               * @description Concatenation of preferred name and formatted place context.
               * @default null
               */
              full_address: string | null;
              /**
               * Mapbox Id
               * @description Unique place ID in Mapbox search database.
               */
              mapbox_id: string;
              /**
               * Match Code
               * @description Smart address match status per component and overall confidence.
               * @default null
               */
              match_code: {
                  [key: string]: string;
              } | null;
              /**
               * Name
               * @description Formatted address or place name.
               */
              name: string;
              /**
               * Name Preferred
               * @description Preferred or canonical name, if available.
               * @default null
               */
              name_preferred: string | null;
              /**
               * Place Formatted
               * @description Formatted representation of the place hierarchy (place, region, country, postcode).
               * @default null
               */
              place_formatted: string | null;
          };
          /**
           * Type
           * @description Type of this object, always 'Feature'.
           * @constant
           */
          type: "Feature";
      }[];
      /**
       * Type
       * @description Type of this object, always 'FeatureCollection'.
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
 * Type of MAPBOX's MAPBOX_GEOCODING_PERMANENT_FORWARD tool input.
 */
type MAPBOX_GEOCODING_PERMANENT_FORWARD_INPUT = {
  /**
   * Autocomplete
   * @description Include autocomplete results that start with the query string.
   * @default true
   */
  autocomplete: boolean | null;
  /**
   * Bbox
   * @description Limit results to bounding box: minLon,minLat,maxLon,maxLat; cannot cross 180th meridian.
   * @default null
   */
  bbox: string | null;
  /**
   * Country
   * @description Comma-separated ISO 3166-1 alpha-2 country codes to limit results.
   * @default null
   */
  country: string | null;
  /**
   * Fuzzy Match
   * @description Allow approximate (fuzzy) matching.
   * @default true
   */
  fuzzyMatch: boolean | null;
  /**
   * Language
   * @description Comma-separated IETF language tags (up to 20 unique) controlling language of results.
   * @default null
   */
  language: string | null;
  /**
   * Limit
   * @description Maximum number of results to return (1-10).
   * @default 5
   */
  limit: number | null;
  /**
   * Proximity
   * @description Bias results toward this location: 'lon,lat' or 'ip'.
   * @default null
   */
  proximity: string | null;
  /**
   * Routing
   * @description Request routable points metadata for address features.
   * @default false
   */
  routing: boolean | null;
  /**
   * Search Text
   * @description URL-encoded UTF-8 search text (max 256 chars, max 20 tokens, no semicolons).
   */
  search_text?: string;
  /**
   * Types
   * @description Comma-separated list of feature types: country,region,postcode,district,place,locality,neighborhood,address.
   * @default null
   */
  types: string | null;
  /**
   * Worldview
   * @description Return features according to worldview; one of ar,cn,in,jp,ma,rs,ru,tr,us.
   * @default us
   * @enum {string|null}
   */
  worldview: "ar" | "cn" | "in" | "jp" | "ma" | "rs" | "ru" | "tr" | "us" | null;
};

/**
 * Type of MAPBOX's MAPBOX_GEOCODING_PERMANENT_FORWARD tool output.
 */
type MAPBOX_GEOCODING_PERMANENT_FORWARD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attribution
       * @description Attribution for results.
       * @default null
       */
      attribution: string | null;
      /**
       * Features
       * @description Array of Feature objects.
       */
      features: {
          /**
           * Address
           * @description House number for address features.
           * @default null
           */
          address: string | null;
          /**
           * Bbox
           * @description Bounding box of the feature [minX,minY,maxX,maxY].
           * @default null
           */
          bbox: number[] | null;
          /**
           * Center
           * @description Center point [longitude,latitude].
           */
          center: number[];
          /**
           * Context
           * @description Array of context feature objects.
           * @default null
           */
          context: {
              /**
               * Id
               * @description Identifier of context feature.
               */
              id: string;
              /**
               * Short Code
               * @description ISO 3166 country/region code.
               * @default null
               */
              short_code: string | null;
              /**
               * Text
               * @description Text label of the context feature.
               */
              text: string;
              /**
               * Wikidata
               * @description Wikidata identifier.
               * @default null
               */
              wikidata: string | null;
          }[] | null;
          /**
           * Geometry
           * @description Geometric representation.
           */
          geometry: {
              /**
               * Coordinates
               * @description Coordinates [longitude, latitude].
               */
              coordinates: number[];
              /**
               * Interpolated
               * @description Indicates if coordinate is interpolated.
               * @default null
               */
              interpolated: boolean | null;
              /**
               * Omitted
               * @description Indicates if coordinate is omitted.
               * @default null
               */
              omitted: boolean | null;
              /**
               * Type
               * @description Geometry type, e.g., 'Point'.
               */
              type: string;
          };
          /**
           * Id
           * @description Feature identifier.
           */
          id: string;
          /**
           * Language
           * @description Primary language of the result.
           * @default null
           */
          language: string | null;
          /**
           * Matching Place Name
           * @description Closest matching localized place name.
           * @default null
           */
          matching_place_name: string | null;
          /**
           * Matching Text
           * @description Closest matching localized text.
           * @default null
           */
          matching_text: string | null;
          /**
           * Place Name
           * @description Full label of the feature.
           */
          place_name: string;
          /**
           * Place Type
           * @description Feature classification types.
           */
          place_type: string[];
          /**
           * Properties
           * @description Additional feature properties.
           */
          properties: {
              /**
               * Accuracy
               * @description Accuracy level of the feature.
               * @default null
               */
              accuracy: string | null;
              /**
               * Landmark
               * @description Indicates landmark (legacy POI).
               * @default null
               */
              landmark: boolean | null;
              /**
               * Short Code
               * @description ISO 3166 country/region code.
               * @default null
               */
              short_code: string | null;
              /**
               * Tel
               * @description Telephone number (legacy POI).
               * @default null
               */
              tel: string | null;
              /**
               * Wikidata
               * @description Wikidata identifier.
               * @default null
               */
              wikidata: string | null;
          };
          /**
           * Relevance
           * @description Relevance score (0-1).
           */
          relevance: number;
          /**
           * RoutablePoints
           * @description Routable points metadata for address features.
           * @default null
           */
          routable_points: {
              /**
               * Points
               * @description Array of routable point objects or null.
               * @default null
               */
              points: {
                  /**
                   * Coordinates
                   * @description Coordinates [longitude, latitude].
                   */
                  coordinates: number[];
              }[] | null;
          } | null;
          /**
           * Text
           * @description Short feature name.
           */
          text: string;
          /**
           * Type
           * @description Feature type, e.g., 'Feature'.
           */
          type: string;
      }[];
      /**
       * Query
       * @description Tokenized query string.
       */
      query: string[];
      /**
       * Type
       * @description GeoJSON type, 'FeatureCollection'.
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
 * Type of MAPBOX's MAPBOX_GEOCODING_PERMANENT_REVERSE tool input.
 */
type MAPBOX_GEOCODING_PERMANENT_REVERSE_INPUT = {
  /**
   * Access Token
   * @description Mapbox access token.
   */
  access_token?: string;
  /**
   * Country
   * @description Limit results to one or more countries; comma-separated ISO 3166-1 alpha-2 codes.
   * @default null
   */
  country: string | null;
  /**
   * Language
   * @description IETF language tags (ISO 639-1 + optional subtags); comma-separated; up to 20 unique values.
   * @default null
   */
  language: string | null;
  /**
   * Latitude
   * @description Latitude in decimal degrees for the coordinate pair.
   */
  latitude?: number;
  /**
   * Limit
   * @description Max number of results; default=1; max=10. If >1, must specify exactly one types value.
   * @default null
   */
  limit: number | null;
  /**
   * Longitude
   * @description Longitude in decimal degrees for the coordinate pair.
   */
  longitude?: number;
  /**
   * Reverse Mode
   * @description Sorting when multiple results requested: 'distance' (closest first, default) or 'score' (prominence based).
   * @default null
   * @enum {string|null}
   */
  reverseMode: "distance" | "score" | null;
  /**
   * Routing
   * @description If true, include navigation metadata for address features; adds 'routable_points'.
   * @default null
   */
  routing: boolean | null;
  /**
   * Types
   * @description Filter by one or more feature types: country, region, postcode, district, place, locality, neighborhood, address.
   * @default null
   */
  types: string | null;
  /**
   * Worldview
   * @description Regional/political boundary perspective. One of: ar, cn, in, jp, ma, rs, ru, tr, us.
   * @default us
   * @enum {string|null}
   */
  worldview: "ar" | "cn" | "in" | "jp" | "ma" | "rs" | "ru" | "tr" | "us" | null;
};

/**
 * Type of MAPBOX's MAPBOX_GEOCODING_PERMANENT_REVERSE tool output.
 */
type MAPBOX_GEOCODING_PERMANENT_REVERSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attribution
       * @description Attribution text for Mapbox data.
       */
      attribution: string;
      /**
       * Features
       * @description Array of matching features.
       */
      features: {
          /**
           * Address
           * @description House number for address features.
           * @default null
           */
          address: string | null;
          /**
           * Bbox
           * @description Bounding box [minX, minY, maxX, maxY].
           * @default null
           */
          bbox: number[] | null;
          /**
           * Center
           * @description Center point [longitude, latitude].
           */
          center: number[];
          /**
           * Context
           * @description Hierarchy of parent features.
           * @default null
           */
          context: {
              /**
               * Id
               * @description Identifier for the context feature.
               */
              id: string;
              /**
               * Short Code
               * @description ISO code in context feature.
               * @default null
               */
              short_code: string | null;
              /**
               * Text
               * @description Feature name in context.
               * @default null
               */
              text: string | null;
              /**
               * Wikidata
               * @description Wikidata ID in context.
               * @default null
               */
              wikidata: string | null;
          }[] | null;
          /**
           * Geometry
           * @description GeoJSON geometry object.
           */
          geometry: {
              /**
               * Coordinates
               * @description Coordinates [longitude, latitude].
               */
              coordinates: number[];
              /**
               * Interpolated
               * @description Whether point is interpolated.
               * @default null
               */
              interpolated: boolean | null;
              /**
               * Omitted
               * @description Whether point is omitted.
               * @default null
               */
              omitted: boolean | null;
              /**
               * Type
               * @description Geometry type (e.g., 'Point').
               */
              type: string;
          };
          /**
           * Id
           * @description Feature identifier (type.id).
           */
          id: string;
          /**
           * Language
           * @description Primary language tag of this feature.
           * @default null
           */
          language: string | null;
          /**
           * Matching Place Name
           * @description Full label more closely matching the query.
           * @default null
           */
          matching_place_name: string | null;
          /**
           * Matching Text
           * @description Label more closely matching the query.
           * @default null
           */
          matching_text: string | null;
          /**
           * Place Name
           * @description Full human-readable place name.
           */
          place_name: string;
          /**
           * Place Type
           * @description Feature types.
           */
          place_type: string[];
          /**
           * Properties
           * @description Feature properties metadata.
           */
          properties: {
              /**
               * Accuracy
               * @description For address features: rooftop | parcel | point | interpolated | intersection | approximate | street.
               * @default null
               */
              accuracy: string | null;
              /**
               * Short Code
               * @description ISO 3166-1/2 country or region code when present.
               * @default null
               */
              short_code: string | null;
              /**
               * Wikidata
               * @description Wikidata identifier when present.
               * @default null
               */
              wikidata: string | null;
          };
          /**
           * Relevance
           * @description Match score 0 to 1.
           */
          relevance: number;
          /**
           * RoutablePoints
           * @description Routing points when routing=true.
           * @default null
           */
          routable_points: {
              /**
               * Points
               * @description List of routable points for navigation.
               * @default null
               */
              points: {
                  /**
                   * Coordinates
                   * @description Coordinates [longitude, latitude].
                   */
                  coordinates: number[];
              }[] | null;
          } | null;
          /**
           * Text
           * @description Feature name label.
           */
          text: string;
          /**
           * Type
           * @description Always 'Feature'.
           */
          type: string;
      }[];
      /**
       * Query
       * @description Coordinates in the query.
       */
      query: number[];
      /**
       * Type
       * @description Response type, always 'FeatureCollection'.
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
 * Type of MAPBOX's MAPBOX_GEOCODING_REVERSE tool input.
 */
type MAPBOX_GEOCODING_REVERSE_INPUT = {
  /**
   * Country
   * @description ISO 3166-1 alpha-2 country codes to limit results, comma-separated.
   * @default null
   */
  country: string | null;
  /**
   * Language
   * @description IETF BCP 47 language tags, comma-separated, controlling response language.
   * @default null
   */
  language: string | null;
  /**
   * Latitude
   * @description Latitude of the location to reverse geocode.
   */
  latitude?: number;
  /**
   * Limit
   * @description Maximum number of results to return; default 1, max 10. If >1, exactly one 'types' value must be set.
   * @default null
   */
  limit: number | null;
  /**
   * Longitude
   * @description Longitude of the location to reverse geocode.
   */
  longitude?: number;
  /**
   * Reverse Mode
   * @description Sort strategy when multiple results requested; 'distance' (default) or 'score'.
   * @default null
   * @enum {string|null}
   */
  reverse_mode: "distance" | "score" | null;
  /**
   * Routing
   * @description Include metadata for recommended navigation destination; only applicable for address features.
   * @default null
   */
  routing: boolean | null;
  /**
   * Types
   * @description Comma-separated feature types to include. Options: country, region, postcode, district, place, locality, neighborhood, address.
   * @default null
   */
  types: string | null;
  /**
   * Worldview
   * @description Boundary worldview for disputed areas; one of ar, cn, in, jp, ma, rs, ru, tr, us.
   * @default null
   * @enum {string|null}
   */
  worldview: "ar" | "cn" | "in" | "jp" | "ma" | "rs" | "ru" | "tr" | "us" | null;
};

/**
 * Type of MAPBOX's MAPBOX_GEOCODING_REVERSE tool output.
 */
type MAPBOX_GEOCODING_REVERSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attribution
       * @description Attribution text for the data provider.
       */
      attribution: string;
      /**
       * Features
       * @description List of matching geocoding features.
       */
      features: {
          /**
           * Address
           * @description House number for address features.
           * @default null
           */
          address: string | null;
          /**
           * Bbox
           * @description Bounding box: [minX, minY, maxX, maxY].
           * @default null
           */
          bbox: number[] | null;
          /**
           * Center
           * @description Center of the feature: [longitude, latitude].
           */
          center: number[];
          /**
           * Context
           * @description Hierarchy of parent features.
           * @default null
           */
          context: {
              /**
               * Id
               * @description Feature ID, e.g., 'country.12345'.
               * @default null
               */
              id: string | null;
              /**
               * Short Code
               * @description ISO 3166-1/2 code for the context feature.
               * @default null
               */
              short_code: string | null;
              /**
               * Text
               * @description Feature name or text.
               * @default null
               */
              text: string | null;
              /**
               * Wikidata
               * @description Wikidata identifier of the context feature.
               * @default null
               */
              wikidata: string | null;
          }[] | null;
          /**
           * Geometry
           * @description GeoJSON geometry of the feature.
           */
          geometry: {
              /**
               * Coordinates
               * @description Coordinates of the feature as [longitude, latitude].
               */
              coordinates: number[];
              /**
               * Interpolated
               * @description Indicates interpolated address geometry.
               * @default null
               */
              interpolated: boolean | null;
              /**
               * Omitted
               * @description Indicates out-of-parity match for interpolated address.
               * @default null
               */
              omitted: boolean | null;
              /**
               * Type
               * @description Geometry type, e.g., 'Point'.
               */
              type: string;
          };
          /**
           * Id
           * @description Feature ID in the form {type}.{id}.
           */
          id: string;
          /**
           * Language
           * @description Primary language tag used for this feature.
           * @default null
           */
          language: string | null;
          /**
           * Matching Place Name
           * @description Alternate place label better matching the query.
           * @default null
           */
          matching_place_name: string | null;
          /**
           * Matching Text
           * @description Alternate text better matching the query.
           * @default null
           */
          matching_text: string | null;
          /**
           * Place Name
           * @description Full, readable place label.
           */
          place_name: string;
          /**
           * Place Type
           * @description List of feature type strings.
           */
          place_type: string[];
          /**
           * Properties
           * @description Additional metadata for the feature.
           */
          properties: {
              /**
               * Accuracy
               * @description Accuracy for address features; one of rooftop, parcel, point, interpolated, intersection, approximate, street.
               * @default null
               */
              accuracy: string | null;
              /**
               * Short Code
               * @description ISO 3166-1/2 code for the feature.
               * @default null
               */
              short_code: string | null;
              /**
               * Wikidata
               * @description Wikidata identifier.
               * @default null
               */
              wikidata: string | null;
          };
          /**
           * Relevance
           * @description Match score between 0 and 1.
           */
          relevance: number;
          /**
           * RoutablePoints
           * @description Routable points for navigation.
           * @default null
           */
          routable_points: {
              /**
               * Points
               * @description List of [longitude, latitude] pairs representing routable points.
               * @default null
               */
              points: number[][] | null;
          } | null;
          /**
           * Text
           * @description Primary feature text.
           */
          text: string;
          /**
           * Type
           * @description Feature type, always 'Feature'.
           */
          type: string;
      }[];
      /**
       * Query
       * @description Original query coordinates as [longitude, latitude].
       */
      query: number[];
      /**
       * Type
       * @description Response type, always 'FeatureCollection'.
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
 * Type of MAPBOX's MAPBOX_GET_ACCESS_TOKEN tool input.
 */
type MAPBOX_GET_ACCESS_TOKEN_INPUT = object;

/**
 * Type of MAPBOX's MAPBOX_GET_ACCESS_TOKEN tool output.
 */
type MAPBOX_GET_ACCESS_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Token
       * @description Valid Mapbox access token with required scopes (e.g., 'pk...' or 'sk...').
       */
      access_token: string;
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
 * Type of MAPBOX's MAPBOX_REQUEST_STYLE_EMBED_HTML tool input.
 */
type MAPBOX_REQUEST_STYLE_EMBED_HTML_INPUT = {
  /**
   * Fallback
   * @description Serve a fallback raster map (true) or not (false).
   * @default false
   */
  fallback: boolean;
  /**
   * Mapbox Gl Geocoder Version
   * @description Version of the Mapbox GL Geocoder plugin for the search box.
   * @default null
   */
  mapboxGLGeocoderVersion: string | null;
  /**
   * Mapbox Gl Version
   * @description Version of Mapbox GL JS to render the map.
   * @default null
   */
  mapboxGLVersion: string | null;
  /**
   * Style Id
   * @description Style ID for which to return the embeddable HTML.
   */
  style_id?: string;
  /**
   * Title
   * @description Show a title box: 'copy' adds a copy link, 'view' adds a view button.
   * @default null
   * @enum {string|null}
   */
  title: "copy" | "view" | null;
  /**
   * Username
   * @description Mapbox account username that owns the style.
   */
  username?: string;
  /**
   * Zoomwheel
   * @description Enable mouse-wheel zoom (true) or disable (false).
   * @default true
   */
  zoomwheel: boolean;
};

/**
 * Type of MAPBOX's MAPBOX_REQUEST_STYLE_EMBED_HTML tool output.
 */
type MAPBOX_REQUEST_STYLE_EMBED_HTML_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Html
       * @description Raw embeddable HTML document suitable for iframe embedding.
       */
      html: string;
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
 * Type of MAPBOX's MAPBOX_RETRIEVE_DIRECTIONS tool input.
 */
type MAPBOX_RETRIEVE_DIRECTIONS_INPUT = {
  /**
   * Access Token
   * @description Mapbox access token for authentication.
   */
  access_token?: string;
  /**
   * Alternatives
   * @description Return up to two alternative routes if available.
   * @default false
   */
  alternatives: boolean;
  /**
   * Coordinates
   * @description Ordered list of 2–25 longitude/latitude waypoints.
   */
  coordinates?: {
      /**
       * Latitude
       * @description Latitude in decimal degrees.
       */
      latitude: number;
      /**
       * Longitude
       * @description Longitude in decimal degrees.
       */
      longitude: number;
  }[];
  /**
   * Geometries
   * @description Format of route geometry in response.
   * @default polyline
   * @enum {string}
   */
  geometries: "geojson" | "polyline" | "polyline6";
  /**
   * Language
   * @description Language for instructions (requires steps=true).
   * @default null
   */
  language: string | null;
  /**
   * Overview
   * @description Level of overview geometry detail.
   * @default simplified
   * @enum {string}
   */
  overview: "full" | "simplified" | "false";
  /**
   * Profile
   * @description Routing profile: driving-traffic, driving, walking, or cycling.
   * @enum {string}
   */
  profile?: "mapbox/driving-traffic" | "mapbox/driving" | "mapbox/walking" | "mapbox/cycling";
  /**
   * Steps
   * @description Include turn-by-turn step instructions.
   * @default false
   */
  steps: boolean;
};

/**
 * Type of MAPBOX's MAPBOX_RETRIEVE_DIRECTIONS tool output.
 */
type MAPBOX_RETRIEVE_DIRECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response status code (e.g., 'Ok').
       */
      code: string;
      /**
       * Routes
       * @description One or more calculated routes.
       */
      routes: {
          /**
           * Distance
           * @description Total route distance in meters.
           */
          distance: number;
          /**
           * Duration
           * @description Total route duration in seconds.
           */
          duration: number;
          /**
           * Geometry
           * @description Route geometry per requested format.
           * @default null
           */
          geometry: string | null;
          /**
           * Legs
           * @description Legs of the route between waypoints.
           */
          legs: {
              /**
               * Distance
               * @description Length of this leg in meters.
               */
              distance: number;
              /**
               * Duration
               * @description Travel time of this leg in seconds.
               */
              duration: number;
              /**
               * Steps
               * @description Turn-by-turn steps for this leg.
               */
              steps?: {
                  /**
                   * Distance
                   * @description Meters from this maneuver to the next step.
                   */
                  distance: number;
                  /**
                   * Driving Side
                   * @description Driving side: left or right.
                   * @default null
                   */
                  driving_side: string | null;
                  /**
                   * Duration
                   * @description Seconds from this maneuver to the next step.
                   */
                  duration: number;
                  /**
                   * Geometry
                   * @description Geometry of this step per requested format.
                   * @default null
                   */
                  geometry: string | null;
                  /**
                   * Maneuver
                   * @description Maneuver details.
                   */
                  maneuver: {
                      /**
                       * Bearing After
                       * @description Bearing after this maneuver in degrees.
                       */
                      bearing_after: number;
                      /**
                       * Bearing Before
                       * @description Bearing before this maneuver in degrees.
                       */
                      bearing_before: number;
                      /**
                       * Instruction
                       * @description Human-readable maneuver instruction.
                       * @default null
                       */
                      instruction: string | null;
                      /**
                       * Location
                       * @description [longitude, latitude] of the maneuver.
                       */
                      location: number[];
                      /**
                       * Modifier
                       * @description Directional modifier (e.g., left, right).
                       * @default null
                       */
                      modifier: string | null;
                      /**
                       * Type
                       * @description Type of maneuver (e.g., turn, depart, arrive).
                       */
                      type: string;
                  };
                  /**
                   * Mode
                   * @description Travel mode for this step.
                   */
                  mode: string;
                  /**
                   * Name
                   * @description Name of the road segment.
                   */
                  name: string;
              }[];
              /**
               * Summary
               * @description Summary of major roads for this leg.
               */
              summary: string;
              /**
               * Weight
               * @description Route weight for this leg.
               */
              weight: number;
          }[];
          /**
           * Voice Locale
           * @description Locale for voice instructions if requested.
           * @default null
           */
          voiceLocale: string | null;
          /**
           * Weight
           * @description Weight metric for this route.
           */
          weight: number;
          /**
           * Weight Name
           * @description Weighting used for this route.
           */
          weight_name: string;
      }[];
      /**
       * Uuid
       * @description Unique response identifier.
       */
      uuid: string;
      /**
       * Waypoints
       * @description List of snapped input waypoints.
       */
      waypoints: {
          /**
           * Location
           * @description [longitude, latitude] of the waypoint on network.
           */
          location: number[];
          /**
           * Name
           * @description Snapped waypoint name.
           */
          name: string;
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
 * Type of MAPBOX's MAPBOX_RETRIEVE_FONT_GLYPH_RANGES tool input.
 */
type MAPBOX_RETRIEVE_FONT_GLYPH_RANGES_INPUT = {
  /**
   * End
   * @description End of codepoint range; must equal start + 255
   */
  end?: number;
  /**
   * Font
   * @description Font name or comma-separated list (max 10 faces)
   */
  font?: string;
  /**
   * Start
   * @description Start of codepoint range; must be a multiple of 256
   */
  start?: number;
  /**
   * Username
   * @description Mapbox account username that owns the font
   */
  username?: string;
};

/**
 * Type of MAPBOX's MAPBOX_RETRIEVE_FONT_GLYPH_RANGES tool output.
 */
type MAPBOX_RETRIEVE_FONT_GLYPH_RANGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Glyphs
       * Format: binary
       * @description Raw glyph PBF buffer (gzip-encoded)
       */
      glyphs: string;
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
 * Type of MAPBOX's MAPBOX_RETRIEVE_MATRIX tool input.
 */
type MAPBOX_RETRIEVE_MATRIX_INPUT = {
  /**
   * Access Token
   * @description Mapbox access token.
   */
  access_token?: string;
  /**
   * Annotations
   * @description Which matrices to return: duration, distance, or both.
   * @default duration
   * @enum {string|null}
   */
  annotations: "duration" | "distance" | "duration,distance" | null;
  /**
   * Approaches
   * @description Semicolon-separated list per waypoint: 'unrestricted' or 'curb'. Count must match number of coordinates; skip entries with ';'.
   * @default null
   */
  approaches: string | null;
  /**
   * Bearings
   * @description Semicolon-separated 'angle,deviation' pairs per waypoint; angle 0–360, deviation in degrees; skip with ';'.
   * @default null
   */
  bearings: string | null;
  /**
   * Coordinates
   * @description Ordered list of 2–25 coordinates for matrix calculations.
   */
  coordinates?: {
      /**
       * Latitude
       * @description Latitude in decimal degrees.
       */
      latitude: number;
      /**
       * Longitude
       * @description Longitude in decimal degrees.
       */
      longitude: number;
  }[];
  /**
   * Depart At
   * @description BETA: desired departure time in ISO 8601 format (e.g., YYYY-MM-DDThh:mm:ssZ).
   * @default null
   */
  depart_at: string | null;
  /**
   * Destinations
   * @description Indices of destination waypoints; semicolon-separated 0-based indices or 'all'.
   * @default null
   */
  destinations: string | null;
  /**
   * Fallback Speed
   * @description Legacy: speed in km/h for straight-line fallback estimates; must be >0.
   * @default null
   */
  fallback_speed: number | null;
  /**
   * Profile
   * @description Routing profile ID: driving, walking, cycling, or driving-traffic.
   * @enum {string}
   */
  profile?: "mapbox/driving" | "mapbox/walking" | "mapbox/cycling" | "mapbox/driving-traffic";
  /**
   * Sources
   * @description Indices of source waypoints; semicolon-separated 0-based indices or 'all'.
   * @default null
   */
  sources: string | null;
};

/**
 * Type of MAPBOX's MAPBOX_RETRIEVE_MATRIX tool output.
 */
type MAPBOX_RETRIEVE_MATRIX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Response status code, e.g., 'Ok'.
       */
      code: string;
      /**
       * Destinations
       * @description List of destination waypoints snapped to the network.
       */
      destinations: {
          /**
           * Distance
           * @description Distance in meters from input location to snapped waypoint.
           * @default null
           */
          distance: number | null;
          /**
           * Location
           * @description [longitude, latitude] of this waypoint.
           */
          location: number[];
          /**
           * Metadata
           * @description Additional metadata for this waypoint (EV-routing only).
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Snapped waypoint name.
           */
          name: string;
          /**
           * TimeZone
           * @description Time zone information for a waypoint.
           * @default null
           */
          time_zone: {
              /**
               * Abbreviation
               * @description Time zone abbreviation.
               */
              abbreviation: string;
              /**
               * Identifier
               * @description Time zone identifier.
               */
              identifier: string;
              /**
               * Offset
               * @description Time zone offset in hours from UTC.
               */
              offset: number;
          } | null;
      }[];
      /**
       * Distances
       * @description Matrix of distances in meters; distances[i][j] is distance from source i to destination j.
       * @default null
       */
      distances: (number | null)[][] | null;
      /**
       * Durations
       * @description Matrix of travel times in seconds; durations[i][j] is time from source i to destination j.
       * @default null
       */
      durations: (number | null)[][] | null;
      /**
       * Sources
       * @description List of source waypoints snapped to the network.
       */
      sources: {
          /**
           * Distance
           * @description Distance in meters from input location to snapped waypoint.
           * @default null
           */
          distance: number | null;
          /**
           * Location
           * @description [longitude, latitude] of this waypoint.
           */
          location: number[];
          /**
           * Metadata
           * @description Additional metadata for this waypoint (EV-routing only).
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Snapped waypoint name.
           */
          name: string;
          /**
           * TimeZone
           * @description Time zone information for a waypoint.
           * @default null
           */
          time_zone: {
              /**
               * Abbreviation
               * @description Time zone abbreviation.
               */
              abbreviation: string;
              /**
               * Identifier
               * @description Time zone identifier.
               */
              identifier: string;
              /**
               * Offset
               * @description Time zone offset in hours from UTC.
               */
              offset: number;
          } | null;
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
 * Type of MAPBOX's MAPBOX_RETRIEVE_STYLE tool input.
 */
type MAPBOX_RETRIEVE_STYLE_INPUT = {
  /**
   * Style Id
   * @description ID of the style to retrieve.
   */
  style_id?: string;
  /**
   * Username
   * @description Mapbox account username that owns the style.
   */
  username?: string;
};

/**
 * Type of MAPBOX's MAPBOX_RETRIEVE_STYLE tool output.
 */
type MAPBOX_RETRIEVE_STYLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO timestamp when the style was created.
       */
      created: string;
      /**
       * Draft
       * @description Whether this style version is a draft.
       */
      draft: boolean;
      /**
       * Glyphs
       * @description URL template for glyphs.
       * @default null
       */
      glyphs: string | null;
      /**
       * Id
       * @description Style ID.
       */
      id: string;
      /**
       * Layers
       * @description Layer definitions in render order.
       */
      layers: {
          [key: string]: unknown;
      }[];
      /**
       * Metadata
       * @description Studio-related metadata.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Modified
       * @description ISO timestamp when last modified.
       */
      modified: string;
      /**
       * Name
       * @description Human-readable style name.
       */
      name: string;
      /**
       * Owner
       * @description Username of the style owner.
       */
      owner: string;
      /**
       * Protected
       * @description Whether the style is protected.
       */
      protected: boolean;
      /**
       * Sources
       * @description Data sources used by the map.
       */
      sources: {
          [key: string]: unknown;
      };
      /**
       * Sprite
       * @description URL to the style's sprite sheet.
       * @default null
       */
      sprite: string | null;
      /**
       * Version
       * @description Style specification version.
       */
      version: number;
      /**
       * Visibility
       * @description Style visibility; private styles require owner's token.
       * @enum {string}
       */
      visibility: "public" | "private";
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
 * Type of MAPBOX's MAPBOX_RETRIEVE_STYLE_WMTS tool input.
 */
type MAPBOX_RETRIEVE_STYLE_WMTS_INPUT = {
  /**
   * Style Id
   * @description Style ID for which to return the WMTS document.
   */
  style_id?: string;
  /**
   * Username
   * @description Mapbox account username that owns the style.
   */
  username?: string;
};

/**
 * Type of MAPBOX's MAPBOX_RETRIEVE_STYLE_WMTS tool output.
 */
type MAPBOX_RETRIEVE_STYLE_WMTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Document
       * @description Raw WMTS XML document returned by the API.
       */
      document: string;
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
 * Type of MAPBOX's MAPBOX_RETRIEVE_TILESET_METADATA tool input.
 */
type MAPBOX_RETRIEVE_TILESET_METADATA_INPUT = {
  /**
   * Secure
   * @description If true, return HTTPS URLs in the TileJSON 'tiles' array.
   * @default null
   */
  secure: boolean | null;
  /**
   * Tileset Id
   * @description Tileset identifier in the format 'username.tilesetid'. For multiple tilesets, provide a comma-separated list (max 15).
   */
  tileset_id?: string;
};

/**
 * Type of MAPBOX's MAPBOX_RETRIEVE_TILESET_METADATA tool output.
 */
type MAPBOX_RETRIEVE_TILESET_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bounds
       * @description Bounding box [west, south, east, north].
       */
      bounds: number[];
      /**
       * Center
       * @description Center coordinates and zoom [lon, lat, zoom].
       */
      center: number[];
      /**
       * Created
       * @description Creation timestamp in milliseconds since epoch.
       */
      created: number;
      /**
       * Filesize
       * @description Size of the tileset in bytes.
       */
      filesize: number;
      /**
       * Format
       * @description Tile format, e.g., 'pbf'.
       */
      format: string;
      /**
       * Id
       * @description Tileset identifier, e.g., 'username.tilesetid'.
       */
      id: string;
      /**
       * Mapbox Logo
       * @description Whether to show the Mapbox logo.
       */
      mapbox_logo: boolean;
      /**
       * Maxzoom
       * @description Maximum zoom level.
       */
      maxzoom: number;
      /**
       * Minzoom
       * @description Minimum zoom level.
       */
      minzoom: number;
      /**
       * Modified
       * @description Last modified timestamp in milliseconds since epoch.
       */
      modified: number;
      /**
       * Name
       * @description Human-readable tileset name.
       */
      name: string;
      /**
       * Private
       * @description Whether the tileset is private.
       */
      private: boolean;
      /**
       * Scheme
       * @description Tiling scheme, e.g., 'xyz'.
       */
      scheme: string;
      /**
       * Tilejson
       * @description TileJSON specification version.
       */
      tilejson: string;
      /**
       * Tiles
       * @description List of URL templates for tiles.
       */
      tiles: string[];
      /**
       * Vector Layers
       * @description Metadata for each vector layer in the tileset.
       */
      vector_layers: {
          /**
           * Description
           * @description Layer description.
           * @default null
           */
          description: string | null;
          /**
           * Fields
           * @description Map of attribute names to their data types.
           */
          fields: {
              [key: string]: string;
          };
          /**
           * Id
           * @description Layer identifier.
           */
          id: string;
          /**
           * Maxzoom
           * @description Maximum zoom level for the layer.
           * @default null
           */
          maxzoom: number | null;
          /**
           * Minzoom
           * @description Minimum zoom level for the layer.
           * @default null
           */
          minzoom: number | null;
          /**
           * Source
           * @description Source identifier for the layer.
           * @default null
           */
          source: string | null;
          /**
           * Source Name
           * @description Human-readable source name.
           * @default null
           */
          source_name: string | null;
      }[];
      /**
       * Version
       * @description Semantic version of the tileset data.
       */
      version: string;
      /**
       * Webpage
       * @description URL of the tileset webpage.
       * @default null
       */
      webpage: string | null;
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
 * Type map of all available tool input types for toolkit "MAPBOX".
 */
export type MAPBOX_TOOL_INPUTS = {
  GEOCODING_BATCH: MAPBOX_GEOCODING_BATCH_INPUT
  GEOCODING_FORWARD: MAPBOX_GEOCODING_FORWARD_INPUT
  GEOCODING_PERMANENT_FORWARD: MAPBOX_GEOCODING_PERMANENT_FORWARD_INPUT
  GEOCODING_PERMANENT_REVERSE: MAPBOX_GEOCODING_PERMANENT_REVERSE_INPUT
  GEOCODING_REVERSE: MAPBOX_GEOCODING_REVERSE_INPUT
  GET_ACCESS_TOKEN: MAPBOX_GET_ACCESS_TOKEN_INPUT
  REQUEST_STYLE_EMBED_HTML: MAPBOX_REQUEST_STYLE_EMBED_HTML_INPUT
  RETRIEVE_DIRECTIONS: MAPBOX_RETRIEVE_DIRECTIONS_INPUT
  RETRIEVE_FONT_GLYPH_RANGES: MAPBOX_RETRIEVE_FONT_GLYPH_RANGES_INPUT
  RETRIEVE_MATRIX: MAPBOX_RETRIEVE_MATRIX_INPUT
  RETRIEVE_STYLE: MAPBOX_RETRIEVE_STYLE_INPUT
  RETRIEVE_STYLE_WMTS: MAPBOX_RETRIEVE_STYLE_WMTS_INPUT
  RETRIEVE_TILESET_METADATA: MAPBOX_RETRIEVE_TILESET_METADATA_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MAPBOX".
 */
export type MAPBOX_TOOL_OUTPUTS = {
  GEOCODING_BATCH: MAPBOX_GEOCODING_BATCH_OUTPUT
  GEOCODING_FORWARD: MAPBOX_GEOCODING_FORWARD_OUTPUT
  GEOCODING_PERMANENT_FORWARD: MAPBOX_GEOCODING_PERMANENT_FORWARD_OUTPUT
  GEOCODING_PERMANENT_REVERSE: MAPBOX_GEOCODING_PERMANENT_REVERSE_OUTPUT
  GEOCODING_REVERSE: MAPBOX_GEOCODING_REVERSE_OUTPUT
  GET_ACCESS_TOKEN: MAPBOX_GET_ACCESS_TOKEN_OUTPUT
  REQUEST_STYLE_EMBED_HTML: MAPBOX_REQUEST_STYLE_EMBED_HTML_OUTPUT
  RETRIEVE_DIRECTIONS: MAPBOX_RETRIEVE_DIRECTIONS_OUTPUT
  RETRIEVE_FONT_GLYPH_RANGES: MAPBOX_RETRIEVE_FONT_GLYPH_RANGES_OUTPUT
  RETRIEVE_MATRIX: MAPBOX_RETRIEVE_MATRIX_OUTPUT
  RETRIEVE_STYLE: MAPBOX_RETRIEVE_STYLE_OUTPUT
  RETRIEVE_STYLE_WMTS: MAPBOX_RETRIEVE_STYLE_WMTS_OUTPUT
  RETRIEVE_TILESET_METADATA: MAPBOX_RETRIEVE_TILESET_METADATA_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MAPBOX toolkit.
 */
export const MAPBOX = {
  slug: "mapbox",
  tools: {
    /**
     * Tool to perform batch forward or reverse geocoding for multiple locations. use when you need consistent geocoding of up to 50 queries in one call.
     */
    GEOCODING_BATCH: "MAPBOX_GEOCODING_BATCH",
    /**
     * Tool to convert free-form or structured address into geographic coordinates and place features. use when you need forward geocoding from text or address components.
     */
    GEOCODING_FORWARD: "MAPBOX_GEOCODING_FORWARD",
    /**
     * Tool to perform permanent forward geocoding. use when you need enterprise-grade permanent geocoding after confirming account privileges.
     */
    GEOCODING_PERMANENT_FORWARD: "MAPBOX_GEOCODING_PERMANENT_FORWARD",
    /**
     * Tool to perform permanent reverse geocoding. use after obtaining coordinates to get cacheable place data. example: lon=-73.989, lat=40.733
     */
    GEOCODING_PERMANENT_REVERSE: "MAPBOX_GEOCODING_PERMANENT_REVERSE",
    /**
     * Tool to reverse geocode coordinates into place names. use after obtaining coordinates.
     */
    GEOCODING_REVERSE: "MAPBOX_GEOCODING_REVERSE",
    /**
     * Tool to extract and validate mapbox access token from connection metadata. use when you need a valid token for downstream actions.
     */
    GET_ACCESS_TOKEN: "MAPBOX_GET_ACCESS_TOKEN",
    /**
     * Tool to retrieve embeddable html for a mapbox style. use when you want to embed a style in an iframe after verifying access.
     */
    REQUEST_STYLE_EMBED_HTML: "MAPBOX_REQUEST_STYLE_EMBED_HTML",
    /**
     * Tool to retrieve directions between waypoints. use when you need navigation routes with optional turn-by-turn instructions after confirming origin and destination.
     */
    RETRIEVE_DIRECTIONS: "MAPBOX_RETRIEVE_DIRECTIONS",
    /**
     * Tool to retrieve font glyph ranges as pbf tiles. use when you have confirmed the font name, codepoint range, and valid token.
     */
    RETRIEVE_FONT_GLYPH_RANGES: "MAPBOX_RETRIEVE_FONT_GLYPH_RANGES",
    /**
     * Tool to retrieve a travel time and distance matrix. use when you need to compute travel durations and distances between multiple locations.
     */
    RETRIEVE_MATRIX: "MAPBOX_RETRIEVE_MATRIX",
    /**
     * Tool to retrieve a mapbox style json. use when you need the full style definition by its id.
     */
    RETRIEVE_STYLE: "MAPBOX_RETRIEVE_STYLE",
    /**
     * Tool to retrieve a wmts document for a mapbox style. use when you need the wmts capabilities xml for a specific style id.
     */
    RETRIEVE_STYLE_WMTS: "MAPBOX_RETRIEVE_STYLE_WMTS",
    /**
     * Tool to retrieve metadata for a mapbox tileset. use when you need tilejson details including bounds, zooms, and layer info.
     */
    RETRIEVE_TILESET_METADATA: "MAPBOX_RETRIEVE_TILESET_METADATA",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MAPBOX".
 */
export type MAPBOX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MAPBOX".
 */
export type MAPBOX_TRIGGER_EVENTS = {}
