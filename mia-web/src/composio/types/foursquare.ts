// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FOURSQUARE's FOURSQUARE_RETRIEVE_NEARBY_PLACES_V3 tool input.
 */
type FOURSQUARE_RETRIEVE_NEARBY_PLACES_V3_INPUT = {
  /**
   * Altitude
   * @description The altitude of the user’s location in meters above the World Geodetic System 1984 (WGS84) reference ellipsoid as returned by the user’s cell phone OS.
   */
  altitude?: number;
  /**
   * Fields
   * @description Indicate which fields to return in the response, separated by commas. Core fields include: fsq_id, name, geocodes (main and other lat/lng coordinates for place), location, categories, chains, timezone, distance, and link (to place detail). Rich data fields include: description, tel (phone), fax, email, website, social_media, hours, hours_popular, rating, stats, popularity, price, menu, date_closed, photos, tips (mini reviews), tastes, and features (e.g., wifi, reservations). If no fields are specified, all Core Fields are returned by default.
   */
  fields?: string;
  /**
   * Hacc
   * @description The estimated horizontal accuracy radius in meters of the user’s location at the 68th percentile confidence level as returned by the user’s cell phone OS.
   */
  hacc?: number;
  /**
   * Limit
   * @description The number of results to return, up to 50. Defaults to 10.
   */
  limit?: number;
  /**
   * Ll
   * @description The latitude/longitude around which to retrieve place information. This must be specified as latitude,longitude (e.g., ll=41.8781,-87.6298). If you do not specify ll, the server will attempt to retrieve the IP address from the request, and geolocate that IP address.
   */
  ll?: string;
};

/**
 * Type of FOURSQUARE's FOURSQUARE_RETRIEVE_NEARBY_PLACES_V3 tool output.
 */
type FOURSQUARE_RETRIEVE_NEARBY_PLACES_V3_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of FOURSQUARE's FOURSQUARE_RETRIEVE_PLACES_BY_ID tool input.
 */
type FOURSQUARE_RETRIEVE_PLACES_BY_ID_INPUT = {
  /**
   * Fields
   * @description Indicate which fields to return in the response, separated by commas. Core fields include: fsq_id, name, geocodes (main and other lat/lng coordinates for place), location, categories, chains, timezone, distance, and link (to place detail). Rich data fields include: description, tel (phone), fax, email, website, social_media, hours, hours_popular, rating, stats, popularity, price, menu, date_closed, photos, tips (mini reviews), tastes, and features (e.g., wifi, reservations). If no fields are specified, all Core Fields are returned by default.
   */
  fields?: string;
  /**
   * Fsq Id
   * @description A unique string identifier for a FSQ Place (formerly known as Venue ID). E.g., Foursquare HQ"s fsq_id = 5a187743ccad6b307315e6fe
   */
  fsq_id?: string;
};

/**
 * Type of FOURSQUARE's FOURSQUARE_RETRIEVE_PLACES_BY_ID tool output.
 */
type FOURSQUARE_RETRIEVE_PLACES_BY_ID_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of FOURSQUARE's FOURSQUARE_RETRIEVE_PLACE_PHOTOS_BY_ID tool input.
 */
type FOURSQUARE_RETRIEVE_PLACE_PHOTOS_BY_ID_INPUT = {
  /**
   * Classifications
   * @description Restricts the results to photos matching the specified classifications, separated by a comma. Possible values are: food - photos of food, indoor - photos of indoors, menu - photos of menus, outdoor - photos of storefronts, outdoors, and exteriors
   */
  classifications?: string;
  /**
   * Fsq Id
   * @description A unique string identifier for a FSQ Place (formerly known as Venue ID). E.g., Foursquare HQ"s fsq_id = 5a187743ccad6b307315e6fe
   */
  fsq_id?: string;
  /**
   * Limit
   * @description The specified number of photos per page. Returns 10 photos by default, up to a maximum number of 50.
   */
  limit?: number;
  /**
   * Sort
   * @description Specifies the order in which results are listed. Possible values are:<ul><li>popular (default) - sorts results based on their popularity among Foursquare users, newest - sorts results from most recently added to least recently added
   * @enum {string}
   */
  sort?: "POPULAR" | "NEWEST";
};

/**
 * Type of FOURSQUARE's FOURSQUARE_RETRIEVE_PLACE_PHOTOS_BY_ID tool output.
 */
type FOURSQUARE_RETRIEVE_PLACE_PHOTOS_BY_ID_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of FOURSQUARE's FOURSQUARE_RETRIEVE_PLACE_TIPS_USING_FSQ_ID tool input.
 */
