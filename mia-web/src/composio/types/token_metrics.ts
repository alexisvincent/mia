// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TOKEN_METRICS's TOKEN_METRICS_GET_PRICE tool input.
 */
type TOKEN_METRICS_GET_PRICE_INPUT = {
  /**
   * Currency
   * @description Fiat currency code for quoted price (default 'USD').
   * @default USD
   */
  currency: string | null;
  /**
   * Limit
   * @description Maximum number of tokens to return.
   * @default null
   */
  limit: number | null;
  /**
   * Token Id
   * @description Numeric token ID as returned by /tokens endpoint.
   */
  token_id?: string;
};

/**
 * Type of TOKEN_METRICS's TOKEN_METRICS_GET_PRICE tool output.
 */
type TOKEN_METRICS_GET_PRICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Prices
       * @description List of price data records.
       */
      prices: {
          /**
           * Last Updated
           * @description ISO-8601 datetime of last price update.
           */
          last_updated: string;
          /**
           * Market Cap
           * @description Current market capitalization.
           */
          market_cap: number;
          /**
           * Percent Change 1H
           * @description Percentage change over the last 1 hour.
           */
          percent_change_1h: number;
          /**
           * Percent Change 24H
           * @description Percentage change over the last 24 hours.
           */
          percent_change_24h: number;
          /**
           * Percent Change 7D
           * @description Percentage change over the last 7 days.
           */
          percent_change_7d: number;
          /**
           * Price
           * @description Current token price in specified currency.
           */
          price: number;
          /**
           * Symbol
           * @description Token symbol.
           */
          symbol: string;
          /**
           * Volume 24H
           * @description 24-hour trading volume.
           */
          volume_24h: number;
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
 * Type of TOKEN_METRICS's TOKEN_METRICS_GET_TECHNICAL_INDICATORS tool input.
 */
type TOKEN_METRICS_GET_TECHNICAL_INDICATORS_INPUT = {
  /**
   * End Time
   * Format: date-time
   * @description ISO-8601 end time for the data range (e.g., '2023-06-08T00:00:00Z').
   */
  end_time?: unknown;
  /**
   * Exchange
   * @description Exchange code for the symbol (e.g., 'BINANCE').
   * @default null
   */
  exchange: string | null;
  /**
   * Indicator
   * @description Name of the technical indicator to retrieve (e.g., 'rsi', 'macd').
   */
  indicator?: string;
  /**
   * Interval
   * @description Timeframe interval for the data (e.g., '1h', '4h', '1d').
   */
  interval?: string;
  /**
   * Limit
   * @description Number of data points to retrieve (default is 100, max 1000).
   * @default 100
   */
  limit: number | null;
  /**
   * Start Time
   * Format: date-time
   * @description ISO-8601 start time for the data range (e.g., '2023-06-01T00:00:00Z').
   */
  start_time?: unknown;
  /**
   * Symbol
   * @description The ticker symbol to query (e.g., 'BTCUSDT').
   */
  symbol?: string;
};

/**
 * Type of TOKEN_METRICS's TOKEN_METRICS_GET_TECHNICAL_INDICATORS tool output.
 */
type TOKEN_METRICS_GET_TECHNICAL_INDICATORS_OUTPUT = {
  /**
   * Data
   * @description List of indicator values with timestamps.
   */
  data?: {
      /**
       * Timestamp
       * Format: date-time
       * @description Timestamp of the data point in ISO-8601 format.
       */
      timestamp: unknown;
      /**
       * Value
       * @description Value of the technical indicator at the given timestamp.
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
   * Exchange
   * @description Exchange code.
   */
  exchange?: string;
  /**
   * Indicator
   * @description Indicator name.
   */
  indicator?: string;
  /**
   * Interval
   * @description Timeframe interval.
   */
  interval?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Symbol
   * @description Symbol requested.
   */
  symbol?: string;
};

/**
 * Type of TOKEN_METRICS's TOKEN_METRICS_GET_TOP_MARKET_CAP_TOKENS tool input.
 */
type TOKEN_METRICS_GET_TOP_MARKET_CAP_TOKENS_INPUT = {
  /**
   * Currency
   * @description Quote currency for market cap (e.g., 'USD', 'EUR').
   * @default USD
   */
  currency: string | null;
  /**
   * Limit
   * @description Number of tokens to return, must be at least 1.
   * @default 100
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for pagination, must be at least 1.
   * @default 1
   */
  page: number | null;
  /**
   * Sector
   * @description Sector filter (e.g., 'DeFi', 'NFT').
   * @default null
   */
  sector: string | null;
};

/**
 * Type of TOKEN_METRICS's TOKEN_METRICS_GET_TOP_MARKET_CAP_TOKENS tool output.
 */
type TOKEN_METRICS_GET_TOP_MARKET_CAP_TOKENS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Limit
       * @description Number of tokens returned per page.
       */
      limit: number;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Tokens
       * @description List of tokens sorted by market cap.
       */
      tokens: {
          /**
           * Market Cap
           * @description Market capitalization value.
           */
          market_cap: number;
          /**
           * Name
           * @description Name of the token.
           */
          name: string;
          /**
           * Percent Change 24H
           * @description 24-hour percentage price change.
           */
          percent_change_24h: number;
          /**
           * Price
           * @description Current price of the token.
           */
          price: number;
          /**
           * Symbol
           * @description Token symbol.
           */
          symbol: string;
      }[];
      /**
       * Total
       * @description Total number of tokens matching the criteria.
       */
      total: number;
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
 * Type of TOKEN_METRICS's TOKEN_METRICS_GET_TRADING_SIGNALS tool input.
 */
type TOKEN_METRICS_GET_TRADING_SIGNALS_INPUT = {
  /**
   * Exchange
   * @description Exchange name to filter (e.g., 'Binance').
   * @default null
   */
  exchange: string | null;
  /**
   * Limit
   * @description Maximum number of signals to return, must be at least 1.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of signals to skip for pagination, must be non-negative.
   * @default null
   */
  offset: number | null;
  /**
   * Signal Type
   * @description Type of signal to filter (buy, sell, neutral).
   * @default null
   */
  signal_type: string | null;
  /**
   * Symbol
   * @description Cryptocurrency symbol to filter by (e.g., 'BTC', 'ETH').
   * @default null
   */
  symbol: string | null;
  /**
   * Timeframe
   * @description Timeframe for analysis (e.g., '1h', '1d').
   * @default null
   */
  timeframe: string | null;
};

/**
 * Type of TOKEN_METRICS's TOKEN_METRICS_GET_TRADING_SIGNALS tool output.
 */
type TOKEN_METRICS_GET_TRADING_SIGNALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Signals
       * @description List of trading signals.
       */
      signals: {
          /**
           * Confidence
           * @description Confidence score between 0 and 1.
           */
          confidence: number;
          /**
           * Exchange
           * @description Exchange name where signal applies.
           */
          exchange: string;
          /**
           * Id
           * @description Unique signal ID.
           */
          id: string;
          /**
           * Price
           * @description Price at the time of the signal.
           */
          price: number;
          /**
           * Signal
           * @description Trading signal (e.g., buy, sell, neutral).
           */
          signal: string;
          /**
           * Signal Type
           * @description Type/category of signal.
           */
          signal_type: string;
          /**
           * Symbol
           * @description Cryptocurrency symbol.
           */
          symbol: string;
          /**
           * Timeframe
           * @description Timeframe of analysis.
           */
          timeframe: string;
          /**
           * Timestamp
           * Format: date-time
           * @description ISO8601 timestamp when signal was generated.
           */
          timestamp: string;
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
 * Type of TOKEN_METRICS's TOKEN_METRICS_TOKEN_METRICS_GET_TOKENS tool input.
 */
type TOKEN_METRICS_TOKEN_METRICS_GET_TOKENS_INPUT = {
  /**
   * Blockchain
   * @description Filter tokens by blockchain network
   * @default null
   */
  blockchain: string | null;
  /**
   * Category
   * @description Filter tokens by category
   * @default null
   */
  category: string | null;
  /**
   * Limit
   * @description Number of results per page
   * @default null
   */
  limit: number | null;
  /**
   * Market Cap Max
   * @description Maximum market capitalization filter
   * @default null
   */
  market_cap_max: number | null;
  /**
   * Market Cap Min
   * @description Minimum market capitalization filter
   * @default null
   */
  market_cap_min: number | null;
  /**
   * Page
   * @description Page number for pagination (1-based index)
   * @default null
   */
  page: number | null;
  /**
   * Price Max
   * @description Maximum token price filter
   * @default null
   */
  price_max: number | null;
  /**
   * Price Min
   * @description Minimum token price filter
   * @default null
   */
  price_min: number | null;
  /**
   * Search
   * @description Search tokens by name or symbol (case-insensitive)
   * @default null
   */
  search: string | null;
  /**
   * Sort By
   * @description Field to sort by
   * @default null
   * @enum {string|null}
   */
  sort_by: "market_cap" | "price" | "volume_24h" | null;
  /**
   * Sort Order
   * @description Sort order: ascending or descending
   * @default null
   * @enum {string|null}
   */
  sort_order: "asc" | "desc" | null;
};

/**
 * Type of TOKEN_METRICS's TOKEN_METRICS_TOKEN_METRICS_GET_TOKENS tool output.
 */
type TOKEN_METRICS_TOKEN_METRICS_GET_TOKENS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination details
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number
           */
          current_page: number;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          total_pages: number;
          /**
           * Total Results
           * @description Total number of tokens matching the query
           */
          total_results: number;
      };
      /**
       * Tokens
       * @description List of tokens
       */
      tokens: {
          /**
           * Blockchain
           * @description Blockchain network
           * @default null
           */
          blockchain: string | null;
          /**
           * Category
           * @description Token category
           * @default null
           */
          category: string | null;
          /**
           * Contract Addresses
           * @description Mapping of blockchain networks to contract addresses
           */
          contract_addresses: {
              [key: string]: string;
          };
          /**
           * Id
           * @description Unique token identifier
           */
          id: string;
          /**
           * Market Cap
           * @description Current market capitalization
           */
          market_cap: number;
          /**
           * Name
           * @description Token name
           */
          name: string;
          /**
           * Price
           * @description Current token price
           */
          price: number;
          /**
           * Supply
           * @description Supply metrics, e.g., {'circulating': float, 'total': float, 'max': float}
           */
          supply: {
              [key: string]: number;
          };
          /**
           * Symbol
           * @description Token symbol
           */
          symbol: string;
          /**
           * Volume 24H
           * @description 24h trading volume
           */
          volume_24h: number;
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
 * Type map of all available tool input types for toolkit "TOKEN_METRICS".
 */
export type TOKEN_METRICS_TOOL_INPUTS = {
  GET_PRICE: TOKEN_METRICS_GET_PRICE_INPUT
  GET_TECHNICAL_INDICATORS: TOKEN_METRICS_GET_TECHNICAL_INDICATORS_INPUT
  GET_TOP_MARKET_CAP_TOKENS: TOKEN_METRICS_GET_TOP_MARKET_CAP_TOKENS_INPUT
  GET_TRADING_SIGNALS: TOKEN_METRICS_GET_TRADING_SIGNALS_INPUT
  TOKEN_METRICS_GET_TOKENS: TOKEN_METRICS_TOKEN_METRICS_GET_TOKENS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TOKEN_METRICS".
 */
export type TOKEN_METRICS_TOOL_OUTPUTS = {
  GET_PRICE: TOKEN_METRICS_GET_PRICE_OUTPUT
  GET_TECHNICAL_INDICATORS: TOKEN_METRICS_GET_TECHNICAL_INDICATORS_OUTPUT
  GET_TOP_MARKET_CAP_TOKENS: TOKEN_METRICS_GET_TOP_MARKET_CAP_TOKENS_OUTPUT
  GET_TRADING_SIGNALS: TOKEN_METRICS_GET_TRADING_SIGNALS_OUTPUT
  TOKEN_METRICS_GET_TOKENS: TOKEN_METRICS_TOKEN_METRICS_GET_TOKENS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TOKEN_METRICS toolkit.
 */
export const TOKEN_METRICS = {
  slug: "token_metrics",
  tools: {
    /**
     * Tool to retrieve real-time price and market metrics for a given cryptocurrency. use when you need the latest price, volume, and market cap information for trading or analysis.
     */
    GET_PRICE: "TOKEN_METRICS_GET_PRICE",
    /**
     * Tool to retrieve technical indicators for a token. use when you need technical analysis data for a specific symbol, interval, and indicator.
     */
    GET_TECHNICAL_INDICATORS: "TOKEN_METRICS_GET_TECHNICAL_INDICATORS",
    /**
     * Tool to retrieve a list of tokens ranked by market capitalization. use when you need an overview of the most valuable cryptocurrencies.
     */
    GET_TOP_MARKET_CAP_TOKENS: "TOKEN_METRICS_GET_TOP_MARKET_CAP_TOKENS",
    /**
     * Tool to retrieve entry and exit crypto trading signals. use when optimizing trading strategies with signal-based insights.
     */
    GET_TRADING_SIGNALS: "TOKEN_METRICS_GET_TRADING_SIGNALS",
    /**
     * Tool to retrieve a paginated list of supported tokens with metadata. use when you need comprehensive token listings across price, market cap, supply, and contract details.
     */
    TOKEN_METRICS_GET_TOKENS: "TOKEN_METRICS_TOKEN_METRICS_GET_TOKENS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TOKEN_METRICS".
 */
export type TOKEN_METRICS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TOKEN_METRICS".
 */
export type TOKEN_METRICS_TRIGGER_EVENTS = {}
