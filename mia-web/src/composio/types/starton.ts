// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of STARTON's STARTON_DELETE_SMART_CONTRACT_EVENT tool input.
 */
type STARTON_DELETE_SMART_CONTRACT_EVENT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the smart contract event watcher to delete
   */
  id?: string;
};

/**
 * Type of STARTON's STARTON_DELETE_SMART_CONTRACT_EVENT tool output.
 */
type STARTON_DELETE_SMART_CONTRACT_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Additional information from the deletion operation
       * @default null
       */
      message: string | null;
      /**
       * Success
       * @description Indicates whether the deletion was successful
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
 * Type of STARTON's STARTON_GET_SMART_CONTRACTS tool input.
 */
type STARTON_GET_SMART_CONTRACTS_INPUT = {
  /**
   * Project Id
   * @description Filter smart contracts by project ID
   * @default null
   */
  projectId: string | null;
};

/**
 * Type of STARTON's STARTON_GET_SMART_CONTRACTS tool output.
 */
type STARTON_GET_SMART_CONTRACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of smart contracts
       */
      items: {
          /**
           * Abi
           * @description ABI of the smart contract
           * @default null
           */
          abi: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Address
           * @description Blockchain address of the smart contract
           */
          address: string;
          /**
           * Bytecode
           * @description Bytecode of the deployed smart contract
           * @default null
           */
          bytecode: string | null;
          /**
           * Created At
           * @description Timestamp when the smart contract was created
           */
          createdAt: string;
          /**
           * Creation Hash
           * @description Transaction hash of smart contract creation
           */
          creationHash: string;
          /**
           * Description
           * @description Description of the smart contract
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the smart contract
           */
          id: string;
          /**
           * Name
           * @description Name of the smart contract
           */
          name: string;
          /**
           * Network
           * @description Blockchain network of the smart contract
           */
          network: string;
          /**
           * Project Id
           * @description Project ID associated with the smart contract
           */
          projectId: string;
          /**
           * Updated At
           * @description Timestamp when the smart contract was last updated
           */
          updatedAt: string;
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
 * Type of STARTON's STARTON_GET_SMART_CONTRACT_DEPLOYMENTS tool input.
 */
type STARTON_GET_SMART_CONTRACT_DEPLOYMENTS_INPUT = {
  /**
   * Address
   * @description Smart contract address (hex string with '0x' prefix)
   */
  address?: string;
  /**
   * Include Abi
   * @description Whether to include the contract ABI in each item
   * @default null
   */
  includeAbi: boolean | null;
  /**
   * Include Compilation Details
   * @description Whether to include compilation details in each item
   * @default null
   */
  includeCompilationDetails: boolean | null;
  /**
   * Limit
   * @description Number of items per page
   * @default null
   */
  limit: number | null;
  /**
   * Network
   * @description Blockchain network identifier (e.g., 'polygon-mumbai')
   */
  network?: string;
  /**
   * Page
   * @description Zero-based page index for paginated results
   * @default null
   */
  page: number | null;
};

/**
 * Type of STARTON's STARTON_GET_SMART_CONTRACT_DEPLOYMENTS tool output.
 */
type STARTON_GET_SMART_CONTRACT_DEPLOYMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of smart contract deployments
       */
      items: {
          /**
           * Abi
           * @description ABI of the smart contract
           */
          abi: {
              [key: string]: unknown;
          }[];
          /**
           * Address
           * @description Blockchain address where the smart contract is deployed
           */
          address: string;
          /**
           * Bytecode
           * @description Bytecode of the deployed smart contract
           */
          bytecode: string;
          /**
           * Created At
           * @description Timestamp when the contract was created
           */
          createdAt: string;
          /**
           * Creation Hash
           * @description Transaction hash for contract creation
           */
          creationHash: string;
          /**
           * Description
           * @description Description of the smart contract
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the smart contract deployment
           */
          id: string;
          /**
           * Name
           * @description Name of the smart contract
           */
          name: string;
          /**
           * Network
           * @description Blockchain network of the smart contract
           */
          network: string;
          /**
           * Project Id
           * @description Identifier of the associated project
           */
          projectId: string;
          /**
           * Updated At
           * @description Timestamp when the contract was last updated
           */
          updatedAt: string;
      }[];
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * Item Count
           * @description Number of items in the current page
           */
          itemCount: number;
          /**
           * Items Per Page
           * @description Number of items per page
           */
          itemsPerPage: number;
          /**
           * Total Items
           * @description Total number of items available
           */
          totalItems: number;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          totalPages: number;
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
 * Type of STARTON's STARTON_GET_SMART_CONTRACT_EVENT tool input.
 */
type STARTON_GET_SMART_CONTRACT_EVENT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the smart contract event watcher to retrieve
   */
  id?: string;
};

