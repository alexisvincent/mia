// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ZENSERP's ZENSERP_BING_SEARCH tool input.
 */
type ZENSERP_BING_SEARCH_INPUT = {
  /**
   * Cc
   * @description Two-letter country code (ISO 3166), e.g. 'US'
   * @default null
   */
  cc: string | null;
  /**
   * Count
   * @description Number of results to return (1-50)
   * @default null
   */
  count: number | null;
  /**
   * First
   * @description Zero-based offset for pagination (skip this many results)
   * @default null
   */
  first: number | null;
  /**
   * Lat
   * @description Latitude for geolocation override, e.g. '40.7128'
   * @default null
   */
  lat: string | null;
  /**
   * Location
   * @description Canonical geolocation, e.g. 'New York,New York,United States'
   * @default null
   */
  location: string | null;
  /**
   * Lon
   * @description Longitude for geolocation override, e.g. '-74.0060'
   * @default null
   */
  lon: string | null;
  /**
   * Mkt
   * @description Market code that the request is coming from, per Bing market codes
   * @default null
   */
  mkt: string | null;
  /**
   * Q
   * @description Search query; supports Bing operators
   */
  q?: string;
  /**
   * Search Engine
   * @description Must be 'bing.com' to target Bing search
   * @default bing.com
   * @constant
   */
  search_engine: "bing.com";
};

/**
 * Type of ZENSERP's ZENSERP_BING_SEARCH tool output.
 */
