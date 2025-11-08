// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of NASDAQ's NASDAQ_GET_ALL_SYMBOLS tool input.
 */
type NASDAQ_GET_ALL_SYMBOLS_INPUT = {
  /**
   * Datatable Code
   * @description The code identifying the datatable (e.g., VENDOR/TABLE).
   */
  datatable_code?: string;
};

/**
 * Type of NASDAQ's NASDAQ_GET_ALL_SYMBOLS tool output.
 */
type NASDAQ_GET_ALL_SYMBOLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Metadata
       * @description Metadata of the datatable, including column definitions and potentially example data containing symbols.
       */
      metadata: {
          /** Datatable */
          datatable: {
              /**
               * Columns
               * @description List of column metadata for the datatable.
               */
              columns: {
                  /**
                   * Name
                   * @description Name of the column.
                   */
                  name: string;
                  /**
                   * Type
                   * @description Data type of the column.
                   */
                  type: string;
              }[];
              /**
               * Datatable Code
               * @description Code of the datatable.
               */
              datatable_code: string;
              /**
               * Description
               * @description Description of the datatable, can be null.
               * @default null
               */
              description: string | null;
              /**
               * Name
               * @description Name of the datatable.
               */
              name: string;
              /**
               * Vendor Code
               * @description Vendor code for the datatable.
               */
              vendor_code: string;
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
 * Type of NASDAQ's NASDAQ_GET_ANALYST_RATINGS tool input.
 */
type NASDAQ_GET_ANALYST_RATINGS_INPUT = {
  /**
   * Symbol
   * @description The stock symbol (ticker) for which to retrieve analyst ratings and target prices. Example: AAPL for Apple Inc.
   */
  symbol?: string;
};

/**
 * Type of NASDAQ's NASDAQ_GET_ANALYST_RATINGS tool output.
 */
type NASDAQ_GET_ANALYST_RATINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Analyst Ratings
       * @description A list of analyst ratings for the specified symbol.
       */
      analyst_ratings?: {
          /**
           * Action Date
           * Format: date
           * @description Date of the rating action.
           * @default null
           */
          action_date: string | null;
          /**
           * Analyst Name
           * @description Name of the analyst or firm.
           * @default null
           */
          analyst_name: string | null;
          /**
           * Comp Name
           * @description Company name.
           * @default null
           */
          comp_name: string | null;
          /**
           * Comp Name 2
           * @description Company name (secondary).
           * @default null
           */
          comp_name_2: string | null;
          /**
           * Currency
           * @description Currency of the rating.
           * @default null
           */
          currency: string | null;
          /**
           * Event Type
           * @description Type of event (e.g., Upgrade, Downgrade, Reiterated).
           * @default null
           */
          event_type: string | null;
          /**
           * Exchange
           * @description Exchange where the stock is traded.
           * @default null
           */
          exchange: string | null;
          /**
           * Last Rev Date
           * Format: date
           * @description Last revision date of the rating.
           * @default null
           */
          last_rev_date: string | null;
          /**
           * M Ticker
           * @description The ticker symbol for the company.
           * @default null
           */
          m_ticker: string | null;
          /**
           * Obs Date
           * Format: date
           * @description Observation date of the rating.
           * @default null
           */
          obs_date: string | null;
          /**
           * Per End Date
           * Format: date
           * @description Period end date for the rating.
           * @default null
           */
          per_end_date: string | null;
          /**
           * Rating Type
           * @description Type of rating (e.g., Strong Buy, Buy, Hold).
           * @default null
           */
          rating_type: string | null;
          /**
           * Rating Type Details
           * @description Detailed rating type.
           * @default null
           */
          rating_type_details: string | null;
          /**
           * Ticker
           * @description The ticker symbol for the company (same as m_ticker).
           * @default null
           */
          ticker: string | null;
      }[];
      /**
       * Message
       * @description An optional message, e.g., if data is not found for a symbol.
       * @default null
       */
      message: string | null;
      /**
       * Target Prices
       * @description A list of target prices for the specified symbol.
       */
      target_prices?: {
          /**
           * Action Date
           * Format: date
           * @description Date of the target price action.
           * @default null
           */
          action_date: string | null;
          /**
           * Analyst Name
           * @description Name of the analyst or firm.
           * @default null
           */
          analyst_name: string | null;
          /**
           * Comp Name
           * @description Company name.
           * @default null
           */
          comp_name: string | null;
          /**
           * Comp Name 2
           * @description Company name (secondary).
           * @default null
           */
          comp_name_2: string | null;
          /**
           * Currency
           * @description Currency of the target price.
           * @default null
           */
          currency: string | null;
          /**
           * Exchange
           * @description Exchange where the stock is traded.
           * @default null
           */
          exchange: string | null;
          /**
           * M Ticker
           * @description The ticker symbol for the company.
           * @default null
           */
          m_ticker: string | null;
          /**
           * Obs Date
           * Format: date
           * @description Observation date of the target price.
           * @default null
           */
          obs_date: string | null;
          /**
           * Per End Date
           * Format: date
           * @description Period end date for the target price.
           * @default null
           */
          per_end_date: string | null;
          /**
           * Price Target
           * @description The target price value.
           * @default null
           */
          price_target: number | null;
          /**
           * Price Target Type
           * @description Type of price target (e.g., Mean, High, Low).
           * @default null
           */
          price_target_type: string | null;
          /**
           * Ticker
           * @description The ticker symbol for the company (same as m_ticker).
           * @default null
           */
          ticker: string | null;
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
 * Type of NASDAQ's NASDAQ_GET_DIVIDEND_HISTORY tool input.
 */
type NASDAQ_GET_DIVIDEND_HISTORY_INPUT = {
  /**
   * Date
   * @description Filters the data for a specific date (YYYY-MM-DD).
   * @default null
   */
  date: string | null;
  /**
   * Qopts.Columns
   * @description Comma-separated list of columns to return.
   * @default null
   */
  "qopts.columns": string | null;
  /**
   * Ticker
   * @description The stock ticker symbol.
   */
  ticker?: string;
};

/**
 * Type of NASDAQ's NASDAQ_GET_DIVIDEND_HISTORY tool output.
 */
type NASDAQ_GET_DIVIDEND_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Datatable
       * @description Contains the dividend data table.
       */
      datatable: {
          [key: string]: unknown;
      };
      /**
       * Meta
       * @description Metadata about the request.
       */
      meta: {
          /**
           * Next Cursor Id
           * @description The cursor ID to use for fetching the next page of results. If null, it's the last page.
           * @default null
           */
          next_cursor_id: string | null;
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
 * Type of NASDAQ's NASDAQ_GET_REAL_TIME_QUOTE tool input.
 */
type NASDAQ_GET_REAL_TIME_QUOTE_INPUT = {
  /**
   * Ticker
   * @description The security symbol to fetch real-time quote for (e.g., AAPL, MSFT).
   */
  ticker?: string;
};

/**
 * Type of NASDAQ's NASDAQ_GET_REAL_TIME_QUOTE tool output.
 */
type NASDAQ_GET_REAL_TIME_QUOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Quotes
       * @description A list of quote data for the requested symbol(s). The API might return an array even for a single ticker.
       * @default null
       */
      quotes: {
          /**
           * Ask
           * @description Current ask price.
           * @default null
           */
          ask: number | null;
          /**
           * Bid
           * @description Current bid price.
           * @default null
           */
          bid: number | null;
          /**
           * Last
           * @description Last traded price.
           * @default null
           */
          last: number | null;
          /**
           * Ticker
           * @description The security symbol.
           * @default null
           */
          ticker: string | null;
          /**
           * Timestamp
           * @description ISO8601 timestamp of the quote.
           * @default null
           */
          timestamp: string | null;
          /**
           * Volume
           * @description Trading volume.
           * @default null
           */
          volume: number | null;
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
 * Type of NASDAQ's NASDAQ_GET_TABLES_BY_DATE tool input.
 */
type NASDAQ_GET_TABLES_BY_DATE_INPUT = {
  /**
   * Target Date
   * @description The target date to filter tables by, in YYYY-MM-DD format.
   */
  target_date?: string;
};

/**
 * Type of NASDAQ's NASDAQ_GET_TABLES_BY_DATE tool output.
 */
type NASDAQ_GET_TABLES_BY_DATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the outcome, e.g., if no tables were found.
       * @default null
       */
      message: string | null;
      /**
       * Tables
       * @description A list of tables updated on the specified date.
       */
      tables?: {
          /**
           * Datatable Code
           * @description The code for the datatable.
           */
          datatable_code: string;
          /**
           * Description
           * @description A description of the datatable.
           */
          description: string;
          /**
           * Id
           * @description The unique ID of the datatable.
           */
          id: number;
          /**
           * Name
           * @description The name of the datatable.
           */
          name: string;
          /**
           * Premium
           * @description Indicates if the datatable is a premium offering.
           */
          premium: boolean;
          /**
           * Updated At
           * @description The timestamp of when the datatable was last updated.
           */
          updated_at: string;
          /**
           * Vendor Code
           * @description The vendor code for the datatable.
           */
          vendor_code: string;
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
 * Type of NASDAQ's NASDAQ_GET_TABLE_ROW tool input.
 */
type NASDAQ_GET_TABLE_ROW_INPUT = {
  /**
   * Columns
   * @description Comma-separated list of column names to retrieve. If not provided, all columns are returned.
   * @default null
   */
  columns: string | null;
  /**
   * Datacode
   * @description The code for the database or data source.
   */
  datacode?: string;
  /**
   * Datatable Code
   * @description The code for the specific table within the database.
   */
  datatable_code?: string;
  /**
   * Filter Column Name
   * @description The name of the column to filter by to get a specific row (e.g., a primary key column).
   */
  filter_column_name?: string;
  /**
   * Filter Column Value
   * @description The value of the filter_column_name to match for the specific row.
   */
  filter_column_value?: string;
};

/**
 * Type of NASDAQ's NASDAQ_GET_TABLE_ROW tool output.
 */
type NASDAQ_GET_TABLE_ROW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Datatable
       * @description The datatable object containing the requested row and column information.
       */
      datatable: {
          /**
           * Columns
           * @description Definitions of the columns in the table.
           */
          columns: {
              /**
               * Name
               * @description Name of the column.
               */
              name: string;
              /**
               * Type
               * @description Data type of the column.
               */
              type: string;
          }[];
          /**
           * Data
           * @description The row data. Each inner list represents a row.
           */
          data: unknown[][];
      };
      /**
       * Message
       * @description A message indicating the outcome, e.g., if no row is found.
       * @default null
       */
      message: string | null;
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
 * Type map of all available tool input types for toolkit "NASDAQ".
 */
export type NASDAQ_TOOL_INPUTS = {
  GET_ALL_SYMBOLS: NASDAQ_GET_ALL_SYMBOLS_INPUT
  GET_ANALYST_RATINGS: NASDAQ_GET_ANALYST_RATINGS_INPUT
  GET_DIVIDEND_HISTORY: NASDAQ_GET_DIVIDEND_HISTORY_INPUT
  GET_REAL_TIME_QUOTE: NASDAQ_GET_REAL_TIME_QUOTE_INPUT
  GET_TABLES_BY_DATE: NASDAQ_GET_TABLES_BY_DATE_INPUT
  GET_TABLE_ROW: NASDAQ_GET_TABLE_ROW_INPUT
}

/**
 * Type map of all available tool input types for toolkit "NASDAQ".
 */
export type NASDAQ_TOOL_OUTPUTS = {
  GET_ALL_SYMBOLS: NASDAQ_GET_ALL_SYMBOLS_OUTPUT
  GET_ANALYST_RATINGS: NASDAQ_GET_ANALYST_RATINGS_OUTPUT
  GET_DIVIDEND_HISTORY: NASDAQ_GET_DIVIDEND_HISTORY_OUTPUT
  GET_REAL_TIME_QUOTE: NASDAQ_GET_REAL_TIME_QUOTE_OUTPUT
  GET_TABLES_BY_DATE: NASDAQ_GET_TABLES_BY_DATE_OUTPUT
  GET_TABLE_ROW: NASDAQ_GET_TABLE_ROW_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's NASDAQ toolkit.
 */
export const NASDAQ = {
  slug: "nasdaq",
  tools: {
    /**
     * Retrieves metadata for a specified datatable, which includes column definitions and potentially example data containing symbols.
     */
    GET_ALL_SYMBOLS: "NASDAQ_GET_ALL_SYMBOLS",
    /**
     * Retrieves analyst ratings and target prices for a specific symbol using zacks datatables (zacks/ar for ratings, zacks/tp for target prices).
     */
    GET_ANALYST_RATINGS: "NASDAQ_GET_ANALYST_RATINGS",
    /**
     * Retrieves dividend history for a specific symbol.
     */
    GET_DIVIDEND_HISTORY: "NASDAQ_GET_DIVIDEND_HISTORY",
    /**
     * Retrieves real-time quote data for a specific symbol.
     */
    GET_REAL_TIME_QUOTE: "NASDAQ_GET_REAL_TIME_QUOTE",
    /**
     * Retrieves all tables updated on a specific date by fetching all tables and filtering them.
     */
    GET_TABLES_BY_DATE: "NASDAQ_GET_TABLES_BY_DATE",
    /**
     * Retrieves a specific row from a table by filtering on a specified column and value.
     */
    GET_TABLE_ROW: "NASDAQ_GET_TABLE_ROW",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "NASDAQ".
 */
export type NASDAQ_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "NASDAQ".
 */
export type NASDAQ_TRIGGER_EVENTS = {}
