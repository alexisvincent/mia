// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FIXER_IO's FIXER_IO_CONVERT_CURRENCY tool input.
 */
type FIXER_IO_CONVERT_CURRENCY_INPUT = {
  /**
   * Amount
   * @description Amount to convert; must be non-negative
   */
  amount?: number;
  /**
   * Date
   * @description Optional historical date in YYYY-MM-DD format
   * @default null
   */
  date: string | null;
  /**
   * From Currency
   * @description Three-letter currency code to convert from
   */
  from_currency?: string;
  /**
   * To Currency
   * @description Three-letter currency code to convert to
   */
  to_currency?: string;
};

/**
 * Type of FIXER_IO's FIXER_IO_CONVERT_CURRENCY tool output.
 */
type FIXER_IO_CONVERT_CURRENCY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date
       * @description Rate date used for conversion (YYYY-MM-DD)
       */
      date: string;
      /**
       * Historical
       * @description True if historical rates were used
       */
      historical: boolean;
      /**
       * Info
       * @description Rate metadata
       */
      info: {
          /**
           * Rate
           * @description Exchange rate used for conversion
           */
          rate: number;
          /**
           * Timestamp
           * @description Unix timestamp when rate was collected
           */
          timestamp: number;
      };
      /**
       * Query
       * @description Details of the conversion query
       */
      query: {
          /**
           * Amount
           * @description Amount that was converted
           */
          amount: number;
          /**
           * From Currency
           * @description Currency converted from
           */
          from_currency: string;
          /**
           * To Currency
           * @description Currency converted to
           */
          to_currency: string;
      };
      /**
       * Result
       * @description Conversion result amount
       */
      result: number;
      /**
       * Success
       * @description Indicates if the request succeeded
       */
      success: boolean;
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
 * Type of FIXER_IO's FIXER_IO_GET_FLUCTUATION tool input.
 */
type FIXER_IO_GET_FLUCTUATION_INPUT = {
  /**
   * Base
   * @description Optional 3-letter base currency code (default: EUR).
   * @default null
   */
  base: string | null;
  /**
   * End Date
   * @description End date in YYYY-MM-DD format (inclusive).
   */
  end_date?: string;
  /**
   * Start Date
   * @description Start date in YYYY-MM-DD format (inclusive).
   */
  start_date?: string;
  /**
   * Symbols
   * @description Optional comma-separated list of 3-letter currency codes to limit output.
   * @default null
   */
  symbols: string | null;
};

/**
 * Type of FIXER_IO's FIXER_IO_GET_FLUCTUATION tool output.
 */
type FIXER_IO_GET_FLUCTUATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Base
       * @description Base currency used.
       */
      base: string;
      /**
       * End Date
       * @description End date of the timeframe.
       */
      end_date: string;
      /**
       * Fluctuation
       * @description Indicates this is a fluctuation response.
       */
      fluctuation: boolean;
      /**
       * Rates
       * @description Map of currency codes to their fluctuation data.
       */
      rates: {
          [key: string]: {
              /**
               * Change
               * @description Absolute change between start and end rates.
               */
              change: number;
              /**
               * Change Pct
               * @description Percentage change between start and end rates.
               */
              change_pct: number;
              /**
               * End Rate
               * @description Rate on the end date.
               */
              end_rate: number;
              /**
               * Start Rate
               * @description Rate on the start date.
               */
              start_rate: number;
          };
      };
      /**
       * Start Date
       * @description Start date of the timeframe.
       */
      start_date: string;
      /**
       * Success
       * @description Whether the request succeeded.
       */
      success: boolean;
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
 * Type of FIXER_IO's FIXER_IO_GET_HISTORICAL_RATES tool input.
 */
type FIXER_IO_GET_HISTORICAL_RATES_INPUT = {
  /**
   * Base
   * @description 3-letter ISO currency code to override default (default is EUR)
   * @default null
   */
  base: string | null;
  /**
   * Date
   * @description Historical date to query in YYYY-MM-DD format
   */
  date?: string;
  /**
   * Symbols
   * @description Comma-separated list of currency codes to limit output
   * @default null
   */
  symbols: string | null;
};

