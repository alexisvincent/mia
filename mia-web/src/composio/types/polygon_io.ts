// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of POLYGON_IO's POLYGON_IO_GET_ALL_TICKERS tool input.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_ALL_TICKERS tool output.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_CONDITION_CODES tool input.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_CONDITION_CODES tool output.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_DAILY_TICKER_SUMMARY tool input.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_DAILY_TICKER_SUMMARY tool output.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_DIVIDENDS tool input.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_DIVIDENDS tool output.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_EMA tool input.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_EMA tool output.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_MACD tool input.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_MACD tool output.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_MARKET_HOLIDAYS tool input.
 */
type POLYGON_IO_GET_MARKET_HOLIDAYS_INPUT = object;

/**
 * Type of POLYGON_IO's POLYGON_IO_GET_MARKET_HOLIDAYS tool output.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_MARKET_STATUS tool input.
 */
type POLYGON_IO_GET_MARKET_STATUS_INPUT = object;

/**
 * Type of POLYGON_IO's POLYGON_IO_GET_MARKET_STATUS tool output.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_NEWS tool input.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_NEWS tool output.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_RSI tool input.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_RSI tool output.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_SMA tool input.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_SMA tool output.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_SPLITS tool input.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_SPLITS tool output.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_TICKER_OVERVIEW tool input.
 */
type POLYGON_IO_GET_TICKER_OVERVIEW_INPUT = {
  /**
   * Ticker
   * @description Ticker symbol to look up, e.g., 'AAPL'. Must be uppercase alphanumeric.
   */
  ticker?: string;
};

/**
 * Type of POLYGON_IO's POLYGON_IO_GET_TICKER_OVERVIEW tool output.
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
 * Type of POLYGON_IO's POLYGON_IO_GET_TICKER_TYPES tool input.
 */
type POLYGON_IO_GET_TICKER_TYPES_INPUT = object;

/**
 * Type of POLYGON_IO's POLYGON_IO_GET_TICKER_TYPES tool output.
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
 * Type map of all available tool input types for toolkit "POLYGON_IO".
 */
