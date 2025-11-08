// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FINAGE's FINAGE_GET_STOCK_DETAILS tool input.
 */
type FINAGE_GET_STOCK_DETAILS_INPUT = {
  /**
   * Symbol
   * @description The stock symbol/ticker for which to retrieve detailed information
   */
  symbol?: string;
};

/**
 * Type of FINAGE's FINAGE_GET_STOCK_DETAILS tool output.
 */
type FINAGE_GET_STOCK_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asize
       * @description Size of the ask order
       */
      asize: number;
      /**
       * Ask
       * @description Current ask price
       */
      ask: number;
      /**
       * Bid
       * @description Current bid price
       */
      bid: number;
      /**
       * Bsize
       * @description Size of the bid order
       */
      bsize: number;
      /**
       * Symbol
       * @description The stock's ticker symbol
       */
      symbol: string;
      /**
       * Timestamp
       * @description Timestamp of the data
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
 * Type of FINAGE's FINAGE_GET_STOCK_END_OF_DAY_DATA tool input.
 */
type FINAGE_GET_STOCK_END_OF_DAY_DATA_INPUT = {
  /**
   * Date
   * @description Optional specific date in YYYY-MM-DD format. If not provided, returns the most recent trading day.
   * @default null
   */
  date: string | null;
  /**
   * Symbol
   * @description The stock symbol to get end-of-day data for (e.g., AAPL)
   */
  symbol?: string;
  /**
   * Unadjusted
   * @description Whether to unadjust the prices. Default is true.
   * @default true
   */
  unadjusted: boolean | null;
};

/**
 * Type of FINAGE's FINAGE_GET_STOCK_END_OF_DAY_DATA tool output.
 */
type FINAGE_GET_STOCK_END_OF_DAY_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of end-of-day data points
       */
      results: {
          /**
           * C
           * @description Closing price
           */
          c: number;
          /**
           * H
           * @description Highest price
           */
          h: number;
          /**
           * L
           * @description Lowest price
           */
          l: number;
          /**
           * O
           * @description Opening price
           */
          o: number;
          /**
           * T
           * @description Timestamp in milliseconds
           */
          t: number;
          /**
           * V
           * @description Trading volume
           */
          v: number;
      }[];
      /**
       * Symbol
       * @description Stock symbol
       */
      symbol: string;
      /**
       * Total Results
       * @description Total number of results
       */
      totalResults: number;
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
 * Type of FINAGE's FINAGE_GET_STOCK_HISTORICAL_DATA tool input.
 */
type FINAGE_GET_STOCK_HISTORICAL_DATA_INPUT = {
  /**
   * From Date
   * @description Start date in YYYY-MM-DD format
   */
  from_date?: string;
  /**
   * Limit
   * @description Number of results to return (max: 50000)
   * @default null
   */
  limit: number | null;
  /**
   * Multiplier
   * @description Time multiplier for the selected time unit
   * @default 1
   */
  multiplier: number;
  /**
   * Sort
   * @description Sort order for results (asc or desc)
   * @default null
   */
  sort: string | null;
  /**
   * Symbol
   * @description Stock symbol to fetch historical data for (e.g., AAPL)
   */
  symbol?: string;
  /**
   * Time Unit
   * @description Timeframe unit for the data
   * @default day
   */
  time_unit: string;
  /**
   * To Date
   * @description End date in YYYY-MM-DD format
   */
  to_date?: string;
  /**
   * Unadjusted
   * @description Whether to return unadjusted prices
   * @default null
   */
  unadjusted: boolean | null;
};

/**
 * Type of FINAGE's FINAGE_GET_STOCK_HISTORICAL_DATA tool output.
 */
