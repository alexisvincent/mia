// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of OPTIMOROUTE's OPTIMOROUTE_GET_DRIVERS tool input.
 */
type OPTIMOROUTE_GET_DRIVERS_INPUT = object;

/**
 * Type of OPTIMOROUTE's OPTIMOROUTE_GET_DRIVERS tool output.
 */
type OPTIMOROUTE_GET_DRIVERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Drivers
       * @description List of drivers
       */
      drivers: {
          /**
           * Active
           * @description Whether the driver is active
           */
          active: boolean;
          /**
           * Color
           * @description Color assigned to the driver
           * @default null
           */
          color: string | null;
          /**
           * Driver Number
           * @description Driver's number
           */
          driverNumber: string;
          /**
           * Email
           * @description Driver's email address
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Unique identifier for the driver
           */
          id: string;
          /**
           * Name
           * @description Name of the driver
           */
          name: string;
          /**
           * Phone Number
           * @description Driver's phone number
           * @default null
           */
          phoneNumber: string | null;
          /**
           * Vehicle Type
           * @description Vehicle type for the driver
           */
          vehicleType: string;
      }[];
      /**
       * Error
       * @description Error message if the call failed
       * @default null
       */
      error: string | null;
      /**
       * Status
       * @description Status of the API call (e.g., 'OK')
       * @default null
       */
      status: string | null;
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
 * Type of OPTIMOROUTE's OPTIMOROUTE_GET_ROUTES tool input.
 */
type OPTIMOROUTE_GET_ROUTES_INPUT = {
  /**
   * Include Route Params
   * @description Whether to include route parameters (e.g., optimization settings)
   * @default false
   */
  include_route_params: boolean;
  /**
   * Include Stops
   * @description Whether to include detailed stop information for each route
   * @default false
   */
  include_stops: boolean;
  /**
   * Include Unassigned
   * @description Whether to include unassigned orders in the response
   * @default false
   */
  include_unassigned: boolean;
  /**
   * Route Date
   * @description Date for which to retrieve routes in YYYY-MM-DD format
   */
  route_date?: string;
  /**
   * Route Ids
   * @description Optional list of route IDs to filter the results
   * @default null
   */
  route_ids: string[] | null;
};

/**
 * Type of OPTIMOROUTE's OPTIMOROUTE_GET_ROUTES tool output.
 */
type OPTIMOROUTE_GET_ROUTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date
       * @description Date for which routes are returned (YYYY-MM-DD)
       */
      date: string;
      /**
       * Routes
       * @description List of route objects for the specified date
       */
      routes: {
          /**
           * Driver
           * @description Identifier or name of the assigned driver
           */
          driver: string;
          /**
           * Route Id
           * @description Unique identifier of the route
           */
          route_id: string;
          /**
           * Route Params
           * @description Route parameters/settings included if include_route_params=True
           * @default null
           */
          route_params: {
              [key: string]: unknown;
          } | null;
          /**
           * Route Status
           * @description Current status of the route (e.g., planned, completed)
           */
          route_status: string;
          /**
           * Stops
           * @description List of stops in the route (present if include_stops=True)
           * @default null
           */
          stops: {
              /**
               * Actual Arrival Time
               * @description Actual arrival time at the stop (ISO 8601 format)
               * @default null
               */
              actual_arrival_time: string | null;
              /**
               * Actual Departure Time
               * @description Actual departure time from the stop (ISO 8601 format)
               * @default null
               */
              actual_departure_time: string | null;
              /**
               * Address
               * @description Address details for the stop
               */
              address: {
                  [key: string]: unknown;
              };
              /**
               * Order No
               * @description Order number associated with this stop
               */
              order_no: string;
              /**
               * Planned Arrival Time
               * @description Planned arrival time at the stop (ISO 8601 format)
               */
              planned_arrival_time: string;
              /**
               * Planned Departure Time
               * @description Planned departure time from the stop (ISO 8601 format)
               */
              planned_departure_time: string;
              /**
               * Sequence
               * @description Sequence order of the stop in the route
               */
              sequence: number;
              /**
               * Stop Id
               * @description Unique identifier for the stop
               */
              stop_id: string;
          }[] | null;
      }[];
      /**
       * Unassigned Orders
       * @description List of unassigned orders if include_unassigned=True
       * @default null
       */
      unassigned_orders: {
          /**
           * Address
           * @description Address details for the unassigned order
           */
          address: {
              [key: string]: unknown;
          };
          /**
           * Order No
           * @description Order number of the unassigned order
           */
          order_no: string;
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
 * Type map of all available tool input types for toolkit "OPTIMOROUTE".
 */
export type OPTIMOROUTE_TOOL_INPUTS = {
  GET_DRIVERS: OPTIMOROUTE_GET_DRIVERS_INPUT
  GET_ROUTES: OPTIMOROUTE_GET_ROUTES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "OPTIMOROUTE".
 */
export type OPTIMOROUTE_TOOL_OUTPUTS = {
  GET_DRIVERS: OPTIMOROUTE_GET_DRIVERS_OUTPUT
  GET_ROUTES: OPTIMOROUTE_GET_ROUTES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's OPTIMOROUTE toolkit.
 */
export const OPTIMOROUTE = {
  slug: "optimoroute",
  tools: {
    /**
     * Tool to retrieve all drivers in the system. use when you need up-to-date driver data including status and contact information.
     */
    GET_DRIVERS: "OPTIMOROUTE_GET_DRIVERS",
    /**
     * Tool to retrieve all planned routes for a given date. use when you need a detailed view of routes including optional stops, route parameters, and unassigned orders.
     */
    GET_ROUTES: "OPTIMOROUTE_GET_ROUTES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "OPTIMOROUTE".
 */
export type OPTIMOROUTE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "OPTIMOROUTE".
 */
export type OPTIMOROUTE_TRIGGER_EVENTS = {}
