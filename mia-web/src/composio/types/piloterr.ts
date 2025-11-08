// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of PILOTERR's PILOTERR_AUCHAN_PRODUCT tool input.
 */
type PILOTERR_AUCHAN_PRODUCT_INPUT = {
  /**
   * Id
   * @description The unique identifier of the Auchan product.
   */
  id?: string;
};

/**
 * Type of PILOTERR's PILOTERR_AUCHAN_PRODUCT tool output.
 */
type PILOTERR_AUCHAN_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Additional Attributes
       * @description Other product-specific attributes.
       */
      additional_attributes?: {
          [key: string]: unknown;
      };
      /**
       * Available
       * @description Whether the product is available.
       */
      available: boolean;
      /**
       * Brand
       * @description Brand of the product.
       */
      brand: string;
      /**
       * Category
       * @description Category of the product.
       */
      category: string;
      /**
       * Description
       * @description Description of the product.
       */
      description: string;
      /**
       * Id
       * @description Product unique identifier.
       */
      id: string;
      /**
       * Images
       * @description Image URLs of the product.
       */
      images: string[];
      /**
       * Price
       * @description Product price.
       */
      price: number;
      /**
       * Title
       * @description Name/title of the product.
       */
      title: string;
      /**
       * Url
       * @description Auchan product page URL.
       */
      url: string;
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
 * Type of PILOTERR's PILOTERR_AUCHAN_SEARCH tool input.
 */
type PILOTERR_AUCHAN_SEARCH_INPUT = {
  /**
   * Page
   * @description Results page number (>=1).
   * @default 1
   */
  page: number;
  /**
   * Query
   * @description Product search term or full Auchan search URL.
   */
  query?: string;
};

/**
 * Type of PILOTERR's PILOTERR_AUCHAN_SEARCH tool output.
 */
type PILOTERR_AUCHAN_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Per Page
       * @description Number of products per page.
       */
      per_page: number;
      /**
       * Products
       * @description List of product results found.
       */
      products: {
          /**
           * Availability
           * @description Availability status of the product.
           */
          availability: string;
          /**
           * Id
           * @description Product ID.
           */
          id: string;
          /**
           * Image
           * @description Image URL of the product.
           */
          image: string;
          /**
           * Name
           * @description Name of the product.
           */
          name: string;
          /**
           * Price
           * @description Price of the product.
           */
          price: string;
          /**
           * Url
           * @description Product detail page URL.
           */
          url: string;
      }[];
      /**
       * Total
       * @description Total number of products found.
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
 * Type of PILOTERR's PILOTERR_GET_PRODUCT_INFO tool input.
 */
type PILOTERR_GET_PRODUCT_INFO_INPUT = {
  /**
   * Id
   * @description Unique product identifier.
   */
  id?: string;
};

/**
 * Type of PILOTERR's PILOTERR_GET_PRODUCT_INFO tool output.
 */
