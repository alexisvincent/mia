// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MODELRY's MODELRY_CREATE_WORKSPACE tool input.
 */
type MODELRY_CREATE_WORKSPACE_INPUT = {
  /**
   * Description
   * @description Optional description or purpose of the workspace
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Human-readable name for the workspace
   */
  name?: string;
};

/**
 * Type of MODELRY's MODELRY_CREATE_WORKSPACE tool output.
 */
type MODELRY_CREATE_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the workspace was created
       * @default null
       */
      createdAt: string | null;
      /**
       * Description
       * @description Description of the workspace
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the workspace
       */
      id: string;
      /**
       * Name
       * @description Name of the workspace
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the workspace was last updated
       * @default null
       */
      updatedAt: string | null;
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
 * Type of MODELRY's MODELRY_DELETE_EMBED tool input.
 */
type MODELRY_DELETE_EMBED_INPUT = {
  /**
   * Embed Id
   * @description ID of the embed to delete
   */
  embedId?: string;
  /**
   * Workspace Id
   * @description Optional workspace scope to try workspace-scoped deletion endpoints as well.
   * @default null
   */
  workspaceId: string | null;
};

/**
 * Type of MODELRY's MODELRY_DELETE_EMBED tool output.
 */
type MODELRY_DELETE_EMBED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Result message returned by Modelry
       * @default null
       */
      message: string | null;
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
 * Type of MODELRY's MODELRY_DELETE_PRODUCT tool input.
 */
type MODELRY_DELETE_PRODUCT_INPUT = {
  /**
   * Product Id
   * @description ID of the product to delete
   */
  productId?: string;
};

/**
 * Type of MODELRY's MODELRY_DELETE_PRODUCT tool output.
 */
type MODELRY_DELETE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Result message returned by Modelry
       * @default null
       */
      message: string | null;
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
 * Type of MODELRY's MODELRY_DELETE_PRODUCT_REPOSITORY tool input.
 */
type MODELRY_DELETE_PRODUCT_REPOSITORY_INPUT = {
  /**
   * Repository Id
   * @description ID of the product repository to delete
   */
  repositoryId?: string;
};

/**
 * Type of MODELRY's MODELRY_DELETE_PRODUCT_REPOSITORY tool output.
 */
type MODELRY_DELETE_PRODUCT_REPOSITORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Result message returned by Modelry
       * @default null
       */
      message: string | null;
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
 * Type of MODELRY's MODELRY_DELETE_WORKSPACE tool input.
 */
type MODELRY_DELETE_WORKSPACE_INPUT = {
  /**
   * Workspace Id
   * @description ID of the workspace to delete
   */
  workspaceId?: string;
};

/**
 * Type of MODELRY's MODELRY_DELETE_WORKSPACE tool output.
 */
type MODELRY_DELETE_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Result message returned by Modelry
       * @default null
       */
      message: string | null;
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
 * Type of MODELRY's MODELRY_GET_EMBED tool input.
 */
type MODELRY_GET_EMBED_INPUT = {
  /**
   * Embed Id
   * @description Unique identifier of the embed to retrieve.
   */
  embed_id?: string;
};

/**
 * Type of MODELRY's MODELRY_GET_EMBED tool output.
 */
type MODELRY_GET_EMBED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Embed creation timestamp in ISO 8601 format
       * @default null
       */
      createdAt: string | null;
      /**
       * Id
       * @description Unique identifier of the embed
       */
      id: string;
      /**
       * Metadata
       * @description Additional metadata associated with the embed
       * @default null
       */
      metadata: {
          [key: string]: unknown;
      } | null;
      /**
       * Model Id
       * @description Identifier of the model used for this embed
       * @default null
       */
      modelId: string | null;
      /**
       * Status
       * @description Status of the embed (e.g., 'ready', 'processing')
       * @default null
       */
      status: string | null;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
       * @default null
       */
      updatedAt: string | null;
      /**
       * Vector Size
       * @description Dimension of the embed vector
       * @default null
       */
      vectorSize: number | null;
      /**
       * Workspace Id
       * @description Identifier of the workspace containing the embed
       * @default null
       */
      workspaceId: string | null;
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
 * Type of MODELRY's MODELRY_GET_PRODUCT_REPOSITORY tool input.
 */
