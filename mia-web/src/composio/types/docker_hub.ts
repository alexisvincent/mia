// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DOCKER_HUB's DOCKER_HUB_ADD_ORG_MEMBER tool input.
 */
type DOCKER_HUB_ADD_ORG_MEMBER_INPUT = {
  /**
   * Invitee Username
   * @description Username of the user to invite
   */
  invitee_username?: string;
  /**
   * Organization Name
   * @description Name of the Docker Hub organization to invite a user to
   */
  organization_name?: string;
  /**
   * Role
   * @description Role assigned to the new member; defaults to 'member'
   * @default member
   * @enum {string}
   */
  role: "member" | "admin";
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_ADD_ORG_MEMBER tool output.
 */
type DOCKER_HUB_ADD_ORG_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the invitation was created
       * @default null
       */
      created_at: string | null;
      /**
       * Id
       * @description Unique ID of the invitation
       * @default null
       */
      id: number | null;
      /**
       * Invitee
       * @description Model for invited user information
       * @default null
       */
      invitee: ({
          /**
           * Id
           * @description ID of the invited user
           * @default null
           */
          id: number | null;
          /**
           * Username
           * @description Username of the invited user
           * @default null
           */
          username: string | null;
      } & {
          [key: string]: unknown;
      }) | null;
      /**
       * OrgInfo
       * @description Model for organization information
       * @default null
       */
      org: {
          /**
           * Is Organization User
           * @description True if it's an organization user
           * @default null
           */
          is_organization_user: boolean | null;
          /**
           * Location
           * @description Organization location
           * @default null
           */
          location: string | null;
          /**
           * Name
           * @description Organization name
           * @default null
           */
          name: string | null;
          /**
           * Namespace
           * @description Organization namespace
           * @default null
           */
          namespace: string | null;
      } | null;
      /**
       * Role
       * @description Role assigned to the invited user
       * @default null
       */
      role: string | null;
      /**
       * State
       * @description Current state of the invitation
       * @default null
       */
      state: string | null;
  } & {
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
 * Type of DOCKER_HUB's DOCKER_HUB_CREATE_ORGANIZATION tool input.
 */
type DOCKER_HUB_CREATE_ORGANIZATION_INPUT = {
  /**
   * Description
   * @description Short description of the organization
   * @default null
   */
  description: string | null;
  /**
   * Full Description
   * @description Long description or README for the organization
   * @default null
   */
  full_description: string | null;
  /**
   * Location
   * @description Location of the organization (e.g., city or address)
   * @default null
   */
  location: string | null;
  /**
   * Name
   * @description Unique slug for the organization. Lowercase letters, numbers, '.', '_' or '-' allowed; must be at least 2 characters long.
   */
  name?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_CREATE_ORGANIZATION tool output.
 */
type DOCKER_HUB_CREATE_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description URL to the organization's avatar image
       * @default null
       */
      avatar_url: string | null;
      /**
       * Description
       * @description Short description of the organization
       * @default null
       */
      description: string | null;
      /**
       * Documentation Url
       * @description URL to API documentation for this namespace
       * @default null
       */
      documentation_url: string | null;
      /**
       * Full Description
       * @description Long description of the organization
       * @default null
       */
      full_description: string | null;
      /**
       * Has Starred Repos
       * @description Whether the authenticated user has starred repos in this namespace
       */
      has_starred_repos: boolean;
      /**
       * Is Migrated
       * @description Whether the namespace has been migrated
       */
      is_migrated: boolean;
      /**
       * Is Private
       * @description Whether the organization namespace is private
       */
      is_private: boolean;
      /**
       * Last Updated
       * @description Last update timestamp in ISO8601 format
       */
      last_updated: string;
      /**
       * Media Types
       * @description List of supported media types for this namespace
       */
      media_types: string[];
      /**
       * Name
       * @description The organization slug
       */
      name: string;
      /**
       * Namespace
       * @description Namespace of the organization, same as slug
       */
      namespace: string;
      /**
       * Permission
       * @description Permissions of the authenticated user on this organization
       */
      permission: string;
      /**
       * Pull Count
       * @description Total number of pulls across repositories
       */
      pull_count: number;
      /**
       * Repository Count
       * @description Number of repositories under the organization
       */
      repository_count: number;
      /**
       * Star Count
       * @description Total number of stars across repositories
       */
      star_count: number;
      /**
       * Type
       * @description Type of namespace, e.g., 'organization'
       */
      type: string;
      /**
       * User
       * @description User associated with the organization (admin)
       */
      user: string;
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
 * Type of DOCKER_HUB's DOCKER_HUB_CREATE_REPOSITORY tool input.
 */
type DOCKER_HUB_CREATE_REPOSITORY_INPUT = {
  /**
   * Description
   * @description Short description of the repository
   * @default null
   */
  description: string | null;
  /**
   * Full Description
   * @description Long description or README of the repository
   * @default null
   */
  full_description: string | null;
  /**
   * Is Private
   * @description Set to true for a private repository, false for public
   * @default false
   */
  is_private: boolean;
  /**
   * Name
   * @description The repository name. Lowercase letters, numbers, '.', '_' or '-' allowed
   */
  name?: string;
  /**
   * Namespace
   * @description The user or organization namespace to create the repository in
   */
  namespace?: string;
  /**
   * Registry
   * @description Target registry for the repository, e.g., 'docker'
   * @default null
   */
  registry: string | null;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_CREATE_REPOSITORY tool output.
 */
type DOCKER_HUB_CREATE_REPOSITORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Date Created
       * @description Creation datetime in ISO 8601 format
       */
      date_created: string;
      /**
       * Date Updated
       * @description Last updated datetime in ISO 8601 format
       */
      date_updated: string;
      /**
       * Description
       * @description Short description
       * @default null
       */
      description: string | null;
      /**
       * Full Description
       * @description Full description
       * @default null
       */
      full_description: string | null;
      /**
       * Is Private
       * @description Whether the repository is private
       */
      is_private: boolean;
      /**
       * Name
       * @description Name of the repository
       */
      name: string;
      /**
       * Namespace
       * @description Namespace of the repository
       */
      namespace: string;
      /**
       * Permissions
       * @description Permissions for the current user on this repository
       */
      permissions: {
          /**
           * Admin
           * @description Admin permission flag
           */
          admin: boolean;
          /**
           * Read
           * @description Read permission flag
           */
          read: boolean;
          /**
           * Write
           * @description Write permission flag
           */
          write: boolean;
      };
      /**
       * Pull Count
       * @description Number of pulls
       */
      pull_count: number;
      /**
       * Registry
       * @description Registry, e.g., 'docker'
       */
      registry: string;
      /**
       * Repository Type
       * @description Type of repository, e.g., 'image'
       */
      repository_type: string;
      /**
       * Star Count
       * @description Number of stars
       */
      star_count: number;
      /**
       * Status
       * @description Status code of the repository, e.g., 1 for active
       */
      status: number;
      /**
       * User
       * @description Namespace owner of the repository
       */
      user: string;
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
 * Type of DOCKER_HUB's DOCKER_HUB_CREATE_WEBHOOK tool input.
 */
type DOCKER_HUB_CREATE_WEBHOOK_INPUT = {
  /**
   * Active
   * @description Whether the webhook is active upon creation
   * @default true
   */
  active: boolean;
  /**
   * Events
   * @description List of events that trigger the webhook, e.g., ['push']
   * @default [
   *       "push"
   *     ]
   */
  events: string[];
  /**
   * Name
   * @description Optional name for the webhook
   * @default null
   */
  name: string | null;
  /**
   * Namespace
   * @description Repository namespace (username or organization)
   */
  namespace?: string;
  /**
   * Repository
   * @description Repository name
   */
  repository?: string;
  /**
   * Target Url
   * Format: uri
   * @description The URL to receive webhook POSTs
   */
  target_url?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_CREATE_WEBHOOK tool output.
 */
type DOCKER_HUB_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the webhook is active
       * @default null
       */
      active: boolean | null;
      /**
       * Created At
       * @description Timestamp when the webhook was created
       * @default null
       */
      created_at: string | null;
      /**
       * Events
       * @description Events configured for the webhook
       * @default null
       */
      events: string[] | null;
      /**
       * Id
       * @description Unique identifier of the webhook
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Name of the webhook
       * @default null
       */
      name: string | null;
      /**
       * Target Url
       * Format: uri
       * @description The callback URL for the webhook
       * @default null
       */
      target_url: string | null;
      /**
       * Updated At
       * @description Timestamp when the webhook was last updated
       * @default null
       */
      updated_at: string | null;
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
 * Type of DOCKER_HUB's DOCKER_HUB_DELETE_IMAGE tool input.
 */
type DOCKER_HUB_DELETE_IMAGE_INPUT = {
  /**
   * Image Id
   * @description Numeric ID of the image to delete
   */
  image_id?: number;
  /**
   * Namespace
   * @description Namespace (user or organization) owning the repository
   */
  namespace?: string;
  /**
   * Repository
   * @description Name of the repository containing the image
   */
  repository?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_DELETE_IMAGE tool output.
 */
type DOCKER_HUB_DELETE_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Result message of the deletion operation
       */
      message: string;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
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
 * Type of DOCKER_HUB's DOCKER_HUB_DELETE_ORGANIZATION tool input.
 */
type DOCKER_HUB_DELETE_ORGANIZATION_INPUT = {
  /**
   * Organization
   * @description Name or slug of the organization to delete
   */
  organization?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_DELETE_ORGANIZATION tool output.
 */
type DOCKER_HUB_DELETE_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Result message of the deletion operation
       */
      message: string;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
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
 * Type of DOCKER_HUB's DOCKER_HUB_DELETE_REPOSITORY tool input.
 */
type DOCKER_HUB_DELETE_REPOSITORY_INPUT = {
  /**
   * Namespace
   * @description The user or organization namespace that owns the repository
   */
  namespace?: string;
  /**
   * Repository
   * @description The name of the repository to delete
   */
  repository?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_DELETE_REPOSITORY tool output.
 */
type DOCKER_HUB_DELETE_REPOSITORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Outcome message of the delete operation
       */
      message: string;
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
 * Type of DOCKER_HUB's DOCKER_HUB_DELETE_TAG tool input.
 */
type DOCKER_HUB_DELETE_TAG_INPUT = {
  /**
   * Namespace
   * @description Docker Hub namespace (user or organization name)
   */
  namespace?: string;
  /**
   * Repository
   * @description Name of the repository
   */
  repository?: string;
  /**
   * Tag
   * @description Tag name to delete
   */
  tag?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_DELETE_TAG tool output.
 */
type DOCKER_HUB_DELETE_TAG_OUTPUT = {
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
 * Type of DOCKER_HUB's DOCKER_HUB_DELETE_TEAM tool input.
 */
type DOCKER_HUB_DELETE_TEAM_INPUT = {
  /**
   * Org Name
   * @description Name of the organization owning the team
   */
  org_name?: string;
  /**
   * Team Name
   * @description Slug of the team to delete
   */
  team_name?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_DELETE_TEAM tool output.
 */
type DOCKER_HUB_DELETE_TEAM_OUTPUT = {
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
 * Type of DOCKER_HUB's DOCKER_HUB_DELETE_WEBHOOK tool input.
 */
type DOCKER_HUB_DELETE_WEBHOOK_INPUT = {
  /**
   * Namespace
   * @description Namespace (user or organization) owning the repository
   */
  namespace?: string;
  /**
   * Repository
   * @description Name of the repository
   */
  repository?: string;
  /**
   * Webhook Id
   * @description Unique numeric ID of the webhook to delete
   */
  webhook_id?: number;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_DELETE_WEBHOOK tool output.
 */
type DOCKER_HUB_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Result message of the deletion operation
       */
      message: string;
      /**
       * Status Code
       * @description HTTP status code returned by the API
       */
      status_code: number;
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
 * Type of DOCKER_HUB's DOCKER_HUB_GET_IMAGE tool input.
 */
type DOCKER_HUB_GET_IMAGE_INPUT = {
  /**
   * Image Id
   * @description Identifier (digest) of the image variant to retrieve
   */
  image_id?: string;
  /**
   * Namespace
   * @description User or organization namespace that owns the repository
   */
  namespace?: string;
  /**
   * Repository
   * @description Name of the repository
   */
  repository?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_GET_IMAGE tool output.
 */
type DOCKER_HUB_GET_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Architecture
       * @description CPU architecture of the image variant, e.g., amd64
       */
      architecture: string;
      /**
       * Digest
       * @description Content digest of the image variant
       */
      digest: string;
      /**
       * Last Pulled
       * @description Timestamp when this variant was last pulled
       * @default null
       */
      last_pulled: string | null;
      /**
       * Last Pushed
       * @description Timestamp when this variant was last pushed
       * @default null
       */
      last_pushed: string | null;
      /**
       * Os
       * @description Operating system of the image variant, e.g., linux
       */
      os: string;
      /**
       * Size
       * @description Size in bytes of this image variant
       */
      size: number;
      /**
       * Status
       * @description Status of the image variant, e.g., active
       */
      status: string;
      /**
       * Variant
       * @description Optional architecture variant, e.g., v7
       * @default null
       */
      variant: string | null;
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
 * Type of DOCKER_HUB's DOCKER_HUB_GET_ORGANIZATION tool input.
 */
type DOCKER_HUB_GET_ORGANIZATION_INPUT = {
  /**
   * Organization
   * @description Name or slug of the organization to retrieve
   */
  organization?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_GET_ORGANIZATION tool output.
 */
type DOCKER_HUB_GET_ORGANIZATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description URL of the namespace avatar image
       * @default null
       */
      avatar_url: string | null;
      /**
       * Description
       * @description Short description of the namespace
       * @default null
       */
      description: string | null;
      /**
       * Documentation Url
       * @description URL to documentation for this namespace endpoint
       * @default null
       */
      documentation_url: string | null;
      /**
       * Full Description
       * @description Full description of the namespace
       * @default null
       */
      full_description: string | null;
      /**
       * Has Starred Repos
       * @description Whether authenticated user has starred at least one repo in this namespace
       */
      has_starred_repos: boolean;
      /**
       * Is Migrated
       * @description True if namespace has been migrated
       */
      is_migrated: boolean;
      /**
       * Is Private
       * @description True if namespace is private
       */
      is_private: boolean;
      /**
       * Last Updated
       * @description Last update timestamp of the namespace in ISO8601 format
       */
      last_updated: string;
      /**
       * Media Types
       * @description List of supported media types for this namespace registry
       */
      media_types: string[];
      /**
       * Name
       * @description The namespace or organization name
       */
      name: string;
      /**
       * Namespace
       * @description The slug of the organization namespace
       */
      namespace: string;
      /**
       * Permission
       * @description Permissions of the authenticated user on this namespace
       */
      permission: string;
      /**
       * Pull Count
       * @description Total number of pulls across all repos in namespace
       */
      pull_count: number;
      /**
       * Repository Count
       * @description Number of repositories in this namespace
       */
      repository_count: number;
      /**
       * Star Count
       * @description Total number of stars across all repos in namespace
       */
      star_count: number;
      /**
       * Type
       * @description Type of namespace, e.g. 'organization'
       */
      type: string;
      /**
       * User
       * @description User associated with namespace (organization admin)
       */
      user: string;
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
 * Type of DOCKER_HUB's DOCKER_HUB_GET_REPOSITORY tool input.
 */
type DOCKER_HUB_GET_REPOSITORY_INPUT = {
  /**
   * Namespace
   * @description The user or organization namespace that owns the repository
   */
  namespace?: string;
  /**
   * Repository
   * @description The name of the repository to retrieve
   */
  repository?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_GET_REPOSITORY tool output.
 */
type DOCKER_HUB_GET_REPOSITORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Affiliation
       * @description Affiliation of the repository with the authenticated user
       * @default null
       */
      affiliation: string | null;
      /**
       * Can Edit
       * @description Whether the authenticated user can edit the repository
       */
      can_edit: boolean;
      /**
       * Description
       * @description Short description of the repository
       * @default null
       */
      description: string | null;
      /**
       * Full Description
       * @description Full description of the repository
       * @default null
       */
      full_description: string | null;
      /**
       * Is Automated
       * @description Whether the repository is automated
       */
      is_automated: boolean;
      /**
       * Is Migrated
       * @description Whether the repository has been migrated
       */
      is_migrated: boolean;
      /**
       * Is Private
       * @description Whether the repository is private
       */
      is_private: boolean;
      /**
       * Last Updated
       * @description Timestamp of last update
       */
      last_updated: string;
      /**
       * Media Types
       * @description List of media types supported by the repository
       */
      media_types: string[];
      /**
       * Name
       * @description Name of the repository
       */
      name: string;
      /**
       * Namespace
       * @description Namespace of the repository
       */
      namespace: string;
      /**
       * Permissions
       * @description Permissions the authenticated user has on the repository
       */
      permissions: {
          /**
           * Admin
           * @description Admin permission for the repository
           */
          admin: boolean;
          /**
           * Read
           * @description Read permission for the repository
           */
          read: boolean;
          /**
           * Write
           * @description Write permission for the repository
           */
          write: boolean;
      };
      /**
       * Pull Count
       * @description Number of pulls
       */
      pull_count: number;
      /**
       * Repository Type
       * @description Type of the repository
       */
      repository_type: string;
      /**
       * Star Count
       * @description Number of stars
       */
      star_count: number;
      /**
       * Status
       * @description Status code of the repository
       */
      status: number;
      /**
       * User
       * @description Owner of the repository
       */
      user: string;
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
 * Type of DOCKER_HUB's DOCKER_HUB_GET_TAG tool input.
 */
type DOCKER_HUB_GET_TAG_INPUT = {
  /**
   * Namespace
   * @description User or organization namespace that owns the repository
   */
  namespace?: string;
  /**
   * Repository
   * @description Name of the repository
   */
  repository?: string;
  /**
   * Tag
   * @description Name of the tag to retrieve
   */
  tag?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_GET_TAG tool output.
 */
type DOCKER_HUB_GET_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Digest
       * @description Content digest associated with the tag
       */
      digest: string;
      /**
       * Full Size
       * @description Size in bytes of the image referenced by the tag
       */
      full_size: number;
      /**
       * Id
       * @description Internal identifier of the tag
       */
      id: number;
      /**
       * Images
       * @description List of platform-specific image variants for this tag
       */
      images: {
          /**
           * Architecture
           * @description CPU architecture of the image variant, e.g., amd64
           */
          architecture: string;
          /**
           * Digest
           * @description Content digest of the platform-specific image
           */
          digest: string;
          /**
           * Last Pulled
           * @description Timestamp when this variant was last pulled
           */
          last_pulled: string;
          /**
           * Last Pushed
           * @description Timestamp when this variant was last pushed
           */
          last_pushed: string;
          /**
           * Os
           * @description Operating system of the image variant, e.g., linux
           */
          os: string;
          /**
           * Size
           * @description Size in bytes of this image variant
           */
          size: number;
          /**
           * Status
           * @description Status of the image variant
           */
          status: string;
          /**
           * Variant
           * @description Optional architecture variant, e.g., v7
           * @default null
           */
          variant: string | null;
      }[];
      /**
       * Last Updated
       * @description When the tag metadata was last updated
       */
      last_updated: string;
      /**
       * Name
       * @description Tag name
       */
      name: string;
      /**
       * Tag Last Pulled
       * @description When the tag was last pulled
       */
      tag_last_pulled: string;
      /**
       * Tag Last Pushed
       * @description When the tag was last pushed
       */
      tag_last_pushed: string;
      /**
       * Tag Status
       * @description Current tag status, e.g., active
       */
      tag_status: string;
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
 * Type of DOCKER_HUB's DOCKER_HUB_GET_TEAM tool input.
 */
type DOCKER_HUB_GET_TEAM_INPUT = {
  /**
   * Org Name
   * @description Name of the organization owning the team
   */
  org_name?: string;
  /**
   * Team Name
   * @description Slug of the team to retrieve
   */
  team_name?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_GET_TEAM tool output.
 */
type DOCKER_HUB_GET_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Can Read
       * @description Whether the team has read permissions
       */
      can_read: boolean;
      /**
       * Can Write
       * @description Whether the team has write permissions
       */
      can_write: boolean;
      /**
       * Created At
       * @description ISO-8601 timestamp when the team was created
       */
      created_at: string;
      /**
       * Description
       * @description Description of the team
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Unique identifier of the team
       */
      id: number;
      /**
       * Is Admin
       * @description Whether the team has admin permissions
       */
      is_admin: boolean;
      /**
       * Members Count
       * @description Number of members in the team
       */
      members_count: number;
      /**
       * Name
       * @description Name of the team
       */
      name: string;
      /**
       * Organization
       * @description Owning organization of the team
       */
      organization: {
          /**
           * Id
           * @description ID of the organization
           */
          id: number;
          /**
           * Slug
           * @description URL-friendly slug of the organization
           */
          slug: string;
      };
      /**
       * Privacy
       * @description Privacy setting of the team
       * @enum {string}
       */
      privacy: "open" | "closed";
      /**
       * Slug
       * @description URL-friendly slug of the team
       */
      slug: string;
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
 * Type of DOCKER_HUB's DOCKER_HUB_GET_WEBHOOK tool input.
 */
type DOCKER_HUB_GET_WEBHOOK_INPUT = {
  /**
   * Namespace
   * @description Namespace (user or organization) owning the repository
   */
  namespace?: string;
  /**
   * Repository
   * @description Name of the repository containing the webhook
   */
  repository?: string;
  /**
   * Webhook Id
   * @description Numeric ID of the webhook to retrieve
   */
  webhook_id?: number;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_GET_WEBHOOK tool output.
 */
type DOCKER_HUB_GET_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the webhook is active
       */
      active: boolean;
      /**
       * Created At
       * @description Timestamp when the webhook was created
       */
      created_at: string;
      /**
       * Events
       * @description List of events that trigger the webhook
       */
      events: string[];
      /**
       * Id
       * @description Unique identifier of the webhook
       */
      id: number;
      /**
       * Name
       * @description Name of the webhook
       */
      name: string;
      /**
       * Target Url
       * Format: uri
       * @description Callback URL for the webhook
       */
      target_url: string;
      /**
       * Updated At
       * @description Timestamp when the webhook was last updated
       */
      updated_at: string;
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
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_IMAGES tool input.
 */
type DOCKER_HUB_LIST_IMAGES_INPUT = {
  /**
   * Namespace
   * @description User or organization namespace that owns the repository
   */
  namespace?: string;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page
   * @default null
   */
  page_size: number | null;
  /**
   * Repository
   * @description Name of the repository
   */
  repository?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_IMAGES tool output.
 */
type DOCKER_HUB_LIST_IMAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of images
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of images in the current page
       */
      results: {
          /**
           * Architecture
           * @description CPU architecture of the image variant, e.g., amd64
           */
          architecture: string;
          /**
           * Digest
           * @description Content digest of the image
           */
          digest: string;
          /**
           * Id
           * @description Internal identifier of the image
           */
          id: number;
          /**
           * Last Pulled
           * @description Timestamp when this image was last pulled
           */
          last_pulled: string;
          /**
           * Last Pushed
           * @description Timestamp when this image was last pushed
           */
          last_pushed: string;
          /**
           * Os
           * @description Operating system of the image, e.g., linux
           */
          os: string;
          /**
           * Os Version
           * @description Operating system version of the image
           * @default null
           */
          os_version: string | null;
          /**
           * Repository
           * @description Internal identifier of the repository
           */
          repository: number;
          /**
           * Size
           * @description Size in bytes of the image
           */
          size: number;
          /**
           * Status
           * @description Status of the image
           */
          status: string;
          /**
           * Variant
           * @description Optional architecture variant, e.g., v7
           * @default null
           */
          variant: string | null;
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
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_ORGANIZATIONS tool input.
 */
type DOCKER_HUB_LIST_ORGANIZATIONS_INPUT = object;

/**
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_ORGANIZATIONS tool output.
 */
type DOCKER_HUB_LIST_ORGANIZATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Namespaces
       * @description List of namespaces associated with the user
       */
      namespaces: {
          /**
           * Is User
           * @description True if the namespace is a user namespace, False if an organization
           */
          is_user: boolean;
          /**
           * Name
           * @description Namespace name
           */
          name: string;
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
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_ORG_MEMBERS tool input.
 */
type DOCKER_HUB_LIST_ORG_MEMBERS_INPUT = {
  /**
   * Org
   * @description Name of the organization
   */
  org?: string;
  /**
   * Page
   * @description Page number to retrieve, must be ≥1
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of items per page, between 1 and 100
   * @default 100
   */
  page_size: number;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_ORG_MEMBERS tool output.
 */
type DOCKER_HUB_LIST_ORG_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of organization members
       */
      count: number;
      /**
       * Next
       * @description URL for next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of organization members
       */
      results: {
          /**
           * Full Name
           * @description Full name of the organization member, if available
           * @default null
           */
          full_name: string | null;
          /**
           * Id
           * @description Unique numeric ID of the user
           */
          id: number;
          /**
           * Role
           * @description Role of the user within the organization
           * @default null
           */
          role: string | null;
          /**
           * Username
           * @description Username of the organization member
           */
          username: string;
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
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_REPOSITORIES tool input.
 */
type DOCKER_HUB_LIST_REPOSITORIES_INPUT = {
  /**
   * Content Types
   * @description Comma-separated list of content types to filter repositories that contain at least one artifact of those types
   * @default null
   */
  content_types: string | null;
  /**
   * Media Types
   * @description Comma-separated list of media types to filter repositories
   * @default null
   */
  media_types: string | null;
  /**
   * Namespace
   * @description The user or organization namespace to list repositories from
   */
  namespace?: string;
  /**
   * Ordering
   * @description Sort key for ordering results; prefix with '-' for descending order
   * @default null
   */
  ordering: string | null;
  /**
   * Page
   * @description Page number (1-indexed, must be >= 1)
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of results per page (must be >= 1)
   * @default 25
   */
  page_size: number;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_REPOSITORIES tool output.
 */
type DOCKER_HUB_LIST_REPOSITORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of repositories matching the query
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of repository summary objects
       */
      results: {
          /**
           * Can Edit
           * @description Whether the authenticated user can edit the repository
           */
          can_edit: boolean;
          /**
           * Description
           * @description Short description of the repository
           * @default null
           */
          description: string | null;
          /**
           * Full Description
           * @description Full description of the repository
           * @default null
           */
          full_description: string | null;
          /**
           * Is Automated
           * @description Whether the repository is automated
           */
          is_automated: boolean;
          /**
           * Is Private
           * @description Whether the repository is private
           */
          is_private: boolean;
          /**
           * Last Updated
           * @description Timestamp of the last update
           */
          last_updated: string;
          /**
           * Media Types
           * @description List of media types supported by the repository
           */
          media_types: string[];
          /**
           * Name
           * @description Name of the repository
           */
          name: string;
          /**
           * Namespace
           * @description Namespace of the repository
           */
          namespace: string;
          /**
           * Permissions
           * @description Permissions the authenticated user has on this repository
           */
          permissions: {
              /**
               * Admin
               * @description Admin permission for the repository
               */
              admin: boolean;
              /**
               * Read
               * @description Read permission for the repository
               */
              read: boolean;
              /**
               * Write
               * @description Write permission for the repository
               */
              write: boolean;
          };
          /**
           * Pull Count
           * @description Number of pulls for the repository
           */
          pull_count: number;
          /**
           * Repository Type
           * @description Type of the repository
           */
          repository_type: string;
          /**
           * Star Count
           * @description Number of stars for the repository
           */
          star_count: number;
          /**
           * Status
           * @description Status code of the repository
           */
          status: number;
          /**
           * User
           * @description Owner of the repository
           */
          user: string;
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
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_TAGS tool input.
 */
type DOCKER_HUB_LIST_TAGS_INPUT = {
  /**
   * Namespace
   * @description User or organization namespace that owns the repository
   */
  namespace?: string;
  /**
   * Page
   * @description Page number for pagination, starting from 1
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page
   * @default null
   */
  page_size: number | null;
  /**
   * Repository
   * @description Name of the repository
   */
  repository?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_TAGS tool output.
 */
type DOCKER_HUB_LIST_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of tags
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of tags in the current page
       */
      results: {
          /**
           * Digest
           * @description Content digest associated with the tag
           */
          digest: string;
          /**
           * Full Size
           * @description Size in bytes of the image referenced by the tag
           */
          full_size: number;
          /**
           * Id
           * @description Internal identifier of the tag
           */
          id: number;
          /**
           * Images
           * @description List of platform-specific image variants for this tag
           */
          images: {
              /**
               * Architecture
               * @description CPU architecture of the image variant, e.g., amd64
               */
              architecture: string;
              /**
               * Digest
               * @description Content digest of the platform-specific image
               */
              digest: string;
              /**
               * Last Pulled
               * @description Timestamp when this variant was last pulled
               */
              last_pulled: string;
              /**
               * Last Pushed
               * @description Timestamp when this variant was last pushed
               */
              last_pushed: string;
              /**
               * Os
               * @description Operating system of the image variant, e.g., linux
               */
              os: string;
              /**
               * Size
               * @description Size in bytes of this image variant
               */
              size: number;
              /**
               * Status
               * @description Status of the image variant
               */
              status: string;
              /**
               * Variant
               * @description Optional architecture variant, e.g., v7
               * @default null
               */
              variant: string | null;
          }[];
          /**
           * Last Updated
           * @description When the tag metadata was last updated
           */
          last_updated: string;
          /**
           * Name
           * @description Tag name
           */
          name: string;
          /**
           * Tag Last Pulled
           * @description When the tag was last pulled
           */
          tag_last_pulled: string;
          /**
           * Tag Last Pushed
           * @description When the tag was last pushed
           */
          tag_last_pushed: string;
          /**
           * Tag Status
           * @description Current tag status, e.g., active
           */
          tag_status: string;
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
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_TEAMS tool input.
 */
type DOCKER_HUB_LIST_TEAMS_INPUT = {
  /**
   * Organization
   * @description The slug of the organization whose teams are to be listed
   */
  organization?: string;
  /**
   * Page
   * @description Page number for paginated results, must be >= 1
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of results per page, must be between 1 and 100
   * @default 25
   */
  page_size: number;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_TEAMS tool output.
 */
type DOCKER_HUB_LIST_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of teams
       */
      count: number;
      /**
       * Next
       * @description URL of the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL of the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of teams on this page
       */
      results: {
          /**
           * Description
           * @description Description of the team
           * @default null
           */
          description: string | null;
          /**
           * Name
           * @description Name of the team
           */
          name: string;
          /**
           * Organization
           * @description The organization slug to which this team belongs
           */
          organization: string;
          /**
           * Permission
           * @description Permission level of the team (e.g., 'read', 'write')
           */
          permission: string;
          /**
           * User Count
           * @description Number of users in the team
           */
          user_count: number;
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
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_TEAM_MEMBERS tool input.
 */
type DOCKER_HUB_LIST_TEAM_MEMBERS_INPUT = {
  /**
   * Org Name
   * @description Name of the Docker Hub organization
   */
  org_name?: string;
  /**
   * Team Slug
   * @description URL-friendly slug of the team within the organization
   */
  team_slug?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_TEAM_MEMBERS tool output.
 */
type DOCKER_HUB_LIST_TEAM_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of team members across all pages
       */
      count: number;
      /**
       * Next
       * @description URL for the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL for the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of team member entries on this page
       */
      results: {
          /**
           * Role
           * @description Role assigned to the user in the team
           */
          role: string;
          /**
           * Team
           * @description Unique ID of the team
           */
          team: number;
          /**
           * User
           * @description Details of the team member user
           */
          user: {
              /**
               * Company
               * @description Company affiliation of the user
               * @default null
               */
              company: string | null;
              /**
               * Full Name
               * @description Full name of the user
               * @default null
               */
              full_name: string | null;
              /**
               * Gravatar Url
               * @description URL of the user's gravatar
               * @default null
               */
              gravatar_url: string | null;
              /**
               * Hub User
               * @description Hub user field (if any)
               * @default null
               */
              hub_user: string | null;
              /**
               * Id
               * @description Unique Docker Hub user ID
               */
              id: number;
              /**
               * Location
               * @description User's location
               * @default null
               */
              location: string | null;
              /**
               * Profile Url
               * @description URL to the user profile
               * @default null
               */
              profile_url: string | null;
              /**
               * Username
               * @description Docker Hub username of the member
               */
              username: string;
          };
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
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_WEBHOOKS tool input.
 */
type DOCKER_HUB_LIST_WEBHOOKS_INPUT = {
  /**
   * Namespace
   * @description Namespace (user or organization) owning the repository
   */
  namespace?: string;
  /**
   * Page
   * @description Page number of results to fetch
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of items per page
   * @default null
   */
  page_size: number | null;
  /**
   * Repository
   * @description Name of the repository
   */
  repository?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_LIST_WEBHOOKS tool output.
 */
type DOCKER_HUB_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of webhooks
       */
      count: number;
      /**
       * Next
       * @description URL to the next page of results, if any
       * @default null
       */
      next: string | null;
      /**
       * Previous
       * @description URL to the previous page of results, if any
       * @default null
       */
      previous: string | null;
      /**
       * Results
       * @description List of webhook items
       */
      results: {
          /**
           * Active
           * @description Whether the webhook is active
           */
          active: boolean;
          /**
           * Created At
           * @description Creation timestamp of the webhook
           */
          created_at: string;
          /**
           * Events
           * @description Events configured for the webhook
           */
          events: string[];
          /**
           * Id
           * @description Unique identifier of the webhook
           */
          id: number;
          /**
           * Name
           * @description Name of the webhook
           */
          name: string;
          /**
           * Target Url
           * Format: uri
           * @description Callback URL of the webhook
           */
          target_url: string;
          /**
           * Updated At
           * @description Last update timestamp of the webhook
           */
          updated_at: string;
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
 * Type of DOCKER_HUB's DOCKER_HUB_REMOVE_ORG_MEMBER tool input.
 */
type DOCKER_HUB_REMOVE_ORG_MEMBER_INPUT = {
  /**
   * Org Name
   * @description Name of the Docker Hub organization
   */
  org_name?: string;
  /**
   * Username
   * @description Docker Hub username of the member to remove
   */
  username?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_REMOVE_ORG_MEMBER tool output.
 */
type DOCKER_HUB_REMOVE_ORG_MEMBER_OUTPUT = {
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
 * Type of DOCKER_HUB's DOCKER_HUB_REMOVE_TEAM_MEMBER tool input.
 */
type DOCKER_HUB_REMOVE_TEAM_MEMBER_INPUT = {
  /**
   * Org Name
   * @description Name of the Docker Hub organization
   */
  org_name?: string;
  /**
   * Team Slug
   * @description Slug of the team within the organization
   */
  team_slug?: string;
  /**
   * Username
   * @description Docker Hub username to remove from the team
   */
  username?: string;
};

/**
 * Type of DOCKER_HUB's DOCKER_HUB_REMOVE_TEAM_MEMBER tool output.
 */
type DOCKER_HUB_REMOVE_TEAM_MEMBER_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "DOCKER_HUB".
 */
export type DOCKER_HUB_TOOL_INPUTS = {
  ADD_ORG_MEMBER: DOCKER_HUB_ADD_ORG_MEMBER_INPUT
  CREATE_ORGANIZATION: DOCKER_HUB_CREATE_ORGANIZATION_INPUT
  CREATE_REPOSITORY: DOCKER_HUB_CREATE_REPOSITORY_INPUT
  CREATE_WEBHOOK: DOCKER_HUB_CREATE_WEBHOOK_INPUT
  DELETE_IMAGE: DOCKER_HUB_DELETE_IMAGE_INPUT
  DELETE_ORGANIZATION: DOCKER_HUB_DELETE_ORGANIZATION_INPUT
  DELETE_REPOSITORY: DOCKER_HUB_DELETE_REPOSITORY_INPUT
  DELETE_TAG: DOCKER_HUB_DELETE_TAG_INPUT
  DELETE_TEAM: DOCKER_HUB_DELETE_TEAM_INPUT
  DELETE_WEBHOOK: DOCKER_HUB_DELETE_WEBHOOK_INPUT
  GET_IMAGE: DOCKER_HUB_GET_IMAGE_INPUT
  GET_ORGANIZATION: DOCKER_HUB_GET_ORGANIZATION_INPUT
  GET_REPOSITORY: DOCKER_HUB_GET_REPOSITORY_INPUT
  GET_TAG: DOCKER_HUB_GET_TAG_INPUT
  GET_TEAM: DOCKER_HUB_GET_TEAM_INPUT
  GET_WEBHOOK: DOCKER_HUB_GET_WEBHOOK_INPUT
  LIST_IMAGES: DOCKER_HUB_LIST_IMAGES_INPUT
  LIST_ORGANIZATIONS: DOCKER_HUB_LIST_ORGANIZATIONS_INPUT
  LIST_ORG_MEMBERS: DOCKER_HUB_LIST_ORG_MEMBERS_INPUT
  LIST_REPOSITORIES: DOCKER_HUB_LIST_REPOSITORIES_INPUT
  LIST_TAGS: DOCKER_HUB_LIST_TAGS_INPUT
  LIST_TEAMS: DOCKER_HUB_LIST_TEAMS_INPUT
  LIST_TEAM_MEMBERS: DOCKER_HUB_LIST_TEAM_MEMBERS_INPUT
  LIST_WEBHOOKS: DOCKER_HUB_LIST_WEBHOOKS_INPUT
  REMOVE_ORG_MEMBER: DOCKER_HUB_REMOVE_ORG_MEMBER_INPUT
  REMOVE_TEAM_MEMBER: DOCKER_HUB_REMOVE_TEAM_MEMBER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DOCKER_HUB".
 */
export type DOCKER_HUB_TOOL_OUTPUTS = {
  ADD_ORG_MEMBER: DOCKER_HUB_ADD_ORG_MEMBER_OUTPUT
  CREATE_ORGANIZATION: DOCKER_HUB_CREATE_ORGANIZATION_OUTPUT
  CREATE_REPOSITORY: DOCKER_HUB_CREATE_REPOSITORY_OUTPUT
  CREATE_WEBHOOK: DOCKER_HUB_CREATE_WEBHOOK_OUTPUT
  DELETE_IMAGE: DOCKER_HUB_DELETE_IMAGE_OUTPUT
  DELETE_ORGANIZATION: DOCKER_HUB_DELETE_ORGANIZATION_OUTPUT
  DELETE_REPOSITORY: DOCKER_HUB_DELETE_REPOSITORY_OUTPUT
  DELETE_TAG: DOCKER_HUB_DELETE_TAG_OUTPUT
  DELETE_TEAM: DOCKER_HUB_DELETE_TEAM_OUTPUT
  DELETE_WEBHOOK: DOCKER_HUB_DELETE_WEBHOOK_OUTPUT
  GET_IMAGE: DOCKER_HUB_GET_IMAGE_OUTPUT
  GET_ORGANIZATION: DOCKER_HUB_GET_ORGANIZATION_OUTPUT
  GET_REPOSITORY: DOCKER_HUB_GET_REPOSITORY_OUTPUT
  GET_TAG: DOCKER_HUB_GET_TAG_OUTPUT
  GET_TEAM: DOCKER_HUB_GET_TEAM_OUTPUT
  GET_WEBHOOK: DOCKER_HUB_GET_WEBHOOK_OUTPUT
  LIST_IMAGES: DOCKER_HUB_LIST_IMAGES_OUTPUT
  LIST_ORGANIZATIONS: DOCKER_HUB_LIST_ORGANIZATIONS_OUTPUT
  LIST_ORG_MEMBERS: DOCKER_HUB_LIST_ORG_MEMBERS_OUTPUT
  LIST_REPOSITORIES: DOCKER_HUB_LIST_REPOSITORIES_OUTPUT
  LIST_TAGS: DOCKER_HUB_LIST_TAGS_OUTPUT
  LIST_TEAMS: DOCKER_HUB_LIST_TEAMS_OUTPUT
  LIST_TEAM_MEMBERS: DOCKER_HUB_LIST_TEAM_MEMBERS_OUTPUT
  LIST_WEBHOOKS: DOCKER_HUB_LIST_WEBHOOKS_OUTPUT
  REMOVE_ORG_MEMBER: DOCKER_HUB_REMOVE_ORG_MEMBER_OUTPUT
  REMOVE_TEAM_MEMBER: DOCKER_HUB_REMOVE_TEAM_MEMBER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DOCKER_HUB toolkit.
 */
export const DOCKER_HUB = {
  slug: "docker_hub",
  tools: {
    /**
     * Tool to send an invitation for a user to join a Docker Hub organization. Use when you need to grant membership by inviting a user via their username after choosing the appropriate role.
     */
    ADD_ORG_MEMBER: "DOCKER_HUB_ADD_ORG_MEMBER",
    /**
     * Tool to create a Docker Hub organization. Use when you need to programmatically instantiate a new namespace for organizing repositories.
     */
    CREATE_ORGANIZATION: "DOCKER_HUB_CREATE_ORGANIZATION",
    /**
     * Tool to create a Docker Hub repository under a namespace. Use when you need to programmatically instantiate a new repo under your organization or user.
     */
    CREATE_REPOSITORY: "DOCKER_HUB_CREATE_REPOSITORY",
    /**
     * Tool to create a webhook on a Docker Hub repository. Use after determining repository details.
     */
    CREATE_WEBHOOK: "DOCKER_HUB_CREATE_WEBHOOK",
    /**
     * Tool to delete a specific image within a Docker Hub repository. Use when you have confirmed the namespace, repository, and image ID to remove.
     */
    DELETE_IMAGE: "DOCKER_HUB_DELETE_IMAGE",
    /**
     * Tool to delete a specific Docker Hub organization. Use when you need to permanently remove an organization. Deletion is irreversible.
     */
    DELETE_ORGANIZATION: "DOCKER_HUB_DELETE_ORGANIZATION",
    /**
     * Tool to delete a specific Docker Hub repository. Use when you need to permanently remove a repository. Deletion is irreversible.
     */
    DELETE_REPOSITORY: "DOCKER_HUB_DELETE_REPOSITORY",
    /**
     * Tool to delete a specific tag from a Docker Hub repository. Use after confirming the tag to remove.
     */
    DELETE_TAG: "DOCKER_HUB_DELETE_TAG",
    /**
     * Tool to delete a specific team from an organization. Use after confirming the team exists in Docker Hub.
     */
    DELETE_TEAM: "DOCKER_HUB_DELETE_TEAM",
    /**
     * Tool to delete a specific webhook from a repository. Use when cleaning up outdated or misconfigured webhooks.
     */
    DELETE_WEBHOOK: "DOCKER_HUB_DELETE_WEBHOOK",
    /**
     * Tool to retrieve detailed information about a specific image within a Docker Hub repository. Use after confirming namespace, repository name, and image ID. Example: GET_IMAGE(namespace="library", repository="ubuntu", image_id="sha256:...")
     */
    GET_IMAGE: "DOCKER_HUB_GET_IMAGE",
    /**
     * Tool to retrieve details of a specific organization namespace. Use when you have the organization slug and need its namespace metadata.
     */
    GET_ORGANIZATION: "DOCKER_HUB_GET_ORGANIZATION",
    /**
     * Tool to retrieve details of a specific Docker Hub repository. Use after confirming namespace and repository name.
     */
    GET_REPOSITORY: "DOCKER_HUB_GET_REPOSITORY",
    /**
     * Tool to retrieve details of a specific Docker Hub repository tag. Use after confirming the namespace, repository, and tag name.
     */
    GET_TAG: "DOCKER_HUB_GET_TAG",
    /**
     * Tool to retrieve a specific Docker Hub team. Use after confirming the organization and team exist.
     */
    GET_TEAM: "DOCKER_HUB_GET_TEAM",
    /**
     * Tool to retrieve details of a specific Docker Hub webhook. Use when you need to inspect an existing webhook's configuration by its ID.
     */
    GET_WEBHOOK: "DOCKER_HUB_GET_WEBHOOK",
    /**
     * Tool to list image variants for a specific Docker Hub repository. Use after specifying namespace and repository.
     */
    LIST_IMAGES: "DOCKER_HUB_LIST_IMAGES",
    /**
     * Tool to list organizations (namespaces) for the authenticated user. Use after authentication to retrieve namespaces.
     */
    LIST_ORGANIZATIONS: "DOCKER_HUB_LIST_ORGANIZATIONS",
    /**
     * Tool to list members of a Docker Hub organization. Use when managing or auditing organization membership.
     */
    LIST_ORG_MEMBERS: "DOCKER_HUB_LIST_ORG_MEMBERS",
    /**
     * Tool to list repositories under a namespace. Use when you need to enumerate repositories within a specific Docker Hub namespace, with optional filtering and pagination.
     */
    LIST_REPOSITORIES: "DOCKER_HUB_LIST_REPOSITORIES",
    /**
     * Tool to list tags for a Docker Hub repository. Use after specifying namespace and repository.
     */
    LIST_TAGS: "DOCKER_HUB_LIST_TAGS",
    /**
     * Tool to list teams in a specific organization. Use after confirming the organization slug.
     */
    LIST_TEAMS: "DOCKER_HUB_LIST_TEAMS",
    /**
     * Tool to list members of a Docker Hub team. Use when you need to retrieve all users in a specific team.
     */
    LIST_TEAM_MEMBERS: "DOCKER_HUB_LIST_TEAM_MEMBERS",
    /**
     * Tool to list webhooks for a Docker Hub repository. Use when you need to retrieve all existing webhooks after confirming repository details.
     */
    LIST_WEBHOOKS: "DOCKER_HUB_LIST_WEBHOOKS",
    /**
     * Tool to remove a user from a Docker Hub organization. Use when you need to revoke a user's existing membership after confirming the organization and username.
     */
    REMOVE_ORG_MEMBER: "DOCKER_HUB_REMOVE_ORG_MEMBER",
    /**
     * Tool to remove a user from a Docker Hub team. Use when you need to revoke membership from a team after verifying the user is currently a member.
     */
    REMOVE_TEAM_MEMBER: "DOCKER_HUB_REMOVE_TEAM_MEMBER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DOCKER_HUB".
 */
export type DOCKER_HUB_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DOCKER_HUB".
 */
export type DOCKER_HUB_TRIGGER_EVENTS = {}
