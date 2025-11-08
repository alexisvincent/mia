// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of RETAILED's RETAILED_GET_GOAT_PRICES tool input.
 */
type RETAILED_GET_GOAT_PRICES_INPUT = {
  /**
   * Currency
   * @description Target currency code (ISO 4217) for the pricing.
   * @default null
   */
  currency: string | null;
  /**
   * Product Id
   * @description Unique identifier for the product to fetch prices for.
   */
  product_id?: string;
  /**
   * Size
   * @description Specific product size (if applicable).
   * @default null
   */
  size: string | null;
};

/**
 * Type of RETAILED's RETAILED_GET_GOAT_PRICES tool output.
 */
type RETAILED_GET_GOAT_PRICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Prices
       * @description List of prices for the product.
       */
      prices: {
          /**
           * Currency
           * @description Currency code.
           */
          currency: string;
          /**
           * Last Updated
           * @description Timestamp of the last price update (ISO8601).
           */
          last_updated: string;
          /**
           * Price
           * @description Price for the specified size.
           */
          price: number;
          /**
           * Size
           * @description Product size.
           */
          size: string;
      }[];
      /**
       * Product Id
       * @description The unique identifier for the product.
       */
      product_id: string;
      /**
       * Status
       * @description Status of the request (e.g., success, error).
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
 * Type of RETAILED's RETAILED_GET_STOCKX_SEARCH tool input.
 */
type RETAILED_GET_STOCKX_SEARCH_INPUT = {
  /**
   * Limit
   * @description Number of results per page (default: 10)
   * @default 10
   */
  limit: number;
  /**
   * Page
   * @description Page number for pagination (default: 1)
   * @default 1
   */
  page: number;
  /**
   * Query
   * @description Search term for StockX products
   */
  query?: string;
};

/**
 * Type of RETAILED's RETAILED_GET_STOCKX_SEARCH tool output.
 */
