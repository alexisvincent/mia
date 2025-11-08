// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_AIR_QUALITY_FORECAST_DATA tool input.
 */
type IQAIR_AIRVISUAL_GET_AIR_QUALITY_FORECAST_DATA_INPUT = {
  /**
   * City
   * @description City name (e.g., 'Los Angeles').
   */
  city?: string;
  /**
   * Country
   * @description Country name (e.g., 'USA').
   */
  country?: string;
  /**
   * State
   * @description State or region name (e.g., 'California').
   */
  state?: string;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_AIR_QUALITY_FORECAST_DATA tool output.
 */
type IQAIR_AIRVISUAL_GET_AIR_QUALITY_FORECAST_DATA_OUTPUT = {
  /**
   * Data
   * @description Forecast data payload.
   */
  data?: {
      /**
       * City
       * @description City for which the forecast applies.
       */
      city: string;
      /**
       * Country
       * @description Country for which the forecast applies.
       */
      country: string;
      /**
       * Forecast
       * @description Forecasted pollutant data.
       */
      forecast: {
          /**
           * Daily
           * @description Daily pollutant forecasts.
           */
          daily: {
              /**
               * O3
               * @description Ozone (O₃) daily forecast data.
               */
              o3: {
                  /**
                   * Avg
                   * @description Average pollutant concentration (µg/m³) for this day.
                   */
                  avg: number;
                  /**
                   * Day
                   * Format: date
                   * @description Date of the forecasted values (YYYY-MM-DD format).
                   */
                  day: string;
                  /**
                   * Max
                   * @description Maximum pollutant concentration (µg/m³) for this day.
                   */
                  max: number;
                  /**
                   * Min
                   * @description Minimum pollutant concentration (µg/m³) for this day.
                   */
                  min: number;
              }[];
              /**
               * Pm10
               * @description Particulate Matter 10µm (PM₁₀) daily forecast data.
               */
              pm10: {
                  /**
                   * Avg
                   * @description Average pollutant concentration (µg/m³) for this day.
                   */
                  avg: number;
                  /**
                   * Day
                   * Format: date
                   * @description Date of the forecasted values (YYYY-MM-DD format).
                   */
                  day: string;
                  /**
                   * Max
                   * @description Maximum pollutant concentration (µg/m³) for this day.
                   */
                  max: number;
                  /**
                   * Min
                   * @description Minimum pollutant concentration (µg/m³) for this day.
                   */
                  min: number;
              }[];
              /**
               * Pm25
               * @description Particulate Matter 2.5µm (PM₂.₅) daily forecast data.
               */
              pm25: {
                  /**
                   * Avg
                   * @description Average pollutant concentration (µg/m³) for this day.
                   */
                  avg: number;
                  /**
                   * Day
                   * Format: date
                   * @description Date of the forecasted values (YYYY-MM-DD format).
                   */
                  day: string;
                  /**
                   * Max
                   * @description Maximum pollutant concentration (µg/m³) for this day.
                   */
                  max: number;
                  /**
                   * Min
                   * @description Minimum pollutant concentration (µg/m³) for this day.
                   */
                  min: number;
              }[];
          };
      };
      /**
       * State
       * @description State for which the forecast applies.
       */
      state: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Status of the API request, e.g., 'success'.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_CITIES tool input.
 */
type IQAIR_AIRVISUAL_GET_CITIES_INPUT = {
  /**
   * Country
   * @description Country's English name, for example 'United States'
   */
  country?: string;
  /**
   * State
   * @description State's English name, for example 'California'
   */
  state?: string;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_CITIES tool output.
 */
type IQAIR_AIRVISUAL_GET_CITIES_OUTPUT = {
  /**
   * Data
   * @description List of city objects
   */
  data?: {
      /**
       * City
       * @description English name of the city (only cities with active stations are returned)
       */
      city: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Operation status, for example 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_CITY_AIR_QUALITY tool input.
 */
type IQAIR_AIRVISUAL_GET_CITY_AIR_QUALITY_INPUT = {
  /**
   * City
   * @description Name of the city to retrieve air quality for
   */
  city?: string;
  /**
   * Country
   * @description Name of the country containing the city
   */
  country?: string;
  /**
   * State
   * @description Name of the state or province containing the city
   */
  state?: string;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_CITY_AIR_QUALITY tool output.
 */
type IQAIR_AIRVISUAL_GET_CITY_AIR_QUALITY_OUTPUT = {
  /**
   * Data
   * @description City air quality payload.
   */
  data?: {
      /**
       * City
       * @description City name.
       */
      city: string;
      /**
       * Country
       * @description Country name.
       */
      country: string;
      /**
       * Current
       * @description Current weather and pollution data.
       */
      current: {
          /**
           * Pollution
           * @description Current air quality data.
           */
          pollution: {
              /**
               * Aqicn
               * @description CN AQI value.
               */
              aqicn: number;
              /**
               * Aqius
               * @description US AQI value.
               */
              aqius: number;
              /**
               * Maincn
               * @description Dominant pollutant for CN AQI.
               */
              maincn: string;
              /**
               * Mainus
               * @description Dominant pollutant for US AQI.
               */
              mainus: string;
              /**
               * Ts
               * @description Timestamp (UTC ISO 8601).
               */
              ts: string;
          };
          /**
           * Weather
           * @description Current weather data.
           */
          weather: {
              /**
               * Hu
               * @description Relative humidity in %.
               */
              hu: number;
              /**
               * Ic
               * @description Weather icon code.
               */
              ic: string;
              /**
               * Pr
               * @description Atmospheric pressure in hPa.
               */
              pr: number;
              /**
               * Tp
               * @description Temperature in °C.
               */
              tp: number;
              /**
               * Ts
               * @description Timestamp (UTC ISO 8601).
               */
              ts: string;
              /**
               * Wd
               * @description Wind direction in degrees.
               */
              wd: number;
              /**
               * Ws
               * @description Wind speed in m/s.
               */
              ws: number;
          };
      };
      /**
       * Location
       * @description GeoJSON location of the city.
       */
      location: {
          /**
           * Coordinates
           * @description Coordinates as [longitude, latitude].
           */
          coordinates: number[];
          /**
           * Type
           * @description GeoJSON type (e.g., "Point").
           */
          type: string;
      };
      /**
       * State
       * @description State or region name.
       */
      state: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Request status ('success' or 'fail').
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_COUNTRIES tool input.
 */
type IQAIR_AIRVISUAL_GET_COUNTRIES_INPUT = object;

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_COUNTRIES tool output.
 */
type IQAIR_AIRVISUAL_GET_COUNTRIES_OUTPUT = {
  /**
   * Data
   * @description List of supported countries
   */
  data?: {
      /**
       * Country
       * @description Country English name, e.g., 'United States'
       */
      country: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Request status, e.g., 'success' or error code
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_HISTORICAL_AQI_DATA tool input.
 */
type IQAIR_AIRVISUAL_GET_HISTORICAL_AQI_DATA_INPUT = {
  /**
   * City
   * @description City name
   */
  city?: string;
  /**
   * Country
   * @description Country name
   */
  country?: string;
  /**
   * End
   * @description End datetime in ISO8601 format (inclusive).
   * @default null
   */
  end: string | null;
  /**
   * Start
   * @description Start datetime in ISO8601 format (inclusive).
   * @default null
   */
  start: string | null;
  /**
   * State
   * @description State or province name
   */
  state?: string;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_HISTORICAL_AQI_DATA tool output.
 */
type IQAIR_AIRVISUAL_GET_HISTORICAL_AQI_DATA_OUTPUT = {
  /**
   * Data
   * @description Response data containing historical AQI readings
   */
  data?: {
      /**
       * History
       * @description List of historical AQI readings
       */
      history: {
          /**
           * Aqicn
           * @description China AQI value
           */
          aqicn: number;
          /**
           * Aqius
           * @description U.S. AQI value
           */
          aqius: number;
          /**
           * Maincn
           * @description Primary pollutant for China AQI
           */
          maincn: string;
          /**
           * Mainus
           * @description Primary pollutant for U.S. AQI
           */
          mainus: string;
          /**
           * Ts
           * @description Timestamp of the reading in ISO8601 format
           */
          ts: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API call status, e.g., 'success' or error code
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_NEAREST_CITY_AIR_QUALITY tool input.
 */
type IQAIR_AIRVISUAL_GET_NEAREST_CITY_AIR_QUALITY_INPUT = {
  /**
   * Ip
   * @description IPv4 address to geolocate; if neither lat/lon nor ip provided, server uses caller's IP.
   * @default null
   */
  ip: string | null;
  /**
   * Lat
   * @description Latitude in decimal degrees; must be between -90 and 90. Must be provided with lon.
   * @default null
   */
  lat: number | null;
  /**
   * Lon
   * @description Longitude in decimal degrees; must be between -180 and 180. Must be provided with lat.
   * @default null
   */
  lon: number | null;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_NEAREST_CITY_AIR_QUALITY tool output.
 */
type IQAIR_AIRVISUAL_GET_NEAREST_CITY_AIR_QUALITY_OUTPUT = {
  /**
   * Data
   * @description Nearest city payload.
   */
  data?: {
      /**
       * City
       * @description City name.
       */
      city: string;
      /**
       * Country
       * @description Country name.
       */
      country: string;
      /**
       * Current
       * @description Current conditions.
       */
      current: {
          /**
           * Pollution
           * @description Current air quality data.
           */
          pollution: {
              /**
               * Aqicn
               * @description CN AQI value.
               */
              aqicn: number;
              /**
               * Aqius
               * @description US AQI value.
               */
              aqius: number;
              /**
               * Maincn
               * @description Dominant pollutant for CN AQI.
               */
              maincn: string;
              /**
               * Mainus
               * @description Dominant pollutant for US AQI.
               */
              mainus: string;
              /**
               * Ts
               * @description Timestamp (UTC ISO 8601).
               */
              ts: string;
          };
          /**
           * Weather
           * @description Current weather data.
           */
          weather: {
              /**
               * Hu
               * @description Relative humidity in %.
               */
              hu: number;
              /**
               * Ic
               * @description Weather icon code.
               */
              ic: string;
              /**
               * Pr
               * @description Atmospheric pressure in hPa.
               */
              pr: number;
              /**
               * Tp
               * @description Temperature in °C.
               */
              tp: number;
              /**
               * Ts
               * @description Timestamp (UTC ISO 8601).
               */
              ts: string;
              /**
               * Wd
               * @description Wind direction in degrees.
               */
              wd: number;
              /**
               * Ws
               * @description Wind speed in m/s.
               */
              ws: number;
          };
      };
      /**
       * Location
       * @description GeoJSON location of the city.
       */
      location: {
          /**
           * Coordinates
           * @description Coordinates as [longitude, latitude].
           */
          coordinates: number[];
          /**
           * Type
           * @description GeoJSON type (e.g., "Point").
           */
          type: string;
      };
      /**
       * State
       * @description State/region name.
       */
      state: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Request status ('success' or 'fail').
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_NEAREST_STATION_AIR_QUALITY tool input.
 */
type IQAIR_AIRVISUAL_GET_NEAREST_STATION_AIR_QUALITY_INPUT = {
  /**
   * Lat
   * @description Latitude in decimal degrees, must be between -90 and 90
   */
  lat?: number;
  /**
   * Lon
   * @description Longitude in decimal degrees, must be between -180 and 180
   */
  lon?: number;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_NEAREST_STATION_AIR_QUALITY tool output.
 */
type IQAIR_AIRVISUAL_GET_NEAREST_STATION_AIR_QUALITY_OUTPUT = {
  /**
   * Data
   * @description Nearest station air quality payload
   */
  data?: {
      /**
       * City
       * @description City name
       */
      city: string;
      /**
       * Country
       * @description Country name
       */
      country: string;
      /**
       * Current
       * @description Current conditions at station
       */
      current: {
          /**
           * Pollution
           * @description Current pollution at station
           */
          pollution: {
              /**
               * Aqicn
               * @description China AQI for the station
               */
              aqicn: number;
              /**
               * Aqius
               * @description US AQI for the station
               */
              aqius: number;
              /**
               * PollutantDetailModel
               * @description Carbon monoxide details
               * @default null
               */
              co: {
                  /**
                   * Aqicn
                   * @description China AQI for pollutant
                   */
                  aqicn: number;
                  /**
                   * Aqius
                   * @description US AQI for pollutant
                   */
                  aqius: number;
                  /**
                   * Conc
                   * @description Pollutant concentration
                   */
                  conc: number;
              } | null;
              /**
               * Maincn
               * @description Main pollutant key for China AQI
               */
              maincn: string;
              /**
               * Mainus
               * @description Main pollutant key for US AQI
               */
              mainus: string;
              /**
               * PollutantDetailModel
               * @description Nitrogen dioxide details
               * @default null
               */
              n2: {
                  /**
                   * Aqicn
                   * @description China AQI for pollutant
                   */
                  aqicn: number;
                  /**
                   * Aqius
                   * @description US AQI for pollutant
                   */
                  aqius: number;
                  /**
                   * Conc
                   * @description Pollutant concentration
                   */
                  conc: number;
              } | null;
              /**
               * PollutantDetailModel
               * @description Ozone details
               * @default null
               */
              o3: {
                  /**
                   * Aqicn
                   * @description China AQI for pollutant
                   */
                  aqicn: number;
                  /**
                   * Aqius
                   * @description US AQI for pollutant
                   */
                  aqius: number;
                  /**
                   * Conc
                   * @description Pollutant concentration
                   */
                  conc: number;
              } | null;
              /**
               * PollutantDetailModel
               * @description PM10 details
               * @default null
               */
              p1: {
                  /**
                   * Aqicn
                   * @description China AQI for pollutant
                   */
                  aqicn: number;
                  /**
                   * Aqius
                   * @description US AQI for pollutant
                   */
                  aqius: number;
                  /**
                   * Conc
                   * @description Pollutant concentration
                   */
                  conc: number;
              } | null;
              /**
               * PollutantDetailModel
               * @description PM2.5 details
               * @default null
               */
              p2: {
                  /**
                   * Aqicn
                   * @description China AQI for pollutant
                   */
                  aqicn: number;
                  /**
                   * Aqius
                   * @description US AQI for pollutant
                   */
                  aqius: number;
                  /**
                   * Conc
                   * @description Pollutant concentration
                   */
                  conc: number;
              } | null;
              /**
               * PollutantDetailModel
               * @description Sulfur dioxide details
               * @default null
               */
              s2: {
                  /**
                   * Aqicn
                   * @description China AQI for pollutant
                   */
                  aqicn: number;
                  /**
                   * Aqius
                   * @description US AQI for pollutant
                   */
                  aqius: number;
                  /**
                   * Conc
                   * @description Pollutant concentration
                   */
                  conc: number;
              } | null;
              /**
               * Ts
               * @description ISO 8601 timestamp of pollution observation
               */
              ts: string;
          };
          /**
           * Weather
           * @description Current weather at station
           */
          weather: {
              /**
               * Hu
               * @description Relative humidity in %
               */
              hu: number;
              /**
               * Ic
               * @description Weather icon code
               */
              ic: string;
              /**
               * Pr
               * @description Atmospheric pressure in hPa
               */
              pr: number;
              /**
               * Tp
               * @description Temperature in Celsius
               */
              tp: number;
              /**
               * Ts
               * @description ISO 8601 timestamp of weather observation
               */
              ts: string;
              /**
               * Wd
               * @description Wind direction in degrees (0–360)
               */
              wd: number;
              /**
               * Ws
               * @description Wind speed in m/s
               */
              ws: number;
          };
      };
      /**
       * Forecasts
       * @description Forecast data slices
       * @default null
       */
      forecasts: {
          /**
           * Aqicn
           * @description Forecasted CN AQI
           */
          aqicn: number;
          /**
           * Aqius
           * @description Forecasted US AQI
           */
          aqius: number;
          /**
           * Hu
           * @description Relative humidity in %
           */
          hu: number;
          /**
           * Ic
           * @description Weather icon code
           */
          ic: string;
          /**
           * Pr
           * @description Atmospheric pressure in hPa
           */
          pr: number;
          /**
           * Tp
           * @description Temperature in Celsius
           */
          tp: number;
          /**
           * Tp Min
           * @description Minimum temperature in Celsius
           */
          tp_min: number;
          /**
           * Ts
           * @description Forecast timestamp (ISO 8601)
           */
          ts: string;
          /**
           * Wd
           * @description Wind direction in degrees
           */
          wd: number;
          /**
           * Ws
           * @description Wind speed in m/s
           */
          ws: number;
      }[] | null;
      /**
       * HistoryModel
       * @description Historical data
       * @default null
       */
      history: {
          /**
           * Pollution
           * @description Hourly pollution history
           */
          pollution: {
              /**
               * Aqicn
               * @description China AQI for the station
               */
              aqicn: number;
              /**
               * Aqius
               * @description US AQI for the station
               */
              aqius: number;
              /**
               * PollutantDetailModel
               * @description Carbon monoxide details
               * @default null
               */
              co: {
                  /**
                   * Aqicn
                   * @description China AQI for pollutant
                   */
                  aqicn: number;
                  /**
                   * Aqius
                   * @description US AQI for pollutant
                   */
                  aqius: number;
                  /**
                   * Conc
                   * @description Pollutant concentration
                   */
                  conc: number;
              } | null;
              /**
               * Maincn
               * @description Main pollutant key for China AQI
               */
              maincn: string;
              /**
               * Mainus
               * @description Main pollutant key for US AQI
               */
              mainus: string;
              /**
               * PollutantDetailModel
               * @description Nitrogen dioxide details
               * @default null
               */
              n2: {
                  /**
                   * Aqicn
                   * @description China AQI for pollutant
                   */
                  aqicn: number;
                  /**
                   * Aqius
                   * @description US AQI for pollutant
                   */
                  aqius: number;
                  /**
                   * Conc
                   * @description Pollutant concentration
                   */
                  conc: number;
              } | null;
              /**
               * PollutantDetailModel
               * @description Ozone details
               * @default null
               */
              o3: {
                  /**
                   * Aqicn
                   * @description China AQI for pollutant
                   */
                  aqicn: number;
                  /**
                   * Aqius
                   * @description US AQI for pollutant
                   */
                  aqius: number;
                  /**
                   * Conc
                   * @description Pollutant concentration
                   */
                  conc: number;
              } | null;
              /**
               * PollutantDetailModel
               * @description PM10 details
               * @default null
               */
              p1: {
                  /**
                   * Aqicn
                   * @description China AQI for pollutant
                   */
                  aqicn: number;
                  /**
                   * Aqius
                   * @description US AQI for pollutant
                   */
                  aqius: number;
                  /**
                   * Conc
                   * @description Pollutant concentration
                   */
                  conc: number;
              } | null;
              /**
               * PollutantDetailModel
               * @description PM2.5 details
               * @default null
               */
              p2: {
                  /**
                   * Aqicn
                   * @description China AQI for pollutant
                   */
                  aqicn: number;
                  /**
                   * Aqius
                   * @description US AQI for pollutant
                   */
                  aqius: number;
                  /**
                   * Conc
                   * @description Pollutant concentration
                   */
                  conc: number;
              } | null;
              /**
               * PollutantDetailModel
               * @description Sulfur dioxide details
               * @default null
               */
              s2: {
                  /**
                   * Aqicn
                   * @description China AQI for pollutant
                   */
                  aqicn: number;
                  /**
                   * Aqius
                   * @description US AQI for pollutant
                   */
                  aqius: number;
                  /**
                   * Conc
                   * @description Pollutant concentration
                   */
                  conc: number;
              } | null;
              /**
               * Ts
               * @description ISO 8601 timestamp of pollution observation
               */
              ts: string;
          }[];
          /**
           * Weather
           * @description Hourly weather history
           */
          weather: {
              /**
               * Hu
               * @description Relative humidity in %
               */
              hu: number;
              /**
               * Ic
               * @description Weather icon code
               */
              ic: string;
              /**
               * Pr
               * @description Atmospheric pressure in hPa
               */
              pr: number;
              /**
               * Tp
               * @description Temperature in Celsius
               */
              tp: number;
              /**
               * Ts
               * @description ISO 8601 timestamp of weather observation
               */
              ts: string;
              /**
               * Wd
               * @description Wind direction in degrees (0–360)
               */
              wd: number;
              /**
               * Ws
               * @description Wind speed in m/s
               */
              ws: number;
          }[];
      } | null;
      /**
       * Location
       * @description Station location geo point
       */
      location: {
          /**
           * Coordinates
           * @description [longitude, latitude]
           */
          coordinates: number[];
          /**
           * Type
           * @description Type of geojson object, always "Point"
           */
          type: string;
      };
      /**
       * Name
       * @description Station name, if available
       * @default null
       */
      name: string | null;
      /**
       * State
       * @description State/region name
       */
      state: string;
      /**
       * UnitsModel
       * @description Units for pollutant keys
       * @default null
       */
      units: {
          /**
           * Co
           * @description Unit for CO (e.g., "ppm")
           */
          co: string;
          /**
           * N2
           * @description Unit for NO2
           */
          n2: string;
          /**
           * O3
           * @description Unit for Ozone (e.g., "ppb")
           */
          o3: string;
          /**
           * P1
           * @description Unit for PM10
           */
          p1: string;
          /**
           * P2
           * @description Unit for PM2.5 (e.g., "ugm3")
           */
          p2: string;
          /**
           * S2
           * @description Unit for SO2
           */
          s2: string;
      } | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status, e.g. "success"
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_STATES tool input.
 */
type IQAIR_AIRVISUAL_GET_STATES_INPUT = {
  /**
   * Country
   * @description Country's English name, for example 'United States'
   */
  country?: string;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_STATES tool output.
 */
type IQAIR_AIRVISUAL_GET_STATES_OUTPUT = {
  /**
   * Data
   * @description List of state objects
   */
  data?: {
      /**
       * State
       * @description State's English name
       */
      state: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Operation status, for example 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_STATION_BY_ID tool input.
 */
type IQAIR_AIRVISUAL_GET_STATION_BY_ID_INPUT = {
  /**
   * City
   * @description City’s English name; find via listing endpoint
   */
  city?: string;
  /**
   * Country
   * @description Country’s English name; find via listing endpoint
   */
  country?: string;
  /**
   * State
   * @description State’s English name; find via listing endpoint
   */
  state?: string;
  /**
   * Station
   * @description Station’s English name; find via listing endpoint
   */
  station?: string;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_STATION_BY_ID tool output.
 */
type IQAIR_AIRVISUAL_GET_STATION_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      /**
       * City
       * @description City name
       */
      city: string;
      /**
       * Country
       * @description Country name
       */
      country: string;
      /** Current */
      current: {
          /** Pollution */
          pollution: {
              /**
               * Aqicn
               * @description AQI value (China)
               */
              aqicn: number;
              /**
               * Aqius
               * @description AQI value (US)
               */
              aqius: number;
              /**
               * Co
               * @description CO concentration in ppm
               * @default null
               */
              co: number | null;
              /**
               * Maincn
               * @description Main pollutant (China)
               */
              maincn: string;
              /**
               * Mainus
               * @description Main pollutant (US)
               */
              mainus: string;
              /**
               * N2
               * @description NO₂ concentration in ppb
               * @default null
               */
              n2: number | null;
              /**
               * O3
               * @description O₃ concentration in ppb
               * @default null
               */
              o3: number | null;
              /**
               * P1
               * @description PM1 concentration in µg/m³
               * @default null
               */
              p1: number | null;
              /**
               * P2
               * @description PM2.5 concentration in µg/m³
               * @default null
               */
              p2: number | null;
              /**
               * S2
               * @description SO₂ concentration in ppb
               * @default null
               */
              s2: number | null;
              /**
               * Ts
               * @description Timestamp of the reading, e.g., '2021-10-02T10:00:00.000Z'
               */
              ts: string;
          };
          /** Weather */
          weather: {
              /**
               * Hu
               * @description Humidity percentage
               */
              hu: number;
              /**
               * Ic
               * @description Weather icon code
               */
              ic: string;
              /**
               * Pr
               * @description Atmospheric pressure in hPa
               */
              pr: number;
              /**
               * Tp
               * @description Temperature in °C
               */
              tp: number;
              /**
               * Ts
               * @description Timestamp of the reading, e.g., '2021-10-02T10:00:00.000Z'
               */
              ts: string;
              /**
               * Wd
               * @description Wind direction in degrees
               */
              wd: number;
              /**
               * Ws
               * @description Wind speed in m/s
               */
              ws: number;
          };
      };
      /**
       * Forecasts
       * @default null
       */
      forecasts: {
          /**
           * Aqicn
           * @description Forecasted AQI (China)
           */
          aqicn: number;
          /**
           * Aqius
           * @description Forecasted AQI (US)
           */
          aqius: number;
          /**
           * Hu
           * @description Forecasted humidity percentage
           */
          hu: number;
          /**
           * Ic
           * @description Forecasted weather icon code
           */
          ic: string;
          /**
           * Pr
           * @description Forecasted pressure in hPa
           */
          pr: number;
          /**
           * Tp
           * @description Forecasted temperature in °C
           */
          tp: number;
          /**
           * Tp Min
           * @description Forecasted minimum temperature in °C
           */
          tp_min: number;
          /**
           * Ts
           * @description Forecast timestamp, e.g., '2021-10-02T10:00:00.000Z'
           */
          ts: string;
          /**
           * Wd
           * @description Forecasted wind direction in degrees
           */
          wd: number;
          /**
           * Ws
           * @description Forecasted wind speed in m/s
           */
          ws: number;
      }[] | null;
      /**
       * History
       * @default null
       */
      history: {
          /** Pollution */
          pollution: {
              /**
               * Aqicn
               * @description AQI value (China)
               */
              aqicn: number;
              /**
               * Aqius
               * @description AQI value (US)
               */
              aqius: number;
              /**
               * Co
               * @description CO concentration in ppm
               * @default null
               */
              co: number | null;
              /**
               * Maincn
               * @description Main pollutant (China)
               */
              maincn: string;
              /**
               * Mainus
               * @description Main pollutant (US)
               */
              mainus: string;
              /**
               * N2
               * @description NO₂ concentration in ppb
               * @default null
               */
              n2: number | null;
              /**
               * O3
               * @description O₃ concentration in ppb
               * @default null
               */
              o3: number | null;
              /**
               * P1
               * @description PM1 concentration in µg/m³
               * @default null
               */
              p1: number | null;
              /**
               * P2
               * @description PM2.5 concentration in µg/m³
               * @default null
               */
              p2: number | null;
              /**
               * S2
               * @description SO₂ concentration in ppb
               * @default null
               */
              s2: number | null;
              /**
               * Ts
               * @description Timestamp of the reading, e.g., '2021-10-02T10:00:00.000Z'
               */
              ts: string;
          }[];
          /** Weather */
          weather: {
              /**
               * Hu
               * @description Humidity percentage
               */
              hu: number;
              /**
               * Ic
               * @description Weather icon code
               */
              ic: string;
              /**
               * Pr
               * @description Atmospheric pressure in hPa
               */
              pr: number;
              /**
               * Tp
               * @description Temperature in °C
               */
              tp: number;
              /**
               * Ts
               * @description Timestamp of the reading, e.g., '2021-10-02T10:00:00.000Z'
               */
              ts: string;
              /**
               * Wd
               * @description Wind direction in degrees
               */
              wd: number;
              /**
               * Ws
               * @description Wind speed in m/s
               */
              ws: number;
          }[];
      } | null;
      /** Location */
      location: {
          /**
           * Coordinates
           * @description Coordinates as [longitude, latitude]
           */
          coordinates: number[];
          /**
           * Type
           * @description GeoJSON object type, e.g., 'Point'
           */
          type: string;
      };
      /**
       * Name
       * @description Station name
       */
      name: string;
      /**
       * State
       * @description State/region name
       */
      state: string;
      /**
       * Units
       * @default null
       */
      units: {
          /**
           * Co
           * @description Unit for CO
           */
          co: string;
          /**
           * N2
           * @description Unit for NO₂
           */
          n2: string;
          /**
           * O3
           * @description Unit for O₃
           */
          o3: string;
          /**
           * P1
           * @description Unit for PM1
           */
          p1: string;
          /**
           * P2
           * @description Unit for PM2.5
           */
          p2: string;
          /**
           * S2
           * @description Unit for SO₂
           */
          s2: string;
      } | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Request status, e.g., 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_WORLD_RANKING tool input.
 */
type IQAIR_AIRVISUAL_GET_WORLD_RANKING_INPUT = {
  /**
   * Ip
   * @description IPv4 address to geolocate for fallback.
   * @default null
   */
  ip: string | null;
  /**
   * Lat
   * @description Latitude for fallback to nearest city.
   * @default null
   */
  lat: number | null;
  /**
   * Lon
   * @description Longitude for fallback to nearest city.
   * @default null
   */
  lon: number | null;
};

/**
 * Type of IQAIR_AIRVISUAL's IQAIR_AIRVISUAL_GET_WORLD_RANKING tool output.
 */
type IQAIR_AIRVISUAL_GET_WORLD_RANKING_OUTPUT = {
  /**
   * Data
   * @description List of cities ranked by AQI
   */
  data?: {
      /**
       * City
       * @description City name
       */
      city: string;
      /**
       * Country
       * @description Country of the city
       */
      country: string;
      /**
       * Current
       * @description Current air quality data
       */
      current: {
          /**
           * Pollution
           * @description Pollution data for the current observation
           */
          pollution: {
              /**
               * Aqicn
               * @description Air Quality Index based on Chinese MEP standard
               */
              aqicn: number;
              /**
               * Aqius
               * @description Air Quality Index based on US EPA standard
               */
              aqius: number;
              /**
               * Maincn
               * @description Primary pollutant for Chinese AQI
               */
              maincn: string;
              /**
               * Mainus
               * @description Primary pollutant for US AQI
               */
              mainus: string;
          };
      };
      /**
       * Location
       * @description Geographic location of the city
       */
      location: {
          /**
           * Coordinates
           * @description Longitude and latitude of the city
           */
          coordinates: number[];
          /**
           * Type
           * @description GeoJSON type, e.g., 'Point'
           */
          type: string;
      };
      /**
       * State
       * @description State or region of the city
       */
      state: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Request status (e.g., 'success')
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "IQAIR_AIRVISUAL".
 */
export type IQAIR_AIRVISUAL_TOOL_INPUTS = {
  GET_AIR_QUALITY_FORECAST_DATA: IQAIR_AIRVISUAL_GET_AIR_QUALITY_FORECAST_DATA_INPUT
  GET_CITIES: IQAIR_AIRVISUAL_GET_CITIES_INPUT
  GET_CITY_AIR_QUALITY: IQAIR_AIRVISUAL_GET_CITY_AIR_QUALITY_INPUT
  GET_COUNTRIES: IQAIR_AIRVISUAL_GET_COUNTRIES_INPUT
  GET_HISTORICAL_AQI_DATA: IQAIR_AIRVISUAL_GET_HISTORICAL_AQI_DATA_INPUT
  GET_NEAREST_CITY_AIR_QUALITY: IQAIR_AIRVISUAL_GET_NEAREST_CITY_AIR_QUALITY_INPUT
  GET_NEAREST_STATION_AIR_QUALITY: IQAIR_AIRVISUAL_GET_NEAREST_STATION_AIR_QUALITY_INPUT
  GET_STATES: IQAIR_AIRVISUAL_GET_STATES_INPUT
  GET_STATION_BY_ID: IQAIR_AIRVISUAL_GET_STATION_BY_ID_INPUT
  GET_WORLD_RANKING: IQAIR_AIRVISUAL_GET_WORLD_RANKING_INPUT
}

/**
 * Type map of all available tool input types for toolkit "IQAIR_AIRVISUAL".
 */
export type IQAIR_AIRVISUAL_TOOL_OUTPUTS = {
  GET_AIR_QUALITY_FORECAST_DATA: IQAIR_AIRVISUAL_GET_AIR_QUALITY_FORECAST_DATA_OUTPUT
  GET_CITIES: IQAIR_AIRVISUAL_GET_CITIES_OUTPUT
  GET_CITY_AIR_QUALITY: IQAIR_AIRVISUAL_GET_CITY_AIR_QUALITY_OUTPUT
  GET_COUNTRIES: IQAIR_AIRVISUAL_GET_COUNTRIES_OUTPUT
  GET_HISTORICAL_AQI_DATA: IQAIR_AIRVISUAL_GET_HISTORICAL_AQI_DATA_OUTPUT
  GET_NEAREST_CITY_AIR_QUALITY: IQAIR_AIRVISUAL_GET_NEAREST_CITY_AIR_QUALITY_OUTPUT
  GET_NEAREST_STATION_AIR_QUALITY: IQAIR_AIRVISUAL_GET_NEAREST_STATION_AIR_QUALITY_OUTPUT
  GET_STATES: IQAIR_AIRVISUAL_GET_STATES_OUTPUT
  GET_STATION_BY_ID: IQAIR_AIRVISUAL_GET_STATION_BY_ID_OUTPUT
  GET_WORLD_RANKING: IQAIR_AIRVISUAL_GET_WORLD_RANKING_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's IQAIR_AIRVISUAL toolkit.
 */
export const IQAIR_AIRVISUAL = {
  slug: "iqair_airvisual",
  tools: {
    /**
     * Tool to retrieve air quality forecast data for a specified city, state, and country. Use after confirming location details.
     */
    GET_AIR_QUALITY_FORECAST_DATA: "IQAIR_AIRVISUAL_GET_AIR_QUALITY_FORECAST_DATA",
    /**
     * Tool to list supported cities in a specified state and country. Use when you need to retrieve cities for a given state/country.
     */
    GET_CITIES: "IQAIR_AIRVISUAL_GET_CITIES",
    /**
     * Tool to retrieve air quality data for a specific city. Use when you need current pollution and weather data by specifying city, state, and country.
     */
    GET_CITY_AIR_QUALITY: "IQAIR_AIRVISUAL_GET_CITY_AIR_QUALITY",
    /**
     * Tool to list all supported countries. Use when you need to know which countries are supported by the AirVisual API.
     */
    GET_COUNTRIES: "IQAIR_AIRVISUAL_GET_COUNTRIES",
    /**
     * Tool to retrieve historical air quality data for a city. Use after confirming city, state, and country when you need AQI readings over time.
     */
    GET_HISTORICAL_AQI_DATA: "IQAIR_AIRVISUAL_GET_HISTORICAL_AQI_DATA",
    /**
     * Tool to retrieve air quality data for the nearest city based on latitude/longitude or IP. Use when you have precise location data or want to geolocate an IP for air quality.
     */
    GET_NEAREST_CITY_AIR_QUALITY: "IQAIR_AIRVISUAL_GET_NEAREST_CITY_AIR_QUALITY",
    /**
     * Tool to get nearest station air quality. Use when you have GPS coordinates and need closest station’s AQI.
     */
    GET_NEAREST_STATION_AIR_QUALITY: "IQAIR_AIRVISUAL_GET_NEAREST_STATION_AIR_QUALITY",
    /**
     * Tool to list supported states in a specified country. Use when you need to retrieve states/provinces for a given country.
     */
    GET_STATES: "IQAIR_AIRVISUAL_GET_STATES",
    /**
     * Tool to fetch air quality and weather data for a specific monitoring station by ID. Use when you need detailed historical, current, and forecast data for a station.
     */
    GET_STATION_BY_ID: "IQAIR_AIRVISUAL_GET_STATION_BY_ID",
    /**
     * Tool to retrieve a ranking of cities worldwide based on current AQI. Use when you need a global AQI ranking list after authenticating with a valid AirVisual API key. If /world-rankings is not accessible, gracefully falls back to /nearest_city and returns a single-item list based on the nearest city.
     */
    GET_WORLD_RANKING: "IQAIR_AIRVISUAL_GET_WORLD_RANKING",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "IQAIR_AIRVISUAL".
 */
export type IQAIR_AIRVISUAL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "IQAIR_AIRVISUAL".
 */
export type IQAIR_AIRVISUAL_TRIGGER_EVENTS = {}
