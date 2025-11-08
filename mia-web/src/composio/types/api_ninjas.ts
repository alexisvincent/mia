// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of API_NINJAS's API_NINJAS_BARCODE_GENERATE tool input.
 */
type API_NINJAS_BARCODE_GENERATE_INPUT = {
  /**
   * Format
   * @description Image format to return
   * @default png
   * @enum {string}
   */
  format: "png" | "svg";
  /**
   * Include Text
   * @description Whether to include the text below the barcode
   * @default true
   */
  include_text: boolean;
  /**
   * Text
   * @description Text to encode in the barcode
   */
  text?: string;
  /**
   * Type
   * @description Type of barcode to generate
   * @default upc
   * @enum {string}
   */
  type: "code39" | "code128" | "ean" | "ean13" | "ean8" | "gs1" | "gtin" | "isbn" | "isbn10" | "isbn13" | "issn" | "jan" | "pzn" | "upc" | "upca";
};

/**
 * Type of API_NINJAS's API_NINJAS_BARCODE_GENERATE tool output.
 */
type API_NINJAS_BARCODE_GENERATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Base64-encoded image data of the generated barcode
       */
      image: string;
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
 * Type of API_NINJAS's API_NINJAS_BIN_LOOKUP tool input.
 */
type API_NINJAS_BIN_LOOKUP_INPUT = {
  /**
   * Bin
   * @description Bank Identification Number (first 6-8 digits of a credit/debit card). Must be numeric.
   */
  bin?: string;
};

/**
 * Type of API_NINJAS's API_NINJAS_BIN_LOOKUP tool output.
 */
type API_NINJAS_BIN_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bin
       * @description The Bank Identification Number that was looked up.
       */
      bin: string;
      /**
       * Brand
       * @description The card brand (e.g., Visa, Mastercard). Premium only.
       * @default null
       */
      brand: string | null;
      /**
       * Category
       * @description The category of the card.
       */
      category: string;
      /**
       * Country
       * @description Full name of the country where the card was issued.
       */
      country: string;
      /**
       * Iso Code2
       * @description Two-letter ISO country code of the issuing bank.
       */
      iso_code2: string;
      /**
       * Iso Code3
       * @description Three-letter ISO country code of the issuing bank.
       */
      iso_code3: string;
      /**
       * Issuer
       * @description The name of the bank or financial institution that issued the card. Premium only.
       * @default null
       */
      issuer: string | null;
      /**
       * Type
       * @description The type of card (e.g., Credit, Debit).
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
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of API_NINJAS's API_NINJAS_BITCOIN tool input.
 */
type API_NINJAS_BITCOIN_INPUT = object;

/**
 * Type of API_NINJAS's API_NINJAS_BITCOIN tool output.
 */
type API_NINJAS_BITCOIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * 24H High
       * @description The highest price of Bitcoin in USD over the last 24 hours.
       */
      "24h_high": string;
      /**
       * 24H Low
       * @description The lowest price of Bitcoin in USD over the last 24 hours.
       */
      "24h_low": string;
      /**
       * 24H Price Change
       * @description The price change of Bitcoin in USD over the last 24 hours.
       */
      "24h_price_change": string;
      /**
       * 24H Price Change Percent
       * @description The price change percentage of Bitcoin over the last 24 hours.
       */
      "24h_price_change_percent": string;
      /**
       * 24H Volume
       * @description The volume of Bitcoin traded over the last 24 hours.
       */
      "24h_volume": string;
      /**
       * Price
       * @description The price of Bitcoin in USD.
       */
      price: string;
      /**
       * Timestamp
       * @description The timestamp of the price in Unix format (in seconds).
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
 * Type of API_NINJAS's API_NINJAS_COMMODITY_PRICE tool input.
 */
type API_NINJAS_COMMODITY_PRICE_INPUT = {
  /**
   * Name
   * @description Name of the commodity, e.g., 'gold', 'silver', 'crude oil'
   */
  name?: string;
};

/**
 * Type of API_NINJAS's API_NINJAS_COMMODITY_PRICE tool output.
 */
