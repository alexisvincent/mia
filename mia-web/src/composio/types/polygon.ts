// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of POLYGON's POLYGON_GET_ALL_TICKERS tool input.
 */
type POLYGON_GET_ALL_TICKERS_INPUT = {
  /**
   * Active
   * @description If true, only active tickers are returned.
   * @default true
   */
  active: boolean | null;
  /**
   * Cursor
   * @description Pagination cursor from prior response to fetch next page.
   * @default null
   */
  cursor: string | null;
  /**
   * Exchange
   * @description Filter by exchange symbol (e.g., XNAS, XNYS).
   * @default null
   */
  exchange: string | null;
  /**
   * Limit
   * @description Number of results per page (1-1000).
   * @default 10
   */
  limit: number | null;
  /**
   * Market
   * @description Filter by market type (e.g., stocks, crypto, fx, otc).
   * @default null
   */
  market: string | null;
  /**
   * Order
   * @description Sort order of results.
   * @default asc
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Search
   * @description Search substring in company or ticker names.
   * @default null
   */
  search: string | null;
  /**
   * Sort
   * @description Field to sort by (e.g., ticker, name, market).
   * @default null
   */
  sort: string | null;
  /**
   * Ticker
   * @description Exact ticker symbol to search for (e.g., AAPL).
   * @default null
   */
  ticker: string | null;
};

/**
 * Type of POLYGON's POLYGON_GET_ALL_TICKERS tool output.
 */
type POLYGON_GET_ALL_TICKERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of results returned in this page.
       */
      count: number;
      /**
       * Next Url
       * @description URL to retrieve next page when more results exist.
       * @default null
       */
      next_url: string | null;
      /**
       * Request Id
       * @description Unique request identifier.
       */
      request_id: string;
      /**
       * Results
       * @description List of ticker objects matching the query.
       */
      results: {
          /**
           * Active
           * @description Active status of the ticker.
           */
          active: boolean;
          /**
           * Cik
           * @description SEC CIK identifier.
           * @default null
           */
          cik: string | null;
          /**
           * Composite Figi
           * @description Composite FIGI identifier.
           * @default null
           */
          composite_figi: string | null;
          /**
           * Currency Name
           * @description Currency name (e.g., usd).
           * @default null
           */
          currency_name: string | null;
          /**
           * Last Updated Utc
           * @description UTC timestamp of last update.
           * @default null
           */
          last_updated_utc: string | null;
          /**
           * Locale
           * @description Locale of the ticker (e.g., US).
           */
          locale: string;
          /**
           * Market
           * @description Market type (e.g., stocks, crypto).
           */
          market: string;
          /**
           * Name
           * @description Company or asset name.
           */
          name: string;
          /**
           * Primary Exchange
           * @description Primary exchange identifier.
           */
          primary_exchange: string;
          /**
           * Share Class Figi
           * @description Share Class FIGI identifier.
           * @default null
           */
          share_class_figi: string | null;
          /**
           * Ticker
           * @description The ticker symbol.
           */
          ticker: string;
          /**
           * Type
           * @description Asset type (e.g., CS).
           */
          type: string;
      }[];
      /**
       * Status
       * @description Request status (e.g., OK).
       */
      status: string;
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
 * Type of POLYGON's POLYGON_GET_CRYPTO_INDICATOR_EMA tool input.
 */
type POLYGON_GET_CRYPTO_INDICATOR_EMA_INPUT = {
  /**
   * Adjusted
   * @description Whether results are adjusted for splits (default: true)
   * @default true
   */
  adjusted: boolean | null;
  /**
   * Crypto Ticker
   * @description Cryptocurrency ticker symbol in Polygon format, e.g., 'X:BTCUSD'
   */
  crypto_ticker?: string;
  /**
   * Expand Underlying
   * @description If true, include underlying aggregate bars in the response
   * @default false
   */
  expand_underlying: boolean | null;
  /**
   * Limit
   * @description Maximum number of results (default: 50, max: 1000)
   * @default 50
   */
  limit: number | null;
  /**
   * Order
   * @description Sort order of results (default: desc)
   * @default desc
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Series Type
   * @description Series type to use for calculation (open, high, low, close)
   * @enum {string}
   */
  series_type?: "open" | "high" | "low" | "close";
  /**
   * Timespan
   * @description Size of the time window for aggregates
   * @enum {string}
   */
  timespan?: "minute" | "hour" | "day";
  /**
   * Window
   * @description Number of periods for EMA calculation (window size)
   */
  window?: number;
};

/**
 * Type of POLYGON's POLYGON_GET_CRYPTO_INDICATOR_EMA tool output.
 */
type POLYGON_GET_CRYPTO_INDICATOR_EMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Id
       * @description Unique request identifier
       */
      request_id: string;
      /**
       * Results
       * @description EMA indicator results
       */
      results: {
          /**
           * Underlying
           * @description List of underlying aggregate bars if requested
           * @default null
           */
          underlying: {
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
               * N
               * @description Number of transactions
               */
              n: number;
              /**
               * O
               * @description Open price
               */
              o: number;
              /**
               * T
               * @description Epoch millisecond timestamp of the bar
               */
              t: number;
              /**
               * V
               * @description Volume of trading
               */
              v: number;
              /**
               * Vw
               * @description Volume-weighted average price
               */
              vw: number;
          }[] | null;
          /**
           * Values
           * @description List of EMA values with timestamps
           */
          values: {
              /**
               * Timestamp
               * @description Epoch millisecond timestamp for EMA value
               */
              timestamp: number;
              /**
               * Value
               * @description Calculated EMA value
               */
              value: number;
          }[];
      };
      /**
       * Status
       * @description API response status, e.g., 'OK'
       */
      status: string;
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
 * Type of POLYGON's POLYGON_GET_CRYPTO_INDICATOR_MACD tool input.
 */
type POLYGON_GET_CRYPTO_INDICATOR_MACD_INPUT = {
  /**
   * Adjusted
   * @description Whether the results are adjusted for splits/dividends
   * @default true
   */
  adjusted: boolean | null;
  /**
   * Expand Underlying
   * @description Whether to include the underlying aggregates in the response
   * @default false
   */
  expand_underlying: boolean | null;
  /**
   * Limit
   * @description Maximum number of results to return
   * @default 50
   */
  limit: number | null;
  /**
   * Order
   * @description Order in which results are returned
   * @default desc
   * @enum {string}
   */
  order: "asc" | "desc";
  /**
   * Series Type
   * @description Price type to use for calculation
   * @default close
   * @enum {string|null}
   */
  series_type: "open" | "high" | "low" | "close" | null;
  /**
   * Ticker
   * @description Crypto ticker symbol to query, e.g., 'X:BTCUSD'
   */
  ticker?: string;
  /**
   * Timespan
   * @description Aggregate timespan for each data point, e.g., 'day', 'hour', or 'minute'
   * @default day
   * @enum {string}
   */
  timespan: "minute" | "hour" | "day";
  /**
   * Window Long
   * @description Lookback window for the long moving average
   * @default 26
   */
  window_long: number | null;
  /**
   * Window Short
   * @description Lookback window for the short moving average
   * @default 12
   */
  window_short: number | null;
  /**
   * Window Signal
   * @description Lookback window for the signal line
   * @default 9
   */
  window_signal: number | null;
};

/**
 * Type of POLYGON's POLYGON_GET_CRYPTO_INDICATOR_MACD tool output.
 */
type POLYGON_GET_CRYPTO_INDICATOR_MACD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Id
       * @description Identifier for the API request
       */
      request_id: string;
      /**
       * Results
       * @description MACD indicator results
       */
      results: {
          /**
           * Indicators
           * @description Indicator window settings used
           */
          indicators: {
              /**
               * Long Window
               * @description Lookback window used for long moving average
               */
              long_window: number;
              /**
               * Short Window
               * @description Lookback window used for short moving average
               */
              short_window: number;
              /**
               * Signal Window
               * @description Lookback window used for signal line
               */
              signal_window: number;
          };
          /**
           * Values
           * @description List of MACD values per interval
           */
          values: {
              /**
               * Histogram
               * @description MACD histogram value
               */
              histogram: number;
              /**
               * Macd
               * @description MACD value
               */
              macd: number;
              /**
               * Signal
               * @description Signal line value
               */
              signal: number;
              /**
               * Timestamp
               * @description Epoch time in milliseconds for this data point
               */
              timestamp: number;
          }[];
      };
      /**
       * Status
       * @description Status of the API response
       */
      status: string;
      /**
       * Ticker
       * @description Crypto ticker symbol requested
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
 * Type of POLYGON's POLYGON_GET_CRYPTO_INDICATOR_RSI tool input.
 */
type POLYGON_GET_CRYPTO_INDICATOR_RSI_INPUT = {
  /**
   * Adjusted
   * @description Whether or not results are adjusted for splits
   * @default true
   */
  adjusted: boolean | null;
  /**
   * Limit
   * @description Maximum number of results to return
   * @default 100
   */
  limit: number | null;
  /**
   * Order
   * @description Order of results
   * @default desc
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Series Type
   * @description Price series to use for calculation
   * @default close
   * @enum {string|null}
   */
  series_type: "open" | "high" | "low" | "close" | null;
  /**
   * Ticker
   * @description Crypto ticker symbol to query, e.g., 'X:BTCUSD'
   */
  ticker?: string;
  /**
   * Timeframe
   * @description Aggregation time window for RSI, e.g., 'hour', 'day'
   * @enum {string}
   */
  timeframe?: "minute" | "hour" | "day";
  /**
   * Timestamp
   * @description Timestamp to retrieve RSI up to (ISO8601 or Unix ms)
   * @default null
   */
  timestamp: string | null;
  /**
   * Window
   * @description Number of periods to calculate the RSI over (window size)
   * @default 14
   */
  window: number | null;
};

/**
 * Type of POLYGON's POLYGON_GET_CRYPTO_INDICATOR_RSI tool output.
 */
type POLYGON_GET_CRYPTO_INDICATOR_RSI_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Id
       * @description Identifier for the API request
       */
      request_id: string;
      /**
       * Results
       * @description RSI indicator results
       */
      results: {
          /**
           * Indicator
           * @description Name of the indicator, should be 'rsi'
           */
          indicator: string;
          /**
           * Params
           * @description Input parameters used for the RSI calculation
           */
          params: {
              [key: string]: unknown;
          };
          /**
           * Timestamp
           * @description Corresponding timestamps for each RSI value
           */
          timestamp: number[];
          /**
           * Values
           * @description RSI values calculated
           */
          values: number[];
      };
      /**
       * Status
       * @description Status of the API response
       */
      status: string;
      /**
       * Ticker
       * @description Crypto ticker symbol returned in the response
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
 * Type of POLYGON's POLYGON_GET_CRYPTO_INDICATOR_SMA tool input.
 */
