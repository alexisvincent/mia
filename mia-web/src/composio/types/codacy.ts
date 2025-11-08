// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CODACY's CODACY_CREATE_API_TOKEN tool input.
 */
type CODACY_CREATE_API_TOKEN_INPUT = {
  /**
   * Description
   * @description Optional human-readable description of the token.
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name for the new API token.
   */
  name?: string;
  /**
   * Scope
   * @description Scope of the token, e.g., 'api', 'read', 'write'.
   */
  scope?: string;
};

/**
 * Type of CODACY's CODACY_CREATE_API_TOKEN tool output.
 */
type CODACY_CREATE_API_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Creation timestamp in ISO 8601 format.
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the token.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier for the token.
       */
      id: string;
      /**
       * Last Used At
       * Format: date-time
       * @description Last usage timestamp in ISO 8601 format, or null if never used.
       * @default null
       */
      lastUsedAt: string | null;
      /**
       * Name
       * @description Name of the token.
       */
      name: string;
      /**
       * Scope
       * @description Scope granted to this token.
       */
      scope: string;
      /**
       * Token
       * @description The newly created API token string.
       */
      token: string;
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
 * Type of CODACY's CODACY_DELETE_API_TOKEN tool input.
 */
type CODACY_DELETE_API_TOKEN_INPUT = {
  /**
   * Token Id
   * @description The ID of the API token to delete.
   */
  tokenId?: string;
};

/**
 * Type of CODACY's CODACY_DELETE_API_TOKEN tool output.
 */
type CODACY_DELETE_API_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the API token was successfully deleted.
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
 * Type of CODACY's CODACY_GET_ACCOUNT_DETAILS tool input.
 */
type CODACY_GET_ACCOUNT_DETAILS_INPUT = object;

/**
 * Type of CODACY's CODACY_GET_ACCOUNT_DETAILS tool output.
 */
type CODACY_GET_ACCOUNT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description URL to the user's avatar image.
       */
      avatarUrl: string;
      /**
       * Created
       * @description Account creation datetime (ISO8601).
       */
      created: string;
      /**
       * Email
       * @description The user's email address.
       */
      email: string;
      /**
       * Full Name
       * @description The user's full name.
       */
      fullName: string;
      /**
       * Id
       * @description The user's unique ID.
       */
      id: number;
      /**
       * Last Login
       * @description Last login datetime (ISO8601).
       */
      lastLogin: string;
      /**
       * Username
       * @description The user's username.
       */
      username: string;
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
 * Type of CODACY's CODACY_GET_ORGANIZATION_REPOSITORIES tool input.
 */
type CODACY_GET_ORGANIZATION_REPOSITORIES_INPUT = {
  /**
   * Organization Name
   * @description Name of the organization.
   */
  organizationName?: string;
  /**
   * Organization Provider
   * @description Provider of the organization (e.g., 'github', 'gitlab').
   */
  organizationProvider?: string;
  /**
   * Page
   * @description Page number for pagination, must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page, must be between 1 and 100.
   * @default null
   */
  perPage: number | null;
  /**
   * Search
   * @description Search term to filter repositories by name.
   * @default null
   */
  search: string | null;
};

/**
 * Type of CODACY's CODACY_GET_ORGANIZATION_REPOSITORIES tool output.
 */
