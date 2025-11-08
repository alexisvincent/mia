// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ZENROWS's ZENROWS_GET_API_USAGE tool input.
 */
type ZENROWS_GET_API_USAGE_INPUT = object;

/**
 * Type of ZENROWS's ZENROWS_GET_API_USAGE tool output.
 */
type ZENROWS_GET_API_USAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Period Ends At
       * @description End date of the current billing period
       */
      period_ends_at: string;
      /**
       * Period Starts At
       * @description Start date of the current billing period
       */
      period_starts_at: string;
      /**
       * Plan
       * @description Detailed plan information including limits and usage
       */
      plan: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Subscription status (e.g., 'ACTIVE')
       */
      status: string;
      /**
       * Top Ups
       * @description List of any top-ups applied to the account
       */
      top_ups: unknown[];
      /**
       * Usage
       * @description Current usage value
       */
      usage: number;
      /**
       * Usage Percent
       * @description Usage as a percentage of the total limit
       */
      usage_percent: number;
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
 * Type of ZENROWS's ZENROWS_GET_CONCURRENCY_STATUS tool input.
 */
type ZENROWS_GET_CONCURRENCY_STATUS_INPUT = object;

/**
 * Type of ZENROWS's ZENROWS_GET_CONCURRENCY_STATUS tool output.
 */
type ZENROWS_GET_CONCURRENCY_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Concurrency Limit
       * @description The total number of concurrent requests allowed by your plan
       */
      concurrency_limit: number;
      /**
       * Concurrency Remaining
       * @description The number of available concurrent request slots
       */
      concurrency_remaining: number;
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
 * Type of ZENROWS's ZENROWS_GET_CONCURRENCY_STATUS_DETAILED tool input.
 */
type ZENROWS_GET_CONCURRENCY_STATUS_DETAILED_INPUT = object;

/**
 * Type of ZENROWS's ZENROWS_GET_CONCURRENCY_STATUS_DETAILED tool output.
 */
type ZENROWS_GET_CONCURRENCY_STATUS_DETAILED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Concurrency Limit
       * @description Maximum number of concurrent requests allowed
       * @default null
       */
      concurrency_limit: number | null;
      /**
       * Concurrency Remaining
       * @description Number of concurrent requests remaining
       * @default null
       */
      concurrency_remaining: number | null;
      /**
       * Status
       * @description Current API status
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
 * Type of ZENROWS's ZENROWS_GET_ORIGINAL_STATUS tool input.
 */
type ZENROWS_GET_ORIGINAL_STATUS_INPUT = {
  /**
   * Url
   * @description The URL of the website to check the original status code
   */
  url?: string;
};

/**
 * Type of ZENROWS's ZENROWS_GET_ORIGINAL_STATUS tool output.
 */
type ZENROWS_GET_ORIGINAL_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Headers
       * @description The complete response headers
       * @default null
       */
      headers: {
          [key: string]: unknown;
      } | null;
      /**
       * Original Status
       * @description The original HTTP status code from the target website
       * @default null
       */
      original_status: string | null;
      /**
       * Response Body
       * @description The full response body from the target website
       * @default null
       */
      response_body: string | null;
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
 * Type of ZENROWS's ZENROWS_GET_PDF_FROM_URL tool input.
 */
type ZENROWS_GET_PDF_FROM_URL_INPUT = {
  /**
   * Premium Proxy
   * @description Whether to use premium proxies
   * @default false
   */
  premium_proxy: boolean | null;
  /**
   * Url
   * @description The URL of the webpage to convert to PDF
   */
  url?: string;
  /**
   * Wait
   * @description Time to wait before generating PDF in milliseconds
   * @default null
   */
  wait: number | null;
};

/**
 * Type of ZENROWS's ZENROWS_GET_PDF_FROM_URL tool output.
 */
type ZENROWS_GET_PDF_FROM_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pdf Content
       * @description The PDF content as base64 encoded string
       */
      pdf_content: string;
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
 * Type of ZENROWS's ZENROWS_GET_PLAINTEXT tool input.
 */
