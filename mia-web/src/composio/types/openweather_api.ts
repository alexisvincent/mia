// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_DELETE_WEATHER_STATION tool input.
 */
type OPENWEATHER_API_DELETE_WEATHER_STATION_INPUT = {
  /**
   * Station Id
   * @description The unique ID of the weather station to delete.
   */
  station_id?: string;
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_DELETE_WEATHER_STATION tool output.
 */
type OPENWEATHER_API_DELETE_WEATHER_STATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Confirmation message of successful deletion.
       */
      message: string;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET5_DAY_FORECAST tool input.
 */
type OPENWEATHER_API_GET5_DAY_FORECAST_INPUT = {
  /**
   * Id
   * @description OpenWeatherMap city ID
   * @default null
   */
  id: number | null;
  /**
   * Lang
   * @description Language code (ISO 639-1)
   * @default null
   */
  lang: string | null;
  /**
   * Lat
   * @description Latitude in degrees
   * @default null
   */
  lat: number | null;
  /**
   * Lon
   * @description Longitude in degrees
   * @default null
   */
  lon: number | null;
  /**
   * Mode
   * @description Response format
   * @default null
   * @enum {string|null}
   */
  mode: "json" | "xml" | "html" | null;
  /**
   * Q
   * @description City name and optional country code, e.g. 'London,uk'
   * @default null
   */
  q: string | null;
  /**
   * Units
   * @description Units of measurement (standard, metric, imperial)
   * @default null
   * @enum {string|null}
   */
  units: "standard" | "metric" | "imperial" | null;
  /**
   * Zip
   * @description Zip code with country code, e.g. '94040,us'
   * @default null
   */
  zip: string | null;
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET5_DAY_FORECAST tool output.
 */
type OPENWEATHER_API_GET5_DAY_FORECAST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** City */
      city: {
          /** Coord */
          coord: {
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
          };
          /**
           * Country
           * @description Country code (ISO 3166)
           */
          country: string;
          /**
           * Id
           * @description City ID
           */
          id: number;
          /**
           * Name
           * @description City name
           */
          name: string;
          /**
           * Sunrise
           * @description Sunrise time (Unix UTC)
           */
          sunrise: number;
          /**
           * Sunset
           * @description Sunset time (Unix UTC)
           */
          sunset: number;
          /**
           * Timezone
           * @description Shift in seconds from UTC
           */
          timezone: number;
      };
      /**
       * Cnt
       * @description Number of timestamps returned
       */
      cnt: number;
      /**
       * Cod
       * @description Internal response code
       */
      cod: string;
      /**
       * List
       * @description Array of forecast data
       */
      list: {
          /** Clouds */
          clouds: {
              /**
               * All
               * @description Cloudiness percentage
               */
              all: number;
          };
          /**
           * Dt
           * @description Forecast time (Unix UTC)
           */
          dt: number;
          /**
           * Dt Txt
           * @description Forecast time as text
           */
          dt_txt: string;
          /** Main */
          main: {
              /**
               * Feels Like
               * @description Human perception of temperature
               */
              feels_like: number;
              /**
               * Humidity
               * @description Humidity percentage
               */
              humidity: number;
              /**
               * Pressure
               * @description Atmospheric pressure (hPa)
               */
              pressure: number;
              /**
               * Temp
               * @description Temperature
               */
              temp: number;
              /**
               * Temp Max
               * @description Maximum temperature at the moment
               */
              temp_max: number;
              /**
               * Temp Min
               * @description Minimum temperature at the moment
               */
              temp_min: number;
          };
          /**
           * Pop
           * @description Probability of precipitation
           * @default null
           */
          pop: number | null;
          /**
           * PrecipitationVolume
           * @description Rain or snow volume for last 3 hours
           */
          rain: {
              /**
               * 3H
               * @description Volume for last 3 hours
               */
              "3h": number;
          } | null;
          /**
           * PrecipitationVolume
           * @description Rain or snow volume for last 3 hours
           */
          snow: {
              /**
               * 3H
               * @description Volume for last 3 hours
               */
              "3h": number;
          } | null;
          /** Sys */
          sys: {
              /**
               * Pod
               * @description Part of day: d=day, n=night
               * @enum {string}
               */
              pod: "d" | "n";
          };
          /**
           * Visibility
           * @description Visibility in meters
           * @default null
           */
          visibility: number | null;
          /** Weather */
          weather: {
              /**
               * Description
               * @description Weather condition within the group
               */
              description: string;
              /**
               * Icon
               * @description Weather icon ID
               */
              icon: string;
              /**
               * Id
               * @description Weather condition ID
               */
              id: number;
              /**
               * Main
               * @description Group of weather parameters
               */
              main: string;
          }[];
          /** Wind */
          wind: {
              /**
               * Deg
               * @description Wind direction in degrees
               */
              deg: number;
              /**
               * Gust
               * @description Wind gust speed
               * @default null
               */
              gust: number | null;
              /**
               * Speed
               * @description Wind speed
               */
              speed: number;
          };
      }[];
      /**
       * Message
       * @description Internal parameter
       */
      message: number;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_AIR_POLLUTION_CURRENT tool input.
 */
type OPENWEATHER_API_GET_AIR_POLLUTION_CURRENT_INPUT = {
  /**
   * Lat
   * @description Latitude of the location, between -90 and 90
   */
  lat?: number;
  /**
   * Lon
   * @description Longitude of the location, between -180 and 180
   */
  lon?: number;
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_AIR_POLLUTION_CURRENT tool output.
 */
type OPENWEATHER_API_GET_AIR_POLLUTION_CURRENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Coord
       * @description Coordinates of the requested location
       */
      coord: {
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
      };
      /**
       * List
       * @description Array of air quality measurements
       */
      list: {
          /**
           * Components
           * @description Pollutant concentration data
           */
          components: {
              /**
               * Co
               * @description CO concentration, μg/m3
               */
              co: number;
              /**
               * Nh3
               * @description Ammonia concentration, μg/m3
               */
              nh3: number;
              /**
               * No
               * @description Nitric oxide concentration, μg/m3
               */
              no: number;
              /**
               * No2
               * @description Nitrogen dioxide concentration, μg/m3
               */
              no2: number;
              /**
               * O3
               * @description Ozone concentration, μg/m3
               */
              o3: number;
              /**
               * Pm10
               * @description Particulate matter <10 μm, μg/m3
               */
              pm10: number;
              /**
               * Pm2 5
               * @description Particulate matter <2.5 μm, μg/m3
               */
              pm2_5: number;
              /**
               * So2
               * @description Sulphur dioxide concentration, μg/m3
               */
              so2: number;
          };
          /**
           * Dt
           * @description Time of data calculation, UNIX UTC timestamp
           */
          dt: number;
          /**
           * Main
           * @description Main air quality data
           */
          main: {
              /**
               * Aqi
               * @description Air Quality Index (1=Good, 5=Very Poor)
               */
              aqi: number;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_AIR_POLLUTION_FORECAST tool input.
 */
type OPENWEATHER_API_GET_AIR_POLLUTION_FORECAST_INPUT = {
  /**
   * Lat
   * @description Geographical latitude in decimal degrees (range -90 to 90)
   */
  lat?: number;
  /**
   * Lon
   * @description Geographical longitude in decimal degrees (range -180 to 180)
   */
  lon?: number;
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_AIR_POLLUTION_FORECAST tool output.
 */
type OPENWEATHER_API_GET_AIR_POLLUTION_FORECAST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Coord
       * @description Coordinates of the location
       */
      coord: {
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
      };
      /**
       * List
       * @description Array of forecasted air pollution data
       */
      list: {
          /**
           * Components
           * @description Pollutant concentrations
           */
          components: {
              /**
               * Co
               * @description Carbon monoxide concentration (μg/m3)
               */
              co: number;
              /**
               * Nh3
               * @description Ammonia concentration (μg/m3)
               */
              nh3: number;
              /**
               * No
               * @description Nitrogen monoxide concentration (μg/m3)
               */
              no: number;
              /**
               * No2
               * @description Nitrogen dioxide concentration (μg/m3)
               */
              no2: number;
              /**
               * O3
               * @description Ozone concentration (μg/m3)
               */
              o3: number;
              /**
               * Pm10
               * @description Coarse particulate matter (μg/m3)
               */
              pm10: number;
              /**
               * Pm2 5
               * @description Fine particulate matter (μg/m3)
               */
              pm2_5: number;
              /**
               * So2
               * @description Sulphur dioxide concentration (μg/m3)
               */
              so2: number;
          };
          /**
           * Dt
           * @description Time of the forecasted data, Unix time, UTC
           */
          dt: number;
          /**
           * Main
           * @description Main air quality index data
           */
          main: {
              /**
               * Aqi
               * @description Air Quality Index (1=good, 5=very poor)
               */
              aqi: number;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_AIR_POLLUTION_HISTORY tool input.
 */
type OPENWEATHER_API_GET_AIR_POLLUTION_HISTORY_INPUT = {
  /**
   * End
   * @description End UNIX timestamp (UTC seconds); must be >= start
   */
  end?: number;
  /**
   * Lat
   * @description Latitude of the location (range: -90 to 90)
   */
  lat?: number;
  /**
   * Lon
   * @description Longitude of the location (range: -180 to 180)
   */
  lon?: number;
  /**
   * Start
   * @description Start UNIX timestamp (UTC seconds); must be <= end
   */
  start?: number;
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_AIR_POLLUTION_HISTORY tool output.
 */
type OPENWEATHER_API_GET_AIR_POLLUTION_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Coord
       * @description Coordinates of the location
       */
      coord: {
          [key: string]: number;
      };
      /**
       * List
       * @description List of air pollution data objects
       */
      list: {
          /** Components */
          components: {
              /**
               * Co
               * @description Carbon monoxide concentration in μg/m3
               */
              co: number;
              /**
               * Nh3
               * @description Ammonia concentration in μg/m3
               */
              nh3: number;
              /**
               * No
               * @description Nitrogen monoxide concentration in μg/m3
               */
              no: number;
              /**
               * No2
               * @description Nitrogen dioxide concentration in μg/m3
               */
              no2: number;
              /**
               * O3
               * @description Ozone concentration in μg/m3
               */
              o3: number;
              /**
               * Pm10
               * @description Coarse particulate matter (PM10) concentration in μg/m3
               */
              pm10: number;
              /**
               * Pm2 5
               * @description Fine particulate matter (PM2.5) concentration in μg/m3
               */
              pm2_5: number;
              /**
               * So2
               * @description Sulfur dioxide concentration in μg/m3
               */
              so2: number;
          };
          /**
           * Dt
           * @description Data time (UNIX UTC seconds)
           */
          dt: number;
          /** Main */
          main: {
              /**
               * Aqi
               * @description Air Quality Index (1=Good … 5=Very Poor)
               */
              aqi: number;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_CIRCLE_CITY_WEATHER tool input.
 */
type OPENWEATHER_API_GET_CIRCLE_CITY_WEATHER_INPUT = {
  /**
   * Cnt
   * @description Number of cities to return within the circle (1–50). Default is 10.
   * @default null
   */
  cnt: number | null;
  /**
   * Lang
   * @description Language of the response (ISO 639-1)
   * @default en
   */
  lang: string | null;
  /**
   * Lat
   * @description Latitude of the circle center in degrees (-90 to 90)
   */
  lat?: number;
  /**
   * Lon
   * @description Longitude of the circle center in degrees (-180 to 180)
   */
  lon?: number;
  /**
   * Mode
   * @description Response format: 'json' or 'xml'
   * @default json
   * @enum {string|null}
   */
  mode: "json" | "xml" | null;
  /**
   * Units
   * @description Units of measurement: standard, metric, or imperial
   * @default standard
   * @enum {string|null}
   */
  units: "standard" | "metric" | "imperial" | null;
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_CIRCLE_CITY_WEATHER tool output.
 */
type OPENWEATHER_API_GET_CIRCLE_CITY_WEATHER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cod
       * @description Internal status code
       */
      cod: string;
      /**
       * Count
       * @description Number of cities returned in the response
       */
      count: number;
      /**
       * List
       * @description List of city weather data objects
       */
      list: {
          /**
           * Clouds
           * @description Cloudiness data
           */
          clouds: {
              /**
               * All
               * @description Cloudiness percentage
               */
              all: number;
          };
          /**
           * Coord
           * @description City geo coordinates
           */
          coord: {
              /**
               * Lat
               * @description Latitude of the city
               */
              lat: number;
              /**
               * Lon
               * @description Longitude of the city
               */
              lon: number;
          };
          /**
           * Dt
           * @description Data calculation time (Unix UTC)
           */
          dt: number;
          /**
           * Id
           * @description City ID
           */
          id: number;
          /**
           * Main
           * @description Main weather data
           */
          main: {
              /**
               * Feels Like
               * @description Temperature felt physically
               */
              feels_like: number;
              /**
               * Humidity
               * @description Humidity percentage
               */
              humidity: number;
              /**
               * Pressure
               * @description Atmospheric pressure (hPa)
               */
              pressure: number;
              /**
               * Temp
               * @description Temperature
               */
              temp: number;
              /**
               * Temp Max
               * @description Maximum observed temperature
               */
              temp_max: number;
              /**
               * Temp Min
               * @description Minimum observed temperature
               */
              temp_min: number;
          };
          /**
           * Name
           * @description City name
           */
          name: string;
          /**
           * Sys
           * @description System parameters for the city
           */
          sys: {
              /**
               * Country
               * @description Country code
               */
              country: string;
              /**
               * Sunrise
               * @description Sunrise time (Unix UTC)
               */
              sunrise: number;
              /**
               * Sunset
               * @description Sunset time (Unix UTC)
               */
              sunset: number;
              /**
               * Timezone
               * @description Shift in seconds from UTC
               */
              timezone: number;
          };
          /**
           * Weather
           * @description Weather condition list
           */
          weather: {
              /**
               * Description
               * @description Weather condition description
               */
              description: string;
              /**
               * Icon
               * @description Weather icon ID
               */
              icon: string;
              /**
               * Id
               * @description Weather condition ID
               */
              id: number;
              /**
               * Main
               * @description Group of weather parameters (e.g. Rain, Snow)
               */
              main: string;
          }[];
          /**
           * Wind
           * @description Wind data
           */
          wind: {
              /**
               * Deg
               * @description Wind direction in degrees
               */
              deg: number;
              /**
               * Gust
               * @description Wind gust speed
               * @default null
               */
              gust: number | null;
              /**
               * Speed
               * @description Wind speed
               */
              speed: number;
          };
      }[];
      /**
       * Message
       * @description Internal parameter, message in case of errors or usage info
       */
      message: number;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_CURRENT_WEATHER tool input.
 */
type OPENWEATHER_API_GET_CURRENT_WEATHER_INPUT = {
  /**
   * Id
   * @description City ID, e.g., 2172797
   * @default null
   */
  id: number | null;
  /**
   * Lang
   * @description Language for the response (ISO 639-1 code, e.g., 'en')
   * @default null
   */
  lang: string | null;
  /**
   * Lat
   * @description Geographic coordinate latitude, e.g., 35.0
   * @default null
   */
  lat: number | null;
  /**
   * Lon
   * @description Geographic coordinate longitude, e.g., 139.0
   * @default null
   */
  lon: number | null;
  /**
   * Q
   * @description City name, state code and country code, e.g., 'London,uk'
   * @default null
   */
  q: string | null;
  /**
   * Units
   * @description Units of measurement. 'standard' (default), 'metric', or 'imperial'
   * @default null
   * @enum {string|null}
   */
  units: "standard" | "metric" | "imperial" | null;
  /**
   * Zip
   * @description Zip code and country code, e.g., '94040,us'
   * @default null
   */
  zip: string | null;
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_CURRENT_WEATHER tool output.
 */
type OPENWEATHER_API_GET_CURRENT_WEATHER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Base
       * @description Internal parameter
       */
      base: string;
      /** Clouds */
      clouds: {
          /**
           * All
           * @description Cloudiness percentage
           */
          all: number;
      };
      /**
       * Cod
       * @description Internal response code
       */
      cod: number;
      /** Coord */
      coord: {
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
      };
      /**
       * Dt
       * @description Time of data calculation (Unix UTC)
       */
      dt: number;
      /**
       * Id
       * @description City ID
       */
      id: number;
      /** Main */
      main: {
          /**
           * Feels Like
           * @description Human perception of temperature
           */
          feels_like: number;
          /**
           * Grnd Level
           * @description Ground level pressure (hPa)
           * @default null
           */
          grnd_level: number | null;
          /**
           * Humidity
           * @description Humidity percentage
           */
          humidity: number;
          /**
           * Pressure
           * @description Atmospheric pressure (hPa)
           */
          pressure: number;
          /**
           * Sea Level
           * @description Sea level pressure (hPa)
           * @default null
           */
          sea_level: number | null;
          /**
           * Temp
           * @description Temperature
           */
          temp: number;
          /**
           * Temp Max
           * @description Maximum temperature at the moment
           */
          temp_max: number;
          /**
           * Temp Min
           * @description Minimum temperature at the moment
           */
          temp_min: number;
      };
      /**
       * Name
       * @description City name
       */
      name: string;
      /**
       * Rain
       * @description Rain data
       * @default null
       */
      rain: {
          /**
           * 1H
           * @description Rain volume for the last 1 hour
           * @default null
           */
          "1h": number | null;
          /**
           * 3H
           * @description Rain volume for the last 3 hours
           * @default null
           */
          "3h": number | null;
      } | null;
      /**
       * Snow
       * @description Snow data
       * @default null
       */
      snow: {
          /**
           * 1H
           * @description Snow volume for the last 1 hour
           * @default null
           */
          "1h": number | null;
          /**
           * 3H
           * @description Snow volume for the last 3 hours
           * @default null
           */
          "3h": number | null;
      } | null;
      /** Sys */
      sys: {
          /**
           * Country
           * @description Country code (ISO 3166)
           */
          country: string;
          /**
           * Id
           * @description Internal city/system ID
           * @default null
           */
          id: number | null;
          /**
           * Sunrise
           * @description Sunrise time (Unix UTC)
           */
          sunrise: number;
          /**
           * Sunset
           * @description Sunset time (Unix UTC)
           */
          sunset: number;
          /**
           * Type
           * @description Internal parameter
           * @default null
           */
          type: number | null;
      };
      /**
       * Timezone
       * @description Shift in seconds from UTC
       */
      timezone: number;
      /**
       * Visibility
       * @description Visibility in meters
       * @default null
       */
      visibility: number | null;
      /** Weather */
      weather: {
          /**
           * Description
           * @description Weather condition description
           */
          description: string;
          /**
           * Icon
           * @description Weather icon ID
           */
          icon: string;
          /**
           * Id
           * @description Weather condition ID
           */
          id: number;
          /**
           * Main
           * @description Group of weather parameters, e.g., Rain, Snow
           */
          main: string;
      }[];
      /** Wind */
      wind: {
          /**
           * Deg
           * @description Wind direction, degrees
           */
          deg: number;
          /**
           * Gust
           * @description Wind gust speed
           * @default null
           */
          gust: number | null;
          /**
           * Speed
           * @description Wind speed
           */
          speed: number;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_GEOCODING_DIRECT tool input.
 */
type OPENWEATHER_API_GET_GEOCODING_DIRECT_INPUT = {
  /**
   * Limit
   * @description Number of results to return (1 to 5). Defaults to 5.
   * @default 5
   */
  limit: number;
  /**
   * Q
   * @description Location query including city name, state code and country code separated by commas (e.g., 'London,UK').
   */
  q?: string;
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_GEOCODING_DIRECT tool output.
 */
type OPENWEATHER_API_GET_GEOCODING_DIRECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Country code (ISO 3166).
       */
      country: string;
      /**
       * Lat
       * @description Latitude of the location.
       */
      lat: number;
      /**
       * Local Names
       * @description Dictionary of localized names keyed by language code.
       * @default null
       */
      local_names: {
          [key: string]: string;
      } | null;
      /**
       * Lon
       * @description Longitude of the location.
       */
      lon: number;
      /**
       * Name
       * @description Name of the location.
       */
      name: string;
      /**
       * State
       * @description State or region name, if available.
       * @default null
       */
      state: string | null;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_GEOCODING_REVERSE tool input.
 */
type OPENWEATHER_API_GET_GEOCODING_REVERSE_INPUT = {
  /**
   * Lat
   * @description Latitude of the location in decimal degrees
   */
  lat?: number;
  /**
   * Limit
   * @description Number of results to return (1 to 5)
   * @default null
   */
  limit: number | null;
  /**
   * Lon
   * @description Longitude of the location in decimal degrees
   */
  lon?: number;
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_GEOCODING_REVERSE tool output.
 */
type OPENWEATHER_API_GET_GEOCODING_REVERSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Country code of the location
       */
      country: string;
      /**
       * Lat
       * @description Latitude of the location
       */
      lat: number;
      /**
       * Local Names
       * @description Dictionary of local names in different languages
       * @default null
       */
      local_names: {
          [key: string]: string | null;
      } | null;
      /**
       * Lon
       * @description Longitude of the location
       */
      lon: number;
      /**
       * Name
       * @description Name of the found location
       */
      name: string;
      /**
       * State
       * @description State, region, or province of the location (if available)
       * @default null
       */
      state: string | null;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_UV_INDEX tool input.
 */
type OPENWEATHER_API_GET_UV_INDEX_INPUT = {
  /**
   * Lat
   * @description Latitude of the location, between -90 and 90
   */
  lat?: number;
  /**
   * Lon
   * @description Longitude of the location, between -180 and 180
   */
  lon?: number;
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_UV_INDEX tool output.
 */
type OPENWEATHER_API_GET_UV_INDEX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date
       * @description Date in Unix UTC seconds
       */
      date: number;
      /**
       * Date Iso
       * @description UTC time in ISO 8601 format
       */
      date_iso: string;
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
       * Value
       * @description UV index value
       */
      value: number;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_UV_INDEX_FORECAST tool input.
 */
type OPENWEATHER_API_GET_UV_INDEX_FORECAST_INPUT = {
  /**
   * Cnt
   * @description Number of days to return (1-8); defaults to 8 if not specified
   * @default null
   */
  cnt: number | null;
  /**
   * Lat
   * @description Latitude of the location, between -90 and 90
   */
  lat?: number;
  /**
   * Lon
   * @description Longitude of the location, between -180 and 180
   */
  lon?: number;
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_UV_INDEX_FORECAST tool output.
 */
type OPENWEATHER_API_GET_UV_INDEX_FORECAST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date
       * @description Date in Unix UTC seconds
       */
      date: number;
      /**
       * Date Iso
       * @description Date and time in ISO 8601 format
       */
      date_iso: string;
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
       * Value
       * @description UV index value
       */
      value: number;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_UV_INDEX_HISTORY tool input.
 */
type OPENWEATHER_API_GET_UV_INDEX_HISTORY_INPUT = {
  /**
   * End
   * @description End UNIX timestamp (UTC seconds); must be >= start
   */
  end?: number;
  /**
   * Lat
   * @description Latitude of the location (range: -90 to 90)
   */
  lat?: number;
  /**
   * Lon
   * @description Longitude of the location (range: -180 to 180)
   */
  lon?: number;
  /**
   * Start
   * @description Start UNIX timestamp (UTC seconds); must be <= end
   */
  start?: number;
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_UV_INDEX_HISTORY tool output.
 */
type OPENWEATHER_API_GET_UV_INDEX_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * List
       * @description List of UV index historical data records
       */
      list: {
          /**
           * Date
           * @description Date and time in UNIX timestamp (UTC)
           */
          date: number;
          /**
           * Date Iso
           * @description Date and time in ISO 8601 format
           */
          date_iso: string;
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
           * Value
           * @description UV index value on the given date
           */
          value: number;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_WEATHER_MAP_TILE tool input.
 */
type OPENWEATHER_API_GET_WEATHER_MAP_TILE_INPUT = {
  /**
   * Color
   * @description Color schema of the tiles, e.g., 'original', 'black'.
   * @default null
   */
  color: string | null;
  /**
   * Fill
   * @description Color for empty-data fill areas (hex or named).
   * @default null
   */
  fill: string | null;
  /**
   * Fill Bound
   * @description Fill tiles outside data coverage if true.
   * @default null
   */
  fill_bound: boolean | null;
  /**
   * Format
   * @description Image format; only 'png' is supported.
   * @default null
   * @constant
   */
  format: "png";
  /**
   * Layer
   * @description Weather layer name. Options: clouds, clouds_new, precipitation, precipitation_new, pressure, pressure_new, wind, wind_new, temp, temp_new.
   * @enum {string}
   */
  layer?: "clouds" | "clouds_new" | "precipitation" | "precipitation_new" | "pressure" | "pressure_new" | "wind" | "wind_new" | "temp" | "temp_new";
  /**
   * Opacity
   * @description Tile opacity value between 0.0 and 1.0.
   * @default null
   */
  opacity: number | null;
  /**
   * Palette
   * @description Custom palette definition (comma-separated or JSON).
   * @default null
   */
  palette: string | null;
  /**
   * Scale
   * @description Tile scale factor: 1 or 2 for retina.
   * @default null
   * @enum {integer|null}
   */
  scale: 1 | 2 | null;
  /**
   * X
   * @description Tile X coordinate (non-negative integer).
   */
  x?: number;
  /**
   * Y
   * @description Tile Y coordinate (non-negative integer).
   */
  y?: number;
  /**
   * Z
   * @description Zoom level of the tile (non-negative integer).
   */
  z?: number;
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_WEATHER_MAP_TILE tool output.
 */
type OPENWEATHER_API_GET_WEATHER_MAP_TILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tile
       * Format: binary
       * @description Binary PNG image data of the map tile.
       */
      tile: string;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_WEATHER_STATIONS tool input.
 */
type OPENWEATHER_API_GET_WEATHER_STATIONS_INPUT = object;

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_WEATHER_STATIONS tool output.
 */
type OPENWEATHER_API_GET_WEATHER_STATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stations
       * @description Array of weather station objects.
       */
      stations: {
          /**
           * Altitude
           * @description Station altitude above sea level.
           */
          altitude: number;
          /**
           * Created At
           * @description ISO8601 datetime of creation.
           */
          created_at: string;
          /**
           * External Id
           * @description User-supplied external reference ID.
           * @default null
           */
          external_id: string | null;
          /**
           * Id
           * @description Station identifier.
           */
          id: string;
          /**
           * Latitude
           * @description Location latitude.
           */
          latitude: number;
          /**
           * Longitude
           * @description Location longitude.
           */
          longitude: number;
          /**
           * Name
           * @description Station name.
           */
          name: string;
          /**
           * Updated At
           * @description ISO8601 datetime of the last update.
           */
          updated_at: string;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_WEATHER_TRIGGERS tool input.
 */
type OPENWEATHER_API_GET_WEATHER_TRIGGERS_INPUT = {
  /**
   * Triggers
   * @description List of weather trigger definitions
   */
  triggers?: {
      /**
       * Condition
       * @description Condition operator: '>', '<', '=', or 'between'
       * @enum {string}
       */
      condition: ">" | "<" | "=" | "between";
      /**
       * Location
       * @description Location details where this trigger applies
       */
      location: {
          /**
           * Lat
           * @description Latitude in degrees, between -90 and 90
           */
          lat: number;
          /**
           * Lon
           * @description Longitude in degrees, between -180 and 180
           */
          lon: number;
      };
      /**
       * Type
       * @description Type of weather trigger, e.g., 'temp', 'rain', 'wind'
       */
      type: string;
      /**
       * Value
       * @description Value for the trigger; for 'between', provide [min, max]
       */
      value: number | null;
  }[];
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_GET_WEATHER_TRIGGERS tool output.
 */
type OPENWEATHER_API_GET_WEATHER_TRIGGERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Triggers
       * @description Results for each trigger operation
       */
      triggers: {
          /**
           * Details
           * @description Additional details or error information for the trigger
           */
          details: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique ID of the trigger
           */
          id: string;
          /**
           * Status
           * @description Trigger operation status, e.g., 'created' or 'error'
           */
          status: string;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_POST_ADD_WEATHER_STATION tool input.
 */
type OPENWEATHER_API_POST_ADD_WEATHER_STATION_INPUT = {
  /**
   * Altitude
   * @description Station altitude in meters above sea level
   */
  altitude?: number;
  /**
   * External Id
   * @description External station ID (your own reference)
   */
  external_id?: string;
  /**
   * Latitude
   * @description Station latitude, range -90 to 90 degrees
   */
  latitude?: number;
  /**
   * Longitude
   * @description Station longitude, range -180 to 180 degrees
   */
  longitude?: number;
  /**
   * Name
   * @description Station name
   */
  name?: string;
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_POST_ADD_WEATHER_STATION tool output.
 */
type OPENWEATHER_API_POST_ADD_WEATHER_STATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Altitude
       * @description Station altitude in meters
       */
      altitude: number;
      /**
       * Created At
       * @description ISO datetime when station was created
       */
      created_at: string;
      /**
       * External Id
       * @description Provided external station ID
       */
      external_id: string;
      /**
       * Id
       * @description Internal OpenWeather station ID
       */
      id: string;
      /**
       * Latitude
       * @description Station latitude
       */
      latitude: number;
      /**
       * Longitude
       * @description Station longitude
       */
      longitude: number;
      /**
       * Name
       * @description Station name
       */
      name: string;
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
 * Type of OPENWEATHER_API's OPENWEATHER_API_UPDATE_WEATHER_STATION tool input.
 */
type OPENWEATHER_API_UPDATE_WEATHER_STATION_INPUT = {
  /**
   * Altitude
   * @description Altitude of the station above sea level in meters
   * @default null
   */
  altitude: number | null;
  /**
   * External Id
   * @description Custom user-provided external identifier for the station
   * @default null
   */
  external_id: string | null;
  /**
   * Latitude
   * @description Latitude of the station in degrees, between -90 and 90
   */
  latitude?: number;
  /**
   * Longitude
   * @description Longitude of the station in degrees, between -180 and 180
   */
  longitude?: number;
  /**
   * Name
   * @description Human-readable name for the station
   * @default null
   */
  name: string | null;
  /**
   * Station Id
   * @description Unique identifier of the weather station to update
   */
  station_id?: string;
};

/**
 * Type of OPENWEATHER_API's OPENWEATHER_API_UPDATE_WEATHER_STATION tool output.
 */
type OPENWEATHER_API_UPDATE_WEATHER_STATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Altitude
       * @description Altitude of the station above sea level in meters
       * @default null
       */
      altitude: number | null;
      /**
       * External Id
       * @description Custom user-provided external identifier
       * @default null
       */
      external_id: string | null;
      /**
       * Id
       * @description Station identifier
       */
      id: string;
      /**
       * Latitude
       * @description Latitude of the station in degrees
       */
      latitude: number;
      /**
       * Longitude
       * @description Longitude of the station in degrees
       */
      longitude: number;
      /**
       * Name
       * @description Station name
       * @default null
       */
      name: string | null;
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
 * Type map of all available tool input types for toolkit "OPENWEATHER_API".
 */
export type OPENWEATHER_API_TOOL_INPUTS = {
  DELETE_WEATHER_STATION: OPENWEATHER_API_DELETE_WEATHER_STATION_INPUT
  GET5_DAY_FORECAST: OPENWEATHER_API_GET5_DAY_FORECAST_INPUT
  GET_AIR_POLLUTION_CURRENT: OPENWEATHER_API_GET_AIR_POLLUTION_CURRENT_INPUT
  GET_AIR_POLLUTION_FORECAST: OPENWEATHER_API_GET_AIR_POLLUTION_FORECAST_INPUT
  GET_AIR_POLLUTION_HISTORY: OPENWEATHER_API_GET_AIR_POLLUTION_HISTORY_INPUT
  GET_CIRCLE_CITY_WEATHER: OPENWEATHER_API_GET_CIRCLE_CITY_WEATHER_INPUT
  GET_CURRENT_WEATHER: OPENWEATHER_API_GET_CURRENT_WEATHER_INPUT
  GET_GEOCODING_DIRECT: OPENWEATHER_API_GET_GEOCODING_DIRECT_INPUT
  GET_GEOCODING_REVERSE: OPENWEATHER_API_GET_GEOCODING_REVERSE_INPUT
  GET_UV_INDEX: OPENWEATHER_API_GET_UV_INDEX_INPUT
  GET_UV_INDEX_FORECAST: OPENWEATHER_API_GET_UV_INDEX_FORECAST_INPUT
  GET_UV_INDEX_HISTORY: OPENWEATHER_API_GET_UV_INDEX_HISTORY_INPUT
  GET_WEATHER_MAP_TILE: OPENWEATHER_API_GET_WEATHER_MAP_TILE_INPUT
  GET_WEATHER_STATIONS: OPENWEATHER_API_GET_WEATHER_STATIONS_INPUT
  GET_WEATHER_TRIGGERS: OPENWEATHER_API_GET_WEATHER_TRIGGERS_INPUT
  POST_ADD_WEATHER_STATION: OPENWEATHER_API_POST_ADD_WEATHER_STATION_INPUT
  UPDATE_WEATHER_STATION: OPENWEATHER_API_UPDATE_WEATHER_STATION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "OPENWEATHER_API".
 */
export type OPENWEATHER_API_TOOL_OUTPUTS = {
  DELETE_WEATHER_STATION: OPENWEATHER_API_DELETE_WEATHER_STATION_OUTPUT
  GET5_DAY_FORECAST: OPENWEATHER_API_GET5_DAY_FORECAST_OUTPUT
  GET_AIR_POLLUTION_CURRENT: OPENWEATHER_API_GET_AIR_POLLUTION_CURRENT_OUTPUT
  GET_AIR_POLLUTION_FORECAST: OPENWEATHER_API_GET_AIR_POLLUTION_FORECAST_OUTPUT
  GET_AIR_POLLUTION_HISTORY: OPENWEATHER_API_GET_AIR_POLLUTION_HISTORY_OUTPUT
  GET_CIRCLE_CITY_WEATHER: OPENWEATHER_API_GET_CIRCLE_CITY_WEATHER_OUTPUT
  GET_CURRENT_WEATHER: OPENWEATHER_API_GET_CURRENT_WEATHER_OUTPUT
  GET_GEOCODING_DIRECT: OPENWEATHER_API_GET_GEOCODING_DIRECT_OUTPUT
  GET_GEOCODING_REVERSE: OPENWEATHER_API_GET_GEOCODING_REVERSE_OUTPUT
  GET_UV_INDEX: OPENWEATHER_API_GET_UV_INDEX_OUTPUT
  GET_UV_INDEX_FORECAST: OPENWEATHER_API_GET_UV_INDEX_FORECAST_OUTPUT
  GET_UV_INDEX_HISTORY: OPENWEATHER_API_GET_UV_INDEX_HISTORY_OUTPUT
  GET_WEATHER_MAP_TILE: OPENWEATHER_API_GET_WEATHER_MAP_TILE_OUTPUT
  GET_WEATHER_STATIONS: OPENWEATHER_API_GET_WEATHER_STATIONS_OUTPUT
  GET_WEATHER_TRIGGERS: OPENWEATHER_API_GET_WEATHER_TRIGGERS_OUTPUT
  POST_ADD_WEATHER_STATION: OPENWEATHER_API_POST_ADD_WEATHER_STATION_OUTPUT
  UPDATE_WEATHER_STATION: OPENWEATHER_API_UPDATE_WEATHER_STATION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's OPENWEATHER_API toolkit.
 */
export const OPENWEATHER_API = {
  slug: "openweather_api",
  tools: {
    /**
     * Tool to delete a registered weather station. use after identifying a station to remove. returns confirmation message upon success.
     */
    DELETE_WEATHER_STATION: "OPENWEATHER_API_DELETE_WEATHER_STATION",
    /**
     * Tool to get a 5-day forecast every 3 hours. use after specifying location.
     */
    GET5_DAY_FORECAST: "OPENWEATHER_API_GET5_DAY_FORECAST",
    /**
     * Tool to fetch current air pollution data for a location. use when you need real-time air quality details by latitude and longitude.
     */
    GET_AIR_POLLUTION_CURRENT: "OPENWEATHER_API_GET_AIR_POLLUTION_CURRENT",
    /**
     * Tool to get forecasted air pollution data for a specific location. use after confirming latitude and longitude.
     */
    GET_AIR_POLLUTION_FORECAST: "OPENWEATHER_API_GET_AIR_POLLUTION_FORECAST",
    /**
     * Tool to retrieve historical air pollution data. use when you need past air quality levels for a specific latitude/longitude and time range.
     */
    GET_AIR_POLLUTION_HISTORY: "OPENWEATHER_API_GET_AIR_POLLUTION_HISTORY",
    /**
     * Tool to search for current weather data in cities around a geographic point. use when you need to fetch weather within a radius circle after confirming latitude and longitude.
     */
    GET_CIRCLE_CITY_WEATHER: "OPENWEATHER_API_GET_CIRCLE_CITY_WEATHER",
    /**
     * Tool to retrieve current weather data for a location. use when you need up-to-the-minute weather info.
     */
    GET_CURRENT_WEATHER: "OPENWEATHER_API_GET_CURRENT_WEATHER",
    /**
     * Tool to convert a location name into geographic coordinates. use when you need latitude and longitude for a given location after confirming the precise name.
     */
    GET_GEOCODING_DIRECT: "OPENWEATHER_API_GET_GEOCODING_DIRECT",
    /**
     * Tool to convert geographic coordinates into a location name. use when you need city, state, and country info from latitude and longitude.
     */
    GET_GEOCODING_REVERSE: "OPENWEATHER_API_GET_GEOCODING_REVERSE",
    /**
     * Tool to retrieve current uv index for a location. use when you need up-to-the-minute uv index by latitude and longitude.
     */
    GET_UV_INDEX: "OPENWEATHER_API_GET_UV_INDEX",
    /**
     * Tool to retrieve uv index forecast for a specific location. use when you need upcoming uv index values after confirming latitude and longitude. returns up to 8 days of data.
     */
    GET_UV_INDEX_FORECAST: "OPENWEATHER_API_GET_UV_INDEX_FORECAST",
    /**
     * Tool to retrieve historical uv index data for a specified location and time range. use when you need to analyze past uv exposure trends after confirming coordinates and time period.
     */
    GET_UV_INDEX_HISTORY: "OPENWEATHER_API_GET_UV_INDEX_HISTORY",
    /**
     * Tool to fetch weather maps 2.0 tile images. use when you need dynamic weather layers at specific zoom and coordinates with advanced styling options.
     */
    GET_WEATHER_MAP_TILE: "OPENWEATHER_API_GET_WEATHER_MAP_TILE",
    /**
     * Tool to list all weather stations added to your account. use after setting up your openweather api key.
     */
    GET_WEATHER_STATIONS: "OPENWEATHER_API_GET_WEATHER_STATIONS",
    /**
     * Tool to retrieve weather triggers for specific conditions. use after defining trigger criteria.
     */
    GET_WEATHER_TRIGGERS: "OPENWEATHER_API_GET_WEATHER_TRIGGERS",
    /**
     * Tool to add a new weather station to your account. use when you need to register a station before sending custom data.
     */
    POST_ADD_WEATHER_STATION: "OPENWEATHER_API_POST_ADD_WEATHER_STATION",
    /**
     * Tool to update weather station details. use when you need to modify the name, location, or external id of an existing station.
     */
    UPDATE_WEATHER_STATION: "OPENWEATHER_API_UPDATE_WEATHER_STATION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "OPENWEATHER_API".
 */
export type OPENWEATHER_API_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "OPENWEATHER_API".
 */
export type OPENWEATHER_API_TRIGGER_EVENTS = {}
