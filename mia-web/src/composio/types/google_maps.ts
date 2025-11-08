// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLE_MAPS's GOOGLE_MAPS_DISTANCE_MATRIX_API tool input.
 */
type GOOGLE_MAPS_DISTANCE_MATRIX_API_INPUT = {
  /**
   * Arrival Time
   * @description Specifies the desired time of arrival for transit directions, in seconds since midnight, January 1, 1970 UTC. You can specify either departure_time or arrival_time, but not both.
   * @default null
   */
  arrival_time: number | null;
  /**
   * Avoid
   * @description Indicates that the calculated route should avoid the specified features. Multiple values can be pipe-separated e.g. 'tolls|highways'.
   * @default null
   * @enum {string|null}
   */
  avoid: "tolls" | "highways" | "ferries" | "indoor" | null;
  /**
   * Departure Time
   * @description Specifies the desired time of departure. You can specify the time as an integer in seconds since midnight, January 1, 1970 UTC, or as the string 'now'. Required for duration_in_traffic.
   * @default null
   */
  departure_time: number | null;
  /**
   * Destinations
   * @description One or more locations to use as the finishing point for calculating travel distance and time. Accepts the same formats as origins.
   */
  destinations?: string;
  /**
   * Key
   * @description Your application's API key. This key identifies your application for purposes of quota management.
   * @default null
   */
  key: string | null;
  /**
   * Language
   * @description The language in which to return results. See the list of supported languages: https://developers.google.com/maps/faq#languagesupport
   * @default null
   */
  language: string | null;
  /**
   * Mode
   * @description Specifies the mode of transport to use.
   * @default driving
   * @enum {string|null}
   */
  mode: "driving" | "walking" | "bicycling" | "transit" | null;
  /**
   * Origins
   * @description The starting point for calculating travel distance and time. You can supply one or more locations separated by the pipe character (|), in the form of a place ID (prefixed with place_id:), an address, latitude/longitude coordinates (e.g., '40.7128,-74.0060'), a plus code, or an encoded polyline (prefixed with enc: and a colon).
   */
  origins?: string;
  /**
   * Region
   * @description The region code, specified as a ccTLD ('top-level domain') two-character value. This helps influence results based on the region.
   * @default null
   */
  region: string | null;
  /**
   * Traffic Model
   * @description Specifies the assumptions to use when calculating time in traffic. This parameter is only used if the request includes a departure_time and mode is 'driving'.
   * @default null
   * @enum {string|null}
   */
  traffic_model: "best_guess" | "pessimistic" | "optimistic" | null;
  /**
   * Transit Mode
   * @description Specifies one or more preferred modes of transit. This parameter may only be specified for transit directions. Multiple values can be pipe-separated e.g. 'bus|train'.
   * @default null
   * @enum {string|null}
   */
  transit_mode: "bus" | "subway" | "train" | "tram" | "rail" | null;
  /**
   * Transit Routing Preference
   * @description Specifies preferences for transit routes. This parameter may only be specified for transit directions.
   * @default null
   * @enum {string|null}
   */
  transit_routing_preference: "less_walking" | "fewer_transfers" | null;
  /**
   * Units
   * @description Specifies the unit system to use when displaying results. The default is metric.
   * @default null
   * @enum {string|null}
   */
  units: "metric" | "imperial" | null;
};

/**
 * Type of GOOGLE_MAPS's GOOGLE_MAPS_DISTANCE_MATRIX_API tool output.
 */