type FOURSQUARE_RETRIEVE_PLACE_TIPS_USING_FSQ_ID_INPUT = {
  /**
   * Fields
   * @description Indicate which fields to return in the response, separated by commas. Supported fields are: id - The ID of the tip to be returned, created_at - The timestamp indicating when the tip was created; UNIX timestamp in seconds since Epoch, text - The text of the returned tip, lang - The language of the returned tip, url - The URL associated with the returned tip, agree_count - The count of users who have agreed with the returned tip, disagree_count - The count of users who have disagreed with the returned tip, photo - The ID of the photo asociated with the returned tip. Default fields if this param is omitted are "id", "created_at", and "text".
   */
  fields?: string;
  /**
   * Fsq Id
   * @description A unique string identifier for a FSQ Place (formerly known as Venue ID). E.g., Foursquare HQ"s fsq_id = 5a187743ccad6b307315e6fe
   */
  fsq_id?: string;
  /**
   * Limit
   * @description The specified number of tips per page. Returns 10 tips by default, up to a maximum number of 50.
   */
  limit?: number;
  /**
   * Sort
   * @description Specifies the order in which results are listed. Possible values are: popular (default) - sorts results based on their popularity among Foursquare users, newest - sorts results from most recently added to least recently added
   * @enum {string}
   */
  sort?: "POPULAR" | "NEWEST";
};

/**
 * Type of FOURSQUARE's FOURSQUARE_RETRIEVE_PLACE_TIPS_USING_FSQ_ID tool output.
 */
