// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of OPENGRAPH_IO's OPENGRAPH_IO_EXTRACT_SITE tool input.
 */
type OPENGRAPH_IO_EXTRACT_SITE_INPUT = {
  /**
   * Accept Lang
   * @description Preferred language for extracted data (e.g., 'en-US')
   * @default null
   */
  accept_lang: string | null;
  /**
   * Full Render
   * @description Render the page in a browser before extraction
   * @default null
   */
  full_render: boolean | null;
  /**
   * Scrape
   * @description Scrape all data instead of just Open Graph and meta tags
   * @default null
   */
  scrape: boolean | null;
  /**
   * Site
   * Format: uri
   * @description URL of the site to extract metadata from
   */
  site?: string;
  /**
   * Use Proxy
   * @description Use a proxy during extraction
   * @default null
   */
  use_proxy: boolean | null;
};

/**
 * Type of OPENGRAPH_IO's OPENGRAPH_IO_EXTRACT_SITE tool output.
 */
type OPENGRAPH_IO_EXTRACT_SITE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain
       * @description Domain of the extracted site.
       */
      domain: string;
      /**
       * Html Inferred
       * @description Data extracted from HTML where OG tags are missing.
       * @default null
       */
      htmlInferred: {
          [key: string]: unknown;
      } | null;
      /**
       * Hybrid Graph
       * @description All returned fields from Open Graph, meta, and other signals.
       * @default null
       */
      hybridGraph: {
          [key: string]: unknown;
      } | null;
      /**
       * O Embed
       * @description oEmbed metadata if present.
       * @default null
       */
      oEmbed: {
          [key: string]: unknown;
      } | null;
      /**
       * Open Graph
       * @description Open Graph-specific fields extracted from content.
       * @default null
       */
      openGraph: {
          [key: string]: unknown;
      } | null;
      /**
       * Request Url
       * @description Final URL used for data request (after redirects).
       */
      requestUrl: string;
      /**
       * Twitter Card
       * @description Twitter-specific metadata if present.
       * @default null
       */
      twitterCard: {
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
 * Type of OPENGRAPH_IO's OPENGRAPH_IO_GET_OPEN_GRAPH tool input.
 */
type OPENGRAPH_IO_GET_OPEN_GRAPH_INPUT = {
  /**
   * Accept Lang
   * @description Language preference for site content, e.g., 'en'
   * @default null
   */
  accept_lang: string | null;
  /**
   * Cache Ok
   * @description Set to false to force refresh from the original source
   * @default true
   */
  cache_ok: boolean;
  /**
   * Full Render
   * @description Set to true to use headless browser rendering
   * @default false
   */
  full_render: boolean;
  /**
   * Site
   * @description The target site URL to fetch Open Graph metadata for
   */
  site?: string;
};

/**
 * Type of OPENGRAPH_IO's OPENGRAPH_IO_GET_OPEN_GRAPH tool output.
 */
type OPENGRAPH_IO_GET_OPEN_GRAPH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cache Url
       * @description Cache location
       */
      cacheUrl: string;
      /**
       * Html Inferred
       * @description Tags inferred from HTML when OG tags missing
       */
      htmlInferred: {
          [key: string]: unknown;
      };
      /**
       * Hybrid Graph
       * @description Detected OpenGraph tags (title, description, image, etc.)
       */
      hybridGraph: {
          [key: string]: unknown;
      };
      /**
       * O Embed
       * @description oEmbed metadata if available
       */
      oEmbed: {
          [key: string]: unknown;
      };
      /**
       * Open Graph
       * @description OpenGraph tags as found on the page
       */
      openGraph: {
          [key: string]: unknown;
      };
      /**
       * Request Url
       * @description Actual URL requested
       */
      requestUrl: string;
      /**
       * Success
       * @description Whether request succeeded
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
 * Type of OPENGRAPH_IO's OPENGRAPH_IO_SCRAPE_SITE tool input.
 */
type OPENGRAPH_IO_SCRAPE_SITE_INPUT = {
  /**
   * Cache Ok
   * @description If false, forces a fresh scrape instead of returning cached data. Defaults to using cache if not set.
   * @default null
   */
  cache_ok: boolean | null;
  /**
   * Full Render
   * @description If true, performs a full page render (runs JavaScript). Defaults to a lightweight scrape if not set.
   * @default null
   */
  full_render: boolean | null;
  /**
   * Scrape
   * @description If true, forces scraping regardless of cache. Otherwise may return cached result.
   * @default null
   */
  scrape: boolean | null;
  /**
   * Site
   * @description The URL of the site to scrape. This will be URL-encoded by the action. E.g., 'https://example.com'.
   */
  site?: string;
};

/**
 * Type of OPENGRAPH_IO's OPENGRAPH_IO_SCRAPE_SITE tool output.
 */
type OPENGRAPH_IO_SCRAPE_SITE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Html Inferred
       * @description Fallback metadata discovered by scraping regular HTML tags.
       * @default null
       */
      htmlInferred: {
          [key: string]: unknown;
      } | null;
      /**
       * Hybrid Graph
       * @description Parsed OpenGraph and social metadata fields detected on the page.
       * @default null
       */
      hybridGraph: {
          [key: string]: unknown;
      } | null;
      /**
       * O Embed
       * @description oEmbed metadata, if any.
       * @default null
       */
      oEmbed: {
          [key: string]: unknown;
      } | null;
      /**
       * Open Graph
       * @description Raw OpenGraph properties, if detected.
       * @default null
       */
      openGraph: {
          [key: string]: unknown;
      } | null;
      /**
       * Request Url
       * @description The actual URL that was scraped.
       * @default null
       */
      requestUrl: string | null;
      /**
       * Twitter Card
       * @description Twitter card metadata detected, if any.
       * @default null
       */
      twitterCard: {
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
 * Type of OPENGRAPH_IO's OPENGRAPH_IO_SCREENSHOT_SITE tool input.
 */
type OPENGRAPH_IO_SCREENSHOT_SITE_INPUT = {
  /**
   * Delay
   * @description Delay before capturing screenshot in milliseconds, must be non-negative.
   * @default null
   */
  delay: number | null;
  /**
   * Fullpage
   * @description Capture the full scrollable page. Defaults to false.
   * @default false
   */
  fullpage: boolean;
  /**
   * Site
   * @description The website URL to capture. Must be a valid HTTP or HTTPS URI.
   */
  site?: string;
  /**
   * Viewport Height
   * @description Viewport height in pixels, must be non-negative.
   * @default null
   */
  viewport_height: number | null;
  /**
   * Viewport Width
   * @description Viewport width in pixels, must be non-negative.
   * @default null
   */
  viewport_width: number | null;
};

/**
 * Type of OPENGRAPH_IO's OPENGRAPH_IO_SCREENSHOT_SITE tool output.
 */
type OPENGRAPH_IO_SCREENSHOT_SITE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if the screenshot could not be generated.
       * @default null
       */
      error: string | null;
      /**
       * Screenshot
       * @description URL of the generated screenshot image.
       */
      screenshot: string;
      /**
       * Success
       * @description Whether the screenshot was successfully generated.
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
 * Type map of all available tool input types for toolkit "OPENGRAPH_IO".
 */
export type OPENGRAPH_IO_TOOL_INPUTS = {
  EXTRACT_SITE: OPENGRAPH_IO_EXTRACT_SITE_INPUT
  GET_OPEN_GRAPH: OPENGRAPH_IO_GET_OPEN_GRAPH_INPUT
  SCRAPE_SITE: OPENGRAPH_IO_SCRAPE_SITE_INPUT
  SCREENSHOT_SITE: OPENGRAPH_IO_SCREENSHOT_SITE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "OPENGRAPH_IO".
 */
export type OPENGRAPH_IO_TOOL_OUTPUTS = {
  EXTRACT_SITE: OPENGRAPH_IO_EXTRACT_SITE_OUTPUT
  GET_OPEN_GRAPH: OPENGRAPH_IO_GET_OPEN_GRAPH_OUTPUT
  SCRAPE_SITE: OPENGRAPH_IO_SCRAPE_SITE_OUTPUT
  SCREENSHOT_SITE: OPENGRAPH_IO_SCREENSHOT_SITE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's OPENGRAPH_IO toolkit.
 */
export const OPENGRAPH_IO = {
  slug: "opengraph_io",
  tools: {
    /**
     * Tool to extract site metadata. use when you need to retrieve open graph and other meta signals from a website.
     */
    EXTRACT_SITE: "OPENGRAPH_IO_EXTRACT_SITE",
    /**
     * Tool to retrieve open graph metadata for a specified website url. use when you need to extract page metadata such as title, description, and image for preview generation.
     */
    GET_OPEN_GRAPH: "OPENGRAPH_IO_GET_OPEN_GRAPH",
    /**
     * Tool to scrape a site for its raw html and social/opengraph metadata. use when you need the full page content and metadata. use after confirming the url.
     */
    SCRAPE_SITE: "OPENGRAPH_IO_SCRAPE_SITE",
    /**
     * Tool to capture a screenshot of a website. use when you need a visual snapshot of a url after confirming its validity.
     */
    SCREENSHOT_SITE: "OPENGRAPH_IO_SCREENSHOT_SITE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "OPENGRAPH_IO".
 */
export type OPENGRAPH_IO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "OPENGRAPH_IO".
 */
export type OPENGRAPH_IO_TRIGGER_EVENTS = {}
