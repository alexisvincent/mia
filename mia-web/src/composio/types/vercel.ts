// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of VERCEL's VERCEL_ADD_ENVIRONMENT_VARIABLE tool input.
 */
type VERCEL_ADD_ENVIRONMENT_VARIABLE_INPUT = {
  /**
   * Comment
   * @description Optional comment for context
   * @default null
   */
  comment: string | null;
  /**
   * Custom Environment Ids
   * @description Custom environment identifiers
   * @default null
   */
  customEnvironmentIds: string[] | null;
  /**
   * Git Branch
   * @description Git branch to scope this variable to
   * @default null
   */
  gitBranch: string | null;
  /**
   * Id Or Name
   * @description The unique identifier or name of the project
   */
  idOrName?: string;
  /**
   * Key
   * @description Name of the environment variable
   */
  key?: string;
  /**
   * Slug
   * @description Team slug to perform the request on behalf of
   * @default null
   */
  slug: string | null;
  /**
   * Target
   * @description Environments where this variable should be available
   */
  target?: string[];
  /**
   * Team Id
   * @description Team identifier to perform the request on behalf of
   * @default null
   */
  teamId: string | null;
  /**
   * Type
   * @description Type of the variable storage: 'plain' or 'encrypted'
   * @enum {string}
   */
  type?: "plain" | "encrypted";
  /**
   * Upsert
   * @description If true, overwrite existing variables with the same key
   * @default null
   */
  upsert: boolean | null;
  /**
   * Value
   * @description Value of the environment variable
   */
  value?: string;
};

/**
 * Type of VERCEL's VERCEL_ADD_ENVIRONMENT_VARIABLE tool output.
 */