type API_NINJAS_COMMODITY_PRICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Exchange
       * @description Name of the exchange or market
       */
      exchange: string;
      /**
       * Name
       * @description Commodity name
       */
      name: string;
      /**
       * Price
       * @description Latest price of the commodity
       */
      price: number;
      /**
       * Symbol
       * @description Symbol/code representing the commodity
       * @default null
       */
      symbol: string | null;
      /**
       * Unit
       * @description Measurement unit of the commodity (e.g., USD/oz, USD/barrel)
       * @default null
       */
      unit: string | null;
      /**
       * Updated
       * @description UNIX timestamp of the reported price
       */
      updated: number;
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
 * Type of API_NINJAS's API_NINJAS_CRYPTO_PRICE tool input.
 */
type API_NINJAS_CRYPTO_PRICE_INPUT = {
  /**
   * Symbol
   * @description Cryptocurrency trading pair symbol (e.g., 'LTCBTC').
   */
  symbol?: string;
};

/**
 * Type of API_NINJAS's API_NINJAS_CRYPTO_PRICE tool output.
 */
type API_NINJAS_CRYPTO_PRICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Price
       * @description The current price of the cryptocurrency pair.
       */
      price: string;
      /**
       * Symbol
       * @description The cryptocurrency trading pair symbol (e.g., 'LTCBTC').
       */
      symbol: string;
      /**
       * Timestamp
       * @description The timestamp of the price in Unix format (seconds).
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
 * Type of API_NINJAS's API_NINJAS_DISPOSABLE_EMAIL_CHECKER tool input.
 */
type API_NINJAS_DISPOSABLE_EMAIL_CHECKER_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to check for disposability.
   */
  email?: unknown;
};

/**
 * Type of API_NINJAS's API_NINJAS_DISPOSABLE_EMAIL_CHECKER tool output.
 */
type API_NINJAS_DISPOSABLE_EMAIL_CHECKER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain
       * @description The domain part of the email address that was checked.
       */
      domain: string;
      /**
       * Is Disposable
       * @description Indicates if the email is from a disposable provider.
       */
      is_disposable: boolean;
      /**
       * Valid Format
       * @description Indicates if the email format is valid.
       * @default false
       */
      valid_format: boolean;
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
 * Type of API_NINJAS's API_NINJAS_DNS_LOOKUP tool input.
 */
type API_NINJAS_DNS_LOOKUP_INPUT = {
  /**
   * Domain
   * @description The domain to look up DNS records for (e.g., example.com). Top-level domains other than .com require a premium subscription.
   */
  domain?: unknown;
};

/**
 * Type of API_NINJAS's API_NINJAS_DNS_LOOKUP tool output.
 */
type API_NINJAS_DNS_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expire
       * @description Expiration time (seconds) for SOA records.
       * @default null
       */
      expire: number | null;
      /**
       * Mname
       * @description Primary name server for SOA records.
       * @default null
       */
      mname: string | null;
      /**
       * Priority
       * @description Mail server priority for MX records.
       * @default null
       */
      priority: number | null;
      /**
       * Record Type
       * @description Type of DNS record (e.g., A, AAAA, CNAME, MX, NS, PTR, SRV, SOA, TXT, CAA).
       */
      record_type: string;
      /**
       * Refresh
       * @description Refresh interval (seconds) for SOA records.
       * @default null
       */
      refresh: number | null;
      /**
       * Retry
       * @description Retry interval (seconds) for SOA records.
       * @default null
       */
      retry: number | null;
      /**
       * Rname
       * @description Responsible party's email for SOA records.
       * @default null
       */
      rname: string | null;
      /**
       * Serial
       * @description Zone serial number for SOA records.
       * @default null
       */
      serial: number | null;
      /**
       * Ttl
       * @description Minimum TTL (seconds) for SOA records.
       * @default null
       */
      ttl: number | null;
      /**
       * Value
       * @description Value associated with the DNS record.
       * @default null
       */
      value: string | null;
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
 * Type of API_NINJAS's API_NINJAS_EARNINGS_CALENDAR tool input.
 */
type API_NINJAS_EARNINGS_CALENDAR_INPUT = {
  /**
   * Limit
   * @description How many results to return (1-100). Premium only.
   * @default null
   */
  limit: number | null;
  /**
   * Show Upcoming
   * @description Whether to include upcoming earnings dates. Defaults to false.
   * @default null
   */
  show_upcoming: boolean | null;
  /**
   * Ticker
   * @description Company ticker symbol (e.g., 'MSFT').
   */
  ticker?: string;
};