type ZENROWS_GET_PLAINTEXT_INPUT = {
  /**
   * Js Render
   * @description Enable JavaScript rendering
   * @default false
   */
  js_render: boolean;
  /**
   * Premium Proxy
   * @description Use premium proxy
   * @default false
   */
  premium_proxy: boolean;
  /**
   * Url
   * @description The URL of the webpage to extract text from
   */
  url?: string;
  /**
   * Wait
   * @description Time to wait for JavaScript execution in milliseconds
   * @default 0
   */
  wait: number;
};

/**
 * Type of ZENROWS's ZENROWS_GET_PLAINTEXT tool output.
 */
type ZENROWS_GET_PLAINTEXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The extracted plain text content from the webpage
       */
      content: string;
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
 * Type of ZENROWS's ZENROWS_GET_REAL_ESTATE_DATA tool input.
 */
type ZENROWS_GET_REAL_ESTATE_DATA_INPUT = {
  /**
   * Country
   * @description Optional: Target specific country. For Zillow, use 'us'. For Idealista, it's determined by the TLD.
   * @default null
   */
  country: string | null;
  /**
   * Language
   * @description Optional: Language code for Idealista results. Supported values: en, es, ca, it, pt, fr, de, da, fi, nb, nl, pl, ro, ru, sv, el, zh, uk.
   * @default null
   */
  language: string | null;
  /**
   * Platform
   * @description The real estate platform to fetch data from. Currently supports 'zillow' or 'idealista'.
   */
  platform?: string;
  /**
   * Property Id
   * @description The property ID from the respective platform. For Zillow, it's the ZPID (7-10 digits). For Idealista, it's the property ID from the URL.
   */
  property_id?: string;
  /**
   * Tld
   * @description Optional: Top-level domain for Idealista (com, it, pt). Default is com.
   * @default null
   */
  tld: string | null;
};

/**
 * Type of ZENROWS's ZENROWS_GET_REAL_ESTATE_DATA tool output.
 */
type ZENROWS_GET_REAL_ESTATE_DATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Property address
       * @default null
       */
      address: string | null;
      /**
       * Agency Name
       * @description Name of the listing agency
       * @default null
       */
      agency_name: string | null;
      /**
       * Agent Name
       * @description Name of the listing agent
       * @default null
       */
      agent_name: string | null;
      /**
       * Agent Phone
       * @description Contact phone number
       * @default null
       */
      agent_phone: string | null;
      /**
       * Bathrooms
       * @description Number of bathrooms
       * @default null
       */
      bathrooms: number | null;
      /**
       * Bedrooms
       * @description Number of bedrooms
       * @default null
       */
      bedrooms: number | null;
      /**
       * City
       * @description City where the property is located
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description Country where the property is located
       * @default null
       */
      country: string | null;
      /**
       * Currency
       * @description Currency of the price
       * @default null
       */
      currency: string | null;
      /**
       * Description
       * @description Property description
       * @default null
       */
      description: string | null;
      /**
       * Features
       * @description List of property features
       * @default null
       */
      features: {
          /**
           * Name
           * @description Name of the feature
           */
          name: string;
          /**
           * Value
           * @description Value of the feature
           * @default null
           */
          value: string | null;
      }[] | null;
      /**
       * Images
       * @description List of property image URLs
       * @default null
       */
      images: string[] | null;
      /**
       * Last Updated
       * @description Last update timestamp
       * @default null
       */
      last_updated: string | null;
      /**
       * Latitude
       * @description Property latitude
       * @default null
       */
      latitude: number | null;
      /**
       * Living Area
       * @description Living area size
       * @default null
       */
      living_area: number | null;
      /**
       * Longitude
       * @description Property longitude
       * @default null
       */
      longitude: number | null;
      /**
       * Lot Size
       * @description Lot size
       * @default null
       */
      lot_size: number | null;
      /**
       * Platform
       * @description Platform from which the data was fetched
       */
      platform: string;
      /**
       * Price
       * @description Property price
       * @default null
       */
      price: number | null;
      /**
       * Property Id
       * @description Unique identifier of the property
       */
      property_id: string;
      /**
       * Property Type
       * @description Type of property
       * @default null
       */
      property_type: string | null;
      /**
       * State
       * @description State/province where the property is located
       * @default null
       */
      state: string | null;
      /**
       * Status
       * @description Current status of the property
       * @default null
       */
      status: string | null;
      /**
       * Url
       * @description URL to the property listing
       * @default null
       */
      url: string | null;
      /**
       * Year Built
       * @description Year the property was built
       * @default null
       */
      year_built: number | null;
      /**
       * Zipcode
       * @description ZIP/Postal code
       * @default null
       */
      zipcode: string | null;
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
 * Type of ZENROWS's ZENROWS_GET_RESPONSE_COMPRESSION tool input.
 */
