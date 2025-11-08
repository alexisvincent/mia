// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BENZINGA's BENZINGA_GET_CALENDAR_EARNINGS_STREAM tool input.
 */
type BENZINGA_GET_CALENDAR_EARNINGS_STREAM_INPUT = {
  /**
   * Isins
   * @description Comma-separated list of ISIN codes to filter (e.g., 'US0378331005,US5949181045').
   * @default null
   */
  isins: string | null;
  /**
   * Tickers
   * @description Comma-separated list of ticker symbols to filter (e.g., 'AAPL,MSFT').
   * @default null
   */
  tickers: string | null;
};

/**
 * Type of BENZINGA's BENZINGA_GET_CALENDAR_EARNINGS_STREAM tool output.
 */
type BENZINGA_GET_CALENDAR_EARNINGS_STREAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Isins
       * @description Filters applied: comma-separated ISIN codes.
       * @default null
       */
      isins: string | null;
      /**
       * Tickers
       * @description Filters applied: comma-separated ticker symbols.
       * @default null
       */
      tickers: string | null;
      /**
       * Token
       * @description Authentication token for WebSocket connection.
       */
      token: string;
      /**
       * Url
       * @description WebSocket URL to connect for real-time earnings events.
       */
      url: string;
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
 * Type of BENZINGA's BENZINGA_GET_CONFERENCE_CALLS tool input.
 */
type BENZINGA_GET_CONFERENCE_CALLS_INPUT = {
  /**
   * Page
   * @description Page offset. For optimization, performance and technical reasons, page offsets are limited from 0 to 100000.
   * @default 0
   */
  page: number | null;
  /**
   * Pagesize
   * @description Number of results returned. Maximum 1000.
   * @default null
   */
  pagesize: number | null;
  /**
   * Parameters[Date]
   * @description Date to query for calendar data (YYYY-MM-DD). Shorthand for date_from and date_to if identical.
   * @default null
   */
  "parameters[date]": string | null;
  /**
   * Parameters[Date From]
   * @description Date to query from point in time (YYYY-MM-DD).
   * @default null
   */
  "parameters[date_from]": string | null;
  /**
   * Parameters[Date To]
   * @description Date to query to point in time (YYYY-MM-DD).
   * @default null
   */
  "parameters[date_to]": string | null;
  /**
   * Parameters[Tickers]
   * @description One or more ticker symbols separated by a comma. Maximum 50 tickers.
   * @default null
   */
  "parameters[tickers]": string | null;
  /**
   * Parameters[Updated]
   * @description Records last updated Unix timestamp (UTC). Forces sort order >= this timestamp.
   * @default null
   */
  "parameters[updated]": number | null;
};

/**
 * Type of BENZINGA's BENZINGA_GET_CONFERENCE_CALLS tool output.
 */