type GOOGLE_MAPS_DISTANCE_MATRIX_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Destination Addresses
       * @description An array of addresses as returned by the API from your original request for destinations.
       */
      destination_addresses: string[];
      /**
       * Error Message
       * @description A string containing the human-readable text of any errors encountered while the request was being processed.
       * @default null
       */
      error_message: string | null;
      /**
       * Origin Addresses
       * @description An array of addresses as returned by the API from your original request for origins.
       */
      origin_addresses: string[];
      /**
       * Rows
       * @description An array of rows, each row containing one origin paired with each destination.
       */
      rows: {
          /**
           * Elements
           * @description An array of elements, which in turn each contain a status, duration, and distance element.
           */
          elements: {
              /**
               * TextValueObject
               * @description The total distance of this route, expressed in meters (value) and as text.
               * @default null
               */
              distance: {
                  /**
                   * Text
                   * @description String value.
                   */
                  text: string;
                  /**
                   * Value
                   * @description Numeric value.
                   */
                  value: number;
              } | null;
              /**
               * TextValueObject
               * @description The length of time it takes to travel this route, expressed in seconds (the value field) and as text.
               * @default null
               */
              duration: {
                  /**
                   * Text
                   * @description String value.
                   */
                  text: string;
                  /**
                   * Value
                   * @description Numeric value.
                   */
                  value: number;
              } | null;
              /**
               * TextValueObject
               * @description The length of time it takes to travel this route, based on current and historical traffic conditions.
               * @default null
               */
              duration_in_traffic: {
                  /**
                   * Text
                   * @description String value.
                   */
                  text: string;
                  /**
                   * Value
                   * @description Numeric value.
                   */
                  value: number;
              } | null;
              /**
               * Fare
               * @description If present, contains the total fare (that is, the total ticket costs) on this route.
               * @default null
               */
              fare: {
                  /**
                   * Currency
                   * @description An ISO 4217 currency code indicating the currency that the amount is expressed in.
                   */
                  currency: string;
                  /**
                   * Text
                   * @description The total fare amount, formatted in the requested language.
                   */
                  text: string;
                  /**
                   * Value
                   * @description The total fare amount, in the currency specified.
                   */
                  value: number;
              } | null;
              /**
               * Status
               * @description A status for the element. See DistanceMatrixElementStatus for more information.
               */
              status: string;
          }[];
      }[];
      /**
       * Status
       * @description Contains the status of the request (e.g., OK, INVALID_REQUEST).
       */
      status: string;
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
 * Type of GOOGLE_MAPS's GOOGLE_MAPS_GEOCODING_API tool input.
 */
type GOOGLE_MAPS_GEOCODING_API_INPUT = {
  /**
   * Address
   * @description The street address or plus code that you want to geocode. Provide for geocoding (address to coordinates).
   * @default null
   */
  address: string | null;
  /**
   * Bounds
   * @description The bounding box of the viewport within which to bias geocode results more prominently (e.g., '34.172684,-118.604794|34.236144,-118.500938'). This parameter will only influence, not fully restrict, results.
   * @default null
   */
  bounds: string | null;
  /**
   * Components
   * @description A components filter with elements separated by a pipe (|). E.g., 'postal_code:94043|country:US'. Used for geocoding, can be restrictive or biasing.
   * @default null
   */
  components: string | null;
  /**
   * Extra Computations
   * @description Use this parameter to specify additional features in the response. Can select multiple values.
   * @default null
   */
  extra_computations: string[] | null;
  /**
   * Key
   * @description Your application's API key. This key identifies your application for purposes of quota management.
   */
  key?: string;
  /**
   * Language
   * @description The language in which to return results. If language is not supplied, the geocoder attempts to use the preferred language as specified in the Accept-Language header, or the native language of the domain from which the request is sent.
   * @default null
   */
  language: string | null;
  /**
   * Latlng
   * @description The latitude and longitude coordinates specifying the location for which you want the closest, human-readable address (e.g., '40.714224,-73.961452'). Provide for reverse geocoding.
   * @default null
   */
  latlng: string | null;
  /**
   * Location Type
   * @description A filter of one or more location types, separated by a pipe (|) (e.g., 'ROOFTOP|RANGE_INTERPOLATED'). Used for reverse geocoding and place ID geocoding.
   * @default null
   */
  location_type: string | null;
  /**
   * Place Id
   * @description The place ID of the place for which you wish to obtain the human-readable address. Provide for place ID geocoding.
   * @default null
   */
  place_id: string | null;
  /**
   * Region
   * @description The region code, specified as a ccTLD ('top-level domain') two-character value. This parameter will only influence, not fully restrict, results from the geocoder.
   * @default null
   */
  region: string | null;
  /**
   * Result Type
   * @description A filter of one or more address types, separated by a pipe (|) (e.g., 'street_address|locality'). Used for reverse geocoding and place ID geocoding.
   * @default null
   */
  result_type: string | null;
};