type MODELRY_GET_PRODUCT_REPOSITORY_INPUT = {
  /**
   * Repository Id
   * @description Unique identifier of the product repository to retrieve.
   */
  repository_id?: string;
};

/**
 * Type of MODELRY's MODELRY_GET_PRODUCT_REPOSITORY tool output.
 */
type MODELRY_GET_PRODUCT_REPOSITORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the product repository
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the product repository
       */
      id: string;
      /**
       * Name
       * @description Name of the product repository
       */
      name: string;
      /**
       * Updated At
       * @description Last updated timestamp in ISO 8601 format
       * @default null
       */
      updatedAt: string | null;
      /**
       * Workspace Id
       * @description Identifier of the workspace containing this repository
       */
      workspaceId: string;
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
 * Type of MODELRY's MODELRY_GET_WORKSPACE tool input.
 */
type MODELRY_GET_WORKSPACE_INPUT = {
  /**
   * Workspace Id
   * @description Unique identifier of the workspace to retrieve.
   */
  workspace_id?: string;
};

/**
 * Type of MODELRY's MODELRY_GET_WORKSPACE tool output.
 */
type MODELRY_GET_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Workspace creation timestamp in ISO 8601 format
       * @default null
       */
      createdAt: string | null;
      /**
       * Description
       * @description Description of the workspace
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the workspace
       */
      id: string;
      /**
       * Name
       * @description Name of the workspace
       */
      name: string;
      /**
       * Owner Id
       * @description User ID of the workspace owner
       * @default null
       */
      ownerId: string | null;
      /**
       * Updated At
       * @description Last updated timestamp in ISO 8601 format
       * @default null
       */
      updatedAt: string | null;
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
 * Type of MODELRY's MODELRY_LIST_EMBEDS tool input.
 */
type MODELRY_LIST_EMBEDS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination, between 1 and 100
   * @default null
   */
  per_page: number | null;
  /**
   * Workspace Id
   * @description Optional workspace identifier to scope the embeds listing
   * @default null
   */
  workspace_id: string | null;
};

/**
 * Type of MODELRY's MODELRY_LIST_EMBEDS tool output.
 */
type MODELRY_LIST_EMBEDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Embeds
       * @description List of embeds returned by Modelry
       */
      embeds: {
          /**
           * Id
           * @description Embed unique identifier
           */
          id: string;
          /**
           * Name
           * @description Human-readable name of the embed
           * @default null
           */
          name: string | null;
      }[];
      /**
       * Page
       * @description Current page number returned
       * @default null
       */
      page: number | null;
      /**
       * Per Page
       * @description Number of items per page returned
       * @default null
       */
      per_page: number | null;
      /**
       * Total
       * @description Total number of embeds available
       * @default null
       */
      total: number | null;
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
 * Type of MODELRY's MODELRY_LIST_MODELING_REQUESTS tool input.
 */
type MODELRY_LIST_MODELING_REQUESTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination, between 1 and 100
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of MODELRY's MODELRY_LIST_MODELING_REQUESTS tool output.
 */
type MODELRY_LIST_MODELING_REQUESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Modeling Requests
       * @description List of modeling requests returned by Modelry
       */
      modeling_requests: {
          /**
           * Created At
           * @description ISO timestamp when the request was created
           * @default null
           */
          createdAt: string | null;
          /**
           * Description
           * @description Description or notes for the modeling request
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Unique identifier of the modeling request
           */
          id: string;
          /**
           * Name
           * @description Human-readable name of the modeling request
           * @default null
           */
          name: string | null;
          /**
           * Status
           * @description Current status of the modeling request
           * @default null
           */
          status: string | null;
          /**
           * Updated At
           * @description ISO timestamp when the request was last updated
           * @default null
           */
          updatedAt: string | null;
          /**
           * Workspace Id
           * @description Workspace ID that this request belongs to
           */
          workspaceId: string;
      }[];
      /**
       * Page
       * @description Current page number returned
       * @default null
       */
      page: number | null;
      /**
       * Per Page
       * @description Number of items per page returned
       * @default null
       */
      per_page: number | null;
      /**
       * Total
       * @description Total number of modeling requests available
       * @default null
       */
      total: number | null;
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
 * Type of MODELRY's MODELRY_LIST_PRODUCTS tool input.
 */
type MODELRY_LIST_PRODUCTS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination, between 1 and 100
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of MODELRY's MODELRY_LIST_PRODUCTS tool output.
 */
