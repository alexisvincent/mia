// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of OPEN_SEA's OPEN_SEA_BUILD_CRITERIA_OFFER tool input.
 */
type OPEN_SEA_BUILD_CRITERIA_OFFER_INPUT = {
  /**
   * Criteria
   * @description Criteria for the collection or trait offer
   */
  criteria?: {
      /**
       * Offer Protection Enabled
       * @description Builds the offer on OpenSea's signed zone to provide offer protections from receiving an item which is disabled from trading
       * @default true
       */
      offer_protection_enabled: boolean;
      /**
       * Protocol Address
       * @description Exchange contract address. Must be one of ['0x0000000000000068f116a894984e2db1123eb395']
       */
      protocol_address: string;
  };
  /**
   * Offerer
   * @description The address which supplies all the items in the offer
   */
  offerer?: string;
  /**
   * Quantity
   * @description The number of offers to place
   * @default 1
   */
  quantity: number;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_BUILD_CRITERIA_OFFER tool output.
 */
type OPEN_SEA_BUILD_CRITERIA_OFFER_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_CANCEL_ORDER tool input.
 */
type OPEN_SEA_CANCEL_ORDER_INPUT = {
  /**
   * Chain
   * @description The blockchain on which to filter the results
   */
  chain?: string;
  /**
   * Offerer Signature
   * @description An EIP-712 signature from the offerer of the order. If not provided, the user associated with the API Key will be checked instead
   * @default null
   */
  offerer_signature: string | null;
  /**
   * Order Hash
   * @description The hash of the order to retrieve
   */
  order_hash?: string;
  /**
   * Protocol Address
   * @description The contract address of the protocol to use in the request
   */
  protocol_address?: string;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_CANCEL_ORDER tool output.
 */
type OPEN_SEA_CANCEL_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_CREATE_CRITERIA_OFFER tool input.
 */
type OPEN_SEA_CREATE_CRITERIA_OFFER_INPUT = {
  /**
   * Protocol Data
   * @description The signed order which will be submitted to Seaport
   */
  protocol_data?: {
      /**
       * Criteria
       * @description Criteria for the collection or trait offer
       */
      criteria: {
          /**
           * Protocol Address
           * @description Exchange contract address. Must be one of ['0x0000000000000068f116a894984e2db1123eb395']
           */
          protocol_address: string;
      };
  };
};

/**
 * Type of OPEN_SEA's OPEN_SEA_CREATE_CRITERIA_OFFER tool output.
 */
type OPEN_SEA_CREATE_CRITERIA_OFFER_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_CREATE_ITEM_OFFER tool input.
 */
type OPEN_SEA_CREATE_ITEM_OFFER_INPUT = {
  /**
   * Chain
   * @description The blockchain on which to filter the results
   */
  chain?: string;
  /**
   * Parameters
   * @description Order components object containing the order details
   */
  parameters?: {
      /**
       * Order Type
       * @description The type of order
       */
      orderType: number;
  };
  /**
   * Protocol
   * @description The token settlement protocol to use in the request
   */
  protocol?: string;
  /**
   * Protocol Address
   * @description Exchange contract address. Must be one of ['0x0000000000000068f116a894984e2db1123eb395']
   */
  protocol_address?: string;
  /**
   * Signature
   * @description Signature of the signed type data represented by the parameters field
   */
  signature?: string;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_CREATE_ITEM_OFFER tool output.
 */
type OPEN_SEA_CREATE_ITEM_OFFER_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_CREATE_LISTING tool input.
 */
type OPEN_SEA_CREATE_LISTING_INPUT = {
  /**
   * Chain
   * @description The blockchain on which to filter the results
   */
  chain?: string;
  /**
   * Parameters
   * @description Order components object containing the order details
   */
  parameters?: {
      /**
       * Order Type
       * @description The type of order
       */
      orderType: number;
  };
  /**
   * Protocol
   * @description The token settlement protocol to use in the request
   */
  protocol?: string;
  /**
   * Protocol Address
   * @description Exchange contract address. Must be one of ['0x0000000000000068f116a894984e2db1123eb395']
   */
  protocol_address?: string;
  /**
   * Signature
   * @description Signature of the signed type data represented by the parameters field
   */
  signature?: string;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_CREATE_LISTING tool output.
 */
type OPEN_SEA_CREATE_LISTING_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_FULFILL_LISTING tool input.
 */
type OPEN_SEA_FULFILL_LISTING_INPUT = {
  /**
   * Listing
   * @description Listing to get fulfillment data for
   */
  listing?: {
      /**
       * Fulfiller
       * @description Fulfiller address
       */
      fulfiller: {
          /**
           * Address
           * @description Fulfiller address
           */
          address: string;
      };
  };
};

/**
 * Type of OPEN_SEA's OPEN_SEA_FULFILL_LISTING tool output.
 */
type OPEN_SEA_FULFILL_LISTING_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_FULFILL_OFFER tool input.
 */
type OPEN_SEA_FULFILL_OFFER_INPUT = {
  /**
   * Offer
   * @description Offer to get fulfillment data for
   */
  offer?: {
      /**
       * ConsiderationObject
       * @description If the offer you are fulfilling is a criteria offer, the NFT you are using to fulfill the offer with. The fulfiller account must own this NFT or the request will not succeed
       * @default null
       */
      consideration: Record<string, never> | null;
      /**
       * Fulfiller
       * @description Fulfiller address
       */
      fulfiller: {
          /**
           * Address
           * @description Fulfiller address
           */
          address: string;
      };
  };
};

/**
 * Type of OPEN_SEA's OPEN_SEA_FULFILL_OFFER tool output.
 */
type OPEN_SEA_FULFILL_OFFER_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_ACCOUNT tool input.
 */
type OPEN_SEA_GET_ACCOUNT_INPUT = {
  /**
   * Address Or Username
   * @description The public blockchain address or OpenSea username
   */
  address_or_username?: string;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_ACCOUNT tool output.
 */
type OPEN_SEA_GET_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_ALL_LISTINGS_BY_COLLECTION tool input.
 */
type OPEN_SEA_GET_ALL_LISTINGS_BY_COLLECTION_INPUT = {
  /**
   * Collection Slug
   * @description Unique string to identify a collection on OpenSea. This can be found by visiting the collection on the OpenSea website and noting the last path parameter
   */
  collection_slug?: string;
  /**
   * Limit
   * @description The number of listings to return. Must be between 1 and 100
   * @default 100
   */
  limit: number | null;
  /**
   * Next
   * @description The cursor for the next page of results
   * @default null
   */
  next: string | null;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_ALL_LISTINGS_BY_COLLECTION tool output.
 */
type OPEN_SEA_GET_ALL_LISTINGS_BY_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_ALL_OFFERS_BY_COLLECTION tool input.
 */
type OPEN_SEA_GET_ALL_OFFERS_BY_COLLECTION_INPUT = {
  /**
   * Collection Slug
   * @description Unique string to identify a collection on OpenSea. This can be found by visiting the collection on the OpenSea website and noting the last path parameter
   */
  collection_slug?: string;
  /**
   * Limit
   * @description The number of offers to return. Must be between 1 and 100
   * @default 100
   */
  limit: number | null;
  /**
   * Next
   * @description The cursor for the next page of results
   * @default null
   */
  next: string | null;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_ALL_OFFERS_BY_COLLECTION tool output.
 */
type OPEN_SEA_GET_ALL_OFFERS_BY_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_BEST_LISTINGS_BY_COLLECTION tool input.
 */
type OPEN_SEA_GET_BEST_LISTINGS_BY_COLLECTION_INPUT = {
  /**
   * Collection Slug
   * @description Unique string to identify a collection on OpenSea. This can be found by visiting the collection on the OpenSea website and noting the last path parameter
   */
  collection_slug?: string;
  /**
   * Include Private Listings
   * @description If true, will include private listings
   * @default false
   */
  include_private_listings: boolean | null;
  /**
   * Limit
   * @description The number of listings to return. Must be between 1 and 100
   * @default 100
   */
  limit: number | null;
  /**
   * Next
   * @description The cursor for the next page of results
   * @default null
   */
  next: string | null;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_BEST_LISTINGS_BY_COLLECTION tool output.
 */
type OPEN_SEA_GET_BEST_LISTINGS_BY_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_BEST_LISTING_BY_NFT tool input.
 */
type OPEN_SEA_GET_BEST_LISTING_BY_NFT_INPUT = {
  /**
   * Collection Slug
   * @description Unique string to identify a collection on OpenSea. This can be found by visiting the collection on the OpenSea website and noting the last path parameter
   */
  collection_slug?: string;
  /**
   * Identifier
   * @description The NFT token id
   */
  identifier?: string;
  /**
   * Include Private Listings
   * @description If true, will include private listings
   * @default false
   */
  include_private_listings: boolean | null;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_BEST_LISTING_BY_NFT tool output.
 */
type OPEN_SEA_GET_BEST_LISTING_BY_NFT_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_BEST_OFFER_BY_NFT tool input.
 */
type OPEN_SEA_GET_BEST_OFFER_BY_NFT_INPUT = {
  /**
   * Collection Slug
   * @description Unique string to identify a collection on OpenSea. This can be found by visiting the collection on the OpenSea website and noting the last path parameter
   */
  collection_slug?: string;
  /**
   * Identifier
   * @description The NFT token id
   */
  identifier?: string;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_BEST_OFFER_BY_NFT tool output.
 */
type OPEN_SEA_GET_BEST_OFFER_BY_NFT_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_COLLECTION tool input.
 */
type OPEN_SEA_GET_COLLECTION_INPUT = {
  /**
   * Collection Slug
   * @description Unique string to identify a collection on OpenSea. This can be found by visiting the collection on the OpenSea website and noting the last path parameter
   */
  collection_slug?: string;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_COLLECTION tool output.
 */
type OPEN_SEA_GET_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_COLLECTIONS tool input.
 */
type OPEN_SEA_GET_COLLECTIONS_INPUT = {
  /**
   * Chain
   * @description The blockchain on which to filter the results
   * @default null
   */
  chain: string | null;
  /**
   * Creator Username
   * @description If set, will only return collections created by the given OpenSea username
   * @default null
   */
  creator_username: string | null;
  /**
   * Include Hidden
   * @description If true, will return hidden collections
   * @default false
   */
  include_hidden: boolean | null;
  /**
   * Limit
   * @description The number of collections to return. Must be between 1 and 100
   * @default 100
   */
  limit: number | null;
  /**
   * Next
   * @description The cursor for the next page of results
   * @default null
   */
  next: string | null;
  /**
   * Order By
   * @description The order in which to sort the collections
   * @default created_date
   */
  order_by: string | null;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_COLLECTIONS tool output.
 */
type OPEN_SEA_GET_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_COLLECTION_STATS tool input.
 */
type OPEN_SEA_GET_COLLECTION_STATS_INPUT = {
  /**
   * Collection Slug
   * @description Unique string to identify a collection on OpenSea
   */
  collection_slug?: string;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_COLLECTION_STATS tool output.
 */
type OPEN_SEA_GET_COLLECTION_STATS_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_CONTRACT tool input.
 */
type OPEN_SEA_GET_CONTRACT_INPUT = {
  /**
   * Address
   * @description The public blockchain address
   */
  address?: string;
  /**
   * Chain
   * @description The blockchain on which to filter the results
   */
  chain?: string;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_CONTRACT tool output.
 */
type OPEN_SEA_GET_CONTRACT_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_EVENTS tool input.
 */
type OPEN_SEA_GET_EVENTS_INPUT = {
  /**
   * After
   * @description Filter to only include events that occurred at or after the given timestamp (Unix epoch in seconds)
   * @default null
   */
  after: number | null;
  /**
   * Before
   * @description Filter to only include events that occurred before the given timestamp (Unix epoch in seconds)
   * @default null
   */
  before: number | null;
  /**
   * Event Type
   * @description The type of event to filter by. If not provided, only sales will be returned
   * @default null
   */
  event_type: string[] | null;
  /**
   * Limit
   * @description The number of events to return. Must be between 1 and 50
   * @default 50
   */
  limit: number | null;
  /**
   * Next
   * @description The cursor for the next page of results
   * @default null
   */
  next: string | null;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_EVENTS tool output.
 */
type OPEN_SEA_GET_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_LISTINGS tool input.
 */
type OPEN_SEA_GET_LISTINGS_INPUT = {
  /**
   * Asset Contract Address
   * @description Filter results by the contract address for NFT(s). If used, token_ids is required
   * @default null
   */
  asset_contract_address: string | null;
  /**
   * Chain
   * @description The blockchain on which to filter the results
   */
  chain?: string;
  /**
   * Cursor
   * @description The cursor for the next page of results
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description The number of orders to return. Must be between 1 and 50
   * @default 20
   */
  limit: number | null;
  /**
   * Listed After
   * Format: date-time
   * @description Filter to only include orders that were listed after the given timestamp
   * @default null
   */
  listed_after: string | null;
  /**
   * Listed Before
   * Format: date-time
   * @description Filter to only include orders that were listed before the given timestamp
   * @default null
   */
  listed_before: string | null;
  /**
   * Maker
   * @description Filter results by the order maker's wallet address
   * @default null
   */
  maker: string | null;
  /**
   * Order By
   * @description The order in which to sort the results. If eth_price is used, asset_contract_address and token_id are required
   * @default created_date
   */
  order_by: string | null;
  /**
   * Order Direction
   * @description The direction in which to sort the results
   * @default desc
   */
  order_direction: string | null;
  /**
   * Payment Token Address
   * @description Payment Token Address to filter results. This ensures all returned orders are listed in a single currency
   * @default null
   */
  payment_token_address: string | null;
  /**
   * Protocol
   * @description The token settlement protocol to use in the request
   */
  protocol?: string;
  /**
   * Taker
   * @description Filter results by the order taker's wallet address
   * @default null
   */
  taker: string | null;
  /**
   * Token Ids
   * @description An array of token IDs to search for. If used, asset_contract_address is required
   * @default null
   */
  token_ids: number[] | null;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_LISTINGS tool output.
 */
type OPEN_SEA_GET_LISTINGS_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_NFT tool input.
 */
type OPEN_SEA_GET_NFT_INPUT = {
  /**
   * Address
   * @description The public blockchain address
   */
  address?: string;
  /**
   * Chain
   * @description The blockchain on which to filter the results
   */
  chain?: string;
  /**
   * Identifier
   * @description The NFT token id
   */
  identifier?: string;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_NFT tool output.
 */
type OPEN_SEA_GET_NFT_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_ORDER tool input.
 */
type OPEN_SEA_GET_ORDER_INPUT = {
  /**
   * Chain
   * @description The blockchain on which to filter the results
   */
  chain?: string;
  /**
   * Order Hash
   * @description The hash of the order to retrieve
   */
  order_hash?: string;
  /**
   * Protocol Address
   * @description The contract address of the protocol to use in the request
   */
  protocol_address?: string;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_ORDER tool output.
 */
type OPEN_SEA_GET_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_PAYMENT_TOKEN tool input.
 */
type OPEN_SEA_GET_PAYMENT_TOKEN_INPUT = {
  /**
   * Address
   * @description The public blockchain address
   */
  address?: string;
  /**
   * Chain
   * @description The blockchain on which to filter the results
   */
  chain?: string;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_PAYMENT_TOKEN tool output.
 */
type OPEN_SEA_GET_PAYMENT_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_GET_TRAITS tool input.
 */
type OPEN_SEA_GET_TRAITS_INPUT = {
  /**
   * Collection Slug
   * @description Unique string to identify a collection on OpenSea. This can be found by visiting the collection on the OpenSea website and noting the last path parameter
   */
  collection_slug?: string;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_GET_TRAITS tool output.
 */
type OPEN_SEA_GET_TRAITS_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type of OPEN_SEA's OPEN_SEA_REFRESH_NFT_METADATA tool input.
 */
type OPEN_SEA_REFRESH_NFT_METADATA_INPUT = {
  /**
   * Address
   * @description The public blockchain address
   */
  address?: string;
  /**
   * Chain
   * @description The blockchain on which to filter the results
   */
  chain?: string;
  /**
   * Identifier
   * @description The NFT token id
   */
  identifier?: string;
};

/**
 * Type of OPEN_SEA's OPEN_SEA_REFRESH_NFT_METADATA tool output.
 */
type OPEN_SEA_REFRESH_NFT_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data returned from the API
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
 * Type map of all available tool input types for toolkit "OPEN_SEA".
 */
export type OPEN_SEA_TOOL_INPUTS = {
  BUILD_CRITERIA_OFFER: OPEN_SEA_BUILD_CRITERIA_OFFER_INPUT
  CANCEL_ORDER: OPEN_SEA_CANCEL_ORDER_INPUT
  CREATE_CRITERIA_OFFER: OPEN_SEA_CREATE_CRITERIA_OFFER_INPUT
  CREATE_ITEM_OFFER: OPEN_SEA_CREATE_ITEM_OFFER_INPUT
  CREATE_LISTING: OPEN_SEA_CREATE_LISTING_INPUT
  FULFILL_LISTING: OPEN_SEA_FULFILL_LISTING_INPUT
  FULFILL_OFFER: OPEN_SEA_FULFILL_OFFER_INPUT
  GET_ACCOUNT: OPEN_SEA_GET_ACCOUNT_INPUT
  GET_ALL_LISTINGS_BY_COLLECTION: OPEN_SEA_GET_ALL_LISTINGS_BY_COLLECTION_INPUT
  GET_ALL_OFFERS_BY_COLLECTION: OPEN_SEA_GET_ALL_OFFERS_BY_COLLECTION_INPUT
  GET_BEST_LISTINGS_BY_COLLECTION: OPEN_SEA_GET_BEST_LISTINGS_BY_COLLECTION_INPUT
  GET_BEST_LISTING_BY_NFT: OPEN_SEA_GET_BEST_LISTING_BY_NFT_INPUT
  GET_BEST_OFFER_BY_NFT: OPEN_SEA_GET_BEST_OFFER_BY_NFT_INPUT
  GET_COLLECTION: OPEN_SEA_GET_COLLECTION_INPUT
  GET_COLLECTIONS: OPEN_SEA_GET_COLLECTIONS_INPUT
  GET_COLLECTION_STATS: OPEN_SEA_GET_COLLECTION_STATS_INPUT
  GET_CONTRACT: OPEN_SEA_GET_CONTRACT_INPUT
  GET_EVENTS: OPEN_SEA_GET_EVENTS_INPUT
  GET_LISTINGS: OPEN_SEA_GET_LISTINGS_INPUT
  GET_NFT: OPEN_SEA_GET_NFT_INPUT
  GET_ORDER: OPEN_SEA_GET_ORDER_INPUT
  GET_PAYMENT_TOKEN: OPEN_SEA_GET_PAYMENT_TOKEN_INPUT
  GET_TRAITS: OPEN_SEA_GET_TRAITS_INPUT
  REFRESH_NFT_METADATA: OPEN_SEA_REFRESH_NFT_METADATA_INPUT
}

/**
 * Type map of all available tool input types for toolkit "OPEN_SEA".
 */
export type OPEN_SEA_TOOL_OUTPUTS = {
  BUILD_CRITERIA_OFFER: OPEN_SEA_BUILD_CRITERIA_OFFER_OUTPUT
  CANCEL_ORDER: OPEN_SEA_CANCEL_ORDER_OUTPUT
  CREATE_CRITERIA_OFFER: OPEN_SEA_CREATE_CRITERIA_OFFER_OUTPUT
  CREATE_ITEM_OFFER: OPEN_SEA_CREATE_ITEM_OFFER_OUTPUT
  CREATE_LISTING: OPEN_SEA_CREATE_LISTING_OUTPUT
  FULFILL_LISTING: OPEN_SEA_FULFILL_LISTING_OUTPUT
  FULFILL_OFFER: OPEN_SEA_FULFILL_OFFER_OUTPUT
  GET_ACCOUNT: OPEN_SEA_GET_ACCOUNT_OUTPUT
  GET_ALL_LISTINGS_BY_COLLECTION: OPEN_SEA_GET_ALL_LISTINGS_BY_COLLECTION_OUTPUT
  GET_ALL_OFFERS_BY_COLLECTION: OPEN_SEA_GET_ALL_OFFERS_BY_COLLECTION_OUTPUT
  GET_BEST_LISTINGS_BY_COLLECTION: OPEN_SEA_GET_BEST_LISTINGS_BY_COLLECTION_OUTPUT
  GET_BEST_LISTING_BY_NFT: OPEN_SEA_GET_BEST_LISTING_BY_NFT_OUTPUT
  GET_BEST_OFFER_BY_NFT: OPEN_SEA_GET_BEST_OFFER_BY_NFT_OUTPUT
  GET_COLLECTION: OPEN_SEA_GET_COLLECTION_OUTPUT
  GET_COLLECTIONS: OPEN_SEA_GET_COLLECTIONS_OUTPUT
  GET_COLLECTION_STATS: OPEN_SEA_GET_COLLECTION_STATS_OUTPUT
  GET_CONTRACT: OPEN_SEA_GET_CONTRACT_OUTPUT
  GET_EVENTS: OPEN_SEA_GET_EVENTS_OUTPUT
  GET_LISTINGS: OPEN_SEA_GET_LISTINGS_OUTPUT
  GET_NFT: OPEN_SEA_GET_NFT_OUTPUT
  GET_ORDER: OPEN_SEA_GET_ORDER_OUTPUT
  GET_PAYMENT_TOKEN: OPEN_SEA_GET_PAYMENT_TOKEN_OUTPUT
  GET_TRAITS: OPEN_SEA_GET_TRAITS_OUTPUT
  REFRESH_NFT_METADATA: OPEN_SEA_REFRESH_NFT_METADATA_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's OPEN_SEA toolkit.
 */
export const OPEN_SEA = {
  slug: "open_sea",
  tools: {
    /**
     * Build a portion of a criteria offer including the merkle tree needed to post an offer.
     */
    BUILD_CRITERIA_OFFER: "OPEN_SEA_BUILD_CRITERIA_OFFER",
    /**
     * Offchain cancel a single order, offer or listing, by its order hash when protected by the signedzone. protocol and chain are required to prevent hash collisions. please note cancellation is only assured if a fulfillment signature was not vended prior to cancellation.
     */
    CANCEL_ORDER: "OPEN_SEA_CANCEL_ORDER",
    /**
     * Create a criteria offer to purchase any nft in a collection or which matches the specified trait.
     */
    CREATE_CRITERIA_OFFER: "OPEN_SEA_CREATE_CRITERIA_OFFER",
    /**
     * Create an offer to purchase a single nft (erc721 or erc1155).
     */
    CREATE_ITEM_OFFER: "OPEN_SEA_CREATE_ITEM_OFFER",
    /**
     * List a single nft (erc721 or erc1155) for sale on the opensea marketplace.
     */
    CREATE_LISTING: "OPEN_SEA_CREATE_LISTING",
    /**
     * Retrieve all the information, including signatures, needed to fulfill a listing directly onchain.
     */
    FULFILL_LISTING: "OPEN_SEA_FULFILL_LISTING",
    /**
     * Retrieve all the information, including signatures, needed to fulfill an offer directly onchain.
     */
    FULFILL_OFFER: "OPEN_SEA_FULFILL_OFFER",
    /**
     * Get an opensea account profile including details such as bio, social media usernames, and profile image.
     */
    GET_ACCOUNT: "OPEN_SEA_GET_ACCOUNT",
    /**
     * Get all active, valid listings for a single collection.
     */
    GET_ALL_LISTINGS_BY_COLLECTION: "OPEN_SEA_GET_ALL_LISTINGS_BY_COLLECTION",
    /**
     * Get all active, valid offers for the specified collection. this includes individual and criteria offers.
     */
    GET_ALL_OFFERS_BY_COLLECTION: "OPEN_SEA_GET_ALL_OFFERS_BY_COLLECTION",
    /**
     * Get the cheapest priced active, valid listings on a single collection.
     */
    GET_BEST_LISTINGS_BY_COLLECTION: "OPEN_SEA_GET_BEST_LISTINGS_BY_COLLECTION",
    /**
     * Get the best listing for an nft.
     */
    GET_BEST_LISTING_BY_NFT: "OPEN_SEA_GET_BEST_LISTING_BY_NFT",
    /**
     * Get the best offers for an nft.
     */
    GET_BEST_OFFER_BY_NFT: "OPEN_SEA_GET_BEST_OFFER_BY_NFT",
    /**
     * Get a single collection including details such as fees, traits, and links.
     */
    GET_COLLECTION: "OPEN_SEA_GET_COLLECTION",
    /**
     * Get a list of opensea collections with optional filtering and pagination.
     */
    GET_COLLECTIONS: "OPEN_SEA_GET_COLLECTIONS",
    /**
     * Get stats for a single collection on opensea.
     */
    GET_COLLECTION_STATS: "OPEN_SEA_GET_COLLECTION_STATS",
    /**
     * Get a smart contract for a given chain and address.
     */
    GET_CONTRACT: "OPEN_SEA_GET_CONTRACT",
    /**
     * Get a list of events from opensea based on various filters like timestamps and event types.
     */
    GET_EVENTS: "OPEN_SEA_GET_EVENTS",
    /**
     * Get the complete set of active, valid listings.
     */
    GET_LISTINGS: "OPEN_SEA_GET_LISTINGS",
    /**
     * Get metadata, traits, ownership information, and rarity for a single nft.
     */
    GET_NFT: "OPEN_SEA_GET_NFT",
    /**
     * Get a single order, offer or listing, by its order hash. protocol and chain are required to prevent hash collisions.
     */
    GET_ORDER: "OPEN_SEA_GET_ORDER",
    /**
     * Get a smart contract for a given chain and address.
     */
    GET_PAYMENT_TOKEN: "OPEN_SEA_GET_PAYMENT_TOKEN",
    /**
     * Get the traits in a collection.
     */
    GET_TRAITS: "OPEN_SEA_GET_TRAITS",
    /**
     * Refresh metadata for a single nft.
     */
    REFRESH_NFT_METADATA: "OPEN_SEA_REFRESH_NFT_METADATA",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "OPEN_SEA".
 */
export type OPEN_SEA_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "OPEN_SEA".
 */
export type OPEN_SEA_TRIGGER_EVENTS = {}
