// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BUILTWITH's BUILTWITH_CREATE_DOMAIN_LIST_FILE tool input.
 */
type BUILTWITH_CREATE_DOMAIN_LIST_FILE_INPUT = {
  /**
   * Domains
   * @description List of domain names (root domains). Duplicates will be removed automatically.
   */
  domains?: string[];
  /**
   * File Name
   * @description Custom output file name. Must end with .txt when format='txt' or .zip when format='zip'.
   * @default null
   */
  file_name: string | null;
  /**
   * Format
   * @description Output file format. 'txt' for plain text, 'zip' for a ZIP archive containing the text file.
   * @default txt
   * @enum {string}
   */
  format: "txt" | "zip";
};

/**
 * Type of BUILTWITH's BUILTWITH_CREATE_DOMAIN_LIST_FILE tool output.
 */
type BUILTWITH_CREATE_DOMAIN_LIST_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Type
       * @description MIME type corresponding to the file format.
       * @enum {string}
       */
      content_type: "text/plain" | "application/zip";
      /**
       * File
       * Format: binary
       * @description Binary content of the generated file. Use as the 'file' parameter for upload.
       */
      file: string;
      /**
       * File Name
       * @description Name of the generated file.
       */
      file_name: string;
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
 * Type of BUILTWITH's BUILTWITH_DATASETS_LOOKUP tool input.
 */
type BUILTWITH_DATASETS_LOOKUP_INPUT = {
  /**
   * Lookup
   * @description Domain name to retrieve mass Internet technology usage information for, e.g., 'builtwith.com'
   */
  LOOKUP?: string;
};

/**
 * Type of BUILTWITH's BUILTWITH_DATASETS_LOOKUP tool output.
 */
