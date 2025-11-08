// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of LAUNCH_DARKLY's LAUNCH_DARKLY_CREATE_TRIGGER_WORKFLOW tool input.
 */
type LAUNCH_DARKLY_CREATE_TRIGGER_WORKFLOW_INPUT = {
  /**
   * Comment
   * @description Optional comment describing the trigger
   * @default null
   */
  comment: string | null;
  /**
   * Environment Key
   * @description Environment key
   */
  environment_key?: string;
  /**
   * Feature Flag Key
   * @description Feature flag key
   */
  feature_flag_key?: string;
  /**
   * Instructions
   * @description List of actions for the trigger workflow (should include one Instruction object)
   * @default null
   */
  instructions: {
      /**
       * Action
       * @description The action to perform when triggered: turnFlagOn or turnFlagOff
       * @enum {string}
       */
      action: "turnFlagOn" | "turnFlagOff";
      /**
       * Kind
       * @description Fixed value 'flag_action' indicating this is a flag action trigger
       * @constant
       */
      kind: "flag_action";
  }[] | null;
  /**
   * Integration Key
   * @description Identifier of the integration (use 'generic-trigger' for unsupported integrations)
   */
  integrationKey?: string;
  /**
   * Project Key
   * @description Project key
   */
  project_key?: string;
};

/**
 * Type of LAUNCH_DARKLY's LAUNCH_DARKLY_CREATE_TRIGGER_WORKFLOW tool output.
 */
type LAUNCH_DARKLY_CREATE_TRIGGER_WORKFLOW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Creation Date
       * @description Creation timestamp
       * @default null
       */
      _creationDate: number | null;
      /**
       *  Id
       * @description ID of the flag trigger
       * @default null
       */
      _id: string | null;
      /**
       *  Integration Key
       * @description Integration key used for this trigger
       * @default null
       */
      _integrationKey: string | null;
      /**
       *  Last Triggered At
       * @description Timestamp of last execution
       * @default null
       */
      _lastTriggeredAt: number | null;
      /**
       *  Links
       * @description Related resource links
       * @default null
       */
      _links: {
          [key: string]: {
              /**
               * Href
               * @description URL of related resource
               * @default null
               */
              href: string | null;
              /**
               * Type
               * @description Content type of the resource link
               * @default null
               */
              type: string | null;
          };
      } | null;
      /**
       * Maintainer
       * @description Details of the trigger maintainer
       * @default null
       */
      _maintainer: {
          /**
           * Display Name
           * @description Maintainer display name
           * @default null
           */
          displayName: string | null;
          /**
           * Id
           * @description Maintainer member ID
           * @default null
           */
          id: string | null;
          /**
           * Kind
           * @description Type of maintainer ref, e.g. 'agent'
           * @default null
           */
          kind: string | null;
          /**
           * Login
           * @description Maintainer login or email
           * @default null
           */
          login: string | null;
          /**
           * Picture
           * @description URL to maintainer's avatar picture
           * @default null
           */
          picture: string | null;
      } | null;
      /**
       *  Maintainer Id
       * @description ID of the trigger maintainer
       * @default null
       */
      _maintainerId: string | null;
      /**
       *  Recent Trigger Bodies
       * @description List of recent trigger request bodies
       * @default null
       */
      _recentTriggerBodies: {
          /**
           * Body
           * @description Payload of the trigger request
           * @default null
           */
          body: {
              [key: string]: unknown;
          } | null;
          /**
           * Timestamp
           * @description Timestamp of when trigger was requested
           * @default null
           */
          timestamp: number | null;
      }[] | null;
      /**
       *  Trigger Count
       * @description Number of times trigger has fired
       * @default null
       */
      _triggerCount: number | null;
      /**
       *  Version
       * @description Version number of the trigger
       * @default null
       */
      _version: number | null;
      /**
       * Enabled
       * @description Whether the trigger is currently enabled
       * @default null
       */
      enabled: boolean | null;
      /**
       * Instructions
       * @description Configured instructions for this trigger
       * @default null
       */
      instructions: {
          /**
           * Action
           * @description The action to perform when triggered: turnFlagOn or turnFlagOff
           * @enum {string}
           */
          action: "turnFlagOn" | "turnFlagOff";
          /**
           * Kind
           * @description Fixed value 'flag_action' indicating this is a flag action trigger
           * @constant
           */
          kind: "flag_action";
      }[] | null;
      /**
       * Trigger Url
       * @description Unguessable URL to invoke this trigger
       * @default null
       */
      triggerURL: string | null;
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
 * Type of LAUNCH_DARKLY's LAUNCH_DARKLY_DELETE_TRIGGER_WORKFLOW tool input.
 */
