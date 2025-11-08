// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BLOCKNATIVE's BLOCKNATIVE_CONFIGURE_FILTERS tool input.
 */
type BLOCKNATIVE_CONFIGURE_FILTERS_INPUT = {
  /**
   * Category Code
   * @description Must be the literal string 'configs'.
   * @constant
   */
  categoryCode?: "configs";
  /**
   * Config
   * @description Nested object defining scope, filters, ABI decode and watch settings.
   */
  config?: {
      /**
       * Abi
       * @description Optional JSON ABI array to decode input data for transactions on the scoped contract.
       * @default null
       */
      abi: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Filters
       * @description Optional array of JSQL filter expressions. Only transactions matching all expressions will be forwarded.
       * @default null
       */
      filters: string[] | null;
      /**
       * Scope
       * @description Scope to apply configs to. Must be 'global' or a checksummed Ethereum address.
       */
      scope: string;
      /**
       * Watch Address
       * @description If true, automatically watch the scoped address (applies only if scope is an address).
       * @default null
       */
      watchAddress: boolean | null;
  };
  /**
   * Event Code
   * @description Must be the literal string 'put'.
   * @constant
   */
  eventCode?: "put";
};

/**
 * Type of BLOCKNATIVE's BLOCKNATIVE_CONFIGURE_FILTERS tool output.
 */
type BLOCKNATIVE_CONFIGURE_FILTERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Category Code
       * @description Echoes the 'configs' category code.
       */
      categoryCode: string;
      /**
       * ConfigureFiltersConfig
       * @description Configuration object for filters and ABI decoding on a given scope.
       * @default null
       */
      config: {
          /**
           * Abi
           * @description Optional JSON ABI array to decode input data for transactions on the scoped contract.
           * @default null
           */
          abi: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Filters
           * @description Optional array of JSQL filter expressions. Only transactions matching all expressions will be forwarded.
           * @default null
           */
          filters: string[] | null;
          /**
           * Scope
           * @description Scope to apply configs to. Must be 'global' or a checksummed Ethereum address.
           */
          scope: string;
          /**
           * Watch Address
           * @description If true, automatically watch the scoped address (applies only if scope is an address).
           * @default null
           */
          watchAddress: boolean | null;
      } | null;
      /**
       * Error
       * @description Error message if the configuration failed.
       * @default null
       */
      error: string | null;
      /**
       * Event Code
       * @description Echoes the 'put' event code.
       */
      eventCode: string;
      /**
       * Success
       * @description True if the configuration was accepted by the server.
       * @default null
       */
      success: boolean | null;
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
 * Type of BLOCKNATIVE's BLOCKNATIVE_GET_GAS_DISTRIBUTION tool input.
 */
type BLOCKNATIVE_GET_GAS_DISTRIBUTION_INPUT = object;

/**
 * Type of BLOCKNATIVE's BLOCKNATIVE_GET_GAS_DISTRIBUTION tool output.
 */
type BLOCKNATIVE_GET_GAS_DISTRIBUTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Current Block Number
       * @description Block number at the time of capture
       */
      currentBlockNumber: number;
      /**
       * Max Price
       * @description Highest priced transaction eligible for inclusion in the next block
       */
      maxPrice: number;
      /**
       * Ms Since Last Block
       * @description Milliseconds since the last block at the time of capture
       */
      msSinceLastBlock: number;
      /**
       * Network
       * @description Network name, e.g., 'main'
       */
      network: string;
      /**
       * System
       * @description Blockchain system, e.g., 'ethereum'
       */
      system: string;
      /**
       * Top N Distribution
       * @description Distribution of the top N priced pending transactions
       */
      topNDistribution: {
          /**
           * Distribution
           * @description List of [price, count] pairs ordered by ascending price
           */
          distribution: number[][];
          /**
           * N
           * @description Number of top priced pending transactions included in this distribution
           */
          n: number;
      };
      /**
       * Unit
       * @description Unit for prices, e.g., 'wei', 'gwei', or 'ether'
       */
      unit: string;
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
 * Type of BLOCKNATIVE's BLOCKNATIVE_GET_GAS_ORACLES tool input.
 */
type BLOCKNATIVE_GET_GAS_ORACLES_INPUT = object;

/**
 * Type of BLOCKNATIVE's BLOCKNATIVE_GET_GAS_ORACLES tool output.
 */
