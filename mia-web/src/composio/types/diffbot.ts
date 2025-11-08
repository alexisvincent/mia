// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DIFFBOT's DIFFBOT_DIFFBOT_SEARCH tool input.
 */
type DIFFBOT_DIFFBOT_SEARCH_INPUT = {
  /**
   * Exclude
   * @description Comma-separated list of fields to exclude from the response.
   * @default null
   */
  exclude: string | null;
  /**
   * Explain
   * @description Return detailed query explanation (default=false).
   * @default null
   */
  explain: boolean | null;
  /**
   * Fields
   * @description Comma-separated list of fields to include in the response; all if omitted.
   * @default null
   */
  fields: string | null;
  /**
   * Indices
   * @description Comma-separated list of indices to search (default="public").
   * @default null
   */
  indices: string | null;
  /**
   * Offset
   * @description Offset for pagination (API param 'from'; default=0).
   * @default null
   */
  offset: number | null;
  /**
   * Query
   * @description Structured search query in DQL format, specifying conditions to match documents.
   */
  query?: string;
  /**
   * Size
   * @description Number of results to return (max 1000). If omitted, defaults to 10.
   * @default null
   */
  size: number | null;
  /**
   * Sort
   * @description Field name to sort results by; prefix with '-' for descending order.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of DIFFBOT's DIFFBOT_DIFFBOT_SEARCH tool output.
 */
type DIFFBOT_DIFFBOT_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Additional metadata about the search request.
       */
      meta: {
          [key: string]: unknown;
      };
      /**
       * Next
       * @description Cursor for next page in paginated results.
       * @default null
       */
      next: string | null;
      /**
       * Results
       * @description List of matching objects/documents.
       */
      results: {
          [key: string]: unknown;
      }[];
      /**
       * Took
       * @description Query execution time in milliseconds.
       */
      took: number;
      /**
       * Total
       * @description Total number of documents matching the query.
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
 * Type of DIFFBOT's DIFFBOT_GET_ACCOUNT tool input.
 */
type DIFFBOT_GET_ACCOUNT_INPUT = object;

/**
 * Type of DIFFBOT's DIFFBOT_GET_ACCOUNT tool output.
 */
type DIFFBOT_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Balance
       * @description Remaining calls available in the daily quota
       */
      balance: number;
      /**
       * Created
       * @description ISO 8601 timestamp when the account was created
       */
      created: string;
      /**
       * Last Request
       * @description ISO 8601 timestamp of the last API request made
       */
      lastRequest: string;
      /**
       * Max Balance
       * @description Maximum daily calls allowed for the account
       */
      maxBalance: number;
      /**
       * Plan
       * @description Details of the subscription plan
       */
      plan: {
          /**
           * Credits
           * @description Mapping of call types to their credit costs
           */
          credits: {
              [key: string]: number;
          };
          /**
           * Max Daily
           * @description Daily API call quota for the plan
           */
          maxDaily: number;
          /**
           * Name
           * @description Name of the subscription plan
           */
          name: string;
      };
      /**
       * Rate Limit
       * @description Current rate limit information
       */
      rateLimit: {
          /**
           * Limit
           * @description Total number of calls allowed in the current rate limit window
           */
          limit: number;
          /**
           * Remaining
           * @description Number of calls remaining in the current rate limit window
           */
          remaining: number;
          /**
           * Reset
           * @description ISO 8601 timestamp when the rate limit window resets
           */
          reset: string;
      };
      /**
       * Subscription
       * @description Active subscription type for the account
       */
      subscription: string;
      /**
       * Success
       * @description Indicates if the API call was successful
       */
      success: boolean;
      /**
       * Token
       * @description API token echoed back for confirmation
       */
      token: string;
      /**
       * Type
       * @description Type of the returned object, typically 'account'
       */
      type: string;
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
 * Type of DIFFBOT's DIFFBOT_GET_ANALYZE tool input.
 */
type DIFFBOT_GET_ANALYZE_INPUT = {
  /**
   * Callback
   * @description Optional JSONP callback function name. If set, the API returns JSONP-wrapped response.
   * @default null
   */
  callback: string | null;
  /**
   * Fields
   * @description Comma-separated list of fields to limit the output fields and reduce response size.
   * @default null
   */
  fields: string | null;
  /**
   * Url
   * @description The full URL of the page to analyze, including http:// or https://
   */
  url?: string;
};

/**
 * Type of DIFFBOT's DIFFBOT_GET_ANALYZE tool output.
 */
type DIFFBOT_GET_ANALYZE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Human Language
       * @description Detected human language of the page content, e.g., 'en'.
       * @default null
       */
      humanLanguage: string | null;
      /**
       * Icon
       * @description Favicon URL of the site, if available.
       * @default null
       */
      icon: string | null;
      /**
       * Images
       * @description List of images extracted from the page, if any.
       * @default null
       */
      images: ({
          /**
           * Height
           * @description Height of the image in pixels, if available.
           * @default null
           */
          height: number | null;
          /**
           * Url
           * @description Image URL extracted from the page.
           */
          url: string;
          /**
           * Width
           * @description Width of the image in pixels, if available.
           * @default null
           */
          width: number | null;
      } & {
          [key: string]: unknown;
      })[] | null;
      /**
       * Text
       * @description Main textual content extracted from the page.
       * @default null
       */
      text: string | null;
      /**
       * Title
       * @description Page title, if available.
       * @default null
       */
      title: string | null;
      /**
       * Type
       * @description Detected page type, e.g., 'article', 'product', etc.
       */
      type: string;
      /**
       * Url
       * @description Analyzed URL, echoing back the input URL.
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
 * Type of DIFFBOT's DIFFBOT_GET_ARTICLE tool input.
 */
type DIFFBOT_GET_ARTICLE_INPUT = {
  /**
   * Callback
   * @description Name of the JSONP callback function (if using JSONP)
   * @default null
   */
  callback: string | null;
  /**
   * Discussion
   * @description Whether to include discussion/comment data in the response
   * @default false
   */
  discussion: boolean | null;
  /**
   * Fields
   * @description List of specific fields to include in the response. If provided, only these fields are returned.
   * @default null
   */
  fields: string[] | null;
  /**
   * Mode
   * @description Extraction mode override (defaults to 'article')
   * @default null
   */
  mode: string | null;
  /**
   * Paging
   * @description Paging token for multi-page articles (returned in previous response)
   * @default null
   */
  paging: string | null;
  /**
   * Stats
   * @description Whether to include statistics like word count
   * @default false
   */
  stats: boolean | null;
  /**
   * Timeout
   * @description Maximum time in milliseconds to wait for page rendering
   * @default null
   */
  timeout: number | null;
  /**
   * Url
   * @description Full URL of the web page to analyze, must start with http or https
   */
  url?: string;
};

/**
 * Type of DIFFBOT's DIFFBOT_GET_ARTICLE tool output.
 */
type DIFFBOT_GET_ARTICLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Objects
       * @description Extracted article objects with structured data
       */
      objects: {
          /**
           * Author
           * @description Article author's name
           * @default null
           */
          author: string | null;
          /**
           * Date
           * @description Publication date in ISO 8601 format
           * @default null
           */
          date: string | null;
          /**
           * Html
           * @description Main article content as HTML
           * @default null
           */
          html: string | null;
          /**
           * Human Language
           * @description Detected language of the article
           * @default null
           */
          humanLanguage: string | null;
          /**
           * Images
           * @description List of images found in the article
           * @default null
           */
          images: {
              /**
               * Height
               * @description Height of the image in pixels
               * @default null
               */
              height: number | null;
              /**
               * Type
               * @description Type/category of the image
               * @default null
               */
              type: string | null;
              /**
               * Url
               * @description URL of the image
               */
              url: string;
              /**
               * Width
               * @description Width of the image in pixels
               * @default null
               */
              width: number | null;
          }[] | null;
          /**
           * Page Url
           * @description URL of the analyzed page
           */
          pageUrl: string;
          /**
           * Tags
           * @description List of tags/entities extracted from the article
           * @default null
           */
          tags: string[] | null;
          /**
           * Text
           * @description Main article content as plain text
           * @default null
           */
          text: string | null;
          /**
           * Title
           * @description Title of the article
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Type of the extracted object, e.g., 'article'
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
 * Type of DIFFBOT's DIFFBOT_GET_DISCUSSION tool input.
 */
type DIFFBOT_GET_DISCUSSION_INPUT = {
  /**
   * Discussion
   * @description Set to False to disable comment extraction.
   * @default true
   */
  discussion: boolean | null;
  /**
   * Fields
   * @description Comma-separated list of fields to include in the response.
   * @default null
   */
  fields: string | null;
  /**
   * Max Pages
   * @description Maximum number of pages to concatenate; set to 'all' for all pages.
   * @default 1
   */
  maxPages: number | null;
  /**
   * Norender
   * @description Set to True to disable full page rendering for faster responses.
   * @default false
   */
  norender: boolean | null;
  /**
   * Url
   * @description The URL of the discussion page to process.
   */
  url?: string;
};

/**
 * Type of DIFFBOT's DIFFBOT_GET_DISCUSSION tool output.
 */
type DIFFBOT_GET_DISCUSSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Objects
       * @description Extracted discussion objects.
       */
      objects: {
          /**
           * Diffbot Uri
           * @description Unique object ID for deduplication.
           */
          diffbotUri: string;
          /**
           * Human Language
           * @description Language of the discussion (ISO 639-1 code).
           */
          humanLanguage: string;
          /**
           * Next Page
           * @description URL of the next page in the discussion, if applicable.
           * @default null
           */
          nextPage: string | null;
          /**
           * Next Pages
           * @description URLs of all pages concatenated if multi-page discussion.
           */
          nextPages: string[];
          /**
           * Num Pages
           * @description Number of pages concatenated for multi-page discussions.
           */
          numPages: number;
          /**
           * Num Posts
           * @description Number of individual posts in the thread.
           */
          numPosts: number;
          /**
           * Page Url
           * @description URL of the submitted page.
           */
          pageUrl: string;
          /**
           * Participants
           * @description Number of unique participants in the discussion.
           */
          participants: number;
          /**
           * Posts
           * @description Individual posts in the discussion.
           */
          posts: {
              /**
               * Author
               * @description Name or username of the post author.
               */
              author: string;
              /**
               * Author Url
               * @description URL of the author's profile page, if available.
               * @default null
               */
              authorUrl: string | null;
              /**
               * Date
               * @description Date of the post, normalized to RFC 1123 format.
               */
              date: string;
              /**
               * Diffbot Uri
               * @description Internal ID used for indexing.
               */
              diffbotUri: string;
              /**
               * Html
               * @description Normalized HTML of the post.
               */
              html: string;
              /**
               * Human Language
               * @description Language of the post (ISO 639-1 code).
               */
              humanLanguage: string;
              /**
               * Id
               * @description ID of the individual post.
               */
              id: number;
              /**
               * Images
               * @description URLs of images detected within the post content.
               */
              images: string[];
              /**
               * Page Url
               * @description URL of the page where the post was found.
               */
              pageUrl: string;
              /**
               * Parent Id
               * @description ID of the parent post, if applicable.
               * @default null
               */
              parentId: number | null;
              /**
               * Tags
               * @description Tags generated from the post content.
               */
              tags: string[];
              /**
               * Text
               * @description Full text of the post.
               */
              text: string;
              /**
               * Type
               * @description Element type, always 'post'.
               */
              type: string;
          }[];
          /**
           * Provider
           * @description Discussion service provider if known (e.g., Disqus).
           * @default null
           */
          provider: string | null;
          /**
           * Resolved Page Url
           * @description Final resolved URL if redirects occurred.
           * @default null
           */
          resolvedPageUrl: string | null;
          /**
           * Rss Url
           * @description URL of the discussion's RSS feed, if available.
           * @default null
           */
          rssUrl: string | null;
          /**
           * Tags
           * @description Tags/entities generated from all extracted posts.
           */
          tags: string[];
          /**
           * Title
           * @description Title of the discussion.
           */
          title: string;
          /**
           * Type
           * @description Object type, always 'discussion'.
           */
          type: string;
      }[];
      /**
       * Request
       * @description Metadata about the API request.
       */
      request: {
          /**
           * Discussion
           * @description Set to False to disable comment extraction.
           * @default true
           */
          discussion: boolean | null;
          /**
           * Fields
           * @description Comma-separated list of fields to include in the response.
           * @default null
           */
          fields: string | null;
          /**
           * Max Pages
           * @description Maximum number of pages to concatenate; set to 'all' for all pages.
           * @default 1
           */
          maxPages: number | null;
          /**
           * Norender
           * @description Set to True to disable full page rendering for faster responses.
           * @default false
           */
          norender: boolean | null;
          /**
           * Url
           * @description The URL of the discussion page to process.
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
 * Type of DIFFBOT's DIFFBOT_GET_EVENT tool input.
 */
type DIFFBOT_GET_EVENT_INPUT = {
  /**
   * Callback
   * @description JSONP callback function name, if JSONP output is needed
   * @default null
   */
  callback: string | null;
  /**
   * Fields
   * @description Comma-separated list of fields to return, e.g., title,date,location
   * @default null
   */
  fields: string | null;
  /**
   * Paging
   * @description Enable automatic paging of results
   * @default null
   */
  paging: boolean | null;
  /**
   * Timeout
   * @description Maximum timeout in milliseconds for the API call
   * @default null
   */
  timeout: number | null;
  /**
   * Url
   * Format: uri
   * @description URL of the event page to analyze
   */
  url?: string;
};

/**
 * Type of DIFFBOT's DIFFBOT_GET_EVENT tool output.
 */
type DIFFBOT_GET_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Objects
       * @description List of detected event objects
       */
      objects: {
          /**
           * Date
           * @description Date of the event
           * @default null
           */
          date: string | null;
          /**
           * Description
           * @description Description of the event
           * @default null
           */
          description: string | null;
          /**
           * End Date
           * @description End date/time of the event
           * @default null
           */
          endDate: string | null;
          /**
           * Images
           * @description Images related to the event
           * @default null
           */
          images: {
              /**
               * Url
               * Format: uri
               * @description URL of an image related to the event
               * @default null
               */
              url: string | null;
          }[] | null;
          /**
           * Location
           * @description Location details of the event
           * @default null
           */
          location: {
              /**
               * Address
               * @description Address of the event location
               * @default null
               */
              address: string | null;
              /**
               * City
               * @description City of the event location
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country of the event location
               * @default null
               */
              country: string | null;
              /**
               * Name
               * @description Name of the event location
               * @default null
               */
              name: string | null;
              /**
               * Region
               * @description Region/state of the event location
               * @default null
               */
              region: string | null;
          } | null;
          /**
           * Performers
           * @description List of performers at the event
           * @default null
           */
          performers: {
              /**
               * Name
               * @description Name of an event performer
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * Start Date
           * @description Start date/time of the event
           * @default null
           */
          startDate: string | null;
          /**
           * Ticket Url
           * Format: uri
           * @description Ticket purchase URL
           * @default null
           */
          ticketUrl: string | null;
          /**
           * Title
           * @description Title of the event
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Type of event detected
           * @default null
           */
          type: string | null;
      }[];
      /**
       * Request
       * @description Metadata about the request
       */
      request: {
          /**
           * Api
           * @description API that was called
           * @default null
           */
          api: string | null;
          /**
           * Url
           * Format: uri
           * @description The requested page URL
           * @default null
           */
          url: string | null;
          /**
           * Version
           * @description Version of the API used
           * @default null
           */
          version: string | null;
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
 * Type of DIFFBOT's DIFFBOT_GET_IMAGE tool input.
 */
type DIFFBOT_GET_IMAGE_INPUT = {
  /**
   * Fields
   * @description Comma-separated list or array of specific fields to include in response, e.g., 'naturalWidth','captions'
   * @default null
   */
  fields: string[] | null;
  /**
   * Paging
   * @description Whether to include paging information for multi-image responses
   * @default null
   */
  paging: boolean | null;
  /**
   * Timeout
   * @description Maximum time to wait for API response, in milliseconds
   * @default null
   */
  timeout: number | null;
  /**
   * Url
   * Format: uri
   * @description Publicly-accessible URL of the image to analyze
   */
  url?: string;
};

/**
 * Type of DIFFBOT's DIFFBOT_GET_IMAGE tool output.
 */
type DIFFBOT_GET_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Objects
       * @description Extracted image objects with structured data
       */
      objects: {
          /**
           * Captions
           * @description Array of text captions
           * @default null
           */
          captions: string[] | null;
          /**
           * Date
           * @description Extracted or discovered date relevant to the image
           * @default null
           */
          date: string | null;
          /**
           * Natural Height
           * @description Image height in pixels
           * @default null
           */
          naturalHeight: number | null;
          /**
           * Natural Width
           * @description Image width in pixels
           * @default null
           */
          naturalWidth: number | null;
          /**
           * Page Url
           * Format: uri
           * @description Source page's URL
           * @default null
           */
          pageUrl: string | null;
          /**
           * Text
           * @description Array of detected text strings within the image
           * @default null
           */
          text: string[] | null;
          /**
           * Title
           * @description Detected title of the image, if any
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Type of the object, e.g., 'image'
           */
          type: string;
          /**
           * Url
           * Format: uri
           * @description URL of the image analyzed
           */
          url: string;
      }[];
      /**
       * RequestInfo
       * @description Echo of request details for debugging
       * @default null
       */
      request: {
          /**
           * Api
           * @description API that was called
           * @default null
           */
          api: string | null;
          /**
           * Url
           * Format: uri
           * @description The requested image URL
           * @default null
           */
          url: string | null;
          /**
           * Version
           * @description Version of the API used
           * @default null
           */
          version: string | null;
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
 * Type of DIFFBOT's DIFFBOT_GET_PRODUCT tool input.
 */
type DIFFBOT_GET_PRODUCT_INPUT = {
  /**
   * Callback
   * @description JSONP callback function name, if JSONP output is needed
   * @default null
   */
  callback: string | null;
  /**
   * Discussion
   * @description Include discussions/comments in the response
   * @default null
   */
  discussion: boolean | null;
  /**
   * Fields
   * @description List of fields to return, e.g., title,offerPrice,images
   * @default null
   */
  fields: string[] | null;
  /**
   * Mode
   * @description Extraction mode override (defaults to 'product')
   * @default null
   */
  mode: string | null;
  /**
   * Paging
   * @description Enable automatic paging of results
   * @default null
   */
  paging: boolean | null;
  /**
   * Timeout
   * @description Maximum timeout in milliseconds for the API call
   * @default null
   */
  timeout: number | null;
  /**
   * Url
   * Format: uri
   * @description URL of the product page to analyze
   */
  url?: string;
};

/**
 * Type of DIFFBOT's DIFFBOT_GET_PRODUCT tool output.
 */
type DIFFBOT_GET_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Objects
       * @description Extracted product objects with structured data
       */
      objects: {
          /**
           * Availability
           * @description Product availability status
           * @default null
           */
          availability: string | null;
          /**
           * Brand
           * @description Brand of the product
           * @default null
           */
          brand: string | null;
          /**
           * Color
           * @description Color(s) of the product
           * @default null
           */
          color: string | null;
          /**
           * Currency
           * @description Currency code for prices
           * @default null
           */
          currency: string | null;
          /**
           * Dimensions
           * @description Product dimensions
           * @default null
           */
          dimensions: string | null;
          /**
           * Ean
           * @description European article number
           * @default null
           */
          ean: string | null;
          /**
           * Images
           * @description List of image URLs for the product
           * @default null
           */
          images: string[] | null;
          /**
           * Manufacturer
           * @description Manufacturer of the product
           * @default null
           */
          manufacturer: string | null;
          /**
           * RequestInfo
           * @description Metadata about the extraction process
           * @default null
           */
          meta: {
              /**
               * Api
               * @description API that was called
               * @default null
               */
              api: string | null;
              /**
               * Url
               * Format: uri
               * @description The requested page URL
               * @default null
               */
              url: string | null;
              /**
               * Version
               * @description Version of the API used
               * @default null
               */
              version: string | null;
          } | null;
          /**
           * Model
           * @description Product model
           * @default null
           */
          model: string | null;
          /**
           * Mpn
           * @description Manufacturer part number
           * @default null
           */
          mpn: string | null;
          /**
           * Offer Price
           * @description Offer price for the product
           * @default null
           */
          offerPrice: string | null;
          /**
           * Page Url
           * @description URL of the analyzed page
           * @default null
           */
          pageUrl: string | null;
          /**
           * Regular Price
           * @description Original price before discount
           * @default null
           */
          regularPrice: string | null;
          /**
           * Reviews
           * @description List of product reviews
           * @default null
           */
          reviews: {
              /**
               * Author
               * @description Review author name
               * @default null
               */
              author: string | null;
              /**
               * Date
               * @description Review date in ISO 8601 format
               * @default null
               */
              date: string | null;
              /**
               * Rating
               * @description Review rating score
               * @default null
               */
              rating: number | null;
              /**
               * Review Text
               * @description Review content
               * @default null
               */
              reviewText: string | null;
          }[] | null;
          /**
           * Shipping
           * @description Shipping information for the product
           * @default null
           */
          shipping: {
              /**
               * Cost
               * @description Shipping cost
               * @default null
               */
              cost: string | null;
              /**
               * Currency
               * @description Currency code for shipping cost
               * @default null
               */
              currency: string | null;
              /**
               * Destination
               * @description Shipping destination location
               * @default null
               */
              destination: string | null;
              /**
               * Method
               * @description Shipping method
               * @default null
               */
              method: string | null;
              /**
               * Origin
               * @description Shipping origin location
               * @default null
               */
              origin: string | null;
          } | null;
          /**
           * Sku
           * @description Stock-keeping unit code
           * @default null
           */
          sku: string | null;
          /**
           * Text
           * @description Main description of the product
           * @default null
           */
          text: string | null;
          /**
           * Title
           * @description Product title
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Type of the extracted object, e.g., 'product'
           * @default null
           */
          type: string | null;
          /**
           * Upc
           * @description Universal product code
           * @default null
           */
          upc: string | null;
          /**
           * Weight
           * @description Product weight
           * @default null
           */
          weight: string | null;
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
 * Type of DIFFBOT's DIFFBOT_GET_VIDEO tool input.
 */
type DIFFBOT_GET_VIDEO_INPUT = {
  /**
   * Callback
   * @description Name of the JSONP callback function (if using JSONP)
   * @default null
   */
  callback: string | null;
  /**
   * Discussion
   * @description Include user discussion data (comments) if available
   * @default false
   */
  discussion: boolean | null;
  /**
   * Fallback
   * @description Whether to try an alternate extraction method if the primary fails
   * @default false
   */
  fallback: boolean | null;
  /**
   * Fields
   * @description List of specific fields to include in the response; if provided, only these fields are returned
   * @default null
   */
  fields: string[] | null;
  /**
   * Mode
   * @description Extraction mode override (e.g., 'auto')
   * @default null
   */
  mode: string | null;
  /**
   * Paging
   * @description Whether to return all detected results in one call (may increase runtime)
   * @default false
   */
  paging: boolean | null;
  /**
   * Timeout
   * @description Maximum time in milliseconds to wait for extraction
   * @default null
   */
  timeout: number | null;
  /**
   * Url
   * @description Full URL of the web page to analyze for embedded videos, must start with http or https
   */
  url?: string;
};

/**
 * Type of DIFFBOT's DIFFBOT_GET_VIDEO tool output.
 */
type DIFFBOT_GET_VIDEO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Objects
       * @description Array of extracted video object(s)
       */
      objects: {
          /**
           * Date
           * @description Publish or detection date
           * @default null
           */
          date: string | null;
          /**
           * Embed
           * @description Video embed code or object
           * @default null
           */
          embed: string | null;
          /**
           * Html
           * @description Raw HTML for the primary video embed
           * @default null
           */
          html: string | null;
          /**
           * Human Language
           * @description Human-readable language of the content
           * @default null
           */
          humanLanguage: string | null;
          /**
           * Images
           * @description Any related images detected
           * @default null
           */
          images: {
              /**
               * Url
               * @description Image URL
               */
              url: string;
          }[] | null;
          /**
           * Natural Language
           * @description Detected language code of the content
           * @default null
           */
          naturalLanguage: string | null;
          /**
           * Page Url
           * @description Source page URL where the video was found
           */
          pageUrl: string;
          /**
           * Publisher
           * @description Publisher details
           * @default null
           */
          publisher: {
              /**
               * Name
               * @description Name of the publisher
               * @default null
               */
              name: string | null;
              /**
               * Url
               * @description Publisher's URL
               * @default null
               */
              url: string | null;
          } | null;
          /**
           * Title
           * @description Extracted title of the video
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Object type, typically 'video'
           */
          type: string;
          /**
           * Url
           * @description Canonical page URL
           */
          url: string;
          /**
           * Videos
           * @description List of detected video assets
           * @default null
           */
          videos: {
              /**
               * Duration
               * @description Duration of the video in seconds
               * @default null
               */
              duration: number | null;
              /**
               * Format
               * @description Video format (e.g., 'mp4')
               * @default null
               */
              format: string | null;
              /**
               * Height
               * @description Height of the video in pixels
               * @default null
               */
              height: number | null;
              /**
               * Thumbnail Url
               * @description URL to a thumbnail image
               * @default null
               */
              thumbnailUrl: string | null;
              /**
               * Url
               * @description Direct URL to the video file
               */
              url: string;
              /**
               * Width
               * @description Width of the video in pixels
               * @default null
               */
              width: number | null;
          }[] | null;
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
 * Type of DIFFBOT's DIFFBOT_LIST_BULK_JOBS tool input.
 */
type DIFFBOT_LIST_BULK_JOBS_INPUT = object;

/**
 * Type of DIFFBOT's DIFFBOT_LIST_BULK_JOBS tool output.
 */
type DIFFBOT_LIST_BULK_JOBS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Jobs
       * @description List of bulk jobs associated with the token
       */
      jobs: {
          /**
           * Created
           * @description ISO 8601 timestamp when the job was created
           */
          created: string;
          /**
           * Job Id
           * @description Unique identifier of the bulk job
           */
          jobId: string;
          /**
           * Status
           * @description Current status of the bulk job (e.g., in_progress, completed, failed)
           */
          status: string;
          /**
           * Type
           * @description Type of the bulk job (e.g., 'article', 'image', etc.)
           */
          type: string;
          /**
           * Updated
           * @description ISO 8601 timestamp when the job was last updated
           */
          updated: string;
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
 * Type of DIFFBOT's DIFFBOT_RESOLVE_LOST_ID tool input.
 */
type DIFFBOT_RESOLVE_LOST_ID_INPUT = {
  /**
   * Lost Id
   * @description The lost ID which needs to be resolved to a canonical ID.
   */
  lostId?: string;
  /**
   * Type
   * @description The type of object (e.g., 'article', 'product'). If omitted, Diffbot will attempt to infer.
   * @default null
   */
  type: string | null;
};

/**
 * Type of DIFFBOT's DIFFBOT_RESOLVE_LOST_ID tool output.
 */
type DIFFBOT_RESOLVE_LOST_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Canonical Id
       * @description The canonical ID that the lost ID maps to, if found.
       * @default null
       */
      canonicalId: string | null;
      /**
       * Lost Id
       * @description The lost ID that was submitted for resolution.
       */
      lostId: string;
      /**
       * Message
       * @description Status or error message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Resolved
       * @description Indicates whether the lost ID was successfully resolved.
       */
      resolved: boolean;
      /**
       * Type
       * @description The object type returned by Diffbot.
       * @default null
       */
      type: string | null;
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
 * Type of DIFFBOT's DIFFBOT_START_BULK tool input.
 */
type DIFFBOT_START_BULK_INPUT = {
  /**
   * Api Url
   * Format: uri
   * @description Full Extract API URL to call (must include token).
   */
  apiUrl?: string;
  /**
   * Job Config
   * @description Advanced bulk job configuration object.
   * @default null
   */
  jobConfig: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Optional job name for identification.
   * @default null
   */
  name: string | null;
  /**
   * Notify Email
   * Format: email
   * @description Email to notify when job completes.
   * @default null
   */
  notifyEmail: string | null;
  /**
   * Notify Webhook
   * Format: uri
   * @description Webhook URL to POST on job completion.
   * @default null
   */
  notifyWebhook: string | null;
  /**
   * Url List
   * @description Comma-separated list of URLs or public file URL containing URLs.
   * @default null
   */
  urlList: string | null;
  /**
   * Urls
   * @description List of page URLs to process (max 1000).
   * @default null
   */
  urls: string[] | null;
};

/**
 * Type of DIFFBOT's DIFFBOT_START_BULK tool output.
 */
type DIFFBOT_START_BULK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Url
       * Format: uri
       * @description Extract API endpoint used for this job.
       */
      apiUrl: string;
      /**
       * Job
       * @description Metadata and settings of the started job.
       */
      job: {
          [key: string]: unknown;
      };
      /**
       * Job Id
       * @description Identifier of the created bulk job.
       */
      jobId: string;
      /**
       * Status
       * @description Initial job status (e.g., queued).
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
 * Type of DIFFBOT's DIFFBOT_START_CRAWL tool input.
 */
type DIFFBOT_START_CRAWL_INPUT = {
  /**
   * Api Url
   * @description Custom Extract API endpoint to process crawled URLs.
   * @default null
   */
  apiUrl: string | null;
  /**
   * Crawl Delay
   * @description Seconds to wait between requests to the same domain.
   * @default null
   */
  crawlDelay: number | null;
  /**
   * Custom Headers
   * @description Custom HTTP headers to include when crawling.
   * @default null
   */
  customHeaders: {
      [key: string]: string;
  } | null;
  /**
   * Max To Crawl
   * @description Maximum number of pages to crawl before stopping.
   * @default null
   */
  maxToCrawl: number | null;
  /**
   * Max To Process
   * @description Maximum number of pages to process through the Extract API.
   * @default null
   */
  maxToProcess: number | null;
  /**
   * Name
   * @description Unique name for the crawl job.
   */
  name?: string;
  /**
   * Notify Email
   * @description Email to notify upon crawl completion.
   * @default null
   */
  notifyEmail: string | null;
  /**
   * Obey Robots Txt
   * @description Whether to respect robots.txt directives.
   * @default true
   */
  obeyRobotsTxt: boolean | null;
  /**
   * Repeat
   * @description Schedule for repeating this crawl (e.g., 'daily').
   * @default null
   */
  repeat: string | null;
  /**
   * Seeds
   * @description List of URLs to begin crawling.
   */
  seeds?: string[];
  /**
   * Type
   * @description Type of content to extract (e.g., 'article', 'product').
   */
  type?: string;
};

/**
 * Type of DIFFBOT's DIFFBOT_START_CRAWL tool output.
 */
type DIFFBOT_START_CRAWL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job
       * @description Details of the initiated crawl job.
       */
      job: {
          /**
           * Api Url
           * @description Extract API endpoint used.
           * @default null
           */
          apiUrl: string | null;
          /**
           * Crawl Delay
           * @description Configured delay between requests.
           * @default null
           */
          crawlDelay: number | null;
          /**
           * Creation Date
           * @description ISO 8601 timestamp when the crawl was created.
           * @default null
           */
          creationDate: string | null;
          /**
           * Custom Headers
           * @description Custom headers included in crawl requests.
           * @default null
           */
          customHeaders: {
              [key: string]: string;
          } | null;
          /**
           * Id
           * @description Identifier of the crawl job.
           */
          id: string;
          /**
           * Last Run
           * @description ISO 8601 timestamp of the last crawl run.
           * @default null
           */
          lastRun: string | null;
          /**
           * Max To Crawl
           * @description Configured maximum pages to crawl.
           * @default null
           */
          maxToCrawl: number | null;
          /**
           * Max To Process
           * @description Configured maximum pages to process.
           * @default null
           */
          maxToProcess: number | null;
          /**
           * Name
           * @description Name of the crawl job.
           */
          name: string;
          /**
           * Notify Email
           * @description Notification email for completion.
           * @default null
           */
          notifyEmail: string | null;
          /**
           * Obey Robots Txt
           * @description Whether robots.txt directives are followed.
           * @default null
           */
          obeyRobotsTxt: boolean | null;
          /**
           * Object Count
           * @description Number of items collected so far.
           * @default null
           */
          objectCount: number | null;
          /**
           * Repeat
           * @description Repeat schedule for recurring crawls.
           * @default null
           */
          repeat: string | null;
          /**
           * Seeds
           * @description Seed URLs provided for crawling.
           */
          seeds: string[];
          /**
           * Status
           * @description Current status of the crawl job.
           */
          status: string;
          /**
           * Type
           * @description Content type of the crawl job.
           */
          type: string;
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
 * Type of DIFFBOT's DIFFBOT_STOP_BULK_JOB tool input.
 */
type DIFFBOT_STOP_BULK_JOB_INPUT = {
  /**
   * Job Id
   * @description Unique identifier of the Bulk job to stop
   */
  jobId?: string;
};

/**
 * Type of DIFFBOT's DIFFBOT_STOP_BULK_JOB tool output.
 */
type DIFFBOT_STOP_BULK_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Job
       * @description Details of the Bulk job after the stop attempt
       */
      job: {
          /**
           * Id
           * @description Identifier of the Bulk job
           */
          id: string;
          /**
           * Message
           * @description Additional information about the job status, if provided
           * @default null
           */
          message: string | null;
          /**
           * State
           * @description State of the Bulk job after stop attempt (e.g., 'stopping', 'stopped')
           */
          state: string;
      };
      /**
       * Success
       * @description True if the stop request was accepted
       */
      success: boolean;
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
 * Type map of all available tool input types for toolkit "DIFFBOT".
 */
export type DIFFBOT_TOOL_INPUTS = {
  DIFFBOT_SEARCH: DIFFBOT_DIFFBOT_SEARCH_INPUT
  GET_ACCOUNT: DIFFBOT_GET_ACCOUNT_INPUT
  GET_ANALYZE: DIFFBOT_GET_ANALYZE_INPUT
  GET_ARTICLE: DIFFBOT_GET_ARTICLE_INPUT
  GET_DISCUSSION: DIFFBOT_GET_DISCUSSION_INPUT
  GET_EVENT: DIFFBOT_GET_EVENT_INPUT
  GET_IMAGE: DIFFBOT_GET_IMAGE_INPUT
  GET_PRODUCT: DIFFBOT_GET_PRODUCT_INPUT
  GET_VIDEO: DIFFBOT_GET_VIDEO_INPUT
  LIST_BULK_JOBS: DIFFBOT_LIST_BULK_JOBS_INPUT
  RESOLVE_LOST_ID: DIFFBOT_RESOLVE_LOST_ID_INPUT
  START_BULK: DIFFBOT_START_BULK_INPUT
  START_CRAWL: DIFFBOT_START_CRAWL_INPUT
  STOP_BULK_JOB: DIFFBOT_STOP_BULK_JOB_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DIFFBOT".
 */
export type DIFFBOT_TOOL_OUTPUTS = {
  DIFFBOT_SEARCH: DIFFBOT_DIFFBOT_SEARCH_OUTPUT
  GET_ACCOUNT: DIFFBOT_GET_ACCOUNT_OUTPUT
  GET_ANALYZE: DIFFBOT_GET_ANALYZE_OUTPUT
  GET_ARTICLE: DIFFBOT_GET_ARTICLE_OUTPUT
  GET_DISCUSSION: DIFFBOT_GET_DISCUSSION_OUTPUT
  GET_EVENT: DIFFBOT_GET_EVENT_OUTPUT
  GET_IMAGE: DIFFBOT_GET_IMAGE_OUTPUT
  GET_PRODUCT: DIFFBOT_GET_PRODUCT_OUTPUT
  GET_VIDEO: DIFFBOT_GET_VIDEO_OUTPUT
  LIST_BULK_JOBS: DIFFBOT_LIST_BULK_JOBS_OUTPUT
  RESOLVE_LOST_ID: DIFFBOT_RESOLVE_LOST_ID_OUTPUT
  START_BULK: DIFFBOT_START_BULK_OUTPUT
  START_CRAWL: DIFFBOT_START_CRAWL_OUTPUT
  STOP_BULK_JOB: DIFFBOT_STOP_BULK_JOB_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DIFFBOT toolkit.
 */
export const DIFFBOT = {
  slug: "diffbot",
  tools: {
    /**
     * Tool to search data extracted by crawl or bulk jobs using dql queries. use after data extraction jobs complete to retrieve search results.
     */
    DIFFBOT_SEARCH: "DIFFBOT_DIFFBOT_SEARCH",
    /**
     * Tool to retrieve account details, including plan information and usage statistics. use after authenticating to verify subscription and daily quota status.
     */
    GET_ACCOUNT: "DIFFBOT_GET_ACCOUNT",
    /**
     * Tool to automatically determine a page's content type and route it to the appropriate extraction api. use when you have only a url and need diffbot to choose the right extractor.
     */
    GET_ANALYZE: "DIFFBOT_GET_ANALYZE",
    /**
     * Tool to extract information from articles, including authors, publication dates, and images. use when you need structured metadata from a web article url.
     */
    GET_ARTICLE: "DIFFBOT_GET_ARTICLE",
    /**
     * Tool to extract threads of content from forums, comment sections, and review pages. use when you need structured discussion data from web pages after identifying the discussion url.
     */
    GET_DISCUSSION: "DIFFBOT_GET_DISCUSSION",
    /**
     * Tool to extract event details from web pages. use when you need structured event data such as venue, date, and description.
     */
    GET_EVENT: "DIFFBOT_GET_EVENT",
    /**
     * Tool to extract detailed information about images, including dimensions and recognition data. use after confirming the image url is publicly accessible.
     */
    GET_IMAGE: "DIFFBOT_GET_IMAGE",
    /**
     * Tool to extract product information such as specifications, prices, availability, and reviews. use when you need structured product data including specs, pricing, and reviews.
     */
    GET_PRODUCT: "DIFFBOT_GET_PRODUCT",
    /**
     * Tool to extract information from videos, including titles, descriptions, and embedded html. use when you need structured video metadata from any web page.
     */
    GET_VIDEO: "DIFFBOT_GET_VIDEO",
    /**
     * Tool to list all bulk jobs associated with a specific token. use after authenticating to retrieve statuses of all jobs for the account.
     */
    LIST_BULK_JOBS: "DIFFBOT_LIST_BULK_JOBS",
    /**
     * Tool to resolve lost ids in the knowledge graph. use when you need to map a lost identifier to its canonical counterpart for data consistency.
     */
    RESOLVE_LOST_ID: "DIFFBOT_RESOLVE_LOST_ID",
    /**
     * Tool to start a bulk extract job. use when processing large numbers of urls asynchronously.
     */
    START_BULK: "DIFFBOT_START_BULK",
    /**
     * Tool to spider a site for links and process them with the extract api into a single collection. use when you have seed urls and want to collect structured data across a site. requires a plus plan for crawl api access.
     */
    START_CRAWL: "DIFFBOT_START_CRAWL",
    /**
     * Tool to stop a running bulk job. use when you need to halt further processing of urls in a job in progress. invoke only after confirming the jobid to avoid accidental stoppage.
     */
    STOP_BULK_JOB: "DIFFBOT_STOP_BULK_JOB",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DIFFBOT".
 */
export type DIFFBOT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DIFFBOT".
 */
export type DIFFBOT_TRIGGER_EVENTS = {}
