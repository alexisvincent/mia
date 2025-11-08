// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of TICKETMASTER's TICKETMASTER_GET_ATTRACTIONS tool input.
 */
type TICKETMASTER_GET_ATTRACTIONS_INPUT = {
  /**
   * Attraction Id
   * @description Specific Ticketmaster attraction ID to retrieve one attraction.
   * @default null
   */
  attractionId: string | null;
  /**
   * Classification Name
   * @description Filter by classification name (e.g., music, sports).
   * @default null
   */
  classificationName: string | null;
  /**
   * Country Code
   * @description 2-letter country code (ISO 3166-1 alpha-2).
   * @default null
   */
  countryCode: string | null;
  /**
   * Genre Id
   * @description Genre identifier.
   * @default null
   */
  genreId: string | null;
  /**
   * Include Test
   * @description If true, include test attractions in the response.
   * @default null
   */
  includeTest: boolean | null;
  /**
   * Keyword
   * @description Search term to find attractions by name, genre, etc.
   * @default null
   */
  keyword: string | null;
  /**
   * Page
   * @description Page number (zero-based).
   * @default null
   */
  page: number | null;
  /**
   * Segment Id
   * @description Segment identifier.
   * @default null
   */
  segmentId: string | null;
  /**
   * Size
   * @description Number of results per page (1–200).
   * @default null
   */
  size: number | null;
  /**
   * Sort
   * @description Sorting of results. Common values: 'name,asc', 'name,desc'.
   * @default null
   */
  sort: string | null;
  /**
   * Source
   * @description Content source. One of: ticketmaster, universe, frontgate.
   * @default null
   */
  source: string | null;
  /**
   * Sub Genre Id
   * @description Subgenre identifier.
   * @default null
   */
  subGenreId: string | null;
  /**
   * Sub Segment Id
   * @description Sub-segment identifier.
   * @default null
   */
  subSegmentId: string | null;
  /**
   * Type
   * @description Entity type filter (e.g., event, venue, attraction).
   * @default null
   */
  type: string | null;
};

/**
 * Type of TICKETMASTER's TICKETMASTER_GET_ATTRACTIONS tool output.
 */
type TICKETMASTER_GET_ATTRACTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Embedded
       * @description Container for returned attractions under key 'attractions'.
       * @default null
       */
      _embedded: {
          [key: string]: {
              /**
               * Classifications
               * @description Classification breakdown (segment, genre, sub-genre).
               * @default null
               */
              classifications: {
                  /**
                   * Id
                   * @description Classification ID.
                   */
                  id: string;
                  /**
                   * Name
                   * @description Classification name.
                   */
                  name: string;
              }[] | null;
              /**
               * Externallinks
               * @description External link objects (e.g., social media links).
               * @default null
               */
              externalLinks: {
                  [key: string]: unknown;
              } | null;
              /**
               * Id
               * @description Attraction unique identifier.
               */
              id: string;
              /**
               * Images
               * @description List of available images for this attraction.
               * @default null
               */
              images: {
                  /**
                   * Fallback
                   * @description True if this image is a fallback resource.
                   */
                  fallback: boolean;
                  /**
                   * Height
                   * @description Height in pixels.
                   */
                  height: number;
                  /**
                   * Ratio
                   * @description Image aspect ratio, e.g., '16_9'.
                   */
                  ratio: string;
                  /**
                   * Url
                   * @description Direct URL to the image.
                   */
                  url: string;
                  /**
                   * Width
                   * @description Width in pixels.
                   */
                  width: number;
              }[] | null;
              /**
               * Locale
               * @description Locale code, e.g., 'en-us'.
               * @default null
               */
              locale: string | null;
              /**
               * Name
               * @description Attraction name.
               */
              name: string;
              /**
               * Test
               * @description True if this attraction is marked as a test.
               * @default null
               */
              test: boolean | null;
              /**
               * Type
               * @description Entity type, e.g., 'attraction'.
               */
              type: string;
          }[];
      } | null;
      /**
       * Page
       * @description Paging information.
       */
      page: {
          /**
           * Number
           * @description Zero-based page index returned.
           */
          number: number;
          /**
           * Size
           * @description Number of items returned per page.
           */
          size: number;
          /**
           * Total Elements
           * @description Total number of items available.
           */
          totalElements: number;
          /**
           * Total Pages
           * @description Total number of pages available.
           */
          totalPages: number;
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
 * Type of TICKETMASTER's TICKETMASTER_GET_ATTRACTION_DETAILS tool input.
 */
type TICKETMASTER_GET_ATTRACTION_DETAILS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the attraction to retrieve details for
   */
  id?: string;
  /**
   * Include
   * @description Comma-separated related resources to include, e.g., 'events'
   * @default null
   */
  include: string | null;
  /**
   * Locale
   * @description Locale code, e.g., 'en-us'
   * @default null
   */
  locale: string | null;
};

/**
 * Type of TICKETMASTER's TICKETMASTER_GET_ATTRACTION_DETAILS tool output.
 */
