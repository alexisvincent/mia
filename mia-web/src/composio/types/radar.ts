// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of RADAR's RADAR_AUTOCOMPLETE_ADDRESS_OR_PLACE tool input.
 */
type RADAR_AUTOCOMPLETE_ADDRESS_OR_PLACE_INPUT = {
  /**
   * Layers
   * @description Result types to return (e.g., ['address','place'])
   * @default null
   */
  layers: string[] | null;
  /**
   * Limit
   * @description Maximum number of results to return (1-100)
   * @default 10
   */
  limit: number;
  /**
   * Near
   * @default null
   */
  near: unknown;
  /**
   * Query
   * @description Partial address or place to autocomplete
   */
  query?: string;
};

/**
 * Type of RADAR's RADAR_AUTOCOMPLETE_ADDRESS_OR_PLACE tool output.
 */
type RADAR_AUTOCOMPLETE_ADDRESS_OR_PLACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Addresses
       * @description List of address suggestions
       */
      addresses: {
          /**
           * City
           * @description City or locality
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country name
           */
          country: string;
          /**
           * Country Code
           * @description Two-letter country code
           */
          countryCode: string;
          /**
           * Formatted Address
           * @description Full formatted address
           */
          formattedAddress: string;
          /**
           * Latitude
           * @description Latitude of the address
           */
          latitude: number;
          /**
           * Longitude
           * @description Longitude of the address
           */
          longitude: number;
          /**
           * Neighborhood
           * @description Neighborhood name, if available
           * @default null
           */
          neighborhood: string | null;
          /**
           * Number
           * @description Street number, if available
           * @default null
           */
          number: string | null;
          /**
           * Postal Code
           * @description Postal code
           * @default null
           */
          postalCode: string | null;
          /**
           * State
           * @description State, province, or region
           * @default null
           */
          state: string | null;
          /**
           * Street
           * @description Street name, if available
           * @default null
           */
          street: string | null;
      }[];
      /**
       * Places
       * @description List of place suggestions, if requested
       * @default null
       */
      places: {
          /**
           * Categories
           * @description List of place categories
           */
          categories: string[];
          /**
           * Location
           * @description Location details of the place
           */
          location: {
              /**
               * City
               * @description City or locality
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Country Code
               * @description Two-letter country code
               * @default null
               */
              countryCode: string | null;
              /**
               * Formatted Address
               * @description Formatted address of the place, if available
               * @default null
               */
              formattedAddress: string | null;
              /**
               * Latitude
               * @description Latitude of the place location
               */
              latitude: number;
              /**
               * Longitude
               * @description Longitude of the place location
               */
              longitude: number;
              /**
               * Neighborhood
               * @description Neighborhood name, if available
               * @default null
               */
              neighborhood: string | null;
              /**
               * Number
               * @description Street number, if available
               * @default null
               */
              number: string | null;
              /**
               * Postal Code
               * @description Postal code
               * @default null
               */
              postalCode: string | null;
              /**
               * State
               * @description State, province, or region
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Street name, if available
               * @default null
               */
              street: string | null;
          };
          /**
           * Name
           * @description Place name
           */
          name: string;
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
 * Type of RADAR's RADAR_CREATE_TRIP tool input.
 */
type RADAR_CREATE_TRIP_INPUT = {
  /**
   * Approaching Threshold
   * @description Distance threshold in meters for approaching status
   * @default null
   */
  approachingThreshold: number | null;
  /**
   * Destination Geofence External Id
   * @description External ID of destination geofence
   * @default null
   */
  destinationGeofenceExternalId: string | null;
  /**
   * Destination Geofence Tag
   * @description Tag of destination geofence (e.g. store)
   * @default null
   */
  destinationGeofenceTag: string | null;
  /**
   * GeoJSONPoint
   * @description Destination location as GeoJSON Point
   * @default null
   */
  destinationLocation: {
      /**
       * Coordinates
       * @description Longitude and latitude as [lng, lat]
       */
      coordinates: number[];
      /**
       * Type
       * @description Must be 'Point' to represent a GeoJSON Point
       * @default Point
       * @constant
       */
      type: "Point";
  } | null;
  /**
   * External Id
   * @description External ID for the trip
   */
  externalId?: string;
  /**
   * Metadata
   * @description Custom key-value pairs for trip
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Mode
   * @description Mode of travel, one of 'car', 'foot', or 'bike'
   * @default null
   * @enum {string|null}
   */
  mode: "car" | "foot" | "bike" | null;
  /**
   * Origin Geofence External Id
   * @description External ID of origin geofence
   * @default null
   */
  originGeofenceExternalId: string | null;
  /**
   * Origin Geofence Tag
   * @description Tag of origin geofence (e.g. warehouse)
   * @default null
   */
  originGeofenceTag: string | null;
  /**
   * GeoJSONPoint
   * @description Origin location as GeoJSON Point
   * @default null
   */
  originLocation: {
      /**
       * Coordinates
       * @description Longitude and latitude as [lng, lat]
       */
      coordinates: number[];
      /**
       * Type
       * @description Must be 'Point' to represent a GeoJSON Point
       * @default Point
       * @constant
       */
      type: "Point";
  } | null;
};

/**
 * Type of RADAR's RADAR_CREATE_TRIP tool output.
 */
type RADAR_CREATE_TRIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Response metadata
       */
      meta: {
          [key: string]: unknown;
      };
      /**
       * Trip
       * @description The newly created trip object with all details
       */
      trip: {
          [key: string]: unknown;
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
 * Type of RADAR's RADAR_DELETE_GEOFENCE tool input.
 */
type RADAR_DELETE_GEOFENCE_INPUT = {
  /**
   * Id
   * @description Unique ID of the geofence to delete
   */
  id?: string;
};

/**
 * Type of RADAR's RADAR_DELETE_GEOFENCE tool output.
 */
type RADAR_DELETE_GEOFENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Whether the geofence was successfully deleted
       */
      deleted: boolean;
      /**
       * Geofence
       * @description The geofence object that was deleted
       */
      geofence: {
          /**
           * Created At
           * @description ISO 8601 creation timestamp
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the geofence
           * @default null
           */
          description: string | null;
          /**
           * External Id
           * @description External ID of the geofence
           * @default null
           */
          externalId: string | null;
          /**
           * Geometry
           * @description GeoJSON geometry of the geofence
           */
          geometry: {
              [key: string]: unknown;
          };
          /**
           * Id
           * @description Unique ID of the geofence
           */
          id: string;
          /**
           * Tag
           * @description Tag associated with the geofence
           * @default null
           */
          tag: string | null;
          /**
           * Updated At
           * @description ISO 8601 last updated timestamp
           */
          updatedAt: string;
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
 * Type of RADAR's RADAR_DELETE_TRIP tool input.
 */
type RADAR_DELETE_TRIP_INPUT = {
  /**
   * Id
   * @description The unique identifier of the trip to delete. Can be Radar _id or externalId.
   */
  id?: string;
};

/**
 * Type of RADAR's RADAR_DELETE_TRIP tool output.
 */
type RADAR_DELETE_TRIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deleted
       * @description Whether the trip was successfully deleted.
       */
      deleted: boolean;
      /**
       * Id
       * @description The ID of the trip that was deleted.
       */
      id: string;
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
 * Type of RADAR's RADAR_FORWARD_GEOCODE tool input.
 */
type RADAR_FORWARD_GEOCODE_INPUT = {
  /**
   * Country
   * @description Two-letter ISO 3166-1 alpha-2 country code to filter results
   * @default null
   */
  country: string | null;
  /**
   * Layers
   * @description Place types to filter results, comma-separated (e.g., 'address','locality')
   * @default null
   */
  layers: string[] | null;
  /**
   * Limit
   * @description Maximum number of results to return (default 10, max 100)
   * @default null
   */
  limit: number | null;
  /**
   * Query
   * @description The full address or query string to geocode
   */
  query?: string;
};

/**
 * Type of RADAR's RADAR_FORWARD_GEOCODE tool output.
 */
type RADAR_FORWARD_GEOCODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Addresses
       * @description List of matched address objects
       */
      addresses: {
          /**
           * Address Label
           * @description Primary display address
           */
          addressLabel: string;
          /**
           * Confidence
           * @description Confidence score (0.0–1.0)
           */
          confidence: number;
          /**
           * Country Code
           * @description Country code of matched address
           */
          countryCode: string;
          /**
           * Formatted Address
           * @description Formatted complete address
           */
          formattedAddress: string;
          /**
           * Geometry
           * @description Geographic geometry of match
           */
          geometry: {
              /**
               * Coordinates
               * @description Longitude and latitude of the match as [lon, lat]
               */
              coordinates: number[];
          };
          /**
           * Layer
           * @description Layer or place type of match
           */
          layer: string;
          /**
           * Place Id
           * @description Unique identifier for the place
           */
          placeId: string;
          /**
           * Place Label
           * @description Place description or label
           */
          placeLabel: string;
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
 * Type of RADAR's RADAR_GET_CONTEXT_FOR_LOCATION tool input.
 */
type RADAR_GET_CONTEXT_FOR_LOCATION_INPUT = {
  /**
   * Lat
   * @description Latitude in decimal degrees, between -90 and 90
   */
  lat?: number;
  /**
   * Lng
   * @description Longitude in decimal degrees, between -180 and 180
   */
  lng?: number;
};

/**
 * Type of RADAR's RADAR_GET_CONTEXT_FOR_LOCATION tool output.
 */
type RADAR_GET_CONTEXT_FOR_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description Hypermedia links
       * @default null
       */
      _links: {
          /**
           * Next
           * @description Link to next page of results if paginated
           * @default null
           */
          next: string | null;
          /**
           * Self
           * @description Link to this resource
           * @default null
           */
          self: string | null;
      } | null;
      /**
       * Address
       * @description Nearest address information
       * @default null
       */
      address: {
          /**
           * City
           * @description City name
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country name
           * @default null
           */
          country: string | null;
          /**
           * Formatted Address
           * @description Full formatted address
           * @default null
           */
          formattedAddress: string | null;
          /**
           * Number
           * @description Street number
           * @default null
           */
          number: string | null;
          /**
           * Postal Code
           * @description Postal code
           * @default null
           */
          postalCode: string | null;
          /**
           * State
           * @description State name
           * @default null
           */
          state: string | null;
          /**
           * Street
           * @description Street name
           * @default null
           */
          street: string | null;
      } | null;
      /**
       * City
       * @description Nearest city information
       * @default null
       */
      city: {
          /**
           * Code
           * @description City code
           * @default null
           */
          code: string | null;
          /**
           * Name
           * @description City name
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Confidence
       * @description Confidence levels for various context elements
       * @default null
       */
      confidence: {
          /**
           * Address
           * @description Confidence for address match
           * @default null
           */
          address: number | null;
          /**
           * City
           * @description Confidence for city match
           * @default null
           */
          city: number | null;
          /**
           * Country
           * @description Confidence for country match
           * @default null
           */
          country: number | null;
          /**
           * Postal Code
           * @description Confidence for postal code match
           * @default null
           */
          postalCode: number | null;
          /**
           * State
           * @description Confidence for state match
           * @default null
           */
          state: number | null;
      } | null;
      /**
       * Country
       * @description Nearest country information
       * @default null
       */
      country: {
          /**
           * Code
           * @description Country code (ISO 3166-1 alpha-2)
           * @default null
           */
          code: string | null;
          /**
           * Name
           * @description Country name
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * County
       * @description Nearest county information
       * @default null
       */
      county: {
          /**
           * Code
           * @description County code
           * @default null
           */
          code: string | null;
          /**
           * Name
           * @description County name
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Dma
       * @description Nearest DMA information
       * @default null
       */
      dma: {
          /**
           * Code
           * @description Designated Market Area code
           * @default null
           */
          code: string | null;
          /**
           * Name
           * @description Designated Market Area name
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Geofences
       * @description List of geofences containing the location
       * @default null
       */
      geofences: {
          /**
           * Description
           * @description Description of the geofence
           * @default null
           */
          description: string | null;
          /**
           * External Id
           * @description External ID of the geofence
           * @default null
           */
          externalId: string | null;
          /**
           * Id
           * @description Geofence unique identifier
           * @default null
           */
          id: string | null;
          /**
           * Tags
           * @description Tags associated with the geofence
           * @default null
           */
          tags: string[] | null;
      }[] | null;
      /**
       * Neighborhood
       * @description Nearest neighborhood information
       * @default null
       */
      neighborhood: {
          /**
           * Code
           * @description Neighborhood code
           * @default null
           */
          code: string | null;
          /**
           * Name
           * @description Neighborhood name
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Place
       * @description Nearest place information
       * @default null
       */
      place: {
          /**
           * Categories
           * @description Categories for the place
           * @default null
           */
          categories: string[] | null;
          /**
           * Chain
           * @description Chain information if part of a chain
           * @default null
           */
          chain: {
              /**
               * Id
               * @description Chain unique identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Chain name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Formatted Address
           * @description Formatted address of the place
           * @default null
           */
          formattedAddress: string | null;
          /**
           * Id
           * @description Place unique identifier
           * @default null
           */
          id: string | null;
          /**
           * Location
           * @description Location of the place
           * @default null
           */
          location: {
              /**
               * Lat
               * @description Latitude
               */
              lat: number;
              /**
               * Lng
               * @description Longitude
               */
              lng: number;
          } | null;
          /**
           * Name
           * @description Place name
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * PostalCode
       * @description Nearest postal code information
       * @default null
       */
      postalCode: {
          /**
           * Code
           * @description Postal code
           * @default null
           */
          code: string | null;
          /**
           * Name
           * @description Postal code name or locality
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Segments
       * @description List of custom segments for the location
       * @default null
       */
      segments: {
          /**
           * Description
           * @description Description of the segment
           * @default null
           */
          description: string | null;
          /**
           * External Id
           * @description External ID of the segment
           * @default null
           */
          externalId: string | null;
          /**
           * Id
           * @description Segment unique identifier
           * @default null
           */
          id: string | null;
          /**
           * Tags
           * @description Tags associated with the segment
           * @default null
           */
          tags: string[] | null;
      }[] | null;
      /**
       * Source
       * @description Source of the context data, e.g., 'reverse_geocode'
       * @default null
       */
      source: string | null;
      /**
       * State
       * @description Nearest state information
       * @default null
       */
      state: {
          /**
           * Code
           * @description State code
           * @default null
           */
          code: string | null;
          /**
           * Name
           * @description State name
           * @default null
           */
          name: string | null;
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
 * Type of RADAR's RADAR_GET_GEOFENCE tool input.
 */
type RADAR_GET_GEOFENCE_INPUT = {
  /**
   * Id
   * @description Unique Radar geofence identifier, or prefix with 'tag:' to look up by tag, or 'externalId:' to look up by external ID
   */
  id?: string;
};

/**
 * Type of RADAR's RADAR_GET_GEOFENCE tool output.
 */
type RADAR_GET_GEOFENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Geofence
       * @description The retrieved geofence object.
       */
      geofence: {
          /**
           * Created At
           * @description ISO8601 timestamp when the geofence was created.
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the geofence.
           * @default null
           */
          description: string | null;
          /**
           * External Id
           * @description External identifier of the geofence.
           * @default null
           */
          externalId: string | null;
          /**
           * Geometry
           * @description Geometry details of the geofence.
           */
          geometry: {
              /**
               * Coordinates
               * @description Coordinates array for the geofence geometry.
               */
              coordinates: number[];
              /**
               * Type
               * @description Geometry type: 'Point' or 'Polygon'.
               */
              type: string;
          };
          /**
           * Id
           * @description Unique identifier of the geofence.
           */
          id: string;
          /**
           * Metadata
           * @description Custom key-value data attached to the geofence.
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Tag
           * @description Tag associated with the geofence.
           * @default null
           */
          tag: string | null;
          /**
           * Type
           * @description Type of the geofence, e.g., 'circle'.
           */
          type: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when the geofence was last updated.
           */
          updatedAt: string;
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
 * Type of RADAR's RADAR_GET_PLACES_SETTINGS tool input.
 */
type RADAR_GET_PLACES_SETTINGS_INPUT = object;

/**
 * Type of RADAR's RADAR_GET_PLACES_SETTINGS tool output.
 */
type RADAR_GET_PLACES_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Places
       * @description Current Places settings for the Radar project
       */
      places: {
          /**
           * Chain Detection
           * @description Flag indicating whether chain detection is enabled
           */
          chainDetection: boolean;
          /**
           * Chain Ids
           * @description Allowed chain IDs
           */
          chainIds: string[];
          /**
           * Chain Minimum Confidence
           * @description Minimum confidence for chain matching
           */
          chainMinimumConfidence: number;
          /**
           * Country
           * @description List of supported country codes
           */
          country: string[];
          /**
           * External Id Required
           * @description Flag indicating whether an external ID is required for places
           */
          externalIdRequired: boolean;
          /**
           * Metadata
           * @description Additional metadata about Places settings
           */
          metadata: {
              [key: string]: unknown;
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
 * Type of RADAR's RADAR_GET_TRIP tool input.
 */
type RADAR_GET_TRIP_INPUT = {
  /**
   * Format
   * @description Set to 'externalId' when using an external trip ID.
   * @default null
   * @constant
   */
  format: "externalId";
  /**
   * Id
   * @description The Radar trip ID or externalId.
   */
  id?: string;
};

/**
 * Type of RADAR's RADAR_GET_TRIP tool output.
 */
type RADAR_GET_TRIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Trip
       * @description The retrieved trip object
       */
      trip: {
          /**
           * Completed At
           * @description Completion timestamp in ISO8601 format if completed
           * @default null
           */
          completedAt: string | null;
          /**
           * Destination Geofence External Id
           * @description External ID of destination geofence
           * @default null
           */
          destinationGeofenceExternalId: string | null;
          /**
           * Destination Geofence Tag
           * @description Tag of destination geofence
           * @default null
           */
          destinationGeofenceTag: string | null;
          /**
           * DestinationLocation
           * @description Destination location coordinates for the trip.
           * @default null
           */
          destinationLocation: {
              /**
               * Latitude
               * @description Latitude of the trip destination
               */
              latitude: number;
              /**
               * Longitude
               * @description Longitude of the trip destination
               */
              longitude: number;
          } | null;
          /**
           * Distance
           * @description Distance traveled in meters
           * @default null
           */
          distance: number | null;
          /**
           * Eta
           * @description Estimated time of arrival in seconds
           * @default null
           */
          eta: number | null;
          /**
           * External Id
           * @description External trip ID
           * @default null
           */
          externalId: string | null;
          /**
           * Id
           * @description Unique Radar trip ID
           */
          id: string;
          /**
           * Metadata
           * @description Custom key-value data for the trip
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Note
           * @description Freeform note for the trip
           * @default null
           */
          note: string | null;
          /**
           * Started At
           * @description Start timestamp in ISO8601 format
           */
          startedAt: string;
          /**
           * Status
           * @description Trip status (e.g., created, started, completed)
           */
          status: string;
          /**
           * Updated At
           * @description Last update timestamp in ISO8601 format
           */
          updatedAt: string;
          /**
           * User Id
           * @description Radar user ID associated with the trip
           */
          userId: string;
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
 * Type of RADAR's RADAR_GET_USERS_IN_GEOFENCE tool input.
 */
type RADAR_GET_USERS_IN_GEOFENCE_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor to fetch the next page of results
   * @default null
   */
  cursor: string | null;
  /**
   * External Id
   * @description External ID of the geofence
   */
  externalId?: string;
  /**
   * Limit
   * @description Maximum number of users to return (default: 100, max: 500)
   * @default null
   */
  limit: number | null;
  /**
   * Tag
   * @description Tag of the geofence
   */
  tag?: string;
};

/**
 * Type of RADAR's RADAR_GET_USERS_IN_GEOFENCE tool output.
 */
type RADAR_GET_USERS_IN_GEOFENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata for the result set
       */
      meta: {
          /**
           * Count
           * @description Number of users returned in this page
           */
          count: number;
          /**
           * Cursor
           * @description Cursor for the next page, if present
           * @default null
           */
          cursor: string | null;
      };
      /**
       * Users
       * @description List of user objects currently in the geofence
       */
      users: {
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
 * Type of RADAR's RADAR_IP_GEOCODE tool input.
 */
type RADAR_IP_GEOCODE_INPUT = {
  /**
   * Ip
   * @description The IP address to geocode; defaults to the requester's IP if omitted
   * @default null
   */
  ip: string | null;
};

/**
 * Type of RADAR's RADAR_IP_GEOCODE tool output.
 */
type RADAR_IP_GEOCODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Area Code
       * @description Area code of the IP address location
       * @default null
       */
      areaCode: string | null;
      /**
       * City
       * @description City of the IP address location
       * @default null
       */
      city: string | null;
      /**
       * Confidence
       * @description Confidence level of the IP geocoding result
       * @default null
       */
      confidence: number | null;
      /**
       * Continent Code
       * @description Continent code of the IP address location
       * @default null
       */
      continentCode: string | null;
      /**
       * Country
       * @description Country of the IP address location
       */
      country: string;
      /**
       * Country Code
       * @description Country code of the IP address location
       */
      countryCode: string;
      /**
       * Is Proxy
       * @description Indicates if the IP address is a proxy
       * @default null
       */
      isProxy: boolean | null;
      /**
       * Latitude
       * @description Latitude of the IP address location
       */
      latitude: number;
      /**
       * Longitude
       * @description Longitude of the IP address location
       */
      longitude: number;
      /**
       * Metro Code
       * @description Metro code of the IP address location
       * @default null
       */
      metroCode: string | null;
      /**
       * Postal Code
       * @description Postal code of the IP address location
       * @default null
       */
      postalCode: string | null;
      /**
       * Region
       * @description Region or state of the IP address location
       * @default null
       */
      region: string | null;
      /**
       * Region Code
       * @description Region code of the IP address location
       * @default null
       */
      regionCode: string | null;
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
 * Type of RADAR's RADAR_LIST_BEACONS tool input.
 */
type RADAR_LIST_BEACONS_INPUT = {
  /**
   * Created After
   * @description Return beacons created after this ISO8601 timestamp
   * @default null
   */
  createdAfter: string | null;
  /**
   * Created Before
   * @description Return beacons created before this ISO8601 timestamp
   * @default null
   */
  createdBefore: string | null;
  /**
   * External Id
   * @description Filter beacons by external ID
   * @default null
   */
  externalId: string | null;
  /**
   * Limit
   * @description Maximum number of beacons to return (1-500, default 100 if not specified)
   * @default null
   */
  limit: number | null;
  /**
   * Metadata
   * @description Filter beacons by metadata key-value pairs
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Filter beacons by exact name
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number to return (default 1 if not specified)
   * @default null
   */
  page: number | null;
  /**
   * Tag
   * @description Filter beacons by tag
   * @default null
   */
  tag: string | null;
  /**
   * Updated After
   * @description Return beacons updated after this ISO8601 timestamp
   * @default null
   */
  updatedAfter: string | null;
  /**
   * Updated Before
   * @description Return beacons updated before this ISO8601 timestamp
   * @default null
   */
  updatedBefore: string | null;
};

/**
 * Type of RADAR's RADAR_LIST_BEACONS tool output.
 */
type RADAR_LIST_BEACONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Beacons
       * @description List of beacon objects.
       */
      beacons: {
          /**
           * Created At
           * @description Timestamp when created (ISO 8601)
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the beacon
           * @default null
           */
          description: string | null;
          /**
           * Device Id
           * @description Device ID or serial number of the beacon
           */
          deviceId: string;
          /**
           * External Id
           * @description External ID of the beacon
           * @default null
           */
          externalId: string | null;
          /**
           * Id
           * @description Beacon ID
           */
          id: string;
          /**
           * Instance
           * @description Instance for Eddystone UID
           * @default null
           */
          instance: string | null;
          /**
           * Latitude
           * @description Latitude of the beacon
           */
          latitude: number;
          /**
           * Longitude
           * @description Longitude of the beacon
           */
          longitude: number;
          /**
           * Major
           * @description Major value for iBeacon
           * @default null
           */
          major: number | null;
          /**
           * Metadata
           * @description Custom metadata of the beacon
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Minor
           * @description Minor value for iBeacon
           * @default null
           */
          minor: number | null;
          /**
           * Namespace
           * @description Namespace for Eddystone UID
           * @default null
           */
          namespace: string | null;
          /**
           * Place Id
           * @description Radar placeId associated with the beacon
           */
          placeId: string;
          /**
           * Type
           * @description Beacon technology type
           * @enum {string}
           */
          type: "iBeacon" | "eddystone_uid" | "eddystone_url";
          /**
           * Updated At
           * @description Timestamp when last updated (ISO 8601)
           */
          updatedAt: string;
          /**
           * Url
           * Format: uri
           * @description URL for Eddystone URL
           * @default null
           */
          url: string | null;
          /**
           * Uuid
           * @description UUID for iBeacon
           * @default null
           */
          uuid: string | null;
      }[];
      /**
       * Meta
       * @description Pagination metadata.
       */
      meta: {
          /**
           * Limit
           * @description The maximum number of results returned per page
           */
          limit: number;
          /**
           * Page
           * @description The page number returned
           */
          page: number;
          /**
           * Total
           * @description The total number of beacons matching the query
           */
          total: number;
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
 * Type of RADAR's RADAR_LIST_EVENTS tool input.
 */
type RADAR_LIST_EVENTS_INPUT = {
  /**
   * After Id
   * @description Cursor to return events created after this event ID
   * @default null
   */
  afterId: string | null;
  /**
   * Before Id
   * @description Cursor to return events created before this event ID
   * @default null
   */
  beforeId: string | null;
  /**
   * Device Id
   * @description Filter events by device ID
   * @default null
   */
  deviceId: string | null;
  /**
   * End
   * @description Return events created before this ISO 8601 timestamp
   * @default null
   */
  end: string | null;
  /**
   * Limit
   * @description Maximum number of events to return (1-500)
   * @default null
   */
  limit: number | null;
  /**
   * Start
   * @description Return events created after this ISO 8601 timestamp
   * @default null
   */
  start: string | null;
  /**
   * Type
   * @description Filter events by event type
   * @default null
   */
  type: string | null;
  /**
   * User Id
   * @description Filter events by user ID
   * @default null
   */
  userId: string | null;
};

/**
 * Type of RADAR's RADAR_LIST_EVENTS tool output.
 */
type RADAR_LIST_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description List of event objects
       */
      events: {
          /**
           * Actual
           * @description Whether the event is actual or a test event
           */
          actual: boolean;
          /**
           * Created At
           * @description Event creation time in ISO 8601 format
           */
          createdAt: string;
          /**
           * Device Id
           * @description Device ID associated with the event
           * @default null
           */
          deviceId: string | null;
          /**
           * Id
           * @description Unique event identifier
           */
          id: string;
          /**
           * Type
           * @description Type of the event
           */
          type: string;
          /**
           * User Id
           * @description User ID associated with the event
           */
          userId: string;
      }[];
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * After Id
           * @description Cursor for retrieving next page of events
           * @default null
           */
          afterId: string | null;
          /**
           * Before Id
           * @description Cursor for retrieving previous page of events
           * @default null
           */
          beforeId: string | null;
          /**
           * Limit
           * @description The requested limit of events per page
           */
          limit: number;
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
 * Type of RADAR's RADAR_LIST_GEOFENCES tool input.
 */
type RADAR_LIST_GEOFENCES_INPUT = {
  /**
   * Created After
   * @description Return geofences created after this ISO8601 timestamp
   * @default null
   */
  createdAfter: string | null;
  /**
   * Created Before
   * @description Return geofences created before this ISO8601 timestamp
   * @default null
   */
  createdBefore: string | null;
  /**
   * External Id
   * @description Filter geofences by external ID
   * @default null
   */
  externalId: string | null;
  /**
   * Limit
   * @description Maximum number of geofences to return (1-500)
   * @default null
   */
  limit: number | null;
  /**
   * Metadata
   * @description Filter geofences by metadata key-value pairs
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Page
   * @description Page number to return (default 1)
   * @default null
   */
  page: number | null;
  /**
   * Tag
   * @description Filter geofences by tag
   * @default null
   */
  tag: string | null;
  /**
   * Updated After
   * @description Return geofences updated after this ISO8601 timestamp
   * @default null
   */
  updatedAfter: string | null;
  /**
   * Updated Before
   * @description Return geofences updated before this ISO8601 timestamp
   * @default null
   */
  updatedBefore: string | null;
};

/**
 * Type of RADAR's RADAR_LIST_GEOFENCES tool output.
 */
type RADAR_LIST_GEOFENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Geofences
       * @description List of geofence objects
       */
      geofences: {
          /**
           * Created At
           * @description ISO8601 timestamp when the geofence was created
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the geofence
           * @default null
           */
          description: string | null;
          /**
           * External Id
           * @description External identifier of the geofence
           * @default null
           */
          externalId: string | null;
          /**
           * Geometry
           * @description Geometry details of the geofence
           */
          geometry: {
              /**
               * Coordinates
               * @description Coordinates array for the geofence geometry
               */
              coordinates: number[];
              /**
               * Type
               * @description Geometry type, e.g., 'Point' or 'Polygon'
               */
              type: string;
          };
          /**
           * Id
           * @description Unique identifier of the geofence
           */
          id: string;
          /**
           * Metadata
           * @description Custom key-value data attached to the geofence
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Tag
           * @description Tag associated with the geofence
           * @default null
           */
          tag: string | null;
          /**
           * Type
           * @description Type of the geofence, e.g., 'circle'
           */
          type: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when the geofence was last updated
           */
          updatedAt: string;
      }[];
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Limit
           * @description The maximum number of results returned per page
           */
          limit: number;
          /**
           * Page
           * @description The page number returned
           */
          page: number;
          /**
           * Total
           * @description The total number of geofences matching the query
           */
          total: number;
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
 * Type of RADAR's RADAR_LIST_TRIPS tool input.
 */
type RADAR_LIST_TRIPS_INPUT = {
  /**
   * Ending Before
   * @description Return trips ending immediately before this trip ID.
   * @default null
   */
  endingBefore: string | null;
  /**
   * External Id
   * @description Filter trips by external ID.
   * @default null
   */
  externalId: string | null;
  /**
   * Limit
   * @description Maximum number of trips to return (1–100). Defaults to 100 when omitted.
   * @default null
   */
  limit: number | null;
  /**
   * Metadata
   * @description Filter trips by metadata key/value pairs.
   * @default null
   */
  metadata: {
      [key: string]: string;
  } | null;
  /**
   * Starting After
   * @description Return trips starting immediately after this trip ID.
   * @default null
   */
  startingAfter: string | null;
  /**
   * User Id
   * @description Filter trips by Radar user ID.
   * @default null
   */
  userId: string | null;
};

/**
 * Type of RADAR's RADAR_LIST_TRIPS tool output.
 */
type RADAR_LIST_TRIPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Ending Before
           * @description Cursor for fetching the previous page of results
           * @default null
           */
          endingBefore: string | null;
          /**
           * Limit
           * @description Maximum number of items per page
           */
          limit: number;
          /**
           * Starting After
           * @description Cursor for fetching the next page of results
           * @default null
           */
          startingAfter: string | null;
      };
      /**
       * Trips
       * @description List of trip objects
       */
      trips: {
          /**
           * Completed At
           * @description Completion timestamp in ISO8601 format if completed
           * @default null
           */
          completedAt: string | null;
          /**
           * Destination Geofence External Id
           * @description External ID of destination geofence
           * @default null
           */
          destinationGeofenceExternalId: string | null;
          /**
           * Destination Geofence Tag
           * @description Tag of destination geofence
           * @default null
           */
          destinationGeofenceTag: string | null;
          /**
           * DestinationLocation
           * @description Destination location coordinates for a trip.
           * @default null
           */
          destinationLocation: {
              /**
               * Latitude
               * @description Latitude of the trip destination
               */
              latitude: number;
              /**
               * Longitude
               * @description Longitude of the trip destination
               */
              longitude: number;
          } | null;
          /**
           * Distance
           * @description Distance traveled in meters
           * @default null
           */
          distance: number | null;
          /**
           * Eta
           * @description Estimated time of arrival in seconds
           * @default null
           */
          eta: number | null;
          /**
           * External Id
           * @description External trip ID
           * @default null
           */
          externalId: string | null;
          /**
           * Id
           * @description Unique Radar trip ID
           */
          id: string;
          /**
           * Metadata
           * @description Custom key-value data for the trip
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Note
           * @description Freeform note for the trip
           * @default null
           */
          note: string | null;
          /**
           * Started At
           * @description Start timestamp in ISO8601 format
           * @default null
           */
          startedAt: string | null;
          /**
           * Status
           * @description Trip status (e.g., created, started, completed)
           */
          status: string;
          /**
           * Updated At
           * @description Last update timestamp in ISO8601 format
           */
          updatedAt: string;
          /**
           * User Id
           * @description Radar user ID associated with the trip
           */
          userId: string;
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
 * Type of RADAR's RADAR_LIST_USERS tool input.
 */
type RADAR_LIST_USERS_INPUT = {
  /**
   * After Id
   * @description User ID after which to return users for pagination
   * @default null
   */
  afterId: string | null;
  /**
   * Created After
   * @description Only return users created after this ISO 8601 timestamp
   * @default null
   */
  createdAfter: string | null;
  /**
   * Created Before
   * @description Only return users created before this ISO 8601 timestamp
   * @default null
   */
  createdBefore: string | null;
  /**
   * Limit
   * @description Maximum number of users to return
   * @default null
   */
  limit: number | null;
  /**
   * Tags
   * @description Only return users who have all of these tags
   * @default null
   */
  tags: string[] | null;
  /**
   * Updated After
   * @description Only return users updated after this ISO 8601 timestamp
   * @default null
   */
  updatedAfter: string | null;
  /**
   * Updated Before
   * @description Only return users updated before this ISO 8601 timestamp
   * @default null
   */
  updatedBefore: string | null;
};

/**
 * Type of RADAR's RADAR_LIST_USERS tool output.
 */
type RADAR_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * After Id
           * @description For pagination, the user ID to use for the next page
           * @default null
           */
          afterId: string | null;
          /**
           * Limit
           * @description The requested limit of users per page
           */
          limit: number;
          /**
           * Total
           * @description Total number of users matching query
           */
          total: number;
      };
      /**
       * Users
       * @description List of user objects
       */
      users: {
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format
           */
          createdAt: string;
          /**
           * Device Id
           * @description Identifier for the user's device, if available
           * @default null
           */
          deviceId: string | null;
          /**
           * Metadata
           * @description Custom metadata for the user
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Updated At
           * @description Last updated timestamp in ISO 8601 format
           */
          updatedAt: string;
          /**
           * User Id
           * @description Unique identifier for the user
           */
          userId: string;
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
 * Type of RADAR's RADAR_REVERSE_GEOCODE tool input.
 */
type RADAR_REVERSE_GEOCODE_INPUT = {
  /**
   * Coordinates
   * @description Latitude and longitude in 'lat,lon' format
   */
  coordinates?: string;
  /**
   * Country
   * @description Two-letter ISO 3166-1 alpha-2 country code to filter results
   * @default null
   */
  country: string | null;
  /**
   * Layers
   * @description Place types to restrict results, comma-separated (e.g., ['address','place'])
   * @default null
   */
  layers: string[] | null;
  /**
   * Limit
   * @description Maximum number of results to return (default 1, max 10)
   * @default null
   */
  limit: number | null;
};

/**
 * Type of RADAR's RADAR_REVERSE_GEOCODE tool output.
 */
type RADAR_REVERSE_GEOCODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Addresses
       * @description List of addresses found for the given coordinates
       */
      addresses: {
          /**
           * Address Label
           * @description Formatted address label
           */
          addressLabel: string;
          /**
           * Country
           * @description Country code (ISO 3166-1 alpha-2)
           */
          country: string;
          /**
           * Country Flag
           * @description Emoji flag of the country
           */
          countryFlag: string;
          /**
           * Formatted Address
           * @description Complete formatted address
           */
          formattedAddress: string;
          /**
           * Latitude
           * @description Latitude of the result
           */
          latitude: number;
          /**
           * Layer
           * @description Layer of result (e.g., 'address','place')
           */
          layer: string;
          /**
           * Longitude
           * @description Longitude of the result
           */
          longitude: number;
          /**
           * Place Id
           * @description Unique identifier for the place
           */
          placeId: string;
          /**
           * Postal Code
           * @description Postal code if available
           * @default null
           */
          postalCode: string | null;
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
 * Type of RADAR's RADAR_ROUTE_DISTANCE tool input.
 */
type RADAR_ROUTE_DISTANCE_INPUT = {
  /**
   * Avoid
   * @description Route features to avoid, comma-separated (e.g., 'tolls,ferries')
   * @default null
   */
  avoid: string | null;
  /**
   * Destinations
   * @description List of destination coordinates as 'lat,lng', separated by semicolons
   */
  destinations?: string;
  /**
   * Destinations Limit
   * @description Maximum number of destinations per origin
   * @default null
   */
  destinations_limit: number | null;
  /**
   * Geometry
   * @description Whether to include route geometry (GeoJSON LineString) in response
   * @default null
   */
  geometry: boolean | null;
  /**
   * Mode
   * @description Routing mode
   * @default car
   * @enum {string}
   */
  mode: "car" | "truck" | "foot" | "bike";
  /**
   * Origins
   * @description List of origin coordinates as 'lat,lng', separated by semicolons
   */
  origins?: string;
  /**
   * Origins Limit
   * @description Maximum number of origins per destination
   * @default null
   */
  origins_limit: number | null;
  /**
   * Units
   * @description Units for distance measurement
   * @default metric
   * @enum {string}
   */
  units: "metric" | "imperial";
};

/**
 * Type of RADAR's RADAR_ROUTE_DISTANCE tool output.
 */
type RADAR_ROUTE_DISTANCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Response metadata including units and mode
       */
      meta: {
          /**
           * Mode
           * @description Routing mode used for all routes
           */
          mode: string;
          /**
           * Units
           * @description Units of distance returned
           */
          units: string;
      };
      /**
       * Routes
       * @description List of route distance and duration information
       */
      routes: {
          /**
           * Destination Index
           * @description Index of the destination in the request list
           */
          destinationIndex: number;
          /**
           * Distance
           * @description Distance between origin and destination
           */
          distance: number;
          /**
           * Duration
           * @description Travel time between origin and destination
           */
          duration: number;
          /**
           * RouteGeometry
           * @description GeoJSON LineString geometry of the route.
           * @default null
           */
          geometry: {
              /**
               * Coordinates
               * @description List of [longitude, latitude] coordinate pairs
               */
              coordinates: number[][];
              /**
               * Type
               * @description GeoJSON geometry type; always 'LineString'
               * @default LineString
               * @constant
               */
              type: "LineString";
          } | null;
          /**
           * Mode
           * @description Routing mode used
           */
          mode: string;
          /**
           * Origin Index
           * @description Index of the origin in the request list
           */
          originIndex: number;
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
 * Type of RADAR's RADAR_SEARCH_GEOFENCES_NEAR_LOCATION tool input.
 */
type RADAR_SEARCH_GEOFENCES_NEAR_LOCATION_INPUT = {
  /**
   * Latitude
   * @description Latitude of the location to search near
   */
  latitude?: number;
  /**
   * Longitude
   * @description Longitude of the location to search near
   */
  longitude?: number;
  /**
   * Metadata
   * @description Filter geofences by metadata key-value pairs
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Radius
   * @description Search radius in meters (default 1000, max 10000)
   * @default null
   */
  radius: number | null;
  /**
   * Tags
   * @description Filter geofences by these tags
   * @default null
   */
  tags: string[] | null;
};

/**
 * Type of RADAR's RADAR_SEARCH_GEOFENCES_NEAR_LOCATION tool output.
 */
type RADAR_SEARCH_GEOFENCES_NEAR_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Geofences
       * @description List of geofences near the specified location.
       */
      geofences: {
          /**
           * Created At
           * @description Timestamp when created (ISO 8601).
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the geofence.
           * @default null
           */
          description: string | null;
          /**
           * External Id
           * @description External identifier of the geofence.
           * @default null
           */
          externalId: string | null;
          /**
           * Geometry
           * @description Geometry details of the geofence.
           */
          geometry: {
              /**
               * Coordinates
               * @description Coordinates array for the geofence geometry.
               */
              coordinates: unknown[];
              /**
               * Type
               * @description Geometry type: 'Point' or 'Polygon'.
               */
              type: string;
          };
          /**
           * Id
           * @description Unique identifier of the geofence.
           */
          id: string;
          /**
           * Metadata
           * @description Custom key-value data attached to the geofence.
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Tag
           * @description Tag associated with the geofence.
           * @default null
           */
          tag: string | null;
          /**
           * Updated At
           * @description Timestamp when last updated (ISO 8601).
           */
          updatedAt: string;
      }[];
      /**
       * Meta
       * @description Response metadata.
       */
      meta: {
          [key: string]: unknown;
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
 * Type of RADAR's RADAR_SEARCH_PLACES_NEAR_LOCATION tool input.
 */
type RADAR_SEARCH_PLACES_NEAR_LOCATION_INPUT = {
  /**
   * Brand
   * @description Filter by brand name or ID
   * @default null
   */
  brand: string | null;
  /**
   * Categories
   * @description Filter by category names
   * @default null
   */
  categories: string[] | null;
  /**
   * Chain Metadata
   * @description If true, includes chain metadata in each place object
   * @default null
   */
  chain_metadata: boolean | null;
  /**
   * Chains
   * @description Filter by chain IDs
   * @default null
   */
  chains: string[] | null;
  /**
   * Country
   * @description ISO 3166-1 alpha-2 country code
   * @default null
   */
  country: string | null;
  /**
   * Groups
   * @description Filter by custom group names
   * @default null
   */
  groups: string[] | null;
  /**
   * Limit
   * @description Number of results to return; max 100; defaults to 10
   * @default 10
   */
  limit: number | null;
  /**
   * Near
   * @description Coordinates to search near in 'lat,lng' format
   */
  near?: unknown;
  /**
   * Radius
   * @description Search radius in meters; max 100000 (100 km); defaults to 1000
   * @default 1000
   */
  radius: number | null;
};

/**
 * Type of RADAR's RADAR_SEARCH_PLACES_NEAR_LOCATION tool output.
 */
type RADAR_SEARCH_PLACES_NEAR_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description Pagination links
       * @default null
       */
      links: {
          /**
           * Next
           * @description URL for next page
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description URL for previous page
           * @default null
           */
          prev: string | null;
      } | null;
      /**
       * Meta
       * @description Response metadata
       */
      meta: {
          /**
           * Code
           * @description HTTP status code of the response
           */
          code: number;
      };
      /**
       * Places
       * @description List of places found
       */
      places: {
          /**
           *  Id
           * @description Place unique identifier
           */
          _id: string;
          /**
           * Categories
           * @description Categories associated with the place
           */
          categories: string[];
          /**
           * Chain
           * @description Chain information if part of a chain
           * @default null
           */
          chain: {
              /**
               * External Id
               * @description Chain external ID
               * @default null
               */
              externalId: string | null;
              /**
               * Id
               * @description Chain unique identifier
               * @default null
               */
              id: string | null;
              /**
               * Metadata
               * @description Additional metadata for the chain
               * @default null
               */
              metadata: {
                  [key: string]: unknown;
              } | null;
              /**
               * Name
               * @description Chain name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Description
           * @description Description of the place
           * @default null
           */
          description: string | null;
          /**
           * Distance
           * @description Distance in meters from the search origin
           * @default null
           */
          distance: number | null;
          /**
           * External Id
           * @description External ID of the place
           * @default null
           */
          externalId: string | null;
          /**
           * Formatted Address
           * @description Formatted address of the place
           * @default null
           */
          formattedAddress: string | null;
          /**
           * Location
           * @description GeoJSON location of the place
           */
          location: {
              /**
               * Coordinates
               * @description Coordinates as [lng, lat]
               */
              coordinates: number[];
              /**
               * Type
               * @description GeoJSON type, must be 'Point'
               * @constant
               */
              type: "Point";
          };
          /**
           * Metadata
           * @description Custom metadata for the place
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Name of the place
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
 * Type of RADAR's RADAR_SEARCH_USERS_NEAR_LOCATION tool input.
 */
type RADAR_SEARCH_USERS_NEAR_LOCATION_INPUT = {
  /**
   * Latitude
   * @description Latitude of the location in decimal degrees.
   */
  latitude?: number;
  /**
   * Limit
   * @description Maximum number of users to return (default: 100, max: 500).
   * @default null
   */
  limit: number | null;
  /**
   * Longitude
   * @description Longitude of the location in decimal degrees.
   */
  longitude?: number;
  /**
   * Radius
   * @description Maximum distance in meters to search (default: 1000).
   * @default null
   */
  radius: number | null;
};

/**
 * Type of RADAR's RADAR_SEARCH_USERS_NEAR_LOCATION tool output.
 */
type RADAR_SEARCH_USERS_NEAR_LOCATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Metadata about the API response.
       */
      meta: {
          /**
           * Code
           * @description Status code returned by the API.
           */
          code: number;
          /**
           * Success
           * @description True if the request was successful.
           */
          success: boolean;
      };
      /**
       * Users
       * @description List of users found within the specified radius.
       */
      users: {
          /**
           *  Id
           * @description Internal Radar user ID.
           */
          _id: string;
          /**
           * Device Id
           * @description Radar device identifier.
           */
          deviceId: string;
          /**
           * Location
           * @description Last known location of the user.
           */
          location: {
              /**
               * Coordinates
               * @description Coordinates in [longitude, latitude].
               */
              coordinates: number[];
              /**
               * Type
               * @description GeoJSON type; always 'Point'.
               */
              type: string;
          };
          /**
           * Updated At
           * @description ISO 8601 timestamp of last update.
           */
          updatedAt: string;
          /**
           * User Id
           * @description External user ID, if provided.
           * @default null
           */
          userId: string | null;
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
 * Type of RADAR's RADAR_TRACK_LOCATION_UPDATE tool input.
 */
type RADAR_TRACK_LOCATION_UPDATE_INPUT = {
  /**
   * Device Id
   * @description Unique identifier for the user's device
   * @default null
   */
  deviceId: string | null;
  /**
   * Events
   * @description Whether to evaluate geofences, places, etc.
   * @default true
   */
  events: boolean | null;
  /**
   * Foreground
   * @description Whether the location was tracked in the foreground
   * @default null
   */
  foreground: boolean | null;
  /**
   * Location
   * @description Location object representing the user's position
   */
  location?: {
      /**
       * Accuracy
       * @description Accuracy of the location in meters
       * @default null
       */
      accuracy: number | null;
      /**
       * Altitude
       * @description Altitude of the device in meters
       * @default null
       */
      altitude: number | null;
      /**
       * Bearing
       * @description Bearing of the device in degrees
       * @default null
       */
      bearing: number | null;
      /**
       * Latitude
       * @description Latitude of the location in degrees
       */
      latitude: number;
      /**
       * Longitude
       * @description Longitude of the location in degrees
       */
      longitude: number;
      /**
       * Speed
       * @description Speed of the device in meters per second
       * @default null
       */
      speed: number | null;
  };
  /**
   * Metadata
   * @description Arbitrary metadata to associate with this track event
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Nearby
   * @description Whether to include nearby places/geofences in the response
   * @default false
   */
  nearby: boolean | null;
  /**
   * Replayed
   * @description Whether this location update is historical (replayed)
   * @default null
   */
  replayed: boolean | null;
  /**
   * Stopped
   * @description Whether the user is stopped
   * @default null
   */
  stopped: boolean | null;
  /**
   * User Id
   * @description Unique identifier for the user
   */
  userId?: string;
};

/**
 * Type of RADAR's RADAR_TRACK_LOCATION_UPDATE tool output.
 */
type RADAR_TRACK_LOCATION_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Events
       * @description Array of events triggered by this track
       */
      events: {
          [key: string]: unknown;
      }[];
      /**
       * Location
       * @description The updated location object
       */
      location: {
          [key: string]: unknown;
      };
      /**
       * Nearby
       * @description Array of nearby places/geofences, if requested
       */
      nearby: {
          [key: string]: unknown;
      }[];
      /**
       * User
       * @description The updated user object
       */
      user: {
          [key: string]: unknown;
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
 * Type of RADAR's RADAR_UPDATE_TRIP tool input.
 */
type RADAR_UPDATE_TRIP_INPUT = {
  /**
   * Active
   * @description Whether the trip is active (true) or paused/completed (false)
   * @default null
   */
  active: boolean | null;
  /**
   * Approaching Threshold
   * @description Threshold in meters for the 'approaching' state
   * @default null
   */
  approachingThreshold: number | null;
  /**
   * Arrived Threshold
   * @description Threshold in meters for the 'arrived' state
   * @default null
   */
  arrivedThreshold: number | null;
  /**
   * Destination
   * @description Explicit destination coordinates if not using a geofence.
   * @default null
   */
  destination: {
      /**
       * Accuracy
       * @description Accuracy of the destination in meters
       * @default null
       */
      accuracy: number | null;
      /**
       * Latitude
       * @description Latitude of the trip destination
       */
      latitude: number;
      /**
       * Longitude
       * @description Longitude of the trip destination
       */
      longitude: number;
      /**
       * Name
       * @description Human-readable name of the destination
       * @default null
       */
      name: string | null;
  } | null;
  /**
   * Destination Geofence External Id
   * @description External ID of destination geofence
   * @default null
   */
  destinationGeofenceExternalId: string | null;
  /**
   * Destination Geofence Radius
   * @description Radius in meters for the destination geofence
   * @default null
   */
  destinationGeofenceRadius: number | null;
  /**
   * Destination Geofence Tag
   * @description Tag of destination geofence
   * @default null
   */
  destinationGeofenceTag: string | null;
  /**
   * External Id
   * @description New external ID for the trip
   * @default null
   */
  externalId: string | null;
  /**
   * Format
   * @description Set to 'externalId' when the provided ID is an external trip ID
   * @default null
   * @constant
   */
  format: "externalId";
  /**
   * Id
   * @description The Radar trip ID or externalId to update
   */
  id?: string;
  /**
   * Metadata
   * @description Custom metadata (max 16 key-value pairs)
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Mode
   * @description Mode of travel
   * @default null
   * @enum {string|null}
   */
  mode: "car" | "truck" | "bike" | "foot" | "motorcycle" | "scooter" | null;
  /**
   * Scheduled Arrival At
   * @description Scheduled arrival time in ISO8601 format
   * @default null
   */
  scheduledArrivalAt: string | null;
};

/**
 * Type of RADAR's RADAR_UPDATE_TRIP tool output.
 */
type RADAR_UPDATE_TRIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Trip
       * @description The updated trip object
       */
      trip: {
          /**
           * Completed At
           * @description Completion timestamp in ISO8601 format if completed
           * @default null
           */
          completedAt: string | null;
          /**
           * Destination Geofence External Id
           * @description External ID of destination geofence
           * @default null
           */
          destinationGeofenceExternalId: string | null;
          /**
           * Destination Geofence Tag
           * @description Tag of destination geofence
           * @default null
           */
          destinationGeofenceTag: string | null;
          /**
           * DestinationLocation
           * @description Destination location coordinates for the trip.
           * @default null
           */
          destinationLocation: {
              /**
               * Latitude
               * @description Latitude of the trip destination
               */
              latitude: number;
              /**
               * Longitude
               * @description Longitude of the trip destination
               */
              longitude: number;
          } | null;
          /**
           * Distance
           * @description Distance traveled in meters
           * @default null
           */
          distance: number | null;
          /**
           * Eta
           * @description Estimated time of arrival in seconds
           * @default null
           */
          eta: number | null;
          /**
           * External Id
           * @description External trip ID
           * @default null
           */
          externalId: string | null;
          /**
           * Id
           * @description Unique Radar trip ID
           */
          id: string;
          /**
           * Metadata
           * @description Custom key-value data for the trip
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Note
           * @description Freeform note for the trip
           * @default null
           */
          note: string | null;
          /**
           * Started At
           * @description Start timestamp in ISO8601 format
           */
          startedAt: string;
          /**
           * Status
           * @description Trip status (e.g., created, started, completed)
           */
          status: string;
          /**
           * Updated At
           * @description Last update timestamp in ISO8601 format
           */
          updatedAt: string;
          /**
           * User Id
           * @description Radar user ID associated with the trip
           */
          userId: string;
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
 * Type of RADAR's RADAR_UPSERT_GEOFENCE tool input.
 */
type RADAR_UPSERT_GEOFENCE_INPUT = {
  /**
   * Coordinates
   * @description Array of [longitude, latitude] pairs defining a polygon. Required when type='polygon'.
   * @default null
   */
  coordinates: number[][] | null;
  /**
   * Description
   * @description Human-readable description of the geofence
   * @default null
   */
  description: string | null;
  /**
   * External Id
   * @description External identifier of the geofence
   */
  externalId?: string;
  /**
   * Geometry
   * @description GeoJSON geometry object for the geofence
   * @default null
   */
  geometry: {
      [key: string]: unknown;
  } | null;
  /**
   * Metadata
   * @description Custom key-value pairs attached to the geofence
   * @default null
   */
  metadata: {
      [key: string]: unknown;
  } | null;
  /**
   * Radius
   * @description Radius in meters defining a circle. Required when type='circle'.
   * @default null
   */
  radius: number | null;
  /**
   * Tag
   * @description Tag of the geofence to create or update
   */
  tag?: string;
  /**
   * Type
   * @description Shape type of the geofence
   * @enum {string}
   */
  type?: "circle" | "polygon";
};

/**
 * Type of RADAR's RADAR_UPSERT_GEOFENCE tool output.
 */
type RADAR_UPSERT_GEOFENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Geofence
       * @description The created or updated geofence object.
       */
      geofence: {
          /**
           * Created At
           * @description ISO8601 timestamp when created.
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the geofence.
           * @default null
           */
          description: string | null;
          /**
           * External Id
           * @description External ID of the geofence.
           * @default null
           */
          externalId: string | null;
          /**
           * Geometry
           * @description Geometry details of the geofence.
           */
          geometry: {
              /**
               * Coordinates
               * @description Coordinates of the geofence geometry.
               */
              coordinates: unknown[];
              /**
               * Type
               * @description Geometry type, e.g., 'Point' or 'Polygon'.
               */
              type: string;
          };
          /**
           * Id
           * @description Unique identifier of the geofence.
           */
          id: string;
          /**
           * Metadata
           * @description Custom metadata of the geofence.
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Tag
           * @description Tag associated with the geofence.
           * @default null
           */
          tag: string | null;
          /**
           * Type
           * @description Type of the geofence shape.
           */
          type: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when last updated.
           */
          updatedAt: string;
      };
      /**
       * Meta
       * @description Response metadata.
       */
      meta: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "RADAR".
 */
export type RADAR_TOOL_INPUTS = {
  AUTOCOMPLETE_ADDRESS_OR_PLACE: RADAR_AUTOCOMPLETE_ADDRESS_OR_PLACE_INPUT
  CREATE_TRIP: RADAR_CREATE_TRIP_INPUT
  DELETE_GEOFENCE: RADAR_DELETE_GEOFENCE_INPUT
  DELETE_TRIP: RADAR_DELETE_TRIP_INPUT
  FORWARD_GEOCODE: RADAR_FORWARD_GEOCODE_INPUT
  GET_CONTEXT_FOR_LOCATION: RADAR_GET_CONTEXT_FOR_LOCATION_INPUT
  GET_GEOFENCE: RADAR_GET_GEOFENCE_INPUT
  GET_PLACES_SETTINGS: RADAR_GET_PLACES_SETTINGS_INPUT
  GET_TRIP: RADAR_GET_TRIP_INPUT
  GET_USERS_IN_GEOFENCE: RADAR_GET_USERS_IN_GEOFENCE_INPUT
  IP_GEOCODE: RADAR_IP_GEOCODE_INPUT
  LIST_BEACONS: RADAR_LIST_BEACONS_INPUT
  LIST_EVENTS: RADAR_LIST_EVENTS_INPUT
  LIST_GEOFENCES: RADAR_LIST_GEOFENCES_INPUT
  LIST_TRIPS: RADAR_LIST_TRIPS_INPUT
  LIST_USERS: RADAR_LIST_USERS_INPUT
  REVERSE_GEOCODE: RADAR_REVERSE_GEOCODE_INPUT
  ROUTE_DISTANCE: RADAR_ROUTE_DISTANCE_INPUT
  SEARCH_GEOFENCES_NEAR_LOCATION: RADAR_SEARCH_GEOFENCES_NEAR_LOCATION_INPUT
  SEARCH_PLACES_NEAR_LOCATION: RADAR_SEARCH_PLACES_NEAR_LOCATION_INPUT
  SEARCH_USERS_NEAR_LOCATION: RADAR_SEARCH_USERS_NEAR_LOCATION_INPUT
  TRACK_LOCATION_UPDATE: RADAR_TRACK_LOCATION_UPDATE_INPUT
  UPDATE_TRIP: RADAR_UPDATE_TRIP_INPUT
  UPSERT_GEOFENCE: RADAR_UPSERT_GEOFENCE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "RADAR".
 */
export type RADAR_TOOL_OUTPUTS = {
  AUTOCOMPLETE_ADDRESS_OR_PLACE: RADAR_AUTOCOMPLETE_ADDRESS_OR_PLACE_OUTPUT
  CREATE_TRIP: RADAR_CREATE_TRIP_OUTPUT
  DELETE_GEOFENCE: RADAR_DELETE_GEOFENCE_OUTPUT
  DELETE_TRIP: RADAR_DELETE_TRIP_OUTPUT
  FORWARD_GEOCODE: RADAR_FORWARD_GEOCODE_OUTPUT
  GET_CONTEXT_FOR_LOCATION: RADAR_GET_CONTEXT_FOR_LOCATION_OUTPUT
  GET_GEOFENCE: RADAR_GET_GEOFENCE_OUTPUT
  GET_PLACES_SETTINGS: RADAR_GET_PLACES_SETTINGS_OUTPUT
  GET_TRIP: RADAR_GET_TRIP_OUTPUT
  GET_USERS_IN_GEOFENCE: RADAR_GET_USERS_IN_GEOFENCE_OUTPUT
  IP_GEOCODE: RADAR_IP_GEOCODE_OUTPUT
  LIST_BEACONS: RADAR_LIST_BEACONS_OUTPUT
  LIST_EVENTS: RADAR_LIST_EVENTS_OUTPUT
  LIST_GEOFENCES: RADAR_LIST_GEOFENCES_OUTPUT
  LIST_TRIPS: RADAR_LIST_TRIPS_OUTPUT
  LIST_USERS: RADAR_LIST_USERS_OUTPUT
  REVERSE_GEOCODE: RADAR_REVERSE_GEOCODE_OUTPUT
  ROUTE_DISTANCE: RADAR_ROUTE_DISTANCE_OUTPUT
  SEARCH_GEOFENCES_NEAR_LOCATION: RADAR_SEARCH_GEOFENCES_NEAR_LOCATION_OUTPUT
  SEARCH_PLACES_NEAR_LOCATION: RADAR_SEARCH_PLACES_NEAR_LOCATION_OUTPUT
  SEARCH_USERS_NEAR_LOCATION: RADAR_SEARCH_USERS_NEAR_LOCATION_OUTPUT
  TRACK_LOCATION_UPDATE: RADAR_TRACK_LOCATION_UPDATE_OUTPUT
  UPDATE_TRIP: RADAR_UPDATE_TRIP_OUTPUT
  UPSERT_GEOFENCE: RADAR_UPSERT_GEOFENCE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's RADAR toolkit.
 */
export const RADAR = {
  slug: "radar",
  tools: {
    /**
     * Tool to autocomplete partial addresses and place names based on relevance and proximity. use after a user inputs a partial address/place to get suggestions, optionally biased by location.
     */
    AUTOCOMPLETE_ADDRESS_OR_PLACE: "RADAR_AUTOCOMPLETE_ADDRESS_OR_PLACE",
    /**
     * Tool to create a new trip. use after gathering origin and destination details to start tracking a trip.
     */
    CREATE_TRIP: "RADAR_CREATE_TRIP",
    /**
     * Tool to delete a geofence by id. use when supplying a geofence’s unique identifier to remove it.
     */
    DELETE_GEOFENCE: "RADAR_DELETE_GEOFENCE",
    /**
     * Tool to delete a trip by its radar id or external id. use after confirming the trip exists.
     */
    DELETE_TRIP: "RADAR_DELETE_TRIP",
    /**
     * Tool to convert an address into geographic coordinates. use when you have a full address string and need precise latitude/longitude before further location analysis.
     */
    FORWARD_GEOCODE: "RADAR_FORWARD_GEOCODE",
    /**
     * Tool to retrieve context for a given location. use when you need geofences, place, and region information based on coordinates. use after obtaining valid latitude and longitude.
     */
    GET_CONTEXT_FOR_LOCATION: "RADAR_GET_CONTEXT_FOR_LOCATION",
    /**
     * Tool to retrieve a geofence by radar  id or tag/externalid. use when you need to fetch full details of an existing geofence.
     */
    GET_GEOFENCE: "RADAR_GET_GEOFENCE",
    /**
     * Tool to retrieve current places settings for your radar project. use when you need to inspect chain detection, supported countries, external id requirements, and other places metadata.
     */
    GET_PLACES_SETTINGS: "RADAR_GET_PLACES_SETTINGS",
    /**
     * Tool to retrieve a trip by id or externalid. use when you have a trip id or externalid to fetch its details.
     */
    GET_TRIP: "RADAR_GET_TRIP",
    /**
     * Tool to retrieve users currently within a specific geofence. use when you need to list all users inside a geofence by its tag and external id.
     */
    GET_USERS_IN_GEOFENCE: "RADAR_GET_USERS_IN_GEOFENCE",
    /**
     * Tool to geocode an ip address to city, state, and country. use when you need location details based on an ip address.
     */
    IP_GEOCODE: "RADAR_IP_GEOCODE",
    /**
     * Tool to list all beacons sorted by creation date. use when you need an overview of all configured beacons.
     */
    LIST_BEACONS: "RADAR_LIST_BEACONS",
    /**
     * Tool to list events. use when you need to retrieve a paginated list of events with optional filtering.
     */
    LIST_EVENTS: "RADAR_LIST_EVENTS",
    /**
     * Tool to list all geofences sorted by updated time. use when you need an overview of all configured geofences.
     */
    LIST_GEOFENCES: "RADAR_LIST_GEOFENCES",
    /**
     * Tool to list all trips, sorted by updated time. use when you need to page through the latest trips.
     */
    LIST_TRIPS: "RADAR_LIST_TRIPS",
    /**
     * Tool to list radar users sorted by update time. use when you need to page through users in your project.
     */
    LIST_USERS: "RADAR_LIST_USERS",
    /**
     * Tool to convert geographic coordinates to structured addresses. use when you have latitude/longitude and need a human-readable address.
     */
    REVERSE_GEOCODE: "RADAR_REVERSE_GEOCODE",
    /**
     * Tool to compute distance and travel time between origins and destinations. use when you need route metrics before optimizing or timing routes.
     */
    ROUTE_DISTANCE: "RADAR_ROUTE_DISTANCE",
    /**
     * Tool to search for geofences near a given location. use when you need to find geofences within a radius of specified coordinates.
     */
    SEARCH_GEOFENCES_NEAR_LOCATION: "RADAR_SEARCH_GEOFENCES_NEAR_LOCATION",
    /**
     * Tool to search for places near given coordinates. use when you need to find points of interest around a location.
     */
    SEARCH_PLACES_NEAR_LOCATION: "RADAR_SEARCH_PLACES_NEAR_LOCATION",
    /**
     * Tool to search for users near a location. use after obtaining coordinates when you need to retrieve users within a given radius.
     */
    SEARCH_USERS_NEAR_LOCATION: "RADAR_SEARCH_USERS_NEAR_LOCATION",
    /**
     * Tool to track a user's location update. use when sending a location update for a user, creating or updating user and event data.
     */
    TRACK_LOCATION_UPDATE: "RADAR_TRACK_LOCATION_UPDATE",
    /**
     * Tool to update a trip. use when you need to modify mode, destination, schedule, or active status.
     */
    UPDATE_TRIP: "RADAR_UPDATE_TRIP",
    /**
     * Tool to create or update a geofence by tag and externalid. use when ensuring a geofence exists or is updated based on identifiers.
     */
    UPSERT_GEOFENCE: "RADAR_UPSERT_GEOFENCE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "RADAR".
 */
export type RADAR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "RADAR".
 */
export type RADAR_TRIGGER_EVENTS = {}