/**
 * Type of GOOGLE_MAPS's GOOGLE_MAPS_GEOCODING_API tool output.
 */
type GOOGLE_MAPS_GEOCODING_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address Descriptors
       * @description Address descriptors, if requested via extra_computations. Structure may vary.
       * @default null
       */
      address_descriptors: {
          [key: string]: string;
      } | null;
      /**
       * Building Info
       * @description Building and entrance information, if requested via extra_computations. Structure may vary.
       * @default null
       */
      building_info: {
          [key: string]: string;
      } | null;
      /**
       * Error Message
       * @description More detailed information about the reasons behind a non-OK status code.
       * @default null
       */
      error_message: string | null;
      /**
       * Results
       * @description An array of geocoded address information.
       */
      results: {
          /**
           * Address Components
           * @description Array containing the separate components applicable to this address.
           * @default null
           */
          address_components: {
              /** Long Name */
              long_name: string;
              /** Short Name */
              short_name: string;
              /** Types */
              types: string[];
          }[] | null;
          /**
           * Formatted Address
           * @description String containing the human-readable address of this location.
           * @default null
           */
          formatted_address: string | null;
          /**
           * GeometryModel
           * @description Geometric data for the result.
           * @default null
           */
          geometry: {
              /**
               * ViewportModel
               * @default null
               */
              bounds: {
                  /** Northeast */
                  northeast: {
                      /** Lat */
                      lat: number;
                      /** Lng */
                      lng: number;
                  };
                  /** Southwest */
                  southwest: {
                      /** Lat */
                      lat: number;
                      /** Lng */
                      lng: number;
                  };
              } | null;
              /** Location */
              location: {
                  /** Lat */
                  lat: number;
                  /** Lng */
                  lng: number;
              };
              /** Location Type */
              location_type: string;
              /** Viewport */
              viewport: {
                  /** Northeast */
                  northeast: {
                      /** Lat */
                      lat: number;
                      /** Lng */
                      lng: number;
                  };
                  /** Southwest */
                  southwest: {
                      /** Lat */
                      lat: number;
                      /** Lng */
                      lng: number;
                  };
              };
          } | null;
          /**
           * Partial Match
           * @description Indicates that the geocoder did not return an exact match for the original request.
           * @default null
           */
          partial_match: boolean | null;
          /**
           * Place Id
           * @description A unique identifier for a place, which can be used with other Google APIs.
           * @default null
           */
          place_id: string | null;
          /**
           * PlusCodeModel
           * @description An encoded location reference, derived from latitude and longitude coordinates.
           * @default null
           */
          plus_code: {
              /**
               * Compound Code
               * @default null
               */
              compound_code: string | null;
              /** Global Code */
              global_code: string;
          } | null;
          /**
           * Types
           * @description Array indicating the type of the returned result.
           * @default null
           */
          types: string[] | null;
      }[];
      /**
       * Status
       * @description Contains metadata on the request. OK indicates success.
       */
      status: string;
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
 * Type of GOOGLE_MAPS's GOOGLE_MAPS_GET_DIRECTION tool input.
 */