/**
 * Type of API_NINJAS's API_NINJAS_EARNINGS_CALENDAR tool output.
 */
type API_NINJAS_EARNINGS_CALENDAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Actual Eps
       * @description Actual earnings per share in USD.
       * @default null
       */
      actual_eps: number | null;
      /**
       * Actual Revenue
       * @description Actual revenue in USD.
       * @default null
       */
      actual_revenue: number | null;
      /**
       * Date
       * @description Date of the earnings in YYYY-MM-DD format.
       */
      date: string;
      /**
       * Estimated Eps
       * @description Estimated earnings per share in USD.
       * @default null
       */
      estimated_eps: number | null;
      /**
       * Estimated Revenue
       * @description Estimated revenue in USD.
       * @default null
       */
      estimated_revenue: number | null;
      /**
       * Ticker
       * @description The ticker symbol of the company.
       */
      ticker: string;
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
 * Type of API_NINJAS's API_NINJAS_EARNINGS_CALL_TRANSCRIPT tool input.
 */
type API_NINJAS_EARNINGS_CALL_TRANSCRIPT_INPUT = {
  /**
   * Quarter
   * @description Earnings quarter (1-4).
   * @enum {integer}
   */
  quarter?: 1 | 2 | 3 | 4;
  /**
   * Ticker
   * @description Company ticker symbol (e.g., 'AAPL').
   */
  ticker?: string;
  /**
   * Year
   * @description Earnings year between 2000 and the current year. Historical data before 2024 requires a premium subscription.
   */
  year?: number;
};

/**
 * Type of API_NINJAS's API_NINJAS_EARNINGS_CALL_TRANSCRIPT tool output.
 */
type API_NINJAS_EARNINGS_CALL_TRANSCRIPT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date
       * @description Date of the earnings call in YYYY-MM-DD format.
       */
      date: string;
      /**
       * Transcript
       * @description Full transcript text of the earnings call.
       */
      transcript: string;
      /**
       * Transcript Split
       * @description Transcript split by speaker segments (premium only).
       * @default null
       */
      transcript_split: {
          /**
           * Company
           * @description Company name of the speaker, if available.
           * @default null
           */
          company: string | null;
          /**
           * Role
           * @description Role of the speaker, if available.
           * @default null
           */
          role: string | null;
          /**
           * Speaker
           * @description Name of the speaker.
           */
          speaker: string;
          /**
           * Text
           * @description Text spoken by the speaker.
           */
          text: string;
      }[] | null;
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
 * Type of API_NINJAS's API_NINJAS_ETF_INFO tool input.
 */
type API_NINJAS_ETF_INFO_INPUT = {
  /**
   * Ticker
   * @description ETF ticker symbol (e.g., 'QQQ', 'SPY', 'VTI')
   */
  ticker?: string;
};

/**
 * Type of API_NINJAS's API_NINJAS_ETF_INFO tool output.
 */
type API_NINJAS_ETF_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Aum
       * @description Assets under management in USD (premium users only)
       * @default null
       */
      aum: number | null;
      /**
       * Country
       * @description Country code of the ETF issuer
       */
      country: string;
      /**
       * Cusip
       * @description Committee on Uniform Security Identification Procedures (CUSIP) identifier
       */
      cusip: string;
      /**
       * Etf Name
       * @description Full name of the ETF
       */
      etf_name: string;
      /**
       * Etf Ticker
       * @description ETF ticker symbol
       */
      etf_ticker: string;
      /**
       * Expense Ratio
       * @description Annual expense ratio as a percentage (premium users only)
       * @default null
       */
      expense_ratio: number | null;
      /**
       * Holdings
       * @description List of top holdings
       */
      holdings: {
          /**
           * Last Updated
           * @description Timestamp of last update in Unix seconds
           */
          last_updated: number;
          /**
           * Num Shares
           * @description Number of shares of the holding
           */
          num_shares: number;
          /**
           * Ticker
           * @description Holding ticker symbol
           */
          ticker: string;
          /**
           * Value
           * @description Total value of the holding in USD
           */
          value: number;
          /**
           * Weight
           * @description Percentage weight of the holding (0-1 scale)
           */
          weight: number;
      }[];
      /**
       * Isin
       * @description International Securities Identification Number (ISIN)
       */
      isin: string;
      /**
       * Num Holdings
       * @description Number of holdings in the ETF
       */
      num_holdings: number;
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
 * Type of API_NINJAS's API_NINJAS_GET_INCOME_TAX tool input.
 */
