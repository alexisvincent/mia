// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AMBEE's AMBEE_AMBEE_GET_AIR_QUALITY_BY_CITY tool input.
 */
type AMBEE_AMBEE_GET_AIR_QUALITY_BY_CITY_INPUT = {
  /**
   * City
   * @description Name of the city to search.
   */
  city?: string;
  /**
   * Limit
   * @description Number of records to return (default is 1).
   * @default 1
   */
  limit: number;
};

/**
 * Type of AMBEE's AMBEE_AMBEE_GET_AIR_QUALITY_BY_CITY tool output.
 */
type AMBEE_AMBEE_GET_AIR_QUALITY_BY_CITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response status message.
       */
      message: string;
      /**
       * Stations
       * @description List of station-level air quality data.
       */
      stations: {
          /**
           * Aqi
           * @description Air Quality Index value.
           */
          AQI: number;
          /**
           * Co
           * @description Carbon monoxide concentration in μg/m³.
           */
          CO: number;
          /**
           * No2
           * @description Nitrogen dioxide concentration in μg/m³.
           */
          NO2: number;
          /**
           * Ozone
           * @description Ozone concentration in μg/m³.
           */
          OZONE: number;
          /**
           * Pm10
           * @description PM10 particulate matter concentration in μg/m³.
           */
          PM10: number;
          /**
           * Pm25
           * @description PM2.5 particulate matter concentration in μg/m³.
           */
          PM25: number;
          /**
           * So2
           * @description Sulfur dioxide concentration in μg/m³.
           */
          SO2: number;
          /**
           * Aqi Info
           * @description Detailed information about the primary pollutant.
           */
          aqiInfo: {
              /**
               * Category
               * @description AQI category or level.
               */
              category: string;
              /**
               * Concentration
               * @description Concentration value of the main pollutant.
               */
              concentration: number;
              /**
               * Pollutant
               * @description Primary pollutant.
               */
              pollutant: string;
          };
          /**
           * City
           * @description City name.
           */
          city: string;
          /**
           * Country Code
           * @description 3-letter country code.
           */
          countryCode: string;
          /**
           * Division
           * @description Administrative division or region.
           */
          division: string;
          /**
           * Lat
           * @description Latitude of the station.
           */
          lat: number;
          /**
           * Lng
           * @description Longitude of the station.
           */
          lng: number;
          /**
           * Place Name
           * @description Name of the monitoring location.
           */
          placeName: string;
          /**
           * Postal Code
           * @description Postal code of the location.
           */
          postalCode: string;
          /**
           * State
           * @description State or province name.
           */
          state: string;
          /**
           * Updated At
           * @description Timestamp when data was last updated in ISO format.
           */
          updatedAt: string;
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
 * Type of AMBEE's AMBEE_AMBEE_GET_AIR_QUALITY_BY_LAT_LNG tool input.
 */
type AMBEE_AMBEE_GET_AIR_QUALITY_BY_LAT_LNG_INPUT = {
  /**
   * Lat
   * @description Latitude of the search location, must be between -90 and 90 degrees
   */
  lat?: number;
  /**
   * Lng
   * @description Longitude of the search location, must be between -180 and 180 degrees
   */
  lng?: number;
};

/**
 * Type of AMBEE's AMBEE_AMBEE_GET_AIR_QUALITY_BY_LAT_LNG tool output.
 */
type AMBEE_AMBEE_GET_AIR_QUALITY_BY_LAT_LNG_OUTPUT = {
  /**
   * Data
   * @description List of air quality measurements for the given coordinates
   */
  data?: {
      /**
       * Aqi
       * @description Air Quality Index value (US EPA standard)
       */
      AQI: number;
      /**
       * Co
       * @description Carbon Monoxide level in ppm
       */
      CO: number;
      /**
       * No2
       * @description Nitrogen Dioxide level in ppm
       */
      NO2: number;
      /**
       * Ozone
       * @description Ozone level in ppm
       */
      OZONE: number;
      /**
       * Pm10
       * @description Particulate Matter 10 concentration in µg/m³
       */
      PM10: number;
      /**
       * Pm25
       * @description Particulate Matter 2.5 concentration in µg/m³
       */
      PM25: number;
      /**
       * So2
       * @description Sulfur Dioxide level in ppm
       */
      SO2: number;
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
      /**
       * Pollen Level
       * @description Optional pollen level index, if available
       * @default null
       */
      pollenLevel: number | null;
      /**
       * Time
       * @description Timestamp of the reading in ISO 8601 format
       */
      time: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Response message from Ambee API
   * @default null
   */
  message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AMBEE's AMBEE_AMBEE_GET_AIR_QUALITY_FORECAST_BY_LAT_LNG tool input.
 */
type AMBEE_AMBEE_GET_AIR_QUALITY_FORECAST_BY_LAT_LNG_INPUT = {
  /**
   * Lat
   * @description Latitude of the search location. Must be between -90 and 90 degrees.
   */
  lat?: number;
  /**
   * Lng
   * @description Longitude of the search location. Must be between -180 and 180 degrees.
   */
  lng?: number;
};

/**
 * Type of AMBEE's AMBEE_AMBEE_GET_AIR_QUALITY_FORECAST_BY_LAT_LNG tool output.
 */
type AMBEE_AMBEE_GET_AIR_QUALITY_FORECAST_BY_LAT_LNG_OUTPUT = {
  /**
   * Data
   * @description List of air quality forecast measurements for the given coordinates
   */
  data?: {
      /**
       * Aqi
       * @description Air Quality Index value (US EPA standard)
       */
      AQI: number;
      /**
       * Co
       * @description Carbon Monoxide level in ppm
       */
      CO: number;
      /**
       * No2
       * @description Nitrogen Dioxide level in ppm
       */
      NO2: number;
      /**
       * Ozone
       * @description Ozone level in ppm
       */
      OZONE: number;
      /**
       * Pm10
       * @description Particulate Matter 10 concentration in µg/m³
       */
      PM10: number;
      /**
       * Pm25
       * @description Particulate Matter 2.5 concentration in µg/m³
       */
      PM25: number;
      /**
       * So2
       * @description Sulfur Dioxide level in ppm
       */
      SO2: number;
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
      /**
       * Time
       * @description Timestamp of the forecast reading in ISO 8601 format
       */
      time: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Response message from Ambee API
   * @default null
   */
  message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AMBEE's AMBEE_AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE tool input.
 */
type AMBEE_AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE_INPUT = {
  /**
   * Place
   * @description Name of the location to be searched, e.g., 'Leon, Mexico'
   */
  place?: string;
};

/**
 * Type of AMBEE's AMBEE_AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE tool output.
 */
type AMBEE_AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE_OUTPUT = {
  /**
   * Data
   * @description List of weekly wildfire risk forecast entries
   */
  data?: {
      /**
       * Created Time
       * @description Timestamp of when this forecast entry was generated, in ISO 8601 format
       */
      created_time: string;
      /**
       * Days Since Last Fire
       * @description Days since the last detected fire event
       */
      days_since_last_fire: number;
      /**
       * Ffmc Today
       * @description Fine Fuel Moisture Code for today
       */
      ffmc_today: number;
      /**
       * Fwi Today
       * @description Fire Weather Index value for today
       */
      fwi_today: number;
      /**
       * Precipitation
       * @description Forecasted precipitation in mm
       */
      precipitation: number;
      /**
       * Predicted Risk
       * @description Numeric risk level prediction
       */
      predicted_risk: number;
      /**
       * Predicted Risk Category
       * @description Categorical risk level (e.g., low, moderate, high, extreme)
       */
      predicted_risk_category: string;
      /**
       * Temperature
       * @description Forecasted temperature in Celsius
       */
      temperature: number;
      /**
       * Week
       * @description ISO week number for the forecast period
       */
      week: number;
      /**
       * Weekly Seasonality
       * @description Weekly seasonality factor influencing fire risk
       */
      weekly_seasonality: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Status message indicating success or failure of the request
   */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AMBEE's AMBEE_GEOCODE_BY_PLACE tool input.
 */
type AMBEE_GEOCODE_BY_PLACE_INPUT = {
  /**
   * Place
   * @description Name of the location to be searched.
   */
  place?: string;
};

/**
 * Type of AMBEE's AMBEE_GEOCODE_BY_PLACE tool output.
 */
type AMBEE_GEOCODE_BY_PLACE_OUTPUT = {
  /**
   * Data
   * @description List of geocoded entries with coordinates and formatted address.
   */
  data?: {
      /**
       * Formatted Address
       * @description Formatted address of the location.
       */
      formatted_address: string;
      /**
       * Latitude
       * @description Latitude of the location.
       */
      latitude: number;
      /**
       * Longitude
       * @description Longitude of the location.
       */
      longitude: number;
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
 * Type of AMBEE's AMBEE_GET_AIR_QUALITY_BY_CITY tool input.
 */
type AMBEE_GET_AIR_QUALITY_BY_CITY_INPUT = {
  /**
   * City
   * @description Name of the city to search.
   */
  city?: string;
  /**
   * Limit
   * @description Number of records to return. Must be >=1. Defaults to 1.
   * @default 1
   */
  limit: number;
};

/**
 * Type of AMBEE's AMBEE_GET_AIR_QUALITY_BY_CITY tool output.
 */
type AMBEE_GET_AIR_QUALITY_BY_CITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response status message.
       */
      message: string;
      /**
       * Stations
       * @description List of station-level air quality data.
       */
      stations: {
          /**
           * Aqi
           * @description Air Quality Index value.
           */
          AQI: number;
          /**
           * Co
           * @description Carbon monoxide concentration in μg/m³.
           */
          CO: number;
          /**
           * No2
           * @description Nitrogen dioxide concentration in μg/m³.
           */
          NO2: number;
          /**
           * Ozone
           * @description Ozone concentration in μg/m³.
           */
          OZONE: number;
          /**
           * Pm10
           * @description PM10 concentration in μg/m³.
           */
          PM10: number;
          /**
           * Pm25
           * @description PM2.5 concentration in μg/m³.
           */
          PM25: number;
          /**
           * So2
           * @description Sulfur dioxide concentration in μg/m³.
           */
          SO2: number;
          /**
           * Aqi Info
           * @description Detailed AQI information.
           */
          aqiInfo: {
              /**
               * Category
               * @description AQI category.
               */
              category: string;
              /**
               * Concentration
               * @description Concentration of the primary pollutant.
               */
              concentration: number;
              /**
               * Pollutant
               * @description Primary pollutant.
               */
              pollutant: string;
          };
          /**
           * City
           * @description City name.
           */
          city: string;
          /**
           * Country Code
           * @description 3-letter ISO country code.
           */
          countryCode: string;
          /**
           * Division
           * @description Administrative division.
           */
          division: string;
          /**
           * Lat
           * @description Latitude of the station.
           */
          lat: number;
          /**
           * Lng
           * @description Longitude of the station.
           */
          lng: number;
          /**
           * Place Name
           * @description Name of the monitoring location.
           */
          placeName: string;
          /**
           * Postal Code
           * @description Postal code of the location.
           */
          postalCode: string;
          /**
           * State
           * @description State or province.
           */
          state: string;
          /**
           * Updated At
           * @description ISO timestamp when data was last updated.
           */
          updatedAt: string;
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
 * Type of AMBEE's AMBEE_GET_AIR_QUALITY_BY_COUNTRY_CODE tool input.
 */
type AMBEE_GET_AIR_QUALITY_BY_COUNTRY_CODE_INPUT = {
  /**
   * Country Code
   * @description 3-letter ISO country code. E.g., 'GBR', 'USA', 'IND'.
   */
  countryCode?: string;
  /**
   * Limit
   * @description Number of records to return. Must be >=1. Defaults to 1.
   * @default 1
   */
  limit: number;
};

/**
 * Type of AMBEE's AMBEE_GET_AIR_QUALITY_BY_COUNTRY_CODE tool output.
 */
type AMBEE_GET_AIR_QUALITY_BY_COUNTRY_CODE_OUTPUT = {
  /**
   * Data
   * @description Complete JSON response returned by the Ambee API
   */
  data?: {
      [key: string]: unknown;
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
 * Type of AMBEE's AMBEE_GET_AIR_QUALITY_BY_LAT_LNG tool input.
 */
type AMBEE_GET_AIR_QUALITY_BY_LAT_LNG_INPUT = {
  /**
   * Lat
   * @description Latitude of the search location. Must be between -90 and 90 degrees.
   */
  lat?: number;
  /**
   * Lng
   * @description Longitude of the search location. Must be between -180 and 180 degrees.
   */
  lng?: number;
};

/**
 * Type of AMBEE's AMBEE_GET_AIR_QUALITY_BY_LAT_LNG tool output.
 */
type AMBEE_GET_AIR_QUALITY_BY_LAT_LNG_OUTPUT = {
  /**
   * Data
   * @description List of air quality measurements for the given coordinates
   */
  data?: {
      /**
       * Aqi
       * @description Air Quality Index value (US EPA standard)
       */
      AQI: number;
      /**
       * Co
       * @description Carbon Monoxide level in ppm
       */
      CO: number;
      /**
       * No2
       * @description Nitrogen Dioxide level in ppm
       */
      NO2: number;
      /**
       * Ozone
       * @description Ozone level in ppm
       */
      OZONE: number;
      /**
       * Pm10
       * @description Particulate Matter 10 concentration in µg/m³
       */
      PM10: number;
      /**
       * Pm25
       * @description Particulate Matter 2.5 concentration in µg/m³
       */
      PM25: number;
      /**
       * So2
       * @description Sulfur Dioxide level in ppm
       */
      SO2: number;
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
      /**
       * Pollen Level
       * @description Pollen level index, if available
       * @default null
       */
      pollenLevel: number | null;
      /**
       * Time
       * @description Timestamp of the reading in ISO 8601 format
       */
      time: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Response message from Ambee API
   * @default null
   */
  message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AMBEE's AMBEE_GET_AIR_QUALITY_BY_POSTAL_CODE tool input.
 */
type AMBEE_GET_AIR_QUALITY_BY_POSTAL_CODE_INPUT = {
  /**
   * Country Code
   * @description 3-letter ISO country code (e.g., 'IND').
   */
  countryCode?: string;
  /**
   * Postal Code
   * @description Postal code of the place to search.
   */
  postalCode?: string;
};

/**
 * Type of AMBEE's AMBEE_GET_AIR_QUALITY_BY_POSTAL_CODE tool output.
 */
type AMBEE_GET_AIR_QUALITY_BY_POSTAL_CODE_OUTPUT = {
  /**
   * Data
   * @description List of air quality data records for the requested postal code.
   */
  data?: {
      /**
       * Aqi
       * @description Air Quality Index value.
       */
      AQI: number;
      /**
       * Co
       * @description Carbon monoxide concentration in µg/m³.
       */
      CO: number;
      /**
       * No2
       * @description Nitrogen dioxide concentration in µg/m³.
       */
      NO2: number;
      /**
       * Ozone
       * @description Ozone concentration in µg/m³.
       */
      OZONE: number;
      /**
       * Pm10
       * @description Particulate matter (10 µm) concentration in µg/m³.
       */
      PM10: number;
      /**
       * Pm25
       * @description Particulate matter (2.5 µm) concentration in µg/m³.
       */
      PM25: number;
      /**
       * So2
       * @description Sulfur dioxide concentration in µg/m³.
       */
      SO2: number;
      /**
       * City
       * @description City name.
       */
      city: string;
      /**
       * Country Code
       * @description 3-letter ISO country code.
       */
      countryCode: string;
      /**
       * Division
       * @description Administrative division.
       */
      division: string;
      /**
       * Lat
       * @description Latitude of the location.
       */
      lat: number;
      /**
       * Lng
       * @description Longitude of the location.
       */
      lng: number;
      /**
       * Place Name
       * @description Name of the place.
       */
      placeName: string;
      /**
       * Postal Code
       * @description Postal code.
       */
      postalCode: string;
      /**
       * State
       * @description State name.
       */
      state: string;
      /**
       * Updated At
       * @description Timestamp of the last update in ISO 8601 format.
       */
      updatedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Status message from Ambee API.
   */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AMBEE's AMBEE_GET_DISASTERS_BY_CONTINENT_LATEST tool input.
 */
type AMBEE_GET_DISASTERS_BY_CONTINENT_LATEST_INPUT = {
  /**
   * Continent
   * @description Three-letter continent code (e.g., NAR for North America)
   * @enum {string}
   */
  continent?: "AFR" | "ANT" | "ASI" | "EUR" | "NAR" | "SAR" | "OCE";
  /**
   * Event Type
   * @description Optional disaster event type code to filter results
   * @default null
   * @enum {string|null}
   */
  eventType: "TN" | "EQ" | "TC" | "WF" | "FL" | "ET" | "DR" | "SW" | "SI" | "VO" | "LS" | "Misc" | null;
  /**
   * Limit
   * @description Number of results per page
   * @default 10
   */
  limit: number;
  /**
   * Page
   * @description Page number to retrieve
   * @default 1
   */
  page: number;
};

/**
 * Type of AMBEE's AMBEE_GET_DISASTERS_BY_CONTINENT_LATEST tool output.
 */
type AMBEE_GET_DISASTERS_BY_CONTINENT_LATEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Has Next Page
       * @description Indicates if more pages are available
       */
      hasNextPage: boolean;
      /**
       * Limit
       * @description Number of results per page returned
       */
      limit: number;
      /**
       * Message
       * @description Status message from the API
       */
      message: string;
      /**
       * Page
       * @description Current page number
       */
      page: number;
      /**
       * Result
       * @description List of disaster events
       */
      result: {
          /**
           * Continent
           * @description Continent where the event occurred
           */
          continent: string;
          /**
           * Created Time
           * @description Timestamp when the event was recorded in the system
           */
          created_time: string;
          /**
           * Date
           * @description Date and time when the event occurred
           */
          date: string;
          /**
           * Default Alert Levels
           * @description Default alert levels for the event
           * @default null
           */
          default_alert_levels: string | null;
          /**
           * Event Id
           * @description Unique internal event identifier
           */
          event_id: string;
          /**
           * Event Name
           * @description Name or identifier of the disaster event
           */
          event_name: string;
          /**
           * Event Type
           * @description Type of disaster event (e.g., EQ for Earthquake)
           */
          event_type: string;
          /**
           * Lat
           * @description Latitude of the event location
           */
          lat: number;
          /**
           * Lng
           * @description Longitude of the event location
           */
          lng: number;
          /**
           * Proximity Severity Level
           * @description Proximity severity level of the event
           * @default null
           */
          proximity_severity_level: string | null;
          /**
           * Source Event Id
           * @description Unique identifier of the event from the source data
           */
          source_event_id: string;
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
 * Type of AMBEE's AMBEE_GET_ELEVATION_BY_LAT_LNG tool input.
 */
type AMBEE_GET_ELEVATION_BY_LAT_LNG_INPUT = {
  /**
   * Lat
   * @description Latitude of the search location. Must be between -90 and 90 degrees.
   */
  lat?: number;
  /**
   * Lng
   * @description Longitude of the search location. Must be between -180 and 180 degrees.
   */
  lng?: number;
};

/**
 * Type of AMBEE's AMBEE_GET_ELEVATION_BY_LAT_LNG tool output.
 */
type AMBEE_GET_ELEVATION_BY_LAT_LNG_OUTPUT = {
  /**
   * Data
   * @description Elevation statistics for the requested location.
   */
  data?: {
      /**
       * Location
       * @description Queried geographic coordinates.
       */
      location: {
          /**
           * Lat
           * @description Latitude of the queried location.
           */
          lat: number;
          /**
           * Lng
           * @description Longitude of the queried location.
           */
          lng: number;
      };
      /**
       * Max
       * @description Maximum elevation value in meters.
       */
      max: number;
      /**
       * Mean
       * @description Mean elevation value in meters.
       */
      mean: number;
      /**
       * Min
       * @description Minimum elevation value in meters.
       */
      min: number;
      /**
       * Resolution
       * @description Spatial resolution of the elevation data in meters.
       */
      resolution: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status indicating success or failure.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AMBEE's AMBEE_GET_ELEVATION_BY_PLACE tool input.
 */
type AMBEE_GET_ELEVATION_BY_PLACE_INPUT = {
  /**
   * Place
   * @description Name of the location to be searched.
   */
  place?: string;
};

/**
 * Type of AMBEE's AMBEE_GET_ELEVATION_BY_PLACE tool output.
 */
type AMBEE_GET_ELEVATION_BY_PLACE_OUTPUT = {
  /**
   * Data
   * @description Elevation information for the queried place.
   */
  data?: {
      /**
       * Elevation
       * @description Elevation (altitude) in meters above sea level for the specified place.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AMBEE's AMBEE_GET_ILI_FORECAST_BY_LAT_LNG tool input.
 */
type AMBEE_GET_ILI_FORECAST_BY_LAT_LNG_INPUT = {
  /**
   * Details
   * @description If true, includes a 28-day daily forecast of pollen and weather data alongside the 30-day ILI risk. Default is False.
   * @default false
   */
  details: boolean;
  /**
   * Lat
   * @description Latitude of the search location, must be between -90 and 90 degrees
   */
  lat?: number;
  /**
   * Lng
   * @description Longitude of the search location, must be between -180 and 180 degrees
   */
  lng?: number;
};

/**
 * Type of AMBEE's AMBEE_GET_ILI_FORECAST_BY_LAT_LNG tool output.
 */
type AMBEE_GET_ILI_FORECAST_BY_LAT_LNG_OUTPUT = {
  /**
   * Data
   * @description List of daily ILI forecast entries for the given coordinates
   */
  data?: {
      /**
       * Created At
       * @description Forecast timestamp in ISO format, e.g., YYYY-MM-DDThh:mm:ssZ
       */
      createdAt: string;
      /**
       * Ili Risk
       * @description Predicted Influenza-like Illness (ILI) risk level, e.g., 'Minimal','Low','Moderate','High'
       */
      ili_risk: string;
      /**
       * Lat
       * @description Latitude of the forecast location
       */
      lat: number;
      /**
       * Lng
       * @description Longitude of the forecast location
       */
      lng: number;
      /**
       * PollenData
       * @description Pollen forecast data (tree, grass, weed counts) - included when details=true
       * @default null
       */
      pollen: {
          /**
           * Grass
           * @description Grass pollen count
           */
          grass: number;
          /**
           * Tree
           * @description Tree pollen count
           */
          tree: number;
          /**
           * Weed
           * @description Weed pollen count
           */
          weed: number;
      } | null;
      /**
       * WeatherData
       * @description Weather forecast data (temperature, humidity, windSpeed) - included when details=true
       * @default null
       */
      weather: {
          /**
           * Humidity
           * @description Relative humidity in percentage
           */
          humidity: number;
          /**
           * Temperature
           * @description Temperature in Celsius
           */
          temperature: number;
          /**
           * Wind Speed
           * @description Wind speed in meters per second
           */
          windSpeed: number;
      } | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Response status message from Ambee API
   * @default null
   */
  message: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AMBEE's AMBEE_GET_WILDFIRE_BY_LAT_LNG tool input.
 */
type AMBEE_GET_WILDFIRE_BY_LAT_LNG_INPUT = {
  /**
   * Lat
   * @description Latitude of the search location, must be between -90 and 90 degrees
   */
  lat?: number;
  /**
   * Lng
   * @description Longitude of the search location, must be between -180 and 180 degrees
   */
  lng?: number;
  /**
   * Type
   * @description Optional filter for type of fire: 'reported' or 'detected'
   * @default null
   * @enum {string|null}
   */
  type: "reported" | "detected" | null;
};

/**
 * Type of AMBEE's AMBEE_GET_WILDFIRE_BY_LAT_LNG tool output.
 */
type AMBEE_GET_WILDFIRE_BY_LAT_LNG_OUTPUT = {
  /** Data */
  data?: {
      /**
       * Area Burnt
       * @description Area burnt in square kilometers if available
       * @default null
       */
      areaBurnt: number | null;
      /**
       * Confidence
       * @description Confidence level of detection if available
       * @default null
       */
      confidence: string | null;
      /**
       * Detected At
       * @description Timestamp of detection in ISO 8601 format
       */
      detectedAt: string;
      /**
       * Fire Category
       * @description Fire category code
       */
      fireCategory: string;
      /**
       * Fire Name
       * @description Name of the fire event if available
       * @default null
       */
      fireName: string | null;
      /**
       * Fire Type
       * @description Type of fire detection: 'reported' or 'detected'
       */
      fireType: string;
      /**
       * Frp
       * @description Fire Radiative Power if available
       * @default null
       */
      frp: number | null;
      /**
       * Fwi
       * @description Fire Weather Index if available
       * @default null
       */
      fwi: number | null;
      /**
       * Lat
       * @description Latitude of wildfire location
       */
      lat: number;
      /**
       * Lng
       * @description Longitude of wildfire location
       */
      lng: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Http Code
   * @description HTTP status code returned by the API
   * @default null
   */
  httpCode: number | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Successfull
   * @description Indicates if the API call was successful
   */
  successfull?: boolean;
};

/**
 * Type of AMBEE's AMBEE_GET_WILDFIRE_BY_PLACE tool input.
 */
type AMBEE_GET_WILDFIRE_BY_PLACE_INPUT = {
  /**
   * Place
   * @description Name of the location to be searched, e.g., 'San Francisco, CA'
   */
  place?: string;
  /**
   * Type
   * @description Optional filter for type of fire: 'reported' or 'detected'
   * @default null
   * @enum {string|null}
   */
  type: "reported" | "detected" | null;
};

/**
 * Type of AMBEE's AMBEE_GET_WILDFIRE_BY_PLACE tool output.
 */
type AMBEE_GET_WILDFIRE_BY_PLACE_OUTPUT = {
  /**
   * Data
   * @description Wrapper for the nested 'data' field in API response.
   */
  data?: {
      /**
       * Data
       * @description List of wildfire incident records
       */
      data: {
          /**
           * Area Burnt
           * @description Area burnt in square kilometers if available
           * @default null
           */
          areaBurnt: number | null;
          /**
           * Confidence
           * @description Confidence level of detection if available
           * @default null
           */
          confidence: string | null;
          /**
           * Detected At
           * @description Timestamp of detection in ISO 8601 format
           */
          detectedAt: string;
          /**
           * Fire Category
           * @description Fire category code
           */
          fireCategory: string;
          /**
           * Fire Name
           * @description Name of the fire event if available
           * @default null
           */
          fireName: string | null;
          /**
           * Fire Type
           * @description Type of fire detection: 'reported' or 'detected'
           */
          fireType: string;
          /**
           * Frp
           * @description Fire Radiative Power if available
           * @default null
           */
          frp: number | null;
          /**
           * Fwi
           * @description Fire Weather Index if available
           * @default null
           */
          fwi: number | null;
          /**
           * Lat
           * @description Latitude of wildfire location
           */
          lat: number;
          /**
           * Lng
           * @description Longitude of wildfire location
           */
          lng: number;
          /**
           * Modified At
           * @description Timestamp of last modification if available
           * @default null
           */
          modifiedAt: string | null;
      }[];
      /**
       * Message
       * @description API response message, e.g., 'success'
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
   * Http Code
   * @description HTTP status code returned by the API
   * @default null
   */
  httpCode: number | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Successfull
   * @description Indicates if the API call was successful
   */
  successfull?: boolean;
};

/**
 * Type of AMBEE's AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE tool input.
 */
type AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE_INPUT = {
  /**
   * Place
   * @description Name of the location to be searched, e.g., 'Leon, Mexico'
   */
  place?: string;
};

/**
 * Type of AMBEE's AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE tool output.
 */
type AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE_OUTPUT = {
  /**
   * Data
   * @description List of weekly wildfire risk forecast entries
   */
  data?: {
      /**
       * Created Time
       * @description Timestamp of when this forecast entry was generated, in ISO 8601 format
       */
      created_time: string;
      /**
       * Days Since Last Fire
       * @description Days since the last detected fire event
       */
      days_since_last_fire: number;
      /**
       * Ffmc Today
       * @description Fine Fuel Moisture Code for today
       */
      ffmc_today: number;
      /**
       * Fwi Today
       * @description Fire Weather Index value for today
       */
      fwi_today: number;
      /**
       * Precipitation
       * @description Forecasted precipitation in mm
       */
      precipitation: number;
      /**
       * Predicted Risk
       * @description Numeric risk level prediction
       */
      predicted_risk: number;
      /**
       * Predicted Risk Category
       * @description Categorical risk level (e.g., low, moderate, high, extreme)
       */
      predicted_risk_category: string;
      /**
       * Temperature
       * @description Forecasted temperature in Celsius
       */
      temperature: number;
      /**
       * Week
       * @description ISO week number for the forecast period
       */
      week: number;
      /**
       * Weekly Seasonality
       * @description Weekly seasonality factor influencing fire risk
       */
      weekly_seasonality: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Status message indicating success or failure of the request
   */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "AMBEE".
 */
export type AMBEE_TOOL_INPUTS = {
  AMBEE_GET_AIR_QUALITY_BY_CITY: AMBEE_AMBEE_GET_AIR_QUALITY_BY_CITY_INPUT
  AMBEE_GET_AIR_QUALITY_BY_LAT_LNG: AMBEE_AMBEE_GET_AIR_QUALITY_BY_LAT_LNG_INPUT
  AMBEE_GET_AIR_QUALITY_FORECAST_BY_LAT_LNG: AMBEE_AMBEE_GET_AIR_QUALITY_FORECAST_BY_LAT_LNG_INPUT
  AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE: AMBEE_AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE_INPUT
  GEOCODE_BY_PLACE: AMBEE_GEOCODE_BY_PLACE_INPUT
  GET_AIR_QUALITY_BY_CITY: AMBEE_GET_AIR_QUALITY_BY_CITY_INPUT
  GET_AIR_QUALITY_BY_COUNTRY_CODE: AMBEE_GET_AIR_QUALITY_BY_COUNTRY_CODE_INPUT
  GET_AIR_QUALITY_BY_LAT_LNG: AMBEE_GET_AIR_QUALITY_BY_LAT_LNG_INPUT
  GET_AIR_QUALITY_BY_POSTAL_CODE: AMBEE_GET_AIR_QUALITY_BY_POSTAL_CODE_INPUT
  GET_DISASTERS_BY_CONTINENT_LATEST: AMBEE_GET_DISASTERS_BY_CONTINENT_LATEST_INPUT
  GET_ELEVATION_BY_LAT_LNG: AMBEE_GET_ELEVATION_BY_LAT_LNG_INPUT
  GET_ELEVATION_BY_PLACE: AMBEE_GET_ELEVATION_BY_PLACE_INPUT
  GET_ILI_FORECAST_BY_LAT_LNG: AMBEE_GET_ILI_FORECAST_BY_LAT_LNG_INPUT
  GET_WILDFIRE_BY_LAT_LNG: AMBEE_GET_WILDFIRE_BY_LAT_LNG_INPUT
  GET_WILDFIRE_BY_PLACE: AMBEE_GET_WILDFIRE_BY_PLACE_INPUT
  GET_WILDFIRE_RISK_FORECAST_BY_PLACE: AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AMBEE".
 */
export type AMBEE_TOOL_OUTPUTS = {
  AMBEE_GET_AIR_QUALITY_BY_CITY: AMBEE_AMBEE_GET_AIR_QUALITY_BY_CITY_OUTPUT
  AMBEE_GET_AIR_QUALITY_BY_LAT_LNG: AMBEE_AMBEE_GET_AIR_QUALITY_BY_LAT_LNG_OUTPUT
  AMBEE_GET_AIR_QUALITY_FORECAST_BY_LAT_LNG: AMBEE_AMBEE_GET_AIR_QUALITY_FORECAST_BY_LAT_LNG_OUTPUT
  AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE: AMBEE_AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE_OUTPUT
  GEOCODE_BY_PLACE: AMBEE_GEOCODE_BY_PLACE_OUTPUT
  GET_AIR_QUALITY_BY_CITY: AMBEE_GET_AIR_QUALITY_BY_CITY_OUTPUT
  GET_AIR_QUALITY_BY_COUNTRY_CODE: AMBEE_GET_AIR_QUALITY_BY_COUNTRY_CODE_OUTPUT
  GET_AIR_QUALITY_BY_LAT_LNG: AMBEE_GET_AIR_QUALITY_BY_LAT_LNG_OUTPUT
  GET_AIR_QUALITY_BY_POSTAL_CODE: AMBEE_GET_AIR_QUALITY_BY_POSTAL_CODE_OUTPUT
  GET_DISASTERS_BY_CONTINENT_LATEST: AMBEE_GET_DISASTERS_BY_CONTINENT_LATEST_OUTPUT
  GET_ELEVATION_BY_LAT_LNG: AMBEE_GET_ELEVATION_BY_LAT_LNG_OUTPUT
  GET_ELEVATION_BY_PLACE: AMBEE_GET_ELEVATION_BY_PLACE_OUTPUT
  GET_ILI_FORECAST_BY_LAT_LNG: AMBEE_GET_ILI_FORECAST_BY_LAT_LNG_OUTPUT
  GET_WILDFIRE_BY_LAT_LNG: AMBEE_GET_WILDFIRE_BY_LAT_LNG_OUTPUT
  GET_WILDFIRE_BY_PLACE: AMBEE_GET_WILDFIRE_BY_PLACE_OUTPUT
  GET_WILDFIRE_RISK_FORECAST_BY_PLACE: AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AMBEE toolkit.
 */
export const AMBEE = {
  slug: "ambee",
  tools: {
    /**
     * Tool to retrieve real-time air quality data for a specific city. use when you have a valid city name and need current aqi and pollutant levels.
     */
    AMBEE_GET_AIR_QUALITY_BY_CITY: "AMBEE_AMBEE_GET_AIR_QUALITY_BY_CITY",
    /**
     * Tool to retrieve real-time air quality data for a specific latitude and longitude. use when you need hyper-local air quality readings for given coordinates.
     */
    AMBEE_GET_AIR_QUALITY_BY_LAT_LNG: "AMBEE_AMBEE_GET_AIR_QUALITY_BY_LAT_LNG",
    /**
     * Tool to retrieve air quality forecast for a specific latitude and longitude. use when you need predicted air quality data up to 48 hours in advance based on geographic coordinates.
     */
    AMBEE_GET_AIR_QUALITY_FORECAST_BY_LAT_LNG: "AMBEE_AMBEE_GET_AIR_QUALITY_FORECAST_BY_LAT_LNG",
    /**
     * Tool to retrieve wildfire risk forecast for a specific place. use when you need weekly wildfire risk predictions for a location over the next four weeks.
     */
    AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE: "AMBEE_AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE",
    /**
     * Tool to transform a place name or address into geographic coordinates. use after confirming the location name to get precise latitude and longitude.
     */
    GEOCODE_BY_PLACE: "AMBEE_GEOCODE_BY_PLACE",
    /**
     * Tool to retrieve real-time air quality data for a specific city. use after obtaining a valid city name when current aqi and pollutant levels are needed.
     */
    GET_AIR_QUALITY_BY_CITY: "AMBEE_GET_AIR_QUALITY_BY_CITY",
    /**
     * Tool to retrieve real-time air quality data for a specific country using a 3-letter iso code. use after acquiring the country code and when you want a national overview of air quality.
     */
    GET_AIR_QUALITY_BY_COUNTRY_CODE: "AMBEE_GET_AIR_QUALITY_BY_COUNTRY_CODE",
    /**
     * Tool to retrieve real-time air quality data for a specific latitude and longitude. use when you need hyper-local air quality readings for given coordinates.
     */
    GET_AIR_QUALITY_BY_LAT_LNG: "AMBEE_GET_AIR_QUALITY_BY_LAT_LNG",
    /**
     * Tool to retrieve real-time air quality data for a specific postal code and country. use when you need hyper-local air quality insights by postal code.
     */
    GET_AIR_QUALITY_BY_POSTAL_CODE: "AMBEE_GET_AIR_QUALITY_BY_POSTAL_CODE",
    /**
     * Tool to retrieve latest natural disaster data for a specific continent. use when you need up-to-date disaster information by continent code.
     */
    GET_DISASTERS_BY_CONTINENT_LATEST: "AMBEE_GET_DISASTERS_BY_CONTINENT_LATEST",
    /**
     * Tool to retrieve elevation statistics (min, max, mean) for a specific latitude and longitude. use when you need geospatial elevation data for a location within north america.
     */
    GET_ELEVATION_BY_LAT_LNG: "AMBEE_GET_ELEVATION_BY_LAT_LNG",
    /**
     * Tool to retrieve elevation or altitude data for a specific location by place name. use when you have a textual place name and need its elevation in meters.
     */
    GET_ELEVATION_BY_PLACE: "AMBEE_GET_ELEVATION_BY_PLACE",
    /**
     * Tool to retrieve 30-day forecast of influenza-like illness (ili) risk using latitude and longitude. use when you need daily ili risk levels for a specific location, optionally including pollen and weather details.
     */
    GET_ILI_FORECAST_BY_LAT_LNG: "AMBEE_GET_ILI_FORECAST_BY_LAT_LNG",
    /**
     * Tool to retrieve real-time wildfire data for a specific latitude and longitude. use when detailed geospatial wildfire monitoring is required.
     */
    GET_WILDFIRE_BY_LAT_LNG: "AMBEE_GET_WILDFIRE_BY_LAT_LNG",
    /**
     * Tool to retrieve real-time wildfire data for a specific place. use after confirming the place name.
     */
    GET_WILDFIRE_BY_PLACE: "AMBEE_GET_WILDFIRE_BY_PLACE",
    /**
     * Tool to retrieve wildfire risk forecast for a specific place. use when you need weekly wildfire risk predictions for a location over the next four weeks.
     */
    GET_WILDFIRE_RISK_FORECAST_BY_PLACE: "AMBEE_GET_WILDFIRE_RISK_FORECAST_BY_PLACE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AMBEE".
 */
export type AMBEE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AMBEE".
 */
export type AMBEE_TRIGGER_EVENTS = {}