type PILOTERR_GET_PRODUCT_INFO_OUTPUT = {
  /**
   * Data
   * @description Detailed product information.
   */
  data?: {
      /**
       * Company
       * @description Company information for the product.
       */
      company: {
          /**
           * Id
           * @description Unique company identifier.
           */
          id: string;
          /**
           * Name
           * @description Company name.
           */
          name: string;
          /**
           * Website
           * @description Company website URL.
           */
          website: string;
      };
      /**
       * Description
       * @description Product description.
       */
      description: string;
      /**
       * Id
       * @description Unique product identifier.
       */
      id: string;
      /**
       * Image Url
       * @description URL to the product image.
       */
      image_url: string;
      /**
       * Launch Date
       * @description Product launch date.
       */
      launch_date: string;
      /**
       * Name
       * @description Product name.
       */
      name: string;
      /**
       * Status
       * @description Current product status.
       */
      status: string;
      /**
       * Tags
       * @description List of tags associated with the product.
       */
      tags: string[];
      /**
       * Website
       * @description Product website URL.
       */
      website: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Response message from the API.
   */
  message?: string;
  /**
   * Success
   * @description Indicates if the API call was successful.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of PILOTERR's PILOTERR_SEARCH tool input.
 */
type PILOTERR_SEARCH_INPUT = {
  /**
   * Max Price
   * @description Maximum product price filter (must be non-negative).
   * @default null
   */
  max_price: number | null;
  /**
   * Min Price
   * @description Minimum product price filter (must be non-negative).
   * @default null
   */
  min_price: number | null;
  /**
   * Page
   * @description Search results page number (>=1).
   * @default 1
   */
  page: number;
  /**
   * Query
   * @description Search keyword(s) for Bestbuy products.
   */
  query?: string;
};

/**
 * Type of PILOTERR's PILOTERR_SEARCH tool output.
 */
type PILOTERR_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current results page index.
       */
      page: number;
      /**
       * Products
       * @description List of products returned.
       */
      products: {
          /**
           * Availability
           * @description Product availability info.
           */
          availability: string;
          /**
           * Image
           * @description Product image URL.
           */
          image: string;
          /**
           * Name
           * @description Product name.
           */
          name: string;
          /**
           * Price
           * @description Product price.
           */
          price: number;
          /**
           * Rating
           * @description Average product rating.
           * @default null
           */
          rating: number | null;
          /**
           * Reviews
           * @description Number of product reviews.
           * @default null
           */
          reviews: number | null;
          /**
           * Sku
           * @description Product SKU identifier.
           */
          sku: string;
          /**
           * Url
           * @description Product detail URL.
           */
          url: string;
      }[];
      /**
       * Status
       * @description Request status (e.g., 'success').
       */
      status: string;
      /**
       * Total
       * @description Total number of products found.
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
 * Type of PILOTERR's PILOTERR_USAGE_GET tool input.
 */
type PILOTERR_USAGE_GET_INPUT = object;

/**
 * Type of PILOTERR's PILOTERR_USAGE_GET tool output.
 */
type PILOTERR_USAGE_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Period
       * @description Current usage period (e.g., 'monthly').
       */
      period: string;
      /**
       * Remaining
       * @description Number of credits remaining.
       */
      remaining: number;
      /**
       * Reset
       * @description Time until usage resets (ISO 8601 format).
       */
      reset: string;
      /**
       * Total
       * @description Total number of credits allocated.
       */
      total: number;
      /**
       * Used
       * @description Number of credits used.
       */
      used: number;
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
 * Type map of all available tool input types for toolkit "PILOTERR".
 */
export type PILOTERR_TOOL_INPUTS = {
  AUCHAN_PRODUCT: PILOTERR_AUCHAN_PRODUCT_INPUT
  AUCHAN_SEARCH: PILOTERR_AUCHAN_SEARCH_INPUT
  GET_PRODUCT_INFO: PILOTERR_GET_PRODUCT_INFO_INPUT
  SEARCH: PILOTERR_SEARCH_INPUT
  USAGE_GET: PILOTERR_USAGE_GET_INPUT
}

/**
 * Type map of all available tool input types for toolkit "PILOTERR".
 */
export type PILOTERR_TOOL_OUTPUTS = {
  AUCHAN_PRODUCT: PILOTERR_AUCHAN_PRODUCT_OUTPUT
  AUCHAN_SEARCH: PILOTERR_AUCHAN_SEARCH_OUTPUT
  GET_PRODUCT_INFO: PILOTERR_GET_PRODUCT_INFO_OUTPUT
  SEARCH: PILOTERR_SEARCH_OUTPUT
  USAGE_GET: PILOTERR_USAGE_GET_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's PILOTERR toolkit.
 */
export const PILOTERR = {
  slug: "piloterr",
  tools: {
    /**
     * Tool to retrieve detailed auchan product information. use when you have a product id.
     */
    AUCHAN_PRODUCT: "PILOTERR_AUCHAN_PRODUCT",
    /**
     * Tool to search for products on auchan by query or search url. use when you need product listings and details from auchan.
     */
    AUCHAN_SEARCH: "PILOTERR_AUCHAN_SEARCH",
    /**
     * Tool to retrieve detailed product information by product id. use when you need full product details including company info.
     */
    GET_PRODUCT_INFO: "PILOTERR_GET_PRODUCT_INFO",
    /**
     * Tool to search for products on bestbuy by query. use when you need to retrieve bestbuy items by keywords with optional pagination and price filters.
     */
    SEARCH: "PILOTERR_SEARCH",
    /**
     * Tool to get usage information and remaining credits for your piloterr account. use when you need to check account usage and credit details.
     */
    USAGE_GET: "PILOTERR_USAGE_GET",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "PILOTERR".
 */
export type PILOTERR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "PILOTERR".
 */
export type PILOTERR_TRIGGER_EVENTS = {}