type GOOGLE_MAPS_GET_DIRECTION_INPUT = {
  /**
   * Avoid
   * @description Specifies features to avoid in the generated route. Multiple values can be combined using a pipe delimiter (e.g., 'tolls|highways'). Valid options include 'tolls', 'highways', and 'ferries'.
   * @default null
   */
  avoid: string | null;
  /**
   * Destination
   * @description The ending point for the directions. This can be a textual address (e.g., '456 Park Ave, New York, NY'), a place name (e.g., 'Universal Studios Hollywood'), or latitude/longitude coordinates (e.g., '40.7128,-74.0060').
   */
  destination?: string;
  /**
   * Language
   * @description The language code for returning results, e.g., 'en' for English, 'es' for Spanish. Defaults to 'en'.
   * @default en
   */
  language: string;
  /**
   * Mode
   * @description The mode of transportation for which to calculate directions. Supported values are 'driving' (default), 'walking', 'bicycling', and 'transit'.
   * @default driving
   */
  mode: string;
  /**
   * Origin
   * @description The starting point for the directions. This can be a textual address (e.g., '123 Main St, Los Angeles, CA'), a place name (e.g., 'Disneyland'), or latitude/longitude coordinates (e.g., '34.0522,-118.2437').
   */
  origin?: string;
  /**
   * Units
   * @description The unit system for displaying distances. Supported values are 'metric' (kilometers and meters) and 'imperial' (miles and feet). Defaults to 'imperial'.
   * @default imperial
   */
  units: string;
  /**
   * Waypoints
   * @description A comma-separated string of intermediate locations (addresses, place names, or coordinates) to visit between the origin and destination.
   * @default null
   */
  waypoints: string | null;
};

/**
 * Type of GOOGLE_MAPS's GOOGLE_MAPS_GET_DIRECTION tool output.
 */
type GOOGLE_MAPS_GET_DIRECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The raw JSON response data from the Google Maps Directions API, containing detailed route information including legs, steps, duration, distance, and geometry.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
      } | null;
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
 * Type of GOOGLE_MAPS's GOOGLE_MAPS_GET_ROUTE tool input.
 */
type GOOGLE_MAPS_GET_ROUTE_INPUT = {
  /**
   * Compute Alternative Routes
   * @description Computes and returns alternative routes if true.
   * @default false
   */
  computeAlternativeRoutes: boolean;
  /**
   * Destination Address
   * @description Destination point address or place name for the route calculation.
   */
  destination_address?: string;
  /**
   * Field Mask
   * @description Comma-separated list of `Route` object fields to include in the response (e.g., 'routes.distanceMeters,routes.duration') for efficiency.
   * @default routes.distanceMeters,routes.duration,routes.polyline.encodedPolyline
   */
  fieldMask: string;
  /**
   * Language Code
   * @description BCP-47 language code (e.g., 'en-US', 'es') for textual information like navigation instructions.
   * @default en-US
   */
  languageCode: string;
  /**
   * Origin Address
   * @description Starting point address or place name for the route calculation.
   */
  origin_address?: string;
  /**
   * Route Modifiers Avoid Ferries
   * @description Attempts to avoid ferries if true.
   * @default false
   */
  routeModifiers_avoidFerries: boolean;
  /**
   * Route Modifiers Avoid Highways
   * @description Attempts to avoid highways if true.
   * @default false
   */
  routeModifiers_avoidHighways: boolean;
  /**
   * Route Modifiers Avoid Tolls
   * @description Attempts to avoid toll roads if true.
   * @default false
   */
  routeModifiers_avoidTolls: boolean;
  /**
   * Routing Preference
   * @description Specifies routing preference: `TRAFFIC_UNAWARE` (fastest, ignores traffic), `TRAFFIC_AWARE` (considers traffic, optimized), `TRAFFIC_AWARE_OPTIMAL` (most accurate traffic-based routing), or `ROUTING_PREFERENCE_UNSPECIFIED` (behavior similar to `TRAFFIC_UNAWARE`).
   * @default TRAFFIC_AWARE
   * @enum {string}
   */
  routingPreference: "ROUTING_PREFERENCE_UNSPECIFIED" | "TRAFFIC_UNAWARE" | "TRAFFIC_AWARE" | "TRAFFIC_AWARE_OPTIMAL";
  /**
   * Travel Mode
   * @description Mode of transportation for the route.
   * @default DRIVE
   * @enum {string}
   */
  travelMode: "DRIVE" | "BICYCLE" | "WALK" | "TWO_WHEELER" | "TRANSIT";
  /**
   * Units
   * @description Unit system (e.g., 'METRIC' for kilometers, 'IMPERIAL' for miles) for displaying distances.
   * @default IMPERIAL
   * @enum {string}
   */
  units: "METRIC" | "IMPERIAL";
};

