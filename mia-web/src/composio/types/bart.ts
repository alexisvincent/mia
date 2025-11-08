// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BART's BART_BART_GET_API_VERSION tool input.
 */
type BART_BART_GET_API_VERSION_INPUT = object;

/**
 * Type of BART's BART_BART_GET_API_VERSION tool output.
 */
type BART_BART_GET_API_VERSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of BART's BART_BART_GET_AVAILABLE_SCHEDULES tool input.
 */
type BART_BART_GET_AVAILABLE_SCHEDULES_INPUT = object;

/**
 * Type of BART's BART_BART_GET_AVAILABLE_SCHEDULES tool output.
 */
type BART_BART_GET_AVAILABLE_SCHEDULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Optional message from the API; usually empty
       * @default null
       */
      message: string | null;
      /**
       * Schedules
       * @description List of available schedules with IDs and effective dates
       */
      schedules: {
          /**
           * Effectivedate
           * @description Effective date of the schedule in MM/DD/YYYY format
           */
          effectivedate: string;
          /**
           * Id
           * @description Schedule identifier
           */
          id: string;
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
 * Type of BART's BART_BART_GET_ROUTE_INFO tool input.
 */
type BART_BART_GET_ROUTE_INFO_INPUT = {
  /**
   * Date
   * @description Optional date in mm/dd/yyyy format or 'today'/'now' to select the schedule
   * @default null
   */
  date: string | null;
  /**
   * Route
   * @description Route number (1–12) or 'all' to retrieve configuration for specific or all routes
   * @enum {string}
   */
  route?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "all";
};

/**
 * Type of BART's BART_BART_GET_ROUTE_INFO tool output.
 */
type BART_BART_GET_ROUTE_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Root
       * @description Root object containing route information
       */
      root: {
          /**
           * Message
           * @description Additional message, if any
           * @default null
           */
          message: string | null;
          /**
           * Routes
           * @description Wrapper for route(s) information
           */
          routes: {
              /**
               * Route
               * @description Route object or list of routes when 'all' is requested
               */
              route: {
                  /**
                   * Abbr
                   * @description Route abbreviation
                   */
                  abbr: string;
                  /**
                   * Color
                   * @description Color code for route
                   */
                  color: string;
                  /**
                   * Config
                   * @description Configuration listing stations in order
                   */
                  config: {
                      /**
                       * Station
                       * @description Ordered list of station abbreviations along the route (origin to destination)
                       */
                      station: string[];
                  };
                  /**
                   * Destination
                   * @description Destination station abbreviation
                   */
                  destination: string;
                  /**
                   * Direction
                   * @description Direction description, if any
                   */
                  direction: string;
                  /**
                   * Hexcolor
                   * @description Hex color code for route
                   */
                  hexcolor: string;
                  /**
                   * Name
                   * @description Full route name
                   */
                  name: string;
                  /**
                   * Num Stns
                   * @description Number of stations on route
                   */
                  num_stns: string;
                  /**
                   * Number
                   * @description Route number
                   */
                  number: string;
                  /**
                   * Origin
                   * @description Origin station abbreviation
                   */
                  origin: string;
                  /**
                   * Route Id
                   * @description Route identifier (e.g., 'ROUTE 6')
                   */
                  routeID: string;
              }[] | null;
          };
          /**
           * Uri
           * @description URI of the request
           */
          uri: string;
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
 * Type of BART's BART_BART_GET_STATIONS tool input.
 */
type BART_BART_GET_STATIONS_INPUT = object;

/**
 * Type of BART's BART_BART_GET_STATIONS tool output.
 */
type BART_BART_GET_STATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of BART's BART_GET_GTFS_RT_TRIP_UPDATES tool input.
 */
type BART_GET_GTFS_RT_TRIP_UPDATES_INPUT = object;

/**
 * Type of BART's BART_GET_GTFS_RT_TRIP_UPDATES tool output.
 */
type BART_GET_GTFS_RT_TRIP_UPDATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Raw GTFS-Realtime Protocol Buffer payload of trip updates
       */
      content: string;
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
 * Type of BART's BART_GET_GTFS_STATIC_SCHEDULE_FEED tool input.
 */
type BART_GET_GTFS_STATIC_SCHEDULE_FEED_INPUT = object;

/**
 * Type of BART's BART_GET_GTFS_STATIC_SCHEDULE_FEED tool output.
 */
type BART_GET_GTFS_STATIC_SCHEDULE_FEED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Binary content of the GTFS ZIP archive
       */
      content: string;
      /**
       * Url
       * @description Permalink URL of the GTFS static feed (google_transit.zip)
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
 * Type of BART's BART_GET_SCHEDULE_ARRIVE tool input.
 */
type BART_GET_SCHEDULE_ARRIVE_INPUT = {
  /**
   * A
   * @description Number of trips after the specified time (1-3)
   * @default 2
   */
  a: number;
  /**
   * B
   * @description Number of trips before the specified time (0-3)
   * @default 2
   */
  b: number;
  /**
   * Date
   * @description Date as 'MM/DD/YYYY', 'today', or 'now' (defaults to today)
   * @default null
   */
  date: string | null;
  /**
   * Dest
   * @description Destination station abbreviation (4 letters)
   */
  dest?: string;
  /**
   * L
   * @description Include legend flag: 0 omit, 1 include
   * @default 0
   */
  l: number;
  /**
   * Orig
   * @description Origin station abbreviation (4 letters)
   */
  orig?: string;
  /**
   * Time
   * @description Arrival time in 'h:mm AM/PM' or 'now' (defaults to now)
   * @default null
   */
  time: string | null;
};

/**
 * Type of BART's BART_GET_SCHEDULE_ARRIVE tool output.
 */
type BART_GET_SCHEDULE_ARRIVE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Root */
      root: {
          /** Destination */
          destination: string;
          /** Message */
          message: {
              /** Legend */
              legend: string;
          };
          /** Origin */
          origin: string;
          /** Sched Num */
          sched_num: string;
          /** Schedule */
          schedule: {
              /** After */
              after: string;
              /** Before */
              before: string;
              /** Date */
              date: string;
              /** Request */
              request: {
                  /** Trip */
                  trip: {
                      /** @Clipper */
                      "@clipper": string;
                      /** @Dest Time Date */
                      "@destTimeDate": string;
                      /** @Dest Time Min */
                      "@destTimeMin": string;
                      /** @Destination */
                      "@destination": string;
                      /** @Fare */
                      "@fare": string;
                      /** @Orig Time Date */
                      "@origTimeDate": string;
                      /** @Orig Time Min */
                      "@origTimeMin": string;
                      /** @Origin */
                      "@origin": string;
                      /** @Trip Time */
                      "@tripTime": string;
                      /** Fares */
                      fares: {
                          /** @Level */
                          "@level": string;
                          /** Fare */
                          fare: {
                              /** @Amount */
                              "@amount": string;
                              /** @Class */
                              "@class": string;
                              /** @Name */
                              "@name": string;
                          }[];
                      };
                      /** Leg */
                      leg: {
                          /** @Bikeflag */
                          "@bikeflag": number;
                          /** @Dest Time Date */
                          "@destTimeDate": string;
                          /** @Dest Time Min */
                          "@destTimeMin": string;
                          /** @Destination */
                          "@destination": string;
                          /**
                           * @Destination Platform
                           * @default null
                           */
                          "@destinationPlatform": string | null;
                          /** @Line */
                          "@line": string;
                          /** @Load */
                          "@load": number;
                          /** @Order */
                          "@order": number;
                          /** @Orig Time Date */
                          "@origTimeDate": string;
                          /** @Orig Time Min */
                          "@origTimeMin": string;
                          /** @Origin */
                          "@origin": string;
                          /**
                           * @Origin Platform
                           * @default null
                           */
                          "@originPlatform": string | null;
                          /** @Train Head Station */
                          "@trainHeadStation": string;
                          /** @Train Id */
                          "@trainId": string;
                          /** @Train Idx */
                          "@trainIdx": string;
                          /** @Transfercode */
                          "@transfercode": string;
                      }[];
                  }[];
              };
              /** Time */
              time: string;
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
 * Type of BART's BART_GET_SCHEDULE_DEPART tool input.
 */
type BART_GET_SCHEDULE_DEPART_INPUT = {
  /**
   * A
   * @description Trips after specified time (1-3); default is 2
   * @default null
   */
  a: number | null;
  /**
   * B
   * @description Trips before specified time (0-3); default is 2
   * @default null
   */
  b: number | null;
  /**
   * Date
   * @description Date 'MM/DD/YYYY' or 'today'/'now'; defaults to current date
   * @default null
   */
  date: string | null;
  /**
   * Dest
   * @description Destination station abbreviation (4 characters)
   */
  dest?: string;
  /**
   * Json
   * @description Set to 'y' to request JSON output
   * @default y
   * @constant
   */
  json: "y";
  /**
   * L
   * @description Include legend: 0=no, 1=yes; default is 0
   * @default null
   */
  l: number | null;
  /**
   * Orig
   * @description Origin station abbreviation (4 characters)
   */
  orig?: string;
  /**
   * Time
   * @description Departure time 'h:mm am/pm' or 'now'; defaults to current time
   * @default null
   */
  time: string | null;
};

/**
 * Type of BART's BART_GET_SCHEDULE_DEPART tool output.
 */
type BART_GET_SCHEDULE_DEPART_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Destination
       * @description Destination station code
       */
      destination: string;
      /**
       * Message
       * @description Additional message content
       */
      message: {
          /**
           * Legend
           * @description Legend explaining codes and flags
           */
          legend: string;
      };
      /**
       * Origin
       * @description Origin station code
       */
      origin: string;
      /**
       * Sched Num
       * @description Total number of schedule entries
       */
      sched_num: number;
      /**
       * Schedule
       * @description Schedule information
       */
      schedule: {
          /**
           * After
           * @description Number of trips after requested time
           */
          after: number;
          /**
           * Before
           * @description Number of trips before requested time
           */
          before: number;
          /**
           * Date
           * @description Schedule date (e.g., 'Jan 2, 2018')
           */
          date: string;
          /**
           * Request
           * @description Trip request details
           */
          request: {
              /**
               * Trip
               * @description List of trip options based on departure time
               */
              trip: {
                  /**
                   * @Clipper
                   * @description Deprecated clipper fare attribute
                   */
                  "@clipper": string;
                  /**
                   * @Dest Time Date
                   * @description Arrival date at destination
                   */
                  "@destTimeDate": string;
                  /**
                   * @Dest Time Min
                   * @description Arrival time at destination
                   */
                  "@destTimeMin": string;
                  /**
                   * @Destination
                   * @description Trip destination station code
                   */
                  "@destination": string;
                  /**
                   * @Fare
                   * @description Deprecated fare attribute; use 'fares'
                   */
                  "@fare": string;
                  /**
                   * @Orig Time Date
                   * @description Departure date from origin
                   */
                  "@origTimeDate": string;
                  /**
                   * @Orig Time Min
                   * @description Departure time from origin
                   */
                  "@origTimeMin": string;
                  /**
                   * @Origin
                   * @description Trip origin station code
                   */
                  "@origin": string;
                  /**
                   * @Trip Time
                   * @description Total trip time in minutes
                   */
                  "@tripTime": string;
                  /**
                   * Fares
                   * @description Fares information for the trip
                   */
                  fares: {
                      /**
                       * @Level
                       * @description Fares level (e.g., 'normal')
                       */
                      "@level": string;
                      /**
                       * Fare
                       * @description List of fare options
                       */
                      fare: {
                          /**
                           * @Amount
                           * @description Fare amount
                           */
                          "@amount": string;
                          /**
                           * @Class
                           * @description Fare class
                           */
                          "@class": string;
                          /**
                           * @Name
                           * @description Fare name
                           */
                          "@name": string;
                      }[];
                  };
                  /**
                   * Leg
                   * @description List of legs in the trip
                   */
                  leg: {
                      /**
                       * @Bikeflag
                       * @description Bike flag: '1' allowed, '0' not allowed
                       */
                      "@bikeflag": string;
                      /**
                       * @Dest Time Date
                       * @description Arrival date at destination
                       */
                      "@destTimeDate": string;
                      /**
                       * @Dest Time Min
                       * @description Arrival time at destination
                       */
                      "@destTimeMin": string;
                      /**
                       * @Destination
                       * @description Leg destination station code
                       */
                      "@destination": string;
                      /**
                       * @Destination Platform
                       * @description Destination platform
                       */
                      "@destinationPlatform": string;
                      /**
                       * @Line
                       * @description Route line
                       */
                      "@line": string;
                      /**
                       * @Load
                       * @description Load factor
                       */
                      "@load": string;
                      /**
                       * @Order
                       * @description Leg sequence number
                       */
                      "@order": number;
                      /**
                       * @Orig Time Date
                       * @description Departure date from origin
                       */
                      "@origTimeDate": string;
                      /**
                       * @Orig Time Min
                       * @description Departure time from origin
                       */
                      "@origTimeMin": string;
                      /**
                       * @Origin
                       * @description Leg origin station code
                       */
                      "@origin": string;
                      /**
                       * @Origin Platform
                       * @description Origin platform
                       */
                      "@originPlatform": string;
                      /**
                       * @Train Head Station
                       * @description Train head station
                       */
                      "@trainHeadStation": string;
                      /**
                       * @Train Id
                       * @description Train ID
                       * @default null
                       */
                      "@trainId": string | null;
                      /**
                       * @Train Idx
                       * @description Train index
                       * @default null
                       */
                      "@trainIdx": string | null;
                      /**
                       * @Transfercode
                       * @description Transfer code (blank if none)
                       * @default null
                       */
                      "@transfercode": string | null;
                  }[];
              }[];
          };
          /**
           * Time
           * @description Requested departure time (e.g., '10:10 AM')
           */
          time: string;
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
 * Type of BART's BART_GET_SERVICE_ADVISORIES tool input.
 */
type BART_GET_SERVICE_ADVISORIES_INPUT = {
  /**
   * Orig
   * @description Station code to filter advisories. Currently only 'all' (system-wide) is supported.
   * @default all
   */
  orig: string;
};

/**
 * Type of BART's BART_GET_SERVICE_ADVISORIES tool output.
 */
type BART_GET_SERVICE_ADVISORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * XMLMeta
       * @description Metadata about the XML response: version and encoding.
       * @default null
       */
      "?xml": {
          /**
           * @Encoding
           * @description XML encoding
           */
          "@encoding": string;
          /**
           * @Version
           * @description XML version
           */
          "@version": string;
      } | null;
      /**
       * Root
       * @description Root object containing advisories
       */
      root: {
          /**
           * @Id
           * @description Unique ID of the advisory collection
           */
          "@id": string;
          /**
           * Bsa
           * @description List of advisory entries
           */
          bsa: {
              /**
               * Description
               * @description Full advisory description text
               */
              description: {
                  /** #Cdata Section */
                  "#cdata-section": string;
              };
              /**
               * Expires
               * @description Timestamp when advisory expires
               * @default null
               */
              expires: string | null;
              /**
               * Posted
               * @description Timestamp when advisory was posted
               * @default null
               */
              posted: string | null;
              /**
               * Sms Text
               * @description Shortened advisory text suitable for SMS
               */
              sms_text: {
                  /** #Cdata Section */
                  "#cdata-section": string;
              };
              /**
               * Station
               * @description Station code for advisory (empty for system-wide)
               */
              station: string;
              /**
               * Type
               * @description Advisory type, e.g., 'DELAY' or 'EMERGENCY'
               * @default null
               */
              type: string | null;
          }[];
          /**
           * Date
           * @description Date of advisories
           */
          date: string;
          /**
           * Message
           * @description Status message or empty
           */
          message: string;
          /**
           * Time
           * @description Time of advisories
           */
          time: string;
          /**
           * Uri
           * @description Request URI for the advisories
           */
          uri: {
              /** #Cdata Section */
              "#cdata-section": string;
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
 * Type of BART's BART_GET_STATION_INFO tool input.
 */
type BART_GET_STATION_INFO_INPUT = {
  /**
   * Orig
   * @description Three-letter BART station abbreviation, e.g. 'BALB'.
   */
  orig?: string;
};

/**
 * Type of BART's BART_GET_STATION_INFO tool output.
 */
type BART_GET_STATION_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Root
       * @description Root object containing station information
       */
      root: {
          /**
           * Stations
           * @description Stations information wrapper
           */
          stations: {
              /**
               * Station
               * @description Station details container
               */
              station: {
                  /**
                   * Abbr
                   * @description Station abbreviation
                   */
                  abbr: string;
                  /**
                   * Address
                   * @description Street address of the station
                   */
                  address: string;
                  /**
                   * City
                   * @description City where the station is located
                   */
                  city: string;
                  /**
                   * County
                   * @description County where the station is located
                   */
                  county: string;
                  /**
                   * Cross Street
                   * @description Nearest cross street to the station
                   */
                  cross_street: string;
                  /**
                   * Food
                   * @description Food and other transit facilities available at the station
                   */
                  food: string;
                  /**
                   * Gtfs Latitude
                   * @description Latitude in GTFS format
                   */
                  gtfs_latitude: number;
                  /**
                   * Gtfs Longitude
                   * @description Longitude in GTFS format
                   */
                  gtfs_longitude: number;
                  /**
                   * Intro
                   * @description General introductory information about the station
                   */
                  intro: string;
                  /**
                   * Name
                   * @description Station full name
                   */
                  name: string;
                  /**
                   * North Platforms
                   * @description Northbound platform details
                   */
                  north_platforms: {
                      /**
                       * Platform
                       * @description List of platform identifiers for this station direction
                       */
                      platform: string[];
                  };
                  /**
                   * North Routes
                   * @description Northbound routes serving this station
                   */
                  north_routes: {
                      /**
                       * Route
                       * @description List of route abbreviations serving this direction
                       */
                      route: string[];
                  };
                  /**
                   * Shopping
                   * @description Shopping options available at the station
                   */
                  shopping: string;
                  /**
                   * South Platforms
                   * @description Southbound platform details
                   */
                  south_platforms: {
                      /**
                       * Platform
                       * @description List of platform identifiers for this station direction
                       */
                      platform: string[];
                  };
                  /**
                   * South Routes
                   * @description Southbound routes serving this station
                   */
                  south_routes: {
                      /**
                       * Route
                       * @description List of route abbreviations serving this direction
                       */
                      route: string[];
                  };
                  /**
                   * State
                   * @description State where the station is located
                   */
                  state: string;
                  /**
                   * Zipcode
                   * @description Zipcode for the station address
                   */
                  zipcode: string;
              };
          };
          /**
           * Uri
           * @description URI of the request
           */
          uri: string;
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
 * Type map of all available tool input types for toolkit "BART".
 */
export type BART_TOOL_INPUTS = {
  BART_GET_API_VERSION: BART_BART_GET_API_VERSION_INPUT
  BART_GET_AVAILABLE_SCHEDULES: BART_BART_GET_AVAILABLE_SCHEDULES_INPUT
  BART_GET_ROUTE_INFO: BART_BART_GET_ROUTE_INFO_INPUT
  BART_GET_STATIONS: BART_BART_GET_STATIONS_INPUT
  GET_GTFS_RT_TRIP_UPDATES: BART_GET_GTFS_RT_TRIP_UPDATES_INPUT
  GET_GTFS_STATIC_SCHEDULE_FEED: BART_GET_GTFS_STATIC_SCHEDULE_FEED_INPUT
  GET_SCHEDULE_ARRIVE: BART_GET_SCHEDULE_ARRIVE_INPUT
  GET_SCHEDULE_DEPART: BART_GET_SCHEDULE_DEPART_INPUT
  GET_SERVICE_ADVISORIES: BART_GET_SERVICE_ADVISORIES_INPUT
  GET_STATION_INFO: BART_GET_STATION_INFO_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BART".
 */
export type BART_TOOL_OUTPUTS = {
  BART_GET_API_VERSION: BART_BART_GET_API_VERSION_OUTPUT
  BART_GET_AVAILABLE_SCHEDULES: BART_BART_GET_AVAILABLE_SCHEDULES_OUTPUT
  BART_GET_ROUTE_INFO: BART_BART_GET_ROUTE_INFO_OUTPUT
  BART_GET_STATIONS: BART_BART_GET_STATIONS_OUTPUT
  GET_GTFS_RT_TRIP_UPDATES: BART_GET_GTFS_RT_TRIP_UPDATES_OUTPUT
  GET_GTFS_STATIC_SCHEDULE_FEED: BART_GET_GTFS_STATIC_SCHEDULE_FEED_OUTPUT
  GET_SCHEDULE_ARRIVE: BART_GET_SCHEDULE_ARRIVE_OUTPUT
  GET_SCHEDULE_DEPART: BART_GET_SCHEDULE_DEPART_OUTPUT
  GET_SERVICE_ADVISORIES: BART_GET_SERVICE_ADVISORIES_OUTPUT
  GET_STATION_INFO: BART_GET_STATION_INFO_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BART toolkit.
 */
export const BART = {
  slug: "bart",
  tools: {
    /**
     * Stub action for bart api version retrieval.
     */
    BART_GET_API_VERSION: "BART_BART_GET_API_VERSION",
    /**
     * Tool to retrieve a list of currently released bart schedules. use when you need schedule versioning info.
     */
    BART_GET_AVAILABLE_SCHEDULES: "BART_BART_GET_AVAILABLE_SCHEDULES",
    /**
     * Tool to fetch detailed information about a specific bart route. use when you know the route number (1–12) or need all routes configuration. call after confirming the route id.
     */
    BART_GET_ROUTE_INFO: "BART_BART_GET_ROUTE_INFO",
    /**
     * Stub action for bart stations retrieval.
     */
    BART_GET_STATIONS: "BART_BART_GET_STATIONS",
    /**
     * Tool to fetch real-time trip updates in gtfs-realtime format. use when you need the latest live trip information as raw protobuf.
     */
    GET_GTFS_RT_TRIP_UPDATES: "BART_GET_GTFS_RT_TRIP_UPDATES",
    /**
     * Tool to download the static gtfs feed (google transit.zip). use when needing the latest gtfs schedule data.
     */
    GET_GTFS_STATIC_SCHEDULE_FEED: "BART_GET_GTFS_STATIC_SCHEDULE_FEED",
    /**
     * Tool to retrieve schedule information based on a specified arrival time. use when planning trips arriving by a given time.
     */
    GET_SCHEDULE_ARRIVE: "BART_GET_SCHEDULE_ARRIVE",
    /**
     * Tool to get schedule information based on a specified depart time. use when planning trips from an origin to a destination with time constraints after confirming station codes.
     */
    GET_SCHEDULE_DEPART: "BART_GET_SCHEDULE_DEPART",
    /**
     * Tool to fetch current bart service advisories. use when you need up-to-date system-wide or station-level alerts before presenting or planning transit routes.
     */
    GET_SERVICE_ADVISORIES: "BART_GET_SERVICE_ADVISORIES",
    /**
     * Tool to fetch detailed information for a specified bart station. use after you have a station's abbreviation. (e.g., get station info for 'balb')
     */
    GET_STATION_INFO: "BART_GET_STATION_INFO",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BART".
 */
export type BART_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BART".
 */
export type BART_TRIGGER_EVENTS = {}
