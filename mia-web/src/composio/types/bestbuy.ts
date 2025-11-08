// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BESTBUY's BESTBUY_GET_CATEGORIES tool input.
 */
type BESTBUY_GET_CATEGORIES_INPUT = {
  /**
   * Format
   * @description Response format (json or xml)
   * @default json
   * @enum {string|null}
   */
  format: "json" | "xml" | null;
  /**
   * Id
   * @description Filter by category ID(s), pipe-separated
   * @default null
   */
  id: string | null;
  /**
   * Name
   * @description Filter by category name(s), pipe-separated
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number to retrieve (1-based)
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of categories per page (1-100)
   * @default null
   */
  pageSize: number | null;
  /**
   * Show
   * @description Comma-separated list of fields to include in each category
   * @default null
   */
  show: string | null;
  /**
   * Sort
   * @description Sort order, e.g., 'name.asc' or 'id.desc'
   * @default null
   */
  sort: string | null;
};

/**
 * Type of BESTBUY's BESTBUY_GET_CATEGORIES tool output.
 */
type BESTBUY_GET_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Categories
       * @description List of category objects
       */
      categories: {
          /**
           * Active
           * @description Whether category is active
           * @default null
           */
          active: boolean | null;
          /**
           * Additional Fields
           * @description Additional fields returned when using 'show' parameter
           * @default null
           */
          additional_fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Id
           * @description Category ID
           */
          id: string;
          /**
           * Name
           * @description Category name
           */
          name: string;
          /**
           * Parent
           * @description Parent category ID
           * @default null
           */
          parent: string | null;
      }[];
      /**
       * Current Page
       * @description Current page number of results
       */
      currentPage: number;
      /**
       * From Index
       * @description Index of first record returned
       */
      from_index: number;
      /**
       * To Index
       * @description Index of last record returned
       */
      to_index: number;
      /**
       * Total
       * @description Total number of matching categories
       */
      total: number;
      /**
       * Total Pages
       * @description Total pages available
       */
      totalPages: number;
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
 * Type of BESTBUY's BESTBUY_GET_CATEGORY_DETAILS tool input.
 */
type BESTBUY_GET_CATEGORY_DETAILS_INPUT = {
  /**
   * Api Key
   * @description Your Best Buy Developer API key
   */
  apiKey?: string;
  /**
   * Format
   * @description Response format, json or xml
   * @default json
   * @enum {string|null}
   */
  format: "json" | "xml" | null;
  /**
   * Id
   * @description The ID of the category to retrieve
   */
  id?: string;
  /**
   * Page
   * @description Page number to retrieve
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of records to return per page
   * @default null
   */
  pageSize: number | null;
  /**
   * Show
   * @description Comma-delimited list of fields to include in the response
   * @default null
   */
  show: string | null;
};

/**
 * Type of BESTBUY's BESTBUY_GET_CATEGORY_DETAILS tool output.
 */
