// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of YANDEX's YANDEX_ORGANIZATION_SEARCH tool input.
 */
type YANDEX_ORGANIZATION_SEARCH_INPUT = {
  /**
   * Apikey
   * @description API key issued in the Yandex Developer Dashboard for Places API. Activation takes up to 15 minutes.
   */
  apikey?: string;
  /**
   * Bbox
   * @description Bounding box as 'lon1,lat1~lon2,lat2'. Overrides ll+spn if provided.
   * @default null
   */
  bbox: string | null;
  /**
   * Lang
   * @description Preferred response language and regional settings in format language_region. Supported: ru_RU, uk_UA, be_BY, en_RU, en_US, tr_TR.
   * @enum {string}
   */
  lang?: "ru_RU" | "uk_UA" | "be_BY" | "en_RU" | "en_US" | "tr_TR";
  /**
   * Ll
   * @description Longitude,latitude of search center. Used with spn or bbox to bound search area.
   * @default null
   */
  ll: string | null;
  /**
   * Results
   * @description Maximum number of results to return (1-50). Default is 10.
   * @default 10
   */
  results: number | null;
  /**
   * Rspn
   * @description Restrict search to defined area (ll+spn or bbox). True to restrict, False to allow outside search.
   * @default null
   */
  rspn: boolean | null;
  /**
   * Skip
   * @description Number of results to skip. Must be a multiple of `results` if > 0.
   * @default 0
   */
  skip: number | null;
  /**
   * Spn
   * @description Longitude span,latitude span for search area. Used with ll.
   * @default null
   */
  spn: string | null;
  /**
   * Text
   * @description Search query text: business name, address, TIN, coordinates, or phone number.
   */
  text?: string;
  /**
   * Type
   * @description Type of search results; fixed to 'biz' for organization search.
   * @default biz
   * @constant
   */
  type: "biz";
  /**
   * Uri
   * @description Identifier from previous geosuggest result. If set, text is ignored.
   * @default null
   */
  uri: string | null;
};

/**
 * Type of YANDEX's YANDEX_ORGANIZATION_SEARCH tool output.
 */