type BUILTWITH_DATASETS_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Lookup
       * @description Domain looked up
       */
      LOOKUP: string;
      /**
       * Series
       * @description Time series data of technology usage from 2000 to today
       */
      series: {
          /**
           * Count
           * @description Number of sites using the technology in that year
           */
          count: number;
          /**
           * Year
           * @description Year of the data point (e.g., 2000)
           */
          year: number;
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
 * Type of BUILTWITH's BUILTWITH_DOMAIN_API_LOOKUP tool input.
 */
type BUILTWITH_DOMAIN_API_LOOKUP_INPUT = {
  /**
   * Hidedl
   * @default null
   * @constant
   */
  hidedl: "yes";
  /**
   * Hidetext
   * @default null
   * @constant
   */
  hidetext: "yes";
  /**
   * Liveonly
   * @default null
   * @constant
   */
  liveonly: "yes";
  /**
   * Lookup
   * @description Domain or URL to lookup
   */
  lookup?: string;
  /**
   * Noattr
   * @default null
   * @constant
   */
  noattr: "yes";
  /**
   * Nolive
   * @default null
   * @constant
   */
  nolive: "yes";
  /**
   * Nometa
   * @default null
   * @constant
   */
  nometa: "yes";
  /**
   * Nopii
   * @default null
   * @constant
   */
  nopii: "yes";
  /**
   * Trust
   * @default null
   * @constant
   */
  trust: "yes";
};

/**
 * Type of BUILTWITH's BUILTWITH_DOMAIN_API_LOOKUP tool output.
 */
type BUILTWITH_DOMAIN_API_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of lookup result entries
       */
      Results: {
          /**
           * DomainAttributes
           * @description Site attribute data
           * @default null
           */
          Attributes: {
              /**
               * Adobe Tags
               * @description Adobe tag manager tags count
               * @default null
               */
              AdobeTags: number | null;
              /**
               * C Dimensions
               * @description Custom dimensions count
               * @default null
               */
              CDimensions: number | null;
              /**
               * C Goals
               * @description Custom goals count
               * @default null
               */
              CGoals: number | null;
              /**
               * C Metrics
               * @description Custom metrics count
               * @default null
               */
              CMetrics: number | null;
              /**
               * Followers
               * @description Brand followers group code
               * @default null
               */
              Followers: number | null;
              /**
               * Gtm Tags
               * @description Google Tag Manager tags count
               * @default null
               */
              GTMTags: number | null;
              /**
               * Mj Rank
               * @description Majestic rank for domain
               * @default null
               */
              MJRank: number | null;
              /**
               * Mjtld Rank
               * @description Majestic rank for TLD
               * @default null
               */
              MJTLDRank: number | null;
              /**
               * Product Count
               * @description Number of products/SKUs
               * @default null
               */
              ProductCount: number | null;
              /**
               * Qubit Tags
               * @description Qubit tag manager tags count
               * @default null
               */
              QubitTags: number | null;
              /**
               * Ref Ip
               * @description Referring IPs count
               * @default null
               */
              RefIP: number | null;
              /**
               * Ref Sn
               * @description Referring subnets count
               * @default null
               */
              RefSN: number | null;
              /**
               * Sitemap
               * @description Indexed sitemap entries count
               * @default null
               */
              Sitemap: number | null;
              /**
               * Tealium Tags
               * @description Tealium tag manager tags count
               * @default null
               */
              TealiumTags: number | null;
          } | null;
          /**
           * First Indexed
           * @description Epoch ms first indexed overall domain
           */
          FirstIndexed: number;
          /**
           * Is Db
           * @description Source type: True/False/Misleading
           * @default null
           */
          IsDB: string | null;
          /**
           * Last Indexed
           * @description Epoch ms last indexed overall domain
           */
          LastIndexed: number;
          /**
           * Lookup
           * @description Lookup domain or URL
           */
          Lookup: string;
          /**
           * MetaData
           * @description Site metadata info
           * @default null
           */
          Meta: {
              /**
               * A Rank
               * @description Alexa rank
               * @default null
               */
              ARank: number | null;
              /**
               * City
               * @description City in address metadata
               * @default null
               */
              City: string | null;
              /**
               * Company Name
               * @description Registered company name
               * @default null
               */
              CompanyName: string | null;
              /**
               * Country
               * @description ISO 3166-1 alpha-2 country code
               * @default null
               */
              Country: string | null;
              /**
               * Emails
               * @description Email addresses found
               * @default null
               */
              Emails: string[] | null;
              /**
               * Majestic
               * @description Majestic rank
               * @default null
               */
              Majestic: number | null;
              /**
               * Names
               * @description Contact names and info
               * @default null
               */
              Names: {
                  /**
                   * Email
                   * @description Person's email address
                   * @default null
                   */
                  Email: string | null;
                  /**
                   * Name
                   * @description Person's name from metadata
                   */
                  Name: string;
                  /**
                   * Type
                   * @description Numeric code for title or role
                   * @default null
                   */
                  Type: number | null;
              }[] | null;
              /**
               * Postcode
               * @description Postal code/ZIP
               * @default null
               */
              Postcode: string | null;
              /**
               * Q Rank
               * @description Quantcast rank
               * @default null
               */
              QRank: number | null;
              /**
               * Social
               * @description Social profile URLs
               * @default null
               */
              Social: string[] | null;
              /**
               * State
               * @description State or region code
               * @default null
               */
              State: string | null;
              /**
               * Telephones
               * @description Phone numbers found
               * @default null
               */
              Telephones: string[] | null;
              /**
               * Umbrella
               * @description Umbrella traffic rank
               * @default null
               */
              Umbrella: number | null;
              /**
               * Vertical
               * @description Industry vertical
               * @default null
               */
              Vertical: string | null;
          } | null;
          /**
           * Paths
           * @description Path-level technology data
           * @default null
           */
          Paths: {
              /**
               * Domain
               * @description Root domain of this path
               */
              Domain: string;
              /**
               * First Indexed
               * @description Epoch ms when this path first indexed
               */
              FirstIndexed: number;
              /**
               * Last Indexed
               * @description Epoch ms when this path last indexed
               */
              LastIndexed: number;
              /**
               * Sub Domain
               * @description Subdomain label if applicable
               * @default null
               */
              SubDomain: string | null;
              /**
               * Technologies
               * @description Detected technologies on this path
               */
              Technologies: {
                  /**
                   * Categories
                   * @description Sub-category tags
                   * @default null
                   */
                  Categories: string[] | null;
                  /**
                   * Description
                   * @description Technology description
                   * @default null
                   */
                  Description: string | null;
                  /**
                   * First Detected
                   * @description Epoch ms when first detected
                   */
                  FirstDetected: number;
                  /**
                   * Is Premium
                   * @description Indicates if the technology is paid (yes/no/maybe)
                   * @default null
                   */
                  IsPremium: string | null;
                  /**
                   * Last Detected
                   * @description Epoch ms when last detected
                   */
                  LastDetected: number;
                  /**
                   * Link
                   * @description URL to technology website or docs
                   * @default null
                   */
                  Link: string | null;
                  /**
                   * Name
                   * @description Name of the detected technology
                   */
                  Name: string;
                  /**
                   * Parent
                   * @description Parent technology name, if any
                   * @default null
                   */
                  Parent: string | null;
                  /**
                   * Tag
                   * @description Base category tag for the technology
                   * @default null
                   */
                  Tag: string | null;
              }[];
              /**
               * Url
               * @description URL or 'dd' indicator for aggregated paths
               */
              Url: string;
          }[] | null;
          /**
           * Sales Revenue
           * @description Monthly sales revenue in USD
           * @default null
           */
          SalesRevenue: number | null;
          /**
           * Spend
           * @description Monthly tech spend in USD
           * @default null
           */
          Spend: number | null;
          /**
           * Spend History
           * @description Spend time series data
           * @default null
           */
          SpendHistory: {
              /**
               * D
               * @description Epoch milliseconds of spend data point
               */
              D: number;
              /**
               * S
               * @description Monthly average spend in USD at this date
               */
              S: number;
          }[] | null;
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
 * Type of BUILTWITH's BUILTWITH_FINANCIAL_API_LOOKUP tool input.
 */
type BUILTWITH_FINANCIAL_API_LOOKUP_INPUT = {
  /**
   * Lookup
   * @description Website domain to lookup financial information for (e.g., 'robinhood.com').
   */
  lookup?: string;
};

/**
 * Type of BUILTWITH's BUILTWITH_FINANCIAL_API_LOOKUP tool output.
 */
type BUILTWITH_FINANCIAL_API_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company Name
       * @description The company name.
       */
      companyName: string;
      /**
       * CompanyHouseModel
       * @description UK Companies House financial data if available.
       * @default null
       */
      companyhouse: {
          /**
           * Accounting Type
           * @description Type of accounting the company uses.
           */
          accountingType: string;
          /**
           * Company Name
           * @description The company name.
           */
          companyName: string;
          /**
           * Financials
           * @description List of financial reporting entries for the company.
           */
          financials: {
              /**
               * Balance Sheet
               * @description Balance sheet date epoch in milliseconds.
               */
              balanceSheet: number;
              /**
               * Balance Sheet Date
               * @description Balance sheet date in YYYY-MM-DD format.
               */
              balanceSheetDate: string;
              /**
               * Cash
               * @description Cash on hand in USD.
               */
              cash: number;
              /**
               * Cost Of Sales
               * @description Direct expenses of producing goods or services in USD.
               */
              costOfSales: number;
              /**
               * Creditors
               * @description Amounts owed by the company to creditors in USD.
               */
              creditors: number;
              /**
               * Current Assets
               * @description Assets expected to be converted into cash within one year in USD.
               */
              currentAssets: number;
              /**
               * Debtors
               * @description Amount owed to the company by debtors in USD.
               */
              debtors: number;
              /**
               * Fixed Assets
               * @description Long-term tangible assets in USD.
               */
              fixedAssets: number;
              /**
               * Gross Profit
               * @description Revenue minus cost of sales in USD.
               */
              grossProfit: number;
              /**
               * Net Assets
               * @description Total value of non-current assets minus non-current liabilities in USD.
               */
              netAssets: number;
              /**
               * Net Current Assets
               * @description Difference between current assets and current liabilities in USD.
               */
              netCurrentAssets: number;
              /**
               * Operating Profit
               * @description Profit from core business operations in USD.
               */
              operatingProfit: number;
              /**
               * Other Income
               * @description Earnings outside core business activities in USD.
               */
              otherIncome: number;
              /**
               * Profit Loss
               * @description Overall financial result of operations for the period in USD.
               */
              profitLoss: number;
              /**
               * Tax On Profit
               * @description Income tax on profit in USD.
               */
              taxOnProfit: number;
              /**
               * Turnover Revenue
               * @description Total income from normal business activities in USD.
               */
              turnoverRevenue: number;
          }[];
          /**
           * Incorporation Date
           * @description Date of incorporation in epoch milliseconds.
           */
          incorporationDate: number;
          /**
           * Reg No
           * @description Company registration number.
           */
          regNo: string;
          /**
           * Sic
           * @description Standard Industrial Classification codes for the company.
           */
          sic: number[];
      } | null;
      /**
       * Domain
       * @description The domain that was looked up.
       */
      domain: string;
      /**
       * EdgarModel
       * @description US SEC Edgar financial data if available.
       * @default null
       */
      edgar: {
          /**
           * Cik
           * @description CIK code for the company.
           */
          cik: number;
          /**
           * Company Name
           * @description The company name.
           */
          companyName: string;
          /**
           * Exchanges
           * @description Array of stock exchanges for the company.
           */
          exchanges: string[];
          /**
           * Financials
           * @description List of financial reporting entries for the company.
           */
          financials: {
              /**
               * Assets
               * @description Resources owned by the company in USD.
               */
              assets: number;
              /**
               * Cash
               * @description Cash on hand in USD.
               */
              cash: number;
              /**
               * Common Stock Outstanding
               * @description Total number of shares of common stock outstanding.
               */
              commonStockOutstanding: number;
              /**
               * Current Assets
               * @description Assets expected to convert into cash within one year in USD.
               */
              currentAssets: number;
              /**
               * Current Liabilities
               * @description Obligations due within one year in USD.
               */
              currentLiabilities: number;
              /**
               * Dividends Paid
               * @description Portion of earnings distributed to shareholders in USD.
               */
              dividendsPaid: number;
              /**
               * Equity
               * @description Residual interest in assets after liabilities in USD.
               */
              equity: number;
              /**
               * Liabilities
               * @description Company's financial obligations in USD.
               */
              liabilities: number;
              /**
               * Net Income
               * @description Total profit after subtracting all expenses in USD.
               */
              netIncome: number;
              /**
               * Operating Income
               * @description Profit from core business operations in USD.
               */
              operatingIncome: number;
              /**
               * Period End
               * @description Financial reporting period end epoch in milliseconds.
               */
              periodEnd: number;
              /**
               * Period End Date
               * @description Financial reporting period end date in YYYY-MM-DD format.
               */
              periodEndDate: string;
              /**
               * Period Start
               * @description Financial reporting period epoch in milliseconds.
               */
              periodStart: number;
              /**
               * Period Start Date
               * @description Financial reporting period start date in YYYY-MM-DD format.
               */
              periodStartDate: string;
              /**
               * Retained Earnings
               * @description Cumulative net income reinvested in the business in USD.
               */
              retainedEarnings: number;
              /**
               * Revenue
               * @description Total amount of money a company generates from its normal business activities in USD.
               */
              revenue: number;
          }[];
          /**
           * Sic
           * @description Standard Industrial Classification codes for the company.
           */
          sic: number[];
          /**
           * Tickers
           * @description Array of stock tickers for the company.
           */
          tickers: string[];
      } | null;
      /**
       * Employees
       * @description Number of employees or zero if not found.
       */
      employees: number;
      /**
       * Followers
       * @description Social followers count or zero if not found.
       */
      followers: number;
      /**
       * Products
       * @description Number of SKU products or zero if not found.
       */
      products: number;
      /**
       * Spend
       * @description Monthly technology USD spend estimate.
       */
      spend: number;
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
 * Type of BUILTWITH's BUILTWITH_FREE_API_LOOKUP tool input.
 */
type BUILTWITH_FREE_API_LOOKUP_INPUT = {
  /**
   * Lookup
   * @description Root domain to lookup; only root domains are supported (e.g., 'builtwith.com')
   */
  LOOKUP?: string;
};

/**
 * Type of BUILTWITH's BUILTWITH_FREE_API_LOOKUP tool output.
 */
type BUILTWITH_FREE_API_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain
       * @description The domain that was looked up
       */
      domain: string;
      /**
       * First
       * @description Epoch seconds when the domain was first indexed
       */
      first: number;
      /**
       * Groups
       * @description List of technology groups with counts and timestamps
       */
      groups: {
          /**
           * Categories
           * @description List of category objects within this group
           */
          categories: {
              /**
               * Dead
               * @description Count of dead technologies in this category
               */
              dead: number;
              /**
               * Latest
               * @description Epoch seconds of most recent technology detection in this category
               */
              latest: number;
              /**
               * Live
               * @description Count of live technologies in this category
               */
              live: number;
              /**
               * Name
               * @description Category identifier, e.g., 'social-sdk'
               */
              name: string;
              /**
               * Oldest
               * @description Epoch seconds of earliest technology detection in this category
               */
              oldest: number;
          }[];
          /**
           * Dead
           * @description Count of dead technologies in this group
           */
          dead: number;
          /**
           * Latest
           * @description Epoch seconds of most recent technology detection in this group
           */
          latest: number;
          /**
           * Live
           * @description Count of live technologies in this group
           */
          live: number;
          /**
           * Name
           * @description Group name, e.g., 'analytics'
           */
          name: string;
          /**
           * Oldest
           * @description Epoch seconds of earliest technology detection in this group
           */
          oldest: number;
      }[];
      /**
       * Last
       * @description Epoch seconds when the domain was last indexed
       */
      last: number;
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
 * Type of BUILTWITH's BUILTWITH_GET_LIST_WITH_META tool input.
 */
type BUILTWITH_GET_LIST_WITH_META_INPUT = {
  /**
   * All
   * @description Set to 'yes' to include historical sites; cannot be used with since
   * @default null
   * @constant
   */
  all: "yes";
  /**
   * Country
   * @description ISO 3166-1 alpha-2 country code(s) to filter results, comma-separated
   * @default null
   */
  country: string | null;
  /**
   * Offset
   * @description Pagination token from previous response; 'END' means no more results
   * @default null
   */
  offset: string | null;
  /**
   * Since
   * @description Filter sites active since given date or relative query (e.g., '30 Days Ago'); cannot be used with all
   * @default null
   */
  since: string | null;
  /**
   * Tech
   * @description Technology name (replace spaces with dashes, e.g., 'Magento')
   */
  tech?: string;
};

/**
 * Type of BUILTWITH's BUILTWITH_GET_LIST_WITH_META tool output.
 */
type BUILTWITH_GET_LIST_WITH_META_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Offset
       * @description Token for next page; 'END' if this is the last page
       */
      NextOffset: string;
      /**
       * Results
       * @description Array of site entries matching the technology query
       */
      Results: {
          /**
           * A
           * @description PageRank traffic rank (Top 100m)
           * @default null
           */
          A: number | null;
          /**
           * D
           * @description Domain name matching the query
           */
          D: string;
          /**
           * E
           * @description Employee count for the company
           * @default null
           */
          E: number | null;
          /**
           * F
           * @description Social followers count
           * @default null
           */
          F: number | null;
          /**
           * Fd
           * @description Epoch seconds when technology was first detected
           */
          FD: number;
          /**
           * Fi
           * @description Epoch seconds when site was first indexed
           */
          FI: number;
          /**
           * Ld
           * @description Epoch seconds when technology was last detected
           */
          LD: number;
          /**
           * Li
           * @description Epoch seconds when site was last indexed
           */
          LI: number;
          /**
           * Los
           * @description List of URLs or subdomains where technology was detected
           */
          LOS: string[];
          /**
           * M
           * @description Majestic Top 1m link rank
           * @default null
           */
          M: number | null;
          /**
           * ListsApiMetaData
           * @description Meta data for a website returned when META parameter is used.
           * @default null
           */
          META: {
              /**
               * City
               * @description City of company's address
               * @default null
               */
              City: string | null;
              /**
               * Company Name
               * @description Incorporated company name if available
               * @default null
               */
              CompanyName: string | null;
              /**
               * Country
               * @description ISO 3166-1 alpha-2 country code
               * @default null
               */
              Country: string | null;
              /**
               * Emails
               * @description List of email addresses found on the site
               * @default null
               */
              Emails: string[] | null;
              /**
               * Postcode
               * @description Postal code or ZIP
               * @default null
               */
              Postcode: string | null;
              /**
               * Social
               * @description List of social profile URLs found
               * @default null
               */
              Social: string[] | null;
              /**
               * State
               * @description State or region code
               * @default null
               */
              State: string | null;
              /**
               * Telephones
               * @description List of international telephone numbers found
               * @default null
               */
              Telephones: string[] | null;
              /**
               * Titles
               * @description List of titles for people at the company
               * @default null
               */
              Titles: string[] | null;
              /**
               * Vertical
               * @description Industry vertical for the domain, if known
               * @default null
               */
              Vertical: string | null;
          } | null;
          /**
           * Q
           * @description Tranco Top 1m traffic rank
           * @default null
           */
          Q: number | null;
          /**
           * R
           * @description Estimated sales revenue for eCommerce sites
           * @default null
           */
          R: number | null;
          /**
           * S
           * @description Estimated monthly technology spend average in USD
           * @default null
           */
          S: number | null;
          /**
           * Sku
           * @description Number of unique products found for eCommerce sites
           * @default null
           */
          SKU: number | null;
          /**
           * U
           * @description Umbrella Top 1m traffic rank
           * @default null
           */
          U: number | null;
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
 * Type of BUILTWITH's BUILTWITH_LISTS_API_GET_LIST tool input.
 */
type BUILTWITH_LISTS_API_GET_LIST_INPUT = {
  /**
   * All
   * @description Set to 'yes' to include historical sites; cannot be used with since
   * @default null
   * @constant
   */
  all: "yes";
  /**
   * Country
   * @description ISO 3166-1 alpha-2 country code(s) to filter results, comma-separated
   * @default null
   */
  country: string | null;
  /**
   * Meta
   * @description Set to 'yes' to include meta data in results
   * @default null
   * @constant
   */
  meta: "yes";
  /**
   * Offset
   * @description Pagination token from previous response; 'END' means no more results
   * @default null
   */
  offset: string | null;
  /**
   * Since
   * @description Filter sites active since given date or relative query (e.g., '30 Days Ago'); cannot be used with all
   * @default null
   */
  since: string | null;
  /**
   * Tech
   * @description Technology name (replace spaces with dashes, e.g., 'Magento')
   */
  tech?: string;
};

/**
 * Type of BUILTWITH's BUILTWITH_LISTS_API_GET_LIST tool output.
 */
type BUILTWITH_LISTS_API_GET_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Offset
       * @description Token for next page; 'END' if this is the last page
       */
      NextOffset: string;
      /**
       * Results
       * @description Array of site entries matching the technology query
       */
      Results: {
          /**
           * A
           * @description PageRank traffic rank (Top 100m)
           * @default null
           */
          A: number | null;
          /**
           * D
           * @description Domain name matching the query
           */
          D: string;
          /**
           * E
           * @description Employee count for the company
           * @default null
           */
          E: number | null;
          /**
           * F
           * @description Social followers count
           * @default null
           */
          F: number | null;
          /**
           * Fd
           * @description Epoch seconds when technology was first detected
           */
          FD: number;
          /**
           * Fi
           * @description Epoch seconds when site was first indexed
           */
          FI: number;
          /**
           * Ld
           * @description Epoch seconds when technology was last detected
           */
          LD: number;
          /**
           * Li
           * @description Epoch seconds when site was last indexed
           */
          LI: number;
          /**
           * Los
           * @description List of URLs or subdomains where technology was detected
           */
          LOS: string[];
          /**
           * M
           * @description Majestic Top 1m link rank
           * @default null
           */
          M: number | null;
          /**
           * ListsApiMetaData
           * @description Meta data for a website returned when META parameter is used.
           * @default null
           */
          META: {
              /**
               * City
               * @description City of company's address
               * @default null
               */
              City: string | null;
              /**
               * Company Name
               * @description Incorporated company name if available
               * @default null
               */
              CompanyName: string | null;
              /**
               * Country
               * @description ISO 3166-1 alpha-2 country code
               * @default null
               */
              Country: string | null;
              /**
               * Emails
               * @description List of email addresses found on the site
               * @default null
               */
              Emails: string[] | null;
              /**
               * Postcode
               * @description Postal code or ZIP
               * @default null
               */
              Postcode: string | null;
              /**
               * Social
               * @description List of social profile URLs found
               * @default null
               */
              Social: string[] | null;
              /**
               * State
               * @description State or region code
               * @default null
               */
              State: string | null;
              /**
               * Telephones
               * @description List of international telephone numbers found
               * @default null
               */
              Telephones: string[] | null;
              /**
               * Titles
               * @description List of titles for people at the company
               * @default null
               */
              Titles: string[] | null;
              /**
               * Vertical
               * @description Industry vertical for the domain, if known
               * @default null
               */
              Vertical: string | null;
          } | null;
          /**
           * Q
           * @description Tranco Top 1m traffic rank
           * @default null
           */
          Q: number | null;
          /**
           * R
           * @description Estimated sales revenue for eCommerce sites
           * @default null
           */
          R: number | null;
          /**
           * S
           * @description Estimated monthly technology spend average in USD
           * @default null
           */
          S: number | null;
          /**
           * Sku
           * @description Number of unique products found for eCommerce sites
           * @default null
           */
          SKU: number | null;
          /**
           * U
           * @description Umbrella Top 1m traffic rank
           * @default null
           */
          U: number | null;
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
 * Type of BUILTWITH's BUILTWITH_MCP_API_LOOKUP tool input.
 */
type BUILTWITH_MCP_API_LOOKUP_INPUT = {
  /**
   * Domain
   * @description Root domain to lookup (e.g., 'example.com')
   */
  domain?: string;
};

/**
 * Type of BUILTWITH's BUILTWITH_MCP_API_LOOKUP tool output.
 */
type BUILTWITH_MCP_API_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Technologies
       * @description List of live web technologies detected on the domain
       */
      technologies: {
          /**
           * Description
           * @description Description of the detected technology
           */
          Description: string;
          /**
           * Link
           * @description URL to the technology's website or documentation
           */
          Link: string;
          /**
           * Name
           * @description Name of the detected technology
           */
          Name: string;
          /**
           * Tag
           * @description Category tag of the detected technology
           */
          Tag: string;
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
 * Type of BUILTWITH's BUILTWITH_PRODUCT_API_LOOKUP tool input.
 */
type BUILTWITH_PRODUCT_API_LOOKUP_INPUT = {
  /**
   * Limit
   * @description Number of shops to return (default 50, max 500).
   * @default 50
   */
  LIMIT: number | null;
  /**
   * Page
   * @description Page index for results (default 0 = first page).
   * @default 0
   */
  PAGE: number | null;
  /**
   * Query
   * @description Product search string or 'dom:<domain>'.
   */
  QUERY?: string;
};

/**
 * Type of BUILTWITH's BUILTWITH_PRODUCT_API_LOOKUP tool output.
 */
type BUILTWITH_PRODUCT_API_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits
       * @description Total product credits available.
       */
      credits: number;
      /**
       * Is More
       * @description True if more pages exist.
       */
      is_more: boolean;
      /**
       * Limit
       * @description Page limit of shops (max 500).
       */
      limit: number;
      /**
       * Next Page
       * @description URL path to the next page of results.
       * @default null
       */
      next_page: string | null;
      /**
       * Page
       * @description Current data page (0 = first page).
       */
      page: number;
      /**
       * Query
       * @description What you searched for.
       */
      query: string;
      /**
       * Remaining
       * @description Product credits remaining.
       */
      remaining: number;
      /**
       * Results
       * @description Number of products in the result set.
       */
      results: number;
      /**
       * Shop Count
       * @description Number of shops in the result set.
       */
      shop_count: number;
      /**
       * Shops
       * @description Array of shops and their products.
       */
      shops: {
          /**
           * Domain
           * @description The domain or subdomain of the shop.
           */
          Domain: string;
          /**
           * Products
           * @description List of products from this shop.
           */
          Products: {
              /**
               * Indexed
               * @description Date the product was last detected.
               */
              Indexed: string;
              /**
               * Price
               * @description Price of the product in the shop's default currency.
               */
              Price: number;
              /**
               * Title
               * @description The title of the product.
               */
              Title: string;
              /**
               * Url
               * @description Relative URL of the product.
               */
              Url: string;
          }[];
      }[];
      /**
       * Used
       * @description Total product credits used.
       */
      used: number;
      /**
       * Used This Query
       * @description Credits used for this lookup.
       */
      used_this_query: number;
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
 * Type of BUILTWITH's BUILTWITH_RECOMMENDATIONS_API_LOOKUP tool input.
 */
type BUILTWITH_RECOMMENDATIONS_API_LOOKUP_INPUT = {
  /**
   * Lookup
   * @description A root domain or comma-separated list of up to 16 root domains to get technology recommendations for.
   */
  lookup?: string;
};

/**
 * Type of BUILTWITH's BUILTWITH_RECOMMENDATIONS_API_LOOKUP tool output.
 */
type BUILTWITH_RECOMMENDATIONS_API_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Compiled
       * @description ISO 8601 timestamp when recommendations were compiled
       */
      compiled: string;
      /**
       * Domain
       * @description The domain name of the recommendations
       */
      domain: string;
      /**
       * Tech
       * @description List of recommended technologies
       */
      tech: {
          /**
           * Categories
           * @description Array of sub-categories for the technology
           */
          categories: string[];
          /**
           * Link
           * @description URL to the recommended technology
           */
          link: string;
          /**
           * Match
           * @description Relevance match score; higher is more relevant
           */
          match: number;
          /**
           * Name
           * @description Name of the recommended technology
           */
          name: string;
          /**
           * Stars
           * @description Relevance rating between 0 and 4
           */
          stars: number;
          /**
           * Tag
           * @description Top-level technology category
           */
          tag: string;
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
 * Type of BUILTWITH's BUILTWITH_REDIRECTS_API_LOOKUP tool input.
 */
type BUILTWITH_REDIRECTS_API_LOOKUP_INPUT = {
  /**
   * Lookup
   * @description Root domain for redirects lookup; only root domains (no subdomains or paths).
   */
  LOOKUP?: string;
};

/**
 * Type of BUILTWITH's BUILTWITH_REDIRECTS_API_LOOKUP tool output.
 */
type BUILTWITH_REDIRECTS_API_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Inbound
       * @description List of domains redirecting to the lookup domain.
       */
      Inbound: {
          /**
           * Domain
           * @description A domain that either redirects from or to the lookup domain.
           */
          Domain: string;
          /**
           * First Detected
           * @description Date when this redirect was first detected (YYYY-MM-DD).
           */
          FirstDetected: string;
          /**
           * Last Detected
           * @description Date when this redirect was last detected (YYYY-MM-DD).
           */
          LastDetected: string;
      }[];
      /**
       * Lookup
       * @description The root domain that was looked up.
       */
      Lookup: string;
      /**
       * Outbound
       * @description List of domains the lookup domain redirects to.
       */
      Outbound: {
          /**
           * Domain
           * @description A domain that either redirects from or to the lookup domain.
           */
          Domain: string;
          /**
           * First Detected
           * @description Date when this redirect was first detected (YYYY-MM-DD).
           */
          FirstDetected: string;
          /**
           * Last Detected
           * @description Date when this redirect was last detected (YYYY-MM-DD).
           */
          LastDetected: string;
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
 * Type of BUILTWITH's BUILTWITH_SOCIAL_API_LOOKUP tool input.
 */
type BUILTWITH_SOCIAL_API_LOOKUP_INPUT = {
  /**
   * Lookup
   * @description Social media profile URL or broad identifier to lookup. Supports multi-lookup of up to 16 identifiers separated by commas.
   */
  lookup?: string;
};

/**
 * Type of BUILTWITH's BUILTWITH_SOCIAL_API_LOOKUP tool output.
 */
type BUILTWITH_SOCIAL_API_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Socials
       * @description Social API lookup results
       */
      Socials: {
          /**
           * Social
           * @description Array of social entries for each lookup identifier
           */
          Social: {
              /**
               * Name
               * @description Identifier of the social link without the base URL
               */
              Name: string;
              /**
               * Results
               * @description List of social URL matcher results
               */
              Results: {
                  /**
                   * Domains
                   * @description Domains associated with the social profile URL
                   */
                  Domains: {
                      /**
                       * Built With Rank
                       * @description Rank of the domain in the top million sites, or -1 if out of top 1m
                       */
                      BuiltWithRank: number;
                      /**
                       * Root
                       * @description Root domain linked to the social network
                       */
                      Root: string;
                  }[];
                  /**
                   * Social Url
                   * @description The social network match we found
                   */
                  SocialUrl: string;
              }[];
          }[];
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
 * Type map of all available tool input types for toolkit "BUILTWITH".
 */
export type BUILTWITH_TOOL_INPUTS = {
  CREATE_DOMAIN_LIST_FILE: BUILTWITH_CREATE_DOMAIN_LIST_FILE_INPUT
  DATASETS_LOOKUP: BUILTWITH_DATASETS_LOOKUP_INPUT
  DOMAIN_API_LOOKUP: BUILTWITH_DOMAIN_API_LOOKUP_INPUT
  FINANCIAL_API_LOOKUP: BUILTWITH_FINANCIAL_API_LOOKUP_INPUT
  FREE_API_LOOKUP: BUILTWITH_FREE_API_LOOKUP_INPUT
  GET_LIST_WITH_META: BUILTWITH_GET_LIST_WITH_META_INPUT
  LISTS_API_GET_LIST: BUILTWITH_LISTS_API_GET_LIST_INPUT
  MCP_API_LOOKUP: BUILTWITH_MCP_API_LOOKUP_INPUT
  PRODUCT_API_LOOKUP: BUILTWITH_PRODUCT_API_LOOKUP_INPUT
  RECOMMENDATIONS_API_LOOKUP: BUILTWITH_RECOMMENDATIONS_API_LOOKUP_INPUT
  REDIRECTS_API_LOOKUP: BUILTWITH_REDIRECTS_API_LOOKUP_INPUT
  SOCIAL_API_LOOKUP: BUILTWITH_SOCIAL_API_LOOKUP_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BUILTWITH".
 */
export type BUILTWITH_TOOL_OUTPUTS = {
  CREATE_DOMAIN_LIST_FILE: BUILTWITH_CREATE_DOMAIN_LIST_FILE_OUTPUT
  DATASETS_LOOKUP: BUILTWITH_DATASETS_LOOKUP_OUTPUT
  DOMAIN_API_LOOKUP: BUILTWITH_DOMAIN_API_LOOKUP_OUTPUT
  FINANCIAL_API_LOOKUP: BUILTWITH_FINANCIAL_API_LOOKUP_OUTPUT
  FREE_API_LOOKUP: BUILTWITH_FREE_API_LOOKUP_OUTPUT
  GET_LIST_WITH_META: BUILTWITH_GET_LIST_WITH_META_OUTPUT
  LISTS_API_GET_LIST: BUILTWITH_LISTS_API_GET_LIST_OUTPUT
  MCP_API_LOOKUP: BUILTWITH_MCP_API_LOOKUP_OUTPUT
  PRODUCT_API_LOOKUP: BUILTWITH_PRODUCT_API_LOOKUP_OUTPUT
  RECOMMENDATIONS_API_LOOKUP: BUILTWITH_RECOMMENDATIONS_API_LOOKUP_OUTPUT
  REDIRECTS_API_LOOKUP: BUILTWITH_REDIRECTS_API_LOOKUP_OUTPUT
  SOCIAL_API_LOOKUP: BUILTWITH_SOCIAL_API_LOOKUP_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BUILTWITH toolkit.
 */
export const BUILTWITH = {
  slug: "builtwith",
  tools: {
    /**
     * Tool to create a txt or zip file from a list of domains. use when preparing a domain list for bulk or firehose lookups.
     */
    CREATE_DOMAIN_LIST_FILE: "BUILTWITH_CREATE_DOMAIN_LIST_FILE",
    /**
     * Tool to access mass internet technology usage information from 2000 to today. use when you need historical technology usage trends for a domain.
     */
    DATASETS_LOOKUP: "BUILTWITH_DATASETS_LOOKUP",
    /**
     * Tool to retrieve current and historical technology information of a website. use after confirming the domain to lookup.
     */
    DOMAIN_API_LOOKUP: "BUILTWITH_DOMAIN_API_LOOKUP",
    /**
     * Tool to fetch financial data for a domain. use when you need company financials for us or uk registered websites.
     */
    FINANCIAL_API_LOOKUP: "BUILTWITH_FINANCIAL_API_LOOKUP",
    /**
     * Tool to access last updated dates and counts for technology groups and categories for websites. use when you need a snapshot of technology usage timing for a domain.
     */
    FREE_API_LOOKUP: "BUILTWITH_FREE_API_LOOKUP",
    /**
     * Tool to retrieve a list of websites using a specified technology, including metadata. use when you need detailed company and site information for sites using a particular technology.
     */
    GET_LIST_WITH_META: "BUILTWITH_GET_LIST_WITH_META",
    /**
     * Tool to retrieve a list of websites using a specific technology. use when you want to find sites leveraging a particular tech.
     */
    LISTS_API_GET_LIST: "BUILTWITH_LISTS_API_GET_LIST",
    /**
     * Tool to query live web technologies for a root domain. use after confirming a valid domain name.
     */
    MCP_API_LOOKUP: "BUILTWITH_MCP_API_LOOKUP",
    /**
     * Tool to find websites selling specific ecommerce products. use when you need to discover online retailers offering a given product name or query a domain's product listings (e.g., 'dom:jbhifi.com.au').
     */
    PRODUCT_API_LOOKUP: "BUILTWITH_PRODUCT_API_LOOKUP",
    /**
     * Tool to generate a list of websites with similar technology profiles. use when you need technology recommendations for a given domain lookup.
     */
    RECOMMENDATIONS_API_LOOKUP: "BUILTWITH_RECOMMENDATIONS_API_LOOKUP",
    /**
     * Tool to retrieve live and historical redirects for a website. use after confirming the exact root domain to gather inbound and outbound redirect timelines.
     */
    REDIRECTS_API_LOOKUP: "BUILTWITH_REDIRECTS_API_LOOKUP",
    /**
     * Tool to retrieve domains associated with social media profile urls. use when you need to map social profiles to root domains.
     */
    SOCIAL_API_LOOKUP: "BUILTWITH_SOCIAL_API_LOOKUP",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BUILTWITH".
 */
export type BUILTWITH_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BUILTWITH".
 */
export type BUILTWITH_TRIGGER_EVENTS = {}
