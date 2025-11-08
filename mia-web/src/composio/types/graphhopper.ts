// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GRAPHHOPPER's GRAPHHOPPER_CLUSTER_POST tool input.
 */
type GRAPHHOPPER_CLUSTER_POST_INPUT = {
  /**
   * Clusters
   * @description Explicit cluster definitions (optional).
   * @default null
   */
  clusters: {
      /**
       * Center
       * @description Fixed center for this cluster.
       */
      center: {
          /**
           * Lat
           * @description Latitude of the cluster center.
           */
          lat: number;
          /**
           * Lon
           * @description Longitude of the cluster center.
           */
          lon: number;
          /**
           * Street Hint
           * @description Optional street hint for better snapping.
           * @default null
           */
          street_hint: string | null;
      };
      /**
       * Max Quantity
       * @description Maximum quantity for this cluster.
       * @default null
       */
      max_quantity: number | null;
      /**
       * Min Quantity
       * @description Minimum quantity for this cluster.
       * @default null
       */
      min_quantity: number | null;
      /**
       * Name
       * @description Cluster name or ID.
       */
      name: string;
  }[] | null;
  /**
   * Configuration
   * @description Routing and clustering settings.
   */
  configuration?: {
      /**
       * Clustering
       * @description Cluster size constraints configuration.
       */
      clustering: {
          /**
           * Max Quantity
           * @description Maximum quantity per cluster.
           * @default null
           */
          max_quantity: number | null;
          /**
           * Min Quantity
           * @description Minimum quantity per cluster.
           * @default null
           */
          min_quantity: number | null;
          /**
           * Num Clusters
           * @description Number of clusters.
           */
          num_clusters: number;
      };
      /**
       * Response Type
       * @description Format of the response.
       * @default json
       * @enum {string}
       */
      response_type: "json" | "geojson";
      /**
       * Routing
       * @description Routing cost/profile configuration.
       */
      routing: {
          /**
           * Cost Per Meter
           * @description Cost per meter of travel distance.
           * @default null
           */
          cost_per_meter: number | null;
          /**
           * Cost Per Second
           * @description Cost per second of travel time.
           * @default null
           */
          cost_per_second: number | null;
          /**
           * Profile
           * @description Routing profile, e.g., 'car'.
           */
          profile: string;
      };
  };
  /**
   * Customers
   * @description List of customers to assign to clusters.
   */
  customers?: {
      /**
       * Address
       * @description Customer address object.
       */
      address: {
          /**
           * Lat
           * @description Latitude of the address.
           */
          lat: number;
          /**
           * Lon
           * @description Longitude of the address.
           */
          lon: number;
          /**
           * Street Hint
           * @description Optional street hint for better snapping.
           * @default null
           */
          street_hint: string | null;
      };
      /**
       * Id
       * @description Unique customer ID.
       */
      id: string;
      /**
       * Quantity
       * @description Demand quantity for this customer.
       */
      quantity: number;
  }[];
};

/**
 * Type of GRAPHHOPPER's GRAPHHOPPER_CLUSTER_POST tool output.
 */
type GRAPHHOPPER_CLUSTER_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clusters
       * @description Resulting clusters with assigned IDs.
       */
      clusters: {
          /**
           * Ids
           * @description Customer IDs assigned to this cluster.
           */
          ids: string[];
          /**
           * Quantity
           * @description Total quantity in the cluster.
           */
          quantity: number;
      }[];
      /**
       * Copyrights
       * @description Array of copyright notices.
       */
      copyrights: string[];
      /**
       * Processing Time
       * @description Processing time (ms).
       */
      processing_time: number;
      /**
       * Status
       * @description Job status.
       * @enum {string}
       */
      status: "waiting_in_queue" | "processing" | "finished";
      /**
       * Waiting Time In Queue
       * @description Estimated waiting time in queue (ms).
       * @default null
       */
      waiting_time_in_queue: number | null;
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
 * Type of GRAPHHOPPER's GRAPHHOPPER_GEOCODE_GET tool input.
 */
