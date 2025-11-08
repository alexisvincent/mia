// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of JUNGLESCOUT's JUNGLESCOUT_KEYWORD_HISTORICAL_VOLUME tool input.
 */
type JUNGLESCOUT_KEYWORD_HISTORICAL_VOLUME_INPUT = {
  /**
   * End Date
   * @description (Required) The end date for fetching historical data (YYYY-MM-DD).
   */
  end_date?: string;
  /**
   * Keyword
   * @description (Required) Keyword to fetch historical search volume for.
   */
  keyword?: string;
  /**
   * Marketplace
   * @description (Required) Country code for the marketplace.
   * @enum {string}
   */
  marketplace?: "us" | "uk" | "de" | "in" | "ca" | "fr" | "it" | "es" | "mx" | "jp";
  /**
   * Start Date
   * @description (Required) The start date for fetching historical data (YYYY-MM-DD).
   */
  start_date?: string;
};

/**
 * Type of JUNGLESCOUT's JUNGLESCOUT_KEYWORD_HISTORICAL_VOLUME tool output.
 */
type JUNGLESCOUT_KEYWORD_HISTORICAL_VOLUME_OUTPUT = {
  /** Data */
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
 * Type of JUNGLESCOUT's JUNGLESCOUT_QUERY_THE_PRODUCT_DATABASE tool input.
 */
type JUNGLESCOUT_QUERY_THE_PRODUCT_DATABASE_INPUT = {
  /**
   * Categories
   * @description Categories to include in the search.
   */
  categories?: string[];
  /**
   * Exclude Keywords
   * @description Keywords to exclude from the search.
   */
  exclude_keywords?: string[];
  /**
   * Exclude Top Brands
   * @description Whether to exclude top brands from the search.
   * @default true
   */
  exclude_top_brands: boolean;
  /**
   * Exclude Unavailable Products
   * @description Whether to exclude unavailable products from the search.
   * @default true
   */
  exclude_unavailable_products: boolean;
  /**
   * Include Keywords
   * @description Keywords to include in the search.
   */
  include_keywords?: string[];
  /**
   * Marketplace
   * @description (Required) Country code for the marketplace.
   * @enum {string}
   */
  marketplace?: "us" | "uk" | "de" | "in" | "ca" | "fr" | "it" | "es" | "mx" | "jp";
  /**
   * Max Lqs
   * @description Maximum Listing Quality Score.
   */
  max_lqs?: number;
  /**
   * Max Net
   * @description Maximum net price.
   */
  max_net?: number;
  /**
   * Max Price
   * @description Maximum price.
   */
  max_price?: number;
  /**
   * Max Rank
   * @description Maximum sales rank.
   */
  max_rank?: number;
  /**
   * Max Rating
   * @description Maximum rating.
   */
  max_rating?: number;
  /**
   * Max Revenue
   * @description Maximum revenue.
   */
  max_revenue?: number;
  /**
   * Max Reviews
   * @description Maximum number of reviews.
   */
  max_reviews?: number;
  /**
   * Max Sales
   * @description Maximum number of sales.
   */
  max_sales?: number;
  /**
   * Max Sellers
   * @description Maximum number of sellers.
   */
  max_sellers?: number;
  /**
   * Max Updated At
   * Format: date
   * @description Maximum update date.
   */
  max_updated_at?: string;
  /**
   * Max Weight
   * @description Maximum weight.
   */
  max_weight?: number;
  /**
   * Min Lqs
   * @description Minimum Listing Quality Score.
   */
  min_lqs?: number;
  /**
   * Min Net
   * @description Minimum net price.
   */
  min_net?: number;
  /**
   * Min Price
   * @description Minimum price.
   */
  min_price?: number;
  /**
   * Min Rank
   * @description Minimum sales rank.
   */
  min_rank?: number;
  /**
   * Min Rating
   * @description Minimum rating.
   */
  min_rating?: number;
  /**
   * Min Revenue
   * @description Minimum revenue.
   */
  min_revenue?: number;
  /**
   * Min Reviews
   * @description Minimum number of reviews.
   */
  min_reviews?: number;
  /**
   * Min Sales
   * @description Minimum number of sales.
   */
  min_sales?: number;
  /**
   * Min Sellers
   * @description Minimum number of sellers.
   */
  min_sellers?: number;
  /**
   * Min Updated At
   * Format: date
   * @description Minimum update date.
   */
  min_updated_at?: string;
  /**
   * Min Weight
   * @description Minimum weight.
   */
  min_weight?: number;
  /**
   * Page Size
   * @description Number of results per page.
   * @default 50
   */
  page_size: number;
  /**
   * Product Tiers
   * @description Product tiers to include in the search.
   * @default [
   *       "oversize",
   *       "standard"
   *     ]
   */
  product_tiers: string[];
  /**
   * Seller Types
   * @description Seller types to include in the search.
   * @default [
   *       "amz",
   *       "fba",
   *       "fbm"
   *     ]
   */
  seller_types: string[];
  /**
   * Sort
   * @description Sort order for the results.
   * @default name
   */
  sort: string;
};

/**
 * Type of JUNGLESCOUT's JUNGLESCOUT_QUERY_THE_PRODUCT_DATABASE tool output.
 */
type JUNGLESCOUT_QUERY_THE_PRODUCT_DATABASE_OUTPUT = {
  /** Data */
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
 * Type of JUNGLESCOUT's JUNGLESCOUT_RETRIEVE_DATA_FOR_A_SPECIFIC_KEYWORD_QUERY tool input.
 */
type JUNGLESCOUT_RETRIEVE_DATA_FOR_A_SPECIFIC_KEYWORD_QUERY_INPUT = {
  /**
   * Categories
   * @description List of categories to search in
   */
  categories?: string[];
  /**
   * Marketplace
   * @description (Required) Country code for the marketplace.
   * @enum {string}
   */
  marketplace?: "us" | "uk" | "de" | "in" | "ca" | "fr" | "it" | "es" | "mx" | "jp";
  /**
   * Max Monthly Search Volume Broad
   * @description Maximum monthly search volume for broad match
   * @default 99999
   */
  max_monthly_search_volume_broad: number;
  /**
   * Max Monthly Search Volume Exact
   * @description Maximum monthly search volume for exact match
   * @default 99999
   */
  max_monthly_search_volume_exact: number;
  /**
   * Max Organic Product Count
   * @description Maximum organic product count
   * @default 99999
   */
  max_organic_product_count: number;
  /**
   * Max Word Count
   * @description Maximum word count
   * @default 99999
   */
  max_word_count: number;
  /**
   * Min Monthly Search Volume Broad
   * @description Minimum monthly search volume for broad match
   * @default 1
   */
  min_monthly_search_volume_broad: number;
  /**
   * Min Monthly Search Volume Exact
   * @description Minimum monthly search volume for exact match
   * @default 1
   */
  min_monthly_search_volume_exact: number;
  /**
   * Min Organic Product Count
   * @description Minimum organic product count
   * @default 1
   */
  min_organic_product_count: number;
  /**
   * Min Word Count
   * @description Minimum word count
   * @default 1
   */
  min_word_count: number;
  /**
   * Page Size
   * @description Page Size
   * @default 50
   */
  page_size: number;
  /**
   * Search Terms
   * @description Search terms
   */
  search_terms?: string;
  /**
   * Sort
   * @description Sort
   */
  sort?: string;
};

/**
 * Type of JUNGLESCOUT's JUNGLESCOUT_RETRIEVE_DATA_FOR_A_SPECIFIC_KEYWORD_QUERY tool output.
 */
type JUNGLESCOUT_RETRIEVE_DATA_FOR_A_SPECIFIC_KEYWORD_QUERY_OUTPUT = {
  /** Data */
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
 * Type of JUNGLESCOUT's JUNGLESCOUT_RETRIEVE_KEYWORD_DATA_FOR_SPECIFIED_ASINS tool input.
 */
type JUNGLESCOUT_RETRIEVE_KEYWORD_DATA_FOR_SPECIFIED_ASINS_INPUT = {
  /**
   * Data Attributes Asins
   * @description Asins
   * @default true
   */
  data_attributes_asins: string[];
  /**
   * Data Attributes Include Variants
   * @description Include Variants
   */
  data_attributes_include_variants?: boolean;
  /**
   * Data Attributes Max Monthly Search Volume Broad
   * @description Max Monthly Search Volume Broad
   * @default 99999
   */
  data_attributes_max_monthly_search_volume_broad: number;
  /**
   * Data Attributes Max Monthly Search Volume Exact
   * @description Max Monthly Search Volume Exact
   * @default 99999
   */
  data_attributes_max_monthly_search_volume_exact: number;
  /**
   * Data Attributes Max Organic Product Count
   * @description Max Organic Product Count
   * @default 99999
   */
  data_attributes_max_organic_product_count: number;
  /**
   * Data Attributes Max Word Count
   * @description Max Word Count
   * @default 99999
   */
  data_attributes_max_word_count: number;
  /**
   * Data Attributes Min Monthly Search Volume Broad
   * @description Min Monthly Search Volume Broad
   * @default 1
   */
  data_attributes_min_monthly_search_volume_broad: number;
  /**
   * Data Attributes Min Monthly Search Volume Exact
   * @description Min Monthly Search Volume Exact
   * @default 1
   */
  data_attributes_min_monthly_search_volume_exact: number;
  /**
   * Data Attributes Min Organic Product Count
   * @description Min Organic Product Count
   * @default 1
   */
  data_attributes_min_organic_product_count: number;
  /**
   * Data Attributes Min Word Count
   * @description Min Word Count
   * @default 1
   */
  data_attributes_min_word_count: number;
  /**
   * Marketplace
   * @description (Required) Country code for the marketplace.
   * @enum {string}
   */
  marketplace?: "us" | "uk" | "de" | "in" | "ca" | "fr" | "it" | "es" | "mx" | "jp";
  /**
   * Page
   * @description Page size
   * @default 10
   */
  page: number;
  /**
   * Sort
   * @description Sort
   * @default -monthly_search_volume_exact
   */
  sort: string;
};

/**
 * Type of JUNGLESCOUT's JUNGLESCOUT_RETRIEVE_KEYWORD_DATA_FOR_SPECIFIED_ASINS tool output.
 */
type JUNGLESCOUT_RETRIEVE_KEYWORD_DATA_FOR_SPECIFIED_ASINS_OUTPUT = {
  /** Data */
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
 * Type of JUNGLESCOUT's JUNGLESCOUT_RETRIEVE_SALES_ESTIMATES_DATA tool input.
 */
type JUNGLESCOUT_RETRIEVE_SALES_ESTIMATES_DATA_INPUT = {
  /**
   * Asin
   * @description ASIN for which sales estimates are needed.
   */
  asin?: string;
  /**
   * End Date
   * Format: date
   * @description End date for the sales estimates data.
   */
  end_date?: string;
  /**
   * Marketplace
   * @description (Required) Country code for the marketplace.
   * @enum {string}
   */
  marketplace?: "us" | "uk" | "de" | "in" | "ca" | "fr" | "it" | "es" | "mx" | "jp";
  /**
   * Start Date
   * Format: date
   * @description Start date for the sales estimates data.
   */
  start_date?: string;
};

/**
 * Type of JUNGLESCOUT's JUNGLESCOUT_RETRIEVE_SALES_ESTIMATES_DATA tool output.
 */
type JUNGLESCOUT_RETRIEVE_SALES_ESTIMATES_DATA_OUTPUT = {
  /** Data */
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
 * Type of JUNGLESCOUT's JUNGLESCOUT_RETRIEVE_SHARE_OF_VOICE_DATA tool input.
 */
type JUNGLESCOUT_RETRIEVE_SHARE_OF_VOICE_DATA_INPUT = {
  /**
   * Keyword
   * @description Keyword for which share of voice data is needed.
   */
  keyword?: string;
  /**
   * Marketplace
   * @description (Required) Country code for the marketplace.
   * @enum {string}
   */
  marketplace?: "us" | "uk" | "de" | "in" | "ca" | "fr" | "it" | "es" | "mx" | "jp";
};

/**
 * Type of JUNGLESCOUT's JUNGLESCOUT_RETRIEVE_SHARE_OF_VOICE_DATA tool output.
 */
type JUNGLESCOUT_RETRIEVE_SHARE_OF_VOICE_DATA_OUTPUT = {
  /** Data */
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
 * Type map of all available tool input types for toolkit "JUNGLESCOUT".
 */
export type JUNGLESCOUT_TOOL_INPUTS = {
  KEYWORD_HISTORICAL_VOLUME: JUNGLESCOUT_KEYWORD_HISTORICAL_VOLUME_INPUT
  QUERY_THE_PRODUCT_DATABASE: JUNGLESCOUT_QUERY_THE_PRODUCT_DATABASE_INPUT
  RETRIEVE_DATA_FOR_A_SPECIFIC_KEYWORD_QUERY: JUNGLESCOUT_RETRIEVE_DATA_FOR_A_SPECIFIC_KEYWORD_QUERY_INPUT
  RETRIEVE_KEYWORD_DATA_FOR_SPECIFIED_ASINS: JUNGLESCOUT_RETRIEVE_KEYWORD_DATA_FOR_SPECIFIED_ASINS_INPUT
  RETRIEVE_SALES_ESTIMATES_DATA: JUNGLESCOUT_RETRIEVE_SALES_ESTIMATES_DATA_INPUT
  RETRIEVE_SHARE_OF_VOICE_DATA: JUNGLESCOUT_RETRIEVE_SHARE_OF_VOICE_DATA_INPUT
}

/**
 * Type map of all available tool input types for toolkit "JUNGLESCOUT".
 */
export type JUNGLESCOUT_TOOL_OUTPUTS = {
  KEYWORD_HISTORICAL_VOLUME: JUNGLESCOUT_KEYWORD_HISTORICAL_VOLUME_OUTPUT
  QUERY_THE_PRODUCT_DATABASE: JUNGLESCOUT_QUERY_THE_PRODUCT_DATABASE_OUTPUT
  RETRIEVE_DATA_FOR_A_SPECIFIC_KEYWORD_QUERY: JUNGLESCOUT_RETRIEVE_DATA_FOR_A_SPECIFIC_KEYWORD_QUERY_OUTPUT
  RETRIEVE_KEYWORD_DATA_FOR_SPECIFIED_ASINS: JUNGLESCOUT_RETRIEVE_KEYWORD_DATA_FOR_SPECIFIED_ASINS_OUTPUT
  RETRIEVE_SALES_ESTIMATES_DATA: JUNGLESCOUT_RETRIEVE_SALES_ESTIMATES_DATA_OUTPUT
  RETRIEVE_SHARE_OF_VOICE_DATA: JUNGLESCOUT_RETRIEVE_SHARE_OF_VOICE_DATA_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's JUNGLESCOUT toolkit.
 */
export const JUNGLESCOUT = {
  slug: "junglescout",
  tools: {
    /**
     * Fetches the historical search volume data for a specified keyword over a given time period.
     */
    KEYWORD_HISTORICAL_VOLUME: "JUNGLESCOUT_KEYWORD_HISTORICAL_VOLUME",
    /**
     * Queries the jungle scout product database to retrieve product data based on various filters. compatible parameters include marketplace, sort, page size, product tiers, seller types, categories, exclude top brands, exclude unavailable products, min price, max price, min net, max net, min rank, max rank, min sales, max sales, min revenue, max revenue, min reviews, max reviews, min rating, max rating, min weight, max weight, min sellers, max sellers, min lqs, max lqs, min updated at, and max updated at.
     */
    QUERY_THE_PRODUCT_DATABASE: "JUNGLESCOUT_QUERY_THE_PRODUCT_DATABASE",
    /**
     * Returns data based on a specific keyword query, including search volume and competition.
     */
    RETRIEVE_DATA_FOR_A_SPECIFIC_KEYWORD_QUERY: "JUNGLESCOUT_RETRIEVE_DATA_FOR_A_SPECIFIC_KEYWORD_QUERY",
    /**
     * Returns keywords for which the queried asin(s) appear in amazon search results. for a given keyword, jungle scout collects up to 3 pages of amazon keyword search results. query up to 10 asins at a time. apply filters to narrow search results.
     */
    RETRIEVE_KEYWORD_DATA_FOR_SPECIFIED_ASINS: "JUNGLESCOUT_RETRIEVE_KEYWORD_DATA_FOR_SPECIFIED_ASINS",
    /**
     * Fetches sales estimates data for specified parameters.
     */
    RETRIEVE_SALES_ESTIMATES_DATA: "JUNGLESCOUT_RETRIEVE_SALES_ESTIMATES_DATA",
    /**
     * Fetches share of voice data for specified keywords.
     */
    RETRIEVE_SHARE_OF_VOICE_DATA: "JUNGLESCOUT_RETRIEVE_SHARE_OF_VOICE_DATA",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "JUNGLESCOUT".
 */
export type JUNGLESCOUT_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "JUNGLESCOUT".
 */
export type JUNGLESCOUT_TRIGGER_EVENTS = {}