/**
 * Type of FIXER_IO's FIXER_IO_GET_HISTORICAL_RATES tool output.
 */
type FIXER_IO_GET_HISTORICAL_RATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Base
       * @description Base currency code used
       */
      base: string;
      /**
       * Date
       * @description Date of the rates in YYYY-MM-DD format
       */
      date: string;
      /**
       * ErrorModel
       * @description Error object if success is false
       * @default null
       */
      error: {
          /**
           * Code
           * @description Fixer API error code
           */
          code: number;
          /**
           * Info
           * @description Human-readable error message
           */
          info: string;
      } | null;
      /**
       * Historical
       * @description True for historical data
       */
      historical: boolean;
      /**
       * Rates
       * @description Exchange rates relative to base currency
       */
      rates: {
          [key: string]: number;
      };
      /**
       * Success
       * @description Whether the request succeeded
       */
      success: boolean;
      /**
       * Timestamp
       * @description Time the rates were collected as UNIX timestamp
       */
      timestamp: number;
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
 * Type of FIXER_IO's FIXER_IO_GET_LATEST_RATES tool input.
 */
type FIXER_IO_GET_LATEST_RATES_INPUT = {
  /**
   * Base
   * @description Three-letter base currency code; default is EUR if omitted
   * @default null
   */
  base: string | null;
  /**
   * Callback
   * @description JSONP callback function name to wrap the response
   * @default null
   */
  callback: string | null;
  /**
   * Symbols
   * @description Comma-separated list of currency codes to limit output; e.g. 'USD,GBP,JPY'
   * @default null
   */
  symbols: string | null;
};

/**
 * Type of FIXER_IO's FIXER_IO_GET_LATEST_RATES tool output.
 */
type FIXER_IO_GET_LATEST_RATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Base
       * @description Base currency used for this response
       */
      base: string;
      /**
       * Date
       * @description Date the rates were collected, format YYYY-MM-DD
       */
      date: string;
      /**
       * ErrorInfo
       * @description Error details if the request failed
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code returned by API
           */
          code: number;
          /**
           * Info
           * @description Human-readable error message
           */
          info: string;
      } | null;
      /**
       * Rates
       * @description Exchange rate data keyed by currency code
       */
      rates: {
          [key: string]: number;
      };
      /**
       * Success
       * @description Indicates whether the request succeeded
       */
      success: boolean;
      /**
       * Timestamp
       * @description UNIX time when the rates were collected
       */
      timestamp: number;
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
 * Type of FIXER_IO's FIXER_IO_GET_SUPPORTED_SYMBOLS tool input.
 */
type FIXER_IO_GET_SUPPORTED_SYMBOLS_INPUT = {
  /**
   * Callback
   * @description Optional JSONP callback function name; wraps response in a JS function call
   * @default null
   */
  callback: string | null;
};

/**
 * Type of FIXER_IO's FIXER_IO_GET_SUPPORTED_SYMBOLS tool output.
 */
