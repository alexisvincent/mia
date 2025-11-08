// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of API_SPORTS's API_SPORTS_GET_COACHS tool input.
 */
type API_SPORTS_GET_COACHS_INPUT = {
  /**
   * Id
   * @description Coach ID to filter by
   * @default null
   */
  id: number | null;
  /**
   * Search
   * @description Search term for coach name (min length 3)
   * @default null
   */
  search: string | null;
  /**
   * Team
   * @description Team ID to filter coaches by
   * @default null
   */
  team: number | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_COACHS tool output.
 */
type API_SPORTS_GET_COACHS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors, if any
       */
      errors: unknown[];
      /**
       * Get
       * @description API endpoint called
       */
      get: string;
      /**
       * Paging
       * @description Pagination details
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      };
      /**
       * Parameters
       * @description Parameters sent in the request
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Response
       * @description List of coach details
       */
      response: {
          /**
           * Age
           * @description Age of the coach in years
           */
          age: number;
          /**
           * Birth
           * @description Birth details of the coach
           */
          birth: {
              /**
               * Country
               * @description Birth country of the coach
               */
              country: string;
              /**
               * Date
               * @description Birth date of the coach, YYYY-MM-DD
               */
              date: string;
              /**
               * Place
               * @description Birth place of the coach
               */
              place: string;
          };
          /**
           * Career
           * @description List of career entries
           */
          career: {
              /**
               * End
               * @description End date of tenure, YYYY-MM-DD; null if still active
               * @default null
               */
              end: string | null;
              /**
               * Start
               * @description Start date of tenure, YYYY-MM-DD
               */
              start: string;
              /**
               * Team
               * @description Team info in career entry
               */
              team: {
                  /**
                   * Id
                   * @description Team ID associated with the coach
                   */
                  id: number;
                  /**
                   * Logo
                   * @description URL of the team logo
                   */
                  logo: string;
                  /**
                   * Name
                   * @description Team name
                   */
                  name: string;
              };
          }[];
          /**
           * Firstname
           * @description First name of the coach
           */
          firstname: string;
          /**
           * Height
           * @description Height of the coach, e.g., '192 cm'
           * @default null
           */
          height: string | null;
          /**
           * Id
           * @description Coach ID
           */
          id: number;
          /**
           * Lastname
           * @description Last name of the coach
           */
          lastname: string;
          /**
           * Name
           * @description Full name of the coach
           */
          name: string;
          /**
           * Nationality
           * @description Nationality of the coach
           */
          nationality: string;
          /**
           * Photo
           * @description URL of the coach photo
           */
          photo: string;
          /**
           * Team
           * @description Current team of the coach
           */
          team: {
              /**
               * Id
               * @description Team ID associated with the coach
               */
              id: number;
              /**
               * Logo
               * @description URL of the team logo
               */
              logo: string;
              /**
               * Name
               * @description Team name
               */
              name: string;
          };
          /**
           * Weight
           * @description Weight of the coach, e.g., '85 kg'
           * @default null
           */
          weight: string | null;
      }[];
      /**
       * Results
       * @description Number of results returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_COUNTRIES tool input.
 */
type API_SPORTS_GET_COUNTRIES_INPUT = {
  /**
   * Code
   * @description Alpha-2 country code to filter by (e.g., 'FR', 'GB').
   * @default null
   */
  code: string | null;
  /**
   * Name
   * @description Exact country name to filter by (e.g., 'Chile').
   * @default null
   */
  name: string | null;
  /**
   * Search
   * @description Partial match search on country name (e.g., 'Uni' for 'United Kingdom').
   * @default null
   */
  search: string | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_COUNTRIES tool output.
 */
type API_SPORTS_GET_COUNTRIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Paging
       * @description Paging information for the results.
       */
      paging: {
          /**
           * Current
           * @description Current page number.
           */
          current: number;
          /**
           * Total
           * @description Total number of pages.
           */
          total: number;
      };
      /**
       * Parameters
       * @description Echo of the request query parameters.
       */
      parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Response
       * @description List of countries returned by the query.
       */
      response: {
          /**
           * Code
           * @description Alpha-2 country code.
           * @default null
           */
          code: string | null;
          /**
           * Flag
           * @description URL to the country's flag image.
           * @default null
           */
          flag: string | null;
          /**
           * Name
           * @description Country name.
           */
          name: string;
      }[];
      /**
       * Results
       * @description Number of country entries returned.
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_FIXTURES tool input.
 */
type API_SPORTS_GET_FIXTURES_INPUT = {
  /**
   * Date
   * @description A valid date (YYYY-MM-DD).
   * @default null
   */
  date: string | null;
  /**
   * From
   * @description Start date for date range (YYYY-MM-DD).
   * @default null
   */
  from: string | null;
  /**
   * Id
   * @description Unique identifier of the fixture.
   * @default null
   */
  id: number | null;
  /**
   * Last
   * @description Number of last fixtures to retrieve.
   * @default null
   */
  last: number | null;
  /**
   * League
   * @description Unique identifier of the league.
   * @default null
   */
  league: number | null;
  /**
   * Live
   * @description Get all live fixtures (all) or only those with events (all-events).
   * @default null
   */
  live: string | null;
  /**
   * Next
   * @description Number of next fixtures to retrieve.
   * @default null
   */
  next: number | null;
  /**
   * Round
   * @description Round of the fixture.
   * @default null
   */
  round: string | null;
  /**
   * Season
   * @description Season year (4-digit year).
   * @default null
   */
  season: number | null;
  /**
   * Status
   * @description Status of the fixture (NS, LIVE, FT, etc.).
   * @default null
   */
  status: string | null;
  /**
   * Team
   * @description Unique identifier of the team.
   * @default null
   */
  team: number | null;
  /**
   * Timezone
   * @description IANA timezone for date conversion.
   * @default null
   */
  timezone: string | null;
  /**
   * To
   * @description End date for date range (YYYY-MM-DD).
   * @default null
   */
  to: string | null;
  /**
   * Venue
   * @description Unique identifier of the venue.
   * @default null
   */
  venue: number | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_FIXTURES tool output.
 */
type API_SPORTS_GET_FIXTURES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages, if any
       */
      errors: unknown[];
      /**
       * Get
       * @description API endpoint called
       */
      get: string;
      /**
       * Paging
       * @description Pagination information
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      };
      /**
       * Parameters
       * @description Request query parameters
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Response
       * @description List of fixtures with detailed information
       */
      response: {
          /**
           * Fixture
           * @description Fixture details
           */
          fixture: {
              /**
               * Date
               * @description Fixture date and time in ISO format
               */
              date: string;
              /**
               * Id
               * @description Fixture ID
               */
              id: number;
              /**
               * Periods
               * @description Fixture periods
               * @default null
               */
              periods: {
                  [key: string]: unknown;
              } | null;
              /**
               * Referee
               * @description Referee name
               * @default null
               */
              referee: string | null;
              /**
               * Status
               * @description Fixture status information
               */
              status: {
                  [key: string]: unknown;
              };
              /**
               * Timestamp
               * @description Fixture Unix timestamp
               */
              timestamp: number;
              /**
               * Timezone
               * @description Fixture timezone
               */
              timezone: string;
              /**
               * Venue
               * @description Venue information
               * @default null
               */
              venue: {
                  [key: string]: unknown;
              } | null;
          };
          /**
           * Goals
           * @description Goals scored
           */
          goals: {
              /**
               * Away
               * @description Away team goals
               * @default null
               */
              away: number | null;
              /**
               * Home
               * @description Home team goals
               * @default null
               */
              home: number | null;
          };
          /**
           * League
           * @description League information
           */
          league: {
              /**
               * Country
               * @description League country
               */
              country: string;
              /**
               * Flag
               * @description URL to country flag
               * @default null
               */
              flag: string | null;
              /**
               * Id
               * @description League ID
               */
              id: number;
              /**
               * Logo
               * @description URL to league logo
               * @default null
               */
              logo: string | null;
              /**
               * Name
               * @description League name
               */
              name: string;
              /**
               * Round
               * @description Current round
               * @default null
               */
              round: string | null;
              /**
               * Season
               * @description Season year
               */
              season: number;
          };
          /**
           * Score
           * @description Detailed score information
           */
          score: {
              /**
               * Goals
               * @description Extra time score
               * @default null
               */
              extratime: {
                  /**
                   * Away
                   * @description Away team goals
                   * @default null
                   */
                  away: number | null;
                  /**
                   * Home
                   * @description Home team goals
                   * @default null
                   */
                  home: number | null;
              } | null;
              /**
               * Fulltime
               * @description Fulltime score
               */
              fulltime: {
                  /**
                   * Away
                   * @description Away team goals
                   * @default null
                   */
                  away: number | null;
                  /**
                   * Home
                   * @description Home team goals
                   * @default null
                   */
                  home: number | null;
              };
              /**
               * Halftime
               * @description Halftime score
               */
              halftime: {
                  /**
                   * Away
                   * @description Away team goals
                   * @default null
                   */
                  away: number | null;
                  /**
                   * Home
                   * @description Home team goals
                   * @default null
                   */
                  home: number | null;
              };
              /**
               * Goals
               * @description Penalty score
               * @default null
               */
              penalty: {
                  /**
                   * Away
                   * @description Away team goals
                   * @default null
                   */
                  away: number | null;
                  /**
                   * Home
                   * @description Home team goals
                   * @default null
                   */
                  home: number | null;
              } | null;
          };
          /**
           * Teams
           * @description Teams information
           */
          teams: {
              /**
               * Away
               * @description Away team information
               */
              away: {
                  /**
                   * Id
                   * @description Team ID
                   */
                  id: number;
                  /**
                   * Logo
                   * @description URL to team logo
                   * @default null
                   */
                  logo: string | null;
                  /**
                   * Name
                   * @description Team name
                   */
                  name: string;
                  /**
                   * Winner
                   * @description True if team won the fixture
                   * @default null
                   */
                  winner: boolean | null;
              };
              /**
               * Home
               * @description Home team information
               */
              home: {
                  /**
                   * Id
                   * @description Team ID
                   */
                  id: number;
                  /**
                   * Logo
                   * @description URL to team logo
                   * @default null
                   */
                  logo: string | null;
                  /**
                   * Name
                   * @description Team name
                   */
                  name: string;
                  /**
                   * Winner
                   * @description True if team won the fixture
                   * @default null
                   */
                  winner: boolean | null;
              };
          };
      }[];
      /**
       * Results
       * @description Number of fixtures returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_FIXTURES_EVENTS tool input.
 */
type API_SPORTS_GET_FIXTURES_EVENTS_INPUT = {
  /**
   * Fixture
   * @description ID of the fixture to fetch events for
   */
  fixture?: number;
  /**
   * Player
   * @description ID of the player to filter events by (optional)
   * @default null
   */
  player: number | null;
  /**
   * Team
   * @description ID of the team to filter events by (optional)
   * @default null
   */
  team: number | null;
  /**
   * Type
   * @description Type of event to filter (e.g., goal, card, substitution, VAR) (optional)
   * @default null
   */
  type: string | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_FIXTURES_EVENTS tool output.
 */
type API_SPORTS_GET_FIXTURES_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API, if any
       */
      errors: string[];
      /**
       * Get
       * @description Endpoint called
       */
      get: string;
      /**
       * Paging
       * @description Pagination details
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      };
      /**
       * Parameters
       * @description Parameters sent in the request
       */
      parameters: {
          /**
           * Fixture
           * @description ID of the fixture
           */
          fixture: number;
          /**
           * Player
           * @description ID of the player filter
           * @default null
           */
          player?: number | null;
          /**
           * Team
           * @description ID of the team filter
           * @default null
           */
          team?: number | null;
          /**
           * Type
           * @description Type of event filter
           * @default null
           */
          type?: string | null;
      };
      /**
       * Response
       * @description List of fixture events returned
       */
      response: {
          /**
           * Assist
           * @description Player who assisted the event, if applicable
           * @default null
           */
          assist: {
              /**
               * Id
               * @description ID of the player who assisted the event, if applicable
               * @default null
               */
              id: number | null;
              /**
               * Name
               * @description Name of the player who assisted the event, if applicable
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Comments
           * @description Any comments related to the event
           * @default null
           */
          comments: string | null;
          /**
           * Detail
           * @description Additional details about the event
           */
          detail: string;
          /**
           * Player
           * @description Player involved in the event
           */
          player: {
              /**
               * Id
               * @description Player ID
               */
              id: number;
              /**
               * Name
               * @description Player name
               */
              name: string;
          };
          /**
           * Team
           * @description Team associated with the event
           */
          team: {
              /**
               * Id
               * @description Team ID
               */
              id: number;
              /**
               * Logo
               * @description URL of the team logo
               */
              logo: string;
              /**
               * Name
               * @description Team name
               */
              name: string;
          };
          /**
           * Time
           * @description Timing details of the event
           */
          time: {
              /**
               * Elapsed
               * @description Elapsed minutes of the event
               */
              elapsed: number;
              /**
               * Extra
               * @description Additional minutes (injury time, etc.)
               * @default null
               */
              extra: number | null;
          };
          /**
           * Type
           * @description Type of event (e.g., Goal, Card, Substitution, VAR)
           */
          type: string;
      }[];
      /**
       * Results
       * @description Number of results returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_FIXTURES_HEADTOHEAD tool input.
 */
type API_SPORTS_GET_FIXTURES_HEADTOHEAD_INPUT = {
  /**
   * Date
   * @description Filter fixtures by a specific date in YYYY-MM-DD format
   * @default null
   */
  date: string | null;
  /**
   * From
   * @description Start date for filtering (YYYY-MM-DD)
   * @default null
   */
  from: string | null;
  /**
   * H2H
   * @description Team IDs in 'ID-ID' format, e.g., '33-34'
   */
  h2h?: string;
  /**
   * Last
   * @description Number of most recent past fixtures to retrieve
   * @default null
   */
  last: number | null;
  /**
   * League
   * @description League ID to filter fixtures
   * @default null
   */
  league: number | null;
  /**
   * Next
   * @description Number of upcoming fixtures to retrieve
   * @default null
   */
  next: number | null;
  /**
   * Season
   * @description Season year in YYYY format, e.g., 2020
   * @default null
   */
  season: number | null;
  /**
   * Status
   * @description Filter fixtures by status code, e.g., 'FT'
   * @default null
   */
  status: string | null;
  /**
   * Timezone
   * @description Specify IANA timezone, e.g., 'Europe/London'
   * @default null
   */
  timezone: string | null;
  /**
   * To
   * @description End date for filtering (YYYY-MM-DD)
   * @default null
   */
  to: string | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_FIXTURES_HEADTOHEAD tool output.
 */
type API_SPORTS_GET_FIXTURES_HEADTOHEAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Error messages or error object returned by API, if any
       */
      errors: string[] | null;
      /**
       * Get
       * @description API endpoint path called
       */
      get: string;
      /**
       * Paging
       * @description Pagination details
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      };
      /**
       * Response
       * @description List of fixture objects
       */
      response: {
          /** Fixture */
          fixture: {
              /**
               * Date
               * @description Date and time of fixture in ISO format
               */
              date: string;
              /**
               * Id
               * @description Fixture ID
               */
              id: number;
              /** Periods */
              periods: {
                  /**
                   * First
                   * @description Timestamp of first period start
                   * @default null
                   */
                  first: number | null;
                  /**
                   * Second
                   * @description Timestamp of second period start
                   * @default null
                   */
                  second: number | null;
              };
              /**
               * Referee
               * @description Referee name
               * @default null
               */
              referee: string | null;
              /** Status */
              status: {
                  /**
                   * Elapsed
                   * @description Elapsed minutes, if available
                   * @default null
                   */
                  elapsed: number | null;
                  /**
                   * Long
                   * @description Full status description, e.g., 'Match Finished'
                   */
                  long: string;
                  /**
                   * Short
                   * @description Abbreviated status code, e.g., 'FT'
                   */
                  short: string;
              };
              /**
               * Timestamp
               * @description Unix timestamp of the fixture date
               */
              timestamp: number;
              /**
               * Timezone
               * @description Timezone of fixture date, e.g., 'UTC'
               */
              timezone: string;
              /** Venue */
              venue: {
                  /**
                   * City
                   * @description City of the venue
                   * @default null
                   */
                  city: string | null;
                  /**
                   * Id
                   * @description Venue ID
                   * @default null
                   */
                  id: number | null;
                  /**
                   * Name
                   * @description Venue name
                   * @default null
                   */
                  name: string | null;
              };
          };
          /** Goals */
          goals: {
              /**
               * Away
               * @description Goals scored by away team
               * @default null
               */
              away: number | null;
              /**
               * Home
               * @description Goals scored by home team
               * @default null
               */
              home: number | null;
          };
          /** League */
          league: {
              /**
               * Country
               * @description Country of the league
               */
              country: string;
              /**
               * Flag
               * @description URL to country flag image
               * @default null
               */
              flag: string | null;
              /**
               * Id
               * @description League ID
               */
              id: number;
              /**
               * Logo
               * @description URL to league logo image
               */
              logo: string;
              /**
               * Name
               * @description League name
               */
              name: string;
              /**
               * Round
               * @description Round information, e.g., 'Regular Season'
               */
              round: string;
              /**
               * Season
               * @description Season year, e.g., 2020
               */
              season: number;
          };
          /** Score */
          score: {
              /** Extratime */
              extratime: {
                  /**
                   * Away
                   * @description Away score at this stage
                   * @default null
                   */
                  away: number | null;
                  /**
                   * Home
                   * @description Home score at this stage
                   * @default null
                   */
                  home: number | null;
              };
              /** Fulltime */
              fulltime: {
                  /**
                   * Away
                   * @description Away score at this stage
                   * @default null
                   */
                  away: number | null;
                  /**
                   * Home
                   * @description Home score at this stage
                   * @default null
                   */
                  home: number | null;
              };
              /** Halftime */
              halftime: {
                  /**
                   * Away
                   * @description Away score at this stage
                   * @default null
                   */
                  away: number | null;
                  /**
                   * Home
                   * @description Home score at this stage
                   * @default null
                   */
                  home: number | null;
              };
              /** Penalty */
              penalty: {
                  /**
                   * Away
                   * @description Away score at this stage
                   * @default null
                   */
                  away: number | null;
                  /**
                   * Home
                   * @description Home score at this stage
                   * @default null
                   */
                  home: number | null;
              };
          };
          /** Teams */
          teams: {
              /** Away */
              away: {
                  /**
                   * Id
                   * @description Team ID
                   */
                  id: number;
                  /**
                   * Logo
                   * @description URL to team logo image
                   */
                  logo: string;
                  /**
                   * Name
                   * @description Team name
                   */
                  name: string;
                  /**
                   * Winner
                   * @description True if this team won the fixture
                   */
                  winner: boolean;
              };
              /** Home */
              home: {
                  /**
                   * Id
                   * @description Team ID
                   */
                  id: number;
                  /**
                   * Logo
                   * @description URL to team logo image
                   */
                  logo: string;
                  /**
                   * Name
                   * @description Team name
                   */
                  name: string;
                  /**
                   * Winner
                   * @description True if this team won the fixture
                   */
                  winner: boolean;
              };
          };
      }[];
      /**
       * Results
       * @description Number of results returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_FIXTURES_LINEUPS tool input.
 */
type API_SPORTS_GET_FIXTURES_LINEUPS_INPUT = {
  /**
   * Fixture
   * @description Unique ID of the fixture
   */
  fixture?: number;
  /**
   * Player
   * @description Filter by player ID
   * @default null
   */
  player: number | null;
  /**
   * Team
   * @description Filter by team ID
   * @default null
   */
  team: number | null;
  /**
   * Type
   * @description Filter by lineup section: 'startXI' or 'substitutes'
   * @default null
   * @enum {string|null}
   */
  type: "startXI" | "substitutes" | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_FIXTURES_LINEUPS tool output.
 */
type API_SPORTS_GET_FIXTURES_LINEUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description API errors, if any
       */
      errors: string[];
      /**
       * Get
       * @description Endpoint called
       */
      get: string;
      /**
       * Paging
       * @description Pagination details
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total pages available
           */
          total: number;
      };
      /**
       * Parameters
       * @description Request parameters
       */
      parameters: {
          /**
           * Fixture
           * @description Fixture ID used in request
           */
          fixture: number;
          /**
           * Player
           * @description Player filter applied
           * @default null
           */
          player?: number | null;
          /**
           * Team
           * @description Team filter applied
           * @default null
           */
          team?: number | null;
          /**
           * Type
           * @description Section filter applied
           * @default null
           */
          type?: string | null;
      };
      /**
       * Response
       * @description Lineup entries by team
       */
      response: {
          /**
           * Coach
           * @description Coach details
           */
          coach: {
              /**
               * Id
               * @description Coach ID
               */
              id: number;
              /**
               * Name
               * @description Coach name
               */
              name: string;
              /**
               * Photo
               * @description URL to coach photo image
               */
              photo: string;
          };
          /**
           * Formation
           * @description Team formation, e.g., '4-3-3'
           */
          formation: string;
          /**
           * Start Xi
           * @description List of starting XI players
           */
          startXI: {
              /** Player */
              player: {
                  /**
                   * Grid
                   * @description Grid position 'X:Y'
                   * @default null
                   */
                  grid: string | null;
                  /**
                   * Id
                   * @description Player ID
                   */
                  id: number;
                  /**
                   * Name
                   * @description Player name
                   */
                  name: string;
                  /**
                   * Number
                   * @description Jersey number
                   */
                  number: number;
                  /**
                   * Pos
                   * @description Position code: G/D/M/F
                   */
                  pos: string;
              };
          }[];
          /**
           * Substitutes
           * @description List of substitute players
           */
          substitutes: {
              /** Player */
              player: {
                  /**
                   * Grid
                   * @description Grid position 'X:Y'
                   * @default null
                   */
                  grid: string | null;
                  /**
                   * Id
                   * @description Player ID
                   */
                  id: number;
                  /**
                   * Name
                   * @description Player name
                   */
                  name: string;
                  /**
                   * Number
                   * @description Jersey number
                   */
                  number: number;
                  /**
                   * Pos
                   * @description Position code: G/D/M/F
                   */
                  pos: string;
              };
          }[];
          /** Team */
          team: {
              /**
               * Colors
               * @description Jersey colors for team and goalkeeper
               * @default null
               */
              colors: {
                  /** Goalkeeper */
                  goalkeeper: {
                      /**
                       * Border
                       * @description Border color hex
                       * @default null
                       */
                      border: string | null;
                      /**
                       * Number
                       * @description Number color hex
                       * @default null
                       */
                      number: string | null;
                      /**
                       * Primary
                       * @description Primary jersey color hex
                       * @default null
                       */
                      primary: string | null;
                  };
                  /** Player */
                  player: {
                      /**
                       * Border
                       * @description Border color hex
                       * @default null
                       */
                      border: string | null;
                      /**
                       * Number
                       * @description Number color hex
                       * @default null
                       */
                      number: string | null;
                      /**
                       * Primary
                       * @description Primary jersey color hex
                       * @default null
                       */
                      primary: string | null;
                  };
              } | null;
              /**
               * Id
               * @description Team ID
               */
              id: number;
              /**
               * Logo
               * @description URL to team logo image
               */
              logo: string;
              /**
               * Name
               * @description Team name
               */
              name: string;
          };
      }[];
      /**
       * Results
       * @description Number of results returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_FIXTURES_PLAYERS tool input.
 */
type API_SPORTS_GET_FIXTURES_PLAYERS_INPUT = {
  /**
   * Fixture
   * @description ID of the fixture to retrieve player statistics for
   */
  fixture?: number;
  /**
   * Team
   * @description ID of the team to filter player statistics by (optional)
   * @default null
   */
  team: number | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_FIXTURES_PLAYERS tool output.
 */
type API_SPORTS_GET_FIXTURES_PLAYERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API, if any
       */
      errors: string[] | null;
      /**
       * Get
       * @description API endpoint path called
       */
      get: string;
      /**
       * Paging
       * @description Pagination details
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      };
      /**
       * Parameters
       * @description Parameters sent in the request
       */
      parameters: {
          /**
           * Fixture
           * @description ID of the fixture filter
           */
          fixture: number;
          /**
           * Team
           * @description ID of the team filter (optional)
           * @default null
           */
          team?: number | null;
      };
      /**
       * Response
       * @description List of player statistics for the fixture
       */
      response: {
          /**
           * Player
           * @description Player details
           */
          player: {
              /**
               * Age
               * @description Age of the player
               */
              age: number;
              /**
               * Firstname
               * @description First name of the player
               */
              firstname: string;
              /**
               * Height
               * @description Height of the player, e.g., '187 cm'
               * @default null
               */
              height: string | null;
              /**
               * Id
               * @description Player ID
               */
              id: number;
              /**
               * Injured
               * @description Whether the player is currently injured
               */
              injured: boolean;
              /**
               * Lastname
               * @description Last name of the player
               */
              lastname: string;
              /**
               * Name
               * @description Full name of the player
               */
              name: string;
              /**
               * Photo
               * @description URL to the player's photo
               */
              photo: string;
              /**
               * Weight
               * @description Weight of the player, e.g., '82 kg'
               * @default null
               */
              weight: string | null;
          };
          /**
           * Statistics
           * @description List of statistics entries per team
           */
          statistics: {
              /**
               * Cards
               * @description Card statistics
               */
              cards: {
                  /**
                   * Red
                   * @description Number of red cards received
                   * @default null
                   */
                  red: number | null;
                  /**
                   * Yellow
                   * @description Number of yellow cards received
                   * @default null
                   */
                  yellow: number | null;
                  /**
                   * Yellowred
                   * @description Number of second yellow cards (yellow-red)
                   * @default null
                   */
                  yellowred: number | null;
              };
              /**
               * Dribbles
               * @description Dribbling statistics
               */
              dribbles: {
                  /**
                   * Attempts
                   * @description Number of dribble attempts
                   * @default null
                   */
                  attempts: number | null;
                  /**
                   * Past
                   * @description Number of times dribbled past
                   * @default null
                   */
                  past: number | null;
                  /**
                   * Success
                   * @description Number of successful dribbles
                   * @default null
                   */
                  success: number | null;
              };
              /**
               * Duels
               * @description Duel statistics
               */
              duels: {
                  /**
                   * Total
                   * @description Total duels contested
                   * @default null
                   */
                  total: number | null;
                  /**
                   * Won
                   * @description Number of duels won
                   * @default null
                   */
                  won: number | null;
              };
              /**
               * Fouls
               * @description Foul statistics
               */
              fouls: {
                  /**
                   * Committed
                   * @description Number of fouls committed by player
                   * @default null
                   */
                  committed: number | null;
                  /**
                   * Drawn
                   * @description Number of fouls drawn by player
                   * @default null
                   */
                  drawn: number | null;
              };
              /**
               * Games
               * @description Game-related statistics
               */
              games: {
                  /**
                   * Captain
                   * @description Whether the player was captain in the match
                   * @default null
                   */
                  captain: boolean | null;
                  /**
                   * Minutes
                   * @description Number of minutes played
                   * @default null
                   */
                  minutes: number | null;
                  /**
                   * Number
                   * @description Jersey number assigned to player
                   * @default null
                   */
                  number: number | null;
                  /**
                   * Position
                   * @description Position of the player, e.g., 'Defender'
                   * @default null
                   */
                  position: string | null;
                  /**
                   * Rating
                   * @description Player rating as a string, e.g., '7.0'
                   * @default null
                   */
                  rating: string | null;
              };
              /**
               * Goals
               * @description Goal statistics
               */
              goals: {
                  /**
                   * Assists
                   * @description Number of assists by player
                   * @default null
                   */
                  assists: number | null;
                  /**
                   * Conceded
                   * @description Goals conceded (if applicable)
                   * @default null
                   */
                  conceded: number | null;
                  /**
                   * Saves
                   * @description Number of saves by player (if goalkeeper)
                   * @default null
                   */
                  saves: number | null;
                  /**
                   * Total
                   * @description Total goals scored by player
                   * @default null
                   */
                  total: number | null;
              };
              /**
               * Passes
               * @description Passing statistics
               */
              passes: {
                  /**
                   * Accuracy
                   * @description Pass accuracy percentage
                   * @default null
                   */
                  accuracy: number | null;
                  /**
                   * Key
                   * @description Key passes leading to goal opportunities
                   * @default null
                   */
                  key: number | null;
                  /**
                   * Total
                   * @description Total passes attempted
                   * @default null
                   */
                  total: number | null;
              };
              /**
               * Penalty
               * @description Penalty statistics
               */
              penalty: {
                  /**
                   * Commited
                   * @description Number of penalties committed by player
                   * @default null
                   */
                  commited: number | null;
                  /**
                   * Missed
                   * @description Number of penalties missed by player
                   * @default null
                   */
                  missed: number | null;
                  /**
                   * Saved
                   * @description Number of penalties saved by goalkeeper
                   * @default null
                   */
                  saved: number | null;
                  /**
                   * Scored
                   * @description Number of penalties scored by player
                   * @default null
                   */
                  scored: number | null;
                  /**
                   * Won
                   * @description Number of penalties won
                   * @default null
                   */
                  won: number | null;
              };
              /**
               * Shots
               * @description Shooting statistics
               */
              shots: {
                  /**
                   * On
                   * @description Shots on target by player
                   * @default null
                   */
                  on: number | null;
                  /**
                   * Total
                   * @description Total shots attempted by player
                   * @default null
                   */
                  total: number | null;
              };
              /**
               * Substitutes
               * @description Substitution details (in/out/bench)
               */
              substitutes: {
                  /**
                   * Bench
                   * @description Number of times player was on the bench
                   * @default null
                   */
                  bench: number | null;
                  /**
                   * Out
                   * @description Number of times player was substituted off
                   * @default null
                   */
                  out: number | null;
                  /**
                   * Substitute In
                   * @description Number of times player came in as substitute
                   * @default null
                   */
                  substitute_in: number | null;
              };
              /**
               * Tackles
               * @description Tackling statistics
               */
              tackles: {
                  /**
                   * Blocks
                   * @description Number of blocks made
                   * @default null
                   */
                  blocks: number | null;
                  /**
                   * Interceptions
                   * @description Number of interceptions made
                   * @default null
                   */
                  interceptions: number | null;
                  /**
                   * Total
                   * @description Total tackles made
                   * @default null
                   */
                  total: number | null;
              };
              /**
               * Team
               * @description Team details for this statistics entry
               */
              team: {
                  /**
                   * Id
                   * @description Team ID
                   */
                  id: number;
                  /**
                   * Logo
                   * @description URL to the team logo image
                   */
                  logo: string;
                  /**
                   * Name
                   * @description Team name
                   */
                  name: string;
              };
          }[];
      }[];
      /**
       * Results
       * @description Number of results returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_FIXTURES_ROUNDS tool input.
 */
type API_SPORTS_GET_FIXTURES_ROUNDS_INPUT = {
  /**
   * Current
   * @description If true, only return the current round
   * @default null
   */
  current: boolean | null;
  /**
   * Dates
   * @description If true, include dates of each round in the response
   * @default false
   */
  dates: boolean | null;
  /**
   * League
   * @description League ID (from /leagues endpoint)
   */
  league?: number;
  /**
   * Season
   * @description Season year in YYYY format (from /leagues/seasons endpoint)
   */
  season?: number;
  /**
   * Timezone
   * @description Valid timezone (IANA) for formatting dates (from /timezone endpoint)
   * @default null
   */
  timezone: string | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_FIXTURES_ROUNDS tool output.
 */
type API_SPORTS_GET_FIXTURES_ROUNDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors, if any
       */
      errors: string[];
      /**
       * Get
       * @description API method called, e.g. 'fixtures/rounds'
       */
      get: string;
      /**
       * Paging
       * @description Paging info
       */
      paging: {
          /**
           * Current
           * @description Current page number, always 1
           */
          current: number;
          /**
           * Total
           * @description Total number of items, always 1 for this endpoint
           */
          total: number;
      };
      /**
       * Parameters
       * @description Parameters sent in the request
       */
      parameters: {
          [key: string]: number | boolean | string;
      };
      /**
       * Response
       * @description List of round identifiers or objects with dates
       */
      response: (string | {
          /**
           * End
           * @description End date/time of the round in ISO format
           * @default null
           */
          end: string | null;
          /**
           * Round
           * @description Round name, e.g. 'Regular Season - 1'
           */
          round: string;
          /**
           * Start
           * @description Start date/time of the round in ISO format
           * @default null
           */
          start: string | null;
      })[];
      /**
       * Results
       * @description Number of rounds returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_FIXTURES_STATISTICS tool input.
 */
type API_SPORTS_GET_FIXTURES_STATISTICS_INPUT = {
  /**
   * Fixture
   * @description ID of the fixture for which statistics are requested
   */
  fixture?: number;
  /**
   * Half
   * @description If true, includes halftime statistics in the response. Available for fixtures from the 2024 season onward.
   * @default false
   */
  half: boolean;
  /**
   * Team
   * @description Optional team ID to filter statistics
   * @default null
   */
  team: number | null;
  /**
   * Type
   * @description Statistic type to filter results (must match API's available types)
   * @default null
   * @enum {string|null}
   */
  type: "Shots on Goal" | "Shots off Goal" | "Shots insidebox" | "Shots outsidebox" | "Total Shots" | "Blocked Shots" | "Fouls" | "Corner Kicks" | "Offsides" | "Ball Possession" | "Yellow Cards" | "Red Cards" | "Goalkeeper Saves" | "Total passes" | "Passes accurate" | "Passes %" | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_FIXTURES_STATISTICS tool output.
 */
type API_SPORTS_GET_FIXTURES_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages returned by the API, if any
       */
      errors: string[] | null;
      /**
       * Get
       * @description API endpoint called, e.g. 'fixtures/statistics'
       */
      get: string;
      /**
       * Paging
       * @description Pagination metadata if multiple pages exist
       * @default null
       */
      paging: {
          /**
           * Current
           * @description Current page index
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      } | null;
      /**
       * Parameters
       * @description Echo of query parameters sent
       */
      parameters: {
          [key: string]: number | boolean | string;
      };
      /**
       * Response
       * @description List of team statistics for the requested fixture
       */
      response: {
          /**
           * Statistics
           * @description List of individual statistics for this team
           */
          statistics: {
              /**
               * Type
               * @description Name of the statistic, e.g. 'Shots on Goal'
               */
              type: string;
              /**
               * Value
               * @description Value of the statistic
               * @default null
               */
              value: number | null;
          }[];
          /**
           * Team
           * @description Basic info about the team
           */
          team: {
              /**
               * Id
               * @description Team ID
               */
              id: number;
              /**
               * Logo
               * @description URL of the team's logo image
               * @default null
               */
              logo: string | null;
              /**
               * Name
               * @description Team name
               */
              name: string;
          };
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
 * Type of API_SPORTS's API_SPORTS_GET_INJURIES tool input.
 */
type API_SPORTS_GET_INJURIES_INPUT = {
  /**
   * Date
   * @description Date (YYYY-MM-DD) to filter injuries.
   * @default null
   */
  date: string | null;
  /**
   * Fixture
   * @description Fixture ID to filter injuries.
   * @default null
   */
  fixture: number | null;
  /**
   * Ids
   * @description One or more fixture IDs, hyphen-separated (max 20), e.g. '123-456'.
   * @default null
   */
  ids: string | null;
  /**
   * League
   * @description League ID to filter injuries.
   * @default null
   */
  league: number | null;
  /**
   * Player
   * @description Player ID to filter injuries.
   * @default null
   */
  player: number | null;
  /**
   * Season
   * @description Season (YYYY) required with league, team, or player filters.
   * @default null
   */
  season: number | null;
  /**
   * Team
   * @description Team ID to filter injuries.
   * @default null
   */
  team: number | null;
  /**
   * Timezone
   * @description Timezone name from the /timezone endpoint.
   * @default null
   */
  timezone: string | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_INJURIES tool output.
 */
type API_SPORTS_GET_INJURIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Any errors returned by API
       * @default []
       */
      errors: string[];
      /**
       * Get
       * @description API endpoint called
       * @default null
       */
      get: string | null;
      /**
       * Paging
       * @description Paging info
       * @default null
       */
      paging: {
          /**
           * Current
           * @description Current page number
           * @default null
           */
          current: number | null;
          /**
           * Total
           * @description Total items
           * @default null
           */
          total: number | null;
      } | null;
      /**
       * Parameters
       * @description Request parameters
       * @default null
       */
      parameters: {
          [key: string]: number | string;
      } | null;
      /**
       * Response
       * @description List of injury records
       */
      response: {
          /** Fixture */
          fixture: {
              /**
               * Date
               * @description Fixture date/time.
               * @default null
               */
              date: string | null;
              /**
               * Id
               * @description Fixture ID
               */
              id: number;
              /**
               * Timestamp
               * @description Fixture timestamp.
               * @default null
               */
              timestamp: number | null;
              /**
               * Timezone
               * @description Fixture timezone
               * @default null
               */
              timezone: string | null;
          };
          /** League */
          league: {
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Flag
               * @description League flag URL
               * @default null
               */
              flag: string | null;
              /**
               * Id
               * @description League ID
               */
              id: number;
              /**
               * Logo
               * @description League logo URL
               * @default null
               */
              logo: string | null;
              /**
               * Name
               * @description League name
               * @default null
               */
              name: string | null;
              /**
               * Season
               * @description Season (YYYY)
               * @default null
               */
              season: number | null;
          };
          /** Player */
          player: {
              /**
               * Id
               * @description Player ID
               */
              id: number;
              /**
               * Name
               * @description Player name
               */
              name: string;
              /**
               * Photo
               * @description Player photo URL
               * @default null
               */
              photo: string | null;
              /**
               * Reason
               * @description Reason for missing fixture.
               * @default null
               */
              reason: string | null;
              /**
               * Type
               * @description Injury type (Missing Fixture or Questionable)
               */
              type: string;
          };
          /** Team */
          team: {
              /**
               * Id
               * @description Team ID
               */
              id: number;
              /**
               * Logo
               * @description Team logo URL
               * @default null
               */
              logo: string | null;
              /**
               * Name
               * @description Team name
               */
              name: string;
          };
      }[];
      /**
       * Results
       * @description Number of injuries returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_LEAGUES tool input.
 */
type API_SPORTS_GET_LEAGUES_INPUT = {
  /**
   * Code
   * @description Alpha code of the country (2 to 6 chars)
   * @default null
   */
  code: string | null;
  /**
   * Country
   * @description Country name of the competition
   * @default null
   */
  country: string | null;
  /**
   * Current
   * @description Return only currently active competitions (true/false)
   * @default null
   */
  current: boolean | null;
  /**
   * Id
   * @description League ID to filter by
   * @default null
   */
  id: number | null;
  /**
   * Last
   * @description Number of most recently added leagues or cups to return (1 to 99)
   * @default null
   */
  last: number | null;
  /**
   * Name
   * @description Name of the league or cup
   * @default null
   */
  name: string | null;
  /**
   * Search
   * @description Search term for league name or country (min 3 chars)
   * @default null
   */
  search: string | null;
  /**
   * Season
   * @description 4-digit season year (e.g., 2021)
   * @default null
   */
  season: number | null;
  /**
   * Team
   * @description Team ID to filter leagues in which the team has played
   * @default null
   */
  team: number | null;
  /**
   * Type
   * @description Competition type: 'league' or 'cup'
   * @default null
   * @enum {string|null}
   */
  type: "league" | "cup" | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_LEAGUES tool output.
 */
type API_SPORTS_GET_LEAGUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Any errors returned by the API
       */
      errors: unknown[];
      /**
       * Get
       * @description API method called
       */
      get: string;
      /**
       * Paging
       * @description Pagination details
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      };
      /**
       * Parameters
       * @description Parameters sent in request
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Response
       * @description List of leagues and cups
       */
      response: {
          /**
           * Country
           * @description Country details
           */
          country: {
              /**
               * Code
               * @description Country code
               */
              code: string;
              /**
               * Flag
               * @description URL of the country flag image
               */
              flag: string;
              /**
               * Name
               * @description Country name
               */
              name: string;
          };
          /**
           * League
           * @description Competition details
           */
          league: {
              /**
               * Id
               * @description Competition ID
               */
              id: number;
              /**
               * Logo
               * @description URL of the competition's logo image
               */
              logo: string;
              /**
               * Name
               * @description Competition name
               */
              name: string;
              /**
               * Type
               * @description Competition type, e.g. League or Cup
               */
              type: string;
          };
          /**
           * Seasons
           * @description List of seasons for this competition
           */
          seasons: {
              /**
               * Coverage
               * @description Coverage details for this season
               */
              coverage: {
                  /**
                   * Fixtures
                   * @description Coverage details for fixtures
                   */
                  fixtures: {
                      /**
                       * Events
                       * @description Events coverage available
                       */
                      events: boolean;
                      /**
                       * Lineups
                       * @description Lineups coverage available
                       */
                      lineups: boolean;
                      /**
                       * Statistics Fixtures
                       * @description Fixture statistics coverage available
                       */
                      statistics_fixtures: boolean;
                      /**
                       * Statistics Players
                       * @description Player statistics coverage available
                       */
                      statistics_players: boolean;
                  };
                  /**
                   * Injuries
                   * @description Injuries coverage available
                   */
                  injuries: boolean;
                  /**
                   * Odds
                   * @description Odds coverage available
                   */
                  odds: boolean;
                  /**
                   * Players
                   * @description Players coverage available
                   */
                  players: boolean;
                  /**
                   * Predictions
                   * @description Predictions coverage available
                   */
                  predictions: boolean;
                  /**
                   * Standings
                   * @description Standings coverage available
                   */
                  standings: boolean;
                  /**
                   * Top Assists
                   * @description Top assists coverage available
                   */
                  top_assists: boolean;
                  /**
                   * Top Cards
                   * @description Top cards coverage available
                   */
                  top_cards: boolean;
                  /**
                   * Top Scorers
                   * @description Top scorers coverage available
                   */
                  top_scorers: boolean;
              };
              /**
               * Current
               * @description Indicates if this is the current season
               */
              current: boolean;
              /**
               * End
               * @description Season end date (YYYY-MM-DD)
               */
              end: string;
              /**
               * Start
               * @description Season start date (YYYY-MM-DD)
               */
              start: string;
              /**
               * Year
               * @description Season year
               */
              year: number;
          }[];
      }[];
      /**
       * Results
       * @description Total number of results
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_LEAGUES_SEASONS tool input.
 */
type API_SPORTS_GET_LEAGUES_SEASONS_INPUT = object;

/**
 * Type of API_SPORTS's API_SPORTS_GET_LEAGUES_SEASONS tool output.
 */
type API_SPORTS_GET_LEAGUES_SEASONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API
       */
      errors: unknown[];
      /**
       * Get
       * @description API endpoint called
       */
      get: string;
      /**
       * Paging
       * @description Pagination details
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      };
      /**
       * Parameters
       * @description Parameters sent in the request
       */
      parameters: unknown[];
      /**
       * Response
       * @description List of available seasons as 4-digit keys
       */
      response: number[];
      /**
       * Results
       * @description Number of seasons returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_ODDS tool input.
 */
type API_SPORTS_GET_ODDS_INPUT = {
  /**
   * Bet
   * @description Filter odds by bet ID
   * @default null
   */
  bet: number | null;
  /**
   * Bookmaker
   * @description Filter odds by bookmaker ID
   * @default null
   */
  bookmaker: number | null;
  /**
   * Date
   * @description Filter odds by date (YYYY-MM-DD)
   * @default null
   */
  date: string | null;
  /**
   * Fixture
   * @description Filter odds by fixture ID
   * @default null
   */
  fixture: number | null;
  /**
   * League
   * @description Filter odds by league ID
   * @default null
   */
  league: number | null;
  /**
   * Page
   * @description Page number for pagination (10 results per page)
   * @default 1
   */
  page: number | null;
  /**
   * Season
   * @description Filter odds by season (4-digit year)
   * @default null
   */
  season: number | null;
  /**
   * Timezone
   * @description IANA timezone for date conversion, e.g., 'Europe/London'
   * @default null
   */
  timezone: string | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_ODDS tool output.
 */
type API_SPORTS_GET_ODDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Any errors returned by the API
       */
      errors: unknown[] | null;
      /**
       * Get
       * @description API endpoint that was called
       */
      get: string;
      /**
       * Paging
       * @description Pagination metadata
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      };
      /**
       * Parameters
       * @description Query parameters sent with the request
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Response
       * @description Pre-match odds data
       */
      response: {
          /**
           * Bookmakers
           * @description List of bookmakers offering odds
           */
          bookmakers: {
              /**
               * Bets
               * @description List of bet markets for this bookmaker
               */
              bets: {
                  /**
                   * Id
                   * @description Bet market ID
                   */
                  id: number;
                  /**
                   * Name
                   * @description Bet market name
                   */
                  name: string;
                  /**
                   * Values
                   * @description List of possible odds values
                   */
                  values: {
                      /**
                       * Handicap
                       * @description Handicap or line, if applicable
                       * @default null
                       */
                      handicap: string | null;
                      /**
                       * Main
                       * @description True if this is the main odd among duplicates
                       * @default null
                       */
                      main: boolean | null;
                      /**
                       * Odd
                       * @description Odds offered, as string
                       */
                      odd: string;
                      /**
                       * Suspended
                       * @description True if bet is currently suspended
                       * @default null
                       */
                      suspended: boolean | null;
                      /**
                       * Value
                       * @description Bet option name or value
                       */
                      value: string;
                  }[];
              }[];
              /**
               * Id
               * @description Bookmaker ID
               */
              id: number;
              /**
               * Name
               * @description Bookmaker name
               */
              name: string;
          }[];
          /**
           * Fixture
           * @description Fixture information for odds entry
           */
          fixture: {
              /**
               * Date
               * @description Fixture date and time in ISO format
               */
              date: string;
              /**
               * Id
               * @description Fixture ID
               */
              id: number;
              /**
               * Timestamp
               * @description Fixture Unix timestamp
               */
              timestamp: number;
              /**
               * Timezone
               * @description Fixture timezone
               */
              timezone: string;
          };
          /**
           * League
           * @description League information for odds entry
           */
          league: {
              /**
               * Country
               * @description League country
               */
              country: string;
              /**
               * Flag
               * @description URL to country flag
               * @default null
               */
              flag: string | null;
              /**
               * Id
               * @description League ID
               */
              id: number;
              /**
               * Logo
               * @description URL to league logo
               * @default null
               */
              logo: string | null;
              /**
               * Name
               * @description League name
               */
              name: string;
              /**
               * Season
               * @description Season year
               */
              season: number;
          };
          /**
           * Update
           * @description Timestamp when odds were last updated (ISO format)
           */
          update: string;
      }[];
      /**
       * Results
       * @description Total number of results
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_ODDS_BETS tool input.
 */
type API_SPORTS_GET_ODDS_BETS_INPUT = {
  /**
   * Id
   * @description Filter by bet ID.
   * @default null
   */
  id: number | null;
  /**
   * Search
   * @description Partial match search on bet name (minimum 3 characters).
   * @default null
   */
  search: string | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_ODDS_BETS tool output.
 */
type API_SPORTS_GET_ODDS_BETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages, if any.
       */
      errors: string[];
      /**
       * Get
       * @description Endpoint called (should be 'odds/bets').
       */
      get: string;
      /**
       * Paging
       * @description Paging information for the results.
       */
      paging: {
          /**
           * Current
           * @description Current page number.
           */
          current: number;
          /**
           * Total
           * @description Total number of pages.
           */
          total: number;
      };
      /**
       * Parameters
       * @description Echo of the request query parameters.
       */
      parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Response
       * @description List of available bets.
       */
      response: {
          /**
           * Id
           * @description Bet identifier
           */
          id: number;
          /**
           * Name
           * @description Bet name
           */
          name: string | null;
      }[];
      /**
       * Results
       * @description Number of bet entries returned.
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_ODDS_BOOKMAKERS tool input.
 */
type API_SPORTS_GET_ODDS_BOOKMAKERS_INPUT = {
  /**
   * Id
   * @description Filter by bookmaker ID.
   * @default null
   */
  id: number | null;
  /**
   * Search
   * @description Partial match search on bookmaker name (minimum 3 characters).
   * @default null
   */
  search: string | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_ODDS_BOOKMAKERS tool output.
 */
type API_SPORTS_GET_ODDS_BOOKMAKERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Paging
       * @description Pagination information for the results.
       */
      paging: {
          /**
           * Current
           * @description Current page number.
           */
          current: number;
          /**
           * Total
           * @description Total number of pages.
           */
          total: number;
      };
      /**
       * Parameters
       * @description Echo of request query parameters.
       */
      parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Response
       * @description List of available bookmakers.
       */
      response: {
          /**
           * Id
           * @description Unique bookmaker ID.
           */
          id: number;
          /**
           * Name
           * @description Name of the bookmaker.
           */
          name: string;
      }[];
      /**
       * Results
       * @description Number of bookmakers returned.
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_ODDS_LIVE tool input.
 */
type API_SPORTS_GET_ODDS_LIVE_INPUT = {
  /**
   * Bet
   * @description Filter by bet ID for live odds.
   * @default null
   */
  bet: number | null;
  /**
   * Fixture
   * @description Filter by fixture ID for live odds.
   * @default null
   */
  fixture: number | null;
  /**
   * League
   * @description Filter by league ID for live odds.
   * @default null
   */
  league: number | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_ODDS_LIVE tool output.
 */
type API_SPORTS_GET_ODDS_LIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages, if any.
       */
      errors: unknown[];
      /**
       * Paging
       * @description Pagination details.
       */
      paging: {
          /**
           * Current
           * @description Current page number.
           */
          current: number;
          /**
           * Total
           * @description Total number of pages.
           */
          total: number;
      };
      /**
       * Parameters
       * @description Request parameters.
       */
      parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Response
       * @description List of live odds data.
       */
      response: {
          /**
           * Fixture
           * @description Live fixture info.
           */
          fixture: {
              /**
               * Id
               * @description Fixture ID.
               */
              id: number;
              /**
               * Status
               * @description Live status details.
               */
              status: {
                  /**
                   * Elapsed
                   * @description Elapsed minutes in match.
                   * @default null
                   */
                  elapsed: number | null;
                  /**
                   * Long
                   * @description Long status (e.g., 'Second Half').
                   * @default null
                   */
                  long: string | null;
                  /**
                   * Seconds
                   * @description Elapsed time formatted as mm:ss.
                   * @default null
                   */
                  seconds: string | null;
              };
          };
          /**
           * League
           * @description League and season info.
           */
          league: {
              /**
               * Id
               * @description League ID.
               */
              id: number;
              /**
               * Season
               * @description Season year.
               */
              season: number;
          };
          /**
           * Odds
           * @description List of live bets and odds.
           */
          odds: {
              /**
               * Id
               * @description Bet ID for live odds.
               */
              id: number;
              /**
               * Name
               * @description Name of the bet.
               */
              name: string;
              /**
               * Values
               * @description List of values and odds.
               */
              values: {
                  /**
                   * Handicap
                   * @description Handicap or line, if applicable.
                   * @default null
                   */
                  handicap: string | null;
                  /**
                   * Main
                   * @description Primary odd flag when duplicates occur.
                   * @default null
                   */
                  main: boolean | null;
                  /**
                   * Odd
                   * @description Odd for this value.
                   */
                  odd: string;
                  /**
                   * Suspended
                   * @description True if this odd is suspended.
                   */
                  suspended: boolean;
                  /**
                   * Value
                   * @description Bet outcome value, e.g., 'Over'.
                   */
                  value: string;
              }[];
          }[];
          /**
           * Status
           * @description In-play status flags.
           */
          status: {
              /**
               * Blocked
               * @description True if bets are temporarily blocked.
               */
              blocked: boolean;
              /**
               * Finished
               * @description True if fixture has ended or not started.
               */
              finished: boolean;
              /**
               * Stopped
               * @description True if the fixture is stopped.
               */
              stopped: boolean;
          };
          /**
           * Teams
           * @description Goals for home and away teams.
           */
          teams: {
              /**
               * Away
               * @description Away team goals and ID.
               */
              away: {
                  /**
                   * Goals
                   * @description Goals scored by team in live match.
                   * @default null
                   */
                  goals: number | null;
                  /**
                   * Id
                   * @description Team ID.
                   */
                  id: number;
              };
              /**
               * Home
               * @description Home team goals and ID.
               */
              home: {
                  /**
                   * Goals
                   * @description Goals scored by team in live match.
                   * @default null
                   */
                  goals: number | null;
                  /**
                   * Id
                   * @description Team ID.
                   */
                  id: number;
              };
          };
          /**
           * Update
           * @description Timestamp of last update.
           */
          update: string;
      }[];
      /**
       * Results
       * @description Number of live records returned.
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_ODDS_LIVE_BETS tool input.
 */
type API_SPORTS_GET_ODDS_LIVE_BETS_INPUT = {
  /**
   * Id
   * @description Bet ID to filter by.
   * @default null
   */
  id: number | null;
  /**
   * Search
   * @description Search term for bet name (min 3 characters).
   * @default null
   */
  search: string | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_ODDS_LIVE_BETS tool output.
 */
type API_SPORTS_GET_ODDS_LIVE_BETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages, if any.
       */
      errors: unknown[] | null;
      /**
       * Get
       * @description Endpoint called.
       */
      get: string;
      /**
       * Parameters
       * @description Echoed request parameters.
       */
      parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Response
       * @description List of available live bet types.
       */
      response: {
          /**
           * Id
           * @description Unique identifier for the bet type.
           */
          id: number;
          /**
           * Name
           * @description Name of the bet type.
           */
          name: string;
      }[];
      /**
       * Results
       * @description Number of bet types returned.
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_PLAYERS tool input.
 */
type API_SPORTS_GET_PLAYERS_INPUT = {
  /**
   * Id
   * @description Unique player ID to filter by
   * @default null
   */
  id: number | null;
  /**
   * League
   * @description League ID to filter players by
   * @default null
   */
  league: number | null;
  /**
   * Page
   * @description Page number for pagination
   * @default null
   */
  page: number | null;
  /**
   * Search
   * @description Search term for player name (min 3 chars)
   * @default null
   */
  search: string | null;
  /**
   * Season
   * @description Season year in YYYY format
   * @default null
   */
  season: number | null;
  /**
   * Team
   * @description Team ID to filter players by
   * @default null
   */
  team: number | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_PLAYERS tool output.
 */
type API_SPORTS_GET_PLAYERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API
       */
      errors: unknown[] | null;
      /**
       * Get
       * @description API endpoint called
       */
      get: string;
      /**
       * Paging
       * @description Pagination metadata
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      };
      /**
       * Parameters
       * @description Query parameters sent
       */
      parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Response
       * @description List of players and statistics
       */
      response: {
          /**
           * Player
           * @description Player personal information
           */
          player: {
              /**
               * Age
               * @description Age of the player in years
               */
              age: number;
              /**
               * Birth
               * @description Birth details of the player
               */
              birth: {
                  /**
                   * Country
                   * @description Birth country of the player
                   */
                  country: string;
                  /**
                   * Date
                   * @description Birth date of the player (YYYY-MM-DD)
                   */
                  date: string;
                  /**
                   * Place
                   * @description Birth place of the player
                   */
                  place: string;
              };
              /**
               * Firstname
               * @description First name of the player
               */
              firstname: string;
              /**
               * Height
               * @description Height of the player, e.g., '187 cm'
               */
              height: string;
              /**
               * Id
               * @description Player ID
               */
              id: number;
              /**
               * Injured
               * @description Whether the player is currently injured
               */
              injured: boolean;
              /**
               * Lastname
               * @description Last name of the player
               */
              lastname: string;
              /**
               * Name
               * @description Full name of the player
               */
              name: string;
              /**
               * Nationality
               * @description Nationality of the player
               */
              nationality: string;
              /**
               * Photo
               * @description URL to the player's photo
               */
              photo: string;
              /**
               * Weight
               * @description Weight of the player, e.g., '82 kg'
               */
              weight: string;
          };
          /**
           * Statistics
           * @description List of statistics entries
           */
          statistics: {
              /**
               * Cards
               * @description Card statistics
               */
              cards: {
                  /**
                   * Red
                   * @description Red cards received
                   * @default null
                   */
                  red: number | null;
                  /**
                   * Yellow
                   * @description Yellow cards received
                   * @default null
                   */
                  yellow: number | null;
                  /**
                   * Yellowred
                   * @description Second yellow cards (yellow-red)
                   * @default null
                   */
                  yellowred: number | null;
              };
              /**
               * Dribbles
               * @description Dribbling statistics
               */
              dribbles: {
                  /**
                   * Attempts
                   * @description Dribble attempts
                   * @default null
                   */
                  attempts: number | null;
                  /**
                   * Past
                   * @description Times dribbled past
                   * @default null
                   */
                  past: number | null;
                  /**
                   * Success
                   * @description Successful dribbles
                   * @default null
                   */
                  success: number | null;
              };
              /**
               * Duels
               * @description Duel statistics
               */
              duels: {
                  /**
                   * Total
                   * @description Total duels contested
                   * @default null
                   */
                  total: number | null;
                  /**
                   * Won
                   * @description Duels won
                   * @default null
                   */
                  won: number | null;
              };
              /**
               * Fouls
               * @description Foul statistics
               */
              fouls: {
                  /**
                   * Committed
                   * @description Fouls committed
                   * @default null
                   */
                  committed: number | null;
                  /**
                   * Drawn
                   * @description Fouls drawn
                   * @default null
                   */
                  drawn: number | null;
              };
              /**
               * Games
               * @description Game statistics
               */
              games: {
                  /**
                   * Appearances
                   * @description Number of games played
                   * @default null
                   */
                  appearances: number | null;
                  /**
                   * Captain
                   * @description Whether the player was captain
                   * @default null
                   */
                  captain: boolean | null;
                  /**
                   * Minutes
                   * @description Total minutes played
                   * @default null
                   */
                  minutes: number | null;
                  /**
                   * Position
                   * @description Position of the player
                   * @default null
                   */
                  position: string | null;
                  /**
                   * Rating
                   * @description Player rating
                   * @default null
                   */
                  rating: string | null;
              };
              /**
               * Goals
               * @description Goal statistics
               */
              goals: {
                  /**
                   * Assists
                   * @description Assists
                   * @default null
                   */
                  assists: number | null;
                  /**
                   * Conceded
                   * @description Goals conceded (if goalkeeper)
                   * @default null
                   */
                  conceded: number | null;
                  /**
                   * Saves
                   * @description Saves (if goalkeeper)
                   * @default null
                   */
                  saves: number | null;
                  /**
                   * Total
                   * @description Total goals scored
                   * @default null
                   */
                  total: number | null;
              };
              /**
               * League
               * @description League information
               */
              league: {
                  /**
                   * Country
                   * @description League country
                   */
                  country: string;
                  /**
                   * Flag
                   * @description URL to the league flag
                   * @default null
                   */
                  flag: string | null;
                  /**
                   * Id
                   * @description League ID
                   */
                  id: number;
                  /**
                   * Logo
                   * @description URL to the league logo
                   * @default null
                   */
                  logo: string | null;
                  /**
                   * Name
                   * @description League name
                   */
                  name: string;
                  /**
                   * Season
                   * @description Season year
                   */
                  season: number;
              };
              /**
               * Passes
               * @description Passing statistics
               */
              passes: {
                  /**
                   * Accuracy
                   * @description Pass accuracy percentage
                   * @default null
                   */
                  accuracy: number | null;
                  /**
                   * Key
                   * @description Key passes
                   * @default null
                   */
                  key: number | null;
                  /**
                   * Total
                   * @description Total passes attempted
                   * @default null
                   */
                  total: number | null;
              };
              /**
               * Penalty
               * @description Penalty statistics
               */
              penalty: {
                  /**
                   * Committed
                   * @description Penalties committed
                   * @default null
                   */
                  committed: number | null;
                  /**
                   * Missed
                   * @description Penalties missed
                   * @default null
                   */
                  missed: number | null;
                  /**
                   * Saved
                   * @description Penalties saved (if goalkeeper)
                   * @default null
                   */
                  saved: number | null;
                  /**
                   * Scored
                   * @description Penalties scored
                   * @default null
                   */
                  scored: number | null;
                  /**
                   * Won
                   * @description Penalties won
                   * @default null
                   */
                  won: number | null;
              };
              /**
               * Shots
               * @description Shooting statistics
               */
              shots: {
                  /**
                   * On
                   * @description Shots on target
                   * @default null
                   */
                  on: number | null;
                  /**
                   * Total
                   * @description Total shots attempted
                   * @default null
                   */
                  total: number | null;
              };
              /**
               * Tackles
               * @description Tackling statistics
               */
              tackles: {
                  /**
                   * Blocks
                   * @description Blocks made
                   * @default null
                   */
                  blocks: number | null;
                  /**
                   * Interceptions
                   * @description Interceptions made
                   * @default null
                   */
                  interceptions: number | null;
                  /**
                   * Total
                   * @description Total tackles made
                   * @default null
                   */
                  total: number | null;
              };
              /**
               * Team
               * @description Team information
               */
              team: {
                  /**
                   * Id
                   * @description Team ID
                   */
                  id: number;
                  /**
                   * Logo
                   * @description URL to the team logo
                   * @default null
                   */
                  logo: string | null;
                  /**
                   * Name
                   * @description Team name
                   */
                  name: string;
              };
          }[];
      }[];
      /**
       * Results
       * @description Number of results returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_PLAYERS_PROFILES tool input.
 */
type API_SPORTS_GET_PLAYERS_PROFILES_INPUT = {
  /**
   * Page
   * @description Page number for pagination (default 1)
   * @default 1
   */
  page: number | null;
  /**
   * Player
   * @description Filter by specific player ID
   * @default null
   */
  player: number | null;
  /**
   * Search
   * @description Search players by last name substring, at least 4 characters
   * @default null
   */
  search: string | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_PLAYERS_PROFILES tool output.
 */
type API_SPORTS_GET_PLAYERS_PROFILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Paging
       * @description Paging information with current and total pages
       */
      paging: {
          [key: string]: number;
      };
      /**
       * Response
       * @description List of player profiles
       */
      response: {
          [key: string]: unknown;
      }[];
      /**
       * Results
       * @description Number of results returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_PLAYERS_SEASONS tool input.
 */
type API_SPORTS_GET_PLAYERS_SEASONS_INPUT = {
  /**
   * Player
   * @description Player id to filter seasons by (optional)
   * @default null
   */
  player: number | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_PLAYERS_SEASONS tool output.
 */
type API_SPORTS_GET_PLAYERS_SEASONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API, if any
       */
      errors: unknown[];
      /**
       * Get
       * @description API endpoint called (should be 'players/seasons')
       */
      get: string;
      /**
       * Paging
       * @description Pagination details
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      };
      /**
       * Parameters
       * @description Echo of the request query parameters
       */
      parameters: unknown[];
      /**
       * Response
       * @description List of available seasons as 4-digit keys
       */
      response: number[];
      /**
       * Results
       * @description Number of seasons returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_PLAYERS_TEAMS tool input.
 */
type API_SPORTS_GET_PLAYERS_TEAMS_INPUT = {
  /**
   * Player
   * @description Unique ID of the player.
   */
  player?: number;
  /**
   * Season
   * @description Season year to filter results (e.g., 2020).
   * @default null
   */
  season: number | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_PLAYERS_TEAMS tool output.
 */
type API_SPORTS_GET_PLAYERS_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API, if any.
       */
      errors: unknown[];
      /**
       * Get
       * @description Endpoint that was called.
       */
      get: string;
      /**
       * Paging
       * @description Pagination details.
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      };
      /**
       * Parameters
       * @description Echo of request parameters.
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Response
       * @description List of teams and seasons for the player.
       */
      response: {
          /**
           * Seasons
           * @description List of seasons for the team.
           */
          seasons: number[];
          /**
           * Team
           * @description Team information.
           */
          team: {
              /**
               * Id
               * @description Team ID.
               */
              id: number;
              /**
               * Logo
               * @description URL to the team logo.
               */
              logo: string;
              /**
               * Name
               * @description Team name.
               */
              name: string;
          };
      }[];
      /**
       * Results
       * @description Number of results returned.
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_PLAYERS_TOP_ASSISTS tool input.
 */
type API_SPORTS_GET_PLAYERS_TOP_ASSISTS_INPUT = {
  /**
   * League
   * @description League ID to retrieve top assist players for
   */
  league?: number;
  /**
   * Page
   * @description Page number for pagination
   * @default null
   */
  page: number | null;
  /**
   * Season
   * @description Season year (e.g., 2023)
   */
  season?: number | null;
  /**
   * Team
   * @description Team ID to filter the top assists leaderboard
   * @default null
   */
  team: number | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_PLAYERS_TOP_ASSISTS tool output.
 */
type API_SPORTS_GET_PLAYERS_TOP_ASSISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors returned by the API, if any
       */
      errors: unknown[];
      /**
       * Get
       * @description API endpoint called
       */
      get: string;
      /**
       * Paging
       * @description Pagination information
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      };
      /**
       * Parameters
       * @description Echo of the request query parameters
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Response
       * @description List of top assist details per player
       */
      response: {
          /**
           * Player
           * @description Player details
           */
          player: {
              /**
               * Age
               * @description Age of the player in years
               */
              age: number;
              /**
               * Firstname
               * @description First name of the player
               */
              firstname: string;
              /**
               * Height
               * @description Height of the player, e.g., '187 cm'
               * @default null
               */
              height: string | null;
              /**
               * Id
               * @description Player ID
               */
              id: number;
              /**
               * Lastname
               * @description Last name of the player
               */
              lastname: string;
              /**
               * Name
               * @description Full name of the player
               */
              name: string;
              /**
               * Nationality
               * @description Player nationality
               */
              nationality: string;
              /**
               * Photo
               * @description URL to the player's photo
               */
              photo: string;
              /**
               * Weight
               * @description Weight of the player, e.g., '82 kg'
               * @default null
               */
              weight: string | null;
          };
          /**
           * Statistics
           * @description List of statistics entries per league/team
           */
          statistics: {
              /**
               * Games
               * @description Game statistics for this player in the given season/league
               */
              games: {
                  /**
                   * Captain
                   * @description Whether the player was captain
                   * @default null
                   */
                  captain: boolean | null;
                  /**
                   * Minutes
                   * @description Number of minutes played
                   * @default null
                   */
                  minutes: number | null;
                  /**
                   * Number
                   * @description Jersey number of the player
                   * @default null
                   */
                  number: number | null;
                  /**
                   * Position
                   * @description Player position, e.g., 'Midfielder'
                   * @default null
                   */
                  position: string | null;
                  /**
                   * Rating
                   * @description Player rating as string, e.g., '7.5'
                   * @default null
                   */
                  rating: string | null;
              };
              /**
               * Goals
               * @description Goal and assist statistics for this player
               */
              goals: {
                  /**
                   * Assists
                   * @description Total assists
                   * @default null
                   */
                  assists: number | null;
                  /**
                   * Conceded
                   * @description Goals conceded (if applicable)
                   * @default null
                   */
                  conceded: number | null;
                  /**
                   * Saves
                   * @description Number of saves (if goalkeeper)
                   * @default null
                   */
                  saves: number | null;
                  /**
                   * Total
                   * @description Total goals scored
                   * @default null
                   */
                  total: number | null;
              };
              /**
               * League
               * @description League details for this statistics entry
               */
              league: {
                  /**
                   * Country
                   * @description Country where the league is played
                   */
                  country: string;
                  /**
                   * Flag
                   * @description URL to the country flag image
                   */
                  flag: string;
                  /**
                   * Id
                   * @description League ID
                   */
                  id: number;
                  /**
                   * Logo
                   * @description URL to the league logo image
                   */
                  logo: string;
                  /**
                   * Name
                   * @description League name
                   */
                  name: string;
                  /**
                   * Season
                   * @description Season year
                   */
                  season: number;
              };
              /**
               * Team
               * @description Team details for this statistics entry
               */
              team: {
                  /**
                   * Id
                   * @description Team ID
                   */
                  id: number;
                  /**
                   * Logo
                   * @description URL to the team logo image
                   */
                  logo: string;
                  /**
                   * Name
                   * @description Team name
                   */
                  name: string;
              };
          }[];
      }[];
      /**
       * Results
       * @description Number of results returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_PLAYERS_TOP_SCORERS tool input.
 */
type API_SPORTS_GET_PLAYERS_TOP_SCORERS_INPUT = {
  /**
   * League
   * @description League ID to retrieve top scorers for
   */
  league?: number;
  /**
   * Page
   * @description Page number for pagination
   * @default null
   */
  page: number | null;
  /**
   * Season
   * @description Season year (e.g., 2023)
   */
  season?: number | null;
  /**
   * Team
   * @description Team ID to filter the top scorers leaderboard
   * @default null
   */
  team: number | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_PLAYERS_TOP_SCORERS tool output.
 */
type API_SPORTS_GET_PLAYERS_TOP_SCORERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API, if any
       */
      errors: unknown[] | null;
      /**
       * Get
       * @description API endpoint called
       */
      get: string;
      /**
       * Parameters
       * @description Echo of the request query parameters
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Response
       * @description List of top scorer details per player
       */
      response: {
          /**
           * Player
           * @description Player details
           */
          player: {
              /**
               * Age
               * @description Age of the player in years
               */
              age: number;
              /**
               * Firstname
               * @description First name of the player
               */
              firstname: string;
              /**
               * Height
               * @description Height of the player, e.g., '187 cm'
               * @default null
               */
              height: string | null;
              /**
               * Id
               * @description Player ID
               */
              id: number;
              /**
               * Lastname
               * @description Last name of the player
               */
              lastname: string;
              /**
               * Name
               * @description Full name of the player
               */
              name: string;
              /**
               * Nationality
               * @description Player nationality
               */
              nationality: string;
              /**
               * Photo
               * @description URL to the player's photo
               */
              photo: string;
              /**
               * Weight
               * @description Weight of the player, e.g., '82 kg'
               * @default null
               */
              weight: string | null;
          };
          /**
           * Statistics
           * @description List of statistics entries per league/team
           */
          statistics: {
              /**
               * Cards
               * @description Card statistics
               */
              cards: {
                  /**
                   * Red
                   * @description Number of red cards
                   * @default null
                   */
                  red: number | null;
                  /**
                   * Yellow
                   * @description Number of yellow cards
                   * @default null
                   */
                  yellow: number | null;
                  /**
                   * Yellowred
                   * @description Number of second yellow cards leading to red
                   * @default null
                   */
                  yellowred: number | null;
              };
              /**
               * Dribbles
               * @description Dribbling statistics
               */
              dribbles: {
                  /**
                   * Attempts
                   * @description Number of dribble attempts
                   * @default null
                   */
                  attempts: number | null;
                  /**
                   * Past
                   * @description Number of times dribbled past
                   * @default null
                   */
                  past: number | null;
                  /**
                   * Success
                   * @description Number of successful dribbles
                   * @default null
                   */
                  success: number | null;
              };
              /**
               * Duels
               * @description Duel statistics
               */
              duels: {
                  /**
                   * Total
                   * @description Number of duels
                   * @default null
                   */
                  total: number | null;
                  /**
                   * Won
                   * @description Number of duels won
                   * @default null
                   */
                  won: number | null;
              };
              /**
               * Fouls
               * @description Foul statistics
               */
              fouls: {
                  /**
                   * Committed
                   * @description Number of fouls committed
                   * @default null
                   */
                  committed: number | null;
                  /**
                   * Drawn
                   * @description Number of fouls drawn
                   * @default null
                   */
                  drawn: number | null;
              };
              /**
               * Games
               * @description Game statistics
               */
              games: {
                  /**
                   * Appearances
                   * @description Number of games played
                   * @default null
                   */
                  appearances: number | null;
                  /**
                   * Lineups
                   * @description Number of games in starting lineup
                   * @default null
                   */
                  lineups: number | null;
                  /**
                   * Minutes
                   * @description Total minutes played
                   * @default null
                   */
                  minutes: number | null;
              };
              /**
               * Goals
               * @description Goal statistics
               */
              goals: {
                  /**
                   * Assists
                   * @description Number of assists
                   * @default null
                   */
                  assists: number | null;
                  /**
                   * Conceded
                   * @description Number of goals conceded
                   * @default null
                   */
                  conceded: number | null;
                  /**
                   * Saves
                   * @description Number of saves (for goalkeepers)
                   * @default null
                   */
                  saves: number | null;
                  /**
                   * Total
                   * @description Total goals scored
                   * @default null
                   */
                  total: number | null;
              };
              /**
               * League
               * @description League details for this statistics entry
               */
              league: {
                  /**
                   * Country
                   * @description Country where the league is played
                   */
                  country: string;
                  /**
                   * Flag
                   * @description URL to the country flag image
                   */
                  flag: string;
                  /**
                   * Id
                   * @description League ID
                   */
                  id: number;
                  /**
                   * Logo
                   * @description URL to the league logo image
                   */
                  logo: string;
                  /**
                   * Name
                   * @description League name
                   */
                  name: string;
                  /**
                   * Season
                   * @description Season year
                   */
                  season: number;
              };
              /**
               * Passes
               * @description Passing statistics
               */
              passes: {
                  /**
                   * Accuracy
                   * @description Pass accuracy percentage
                   * @default null
                   */
                  accuracy: number | null;
                  /**
                   * Key
                   * @description Number of key passes
                   * @default null
                   */
                  key: number | null;
                  /**
                   * Total
                   * @description Number of passes
                   * @default null
                   */
                  total: number | null;
              };
              /**
               * Penalty
               * @description Penalty statistics
               */
              penalty: {
                  /**
                   * Commited
                   * @description Number of penalties committed
                   * @default null
                   */
                  commited: number | null;
                  /**
                   * Missed
                   * @description Number of penalties missed
                   * @default null
                   */
                  missed: number | null;
                  /**
                   * Saved
                   * @description Number of penalties saved
                   * @default null
                   */
                  saved: number | null;
                  /**
                   * Scored
                   * @description Number of penalties scored
                   * @default null
                   */
                  scored: number | null;
                  /**
                   * Won
                   * @description Number of penalties won
                   * @default null
                   */
                  won: number | null;
              };
              /**
               * Tackles
               * @description Tackling statistics
               */
              tackles: {
                  /**
                   * Blocks
                   * @description Number of blocks
                   * @default null
                   */
                  blocks: number | null;
                  /**
                   * Interceptions
                   * @description Number of interceptions
                   * @default null
                   */
                  interceptions: number | null;
                  /**
                   * Total
                   * @description Number of tackles
                   * @default null
                   */
                  total: number | null;
              };
              /**
               * Team
               * @description Team details for this statistics entry
               */
              team: {
                  /**
                   * Id
                   * @description Team ID
                   */
                  id: number;
                  /**
                   * Logo
                   * @description URL to the team logo image
                   */
                  logo: string;
                  /**
                   * Name
                   * @description Team name
                   */
                  name: string;
              };
          }[];
      }[];
      /**
       * Results
       * @description Number of results returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_PLAYERS_TOP_YELLOW_CARDS tool input.
 */
type API_SPORTS_GET_PLAYERS_TOP_YELLOW_CARDS_INPUT = {
  /**
   * League
   * @description League ID to retrieve top yellow card players for
   */
  league?: number;
  /**
   * Page
   * @description Page number for pagination
   * @default null
   */
  page: number | null;
  /**
   * Season
   * @description Season year (e.g., 2023)
   */
  season?: number | null;
  /**
   * Team
   * @description Team ID to filter the top yellow cards leaderboard
   * @default null
   */
  team: number | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_PLAYERS_TOP_YELLOW_CARDS tool output.
 */
type API_SPORTS_GET_PLAYERS_TOP_YELLOW_CARDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API, which could be a list or dict
       */
      errors: unknown;
      /**
       * Get
       * @description API endpoint called
       */
      get: string;
      /**
       * Paging
       * @description Pagination information
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      };
      /**
       * Parameters
       * @description Echo of the request query parameters
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Response
       * @description List of top yellow card details per player
       */
      response: {
          /**
           * Player
           * @description Player details
           */
          player: {
              /**
               * Age
               * @description Age of the player in years
               */
              age: number;
              /**
               * Firstname
               * @description First name of the player
               */
              firstname: string;
              /**
               * Height
               * @description Height of the player, e.g., '187 cm'
               * @default null
               */
              height: string | null;
              /**
               * Id
               * @description Player ID
               */
              id: number;
              /**
               * Lastname
               * @description Last name of the player
               */
              lastname: string;
              /**
               * Name
               * @description Full name of the player
               */
              name: string;
              /**
               * Nationality
               * @description Player nationality
               */
              nationality: string;
              /**
               * Photo
               * @description URL to the player's photo
               */
              photo: string;
              /**
               * Weight
               * @description Weight of the player, e.g., '82 kg'
               * @default null
               */
              weight: string | null;
          };
          /**
           * Statistics
           * @description List of statistics entries per league/team
           */
          statistics: {
              /**
               * Cards
               * @description Card statistics for this player
               */
              cards: {
                  /**
                   * Red
                   * @description Total red cards received
                   * @default null
                   */
                  red: number | null;
                  /**
                   * Yellow
                   * @description Total yellow cards received
                   * @default null
                   */
                  yellow: number | null;
              };
              /**
               * Games
               * @description Game statistics for this player in the given season/league
               */
              games: {
                  /**
                   * Captain
                   * @description Whether the player was captain
                   * @default null
                   */
                  captain: boolean | null;
                  /**
                   * Minutes
                   * @description Number of minutes played
                   * @default null
                   */
                  minutes: number | null;
                  /**
                   * Number
                   * @description Jersey number of the player
                   * @default null
                   */
                  number: number | null;
                  /**
                   * Position
                   * @description Player position, e.g., 'Midfielder'
                   * @default null
                   */
                  position: string | null;
                  /**
                   * Rating
                   * @description Player rating as string, e.g., '7.5'
                   * @default null
                   */
                  rating: string | null;
              };
              /**
               * League
               * @description League details for this statistics entry
               */
              league: {
                  /**
                   * Country
                   * @description Country where the league is played
                   */
                  country: string;
                  /**
                   * Flag
                   * @description URL to the country flag image
                   */
                  flag: string;
                  /**
                   * Id
                   * @description League ID
                   */
                  id: number;
                  /**
                   * Logo
                   * @description URL to the league logo image
                   */
                  logo: string;
                  /**
                   * Name
                   * @description League name
                   */
                  name: string;
                  /**
                   * Season
                   * @description Season year
                   */
                  season: number;
              };
              /**
               * Team
               * @description Team details for this statistics entry
               */
              team: {
                  /**
                   * Id
                   * @description Team ID
                   */
                  id: number;
                  /**
                   * Logo
                   * @description URL to the team logo image
                   */
                  logo: string;
                  /**
                   * Name
                   * @description Team name
                   */
                  name: string;
              };
          }[];
      }[];
      /**
       * Results
       * @description Number of results returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_PREDICTIONS tool input.
 */
type API_SPORTS_GET_PREDICTIONS_INPUT = {
  /**
   * Fixture
   * @description Fixture ID to retrieve predictions for
   */
  fixture?: number;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_PREDICTIONS tool output.
 */
type API_SPORTS_GET_PREDICTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List or dict of errors returned by API
       */
      errors: unknown[] | null;
      /**
       * Get
       * @description API method name called
       */
      get: string;
      /**
       * Paging
       * @description Pagination details
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      };
      /**
       * Parameters
       * @description Parameters sent in the request
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Response
       * @description List of predictions per fixture
       */
      response: {
          /**
           * Comparison
           * @description Comparison statistics as raw dict
           * @default null
           */
          comparison: {
              [key: string]: unknown;
          } | null;
          /**
           * H2H
           * @description Head-to-head fixtures list
           * @default null
           */
          h2h: {
              [key: string]: unknown;
          }[] | null;
          /**
           * League
           * @description League information for fixture
           */
          league: {
              /**
               * Country
               * @description Country where the league is played
               * @default null
               */
              country: string | null;
              /**
               * Flag
               * @description URL of the country flag
               * @default null
               */
              flag: string | null;
              /**
               * Id
               * @description League ID
               * @default null
               */
              id: number | null;
              /**
               * Logo
               * @description URL of the league logo
               * @default null
               */
              logo: string | null;
              /**
               * Name
               * @description League name
               * @default null
               */
              name: string | null;
              /**
               * Season
               * @description Season year
               * @default null
               */
              season: number | null;
          };
          /**
           * More Data
           * @description Additional raw data for further details
           */
          more_data: {
              [key: string]: unknown;
          };
          /**
           * Predictions
           * @description Core prediction data
           */
          predictions: {
              /**
               * Advice
               * @description Advice string summarizing prediction
               * @default null
               */
              advice: string | null;
              /**
               * Goals
               * @description Predicted goals line for each side
               */
              goals: {
                  /**
                   * Away
                   * @description Predicted goals for away team
                   * @default null
                   */
                  away: string | null;
                  /**
                   * Home
                   * @description Predicted goals for home team
                   * @default null
                   */
                  home: string | null;
              };
              /**
               * Percent
               * @description Probability percentages for outcomes
               */
              percent: {
                  /**
                   * Away
                   * @description Winning probability percentage for away team
                   * @default null
                   */
                  away: string | null;
                  /**
                   * Draw
                   * @description Draw probability percentage
                   * @default null
                   */
                  draw: string | null;
                  /**
                   * Home
                   * @description Winning probability percentage for home team
                   * @default null
                   */
                  home: string | null;
              };
              /**
               * Under Over
               * @description Under/Over goals line predicted
               * @default null
               */
              under_over: string | null;
              /**
               * Win Or Draw
               * @description True if prediction is win or draw combined
               * @default null
               */
              win_or_draw: boolean | null;
              /**
               * Winner
               * @description Winning prediction details
               */
              winner: {
                  /**
                   * Comment
                   * @description Additional comment about the prediction
                   * @default null
                   */
                  comment: string | null;
                  /**
                   * Id
                   * @description ID of predicted winner team
                   * @default null
                   */
                  id: number | null;
                  /**
                   * Name
                   * @description Name of the predicted winner team or result
                   * @default null
                   */
                  name: string | null;
              };
          };
          /**
           * Teams
           * @description Basic home/away team info
           */
          teams: {
              [key: string]: {
                  /**
                   * Id
                   * @description Team ID
                   */
                  id: number;
                  /**
                   * Logo
                   * @description URL of the team logo
                   * @default null
                   */
                  logo: string | null;
                  /**
                   * Name
                   * @description Team name
                   */
                  name: string;
              };
          };
      }[];
      /**
       * Results
       * @description Number of results returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_SIDELINED tool input.
 */
type API_SPORTS_GET_SIDELINED_INPUT = {
  /**
   * League
   * @description League ID to filter sidelined records.
   * @default null
   */
  league: number | null;
  /**
   * Player
   * @description Player ID to filter sidelined records.
   * @default null
   */
  player: number | null;
  /**
   * Season
   * @description Season year to filter sidelined records.
   * @default null
   */
  season: number | null;
  /**
   * Team
   * @description Team ID to filter sidelined records.
   * @default null
   */
  team: number | null;
  /**
   * Type
   * @description Type of sidelined record (e.g., 'injury', 'suspension').
   * @default null
   */
  type: string | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_SIDELINED tool output.
 */
type API_SPORTS_GET_SIDELINED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List or dict of error messages, if any
       */
      errors?: string[] | null;
      /**
       * Get
       * @description Endpoint called
       * @default null
       */
      get: string | null;
      /**
       * Paging
       * @description Paging information
       * @default null
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages or items
           */
          total: number;
      } | null;
      /**
       * Parameters
       * @description Parameters sent in the request
       * @default null
       */
      parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Response
       * @description List of sidelined records
       */
      response: {
          /**
           * End
           * @description Date sidelined ends or expected return
           * @default null
           */
          end: string | null;
          /**
           * League
           * @description League details
           */
          league: {
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Flag
               * @description League flag URL
               * @default null
               */
              flag: string | null;
              /**
               * Id
               * @description League ID
               */
              id: number;
              /**
               * Logo
               * @description League logo URL
               * @default null
               */
              logo: string | null;
              /**
               * Name
               * @description League name
               * @default null
               */
              name: string | null;
              /**
               * Season
               * @description Season year
               * @default null
               */
              season: number | null;
          };
          /**
           * Player
           * @description Player details
           */
          player: {
              /**
               * Id
               * @description Player ID
               */
              id: number;
              /**
               * Name
               * @description Player name
               */
              name: string;
              /**
               * Photo
               * @description Player photo URL
               * @default null
               */
              photo: string | null;
          };
          /**
           * Reason
           * @description Reason for sidelined
           * @default null
           */
          reason: string | null;
          /**
           * Start
           * @description Date sidelined began
           */
          start: string;
          /**
           * Team
           * @description Team details
           */
          team: {
              /**
               * Id
               * @description Team ID
               */
              id: number;
              /**
               * Logo
               * @description Team logo URL
               * @default null
               */
              logo: string | null;
              /**
               * Name
               * @description Team name
               */
              name: string;
          };
          /**
           * Type
           * @description Type of sidelined (e.g., 'injury', 'suspension')
           */
          type: string;
      }[];
      /**
       * Results
       * @description Total number of sidelined records returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_TEAMS tool input.
 */
type API_SPORTS_GET_TEAMS_INPUT = {
  /**
   * Code
   * @description Three-letter team code (e.g., 'MUN' for Manchester United).
   * @default null
   */
  code: string | null;
  /**
   * Country
   * @description Name of the country the team represents.
   * @default null
   */
  country: string | null;
  /**
   * Id
   * @description Unique identifier of the team.
   * @default null
   */
  id: number | null;
  /**
   * League
   * @description Unique identifier of the league to filter teams.
   * @default null
   */
  league: number | null;
  /**
   * Name
   * @description Name of the team.
   * @default null
   */
  name: string | null;
  /**
   * Search
   * @description Search term for team name (min length 3).
   * @default null
   */
  search: string | null;
  /**
   * Season
   * @description Season year (e.g., 2021).
   * @default null
   */
  season: number | null;
  /**
   * Venue
   * @description Unique identifier of the team's home venue.
   * @default null
   */
  venue: number | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_TEAMS tool output.
 */
type API_SPORTS_GET_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of error messages, if any
       */
      errors: unknown[];
      /**
       * Get
       * @description API endpoint called
       */
      get: string;
      /**
       * Paging
       * @description Pagination information
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      };
      /**
       * Parameters
       * @description Request query parameters
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Response
       * @description List of teams with their venue information
       */
      response: {
          /**
           * Team
           * @description Team details
           */
          team: {
              /**
               * Code
               * @description Team code
               * @default null
               */
              code: string | null;
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Founded
               * @description Year the team was founded
               * @default null
               */
              founded: number | null;
              /**
               * Id
               * @description Team ID
               */
              id: number;
              /**
               * Logo
               * @description URL to the team logo image
               * @default null
               */
              logo: string | null;
              /**
               * Name
               * @description Team name
               */
              name: string;
              /**
               * National
               * @description Whether the team is a national team
               * @default null
               */
              national: boolean | null;
          };
          /**
           * Venue
           * @description Home venue details for the team
           */
          venue: {
              /**
               * Address
               * @description Venue address
               * @default null
               */
              address: string | null;
              /**
               * Capacity
               * @description Venue capacity
               * @default null
               */
              capacity: number | null;
              /**
               * City
               * @description Venue city
               * @default null
               */
              city: string | null;
              /**
               * Id
               * @description Venue ID
               * @default null
               */
              id: number | null;
              /**
               * Image
               * @description URL to the venue image
               * @default null
               */
              image: string | null;
              /**
               * Name
               * @description Venue name
               * @default null
               */
              name: string | null;
              /**
               * Surface
               * @description Pitch surface type
               * @default null
               */
              surface: string | null;
          };
      }[];
      /**
       * Results
       * @description Number of teams returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_TEAMS_STATISTICS tool input.
 */
type API_SPORTS_GET_TEAMS_STATISTICS_INPUT = {
  /**
   * Date
   * @description Limit statistics up to a certain date (YYYY-MM-DD)
   * @default null
   */
  date: string | null;
  /**
   * From
   * @description Start date for filtering stats (YYYY-MM-DD)
   * @default null
   */
  from: string | null;
  /**
   * League
   * @description League ID for which to retrieve team statistics
   */
  league?: number;
  /**
   * Season
   * @description Season year of the league (e.g., 2022)
   */
  season?: number;
  /**
   * Team
   * @description Team ID for which to retrieve statistics
   */
  team?: number;
  /**
   * To
   * @description End date for filtering stats (YYYY-MM-DD)
   * @default null
   */
  to: string | null;
  /**
   * Venue
   * @description Filter statistics by venue: 'home' or 'away'
   * @default null
   * @enum {string|null}
   */
  venue: "home" | "away" | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_TEAMS_STATISTICS tool output.
 */
type API_SPORTS_GET_TEAMS_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API, if any
       */
      errors: unknown[] | null;
      /**
       * Get
       * @description API endpoint called, e.g., 'teams/statistics'
       */
      get: string;
      /**
       * Paging
       * @description Pagination information
       * @default null
       */
      paging: {
          [key: string]: unknown;
      } | null;
      /**
       * Parameters
       * @description Parameters sent in the request
       */
      parameters: {
          [key: string]: unknown;
      };
      /**
       * Response
       * @description Detailed statistics data for the requested team
       */
      response: {
          [key: string]: unknown;
      } | null;
      /**
       * Results
       * @description Number of results returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_TIMEZONE tool input.
 */
type API_SPORTS_GET_TIMEZONE_INPUT = object;

/**
 * Type of API_SPORTS's API_SPORTS_GET_TIMEZONE tool output.
 */
type API_SPORTS_GET_TIMEZONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Errors returned by the API, if any.
       */
      errors: unknown[];
      /**
       * Get
       * @description Name of the endpoint called (should be 'timezone').
       */
      get: string;
      /**
       * Paging
       * @description Paging information for the results.
       */
      paging: {
          /**
           * Current
           * @description Current page number.
           */
          current: number;
          /**
           * Total
           * @description Total number of pages.
           */
          total: number;
      };
      /**
       * Parameters
       * @description Parameters sent in the request.
       */
      parameters: unknown[];
      /**
       * Response
       * @description List of available timezone identifiers.
       */
      response: string[];
      /**
       * Results
       * @description Number of timezones returned.
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_TRANSFERS tool input.
 */
type API_SPORTS_GET_TRANSFERS_INPUT = {
  /**
   * Player
   * @description Player ID to filter transfers by (optional)
   * @default null
   */
  player: number | null;
  /**
   * Season
   * @description Season year to filter transfers by (optional)
   * @default null
   */
  season: number | null;
  /**
   * Team
   * @description Team ID to filter transfers by (optional)
   * @default null
   */
  team: number | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_TRANSFERS tool output.
 */
type API_SPORTS_GET_TRANSFERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description Error messages returned by the API, if any
       */
      errors: unknown;
      /**
       * Get
       * @description API endpoint called
       * @default null
       */
      get: string | null;
      /**
       * Paging
       * @description Pagination information
       * @default null
       */
      paging: {
          /**
           * Current
           * @description Current page number
           * @default null
           */
          current: number | null;
          /**
           * Total
           * @description Total number of pages or items
           * @default null
           */
          total: number | null;
      } | null;
      /**
       * Parameters
       * @description Request parameters sent to the API
       * @default null
       */
      parameters: unknown;
      /**
       * Response
       * @description List of transfer records
       */
      response: {
          /**
           * Player
           * @description Player details
           */
          player: {
              /**
               * Age
               * @description Player age
               * @default null
               */
              age: number | null;
              /**
               * Id
               * @description Player ID
               */
              id: number;
              /**
               * Name
               * @description Player name
               */
              name: string;
              /**
               * Nationality
               * @description Player nationality
               * @default null
               */
              nationality: string | null;
              /**
               * Photo
               * @description Player photo URL
               * @default null
               */
              photo: string | null;
          };
          /**
           * Transfers
           * @description List of transfer events for the player
           */
          transfers: {
              /**
               * Additional
               * @description Additional transfer info or notes
               * @default null
               */
              additional: string | null;
              /**
               * Date
               * @description Transfer date (YYYY-MM-DD)
               */
              date: string;
              /**
               * Teams
               * @description Teams involved in the transfer
               */
              teams: {
                  /**
                   * From
                   * @description Originating team
                   */
                  from: {
                      /**
                       * Id
                       * @description Team ID
                       */
                      id: number;
                      /**
                       * Logo
                       * @description Team logo URL
                       * @default null
                       */
                      logo: string | null;
                      /**
                       * Name
                       * @description Team name
                       */
                      name: string;
                  };
                  /**
                   * To
                   * @description Destination team
                   */
                  to: {
                      /**
                       * Id
                       * @description Team ID
                       */
                      id: number;
                      /**
                       * Logo
                       * @description Team logo URL
                       * @default null
                       */
                      logo: string | null;
                      /**
                       * Name
                       * @description Team name
                       */
                      name: string;
                  };
              };
              /**
               * Type
               * @description Transfer type, e.g., Loan, Free
               */
              type: string;
          }[];
      }[];
      /**
       * Results
       * @description Number of transfer records returned
       */
      results: number;
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
 * Type of API_SPORTS's API_SPORTS_GET_TROPHIES tool input.
 */
type API_SPORTS_GET_TROPHIES_INPUT = {
  /**
   * Coach
   * @description Coach ID to filter trophies by
   * @default null
   */
  coach: number | null;
  /**
   * Coachs
   * @description Dash-separated list of up to 20 coach IDs (e.g. '2-6-44')
   * @default null
   */
  coachs: string | null;
  /**
   * Player
   * @description Player ID to filter trophies by
   * @default null
   */
  player: number | null;
  /**
   * Players
   * @description Dash-separated list of up to 20 player IDs (e.g. '276-278')
   * @default null
   */
  players: string | null;
};

/**
 * Type of API_SPORTS's API_SPORTS_GET_TROPHIES tool output.
 */
type API_SPORTS_GET_TROPHIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Errors
       * @description List of errors, if any
       * @default []
       */
      errors: unknown[];
      /**
       * Get
       * @description API endpoint called
       * @default null
       */
      get: string | null;
      /**
       * Paging
       * @description Paging information, if any
       * @default null
       */
      paging: {
          /**
           * Current
           * @description Current page number
           */
          current: number;
          /**
           * Total
           * @description Total number of pages
           */
          total: number;
      } | null;
      /**
       * Parameters
       * @description Parameters sent in the request
       * @default null
       */
      parameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Response
       * @description List of trophy items
       */
      response: {
          /**
           * Country
           * @description Country or region of the competition
           */
          country: string;
          /**
           * League
           * @description Name of the competition or tournament
           */
          league: string;
          /**
           * Place
           * @description Result or position achieved (e.g., 'Winner')
           */
          place: string;
          /**
           * Season
           * @description Season or edition (e.g., 'Peru 2011')
           */
          season: string;
      }[];
      /**
       * Results
       * @description Total number of trophy records returned
       */
      results: number;
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
 * Type map of all available tool input types for toolkit "API_SPORTS".
 */
export type API_SPORTS_TOOL_INPUTS = {
  GET_COACHS: API_SPORTS_GET_COACHS_INPUT
  GET_COUNTRIES: API_SPORTS_GET_COUNTRIES_INPUT
  GET_FIXTURES: API_SPORTS_GET_FIXTURES_INPUT
  GET_FIXTURES_EVENTS: API_SPORTS_GET_FIXTURES_EVENTS_INPUT
  GET_FIXTURES_HEADTOHEAD: API_SPORTS_GET_FIXTURES_HEADTOHEAD_INPUT
  GET_FIXTURES_LINEUPS: API_SPORTS_GET_FIXTURES_LINEUPS_INPUT
  GET_FIXTURES_PLAYERS: API_SPORTS_GET_FIXTURES_PLAYERS_INPUT
  GET_FIXTURES_ROUNDS: API_SPORTS_GET_FIXTURES_ROUNDS_INPUT
  GET_FIXTURES_STATISTICS: API_SPORTS_GET_FIXTURES_STATISTICS_INPUT
  GET_INJURIES: API_SPORTS_GET_INJURIES_INPUT
  GET_LEAGUES: API_SPORTS_GET_LEAGUES_INPUT
  GET_LEAGUES_SEASONS: API_SPORTS_GET_LEAGUES_SEASONS_INPUT
  GET_ODDS: API_SPORTS_GET_ODDS_INPUT
  GET_ODDS_BETS: API_SPORTS_GET_ODDS_BETS_INPUT
  GET_ODDS_BOOKMAKERS: API_SPORTS_GET_ODDS_BOOKMAKERS_INPUT
  GET_ODDS_LIVE: API_SPORTS_GET_ODDS_LIVE_INPUT
  GET_ODDS_LIVE_BETS: API_SPORTS_GET_ODDS_LIVE_BETS_INPUT
  GET_PLAYERS: API_SPORTS_GET_PLAYERS_INPUT
  GET_PLAYERS_PROFILES: API_SPORTS_GET_PLAYERS_PROFILES_INPUT
  GET_PLAYERS_SEASONS: API_SPORTS_GET_PLAYERS_SEASONS_INPUT
  GET_PLAYERS_TEAMS: API_SPORTS_GET_PLAYERS_TEAMS_INPUT
  GET_PLAYERS_TOP_ASSISTS: API_SPORTS_GET_PLAYERS_TOP_ASSISTS_INPUT
  GET_PLAYERS_TOP_SCORERS: API_SPORTS_GET_PLAYERS_TOP_SCORERS_INPUT
  GET_PLAYERS_TOP_YELLOW_CARDS: API_SPORTS_GET_PLAYERS_TOP_YELLOW_CARDS_INPUT
  GET_PREDICTIONS: API_SPORTS_GET_PREDICTIONS_INPUT
  GET_SIDELINED: API_SPORTS_GET_SIDELINED_INPUT
  GET_TEAMS: API_SPORTS_GET_TEAMS_INPUT
  GET_TEAMS_STATISTICS: API_SPORTS_GET_TEAMS_STATISTICS_INPUT
  GET_TIMEZONE: API_SPORTS_GET_TIMEZONE_INPUT
  GET_TRANSFERS: API_SPORTS_GET_TRANSFERS_INPUT
  GET_TROPHIES: API_SPORTS_GET_TROPHIES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "API_SPORTS".
 */
export type API_SPORTS_TOOL_OUTPUTS = {
  GET_COACHS: API_SPORTS_GET_COACHS_OUTPUT
  GET_COUNTRIES: API_SPORTS_GET_COUNTRIES_OUTPUT
  GET_FIXTURES: API_SPORTS_GET_FIXTURES_OUTPUT
  GET_FIXTURES_EVENTS: API_SPORTS_GET_FIXTURES_EVENTS_OUTPUT
  GET_FIXTURES_HEADTOHEAD: API_SPORTS_GET_FIXTURES_HEADTOHEAD_OUTPUT
  GET_FIXTURES_LINEUPS: API_SPORTS_GET_FIXTURES_LINEUPS_OUTPUT
  GET_FIXTURES_PLAYERS: API_SPORTS_GET_FIXTURES_PLAYERS_OUTPUT
  GET_FIXTURES_ROUNDS: API_SPORTS_GET_FIXTURES_ROUNDS_OUTPUT
  GET_FIXTURES_STATISTICS: API_SPORTS_GET_FIXTURES_STATISTICS_OUTPUT
  GET_INJURIES: API_SPORTS_GET_INJURIES_OUTPUT
  GET_LEAGUES: API_SPORTS_GET_LEAGUES_OUTPUT
  GET_LEAGUES_SEASONS: API_SPORTS_GET_LEAGUES_SEASONS_OUTPUT
  GET_ODDS: API_SPORTS_GET_ODDS_OUTPUT
  GET_ODDS_BETS: API_SPORTS_GET_ODDS_BETS_OUTPUT
  GET_ODDS_BOOKMAKERS: API_SPORTS_GET_ODDS_BOOKMAKERS_OUTPUT
  GET_ODDS_LIVE: API_SPORTS_GET_ODDS_LIVE_OUTPUT
  GET_ODDS_LIVE_BETS: API_SPORTS_GET_ODDS_LIVE_BETS_OUTPUT
  GET_PLAYERS: API_SPORTS_GET_PLAYERS_OUTPUT
  GET_PLAYERS_PROFILES: API_SPORTS_GET_PLAYERS_PROFILES_OUTPUT
  GET_PLAYERS_SEASONS: API_SPORTS_GET_PLAYERS_SEASONS_OUTPUT
  GET_PLAYERS_TEAMS: API_SPORTS_GET_PLAYERS_TEAMS_OUTPUT
  GET_PLAYERS_TOP_ASSISTS: API_SPORTS_GET_PLAYERS_TOP_ASSISTS_OUTPUT
  GET_PLAYERS_TOP_SCORERS: API_SPORTS_GET_PLAYERS_TOP_SCORERS_OUTPUT
  GET_PLAYERS_TOP_YELLOW_CARDS: API_SPORTS_GET_PLAYERS_TOP_YELLOW_CARDS_OUTPUT
  GET_PREDICTIONS: API_SPORTS_GET_PREDICTIONS_OUTPUT
  GET_SIDELINED: API_SPORTS_GET_SIDELINED_OUTPUT
  GET_TEAMS: API_SPORTS_GET_TEAMS_OUTPUT
  GET_TEAMS_STATISTICS: API_SPORTS_GET_TEAMS_STATISTICS_OUTPUT
  GET_TIMEZONE: API_SPORTS_GET_TIMEZONE_OUTPUT
  GET_TRANSFERS: API_SPORTS_GET_TRANSFERS_OUTPUT
  GET_TROPHIES: API_SPORTS_GET_TROPHIES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's API_SPORTS toolkit.
 */
export const API_SPORTS = {
  slug: "api_sports",
  tools: {
    /**
     * Tool to fetch coaches and their career history. use when you need coach info by id, team filter, or name search.
     */
    GET_COACHS: "API_SPORTS_GET_COACHS",
    /**
     * Tool to fetch available countries for league queries. use when filtering by name, code, or search string before retrieving leagues.
     */
    GET_COUNTRIES: "API_SPORTS_GET_COUNTRIES",
    /**
     * Tool to retrieve football fixtures/matches. use when filtering fixtures by id, date, league, season, team, or date ranges to get upcoming or past matches.
     */
    GET_FIXTURES: "API_SPORTS_GET_FIXTURES",
    /**
     * Tool to get events (goals, cards, substitutions, var, etc.) from a fixture. use when you need detailed event data after confirming the fixture id.
     */
    GET_FIXTURES_EVENTS: "API_SPORTS_GET_FIXTURES_EVENTS",
    /**
     * Tool to get head-to-head fixtures between two teams. use after determining team ids to compare their direct match history.
     */
    GET_FIXTURES_HEADTOHEAD: "API_SPORTS_GET_FIXTURES_HEADTOHEAD",
    /**
     * Tool to retrieve starting xi and substitutes for a fixture. use after confirming fixture id; optionally filter by team, player, or section (startxi/substitutes). lineups appear ~20-40 minutes before kickoff for supported competitions.
     */
    GET_FIXTURES_LINEUPS: "API_SPORTS_GET_FIXTURES_LINEUPS",
    /**
     * Tool to get player statistics from a fixture. use when you need detailed per-player stats for a specific match. optionally filter by team.
     */
    GET_FIXTURES_PLAYERS: "API_SPORTS_GET_FIXTURES_PLAYERS",
    /**
     * Tool to get the rounds for a league or cup. use after confirming league and season to retrieve available round identifiers (optionally with dates) for filtering fixtures.
     */
    GET_FIXTURES_ROUNDS: "API_SPORTS_GET_FIXTURES_ROUNDS",
    /**
     * Tool to get statistics for a fixture. use when you need detailed match stats (shots, fouls, possession, cards, passes, etc.), optionally filtered by team, statistic type, or including halftime data.
     */
    GET_FIXTURES_STATISTICS: "API_SPORTS_GET_FIXTURES_STATISTICS",
    /**
     * Tool to get injured or suspended players. use when you need a list of sidelined players filtered by league, season, fixture, team, player, date, ids, or timezone.
     */
    GET_INJURIES: "API_SPORTS_GET_INJURIES",
    /**
     * Tool to retrieve leagues and cups. use when filtering competitions by id, name, country, code, season, team, type, current, search, or last.
     */
    GET_LEAGUES: "API_SPORTS_GET_LEAGUES",
    /**
     * Tool to get the list of available seasons for all leagues. use when you need season filters for other league endpoints.
     */
    GET_LEAGUES_SEASONS: "API_SPORTS_GET_LEAGUES_SEASONS",
    /**
     * Tool to fetch pre-match odds. use when you need odds filterable by fixture, league, season, date, timezone, bookmaker, bet, or to navigate pages.
     */
    GET_ODDS: "API_SPORTS_GET_ODDS",
    /**
     * Tool to get all available pre-match bet types. use when filtering by bet id or searching bet names before fetching odds.
     */
    GET_ODDS_BETS: "API_SPORTS_GET_ODDS_BETS",
    /**
     * Tool to list all available pre-match bookmakers. use when you need to discover or filter bookmakers before fetching odds.
     */
    GET_ODDS_BOOKMAKERS: "API_SPORTS_GET_ODDS_BOOKMAKERS",
    /**
     * Tool to fetch in-play odds for fixtures in progress. use during live matches to get in-play odds.
     */
    GET_ODDS_LIVE: "API_SPORTS_GET_ODDS_LIVE",
    /**
     * Tool to fetch all available bet types for in-play odds. use when you need to retrieve bet ids or names (optionally filtering by id or search) before fetching live odds.
     */
    GET_ODDS_LIVE_BETS: "API_SPORTS_GET_ODDS_LIVE_BETS",
    /**
     * Tool to get player statistics. use when fetching players by id, team, league, season, search, or pagination.
     */
    GET_PLAYERS: "API_SPORTS_GET_PLAYERS",
    /**
     * Tool to get the list of all available players. use when you need player profiles optionally filtered by id, name search, or page.
     */
    GET_PLAYERS_PROFILES: "API_SPORTS_GET_PLAYERS_PROFILES",
    /**
     * Tool to list all available seasons for player statistics. use when building a player statistics query, optionally filtering by a specific player id.
     */
    GET_PLAYERS_SEASONS: "API_SPORTS_GET_PLAYERS_SEASONS",
    /**
     * Tool to get the list of teams and seasons in which a player played during his career. use after confirming the player id to retrieve club history.
     */
    GET_PLAYERS_TEAMS: "API_SPORTS_GET_PLAYERS_TEAMS",
    /**
     * Tool to get the 20 best players (top assists) for a league or cup. use after confirming league and season.
     */
    GET_PLAYERS_TOP_ASSISTS: "API_SPORTS_GET_PLAYERS_TOP_ASSISTS",
    /**
     * Tool to get the 20 best players (top scorers) for a league or cup. use after confirming league and season.
     */
    GET_PLAYERS_TOP_SCORERS: "API_SPORTS_GET_PLAYERS_TOP_SCORERS",
    /**
     * Tool to get the 20 players with the most yellow cards for a league or cup. use after confirming league and season.
     */
    GET_PLAYERS_TOP_YELLOW_CARDS: "API_SPORTS_GET_PLAYERS_TOP_YELLOW_CARDS",
    /**
     * Tool to get predictions about a fixture. use when you need calculated predictions for a given fixture id.
     */
    GET_PREDICTIONS: "API_SPORTS_GET_PREDICTIONS",
    /**
     * Tool to get sidelined information (injuries, suspensions, etc.). use when you need current sidelined records filtered by league, season, team, player, or type.
     */
    GET_SIDELINED: "API_SPORTS_GET_SIDELINED",
    /**
     * Tool to retrieve available teams. use when filtering teams by id, name, league, season, country, code, venue, or search before fetching detailed team data.
     */
    GET_TEAMS: "API_SPORTS_GET_TEAMS",
    /**
     * Tool to get detailed statistics of a team for a given league and season. use after confirming league, season, and team id.
     */
    GET_TEAMS_STATISTICS: "API_SPORTS_GET_TEAMS_STATISTICS",
    /**
     * Tool to fetch the complete list of available timezones for fixture queries. use when you need valid timezone identifiers (e.g., 'europe/london') before calling fixtures endpoints.
     */
    GET_TIMEZONE: "API_SPORTS_GET_TIMEZONE",
    /**
     * Tool to get all available transfers for players and teams. use when you need transfer history filtered by player or team.
     */
    GET_TRANSFERS: "API_SPORTS_GET_TRANSFERS",
    /**
     * Tool to get trophies for a player or coach. use when you need to list honors filtered by player(s) or coach(es).
     */
    GET_TROPHIES: "API_SPORTS_GET_TROPHIES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "API_SPORTS".
 */
export type API_SPORTS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "API_SPORTS".
 */
export type API_SPORTS_TRIGGER_EVENTS = {}
