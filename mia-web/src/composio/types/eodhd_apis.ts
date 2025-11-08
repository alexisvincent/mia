// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of EODHD_APIS's EODHD_APIS_GET_MACRO_INDICATORS tool input.
 */
type EODHD_APIS_GET_MACRO_INDICATORS_INPUT = {
  /**
   * Country
   * @description ISO country code for which to retrieve indicators, e.g., 'US'
   */
  country?: string;
  /**
   * From Date
   * @description Start date (inclusive) in YYYY-MM-DD format
   * @default null
   */
  from_date: string | null;
  /**
   * Indicator
   * @description Specific indicator code to filter, e.g., 'GDP'
   * @default null
   */
  indicator: string | null;
  /**
   * To Date
   * @description End date (inclusive) in YYYY-MM-DD format
   * @default null
   */
  to_date: string | null;
};

/**
 * Type of EODHD_APIS's EODHD_APIS_GET_MACRO_INDICATORS tool output.
 */
type EODHD_APIS_GET_MACRO_INDICATORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Country code.
       */
      country: string;
      /**
       * Date
       * @description Date of the observation in YYYY-MM-DD format.
       */
      date: string;
      /**
       * Indicator
       * @description Indicator code.
       */
      indicator: string;
      /**
       * Indicator Name
       * @description Full name of the indicator.
       */
      indicator_name: string;
      /**
       * Source
       * @description Data source.
       */
      source: string;
      /**
       * Unit
       * @description Measurement unit.
       */
      unit: string;
      /**
       * Value
       * @description Indicator value.
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
 * Type of EODHD_APIS's EODHD_APIS_GET_MUTUAL_FUNDS_DATA tool input.
 */
type EODHD_APIS_GET_MUTUAL_FUNDS_DATA_INPUT = {
  /**
   * Code
   * @description Ticker code of the mutual fund (e.g., 'VFIAX.US').
   */
  code?: string;
  /**
   * Fmt
   * @description Response format: 'json' (default) or 'csv'.
   * @default json
   * @enum {string|null}
   */
  fmt: "json" | "csv" | null;
};

/**
 * Type of EODHD_APIS's EODHD_APIS_GET_MUTUAL_FUNDS_DATA tool output.
 */
type EODHD_APIS_GET_MUTUAL_FUNDS_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asset Class
       * @description Asset class of the mutual fund (e.g., 'equity').
       * @default null
       */
      asset_class: string | null;
      /**
       * Category
       * @description Category of the mutual fund (e.g., 'large cap').
       * @default null
       */
      category: string | null;
      /**
       * Code
       * @description Ticker code of the mutual fund.
       */
      code: string;
      /**
       * Date
       * @description Date of the report in YYYY-MM-DD format.
       */
      date: string;
      /**
       * Expense Ratio
       * @description Annual expense ratio of the fund.
       * @default null
       */
      expense_ratio: number | null;
      /**
       * Inception Date
       * @description Fund inception date in YYYY-MM-DD format.
       * @default null
       */
      inception_date: string | null;
      /**
       * Name
       * @description Name of the mutual fund.
       * @default null
       */
      name: string | null;
      /**
       * Nav
       * @description Net Asset Value of the fund.
       */
      nav: number;
      /**
       * Nav Change
       * @description Change in Net Asset Value since previous report.
       * @default null
       */
      nav_change: number | null;
      /**
       * Yield
       * @description Current yield of the mutual fund.
       * @default null
       */
      yield: number | null;
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
 * Type of EODHD_APIS's EODHD_APIS_GET_REAL_TIME_WEBSOCKET_FOREX tool input.
 */
type EODHD_APIS_GET_REAL_TIME_WEBSOCKET_FOREX_INPUT = {
  /**
   * Pairs
   * @description List of FOREX currency pairs to subscribe to in 'BASE/QUOTE' format
   */
  pairs?: string[];
};

/**
 * Type of EODHD_APIS's EODHD_APIS_GET_REAL_TIME_WEBSOCKET_FOREX tool output.
 */