type API_NINJAS_GET_INCOME_TAX_INPUT = {
  /**
   * Country
   * @description 2-letter ISO country code (e.g., 'US', 'CA')
   */
  country?: string;
  /**
   * Federal Only
   * @description If true, returns only federal tax information without state/provincial details
   * @default null
   */
  federal_only: boolean | null;
  /**
   * Year
   * @description Tax year to retrieve data for
   */
  year?: number;
};

/**
 * Type of API_NINJAS's API_NINJAS_GET_INCOME_TAX tool output.
 */
type API_NINJAS_GET_INCOME_TAX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description 2-letter ISO country code
       */
      country: string;
      /**
       * Federal
       * @description Federal tax brackets and rates keyed by filing status
       */
      federal: {
          [key: string]: {
              /**
               * Brackets
               * @description List of tax brackets
               */
              brackets: {
                  /**
                   * Max
                   * @description Maximum income threshold for this bracket; 'Infinity' if no upper bound
                   */
                  max: number | string;
                  /**
                   * Min
                   * @description Minimum income threshold for this bracket
                   */
                  min: number;
                  /**
                   * Rate
                   * @description Tax rate for this bracket
                   */
                  rate: number;
              }[];
          };
      };
      /**
       * State
       * @description State or provincial tax brackets and rates, keyed by code
       * @default null
       */
      state: {
          [key: string]: {
              /**
               * Brackets
               * @description List of tax brackets
               */
              brackets: {
                  /**
                   * Max
                   * @description Maximum income threshold for this bracket; 'Infinity' if no upper bound
                   */
                  max: number | string;
                  /**
                   * Min
                   * @description Minimum income threshold for this bracket
                   */
                  min: number;
                  /**
                   * Rate
                   * @description Tax rate for this bracket
                   */
                  rate: number;
              }[];
          };
      } | null;
      /**
       * Year
       * @description Tax year
       */
      year: string;
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
 * Type of API_NINJAS's API_NINJAS_IBAN_LOOKUP tool input.
 */
type API_NINJAS_IBAN_LOOKUP_INPUT = {
  /**
   * Iban
   * @description International Bank Account Number to look up
   */
  iban?: string;
};

/**
 * Type of API_NINJAS's API_NINJAS_IBAN_LOOKUP tool output.
 */
type API_NINJAS_IBAN_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Number
       * @description Account number portion of the IBAN
       */
      account_number: string;
      /**
       * Bank Code
       * @description Bank code portion of the IBAN
       */
      bank_code: string;
      /**
       * Bank Name
       * @description Name of the bank associated with the IBAN (premium only)
       * @default null
       */
      bank_name: string | null;
      /**
       * Bban
       * @description Basic Bank Account Number (BBAN) portion of the IBAN
       */
      bban: string;
      /**
       * Checksum
       * @description Checksum portion of the IBAN
       */
      checksum: string;
      /**
       * Country
       * @description Country code portion of the IBAN
       */
      country: string;
      /**
       * Iban
       * @description The IBAN that was looked up
       */
      iban: string;
      /**
       * Valid
       * @description Whether the IBAN is valid or not (premium only)
       * @default null
       */
      valid: boolean | null;
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
 * Type of API_NINJAS's API_NINJAS_INCOME_TAX_CALCULATOR tool input.
 */
type API_NINJAS_INCOME_TAX_CALCULATOR_INPUT = {
  /**
   * Country
   * @description 2-letter country code (e.g., 'US' for United States, 'CA' for Canada). Currently only US and CA are supported.
   * @enum {string}
   */
  country?: "US" | "CA";
  /**
   * Credits
   * @description Total tax credits amount; non-negative. Defaults to 0.
   * @default 0
   */
  credits: number | null;
  /**
   * Deductions
   * @description Total tax deductions amount; non-negative. Defaults to 0.
   * @default 0
   */
  deductions: number | null;
  /**
   * Filing Status
   * @description Tax filing status; required for US. Possible values: 'single', 'married', 'married_separate', or 'head_of_household'.
   * @default null
   * @enum {string|null}
   */
  filing_status: "single" | "married" | "married_separate" | "head_of_household" | null;
  /**
   * Income
   * @description Annual income amount; must be non-negative.
   */
  income?: number;
  /**
   * Region
   * @description State/province code (e.g., 'CA', 'NY', 'ON').
   */
  region?: string;
  /**
   * Self Employed
   * @description Set to true for self-employed tax calculations (US only). Defaults to false.
   * @default false
   */
  self_employed: boolean | null;
};