type YANDEX_ORGANIZATION_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Features */
      features: {
          /** Geometry */
          geometry: {
              /** Coordinates */
              coordinates: number[];
              /**
               * Type
               * @constant
               */
              type: "Point";
          };
          /** Properties */
          properties: {
              /** Company Meta Data */
              CompanyMetaData: {
                  /** Address */
                  Address: {
                      /** Components */
                      Components: {
                          /** Kind */
                          kind: string;
                          /** Name */
                          name: string;
                      }[];
                      /** Additional Info */
                      additional_info: string | null;
                      /** Country Code */
                      country_code: string;
                      /** Formatted */
                      formatted: string;
                      /** Postal Code */
                      postal_code: string | null;
                  };
                  /** Categories */
                  Categories: {
                      /** Class */
                      class: string;
                      /** Name */
                      name: string;
                  }[];
                  /** Hours */
                  Hours: {
                      /** Availabilities */
                      Availabilities: {
                          /**
                           * Everyday
                           * @default null
                           */
                          Everyday: boolean | null;
                          /** Intervals */
                          Intervals: {
                              /** From */
                              from: string;
                              /** To */
                              to: string;
                          }[];
                      }[];
                      /** Text */
                      text: string;
                  } | null;
                  /** Address */
                  address: string;
                  /** Id */
                  id: string;
                  /** Name */
                  name: string;
                  /** Url */
                  url: string | null;
              };
              /** Bounded By */
              boundedBy: number[][];
              /** Description */
              description: string;
              /** Name */
              name: string;
              /** Uri */
              uri: string;
          };
          /**
           * Type
           * @constant
           */
          type: "Feature";
      }[];
      /** Properties */
      properties: {
          /** Response Meta Data */
          ResponseMetaData: {
              /** Search Request */
              SearchRequest: {
                  /** Bounded By */
                  boundedBy: number[][];
                  /** Request */
                  request: string;
                  /** Results */
                  results: number;
                  /** Skip */
                  skip: number;
              };
              /** Search Response */
              SearchResponse: {
                  /**
                   * Display
                   * @enum {string}
                   */
                  display: "single" | "multiple";
                  /** Found */
                  found: number;
              };
          };
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
 * Type of YANDEX's YANDEX_YANDEX_GEOCODER_REVERSE tool input.
 */
type YANDEX_YANDEX_GEOCODER_REVERSE_INPUT = {
  /**
   * Apikey
   * @description Yandex Maps HTTP Geocoder API key
   */
  apikey?: string;
  /**
   * Format
   * @description Response format; only 'json' is supported
   * @default json
   * @constant
   */
  format: "json";
  /**
   * Kind
   * @description Type of object to return, e.g., 'house'
   * @default null
   * @enum {string|null}
   */
  kind: "house" | "street" | "metro" | "district" | "locality" | null;
  /**
   * Lang
   * @description Language and region for the response, e.g., 'en_US'
   * @default null
   * @enum {string|null}
   */
  lang: "ru_RU" | "uk_UA" | "be_BY" | "en_RU" | "en_US" | "tr_TR" | null;
  /**
   * Latitude
   * @description Latitude in degrees, between -90 and 90
   */
  latitude?: number;
  /**
   * Longitude
   * @description Longitude in degrees, between -180 and 180
   */
  longitude?: number;
};

/**
 * Type of YANDEX's YANDEX_YANDEX_GEOCODER_REVERSE tool output.
 */
type YANDEX_YANDEX_GEOCODER_REVERSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of YANDEX's YANDEX_YANDEX_ROUTE tool input.
 */
type YANDEX_YANDEX_ROUTE_INPUT = {
  /**
   * Apikey
   * @description Yandex Maps API key. Activation may take up to 15 minutes.
   */
  apikey?: string;
  /**
   * Avoid Tolls
   * @description Avoid toll roads (only for driving or truck modes).
   * @default null
   */
  avoid_tolls: boolean | null;
  /**
   * Avoid Zones
   * @description Polygons to avoid during routing, each formatted as 'lat,lon|lat,lon|...'. Only for driving or truck modes.
   * @default null
   */
  avoid_zones: string[] | null;
  /**
   * Axle Weight
   * @description Vehicle axle load in tons (truck only).
   * @default null
   */
  axle_weight: number | null;
  /**
   * Departure Time
   * @description Departure time as UNIX timestamp in seconds. Ignored for walking, bicycle, or scooter modes, or when traffic is disabled.
   * @default null
   */
  departure_time: number | null;
  /**
   * Eco Class
   * @description Vehicle emission standard (truck only).
   * @default null
   */
  eco_class: number | null;
  /**
   * Has Trailer
   * @description Indicates if the vehicle has a trailer (truck only).
   * @default false
   */
  has_trailer: boolean | null;
  /**
   * Height
   * @description Vehicle height in meters (truck only).
   * @default null
   */
  height: number | null;
  /**
   * Length
   * @description Vehicle length in meters (truck only).
   * @default null
   */
  length: number | null;
  /**
   * Levels
   * @description Comma-separated floor levels per waypoint (must match number of waypoints). Available for walking and transit modes on paid plans.
   * @default null
   */
  levels: string | null;
  /**
   * Max Weight
   * @description Maximum allowed vehicle weight in tons (truck only).
   * @default null
   */
  max_weight: number | null;
  /**
   * Mode
   * @description Transport mode for the route.
   * @default driving
   * @enum {string|null}
   */
  mode: "driving" | "truck" | "walking" | "transit" | "bicycle" | "scooter" | null;
  /**
   * Payload
   * @description Vehicle load capacity in tons (truck only).
   * @default null
   */
  payload: number | null;
  /**
   * Traffic
   * @description Disable traffic-aware routing (only for driving or truck modes).
   * @default null
   * @constant
   */
  traffic: "disabled";
  /**
   * Waypoints
   * @description Route waypoints in WGS84 'latitude,longitude' format separated by '|'. Use up to 50 points for driving/truck modes, and up to 25 for other modes.
   */
  waypoints?: string;
  /**
   * Weight
   * @description Vehicle weight in tons (truck only).
   * @default null
   */
  weight: number | null;
  /**
   * Width
   * @description Vehicle width in meters (truck only).
   * @default null
   */
  width: number | null;
};

/**
 * Type of YANDEX's YANDEX_YANDEX_ROUTE tool output.
 */
type YANDEX_YANDEX_ROUTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Route
       * @description Route details including legs and flags.
       */
      route: {
          /**
           * Flags
           * @description Route flags such as toll presence.
           * @default null
           */
          flags: {
              /**
               * Has Non Transactional Tolls
               * @description Indicates route includes non-transactional tolls.
               */
              hasNonTransactionalTolls: boolean;
              /**
               * Has Tolls
               * @description Indicates route includes toll roads.
               */
              hasTolls: boolean;
          } | null;
          /**
           * Legs
           * @description List of legs in the route.
           */
          legs: {
              /**
               * Status
               * @description Leg status, e.g., 'OK'.
               */
              status: string;
              /**
               * Steps
               * @description List of steps composing this leg.
               */
              steps: {
                  /**
                   * Duration
                   * @description Duration of this step in seconds.
                   */
                  duration: number;
                  /**
                   * Length
                   * @description Distance of this step in meters.
                   */
                  length: number;
                  /**
                   * Mode
                   * @description Transport mode used for this step.
                   */
                  mode: string;
                  /**
                   * Polyline
                   * @description Polyline coordinates for this step.
                   */
                  polyline: {
                      /**
                       * Points
                       * @description List of [latitude, longitude] coordinate pairs defining the step polyline.
                       */
                      points: number[][];
                  };
                  /**
                   * Waiting Duration
                   * @description Waiting time at this step in seconds.
                   */
                  waiting_duration: number;
              }[];
          }[];
      };
      /**
       * Traffic Type
       * @description Type of traffic data returned: 'realtime' or 'forecast'.
       * @enum {string}
       */
      traffic_type: "realtime" | "forecast";
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
 * Type of YANDEX's YANDEX_YANDEX_TILES tool input.
 */
type YANDEX_YANDEX_TILES_INPUT = {
  /**
   * Apikey
   * @description Developer API key issued in the Yandex Developer Dashboard. Activation may take up to 15 minutes.
   */
  apikey?: string;
  /**
   * L
   * @description Map layer type. Only 'map' (roadmap) is supported.
   * @constant
   */
  l?: "map";
  /**
   * Lang
   * @description Map caption language and region, in ISO 639-1_language + ISO 3166-1_region format. Determines feature-label language and regional settings.
   * @enum {string}
   */
  lang?: "ru_RU" | "en_RU" | "en_US" | "uk_UA" | "ru_UA" | "tr_TR";
  /**
   * Maptype
   * @description Predefined map style mode (default 'map').
   * @default null
   * @enum {string|null}
   */
  maptype: "map" | "future_map" | "driving" | "transit" | "admin" | null;
  /**
   * Projection
   * @description Projection: 'wgs84_mercator' for elliptical Mercator (default), 'web_mercator' for spherical Web Mercator.
   * @default null
   * @enum {string|null}
   */
  projection: "wgs84_mercator" | "web_mercator" | null;
  /**
   * Scale
   * @description Scale factor for tile image size (0.11.0). Values >1.0 produce larger hi-res tiles (51212 for scale=2), values <1.0 shrink the tile.
   * @default null
   */
  scale: number | null;
  /**
   * X
   * @description Tile number on the X axis (calculate per docs).
   */
  x?: number;
  /**
   * Y
   * @description Tile number on the Y axis (calculate per docs).
   */
  y?: number;
  /**
   * Z
   * @description Zoom level, integer from 0 (whole world) up to 20 (street level).
   */
  z?: number;
};

/**
 * Type of YANDEX's YANDEX_YANDEX_TILES tool output.
 */
type YANDEX_YANDEX_TILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Raw PNG image bytes of the requested tile.
       */
      content: string;
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
 * Type map of all available tool input types for toolkit "YANDEX".
 */
export type YANDEX_TOOL_INPUTS = {
  ORGANIZATION_SEARCH: YANDEX_ORGANIZATION_SEARCH_INPUT
  YANDEX_GEOCODER_REVERSE: YANDEX_YANDEX_GEOCODER_REVERSE_INPUT
  YANDEX_ROUTE: YANDEX_YANDEX_ROUTE_INPUT
  YANDEX_TILES: YANDEX_YANDEX_TILES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "YANDEX".
 */
export type YANDEX_TOOL_OUTPUTS = {
  ORGANIZATION_SEARCH: YANDEX_ORGANIZATION_SEARCH_OUTPUT
  YANDEX_GEOCODER_REVERSE: YANDEX_YANDEX_GEOCODER_REVERSE_OUTPUT
  YANDEX_ROUTE: YANDEX_YANDEX_ROUTE_OUTPUT
  YANDEX_TILES: YANDEX_YANDEX_TILES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's YANDEX toolkit.
 */
export const YANDEX = {
  slug: "yandex",
  tools: {
    /**
     * Tool to find businesses and organizations by name, address, or tin. use when you need to search for companies in a specific region or text query.
     */
    ORGANIZATION_SEARCH: "YANDEX_ORGANIZATION_SEARCH",
    /**
     * Tool to perform reverse geocoding using yandex maps http geocoder api.
     */
    YANDEX_GEOCODER_REVERSE: "YANDEX_YANDEX_GEOCODER_REVERSE",
    /**
     * Tool to generate detailed route for driving, walking, or public transport. use when planning a route between specified geographic points.
     */
    YANDEX_ROUTE: "YANDEX_YANDEX_ROUTE",
    /**
     * Tool to fetch individual map tile images by x/y coordinates and zoom level. use after calculating tile indices for custom map rendering.
     */
    YANDEX_TILES: "YANDEX_YANDEX_TILES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "YANDEX".
 */
export type YANDEX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "YANDEX".
 */
export type YANDEX_TRIGGER_EVENTS = {}
