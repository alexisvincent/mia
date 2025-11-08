// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SEAT_GEEK's SEAT_GEEK_GET_EVENT_DETAILS tool input.
 */
type SEAT_GEEK_GET_EVENT_DETAILS_INPUT = {
  /**
   * Event Id
   * @description The unique ID of the event to retrieve details for.
   */
  event_id?: string;
};

/**
 * Type of SEAT_GEEK's SEAT_GEEK_GET_EVENT_DETAILS tool output.
 */
type SEAT_GEEK_GET_EVENT_DETAILS_OUTPUT = {
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
 * Type of SEAT_GEEK's SEAT_GEEK_GET_EVENT_RECOMMENDATIONS tool input.
 */
type SEAT_GEEK_GET_EVENT_RECOMMENDATIONS_INPUT = {
  /**
   * Events Id
   * @description One or more event IDs to use as recommendation seeds. Comma-separated for multiple.
   * @default null
   */
  events_id: string | null;
  /**
   * Geoip
   * @description Use 'true' to geolocate by client IP or provide a specific IP address.
   * @default null
   */
  geoip: string | null;
  /**
   * Lat
   * @description Latitude for location-based recommendations. Must be provided with longitude.
   * @default null
   */
  lat: number | null;
  /**
   * Lon
   * @description Longitude for location-based recommendations. Must be provided with latitude.
   * @default null
   */
  lon: number | null;
  /**
   * Per Page
   * @description Number of results per page. Default is 10.
   * @default null
   */
  per_page: number | null;
  /**
   * Performers Id
   * @description One or more performer IDs to use as recommendation seeds. Comma-separated for multiple.
   * @default null
   */
  performers_id: string | null;
  /**
   * Postal Code
   * @description Postal code for location-based recommendations.
   * @default null
   */
  postal_code: string | null;
  /**
   * Range
   * @description Radius from geolocation point to search within. Default is 200mi.
   * @default null
   */
  range: string | null;
};

/**
 * Type of SEAT_GEEK's SEAT_GEEK_GET_EVENT_RECOMMENDATIONS tool output.
 */
type SEAT_GEEK_GET_EVENT_RECOMMENDATIONS_OUTPUT = {
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
 * Type of SEAT_GEEK's SEAT_GEEK_GET_EVENT_SEATING tool input.
 */
type SEAT_GEEK_GET_EVENT_SEATING_INPUT = {
  /**
   * Event Id
   * @description The unique ID of the event to retrieve seating information for.
   */
  event_id?: number;
};

/**
 * Type of SEAT_GEEK's SEAT_GEEK_GET_EVENT_SEATING tool output.
 */
type SEAT_GEEK_GET_EVENT_SEATING_OUTPUT = {
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
 * Type of SEAT_GEEK's SEAT_GEEK_GET_PERFORMER_DETAILS tool input.
 */
type SEAT_GEEK_GET_PERFORMER_DETAILS_INPUT = {
  /**
   * Performer Id
   * @description The unique ID of the performer to retrieve details for.
   */
  performer_id?: string;
};

/**
 * Type of SEAT_GEEK's SEAT_GEEK_GET_PERFORMER_DETAILS tool output.
 */
type SEAT_GEEK_GET_PERFORMER_DETAILS_OUTPUT = {
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
 * Type of SEAT_GEEK's SEAT_GEEK_GET_PERFORMER_RECOMMENDATIONS tool input.
 */
type SEAT_GEEK_GET_PERFORMER_RECOMMENDATIONS_INPUT = {
  /**
   * Events Id
   * @description One or more event IDs to use as recommendation seeds. Comma-separated for multiple.
   * @default null
   */
  events_id: string | null;
  /**
   * Per Page
   * @description Number of results per page. Default is 10.
   * @default null
   */
  per_page: number | null;
  /**
   * Performers Id
   * @description One or more performer IDs to use as recommendation seeds. Comma-separated for multiple.
   * @default null
   */
  performers_id: string | null;
};

/**
 * Type of SEAT_GEEK's SEAT_GEEK_GET_PERFORMER_RECOMMENDATIONS tool output.
 */
type SEAT_GEEK_GET_PERFORMER_RECOMMENDATIONS_OUTPUT = {
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
 * Type of SEAT_GEEK's SEAT_GEEK_GET_TAXONOMIES tool input.
 */
type SEAT_GEEK_GET_TAXONOMIES_INPUT = {
  /**
   * Per Page
   * @description Number of results per page. Default is 10.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of SEAT_GEEK's SEAT_GEEK_GET_TAXONOMIES tool output.
 */
type SEAT_GEEK_GET_TAXONOMIES_OUTPUT = {
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
 * Type of SEAT_GEEK's SEAT_GEEK_GET_VENUE_DETAILS tool input.
 */
type SEAT_GEEK_GET_VENUE_DETAILS_INPUT = {
  /**
   * Venue Id
   * @description The unique ID of the venue to retrieve details for.
   */
  venue_id?: string;
};

/**
 * Type of SEAT_GEEK's SEAT_GEEK_GET_VENUE_DETAILS tool output.
 */
type SEAT_GEEK_GET_VENUE_DETAILS_OUTPUT = {
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
 * Type of SEAT_GEEK's SEAT_GEEK_SEARCH_EVENTS tool input.
 */
type SEAT_GEEK_SEARCH_EVENTS_INPUT = {
  /**
   * Datetime Local
   * @description Filter events by exact local date/time. Format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS.
   * @default null
   */
  datetime_local: string | null;
  /**
   * Datetime Utc
   * @description Filter events by exact UTC date/time. Format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS.
   * @default null
   */
  datetime_utc: string | null;
  /**
   * Datetime Utc Gte
   * @description Filter events happening on or after this UTC date/time.
   * @default null
   */
  datetime_utc_gte: string | null;
  /**
   * Datetime Utc Lte
   * @description Filter events happening on or before this UTC date/time.
   * @default null
   */
  datetime_utc_lte: string | null;
  /**
   * Per Page
   * @description Number of results per page. Default is 10.
   * @default null
   */
  per_page: number | null;
  /**
   * Performers Id
   * @description Performer ID(s) to filter events. Multiple IDs can be comma-separated for OR queries.
   * @default null
   */
  performers_id: string | null;
  /**
   * Performers Slug
   * @description Performer slug(s) to filter events. Use URL-friendly format.
   * @default null
   */
  performers_slug: string | null;
  /**
   * Q
   * @description General search query for events, performers, or venues. Supports natural language like 'yankees march' or 'skrillex on june 4th'.
   * @default null
   */
  q: string | null;
  /**
   * Taxonomies Id
   * @description Filter events by taxonomy ID.
   * @default null
   */
  taxonomies_id: string | null;
  /**
   * Taxonomies Name
   * @description Filter events by category/type name.
   * @default null
   */
  taxonomies_name: string | null;
  /**
   * Venue City
   * @description City name to filter events by venue location.
   * @default null
   */
  venue_city: string | null;
  /**
   * Venue Id
   * @description Venue ID to filter events to a specific venue.
   * @default null
   */
  venue_id: string | null;
  /**
   * Venue State
   * @description Two-letter state code to filter events by venue location.
   * @default null
   */
  venue_state: string | null;
};

/**
 * Type of SEAT_GEEK's SEAT_GEEK_SEARCH_EVENTS tool output.
 */
type SEAT_GEEK_SEARCH_EVENTS_OUTPUT = {
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
 * Type of SEAT_GEEK's SEAT_GEEK_SEARCH_PERFORMERS tool input.
 */
type SEAT_GEEK_SEARCH_PERFORMERS_INPUT = {
  /**
   * Id
   * @description Performer ID(s) to retrieve. Can be comma-separated for multiple performers.
   * @default null
   */
  id: string | null;
  /**
   * Per Page
   * @description Number of results per page. Default is 10.
   * @default null
   */
  per_page: number | null;
  /**
   * Q
   * @description General search query for performers. Search artists, bands, sports teams, or any performers.
   * @default null
   */
  q: string | null;
  /**
   * Slug
   * @description Search for a specific performer by their slug (URL-friendly name).
   * @default null
   */
  slug: string | null;
  /**
   * Taxonomies Id
   * @description Filter performers by taxonomy ID.
   * @default null
   */
  taxonomies_id: string | null;
  /**
   * Taxonomies Name
   * @description Filter performers by category/type name.
   * @default null
   */
  taxonomies_name: string | null;
};

/**
 * Type of SEAT_GEEK's SEAT_GEEK_SEARCH_PERFORMERS tool output.
 */
type SEAT_GEEK_SEARCH_PERFORMERS_OUTPUT = {
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
 * Type of SEAT_GEEK's SEAT_GEEK_SEARCH_VENUES tool input.
 */
type SEAT_GEEK_SEARCH_VENUES_INPUT = {
  /**
   * City
   * @description Filter venues by city name.
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Filter venues by country (use two-letter country code).
   * @default null
   */
  country: string | null;
  /**
   * Id
   * @description Venue ID(s) to retrieve. Can be comma-separated for multiple venues.
   * @default null
   */
  id: string | null;
  /**
   * Per Page
   * @description Number of results per page. Default is 10.
   * @default null
   */
  per_page: number | null;
  /**
   * Postal Code
   * @description Filter venues by postal/zip code.
   * @default null
   */
  postal_code: string | null;
  /**
   * Q
   * @description General search query for venues.
   * @default null
   */
  q: string | null;
  /**
   * State
   * @description Filter venues by state (use two-letter state code).
   * @default null
   */
  state: string | null;
};

/**
 * Type of SEAT_GEEK's SEAT_GEEK_SEARCH_VENUES tool output.
 */
type SEAT_GEEK_SEARCH_VENUES_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "SEAT_GEEK".
 */
export type SEAT_GEEK_TOOL_INPUTS = {
  GET_EVENT_DETAILS: SEAT_GEEK_GET_EVENT_DETAILS_INPUT
  GET_EVENT_RECOMMENDATIONS: SEAT_GEEK_GET_EVENT_RECOMMENDATIONS_INPUT
  GET_EVENT_SEATING: SEAT_GEEK_GET_EVENT_SEATING_INPUT
  GET_PERFORMER_DETAILS: SEAT_GEEK_GET_PERFORMER_DETAILS_INPUT
  GET_PERFORMER_RECOMMENDATIONS: SEAT_GEEK_GET_PERFORMER_RECOMMENDATIONS_INPUT
  GET_TAXONOMIES: SEAT_GEEK_GET_TAXONOMIES_INPUT
  GET_VENUE_DETAILS: SEAT_GEEK_GET_VENUE_DETAILS_INPUT
  SEARCH_EVENTS: SEAT_GEEK_SEARCH_EVENTS_INPUT
  SEARCH_PERFORMERS: SEAT_GEEK_SEARCH_PERFORMERS_INPUT
  SEARCH_VENUES: SEAT_GEEK_SEARCH_VENUES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SEAT_GEEK".
 */
export type SEAT_GEEK_TOOL_OUTPUTS = {
  GET_EVENT_DETAILS: SEAT_GEEK_GET_EVENT_DETAILS_OUTPUT
  GET_EVENT_RECOMMENDATIONS: SEAT_GEEK_GET_EVENT_RECOMMENDATIONS_OUTPUT
  GET_EVENT_SEATING: SEAT_GEEK_GET_EVENT_SEATING_OUTPUT
  GET_PERFORMER_DETAILS: SEAT_GEEK_GET_PERFORMER_DETAILS_OUTPUT
  GET_PERFORMER_RECOMMENDATIONS: SEAT_GEEK_GET_PERFORMER_RECOMMENDATIONS_OUTPUT
  GET_TAXONOMIES: SEAT_GEEK_GET_TAXONOMIES_OUTPUT
  GET_VENUE_DETAILS: SEAT_GEEK_GET_VENUE_DETAILS_OUTPUT
  SEARCH_EVENTS: SEAT_GEEK_SEARCH_EVENTS_OUTPUT
  SEARCH_PERFORMERS: SEAT_GEEK_SEARCH_PERFORMERS_OUTPUT
  SEARCH_VENUES: SEAT_GEEK_SEARCH_VENUES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SEAT_GEEK toolkit.
 */
export const SEAT_GEEK = {
  slug: "seat_geek",
  tools: {
    /**
     * Get comprehensive details about a specific event including venue, performers, date/time, and ticket information.
     */
    GET_EVENT_DETAILS: "SEAT_GEEK_GET_EVENT_DETAILS",
    /**
     * Get personalized event recommendations based on your favorite performers, events, or location. discover new events you might enjoy.
     */
    GET_EVENT_RECOMMENDATIONS: "SEAT_GEEK_GET_EVENT_RECOMMENDATIONS",
    /**
     * Get detailed section and row information for an event to understand the venue layout and available seating options. useful for choosing the best seats.
     */
    GET_EVENT_SEATING: "SEAT_GEEK_GET_EVENT_SEATING",
    /**
     * Get detailed information about a specific performer including images, scores, and related metadata.
     */
    GET_PERFORMER_DETAILS: "SEAT_GEEK_GET_PERFORMER_DETAILS",
    /**
     * Get recommendations for similar performers based on your interests. discover new artists, bands, teams, or entertainers you might enjoy.
     */
    GET_PERFORMER_RECOMMENDATIONS: "SEAT_GEEK_GET_PERFORMER_RECOMMENDATIONS",
    /**
     * Get a list of all available event categories and types (taxonomies) used on seatgeek. useful for understanding event classification and filtering options.
     */
    GET_TAXONOMIES: "SEAT_GEEK_GET_TAXONOMIES",
    /**
     * Get detailed information about a specific venue including location, address, and other metadata.
     */
    GET_VENUE_DETAILS: "SEAT_GEEK_GET_VENUE_DETAILS",
    /**
     * Search for events on seatgeek by performers, venues, dates, or general queries. find concerts, sports games, theater shows, and other live entertainment.
     */
    SEARCH_EVENTS: "SEAT_GEEK_SEARCH_EVENTS",
    /**
     * Search for performers including artists, bands, sports teams, comedians, and more. find your favorite entertainers and see their upcoming events.
     */
    SEARCH_PERFORMERS: "SEAT_GEEK_SEARCH_PERFORMERS",
    /**
     * Search for venues by location, name, or other criteria. find stadiums, theaters, concert halls, and other entertainment venues.
     */
    SEARCH_VENUES: "SEAT_GEEK_SEARCH_VENUES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SEAT_GEEK".
 */
export type SEAT_GEEK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SEAT_GEEK".
 */
export type SEAT_GEEK_TRIGGER_EVENTS = {}