type FINAGE_GET_STOCK_HISTORICAL_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of historical data points
       */
      results: {
          /**
           * C
           * @description Close price
           */
          c: number;
          /**
           * H
           * @description High price
           */
          h: number;
          /**
           * L
           * @description Low price
           */
          l: number;
          /**
           * O
           * @description Open price
           */
          o: number;
          /**
           * T
           * @description Timestamp in milliseconds
           */
          t: number;
          /**
           * V
           * @description Volume
           */
          v: number;
      }[];
      /**
       * Symbol
       * @description Stock symbol
       */
      symbol: string;
      /**
       * Total Results
       * @description Total number of results
       */
      totalResults: number;
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
 * Type of FINAGE's FINAGE_GET_STOCK_LAST_QUOTE tool input.
 */
type FINAGE_GET_STOCK_LAST_QUOTE_INPUT = {
  /**
   * Symbol
   * @description The stock symbol to get quote information for
   */
  symbol?: string;
  /**
   * Timestamp Type
   * @description Timestamp type. Default is 'ms' (milliseconds). Can be set to 'ns' for nanoseconds.
   * @default null
   */
  timestamp_type: string | null;
};

/**
 * Type of FINAGE's FINAGE_GET_STOCK_LAST_QUOTE tool output.
 */
type FINAGE_GET_STOCK_LAST_QUOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asize
       * @description Size of the ask order (in lots)
       */
      asize: number;
      /**
       * Ask
       * @description Current ask price
       */
      ask: number;
      /**
       * Bid
       * @description Current bid price
       */
      bid: number;
      /**
       * Bsize
       * @description Size of the bid order (in lots)
       */
      bsize: number;
      /**
       * Symbol
       * @description Symbol of the stock
       */
      symbol: string;
      /**
       * Timestamp
       * @description Last update timestamp (default in milliseconds)
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
 * Type of FINAGE's FINAGE_GET_STOCK_MARKET_AGGREGATES tool input.
 */
type FINAGE_GET_STOCK_MARKET_AGGREGATES_INPUT = {
  /**
   * Dbt Filter
   * @description Daily-based time filter. Default is false
   * @default false
   */
  dbt_filter: boolean | null;
  /**
   * End Time
   * @description End time in UTC (e.g., '17:45')
   * @default null
   */
  end_time: string | null;
  /**
   * From Date
   * @description Start date in YYYY-MM-DD format
   */
  from_date?: string;
  /**
   * Limit
   * @description Limit of results. Default is 100, maximum 50000
   * @default 100
   */
  limit: number | null;
  /**
   * Multiply
   * @description Time multiplier for the aggregation period
   */
  multiply?: number;
  /**
   * Sort
   * @description Sort results by timestamp. 'asc' for ascending (oldest to newest), 'desc' for descending
   * @default asc
   * @enum {string|null}
   */
  sort: "asc" | "desc" | null;
  /**
   * Start Time
   * @description Start time in UTC (e.g., '17:30')
   * @default null
   */
  start_time: string | null;
  /**
   * Symbol
   * @description Stock symbol to get prices for (e.g., 'AAPL')
   */
  symbol?: string;
  /**
   * Time
   * @description Size of the time period
   * @enum {string}
   */
  time?: "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year";
  /**
   * To Date
   * @description End date in YYYY-MM-DD format
   */
  to_date?: string;
  /**
   * Unadjusted
   * @description Unadjust the prices. Default is true
   * @default true
   */
  unadjusted: boolean | null;
};

/**
 * Type of FINAGE's FINAGE_GET_STOCK_MARKET_AGGREGATES tool output.
 */
type FINAGE_GET_STOCK_MARKET_AGGREGATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of OHLCV data points
       */
      results: {
          /**
           * C
           * @description Close price
           */
          c: number;
          /**
           * H
           * @description High price
           */
          h: number;
          /**
           * L
           * @description Low price
           */
          l: number;
          /**
           * O
           * @description Open price
           */
          o: number;
          /**
           * T
           * @description Timestamp in milliseconds
           */
          t: number;
          /**
           * V
           * @description Volume
           */
          v: number;
      }[];
      /**
       * Symbol
       * @description Stock symbol
       */
      symbol: string;
      /**
       * Total Results
       * @description Total number of results
       */
      totalResults: number;
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
 * Type of FINAGE's FINAGE_GET_STOCK_MARKET_NEWS tool input.
 */