type MODELRY_LIST_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number returned
       * @default null
       */
      page: number | null;
      /**
       * Per Page
       * @description Number of items per page returned
       * @default null
       */
      per_page: number | null;
      /**
       * Products
       * @description List of products returned by Modelry
       */
      products: {
          /**
           * Created At
           * @description ISO timestamp when the product was created
           * @default null
           */
          created_at: string | null;
          /**
           * Description
           * @description Product description
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Product unique identifier
           */
          id: string;
          /**
           * Name
           * @description Product name
           */
          name: string;
          /**
           * Updated At
           * @description ISO timestamp when the product was last updated
           * @default null
           */
          updated_at: string | null;
      }[];
      /**
       * Total
       * @description Total number of products available
       * @default null
       */
      total: number | null;
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
 * Type of MODELRY's MODELRY_LIST_PRODUCT_REPOSITORIES tool input.
 */
type MODELRY_LIST_PRODUCT_REPOSITORIES_INPUT = {
  /**
   * Workspace Id
   * @description Unique identifier of the workspace to list repositories for
   */
  workspace_id?: string;
};

/**
 * Type of MODELRY's MODELRY_LIST_PRODUCT_REPOSITORIES tool output.
 */
type MODELRY_LIST_PRODUCT_REPOSITORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number returned
       * @default null
       */
      page: number | null;
      /**
       * Per Page
       * @description Number of items per page returned
       * @default null
       */
      per_page: number | null;
      /**
       * Product Repositories
       * @description List of product repositories returned by Modelry
       */
      product_repositories: {
          /**
           * Created At
           * @description ISO timestamp when the repository was created
           * @default null
           */
          createdAt: string | null;
          /**
           * Description
           * @description Description of the repository
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Product repository unique identifier
           */
          id: string;
          /**
           * Name
           * @description Name of the product repository
           */
          name: string;
          /**
           * Updated At
           * @description ISO timestamp when the repository was last updated
           * @default null
           */
          updatedAt: string | null;
      }[];
      /**
       * Total
       * @description Total number of repositories available
       * @default null
       */
      total: number | null;
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
 * Type of MODELRY's MODELRY_LIST_WORKSPACES tool input.
 */
type MODELRY_LIST_WORKSPACES_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination, between 1 and 100
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of MODELRY's MODELRY_LIST_WORKSPACES tool output.
 */
