// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of THE_ODDS_API's THE_ODDS_API_GET_EVENTS tool input.
 */
type THE_ODDS_API_GET_EVENTS_INPUT = {
  /**
   * Bookmakers
   * @description Filter by bookmaker keys. Comma delimited.
   * @default null
   */
  bookmakers: string[] | null;
  /**
   * Date Format
   * @description Date format to return: 'iso' or 'unix'.
   * @default iso
   * @enum {string}
   */
  dateFormat: "iso" | "unix";
  /**
   * Markets
   * @description Filter by market types. Comma delimited (h2h, spreads, totals).
   * @default null
   */
  markets: string[] | null;
  /**
   * Odds Format
   * @description Odds format to return: 'decimal' or 'american'.
   * @default decimal
   * @enum {string}
   */
  oddsFormat: "decimal" | "american";
  /**
   * Regions
   * @description Filter markets by region. Comma delimited (us, uk, eu, au).
   * @default null
   */
  regions: string[] | null;
  /**
   * Sport
   * @description Sport key (e.g., 'upcoming', 'soccer_epl')
   */
  sport?: string;
};

/**
 * Type of THE_ODDS_API's THE_ODDS_API_GET_EVENTS tool output.
 */
type THE_ODDS_API_GET_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description List of events for the specified sport
       */
      events: {
          /**
           * Away Team
           * @description Name of the away team
           */
          away_team: string;
          /**
           * Bookmakers
           * @description List of bookmaker odds info
           */
          bookmakers: {
              /**
               * Key
               * @description Bookmaker key
               */
              key: string;
              /**
               * Last Update
               * @description Time of the last odds update
               */
              last_update: string;
              /**
               * Markets
               * @description Markets offered by this bookmaker
               */
              markets: {
                  /**
                   * Key
                   * @description Market key, e.g., 'h2h', 'spreads', 'totals'
                   */
                  key: string;
                  /**
                   * Outcomes
                   * @description List of possible outcomes in this market
                   */
                  outcomes: {
                      /**
                       * Name
                       * @description Name of the outcome, e.g., team name
                       */
                      name: string;
                      /**
                       * Point
                       * @description Point spread or total for this outcome
                       * @default null
                       */
                      point: number | null;
                      /**
                       * Price
                       * @description Odds price
                       */
                      price: number;
                  }[];
              }[];
              /**
               * Title
               * @description Bookmaker title
               */
              title: string;
          }[];
          /**
           * Commence Time
           * @description Event start time, in ISO8601 or Unix format
           */
          commence_time: string;
          /**
           * Home Team
           * @description Name of the home team
           */
          home_team: string;
          /**
           * Id
           * @description Event identifier
           */
          id: string;
          /**
           * Sport Key
           * @description Sport key
           */
          sport_key: string;
          /**
           * Sport Title
           * @description Sport title
           */
          sport_title: string;
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
 * Type of THE_ODDS_API's THE_ODDS_API_GET_EVENT_ODDS tool input.
 */
type THE_ODDS_API_GET_EVENT_ODDS_INPUT = {
  /**
   * Bookmakers
   * @description Bookmakers to include (comma-separated names)
   * @default null
   */
  bookmakers: string | null;
  /**
   * Date Format
   * @description Date format for timestamps
   * @default null
   * @enum {string|null}
   */
  dateFormat: "iso" | "unix" | null;
  /**
   * Event Id
   * @description Event ID to look up odds for
   */
  eventId?: string;
  /**
   * Markets
   * @description Markets to include (comma-separated, e.g., 'h2h,spreads,totals')
   * @default null
   */
  markets: string | null;
  /**
   * Odds Format
   * @description Format of odds
   * @default null
   * @enum {string|null}
   */
  oddsFormat: "decimal" | "american" | null;
  /**
   * Regions
   * @description Regions to filter bookies by (comma-separated, e.g., 'us,uk,eu,au')
   * @default null
   */
  regions: string | null;
  /**
   * Sport
   * @description Sport key (e.g., 'soccer_epl')
   */
  sport?: string;
};

/**
 * Type of THE_ODDS_API's THE_ODDS_API_GET_EVENT_ODDS tool output.
 */
type THE_ODDS_API_GET_EVENT_ODDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Away Team
       * @description Away team/competitor name
       */
      away_team: string;
      /**
       * Bookmakers
       * @description List of bookmaker odds objects
       */
      bookmakers: {
          /**
           * Key
           * @description Bookmaker name
           */
          key: string;
          /**
           * Last Update
           * @description Last odds update timestamp
           */
          last_update: string;
          /**
           * Markets
           * @description List of markets for this bookmaker
           */
          markets: {
              /**
               * Key
               * @description Type of market (e.g., h2h, totals, spreads)
               */
              key: string;
              /**
               * Outcomes
               * @description List of outcomes for this market
               */
              outcomes: {
                  /**
                   * Name
                   * @description Name of outcome (e.g., team name, Over, Under)
                   */
                  name: string;
                  /**
                   * Point
                   * @description Applicable to spreads/totals
                   * @default null
                   */
                  point: number | null;
                  /**
                   * Price
                   * @description Odds value
                   */
                  price: number;
              }[];
          }[];
          /**
           * Title
           * @description Bookmaker display name
           */
          title: string;
      }[];
      /**
       * Commence Time
       * @description Event start time
       */
      commence_time: string;
      /**
       * Home Team
       * @description Home team/competitor name
       */
      home_team: string;
      /**
       * Id
       * @description Unique event ID
       */
      id: string;
      /**
       * Sport Key
       * @description The requested sport key
       */
      sport_key: string;
      /**
       * Sport Title
       * @description Human-readable sport name
       */
      sport_title: string;
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
 * Type of THE_ODDS_API's THE_ODDS_API_GET_ODDS tool input.
 */
type THE_ODDS_API_GET_ODDS_INPUT = {
  /**
   * Bookmakers
   * @description Filter by bookmaker keys. Comma delimited.
   * @default null
   */
  bookmakers: string[] | null;
  /**
   * Date Format
   * @description Format of date to return.
   * @default iso
   * @enum {string}
   */
  dateFormat: "iso" | "unix";
  /**
   * Event Ids
   * @description Filter by event IDs. Comma delimited.
   * @default null
   */
  eventIds: string[] | null;
  /**
   * Markets
   * @description Filter by market types. Comma delimited list: h2h, spreads, totals.
   * @default null
   */
  markets: string[] | null;
  /**
   * Odds Format
   * @description Format of odds to return.
   * @default decimal
   * @enum {string}
   */
  oddsFormat: "decimal" | "american" | "fractional";
  /**
   * Regions
   * @description Filter by region. Comma delimited list of regions: us, uk, eu, au.
   */
  regions?: string[];
  /**
   * Sport
   * @description Sport key (e.g., 'soccer_epl')
   */
  sport?: string;
};

/**
 * Type of THE_ODDS_API's THE_ODDS_API_GET_ODDS tool output.
 */
type THE_ODDS_API_GET_ODDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Odds
       * @description List of event odds items.
       */
      odds: {
          /**
           * Away Team
           * @description Name of the away team.
           */
          away_team: string;
          /**
           * Bookmakers
           * @description List of bookmakers with odds information.
           */
          bookmakers: {
              /**
               * Key
               * @description Bookmaker key.
               */
              key: string;
              /**
               * Last Update
               * @description Time of last odds update (ISO format).
               */
              last_update: string;
              /**
               * Markets
               * @description Markets offered by this bookmaker.
               */
              markets: {
                  /**
                   * Key
                   * @description Market key, e.g., 'h2h', 'spreads', 'totals'.
                   */
                  key: string;
                  /**
                   * Outcomes
                   * @description List of outcomes in this market.
                   */
                  outcomes: {
                      /**
                       * Name
                       * @description Outcome name.
                       */
                      name: string;
                      /**
                       * Point
                       * @description Point spread or total for this outcome.
                       * @default null
                       */
                      point: number | null;
                      /**
                       * Price
                       * @description Outcome price.
                       */
                      price: number;
                  }[];
              }[];
              /**
               * Title
               * @description Bookmaker title.
               */
              title: string;
          }[];
          /**
           * Commence Time
           * @description Event start time in ISO8601 format.
           */
          commence_time: string;
          /**
           * Home Team
           * @description Name of the home team.
           */
          home_team: string;
          /**
           * Id
           * @description Event identifier.
           */
          id: string;
          /**
           * Sport Key
           * @description Sport key.
           */
          sport_key: string;
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
 * Type of THE_ODDS_API's THE_ODDS_API_GET_PARTICIPANTS tool input.
 */
type THE_ODDS_API_GET_PARTICIPANTS_INPUT = {
  /**
   * Sport
   * @description The key identifying the sport (path parameter). Examples include 'soccer_epl', 'upcoming', etc.
   */
  sport?: string;
};

/**
 * Type of THE_ODDS_API's THE_ODDS_API_GET_PARTICIPANTS tool output.
 */
type THE_ODDS_API_GET_PARTICIPANTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Participants
       * @description List of team or player names for this sport.
       */
      participants: string[];
      /**
       * Sport Key
       * @description Sport key used in the request.
       */
      sport_key: string;
      /**
       * Sport Title
       * @description Human-readable name of the sport.
       */
      sport_title: string;
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
 * Type of THE_ODDS_API's THE_ODDS_API_GET_SCORES tool input.
 */
type THE_ODDS_API_GET_SCORES_INPUT = {
  /**
   * Date Format
   * @description Date/time format: 'iso' for RFC3339 strings or 'unix' timestamps
   * @default iso
   * @enum {string}
   */
  dateFormat: "iso" | "unix";
  /**
   * Days From
   * @description Restrict to games starting within X days (0-3, default 1)
   * @default 1
   */
  daysFrom: number;
  /**
   * Sport
   * @description Sport key (e.g., 'soccer_epl', 'upcoming')
   */
  sport?: string;
};

/**
 * Type of THE_ODDS_API's THE_ODDS_API_GET_SCORES tool output.
 */
type THE_ODDS_API_GET_SCORES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Away Team
       * @description Away team name
       */
      away_team: string;
      /**
       * Bettable
       * @description Whether betting odds are currently available
       */
      bettable: boolean;
      /**
       * Commence Time
       * @description Game start time in requested format (ISO string or UNIX timestamp)
       */
      commence_time: string | null;
      /**
       * Completed
       * @description Whether the event has finished
       */
      completed: boolean;
      /**
       * Home Team
       * @description Home team name
       */
      home_team: string;
      /**
       * Id
       * @description Unique game ID
       */
      id: string;
      /**
       * Last Update
       * @description Timestamp of the last update (ISO string or UNIX timestamp)
       */
      last_update: string | null;
      /**
       * Scores
       * @description List of team scores; each entry has name and score
       */
      scores: {
          /**
           * Name
           * @description Team name
           */
          name: string;
          /**
           * Score
           * @description Team's score (non-negative integer)
           */
          score: number;
      }[];
      /**
       * Sport Key
       * @description Sport key identifier
       */
      sport_key: string;
      /**
       * Sport Title
       * @description Sport name/title
       */
      sport_title: string;
      /**
       * Venue
       * @description Venue name, if available
       * @default null
       */
      venue: string | null;
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
 * Type of THE_ODDS_API's THE_ODDS_API_GET_SPORTS tool input.
 */
type THE_ODDS_API_GET_SPORTS_INPUT = {
  /**
   * All
   * @description Whether to include all sports (in and out of season)
   * @default false
   */
  all: boolean;
};

/**
 * Type of THE_ODDS_API's THE_ODDS_API_GET_SPORTS tool output.
 */
type THE_ODDS_API_GET_SPORTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sports
       * @description List of sports objects returned by the API
       */
      sports: {
          /**
           * Active
           * @description Whether the sport is currently active in the API
           */
          active: boolean;
          /**
           * Description
           * @description Brief description of the sport
           */
          description: string;
          /**
           * Group
           * @description Category or group the sport belongs to, e.g., 'Soccer'
           */
          group: string;
          /**
           * Key
           * @description Unique key for the sport, e.g., 'soccer_epl'
           */
          key: string;
          /**
           * Title
           * @description Sport name, e.g., 'English Premier League'
           */
          title: string;
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
 * Type map of all available tool input types for toolkit "THE_ODDS_API".
 */
export type THE_ODDS_API_TOOL_INPUTS = {
  GET_EVENTS: THE_ODDS_API_GET_EVENTS_INPUT
  GET_EVENT_ODDS: THE_ODDS_API_GET_EVENT_ODDS_INPUT
  GET_ODDS: THE_ODDS_API_GET_ODDS_INPUT
  GET_PARTICIPANTS: THE_ODDS_API_GET_PARTICIPANTS_INPUT
  GET_SCORES: THE_ODDS_API_GET_SCORES_INPUT
  GET_SPORTS: THE_ODDS_API_GET_SPORTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "THE_ODDS_API".
 */
export type THE_ODDS_API_TOOL_OUTPUTS = {
  GET_EVENTS: THE_ODDS_API_GET_EVENTS_OUTPUT
  GET_EVENT_ODDS: THE_ODDS_API_GET_EVENT_ODDS_OUTPUT
  GET_ODDS: THE_ODDS_API_GET_ODDS_OUTPUT
  GET_PARTICIPANTS: THE_ODDS_API_GET_PARTICIPANTS_OUTPUT
  GET_SCORES: THE_ODDS_API_GET_SCORES_OUTPUT
  GET_SPORTS: THE_ODDS_API_GET_SPORTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's THE_ODDS_API toolkit.
 */
export const THE_ODDS_API = {
  slug: "the_odds_api",
  tools: {
    /**
     * Tool to fetch live and upcoming events for a specified sport. use when you need event listings including odds.
     */
    GET_EVENTS: "THE_ODDS_API_GET_EVENTS",
    /**
     * Tool to retrieve odds for a specific event. use after confirming sport key and event id to obtain bookmaker and market details.
     */
    GET_EVENT_ODDS: "THE_ODDS_API_GET_EVENT_ODDS",
    /**
     * Tool to fetch live and upcoming event odds for a specified sport, including bookmakers, regions, and markets. use after retrieving sports via get sports; filter by region, market, or event ids.
     */
    GET_ODDS: "THE_ODDS_API_GET_ODDS",
    /**
     * Tool to fetch list of participants (teams or players) for a specified sport. use after confirming you have a valid sport key.
     */
    GET_PARTICIPANTS: "THE_ODDS_API_GET_PARTICIPANTS",
    /**
     * Tool to return live and recently completed event scores for a sport. use after selecting a sport key to inspect current and recent game scores.
     */
    GET_SCORES: "THE_ODDS_API_GET_SCORES",
    /**
     * Tool to retrieve a list of in-season sports. use when you need sports data; set 'all' to true to include out-of-season sports.
     */
    GET_SPORTS: "THE_ODDS_API_GET_SPORTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "THE_ODDS_API".
 */
export type THE_ODDS_API_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "THE_ODDS_API".
 */
export type THE_ODDS_API_TRIGGER_EVENTS = {}