type POLYGON_GET_CRYPTO_INDICATOR_SMA_INPUT = {
  /**
   * Adjusted
   * @description Whether to use adjusted data
   * @default true
   */
  adjusted: boolean | null;
  /**
   * Crypto Ticker
   * @description Crypto ticker symbol to query, e.g., 'X:BTCUSD'
   */
  crypto_ticker?: string;
  /**
   * Expand Underlying
   * @description Whether to include underlying aggregates
   * @default false
   */
  expand_underlying: boolean | null;
  /**
   * Limit
   * @description Maximum number of results to return
   * @default 5000
   */
  limit: number | null;
  /**
   * Order
   * @description Order of results
   * @default desc
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Series Type
   * @description Series type to calculate SMA on
   * @default close
   * @enum {string|null}
   */
  series_type: "open" | "high" | "low" | "close" | "volume" | null;
  /**
   * Timespan
   * @description Aggregate timespan for each data point
   * @enum {string}
   */
  timespan?: "minute" | "hour" | "day";
  /**
   * Window
   * @description Window size for the SMA calculation
   */
  window?: number;
};

/**
 * Type of POLYGON's POLYGON_GET_CRYPTO_INDICATOR_SMA tool output.
 */
type POLYGON_GET_CRYPTO_INDICATOR_SMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Url
       * @description URL to fetch the next page of results, if any
       * @default null
       */
      next_url: string | null;
      /**
       * Request Id
       * @description Identifier for the API request
       */
      request_id: string;
      /**
       * Results
       * @description List of SMA result values
       */
      results: {
          /**
           * Timestamp
           * @description Epoch time in milliseconds for the data point
           */
          timestamp: number;
          /**
           * Value
           * @description Computed SMA value
           */
          value: number;
      }[];
      /**
       * Status
       * @description Status of the API response
       */
      status: string;
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
 * Type of POLYGON's POLYGON_GET_CRYPTO_OPEN_CLOSE tool input.
 */
type POLYGON_GET_CRYPTO_OPEN_CLOSE_INPUT = {
  /**
   * Base
   * @description Ticker symbol of the base currency (e.g., 'BTC')
   */
  base?: string;
  /**
   * Date
   * @description Date for which to retrieve open/close prices, in YYYY-MM-DD format
   */
  date?: string;
  /**
   * Quote
   * @description Ticker symbol of the quote currency (e.g., 'USD')
   */
  quote?: string;
};

/**
 * Type of POLYGON's POLYGON_GET_CRYPTO_OPEN_CLOSE tool output.
 */
type POLYGON_GET_CRYPTO_OPEN_CLOSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * After Hours
       * @description After-hours price, if available
       * @default null
       */
      afterHours: number | null;
      /**
       * Base Currency
       * @description Base currency symbol
       */
      base_currency: string;
      /**
       * Close
       * @description Closing price for the day
       */
      close: number;
      /**
       * High
       * @description Highest price for the day
       */
      high: number;
      /**
       * Low
       * @description Lowest price for the day
       */
      low: number;
      /**
       * Open
       * @description Opening price for the day
       */
      open: number;
      /**
       * Pre Market
       * @description Pre-market price, if available
       * @default null
       */
      preMarket: number | null;
      /**
       * Quote Currency
       * @description Quote currency symbol
       */
      quote_currency: string;
      /**
       * Request Id
       * @description Request identifier for debugging
       */
      request_id: string;
      /**
       * Status
       * @description API status, e.g., 'OK'
       */
      status: string;
      /**
       * Symbol
       * @description Full symbol, e.g., 'X:BTCUSD'
       */
      symbol: string;
      /**
       * Volume
       * @description Trading volume for the day
       */
      volume: number;
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
 * Type of POLYGON's POLYGON_GET_CRYPTO_PREV_CLOSE tool input.
 */
type POLYGON_GET_CRYPTO_PREV_CLOSE_INPUT = {
  /**
   * Adjusted
   * @description Whether to return adjusted data
   * @default true
   */
  adjusted: boolean | null;
  /**
   * Crypto Ticker
   * @description Cryptocurrency ticker symbol to query, e.g., 'X:BTCUSD'
   */
  crypto_ticker?: string;
};

/**
 * Type of POLYGON's POLYGON_GET_CRYPTO_PREV_CLOSE tool output.
 */
type POLYGON_GET_CRYPTO_PREV_CLOSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Adjusted
       * @description Whether or not the results are adjusted
       */
      adjusted: boolean;
      /**
       * Query Count
       * @description Number of results for the request
       */
      queryCount: number;
      /**
       * Request Id
       * @description Unique ID for the request
       */
      request_id: string;
      /**
       * Results
       * @description List of aggregate data for previous close
       */
      results: {
          /**
           * C
           * @description Close price for the symbol
           */
          c: number;
          /**
           * H
           * @description Highest price for the symbol
           */
          h: number;
          /**
           * L
           * @description Lowest price for the symbol
           */
          l: number;
          /**
           * N
           * @description Number of transactions in aggregate window
           */
          n: number;
          /**
           * O
           * @description Open price for the symbol
           */
          o: number;
          /**
           * T
           * @description Unix MS timestamp for start of the aggregate window
           */
          t: number;
          /**
           * V
           * @description Trading volume
           */
          v: number;
          /**
           * Vw
           * @description Volume weighted average price
           */
          vw: number;
      }[];
      /**
       * Results Count
       * @description Number of results in the response
       */
      resultsCount: number;
      /**
       * Status
       * @description API response status
       */
      status: string;
      /**
       * Ticker
       * @description Cryptocurrency ticker symbol
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
 * Type of POLYGON's POLYGON_GET_DIVIDENDS tool input.
 */
type POLYGON_GET_DIVIDENDS_INPUT = {
  /**
   * Cash Amount
   * @description Filter by cash amount
   * @default null
   */
  cash_amount: number | null;
  /**
   * Declaration Date
   * @description Filter by declaration date (YYYY-MM-DD)
   * @default null
   */
  declaration_date: string | null;
  /**
   * Dividend Type
   * @description Filter by dividend type code
   * @default null
   */
  dividend_type: string | null;
  /**
   * Ex Dividend Date
   * @description Filter by ex-dividend date (YYYY-MM-DD)
   * @default null
   */
  ex_dividend_date: string | null;
  /**
   * Frequency
   * @description Filter by dividend frequency
   * @default null
   * @enum {string|null}
   */
  frequency: "annual" | "quarterly" | "monthly" | "semiannual" | null;
  /**
   * Limit
   * @description Limit number of results (1-1000)
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Sort order (ascending or descending)
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Payment Date
   * @description Filter by payment date (YYYY-MM-DD)
   * @default null
   */
  payment_date: string | null;
  /**
   * Record Date
   * @description Filter by record date (YYYY-MM-DD)
   * @default null
   */
  record_date: string | null;
  /**
   * Skip
   * @description Number of records to skip (pagination)
   * @default null
   */
  skip: number | null;
  /**
   * Sort
   * @description Field to sort by (e.g., ex_dividend_date)
   * @default null
   */
  sort: string | null;
  /**
   * Ticker
   * @description Filter by ticker symbol
   * @default null
   */
  ticker: string | null;
};

/**
 * Type of POLYGON's POLYGON_GET_DIVIDENDS tool output.
 */
type POLYGON_GET_DIVIDENDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of items returned in this response
       */
      count: number;
      /**
       * Next Url
       * @description URL for next page of results, if any
       * @default null
       */
      next_url: string | null;
      /**
       * Request Id
       * @description Unique request identifier
       */
      request_id: string;
      /**
       * Results
       * @description List of dividend records matching the query
       */
      results: {
          /**
           * Cash Amount
           * @description Cash amount per share
           * @default null
           */
          cash_amount: number | null;
          /**
           * Declaration Date
           * @description Date dividend was declared (YYYY-MM-DD)
           * @default null
           */
          declaration_date: string | null;
          /**
           * Dividend Type
           * @description Type of dividend (e.g., 'CD', 'SC')
           * @default null
           */
          dividend_type: string | null;
          /**
           * Ex Dividend Date
           * @description Ex-dividend date (YYYY-MM-DD)
           * @default null
           */
          ex_dividend_date: string | null;
          /**
           * Frequency
           * @description Dividend frequency (e.g., 'annual', 'quarterly')
           * @default null
           * @enum {string|null}
           */
          frequency: "annual" | "quarterly" | "monthly" | "semiannual" | null;
          /**
           * Id
           * @description Unique identifier for this dividend record
           */
          id: string;
          /**
           * Payment Date
           * @description Payment date (YYYY-MM-DD)
           * @default null
           */
          payment_date: string | null;
          /**
           * Record Date
           * @description Record date (YYYY-MM-DD)
           * @default null
           */
          record_date: string | null;
          /**
           * Ticker
           * @description Stock ticker symbol
           */
          ticker: string;
      }[];
      /**
       * Status
       * @description API response status
       */
      status: string;
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
 * Type of POLYGON's POLYGON_GET_MARKET_HOLIDAYS tool input.
 */
type POLYGON_GET_MARKET_HOLIDAYS_INPUT = object;

/**
 * Type of POLYGON's POLYGON_GET_MARKET_HOLIDAYS tool output.
 */
type POLYGON_GET_MARKET_HOLIDAYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Close
       * @description Closing time in HH:mm format for half-day early close
       * @default null
       */
      close: string | null;
      /**
       * Date
       * @description Date of the holiday or half-day in YYYY-MM-DD format
       */
      date: string;
      /**
       * Description
       * @description Description of the holiday or half-day
       */
      description: string;
      /**
       * Exchange
       * @description The exchange for the holiday, e.g., NYSE
       */
      exchange: string;
      /**
       * Is Open
       * @description Whether the market is open on this date
       */
      isOpen: boolean;
      /**
       * Market
       * @description The market type, e.g., stocks
       */
      market: string;
      /**
       * Name
       * @description Name of the holiday or early closure
       */
      name: string;
      /**
       * Open
       * @description Opening time in HH:mm format if different from regular open
       * @default null
       */
      open: string | null;
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
 * Type of POLYGON's POLYGON_GET_MARKET_STATUS tool input.
 */
type POLYGON_GET_MARKET_STATUS_INPUT = object;

/**
 * Type of POLYGON's POLYGON_GET_MARKET_STATUS tool output.
 */
type POLYGON_GET_MARKET_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Early Close
       * @description Whether early market hours are closed.
       */
      earlyClose: boolean;
      /**
       * Early Open
       * @description Whether early market hours are open.
       */
      earlyOpen: boolean;
      /**
       * Exchange
       * @description Name of the exchange (e.g., 'NYSE').
       */
      exchange: string;
      /**
       * Market
       * @description Which market this status is for (e.g., 'stocks').
       */
      market: string;
      /**
       * Market Close
       * @description Whether the market is currently closed.
       */
      marketClose: boolean;
      /**
       * Market Open
       * @description Whether the market is currently open.
       */
      marketOpen: boolean;
      /**
       * Next Close
       * @description Next close time in ISO 8601 format.
       */
      nextClose: string;
      /**
       * Next Open
       * @description Next open time in ISO 8601 format.
       */
      nextOpen: string;
      /**
       * Server Time
       * @description Current server time in ISO 8601 format.
       */
      serverTime: string;
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
 * Type of POLYGON's POLYGON_GET_NEWS tool input.
 */
type POLYGON_GET_NEWS_INPUT = {
  /**
   * Cursor
   * @description Pagination token for the next page of results
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Number of results to return (1–100)
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Sort order of results
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Published Utc.Gte
   * @description Return articles published on or after this ISO 8601 timestamp
   * @default null
   */
  "published_utc.gte": string | null;
  /**
   * Published Utc.Lte
   * @description Return articles published on or before this ISO 8601 timestamp
   * @default null
   */
  "published_utc.lte": string | null;
  /**
   * Sort
   * @description Field to sort by (only 'published_utc' supported)
   * @default null
   * @constant
   */
  sort: "published_utc";
  /**
   * Ticker
   * @description Ticker symbol to filter news (e.g., 'AAPL')
   * @default null
   */
  ticker: string | null;
};