/**
 * Type of API_NINJAS's API_NINJAS_INCOME_TAX_CALCULATOR tool output.
 */
type API_NINJAS_INCOME_TAX_CALCULATOR_OUTPUT = {
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
       * Credits
       * @description Total tax credits amount.
       */
      credits: number;
      /**
       * Deductions
       * @description Total tax deductions amount.
       */
      deductions: number;
      /**
       * Federal Effective Rate
       * @description Federal effective tax rate.
       */
      federal_effective_rate: number;
      /**
       * Federal Taxes Owed
       * @description Federal taxes owed.
       */
      federal_taxes_owed: number;
      /**
       * Fica Medicare
       * @description FICA Medicare tax amount (US only).
       * @default null
       */
      fica_medicare: number | null;
      /**
       * Fica Social Security
       * @description FICA Social Security tax amount (US only).
       * @default null
       */
      fica_social_security: number | null;
      /**
       * Fica Total
       * @description Total FICA tax amount (US only).
       * @default null
       */
      fica_total: number | null;
      /**
       * Income
       * @description Annual income amount.
       */
      income: number;
      /**
       * Income After Tax
       * @description Income remaining after taxes.
       */
      income_after_tax: number | null;
      /**
       * Region
       * @description State/province code.
       */
      region: string;
      /**
       * Region Effective Rate
       * @description State/provincial effective tax rate.
       */
      region_effective_rate: number | null;
      /**
       * Region Taxes Owed
       * @description State/provincial taxes owed.
       */
      region_taxes_owed: number | null;
      /**
       * Taxable Income
       * @description Taxable income amount after deductions.
       */
      taxable_income: number;
      /**
       * Total Effective Tax Rate
       * @description Overall effective tax rate.
       */
      total_effective_tax_rate: number | null;
      /**
       * Total Taxes Owed
       * @description Total taxes owed.
       */
      total_taxes_owed: number | null;
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
 * Type of API_NINJAS's API_NINJAS_INFLATION tool input.
 */
type API_NINJAS_INFLATION_INPUT = {
  /**
   * Country
   * @description Name of country (case-insensitive).
   * @default null
   */
  country: string | null;
  /**
   * Type
   * @description Inflation indicator type. Can be either 'CPI' (Consumer Price Index) or 'HICP' (Harmonized Index of Consumer Prices). Defaults to 'CPI'.
   * @default null
   * @enum {string|null}
   */
  type: "CPI" | "HICP" | null;
};

/**
 * Type of API_NINJAS's API_NINJAS_INFLATION tool output.
 */
type API_NINJAS_INFLATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description The name of the country.
       */
      country: string;
      /**
       * Monthly Rate Pct
       * @description The monthly inflation rate as a percentage.
       */
      monthly_rate_pct: number;
      /**
       * Period
       * @description The period for the inflation data (e.g., 'Oct 2023').
       */
      period: string;
      /**
       * Type
       * @description The type of inflation indicator (CPI or HICP).
       */
      type: string;
      /**
       * Yearly Rate Pct
       * @description The yearly inflation rate as a percentage.
       */
      yearly_rate_pct: number;
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
 * Type of API_NINJAS's API_NINJAS_INTEREST_RATE tool input.
 */
type API_NINJAS_INTEREST_RATE_INPUT = {
  /**
   * Country
   * @description Country name or ISO 3166-1 alpha-2 code. If omitted, returns rates for all available countries.
   * @default null
   */
  country: string | null;
};

/**
 * Type of API_NINJAS's API_NINJAS_INTEREST_RATE tool output.
 */
type API_NINJAS_INTEREST_RATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Central Bank Rates
       * @description List of central bank rate records
       */
      central_bank_rates: {
          /**
           * Central Bank
           * @description Name of the central bank
           */
          central_bank: string;
          /**
           * Country
           * @description Country name
           */
          country: string;
          /**
           * Last Updated
           * @description Last date the rate was updated in ISO 8601 format (YYYY-MM-DD)
           */
          last_updated: string;
          /**
           * Rate Pct
           * @description Current interest rate as a percentage
           */
          rate_pct: number;
      }[];
      /**
       * Non Central Bank Rates
       * @description List of non-central bank benchmark rate records
       */
      non_central_bank_rates: {
          /**
           * Last Updated
           * @description Last date the rate was updated in ISO 8601 format (YYYY-MM-DD)
           */
          last_updated: string;
          /**
           * Name
           * @description Name of the benchmark rate
           */
          name: string;
          /**
           * Rate Pct
           * @description Benchmark rate as a percentage
           */
          rate_pct: number;
      }[];
      /**
       * Prime Rates
       * @description Prime rates information; may be string or list of records
       */
      prime_rates: string | null;
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
 * Type of API_NINJAS's API_NINJAS_MARKET_CAP tool input.
 */
type API_NINJAS_MARKET_CAP_INPUT = {
  /**
   * Ticker
   * @description Stock ticker symbol, e.g., 'NVDA'
   */
  ticker?: string;
};

/**
 * Type of API_NINJAS's API_NINJAS_MARKET_CAP tool output.
 */
type API_NINJAS_MARKET_CAP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Market Cap
       * @description Market cap in USD
       */
      market_cap: number;
      /**
       * Name
       * @description Company name
       */
      name: string;
      /**
       * Ticker
       * @description Stock ticker symbol, e.g., 'NVDA'
       */
      ticker: string;
      /**
       * Updated
       * @description Timestamp of the market cap data in Unix format (in seconds)
       */
      updated: number;
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
 * Type of API_NINJAS's API_NINJAS_MORTGAGE_RATE tool input.
 */
type API_NINJAS_MORTGAGE_RATE_INPUT = {
  /**
   * Date
   * @description Individual date to query in YYYY-MM-DD format. Premium-only; returns the week matching this date.
   * @default null
   */
  date: string | null;
  /**
   * Max Date
   * @description Maximum date in YYYY-MM-DD format for range query (must be used with min_date). Premium-only.
   * @default null
   */
  max_date: string | null;
  /**
   * Min Date
   * @description Minimum date in YYYY-MM-DD format for range query (must be used with max_date). Premium-only.
   * @default null
   */
  min_date: string | null;
};

/**
 * Type of API_NINJAS's API_NINJAS_MORTGAGE_RATE tool output.
 */
type API_NINJAS_MORTGAGE_RATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Frm 15
       * @description 15-year fixed-rate mortgage rate percentage.
       */
      frm_15: number;
      /**
       * Frm 30
       * @description 30-year fixed-rate mortgage rate percentage.
       */
      frm_30: number;
      /**
       * Week
       * @description Week date for the rate data point in YYYY-MM-DD format.
       */
      week: string;
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
 * Type of API_NINJAS's API_NINJAS_NUTRITION tool input.
 */
type API_NINJAS_NUTRITION_INPUT = {
  /**
   * Query
   * @description Text to extract nutrition information from. Specify quantities if needed (e.g., '1lb brisket and fries').
   */
  query?: string;
};

/**
 * Type of API_NINJAS's API_NINJAS_NUTRITION tool output.
 */
type API_NINJAS_NUTRITION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Calories
       * @description Nutritional energy in calories (premium feature).
       * @default null
       */
      calories: number | null;
      /**
       * Carbohydrates Total G
       * @description Total carbohydrates in grams.
       */
      carbohydrates_total_g: number;
      /**
       * Cholesterol Mg
       * @description Cholesterol in milligrams.
       */
      cholesterol_mg: number;
      /**
       * Fat Saturated G
       * @description Saturated fat in grams.
       */
      fat_saturated_g: number;
      /**
       * Fat Total G
       * @description Total combined fat in grams.
       */
      fat_total_g: number;
      /**
       * Fiber G
       * @description Fiber in grams.
       */
      fiber_g: number;
      /**
       * Name
       * @description Name of the food item.
       */
      name: string;
      /**
       * Potassium Mg
       * @description Potassium in milligrams.
       */
      potassium_mg: number;
      /**
       * Protein G
       * @description Protein in grams (premium feature).
       * @default null
       */
      protein_g: number | null;
      /**
       * Serving Size G
       * @description Serving size in grams (premium feature).
       * @default null
       */
      serving_size_g: number | null;
      /**
       * Sodium Mg
       * @description Sodium in milligrams.
       */
      sodium_mg: number;
      /**
       * Sugar G
       * @description Sugar in grams.
       */
      sugar_g: number;
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
 * Type map of all available tool input types for toolkit "API_NINJAS".
 */
export type API_NINJAS_TOOL_INPUTS = {
  BARCODE_GENERATE: API_NINJAS_BARCODE_GENERATE_INPUT
  BIN_LOOKUP: API_NINJAS_BIN_LOOKUP_INPUT
  BITCOIN: API_NINJAS_BITCOIN_INPUT
  COMMODITY_PRICE: API_NINJAS_COMMODITY_PRICE_INPUT
  CRYPTO_PRICE: API_NINJAS_CRYPTO_PRICE_INPUT
  DISPOSABLE_EMAIL_CHECKER: API_NINJAS_DISPOSABLE_EMAIL_CHECKER_INPUT
  DNS_LOOKUP: API_NINJAS_DNS_LOOKUP_INPUT
  EARNINGS_CALENDAR: API_NINJAS_EARNINGS_CALENDAR_INPUT
  EARNINGS_CALL_TRANSCRIPT: API_NINJAS_EARNINGS_CALL_TRANSCRIPT_INPUT
  ETF_INFO: API_NINJAS_ETF_INFO_INPUT
  GET_INCOME_TAX: API_NINJAS_GET_INCOME_TAX_INPUT
  IBAN_LOOKUP: API_NINJAS_IBAN_LOOKUP_INPUT
  INCOME_TAX_CALCULATOR: API_NINJAS_INCOME_TAX_CALCULATOR_INPUT
  INFLATION: API_NINJAS_INFLATION_INPUT
  INTEREST_RATE: API_NINJAS_INTEREST_RATE_INPUT
  MARKET_CAP: API_NINJAS_MARKET_CAP_INPUT
  MORTGAGE_RATE: API_NINJAS_MORTGAGE_RATE_INPUT
  NUTRITION: API_NINJAS_NUTRITION_INPUT
}

/**
 * Type map of all available tool input types for toolkit "API_NINJAS".
 */
export type API_NINJAS_TOOL_OUTPUTS = {
  BARCODE_GENERATE: API_NINJAS_BARCODE_GENERATE_OUTPUT
  BIN_LOOKUP: API_NINJAS_BIN_LOOKUP_OUTPUT
  BITCOIN: API_NINJAS_BITCOIN_OUTPUT
  COMMODITY_PRICE: API_NINJAS_COMMODITY_PRICE_OUTPUT
  CRYPTO_PRICE: API_NINJAS_CRYPTO_PRICE_OUTPUT
  DISPOSABLE_EMAIL_CHECKER: API_NINJAS_DISPOSABLE_EMAIL_CHECKER_OUTPUT
  DNS_LOOKUP: API_NINJAS_DNS_LOOKUP_OUTPUT
  EARNINGS_CALENDAR: API_NINJAS_EARNINGS_CALENDAR_OUTPUT
  EARNINGS_CALL_TRANSCRIPT: API_NINJAS_EARNINGS_CALL_TRANSCRIPT_OUTPUT
  ETF_INFO: API_NINJAS_ETF_INFO_OUTPUT
  GET_INCOME_TAX: API_NINJAS_GET_INCOME_TAX_OUTPUT
  IBAN_LOOKUP: API_NINJAS_IBAN_LOOKUP_OUTPUT
  INCOME_TAX_CALCULATOR: API_NINJAS_INCOME_TAX_CALCULATOR_OUTPUT
  INFLATION: API_NINJAS_INFLATION_OUTPUT
  INTEREST_RATE: API_NINJAS_INTEREST_RATE_OUTPUT
  MARKET_CAP: API_NINJAS_MARKET_CAP_OUTPUT
  MORTGAGE_RATE: API_NINJAS_MORTGAGE_RATE_OUTPUT
  NUTRITION: API_NINJAS_NUTRITION_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's API_NINJAS toolkit.
 */
export const API_NINJAS = {
  slug: "api_ninjas",
  tools: {
    /**
     * Tool to generate a barcode image for specified text. use when you need a barcode image (png or svg) of custom data.
     */
    BARCODE_GENERATE: "API_NINJAS_BARCODE_GENERATE",
    /**
     * Tool to look up bank information from a bank identification number. use after you have a bin to fetch issuer details (brand, type, country).
     */
    BIN_LOOKUP: "API_NINJAS_BIN_LOOKUP",
    /**
     * Tool to retrieve the latest bitcoin price and 24-hour market data. use when you need real-time bitcoin metrics in usd.
     */
    BITCOIN: "API_NINJAS_BITCOIN",
    /**
     * Tool to get real-time price for a commodity. use when you need the current market price by specifying the commodity name. example: "what is the current price of gold?"
     */
    COMMODITY_PRICE: "API_NINJAS_COMMODITY_PRICE",
    /**
     * Tool to get real-time price for a cryptocurrency pair. use when you need the current market price by symbol.
     */
    CRYPTO_PRICE: "API_NINJAS_CRYPTO_PRICE",
    /**
     * Tool to check whether an email address is from a disposable email provider. use when validating user emails prior to sending communications.
     */
    DISPOSABLE_EMAIL_CHECKER: "API_NINJAS_DISPOSABLE_EMAIL_CHECKER",
    /**
     * Tool to retrieve dns records for a specified domain. use when you need dns record details for troubleshooting or validation.
     */
    DNS_LOOKUP: "API_NINJAS_DNS_LOOKUP",
    /**
     * Tool to fetch past and upcoming earnings results for a specified ticker. use when you need both historical earnings and upcoming earnings dates for a company.
     */
    EARNINGS_CALENDAR: "API_NINJAS_EARNINGS_CALENDAR",
    /**
     * Tool to get the earnings call transcript for a company and quarter. use when you need full call text after earnings are released.
     */
    EARNINGS_CALL_TRANSCRIPT: "API_NINJAS_EARNINGS_CALL_TRANSCRIPT",
    /**
     * Tool to get detailed information about an etf by ticker. use after identifying the etf ticker symbol to retrieve its key metrics and top holdings.
     */
    ETF_INFO: "API_NINJAS_ETF_INFO",
    /**
     * Tool to get current and historical income tax rates for a country. use when you need detailed federal and state/provincial tax bracket information by country code and year.
     */
    GET_INCOME_TAX: "API_NINJAS_GET_INCOME_TAX",
    /**
     * Tool to look up and validate an international bank account number (iban). use when you have an iban and need to retrieve its components (country, bank code, account number, etc.) and its validity.
     */
    IBAN_LOOKUP: "API_NINJAS_IBAN_LOOKUP",
    /**
     * Tool to calculate income taxes for us and canada. use when you need detailed breakdown of federal, state/provincial, and fica taxes. country and region codes must be correct.
     */
    INCOME_TAX_CALCULATOR: "API_NINJAS_INCOME_TAX_CALCULATOR",
    /**
     * Tool to get current inflation data for a country. use when you need latest cpi or hicp monthly and annual inflation rates.
     */
    INFLATION: "API_NINJAS_INFLATION",
    /**
     * Tool to get current interest rates for central banks and benchmarks. use when you need to fetch the latest interest rate for a specific country or all available countries.
     */
    INTEREST_RATE: "API_NINJAS_INTEREST_RATE",
    /**
     * Tool to get real-time market cap data for a company. use when you need up-to-date market capitalization by specifying the stock ticker. example: "what is the market cap of nvda?"
     */
    MARKET_CAP: "API_NINJAS_MARKET_CAP",
    /**
     * Tool to get current and historical mortgage rates. use when you need weekly fixed-rate mortgage data, optionally for specific dates or date ranges.
     */
    MORTGAGE_RATE: "API_NINJAS_MORTGAGE_RATE",
    /**
     * Tool to extract nutrition information from text query. use when you need to parse food-related text (e.g., recipes, menus) to calculate corresponding nutrition data.
     */
    NUTRITION: "API_NINJAS_NUTRITION",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "API_NINJAS".
 */
export type API_NINJAS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "API_NINJAS".
 */
export type API_NINJAS_TRIGGER_EVENTS = {}
