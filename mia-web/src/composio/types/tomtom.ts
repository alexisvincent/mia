// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TOMTOM's TOMTOM_ASSETS_LIST_FONTS tool input.
 */
type TOMTOM_ASSETS_LIST_FONTS_INPUT = object;

/**
 * Type of TOMTOM's TOMTOM_ASSETS_LIST_FONTS tool output.
 */
type TOMTOM_ASSETS_LIST_FONTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Versions
       * @description List of available font asset versions
       */
      versions: {
          /**
           * Url
           * @description URL to fetch the font assets for this version
           */
          url: string;
          /**
           * Version
           * @description Version identifier of the font assets
           */
          version: string;
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
 * Type of TOMTOM's TOMTOM_ASSETS_LIST_SPRITES tool input.
 */
type TOMTOM_ASSETS_LIST_SPRITES_INPUT = {
  /**
   * Api Version
   * @description API version of the service. Current value is '1'.
   * @default 1
   * @constant
   */
  apiVersion: "1";
  /**
   * Asset Categories
   * @description Optional filter for sprite categories. Possible values: 'map', 'trafficFlow', 'trafficIncidents'.
   * @default null
   */
  assetCategories: string[] | null;
  /**
   * Asset Version
   * @description The chosen version of the asset. Wildcards are supported, e.g., '3.*'.
   */
  assetVersion?: string;
  /**
   * Key
   * @description A valid TomTom API key.
   */
  key?: string;
};

/**
 * Type of TOMTOM's TOMTOM_ASSETS_LIST_SPRITES tool output.
 */
type TOMTOM_ASSETS_LIST_SPRITES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sprites
       * @description List of available sprites for the specified version.
       */
      sprites: {
          /**
           * Category
           * @description The category of the sprite.
           * @enum {string}
           */
          category: "map" | "trafficFlow" | "trafficIncidents";
          /**
           * Id
           * @description The unique identifier of the sprite.
           */
          id: string;
          /**
           * Url
           * @description The URL to fetch the sprite.
           */
          url: string;
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
 * Type of TOMTOM's TOMTOM_ASSETS_LIST_STYLES tool input.
 */
type TOMTOM_ASSETS_LIST_STYLES_INPUT = {
  /**
   * Api Version
   * @description The API version of the Orbis Maps service to call. This query parameter takes precedence over any header value.
   */
  apiVersion?: string;
  /**
   * Asset Categories
   * @description Optional list of asset categories to filter by. Provide multiple values to filter on multiple categories, e.g., ['vector','raster'].
   * @default null
   */
  assetCategories: string[] | null;
  /**
   * Asset Version
   * @description The chosen version of the asset (e.g., '1.0' or wildcard '1.*'). See https://developer.tomtom.com/assets-api/documentation/tomtom-orbis-maps/product-information/assets-versioning
   */
  assetVersion?: string;
};

/**
 * Type of TOMTOM's TOMTOM_ASSETS_LIST_STYLES tool output.
 */
type TOMTOM_ASSETS_LIST_STYLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Styles
       * @description Array of available style objects
       */
      styles: {
          /**
           * Style
           * @description Name of the style
           */
          style: string;
          /**
           * Url
           * @description URL to fetch the style file
           */
          url: string;
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
 * Type of TOMTOM's TOMTOM_CALCULATE_ROUTE tool input.
 */
type TOMTOM_CALCULATE_ROUTE_INPUT = {
  /**
   * Arrive At
   * @description Arrival time in ISO 8601 format.
   * @default null
   */
  arrive_at: string | null;
  /**
   * Avoid
   * @description Features to avoid (comma-separated), e.g., 'tollRoads,highways'.
   * @default null
   */
  avoid: string | null;
  /**
   * Depart At
   * @description Departure time in ISO 8601 format.
   * @default null
   */
  depart_at: string | null;
  /**
   * End
   * @description Destination coordinates as 'lat,lon'.
   */
  end?: string;
  /**
   * Instructions Type
   * @description Format of guidance instructions.
   * @default coded
   * @enum {string}
   */
  instructions_type: "coded" | "text" | "tagged";
  /**
   * Language
   * @description Language for instructions and results.
   * @default en-GB
   */
  language: string | null;
  /**
   * Report
   * @description Additional report fields, e.g., 'effectiveSettings,travelTimes'.
   * @default null
   */
  report: string | null;
  /**
   * Route Type
   * @description Route calculation strategy.
   * @default fastest
   * @enum {string}
   */
  route_type: "fastest" | "shortest" | "eco" | "thrilling";
  /**
   * Section Type
   * @description Comma-separated list of section types to include, e.g., 'traffic,toll'.
   * @default null
   */
  section_type: string | null;
  /**
   * Start
   * @description Origin coordinates as 'lat,lon'.
   */
  start?: string;
  /**
   * Traffic
   * @description Whether to consider live traffic data.
   * @default true
   */
  traffic: boolean | null;
  /**
   * Travel Mode
   * @description Mode of transport.
   * @default car
   * @enum {string}
   */
  travel_mode: "car" | "truck" | "taxi" | "bus" | "van" | "motorcycle" | "bicycle" | "pedestrian";
  /**
   * Waypoints
   * @description Intermediate waypoints as 'lat,lon:lat,lon'.
   * @default null
   */
  waypoints: string | null;
};

/**
 * Type of TOMTOM's TOMTOM_CALCULATE_ROUTE tool output.
 */
type TOMTOM_CALCULATE_ROUTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Routes
       * @description Calculated route options.
       */
      routes: {
          /**
           * Legs
           * @description List of legs between waypoints (detailed per-leg data).
           */
          legs: {
              [key: string]: unknown;
          }[];
          /**
           * Sections
           * @description List of route sections (e.g., traffic, toll).
           */
          sections: {
              [key: string]: unknown;
          }[];
          /**
           * Summary
           * @description Summary of the route.
           */
          summary: {
              /**
               * Arrival Time
               * @description Scheduled arrival time (ISO 8601).
               * @default null
               */
              arrivalTime: string | null;
              /**
               * Departure Time
               * @description Scheduled departure time (ISO 8601).
               * @default null
               */
              departureTime: string | null;
              /**
               * Length In Meters
               * @description Total route length in meters.
               */
              lengthInMeters: number;
              /**
               * Traffic Delay In Seconds
               * @description Traffic delay in seconds.
               * @default null
               */
              trafficDelayInSeconds: number | null;
              /**
               * Travel Time In Seconds
               * @description Estimated travel time in seconds.
               */
              travelTimeInSeconds: number;
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
 * Type of TOMTOM's TOMTOM_CATEGORY_SEARCH tool input.
 */
type TOMTOM_CATEGORY_SEARCH_INPUT = {
  /**
   * Bbox
   * @description Bounding box to restrict results in 'minLat,minLon,maxLat,maxLon' format
   * @default null
   */
  bbox: string | null;
  /**
   * Category
   * @description Category ID(s) or keywords to search for (path parameter)
   */
  category?: string;
  /**
   * Country Set
   * @description Comma-separated list of ISO country codes to limit search
   * @default null
   */
  countrySet: string | null;
  /**
   * Ext
   * @description Comma-separated extra POI fields to include (e.g., 'openingHours,contact')
   * @default null
   */
  ext: string | null;
  /**
   * Idx Set
   * @description Comma-separated indexes/data sources to use (e.g., 'POI,ADR')
   * @default null
   */
  idxSet: string | null;
  /**
   * Language
   * @description IETF language tag for response localization
   * @default null
   */
  language: string | null;
  /**
   * Lat
   * @description Latitude of the search center (decimal degrees)
   * @default null
   */
  lat: number | null;
  /**
   * Limit
   * @description Maximum number of results to return (default: 10, max: 100)
   * @default null
   */
  limit: number | null;
  /**
   * Lon
   * @description Longitude of the search center (decimal degrees)
   * @default null
   */
  lon: number | null;
  /**
   * Ofs
   * @description Offset for pagination of results
   * @default null
   */
  ofs: number | null;
  /**
   * Radius
   * @description Search radius in meters (requires lat & lon)
   * @default null
   */
  radius: number | null;
  /**
   * View
   * @description Geopolitical view for the search (e.g., 'Unified')
   * @default null
   */
  view: string | null;
};

/**
 * Type of TOMTOM's TOMTOM_CATEGORY_SEARCH tool output.
 */
type TOMTOM_CATEGORY_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of POI search results for the specified category
       */
      results: {
          /**
           * Address
           * @description Address details of the POI
           * @default null
           */
          address: {
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Country Code
               * @description Country ISO code
               * @default null
               */
              countryCode: string | null;
              /**
               * Freeform Address
               * @description Full address as a single string
               * @default null
               */
              freeformAddress: string | null;
              /**
               * Municipality
               * @description Municipality name
               * @default null
               */
              municipality: string | null;
              /**
               * Postal Code
               * @description Postal code
               * @default null
               */
              postalCode: string | null;
              /**
               * Street Name
               * @description Street name of the address
               * @default null
               */
              streetName: string | null;
              /**
               * Street Number
               * @description Street number of the address
               * @default null
               */
              streetNumber: string | null;
          } | null;
          /**
           * Dist
           * @description Distance in meters from the search point to the POI
           * @default null
           */
          dist: number | null;
          /**
           * Id
           * @description Unique identifier of the POI result
           */
          id: string;
          /**
           * Poi
           * @description Details about the point of interest
           */
          poi: {
              /**
               * Category Set
               * @description Categories associated with the POI
               * @default null
               */
              categorySet: {
                  /**
                   * Id
                   * @description Category identifier for the POI
                   */
                  id: number;
              }[] | null;
              /**
               * Name
               * @description Name of the POI
               * @default null
               */
              name: string | null;
              /**
               * Phone
               * @description List of phone numbers for the POI
               * @default null
               */
              phone: string[] | null;
              /**
               * Url
               * @description List of URLs for the POI
               * @default null
               */
              url: string[] | null;
          };
          /**
           * Position
           * @description Geographic position of the POI
           */
          position: {
              /**
               * Lat
               * @description Latitude of the point
               */
              lat: number;
              /**
               * Lon
               * @description Longitude of the point
               */
              lon: number;
          };
          /**
           * Score
           * @description Relevance score of the result
           * @default null
           */
          score: number | null;
          /**
           * Type
           * @description Type of result, typically 'POI'
           * @default null
           */
          type: string | null;
          /**
           * BoundingBox
           * @description Viewport bounding box defined by top-left and bottom-right points
           * @default null
           */
          viewport: {
              /**
               * Btm Right Point
               * @description Bottom-right corner of the bounding box
               */
              btmRightPoint: {
                  /**
                   * Lat
                   * @description Latitude of the point
                   */
                  lat: number;
                  /**
                   * Lon
                   * @description Longitude of the point
                   */
                  lon: number;
              };
              /**
               * Top Left Point
               * @description Top-left corner of the bounding box
               */
              topLeftPoint: {
                  /**
                   * Lat
                   * @description Latitude of the point
                   */
                  lat: number;
                  /**
                   * Lon
                   * @description Longitude of the point
                   */
                  lon: number;
              };
          } | null;
      }[];
      /**
       * Summary
       * @description Summary information about the search
       */
      summary: {
          /**
           * Fuzzy Level
           * @description Fuzzy matching level used in the search
           * @default null
           */
          fuzzyLevel: number | null;
          /**
           * Num Results
           * @description Number of results returned by the search
           */
          numResults: number;
          /**
           * Offset
           * @description Offset of the first returned result for pagination
           * @default null
           */
          offset: number | null;
          /**
           * Query
           * @description Original search query (category)
           */
          query: string;
          /**
           * Query Time
           * @description Time in milliseconds taken to perform the query
           * @default null
           */
          queryTime: number | null;
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
 * Type of TOMTOM's TOMTOM_EV_CHARGING_STATIONS_AVAILABLE tool input.
 */
type TOMTOM_EV_CHARGING_STATIONS_AVAILABLE_INPUT = {
  /**
   * Connector Set Id
   * @description Identifier of an EV connector set.
   */
  connectorSetID?: string;
  /**
   * Operator Id
   * @description EVSE operator identifier.
   * @default null
   */
  operatorID: string | null;
  /**
   * Poi Id
   * @description POI (charging station) identifier.
   */
  poiID?: string;
};

/**
 * Type of TOMTOM's TOMTOM_EV_CHARGING_STATIONS_AVAILABLE tool output.
 */
type TOMTOM_EV_CHARGING_STATIONS_AVAILABLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Connectors */
      connectors: {
          /**
           * Connector Id
           * @description Connector identifier
           */
          connectorID: string;
          /**
           * Power Kw
           * @description Power in kilowatts
           */
          powerKW: number;
          /**
           * Status
           * @description Status of connector (e.g., AVAILABLE, OCCUPIED)
           */
          status: string;
          /**
           * Type
           * @description Type of connector
           */
          type: string;
      }[];
      /**
       * Operator Id
       * @default null
       */
      operatorID: string | null;
      /** Poi Id */
      poiID: string;
      /** Summary */
      summary: {
          /**
           * Available
           * @description Number of available connectors
           */
          available: number;
          /**
           * Occupied
           * @description Number of occupied connectors
           */
          occupied: number;
          /**
           * Out Of Service
           * @description Number of out-of-service connectors
           */
          outOfService: number;
          /**
           * Unknown
           * @description Number of connectors with unknown status
           */
          unknown: number;
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
 * Type of TOMTOM's TOMTOM_FLOW_SEGMENT_DATA tool input.
 */
type TOMTOM_FLOW_SEGMENT_DATA_INPUT = {
  /**
   * Format
   * @description Response format of the data.
   * @enum {string}
   */
  format?: "json" | "xml";
  /**
   * Open Lr
   * @description Whether to include OpenLR descriptors in the response.
   * @default false
   */
  openLr: boolean | null;
  /**
   * Point
   * @description Center point of the segment in 'lat,lon' format.
   */
  point?: string;
  /**
   * Style
   * @description Display style of the flow data.
   * @constant
   */
  style?: "relative";
  /**
   * Unit
   * @description Unit for speed values.
   * @default KMPH
   * @enum {string|null}
   */
  unit: "KMPH" | "MPH" | null;
  /**
   * Zoom
   * @description Zoom level for the flow segment data (0-22).
   */
  zoom?: number;
};

/**
 * Type of TOMTOM's TOMTOM_FLOW_SEGMENT_DATA tool output.
 */
type TOMTOM_FLOW_SEGMENT_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Flow Segment Data
       * @description Traffic flow information for the segment.
       */
      flowSegmentData: {
          /**
           * Confidence
           * @description Confidence level of the traffic data.
           */
          confidence: number;
          /**
           * Coordinates
           * @description Geometry of the segment.
           */
          coordinates: {
              /**
               * Coordinate
               * @description List of [lat,lon] pairs defining the segment geometry.
               */
              coordinate: number[][];
          };
          /**
           * Current Speed
           * @description Current average speed on the segment.
           */
          currentSpeed: number;
          /**
           * Current Travel Time
           * @description Current travel time in seconds.
           */
          currentTravelTime: number;
          /**
           * Frc
           * @description Functional road class of the segment.
           */
          frc: string;
          /**
           * Free Flow Speed
           * @description Free flow speed for the segment.
           */
          freeFlowSpeed: number;
          /**
           * Free Flow Travel Time
           * @description Free flow travel time in seconds.
           */
          freeFlowTravelTime: number;
          /**
           * Open Lr
           * @description OpenLR descriptor if requested.
           * @default null
           */
          openLr: {
              [key: string]: unknown;
          } | null;
          /**
           * Road Closure
           * @description Indicates if the segment is closed.
           */
          roadClosure: boolean;
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
 * Type of TOMTOM's TOMTOM_FUZZY_SEARCH tool input.
 */
type TOMTOM_FUZZY_SEARCH_INPUT = {
  /**
   * Bounding Box
   * @description Limit to bounding box: 'minLon,minLat,maxLon,maxLat'
   * @default null
   */
  boundingBox: string | null;
  /**
   * Brand Set
   * @description Comma-separated brand names to restrict results
   * @default null
   */
  brandSet: string | null;
  /**
   * Category Set
   * @description Comma-separated category IDs (e.g., '7315,9362')
   * @default null
   */
  categorySet: string | null;
  /**
   * Category Type
   * @description Restrict to POI or geography categories
   * @default null
   * @enum {string|null}
   */
  categoryType: "POI" | "Geography" | null;
  /**
   * Connector Set
   * @description Comma-separated EV connector types (e.g., 'IEC_62196_T2')
   * @default null
   */
  connectorSet: string | null;
  /**
   * Country Set
   * @description Comma-separated country codes to restrict results (e.g., 'US,CA')
   * @default null
   */
  countrySet: string | null;
  /**
   * Entity Type Set
   * @description Comma-separated entity types to restrict
   * @default null
   */
  entityTypeSet: string | null;
  /**
   * Geobias
   * @description Enable or disable geobias (default: 'on')
   * @default null
   * @enum {string|null}
   */
  geobias: "on" | "off" | null;
  /**
   * Idx Set
   * @description Comma-separated index types (e.g., 'PAD,Geo,Addr')
   * @default null
   */
  idxSet: string | null;
  /**
   * Language
   * @description Response language (e.g., 'en-US')
   * @default null
   */
  language: string | null;
  /**
   * Lat
   * @description Latitude for contextual biasing
   * @default null
   */
  lat: number | null;
  /**
   * Limit
   * @description Maximum number of results to return
   * @default null
   */
  limit: number | null;
  /**
   * Lon
   * @description Longitude for contextual biasing
   * @default null
   */
  lon: number | null;
  /**
   * Min Power Kw
   * @description Minimum power (kW) for EV charging stations
   * @default null
   */
  minPowerKW: number | null;
  /**
   * Ofs
   * @description Starting offset for returned results
   * @default null
   */
  ofs: number | null;
  /**
   * Opening Hours
   * @description Filter by opening hours
   * @default null
   * @enum {string|null}
   */
  openingHours: "nextSevenDays" | "nextLocalDay" | null;
  /**
   * Political View
   * @description Political view parameter for geography rendering
   * @default null
   */
  politicalView: string | null;
  /**
   * Query
   * @description Free-form search text for address or POI
   */
  query?: string;
  /**
   * Radius
   * @description Bias radius in meters around lat/lon
   * @default null
   */
  radius: number | null;
  /**
   * Related Pois
   * @description Return related POIs: 'off', 'child', or 'all'
   * @default null
   * @enum {string|null}
   */
  relatedPois: "off" | "child" | "all" | null;
  /**
   * View
   * @description Geopolitical view for geography rendering
   * @default null
   * @enum {string|null}
   */
  view: "Unified" | "AR" | null;
};

/**
 * Type of TOMTOM's TOMTOM_FUZZY_SEARCH tool output.
 */
type TOMTOM_FUZZY_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of results matching the query
       */
      results: {
          /**
           * Address
           * @description Address details of the result
           * @default null
           */
          address: {
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Country Code
               * @description Country ISO code
               * @default null
               */
              countryCode: string | null;
              /**
               * Freeform Address
               * @description Full address as a single string
               * @default null
               */
              freeformAddress: string | null;
              /**
               * Municipality
               * @description Municipality name
               * @default null
               */
              municipality: string | null;
              /**
               * Postal Code
               * @description Postal code
               * @default null
               */
              postalCode: string | null;
              /**
               * Street Name
               * @description Street name of the address
               * @default null
               */
              streetName: string | null;
              /**
               * Street Number
               * @description Street number of the address
               * @default null
               */
              streetNumber: string | null;
          } | null;
          /**
           * BoundingBox
           * @description Bounding box defined by top-left and bottom-right points
           * @default null
           */
          boundingBox: {
              /**
               * Btm Right Point
               * @description Bottom-right corner of the bounding box
               */
              btmRightPoint: {
                  /**
                   * Lat
                   * @description Latitude of the point
                   */
                  lat: number;
                  /**
                   * Lon
                   * @description Longitude of the point
                   */
                  lon: number;
              };
              /**
               * Top Left Point
               * @description Top-left corner of the bounding box
               */
              topLeftPoint: {
                  /**
                   * Lat
                   * @description Latitude of the point
                   */
                  lat: number;
                  /**
                   * Lon
                   * @description Longitude of the point
                   */
                  lon: number;
              };
          } | null;
          /**
           * Dist
           * @description Distance in meters from the bias point to the result
           * @default null
           */
          dist: number | null;
          /**
           * Entry Points
           * @description Possible entry points to the result
           * @default null
           */
          entryPoints: {
              /**
               * Lat
               * @description Latitude of the point
               */
              lat: number;
              /**
               * Lon
               * @description Longitude of the point
               */
              lon: number;
          }[] | null;
          /**
           * Id
           * @description Unique identifier of the result
           */
          id: string;
          /**
           * Poi
           * @description Point of interest details where applicable
           * @default null
           */
          poi: {
              /**
               * Category Set
               * @description Categories associated with the POI
               * @default null
               */
              categorySet: {
                  /**
                   * Id
                   * @description Category identifier for the POI
                   */
                  id: number;
              }[] | null;
              /**
               * Name
               * @description Name of the POI
               * @default null
               */
              name: string | null;
              /**
               * Phone
               * @description List of phone numbers for the POI
               * @default null
               */
              phone: string[] | null;
              /**
               * Url
               * @description List of URLs for the POI
               * @default null
               */
              url: string[] | null;
          } | null;
          /**
           * Position
           * @description Geographic position of the result
           */
          position: {
              /**
               * Lat
               * @description Latitude of the point
               */
              lat: number;
              /**
               * Lon
               * @description Longitude of the point
               */
              lon: number;
          };
          /**
           * Score
           * @description Relevance score of the result
           * @default null
           */
          score: number | null;
          /**
           * Type
           * @description Type of result, typically 'POI'
           * @default null
           */
          type: string | null;
      }[];
      /**
       * Summary
       * @description Summary information about the search
       */
      summary: {
          /**
           * Fuzzy Level
           * @description Fuzzy matching level used in the search
           * @default null
           */
          fuzzyLevel: number | null;
          /**
           * Num Results
           * @description Number of results returned by the search
           */
          numResults: number;
          /**
           * Offset
           * @description Offset of the returned results for pagination
           * @default null
           */
          offset: number | null;
          /**
           * Query
           * @description Original search query
           */
          query: string;
          /**
           * Query Time
           * @description Time in milliseconds taken to perform the query
           * @default null
           */
          queryTime: number | null;
          /**
           * Query Type
           * @description Type of query performed
           * @default null
           */
          queryType: string | null;
          /**
           * Total Results
           * @description Total number of matching results
           * @default null
           */
          totalResults: number | null;
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
 * Type of TOMTOM's TOMTOM_LIST_SPRITE_VERSIONS tool input.
 */
type TOMTOM_LIST_SPRITE_VERSIONS_INPUT = object;

/**
 * Type of TOMTOM's TOMTOM_LIST_SPRITE_VERSIONS tool output.
 */
type TOMTOM_LIST_SPRITE_VERSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Versions
       * @description List of available sprite asset version identifiers
       */
      versions: string[];
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
 * Type of TOMTOM's TOMTOM_MAP_DISPLAY_COPYRIGHTS tool input.
 */
type TOMTOM_MAP_DISPLAY_COPYRIGHTS_INPUT = {
  /**
   * X
   * @description X coordinate of the map tile (non-negative).
   */
  x?: number;
  /**
   * Y
   * @description Y coordinate of the map tile (non-negative).
   */
  y?: number;
  /**
   * Zoom
   * @description Map zoom level (non-negative).
   */
  zoom?: number;
};

/**
 * Type of TOMTOM's TOMTOM_MAP_DISPLAY_COPYRIGHTS tool output.
 */
type TOMTOM_MAP_DISPLAY_COPYRIGHTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Copyrights
       * @description List of copyright information objects.
       */
      copyrights: {
          /**
           * Boxes
           * @description List of bounding boxes where the copyright applies.
           */
          boxes: {
              /**
               * East
               * @description East longitude of the bounding box.
               */
              east: number;
              /**
               * North
               * @description North latitude of the bounding box.
               */
              north: number;
              /**
               * South
               * @description South latitude of the bounding box.
               */
              south: number;
              /**
               * West
               * @description West longitude of the bounding box.
               */
              west: number;
          }[];
          /**
           * Label
           * @description Copyright label text.
           */
          label: string;
          /**
           * Max Level
           * @description Maximum zoom level where copyright applies.
           */
          maxLevel: number;
          /**
           * Min Level
           * @description Minimum zoom level where copyright applies.
           */
          minLevel: number;
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
 * Type of TOMTOM's TOMTOM_MAP_DISPLAY_RASTER_TILE tool input.
 */
type TOMTOM_MAP_DISPLAY_RASTER_TILE_INPUT = {
  /**
   * X
   * @description Tile X coordinate (integer ≥ 0).
   */
  X?: number;
  /**
   * Y
   * @description Tile Y coordinate (integer ≥ 0).
   */
  Y?: number;
  /**
   * Format
   * @description Image format to return.
   * @default png
   * @enum {string}
   */
  format: "png" | "jpg";
  /**
   * Language
   * @description Language code for map labels, e.g., 'en-GB'.
   * @default null
   */
  language: string | null;
  /**
   * Layer
   * @description Map layer style.
   * @default basic
   * @enum {string}
   */
  layer: "basic" | "hybrid";
  /**
   * Style
   * @description Visual theme of the map.
   * @default main
   * @enum {string}
   */
  style: "main" | "night" | "labels";
  /**
   * Tile Size
   * @description Tile size in pixels, either 256 or 512.
   * @default 256
   * @enum {integer}
   */
  tileSize: 256 | 512;
  /**
   * View
   * @description View parameter, typically 'Unified'.
   * @default Unified
   * @constant
   */
  view: "Unified";
  /**
   * Zoom
   * @description Zoom level between 0 (world) and 22 (max detail).
   */
  zoom?: number;
};

/**
 * Type of TOMTOM's TOMTOM_MAP_DISPLAY_RASTER_TILE tool output.
 */
type TOMTOM_MAP_DISPLAY_RASTER_TILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Raw binary content of the raster map tile image.
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
 * Type of TOMTOM's TOMTOM_MAP_DISPLAY_STATIC_IMAGE tool input.
 */
type TOMTOM_MAP_DISPLAY_STATIC_IMAGE_INPUT = {
  /**
   * Bbox
   * @description Bounding box 'min_lon,min_lat,max_lon,max_lat'.
   * @default null
   */
  bbox: string | null;
  /**
   * Center
   * @description Coordinates of the map center as 'lat,lon'.
   */
  center?: string;
  /**
   * Format
   * @description Output image format.
   * @default png
   * @enum {string}
   */
  format: "png" | "jpg";
  /**
   * Height
   * @description Image height in pixels (1-2000).
   * @default 512
   */
  height: number;
  /**
   * Language
   * @description Language code for map labels, e.g., 'en-US'.
   * @default null
   */
  language: string | null;
  /**
   * Layer
   * @description Map layer type.
   * @default basic
   * @enum {string}
   */
  layer: "basic" | "hybrid" | "labels";
  /**
   * Markers
   * @description Overlay markers; format 'color|label|lat,lon;color|label|lat,lon'.
   * @default null
   */
  markers: string | null;
  /**
   * Style
   * @description Map style.
   * @default main
   * @enum {string}
   */
  style: "main" | "night";
  /**
   * Tile Size
   * @description Tile size in pixels.
   * @default 512
   * @enum {integer}
   */
  tileSize: 256 | 512;
  /**
   * Traffic
   * @description Whether to overlay real-time traffic data.
   * @default false
   */
  traffic: boolean;
  /**
   * View
   * @description Map view parameter, e.g., 'Unified', 'Auto', 'AR'.
   * @default null
   */
  view: string | null;
  /**
   * Width
   * @description Image width in pixels (1-2000).
   * @default 512
   */
  width: number;
  /**
   * Zoom
   * @description Zoom level between 0 (world) and 22 (max detail).
   */
  zoom?: number;
};

/**
 * Type of TOMTOM's TOMTOM_MAP_DISPLAY_STATIC_IMAGE tool output.
 */
type TOMTOM_MAP_DISPLAY_STATIC_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Raw binary content of the static map image.
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
 * Type of TOMTOM's TOMTOM_MAP_DISPLAY_WMS_GET_MAP tool input.
 */
type TOMTOM_MAP_DISPLAY_WMS_GET_MAP_INPUT = {
  /**
   * Bbox
   * @description Bounding box in 'minx,miny,maxx,maxy' format
   */
  bbox?: string;
  /**
   * Bgcolor
   * @description Background color in hex, e.g., '0xFFFFFF'
   * @default 0xFFFFFF
   */
  bgcolor: string;
  /**
   * Crs
   * @description Coordinate Reference System for WMS 1.3.0, e.g., 'EPSG:4326'
   * @default null
   */
  crs: string | null;
  /**
   * Elevation
   * @description Elevation parameter for dimension-enabled layers
   * @default null
   */
  elevation: string | null;
  /**
   * Exceptions
   * @description Exception output format, e.g., 'INIMAGE'
   * @default null
   */
  exceptions: string | null;
  /**
   * Format
   * @description Image format, e.g., 'image/png' or 'image/jpeg'
   */
  format?: string;
  /**
   * Height
   * @description Image height in pixels, must be >= 1
   */
  height?: number;
  /**
   * Layers
   * @description Comma-separated list of map layers to display
   */
  layers?: string;
  /**
   * Request
   * @description Request type, must be 'GetMap'
   * @constant
   */
  request?: "GetMap";
  /**
   * Service
   * @description Service type, must be 'WMS'
   * @constant
   */
  service?: "WMS";
  /**
   * Srs
   * @description Coordinate Reference System for WMS 1.1.1, e.g., 'EPSG:4326'
   * @default null
   */
  srs: string | null;
  /**
   * Styles
   * @description Comma-separated list of layer styles; empty for default
   * @default
   */
  styles: string;
  /**
   * Time
   * @description Time parameter for time-enabled layers
   * @default null
   */
  time: string | null;
  /**
   * Transparent
   * @description Transparency flag; TRUE for transparent background
   * @default false
   */
  transparent: boolean;
  /**
   * Version
   * @description WMS version to use
   * @enum {string}
   */
  version?: "1.1.1" | "1.3.0";
  /**
   * Width
   * @description Image width in pixels, must be >= 1
   */
  width?: number;
};

/**
 * Type of TOMTOM's TOMTOM_MAP_DISPLAY_WMS_GET_MAP tool output.
 */
type TOMTOM_MAP_DISPLAY_WMS_GET_MAP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Raw binary content of the WMS map image
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
 * Type of TOMTOM's TOMTOM_MATRIX_ROUTING tool input.
 */
type TOMTOM_MATRIX_ROUTING_INPUT = {
  /**
   * Destinations
   * @description List of destination coordinates (must contain at least one destination)
   */
  destinations?: {
      /**
       * Lat
       * @description Latitude in decimal degrees, between -90 and 90
       */
      lat: number;
      /**
       * Lon
       * @description Longitude in decimal degrees, between -180 and 180
       */
      lon: number;
  }[];
  /**
   * MatrixOptions
   * @description Optional routing and vehicle profile settings
   * @default null
   */
  options: {
      /**
       * Avoid
       * @description List of road features or types to avoid, e.g., ['tollRoads', 'motorways']
       * @default null
       */
      avoid: string[] | null;
      /**
       * Route Type
       * @enum {string|null}
       */
      routeType: "fastest" | "shortest" | null;
      /**
       * Travel Mode
       * @enum {string|null}
       */
      travelMode: "car" | "truck" | "van" | "taxi" | "bus" | "bicycle" | "pedestrian" | null;
      /**
       * Vehicle Axle Weight
       * @description Maximum axle weight in kg
       * @default null
       */
      vehicleAxleWeight: number | null;
      /**
       * Vehicle Commercial
       * @description Whether the vehicle is used for commercial purposes
       * @default null
       */
      vehicleCommercial: boolean | null;
      /**
       * Vehicle Height
       * @description Vehicle height in meters
       * @default null
       */
      vehicleHeight: number | null;
      /**
       * Vehicle Length
       * @description Vehicle length in meters
       * @default null
       */
      vehicleLength: number | null;
      /**
       * Vehicle Max Speed
       * @description Maximum vehicle speed in km/h
       * @default null
       */
      vehicleMaxSpeed: number | null;
      /**
       * Vehicle Weight
       * @description Total vehicle weight in kg
       * @default null
       */
      vehicleWeight: number | null;
      /**
       * Vehicle Width
       * @description Vehicle width in meters
       * @default null
       */
      vehicleWidth: number | null;
  } | null;
  /**
   * Origins
   * @description List of origin coordinates (must contain at least one origin)
   */
  origins?: {
      /**
       * Lat
       * @description Latitude in decimal degrees, between -90 and 90
       */
      lat: number;
      /**
       * Lon
       * @description Longitude in decimal degrees, between -180 and 180
       */
      lon: number;
  }[];
};

/**
 * Type of TOMTOM's TOMTOM_MATRIX_ROUTING tool output.
 */
type TOMTOM_MATRIX_ROUTING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Matrix
       * @description Matrix of route summaries
       */
      matrix: {
          /**
           * RouteSummary
           * @description Route summary for this origin-destination pair
           */
          routeSummary: {
              /**
               * Arrivaltime
               * @description Scheduled arrival time in ISO 8601 format
               * @default null
               */
              arrivalTime: string | null;
              /**
               * Departuretime
               * @description Scheduled departure time in ISO 8601 format
               * @default null
               */
              departureTime: string | null;
              /**
               * Lengthinmeters
               * @description Travel distance in meters
               */
              lengthInMeters: number;
              /**
               * Trafficdelayinseconds
               * @description Delay due to traffic in seconds
               * @default null
               */
              trafficDelayInSeconds: number | null;
              /**
               * Traveltimeinseconds
               * @description Estimated travel time in seconds
               */
              travelTimeInSeconds: number;
          };
      }[][];
      /**
       * Summary
       * @description Overview of processed origins and destinations
       */
      summary: {
          /**
           * Successfully Processed Destinations
           * @description Count of successfully processed destinations
           */
          successfullyProcessedDestinations: number;
          /**
           * Successfully Processed Origins
           * @description Count of successfully processed origins
           */
          successfullyProcessedOrigins: number;
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
 * Type of TOMTOM's TOMTOM_NEARBY_SEARCH tool input.
 */
type TOMTOM_NEARBY_SEARCH_INPUT = {
  /**
   * Brand Set
   * @description Comma-separated list of brand IDs to restrict the results
   * @default null
   */
  brandSet: string | null;
  /**
   * Category Set
   * @description Comma-separated list of category IDs to restrict the search
   * @default null
   */
  categorySet: string | null;
  /**
   * Connector Set
   * @description Comma-separated list of connector IDs for charging stations
   * @default null
   */
  connectorSet: string | null;
  /**
   * Country Set
   * @description Comma-separated list of country codes to restrict results
   * @default null
   */
  countrySet: string | null;
  /**
   * Lat
   * @description Latitude of the center point for the search
   */
  lat?: number;
  /**
   * Limit
   * @description Maximum number of results to return (default: 10, max: 100)
   * @default null
   */
  limit: number | null;
  /**
   * Lon
   * @description Longitude of the center point for the search
   */
  lon?: number;
  /**
   * Min Power Kw
   * @description Minimum power in kW for charging stations
   * @default null
   */
  minPowerKW: number | null;
  /**
   * Radius
   * @description Search radius in meters (default: 10000, max: 50000)
   * @default null
   */
  radius: number | null;
};

/**
 * Type of TOMTOM's TOMTOM_NEARBY_SEARCH tool output.
 */
type TOMTOM_NEARBY_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of POI search results near the location
       */
      results: {
          /**
           * Address
           * @description Address details of the POI
           * @default null
           */
          address: {
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Country Code
               * @description Country ISO code
               * @default null
               */
              countryCode: string | null;
              /**
               * Freeform Address
               * @description Full address as a single string
               * @default null
               */
              freeformAddress: string | null;
              /**
               * Municipality
               * @description Municipality name
               * @default null
               */
              municipality: string | null;
              /**
               * Postal Code
               * @description Postal code
               * @default null
               */
              postalCode: string | null;
              /**
               * Street Name
               * @description Street name of the address
               * @default null
               */
              streetName: string | null;
              /**
               * Street Number
               * @description Street number of the address
               * @default null
               */
              streetNumber: string | null;
          } | null;
          /**
           * Dist
           * @description Distance in meters from the search point to the POI
           * @default null
           */
          dist: number | null;
          /**
           * Id
           * @description Unique identifier of the POI result
           */
          id: string;
          /**
           * Info
           * @description Info string for the result
           * @default null
           */
          info: string | null;
          /**
           * Poi
           * @description Details about the point of interest
           */
          poi: {
              /**
               * Category Set
               * @description Categories associated with the POI
               * @default null
               */
              categorySet: {
                  /**
                   * Id
                   * @description Category identifier for the POI
                   */
                  id: number;
              }[] | null;
              /**
               * Name
               * @description Name of the POI
               * @default null
               */
              name: string | null;
              /**
               * Phone
               * @description List of phone numbers for the POI
               * @default null
               */
              phone: string[] | null;
              /**
               * Url
               * @description List of URLs for the POI
               * @default null
               */
              url: string[] | null;
          };
          /**
           * Position
           * @description Geographic position of the POI
           */
          position: {
              /**
               * Lat
               * @description Latitude of the point
               */
              lat: number;
              /**
               * Lon
               * @description Longitude of the point
               */
              lon: number;
          };
          /**
           * Score
           * @description Relevance score of the result
           * @default null
           */
          score: number | null;
          /**
           * Type
           * @description Type of result, typically 'POI'
           * @default null
           */
          type: string | null;
          /**
           * BoundingBox
           * @description Viewport bounding box defined by top-left and bottom-right points
           * @default null
           */
          viewport: {
              /**
               * Btm Right Point
               * @description Bottom-right corner of the bounding box
               */
              btmRightPoint: {
                  /**
                   * Lat
                   * @description Latitude of the point
                   */
                  lat: number;
                  /**
                   * Lon
                   * @description Longitude of the point
                   */
                  lon: number;
              };
              /**
               * Top Left Point
               * @description Top-left corner of the bounding box
               */
              topLeftPoint: {
                  /**
                   * Lat
                   * @description Latitude of the point
                   */
                  lat: number;
                  /**
                   * Lon
                   * @description Longitude of the point
                   */
                  lon: number;
              };
          } | null;
      }[];
      /**
       * Summary
       * @description Summary information about the search results
       */
      summary: {
          /**
           * Position
           * @description Latitude and longitude of the search center
           */
          position: {
              /**
               * Lat
               * @description Latitude of the point
               */
              lat: number;
              /**
               * Lon
               * @description Longitude of the point
               */
              lon: number;
          };
          /**
           * Query
           * @description The query string used
           * @default null
           */
          query: string | null;
          /**
           * Query Type
           * @description The type of query executed
           * @default null
           */
          queryType: string | null;
          /**
           * Total Results
           * @description Total number of results found
           */
          totalResults: number;
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
 * Type of TOMTOM's TOMTOM_POINTS_OF_INTEREST_SEARCH tool input.
 */
type TOMTOM_POINTS_OF_INTEREST_SEARCH_INPUT = {
  /**
   * Brand Set
   * @description Comma-separated list of brand names
   * @default null
   */
  brandSet: string | null;
  /**
   * Category Bias
   * @description Categories to bias in result ranking
   * @default null
   */
  categoryBias: string | null;
  /**
   * Category Set
   * @description Comma-separated list of category IDs
   * @default null
   */
  categorySet: string | null;
  /**
   * Connector Set
   * @description Comma-separated EV connector types
   * @default null
   */
  connectorSet: string | null;
  /**
   * Country Set
   * @description Comma-separated ISO 3166-1 alpha-2 country codes for restricting search
   * @default null
   */
  countrySet: string | null;
  /**
   * Entity Type
   * @description Restrict search to specific entity type
   * @default null
   */
  entityType: string | null;
  /**
   * Fuel Set
   * @description Comma-separated fuel types
   * @default null
   */
  fuelSet: string | null;
  /**
   * Idx Set
   * @description Comma-separated list of indices to include (POI, Geography)
   * @default null
   */
  idxSet: string | null;
  /**
   * Language
   * @description ISO 639-1 language code for result labels
   * @default null
   */
  language: string | null;
  /**
   * Lat
   * @description Latitude for location bias
   * @default null
   */
  lat: number | null;
  /**
   * Limit
   * @description Maximum number of results to return
   * @default null
   */
  limit: number | null;
  /**
   * Lon
   * @description Longitude for location bias
   * @default null
   */
  lon: number | null;
  /**
   * Max Fuzzy Level
   * @description Maximum typo-correction level
   * @default null
   */
  maxFuzzyLevel: number | null;
  /**
   * Min Fuzzy Level
   * @description Minimum typo-correction level
   * @default null
   */
  minFuzzyLevel: number | null;
  /**
   * Ofs
   * @description Starting offset for returned results
   * @default null
   */
  ofs: number | null;
  /**
   * Opening Hours
   * @description Filter POIs by opening hours (e.g., 'nextSevenDays')
   * @default null
   */
  openingHours: string | null;
  /**
   * Query
   * @description Search term, category, or brand name
   */
  query?: string;
  /**
   * Radius
   * @description Radius in meters for search area
   * @default null
   */
  radius: number | null;
  /**
   * Related Pois
   * @description Return related POIs (e.g., 'child', 'all')
   * @default null
   */
  relatedPois: string | null;
  /**
   * Time Zone
   * @description Output local time for opening hours
   * @default null
   */
  timeZone: boolean | null;
  /**
   * Typeahead
   * @description Return incomplete results as users type
   * @default false
   */
  typeahead: boolean | null;
  /**
   * View
   * @description Restrict results to specified map view region
   * @default null
   */
  view: string | null;
};

/**
 * Type of TOMTOM's TOMTOM_POINTS_OF_INTEREST_SEARCH tool output.
 */
type TOMTOM_POINTS_OF_INTEREST_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of points of interest search results
       */
      results: {
          /**
           * AdditionalPoiDetails
           * @description Additional POI details if requested (fields vary by request)
           * @default null
           */
          additionalPoiDetails: {
              [key: string]: unknown;
          } | null;
          /**
           * Address
           * @description Address details of the result
           * @default null
           */
          address: {
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Country Code
               * @description Country ISO code
               * @default null
               */
              countryCode: string | null;
              /**
               * Freeform Address
               * @description Full address as a single string
               * @default null
               */
              freeformAddress: string | null;
              /**
               * Municipality
               * @description Municipality name
               * @default null
               */
              municipality: string | null;
              /**
               * Postal Code
               * @description Postal code of the address
               * @default null
               */
              postalCode: string | null;
              /**
               * Street Name
               * @description Street name of the address
               * @default null
               */
              streetName: string | null;
          } | null;
          /**
           * Dist
           * @description Distance in meters from the bias point
           * @default null
           */
          dist: number | null;
          /**
           * Entry Points
           * @description List of entry points to the POI, if available
           * @default null
           */
          entryPoints: {
              /**
               * Lat
               * @description Latitude of the point
               */
              lat: number;
              /**
               * Lon
               * @description Longitude of the point
               */
              lon: number;
          }[] | null;
          /**
           * Id
           * @description Unique identifier of the result
           */
          id: string;
          /**
           * Info
           * @description Supplementary information about the result
           * @default null
           */
          info: string | null;
          /**
           * Poi
           * @description Point of interest details, if applicable
           * @default null
           */
          poi: {
              /**
               * Category Set
               * @description Categories associated with the POI
               * @default null
               */
              categorySet: {
                  /**
                   * Id
                   * @description Category identifier for the POI
                   */
                  id: number;
              }[] | null;
              /**
               * Name
               * @description Name of the POI
               * @default null
               */
              name: string | null;
              /**
               * Phone
               * @description List of phone numbers for the POI
               * @default null
               */
              phone: string[] | null;
              /**
               * Url
               * @description List of URLs for the POI
               * @default null
               */
              url: string[] | null;
          } | null;
          /**
           * Position
           * @description Geographic position of the result
           */
          position: {
              /**
               * Lat
               * @description Latitude of the point
               */
              lat: number;
              /**
               * Lon
               * @description Longitude of the point
               */
              lon: number;
          };
          /**
           * Score
           * @description Relevance score of the result
           * @default null
           */
          score: number | null;
          /**
           * Type
           * @description Type of the result, typically 'POI'
           * @default null
           */
          type: string | null;
          /**
           * Viewport
           * @description Bounding box defined by top-left and bottom-right points
           * @default null
           */
          viewport: {
              /**
               * Btm Right Point
               * @description Bottom-right corner of the viewport
               */
              btmRightPoint: {
                  /**
                   * Lat
                   * @description Latitude of the point
                   */
                  lat: number;
                  /**
                   * Lon
                   * @description Longitude of the point
                   */
                  lon: number;
              };
              /**
               * Top Left Point
               * @description Top-left corner of the viewport
               */
              topLeftPoint: {
                  /**
                   * Lat
                   * @description Latitude of the point
                   */
                  lat: number;
                  /**
                   * Lon
                   * @description Longitude of the point
                   */
                  lon: number;
              };
          } | null;
      }[];
      /**
       * Summary
       * @description Summary of the search results
       */
      summary: {
          /**
           * Fuzzy Level
           * @description Fuzzy matching level used in the search
           * @default null
           */
          fuzzyLevel: number | null;
          /**
           * Geobias
           * @description Whether geographic bias was applied
           * @default null
           */
          geobias: string | null;
          /**
           * Limit
           * @description Requested maximum number of results
           */
          limit: number;
          /**
           * Offset
           * @description Offset of the returned results for pagination
           */
          offset: number;
          /**
           * Query
           * @description Original search query
           */
          query: string;
          /**
           * Query Type
           * @description Type of query performed
           * @default null
           */
          queryType: string | null;
          /**
           * Total Results
           * @description Total number of matching results
           */
          totalResults: number;
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
 * Type of TOMTOM's TOMTOM_REVERSE_GEOCODE tool input.
 */
type TOMTOM_REVERSE_GEOCODE_INPUT = {
  /**
   * Allow Freeform Newline
   * @description Allow or disallow newlines in freeform address output.
   * @default null
   */
  allowFreeformNewline: boolean | null;
  /**
   * Entity Type
   * @description Restrict results to a specific entity type, e.g., 'CountrySubdivision'.
   * @default null
   */
  entityType: string | null;
  /**
   * Language
   * @description Language for the results, e.g., 'en-US'.
   * @default null
   */
  language: string | null;
  /**
   * Lat
   * @description Latitude in decimal degrees.
   */
  lat?: number;
  /**
   * Lon
   * @description Longitude in decimal degrees.
   */
  lon?: number;
  /**
   * Number
   * @description Street number for more precise results.
   * @default null
   */
  number: string | null;
  /**
   * Radius
   * @description Search radius in meters (default: 100).
   * @default null
   */
  radius: number | null;
  /**
   * Return Road Use
   * @description Include road use information (true or false).
   * @default null
   */
  returnRoadUse: boolean | null;
  /**
   * Return Speed Limit
   * @description Include speed limit information (true or false).
   * @default null
   */
  returnSpeedLimit: boolean | null;
};

/**
 * Type of TOMTOM's TOMTOM_REVERSE_GEOCODE tool output.
 */
type TOMTOM_REVERSE_GEOCODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Addresses
       * @description List of address results.
       */
      addresses: {
          /**
           * Address
           * @description Address components for the location.
           */
          address: {
              /**
               * Country
               * @description Country name.
               * @default null
               */
              country: string | null;
              /**
               * Country Code
               * @description Country ISO code.
               * @default null
               */
              countryCode: string | null;
              /**
               * Country Subdivision
               * @description State, province, or region.
               * @default null
               */
              countrySubdivision: string | null;
              /**
               * Freeform Address
               * @description Formatted address string.
               * @default null
               */
              freeformAddress: string | null;
              /**
               * Municipality
               * @description City or town.
               * @default null
               */
              municipality: string | null;
              /**
               * Postal Code
               * @description Postal code.
               * @default null
               */
              postalCode: string | null;
              /**
               * Street Name
               * @description Name of the street.
               * @default null
               */
              streetName: string | null;
              /**
               * Street Number
               * @description Street number, if available.
               * @default null
               */
              streetNumber: string | null;
          };
          /**
           * Entity Type
           * @description Entity type of the result (e.g., 'Municipality').
           * @default null
           */
          entityType: string | null;
          /**
           * Mapcode
           * @description Mapcode for the address.
           * @default null
           */
          mapcode: string | null;
          /**
           * Position
           * @description Location coordinates for the address.
           */
          position: {
              /**
               * Lat
               * @description Latitude of the found address.
               */
              lat: number;
              /**
               * Lon
               * @description Longitude of the found address.
               */
              lon: number;
          };
          /**
           * Type
           * @description Type of the result (e.g., 'Address', 'Street').
           * @default null
           */
          type: string | null;
      }[];
      /**
       * Summary
       * @description Summary of the reverse geocoding request.
       */
      summary: {
          /**
           * Num Results
           * @description Number of results returned.
           * @default null
           */
          numResults: number | null;
          /**
           * Query
           * @description Original query coordinates as 'lat,lon'.
           */
          query: string;
          /**
           * Query Type
           * @description Type of the query performed.
           * @default null
           */
          queryType: string | null;
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
 * Type of TOMTOM's TOMTOM_STRUCTURED_GEOCODE tool input.
 */
type TOMTOM_STRUCTURED_GEOCODE_INPUT = {
  /**
   * City
   * @description City name
   * @default null
   */
  city: string | null;
  /**
   * Country Code
   * @description Country ISO 3166-1 alpha-2 code
   * @default null
   */
  countryCode: string | null;
  /**
   * Country Subdivision
   * @description State, province, or region
   * @default null
   */
  countrySubdivision: string | null;
  /**
   * Freeform Address
   * @description Complete address as free-form string. Overrides structured fields.
   * @default null
   */
  freeformAddress: string | null;
  /**
   * Key
   * @description Your TomTom API Key
   */
  key?: string;
  /**
   * Language
   * @description IETF BCP 47 language tag for response
   * @default null
   */
  language: string | null;
  /**
   * Lat
   * @description Latitude to bias results
   * @default null
   */
  lat: number | null;
  /**
   * Limit
   * @description Maximum number of results to return (1–100)
   * @default null
   */
  limit: number | null;
  /**
   * Lon
   * @description Longitude to bias results
   * @default null
   */
  lon: number | null;
  /**
   * Municipality
   * @description Administrative municipality
   * @default null
   */
  municipality: string | null;
  /**
   * Postal Code
   * @description Postal code
   * @default null
   */
  postalCode: string | null;
  /**
   * Radius
   * @description Radius in meters to bias results around lat/lon
   * @default null
   */
  radius: number | null;
  /**
   * Street Name
   * @description Street name
   * @default null
   */
  streetName: string | null;
  /**
   * Street Number
   * @description Street number
   * @default null
   */
  streetNumber: string | null;
  /**
   * View
   * @description Map view for biasing results, e.g., 'Unified', 'EU', 'IN'
   * @default null
   */
  view: string | null;
};

/**
 * Type of TOMTOM's TOMTOM_STRUCTURED_GEOCODE tool output.
 */
type TOMTOM_STRUCTURED_GEOCODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Text
       * @description Error message if the request failed
       * @default null
       */
      errorText: string | null;
      /**
       * Results
       * @description List of geocoding results
       */
      results: {
          /**
           * Address
           * @description Structured address fields of the result
           */
          address: {
              /**
               * City
               * @description City name
               * @default null
               */
              city: string | null;
              /**
               * Country Code
               * @description Country ISO 3166-1 alpha-2 code
               * @default null
               */
              countryCode: string | null;
              /**
               * Country Subdivision
               * @description State, province, or region
               * @default null
               */
              countrySubdivision: string | null;
              /**
               * Freeform Address
               * @description Full free-form address string. Overrides structured fields.
               * @default null
               */
              freeformAddress: string | null;
              /**
               * Municipality
               * @description Administrative municipality
               * @default null
               */
              municipality: string | null;
              /**
               * Postal Code
               * @description Postal code
               * @default null
               */
              postalCode: string | null;
              /**
               * Street Name
               * @description Street name
               * @default null
               */
              streetName: string | null;
              /**
               * Street Number
               * @description Street number
               * @default null
               */
              streetNumber: string | null;
          };
          /**
           * Entry Points
           * @description List of navigation entry points
           * @default null
           */
          entryPoints: {
              /**
               * Position
               * @description Coordinates of the entry point
               */
              position: {
                  /**
                   * Lat
                   * @description Latitude in decimal degrees
                   */
                  lat: number;
                  /**
                   * Lon
                   * @description Longitude in decimal degrees
                   */
                  lon: number;
              };
              /**
               * Type
               * @description Type of the entry point, e.g., 'main'
               */
              type: string;
          }[] | null;
          /**
           * Id
           * @description Unique result identifier
           */
          id: string;
          /**
           * Position
           * @description Geocoded coordinates of the result
           */
          position: {
              /**
               * Lat
               * @description Latitude in decimal degrees
               */
              lat: number;
              /**
               * Lon
               * @description Longitude in decimal degrees
               */
              lon: number;
          };
          /**
           * Score
           * @description Confidence score between 0 and 1
           */
          score: number;
          /**
           * Type
           * @description Type of the result, e.g., 'Point Address'
           */
          type: string;
          /**
           * Viewport
           * @description Bounding box defined by top-left and bottom-right points
           * @default null
           */
          viewport: {
              /**
               * Btm Right Point
               * @description Bottom-right corner of the bounding box
               */
              btmRightPoint: {
                  /**
                   * Lat
                   * @description Latitude in decimal degrees
                   */
                  lat: number;
                  /**
                   * Lon
                   * @description Longitude in decimal degrees
                   */
                  lon: number;
              };
              /**
               * Top Left Point
               * @description Top-left corner of the bounding box
               */
              topLeftPoint: {
                  /**
                   * Lat
                   * @description Latitude in decimal degrees
                   */
                  lat: number;
                  /**
                   * Lon
                   * @description Longitude in decimal degrees
                   */
                  lon: number;
              };
          } | null;
      }[];
      /**
       * Status Code
       * @description HTTP status code in error responses
       * @default null
       */
      statusCode: number | null;
      /**
       * Summary
       * @description Summary of the search results
       */
      summary: {
          /**
           * Input
           * @description Original input parameters of the request
           * @default null
           */
          input: {
              [key: string]: unknown;
          } | null;
          /**
           * Num Results
           * @description Number of results returned
           */
          numResults: number;
          /**
           * Query
           * @description The query parameters executed by the service
           */
          query: {
              [key: string]: unknown;
          };
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
 * Type of TOMTOM's TOMTOM_TRAFFIC_INCIDENTS tool input.
 */
type TOMTOM_TRAFFIC_INCIDENTS_INPUT = {
  /**
   * Fields
   * @description Comma-separated incident fields to include, e.g., 'id,geometry,properties'.
   * @default null
   */
  fields: string | null;
  /**
   * Format
   * @description Response format.
   * @default json
   * @enum {string|null}
   */
  format: "json" | "xml" | null;
  /**
   * Language
   * @description Language code for the response.
   * @default en-US
   */
  language: string | null;
  /**
   * Max Lat
   * @description Maximum latitude (northeast) of bounding box.
   */
  max_lat?: number;
  /**
   * Max Lon
   * @description Maximum longitude (northeast) of bounding box.
   */
  max_lon?: number;
  /**
   * Min Lat
   * @description Minimum latitude (southwest) of bounding box.
   */
  min_lat?: number;
  /**
   * Min Lon
   * @description Minimum longitude (southwest) of bounding box.
   */
  min_lon?: number;
  /**
   * Original Position
   * @description Whether to include original position of incidents.
   * @default false
   */
  original_position: boolean | null;
  /**
   * Projection
   * @description Map projection for geometry coordinates.
   * @default EPSG4326
   */
  projection: string | null;
};

/**
 * Type of TOMTOM's TOMTOM_TRAFFIC_INCIDENTS tool output.
 */
type TOMTOM_TRAFFIC_INCIDENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bbox
       * @description Bounding box of all incidents [minLon, minLat, maxLon, maxLat].
       */
      bbox: number[];
      /**
       * Incidents
       * @description List of traffic incidents within the bounding box.
       */
      incidents: {
          /**
           * Geometry
           * @description GeoJSON geometry of the incident.
           */
          geometry: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique identifier of the traffic incident.
           */
          id: string;
          /**
           * Properties
           * @description Properties and details of the incident.
           */
          properties: {
              [key: string]: unknown;
          };
      }[];
      /**
       * Type
       * @description Type of feature collection, typically 'FeatureCollection'.
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
 * Type map of all available tool input types for toolkit "TOMTOM".
 */
export type TOMTOM_TOOL_INPUTS = {
  ASSETS_LIST_FONTS: TOMTOM_ASSETS_LIST_FONTS_INPUT
  ASSETS_LIST_SPRITES: TOMTOM_ASSETS_LIST_SPRITES_INPUT
  ASSETS_LIST_STYLES: TOMTOM_ASSETS_LIST_STYLES_INPUT
  CALCULATE_ROUTE: TOMTOM_CALCULATE_ROUTE_INPUT
  CATEGORY_SEARCH: TOMTOM_CATEGORY_SEARCH_INPUT
  EV_CHARGING_STATIONS_AVAILABLE: TOMTOM_EV_CHARGING_STATIONS_AVAILABLE_INPUT
  FLOW_SEGMENT_DATA: TOMTOM_FLOW_SEGMENT_DATA_INPUT
  FUZZY_SEARCH: TOMTOM_FUZZY_SEARCH_INPUT
  LIST_SPRITE_VERSIONS: TOMTOM_LIST_SPRITE_VERSIONS_INPUT
  MAP_DISPLAY_COPYRIGHTS: TOMTOM_MAP_DISPLAY_COPYRIGHTS_INPUT
  MAP_DISPLAY_RASTER_TILE: TOMTOM_MAP_DISPLAY_RASTER_TILE_INPUT
  MAP_DISPLAY_STATIC_IMAGE: TOMTOM_MAP_DISPLAY_STATIC_IMAGE_INPUT
  MAP_DISPLAY_WMS_GET_MAP: TOMTOM_MAP_DISPLAY_WMS_GET_MAP_INPUT
  MATRIX_ROUTING: TOMTOM_MATRIX_ROUTING_INPUT
  NEARBY_SEARCH: TOMTOM_NEARBY_SEARCH_INPUT
  POINTS_OF_INTEREST_SEARCH: TOMTOM_POINTS_OF_INTEREST_SEARCH_INPUT
  REVERSE_GEOCODE: TOMTOM_REVERSE_GEOCODE_INPUT
  STRUCTURED_GEOCODE: TOMTOM_STRUCTURED_GEOCODE_INPUT
  TRAFFIC_INCIDENTS: TOMTOM_TRAFFIC_INCIDENTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TOMTOM".
 */
export type TOMTOM_TOOL_OUTPUTS = {
  ASSETS_LIST_FONTS: TOMTOM_ASSETS_LIST_FONTS_OUTPUT
  ASSETS_LIST_SPRITES: TOMTOM_ASSETS_LIST_SPRITES_OUTPUT
  ASSETS_LIST_STYLES: TOMTOM_ASSETS_LIST_STYLES_OUTPUT
  CALCULATE_ROUTE: TOMTOM_CALCULATE_ROUTE_OUTPUT
  CATEGORY_SEARCH: TOMTOM_CATEGORY_SEARCH_OUTPUT
  EV_CHARGING_STATIONS_AVAILABLE: TOMTOM_EV_CHARGING_STATIONS_AVAILABLE_OUTPUT
  FLOW_SEGMENT_DATA: TOMTOM_FLOW_SEGMENT_DATA_OUTPUT
  FUZZY_SEARCH: TOMTOM_FUZZY_SEARCH_OUTPUT
  LIST_SPRITE_VERSIONS: TOMTOM_LIST_SPRITE_VERSIONS_OUTPUT
  MAP_DISPLAY_COPYRIGHTS: TOMTOM_MAP_DISPLAY_COPYRIGHTS_OUTPUT
  MAP_DISPLAY_RASTER_TILE: TOMTOM_MAP_DISPLAY_RASTER_TILE_OUTPUT
  MAP_DISPLAY_STATIC_IMAGE: TOMTOM_MAP_DISPLAY_STATIC_IMAGE_OUTPUT
  MAP_DISPLAY_WMS_GET_MAP: TOMTOM_MAP_DISPLAY_WMS_GET_MAP_OUTPUT
  MATRIX_ROUTING: TOMTOM_MATRIX_ROUTING_OUTPUT
  NEARBY_SEARCH: TOMTOM_NEARBY_SEARCH_OUTPUT
  POINTS_OF_INTEREST_SEARCH: TOMTOM_POINTS_OF_INTEREST_SEARCH_OUTPUT
  REVERSE_GEOCODE: TOMTOM_REVERSE_GEOCODE_OUTPUT
  STRUCTURED_GEOCODE: TOMTOM_STRUCTURED_GEOCODE_OUTPUT
  TRAFFIC_INCIDENTS: TOMTOM_TRAFFIC_INCIDENTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TOMTOM toolkit.
 */
export const TOMTOM = {
  slug: "tomtom",
  tools: {
    /**
     * Tool to list available font asset versions for map rendering. call after confirming the api key is valid.
     */
    ASSETS_LIST_FONTS: "TOMTOM_ASSETS_LIST_FONTS",
    /**
     * Tool to list available sprites for a given asset version. use after determining the assetversion.
     */
    ASSETS_LIST_SPRITES: "TOMTOM_ASSETS_LIST_SPRITES",
    /**
     * Tool to list available map styles. use after selecting an asset version to retrieve style options.
     */
    ASSETS_LIST_STYLES: "TOMTOM_ASSETS_LIST_STYLES",
    /**
     * Tool to calculate driving routes. use when you need directions with optional waypoints and traffic consideration.
     */
    CALCULATE_ROUTE: "TOMTOM_CALCULATE_ROUTE",
    /**
     * Tool to search for points of interest by category. use when you need to find pois within a specific category around a location or area.
     */
    CATEGORY_SEARCH: "TOMTOM_CATEGORY_SEARCH",
    /**
     * Tool to retrieve ev charging station availability info. use when you have the connectorsetid and poiid to get live availability.
     */
    EV_CHARGING_STATIONS_AVAILABLE: "TOMTOM_EV_CHARGING_STATIONS_AVAILABLE",
    /**
     * Tool to retrieve traffic flow data for a specific road segment. use when you need current and free flow speeds for given coordinates.
     */
    FLOW_SEGMENT_DATA: "TOMTOM_FLOW_SEGMENT_DATA",
    /**
     * Tool to perform a fuzzy search for addresses and points of interest. use when you need flexible matching on free-form location queries.
     */
    FUZZY_SEARCH: "TOMTOM_FUZZY_SEARCH",
    /**
     * Tool to list available sprite asset versions. use when you need to know which sprite versions are available after obtaining a valid api key.
     */
    LIST_SPRITE_VERSIONS: "TOMTOM_LIST_SPRITE_VERSIONS",
    /**
     * Tool to retrieve copyright information for a specific map tile. use when you need to display or verify attribution for a given tile.
     */
    MAP_DISPLAY_COPYRIGHTS: "TOMTOM_MAP_DISPLAY_COPYRIGHTS",
    /**
     * Tool to retrieve a raster map tile for specified coordinates and zoom. use when you need direct tile image data for custom map rendering.
     */
    MAP_DISPLAY_RASTER_TILE: "TOMTOM_MAP_DISPLAY_RASTER_TILE",
    /**
     * Tool to fetch a static map snapshot given center coords and zoom. use when you need a standalone map image for display.
     */
    MAP_DISPLAY_STATIC_IMAGE: "TOMTOM_MAP_DISPLAY_STATIC_IMAGE",
    /**
     * Tool to retrieve a map image via wms getmap. use when you need georeferenced map layers for custom rendering.
     */
    MAP_DISPLAY_WMS_GET_MAP: "TOMTOM_MAP_DISPLAY_WMS_GET_MAP",
    /**
     * Tool to calculate travel time and distance matrix between multiple locations. use when you require a matrix of travel times and distances between multiple origins and destinations.
     */
    MATRIX_ROUTING: "TOMTOM_MATRIX_ROUTING",
    /**
     * Tool to find points of interest near a specified location. use after confirming coordinates to discover nearby pois.
     */
    NEARBY_SEARCH: "TOMTOM_NEARBY_SEARCH",
    /**
     * Tool to search for points of interest by query. use when you need poi suggestions by name or category.
     */
    POINTS_OF_INTEREST_SEARCH: "TOMTOM_POINTS_OF_INTEREST_SEARCH",
    /**
     * Tool to convert geographic coordinates into a human-readable address. use when you need to obtain address information from latitude and longitude values.
     */
    REVERSE_GEOCODE: "TOMTOM_REVERSE_GEOCODE",
    /**
     * Tool to convert structured address fields into coordinates. use after collecting street, city, and postal code.
     */
    STRUCTURED_GEOCODE: "TOMTOM_STRUCTURED_GEOCODE",
    /**
     * Tool to retrieve detailed traffic incidents within a bounding box. use when you need incident details for a defined map area.
     */
    TRAFFIC_INCIDENTS: "TOMTOM_TRAFFIC_INCIDENTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TOMTOM".
 */
export type TOMTOM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TOMTOM".
 */
export type TOMTOM_TRIGGER_EVENTS = {}
