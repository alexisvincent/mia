// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SKYFIRE's SKYFIRE_CHARGE_TOKEN tool input.
 */
type SKYFIRE_CHARGE_TOKEN_INPUT = {
  /**
   * Charge Amount
   * @description Amount to charge (must be <= token's max amount)
   */
  chargeAmount?: string;
  /**
   * Token
   * @description The JWT token string the buyer sent you (not the tokenId)
   */
  token?: string;
};

/**
 * Type of SKYFIRE's SKYFIRE_CHARGE_TOKEN tool output.
 */
type SKYFIRE_CHARGE_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Amount
       * @description Amount charged
       * @default null
       */
      amount: string | null;
      /**
       * Charge Id
       * @description Charge transaction ID
       * @default null
       */
      chargeId: string | null;
      /**
       * Success
       * @description True if charge succeeded
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
 * Type of SKYFIRE's SKYFIRE_CREATE_KYA_PAY_TOKEN tool input.
 */
type SKYFIRE_CREATE_KYA_PAY_TOKEN_INPUT = {
  /**
   * Buyer Tag
   * @description Optional tag for buyer-side tracking
   * @default null
   */
  buyerTag: string | null;
  /**
   * Expires At
   * @description Unix timestamp (seconds) when token expires
   */
  expiresAt?: number;
  /**
   * Identity Permissions
   * @description Optional identity permissions payload if required by seller
   * @default null
   */
  identityPermissions: {
      [key: string]: unknown;
  } | null;
  /**
   * Seller Service Id
   * @description UUID of the seller service to call
   */
  sellerServiceId?: string;
  /**
   * Token Amount
   * @description Maximum amount the seller may charge (as decimal string)
   */
  tokenAmount?: string;
};

/**
 * Type of SKYFIRE's SKYFIRE_CREATE_KYA_PAY_TOKEN tool output.
 */
type SKYFIRE_CREATE_KYA_PAY_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expires At
       * @description Unix expiration time (seconds)
       */
      expiresAt: number;
      /**
       * Token
       * @description JWT for KYA+PAY token
       */
      token: string;
      /**
       * Token Id
       * @description Identifier of the issued token if provided by API
       * @default null
       */
      tokenId: string | null;
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
 * Type of SKYFIRE's SKYFIRE_CREATE_KYA_TOKEN tool input.
 */
type SKYFIRE_CREATE_KYA_TOKEN_INPUT = {
  /**
   * Buyer Tag
   * @description Optional tag for buyer-side tracking
   * @default null
   */
  buyerTag: string | null;
  /**
   * Expires At
   * @description Unix timestamp (seconds) when token expires
   */
  expiresAt?: number;
  /**
   * Identity Permissions
   * @description Optional identity permissions payload if required by seller
   * @default null
   */
  identityPermissions: {
      [key: string]: unknown;
  } | null;
  /**
   * Seller Service Id
   * @description UUID of the seller service to call
   */
  sellerServiceId?: string;
};

/**
 * Type of SKYFIRE's SKYFIRE_CREATE_KYA_TOKEN tool output.
 */
type SKYFIRE_CREATE_KYA_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expires At
       * @description Unix expiration time (seconds)
       */
      expiresAt: number;
      /**
       * Token
       * @description JWT for KYA token
       */
      token: string;
      /**
       * Token Id
       * @description Identifier of the issued token if provided by API
       * @default null
       */
      tokenId: string | null;
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
 * Type of SKYFIRE's SKYFIRE_CREATE_PAY_TOKEN tool input.
 */