type ZENSERP_BING_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Images
       * @description Image search results
       * @default null
       */
      images: {
          /**
           * Image
           * @description Image thumbnail (data URI or URL)
           */
          image: string;
          /**
           * Link
           * @description URL to the image page
           */
          link: string;
      }[] | null;
      /**
       * Organic
       * @description Organic search results
       * @default null
       */
      organic: {
          /**
           * Description
           * @description Snippet of the result description
           * @default null
           */
          description: string | null;
          /**
           * Display Link
           * @description Displayed URL of the result
           */
          display_link: string;
          /**
           * Link
           * @description Result URL
           */
          link: string;
          /**
           * Title
           * @description Title of the result
           */
          title: string;
      }[] | null;
      /**
       * Related
       * @description Related search suggestions
       * @default null
       */
      related: {
          /**
           * Link
           * @description Related search URL
           */
          link: string;
          /**
           * Text
           * @description Related search text
           */
          text: string;
      }[] | null;
      /**
       * Videos
       * @description Video search results
       * @default null
       */
      videos: {
          /**
           * Date
           * @description Publish date or relative time
           */
          date: string;
          /**
           * Duration
           * @description Video duration string, e.g. '6:55'
           */
          duration: string;
          /**
           * Duration Sec
           * @description Duration in seconds
           */
          duration_sec: number;
          /**
           * Image
           * @description Video thumbnail URL
           */
          image: string;
          /**
           * Link
           * @description URL to the video
           */
          link: string;
          /**
           * Source
           * @description Video source/channel
           */
          source: string;
          /**
           * Title
           * @description Video title
           */
          title: string;
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
 * Type of ZENSERP's ZENSERP_GOOGLE_NEWS_SEARCH tool input.
 */
type ZENSERP_GOOGLE_NEWS_SEARCH_INPUT = {
  /**
   * Device
   * @description Device to emulate: 'desktop' or 'mobile'.
   * @default null
   * @enum {string|null}
   */
  device: "desktop" | "mobile" | null;
  /**
   * Gl
   * @description Country code (ISO 3166-1 alpha-2), e.g., 'us'.
   * @default null
   */
  gl: string | null;
  /**
   * Hl
   * @description Interface language code (ISO 639-1), e.g., 'en'.
   * @default null
   */
  hl: string | null;
  /**
   * Location
   * @description Geolocation for the query, e.g., 'New York,New York,United States'.
   * @default null
   */
  location: string | null;
  /**
   * Num
   * @description Number of news results to return (1-100).
   * @default null
   */
  num: number | null;
  /**
   * Q
   * @description Keyword to search news for; supports Google search operators.
   */
  q?: string;
  /**
   * Start
   * @description Result offset for pagination (use with num for pages).
   * @default null
   */
  start: number | null;
  /**
   * Timeframe
   * @description Restrict results by timeframe, e.g., 'now 1-d', 'today 5-y'.
   * @default null
   * @enum {string|null}
   */
  timeframe: "now 1-H" | "now 4-H" | "now 1-d" | "now 7-d" | "today 1-m" | "today 3-m" | "today 12-m" | "today 5-y" | null;
};

/**
 * Type of ZENSERP's ZENSERP_GOOGLE_NEWS_SEARCH tool output.
 */
type ZENSERP_GOOGLE_NEWS_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Html
       * @description Raw HTML of results if output=html.
       * @default null
       */
      html: string | null;
      /**
       * Knowledge Graph
       * @description Knowledge graph results, if available.
       * @default null
       */
      knowledge_graph: {
          /**
           * Description
           * @description Knowledge graph description.
           * @default null
           */
          description: string | null;
          /**
           * Downwards
           * @description List of additional related items.
           * @default null
           */
          downwards: {
              /**
               * Image
               * @description Data URI or image link.
               */
              image: string;
              /**
               * Link
               * @description Related item search link.
               */
              link: string;
              /**
               * Name
               * @description Related item name.
               */
              name: string;
          }[] | null;
          /**
           * Image
           * @description Knowledge graph image URL or data URI.
           * @default null
           */
          image: string | null;
          /**
           * Shared Abilities
           * @description Abilities info.
           * @default null
           */
          shared_abilities: string | null;
          /**
           * Shared Category
           * @description Category info.
           * @default null
           */
          shared_category: string | null;
          /**
           * Shared Evolves From
           * @description Evolution source.
           * @default null
           */
          shared_evolves_from: string | null;
          /**
           * Shared Evolves To
           * @description Evolution target.
           * @default null
           */
          shared_evolves_to: string | null;
          /**
           * Shared Height
           * @description Shared height info.
           * @default null
           */
          shared_height: string | null;
          /**
           * Shared Weakness
           * @description Weakness info.
           * @default null
           */
          shared_weakness: string | null;
          /**
           * Shared Weight
           * @description Shared weight info.
           * @default null
           */
          shared_weight: string | null;
          /**
           * Subtitle
           * @description Knowledge graph subtitle.
           * @default null
           */
          subtitle: string | null;
          /**
           * Title
           * @description Knowledge graph title.
           */
          title: string;
      }[] | null;
      /**
       * Number Of Results
       * @description Total number of search results.
       * @default null
       */
      number_of_results: number | null;
      /**
       * Organic
       * @description Organic news search results.
       * @default null
       */
      organic: {
          /**
           * Description
           * @description Snippet description.
           * @default null
           */
          description: string | null;
          /**
           * Destination
           * @description Breadcrumb or destination path.
           * @default null
           */
          destination: string | null;
          /**
           * Is Amp
           * @description Whether AMP page.
           * @default null
           */
          isAmp: boolean | null;
          /**
           * Position
           * @description Position in organic results ranking.
           */
          position: number;
          /**
           * Title
           * @description Result title.
           */
          title: string;
          /**
           * Url
           * @description Result URL.
           */
          url: string;
      }[] | null;
      /**
       * Pagination
       * @description Pagination metadata.
       * @default null
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           * @default null
           */
          current_page: number | null;
          /**
           * Next Page
           * @description Next page offset.
           * @default null
           */
          next_page: number | null;
          /**
           * Pages
           * @description List of page offsets available.
           */
          pages: number[];
          /**
           * Previous Page
           * @description Previous page offset.
           * @default null
           */
          previous_page: number | null;
      } | null;
      /**
       * Query
       * @description Echo of the query parameters.
       */
      query: {
          /**
           * Apikey
           * @description API key used for the request.
           * @default null
           */
          apikey: string | null;
          /**
           * Q
           * @description Original query string.
           */
          q: string;
          /**
           * Url
           * @description Internal Google search URL generated.
           */
          url: string;
      };
      /**
       * Related Searches
       * @description Related search suggestions.
       * @default null
       */
      related_searches: {
          /**
           * Title
           * @description Related search query.
           */
          title: string;
          /**
           * Url
           * @description URL for related search.
           */
          url: string;
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
 * Type of ZENSERP's ZENSERP_GOOGLE_REVERSE_IMAGE_SEARCH tool input.
 */
type ZENSERP_GOOGLE_REVERSE_IMAGE_SEARCH_INPUT = {
  /**
   * Image Url
   * @description Public URL of the image to reverse search.
   */
  image_url?: string;
  /**
   * Num
   * @description Number of results to return (1-100).
   * @default 10
   */
  num: number | null;
  /**
   * Start
   * @description Zero-based offset for pagination.
   * @default 0
   */
  start: number | null;
};

/**
 * Type of ZENSERP's ZENSERP_GOOGLE_REVERSE_IMAGE_SEARCH tool output.
 */
type ZENSERP_GOOGLE_REVERSE_IMAGE_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reverse Image Results
       * @description Container for reverse image search results.
       */
      reverse_image_results: {
          /**
           * Organic
           * @description List of organic reverse image search results.
           */
          organic: {
              /**
               * Description
               * @description Description snippet of the result.
               * @default null
               */
              description: string | null;
              /**
               * Destination
               * @description Readable destination of the result.
               * @default null
               */
              destination: string | null;
              /**
               * Is Amp
               * @description Whether the result is an AMP page.
               */
              isAmp: boolean;
              /**
               * Title
               * @description Title of the result page.
               */
              title: string;
              /**
               * Url
               * @description URL of the result page.
               */
              url: string;
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
 * Type of ZENSERP's ZENSERP_GOOGLE_SHOPPING_SEARCH tool input.
 */
type ZENSERP_GOOGLE_SHOPPING_SEARCH_INPUT = {
  /**
   * Device
   * @description Device type to emulate ('desktop' or 'mobile').
   * @default null
   * @enum {string|null}
   */
  device: "desktop" | "mobile" | null;
  /**
   * Gl
   * @description Country code for geolocation override (e.g. 'US').
   * @default null
   */
  gl: string | null;
  /**
   * Hl
   * @description Interface language code override (e.g. 'en').
   * @default null
   */
  hl: string | null;
  /**
   * Lat
   * @description Latitude for precise geotargeting.
   * @default null
   */
  lat: number | null;
  /**
   * Lng
   * @description Longitude for precise geotargeting.
   * @default null
   */
  lng: number | null;
  /**
   * Location
   * @description Geolocation for results. Use Google’s canonical names. E.g. 'Manhattan, New York, United States' for accurate local scraping.
   * @default null
   */
  location: string | null;
  /**
   * Lr
   * @description Language filter. Prefix with 'lang_' (e.g. 'lang_fr').
   * @default null
   */
  lr: string | null;
  /**
   * Num
   * @description Number of results to return (1-100). Default mimics human SERP (10).
   * @default null
   */
  num: number | null;
  /**
   * Output
   * @description Output format: 'html' for raw markup or 'csv' for CSV export.
   * @default null
   * @enum {string|null}
   */
  output: "html" | "csv" | null;
  /**
   * Q
   * @description Search query keywords. Operators allowed (e.g. 'site:example.com headphones').
   */
  q?: string;
  /**
   * Search Engine
   * @description Override search engine domain (e.g. 'google.com').
   * @default null
   */
  search_engine: string | null;
  /**
   * Start
   * @description Result offset for pagination. Use with `num` to fetch subsequent pages.
   * @default null
   */
  start: number | null;
  /**
   * Timeframe
   * @description Timeframe filter. E.g., 'now 1-H' for past hour, 'today 12-m' for past year.
   * @default null
   * @enum {string|null}
   */
  timeframe: "now 1-H" | "now 4-H" | "now 1-d" | "now 7-d" | "today 1-m" | "today 3-m" | "today 12-m" | "today 5-y" | null;
};

/**
 * Type of ZENSERP's ZENSERP_GOOGLE_SHOPPING_SEARCH tool output.
 */
type ZENSERP_GOOGLE_SHOPPING_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Shopping Results
       * @description List of shopping search results.
       */
      shopping_results: {
          /**
           * Description
           * @description Short description or snippet.
           * @default null
           */
          description: string | null;
          /**
           * Extensions
           * @description Any extension flags or badges.
           */
          extensions?: string[];
          /**
           * Link
           * @description URL or relative link to product detail.
           */
          link: string;
          /**
           * Price
           * @description Raw price string (e.g. '$19.99').
           * @default null
           */
          price: string | null;
          /**
           * PriceParsed
           * @description Structured price details.
           * @default null
           */
          price_parsed: {
              /**
               * Currency
               * @description Currency code of parsed price.
               */
              currency: string;
              /**
               * Value
               * @description Numeric value of parsed price.
               */
              value: number;
          } | null;
          /**
           * Product Id
           * @description Unique product identifier from Google Shopping.
           */
          product_id: string;
          /**
           * Reviews
           * @description Number of reviews (if available).
           * @default null
           */
          reviews: number | null;
          /**
           * Source
           * @description Merchant or source name.
           * @default null
           */
          source: string | null;
          /**
           * Stars
           * @description Star rating (if available).
           * @default null
           */
          stars: number | null;
          /**
           * Thumbnail
           * @description Base64 or URL of thumbnail image.
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Product title.
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
 * Type of ZENSERP's ZENSERP_GOOGLE_TRENDS tool input.
 */
type ZENSERP_GOOGLE_TRENDS_INPUT = {
  /**
   * Cat
   * @description Category filter code (optional). Use numeric codes defined by Google Trends.
   * @default null
   */
  cat: string | null;
  /**
   * Geo
   * @description Geographic location code (optional), e.g., 'US'.
   * @default null
   */
  geo: string | null;
  /**
   * Hl
   * @description Interface language code (optional), e.g., 'en'.
   * @default null
   */
  hl: string | null;
  /**
   * Keyword[]
   * @description Keywords to compare in Google Trends. Provide as array 'keyword[]'.
   */
  "keyword[]"?: string[];
  /**
   * Timeframe
   * @description Timeframe for trends data (optional).
   * @default null
   * @enum {string|null}
   */
  timeframe: "now 1-H" | "now 4-H" | "now 1-d" | "now 7-d" | "today 1-m" | "today 3-m" | "today 12-m" | "today 5-y" | null;
  /**
   * Type
   * @description Property to compare (optional).
   * @default null
   * @enum {string|null}
   */
  type: "images" | "news" | "youtube" | "shopping" | null;
};

/**
 * Type of ZENSERP's ZENSERP_GOOGLE_TRENDS tool output.
 */
type ZENSERP_GOOGLE_TRENDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: {
          /** Trends */
          trends: {
              [key: string]: {
                  /** Ispartial */
                  isPartial: boolean;
              } & {
                  [key: string]: unknown;
              };
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
 * Type of ZENSERP's ZENSERP_GOOGLE_VIDEO_SEARCH tool input.
 */
type ZENSERP_GOOGLE_VIDEO_SEARCH_INPUT = {
  /**
   * Gl
   * @description Country code for region-specific results (ISO 3166-1 alpha-2).
   * @default null
   */
  gl: string | null;
  /**
   * Hl
   * @description Language code for interface and results (ISO 639-1).
   * @default null
   */
  hl: string | null;
  /**
   * Location
   * @description Location to simulate search from (e.g., 'Austin, Texas').
   * @default null
   */
  location: string | null;
  /**
   * Num
   * @description Number of video results to return (1-100).
   * @default null
   */
  num: number | null;
  /**
   * Q
   * @description Search query term.
   */
  q?: string;
};

/**
 * Type of ZENSERP's ZENSERP_GOOGLE_VIDEO_SEARCH tool output.
 */
type ZENSERP_GOOGLE_VIDEO_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of video search results.
       */
      results: {
          /**
           * Channel
           * @description Channel or uploader of the video.
           * @default null
           */
          channel: string | null;
          /**
           * Duration
           * @description Duration of the video.
           * @default null
           */
          duration: string | null;
          /**
           * Link
           * @description URL of the video.
           */
          link: string;
          /**
           * Published
           * @description Publication date of the video.
           * @default null
           */
          published: string | null;
          /**
           * Snippet
           * @description Video description snippet.
           * @default null
           */
          snippet: string | null;
          /**
           * Thumbnail
           * @description URL of the video thumbnail.
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Title of the video.
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
 * Type of ZENSERP's ZENSERP_YANDEX_SEARCH tool input.
 */
type ZENSERP_YANDEX_SEARCH_INPUT = {
  /**
   * Device
   * @description Device type to emulate: 'desktop' or 'mobile'
   * @default null
   * @enum {string|null}
   */
  device: "desktop" | "mobile" | null;
  /**
   * Gl
   * @description Geographic location code (ISO 3166-1 alpha-2), e.g., 'us', 'ru'
   * @default null
   */
  gl: string | null;
  /**
   * Hl
   * @description Language code for results, e.g., 'en', 'ru'
   * @default null
   */
  hl: string | null;
  /**
   * Location
   * @description Search location, e.g., 'New York, USA'
   * @default null
   */
  location: string | null;
  /**
   * Num
   * @description Number of results to return (1-100)
   * @default null
   */
  num: number | null;
  /**
   * Q
   * @description Search query string
   */
  q?: string;
  /**
   * Tbm
   * @description Type of search: 'isch' for images-only search
   * @default null
   * @constant
   */
  tbm: "isch";
};

/**
 * Type of ZENSERP's ZENSERP_YANDEX_SEARCH tool output.
 */
type ZENSERP_YANDEX_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Featured Snippet
       * @description Featured snippet data, if available
       * @default null
       */
      featured_snippet: {
          [key: string]: unknown;
      } | null;
      /**
       * Images
       * @description Image results array when tbm='isch'
       * @default null
       */
      images: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Number Of Results
       * @description Total number of results reported.
       * @default null
       */
      number_of_results: number | null;
      /**
       * Organic
       * @description Organic search results.
       * @default null
       */
      organic: {
          /**
           * Description
           * @description Snippet description.
           * @default null
           */
          description: string | null;
          /**
           * Destination
           * @description Breadcrumb or destination path.
           * @default null
           */
          destination: string | null;
          /**
           * Is Amp
           * @description Whether AMP page.
           * @default null
           */
          isAmp: boolean | null;
          /**
           * Position
           * @description Position in organic results ranking.
           */
          position: number;
          /**
           * Sitelinks
           * @description List of sitelinks, if any.
           * @default null
           */
          sitelinks: {
              /**
               * Description
               * @description Sitelink description.
               * @default null
               */
              description: string | null;
              /**
               * Title
               * @description Sitelink title.
               */
              title: string;
              /**
               * Url
               * @description Sitelink URL.
               */
              url: string;
          }[] | null;
          /**
           * Title
           * @description Result title.
           */
          title: string;
          /**
           * Url
           * @description Result URL.
           */
          url: string;
      }[] | null;
      /**
       * Query
       * @description Echo of the query parameters and URL.
       */
      query: {
          /**
           * Q
           * @description Original query string.
           */
          q: string;
          /**
           * Url
           * @description Internal Yandex search URL generated.
           */
          url: string;
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
 * Type of ZENSERP's ZENSERP_ZENSERP_GOOGLE_IMAGE_SEARCH tool input.
 */
type ZENSERP_ZENSERP_GOOGLE_IMAGE_SEARCH_INPUT = {
  /**
   * Gl
   * @description Geolocation country code for localized results (e.g., 'us').
   * @default null
   */
  gl: string | null;
  /**
   * Hl
   * @description Language code for interface localization (e.g., 'en').
   * @default null
   */
  hl: string | null;
  /**
   * Num
   * @description Number of image results to return. Must be at least 1.
   * @default null
   */
  num: number | null;
  /**
   * Q
   * @description Search query string.
   */
  q?: string;
};

/**
 * Type of ZENSERP's ZENSERP_ZENSERP_GOOGLE_IMAGE_SEARCH tool output.
 */
type ZENSERP_ZENSERP_GOOGLE_IMAGE_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image Results
       * @description List of image result objects
       */
      image_results: {
          /**
           * Height
           * @description Height in pixels of the image
           * @default null
           */
          height: number | null;
          /**
           * Source
           * @description Source website of the image
           * @default null
           */
          source: string | null;
          /**
           * Thumbnail
           * @description Thumbnail URL of the image
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Title or alt text of the image
           * @default null
           */
          title: string | null;
          /**
           * Url
           * @description Direct URL to the image
           * @default null
           */
          url: string | null;
          /**
           * Width
           * @description Width in pixels of the image
           * @default null
           */
          width: number | null;
      }[];
      /**
       * Query
       * @description Original search query used
       */
      query: string;
      /**
       * Total
       * @description Total number of results available
       * @default null
       */
      total: number | null;
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
 * Type of ZENSERP's ZENSERP_ZENSERP_GOOGLE_MAPS_SEARCH tool input.
 */
type ZENSERP_ZENSERP_GOOGLE_MAPS_SEARCH_INPUT = {
  /**
   * Lat
   * @description Latitude in decimal degrees. Must be provided with 'lng'.
   * @default null
   */
  lat: number | null;
  /**
   * Lng
   * @description Longitude in decimal degrees. Must be provided with 'lat'.
   * @default null
   */
  lng: number | null;
  /**
   * Location
   * @description Human-readable location for geotargeted results, e.g. 'Vienna,Vienna,Austria'. Provide this or both 'lat' and 'lng'.
   * @default null
   */
  location: string | null;
  /**
   * Q
   * @description Search query string for local businesses, e.g. 'Coffee House'.
   */
  q?: string;
  /**
   * Search Engine
   * @description Override Google domain for search, e.g. 'google.at'.
   * @default null
   */
  search_engine: string | null;
};

/**
 * Type of ZENSERP's ZENSERP_ZENSERP_GOOGLE_MAPS_SEARCH tool output.
 */
type ZENSERP_ZENSERP_GOOGLE_MAPS_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Maps Results
       * @description List of local business search results.
       */
      maps_results: {
          /**
           * Address
           * @description Formatted address or distance and address info.
           */
          address: string;
          /**
           * Coordinates
           * @description Geographic coordinates of the business.
           */
          coordinates: {
              /**
               * Latitude
               * @description Latitude of the place in decimal degrees.
               */
              latitude: number;
              /**
               * Longitude
               * @description Longitude of the place in decimal degrees.
               */
              longitude: number;
          };
          /**
           * Paid
           * @description True if this is a sponsored (paid) listing.
           */
          paid: boolean;
          /**
           * Place Id
           * @description Unique Google place identifier.
           */
          place_id: string;
          /**
           * Reviews
           * @description Total number of reviews.
           */
          reviews: number;
          /**
           * Stars
           * @description Average star rating of the business.
           */
          stars: number;
          /**
           * Title
           * @description Business name/title.
           */
          title: string;
          /**
           * Type
           * @description Category/type of the business, e.g. 'Coffeeshop'.
           */
          type: string;
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
 * Type of ZENSERP's ZENSERP_ZENSERP_GOOGLE_SEARCH tool input.
 */
type ZENSERP_ZENSERP_GOOGLE_SEARCH_INPUT = {
  /**
   * Device
   * @description Device to emulate: 'desktop' or 'mobile'.
   * @default null
   * @enum {string|null}
   */
  device: "desktop" | "mobile" | null;
  /**
   * Gl
   * @description Country code for geolocation (e.g., 'us', 'fr').
   * @default null
   */
  gl: string | null;
  /**
   * Hl
   * @description Google interface language code, e.g., 'en'.
   * @default null
   */
  hl: string | null;
  /**
   * Lat
   * @description Latitude for geolocation query.
   * @default null
   */
  lat: number | null;
  /**
   * Lng
   * @description Longitude for geolocation query.
   * @default null
   */
  lng: number | null;
  /**
   * Location
   * @description Geolocation for the query (use canonical Google names or uule tokens).
   * @default null
   */
  location: string | null;
  /**
   * Lr
   * @description Language filter prefixed with 'lang_', e.g., 'lang_fr'.
   * @default null
   */
  lr: string | null;
  /**
   * Num
   * @description Number of search results to return (1-100).
   * @default null
   */
  num: number | null;
  /**
   * Output
   * @description Raw export format: 'html' or 'csv'.
   * @default null
   * @enum {string|null}
   */
  output: "html" | "csv" | null;
  /**
   * Q
   * @description Search query; supports full Google search operators.
   */
  q?: string;
  /**
   * Search Engine
   * @description Override search engine URL (e.g., 'google.com' for Google, 'youtube.com' for YouTube search).
   * @default null
   */
  search_engine: string | null;
  /**
   * Start
   * @description Zero-based offset for pagination (use with num for pages).
   * @default null
   */
  start: number | null;
  /**
   * Tbm
   * @description Type of search: 'isch' for images, 'nws' for news, 'shop' for shopping, 'lcl' for maps, 'vid' for video.
   * @default null
   * @enum {string|null}
   */
  tbm: "isch" | "nws" | "shop" | "lcl" | "vid" | null;
  /**
   * Timeframe
   * @description Restrict results by timeframe: e.g., 'now 1-H', 'today 12-m'.
   * @default null
   * @enum {string|null}
   */
  timeframe: "now 1-H" | "now 4-H" | "now 1-d" | "now 7-d" | "today 1-m" | "today 3-m" | "today 12-m" | "today 5-y" | null;
};

/**
 * Type of ZENSERP's ZENSERP_ZENSERP_GOOGLE_SEARCH tool output.
 */
type ZENSERP_ZENSERP_GOOGLE_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Html
       * @description Raw HTML if requested via output=html.
       * @default null
       */
      html: string | null;
      /**
       * Knowledge Graph
       * @description Knowledge graph results, if any.
       * @default null
       */
      knowledge_graph: {
          /**
           * Description
           * @description Knowledge graph description.
           * @default null
           */
          description: string | null;
          /**
           * Downwards
           * @description List of additional related items.
           * @default null
           */
          downwards: {
              /**
               * Image
               * @description Data URI or image link.
               */
              image: string;
              /**
               * Link
               * @description Related item search link.
               */
              link: string;
              /**
               * Name
               * @description Related item name.
               */
              name: string;
          }[] | null;
          /**
           * Image
           * @description Knowledge graph image URL or data URI.
           * @default null
           */
          image: string | null;
          /**
           * Shared Abilities
           * @description Abilities info.
           * @default null
           */
          shared_abilities: string | null;
          /**
           * Shared Category
           * @description Category info.
           * @default null
           */
          shared_category: string | null;
          /**
           * Shared Evolves From
           * @description Evolution source.
           * @default null
           */
          shared_evolves_from: string | null;
          /**
           * Shared Evolves To
           * @description Evolution target.
           * @default null
           */
          shared_evolves_to: string | null;
          /**
           * Shared Height
           * @description Shared height info.
           * @default null
           */
          shared_height: string | null;
          /**
           * Shared Weakness
           * @description Weakness info.
           * @default null
           */
          shared_weakness: string | null;
          /**
           * Shared Weight
           * @description Shared weight info.
           * @default null
           */
          shared_weight: string | null;
          /**
           * Subtitle
           * @description Knowledge graph subtitle.
           * @default null
           */
          subtitle: string | null;
          /**
           * Title
           * @description Knowledge graph title.
           */
          title: string;
      }[] | null;
      /**
       * Number Of Results
       * @description Total number of results reported by Google.
       * @default null
       */
      number_of_results: number | null;
      /**
       * Organic
       * @description Organic search results.
       * @default null
       */
      organic: {
          /**
           * Description
           * @description Snippet description.
           * @default null
           */
          description: string | null;
          /**
           * Destination
           * @description Breadcrumb or destination path.
           * @default null
           */
          destination: string | null;
          /**
           * Is Amp
           * @description Whether AMP page.
           * @default null
           */
          isAmp: boolean | null;
          /**
           * Position
           * @description Position in organic results ranking.
           */
          position: number;
          /**
           * Title
           * @description Result title.
           */
          title: string;
          /**
           * Url
           * @description Result URL.
           */
          url: string;
      }[] | null;
      /**
       * Pagination
       * @description Pagination metadata for additional pages.
       * @default null
       */
      pagination: {
          /**
           * Current Page
           * @description Current page number.
           * @default null
           */
          current_page: number | null;
          /**
           * Next Page
           * @description Next page offset.
           * @default null
           */
          next_page: number | null;
          /**
           * Pages
           * @description List of page offsets available.
           */
          pages: number[];
          /**
           * Previous Page
           * @description Previous page offset.
           * @default null
           */
          previous_page: number | null;
      } | null;
      /**
       * Query
       * @description Echo of the query parameters.
       */
      query: {
          /**
           * Apikey
           * @description API key used for the request.
           * @default null
           */
          apikey: string | null;
          /**
           * Q
           * @description Original query string.
           */
          q: string;
          /**
           * Url
           * @description Internal Google search URL generated.
           */
          url: string;
      };
      /**
       * Related Searches
       * @description Related search suggestions.
       * @default null
       */
      related_searches: {
          /**
           * Title
           * @description Related search query.
           */
          title: string;
          /**
           * Url
           * @description URL for related search.
           */
          url: string;
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
 * Type of ZENSERP's ZENSERP_ZENSERP_GOOGLE_SHOPPING_SEARCH tool input.
 */
type ZENSERP_ZENSERP_GOOGLE_SHOPPING_SEARCH_INPUT = {
  /**
   * Device
   * @description Device type to emulate ('desktop' or 'mobile').
   * @default null
   * @enum {string|null}
   */
  device: "desktop" | "mobile" | null;
  /**
   * Gl
   * @description Country code for geolocation override (e.g. 'US').
   * @default null
   */
  gl: string | null;
  /**
   * Hl
   * @description Interface language code override (e.g. 'en').
   * @default null
   */
  hl: string | null;
  /**
   * Lat
   * @description Latitude for precise geotargeting.
   * @default null
   */
  lat: number | null;
  /**
   * Lng
   * @description Longitude for precise geotargeting.
   * @default null
   */
  lng: number | null;
  /**
   * Location
   * @description Geolocation for results. Use Google’s canonical names. E.g. 'Manhattan, New York, United States' for accurate local scraping.
   * @default null
   */
  location: string | null;
  /**
   * Lr
   * @description Language filter. Prefix with 'lang_' (e.g. 'lang_fr').
   * @default null
   */
  lr: string | null;
  /**
   * Num
   * @description Number of results to return (1–100). Default mimics human SERP (10).
   * @default null
   */
  num: number | null;
  /**
   * Output
   * @description Output format: 'html' for raw markup or 'csv' for CSV export.
   * @default null
   * @enum {string|null}
   */
  output: "html" | "csv" | null;
  /**
   * Q
   * @description Search query keywords. Operators allowed (e.g. 'site:example.com headphones').
   */
  q?: string;
  /**
   * Search Engine
   * @description Override search engine domain (e.g. 'google.com').
   * @default null
   */
  search_engine: string | null;
  /**
   * Start
   * @description Result offset for pagination. Use with `num` to fetch subsequent pages.
   * @default null
   */
  start: number | null;
  /**
   * Timeframe
   * @description Timeframe filter. E.g., 'now 1-H' for past hour, 'today 12-m' for past year.
   * @default null
   * @enum {string|null}
   */
  timeframe: "now 1-H" | "now 4-H" | "now 1-d" | "now 7-d" | "today 1-m" | "today 3-m" | "today 12-m" | "today 5-y" | null;
};

/**
 * Type of ZENSERP's ZENSERP_ZENSERP_GOOGLE_SHOPPING_SEARCH tool output.
 */
type ZENSERP_ZENSERP_GOOGLE_SHOPPING_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Shopping Results
       * @description List of shopping search results.
       */
      shopping_results: {
          /**
           * Description
           * @description Short description or snippet.
           * @default null
           */
          description: string | null;
          /**
           * Extensions
           * @description Any extension flags or badges.
           */
          extensions?: unknown[];
          /**
           * Link
           * @description URL or relative link to product detail.
           */
          link: string;
          /**
           * Price
           * @description Raw price string (e.g. '$19.99').
           * @default null
           */
          price: string | null;
          /**
           * PriceParsed
           * @description Structured price details.
           * @default null
           */
          price_parsed: {
              /**
               * Currency
               * @description Currency code of parsed price.
               */
              currency: string;
              /**
               * Value
               * @description Numeric value of parsed price.
               */
              value: number;
          } | null;
          /**
           * Product Id
           * @description Unique product identifier from Google Shopping.
           */
          product_id: string;
          /**
           * Reviews
           * @description Number of reviews (if available).
           * @default null
           */
          reviews: number | null;
          /**
           * Source
           * @description Merchant or source name.
           * @default null
           */
          source: string | null;
          /**
           * Stars
           * @description Star rating (if available).
           * @default null
           */
          stars: number | null;
          /**
           * Thumbnail
           * @description Base64 or URL of thumbnail image.
           * @default null
           */
          thumbnail: string | null;
          /**
           * Title
           * @description Product title.
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
 * Type map of all available tool input types for toolkit "ZENSERP".
 */
export type ZENSERP_TOOL_INPUTS = {
  BING_SEARCH: ZENSERP_BING_SEARCH_INPUT
  GOOGLE_NEWS_SEARCH: ZENSERP_GOOGLE_NEWS_SEARCH_INPUT
  GOOGLE_REVERSE_IMAGE_SEARCH: ZENSERP_GOOGLE_REVERSE_IMAGE_SEARCH_INPUT
  GOOGLE_SHOPPING_SEARCH: ZENSERP_GOOGLE_SHOPPING_SEARCH_INPUT
  GOOGLE_TRENDS: ZENSERP_GOOGLE_TRENDS_INPUT
  GOOGLE_VIDEO_SEARCH: ZENSERP_GOOGLE_VIDEO_SEARCH_INPUT
  YANDEX_SEARCH: ZENSERP_YANDEX_SEARCH_INPUT
  ZENSERP_GOOGLE_IMAGE_SEARCH: ZENSERP_ZENSERP_GOOGLE_IMAGE_SEARCH_INPUT
  ZENSERP_GOOGLE_MAPS_SEARCH: ZENSERP_ZENSERP_GOOGLE_MAPS_SEARCH_INPUT
  ZENSERP_GOOGLE_SEARCH: ZENSERP_ZENSERP_GOOGLE_SEARCH_INPUT
  ZENSERP_GOOGLE_SHOPPING_SEARCH: ZENSERP_ZENSERP_GOOGLE_SHOPPING_SEARCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ZENSERP".
 */
export type ZENSERP_TOOL_OUTPUTS = {
  BING_SEARCH: ZENSERP_BING_SEARCH_OUTPUT
  GOOGLE_NEWS_SEARCH: ZENSERP_GOOGLE_NEWS_SEARCH_OUTPUT
  GOOGLE_REVERSE_IMAGE_SEARCH: ZENSERP_GOOGLE_REVERSE_IMAGE_SEARCH_OUTPUT
  GOOGLE_SHOPPING_SEARCH: ZENSERP_GOOGLE_SHOPPING_SEARCH_OUTPUT
  GOOGLE_TRENDS: ZENSERP_GOOGLE_TRENDS_OUTPUT
  GOOGLE_VIDEO_SEARCH: ZENSERP_GOOGLE_VIDEO_SEARCH_OUTPUT
  YANDEX_SEARCH: ZENSERP_YANDEX_SEARCH_OUTPUT
  ZENSERP_GOOGLE_IMAGE_SEARCH: ZENSERP_ZENSERP_GOOGLE_IMAGE_SEARCH_OUTPUT
  ZENSERP_GOOGLE_MAPS_SEARCH: ZENSERP_ZENSERP_GOOGLE_MAPS_SEARCH_OUTPUT
  ZENSERP_GOOGLE_SEARCH: ZENSERP_ZENSERP_GOOGLE_SEARCH_OUTPUT
  ZENSERP_GOOGLE_SHOPPING_SEARCH: ZENSERP_ZENSERP_GOOGLE_SHOPPING_SEARCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ZENSERP toolkit.
 */
export const ZENSERP = {
  slug: "zenserp",
  tools: {
    /**
     * Tool to obtain bing search results. use when you need real-time scraping of bing serps from bing.com.
     */
    BING_SEARCH: "ZENSERP_BING_SEARCH",
    /**
     * Tool to perform a google news search. use when you need recent news articles for a topic. example: "search news for climate change".
     */
    GOOGLE_NEWS_SEARCH: "ZENSERP_GOOGLE_NEWS_SEARCH",
    /**
     * Tool to perform a reverse image search on google. use after obtaining a public image url to find where the image appears online.
     */
    GOOGLE_REVERSE_IMAGE_SEARCH: "ZENSERP_GOOGLE_REVERSE_IMAGE_SEARCH",
    /**
     * Tool to perform a google shopping search. use when you need structured product offers and pricing data via zenserp api.
     */
    GOOGLE_SHOPPING_SEARCH: "ZENSERP_GOOGLE_SHOPPING_SEARCH",
    /**
     * Tool to retrieve google trends data. use when comparing keyword popularity over time.
     */
    GOOGLE_TRENDS: "ZENSERP_GOOGLE_TRENDS",
    /**
     * Tool to perform a google video search via zenserp. use when you need video-specific search results.
     */
    GOOGLE_VIDEO_SEARCH: "ZENSERP_GOOGLE_VIDEO_SEARCH",
    /**
     * Tool to obtain yandex search results via zenserp api. use when you need programmatic access to yandex search data after constructing a query.
     */
    YANDEX_SEARCH: "ZENSERP_YANDEX_SEARCH",
    /**
     * Tool to perform a google image search via zenserp. use when you need structured image search results for a specific query.
     */
    ZENSERP_GOOGLE_IMAGE_SEARCH: "ZENSERP_ZENSERP_GOOGLE_IMAGE_SEARCH",
    /**
     * Tool to perform a google maps (local) search. use when you need localized business results for a given query. provide 'location' or 'lat'/'lng' for geotargeting.
     */
    ZENSERP_GOOGLE_MAPS_SEARCH: "ZENSERP_ZENSERP_GOOGLE_MAPS_SEARCH",
    /**
     * Tool to perform a standard google search via zenserp. use when you need structured serp data for a given query.
     */
    ZENSERP_GOOGLE_SEARCH: "ZENSERP_ZENSERP_GOOGLE_SEARCH",
    /**
     * Tool to perform a google shopping search. use when you need structured product offers and pricing data via zenserp api.
     */
    ZENSERP_GOOGLE_SHOPPING_SEARCH: "ZENSERP_ZENSERP_GOOGLE_SHOPPING_SEARCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ZENSERP".
 */
export type ZENSERP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ZENSERP".
 */
export type ZENSERP_TRIGGER_EVENTS = {}