type FOURSQUARE_RETRIEVE_PLACE_TIPS_USING_FSQ_ID_OUTPUT = {
  /** Data */
  data?: {
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
 * Type of FOURSQUARE's FOURSQUARE_SEARCH_PLACES_API_REQUEST tool input.
 */
type FOURSQUARE_SEARCH_PLACES_API_REQUEST_INPUT = {
  /**
   * Exclude All Chains
   * @description Filters the response by only returning FSQ Places that are not known to be part of any chain.
   */
  exclude_all_chains?: boolean;
  /**
   * Fields
   * @description Indicate which fields to return in the response, separated by commas. Core fields include: fsq_id, name, geocodes (main and other lat/lng coordinates for place), location, categories, chains, timezone, distance, and link (to place detail). Rich data fields include: description, tel (phone), fax, email, website, social_media, hours, hours_popular, rating, stats, popularity, price, menu, date_closed, photos, tips (mini reviews), tastes, and features (e.g., wifi, reservations). If no fields are specified, all Core Fields are returned by default.
   */
  fields?: string;
  /**
   * Limit
   * @description The number of results to return, up to 50. Defaults to 10.
   */
  limit?: number;
  /**
   * Ll
   * @description The latitude/longitude around which to retrieve place information. This must be specified as latitude,longitude (e.g., ll=41.8781,-87.6298).
   */
  ll?: string;
  /**
   * Max Price
   * @description Restricts results to only those places within the specified price range. Valid values range between 1 (most affordable) to 4 (most expensive), inclusive.
   */
  max_price?: number;
  /**
   * Min Price
   * @description Restricts results to only those places within the specified price range. Valid values range between 1 (most affordable) to 4 (most expensive), inclusive.
   */
  min_price?: number;
  /**
   * Ne
   * @description The latitude/longitude representing the north/east points of a rectangle. Must be used with sw parameter to specify a rectangular search box. Global search results will be omitted.
   */
  ne?: string;
  /**
   * Near
   * @description A string naming a locality in the world (e.g., "Chicago, IL"). If the value is not geocodable, returns an error. Global search results will be omitted.
   */
  near?: string;
  /**
   * Open At
   * @description Support local day and local time requests through this parameter. To be specified as DOWTHHMM (e.g., 1T2130), where DOW is the day number 1-7 (Monday = 1, Sunday = 7) and time is in 24 hour format. Places that do not have opening hours will not be returned if this parameter is specified. Cannot be specified in conjunction with `open_now`.
   */
  open_at?: string;
  /**
   * Open Now
   * @description Restricts results to only those places that are open now. Places that do not have opening hours will not be returned if this parameter is specified. Cannot be specified in conjunction with `open_at`.
   */
  open_now?: boolean;
  /**
   * Query
   * @description A string to be matched against all content for this place, including but not limited to venue name, category, telephone number, taste, and tips.
   */
  query?: string;
  /**
   * Radius
   * @description Sets a radius distance (in meters) used to define an area to bias search results. The maximum allowed radius is 100,000 meters. Radius can be used in combination with ll or ip biased geolocation only. By using radius, global search results will be omitted. If not provided, default radius applied is 22000 meters.
   */
  radius?: number;
  /**
   * Super Venue Id
   * @description A Foursquare Venue ID to use as search bounds so only places within that venue are returned
   */
  super_venue_id?: string;
  /**
   * Sw
   * @description The latitude/longitude representing the south/west points of a rectangle. Must be used with ne parameter to specify a rectangular search box. Global search results will be omitted.
   */
  sw?: string;
};

/**
 * Type of FOURSQUARE's FOURSQUARE_SEARCH_PLACES_API_REQUEST tool output.
 */
type FOURSQUARE_SEARCH_PLACES_API_REQUEST_OUTPUT = {
  /** Data */
  data?: {
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
 * Type map of all available tool input types for toolkit "FOURSQUARE".
 */
export type FOURSQUARE_TOOL_INPUTS = {
  RETRIEVE_NEARBY_PLACES_V3: FOURSQUARE_RETRIEVE_NEARBY_PLACES_V3_INPUT
  RETRIEVE_PLACES_BY_ID: FOURSQUARE_RETRIEVE_PLACES_BY_ID_INPUT
  RETRIEVE_PLACE_PHOTOS_BY_ID: FOURSQUARE_RETRIEVE_PLACE_PHOTOS_BY_ID_INPUT
  RETRIEVE_PLACE_TIPS_USING_FSQ_ID: FOURSQUARE_RETRIEVE_PLACE_TIPS_USING_FSQ_ID_INPUT
  SEARCH_PLACES_API_REQUEST: FOURSQUARE_SEARCH_PLACES_API_REQUEST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FOURSQUARE".
 */
export type FOURSQUARE_TOOL_OUTPUTS = {
  RETRIEVE_NEARBY_PLACES_V3: FOURSQUARE_RETRIEVE_NEARBY_PLACES_V3_OUTPUT
  RETRIEVE_PLACES_BY_ID: FOURSQUARE_RETRIEVE_PLACES_BY_ID_OUTPUT
  RETRIEVE_PLACE_PHOTOS_BY_ID: FOURSQUARE_RETRIEVE_PLACE_PHOTOS_BY_ID_OUTPUT
  RETRIEVE_PLACE_TIPS_USING_FSQ_ID: FOURSQUARE_RETRIEVE_PLACE_TIPS_USING_FSQ_ID_OUTPUT
  SEARCH_PLACES_API_REQUEST: FOURSQUARE_SEARCH_PLACES_API_REQUEST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FOURSQUARE toolkit.
 */
export const FOURSQUARE = {
  slug: "foursquare",
  tools: {
    /**
     * The getnearbyplaces endpoint retrieves a list of places near a specified location, primarily supporting check-in use cases and local discovery. it returns points of interest (pois) including lower quality results not found in the standard place search, enhancing location-based experiences with additional data like photos, reviews, and tips. this endpoint is ideal for applications seeking to provide users with a comprehensive view of their surroundings, including less prominent or newer locations. while it offers a broader range of results, it may sacrifice some precision compared to more focused search endpoints. use this when you want to offer users a diverse array of nearby options, particularly for social check-in features or exploratory local recommendations.
     */
    RETRIEVE_NEARBY_PLACES_V3: "FOURSQUARE_RETRIEVE_NEARBY_PLACES_V3",
    /**
     * Retrieves detailed information about a specific place using its unique foursquare id (fsq id). this endpoint provides comprehensive data about a venue, including its name, address, category, ratings, tips, photos, and other relevant information. it's particularly useful when you need in-depth details about a known location, such as for displaying venue profiles or gathering specific place attributes. the endpoint should be used when you have a valid fsq id and require the most up-to-date and complete information about that place. note that this endpoint focuses on individual place details and does not provide search functionality or lists of multiple venues.
     */
    RETRIEVE_PLACES_BY_ID: "FOURSQUARE_RETRIEVE_PLACES_BY_ID",
    /**
     * Retrieves photos associated with a specific place in foursquare's database. this endpoint allows you to access user-generated images for a particular point of interest (poi) using its unique foursquare id (fsq id). it's useful for enhancing your application with visual content related to locations, such as restaurants, landmarks, or businesses. the endpoint returns photo data that can be used to construct image urls for display. keep in mind that the number and quality of photos may vary depending on the popularity and user engagement of the place. this tool should be used when you need to display or analyze visual information about a specific location in your application.
     */
    RETRIEVE_PLACE_PHOTOS_BY_ID: "FOURSQUARE_RETRIEVE_PLACE_PHOTOS_BY_ID",
    /**
     * Retrieves user-generated tips for a specific place in the foursquare database. this endpoint allows you to fetch valuable insights and experiences shared by foursquare users about a particular venue. it's useful for enhancing location-based applications with real user feedback, helping users make informed decisions about places they might visit. the endpoint returns a list of tips, which may include information such as the tip text, the user who created it, and potentially a timestamp or rating.
     */
    RETRIEVE_PLACE_TIPS_USING_FSQ_ID: "FOURSQUARE_RETRIEVE_PLACE_TIPS_USING_FSQ_ID",
    /**
     * The getplacessearch endpoint allows you to search for places in the foursquare database based on various criteria such as location, keywords, and categories. this tool is ideal for discovering nearby points of interest or finding specific venues. it returns a list of places matching the specified parameters, providing essential information about each location. use this endpoint for location-based features or gathering venue information in a specific area.
     */
    SEARCH_PLACES_API_REQUEST: "FOURSQUARE_SEARCH_PLACES_API_REQUEST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FOURSQUARE".
 */
export type FOURSQUARE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FOURSQUARE".
 */
export type FOURSQUARE_TRIGGER_EVENTS = {}