type LAUNCH_DARKLY_DELETE_TRIGGER_WORKFLOW_INPUT = {
  /**
   * Environment Key
   * @description The environment key, e.g., 'production' or 'staging'.
   */
  environment_key?: string;
  /**
   * Feature Flag Key
   * @description The key of the feature flag.
   */
  feature_flag_key?: string;
  /**
   * Id
   * @description The identifier of the trigger workflow to delete.
   */
  id?: string;
  /**
   * Project Key
   * @description The key of the LaunchDarkly project.
   */
  project_key?: string;
};

/**
 * Type of LAUNCH_DARKLY's LAUNCH_DARKLY_DELETE_TRIGGER_WORKFLOW tool output.
 */
type LAUNCH_DARKLY_DELETE_TRIGGER_WORKFLOW_OUTPUT = {
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
 * Type of LAUNCH_DARKLY's LAUNCH_DARKLY_GET_CUSTOM_ROLES tool input.
 */
type LAUNCH_DARKLY_GET_CUSTOM_ROLES_INPUT = {
  /**
   * Limit
   * @description Maximum number of custom roles to return. Defaults to 20.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of custom roles to skip before returning results. Defaults to 0.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of LAUNCH_DARKLY's LAUNCH_DARKLY_GET_CUSTOM_ROLES tool output.
 */
type LAUNCH_DARKLY_GET_CUSTOM_ROLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination and related resource links.
       * @default null
       */
      _links: {
          [key: string]: {
              /**
               * Href
               * @description URL of the resource.
               * @default null
               */
              href: string | null;
              /**
               * Type
               * @description Content type of the resource.
               * @default null
               */
              type: string | null;
          };
      } | null;
      /**
       * Items
       * @description Array of custom roles.
       */
      items: {
          /**
           *  Id
           * @description Unique identifier of the custom role.
           */
          _id: string;
          /**
           *  Links
           * @description Links to related resources.
           * @default null
           */
          _links: {
              [key: string]: {
                  /**
                   * Href
                   * @description URL of the resource.
                   * @default null
                   */
                  href: string | null;
                  /**
                   * Type
                   * @description Content type of the resource.
                   * @default null
                   */
                  type: string | null;
              };
          } | null;
          /**
           * AssignedTo
           * @description Counts of members and teams assigned to a custom role.
           * @default null
           */
          assignedTo: {
              /**
               * Members Count
               * @description Number of members assigned to this role.
               */
              membersCount: number;
              /**
               * Teams Count
               * @description Number of teams assigned to this role.
               */
              teamsCount: number;
          } | null;
          /**
           * Base Permissions
           * @description Legacy base permissions for the role, if any.
           * @default null
           */
          basePermissions: string | null;
          /**
           * Description
           * @description Description of the custom role, if any.
           * @default null
           */
          description: string | null;
          /**
           * Key
           * @description Key of the custom role.
           */
          key: string;
          /**
           * Name
           * @description Human-readable name of the custom role.
           */
          name: string;
          /**
           * Policy
           * @description Array of policy statements defining this custom role.
           * @default null
           */
          policy: {
              /**
               * Actions
               * @description Actions covered by the statement.
               */
              actions: string[];
              /**
               * Effect
               * @description The effect of the policy statement.
               * @enum {string}
               */
              effect: "allow" | "deny";
              /**
               * Not Actions
               * @description Actions excluded from the statement.
               * @default null
               */
              notActions: string[] | null;
              /**
               * Not Resources
               * @description Resources excluded from the statement.
               * @default null
               */
              notResources: string[] | null;
              /**
               * Resources
               * @description Resources to which the statement applies.
               */
              resources: string[];
          }[] | null;
          /**
           * Resource Category
           * @description Category of resources this role applies to.
           * @default null
           * @enum {string|null}
           */
          resourceCategory: "organization" | "project" | "any" | null;
      }[];
      /**
       * Total Count
       * @description Total number of custom roles available.
       */
      totalCount: number;
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
 * Type of LAUNCH_DARKLY's LAUNCH_DARKLY_GET_ENVIRONMENTS tool input.
 */
type LAUNCH_DARKLY_GET_ENVIRONMENTS_INPUT = {
  /**
   * Filter
   * @description Comma-separated list of filters in 'field:value' format.
   * @default null
   */
  filter: string | null;
  /**
   * Limit
   * @description Maximum number of environments to return per page. Defaults to 20.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of environments to skip. Defaults to 0.
   * @default null
   */
  offset: number | null;
  /**
   * Project Key
   * @description Key of the project.
   */
  project_key?: string;
  /**
   * Sort
   * @description Comma-separated list of fields to sort by. Prefix with '-' for descending.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of LAUNCH_DARKLY's LAUNCH_DARKLY_GET_ENVIRONMENTS tool output.
 */
type LAUNCH_DARKLY_GET_ENVIRONMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination and related resource links.
       * @default null
       */
      _links: {
          [key: string]: {
              /**
               * Href
               * @description URL of the related resource.
               */
              href: string;
              /**
               * Type
               * @description Content type of the related resource.
               * @default null
               */
              type: string | null;
          };
      } | null;
      /**
       * Items
       * @description Array of environment objects.
       */
      items: {
          /**
           *  Id
           * @description Unique identifier for the environment.
           */
          _id: string;
          /**
           * Api Key
           * @description API key for the environment.
           * @default null
           */
          apiKey: string | null;
          /**
           * Approval Settings
           * @description Approval settings for the environment.
           * @default null
           */
          approvalSettings: {
              [key: string]: unknown;
          } | null;
          /**
           * Color
           * @description Color associated with the environment.
           * @default null
           */
          color: string | null;
          /**
           * Confirm Changes
           * @description Whether changes require confirmation.
           * @default null
           */
          confirmChanges: boolean | null;
          /**
           * Default Track Events
           * @description Whether events are tracked by default.
           * @default null
           */
          defaultTrackEvents: boolean | null;
          /**
           * Default Ttl
           * @description Default time-to-live for environment data.
           * @default null
           */
          defaultTtl: number | null;
          /**
           * Key
           * @description Environment key.
           */
          key: string;
          /**
           * Mobile Key
           * @description Mobile SDK key for the environment.
           * @default null
           */
          mobileKey: string | null;
          /**
           * Name
           * @description Environment name.
           */
          name: string;
          /**
           * Require Comments
           * @description Whether comments are required for changes.
           * @default null
           */
          requireComments: boolean | null;
          /**
           * Secure Mode
           * @description Whether secure mode is enabled.
           * @default null
           */
          secureMode: boolean | null;
          /**
           * Tags
           * @description Tags associated with the environment.
           * @default null
           */
          tags: string[] | null;
      }[];
      /**
       * Total Count
       * @description Total number of environments available.
       */
      totalCount: number;
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
 * Type of LAUNCH_DARKLY's LAUNCH_DARKLY_LIST_CODE_REFERENCE_REPOSITORIES tool input.
 */
type LAUNCH_DARKLY_LIST_CODE_REFERENCE_REPOSITORIES_INPUT = {
  /**
   * Limit
   * @description Number of repositories to return per page.
   * @default 100
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of repositories to skip before starting to collect the result set.
   * @default 0
   */
  offset: number | null;
  /**
   * Project Key
   * @description Key of the LaunchDarkly project.
   */
  projectKey?: string;
};

/**
 * Type of LAUNCH_DARKLY's LAUNCH_DARKLY_LIST_CODE_REFERENCE_REPOSITORIES tool output.
 */
type LAUNCH_DARKLY_LIST_CODE_REFERENCE_REPOSITORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description Array of repository objects.
       */
      items: {
          /**
           * Created At
           * @description Timestamp when the repository was created (ISO 8601).
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the repository.
           */
          id: string;
          /**
           * Name
           * @description Human-friendly name of the repository.
           */
          name: string;
          /**
           * Provider Id
           * @description Provider ID of the repository.
           */
          providerId: string;
          /**
           * Type
           * @description Type of the repository (e.g., git).
           */
          type: string;
          /**
           * Updated At
           * @description Timestamp of last update (ISO 8601).
           */
          updatedAt: string;
          /**
           * Url
           * @description URL of the repository.
           */
          url: string;
      }[];
      /**
       * Links
       * @description Pagination links for the repository list.
       */
      links: {
          /**
           * First
           * @description URL of the first page.
           */
          first: string;
          /**
           * Last
           * @description URL of the last page.
           */
          last: string;
          /**
           * Next
           * @description URL of the next page, if any.
           * @default null
           */
          next: string | null;
          /**
           * Prev
           * @description URL of the previous page, if any.
           * @default null
           */
          prev: string | null;
          /**
           * Self
           * @description URL of the current page.
           */
          self: string;
      };
      /**
       * Total Count
       * @description Total number of repositories available, if provided by the API.
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
 * Type of LAUNCH_DARKLY's LAUNCH_DARKLY_LIST_PROJECTS tool input.
 */
type LAUNCH_DARKLY_LIST_PROJECTS_INPUT = {
  /**
   * Expand
   * @description Comma-separated list of properties to expand in each project.
   * @default null
   */
  expand: string | null;
  /**
   * Filter
   * @description Comma-separated list of filters in `field:value` format.
   * @default null
   */
  filter: string | null;
  /**
   * Limit
   * @description Number of projects to return. Defaults to the API default.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Starting index for pagination.
   * @default null
   */
  offset: number | null;
  /**
   * Sort
   * @description Comma-separated list of fields to sort by (prefix '-' for descending).
   * @default null
   */
  sort: string | null;
};

/**
 * Type of LAUNCH_DARKLY's LAUNCH_DARKLY_LIST_PROJECTS tool output.
 */
type LAUNCH_DARKLY_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Pagination links.
       * @default null
       */
      _links: {
          [key: string]: {
              /**
               * Href
               * @description URL of the related resource.
               * @default null
               */
              href: string | null;
              /**
               * Type
               * @description Content type of the related resource.
               * @default null
               */
              type: string | null;
          };
      } | null;
      /**
       * Items
       * @description Array of project objects.
       */
      items: {
          /**
           * Access
           * @description Allowed and denied actions on a resource.
           * @default null
           */
          _access: {
              /**
               * Allowed
               * @description Actions allowed on the resource.
               * @default null
               */
              allowed: string[] | null;
              /**
               * Denied
               * @description Actions denied on the resource.
               * @default null
               */
              denied: string[] | null;
          } | null;
          /**
           *  Id
           * @description Unique identifier of the project.
           */
          _id: string;
          /**
           *  Links
           * @description Links to related resources.
           * @default null
           */
          _links: {
              [key: string]: {
                  /**
                   * Href
                   * @description URL of the related resource.
                   * @default null
                   */
                  href: string | null;
                  /**
                   * Type
                   * @description Content type of the related resource.
                   * @default null
                   */
                  type: string | null;
              };
          } | null;
          /**
           * Default Release Pipeline Key
           * @description Default release pipeline key.
           * @default null
           */
          defaultReleasePipelineKey: string | null;
          /**
           * ProjectEnvironments
           * @description Paginated list of environments within a project.
           * @default null
           */
          environments: {
              /**
               *  Links
               * @description Pagination links.
               * @default null
               */
              _links: {
                  [key: string]: {
                      /**
                       * Href
                       * @description URL of the related resource.
                       * @default null
                       */
                      href: string | null;
                      /**
                       * Type
                       * @description Content type of the related resource.
                       * @default null
                       */
                      type: string | null;
                  };
              } | null;
              /**
               * Items
               * @description List of environment objects.
               */
              items: {
                  /**
                   *  Id
                   * @description Unique identifier for the environment.
                   */
                  _id: string;
                  /**
                   * Api Key
                   * @description SDK key for the environment.
                   * @default null
                   */
                  apiKey: string | null;
                  /**
                   * Approval Settings
                   * @description Approval settings for the environment.
                   * @default null
                   */
                  approvalSettings: {
                      [key: string]: unknown;
                  } | null;
                  /**
                   * Color
                   * @description Color code.
                   * @default null
                   */
                  color: string | null;
                  /**
                   * Confirm Changes
                   * @description Whether changes require confirmation.
                   * @default null
                   */
                  confirmChanges: boolean | null;
                  /**
                   * Default Track Events
                   * @description Whether events are tracked by default.
                   * @default null
                   */
                  defaultTrackEvents: boolean | null;
                  /**
                   * Default Ttl
                   * @description Default time-to-live for environment data.
                   * @default null
                   */
                  defaultTtl: number | null;
                  /**
                   * Key
                   * @description Environment key.
                   */
                  key: string;
                  /**
                   * Mobile Key
                   * @description Mobile SDK key.
                   * @default null
                   */
                  mobileKey: string | null;
                  /**
                   * Name
                   * @description Environment name.
                   */
                  name: string;
                  /**
                   * Require Comments
                   * @description Whether comments are required for changes.
                   * @default null
                   */
                  requireComments: boolean | null;
                  /**
                   * Secure Mode
                   * @description Whether secure mode is enabled.
                   * @default null
                   */
                  secureMode: boolean | null;
                  /**
                   * Tags
                   * @description Tags associated with the environment.
                   * @default null
                   */
                  tags: string[] | null;
              }[];
              /**
               * Total Count
               * @description Total number of environments available.
               */
              totalCount: number;
          } | null;
          /**
           * Include In Snippet By Default
           * @description Whether flags are available to the client-side SDK by default.
           * @default null
           */
          includeInSnippetByDefault: boolean | null;
          /**
           * Key
           * @description Project key.
           */
          key: string;
          /**
           * Name
           * @description Project name.
           */
          name: string;
          /**
           * Tags
           * @description Tags associated with the project.
           * @default null
           */
          tags: string[] | null;
      }[];
      /**
       * Total Count
       * @description Total number of projects available.
       */
      totalCount: number;
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
 * Type of LAUNCH_DARKLY's LAUNCH_DARKLY_LIST_TEAMS tool input.
 */
type LAUNCH_DARKLY_LIST_TEAMS_INPUT = object;

/**
 * Type of LAUNCH_DARKLY's LAUNCH_DARKLY_LIST_TEAMS tool output.
 */
type LAUNCH_DARKLY_LIST_TEAMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description Array of team objects with key and name.
       */
      items: {
          /**
           * Key
           * @description Unique key of the team.
           */
          key: string;
          /**
           * Name
           * @description Human-friendly name of the team.
           * @default null
           */
          name: string | null;
      }[];
      /**
       * Total Count
       * @description Total number of teams available.
       */
      totalCount: number;
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
 * Type map of all available tool input types for toolkit "LAUNCH_DARKLY".
 */
export type LAUNCH_DARKLY_TOOL_INPUTS = {
  CREATE_TRIGGER_WORKFLOW: LAUNCH_DARKLY_CREATE_TRIGGER_WORKFLOW_INPUT
  DELETE_TRIGGER_WORKFLOW: LAUNCH_DARKLY_DELETE_TRIGGER_WORKFLOW_INPUT
  GET_CUSTOM_ROLES: LAUNCH_DARKLY_GET_CUSTOM_ROLES_INPUT
  GET_ENVIRONMENTS: LAUNCH_DARKLY_GET_ENVIRONMENTS_INPUT
  LIST_CODE_REFERENCE_REPOSITORIES: LAUNCH_DARKLY_LIST_CODE_REFERENCE_REPOSITORIES_INPUT
  LIST_PROJECTS: LAUNCH_DARKLY_LIST_PROJECTS_INPUT
  LIST_TEAMS: LAUNCH_DARKLY_LIST_TEAMS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "LAUNCH_DARKLY".
 */
export type LAUNCH_DARKLY_TOOL_OUTPUTS = {
  CREATE_TRIGGER_WORKFLOW: LAUNCH_DARKLY_CREATE_TRIGGER_WORKFLOW_OUTPUT
  DELETE_TRIGGER_WORKFLOW: LAUNCH_DARKLY_DELETE_TRIGGER_WORKFLOW_OUTPUT
  GET_CUSTOM_ROLES: LAUNCH_DARKLY_GET_CUSTOM_ROLES_OUTPUT
  GET_ENVIRONMENTS: LAUNCH_DARKLY_GET_ENVIRONMENTS_OUTPUT
  LIST_CODE_REFERENCE_REPOSITORIES: LAUNCH_DARKLY_LIST_CODE_REFERENCE_REPOSITORIES_OUTPUT
  LIST_PROJECTS: LAUNCH_DARKLY_LIST_PROJECTS_OUTPUT
  LIST_TEAMS: LAUNCH_DARKLY_LIST_TEAMS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's LAUNCH_DARKLY toolkit.
 */
export const LAUNCH_DARKLY = {
  slug: "launch_darkly",
  tools: {
    /**
     * Tool to create a flag trigger workflow. use when setting up an automated trigger to toggle a flag in a specific environment.
     */
    CREATE_TRIGGER_WORKFLOW: "LAUNCH_DARKLY_CREATE_TRIGGER_WORKFLOW",
    /**
     * Tool to delete a specific flag trigger workflow. use after confirming the project key, feature flag key, environment key, and trigger workflow id.
     */
    DELETE_TRIGGER_WORKFLOW: "LAUNCH_DARKLY_DELETE_TRIGGER_WORKFLOW",
    /**
     * Tool to retrieve a list of all custom roles. use when you need to list roles for permissions audits or configuration reviews. note: results are paginated.
     */
    GET_CUSTOM_ROLES: "LAUNCH_DARKLY_GET_CUSTOM_ROLES",
    /**
     * Tool to retrieve a list of all environments within a project. use after confirming the project key; supports pagination.
     */
    GET_ENVIRONMENTS: "LAUNCH_DARKLY_GET_ENVIRONMENTS",
    /**
     * Tool to list code reference repositories. use when retrieving repositories for a specific project; includes pagination.
     */
    LIST_CODE_REFERENCE_REPOSITORIES: "LAUNCH_DARKLY_LIST_CODE_REFERENCE_REPOSITORIES",
    /**
     * Tool to retrieve a list of all projects. use after confirming credentials to enumerate project keys and metadata.
     */
    LIST_PROJECTS: "LAUNCH_DARKLY_LIST_PROJECTS",
    /**
     * Tool to list all teams in launchdarkly. use after confirming credentials; supports pagination internally.
     */
    LIST_TEAMS: "LAUNCH_DARKLY_LIST_TEAMS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "LAUNCH_DARKLY".
 */
export type LAUNCH_DARKLY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "LAUNCH_DARKLY".
 */
export type LAUNCH_DARKLY_TRIGGER_EVENTS = {}
