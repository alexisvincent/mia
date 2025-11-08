// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CORRENTLY's CORRENTLY_CO2_METER_UPDATE_READING tool input.
 */
type CORRENTLY_CO2_METER_UPDATE_READING_INPUT = {
  /**
   * Source
   * @description Unique identifier for the CO₂ meter.
   */
  source?: string;
  /**
   * Time
   * @description Unix timestamp of the reading in seconds since epoch. Defaults to current server time if omitted.
   * @default null
   */
  time: number | null;
  /**
   * Value
   * @description New meter reading value (in watt-hours).
   */
  value?: number;
  /**
   * Zip
   * @description German 5-digit postal code indicating the meter's location.
   */
  zip?: unknown;
};

/**
 * Type of CORRENTLY's CORRENTLY_CO2_METER_UPDATE_READING tool output.
 */
type CORRENTLY_CO2_METER_UPDATE_READING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the meter reading entry.
       */
      id: string;
      /**
       * Source
       * @description Unique identifier for the CO₂ meter.
       */
      source: string;
      /**
       * Time
       * @description Unix timestamp of the reading as stored by the server.
       */
      time: number;
      /**
       * Updated
       * @description Indicates whether an existing entry was updated (true) or a new entry was created (false).
       */
      updated: boolean;
      /**
       * Value
       * @description Meter reading value submitted (in watt-hours).
       */
      value: number;
      /**
       * Zip
       * @description ZIP code of the meter location.
       */
      zip: string;
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
 * Type of CORRENTLY's CORRENTLY_PV_GENERATION_GET_FORECAST tool input.
 */
type CORRENTLY_PV_GENERATION_GET_FORECAST_INPUT = {
  /**
   * D
   * @description Number of days to forecast (defaults to 7).
   * @default 7
   */
  d: number | null;
  /**
   * W
   * @description Installed PV capacity in watts.
   */
  w?: number;
  /**
   * Zip
   * @description Five-digit ZIP code of the location for the forecast.
   */
  zip?: unknown;
};

/**
 * Type of CORRENTLY's CORRENTLY_PV_GENERATION_GET_FORECAST tool output.
 */
type CORRENTLY_PV_GENERATION_GET_FORECAST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Forecast
       * @description List of forecast values per time slot
       */
      forecast: {
          /**
           * Ts
           * @description UNIX epoch timestamp in seconds
           */
          ts: number;
          /**
           * Value
           * @description Predicted PV generation in Wh
           */
          value: number;
      }[];
      /**
       * Location
       * @description Location details for the forecast
       */
      location: {
          /**
           * City
           * @description City name
           */
          city: string;
          /**
           * Zip
           * @description ZIP code
           */
          zip: string;
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
 * Type map of all available tool input types for toolkit "CORRENTLY".
 */
export type CORRENTLY_TOOL_INPUTS = {
  CO2_METER_UPDATE_READING: CORRENTLY_CO2_METER_UPDATE_READING_INPUT
  PV_GENERATION_GET_FORECAST: CORRENTLY_PV_GENERATION_GET_FORECAST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CORRENTLY".
 */
export type CORRENTLY_TOOL_OUTPUTS = {
  CO2_METER_UPDATE_READING: CORRENTLY_CO2_METER_UPDATE_READING_OUTPUT
  PV_GENERATION_GET_FORECAST: CORRENTLY_PV_GENERATION_GET_FORECAST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CORRENTLY toolkit.
 */
export const CORRENTLY = {
  slug: "corrently",
  tools: {
    /**
     * Tool to create or update a co₂ meter reading for emissions tracking. use when sending new or updated electricity consumption readings to corrently.
     */
    CO2_METER_UPDATE_READING: "CORRENTLY_CO2_METER_UPDATE_READING",
    /**
     * Tool to get solar energy production forecasts (hourly output and loss estimates) for a specific location. use when you need hourly pv generation data to optimize energy scheduling.
     */
    PV_GENERATION_GET_FORECAST: "CORRENTLY_PV_GENERATION_GET_FORECAST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CORRENTLY".
 */
export type CORRENTLY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CORRENTLY".
 */
export type CORRENTLY_TRIGGER_EVENTS = {}
