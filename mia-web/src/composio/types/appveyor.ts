// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of APPVEYOR's APPVEYOR_GET_BUILD_ARTIFACTS tool input.
 */
type APPVEYOR_GET_BUILD_ARTIFACTS_INPUT = {
  /**
   * Job Id
   * @description The ID of the build job to retrieve artifacts from.
   */
  jobId?: string;
};

/**
 * Type of APPVEYOR's APPVEYOR_GET_BUILD_ARTIFACTS tool output.
 */
type APPVEYOR_GET_BUILD_ARTIFACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description ISO 8601 timestamp of creation time
       */
      created: string;
      /**
       * File Name
       * @description Name of the artifact file
       */
      fileName: string;
      /**
       * Name
       * @description Artifact name
       */
      name: string;
      /**
       * Relative Name
       * @description Relative path of the artifact
       */
      relativeName: string;
      /**
       * Size
       * @description File size in bytes
       */
      size: number;
      /**
       * Type
       * @description Artifact type: File or Folder
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
 * Type of APPVEYOR's APPVEYOR_GET_ENVIRONMENTS tool input.
 */
type APPVEYOR_GET_ENVIRONMENTS_INPUT = object;

/**
 * Type of APPVEYOR's APPVEYOR_GET_ENVIRONMENTS tool output.
 */