type ZENROWS_GET_RESPONSE_COMPRESSION_INPUT = {
  /**
   * Custom Headers
   * @description Optional custom headers to include in the request. The Accept-Encoding header will be automatically set.
   * @default null
   */
  custom_headers: {
      [key: string]: string;
  } | null;
  /**
   * Url
   * @description The URL to fetch content from with compression enabled
   */
  url?: string;
};

/**
 * Type of ZENROWS's ZENROWS_GET_RESPONSE_COMPRESSION tool output.
 */
type ZENROWS_GET_RESPONSE_COMPRESSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Compressed
       * @description Whether the response was compressed
       * @default false
       */
      compressed: boolean;
      /**
       * Compression Info
       * @description Information about the compression used in the response
       */
      compression_info?: {
          [key: string]: string;
      };
      /**
       * Headers
       * @description All response headers from the request
       */
      headers?: {
          [key: string]: string;
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
 * Type of ZENROWS's ZENROWS_GET_RESPONSE_HEADERS tool input.
 */
type ZENROWS_GET_RESPONSE_HEADERS_INPUT = {
  /**
   * Url
   * @description The URL to scrape and get response headers from
   */
  url?: string;
};

/**
 * Type of ZENROWS's ZENROWS_GET_RESPONSE_HEADERS tool output.
 */
type ZENROWS_GET_RESPONSE_HEADERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Concurrency Limit
       * @description Maximum concurrent requests allowed by your plan
       * @default null
       */
      concurrency_limit: string | null;
      /**
       * Concurrency Remaining
       * @description Number of additional concurrent requests you can make
       * @default null
       */
      concurrency_remaining: string | null;
      /**
       * Final Url
       * @description Final URL after any redirects
       * @default null
       */
      final_url: string | null;
      /**
       * Request Cost
       * @description Cost of the request
       * @default null
       */
      request_cost: string | null;
      /**
       * Request Id
       * @description Unique identifier for the request
       * @default null
       */
      request_id: string | null;
      /**
       * Zr Headers
       * @description All headers prefixed with Zr- from the original response
       */
      zr_headers?: {
          [key: string]: string;
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
 * Type of ZENROWS's ZENROWS_GET_SESSION_ID tool input.
 */
type ZENROWS_GET_SESSION_ID_INPUT = {
  /**
   * Premium Proxy
   * @description Whether to use premium proxies
   * @default false
   */
  premium_proxy: boolean | null;
  /**
   * Session Id
   * @description A number between 1 and 99999 to maintain the same IP address across requests
   */
  session_id?: number;
  /**
   * Url
   * @description The target URL to scrape
   */
  url?: string;
};

/**
 * Type of ZENROWS's ZENROWS_GET_SESSION_ID tool output.
 */
type ZENROWS_GET_SESSION_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body
       * @description The response body from the target URL
       */
      body: string;
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
 * Type of ZENROWS's ZENROWS_GET_WALMART_PRODUCT tool input.
 */
type ZENROWS_GET_WALMART_PRODUCT_INPUT = {
  /**
   * Js Render
   * @description Enable JavaScript rendering for dynamic content
   * @default true
   */
  js_render: boolean | null;
  /**
   * Url
   * @description The Walmart product URL to scrape
   */
  url?: string;
};

/**
 * Type of ZENROWS's ZENROWS_GET_WALMART_PRODUCT tool output.
 */
type ZENROWS_GET_WALMART_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Brand
       * @description Product brand name
       * @default null
       */
      brand: string | null;
      /**
       * Category Breadcrumb
       * @description List of product categories
       * @default null
       */
      category_breadcrumb: string[] | null;
      /**
       * Fast Track Message
       * @description Delivery information
       * @default null
       */
      fast_track_message: string | null;
      /**
       * Fulfilled By Walmart
       * @description Whether sold by Walmart
       * @default null
       */
      fulfilled_by_walmart: boolean | null;
      /**
       * Gtin
       * @description Global Trade Item Number
       * @default null
       */
      gtin: string | null;
      /**
       * Price Currency Code
       * @description Currency code (e.g., 'USD')
       * @default null
       */
      price_currency_code: string | null;
      /**
       * Price Currency Symbol
       * @description Currency symbol
       * @default null
       */
      price_currency_symbol: string | null;
      /**
       * Product Images
       * @description List of product image URLs
       * @default null
       */
      product_images: string[] | null;
      /**
       * Product Name
       * @description Full product name/title
       * @default null
       */
      product_name: string | null;
      /**
       * Product Price
       * @description Current price
       * @default null
       */
      product_price: number | null;
      /**
       * Product Price Before Discount
       * @description Original price if discounted
       * @default null
       */
      product_price_before_discount: number | null;
      /**
       * Product Url
       * @description Original product URL
       * @default null
       */
      product_url: string | null;
      /**
       * Rating Score
       * @description Product rating (0-5)
       * @default null
       */
      rating_score: number | null;
      /**
       * Review Count
       * @description Number of reviews
       * @default null
       */
      review_count: number | null;
      /**
       * Sku
       * @description Product SKU/ID
       * @default null
       */
      sku: string | null;
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
 * Type of ZENROWS's ZENROWS_SCRAPE_URL tool input.
 */
type ZENROWS_SCRAPE_URL_INPUT = {
  /**
   * Url
   * @description The url to be scraped.
   */
  url?: string;
};

/**
 * Type of ZENROWS's ZENROWS_SCRAPE_URL tool output.
 */
type ZENROWS_SCRAPE_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Scraped Data
       * @description The body of the scraped page.
       */
      scraped_data: {
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
 * Type of ZENROWS's ZENROWS_SCRAPE_URL_AUTOPARSE tool input.
 */
type ZENROWS_SCRAPE_URL_AUTOPARSE_INPUT = {
  /**
   * Js Render
   * @description Enable JavaScript rendering for dynamic content.
   * @default true
   */
  js_render: boolean;
  /**
   * Premium Proxy
   * @description Use premium proxy for better success rate.
   * @default true
   */
  premium_proxy: boolean;
  /**
   * Url
   * @description The URL to be scraped and automatically parsed.
   */
  url?: string;
  /**
   * Wait
   * @description Time to wait for JavaScript execution in seconds.
   * @default 5
   */
  wait: number | null;
};

/**
 * Type of ZENROWS's ZENROWS_SCRAPE_URL_AUTOPARSE tool output.
 */
type ZENROWS_SCRAPE_URL_AUTOPARSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Parsed Data
       * @description The automatically parsed structured data from the webpage.
       */
      parsed_data: {
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
 * Type of ZENROWS's ZENROWS_SCRAPE_URL_HTML tool input.
 */
type ZENROWS_SCRAPE_URL_HTML_INPUT = {
  /**
   * Custom Headers
   * @description Custom HTTP headers to include in the request
   * @default null
   */
  custom_headers: {
      [key: string]: string;
  } | null;
  /**
   * Js Render
   * @description Enable JavaScript rendering for dynamic content
   * @default false
   */
  js_render: boolean | null;
  /**
   * Original Status
   * @description Return original HTTP status code
   * @default false
   */
  original_status: boolean | null;
  /**
   * Premium Proxy
   * @description Use premium proxies for the request
   * @default false
   */
  premium_proxy: boolean | null;
  /**
   * Proxy Country
   * @description Country code for proxy location (requires premium_proxy)
   * @default null
   */
  proxy_country: string | null;
  /**
   * Session Id
   * @description Session ID to maintain the same IP across requests
   * @default null
   */
  session_id: string | null;
  /**
   * Url
   * Format: uri
   * @description The URL to scrape content from
   */
  url?: string;
  /**
   * Wait
   * @description Time to wait in milliseconds after page load
   * @default null
   */
  wait: number | null;
  /**
   * Wait For
   * @description CSS selector to wait for before returning content
   * @default null
   */
  wait_for: string | null;
};

/**
 * Type of ZENROWS's ZENROWS_SCRAPE_URL_HTML tool output.
 */
type ZENROWS_SCRAPE_URL_HTML_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Final Url
       * @description Final URL after any redirects
       */
      final_url: string;
      /**
       * Headers
       * @description Response headers from the request
       */
      headers: {
          [key: string]: string;
      };
      /**
       * Html
       * @description The raw HTML content of the webpage
       */
      html: string;
      /**
       * Status Code
       * @description HTTP status code of the response
       */
      status_code: number;
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
 * Type of ZENROWS's ZENROWS_SCRAPE_WITH_CSS_SELECTORS tool input.
 */
type ZENROWS_SCRAPE_WITH_CSS_SELECTORS_INPUT = {
  /**
   * Css Selectors
   * @description A dictionary of CSS selectors where keys are labels and values are the selectors
   */
  css_selectors?: {
      [key: string]: string;
  };
  /**
   * Js Render
   * @description Enable JavaScript rendering for dynamic content
   * @default false
   */
  js_render: boolean;
  /**
   * Premium Proxy
   * @description Use premium proxies for the request
   * @default false
   */
  premium_proxy: boolean;
  /**
   * Url
   * @description The URL of the webpage to scrape
   */
  url?: string;
  /**
   * Wait
   * @description Time to wait in milliseconds before scraping
   * @default null
   */
  wait: number | null;
  /**
   * Wait For
   * @description CSS selector to wait for before scraping
   * @default null
   */
  wait_for: string | null;
};

/**
 * Type of ZENROWS's ZENROWS_SCRAPE_WITH_CSS_SELECTORS tool output.
 */
type ZENROWS_SCRAPE_WITH_CSS_SELECTORS_OUTPUT = {
  /**
   * Data
   * @description The scraped data where keys match the input selectors
   */
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
 * Type of ZENROWS's ZENROWS_SCREENSHOT_URL tool input.
 */
type ZENROWS_SCREENSHOT_URL_INPUT = {
  /**
   * Screenshot Format
   * @description Image format for the screenshot. Either 'png' or 'jpeg'.
   * @default png
   */
  screenshot_format: string | null;
  /**
   * Screenshot Fullpage
   * @description Set to true to capture the entire page instead of just the visible viewport.
   * @default false
   */
  screenshot_fullpage: boolean | null;
  /**
   * Screenshot Quality
   * @description Image quality (1-100). Only applicable when format is 'jpeg'.
   * @default null
   */
  screenshot_quality: number | null;
  /**
   * Screenshot Selector
   * @description CSS selector to capture a specific element. Cannot be used with screenshot_fullpage.
   * @default null
   */
  screenshot_selector: string | null;
  /**
   * Url
   * @description The URL of the webpage to capture screenshot.
   */
  url?: string;
  /**
   * Wait
   * @description Time to wait before taking screenshot (in milliseconds).
   * @default null
   */
  wait: number | null;
};

/**
 * Type of ZENROWS's ZENROWS_SCREENSHOT_URL tool output.
 */
type ZENROWS_SCREENSHOT_URL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Screenshot Data
       * @description Base64 encoded screenshot data.
       */
      screenshot_data: string;
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
 * Type map of all available tool input types for toolkit "ZENROWS".
 */
export type ZENROWS_TOOL_INPUTS = {
  GET_API_USAGE: ZENROWS_GET_API_USAGE_INPUT
  GET_CONCURRENCY_STATUS: ZENROWS_GET_CONCURRENCY_STATUS_INPUT
  GET_CONCURRENCY_STATUS_DETAILED: ZENROWS_GET_CONCURRENCY_STATUS_DETAILED_INPUT
  GET_ORIGINAL_STATUS: ZENROWS_GET_ORIGINAL_STATUS_INPUT
  GET_PDF_FROM_URL: ZENROWS_GET_PDF_FROM_URL_INPUT
  GET_PLAINTEXT: ZENROWS_GET_PLAINTEXT_INPUT
  GET_REAL_ESTATE_DATA: ZENROWS_GET_REAL_ESTATE_DATA_INPUT
  GET_RESPONSE_COMPRESSION: ZENROWS_GET_RESPONSE_COMPRESSION_INPUT
  GET_RESPONSE_HEADERS: ZENROWS_GET_RESPONSE_HEADERS_INPUT
  GET_SESSION_ID: ZENROWS_GET_SESSION_ID_INPUT
  GET_WALMART_PRODUCT: ZENROWS_GET_WALMART_PRODUCT_INPUT
  SCRAPE_URL: ZENROWS_SCRAPE_URL_INPUT
  SCRAPE_URL_AUTOPARSE: ZENROWS_SCRAPE_URL_AUTOPARSE_INPUT
  SCRAPE_URL_HTML: ZENROWS_SCRAPE_URL_HTML_INPUT
  SCRAPE_WITH_CSS_SELECTORS: ZENROWS_SCRAPE_WITH_CSS_SELECTORS_INPUT
  SCREENSHOT_URL: ZENROWS_SCREENSHOT_URL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ZENROWS".
 */
export type ZENROWS_TOOL_OUTPUTS = {
  GET_API_USAGE: ZENROWS_GET_API_USAGE_OUTPUT
  GET_CONCURRENCY_STATUS: ZENROWS_GET_CONCURRENCY_STATUS_OUTPUT
  GET_CONCURRENCY_STATUS_DETAILED: ZENROWS_GET_CONCURRENCY_STATUS_DETAILED_OUTPUT
  GET_ORIGINAL_STATUS: ZENROWS_GET_ORIGINAL_STATUS_OUTPUT
  GET_PDF_FROM_URL: ZENROWS_GET_PDF_FROM_URL_OUTPUT
  GET_PLAINTEXT: ZENROWS_GET_PLAINTEXT_OUTPUT
  GET_REAL_ESTATE_DATA: ZENROWS_GET_REAL_ESTATE_DATA_OUTPUT
  GET_RESPONSE_COMPRESSION: ZENROWS_GET_RESPONSE_COMPRESSION_OUTPUT
  GET_RESPONSE_HEADERS: ZENROWS_GET_RESPONSE_HEADERS_OUTPUT
  GET_SESSION_ID: ZENROWS_GET_SESSION_ID_OUTPUT
  GET_WALMART_PRODUCT: ZENROWS_GET_WALMART_PRODUCT_OUTPUT
  SCRAPE_URL: ZENROWS_SCRAPE_URL_OUTPUT
  SCRAPE_URL_AUTOPARSE: ZENROWS_SCRAPE_URL_AUTOPARSE_OUTPUT
  SCRAPE_URL_HTML: ZENROWS_SCRAPE_URL_HTML_OUTPUT
  SCRAPE_WITH_CSS_SELECTORS: ZENROWS_SCRAPE_WITH_CSS_SELECTORS_OUTPUT
  SCREENSHOT_URL: ZENROWS_SCREENSHOT_URL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ZENROWS toolkit.
 */
export const ZENROWS = {
  slug: "zenrows",
  tools: {
    /**
     * This tool retrieves the current api usage statistics and limits for your zenrows account. it is an independent action that requires no additional parameters besides authentication. it is useful for monitoring api usage and ensuring that the account has sufficient remaining credits.
     */
    GET_API_USAGE: "ZENROWS_GET_API_USAGE",
    /**
     * This tool retrieves the current concurrency status of your zenrows api usage. it reports the maximum number of concurrent requests allowed by your plan and the number of available concurrent request slots. it is useful for monitoring api usage, implementing rate limiting, debugging request issues, and capacity planning.
     */
    GET_CONCURRENCY_STATUS: "ZENROWS_GET_CONCURRENCY_STATUS",
    /**
     * This tool provides detailed information about the current concurrency status and limits of your zenrows account by making a request to the api and analyzing the response headers. it is essential for monitoring real-time api usage, managing concurrent requests, and ensuring optimal performance within plan limits.
     */
    GET_CONCURRENCY_STATUS_DETAILED: "ZENROWS_GET_CONCURRENCY_STATUS_DETAILED",
    /**
     * This tool retrieves the original http status code returned by the target website, which is useful for debugging purposes. it returns the original status code in the response headers under 'x-zenrows-original-status'. it can also provide the full response body and error messages, helping with debugging scraping issues, verifying website responses, monitoring availability, and understanding website behavior.
     */
    GET_ORIGINAL_STATUS: "ZENROWS_GET_ORIGINAL_STATUS",
    /**
     * This tool generates a pdf version of the scraped content from a given url. it requires javascript rendering to be enabled and sets the response type to pdf, making it ideal for archiving web pages, creating documentation, generating reports, or saving articles for offline reading.
     */
    GET_PDF_FROM_URL: "ZENROWS_GET_PDF_FROM_URL",
    /**
     * This tool extracts plain text content from a webpage using the zenrows api. by using the response type=plaintext parameter, it strips html tags and formats the content into clean, plain text. it's useful for extracting readable content for nlp, summarization, or archiving purposes.
     */
    GET_PLAINTEXT: "ZENROWS_GET_PLAINTEXT",
    /**
     * A specialized tool for extracting structured data from real estate platforms like zillow and idealista. it leverages zenrows' real estate api to fetch comprehensive property information, including property details, location information, features, seller details, and more, in a structured format.
     */
    GET_REAL_ESTATE_DATA: "ZENROWS_GET_REAL_ESTATE_DATA",
    /**
     * A tool to fetch content from a url using the zenrows api with compression enabled to optimize bandwidth usage and improve performance. it supports gzip, deflate, and br compression encodings, handles decompression automatically, and provides compression statistics along with the decompressed content.
     */
    GET_RESPONSE_COMPRESSION: "ZENROWS_GET_RESPONSE_COMPRESSION",
    /**
     * A tool to retrieve and parse response headers from zenrows api requests. it provides critical metadata such as concurrency limits, available request slots, request cost, unique request id, and final url after redirects, which is essential for monitoring usage, debugging, and optimizing requests.
     */
    GET_RESPONSE_HEADERS: "ZENROWS_GET_RESPONSE_HEADERS",
    /**
     * This tool implements zenrows' session management functionality to maintain the same ip address across multiple requests for up to 10 minutes. it supports parameters like url, session id, and premium proxy, and is useful for maintaining consistent scraping sessions, simulating real user behavior, and avoiding detection by anti-bot systems.
     */
    GET_SESSION_ID: "ZENROWS_GET_SESSION_ID",
    /**
     * This tool allows users to extract detailed product information from walmart using zenrows' specialized e-commerce scraping api. it provides structured data for walmart products including product details, pricing, availability, and more.
     */
    GET_WALMART_PRODUCT: "ZENROWS_GET_WALMART_PRODUCT",
    /**
     * Scrape and extract data from a specified url. this action allows you to collect and process web data effortlessly using the zenrows api.
     */
    SCRAPE_URL: "ZENROWS_SCRAPE_URL",
    /**
     * The zenrows scrape url autoparse tool automatically parses and extracts structured data from any given url using intelligent parsing capabilities. it eliminates the need for manual css selectors by auto-identifying relevant content on web pages, returning data such as titles, main content, meta descriptions, images, links, prices, and contact information in a structured json format.
     */
    SCRAPE_URL_AUTOPARSE: "ZENROWS_SCRAPE_URL_AUTOPARSE",
    /**
     * This tool extracts raw html data from a given url using zenrows' universal scraper api. it focuses on retrieving the pure html content of the webpage without automatic parsing or data extraction. it supports parameters such as js render for enabling javascript rendering, custom headers for custom http headers, premium proxy for using premium proxies, and session id for maintaining the same ip across multiple requests.
     */
    SCRAPE_URL_HTML: "ZENROWS_SCRAPE_URL_HTML",
    /**
     * This tool allows users to scrape specific elements from a webpage using css selectors. it is particularly useful for targeted data extraction rather than retrieving the entire page content. the endpoint takes a url and a json object containing css selectors for parsing elements such as titles, links, images, and prices, and includes optional parameters like using premium proxies, specifying response wait times, and custom headers among others.
     */
    SCRAPE_WITH_CSS_SELECTORS: "ZENROWS_SCRAPE_WITH_CSS_SELECTORS",
    /**
     * A tool to capture screenshots of web pages using zenrows api. this tool allows you to take screenshots of entire web pages or specific elements, with customizable options for format and quality.
     */
    SCREENSHOT_URL: "ZENROWS_SCREENSHOT_URL",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ZENROWS".
 */
export type ZENROWS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ZENROWS".
 */
export type ZENROWS_TRIGGER_EVENTS = {}