type FINAGE_GET_STOCK_MARKET_NEWS_INPUT = {
  /**
   * Limit
   * @description Number of news articles to retrieve. Default is 10, maximum allowed is 30.
   * @default 10
   */
  limit: number | null;
  /**
   * Symbol
   * @description Stock symbol name for which to retrieve news (e.g., AAPL, AMZN)
   */
  symbol?: string;
};

/**
 * Type of FINAGE's FINAGE_GET_STOCK_MARKET_NEWS tool output.
 */
type FINAGE_GET_STOCK_MARKET_NEWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Number of news articles requested
       */
      limit: number;
      /**
       * News
       * @description List of news articles
       */
      news: {
          /**
           * Date
           * @description Publication date and time of the news article
           */
          date: string;
          /**
           * Description
           * @description Description or summary of the news article
           * @default null
           */
          description: string | null;
          /**
           * Source
           * @description Source of the news article
           */
          source: string;
          /**
           * Title
           * @description Title of the news article
           */
          title: string;
          /**
           * Url
           * @description URL to the full news article
           */
          url: string;
      }[];
      /**
       * Ticker
       * @description Stock symbol for which news was retrieved
       */
      ticker: string;
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
 * Type of FINAGE's FINAGE_GET_STOCK_MARKET_SNAPSHOT tool input.
 */
type FINAGE_GET_STOCK_MARKET_SNAPSHOT_INPUT = {
  /**
   * Include Quotes
   * @description Include latest quotes in the response. Default is True.
   * @default true
   */
  include_quotes: boolean | null;
  /**
   * Include Trades
   * @description Include latest trades in the response. Default is False.
   * @default false
   */
  include_trades: boolean | null;
  /**
   * Symbols
   * @description Comma-separated list of stock symbols (e.g., 'AAPL,TSLA'). If not provided, data for all available stocks will be returned.
   * @default null
   */
  symbols: string | null;
};

/**
 * Type of FINAGE's FINAGE_GET_STOCK_MARKET_SNAPSHOT tool output.
 */
type FINAGE_GET_STOCK_MARKET_SNAPSHOT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Last Quotes
       * @description List of latest quotes for requested symbols
       * @default null
       */
      lastQuotes: {
          /**
           * A
           * @description Last ask price
           */
          a: number;
          /**
           * Asz
           * @description Ask size
           */
          asz: number;
          /**
           * B
           * @description Last bid price
           */
          b: number;
          /**
           * Bsz
           * @description Bid size
           */
          bsz: number;
          /**
           * S
           * @description Stock symbol
           */
          s: string;
          /**
           * T
           * @description Timestamp in microseconds
           */
          t: number;
      }[] | null;
      /**
       * Last Trades
       * @description List of latest trades for requested symbols
       * @default null
       */
      lastTrades: {
          /**
           * P
           * @description Last trade price
           */
          p: number;
          /**
           * S
           * @description Stock symbol
           */
          s: string;
          /**
           * Sz
           * @description Trade size
           */
          sz: number;
          /**
           * T
           * @description Timestamp in microseconds
           */
          t: number;
      }[] | null;
      /**
       * Total Results
       * @description Total number of symbols in the response
       */
      totalResults: number;
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
 * Type of FINAGE's FINAGE_GET_STOCK_MARKET_STATUS tool input.
 */