type BENZINGA_GET_CONFERENCE_CALLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conference
       * @description List of conference call entries
       */
      conference: {
          /**
           * Access Code
           * @description Access code for conference call if available
           * @default null
           */
          access_code: string | null;
          /**
           * Date
           * @description Announced date on calendar (YYYY-MM-DD)
           */
          date: string;
          /**
           * Exchange
           * @description Exchange (NYSE, NASDAQ, etc.)
           */
          exchange: string;
          /**
           * Id
           * @description Unique ID of this entry
           */
          id: string;
          /**
           * Importance
           * @description Subjective basis of how important event is to market (5 = High)
           * @default null
           */
          importance: number | null;
          /**
           * International Num
           * @description International number if outside USA (NNN-NNN-NNNN)
           * @default null
           */
          international_num: string | null;
          /**
           * Name
           * @description Name of the company
           */
          name: string;
          /**
           * Notes
           * @description Additional notes provided by the Benzinga Newsdesk; may include HTML
           * @default null
           */
          notes: string | null;
          /**
           * Phone Num
           * @description Phone number of conference call (NNN-NNN-NNNN)
           * @default null
           */
          phone_num: string | null;
          /**
           * Reservation Num
           * @description Reservation number for conference call if available
           * @default null
           */
          reservation_num: string | null;
          /**
           * Start Time
           * @description Time of conference call in local time (HH:MM:SS)
           * @default null
           */
          start_time: string | null;
          /**
           * Ticker
           * @description Ticker symbol of the company
           */
          ticker: string;
          /**
           * Time
           * @description Announced time on calendar (HH:MM:SS)
           */
          time: string;
          /**
           * Updated
           * @description Last updated timestamp (Unix UTC)
           * @default null
           */
          updated: number | null;
          /**
           * Webcast Url
           * @description Webcast URL for conference call if available
           * @default null
           */
          webcast_url: string | null;
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
 * Type of BENZINGA's BENZINGA_GET_CONSENSUS_RATINGS tool input.
 */
type BENZINGA_GET_CONSENSUS_RATINGS_INPUT = {
  /**
   * Aggregate Type
   * @description To aggregate the ratings by number or percentage.
   * @default number
   * @enum {string}
   */
  aggregate_type: "number" | "percentage";
  /**
   * Pagesize
   * @description Number of results returned. Limit 1000.
   * @default null
   */
  pagesize: number | null;
  /**
   * ConsensusParameters
   * @description Parameters for consensus ratings query: date range and ticker.
   * @default null
   */
  parameters: {
      /**
       * Parameters[Date From]
       * @description Date to query from point in time (YYYY-MM-DD)
       * @default null
       */
      "parameters[date_from]"?: string | null;
      /**
       * Parameters[Date To]
       * @description Date to query to point in time (YYYY-MM-DD)
       * @default null
       */
      "parameters[date_to]"?: string | null;
      /**
       * Parameters[Tickers]
       * @description One ticker symbol to query the aggregate for. Maximum 1 ticker.
       * @default null
       */
      "parameters[tickers]"?: string | null;
  } | null;
  /**
   * Simplify
   * @description To simplify the aggregate ratings to only BUY, SELL, HOLD. Default returns detailed ratings.
   * @default false
   */
  simplify: boolean;
};

/**
 * Type of BENZINGA's BENZINGA_GET_CONSENSUS_RATINGS tool output.
 */
type BENZINGA_GET_CONSENSUS_RATINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Aggregate Ratings
       * @description Aggregated ratings counts or percentages for buy, hold, sell.
       */
      aggregate_ratings: {
          /**
           * Buy
           * @description Number or percentage of buy ratings.
           */
          buy: number;
          /**
           * Hold
           * @description Number or percentage of hold ratings.
           */
          hold: number;
          /**
           * Sell
           * @description Number or percentage of sell ratings.
           */
          sell: number;
      };
      /**
       * Aggregate Type
       * @description Type of aggregation: number or percentage.
       * @enum {string}
       */
      aggregate_type: "number" | "percentage";
      /**
       * Consensus Price Target
       * @description Average price target across all analysts.
       */
      consensus_price_target: number;
      /**
       * Consensus Rating
       * @description Overall rating category (e.g., STRONG_SELL, SELL, HOLD, BUY, STRONG_BUY or simplified).
       */
      consensus_rating: string;
      /**
       * Consensus Rating Val
       * @description Numerical average of all consensus weights.
       */
      consensus_rating_val: number;
      /**
       * High Price Target
       * @description Highest price target among analysts.
       */
      high_price_target: number;
      /**
       * Low Price Target
       * @description Lowest price target among analysts.
       */
      low_price_target: number;
      /**
       * Total Analyst Count
       * @description Total number of analysts contributing.
       */
      total_analyst_count: number;
      /**
       * Unique Analyst Count
       * @description Number of unique analysts contributing.
       */
      unique_analyst_count: number;
      /**
       * Updated At
       * @description Timestamp of the last update (ISO 8601 format).
       */
      updated_at: string;
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
 * Type of BENZINGA's BENZINGA_GET_EARNINGS_V21 tool input.
 */
type BENZINGA_GET_EARNINGS_V21_INPUT = {
  /**
   * Date
   * @description Specific date (YYYY-MM-DD) for calendar data. Shorthand for date_from and date_to when identical
   * @default null
   */
  date: string | null;
  /**
   * Date From
   * @description Start date (YYYY-MM-DD) to query from point in time
   * @default null
   */
  date_from: string | null;
  /**
   * Date Sort
   * @description Sort by date ascending or descending
   * @default null
   * @enum {string|null}
   */
  date_sort: "date:asc" | "date:desc" | null;
  /**
   * Date To
   * @description End date (YYYY-MM-DD) to query to point in time
   * @default null
   */
  date_to: string | null;
  /**
   * Importance
   * @description Importance level filter (0-5 inclusive)
   * @default null
   */
  importance: number | null;
  /**
   * Page
   * @description Page offset (>=0)
   * @default 0
   */
  page: number;
  /**
   * Pagesize
   * @description Number of results to return, max 1000
   * @default null
   */
  pagesize: number | null;
  /**
   * Tickers
   * @description List of ticker symbols (max 50). Will be joined by commas
   * @default null
   */
  tickers: string[] | null;
  /**
   * Updated
   * @description Unix timestamp (UTC) to filter records updated since this timestamp
   * @default null
   */
  updated: number | null;
};

/**
 * Type of BENZINGA's BENZINGA_GET_EARNINGS_V21 tool output.
 */
type BENZINGA_GET_EARNINGS_V21_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Earnings
       * @description List of earnings calendar items
       */
      earnings: {
          /**
           * Currency
           * @description Currency code
           */
          currency: string;
          /**
           * Date
           * @description Earnings date (YYYY-MM-DD)
           */
          date: string;
          /**
           * Date Confirmed
           * @description Indicates if the date is confirmed: '1' for confirmed, '0' for unconfirmed
           * @enum {string}
           */
          date_confirmed: "0" | "1";
          /**
           * Eps
           * @description Earnings per share for the current quarter
           */
          eps: string;
          /**
           * Eps Est
           * @description Analyst estimate for the upcoming announcement
           */
          eps_est: string;
          /**
           * Eps Prior
           * @description EPS reported for the same quarter a year prior
           */
          eps_prior: string;
          /**
           * Eps Surprise
           * @description Difference between the estimate and actual EPS
           */
          eps_surprise: string;
          /**
           * Eps Surprise Percent
           * @description Percentage difference between estimate and actual EPS
           */
          eps_surprise_percent: string;
          /**
           * Eps Type
           * @description Type of EPS reported
           */
          eps_type: string;
          /**
           * Exchange
           * @description Exchange where the security is traded
           */
          exchange: string;
          /**
           * Id
           * @description Unique identifier
           */
          id: string;
          /**
           * Importance
           * @description Importance of the action (0-5 scale)
           */
          importance: number;
          /**
           * Name
           * @description Company name
           */
          name: string;
          /**
           * Notes
           * @description Additional notes
           * @default null
           */
          notes: string | null;
          /**
           * Period
           * @description Fiscal period being reported
           */
          period: string;
          /**
           * Period Year
           * @description Fiscal year being reported
           */
          period_year: number;
          /**
           * Revenue
           * @description Revenue for the current quarter
           */
          revenue: string;
          /**
           * Revenue Est
           * @description Analyst estimate for upcoming revenue announcement
           */
          revenue_est: string;
          /**
           * Revenue Prior
           * @description Revenue reported for the same quarter a year prior
           */
          revenue_prior: string;
          /**
           * Revenue Surprise
           * @description Difference between the estimate and actual revenue
           */
          revenue_surprise: string;
          /**
           * Revenue Surprise Percent
           * @description Percentage difference between estimate and actual revenue
           */
          revenue_surprise_percent: string;
          /**
           * Revenue Type
           * @description Type of revenue reported
           */
          revenue_type: string;
          /**
           * Ticker
           * @description Ticker symbol
           */
          ticker: string;
          /**
           * Time
           * @description Time of the earnings report (HH:MM:SS)
           */
          time: string;
          /**
           * Updated
           * @description Last updated timestamp (Unix)
           */
          updated: number;
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
 * Type of BENZINGA's BENZINGA_GET_ECONOMICS tool input.
 */
type BENZINGA_GET_ECONOMICS_INPUT = {
  /**
   * Country
   * @description 3-digit country code to filter events.
   * @default null
   */
  country: string | null;
  /**
   * Event Category
   * @description Comma-separated list of event categories.
   * @default null
   */
  event_category: string | null;
  /**
   * Page
   * @description Zero-based page offset (0-100000) for pagination.
   * @default 0
   */
  page: number;
  /**
   * Pagesize
   * @description Number of results per page (1-1000).
   * @default null
   */
  pagesize: number | null;
  /**
   * EconomicsParameters
   * @description Grouping parameters for GET /calendar/economics endpoint.
   * @default null
   */
  parameters: {
      /**
       * Parameters[Date]
       * @description Shorthand date filter (YYYY-MM-DD). Equivalent to date_from and date_to.
       * @default null
       */
      "parameters[date]"?: string | null;
      /**
       * Parameters[Date From]
       * @description Date to query from point in time (YYYY-MM-DD).
       * @default null
       */
      "parameters[date_from]"?: string | null;
      /**
       * Parameters[Date To]
       * @description Date to query to point in time (YYYY-MM-DD).
       * @default null
       */
      "parameters[date_to]"?: string | null;
      /**
       * Parameters[Importance]
       * @description Filter events with importance >= this value (0-5).
       * @default null
       */
      "parameters[importance]"?: number | null;
      /**
       * Parameters[Updated]
       * @description Filter events updated since this Unix UTC timestamp (UTC seconds).
       * @default null
       */
      "parameters[updated]"?: number | null;
  } | null;
};

/**
 * Type of BENZINGA's BENZINGA_GET_ECONOMICS tool output.
 */
type BENZINGA_GET_ECONOMICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Economics
       * @description List of economic calendar events.
       */
      economics: {
          /**
           * Actual
           * @description Actual value (float as string).
           */
          actual: string;
          /**
           * Actual T
           * @description Trend indicator for actual value.
           */
          actual_t: string;
          /**
           * Consensus
           * @description Consensus forecast value (float as string).
           */
          consensus: string;
          /**
           * Consensus T
           * @description Trend indicator for consensus value.
           */
          consensus_t: string;
          /**
           * Country
           * @description 3-digit country code.
           */
          country: string;
          /**
           * Date
           * @description Event date (YYYY-MM-DD).
           */
          date: string;
          /**
           * Description
           * @description Description or notes for the event.
           */
          description: string;
          /**
           * Event Name
           * @description Name of the economic event.
           */
          event_name: string;
          /**
           * Event Period
           * @description Period of the event.
           */
          event_period: string;
          /**
           * Id
           * @description Unique event ID.
           */
          id: string;
          /**
           * Importance
           * @description Importance level (integer).
           */
          importance: number;
          /**
           * Period Year
           * @description Year of the event period (YYYY).
           */
          period_year: number;
          /**
           * Prior
           * @description Prior value (float as string).
           */
          prior: string;
          /**
           * Prior T
           * @description Trend indicator for prior value.
           */
          prior_t: string;
          /**
           * Time
           * @description Event time (HH:MM:SS).
           */
          time: string;
          /**
           * Updated
           * @description Last update timestamp (Unix epoch seconds).
           */
          updated: number;
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
 * Type of BENZINGA's BENZINGA_GET_NEWSFEED_STREAM tool input.
 */
type BENZINGA_GET_NEWSFEED_STREAM_INPUT = object;

/**
 * Type of BENZINGA's BENZINGA_GET_NEWSFEED_STREAM tool output.
 */
type BENZINGA_GET_NEWSFEED_STREAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Token
       * @description Authentication token for WebSocket connection.
       */
      token: string;
      /**
       * Url
       * @description WebSocket URL to connect for real-time news events.
       */
      url: string;
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
 * Type of BENZINGA's BENZINGA_GET_RATINGS tool input.
 */
type BENZINGA_GET_RATINGS_INPUT = {
  /**
   * Date
   * @description Single calendar date to fetch (YYYY-MM-DD).
   * @default null
   */
  date: string | null;
  /**
   * Date From
   * @description Start date for range query (YYYY-MM-DD).
   * @default null
   */
  date_from: string | null;
  /**
   * Date To
   * @description End date for range query (YYYY-MM-DD).
   * @default null
   */
  date_to: string | null;
  /**
   * Importance
   * @description Importance level to filter by (0-5).
   * @default null
   */
  importance: number | null;
  /**
   * Page
   * @description Page offset for pagination. Default is 0.
   * @default 0
   */
  page: number;
  /**
   * Pagesize
   * @description Number of results per page (1-1000).
   * @default null
   */
  pagesize: number | null;
  /**
   * Tickers
   * @description Comma-separated list of ticker symbols (max 50).
   * @default null
   */
  tickers: string | null;
  /**
   * Updated
   * @description Unix timestamp (UTC) to return records last updated at or after.
   * @default null
   */
  updated: number | null;
};

/**
 * Type of BENZINGA's BENZINGA_GET_RATINGS tool output.
 */
type BENZINGA_GET_RATINGS_OUTPUT = {
  /**
   * Data
   * @description List of rating events.
   */
  data?: {
      /**
       * Action Company
       * @description Company rating action (e.g., upgrades, downgrades).
       */
      action_company: string;
      /**
       * Action Pt
       * @description Price target action (e.g., raises, lowers).
       */
      action_pt: string;
      /**
       * Analyst
       * @description Analyst identifier.
       * @default null
       */
      analyst: string | null;
      /**
       * Analyst Name
       * @description Name of the analyst.
       * @default null
       */
      analyst_name: string | null;
      /**
       * Date
       * @description Date of the rating (YYYY-MM-DD).
       */
      date: string;
      /**
       * Exchange
       * @description Exchange where the company is listed.
       */
      exchange: string;
      /**
       * Id
       * @description Unique identifier for the rating event.
       */
      id: string;
      /**
       * Importance
       * @description Importance level of the rating (0-5).
       */
      importance: number;
      /**
       * Name
       * @description Name of the rated company.
       */
      name: string;
      /**
       * Pt Current
       * @description Current price target.
       */
      pt_current: string;
      /**
       * Pt Prior
       * @description Prior price target.
       * @default null
       */
      pt_prior: string | null;
      /**
       * Rating Current
       * @description Current analyst rating.
       */
      rating_current: string;
      /**
       * Rating Prior
       * @description Prior rating assigned.
       * @default null
       */
      rating_prior: string | null;
      /**
       * Ticker
       * @description Ticker symbol of the rated company.
       */
      ticker: string;
      /**
       * Time
       * @description Time of the rating (HH:MM:SS).
       */
      time: string;
      /**
       * Updated
       * @description Unix timestamp of the last update.
       */
      updated: number;
      /**
       * Url
       * @description URL to the full rating report.
       * @default null
       */
      url: string | null;
      /**
       * Url Calendar
       * @description URL to the related calendar event.
       * @default null
       */
      url_calendar: string | null;
      /**
       * Url News
       * @description URL to related news articles.
       * @default null
       */
      url_news: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Page
   * @description Returned page offset.
   */
  page?: number;
  /**
   * Pagesize
   * @description Returned page size.
   */
  pagesize?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of matching records, if provided.
   * @default null
   */
  total: number | null;
};

/**
 * Type of BENZINGA's BENZINGA_GET_REMOVED tool input.
 */
type BENZINGA_GET_REMOVED_INPUT = {
  /**
   * Page
   * @description Zero-based page offset. For optimization, performance and technical reasons, page offsets are limited from 0 to 100000.
   * @default 0
   */
  page: number;
  /**
   * Page Size
   * @description Number of results per page (1-1000). Default is 50.
   * @default 50
   */
  pageSize: number | null;
  /**
   * Type
   * @description Calendar event type to filter by. Options: ratings, earnings, guidance, ipos, offerings, economics, ma, splits, dividends, conference calls.
   * @default null
   * @enum {string|null}
   */
  type: "ratings" | "earnings" | "guidance" | "ipos" | "offerings" | "economics" | "ma" | "splits" | "dividends" | "conference calls" | null;
  /**
   * Updated
   * @description Return only records removed on or after this Unix UTC timestamp (forces sort to ≥ timestamp).
   * @default null
   */
  updated: number | null;
};

/**
 * Type of BENZINGA's BENZINGA_GET_REMOVED tool output.
 */
type BENZINGA_GET_REMOVED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Removed
       * @description List of removed calendar events.
       */
      removed: {
          /**
           * Id
           * @description ID of removed calendar content.
           */
          id: string;
          /**
           * Type
           * @description Calendar type of removed content.
           * @enum {string}
           */
          type: "ratings" | "earnings" | "guidance" | "ipos" | "offerings" | "economics" | "ma" | "splits" | "dividends" | "conference calls";
          /**
           * Updated
           * @description UTC Unix epoch timestamp (seconds) when removed.
           */
          updated: number;
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
 * Type of BENZINGA's BENZINGA_GET_REMOVED_NEWS tool input.
 */
type BENZINGA_GET_REMOVED_NEWS_INPUT = {
  /**
   * Page
   * @description Zero-based page offset (0-100000).
   * @default 0
   */
  page: number;
  /**
   * Page Size
   * @description Number of results to return per page (max 100).
   * @default 15
   */
  pageSize: number;
  /**
   * Updated
   * @description Unix UTC timestamp (seconds) to filter by last updated removal.
   * @default null
   */
  updated: number | null;
};

/**
 * Type of BENZINGA's BENZINGA_GET_REMOVED_NEWS tool output.
 */
type BENZINGA_GET_REMOVED_NEWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Removed
       * @description List of removed news article identifiers.
       */
      removed: {
          /**
           * Id
           * @description Unique identifier of the removed article.
           */
          id: number;
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
 * Type map of all available tool input types for toolkit "BENZINGA".
 */
export type BENZINGA_TOOL_INPUTS = {
  GET_CALENDAR_EARNINGS_STREAM: BENZINGA_GET_CALENDAR_EARNINGS_STREAM_INPUT
  GET_CONFERENCE_CALLS: BENZINGA_GET_CONFERENCE_CALLS_INPUT
  GET_CONSENSUS_RATINGS: BENZINGA_GET_CONSENSUS_RATINGS_INPUT
  GET_EARNINGS_V21: BENZINGA_GET_EARNINGS_V21_INPUT
  GET_ECONOMICS: BENZINGA_GET_ECONOMICS_INPUT
  GET_NEWSFEED_STREAM: BENZINGA_GET_NEWSFEED_STREAM_INPUT
  GET_RATINGS: BENZINGA_GET_RATINGS_INPUT
  GET_REMOVED: BENZINGA_GET_REMOVED_INPUT
  GET_REMOVED_NEWS: BENZINGA_GET_REMOVED_NEWS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BENZINGA".
 */
export type BENZINGA_TOOL_OUTPUTS = {
  GET_CALENDAR_EARNINGS_STREAM: BENZINGA_GET_CALENDAR_EARNINGS_STREAM_OUTPUT
  GET_CONFERENCE_CALLS: BENZINGA_GET_CONFERENCE_CALLS_OUTPUT
  GET_CONSENSUS_RATINGS: BENZINGA_GET_CONSENSUS_RATINGS_OUTPUT
  GET_EARNINGS_V21: BENZINGA_GET_EARNINGS_V21_OUTPUT
  GET_ECONOMICS: BENZINGA_GET_ECONOMICS_OUTPUT
  GET_NEWSFEED_STREAM: BENZINGA_GET_NEWSFEED_STREAM_OUTPUT
  GET_RATINGS: BENZINGA_GET_RATINGS_OUTPUT
  GET_REMOVED: BENZINGA_GET_REMOVED_OUTPUT
  GET_REMOVED_NEWS: BENZINGA_GET_REMOVED_NEWS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BENZINGA toolkit.
 */
export const BENZINGA = {
  slug: "benzinga",
  tools: {
    /**
     * Tool to subscribe to real-time earnings calendar events via websocket. use when you need immediate updates as reports are announced.
     */
    GET_CALENDAR_EARNINGS_STREAM: "BENZINGA_GET_CALENDAR_EARNINGS_STREAM",
    /**
     * Tool to retrieve upcoming and historical conference call details such as times, tickers, and webcast urls. use when filtering conference calls by date range or ticker symbols.
     */
    GET_CONFERENCE_CALLS: "BENZINGA_GET_CONFERENCE_CALLS",
    /**
     * Tool to get consensus analyst ratings and price targets for a specified ticker over a date range. use when you need to gauge analyst sentiment and target price consensus for investment decisions.
     */
    GET_CONSENSUS_RATINGS: "BENZINGA_GET_CONSENSUS_RATINGS",
    /**
     * Tool to retrieve earnings calendar data (v2.1). use when you need dates, estimates, and actuals for upcoming earnings events.
     */
    GET_EARNINGS_V21: "BENZINGA_GET_EARNINGS_V21",
    /**
     * Tool to retrieve economic calendar events including actual, consensus, and prior values and importance. use when filtering by date, country, importance, or updated timestamp.
     */
    GET_ECONOMICS: "BENZINGA_GET_ECONOMICS",
    /**
     * Tool to stream real-time news events via websocket. use when you need immediate updates to news as they are created, updated, or removed.
     */
    GET_NEWSFEED_STREAM: "BENZINGA_GET_NEWSFEED_STREAM",
    /**
     * Tool to fetch analyst ratings calendar data including rating actions, price targets, and analyst details. use when querying upcoming or historical analyst ratings.
     */
    GET_RATINGS: "BENZINGA_GET_RATINGS",
    /**
     * Tool to retrieve removed or cancelled calendar events. use when you need to identify calendar items removed for specific event types or filtered by removal timestamp.
     */
    GET_REMOVED: "BENZINGA_GET_REMOVED",
    /**
     * Tool to retrieve news articles that have been deleted from the database. use when you need to fetch removed articles with pagination and timestamp filters.
     */
    GET_REMOVED_NEWS: "BENZINGA_GET_REMOVED_NEWS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BENZINGA".
 */
export type BENZINGA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BENZINGA".
 */
export type BENZINGA_TRIGGER_EVENTS = {}