type BLOCKNATIVE_GET_GAS_ORACLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Oracles
       * @description List of supported gas oracles per chain.
       */
      oracles: {
          /**
           * Address By Version
           * @description Mapping of oracle contract versions to their on-chain addresses.
           */
          addressByVersion: {
              [key: string]: string;
          };
          /**
           * Arch
           * @description The blockchain architecture (e.g., 'evm').
           */
          arch: string;
          /**
           * Block Explorer Url
           * Format: uri
           * @description Public block explorer URL for the chain.
           */
          blockExplorerUrl: string;
          /**
           * Chain Id
           * @description Unique identifier for the blockchain (e.g., 1 for Ethereum).
           */
          chainId: number;
          /**
           * Icon
           * Format: uri
           * @description URL to the chain's icon asset.
           */
          icon: string;
          /**
           * Label
           * @description Human-readable name of the blockchain (e.g., 'Arbitrum One').
           */
          label: string;
          /**
           * Name
           * @description Internal network name (e.g., 'arbitrum').
           */
          name: string;
          /**
           * Network
           * @description Network environment name (e.g., 'mainnet', 'sepolia').
           */
          network: string;
          /**
           * Rpc Url
           * Format: uri
           * @description Public RPC endpoint for the chain.
           */
          rpcUrl: string;
          /**
           * Testnet
           * @description Whether this chain is a testnet.
           */
          testnet: boolean;
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
 * Type of BLOCKNATIVE's BLOCKNATIVE_GET_GAS_PRICES tool input.
 */
type BLOCKNATIVE_GET_GAS_PRICES_INPUT = {
  /**
   * Chainid
   * @description The network chain ID. Default is 1 (Ethereum Mainnet).
   * @default 1
   */
  chainid: number;
  /**
   * Confidence Levels
   * @description Up to 5 custom confidence levels to override defaults (99,95,90,80,70). For Ethereum Mainnet, values 1-99; for other chains, select from (99,95,90,80,70,50).
   * @default null
   */
  confidenceLevels: number[] | null;
  /**
   * Network
   * @description The specific network within the system (e.g., 'mainnet', 'sepolia').
   * @default null
   */
  network: string | null;
  /**
   * System
   * @description The chain ecosystem (e.g., 'ethereum', 'story', 'polygon').
   * @default null
   */
  system: string | null;
};

/**
 * Type of BLOCKNATIVE's BLOCKNATIVE_GET_GAS_PRICES tool output.
 */
type BLOCKNATIVE_GET_GAS_PRICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Block Prices
       * @description Confidence interval data for upcoming blocks.
       */
      blockPrices: {
          /**
           * Base Fee Per Gas
           * @description Base fee per gas for current block in gwei.
           */
          baseFeePerGas: number;
          /**
           * Blob Base Fee Per Gas
           * @description Base fee per gas for blobs for current block in gwei.
           */
          blobBaseFeePerGas: number;
          /**
           * Block Number
           * @description Block this prediction is for.
           */
          blockNumber: number;
          /**
           * Estimated Prices
           * @description List of price predictions at different confidence levels.
           */
          estimatedPrices: {
              /**
               * Confidence
               * @description Likelihood (0-99) the next block will contain a transaction with a gas price >= this price.
               */
              confidence: number;
              /**
               * Max Fee Per Gas
               * @description Max fee per gas in gwei.
               */
              maxFeePerGas: number;
              /**
               * Max Priority Fee Per Gas
               * @description Max priority fee per gas in gwei (tip).
               */
              maxPriorityFeePerGas: number;
              /**
               * Price
               * @description Price in gwei.
               */
              price: number;
          }[];
          /**
           * Estimated Transaction Count
           * @description Estimated number of transactions included in next block.
           */
          estimatedTransactionCount: number;
      }[];
      /**
       * Current Block Number
       * @description Block number at time of prediction.
       */
      currentBlockNumber: number;
      /**
       * Max Price
       * @description Highest priced transaction in the mempool.
       */
      maxPrice: number;
      /**
       * Ms Since Last Block
       * @description Milliseconds since last block was mined.
       */
      msSinceLastBlock: number;
      /**
       * Network
       * @description Specific network within the system.
       */
      network: string;
      /**
       * System
       * @description Chain ecosystem.
       */
      system: string;
      /**
       * Unit
       * @description Unit of gas price (e.g. 'gwei').
       */
      unit: string;
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
 * Type of BLOCKNATIVE's BLOCKNATIVE_GET_SUPPORTED_CHAINS tool input.
 */
type BLOCKNATIVE_GET_SUPPORTED_CHAINS_INPUT = object;

/**
 * Type of BLOCKNATIVE's BLOCKNATIVE_GET_SUPPORTED_CHAINS tool output.
 */
type BLOCKNATIVE_GET_SUPPORTED_CHAINS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Chains
       * @description List of supported chain metadata
       */
      chains: {
          /**
           * Arch
           * @description Blockchain architecture, e.g., 'evm'
           */
          arch: string;
          /**
           * Chain Id
           * @description Unique blockchain identifier, e.g., 1 for Ethereum
           */
          chainId: number;
          /**
           * Features
           * @description List of features supported on this chain
           */
          features: string[];
          /**
           * Icon
           * @description URL to the blockchain's icon
           * @default null
           */
          icon: string | null;
          /**
           * Label
           * @description Human-readable blockchain name, e.g., 'Polygon'
           */
          label: string;
          /**
           * Network
           * @description Network name, e.g., 'mainnet'
           */
          network: string;
          /**
           * System
           * @description Ecosystem name, e.g., 'ethereum'
           */
          system: string;
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
 * Type of BLOCKNATIVE's BLOCKNATIVE_PREDICTION_API_BASEFEE_ESTIMATES tool input.
 */
type BLOCKNATIVE_PREDICTION_API_BASEFEE_ESTIMATES_INPUT = object;

/**
 * Type of BLOCKNATIVE's BLOCKNATIVE_PREDICTION_API_BASEFEE_ESTIMATES tool output.
 */
type BLOCKNATIVE_PREDICTION_API_BASEFEE_ESTIMATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Base Fee Per Gas
       * @description Base fee for the current pending block (in gwei)
       */
      baseFeePerGas: number;
      /**
       * Blob Base Fee Per Gas
       * @description Blob base fee for the current pending block (in gwei)
       */
      blobBaseFeePerGas: number;
      /**
       * Current Block Number
       * @description Block number at the time of prediction
       */
      currentBlockNumber: number;
      /**
       * Estimated Base Fees
       * @description List of upcoming block fee predictions. Each item is a dict mapping 'pending+n' to a list of FeePrediction objects for that block.
       */
      estimatedBaseFees: {
          [key: string]: {
              /**
               * Basefee
               * @description Estimated base fee for the specified future block at this confidence level (in gwei)
               */
              baseFee: number;
              /**
               * Blobbasefee
               * @description Estimated blob base fee for the specified future block at this confidence level (in gwei)
               */
              blobBaseFee: number;
              /**
               * Confidence
               * @description Confidence level (0-100) the prediction will meet or exceed actual fee
               */
              confidence: number;
          }[];
      }[];
      /**
       * Ms Since Last Block
       * @description Milliseconds since last block was mined
       */
      msSinceLastBlock: number;
      /**
       * Network
       * @description Network name (e.g., 'main')
       */
      network: string;
      /**
       * System
       * @description Chain ecosystem (e.g., 'ethereum')
       */
      system: string;
      /**
       * Unit
       * @description Unit for fee values (always 'gwei')
       */
      unit: string;
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
 * Type of BLOCKNATIVE's BLOCKNATIVE_SUBSCRIBE_MULTICHAIN tool input.
 */
type BLOCKNATIVE_SUBSCRIBE_MULTICHAIN_INPUT = {
  /**
   * Abi
   * @description (Account only) Optional JSON ABI array to decode contract input data on account events.
   * @default null
   */
  abi: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Chain Id
   * @description Hex-encoded chain ID, e.g. '0x1' for Ethereum Mainnet.
   */
  chainId?: string;
  /**
   * Filters
   * @description (Account only) Optional array of JSQL filter expressions to apply to account events.
   * @default null
   */
  filters: string[] | null;
  /**
   * Id
   * @description Transaction hash or account address to subscribe to (hex string starting with '0x').
   */
  id?: string;
  /**
   * Type
   * @description Type of subscription: 'transaction' for transaction events, 'account' for address events.
   * @enum {string}
   */
  type?: "transaction" | "account";
};

/**
 * Type of BLOCKNATIVE's BLOCKNATIVE_SUBSCRIBE_MULTICHAIN tool output.
 */
type BLOCKNATIVE_SUBSCRIBE_MULTICHAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subscribe Message
       * @description JSON message payload to send over WebSocket to initiate the multichain subscription.
       */
      subscribe_message: {
          [key: string]: unknown;
      };
      /**
       * Ws Url
       * @description WebSocket URL to connect to Blocknative's Multichain WebSocket API, includes API key query parameter.
       */
      ws_url: string;
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
 * Type of BLOCKNATIVE's BLOCKNATIVE_SUBSCRIBE_TRANSACTION_HASH tool input.
 */
type BLOCKNATIVE_SUBSCRIBE_TRANSACTION_HASH_INPUT = {
  /**
   * Hash
   * @description Ethereum transaction hash to monitor.
   */
  hash?: string;
};

/**
 * Type of BLOCKNATIVE's BLOCKNATIVE_SUBSCRIBE_TRANSACTION_HASH tool output.
 */
type BLOCKNATIVE_SUBSCRIBE_TRANSACTION_HASH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Subscribe Message
       * @description JSON payload to send over WebSocket to subscribe to the specified transaction hash.
       */
      subscribe_message: {
          /**
           * Category Code
           * @description Category code for active transaction subscriptions.
           * @constant
           */
          categoryCode: "activeTransaction";
          /**
           * Event Code
           * @description Event code to initiate the subscription (txSent).
           * @constant
           */
          eventCode: "txSent";
          /**
           * Transaction
           * @description Transaction payload containing the hash.
           */
          transaction: {
              /**
               * Hash
               * @description Ethereum transaction hash being monitored.
               */
              hash: string;
          };
      };
      /**
       * Ws Url
       * @description WebSocket URL to connect to Blocknative's API including the API key.
       */
      ws_url: string;
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
 * Type of BLOCKNATIVE's BLOCKNATIVE_UNSUBSCRIBE_MULTICHAIN tool input.
 */
type BLOCKNATIVE_UNSUBSCRIBE_MULTICHAIN_INPUT = {
  /**
   * Chain Id
   * @description Hex-encoded chain ID where the subscription exists, e.g. '0x1'.
   */
  chainId?: unknown;
  /**
   * Id
   * @description Transaction hash or account address to stop monitoring across chains.
   */
  id?: unknown;
};

/**
 * Type of BLOCKNATIVE's BLOCKNATIVE_UNSUBSCRIBE_MULTICHAIN tool output.
 */
type BLOCKNATIVE_UNSUBSCRIBE_MULTICHAIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Unsubscribe Message
       * @description JavaScript snippet to invoke unsubscribe on the Multichain SDK.
       */
      unsubscribe_message: string;
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
 * Type of BLOCKNATIVE's BLOCKNATIVE_UNSUBSCRIBE_TRANSACTION_HASH tool input.
 */
type BLOCKNATIVE_UNSUBSCRIBE_TRANSACTION_HASH_INPUT = {
  /**
   * Hash
   * @description Ethereum transaction hash to unsubscribe from, e.g., '0x0b4c94c414f71ddd5e7a625fcaa83ff1f93e9a7ca37e0f577b488ac8fd786655'
   */
  hash?: string;
};

/**
 * Type of BLOCKNATIVE's BLOCKNATIVE_UNSUBSCRIBE_TRANSACTION_HASH tool output.
 */
type BLOCKNATIVE_UNSUBSCRIBE_TRANSACTION_HASH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Unsubscribe Message
       * @description JSON payload to send over WebSocket to unsubscribe from the specified transaction hash.
       */
      unsubscribe_message: {
          [key: string]: unknown;
      };
      /**
       * Ws Url
       * @description WebSocket URL to connect to Blocknative's API including the API key query parameter.
       */
      ws_url: string;
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
 * Type map of all available tool input types for toolkit "BLOCKNATIVE".
 */
export type BLOCKNATIVE_TOOL_INPUTS = {
  CONFIGURE_FILTERS: BLOCKNATIVE_CONFIGURE_FILTERS_INPUT
  GET_GAS_DISTRIBUTION: BLOCKNATIVE_GET_GAS_DISTRIBUTION_INPUT
  GET_GAS_ORACLES: BLOCKNATIVE_GET_GAS_ORACLES_INPUT
  GET_GAS_PRICES: BLOCKNATIVE_GET_GAS_PRICES_INPUT
  GET_SUPPORTED_CHAINS: BLOCKNATIVE_GET_SUPPORTED_CHAINS_INPUT
  PREDICTION_API_BASEFEE_ESTIMATES: BLOCKNATIVE_PREDICTION_API_BASEFEE_ESTIMATES_INPUT
  SUBSCRIBE_MULTICHAIN: BLOCKNATIVE_SUBSCRIBE_MULTICHAIN_INPUT
  SUBSCRIBE_TRANSACTION_HASH: BLOCKNATIVE_SUBSCRIBE_TRANSACTION_HASH_INPUT
  UNSUBSCRIBE_MULTICHAIN: BLOCKNATIVE_UNSUBSCRIBE_MULTICHAIN_INPUT
  UNSUBSCRIBE_TRANSACTION_HASH: BLOCKNATIVE_UNSUBSCRIBE_TRANSACTION_HASH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BLOCKNATIVE".
 */
export type BLOCKNATIVE_TOOL_OUTPUTS = {
  CONFIGURE_FILTERS: BLOCKNATIVE_CONFIGURE_FILTERS_OUTPUT
  GET_GAS_DISTRIBUTION: BLOCKNATIVE_GET_GAS_DISTRIBUTION_OUTPUT
  GET_GAS_ORACLES: BLOCKNATIVE_GET_GAS_ORACLES_OUTPUT
  GET_GAS_PRICES: BLOCKNATIVE_GET_GAS_PRICES_OUTPUT
  GET_SUPPORTED_CHAINS: BLOCKNATIVE_GET_SUPPORTED_CHAINS_OUTPUT
  PREDICTION_API_BASEFEE_ESTIMATES: BLOCKNATIVE_PREDICTION_API_BASEFEE_ESTIMATES_OUTPUT
  SUBSCRIBE_MULTICHAIN: BLOCKNATIVE_SUBSCRIBE_MULTICHAIN_OUTPUT
  SUBSCRIBE_TRANSACTION_HASH: BLOCKNATIVE_SUBSCRIBE_TRANSACTION_HASH_OUTPUT
  UNSUBSCRIBE_MULTICHAIN: BLOCKNATIVE_UNSUBSCRIBE_MULTICHAIN_OUTPUT
  UNSUBSCRIBE_TRANSACTION_HASH: BLOCKNATIVE_UNSUBSCRIBE_TRANSACTION_HASH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BLOCKNATIVE toolkit.
 */
export const BLOCKNATIVE = {
  slug: "blocknative",
  tools: {
    /**
     * Tool to configure filters and abi decoding for ethereum mempool transactions. use after establishing a blocknative websocket connection to set up event filters and decoding.
     */
    CONFIGURE_FILTERS: "BLOCKNATIVE_CONFIGURE_FILTERS",
    /**
     * Tool to retrieve the current mempool gas price distribution breakdown. use when analyzing gas price trends or preparing fee strategies.
     */
    GET_GAS_DISTRIBUTION: "BLOCKNATIVE_GET_GAS_DISTRIBUTION",
    /**
     * Tool to retrieve metadata on supported gas oracles per chain. use when you need to dynamically discover all available on-chain gas estimation oracles across networks.
     */
    GET_GAS_ORACLES: "BLOCKNATIVE_GET_GAS_ORACLES",
    /**
     * Tool to fetch gas price estimates for specific inclusion probabilities. use when you need gas price ranges for the next block or next ~10 seconds.
     */
    GET_GAS_PRICES: "BLOCKNATIVE_GET_GAS_PRICES",
    /**
     * Tool to retrieve supported chains metadata. use when discovering available networks for blocknative gas services.
     */
    GET_SUPPORTED_CHAINS: "BLOCKNATIVE_GET_SUPPORTED_CHAINS",
    /**
     * Tool to get real-time predictions for base fee and blob base fee for the next 5 blocks. use when you need both 99% and 50% confidence estimates for upcoming blocks.
     */
    PREDICTION_API_BASEFEE_ESTIMATES: "BLOCKNATIVE_PREDICTION_API_BASEFEE_ESTIMATES",
    /**
     * Tool to generate websocket subscription details for events across multiple chains. use when preparing to track a transaction hash or account address across chains via blocknative multichain sdk.
     */
    SUBSCRIBE_MULTICHAIN: "BLOCKNATIVE_SUBSCRIBE_MULTICHAIN",
    /**
     * Tool to subscribe to transaction state change events of an ethereum transaction hash. use after establishing a blocknative websocket connection to prepare the subscription message.
     */
    SUBSCRIBE_TRANSACTION_HASH: "BLOCKNATIVE_SUBSCRIBE_TRANSACTION_HASH",
    /**
     * Tool to unsubscribe from events across multiple chains using the multichain sdk. use after stopping monitoring of an address or transaction to clean up resources, e.g., call: blocknative.unsubscribe({ id: '0x..', chainid: '0x1' }).
     */
    UNSUBSCRIBE_MULTICHAIN: "BLOCKNATIVE_UNSUBSCRIBE_MULTICHAIN",
    /**
     * Tool to unsubscribe from transaction state change events for an ethereum transaction hash. use after establishing a blocknative websocket connection to prepare the unsubscription message.
     */
    UNSUBSCRIBE_TRANSACTION_HASH: "BLOCKNATIVE_UNSUBSCRIBE_TRANSACTION_HASH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BLOCKNATIVE".
 */
export type BLOCKNATIVE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BLOCKNATIVE".
 */
export type BLOCKNATIVE_TRIGGER_EVENTS = {}
