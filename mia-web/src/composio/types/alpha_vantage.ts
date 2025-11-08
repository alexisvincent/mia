// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_ALL_COMMODITIES tool input.
 */
type ALPHA_VANTAGE_ALL_COMMODITIES_INPUT = {
  /**
   * Datatype
   * @description Output format: 'json' for JSON response, 'csv' for CSV text.
   * @default json
   * @enum {string}
   */
  datatype: "json" | "csv";
  /**
   * Interval
   * @description Time interval for the global commodities price index. Supported values: 'monthly', 'quarterly', 'annual'.
   * @enum {string}
   */
  interval?: "monthly" | "quarterly" | "annual";
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_ALL_COMMODITIES tool output.
 */
type ALPHA_VANTAGE_ALL_COMMODITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * MetaData
       * @description Metadata for the commodity price index. Available for JSON output only.
       * @default null
       */
      "Meta Data": {
          /** 1: Information */
          "1: Information": string;
          /** 2: Interval */
          "2: Interval": string;
          /** 3: Last Refreshed */
          "3: Last Refreshed": string;
          /** 4: Time Zone */
          "4: Time Zone": string;
      } | null;
      /**
       * Price Index
       * @description Time series of commodity price index mapped by date.
       * @default {}
       */
      Price_Index: {
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
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_ALUMINUM tool input.
 */
type ALPHA_VANTAGE_ALUMINUM_INPUT = {
  /**
   * Datatype
   * @description Response format: json or csv
   * @default json
   * @enum {string}
   */
  datatype: "json" | "csv";
  /**
   * Interval
   * @description Time horizon for aluminum prices
   * @default monthly
   * @enum {string}
   */
  interval: "monthly" | "quarterly" | "annual";
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_ALUMINUM tool output.
 */
type ALPHA_VANTAGE_ALUMINUM_OUTPUT = {
  /** Data */
  Data?: {
      [key: string]: {
          /** Usd */
          USD: number;
      };
  };
  /** Meta Data */
  "Meta Data"?: {
      /** Information */
      Information: string;
      /** Interval */
      Interval: string;
      /** Last Refreshed */
      "Last Refreshed": string;
      /** Time Zone */
      "Time Zone": string;
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
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_BALANCE_SHEET tool input.
 */
type ALPHA_VANTAGE_BALANCE_SHEET_INPUT = {
  /**
   * Symbol
   * @description The stock ticker symbol of the company, e.g., 'IBM'
   */
  symbol?: string;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_BALANCE_SHEET tool output.
 */
type ALPHA_VANTAGE_BALANCE_SHEET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Annual Reports
       * @description Annual balance sheet reports
       */
      annualReports: {
          /**
           * Accumulated Depreciation Amortization Ppe
           * @description Accumulated depreciation/amortization of PPE
           */
          accumulatedDepreciationAmortizationPPE: string;
          /**
           * Capital Lease Obligations
           * @description Capital lease obligations
           */
          capitalLeaseObligations: string;
          /**
           * Cash And Cash Equivalents At Carrying Value
           * @description Cash and cash equivalents at carrying value
           */
          cashAndCashEquivalentsAtCarryingValue: string;
          /**
           * Cash And Short Term Investments
           * @description Cash and short-term investments
           */
          cashAndShortTermInvestments: string;
          /**
           * Common Stock
           * @description Common stock
           */
          commonStock: string;
          /**
           * Common Stock Shares Outstanding
           * @description Common stock shares outstanding
           */
          commonStockSharesOutstanding: string;
          /**
           * Current Accounts Payable
           * @description Current accounts payable
           */
          currentAccountsPayable: string;
          /**
           * Current Debt
           * @description Current debt
           */
          currentDebt: string;
          /**
           * Current Long Term Debt
           * @description Current portion of long-term debt
           */
          currentLongTermDebt: string;
          /**
           * Current Net Receivables
           * @description Current net receivables
           */
          currentNetReceivables: string;
          /**
           * Deferred Revenue
           * @description Deferred revenue
           */
          deferredRevenue: string;
          /**
           * Fiscal Date Ending
           * @description The fiscal date of the report in YYYY-MM-DD format
           */
          fiscalDateEnding: string;
          /**
           * Goodwill
           * @description Goodwill
           */
          goodwill: string;
          /**
           * Intangible Assets
           * @description Intangible assets
           */
          intangibleAssets: string;
          /**
           * Intangible Assets Excluding Goodwill
           * @description Intangible assets excluding goodwill
           */
          intangibleAssetsExcludingGoodwill: string;
          /**
           * Inventory
           * @description Inventory
           */
          inventory: string;
          /**
           * Investments
           * @description Investments
           */
          investments: string;
          /**
           * Long Term Debt
           * @description Long-term debt
           */
          longTermDebt: string;
          /**
           * Long Term Debt Noncurrent
           * @description Non-current portion of long-term debt
           */
          longTermDebtNoncurrent: string;
          /**
           * Long Term Investments
           * @description Long-term investments
           */
          longTermInvestments: string;
          /**
           * Other Current Assets
           * @description Other current assets
           */
          otherCurrentAssets: string;
          /**
           * Other Current Liabilities
           * @description Other current liabilities
           */
          otherCurrentLiabilities: string;
          /**
           * Other Non Current Assets
           * @description Other non-current assets
           */
          otherNonCurrentAssets: string;
          /**
           * Other Non Current Liabilities
           * @description Other non-current liabilities
           */
          otherNonCurrentLiabilities: string;
          /**
           * Property Plant Equipment
           * @description Property, plant, and equipment
           */
          propertyPlantEquipment: string;
          /**
           * Reported Currency
           * @description The currency in which values are reported
           */
          reportedCurrency: string;
          /**
           * Retained Earnings
           * @description Retained earnings
           */
          retainedEarnings: string;
          /**
           * Short Long Term Debt Total
           * @description Short and long-term debt total
           */
          shortLongTermDebtTotal: string;
          /**
           * Short Term Debt
           * @description Short-term debt
           */
          shortTermDebt: string;
          /**
           * Short Term Investments
           * @description Short-term investments
           */
          shortTermInvestments: string;
          /**
           * Total Assets
           * @description Total assets
           */
          totalAssets: string;
          /**
           * Total Current Assets
           * @description Total current assets
           */
          totalCurrentAssets: string;
          /**
           * Total Current Liabilities
           * @description Total current liabilities
           */
          totalCurrentLiabilities: string;
          /**
           * Total Liabilities
           * @description Total liabilities
           */
          totalLiabilities: string;
          /**
           * Total Non Current Assets
           * @description Total non-current assets
           */
          totalNonCurrentAssets: string;
          /**
           * Total Non Current Liabilities
           * @description Total non-current liabilities
           */
          totalNonCurrentLiabilities: string;
          /**
           * Total Shareholder Equity
           * @description Total shareholder equity
           */
          totalShareholderEquity: string;
          /**
           * Treasury Stock
           * @description Treasury stock
           */
          treasuryStock: string;
      }[];
      /**
       * Quarterly Reports
       * @description Quarterly balance sheet reports
       */
      quarterlyReports: {
          /**
           * Accumulated Depreciation Amortization Ppe
           * @description Accumulated depreciation/amortization of PPE
           */
          accumulatedDepreciationAmortizationPPE: string;
          /**
           * Capital Lease Obligations
           * @description Capital lease obligations
           */
          capitalLeaseObligations: string;
          /**
           * Cash And Cash Equivalents At Carrying Value
           * @description Cash and cash equivalents at carrying value
           */
          cashAndCashEquivalentsAtCarryingValue: string;
          /**
           * Cash And Short Term Investments
           * @description Cash and short-term investments
           */
          cashAndShortTermInvestments: string;
          /**
           * Common Stock
           * @description Common stock
           */
          commonStock: string;
          /**
           * Common Stock Shares Outstanding
           * @description Common stock shares outstanding
           */
          commonStockSharesOutstanding: string;
          /**
           * Current Accounts Payable
           * @description Current accounts payable
           */
          currentAccountsPayable: string;
          /**
           * Current Debt
           * @description Current debt
           */
          currentDebt: string;
          /**
           * Current Long Term Debt
           * @description Current portion of long-term debt
           */
          currentLongTermDebt: string;
          /**
           * Current Net Receivables
           * @description Current net receivables
           */
          currentNetReceivables: string;
          /**
           * Deferred Revenue
           * @description Deferred revenue
           */
          deferredRevenue: string;
          /**
           * Fiscal Date Ending
           * @description The fiscal date of the report in YYYY-MM-DD format
           */
          fiscalDateEnding: string;
          /**
           * Goodwill
           * @description Goodwill
           */
          goodwill: string;
          /**
           * Intangible Assets
           * @description Intangible assets
           */
          intangibleAssets: string;
          /**
           * Intangible Assets Excluding Goodwill
           * @description Intangible assets excluding goodwill
           */
          intangibleAssetsExcludingGoodwill: string;
          /**
           * Inventory
           * @description Inventory
           */
          inventory: string;
          /**
           * Investments
           * @description Investments
           */
          investments: string;
          /**
           * Long Term Debt
           * @description Long-term debt
           */
          longTermDebt: string;
          /**
           * Long Term Debt Noncurrent
           * @description Non-current portion of long-term debt
           */
          longTermDebtNoncurrent: string;
          /**
           * Long Term Investments
           * @description Long-term investments
           */
          longTermInvestments: string;
          /**
           * Other Current Assets
           * @description Other current assets
           */
          otherCurrentAssets: string;
          /**
           * Other Current Liabilities
           * @description Other current liabilities
           */
          otherCurrentLiabilities: string;
          /**
           * Other Non Current Assets
           * @description Other non-current assets
           */
          otherNonCurrentAssets: string;
          /**
           * Other Non Current Liabilities
           * @description Other non-current liabilities
           */
          otherNonCurrentLiabilities: string;
          /**
           * Property Plant Equipment
           * @description Property, plant, and equipment
           */
          propertyPlantEquipment: string;
          /**
           * Reported Currency
           * @description The currency in which values are reported
           */
          reportedCurrency: string;
          /**
           * Retained Earnings
           * @description Retained earnings
           */
          retainedEarnings: string;
          /**
           * Short Long Term Debt Total
           * @description Short and long-term debt total
           */
          shortLongTermDebtTotal: string;
          /**
           * Short Term Debt
           * @description Short-term debt
           */
          shortTermDebt: string;
          /**
           * Short Term Investments
           * @description Short-term investments
           */
          shortTermInvestments: string;
          /**
           * Total Assets
           * @description Total assets
           */
          totalAssets: string;
          /**
           * Total Current Assets
           * @description Total current assets
           */
          totalCurrentAssets: string;
          /**
           * Total Current Liabilities
           * @description Total current liabilities
           */
          totalCurrentLiabilities: string;
          /**
           * Total Liabilities
           * @description Total liabilities
           */
          totalLiabilities: string;
          /**
           * Total Non Current Assets
           * @description Total non-current assets
           */
          totalNonCurrentAssets: string;
          /**
           * Total Non Current Liabilities
           * @description Total non-current liabilities
           */
          totalNonCurrentLiabilities: string;
          /**
           * Total Shareholder Equity
           * @description Total shareholder equity
           */
          totalShareholderEquity: string;
          /**
           * Treasury Stock
           * @description Treasury stock
           */
          treasuryStock: string;
      }[];
      /**
       * Symbol
       * @description The requested company symbol
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
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_BRENT tool input.
 */
type ALPHA_VANTAGE_BRENT_INPUT = {
  /**
   * Datatype
   * @description Output format. Defaults to 'json'.
   * @default json
   * @enum {string}
   */
  datatype: "json" | "csv";
  /**
   * Interval
   * @description Time series interval. Defaults to 'monthly'.
   * @default monthly
   * @enum {string}
   */
  interval: "daily" | "weekly" | "monthly";
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_BRENT tool output.
 */
type ALPHA_VANTAGE_BRENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta Data
       * @description Meta data about the request
       */
      meta_data: {
          [key: string]: string;
      };
      /**
       * Time Series
       * @description Time series of Brent oil prices keyed by date/time
       */
      time_series: {
          [key: string]: {
              /**
               * 1. Price
               * @description Brent oil price value
               */
              "1. price": number;
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_COFFEE tool input.
 */
type ALPHA_VANTAGE_COFFEE_INPUT = {
  /**
   * Datatype
   * @description Response format: json or csv.
   * @default json
   * @enum {string}
   */
  datatype: "json" | "csv";
  /**
   * Interval
   * @description Time resolution: monthly, quarterly, or annual.
   * @default monthly
   * @enum {string}
   */
  interval: "monthly" | "quarterly" | "annual";
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_COFFEE tool output.
 */
type ALPHA_VANTAGE_COFFEE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta Data
       * @description Meta info about the series, e.g. last refreshed, interval, etc.
       */
      meta_data: {
          [key: string]: string;
      };
      /**
       * Time Series
       * @description Time-indexed price data for each period.
       */
      time_series: {
          [key: string]: {
              /**
               * Close
               * @description Closing price for the period
               * @default null
               */
              close: string | null;
              /**
               * High
               * @description Highest price for the period
               * @default null
               */
              high: string | null;
              /**
               * Low
               * @description Lowest price for the period
               * @default null
               */
              low: string | null;
              /**
               * Open
               * @description Opening price for the period
               * @default null
               */
              open: string | null;
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_COPPER tool input.
 */
type ALPHA_VANTAGE_COPPER_INPUT = {
  /**
   * Datatype
   * @description Response format: json or csv
   * @default json
   * @enum {string}
   */
  datatype: "json" | "csv";
  /**
   * Interval
   * @description Time horizon for copper prices
   * @default monthly
   * @enum {string}
   */
  interval: "monthly" | "quarterly" | "annual";
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_COPPER tool output.
 */
type ALPHA_VANTAGE_COPPER_OUTPUT = {
  /** Data */
  Data?: {
      [key: string]: {
          /** Usd */
          USD: number;
      };
  };
  /** Meta Data */
  "Meta Data"?: {
      /** Information */
      Information: string;
      /** Interval */
      Interval: string;
      /** Last Refreshed */
      "Last Refreshed": string;
      /** Time Zone */
      "Time Zone": string;
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
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_CORN tool input.
 */
type ALPHA_VANTAGE_CORN_INPUT = {
  /**
   * Datatype
   * @description Output format of the data.
   * @default json
   * @enum {string}
   */
  datatype: "json" | "csv";
  /**
   * Interval
   * @description Time interval between data points.
   * @default monthly
   * @enum {string}
   */
  interval: "monthly" | "quarterly" | "annual";
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_CORN tool output.
 */
type ALPHA_VANTAGE_CORN_OUTPUT = {
  /**
   * Data
   * @description List of historical price data points.
   */
  data?: {
      /**
       * Date
       * @description Date of the data point in YYYY-MM-DD format
       */
      date: string;
      /**
       * Value
       * @description Price of the commodity on the given date
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
   * Interval
   * @description Interval of the time series data.
   * @enum {string}
   */
  interval?: "monthly" | "quarterly" | "annual";
  /**
   * Name
   * @description Name of the commodity, e.g., 'Corn'.
   */
  name?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Unit
   * @description Unit of measurement for the commodity prices, e.g., 'per bushel'.
   */
  unit?: string;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_COTTON tool input.
 */
type ALPHA_VANTAGE_COTTON_INPUT = {
  /**
   * Datatype
   * @description Format of the returned data.
   * @default json
   * @enum {string}
   */
  datatype: "json" | "csv";
  /**
   * Interval
   * @description Time interval between data points.
   * @default monthly
   * @enum {string}
   */
  interval: "monthly" | "quarterly" | "annual";
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_COTTON tool output.
 */
type ALPHA_VANTAGE_COTTON_OUTPUT = {
  /**
   * Data
   * @description Array of historical price data points.
   */
  data?: {
      /**
       * Date
       * @description Date of the data point in YYYY-MM-DD format
       */
      date: string;
      /**
       * Value
       * @description Price of cotton on that date
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
   * Interval
   * @description Interval of the time series.
   * @enum {string}
   */
  interval?: "monthly" | "quarterly" | "annual";
  /**
   * Name
   * @description Name of the commodity (Cotton).
   */
  name?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Unit
   * @description Unit of measurement for the commodity prices.
   */
  unit?: string;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_EARNINGS_CALENDAR tool input.
 */
type ALPHA_VANTAGE_EARNINGS_CALENDAR_INPUT = {
  /**
   * Horizon
   * @description Time horizon to return upcoming earnings within. Valid values: '3month', '6month', '12month'.
   * @default 3month
   * @enum {string}
   */
  horizon: "3month" | "6month" | "12month";
  /**
   * Symbol
   * @description (Optional) Ticker symbol to filter the earnings calendar, e.g., 'IBM'.
   * @default null
   */
  symbol: string | null;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_EARNINGS_CALENDAR tool output.
 */
type ALPHA_VANTAGE_EARNINGS_CALENDAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Csv
       * @description Raw CSV output of the earnings calendar; first line is header, subsequent lines list symbol, date, time, and estimated earnings.
       */
      csv: string;
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
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_EARNINGS_CALL_TRANSCRIPT tool input.
 */
type ALPHA_VANTAGE_EARNINGS_CALL_TRANSCRIPT_INPUT = {
  /**
   * Quarter
   * @description Fiscal quarter in YYYYQn format, e.g., '2024Q1'. Any quarter since 2010Q1 is supported.
   */
  quarter?: string;
  /**
   * Symbol
   * @description The stock ticker symbol, e.g., 'IBM'.
   */
  symbol?: string;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_EARNINGS_CALL_TRANSCRIPT tool output.
 */
type ALPHA_VANTAGE_EARNINGS_CALL_TRANSCRIPT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Quarter
       * @description The fiscal quarter provided in the request.
       */
      quarter: string;
      /**
       * Sentiment
       * @description LLM-based sentiment signals mapping sentiment labels to scores.
       */
      sentiment: {
          [key: string]: number;
      };
      /**
       * Symbol
       * @description The ticker symbol provided in the request.
       */
      symbol: string;
      /**
       * Transcript
       * @description Full text of the earnings call transcript.
       */
      transcript: string;
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
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_FX_DAILY tool input.
 */
type ALPHA_VANTAGE_FX_DAILY_INPUT = {
  /**
   * Datatype
   * @description Return format. JSON returns JSON; CSV returns CSV text. Defaults to 'json'.
   * @default json
   * @enum {string}
   */
  datatype: "json" | "csv";
  /**
   * From Symbol
   * @description The base currency code in three-letter ISO format, e.g., 'EUR'.
   */
  from_symbol?: string;
  /**
   * Outputsize
   * @description Return the latest 100 data points ('compact') or full-length time series ('full'). Defaults to 'compact'.
   * @default compact
   * @enum {string}
   */
  outputsize: "compact" | "full";
  /**
   * To Symbol
   * @description The quote currency code in three-letter ISO format, e.g., 'USD'.
   */
  to_symbol?: string;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_FX_DAILY tool output.
 */
type ALPHA_VANTAGE_FX_DAILY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta Data
       * @description Meta data about the FX daily series.
       */
      "Meta Data": {
          /**
           * 1. Information
           * @description API function information.
           */
          "1. Information": string;
          /**
           * 2. From Symbol
           * @description Base currency code.
           */
          "2. From Symbol": string;
          /**
           * 3. To Symbol
           * @description Quote currency code.
           */
          "3. To Symbol": string;
          /**
           * 4. Output Size
           * @description Output size of the response.
           */
          "4. Output Size": string;
          /**
           * 5. Last Refreshed
           * @description Date of the most recent data point.
           */
          "5. Last Refreshed": string;
          /**
           * 6. Time Zone
           * @description Time zone of the data timestamps.
           */
          "6. Time Zone": string;
      };
      /**
       * Time Series Fx (Daily)
       * @description Daily time series of FX rates keyed by date.
       */
      "Time Series FX (Daily)": {
          [key: string]: {
              /**
               * 1. Open
               * @description Opening exchange rate of the day.
               */
              "1. open": number;
              /**
               * 2. High
               * @description Highest exchange rate of the day.
               */
              "2. high": number;
              /**
               * 3. Low
               * @description Lowest exchange rate of the day.
               */
              "3. low": number;
              /**
               * 4. Close
               * @description Closing exchange rate of the day.
               */
              "4. close": number;
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_FX_MONTHLY tool input.
 */
type ALPHA_VANTAGE_FX_MONTHLY_INPUT = {
  /**
   * Datatype
   * @description The format of the output. 'json' or 'csv'. Defaults to 'json'.
   * @default json
   * @enum {string|null}
   */
  datatype: "json" | "csv" | null;
  /**
   * From Symbol
   * @description The currency code to get rates from, e.g., 'EUR'.
   */
  from_symbol?: string;
  /**
   * To Symbol
   * @description The currency code to get rates to, e.g., 'USD'.
   */
  to_symbol?: string;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_FX_MONTHLY tool output.
 */
type ALPHA_VANTAGE_FX_MONTHLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta Data
       * @description Meta data returned by FX_MONTHLY endpoint.
       */
      "Meta Data": {
          /**
           * 1. Information
           * @description Textual information about the FX monthly data.
           */
          "1. Information": string;
          /**
           * 2. From Symbol
           * @description The base currency symbol.
           */
          "2. From Symbol": string;
          /**
           * 3. To Symbol
           * @description The target currency symbol.
           */
          "3. To Symbol": string;
          /**
           * 4. Last Refreshed
           * @description The last refreshed date for the time series.
           */
          "4. Last Refreshed": string;
          /**
           * 5. Time Zone
           * @description The time zone of the data.
           */
          "5. Time Zone": string;
      };
      /**
       * Time Series Fx (Monthly)
       * @description The monthly FX time series data keyed by date.
       */
      "Time Series FX (Monthly)": {
          [key: string]: {
              /**
               * 1. Open
               * @description Opening price for the month.
               */
              "1. open": string;
              /**
               * 2. High
               * @description Highest price for the month.
               */
              "2. high": string;
              /**
               * 3. Low
               * @description Lowest price for the month.
               */
              "3. low": string;
              /**
               * 4. Close
               * @description Closing price for the month.
               */
              "4. close": string;
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_INCOME_STATEMENT tool input.
 */
type ALPHA_VANTAGE_INCOME_STATEMENT_INPUT = {
  /**
   * Symbol
   * @description Stock ticker symbol to retrieve income statements for
   */
  symbol?: string;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_INCOME_STATEMENT tool output.
 */
type ALPHA_VANTAGE_INCOME_STATEMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Annual Reports
       * @description Annual income statement reports
       */
      annualReports: {
          /**
           * Cost Of Revenue
           * @description Cost of revenue
           */
          costOfRevenue: string;
          /**
           * Ebit
           * @description Earnings before interest and taxes
           */
          ebit: string;
          /**
           * Fiscal Date Ending
           * @description Fiscal period ending date in YYYY-MM-DD format
           */
          fiscalDateEnding: string;
          /**
           * Gross Profit
           * @description Gross profit
           */
          grossProfit: string;
          /**
           * Income Before Tax
           * @description Income before tax
           */
          incomeBeforeTax: string;
          /**
           * Income Tax Expense
           * @description Income tax expense
           */
          incomeTaxExpense: string;
          /**
           * Interest Expense
           * @description Interest expense
           */
          interestExpense: string;
          /**
           * Net Income
           * @description Net income
           */
          netIncome: string;
          /**
           * Non Recurring
           * @description Non-recurring items
           */
          nonRecurring: string;
          /**
           * Operating Income
           * @description Operating income
           */
          operatingIncome: string;
          /**
           * Other Operating Expenses
           * @description Other operating expenses
           */
          otherOperatingExpenses: string;
          /**
           * Reported Currency
           * @description Currency code in which values are reported
           */
          reportedCurrency: string;
          /**
           * Research And Development
           * @description Research and development expenses
           */
          researchAndDevelopment: string;
          /**
           * Selling General And Administrative
           * @description Selling, general and administrative expenses
           */
          sellingGeneralAndAdministrative: string;
          /**
           * Total Operating Expenses
           * @description Total operating expenses
           */
          totalOperatingExpenses: string;
          /**
           * Total Other Income Expenses Net
           * @description Total other income and expenses, net
           */
          totalOtherIncomeExpensesNet: string;
          /**
           * Total Revenue
           * @description Total revenue
           */
          totalRevenue: string;
      }[];
      /**
       * Quarterly Reports
       * @description Quarterly income statement reports
       */
      quarterlyReports: {
          /**
           * Cost Of Revenue
           * @description Cost of revenue
           */
          costOfRevenue: string;
          /**
           * Ebit
           * @description Earnings before interest and taxes
           */
          ebit: string;
          /**
           * Fiscal Date Ending
           * @description Fiscal period ending date in YYYY-MM-DD format
           */
          fiscalDateEnding: string;
          /**
           * Gross Profit
           * @description Gross profit
           */
          grossProfit: string;
          /**
           * Income Before Tax
           * @description Income before tax
           */
          incomeBeforeTax: string;
          /**
           * Income Tax Expense
           * @description Income tax expense
           */
          incomeTaxExpense: string;
          /**
           * Interest Expense
           * @description Interest expense
           */
          interestExpense: string;
          /**
           * Net Income
           * @description Net income
           */
          netIncome: string;
          /**
           * Non Recurring
           * @description Non-recurring items
           */
          nonRecurring: string;
          /**
           * Operating Income
           * @description Operating income
           */
          operatingIncome: string;
          /**
           * Other Operating Expenses
           * @description Other operating expenses
           */
          otherOperatingExpenses: string;
          /**
           * Reported Currency
           * @description Currency code in which values are reported
           */
          reportedCurrency: string;
          /**
           * Research And Development
           * @description Research and development expenses
           */
          researchAndDevelopment: string;
          /**
           * Selling General And Administrative
           * @description Selling, general and administrative expenses
           */
          sellingGeneralAndAdministrative: string;
          /**
           * Total Operating Expenses
           * @description Total operating expenses
           */
          totalOperatingExpenses: string;
          /**
           * Total Other Income Expenses Net
           * @description Total other income and expenses, net
           */
          totalOtherIncomeExpensesNet: string;
          /**
           * Total Revenue
           * @description Total revenue
           */
          totalRevenue: string;
      }[];
      /**
       * Symbol
       * @description Requested company symbol
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
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_IPO_CALENDAR tool input.
 */
type ALPHA_VANTAGE_IPO_CALENDAR_INPUT = object;

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_IPO_CALENDAR tool output.
 */
type ALPHA_VANTAGE_IPO_CALENDAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Csv
       * @description Raw CSV output of the IPO calendar; first line is header, subsequent lines list upcoming IPO events.
       */
      csv: string;
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
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_LISTING_STATUS tool input.
 */
type ALPHA_VANTAGE_LISTING_STATUS_INPUT = {
  /**
   * Date
   * @description Date to retrieve listing status (YYYY-MM-DD). Defaults to latest trading day.
   * @default null
   */
  date: string | null;
  /**
   * State
   * @description Listing state: 'active' for current listings or 'delisted' for removed securities.
   * @default active
   * @enum {string}
   */
  state: "active" | "delisted";
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_LISTING_STATUS tool output.
 */
type ALPHA_VANTAGE_LISTING_STATUS_OUTPUT = {
  /**
   * Data
   * @description List of securities and their listing status.
   */
  data?: {
      /**
       * Asset Type
       * @description Type of asset ('Stock' or 'ETF')
       */
      assetType: string;
      /**
       * Delisting Date
       * @description Delisting date (YYYY-MM-DD) if applicable
       * @default null
       */
      delistingDate: string | null;
      /**
       * Exchange
       * @description Exchange where the security is listed
       */
      exchange: string;
      /**
       * Ipo Date
       * @description Initial public offering date (YYYY-MM-DD)
       */
      ipoDate: string;
      /**
       * Name
       * @description Company or fund name
       */
      name: string;
      /**
       * Status
       * @description Current status of the security ('Active' or 'Delisted')
       */
      status: string;
      /**
       * Symbol
       * @description Ticker symbol
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
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_NEWS_SENTIMENT tool input.
 */
type ALPHA_VANTAGE_NEWS_SENTIMENT_INPUT = {
  /**
   * Limit
   * @description Maximum number of articles to return (1-1000). Default is 50.
   * @default 50
   */
  limit: number;
  /**
   * Sort
   * @description Sort order for articles: 'LATEST', 'EARLIEST', or 'RELEVANCE'.
   * @default LATEST
   * @enum {string}
   */
  sort: "LATEST" | "EARLIEST" | "RELEVANCE";
  /**
   * Tickers
   * @description Comma-separated tickers or asset identifiers to filter articles, e.g. 'AAPL,CRYPTO:BTC,FOREX:USD'.
   * @default null
   */
  tickers: string | null;
  /**
   * Time From
   * @description Start of time range (inclusive) in YYYYMMDDTHHMM format, e.g. '20220410T0130'.
   * @default null
   */
  time_from: string | null;
  /**
   * Time To
   * @description End of time range (inclusive) in YYYYMMDDTHHMM format. If omitted, defaults to current time.
   * @default null
   */
  time_to: string | null;
  /**
   * Topics
   * @description List of topics to filter articles, e.g. ['technology','ipo']. Supported values are the topic literals.
   * @default null
   */
  topics: string[] | null;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_NEWS_SENTIMENT tool output.
 */
type ALPHA_VANTAGE_NEWS_SENTIMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Feed
       * @description List of news articles with sentiment data.
       */
      feed: {
          /**
           * Authors
           * @description List of article authors.
           */
          authors: string[];
          /**
           * Banner Image
           * @description URL of the banner image for the article.
           * @default null
           */
          banner_image: string | null;
          /**
           * Overall Sentiment Label
           * @description Overall sentiment label, e.g., 'POSITIVE', 'NEGATIVE', 'NEUTRAL'.
           */
          overall_sentiment_label: string;
          /**
           * Overall Sentiment Score
           * @description Overall sentiment score for the article.
           */
          overall_sentiment_score: number;
          /**
           * Source
           * @description News source or outlet.
           */
          source: string;
          /**
           * Summary
           * @description Brief summary of the article.
           */
          summary: string;
          /**
           * Ticker Sentiment
           * @description Sentiment details for each ticker mentioned in the article.
           */
          ticker_sentiment: {
              /**
               * Sentiment Label
               * @description Sentiment label, e.g., 'POSITIVE', 'NEGATIVE', 'NEUTRAL'.
               */
              sentiment_label: string;
              /**
               * Sentiment Score
               * @description Sentiment score for this ticker.
               */
              sentiment_score: number;
              /**
               * Ticker
               * @description Ticker symbol mentioned in the article.
               */
              ticker: string;
          }[];
          /**
           * Tickers
           * @description List of tickers mentioned in the article.
           */
          tickers: string[];
          /**
           * Time Published
           * @description Publication timestamp in ISO format.
           */
          time_published: string;
          /**
           * Title
           * @description Headline of the news article.
           */
          title: string;
          /**
           * Topics
           * @description List of topics covered by the article.
           */
          topics: string[];
          /**
           * Url
           * @description URL to the full article.
           */
          url: string;
      }[];
      /**
       * Next Page
       * @description Token for next page of results if available, otherwise None.
       * @default null
       */
      next_page: string | null;
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
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_SPLITS tool input.
 */
type ALPHA_VANTAGE_SPLITS_INPUT = {
  /**
   * Symbol
   * @description Stock ticker symbol to retrieve split history for, e.g., 'IBM'
   */
  symbol?: string;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_SPLITS tool output.
 */
type ALPHA_VANTAGE_SPLITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Splits
       * @description List of historical split events
       */
      splits: {
          /**
           * Date
           * @description Date of the split event in YYYY-MM-DD format
           */
          date: string;
          /**
           * From Factor
           * @description Numerator of the split ratio
           */
          fromFactor: string;
          /**
           * To Factor
           * @description Denominator of the split ratio
           */
          toFactor: string;
      }[];
      /**
       * Symbol
       * @description The stock ticker symbol of the split history
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
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_SUGAR tool input.
 */
type ALPHA_VANTAGE_SUGAR_INPUT = {
  /**
   * Datatype
   * @description Response format: json or csv.
   * @default json
   * @enum {string}
   */
  datatype: "json" | "csv";
  /**
   * Interval
   * @description Time resolution: monthly, quarterly, or annual.
   * @default monthly
   * @enum {string}
   */
  interval: "monthly" | "quarterly" | "annual";
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_SUGAR tool output.
 */
type ALPHA_VANTAGE_SUGAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta Data
       * @description Meta info about the series, e.g. last refreshed, interval, etc.
       */
      meta_data: {
          [key: string]: string;
      };
      /**
       * Time Series
       * @description Time-indexed sugar price data for each period.
       */
      time_series: {
          [key: string]: {
              /**
               * Price
               * @description Price of sugar for the period
               * @default null
               */
              price: string | null;
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_TECHNICAL_INDICATOR tool input.
 */
type ALPHA_VANTAGE_TECHNICAL_INDICATOR_INPUT = {
  /**
   * Datatype
   * @description Output format: 'json' or 'csv'.
   * @default json
   * @enum {string|null}
   */
  datatype: "json" | "csv" | null;
  /**
   * Function
   * @description Technical indicator function name. E.g., 'SMA', 'MACD', 'RSI'.
   */
  function?: string;
  /**
   * Interval
   * @description Time interval between data points.
   * @enum {string}
   */
  interval?: "1min" | "5min" | "15min" | "30min" | "60min" | "daily" | "weekly" | "monthly";
  /**
   * Month
   * @description Month (YYYY-MM) for intraday data; only for 1min–60min intervals.
   * @default null
   */
  month: string | null;
  /**
   * Series Type
   * @description Series to use for calculation (price type).
   * @enum {string}
   */
  series_type?: "close" | "open" | "high" | "low";
  /**
   * Symbol
   * @description Equity ticker or currency/crypto pair to analyze.
   */
  symbol?: string;
  /**
   * Time Period
   * @description Number of periods for indicator calculation.
   */
  time_period?: number;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_TECHNICAL_INDICATOR tool output.
 */
type ALPHA_VANTAGE_TECHNICAL_INDICATOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta Data
       * @description Metadata about the indicator query.
       */
      "Meta Data": {
          [key: string]: string;
      };
      /**
       * Indicator
       * @description Mapping of timestamp to indicator values.
       */
      indicator: {
          [key: string]: {
              [key: string]: string;
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_WHEAT tool input.
 */
type ALPHA_VANTAGE_WHEAT_INPUT = {
  /**
   * Datatype
   * @description Output format: json or csv
   * @default json
   * @enum {string}
   */
  datatype: "json" | "csv";
  /**
   * Interval
   * @description Time horizon for wheat prices
   * @default monthly
   * @enum {string}
   */
  interval: "monthly" | "quarterly" | "annual";
};

/**
 * Type of ALPHA_VANTAGE's ALPHA_VANTAGE_WHEAT tool output.
 */
type ALPHA_VANTAGE_WHEAT_OUTPUT = {
  /** Data */
  Data?: {
      [key: string]: {
          /** Usd */
          USD: number;
      };
  };
  /** Meta Data */
  "Meta Data"?: {
      /** Information */
      Information: string;
      /** Interval */
      Interval: string;
      /** Last Refreshed */
      "Last Refreshed": string;
      /** Time Zone */
      "Time Zone": string;
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
 * Type map of all available tool input types for toolkit "ALPHA_VANTAGE".
 */
export type ALPHA_VANTAGE_TOOL_INPUTS = {
  ALL_COMMODITIES: ALPHA_VANTAGE_ALL_COMMODITIES_INPUT
  ALUMINUM: ALPHA_VANTAGE_ALUMINUM_INPUT
  BALANCE_SHEET: ALPHA_VANTAGE_BALANCE_SHEET_INPUT
  BRENT: ALPHA_VANTAGE_BRENT_INPUT
  COFFEE: ALPHA_VANTAGE_COFFEE_INPUT
  COPPER: ALPHA_VANTAGE_COPPER_INPUT
  CORN: ALPHA_VANTAGE_CORN_INPUT
  COTTON: ALPHA_VANTAGE_COTTON_INPUT
  EARNINGS_CALENDAR: ALPHA_VANTAGE_EARNINGS_CALENDAR_INPUT
  EARNINGS_CALL_TRANSCRIPT: ALPHA_VANTAGE_EARNINGS_CALL_TRANSCRIPT_INPUT
  FX_DAILY: ALPHA_VANTAGE_FX_DAILY_INPUT
  FX_MONTHLY: ALPHA_VANTAGE_FX_MONTHLY_INPUT
  INCOME_STATEMENT: ALPHA_VANTAGE_INCOME_STATEMENT_INPUT
  IPO_CALENDAR: ALPHA_VANTAGE_IPO_CALENDAR_INPUT
  LISTING_STATUS: ALPHA_VANTAGE_LISTING_STATUS_INPUT
  NEWS_SENTIMENT: ALPHA_VANTAGE_NEWS_SENTIMENT_INPUT
  SPLITS: ALPHA_VANTAGE_SPLITS_INPUT
  SUGAR: ALPHA_VANTAGE_SUGAR_INPUT
  TECHNICAL_INDICATOR: ALPHA_VANTAGE_TECHNICAL_INDICATOR_INPUT
  WHEAT: ALPHA_VANTAGE_WHEAT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ALPHA_VANTAGE".
 */
export type ALPHA_VANTAGE_TOOL_OUTPUTS = {
  ALL_COMMODITIES: ALPHA_VANTAGE_ALL_COMMODITIES_OUTPUT
  ALUMINUM: ALPHA_VANTAGE_ALUMINUM_OUTPUT
  BALANCE_SHEET: ALPHA_VANTAGE_BALANCE_SHEET_OUTPUT
  BRENT: ALPHA_VANTAGE_BRENT_OUTPUT
  COFFEE: ALPHA_VANTAGE_COFFEE_OUTPUT
  COPPER: ALPHA_VANTAGE_COPPER_OUTPUT
  CORN: ALPHA_VANTAGE_CORN_OUTPUT
  COTTON: ALPHA_VANTAGE_COTTON_OUTPUT
  EARNINGS_CALENDAR: ALPHA_VANTAGE_EARNINGS_CALENDAR_OUTPUT
  EARNINGS_CALL_TRANSCRIPT: ALPHA_VANTAGE_EARNINGS_CALL_TRANSCRIPT_OUTPUT
  FX_DAILY: ALPHA_VANTAGE_FX_DAILY_OUTPUT
  FX_MONTHLY: ALPHA_VANTAGE_FX_MONTHLY_OUTPUT
  INCOME_STATEMENT: ALPHA_VANTAGE_INCOME_STATEMENT_OUTPUT
  IPO_CALENDAR: ALPHA_VANTAGE_IPO_CALENDAR_OUTPUT
  LISTING_STATUS: ALPHA_VANTAGE_LISTING_STATUS_OUTPUT
  NEWS_SENTIMENT: ALPHA_VANTAGE_NEWS_SENTIMENT_OUTPUT
  SPLITS: ALPHA_VANTAGE_SPLITS_OUTPUT
  SUGAR: ALPHA_VANTAGE_SUGAR_OUTPUT
  TECHNICAL_INDICATOR: ALPHA_VANTAGE_TECHNICAL_INDICATOR_OUTPUT
  WHEAT: ALPHA_VANTAGE_WHEAT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ALPHA_VANTAGE toolkit.
 */
export const ALPHA_VANTAGE = {
  slug: "alpha_vantage",
  tools: {
    /**
     * Tool to retrieve the global price index of all commodities. use when you need monthly, quarterly, or annual aggregated price index data for commodities.
     */
    ALL_COMMODITIES: "ALPHA_VANTAGE_ALL_COMMODITIES",
    /**
     * Tool to fetch global aluminum prices. use when you need monthly, quarterly, or annual lme aluminum price data.
     */
    ALUMINUM: "ALPHA_VANTAGE_ALUMINUM",
    /**
     * Tool to return annual and quarterly balance sheets for a company. use when you need detailed fiscal statements for analysis.
     */
    BALANCE_SHEET: "ALPHA_VANTAGE_BALANCE_SHEET",
    /**
     * Tool to fetch brent crude oil prices. use when you need daily, weekly, or monthly brent price data.
     */
    BRENT: "ALPHA_VANTAGE_BRENT",
    /**
     * Tool to retrieve the global coffee price series. use when you need historical monthly, quarterly, or annual coffee prices.
     */
    COFFEE: "ALPHA_VANTAGE_COFFEE",
    /**
     * Tool to fetch global price of copper in monthly, quarterly, and annual intervals. use when you need historical copper price series for analysis.
     */
    COPPER: "ALPHA_VANTAGE_COPPER",
    /**
     * Tool to retrieve global price of corn in monthly, quarterly, and annual intervals. use after verifying api key when you need historical corn price data.
     */
    CORN: "ALPHA_VANTAGE_CORN",
    /**
     * Tool to retrieve global cotton prices in monthly, quarterly, and annual intervals. use when you need historical cotton price data.
     */
    COTTON: "ALPHA_VANTAGE_COTTON",
    /**
     * Tool to return the earnings calendar for the next three months. use when you need a schedule of upcoming earnings across symbols.
     */
    EARNINGS_CALENDAR: "ALPHA_VANTAGE_EARNINGS_CALENDAR",
    /**
     * Tool to retrieve the earnings call transcript for a given company and quarter. use after confirming symbol and quarter. returns full transcript text and associated llm-based sentiment signals.
     */
    EARNINGS_CALL_TRANSCRIPT: "ALPHA_VANTAGE_EARNINGS_CALL_TRANSCRIPT",
    /**
     * Tool to fetch daily time series (open, high, low, close) for a currency pair. use after confirming base and quote currency codes to retrieve historical daily fx rates.
     */
    FX_DAILY: "ALPHA_VANTAGE_FX_DAILY",
    /**
     * Tool to get monthly time series (open, high, low, close) for a currency pair. use when you need historical monthly forex data for a given currency pair.
     */
    FX_MONTHLY: "ALPHA_VANTAGE_FX_MONTHLY",
    /**
     * Tool to fetch annual and quarterly income statements. use after confirming the company symbol.
     */
    INCOME_STATEMENT: "ALPHA_VANTAGE_INCOME_STATEMENT",
    /**
     * Tool to retrieve the ipo calendar for the next three months. use when you need a list of upcoming ipo events across markets.
     */
    IPO_CALENDAR: "ALPHA_VANTAGE_IPO_CALENDAR",
    /**
     * Tool to fetch listing status of us stocks and etfs. use when you need active or delisted securities as of a date.
     */
    LISTING_STATUS: "ALPHA_VANTAGE_LISTING_STATUS",
    /**
     * Tool to fetch live and historical market news & sentiment. use when you need curated news articles with sentiment scores for specified tickers and topics.
     */
    NEWS_SENTIMENT: "ALPHA_VANTAGE_NEWS_SENTIMENT",
    /**
     * Tool to retrieve historical stock split events for a symbol. use when you need past split dates and ratio details before analyzing corporate actions.
     */
    SPLITS: "ALPHA_VANTAGE_SPLITS",
    /**
     * Tool to retrieve the global sugar price series. use when you need historical monthly, quarterly, or annual sugar prices.
     */
    SUGAR: "ALPHA_VANTAGE_SUGAR",
    /**
     * Tool to fetch technical indicators for the specified equity or currency pair. use after obtaining time series to compute moving averages or oscillators.
     */
    TECHNICAL_INDICATOR: "ALPHA_VANTAGE_TECHNICAL_INDICATOR",
    /**
     * Tool to fetch global price of wheat. use when you need historical wheat prices in monthly, quarterly, or annual intervals.
     */
    WHEAT: "ALPHA_VANTAGE_WHEAT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ALPHA_VANTAGE".
 */
export type ALPHA_VANTAGE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ALPHA_VANTAGE".
 */
export type ALPHA_VANTAGE_TRIGGER_EVENTS = {}