/**
 * Type of STARTON's STARTON_GET_SMART_CONTRACT_EVENT tool output.
 */
type STARTON_GET_SMART_CONTRACT_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Monitored contract or wallet address
       */
      address: string;
      /**
       * Confirmations Blocks
       * @description Configured confirmation-block threshold
       * @default null
       */
      confirmationsBlocks: number | null;
      /**
       * Created At
       * @description ISO timestamp when watcher was created
       */
      createdAt: string;
      /**
       * Custom Event Abi
       * @description Custom event ABI if specified
       * @default null
       */
      customEventAbi: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Description
       * @description Description of the watcher
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the watcher
       */
      id: string;
      /**
       * Name
       * @description Name of the watcher
       */
      name: string;
      /**
       * Network
       * @description Blockchain network of the watcher
       */
      network: string;
      /**
       * Status
       * @description Current state of the watcher
       * @default null
       */
      status: string | null;
      /**
       * Type
       * @description Type of the monitored event
       */
      type: string;
      /**
       * Updated At
       * @description ISO timestamp of the last watcher update
       * @default null
       */
      updatedAt: string | null;
      /**
       * Webhook Url
       * @description Webhook URL configured for notifications
       */
      webhookUrl: string;
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
 * Type of STARTON's STARTON_GET_TEMPLATES tool input.
 */
type STARTON_GET_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description Number of results per page (default: 100).
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve (default: 1).
   * @default null
   */
  page: number | null;
};

/**
 * Type of STARTON's STARTON_GET_TEMPLATES tool output.
 */
type STARTON_GET_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of smart contract templates
       */
      items: {
          /**
           * Abi
           * @description Application Binary Interface of the template
           */
          abi: {
              [key: string]: unknown;
          }[];
          /**
           * Blockchains
           * @description Supported blockchains
           */
          blockchains: string[];
          /**
           * Category
           * @description Category of the template
           * @default null
           */
          category: string | null;
          /**
           * Created At
           * @description Creation timestamp
           */
          createdAt: string;
          /**
           * Description
           * @description Template description
           * @default null
           */
          description: string | null;
          /**
           * Github Url
           * @description GitHub URL of the template source code
           * @default null
           */
          githubUrl: string | null;
          /**
           * Human Readable Abi
           * @description Human-readable ABI of the template
           * @default null
           */
          humanReadableAbi: string[] | null;
          /**
           * Id
           * @description Template identifier
           */
          id: string;
          /**
           * Is Activated
           * @description Indicates if the template is active
           */
          isActivated: boolean;
          /**
           * Is Audited
           * @description Indicates if the template is audited
           */
          isAudited: boolean;
          /**
           * Name
           * @description Template name
           */
          name: string;
          /**
           * Order
           * @description Order of the template in listing
           * @default null
           */
          order: number | null;
          /**
           * Short Description
           * @description Short description of the template
           * @default null
           */
          shortDescription: string | null;
          /**
           * Tags
           * @description Tags associated with the template
           */
          tags: string[];
          /**
           * Updated At
           * @description Last update timestamp
           */
          updatedAt: string;
      }[];
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * Item Count
           * @description Number of items in the current page
           */
          itemCount: number;
          /**
           * Items Per Page
           * @description Number of items per page
           */
          itemsPerPage: number;
          /**
           * Total Items
           * @description Total number of items available
           */
          totalItems: number;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          totalPages: number;
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
 * Type of STARTON's STARTON_GET_WATCHER tool input.
 */
type STARTON_GET_WATCHER_INPUT = {
  /**
   * Id
   * @description Unique identifier of the watcher to retrieve
   */
  id?: string;
};

/**
 * Type of STARTON's STARTON_GET_WATCHER tool output.
 */
