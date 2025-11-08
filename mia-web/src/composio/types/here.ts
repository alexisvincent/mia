// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HERE's HERE_AUTOSUGGEST tool input.
 */
type HERE_AUTOSUGGEST_INPUT = {
  /**
   * At
   * @description Latitude,longitude to bias suggestions (e.g., '52.5200,13.4050')
   * @default null
   */
  at: string | null;
  /**
   * In
   * @description Geographic filter region (circle, bbox, or political boundary)
   * @default null
   */
  in: string | null;
  /**
   * Lang
   * @description IETF BCP 47 language tag for results (e.g., 'en-US')
   * @default null
   */
  lang: string | null;
  /**
   * Limit
   * @description Maximum number of suggestions to return
   * @default null
   */
  limit: number | null;
  /**
   * Q
   * @description Free-form text to suggest on (partial or misspelled)
   */
  q?: string;
};

/**
 * Type of HERE's HERE_AUTOSUGGEST tool output.
 */
type HERE_AUTOSUGGEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of typeahead suggestion results
       */
      items: {
          /**
           * Address
           * @description Address details when applicable
           * @default null
           */
          address: {
              /**
               * City
               * @description City or locality
               * @default null
               */
              city: string | null;
              /**
               * Country Code
               * @description Three-letter country code
               * @default null
               */
              countryCode: string | null;
              /**
               * Country Name
               * @description Localized country name
               * @default null
               */
              countryName: string | null;
              /**
               * County
               * @description County or district
               * @default null
               */
              county: string | null;
              /**
               * District
               * @description District or neighborhood
               * @default null
               */
              district: string | null;
              /**
               * Label
               * @description Localized, human-readable full address
               * @default null
               */
              label: string | null;
              /**
               * State
               * @description State or region name
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Street name
               * @default null
               */
              street: string | null;
          } | null;
          /**
           * Id
           * @description Stable HERE identifier for the suggestion
           */
          id: string;
          /**
           * Result Type
           * @description Type of result (place, address, etc.)
           * @default null
           */
          resultType: string | null;
          /**
           * Title
           * @description Display label for the suggestion
           */
          title: string;
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
 * Type of HERE's HERE_BROWSE tool input.
 */
type HERE_BROWSE_INPUT = {
  /**
   * At
   * @description Center point for the search area, formatted as 'lat,lng'.
   */
  at?: string;
  /**
   * Categories
   * @description Comma-separated HERE Places category IDs to filter results (e.g., '700-7000-0322').
   * @default null
   */
  categories: string | null;
  /**
   * Food Types
   * @description Comma-separated HERE Places cuisine/food type IDs to filter results.
   * @default null
   */
  foodTypes: string | null;
  /**
   * Lang
   * @description BCP 47 language tag for localized results, e.g., 'en-US'.
   * @default null
   */
  lang: string | null;
  /**
   * Limit
   * @description Maximum number of items to return.
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description Text filter to match place names within the chosen categories.
   * @default null
   */
  name: string | null;
};

/**
 * Type of HERE's HERE_BROWSE tool output.
 */
type HERE_BROWSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of places found in the browse search.
       */
      items: {
          /**
           * Address
           * @description Structured address components.
           */
          address: {
              /**
               * City
               * @description City name.
               * @default null
               */
              city: string | null;
              /**
               * Country Code
               * @description ISO 3166-1 alpha-2 country code.
               */
              countryCode: string;
              /**
               * Country Name
               * @description Full country name.
               * @default null
               */
              countryName: string | null;
              /**
               * County
               * @description County name.
               * @default null
               */
              county: string | null;
              /**
               * County Code
               * @description County code.
               * @default null
               */
              countyCode: string | null;
              /**
               * District
               * @description District name.
               * @default null
               */
              district: string | null;
              /**
               * Label
               * @description Formatted address label.
               */
              label: string;
              /**
               * Postal Code
               * @description Postal code.
               * @default null
               */
              postalCode: string | null;
              /**
               * State
               * @description State or region name.
               * @default null
               */
              state: string | null;
              /**
               * State Code
               * @description State or region code.
               * @default null
               */
              stateCode: string | null;
          };
          /**
           * Id
           * @description Unique HERE identifier for the item.
           */
          id: string;
          /**
           * Language
           * @description Language code of the item text.
           * @default null
           */
          language: string | null;
          /**
           * Position
           * @description Coordinates of the place.
           */
          position: {
              /**
               * Lat
               * @description Latitude of the place.
               */
              lat: number;
              /**
               * Lng
               * @description Longitude of the place.
               */
              lng: number;
          };
          /**
           * Result Type
           * @description Type of result, e.g., 'place', 'street'.
           */
          resultType: string;
          /**
           * Title
           * @description Display name of the place.
           */
          title: string;
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
 * Type of HERE's HERE_CALCULATE_ROUTE tool input.
 */
type HERE_CALCULATE_ROUTE_INPUT = {
  /**
   * Fuel Type
   * @description Fuel type affecting toll/environmental rules.
   * @default null
   * @enum {string|null}
   */
  fuelType: "petrol" | "diesel" | "lng" | "lpg" | "cng" | "ethanol" | "propane" | "hydrogen" | "electric" | null;
  /**
   * Ignore Preferred Routes
   * @description Disable preferred truck routes when true.
   * @default null
   */
  ignorePreferredRoutes: boolean | null;
  /**
   * Instruction Format
   * @description Format for maneuver instructions.
   * @default null
   * @enum {string|null}
   */
  instructionFormat: "text" | "html" | null;
  /**
   * Maneuver Attributes
   * @description Additional maneuver attributes to include, e.g., ['direction','action'].
   * @default null
   */
  maneuverAttributes: string[] | null;
  /**
   * Mode
   * @description Routing profile, including vehicle type, e.g., 'fastest;truck'.
   */
  mode?: string;
  /**
   * Overlays
   * @description Comma-separated map overlay names for custom routing layers.
   * @default null
   */
  overlays: string | null;
  /**
   * Route Attributes
   * @description List of route attributes to return, e.g., ['shape', 'summary'].
   * @default null
   */
  routeAttributes: string[] | null;
  /**
   * Waypoints
   * @description List of waypoints as 'latitude,longitude'; first is origin, last is destination, intermediates are via points.
   */
  waypoints?: string[];
};

/**
 * Type of HERE's HERE_CALCULATE_ROUTE tool output.
 */
type HERE_CALCULATE_ROUTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response
       * @description Response container for route data.
       */
      response: {
          /**
           * Route
           * @description List of computed routes.
           */
          route: {
              /**
               * Leg
               * @description List of legs constituting this route.
               */
              leg: {
                  /**
                   * Summary
                   * @description Summary metrics for this route leg.
                   */
                  summary: {
                      /**
                       * Length
                       * @description Length for this leg in meters.
                       */
                      length: number;
                      /**
                       * Travel Time
                       * @description Travel time for this leg in seconds.
                       */
                      travelTime: number;
                  };
              }[];
              /**
               * Shape
               * @description Route geometry as list of 'lat,lon' points if requested.
               * @default null
               */
              shape: string[] | null;
          }[];
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
 * Type of HERE's HERE_COORDINATES_TO_TILE_INDICES tool input.
 */
type HERE_COORDINATES_TO_TILE_INDICES_INPUT = {
  /**
   * Lat
   * @description Latitude in degrees, must be between -85 and 85
   */
  lat?: number;
  /**
   * Lng
   * @description Longitude in degrees, must be between -180 and 180
   */
  lng?: number;
  /**
   * Zoom
   * @description Zoom level, integer between 0 and 20
   */
  zoom?: number;
};

/**
 * Type of HERE's HERE_COORDINATES_TO_TILE_INDICES tool output.
 */
type HERE_COORDINATES_TO_TILE_INDICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tile Bounds
       * @description Geographic bounds of the tile in degrees
       */
      tile_bounds: {
          /**
           * East
           * @description Eastern longitude bound of the tile in degrees
           */
          east: number;
          /**
           * North
           * @description Northern latitude bound of the tile in degrees
           */
          north: number;
          /**
           * South
           * @description Southern latitude bound of the tile in degrees
           */
          south: number;
          /**
           * West
           * @description Western longitude bound of the tile in degrees
           */
          west: number;
      };
      /**
       * X
       * @description Tile X index
       */
      x: number;
      /**
       * Y
       * @description Tile Y index
       */
      y: number;
      /**
       * Zoom
       * @description Zoom level
       */
      zoom: number;
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
 * Type of HERE's HERE_DISCOVER tool input.
 */
type HERE_DISCOVER_INPUT = {
  /**
   * At
   * @description Latitude and longitude to center the search, formatted 'lat,lng'. Required if 'in' is omitted.
   * @default null
   */
  at: string | null;
  /**
   * In
   * @description Geographical filter for search area instead of 'at'. Examples: 'bbox:west,south,east,north' or 'countryCode:DEU'.
   * @default null
   */
  in_: string | null;
  /**
   * Lang
   * @description Preferred response language (BCP-47), e.g., 'en-US'.
   * @default null
   */
  lang: string | null;
  /**
   * Limit
   * @description Maximum number of results to return (1-100).
   * @default null
   */
  limit: number | null;
  /**
   * Q
   * @description Free-form search query for places or addresses.
   */
  q?: string;
};

/**
 * Type of HERE's HERE_DISCOVER tool output.
 */
type HERE_DISCOVER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of matching places or addresses.
       */
      items: {
          /**
           * Address
           * @description Structured address fields.
           */
          address: {
              /**
               * City
               * @description City name.
               * @default null
               */
              city: string | null;
              /**
               * Country Code
               * @description Country code (ISO, e.g., 'DEU').
               * @default null
               */
              countryCode: string | null;
              /**
               * Country Name
               * @description Country name.
               * @default null
               */
              countryName: string | null;
              /**
               * County
               * @description County or district name.
               * @default null
               */
              county: string | null;
              /**
               * House Number
               * @description House or building number.
               * @default null
               */
              houseNumber: string | null;
              /**
               * Label
               * @description Full address label.
               */
              label: string;
              /**
               * Postal Code
               * @description Postal code.
               * @default null
               */
              postalCode: string | null;
              /**
               * State
               * @description State or region name.
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Street name.
               * @default null
               */
              street: string | null;
          };
          /**
           * Categories
           * @description Matched categories for places.
           * @default null
           */
          categories: {
              /**
               * Id
               * @description Category identifier.
               */
              id: string;
              /**
               * Name
               * @description Category name.
               */
              name: string;
              /**
               * Primary
               * @description True if this is the primary category.
               * @default false
               */
              primary: boolean | null;
          }[] | null;
          /**
           * Distance
           * @description Distance in meters from the 'at' location.
           * @default null
           */
          distance: number | null;
          /**
           * Id
           * @description Unique HERE identifier for the result.
           */
          id: string;
          /**
           * Position
           * @description Coordinates of the result.
           */
          position: {
              /**
               * Lat
               * @description Latitude of the result.
               */
              lat: number;
              /**
               * Lng
               * @description Longitude of the result.
               */
              lng: number;
          };
          /**
           * Result Type
           * @description Type of result, e.g., 'place' or 'address'.
           */
          resultType: string;
          /**
           * Title
           * @description Name of the place or address.
           */
          title: string;
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
 * Type of HERE's HERE_GEOCODE tool input.
 */
type HERE_GEOCODE_INPUT = {
  /**
   * At
   * @description Position context to bias results, formatted 'lat,lng'.
   * @default null
   */
  at: string | null;
  /**
   * In
   * @description Spatial filter for search area, e.g., 'circle:lat,lng;r=radius', 'bbox:west,south,east,north', or country/region filters as documented.
   * @default null
   */
  in_: string | null;
  /**
   * Lang
   * @description Response language (BCP-47), e.g., 'en-US'.
   * @default null
   */
  lang: string | null;
  /**
   * Limit
   * @description Maximum number of results to return.
   * @default null
   */
  limit: number | null;
  /**
   * Political View
   * @description Political view to use for disputed areas (ISO country code).
   * @default null
   */
  politicalView: string | null;
  /**
   * Q
   * @description Free-text address or place query. Required if 'qq' is not used.
   * @default null
   */
  q: string | null;
  /**
   * Qq
   * @description Qualified key=value query string, e.g., 'street=Invalidenstr;city=Berlin;postalCode=10115;country=DE'. Required if 'q' is not used.
   * @default null
   */
  qq: string | null;
  /**
   * Show
   * @description Additional sections to include, e.g., 'tz' for time zone.
   * @default null
   */
  show: string | null;
};

/**
 * Type of HERE's HERE_GEOCODE tool output.
 */
type HERE_GEOCODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of geocoding results.
       */
      items: {
          /**
           * Access
           * @description Optional access point coordinates.
           * @default null
           */
          access: {
              /**
               * Lat
               * @description Latitude of the position.
               */
              lat: number;
              /**
               * Lng
               * @description Longitude of the position.
               */
              lng: number;
          }[] | null;
          /**
           * Address
           * @description Structured address components.
           */
          address: {
              /**
               * Block
               * @description Block name.
               * @default null
               */
              block: string | null;
              /**
               * City
               * @description City name.
               * @default null
               */
              city: string | null;
              /**
               * Country Code
               * @description ISO 3166-1 alpha-2 country code.
               */
              countryCode: string;
              /**
               * Country Name
               * @description Full country name.
               */
              countryName: string;
              /**
               * County
               * @description County name.
               * @default null
               */
              county: string | null;
              /**
               * County Code
               * @description County code.
               * @default null
               */
              countyCode: string | null;
              /**
               * District
               * @description District name.
               * @default null
               */
              district: string | null;
              /**
               * House Number
               * @description House number.
               * @default null
               */
              houseNumber: string | null;
              /**
               * Label
               * @description Formatted address label.
               */
              label: string;
              /**
               * Postal Code
               * @description Postal code.
               * @default null
               */
              postalCode: string | null;
              /**
               * State
               * @description State or region name.
               * @default null
               */
              state: string | null;
              /**
               * State Code
               * @description State or region code.
               * @default null
               */
              stateCode: string | null;
              /**
               * Street
               * @description Street name.
               * @default null
               */
              street: string | null;
              /**
               * Sub Block
               * @description Sub-block name.
               * @default null
               */
              subBlock: string | null;
              /**
               * Subdistrict
               * @description Subdistrict name.
               * @default null
               */
              subdistrict: string | null;
          };
          /**
           * House Number Type
           * @description Method for house number determination.
           * @default null
           */
          houseNumberType: string | null;
          /**
           * Id
           * @description Stable HERE identifier for the entity.
           */
          id: string;
          /**
           * MapView
           * @description Optional viewport bounding box.
           * @default null
           */
          mapView: {
              /**
               * East
               * @description Longitude of the east boundary.
               */
              east: number;
              /**
               * North
               * @description Latitude of the north boundary.
               */
              north: number;
              /**
               * South
               * @description Latitude of the south boundary.
               */
              south: number;
              /**
               * West
               * @description Longitude of the west boundary.
               */
              west: number;
          } | null;
          /**
           * Position
           * @description Representative coordinates.
           */
          position: {
              /**
               * Lat
               * @description Latitude of the position.
               */
              lat: number;
              /**
               * Lng
               * @description Longitude of the position.
               */
              lng: number;
          };
          /**
           * Result Type
           * @description Type of result (e.g., houseNumber, street).
           */
          resultType: string;
          /**
           * Scoring
           * @description Relevance scoring metadata.
           * @default null
           */
          scoring: {
              /**
               * Field Score
               * @description Field-level relevance scores.
               * @default null
               */
              fieldScore: {
                  [key: string]: number;
              } | null;
              /**
               * Query Score
               * @description Overall query relevance score.
               * @default null
               */
              queryScore: number | null;
          } | null;
          /**
           * TimeZone
           * @description Time zone info when requested.
           * @default null
           */
          timeZone: {
              /**
               * Dst Offset
               * @description Daylight savings offset.
               * @default null
               */
              dstOffset: string | null;
              /**
               * Name
               * @description Time zone identifier.
               */
              name: string;
              /**
               * Offset
               * @description UTC offset.
               * @default null
               */
              offset: string | null;
          } | null;
          /**
           * Title
           * @description Display name of the result.
           */
          title: string;
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
 * Type of HERE's HERE_GET_AERIAL_TILE tool input.
 */
type HERE_GET_AERIAL_TILE_INPUT = {
  /**
   * Features
   * @description Optional features string, e.g., 'vehicle_restrictions:active_and_inactive'
   * @default null
   */
  features: string | null;
  /**
   * Format
   * @description Image format for the tile
   * @enum {string}
   */
  format?: "png" | "png8";
  /**
   * Lang
   * @description Primary label language (ISO 639-1 code)
   * @default null
   */
  lang: string | null;
  /**
   * Lang2
   * @description Secondary label language (ISO 639-1 code)
   * @default null
   */
  lang2: string | null;
  /**
   * Ppi
   * @description Pixels-per-inch for label sizing, e.g., 400
   * @default null
   */
  ppi: number | null;
  /**
   * Pview
   * @description Geopolitical view (ISO 3166-1 alpha-2 code)
   * @default null
   */
  pview: string | null;
  /**
   * Size
   * @description Tile size in pixels (commonly 256 or 512)
   * @default null
   */
  size: number | null;
  /**
   * Style
   * @description Map style: 'satellite.day' for aerial imagery (no labels) or 'explore.satellite.day' for hybrid imagery with labels
   * @default satellite.day
   * @enum {string}
   */
  style: "satellite.day" | "explore.satellite.day";
  /**
   * X
   * @description Tile column index (XYZ scheme), must be non-negative
   */
  x?: number;
  /**
   * Y
   * @description Tile row index (XYZ scheme), must be non-negative
   */
  y?: number;
  /**
   * Zoom
   * @description Tile zoom level (XYZ scheme), must be non-negative
   */
  zoom?: number;
};

/**
 * Type of HERE's HERE_GET_AERIAL_TILE tool output.
 */
type HERE_GET_AERIAL_TILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Binary image data of the requested tile
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
 * Type of HERE's HERE_GET_BASE_MAP_TILE tool input.
 */
type HERE_GET_BASE_MAP_TILE_INPUT = {
  /**
   * Format
   * @description Image format for the tile.
   * @enum {string}
   */
  format?: "png" | "png8" | "png32" | "jpg" | "jpg70";
  /**
   * Scheme
   * @description Tile scheme (background only, no labels).
   * @enum {string}
   */
  scheme?: "normal.day" | "normal.day.grey" | "normal.day.transit" | "normal.night" | "normal.night.grey" | "normal.night.transit" | "reduced.day" | "reduced.night" | "satellite.day" | "satellite.day.transit";
  /**
   * Size
   * @description Tile image size in pixels. Allowed values: 256 or 512.
   * @enum {integer}
   */
  size?: 256 | 512;
  /**
   * X
   * @description Tile column index in Web Mercator grid, zero-based.
   */
  x?: number;
  /**
   * Y
   * @description Tile row index in Web Mercator grid, zero-based.
   */
  y?: number;
  /**
   * Zoom
   * @description Zoom level as an integer between 0 (world) and 20 (street-level).
   */
  zoom?: number;
};

/**
 * Type of HERE's HERE_GET_BASE_MAP_TILE tool output.
 */
type HERE_GET_BASE_MAP_TILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Downloaded map tile image content.
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
 * Type of HERE's HERE_GET_HYBRID_TILE tool input.
 */
type HERE_GET_HYBRID_TILE_INPUT = {
  /**
   * Format
   * @description Tile image format, either 'png' (full-color) or 'png8' (8-bit color)
   * @enum {string}
   */
  format?: "png" | "png8";
  /**
   * Size
   * @description Tile size in pixels (width and height), either 256 or 512
   * @enum {integer}
   */
  size?: 256 | 512;
  /**
   * X
   * @description Tile X coordinate, between 0 and 2^zoom - 1
   */
  x?: number;
  /**
   * Y
   * @description Tile Y coordinate, between 0 and 2^zoom - 1
   */
  y?: number;
  /**
   * Zoom
   * @description Zoom level, integer between 0 and 20 inclusive
   */
  zoom?: number;
};

/**
 * Type of HERE's HERE_GET_HYBRID_TILE tool output.
 */
type HERE_GET_HYBRID_TILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Downloaded hybrid map tile as binary content
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
 * Type of HERE's HERE_GET_ISOLINES tool input.
 */
type HERE_GET_ISOLINES_INPUT = {
  /**
   * Departure Time
   * @description Departure time in ISO 8601 format for traffic-aware isolines.
   * @default null
   */
  departureTime: string | null;
  /**
   * Destination
   * @description Target coordinate for reverse isolines, formatted as 'lat,lng'. Required if origin is not provided.
   * @default null
   */
  destination: string | null;
  /**
   * Empty Weight
   * @description Vehicle empty weight restriction parameter.
   * @default null
   */
  emptyWeight: number | null;
  /**
   * Origin
   * @description Starting coordinate for forward isolines, formatted as 'lat,lng'. Required if destination is not provided.
   * @default null
   */
  origin: string | null;
  /**
   * Range[Type]
   * @description Basis of isoline calculation: time (seconds), distance (meters), or consumption.
   * @enum {string}
   */
  "range[type]"?: "time" | "distance" | "consumption";
  /**
   * Range[Values]
   * @description One or more range break values; seconds for time, meters for distance.
   */
  "range[values]"?: number[];
  /**
   * Routing Mode
   * @description Routing preference for calculation.
   * @default null
   * @enum {string|null}
   */
  routingMode: "fast" | "short" | null;
  /**
   * Tires Count
   * @description Vehicle tires/wheels count restriction parameter.
   * @default null
   */
  tiresCount: number | null;
  /**
   * Transport Mode
   * @description Transport mode for calculation.
   * @default null
   * @enum {string|null}
   */
  transportMode: "car" | "pedestrian" | "truck" | "taxi" | "bus" | null;
};

/**
 * Type of HERE's HERE_GET_ISOLINES tool output.
 */
type HERE_GET_ISOLINES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Arrival
       * @description Arrival information for reverse isolines.
       * @default null
       */
      arrival: {
          /**
           * Place
           * @description Arrival place information for reverse isolines.
           */
          place: {
              /**
               * Location
               * @description Snapped coordinates of the place.
               */
              location: {
                  /**
                   * Lat
                   * @description Latitude of the point.
                   */
                  lat: number;
                  /**
                   * Lng
                   * @description Longitude of the point.
                   */
                  lng: number;
              };
              /**
               * Original Location
               * @description Original requested coordinates of the place.
               */
              originalLocation: {
                  /**
                   * Lat
                   * @description Latitude of the point.
                   */
                  lat: number;
                  /**
                   * Lng
                   * @description Longitude of the point.
                   */
                  lng: number;
              };
              /**
               * Type
               * @description Type of place, e.g., 'place'.
               */
              type: string;
          };
          /**
           * Time
           * @description Arrival time for reverse isolines.
           */
          time: string;
      } | null;
      /**
       * Departure
       * @description Departure information for forward isolines.
       * @default null
       */
      departure: {
          /**
           * Place
           * @description Departure place information for forward isolines.
           */
          place: {
              /**
               * Location
               * @description Snapped coordinates of the place.
               */
              location: {
                  /**
                   * Lat
                   * @description Latitude of the point.
                   */
                  lat: number;
                  /**
                   * Lng
                   * @description Longitude of the point.
                   */
                  lng: number;
              };
              /**
               * Original Location
               * @description Original requested coordinates of the place.
               */
              originalLocation: {
                  /**
                   * Lat
                   * @description Latitude of the point.
                   */
                  lat: number;
                  /**
                   * Lng
                   * @description Longitude of the point.
                   */
                  lng: number;
              };
              /**
               * Type
               * @description Type of place, e.g., 'place'.
               */
              type: string;
          };
      } | null;
      /**
       * Isolines
       * @description Calculated isolines for requested ranges.
       */
      isolines: {
          /**
           * Polygons
           * @description Polygon(s) defining isoline boundary.
           */
          polygons: {
              /**
               * Outer
               * @description Flexible polyline encoding of the isoline boundary.
               */
              outer: string;
          }[];
          /**
           * Range
           * @description Range information for the isoline.
           */
          range: {
              /**
               * Type
               * @description Basis of isoline: time, distance, or consumption.
               */
              type: string;
              /**
               * Value
               * @description Range value for this isoline.
               */
              value: number;
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
 * Type of HERE's HERE_GET_LABEL_TILE tool input.
 */
type HERE_GET_LABEL_TILE_INPUT = {
  /**
   * Format
   * @description Image format for the tile.
   * @default png8
   * @enum {string}
   */
  format: "png" | "png8";
  /**
   * Lang
   * @description Primary label language (ISO 639-1 code).
   * @default null
   */
  lang: string | null;
  /**
   * Lang2
   * @description Secondary label language (ISO 639-1 code).
   * @default null
   */
  lang2: string | null;
  /**
   * Ppi
   * @description Pixels-per-inch for label rendering, e.g., 320.
   * @default null
   */
  ppi: number | null;
  /**
   * Pview
   * @description Geopolitical view code (three letters, e.g., 'USA', 'DEU'). Must match ^[a-zA-Z]{3}$.
   * @default null
   */
  pview: string | null;
  /**
   * Scheme
   * @description Map rendering scheme for labels. See HERE docs for options.
   * @enum {string}
   */
  scheme?: "normal.day" | "normal.day.grey" | "normal.day.transit" | "normal.night" | "normal.night.grey" | "normal.night.transit" | "terrain.day" | "terrain.day.grey" | "terrain.day.transit";
  /**
   * Size
   * @description Tile size in pixels. Common values: 256 or 512.
   * @default 256
   * @enum {integer}
   */
  size: 256 | 512;
  /**
   * X
   * @description Tile column index (0 ≤ x < 2^zoom).
   */
  x?: number;
  /**
   * Y
   * @description Tile row index (0 ≤ y < 2^zoom).
   */
  y?: number;
  /**
   * Zoom
   * @description Zoom level (0-22).
   */
  zoom?: number;
};

/**
 * Type of HERE's HERE_GET_LABEL_TILE tool output.
 */
type HERE_GET_LABEL_TILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Binary image data of the requested tile.
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
 * Type of HERE's HERE_GET_LINE_TILE tool input.
 */
type HERE_GET_LINE_TILE_INPUT = {
  /**
   * Format
   * @description Image format for the tile, either 'png' or 'png8'
   * @enum {string}
   */
  format?: "png" | "png8";
  /**
   * Lg
   * @description Optional BCP-47 language tag for localized content
   * @default null
   */
  lg: string | null;
  /**
   * Ppi
   * @description Optional pixels-per-inch hint affecting rendering density
   * @default null
   */
  ppi: number | null;
  /**
   * Scheme
   * @description Rendering scheme/style for the line tile, e.g., 'normal.day'. See HERE Map Tile API docs for supported schemes.
   */
  scheme?: string;
  /**
   * Size
   * @description Tile size in pixels (width and height), either 256 or 512
   * @enum {integer}
   */
  size?: 256 | 512;
  /**
   * X
   * @description Tile column index (Web Mercator), must be non-negative
   */
  x?: number;
  /**
   * Y
   * @description Tile row index (Web Mercator), must be non-negative
   */
  y?: number;
  /**
   * Zoom
   * @description Tile zoom level (Web Mercator), must be non-negative
   */
  zoom?: number;
};

/**
 * Type of HERE's HERE_GET_LINE_TILE tool output.
 */
type HERE_GET_LINE_TILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Downloaded line overlay map tile as binary content
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
 * Type of HERE's HERE_GET_MAP_IMAGE tool input.
 */
type HERE_GET_MAP_IMAGE_INPUT = {
  /**
   * Features
   * @description Comma-separated list of feature toggles with modes. E.g., 'vehicle_restrictions:active_and_inactive,pois:disabled'.
   * @default null
   */
  features: string | null;
  /**
   * Format
   * @description Output image format in the path. Common values: 'png8', 'png', 'jpg', 'svg'.
   * @enum {string}
   */
  format?: "png8" | "png" | "jpg" | "svg";
  /**
   * Geojson
   * @description URL-encoded GeoJSON FeatureCollection to overlay custom shapes. Must be valid JSON string.
   * @default null
   */
  geojson: string | null;
  /**
   * Overlay
   * @description Compact overlay encoding for custom points/lines/polygons with styling. E.g., 'line:{encoded};color=#E82D89;width=30m'.
   * @default null
   */
  overlay: string | null;
  /**
   * Parameters
   * @description Path segment defining the map position or overlay-based positioning. Examples: 'center:59.441739,24.754616;zoom=14' or 'overlay:padding=64'
   */
  parameters?: string;
  /**
   * Scale Bar
   * @description Units for the scale bar, e.g., 'mi' or 'km'.
   * @default null
   */
  scaleBar: string | null;
  /**
   * Size
   * @description Image dimensions in pixels as '{width}x{height}', e.g., '480x370'.
   */
  size?: string;
  /**
   * Style
   * @description Map style identifier, e.g., 'lite.day'.
   * @default null
   */
  style: string | null;
};

/**
 * Type of HERE's HERE_GET_MAP_IMAGE tool output.
 */
type HERE_GET_MAP_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Binary map image content
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
 * Type of HERE's HERE_GET_MAP_TILE tool input.
 */
type HERE_GET_MAP_TILE_INPUT = {
  /**
   * Format
   * @description Tile image format, either 'png' or 'png8'
   * @enum {string}
   */
  format?: "png" | "png8";
  /**
   * Scheme
   * @description Map tile scheme, e.g., 'normal.day', 'terrain.day'
   * @enum {string}
   */
  scheme?: "normal.day" | "normal.day.grey" | "normal.day.mobile" | "normal.night" | "normal.night.grey" | "terrain.day";
  /**
   * Size
   * @description Tile size in pixels (width and height), either 256 or 512
   * @enum {integer}
   */
  size?: 256 | 512;
  /**
   * X
   * @description Tile column index (XYZ scheme), must be non-negative
   */
  x?: number;
  /**
   * Y
   * @description Tile row index (XYZ scheme), must be non-negative
   */
  y?: number;
  /**
   * Zoom
   * @description Tile zoom level (XYZ scheme), integer between 0 and 20 inclusive
   */
  zoom?: number;
};

/**
 * Type of HERE's HERE_GET_MAP_TILE tool output.
 */
type HERE_GET_MAP_TILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Downloaded base map tile as binary content
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
 * Type of HERE's HERE_GET_MATRIX tool input.
 */
type HERE_GET_MATRIX_INPUT = {
  /**
   * Async Mode
   * @description If true, returns immediately with a matrixId to poll
   * @default false
   */
  async_mode: boolean;
  /**
   * Departure Time
   * @description ISO 8601 departure time. Required if 'travelTime' is in summaryAttributes
   * @default null
   */
  departureTime: string | null;
  /**
   * Destinations
   * @description List of destination points for the matrix
   */
  destinations?: {
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
  }[];
  /**
   * Origins
   * @description List of origin points for the matrix
   */
  origins?: {
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
  }[];
  /**
   * Summary Attributes
   * @description Attributes to include: 'distance' (meters), 'travelTime' (seconds), 'consumptions' (fuel), or 'tollCost' (currency units)
   */
  summaryAttributes?: string[];
  /**
   * Transport Mode
   * @description Mode of transport to use for routing
   * @default car
   * @enum {string}
   */
  transportMode: "car" | "truck" | "pedestrian" | "bicycle";
};

/**
 * Type of HERE's HERE_GET_MATRIX tool output.
 */
type HERE_GET_MATRIX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * MatrixResult
       * @description Computed matrix results with requested summary attributes
       * @default null
       */
      matrix: {
          /**
           * Consumptions
           * @description Fuel consumption matrix
           * @default null
           */
          consumptions: number[][] | null;
          /**
           * Distances
           * @description Distance matrix in meters
           * @default null
           */
          distances: number[][] | null;
          /**
           * Toll Cost
           * @description Toll cost matrix
           * @default null
           */
          tollCost: number[][] | null;
          /**
           * Travel Time
           * @description Travel time matrix in seconds
           * @default null
           */
          travelTime: number[][] | null;
      } | null;
      /**
       * Matrix Id
       * @description ID of the asynchronous matrix job to poll for results
       * @default null
       */
      matrixId: string | null;
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
 * Type of HERE's HERE_GET_META_INFO_TILE tool input.
 */
type HERE_GET_META_INFO_TILE_INPUT = {
  /**
   * Format
   * @description Tile image format, either 'png' or 'png8'
   * @enum {string}
   */
  format?: "png" | "png8";
  /**
   * Pois
   * @description Include POI-related information in metadata if true
   * @default null
   */
  pois: boolean | null;
  /**
   * Scheme
   * @description Map tile scheme, e.g., 'normal.day', 'terrain.day'
   * @enum {string}
   */
  scheme?: "normal.day" | "normal.day.grey" | "normal.day.mobile" | "normal.night" | "normal.night.grey" | "terrain.day";
  /**
   * Size
   * @description Tile size in pixels (width and height), either 256 or 512
   * @enum {integer}
   */
  size?: 256 | 512;
  /**
   * X
   * @description Tile column index (XYZ scheme), must be non-negative
   */
  x?: number;
  /**
   * Y
   * @description Tile row index (XYZ scheme), must be non-negative
   */
  y?: number;
  /**
   * Zoom
   * @description Tile zoom level (XYZ scheme), must be between 0 and 22 inclusive
   */
  zoom?: number;
};

/**
 * Type of HERE's HERE_GET_META_INFO_TILE tool output.
 */
type HERE_GET_META_INFO_TILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Metadata
       * @description JSON metadata object for the requested tile
       */
      metadata: {
          [key: string]: unknown;
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
 * Type of HERE's HERE_GET_POI_TILE tool input.
 */
type HERE_GET_POI_TILE_INPUT = {
  /**
   * Format
   * @description Image format for the tile.
   * @enum {string}
   */
  format?: "png" | "png8" | "png32" | "jpg" | "jpg70";
  /**
   * Scheme
   * @description Tile scheme for POI overlay (same as base map schemes).
   * @enum {string}
   */
  scheme?: "normal.day" | "normal.day.grey" | "normal.day.transit" | "normal.night" | "normal.night.grey" | "normal.night.transit" | "reduced.day" | "reduced.night" | "satellite.day" | "satellite.day.transit";
  /**
   * Size
   * @description Tile image size in pixels (256 or 512).
   * @enum {integer}
   */
  size?: 256 | 512;
  /**
   * X
   * @description Tile column index in Web Mercator grid, zero-based.
   */
  x?: number;
  /**
   * Y
   * @description Tile row index in Web Mercator grid, zero-based.
   */
  y?: number;
  /**
   * Zoom
   * @description Zoom level as integer between 0 (world) and 20 (street-level).
   */
  zoom?: number;
};

/**
 * Type of HERE's HERE_GET_POI_TILE tool output.
 */
type HERE_GET_POI_TILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Downloaded POI overlay tile image content.
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
 * Type of HERE's HERE_GET_TERRAIN_TILE tool input.
 */
type HERE_GET_TERRAIN_TILE_INPUT = {
  /**
   * Format
   * @description Image format for the terrain tile.
   * @enum {string}
   */
  format?: "png" | "png8" | "png32" | "jpg" | "jpg70";
  /**
   * Size
   * @description Tile image size in pixels. Allowed values: 256 or 512.
   * @enum {integer}
   */
  size?: 256 | 512;
  /**
   * X
   * @description Tile column index in Web Mercator grid, zero-based.
   */
  x?: number;
  /**
   * Y
   * @description Tile row index in Web Mercator grid, zero-based.
   */
  y?: number;
  /**
   * Zoom
   * @description Zoom level as an integer between 0 (world) and 20 (street-level)
   */
  zoom?: number;
};

/**
 * Type of HERE's HERE_GET_TERRAIN_TILE tool output.
 */
type HERE_GET_TERRAIN_TILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Downloaded terrain map tile image content.
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
 * Type of HERE's HERE_GET_TRAFFIC_FLOW tool input.
 */
type HERE_GET_TRAFFIC_FLOW_INPUT = {
  /**
   * Advanced Features
   * @description Optional advanced feature flag; e.g., 'deepCoverage'.
   * @default null
   */
  advancedFeatures: string | null;
  /**
   * In
   * @description Spatial filter defining area of interest. Formats: circle:lat,lng;r=radiusMeters | bbox:west,south,east,north | corridor:flexiblePolyline;r=bufferMeters
   */
  in?: string;
  /**
   * Location Referencing
   * @description Location referencing scheme for road segments.
   * @enum {string}
   */
  locationReferencing?: "shape" | "tmc" | "olr";
  /**
   * Use Ref Replacements
   * @description Optional flag for reference replacements in corridor requests.
   * @default null
   */
  useRefReplacements: boolean | null;
};

/**
 * Type of HERE's HERE_GET_TRAFFIC_FLOW tool output.
 */
type HERE_GET_TRAFFIC_FLOW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of flow features for matched roadway segments.
       */
      results: {
          /**
           * Flow
           * @description Real-time traffic flow measures for the segment.
           */
          flow: {
              /**
               * Confidence
               * @description Confidence level for the flow estimate.
               */
              confidence: number;
              /**
               * Free Flow
               * @description Reference (no-traffic) speed in m/s.
               */
              freeFlow: number;
              /**
               * Jam Factor
               * @description Congestion index for the segment.
               */
              jamFactor: number;
              /**
               * Traversability
               * @description Current traversability status, e.g., 'open'.
               */
              traversability: string;
          };
          /**
           * Location
           * @description Metadata and geometry for the roadway segment.
           */
          location: {
              /**
               * Description
               * @description Human-readable segment description, if available.
               * @default null
               */
              description: string | null;
              /**
               * Length
               * @description Segment length in meters.
               */
              length: number;
              /**
               * Shape
               * @description Geometry of the segment.
               */
              shape: {
                  /**
                   * Links
                   * @description One or more link segments making up the geometry.
                   */
                  links: {
                      /**
                       * Points
                       * @description Ordered list of coordinates for this link segment.
                       */
                      points: {
                          /**
                           * Lat
                           * @description Latitude of the point.
                           */
                          lat: number;
                          /**
                           * Lng
                           * @description Longitude of the point.
                           */
                          lng: number;
                      }[];
                  }[];
              };
          };
      }[];
      /**
       * Source Updated
       * @description Timestamp when the traffic source was last updated (ISO-8601).
       */
      sourceUpdated: string;
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
 * Type of HERE's HERE_GET_TRAFFIC_INCIDENTS tool input.
 */
type HERE_GET_TRAFFIC_INCIDENTS_INPUT = {
  /**
   * Criticality
   * @description Filter incidents by severity (e.g., major, minor).
   * @default null
   */
  criticality: string | null;
  /**
   * In
   * @description Geospatial filter for the query area. Syntax: circle:lat,lng;r=meters | bbox:w,s,e,n | corridor:ENCODED_POLYLINE;r=meters
   */
  in?: string;
  /**
   * Location Referencing
   * @description Road location referencing scheme; one of shape, tmc (Traffic Message Channel), or olr (OpenLR).
   * @enum {string}
   */
  locationReferencing?: "shape" | "tmc" | "olr";
  /**
   * Type
   * @description Filter incidents by type (e.g., construction, accident).
   * @default null
   */
  type: string | null;
};

/**
 * Type of HERE's HERE_GET_TRAFFIC_INCIDENTS tool output.
 */
type HERE_GET_TRAFFIC_INCIDENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of traffic incident records
       */
      results: {
          /**
           * Incident Details
           * @description Core metadata about the traffic incident
           */
          incidentDetails: {
              /**
               * Codes
               * @description Provider or event codes for the incident
               * @default null
               */
              codes: number[] | null;
              /**
               * Criticality
               * @description Severity classification of the incident
               * @default null
               */
              criticality: string | null;
              /**
               * LocalizedText
               * @description Detailed human-readable description
               * @default null
               */
              description: {
                  /**
                   * Language
                   * @description IETF language tag of the localized text
                   */
                  language: string;
                  /**
                   * Value
                   * @description Human-readable text for localization
                   */
                  value: string;
              } | null;
              /**
               * End Time
               * @description ISO 8601 timestamp when the incident ended, if known
               * @default null
               */
              endTime: string | null;
              /**
               * Entry Time
               * @description ISO 8601 timestamp when the incident was ingested
               * @default null
               */
              entryTime: string | null;
              /**
               * Hrn
               * @description HERE Resource Name for the incident
               */
              hrn: string;
              /**
               * Id
               * @description Incident identifier
               */
              id: string;
              /**
               * Original Hrn
               * @description Upstream/original HERE Resource Name
               * @default null
               */
              originalHrn: string | null;
              /**
               * Original Id
               * @description Upstream/original source identifier
               * @default null
               */
              originalId: string | null;
              /**
               * Road Closed
               * @description Indicates if the road is fully closed
               * @default null
               */
              roadClosed: boolean | null;
              /**
               * Start Time
               * @description ISO 8601 timestamp when the incident started
               */
              startTime: string;
              /**
               * LocalizedText
               * @description Short human-readable summary
               * @default null
               */
              summary: {
                  /**
                   * Language
                   * @description IETF language tag of the localized text
                   */
                  language: string;
                  /**
                   * Value
                   * @description Human-readable text for localization
                   */
                  value: string;
              } | null;
              /**
               * Type
               * @description Incident type
               * @default null
               */
              type: string | null;
          };
          /**
           * Location
           * @description Geometry and metrics of the affected location
           */
          location: {
              /**
               * Length
               * @description Length of affected road segment in meters
               */
              length: number;
              /**
               * Shape
               * @description Line geometry describing the affected segment
               */
              shape: {
                  /**
                   * Links
                   * @description Segments composing the incident shape
                   */
                  links: {
                      /**
                       * Length
                       * @description Length of this link segment in meters
                       */
                      length: number;
                      /**
                       * Points
                       * @description Ordered coordinates for this segment
                       */
                      points: {
                          /**
                           * Lat
                           * @description Latitude coordinate of a point
                           */
                          lat: number;
                          /**
                           * Lng
                           * @description Longitude coordinate of a point
                           */
                          lng: number;
                      }[];
                  }[];
              };
          };
      }[];
      /**
       * Source Updated
       * @description ISO 8601 timestamp when source data was last refreshed
       */
      sourceUpdated: string;
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
 * Type of HERE's HERE_GET_TRAFFIC_TILE tool input.
 */
type HERE_GET_TRAFFIC_TILE_INPUT = {
  /**
   * App Code
   * @description Deprecated legacy authentication app_code
   * @default null
   */
  app_code: string | null;
  /**
   * App Id
   * @description Deprecated legacy authentication app_id
   * @default null
   */
  app_id: string | null;
  /**
   * Format
   * @description Image format for the tile
   * @enum {string}
   */
  format?: "png" | "png8" | "png32" | "jpg" | "jpg70";
  /**
   * Min Traffic Congestion
   * @description Filter to show traffic at or above this congestion level, e.g., 'heavy'
   * @default null
   */
  min_traffic_congestion: string | null;
  /**
   * Ppi
   * @description Pixels-per-inch for HiDPI rendering, e.g., 320 or 400
   * @default null
   */
  ppi: number | null;
  /**
   * Scheme
   * @description Map style scheme for the traffic overlay
   * @enum {string}
   */
  scheme?: "normal.day" | "normal.day.grey" | "normal.day.transit" | "normal.night" | "normal.night.grey" | "normal.night.transit" | "reduced.day" | "reduced.night" | "satellite.day" | "satellite.day.transit";
  /**
   * Size
   * @description Tile size in pixels. Allowed values: 256 or 512.
   * @enum {integer}
   */
  size?: 256 | 512;
  /**
   * Time
   * @description ISO-8601 time for forecast traffic (deprecated)
   * @default null
   */
  time: string | null;
  /**
   * X
   * @description Tile column index (XYZ scheme), must be non-negative
   */
  x?: number;
  /**
   * Y
   * @description Tile row index (XYZ scheme), must be non-negative
   */
  y?: number;
  /**
   * Zoom
   * @description Tile zoom level (XYZ scheme), must be between 0 and 20
   */
  zoom?: number;
};

/**
 * Type of HERE's HERE_GET_TRAFFIC_TILE tool output.
 */
type HERE_GET_TRAFFIC_TILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Binary image data of the requested traffic tile
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
 * Type of HERE's HERE_GET_WAYPOINT_SEQUENCE tool input.
 */
type HERE_GET_WAYPOINT_SEQUENCE_INPUT = {
  /**
   * Alternatives
   * @description If true, include alternative optimized sequence if available.
   * @default false
   */
  alternatives: boolean | null;
  /**
   * Arrival Time
   * @description ISO 8601 arrival time, e.g., '2023-01-01T17:00:00Z'.
   * @default null
   */
  arrivalTime: string | null;
  /**
   * Departure Time
   * @description ISO 8601 departure time, e.g., '2023-01-01T08:00:00Z'.
   * @default null
   */
  departureTime: string | null;
  /**
   * Destination
   * @description End coordinate as 'lat,lon', e.g., '52.52079,13.40942'.
   */
  destination?: string;
  /**
   * Origin
   * @description Start coordinate as 'lat,lon', e.g., '52.53086,13.38474'.
   */
  origin?: string;
  /**
   * Return
   * @description Additional data to return: 'summary', 'polyline'. 'summary' always returned.
   * @default null
   */
  return: string[] | null;
  /**
   * Routing Mode
   * @description Routing preference: 'fast' or 'short'.
   * @default null
   * @enum {string|null}
   */
  routingMode: "fast" | "short" | null;
  /**
   * Transport Mode
   * @description Mode of transport for optimization.
   * @default null
   * @enum {string|null}
   */
  transportMode: "car" | "truck" | "pedestrian" | "bicycle" | null;
  /**
   * Waypoint
   * @description One or more intermediate waypoints as 'lat,lon'.
   */
  waypoint?: string[];
};

/**
 * Type of HERE's HERE_GET_WAYPOINT_SEQUENCE tool output.
 */
type HERE_GET_WAYPOINT_SEQUENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Polyline
       * @description Encoded route polyline if requested.
       * @default null
       */
      polyline: string | null;
      /**
       * Summary
       * @description Overall travel summary of the optimized route.
       */
      summary: {
          /**
           * Distance
           * @description Total distance in meters.
           */
          distance: number;
          /**
           * Travel Time
           * @description Total travel time in seconds.
           */
          travelTime: number;
      };
      /**
       * Waypoints
       * @description Sequenced waypoints with original and optimized indices.
       */
      waypoints: {
          /**
           * Lat
           * @description Latitude of waypoint.
           */
          lat: number;
          /**
           * Lng
           * @description Longitude of waypoint.
           */
          lng: number;
          /**
           * Opt Index
           * @description Optimized index of waypoint in sequence.
           */
          optIndex: number;
          /**
           * Orig Index
           * @description Original index of waypoint in input list.
           */
          origIndex: number;
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
 * Type of HERE's HERE_GET_WEATHER_FORECAST_DAILY tool input.
 */
type HERE_GET_WEATHER_FORECAST_DAILY_INPUT = {
  /**
   * Lang
   * @description Response language (IETF BCP-47 tag).
   * @default null
   */
  lang: string | null;
  /**
   * Location
   * @description Coordinates in 'lat,lng' (WGS-84). Required if 'q' and 'zipCode' are not provided.
   * @default null
   */
  location: string | null;
  /**
   * Political View
   * @description Political view code for disputed territories (ISO country code).
   * @default null
   */
  politicalView: string | null;
  /**
   * Products
   * @description Daily forecast product. Choose 'forecast7days' for full details or 'forecast7daysSimple' for simplified forecast.
   * @enum {string}
   */
  products?: "forecast7days" | "forecast7daysSimple";
  /**
   * Q
   * @description Location as free-form query (e.g., 'Riga,Latvia'). Required if 'location' and 'zipCode' are not provided.
   * @default null
   */
  q: string | null;
  /**
   * Units
   * @description Measurement system. One of 'metric' (default) or 'imperial'.
   * @default metric
   * @enum {string|null}
   */
  units: "metric" | "imperial" | null;
  /**
   * Zip Code
   * @description U.S. ZIP code. Required if 'q' and 'location' are not provided.
   * @default null
   */
  zipCode: string | null;
};

/**
 * Type of HERE's HERE_GET_WEATHER_FORECAST_DAILY tool output.
 */
type HERE_GET_WEATHER_FORECAST_DAILY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Forecast7Days
       * @description Detailed 7-day forecast product.
       * @default null
       */
      forecast7days: {
          /**
           * Daily
           * @description Container for detailed daily forecasts
           */
          daily: {
              /**
               * Forecast
               * @description List of detailed daily forecast entries
               */
              forecast: {
                  /**
                   * Date
                   * @description Date of the forecast (YYYY-MM-DD)
                   */
                  date: string;
                  /**
                   * High Temperature
                   * @description High temperature for the day
                   */
                  highTemperature: number;
                  /**
                   * Icon Code Day
                   * @description Weather icon code for daytime
                   */
                  iconCodeDay: number;
                  /**
                   * Icon Code Night
                   * @description Weather icon code for nighttime
                   */
                  iconCodeNight: number;
                  /**
                   * Low Temperature
                   * @description Low temperature for the day
                   */
                  lowTemperature: number;
                  /**
                   * Precipitation Probability
                   * @description Chance of precipitation (0-100%)
                   */
                  precipitationProbability: number;
                  /**
                   * Rainfall
                   * @description Rainfall amount for the day
                   */
                  rainfall: number;
                  /**
                   * Snowfall
                   * @description Snowfall amount for the day
                   */
                  snowfall: number;
                  /**
                   * Sunrise
                   * @description ISO 8601 timestamp of sunrise
                   */
                  sunrise: string;
                  /**
                   * Sunset
                   * @description ISO 8601 timestamp of sunset
                   */
                  sunset: string;
                  /**
                   * Wind Direction
                   * @description Wind direction in degrees
                   */
                  windDirection: number;
                  /**
                   * Wind Speed
                   * @description Wind speed for the day
                   */
                  windSpeed: number;
              }[];
          };
          /**
           * Latitude
           * @description Latitude of the requested location
           */
          latitude: number;
          /**
           * Locale
           * @description Locale of the response
           * @default null
           */
          locale: string | null;
          /**
           * Longitude
           * @description Longitude of the requested location
           */
          longitude: number;
          /**
           * Timezone Offset
           * @description Offset from UTC in minutes
           */
          timezoneOffset: number;
      } | null;
      /**
       * Forecast7DaysSimple
       * @description Simplified 7-day forecast product.
       * @default null
       */
      forecast7daysSimple: {
          /**
           * Daily
           * @description Container for simplified daily forecasts
           */
          daily: {
              /**
               * Forecast
               * @description List of simplified daily forecast entries
               */
              forecast: {
                  /**
                   * Date
                   * @description Date of the forecast (YYYY-MM-DD)
                   */
                  date: string;
                  /**
                   * High Temperature
                   * @description High temperature for the day
                   */
                  highTemperature: number;
                  /**
                   * Low Temperature
                   * @description Low temperature for the day
                   */
                  lowTemperature: number;
              }[];
          };
          /**
           * Latitude
           * @description Latitude of the requested location
           */
          latitude: number;
          /**
           * Locale
           * @description Locale of the response
           * @default null
           */
          locale: string | null;
          /**
           * Longitude
           * @description Longitude of the requested location
           */
          longitude: number;
          /**
           * Timezone Offset
           * @description Offset from UTC in minutes
           */
          timezoneOffset: number;
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
 * Type of HERE's HERE_GET_WEATHER_OBSERVATION tool input.
 */
type HERE_GET_WEATHER_OBSERVATION_INPUT = {
  /**
   * Lang
   * @description Response language (BCP-47 language tag, e.g., 'en-US')
   * @default null
   */
  lang: string | null;
  /**
   * Location
   * @description Latitude,longitude pair in WGS-84 format (e.g., '52.52,13.4050')
   * @default null
   */
  location: string | null;
  /**
   * Political View
   * @description Political view (ISO country code) for disputed territories
   * @default null
   */
  politicalView: string | null;
  /**
   * Q
   * @description Free-text location query (e.g., 'Berlin, Germany')
   * @default null
   */
  q: string | null;
  /**
   * Units
   * @description Units of measurement: 'metric' (SI) or 'imperial'
   * @default metric
   * @enum {string}
   */
  units: "metric" | "imperial";
  /**
   * Zip Code
   * @description US ZIP code (e.g., '10001')
   * @default null
   */
  zipCode: string | null;
};

/**
 * Type of HERE's HERE_GET_WEATHER_OBSERVATION tool output.
 */
type HERE_GET_WEATHER_OBSERVATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Observations
       * @description Container for observed weather data
       */
      observations: {
          /**
           * Observation
           * @description List of observation entries
           */
          observation: {
              /**
               * Condition
               * @description Textual weather condition description
               */
              condition: string;
              /**
               * Humidity
               * @description Relative humidity in percent
               */
              humidity: number;
              /**
               * Local Time
               * @description Local timestamp of the observation, ISO-8601 format with offset
               */
              localTime: string;
              /**
               * Precipitation1H
               * @description Precipitation volume in the last 1 hour
               */
              precipitation1h: number;
              /**
               * Pressure
               * @description Atmospheric pressure in hPa
               */
              pressure: number;
              /**
               * Station Id
               * @description Identifier of the weather station providing this data
               */
              stationId: number;
              /**
               * Temperature
               * @description Air temperature in the requested units
               */
              temperature: number;
              /**
               * Utc Time
               * @description UTC timestamp of the observation, ISO-8601 format
               */
              utcTime: string;
              /**
               * Visibility
               * @description Visibility distance in meters
               */
              visibility: number;
              /**
               * Wind Direction
               * @description Wind direction in degrees from true north
               */
              windDirection: number;
              /**
               * Wind Speed
               * @description Wind speed in the requested units
               */
              windSpeed: number;
          }[];
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
 * Type of HERE's HERE_HERE_WEATHER_FORECAST_HOURLY tool input.
 */
type HERE_HERE_WEATHER_FORECAST_HOURLY_INPUT = {
  /**
   * Api Key
   * @description HERE API key for authentication
   */
  apiKey?: string;
  /**
   * Hourly Date
   * @description Date (YYYY-MM-DD) for which hourly data is requested
   * @default null
   */
  hourlyDate: string | null;
  /**
   * Lang
   * @description IETF language tag for localized output (e.g., 'en-US')
   * @default null
   */
  lang: string | null;
  /**
   * Location
   * @description Coordinates in 'lat,lon' WGS-84 format (e.g., '52.5200,13.4050')
   * @default null
   */
  location: string | null;
  /**
   * Political View
   * @description Political view for disputed territories, ISO country code
   * @default null
   */
  politicalView: string | null;
  /**
   * Products
   * @description Must be 'forecastHourly' to retrieve hourly forecasts
   * @constant
   */
  products?: "forecastHourly";
  /**
   * Q
   * @description Free-text location query (e.g., 'Berlin, Germany')
   * @default null
   */
  q: string | null;
  /**
   * Units
   * @description Measurement units: 'metric' (default) or 'imperial'
   * @default metric
   * @enum {string}
   */
  units: "metric" | "imperial";
  /**
   * Zip Code
   * @description U.S. ZIP code (e.g., '90210'), US only
   * @default null
   */
  zipCode: string | null;
};

/**
 * Type of HERE's HERE_HERE_WEATHER_FORECAST_HOURLY tool output.
 */
type HERE_HERE_WEATHER_FORECAST_HOURLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Forecast Hourly
       * @description List of hourly forecast data points
       */
      forecastHourly: {
          /**
           * Cloud Cover
           * @description Cloud cover in percent
           */
          cloudCover: number;
          /**
           * Dew Point
           * @description Dew point temperature in °C or °F
           */
          dewPoint: number;
          /**
           * Humidity
           * @description Relative humidity in percent
           */
          humidity: number;
          /**
           * Precipitation
           * @description Precipitation amount in mm or inches
           */
          precipitation: number;
          /**
           * Precipitation Probability
           * @description Probability of precipitation in percent
           */
          precipitationProbability: number;
          /**
           * Pressure Surface Level
           * @description Atmospheric pressure at surface level in hPa
           */
          pressureSurfaceLevel: number;
          /**
           * Start Time
           * @description Start time for this hourly forecast (ISO 8601)
           */
          startTime: string;
          /**
           * Symbol Code
           * @description Weather symbol code as defined by HERE
           */
          symbolCode: string;
          /**
           * Temperature
           * @description Air temperature at 2 m in °C or °F
           */
          temperature: number;
          /**
           * Uv Index
           * @description Ultraviolet index
           */
          uvIndex: number;
          /**
           * Visibility
           * @description Visibility in meters or feet
           */
          visibility: number;
          /**
           * Weather Description
           * @description Textual description of weather conditions
           */
          weatherDescription: string;
          /**
           * Wind Direction
           * @description Wind direction in degrees from north
           */
          windDirection: number;
          /**
           * Wind Gust
           * @description Wind gust in m/s or mph
           * @default null
           */
          windGust: number | null;
          /**
           * Wind Speed
           * @description Wind speed at 10 m in m/s or mph
           */
          windSpeed: number;
      }[];
      /**
       * Location Id
       * @description Identifier for the requested location
       */
      locationId: string;
      /**
       * Updated
       * @description Timestamp when the forecast last updated (ISO 8601)
       */
      updated: string;
      /**
       * Version
       * @description API version of the report
       */
      version: string;
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
 * Type of HERE's HERE_LOOKUP tool input.
 */
type HERE_LOOKUP_INPUT = {
  /**
   * Id
   * @description HERE place or address identifier to look up, e.g., 'here:pds:place:...'.
   */
  id?: string;
  /**
   * Lang
   * @description Language for result rendering (BCP-47 code).
   * @default null
   */
  lang: string | null;
  /**
   * Show
   * @description Additional sections to include; e.g., 'tz' for time zone details.
   * @default null
   */
  show: string | null;
};

/**
 * Type of HERE's HERE_LOOKUP tool output.
 */
type HERE_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access
       * @description Optional access points to the place.
       * @default null
       */
      access: {
          /**
           * Lat
           * @description Latitude of the position.
           */
          lat: number;
          /**
           * Lng
           * @description Longitude of the position.
           */
          lng: number;
      }[] | null;
      /**
       * Address
       * @description Structured address components.
       */
      address: {
          /**
           * City
           * @description City name.
           * @default null
           */
          city: string | null;
          /**
           * Country Code
           * @description ISO 3166-1 alpha-2 country code.
           */
          countryCode: string;
          /**
           * Country Name
           * @description Full country name.
           */
          countryName: string;
          /**
           * County
           * @description County name.
           * @default null
           */
          county: string | null;
          /**
           * District
           * @description District name.
           * @default null
           */
          district: string | null;
          /**
           * House Number
           * @description House number.
           * @default null
           */
          houseNumber: string | null;
          /**
           * Label
           * @description Formatted address label.
           */
          label: string;
          /**
           * Postal Code
           * @description Postal code.
           * @default null
           */
          postalCode: string | null;
          /**
           * State
           * @description State or region name.
           * @default null
           */
          state: string | null;
          /**
           * State Code
           * @description State or region code.
           * @default null
           */
          stateCode: string | null;
          /**
           * Street
           * @description Street name.
           * @default null
           */
          street: string | null;
      };
      /**
       * Categories
       * @description Category metadata for the place.
       * @default null
       */
      categories: {
          /**
           * Id
           * @description Category identifier.
           */
          id: string;
          /**
           * Name
           * @description Category name.
           * @default null
           */
          name: string | null;
          /**
           * Primary
           * @description Whether this is the primary category.
           * @default null
           */
          primary: boolean | null;
      }[] | null;
      /**
       * Id
       * @description HERE identifier of the result.
       */
      id: string;
      /**
       * Language
       * @description Result language code.
       * @default null
       */
      language: string | null;
      /**
       * MapView
       * @description Optional viewport bounding box for display.
       * @default null
       */
      mapView: {
          /**
           * East
           * @description Longitude of the east boundary.
           */
          east: number;
          /**
           * North
           * @description Latitude of the north boundary.
           */
          north: number;
          /**
           * South
           * @description Latitude of the south boundary.
           */
          south: number;
          /**
           * West
           * @description Longitude of the west boundary.
           */
          west: number;
      } | null;
      /**
       * Position
       * @description Representative coordinates of the result.
       */
      position: {
          /**
           * Lat
           * @description Latitude of the position.
           */
          lat: number;
          /**
           * Lng
           * @description Longitude of the position.
           */
          lng: number;
      };
      /**
       * Result Type
       * @description Type of result (e.g., place, houseNumber, locality).
       */
      resultType: string;
      /**
       * Title
       * @description Display name of the result.
       */
      title: string;
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
 * Type of HERE's HERE_REVERSE_GEOCODE tool input.
 */
type HERE_REVERSE_GEOCODE_INPUT = {
  /**
   *  Show Nav Attributes
   * @description Include navigation attributes, e.g., 'speedLimits'.
   * @default null
   */
  _showNavAttributes: string | null;
  /**
   * At
   * @description Coordinates to search around, formatted 'latitude,longitude'.
   */
  at?: string;
  /**
   * Lang
   * @description Response language (BCP-47), e.g., 'en-US'.
   * @default null
   */
  lang: string | null;
  /**
   * Show
   * @description Additional sections to include, e.g., 'tz' for time zone.
   * @default null
   */
  show: string | null;
};

/**
 * Type of HERE's HERE_REVERSE_GEOCODE tool output.
 */
type HERE_REVERSE_GEOCODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of reverse geocode results.
       */
      items: {
          /**
           * Address
           * @description Structured address details.
           */
          address: {
              /**
               * Country Code
               * @description ISO 3166-1 alpha-2 country code.
               */
              countryCode: string;
              /**
               * Country Name
               * @description Full country name.
               */
              countryName: string;
              /**
               * Label
               * @description Full formatted address label.
               */
              label: string;
          };
          /**
           * Id
           * @description HERE identifier of the result.
           */
          id: string;
          /**
           * Result Type
           * @description Result type (e.g., houseNumber).
           */
          resultType: string;
          /**
           * Title
           * @description Display label of the matched address/place.
           */
          title: string;
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
 * Type of HERE's HERE_WEATHER_ALERTS tool input.
 */
type HERE_WEATHER_ALERTS_INPUT = {
  /**
   * Api Key
   * @description HERE API key for authentication
   */
  apiKey?: string;
  /**
   * FeatureCollectionRequest
   * @description GeoJSON FeatureCollection describing points or routes to check
   * @default null
   */
  body: {
      /**
       * Features
       * @description Array of features representing locations or routes
       */
      features: {
          /**
           * PointGeometry
           * @description Geometry defining point or route corridor
           */
          geometry: {
              /**
               * Coordinates
               * @description Longitude and latitude [lng, lat]
               */
              coordinates: number[];
              /**
               * Type
               * @description GeoJSON geometry type
               * @constant
               */
              type: "Point";
          } | null;
          /**
           * Id
           * @description Optional unique feature identifier
           * @default null
           */
          id: string | null;
          /**
           * Properties
           * @description Properties for alert filters
           */
          properties: {
              /**
               * Warnings
               * @description List of time-window and filter constraints for alerts
               */
              warnings: {
                  /**
                   * Country
                   * @description ISO-3166-1 alpha-2 country code to filter alerts
                   * @default null
                   */
                  country: string | null;
                  /**
                   * End Time
                   * @description End of time window in Unix epoch seconds
                   * @default null
                   */
                  endTime: number | null;
                  /**
                   * Severity
                   * @description Alert severity filter (0 insignificant, 1 no_alerts, 2 minor, 3 medium, 4 high, 5 emergency)
                   * @default null
                   * @enum {integer|null}
                   */
                  severity: 0 | 1 | 2 | 3 | 4 | 5 | null;
                  /**
                   * Start Time
                   * @description Start of time window in Unix epoch seconds
                   */
                  startTime: number;
                  /**
                   * Type
                   * @description Alert type filter (1 extremely_high_temperature, 2 extremely_low_temperature, ... 29 warning)
                   * @default null
                   * @enum {integer|null}
                   */
                  type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | null;
              }[];
              /**
               * Width
               * @description Corridor width in meters. Max 100000 for Point, 25000 for LineString
               * @default null
               */
              width: number | null;
          };
          /**
           * Type
           * @description GeoJSON feature type
           * @constant
           */
          type: "Feature";
      }[];
      /**
       * Type
       * @description GeoJSON FeatureCollection type
       * @constant
       */
      type: "FeatureCollection";
  } | null;
  /**
   * Lang
   * @description Response language (IETF BCP-47 tag, e.g., 'en-US')
   * @default null
   */
  lang: string | null;
  /**
   * Location
   * @description Coordinates in 'lat,lng' WGS-84 format (e.g., '52.5200,13.4050')
   * @default null
   */
  location: string | null;
  /**
   * Political View
   * @description Political view (ISO country code) for disputed territories
   * @default null
   */
  politicalView: string | null;
  /**
   * Q
   * @description Free-text location query (e.g., 'Berlin, Germany')
   * @default null
   */
  q: string | null;
  /**
   * Units
   * @description Units of measurement: 'metric' or 'imperial'
   * @default null
   * @enum {string|null}
   */
  units: "metric" | "imperial" | null;
  /**
   * Zip Code
   * @description US ZIP code (e.g., '10001')
   * @default null
   */
  zipCode: string | null;
};

/**
 * Type of HERE's HERE_WEATHER_ALERTS tool output.
 */
type HERE_WEATHER_ALERTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Features
       * @description List of features representing active weather alerts
       */
      features: {
          /**
           * Geometry
           * @description GeoJSON geometry of the alert area (e.g., Polygon, MultiPolygon, etc.)
           */
          geometry: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique feature identifier
           * @default null
           */
          id: string | null;
          /**
           * Properties
           * @description Metadata about the weather alert
           */
          properties: {
              /**
               * Area
               * @description GeoJSON geometry of affected area
               * @default null
               */
              area: {
                  [key: string]: unknown;
              } | null;
              /**
               * Description
               * @description Alert description text
               * @default null
               */
              description: string | null;
              /**
               * Id
               * @description Alert identifier
               * @default null
               */
              id: string | null;
              /**
               * Severity
               * @description Alert severity level
               * @default null
               */
              severity: number | null;
          };
          /**
           * Type
           * @description GeoJSON feature type
           * @constant
           */
          type: "Feature";
      }[];
      /**
       * Type
       * @description GeoJSON FeatureCollection type
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
 * Type of HERE's HERE_WEATHER_ASTRONOMY tool input.
 */
type HERE_WEATHER_ASTRONOMY_INPUT = {
  /**
   * Hourly Date
   * @description Filter hourly products by date 'YYYY-MM-DD'.
   * @default null
   */
  hourlyDate: string | null;
  /**
   * Lang
   * @description IETF BCP-47 language tag for response (e.g., 'en-US').
   * @default null
   */
  lang: string | null;
  /**
   * Location
   * @description Coordinates as 'latitude,longitude' (e.g., '52.5251,13.3694').
   * @default null
   */
  location: string | null;
  /**
   * Political View
   * @description ISO-3166-1 country code for disputed territories (e.g., 'CHN').
   * @default null
   */
  politicalView: string | null;
  /**
   * Q
   * @description Free-text place query (e.g., 'Riga, Latvia').
   * @default null
   */
  q: string | null;
  /**
   * Units
   * @description Measurement units: 'metric' (default) or 'imperial'.
   * @default null
   * @enum {string|null}
   */
  units: "metric" | "imperial" | null;
  /**
   * Zip Code
   * @description U.S. ZIP code (e.g., '90210').
   * @default null
   */
  zipCode: string | null;
};

/**
 * Type of HERE's HERE_WEATHER_ASTRONOMY tool output.
 */
type HERE_WEATHER_ASTRONOMY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Forecast Astronomy
       * @description Astronomy forecast items for the given location
       */
      forecastAstronomy: {
          /**
           * Date
           * @description Forecast date in 'YYYY-MM-DD'.
           */
          date: string;
          /**
           * Moon Illumination
           * @description Moon illumination percentage.
           * @default null
           */
          moonIllumination: number | null;
          /**
           * Moon Phase
           * @description Phase of the moon.
           * @default null
           */
          moonPhase: string | null;
          /**
           * Moonrise
           * @description Moonrise time in ISO 8601 format.
           * @default null
           */
          moonrise: string | null;
          /**
           * Moonset
           * @description Moonset time in ISO 8601 format.
           * @default null
           */
          moonset: string | null;
          /**
           * Solar Noon
           * @description Solar noon time in ISO 8601 format.
           * @default null
           */
          solarNoon: string | null;
          /**
           * Sunrise
           * @description Sunrise time in ISO 8601 format.
           */
          sunrise: string;
          /**
           * Sunset
           * @description Sunset time in ISO 8601 format.
           */
          sunset: string;
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
 * Type map of all available tool input types for toolkit "HERE".
 */
export type HERE_TOOL_INPUTS = {
  AUTOSUGGEST: HERE_AUTOSUGGEST_INPUT
  BROWSE: HERE_BROWSE_INPUT
  CALCULATE_ROUTE: HERE_CALCULATE_ROUTE_INPUT
  COORDINATES_TO_TILE_INDICES: HERE_COORDINATES_TO_TILE_INDICES_INPUT
  DISCOVER: HERE_DISCOVER_INPUT
  GEOCODE: HERE_GEOCODE_INPUT
  GET_AERIAL_TILE: HERE_GET_AERIAL_TILE_INPUT
  GET_BASE_MAP_TILE: HERE_GET_BASE_MAP_TILE_INPUT
  GET_HYBRID_TILE: HERE_GET_HYBRID_TILE_INPUT
  GET_ISOLINES: HERE_GET_ISOLINES_INPUT
  GET_LABEL_TILE: HERE_GET_LABEL_TILE_INPUT
  GET_LINE_TILE: HERE_GET_LINE_TILE_INPUT
  GET_MAP_IMAGE: HERE_GET_MAP_IMAGE_INPUT
  GET_MAP_TILE: HERE_GET_MAP_TILE_INPUT
  GET_MATRIX: HERE_GET_MATRIX_INPUT
  GET_META_INFO_TILE: HERE_GET_META_INFO_TILE_INPUT
  GET_POI_TILE: HERE_GET_POI_TILE_INPUT
  GET_TERRAIN_TILE: HERE_GET_TERRAIN_TILE_INPUT
  GET_TRAFFIC_FLOW: HERE_GET_TRAFFIC_FLOW_INPUT
  GET_TRAFFIC_INCIDENTS: HERE_GET_TRAFFIC_INCIDENTS_INPUT
  GET_TRAFFIC_TILE: HERE_GET_TRAFFIC_TILE_INPUT
  GET_WAYPOINT_SEQUENCE: HERE_GET_WAYPOINT_SEQUENCE_INPUT
  GET_WEATHER_FORECAST_DAILY: HERE_GET_WEATHER_FORECAST_DAILY_INPUT
  GET_WEATHER_OBSERVATION: HERE_GET_WEATHER_OBSERVATION_INPUT
  HERE_WEATHER_FORECAST_HOURLY: HERE_HERE_WEATHER_FORECAST_HOURLY_INPUT
  LOOKUP: HERE_LOOKUP_INPUT
  REVERSE_GEOCODE: HERE_REVERSE_GEOCODE_INPUT
  WEATHER_ALERTS: HERE_WEATHER_ALERTS_INPUT
  WEATHER_ASTRONOMY: HERE_WEATHER_ASTRONOMY_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HERE".
 */
export type HERE_TOOL_OUTPUTS = {
  AUTOSUGGEST: HERE_AUTOSUGGEST_OUTPUT
  BROWSE: HERE_BROWSE_OUTPUT
  CALCULATE_ROUTE: HERE_CALCULATE_ROUTE_OUTPUT
  COORDINATES_TO_TILE_INDICES: HERE_COORDINATES_TO_TILE_INDICES_OUTPUT
  DISCOVER: HERE_DISCOVER_OUTPUT
  GEOCODE: HERE_GEOCODE_OUTPUT
  GET_AERIAL_TILE: HERE_GET_AERIAL_TILE_OUTPUT
  GET_BASE_MAP_TILE: HERE_GET_BASE_MAP_TILE_OUTPUT
  GET_HYBRID_TILE: HERE_GET_HYBRID_TILE_OUTPUT
  GET_ISOLINES: HERE_GET_ISOLINES_OUTPUT
  GET_LABEL_TILE: HERE_GET_LABEL_TILE_OUTPUT
  GET_LINE_TILE: HERE_GET_LINE_TILE_OUTPUT
  GET_MAP_IMAGE: HERE_GET_MAP_IMAGE_OUTPUT
  GET_MAP_TILE: HERE_GET_MAP_TILE_OUTPUT
  GET_MATRIX: HERE_GET_MATRIX_OUTPUT
  GET_META_INFO_TILE: HERE_GET_META_INFO_TILE_OUTPUT
  GET_POI_TILE: HERE_GET_POI_TILE_OUTPUT
  GET_TERRAIN_TILE: HERE_GET_TERRAIN_TILE_OUTPUT
  GET_TRAFFIC_FLOW: HERE_GET_TRAFFIC_FLOW_OUTPUT
  GET_TRAFFIC_INCIDENTS: HERE_GET_TRAFFIC_INCIDENTS_OUTPUT
  GET_TRAFFIC_TILE: HERE_GET_TRAFFIC_TILE_OUTPUT
  GET_WAYPOINT_SEQUENCE: HERE_GET_WAYPOINT_SEQUENCE_OUTPUT
  GET_WEATHER_FORECAST_DAILY: HERE_GET_WEATHER_FORECAST_DAILY_OUTPUT
  GET_WEATHER_OBSERVATION: HERE_GET_WEATHER_OBSERVATION_OUTPUT
  HERE_WEATHER_FORECAST_HOURLY: HERE_HERE_WEATHER_FORECAST_HOURLY_OUTPUT
  LOOKUP: HERE_LOOKUP_OUTPUT
  REVERSE_GEOCODE: HERE_REVERSE_GEOCODE_OUTPUT
  WEATHER_ALERTS: HERE_WEATHER_ALERTS_OUTPUT
  WEATHER_ASTRONOMY: HERE_WEATHER_ASTRONOMY_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HERE toolkit.
 */
export const HERE = {
  slug: "here",
  tools: {
    /**
     * Tool to fetch possible completions for a partial search term. Use after capturing a partial query and location context to generate typeahead suggestions.
     */
    AUTOSUGGEST: "HERE_AUTOSUGGEST",
    /**
     * Tool to search for places around a given location with optional filters. Use when you need nearby points of interest filtered by categories, food types, or name.
     */
    BROWSE: "HERE_BROWSE",
    /**
     * Tool to calculate a route between waypoints with vehicle profile options. Use when planning a route with toll and vehicle constraints.
     */
    CALCULATE_ROUTE: "HERE_CALCULATE_ROUTE",
    /**
     * Tool to convert geographic coordinates to Web Mercator XYZ tile indices. Use when mapping a lat/lng to its containing tile at a given zoom level.
     */
    COORDINATES_TO_TILE_INDICES: "HERE_COORDINATES_TO_TILE_INDICES",
    /**
     * Tool to discover places and addresses by free-form text near a location. Use when you need to find points of interest or specific addresses from a natural-language query.
     */
    DISCOVER: "HERE_DISCOVER",
    /**
     * Tool to convert structured address data into geographic coordinates. Use when you need precise lat/lng from a free-text or qualified address input.
     */
    GEOCODE: "HERE_GEOCODE",
    /**
     * Tool to retrieve a satellite/aerial map tile. Use when you need tile imagery for a given zoom level and coordinates.
     */
    GET_AERIAL_TILE: "HERE_GET_AERIAL_TILE",
    /**
     * Tool to retrieve a base map tile image without labels. Use after determining tile scheme, zoom level, x/y coordinates, size, and format.
     */
    GET_BASE_MAP_TILE: "HERE_GET_BASE_MAP_TILE",
    /**
     * Tool to retrieve a hybrid (aerial + labels) map tile. Use when you need a labeled aerial map tile for a specific zoom level, tile coordinates, size, and format. Example: "Get a 512px PNG hybrid tile for zoom 14 at tile (8587,5700)."
     */
    GET_HYBRID_TILE: "HERE_GET_HYBRID_TILE",
    /**
     * Tool to calculate isolines. Use when you need reachable area polygons based on time, distance, or consumption ranges.
     */
    GET_ISOLINES: "HERE_GET_ISOLINES",
    /**
     * Tool to retrieve a label overlay tile. Use when you need map labels after selecting scheme, zoom, and tile indices.
     */
    GET_LABEL_TILE: "HERE_GET_LABEL_TILE",
    /**
     * Tool to retrieve a line overlay tile. Use when you need to overlay road and border lines on a base map.
     */
    GET_LINE_TILE: "HERE_GET_LINE_TILE",
    /**
     * Tool to retrieve a static map image. Use when you need a custom map snapshot after specifying center, zoom, overlays, or styles.
     */
    GET_MAP_IMAGE: "HERE_GET_MAP_IMAGE",
    /**
     * Tool to retrieve a base map tile. Use when you need map imagery for a specific zoom level, coordinates, size, and format.
     */
    GET_MAP_TILE: "HERE_GET_MAP_TILE",
    /**
     * Tool to compute a routing distance/time matrix. Use when you need batch distances and travel times between multiple origins and destinations.
     */
    GET_MATRIX: "HERE_GET_MATRIX",
    /**
     * Tool to retrieve metadata for a specific map tile. Use when you need only metadata about a tile without downloading imagery.
     */
    GET_META_INFO_TILE: "HERE_GET_META_INFO_TILE",
    /**
     * Tool to retrieve a point-of-interest overlay tile. Use when you need to overlay POI icons on a map tile at a specific scheme, zoom level, and tile coordinates.
     */
    GET_POI_TILE: "HERE_GET_POI_TILE",
    /**
     * Tool to retrieve a terrain map tile image. Use when you need terrain and elevation shading details for a specific zoom level, tile coordinates, size, and format.
     */
    GET_TERRAIN_TILE: "HERE_GET_TERRAIN_TILE",
    /**
     * Tool to retrieve real-time traffic flow data. Use when you need current congestion metrics for a specified area.
     */
    GET_TRAFFIC_FLOW: "HERE_GET_TRAFFIC_FLOW",
    /**
     * Tool to fetch real-time traffic incidents within a specified area. Use when you need up-to-date incident data for a geographic region.
     */
    GET_TRAFFIC_INCIDENTS: "HERE_GET_TRAFFIC_INCIDENTS",
    /**
     * Tool to retrieve a traffic overlay tile. Use when you need traffic overlay imagery for a given map style, zoom level, tile coordinates, size, and format.
     */
    GET_TRAFFIC_TILE: "HERE_GET_TRAFFIC_TILE",
    /**
     * Tool to optimize the visit order of multiple waypoints. Use after specifying a start and end location with intermediate points to get the most efficient route.
     */
    GET_WAYPOINT_SEQUENCE: "HERE_GET_WAYPOINT_SEQUENCE",
    /**
     * Tool to provide daily weather forecasts (up to 7 days). Use when you need a multi-day outlook for a specific location. Returns detailed or simplified daily data based on the 'products' parameter.
     */
    GET_WEATHER_FORECAST_DAILY: "HERE_GET_WEATHER_FORECAST_DAILY",
    /**
     * Tool to retrieve current weather observation. Use after determining a specific location to get up-to-date weather conditions.
     */
    GET_WEATHER_OBSERVATION: "HERE_GET_WEATHER_OBSERVATION",
    /**
     * Tool to fetch hourly weather forecasts. Use when you need up to 48 hours of forecast data for a location.
     */
    HERE_WEATHER_FORECAST_HOURLY: "HERE_HERE_WEATHER_FORECAST_HOURLY",
    /**
     * Tool to look up detailed information for a place by its HERE ID. Use when you have obtained a HERE identifier and need full metadata about that location.
     */
    LOOKUP: "HERE_LOOKUP",
    /**
     * Tool to convert geographic coordinates into a human-readable address. Use when you have latitude and longitude and need the nearest address.
     */
    REVERSE_GEOCODE: "HERE_REVERSE_GEOCODE",
    /**
     * Tool to retrieve severe weather alerts for specified locations or routes. Use after constructing a GeoJSON FeatureCollection of points or corridors to assess potential weather hazards.
     */
    WEATHER_ALERTS: "HERE_WEATHER_ALERTS",
    /**
     * Tool to fetch astronomical data (sunrise, sunset) for a specific location. Use when you need daily sun and moon event times.
     */
    WEATHER_ASTRONOMY: "HERE_WEATHER_ASTRONOMY",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HERE".
 */
export type HERE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HERE".
 */
export type HERE_TRIGGER_EVENTS = {}