/**
 * Type of POLYGON's POLYGON_GET_NEWS tool output.
 */
type POLYGON_GET_NEWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of news items returned
       */
      count: number;
      /**
       * Next Url
       * @description URL for the next page of results, if available
       * @default null
       */
      next_url: string | null;
      /**
       * Results
       * @description List of news article objects
       */
      results: {
          /**
           * Amp Url
           * @description AMP-optimized URL, if available
           * @default null
           */
          amp_url: string | null;
          /**
           * Article Url
           * @description URL to the full article
           */
          article_url: string;
          /**
           * Author
           * @description Author of the article
           * @default null
           */
          author: string | null;
          /**
           * Description
           * @description Short description or summary
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique article ID
           */
          id: string;
          /**
           * Image Url
           * @description Image URL, if available
           * @default null
           */
          image_url: string | null;
          /**
           * Keywords
           * @description List of keywords associated with the article
           * @default null
           */
          keywords: string[] | null;
          /**
           * Published Utc
           * @description Publication timestamp in ISO 8601 format
           */
          published_utc: string;
          /**
           * Publisher
           * @description News article publisher info
           */
          publisher: {
              /**
               * Favicon Url
               * @description Publisher favicon URL
               * @default null
               */
              favicon_url: string | null;
              /**
               * Homepage Url
               * @description Publisher homepage URL
               * @default null
               */
              homepage_url: string | null;
              /**
               * Logo Url
               * @description Publisher logo URL
               * @default null
               */
              logo_url: string | null;
              /**
               * Name
               * @description Publisher name
               */
              name: string;
          };
          /**
           * Source
           * @description Source of the content
           * @default null
           */
          source: string | null;
          /**
           * Tickers
           * @description List of related ticker symbols
           */
          tickers: string[];
          /**
           * Title
           * @description Article headline title
           */
          title: string;
      }[];
      /**
       * Status
       * @description API response status
       */
      status: string;
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
 * Type of POLYGON's POLYGON_GET_REFERENCE_CONDITIONS tool input.
 */
type POLYGON_GET_REFERENCE_CONDITIONS_INPUT = {
  /**
   * Asset Class
   * @description Asset class to filter condition codes. One of 'stocks' or 'options'.
   * @default null
   * @enum {string|null}
   */
  asset_class: "stocks" | "options" | null;
  /**
   * Data Type
   * @description Data type to filter condition codes. One of 'trades' or 'quotes'.
   * @default null
   * @enum {string|null}
   */
  data_type: "trades" | "quotes" | null;
  /**
   * Id
   * @description Specific condition code identifier to retrieve. If omitted, all codes are returned.
   * @default null
   */
  id: string | null;
};

/**
 * Type of POLYGON's POLYGON_GET_REFERENCE_CONDITIONS tool output.
 */
type POLYGON_GET_REFERENCE_CONDITIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of condition code definitions matching filters.
       */
      results: {
          /**
           * Asset Class
           * @description Asset class this condition applies to.
           */
          asset_class: string;
          /**
           * Id
           * @description Condition code identifier.
           */
          id: string;
          /**
           * Name
           * @description Human-readable name of the condition.
           */
          name: string;
          /**
           * Primary
           * @description Whether this code is considered primary.
           */
          primary: boolean;
          /**
           * Type
           * @description Type of condition: 'trade' or 'quote'.
           */
          type: string;
      }[];
      /**
       * Status
       * @description Request status.
       */
      status: string;
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
 * Type of POLYGON's POLYGON_GET_REFERENCE_EXCHANGES tool input.
 */
type POLYGON_GET_REFERENCE_EXCHANGES_INPUT = {
  /**
   * Asset Class
   * @description Filter by asset class. One of 'stocks', 'options', 'crypto', 'fx'.
   * @default null
   * @enum {string|null}
   */
  asset_class: "stocks" | "options" | "crypto" | "fx" | null;
  /**
   * Locale
   * @description Filter by locale (e.g., 'us').
   * @default null
   */
  locale: string | null;
};

/**
 * Type of POLYGON's POLYGON_GET_REFERENCE_EXCHANGES tool output.
 */
type POLYGON_GET_REFERENCE_EXCHANGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Id
       * @description ID of the API request.
       */
      request_id: string;
      /**
       * Results
       * @description List of supported exchanges.
       */
      results: {
          /**
           * Id
           * @description Exchange code.
           */
          id: string;
          /**
           * Locale
           * @description Region or locale of the exchange.
           */
          locale: string;
          /**
           * Market
           * @description Market category.
           */
          market: string;
          /**
           * Mic
           * @description Market identifier code.
           */
          mic: string;
          /**
           * Name
           * @description Exchange name.
           */
          name: string;
          /**
           * Type
           * @description Exchange type.
           */
          type: string;
      }[];
      /**
       * Status
       * @description Request status.
       */
      status: string;
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
 * Type of POLYGON's POLYGON_GET_SPLITS tool input.
 */
type POLYGON_GET_SPLITS_INPUT = {
  /**
   * Execution Date.Gte
   * @description Filter splits executed on or after this date (YYYY-MM-DD)
   * @default null
   */
  "execution_date.gte": string | null;
  /**
   * Execution Date.Lte
   * @description Filter splits executed on or before this date (YYYY-MM-DD)
   * @default null
   */
  "execution_date.lte": string | null;
  /**
   * Limit
   * @description Maximum number of results to return (1-1000)
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Sort order: 'asc' or 'desc' (default: 'desc')
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field to sort results by (default: 'execution_date')
   * @default null
   */
  sort: string | null;
  /**
   * Ticker
   * @description Stock ticker symbol to query splits for, e.g., 'AAPL'
   * @default null
   */
  ticker: string | null;
};

/**
 * Type of POLYGON's POLYGON_GET_SPLITS tool output.
 */
type POLYGON_GET_SPLITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of results returned by this call
       * @default null
       */
      count: number | null;
      /**
       * Next Url
       * @description URL to retrieve the next page of results, if any
       * @default null
       */
      next_url: string | null;
      /**
       * Request Id
       * @description Unique request identifier
       */
      request_id: string;
      /**
       * Results
       * @description List of split event objects
       */
      results: {
          /**
           * Description
           * @description Description of the split event
           * @default null
           */
          description: string | null;
          /**
           * Execution Date
           * @description Date the split was executed (YYYY-MM-DD)
           */
          execution_date: string;
          /**
           * Id
           * @description Unique identifier of the split event
           */
          id: string;
          /**
           * Ratio
           * @description Ratio of split (to/from)
           */
          ratio: number;
          /**
           * Split From
           * @description Number of shares before the split
           */
          split_from: number;
          /**
           * Split To
           * @description Number of shares after the split
           */
          split_to: number;
          /**
           * Ticker
           * @description Ticker symbol of the split
           */
          ticker: string;
      }[];
      /**
       * Status
       * @description Status of the API response
       */
      status: string;
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
 * Type of POLYGON's POLYGON_GET_TECHNICAL_INDICATOR_EMA tool input.
 */
type POLYGON_GET_TECHNICAL_INDICATOR_EMA_INPUT = {
  /**
   * Adjusted
   * @description Whether to use adjusted data for EMA calculation
   * @default true
   */
  adjusted: boolean | null;
  /**
   * Expand Underlying
   * @description Whether to include underlying aggregates used to calculate EMA
   * @default false
   */
  expand_underlying: boolean | null;
  /**
   * Limit
   * @description Maximum number of results to return
   * @default 50
   */
  limit: number | null;
  /**
   * Order
   * @description Order of results
   * @default desc
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Series Type
   * @description Series type to use for the calculation
   * @default close
   * @enum {string|null}
   */
  series_type: "open" | "high" | "low" | "close" | null;
  /**
   * Ticker
   * @description Stock ticker symbol to query, e.g., 'AAPL'
   */
  ticker?: string;
  /**
   * Timespan
   * @description Aggregate timespan for each data point, e.g., 'day' or 'minute'
   */
  timespan?: string;
  /**
   * Window
   * @description Number of periods to calculate the EMA over (window size)
   */
  window?: number;
};

/**
 * Type of POLYGON's POLYGON_GET_TECHNICAL_INDICATOR_EMA tool output.
 */
type POLYGON_GET_TECHNICAL_INDICATOR_EMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Url
       * @description URL to retrieve the next page of results, if any
       * @default null
       */
      next_url: string | null;
      /**
       * Request Id
       * @description Identifier for the API request
       */
      request_id: string;
      /**
       * Results
       * @description List of EMA results
       */
      results: {
          /**
           * Timestamp
           * @description Epoch time in milliseconds for the EMA data point
           */
          timestamp: number;
          /**
           * Value
           * @description Calculated EMA value
           */
          value: number;
      }[];
      /**
       * Status
       * @description Status of the API response
       */
      status: string;
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
 * Type of POLYGON's POLYGON_GET_TECHNICAL_INDICATOR_SMA tool input.
 */
type POLYGON_GET_TECHNICAL_INDICATOR_SMA_INPUT = {
  /**
   * Adjusted
   * @description Whether to use adjusted data
   * @default true
   */
  adjusted: boolean | null;
  /**
   * Expand Underlying
   * @description Whether to include underlying aggregates
   * @default false
   */
  expand_underlying: boolean | null;
  /**
   * Limit
   * @description Maximum number of results to return
   * @default 50
   */
  limit: number | null;
  /**
   * Order
   * @description Order of results
   * @default desc
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Series Type
   * @description Series type to use for the calculation
   * @default close
   * @enum {string|null}
   */
  series_type: "open" | "high" | "low" | "close" | null;
  /**
   * Ticker
   * @description Stock ticker symbol to query, e.g., 'AAPL'
   */
  ticker?: string;
  /**
   * Timespan
   * @description Aggregate timespan for each data point, e.g., 'day' or 'minute'
   */
  timespan?: string;
  /**
   * Window
   * @description Number of periods to calculate the SMA over (window size)
   */
  window?: number;
};

/**
 * Type of POLYGON's POLYGON_GET_TECHNICAL_INDICATOR_SMA tool output.
 */
type POLYGON_GET_TECHNICAL_INDICATOR_SMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Url
       * @description URL to retrieve the next page of results, if any
       * @default null
       */
      next_url: string | null;
      /**
       * Request Id
       * @description Identifier for the API request
       */
      request_id: string;
      /**
       * Results
       * @description List of SMA results
       */
      results: {
          /**
           * Timestamp
           * @description Epoch time in milliseconds for the data point
           */
          timestamp: number;
          /**
           * Value
           * @description Calculated SMA value
           */
          value: number;
      }[];
      /**
       * Status
       * @description Status of the API response
       */
      status: string;
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
 * Type of POLYGON's POLYGON_GET_TICKER_DETAILS tool input.
 */
