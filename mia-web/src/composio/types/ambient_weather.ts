// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AMBIENT_WEATHER's AMBIENT_WEATHER_GET_DEVICES tool input.
 */
type AMBIENT_WEATHER_GET_DEVICES_INPUT = object;

/**
 * Type of AMBIENT_WEATHER's AMBIENT_WEATHER_GET_DEVICES tool output.
 */
type AMBIENT_WEATHER_GET_DEVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Devices
       * @description Array of devices and their most recent readings
       */
      devices: {
          /**
           * Api Key
           * @description API key associated with this device, if returned
           * @default null
           */
          apiKey: string | null;
          /**
           * Info
           * @description Metadata about the station
           */
          info: {
              /**
               * Address
               * @description Physical address of the station
               * @default null
               */
              address: string | null;
              /**
               * Coords
               * @description Raw geographic coordinates
               */
              coords: {
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
               * Elevation
               * @description Elevation of the station in meters
               */
              elevation: number;
              /**
               * Geo
               * @description GeoJSON representation of station location
               */
              geo: {
                  /**
                   * Coordinates
                   * @description Coordinates as [longitude, latitude]
                   */
                  coordinates: number[];
                  /**
                   * Type
                   * @description GeoJSON object type, typically 'Point'
                   */
                  type: string;
              };
              /**
               * Location
               * @description User-defined label for station location
               * @default null
               */
              location: string | null;
              /**
               * Name
               * @description Station name
               */
              name: string;
          };
          /**
           * Last Data
           * @description Most recent sensor readings from this station
           */
          lastData: {
              /**
               * Baromabsin
               * @description Absolute barometric pressure in inHg
               * @default null
               */
              baromabsin: number | null;
              /**
               * Baromrelin
               * @description Relative barometric pressure in inHg
               * @default null
               */
              baromrelin: number | null;
              /**
               * Dailyrainin
               * @description Rainfall in past 24 hours in inches
               * @default null
               */
              dailyrainin: number | null;
              /**
               * Date
               * @description ISO 8601 formatted date/time of reading (UTC)
               */
              date: string;
              /**
               * Dateutc
               * @description Timestamp in milliseconds since epoch (UTC)
               */
              dateutc: number;
              /**
               * Device Id
               * @description Internal device identifier
               * @default null
               */
              deviceId: string | null;
              /**
               * Dew Point
               * @description Dew point temperature in Fahrenheit
               * @default null
               */
              dewPoint: number | null;
              /**
               * Feels Like
               * @description Feels-like temperature in Fahrenheit
               * @default null
               */
              feelsLike: number | null;
              /**
               * Hourlyrainin
               * @description Rainfall in past hour in inches
               * @default null
               */
              hourlyrainin: number | null;
              /**
               * Humidity
               * @description Outside relative humidity percentage
               * @default null
               */
              humidity: number | null;
              /**
               * Humidityin
               * @description Inside relative humidity percentage
               * @default null
               */
              humidityin: number | null;
              /**
               * Maxdailygust
               * @description Maximum gust speed in past 24 hours (mph)
               * @default null
               */
              maxdailygust: number | null;
              /**
               * Monthlyrainin
               * @description Rainfall in past month in inches
               * @default null
               */
              monthlyrainin: number | null;
              /**
               * Tempf
               * @description Outside temperature in Fahrenheit
               * @default null
               */
              tempf: number | null;
              /**
               * Tempinf
               * @description Inside temperature in Fahrenheit
               * @default null
               */
              tempinf: number | null;
              /**
               * Winddir
               * @description Wind direction in degrees
               * @default null
               */
              winddir: number | null;
              /**
               * Winddir Avg10M
               * @description 10-minute average wind direction
               * @default null
               */
              winddir_avg10m: number | null;
              /**
               * Winddir Avg2M
               * @description 2-minute average wind direction
               * @default null
               */
              winddir_avg2m: number | null;
              /**
               * Windgustdir
               * @description Wind gust direction in degrees
               * @default null
               */
              windgustdir: number | null;
              /**
               * Windgustmph
               * @description Wind gust speed in miles per hour
               * @default null
               */
              windgustmph: number | null;
              /**
               * Windspdmph Avg10M
               * @description 10-minute average wind speed (mph)
               * @default null
               */
              windspdmph_avg10m: number | null;
              /**
               * Windspdmph Avg2M
               * @description 2-minute average wind speed (mph)
               * @default null
               */
              windspdmph_avg2m: number | null;
              /**
               * Windspeedmph
               * @description Wind speed in miles per hour
               * @default null
               */
              windspeedmph: number | null;
              /**
               * Yearlyrainin
               * @description Rainfall in past year in inches
               * @default null
               */
              yearlyrainin: number | null;
          };
          /**
           * Mac Address
           * @description Unique MAC address of the weather station
           */
          macAddress: string;
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
 * Type map of all available tool input types for toolkit "AMBIENT_WEATHER".
 */
export type AMBIENT_WEATHER_TOOL_INPUTS = {
  GET_DEVICES: AMBIENT_WEATHER_GET_DEVICES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AMBIENT_WEATHER".
 */
export type AMBIENT_WEATHER_TOOL_OUTPUTS = {
  GET_DEVICES: AMBIENT_WEATHER_GET_DEVICES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AMBIENT_WEATHER toolkit.
 */
export const AMBIENT_WEATHER = {
  slug: "ambient_weather",
  tools: {
    /**
     * Tool to retrieve a list of user's ambient weather devices with their most recent data. use when you need to list your stations and view their latest readings.
     */
    GET_DEVICES: "AMBIENT_WEATHER_GET_DEVICES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AMBIENT_WEATHER".
 */
export type AMBIENT_WEATHER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AMBIENT_WEATHER".
 */
export type AMBIENT_WEATHER_TRIGGER_EVENTS = {}