type EODHD_APIS_GET_REAL_TIME_WEBSOCKET_FOREX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Endpoint
       * @description WebSocket endpoint URL for real-time FOREX data
       */
      endpoint: string;
      /**
       * Subscription
       * @description JSON subscription message to send after connecting
       */
      subscription: {
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
 * Type of EODHD_APIS's EODHD_APIS_GET_REAL_TIME_WEBSOCKET_US_TRADE tool input.
 */
type EODHD_APIS_GET_REAL_TIME_WEBSOCKET_US_TRADE_INPUT = {
  /**
   * Action
   * @description Either 'subscribe' to start receiving trade updates or 'unsubscribe' to stop.
   * @enum {string}
   */
  action?: "subscribe" | "unsubscribe";
  /**
   * Symbols
   * @description List of US stock ticker symbols to manage on the stream.
   */
  symbols?: string[];
};

/**
 * Type of EODHD_APIS's EODHD_APIS_GET_REAL_TIME_WEBSOCKET_US_TRADE tool output.
 */
type EODHD_APIS_GET_REAL_TIME_WEBSOCKET_US_TRADE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Payload
       * @description JSON payload to send over WebSocket for subscribing or unsubscribing.
       */
      payload: {
          [key: string]: unknown;
      };
      /**
       * Url
       * @description WebSocket endpoint URL including the API token.
       */
      url: string;
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
 * Type map of all available tool input types for toolkit "EODHD_APIS".
 */
export type EODHD_APIS_TOOL_INPUTS = {
  GET_MACRO_INDICATORS: EODHD_APIS_GET_MACRO_INDICATORS_INPUT
  GET_MUTUAL_FUNDS_DATA: EODHD_APIS_GET_MUTUAL_FUNDS_DATA_INPUT
  GET_REAL_TIME_WEBSOCKET_FOREX: EODHD_APIS_GET_REAL_TIME_WEBSOCKET_FOREX_INPUT
  GET_REAL_TIME_WEBSOCKET_US_TRADE: EODHD_APIS_GET_REAL_TIME_WEBSOCKET_US_TRADE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "EODHD_APIS".
 */
export type EODHD_APIS_TOOL_OUTPUTS = {
  GET_MACRO_INDICATORS: EODHD_APIS_GET_MACRO_INDICATORS_OUTPUT
  GET_MUTUAL_FUNDS_DATA: EODHD_APIS_GET_MUTUAL_FUNDS_DATA_OUTPUT
  GET_REAL_TIME_WEBSOCKET_FOREX: EODHD_APIS_GET_REAL_TIME_WEBSOCKET_FOREX_OUTPUT
  GET_REAL_TIME_WEBSOCKET_US_TRADE: EODHD_APIS_GET_REAL_TIME_WEBSOCKET_US_TRADE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's EODHD_APIS toolkit.
 */
export const EODHD_APIS = {
  slug: "eodhd_apis",
  tools: {
    /**
     * Tool to retrieve macroeconomic indicators data. use when you need country-level economic indicators across a date range. use after confirming the api token is set.
     */
    GET_MACRO_INDICATORS: "EODHD_APIS_GET_MACRO_INDICATORS",
    /**
     * Tool to retrieve mutual funds data for a specified symbol. use after confirming the mutual fund ticker symbol.
     */
    GET_MUTUAL_FUNDS_DATA: "EODHD_APIS_GET_MUTUAL_FUNDS_DATA",
    /**
     * Tool to retrieve real-time data for forex via websocket. use when you need live price updates for specific currency pairs.
     */
    GET_REAL_TIME_WEBSOCKET_FOREX: "EODHD_APIS_GET_REAL_TIME_WEBSOCKET_FOREX",
    /**
     * Tool to retrieve real-time trade data for the us market via websocket. use when live updates for specific us symbols are required. example: subscribe to ['aapl', 'goog'].
     */
    GET_REAL_TIME_WEBSOCKET_US_TRADE: "EODHD_APIS_GET_REAL_TIME_WEBSOCKET_US_TRADE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "EODHD_APIS".
 */
export type EODHD_APIS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "EODHD_APIS".
 */
export type EODHD_APIS_TRIGGER_EVENTS = {}