type MODELRY_LIST_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number returned
       * @default null
       */
      page: number | null;
      /**
       * Per Page
       * @description Number of items per page returned
       * @default null
       */
      per_page: number | null;
      /**
       * Total
       * @description Total number of workspaces available
       * @default null
       */
      total: number | null;
      /**
       * Workspaces
       * @description List of workspaces returned by Modelry
       */
      workspaces: {
          /**
           * Created At
           * @description ISO timestamp when the workspace was created
           * @default null
           */
          created_at: string | null;
          /**
           * Id
           * @description Workspace unique identifier
           */
          id: string;
          /**
           * Name
           * @description Workspace name
           */
          name: string;
          /**
           * Slug
           * @description Workspace slug, URL-friendly identifier
           * @default null
           */
          slug: string | null;
          /**
           * Updated At
           * @description ISO timestamp when the workspace was last updated
           * @default null
           */
          updated_at: string | null;
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
 * Type of MODELRY's MODELRY_ORDER_MODELING_SERVICE tool input.
 */
type MODELRY_ORDER_MODELING_SERVICE_INPUT = {
  /**
   * Due Date
   * @description Requested delivery date in ISO 8601 format; if omitted, standard turnaround applies
   * @default null
   */
  due_date: string | null;
  /**
   * Notes
   * @description Additional instructions or comments for the modeler
   * @default null
   */
  notes: string | null;
  /**
   * Priority
   * @description Turnaround priority; 'rush' may incur extra fees
   * @default standard
   * @enum {string}
   */
  priority: "standard" | "rush";
  /**
   * Product Id
   * @description Identifier of the product to be modeled
   */
  product_id?: string;
  /**
   * Reference Images
   * @description List of URLs pointing to reference images for the modeler
   * @default null
   */
  reference_images: string[] | null;
  /**
   * Service Type
   * @description Level of modeling detail required
   * @enum {string}
   */
  service_type?: "basic" | "advanced" | "photo-realistic";
  /**
   * Workspace Id
   * @description Unique identifier of the workspace where the order is placed
   */
  workspace_id?: string;
};

/**
 * Type of MODELRY's MODELRY_ORDER_MODELING_SERVICE tool output.
 */
type MODELRY_ORDER_MODELING_SERVICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Order creation timestamp in ISO 8601 format
       * @default null
       */
      createdAt: string | null;
      /**
       * Currency
       * @description Currency code of the order price, e.g., 'USD'
       * @default null
       */
      currency: string | null;
      /**
       * Estimated Due Date
       * @description Estimated completion date in ISO 8601 format
       * @default null
       */
      estimatedDueDate: string | null;
      /**
       * Id
       * @description Unique identifier of the created order
       */
      id: string;
      /**
       * Price
       * @description Total cost for the order
       * @default null
       */
      price: number | null;
      /**
       * Status
       * @description Current status of the order (e.g., pending, in_progress, completed)
       * @default null
       */
      status: string | null;
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
 * Type of MODELRY's MODELRY_TRACK_MODELING_PROGRESS tool input.
 */
type MODELRY_TRACK_MODELING_PROGRESS_INPUT = {
  /**
   * Request Id
   * @description Unique identifier of the modeling request to track
   */
  request_id?: string;
};

/**
 * Type of MODELRY's MODELRY_TRACK_MODELING_PROGRESS tool output.
 */
type MODELRY_TRACK_MODELING_PROGRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when modeling started (ISO 8601)
       */
      createdAt: string;
      /**
       * Estimated Completion
       * @description Estimated completion timestamp (ISO 8601), if available
       * @default null
       */
      estimatedCompletion: string | null;
      /**
       * Progress
       * @description Completion percentage of the modeling request
       */
      progress: number;
      /**
       * Request Id
       * @description Modeling request identifier
       */
      requestId: string;
      /**
       * Status
       * @description Current status of the modeling request
       * @enum {string}
       */
      status: "pending" | "in_progress" | "completed" | "failed";
      /**
       * Updated At
       * @description Timestamp of last status update (ISO 8601)
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
 * Type map of all available tool input types for toolkit "MODELRY".
 */
export type MODELRY_TOOL_INPUTS = {
  CREATE_WORKSPACE: MODELRY_CREATE_WORKSPACE_INPUT
  DELETE_EMBED: MODELRY_DELETE_EMBED_INPUT
  DELETE_PRODUCT: MODELRY_DELETE_PRODUCT_INPUT
  DELETE_PRODUCT_REPOSITORY: MODELRY_DELETE_PRODUCT_REPOSITORY_INPUT
  DELETE_WORKSPACE: MODELRY_DELETE_WORKSPACE_INPUT
  GET_EMBED: MODELRY_GET_EMBED_INPUT
  GET_PRODUCT_REPOSITORY: MODELRY_GET_PRODUCT_REPOSITORY_INPUT
  GET_WORKSPACE: MODELRY_GET_WORKSPACE_INPUT
  LIST_EMBEDS: MODELRY_LIST_EMBEDS_INPUT
  LIST_MODELING_REQUESTS: MODELRY_LIST_MODELING_REQUESTS_INPUT
  LIST_PRODUCTS: MODELRY_LIST_PRODUCTS_INPUT
  LIST_PRODUCT_REPOSITORIES: MODELRY_LIST_PRODUCT_REPOSITORIES_INPUT
  LIST_WORKSPACES: MODELRY_LIST_WORKSPACES_INPUT
  ORDER_MODELING_SERVICE: MODELRY_ORDER_MODELING_SERVICE_INPUT
  TRACK_MODELING_PROGRESS: MODELRY_TRACK_MODELING_PROGRESS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MODELRY".
 */
export type MODELRY_TOOL_OUTPUTS = {
  CREATE_WORKSPACE: MODELRY_CREATE_WORKSPACE_OUTPUT
  DELETE_EMBED: MODELRY_DELETE_EMBED_OUTPUT
  DELETE_PRODUCT: MODELRY_DELETE_PRODUCT_OUTPUT
  DELETE_PRODUCT_REPOSITORY: MODELRY_DELETE_PRODUCT_REPOSITORY_OUTPUT
  DELETE_WORKSPACE: MODELRY_DELETE_WORKSPACE_OUTPUT
  GET_EMBED: MODELRY_GET_EMBED_OUTPUT
  GET_PRODUCT_REPOSITORY: MODELRY_GET_PRODUCT_REPOSITORY_OUTPUT
  GET_WORKSPACE: MODELRY_GET_WORKSPACE_OUTPUT
  LIST_EMBEDS: MODELRY_LIST_EMBEDS_OUTPUT
  LIST_MODELING_REQUESTS: MODELRY_LIST_MODELING_REQUESTS_OUTPUT
  LIST_PRODUCTS: MODELRY_LIST_PRODUCTS_OUTPUT
  LIST_PRODUCT_REPOSITORIES: MODELRY_LIST_PRODUCT_REPOSITORIES_OUTPUT
  LIST_WORKSPACES: MODELRY_LIST_WORKSPACES_OUTPUT
  ORDER_MODELING_SERVICE: MODELRY_ORDER_MODELING_SERVICE_OUTPUT
  TRACK_MODELING_PROGRESS: MODELRY_TRACK_MODELING_PROGRESS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MODELRY toolkit.
 */
export const MODELRY = {
  slug: "modelry",
  tools: {
    /**
     * Tool to create a new workspace. use when you need to group products and embeds into a dedicated workspace. call after authenticating and specifying workspace details.
     */
    CREATE_WORKSPACE: "MODELRY_CREATE_WORKSPACE",
    /**
     * Tool to delete an embed. tries multiple common endpoint patterns and treats 404 as idempotent success after exhausting candidates (embed already deleted or not found).
     */
    DELETE_EMBED: "MODELRY_DELETE_EMBED",
    /**
     * Tool to delete a product. use after confirming the product id.
     */
    DELETE_PRODUCT: "MODELRY_DELETE_PRODUCT",
    /**
     * Tool to delete a product repository. use after confirming the repository id.
     */
    DELETE_PRODUCT_REPOSITORY: "MODELRY_DELETE_PRODUCT_REPOSITORY",
    /**
     * Tool to delete a workspace. use after confirming the workspace id.
     */
    DELETE_WORKSPACE: "MODELRY_DELETE_WORKSPACE",
    /**
     * Tool to retrieve details of a specific embed. use after confirming the embed id.
     */
    GET_EMBED: "MODELRY_GET_EMBED",
    /**
     * Tool to retrieve details of a specific product repository. use when you have a repository id and need its details.
     */
    GET_PRODUCT_REPOSITORY: "MODELRY_GET_PRODUCT_REPOSITORY",
    /**
     * Tool to retrieve details for a specific workspace. use after confirming the workspace id.
     */
    GET_WORKSPACE: "MODELRY_GET_WORKSPACE",
    /**
     * Tool to list available embeds. use when you need embed ids for downstream actions (e.g., modelry get embed). supports optional pagination.
     */
    LIST_EMBEDS: "MODELRY_LIST_EMBEDS",
    /**
     * Tool to list all 3d modeling requests associated with the authenticated user's workspace. use after authenticating to fetch your modeling requests.
     */
    LIST_MODELING_REQUESTS: "MODELRY_LIST_MODELING_REQUESTS",
    /**
     * Tool to list all products in modelry. use when you need to retrieve available products after authenticating.
     */
    LIST_PRODUCTS: "MODELRY_LIST_PRODUCTS",
    /**
     * Tool to list all product repositories in a workspace. use after confirming the workspace id.
     */
    LIST_PRODUCT_REPOSITORIES: "MODELRY_LIST_PRODUCT_REPOSITORIES",
    /**
     * Tool to list all workspaces in modelry. use when you need to retrieve available workspaces after authenticating.
     */
    LIST_WORKSPACES: "MODELRY_LIST_WORKSPACES",
    /**
     * Tool to place an order for 3d modeling services. use when workspace and product ids are known and modeling specifications are ready.
     */
    ORDER_MODELING_SERVICE: "MODELRY_ORDER_MODELING_SERVICE",
    /**
     * Tool to track the progress of a 3d modeling request. use after initiating a modeling job to poll current status and completion percentage.
     */
    TRACK_MODELING_PROGRESS: "MODELRY_TRACK_MODELING_PROGRESS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MODELRY".
 */
export type MODELRY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MODELRY".
 */
export type MODELRY_TRIGGER_EVENTS = {}