export type POLYGON_IO_TOOL_INPUTS = {
  GET_ALL_TICKERS: POLYGON_IO_GET_ALL_TICKERS_INPUT
  GET_CONDITION_CODES: POLYGON_IO_GET_CONDITION_CODES_INPUT
  GET_DAILY_TICKER_SUMMARY: POLYGON_IO_GET_DAILY_TICKER_SUMMARY_INPUT
  GET_DIVIDENDS: POLYGON_IO_GET_DIVIDENDS_INPUT
  GET_EMA: POLYGON_IO_GET_EMA_INPUT
  GET_MACD: POLYGON_IO_GET_MACD_INPUT
  GET_MARKET_HOLIDAYS: POLYGON_IO_GET_MARKET_HOLIDAYS_INPUT
  GET_MARKET_STATUS: POLYGON_IO_GET_MARKET_STATUS_INPUT
  GET_NEWS: POLYGON_IO_GET_NEWS_INPUT
  GET_RSI: POLYGON_IO_GET_RSI_INPUT
  GET_SMA: POLYGON_IO_GET_SMA_INPUT
  GET_SPLITS: POLYGON_IO_GET_SPLITS_INPUT
  GET_TICKER_OVERVIEW: POLYGON_IO_GET_TICKER_OVERVIEW_INPUT
  GET_TICKER_TYPES: POLYGON_IO_GET_TICKER_TYPES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "POLYGON_IO".
 */
export type POLYGON_IO_TOOL_OUTPUTS = {
  GET_ALL_TICKERS: POLYGON_IO_GET_ALL_TICKERS_OUTPUT
  GET_CONDITION_CODES: POLYGON_IO_GET_CONDITION_CODES_OUTPUT
  GET_DAILY_TICKER_SUMMARY: POLYGON_IO_GET_DAILY_TICKER_SUMMARY_OUTPUT
  GET_DIVIDENDS: POLYGON_IO_GET_DIVIDENDS_OUTPUT
  GET_EMA: POLYGON_IO_GET_EMA_OUTPUT
  GET_MACD: POLYGON_IO_GET_MACD_OUTPUT
  GET_MARKET_HOLIDAYS: POLYGON_IO_GET_MARKET_HOLIDAYS_OUTPUT
  GET_MARKET_STATUS: POLYGON_IO_GET_MARKET_STATUS_OUTPUT
  GET_NEWS: POLYGON_IO_GET_NEWS_OUTPUT
  GET_RSI: POLYGON_IO_GET_RSI_OUTPUT
  GET_SMA: POLYGON_IO_GET_SMA_OUTPUT
  GET_SPLITS: POLYGON_IO_GET_SPLITS_OUTPUT
  GET_TICKER_OVERVIEW: POLYGON_IO_GET_TICKER_OVERVIEW_OUTPUT
  GET_TICKER_TYPES: POLYGON_IO_GET_TICKER_TYPES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's POLYGON_IO toolkit.
 */
export const POLYGON_IO = {
  slug: "polygon_io",
  tools: {
    /**
     * Tool to retrieve a comprehensive list of supported ticker symbols across all asset classes. use when you need to list all tickers with details like symbol, name, market, and status.
     */
    GET_ALL_TICKERS: "POLYGON_IO_GET_ALL_TICKERS",
    /**
     * Tool to retrieve a unified list of trade and quote condition codes and their definitions. use when needing to decode condition identifiers after fetching market data.
     */
    GET_CONDITION_CODES: "POLYGON_IO_GET_CONDITION_CODES",
    /**
     * Tool to retrieve daily aggregate summary for a specific stock ticker. uses previous day aggregates from v2 api.
     */
    GET_DAILY_TICKER_SUMMARY: "POLYGON_IO_GET_DAILY_TICKER_SUMMARY",
    /**
     * Tool to retrieve a historical record of cash dividend distributions for a given ticker. use when analyzing dividend payments by date, amount, and frequency.
     */
    GET_DIVIDENDS: "POLYGON_IO_GET_DIVIDENDS",
    /**
     * Tool to retrieve the exponential moving average for a stock ticker. use when you need ema values across a specific timespan with optional underlying data.
     */
    GET_EMA: "POLYGON_IO_GET_EMA",
    /**
     * Tool to retrieve the moving average convergence/divergence (macd) for a stock ticker. use when you need momentum analysis or signal generation over a specified timeframe.
     */
    GET_MACD: "POLYGON_IO_GET_MACD",
    /**
     * Tool to retrieve upcoming market holidays and their corresponding open/close times. use when planning around market schedules before trading.
     */
    GET_MARKET_HOLIDAYS: "POLYGON_IO_GET_MARKET_HOLIDAYS",
    /**
     * Tool to retrieve the current trading status across major exchanges and currency markets. use for real-time monitoring, scheduling, or ui updates.
     */
    GET_MARKET_STATUS: "POLYGON_IO_GET_MARKET_STATUS",
    /**
     * Tool to retrieve the most recent news articles for a specified ticker. use when you need summaries, source details, and sentiment analysis for market news.
     */
    GET_NEWS: "POLYGON_IO_GET_NEWS",
    /**
     * Tool to retrieve the relative strength index (rsi) for a stock ticker. use after confirming ticker symbol and timespan to analyze momentum over a period.
     */
    GET_RSI: "POLYGON_IO_GET_RSI",
    /**
     * Tool to retrieve the simple moving average (sma) for a forex ticker. use when you need sma values over a specified timespan with optional underlying data.
     */
    GET_SMA: "POLYGON_IO_GET_SMA",
    /**
     * Tool to retrieve historical stock split events for a given ticker. use after identifying the ticker to fetch split history including ratio, ex-date, and record dates.
     */
    GET_SPLITS: "POLYGON_IO_GET_SPLITS",
    /**
     * Tool to retrieve comprehensive details for a single ticker, including identifiers, industry, and branding assets. use after confirming the exact ticker symbol.
     */
    GET_TICKER_OVERVIEW: "POLYGON_IO_GET_TICKER_OVERVIEW",
    /**
     * Tool to retrieve a list of all ticker types supported by polygon.io. use when you need to enumerate valid ticker types for filtering or validation.
     */
    GET_TICKER_TYPES: "POLYGON_IO_GET_TICKER_TYPES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "POLYGON_IO".
 */
export type POLYGON_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "POLYGON_IO".
 */
export type POLYGON_IO_TRIGGER_EVENTS = {}
