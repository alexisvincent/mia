// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WEATHERMAP's WEATHERMAP_WEATHER tool input.
 */
type WEATHERMAP_WEATHER_INPUT = {
  /**
   * Location
   * @description The location for which weather information is requested (e.g., 'London,GB', 'London').You may specify the country code or not. If you get city not found error, try without country code.
   */
  location?: string;
};

/**
 * Type of WEATHERMAP's WEATHERMAP_WEATHER tool output.
 */
type WEATHERMAP_WEATHER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the weather query was successful.
       */
      success: boolean;
      /**
       * Weather Info
       * @description Weather information for the specified location.
       */
      weather_info: {
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
 * Type map of all available tool input types for toolkit "WEATHERMAP".
 */
export type WEATHERMAP_TOOL_INPUTS = {
  WEATHER: WEATHERMAP_WEATHER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WEATHERMAP".
 */
export type WEATHERMAP_TOOL_OUTPUTS = {
  WEATHER: WEATHERMAP_WEATHER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WEATHERMAP toolkit.
 */
export const WEATHERMAP = {
  slug: "weathermap",
  tools: {
    /**
     * Tool for querying the openweathermap api.
     */
    WEATHER: "WEATHERMAP_WEATHER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WEATHERMAP".
 */
export type WEATHERMAP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WEATHERMAP".
 */
export type WEATHERMAP_TRIGGER_EVENTS = {}
