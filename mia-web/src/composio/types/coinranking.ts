// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of COINRANKING's COINRANKING_GET_COINS tool input.
 */
type COINRANKING_GET_COINS_INPUT = {
  /**
   * Limit
   * @description Maximum number of items to return (1-50).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip for pagination.
   * @default null
   */
  offset: number | null;
  /**
   * Order By
   * @description Field to sort by. One of: 'marketCap', 'price', 'change'.
   * @default null
   * @enum {string|null}
   */
  orderBy: "marketCap" | "price" | "change" | null;
  /**
   * Order Direction
   * @description Sort direction: 'asc' or 'desc'.
   * @default null
   * @enum {string|null}
   */
  orderDirection: "asc" | "desc" | null;
  /**
   * Reference Currency Uuid
   * @description UUID of the reference currency to display prices (e.g., 'yhjMzLPhuIDl').
   * @default null
   */
  referenceCurrencyUuid: string | null;
  /**
   * Search
   * @description Full or partial coin name or symbol to filter results.
   * @default null
   */
  search: string | null;
  /**
   * Tiers
   * @description Comma-separated tier numbers to filter by (e.g., '1,2').
   * @default null
   */
  tiers: string | null;
  /**
   * Time Period
   * @description Time period for price history. Allowed values: '24h', '7d', '30d', '1y', etc.
   * @default null
   */
  timePeriod: string | null;
};

/**
 * Type of COINRANKING's COINRANKING_GET_COINS tool output.
 */