type VERCEL_ADD_ENVIRONMENT_VARIABLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Successfully created variables
       */
      created: {
          /**
           * Comment
           * @description Comment for the environment variable
           * @default null
           */
          comment: string | null;
          /**
           * Created At
           * @description Timestamp when created (ms since epoch)
           */
          createdAt: number;
          /**
           * Created By
           * @description User who created the variable
           */
          createdBy: string;
          /**
           * Custom Environment Ids
           * @description Custom environment IDs
           * @default null
           */
          customEnvironmentIds: string[] | null;
          /**
           * Git Branch
           * @description Git branch scoped to this variable
           * @default null
           */
          gitBranch: string | null;
          /**
           * Id
           * @description Unique identifier of the environment variable
           */
          id: string;
          /**
           * Key
           * @description Name of the environment variable
           */
          key: string;
          /** Target */
          target: string[];
          /**
           * Type
           * @description Storage type of the variable
           * @enum {string}
           */
          type: "plain" | "encrypted";
          /**
           * Updated At
           * @description Timestamp when last updated (ms since epoch)
           */
          updatedAt: number;
          /**
           * Updated By
           * @description User who last updated the variable
           */
          updatedBy: string;
          /**
           * Value
           * @description Value of the environment variable
           */
          value: string;
      }[];
      /**
       * Failed
       * @description Variables that failed to be created
       */
      failed: {
          /**
           * Action
           * @description Action being performed when failure occurred
           * @default null
           */
          action: string | null;
          /**
           * Env Var Id
           * @description ID of the env var that failed
           * @default null
           */
          envVarId: string | null;
          /**
           * Env Var Key
           * @description Key of the env var that failed
           * @default null
           */
          envVarKey: string | null;
          /**
           * Error
           * @description Error details for failed variable creation
           */
          error: {
              /**
               * Code
               * @description Error code
               */
              code: string;
              /**
               * Link
               * @description Link to more information about the error
               * @default null
               */
              link: string | null;
              /**
               * Message
               * @description Error message
               */
              message: string;
          };
          /**
           * Git Branch
           * @description Git branch for the failed var
           * @default null
           */
          gitBranch: string | null;
          /**
           * Key
           * @description Name of the environment variable that failed
           * @default null
           */
          key: string | null;
          /**
           * Link
           * @description Link for error context
           * @default null
           */
          link: string | null;
          /**
           * Project
           * @description Project associated with the failed variable
           * @default null
           */
          project: string | null;
          /**
           * Target
           * @description Environments targeted for the failed variable
           * @default null
           */
          target: string[] | null;
          /**
           * Value
           * @description Value of the environment variable that failed
           * @default null
           */
          value: string | null;
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
 * Type of VERCEL's VERCEL_CHECK_CACHE_ARTIFACT_EXISTS tool input.
 */
type VERCEL_CHECK_CACHE_ARTIFACT_EXISTS_INPUT = {
  /**
   * Hash
   * @description The cache artifact hash to check.
   */
  hash?: string;
  /**
   * Slug
   * @description Team slug to perform the request on behalf of
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Team identifier to perform the request on behalf of
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_CHECK_CACHE_ARTIFACT_EXISTS tool output.
 */
type VERCEL_CHECK_CACHE_ARTIFACT_EXISTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Exists
       * @description True if the cache artifact exists, false if not found
       */
      exists: boolean;
      /**
       * Headers
       * @description Response headers returned by the API when artifact exists
       * @default null
       */
      headers: {
          [key: string]: string;
      } | null;
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
 * Type of VERCEL's VERCEL_CHECK_DOMAIN_AVAILABILITY tool input.
 */
type VERCEL_CHECK_DOMAIN_AVAILABILITY_INPUT = {
  /**
   * Name
   * @description The domain name to check for availability (e.g., 'example.com').
   */
  name?: string;
  /**
   * Slug
   * @description Optional team slug to perform the request on behalf of.
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Optional team identifier to perform the request on behalf of.
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_CHECK_DOMAIN_AVAILABILITY tool output.
 */
type VERCEL_CHECK_DOMAIN_AVAILABILITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Available
       * @description True if the domain name is available for purchase.
       */
      available: boolean;
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
 * Type of VERCEL's VERCEL_CHECK_DOMAIN_PRICE tool input.
 */
type VERCEL_CHECK_DOMAIN_PRICE_INPUT = {
  /**
   * Name
   * Format: hostname
   * @description Fully qualified domain name to check price for (format: hostname)
   */
  name?: unknown;
};

/**
 * Type of VERCEL's VERCEL_CHECK_DOMAIN_PRICE tool output.
 */
type VERCEL_CHECK_DOMAIN_PRICE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Available
       * @description Whether the domain is available for registration
       * @default null
       */
      available: boolean | null;
      /**
       * Currency
       * @description Currency code for the price, e.g., 'USD'
       * @default null
       */
      currency: string | null;
      /**
       * Name
       * @description The checked domain name
       * @default null
       */
      name: string | null;
      /**
       * Period
       * @description Duration in years covered by the price
       */
      period: number;
      /**
       * Price
       * @description Domain purchase price per year in USD
       */
      price: number;
      /**
       * Supported
       * @description Whether the domain's TLD is supported by Vercel
       * @default null
       */
      supported: boolean | null;
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
 * Type of VERCEL's VERCEL_CREATE_AUTH_TOKEN tool input.
 */
type VERCEL_CREATE_AUTH_TOKEN_INPUT = {
  /**
   * Name
   * @description Name of the new authentication token
   */
  name?: string;
  /**
   * Slug
   * @description Team slug to perform the request on behalf of
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Team identifier to perform the request on behalf of
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_CREATE_AUTH_TOKEN tool output.
 */
type VERCEL_CREATE_AUTH_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bearer Token
       * @description The newly created bearer token
       */
      bearerToken: string;
      /**
       * Token
       * @description Details of the created token
       */
      token: {
          /**
           * Active At
           * @description Last active timestamp of the token (ms since epoch)
           */
          activeAt: number;
          /**
           * Created At
           * @description Creation timestamp of the token (ms since epoch)
           */
          createdAt: number;
          /**
           * Expires At
           * @description Expiration timestamp of the token (ms since epoch)
           */
          expiresAt: number;
          /**
           * Id
           * @description Unique identifier of the token
           */
          id: string;
          /**
           * Name
           * @description Name of the token
           */
          name: string;
          /**
           * Origin
           * @description Origin of the token, e.g., 'github'
           */
          origin: string;
          /**
           * Scopes
           * @description List of scopes associated with the token
           */
          scopes: {
              /**
               * Created At
               * @description Creation timestamp of the scope (ms since epoch)
               */
              createdAt: number;
              /**
               * Expires At
               * @description Expiration timestamp of the scope (ms since epoch)
               */
              expiresAt: number;
              /**
               * Origin
               * @description Origin of the scope, e.g., 'saml'
               */
              origin: string;
              /**
               * TokenScopeSudo
               * @description Details of sudo access if granted for this scope
               * @default null
               */
              sudo: {
                  /**
                   * Expires At
                   * @description Expiration timestamp of the sudo access (ms since epoch)
                   */
                  expiresAt: number;
                  /**
                   * Origin
                   * @description Origin of the sudo access, e.g., 'totp'
                   */
                  origin: string;
              } | null;
              /**
               * Type
               * @description Type of the scope, e.g., 'user'
               */
              type: string;
          }[];
          /**
           * Type
           * @description Type of the token, e.g., 'oauth2-token'
           */
          type: string;
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
 * Type of VERCEL's VERCEL_CREATE_EDGE_CONFIG tool input.
 */
type VERCEL_CREATE_EDGE_CONFIG_INPUT = {
  /**
   * Description
   * @description Optional description for the Edge Config
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the Edge Config
   */
  name?: string;
  /**
   * Project Id
   * @description ID of the Vercel project to associate with the Edge Config
   */
  projectId?: string;
  /**
   * Slug
   * @description Slug for the Edge Config, must be unique within the project
   */
  slug?: string;
};

/**
 * Type of VERCEL's VERCEL_CREATE_EDGE_CONFIG tool output.
 */
type VERCEL_CREATE_EDGE_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp when the Edge Config was created
       */
      createdAt: string;
      /**
       * Creator
       * @description Information about the creator of the Edge Config
       */
      creator: {
          /**
           * Email
           * @description Email of the creator
           */
          email: string;
          /**
           * Uid
           * @description User ID of the creator
           */
          uid: string;
      };
      /**
       * Description
       * @description Description of the Edge Config
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the Edge Config
       */
      id: string;
      /**
       * Name
       * @description Name of the Edge Config
       */
      name: string;
      /**
       * Slug
       * @description Slug identifier of the Edge Config
       */
      slug: string;
      /**
       * Updated At
       * @description ISO timestamp when the Edge Config was last updated
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
 * Type of VERCEL's VERCEL_CREATE_EDGE_CONFIG_TOKEN tool input.
 */
type VERCEL_CREATE_EDGE_CONFIG_TOKEN_INPUT = {
  /**
   * Edge Config Id
   * @description The unique identifier of the Edge Config for which the token is being created.
   */
  edgeConfigId?: string;
  /**
   * Label
   * @description A label for the token to help identify its purpose (max length 52).
   */
  label?: string;
  /**
   * Slug
   * @description The Team slug to perform the request on behalf of.
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description The Team identifier to perform the request on behalf of.
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_CREATE_EDGE_CONFIG_TOKEN tool output.
 */
type VERCEL_CREATE_EDGE_CONFIG_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the created token.
       */
      id: string;
      /**
       * Token
       * @description The generated read access token.
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
 * Type of VERCEL's VERCEL_CREATE_NEW_DEPLOYMENT tool input.
 */
type VERCEL_CREATE_NEW_DEPLOYMENT_INPUT = {
  /**
   * Deployment Id
   * @description Specify an existing deployment ID to redeploy the same version
   * @default null
   */
  deploymentId: string | null;
  /**
   * Files
   * @description List of files for non-git deployments. Provide file paths and data. Required if no git metadata is supplied.
   * @default null
   */
  files: {
      /**
       * Data
       * @description Base64 or text data of the file to deploy
       */
      data: string;
      /**
       * File
       * @description Path of the file in deployment, e.g., 'folder/file.js'
       */
      file: string;
  }[] | null;
  /**
   * Force New
   * @description Forces a new deployment even if there is a previous similar deployment
   * @default null
   * @enum {string|null}
   */
  forceNew: "0" | "1" | null;
  /**
   * GitMetadata
   * @description Git commit metadata for git-based deployments
   * @default null
   */
  gitMetadata: {
      /**
       * Commit Author Email
       * @description Author email of the commit
       */
      commitAuthorEmail: string;
      /**
       * Commit Author Name
       * @description Author name of the commit
       */
      commitAuthorName: string;
      /**
       * Commit Message
       * @description Commit message
       */
      commitMessage: string;
      /**
       * Commit Ref
       * @description Branch or ref of the commit
       */
      commitRef: string;
      /**
       * Commit Sha
       * @description SHA of the commit
       */
      commitSha: string;
      /**
       * Dirty
       * @description Whether the working directory was dirty when committing
       */
      dirty: boolean;
      /**
       * Remote Url
       * @description Remote repository URL
       */
      remoteUrl: string;
  } | null;
  /**
   * GitSource
   * @description Git source information for git-based deployments
   * @default null
   */
  gitSource: {
      /**
       * Ref
       * @description Git ref or branch
       */
      ref: string;
      /**
       * Repo Uuid
       * @description UUID of the repository
       */
      repoUuid: string;
      /**
       * Sha
       * @description Commit SHA
       */
      sha: string;
      /**
       * Type
       * @description Type of Git provider
       * @enum {string}
       */
      type: "github" | "bitbucket" | "gitlab";
      /**
       * Workspace Uuid
       * @description Workspace UUID for Bitbucket or GitLab
       * @default null
       */
      workspaceUuid: string | null;
  } | null;
  /**
   * Meta
   * @description User-defined metadata key/value pairs
   * @default null
   */
  meta: {
      [key: string]: string;
  } | null;
  /**
   * Name
   * @description Name for the deployment, defaults to project setting
   * @default null
   */
  name: string | null;
  /**
   * Project
   * @description Project ID or name to deploy to
   * @default null
   */
  project: string | null;
  /**
   * ProjectSettings
   * @description Project-specific build and install commands
   * @default null
   */
  projectSettings: {
      /**
       * Build Command
       * @description Command to build the project, e.g., 'npm run build'
       * @default null
       */
      buildCommand: string | null;
      /**
       * Install Command
       * @description Command to install dependencies, e.g., 'npm install'
       * @default null
       */
      installCommand: string | null;
  } | null;
  /**
   * Skip Auto Detection Confirmation
   * @description Allows skipping framework detection confirmation
   * @default null
   * @enum {string|null}
   */
  skipAutoDetectionConfirmation: "0" | "1" | null;
  /**
   * Slug
   * @description The Team slug to perform the request on behalf of
   * @default null
   */
  slug: string | null;
  /**
   * Target
   * @description Deployment target environment
   * @default null
   * @enum {string|null}
   */
  target: "production" | "staging" | null;
  /**
   * Team Id
   * @description The Team identifier to perform the request on behalf of
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_CREATE_NEW_DEPLOYMENT tool output.
 */
type VERCEL_CREATE_NEW_DEPLOYMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in milliseconds since epoch
       */
      createdAt: number;
      /**
       * Creator
       * @description Information about who created the deployment
       */
      creator: {
          /**
           * Avatar
           * @description Avatar URL of the creator
           * @default null
           */
          avatar: string | null;
          /**
           * Uid
           * @description User ID of the creator
           */
          uid: string;
          /**
           * Username
           * @description Username of the creator
           */
          username: string;
      };
      /**
       * Id
       * @description Deployment unique identifier
       */
      id: string;
      /**
       * Inspector Url
       * @description URL to inspect the deployment
       * @default null
       */
      inspectorUrl: string | null;
      /**
       * Meta
       * @description User-defined metadata attached to deployment
       */
      meta: {
          [key: string]: string;
      };
      /**
       * Name
       * @description Deployment name
       * @default null
       */
      name: string | null;
      /**
       * Project
       * @description Information about the project deployed
       */
      project: {
          /**
           * Framework
           * @description Framework used by the project
           * @default null
           */
          framework: string | null;
          /**
           * Id
           * @description Project ID
           */
          id: string;
          /**
           * Name
           * @description Project name
           */
          name: string;
      };
      /**
       * Ready State
       * @description Current ready state of the deployment
       */
      readyState: string;
      /**
       * Target
       * @description Deployment target environment
       */
      target: string;
      /**
       * Url
       * @description URL of the deployed deployment
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
 * Type of VERCEL's VERCEL_DELETE_AUTH_TOKEN tool input.
 */
type VERCEL_DELETE_AUTH_TOKEN_INPUT = {
  /**
   * Token Id
   * @description The identifier of the token to invalidate. Use 'current' to invalidate the token used for this request.
   */
  tokenId?: string;
};

/**
 * Type of VERCEL's VERCEL_DELETE_AUTH_TOKEN tool output.
 */
type VERCEL_DELETE_AUTH_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Token Id
       * @description The ID of the token that was invalidated.
       */
      tokenId: string;
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
 * Type of VERCEL's VERCEL_DELETE_DEPLOYMENT tool input.
 */
type VERCEL_DELETE_DEPLOYMENT_INPUT = {
  /**
   * Id
   * @description Unique identifier of the deployment to be deleted.
   */
  id?: string;
  /**
   * Slug
   * @description Optional team slug to perform the request on behalf of.
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Optional team identifier to perform the request on behalf of.
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_DELETE_DEPLOYMENT tool output.
 */
type VERCEL_DELETE_DEPLOYMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of VERCEL's VERCEL_DELETE_EDGE_CONFIG_TOKENS tool input.
 */
type VERCEL_DELETE_EDGE_CONFIG_TOKENS_INPUT = {
  /**
   * Edge Config Id
   * @description Unique identifier of the Edge Config from which to delete tokens.
   */
  edgeConfigId?: string;
  /**
   * Slug
   * @description Optional Team slug on whose behalf to perform the request.
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Optional Team identifier on whose behalf to perform the request.
   * @default null
   */
  teamId: string | null;
  /**
   * Tokens
   * @description List of token strings to delete for the given Edge Config.
   */
  tokens?: string[];
};

/**
 * Type of VERCEL's VERCEL_DELETE_EDGE_CONFIG_TOKENS tool output.
 */
type VERCEL_DELETE_EDGE_CONFIG_TOKENS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of VERCEL's VERCEL_DELETE_ENVIRONMENT_VARIABLE tool input.
 */
type VERCEL_DELETE_ENVIRONMENT_VARIABLE_INPUT = {
  /**
   * Custom Environment Id
   * @description Optional custom environment identifier within the project.
   * @default null
   */
  customEnvironmentId: string | null;
  /**
   * Id
   * @description Environment variable ID to delete.
   */
  id?: string;
  /**
   * Id Or Name
   * @description Project ID or project name.
   */
  idOrName?: string;
  /**
   * Slug
   * @description Optional team slug to perform the request on behalf of.
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Optional team identifier to perform the request on behalf of.
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_DELETE_ENVIRONMENT_VARIABLE tool output.
 */
type VERCEL_DELETE_ENVIRONMENT_VARIABLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comment
       * @description Comment associated with the environment variable.
       * @default null
       */
      comment: string | null;
      /**
       * Configuration Id
       * @description Configuration ID associated with the variable.
       * @default null
       */
      configurationId: string | null;
      /**
       * ContentHint
       * @description Hints about the content type.
       * @default null
       */
      contentHint: {
          /**
           * Store Id
           * @description Store ID associated with the content hint.
           * @default null
           */
          storeId: string | null;
          /**
           * Type
           * @description Type of content hint.
           */
          type: string;
      } | null;
      /**
       * Created At
       * @description Creation timestamp (ms since epoch).
       * @default null
       */
      createdAt: number | null;
      /**
       * Created By
       * @description User ID who created the variable.
       * @default null
       */
      createdBy: string | null;
      /**
       * Custom Environment Ids
       * @description Custom environment IDs.
       * @default null
       */
      customEnvironmentIds: string[] | null;
      /**
       * Decrypted
       * @description Whether the variable value was decrypted.
       * @default null
       */
      decrypted: boolean | null;
      /**
       * Edge Config Id
       * @description Edge Config ID associated with the variable.
       * @default null
       */
      edgeConfigId: string | null;
      /**
       * Edge Config Token Id
       * @description Edge Config Token ID.
       * @default null
       */
      edgeConfigTokenId: string | null;
      /**
       * Git Branch
       * @description Git branch associated with the variable.
       * @default null
       */
      gitBranch: string | null;
      /**
       * Id
       * @description Unique ID of the environment variable.
       */
      id: string;
      /**
       * InternalContentHint
       * @description Internal hints about content.
       * @default null
       */
      internalContentHint: {
          /**
           * Encrypted Value
           * @description Encrypted value for internal hint.
           * @default null
           */
          encryptedValue: string | null;
          /**
           * Type
           * @description Type of internal content hint.
           */
          type: string;
      } | null;
      /**
       * Key
       * @description Name of the environment variable.
       */
      key: string;
      /**
       * Sunset Secret Id
       * @description ID of secret being sunset.
       * @default null
       */
      sunsetSecretId: string | null;
      /**
       * Target
       * @description Environments where the variable applied.
       */
      target: string[];
      /**
       * Type
       * @description Type of the environment variable.
       */
      type: string;
      /**
       * Updated At
       * @description Last updated timestamp (ms since epoch).
       * @default null
       */
      updatedAt: number | null;
      /**
       * Updated By
       * @description User ID who last updated the variable.
       * @default null
       */
      updatedBy: string | null;
      /**
       * Value
       * @description Value of the environment variable.
       * @default null
       */
      value: string | null;
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
 * Type of VERCEL's VERCEL_DELETE_PROJECT tool input.
 */
type VERCEL_DELETE_PROJECT_INPUT = {
  /**
   * Id
   * @description The unique project identifier or project name.
   */
  id?: string;
  /**
   * Slug
   * @description The Team slug to perform the request on behalf of.
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description The Team ID to perform the request on behalf of.
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_DELETE_PROJECT tool output.
 */
type VERCEL_DELETE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
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
 * Type of VERCEL's VERCEL_DEPLOY_EDGE_FUNCTION tool input.
 */
type VERCEL_DEPLOY_EDGE_FUNCTION_INPUT = {
  /**
   * Files
   * @description List of edge function files to deploy. Each file must use Edge Runtime.
   */
  files?: {
      /**
       * Data
       * @description Base64 or text content of the edge function file. Must export 'runtime = edge' and use ES modules.
       */
      data: string;
      /**
       * File
       * @description Path of the edge function file in deployment, e.g., 'api/hello.js'
       */
      file: string;
  }[];
  /**
   * Name
   * @description Name for the edge function deployment
   */
  name?: string;
  /**
   * Project
   * @description Project ID or name to deploy the edge function to
   * @default null
   */
  project: string | null;
  /**
   * ProjectSettings
   * @description Project settings for new projects. Required for new projects.
   * @default null
   */
  projectSettings: {
      /**
       * Build Command
       * @description Command to build the project
       * @default null
       */
      buildCommand: string | null;
      /**
       * Dev Command
       * @description Command to start the development server
       * @default null
       */
      devCommand: string | null;
      /**
       * Framework
       * @description Framework to use for the project
       * @default null
       */
      framework: string | null;
      /**
       * Install Command
       * @description Command to install dependencies
       * @default null
       */
      installCommand: string | null;
      /**
       * Output Directory
       * @description Directory where build output is located
       * @default null
       */
      outputDirectory: string | null;
      /**
       * Root Directory
       * @description Root directory of the project
       * @default null
       */
      rootDirectory: string | null;
  } | null;
  /**
   * Target
   * @description Deployment target environment
   * @default production
   */
  target: string | null;
  /**
   * Team Id
   * @description The Team identifier to perform the request on behalf of
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_DEPLOY_EDGE_FUNCTION tool output.
 */
type VERCEL_DEPLOY_EDGE_FUNCTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in milliseconds since epoch
       */
      createdAt: number;
      /**
       * Id
       * @description Deployment unique identifier
       */
      id: string;
      /**
       * Inspector Url
       * @description URL to inspect the deployment
       * @default null
       */
      inspectorUrl: string | null;
      /**
       * Name
       * @description Edge function deployment name
       */
      name: string;
      /**
       * Ready State
       * @description Current ready state of the deployment
       */
      readyState: string;
      /**
       * Target
       * @description Deployment target environment
       */
      target: string;
      /**
       * Url
       * @description URL of the deployed edge function
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
 * Type of VERCEL's VERCEL_GET_AUTH_TOKEN_METADATA tool input.
 */
type VERCEL_GET_AUTH_TOKEN_METADATA_INPUT = {
  /**
   * Token Id
   * @description The identifier of the token to retrieve. Use 'current' to get metadata for the token used for this request.
   */
  tokenId?: string;
};

/**
 * Type of VERCEL's VERCEL_GET_AUTH_TOKEN_METADATA tool output.
 */
type VERCEL_GET_AUTH_TOKEN_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Token
       * @description Authentication token metadata.
       */
      token: {
          /**
           * Active At
           * @description Last active timestamp of the token (ms since epoch)
           */
          activeAt: number;
          /**
           * Created At
           * @description Creation timestamp of the token (ms since epoch)
           */
          createdAt: number;
          /**
           * Expires At
           * @description Expiration timestamp of the token (ms since epoch)
           */
          expiresAt: number;
          /**
           * Id
           * @description Unique identifier of the token
           */
          id: string;
          /**
           * Name
           * @description Name of the token
           */
          name: string;
          /**
           * Origin
           * @description Origin of the token, e.g., 'github'
           */
          origin: string;
          /**
           * Scopes
           * @description List of scopes associated with the token
           */
          scopes: {
              /**
               * Created At
               * @description Creation timestamp of the scope (ms since epoch)
               */
              createdAt: number;
              /**
               * Expires At
               * @description Expiration timestamp of the scope (ms since epoch)
               */
              expiresAt: number;
              /**
               * Origin
               * @description Origin of the scope, e.g., 'saml'
               */
              origin: string;
              /**
               * TokenScopeSudo
               * @description Details of sudo access if granted for this scope
               * @default null
               */
              sudo: {
                  /**
                   * Expires At
                   * @description Expiration timestamp of the sudo access (ms since epoch)
                   */
                  expiresAt: number;
                  /**
                   * Origin
                   * @description Origin of the sudo access, e.g., 'totp'
                   */
                  origin: string;
              } | null;
              /**
               * Type
               * @description Type of the scope, e.g., 'user'
               */
              type: string;
          }[];
          /**
           * Type
           * @description Type of the token, e.g., 'oauth2-token'
           */
          type: string;
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
 * Type of VERCEL's VERCEL_GET_DEPLOYMENT_DETAILS tool input.
 */
type VERCEL_GET_DEPLOYMENT_DETAILS_INPUT = {
  /**
   * Id Or Url
   * @description The unique identifier or hostname of the deployment
   */
  idOrUrl?: string;
  /**
   * Slug
   * @description Team slug to perform the request on behalf of
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Team identifier to perform the request on behalf of
   * @default null
   */
  teamId: string | null;
  /**
   * With Git Repo Info
   * @description Whether to include Git repository information
   * @default null
   */
  withGitRepoInfo: boolean | null;
};

/**
 * Type of VERCEL's VERCEL_GET_DEPLOYMENT_DETAILS tool output.
 */
type VERCEL_GET_DEPLOYMENT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alias Assigned
       * @description Timestamp when alias was assigned, ms since epoch
       * @default null
       */
      aliasAssigned: number | null;
      /**
       * Alias Error
       * @description Error message if alias assignment failed
       * @default null
       */
      aliasError: string | null;
      /**
       * Aliases
       * @description Alias URLs assigned to the deployment
       * @default null
       */
      aliases: string[] | null;
      /**
       * Created At
       * @description Creation timestamp in milliseconds since epoch
       */
      createdAt: number;
      /**
       * Creator
       * @description Information about who created the deployment
       */
      creator: {
          /**
           * Avatar
           * @description Avatar URL of the creator
           * @default null
           */
          avatar: string | null;
          /**
           * Uid
           * @description User ID of the creator
           */
          uid: string;
          /**
           * Username
           * @description Username of the creator
           */
          username: string;
      };
      /**
       * GitRepoInfo
       * @description Git repository information, if requested
       * @default null
       */
      gitRepo: {
          /**
           * Ref
           * @description Branch or ref of the deployment commit
           * @default null
           */
          ref: string | null;
          /**
           * Repo
           * @description Repository name or URL
           * @default null
           */
          repo: string | null;
          /**
           * Type
           * @description Git provider type
           * @default null
           */
          type: string | null;
      } | null;
      /**
       * Id
       * @description Deployment unique identifier
       */
      id: string;
      /**
       * Inspector Url
       * @description URL to inspect the deployment in the web console
       * @default null
       */
      inspectorUrl: string | null;
      /**
       * Meta
       * @description User-defined metadata attached to deployment
       */
      meta: {
          [key: string]: string;
      };
      /**
       * Name
       * @description Deployment name
       * @default null
       */
      name: string | null;
      /**
       * Project
       * @description Information about the project deployed
       */
      project: {
          /**
           * Framework
           * @description Framework used by the project
           * @default null
           */
          framework: string | null;
          /**
           * Id
           * @description Project ID
           */
          id: string;
          /**
           * Name
           * @description Project name
           */
          name: string;
      };
      /**
       * Ready State
       * @description Current ready state of the deployment
       */
      readyState: string;
      /**
       * Regions
       * @description List of regions where the deployment is served
       */
      regions: string[];
      /**
       * Target
       * @description Deployment target environment, e.g., 'production'
       */
      target: string;
      /**
       * Url
       * @description URL of the deployment
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
 * Type of VERCEL's VERCEL_GET_DEPLOYMENT_EVENTS tool input.
 */
type VERCEL_GET_DEPLOYMENT_EVENTS_INPUT = {
  /**
   * Builds
   * @description Include build events; set to 1 to enable
   * @default null
   */
  builds: number | null;
  /**
   * Delimiter
   * @description Include delimiter events; set to 1 to enable
   * @default null
   */
  delimiter: number | null;
  /**
   * Direction
   * @description Order of the returned events based on the timestamp
   * @default forward
   * @enum {string}
   */
  direction: "forward" | "backward";
  /**
   * Follow
   * @description When enabled (1), this endpoint will stream live events as they happen
   * @default null
   */
  follow: number | null;
  /**
   * Id Or Url
   * @description Unique identifier or hostname of the deployment
   */
  idOrUrl?: string;
  /**
   * Limit
   * @description Maximum number of events to return; use -1 for all available logs
   * @default null
   */
  limit: number | null;
  /**
   * Name
   * @description Deployment build ID
   * @default null
   */
  name: string | null;
  /**
   * Since
   * @description Timestamp (ms) for when events should be pulled from
   * @default null
   */
  since: number | null;
  /**
   * Slug
   * @description Team slug to perform the request on behalf of
   * @default null
   */
  slug: string | null;
  /**
   * Status Code
   * @description HTTP status code range to filter events by (e.g., '5xx')
   * @default null
   */
  statusCode: string | null;
  /**
   * Team Id
   * @description Team identifier to perform the request on behalf of
   * @default null
   */
  teamId: string | null;
  /**
   * Until
   * @description Timestamp (ms) for when events should be pulled up until
   * @default null
   */
  until: number | null;
};

/**
 * Type of VERCEL's VERCEL_GET_DEPLOYMENT_EVENTS tool output.
 */
type VERCEL_GET_DEPLOYMENT_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Timestamp when the event record was created
       */
      created: number;
      /**
       * Payload
       * @description Detailed event payload
       */
      payload: {
          /**
           * Created
           * @description Creation timestamp of the event
           */
          created: number;
          /**
           * Date
           * @description Event timestamp (ms since epoch)
           */
          date: number;
          /**
           * Deployment Id
           * @description Deployment identifier
           */
          deploymentId: string;
          /**
           * Id
           * @description Event unique identifier
           */
          id: string;
          /**
           * Info
           * @description Structured info for the event
           */
          info: {
              /**
               * Entrypoint
               * @description Entrypoint of the event
               */
              entrypoint: string;
              /**
               * Name
               * @description Event name
               */
              name: string;
              /**
               * Path
               * @description Path associated with the event
               */
              path: string;
              /**
               * Ready State
               * @description Ready state at this event
               */
              readyState: string;
              /**
               * Step
               * @description Event step
               */
              step: string;
              /**
               * Type
               * @description Event info type
               */
              type: string;
          };
          /**
           * Proxy
           * @description Proxy details if applicable
           * @default null
           */
          proxy: {
              /**
               * Cache Id
               * @description Cache identifier
               * @default null
               */
              cacheId: string | null;
              /**
               * Client Ip
               * @description Client IP address
               * @default null
               */
              clientIp: string | null;
              /**
               * Host
               * @description Host of the incoming request
               */
              host: string;
              /**
               * Lambda Region
               * @description Region of the invoked lambda
               * @default null
               */
              lambdaRegion: string | null;
              /**
               * Method
               * @description HTTP method used in the request
               */
              method: string;
              /**
               * Path
               * @description Path of the incoming request
               */
              path: string;
              /**
               * Path Type
               * @description Type of path
               * @default null
               */
              pathType: string | null;
              /**
               * Path Type Variant
               * @description Variant of the path type
               * @default null
               */
              pathTypeVariant: string | null;
              /**
               * Referer
               * @description HTTP referer header
               * @default null
               */
              referer: string | null;
              /**
               * Region
               * @description Region of the request origin
               * @default null
               */
              region: string | null;
              /**
               * Response Byte Size
               * @description Size of the response in bytes
               * @default null
               */
              responseByteSize: number | null;
              /**
               * Scheme
               * @description URL scheme (e.g., 'https')
               * @default null
               */
              scheme: string | null;
              /**
               * Status Code
               * @description HTTP status code returned via proxy
               */
              statusCode: number;
              /**
               * Timestamp
               * @description Proxy timestamp (ms since epoch)
               */
              timestamp: number;
              /**
               * User Agent
               * @description List of user agent strings
               */
              userAgent: string[];
              /**
               * Vercel Cache
               * @description Vercel cache status
               * @default null
               */
              vercelCache: string | null;
              /**
               * Vercel Id
               * @description Vercel request identifier
               * @default null
               */
              vercelId: string | null;
              /**
               * Waf Action
               * @description WAF action taken
               * @default null
               */
              wafAction: string | null;
              /**
               * Waf Rule Id
               * @description WAF rule identifier
               * @default null
               */
              wafRuleId: string | null;
          } | null;
          /**
           * Request Id
           * @description Request ID associated with the event
           * @default null
           */
          requestId: string | null;
          /**
           * Serial
           * @description Serial number of the event
           */
          serial: string;
          /**
           * Status Code
           * @description HTTP status code associated with the event
           */
          statusCode: number;
          /**
           * Text
           * @description Textual payload of the event
           */
          text: string;
      };
      /**
       * Type
       * @description Type of the event message
       */
      type: string;
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
 * Type of VERCEL's VERCEL_GET_DEPLOYMENT_LOGS tool input.
 */
type VERCEL_GET_DEPLOYMENT_LOGS_INPUT = {
  /**
   * Builds
   * @description Include build logs; set to 1 to enable
   * @default null
   */
  builds: number | null;
  /**
   * Direction
   * @description Order of the returned logs based on the timestamp
   * @default forward
   * @enum {string}
   */
  direction: "forward" | "backward";
  /**
   * Follow
   * @description When enabled (1), this endpoint will stream live logs as they happen
   * @default null
   */
  follow: number | null;
  /**
   * Id Or Url
   * @description Unique identifier or hostname of the deployment
   */
  idOrUrl?: string;
  /**
   * Limit
   * @description Maximum number of log entries to return; use -1 for all available logs
   * @default 100
   */
  limit: number | null;
  /**
   * Since
   * @description Timestamp (ms) for when logs should be pulled from
   * @default null
   */
  since: number | null;
  /**
   * Slug
   * @description Team slug to perform the request on behalf of
   * @default null
   */
  slug: string | null;
  /**
   * Status Code
   * @description HTTP status code range to filter logs by (e.g., '5xx')
   * @default null
   */
  statusCode: string | null;
  /**
   * Team Id
   * @description Team identifier to perform the request on behalf of
   * @default null
   */
  teamId: string | null;
  /**
   * Until
   * @description Timestamp (ms) for when logs should be pulled up until
   * @default null
   */
  until: number | null;
};

/**
 * Type of VERCEL's VERCEL_GET_DEPLOYMENT_LOGS tool output.
 */
type VERCEL_GET_DEPLOYMENT_LOGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Logs
       * @description List of deployment log entries
       */
      logs: {
          /**
           * Created
           * @description Timestamp when the log entry was created
           */
          created: number;
          /**
           * Text
           * @description Log message text
           */
          text: string;
          /**
           * Type
           * @description Type of the log message
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
 * Type of VERCEL's VERCEL_GET_DOMAIN_TRANSFER_INFO tool input.
 */
type VERCEL_GET_DOMAIN_TRANSFER_INFO_INPUT = {
  /**
   * Domain
   * @description The domain name to check transfer info for (e.g., 'example.com')
   */
  domain?: string;
  /**
   * Slug
   * @description Optional Vercel Team slug to perform the request on behalf of.
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Optional Vercel Team ID to perform the request on behalf of.
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_GET_DOMAIN_TRANSFER_INFO tool output.
 */
type VERCEL_GET_DOMAIN_TRANSFER_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reason
       * @description Additional context or reason for the transfer status
       * @default null
       */
      reason: string | null;
      /**
       * Status
       * @description Current status of the transfer, e.g., 'pending_owner'
       */
      status: string;
      /**
       * Transfer Policy
       * @description The policy regarding the transfer, e.g., 'charge-and-renew'
       */
      transferPolicy: string;
      /**
       * Transferable
       * @description Indicates if the domain is transferable
       */
      transferable: boolean;
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
 * Type of VERCEL's VERCEL_GET_EDGE_CONFIG tool input.
 */
type VERCEL_GET_EDGE_CONFIG_INPUT = {
  /**
   * Edge Config Id
   * @description Unique identifier of the Edge Config to retrieve
   */
  edgeConfigId?: string;
  /**
   * Slug
   * @description Optional Team slug to perform the request on behalf of
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Optional Team ID to perform the request on behalf of
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_GET_EDGE_CONFIG tool output.
 */
type VERCEL_GET_EDGE_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the Edge Config was created (ms since epoch)
       */
      createdAt: number;
      /**
       * Digest
       * @description Digest of the Edge Config
       */
      digest: string;
      /**
       * Id
       * @description Unique identifier of the Edge Config
       */
      id: string;
      /**
       * Item Count
       * @description Number of items in the Edge Config
       */
      itemCount: number;
      /**
       * Owner Id
       * @description Identifier of the owner of the Edge Config
       */
      ownerId: string;
      /**
       * Purpose
       * @description Purpose metadata of the Edge Config
       */
      purpose: {
          /**
           * Project Id
           * @description Identifier of the associated project
           */
          projectId: string;
          /**
           * Type
           * @description Type of purpose, e.g., 'flags'
           */
          type: string;
      };
      /**
       * Schema
       * @description Configuration schema object of the Edge Config
       */
      schema: {
          [key: string]: unknown;
      };
      /**
       * Size In Bytes
       * @description Size of the Edge Config in bytes
       */
      sizeInBytes: number;
      /**
       * Slug
       * @description Slug of the Edge Config
       */
      slug: string;
      /**
       * Transfer
       * @description Transfer details for an Edge Config.
       * @default null
       */
      transfer: {
          /**
           * Done At
           * @description Timestamp when the transfer completed (ms since epoch)
           * @default null
           */
          doneAt: number | null;
          /**
           * From Account Id
           * @description Identifier of the account from which the Edge Config was transferred
           */
          fromAccountId: string;
          /**
           * Started At
           * @description Timestamp when the transfer started (ms since epoch)
           */
          startedAt: number;
      } | null;
      /**
       * Updated At
       * @description Timestamp when the Edge Config was last updated (ms since epoch)
       */
      updatedAt: number;
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
 * Type of VERCEL's VERCEL_GET_EDGE_CONFIG_ITEM tool input.
 */
type VERCEL_GET_EDGE_CONFIG_ITEM_INPUT = {
  /**
   * Edge Config Id
   * @description Unique identifier of the Edge Config
   */
  edgeConfigId?: string;
  /**
   * Edge Config Item Key
   * @description Key of the Edge Config item to retrieve
   */
  edgeConfigItemKey?: string;
  /**
   * Slug
   * @description Team slug to perform the request on behalf of
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Team identifier to perform the request on behalf of
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_GET_EDGE_CONFIG_ITEM tool output.
 */
type VERCEL_GET_EDGE_CONFIG_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the item was created (ms since epoch)
       */
      createdAt: number;
      /**
       * Description
       * @description Description of the Edge Config item
       * @default null
       */
      description: string | null;
      /**
       * Edge Config Id
       * @description Unique identifier of the Edge Config
       */
      edgeConfigId: string;
      /**
       * Key
       * @description Key of the Edge Config item
       */
      key: string;
      /**
       * Updated At
       * @description Timestamp when the item was last updated (ms since epoch)
       */
      updatedAt: number;
      /**
       * Value
       * @description Value of the Edge Config item
       */
      value: string | null;
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
 * Type of VERCEL's VERCEL_GET_EDGE_CONFIG_TOKEN tool input.
 */
type VERCEL_GET_EDGE_CONFIG_TOKEN_INPUT = {
  /**
   * Edge Config Id
   * @description The unique identifier of the Edge Config.
   */
  edgeConfigId?: string;
  /**
   * Slug
   * @description Team slug to perform the request on behalf of.
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Team identifier to perform the request on behalf of.
   * @default null
   */
  teamId: string | null;
  /**
   * Token
   * @description The token string whose metadata is to be retrieved.
   */
  token?: string;
};

/**
 * Type of VERCEL's VERCEL_GET_EDGE_CONFIG_TOKEN tool output.
 */
type VERCEL_GET_EDGE_CONFIG_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the token was created (ms since epoch).
       */
      createdAt: number;
      /**
       * Edge Config Id
       * @description The unique identifier of the Edge Config.
       */
      edgeConfigId: string;
      /**
       * Id
       * @description The unique identifier of the token.
       */
      id: string;
      /**
       * Label
       * @description The label associated with the token.
       */
      label: string;
      /**
       * Token
       * @description The token string.
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
 * Type of VERCEL's VERCEL_GET_PROJECT tool input.
 */
type VERCEL_GET_PROJECT_INPUT = {
  /**
   * Project Id Or Name
   * @description The unique identifier or name of the project.
   */
  projectIdOrName?: string;
  /**
   * Team Id
   * @description Team identifier to perform the request on behalf of. Omit for personal account.
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_GET_PROJECT tool output.
 */
type VERCEL_GET_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Identifier of the account that owns the project.
       */
      accountId: string;
      /**
       * Alias
       * @description Domain aliases associated with the project.
       * @default null
       */
      alias: string[] | null;
      /**
       * Created At
       * @description Timestamp when the project was created.
       */
      createdAt: number;
      /**
       * Framework
       * @description Framework used in the project.
       * @default null
       */
      framework: string | null;
      /**
       * GitRepository
       * @description Linked Git repository information.
       * @default null
       */
      gitRepository: {
          /**
           * Branch
           * @description Branch name.
           * @default null
           */
          branch: string | null;
          /**
           * Repo
           * @description Name of the repository.
           * @default null
           */
          repo: string | null;
          /**
           * Slug
           * @description Repository slug.
           * @default null
           */
          slug: string | null;
          /**
           * Type
           * @description Type of Git provider (e.g., 'github').
           * @default null
           */
          type: string | null;
      } | null;
      /**
       * Id
       * @description Unique identifier of the project.
       */
      id: string;
      /**
       * Name
       * @description Name of the project.
       */
      name: string;
      /**
       * ProjectSettings
       * @description Build and development settings of the project.
       * @default null
       */
      settings: {
          /**
           * Build Command
           * @description Build command for the project.
           * @default null
           */
          buildCommand: string | null;
          /**
           * Dev Command
           * @description Development command for the project.
           * @default null
           */
          devCommand: string | null;
          /**
           * Framework Preset
           * @description Preset configuration for the framework.
           * @default null
           */
          frameworkPreset: string | null;
          /**
           * Install Command
           * @description Install command for the project.
           * @default null
           */
          installCommand: string | null;
          /**
           * Node Version
           * @description Node.js version used.
           * @default null
           */
          nodeVersion: string | null;
          /**
           * Output Directory
           * @description Directory where the build output is located.
           * @default null
           */
          outputDirectory: string | null;
          /**
           * Public Source
           * @description Whether the source code is public.
           * @default null
           */
          publicSource: boolean | null;
          /**
           * Root Directory
           * @description Root directory of the project.
           * @default null
           */
          rootDirectory: string | null;
      } | null;
      /**
       * Targets
       * @description Deployment targets for the project.
       * @default null
       */
      targets: {
          /**
           * Production
           * @description Deployment target for production.
           * @default null
           */
          production: string | null;
          /**
           * Staging
           * @description Deployment target for staging.
           * @default null
           */
          staging: string | null;
      } | null;
      /**
       * Updated At
       * @description Timestamp of the last update to the project.
       */
      updatedAt: number;
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
 * Type of VERCEL's VERCEL_LIST_ALIASES tool input.
 */
type VERCEL_LIST_ALIASES_INPUT = {
  /**
   * Domain
   * @description Filter aliases by specified domain names; list will be sent as comma-separated values.
   * @default null
   */
  domain: string[] | null;
  /**
   * Limit
   * @description Maximum number of aliases to return.
   * @default null
   */
  limit: number | null;
  /**
   * Project Id
   * @description Filter aliases by the specified project ID.
   * @default null
   */
  projectId: string | null;
  /**
   * Rollback Deployment Id
   * @description Filter aliases that would be rolled back for the given deployment ID.
   * @default null
   */
  rollbackDeploymentId: string | null;
  /**
   * Since
   * @description Filter aliases created after this timestamp (milliseconds).
   * @default null
   */
  since: number | null;
  /**
   * Slug
   * @description Team slug to perform the request on behalf of.
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Team identifier to perform the request on behalf of.
   * @default null
   */
  teamId: string | null;
  /**
   * Until
   * @description Filter aliases created before this timestamp (milliseconds).
   * @default null
   */
  until: number | null;
};

/**
 * Type of VERCEL's VERCEL_LIST_ALIASES tool output.
 */
type VERCEL_LIST_ALIASES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Aliases
       * @description List of alias objects.
       */
      aliases: {
          /**
           * Alias
           * @description The alias URL.
           */
          alias: string;
          /**
           * Created
           * @description Creation date in ISO 8601 format.
           */
          created: string;
          /**
           * Created At
           * @description Creation timestamp (milliseconds).
           */
          createdAt: number;
          /**
           * AliasCreator
           * @description Information about the user who created the alias.
           * @default null
           */
          creator: {
              /**
               * Email
               * @description Creator's email address.
               * @default null
               */
              email: string | null;
              /**
               * Uid
               * @description Creator's unique user ID.
               */
              uid: string;
              /**
               * Username
               * @description Creator's username.
               * @default null
               */
              username: string | null;
          } | null;
          /**
           * Deleted At
           * @description Deletion timestamp (milliseconds), if applicable.
           * @default null
           */
          deletedAt: number | null;
          /**
           * AliasDeployment
           * @description Deployment information associated with the alias.
           * @default null
           */
          deployment: {
              /**
               * Id
               * @description Deployment ID.
               */
              id: string;
              /**
               * Meta
               * @description Metadata key/value pairs associated with the deployment.
               * @default null
               */
              meta: {
                  [key: string]: {
                      [key: string]: unknown;
                  };
              } | null;
              /**
               * Url
               * @description Deployment URL.
               */
              url: string;
          } | null;
          /**
           * Deployment Id
           * @description Deployment ID.
           */
          deploymentId: string;
          /**
           * Microfrontends
           * @description Microfrontends configuration.
           * @default null
           */
          microfrontends: {
              /**
               * Applications
               * @description List of microfrontend applications.
               * @default null
               */
              applications: {
                  /**
                   * Deployment Id
                   * @description Deployment ID of the microfrontend application.
                   * @default null
                   */
                  deploymentId: string | null;
                  /**
                   * Deployment Url
                   * @description Deployment URL of the microfrontend application.
                   * @default null
                   */
                  deploymentUrl: string | null;
                  /**
                   * Fallback Host
                   * @description Fallback host when routing.
                   * @default null
                   */
                  fallbackHost: string | null;
                  /**
                   * Project Id
                   * @description Project ID for the microfrontend application.
                   */
                  projectId: string;
              }[] | null;
              /**
               * MicrofrontendsDefaultApp
               * @description Default microfrontend application configuration.
               * @default null
               */
              defaultApp: {
                  /**
                   * Project Id
                   * @description Project ID for default microfrontend application.
                   */
                  projectId: string;
              } | null;
          } | null;
          /**
           * Project Id
           * @description Project ID.
           */
          projectId: string;
          /**
           * Protection Bypass
           * @description Protection bypass settings as key-value pairs.
           * @default null
           */
          protectionBypass: {
              [key: string]: string;
          } | null;
          /**
           * Redirect
           * @description Redirect URL, if applicable.
           * @default null
           */
          redirect: string | null;
          /**
           * Redirect Status Code
           * @description Redirect HTTP status code.
           * @default null
           */
          redirectStatusCode: number | null;
          /**
           * Uid
           * @description Alias unique identifier.
           */
          uid: string;
          /**
           * Updated At
           * @description Last update timestamp (milliseconds).
           */
          updatedAt: number;
      }[];
      /**
       * Pagination
       * @description Pagination metadata.
       */
      pagination: {
          /**
           * Count
           * @description Number of aliases returned in the current page.
           */
          count: number;
          /**
           * Next
           * @description Cursor for the next page (timestamp in milliseconds).
           * @default null
           */
          next: number | null;
          /**
           * Prev
           * @description Cursor for the previous page (timestamp in milliseconds).
           * @default null
           */
          prev: number | null;
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
 * Type of VERCEL's VERCEL_LIST_ALL_DEPLOYMENTS tool input.
 */
type VERCEL_LIST_ALL_DEPLOYMENTS_INPUT = {
  /**
   * App
   * @description Name of the deployment to filter by
   * @default null
   */
  app: string | null;
  /**
   * Branch
   * @description Filter deployments based on the branch name
   * @default null
   */
  branch: string | null;
  /**
   * Limit
   * @description Maximum number of deployments to return
   * @default null
   */
  limit: number | null;
  /**
   * Project Id
   * @description Filter deployments from the given project ID or name
   * @default null
   */
  projectId: string | null;
  /**
   * Rollback Candidate
   * @description Filter deployments based on rollback candidacy
   * @default null
   */
  rollbackCandidate: boolean | null;
  /**
   * Sha
   * @description Filter deployments based on the commit SHA
   * @default null
   */
  sha: string | null;
  /**
   * Since
   * @description Get deployments created after this JavaScript timestamp
   * @default null
   */
  since: number | null;
  /**
   * Slug
   * @description Team slug to perform the request on behalf of
   * @default null
   */
  slug: string | null;
  /**
   * State
   * @description Comma-separated list of states to filter by. Allowed: BUILDING, ERROR, INITIALIZING, QUEUED, READY, CANCELED
   * @default null
   */
  state: string | null;
  /**
   * Target
   * @description Filter deployments based on the environment (e.g., 'production')
   * @default null
   */
  target: string | null;
  /**
   * Team Id
   * @description Team identifier to perform the request on behalf of
   * @default null
   */
  teamId: string | null;
  /**
   * Until
   * @description Get deployments created before this JavaScript timestamp
   * @default null
   */
  until: number | null;
  /**
   * Users
   * @description Comma-separated list of user IDs to filter by creator. Example: 'kr1PsOIzqEL5Xg6M4VZcZosf,K4amb7K9dAt5R2vBJWF32bmY'
   * @default null
   */
  users: string | null;
};

/**
 * Type of VERCEL's VERCEL_LIST_ALL_DEPLOYMENTS tool output.
 */
type VERCEL_LIST_ALL_DEPLOYMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deployments
       * @description List of deployments returned
       */
      deployments: {
          /**
           * Alias Assigned
           * @description Timestamp when alias was assigned
           * @default null
           */
          aliasAssigned: number | null;
          /**
           * AliasError
           * @description Alias assignment error, if any
           * @default null
           */
          aliasError: {
              /**
               * Code
               * @description Error code for alias assignment failure
               * @default null
               */
              code: string | null;
              /**
               * Message
               * @description Error message for alias assignment failure
               * @default null
               */
              message: string | null;
          } | null;
          /**
           * Building At
           * @description Timestamp when build started
           * @default null
           */
          buildingAt: number | null;
          /**
           * Checks
           * @description Detailed check results by name
           * @default null
           */
          checks: {
              [key: string]: {
                  /**
                   * Completedat
                   * @description Timestamp when check completed
                   * @default null
                   */
                  completedAt: number | null;
                  /**
                   * Startedat
                   * @description Timestamp when check started
                   * @default null
                   */
                  startedAt: number | null;
                  /**
                   * State
                   * @description State of the check
                   */
                  state: string;
              };
          } | null;
          /**
           * Checks Conclusion
           * @description Conclusion of checks, e.g., 'succeeded'
           * @default null
           */
          checksConclusion: string | null;
          /**
           * Checks State
           * @description Overall state of checks
           * @default null
           */
          checksState: string | null;
          /**
           * Connect Builds Enabled
           * @description Whether Connect Builds is enabled
           * @default null
           */
          connectBuildsEnabled: boolean | null;
          /**
           * Connect Configuration Id
           * @description Connect configuration ID
           * @default null
           */
          connectConfigurationId: string | null;
          /**
           * Created
           * @description Created timestamp
           * @default null
           */
          created: number | null;
          /**
           * Created At
           * @description Timestamp when deployment was created
           * @default null
           */
          createdAt: number | null;
          /**
           * Creator
           * @description Information about who created the deployment
           * @default null
           */
          creator: {
              /**
               * Email
               * @description Email of the creator
               * @default null
               */
              email: string | null;
              /**
               * Github Login
               * @description GitHub login of the creator
               * @default null
               */
              githubLogin: string | null;
              /**
               * Gitlab Login
               * @description GitLab login of the creator
               * @default null
               */
              gitlabLogin: string | null;
              /**
               * Uid
               * @description User ID of the creator
               */
              uid: string;
              /**
               * Username
               * @description Username of the creator
               * @default null
               */
              username: string | null;
          } | null;
          /**
           * CustomEnvironment
           * @description Custom environment details
           * @default null
           */
          customEnvironment: {
              /**
               * Id
               * @description Identifier of custom environment
               */
              id: string;
              /**
               * Slug
               * @description Slug of custom environment
               */
              slug: string;
          } | null;
          /**
           * Default Route
           * @description Default route of the deployment
           * @default null
           */
          defaultRoute: string | null;
          /**
           * Deleted
           * @description Deletion timestamp
           * @default null
           */
          deleted: number | null;
          /**
           * Expiration
           * @description Expiration timestamp
           * @default null
           */
          expiration: number | null;
          /**
           * Inspector Url
           * @description URL to inspect deployment in web console
           * @default null
           */
          inspectorUrl: string | null;
          /**
           * Is Rollback Candidate
           * @description Whether deployment is a rollback candidate
           * @default null
           */
          isRollbackCandidate: boolean | null;
          /**
           * Meta
           * @description User-defined metadata attached to deployment
           * @default null
           */
          meta: {
              [key: string]: string;
          } | null;
          /**
           * Name
           * @description Deployment name
           * @default null
           */
          name: string | null;
          /**
           * Passive Connect Configuration Id
           * @description Passive connect configuration ID
           * @default null
           */
          passiveConnectConfigurationId: string | null;
          /**
           * Project Id
           * @description Project ID
           * @default null
           */
          projectId: string | null;
          /**
           * ProjectSettings
           * @description Settings of the project for this deployment
           * @default null
           */
          projectSettings: {
              /**
               * Build Command
               * @description Build command
               * @default null
               */
              buildCommand: string | null;
              /**
               * Command For Ignoring Build Step
               * @description Command to ignore build step
               * @default null
               */
              commandForIgnoringBuildStep: string | null;
              /**
               * Created At
               * @description Timestamp when settings were created
               * @default null
               */
              createdAt: number | null;
              /**
               * Customer Support Code Visibility
               * @description Customer support code visibility flag
               * @default null
               */
              customerSupportCodeVisibility: boolean | null;
              /**
               * Dev Command
               * @description Development command
               * @default null
               */
              devCommand: string | null;
              /**
               * Framework
               * @description Framework used by the project
               * @default null
               */
              framework: string | null;
              /**
               * GitComments
               * @description Git comment settings
               * @default null
               */
              gitComments: {
                  /**
                   * On Commit
                   * @description Whether comments on commits are enabled
                   */
                  onCommit: boolean;
                  /**
                   * On Pull Request
                   * @description Whether comments on pull requests are enabled
                   */
                  onPullRequest: boolean;
              } | null;
              /**
               * Git Fork Protection
               * @description Whether fork protection is enabled
               * @default null
               */
              gitForkProtection: boolean | null;
              /**
               * Git Lfs
               * @description Whether Git LFS is enabled
               * @default null
               */
              gitLFS: boolean | null;
              /**
               * Install Command
               * @description Install command
               * @default null
               */
              installCommand: string | null;
              /**
               * Node Version
               * @description Node.js version used
               * @default null
               */
              nodeVersion: string | null;
              /**
               * Output Directory
               * @description Output directory for build artifacts
               * @default null
               */
              outputDirectory: string | null;
              /**
               * Public Source
               * @description Whether public source is enabled
               * @default null
               */
              publicSource: boolean | null;
              /**
               * Root Directory
               * @description Root directory for the project
               * @default null
               */
              rootDirectory: string | null;
              /**
               * Skip Git Connect During Link
               * @description Skip Git connect during linking
               * @default null
               */
              skipGitConnectDuringLink: boolean | null;
              /**
               * Source Files Outside Root Directory
               * @description Whether source files outside root directory are allowed
               * @default null
               */
              sourceFilesOutsideRootDirectory: boolean | null;
              /**
               * SpeedInsights
               * @description Speed Insights configuration
               * @default null
               */
              speedInsights: {
                  /**
                   * Canceled At
                   * @description Timestamp when canceled
                   * @default null
                   */
                  canceledAt: number | null;
                  /**
                   * Disabled At
                   * @description Timestamp when disabled
                   * @default null
                   */
                  disabledAt: number | null;
                  /**
                   * Enabled At
                   * @description Timestamp when enabled
                   * @default null
                   */
                  enabledAt: number | null;
                  /**
                   * Has Data
                   * @description Whether data is available
                   * @default null
                   */
                  hasData: boolean | null;
                  /**
                   * Id
                   * @description Identifier of Speed Insights
                   */
                  id: string;
                  /**
                   * Paid At
                   * @description Timestamp when paid
                   * @default null
                   */
                  paidAt: number | null;
              } | null;
              /**
               * WebAnalytics
               * @description Web Analytics configuration
               * @default null
               */
              webAnalytics: {
                  /**
                   * Canceled At
                   * @description Timestamp when canceled
                   * @default null
                   */
                  canceledAt: number | null;
                  /**
                   * Disabled At
                   * @description Timestamp when disabled
                   * @default null
                   */
                  disabledAt: number | null;
                  /**
                   * Enabled At
                   * @description Timestamp when enabled
                   * @default null
                   */
                  enabledAt: number | null;
                  /**
                   * Has Data
                   * @description Whether data is available
                   * @default null
                   */
                  hasData: boolean | null;
                  /**
                   * Id
                   * @description Identifier of Web Analytics
                   */
                  id: string;
              } | null;
          } | null;
          /**
           * Proposed Expiration
           * @description Proposed expiration timestamp
           * @default null
           */
          proposedExpiration: number | null;
          /**
           * Ready
           * @description Timestamp when deployment became ready
           * @default null
           */
          ready: number | null;
          /**
           * Ready State
           * @description Ready state of the deployment
           * @default null
           */
          readyState: string | null;
          /**
           * Ready Substate
           * @description Ready substate of the deployment
           * @default null
           */
          readySubstate: string | null;
          /**
           * Soft Deleted By Retention
           * @description Whether soft-deleted by retention policy
           * @default null
           */
          softDeletedByRetention: boolean | null;
          /**
           * Source
           * @description Source of the deployment, e.g., 'cli'
           * @default null
           */
          source: string | null;
          /**
           * State
           * @description Current state of the deployment
           * @default null
           */
          state: string | null;
          /**
           * Target
           * @description Deployment target environment
           * @default null
           */
          target: string | null;
          /**
           * Type
           * @description Type of the deployment, e.g., 'LAMBDAS'
           * @default null
           */
          type: string | null;
          /**
           * Uid
           * @description Deployment unique identifier
           */
          uid: string;
          /**
           * Undeleted
           * @description Undeletion timestamp
           * @default null
           */
          undeleted: number | null;
          /**
           * Url
           * @description URL of the deployment or null if incomplete
           * @default null
           */
          url: string | null;
      }[];
      /**
       * Pagination
       * @description Pagination cursors and count
       */
      pagination: {
          /**
           * Count
           * @description Number of items in this page
           */
          count: number;
          /**
           * Next
           * @description Cursor for the next page
           * @default null
           */
          next: number | null;
          /**
           * Prev
           * @description Cursor for the previous page
           * @default null
           */
          prev: number | null;
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
 * Type of VERCEL's VERCEL_LIST_AUTH_TOKENS tool input.
 */
type VERCEL_LIST_AUTH_TOKENS_INPUT = {
  /**
   * Team Id
   * @description Team ID to list tokens for. If omitted, lists tokens for the current user.
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_LIST_AUTH_TOKENS tool output.
 */
type VERCEL_LIST_AUTH_TOKENS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination information
       */
      pagination: {
          /**
           * Count
           * @description Number of items in the current page
           */
          count: number;
          /**
           * Next
           * @description Timestamp to request the next page (ms since epoch)
           * @default null
           */
          next: number | null;
          /**
           * Prev
           * @description Timestamp to request the previous page (ms since epoch)
           * @default null
           */
          prev: number | null;
      };
      /**
       * Tokens
       * @description List of authentication tokens
       */
      tokens: {
          /**
           * Active At
           * @description Last active timestamp of the token (ms since epoch)
           */
          activeAt: number;
          /**
           * Created At
           * @description Creation timestamp of the token (ms since epoch)
           */
          createdAt: number;
          /**
           * Expires At
           * @description Expiration timestamp of the token (ms since epoch)
           */
          expiresAt: number;
          /**
           * Id
           * @description Unique identifier of the token
           */
          id: string;
          /**
           * Name
           * @description Name of the token
           */
          name: string;
          /**
           * Origin
           * @description Origin of the token, e.g., 'github'
           */
          origin: string;
          /**
           * Scopes
           * @description List of scopes associated with the token
           */
          scopes: {
              /**
               * Created At
               * @description Creation timestamp of the scope (ms since epoch)
               */
              createdAt: number;
              /**
               * Expires At
               * @description Expiration timestamp of the scope (ms since epoch)
               */
              expiresAt: number;
              /**
               * Origin
               * @description Origin of the scope, e.g., 'saml'
               */
              origin: string;
              /**
               * TokenScopeSudo
               * @description Details of sudo access if granted for this scope
               * @default null
               */
              sudo: {
                  /**
                   * Expires At
                   * @description Expiration timestamp of the sudo access (ms since epoch)
                   */
                  expiresAt: number;
                  /**
                   * Origin
                   * @description Origin of the sudo access, e.g., 'totp'
                   */
                  origin: string;
              } | null;
              /**
               * Type
               * @description Type of the scope, e.g., 'user'
               */
              type: string;
          }[];
          /**
           * Type
           * @description Type of the token, e.g., 'oauth2-token'
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
 * Type of VERCEL's VERCEL_LIST_DEPLOYMENT_CHECKS tool input.
 */
type VERCEL_LIST_DEPLOYMENT_CHECKS_INPUT = {
  /**
   * Deployment Id
   * @description The ID of the deployment to retrieve checks for.
   */
  deploymentId?: string;
  /**
   * Slug
   * @description Team slug on whose behalf to perform the request.
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Team ID on whose behalf to perform the request.
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_LIST_DEPLOYMENT_CHECKS tool output.
 */
type VERCEL_LIST_DEPLOYMENT_CHECKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Checks
       * @description List of checks associated with the deployment.
       */
      checks: {
          /**
           * Blocking
           * @description Whether the check is blocking the deployment.
           */
          blocking: boolean;
          /**
           * Completed At
           * @description Timestamp when the check completed in ms.
           * @default null
           */
          completedAt: number | null;
          /**
           * Conclusion
           * @description Final result once the check is complete.
           * @default null
           * @enum {string|null}
           */
          conclusion: "canceled" | "failed" | "neutral" | "succeeded" | "skipped" | "stale" | null;
          /**
           * Created At
           * @description Timestamp when the check was created in ms.
           */
          createdAt: number;
          /**
           * Deployment Id
           * @description Deployment ID associated with this check.
           */
          deploymentId: string;
          /**
           * Details Url
           * @description URL to view details in the Vercel dashboard.
           * @default null
           */
          detailsUrl: string | null;
          /**
           * External Id
           * @description External reference ID for the check.
           * @default null
           */
          externalId: string | null;
          /**
           * Id
           * @description Unique identifier of the check.
           */
          id: string;
          /**
           * Integration Id
           * @description Integration ID that created the check.
           */
          integrationId: string;
          /**
           * Name
           * @description Name of the check.
           */
          name: string;
          /**
           * Output
           * @description Detailed output object containing metric results.
           * @default null
           */
          output: {
              /**
               * Metrics
               * @description Mapping of metric names (e.g., FCP, LCP) to their values.
               */
              metrics: {
                  [key: string]: {
                      /**
                       * Previousvalue
                       * @description Previous metric value.
                       */
                      previousValue: number;
                      /**
                       * Source
                       * @description Origin of this metric.
                       */
                      source: string;
                      /**
                       * Value
                       * @description Current metric value.
                       */
                      value: number;
                  };
              };
          } | null;
          /**
           * Path
           * @description Path of the page being checked.
           */
          path: string;
          /**
           * Rerequestable
           * @description Whether the check can be rerun by a user.
           */
          rerequestable: boolean;
          /**
           * Started At
           * @description Timestamp when the check started in ms.
           * @default null
           */
          startedAt: number | null;
          /**
           * Status
           * @description Current status of the check.
           * @enum {string}
           */
          status: "registered" | "running" | "completed";
          /**
           * Updated At
           * @description Timestamp when the check was last updated in ms.
           */
          updatedAt: number;
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
 * Type of VERCEL's VERCEL_LIST_EDGE_CONFIGS tool input.
 */
type VERCEL_LIST_EDGE_CONFIGS_INPUT = {
  /**
   * Slug
   * @description Optional Team slug to perform the request on behalf of. Only one of `teamId` or `slug` may be set.
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Optional Team ID to perform the request on behalf of. If omitted, the user's account is used.
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_LIST_EDGE_CONFIGS tool output.
 */
type VERCEL_LIST_EDGE_CONFIGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Configs
       * @description List of Edge Config objects
       */
      configs: {
          /**
           * Created At
           * @description Timestamp when created (ms since epoch)
           */
          createdAt: number;
          /**
           * Digest
           * @description Content digest of the Edge Config
           */
          digest: string;
          /**
           * Id
           * @description Unique identifier of the Edge Config
           */
          id: string;
          /**
           * Item Count
           * @description Number of entries within this config
           */
          itemCount: number;
          /**
           * Owner Id
           * @description Identifier of the owner account or team
           */
          ownerId: string;
          /**
           * Purpose
           * @description Purpose metadata for the Edge Config
           */
          purpose: {
              /**
               * Project Id
               * @description Identifier of the associated project
               */
              projectId: string;
              /**
               * Type
               * @description Type of purpose, e.g., 'flags'
               */
              type: string;
          };
          /**
           * Schema
           * @description JSON schema defining the Edge Config
           */
          schema: {
              [key: string]: unknown;
          };
          /**
           * Size In Bytes
           * @description Size of the Edge Config in bytes
           */
          sizeInBytes: number;
          /**
           * Slug
           * @description Slug of the Edge Config
           */
          slug: string;
          /**
           * Transfer
           * @description Transfer details for an Edge Config.
           * @default null
           */
          transfer: {
              /**
               * Done At
               * @description Timestamp when the transfer completed (ms since epoch)
               * @default null
               */
              doneAt: number | null;
              /**
               * From Account Id
               * @description Identifier of the account from which the Edge Config was transferred
               */
              fromAccountId: string;
              /**
               * Started At
               * @description Timestamp when the transfer started (ms since epoch)
               */
              startedAt: number;
          } | null;
          /**
           * Updated At
           * @description Timestamp when last updated (ms since epoch)
           */
          updatedAt: number;
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
 * Type of VERCEL's VERCEL_LIST_EDGE_CONFIG_ITEMS tool input.
 */
type VERCEL_LIST_EDGE_CONFIG_ITEMS_INPUT = {
  /**
   * Edge Config Id
   * @description Unique identifier of the Edge Config to retrieve items from
   */
  edgeConfigId?: string;
  /**
   * Slug
   * @description Optional Team slug to perform the request on behalf of
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Optional Team ID to perform the request on behalf of
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_LIST_EDGE_CONFIG_ITEMS tool output.
 */
type VERCEL_LIST_EDGE_CONFIG_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of Edge Config items
       */
      items: {
          /**
           * Created At
           * @description Timestamp when the item was created (ms since epoch)
           */
          createdAt: number;
          /**
           * Description
           * @description Description of the Edge Config item
           * @default null
           */
          description: string | null;
          /**
           * Edge Config Id
           * @description Identifier of the Edge Config
           */
          edgeConfigId: string;
          /**
           * Key
           * @description Key of the Edge Config item
           */
          key: string;
          /**
           * Updated At
           * @description Timestamp when the item was last updated (ms since epoch)
           */
          updatedAt: number;
          /**
           * Value
           * @description Value of the Edge Config item
           */
          value: string | null;
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
 * Type of VERCEL's VERCEL_LIST_EDGE_CONFIG_TOKENS tool input.
 */
type VERCEL_LIST_EDGE_CONFIG_TOKENS_INPUT = {
  /**
   * Edge Config Id
   * @description The unique identifier of the Edge Config to list tokens for.
   */
  edgeConfigId?: string;
  /**
   * Slug
   * @description Team slug to perform the request on behalf of.
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Team identifier to perform the request on behalf of.
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_LIST_EDGE_CONFIG_TOKENS tool output.
 */
type VERCEL_LIST_EDGE_CONFIG_TOKENS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tokens
       * @description List of tokens for the specified Edge Config.
       */
      tokens: {
          /**
           * Created At
           * @description Timestamp (in seconds since epoch) when the token was created.
           */
          createdAt: number;
          /**
           * Edge Config Id
           * @description The unique identifier of the associated Edge Config.
           */
          edgeConfigId: string;
          /**
           * Id
           * @description The unique identifier of the token.
           */
          id: string;
          /**
           * Label
           * @description The label associated with the token.
           */
          label: string;
          /**
           * Token
           * @description The token value.
           */
          token: string;
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
 * Type of VERCEL's VERCEL_LIST_ENV_VARIABLES tool input.
 */
type VERCEL_LIST_ENV_VARIABLES_INPUT = {
  /**
   * Decrypt
   * @description Whether to return decrypted values.
   * @default false
   */
  decrypt: boolean;
  /**
   * Git Branch
   * @description Filter variables for a specific git branch.
   * @default null
   */
  gitBranch: string | null;
  /**
   * Limit
   * @description Maximum number of variables to return (1-100).
   * @default 20
   */
  limit: number;
  /**
   * Project Id
   * @description Unique identifier of the project.
   */
  projectId?: string;
  /**
   * Until
   * @description Pagination cursor. Use the `pagination.next` timestamp from a prior response.
   * @default null
   */
  until: number | null;
};

/**
 * Type of VERCEL's VERCEL_LIST_ENV_VARIABLES tool output.
 */
type VERCEL_LIST_ENV_VARIABLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Envs
       * @description List of environment variable records.
       */
      envs: {
          /**
           * Created At
           * @description Timestamp when the variable was created.
           */
          createdAt: number;
          /**
           * Created By
           * @description User ID who created the variable.
           */
          createdBy: string;
          /**
           * Git Branch
           * @description Git branch this variable applies to, if any.
           * @default null
           */
          gitBranch: string | null;
          /**
           * Id
           * @description Unique identifier of the environment variable.
           */
          id: string;
          /**
           * Key
           * @description Name of the environment variable.
           */
          key: string;
          /**
           * Target
           * @description List of contexts where the variable is available (e.g., 'production', 'preview').
           */
          target: string[];
          /**
           * Updated At
           * @description Timestamp when the variable was last updated.
           */
          updatedAt: number;
          /**
           * Value
           * @description Value of the environment variable (if decrypted).
           */
          value: string | null;
      }[];
      /**
       * Pagination
       * @description Pagination metadata.
       */
      pagination: {
          /**
           * Count
           * @description Number of items in the current page.
           */
          count: number;
          /**
           * Next
           * @description Cursor for the next page (timestamp). Null if no further pages.
           * @default null
           */
          next: number | null;
          /**
           * Prev
           * @description Cursor for the previous page (timestamp). Can be null.
           * @default null
           */
          prev: number | null;
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
 * Type of VERCEL's VERCEL_LIST_TEAMS tool input.
 */
type VERCEL_LIST_TEAMS_INPUT = {
  /**
   * Limit
   * @description Maximum number of teams to return (max 100)
   * @default null
   */
  limit: number | null;
  /**
   * Since
   * @description Timestamp in milliseconds; include teams created since this time
   * @default null
   */
  since: number | null;
  /**
   * Until
   * @description Timestamp in milliseconds; include teams created until this time
   * @default null
   */
  until: number | null;
};

/**
 * Type of VERCEL's VERCEL_LIST_TEAMS tool output.
 */
type VERCEL_LIST_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pagination
       * @description Pagination cursor information
       */
      pagination: {
          /**
           * Count
           * @description Number of items in the current page
           */
          count: number;
          /**
           * Next
           * @description Timestamp for the next page cursor
           * @default null
           */
          next: number | null;
          /**
           * Prev
           * @description Timestamp for the previous page cursor
           * @default null
           */
          prev: number | null;
      };
      /**
       * Teams
       * @description List of teams accessible to the user
       */
      teams: {
          /**
           * Id
           * @description Unique identifier for the team
           */
          id: string;
          /**
           * Slug
           * @description URL-friendly identifier for the team
           */
          slug: string;
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
 * Type of VERCEL's VERCEL_UPDATE_EDGE_CONFIG tool input.
 */
type VERCEL_UPDATE_EDGE_CONFIG_INPUT = {
  /**
   * Edge Config Id
   * @description Unique identifier of the Edge Config to update
   */
  edgeConfigId?: string;
  /**
   * Request Body
   * @description Body object containing fields to update
   */
  requestBody?: {
      /**
       * Slug
       * @description New slug to assign to the Edge Config
       */
      slug: string;
  };
  /**
   * Slug
   * @description Optional Team slug to perform the request on behalf of
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Optional Team ID to perform the request on behalf of
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_UPDATE_EDGE_CONFIG tool output.
 */
type VERCEL_UPDATE_EDGE_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when created (ms since epoch)
       */
      createdAt: number;
      /**
       * Digest
       * @description Digest of the Edge Config
       */
      digest: string;
      /**
       * Id
       * @description Unique identifier of the Edge Config
       */
      id: string;
      /**
       * Item Count
       * @description Number of items in the Edge Config
       */
      itemCount: number;
      /**
       * Owner Id
       * @description Identifier of the owner of the Edge Config
       */
      ownerId: string;
      /**
       * Purpose
       * @description Purpose metadata of the Edge Config
       */
      purpose: {
          /**
           * Project Id
           * @description Identifier of the associated project
           */
          projectId: string;
          /**
           * Type
           * @description Type of purpose, e.g., 'flags'
           */
          type: string;
      };
      /**
       * Schema
       * @description Configuration schema object of the Edge Config
       */
      schema: {
          [key: string]: unknown;
      };
      /**
       * Size In Bytes
       * @description Size of the Edge Config in bytes
       */
      sizeInBytes: number;
      /**
       * Slug
       * @description Current slug of the Edge Config
       */
      slug: string;
      /**
       * Transfer
       * @description Transfer details for an Edge Config.
       * @default null
       */
      transfer: {
          /**
           * Done At
           * @description Timestamp when the transfer completed (ms since epoch)
           * @default null
           */
          doneAt: number | null;
          /**
           * From Account Id
           * @description Identifier of the account from which the Edge Config was transferred
           */
          fromAccountId: string;
          /**
           * Started At
           * @description Timestamp when the transfer started (ms since epoch)
           */
          startedAt: number;
      } | null;
      /**
       * Updated At
       * @description Timestamp when last updated (ms since epoch)
       */
      updatedAt: number;
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
 * Type of VERCEL's VERCEL_UPDATE_EDGE_CONFIG_ITEMS tool input.
 */
type VERCEL_UPDATE_EDGE_CONFIG_ITEMS_INPUT = {
  /**
   * Dry Run
   * @description If true, validates the request without applying changes.
   * @default null
   */
  dryRun: boolean | null;
  /**
   * Edge Config Id
   * @description The unique identifier of the Edge Config to update.
   */
  edgeConfigId?: string;
  /**
   * Items
   * @description List of operations to perform on Edge Config items.
   */
  items?: {
      /**
       * Key
       * @description The key of the item to modify.
       */
      key: string;
      /**
       * Operation
       * @description The operation to perform on the item.
       * @enum {string}
       */
      operation: "create" | "update" | "delete" | "upsert";
      /**
       * Value
       * @description The value of the item. Required for create, update, and upsert operations.
       * @default null
       */
      value: string | null;
  }[];
  /**
   * Slug
   * @description Team slug to perform the request on behalf of.
   * @default null
   */
  slug: string | null;
  /**
   * Team Id
   * @description Team ID to perform the request on behalf of.
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_UPDATE_EDGE_CONFIG_ITEMS tool output.
 */
type VERCEL_UPDATE_EDGE_CONFIG_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description Indicates the status of the update operation.
       */
      status: string;
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
 * Type of VERCEL's VERCEL_UPDATE_PROJECT tool input.
 */
type VERCEL_UPDATE_PROJECT_INPUT = {
  /**
   * Auto Assign Custom Domains Updated By
   * @description Auto-assign custom domains updated by
   * @default null
   */
  autoAssignCustomDomainsUpdatedBy: string | null;
  /**
   * Auto Expose System Envs
   * @description Automatically expose system environment variables
   * @default null
   */
  autoExposeSystemEnvs: boolean | null;
  /**
   * Command For Ignoring Build Step
   * @description Command for ignoring the build step
   * @default null
   */
  commandForIgnoringBuildStep: string | null;
  /**
   * Customer Support Code Visibility
   * @description Allow customer support to view git source for a deployment
   * @default null
   */
  customerSupportCodeVisibility: boolean | null;
  /**
   * Enable Affected Projects Deployments
   * @description Skip deployments when no changes detected in root dir and its dependencies
   * @default null
   */
  enableAffectedProjectsDeployments: boolean | null;
  /**
   * Git Fork Protection
   * @description Require team member approval for PRs from forks before deployment
   * @default null
   */
  gitForkProtection: boolean | null;
  /**
   * Id Or Name
   * @description Project ID or name
   */
  idOrName?: string;
  /**
   * OidcTokenConfig
   * @description OpenID Connect JSON Web Token generation settings
   * @default null
   */
  oidcTokenConfig: {
      /**
       * Enabled
       * @description Whether to generate OpenID Connect JSON Web Tokens
       */
      enabled: boolean;
      /**
       * Issuer Mode
       * @description Issuer mode for OIDC tokens
       * @default null
       * @enum {string|null}
       */
      issuerMode: "global" | "team" | null;
  } | null;
  /**
   * Output Directory
   * @description The output directory of the project
   * @default null
   */
  outputDirectory: string | null;
  /**
   * PasswordProtection
   * @description Password-protection configuration
   * @default null
   */
  passwordProtection: {
      /**
       * Deployment Type
       * @description Which deployments password protection applies to: `preview`, `prod_deployment_urls_and_all_previews`, or `all`.
       * @enum {string}
       */
      deploymentType: "preview" | "prod_deployment_urls_and_all_previews" | "all";
      /**
       * Password
       * @description The password used to protect project deployments
       * @default null
       */
      password: string | null;
  } | null;
  /**
   * Public Source
   * @description Make deployment source code and logs publicly visible
   * @default null
   */
  publicSource: boolean | null;
  /**
   * Root Directory
   * @description Directory or relative path to your project source. Defaults to the project root if `null`.
   * @default null
   */
  rootDirectory: string | null;
  /**
   * Serverless Function Region
   * @description Region to deploy Serverless Functions
   * @default null
   */
  serverlessFunctionRegion: string | null;
  /**
   * Slug
   * @description Team slug to act on behalf of
   * @default null
   */
  slug: string | null;
  /**
   * Source Files Outside Root Directory
   * @description Whether there are source files outside the root directory
   * @default null
   */
  sourceFilesOutsideRootDirectory: boolean | null;
  /**
   * SsoProtection
   * @description SSO protection configuration
   * @default null
   */
  ssoProtection: {
      /**
       * Deployment Type
       * @description Which deployments SSO Protection applies to: `preview`, `prod_deployment_urls_and_all_previews`, or `all`.
       * @enum {string}
       */
      deploymentType: "preview" | "prod_deployment_urls_and_all_previews" | "all";
  } | null;
  /**
   * Team Id
   * @description Team identifier to act on behalf of
   * @default null
   */
  teamId: string | null;
};

/**
 * Type of VERCEL's VERCEL_UPDATE_PROJECT tool output.
 */
type VERCEL_UPDATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auto Assign Custom Domains Updated By
       * @description Auto-assigned custom domains updated by
       * @default null
       */
      autoAssignCustomDomainsUpdatedBy: string | null;
      /**
       * Auto Expose System Envs
       * @description Whether system environment variables are auto-exposed
       * @default null
       */
      autoExposeSystemEnvs: boolean | null;
      /**
       * Created At
       * @description Timestamp when project was created
       */
      createdAt: number;
      /**
       * Customer Support Code Visibility
       * @description Whether support can view git source for deployments
       * @default null
       */
      customerSupportCodeVisibility: boolean | null;
      /**
       * Enable Affected Projects Deployments
       * @description Whether deployments skip when no changes are detected
       * @default null
       */
      enableAffectedProjectsDeployments: boolean | null;
      /**
       * Framework
       * @description Framework used in the project
       * @default null
       */
      framework: string | null;
      /**
       * Git Fork Protection
       * @description Whether PRs from forks require approval before deployment
       */
      gitForkProtection: boolean;
      /**
       * Id
       * @description Unique identifier of the project
       */
      id: string;
      /**
       * Name
       * @description Name of the project
       */
      name: string;
      /**
       * OidcTokenConfigResponse
       * @description OIDC token configuration
       * @default null
       */
      oidcTokenConfig: {
          /**
           * Enabled
           * @description Whether OIDC token generation is enabled
           */
          enabled: boolean;
          /**
           * Issuer Mode
           * @description Issuer mode for OIDC tokens
           * @default null
           * @enum {string|null}
           */
          issuerMode: "global" | "team" | null;
      } | null;
      /**
       * Output Directory
       * @description Output directory for project
       * @default null
       */
      outputDirectory: string | null;
      /**
       * PasswordProtectionResponse
       * @description Password protection settings
       * @default null
       */
      passwordProtection: {
          /**
           * Deployment Type
           * @description Deployment type for password protection
           * @enum {string}
           */
          deploymentType: "preview" | "prod_deployment_urls_and_all_previews" | "all";
          /**
           * Password
           * @description Password for protecting project deployments
           * @default null
           */
          password: string | null;
      } | null;
      /**
       * Public Source
       * @description Whether deployment source/code is public
       * @default null
       */
      publicSource: boolean | null;
      /**
       * Root Directory
       * @description Root directory of the project
       * @default null
       */
      rootDirectory: string | null;
      /**
       * Serverless Function Region
       * @description Region for Serverless Functions
       * @default null
       */
      serverlessFunctionRegion: string | null;
      /**
       * Source Files Outside Root Directory
       * @description Whether source files are outside root directory
       */
      sourceFilesOutsideRootDirectory: boolean;
      /**
       * SsoProtectionResponse
       * @description SSO protection settings
       * @default null
       */
      ssoProtection: {
          /**
           * Deployment Type
           * @description Deployment type for SSO protection
           * @enum {string}
           */
          deploymentType: "preview" | "prod_deployment_urls_and_all_previews" | "all";
      } | null;
      /**
       * Updated At
       * @description Timestamp when project was last updated
       */
      updatedAt: number;
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
 * Type map of all available tool input types for toolkit "VERCEL".
 */
export type VERCEL_TOOL_INPUTS = {
  ADD_ENVIRONMENT_VARIABLE: VERCEL_ADD_ENVIRONMENT_VARIABLE_INPUT
  CHECK_CACHE_ARTIFACT_EXISTS: VERCEL_CHECK_CACHE_ARTIFACT_EXISTS_INPUT
  CHECK_DOMAIN_AVAILABILITY: VERCEL_CHECK_DOMAIN_AVAILABILITY_INPUT
  CHECK_DOMAIN_PRICE: VERCEL_CHECK_DOMAIN_PRICE_INPUT
  CREATE_AUTH_TOKEN: VERCEL_CREATE_AUTH_TOKEN_INPUT
  CREATE_EDGE_CONFIG: VERCEL_CREATE_EDGE_CONFIG_INPUT
  CREATE_EDGE_CONFIG_TOKEN: VERCEL_CREATE_EDGE_CONFIG_TOKEN_INPUT
  CREATE_NEW_DEPLOYMENT: VERCEL_CREATE_NEW_DEPLOYMENT_INPUT
  DELETE_AUTH_TOKEN: VERCEL_DELETE_AUTH_TOKEN_INPUT
  DELETE_DEPLOYMENT: VERCEL_DELETE_DEPLOYMENT_INPUT
  DELETE_EDGE_CONFIG_TOKENS: VERCEL_DELETE_EDGE_CONFIG_TOKENS_INPUT
  DELETE_ENVIRONMENT_VARIABLE: VERCEL_DELETE_ENVIRONMENT_VARIABLE_INPUT
  DELETE_PROJECT: VERCEL_DELETE_PROJECT_INPUT
  DEPLOY_EDGE_FUNCTION: VERCEL_DEPLOY_EDGE_FUNCTION_INPUT
  GET_AUTH_TOKEN_METADATA: VERCEL_GET_AUTH_TOKEN_METADATA_INPUT
  GET_DEPLOYMENT_DETAILS: VERCEL_GET_DEPLOYMENT_DETAILS_INPUT
  GET_DEPLOYMENT_EVENTS: VERCEL_GET_DEPLOYMENT_EVENTS_INPUT
  GET_DEPLOYMENT_LOGS: VERCEL_GET_DEPLOYMENT_LOGS_INPUT
  GET_DOMAIN_TRANSFER_INFO: VERCEL_GET_DOMAIN_TRANSFER_INFO_INPUT
  GET_EDGE_CONFIG: VERCEL_GET_EDGE_CONFIG_INPUT
  GET_EDGE_CONFIG_ITEM: VERCEL_GET_EDGE_CONFIG_ITEM_INPUT
  GET_EDGE_CONFIG_TOKEN: VERCEL_GET_EDGE_CONFIG_TOKEN_INPUT
  GET_PROJECT: VERCEL_GET_PROJECT_INPUT
  LIST_ALIASES: VERCEL_LIST_ALIASES_INPUT
  LIST_ALL_DEPLOYMENTS: VERCEL_LIST_ALL_DEPLOYMENTS_INPUT
  LIST_AUTH_TOKENS: VERCEL_LIST_AUTH_TOKENS_INPUT
  LIST_DEPLOYMENT_CHECKS: VERCEL_LIST_DEPLOYMENT_CHECKS_INPUT
  LIST_EDGE_CONFIGS: VERCEL_LIST_EDGE_CONFIGS_INPUT
  LIST_EDGE_CONFIG_ITEMS: VERCEL_LIST_EDGE_CONFIG_ITEMS_INPUT
  LIST_EDGE_CONFIG_TOKENS: VERCEL_LIST_EDGE_CONFIG_TOKENS_INPUT
  LIST_ENV_VARIABLES: VERCEL_LIST_ENV_VARIABLES_INPUT
  LIST_TEAMS: VERCEL_LIST_TEAMS_INPUT
  UPDATE_EDGE_CONFIG: VERCEL_UPDATE_EDGE_CONFIG_INPUT
  UPDATE_EDGE_CONFIG_ITEMS: VERCEL_UPDATE_EDGE_CONFIG_ITEMS_INPUT
  UPDATE_PROJECT: VERCEL_UPDATE_PROJECT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "VERCEL".
 */
export type VERCEL_TOOL_OUTPUTS = {
  ADD_ENVIRONMENT_VARIABLE: VERCEL_ADD_ENVIRONMENT_VARIABLE_OUTPUT
  CHECK_CACHE_ARTIFACT_EXISTS: VERCEL_CHECK_CACHE_ARTIFACT_EXISTS_OUTPUT
  CHECK_DOMAIN_AVAILABILITY: VERCEL_CHECK_DOMAIN_AVAILABILITY_OUTPUT
  CHECK_DOMAIN_PRICE: VERCEL_CHECK_DOMAIN_PRICE_OUTPUT
  CREATE_AUTH_TOKEN: VERCEL_CREATE_AUTH_TOKEN_OUTPUT
  CREATE_EDGE_CONFIG: VERCEL_CREATE_EDGE_CONFIG_OUTPUT
  CREATE_EDGE_CONFIG_TOKEN: VERCEL_CREATE_EDGE_CONFIG_TOKEN_OUTPUT
  CREATE_NEW_DEPLOYMENT: VERCEL_CREATE_NEW_DEPLOYMENT_OUTPUT
  DELETE_AUTH_TOKEN: VERCEL_DELETE_AUTH_TOKEN_OUTPUT
  DELETE_DEPLOYMENT: VERCEL_DELETE_DEPLOYMENT_OUTPUT
  DELETE_EDGE_CONFIG_TOKENS: VERCEL_DELETE_EDGE_CONFIG_TOKENS_OUTPUT
  DELETE_ENVIRONMENT_VARIABLE: VERCEL_DELETE_ENVIRONMENT_VARIABLE_OUTPUT
  DELETE_PROJECT: VERCEL_DELETE_PROJECT_OUTPUT
  DEPLOY_EDGE_FUNCTION: VERCEL_DEPLOY_EDGE_FUNCTION_OUTPUT
  GET_AUTH_TOKEN_METADATA: VERCEL_GET_AUTH_TOKEN_METADATA_OUTPUT
  GET_DEPLOYMENT_DETAILS: VERCEL_GET_DEPLOYMENT_DETAILS_OUTPUT
  GET_DEPLOYMENT_EVENTS: VERCEL_GET_DEPLOYMENT_EVENTS_OUTPUT
  GET_DEPLOYMENT_LOGS: VERCEL_GET_DEPLOYMENT_LOGS_OUTPUT
  GET_DOMAIN_TRANSFER_INFO: VERCEL_GET_DOMAIN_TRANSFER_INFO_OUTPUT
  GET_EDGE_CONFIG: VERCEL_GET_EDGE_CONFIG_OUTPUT
  GET_EDGE_CONFIG_ITEM: VERCEL_GET_EDGE_CONFIG_ITEM_OUTPUT
  GET_EDGE_CONFIG_TOKEN: VERCEL_GET_EDGE_CONFIG_TOKEN_OUTPUT
  GET_PROJECT: VERCEL_GET_PROJECT_OUTPUT
  LIST_ALIASES: VERCEL_LIST_ALIASES_OUTPUT
  LIST_ALL_DEPLOYMENTS: VERCEL_LIST_ALL_DEPLOYMENTS_OUTPUT
  LIST_AUTH_TOKENS: VERCEL_LIST_AUTH_TOKENS_OUTPUT
  LIST_DEPLOYMENT_CHECKS: VERCEL_LIST_DEPLOYMENT_CHECKS_OUTPUT
  LIST_EDGE_CONFIGS: VERCEL_LIST_EDGE_CONFIGS_OUTPUT
  LIST_EDGE_CONFIG_ITEMS: VERCEL_LIST_EDGE_CONFIG_ITEMS_OUTPUT
  LIST_EDGE_CONFIG_TOKENS: VERCEL_LIST_EDGE_CONFIG_TOKENS_OUTPUT
  LIST_ENV_VARIABLES: VERCEL_LIST_ENV_VARIABLES_OUTPUT
  LIST_TEAMS: VERCEL_LIST_TEAMS_OUTPUT
  UPDATE_EDGE_CONFIG: VERCEL_UPDATE_EDGE_CONFIG_OUTPUT
  UPDATE_EDGE_CONFIG_ITEMS: VERCEL_UPDATE_EDGE_CONFIG_ITEMS_OUTPUT
  UPDATE_PROJECT: VERCEL_UPDATE_PROJECT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's VERCEL toolkit.
 */
export const VERCEL = {
  slug: "vercel",
  tools: {
    /**
     * Tool to add an environment variable to a vercel project. use after confirming the project exists and you need to configure secrets or configuration values across environments before deployment. example: "add api key=secret to production".
     */
    ADD_ENVIRONMENT_VARIABLE: "VERCEL_ADD_ENVIRONMENT_VARIABLE",
    /**
     * Tool to check if a cache artifact exists by its hash. use when verifying whether a cache artifact is already stored before upload.
     */
    CHECK_CACHE_ARTIFACT_EXISTS: "VERCEL_CHECK_CACHE_ARTIFACT_EXISTS",
    /**
     * Tool to check if a domain is available for registration. use when you need to verify domain availability before purchase.
     */
    CHECK_DOMAIN_AVAILABILITY: "VERCEL_CHECK_DOMAIN_AVAILABILITY",
    /**
     * Tool to check the price for a domain before purchase. use when evaluating cost and availability prior to domain registration.
     */
    CHECK_DOMAIN_PRICE: "VERCEL_CHECK_DOMAIN_PRICE",
    /**
     * Tool to create a new authentication token. use when you need to programmatically generate a new token after validating permissions. example: "create auth token named my-token"
     */
    CREATE_AUTH_TOKEN: "VERCEL_CREATE_AUTH_TOKEN",
    /**
     * Tool to create a new edge config for a vercel project. use when you need to define edge caching settings before deploying your project across a specified repository.
     */
    CREATE_EDGE_CONFIG: "VERCEL_CREATE_EDGE_CONFIG",
    /**
     * Tool to create a new token for a specific edge config. use when you need a read-only access token after provisioning your edge config.
     */
    CREATE_EDGE_CONFIG_TOKEN: "VERCEL_CREATE_EDGE_CONFIG_TOKEN",
    /**
     * Tool to create a new deployment. use when you need to deploy files or a git commit to a vercel project.
     */
    CREATE_NEW_DEPLOYMENT: "VERCEL_CREATE_NEW_DEPLOYMENT",
    /**
     * Tool to delete an authentication token. use when you need to revoke a token programmatically after confirming its validity. example: "delete auth token with id abc123"
     */
    DELETE_AUTH_TOKEN: "VERCEL_DELETE_AUTH_TOKEN",
    /**
     * Tool to delete a specific deployment by its unique id. use after confirming the deployment identifier to clean up unused or failed deployments.
     */
    DELETE_DEPLOYMENT: "VERCEL_DELETE_DEPLOYMENT",
    /**
     * Tool to delete tokens associated with a specific edge config. use when you need to revoke one or more access tokens from an existing edge config by its id.
     */
    DELETE_EDGE_CONFIG_TOKENS: "VERCEL_DELETE_EDGE_CONFIG_TOKENS",
    /**
     * Tool to delete a specific environment variable from a project. use after verifying the correct variable id to remove it.
     */
    DELETE_ENVIRONMENT_VARIABLE: "VERCEL_DELETE_ENVIRONMENT_VARIABLE",
    /**
     * Tool to delete a specific project by its id or name. use after confirming the correct project id or name to permanently remove it.
     */
    DELETE_PROJECT: "VERCEL_DELETE_PROJECT",
    /**
     * Deploy edge functions to vercel. use when you need to deploy serverless functions that run on the edge runtime with fast cold starts and global distribution.
     */
    DEPLOY_EDGE_FUNCTION: "VERCEL_DEPLOY_EDGE_FUNCTION",
    /**
     * Tool to retrieve metadata for an authentication token. use when you need to inspect details of a specific token for auditing or debugging.
     */
    GET_AUTH_TOKEN_METADATA: "VERCEL_GET_AUTH_TOKEN_METADATA",
    /**
     * Tool to retrieve detailed information about a specific deployment. use after triggering a deployment and you need to inspect its status and configuration. example: "get details for deployment dpl 123abc".
     */
    GET_DEPLOYMENT_DETAILS: "VERCEL_GET_DEPLOYMENT_DETAILS",
    /**
     * Tool to retrieve events related to a specific deployment. use when monitoring or debugging deployment history or streaming real-time events. example: "get events for deployment dpl xxx since 1540095775941."
     */
    GET_DEPLOYMENT_EVENTS: "VERCEL_GET_DEPLOYMENT_EVENTS",
    /**
     * Tool to retrieve logs for a specific vercel deployment. use when monitoring deployment execution, debugging issues, or analyzing deployment performance. example: "get logs for deployment dpl xxx since 1540095775941."
     */
    GET_DEPLOYMENT_LOGS: "VERCEL_GET_DEPLOYMENT_LOGS",
    /**
     * Tool to get information required to transfer a domain to vercel. use when you need to check transfer availability or current status before initiating a transfer.
     */
    GET_DOMAIN_TRANSFER_INFO: "VERCEL_GET_DOMAIN_TRANSFER_INFO",
    /**
     * Tool to retrieve details of a specific edge config. use when you need to inspect edge config metadata by id before updating or deleting.
     */
    GET_EDGE_CONFIG: "VERCEL_GET_EDGE_CONFIG",
    /**
     * Tool to retrieve a specific item within an edge config. use after obtaining the edge config id and when you need to inspect or validate a particular configuration item by its key.
     */
    GET_EDGE_CONFIG_ITEM: "VERCEL_GET_EDGE_CONFIG_ITEM",
    /**
     * Tool to retrieve details of a specific token associated with an edge config. use when you need metadata for an existing edge config token.
     */
    GET_EDGE_CONFIG_TOKEN: "VERCEL_GET_EDGE_CONFIG_TOKEN",
    /**
     * Tool to retrieve information about a vercel project by id or name. use when you need project metadata after obtaining its identifier.
     */
    GET_PROJECT: "VERCEL_GET_PROJECT",
    /**
     * Tool to list all aliases for the authenticated user or team. use when you need to retrieve aliases filtered by various criteria.
     */
    LIST_ALIASES: "VERCEL_LIST_ALIASES",
    /**
     * Tool to list all deployments. use after authenticating to retrieve deployments under your user or team context. example: "list deployments for project qmx...".
     */
    LIST_ALL_DEPLOYMENTS: "VERCEL_LIST_ALL_DEPLOYMENTS",
    /**
     * Tool to list authentication tokens. use when you need to retrieve all tokens for the current user or an optional team.
     */
    LIST_AUTH_TOKENS: "VERCEL_LIST_AUTH_TOKENS",
    /**
     * Tool to retrieve a list of checks for a specific deployment. use after a deployment to inspect check statuses and results.
     */
    LIST_DEPLOYMENT_CHECKS: "VERCEL_LIST_DEPLOYMENT_CHECKS",
    /**
     * Tool to list all edge configs. use when you need to enumerate all edge config definitions for your account or team.
     */
    LIST_EDGE_CONFIGS: "VERCEL_LIST_EDGE_CONFIGS",
    /**
     * Tool to retrieve a list of items within a specific edge config. use when you need to inspect or manage all key–value items after creating an edge config.
     */
    LIST_EDGE_CONFIG_ITEMS: "VERCEL_LIST_EDGE_CONFIG_ITEMS",
    /**
     * Tool to retrieve a list of tokens for a specific edge config. use after obtaining an edge config's id to list its tokens.
     */
    LIST_EDGE_CONFIG_TOKENS: "VERCEL_LIST_EDGE_CONFIG_TOKENS",
    /**
     * Tool to list environment variables for a specific project. use when you need to inspect or page through the environment settings before deployment.
     */
    LIST_ENV_VARIABLES: "VERCEL_LIST_ENV_VARIABLES",
    /**
     * Tool to list all teams accessible to the authenticated user. use after authentication to retrieve their ids and slugs.
     */
    LIST_TEAMS: "VERCEL_LIST_TEAMS",
    /**
     * Tool to update an existing edge config. use when you need to rename the slug of an edge config for reorganization or migration purposes. only the slug field may be updated; ensure you confirm the new slug before using.
     */
    UPDATE_EDGE_CONFIG: "VERCEL_UPDATE_EDGE_CONFIG",
    /**
     * Tool to update items within a specific edge config. use when you need to batch modify, add, or remove key-value pairs in an existing edge config.
     */
    UPDATE_EDGE_CONFIG_ITEMS: "VERCEL_UPDATE_EDGE_CONFIG_ITEMS",
    /**
     * Tool to update an existing project. use when you need to modify a vercel project’s configuration before deployment. use after confirming the project id or name.
     */
    UPDATE_PROJECT: "VERCEL_UPDATE_PROJECT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "VERCEL".
 */
export type VERCEL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "VERCEL".
 */
export type VERCEL_TRIGGER_EVENTS = {}