type RETAILED_GET_STOCKX_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information
       */
      pagination: {
          /**
           * Limit
           * @description Number of results per page
           */
          limit: number;
          /**
           * Page
           * @description Current page number
           */
          page: number;
          /**
           * Total
           * @description Total number of matching results
           */
          total: number;
      };
      /**
       * Products
       * @description List of matched StockX products
       */
      products: {
          /**
           * Brand
           * @description Product brand
           */
          brand: string;
          /**
           * Category
           * @description Product category
           */
          category: string;
          /**
           * Highest Bid
           * @description Highest bid price
           */
          highestBid: number;
          /**
           * Id
           * @description StockX product ID
           */
          id: string;
          /**
           * Image
           * @description URL of the product image
           */
          image: string;
          /**
           * Last Sale
           * @description Last sale price
           */
          lastSale: number;
          /**
           * Lowest Ask
           * @description Lowest asking price
           */
          lowestAsk: number;
          /**
           * Name
           * @description Product name
           */
          name: string;
          /**
           * Release Date
           * @description Release date (ISO 8601)
           */
          releaseDate: string;
          /**
           * Url
           * @description StockX product page URL
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
 * Type of RETAILED's RETAILED_GET_STOCKX_TRENDS tool input.
 */
type RETAILED_GET_STOCKX_TRENDS_INPUT = {
  /**
   * Order
   * @description Sort order (ascending or descending)
   * @default desc
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Page
   * @description Page number for pagination (default: 1)
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (default: 20)
   * @default 20
   */
  per_page: number | null;
  /**
   * Product Type
   * @description Filter by product type (e.g., sneakers, streetwear)
   * @default null
   */
  product_type: string | null;
  /**
   * Sort By
   * @description Sort field (e.g., popularity, price)
   * @default null
   */
  sort_by: string | null;
};

/**
 * Type of RETAILED's RETAILED_GET_STOCKX_TRENDS tool output.
 */
type RETAILED_GET_STOCKX_TRENDS_OUTPUT = {
  /**
   * Data
   * @description List of trending StockX product details
   */
  data?: {
      /**
       * Image
       * @description Product image URL
       */
      image: string;
      /**
       * Last Sale
       * @description Last sale price
       */
      last_sale: number;
      /**
       * Name
       * @description Product name
       */
      name: string;
      /**
       * Popularity Rank
       * @description Trending rank
       */
      popularity_rank: number;
      /**
       * Price
       * @description Current price
       */
      price: number;
      /**
       * Product Id
       * @description Unique StockX product ID
       */
      product_id: string;
      /**
       * Release Date
       * @description Date of product release (ISO 8601)
       */
      release_date: string;
      /**
       * Url
       * @description StockX product page URL
       */
      url: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Optional message with additional info
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Status of the API call
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of RETAILED's RETAILED_GET_STOCK_X_PRODUCT tool input.
 */
type RETAILED_GET_STOCK_X_PRODUCT_INPUT = {
  /**
   * Include Market
   * @description Whether to include detailed market data
   * @default false
   */
  include_market: boolean;
  /**
   * Sku
   * @description StockX product SKU identifier
   * @default null
   */
  sku: string | null;
  /**
   * Url
   * Format: uri
   * @description Direct StockX product URL
   * @default null
   */
  url: unknown;
};

/**
 * Type of RETAILED's RETAILED_GET_STOCK_X_PRODUCT tool output.
 */
type RETAILED_GET_STOCK_X_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Brand
       * @description Product brand
       */
      brand: string;
      /**
       * Colorway
       * @description Product colorway or color description
       */
      colorway: string;
      /**
       * Description
       * @description Detailed product description
       */
      description: string;
      /**
       * Id
       * @description Internal product ID
       */
      id: string;
      /**
       * Image
       * @description URL of the main product image
       */
      image: string;
      /**
       * StockXMarketData
       * @description Market-related data for a StockX product. Fields may vary depending on include_market flag.
       * @default null
       */
      market_data: {
          [key: string]: unknown;
      } | null;
      /**
       * Name
       * @description Product name
       */
      name: string;
      /**
       * Release Date
       * @description Release date of the product
       */
      release_date: string;
      /**
       * Retail Price
       * @description Retail price in USD
       */
      retail_price: number;
      /**
       * Sku
       * @description StockX product SKU
       */
      sku: string;
      /**
       * Url
       * @description StockX product URL
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
 * Type of RETAILED's RETAILED_GET_USAGE tool input.
 */
type RETAILED_GET_USAGE_INPUT = object;

/**
 * Type of RETAILED's RETAILED_GET_USAGE tool output.
 */
type RETAILED_GET_USAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Plan
       * @description Plan name
       */
      plan: string;
      /**
       * Remaining
       * @description Remaining requests under the current plan
       */
      remaining: string;
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
 * Type of RETAILED's RETAILED_SEARCH_PRODUCTS tool input.
 */
type RETAILED_SEARCH_PRODUCTS_INPUT = {
  /**
   * Filters
   * @description Key-value filters for product attributes.
   * @default null
   */
  filters: {
      [key: string]: string | number | boolean | string[];
  } | null;
  /**
   * Include Facets
   * @description Whether to include facets/aggregation data in the response.
   * @default null
   */
  include_facets: boolean | null;
  /**
   * Order
   * @description Sort order: 'asc' or 'desc'.
   * @default null
   */
  order: string | null;
  /**
   * Page
   * @description Page number for pagination (default: 1).
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of products per page (default: 20, max: 100).
   * @default 20
   */
  per_page: number;
  /**
   * Query
   * @description Search term or keywords.
   * @default null
   */
  query: string | null;
  /**
   * Sort
   * @description Field to sort by, e.g., 'price', 'name'.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of RETAILED's RETAILED_SEARCH_PRODUCTS tool output.
 */
type RETAILED_SEARCH_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Facets
       * @description Faceted/aggregation data if requested.
       * @default null
       */
      facets: {
          [key: string]: unknown;
      } | null;
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
       * @description List of matching products.
       */
      products: ({
          /** Additional Fields */
          additional_fields?: {
              [key: string]: unknown;
          };
          /**
           * Description
           * @description Product description.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Product ID.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description Product name.
           * @default null
           */
          name: string | null;
          /**
           * Price
           * @description Product price.
           * @default null
           */
          price: number | null;
      } & {
          [key: string]: unknown;
      })[];
      /**
       * Total
       * @description Total number of matched products.
       */
      total: number;
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
 * Type map of all available tool input types for toolkit "RETAILED".
 */
export type RETAILED_TOOL_INPUTS = {
  GET_GOAT_PRICES: RETAILED_GET_GOAT_PRICES_INPUT
  GET_STOCKX_SEARCH: RETAILED_GET_STOCKX_SEARCH_INPUT
  GET_STOCKX_TRENDS: RETAILED_GET_STOCKX_TRENDS_INPUT
  GET_STOCK_X_PRODUCT: RETAILED_GET_STOCK_X_PRODUCT_INPUT
  GET_USAGE: RETAILED_GET_USAGE_INPUT
  SEARCH_PRODUCTS: RETAILED_SEARCH_PRODUCTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "RETAILED".
 */
export type RETAILED_TOOL_OUTPUTS = {
  GET_GOAT_PRICES: RETAILED_GET_GOAT_PRICES_OUTPUT
  GET_STOCKX_SEARCH: RETAILED_GET_STOCKX_SEARCH_OUTPUT
  GET_STOCKX_TRENDS: RETAILED_GET_STOCKX_TRENDS_OUTPUT
  GET_STOCK_X_PRODUCT: RETAILED_GET_STOCK_X_PRODUCT_OUTPUT
  GET_USAGE: RETAILED_GET_USAGE_OUTPUT
  SEARCH_PRODUCTS: RETAILED_SEARCH_PRODUCTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's RETAILED toolkit.
 */
export const RETAILED = {
  slug: "retailed",
  tools: {
    /**
     * Tool to retrieve pricing information for a specific product on goat. use when you need up-to-date size-based pricing. call after confirming product id.
     */
    GET_GOAT_PRICES: "RETAILED_GET_GOAT_PRICES",
    /**
     * Tool to search stockx marketplace for products and pricing information. use when you have a search term and need up-to-date listings on stockx.
     */
    GET_STOCKX_SEARCH: "RETAILED_GET_STOCKX_SEARCH",
    /**
     * Tool to get the latest trending products from stockx. use when you want to discover current trending items.
     */
    GET_STOCKX_TRENDS: "RETAILED_GET_STOCKX_TRENDS",
    /**
     * Tool to retrieve detailed stockx product information. use when you need comprehensive metadata from stockx by sku or url.
     */
    GET_STOCK_X_PRODUCT: "RETAILED_GET_STOCK_X_PRODUCT",
    /**
     * Tool to retrieve current api usage statistics. use when you need to monitor your api quota.
     */
    GET_USAGE: "RETAILED_GET_USAGE",
    /**
     * Search for products in retailed matching query criteria.
     */
    SEARCH_PRODUCTS: "RETAILED_SEARCH_PRODUCTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "RETAILED".
 */
export type RETAILED_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "RETAILED".
 */
export type RETAILED_TRIGGER_EVENTS = {}
