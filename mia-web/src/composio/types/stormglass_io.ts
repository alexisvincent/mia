// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of STORMGLASS_IO's STORMGLASS_IO_GET_ELEVATION_POINT tool input.
 */
type STORMGLASS_IO_GET_ELEVATION_POINT_INPUT = {
  /**
   * Lat
   * @description Latitude of the desired coordinate in decimal degrees, between -90 and 90.
   */
  lat?: number;
  /**
   * Lng
   * @description Longitude of the desired coordinate in decimal degrees, between -180 and 180.
   */
  lng?: number;
};

/**
 * Type of STORMGLASS_IO's STORMGLASS_IO_GET_ELEVATION_POINT tool output.
 */
type STORMGLASS_IO_GET_ELEVATION_POINT_OUTPUT = {
  /**
   * Data
   * @description Elevation data for the point
   */
  data?: {
      /**
       * Elevation
       * @description Elevation at the specified coordinate in meters above sea level
       */
      elevation: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Metadata about the elevation request and quota
   */
  meta?: {
      /**
       * Daily Quota
       * @description Your daily API request quota
       */
      dailyQuota: number;
      /**
       * Distance
       * @description Distance in meters to the nearest data point used for elevation
       */
      distance: number;
      /**
       * Elevation
       * @description Additional metadata about elevation data
       */
      elevation: {
          /**
           * Source
           * @description Data source citation for the elevation information
           */
          source: string;
          /**
           * Unit
           * @description Unit of the elevation measurement, always 'm'
           * @constant
           */
          unit: "m";
      };
      /**
       * Lat
       * @description Latitude of the requested coordinate
       */
      lat: number;
      /**
       * Lng
       * @description Longitude of the requested coordinate
       */
      lng: number;
      /**
       * Request Count
       * @description Number of requests made today
       */
      requestCount: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of STORMGLASS_IO's STORMGLASS_IO_GET_TIDE_STATIONS_LIST tool input.
 */
type STORMGLASS_IO_GET_TIDE_STATIONS_LIST_INPUT = object;

/**
 * Type of STORMGLASS_IO's STORMGLASS_IO_GET_TIDE_STATIONS_LIST tool output.
 */
type STORMGLASS_IO_GET_TIDE_STATIONS_LIST_OUTPUT = {
  /**
   * Data
   * @description Array of available tide stations
   */
  data?: {
      /**
       * Country
       * @description Country where the station is located, typically ISO 3166-1 alpha-2 code
       */
      country: string;
      /**
       * Distance
       * @description Distance in kilometers from queried coordinates, if provided
       * @default null
       */
      distance: number | null;
      /**
       * Id
       * @description Unique identifier for the tide station
       */
      id: string;
      /**
       * Lat
       * @description Latitude coordinate of the station
       */
      lat: number;
      /**
       * Lng
       * @description Longitude coordinate of the station
       */
      lng: number;
      /**
       * Name
       * @description Name of the tide station
       */
      name: string;
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
 * Type of STORMGLASS_IO's STORMGLASS_IO_STORMGLASS_GET_SOLAR_POINT tool input.
 */
type STORMGLASS_IO_STORMGLASS_GET_SOLAR_POINT_INPUT = {
  /**
   * End
   * @description Optional end time (inclusive) in ISO8601 UTC format, e.g. '2022-02-01T23:00:00+00:00'
   * @default null
   */
  end: string | null;
  /**
   * Lat
   * @description Latitude in decimal degrees (-90 to 90).
   */
  lat?: number;
  /**
   * Lng
   * @description Longitude in decimal degrees (-180 to 180).
   */
  lng?: number;
  /**
   * Params
   * @description List of solar parameters to retrieve, e.g. ['ghi','dhi','dni','solarNoon','zenith']
   */
  params?: string[];
  /**
   * Source
   * @description Data source filter, one of 'noaa','sg','meteo','dwd','fcoo','icon','hira','marine'.
   * @default null
   * @enum {string|null}
   */
  source: "noaa" | "sg" | "meteo" | "dwd" | "fcoo" | "icon" | "hira" | "marine" | null;
  /**
   * Start
   * @description Optional start time (inclusive) in ISO8601 UTC format, e.g. '2022-02-01T00:00:00+00:00'
   * @default null
   */
  start: string | null;
};

/**
 * Type of STORMGLASS_IO's STORMGLASS_IO_STORMGLASS_GET_SOLAR_POINT tool output.
 */
type STORMGLASS_IO_STORMGLASS_GET_SOLAR_POINT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Hours
       * @description Array of hourly data objects, each with 'time' and parameter source-value mappings.
       */
      hours: {
          [key: string]: string | {
              [key: string]: number;
          };
      }[];
      /**
       * Meta
       * @description Metadata about the returned data.
       */
      meta: {
          /**
           * End
           * @description End time of the returned data (ISO8601).
           */
          end: string;
          /**
           * Lat
           * @description Requested latitude.
           */
          lat: number;
          /**
           * Lng
           * @description Requested longitude.
           */
          lng: number;
          /**
           * Parameters
           * @description List of parameter names returned.
           */
          parameters: string[];
          /**
           * Start
           * @description Start time of the returned data (ISO8601).
           */
          start: string;
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
 * Type of STORMGLASS_IO's STORMGLASS_IO_STORMGLASS_GET_WEATHER_POINT tool input.
 */
type STORMGLASS_IO_STORMGLASS_GET_WEATHER_POINT_INPUT = {
  /**
   * End
   * @description Optional end time (inclusive) in ISO8601 UTC format, e.g. '2019-02-02T18:00:00+00:00'.
   * @default null
   */
  end: string | null;
  /**
   * Lat
   * @description Latitude in decimal degrees (-90 to 90).
   */
  lat?: number;
  /**
   * Lng
   * @description Longitude in decimal degrees (-180 to 180).
   */
  lng?: number;
  /**
   * Params
   * @description List of weather parameters to retrieve, e.g. ['airTemperature','waveHeight','windSpeed'].
   */
  params?: string[];
  /**
   * Source
   * @description Data source/provider filter. One of 'noaa','sg','meteo','dwd','fcoo','icon','hira','marine'.
   * @default null
   * @enum {string|null}
   */
  source: "noaa" | "sg" | "meteo" | "dwd" | "fcoo" | "icon" | "hira" | "marine" | null;
  /**
   * Start
   * @description Optional start time (inclusive) in ISO8601 UTC format, e.g. '2019-02-02T15:00:00+00:00'.
   * @default null
   */
  start: string | null;
};

/**
 * Type of STORMGLASS_IO's STORMGLASS_IO_STORMGLASS_GET_WEATHER_POINT tool output.
 */
type STORMGLASS_IO_STORMGLASS_GET_WEATHER_POINT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Hours
       * @description Array of hourly data objects, each with 'time' and parameter source-value mappings.
       */
      hours: {
          [key: string]: string | {
              [key: string]: number;
          };
      }[];
      /**
       * Meta
       * @description Metadata about the request and returned results.
       */
      meta: {
          /**
           * Cost
           * @description Number of request credits used.
           * @default null
           */
          cost: number | null;
          /**
           * Daily Quota
           * @description Daily request quota.
           * @default null
           */
          dailyQuota: number | null;
          /**
           * End
           * @description End time of the returned data (ISO8601).
           * @default null
           */
          end: string | null;
          /**
           * Lat
           * @description Requested latitude.
           * @default null
           */
          lat: number | null;
          /**
           * Lng
           * @description Requested longitude.
           * @default null
           */
          lng: number | null;
          /**
           * Params
           * @description Parameters requested.
           * @default null
           */
          params: string[] | null;
          /**
           * Request Time
           * @description Request processing time in milliseconds.
           * @default null
           */
          requestTime: number | null;
          /**
           * Sources
           * @description Data sources included in the response.
           * @default null
           */
          sources: string[] | null;
          /**
           * Start
           * @description Start time of the returned data (ISO8601).
           * @default null
           */
          start: string | null;
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
 * Type map of all available tool input types for toolkit "STORMGLASS_IO".
 */
export type STORMGLASS_IO_TOOL_INPUTS = {
  GET_ELEVATION_POINT: STORMGLASS_IO_GET_ELEVATION_POINT_INPUT
  GET_TIDE_STATIONS_LIST: STORMGLASS_IO_GET_TIDE_STATIONS_LIST_INPUT
  STORMGLASS_GET_SOLAR_POINT: STORMGLASS_IO_STORMGLASS_GET_SOLAR_POINT_INPUT
  STORMGLASS_GET_WEATHER_POINT: STORMGLASS_IO_STORMGLASS_GET_WEATHER_POINT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "STORMGLASS_IO".
 */
export type STORMGLASS_IO_TOOL_OUTPUTS = {
  GET_ELEVATION_POINT: STORMGLASS_IO_GET_ELEVATION_POINT_OUTPUT
  GET_TIDE_STATIONS_LIST: STORMGLASS_IO_GET_TIDE_STATIONS_LIST_OUTPUT
  STORMGLASS_GET_SOLAR_POINT: STORMGLASS_IO_STORMGLASS_GET_SOLAR_POINT_OUTPUT
  STORMGLASS_GET_WEATHER_POINT: STORMGLASS_IO_STORMGLASS_GET_WEATHER_POINT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's STORMGLASS_IO toolkit.
 */
export const STORMGLASS_IO = {
  slug: "stormglass_io",
  tools: {
    /**
     * Tool to fetch elevation data for a single geographic point. use when you need bathymetry or topography for a specific latitude/longitude.
     */
    GET_ELEVATION_POINT: "STORMGLASS_IO_GET_ELEVATION_POINT",
    /**
     * Tool to list all available tide stations. use when you need a catalog of stations before querying tide data.
     */
    GET_TIDE_STATIONS_LIST: "STORMGLASS_IO_GET_TIDE_STATIONS_LIST",
    /**
     * Tool to fetch solar irradiation and sun-position data for a specific coordinate. use after confirming lat/lng, desired parameters, and optional iso-formatted start/end.
     */
    STORMGLASS_GET_SOLAR_POINT: "STORMGLASS_IO_STORMGLASS_GET_SOLAR_POINT",
    /**
     * Tool to fetch marine and land weather data for a specific coordinate. use after confirming latitude, longitude, and desired parameters.
     */
    STORMGLASS_GET_WEATHER_POINT: "STORMGLASS_IO_STORMGLASS_GET_WEATHER_POINT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "STORMGLASS_IO".
 */
export type STORMGLASS_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "STORMGLASS_IO".
 */
export type STORMGLASS_IO_TRIGGER_EVENTS = {}