type FINAGE_GET_STOCK_MARKET_STATUS_INPUT = {
  /**
   * Country
   * @description Check the specified country's market status. Default is US.
   * @default null
   */
  country: string | null;
  /**
   * Currencies
   * @description Display or hide currencies part from the output. Default is true.
   * @default null
   */
  currencies: boolean | null;
  /**
   * Extended Hours
   * @description Display extended hours of the market. Default is false.
   * @default null
   */
  extended_hours: boolean | null;
  /**
   * Holidays
   * @description Display selected country's holidays. Default is false.
   * @default null
   */
  holidays: boolean | null;
  /**
   * Trading Hours
   * @description Display trading hours of the market. Default is false.
   * @default null
   */
  trading_hours: boolean | null;
};

/**
 * Type of FINAGE's FINAGE_GET_STOCK_MARKET_STATUS tool output.
 */
type FINAGE_GET_STOCK_MARKET_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Country code
       */
      country: string;
      /**
       * CurrencyStatus
       * @description Model for currency markets status information.
       * @default null
       */
      currencies: {
          /**
           * Crypto
           * @description Cryptocurrency market status (open/closed)
           */
          crypto: string;
          /**
           * Fx
           * @description Forex market status (open/closed)
           */
          fx: string;
      } | null;
      /**
       * Exchanges
       * @description Status of different exchanges
       */
      exchanges: {
          /**
           * Nasdaq
           * @description NASDAQ market status (open/closed)
           */
          nasdaq: string;
          /**
           * Nyse
           * @description NYSE market status (open/closed)
           */
          nyse: string;
          /**
           * Otc
           * @description OTC market status (open/closed)
           */
          otc: string;
      };
      /**
       * Market
       * @description Overall market status (open/closed)
       */
      market: string;
      /**
       * Timezone
       * @description Market timezone
       */
      timezone: string;
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
 * Type of FINAGE's FINAGE_GET_STOCK_PREVIOUS_CLOSE tool input.
 */
type FINAGE_GET_STOCK_PREVIOUS_CLOSE_INPUT = {
  /**
   * Date
   * @description Specific date in YYYY-MM-DD format to get historical data
   * @default null
   */
  date: string | null;
  /**
   * Symbol
   * @description Stock symbol to get previous day's data
   */
  symbol?: string;
  /**
   * Unadjusted
   * @description Whether to return unadjusted price data
   * @default true
   */
  unadjusted: boolean | null;
};

/**
 * Type of FINAGE's FINAGE_GET_STOCK_PREVIOUS_CLOSE tool output.
 */
type FINAGE_GET_STOCK_PREVIOUS_CLOSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of previous close data results
       */
      results: {
          /**
           * C
           * @description Closing price
           */
          c: number;
          /**
           * H
           * @description Highest price
           */
          h: number;
          /**
           * L
           * @description Lowest price
           */
          l: number;
          /**
           * O
           * @description Opening price
           */
          o: number;
          /**
           * T
           * @description Timestamp in milliseconds
           */
          t: number;
          /**
           * V
           * @description Trading volume
           */
          v: number;
      }[];
      /**
       * Symbol
       * @description Stock symbol
       */
      symbol: string;
      /**
       * Total Results
       * @description Total number of results
       */
      totalResults: number;
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
 * Type of FINAGE's FINAGE_GET_STOCK_TICK_DATA tool input.
 */
type FINAGE_GET_STOCK_TICK_DATA_INPUT = {
  /**
   * Dbt Filter
   * @description Daily-based time filter
   * @default false
   */
  dbt_filter: boolean | null;
  /**
   * End Time
   * @description End time in UTC (e.g., 17:45)
   * @default null
   */
  end_time: string | null;
  /**
   * From Date
   * @description Start date in YYYY-MM-DD format
   */
  from_date?: string;
  /**
   * Limit
   * @description Number of results to return (max: 50000)
   * @default 100
   */
  limit: number | null;
  /**
   * Multiply
   * @description Time multiplier for the interval
   * @default 1
   */
  multiply: number;
  /**
   * SortOrder
   * @description Sort results by timestamp
   * @default asc
   * @enum {string|null}
   */
  sort: "asc" | "desc" | null;
  /**
   * Start Time
   * @description Start time in UTC (e.g., 17:30)
   * @default null
   */
  start_time: string | null;
  /**
   * Symbol
   * @description Stock symbol to get tick data for (e.g., AAPL)
   */
  symbol?: string;
  /**
   * Time
   * @description Size of the time interval
   * @enum {string}
   */
  time?: "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year";
  /**
   * To Date
   * @description End date in YYYY-MM-DD format
   */
  to_date?: string;
  /**
   * Unadjusted
   * @description Get unadjusted prices
   * @default true
   */
  unadjusted: boolean | null;
};