type COINRANKING_GET_COINS_OUTPUT = {
  /**
   * Data
   * @description Payload containing stats and coins array.
   */
  data?: {
      /**
       * Coins
       * @description List of coin objects.
       */
      coins: {
          /**
           * 24H Volume
           * @description 24h trading volume in the reference currency.
           * @default null
           */
          "24hVolume": string | null;
          /**
           * Btc Price
           * @description Price quoted in BTC.
           * @default null
           */
          btcPrice: string | null;
          /**
           * Change
           * @description Price change percentage over the selected time period.
           */
          change: string;
          /**
           * Coinranking Url
           * @description URL to the coin's details page.
           */
          coinrankingUrl: string;
          /**
           * Color
           * @description Hex color code for UI.
           * @default null
           */
          color: string | null;
          /**
           * Icon Url
           * @description URL to the coin's icon.
           * @default null
           */
          iconUrl: string | null;
          /**
           * Listed At
           * @description UNIX timestamp when the coin was listed.
           */
          listedAt: number;
          /**
           * Low Volume
           * @description True if trading volume is low.
           */
          lowVolume: boolean;
          /**
           * Market Cap
           * @description Market cap in the reference currency.
           */
          marketCap: string;
          /**
           * Name
           * @description Coin name (e.g., Bitcoin).
           */
          name: string;
          /**
           * Price
           * @description Current price in the reference currency.
           */
          price: string;
          /**
           * Rank
           * @description Global rank by market cap.
           */
          rank: number;
          /**
           * Sparkline
           * @description Price history points over selected time period.
           */
          sparkline: string[];
          /**
           * Symbol
           * @description Ticker symbol (e.g., BTC).
           */
          symbol: string;
          /**
           * Tier
           * @description Tier classification.
           */
          tier: number;
          /**
           * Uuid
           * @description Unique coin ID.
           */
          uuid: string;
      }[];
      /**
       * Stats
       * @description Pagination and count statistics.
       */
      stats: {
          /**
           * Limit
           * @description Limit used in this request.
           */
          limit: number;
          /**
           * Offset
           * @description Offset used in this request.
           */
          offset: number;
          /**
           * Total
           * @description Total number of matching coins.
           */
          total: number;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status, e.g., 'success'.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of COINRANKING's COINRANKING_GET_COIN_HISTORY tool input.
 */
type COINRANKING_GET_COIN_HISTORY_INPUT = {
  /**
   * Id
   * @description UUID of the coin to retrieve history for
   */
  id?: string;
  /**
   * Reference Currency Uuid
   * @description UUID of the currency to show prices in (optional)
   * @default null
   */
  referenceCurrencyUuid: string | null;
  /**
   * Time Period
   * @description Time interval for the history data; one of '24h', '7d', '30d', '1y', '5y' (optional)
   * @default null
   * @enum {string|null}
   */
  timePeriod: "24h" | "7d" | "30d" | "1y" | "5y" | null;
};

/**
 * Type of COINRANKING's COINRANKING_GET_COIN_HISTORY tool output.
 */
type COINRANKING_GET_COIN_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Payload containing change percentage and history array
   */
  data?: {
      /**
       * Change
       * @description Percent change for the requested period
       */
      change: string;
      /**
       * History
       * @description List of historical price data points
       */
      history: {
          /**
           * Price
           * @description Price value
           */
          price: string;
          /**
           * Timestamp
           * @description Unix timestamp of the price point
           */
          timestamp: number;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of COINRANKING's COINRANKING_GET_REFERENCE_CURRENCIES tool input.
 */
type COINRANKING_GET_REFERENCE_CURRENCIES_INPUT = {
  /**
   * Limit
   * @description Maximum number of reference currencies to return (max 50).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip before starting to collect the result set.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of COINRANKING's COINRANKING_GET_REFERENCE_CURRENCIES tool output.
 */
type COINRANKING_GET_REFERENCE_CURRENCIES_OUTPUT = {
  /**
   * Data
   * @description Payload containing reference currencies array.
   */
  data?: {
      /**
       * Reference Currencies
       * @description List of reference currency objects.
       */
      referenceCurrencies: {
          /**
           * Decimal
           * @description Number of decimal places supported.
           */
          decimal: number;
          /**
           * Name
           * @description Name of the reference currency.
           */
          name: string;
          /**
           * Sign
           * @description Symbol representation (e.g., $, ฿).
           * @default null
           */
          sign: string | null;
          /**
           * Symbol
           * @description Symbol of the reference currency (e.g., USD, BTC).
           */
          symbol: string;
          /**
           * Symbol Native
           * @description Native symbol for the currency (e.g., '¥').
           * @default null
           */
          symbolNative: string | null;
          /**
           * Type
           * @description Currency type (e.g., 'fiat', 'crypto').
           */
          type: string;
          /**
           * Uuid
           * @description Unique identifier of the reference currency.
           */
          uuid: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API response status (e.g., 'success').
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of COINRANKING's COINRANKING_GET_STATS tool input.
 */
type COINRANKING_GET_STATS_INPUT = object;

/**
 * Type of COINRANKING's COINRANKING_GET_STATS tool output.
 */
type COINRANKING_GET_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stats
       * @description Global cryptocurrency market statistics
       */
      stats: {
          /**
           * Total
           * @description Total number of cryptocurrencies
           * @default null
           */
          total: number | null;
          /**
           * Total24H Volume
           * @description Total 24h trading volume of all coins, as a string to preserve precision
           */
          total24hVolume: string;
          /**
           * Total Coins
           * @description Total number of coins listed
           */
          totalCoins: number;
          /**
           * Total Exchanges
           * @description Total number of exchanges
           */
          totalExchanges: number;
          /**
           * Total Market Cap
           * @description Total market capitalization of all coins, as a string to preserve precision
           */
          totalMarketCap: string;
          /**
           * Total Markets
           * @description Total number of markets
           */
          totalMarkets: number;
      };
      /**
       * Status
       * @description API response status, e.g. 'success'
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
 * Type of COINRANKING's COINRANKING_GET_TAGS tool input.
 */
type COINRANKING_GET_TAGS_INPUT = object;

/**
 * Type of COINRANKING's COINRANKING_GET_TAGS tool output.
 */
type COINRANKING_GET_TAGS_OUTPUT = {
  /**
   * Data
   * @description Payload containing list of tags
   */
  data?: {
      /**
       * Tags
       * @description List of available tags
       */
      tags: {
          /**
           * Coin Count
           * @description Number of coins associated with this tag
           */
          coinCount: number;
          /**
           * Id
           * @description Unique identifier for the tag
           */
          id: string;
          /**
           * Name
           * @description Name of the tag
           */
          name: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API response status, e.g., 'success'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of COINRANKING's COINRANKING_GET_TRENDING_COINS tool input.
 */
type COINRANKING_GET_TRENDING_COINS_INPUT = object;

/**
 * Type of COINRANKING's COINRANKING_GET_TRENDING_COINS tool output.
 */
type COINRANKING_GET_TRENDING_COINS_OUTPUT = {
  /**
   * Data
   * @description Payload containing trending coins
   */
  data?: {
      /**
       * Coins
       * @description List of trending coins
       */
      coins: {
          /**
           * 24H Volume
           * @description 24-hour trading volume
           */
          "24hVolume": string;
          /**
           * Change
           * @description 24-hour price change in percentage
           */
          change: string;
          /**
           * Coinranking Url
           * @description URL to this coin's detail page on Coinranking
           */
          coinrankingUrl: string;
          /**
           * Color
           * @description Hex color code for the coin
           */
          color: string;
          /**
           * Icon Url
           * @description URL to the coin's icon
           */
          iconUrl: string;
          /**
           * Listed At
           * @description UNIX timestamp when the coin was listed
           */
          listedAt: number;
          /**
           * Low Volume
           * @description Indicator if the coin has low trading volume
           */
          lowVolume: boolean;
          /**
           * Market Cap
           * @description Market capitalization of the coin
           */
          marketCap: string;
          /**
           * Name
           * @description Coin name
           */
          name: string;
          /**
           * Price
           * @description Current price of the coin
           */
          price: string;
          /**
           * Rank
           * @description Coin ranking
           */
          rank: number;
          /**
           * Sparkline
           * @description Array of price points for sparkline
           */
          sparkline: string[];
          /**
           * Symbol
           * @description Coin symbol
           */
          symbol: string;
          /**
           * Tier
           * @description Coin tier
           */
          tier: number;
          /**
           * Uuid
           * @description Unique coin identifier
           */
          uuid: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API response status
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "COINRANKING".
 */
export type COINRANKING_TOOL_INPUTS = {
  GET_COINS: COINRANKING_GET_COINS_INPUT
  GET_COIN_HISTORY: COINRANKING_GET_COIN_HISTORY_INPUT
  GET_REFERENCE_CURRENCIES: COINRANKING_GET_REFERENCE_CURRENCIES_INPUT
  GET_STATS: COINRANKING_GET_STATS_INPUT
  GET_TAGS: COINRANKING_GET_TAGS_INPUT
  GET_TRENDING_COINS: COINRANKING_GET_TRENDING_COINS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "COINRANKING".
 */
export type COINRANKING_TOOL_OUTPUTS = {
  GET_COINS: COINRANKING_GET_COINS_OUTPUT
  GET_COIN_HISTORY: COINRANKING_GET_COIN_HISTORY_OUTPUT
  GET_REFERENCE_CURRENCIES: COINRANKING_GET_REFERENCE_CURRENCIES_OUTPUT
  GET_STATS: COINRANKING_GET_STATS_OUTPUT
  GET_TAGS: COINRANKING_GET_TAGS_OUTPUT
  GET_TRENDING_COINS: COINRANKING_GET_TRENDING_COINS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's COINRANKING toolkit.
 */
export const COINRANKING = {
  slug: "coinranking",
  tools: {
    /**
     * Tool to retrieve a list of all coins with optional filters and pagination. use when you need to fetch coins matching specific criteria and paginate through results.
     */
    GET_COINS: "COINRANKING_GET_COINS",
    /**
     * Tool to retrieve historical price data for a specific coin over a time period. use when you need to analyze past performance of a coin; call after confirming its uuid.
     */
    GET_COIN_HISTORY: "COINRANKING_GET_COIN_HISTORY",
    /**
     * Tool to retrieve a list of all reference currencies with optional pagination. use when you need supported fiat or crypto denominators for price conversions.
     */
    GET_REFERENCE_CURRENCIES: "COINRANKING_GET_REFERENCE_CURRENCIES",
    /**
     * Tool to retrieve global cryptocurrency market statistics. use when you need an overview of the entire crypto market.
     */
    GET_STATS: "COINRANKING_GET_STATS",
    /**
     * Tool to fetch all coin tags. use when you need the canonical list of tags after authenticating.
     */
    GET_TAGS: "COINRANKING_GET_TAGS",
    /**
     * Tool to retrieve a list of trending coins ranked by user engagement and popularity. use when you need up-to-date trending coin data for analysis or display.
     */
    GET_TRENDING_COINS: "COINRANKING_GET_TRENDING_COINS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "COINRANKING".
 */
export type COINRANKING_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "COINRANKING".
 */
export type COINRANKING_TRIGGER_EVENTS = {}