type SKYFIRE_CREATE_PAY_TOKEN_INPUT = {
  /**
   * Buyer Tag
   * @description Your internal reference for tracking - appears in transaction history. Use for matching tokens to your workflows
   * @default null
   */
  buyerTag: string | null;
  /**
   * Expires At
   * @description Unix timestamp when this token becomes invalid. Set short (5-10 min) for one-time use, longer for recurring calls. Max 24 hours
   */
  expiresAt?: number;
  /**
   * Seller Service Id
   * @description The service ID you got from ListDirectoryServices - this binds the payment to a specific seller service
   */
  sellerServiceId?: string;
  /**
   * Token Amount
   * @description Maximum USD the seller can charge. Use decimal string to avoid float precision issues. The seller decides actual charge up to this limit
   */
  tokenAmount?: string;
};

/**
 * Type of SKYFIRE's SKYFIRE_CREATE_PAY_TOKEN tool output.
 */
type SKYFIRE_CREATE_PAY_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expires At
       * @description Unix expiration time (seconds)
       */
      expiresAt: number;
      /**
       * Token
       * @description JWT for PAY token
       */
      token: string;
      /**
       * Token Id
       * @description Identifier of the issued token if provided by API
       * @default null
       */
      tokenId: string | null;
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
 * Type of SKYFIRE's SKYFIRE_GET_ALL_SERVICE_TAGS tool input.
 */
type SKYFIRE_GET_ALL_SERVICE_TAGS_INPUT = object;

/**
 * Type of SKYFIRE's SKYFIRE_GET_ALL_SERVICE_TAGS tool output.
 */
type SKYFIRE_GET_ALL_SERVICE_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tags
       * @description All available service tags like 'ai', 'web scraping', 'agent to agent'
       */
      tags: string[];
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
 * Type of SKYFIRE's SKYFIRE_GET_BUYER_WALLET_BALANCE tool input.
 */
type SKYFIRE_GET_BUYER_WALLET_BALANCE_INPUT = {
  /**
   * Buyer Agent Id
   * @description Optional buyer agent ID; if omitted, the API uses the authenticated buyer.
   * @default null
   */
  buyerAgentId: string | null;
};

/**
 * Type of SKYFIRE's SKYFIRE_GET_BUYER_WALLET_BALANCE tool output.
 */
type SKYFIRE_GET_BUYER_WALLET_BALANCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Available
       * @description Spendable balance - this is what you can actually use for new tokens
       */
      available: string;
      /**
       * Held Amount
       * @description Amount reserved for active tokens that haven't been charged yet
       */
      heldAmount: string;
      /**
       * Pending Charges
       * @description Amount being processed for completed transactions
       */
      pendingCharges: string;
      /**
       * Pending Deposits
       * @description Incoming deposits that haven't cleared yet
       */
      pendingDeposits: string;
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
 * Type of SKYFIRE's SKYFIRE_GET_SERVICE tool input.
 */
type SKYFIRE_GET_SERVICE_INPUT = {
  /**
   * Service Id
   * @description Seller service ID (get from ListDirectoryServices)
   */
  serviceId?: string;
};

/**
 * Type of SKYFIRE's SKYFIRE_GET_SERVICE tool output.
 */