type TICKETMASTER_GET_ATTRACTION_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Links
       * @description Hypermedia links for the attraction
       * @default null
       */
      _links: {
          /**
           * Link
           * @description Link to attractions list
           * @default null
           */
          attractions: {
              /**
               * Href
               * @description Link URL
               */
              href: string;
          } | null;
          /**
           * Link
           * @description Link to events list
           * @default null
           */
          events: {
              /**
               * Href
               * @description Link URL
               */
              href: string;
          } | null;
          /**
           * Self
           * @description Link to this resource
           */
          self: {
              /**
               * Href
               * @description Link URL
               */
              href: string;
          };
      } | null;
      /**
       * Classifications
       * @description Classification details of the attraction
       * @default null
       */
      classifications: {
          /**
           * Family
           * @description Whether this classification is family-friendly
           * @default null
           */
          family: boolean | null;
          /**
           * NameId
           * @description Genre classification
           * @default null
           */
          genre: {
              /**
               * Id
               * @description Unique identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Human-readable name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Primary
           * @description Whether this classification is primary
           * @default null
           */
          primary: boolean | null;
          /**
           * NameId
           * @description Segment classification
           * @default null
           */
          segment: {
              /**
               * Id
               * @description Unique identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Human-readable name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * NameId
           * @description Sub-genre classification
           * @default null
           */
          subGenre: {
              /**
               * Id
               * @description Unique identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Human-readable name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * NameId
           * @description Sub-type classification
           * @default null
           */
          subType: {
              /**
               * Id
               * @description Unique identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Human-readable name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * NameId
           * @description Type classification
           * @default null
           */
          type: {
              /**
               * Id
               * @description Unique identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Human-readable name
               * @default null
               */
              name: string | null;
          } | null;
      }[] | null;
      /**
       * ExternalLinks
       * @description Collection of external links for the attraction
       * @default null
       */
      externalLinks: {
          /**
           * ExternalLinkItem
           * @description Facebook link info
           * @default null
           */
          facebook: {
              /**
               * Url
               * @description External link URL
               * @default null
               */
              url: string | null;
          } | null;
          /**
           * Homepage
           * @description Homepage links info
           * @default null
           */
          homepage: {
              /**
               * Url
               * @description External link URL
               * @default null
               */
              url: string | null;
          }[] | null;
          /**
           * ExternalLinkItem
           * @description Instagram link info
           * @default null
           */
          instagram: {
              /**
               * Url
               * @description External link URL
               * @default null
               */
              url: string | null;
          } | null;
          /**
           * ExternalLinkItem
           * @description Twitter link info
           * @default null
           */
          twitter: {
              /**
               * Url
               * @description External link URL
               * @default null
               */
              url: string | null;
          } | null;
          /**
           * ExternalLinkItem
           * @description YouTube link info
           * @default null
           */
          youtube: {
              /**
               * Url
               * @description External link URL
               * @default null
               */
              url: string | null;
          } | null;
      } | null;
      /**
       * Id
       * @description Unique identifier of the attraction
       * @default null
       */
      id: string | null;
      /**
       * Images
       * @description List of images for the attraction
       * @default null
       */
      images: {
          /**
           * Fallback
           * @description Whether this is a fallback image
           * @default null
           */
          fallback: boolean | null;
          /**
           * Height
           * @description Height of the image in pixels
           * @default null
           */
          height: number | null;
          /**
           * Ratio
           * @description Image aspect ratio, e.g., '16_9'
           * @default null
           */
          ratio: string | null;
          /**
           * Url
           * @description URL of the image
           * @default null
           */
          url: string | null;
          /**
           * Width
           * @description Width of the image in pixels
           * @default null
           */
          width: number | null;
      }[] | null;
      /**
       * Locale
       * @description Locale for the attraction details
       * @default null
       */
      locale: string | null;
      /**
       * Name
       * @description Name of the attraction
       * @default null
       */
      name: string | null;
      /**
       * Test
       * @description Indicates if the attraction is a test resource
       * @default null
       */
      test: boolean | null;
      /**
       * Type
       * @description Type of the resource, typically 'attraction'
       * @default null
       */
      type: string | null;
      /**
       * UpcomingEvents
       * @description Upcoming events information
       * @default null
       */
      upcomingEvents: {
          /**
           * Ticketmaster
           * @description Upcoming events on Ticketmaster platform
           * @default null
           */
          ticketmaster: number | null;
          /**
           * Tmr
           * @description Upcoming events on TMR platform
           * @default null
           */
          tmr: number | null;
          /**
           * Total
           * @description Total number of upcoming events
           * @default null
           */
          total: number | null;
      } | null;
      /**
       * Url
       * @description URL to the attraction's page on Ticketmaster
       * @default null
       */
      url: string | null;
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
 * Type of TICKETMASTER's TICKETMASTER_GET_CLASSIFICATIONS tool input.
 */
type TICKETMASTER_GET_CLASSIFICATIONS_INPUT = {
  /**
   * Classification Id
   * @description Specify classification by ID
   * @default null
   */
  classificationId: string | null;
  /**
   * Country Code
   * @description Filter classifications by country code (ISO 3166-1 alpha-2)
   * @default null
   */
  countryCode: string | null;
  /**
   * Locale
   * @description Language selection for the response (e.g., en-us)
   * @default null
   */
  locale: string | null;
};

/**
 * Type of TICKETMASTER's TICKETMASTER_GET_CLASSIFICATIONS tool output.
 */
type TICKETMASTER_GET_CLASSIFICATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**  Embedded */
      _embedded: {
          /**
           * Classifications
           * @description List of classifications
           */
          classifications: {
              /**
               * Genre
               * @description Genre classification
               */
              genre: {
                  /**
                   * Id
                   * @description Genre ID
                   */
                  id: string;
                  /**
                   * Name
                   * @description Genre name
                   */
                  name: string;
              };
              /**
               * Segment
               * @description Top-level category of the event
               */
              segment: {
                  /**
                   * Id
                   * @description Segment ID
                   */
                  id: string;
                  /**
                   * Name
                   * @description Segment name
                   */
                  name: string;
              };
              /**
               * Sub Genre
               * @description Subgenre classification
               */
              subGenre: {
                  /**
                   * Id
                   * @description Subgenre ID
                   */
                  id: string;
                  /**
                   * Name
                   * @description Subgenre name
                   */
                  name: string;
              };
              /**
               * Sub Type
               * @description Event subtype classification
               */
              subType: {
                  /**
                   * Id
                   * @description Subtype ID
                   */
                  id: string;
                  /**
                   * Name
                   * @description Subtype name
                   */
                  name: string;
              };
              /**
               * Type
               * @description Event type classification
               */
              type: {
                  /**
                   * Id
                   * @description Type ID
                   */
                  id: string;
                  /**
                   * Name
                   * @description Type name
                   */
                  name: string;
              };
          }[];
      };
      /**
       * Page
       * @description Pagination details
       */
      page: {
          /**
           * Number
           * @description Current page index
           */
          number: number;
          /**
           * Size
           * @description Number of records per page
           */
          size: number;
          /**
           * Total Elements
           * @description Total number of elements
           */
          totalElements: number;
          /**
           * Total Pages
           * @description Total pages available
           */
          totalPages: number;
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
 * Type of TICKETMASTER's TICKETMASTER_GET_CLASSIFICATION_DETAILS tool input.
 */
type TICKETMASTER_GET_CLASSIFICATION_DETAILS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the classification to retrieve
   */
  id?: string;
};

/**
 * Type of TICKETMASTER's TICKETMASTER_GET_CLASSIFICATION_DETAILS tool output.
 */
type TICKETMASTER_GET_CLASSIFICATION_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Embedded
       * @description Embedded classification details
       */
      _embedded: {
          /**
           * Classifications
           * @description List of detailed classification objects
           */
          classifications: {
              /**
               * Family
               * @description Indicates if the classification is family friendly
               * @default null
               */
              family: boolean | null;
              /**
               * ClassificationGenre
               * @description Genre details
               * @default null
               */
              genre: {
                  /**
                   * Id
                   * @description Genre ID
                   */
                  id: string;
                  /**
                   * Name
                   * @description Genre name
                   */
                  name: string;
              } | null;
              /**
               * Id
               * @description Classification ID
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Classification name
               * @default null
               */
              name: string | null;
              /**
               * ClassificationSegment
               * @description Segment details
               * @default null
               */
              segment: {
                  /**
                   * Id
                   * @description Segment ID
                   */
                  id: string;
                  /**
                   * Name
                   * @description Segment name
                   */
                  name: string;
              } | null;
              /**
               * ClassificationSubGenre
               * @description Sub-genre details
               * @default null
               */
              subGenre: {
                  /**
                   * Id
                   * @description Sub-genre ID
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Name
                   * @description Sub-genre name
                   * @default null
                   */
                  name: string | null;
              } | null;
              /**
               * ClassificationSubType
               * @description Sub-type details
               * @default null
               */
              subType: {
                  /**
                   * Id
                   * @description Sub-type ID
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Name
                   * @description Sub-type name
                   * @default null
                   */
                  name: string | null;
              } | null;
              /**
               * ClassificationType
               * @description Type details
               * @default null
               */
              type: {
                  /**
                   * Id
                   * @description Type ID
                   */
                  id: string;
                  /**
                   * Name
                   * @description Type name
                   */
                  name: string;
              } | null;
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
 * Type of TICKETMASTER's TICKETMASTER_GET_EVENTS tool input.
 */
type TICKETMASTER_GET_EVENTS_INPUT = {
  /**
   * Attraction Id
   * @description Attraction IDs (comma-separated)
   * @default null
   */
  attractionId: string | null;
  /**
   * City
   * @description City name to filter
   * @default null
   */
  city: string | null;
  /**
   * Classification Name
   * @description Classification name (music, sports, etc.)
   * @default null
   */
  classificationName: string | null;
  /**
   * Country Code
   * @description ISO 3166 country code
   * @default null
   */
  countryCode: string | null;
  /**
   * Dma Id
   * @description DMA (Designated Market Area) IDs (comma-separated)
   * @default null
   */
  dmaId: string | null;
  /**
   * End Date Time
   * @description End date-time in ISO-8601 format (e.g., 2024-12-31T23:59:59Z)
   * @default null
   */
  endDateTime: string | null;
  /**
   * Include Spellcheck
   * @description Include spellcheck suggestions
   * @default null
   */
  includeSpellcheck: boolean | null;
  /**
   * Keyword
   * @description Search events by keyword
   * @default null
   */
  keyword: string | null;
  /**
   * Latlong
   * @description Latitude and longitude, comma-separated (e.g., 34.15,-118.20)
   * @default null
   */
  latlong: string | null;
  /**
   * Locale
   * @description Locale in ISO format (e.g., en-us). Comma-separated list allowed
   * @default null
   */
  locale: string | null;
  /**
   * Page
   * @description Page number (0-based)
   * @default null
   */
  page: number | null;
  /**
   * Postal Code
   * @description Postal code to filter events
   * @default null
   */
  postalCode: string | null;
  /**
   * Radius
   * @description Radius around a geo point
   * @default null
   */
  radius: number | null;
  /**
   * Size
   * @description Page size (# of results, max 200)
   * @default null
   */
  size: number | null;
  /**
   * Sort
   * @description Sort order (e.g., date, name)
   * @default null
   */
  sort: string | null;
  /**
   * Start Date Time
   * @description Start date-time in ISO-8601 format (e.g., 2024-01-01T00:00:00Z)
   * @default null
   */
  startDateTime: string | null;
  /**
   * State Code
   * @description US state code (e.g., CA, NY)
   * @default null
   */
  stateCode: string | null;
  /**
   * Unit
   * @description Unit for radius (miles or km)
   * @default null
   * @enum {string|null}
   */
  unit: "miles" | "km" | null;
  /**
   * Venue Id
   * @description Venue IDs (comma-separated)
   * @default null
   */
  venueId: string | null;
};

/**
 * Type of TICKETMASTER's TICKETMASTER_GET_EVENTS tool output.
 */
type TICKETMASTER_GET_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * EmbeddedEvents
       * @description Embedded events list
       * @default null
       */
      _embedded: {
          /**
           * Events
           * @description List of events
           */
          events: {
              /**
               *  Embedded
               * @description Related attractions or venues
               * @default null
               */
              _embedded: {
                  [key: string]: unknown;
              } | null;
              /**
               * Classifications
               * @description Event classification details
               */
              classifications: {
                  [key: string]: unknown;
              }[];
              /**
               * Dates
               * @description Event dates information
               */
              dates: {
                  [key: string]: unknown;
              };
              /**
               * Id
               * @description Event identifier
               */
              id: string;
              /**
               * Images
               * @description List of event images
               */
              images: {
                  [key: string]: unknown;
              }[];
              /**
               * Locale
               * @description Event locale
               */
              locale: string;
              /**
               * Name
               * @description Event name
               */
              name: string;
              /**
               * Type
               * @description Event type
               */
              type: string;
              /**
               * Url
               * @description Event URL
               */
              url: string;
          }[];
      } | null;
      /**
       * Page
       * @description Pagination information
       */
      page: {
          /**
           * Number
           * @description Current page number
           */
          number: number;
          /**
           * Size
           * @description Number of items per page
           */
          size: number;
          /**
           * Total Elements
           * @description Total number of items
           */
          totalElements: number;
          /**
           * Total Pages
           * @description Total number of pages
           */
          totalPages: number;
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
 * Type of TICKETMASTER's TICKETMASTER_GET_EVENT_DETAILS tool input.
 */
type TICKETMASTER_GET_EVENT_DETAILS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the event to retrieve details for
   */
  id?: string;
};

/**
 * Type of TICKETMASTER's TICKETMASTER_GET_EVENT_DETAILS tool output.
 */
type TICKETMASTER_GET_EVENT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Embedded
       * @description Embedded related resources like venues and attractions
       */
      _embedded: {
          [key: string]: unknown;
      };
      /**
       *  Links
       * @description Hypermedia links for the event
       */
      _links: {
          [key: string]: {
              /**
               * Href
               * @description Link URL
               */
              href: string;
              /**
               * Templated
               * @description Whether the link is templated
               * @default null
               */
              templated: boolean | null;
          };
      };
      /**
       * Classifications
       * @description List of classification details
       */
      classifications?: {
          /**
           * Family
           * @description Whether this classification is family-friendly
           * @default null
           */
          family: boolean | null;
          /**
           * NameId
           * @description Genre classification
           * @default null
           */
          genre: {
              /**
               * Id
               * @description Unique identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Human-readable name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Primary
           * @description Whether this classification is primary
           * @default null
           */
          primary: boolean | null;
          /**
           * NameId
           * @description Segment classification
           * @default null
           */
          segment: {
              /**
               * Id
               * @description Unique identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Human-readable name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * NameId
           * @description Sub-genre classification
           * @default null
           */
          subGenre: {
              /**
               * Id
               * @description Unique identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Human-readable name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * NameId
           * @description Sub-type classification
           * @default null
           */
          subType: {
              /**
               * Id
               * @description Unique identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Human-readable name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * NameId
           * @description Type classification
           * @default null
           */
          type: {
              /**
               * Id
               * @description Unique identifier
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Human-readable name
               * @default null
               */
              name: string | null;
          } | null;
      }[];
      /**
       * Dates
       * @description Date and time details for the event
       * @default null
       */
      dates: {
          /**
           * Span Multiple Days
           * @description Indicates if the event spans multiple days
           * @default null
           */
          spanMultipleDays: boolean | null;
          /**
           * StartDate
           * @description Event start date details
           * @default null
           */
          start: {
              /**
               * Date Tba
               * @description Indicates if start date is to be announced
               * @default null
               */
              dateTBA: boolean | null;
              /**
               * Date Tbd
               * @description Indicates if start date is to be determined
               * @default null
               */
              dateTBD: boolean | null;
              /**
               * Date Time
               * @description Event start date-time in ISO-8601 format
               * @default null
               */
              dateTime: string | null;
              /**
               * Local Date
               * @description Event start local date in yyyy-MM-dd
               * @default null
               */
              localDate: string | null;
              /**
               * Local Time
               * @description Event start local time in HH:mm:ss
               * @default null
               */
              localTime: string | null;
              /**
               * Time Tba
               * @description Indicates if start time is to be announced
               * @default null
               */
              timeTBA: boolean | null;
          } | null;
          /**
           * Status
           * @description Event status details
           * @default null
           */
          status: {
              /**
               * Code
               * @description Event status code (e.g., onsale, canceled, postponed)
               * @default null
               */
              code: string | null;
          } | null;
          /**
           * Timezone
           * @description Timezone of the event
           * @default null
           */
          timezone: string | null;
      } | null;
      /**
       * Id
       * @description Unique identifier of the event
       * @default null
       */
      id: string | null;
      /**
       * Images
       * @description List of images for the event
       */
      images?: {
          /**
           * Fallback
           * @description Whether this is a fallback image
           * @default null
           */
          fallback: boolean | null;
          /**
           * Height
           * @description Height of the image in pixels
           * @default null
           */
          height: number | null;
          /**
           * Ratio
           * @description Image aspect ratio
           * @default null
           */
          ratio: string | null;
          /**
           * Url
           * @description URL of the image
           * @default null
           */
          url: string | null;
          /**
           * Width
           * @description Width of the image in pixels
           * @default null
           */
          width: number | null;
      }[];
      /**
       * Info
       * @description Additional info about the event
       * @default null
       */
      info: string | null;
      /**
       * Locale
       * @description Locale for the event details
       * @default null
       */
      locale: string | null;
      /**
       * Name
       * @description Name of the event
       * @default null
       */
      name: string | null;
      /**
       * Please Note
       * @description Important notes about the event
       * @default null
       */
      pleaseNote: string | null;
      /**
       * Price Ranges
       * @description Price range information
       */
      priceRanges?: {
          /**
           * Currency
           * @description Currency code in ISO-4217
           * @default null
           */
          currency: string | null;
          /**
           * Max
           * @description Maximum ticket price
           * @default null
           */
          max: number | null;
          /**
           * Min
           * @description Minimum ticket price
           * @default null
           */
          min: number | null;
          /**
           * Type
           * @description Price range type (e.g., standard)
           * @default null
           */
          type: string | null;
      }[];
      /**
       * Promoter
       * @description Promoter information for the event
       * @default null
       */
      promoter: {
          /**
           * Id
           * @description Promoter identifier
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description Promoter name
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * Sales
       * @description Ticket sales information
       * @default null
       */
      sales: {
          /**
           * Presales
           * @description List of presale ticket sales information
           */
          presales?: {
              /**
               * End Date Time
               * @description Presale end date-time in ISO-8601 format
               * @default null
               */
              endDateTime: string | null;
              /**
               * Name
               * @description Name of the presale group or offer
               * @default null
               */
              name: string | null;
              /**
               * Start Date Time
               * @description Presale start date-time in ISO-8601 format
               * @default null
               */
              startDateTime: string | null;
          }[];
          /**
           * SalesPublic
           * @description Public ticket sales information
           * @default null
           */
          public: {
              /**
               * End Date Time
               * @description Public sale end date-time in ISO-8601 format
               * @default null
               */
              endDateTime: string | null;
              /**
               * End Tbd
               * @description Indicates if public sale end is to be determined
               * @default null
               */
              endTBD: boolean | null;
              /**
               * Start Date Time
               * @description Public sale start date-time in ISO-8601 format
               * @default null
               */
              startDateTime: string | null;
              /**
               * Start Tba
               * @description Indicates if public sale start is to be announced
               * @default null
               */
              startTBA: boolean | null;
              /**
               * Start Tbd
               * @description Indicates if public sale start is to be determined
               * @default null
               */
              startTBD: boolean | null;
          } | null;
      } | null;
      /**
       * SeatMap
       * @description Seat map image information
       * @default null
       */
      seatmap: {
          /**
           * Static Url
           * @description URL of the seat map image
           * @default null
           */
          staticUrl: string | null;
      } | null;
      /**
       * Type
       * @description Type of the entity, typically 'event'
       * @default null
       */
      type: string | null;
      /**
       * Url
       * @description URL to the event's page on Ticketmaster
       * @default null
       */
      url: string | null;
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
 * Type of TICKETMASTER's TICKETMASTER_GET_GENRE_DETAILS tool input.
 */
type TICKETMASTER_GET_GENRE_DETAILS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the genre
   */
  id?: string;
};

/**
 * Type of TICKETMASTER's TICKETMASTER_GET_GENRE_DETAILS tool output.
 */
type TICKETMASTER_GET_GENRE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Hypermedia links for the resource
       */
      _links: {
          [key: string]: {
              /**
               * Href
               * @description Link URL
               */
              href: string;
              /**
               * Templated
               * @description Whether the link is templated
               * @default null
               */
              templated: boolean | null;
          };
      };
      /**
       * Id
       * @description Unique identifier of the genre
       */
      id: string;
      /**
       * Locale
       * @description Locale associated with the genre (e.g., en-us)
       * @default null
       */
      locale: string | null;
      /**
       * Name
       * @description Name of the genre
       */
      name: string;
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
 * Type of TICKETMASTER's TICKETMASTER_GET_SEGMENT_DETAILS tool input.
 */
type TICKETMASTER_GET_SEGMENT_DETAILS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the segment to retrieve details for
   */
  id?: string;
};

/**
 * Type of TICKETMASTER's TICKETMASTER_GET_SEGMENT_DETAILS tool output.
 */
type TICKETMASTER_GET_SEGMENT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Embedded
       * @description Embedded classification resources for the segment
       */
      _embedded: {
          /**
           * Classifications
           * @description List of classification details
           */
          classifications: {
              /**
               * Family
               * @description Indicates if the classification is family friendly
               * @default null
               */
              family: boolean | null;
              /**
               * ClassificationGenre
               * @description Genre details
               * @default null
               */
              genre: {
                  /**
                   * Id
                   * @description Genre ID
                   */
                  id: string;
                  /**
                   * Name
                   * @description Genre name
                   */
                  name: string;
              } | null;
              /**
               * Id
               * @description Classification ID
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Classification name
               * @default null
               */
              name: string | null;
              /**
               * ClassificationSegment
               * @description Segment details
               * @default null
               */
              segment: {
                  /**
                   * Id
                   * @description Segment ID
                   */
                  id: string;
                  /**
                   * Name
                   * @description Segment name
                   */
                  name: string;
              } | null;
              /**
               * ClassificationSubGenre
               * @description Sub-genre details
               * @default null
               */
              subGenre: {
                  /**
                   * Id
                   * @description Sub-genre ID
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Name
                   * @description Sub-genre name
                   * @default null
                   */
                  name: string | null;
              } | null;
              /**
               * ClassificationSubType
               * @description Sub-type details
               * @default null
               */
              subType: {
                  /**
                   * Id
                   * @description Sub-type ID
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Name
                   * @description Sub-type name
                   * @default null
                   */
                  name: string | null;
              } | null;
              /**
               * ClassificationType
               * @description Type details
               * @default null
               */
              type: {
                  /**
                   * Id
                   * @description Type ID
                   */
                  id: string;
                  /**
                   * Name
                   * @description Type name
                   */
                  name: string;
              } | null;
          }[];
      };
      /**
       *  Links
       * @description Hypermedia links for the segment
       */
      _links: {
          [key: string]: {
              /**
               * Href
               * @description Link URL
               */
              href: string;
              /**
               * Templated
               * @description Whether the link is templated
               * @default null
               */
              templated: boolean | null;
          };
      };
      /**
       * Id
       * @description Unique identifier of the segment
       * @default null
       */
      id: string | null;
      /**
       * Locale
       * @description Locale for the segment
       * @default null
       */
      locale: string | null;
      /**
       * Name
       * @description Name of the segment
       * @default null
       */
      name: string | null;
      /**
       * Test
       * @description Indicates if this is a test segment
       * @default null
       */
      test: boolean | null;
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
 * Type of TICKETMASTER's TICKETMASTER_GET_SUBGENRE_DETAILS tool input.
 */
type TICKETMASTER_GET_SUBGENRE_DETAILS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the subgenre to retrieve
   */
  id?: string;
  /**
   * Locale
   * @description Locale in which to return results (e.g., en-us)
   * @default null
   */
  locale: string | null;
};

/**
 * Type of TICKETMASTER's TICKETMASTER_GET_SUBGENRE_DETAILS tool output.
 */
type TICKETMASTER_GET_SUBGENRE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Hypermedia links related to this subgenre
       */
      _links: {
          [key: string]: {
              /**
               * Href
               * @description URL of the link
               */
              href: string;
              /**
               * Templated
               * @description Whether the link is templated
               * @default null
               */
              templated: boolean | null;
          };
      };
      /**
       * Id
       * @description Subgenre ID
       * @default null
       */
      id: string | null;
      /**
       * Locale
       * @description Locale of the record
       * @default null
       */
      locale: string | null;
      /**
       * Name
       * @description Subgenre name
       * @default null
       */
      name: string | null;
      /**
       * ParentGenre
       * @description Details of the parent genre
       * @default null
       */
      parentGenre: {
          /**
           * Id
           * @description Parent genre ID
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description Parent genre name
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
 * Type of TICKETMASTER's TICKETMASTER_GET_SUGGESTIONS tool input.
 */
type TICKETMASTER_GET_SUGGESTIONS_INPUT = {
  /**
   * Country Code
   * @description Two-letter ISO country code to filter suggestions
   * @default null
   */
  countryCode: string | null;
  /**
   * Keyword
   * @description Partial search term for suggestions (e.g., 'rock')
   * @default null
   */
  keyword: string | null;
};

/**
 * Type of TICKETMASTER's TICKETMASTER_GET_SUGGESTIONS tool output.
 */
type TICKETMASTER_GET_SUGGESTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * EmbeddedSuggestions
       * @description Embedded suggestion results
       * @default null
       */
      _embedded: {
          /**
           * Attractions
           * @description List of attraction suggestions
           * @default null
           */
          attractions: {
              /**
               * Id
               * @description Attraction identifier
               */
              id: string;
              /**
               * Locale
               * @description Locale of the attraction
               * @default null
               */
              locale: string | null;
              /**
               * Name
               * @description Attraction name
               */
              name: string;
              /**
               * Type
               * @description Resource type, should be 'attraction'
               */
              type: string;
              /**
               * Url
               * @description URL for the attraction
               * @default null
               */
              url: string | null;
          }[] | null;
          /**
           * Events
           * @description List of event suggestions
           * @default null
           */
          events: {
              /**
               * Id
               * @description Event identifier
               */
              id: string;
              /**
               * Locale
               * @description Locale of the event
               * @default null
               */
              locale: string | null;
              /**
               * Name
               * @description Event name
               */
              name: string;
              /**
               * Type
               * @description Resource type, should be 'event'
               */
              type: string;
              /**
               * Url
               * @description URL for the event
               * @default null
               */
              url: string | null;
          }[] | null;
          /**
           * Venues
           * @description List of venue suggestions
           * @default null
           */
          venues: {
              /**
               * Id
               * @description Venue identifier
               */
              id: string;
              /**
               * Locale
               * @description Locale of the venue
               * @default null
               */
              locale: string | null;
              /**
               * Name
               * @description Venue name
               */
              name: string;
              /**
               * Type
               * @description Resource type, should be 'venue'
               */
              type: string;
              /**
               * Url
               * @description URL for the venue
               * @default null
               */
              url: string | null;
          }[] | null;
      } | null;
      /**
       * Links
       * @description Navigation links
       * @default null
       */
      _links: {
          /**
           * Link
           * @description Link to next page
           * @default null
           */
          next: {
              /**
               * Href
               * @description Link URL
               */
              href: string;
          } | null;
          /**
           * Link
           * @description Link to previous page
           * @default null
           */
          prev: {
              /**
               * Href
               * @description Link URL
               */
              href: string;
          } | null;
          /**
           * Self
           * @description Link to current resource
           */
          self: {
              /**
               * Href
               * @description Link URL
               */
              href: string;
          };
      } | null;
      /**
       * Page
       * @description Pagination information
       */
      page: {
          /**
           * Number
           * @description Current page number
           */
          number: number;
          /**
           * Size
           * @description Number of items per page
           */
          size: number;
          /**
           * Total Elements
           * @description Total number of items
           */
          totalElements: number;
          /**
           * Total Pages
           * @description Total number of pages
           */
          totalPages: number;
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
 * Type of TICKETMASTER's TICKETMASTER_GET_VENUES tool input.
 */
type TICKETMASTER_GET_VENUES_INPUT = {
  /**
   * City
   * @description Filter by city name
   * @default null
   */
  city: string | null;
  /**
   * Country Code
   * @description Filter by 2-letter country code
   * @default null
   */
  countryCode: string | null;
  /**
   * Dma Id
   * @description Filter by DMA ID or comma-separated list of IDs
   * @default null
   */
  dmaId: string | null;
  /**
   * Id
   * @description Venue ID or comma-separated list of IDs
   * @default null
   */
  id: string | null;
  /**
   * Keyword
   * @description Search by venue keyword
   * @default null
   */
  keyword: string | null;
  /**
   * Latlong
   * @description Latitude and longitude in format 'lat,long'
   * @default null
   */
  latlong: string | null;
  /**
   * Page
   * @description Page number (default 0)
   * @default 0
   */
  page: number | null;
  /**
   * Postal Code
   * @description Filter by postal code (max length 16)
   * @default null
   */
  postalCode: string | null;
  /**
   * Radius
   * @description Search radius in miles
   * @default null
   */
  radius: number | null;
  /**
   * Size
   * @description Number of results per page (default 20, max 200)
   * @default 20
   */
  size: number | null;
  /**
   * Sort
   * @description Sort order, e.g., 'name' or 'name,desc'
   * @default null
   */
  sort: string | null;
  /**
   * State Code
   * @description Filter by state code
   * @default null
   */
  stateCode: string | null;
};

/**
 * Type of TICKETMASTER's TICKETMASTER_GET_VENUES tool output.
 */
type TICKETMASTER_GET_VENUES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Embedded
       * @description Embedded venues response
       * @default null
       */
      _embedded: {
          /**
           * Venues
           * @description List of venues
           */
          venues: {
              /**
               * Address
               * @description Address information
               * @default null
               */
              address: {
                  /**
                   * Line1
                   * @description Street address line 1
                   * @default null
                   */
                  line1: string | null;
                  /**
                   * Line2
                   * @description Street address line 2
                   * @default null
                   */
                  line2: string | null;
                  /**
                   * Line3
                   * @description Street address line 3
                   * @default null
                   */
                  line3: string | null;
              } | null;
              /**
               * City
               * @description City information
               * @default null
               */
              city: {
                  /**
                   * Id
                   * @description City identifier
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Name
                   * @description City name
                   */
                  name: string;
              } | null;
              /**
               * Country
               * @description Country information
               * @default null
               */
              country: {
                  /**
                   * Country Code
                   * @description Country code
                   * @default null
                   */
                  countryCode: string | null;
                  /**
                   * Name
                   * @description Country name
                   */
                  name: string;
              } | null;
              /**
               * Dmas
               * @description Associated DMAs
               * @default null
               */
              dmas: {
                  /**
                   * Id
                   * @description DMA identifier
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Name
                   * @description DMA name
                   * @default null
                   */
                  name: string | null;
              }[] | null;
              /**
               * Id
               * @description Venue identifier
               */
              id: string;
              /**
               * Locale
               * @description Locale of venue details
               * @default null
               */
              locale: string | null;
              /**
               * Location
               * @description Geolocation information
               * @default null
               */
              location: {
                  /**
                   * Latitude
                   * @description Latitude of the venue
                   */
                  latitude: string;
                  /**
                   * Longitude
                   * @description Longitude of the venue
                   */
                  longitude: string;
              } | null;
              /**
               * Markets
               * @description Associated markets
               * @default null
               */
              markets: {
                  /**
                   * Id
                   * @description Market identifier
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Name
                   * @description Market name
                   * @default null
                   */
                  name: string | null;
              }[] | null;
              /**
               * Name
               * @description Venue name
               */
              name: string;
              /**
               * Postal Code
               * @description Postal code of venue
               * @default null
               */
              postalCode: string | null;
              /**
               * State
               * @description State information
               * @default null
               */
              state: {
                  /**
                   * Name
                   * @description State name
                   */
                  name: string;
                  /**
                   * State Code
                   * @description State code
                   * @default null
                   */
                  stateCode: string | null;
              } | null;
              /**
               * Test
               * @description Test mode flag
               * @default null
               */
              test: boolean | null;
              /**
               * Timezone
               * @description Venue timezone
               * @default null
               */
              timezone: string | null;
              /**
               * Type
               * @description Venue type
               * @default null
               */
              type: string | null;
              /**
               * Url
               * @description URL to venue details
               * @default null
               */
              url: string | null;
          }[];
      } | null;
      /**
       * Links
       * @description Navigation links
       * @default null
       */
      _links: {
          /**
           * Link
           * @description Link to next page
           * @default null
           */
          next: {
              /**
               * Href
               * @description Link URL
               */
              href: string;
          } | null;
          /**
           * Link
           * @description Link to previous page
           * @default null
           */
          prev: {
              /**
               * Href
               * @description Link URL
               */
              href: string;
          } | null;
          /**
           * Self
           * @description Link to current resource
           */
          self: {
              /**
               * Href
               * @description Link URL
               */
              href: string;
          };
      } | null;
      /**
       * Page
       * @description Pagination details
       * @default null
       */
      page: {
          /**
           * Number
           * @description Current page number
           */
          number: number;
          /**
           * Size
           * @description Number of items per page
           */
          size: number;
          /**
           * Total Elements
           * @description Total number of items
           */
          totalElements: number;
          /**
           * Total Pages
           * @description Total pages available
           */
          totalPages: number;
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
 * Type of TICKETMASTER's TICKETMASTER_GET_VENUE_DETAILS tool input.
 */
type TICKETMASTER_GET_VENUE_DETAILS_INPUT = {
  /**
   * Id
   * @description Unique identifier of the venue to retrieve details for
   */
  id?: string;
};

/**
 * Type of TICKETMASTER's TICKETMASTER_GET_VENUE_DETAILS tool output.
 */
type TICKETMASTER_GET_VENUE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Embedded
       * @description Embedded related resources
       * @default null
       */
      _embedded: {
          [key: string]: unknown;
      } | null;
      /**
       *  Links
       * @description Hypermedia links for the venue
       */
      _links: {
          /**
           * Self
           * @description Link to this resource
           */
          self: {
              /**
               * Href
               * @description Link URL
               */
              href: string;
              /**
               * Templated
               * @description Whether the link is templated
               * @default null
               */
              templated: boolean | null;
          };
      };
      /**
       * Accessible Seating Detail
       * @description Accessible seating information
       * @default null
       */
      accessibleSeatingDetail: string | null;
      /**
       * Address
       * @description Address information for the venue
       * @default null
       */
      address: {
          /**
           * Line1
           * @description Street address line 1
           * @default null
           */
          line1: string | null;
          /**
           * Line2
           * @description Street address line 2
           * @default null
           */
          line2: string | null;
          /**
           * Line3
           * @description Street address line 3
           * @default null
           */
          line3: string | null;
      } | null;
      /**
       * BoxOfficeInfo
       * @description Box office information for the venue
       * @default null
       */
      boxOfficeInfo: {
          /**
           * Accepted Payment Detail
           * @description Accepted payment types at box office
           * @default null
           */
          acceptedPaymentDetail: string | null;
          /**
           * Open Hours Detail
           * @description Detailed box office open hours
           * @default null
           */
          openHoursDetail: string | null;
          /**
           * Phone Number Detail
           * @description Detailed box office phone number
           * @default null
           */
          phoneNumberDetail: string | null;
          /**
           * Will Call Detail
           * @description Details about will call pickup
           * @default null
           */
          willCallDetail: string | null;
      } | null;
      /**
       * City
       * @description City information for the venue
       * @default null
       */
      city: {
          /**
           * Id
           * @description City identifier
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description City name
           */
          name: string | null;
      } | null;
      /**
       * Country
       * @description Country information for the venue
       * @default null
       */
      country: {
          /**
           * Country Code
           * @description Country code
           * @default null
           */
          countryCode: string | null;
          /**
           * Name
           * @description Country name
           */
          name: string;
      } | null;
      /**
       * Dmas
       * @description Associated DMAs
       * @default null
       */
      dmas: {
          /**
           * Id
           * @description DMA identifier
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description DMA name
           * @default null
           */
          name: string | null;
      }[] | null;
      /**
       * Id
       * @description Unique identifier of the venue
       * @default null
       */
      id: string | null;
      /**
       * Locale
       * @description Locale for the venue details
       * @default null
       */
      locale: string | null;
      /**
       * Location
       * @description Geolocation information for the venue
       * @default null
       */
      location: {
          /**
           * Latitude
           * @description Latitude of the venue
           */
          latitude: string;
          /**
           * Longitude
           * @description Longitude of the venue
           */
          longitude: string;
      } | null;
      /**
       * Markets
       * @description Associated markets
       * @default null
       */
      markets: {
          /**
           * Id
           * @description Market identifier
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description Market name
           * @default null
           */
          name: string | null;
      }[] | null;
      /**
       * Name
       * @description Name of the venue
       * @default null
       */
      name: string | null;
      /**
       * Parking Detail
       * @description Parking information for the venue
       * @default null
       */
      parkingDetail: string | null;
      /**
       * Postal Code
       * @description Postal code of the venue
       * @default null
       */
      postalCode: string | null;
      /**
       * State
       * @description State information for the venue
       * @default null
       */
      state: {
          /**
           * Name
           * @description State name
           */
          name: string;
          /**
           * State Code
           * @description State code
           * @default null
           */
          stateCode: string | null;
      } | null;
      /**
       * Test
       * @description Test mode flag
       * @default null
       */
      test: boolean | null;
      /**
       * Timezone
       * @description Timezone of the venue
       * @default null
       */
      timezone: string | null;
      /**
       * Type
       * @description Type of the entity, typically 'venue'
       * @default null
       */
      type: string | null;
      /**
       * Url
       * @description URL to the venue's page on Ticketmaster
       * @default null
       */
      url: string | null;
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
 * Type map of all available tool input types for toolkit "TICKETMASTER".
 */
export type TICKETMASTER_TOOL_INPUTS = {
  GET_ATTRACTIONS: TICKETMASTER_GET_ATTRACTIONS_INPUT
  GET_ATTRACTION_DETAILS: TICKETMASTER_GET_ATTRACTION_DETAILS_INPUT
  GET_CLASSIFICATIONS: TICKETMASTER_GET_CLASSIFICATIONS_INPUT
  GET_CLASSIFICATION_DETAILS: TICKETMASTER_GET_CLASSIFICATION_DETAILS_INPUT
  GET_EVENTS: TICKETMASTER_GET_EVENTS_INPUT
  GET_EVENT_DETAILS: TICKETMASTER_GET_EVENT_DETAILS_INPUT
  GET_GENRE_DETAILS: TICKETMASTER_GET_GENRE_DETAILS_INPUT
  GET_SEGMENT_DETAILS: TICKETMASTER_GET_SEGMENT_DETAILS_INPUT
  GET_SUBGENRE_DETAILS: TICKETMASTER_GET_SUBGENRE_DETAILS_INPUT
  GET_SUGGESTIONS: TICKETMASTER_GET_SUGGESTIONS_INPUT
  GET_VENUES: TICKETMASTER_GET_VENUES_INPUT
  GET_VENUE_DETAILS: TICKETMASTER_GET_VENUE_DETAILS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "TICKETMASTER".
 */
export type TICKETMASTER_TOOL_OUTPUTS = {
  GET_ATTRACTIONS: TICKETMASTER_GET_ATTRACTIONS_OUTPUT
  GET_ATTRACTION_DETAILS: TICKETMASTER_GET_ATTRACTION_DETAILS_OUTPUT
  GET_CLASSIFICATIONS: TICKETMASTER_GET_CLASSIFICATIONS_OUTPUT
  GET_CLASSIFICATION_DETAILS: TICKETMASTER_GET_CLASSIFICATION_DETAILS_OUTPUT
  GET_EVENTS: TICKETMASTER_GET_EVENTS_OUTPUT
  GET_EVENT_DETAILS: TICKETMASTER_GET_EVENT_DETAILS_OUTPUT
  GET_GENRE_DETAILS: TICKETMASTER_GET_GENRE_DETAILS_OUTPUT
  GET_SEGMENT_DETAILS: TICKETMASTER_GET_SEGMENT_DETAILS_OUTPUT
  GET_SUBGENRE_DETAILS: TICKETMASTER_GET_SUBGENRE_DETAILS_OUTPUT
  GET_SUGGESTIONS: TICKETMASTER_GET_SUGGESTIONS_OUTPUT
  GET_VENUES: TICKETMASTER_GET_VENUES_OUTPUT
  GET_VENUE_DETAILS: TICKETMASTER_GET_VENUE_DETAILS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's TICKETMASTER toolkit.
 */
export const TICKETMASTER = {
  slug: "ticketmaster",
  tools: {
    /**
     * Tool to retrieve a list of attractions. use when you need to search for artists, teams, or performers by various criteria such as keyword, classification, or country.
     */
    GET_ATTRACTIONS: "TICKETMASTER_GET_ATTRACTIONS",
    /**
     * Tool to retrieve detailed information about a specific attraction by id. use when you have an attraction id and need full details.
     */
    GET_ATTRACTION_DETAILS: "TICKETMASTER_GET_ATTRACTION_DETAILS",
    /**
     * Tool to retrieve all event classifications. use when categorizing events before searching.
     */
    GET_CLASSIFICATIONS: "TICKETMASTER_GET_CLASSIFICATIONS",
    /**
     * Tool to retrieve detailed information about a specific classification. use after obtaining a classification id.
     */
    GET_CLASSIFICATION_DETAILS: "TICKETMASTER_GET_CLASSIFICATION_DETAILS",
    /**
     * Tool to retrieve a list of events matching specified filters. use when you need to search events by keyword, location, date range, or classification.
     */
    GET_EVENTS: "TICKETMASTER_GET_EVENTS",
    /**
     * Tool to retrieve detailed information about a specific event by id. use when you have an event's unique identifier and need its full details.
     */
    GET_EVENT_DETAILS: "TICKETMASTER_GET_EVENT_DETAILS",
    /**
     * Tool to retrieve detailed information about a specific genre. use when you need metadata for a single genre before filtering events by genre.
     */
    GET_GENRE_DETAILS: "TICKETMASTER_GET_GENRE_DETAILS",
    /**
     * Tool to retrieve detailed information about a specific segment. use after obtaining a segment id.
     */
    GET_SEGMENT_DETAILS: "TICKETMASTER_GET_SEGMENT_DETAILS",
    /**
     * Tool to retrieve detailed information about a specific subgenre. use when you have a subgenre id and need its details.
     */
    GET_SUBGENRE_DETAILS: "TICKETMASTER_GET_SUBGENRE_DETAILS",
    /**
     * Tool to retrieve auto-complete suggestions for search queries. use when you have a partial keyword and want to get matching attractions, venues, or events.
     */
    GET_SUGGESTIONS: "TICKETMASTER_GET_SUGGESTIONS",
    /**
     * Tool to retrieve a list of venues based on specified criteria. use when you need venue details by name, location, or id.
     */
    GET_VENUES: "TICKETMASTER_GET_VENUES",
    /**
     * Tool to retrieve detailed information about a specific venue by id. use when you have a venue's unique identifier and need its full details.
     */
    GET_VENUE_DETAILS: "TICKETMASTER_GET_VENUE_DETAILS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "TICKETMASTER".
 */
export type TICKETMASTER_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "TICKETMASTER".
 */
export type TICKETMASTER_TRIGGER_EVENTS = {}