type GRAPHHOPPER_GEOCODE_GET_INPUT = {
  /**
   * Autocomplete
   * @description Enable autocomplete (only for provider=gisgraphy and reverse=false).
   * @default null
   */
  autocomplete: boolean | null;
  /**
   * Bbox
   * @description Bounding box 'minLon,minLat,maxLon,maxLat'. Requires reverse=false. Only provider=default.
   * @default null
   */
  bbox: string | null;
  /**
   * Bounds
   * @description Bounds 'minLon,minLat,maxLon,maxLat'. For nominatim or opencagedata.
   * @default null
   */
  bounds: string | null;
  /**
   * Countrycode
   * @description ISO 3166-1 alpha-2 country filter. For nominatim, gisgraphy, or opencagedata.
   * @default null
   */
  countrycode: string | null;
  /**
   * Debug
   * @description Pretty-print the output. Default false.
   * @default false
   */
  debug: boolean | null;
  /**
   * Key
   * @description Your GraphHopper API key
   */
  key?: string;
  /**
   * Limit
   * @description Maximum number of results. Default 5.
   * @default 5
   */
  limit: number | null;
  /**
   * Locale
   * @description Locale of results. Default 'en'.
   * @default en
   * @enum {string|null}
   */
  locale: "en" | "de" | "fr" | null;
  /**
   * Location Bias Scale
   * @description Location bias scale between 0.0 and 1.0. Only provider=default.
   * @default null
   */
  location_bias_scale: number | null;
  /**
   * Osm Tag
   * @description OSM tags to filter/include or exclude, e.g., 'tourism:museum' or '!tourism:museum'. Only provider=default.
   * @default null
   */
  osm_tag: string[] | null;
  /**
   * Point
   * @description Coordinate 'lat,lon'. Required when reverse=true; for forward geocoding, acts as location bias.
   * @default null
   */
  point: string | null;
  /**
   * Provider
   * @description Alternative geocoding provider.
   * @default null
   * @enum {string|null}
   */
  provider: "default" | "nominatim" | "gisgraphy" | "opencagedata" | null;
  /**
   * Q
   * @description Text to geocode (forward geocoding). Required when reverse=false; must be omitted if reverse=true.
   * @default null
   */
  q: string | null;
  /**
   * Radius
   * @description Search radius. Default: km for provider=default when reverse=true; meters for provider=gisgraphy.
   * @default null
   */
  radius: number | null;
  /**
   * Reverse
   * @description Set to true for reverse geocoding. Default false.
   * @default false
   */
  reverse: boolean | null;
  /**
   * Zoom
   * @description Map-like zoom level controlling focus radius. Only provider=default.
   * @default null
   */
  zoom: number | null;
};

/**
 * Type of GRAPHHOPPER's GRAPHHOPPER_GEOCODE_GET tool output.
 */
type GRAPHHOPPER_GEOCODE_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Hits
       * @description List of found locations.
       */
      hits: {
          /**
           * City
           * @description City of the address.
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country of the address.
           * @default null
           */
          country: string | null;
          /**
           * Housenumber
           * @description House number of the address.
           * @default null
           */
          housenumber: string | null;
          /**
           * Name
           * @description Name of the location.
           * @default null
           */
          name: string | null;
          /**
           * Osm Id
           * @description OSM ID of the entity.
           * @default null
           */
          osm_id: string | null;
          /**
           * Osm Key
           * @description OSM key of the entity.
           * @default null
           */
          osm_key: string | null;
          /**
           * Osm Type
           * @description OSM element type: N, R, or W.
           * @default null
           */
          osm_type: string | null;
          /**
           * Point
           * @description Coordinates of the found location.
           */
          point: {
              /**
               * Lat
               * @description Latitude of the point.
               */
              lat: number;
              /**
               * Lng
               * @description Longitude of the point.
               */
              lng: number;
          };
          /**
           * Postcode
           * @description Postal code of the address.
           * @default null
           */
          postcode: string | null;
          /**
           * State
           * @description State of the address.
           * @default null
           */
          state: string | null;
          /**
           * Street
           * @description Street of the address.
           * @default null
           */
          street: string | null;
      }[];
      /**
       * Took
       * @description Processing time in milliseconds.
       */
      took: number;
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
 * Type of GRAPHHOPPER's GRAPHHOPPER_ISOCHRONE_GET tool input.
 */
type GRAPHHOPPER_ISOCHRONE_GET_INPUT = {
  /**
   * Buckets
   * @description Number of isochrone buckets (optional)
   * @default null
   */
  buckets: number | null;
  /**
   * Distance Limit
   * @description Travel distance limit in meters (optional)
   * @default null
   */
  distance_limit: number | null;
  /**
   * Point
   * @description Start location as 'lat,lon', e.g., '52.529407,13.397634'
   */
  point?: string;
  /**
   * Profile
   * @description Routing profile, e.g., 'car', 'bike', 'foot'
   * @default null
   */
  profile: string | null;
  /**
   * Reverse Flow
   * @description Compute reverse flow if true
   * @default null
   */
  reverse_flow: boolean | null;
  /**
   * Time Limit
   * @description Travel time limit in seconds (optional)
   * @default null
   */
  time_limit: number | null;
};

/**
 * Type of GRAPHHOPPER's GRAPHHOPPER_ISOCHRONE_GET tool output.
 */