type SKYFIRE_GET_SERVICE_OUTPUT = {
  /**
   * Data
   * @description Service details
   */
  data?: {
      /**
       * Fetch Agent Profile Url
       * @description Agent profile if type is FETCH_AGENT
       * @default null
       */
      fetchAgentProfileUrl: string | null;
      /**
       * Identity Requirements
       * @description Required identity verification
       */
      identityRequirements?: string[];
      /**
       * Mcp Server Url
       * @description MCP server URL if type is MCP_SERVER_*
       * @default null
       */
      mcpServerUrl: string | null;
      /**
       * Openapi Spec Url
       * @description OpenAPI spec if available
       * @default null
       */
      openapiSpecUrl: string | null;
      /**
       * Price
       * @description Price per use in USD
       */
      price: string;
      /**
       * Price Model
       * @description Pricing model
       */
      priceModel: string;
      /**
       * Seller Service Description
       * @description Detailed description
       * @default null
       */
      sellerServiceDescription: string | null;
      /**
       * Seller Service Id
       * @description Service ID
       */
      sellerServiceId: string;
      /**
       * Seller Service Name
       * @description Service name
       */
      sellerServiceName: string;
      /**
       * Tags
       * @description Service tags
       */
      tags?: string[];
      /**
       * Terms Of Service Url
       * @description Terms of service link
       * @default null
       */
      termsOfServiceUrl: string | null;
      /**
       * Type
       * @description API | WEB_PAGE | MCP_SERVER_REMOTE | FETCH_AGENT
       */
      type: string;
      /**
       * Website Url
       * @description Website URL if type is WEB_PAGE
       * @default null
       */
      websiteUrl: string | null;
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
 * Type of SKYFIRE's SKYFIRE_GET_SERVICES_BY_AGENT tool input.
 */
type SKYFIRE_GET_SERVICES_BY_AGENT_INPUT = {
  /**
   * Agent Id
   * @description Seller agent ID (get this from service listings or previous transactions)
   */
  agentId?: string;
  /**
   * Limit
   * @description Max services to return
   * @default 20
   */
  limit: number | null;
};

/**
 * Type of SKYFIRE's SKYFIRE_GET_SERVICES_BY_AGENT tool output.
 */
type SKYFIRE_GET_SERVICES_BY_AGENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Services
       * @description All services from this seller agent
       */
      services: {
          /**
           * Identity Requirements
           * @description Required identity levels
           */
          identityRequirements?: string[];
          /**
           * Price
           * @description Price per use in USD
           */
          price: string;
          /**
           * Price Model
           * @description Usually PAY_PER_USE
           */
          priceModel: string;
          /**
           * Seller Service Description
           * @description What this service does
           * @default null
           */
          sellerServiceDescription: string | null;
          /**
           * Seller Service Id
           * @description Service ID for token creation
           */
          sellerServiceId: string;
          /**
           * Seller Service Name
           * @description Service name
           */
          sellerServiceName: string;
          /**
           * Tags
           * @description Service tags
           */
          tags?: string[];
          /**
           * Type
           * @description API | WEB_PAGE | MCP_SERVER_REMOTE | FETCH_AGENT
           */
          type: string;
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
 * Type of SKYFIRE's SKYFIRE_GET_SERVICES_BY_TAGS tool input.
 */
type SKYFIRE_GET_SERVICES_BY_TAGS_INPUT = {
  /**
   * Limit
   * @description Max services to return
   * @default 20
   */
  limit: number | null;
  /**
   * Tags
   * @description Comma-separated tags to filter by (e.g., 'ai,mcp' or 'scraping')
   */
  tags?: string;
};

/**
 * Type of SKYFIRE's SKYFIRE_GET_SERVICES_BY_TAGS tool output.
 */
type SKYFIRE_GET_SERVICES_BY_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Services
       * @description Services matching the specified tags
       */
      services: {
          /**
           * Identity Requirements
           * @description Required identity levels
           */
          identityRequirements?: string[];
          /**
           * Price
           * @description Price per use in USD
           */
          price: string;
          /**
           * Price Model
           * @description Usually PAY_PER_USE
           */
          priceModel: string;
          /**
           * Seller Service Description
           * @description What this service does
           * @default null
           */
          sellerServiceDescription: string | null;
          /**
           * Seller Service Id
           * @description Service ID for token creation
           */
          sellerServiceId: string;
          /**
           * Seller Service Name
           * @description Service name
           */
          sellerServiceName: string;
          /**
           * Tags
           * @description Service tags
           */
          tags?: string[];
          /**
           * Type
           * @description API | WEB_PAGE | MCP_SERVER_REMOTE | FETCH_AGENT
           */
          type: string;
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
 * Type of SKYFIRE's SKYFIRE_GET_TOKEN_CHARGES tool input.
 */
type SKYFIRE_GET_TOKEN_CHARGES_INPUT = {
  /**
   * Token Id
   * @description Token ID to check charges for (get from ListBuyerTokens)
   */
  tokenId?: string;
};

/**
 * Type of SKYFIRE's SKYFIRE_GET_TOKEN_CHARGES tool output.
 */
type SKYFIRE_GET_TOKEN_CHARGES_OUTPUT = {
  /**
   * Data
   * @description All charges made against this token
   */
  data?: {
      /**
       * Audience
       * @description Seller agent ID
       */
      audience: string;
      /**
       * Audience Name
       * @description Seller agent name
       * @default null
       */
      audienceName: string | null;
      /**
       * Charged At
       * @description When the charge occurred
       */
      chargedAt: string;
      /**
       * Claim Id
       * @description Charge claim ID
       */
      claimId: string;
      /**
       * Finalized At
       * @description When charge was finalized
       * @default null
       */
      finalizedAt: string | null;
      /**
       * Seller Service Id
       * @description Service that made the charge
       */
      sellerServiceId: string;
      /**
       * Settled At
       * @description When payment settled
       * @default null
       */
      settledAt: string | null;
      /**
       * Subject
       * @description Buyer agent ID
       */
      subject: string;
      /**
       * Subject Name
       * @description Buyer agent name
       * @default null
       */
      subjectName: string | null;
      /**
       * Token Type
       * @description Token type that was charged
       */
      tokenType: string;
      /**
       * Value
       * @description Amount charged
       */
      value: string;
  }[];
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
 * Type of SKYFIRE's SKYFIRE_INTROSPECT_TOKEN tool input.
 */
type SKYFIRE_INTROSPECT_TOKEN_INPUT = {
  /**
   * Token
   * @description The JWT token string to validate (get this from CreatePayToken/CreateKyaToken/CreateKyaPayToken)
   */
  token?: string;
};

/**
 * Type of SKYFIRE's SKYFIRE_INTROSPECT_TOKEN tool output.
 */
type SKYFIRE_INTROSPECT_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Is Valid
       * @description True if token is valid and not expired, False otherwise
       */
      isValid: boolean;
      /**
       * Validation Error
       * @description Error message if token is invalid (e.g., 'invalid or expired jwt')
       * @default null
       */
      validationError: string | null;
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
 * Type of SKYFIRE's SKYFIRE_LIST_BUYER_TOKENS tool input.
 */
type SKYFIRE_LIST_BUYER_TOKENS_INPUT = {
  /**
   * Created After
   * @description ISO 8601 lower bound (default: now - 7 days)
   * @default null
   */
  createdAfter: string | null;
  /**
   * Created Before
   * @description ISO 8601 upper bound (default: now)
   * @default null
   */
  createdBefore: string | null;
  /**
   * Cursor
   * @description Pagination cursor
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description Page size
   * @default 20
   */
  limit: number | null;
  /**
   * Status
   * @description Filter by token status (e.g., active, expired, consumed)
   * @default null
   */
  status: string | null;
};

/**
 * Type of SKYFIRE's SKYFIRE_LIST_BUYER_TOKENS tool output.
 */
type SKYFIRE_LIST_BUYER_TOKENS_OUTPUT = {
  /**
   * Data
   * @description Tokens list
   */
  data?: {
      /**
       * Audience
       * @description Seller agent ID
       */
      audience: string;
      /**
       * Audience Name
       * @description Seller agent name
       * @default null
       */
      audienceName: string | null;
      /**
       * Buyer Id Fields
       * @description Buyer identity fields
       * @default null
       */
      buyerIdFields: string | null;
      /**
       * Buyer Id Hash
       * @description Hashed buyer ID
       * @default null
       */
      buyerIdHash: string | null;
      /**
       * Buyer Tag
       * @description Your tracking tag
       * @default null
       */
      buyerTag: string | null;
      /**
       * Charge Total
       * @description Total charged amount
       * @default null
       */
      chargeTotal: string | null;
      /**
       * Charges
       * @description Charges against this token
       */
      charges?: {
          /**
           * Charged At
           * @description When the charge occurred
           */
          chargedAt: string;
          /**
           * Claim Id
           * @description Charge claim ID
           */
          claimId: string;
          /**
           * Finalized At
           * @description When finalized
           * @default null
           */
          finalizedAt: string | null;
          /**
           * Settled At
           * @description When settled
           * @default null
           */
          settledAt: string | null;
          /**
           * Token Type
           * @description Token type used
           */
          tokenType: string;
          /**
           * Value
           * @description Amount charged
           */
          value: string;
      }[];
      /**
       * Claim Id
       * @description Claim ID (same as tokenId)
       * @default null
       */
      claimId: string | null;
      /**
       * Created At
       * @description ISO 8601 creation time
       */
      createdAt: string;
      /**
       * Expires At
       * @description ISO 8601 expiration time
       */
      expiresAt: string;
      /**
       * Seller Service Description
       * @description Service description
       * @default null
       */
      sellerServiceDescription: string | null;
      /**
       * Seller Service Id
       * @description Bound seller service ID
       */
      sellerServiceId: string;
      /**
       * Seller Service Name
       * @description Human-readable service name
       * @default null
       */
      sellerServiceName: string | null;
      /**
       * Service Price
       * @description Actual service price
       * @default null
       */
      servicePrice: string | null;
      /**
       * Service Price Scheme
       * @description Pricing model
       * @default null
       */
      servicePriceScheme: string | null;
      /**
       * Status
       * @description Token status (e.g., VALUE_RESERVED)
       */
      status: string;
      /**
       * Subject
       * @description Buyer agent ID
       */
      subject: string;
      /**
       * Subject Name
       * @description Buyer agent name
       * @default null
       */
      subjectName: string | null;
      /**
       * Token Id
       * @description Token ID (same as claimId)
       */
      tokenId: string;
      /**
       * Token Type
       * @description Token type: kya | pay | kya+pay
       */
      tokenType: string;
      /**
       * Value
       * @description Token max value
       */
      value: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Next Cursor
   * @description Next page cursor
   * @default null
   */
  next_cursor: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SKYFIRE's SKYFIRE_LIST_DIRECTORY_SERVICES tool input.
 */
type SKYFIRE_LIST_DIRECTORY_SERVICES_INPUT = {
  /**
   * Category
   * @description Browse by category like 'AI', 'Data', 'Communication'. Check directory for available categories
   * @default null
   */
  category: string | null;
  /**
   * Cursor
   * @description Got more results? Pass the next_cursor from previous response to get the next page
   * @default null
   */
  cursor: string | null;
  /**
   * Limit
   * @description How many services to fetch per page. Start with 20, increase if you need to browse more
   * @default 20
   */
  limit: number | null;
  /**
   * Min Price
   * @description Only show services costing at least this much per call. Useful to find premium services
   * @default null
   */
  minPrice: string | null;
  /**
   * Query
   * @description Search for services by name or description. Try 'chat', 'image', 'analysis' etc
   * @default null
   */
  query: string | null;
  /**
   * Tags
   * @description Filter by service tags like 'ai,llm' or 'productivity'. Comma-separated, no spaces
   * @default null
   */
  tags: string | null;
};

/**
 * Type of SKYFIRE's SKYFIRE_LIST_DIRECTORY_SERVICES tool output.
 */
type SKYFIRE_LIST_DIRECTORY_SERVICES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Sellers
       * @description List of available seller services
       */
      sellers: {
          /**
           * Fetch Agent Profile Url
           * @description Agent profile URL if type is FETCH_AGENT
           * @default null
           */
          fetchAgentProfileUrl: string | null;
          /**
           * Identity Requirements
           * @description Required identity verification levels
           */
          identityRequirements?: string[];
          /**
           * Mcp Server Url
           * @description MCP server URL if type is MCP_SERVER_*
           * @default null
           */
          mcpServerUrl: string | null;
          /**
           * Openapi Spec Url
           * @description OpenAPI spec URL if available
           * @default null
           */
          openapiSpecUrl: string | null;
          /**
           * Price
           * @description Price per use in USD
           */
          price: string;
          /**
           * Price Model
           * @description Usually PAY_PER_USE
           */
          priceModel: string;
          /**
           * Seller Service Description
           * @description What this service does
           * @default null
           */
          sellerServiceDescription: string | null;
          /**
           * Seller Service Id
           * @description Seller service ID (use this in CreatePayToken)
           */
          sellerServiceId: string;
          /**
           * Seller Service Name
           * @description Human-readable service name
           */
          sellerServiceName: string;
          /**
           * Tags
           * @description Service tags for filtering
           */
          tags?: string[];
          /**
           * Terms Of Service Url
           * @description Link to terms of service
           * @default null
           */
          termsOfServiceUrl: string | null;
          /**
           * Type
           * @description API | WEB_PAGE | MCP_SERVER_REMOTE | FETCH_AGENT
           */
          type: string;
          /**
           * Website Url
           * @description Website URL if type is WEB_PAGE
           * @default null
           */
          websiteUrl: string | null;
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
 * Type map of all available tool input types for toolkit "SKYFIRE".
 */
export type SKYFIRE_TOOL_INPUTS = {
  CHARGE_TOKEN: SKYFIRE_CHARGE_TOKEN_INPUT
  CREATE_KYA_PAY_TOKEN: SKYFIRE_CREATE_KYA_PAY_TOKEN_INPUT
  CREATE_KYA_TOKEN: SKYFIRE_CREATE_KYA_TOKEN_INPUT
  CREATE_PAY_TOKEN: SKYFIRE_CREATE_PAY_TOKEN_INPUT
  GET_ALL_SERVICE_TAGS: SKYFIRE_GET_ALL_SERVICE_TAGS_INPUT
  GET_BUYER_WALLET_BALANCE: SKYFIRE_GET_BUYER_WALLET_BALANCE_INPUT
  GET_SERVICE: SKYFIRE_GET_SERVICE_INPUT
  GET_SERVICES_BY_AGENT: SKYFIRE_GET_SERVICES_BY_AGENT_INPUT
  GET_SERVICES_BY_TAGS: SKYFIRE_GET_SERVICES_BY_TAGS_INPUT
  GET_TOKEN_CHARGES: SKYFIRE_GET_TOKEN_CHARGES_INPUT
  INTROSPECT_TOKEN: SKYFIRE_INTROSPECT_TOKEN_INPUT
  LIST_BUYER_TOKENS: SKYFIRE_LIST_BUYER_TOKENS_INPUT
  LIST_DIRECTORY_SERVICES: SKYFIRE_LIST_DIRECTORY_SERVICES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SKYFIRE".
 */
export type SKYFIRE_TOOL_OUTPUTS = {
  CHARGE_TOKEN: SKYFIRE_CHARGE_TOKEN_OUTPUT
  CREATE_KYA_PAY_TOKEN: SKYFIRE_CREATE_KYA_PAY_TOKEN_OUTPUT
  CREATE_KYA_TOKEN: SKYFIRE_CREATE_KYA_TOKEN_OUTPUT
  CREATE_PAY_TOKEN: SKYFIRE_CREATE_PAY_TOKEN_OUTPUT
  GET_ALL_SERVICE_TAGS: SKYFIRE_GET_ALL_SERVICE_TAGS_OUTPUT
  GET_BUYER_WALLET_BALANCE: SKYFIRE_GET_BUYER_WALLET_BALANCE_OUTPUT
  GET_SERVICE: SKYFIRE_GET_SERVICE_OUTPUT
  GET_SERVICES_BY_AGENT: SKYFIRE_GET_SERVICES_BY_AGENT_OUTPUT
  GET_SERVICES_BY_TAGS: SKYFIRE_GET_SERVICES_BY_TAGS_OUTPUT
  GET_TOKEN_CHARGES: SKYFIRE_GET_TOKEN_CHARGES_OUTPUT
  INTROSPECT_TOKEN: SKYFIRE_INTROSPECT_TOKEN_OUTPUT
  LIST_BUYER_TOKENS: SKYFIRE_LIST_BUYER_TOKENS_OUTPUT
  LIST_DIRECTORY_SERVICES: SKYFIRE_LIST_DIRECTORY_SERVICES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SKYFIRE toolkit.
 */
export const SKYFIRE = {
  slug: "skyfire",
  tools: {
    /**
     * Charge a buyer's token (seller-side operation). use when you've delivered a service and want to collect payment. the buyer created a token with max amount, you charge actual amount used.
     */
    CHARGE_TOKEN: "SKYFIRE_CHARGE_TOKEN",
    /**
     * Issue a skyfire kya+pay token (post /api/v1/tokens with type=kya+pay).
     */
    CREATE_KYA_PAY_TOKEN: "SKYFIRE_CREATE_KYA_PAY_TOKEN",
    /**
     * Issue a skyfire kya token (post /api/v1/tokens with type=kya).
     */
    CREATE_KYA_TOKEN: "SKYFIRE_CREATE_KYA_TOKEN",
    /**
     * Issue a skyfire pay token (post /api/v1/tokens with type=pay).
     */
    CREATE_PAY_TOKEN: "SKYFIRE_CREATE_PAY_TOKEN",
    /**
     * Fetch all service tags to discover filtering options. chain with listdirectoryservices using tags parameter to find specific types of services (e.g., 'ai', 'mcp', 'scraping').
     */
    GET_ALL_SERVICE_TAGS: "SKYFIRE_GET_ALL_SERVICE_TAGS",
    /**
     * Retrieve buyer wallet balance. chain before token creation to prevent declines.
     */
    GET_BUYER_WALLET_BALANCE: "SKYFIRE_GET_BUYER_WALLET_BALANCE",
    /**
     * Get full details for one service. more detailed than listdirectoryservices - shows terms of service, api specs, and integration urls. use before creating expensive tokens.
     */
    GET_SERVICE: "SKYFIRE_GET_SERVICE",
    /**
     * Browse all services from one seller agent. useful when you trust a seller and want to see their full catalog, or when tracking down who provides a specific type of service.
     */
    GET_SERVICES_BY_AGENT: "SKYFIRE_GET_SERVICES_BY_AGENT",
    /**
     * Filter services by tags to find exactly what you need. more efficient than browsing all services when you know the category. chain: getallservicetags → getservicesbytags → createpaytoken.
     */
    GET_SERVICES_BY_TAGS: "SKYFIRE_GET_SERVICES_BY_TAGS",
    /**
     * Audit charges for a specific token. shows exactly what sellers charged against your token and when. use for reconciliation: "i authorized $5 max, what did they actually charge?"
     */
    GET_TOKEN_CHARGES: "SKYFIRE_GET_TOKEN_CHARGES",
    /**
     * Check if a token is still valid before calling a seller service. prevents wasted api calls with expired tokens. use after creating tokens if there's a delay before calling the seller, or when debugging payment issues.
     */
    INTROSPECT_TOKEN: "SKYFIRE_INTROSPECT_TOKEN",
    /**
     * Inspect buyer tokens for observability. chain with transactions to audit usage.
     */
    LIST_BUYER_TOKENS: "SKYFIRE_LIST_BUYER_TOKENS",
    /**
     * Browse skyfire's service directory to obtain `sellerserviceid` for token creation. chain this with createpaytoken or createkyapaytoken.
     */
    LIST_DIRECTORY_SERVICES: "SKYFIRE_LIST_DIRECTORY_SERVICES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SKYFIRE".
 */
export type SKYFIRE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SKYFIRE".
 */
export type SKYFIRE_TRIGGER_EVENTS = {}