type APPVEYOR_GET_ENVIRONMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Environments
       * @description List of deployment environments.
       */
      environments: {
          /**
           * Environment Id
           * @description Unique identifier of the deployment environment.
           */
          environmentId: number;
          /**
           * Name
           * @description Name of the deployment environment.
           */
          name: string;
          /**
           * Provider
           * @description Name of the deployment provider.
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
 * Type of APPVEYOR's APPVEYOR_GET_PROJECTS tool input.
 */
type APPVEYOR_GET_PROJECTS_INPUT = object;

/**
 * Type of APPVEYOR's APPVEYOR_GET_PROJECTS tool output.
 */
type APPVEYOR_GET_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Identifier of the owning account.
       */
      accountId: number;
      /**
       * Account Name
       * @description Name of the owning account.
       */
      accountName: string;
      /**
       * Builds
       * @description Recent builds associated with this project.
       */
      builds: {
          /**
           * Author Name
           * @description Name of the commit author.
           * @default null
           */
          authorName: string | null;
          /**
           * Author Username
           * @description Username of the commit author.
           * @default null
           */
          authorUsername: string | null;
          /**
           * Branch
           * @description Branch name.
           */
          branch: string;
          /**
           * Build Id
           * @description Unique build identifier.
           */
          buildId: number;
          /**
           * Build Number
           * @description Sequential build number.
           */
          buildNumber: number;
          /**
           * Commit Id
           * @description Commit SHA that triggered the build.
           */
          commitId: string;
          /**
           * Committed
           * @description Timestamp when the commit was created (ISO 8601).
           */
          committed: string;
          /**
           * Committer Name
           * @description Name of the committer.
           * @default null
           */
          committerName: string | null;
          /**
           * Committer Username
           * @description Username of the committer.
           * @default null
           */
          committerUsername: string | null;
          /**
           * Created
           * @description Build record creation timestamp (ISO 8601).
           */
          created: string;
          /**
           * Finished
           * @description Timestamp when the build finished (ISO 8601).
           * @default null
           */
          finished: string | null;
          /**
           * Jobs
           * @description List of jobs in this build.
           */
          jobs: {
              [key: string]: unknown;
          }[];
          /**
           * Message
           * @description Commit or build message.
           * @default null
           */
          message: string | null;
          /**
           * Messages
           * @description Additional messages associated with this build.
           */
          messages: {
              [key: string]: unknown;
          }[];
          /**
           * Started
           * @description Timestamp when the build started (ISO 8601).
           * @default null
           */
          started: string | null;
          /**
           * Status
           * @description Build status (e.g., 'success', 'failed').
           */
          status: string;
          /**
           * Updated
           * @description Build record last update timestamp (ISO 8601).
           */
          updated: string;
          /**
           * Version
           * @description Build version string.
           */
          version: string;
      }[];
      /**
       * Created
       * @description Project creation timestamp (ISO 8601).
       */
      created: string;
      /**
       * Is Private
       * @description Whether the repository is private.
       */
      isPrivate: boolean;
      /**
       * Name
       * @description Project name.
       */
      name: string;
      /**
       * Nu Get Feed
       * @description Associated NuGet feed information.
       */
      nuGetFeed: {
          /**
           * Created
           * @description Feed creation timestamp (ISO 8601).
           */
          created: string;
          /**
           * Id
           * @description Unique identifier of the project's NuGet feed.
           */
          id: string;
          /**
           * Name
           * @description Name of the project's NuGet feed.
           */
          name: string;
          /**
           * Publishing Enabled
           * @description Whether publishing is enabled for this feed.
           */
          publishingEnabled: boolean;
      };
      /**
       * Project Id
       * @description Unique project identifier.
       */
      projectId: number;
      /**
       * Repository Branch
       * @description Default repository branch.
       */
      repositoryBranch: string;
      /**
       * Repository Name
       * @description Repository path in 'owner/repo' format.
       */
      repositoryName: string;
      /**
       * Repository Scm
       * @description SCM type, e.g., 'git'.
       */
      repositoryScm: string;
      /**
       * Repository Type
       * @description Source control provider, e.g., 'gitHub'.
       */
      repositoryType: string;
      /**
       * Skip Branches Without Appveyor Yml
       * @description Skip branches without an AppVeyor YAML config.
       */
      skipBranchesWithoutAppveyorYml: boolean;
      /**
       * Slug
       * @description URL-friendly project slug.
       */
      slug: string;
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
 * Type of APPVEYOR's APPVEYOR_GET_ROLE tool input.
 */
type APPVEYOR_GET_ROLE_INPUT = {
  /**
   * Role Id
   * @description Unique identifier of the role to retrieve.
   */
  role_id?: number;
};

/**
 * Type of APPVEYOR's APPVEYOR_GET_ROLE tool output.
 */
type APPVEYOR_GET_ROLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created
       * @description Creation timestamp of the role in ISO 8601 format.
       */
      created: string;
      /**
       * Groups
       * @description List of permission groups associated with the role.
       */
      groups: {
          /**
           * Name
           * @description Name of the permission group.
           */
          name: string;
          /**
           * Permissions
           * @description List of permissions belonging to the group.
           */
          permissions: {
              /**
               * Allowed
               * @description Indicates if the permission is granted.
               */
              allowed: boolean;
              /**
               * Description
               * @description Brief description of the permission.
               */
              description: string;
              /**
               * Name
               * @description Name of the permission.
               */
              name: string;
          }[];
      }[];
      /**
       * Is System
       * @description Indicates if the role is a system-defined role.
       */
      isSystem: boolean;
      /**
       * Name
       * @description Name of the role.
       */
      name: string;
      /**
       * Role Id
       * @description Unique identifier of the role.
       */
      roleId: number;
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
 * Type of APPVEYOR's APPVEYOR_GET_ROLES tool input.
 */
type APPVEYOR_GET_ROLES_INPUT = object;

/**
 * Type of APPVEYOR's APPVEYOR_GET_ROLES tool output.
 */
type APPVEYOR_GET_ROLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Roles
       * @description List of roles in the account.
       */
      roles: {
          /**
           * Created
           * @description Timestamp when the role was created (ISO 8601).
           */
          created: string;
          /**
           * Is System
           * @description Indicates if the role is a system-defined role.
           */
          isSystem: boolean;
          /**
           * Name
           * @description Name of the role.
           */
          name: string;
          /**
           * Role Id
           * @description Unique identifier of the role.
           */
          roleId: number;
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
 * Type of APPVEYOR's APPVEYOR_GET_USERS tool input.
 */
type APPVEYOR_GET_USERS_INPUT = object;

/**
 * Type of APPVEYOR's APPVEYOR_GET_USERS tool output.
 */
type APPVEYOR_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description Unique identifier of the account.
       */
      accountId: number;
      /**
       * Account Name
       * @description Name of the AppVeyor account.
       */
      accountName: string;
      /**
       * Created
       * @description Timestamp when the user was created (ISO 8601).
       */
      created: string;
      /**
       * Email
       * @description Email address of the user.
       */
      email: string;
      /**
       * Failed Build Notification
       * @description Notification setting for failed builds (e.g., 'all', 'owner', 'none').
       */
      failedBuildNotification: string;
      /**
       * Full Name
       * @description Full name of the user.
       */
      fullName: string;
      /**
       * Is Collaborator
       * @description True if the user is a collaborator.
       */
      isCollaborator: boolean;
      /**
       * Is Owner
       * @description True if the user is the account owner.
       */
      isOwner: boolean;
      /**
       * Notify When Build Status Changed Only
       * @description If true, notify only when build status changes.
       */
      notifyWhenBuildStatusChangedOnly: boolean;
      /**
       * Role Id
       * @description Identifier of the role assigned to the user.
       */
      roleId: number;
      /**
       * Role Name
       * @description Name of the role assigned to the user.
       */
      roleName: string;
      /**
       * Successful Build Notification
       * @description Notification setting for successful builds (e.g., 'all', 'owner', 'none').
       */
      successfulBuildNotification: string;
      /**
       * Updated
       * @description Timestamp when the user was last updated (ISO 8601).
       */
      updated: string;
      /**
       * User Id
       * @description Unique identifier of the user.
       */
      userId: number;
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
 * Type map of all available tool input types for toolkit "APPVEYOR".
 */
export type APPVEYOR_TOOL_INPUTS = {
  GET_BUILD_ARTIFACTS: APPVEYOR_GET_BUILD_ARTIFACTS_INPUT
  GET_ENVIRONMENTS: APPVEYOR_GET_ENVIRONMENTS_INPUT
  GET_PROJECTS: APPVEYOR_GET_PROJECTS_INPUT
  GET_ROLE: APPVEYOR_GET_ROLE_INPUT
  GET_ROLES: APPVEYOR_GET_ROLES_INPUT
  GET_USERS: APPVEYOR_GET_USERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "APPVEYOR".
 */
export type APPVEYOR_TOOL_OUTPUTS = {
  GET_BUILD_ARTIFACTS: APPVEYOR_GET_BUILD_ARTIFACTS_OUTPUT
  GET_ENVIRONMENTS: APPVEYOR_GET_ENVIRONMENTS_OUTPUT
  GET_PROJECTS: APPVEYOR_GET_PROJECTS_OUTPUT
  GET_ROLE: APPVEYOR_GET_ROLE_OUTPUT
  GET_ROLES: APPVEYOR_GET_ROLES_OUTPUT
  GET_USERS: APPVEYOR_GET_USERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's APPVEYOR toolkit.
 */
export const APPVEYOR = {
  slug: "appveyor",
  tools: {
    /**
     * Tool to get the list of artifacts for a specific build job. use when you need to retrieve artifacts after a job completes.
     */
    GET_BUILD_ARTIFACTS: "APPVEYOR_GET_BUILD_ARTIFACTS",
    /**
     * Tool to get a list of all deployment environments. use when you need to enumerate available environments before creating deployments.
     */
    GET_ENVIRONMENTS: "APPVEYOR_GET_ENVIRONMENTS",
    /**
     * Tool to get a list of all projects for the authenticated account. use after authentication to enumerate available projects.
     */
    GET_PROJECTS: "APPVEYOR_GET_PROJECTS",
    /**
     * Tool to retrieve details of a specific role. use when you need to inspect permissions and metadata of a role by id.
     */
    GET_ROLE: "APPVEYOR_GET_ROLE",
    /**
     * Tool to retrieve all roles in the account. use when you need to enumerate available roles before assigning permissions.
     */
    GET_ROLES: "APPVEYOR_GET_ROLES",
    /**
     * Tool to retrieve all users in the account. use when you need to list all team users in your appveyor account.
     */
    GET_USERS: "APPVEYOR_GET_USERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "APPVEYOR".
 */
export type APPVEYOR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "APPVEYOR".
 */
export type APPVEYOR_TRIGGER_EVENTS = {}