type POLYGON_GET_TICKER_DETAILS_INPUT = {
  /**
   * Date
   * Format: date
   * @description Point-in-time reference date in YYYY-MM-DD format. Defaults to most recent.
   * @default null
   */
  date: unknown;
  /**
   * Ticker
   * @description The ticker symbol to look up (e.g., 'AAPL')
   */
  ticker?: string;
};

/**
 * Type of POLYGON's POLYGON_GET_TICKER_DETAILS tool output.
 */
type POLYGON_GET_TICKER_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Id
       * @description Polygon request ID for debugging
       * @default null
       */
      request_id: string | null;
      /**
       * Results
       * @description Detailed ticker overview
       * @default null
       */
      results: {
          /**
           * Active
           * @description Whether the ticker is active
           * @default null
           */
          active: boolean | null;
          /**
           * Address
           * @description Address information
           * @default null
           */
          address: {
              /**
               * Address1
               * @description Address line 1
               * @default null
               */
              address1: string | null;
              /**
               * City
               * @description City
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country
               * @default null
               */
              country: string | null;
              /**
               * Postal Code
               * @description ZIP or postal code
               * @default null
               */
              postal_code: string | null;
              /**
               * State
               * @description State or region
               * @default null
               */
              state: string | null;
          } | null;
          /**
           * Branding
           * @description Branding details
           * @default null
           */
          branding: {
              /**
               * Icon Url
               * @description Icon URL
               * @default null
               */
              icon_url: string | null;
              /**
               * Logo Url
               * @description Logo URL
               * @default null
               */
              logo_url: string | null;
          } | null;
          /**
           * Cik
           * @description Central Index Key (SEC ID)
           * @default null
           */
          cik: string | null;
          /**
           * Composite Figi
           * @description Composite Financial Instrument Global Identifier
           * @default null
           */
          composite_figi: string | null;
          /**
           * Currency Name
           * @description Trading currency name
           * @default null
           */
          currency_name: string | null;
          /**
           * Description
           * @description Company or business description
           * @default null
           */
          description: string | null;
          /**
           * Homepage Url
           * @description Main homepage URL
           * @default null
           */
          homepage_url: string | null;
          /**
           * List Date
           * @description IPO or listing date
           * @default null
           */
          list_date: string | null;
          /**
           * Locale
           * @description Locale (e.g., 'us')
           * @default null
           */
          locale: string | null;
          /**
           * Market
           * @description Market type (e.g., 'stocks')
           * @default null
           */
          market: string | null;
          /**
           * Market Cap
           * @description Market capitalization
           * @default null
           */
          market_cap: number | null;
          /**
           * Name
           * @description The company or entity name
           * @default null
           */
          name: string | null;
          /**
           * Phone Number
           * @description Main phone number
           * @default null
           */
          phone_number: string | null;
          /**
           * Primary Exchange
           * @description Exchange code
           * @default null
           */
          primary_exchange: string | null;
          /**
           * Round Lot
           * @description Round lot size
           * @default null
           */
          round_lot: number | null;
          /**
           * Share Class Figi
           * @description Share Class FIGI
           * @default null
           */
          share_class_figi: string | null;
          /**
           * Share Class Shares Outstanding
           * @description Share class shares outstanding
           * @default null
           */
          share_class_shares_outstanding: number | null;
          /**
           * Sic Code
           * @description Standard Industrial Classification code
           * @default null
           */
          sic_code: string | null;
          /**
           * Sic Description
           * @description SIC code description
           * @default null
           */
          sic_description: string | null;
          /**
           * Ticker
           * @description The ticker symbol
           * @default null
           */
          ticker: string | null;
          /**
           * Ticker Root
           * @description Root ticker, if applicable
           * @default null
           */
          ticker_root: string | null;
          /**
           * Total Employees
           * @description Number of employees
           * @default null
           */
          total_employees: number | null;
          /**
           * Type
           * @description Type of asset (e.g., 'CS', 'ADR')
           * @default null
           */
          type: string | null;
          /**
           * Weighted Shares Outstanding
           * @description Weighted shares outstanding
           * @default null
           */
          weighted_shares_outstanding: number | null;
      } | null;
      /**
       * Status
       * @description Response status (e.g., 'OK')
       * @default null
       */
      status: string | null;
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
 * Type of POLYGON's POLYGON_GET_TICKER_TYPES tool input.
 */
type POLYGON_GET_TICKER_TYPES_INPUT = {
  /**
   * Asset Class
   * @description Filter by asset class. One of 'stocks', 'options', 'crypto', 'fx'.
   * @default null
   * @enum {string|null}
   */
  asset_class: "stocks" | "options" | "crypto" | "fx" | null;
  /**
   * Limit
   * @description Maximum number of results to return (1–1000).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip for pagination (0-indexed).
   * @default null
   */
  offset: number | null;
  /**
   * Type
   * @description Filter by the ticker type code (e.g., 'CS' for common stock).
   * @default null
   */
  type: string | null;
};

/**
 * Type of POLYGON's POLYGON_GET_TICKER_TYPES tool output.
 */
type POLYGON_GET_TICKER_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Id
       * @description Unique request identifier returned by Polygon.io.
       */
      request_id: string;
      /**
       * Results
       * @description List of ticker type records.
       */
      results: {
          /**
           * Asset Class
           * @description Asset class for this type (e.g., 'stocks').
           */
          asset_class: string;
          /**
           * Description
           * @description Description of the ticker type.
           */
          description: string;
          /**
           * Locale
           * @description Market locale or country (e.g., 'US').
           */
          locale: string;
          /**
           * Type
           * @description Ticker type code (e.g., 'CS').
           */
          type: string;
      }[];
      /**
       * Status
       * @description Response status (e.g., 'OK').
       */
      status: string;
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
 * Type of POLYGON's POLYGON_IO_GET_ALL_TICKERS tool input.
 */
type POLYGON_IO_GET_ALL_TICKERS_INPUT = {
  /**
   * Active
   * @description If true, only return symbols that are currently active.
   * @default null
   */
  active: boolean | null;
  /**
   * Cik
   * @description Filter by CIK identifier.
   * @default null
   */
  cik: string | null;
  /**
   * Cursor
   * @description Pagination cursor to fetch next page of results. Pass the 'cursor' value from a previous response.
   * @default null
   */
  cursor: string | null;
  /**
   * Cusip
   * @description Filter by CUSIP identifier.
   * @default null
   */
  cusip: string | null;
  /**
   * Date
   * @description Filter tickers as of a specific date, format YYYY-MM-DD.
   * @default null
   */
  date: string | null;
  /**
   * Exchange
   * @description Filter by specific exchange code (e.g., 'XNAS', 'XNYS').
   * @default null
   */
  exchange: string | null;
  /**
   * Limit
   * @description Maximum number of results to return (1-1000).
   * @default null
   */
  limit: number | null;
  /**
   * Market
   * @description Filter by market (e.g., 'stocks', 'crypto', 'fx', 'options').
   * @default null
   */
  market: string | null;
  /**
   * Order
   * @description Sort order direction: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Search
   * @description Partial text search on ticker symbol or company name.
   * @default null
   */
  search: string | null;
  /**
   * Sort
   * @description Field name to sort by (e.g., 'ticker', 'name', 'market', 'primary_exchange', 'last_updated_utc').
   * @default null
   */
  sort: string | null;
  /**
   * Ticker
   * @description Exact match filter on a single ticker symbol.
   * @default null
   */
  ticker: string | null;
  /**
   * Type
   * @description Filter by asset type (e.g., 'CS' for common stock, 'ETF', etc.).
   * @default null
   */
  type: string | null;
};

/**
 * Type of POLYGON's POLYGON_IO_GET_ALL_TICKERS tool output.
 */
type POLYGON_IO_GET_ALL_TICKERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of results returned in this page.
       */
      count: number;
      /**
       * Next Url
       * @description URL to fetch the next page of results, if pagination applies.
       * @default null
       */
      next_url: string | null;
      /**
       * Results
       * @description List of matching ticker objects.
       */
      results: {
          /**
           * Active
           * @description Is the asset active.
           */
          active: boolean;
          /**
           * Cik
           * @description CIK identifier.
           * @default null
           */
          cik: string | null;
          /**
           * Composite Figi
           * @description Composite FIGI identifier.
           * @default null
           */
          composite_figi: string | null;
          /**
           * Currency Name
           * @description Name of the currency.
           * @default null
           */
          currency_name: string | null;
          /**
           * Last Updated Utc
           * @description Last update date in UTC.
           */
          last_updated_utc: string;
          /**
           * Locale
           * @description Locale of the ticker.
           */
          locale: string;
          /**
           * Market
           * @description Market the ticker is traded on.
           */
          market: string;
          /**
           * Name
           * @description Name of the ticker.
           */
          name: string;
          /**
           * Primary Exchange
           * @description Primary exchange.
           */
          primary_exchange: string;
          /**
           * Share Class Figi
           * @description Share class FIGI identifier.
           * @default null
           */
          share_class_figi: string | null;
          /**
           * Ticker
           * @description The ticker symbol.
           */
          ticker: string;
          /**
           * Type
           * @description The type of the asset.
           */
          type: string;
      }[];
      /**
       * Status
       * @description Response status (e.g., 'OK').
       */
      status: string;
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
 * Type of POLYGON's POLYGON_IO_GET_CONDITION_CODES tool input.
 */
