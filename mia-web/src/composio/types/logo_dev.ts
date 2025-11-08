// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LOGO_DEV's LOGO_DEV_GET_LOGO_IMAGE tool input.
 */
type LOGO_DEV_GET_LOGO_IMAGE_INPUT = {
  /**
   * Domain
   * @description The domain to retrieve the logo for (e.g., 'openai.com').
   */
  domain?: string;
  /**
   * Token
   * @description Public API access token for the request, format: pk_{token}.
   */
  token?: string;
};

/**
 * Type of LOGO_DEV's LOGO_DEV_GET_LOGO_IMAGE tool output.
 */
type LOGO_DEV_GET_LOGO_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Type
       * @description The Content-Type header of the response, e.g., 'image/png' or 'image/svg+xml'.
       */
      content_type: string;
      /**
       * Image Data
       * Format: binary
       * @description Raw image bytes of the logo.
       */
      image_data: string;
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
 * Type of LOGO_DEV's LOGO_DEV_SEARCH_BRAND tool input.
 */
type LOGO_DEV_SEARCH_BRAND_INPUT = {
  /**
   * Country
   * @description Country code to filter brands by region
   * @default null
   */
  country: string | null;
  /**
   * Industry
   * @description Industry category to filter brands
   * @default null
   */
  industry: string | null;
  /**
   * Limit
   * @description Maximum number of results to return (>=1)
   * @default 10
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of results to skip for pagination (>=0)
   * @default 0
   */
  offset: number | null;
  /**
   * Query
   * @description Brand name or keyword to search for
   */
  query?: string;
};

/**
 * Type of LOGO_DEV's LOGO_DEV_SEARCH_BRAND tool output.
 */
type LOGO_DEV_SEARCH_BRAND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Brands
       * @description List of matching brands
       */
      brands: {
          /**
           * Country
           * @description Brand's country code
           * @default null
           */
          country: string | null;
          /**
           * Description
           * @description Brand description
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the brand
           */
          id: string;
          /**
           * Industry
           * @description Industry category of the brand
           * @default null
           */
          industry: string | null;
          /**
           * Logo Url
           * @description URL to brand logo image
           */
          logo_url: string;
          /**
           * Name
           * @description Brand name
           */
          name: string;
          /**
           * Website Url
           * @description Official website of the brand
           * @default null
           */
          website_url: string | null;
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
 * Type map of all available tool input types for toolkit "LOGO_DEV".
 */
export type LOGO_DEV_TOOL_INPUTS = {
  GET_LOGO_IMAGE: LOGO_DEV_GET_LOGO_IMAGE_INPUT
  SEARCH_BRAND: LOGO_DEV_SEARCH_BRAND_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LOGO_DEV".
 */
export type LOGO_DEV_TOOL_OUTPUTS = {
  GET_LOGO_IMAGE: LOGO_DEV_GET_LOGO_IMAGE_OUTPUT
  SEARCH_BRAND: LOGO_DEV_SEARCH_BRAND_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LOGO_DEV toolkit.
 */
export const LOGO_DEV = {
  slug: "logo_dev",
  tools: {
    /**
     * Tool to retrieve the logo image for a domain. use when you need the raw image bytes (png or svg) of a specific domain's logo. use after validating the domain string.
     */
    GET_LOGO_IMAGE: "LOGO_DEV_GET_LOGO_IMAGE",
    /**
     * Tool to search for brands based on a query string. use when you need to retrieve a list of matching brands with optional pagination and filters by country or industry.
     */
    SEARCH_BRAND: "LOGO_DEV_SEARCH_BRAND",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LOGO_DEV".
 */
export type LOGO_DEV_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LOGO_DEV".
 */
export type LOGO_DEV_TRIGGER_EVENTS = {}