type STARTON_GET_WATCHER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Monitored contract or wallet address
       */
      address: string;
      /**
       * Confirmations Blocks
       * @description Number of confirmation blocks required before triggering the webhook
       * @default null
       */
      confirmationsBlocks: number | null;
      /**
       * Created At
       * @description ISO timestamp when watcher was created
       */
      createdAt: string;
      /**
       * Custom Event Abi
       * @description Custom event ABI if specified (for EVENT_CUSTOM watchers)
       * @default null
       */
      customEventAbi: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Description
       * @description Description of the watcher
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the watcher
       */
      id: string;
      /**
       * Name
       * @description Name of the watcher
       */
      name: string;
      /**
       * Network
       * @description Blockchain network of the watcher
       */
      network: string;
      /**
       * Status
       * @description Current state of the watcher
       * @default null
       */
      status: string | null;
      /**
       * Type
       * @description Type of event or activity being monitored
       */
      type: string;
      /**
       * Updated At
       * @description ISO timestamp of the last watcher update
       * @default null
       */
      updatedAt: string | null;
      /**
       * Webhook Url
       * @description Webhook URL configured for notifications
       */
      webhookUrl: string;
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
 * Type of STARTON's STARTON_GET_WATCHERS tool input.
 */
type STARTON_GET_WATCHERS_INPUT = {
  /**
   * Limit
   * @description Maximum number of watchers per page
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve
   * @default null
   */
  page: number | null;
};

/**
 * Type of STARTON's STARTON_GET_WATCHERS tool output.
 */
type STARTON_GET_WATCHERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of watchers
       */
      items: {
          /**
           * Address
           * @description Blockchain address monitored by the watcher
           */
          address: string;
          /**
           * Confirmations Blocks
           * @description Number of confirmation blocks before triggering notifications
           * @default null
           */
          confirmationsBlocks: number | null;
          /**
           * Created At
           * @description ISO 8601 timestamp when the watcher was created
           */
          createdAt: string;
          /**
           * Description
           * @description Optional description of what the watcher monitors
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the watcher
           */
          id: string;
          /**
           * Name
           * @description Name of the watcher
           */
          name: string;
          /**
           * Network
           * @description Blockchain network identifier
           */
          network: string;
          /**
           * Type
           * @description Type of blockchain event being monitored
           */
          type: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the watcher was last updated
           */
          updatedAt: string;
          /**
           * Webhook Url
           * @description Webhook URL for notifications
           */
          webhookUrl: string;
      }[];
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Current Page
           * @description Current page number
           */
          currentPage: number;
          /**
           * Item Count
           * @description Number of items in current page
           */
          itemCount: number;
          /**
           * Items Per Page
           * @description Number of items per page
           */
          itemsPerPage: number;
          /**
           * Total Items
           * @description Total number of items available
           */
          totalItems: number;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          totalPages: number;
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
 * Type of STARTON's STARTON_GET_WEBHOOKS tool input.
 */
type STARTON_GET_WEBHOOKS_INPUT = {
  /**
   * Limit
   * @description Number of items per page.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number to retrieve.
   * @default null
   */
  page: number | null;
};

/**
 * Type of STARTON's STARTON_GET_WEBHOOKS tool output.
 */
type STARTON_GET_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of items returned in this response
       */
      count: number;
      /**
       * Items
       * @description List of webhook watchers
       */
      items: {
          /**
           * Address
           * @description Monitored blockchain address
           */
          address: string;
          /**
           * Confirmations Blocks
           * @description Number of block confirmations required before triggering the webhook
           * @default null
           */
          confirmationsBlocks: number | null;
          /**
           * Created At
           * @description ISO timestamp when the watcher was created
           */
          createdAt: string;
          /**
           * Custom Event Abi
           * @description ABI definitions for custom event types (when type is EVENT_CUSTOM).
           * @default null
           */
          customEventAbi: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Description
           * @description Description of the watcher
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the watcher
           */
          id: string;
          /**
           * Name
           * @description Name of the watcher
           */
          name: string;
          /**
           * Network
           * @description Blockchain network identifier
           */
          network: string;
          /**
           * Status
           * @description Current status of the watcher
           */
          status: string;
          /**
           * Type
           * @description Type of event being monitored
           */
          type: string;
          /**
           * Updated At
           * @description ISO timestamp when the watcher was last updated
           * @default null
           */
          updatedAt: string | null;
          /**
           * Webhook Url
           * @description URL configured for webhook notifications
           */
          webhookUrl: string;
      }[];
      /**
       * Limit
       * @description Limit of items per page
       */
      limit: number;
      /**
       * Page
       * @description Current page number returned
       */
      page: number;
      /**
       * Total
       * @description Total number of webhook watchers available
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
 * Type of STARTON's STARTON_UPLOAD_FILE tool input.
 */
type STARTON_UPLOAD_FILE_INPUT = {
  /**
   * File
   * @description Local filesystem path to the file to upload
   */
  file?: string;
};

/**
 * Type of STARTON's STARTON_UPLOAD_FILE tool output.
 */
