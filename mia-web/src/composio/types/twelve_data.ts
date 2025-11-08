// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TWELVE_DATA's TWELVE_DATA_COMMODITIES_LIST tool input.
 */
type TWELVE_DATA_COMMODITIES_LIST_INPUT = object;

/**
 * Type of TWELVE_DATA's TWELVE_DATA_COMMODITIES_LIST tool output.
 */
type TWELVE_DATA_COMMODITIES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Commodities
       * @description List of supported commodities
       */
      commodities: {
          /**
           * Code
           * @description Commodity code identifier
           */
          code: string;
          /**
           * Exchange
           * @description Exchange where the commodity is traded
           */
          exchange: string;
          /**
           * Name
           * @description Full name of the commodity
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_CRYPTOCURRENCIES tool input.
 */
type TWELVE_DATA_CRYPTOCURRENCIES_INPUT = {
  /**
   * Apikey
   * @description Your Twelve Data API key.
   */
  apikey?: string;
  /**
   * Outputsize
   * @description Number of records to return, must be >= 1.
   * @default null
   */
  outputsize: number | null;
  /**
   * Symbol
   * @description Comma-separated cryptocurrency symbol(s) to filter (e.g., 'BTC,ETH').
   * @default null
   */
  symbol: string | null;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_CRYPTOCURRENCIES tool output.
 */
type TWELVE_DATA_CRYPTOCURRENCIES_OUTPUT = {
  /**
   * Data
   * @description List of supported cryptocurrencies.
   */
  data?: {
      /**
       * Currency Base
       * @description Base currency symbol.
       */
      currency_base: string;
      /**
       * Currency Group
       * @description Grouping of the currency (e.g., 'crypto').
       */
      currency_group: string;
      /**
       * Currency Quote
       * @description Quote currency symbol.
       */
      currency_quote: string;
      /**
       * Name
       * @description Full name of the cryptocurrency.
       */
      name: string;
      /**
       * Status
       * @description Status of the currency, 'active' or 'inactive'.
       */
      status: string;
      /**
       * Symbol
       * @description Cryptocurrency symbol (e.g., 'BTC').
       */
      symbol: string;
      /**
       * Type
       * @description Type of currency, either 'crypto' or 'fiat'.
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Error or informational message if applicable.
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Status of the request, 'ok' or 'error'.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_CURRENCY_CONVERSION tool input.
 */
type TWELVE_DATA_CURRENCY_CONVERSION_INPUT = {
  /**
   * Amount
   * @description Non-negative amount in the source currency to convert.
   */
  amount?: number;
  /**
   * From Currency
   * @description Three-letter ISO currency code for the source currency (e.g., 'USD').
   */
  from_currency?: string;
  /**
   * To Currency
   * @description Three-letter ISO currency code for the target currency (e.g., 'EUR').
   */
  to_currency?: string;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_CURRENCY_CONVERSION tool output.
 */
type TWELVE_DATA_CURRENCY_CONVERSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Original amount provided for conversion.
       */
      amount: number;
      /**
       * Converted Amount
       * @description Converted amount in the target currency.
       */
      converted_amount: number;
      /**
       * From Currency
       * @description Source currency code.
       */
      from_currency: string;
      /**
       * Last Update
       * @description Timestamp of the last exchange rate update.
       */
      last_update: string;
      /**
       * Rate
       * @description Exchange rate applied.
       */
      rate: number;
      /**
       * Status
       * @description Status of the request, e.g., 'ok'.
       */
      status: string;
      /**
       * To Currency
       * @description Target currency code.
       */
      to_currency: string;
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
 * Type of TWELVE_DATA's TWELVE_DATA_DIVIDENDS tool input.
 */
type TWELVE_DATA_DIVIDENDS_INPUT = {
  /**
   * Country
   * @description Country code (e.g., 'United States').
   * @default null
   */
  country: string | null;
  /**
   * Delimiter
   * @description Delimiter for CSV output (only if format='CSV').
   * @default ,
   */
  delimiter: string | null;
  /**
   * End Date
   * @description End date in YYYY-MM-DD format.
   * @default null
   */
  end_date: string | null;
  /**
   * Exchange
   * @description Exchange code (e.g., 'NASDAQ').
   * @default null
   */
  exchange: string | null;
  /**
   * Format
   * @description Response format: 'JSON' or 'CSV'.
   * @default JSON
   * @enum {string}
   */
  format: "JSON" | "CSV";
  /**
   * Outputsize
   * @description Maximum number of dividend records to return (default 30).
   * @default 30
   */
  outputsize: number | null;
  /**
   * Start Date
   * @description Start date in YYYY-MM-DD format.
   * @default null
   */
  start_date: string | null;
  /**
   * Symbol
   * @description Instrument symbol (e.g., 'AAPL').
   */
  symbol?: string;
  /**
   * Timezone
   * @description Output timezone for datetime (e.g., 'UTC'). Default is exchange timezone.
   * @default null
   */
  timezone: string | null;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_DIVIDENDS tool output.
 */
type TWELVE_DATA_DIVIDENDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Currency
       * @description Currency code of the dividend.
       * @default null
       */
      currency: string | null;
      /**
       * Dividends
       * @description List of dividend records returned by the API.
       */
      dividends: {
          /**
           * Adjusted Dividend
           * @description Adjusted dividend per share.
           */
          adjusted_dividend: number;
          /**
           * Datetime
           * @description Date and time when dividend was paid (ISO 8601).
           */
          datetime: string;
          /**
           * Dividend
           * @description Payout per share.
           */
          dividend: number;
          /**
           * Frequency
           * @description Payout frequency (e.g., 'quarterly').
           */
          frequency: string;
          /**
           * Status
           * @description Payment status (e.g., 'paid').
           */
          status: string;
          /**
           * Type
           * @description Dividend type (e.g., 'regular').
           */
          type: string;
      }[];
      /**
       * Exchange
       * @description Exchange code for the instrument.
       * @default null
       */
      exchange: string | null;
      /**
       * Name
       * @description Full name of the instrument.
       * @default null
       */
      name: string | null;
      /**
       * Symbol
       * @description Instrument symbol.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_EARNINGS tool input.
 */
type TWELVE_DATA_EARNINGS_INPUT = {
  /**
   * Format
   * @description Response format: 'JSON' (default) or 'CSV'.
   * @default null
   * @enum {string|null}
   */
  format: "JSON" | "CSV" | null;
  /**
   * Source
   * @description Optional data source override.
   * @default null
   */
  source: string | null;
  /**
   * Symbol
   * @description Ticker symbol of the equity, e.g., 'AAPL'.
   */
  symbol?: string;
  /**
   * Type
   * @description Type of earnings report: 'annual' or 'quarterly'.
   * @default null
   * @enum {string|null}
   */
  type: "annual" | "quarterly" | null;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_EARNINGS tool output.
 */
type TWELVE_DATA_EARNINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Earnings
       * @description List of earnings report entries.
       */
      earnings: {
          /**
           * Currency
           * @description Currency of the reported values, e.g., 'USD'.
           */
          currency: string;
          /**
           * Estimated Eps
           * @description Analyst estimated earnings per share.
           */
          estimated_eps: string;
          /**
           * Estimated Revenue
           * @description Estimated revenue amount.
           */
          estimated_revenue: string;
          /**
           * Fiscal Date Ending
           * @description Fiscal period ending date in YYYY-MM-DD format.
           */
          fiscal_date_ending: string;
          /**
           * Reported Date
           * @description Date the earnings were reported in YYYY-MM-DD format.
           */
          reported_date: string;
          /**
           * Reported Eps
           * @description Reported earnings per share.
           */
          reported_eps: string;
          /**
           * Reported Revenue
           * @description Reported revenue amount.
           */
          reported_revenue: string;
          /**
           * Revenue Surprise
           * @description Revenue surprise difference.
           */
          revenue_surprise: string;
          /**
           * Revenue Surprise Percentage
           * @description Revenue surprise as a percentage.
           */
          revenue_surprise_percentage: string;
          /**
           * Surprise
           * @description Difference between reported and estimated EPS.
           */
          surprise: string;
          /**
           * Surprise Percentage
           * @description EPS surprise as a percentage.
           */
          surprise_percentage: string;
      }[];
      /**
       * Message
       * @description Error message if status is 'error'.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description API response status, 'ok' or 'error'.
       */
      status: string;
      /**
       * Symbol
       * @description Requested ticker symbol.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_EPS_REVISIONS tool input.
 */
type TWELVE_DATA_EPS_REVISIONS_INPUT = {
  /**
   * Dp
   * @description Number of decimal places for numeric values.
   * @default null
   */
  dp: number | null;
  /**
   * Exchange
   * @description Exchange code (e.g., 'NASDAQ'). Auto-detected from symbol if not provided.
   * @default null
   */
  exchange: string | null;
  /**
   * Format
   * @description Response format: 'json' or 'csv'.
   * @default json
   * @enum {string}
   */
  format: "json" | "csv";
  /**
   * Symbol
   * @description Stock symbol to request data for (e.g., 'AAPL').
   */
  symbol?: string;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_EPS_REVISIONS tool output.
 */
type TWELVE_DATA_EPS_REVISIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Exchange
       * @description The exchange the symbol is listed on.
       */
      exchange: string;
      /**
       * Revisions
       * @description List of EPS revision records.
       */
      revisions: {
          /**
           * Currency
           * @description Reporting currency.
           */
          currency: string;
          /**
           * Eps Actual
           * @description Reported EPS for the period.
           */
          eps_actual: number;
          /**
           * Eps Revision
           * @description The EPS revision value.
           */
          eps_revision: number;
          /**
           * Fiscal Date
           * @description Fiscal date for the revision entry (YYYY-MM-DD).
           */
          fiscal_date: string;
          /**
           * Revision Date
           * @description Date the revision was made (YYYY-MM-DD).
           */
          revision_date: string;
      }[];
      /**
       * Symbol
       * @description The symbol the data is for.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_EPS_TREND_ACTION tool input.
 */
type TWELVE_DATA_EPS_TREND_ACTION_INPUT = {
  /**
   * Format
   * @description Output format: 'JSON' or 'CSV'.
   * @default JSON
   * @enum {string}
   */
  format: "JSON" | "CSV";
  /**
   * Interval
   * @description Data time interval to retrieve EPS trend.
   * @default 1day
   */
  interval: string | null;
  /**
   * Outputsize
   * @description Number of results to return, must be at least 1.
   * @default 30
   */
  outputsize: number;
  /**
   * Symbol
   * @description The symbol of the instrument (e.g., 'AAPL').
   */
  symbol?: string;
  /**
   * Timezone
   * @description Timezone for response data, e.g., 'UTC' or 'America/New_York'.
   * @default null
   */
  timezone: string | null;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_EPS_TREND_ACTION tool output.
 */
type TWELVE_DATA_EPS_TREND_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Earnings
       * @description List of earnings EPS trend items.
       */
      earnings: {
          /**
           * Date
           * @description Report date (YYYY-MM-DD).
           */
          date: string;
          /**
           * Eps Actual
           * @description Actual earnings per share.
           */
          eps_actual: number;
          /**
           * Eps Difference
           * @description Difference between actual and estimated EPS.
           */
          eps_difference: number;
          /**
           * Eps Estimate
           * @description Estimated earnings per share.
           */
          eps_estimate: number;
          /**
           * Surprise Percent
           * @description EPS surprise as percentage.
           */
          surprise_percent: number;
      }[];
      /**
       * Status
       * @description API call status (ok or error).
       * @enum {string}
       */
      status: "ok" | "error";
      /**
       * Symbol
       * @description Instrument's symbol.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_ETFS_DIRECTORY tool input.
 */
type TWELVE_DATA_ETFS_DIRECTORY_INPUT = {
  /**
   * Country
   * @description Filter ETFs by country code (e.g., 'US').
   * @default null
   */
  country: string | null;
  /**
   * Exchange
   * @description Filter ETFs by exchange code (e.g., 'NASDAQ').
   * @default null
   */
  exchange: string | null;
  /**
   * Format
   * @description Response format: 'JSON' (default) or 'CSV'.
   * @default JSON
   * @enum {string}
   */
  format: "JSON" | "CSV";
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_ETFS_DIRECTORY tool output.
 */
type TWELVE_DATA_ETFS_DIRECTORY_OUTPUT = {
  /**
   * Data
   * @description List of ETF details.
   */
  data?: {
      /**
       * Country
       * @description Country of ETF listing.
       */
      country: string;
      /**
       * Currency
       * @description Trading currency.
       */
      currency: string;
      /**
       * Exchange
       * @description Exchange name.
       */
      exchange: string;
      /**
       * Mic Code
       * @description Market Identifier Code.
       */
      mic_code: string;
      /**
       * Name
       * @description ETF name.
       */
      name: string;
      /**
       * Symbol
       * @description ETF symbol.
       */
      symbol: string;
      /**
       * Type
       * @description Instrument type.
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Error or informational message if applicable.
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description API response status, e.g., 'ok' or 'error'.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_ETFS_FAMILY tool input.
 */
type TWELVE_DATA_ETFS_FAMILY_INPUT = {
  /**
   * Family
   * @description Name of the ETF family to filter by (e.g., 'Vanguard').
   * @default null
   */
  family: string | null;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_ETFS_FAMILY tool output.
 */
type TWELVE_DATA_ETFS_FAMILY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Country of the ETF
       */
      country: string;
      /**
       * Exchange
       * @description Exchange where the ETF is listed
       */
      exchange: string;
      /**
       * Family
       * @description ETF family name
       */
      family: string;
      /**
       * Name
       * @description Full ETF name
       */
      name: string;
      /**
       * Symbol
       * @description ETF symbol
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_ETFS_TYPE tool input.
 */
type TWELVE_DATA_ETFS_TYPE_INPUT = object;

/**
 * Type of TWELVE_DATA's TWELVE_DATA_ETFS_TYPE tool output.
 */
type TWELVE_DATA_ETFS_TYPE_OUTPUT = {
  /**
   * Data
   * @description A list of supported ETF types.
   */
  data?: {
      /**
       * Code
       * @description The unique code of the ETF type
       */
      code: string;
      /**
       * Name
       * @description The human-readable name of the ETF type
       */
      name: string;
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
 * Type of TWELVE_DATA's TWELVE_DATA_EXCHANGES tool input.
 */
type TWELVE_DATA_EXCHANGES_INPUT = {
  /**
   * Country
   * @description Filter exchanges by 2-letter ISO country code, e.g., 'US', 'GB'
   * @default null
   */
  country: string | null;
  /**
   * Format
   * @description Response format; allowed values: json, csv
   * @default json
   * @enum {string}
   */
  format: "json" | "csv";
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_EXCHANGES tool output.
 */
type TWELVE_DATA_EXCHANGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Exchanges
       * @description List of supported exchanges
       */
      exchanges: {
          /**
           * Code
           * @description Exchange short code
           */
          code: string;
          /**
           * Country
           * @description Country where the exchange is based
           */
          country: string;
          /**
           * Mic Code
           * @description Market identifier code
           */
          mic_code: string;
          /**
           * Name
           * @description Exchange display name
           */
          name: string;
          /**
           * Timezone
           * @description Exchange timezone
           */
          timezone: string;
          /**
           * Url
           * @description Exchange website URL
           */
          url: string;
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
 * Type of TWELVE_DATA's TWELVE_DATA_FOREX_PAIRS tool input.
 */
type TWELVE_DATA_FOREX_PAIRS_INPUT = object;

/**
 * Type of TWELVE_DATA's TWELVE_DATA_FOREX_PAIRS tool output.
 */
type TWELVE_DATA_FOREX_PAIRS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Currency Pairs
       * @description List of forex currency pair objects
       */
      currency_pairs: {
          /**
           * Currency Group
           * @description Currency group (e.g., 'major')
           */
          currency_group: string;
          /**
           * Description
           * @description Full name of the forex pair
           */
          description: string;
          /**
           * Symbol
           * @description The symbol for the forex pair (e.g., 'EUR/USD')
           */
          symbol: string;
      }[];
      /**
       * Message
       * @description Error or informational message if applicable
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Status of the API response, e.g., 'ok'
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
 * Type of TWELVE_DATA's TWELVE_DATA_INDICES tool input.
 */
type TWELVE_DATA_INDICES_INPUT = {
  /**
   * Country
   * @description Filter indices by 2-letter ISO country code, e.g., 'US', 'GB'
   * @default null
   */
  country: string | null;
  /**
   * Format
   * @description Response format; allowed values: json, csv
   * @default json
   * @enum {string}
   */
  format: "json" | "csv";
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_INDICES tool output.
 */
type TWELVE_DATA_INDICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Indices
       * @description List of market indices
       */
      indices: {
          /**
           * Country
           * @description Country code of the index
           */
          country: string;
          /**
           * Currency
           * @description Currency code for the index
           */
          currency: string;
          /**
           * Name
           * @description Index display name
           */
          name: string;
          /**
           * Symbol
           * @description Index symbol
           */
          symbol: string;
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
 * Type of TWELVE_DATA's TWELVE_DATA_MUTUAL_FUNDS_FAMILY tool input.
 */
type TWELVE_DATA_MUTUAL_FUNDS_FAMILY_INPUT = object;

/**
 * Type of TWELVE_DATA's TWELVE_DATA_MUTUAL_FUNDS_FAMILY tool output.
 */
type TWELVE_DATA_MUTUAL_FUNDS_FAMILY_OUTPUT = {
  /**
   * Data
   * @description List of mutual fund families.
   */
  data?: {
      /**
       * Country
       * @description Country where the family is based.
       */
      country: string;
      /**
       * Currency
       * @description Currency code used by the family.
       */
      currency: string;
      /**
       * Exchange
       * @description Exchange name.
       */
      exchange: string;
      /**
       * Name
       * @description Name of the mutual fund family.
       */
      name: string;
      /**
       * Symbol
       * @description Symbol identifier for the mutual fund family.
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
   * Message
   * @description Error or informational message if applicable.
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Status of the request, 'ok' or 'error'.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_MUTUAL_FUNDS_LIST tool input.
 */
type TWELVE_DATA_MUTUAL_FUNDS_LIST_INPUT = {
  /**
   * Country
   * @description Filter mutual funds by country (e.g., 'US').
   * @default null
   */
  country: string | null;
  /**
   * Exchange
   * @description Filter mutual funds by exchange (e.g., 'NASDAQ').
   * @default null
   */
  exchange: string | null;
  /**
   * Format
   * @description Output format: 'json' or 'csv'. Default is 'json'.
   * @default json
   * @enum {string}
   */
  format: "json" | "csv";
  /**
   * Type
   * @description Filter mutual funds by type (e.g., 'Open Ended').
   * @default null
   */
  type: string | null;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_MUTUAL_FUNDS_LIST tool output.
 */
type TWELVE_DATA_MUTUAL_FUNDS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Mutual Funds
       * @description List of supported mutual funds sorted by total assets.
       */
      mutual_funds: {
          /**
           * Country
           * @description Country of the mutual fund.
           */
          country: string;
          /**
           * Currency
           * @description Settlement currency of the mutual fund.
           */
          currency: string;
          /**
           * Exchange
           * @description Exchange where the mutual fund is listed.
           */
          exchange: string;
          /**
           * Name
           * @description Full name of the mutual fund.
           */
          name: string;
          /**
           * Symbol
           * @description Unique symbol/identifier of the mutual fund.
           */
          symbol: string;
          /**
           * Type
           * @description Type of the mutual fund (e.g., 'Open Ended').
           */
          type: string;
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
 * Type of TWELVE_DATA's TWELVE_DATA_OPTIONS_CHAIN_ACTION tool input.
 */
type TWELVE_DATA_OPTIONS_CHAIN_ACTION_INPUT = {
  /**
   * Date
   * @description Expiration date in YYYY-MM-DD format. Omit to retrieve all available expiration dates.
   * @default null
   */
  date: string | null;
  /**
   * Include Greeks
   * @description Whether to include Greeks data (delta, gamma, etc.). Default is false.
   * @default false
   */
  includeGreeks: boolean;
  /**
   * Symbol
   * @description Ticker symbol for the option's underlying asset.
   */
  symbol?: string;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_OPTIONS_CHAIN_ACTION tool output.
 */
type TWELVE_DATA_OPTIONS_CHAIN_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expiration Dates
       * @description Available expiration dates.
       */
      expiration_dates: string[];
      /**
       * Last Updated
       * @description Timestamp of last update in ISO8601 format.
       */
      last_updated: string;
      /**
       * Options
       * @description List of option contract details.
       */
      options: {
          /**
           * Contract Type
           * @description Type of the option contract.
           * @enum {string}
           */
          contract_type: "call" | "put";
          /**
           * Greeks
           * @description Option Greeks if includeGreeks=true.
           * @default null
           */
          greeks: {
              /**
               * Delta
               * @description Delta of the option contract.
               */
              delta: number;
              /**
               * Gamma
               * @description Gamma of the option contract.
               */
              gamma: number;
              /**
               * Rho
               * @description Rho of the option contract.
               */
              rho: number;
              /**
               * Theta
               * @description Theta of the option contract.
               */
              theta: number;
              /**
               * Vega
               * @description Vega of the option contract.
               */
              vega: number;
          } | null;
          /**
           * Last Price
           * @description Last traded price for the contract.
           */
          last_price: number;
          /**
           * Open Interest
           * @description Number of open contracts.
           */
          open_interest: number;
          /**
           * Strike
           * @description Strike price of the option contract.
           */
          strike: number;
          /**
           * Volume
           * @description Total traded volume.
           */
          volume: number;
      }[];
      /**
       * Symbol
       * @description Ticker symbol requested.
       */
      symbol: string;
      /**
       * Underlying
       * @description Underlying asset name.
       */
      underlying: string;
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
 * Type of TWELVE_DATA's TWELVE_DATA_OPTIONS_EXPIRATION tool input.
 */
type TWELVE_DATA_OPTIONS_EXPIRATION_INPUT = {
  /**
   * Exchange
   * @description Exchange code where the security is listed.
   * @default null
   */
  exchange: string | null;
  /**
   * Symbol
   * @description Ticker symbol of the underlying security for options expiration lookup.
   */
  symbol?: string;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_OPTIONS_EXPIRATION tool output.
 */
type TWELVE_DATA_OPTIONS_EXPIRATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expiration Dates
       * @description List of available option expiration dates in YYYY-MM-DD format.
       */
      expiration_dates: string[];
      /**
       * Message
       * @description Error or informational message if applicable.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description Status of the API response, typically 'ok' or 'error'.
       */
      status: string;
      /**
       * Symbol
       * @description Ticker symbol requested.
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_QUOTE tool input.
 */
type TWELVE_DATA_QUOTE_INPUT = {
  /**
   * Format
   * @description Response format: 'JSON' or 'CSV'. Default is JSON.
   * @default null
   * @enum {string|null}
   */
  format: "JSON" | "CSV" | null;
  /**
   * Source
   * @description Optional data source override, e.g., 'docs'.
   * @default null
   */
  source: string | null;
  /**
   * Symbol
   * @description Ticker symbol to query (e.g., 'AAPL', 'MSFT', 'BTC/USD').
   */
  symbol?: string;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_QUOTE tool output.
 */
type TWELVE_DATA_QUOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Average Volume
       * @description Average trading volume.
       * @default null
       */
      average_volume: string | null;
      /**
       * Change
       * @description Change from previous close.
       * @default null
       */
      change: string | null;
      /**
       * Close
       * @description Last transaction price.
       */
      close: string;
      /**
       * Currency
       * @description Currency code of the quote.
       */
      currency: string;
      /**
       * Datetime
       * @description Date and time of the last update (ISO 8601).
       */
      datetime: string;
      /**
       * Exchange
       * @description Exchange where the instrument trades.
       */
      exchange: string;
      /**
       * Fifty Two Week Range
       * @description 52-week price range 'low,high'.
       * @default null
       */
      fifty_two_week_range: string | null;
      /**
       * High
       * @description Highest price for the latest session.
       */
      high: string;
      /**
       * Is Market Open
       * @description True if market is currently open.
       * @default null
       */
      is_market_open: boolean | null;
      /**
       * Low
       * @description Lowest price for the latest session.
       */
      low: string;
      /**
       * Name
       * @description Full name of the financial instrument.
       * @default null
       */
      name: string | null;
      /**
       * Open
       * @description Opening price for the latest session.
       */
      open: string;
      /**
       * Percent Change
       * @description Percent change from previous close.
       * @default null
       */
      percent_change: string | null;
      /**
       * Previous Close
       * @description Previous session closing price.
       * @default null
       */
      previous_close: string | null;
      /**
       * Symbol
       * @description Ticker symbol of the instrument.
       */
      symbol: string;
      /**
       * Timestamp
       * @description Unix timestamp of the last update.
       */
      timestamp: number;
      /**
       * Volume
       * @description Trading volume in the latest session.
       * @default null
       */
      volume: string | null;
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
 * Type of TWELVE_DATA's TWELVE_DATA_STOCKS_LIST tool input.
 */
type TWELVE_DATA_STOCKS_LIST_INPUT = {
  /**
   * Country
   * @description Country code to filter by (e.g., 'United States').
   * @default null
   */
  country: string | null;
  /**
   * Exchange
   * @description Exchange code to filter results (e.g., 'NYSE').
   * @default null
   */
  exchange: string | null;
  /**
   * Format
   * @description Response format: 'json' or 'csv'.
   * @default json
   * @enum {string}
   */
  format: "json" | "csv";
  /**
   * Symbol
   * @description Specific stock symbol to filter by (e.g., 'AAPL').
   * @default null
   */
  symbol: string | null;
  /**
   * Type
   * @description Type of security to filter (e.g., 'Common Stock').
   * @default null
   */
  type: string | null;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_STOCKS_LIST tool output.
 */
type TWELVE_DATA_STOCKS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stocks
       * @description List of stocks matching the filter criteria.
       */
      stocks: {
          /**
           * Country
           * @description Country of the stock.
           */
          country: string;
          /**
           * Currency
           * @description Trading currency of the stock.
           */
          currency: string;
          /**
           * Exchange
           * @description Exchange code where the stock is listed.
           */
          exchange: string;
          /**
           * Mic Code
           * @description Market Identifier Code (MIC) of the exchange.
           */
          mic_code: string;
          /**
           * Name
           * @description Full name of the company or security.
           */
          name: string;
          /**
           * Symbol
           * @description Ticker symbol of the stock.
           */
          symbol: string;
          /**
           * Type
           * @description Type of security (e.g., 'Common Stock').
           */
          type: string;
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
 * Type of TWELVE_DATA's TWELVE_DATA_SYMBOL_SEARCH tool input.
 */
type TWELVE_DATA_SYMBOL_SEARCH_INPUT = {
  /**
   * Exchange
   * @description Exchange code to filter results (optional).
   * @default null
   */
  exchange: string | null;
  /**
   * Outputsize
   * @description Maximum number of results to return (1-10000).
   * @default null
   */
  outputsize: number | null;
  /**
   * Symbol
   * @description Symbol or company name to search for, supports partial matches.
   */
  symbol?: string;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_SYMBOL_SEARCH tool output.
 */
type TWELVE_DATA_SYMBOL_SEARCH_OUTPUT = {
  /**
   * Data
   * @description List of matching symbol items.
   */
  data?: {
      /**
       * Country
       * @description Country of the instrument.
       */
      country: string;
      /**
       * Exchange
       * @description Exchange code where instrument is listed.
       */
      exchange: string;
      /**
       * Instrument Name
       * @description Full instrument or company name.
       */
      instrument_name: string;
      /**
       * Mic Code
       * @description Market Identifier Code.
       */
      mic_code: string;
      /**
       * Symbol
       * @description Ticker symbol.
       */
      symbol: string;
      /**
       * Type
       * @description Instrument type (e.g., Stock, ETF).
       */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Error or info message if applicable.
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description API response status, e.g., 'ok' or 'error'.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_TECHNICAL_INDICATORS tool input.
 */
type TWELVE_DATA_TECHNICAL_INDICATORS_INPUT = {
  /**
   * Indicator
   * @description Name of the technical indicator (e.g., 'sma', 'ema', 'rsi').
   */
  indicator?: string;
  /**
   * Indicator Params
   * @description Additional indicator-specific parameters (e.g., period, series_type).
   * @default null
   */
  indicator_params: {
      [key: string]: string | number;
  } | null;
  /**
   * Interval
   * @description Time interval for the data.
   * @enum {string}
   */
  interval?: "1min" | "5min" | "15min" | "30min" | "1h" | "2h" | "4h" | "1day" | "1week" | "1month";
  /**
   * Outputsize
   * @description Number of data points to return, between 1 and 5000.
   * @default null
   */
  outputsize: number | null;
  /**
   * Symbol
   * @description Symbol to compute the indicator for (e.g., 'AAPL', 'BTC/USD').
   */
  symbol?: string;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_TECHNICAL_INDICATORS tool output.
 */
type TWELVE_DATA_TECHNICAL_INDICATORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Error or informational message if applicable.
       * @default null
       */
      message: string | null;
      /**
       * Meta
       * @description Metadata returned by the API.
       */
      meta: {
          [key: string]: string | number;
      };
      /**
       * Status
       * @description Status of the request, 'ok' or 'error'.
       */
      status: string;
      /**
       * Values
       * @description List of indicator values by timestamp.
       */
      values: {
          [key: string]: string | number;
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
 * Type of TWELVE_DATA's TWELVE_DATA_TIME_SERIES tool input.
 */
type TWELVE_DATA_TIME_SERIES_INPUT = {
  /**
   * End Date
   * @description Inclusive end date for the data, in YYYY-MM-DD or ISO 8601 format.
   * @default null
   */
  end_date: string | null;
  /**
   * Format
   * @description Response format: 'JSON' or 'CSV'.
   * @default JSON
   * @enum {string}
   */
  format: "JSON" | "CSV";
  /**
   * Interval
   * @description Time interval between data points.
   * @enum {string}
   */
  interval?: "1min" | "5min" | "15min" | "30min" | "1h" | "4h" | "1day" | "1week" | "1month";
  /**
   * Outputsize
   * @description Maximum number of data points to return (default 30, maximum 5000).
   * @default 30
   */
  outputsize: number | null;
  /**
   * Start Date
   * @description Inclusive start date for the data, in YYYY-MM-DD or ISO 8601 format.
   * @default null
   */
  start_date: string | null;
  /**
   * Symbol
   * @description Ticker symbol to query (e.g., 'AAPL').
   */
  symbol?: string;
  /**
   * Timezone
   * @description Timezone for the timestamps, e.g., 'UTC' or 'America/New_York'.
   * @default null
   */
  timezone: string | null;
};

/**
 * Type of TWELVE_DATA's TWELVE_DATA_TIME_SERIES tool output.
 */
type TWELVE_DATA_TIME_SERIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Error message if status is 'error'.
       * @default null
       */
      message: string | null;
      /**
       * Meta
       * @description Metadata for the time series request.
       */
      meta: {
          /**
           * Currency
           * @description Currency of the symbol.
           * @default null
           */
          currency: string | null;
          /**
           * Exchange
           * @description Exchange code for the symbol.
           * @default null
           */
          exchange: string | null;
          /**
           * Interval
           * @description Time interval between data points.
           */
          interval: string;
          /**
           * Symbol
           * @description Requested symbol.
           */
          symbol: string;
      };
      /**
       * Status
       * @description API call status: 'ok' or 'error'.
       * @enum {string}
       */
      status: "ok" | "error";
      /**
       * Values
       * @description List of time series data points.
       */
      values: {
          /**
           * Close
           * @description Closing price for the interval.
           */
          close: string;
          /**
           * Datetime
           * @description Timestamp of the data point (ISO 8601).
           */
          datetime: string;
          /**
           * High
           * @description Highest price for the interval.
           */
          high: string;
          /**
           * Low
           * @description Lowest price for the interval.
           */
          low: string;
          /**
           * Open
           * @description Opening price for the interval.
           */
          open: string;
          /**
           * Volume
           * @description Trading volume for the interval.
           */
          volume: string;
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
 * Type map of all available tool input types for toolkit "TWELVE_DATA".
 */
export type TWELVE_DATA_TOOL_INPUTS = {
  COMMODITIES_LIST: TWELVE_DATA_COMMODITIES_LIST_INPUT
  CRYPTOCURRENCIES: TWELVE_DATA_CRYPTOCURRENCIES_INPUT
  CURRENCY_CONVERSION: TWELVE_DATA_CURRENCY_CONVERSION_INPUT
  DIVIDENDS: TWELVE_DATA_DIVIDENDS_INPUT
  EARNINGS: TWELVE_DATA_EARNINGS_INPUT
  EPS_REVISIONS: TWELVE_DATA_EPS_REVISIONS_INPUT
  EPS_TREND_ACTION: TWELVE_DATA_EPS_TREND_ACTION_INPUT
  ETFS_DIRECTORY: TWELVE_DATA_ETFS_DIRECTORY_INPUT
  ETFS_FAMILY: TWELVE_DATA_ETFS_FAMILY_INPUT
  ETFS_TYPE: TWELVE_DATA_ETFS_TYPE_INPUT
  EXCHANGES: TWELVE_DATA_EXCHANGES_INPUT
  FOREX_PAIRS: TWELVE_DATA_FOREX_PAIRS_INPUT
  INDICES: TWELVE_DATA_INDICES_INPUT
  MUTUAL_FUNDS_FAMILY: TWELVE_DATA_MUTUAL_FUNDS_FAMILY_INPUT
  MUTUAL_FUNDS_LIST: TWELVE_DATA_MUTUAL_FUNDS_LIST_INPUT
  OPTIONS_CHAIN_ACTION: TWELVE_DATA_OPTIONS_CHAIN_ACTION_INPUT
  OPTIONS_EXPIRATION: TWELVE_DATA_OPTIONS_EXPIRATION_INPUT
  QUOTE: TWELVE_DATA_QUOTE_INPUT
  STOCKS_LIST: TWELVE_DATA_STOCKS_LIST_INPUT
  SYMBOL_SEARCH: TWELVE_DATA_SYMBOL_SEARCH_INPUT
  TECHNICAL_INDICATORS: TWELVE_DATA_TECHNICAL_INDICATORS_INPUT
  TIME_SERIES: TWELVE_DATA_TIME_SERIES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TWELVE_DATA".
 */
export type TWELVE_DATA_TOOL_OUTPUTS = {
  COMMODITIES_LIST: TWELVE_DATA_COMMODITIES_LIST_OUTPUT
  CRYPTOCURRENCIES: TWELVE_DATA_CRYPTOCURRENCIES_OUTPUT
  CURRENCY_CONVERSION: TWELVE_DATA_CURRENCY_CONVERSION_OUTPUT
  DIVIDENDS: TWELVE_DATA_DIVIDENDS_OUTPUT
  EARNINGS: TWELVE_DATA_EARNINGS_OUTPUT
  EPS_REVISIONS: TWELVE_DATA_EPS_REVISIONS_OUTPUT
  EPS_TREND_ACTION: TWELVE_DATA_EPS_TREND_ACTION_OUTPUT
  ETFS_DIRECTORY: TWELVE_DATA_ETFS_DIRECTORY_OUTPUT
  ETFS_FAMILY: TWELVE_DATA_ETFS_FAMILY_OUTPUT
  ETFS_TYPE: TWELVE_DATA_ETFS_TYPE_OUTPUT
  EXCHANGES: TWELVE_DATA_EXCHANGES_OUTPUT
  FOREX_PAIRS: TWELVE_DATA_FOREX_PAIRS_OUTPUT
  INDICES: TWELVE_DATA_INDICES_OUTPUT
  MUTUAL_FUNDS_FAMILY: TWELVE_DATA_MUTUAL_FUNDS_FAMILY_OUTPUT
  MUTUAL_FUNDS_LIST: TWELVE_DATA_MUTUAL_FUNDS_LIST_OUTPUT
  OPTIONS_CHAIN_ACTION: TWELVE_DATA_OPTIONS_CHAIN_ACTION_OUTPUT
  OPTIONS_EXPIRATION: TWELVE_DATA_OPTIONS_EXPIRATION_OUTPUT
  QUOTE: TWELVE_DATA_QUOTE_OUTPUT
  STOCKS_LIST: TWELVE_DATA_STOCKS_LIST_OUTPUT
  SYMBOL_SEARCH: TWELVE_DATA_SYMBOL_SEARCH_OUTPUT
  TECHNICAL_INDICATORS: TWELVE_DATA_TECHNICAL_INDICATORS_OUTPUT
  TIME_SERIES: TWELVE_DATA_TIME_SERIES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TWELVE_DATA toolkit.
 */
export const TWELVE_DATA = {
  slug: "twelve_data",
  tools: {
    /**
     * Tool to retrieve a list of supported commodities. use when you need all available commodities after obtaining a valid api key.
     */
    COMMODITIES_LIST: "TWELVE_DATA_COMMODITIES_LIST",
    /**
     * Tool to list all supported cryptocurrencies. use when you need the complete set of crypto symbols. use after obtaining a valid api key.
     */
    CRYPTOCURRENCIES: "TWELVE_DATA_CRYPTOCURRENCIES",
    /**
     * Tool to convert an amount from one currency to another. use after confirming currency codes to retrieve real-time conversion.
     */
    CURRENCY_CONVERSION: "TWELVE_DATA_CURRENCY_CONVERSION",
    /**
     * Tool to retrieve dividend payout history for a specified symbol. use when you need historical dividends over multiple years.
     */
    DIVIDENDS: "TWELVE_DATA_DIVIDENDS",
    /**
     * Tool to retrieve earnings data including eps estimates and actuals. use when you need detailed earnings history for a selected stock symbol.
     */
    EARNINGS: "TWELVE_DATA_EARNINGS",
    /**
     * Tool to provide analysts’ revisions of a company’s future eps over the last week and month. use after confirming the stock symbol.
     */
    EPS_REVISIONS: "TWELVE_DATA_EPS_REVISIONS",
    /**
     * Tool to retrieve historical eps trends for a specified company. use after selecting a stock symbol to view estimated vs actual eps and surprise indicators. returns a breakdown of eps actuals, estimates, differences, and surprise percentages.
     */
    EPS_TREND_ACTION: "TWELVE_DATA_EPS_TREND_ACTION",
    /**
     * Tool to fetch a daily updated list of exchange-traded funds sorted by total assets. use when you need a directory of etfs by exchange or country.
     */
    ETFS_DIRECTORY: "TWELVE_DATA_ETFS_DIRECTORY",
    /**
     * Tool to fetch a comprehensive list of etfs by family. use when you need to list etfs managed by a specific investment company.
     */
    ETFS_FAMILY: "TWELVE_DATA_ETFS_FAMILY",
    /**
     * Tool to retrieve etf categories by market, including types like 'equity precious metals'. use after confirming api key is set; no parameters are needed.
     */
    ETFS_TYPE: "TWELVE_DATA_ETFS_TYPE",
    /**
     * Tool to retrieve a list of supported exchanges. use when you need all available stock and forex exchanges.
     */
    EXCHANGES: "TWELVE_DATA_EXCHANGES",
    /**
     * Tool to retrieve a list of all supported forex currency pairs. use when exploring available forex pairs before making other forex data requests.
     */
    FOREX_PAIRS: "TWELVE_DATA_FOREX_PAIRS",
    /**
     * Tool to retrieve a list of market indices. use when you need to fetch available indices filtered by country.
     */
    INDICES: "TWELVE_DATA_INDICES",
    /**
     * Tool to list all available mutual fund families. use when you need a comprehensive list of mutual fund families managed by investment companies after obtaining a valid api key.
     */
    MUTUAL_FUNDS_FAMILY: "TWELVE_DATA_MUTUAL_FUNDS_FAMILY",
    /**
     * Tool to retrieve a daily updated list of mutual funds sorted by total assets. use when you need to enumerate available mutual funds for analysis.
     */
    MUTUAL_FUNDS_LIST: "TWELVE_DATA_MUTUAL_FUNDS_LIST",
    /**
     * Tool to retrieve the options chain for a given symbol and optional expiration date. use when you need detailed option contract data and greeks. omitting date returns all expirations.
     */
    OPTIONS_CHAIN_ACTION: "TWELVE_DATA_OPTIONS_CHAIN_ACTION",
    /**
     * Tool to retrieve available option expiration dates. use when exploring available expiration dates for a given options symbol.
     */
    OPTIONS_EXPIRATION: "TWELVE_DATA_OPTIONS_EXPIRATION",
    /**
     * Tool to retrieve the latest market data for a specified symbol. use when you need a quick real-time quote after selecting a symbol.
     */
    QUOTE: "TWELVE_DATA_QUOTE",
    /**
     * Tool to retrieve a list of stocks. use when you need to fetch securities with optional filtering by exchange, country, type, or symbol.
     */
    STOCKS_LIST: "TWELVE_DATA_STOCKS_LIST",
    /**
     * Tool to search for financial instruments by symbol or company name. use when you need to discover available symbols before making further data requests.
     */
    SYMBOL_SEARCH: "TWELVE_DATA_SYMBOL_SEARCH",
    /**
     * Tool to fetch time-series data for a specific technical indicator. use when you have a symbol, interval, and indicator name.
     */
    TECHNICAL_INDICATORS: "TWELVE_DATA_TECHNICAL_INDICATORS",
    /**
     * Tool to retrieve historical and real-time time series data for a specified symbol. use when you need to fetch price data over a time range after selecting a symbol.
     */
    TIME_SERIES: "TWELVE_DATA_TIME_SERIES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TWELVE_DATA".
 */
export type TWELVE_DATA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TWELVE_DATA".
 */
export type TWELVE_DATA_TRIGGER_EVENTS = {}
