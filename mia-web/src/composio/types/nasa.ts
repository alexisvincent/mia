// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of NASA's NASA_GET_CMR_COLLECTIONS tool input.
 */
type NASA_GET_CMR_COLLECTIONS_INPUT = {
  /**
   * Bounding Box
   * @description Bounding box for spatial queries in 'west,south,east,north' format. Example: '-180,-90,180,90'. Mutually exclusive with 'circle' and 'polygon'.
   * @default null
   */
  bounding_box: string | null;
  /**
   * Circle
   * @description Circle for spatial queries in 'lat,lon,radius' format (radius in km). Example: '34.5,-117.4,50'. Mutually exclusive with 'bounding_box' and 'polygon'.
   * @default null
   */
  circle: string | null;
  /**
   * Concept Id
   * @description Exact CMR collection concept ID, e.g., 'C1234567890-LPDAAC_ECS'. Use to retrieve a single known collection.
   * @default null
   */
  concept_id: string | null;
  /**
   * Instrument
   * @description Instrument used to acquire data, e.g., 'MODIS'.
   * @default null
   */
  instrument: string | null;
  /**
   * Keyword
   * @description Free-text keyword search against metadata.
   * @default null
   */
  keyword: string | null;
  /**
   * Page Num
   * @description Page number to retrieve. Default=1.
   * @default 1
   */
  page_num: number | null;
  /**
   * Page Size
   * @description Results per page (1-2000). Default=10.
   * @default 10
   */
  page_size: number | null;
  /**
   * Platform
   * @description Acquisition platform, e.g., 'AQUA'.
   * @default null
   */
  platform: string | null;
  /**
   * Polygon
   * @description Polygon for spatial queries as whitespace-separated 'lat1,lon1 lat2,lon2 ...'. Mutually exclusive with 'bounding_box' and 'circle'.
   * @default null
   */
  polygon: string | null;
  /**
   * Provider
   * @description Data provider ID, e.g., 'LPDAAC_ECS'.
   * @default null
   */
  provider: string | null;
  /**
   * Short Name
   * @description Short name of the collection, e.g., 'MODIS_Terra'.
   * @default null
   */
  short_name: string | null;
  /**
   * Temporal
   * @description Time range in 'start,stop' ISO-8601 format, e.g. '2020-01-01T00:00:00Z,2020-12-31T23:59:59Z'.
   * @default null
   */
  temporal: string | null;
  /**
   * Version
   * @description Version of the collection, e.g., '6'.
   * @default null
   */
  version: string | null;
};

/**
 * Type of NASA's NASA_GET_CMR_COLLECTIONS tool output.
 */
