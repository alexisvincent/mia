// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of OWL_PROTOCOL's OWL_PROTOCOL_DEPLOY_COLLECTION tool input.
 */
type OWL_PROTOCOL_DEPLOY_COLLECTION_INPUT = {
  /**
   * Args
   * @description Constructor arguments for the contract.
   * @default null
   */
  args: (string | number | boolean)[] | null;
  /**
   * Chain Id
   * @description Blockchain network chain ID.
   */
  chainId?: number;
  /**
   * Contract Name
   * @description Name of the contract to deploy.
   */
  contractName?: string;
  /**
   * Name
   * @description Display name for the ERC721 collection.
   */
  name?: string;
  /**
   * Overrides
   * @description Transaction parameters to override (e.g., gasLimit).
   * @default null
   */
  overrides: {
      [key: string]: string | number | boolean;
  } | null;
  /**
   * Project Id
   * @description Project identifier.
   */
  projectId?: string;
  /**
   * Symbol
   * @description Symbol for the collection (token ticker).
   */
  symbol?: string;
};

/**
 * Type of OWL_PROTOCOL's OWL_PROTOCOL_DEPLOY_COLLECTION tool output.
 */
type OWL_PROTOCOL_DEPLOY_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Deployed contract address.
       */
      address: string;
      /**
       * Chain Id
       * @description Blockchain network chain ID.
       */
      chainId: number;
      /**
       * Status
       * @description Status message of the deployment.
       */
      status: string;
      /**
       * Transaction Hash
       * @description Transaction hash of the deployment.
       */
      transactionHash: string;
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
 * Type of OWL_PROTOCOL's OWL_PROTOCOL_GET_PROJECT_DETAILS tool input.
 */
type OWL_PROTOCOL_GET_PROJECT_DETAILS_INPUT = object;

/**
 * Type of OWL_PROTOCOL's OWL_PROTOCOL_GET_PROJECT_DETAILS tool output.
 */
type OWL_PROTOCOL_GET_PROJECT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the project was created.
       */
      createdAt: string;
      /**
       * Description
       * @description Optional description of the project.
       * @default null
       */
      description: string | null;
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
      /**
       * Owner
       * @description Owner of the project.
       */
      owner: string;
      /**
       * Project Id
       * @description Unique identifier of the project.
       */
      projectId: string;
      /**
       * Updated At
       * @description ISO-8601 timestamp when the project was last updated.
       */
      updatedAt: string;
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
 * Type of OWL_PROTOCOL's OWL_PROTOCOL_LIST_PROJECTS tool input.
 */
type OWL_PROTOCOL_LIST_PROJECTS_INPUT = object;

/**
 * Type of OWL_PROTOCOL's OWL_PROTOCOL_LIST_PROJECTS tool output.
 */
type OWL_PROTOCOL_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of project objects.
       */
      projects: ({
          /**
           * Created At
           * @description Timestamp when the project was created.
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the project.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier for the project.
           */
          id: string;
          /**
           * Name
           * @description Name of the project.
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the project was last updated.
           */
          updatedAt: string;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type map of all available tool input types for toolkit "OWL_PROTOCOL".
 */
export type OWL_PROTOCOL_TOOL_INPUTS = {
  DEPLOY_COLLECTION: OWL_PROTOCOL_DEPLOY_COLLECTION_INPUT
  GET_PROJECT_DETAILS: OWL_PROTOCOL_GET_PROJECT_DETAILS_INPUT
  LIST_PROJECTS: OWL_PROTOCOL_LIST_PROJECTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "OWL_PROTOCOL".
 */
export type OWL_PROTOCOL_TOOL_OUTPUTS = {
  DEPLOY_COLLECTION: OWL_PROTOCOL_DEPLOY_COLLECTION_OUTPUT
  GET_PROJECT_DETAILS: OWL_PROTOCOL_GET_PROJECT_DETAILS_OUTPUT
  LIST_PROJECTS: OWL_PROTOCOL_LIST_PROJECTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's OWL_PROTOCOL toolkit.
 */
export const OWL_PROTOCOL = {
  slug: "owl_protocol",
  tools: {
    /**
     * Tool to deploy a new erc721 collection contract. use after creating a project to programmatically deploy the collection on a specified blockchain.
     */
    DEPLOY_COLLECTION: "OWL_PROTOCOL_DEPLOY_COLLECTION",
    /**
     * Tool to retrieve details of a specific project. use when you need metadata about a project after authenticating with your api key.
     */
    GET_PROJECT_DETAILS: "OWL_PROTOCOL_GET_PROJECT_DETAILS",
    /**
     * Tool to list all projects. use when you need to retrieve all projects accessible by the authenticated user.
     */
    LIST_PROJECTS: "OWL_PROTOCOL_LIST_PROJECTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "OWL_PROTOCOL".
 */
export type OWL_PROTOCOL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "OWL_PROTOCOL".
 */
export type OWL_PROTOCOL_TRIGGER_EVENTS = {}
