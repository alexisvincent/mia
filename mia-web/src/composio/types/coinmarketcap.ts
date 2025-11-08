// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of COINMARKETCAP's COINMARKETCAP_CMC_EXCHANGE_LISTINGS_HISTORICAL tool input.
 */
type COINMARKETCAP_CMC_EXCHANGE_LISTINGS_HISTORICAL_INPUT = {
  /**
   * Date
   * @description Historical date to retrieve exchange listings for, in YYYY-MM-DD format
   */
  date?: string;
  /**
   * Limit
   * @description Number of results to return (max 5000)
   * @default null
   */
  limit: number | null;
  /**
   * Start
   * @description 1-based index of the first item to return
   * @default null
   */
  start: number | null;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_CMC_EXCHANGE_LISTINGS_HISTORICAL tool output.
 */
type COINMARKETCAP_CMC_EXCHANGE_LISTINGS_HISTORICAL_OUTPUT = {
  /**
   * Data
   * @description List of exchange listings as of the specified date
   */
  data?: {
      /**
       * First Historical Data
       * @description ISO 8601 timestamp of first historical data
       * @default null
       */
      first_historical_data: string | null;
      /**
       * Id
       * @description CoinMarketCap exchange ID
       */
      id: number;
      /**
       * Is Active
       * @description 1 if active, 0 if inactive/untracked
       */
      is_active: number;
      /**
       * Last Historical Data
       * @description ISO 8601 timestamp of most recent historical data
       * @default null
       */
      last_historical_data: string | null;
      /**
       * Name
       * @description Exchange name
       */
      name: string;
      /**
       * Slug
       * @description URL-friendly exchange slug
       */
      slug: string;
      /**
       * Status
       * @description Listing status of the exchange
       * @default null
       */
      status: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status metadata
   */
  status?: {
      /**
       * Credit Count
       * @description API credits consumed by this request
       */
      credit_count: number;
      /**
       * Elapsed
       * @description Processing time in milliseconds
       */
      elapsed: number;
      /**
       * Error Code
       * @description Error code (0 indicates success)
       */
      error_code: number;
      /**
       * Error Message
       * @description Error message, if any
       * @default null
       */
      error_message: string | null;
      /**
       * Notice
       * @description Additional information
       * @default null
       */
      notice: string | null;
      /**
       * Timestamp
       * @description ISO 8601 timestamp of the request
       */
      timestamp: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_CRYPTOCURRENCY_LISTINGS_LATEST tool input.
 */
type COINMARKETCAP_CRYPTOCURRENCY_LISTINGS_LATEST_INPUT = {
  /**
   * Aux
   * @description Comma-separated additional fields to include
   * @default null
   */
  aux: string | null;
  /**
   * Circulating Supply Max
   * @description Maximum circulating supply filter
   * @default null
   */
  circulating_supply_max: number | null;
  /**
   * Circulating Supply Min
   * @description Minimum circulating supply filter
   * @default null
   */
  circulating_supply_min: number | null;
  /**
   * Convert
   * @description Comma-separated fiat/crypto symbols for quote conversion (e.g., 'USD,EUR,BTC')
   * @default null
   */
  convert: string | null;
  /**
   * Convert Id
   * @description Comma-separated CoinMarketCap IDs for quote conversion
   * @default null
   */
  convert_id: string | null;
  /**
   * Cryptocurrency Type
   * @description Filter by asset type
   * @default null
   * @enum {string|null}
   */
  cryptocurrency_type: "all" | "coins" | "tokens" | null;
  /**
   * Limit
   * @description Number of results to return (max 5000)
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
   * Percent Change 24H Max
   * @description Maximum 24h percent change filter
   * @default null
   */
  percent_change_24h_max: number | null;
  /**
   * Percent Change 24H Min
   * @description Minimum 24h percent change filter
   * @default null
   */
  percent_change_24h_min: number | null;
  /**
   * Price Max
   * @description Maximum price filter
   * @default null
   */
  price_max: number | null;
  /**
   * Price Min
   * @description Minimum price filter
   * @default null
   */
  price_min: number | null;
  /**
   * Sort
   * @description Field to sort by
   * @default null
   * @enum {string|null}
   */
  sort: "market_cap" | "price" | "volume_24h" | "percent_change_24h" | "name" | null;
  /**
   * Sort Dir
   * @description Sort direction
   * @default null
   * @enum {string|null}
   */
  sort_dir: "asc" | "desc" | null;
  /**
   * Start
   * @description 1-based index of the first item to return
   * @default null
   */
  start: number | null;
  /**
   * Tag
   * @description Comma-separated list of tags to filter by
   * @default null
   */
  tag: string | null;
  /**
   * Volume 24H Max
   * @description Maximum 24h trading volume filter
   * @default null
   */
  volume_24h_max: number | null;
  /**
   * Volume 24H Min
   * @description Minimum 24h trading volume filter
   * @default null
   */
  volume_24h_min: number | null;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_CRYPTOCURRENCY_LISTINGS_LATEST tool output.
 */
type COINMARKETCAP_CRYPTOCURRENCY_LISTINGS_LATEST_OUTPUT = {
  /**
   * Data
   * @description List of cryptocurrency listings
   */
  data?: {
      /**
       * Circulating Supply
       * @description Current circulating supply
       */
      circulating_supply: number;
      /**
       * Cmc Rank
       * @description Asset rank by market cap
       */
      cmc_rank: number;
      /**
       * Date Added
       * @description ISO-8601 timestamp when asset was added to CMC
       */
      date_added: string;
      /**
       * Id
       * @description CoinMarketCap unique ID
       */
      id: number;
      /**
       * Infinite Supply
       * @description Whether supply is uncapped
       */
      infinite_supply: boolean;
      /**
       * Last Updated
       * @description ISO-8601 timestamp of the last data update
       */
      last_updated: string;
      /**
       * Max Supply
       * @description Maximum possible supply if known
       * @default null
       */
      max_supply: number | null;
      /**
       * Name
       * @description Asset name
       */
      name: string;
      /**
       * Num Market Pairs
       * @description Number of market pairs across tracked exchanges
       */
      num_market_pairs: number;
      /**
       * CryptocurrencyListingsLatestPlatform
       * @description Token platform details, if applicable
       * @default null
       */
      platform: {
          /**
           * Id
           * @description Platform CoinMarketCap ID
           */
          id: number;
          /**
           * Name
           * @description Platform name
           */
          name: string;
          /**
           * Slug
           * @description Platform slug
           */
          slug: string;
          /**
           * Symbol
           * @description Platform ticker symbol
           */
          symbol: string;
          /**
           * Token Address
           * @description On-chain token contract address
           */
          token_address: string;
      } | null;
      /**
       * Quote
       * @description Mapping of quote symbol to market quote data
       */
      quote: {
          [key: string]: {
              /**
               * Fully Diluted Market Cap
               * @description Fully diluted market cap in quote currency
               */
              fully_diluted_market_cap: number;
              /**
               * Last Updated
               * @description ISO-8601 timestamp of last quote update
               */
              last_updated: string;
              /**
               * Market Cap
               * @description Market capitalization in quote currency
               */
              market_cap: number;
              /**
               * Market Cap Dominance
               * @description Market cap dominance percentage
               */
              market_cap_dominance: number;
              /**
               * Percent Change 1H
               * @description 1h price change percentage
               */
              percent_change_1h: number;
              /**
               * Percent Change 24H
               * @description 24h price change percentage
               */
              percent_change_24h: number;
              /**
               * Percent Change 30D
               * @description 30d price change percentage
               */
              percent_change_30d: number;
              /**
               * Percent Change 60D
               * @description 60d price change percentage
               */
              percent_change_60d: number;
              /**
               * Percent Change 7D
               * @description 7d price change percentage
               */
              percent_change_7d: number;
              /**
               * Percent Change 90D
               * @description 90d price change percentage
               */
              percent_change_90d: number;
              /**
               * Price
               * @description Latest price in quote currency
               */
              price: number;
              /**
               * Volume 24H
               * @description 24h trading volume in quote currency
               */
              volume_24h: number;
              /**
               * Volume Change 24H
               * @description 24h volume change percentage
               */
              volume_change_24h: number;
          };
      };
      /**
       * Self Reported Circulating Supply
       * @description Project self-reported circulating supply
       * @default null
       */
      self_reported_circulating_supply: number | null;
      /**
       * Self Reported Market Cap
       * @description Project self-reported market cap
       * @default null
       */
      self_reported_market_cap: number | null;
      /**
       * Slug
       * @description URL-friendly identifier
       */
      slug: string;
      /**
       * Symbol
       * @description Asset ticker symbol
       */
      symbol: string;
      /**
       * Tags
       * @description Classification tags
       */
      tags: string[];
      /**
       * Total Supply
       * @description Current total supply
       */
      total_supply: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status metadata
   */
  status?: {
      /**
       * Credit Count
       * @description API credits consumed by this request
       */
      credit_count: number;
      /**
       * Elapsed
       * @description Processing time in milliseconds
       */
      elapsed: number;
      /**
       * Error Code
       * @description Error code (0 indicates success)
       */
      error_code: number;
      /**
       * Error Message
       * @description Error message if any
       * @default null
       */
      error_message: string | null;
      /**
       * Notice
       * @description Additional informational message
       * @default null
       */
      notice: string | null;
      /**
       * Timestamp
       * @description ISO-8601 timestamp of response generation
       */
      timestamp: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_CRYPTOCURRENCY_MAP tool input.
 */
type COINMARKETCAP_CRYPTOCURRENCY_MAP_INPUT = {
  /**
   * Aux
   * @description Comma-separated additional fields to include: platform, first_historical_data, last_historical_data, is_active.
   * @default null
   */
  aux: string | null;
  /**
   * Id
   * @description Comma-separated CoinMarketCap IDs to filter, e.g., '1,1027'.
   * @default null
   */
  id: string | null;
  /**
   * Limit
   * @description Number of results to return, between 1 and 5000.
   * @default 100
   */
  limit: number;
  /**
   * Listing Status
   * @description Comma-separated list of statuses to include: active, inactive, untracked. Defaults to 'active'.
   * @default active
   */
  listing_status: string | null;
  /**
   * Slug
   * @description Comma-separated URL slugs to filter, e.g., 'bitcoin,ethereum'.
   * @default null
   */
  slug: string | null;
  /**
   * Sort
   * @description Field to sort by: 'id' or 'cmc_rank'.
   * @default id
   * @enum {string}
   */
  sort: "id" | "cmc_rank";
  /**
   * Start
   * @description 1-based index of the first item to return.
   * @default 1
   */
  start: number;
  /**
   * Symbol
   * @description Comma-separated cryptocurrency symbols to filter, e.g., 'BTC,ETH'.
   * @default null
   */
  symbol: string | null;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_CRYPTOCURRENCY_MAP tool output.
 */
type COINMARKETCAP_CRYPTOCURRENCY_MAP_OUTPUT = {
  /**
   * Data
   * @description List of mapped cryptocurrencies.
   */
  data?: {
      /**
       * First Historical Data
       * @description First date of historical data (ISO 8601).
       * @default null
       */
      first_historical_data: string | null;
      /**
       * Id
       * @description CoinMarketCap cryptocurrency ID.
       */
      id: number;
      /**
       * Is Active
       * @description 1 if active, 0 if inactive.
       */
      is_active: number;
      /**
       * Last Historical Data
       * @description Last date of historical data (ISO 8601).
       * @default null
       */
      last_historical_data: string | null;
      /**
       * Name
       * @description Asset name.
       */
      name: string;
      /**
       * Platform
       * @description Parent chain platform information for tokens.
       * @default null
       */
      platform: {
          /**
           * Id
           * @description CoinMarketCap platform ID.
           */
          id: number;
          /**
           * Name
           * @description Platform name.
           */
          name: string;
          /**
           * Slug
           * @description Platform URL-friendly slug.
           */
          slug: string;
          /**
           * Symbol
           * @description Platform symbol.
           */
          symbol: string;
          /**
           * Token Address
           * @description Contract address on the platform.
           */
          token_address: string;
      } | null;
      /**
       * Slug
       * @description URL-friendly slug.
       */
      slug: string;
      /**
       * Symbol
       * @description Ticker symbol.
       */
      symbol: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status metadata.
   */
  status?: {
      /**
       * Credit Count
       * @description API credits consumed.
       */
      credit_count: number;
      /**
       * Elapsed
       * @description Time taken in milliseconds.
       */
      elapsed: number;
      /**
       * Error Code
       * @description Error code; 0 indicates success.
       */
      error_code: number;
      /**
       * Error Message
       * @description Error message, if any.
       * @default null
       */
      error_message: string | null;
      /**
       * Notice
       * @description Additional info or notice.
       * @default null
       */
      notice: string | null;
      /**
       * Timestamp
       * @description ISO 8601 timestamp of the request.
       */
      timestamp: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_CRYPTOCURRENCY_QUOTES_LATEST tool input.
 */
type COINMARKETCAP_CRYPTOCURRENCY_QUOTES_LATEST_INPUT = {
  /**
   * Aux
   * @description Comma-separated list of auxiliary data fields to include.
   * @default null
   */
  aux: string | null;
  /**
   * Convert
   * @description Fiat or cryptocurrency symbol to convert values into. Cannot be used with convert_id.
   * @default null
   */
  convert: string | null;
  /**
   * Convert Id
   * @description Comma-separated CoinMarketCap IDs for conversion currencies. Cannot be used with convert.
   * @default null
   */
  convert_id: string | null;
  /**
   * Id
   * @description Comma-separated CoinMarketCap cryptocurrency IDs. Provide this or symbol or slug.
   * @default null
   */
  id: string | null;
  /**
   * Skip Invalid
   * @description If true, invalid symbols/IDs are skipped instead of erroring.
   * @default false
   */
  skip_invalid: boolean | null;
  /**
   * Slug
   * @description Comma-separated cryptocurrency slugs. Provide this or id or symbol.
   * @default null
   */
  slug: string | null;
  /**
   * Symbol
   * @description Comma-separated cryptocurrency symbols. Provide this or id or slug.
   * @default null
   */
  symbol: string | null;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_CRYPTOCURRENCY_QUOTES_LATEST tool output.
 */
type COINMARKETCAP_CRYPTOCURRENCY_QUOTES_LATEST_OUTPUT = {
  /**
   * Data
   * @description Mapping from crypto ID to data and quotes.
   */
  data?: {
      [key: string]: {
          /**
           * Circulating Supply
           * @description Circulating supply.
           */
          circulating_supply: number;
          /**
           * Cmc Rank
           * @description Rank by market cap on CMC.
           */
          cmc_rank: number;
          /**
           * Date Added
           * @description UTC datetime when coin was added.
           */
          date_added: string;
          /**
           * Id
           * @description CoinMarketCap internal ID.
           */
          id: number;
          /**
           * Last Updated
           * @description UTC datetime of last update for this record.
           */
          last_updated: string;
          /**
           * Max Supply
           * @description Maximum supply, if available.
           * @default null
           */
          max_supply: number | null;
          /**
           * Name
           * @description Cryptocurrency name.
           */
          name: string;
          /**
           * Num Market Pairs
           * @description Number of market pairs.
           */
          num_market_pairs: number;
          /**
           * Platform
           * @description Platform contract details if token, keys: id, name, symbol, slug, token_address.
           * @default null
           */
          platform: {
              [key: string]: unknown;
          } | null;
          /**
           * Quote
           * @description Quotes keyed by conversion currency.
           */
          quote: {
              [key: string]: {
                  /**
                   * Fully Diluted Market Cap
                   * @description Fully diluted market cap.
                   */
                  fully_diluted_market_cap: number;
                  /**
                   * Last Updated
                   * @description UTC datetime of last update for this quote.
                   */
                  last_updated: string;
                  /**
                   * Market Cap
                   * @description Market capitalization.
                   */
                  market_cap: number;
                  /**
                   * Market Cap Dominance
                   * @description Market cap dominance percentage.
                   */
                  market_cap_dominance: number;
                  /**
                   * Percent Change 1H
                   * @description 1h price change percentage.
                   */
                  percent_change_1h: number;
                  /**
                   * Percent Change 24H
                   * @description 24h price change percentage.
                   */
                  percent_change_24h: number;
                  /**
                   * Percent Change 7D
                   * @description 7d price change percentage.
                   */
                  percent_change_7d: number;
                  /**
                   * Price
                   * @description Latest price.
                   */
                  price: number;
                  /**
                   * Volume 24H
                   * @description 24h trading volume.
                   */
                  volume_24h: number;
                  /**
                   * Volume Change 24H
                   * @description 24h volume change percentage.
                   */
                  volume_change_24h: number;
              };
          };
          /**
           * Slug
           * @description Cryptocurrency URL slug.
           */
          slug: string;
          /**
           * Symbol
           * @description Cryptocurrency symbol.
           */
          symbol: string;
          /**
           * Tags
           * @description List of tags.
           */
          tags: string[];
          /**
           * Total Supply
           * @description Total supply.
           */
          total_supply: number;
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
   * @description API status metadata.
   */
  status?: {
      /**
       * Credit Count
       * @description API credits used for this request.
       */
      credit_count: number;
      /**
       * Elapsed
       * @description Elapsed time in milliseconds.
       */
      elapsed: number;
      /**
       * Error Code
       * @description Error code; 0 means success.
       */
      error_code: number;
      /**
       * Error Message
       * @description Error message if any.
       * @default null
       */
      error_message: string | null;
      /**
       * Notice
       * @description Additional notice or warning.
       * @default null
       */
      notice: string | null;
      /**
       * Timestamp
       * @description UTC datetime of the API response.
       */
      timestamp: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_EXCHANGE_MAP tool input.
 */
type COINMARKETCAP_EXCHANGE_MAP_INPUT = {
  /**
   * Limit
   * @description Number of results to return (1-5000).
   * @default null
   */
  limit: number | null;
  /**
   * Listing Status
   * @description Filter by exchange listing status. Defaults to 'active'.
   * @default active
   * @enum {string|null}
   */
  listing_status: "active" | "inactive" | "untracked" | null;
  /**
   * Slug
   * @description Comma-separated exchange slugs to filter, e.g., 'binance,gdax'.
   * @default null
   */
  slug: string | null;
  /**
   * Start
   * @description 1-based index of the first item to return for pagination.
   * @default null
   */
  start: number | null;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_EXCHANGE_MAP tool output.
 */
type COINMARKETCAP_EXCHANGE_MAP_OUTPUT = {
  /**
   * Data
   * @description List of mapped exchanges.
   */
  data?: {
      /**
       * First Historical Data
       * @description ISO8601 timestamp of first historical data.
       * @default null
       */
      first_historical_data: string | null;
      /**
       * Id
       * @description CoinMarketCap exchange ID.
       */
      id: number;
      /**
       * Is Active
       * @description 1 if active, 0 if inactive/untracked.
       */
      is_active: number;
      /**
       * Last Historical Data
       * @description ISO8601 timestamp of most recent historical data.
       * @default null
       */
      last_historical_data: string | null;
      /**
       * Name
       * @description Exchange name.
       */
      name: string;
      /**
       * Slug
       * @description URL-friendly exchange slug.
       */
      slug: string;
      /**
       * Status
       * @description Listing status for the exchange (e.g., 'active').
       * @default null
       */
      status: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status metadata.
   */
  status?: {
      /**
       * Credit Count
       * @description API credits consumed.
       */
      credit_count: number;
      /**
       * Elapsed
       * @description Time taken in milliseconds.
       */
      elapsed: number;
      /**
       * Error Code
       * @description Error code; 0 indicates success.
       */
      error_code: number;
      /**
       * Error Message
       * @description Error message, if any.
       * @default null
       */
      error_message: string | null;
      /**
       * Notice
       * @description Additional info or notice.
       * @default null
       */
      notice: string | null;
      /**
       * Timestamp
       * @description ISO 8601 timestamp of the request.
       */
      timestamp: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_GET_CRYPTOCURRENCY_INFO tool input.
 */
type COINMARKETCAP_GET_CRYPTOCURRENCY_INFO_INPUT = {
  /**
   * Id
   * @description List of CoinMarketCap cryptocurrency IDs. Required if `slug` and `symbol` are not provided.
   * @default null
   */
  id: number[] | null;
  /**
   * Slug
   * @description List of cryptocurrency slugs (e.g., ['bitcoin', 'ethereum']). Required if `id` and `symbol` are not provided.
   * @default null
   */
  slug: string[] | null;
  /**
   * Symbol
   * @description List of cryptocurrency symbols (e.g., ['BTC', 'ETH']). Required if `id` and `slug` are not provided.
   * @default null
   */
  symbol: string[] | null;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_GET_CRYPTOCURRENCY_INFO tool output.
 */
type COINMARKETCAP_GET_CRYPTOCURRENCY_INFO_OUTPUT = {
  /**
   * Data
   * @description Mapping from CoinMarketCap ID to detailed cryptocurrency info
   */
  data?: {
      [key: string]: {
          /**
           * Category
           * @description Asset category (e.g., coin, token)
           */
          category: string;
          /**
           * Date Added
           * @description Date added to CoinMarketCap (ISO 8601)
           */
          date_added: string;
          /**
           * Description
           * @description Detailed asset description
           */
          description: string;
          /**
           * Id
           * @description CoinMarketCap ID of the cryptocurrency
           */
          id: number;
          /**
           * Is Active
           * @description If the cryptocurrency is active (0 or 1)
           */
          is_active: number;
          /**
           * Is Hidden
           * @description If the cryptocurrency is hidden (0 or 1)
           */
          is_hidden: number;
          /**
           * Logo
           * @description URL to the logo image
           */
          logo: string;
          /**
           * Name
           * @description Name of the cryptocurrency
           */
          name: string;
          /**
           * Notice
           * @description Special notices if any
           * @default null
           */
          notice: string | null;
          /**
           * @description Platform details if this asset is a token
           * @default null
           */
          platform: {
              /**
               * Id
               * @description ID of the platform hosting the token
               */
              id: number;
              /**
               * Name
               * @description Name of the platform
               */
              name: string;
              /**
               * Slug
               * @description URL-friendly slug of the platform
               */
              slug: string;
              /**
               * Symbol
               * @description Ticker symbol of the platform
               */
              symbol: string;
              /**
               * Token Address
               * @description Token contract address on the platform
               */
              token_address: string;
          } | null;
          /**
           * Slug
           * @description URL-friendly slug
           */
          slug: string;
          /**
           * Subreddit
           * @description Subreddit name or URL
           * @default null
           */
          subreddit: string | null;
          /**
           * Symbol
           * @description Ticker symbol
           */
          symbol: string;
          /**
           * Tag-Groups
           * @description List of tag group names
           */
          "tag-groups": string[];
          /**
           * Tag-Names
           * @description List of tag display names
           */
          "tag-names": string[];
          /**
           * Tags
           * @description List of tag identifiers
           */
          tags: string[];
          /**
           * Twitter Username
           * @description Official Twitter username
           * @default null
           */
          twitter_username: string | null;
          /**
           * InfoUrls
           * @description Various related URLs for the cryptocurrency
           */
          urls: {
              /**
               * Announcement
               * @description Official announcement URLs
               */
              announcement: string[];
              /**
               * Chat
               * @description Chat channel URLs
               */
              chat: string[];
              /**
               * Explorer
               * @description Blockchain explorer URLs
               */
              explorer: string[];
              /**
               * Message Board
               * @description Message board URLs
               */
              message_board: string[];
              /**
               * Other
               * @description Other related URLs
               */
              other: string[];
              /**
               * Reddit
               * @description Reddit community URLs
               */
              reddit: string[];
              /**
               * Source Code
               * @description Source code repository URLs
               */
              source_code: string[];
              /**
               * Technical Doc
               * @description Technical documentation URLs
               */
              technical_doc: string[];
              /**
               * Twitter
               * @description Twitter profile URLs
               */
              twitter: string[];
              /**
               * Website
               * @description Official website URLs
               */
              website: string[];
          };
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
   * @description API request status information
   */
  status?: {
      /**
       * Credit Count
       * @description Number of API credits consumed
       */
      credit_count: number;
      /**
       * Elapsed
       * @description Time taken for the request in milliseconds
       */
      elapsed: number;
      /**
       * Error Code
       * @description Error code, where 0 indicates success
       */
      error_code: number;
      /**
       * Error Message
       * @description Error message if `error_code` is non-zero
       * @default null
       */
      error_message: string | null;
      /**
       * Timestamp
       * @description ISO 8601 timestamp when the request was completed
       */
      timestamp: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_GET_EXCHANGE_INFO tool input.
 */
type COINMARKETCAP_GET_EXCHANGE_INFO_INPUT = {
  /**
   * Aux
   * @description Comma-separated list of additional metadata fields to include: logo, description, date_launched, notice, countries, fiats, urls.
   * @default null
   */
  aux: string | null;
  /**
   * Id
   * @description List of CoinMarketCap exchange IDs. Required if `slug` is not provided.
   * @default null
   */
  id: number[] | null;
  /**
   * Slug
   * @description List of exchange slugs (e.g., ['binance', 'kraken']). Required if `id` is not provided.
   * @default null
   */
  slug: string[] | null;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_GET_EXCHANGE_INFO tool output.
 */
type COINMARKETCAP_GET_EXCHANGE_INFO_OUTPUT = {
  /**
   * Data
   * @description Mapping of exchange ID to metadata
   */
  data?: {
      [key: string]: {
          /**
           * Countries
           * @description Countries associated with the exchange
           */
          countries: string[];
          /**
           * Date Launched
           * @description Launch date (YYYY-MM-DD)
           * @default null
           */
          date_launched: string | null;
          /**
           * Description
           * @description Exchange description
           */
          description: string;
          /**
           * Fiats
           * @description List of supported fiat currencies
           */
          fiats: {
              /**
               * Name
               * @description Fiat currency name
               */
              name: string;
              /**
               * Sign
               * @description Currency sign (e.g., $)
               */
              sign: string;
              /**
               * Symbol
               * @description Fiat currency code (e.g., USD)
               */
              symbol: string;
          }[];
          /**
           * Id
           * @description CoinMarketCap exchange ID
           */
          id: number;
          /**
           * Logo
           * @description URL to the exchange logo
           */
          logo: string;
          /**
           * Name
           * @description Exchange name
           */
          name: string;
          /**
           * Notice
           * @description Important notices
           * @default null
           */
          notice: string | null;
          /**
           * Slug
           * @description Exchange slug
           */
          slug: string;
          /**
           * ExchangeUrls
           * @description Official URLs for the exchange
           */
          urls: {
              /**
               * Announcement
               * @description Announcement URLs
               */
              announcement: string[];
              /**
               * Blog
               * @description Blog URLs
               */
              blog: string[];
              /**
               * Chat
               * @description Chat channel URLs
               */
              chat: string[];
              /**
               * Discord
               * @description Discord URLs
               */
              discord: string[];
              /**
               * Facebook
               * @description Facebook URLs
               */
              facebook: string[];
              /**
               * Fee
               * @description Fee documentation URLs
               */
              fee: string[];
              /**
               * Medium
               * @description Medium URLs
               */
              medium: string[];
              /**
               * Reddit
               * @description Reddit URLs
               */
              reddit: string[];
              /**
               * Telegram
               * @description Telegram URLs
               */
              telegram: string[];
              /**
               * Twitter
               * @description Twitter URLs
               */
              twitter: string[];
              /**
               * Website
               * @description Official website URLs
               */
              website: string[];
          };
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
   * @description API request status
   */
  status?: {
      /**
       * Credit Count
       * @description API credits consumed
       */
      credit_count: number;
      /**
       * Elapsed
       * @description Time taken in milliseconds
       */
      elapsed: number;
      /**
       * Error Code
       * @description 0 indicates success, non-zero indicates an error
       */
      error_code: number;
      /**
       * Error Message
       * @description Error message if applicable
       * @default null
       */
      error_message: string | null;
      /**
       * Notice
       * @description Additional informational notice
       * @default null
       */
      notice: string | null;
      /**
       * Timestamp
       * @description ISO 8601 timestamp of the response
       */
      timestamp: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_GET_KEY_INFO tool input.
 */
type COINMARKETCAP_GET_KEY_INFO_INPUT = object;

/**
 * Type of COINMARKETCAP's COINMARKETCAP_GET_KEY_INFO tool output.
 */
type COINMARKETCAP_GET_KEY_INFO_OUTPUT = {
  /**
   * Data
   * @description API key details and usage statistics
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
   * Status
   * @description API status metadata
   */
  status?: {
      /**
       * Credit Count
       * @description API call credits consumed by the request
       */
      credit_count: number;
      /**
       * Elapsed
       * @description Time taken for the request in milliseconds
       */
      elapsed: number;
      /**
       * Error Code
       * @description Error code, where 0 indicates success
       */
      error_code: number;
      /**
       * Error Message
       * @description Error message, if any
       * @default null
       */
      error_message: string | null;
      /**
       * Timestamp
       * @description ISO 8601 timestamp when the call was executed
       */
      timestamp: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_GLOBAL_METRICS_QUOTES_LATEST tool input.
 */
type COINMARKETCAP_GLOBAL_METRICS_QUOTES_LATEST_INPUT = {
  /**
   * Convert
   * @description Comma-separated list of currency symbols to convert market quotes (e.g., 'USD,BTC').
   * @default null
   */
  convert: string | null;
  /**
   * Convert Id
   * @description Comma-separated list of CoinMarketCap IDs to convert market quotes (e.g., '1,2781').
   * @default null
   */
  convert_id: string | null;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_GLOBAL_METRICS_QUOTES_LATEST tool output.
 */
type COINMARKETCAP_GLOBAL_METRICS_QUOTES_LATEST_OUTPUT = {
  /**
   * Data
   * @description Latest global market metrics
   */
  data?: {
      /**
       * Active Cryptocurrencies
       * @description Count of active cryptocurrencies
       */
      active_cryptocurrencies: number;
      /**
       * Active Exchanges
       * @description Count of active exchanges
       */
      active_exchanges: number;
      /**
       * Btc Dominance
       * @description Bitcoin market cap dominance (%)
       */
      btc_dominance: number;
      /**
       * Eth Dominance
       * @description Ethereum market cap dominance (%)
       */
      eth_dominance: number;
      /**
       * Last Updated
       * @description ISO 8601 timestamp when metrics were last updated
       */
      last_updated: string;
      /**
       * Quote
       * @description Mapping from currency symbol to corresponding metrics quotes
       */
      quote: {
          [key: string]: {
              /**
               * Total Market Cap
               * @description Total market capitalization in quote currency
               */
              total_market_cap: number;
              /**
               * Total Volume 24H
               * @description Total 24h trading volume in quote currency
               */
              total_volume_24h: number;
          };
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
   * @description API status metadata
   */
  status?: {
      /**
       * Credit Count
       * @description API credits used
       */
      credit_count: number;
      /**
       * Elapsed
       * @description Processing time in milliseconds
       */
      elapsed: number;
      /**
       * Error Code
       * @description Error code; 0 indicates success
       */
      error_code: number;
      /**
       * Error Message
       * @description Error description, if any
       * @default null
       */
      error_message: string | null;
      /**
       * Timestamp
       * @description ISO 8601 timestamp when the request was processed
       */
      timestamp: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_PARTNER_MAP tool input.
 */
type COINMARKETCAP_PARTNER_MAP_INPUT = {
  /**
   * Limit
   * @description Number of results to return (1-5000).
   * @default null
   */
  limit: number | null;
  /**
   * Listing Status
   * @description Filter by listing status. Example: 'active', 'inactive', 'untracked'.
   * @default null
   */
  listing_status: string | null;
  /**
   * Slug
   * @description Comma-separated slugs to filter. Example: 'binance,gdax'
   * @default null
   */
  slug: string | null;
  /**
   * Start
   * @description 1-based index of the first item to return for pagination.
   * @default null
   */
  start: number | null;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_PARTNER_MAP tool output.
 */
type COINMARKETCAP_PARTNER_MAP_OUTPUT = {
  /**
   * Data
   * @description List of partner mappings.
   */
  data?: {
      /**
       * Id
       * @description CoinMarketCap partner ID.
       */
      id: number;
      /**
       * Name
       * @description Official partner name.
       */
      name: string;
      /**
       * Slug
       * @description Partner URL-friendly slug.
       */
      slug: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status metadata.
   */
  status?: {
      /**
       * Credit Count
       * @description API credits consumed.
       */
      credit_count: number;
      /**
       * Elapsed
       * @description Time taken in milliseconds.
       */
      elapsed: number;
      /**
       * Error Code
       * @description Error code; 0 indicates success.
       */
      error_code: number;
      /**
       * Error Message
       * @description Error message, if any.
       * @default null
       */
      error_message: string | null;
      /**
       * Notice
       * @description Additional notice.
       * @default null
       */
      notice: string | null;
      /**
       * Timestamp
       * @description ISO 8601 timestamp of the request.
       */
      timestamp: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_TOOLS_PRICE_CONVERSION tool input.
 */
type COINMARKETCAP_TOOLS_PRICE_CONVERSION_INPUT = {
  /**
   * Amount
   * @description Amount of the asset to convert.
   */
  amount?: number;
  /**
   * Convert
   * @description Comma-separated list of target currency symbols (e.g., USD,EUR).
   * @default null
   */
  convert: string | null;
  /**
   * Convert Id
   * @description Comma-separated list of CoinMarketCap IDs of target currencies.
   * @default null
   */
  convert_id: string | null;
  /**
   * Id
   * @description CoinMarketCap ID of the asset to convert from.
   * @default null
   */
  id: number | null;
  /**
   * Slug
   * @description URL-friendly slug of the asset to convert from (e.g., bitcoin).
   * @default null
   */
  slug: string | null;
  /**
   * Symbol
   * @description Ticker symbol of the asset to convert from (e.g., BTC).
   * @default null
   */
  symbol: string | null;
  /**
   * Time
   * @description Historical conversion time in ISO 8601 or YYYY-MM-DD.
   * @default null
   */
  time: string | null;
};

/**
 * Type of COINMARKETCAP's COINMARKETCAP_TOOLS_PRICE_CONVERSION tool output.
 */
type COINMARKETCAP_TOOLS_PRICE_CONVERSION_OUTPUT = {
  /**
   * Data
   * @description Conversion result.
   */
  data?: {
      /**
       * Amount
       * @description Input amount used for conversion.
       */
      amount: number;
      /**
       * Id
       * @description CoinMarketCap ID of the source asset.
       */
      id: number;
      /**
       * Last Updated
       * @description ISO 8601 timestamp of the price used.
       */
      last_updated: string;
      /**
       * Name
       * @description Name of the source asset.
       */
      name: string;
      /**
       * Quote
       * @description Map of target currency to quote.
       */
      quote: {
          [key: string]: {
              /**
               * Last Updated
               * @description ISO 8601 timestamp of the quote.
               */
              last_updated: string;
              /**
               * Price
               * @description Converted price for the specified amount.
               */
              price: number;
          };
      };
      /**
       * Symbol
       * @description Symbol of the source asset.
       */
      symbol: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status metadata.
   */
  status?: {
      /**
       * Credit Count
       * @description API credits consumed.
       */
      credit_count: number;
      /**
       * Elapsed
       * @description Response time in milliseconds.
       */
      elapsed: number;
      /**
       * Error Code
       * @description Error code; 0 indicates success.
       */
      error_code: number;
      /**
       * Error Message
       * @description Error message if any.
       * @default null
       */
      error_message: string | null;
      /**
       * Notice
       * @description Additional notice.
       * @default null
       */
      notice: string | null;
      /**
       * Timestamp
       * @description ISO 8601 timestamp of the response.
       */
      timestamp: string;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "COINMARKETCAP".
 */
export type COINMARKETCAP_TOOL_INPUTS = {
  CMC_EXCHANGE_LISTINGS_HISTORICAL: COINMARKETCAP_CMC_EXCHANGE_LISTINGS_HISTORICAL_INPUT
  CRYPTOCURRENCY_LISTINGS_LATEST: COINMARKETCAP_CRYPTOCURRENCY_LISTINGS_LATEST_INPUT
  CRYPTOCURRENCY_MAP: COINMARKETCAP_CRYPTOCURRENCY_MAP_INPUT
  CRYPTOCURRENCY_QUOTES_LATEST: COINMARKETCAP_CRYPTOCURRENCY_QUOTES_LATEST_INPUT
  EXCHANGE_MAP: COINMARKETCAP_EXCHANGE_MAP_INPUT
  GET_CRYPTOCURRENCY_INFO: COINMARKETCAP_GET_CRYPTOCURRENCY_INFO_INPUT
  GET_EXCHANGE_INFO: COINMARKETCAP_GET_EXCHANGE_INFO_INPUT
  GET_KEY_INFO: COINMARKETCAP_GET_KEY_INFO_INPUT
  GLOBAL_METRICS_QUOTES_LATEST: COINMARKETCAP_GLOBAL_METRICS_QUOTES_LATEST_INPUT
  PARTNER_MAP: COINMARKETCAP_PARTNER_MAP_INPUT
  TOOLS_PRICE_CONVERSION: COINMARKETCAP_TOOLS_PRICE_CONVERSION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "COINMARKETCAP".
 */
export type COINMARKETCAP_TOOL_OUTPUTS = {
  CMC_EXCHANGE_LISTINGS_HISTORICAL: COINMARKETCAP_CMC_EXCHANGE_LISTINGS_HISTORICAL_OUTPUT
  CRYPTOCURRENCY_LISTINGS_LATEST: COINMARKETCAP_CRYPTOCURRENCY_LISTINGS_LATEST_OUTPUT
  CRYPTOCURRENCY_MAP: COINMARKETCAP_CRYPTOCURRENCY_MAP_OUTPUT
  CRYPTOCURRENCY_QUOTES_LATEST: COINMARKETCAP_CRYPTOCURRENCY_QUOTES_LATEST_OUTPUT
  EXCHANGE_MAP: COINMARKETCAP_EXCHANGE_MAP_OUTPUT
  GET_CRYPTOCURRENCY_INFO: COINMARKETCAP_GET_CRYPTOCURRENCY_INFO_OUTPUT
  GET_EXCHANGE_INFO: COINMARKETCAP_GET_EXCHANGE_INFO_OUTPUT
  GET_KEY_INFO: COINMARKETCAP_GET_KEY_INFO_OUTPUT
  GLOBAL_METRICS_QUOTES_LATEST: COINMARKETCAP_GLOBAL_METRICS_QUOTES_LATEST_OUTPUT
  PARTNER_MAP: COINMARKETCAP_PARTNER_MAP_OUTPUT
  TOOLS_PRICE_CONVERSION: COINMARKETCAP_TOOLS_PRICE_CONVERSION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's COINMARKETCAP toolkit.
 */
export const COINMARKETCAP = {
  slug: "coinmarketcap",
  tools: {
    /**
     * Tool to retrieve historical exchange listings for a specified date. Use when you need exchange listings as of a past date (YYYY-MM-DD).
     */
    CMC_EXCHANGE_LISTINGS_HISTORICAL: "COINMARKETCAP_CMC_EXCHANGE_LISTINGS_HISTORICAL",
    /**
     * Tool to fetch the latest active cryptocurrency listings with their current market data. Use when you need up-to-date snapshots of asset metrics.
     */
    CRYPTOCURRENCY_LISTINGS_LATEST: "COINMARKETCAP_CRYPTOCURRENCY_LISTINGS_LATEST",
    /**
     * Tool to retrieve a mapping of all cryptocurrencies, including their unique IDs, symbols, and names. Use when you need reference IDs for crypto assets.
     */
    CRYPTOCURRENCY_MAP: "COINMARKETCAP_CRYPTOCURRENCY_MAP",
    /**
     * Tool to get the latest market quotes for one or more cryptocurrencies. Use after selecting desired coins.
     */
    CRYPTOCURRENCY_QUOTES_LATEST: "COINMARKETCAP_CRYPTOCURRENCY_QUOTES_LATEST",
    /**
     * Tool to retrieve a mapping of all cryptocurrency exchanges. Use when you need reference IDs for exchanges.
     */
    EXCHANGE_MAP: "COINMARKETCAP_EXCHANGE_MAP",
    /**
     * Tool to fetch metadata (description, logo, URLs) for one or more cryptocurrencies. Use when you need static asset details like descriptions, logos, and related links.
     */
    GET_CRYPTOCURRENCY_INFO: "COINMARKETCAP_GET_CRYPTOCURRENCY_INFO",
    /**
     * Tool to get detailed metadata for one or more exchanges. Use when you need exchange logos, supported fiats, launch dates, and official links.
     */
    GET_EXCHANGE_INFO: "COINMARKETCAP_GET_EXCHANGE_INFO",
    /**
     * Tool to retrieve your CoinMarketCap API key details, rate limits, and usage statistics. Use after setting your API key to inspect limits and usage.
     */
    GET_KEY_INFO: "COINMARKETCAP_GET_KEY_INFO",
    /**
     * Tool to obtain the latest global cryptocurrency market metrics (market cap, volume, dominance). Use when you need aggregated market-level data for analysis.
     */
    GLOBAL_METRICS_QUOTES_LATEST: "COINMARKETCAP_GLOBAL_METRICS_QUOTES_LATEST",
    /**
     * Tool to retrieve a mapping of all CoinMarketCap partners with their unique IDs, names, and slugs. Use when you need to map partner names or slugs to numeric IDs.
     */
    PARTNER_MAP: "COINMARKETCAP_PARTNER_MAP",
    /**
     * Tool to convert an amount from one cryptocurrency or fiat currency into another. Use when conversion rates are needed.
     */
    TOOLS_PRICE_CONVERSION: "COINMARKETCAP_TOOLS_PRICE_CONVERSION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "COINMARKETCAP".
 */
export type COINMARKETCAP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "COINMARKETCAP".
 */
export type COINMARKETCAP_TRIGGER_EVENTS = {}
