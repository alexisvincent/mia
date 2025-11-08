// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_ADVANCED_BOX_SCORE tool input.
 */
type COLLEGE_FOOTBALL_DATA_ADVANCED_BOX_SCORE_INPUT = {
  /**
   * Game Id
   * @description Game ID filter for the single game to return
   */
  gameId?: number;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_ADVANCED_BOX_SCORE tool output.
 */
type COLLEGE_FOOTBALL_DATA_ADVANCED_BOX_SCORE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Game Id
       * @description Game identifier (sometimes labeled as 'id')
       * @default null
       */
      gameId: number | null;
      /**
       * Id
       * @description Unique identifier for the game (alias: gameId)
       * @default null
       */
      id: number | null;
      /**
       * Players
       * @description Player-level advanced metrics object (e.g., contains 'ppa' list)
       * @default null
       */
      players: {
          [key: string]: unknown;
      } | null;
      /**
       * Season
       * @description Season year of the game
       * @default null
       */
      season: number | null;
      /**
       * Teams
       * @description Advanced team metrics list for home and away teams
       */
      teams: {
          [key: string]: unknown;
      }[];
      /**
       * Week
       * @description Week number of the game in the season
       * @default null
       */
      week: number | null;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_ADVANCED_GAME_STATS tool input.
 */
type COLLEGE_FOOTBALL_DATA_ADVANCED_GAME_STATS_INPUT = {
  /**
   * Exclude Garbage Time
   * @description Exclude garbage time from calculations.
   * @default null
   */
  excludeGarbageTime: boolean | null;
  /**
   * Opponent
   * @description Opponent filter by school name or abbreviation.
   * @default null
   */
  opponent: string | null;
  /**
   * Season Type
   * @description Season type filter: 'regular', 'postseason', or 'both'.
   * @default null
   * @enum {string|null}
   */
  seasonType: "regular" | "postseason" | "both" | null;
  /**
   * Team
   * @description Team filter by school name or abbreviation.
   * @default null
   */
  team: string | null;
  /**
   * Week
   * @description Week number to filter games (e.g., 1–18).
   * @default null
   */
  week: number | null;
  /**
   * Year
   * @description Season year to filter games (e.g., 2025).
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_ADVANCED_GAME_STATS tool output.
 */
type COLLEGE_FOOTBALL_DATA_ADVANCED_GAME_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Defense
       * @description Advanced defensive metrics sub-object, including success rates, explosiveness, havoc allowed, and situational breakdowns.
       */
      defense: {
          [key: string]: number;
      };
      /**
       * Game Id
       * @description Unique game identifier.
       */
      gameId: number;
      /**
       * Offense
       * @description Advanced offensive metrics sub-object, including success rates, explosiveness, havoc, and situational breakdowns.
       */
      offense: {
          [key: string]: number;
      };
      /**
       * Opponent
       * @description Opponent team name or abbreviation.
       */
      opponent: string;
      /**
       * Season
       * @description Season year.
       */
      season: number;
      /**
       * Season Type
       * @description Season type (regular or postseason).
       */
      seasonType: string;
      /**
       * Team
       * @description Team name or abbreviation.
       */
      team: string;
      /**
       * Week
       * @description Week number of the season.
       */
      week: number;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_ADVANCED_SEASON_STATS_TEAM tool input.
 */
type COLLEGE_FOOTBALL_DATA_ADVANCED_SEASON_STATS_TEAM_INPUT = {
  /**
   * End Week
   * @description Ending week filter.
   * @default null
   */
  endWeek: number | null;
  /**
   * Exclude Garbage Time
   * @description Exclude garbage time from calculations.
   * @default null
   */
  excludeGarbageTime: boolean | null;
  /**
   * Start Week
   * @description Starting week filter.
   * @default null
   */
  startWeek: number | null;
  /**
   * Team
   * @description Team filter by school name.
   * @default null
   */
  team: string | null;
  /**
   * Year
   * @description Year filter for the season.
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_ADVANCED_SEASON_STATS_TEAM tool output.
 */
type COLLEGE_FOOTBALL_DATA_ADVANCED_SEASON_STATS_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Root
       * @description List of advanced season stats by team.
       */
      root: {
          /**
           * Conference
           * @description Team's conference.
           */
          conference: string;
          /**
           * Offense
           * @description Nested offensive advanced metrics.
           */
          offense: {
              /**
               * Field Position
               * @description Field-position metrics key/value pairs.
               */
              fieldPosition: {
                  [key: string]: number;
              };
              /**
               * Rushing Plays
               * @description Rushing play metrics key/value pairs.
               */
              rushingPlays: {
                  [key: string]: number;
              };
              /**
               * Standard Downs
               * @description Standard-down metrics key/value pairs.
               */
              standardDowns: {
                  [key: string]: number;
              };
          };
          /**
           * Season
           * @description Season year of these stats.
           */
          season: number;
          /**
           * Team
           * @description Team name.
           */
          team: string;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_BETTING_LINES tool input.
 */
type COLLEGE_FOOTBALL_DATA_BETTING_LINES_INPUT = {
  /**
   * Away
   * @description Filter by away team name (full name or abbreviation).
   * @default null
   */
  away: string | null;
  /**
   * Conference
   * @description Filter by conference abbreviation (e.g., SEC).
   * @default null
   */
  conference: string | null;
  /**
   * Game Id
   * @description Filter by specific game ID.
   * @default null
   */
  gameId: number | null;
  /**
   * Home
   * @description Filter by home team name (full name or abbreviation).
   * @default null
   */
  home: string | null;
  /**
   * Season Type
   * @description Season type filter (regular or postseason).
   * @default null
   * @enum {string|null}
   */
  seasonType: "regular" | "postseason" | null;
  /**
   * Team
   * @description Filter by team name (full name or abbreviation).
   * @default null
   */
  team: string | null;
  /**
   * Week
   * @description Week number within the season.
   * @default null
   */
  week: number | null;
  /**
   * Year
   * @description Season year filter (e.g., 2025).
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_BETTING_LINES tool output.
 */
type COLLEGE_FOOTBALL_DATA_BETTING_LINES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Away Team
       * @description Away team name.
       */
      away_team: string;
      /**
       * Home Team
       * @description Home team name.
       */
      home_team: string;
      /**
       * Lines
       * @description List of line snapshots for this game.
       */
      lines: {
          /**
           * Away Moneyline
           * @description Moneyline for away team.
           * @default null
           */
          away_moneyline: number | null;
          /**
           * Formatted Spread
           * @description Human-readable spread (e.g., '-7.5').
           */
          formatted_spread: string;
          /**
           * Home Moneyline
           * @description Moneyline for home team.
           * @default null
           */
          home_moneyline: number | null;
          /**
           * Over Under
           * @description Current over/under total.
           * @default null
           */
          over_under: number | null;
          /**
           * Over Under Open
           * @description Opening over/under total.
           * @default null
           */
          over_under_open: number | null;
          /**
           * Provider
           * @description Line provider name (e.g., consensus).
           */
          provider: string;
          /**
           * Spread
           * @description Current spread value as a number.
           * @default null
           */
          spread: number | null;
          /**
           * Spread Open
           * @description Opening spread value.
           * @default null
           */
          spread_open: number | null;
      }[];
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_COMPOSITE_TEAM_TALENT tool input.
 */
type COLLEGE_FOOTBALL_DATA_COMPOSITE_TEAM_TALENT_INPUT = {
  /**
   * Year
   * @description Season year to filter data (e.g., 2025). If omitted, returns all available seasons (since 2015).
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_COMPOSITE_TEAM_TALENT tool output.
 */
type COLLEGE_FOOTBALL_DATA_COMPOSITE_TEAM_TALENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Talent
       * @description 247Sports composite team talent ranking.
       */
      talent: number;
      /**
       * Team
       * @description Team metadata.
       */
      team: {
          /**
           * Abbreviation
           * @description Team abbreviation.
           */
          abbreviation: string;
          /**
           * Classification
           * @description Program classification (e.g., FBS/FCS).
           * @default null
           */
          classification: string | null;
          /**
           * Conference
           * @description Conference name or abbreviation.
           * @default null
           */
          conference: string | null;
          /**
           * Conference Id
           * @description Conference identifier.
           * @default null
           */
          conferenceId: number | null;
          /**
           * Division
           * @description Division name (if applicable).
           * @default null
           */
          division: string | null;
          /**
           * School
           * @description Team school name.
           */
          school: string;
          /**
           * Team Id
           * @description Internal team identifier.
           */
          teamId: number;
      };
      /**
       * Year
       * @description Season year.
       */
      year: number;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_CONFERENCE_MEMBERSHIPS_HISTORY tool input.
 */
type COLLEGE_FOOTBALL_DATA_CONFERENCE_MEMBERSHIPS_HISTORY_INPUT = {
  /**
   * Conference
   * @description Filter by conference abbreviation, e.g., 'SEC'
   * @default null
   */
  conference: string | null;
  /**
   * End Year
   * @description Filter memberships up to this year (>=startYear)
   * @default null
   */
  endYear: number | null;
  /**
   * Start Year
   * @description Filter memberships starting from this year (>=1869)
   * @default null
   */
  startYear: number | null;
  /**
   * Team
   * @description Filter by school/team name, e.g., 'Alabama'
   * @default null
   */
  team: string | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_CONFERENCE_MEMBERSHIPS_HISTORY tool output.
 */
type COLLEGE_FOOTBALL_DATA_CONFERENCE_MEMBERSHIPS_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Memberships
       * @description List of membership history records
       */
      memberships: {
          /**
           * Conference
           * @description Conference abbreviation
           */
          conference: string;
          /**
           * Division
           * @description Division code, e.g., 'FBS' or 'FCS'
           * @default null
           */
          division: string | null;
          /**
           * End Year
           * @description Year membership ended (null if ongoing)
           * @default null
           */
          endYear: number | null;
          /**
           * Start Year
           * @description Year membership started (if known)
           * @default null
           */
          startYear: number | null;
          /**
           * Team
           * @description Team/school name
           */
          team: string;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_DIVISIONS_BY_CONFERENCE tool input.
 */
type COLLEGE_FOOTBALL_DATA_DIVISIONS_BY_CONFERENCE_INPUT = {
  /**
   * Year
   * @description Filter divisions active in the given season year (YYYY)
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_DIVISIONS_BY_CONFERENCE tool output.
 */
type COLLEGE_FOOTBALL_DATA_DIVISIONS_BY_CONFERENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Divisions
       * @description List of conference divisions with metadata
       */
      divisions: {
          /**
           * Conference
           * @description Name of the conference
           */
          conference: string;
          /**
           * Division
           * @description Name of the division within the conference
           */
          division: string;
          /**
           * First Year
           * @description First year the division was active
           * @default null
           */
          firstYear: number | null;
          /**
           * Last Year
           * @description Last year the division was active, if applicable
           * @default null
           */
          lastYear: number | null;
          /**
           * Tier
           * @description Classification tier (e.g., 'fbs' or 'fcs')
           * @default null
           */
          tier: string | null;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_GET_DRIVE_DATA tool input.
 */
type COLLEGE_FOOTBALL_DATA_GET_DRIVE_DATA_INPUT = {
  /**
   * Conference
   * @description Conference filter by conference abbreviation
   * @default null
   */
  conference: string | null;
  /**
   * Defense
   * @description Defensive team filter by school name or abbreviation
   * @default null
   */
  defense: string | null;
  /**
   * Defense Conference
   * @description Defensive conference filter by conference abbreviation
   * @default null
   */
  defenseConference: string | null;
  /**
   * Offense
   * @description Offensive team filter by school name or abbreviation
   * @default null
   */
  offense: string | null;
  /**
   * Offense Conference
   * @description Offensive conference filter by conference abbreviation
   * @default null
   */
  offenseConference: string | null;
  /**
   * Season Type
   * @description Season type filter: 'regular' or 'postseason'
   * @default null
   * @enum {string|null}
   */
  seasonType: "regular" | "postseason" | null;
  /**
   * Team
   * @description Team filter by school name or abbreviation
   * @default null
   */
  team: string | null;
  /**
   * Week
   * @description Week number filter within the season
   * @default null
   */
  week: number | null;
  /**
   * Year
   * @description Season year to filter drives (e.g., 2025)
   */
  year?: number;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_GET_DRIVE_DATA tool output.
 */
type COLLEGE_FOOTBALL_DATA_GET_DRIVE_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Defense
       * @description Defensive team on the drive
       */
      defense: string;
      /**
       * Defense Conference
       * @description Conference of the defensive team
       */
      defenseConference: string;
      /**
       * Drive Id
       * @description Unique identifier for the drive
       */
      driveId: number;
      /**
       * End Time
       * Format: date-time
       * @description Drive end time (ISO 8601)
       */
      endTime: string;
      /**
       * End Type
       * @description Type of drive end (e.g., touchdown, punt)
       */
      endType: string;
      /**
       * End Yard Line
       * @description Yard line where the drive ended
       */
      endYardLine: number;
      /**
       * Game Id
       * @description Identifier for the game containing the drive
       */
      gameId: number;
      /**
       * Number
       * @description Sequential drive number in the game
       */
      number: number;
      /**
       * Offense
       * @description Offensive team on the drive
       */
      offense: string;
      /**
       * Offense Conference
       * @description Conference of the offensive team
       */
      offenseConference: string;
      /**
       * Period
       * @description Period number of the drive within the game
       */
      period: number;
      /**
       * Plays
       * @description Number of plays in the drive
       */
      plays: number;
      /**
       * Points
       * @description Points scored on the drive
       */
      points: number;
      /**
       * Result
       * @description Result of the drive (e.g., 'Touchdown')
       */
      result: string;
      /**
       * Seconds
       * @description Duration of the drive in seconds
       */
      seconds: number;
      /**
       * Start Time
       * Format: date-time
       * @description Drive start time (ISO 8601)
       */
      startTime: string;
      /**
       * Start Type
       * @description Type of drive start (e.g., kickoff, turnover)
       */
      startType: string;
      /**
       * Start Yard Line
       * @description Yard line where the drive started
       */
      startYardLine: number;
      /**
       * Yards
       * @description Total yards gained in the drive
       */
      yards: number;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_GET_GAMES_AND_RESULTS tool input.
 */
type COLLEGE_FOOTBALL_DATA_GET_GAMES_AND_RESULTS_INPUT = {
  /**
   * Away
   * @description Away team filter by school name.
   * @default null
   */
  away: string | null;
  /**
   * Conference
   * @description Conference abbreviation filter.
   * @default null
   */
  conference: string | null;
  /**
   * Home
   * @description Home team filter by school name.
   * @default null
   */
  home: string | null;
  /**
   * Id
   * @description Single game filter by unique game ID.
   * @default null
   */
  id: number | null;
  /**
   * Season Type
   * @description Season segment; e.g., regular or postseason.
   * @default null
   * @enum {string|null}
   */
  seasonType: "regular" | "postseason" | null;
  /**
   * Team
   * @description Team filter by school name.
   * @default null
   */
  team: string | null;
  /**
   * Week
   * @description Week filter within the season.
   * @default null
   */
  week: number | null;
  /**
   * Year
   * @description Year/season filter for games.
   */
  year?: number;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_GET_GAMES_AND_RESULTS tool output.
 */
type COLLEGE_FOOTBALL_DATA_GET_GAMES_AND_RESULTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Games
       * @description List of games and results matching the query.
       */
      games: {
          /**
           * Attendance
           * @description Reported attendance.
           * @default null
           */
          attendance: number | null;
          /**
           * Away Conference
           * @description Away team conference.
           * @default null
           */
          awayConference: string | null;
          /**
           * Away Id
           * @description Away team unique identifier.
           */
          awayId: number;
          /**
           * Away Line Scores
           * @description Away team scoring by period.
           * @default null
           */
          awayLineScores: number[] | null;
          /**
           * Away Points
           * @description Final points for the away team.
           * @default null
           */
          awayPoints: number | null;
          /**
           * Away Post Win Prob
           * @description Post-game win probability for the away team.
           * @default null
           */
          awayPostWinProb: number | null;
          /**
           * Away Postgame Elo
           * @description Postgame Elo rating for the away team.
           * @default null
           */
          awayPostgameElo: number | null;
          /**
           * Away Pregame Elo
           * @description Pregame Elo rating for the away team.
           * @default null
           */
          awayPregameElo: number | null;
          /**
           * Away Team
           * @description Away team name.
           */
          awayTeam: string;
          /**
           * Conference Game
           * @description True if it is a conference game.
           */
          conferenceGame: boolean;
          /**
           * Excitement Index
           * @description Excitement index for the game.
           * @default null
           */
          excitementIndex: number | null;
          /**
           * Home Conference
           * @description Home team conference.
           * @default null
           */
          homeConference: string | null;
          /**
           * Home Id
           * @description Home team unique identifier.
           */
          homeId: number;
          /**
           * Home Line Scores
           * @description Home team scoring by period.
           * @default null
           */
          homeLineScores: number[] | null;
          /**
           * Home Points
           * @description Final points for the home team.
           * @default null
           */
          homePoints: number | null;
          /**
           * Home Post Win Prob
           * @description Post-game win probability for the home team.
           * @default null
           */
          homePostWinProb: number | null;
          /**
           * Home Postgame Elo
           * @description Postgame Elo rating for the home team.
           * @default null
           */
          homePostgameElo: number | null;
          /**
           * Home Pregame Elo
           * @description Pregame Elo rating for the home team.
           * @default null
           */
          homePregameElo: number | null;
          /**
           * Home Team
           * @description Home team name.
           */
          homeTeam: string;
          /**
           * Id
           * @description Unique game identifier.
           */
          id: number;
          /**
           * Neutral Site
           * @description True if played at a neutral site.
           */
          neutralSite: boolean;
          /**
           * Notes
           * @description Additional game notes.
           * @default null
           */
          notes: string | null;
          /**
           * Season
           * @description Season year.
           */
          season: number;
          /**
           * Season Type
           * @description Season segment (e.g., regular, postseason).
           */
          seasonType: string;
          /**
           * Start Date
           * @description Scheduled start date/time, ISO 8601 format.
           */
          startDate: string;
          /**
           * Start Time Tbd
           * @description Flag indicating start time to be determined.
           */
          startTimeTBD: boolean;
          /**
           * Venue
           * @description Venue or stadium name.
           * @default null
           */
          venue: string | null;
          /**
           * Venue Id
           * @description Venue identifier.
           * @default null
           */
          venueId: number | null;
          /**
           * Week
           * @description Week number.
           */
          week: number;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_GET_GAME_MEDIA tool input.
 */
type COLLEGE_FOOTBALL_DATA_GET_GAME_MEDIA_INPUT = {
  /**
   * Conference
   * @description Conference abbreviation
   * @default null
   */
  conference: string | null;
  /**
   * Media Type
   * @description Media outlet type to filter on (tv, radio, web, ppv, or mobile)
   * @default null
   * @enum {string|null}
   */
  mediaType: "tv" | "radio" | "web" | "ppv" | "mobile" | null;
  /**
   * Season Type
   * @description Season type to filter on (regular, postseason, or both)
   * @default null
   * @enum {string|null}
   */
  seasonType: "regular" | "postseason" | "both" | null;
  /**
   * Team
   * @description Team name or abbreviation
   * @default null
   */
  team: string | null;
  /**
   * Week
   * @description Week number of the season
   * @default null
   */
  week: number | null;
  /**
   * Year
   * @description Season year to filter on
   */
  year?: number;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_GET_GAME_MEDIA tool output.
 */
type COLLEGE_FOOTBALL_DATA_GET_GAME_MEDIA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Away Conference
       * @description Away team conference abbreviation
       */
      awayConference: string;
      /**
       * Away Team
       * @description Away team name
       */
      awayTeam: string;
      /**
       * Home Conference
       * @description Home team conference abbreviation
       */
      homeConference: string;
      /**
       * Home Team
       * @description Home team name
       */
      homeTeam: string;
      /**
       * Id
       * @description Unique game identifier
       */
      id: number;
      /**
       * Is Start Time Tbd
       * @description Whether the start time is TBD
       */
      isStartTimeTBD: boolean;
      /**
       * Media Type
       * @description Type of media outlet
       */
      mediaType: string;
      /**
       * Outlet
       * @description Name of the broadcaster or outlet
       */
      outlet: string;
      /**
       * Season
       * @description Season year of the game
       */
      season: number;
      /**
       * Season Type
       * @description Season type of the game
       */
      seasonType: string;
      /**
       * Start Time
       * @description ISO-8601 start time of the game
       */
      startTime: string;
      /**
       * Week
       * @description Week number of the game
       */
      week: number;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_GET_PLAYER_GAME_STATS tool input.
 */
type COLLEGE_FOOTBALL_DATA_GET_PLAYER_GAME_STATS_INPUT = {
  /**
   * Category
   * @description Stat category filter (e.g., 'passing', 'rushing', 'receiving', etc.).
   * @default null
   * @enum {string|null}
   */
  category: "passing" | "rushing" | "receiving" | "defensive" | "fumbles" | "interceptions" | "punting" | "puntReturns" | "kicking" | "kickReturns" | null;
  /**
   * Conference
   * @description Conference abbreviation filter (e.g., 'SEC').
   * @default null
   */
  conference: string | null;
  /**
   * Game Id
   * @description Specific game ID filter.
   * @default null
   */
  gameId: number | null;
  /**
   * Season Type
   * @description Season phase: 'regular' or 'postseason'.
   * @default null
   * @enum {string|null}
   */
  seasonType: "regular" | "postseason" | null;
  /**
   * Team
   * @description Team name filter (full name or abbreviation).
   * @default null
   */
  team: string | null;
  /**
   * Week
   * @description Week number within the season (1–99).
   * @default null
   */
  week: number | null;
  /**
   * Year
   * @description Season year to filter games (e.g., 2025).
   */
  year?: number;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_GET_PLAYER_GAME_STATS tool output.
 */
type COLLEGE_FOOTBALL_DATA_GET_PLAYER_GAME_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique game identifier.
       */
      id: number;
      /**
       * Teams
       * @description Per-team containers of player stats and aggregates.
       */
      teams: {
          /**
           * Categories
           * @description Team-aggregated stats grouped by category.
           */
          categories: {
              /**
               * Name
               * @description Category name (e.g., 'passing', 'rushing').
               */
              name: string;
              /**
               * Types
               * @description List of stat name/value pairs within this category.
               */
              types: {
                  /**
                   * Name
                   * @description Statistic name (e.g., 'yards', 'TD', 'INT').
                   */
                  name: string;
                  /**
                   * Stat
                   * @description Statistic value as returned by the API.
                   */
                  stat: string;
              }[];
          }[];
          /**
           * Conference
           * @description Team conference abbreviation.
           */
          conference: string;
          /**
           * Players
           * @description List of player statistics entries.
           */
          players: {
              /**
               * Categories
               * @description Player stats grouped by category.
               */
              categories: {
                  /**
                   * Name
                   * @description Category name (e.g., 'passing', 'rushing').
                   */
                  name: string;
                  /**
                   * Types
                   * @description List of stat name/value pairs within this category.
                   */
                  types: {
                      /**
                       * Name
                       * @description Statistic name (e.g., 'yards', 'TD', 'INT').
                       */
                      name: string;
                      /**
                       * Stat
                       * @description Statistic value as returned by the API.
                       */
                      stat: string;
                  }[];
              }[];
              /**
               * Id
               * @description Unique player identifier.
               */
              id: number;
              /**
               * Name
               * @description Player name.
               */
              name: string;
          }[];
          /**
           * Team
           * @description Team name.
           */
          team: string;
      }[];
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_GET_TEAM_GAME_STATS tool input.
 */
type COLLEGE_FOOTBALL_DATA_GET_TEAM_GAME_STATS_INPUT = {
  /**
   * Conference
   * @description Conference abbreviation filter (e.g., 'SEC').
   * @default null
   */
  conference: string | null;
  /**
   * Game Id
   * @description Specific game ID filter.
   * @default null
   */
  gameId: number | null;
  /**
   * Season Type
   * @description Season type filter: 'regular' or 'postseason'.
   * @default null
   * @enum {string|null}
   */
  seasonType: "regular" | "postseason" | null;
  /**
   * Team
   * @description Team filter by school name or abbreviation.
   * @default null
   */
  team: string | null;
  /**
   * Week
   * @description Week number filter (1–99).
   * @default null
   */
  week: number | null;
  /**
   * Year
   * @description Season year to filter games (e.g., 2025).
   */
  year?: number;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_GET_TEAM_GAME_STATS tool output.
 */
type COLLEGE_FOOTBALL_DATA_GET_TEAM_GAME_STATS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique game identifier.
       */
      id: number;
      /**
       * Teams
       * @description Box score entries for each team.
       */
      teams: {
          /**
           * Conference
           * @description Team conference name or abbreviation.
           */
          conference: string;
          /**
           * Home Away
           * @description Home or away designation.
           * @enum {string}
           */
          homeAway: "home" | "away";
          /**
           * Points
           * @description Points scored by the team.
           */
          points: number;
          /**
           * School
           * @description Team school name.
           */
          school: string;
          /**
           * Stats
           * @description List of team stats for this game.
           */
          stats: {
              /**
               * Category
               * @description Stat category (e.g., 'rushing', 'passing').
               */
              category: string;
              /**
               * Stat
               * @description Recorded stat value.
               */
              stat: number | null;
              /**
               * Stat Type
               * @description Specific stat type within the category.
               */
              statType: string;
          }[];
      }[];
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_LIST_COACHES_AND_HISTORY tool input.
 */
type COLLEGE_FOOTBALL_DATA_LIST_COACHES_AND_HISTORY_INPUT = {
  /**
   * First Name
   * @description Filter by coach's first name
   * @default null
   */
  firstName: string | null;
  /**
   * Last Name
   * @description Filter by coach's last name
   * @default null
   */
  lastName: string | null;
  /**
   * Max Year
   * @description Filter by maximum season year (inclusive)
   * @default null
   */
  maxYear: number | null;
  /**
   * Min Year
   * @description Filter by minimum season year (inclusive)
   * @default null
   */
  minYear: number | null;
  /**
   * Team
   * @description Filter by team or school name
   * @default null
   */
  team: string | null;
  /**
   * Year
   * @description Filter by specific season year
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_LIST_COACHES_AND_HISTORY tool output.
 */
type COLLEGE_FOOTBALL_DATA_LIST_COACHES_AND_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * First Name
       * @description Coach's first name
       */
      first_name: string;
      /**
       * Last Name
       * @description Coach's last name
       */
      last_name: string;
      /**
       * Seasons
       * @description List of season records for the coach
       */
      seasons: {
          /**
           * Games
           * @description Games coached in that season
           */
          games: number;
          /**
           * Losses
           * @description Losses in that season
           */
          losses: number;
          /**
           * Postseason Rank
           * @description Postseason rank for that season
           * @default null
           */
          postseason_rank: number | null;
          /**
           * Preseason Rank
           * @description Preseason rank for that season
           * @default null
           */
          preseason_rank: number | null;
          /**
           * School
           * @description School for the season
           */
          school: string;
          /**
           * Sp Defense
           * @description SP+ defense rating
           * @default null
           */
          sp_defense: number | null;
          /**
           * Sp Offense
           * @description SP+ offense rating
           * @default null
           */
          sp_offense: number | null;
          /**
           * Sp Overall
           * @description SP+ overall rating
           * @default null
           */
          sp_overall: number | null;
          /**
           * Srs
           * @description Simple Rating System value
           * @default null
           */
          srs: number | null;
          /**
           * Ties
           * @description Ties in that season
           */
          ties: number;
          /**
           * Wins
           * @description Wins in that season
           */
          wins: number;
      }[];
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_LIST_CONFERENCES tool input.
 */
type COLLEGE_FOOTBALL_DATA_LIST_CONFERENCES_INPUT = object;

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_LIST_CONFERENCES tool output.
 */
type COLLEGE_FOOTBALL_DATA_LIST_CONFERENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conferences
       * @description List of conference objects returned by the API
       */
      conferences: {
          /**
           * Affiliates
           * @description List of affiliate IDs, if any
           * @default null
           */
          affiliates: string[] | null;
          /**
           * Classification
           * @description Classification of the conference (e.g., fbs, fcs)
           * @default null
           */
          classification: string | null;
          /**
           * Division
           * @description Division of the conference (e.g., NCAA)
           * @default null
           */
          division: string | null;
          /**
           * First Year
           * @description Year the conference was first established
           * @default null
           */
          firstYear: number | null;
          /**
           * Id
           * @description Unique identifier for the conference
           */
          id: string;
          /**
           * Last Year
           * @description Year the conference ended, if applicable
           * @default null
           */
          lastYear: number | null;
          /**
           * Name
           * @description Full name of the conference
           */
          name: string;
          /**
           * Short Name
           * @description Short abbreviation of the conference
           * @default null
           */
          shortName: string | null;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_LIST_FBS_TEAMS tool input.
 */
type COLLEGE_FOOTBALL_DATA_LIST_FBS_TEAMS_INPUT = {
  /**
   * Year
   * @description Season year to filter FBS teams (e.g., 2025)
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_LIST_FBS_TEAMS tool output.
 */
type COLLEGE_FOOTBALL_DATA_LIST_FBS_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Abbreviation
       * @description Short team code (e.g., LSU, OSU)
       */
      abbreviation: string;
      /**
       * Alt Color
       * @description Alternate team color in hex (e.g., #654321)
       * @default null
       */
      alt_color: string | null;
      /**
       * Alt Name 1
       * @description Alternate team name (variant 1)
       * @default null
       */
      alt_name_1: string | null;
      /**
       * Alt Name 2
       * @description Alternate team name (variant 2)
       * @default null
       */
      alt_name_2: string | null;
      /**
       * Alt Name 3
       * @description Alternate team name (variant 3)
       * @default null
       */
      alt_name_3: string | null;
      /**
       * Color
       * @description Primary team color in hex (e.g., #AB1234)
       * @default null
       */
      color: string | null;
      /**
       * Conference
       * @description Conference name for that season (e.g., SEC)
       * @default null
       */
      conference: string | null;
      /**
       * Division
       * @description Conference division (if applicable)
       * @default null
       */
      division: string | null;
      /**
       * Id
       * @description CFBD team identifier
       */
      id: number;
      /**
       * Logos
       * @description List of logo image URLs in various sizes
       * @default null
       */
      logos: string[] | null;
      /**
       * Mascot
       * @description Team mascot name
       */
      mascot: string;
      /**
       * School
       * @description Official team/school name
       */
      school: string;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_LIST_FCS_TEAMS tool input.
 */
type COLLEGE_FOOTBALL_DATA_LIST_FCS_TEAMS_INPUT = {
  /**
   * Conference
   * @description Conference to filter FCS teams (e.g., 'SoCon')
   * @default null
   */
  conference: string | null;
  /**
   * Year
   * @description Season year to filter FCS teams (e.g., 2025)
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_LIST_FCS_TEAMS tool output.
 */
type COLLEGE_FOOTBALL_DATA_LIST_FCS_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Abbreviation
       * @description Short team code (e.g., FSU, NDSU)
       */
      abbreviation: string;
      /**
       * Alt Color
       * @description Alternate team color in hex (e.g., #654321)
       * @default null
       */
      alt_color: string | null;
      /**
       * Alt Name 1
       * @description Alternate team name (variant 1)
       * @default null
       */
      alt_name_1: string | null;
      /**
       * Alt Name 2
       * @description Alternate team name (variant 2)
       * @default null
       */
      alt_name_2: string | null;
      /**
       * Alt Name 3
       * @description Alternate team name (variant 3)
       * @default null
       */
      alt_name_3: string | null;
      /**
       * Color
       * @description Primary team color in hex (e.g., #AB1234)
       * @default null
       */
      color: string | null;
      /**
       * Conference
       * @description Conference name for that season (e.g., SoCon)
       * @default null
       */
      conference: string | null;
      /**
       * Division
       * @description Conference division (if applicable)
       * @default null
       */
      division: string | null;
      /**
       * Id
       * @description CFBD team identifier
       */
      id: number;
      /**
       * Logos
       * @description List of logo image URLs in various sizes
       * @default null
       */
      logos: string[] | null;
      /**
       * Mascot
       * @description Team mascot name
       */
      mascot: string;
      /**
       * School
       * @description Official team/school name
       */
      school: string;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_LIST_TEAMS tool input.
 */
type COLLEGE_FOOTBALL_DATA_LIST_TEAMS_INPUT = {
  /**
   * Conference
   * @description Conference abbreviation filter (e.g., SEC, B1G, ACC)
   * @default null
   */
  conference: string | null;
  /**
   * Year
   * @description Season year in YYYY format to filter teams
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_LIST_TEAMS tool output.
 */
type COLLEGE_FOOTBALL_DATA_LIST_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Teams
       * @description List of team objects matching the filters
       */
      teams: {
          /**
           * Abbreviation
           * @description Team abbreviation
           */
          abbreviation: string;
          /**
           * Alt Color
           * @description Alternate team color in hex
           * @default null
           */
          alt_color: string | null;
          /**
           * Alt Name1
           * @description Alternate team name (1)
           * @default null
           */
          alt_name1: string | null;
          /**
           * Alt Name2
           * @description Alternate team name (2)
           * @default null
           */
          alt_name2: string | null;
          /**
           * Alt Name3
           * @description Alternate team name (3)
           * @default null
           */
          alt_name3: string | null;
          /**
           * Color
           * @description Primary team color in hex
           * @default null
           */
          color: string | null;
          /**
           * Conference
           * @description Conference name or abbreviation
           * @default null
           */
          conference: string | null;
          /**
           * Division
           * @description Conference division (if applicable)
           * @default null
           */
          division: string | null;
          /**
           * Id
           * @description Unique CFBD team identifier
           */
          id: number;
          /**
           * Logos
           * @description List of logo image URLs
           * @default null
           */
          logos: string[] | null;
          /**
           * Mascot
           * @description Team mascot name
           */
          mascot: string;
          /**
           * School
           * @description Full school name
           */
          school: string;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_LIST_VENUES_STADIUMS tool input.
 */
type COLLEGE_FOOTBALL_DATA_LIST_VENUES_STADIUMS_INPUT = {
  /**
   * Year
   * @description Season year in YYYY format to filter venues
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_LIST_VENUES_STADIUMS tool output.
 */
type COLLEGE_FOOTBALL_DATA_LIST_VENUES_STADIUMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Venues
       * @description List of venue objects matching the filters
       */
      venues: {
          /**
           * Capacity
           * @description Seating capacity of the venue
           * @default null
           */
          capacity: number | null;
          /**
           * City
           * @description City where the venue is located
           * @default null
           */
          city: string | null;
          /**
           * Coordinates
           * @description Geographical coordinates of a venue.
           * @default null
           */
          coordinates: {
              /**
               * Lat
               * @description Latitude of the venue
               */
              lat: number;
              /**
               * Long
               * @description Longitude of the venue
               */
              long: number;
          } | null;
          /**
           * Id
           * @description Unique venue identifier
           */
          id: number;
          /**
           * Indoor
           * @description Indicates if the venue is indoor/enclosed
           * @default null
           */
          indoor: boolean | null;
          /**
           * Name
           * @description Name of the venue/stadium
           */
          name: string;
          /**
           * Open Date
           * @description Opening date of the venue (ISO format)
           * @default null
           */
          open_date: string | null;
          /**
           * State
           * @description State or province of the venue
           * @default null
           */
          state: string | null;
          /**
           * Surface
           * @description Playing surface type (e.g., grass, turf)
           * @default null
           */
          surface: string | null;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_NFL_DRAFT_PICKS tool input.
 */
type COLLEGE_FOOTBALL_DATA_NFL_DRAFT_PICKS_INPUT = {
  /**
   * Conference
   * @description College conference abbreviation filter
   * @default null
   */
  conference: string | null;
  /**
   * Limit
   * @description Maximum number of results to return
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of results to skip for paging
   * @default null
   */
  offset: number | null;
  /**
   * Overall
   * @description Overall pick number
   * @default null
   */
  overall: number | null;
  /**
   * Pick
   * @description Pick number within the round
   * @default null
   */
  pick: number | null;
  /**
   * Position
   * @description Player position filter
   * @default null
   */
  position: string | null;
  /**
   * Round
   * @description Draft round number (starting at 1)
   * @default null
   */
  round: number | null;
  /**
   * School
   * @description College program name filter
   * @default null
   */
  school: string | null;
  /**
   * Team
   * @description NFL team abbreviation (e.g., 'NE')
   * @default null
   */
  team: string | null;
  /**
   * Year
   * @description Draft year (e.g., 2025)
   */
  year?: number;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_NFL_DRAFT_PICKS tool output.
 */
type COLLEGE_FOOTBALL_DATA_NFL_DRAFT_PICKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Picks
       * @description List of NFL draft pick entries
       */
      picks: {
          /**
           * College Athlete Id
           * @description Unique CFBD college athlete identifier
           * @default null
           */
          collegeAthleteId: number | null;
          /**
           * College Conference
           * @description College conference of the player
           * @default null
           */
          collegeConference: string | null;
          /**
           * College Id
           * @description College program identifier
           * @default null
           */
          collegeId: number | null;
          /**
           * College Team
           * @description College program of the player (name)
           * @default null
           */
          collegeTeam: string | null;
          /**
           * Height
           * @description Player height in inches
           * @default null
           */
          height: number | null;
          /**
           * Hometown Info
           * @description Hometown information for the drafted player
           * @default null
           */
          hometownInfo: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Name of the drafted player
           */
          name: string;
          /**
           * Nfl Athlete Id
           * @description Unique NFL athlete identifier
           * @default null
           */
          nflAthleteId: number | null;
          /**
           * Nfl Team
           * @description NFL team name
           * @default null
           */
          nflTeam: string | null;
          /**
           * Nfl Team Id
           * @description Unique NFL team identifier
           * @default null
           */
          nflTeamId: number | null;
          /**
           * Overall
           * @description Overall pick number
           */
          overall: number;
          /**
           * Pick
           * @description Pick number within the round
           */
          pick: number;
          /**
           * Position
           * @description Position of the drafted player
           * @default null
           */
          position: string | null;
          /**
           * Pre Draft Grade
           * @description Pre-draft grade
           * @default null
           */
          preDraftGrade: number | null;
          /**
           * Pre Draft Position Ranking
           * @description Pre-draft position ranking
           * @default null
           */
          preDraftPositionRanking: number | null;
          /**
           * Pre Draft Ranking
           * @description Pre-draft ranking
           * @default null
           */
          preDraftRanking: number | null;
          /**
           * Round
           * @description Draft round number
           */
          round: number;
          /**
           * Weight
           * @description Player weight in pounds
           * @default null
           */
          weight: number | null;
          /**
           * Year
           * @description Draft year (e.g., 2025)
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_NFL_DRAFT_POSITIONS tool input.
 */
type COLLEGE_FOOTBALL_DATA_NFL_DRAFT_POSITIONS_INPUT = object;

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_NFL_DRAFT_POSITIONS tool output.
 */
type COLLEGE_FOOTBALL_DATA_NFL_DRAFT_POSITIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Positions
       * @description List of NFL draft position objects
       */
      positions: {
          /**
           * Abbreviation
           * @description Position abbreviation, e.g., QB, WR
           */
          abbreviation: string;
          /**
           * Id
           * @description NFL position ID
           */
          id: number;
          /**
           * Name
           * @description Full name of the NFL position
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_NFL_DRAFT_TEAMS tool input.
 */
type COLLEGE_FOOTBALL_DATA_NFL_DRAFT_TEAMS_INPUT = object;

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_NFL_DRAFT_TEAMS tool output.
 */
type COLLEGE_FOOTBALL_DATA_NFL_DRAFT_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Teams
       * @description List of NFL teams for draft endpoints
       */
      teams: {
          /**
           * Display Name
           * @description Full display name of the NFL team
           */
          displayName: string;
          /**
           * Id
           * @description Unique NFL team identifier
           */
          id: number;
          /**
           * Location
           * @description Team location (city or region)
           */
          location: string;
          /**
           * Logo
           * @description URL to the team logo
           */
          logo: string;
          /**
           * Mascot
           * @description Team mascot
           */
          mascot: string;
          /**
           * Nickname
           * @description Team nickname
           */
          nickname: string;
          /**
           * Short Display Name
           * @description Short/compact display name of the NFL team
           */
          shortDisplayName: string;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_PLAY_BY_PLAY_DATA tool input.
 */
type COLLEGE_FOOTBALL_DATA_PLAY_BY_PLAY_DATA_INPUT = {
  /**
   * Conference
   * @description Conference abbreviation filter (e.g., SEC)
   * @default null
   */
  conference: string | null;
  /**
   * Defense
   * @description Defense team filter (school name or abbreviation)
   * @default null
   */
  defense: string | null;
  /**
   * Defense Conference
   * @description Defense conference abbreviation filter (e.g., ACC)
   * @default null
   */
  defenseConference: string | null;
  /**
   * Game Id
   * @description Specific game ID filter
   * @default null
   */
  gameId: number | null;
  /**
   * Offense
   * @description Offense team filter (school name or abbreviation)
   * @default null
   */
  offense: string | null;
  /**
   * Offense Conference
   * @description Offense conference abbreviation filter (e.g., SEC)
   * @default null
   */
  offenseConference: string | null;
  /**
   * Play Type
   * @description Play type filter (e.g., pass, run)
   * @default null
   */
  playType: string | null;
  /**
   * Season Type
   * @description Season phase filter; 'regular' or 'postseason'
   * @default null
   * @enum {string|null}
   */
  seasonType: "regular" | "postseason" | null;
  /**
   * Team
   * @description Team name filter (school name or abbreviation)
   * @default null
   */
  team: string | null;
  /**
   * Week
   * @description Week number within the season
   */
  week?: number;
  /**
   * Year
   * @description 4-digit season year filter
   */
  year?: number;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_PLAY_BY_PLAY_DATA tool output.
 */
type COLLEGE_FOOTBALL_DATA_PLAY_BY_PLAY_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Plays
       * @description List of play-by-play entries matching filters
       */
      plays: {
          [key: string]: unknown;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_PLAY_STATS_PLAYER tool input.
 */
type COLLEGE_FOOTBALL_DATA_PLAY_STATS_PLAYER_INPUT = {
  /**
   * Athlete Id
   * @description Specific athlete ID filter.
   * @default null
   */
  athleteId: number | null;
  /**
   * Game Id
   * @description Specific game ID filter.
   * @default null
   */
  gameId: number | null;
  /**
   * Season Type
   * @description Season type filter: 'regular', 'postseason', or 'both'.
   * @default null
   * @enum {string|null}
   */
  seasonType: "regular" | "postseason" | "both" | null;
  /**
   * Stat Type Id
   * @description Specific stat type ID filter.
   * @default null
   */
  statTypeId: number | null;
  /**
   * Team
   * @description Team filter by school name or abbreviation.
   * @default null
   */
  team: string | null;
  /**
   * Week
   * @description Week number filter (1–99).
   * @default null
   */
  week: number | null;
  /**
   * Year
   * @description Season year to filter plays (e.g., 2025).
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_PLAY_STATS_PLAYER tool output.
 */
type COLLEGE_FOOTBALL_DATA_PLAY_STATS_PLAYER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Athlete Id
       * @description CFBD athlete identifier.
       */
      athleteId: number;
      /**
       * Away Team
       * @description Away team abbreviation.
       * @default null
       */
      awayTeam: string | null;
      /**
       * Clock
       * @description Time on the clock (MM:SS).
       * @default null
       */
      clock: string | null;
      /**
       * Created At
       * @description Timestamp when the stat was recorded.
       * @default null
       */
      createdAt: string | null;
      /**
       * Distance
       * @description Yards to first down.
       * @default null
       */
      distance: number | null;
      /**
       * Down
       * @description Down number for the play.
       * @default null
       */
      down: number | null;
      /**
       * Game Id
       * @description Unique CFBD game identifier.
       */
      gameId: number;
      /**
       * Home Team
       * @description Home team abbreviation.
       * @default null
       */
      homeTeam: string | null;
      /**
       * Name
       * @description Athlete's name, if provided.
       * @default null
       */
      name: string | null;
      /**
       * Opponent
       * @description Opponent team for the play, if provided.
       * @default null
       */
      opponent: string | null;
      /**
       * Period
       * @description Current period or quarter number.
       * @default null
       */
      period: number | null;
      /**
       * Play Id
       * @description Unique play identifier within the game.
       */
      playId: number;
      /**
       * Possession Team
       * @description Team with possession.
       * @default null
       */
      possessionTeam: string | null;
      /**
       * Score Type
       * @description Type of scoring event, if any.
       * @default null
       */
      scoreType: string | null;
      /**
       * Scoring Team
       * @description Team that scored, if any.
       * @default null
       */
      scoringTeam: string | null;
      /**
       * Stat
       * @description Recorded stat value.
       */
      stat: number | null;
      /**
       * Stat Id
       * @description Unique stat record identifier.
       * @default null
       */
      statId: number | null;
      /**
       * Stat Type
       * @description Human-readable stat type name, if provided.
       * @default null
       */
      statType: string | null;
      /**
       * Stat Type Id
       * @description CFBD stat type identifier.
       */
      statTypeId: number;
      /**
       * Team
       * @description Team credited with the stat.
       */
      team: string;
      /**
       * Yard Line
       * @description Field location (e.g., 'OWN20').
       * @default null
       */
      yardLine: string | null;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_PLAY_STAT_TYPES tool input.
 */
type COLLEGE_FOOTBALL_DATA_PLAY_STAT_TYPES_INPUT = object;

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_PLAY_STAT_TYPES tool output.
 */
type COLLEGE_FOOTBALL_DATA_PLAY_STAT_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stat Types
       * @description List of play stat type objects
       */
      statTypes: {
          /**
           * Id
           * @description Play stat type identifier
           */
          id: number;
          /**
           * Name
           * @description Play stat type name
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_PPA_PLAYER_BY_GAME_ACTION tool input.
 */
type COLLEGE_FOOTBALL_DATA_PPA_PLAYER_BY_GAME_ACTION_INPUT = {
  /**
   * Exclude Garbage Time
   * @description Exclude garbage time plays from PPA calculations
   * @default null
   */
  excludeGarbageTime: boolean | null;
  /**
   * Player Id
   * @description Player ID filter
   * @default null
   */
  playerId: number | null;
  /**
   * Position
   * @description Position abbreviation filter (e.g., QB, RB, WR, TE)
   * @default null
   */
  position: string | null;
  /**
   * Team
   * @description Team filter by school name or abbreviation
   * @default null
   */
  team: string | null;
  /**
   * Threshold
   * @description Minimum play threshold filter
   * @default null
   */
  threshold: string | null;
  /**
   * Week
   * @description Week number to filter PPA by game
   * @default null
   */
  week: number | null;
  /**
   * Year
   * @description Season year to filter PPA by game (e.g., 2025)
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_PPA_PLAYER_BY_GAME_ACTION tool output.
 */
type COLLEGE_FOOTBALL_DATA_PPA_PLAYER_BY_GAME_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Average
       * @description Average PPA/EPA values for the game
       */
      average: {
          /**
           * Passing
           * @description PPA/EPA for passing plays
           */
          passing: number;
          /**
           * Rushing
           * @description PPA/EPA for rushing plays
           */
          rushing: number;
          /**
           * Total
           * @description PPA/EPA across all plays
           */
          total: number;
      };
      /**
       * Conference
       * @description Player's team conference
       */
      conference: string;
      /**
       * Game Id
       * @description Game identifier
       */
      gameId: number;
      /**
       * Player
       * @description Player name
       */
      player: string;
      /**
       * Player Id
       * @description Player identifier
       */
      playerId: number;
      /**
       * Position
       * @description Player position abbreviation
       */
      position: string;
      /**
       * Season
       * @description Season year of the game
       */
      season: number;
      /**
       * Team
       * @description Player's team abbreviation
       */
      team: string;
      /**
       * Total
       * @description Total PPA/EPA values for the game
       */
      total: {
          /**
           * Passing
           * @description PPA/EPA for passing plays
           */
          passing: number;
          /**
           * Rushing
           * @description PPA/EPA for rushing plays
           */
          rushing: number;
          /**
           * Total
           * @description PPA/EPA across all plays
           */
          total: number;
      };
      /**
       * Week
       * @description Week number of the game
       */
      week: number;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_PPA_PLAYER_BY_SEASON tool input.
 */
type COLLEGE_FOOTBALL_DATA_PPA_PLAYER_BY_SEASON_INPUT = {
  /**
   * Conference
   * @description Conference abbreviation to filter by (e.g., 'SEC').
   * @default null
   */
  conference: string | null;
  /**
   * Exclude Garbage Time
   * @description If true, exclude garbage time plays from calculations.
   * @default null
   */
  excludeGarbageTime: boolean | null;
  /**
   * Player Id
   * @description Unique player ID to filter results.
   * @default null
   */
  playerId: number | null;
  /**
   * Position
   * @description Position abbreviation to filter by (e.g., 'QB').
   * @default null
   */
  position: string | null;
  /**
   * Team
   * @description Team abbreviation to filter by (e.g., 'LSU').
   * @default null
   */
  team: string | null;
  /**
   * Threshold
   * @description Minimum play threshold to include in results (e.g., '25').
   * @default null
   */
  threshold: string | null;
  /**
   * Year
   * @description Season year to filter results (e.g., 2023).
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_PPA_PLAYER_BY_SEASON tool output.
 */
type COLLEGE_FOOTBALL_DATA_PPA_PLAYER_BY_SEASON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conference
       * @description Player conference abbreviation.
       * @default null
       */
      conference: string | null;
      /**
       * Count
       * @description Number of plays included.
       * @default null
       */
      count: number | null;
      /**
       * Name
       * @description Player full name.
       */
      name: string;
      /**
       * Player Id
       * @description CFBD player identifier.
       */
      playerId: number;
      /**
       * Position
       * @description Player position abbreviation.
       * @default null
       */
      position: string | null;
      /**
       * Ppa
       * @description Total predicted points added.
       * @default null
       */
      ppa: number | null;
      /**
       * Ppa Fail
       * @description PPA for failed plays.
       * @default null
       */
      ppaFail: number | null;
      /**
       * Ppa Fail Rate
       * @description Failure rate of plays by PPA criteria.
       * @default null
       */
      ppaFailRate: number | null;
      /**
       * Ppa Per Play
       * @description Average PPA per play.
       * @default null
       */
      ppaPerPlay: number | null;
      /**
       * Ppa Success
       * @description PPA for successful plays.
       * @default null
       */
      ppaSuccess: number | null;
      /**
       * Ppa Success Rate
       * @description Success rate of plays by PPA criteria.
       * @default null
       */
      ppaSuccessRate: number | null;
      /**
       * School
       * @description Player school name.
       * @default null
       */
      school: string | null;
      /**
       * Season
       * @description Season year.
       */
      season: number;
      /**
       * Team
       * @description Player team abbreviation.
       * @default null
       */
      team: string | null;
      /**
       * Threshold
       * @description Minimum play threshold applied.
       * @default null
       */
      threshold: string | null;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_PPA_PREDICTED_POINTS_EP tool input.
 */
type COLLEGE_FOOTBALL_DATA_PPA_PREDICTED_POINTS_EP_INPUT = {
  /**
   * Distance
   * @description Distance-to-go filter in yards
   */
  distance?: number;
  /**
   * Down
   * @description Down filter (1-4)
   */
  down?: number;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_PPA_PREDICTED_POINTS_EP tool output.
 */
type COLLEGE_FOOTBALL_DATA_PPA_PREDICTED_POINTS_EP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Distance
       * @description Yards-to-go for the scenario
       */
      distance: number;
      /**
       * Down
       * @description Down value in the scenario
       */
      down: number;
      /**
       * Predicted Points
       * @description Expected points for the given down/distance/yard line
       */
      predictedPoints: number;
      /**
       * Yard Line
       * @description Field position (yard line) for which EP is returned
       */
      yardLine: number;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_PPA_TEAM_BY_GAME tool input.
 */
type COLLEGE_FOOTBALL_DATA_PPA_TEAM_BY_GAME_INPUT = {
  /**
   * Conference
   * @description Conference abbreviation filter.
   * @default null
   */
  conference: string | null;
  /**
   * End Date
   * @description Filter games on or before this date (YYYY-MM-DD).
   * @default null
   */
  endDate: string | null;
  /**
   * Season Type
   * @description Season segment: 'regular' or 'postseason'.
   * @default null
   * @enum {string|null}
   */
  seasonType: "regular" | "postseason" | null;
  /**
   * Start Date
   * @description Filter games on or after this date (YYYY-MM-DD).
   * @default null
   */
  startDate: string | null;
  /**
   * Team
   * @description Team filter by school name or abbreviation.
   * @default null
   */
  team: string | null;
  /**
   * Week
   * @description Week number filter within the season.
   * @default null
   */
  week: number | null;
  /**
   * Year
   * @description Season year to filter PPA by game.
   */
  year?: number;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_PPA_TEAM_BY_GAME tool output.
 */
type COLLEGE_FOOTBALL_DATA_PPA_TEAM_BY_GAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conference
       * @description Conference of the team.
       */
      conference: string;
      /**
       * Date
       * @description Date of the game, ISO 8601 format.
       */
      date: string;
      /**
       * Defense Ppa
       * @description Defensive Predicted Points Added (PPA) for the game.
       * @default null
       */
      defensePpa: number | null;
      /**
       * Home
       * @description True if team was at home.
       */
      home: boolean;
      /**
       * Offense Ppa
       * @description Offensive Predicted Points Added (PPA) for the game.
       * @default null
       */
      offensePpa: number | null;
      /**
       * Opponent
       * @description Opposing team name.
       */
      opponent: string;
      /**
       * Ppa
       * @description Total Predicted Points Added (PPA).
       * @default null
       */
      ppa: number | null;
      /**
       * Season
       * @description Season year of the game.
       */
      season: number;
      /**
       * Season Type
       * @description Season segment (regular or postseason).
       */
      seasonType: string;
      /**
       * Team
       * @description Team name.
       */
      team: string;
      /**
       * Week
       * @description Week number of the game.
       */
      week: number;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_RANKINGS_POLLS tool input.
 */
type COLLEGE_FOOTBALL_DATA_RANKINGS_POLLS_INPUT = {
  /**
   * Season Type
   * @description Optional season type filter. One of: 'regular', 'postseason', 'both', 'allstar', 'spring_regular', 'spring_postseason'
   * @default null
   * @enum {string|null}
   */
  season_type: "regular" | "postseason" | "both" | "allstar" | "spring_regular" | "spring_postseason" | null;
  /**
   * Week
   * @description Optional week number of the season to retrieve rankings
   * @default null
   */
  week: number | null;
  /**
   * Year
   * @description Season year in YYYY format to filter rankings
   */
  year?: number;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_RANKINGS_POLLS tool output.
 */
type COLLEGE_FOOTBALL_DATA_RANKINGS_POLLS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rankings
       * @description Weekly poll rankings for the specified season and filters
       */
      rankings: {
          /**
           * Polls
           * @description Collection of polls released this week
           */
          polls: {
              /**
               * Poll
               * @description Poll name or identifier
               */
              poll: string;
              /**
               * Ranks
               * @description List of team rankings for this poll
               */
              ranks: {
                  /**
                   * Conference
                   * @description Team conference affiliation
                   */
                  conference: string;
                  /**
                   * First Place Votes
                   * @description Number of first-place votes received
                   */
                  first_place_votes: number;
                  /**
                   * Points
                   * @description Poll points awarded to the team
                   */
                  points: number;
                  /**
                   * Rank
                   * @description Team's rank in the poll
                   */
                  rank: number;
                  /**
                   * School
                   * @description Team school name
                   */
                  school: string;
                  /**
                   * Team Id
                   * @description Unique CFBD team identifier
                   */
                  team_id: number;
              }[];
          }[];
          /**
           * Season
           * @description Season year for these rankings
           */
          season: number;
          /**
           * Season Type
           * @description Season type for the rankings
           * @enum {string}
           */
          season_type: "regular" | "postseason" | "both" | "allstar" | "spring_regular" | "spring_postseason";
          /**
           * Week
           * @description Week number in the season
           */
          week: number;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_RATINGS_ELO tool input.
 */
type COLLEGE_FOOTBALL_DATA_RATINGS_ELO_INPUT = {
  /**
   * Team
   * @description Team name to filter Elo ratings for a single team
   * @default null
   */
  team: string | null;
  /**
   * Year
   * @description Season year for which to retrieve Elo ratings (YYYY)
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_RATINGS_ELO tool output.
 */
type COLLEGE_FOOTBALL_DATA_RATINGS_ELO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ratings
       * @description List of Elo rating records
       */
      ratings: {
          /**
           * Conference
           * @description Conference of the team for that season
           */
          conference: string;
          /**
           * Elo
           * @description Final Elo rating value for the team
           */
          elo: number;
          /**
           * Team
           * @description Team name
           */
          team: string;
          /**
           * Year
           * @description Season year associated with the Elo rating
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_RATINGS_SP_PLUS tool input.
 */
type COLLEGE_FOOTBALL_DATA_RATINGS_SP_PLUS_INPUT = {
  /**
   * Team
   * @description Team name to filter SP+ ratings when 'year' is not provided
   * @default null
   */
  team: string | null;
  /**
   * Year
   * @description Season year for which to retrieve SP+ ratings (YYYY)
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_RATINGS_SP_PLUS tool output.
 */
type COLLEGE_FOOTBALL_DATA_RATINGS_SP_PLUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ratings
       * @description List of team SP+ ratings
       */
      ratings: {
          /**
           * Conference
           * @description Team conference for that season
           * @default null
           */
          conference: string | null;
          /**
           * TeamSPDefense
           * @description Defensive SP+ metrics for a team.
           *     API frequently returns only 'ranking' and 'rating' and sometimes havoc sub-metrics.
           *     All fields are optional to align with API responses.
           * @default null
           */
          defense: {
              /**
               * Explosiveness
               * @description Defensive explosiveness rating
               * @default null
               */
              explosiveness: number | null;
              /**
               * Havoc
               * @description Defensive havoc metrics
               * @default null
               */
              havoc: {
                  /**
                   * Db
                   * @description Defensive back havoc rate
                   * @default null
                   */
                  db: number | null;
                  /**
                   * Front Seven
                   * @description Front seven havoc rate
                   * @default null
                   */
                  frontSeven: number | null;
                  /**
                   * Total
                   * @description Total havoc rate
                   * @default null
                   */
                  total: number | null;
              } | null;
              /**
               * Pace
               * @description Defensive pace metric
               * @default null
               */
              pace: number | null;
              /**
               * Passing
               * @description Defensive passing metric
               * @default null
               */
              passing: number | null;
              /**
               * Passing Downs
               * @description Defense passing downs success rate
               * @default null
               */
              passingDowns: number | null;
              /**
               * Ranking
               * @description Defensive national ranking
               * @default null
               */
              ranking: number | null;
              /**
               * Rating
               * @description Defensive overall rating
               * @default null
               */
              rating: number | null;
              /**
               * Run Rate
               * @description Defensive run rate
               * @default null
               */
              runRate: number | null;
              /**
               * Rushing
               * @description Defensive rushing metric
               * @default null
               */
              rushing: number | null;
              /**
               * Standard Downs
               * @description Defense standard downs success rate
               * @default null
               */
              standardDowns: number | null;
              /**
               * Success
               * @description Defensive success rate
               * @default null
               */
              success: number | null;
          } | null;
          /**
           * TeamSPOffense
           * @description Offensive SP+ metrics for a team.
           *     API frequently returns only 'ranking' and 'rating' with other fields null.
           *     All fields are optional to align with API responses.
           * @default null
           */
          offense: {
              /**
               * Explosiveness
               * @description Offensive explosiveness rating
               * @default null
               */
              explosiveness: number | null;
              /**
               * Pace
               * @description Offensive pace metric
               * @default null
               */
              pace: number | null;
              /**
               * Passing
               * @description Offensive passing metric
               * @default null
               */
              passing: number | null;
              /**
               * Passing Downs
               * @description Offense passing downs success rate
               * @default null
               */
              passingDowns: number | null;
              /**
               * Ranking
               * @description Offensive national ranking
               * @default null
               */
              ranking: number | null;
              /**
               * Rating
               * @description Offensive overall rating
               * @default null
               */
              rating: number | null;
              /**
               * Run Rate
               * @description Offensive run rate
               * @default null
               */
              runRate: number | null;
              /**
               * Rushing
               * @description Offensive rushing metric
               * @default null
               */
              rushing: number | null;
              /**
               * Standard Downs
               * @description Offense standard downs success rate
               * @default null
               */
              standardDowns: number | null;
              /**
               * Success
               * @description Offensive success rate
               * @default null
               */
              success: number | null;
          } | null;
          /**
           * Ranking
           * @description Overall national ranking
           * @default null
           */
          ranking: number | null;
          /**
           * Rating
           * @description Overall SP+ rating
           * @default null
           */
          rating: number | null;
          /**
           * Second Order Wins
           * @description Second-order wins metric
           * @default null
           */
          secondOrderWins: number | null;
          /**
           * Sos
           * @description Strength of schedule
           * @default null
           */
          sos: number | null;
          /**
           * TeamSPSpecialTeams
           * @description Special teams SP+ metrics for a team.
           *     API often returns only 'rating'.
           * @default null
           */
          specialTeams: {
              /**
               * Ranking
               * @description Special teams national ranking
               * @default null
               */
              ranking: number | null;
              /**
               * Rating
               * @description Special teams overall rating
               * @default null
               */
              rating: number | null;
          } | null;
          /**
           * Team
           * @description Team name
           */
          team: string;
          /**
           * Year
           * @description Season year
           * @default null
           */
          year: number | null;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_RATINGS_SRS tool input.
 */
type COLLEGE_FOOTBALL_DATA_RATINGS_SRS_INPUT = {
  /**
   * Conference
   * @description Conference abbreviation to filter results
   * @default null
   */
  conference: string | null;
  /**
   * Team
   * @description Full FBS team name to filter results
   * @default null
   */
  team: string | null;
  /**
   * Year
   * @description Season year for which to retrieve SRS ratings (YYYY)
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_RATINGS_SRS tool output.
 */
type COLLEGE_FOOTBALL_DATA_RATINGS_SRS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ratings
       * @description List of team SRS ratings
       */
      ratings: {
          /**
           * Conference
           * @description Conference abbreviation
           */
          conference: string;
          /**
           * Rating
           * @description SRS value for the team
           */
          rating: number;
          /**
           * Team
           * @description Team name
           */
          team: string;
          /**
           * Year
           * @description Season year
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_RECRUITING_GROUP_DICTIONARY tool input.
 */
type COLLEGE_FOOTBALL_DATA_RECRUITING_GROUP_DICTIONARY_INPUT = {
  /**
   * Conference
   * @description Conference abbreviation to filter results (e.g., 'SEC').
   * @default null
   */
  conference: string | null;
  /**
   * End Year
   * @description Inclusive end year for recruiting data aggregation; must be >= startYear.
   * @default null
   */
  endYear: number | null;
  /**
   * Start Year
   * @description Inclusive start year for recruiting data aggregation.
   * @default null
   */
  startYear: number | null;
  /**
   * Team
   * @description Full team name to filter results (e.g., 'Alabama').
   * @default null
   */
  team: string | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_RECRUITING_GROUP_DICTIONARY tool output.
 */
type COLLEGE_FOOTBALL_DATA_RECRUITING_GROUP_DICTIONARY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Groups
       * @description List of recruiting statistics grouped by position.
       */
      groups: {
          /**
           * Avg Rating
           * @description Average recruit rating for the group.
           */
          avgRating: number;
          /**
           * Avg Stars
           * @description Average star rating for commits.
           */
          avgStars: number;
          /**
           * Commits
           * @description Number of commits in the group.
           */
          commits: number;
          /**
           * Conference
           * @description Conference name or abbreviation.
           */
          conference: string;
          /**
           * Position Group
           * @description Position group label (e.g., QB, RB, WR, DL).
           */
          positionGroup: string;
          /**
           * Team
           * @description Team name.
           */
          team: string;
          /**
           * Total Rating
           * @description Total sum of recruit ratings for the group.
           */
          totalRating: number;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_RECRUITING_TRANSFER_PORTAL tool input.
 */
type COLLEGE_FOOTBALL_DATA_RECRUITING_TRANSFER_PORTAL_INPUT = {
  /**
   * Year
   * @description Season year of the transfer portal dataset (YYYY)
   */
  year?: number;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_RECRUITING_TRANSFER_PORTAL tool output.
 */
type COLLEGE_FOOTBALL_DATA_RECRUITING_TRANSFER_PORTAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Transfers
       * @description List of transfer portal entries for the specified season
       */
      transfers: {
          /**
           * Composite Rating
           * @description Composite recruiting rating
           * @default null
           */
          compositeRating: number | null;
          /**
           * Id
           * @description CFB player identifier
           */
          id: number;
          /**
           * Name
           * @description Player full name
           */
          name: string;
          /**
           * Position
           * @description Player's primary position
           */
          position: string;
          /**
           * Previous School
           * @description Previous school/team abbreviation
           */
          previousSchool: string;
          /**
           * Rating Rank
           * @description National recruit rating rank
           * @default null
           */
          ratingRank: number | null;
          /**
           * Rating Score
           * @description Underlying recruit score
           * @default null
           */
          ratingScore: number | null;
          /**
           * School
           * @description Destination school/team abbreviation
           */
          school: string;
          /**
           * Transfer Date
           * @description Date the player entered the portal in YYYY-MM-DD format
           */
          transferDate: string;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_RETURNING_PRODUCTION_TEAM tool input.
 */
type COLLEGE_FOOTBALL_DATA_RETURNING_PRODUCTION_TEAM_INPUT = {
  /**
   * Conference
   * @description Optional conference name to filter results.
   * @default null
   */
  conference: string | null;
  /**
   * Team
   * @description Optional team name or abbreviation to filter results.
   * @default null
   */
  team: string | null;
  /**
   * Year
   * @description Optional season year (YYYY) to query returning production data.
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_RETURNING_PRODUCTION_TEAM tool output.
 */
type COLLEGE_FOOTBALL_DATA_RETURNING_PRODUCTION_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Conference
       * @description Conference name or abbreviation.
       * @default null
       */
      conference: string | null;
      /**
       * Passing Usage
       * @description Passing usage share returning.
       * @default null
       */
      passingUsage: number | null;
      /**
       * Percent Ppa
       * @description Percent of prior year's total PPA returning.
       * @default null
       */
      percentPPA: number | null;
      /**
       * Percent Passing Ppa
       * @description Percent of prior year's passing PPA returning.
       * @default null
       */
      percentPassingPPA: number | null;
      /**
       * Percent Receiving Ppa
       * @description Percent of prior year's receiving PPA returning.
       * @default null
       */
      percentReceivingPPA: number | null;
      /**
       * Percent Rushing Ppa
       * @description Percent of prior year's rushing PPA returning.
       * @default null
       */
      percentRushingPPA: number | null;
      /**
       * Receiving Usage
       * @description Receiving usage share returning.
       * @default null
       */
      receivingUsage: number | null;
      /**
       * Rushing Usage
       * @description Rushing usage share returning.
       * @default null
       */
      rushingUsage: number | null;
      /**
       * Season
       * @description Season year of the data.
       */
      season: number;
      /**
       * Team
       * @description Team name.
       */
      team: string;
      /**
       * Total Ppa
       * @description Total PPA returning.
       * @default null
       */
      totalPPA: number | null;
      /**
       * Total Passing Ppa
       * @description Total passing PPA returning.
       * @default null
       */
      totalPassingPPA: number | null;
      /**
       * Total Receiving Ppa
       * @description Total receiving PPA returning.
       * @default null
       */
      totalReceivingPPA: number | null;
      /**
       * Total Rushing Ppa
       * @description Total rushing PPA returning.
       * @default null
       */
      totalRushingPPA: number | null;
      /**
       * Usage
       * @description Overall usage share returning.
       * @default null
       */
      usage: number | null;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_SEASON_STATS_PLAYER tool input.
 */
type COLLEGE_FOOTBALL_DATA_SEASON_STATS_PLAYER_INPUT = {
  /**
   * Category
   * @description Stat category filter (e.g., 'passing', 'rushing', etc.).
   * @default null
   */
  category: string | null;
  /**
   * Conference
   * @description Conference abbreviation filter (e.g., 'SEC').
   * @default null
   */
  conference: string | null;
  /**
   * End Week
   * @description Week number to end filtering at (1-99).
   * @default null
   */
  endWeek: number | null;
  /**
   * Season Type
   * @description Season phase: 'regular', 'postseason', or 'both'.
   * @default null
   * @enum {string|null}
   */
  seasonType: "regular" | "postseason" | "both" | null;
  /**
   * Start Week
   * @description Week number to start filtering from (1-99).
   * @default null
   */
  startWeek: number | null;
  /**
   * Team
   * @description Team name filter (school name or abbreviation).
   * @default null
   */
  team: string | null;
  /**
   * Year
   * @description Season year to filter stats (e.g., 2025).
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_SEASON_STATS_PLAYER tool output.
 */
type COLLEGE_FOOTBALL_DATA_SEASON_STATS_PLAYER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category
       * @description Stat category for the record (e.g., passing, rushing, etc.).
       */
      category: string;
      /**
       * Conference
       * @description Conference name.
       */
      conference: string;
      /**
       * Player
       * @description Player's name.
       */
      player: string;
      /**
       * Player Id
       * @description Unique player identifier.
       */
      playerId: number;
      /**
       * Position
       * @description Player position if available.
       * @default null
       */
      position: string | null;
      /**
       * Season Type
       * @description Season type for the record (e.g., regular or postseason).
       */
      seasonType: string;
      /**
       * Stat
       * @description Statistic value (type may vary by category).
       */
      stat: number | null;
      /**
       * Team
       * @description Team name.
       */
      team: string;
      /**
       * Year
       * @description Season year for the stat record.
       */
      year: number;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_SEASON_STATS_TEAM tool input.
 */
type COLLEGE_FOOTBALL_DATA_SEASON_STATS_TEAM_INPUT = {
  /**
   * Conference
   * @description Filter by conference abbreviation, e.g., 'SEC'
   * @default null
   */
  conference: string | null;
  /**
   * End Week
   * @description Ending week number (must be >= startWeek)
   * @default null
   */
  endWeek: number | null;
  /**
   * Season Type
   * @description Season type to include: 'regular', 'postseason', or 'both'
   * @default both
   * @enum {string}
   */
  seasonType: "regular" | "postseason" | "both";
  /**
   * Start Week
   * @description Starting week number (1-based)
   * @default null
   */
  startWeek: number | null;
  /**
   * Team
   * @description Filter by school/team name, e.g., 'Alabama'
   * @default null
   */
  team: string | null;
  /**
   * Year
   * @description Season year in YYYY format
   */
  year?: number;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_SEASON_STATS_TEAM tool output.
 */
type COLLEGE_FOOTBALL_DATA_SEASON_STATS_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stats
       * @description List of team-season stat records
       */
      stats: {
          /**
           * Category
           * @description Stat category, e.g., 'passing', 'rushing'
           */
          category: string;
          /**
           * Conference
           * @description Conference abbreviation
           */
          conference: string;
          /**
           * Season
           * @description Season year
           */
          season: number;
          /**
           * Stat
           * @description Value of the stat for the season on this team
           */
          stat: number;
          /**
           * Stat Type
           * @description Specific stat within category, e.g., 'yards'
           */
          statType: string;
          /**
           * Team
           * @description Team/school name
           */
          team: string;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_SEASON_TYPES_DICTIONARY tool input.
 */
type COLLEGE_FOOTBALL_DATA_SEASON_TYPES_DICTIONARY_INPUT = {
  /**
   * Year
   * @description Season year to query calendar for extracting season types.
   * @default null
   */
  year: number | null;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_SEASON_TYPES_DICTIONARY tool output.
 */
type COLLEGE_FOOTBALL_DATA_SEASON_TYPES_DICTIONARY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Season Types
       * @description List of available season type values (e.g., regular, postseason)
       */
      seasonTypes: string[];
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_TEAM_MATCHUP_HISTORY tool input.
 */
type COLLEGE_FOOTBALL_DATA_TEAM_MATCHUP_HISTORY_INPUT = {
  /**
   * Max Year
   * @description Maximum season year (YYYY) to include in results.
   * @default null
   */
  maxYear: number | null;
  /**
   * Min Year
   * @description Minimum season year (YYYY) to include in results.
   * @default null
   */
  minYear: number | null;
  /**
   * Team1
   * @description First team name (FBS) to query head-to-head history.
   */
  team1?: string;
  /**
   * Team2
   * @description Second team name (FBS) to query head-to-head history.
   */
  team2?: string;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_TEAM_MATCHUP_HISTORY tool output.
 */
type COLLEGE_FOOTBALL_DATA_TEAM_MATCHUP_HISTORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Away Score
       * @description Away team score.
       */
      awayScore: number;
      /**
       * Away Team
       * @description Away team name.
       */
      awayTeam: string;
      /**
       * Date
       * @description Game date in ISO 8601 format.
       */
      date: string;
      /**
       * Home Score
       * @description Home team score.
       */
      homeScore: number;
      /**
       * Home Team
       * @description Home team name.
       */
      homeTeam: string;
      /**
       * Neutral Site
       * @description Whether the game was played at a neutral site.
       */
      neutralSite: boolean;
      /**
       * Season
       * @description Season year.
       */
      season: number;
      /**
       * Season Type
       * @description Season segment (e.g., regular or postseason).
       */
      seasonType: string;
      /**
       * Venue
       * @description Venue name.
       */
      venue: string;
      /**
       * Week
       * @description Week number of the game in the season.
       */
      week: number;
      /**
       * Winner
       * @description Winning team name.
       */
      winner: string;
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_TEAM_RECORDS tool input.
 */
type COLLEGE_FOOTBALL_DATA_TEAM_RECORDS_INPUT = {
  /**
   * Conference
   * @description Optional conference abbreviation filter, e.g., 'SEC', 'ACC'.
   * @default null
   */
  conference: string | null;
  /**
   * Division
   * @description Optional NCAA division filter, e.g., 'fbs', 'fcs'.
   * @default null
   * @enum {string|null}
   */
  division: "fbs" | "fcs" | "d1" | "d2" | "d3" | null;
  /**
   * Limit
   * @description Limit the number of results returned.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip (offset) for pagination.
   * @default null
   */
  offset: number | null;
  /**
   * Season Type
   * @description Type of season to include: 'regular', 'postseason', or 'all'.
   * @default regular
   * @enum {string}
   */
  seasonType: "regular" | "postseason" | "all";
  /**
   * Team
   * @description Optional school/team name filter, e.g., 'Alabama'.
   * @default null
   */
  team: string | null;
  /**
   * Year
   * @description Season year for which to retrieve team records (must be >= 1869).
   */
  year?: number;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_TEAM_RECORDS tool output.
 */
type COLLEGE_FOOTBALL_DATA_TEAM_RECORDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Records
       * @description List of team season records
       */
      records: {
          /**
           * Conference
           * @description Conference abbreviation
           * @default null
           */
          conference: string | null;
          /**
           * Division
           * @description Division, e.g., 'fbs', 'fcs'
           * @default null
           */
          division: string | null;
          /**
           * Losses
           * @description Number of losses
           */
          losses: number;
          /**
           * School
           * @description Full school name
           */
          school: string;
          /**
           * Team
           * @description Team abbreviation or name, e.g., 'ALA' or 'Alabama'
           */
          team: string;
          /**
           * Ties
           * @description Number of ties, if any
           * @default null
           */
          ties: number | null;
          /**
           * Win Pct
           * @description Winning percentage
           */
          winPct: number;
          /**
           * Wins
           * @description Number of wins
           */
          wins: number;
          /**
           * Year
           * @description Season year
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
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_TEAM_ROSTER tool input.
 */
type COLLEGE_FOOTBALL_DATA_TEAM_ROSTER_INPUT = {
  /**
   * Team
   * @description Team name or abbreviation (e.g., 'Alabama')
   */
  team?: string;
  /**
   * Year
   * @description Season year for the roster; must be 2009 or later
   */
  year?: number;
};

/**
 * Type of COLLEGE_FOOTBALL_DATA's COLLEGE_FOOTBALL_DATA_TEAM_ROSTER tool output.
 */
type COLLEGE_FOOTBALL_DATA_TEAM_ROSTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * First Name
       * @description Player first name
       */
      first_name: string;
      /**
       * Height
       * @description Player height in inches
       */
      height: number;
      /**
       * Home City
       * @description Player's hometown city
       */
      home_city: string;
      /**
       * Home Country
       * @description Player's hometown country
       */
      home_country: string;
      /**
       * Home County Fips
       * @description FIPS code of home county
       */
      home_county_fips: string;
      /**
       * Home Latitude
       * @description Latitude of hometown
       */
      home_latitude: number;
      /**
       * Home Longitude
       * @description Longitude of hometown
       */
      home_longitude: number;
      /**
       * Home State
       * @description Player's hometown state
       */
      home_state: string;
      /**
       * Id
       * @description Player unique identifier
       */
      id: number;
      /**
       * Jersey
       * @description Player jersey number
       */
      jersey: number;
      /**
       * Last Name
       * @description Player last name
       */
      last_name: string;
      /**
       * Position
       * @description Player position abbreviation
       */
      position: string;
      /**
       * Recruit Ids
       * @description List of recruit IDs associated with the player
       */
      recruit_ids: number[];
      /**
       * Team
       * @description Player's team
       */
      team: string;
      /**
       * Weight
       * @description Player weight in pounds
       */
      weight: number;
      /**
       * Year
       * @description Player's academic year (e.g., 1 for freshman)
       */
      year: number;
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
 * Type map of all available tool input types for toolkit "COLLEGE_FOOTBALL_DATA".
 */
export type COLLEGE_FOOTBALL_DATA_TOOL_INPUTS = {
  ADVANCED_BOX_SCORE: COLLEGE_FOOTBALL_DATA_ADVANCED_BOX_SCORE_INPUT
  ADVANCED_GAME_STATS: COLLEGE_FOOTBALL_DATA_ADVANCED_GAME_STATS_INPUT
  ADVANCED_SEASON_STATS_TEAM: COLLEGE_FOOTBALL_DATA_ADVANCED_SEASON_STATS_TEAM_INPUT
  BETTING_LINES: COLLEGE_FOOTBALL_DATA_BETTING_LINES_INPUT
  COMPOSITE_TEAM_TALENT: COLLEGE_FOOTBALL_DATA_COMPOSITE_TEAM_TALENT_INPUT
  CONFERENCE_MEMBERSHIPS_HISTORY: COLLEGE_FOOTBALL_DATA_CONFERENCE_MEMBERSHIPS_HISTORY_INPUT
  DIVISIONS_BY_CONFERENCE: COLLEGE_FOOTBALL_DATA_DIVISIONS_BY_CONFERENCE_INPUT
  GET_DRIVE_DATA: COLLEGE_FOOTBALL_DATA_GET_DRIVE_DATA_INPUT
  GET_GAMES_AND_RESULTS: COLLEGE_FOOTBALL_DATA_GET_GAMES_AND_RESULTS_INPUT
  GET_GAME_MEDIA: COLLEGE_FOOTBALL_DATA_GET_GAME_MEDIA_INPUT
  GET_PLAYER_GAME_STATS: COLLEGE_FOOTBALL_DATA_GET_PLAYER_GAME_STATS_INPUT
  GET_TEAM_GAME_STATS: COLLEGE_FOOTBALL_DATA_GET_TEAM_GAME_STATS_INPUT
  LIST_COACHES_AND_HISTORY: COLLEGE_FOOTBALL_DATA_LIST_COACHES_AND_HISTORY_INPUT
  LIST_CONFERENCES: COLLEGE_FOOTBALL_DATA_LIST_CONFERENCES_INPUT
  LIST_FBS_TEAMS: COLLEGE_FOOTBALL_DATA_LIST_FBS_TEAMS_INPUT
  LIST_FCS_TEAMS: COLLEGE_FOOTBALL_DATA_LIST_FCS_TEAMS_INPUT
  LIST_TEAMS: COLLEGE_FOOTBALL_DATA_LIST_TEAMS_INPUT
  LIST_VENUES_STADIUMS: COLLEGE_FOOTBALL_DATA_LIST_VENUES_STADIUMS_INPUT
  NFL_DRAFT_PICKS: COLLEGE_FOOTBALL_DATA_NFL_DRAFT_PICKS_INPUT
  NFL_DRAFT_POSITIONS: COLLEGE_FOOTBALL_DATA_NFL_DRAFT_POSITIONS_INPUT
  NFL_DRAFT_TEAMS: COLLEGE_FOOTBALL_DATA_NFL_DRAFT_TEAMS_INPUT
  PLAY_BY_PLAY_DATA: COLLEGE_FOOTBALL_DATA_PLAY_BY_PLAY_DATA_INPUT
  PLAY_STATS_PLAYER: COLLEGE_FOOTBALL_DATA_PLAY_STATS_PLAYER_INPUT
  PLAY_STAT_TYPES: COLLEGE_FOOTBALL_DATA_PLAY_STAT_TYPES_INPUT
  PPA_PLAYER_BY_GAME_ACTION: COLLEGE_FOOTBALL_DATA_PPA_PLAYER_BY_GAME_ACTION_INPUT
  PPA_PLAYER_BY_SEASON: COLLEGE_FOOTBALL_DATA_PPA_PLAYER_BY_SEASON_INPUT
  PPA_PREDICTED_POINTS_EP: COLLEGE_FOOTBALL_DATA_PPA_PREDICTED_POINTS_EP_INPUT
  PPA_TEAM_BY_GAME: COLLEGE_FOOTBALL_DATA_PPA_TEAM_BY_GAME_INPUT
  RANKINGS_POLLS: COLLEGE_FOOTBALL_DATA_RANKINGS_POLLS_INPUT
  RATINGS_ELO: COLLEGE_FOOTBALL_DATA_RATINGS_ELO_INPUT
  RATINGS_SP_PLUS: COLLEGE_FOOTBALL_DATA_RATINGS_SP_PLUS_INPUT
  RATINGS_SRS: COLLEGE_FOOTBALL_DATA_RATINGS_SRS_INPUT
  RECRUITING_GROUP_DICTIONARY: COLLEGE_FOOTBALL_DATA_RECRUITING_GROUP_DICTIONARY_INPUT
  RECRUITING_TRANSFER_PORTAL: COLLEGE_FOOTBALL_DATA_RECRUITING_TRANSFER_PORTAL_INPUT
  RETURNING_PRODUCTION_TEAM: COLLEGE_FOOTBALL_DATA_RETURNING_PRODUCTION_TEAM_INPUT
  SEASON_STATS_PLAYER: COLLEGE_FOOTBALL_DATA_SEASON_STATS_PLAYER_INPUT
  SEASON_STATS_TEAM: COLLEGE_FOOTBALL_DATA_SEASON_STATS_TEAM_INPUT
  SEASON_TYPES_DICTIONARY: COLLEGE_FOOTBALL_DATA_SEASON_TYPES_DICTIONARY_INPUT
  TEAM_MATCHUP_HISTORY: COLLEGE_FOOTBALL_DATA_TEAM_MATCHUP_HISTORY_INPUT
  TEAM_RECORDS: COLLEGE_FOOTBALL_DATA_TEAM_RECORDS_INPUT
  TEAM_ROSTER: COLLEGE_FOOTBALL_DATA_TEAM_ROSTER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "COLLEGE_FOOTBALL_DATA".
 */
export type COLLEGE_FOOTBALL_DATA_TOOL_OUTPUTS = {
  ADVANCED_BOX_SCORE: COLLEGE_FOOTBALL_DATA_ADVANCED_BOX_SCORE_OUTPUT
  ADVANCED_GAME_STATS: COLLEGE_FOOTBALL_DATA_ADVANCED_GAME_STATS_OUTPUT
  ADVANCED_SEASON_STATS_TEAM: COLLEGE_FOOTBALL_DATA_ADVANCED_SEASON_STATS_TEAM_OUTPUT
  BETTING_LINES: COLLEGE_FOOTBALL_DATA_BETTING_LINES_OUTPUT
  COMPOSITE_TEAM_TALENT: COLLEGE_FOOTBALL_DATA_COMPOSITE_TEAM_TALENT_OUTPUT
  CONFERENCE_MEMBERSHIPS_HISTORY: COLLEGE_FOOTBALL_DATA_CONFERENCE_MEMBERSHIPS_HISTORY_OUTPUT
  DIVISIONS_BY_CONFERENCE: COLLEGE_FOOTBALL_DATA_DIVISIONS_BY_CONFERENCE_OUTPUT
  GET_DRIVE_DATA: COLLEGE_FOOTBALL_DATA_GET_DRIVE_DATA_OUTPUT
  GET_GAMES_AND_RESULTS: COLLEGE_FOOTBALL_DATA_GET_GAMES_AND_RESULTS_OUTPUT
  GET_GAME_MEDIA: COLLEGE_FOOTBALL_DATA_GET_GAME_MEDIA_OUTPUT
  GET_PLAYER_GAME_STATS: COLLEGE_FOOTBALL_DATA_GET_PLAYER_GAME_STATS_OUTPUT
  GET_TEAM_GAME_STATS: COLLEGE_FOOTBALL_DATA_GET_TEAM_GAME_STATS_OUTPUT
  LIST_COACHES_AND_HISTORY: COLLEGE_FOOTBALL_DATA_LIST_COACHES_AND_HISTORY_OUTPUT
  LIST_CONFERENCES: COLLEGE_FOOTBALL_DATA_LIST_CONFERENCES_OUTPUT
  LIST_FBS_TEAMS: COLLEGE_FOOTBALL_DATA_LIST_FBS_TEAMS_OUTPUT
  LIST_FCS_TEAMS: COLLEGE_FOOTBALL_DATA_LIST_FCS_TEAMS_OUTPUT
  LIST_TEAMS: COLLEGE_FOOTBALL_DATA_LIST_TEAMS_OUTPUT
  LIST_VENUES_STADIUMS: COLLEGE_FOOTBALL_DATA_LIST_VENUES_STADIUMS_OUTPUT
  NFL_DRAFT_PICKS: COLLEGE_FOOTBALL_DATA_NFL_DRAFT_PICKS_OUTPUT
  NFL_DRAFT_POSITIONS: COLLEGE_FOOTBALL_DATA_NFL_DRAFT_POSITIONS_OUTPUT
  NFL_DRAFT_TEAMS: COLLEGE_FOOTBALL_DATA_NFL_DRAFT_TEAMS_OUTPUT
  PLAY_BY_PLAY_DATA: COLLEGE_FOOTBALL_DATA_PLAY_BY_PLAY_DATA_OUTPUT
  PLAY_STATS_PLAYER: COLLEGE_FOOTBALL_DATA_PLAY_STATS_PLAYER_OUTPUT
  PLAY_STAT_TYPES: COLLEGE_FOOTBALL_DATA_PLAY_STAT_TYPES_OUTPUT
  PPA_PLAYER_BY_GAME_ACTION: COLLEGE_FOOTBALL_DATA_PPA_PLAYER_BY_GAME_ACTION_OUTPUT
  PPA_PLAYER_BY_SEASON: COLLEGE_FOOTBALL_DATA_PPA_PLAYER_BY_SEASON_OUTPUT
  PPA_PREDICTED_POINTS_EP: COLLEGE_FOOTBALL_DATA_PPA_PREDICTED_POINTS_EP_OUTPUT
  PPA_TEAM_BY_GAME: COLLEGE_FOOTBALL_DATA_PPA_TEAM_BY_GAME_OUTPUT
  RANKINGS_POLLS: COLLEGE_FOOTBALL_DATA_RANKINGS_POLLS_OUTPUT
  RATINGS_ELO: COLLEGE_FOOTBALL_DATA_RATINGS_ELO_OUTPUT
  RATINGS_SP_PLUS: COLLEGE_FOOTBALL_DATA_RATINGS_SP_PLUS_OUTPUT
  RATINGS_SRS: COLLEGE_FOOTBALL_DATA_RATINGS_SRS_OUTPUT
  RECRUITING_GROUP_DICTIONARY: COLLEGE_FOOTBALL_DATA_RECRUITING_GROUP_DICTIONARY_OUTPUT
  RECRUITING_TRANSFER_PORTAL: COLLEGE_FOOTBALL_DATA_RECRUITING_TRANSFER_PORTAL_OUTPUT
  RETURNING_PRODUCTION_TEAM: COLLEGE_FOOTBALL_DATA_RETURNING_PRODUCTION_TEAM_OUTPUT
  SEASON_STATS_PLAYER: COLLEGE_FOOTBALL_DATA_SEASON_STATS_PLAYER_OUTPUT
  SEASON_STATS_TEAM: COLLEGE_FOOTBALL_DATA_SEASON_STATS_TEAM_OUTPUT
  SEASON_TYPES_DICTIONARY: COLLEGE_FOOTBALL_DATA_SEASON_TYPES_DICTIONARY_OUTPUT
  TEAM_MATCHUP_HISTORY: COLLEGE_FOOTBALL_DATA_TEAM_MATCHUP_HISTORY_OUTPUT
  TEAM_RECORDS: COLLEGE_FOOTBALL_DATA_TEAM_RECORDS_OUTPUT
  TEAM_ROSTER: COLLEGE_FOOTBALL_DATA_TEAM_ROSTER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's COLLEGE_FOOTBALL_DATA toolkit.
 */
export const COLLEGE_FOOTBALL_DATA = {
  slug: "college_football_data",
  tools: {
    /**
     * Tool to retrieve advanced box score metrics for a single college football game. Use after selecting a specific game to access team- and player-level advanced analytics.
     */
    ADVANCED_BOX_SCORE: "COLLEGE_FOOTBALL_DATA_ADVANCED_BOX_SCORE",
    /**
     * Tool to retrieve advanced team metrics at the game level. Use when detailed offensive and defensive metrics (success rates, explosiveness, havoc) are needed.
     */
    ADVANCED_GAME_STATS: "COLLEGE_FOOTBALL_DATA_ADVANCED_GAME_STATS",
    /**
     * Tool to retrieve advanced season metrics aggregated by team and season. Use after selecting season and team filters.
     */
    ADVANCED_SEASON_STATS_TEAM: "COLLEGE_FOOTBALL_DATA_ADVANCED_SEASON_STATS_TEAM",
    /**
     * Tool to fetch betting lines and totals by game and provider. Use when you need current or historical betting line data filtered by specific criteria.
     */
    BETTING_LINES: "COLLEGE_FOOTBALL_DATA_BETTING_LINES",
    /**
     * Tool to fetch composite team talent rankings by season. Use when you need 247Sports team talent composites for specified seasons.
     */
    COMPOSITE_TEAM_TALENT: "COLLEGE_FOOTBALL_DATA_COMPOSITE_TEAM_TALENT",
    /**
     * Tool to retrieve historical conference memberships for teams, including years active and division. Use when you need to trace a team's conference history over time.
     */
    CONFERENCE_MEMBERSHIPS_HISTORY: "COLLEGE_FOOTBALL_DATA_CONFERENCE_MEMBERSHIPS_HISTORY",
    /**
     * Tool to list FBS/FCS conference divisions with active years and metadata. Use after specifying an optional season year to filter active divisions.
     */
    DIVISIONS_BY_CONFERENCE: "COLLEGE_FOOTBALL_DATA_DIVISIONS_BY_CONFERENCE",
    /**
     * Tool to retrieve drive-level data and results. Use when analyzing detailed drives for specified games after filtering by season, team, or week.
     */
    GET_DRIVE_DATA: "COLLEGE_FOOTBALL_DATA_GET_DRIVE_DATA",
    /**
     * Tool to retrieve games and results for a given season/week/team. Use when you need game schedules or outcomes filtered by specific criteria.
     */
    GET_GAMES_AND_RESULTS: "COLLEGE_FOOTBALL_DATA_GET_GAMES_AND_RESULTS",
    /**
     * Tool to retrieve game media information and broadcast schedules (TV, radio, web, etc.). Use after selecting season year and optional filters (week, team, conference). Example: "Get week 3 TV and radio outlets for 2025 SEC games."
     */
    GET_GAME_MEDIA: "COLLEGE_FOOTBALL_DATA_GET_GAME_MEDIA",
    /**
     * Tool to fetch player statistics at the game level. Use when you need detailed stats for players in games after filtering parameters.
     */
    GET_PLAYER_GAME_STATS: "COLLEGE_FOOTBALL_DATA_GET_PLAYER_GAME_STATS",
    /**
     * Tool to fetch team statistics at the game level. Use when you need detailed box score stats for games after filtering parameters.
     */
    GET_TEAM_GAME_STATS: "COLLEGE_FOOTBALL_DATA_GET_TEAM_GAME_STATS",
    /**
     * Tool to get coaching records and history. Use when you need coaches’ season-by-season data with optional filters.
     */
    LIST_COACHES_AND_HISTORY: "COLLEGE_FOOTBALL_DATA_LIST_COACHES_AND_HISTORY",
    /**
     * Tool to list all college football conferences. Use after authenticating to retrieve the up-to-date list of conferences.
     */
    LIST_CONFERENCES: "COLLEGE_FOOTBALL_DATA_LIST_CONFERENCES",
    /**
     * Tool to list FBS teams for a given season. Use after selecting the season year to retrieve all FBS teams.
     */
    LIST_FBS_TEAMS: "COLLEGE_FOOTBALL_DATA_LIST_FBS_TEAMS",
    /**
     * Tool to list FCS teams for a given season and conference. Use when you need a list of FCS programs filtered by season year and conference.
     */
    LIST_FCS_TEAMS: "COLLEGE_FOOTBALL_DATA_LIST_FCS_TEAMS",
    /**
     * Tool to list college football teams. Use when you need a list of teams filtered by season year and/or conference.
     */
    LIST_TEAMS: "COLLEGE_FOOTBALL_DATA_LIST_TEAMS",
    /**
     * Tool to list college football venues with metadata (name, capacity, location, etc.). Use when you need detailed venue information for a specific season.
     */
    LIST_VENUES_STADIUMS: "COLLEGE_FOOTBALL_DATA_LIST_VENUES_STADIUMS",
    /**
     * Tool to list NFL Draft picks. Use when you need draft pick data by year, round, team, player, etc.
     */
    NFL_DRAFT_PICKS: "COLLEGE_FOOTBALL_DATA_NFL_DRAFT_PICKS",
    /**
     * Tool to list NFL draft positions. Use when you need a standardized set of NFL positions for draft analysis.
     */
    NFL_DRAFT_POSITIONS: "COLLEGE_FOOTBALL_DATA_NFL_DRAFT_POSITIONS",
    /**
     * Tool to list NFL teams used in draft endpoints. Use when preparing to retrieve NFL draft data by team.
     */
    NFL_DRAFT_TEAMS: "COLLEGE_FOOTBALL_DATA_NFL_DRAFT_TEAMS",
    /**
     * Tool to fetch play-by-play data for college football games. Use when you need detailed play logs filtered by season, week, team, or game.
     */
    PLAY_BY_PLAY_DATA: "COLLEGE_FOOTBALL_DATA_PLAY_BY_PLAY_DATA",
    /**
     * Tool to fetch player-level stats tied to individual plays. Use when you need detailed play-by-play player statistics filtered by season, week, game, or athlete.
     */
    PLAY_STATS_PLAYER: "COLLEGE_FOOTBALL_DATA_PLAY_STATS_PLAYER",
    /**
     * Tool to fetch all play-level stat type definitions. Use when you need a catalog of available play stat types for filtering or referencing.
     */
    PLAY_STAT_TYPES: "COLLEGE_FOOTBALL_DATA_PLAY_STAT_TYPES",
    /**
     * Tool to retrieve player-level PPA/EPA broken down by game. Use when you need per-game PPA/EPA metrics for players filtered by season, week, or team.
     */
    PPA_PLAYER_BY_GAME_ACTION: "COLLEGE_FOOTBALL_DATA_PPA_PLAYER_BY_GAME_ACTION",
    /**
     * Tool to fetch player-level PPA/EPA aggregated by season. Use when you need seasonal PPA metrics for specific players or groups after applying filters.
     */
    PPA_PLAYER_BY_SEASON: "COLLEGE_FOOTBALL_DATA_PPA_PLAYER_BY_SEASON",
    /**
     * Tool to get expected points by down, distance, and field position. Use after selecting down (1–4) and distance to explore expected outcomes across the field.
     */
    PPA_PREDICTED_POINTS_EP: "COLLEGE_FOOTBALL_DATA_PPA_PREDICTED_POINTS_EP",
    /**
     * Tool to retrieve team Predicted Points Added (PPA) by game. Use when you need team-level PPA metrics for games after filtering by season, week, team, or date.
     */
    PPA_TEAM_BY_GAME: "COLLEGE_FOOTBALL_DATA_PPA_TEAM_BY_GAME",
    /**
     * Tool to retrieve weekly human/computer poll rankings. Use after specifying season year and optional week.
     */
    RANKINGS_POLLS: "COLLEGE_FOOTBALL_DATA_RANKINGS_POLLS",
    /**
     * Tool to retrieve Elo ratings for college football teams. Use when you need historical Elo ratings by season or for a specific team.
     */
    RATINGS_ELO: "COLLEGE_FOOTBALL_DATA_RATINGS_ELO",
    /**
     * Tool to retrieve SP+ team ratings. Use when you need historical SP+ ratings for a specific season after confirming the season year.
     */
    RATINGS_SP_PLUS: "COLLEGE_FOOTBALL_DATA_RATINGS_SP_PLUS",
    /**
     * Tool to retrieve Simple Rating System (SRS) team ratings. Use when you need historical SRS values for a season, optionally filtering by team or conference.
     */
    RATINGS_SRS: "COLLEGE_FOOTBALL_DATA_RATINGS_SRS",
    /**
     * Tool to list recruiting position group aggregations. Use when you need aggregated team recruiting ratings by position group (e.g., QB, RB, WR).
     */
    RECRUITING_GROUP_DICTIONARY: "COLLEGE_FOOTBALL_DATA_RECRUITING_GROUP_DICTIONARY",
    /**
     * Tool to retrieve transfer portal entries for a given season. Use when you need details of players entering the transfer portal, including from/to teams, position, and recruiting ratings.
     */
    RECRUITING_TRANSFER_PORTAL: "COLLEGE_FOOTBALL_DATA_RECRUITING_TRANSFER_PORTAL",
    /**
     * Tool to fetch Bill Connelly–style returning production splits by team and season. Use when evaluating returning offense, defense, and overall production for teams in a given season.
     */
    RETURNING_PRODUCTION_TEAM: "COLLEGE_FOOTBALL_DATA_RETURNING_PRODUCTION_TEAM",
    /**
     * Tool to fetch basic season stats aggregated by player and season. Use when you need overall player performance summaries for a given season.
     */
    SEASON_STATS_PLAYER: "COLLEGE_FOOTBALL_DATA_SEASON_STATS_PLAYER",
    /**
     * Tool to get basic season stats aggregated by team and season. Use when you need a summary of team-level statistics for a particular season.
     */
    SEASON_STATS_TEAM: "COLLEGE_FOOTBALL_DATA_SEASON_STATS_TEAM",
    /**
     * Tool to list season types. Uses the season calendar endpoint to extract valid seasonType values.
     */
    SEASON_TYPES_DICTIONARY: "COLLEGE_FOOTBALL_DATA_SEASON_TYPES_DICTIONARY",
    /**
     * Tool to retrieve head-to-head team matchup records over a date range. Use after selecting two FBS teams to compare their matchup history.
     */
    TEAM_MATCHUP_HISTORY: "COLLEGE_FOOTBALL_DATA_TEAM_MATCHUP_HISTORY",
    /**
     * Tool to fetch team season records by year with optional filters. Use after specifying the year and any optional filters (conference, team, division, seasonType, limit, offset) to retrieve records.
     */
    TEAM_RECORDS: "COLLEGE_FOOTBALL_DATA_TEAM_RECORDS",
    /**
     * Tool to fetch roster for a given team and season. Use when you need a team's roster for a specific year.
     */
    TEAM_ROSTER: "COLLEGE_FOOTBALL_DATA_TEAM_ROSTER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "COLLEGE_FOOTBALL_DATA".
 */
export type COLLEGE_FOOTBALL_DATA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "COLLEGE_FOOTBALL_DATA".
 */
export type COLLEGE_FOOTBALL_DATA_TRIGGER_EVENTS = {}
