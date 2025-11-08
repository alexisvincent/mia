// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ALCHEMY's ALCHEMY_GET_CONTRACT_METADATA tool input.
 */
type ALCHEMY_GET_CONTRACT_METADATA_INPUT = {
  /**
   * Contract Address
   * @description The contract address of the NFT collection
   */
  contractAddress?: string;
};

/**
 * Type of ALCHEMY's ALCHEMY_GET_CONTRACT_METADATA tool output.
 */
type ALCHEMY_GET_CONTRACT_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description The contract address
       */
      address: string;
      /**
       * Contract Metadata
       * @description Contract metadata containing name, symbol, totalSupply, etc.
       */
      contractMetadata: {
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
 * Type of ALCHEMY's ALCHEMY_GET_NFT_SALES tool input.
 */
type ALCHEMY_GET_NFT_SALES_INPUT = {
  /**
   * Contract Address
   * @description The contract address of the NFT collection
   */
  contract_address?: string;
  /**
   * From Block
   * @description The starting block number (in hex) to retrieve sales from
   * @default null
   */
  from_block: string | null;
  /**
   * Limit
   * @description Maximum number of sales to return (default: 100)
   * @default null
   */
  limit: number | null;
  /**
   * Marketplace
   * @description Filter sales by marketplace (e.g., seaport, looksrare)
   * @default null
   */
  marketplace: string | null;
  /**
   * Order
   * @description Sort order for the results
   * @default null
   */
  order: string | null;
  /**
   * To Block
   * @description The ending block number (in hex) to retrieve sales from
   * @default null
   */
  to_block: string | null;
};

/**
 * Type of ALCHEMY's ALCHEMY_GET_NFT_SALES tool output.
 */
type ALCHEMY_GET_NFT_SALES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Nft Sales
       * @description List of NFT sales matching the query criteria
       */
      nftSales: {
          /**
           * Block Number
           * @description The block number where the sale occurred
           */
          blockNumber: number;
          /**
           * Bundle Index
           * @description Index in the bundle if part of a bundle sale
           * @default null
           */
          bundleIndex: number | null;
          /**
           * Buyer Address
           * @description The address of the buyer
           */
          buyerAddress: string;
          /**
           * Contract Address
           * @description The contract address of the NFT collection
           */
          contractAddress: string;
          /**
           * Log Index
           * @description The log index in the transaction receipt
           */
          logIndex: number;
          /**
           * Maker
           * @description The address of the maker in the transaction
           */
          maker: string;
          /**
           * Marketplace
           * @description The marketplace where the sale occurred
           */
          marketplace: string;
          /**
           * Price
           * @description The price details of the sale
           */
          price: {
              [key: string]: unknown;
          };
          /**
           * Protocol Fee
           * @description Fee paid to the protocol
           * @default null
           */
          protocolFee: {
              [key: string]: unknown;
          } | null;
          /**
           * Quantity
           * @description The quantity of NFTs sold in this transaction
           */
          quantity: number;
          /**
           * Royalty Fee
           * @description Royalty fee paid to creators
           * @default null
           */
          royaltyFee: {
              [key: string]: unknown;
          } | null;
          /**
           * Seller Address
           * @description The address of the seller
           */
          sellerAddress: string;
          /**
           * Seller Fee
           * @description Fee paid by the seller
           * @default null
           */
          sellerFee: {
              [key: string]: unknown;
          } | null;
          /**
           * Taker
           * @description The address of the taker in the transaction
           */
          taker: string;
          /**
           * Token Id
           * @description The token ID of the NFT that was sold
           */
          tokenId: string;
          /**
           * Transaction Hash
           * @description The hash of the transaction
           */
          transactionHash: string;
      }[];
      /**
       * Page Key
       * @description Key for pagination if more results are available
       * @default null
       */
      pageKey: string | null;
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
 * Type of ALCHEMY's ALCHEMY_GET_NF_TS_FOR_CONTRACT tool input.
 */
type ALCHEMY_GET_NF_TS_FOR_CONTRACT_INPUT = {
  /**
   * Contract Address
   * @description The contract address of the NFT collection
   */
  contract_address?: string;
  /**
   * Page Key
   * @description Key for pagination to get the next page of NFTs
   * @default null
   */
  page_key: string | null;
  /**
   * Page Size
   * @description Number of NFTs to return per page (max: 100)
   * @default 100
   */
  page_size: number | null;
  /**
   * With Metadata
   * @description Include NFT metadata in the response
   * @default true
   */
  with_metadata: boolean | null;
};

/**
 * Type of ALCHEMY's ALCHEMY_GET_NF_TS_FOR_CONTRACT tool output.
 */
type ALCHEMY_GET_NF_TS_FOR_CONTRACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Nfts
       * @description List of NFTs in the collection
       */
      nfts: {
          /**
           * Balance
           * @description Balance of the NFT if ERC1155
           * @default null
           */
          balance: string | null;
          /**
           * Description
           * @description Description of the NFT
           * @default null
           */
          description: string | null;
          /**
           * NFTMetadata
           * @description Metadata of the NFT if requested
           * @default null
           */
          metadata: {
              /**
               * Attributes
               * @description List of NFT attributes/traits
               * @default null
               */
              attributes: {
                  [key: string]: unknown;
              }[] | null;
              /**
               * Description
               * @description Description of the NFT
               * @default null
               */
              description: string | null;
              /**
               * Image
               * @description URL of the NFT image
               * @default null
               */
              image: string | null;
              /**
               * Name
               * @description Name of the NFT
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Time Last Updated
           * @description Timestamp of when the NFT was last updated
           */
          timeLastUpdated: string;
          /**
           * Title
           * @description Title of the NFT
           * @default null
           */
          title: string | null;
          /**
           * Token Id
           * @description The token ID of the NFT
           */
          tokenId: string;
          /**
           * Token Type
           * @description The type of token (e.g., 'ERC721', 'ERC1155')
           */
          tokenType: string;
          /**
           * Token Uri
           * @description URI where the NFT metadata is stored
           * @default null
           */
          tokenUri: string | null;
      }[];
      /**
       * Page Key
       * @description Key for the next page of results
       * @default null
       */
      pageKey: string | null;
      /**
       * Total Count
       * @description Total number of NFTs in the collection
       * @default null
       */
      totalCount: number | null;
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
 * Type of ALCHEMY's ALCHEMY_GET_OWNERS_FOR_NFT tool input.
 */
type ALCHEMY_GET_OWNERS_FOR_NFT_INPUT = {
  /**
   * Contract Address
   * @description The contract address of the NFT
   */
  contractAddress?: string;
  /**
   * Page Key
   * @description Optional page key to paginate the next page for large requests
   * @default null
   */
  pageKey: string | null;
  /**
   * Page Size
   * @description Sets the total number of owners to return in the response
   * @default null
   */
  pageSize: number | null;
  /**
   * Token Id
   * @description The token ID of the NFT
   */
  tokenId?: string;
};

/**
 * Type of ALCHEMY's ALCHEMY_GET_OWNERS_FOR_NFT tool output.
 */
type ALCHEMY_GET_OWNERS_FOR_NFT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Owners
       * @description Array of owner addresses for the provided token
       */
      owners: string[];
      /**
       * Page Key
       * @description Page key for the next page of results if available
       * @default null
       */
      pageKey: string | null;
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
 * Type of ALCHEMY's ALCHEMY_GET_TOKEN_BALANCES tool input.
 */
type ALCHEMY_GET_TOKEN_BALANCES_INPUT = {
  /**
   * Address
   * @description The wallet address to get token balances for
   */
  address?: string;
  /**
   * Contract Addresses
   * @description Optional list of specific token contract addresses to get balances for
   * @default null
   */
  contract_addresses: string[] | null;
  /**
   * Max Count
   * @description Optional maximum number of results to return
   * @default null
   */
  max_count: number | null;
  /**
   * Page Key
   * @description Optional page key for pagination
   * @default null
   */
  page_key: string | null;
};

/**
 * Type of ALCHEMY's ALCHEMY_GET_TOKEN_BALANCES tool output.
 */
type ALCHEMY_GET_TOKEN_BALANCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Address for which token balances were returned
       */
      address: string;
      /**
       * Token Balances
       * @description Array of token balance objects
       */
      tokenBalances: {
          /**
           * Contract Address
           * @description The contract address of the token
           */
          contractAddress: string;
          /**
           * Error
           * @description Error message if balance retrieval failed
           * @default null
           */
          error: string | null;
          /**
           * Token Balance
           * @description The balance of the token in hex format
           */
          tokenBalance: string;
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
 * Type of ALCHEMY's ALCHEMY_GET_TOKEN_METADATA tool input.
 */
type ALCHEMY_GET_TOKEN_METADATA_INPUT = {
  /**
   * Contract Address
   * @description The contract address of the token to get metadata for
   */
  contract_address?: string;
};

/**
 * Type of ALCHEMY's ALCHEMY_GET_TOKEN_METADATA tool output.
 */
type ALCHEMY_GET_TOKEN_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Decimals
       * @description Number of decimals for the token
       * @default null
       */
      decimals: number | null;
      /**
       * Logo
       * @description URL of the token's logo
       * @default null
       */
      logo: string | null;
      /**
       * Name
       * @description Name of the token
       * @default null
       */
      name: string | null;
      /**
       * Symbol
       * @description Symbol of the token
       * @default null
       */
      symbol: string | null;
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
 * Type of ALCHEMY's ALCHEMY_GET_TRANSACTION_COUNT tool input.
 */
type ALCHEMY_GET_TRANSACTION_COUNT_INPUT = {
  /**
   * Address
   * @description The Ethereum address to get the transaction count for
   */
  address?: string;
  /**
   * Block Tag
   * @description The block number or tag to get the transaction count from
   * @default latest
   */
  block_tag: string;
};

/**
 * Type of ALCHEMY's ALCHEMY_GET_TRANSACTION_COUNT tool output.
 */
type ALCHEMY_GET_TRANSACTION_COUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Request ID
       * @default 1
       */
      id: number;
      /**
       * Jsonrpc
       * @description JSON-RPC version
       * @default 2.0
       */
      jsonrpc: string;
      /**
       * Result
       * @description The number of transactions in hexadecimal format
       */
      result: string;
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
 * Type map of all available tool input types for toolkit "ALCHEMY".
 */
export type ALCHEMY_TOOL_INPUTS = {
  GET_CONTRACT_METADATA: ALCHEMY_GET_CONTRACT_METADATA_INPUT
  GET_NFT_SALES: ALCHEMY_GET_NFT_SALES_INPUT
  GET_NF_TS_FOR_CONTRACT: ALCHEMY_GET_NF_TS_FOR_CONTRACT_INPUT
  GET_OWNERS_FOR_NFT: ALCHEMY_GET_OWNERS_FOR_NFT_INPUT
  GET_TOKEN_BALANCES: ALCHEMY_GET_TOKEN_BALANCES_INPUT
  GET_TOKEN_METADATA: ALCHEMY_GET_TOKEN_METADATA_INPUT
  GET_TRANSACTION_COUNT: ALCHEMY_GET_TRANSACTION_COUNT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ALCHEMY".
 */
export type ALCHEMY_TOOL_OUTPUTS = {
  GET_CONTRACT_METADATA: ALCHEMY_GET_CONTRACT_METADATA_OUTPUT
  GET_NFT_SALES: ALCHEMY_GET_NFT_SALES_OUTPUT
  GET_NF_TS_FOR_CONTRACT: ALCHEMY_GET_NF_TS_FOR_CONTRACT_OUTPUT
  GET_OWNERS_FOR_NFT: ALCHEMY_GET_OWNERS_FOR_NFT_OUTPUT
  GET_TOKEN_BALANCES: ALCHEMY_GET_TOKEN_BALANCES_OUTPUT
  GET_TOKEN_METADATA: ALCHEMY_GET_TOKEN_METADATA_OUTPUT
  GET_TRANSACTION_COUNT: ALCHEMY_GET_TRANSACTION_COUNT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ALCHEMY toolkit.
 */
export const ALCHEMY = {
  slug: "alchemy",
  tools: {
    /**
     * This tool retrieves metadata for a given nft smart contract. essential for obtaining basic nft collection details such as contract name, symbol, total supply, token type (erc721 vs erc1155), contract deployer address, deployed block number, opensea metadata, and contract verification status.
     */
    GET_CONTRACT_METADATA: "ALCHEMY_GET_CONTRACT_METADATA",
    /**
     * This tool will retrieve nft sales data across various marketplaces. it allows users to query historical nft sales data with filtering options such as fromblock, toblock, order, marketplace, and limit in order to track nft sales activity, analyze historical data, monitor specific collections, and get real-time updates on nft transactions.
     */
    GET_NFT_SALES: "ALCHEMY_GET_NFT_SALES",
    /**
     * This tool retrieves all nfts for a given contract address. it is designed to return a complete list of nfts from a specific nft collection by accepting parameters such as contractaddress (required), withmetadata (optional), pagesize (optional), and pagekey (optional). the tool is useful for analyzing collections, building nft marketplaces, and creating collection analytics.
     */
    GET_NF_TS_FOR_CONTRACT: "ALCHEMY_GET_NF_TS_FOR_CONTRACT",
    /**
     * This tool retrieves the owner(s) for a specific nft token, supporting both erc721 and erc1155 tokens on ethereum and several layer 2 chains such as polygon, arbitrum, optimism, and base. it requires the contract address and tokenid, and returns a list of owner addresses along with an optional pagination key for further results.
     */
    GET_OWNERS_FOR_NFT: "ALCHEMY_GET_OWNERS_FOR_NFT",
    /**
     * This tool retrieves erc20 token balances for a specified ethereum address. it can either return balances for all tokens an address has ever interacted with or for a specific set of token contract addresses. it is useful for checking token balances for wallets, monitoring erc20 token holdings, portfolio tracking, and defi applications.
     */
    GET_TOKEN_BALANCES: "ALCHEMY_GET_TOKEN_BALANCES",
    /**
     * This tool retrieves metadata for a given token contract address, including the token's name, symbol, decimals, and logo url if available. it is essential for applications that need to display token information, handle token transfers, or manage token listings.
     */
    GET_TOKEN_METADATA: "ALCHEMY_GET_TOKEN_METADATA",
    /**
     * This tool retrieves the number of transactions sent from a specific address (also known as the nonce). it uses the eth gettransactioncount endpoint to return the transaction count for an address at a specified block tag (latest, pending, earliest, or a hex block number), which is essential for determining the nonce for subsequent transactions.
     */
    GET_TRANSACTION_COUNT: "ALCHEMY_GET_TRANSACTION_COUNT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ALCHEMY".
 */
export type ALCHEMY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ALCHEMY".
 */
export type ALCHEMY_TRIGGER_EVENTS = {}