/**
 * Type of GOOGLE_MAPS's GOOGLE_MAPS_GET_ROUTE tool output.
 */
type GOOGLE_MAPS_GET_ROUTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Raw JSON response from the Google Maps Routes API, structured based on `fieldMask`, typically including route legs, distance, duration, and polylines.
       * @default null
       */
      response_data: {
          [key: string]: unknown;
      } | null;
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
 * Type of GOOGLE_MAPS's GOOGLE_MAPS_MAPS_EMBED_API tool input.
 */
type GOOGLE_MAPS_MAPS_EMBED_API_INPUT = {
  /**
   * DirectionsModeParams
   * @description Parameters for 'directions' mode.
   * @default null
   */
  directions_params: {
      /**
       * Avoid
       * @description Specifies features to avoid in directions (e.g., 'tolls', 'highways', 'ferries'). Separate multiple values with the pipe character (|). E.g. 'tolls|highways'.
       * @default null
       */
      avoid: string | null;
      /**
       * Center
       * @description Defines the center of the map view. Accepts comma-separated latitude and longitude value (e.g., '37.4218,-122.0840').
       * @default null
       */
      center: string | null;
      /**
       * Destination
       * @description Defines the endpoint of the directions. Accepts URL-escaped place name, address, plus code, lat/lng coordinates, or Place ID (prefixed with 'place_id:').
       */
      destination: string;
      /**
       * Language
       * @description Defines the language for UI elements and map labels (e.g., 'en', 'es', 'fr').
       * @default null
       */
      language: string | null;
      /**
       * Maptype
       * @description Defines the type of map tiles to load.
       * @default null
       * @enum {string|null}
       */
      maptype: "roadmap" | "satellite" | null;
      /**
       * Mode
       * @description Defines the method of travel.
       * @default null
       * @enum {string|null}
       */
      mode: "driving" | "walking" | "bicycling" | "transit" | "flying" | null;
      /**
       * Origin
       * @description Defines the starting point for directions. Accepts URL-escaped place name, address, plus code, lat/lng coordinates, or Place ID (prefixed with 'place_id:').
       */
      origin: string;
      /**
       * Region
       * @description Defines appropriate borders and labels based on geopolitical sensitivities (e.g., 'US', 'GB'). Accepts a two-character ccTLD code.
       * @default null
       */
      region: string | null;
      /**
       * Units
       * @description Specifies measurement units for distances.
       * @default null
       * @enum {string|null}
       */
      units: "metric" | "imperial" | null;
      /**
       * Waypoints
       * @description Specifies one or more intermediary places to route directions. Separate multiple waypoints with the pipe character (|). E.g., 'Berlin,Germany|Paris,France'. Up to 20 waypoints.
       * @default null
       */
      waypoints: string | null;
      /**
       * Zoom
       * @description Sets the initial zoom level of the map. Values range from 0 (the whole world) to 21 (individual buildings).
       * @default null
       */
      zoom: number | null;
  } | null;
  /**
   * Mode
   * @description The mode of the embedded map.
   * @enum {string}
   */
  mode?: "place" | "view" | "directions" | "streetview" | "search";
  /**
   * PlaceModeParams
   * @description Parameters for 'place' mode.
   * @default null
   */
  place_params: {
      /**
       * Center
       * @description Defines the center of the map view. Accepts comma-separated latitude and longitude value (e.g., '37.4218,-122.0840').
       * @default null
       */
      center: string | null;
      /**
       * Language
       * @description Defines the language for UI elements and map labels (e.g., 'en', 'es', 'fr').
       * @default null
       */
      language: string | null;
      /**
       * Maptype
       * @description Defines the type of map tiles to load.
       * @default null
       * @enum {string|null}
       */
      maptype: "roadmap" | "satellite" | null;
      /**
       * Q
       * @description Defines the map marker location. Accepts a URL-escaped place name, address, plus code, or Place ID (prefixed with 'place_id:').
       */
      q: string;
      /**
       * Region
       * @description Defines appropriate borders and labels based on geopolitical sensitivities (e.g., 'US', 'GB'). Accepts a two-character ccTLD code.
       * @default null
       */
      region: string | null;
      /**
       * Zoom
       * @description Sets the initial zoom level of the map. Values range from 0 (the whole world) to 21 (individual buildings).
       * @default null
       */
      zoom: number | null;
  } | null;
  /**
   * SearchModeParams
   * @description Parameters for 'search' mode.
   * @default null
   */
  search_params: {
      /**
       * Center
       * @description Defines the center of the map view. Accepts comma-separated latitude and longitude value (e.g., '37.4218,-122.0840').
       * @default null
       */
      center: string | null;
      /**
       * Language
       * @description Defines the language for UI elements and map labels (e.g., 'en', 'es', 'fr').
       * @default null
       */
      language: string | null;
      /**
       * Maptype
       * @description Defines the type of map tiles to load.
       * @default null
       * @enum {string|null}
       */
      maptype: "roadmap" | "satellite" | null;
      /**
       * Q
       * @description Defines the search term. Can include a geographic restriction (e.g., 'record+stores+in+Seattle').
       */
      q: string;
      /**
       * Region
       * @description Defines appropriate borders and labels based on geopolitical sensitivities (e.g., 'US', 'GB'). Accepts a two-character ccTLD code.
       * @default null
       */
      region: string | null;
      /**
       * Zoom
       * @description Sets the initial zoom level of the map. Values range from 0 (the whole world) to 21 (individual buildings).
       * @default null
       */
      zoom: number | null;
  } | null;
  /**
   * StreetViewModeParams
   * @description Parameters for 'streetview' mode.
   * @default null
   */
  streetview_params: {
      /**
       * Center
       * @description Defines the center of the map view. Accepts comma-separated latitude and longitude value (e.g., '37.4218,-122.0840').
       * @default null
       */
      center: string | null;
      /**
       * Fov
       * @description Horizontal field of view in degrees (10-100). Smaller numbers mean higher zoom.
       * @default null
       */
      fov: number | null;
      /**
       * Heading
       * @description Compass heading of the camera in degrees clockwise from North (-180 to 360).
       * @default null
       */
      heading: number | null;
      /**
       * Language
       * @description Defines the language for UI elements and map labels (e.g., 'en', 'es', 'fr').
       * @default null
       */
      language: string | null;
      /**
       * Location
       * @description Latitude and longitude as comma-separated values (e.g., '46.414382,10.013988'). Displays panorama closest to this location. Required if 'pano' is not provided.
       * @default null
       */
      location: string | null;
      /**
       * Maptype
       * @description Defines the type of map tiles to load.
       * @default null
       * @enum {string|null}
       */
      maptype: "roadmap" | "satellite" | null;
      /**
       * Pano
       * @description A specific panorama ID. Required if 'location' is not provided. 'location' can be a fallback.
       * @default null
       */
      pano: string | null;
      /**
       * Pitch
       * @description Angle, up or down, of the camera in degrees (-90 to 90). Positive is up.
       * @default null
       */
      pitch: number | null;
      /**
       * Radius
       * @description Radius in meters to search for a panorama, centered on lat/lng. Default 50.
       * @default null
       */
      radius: number | null;
      /**
       * Region
       * @description Defines appropriate borders and labels based on geopolitical sensitivities (e.g., 'US', 'GB'). Accepts a two-character ccTLD code.
       * @default null
       */
      region: string | null;
      /**
       * Source
       * @description Limits Street View searches to selected sources. 'default' or 'outdoor'.
       * @default null
       * @enum {string|null}
       */
      source: "default" | "outdoor" | null;
      /**
       * Zoom
       * @description Sets the initial zoom level of the map. Values range from 0 (the whole world) to 21 (individual buildings).
       * @default null
       */
      zoom: number | null;
  } | null;
  /**
   * ViewModeParams
   * @description Parameters for 'view' mode.
   * @default null
   */
  view_params: {
      /**
       * Center
       * @description Defines the center of the map view. Accepts comma-separated latitude and longitude value (e.g., '37.4218,-122.0840'). This is REQUIRED for view mode.
       * @default null
       */
      center: string | null;
      /**
       * Language
       * @description Defines the language for UI elements and map labels (e.g., 'en', 'es', 'fr').
       * @default null
       */
      language: string | null;
      /**
       * Maptype
       * @description Defines the type of map tiles to load.
       * @default null
       * @enum {string|null}
       */
      maptype: "roadmap" | "satellite" | null;
      /**
       * Region
       * @description Defines appropriate borders and labels based on geopolitical sensitivities (e.g., 'US', 'GB'). Accepts a two-character ccTLD code.
       * @default null
       */
      region: string | null;
      /**
       * Zoom
       * @description Sets the initial zoom level of the map. Values range from 0 (the whole world) to 21 (individual buildings).
       * @default null
       */
      zoom: number | null;
  } | null;
};