type STARTON_UPLOAD_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cid
       * @description Content Identifier (CID) of the uploaded file on IPFS
       */
      cid: string;
      /**
       * Gateway Url
       * @description URL to access the uploaded file via Starton's IPFS gateway
       */
      gatewayUrl: string;
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
 * Type map of all available tool input types for toolkit "STARTON".
 */
export type STARTON_TOOL_INPUTS = {
  DELETE_SMART_CONTRACT_EVENT: STARTON_DELETE_SMART_CONTRACT_EVENT_INPUT
  GET_SMART_CONTRACTS: STARTON_GET_SMART_CONTRACTS_INPUT
  GET_SMART_CONTRACT_DEPLOYMENTS: STARTON_GET_SMART_CONTRACT_DEPLOYMENTS_INPUT
  GET_SMART_CONTRACT_EVENT: STARTON_GET_SMART_CONTRACT_EVENT_INPUT
  GET_TEMPLATES: STARTON_GET_TEMPLATES_INPUT
  GET_WATCHER: STARTON_GET_WATCHER_INPUT
  GET_WATCHERS: STARTON_GET_WATCHERS_INPUT
  GET_WEBHOOKS: STARTON_GET_WEBHOOKS_INPUT
  UPLOAD_FILE: STARTON_UPLOAD_FILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "STARTON".
 */
export type STARTON_TOOL_OUTPUTS = {
  DELETE_SMART_CONTRACT_EVENT: STARTON_DELETE_SMART_CONTRACT_EVENT_OUTPUT
  GET_SMART_CONTRACTS: STARTON_GET_SMART_CONTRACTS_OUTPUT
  GET_SMART_CONTRACT_DEPLOYMENTS: STARTON_GET_SMART_CONTRACT_DEPLOYMENTS_OUTPUT
  GET_SMART_CONTRACT_EVENT: STARTON_GET_SMART_CONTRACT_EVENT_OUTPUT
  GET_TEMPLATES: STARTON_GET_TEMPLATES_OUTPUT
  GET_WATCHER: STARTON_GET_WATCHER_OUTPUT
  GET_WATCHERS: STARTON_GET_WATCHERS_OUTPUT
  GET_WEBHOOKS: STARTON_GET_WEBHOOKS_OUTPUT
  UPLOAD_FILE: STARTON_UPLOAD_FILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's STARTON toolkit.
 */
export const STARTON = {
  slug: "starton",
  tools: {
    /**
     * Tool to delete a specific smart contract event watcher by its id. use after confirming the watcher id you want to remove.
     */
    DELETE_SMART_CONTRACT_EVENT: "STARTON_DELETE_SMART_CONTRACT_EVENT",
    /**
     * Tool to retrieve a list of all smart contracts associated with your project. use after authenticating and optionally filtering by project id.
     */
    GET_SMART_CONTRACTS: "STARTON_GET_SMART_CONTRACTS",
    /**
     * Tool to retrieve a list of smart contract deployments. use after deploying or importing contracts to browse existing deployments.
     */
    GET_SMART_CONTRACT_DEPLOYMENTS: "STARTON_GET_SMART_CONTRACT_DEPLOYMENTS",
    /**
     * Tool to retrieve details of a specific smart contract event watcher by its id. use after confirming the event watcher id and before updating or deleting it.
     */
    GET_SMART_CONTRACT_EVENT: "STARTON_GET_SMART_CONTRACT_EVENT",
    /**
     * Tool to retrieve a list of all smart contract templates. use when browsing the starton template library to select a template before deployment.
     */
    GET_TEMPLATES: "STARTON_GET_TEMPLATES",
    /**
     * Tool to retrieve details of a specific watcher by its id. use when you need to confirm its configuration before updating or deleting.
     */
    GET_WATCHER: "STARTON_GET_WATCHER",
    /**
     * Tool to retrieve a list of all watchers monitoring blockchain events. use after watchers are created.
     */
    GET_WATCHERS: "STARTON_GET_WATCHERS",
    /**
     * Tool to retrieve a list of all webhook watchers. use after creating watchers to review existing watchers.
     */
    GET_WEBHOOKS: "STARTON_GET_WEBHOOKS",
    /**
     * Tool to upload a file to your project's ipfs storage. use after preparing the file you want to host on ipfs.
     */
    UPLOAD_FILE: "STARTON_UPLOAD_FILE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "STARTON".
 */
export type STARTON_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "STARTON".
 */
export type STARTON_TRIGGER_EVENTS = {}