type POLYGON_IO_GET_CONDITION_CODES_INPUT = {
  /**
   * Asset Class
   * @description Filter by asset class, e.g., 'stocks', 'crypto', 'fx'.
   * @default null
   */
  asset_class: string | null;
  /**
   * Data Type
   * @description Filter by data type: 'trade' or 'quote'.
   * @default null
   * @enum {string|null}
   */
  data_type: "trade" | "quote" | null;
  /**
   * Id
   * @description Filter by specific condition code ID, e.g., 'P'.
   * @default null
   */
  id: string | null;
  /**
   * Limit
   * @description Maximum number of results to return (server default: 50).
   * @default null
   */
  limit: number | null;
  /**
   * Sort
   * @description Sort order of results: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  sort: "asc" | "desc" | null;
};

/**
 * Type of POLYGON's POLYGON_IO_GET_CONDITION_CODES tool output.
 */
type POLYGON_IO_GET_CONDITION_CODES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Url
       * @description URL to fetch next page of results if pagination is available.
       * @default null
       */
      next_url: string | null;
      /**
       * Request Id
       * @description Polygon.io request tracking ID.
       */
      request_id: string;
      /**
       * Results
       * @description List of condition code objects.
       */
      results: {
          /**
           * Asset Class
           * @description Asset class, e.g., 'stocks'.
           */
          asset_class: string;
          /**
           * Description
           * @description Human-readable definition of the condition code.
           */
          description: string;
          /**
           * Id
           * @description Condition code identifier.
           */
          id: string;
          /**
           * Type
           * @description Type of operation, e.g., 'trade' or 'quote'.
           */
          type: string;
      }[];
      /**
       * Status
       * @description Response status, e.g., 'OK'.
       */
      status: string;
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
 * Type of POLYGON's POLYGON_IO_GET_DAILY_TICKER_SUMMARY tool input.
 */
type POLYGON_IO_GET_DAILY_TICKER_SUMMARY_INPUT = {
  /**
   * Adjusted
   * @description Whether to return adjusted data. Defaults to true.
   * @default true
   */
  adjusted: boolean;
  /**
   * Date
   * @description Date in YYYY-MM-DD format (e.g., '2021-10-14')
   */
  date?: string;
  /**
   * Stocks Ticker
   * @description Stock ticker symbol (e.g., 'AAPL')
   */
  stocks_ticker?: string;
};

/**
 * Type of POLYGON's POLYGON_IO_GET_DAILY_TICKER_SUMMARY tool output.
 */
type POLYGON_IO_GET_DAILY_TICKER_SUMMARY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Id
       * @description Polygon.io request identifier.
       */
      request_id: string;
      /**
       * Results
       * @description List containing the summary data for the ticker.
       */
      results: {
          /**
           * T
           * @description Ticker symbol.
           */
          T: string;
          /**
           * C
           * @description Close price.
           */
          c: number;
          /**
           * H
           * @description High price.
           */
          h: number;
          /**
           * L
           * @description Low price.
           */
          l: number;
          /**
           * N
           * @description Number of transactions in the aggregate window.
           */
          n: number;
          /**
           * O
           * @description Open price.
           */
          o: number;
          /**
           * T
           * @description Unix millisecond timestamp for the aggregate window close.
           */
          t: number;
          /**
           * V
           * @description Aggregate volume for the day.
           */
          v: number;
          /**
           * Vw
           * @description Volume weighted average price.
           */
          vw: number;
      }[];
      /**
       * Status
       * @description Status of the API request.
       */
      status: string;
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
 * Type of POLYGON's POLYGON_IO_GET_DIVIDENDS tool input.
 */
type POLYGON_IO_GET_DIVIDENDS_INPUT = {
  /**
   * Cash Amount
   * @description Filter by cash amount of the dividend per share.
   * @default null
   */
  cash_amount: number | null;
  /**
   * Declaration Date
   * @description Filter by declaration date (YYYY-MM-DD).
   * @default null
   */
  declaration_date: string | null;
  /**
   * Dividend Type
   * @description Type of dividend: 'CD' for consistent cash, 'SC' for special cash, 'LT' for long-term capital gain, 'ST' for short-term capital gain.
   * @default null
   * @enum {string|null}
   */
  dividend_type: "CD" | "SC" | "LT" | "ST" | null;
  /**
   * Ex Dividend Date
   * @description Filter by ex-dividend date (YYYY-MM-DD).
   * @default null
   */
  ex_dividend_date: string | null;
  /**
   * Frequency
   * @description Number of dividend payments per year. 0=one-time, 1=annually, 2=bi-annually, 4=quarterly, 12=monthly, 24=bi-monthly, 52=weekly.
   * @default null
   * @enum {integer|null}
   */
  frequency: 0 | 1 | 2 | 4 | 12 | 24 | 52 | null;
  /**
   * Limit
   * @description Limit number of results (1-1000).
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Order of sorting: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Pay Date
   * @description Filter by payment date (YYYY-MM-DD).
   * @default null
   */
  pay_date: string | null;
  /**
   * Record Date
   * @description Filter by record date (YYYY-MM-DD).
   * @default null
   */
  record_date: string | null;
  /**
   * Sort
   * @description Field to sort by; only 'ex_dividend_date' is supported.
   * @default null
   * @constant
   */
  sort: "ex_dividend_date";
  /**
   * Ticker
   * @description Case-sensitive ticker symbol, e.g., 'AAPL'.
   * @default null
   */
  ticker: string | null;
};

/**
 * Type of POLYGON's POLYGON_IO_GET_DIVIDENDS tool output.
 */
type POLYGON_IO_GET_DIVIDENDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of results returned in this response.
       * @default null
       */
      count: number | null;
      /**
       * Next Url
       * @description URL to fetch the next page of results, if any.
       * @default null
       */
      next_url: string | null;
      /**
       * Results
       * @description List of dividend event objects.
       * @default null
       */
      results: {
          /**
           * Cash Amount
           * @description Cash amount of the dividend per share.
           * @default null
           */
          cash_amount: number | null;
          /**
           * Currency
           * @description Currency code in which the dividend is paid, e.g., 'USD'.
           * @default null
           */
          currency: string | null;
          /**
           * Declaration Date
           * @description Date the dividend was declared (YYYY-MM-DD).
           * @default null
           */
          declaration_date: string | null;
          /**
           * Dividend Type
           * @description Type of dividend: 'CD', 'SC', 'LT', or 'ST'.
           * @default null
           */
          dividend_type: string | null;
          /**
           * Ex Dividend Date
           * @description Date the stock trades ex-dividend (YYYY-MM-DD).
           * @default null
           */
          ex_dividend_date: string | null;
          /**
           * Frequency
           * @description Number of times per year the dividend is paid.
           * @default null
           */
          frequency: number | null;
          /**
           * Id
           * @description Unique identifier of the dividend event.
           */
          id: string;
          /**
           * Pay Date
           * @description Date the dividend is paid (YYYY-MM-DD).
           * @default null
           */
          pay_date: string | null;
          /**
           * Record Date
           * @description Date by which shares must be held to receive the dividend (YYYY-MM-DD).
           * @default null
           */
          record_date: string | null;
          /**
           * Ticker
           * @description Ticker symbol for the dividend event.
           */
          ticker: string;
      }[] | null;
      /**
       * Status
       * @description Response status string, e.g., 'OK'.
       * @default null
       */
      status: string | null;
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
 * Type of POLYGON's POLYGON_IO_GET_EMA tool input.
 */
type POLYGON_IO_GET_EMA_INPUT = {
  /**
   * Adjusted
   * @description Whether to adjust results for splits/dividends. Defaults to True.
   * @default true
   */
  adjusted: boolean | null;
  /**
   * Expand Underlying
   * @description Include underlying price data. Defaults to False.
   * @default false
   */
  expand_underlying: boolean | null;
  /**
   * Limit
   * @description Maximum number of results to return (1-5000). Defaults to 100.
   * @default 100
   */
  limit: number | null;
  /**
   * Order
   * @description Sort order for results. Defaults to 'desc'.
   * @default desc
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Series Type
   * @description Price series to use. Defaults to 'close'.
   * @default close
   * @enum {string|null}
   */
  series_type: "close" | "open" | "high" | "low" | null;
  /**
   * Stock Ticker
   * @description The stock ticker symbol.
   */
  stock_ticker?: string;
  /**
   * Timespan
   * @description The timespan for each period (e.g., 'day', 'minute', 'hour').
   */
  timespan?: string;
  /**
   * Window
   * @description Number of periods to calculate the EMA (must be ≥1).
   */
  window?: number;
};

/**
 * Type of POLYGON's POLYGON_IO_GET_EMA tool output.
 */
type POLYGON_IO_GET_EMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Url
       * @description URL to fetch the next page of EMA results, if pagination applies.
       * @default null
       */
      next_url: string | null;
      /**
       * Results
       * @description Results including EMA values and optional underlying data.
       */
      results: {
          /**
           * Indicators
           * @description EMA indicator data.
           */
          indicators: {
              /**
               * Ema
               * @description List of EMA indicator values for each period.
               */
              ema: {
                  /**
                   * Timestamp
                   * @description UNIX timestamp in milliseconds for the EMA value.
                   */
                  timestamp: number;
                  /**
                   * Value
                   * @description EMA value at the given timestamp.
                   */
                  value: number;
              }[];
          };
          /**
           * Status
           * @description Status of the EMA request (e.g., 'OK').
           * @default null
           */
          status: string | null;
          /**
           * Ticker
           * @description The stock ticker symbol for the results.
           * @default null
           */
          ticker: string | null;
          /**
           * Underlying
           * @description Underlying price data returned if requested.
           * @default null
           */
          underlying: {
              /**
               * Close
               * @description Closing price for the bar.
               */
              close: number;
              /**
               * High
               * @description Highest price for the bar.
               */
              high: number;
              /**
               * Low
               * @description Lowest price for the bar.
               */
              low: number;
              /**
               * Open
               * @description Opening price for the bar.
               */
              open: number;
              /**
               * Timestamp
               * @description UNIX timestamp for the underlying price bar.
               */
              timestamp: number;
              /**
               * Volume
               * @description Trading volume for the bar.
               */
              volume: number;
          }[] | null;
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
 * Type of POLYGON's POLYGON_IO_GET_MACD tool input.
 */
type POLYGON_IO_GET_MACD_INPUT = {
  /**
   * Adjusted
   * @description Whether to use split-adjusted aggregates. Defaults to True.
   * @default true
   */
  adjusted: boolean | null;
  /**
   * Expand Underlying
   * @description Whether to include the underlying aggregates data. Defaults to False.
   * @default false
   */
  expand_underlying: boolean | null;
  /**
   * Limit
   * @description Maximum number of results to return (1-5000). Defaults to 10.
   * @default 10
   */
  limit: number | null;
  /**
   * Long Window
   * @description The number of periods for the long EMA window (e.g., 26).
   */
  long_window?: number;
  /**
   * Order
   * @description The order of results by timestamp. Defaults to 'desc'.
   * @default desc
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Series Type
   * @description The price field to use for calculations. Defaults to 'close'.
   * @default close
   * @enum {string|null}
   */
  series_type: "close" | "open" | "high" | "low" | null;
  /**
   * Short Window
   * @description The number of periods for the short EMA window (e.g., 12).
   */
  short_window?: number;
  /**
   * Signal Window
   * @description The number of periods for the signal line EMA window (e.g., 9).
   */
  signal_window?: number;
  /**
   * Stock Ticker
   * @description The case-sensitive ticker symbol for which to get MACD data (e.g., 'AAPL').
   */
  stock_ticker?: string;
  /**
   * Timespan
   * @description The size of the aggregate time window (e.g., 'day').
   */
  timespan?: string;
  /**
   * Timestamp
   * @description Filter by timestamp (YYYY-MM-DD or millisecond timestamp).
   * @default null
   */
  timestamp: string | null;
};

/**
 * Type of POLYGON's POLYGON_IO_GET_MACD tool output.
 */
type POLYGON_IO_GET_MACD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Url
       * @description URL to fetch the next page of results, if available.
       * @default null
       */
      next_url: string | null;
      /**
       * Request Id
       * @description Server-assigned request ID.
       * @default null
       */
      request_id: string | null;
      /**
       * MACDResults
       * @description MACD calculation results.
       * @default null
       */
      results: {
          /**
           * Underlying
           * @description Underlying aggregate data reference.
           * @default null
           */
          underlying: {
              /**
               * Url
               * @description URL to fetch the underlying aggregate bars used for MACD calculation.
               */
              url: string;
          } | null;
          /**
           * Values
           * @description List of MACD values and related metrics.
           * @default null
           */
          values: {
              /**
               * Histogram
               * @description The MACD histogram value at the timestamp.
               */
              histogram: number;
              /**
               * Signal
               * @description The MACD signal line value at the timestamp.
               */
              signal: number;
              /**
               * Timestamp
               * @description UNIX timestamp in milliseconds for the value.
               */
              timestamp: number;
              /**
               * Value
               * @description The MACD line value at the timestamp.
               */
              value: number;
          }[] | null;
      } | null;
      /**
       * Status
       * @description Status of the request (e.g., 'OK').
       * @default null
       */
      status: string | null;
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
 * Type of POLYGON's POLYGON_IO_GET_MARKET_HOLIDAYS tool input.
 */
type POLYGON_IO_GET_MARKET_HOLIDAYS_INPUT = object;

/**
 * Type of POLYGON's POLYGON_IO_GET_MARKET_HOLIDAYS tool output.
 */
type POLYGON_IO_GET_MARKET_HOLIDAYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of upcoming market holidays and half-days.
       */
      results: {
          /**
           * Close
           * @description Regular market closing time on this day in HH:MM:SS format.
           */
          close: string;
          /**
           * Date
           * @description Date of the holiday or half-day in YYYY-MM-DD format.
           */
          date: string;
          /**
           * Description
           * @description Description of the holiday or half-day.
           */
          description: string;
          /**
           * Exchange
           * @description Exchange or market name (e.g., 'NYSE', 'NASDAQ').
           */
          exchange: string;
          /**
           * Market
           * @description Market type (e.g., 'stocks', 'crypto').
           */
          market: string;
          /**
           * Open
           * @description Regular market opening time on this day in HH:MM:SS format.
           */
          open: string;
      }[];
      /**
       * Status
       * @description Response status, e.g., 'OK'.
       */
      status: string;
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
 * Type of POLYGON's POLYGON_IO_GET_MARKET_STATUS tool input.
 */
type POLYGON_IO_GET_MARKET_STATUS_INPUT = object;

/**
 * Type of POLYGON's POLYGON_IO_GET_MARKET_STATUS tool output.
 */
type POLYGON_IO_GET_MARKET_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * After Hours
       * @description Whether the after-hours session is currently open.
       */
      afterHours: boolean;
      /**
       * Currencies
       * @description Status of currency markets by type (e.g., 'crypto': 'open').
       */
      currencies: {
          [key: string]: string;
      };
      /**
       * Early Hours
       * @description Whether the pre-market session is currently open.
       */
      earlyHours: boolean;
      /**
       * Exchanges
       * @description Status of stock exchanges by name (e.g., 'nasdaq': 'extended-hours').
       */
      exchanges: {
          [key: string]: string;
      };
      /**
       * Market
       * @description Overall market status ('open', 'closed', 'extended-hours').
       */
      market: string;
      /**
       * Server Time
       * @description Server timestamp in ISO-8601 format.
       */
      serverTime: string;
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
 * Type of POLYGON's POLYGON_IO_GET_NEWS tool input.
 */
type POLYGON_IO_GET_NEWS_INPUT = {
  /**
   * Cursor
   * @description Cursor for pagination. Use the 'next_url' or cursor value from previous response.
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Limit the number of results (1-1000). Defaults to 10 if not provided.
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Order of results by published_utc: 'asc' or 'desc'
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Published Utc.Gte
   * @description Return articles published on or after this UTC date/time (ISO-8601), e.g., '2022-01-01T00:00:00Z'
   * @default null
   */
  "published_utc.gte": string | null;
  /**
   * Published Utc.Lte
   * @description Return articles published on or before this UTC date/time (ISO-8601), e.g., '2022-01-31T23:59:59Z'
   * @default null
   */
  "published_utc.lte": string | null;
  /**
   * Sort
   * @description Field to sort by; only 'published_utc' is supported
   * @default null
   */
  sort: string | null;
  /**
   * Ticker
   * @description Only return news articles for this ticker symbol, e.g., 'AAPL'
   * @default null
   */
  ticker: string | null;
};

/**
 * Type of POLYGON's POLYGON_IO_GET_NEWS tool output.
 */
type POLYGON_IO_GET_NEWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Url
       * @description URL to fetch the next page of results, if available
       * @default null
       */
      next_url: string | null;
      /**
       * Request Id
       * @description Unique identifier for the request
       */
      request_id: string;
      /**
       * Results
       * @description List of news articles
       */
      results: {
          /**
           * Amp Url
           * @description Accelerated Mobile Page URL, if available
           * @default null
           */
          amp_url: string | null;
          /**
           * Article Url
           * @description URL to the full article
           */
          article_url: string;
          /**
           * Author
           * @description Author of the article
           * @default null
           */
          author: string | null;
          /**
           * Description
           * @description Summary of the article
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique article ID
           */
          id: string;
          /**
           * Image Url
           * @description Image URL of the article, if available
           * @default null
           */
          image_url: string | null;
          /**
           * Keywords
           * @description Keywords associated with the article
           * @default null
           */
          keywords: string[] | null;
          /**
           * Published Utc
           * @description Publish date/time in UTC (ISO-8601)
           */
          published_utc: string;
          /**
           * Publisher
           * @description Publisher details
           */
          publisher: {
              /**
               * Favicon Url
               * @description Publisher favicon URL
               * @default null
               */
              favicon_url: string | null;
              /**
               * Homepage Url
               * @description Publisher homepage URL
               */
              homepage_url: string;
              /**
               * Logo Url
               * @description Publisher logo URL
               * @default null
               */
              logo_url: string | null;
              /**
               * Name
               * @description Publisher name
               */
              name: string;
          };
          /**
           * Tickers
           * @description List of ticker symbols referenced in the article
           */
          tickers: string[];
          /**
           * Title
           * @description Headline of the article
           */
          title: string;
      }[];
      /**
       * Status
       * @description Response status, e.g., 'OK'
       */
      status: string;
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
 * Type of POLYGON's POLYGON_IO_GET_RSI tool input.
 */
type POLYGON_IO_GET_RSI_INPUT = {
  /**
   * Adjusted
   * @description Whether to use adjusted values (splits/dividends). Defaults to True.
   * @default true
   */
  adjusted: boolean | null;
  /**
   * Limit
   * @description Maximum number of results to return (1-5000). Defaults to 5000.
   * @default 5000
   */
  limit: number | null;
  /**
   * Order
   * @description Sort order of results. Defaults to 'desc'.
   * @default desc
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Series Type
   * @description Price field to use for calculation. Defaults to 'close'.
   * @default close
   * @enum {string|null}
   */
  series_type: "close" | "open" | "high" | "low" | null;
  /**
   * Stock Ticker
   * @description The stock ticker symbol (e.g., 'AAPL').
   */
  stock_ticker?: string;
  /**
   * Timespan
   * @description The size of the time window (e.g., 'day', 'minute', 'hour').
   */
  timespan?: string;
  /**
   * Timestamp
   * @description Return results before this timestamp (ms since epoch).
   * @default null
   */
  timestamp: number | null;
  /**
   * Timestamp Limit
   * @description Return results after this timestamp (ms since epoch).
   * @default null
   */
  timestampLimit: number | null;
  /**
   * Window
   * @description Lookback window for RSI calculation (must be 1). Defaults to 14.
   * @default 14
   */
  window: number | null;
};

/**
 * Type of POLYGON's POLYGON_IO_GET_RSI tool output.
 */
type POLYGON_IO_GET_RSI_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Url
       * @description URL to fetch the next page of RSI results, if available.
       * @default null
       */
      next_url: string | null;
      /**
       * Request Id
       * @description Server-assigned request ID.
       * @default null
       */
      request_id: string | null;
      /**
       * Results
       * @description List of RSI values and corresponding timestamps.
       * @default null
       */
      results: {
          /**
           * Timestamp
           * @description UNIX timestamp in milliseconds for the RSI value.
           */
          timestamp: number;
          /**
           * Value
           * @description Computed RSI value at this timestamp.
           */
          value: number;
      }[] | null;
      /**
       * Status
       * @description Status of the request (e.g., 'OK').
       * @default null
       */
      status: string | null;
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
 * Type of POLYGON's POLYGON_IO_GET_SMA tool input.
 */
type POLYGON_IO_GET_SMA_INPUT = {
  /**
   * Adjusted
   * @description Whether to adjust results for splits/dividends. Defaults to True.
   * @default true
   */
  adjusted: boolean | null;
  /**
   * Expand Underlying
   * @description Include underlying aggregate data. Defaults to False.
   * @default false
   */
  expand_underlying: boolean | null;
  /**
   * Fx Ticker
   * @description The forex ticker symbol (e.g., 'C:EURUSD').
   */
  fx_ticker?: string;
  /**
   * Limit
   * @description Maximum number of results to return (1-1000). Defaults to 250.
   * @default 250
   */
  limit: number | null;
  /**
   * Order
   * @description Sort order for results. Defaults to 'desc'.
   * @default desc
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Series Type
   * @description Price series to use. Defaults to 'close'.
   * @default close
   * @enum {string|null}
   */
  series_type: "close" | "open" | "high" | "low" | null;
  /**
   * Timespan
   * @description The timespan for each period (e.g., 'minute', 'hour', 'day').
   */
  timespan?: string;
  /**
   * Timestamp
   * @description Millisecond UNIX timestamp to anchor the indicator. Defaults to most recent.
   * @default null
   */
  timestamp: number | null;
  /**
   * Window
   * @description Number of periods to calculate the SMA (must be ≥1).
   */
  window?: number;
};

/**
 * Type of POLYGON's POLYGON_IO_GET_SMA tool output.
 */
type POLYGON_IO_GET_SMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Url
       * @description URL to fetch the next page of results, if pagination applies.
       * @default null
       */
      next_url: string | null;
      /**
       * Results
       * @description Results including SMA values and optional underlying data.
       */
      results: {
          /**
           * Indicators
           * @description SMA indicator data.
           */
          indicators: {
              /**
               * Sma
               * @description List of SMA values for each period.
               */
              sma: {
                  /**
                   * Timestamp
                   * @description UNIX timestamp in milliseconds for the SMA value.
                   */
                  timestamp: number;
                  /**
                   * Value
                   * @description SMA value at the given timestamp.
                   */
                  value: number;
              }[];
          };
          /**
           * Status
           * @description Status of the SMA request (e.g., 'OK').
           * @default null
           */
          status: string | null;
          /**
           * Ticker
           * @description The forex ticker symbol for the results.
           * @default null
           */
          ticker: string | null;
          /**
           * Underlying
           * @description Underlying data if requested.
           * @default null
           */
          underlying: {
              /**
               * Close
               * @description Closing price for the bar.
               */
              close: number;
              /**
               * High
               * @description Highest price for the bar.
               */
              high: number;
              /**
               * Low
               * @description Lowest price for the bar.
               */
              low: number;
              /**
               * Open
               * @description Opening price for the bar.
               */
              open: number;
              /**
               * Timestamp
               * @description UNIX timestamp for the aggregate bar.
               */
              timestamp: number;
              /**
               * Volume
               * @description Volume for the bar if available.
               * @default null
               */
              volume: number | null;
          }[] | null;
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
 * Type of POLYGON's POLYGON_IO_GET_SPLITS tool input.
 */
type POLYGON_IO_GET_SPLITS_INPUT = {
  /**
   * Asset Class
   * @description Filter by asset class, e.g., 'stocks', 'crypto'.
   * @default null
   */
  asset_class: string | null;
  /**
   * Cursor
   * @description Pagination cursor to fetch next page of results. Pass a previous 'cursor' value.
   * @default null
   */
  cursor: string | null;
  /**
   * Ex Date
   * @description Filter by ex-date (YYYY-MM-DD).
   * @default null
   */
  ex_date: string | null;
  /**
   * Execution Type
   * @description Filter by execution type (e.g., 'Market', 'Limit').
   * @default null
   */
  execution_type: string | null;
  /**
   * Limit
   * @description Limit number of results (1-1000).
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Sort order direction: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Sort
   * @description Field to sort by; only 'ex_date' is supported.
   * @default null
   * @constant
   */
  sort: "ex_date";
  /**
   * Ticker
   * @description Case-sensitive ticker symbol, e.g., 'AAPL'.
   * @default null
   */
  ticker: string | null;
};

/**
 * Type of POLYGON's POLYGON_IO_GET_SPLITS tool output.
 */
type POLYGON_IO_GET_SPLITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of results returned in this response.
       * @default null
       */
      count: number | null;
      /**
       * Next Url
       * @description URL to fetch the next page of results, if any.
       * @default null
       */
      next_url: string | null;
      /**
       * Request Id
       * @description Unique identifier for the request.
       * @default null
       */
      request_id: string | null;
      /**
       * Results
       * @description List of split event objects.
       * @default null
       */
      results: {
          /**
           * Declared Date
           * @description Date the split was declared (YYYY-MM-DD).
           * @default null
           */
          declared_date: string | null;
          /**
           * Description
           * @description Description of the split event.
           * @default null
           */
          description: string | null;
          /**
           * Ex Date
           * @description Ex-date of the split (YYYY-MM-DD).
           * @default null
           */
          ex_date: string | null;
          /**
           * Execution Type
           * @description Type of execution for the split.
           * @default null
           */
          execution_type: string | null;
          /**
           * For Factor
           * @description Shares before the split.
           * @default null
           */
          for_factor: number | null;
          /**
           * Payment Date
           * @description Payment date of the split (YYYY-MM-DD).
           * @default null
           */
          payment_date: string | null;
          /**
           * Ratio
           * @description Ratio of the split as a decimal.
           * @default null
           */
          ratio: number | null;
          /**
           * Record Date
           * @description Record date for the split (YYYY-MM-DD).
           * @default null
           */
          record_date: string | null;
          /**
           * Ticker
           * @description Ticker symbol for the split event.
           */
          ticker: string;
          /**
           * To Factor
           * @description Shares after the split.
           * @default null
           */
          to_factor: number | null;
      }[] | null;
      /**
       * Status
       * @description Response status string, e.g., 'OK'.
       * @default null
       */
      status: string | null;
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
 * Type of POLYGON's POLYGON_IO_GET_TICKER_OVERVIEW tool input.
 */
type POLYGON_IO_GET_TICKER_OVERVIEW_INPUT = {
  /**
   * Ticker
   * @description Ticker symbol to look up, e.g., 'AAPL'. Must be uppercase alphanumeric.
   */
  ticker?: string;
};

/**
 * Type of POLYGON's POLYGON_IO_GET_TICKER_OVERVIEW tool output.
 */
type POLYGON_IO_GET_TICKER_OVERVIEW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Id
       * @description Unique identifier for the request.
       * @default null
       */
      request_id: string | null;
      /**
       * TickerOverview
       * @description The detailed ticker overview object.
       * @default null
       */
      results: {
          /**
           * Active
           * @description If the ticker is actively traded.
           * @default null
           */
          active: boolean | null;
          /**
           * Address
           * @description Company address fields.
           * @default null
           */
          address: {
              /**
               * Address1
               * @description Street address.
               * @default null
               */
              address1: string | null;
              /**
               * City
               * @description City.
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country.
               * @default null
               */
              country: string | null;
              /**
               * Postal Code
               * @description Postal code.
               * @default null
               */
              postal_code: string | null;
              /**
               * State
               * @description State.
               * @default null
               */
              state: string | null;
          } | null;
          /**
           * Branding
           * @description Branding assets like logo and icon URLs.
           * @default null
           */
          branding: {
              /**
               * Icon Url
               * @description URL to company icon.
               * @default null
               */
              icon_url: string | null;
              /**
               * Logo Url
               * @description URL to company logo.
               * @default null
               */
              logo_url: string | null;
          } | null;
          /**
           * Cik
           * @description Central Index Key assigned by the SEC.
           * @default null
           */
          cik: string | null;
          /**
           * Composite Figi
           * @description OpenFIGI identifier.
           * @default null
           */
          composite_figi: string | null;
          /**
           * Description
           * @description Business summary.
           * @default null
           */
          description: string | null;
          /**
           * Homepage Url
           * @description Company's homepage URL.
           * @default null
           */
          homepage_url: string | null;
          /**
           * List Date
           * @description Date the ticker was listed (YYYY-MM-DD).
           * @default null
           */
          list_date: string | null;
          /**
           * Locale
           * @description Locale of the security (e.g., 'US').
           * @default null
           */
          locale: string | null;
          /**
           * Market
           * @description Market type (stocks, crypto, otc, etc).
           * @default null
           */
          market: string | null;
          /**
           * Market Cap
           * @description Market capitalization, if available.
           * @default null
           */
          market_cap: number | null;
          /**
           * Name
           * @description Company or security name.
           * @default null
           */
          name: string | null;
          /**
           * Phone Number
           * @description Company's phone number.
           * @default null
           */
          phone_number: string | null;
          /**
           * Primary Exchange
           * @description Primary exchange where the security trades.
           * @default null
           */
          primary_exchange: string | null;
          /**
           * Round Lot
           * @description Standard trading lot size for the security.
           * @default null
           */
          round_lot: number | null;
          /**
           * Share Class Figi
           * @description OpenFIGI identifier for share class.
           * @default null
           */
          share_class_figi: string | null;
          /**
           * Share Class Shares Outstanding
           * @description Number of outstanding share class shares.
           * @default null
           */
          share_class_shares_outstanding: number | null;
          /**
           * Sic Code
           * @description Standard Industrial Classification (SIC) code.
           * @default null
           */
          sic_code: string | null;
          /**
           * Sic Description
           * @description Description of SIC code.
           * @default null
           */
          sic_description: string | null;
          /**
           * Ticker
           * @description Ticker symbol.
           */
          ticker: string;
          /**
           * Ticker Root
           * @description Root symbol, if applicable.
           * @default null
           */
          ticker_root: string | null;
          /**
           * Total Employees
           * @description Number of employees.
           * @default null
           */
          total_employees: number | null;
          /**
           * Type
           * @description Type of the asset (CS, ETF, ADR, etc).
           * @default null
           */
          type: string | null;
          /**
           * Weighted Shares Outstanding
           * @description Weighted average shares outstanding (diluted).
           * @default null
           */
          weighted_shares_outstanding: number | null;
      } | null;
      /**
       * Status
       * @description Status of the response (e.g., 'OK').
       * @default null
       */
      status: string | null;
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
 * Type of POLYGON's POLYGON_IO_GET_TICKER_TYPES tool input.
 */
type POLYGON_IO_GET_TICKER_TYPES_INPUT = object;

/**
 * Type of POLYGON's POLYGON_IO_GET_TICKER_TYPES tool output.
 */
type POLYGON_IO_GET_TICKER_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Request Id
       * @description Unique identifier for the API request
       */
      request_id: string;
      /**
       * Results
       * @description List of supported ticker types
       */
      results: {
          /**
           * Code
           * @description Ticker type code (e.g., 'CS' for Common Stock)
           */
          code: string;
          /**
           * Description
           * @description Description of the ticker type
           */
          description: string;
      }[];
      /**
       * Status
       * @description Status of the request (e.g., 'OK')
       */
      status: string;
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
 * Type map of all available tool input types for toolkit "POLYGON".
 */
export type POLYGON_TOOL_INPUTS = {
  GET_ALL_TICKERS: POLYGON_GET_ALL_TICKERS_INPUT
  GET_CRYPTO_INDICATOR_EMA: POLYGON_GET_CRYPTO_INDICATOR_EMA_INPUT
  GET_CRYPTO_INDICATOR_MACD: POLYGON_GET_CRYPTO_INDICATOR_MACD_INPUT
  GET_CRYPTO_INDICATOR_RSI: POLYGON_GET_CRYPTO_INDICATOR_RSI_INPUT
  GET_CRYPTO_INDICATOR_SMA: POLYGON_GET_CRYPTO_INDICATOR_SMA_INPUT
  GET_CRYPTO_OPEN_CLOSE: POLYGON_GET_CRYPTO_OPEN_CLOSE_INPUT
  GET_CRYPTO_PREV_CLOSE: POLYGON_GET_CRYPTO_PREV_CLOSE_INPUT
  GET_DIVIDENDS: POLYGON_GET_DIVIDENDS_INPUT
  GET_MARKET_HOLIDAYS: POLYGON_GET_MARKET_HOLIDAYS_INPUT
  GET_MARKET_STATUS: POLYGON_GET_MARKET_STATUS_INPUT
  GET_NEWS: POLYGON_GET_NEWS_INPUT
  GET_REFERENCE_CONDITIONS: POLYGON_GET_REFERENCE_CONDITIONS_INPUT
  GET_REFERENCE_EXCHANGES: POLYGON_GET_REFERENCE_EXCHANGES_INPUT
  GET_SPLITS: POLYGON_GET_SPLITS_INPUT
  GET_TECHNICAL_INDICATOR_EMA: POLYGON_GET_TECHNICAL_INDICATOR_EMA_INPUT
  GET_TECHNICAL_INDICATOR_SMA: POLYGON_GET_TECHNICAL_INDICATOR_SMA_INPUT
  GET_TICKER_DETAILS: POLYGON_GET_TICKER_DETAILS_INPUT
  GET_TICKER_TYPES: POLYGON_GET_TICKER_TYPES_INPUT
  IO_GET_ALL_TICKERS: POLYGON_IO_GET_ALL_TICKERS_INPUT
  IO_GET_CONDITION_CODES: POLYGON_IO_GET_CONDITION_CODES_INPUT
  IO_GET_DAILY_TICKER_SUMMARY: POLYGON_IO_GET_DAILY_TICKER_SUMMARY_INPUT
  IO_GET_DIVIDENDS: POLYGON_IO_GET_DIVIDENDS_INPUT
  IO_GET_EMA: POLYGON_IO_GET_EMA_INPUT
  IO_GET_MACD: POLYGON_IO_GET_MACD_INPUT
  IO_GET_MARKET_HOLIDAYS: POLYGON_IO_GET_MARKET_HOLIDAYS_INPUT
  IO_GET_MARKET_STATUS: POLYGON_IO_GET_MARKET_STATUS_INPUT
  IO_GET_NEWS: POLYGON_IO_GET_NEWS_INPUT
  IO_GET_RSI: POLYGON_IO_GET_RSI_INPUT
  IO_GET_SMA: POLYGON_IO_GET_SMA_INPUT
  IO_GET_SPLITS: POLYGON_IO_GET_SPLITS_INPUT
  IO_GET_TICKER_OVERVIEW: POLYGON_IO_GET_TICKER_OVERVIEW_INPUT
  IO_GET_TICKER_TYPES: POLYGON_IO_GET_TICKER_TYPES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "POLYGON".
 */
export type POLYGON_TOOL_OUTPUTS = {
  GET_ALL_TICKERS: POLYGON_GET_ALL_TICKERS_OUTPUT
  GET_CRYPTO_INDICATOR_EMA: POLYGON_GET_CRYPTO_INDICATOR_EMA_OUTPUT
  GET_CRYPTO_INDICATOR_MACD: POLYGON_GET_CRYPTO_INDICATOR_MACD_OUTPUT
  GET_CRYPTO_INDICATOR_RSI: POLYGON_GET_CRYPTO_INDICATOR_RSI_OUTPUT
  GET_CRYPTO_INDICATOR_SMA: POLYGON_GET_CRYPTO_INDICATOR_SMA_OUTPUT
  GET_CRYPTO_OPEN_CLOSE: POLYGON_GET_CRYPTO_OPEN_CLOSE_OUTPUT
  GET_CRYPTO_PREV_CLOSE: POLYGON_GET_CRYPTO_PREV_CLOSE_OUTPUT
  GET_DIVIDENDS: POLYGON_GET_DIVIDENDS_OUTPUT
  GET_MARKET_HOLIDAYS: POLYGON_GET_MARKET_HOLIDAYS_OUTPUT
  GET_MARKET_STATUS: POLYGON_GET_MARKET_STATUS_OUTPUT
  GET_NEWS: POLYGON_GET_NEWS_OUTPUT
  GET_REFERENCE_CONDITIONS: POLYGON_GET_REFERENCE_CONDITIONS_OUTPUT
  GET_REFERENCE_EXCHANGES: POLYGON_GET_REFERENCE_EXCHANGES_OUTPUT
  GET_SPLITS: POLYGON_GET_SPLITS_OUTPUT
  GET_TECHNICAL_INDICATOR_EMA: POLYGON_GET_TECHNICAL_INDICATOR_EMA_OUTPUT
  GET_TECHNICAL_INDICATOR_SMA: POLYGON_GET_TECHNICAL_INDICATOR_SMA_OUTPUT
  GET_TICKER_DETAILS: POLYGON_GET_TICKER_DETAILS_OUTPUT
  GET_TICKER_TYPES: POLYGON_GET_TICKER_TYPES_OUTPUT
  IO_GET_ALL_TICKERS: POLYGON_IO_GET_ALL_TICKERS_OUTPUT
  IO_GET_CONDITION_CODES: POLYGON_IO_GET_CONDITION_CODES_OUTPUT
  IO_GET_DAILY_TICKER_SUMMARY: POLYGON_IO_GET_DAILY_TICKER_SUMMARY_OUTPUT
  IO_GET_DIVIDENDS: POLYGON_IO_GET_DIVIDENDS_OUTPUT
  IO_GET_EMA: POLYGON_IO_GET_EMA_OUTPUT
  IO_GET_MACD: POLYGON_IO_GET_MACD_OUTPUT
  IO_GET_MARKET_HOLIDAYS: POLYGON_IO_GET_MARKET_HOLIDAYS_OUTPUT
  IO_GET_MARKET_STATUS: POLYGON_IO_GET_MARKET_STATUS_OUTPUT
  IO_GET_NEWS: POLYGON_IO_GET_NEWS_OUTPUT
  IO_GET_RSI: POLYGON_IO_GET_RSI_OUTPUT
  IO_GET_SMA: POLYGON_IO_GET_SMA_OUTPUT
  IO_GET_SPLITS: POLYGON_IO_GET_SPLITS_OUTPUT
  IO_GET_TICKER_OVERVIEW: POLYGON_IO_GET_TICKER_OVERVIEW_OUTPUT
  IO_GET_TICKER_TYPES: POLYGON_IO_GET_TICKER_TYPES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's POLYGON toolkit.
 */
export const POLYGON = {
  slug: "polygon",
  tools: {
    /**
     * Tool to retrieve all ticker symbols across asset classes. use when you need to filter by market or exchange and paginate through results.
     */
    GET_ALL_TICKERS: "POLYGON_GET_ALL_TICKERS",
    /**
     * Tool to retrieve exponential moving average (ema) for a cryptocurrency ticker. use when you need crypto ema data for analysis after selecting the time window.
     */
    GET_CRYPTO_INDICATOR_EMA: "POLYGON_GET_CRYPTO_INDICATOR_EMA",
    /**
     * Tool to retrieve the macd (moving average convergence/divergence) for a crypto ticker. use when you need momentum analysis for a specific cryptocurrency after confirming ticker and parameters.
     */
    GET_CRYPTO_INDICATOR_MACD: "POLYGON_GET_CRYPTO_INDICATOR_MACD",
    /**
     * Tool to retrieve the relative strength index (rsi) for a crypto ticker. use when you need momentum analysis for crypto assets after specifying ticker, timeframe, and optional parameters.
     */
    GET_CRYPTO_INDICATOR_RSI: "POLYGON_GET_CRYPTO_INDICATOR_RSI",
    /**
     * Tool to retrieve the simple moving average (sma) for a given crypto ticker. use when you need sma values for a crypto asset after confirming ticker, timespan, and window size.
     */
    GET_CRYPTO_INDICATOR_SMA: "POLYGON_GET_CRYPTO_INDICATOR_SMA",
    /**
     * Tool to fetch daily open and close prices for a given crypto pair on a specified date. use after specifying both currency symbols and the date.
     */
    GET_CRYPTO_OPEN_CLOSE: "POLYGON_GET_CRYPTO_OPEN_CLOSE",
    /**
     * Tool to retrieve previous day’s close for a crypto ticker. use when you need the last closing price of a cryptocurrency before analysis or trading.
     */
    GET_CRYPTO_PREV_CLOSE: "POLYGON_GET_CRYPTO_PREV_CLOSE",
    /**
     * Tool to retrieve dividend data for stocks. use when you need corporate dividend information for specific tickers.
     */
    GET_DIVIDENDS: "POLYGON_GET_DIVIDENDS",
    /**
     * Tool to retrieve upcoming market holidays and half-day closures. use when you need to look up upcoming exchange holidays and early closures.
     */
    GET_MARKET_HOLIDAYS: "POLYGON_GET_MARKET_HOLIDAYS",
    /**
     * Tool to retrieve current market status. use when you need to know if u.s. exchanges are open, closed, or on holiday.
     */
    GET_MARKET_STATUS: "POLYGON_GET_MARKET_STATUS",
    /**
     * Tool to retrieve recent news articles related to a ticker. use when you need to fetch financial news after identifying a ticker symbol.
     */
    GET_NEWS: "POLYGON_GET_NEWS",
    /**
     * Tool to retrieve market condition code mappings. use when you need definitions of trade or quote condition codes after confirming asset class and data type.
     */
    GET_REFERENCE_CONDITIONS: "POLYGON_GET_REFERENCE_CONDITIONS",
    /**
     * Tool to retrieve supported exchanges and their details. use when you need a list of exchanges filtered by asset class or locale.
     */
    GET_REFERENCE_EXCHANGES: "POLYGON_GET_REFERENCE_EXCHANGES",
    /**
     * Tool to retrieve stock split events. use when you need corporate stock split data filtered by ticker or date range. example: "get splits for aapl between 2021-01-01 and 2021-12-31".
     */
    GET_SPLITS: "POLYGON_GET_SPLITS",
    /**
     * Tool to fetch exponential moving average (ema) for a given stock ticker. use when you need historical ema data after confirming ticker, timespan, and window size.
     */
    GET_TECHNICAL_INDICATOR_EMA: "POLYGON_GET_TECHNICAL_INDICATOR_EMA",
    /**
     * Tool to fetch simple moving average (sma) for a given stock ticker. use when you need historical sma data after confirming ticker, timespan, and window size.
     */
    GET_TECHNICAL_INDICATOR_SMA: "POLYGON_GET_TECHNICAL_INDICATOR_SMA",
    /**
     * Tool to retrieve detailed information for a ticker. use when you need an overview of a ticker including company info, market data, and identifiers.
     */
    GET_TICKER_DETAILS: "POLYGON_GET_TICKER_DETAILS",
    /**
     * Tool to retrieve all ticker types supported by polygon.io. use after authenticating to explore ticker categories.
     */
    GET_TICKER_TYPES: "POLYGON_GET_TICKER_TYPES",
    /**
     * Tool to retrieve a comprehensive list of supported ticker symbols across all asset classes. use when you need to list all tickers with details like symbol, name, market, and status.
     */
    IO_GET_ALL_TICKERS: "POLYGON_IO_GET_ALL_TICKERS",
    /**
     * Tool to retrieve a unified list of trade and quote condition codes and their definitions. use when needing to decode condition identifiers after fetching market data.
     */
    IO_GET_CONDITION_CODES: "POLYGON_IO_GET_CONDITION_CODES",
    /**
     * Tool to retrieve daily aggregate summary for a specific stock ticker. uses previous day aggregates from v2 api.
     */
    IO_GET_DAILY_TICKER_SUMMARY: "POLYGON_IO_GET_DAILY_TICKER_SUMMARY",
    /**
     * Tool to retrieve a historical record of cash dividend distributions for a given ticker. use when analyzing dividend payments by date, amount, and frequency.
     */
    IO_GET_DIVIDENDS: "POLYGON_IO_GET_DIVIDENDS",
    /**
     * Tool to retrieve the exponential moving average for a stock ticker. use when you need ema values across a specific timespan with optional underlying data.
     */
    IO_GET_EMA: "POLYGON_IO_GET_EMA",
    /**
     * Tool to retrieve the moving average convergence/divergence (macd) for a stock ticker. use when you need momentum analysis or signal generation over a specified timeframe.
     */
    IO_GET_MACD: "POLYGON_IO_GET_MACD",
    /**
     * Tool to retrieve upcoming market holidays and their corresponding open/close times. use when planning around market schedules before trading.
     */
    IO_GET_MARKET_HOLIDAYS: "POLYGON_IO_GET_MARKET_HOLIDAYS",
    /**
     * Tool to retrieve the current trading status across major exchanges and currency markets. use for real-time monitoring, scheduling, or ui updates.
     */
    IO_GET_MARKET_STATUS: "POLYGON_IO_GET_MARKET_STATUS",
    /**
     * Tool to retrieve the most recent news articles for a specified ticker. use when you need summaries, source details, and sentiment analysis for market news.
     */
    IO_GET_NEWS: "POLYGON_IO_GET_NEWS",
    /**
     * Tool to retrieve the relative strength index (rsi) for a stock ticker. use after confirming ticker symbol and timespan to analyze momentum over a period.
     */
    IO_GET_RSI: "POLYGON_IO_GET_RSI",
    /**
     * Tool to retrieve the simple moving average (sma) for a forex ticker. use when you need sma values over a specified timespan with optional underlying data.
     */
    IO_GET_SMA: "POLYGON_IO_GET_SMA",
    /**
     * Tool to retrieve historical stock split events for a given ticker. use after identifying the ticker to fetch split history including ratio, ex-date, and record dates.
     */
    IO_GET_SPLITS: "POLYGON_IO_GET_SPLITS",
    /**
     * Tool to retrieve comprehensive details for a single ticker, including identifiers, industry, and branding assets. use after confirming the exact ticker symbol.
     */
    IO_GET_TICKER_OVERVIEW: "POLYGON_IO_GET_TICKER_OVERVIEW",
    /**
     * Tool to retrieve a list of all ticker types supported by polygon.io. use when you need to enumerate valid ticker types for filtering or validation.
     */
    IO_GET_TICKER_TYPES: "POLYGON_IO_GET_TICKER_TYPES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "POLYGON".
 */
export type POLYGON_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "POLYGON".
 */
export type POLYGON_TRIGGER_EVENTS = {}