/**
 * Type of FINAGE's FINAGE_GET_STOCK_TICK_DATA tool output.
 */
type FINAGE_GET_STOCK_TICK_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of tick data results
       */
      results: {
          /**
           * C
           * @description Close price
           */
          c: number;
          /**
           * H
           * @description High price
           */
          h: number;
          /**
           * L
           * @description Low price
           */
          l: number;
          /**
           * O
           * @description Open price
           */
          o: number;
          /**
           * T
           * @description Timestamp in milliseconds
           */
          t: number;
          /**
           * V
           * @description Volume
           */
          v: number;
      }[];
      /**
       * Symbol
       * @description Stock symbol
       */
      symbol: string;
      /**
       * Total Results
       * @description Total number of results
       */
      totalResults: number;
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
 * Type map of all available tool input types for toolkit "FINAGE".
 */
export type FINAGE_TOOL_INPUTS = {
  GET_STOCK_DETAILS: FINAGE_GET_STOCK_DETAILS_INPUT
  GET_STOCK_END_OF_DAY_DATA: FINAGE_GET_STOCK_END_OF_DAY_DATA_INPUT
  GET_STOCK_HISTORICAL_DATA: FINAGE_GET_STOCK_HISTORICAL_DATA_INPUT
  GET_STOCK_LAST_QUOTE: FINAGE_GET_STOCK_LAST_QUOTE_INPUT
  GET_STOCK_MARKET_AGGREGATES: FINAGE_GET_STOCK_MARKET_AGGREGATES_INPUT
  GET_STOCK_MARKET_NEWS: FINAGE_GET_STOCK_MARKET_NEWS_INPUT
  GET_STOCK_MARKET_SNAPSHOT: FINAGE_GET_STOCK_MARKET_SNAPSHOT_INPUT
  GET_STOCK_MARKET_STATUS: FINAGE_GET_STOCK_MARKET_STATUS_INPUT
  GET_STOCK_PREVIOUS_CLOSE: FINAGE_GET_STOCK_PREVIOUS_CLOSE_INPUT
  GET_STOCK_TICK_DATA: FINAGE_GET_STOCK_TICK_DATA_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FINAGE".
 */
export type FINAGE_TOOL_OUTPUTS = {
  GET_STOCK_DETAILS: FINAGE_GET_STOCK_DETAILS_OUTPUT
  GET_STOCK_END_OF_DAY_DATA: FINAGE_GET_STOCK_END_OF_DAY_DATA_OUTPUT
  GET_STOCK_HISTORICAL_DATA: FINAGE_GET_STOCK_HISTORICAL_DATA_OUTPUT
  GET_STOCK_LAST_QUOTE: FINAGE_GET_STOCK_LAST_QUOTE_OUTPUT
  GET_STOCK_MARKET_AGGREGATES: FINAGE_GET_STOCK_MARKET_AGGREGATES_OUTPUT
  GET_STOCK_MARKET_NEWS: FINAGE_GET_STOCK_MARKET_NEWS_OUTPUT
  GET_STOCK_MARKET_SNAPSHOT: FINAGE_GET_STOCK_MARKET_SNAPSHOT_OUTPUT
  GET_STOCK_MARKET_STATUS: FINAGE_GET_STOCK_MARKET_STATUS_OUTPUT
  GET_STOCK_PREVIOUS_CLOSE: FINAGE_GET_STOCK_PREVIOUS_CLOSE_OUTPUT
  GET_STOCK_TICK_DATA: FINAGE_GET_STOCK_TICK_DATA_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FINAGE toolkit.
 */
export const FINAGE = {
  slug: "finage",
  tools: {
    /**
     * This tool retrieves real-time stock quote information for a given stock symbol. it provides current price, price changes, trading volume, and other key market data.
     */
    GET_STOCK_DETAILS: "FINAGE_GET_STOCK_DETAILS",
    /**
     * This tool retrieves the end-of-day data for a specific stock symbol. it provides the opening price, highest price, lowest price, closing price, trading volume, and timestamp for the most recent completed trading day, making it essential for investors and analysts seeking daily summary data without intraday details.
     */
    GET_STOCK_END_OF_DAY_DATA: "FINAGE_GET_STOCK_END_OF_DAY_DATA",
    /**
     * This tool will fetch historical daily stock data for a given stock symbol between specified dates. it provides ohlcv data (open, high, low, close, volume) and is independent, requiring only the stock symbol, date range inputs, and authentication.
     */
    GET_STOCK_HISTORICAL_DATA: "FINAGE_GET_STOCK_HISTORICAL_DATA",
    /**
     * This tool fetches the latest quote information for a specific stock symbol, providing real-time bid and ask prices, along with their respective sizes and a timestamp. it is essential for trading and market analysis, fetching a json object with details like symbol, ask, bid, asize, bsize, and timestamp.
     */
    GET_STOCK_LAST_QUOTE: "FINAGE_GET_STOCK_LAST_QUOTE",
    /**
     * This tool retrieves aggregated ohlcv (open, high, low, close, volume) data for stocks over specified time periods. it allows users to provide parameters such as stock symbol, time multiplier, aggregation period, start date, and end date to obtain market aggregates.
     */
    GET_STOCK_MARKET_AGGREGATES: "FINAGE_GET_STOCK_MARKET_AGGREGATES",
    /**
     * This tool retrieves the latest market news from finage's api. it provides comprehensive market news and updates, including news filtering by specific stock symbols, thereby supporting real-time market insights, investment decisions, and research on market trends.
     */
    GET_STOCK_MARKET_NEWS: "FINAGE_GET_STOCK_MARKET_NEWS",
    /**
     * This tool provides a comprehensive snapshot of the us stock market data, allowing users to get the latest quotes and trades for multiple stocks in a single api request. it is ideal as the first tool because it offers broad market coverage, does not require resource ids or external dependencies, and can be used independently with just api authentication.
     */
    GET_STOCK_MARKET_SNAPSHOT: "FINAGE_GET_STOCK_MARKET_SNAPSHOT",
    /**
     * This tool retrieves the current market status for various stock exchanges by determining if markets are open or closed. it requires an api key and returns details such as the market type, server time, and next open/close times, which are essential for trade planning and automation.
     */
    GET_STOCK_MARKET_STATUS: "FINAGE_GET_STOCK_MARKET_STATUS",
    /**
     * This tool retrieves the previous day's closing data for a specific stock symbol. it provides essential trading information including the opening price, highest price, lowest price, closing price, trading volume, and timestamp for the previous trading day. it complements other finage tools by offering detailed previous day data, which is useful for computing day-over-day change and informing daily trading analysis.
     */
    GET_STOCK_PREVIOUS_CLOSE: "FINAGE_GET_STOCK_PREVIOUS_CLOSE",
    /**
     * The stock tick data api provides detailed tick-by-tick trading data for a specific stock symbol. this endpoint is crucial for precise market analysis and high-frequency trading applications.
     */
    GET_STOCK_TICK_DATA: "FINAGE_GET_STOCK_TICK_DATA",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FINAGE".
 */
export type FINAGE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FINAGE".
 */
export type FINAGE_TRIGGER_EVENTS = {}