type CODACY_GET_ORGANIZATION_REPOSITORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of repositories under the specified organization.
       */
      projects: {
          /**
           * Branch
           * @description Default branch of the repository.
           */
          branch: string;
          /**
           * Full Name
           * @description Full repository name including organization.
           */
          fullName: string;
          /**
           * Name
           * @description Repository name.
           */
          name: string;
          /**
           * Organization Name
           * @description Name of the organization.
           */
          organizationName: string;
          /**
           * Organization Provider
           * @description Provider of the organization.
           */
          organizationProvider: string;
          /**
           * Permissions
           * @description Permissions of the authenticated user on the repository.
           */
          permissions: {
              /**
               * Can Delete
               * @description Whether the authenticated user can delete the repository.
               */
              canDelete: boolean;
              /**
               * Can Edit
               * @description Whether the authenticated user can edit the repository.
               */
              canEdit: boolean;
          };
          /**
           * Provider
           * @description Version control provider (e.g., 'github', 'gitlab').
           */
          provider: string;
          /**
           * Repository Id
           * @description Unique identifier for the repository.
           */
          repositoryId: string;
          /**
           * Url
           * @description URL of the repository in Codacy.
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
 * Type of CODACY's CODACY_GET_USER_ORGANIZATIONS tool input.
 */
type CODACY_GET_USER_ORGANIZATIONS_INPUT = object;

/**
 * Type of CODACY's CODACY_GET_USER_ORGANIZATIONS tool output.
 */
type CODACY_GET_USER_ORGANIZATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Organizations
       * @description List of organizations the authenticated user belongs to.
       */
      organizations: {
          /**
           * Admin
           * @description Indicates if the authenticated user has admin privileges in the organization.
           */
          admin: boolean;
          /**
           * Created At
           * @description Timestamp when the organization was created in ISO 8601 format.
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the organization.
           */
          id: string;
          /**
           * Name
           * @description Name of the organization.
           */
          name: string;
          /**
           * Provider
           * @description Service provider (e.g., 'github').
           */
          provider: string;
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
 * Type of CODACY's CODACY_LIST_PROJECTS tool input.
 */
type CODACY_LIST_PROJECTS_INPUT = {
  /**
   * Organization Name
   * @description Filter by organization name.
   * @default null
   */
  organizationName: string | null;
  /**
   * Organization Provider
   * @description Filter by organization provider (e.g., 'github', 'gitlab').
   * @default null
   */
  organizationProvider: string | null;
  /**
   * Page
   * @description Page number for pagination, must be >= 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page, must be between 1 and 100.
   * @default null
   */
  perPage: number | null;
  /**
   * Search
   * @description Filter projects by matching project name.
   * @default null
   */
  search: string | null;
};

/**
 * Type of CODACY's CODACY_LIST_PROJECTS tool output.
 */
type CODACY_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of projects accessible to the authenticated user.
       */
      projects: {
          /**
           * Branch
           * @description Default branch of the repository.
           */
          branch: string;
          /**
           * Full Name
           * @description Full project name including organization.
           */
          fullName: string;
          /**
           * Name
           * @description Project name.
           */
          name: string;
          /**
           * Organization Name
           * @description Name of the organization.
           */
          organizationName: string;
          /**
           * Organization Provider
           * @description Provider for the organization.
           */
          organizationProvider: string;
          /**
           * Permissions
           * @description Permissions of the authenticated user for the project.
           */
          permissions: {
              /**
               * Can Delete
               * @description Whether the authenticated user can delete the project.
               */
              canDelete: boolean;
              /**
               * Can Edit
               * @description Whether the authenticated user can edit the project.
               */
              canEdit: boolean;
          };
          /**
           * Provider
           * @description VCS provider (e.g., 'github', 'gitlab').
           */
          provider: string;
          /**
           * Repository Id
           * @description Unique repository identifier.
           */
          repositoryId: string;
          /**
           * Url
           * @description URL to the project in the Codacy app.
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
 * Type map of all available tool input types for toolkit "CODACY".
 */
export type CODACY_TOOL_INPUTS = {
  CREATE_API_TOKEN: CODACY_CREATE_API_TOKEN_INPUT
  DELETE_API_TOKEN: CODACY_DELETE_API_TOKEN_INPUT
  GET_ACCOUNT_DETAILS: CODACY_GET_ACCOUNT_DETAILS_INPUT
  GET_ORGANIZATION_REPOSITORIES: CODACY_GET_ORGANIZATION_REPOSITORIES_INPUT
  GET_USER_ORGANIZATIONS: CODACY_GET_USER_ORGANIZATIONS_INPUT
  LIST_PROJECTS: CODACY_LIST_PROJECTS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CODACY".
 */
export type CODACY_TOOL_OUTPUTS = {
  CREATE_API_TOKEN: CODACY_CREATE_API_TOKEN_OUTPUT
  DELETE_API_TOKEN: CODACY_DELETE_API_TOKEN_OUTPUT
  GET_ACCOUNT_DETAILS: CODACY_GET_ACCOUNT_DETAILS_OUTPUT
  GET_ORGANIZATION_REPOSITORIES: CODACY_GET_ORGANIZATION_REPOSITORIES_OUTPUT
  GET_USER_ORGANIZATIONS: CODACY_GET_USER_ORGANIZATIONS_OUTPUT
  LIST_PROJECTS: CODACY_LIST_PROJECTS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CODACY toolkit.
 */
export const CODACY = {
  slug: "codacy",
  tools: {
    /**
     * Tool to create a new api token for the authenticated user's account. use after authenticating when you need to generate a fresh token for integrations.
     */
    CREATE_API_TOKEN: "CODACY_CREATE_API_TOKEN",
    /**
     * Tool to delete a specific api token from the authenticated user's account. use after confirming the token id.
     */
    DELETE_API_TOKEN: "CODACY_DELETE_API_TOKEN",
    /**
     * Tool to retrieve details of the authenticated user's account. use when confirming authentication before user-level operations.
     */
    GET_ACCOUNT_DETAILS: "CODACY_GET_ACCOUNT_DETAILS",
    /**
     * Tool to list all repositories under a specific organization and provider. use when you need to enumerate organization-scoped repositories.
     */
    GET_ORGANIZATION_REPOSITORIES: "CODACY_GET_ORGANIZATION_REPOSITORIES",
    /**
     * Tool to list all organizations the authenticated user belongs to. use after authenticating and need to discover accessible organizations.
     */
    GET_USER_ORGANIZATIONS: "CODACY_GET_USER_ORGANIZATIONS",
    /**
     * Tool to list all projects accessible to the authenticated user. use when you need a list of repositories after confirming api token validity.
     */
    LIST_PROJECTS: "CODACY_LIST_PROJECTS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CODACY".
 */
export type CODACY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CODACY".
 */
export type CODACY_TRIGGER_EVENTS = {}
