// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MAPULUS's MAPULUS_FIND_LOCATION_WITH_EXTERNAL_ID tool input.
 */
type MAPULUS_FIND_LOCATION_WITH_EXTERNAL_ID_INPUT = {
  /**
   * External Id
   * @description External identifier to filter and find the location(s).
   */
  external_id?: string;
};

/**
 * Type of MAPULUS's MAPULUS_FIND_LOCATION_WITH_EXTERNAL_ID tool output.
 */
type MAPULUS_FIND_LOCATION_WITH_EXTERNAL_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Locations
       * @description List of locations matching the external ID.
       */
      locations: {
          /**
           * External Id
           * @description Associated external identifier for the location.
           */
          external_id: string;
          /**
           * Id
           * @description Unique identifier for the location.
           */
          id: string;
          /**
           * Latitude
           * @description Latitude of the location.
           */
          latitude: number;
          /**
           * Longitude
           * @description Longitude of the location.
           */
          longitude: number;
          /**
           * Name
           * @description Name of the location.
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
 * Type of MAPULUS's MAPULUS_GET_MAP_DETAILS tool input.
 */
type MAPULUS_GET_MAP_DETAILS_INPUT = {
  /**
   * Map Id
   * @description The unique identifier of the map to retrieve
   */
  map_id?: string;
};

/**
 * Type of MAPULUS's MAPULUS_GET_MAP_DETAILS tool output.
 */
type MAPULUS_GET_MAP_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO8601 timestamp when the map was created
       */
      created_at: string;
      /**
       * Description
       * @description Human-readable description of the map
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the map
       */
      id: string;
      /**
       * Object
       * @description Type of the returned object (e.g., 'map')
       * @default null
       */
      object: string | null;
      /**
       * Title
       * @description Title of the map
       */
      title: string;
      /**
       * Updated At
       * @description ISO8601 timestamp when the map was last updated
       */
      updated_at: string;
  } & {
      [key: string]: unknown;
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
 * Type of MAPULUS's MAPULUS_LIST_LOCATIONS tool input.
 */
type MAPULUS_LIST_LOCATIONS_INPUT = {
  /**
   * Limit
   * @description Maximum number of locations to return (1-100)
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Results offset for pagination (must be >= 0)
   * @default null
   */
  offset: number | null;
  /**
   * Parent
   * @description Location ID to filter child locations
   * @default null
   */
  parent: string | null;
  /**
   * Query
   * @description Substring to filter locations by name
   * @default null
   */
  query: string | null;
};

/**
 * Type of MAPULUS's MAPULUS_LIST_LOCATIONS tool output.
 */
type MAPULUS_LIST_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Locations
       * @description Array of location objects
       */
      locations: {
          /**
           * Coordinates
           * @description Latitude and longitude of the location
           */
          coordinates: {
              /**
               * Latitude
               * @description Latitude coordinate of the location
               */
              latitude: number;
              /**
               * Longitude
               * @description Longitude coordinate of the location
               */
              longitude: number;
          };
          /**
           * Id
           * @description Unique identifier of the location
           */
          id: string;
          /**
           * Name
           * @description Name of the location
           */
          name: string;
      }[];
      /**
       * Total
       * @description Total count of locations
       */
      total: number;
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
 * Type of MAPULUS's MAPULUS_LIST_MAPS tool input.
 */
type MAPULUS_LIST_MAPS_INPUT = {
  /**
   * Name
   * @description Filter maps by name (partial match allowed)
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number to retrieve (must be >= 1)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page (default 50, max 100)
   * @default null
   */
  perPage: number | null;
  /**
   * Sort By
   * @description Field to sort by (default 'createdAt')
   * @default null
   */
  sortBy: string | null;
  /**
   * Sort Order
   * @description Sort order: 'asc' or 'desc' (default 'desc')
   * @default null
   * @enum {string|null}
   */
  sortOrder: "asc" | "desc" | null;
  /**
   * Tag
   * @description Filter maps by a single tag (exact match)
   * @default null
   */
  tag: string | null;
};

/**
 * Type of MAPULUS's MAPULUS_LIST_MAPS tool output.
 */
type MAPULUS_LIST_MAPS_OUTPUT = {
  /**
   * Count
   * @description Total number of maps matching the criteria
   */
  count?: number;
  /**
   * Data
   * @description Array of map records
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp (ISO 8601)
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the map
       * @default null
       */
      description: string | null;
      /**
       * Key
       * @description Unique identifier of the map
       */
      key: string;
      /**
       * Name
       * @description Name of the map
       */
      name: string;
      /**
       * Tags
       * @description List of tags associated with the map
       */
      tags: string[];
      /**
       * Updated At
       * @description Last update timestamp (ISO 8601)
       */
      updatedAt: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Page
   * @description Current page number
   */
  page?: number;
  /**
   * Per Page
   * @description Number of items per page
   */
  perPage?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "MAPULUS".
 */
export type MAPULUS_TOOL_INPUTS = {
  FIND_LOCATION_WITH_EXTERNAL_ID: MAPULUS_FIND_LOCATION_WITH_EXTERNAL_ID_INPUT
  GET_MAP_DETAILS: MAPULUS_GET_MAP_DETAILS_INPUT
  LIST_LOCATIONS: MAPULUS_LIST_LOCATIONS_INPUT
  LIST_MAPS: MAPULUS_LIST_MAPS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MAPULUS".
 */
export type MAPULUS_TOOL_OUTPUTS = {
  FIND_LOCATION_WITH_EXTERNAL_ID: MAPULUS_FIND_LOCATION_WITH_EXTERNAL_ID_OUTPUT
  GET_MAP_DETAILS: MAPULUS_GET_MAP_DETAILS_OUTPUT
  LIST_LOCATIONS: MAPULUS_LIST_LOCATIONS_OUTPUT
  LIST_MAPS: MAPULUS_LIST_MAPS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MAPULUS toolkit.
 */
export const MAPULUS = {
  slug: "mapulus",
  tools: {
    /**
     * Tool to retrieve locations by external id. use after obtaining an external identifier to find the matching location(s).
     */
    FIND_LOCATION_WITH_EXTERNAL_ID: "MAPULUS_FIND_LOCATION_WITH_EXTERNAL_ID",
    /**
     * Tool to retrieve detailed information about a map. use when you have a map id and need full map metadata.
     */
    GET_MAP_DETAILS: "MAPULUS_GET_MAP_DETAILS",
    /**
     * Tool to list all locations. use after authentication to retrieve a paginated list of locations.
     */
    LIST_LOCATIONS: "MAPULUS_LIST_LOCATIONS",
    /**
     * Tool to list all maps accessible to the user. use after authentication to retrieve maps with pagination and optional filtering.
     */
    LIST_MAPS: "MAPULUS_LIST_MAPS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MAPULUS".
 */
export type MAPULUS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MAPULUS".
 */
export type MAPULUS_TRIGGER_EVENTS = {}