/**
 * Type of GOOGLE_MAPS's GOOGLE_MAPS_MAPS_EMBED_API tool output.
 */
type GOOGLE_MAPS_MAPS_EMBED_API_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Html Embed Code
       * @description A complete HTML iframe tag to embed the map.
       */
      html_embed_code: string;
      /**
       * Iframe Url
       * Format: uri
       * @description The URL to be used as the src attribute of an iframe to embed the map.
       */
      iframe_url: string;
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
 * Type of GOOGLE_MAPS's GOOGLE_MAPS_NEARBY_SEARCH tool input.
 */
type GOOGLE_MAPS_NEARBY_SEARCH_INPUT = {
  /**
   * Excluded Types
   * @description Place types to exclude (e.g., 'cafe', 'store'); results matching any of these types are omitted. For supported types, see Google Maps Places API documentation.
   * @default null
   */
  excludedTypes: string[] | null;
  /**
   * Field Mask
   * @description Comma-separated list of place fields for the response (e.g., 'places.displayName,places.formattedAddress'); use '*' for all fields.
   * @default places.displayName
   */
  fieldMask: string;
  /**
   * Included Types
   * @description Place types to include (e.g., 'restaurant', 'park'); results will match at least one of these types. For supported types, see Google Maps Places API documentation.
   * @default null
   */
  includedTypes: string[] | null;
  /**
   * Latitude
   * @description Latitude coordinate of the search center in decimal degrees.
   */
  latitude?: number;
  /**
   * Longitude
   * @description Longitude coordinate of the search center in decimal degrees.
   */
  longitude?: number;
  /**
   * Max Result Count
   * @description Maximum number of search results to return (up to 20); the actual count may be lower.
   * @default 10
   */
  maxResultCount: number;
  /**
   * Radius
   * @description Radius of the circular search area in meters.
   */
  radius?: number;
};