type GRAPHHOPPER_ISOCHRONE_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Polygons */
      polygons: {
          /**
           * Geometry
           * @description GeoJSON geometry object for an isochrone polygon.
           */
          geometry: {
              /** Coordinates */
              coordinates: number[][][];
              /**
               * Type
               * @constant
               */
              type: "Polygon";
          };
          /**
           * Properties
           * @description Properties of a GeoJSON Feature for an isochrone polygon.
           */
          properties: {
              /**
               * Bucket
               * @description Index of this isochrone bucket
               */
              bucket: number;
          };
          /**
           * Type
           * @constant
           */
          type: "Feature";
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
 * Type of GRAPHHOPPER's GRAPHHOPPER_MATRIX_POST tool input.
 */
type GRAPHHOPPER_MATRIX_POST_INPUT = {
  /**
   * Curbsides
   * @description Curbside per point ('any','left','right') for symmetrical.
   * @default null
   */
  curbsides: string[] | null;
  /**
   * Fail Fast
   * @description If false, return null for unreachable entries and include hints.
   * @default true
   */
  fail_fast: boolean | null;
  /**
   * From Curbsides
   * @description Curbside per origin ('any','left','right').
   * @default null
   */
  from_curbsides: string[] | null;
  /**
   * From Point Hints
   * @description Hint per origin for snapping preference.
   * @default null
   */
  from_point_hints: string[] | null;
  /**
   * From Points
   * @description Origin coordinates as [longitude, latitude]. Provide with to_points.
   * @default null
   */
  from_points: number[][] | null;
  /**
   * Out Arrays
   * @description Which matrices to include.
   */
  out_arrays?: string[];
  /**
   * Point Hints
   * @description Hint per point for snapping preference (symmetrical).
   * @default null
   */
  point_hints: string[] | null;
  /**
   * Points
   * @description Coordinates for symmetric matrix as [longitude, latitude].
   * @default null
   */
  points: number[][] | null;
  /**
   * Profile
   * @description Routing profile ID (e.g. 'car', 'bike', 'foot').
   */
  profile?: string;
  /**
   * Snap Preventions
   * @description Feature types to avoid for snapping (e.g. 'toll', 'ferry').
   * @default null
   */
  snap_preventions: string[] | null;
  /**
   * To Curbsides
   * @description Curbside per destination ('any','left','right').
   * @default null
   */
  to_curbsides: string[] | null;
  /**
   * To Point Hints
   * @description Hint per destination for snapping preference.
   * @default null
   */
  to_point_hints: string[] | null;
  /**
   * To Points
   * @description Destination coordinates as [longitude, latitude]. Provide with from_points.
   * @default null
   */
  to_points: number[][] | null;
};

/**
 * Type of GRAPHHOPPER's GRAPHHOPPER_MATRIX_POST tool output.
 */
type GRAPHHOPPER_MATRIX_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Distances
       * @description Distance matrix in meters; null for unreachable entries if fail_fast=false.
       * @default null
       */
      distances: number[][] | null;
      /**
       * Hints
       * @description Hints for unreachable entries when fail_fast=false.
       * @default null
       */
      hints: {
          /**
           * Details
           * @description Details about the hint.
           * @default null
           */
          details: string | null;
          /**
           * Invalid From Points
           * @description Indices of unreachable from_points.
           * @default null
           */
          invalid_from_points: number[] | null;
          /**
           * Invalid To Points
           * @description Indices of unreachable to_points.
           * @default null
           */
          invalid_to_points: number[] | null;
          /**
           * Message
           * @description Short hint message.
           */
          message: string;
          /**
           * Point Pairs
           * @description Pairs of indices without a connection.
           * @default null
           */
          point_pairs: number[][] | null;
      }[] | null;
      /**
       * Info
       * @description Meta information about the request.
       */
      info: {
          /**
           * Copyrights
           * @description Attribution information.
           */
          copyrights: string[];
          /**
           * Took
           * @description Time in milliseconds taken to process the request.
           */
          took: number;
      };
      /**
       * Times
       * @description Time matrix in seconds; null for unreachable entries if fail_fast=false.
       * @default null
       */
      times: number[][] | null;
      /**
       * Weights
       * @description Weight matrix; null for unreachable entries if fail_fast=false.
       * @default null
       */
      weights: number[][] | null;
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
 * Type of GRAPHHOPPER's GRAPHHOPPER_PROFILES_GET tool input.
 */
type GRAPHHOPPER_PROFILES_GET_INPUT = {
  /**
   * Key
   * @description GraphHopper API key for authentication
   */
  key?: string;
};

/**
 * Type of GRAPHHOPPER's GRAPHHOPPER_PROFILES_GET tool output.
 */
type GRAPHHOPPER_PROFILES_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Profiles
       * @description Custom profiles list
       */
      profiles: {
          /**
           * Bounds
           * @description Bounding box where this profile works
           */
          bounds: {
              /**
               * Bbox
               * @description Rectangular area [minLon, minLat, maxLon, maxLat] where the profile applies
               */
              bbox: number[];
          };
          /**
           * Custom Model
           * @description Custom routing modifications for this profile
           */
          custom_model: {
              /**
               * Areas
               * @description GeoJSON FeatureCollection defining custom areas
               */
              areas: {
                  [key: string]: unknown;
              };
              /**
               * Distance Influence
               * @description Higher values prefer shorter routes
               */
              distance_influence: number;
              /**
               * Priority
               * @description Priority customization rules
               */
              priority: {
                  [key: string]: unknown;
              }[];
              /**
               * Speed
               * @description Speed customization rules
               */
              speed: {
                  [key: string]: unknown;
              }[];
          };
          /**
           * Id
           * @description Name/identifier of the custom profile
           */
          id: string;
          /**
           * Profile
           * @description Built-in base profile, e.g., 'car'
           */
          profile: string;
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
 * Type of GRAPHHOPPER's GRAPHHOPPER_ROUTE_POST tool input.
 */
type GRAPHHOPPER_ROUTE_POST_INPUT = {
  /**
   * Algorithm
   * @description Special routing mode; requires ch.disable=true
   * @default null
   * @enum {string|null}
   */
  algorithm: "round_trip" | "alternative_route" | null;
  /**
   * AlternativeRouteOptions
   * @description Parameters for alternative routes; requires algorithm='alternative_route'
   * @default null
   */
  alternative_route: {
      /**
       * Max Paths
       * @description Max number of alternatives; requires algorithm='alternative_route'
       * @default 2
       */
      max_paths: number | null;
      /**
       * Max Share Factor
       * @description Max share factor vs optimal; requires algorithm='alternative_route'
       * @default 0.6
       */
      max_share_factor: number | null;
      /**
       * Max Weight Factor
       * @description Max weight factor vs optimal; requires algorithm='alternative_route'
       * @default 1.4
       */
      max_weight_factor: number | null;
  } | null;
  /**
   * Calc Points
   * @description Include full route geometry
   * @default true
   */
  calc_points: boolean | null;
  /**
   * Ch.Disable
   * @description Enable flexible mode for custom_model and advanced options
   * @default false
   */
  "ch.disable": boolean | null;
  /**
   * Curbsides
   * @description Curbside to approach/leave each point
   * @default null
   */
  curbsides: string[] | null;
  /**
   * CustomModel
   * @description Custom routing rules; requires ch.disable=true
   * @default null
   */
  custom_model: {
      /**
       * Areas
       * @description GeoJSON FeatureCollection for custom areas; requires ch.disable=true
       * @default null
       */
      areas: {
          [key: string]: unknown;
      } | null;
      /**
       * Distance Influence
       * @description Influence of distance on custom cost; requires ch.disable=true
       * @default null
       */
      distance_influence: number | null;
      /**
       * Priority
       * @description Customize priorities per model rule; requires ch.disable=true
       * @default null
       */
      priority: number[] | null;
      /**
       * Speed
       * @description Customize speeds per model rule; requires ch.disable=true
       * @default null
       */
      speed: number[] | null;
  } | null;
  /**
   * Debug
   * @description Enable formatted debug output
   * @default false
   */
  debug: boolean | null;
  /**
   * Details
   * @description List of path detail keys (e.g., 'street_name','surface','max_speed')
   * @default null
   */
  details: string[] | null;
  /**
   * Elevation
   * @description Include altitude in geometry
   * @default false
   */
  elevation: boolean | null;
  /**
   * Heading Penalty
   * @description Penalty (s) for deviating from heading; requires ch.disable=true
   * @default 300
   */
  heading_penalty: number | null;
  /**
   * Headings
   * @description Preferred headings in degrees; requires ch.disable=true
   * @default null
   */
  headings: number[] | null;
  /**
   * Instructions
   * @description Include turn-by-turn instructions
   * @default true
   */
  instructions: boolean | null;
  /**
   * Locale
   * @description Locale for turn instructions
   * @default en
   */
  locale: string | null;
  /**
   * Optimize
   * @description Reorder points to minimize travel time
   * @default false
   */
  optimize: boolean | null;
  /**
   * Pass Through
   * @description Avoid u-turns at via points; requires ch.disable=true
   * @default false
   */
  pass_through: boolean | null;
  /**
   * Point Hints
   * @description Optional street hints; one per point
   * @default null
   */
  point_hints: string[] | null;
  /**
   * Points
   * @description Ordered list of [lon, lat] pairs for route waypoints; at least two points required
   */
  points?: number[][];
  /**
   * Points Encoded
   * @description Use polyline encoding for geometry
   * @default true
   */
  points_encoded: boolean | null;
  /**
   * Profile
   * @description Vehicle profile (e.g., 'car', 'bike', 'foot')
   */
  profile?: string;
  /**
   * RoundTripOptions
   * @description Parameters for round trip; requires algorithm='round_trip'
   * @default null
   */
  round_trip: {
      /**
       * Distance
       * @description Approximate round-trip length in meters; requires algorithm='round_trip'
       * @default 10000
       */
      distance: number | null;
      /**
       * Seed
       * @description Random seed for deterministic round trip; requires algorithm='round_trip'
       * @default null
       */
      seed: number | null;
  } | null;
  /**
   * Snap Preventions
   * @description Road types to avoid during snapping
   * @default null
   */
  snap_preventions: string[] | null;
};

/**
 * Type of GRAPHHOPPER's GRAPHHOPPER_ROUTE_POST tool output.
 */
type GRAPHHOPPER_ROUTE_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Hints */
      hints: {
          [key: string]: unknown;
      } | null;
      /** Info */
      info: {
          /** Copyrights */
          copyrights: string[];
          /** Took */
          took: number;
      };
      /** Paths */
      paths: {
          /** Ascend */
          ascend: number;
          /** Bbox */
          bbox: number[];
          /** Descend */
          descend: number;
          /** Details */
          details: {
              [key: string]: unknown;
          } | null;
          /** Distance */
          distance: number;
          /** Instructions */
          instructions: {
              /** Distance */
              distance: number;
              /** Exit Number */
              exit_number: number | null;
              /** Interval */
              interval: number[];
              /** Sign */
              sign: number;
              /** Street Name */
              street_name: string;
              /** Text */
              text: string;
              /** Time */
              time: number;
              /** Turn Angle */
              turn_angle: number | null;
          }[] | null;
          /** Legs */
          legs: {
              [key: string]: unknown;
          }[] | null;
          /** Points */
          points: string | null;
          /** Points Encoded */
          points_encoded: boolean;
          /** Points Encoded Multiplier */
          points_encoded_multiplier: number | null;
          /** Points Order */
          points_order: number[] | null;
          /** Snapped Waypoints */
          snapped_waypoints: string | null;
          /** Time */
          time: number;
          /** Transfers */
          transfers: number | null;
          /** Weight */
          weight: number | null;
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
 * Type of GRAPHHOPPER's GRAPHHOPPER_UPLOAD_GPX_FILE tool input.
 */
type GRAPHHOPPER_UPLOAD_GPX_FILE_INPUT = {
  /**
   * File
   * @description GPX file with name and base64-encoded content
   */
  file?: {
      /**
       * Content
       * Format: binary
       * @description File content in base64
       */
      content: string;
      /**
       * Name
       * @description File name, contains extension to indetify the file type
       */
      name: string;
  };
};

/**
 * Type of GRAPHHOPPER's GRAPHHOPPER_UPLOAD_GPX_FILE tool output.
 */
type GRAPHHOPPER_UPLOAD_GPX_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * S3Key
       * @description Public URL of the uploaded GPX file (used as key)
       */
      s3key: string;
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
 * Type of GRAPHHOPPER's GRAPHHOPPER_VRP_POST tool input.
 */
type GRAPHHOPPER_VRP_POST_INPUT = {
  /**
   * Algorithm
   * @description Deprecated – use `objectives` instead (legacy algorithms)
   * @default null
   */
  algorithm: {
      [key: string]: unknown;
  } | null;
  /**
   * Configuration
   * @description Routing and optimization configuration
   * @default null
   */
  configuration: {
      [key: string]: unknown;
  } | null;
  /**
   * Cost Matrices
   * @description Custom time/distance matrices
   * @default null
   */
  cost_matrices: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Objectives
   * @description Objective functions to minimize
   * @default null
   */
  objectives: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Relations
   * @description Custom relationships (e.g., same-route grouping)
   * @default null
   */
  relations: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Services
   * @description One-location service orders (pickup/delivery stops)
   * @default null
   */
  services: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Shipments
   * @description Two-location shipments with pickup and delivery
   * @default null
   */
  shipments: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Vehicle Types
   * @description Definitions of vehicle types assignable via type_id
   * @default null
   */
  vehicle_types: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Vehicles
   * @description List of at least one vehicle definition
   */
  vehicles?: {
      /**
       * Max Activities
       * @description Maximum number of route activities
       * @default null
       */
      max_activities: number | null;
      /**
       * Max Distance
       * @description Maximum distance (meters) vehicle may travel
       * @default null
       */
      max_distance: number | null;
      /**
       * Max Driving Time
       * @description Maximum driving time (seconds) on the road
       * @default null
       */
      max_driving_time: number | null;
      /**
       * Max Jobs
       * @description Maximum number of jobs this vehicle can handle
       * @default null
       */
      max_jobs: number | null;
      /**
       * Min Jobs
       * @description Minimum number of jobs (soft constraint)
       * @default null
       */
      min_jobs: number | null;
      /**
       * Move To End Address
       * @description Move to end address even if no assignments
       * @default null
       */
      move_to_end_address: boolean | null;
      /**
       * Return To Depot
       * @description Force return to depot at end if true; otherwise ends at last job
       * @default null
       */
      return_to_depot: boolean | null;
      /**
       * Shifts
       * @description One or more shifts for this vehicle
       * @default null
       */
      shifts: {
          /**
           * Break Spec
           * @description Break specification
           * @default null
           */
          break_spec: unknown;
          /**
           * Earliest Start
           * @description Earliest shift start (seconds since epoch)
           * @default null
           */
          earliest_start: number | null;
          /**
           * Address
           * @description Location details for shift start/end or service/stop.
           * @default null
           */
          end_address: {
              /**
               * Curbside
               * @description Preferred side of street relative to driver
               * @default null
               * @enum {string|null}
               */
              curbside: "right" | "left" | "any" | null;
              /**
               * Lat
               * @description Latitude in decimal degrees
               */
              lat: number;
              /**
               * Location Id
               * @description Unique ID of the location
               */
              location_id: string;
              /**
               * Lon
               * @description Longitude in decimal degrees
               */
              lon: number;
              /**
               * Name
               * @description Human-readable name of the location
               * @default null
               */
              name: string | null;
              /**
               * Street Hint
               * @description Street-only hint for snapping
               * @default null
               */
              street_hint: string | null;
          } | null;
          /**
           * Latest End
           * @description Latest shift end (seconds since epoch)
           * @default null
           */
          latest_end: number | null;
          /**
           * Return To Depot
           * @description If true, vehicle returns to depot at end of shift
           * @default null
           */
          return_to_depot: boolean | null;
          /**
           * Shift Id
           * @description Unique identifier for this shift
           * @default null
           */
          shift_id: string | null;
          /**
           * Address
           * @description Location details for shift start/end or service/stop.
           * @default null
           */
          start_address: {
              /**
               * Curbside
               * @description Preferred side of street relative to driver
               * @default null
               * @enum {string|null}
               */
              curbside: "right" | "left" | "any" | null;
              /**
               * Lat
               * @description Latitude in decimal degrees
               */
              lat: number;
              /**
               * Location Id
               * @description Unique ID of the location
               */
              location_id: string;
              /**
               * Lon
               * @description Longitude in decimal degrees
               */
              lon: number;
              /**
               * Name
               * @description Human-readable name of the location
               * @default null
               */
              name: string | null;
              /**
               * Street Hint
               * @description Street-only hint for snapping
               * @default null
               */
              street_hint: string | null;
          } | null;
      }[] | null;
      /**
       * Skills
       * @description Skills assigned to this vehicle
       * @default null
       */
      skills: string[] | null;
      /**
       * Type Id
       * @description Vehicle type ID (must match an entry in vehicle_types)
       * @default null
       */
      type_id: string | null;
      /**
       * Vehicle Id
       * @description Unique ID of the vehicle
       */
      vehicle_id: string;
  }[];
};

/**
 * Type of GRAPHHOPPER's GRAPHHOPPER_VRP_POST tool output.
 */
type GRAPHHOPPER_VRP_POST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Copyrights
       * @description Source credits, e.g. GraphHopper and OSM contributors
       */
      copyrights: string[];
      /**
       * Job Id
       * @description Unique job identifier (UUID)
       */
      job_id: string;
      /**
       * Processing Time
       * @description Processing time in ms (0 if still waiting)
       */
      processing_time: number;
      /**
       * Solution
       * @description Solution details, present when status is 'finished'
       * @default null
       */
      solution: {
          /**
           * Completion Time
           * @description Total completion time in seconds
           */
          completion_time: number;
          /**
           * Costs
           * @description Total costs of solution
           */
          costs: number;
          /**
           * Distance
           * @description Total distance in meters
           */
          distance: number;
          /**
           * Max Operation Time
           * @description Longest route operation time in seconds
           */
          max_operation_time: number;
          /**
           * No Unassigned
           * @description Number of unassigned jobs
           */
          no_unassigned: number;
          /**
           * No Vehicles
           * @description Number of vehicles used
           */
          no_vehicles: number;
          /**
           * Preparation Time
           * @description Total preparation time in seconds
           */
          preparation_time: number;
          /**
           * Routes
           * @description Computed routes in solution
           */
          routes: {
              /**
               * Activities
               * @description Sequenced activities in this route
               */
              activities: {
                  /**
                   * Address
                   * @description Location details for shift start/end or service/stop.
                   * @default null
                   */
                  address: {
                      /**
                       * Curbside
                       * @description Preferred side of street relative to driver
                       * @default null
                       * @enum {string|null}
                       */
                      curbside: "right" | "left" | "any" | null;
                      /**
                       * Lat
                       * @description Latitude in decimal degrees
                       */
                      lat: number;
                      /**
                       * Location Id
                       * @description Unique ID of the location
                       */
                      location_id: string;
                      /**
                       * Lon
                       * @description Longitude in decimal degrees
                       */
                      lon: number;
                      /**
                       * Name
                       * @description Human-readable name of the location
                       * @default null
                       */
                      name: string | null;
                      /**
                       * Street Hint
                       * @description Street-only hint for snapping
                       * @default null
                       */
                      street_hint: string | null;
                  } | null;
                  /**
                   * Arr Date Time
                   * @description ISO-8601 arrival timestamp with zone offset
                   * @default null
                   */
                  arr_date_time: string | null;
                  /**
                   * Arr Time
                   * @description Arrival time at activity (seconds)
                   * @default null
                   */
                  arr_time: number | null;
                  /**
                   * Distance
                   * @description Cumulative distance to this activity (m)
                   * @default null
                   */
                  distance: number | null;
                  /**
                   * Driving Time
                   * @description Cumulative driving time (seconds)
                   * @default null
                   */
                  driving_time: number | null;
                  /**
                   * End Date Time
                   * @description ISO-8601 departure timestamp with zone offset
                   * @default null
                   */
                  end_date_time: string | null;
                  /**
                   * End Time
                   * @description Departure time from activity (seconds)
                   * @default null
                   */
                  end_time: number | null;
                  /**
                   * Id
                   * @description ID of underlying job (service/shipment)
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Load After
                   * @description Load after activity (capacity dimensions)
                   * @default null
                   */
                  load_after: number[] | null;
                  /**
                   * Load Before
                   * @description Load before activity (capacity dimensions)
                   * @default null
                   */
                  load_before: number[] | null;
                  /**
                   * Location Id
                   * @description Address ID for this activity
                   * @default null
                   */
                  location_id: string | null;
                  /**
                   * Preparation Time
                   * @description Preparation time (seconds)
                   * @default null
                   */
                  preparation_time: number | null;
                  /**
                   * Type
                   * @description Activity type (e.g., start, service, pickup)
                   */
                  type: string;
                  /**
                   * Waiting Time
                   * @description Waiting time at activity (seconds)
                   * @default null
                   */
                  waiting_time: number | null;
              }[];
              /**
               * Completion Time
               * @description Route completion time in seconds
               */
              completion_time: number;
              /**
               * Distance
               * @description Route distance in meters
               */
              distance: number;
              /**
               * Points
               * @description Route geometry as GeoJSON-like object
               */
              points: {
                  /**
                   * Coordinates
                   * @description Coordinates array [[lon, lat], ...]
                   */
                  coordinates: number[][];
                  /**
                   * Type
                   * @description Geometry type, e.g., 'LineString'
                   */
                  type: string;
              };
              /**
               * Preparation Time
               * @description Route preparation time in seconds
               */
              preparation_time: number;
              /**
               * Service Duration
               * @description Route service time in seconds
               */
              service_duration: number;
              /**
               * Transport Time
               * @description Route transport time in seconds
               */
              transport_time: number;
              /**
               * Vehicle Id
               * @description ID of assigned vehicle
               */
              vehicle_id: string;
              /**
               * Waiting Time
               * @description Route waiting time in seconds
               */
              waiting_time: number;
          }[];
          /**
           * Service Duration
           * @description Total service time in seconds
           */
          service_duration: number;
          /**
           * Transport Time
           * @description Total transport time in seconds
           */
          transport_time: number;
          /**
           * Unassigned
           * @description Unassigned items in solution
           */
          unassigned: {
              /**
               * Breaks
               * @description Unassigned break IDs
               */
              breaks?: string[];
              /**
               * Details
               * @description Details for unassigned items
               */
              details?: {
                  /**
                   * Code
                   * @description Reason code for unassignment
                   */
                  code: number;
                  /**
                   * Id
                   * @description ID of unassigned job
                   */
                  id: string;
                  /**
                   * Reason
                   * @description Human-readable reason for unassignment
                   */
                  reason: string;
              }[];
              /**
               * Services
               * @description Unassigned service IDs
               */
              services?: string[];
              /**
               * Shipments
               * @description Unassigned shipment IDs
               */
              shipments?: string[];
          };
          /**
           * Waiting Time
           * @description Total waiting time in seconds
           */
          waiting_time: number;
      } | null;
      /**
       * Status
       * @description Current job status
       * @enum {string}
       */
      status: "waiting_in_queue" | "processing" | "finished";
      /**
       * Waiting Time In Queue
       * @description Waiting time in queue (ms)
       */
      waiting_time_in_queue: number;
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
 * Type map of all available tool input types for toolkit "GRAPHHOPPER".
 */
export type GRAPHHOPPER_TOOL_INPUTS = {
  CLUSTER_POST: GRAPHHOPPER_CLUSTER_POST_INPUT
  GEOCODE_GET: GRAPHHOPPER_GEOCODE_GET_INPUT
  ISOCHRONE_GET: GRAPHHOPPER_ISOCHRONE_GET_INPUT
  MATRIX_POST: GRAPHHOPPER_MATRIX_POST_INPUT
  PROFILES_GET: GRAPHHOPPER_PROFILES_GET_INPUT
  ROUTE_POST: GRAPHHOPPER_ROUTE_POST_INPUT
  UPLOAD_GPX_FILE: GRAPHHOPPER_UPLOAD_GPX_FILE_INPUT
  VRP_POST: GRAPHHOPPER_VRP_POST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GRAPHHOPPER".
 */
export type GRAPHHOPPER_TOOL_OUTPUTS = {
  CLUSTER_POST: GRAPHHOPPER_CLUSTER_POST_OUTPUT
  GEOCODE_GET: GRAPHHOPPER_GEOCODE_GET_OUTPUT
  ISOCHRONE_GET: GRAPHHOPPER_ISOCHRONE_GET_OUTPUT
  MATRIX_POST: GRAPHHOPPER_MATRIX_POST_OUTPUT
  PROFILES_GET: GRAPHHOPPER_PROFILES_GET_OUTPUT
  ROUTE_POST: GRAPHHOPPER_ROUTE_POST_OUTPUT
  UPLOAD_GPX_FILE: GRAPHHOPPER_UPLOAD_GPX_FILE_OUTPUT
  VRP_POST: GRAPHHOPPER_VRP_POST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GRAPHHOPPER toolkit.
 */
export const GRAPHHOPPER = {
  slug: "graphhopper",
  tools: {
    /**
     * Tool to solve capacity clustering problem. Use when assigning a set of customers to clusters to minimize total distance synchronously.
     */
    CLUSTER_POST: "GRAPHHOPPER_CLUSTER_POST",
    /**
     * Tool to perform forward or reverse geocoding. Use when converting between textual addresses and latitude/longitude coordinates.
     */
    GEOCODE_GET: "GRAPHHOPPER_GEOCODE_GET",
    /**
     * Tool to compute isochrone polygons for a given point. Use when you need to determine areas reachable within time or distance constraints.
     */
    ISOCHRONE_GET: "GRAPHHOPPER_ISOCHRONE_GET",
    /**
     * Tool to calculate distance, time, or weight matrices via POST. Use when you have multiple origins/destinations or a symmetric point set and need a single batch request.
     */
    MATRIX_POST: "GRAPHHOPPER_MATRIX_POST",
    /**
     * Tool to retrieve a list of all user-defined routing profiles. Use when you need to list custom profiles.
     */
    PROFILES_GET: "GRAPHHOPPER_PROFILES_GET",
    /**
     * Tool to calculate complex routes via POST /route. Use when you need advanced route planning with custom parameters.
     */
    ROUTE_POST: "GRAPHHOPPER_ROUTE_POST",
    /**
     * Tool to upload a GPX file to a public file hosting endpoint. Returns a public URL which can be used where a 's3key' is required.
     */
    UPLOAD_GPX_FILE: "GRAPHHOPPER_UPLOAD_GPX_FILE",
    /**
     * Tool to initiate VRP optimization. Use when you need to solve vehicle routing problems synchronously.
     */
    VRP_POST: "GRAPHHOPPER_VRP_POST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GRAPHHOPPER".
 */
export type GRAPHHOPPER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GRAPHHOPPER".
 */
export type GRAPHHOPPER_TRIGGER_EVENTS = {}