type FIXER_IO_GET_SUPPORTED_SYMBOLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * GetSupportedSymbolsError
       * @description Error details if success=false
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code returned by the Fixer API
           */
          code: number;
          /**
           * Info
           * @description Error description returned by the Fixer API
           */
          info: string;
      } | null;
      /**
       * Success
       * @description Whether the API call was successful
       */
      success: boolean;
      /**
       * Symbols
       * @description Mapping of currency code to currency name
       */
      symbols: {
          [key: string]: string;
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
 * Type of FIXER_IO's FIXER_IO_GET_TIME_SERIES tool input.
 */
type FIXER_IO_GET_TIME_SERIES_INPUT = {
  /**
   * Base
   * @description Three-letter base currency code; default is EUR.
   * @default null
   */
  base: string | null;
  /**
   * End Date
   * @description End date of the requested period (YYYY-MM-DD).
   */
  end_date?: string;
  /**
   * Start Date
   * @description Start date of the requested period (YYYY-MM-DD).
   */
  start_date?: string;
  /**
   * Symbols
   * @description Comma-separated list of currency codes to limit output (e.g. 'USD,GBP,JPY').
   * @default null
   */
  symbols: string | null;
};

/**
 * Type of FIXER_IO's FIXER_IO_GET_TIME_SERIES tool output.
 */
type FIXER_IO_GET_TIME_SERIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Base
       * @description Base currency for returned rates
       */
      base: string;
      /**
       * End Date
       * @description End date of returned data (YYYY-MM-DD)
       */
      end_date: string;
      /**
       * ErrorInfo
       * @description Error details if the request failed
       * @default null
       */
      error: {
          /**
           * Code
           * @description Error code returned by API
           */
          code: number;
          /**
           * Info
           * @description Human-readable error message
           */
          info: string;
      } | null;
      /**
       * Rates
       * @description Nested mapping of dates to currency rates
       */
      rates: {
          [key: string]: {
              [key: string]: number;
          };
      };
      /**
       * Start Date
       * @description Start date of returned data (YYYY-MM-DD)
       */
      start_date: string;
      /**
       * Success
       * @description Indicates whether the request succeeded
       */
      success: boolean;
      /**
       * Timeseries
       * @description Flag indicating timeseries endpoint result
       */
      timeseries: boolean;
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
 * Type map of all available tool input types for toolkit "FIXER_IO".
 */
export type FIXER_IO_TOOL_INPUTS = {
  CONVERT_CURRENCY: FIXER_IO_CONVERT_CURRENCY_INPUT
  GET_FLUCTUATION: FIXER_IO_GET_FLUCTUATION_INPUT
  GET_HISTORICAL_RATES: FIXER_IO_GET_HISTORICAL_RATES_INPUT
  GET_LATEST_RATES: FIXER_IO_GET_LATEST_RATES_INPUT
  GET_SUPPORTED_SYMBOLS: FIXER_IO_GET_SUPPORTED_SYMBOLS_INPUT
  GET_TIME_SERIES: FIXER_IO_GET_TIME_SERIES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FIXER_IO".
 */
export type FIXER_IO_TOOL_OUTPUTS = {
  CONVERT_CURRENCY: FIXER_IO_CONVERT_CURRENCY_OUTPUT
  GET_FLUCTUATION: FIXER_IO_GET_FLUCTUATION_OUTPUT
  GET_HISTORICAL_RATES: FIXER_IO_GET_HISTORICAL_RATES_OUTPUT
  GET_LATEST_RATES: FIXER_IO_GET_LATEST_RATES_OUTPUT
  GET_SUPPORTED_SYMBOLS: FIXER_IO_GET_SUPPORTED_SYMBOLS_OUTPUT
  GET_TIME_SERIES: FIXER_IO_GET_TIME_SERIES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FIXER_IO toolkit.
 */
export const FIXER_IO = {
  slug: "fixer_io",
  tools: {
    /**
     * Tool to convert an amount from one currency to another. Use when you need current or historical exchange rates. Specify `date` for historical rates.
     */
    CONVERT_CURRENCY: "FIXER_IO_CONVERT_CURRENCY",
    /**
     * Tool to fetch exchange rate fluctuations between two dates. Use when you need day-to-day currency rate changes.
     */
    GET_FLUCTUATION: "FIXER_IO_GET_FLUCTUATION",
    /**
     * Tool to fetch historical exchange rates for a specific date. Use when you need past currency rates.
     */
    GET_HISTORICAL_RATES: "FIXER_IO_GET_HISTORICAL_RATES",
    /**
     * Tool to retrieve the most recent exchange rates. Use when you need current currency conversion rates for all or specified currencies.
     */
    GET_LATEST_RATES: "FIXER_IO_GET_LATEST_RATES",
    /**
     * Tool to retrieve the list of all available currency symbols and their corresponding names. Use when you need to fetch and display supported currency codes.
     */
    GET_SUPPORTED_SYMBOLS: "FIXER_IO_GET_SUPPORTED_SYMBOLS",
    /**
     * Tool to retrieve daily exchange rates for a specified period. Use when you need historical FX rates between two dates (max 365 days).
     */
    GET_TIME_SERIES: "FIXER_IO_GET_TIME_SERIES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FIXER_IO".
 */
export type FIXER_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FIXER_IO".
 */
export type FIXER_IO_TRIGGER_EVENTS = {}