/**
 * Type of GOOGLE_MAPS's GOOGLE_MAPS_NEARBY_SEARCH tool output.
 */
type GOOGLE_MAPS_NEARBY_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Places
       * @description List of found places matching search criteria; each place is a dictionary of requested fields.
       * @default null
       */
      places: {
          [key: string]: unknown;
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
 * Type of GOOGLE_MAPS's GOOGLE_MAPS_TEXT_SEARCH tool input.
 */
type GOOGLE_MAPS_TEXT_SEARCH_INPUT = {
  /**
   * Field Mask
   * @description Comma-separated list of place fields to return. Use `*` for all fields (not recommended for performance/cost). See Google Maps Places API documentation for field names.
   * @default places.displayName,places.formattedAddress,places.priceLevel
   */
  fieldMask: string;
  /**
   * Max Result Count
   * @description Maximum number of place results to return (must be 1-20). Note: Google prefers `pageSize`, but this action uses `maxResultCount`.
   * @default 10
   */
  maxResultCount: number;
  /**
   * Text Query
   * @description Text query for searching places. Matched against place name, address, and category.
   */
  textQuery?: string;
};

/**
 * Type of GOOGLE_MAPS's GOOGLE_MAPS_TEXT_SEARCH tool output.
 */
type GOOGLE_MAPS_TEXT_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Places
       * @description List of places matching the query. Fields for each place are determined by the request's `fieldMask`.
       */
      places: {
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
 * Type map of all available tool input types for toolkit "GOOGLE_MAPS".
 */
export type GOOGLE_MAPS_TOOL_INPUTS = {
  DISTANCE_MATRIX_API: GOOGLE_MAPS_DISTANCE_MATRIX_API_INPUT
  GEOCODING_API: GOOGLE_MAPS_GEOCODING_API_INPUT
  GET_DIRECTION: GOOGLE_MAPS_GET_DIRECTION_INPUT
  GET_ROUTE: GOOGLE_MAPS_GET_ROUTE_INPUT
  MAPS_EMBED_API: GOOGLE_MAPS_MAPS_EMBED_API_INPUT
  NEARBY_SEARCH: GOOGLE_MAPS_NEARBY_SEARCH_INPUT
  TEXT_SEARCH: GOOGLE_MAPS_TEXT_SEARCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLE_MAPS".
 */
export type GOOGLE_MAPS_TOOL_OUTPUTS = {
  DISTANCE_MATRIX_API: GOOGLE_MAPS_DISTANCE_MATRIX_API_OUTPUT
  GEOCODING_API: GOOGLE_MAPS_GEOCODING_API_OUTPUT
  GET_DIRECTION: GOOGLE_MAPS_GET_DIRECTION_OUTPUT
  GET_ROUTE: GOOGLE_MAPS_GET_ROUTE_OUTPUT
  MAPS_EMBED_API: GOOGLE_MAPS_MAPS_EMBED_API_OUTPUT
  NEARBY_SEARCH: GOOGLE_MAPS_NEARBY_SEARCH_OUTPUT
  TEXT_SEARCH: GOOGLE_MAPS_TEXT_SEARCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GOOGLE_MAPS toolkit.
 */
export const GOOGLE_MAPS = {
  slug: "google_maps",
  tools: {
    /**
     * Calculates travel distance and time for a matrix of origins and destinations. supports different modes of transportation and options like departure/arrival times. use when needing to determine travel metrics between multiple points.
     */
    DISTANCE_MATRIX_API: "GOOGLE_MAPS_DISTANCE_MATRIX_API",
    /**
     * Deprecated: tool to convert addresses into geographic coordinates (latitude and longitude) and vice versa (reverse geocoding), or get an address for a place id. use for finding coordinates for an address, finding an address for coordinates, or looking up an address by its place id.
     */
    GEOCODING_API: "GOOGLE_MAPS_GEOCODING_API",
    /**
     * Fetches detailed directions between an origin and a destination, supporting intermediate waypoints and various travel modes.
     */
    GET_DIRECTION: "GOOGLE_MAPS_GET_DIRECTION",
    /**
     * Calculates one or more routes between two specified locations using various travel modes and preferences; addresses must be resolvable by google maps.
     */
    GET_ROUTE: "GOOGLE_MAPS_GET_ROUTE",
    /**
     * Tool to generate an embeddable google map url and html iframe code. use when you need to display a map (place, view, directions, street view, search) on a webpage without javascript.
     */
    MAPS_EMBED_API: "GOOGLE_MAPS_MAPS_EMBED_API",
    /**
     * Searches for places (e.g., restaurants, parks) within a specified circular area, with options to filter by place types and customize the returned fields and number of results.
     */
    NEARBY_SEARCH: "GOOGLE_MAPS_NEARBY_SEARCH",
    /**
     * Searches for places on google maps using a textual query (e.g., "restaurants in london", "eiffel tower").
     */
    TEXT_SEARCH: "GOOGLE_MAPS_TEXT_SEARCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLE_MAPS".
 */
export type GOOGLE_MAPS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GOOGLE_MAPS".
 */
export type GOOGLE_MAPS_TRIGGER_EVENTS = {}