type NASA_GET_CMR_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Feed
       * @description Feed object containing collection entries
       */
      feed: {
          /**
           * Entry
           * @description List of collection entries
           */
          entry: {
              /**
               * Id
               * @description CMR collection concept ID
               */
              id: string;
              /**
               * Summary
               * @description Collection summary/description
               * @default null
               */
              summary: string | null;
              /**
               * Title
               * @description Collection title
               * @default null
               */
              title: string | null;
          }[];
          /**
           * Id
           * @description Feed identifier
           */
          id: string;
          /**
           * Title
           * @description Feed title
           */
          title: string;
          /**
           * Updated
           * @description Feed last updated timestamp
           */
          updated: string;
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
 * Type of NASA's NASA_GET_CMR_GRANULES tool input.
 */
type NASA_GET_CMR_GRANULES_INPUT = {
  /**
   * Bounding Box
   * @description Bounding box for spatial search in 'west,south,east,north' format; must be four comma-separated floats
   * @default null
   */
  bounding_box: string | null;
  /**
   * Concept Id
   * @description Restrict results to a specific collection by its concept ID
   * @default null
   */
  concept_id: string | null;
  /**
   * Page Num
   * @description Page number for pagination; must be >= 1
   * @default null
   */
  page_num: number | null;
  /**
   * Page Size
   * @description Number of results per page; must be >= 1
   * @default null
   */
  page_size: number | null;
  /**
   * Provider
   * @description Restrict results to a specific data provider
   * @default null
   */
  provider: string | null;
  /**
   * Short Name
   * @description Restrict results to collections with this short name
   * @default null
   */
  short_name: string | null;
  /**
   * Time End
   * @description End of time range in ISO 8601 format (e.g., '2020-01-31T23:59:59Z')
   * @default null
   */
  time_end: string | null;
  /**
   * Time Start
   * @description Start of time range in ISO 8601 format (e.g., '2020-01-01T00:00:00Z')
   * @default null
   */
  time_start: string | null;
  /**
   * Version
   * @description Restrict results to a specific collection version
   * @default null
   */
  version: string | null;
};

/**
 * Type of NASA's NASA_GET_CMR_GRANULES tool output.
 */
type NASA_GET_CMR_GRANULES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Feed
       * @description CMR feed containing granule entries
       */
      feed: {
          /**
           * Entry
           * @description List of granule metadata records
           */
          entry: {
              /**
               * Granule Ur
               * @description Granule unique resource identifier
               * @default null
               */
              granule_ur: string | null;
              /**
               * Id
               * @description CMR concept ID of the granule
               */
              id: string;
              /**
               * Links
               * @description Related links for the granule
               * @default null
               */
              links: {
                  /**
                   * Href
                   * @description URL of the link resource
                   */
                  href: string;
                  /**
                   * Hreflang
                   * @description Language of the link content
                   * @default null
                   */
                  hreflang: string | null;
                  /**
                   * Rel
                   * @description Relation type of the link
                   * @default null
                   */
                  rel: string | null;
                  /**
                   * Title
                   * @description Title of the link
                   * @default null
                   */
                  title: string | null;
                  /**
                   * Type
                   * @description MIME type of the link content
                   * @default null
                   */
                  type: string | null;
              }[] | null;
              /**
               * Producer Granule Id
               * @description Producer granule ID
               * @default null
               */
              producer_granule_id: string | null;
              /**
               * Time End
               * @description Granule end time in ISO 8601 format
               * @default null
               */
              time_end: string | null;
              /**
               * Time Start
               * @description Granule start time in ISO 8601 format
               * @default null
               */
              time_start: string | null;
              /**
               * Title
               * @description Title of the granule
               * @default null
               */
              title: string | null;
          }[];
          /**
           * Id
           * @description Feed identifier
           */
          id: string;
          /**
           * Title
           * @description Feed title
           * @default null
           */
          title: string | null;
          /**
           * Updated
           * @description Feed last updated timestamp
           * @default null
           */
          updated: string | null;
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
 * Type of NASA's NASA_GET_EONET_CATEGORIES tool input.
 */
type NASA_GET_EONET_CATEGORIES_INPUT = object;

/**
 * Type of NASA's NASA_GET_EONET_CATEGORIES tool output.
 */
type NASA_GET_EONET_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description List of all natural event categories from EONET.
       */
      categories: {
          /**
           * Description
           * @description Detailed description of the category, if available.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for this event category.
           */
          id: string;
          /**
           * Link
           * @description URL to more information about this category.
           * @default null
           */
          link: string | null;
          /**
           * Title
           * @description Human-readable name of the category.
           */
          title: string;
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
 * Type of NASA's NASA_GET_EONET_EVENTS_ATOM tool input.
 */
type NASA_GET_EONET_EVENTS_ATOM_INPUT = {
  /**
   * Bbox
   * @description Bounding box in 'minLon,minLat,maxLon,maxLat' format to restrict events geographically.
   * @default null
   */
  bbox: string | null;
  /**
   * Category
   * @description Comma-separated list of Category IDs to filter events by. Operates as a boolean OR when multiple provided.
   * @default null
   */
  category: string | null;
  /**
   * Days
   * @description Return events from the past N days (including today). Must be ≥ 0.
   * @default null
   */
  days: number | null;
  /**
   * End
   * Format: date
   * @description End date (inclusive) for events, in YYYY-MM-DD format.
   * @default null
   */
  end: string | null;
  /**
   * Limit
   * @description Maximum number of events to return. Must be ≥ 1.
   * @default null
   */
  limit: number | null;
  /**
   * Mag Max
   * @description Maximum magnitude value (inclusive).
   * @default null
   */
  magMax: number | null;
  /**
   * Mag Min
   * @description Minimum magnitude value (inclusive).
   * @default null
   */
  magMin: number | null;
  /**
   * Mag Id
   * @description Magnitude ID to filter by (see /magnitudes endpoint).
   * @default null
   */
  mag_id: string | null;
  /**
   * Source
   * @description Comma-separated list of Source IDs to filter events by. Operates as a boolean OR when multiple provided.
   * @default null
   */
  source: string | null;
  /**
   * Start
   * Format: date
   * @description Start date (inclusive) for events, in YYYY-MM-DD format.
   * @default null
   */
  start: string | null;
  /**
   * Status
   * @description Filter by event status. 'open' (default) returns only active events; 'closed' returns only ended events; 'all' returns both.
   * @default open
   * @enum {string}
   */
  status: "open" | "closed" | "all";
};

/**
 * Type of NASA's NASA_GET_EONET_EVENTS_ATOM tool output.
 */
type NASA_GET_EONET_EVENTS_ATOM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Xml
       * @description ATOM XML feed of natural events from EONET.
       */
      xml: string;
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
 * Type of NASA's NASA_GET_EONET_EVENTS_RSS tool input.
 */
type NASA_GET_EONET_EVENTS_RSS_INPUT = object;

/**
 * Type of NASA's NASA_GET_EONET_EVENTS_RSS tool output.
 */
type NASA_GET_EONET_EVENTS_RSS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rss
       * @description The raw RSS XML feed of current natural events from EONET.
       */
      rss: string;
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
 * Type of NASA's NASA_GET_EONET_LAYERS tool input.
 */
type NASA_GET_EONET_LAYERS_INPUT = {
  /**
   * Category
   * @description Category ID to filter layers by. Example: 'wildfires'.
   * @default null
   */
  category: string | null;
};

/**
 * Type of NASA's NASA_GET_EONET_LAYERS tool output.
 */
type NASA_GET_EONET_LAYERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Layers
       * @description List of available EONET imagery layers.
       */
      layers: {
          /**
           * Name
           * @description Name of the layer.
           */
          name: string;
          /**
           * Parameters
           * @description URL parameters for constructing service requests.
           */
          parameters: {
              [key: string]: string;
          };
          /**
           * Service Type Id
           * @description Service type and version, e.g., 'WMS_1.3.0'.
           */
          serviceTypeId: string;
          /**
           * Service Url
           * @description Base URL of the web service.
           */
          serviceUrl: string;
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
 * Type of NASA's NASA_GET_EONET_MAGNITUDES tool input.
 */
type NASA_GET_EONET_MAGNITUDES_INPUT = object;

/**
 * Type of NASA's NASA_GET_EONET_MAGNITUDES tool output.
 */
type NASA_GET_EONET_MAGNITUDES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Short summary of what the list contains.
       */
      description: string;
      /**
       * Link
       * @description Self-reference URL for this magnitudes list.
       */
      link: string;
      /**
       * Magnitudes
       * @description Array of all available event magnitudes and their definitions.
       */
      magnitudes: {
          /**
           * Description
           * @description Detailed description of what this magnitude represents.
           */
          description: string;
          /**
           * Id
           * @description Unique identifier for this magnitude (e.g., 'mb', 'ml').
           */
          id: string;
          /**
           * Link
           * @description URL to query events filtered by this magnitude (e.g., '/events?magID=mb').
           */
          link: string;
          /**
           * Name
           * @description Human-readable name of the magnitude (e.g., 'Body Wave Magnitude').
           */
          name: string;
          /**
           * Unit
           * @description Unit of measure for this magnitude (e.g., 'Mb', 'Ml').
           */
          unit: string;
      }[];
      /**
       * Title
       * @description Title of this resource, always 'EONET Event Magnitudes'.
       */
      title: string;
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
 * Type of NASA's NASA_GET_EONET_SOURCES tool input.
 */
type NASA_GET_EONET_SOURCES_INPUT = object;

/**
 * Type of NASA's NASA_GET_EONET_SOURCES tool output.
 */
type NASA_GET_EONET_SOURCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sources
       * @description Array of available event sources
       */
      sources: {
          /**
           * Id
           * @description Unique identifier for this source
           */
          id: string;
          /**
           * Link
           * @description API endpoint URL filtered to only events from this source
           */
          link: string;
          /**
           * Source
           * @description Homepage URL for the source
           */
          source: string;
          /**
           * Title
           * @description Human-readable name of the source
           */
          title: string;
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
 * Type of NASA's NASA_GET_EONET_SOURCE_BY_ID tool input.
 */
type NASA_GET_EONET_SOURCE_BY_ID_INPUT = {
  /**
   * Source Id
   * @description Unique identifier of the EONET source (e.g., 'InciWeb')
   */
  source_id?: string;
};

/**
 * Type of NASA's NASA_GET_EONET_SOURCE_BY_ID tool output.
 */
type NASA_GET_EONET_SOURCE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique ID of the source
       */
      id: string;
      /**
       * Link
       * @description API endpoint URL filtered to events from this source
       */
      link: string;
      /**
       * Source
       * @description Homepage URL for the source
       */
      source: string;
      /**
       * Title
       * @description Title of the source
       */
      title: string;
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
 * Type of NASA's NASA_GET_MARS_ROVER_PHOTOS tool input.
 */
type NASA_GET_MARS_ROVER_PHOTOS_INPUT = {
  /**
   * Api Key
   * @description NASA API key for authentication. Defaults to configured key if not provided.
   * @default null
   */
  api_key: string | null;
  /**
   * Camera
   * @description Filter by camera abbreviation (e.g., 'FHAZ', 'RHAZ', 'MAST', 'CHEMCAM').
   * @default null
   */
  camera: string | null;
  /**
   * Page
   * @description Page number for paginated results; must be ≥1.
   * @default null
   */
  page: number | null;
  /**
   * Rover Name
   * @description Name of the Mars rover; one of 'curiosity', 'opportunity', or 'spirit'.
   * @enum {string}
   */
  rover_name?: "curiosity" | "opportunity" | "spirit";
  /**
   * Sol
   * @description Martian sol (day) number on which photos were taken; non-negative integer.
   */
  sol?: number;
};

/**
 * Type of NASA's NASA_GET_MARS_ROVER_PHOTOS tool output.
 */
type NASA_GET_MARS_ROVER_PHOTOS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Photos
       * @description List of photos matching the query.
       */
      photos: {
          /**
           * Camera
           * @description Camera information.
           */
          camera: {
              /**
               * Full Name
               * @description Full camera name.
               */
              full_name: string;
              /**
               * Id
               * @description Camera ID.
               */
              id: number;
              /**
               * Name
               * @description Camera abbreviation/name.
               */
              name: string;
              /**
               * Rover Id
               * @description Associated rover ID.
               */
              rover_id: number;
          };
          /**
           * Earth Date
           * @description Earth date when photo was taken (YYYY-MM-DD).
           */
          earth_date: string;
          /**
           * Id
           * @description Unique photo ID.
           */
          id: number;
          /**
           * Img Src
           * @description Image URL.
           */
          img_src: string;
          /**
           * Rover
           * @description Rover information.
           */
          rover: {
              /**
               * Id
               * @description Rover ID.
               */
              id: number;
              /**
               * Landing Date
               * @description Date the rover landed on Mars (YYYY-MM-DD).
               */
              landing_date: string;
              /**
               * Launch Date
               * @description Date the rover launched from Earth (YYYY-MM-DD).
               */
              launch_date: string;
              /**
               * Name
               * @description Rover name.
               */
              name: string;
              /**
               * Status
               * @description Current status of the rover.
               * @enum {string}
               */
              status: "active" | "complete";
          };
          /**
           * Sol
           * @description Martian sol (day) when photo was taken.
           */
          sol: number;
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
 * Type of NASA's NASA_SEARCH_NEAR_EARTH_OBJECTS tool input.
 */
type NASA_SEARCH_NEAR_EARTH_OBJECTS_INPUT = {
  /**
   * End Date
   * @description Optional end date (YYYY-MM-DD); <=7 days after start_date.
   * @default null
   */
  end_date: string | null;
  /**
   * Start Date
   * @description Starting date for asteroid data (YYYY-MM-DD).
   */
  start_date?: string;
};

/**
 * Type of NASA's NASA_SEARCH_NEAR_EARTH_OBJECTS tool output.
 */
type NASA_SEARCH_NEAR_EARTH_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Element Count
       * @description Number of near-Earth objects returned.
       */
      element_count: number;
      /**
       * Links
       * @description Pagination links.
       */
      links: {
          /**
           * Next
           * @description Link to next page of results.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description Link to previous page of results.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description Link to this query result.
           */
          self: string;
      };
      /**
       * Near Earth Objects
       * @description Mapping of dates to arrays of NEOs.
       */
      near_earth_objects: {
          [key: string]: {
              /** Absolute Magnitude H */
              absolute_magnitude_h: number;
              /** Close Approach Data */
              close_approach_data: {
                  /** Close Approach Date */
                  close_approach_date: string;
                  /** Epoch Date Close Approach */
                  epoch_date_close_approach: number;
                  /** MissDistance */
                  miss_distance: {
                      /** Astronomical */
                      astronomical: string;
                      /** Kilometers */
                      kilometers: string;
                      /** Lunar */
                      lunar: string;
                      /** Miles */
                      miles: string;
                  };
                  /** Orbiting Body */
                  orbiting_body: string;
                  /** RelativeVelocity */
                  relative_velocity: {
                      /** Kilometers Per Hour */
                      kilometers_per_hour: string;
                      /** Kilometers Per Second */
                      kilometers_per_second: string;
                      /** Miles Per Hour */
                      miles_per_hour: string;
                  };
              }[];
              /** EstimatedDiameter */
              estimated_diameter: {
                  /** DiameterRange */
                  feet: {
                      /**
                       * Estimated Diameter Max
                       * @description Maximum estimated diameter.
                       */
                      estimated_diameter_max: number;
                      /**
                       * Estimated Diameter Min
                       * @description Minimum estimated diameter.
                       */
                      estimated_diameter_min: number;
                  };
                  /** DiameterRange */
                  kilometers: {
                      /**
                       * Estimated Diameter Max
                       * @description Maximum estimated diameter.
                       */
                      estimated_diameter_max: number;
                      /**
                       * Estimated Diameter Min
                       * @description Minimum estimated diameter.
                       */
                      estimated_diameter_min: number;
                  };
                  /** DiameterRange */
                  meters: {
                      /**
                       * Estimated Diameter Max
                       * @description Maximum estimated diameter.
                       */
                      estimated_diameter_max: number;
                      /**
                       * Estimated Diameter Min
                       * @description Minimum estimated diameter.
                       */
                      estimated_diameter_min: number;
                  };
                  /** DiameterRange */
                  miles: {
                      /**
                       * Estimated Diameter Max
                       * @description Maximum estimated diameter.
                       */
                      estimated_diameter_max: number;
                      /**
                       * Estimated Diameter Min
                       * @description Minimum estimated diameter.
                       */
                      estimated_diameter_min: number;
                  };
              };
              /** Id */
              id: string;
              /** Is Potentially Hazardous Asteroid */
              is_potentially_hazardous_asteroid: boolean;
              /**
               * Is Sentry Object
               * @description True if a sentry object.
               * @default null
               */
              is_sentry_object: boolean | null;
              /** Name */
              name: string;
              /** Nasa Jpl Url */
              nasa_jpl_url: string;
              /** Neo Reference Id */
              neo_reference_id: string;
          }[];
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
 * Type of NASA's NASA_SEARCH_SVS_VISUALIZATIONS tool input.
 */
type NASA_SEARCH_SVS_VISUALIZATIONS_INPUT = {
  /**
   * Limit
   * @description Maximum number of results to return. Use an integer up to 2000, or 'all'/'none' to fetch all available results.
   * @default 100
   */
  limit: number | null;
  /**
   * Missions
   * @description List of mission names to filter results. Multiple values will be joined with commas (e.g., ['JWST', 'Hubble']).
   * @default null
   */
  missions: string[] | null;
  /**
   * Offset
   * @description Number of initial results to skip (for pagination).
   * @default 0
   */
  offset: number | null;
  /**
   * Search
   * @description Free-text term to search titles and descriptions (e.g. 'Apollo').
   * @default null
   */
  search: string | null;
};

/**
 * Type of NASA's NASA_SEARCH_SVS_VISUALIZATIONS tool output.
 */
type NASA_SEARCH_SVS_VISUALIZATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of matching results.
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, or null.
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, or null.
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description Array of matching visualization results.
       */
      results: {
          /**
           * Description
           * @description Brief description of the visualization.
           */
          description: string;
          /**
           * Hits
           * @description Number of views in the past 10 days.
           */
          hits: number;
          /**
           * Id
           * @description Unique ID of the visualization page.
           */
          id: number;
          /**
           * Release Date
           * @description Release timestamp in ISO 8601 format.
           */
          release_date: string;
          /**
           * Result Type
           * @description Type of result, e.g., 'Visualization'.
           */
          result_type: string;
          /**
           * Title
           * @description Title of the visualization.
           */
          title: string;
          /**
           * Url
           * @description URL to the visualization page.
           */
          url: string;
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
 * Type map of all available tool input types for toolkit "NASA".
 */
export type NASA_TOOL_INPUTS = {
  GET_CMR_COLLECTIONS: NASA_GET_CMR_COLLECTIONS_INPUT
  GET_CMR_GRANULES: NASA_GET_CMR_GRANULES_INPUT
  GET_EONET_CATEGORIES: NASA_GET_EONET_CATEGORIES_INPUT
  GET_EONET_EVENTS_ATOM: NASA_GET_EONET_EVENTS_ATOM_INPUT
  GET_EONET_EVENTS_RSS: NASA_GET_EONET_EVENTS_RSS_INPUT
  GET_EONET_LAYERS: NASA_GET_EONET_LAYERS_INPUT
  GET_EONET_MAGNITUDES: NASA_GET_EONET_MAGNITUDES_INPUT
  GET_EONET_SOURCES: NASA_GET_EONET_SOURCES_INPUT
  GET_EONET_SOURCE_BY_ID: NASA_GET_EONET_SOURCE_BY_ID_INPUT
  GET_MARS_ROVER_PHOTOS: NASA_GET_MARS_ROVER_PHOTOS_INPUT
  SEARCH_NEAR_EARTH_OBJECTS: NASA_SEARCH_NEAR_EARTH_OBJECTS_INPUT
  SEARCH_SVS_VISUALIZATIONS: NASA_SEARCH_SVS_VISUALIZATIONS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "NASA".
 */
export type NASA_TOOL_OUTPUTS = {
  GET_CMR_COLLECTIONS: NASA_GET_CMR_COLLECTIONS_OUTPUT
  GET_CMR_GRANULES: NASA_GET_CMR_GRANULES_OUTPUT
  GET_EONET_CATEGORIES: NASA_GET_EONET_CATEGORIES_OUTPUT
  GET_EONET_EVENTS_ATOM: NASA_GET_EONET_EVENTS_ATOM_OUTPUT
  GET_EONET_EVENTS_RSS: NASA_GET_EONET_EVENTS_RSS_OUTPUT
  GET_EONET_LAYERS: NASA_GET_EONET_LAYERS_OUTPUT
  GET_EONET_MAGNITUDES: NASA_GET_EONET_MAGNITUDES_OUTPUT
  GET_EONET_SOURCES: NASA_GET_EONET_SOURCES_OUTPUT
  GET_EONET_SOURCE_BY_ID: NASA_GET_EONET_SOURCE_BY_ID_OUTPUT
  GET_MARS_ROVER_PHOTOS: NASA_GET_MARS_ROVER_PHOTOS_OUTPUT
  SEARCH_NEAR_EARTH_OBJECTS: NASA_SEARCH_NEAR_EARTH_OBJECTS_OUTPUT
  SEARCH_SVS_VISUALIZATIONS: NASA_SEARCH_SVS_VISUALIZATIONS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's NASA toolkit.
 */
export const NASA = {
  slug: "nasa",
  tools: {
    /**
     * Tool to retrieve collections from the common metadata repository (cmr). use when you need to search nasa science data collections by spatial, temporal, or metadata filters. call after confirming search criteria.
     */
    GET_CMR_COLLECTIONS: "NASA_GET_CMR_COLLECTIONS",
    /**
     * Tool to retrieve granules from the common metadata repository (cmr). use when you need granule metadata filtered by collection ids, spatial, or temporal criteria. call after confirming your filters.
     */
    GET_CMR_GRANULES: "NASA_GET_CMR_GRANULES",
    /**
     * Tool to retrieve a list of all event categories from eonet. use when you need current category ids, titles, descriptions, and info links.
     */
    GET_EONET_CATEGORIES: "NASA_GET_EONET_CATEGORIES",
    /**
     * Tool to retrieve a list of natural events in atom format. use when you need a machine-readable xml feed of recent natural events from eonet.
     */
    GET_EONET_EVENTS_ATOM: "NASA_GET_EONET_EVENTS_ATOM",
    /**
     * Tool to retrieve a list of natural events in rss format. use when you need the latest eonet events as an rss feed.
     */
    GET_EONET_EVENTS_RSS: "NASA_GET_EONET_EVENTS_RSS",
    /**
     * Tool to retrieve available data layers for event visualization. use after confirming category id if filtering.
     */
    GET_EONET_LAYERS: "NASA_GET_EONET_LAYERS",
    /**
     * Tool to retrieve a list of available event magnitudes and their descriptions. use after determining you need valid magnitude filters before querying events data.
     */
    GET_EONET_MAGNITUDES: "NASA_GET_EONET_MAGNITUDES",
    /**
     * Tool to retrieve a list of event sources. use when you need to enumerate available sources before querying events.
     */
    GET_EONET_SOURCES: "NASA_GET_EONET_SOURCES",
    /**
     * Tool to retrieve details for a specific eonet event source by id. use when you need to fetch source metadata (id, title, homepage) before querying events.
     */
    GET_EONET_SOURCE_BY_ID: "NASA_GET_EONET_SOURCE_BY_ID",
    /**
     * Tool to fetch photos taken by a specified mars rover on a given martian sol. use after selecting rover and sol.
     */
    GET_MARS_ROVER_PHOTOS: "NASA_GET_MARS_ROVER_PHOTOS",
    /**
     * Tool to search near-earth objects by closest approach date range. use when identifying asteroids in a date window (max 7 days).
     */
    SEARCH_NEAR_EARTH_OBJECTS: "NASA_SEARCH_NEAR_EARTH_OBJECTS",
    /**
     * Tool to search for visualizations in the scientific visualization studio (svs). use when you need to query svs visualizations by keywords or mission filters.
     */
    SEARCH_SVS_VISUALIZATIONS: "NASA_SEARCH_SVS_VISUALIZATIONS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "NASA".
 */
export type NASA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "NASA".
 */
export type NASA_TRIGGER_EVENTS = {}