type BESTBUY_GET_CATEGORY_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description If the category is active
       */
      active: boolean;
      /**
       * Id
       * @description The category ID
       */
      id: string;
      /**
       * Name
       * @description The category name
       */
      name: string;
      /**
       * Path
       * @description List of parent categories from root to current
       */
      path: {
          /**
           * Id
           * @description Parent category ID
           */
          id: string;
          /**
           * Name
           * @description Parent category name
           */
          name: string;
      }[];
      /**
       * Sub Categories
       * @description List of direct subcategories
       */
      subCategories: {
          /**
           * Active
           * @description Subcategory active status
           * @default null
           */
          active: boolean | null;
          /**
           * Id
           * @description Subcategory ID
           */
          id: string;
          /**
           * Name
           * @description Subcategory name
           */
          name: string;
          /**
           * Url
           * @description Subcategory URL
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Url
       * @description The canonical URL for the category
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
 * Type of BESTBUY's BESTBUY_GET_PRODUCTS tool input.
 */
type BESTBUY_GET_PRODUCTS_INPUT = {
  /**
   * Category Path.Id
   * @description Filter products by category ID
   * @default null
   */
  "categoryPath.id": string | null;
  /**
   * Name
   * @description Filter by product name with wildcard, e.g., name="iPad*"
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number to retrieve
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of products per page (1-100)
   * @default null
   */
  pageSize: number | null;
  /**
   * Sale Price
   * @description Filter by sale price, e.g., 'salePrice>100'
   * @default null
   */
  salePrice: string | null;
  /**
   * Show
   * @description Comma-separated list of attributes to include in response
   * @default null
   */
  show: string | null;
  /**
   * Sku
   * @description Filter for a specific SKU
   * @default null
   */
  sku: number | null;
  /**
   * Sort
   * @description Sort format, e.g., 'name.asc' or 'salePrice.dsc'
   * @default null
   */
  sort: string | null;
  /**
   * Upc
   * @description Filter for a specific UPC
   * @default null
   */
  upc: string | null;
};

/**
 * Type of BESTBUY's BESTBUY_GET_PRODUCTS tool output.
 */
type BESTBUY_GET_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current Page
       * @description Current page number
       */
      currentPage: number;
      /**
       * Products
       * @description List of products
       */
      products: {
          /**
           * Category Path
           * @description Category hierarchy
           * @default null
           */
          categoryPath: {
              /**
               * Id
               * @description Category ID
               */
              id: string;
              /**
               * Name
               * @description Category name
               */
              name: string;
          }[] | null;
          /**
           * Customer Review Average
           * @description Average customer review
           * @default null
           */
          customerReviewAverage: number | null;
          /**
           * Customer Review Count
           * @description Customer review count
           * @default null
           */
          customerReviewCount: number | null;
          /**
           * Image
           * @description Image URL
           * @default null
           */
          image: string | null;
          /**
           * Long Description
           * @description Long description
           * @default null
           */
          longDescription: string | null;
          /**
           * Name
           * @description Product name
           */
          name: string;
          /**
           * Regular Price
           * @description Regular price
           * @default null
           */
          regularPrice: number | null;
          /**
           * Sale Price
           * @description Sale price
           * @default null
           */
          salePrice: number | null;
          /**
           * Short Description
           * @description Short description
           * @default null
           */
          shortDescription: string | null;
          /**
           * Sku
           * @description Product SKU
           */
          sku: number;
          /**
           * Thumbnail Image
           * @description Thumbnail image URL
           * @default null
           */
          thumbnailImage: string | null;
          /**
           * Type
           * @description Product type
           */
          type: string;
          /**
           * Upc
           * @description Product UPC
           * @default null
           */
          upc: string | null;
      }[];
      /**
       * Start Index
       * @description Index of the first result returned
       */
      startIndex: number;
      /**
       * To
       * @description Index of the last result returned
       */
      to: number;
      /**
       * Total
       * @description Total number of matched results
       */
      total: number;
      /**
       * Total Pages
       * @description Total number of pages
       */
      totalPages: number;
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
 * Type of BESTBUY's BESTBUY_GET_PRODUCT_DETAILS tool input.
 */
type BESTBUY_GET_PRODUCT_DETAILS_INPUT = {
  /**
   * Format
   * @description Response format. Defaults to json.
   * @default json
   * @enum {string|null}
   */
  format: "json" | "xml" | null;
  /**
   * Show
   * @description Comma-separated list of additional fields to include in the response.
   * @default null
   */
  show: string | null;
  /**
   * Sku
   * @description The SKU (Stock Keeping Unit) of the product to retrieve.
   */
  sku?: string;
};

/**
 * Type of BESTBUY's BESTBUY_GET_PRODUCT_DETAILS tool output.
 */
type BESTBUY_GET_PRODUCT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Product description text.
       * @default null
       */
      description: string | null;
      /**
       * Image
       * @description URL to the product image.
       * @default null
       */
      image: string | null;
      /**
       * Manufacturer
       * @description Manufacturer name.
       * @default null
       */
      manufacturer: string | null;
      /**
       * Name
       * @description Name of the product.
       */
      name: string;
      /**
       * Regular Price
       * @description Regular (list) price.
       */
      regularPrice: number;
      /**
       * Sale Price
       * @description Current sale price.
       */
      salePrice: number;
      /**
       * Sku
       * @description Product SKU.
       */
      sku: number;
      /**
       * Type
       * @description Product type.
       */
      type: string;
      /**
       * Url
       * @description BestBuy URL for this product.
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
 * Type of BESTBUY's BESTBUY_GET_REVIEWS tool input.
 */
type BESTBUY_GET_REVIEWS_INPUT = {
  /**
   * Format
   * @description Response format, 'json' (default) or 'xml'
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Max Score
   * @description Maximum rating score (1-5)
   * @default null
   */
  maxScore: number | null;
  /**
   * Min Score
   * @description Minimum rating score (1-5)
   * @default null
   */
  minScore: number | null;
  /**
   * Page
   * @description Page number for pagination
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of reviews per page
   * @default null
   */
  pageSize: number | null;
  /**
   * Reviewer
   * @description Filter reviews by reviewer name
   * @default null
   */
  reviewer: string | null;
  /**
   * Show
   * @description Comma-separated fields to include in response
   * @default null
   */
  show: string | null;
  /**
   * Sku
   * @description Filter reviews by product SKU
   * @default null
   */
  sku: string | null;
  /**
   * Sort
   * @description Sort expression, e.g., 'submissionTime.dsc'
   * @default null
   */
  sort: string | null;
};

/**
 * Type of BESTBUY's BESTBUY_GET_REVIEWS tool output.
 */
type BESTBUY_GET_REVIEWS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current Page
       * @description Current page
       */
      currentPage: number;
      /**
       * End
       * @description Pagination end
       */
      end: number;
      /**
       * Reviews
       * @description List of reviews
       */
      reviews: {
          /**
           * Comment
           * @description Review body
           * @default null
           */
          comment: string | null;
          /**
           * Helpful Votes
           * @description Number of helpful votes
           * @default null
           */
          helpfulVotes: number | null;
          /**
           * Id
           * @description Review identifier
           */
          id: string;
          /**
           * Not Helpful Votes
           * @description Number of not helpful votes
           * @default null
           */
          notHelpfulVotes: number | null;
          /**
           * Rating
           * @description Rating (1-5)
           */
          rating: number;
          /**
           * Reviewer
           * @description Reviewer name
           */
          reviewer: string;
          /**
           * Sku
           * @description Product SKU
           */
          sku: string;
          /**
           * Submission Time
           * @description Date of review
           */
          submissionTime: string;
          /**
           * Title
           * @description Review title
           * @default null
           */
          title: string | null;
      }[];
      /**
       * Start
       * @description Pagination start
       */
      start: number;
      /**
       * Total
       * @description Total number of reviews
       */
      total: number;
      /**
       * Total Pages
       * @description Total pages
       */
      totalPages: number;
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
 * Type of BESTBUY's BESTBUY_GET_REVIEW_DETAILS tool input.
 */
type BESTBUY_GET_REVIEW_DETAILS_INPUT = {
  /**
   * Id
   * @description The unique identifier of the review to retrieve
   */
  id?: string;
};

/**
 * Type of BESTBUY's BESTBUY_GET_REVIEW_DETAILS tool output.
 */
type BESTBUY_GET_REVIEW_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comment
       * @description The review content/body
       */
      comment: string;
      /**
       * Helpful Votes
       * @description Number of helpful votes
       */
      helpfulVotes: number;
      /**
       * Id
       * @description Unique review ID
       */
      id: number;
      /**
       * Is Recommended
       * @description Whether the reviewer recommends the product
       */
      isRecommended: boolean;
      /**
       * Not Helpful Votes
       * @description Number of not helpful votes
       */
      notHelpfulVotes: number;
      /**
       * Product Id
       * @description The SKU of the product reviewed
       */
      productId: string;
      /**
       * Rating
       * @description Rating value
       */
      rating: number;
      /**
       * Reviewer
       * @description Name/identifier of the reviewer
       */
      reviewer: string;
      /**
       * Reviewer Location
       * @description Optional geographic info about the reviewer
       * @default null
       */
      reviewerLocation: string | null;
      /**
       * Sku
       * @description Same as product ID
       */
      sku: string;
      /**
       * Submission Time
       * @description Date/time when the review was submitted
       */
      submissionTime: string;
      /**
       * Title
       * @description The review title
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
 * Type of BESTBUY's BESTBUY_GET_STORES tool input.
 */
type BESTBUY_GET_STORES_INPUT = {
  /**
   * City
   * @description Filter stores by city name
   * @default null
   */
  city: string | null;
  /**
   * GeoParams
   * @description Geographic filtering parameters for stores search.
   * @default null
   */
  geo: {
      /**
       * Lat
       * @description Latitude for geo-search, between -90 and 90
       * @default null
       */
      lat: number | null;
      /**
       * Long
       * @description Longitude for geo-search, between -180 and 180
       * @default null
       */
      long: number | null;
      /**
       * Radius
       * @description Search radius in miles (non-negative)
       * @default null
       */
      radius: number | null;
  } | null;
  /**
   * Page
   * @description Page number to retrieve (must be > 0)
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of results per page (must be > 0)
   * @default null
   */
  pageSize: number | null;
  /**
   * Postal Code
   * @description Filter stores by postal code
   * @default null
   */
  postalCode: string | null;
  /**
   * Region
   * @description Filter stores by region
   * @default null
   */
  region: string | null;
  /**
   * Services
   * @description Comma-separated list of services to filter by
   * @default null
   */
  services: string | null;
  /**
   * Show
   * @description Comma-separated list of store fields to include in the response
   * @default null
   */
  show: string | null;
  /**
   * Sort
   * @description Sort directive, e.g., 'city.asc' or 'name.desc'
   * @default null
   */
  sort: string | null;
  /**
   * State
   * @description Filter stores by two-letter state code
   * @default null
   */
  state: string | null;
  /**
   * Store Id
   * @description Specific store ID to retrieve
   * @default null
   */
  storeId: number | null;
  /**
   * Store Type
   * @description Filter stores by store type
   * @default null
   */
  storeType: string | null;
};

/**
 * Type of BESTBUY's BESTBUY_GET_STORES tool output.
 */
type BESTBUY_GET_STORES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current Page
       * @description Current page number
       */
      currentPage: number;
      /**
       * From
       * @description Starting index of returned results
       */
      from: number;
      /**
       * Stores
       * @description List of store objects
       */
      stores: {
          /**
           * Address
           * @description Store street address
           */
          address: string;
          /**
           * City
           * @description Store city
           */
          city: string;
          /**
           * Hours
           * @description Store hours, if available
           * @default null
           */
          hours: string | null;
          /**
           * Lat
           * @description Latitude of store location
           */
          lat: number;
          /**
           * Lng
           * @description Longitude of store location
           */
          lng: number;
          /**
           * Name
           * @description Store name
           */
          name: string;
          /**
           * Phone
           * @description Store phone number
           */
          phone: string;
          /**
           * Postal Code
           * @description Store postal code
           */
          postalCode: string;
          /**
           * State
           * @description Store state code
           */
          state: string;
          /**
           * Store Id
           * @description Store identifier
           */
          storeId: number;
          /**
           * Type
           * @description Store type
           */
          type: string;
      }[];
      /**
       * To
       * @description Ending index of returned results
       */
      to: number;
      /**
       * Total
       * @description Total matching stores
       */
      total: number;
      /**
       * Total Pages
       * @description Total pages available
       */
      totalPages: number;
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
 * Type of BESTBUY's BESTBUY_GET_STORE_DETAILS tool input.
 */
type BESTBUY_GET_STORE_DETAILS_INPUT = {
  /**
   * Show
   * @description Comma-separated list of fields to include in the response (e.g., 'storeId,name,address')
   * @default null
   */
  show: string | null;
  /**
   * Store Id
   * @description Unique identifier for the Best Buy store
   */
  storeId?: string;
};

/**
 * Type of BESTBUY's BESTBUY_GET_STORE_DETAILS tool output.
 */
type BESTBUY_GET_STORE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Primary street address
       */
      address: string;
      /**
       * Address2
       * @description Secondary address line, if any
       * @default null
       */
      address2: string | null;
      /**
       * City
       * @description City
       */
      city: string;
      /**
       * Country
       * @description Country code
       */
      country: string;
      /**
       * Distance
       * @description Distance from search origin (if provided)
       * @default null
       */
      distance: number | null;
      /**
       * Full Postal Code
       * @description Postal code
       */
      fullPostalCode: string;
      /**
       * Hours
       * @description Store operating hours
       * @default null
       */
      hours: string | null;
      /**
       * Lat
       * @description Latitude coordinate
       */
      lat: number;
      /**
       * Lng
       * @description Longitude coordinate
       */
      lng: number;
      /**
       * Name
       * @description Name of the store
       */
      name: string;
      /**
       * Phone
       * @description Store phone number
       */
      phone: string;
      /**
       * Services
       * @description List of services offered by the store
       */
      services: string[];
      /**
       * State
       * @description State code
       */
      state: string;
      /**
       * Store Id
       * @description Unique identifier for the store
       */
      storeId: string;
      /**
       * Type
       * @description Store type
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
 * Type map of all available tool input types for toolkit "BESTBUY".
 */
export type BESTBUY_TOOL_INPUTS = {
  GET_CATEGORIES: BESTBUY_GET_CATEGORIES_INPUT
  GET_CATEGORY_DETAILS: BESTBUY_GET_CATEGORY_DETAILS_INPUT
  GET_PRODUCTS: BESTBUY_GET_PRODUCTS_INPUT
  GET_PRODUCT_DETAILS: BESTBUY_GET_PRODUCT_DETAILS_INPUT
  GET_REVIEWS: BESTBUY_GET_REVIEWS_INPUT
  GET_REVIEW_DETAILS: BESTBUY_GET_REVIEW_DETAILS_INPUT
  GET_STORES: BESTBUY_GET_STORES_INPUT
  GET_STORE_DETAILS: BESTBUY_GET_STORE_DETAILS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BESTBUY".
 */
export type BESTBUY_TOOL_OUTPUTS = {
  GET_CATEGORIES: BESTBUY_GET_CATEGORIES_OUTPUT
  GET_CATEGORY_DETAILS: BESTBUY_GET_CATEGORY_DETAILS_OUTPUT
  GET_PRODUCTS: BESTBUY_GET_PRODUCTS_OUTPUT
  GET_PRODUCT_DETAILS: BESTBUY_GET_PRODUCT_DETAILS_OUTPUT
  GET_REVIEWS: BESTBUY_GET_REVIEWS_OUTPUT
  GET_REVIEW_DETAILS: BESTBUY_GET_REVIEW_DETAILS_OUTPUT
  GET_STORES: BESTBUY_GET_STORES_OUTPUT
  GET_STORE_DETAILS: BESTBUY_GET_STORE_DETAILS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BESTBUY toolkit.
 */
export const BESTBUY = {
  slug: "bestbuy",
  tools: {
    /**
     * Tool to retrieve best buy product categories. use when you need to list or filter categories in the catalog.
     */
    GET_CATEGORIES: "BESTBUY_GET_CATEGORIES",
    /**
     * Tool to retrieve detailed information about a best buy category by its id. use when you need enriched metadata about a specific category.
     */
    GET_CATEGORY_DETAILS: "BESTBUY_GET_CATEGORY_DETAILS",
    /**
     * Tool to retrieve products from best buy. use when you need to fetch product listings with optional filters and sorting. example: 'get products for category abcat0101000 sorted by saleprice.dsc.'
     */
    GET_PRODUCTS: "BESTBUY_GET_PRODUCTS",
    /**
     * Tool to retrieve detailed information about a specific product by sku. use after obtaining a valid sku to fetch its attributes.
     */
    GET_PRODUCT_DETAILS: "BESTBUY_GET_PRODUCT_DETAILS",
    /**
     * Tool to retrieve product reviews. use when you need customer feedback with filters or sorting. use after obtaining product skus.
     */
    GET_REVIEWS: "BESTBUY_GET_REVIEWS",
    /**
     * Tool to retrieve detailed information for a specific review by id. use after confirming the review id.
     */
    GET_REVIEW_DETAILS: "BESTBUY_GET_REVIEW_DETAILS",
    /**
     * Tool to retrieve a list of best buy stores. use when you need store listings with optional filters or geo-search after confirming your api key.
     */
    GET_STORES: "BESTBUY_GET_STORES",
    /**
     * Tool to retrieve detailed information about a specific best buy store. use when you have a valid store id.
     */
    GET_STORE_DETAILS: "BESTBUY_GET_STORE_DETAILS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BESTBUY".
 */
export type BESTBUY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BESTBUY".
 */
export type BESTBUY_TRIGGER_EVENTS = {}
