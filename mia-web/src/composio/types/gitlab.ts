// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GITLAB's GITLAB_ARCHIVE_PROJECT tool input.
 */
type GITLAB_ARCHIVE_PROJECT_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project to archive.
   */
  id?: number | null;
};

/**
 * Type of GITLAB's GITLAB_ARCHIVE_PROJECT tool output.
 */
type GITLAB_ARCHIVE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @default null
       */
      archived: boolean | null;
      /**
       * Avatar Url
       * @default null
       */
      avatar_url: string | null;
      /**
       * Container Registry Enabled
       * @default null
       */
      container_registry_enabled: boolean | null;
      /**
       * Created At
       * @default null
       */
      created_at: string | null;
      /**
       * Creator Id
       * @default null
       */
      creator_id: number | null;
      /**
       * Default Branch
       * @default null
       */
      default_branch: string | null;
      /**
       * Description
       * @default null
       */
      description: string | null;
      /**
       * Forks Count
       * @default null
       */
      forks_count: number | null;
      /**
       * Http Url To Repo
       * @default null
       */
      http_url_to_repo: string | null;
      /** Id */
      id: number;
      /**
       * Issues Enabled
       * @default null
       */
      issues_enabled: boolean | null;
      /**
       * Jobs Enabled
       * @default null
       */
      jobs_enabled: boolean | null;
      /**
       * Last Activity At
       * @default null
       */
      last_activity_at: string | null;
      /**
       * Merge Requests Enabled
       * @default null
       */
      merge_requests_enabled: boolean | null;
      /**
       * Name
       * @default null
       */
      name: string | null;
      /**
       * Name With Namespace
       * @default null
       */
      name_with_namespace: string | null;
      /**
       * ProjectNamespace
       * @default null
       */
      namespace: {
          /**
           * Avatar Url
           * @default null
           */
          avatar_url: string | null;
          /**
           * Full Path
           * @default null
           */
          full_path: string | null;
          /** Id */
          id: number;
          /** Kind */
          kind: string;
          /** Name */
          name: string;
          /**
           * Parent Id
           * @default null
           */
          parent_id: number | null;
          /** Path */
          path: string;
          /**
           * Web Url
           * @default null
           */
          web_url: string | null;
      } | null;
      /**
       * Open Issues Count
       * @default null
       */
      open_issues_count: number | null;
      /**
       * Path
       * @default null
       */
      path: string | null;
      /**
       * Path With Namespace
       * @default null
       */
      path_with_namespace: string | null;
      /**
       * Public Jobs
       * @default null
       */
      public_jobs: boolean | null;
      /**
       * Request Access Enabled
       * @default null
       */
      request_access_enabled: boolean | null;
      /**
       * Shared Runners Enabled
       * @default null
       */
      shared_runners_enabled: boolean | null;
      /**
       * Shared With Groups
       * @default null
       */
      shared_with_groups: {
          /**
           * Expires At
           * @default null
           */
          expires_at: string | null;
          /** Group Access Level */
          group_access_level: number;
          /** Group Full Path */
          group_full_path: string;
          /** Group Id */
          group_id: number;
          /** Group Name */
          group_name: string;
      }[] | null;
      /**
       * Snippets Enabled
       * @default null
       */
      snippets_enabled: boolean | null;
      /**
       * Ssh Url To Repo
       * @default null
       */
      ssh_url_to_repo: string | null;
      /**
       * Star Count
       * @default null
       */
      star_count: number | null;
      /**
       * Tag List
       * @description Deprecated, use `topics` instead
       * @default null
       */
      tag_list: string[] | null;
      /**
       * Topics
       * @default null
       */
      topics: string[] | null;
      /**
       * Visibility
       * @default null
       */
      visibility: string | null;
      /**
       * Web Url
       * @default null
       */
      web_url: string | null;
      /**
       * Wiki Enabled
       * @default null
       */
      wiki_enabled: boolean | null;
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
 * Type of GITLAB's GITLAB_CREATE_GROUP tool input.
 */
type GITLAB_CREATE_GROUP_INPUT = {
  /**
   * Auto Devops Enabled
   * @description Default to Auto DevOps pipeline for all projects within this group.
   * @default null
   */
  auto_devops_enabled: boolean | null;
  /**
   * Avatar
   * @description Image file for avatar of the group.
   * @default null
   */
  avatar: string | null;
  /**
   * Default Branch
   * @description The default branch name for group’s projects.
   * @default null
   */
  default_branch: string | null;
  /**
   * Default Branch Protection Defaults
   * @description Options for default_branch_protection_defaults. E.g. {"allowed_to_push": [{"access_level":40}], "allow_force_push": False, "allowed_to_merge": [{"access_level":40}], "developer_can_initial_push": False}
   * @default null
   */
  default_branch_protection_defaults: {
      [key: string]: string;
  } | null;
  /**
   * Description
   * @description The group’s description.
   * @default null
   */
  description: string | null;
  /**
   * Duo Availability
   * @description Duo availability setting. Note: In the UI, never_on is displayed as "Always Off".
   * @default null
   * @enum {string|null}
   */
  duo_availability: "default_on" | "default_off" | "never_on" | null;
  /**
   * Emails Enabled
   * @description Enable email notifications.
   * @default null
   */
  emails_enabled: boolean | null;
  /**
   * Enabled Git Access Protocol
   * @description Enabled protocols for Git access.
   * @default null
   * @enum {string|null}
   */
  enabled_git_access_protocol: "ssh" | "http" | "all" | null;
  /**
   * Experiment Features Enabled
   * @description Enable experiment features for this group.
   * @default null
   */
  experiment_features_enabled: boolean | null;
  /**
   * Extra Shared Runners Minutes Limit
   * @description Can be set by administrators only. Additional compute minutes for this group. GitLab Self-Managed, Premium and Ultimate only.
   * @default null
   */
  extra_shared_runners_minutes_limit: number | null;
  /**
   * Lfs Enabled
   * @description Enable/disable Large File Storage (LFS) for the projects in this group.
   * @default null
   */
  lfs_enabled: boolean | null;
  /**
   * Membership Lock
   * @description Users cannot be added to projects in this group. Premium and Ultimate only.
   * @default null
   */
  membership_lock: boolean | null;
  /**
   * Mentions Disabled
   * @description Disable the capability of a group from getting mentioned.
   * @default null
   */
  mentions_disabled: boolean | null;
  /**
   * Name
   * @description The name of the group.
   */
  name?: string;
  /**
   * Organization Id
   * @description The organization ID for the group.
   * @default null
   */
  organization_id: number | null;
  /**
   * Parent Id
   * @description The parent group ID for creating nested group.
   * @default null
   */
  parent_id: number | null;
  /**
   * Path
   * @description The path of the group.
   */
  path?: string;
  /**
   * Project Creation Level
   * @description Determine if developers can create projects in the group.
   * @default null
   * @enum {string|null}
   */
  project_creation_level: "administrator" | "noone" | "maintainer" | "developer" | null;
  /**
   * Request Access Enabled
   * @description Allow users to request member access.
   * @default null
   */
  request_access_enabled: boolean | null;
  /**
   * Require Two Factor Authentication
   * @description Require all users in this group to set up two-factor authentication.
   * @default null
   */
  require_two_factor_authentication: boolean | null;
  /**
   * Share With Group Lock
   * @description Prevent sharing a project with another group within this group.
   * @default null
   */
  share_with_group_lock: boolean | null;
  /**
   * Shared Runners Minutes Limit
   * @description Can be set by administrators only. Maximum number of monthly compute minutes for this group. Can be nil (default; inherit system default), 0 (unlimited), or > 0. GitLab Self-Managed, Premium and Ultimate only.
   * @default null
   */
  shared_runners_minutes_limit: number | null;
  /**
   * Subgroup Creation Level
   * @description Allowed to create subgroups.
   * @default null
   * @enum {string|null}
   */
  subgroup_creation_level: "owner" | "maintainer" | null;
  /**
   * Two Factor Grace Period
   * @description Time before Two-factor authentication is enforced (in hours).
   * @default null
   */
  two_factor_grace_period: number | null;
  /**
   * Visibility
   * @description The group’s visibility.
   * @default null
   * @enum {string|null}
   */
  visibility: "private" | "internal" | "public" | null;
  /**
   * Wiki Access Level
   * @description The wiki access level. Premium and Ultimate only.
   * @default null
   * @enum {string|null}
   */
  wiki_access_level: "disabled" | "private" | "enabled" | null;
};

/**
 * Type of GITLAB's GITLAB_CREATE_GROUP tool output.
 */
type GITLAB_CREATE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp.
       */
      created_at: string;
      /**
       * Description
       * @description Description of the group.
       * @default null
       */
      description: string | null;
      /**
       * Full Name
       * @description Full name of the group.
       */
      full_name: string;
      /**
       * Full Path
       * @description Full path of the group.
       */
      full_path: string;
      /**
       * Id
       * @description ID of the created group.
       */
      id: number;
      /**
       * Name
       * @description Name of the created group.
       */
      name: string;
      /**
       * Parent Id
       * @description Parent ID of the group.
       * @default null
       */
      parent_id: number | null;
      /**
       * Path
       * @description Path of the created group.
       */
      path: string;
      /**
       * Request Access Enabled
       * @description Whether request access is enabled.
       */
      request_access_enabled: boolean;
      /**
       * Visibility
       * @description Visibility of the group.
       */
      visibility: string;
      /**
       * Web Url
       * @description Web URL of the group.
       */
      web_url: string;
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
 * Type of GITLAB's GITLAB_CREATE_PROJECT tool input.
 */
type GITLAB_CREATE_PROJECT_INPUT = {
  /**
   * Build Git Strategy
   * @description Git strategy for builds.
   * @default null
   */
  build_git_strategy: string | null;
  /**
   * Container Registry Enabled
   * @description Enable container registry.
   * @default null
   */
  container_registry_enabled: boolean | null;
  /**
   * Default Branch
   * @description The default branch name.
   * @default null
   */
  default_branch: string | null;
  /**
   * Description
   * @description Project description.
   * @default null
   */
  description: string | null;
  /**
   * Issues Enabled
   * @description Enable issues feature.
   * @default null
   */
  issues_enabled: boolean | null;
  /**
   * Merge Requests Enabled
   * @description Enable merge requests feature.
   * @default null
   */
  merge_requests_enabled: boolean | null;
  /**
   * Name
   * @description The name of the project.
   */
  name?: string;
  /**
   * Namespace Id
   * @description The namespace (group or user ID) under which to create the project.
   * @default null
   */
  namespace_id: number | null;
  /**
   * Path
   * @description The path or URL-friendly name for the project.
   */
  path?: string;
  /**
   * Snippets Enabled
   * @description Enable snippets feature.
   * @default null
   */
  snippets_enabled: boolean | null;
  /**
   * Visibility
   * @description Project visibility.
   * @default null
   * @enum {string|null}
   */
  visibility: "private" | "internal" | "public" | null;
  /**
   * Wiki Enabled
   * @description Enable wiki feature.
   * @default null
   */
  wiki_enabled: boolean | null;
};

/**
 * Type of GITLAB's GITLAB_CREATE_PROJECT tool output.
 */
type GITLAB_CREATE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Archived
       * @default null
       */
      archived: boolean | null;
      /**
       * Avatar Url
       * @default null
       */
      avatar_url: string | null;
      /**
       * Container Registry Enabled
       * @default null
       */
      container_registry_enabled: boolean | null;
      /**
       * Created At
       * @default null
       */
      created_at: string | null;
      /**
       * Creator Id
       * @default null
       */
      creator_id: number | null;
      /**
       * Default Branch
       * @default null
       */
      default_branch: string | null;
      /**
       * Description
       * @default null
       */
      description: string | null;
      /**
       * Forks Count
       * @default null
       */
      forks_count: number | null;
      /**
       * Http Url To Repo
       * @default null
       */
      http_url_to_repo: string | null;
      /** Id */
      id: number;
      /**
       * Issues Enabled
       * @default null
       */
      issues_enabled: boolean | null;
      /**
       * Jobs Enabled
       * @default null
       */
      jobs_enabled: boolean | null;
      /**
       * Last Activity At
       * @default null
       */
      last_activity_at: string | null;
      /**
       * Merge Requests Enabled
       * @default null
       */
      merge_requests_enabled: boolean | null;
      /**
       * Name
       * @default null
       */
      name: string | null;
      /**
       * Name With Namespace
       * @default null
       */
      name_with_namespace: string | null;
      /**
       * ProjectNamespace
       * @default null
       */
      namespace: {
          /**
           * Avatar Url
           * @default null
           */
          avatar_url: string | null;
          /**
           * Full Path
           * @default null
           */
          full_path: string | null;
          /** Id */
          id: number;
          /** Kind */
          kind: string;
          /** Name */
          name: string;
          /**
           * Parent Id
           * @default null
           */
          parent_id: number | null;
          /** Path */
          path: string;
          /**
           * Web Url
           * @default null
           */
          web_url: string | null;
      } | null;
      /**
       * Open Issues Count
       * @default null
       */
      open_issues_count: number | null;
      /**
       * Path
       * @default null
       */
      path: string | null;
      /**
       * Path With Namespace
       * @default null
       */
      path_with_namespace: string | null;
      /**
       * Public Jobs
       * @default null
       */
      public_jobs: boolean | null;
      /**
       * Request Access Enabled
       * @default null
       */
      request_access_enabled: boolean | null;
      /**
       * Shared Runners Enabled
       * @default null
       */
      shared_runners_enabled: boolean | null;
      /**
       * Shared With Groups
       * @default null
       */
      shared_with_groups: {
          /**
           * Expires At
           * @default null
           */
          expires_at: string | null;
          /** Group Access Level */
          group_access_level: number;
          /** Group Full Path */
          group_full_path: string;
          /** Group Id */
          group_id: number;
          /** Group Name */
          group_name: string;
      }[] | null;
      /**
       * Snippets Enabled
       * @default null
       */
      snippets_enabled: boolean | null;
      /**
       * Ssh Url To Repo
       * @default null
       */
      ssh_url_to_repo: string | null;
      /**
       * Star Count
       * @default null
       */
      star_count: number | null;
      /**
       * Tag List
       * @description Deprecated, use `topics` instead
       * @default null
       */
      tag_list: string[] | null;
      /**
       * Topics
       * @default null
       */
      topics: string[] | null;
      /**
       * Visibility
       * @default null
       */
      visibility: string | null;
      /**
       * Web Url
       * @default null
       */
      web_url: string | null;
      /**
       * Wiki Enabled
       * @default null
       */
      wiki_enabled: boolean | null;
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
 * Type of GITLAB's GITLAB_CREATE_PROJECT_ISSUE tool input.
 */
type GITLAB_CREATE_PROJECT_ISSUE_INPUT = {
  /**
   * Assignee Id
   * @description The ID of the user to assign the issue to. Only appears on GitLab Free.
   * @default null
   */
  assignee_id: number | null;
  /**
   * Assignee Ids
   * @description The IDs of the users to assign the issue to. Premium and Ultimate only.
   * @default null
   */
  assignee_ids: number[] | null;
  /**
   * Confidential
   * @description Set an issue to be confidential. Default is false.
   * @default false
   */
  confidential: boolean | null;
  /**
   * Created At
   * @description When the issue was created. Date time string, ISO 8601 formatted, for example `2016-03-11T03:45:40Z`. Requires administrator or project/group owner rights.
   * @default null
   */
  created_at: string | null;
  /**
   * Description
   * @description The description of an issue. Limited to 1,048,576 characters.
   * @default null
   */
  description: string | null;
  /**
   * Discussion To Resolve
   * @description The ID of a discussion to resolve. This fills out the issue with a default description and mark the discussion as resolved. Use in combination with `merge_request_to_resolve_discussions_of`.
   * @default null
   */
  discussion_to_resolve: string | null;
  /**
   * Due Date
   * @description The due date. Date time string in the format `YYYY-MM-DD`, for example `2016-03-11`.
   * @default null
   */
  due_date: string | null;
  /**
   * Epic Id
   * @description ID of the epic to add the issue to. Valid values are greater than or equal to 0. Premium and Ultimate only.
   * @default null
   */
  epic_id: number | null;
  /**
   * Epic Iid
   * @description IID of the epic to add the issue to. Valid values are greater than or equal to 0. (deprecated, scheduled for removal in API version 5). Premium and Ultimate only.
   * @default null
   */
  epic_iid: number | null;
  /**
   * Id
   * @description The global ID or URL-encoded path of the project.
   */
  id?: string;
  /**
   * Iid
   * @description The internal ID of the project’s issue (requires administrator or project owner rights).
   * @default null
   */
  iid: number | null;
  /**
   * Issue Type
   * @description The type of issue. One of `issue`, `incident`, `test_case` or `task`. Default is `issue`.
   * @default issue
   * @enum {string|null}
   */
  issue_type: "issue" | "incident" | "test_case" | "task" | null;
  /**
   * Labels
   * @description Comma-separated label names to assign to the new issue. If a label does not already exist, this creates a new project label and assigns it to the issue.
   * @default null
   */
  labels: string | null;
  /**
   * Merge Request To Resolve Discussions Of
   * @description The IID of a merge request in which to resolve all issues. This fills out the issue with a default description and mark all discussions as resolved. When passing a description or title, these values take precedence over the default values.
   * @default null
   */
  merge_request_to_resolve_discussions_of: number | null;
  /**
   * Milestone Id
   * @description The global ID of a milestone to assign issue. To find the `milestone_id` associated with a milestone, view an issue with the milestone assigned and use the API to retrieve the issue’s details.
   * @default null
   */
  milestone_id: number | null;
  /**
   * Title
   * @description The title of an issue.
   */
  title?: string;
  /**
   * Weight
   * @description The weight of the issue. Valid values are greater than or equal to 0. Premium and Ultimate only.
   * @default null
   */
  weight: number | null;
};

/**
 * Type of GITLAB's GITLAB_CREATE_PROJECT_ISSUE tool output.
 */
type GITLAB_CREATE_PROJECT_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       *  Links
       * @description Links related to the issue.
       */
      _links: {
          [key: string]: unknown;
      };
      /**
       * Assignee
       * @description The assignee of the issue (deprecated).
       * @default null
       */
      assignee: {
          [key: string]: unknown;
      } | null;
      /**
       * Assignees
       * @description List of assignees.
       */
      assignees: {
          [key: string]: unknown;
      }[];
      /**
       * Author
       * @description The author of the issue.
       */
      author: {
          [key: string]: unknown;
      };
      /**
       * Closed At
       * @description Timestamp of when the issue was closed.
       * @default null
       */
      closed_at: string | null;
      /**
       * Closed By
       * @description User who closed the issue.
       * @default null
       */
      closed_by: {
          [key: string]: unknown;
      } | null;
      /**
       * Created At
       * @description Timestamp of when the issue was created.
       */
      created_at: string;
      /**
       * Description
       * @description The description of the issue.
       * @default null
       */
      description: string | null;
      /**
       * Discussion Locked
       * @description Indicates if discussion on the issue is locked.
       * @default null
       */
      discussion_locked: boolean | null;
      /**
       * Downvotes
       * @description Number of downvotes.
       */
      downvotes: number;
      /**
       * Due Date
       * @description Due date of the issue.
       * @default null
       */
      due_date: string | null;
      /**
       * Epic
       * @description Epic associated with the issue.
       * @default null
       */
      epic: {
          [key: string]: unknown;
      } | null;
      /**
       * Health Status
       * @description Health status of the issue.
       * @default null
       */
      health_status: string | null;
      /**
       * Id
       * @description The ID of the issue.
       */
      id: number;
      /**
       * Iid
       * @description The internal ID of the issue.
       */
      iid: number;
      /**
       * Labels
       * @description List of labels assigned to the issue.
       */
      labels: string[];
      /**
       * Merge Requests Count
       * @description Number of merge requests related to the issue.
       */
      merge_requests_count: number;
      /**
       * Milestone
       * @description Milestone assigned to the issue.
       * @default null
       */
      milestone: {
          [key: string]: unknown;
      } | null;
      /**
       * Project Id
       * @description The ID of the project the issue belongs to.
       */
      project_id: number;
      /**
       * References
       * @description References related to the issue.
       */
      references: {
          [key: string]: unknown;
      };
      /**
       * Severity
       * @description Severity of the issue.
       */
      severity: string;
      /**
       * State
       * @description The state of the issue (e.g., opened, closed).
       */
      state: string;
      /**
       * Subscribed
       * @description Indicates if the user is subscribed to the issue.
       */
      subscribed: boolean;
      /**
       * Task Completion Status
       * @description Task completion status.
       */
      task_completion_status: {
          [key: string]: unknown;
      };
      /**
       * Time Stats
       * @description Time tracking statistics for the issue.
       */
      time_stats: {
          [key: string]: unknown;
      };
      /**
       * Title
       * @description The title of the issue.
       */
      title: string;
      /**
       * Type
       * @description The type of the issue.
       */
      type: string;
      /**
       * Updated At
       * @description Timestamp of when the issue was last updated.
       */
      updated_at: string;
      /**
       * Upvotes
       * @description Number of upvotes.
       */
      upvotes: number;
      /**
       * User Notes Count
       * @description Number of user notes on the issue.
       */
      user_notes_count: number;
      /**
       * Web Url
       * @description URL of the issue.
       */
      web_url: string;
      /**
       * Weight
       * @description Weight of the issue.
       * @default null
       */
      weight: number | null;
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
 * Type of GITLAB's GITLAB_CREATE_REPOSITORY_BRANCH tool input.
 */
type GITLAB_CREATE_REPOSITORY_BRANCH_INPUT = {
  /**
   * Branch Name
   * @description The name of the new branch.
   */
  branch_name?: string;
  /**
   * Project Id
   * @description The ID or URL-encoded path of the project.
   */
  project_id?: number | null;
  /**
   * Ref
   * @description The branch name or commit SHA to create the new branch from.
   */
  ref?: string;
};

/**
 * Type of GITLAB's GITLAB_CREATE_REPOSITORY_BRANCH tool output.
 */
type GITLAB_CREATE_REPOSITORY_BRANCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Can Push
       * @description Indicates if the current user can push to this branch.
       * @default null
       */
      can_push: boolean | null;
      /**
       * Commit
       * @description Details of the commit the branch points to.
       * @default null
       */
      commit: {
          /**
           * Author Email
           * @description Commit author email
           * @default null
           */
          author_email: string | null;
          /**
           * Author Name
           * @description Commit author name
           * @default null
           */
          author_name: string | null;
          /**
           * Authored Date
           * @description Commit authored timestamp
           * @default null
           */
          authored_date: string | null;
          /**
           * Committed Date
           * @description Commit timestamp
           * @default null
           */
          committed_date: string | null;
          /**
           * Committer Email
           * @description Committer email
           * @default null
           */
          committer_email: string | null;
          /**
           * Committer Name
           * @description Committer name
           * @default null
           */
          committer_name: string | null;
          /**
           * Created At
           * @description Commit creation timestamp
           * @default null
           */
          created_at: string | null;
          /**
           * Id
           * @description Commit ID
           * @default null
           */
          id: string | null;
          /**
           * Message
           * @description Commit message
           * @default null
           */
          message: string | null;
          /**
           * Parent Ids
           * @description List of parent commit IDs
           * @default null
           */
          parent_ids: string[] | null;
          /**
           * Short Id
           * @description Short commit ID
           * @default null
           */
          short_id: string | null;
          /**
           * Title
           * @description Commit title
           * @default null
           */
          title: string | null;
          /**
           * Trailers
           * @description Commit trailers
           * @default null
           */
          trailers: {
              [key: string]: string;
          } | null;
          /**
           * Web Url
           * @description URL to the commit on GitLab
           * @default null
           */
          web_url: string | null;
      } | null;
      /**
       * Default
       * @description Indicates if this is the default branch.
       * @default null
       */
      default: boolean | null;
      /**
       * Developers Can Merge
       * @description Indicates if developers can merge this branch.
       * @default null
       */
      developers_can_merge: boolean | null;
      /**
       * Developers Can Push
       * @description Indicates if developers can push to this branch.
       * @default null
       */
      developers_can_push: boolean | null;
      /**
       * Merged
       * @description Indicates if the branch has been merged.
       * @default null
       */
      merged: boolean | null;
      /**
       * Name
       * @description The name of the branch.
       * @default null
       */
      name: string | null;
      /**
       * Protected
       * @description Indicates if the branch is protected.
       * @default null
       */
      protected: boolean | null;
      /**
       * Web Url
       * @description The URL to the branch on the GitLab web interface.
       * @default null
       */
      web_url: string | null;
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
 * Type of GITLAB's GITLAB_DELETE_PROJECT tool input.
 */
type GITLAB_DELETE_PROJECT_INPUT = {
  /**
   * Full Path
   * @description The full path of the project (e.g., namespace/project_name). Used with `permanently_remove=true` for immediate deletion. Available in GitLab Free from 18.0 (previously Premium/Ultimate only since 15.11).
   * @default null
   */
  full_path: string | null;
  /**
   * Id
   * @description The ID or URL-encoded path of the project to be deleted.
   */
  id?: number | null;
  /**
   * Permanently Remove
   * @description If true, the project is deleted immediately. Otherwise, it is marked for deletion and removed after a retention period. Available in GitLab Free from 18.0 (previously Premium/Ultimate only since 15.11).
   * @default null
   */
  permanently_remove: boolean | null;
};

/**
 * Type of GITLAB's GITLAB_DELETE_PROJECT tool output.
 */
type GITLAB_DELETE_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the status of the deletion.
       * @default null
       */
      message: string | null;
      /**
       * Status Code
       * @description HTTP status code of the response.
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
 * Type of GITLAB's GITLAB_DOWNLOAD_PROJECT_AVATAR tool input.
 */
type GITLAB_DOWNLOAD_PROJECT_AVATAR_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project whose avatar to download.
   */
  id?: string;
};

/**
 * Type of GITLAB's GITLAB_DOWNLOAD_PROJECT_AVATAR tool output.
 */
type GITLAB_DOWNLOAD_PROJECT_AVATAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Binary content of the project avatar image.
       */
      content: string;
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
 * Type of GITLAB's GITLAB_ERASE_JOB tool input.
 */
type GITLAB_ERASE_JOB_INPUT = {
  /**
   * Job Id
   * @description The ID of the job to be erased.
   */
  job_id?: number;
  /**
   * Project Id
   * @description The ID or URL-encoded path of the project.
   */
  project_id?: number | null;
};

/**
 * Type of GITLAB's GITLAB_ERASE_JOB tool output.
 */
type GITLAB_ERASE_JOB_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description The creation date of the job.
       */
      created_at: string;
      /**
       * Duration
       * @description The duration of the job in seconds.
       * @default null
       */
      duration: number | null;
      /**
       * Erased At
       * @description The erase date of the job.
       * @default null
       */
      erased_at: string | null;
      /**
       * Finished At
       * @description The finish date of the job.
       * @default null
       */
      finished_at: string | null;
      /**
       * Id
       * @description The ID of the job.
       */
      id: number;
      /**
       * Name
       * @description The name of the job.
       */
      name: string;
      /**
       * Queued Duration
       * @description The queued duration of the job in seconds.
       * @default null
       */
      queued_duration: number | null;
      /**
       * Stage
       * @description The stage of the job.
       */
      stage: string;
      /**
       * Status
       * @description The status of the job.
       */
      status: string;
      /**
       * Web Url
       * @description The web URL of the job.
       */
      web_url: string;
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
 * Type of GITLAB's GITLAB_GET_COMMIT_REFS tool input.
 */
type GITLAB_GET_COMMIT_REFS_INPUT = {
  /**
   * Project Id
   * @description The ID or URL-encoded path of the project.
   */
  project_id?: number | null;
  /**
   * Ref Type
   * @description The scope of commits to list. Possible values are `branch`, `tag`, or `all`.
   * @default all
   * @enum {string|null}
   */
  ref_type: "branch" | "tag" | "all" | null;
  /**
   * Sha
   * @description The commit hash.
   */
  sha?: string;
};

/**
 * Type of GITLAB's GITLAB_GET_COMMIT_REFS tool output.
 */
type GITLAB_GET_COMMIT_REFS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * References
       * @description A list of references (branches or tags) the commit is pushed to.
       */
      references?: {
          /**
           * Name
           * @description The name of the branch or tag.
           */
          name: string;
          /**
           * Type
           * @description The type of reference (e.g., "branch", "tag").
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
 * Type of GITLAB's GITLAB_GET_COMMIT_SEQUENCE tool input.
 */
type GITLAB_GET_COMMIT_SEQUENCE_INPUT = {
  /**
   * First Parent
   * @description Follow only the first parent commit upon seeing a merge commit.
   * @default null
   */
  first_parent: boolean | null;
  /**
   * Project Id
   * @description The ID or URL-encoded path of the project.
   */
  project_id?: number | null;
  /**
   * Sha
   * @description The commit hash.
   */
  sha?: string;
};

/**
 * Type of GITLAB's GITLAB_GET_COMMIT_SEQUENCE tool output.
 */
type GITLAB_GET_COMMIT_SEQUENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description The sequence number of the commit.
       */
      count: number;
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
 * Type of GITLAB's GITLAB_GET_GROUP tool input.
 */
type GITLAB_GET_GROUP_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the group.
   */
  id?: number | null;
  /**
   * With Custom Attributes
   * @description Include custom attributes in response (administrators only).
   * @default null
   */
  with_custom_attributes: boolean | null;
  /**
   * With Projects
   * @description Include details from projects that belong to the specified group (defaults to true). Deprecated, scheduled for removal in API v5.
   * @default true
   */
  with_projects: boolean | null;
};

/**
 * Type of GITLAB's GITLAB_GET_GROUP tool output.
 */
type GITLAB_GET_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description The URL of the group's avatar.
       * @default null
       */
      avatar_url: string | null;
      /**
       * Created At
       * @description The creation date of the group in ISO 8601 format.
       */
      created_at: string;
      /**
       * Description
       * @description The description of the group.
       * @default null
       */
      description: string | null;
      /**
       * Duo Availability
       * @default null
       */
      duo_availability: string | null;
      /**
       * Duo Features Enabled
       * @default null
       */
      duo_features_enabled: boolean | null;
      /**
       * Enabled Git Access Protocol
       * @description Enabled Git access protocol (admins/owners only).
       * @default null
       */
      enabled_git_access_protocol: string | null;
      /**
       * Experiment Features Enabled
       * @default null
       */
      experiment_features_enabled: boolean | null;
      /**
       * Extra Shared Runners Minutes Limit
       * @default null
       */
      extra_shared_runners_minutes_limit: number | null;
      /**
       * File Template Project Id
       * @description The ID of the project for file templates.
       * @default null
       */
      file_template_project_id: number | null;
      /**
       * Full Name
       * @description The full name of the group.
       */
      full_name: string;
      /**
       * Full Path
       * @description The full path of the group.
       */
      full_path: string;
      /**
       * Id
       * @description The ID of the group.
       */
      id: number;
      /**
       * Ip Restriction Ranges
       * @description IP restriction ranges for the group.
       * @default null
       */
      ip_restriction_ranges: string | null;
      /**
       * Lock Duo Features Enabled
       * @default null
       */
      lock_duo_features_enabled: boolean | null;
      /**
       * Lock Math Rendering Limits Enabled
       * @default null
       */
      lock_math_rendering_limits_enabled: boolean | null;
      /**
       * Marked For Deletion On
       * @default null
       */
      marked_for_deletion_on: string | null;
      /**
       * Math Rendering Limits Enabled
       * @default null
       */
      math_rendering_limits_enabled: boolean | null;
      /**
       * Membership Lock
       * @default null
       */
      membership_lock: boolean | null;
      /**
       * Name
       * @description The name of the group.
       */
      name: string;
      /**
       * Parent Id
       * @description The ID of the parent group, if any.
       * @default null
       */
      parent_id: number | null;
      /**
       * Path
       * @description The path of the group.
       */
      path: string;
      /**
       * Prevent Sharing Groups Outside Hierarchy
       * @description Present only on top-level groups.
       * @default null
       */
      prevent_sharing_groups_outside_hierarchy: boolean | null;
      /**
       * Projects
       * @description Projects within the group (Deprecated, will be removed in API v5).
       * @default null
       */
      projects: {
          /**
           * Archived
           * @default null
           */
          archived: boolean | null;
          /**
           * Avatar Url
           * @default null
           */
          avatar_url: string | null;
          /**
           * Container Registry Enabled
           * @default null
           */
          container_registry_enabled: boolean | null;
          /**
           * Created At
           * @default null
           */
          created_at: string | null;
          /**
           * Creator Id
           * @default null
           */
          creator_id: number | null;
          /**
           * Default Branch
           * @default null
           */
          default_branch: string | null;
          /**
           * Description
           * @default null
           */
          description: string | null;
          /**
           * Forks Count
           * @default null
           */
          forks_count: number | null;
          /**
           * Http Url To Repo
           * @default null
           */
          http_url_to_repo: string | null;
          /** Id */
          id: number;
          /**
           * Issues Enabled
           * @default null
           */
          issues_enabled: boolean | null;
          /**
           * Jobs Enabled
           * @default null
           */
          jobs_enabled: boolean | null;
          /**
           * Last Activity At
           * @default null
           */
          last_activity_at: string | null;
          /**
           * Merge Requests Enabled
           * @default null
           */
          merge_requests_enabled: boolean | null;
          /**
           * Name
           * @default null
           */
          name: string | null;
          /**
           * Name With Namespace
           * @default null
           */
          name_with_namespace: string | null;
          /**
           * ProjectNamespace
           * @default null
           */
          namespace: {
              /**
               * Avatar Url
               * @default null
               */
              avatar_url: string | null;
              /**
               * Full Path
               * @default null
               */
              full_path: string | null;
              /** Id */
              id: number;
              /** Kind */
              kind: string;
              /** Name */
              name: string;
              /**
               * Parent Id
               * @default null
               */
              parent_id: number | null;
              /** Path */
              path: string;
              /**
               * Web Url
               * @default null
               */
              web_url: string | null;
          } | null;
          /**
           * Open Issues Count
           * @default null
           */
          open_issues_count: number | null;
          /**
           * Path
           * @default null
           */
          path: string | null;
          /**
           * Path With Namespace
           * @default null
           */
          path_with_namespace: string | null;
          /**
           * Public Jobs
           * @default null
           */
          public_jobs: boolean | null;
          /**
           * Request Access Enabled
           * @default null
           */
          request_access_enabled: boolean | null;
          /**
           * Shared Runners Enabled
           * @default null
           */
          shared_runners_enabled: boolean | null;
          /**
           * Shared With Groups
           * @default null
           */
          shared_with_groups: {
              /**
               * Expires At
               * @default null
               */
              expires_at: string | null;
              /** Group Access Level */
              group_access_level: number;
              /** Group Full Path */
              group_full_path: string;
              /** Group Id */
              group_id: number;
              /** Group Name */
              group_name: string;
          }[] | null;
          /**
           * Snippets Enabled
           * @default null
           */
          snippets_enabled: boolean | null;
          /**
           * Ssh Url To Repo
           * @default null
           */
          ssh_url_to_repo: string | null;
          /**
           * Star Count
           * @default null
           */
          star_count: number | null;
          /**
           * Tag List
           * @description Deprecated, use `topics` instead
           * @default null
           */
          tag_list: string[] | null;
          /**
           * Topics
           * @default null
           */
          topics: string[] | null;
          /**
           * Visibility
           * @default null
           */
          visibility: string | null;
          /**
           * Web Url
           * @default null
           */
          web_url: string | null;
          /**
           * Wiki Enabled
           * @default null
           */
          wiki_enabled: boolean | null;
      }[] | null;
      /**
       * Repository Storage
       * @description Repository storage for the group.
       * @default null
       */
      repository_storage: string | null;
      /**
       * Request Access Enabled
       * @description Indicates if users can request access to the group.
       */
      request_access_enabled: boolean;
      /**
       * Runners Token
       * @description The runners token for the group (admins/owners only).
       * @default null
       */
      runners_token: string | null;
      /**
       * Shared Projects
       * @description Projects shared with the group (Deprecated, will be removed in API v5).
       * @default null
       */
      shared_projects: {
          /**
           * Archived
           * @default null
           */
          archived: boolean | null;
          /**
           * Avatar Url
           * @default null
           */
          avatar_url: string | null;
          /**
           * Container Registry Enabled
           * @default null
           */
          container_registry_enabled: boolean | null;
          /**
           * Created At
           * @default null
           */
          created_at: string | null;
          /**
           * Creator Id
           * @default null
           */
          creator_id: number | null;
          /**
           * Default Branch
           * @default null
           */
          default_branch: string | null;
          /**
           * Description
           * @default null
           */
          description: string | null;
          /**
           * Forks Count
           * @default null
           */
          forks_count: number | null;
          /**
           * Http Url To Repo
           * @default null
           */
          http_url_to_repo: string | null;
          /** Id */
          id: number;
          /**
           * Issues Enabled
           * @default null
           */
          issues_enabled: boolean | null;
          /**
           * Jobs Enabled
           * @default null
           */
          jobs_enabled: boolean | null;
          /**
           * Last Activity At
           * @default null
           */
          last_activity_at: string | null;
          /**
           * Merge Requests Enabled
           * @default null
           */
          merge_requests_enabled: boolean | null;
          /**
           * Name
           * @default null
           */
          name: string | null;
          /**
           * Name With Namespace
           * @default null
           */
          name_with_namespace: string | null;
          /**
           * ProjectNamespace
           * @default null
           */
          namespace: {
              /**
               * Avatar Url
               * @default null
               */
              avatar_url: string | null;
              /**
               * Full Path
               * @default null
               */
              full_path: string | null;
              /** Id */
              id: number;
              /** Kind */
              kind: string;
              /** Name */
              name: string;
              /**
               * Parent Id
               * @default null
               */
              parent_id: number | null;
              /** Path */
              path: string;
              /**
               * Web Url
               * @default null
               */
              web_url: string | null;
          } | null;
          /**
           * Open Issues Count
           * @default null
           */
          open_issues_count: number | null;
          /**
           * Path
           * @default null
           */
          path: string | null;
          /**
           * Path With Namespace
           * @default null
           */
          path_with_namespace: string | null;
          /**
           * Public Jobs
           * @default null
           */
          public_jobs: boolean | null;
          /**
           * Request Access Enabled
           * @default null
           */
          request_access_enabled: boolean | null;
          /**
           * Shared Runners Enabled
           * @default null
           */
          shared_runners_enabled: boolean | null;
          /**
           * Shared With Groups
           * @default null
           */
          shared_with_groups: {
              /**
               * Expires At
               * @default null
               */
              expires_at: string | null;
              /** Group Access Level */
              group_access_level: number;
              /** Group Full Path */
              group_full_path: string;
              /** Group Id */
              group_id: number;
              /** Group Name */
              group_name: string;
          }[] | null;
          /**
           * Snippets Enabled
           * @default null
           */
          snippets_enabled: boolean | null;
          /**
           * Ssh Url To Repo
           * @default null
           */
          ssh_url_to_repo: string | null;
          /**
           * Star Count
           * @default null
           */
          star_count: number | null;
          /**
           * Tag List
           * @description Deprecated, use `topics` instead
           * @default null
           */
          tag_list: string[] | null;
          /**
           * Topics
           * @default null
           */
          topics: string[] | null;
          /**
           * Visibility
           * @default null
           */
          visibility: string | null;
          /**
           * Web Url
           * @default null
           */
          web_url: string | null;
          /**
           * Wiki Enabled
           * @default null
           */
          wiki_enabled: boolean | null;
      }[] | null;
      /**
       * Shared Runners Minutes Limit
       * @default null
       */
      shared_runners_minutes_limit: number | null;
      /**
       * Shared With Groups
       * @description Groups shared with this group.
       * @default null
       */
      shared_with_groups: {
          /**
           * Expires At
           * @default null
           */
          expires_at: string | null;
          /** Group Access Level */
          group_access_level: number;
          /** Group Full Path */
          group_full_path: string;
          /** Group Id */
          group_id: number;
          /** Group Name */
          group_name: string;
      }[] | null;
      /**
       * Visibility
       * @description The visibility level of the group.
       */
      visibility: string;
      /**
       * Web Url
       * @description The web URL of the group.
       */
      web_url: string;
      /**
       * Wiki Access Level
       * @default null
       */
      wiki_access_level: string | null;
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
 * Type of GITLAB's GITLAB_GET_GROUPS tool input.
 */
type GITLAB_GET_GROUPS_INPUT = {
  /**
   * All Available
   * @description Include all groups the user has access to (admin only).
   * @default null
   */
  all_available: boolean | null;
  /**
   * Min Access Level
   * @description Limit to groups with minimum access level.
   * @default null
   */
  min_access_level: number | null;
  /**
   * Order By
   * @description Return groups ordered by this field.
   * @default null
   * @enum {string|null}
   */
  order_by: "id" | "name" | "path" | "created_at" | "updated_at" | null;
  /**
   * Owned
   * @description Limit to groups owned by the current user.
   * @default null
   */
  owned: boolean | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page.
   * @default null
   */
  per_page: number | null;
  /**
   * Search
   * @description Search for groups by name or path.
   * @default null
   */
  search: string | null;
  /**
   * Skip Groups[]
   * @description List of group IDs to exclude.
   * @default null
   */
  "skip_groups[]": number[] | null;
  /**
   * Sort
   * @description Return groups sorted in 'asc' or 'desc' order.
   * @default null
   * @enum {string|null}
   */
  sort: "asc" | "desc" | null;
  /**
   * Statistics
   * @description Include group statistics (admin only).
   * @default null
   */
  statistics: boolean | null;
  /**
   * With Custom Attributes
   * @description Include custom attributes in response (admins only).
   * @default null
   */
  with_custom_attributes: boolean | null;
  /**
   * With Projects
   * @description Include project details in response (deprecated).
   * @default null
   */
  with_projects: boolean | null;
  /**
   * With Two Factor
   * @description Include groups requiring two-factor authentication.
   * @default null
   */
  with_two_factor: boolean | null;
};

/**
 * Type of GITLAB's GITLAB_GET_GROUPS tool output.
 */
type GITLAB_GET_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Groups
       * @description List of group objects.
       */
      groups: {
          [key: string]: unknown;
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
 * Type of GITLAB's GITLAB_GET_GROUP_MEMBER tool input.
 */
type GITLAB_GET_GROUP_MEMBER_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the group.
   */
  id?: number | null;
  /**
   * User Id
   * @description The user ID of the group member to retrieve.
   */
  user_id?: number;
};

/**
 * Type of GITLAB's GITLAB_GET_GROUP_MEMBER tool output.
 */
type GITLAB_GET_GROUP_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Level
       * @description Access level granted to the member.
       */
      access_level: number;
      /**
       * Avatar Url
       * @description Avatar URL of the member.
       * @default null
       */
      avatar_url: string | null;
      /**
       * Expires At
       * @description Membership expiration date in ISO 8601 format.
       * @default null
       */
      expires_at: string | null;
      /**
       * Id
       * @description The unique ID of the member.
       */
      id: number;
      /**
       * Name
       * @description Name of the member.
       */
      name: string;
      /**
       * State
       * @description Account state (e.g., 'active').
       */
      state: string;
      /**
       * Username
       * @description Username of the member.
       */
      username: string;
      /**
       * Web Url
       * @description Web URL to the user's profile.
       */
      web_url: string;
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
 * Type of GITLAB's GITLAB_GET_JOB_DETAILS tool input.
 */
type GITLAB_GET_JOB_DETAILS_INPUT = {
  /**
   * Job Id
   * @description The ID of the job.
   */
  job_id?: number;
  /**
   * Project Id
   * @description The ID or URL-encoded path of the project.
   */
  project_id?: number | null;
};

/**
 * Type of GITLAB's GITLAB_GET_JOB_DETAILS tool output.
 */
type GITLAB_GET_JOB_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Allow Failure
       * @default null
       */
      allow_failure: boolean | null;
      /**
       * Archived
       * @default null
       */
      archived: boolean | null;
      /** Artifacts */
      artifacts?: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Artifacts Expire At
       * @default null
       */
      artifacts_expire_at: string | null;
      /**
       * JobCommit
       * @default null
       */
      commit: {
          /**
           * Author Email
           * @default null
           */
          author_email: string | null;
          /**
           * Author Name
           * @default null
           */
          author_name: string | null;
          /**
           * Created At
           * @default null
           */
          created_at: string | null;
          /**
           * Id
           * @default null
           */
          id: string | null;
          /**
           * Message
           * @default null
           */
          message: string | null;
          /**
           * Short Id
           * @default null
           */
          short_id: string | null;
          /**
           * Title
           * @default null
           */
          title: string | null;
      } | null;
      /**
       * Coverage
       * @default null
       */
      coverage: number | null;
      /**
       * Created At
       * @default null
       */
      created_at: string | null;
      /**
       * Duration
       * @default null
       */
      duration: number | null;
      /**
       * Erased At
       * @default null
       */
      erased_at: string | null;
      /**
       * Failure Reason
       * @default null
       */
      failure_reason: string | null;
      /**
       * Finished At
       * @default null
       */
      finished_at: string | null;
      /**
       * Id
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @default null
       */
      name: string | null;
      /**
       * JobPipeline
       * @default null
       */
      pipeline: {
          /**
           * Id
           * @default null
           */
          id: number | null;
          /**
           * Project Id
           * @default null
           */
          project_id: number | null;
          /**
           * Ref
           * @default null
           */
          ref: string | null;
          /**
           * Sha
           * @default null
           */
          sha: string | null;
          /**
           * Status
           * @default null
           */
          status: string | null;
      } | null;
      /**
       * JobProject
       * @default null
       */
      project: {
          /**
           * Ci Job Token Scope Enabled
           * @default null
           */
          ci_job_token_scope_enabled: boolean | null;
      } | null;
      /**
       * Queued Duration
       * @default null
       */
      queued_duration: number | null;
      /**
       * Ref
       * @default null
       */
      ref: string | null;
      /**
       * Runner
       * @default null
       */
      runner: {
          [key: string]: unknown;
      } | null;
      /**
       * Runner Manager
       * @default null
       */
      runner_manager: {
          [key: string]: unknown;
      } | null;
      /**
       * Source
       * @default null
       */
      source: string | null;
      /**
       * Stage
       * @default null
       */
      stage: string | null;
      /**
       * Started At
       * @default null
       */
      started_at: string | null;
      /**
       * Status
       * @default null
       */
      status: string | null;
      /**
       * Tag
       * @default null
       */
      tag: boolean | null;
      /** Tag List */
      tag_list?: string[] | null;
      /**
       * JobUser
       * @default null
       */
      user: {
          /**
           * Avatar Url
           * @default null
           */
          avatar_url: string | null;
          /**
           * Bio
           * @default null
           */
          bio: string | null;
          /**
           * Created At
           * @default null
           */
          created_at: string | null;
          /**
           * Id
           * @default null
           */
          id: number | null;
          /**
           * Linkedin
           * @default null
           */
          linkedin: string | null;
          /**
           * Location
           * @default null
           */
          location: string | null;
          /**
           * Name
           * @default null
           */
          name: string | null;
          /**
           * Organization
           * @default null
           */
          organization: string | null;
          /**
           * Public Email
           * @default null
           */
          public_email: string | null;
          /**
           * Skype
           * @default null
           */
          skype: string | null;
          /**
           * State
           * @default null
           */
          state: string | null;
          /**
           * Twitter
           * @default null
           */
          twitter: string | null;
          /**
           * Username
           * @default null
           */
          username: string | null;
          /**
           * Web Url
           * @default null
           */
          web_url: string | null;
          /**
           * Website Url
           * @default null
           */
          website_url: string | null;
      } | null;
      /**
       * Web Url
       * @default null
       */
      web_url: string | null;
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
 * Type of GITLAB's GITLAB_GET_MERGE_REQUEST_NOTES tool input.
 */
type GITLAB_GET_MERGE_REQUEST_NOTES_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * Merge Request Iid
   * @description Internal ID of the merge request.
   */
  merge_request_iid?: number;
  /**
   * Page
   * @description Page number to retrieve.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of notes per page (max 100).
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of GITLAB's GITLAB_GET_MERGE_REQUEST_NOTES tool output.
 */
type GITLAB_GET_MERGE_REQUEST_NOTES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Notes
       * @description List of notes (comments) on the merge request.
       */
      notes: {
          /**
           * NoteLinks
           * @default null
           */
          _links: {
              /**
               * Self
               * @description API endpoint URL for this note.
               */
              self: string;
          } | null;
          /**
           * Attachment
           * @description URL of any attachment.
           * @default null
           */
          attachment: string | null;
          /**
           * Author
           * @description Author of the note.
           */
          author: {
              /**
               * Avatar Url
               * @description Avatar URL of the author.
               * @default null
               */
              avatar_url: string | null;
              /**
               * Id
               * @description User ID of the author.
               */
              id: number;
              /**
               * Name
               * @description Name of the author.
               */
              name: string;
              /**
               * State
               * @description State of the author account (e.g., 'active').
               */
              state: string;
              /**
               * Username
               * @description Username of the author.
               */
              username: string;
              /**
               * Web Url
               * @description Web URL of the author's profile.
               */
              web_url: string;
          };
          /**
           * Body
           * @description Content of the note.
           */
          body: string;
          /**
           * Created At
           * @description Creation timestamp (ISO 8601).
           */
          created_at: string;
          /**
           * Discussion Id
           * @description ID of the discussion this note is part of.
           * @default null
           */
          discussion_id: string | null;
          /**
           * Id
           * @description ID of the note.
           */
          id: number;
          /**
           * Noteable Id
           * @description ID of the merge request this note belongs to.
           */
          noteable_id: number;
          /**
           * Noteable Type
           * @description Type of the noteable entity.
           */
          noteable_type: string;
          /**
           * Position
           * @description Position details for diff notes.
           * @default null
           */
          position: {
              /**
               * Base Sha
               * @description Base commit SHA for the position.
               */
              base_sha: string;
              /**
               * Head Sha
               * @description Head commit SHA for the position.
               */
              head_sha: string;
              /**
               * New Line
               * @description Line number in the new file.
               * @default null
               */
              new_line: number | null;
              /**
               * New Path
               * @description New file path in the diff context.
               */
              new_path: string;
              /**
               * Old Line
               * @description Line number in the old file.
               * @default null
               */
              old_line: number | null;
              /**
               * Old Path
               * @description Old file path in the diff context.
               */
              old_path: string;
              /**
               * Position Type
               * @description Type of the position (e.g., 'text').
               */
              position_type: string;
              /**
               * Start Sha
               * @description Start commit SHA for the position.
               */
              start_sha: string;
          } | null;
          /**
           * Resolvable
           * @description Whether this note is resolvable.
           * @default null
           */
          resolvable: boolean | null;
          /**
           * Resolved
           * @description Whether this note has been resolved.
           * @default null
           */
          resolved: boolean | null;
          /**
           * System
           * @description Whether it's a system note.
           */
          system: boolean;
          /**
           * Updated At
           * @description Update timestamp (ISO 8601).
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
 * Type of GITLAB's GITLAB_GET_PROJECT tool input.
 */
type GITLAB_GET_PROJECT_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
};

/**
 * Type of GITLAB's GITLAB_GET_PROJECT tool output.
 */
type GITLAB_GET_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
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
 * Type of GITLAB's GITLAB_GET_PROJECTS tool input.
 */
type GITLAB_GET_PROJECTS_INPUT = {
  /**
   * Archived
   * @description Limit by archived status.
   * @default null
   */
  archived: boolean | null;
  /**
   * Id After
   * @description Limit results to projects with IDs greater than the specified ID.
   * @default null
   */
  id_after: number | null;
  /**
   * Id Before
   * @description Limit results to projects with IDs less than the specified ID.
   * @default null
   */
  id_before: number | null;
  /**
   * Membership
   * @description Limit by projects that the current user is a member of.
   * @default null
   */
  membership: boolean | null;
  /**
   * Min Access Level
   * @description Limit by current user minimal role (access_level).
   * @default null
   */
  min_access_level: number | null;
  /**
   * Order By
   * @description Return projects ordered by this field. Default is 'created_at'.
   * @default null
   * @enum {string|null}
   */
  order_by: "id" | "name" | "path" | "created_at" | "updated_at" | "star_count" | "last_activity_at" | null;
  /**
   * Owned
   * @description Limit by projects explicitly owned by the current user.
   * @default null
   */
  owned: boolean | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page (1-100).
   * @default null
   */
  per_page: number | null;
  /**
   * Search
   * @description Return list of projects matching search criteria (case-insensitive substring).
   * @default null
   */
  search: string | null;
  /**
   * Simple
   * @description Return only limited fields for each project.
   * @default null
   */
  simple: boolean | null;
  /**
   * Sort
   * @description Return projects sorted in 'asc' or 'desc' order. Default is 'desc'.
   * @default null
   * @enum {string|null}
   */
  sort: "asc" | "desc" | null;
  /**
   * Starred
   * @description Limit by projects starred by the current user.
   * @default null
   */
  starred: boolean | null;
  /**
   * Statistics
   * @description Include project statistics. Available to Reporter role and above.
   * @default null
   */
  statistics: boolean | null;
  /**
   * Visibility
   * @description Limit by project visibility.
   * @default null
   * @enum {string|null}
   */
  visibility: "private" | "internal" | "public" | null;
  /**
   * With Custom Attributes
   * @description Include custom attributes in response (admin only).
   * @default null
   */
  with_custom_attributes: boolean | null;
  /**
   * With Issues Enabled
   * @description Limit by enabled issues feature.
   * @default null
   */
  with_issues_enabled: boolean | null;
  /**
   * With Merge Requests Enabled
   * @description Limit by enabled merge requests feature.
   * @default null
   */
  with_merge_requests_enabled: boolean | null;
  /**
   * With Programming Language
   * @description Limit by projects which use the given programming language.
   * @default null
   */
  with_programming_language: string | null;
};

/**
 * Type of GITLAB's GITLAB_GET_PROJECTS tool output.
 */
type GITLAB_GET_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      [key: string]: unknown;
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
 * Type of GITLAB's GITLAB_GET_PROJECTS_ID_MERGE_REQUESTS_IID_DIFFS tool input.
 */
type GITLAB_GET_PROJECTS_ID_MERGE_REQUESTS_IID_DIFFS_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * Merge Request Iid
   * @description The internal ID of the merge request.
   */
  merge_request_iid?: number;
};

/**
 * Type of GITLAB's GITLAB_GET_PROJECTS_ID_MERGE_REQUESTS_IID_DIFFS tool output.
 */
type GITLAB_GET_PROJECTS_ID_MERGE_REQUESTS_IID_DIFFS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Diffs
       * @description A list of diff versions for the merge request.
       */
      diffs: {
          /**
           * Base Commit Sha
           * @description SHA of the base commit.
           */
          base_commit_sha: string;
          /**
           * Commits Count
           * @description Number of commits included in this diff version.
           * @default null
           */
          commits_count: number | null;
          /**
           * Created At
           * @description Timestamp when the diff version was created (ISO 8601 format).
           */
          created_at: string;
          /**
           * Head Commit Sha
           * @description SHA of the head commit.
           */
          head_commit_sha: string;
          /**
           * Id
           * @description The ID of the diff version.
           */
          id: number;
          /**
           * Merge Request Id
           * @description The ID of the associated merge request.
           */
          merge_request_id: number;
          /**
           * Real Size
           * @description Real size of the diff.
           */
          real_size: number;
          /**
           * Start Commit Sha
           * @description SHA of the start commit.
           */
          start_commit_sha: string;
          /**
           * State
           * @description State of the diff version.
           */
          state: string;
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
 * Type of GITLAB's GITLAB_GET_PROJECT_LANGUAGES tool input.
 */
type GITLAB_GET_PROJECT_LANGUAGES_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
};

/**
 * Type of GITLAB's GITLAB_GET_PROJECT_LANGUAGES tool output.
 */
type GITLAB_GET_PROJECT_LANGUAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Languages
       * @description Mapping of programming language names to their usage percentage.
       */
      languages: {
          [key: string]: number;
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
 * Type of GITLAB's GITLAB_GET_PROJECT_MEMBER tool input.
 */
type GITLAB_GET_PROJECT_MEMBER_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * User Id
   * @description The user ID of the project member to retrieve.
   */
  user_id?: number;
};

/**
 * Type of GITLAB's GITLAB_GET_PROJECT_MEMBER tool output.
 */
type GITLAB_GET_PROJECT_MEMBER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Level
       * @description Access level granted to the member.
       */
      access_level: number;
      /**
       * Avatar Url
       * @description Avatar URL of the member.
       * @default null
       */
      avatar_url: string | null;
      /**
       * Expires At
       * @description Membership expiration date in ISO 8601 format.
       * @default null
       */
      expires_at: string | null;
      /**
       * Id
       * @description The unique ID of the membership record.
       */
      id: number;
      /**
       * Name
       * @description Name of the member.
       */
      name: string;
      /**
       * State
       * @description Account state (e.g., 'active').
       */
      state: string;
      /**
       * Username
       * @description Username of the member.
       */
      username: string;
      /**
       * Web Url
       * @description Web URL to the user's profile.
       */
      web_url: string;
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
 * Type of GITLAB's GITLAB_GET_PROJECT_MEMBER_ALL tool input.
 */
type GITLAB_GET_PROJECT_MEMBER_ALL_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * User Id
   * @description The user ID of the project member.
   */
  user_id?: number;
};

/**
 * Type of GITLAB's GITLAB_GET_PROJECT_MEMBER_ALL tool output.
 */
type GITLAB_GET_PROJECT_MEMBER_ALL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Level
       * @description Access level granted to the user.
       */
      access_level: number;
      /**
       * Avatar Url
       * @description URL to the member's avatar.
       */
      avatar_url: string;
      /**
       * Created At
       * @description Timestamp when the membership was created.
       */
      created_at: string;
      /**
       * Created By
       * @description User who added this member.
       */
      created_by: {
          /**
           * Avatar Url
           * @description URL to the creator's avatar.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Id
           * @description ID of the user who added this member.
           */
          id: number;
          /**
           * Name
           * @description Name of the creator.
           */
          name: string;
          /**
           * State
           * @description State of the creator (e.g., 'active').
           */
          state: string;
          /**
           * Username
           * @description Username of the creator.
           */
          username: string;
          /**
           * Web Url
           * @description Web URL of the creator's profile.
           */
          web_url: string;
      };
      /**
       * Email
       * @description Email of the user, if visible.
       * @default null
       */
      email: string | null;
      /**
       * Expires At
       * @description Expiration date of the membership, if any.
       * @default null
       */
      expires_at: string | null;
      /**
       * GroupSamlIdentity
       * @description SAML identity details, if applicable.
       * @default null
       */
      group_saml_identity: {
          /**
           * Extern Uid
           * @description Extern UID of the SAML identity.
           */
          extern_uid: string;
          /**
           * Provider
           * @description Provider for the SAML identity.
           */
          provider: string;
          /**
           * Saml Provider Id
           * @description ID of the SAML provider.
           */
          saml_provider_id: number;
      } | null;
      /**
       * Id
       * @description ID of the project member.
       */
      id: number;
      /**
       * Name
       * @description Name of the project member.
       */
      name: string;
      /**
       * State
       * @description State of the member (e.g., 'active').
       */
      state: string;
      /**
       * Username
       * @description Username of the project member.
       */
      username: string;
      /**
       * Web Url
       * @description Web URL of the member's profile.
       */
      web_url: string;
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
 * Type of GITLAB's GITLAB_GET_PROJECT_MERGE_REQUESTS tool input.
 */
type GITLAB_GET_PROJECT_MERGE_REQUESTS_INPUT = {
  /**
   * Approved
   * @description Filters merge requests by their approved status. yes returns only approved merge requests. no returns only non-approved merge requests. Requires the mr_approved_filter feature flag, disabled by default.
   * @default null
   */
  approved: string | null;
  /**
   * Approved By Ids
   * @description Returns merge requests approved by all the users with the given id, up to 5 users. None returns merge requests with no approvals. Any returns merge requests with an approval. Premium and Ultimate only.
   * @default null
   */
  approved_by_ids: number[] | null;
  /**
   * Approver Ids
   * @description Returns merge requests which have specified all the users with the given id as individual approvers. None returns merge requests without approvers. Any returns merge requests with an approver. Premium and Ultimate only.
   * @default null
   */
  approver_ids: number[] | null;
  /**
   * Assignee Id
   * @description Returns merge requests assigned to the given user id. None returns unassigned merge requests. Any returns merge requests with an assignee.
   * @default null
   */
  assignee_id: number | null;
  /**
   * Author Id
   * @description Returns merge requests created by the given user id. Mutually exclusive with author_username. Combine with scope=all or scope=assigned_to_me.
   * @default null
   */
  author_id: number | null;
  /**
   * Author Username
   * @description Returns merge requests created by the given username. Mutually exclusive with author_id.
   * @default null
   */
  author_username: string | null;
  /**
   * Created After
   * Format: date-time
   * @description Returns merge requests created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).
   * @default null
   */
  created_after: string | null;
  /**
   * Created Before
   * Format: date-time
   * @description Returns merge requests created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).
   * @default null
   */
  created_before: string | null;
  /**
   * Deployed After
   * Format: date-time
   * @description Returns merge requests deployed after the given date/time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).
   * @default null
   */
  deployed_after: string | null;
  /**
   * Deployed Before
   * Format: date-time
   * @description Returns merge requests deployed before the given date/time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).
   * @default null
   */
  deployed_before: string | null;
  /**
   * Environment
   * @description Returns merge requests deployed to the given environment.
   * @default null
   */
  environment: string | null;
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * Iids[]
   * @description Returns the request having the given iid.
   * @default null
   */
  "iids[]": number[] | null;
  /**
   * Labels
   * @description Returns merge requests matching a comma-separated list of labels. None lists all merge requests with no labels. Any lists all merge requests with at least one label. Predefined names are case-insensitive.
   * @default null
   */
  labels: string | null;
  /**
   * Merge User Id
   * @description Returns the merge requests merged by the user with the given user id. Mutually exclusive with merge_user_username. Introduced in GitLab 17.0.
   * @default null
   */
  merge_user_id: number | null;
  /**
   * Merge User Username
   * @description Returns the merge requests merged by the user with the given username. Mutually exclusive with merge_user_id. Introduced in GitLab 17.0.
   * @default null
   */
  merge_user_username: string | null;
  /**
   * Milestone
   * @description Returns merge requests for a specific milestone. None returns merge requests with no milestone. Any returns merge requests that have an assigned milestone.
   * @default null
   */
  milestone: string | null;
  /**
   * My Reaction Emoji
   * @description Returns merge requests reacted by the authenticated user by the given emoji. None returns issues not given a reaction. Any returns issues given at least one reaction.
   * @default null
   */
  my_reaction_emoji: string | null;
  /**
   * Not Filter
   * @description Returns merge requests that do not match the parameters supplied. Accepts: labels, milestone, author_id, author_username, assignee_id, assignee_username, reviewer_id, reviewer_username, my_reaction_emoji.
   * @default null
   */
  not_filter: {
      [key: string]: string | number | number[];
  } | null;
  /**
   * Order By
   * @description Returns requests ordered by created_at, title, merged_at, or updated_at fields. Default is created_at.
   * @default null
   */
  order_by: string | null;
  /**
   * Page
   * @description The page of results to return. Defaults to 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description The number of results per page. Defaults to 20.
   * @default null
   */
  per_page: number | null;
  /**
   * Reviewer Id
   * @description Returns merge requests which have the user as a reviewer with the given user id. None returns merge requests with no reviewers. Any returns merge requests with any reviewer. Mutually exclusive with reviewer_username.
   * @default null
   */
  reviewer_id: number | null;
  /**
   * Reviewer Username
   * @description Returns merge requests which have the user as a reviewer with the given username. None returns merge requests with no reviewers. Any returns merge requests with any reviewer. Mutually exclusive with reviewer_id.
   * @default null
   */
  reviewer_username: string | null;
  /**
   * Scope
   * @description Returns merge requests for the given scope: created_by_me, assigned_to_me or all. Defaults to created_by_me.
   * @default null
   */
  scope: string | null;
  /**
   * Search
   * @description Search merge requests against their title and description.
   * @default null
   */
  search: string | null;
  /**
   * Sort
   * @description Returns requests sorted in asc or desc order. Default is desc.
   * @default null
   */
  sort: string | null;
  /**
   * Source Branch
   * @description Returns merge requests with the given source branch.
   * @default null
   */
  source_branch: string | null;
  /**
   * State
   * @description Returns all merge requests or just those that are opened, closed, locked, or merged.
   * @default null
   */
  state: string | null;
  /**
   * Target Branch
   * @description Returns merge requests with the given target branch.
   * @default null
   */
  target_branch: string | null;
  /**
   * Updated After
   * Format: date-time
   * @description Returns merge requests updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).
   * @default null
   */
  updated_after: string | null;
  /**
   * Updated Before
   * Format: date-time
   * @description Returns merge requests updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).
   * @default null
   */
  updated_before: string | null;
  /**
   * View
   * @description If simple, returns the iid, URL, title, description, and basic state of merge request.
   * @default null
   */
  view: string | null;
  /**
   * Wip
   * @description Filter merge requests against their wip status. Use yes to return only draft merge requests, no to return non-draft merge requests.
   * @default null
   */
  wip: string | null;
  /**
   * With Labels Details
   * @description If true, response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color. Default is false.
   * @default null
   */
  with_labels_details: boolean | null;
  /**
   * With Merge Status Recheck
   * @description If true, this projection requests (but does not guarantee) an asynchronous recalculation of the merge_status field. Enable the restrict_merge_status_recheck feature flag to ignore this attribute when requested by users without at least the Developer role.
   * @default null
   */
  with_merge_status_recheck: boolean | null;
};

/**
 * Type of GITLAB's GITLAB_GET_PROJECT_MERGE_REQUESTS tool output.
 */
type GITLAB_GET_PROJECT_MERGE_REQUESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Merge Requests
       * @description List of merge requests for the project.
       */
      merge_requests: {
          /**
           * Approvals Before Merge
           * @default null
           */
          approvals_before_merge: number | null;
          /**
           * User
           * @default null
           */
          assignee: {
              /**
               * Avatar Url
               * @default null
               */
              avatar_url: string | null;
              /** Id */
              id: number;
              /**
               * Locked
               * @default null
               */
              locked: boolean | null;
              /** Name */
              name: string;
              /** State */
              state: string;
              /** Username */
              username: string;
              /** Web Url */
              web_url: string;
          } | null;
          /**
           * Assignees
           * @default null
           */
          assignees: {
              /**
               * Avatar Url
               * @default null
               */
              avatar_url: string | null;
              /** Id */
              id: number;
              /**
               * Locked
               * @default null
               */
              locked: boolean | null;
              /** Name */
              name: string;
              /** State */
              state: string;
              /** Username */
              username: string;
              /** Web Url */
              web_url: string;
          }[] | null;
          /** Author */
          author: {
              /**
               * Avatar Url
               * @default null
               */
              avatar_url: string | null;
              /** Id */
              id: number;
              /**
               * Locked
               * @default null
               */
              locked: boolean | null;
              /** Name */
              name: string;
              /** State */
              state: string;
              /** Username */
              username: string;
              /** Web Url */
              web_url: string;
          };
          /**
           * Blocking Discussions Resolved
           * @default null
           */
          blocking_discussions_resolved: boolean | null;
          /**
           * Closed At
           * Format: date-time
           * @default null
           */
          closed_at: string | null;
          /**
           * User
           * @default null
           */
          closed_by: {
              /**
               * Avatar Url
               * @default null
               */
              avatar_url: string | null;
              /** Id */
              id: number;
              /**
               * Locked
               * @default null
               */
              locked: boolean | null;
              /** Name */
              name: string;
              /** State */
              state: string;
              /** Username */
              username: string;
              /** Web Url */
              web_url: string;
          } | null;
          /**
           * Created At
           * Format: date-time
           */
          created_at: string;
          /**
           * Description
           * @default null
           */
          description: string | null;
          /**
           * Detailed Merge Status
           * @default null
           */
          detailed_merge_status: string | null;
          /**
           * Discussion Locked
           * @default null
           */
          discussion_locked: boolean | null;
          /** Downvotes */
          downvotes: number;
          /**
           * Draft
           * @default null
           */
          draft: boolean | null;
          /**
           * Force Remove Source Branch
           * @default null
           */
          force_remove_source_branch: boolean | null;
          /**
           * Has Conflicts
           * @default null
           */
          has_conflicts: boolean | null;
          /** Id */
          id: number;
          /** Iid */
          iid: number;
          /**
           * Imported
           * @default null
           */
          imported: boolean | null;
          /**
           * Imported From
           * @default null
           */
          imported_from: string | null;
          /**
           * Labels
           * @default null
           */
          labels: string[] | null;
          /**
           * Merge After
           * Format: date-time
           * @default null
           */
          merge_after: string | null;
          /**
           * Merge Commit Sha
           * @default null
           */
          merge_commit_sha: string | null;
          /**
           * Merge Status
           * @default null
           */
          merge_status: string | null;
          /**
           * User
           * @default null
           */
          merge_user: {
              /**
               * Avatar Url
               * @default null
               */
              avatar_url: string | null;
              /** Id */
              id: number;
              /**
               * Locked
               * @default null
               */
              locked: boolean | null;
              /** Name */
              name: string;
              /** State */
              state: string;
              /** Username */
              username: string;
              /** Web Url */
              web_url: string;
          } | null;
          /**
           * Merge When Pipeline Succeeds
           * @default null
           */
          merge_when_pipeline_succeeds: boolean | null;
          /**
           * Merged At
           * Format: date-time
           * @default null
           */
          merged_at: string | null;
          /**
           * User
           * @default null
           */
          merged_by: {
              /**
               * Avatar Url
               * @default null
               */
              avatar_url: string | null;
              /** Id */
              id: number;
              /**
               * Locked
               * @default null
               */
              locked: boolean | null;
              /** Name */
              name: string;
              /** State */
              state: string;
              /** Username */
              username: string;
              /** Web Url */
              web_url: string;
          } | null;
          /**
           * Milestone
           * @default null
           */
          milestone: {
              /**
               * Created At
               * Format: date-time
               */
              created_at: string;
              /** Description */
              description: string;
              /**
               * Due Date
               * @default null
               */
              due_date: string | null;
              /** Id */
              id: number;
              /** Iid */
              iid: number;
              /** Project Id */
              project_id: number;
              /**
               * Start Date
               * @default null
               */
              start_date: string | null;
              /** State */
              state: string;
              /** Title */
              title: string;
              /**
               * Updated At
               * Format: date-time
               */
              updated_at: string;
              /** Web Url */
              web_url: string;
          } | null;
          /**
           * Prepared At
           * Format: date-time
           * @default null
           */
          prepared_at: string | null;
          /** Project Id */
          project_id: number;
          /**
           * Reference
           * @default null
           */
          reference: string | null;
          /**
           * References
           * @default null
           */
          references: {
              /** Full */
              full: string;
              /** Relative */
              relative: string;
              /** Short */
              short: string;
          } | null;
          /**
           * Reviewers
           * @default null
           */
          reviewers: {
              /**
               * Avatar Url
               * @default null
               */
              avatar_url: string | null;
              /** Id */
              id: number;
              /**
               * Locked
               * @default null
               */
              locked: boolean | null;
              /** Name */
              name: string;
              /** State */
              state: string;
              /** Username */
              username: string;
              /** Web Url */
              web_url: string;
          }[] | null;
          /**
           * Sha
           * @default null
           */
          sha: string | null;
          /**
           * Should Remove Source Branch
           * @default null
           */
          should_remove_source_branch: boolean | null;
          /** Source Branch */
          source_branch: string;
          /** Source Project Id */
          source_project_id: number;
          /**
           * Squash
           * @default null
           */
          squash: boolean | null;
          /**
           * Squash Commit Sha
           * @default null
           */
          squash_commit_sha: string | null;
          /**
           * Squash On Merge
           * @default null
           */
          squash_on_merge: boolean | null;
          /** State */
          state: string;
          /** Target Branch */
          target_branch: string;
          /** Target Project Id */
          target_project_id: number;
          /**
           * TaskCompletionStatus
           * @default null
           */
          task_completion_status: {
              /** Completed Count */
              completed_count: number;
              /** Count */
              count: number;
          } | null;
          /**
           * TimeStats
           * @default null
           */
          time_stats: {
              /**
               * Human Time Estimate
               * @default null
               */
              human_time_estimate: string | null;
              /**
               * Human Total Time Spent
               * @default null
               */
              human_total_time_spent: string | null;
              /** Time Estimate */
              time_estimate: number;
              /** Total Time Spent */
              total_time_spent: number;
          } | null;
          /** Title */
          title: string;
          /**
           * Updated At
           * Format: date-time
           */
          updated_at: string;
          /** Upvotes */
          upvotes: number;
          /**
           * User Notes Count
           * @default null
           */
          user_notes_count: number | null;
          /** Web Url */
          web_url: string;
          /**
           * Work In Progress
           * @default null
           */
          work_in_progress: boolean | null;
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
 * Type of GITLAB's GITLAB_GET_PROJECT_MERGE_REQUEST_COMMITS tool input.
 */
type GITLAB_GET_PROJECT_MERGE_REQUEST_COMMITS_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * Merge Request Iid
   * @description Internal ID of the merge request.
   */
  merge_request_iid?: number;
};

/**
 * Type of GITLAB's GITLAB_GET_PROJECT_MERGE_REQUEST_COMMITS tool output.
 */
type GITLAB_GET_PROJECT_MERGE_REQUEST_COMMITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Commits
       * @description List of commits in the merge request.
       */
      commits: {
          /**
           * Author Email
           * @description Commit author’s email address.
           */
          author_email: string;
          /**
           * Author Name
           * @description Commit author’s name.
           */
          author_name: string;
          /**
           * Authored Date
           * @description Commit authored date (ISO 8601 format).
           */
          authored_date: string;
          /**
           * Committed Date
           * @description Commit date (ISO 8601 format).
           */
          committed_date: string;
          /**
           * Committer Email
           * @description Email address of the committer.
           */
          committer_email: string;
          /**
           * Committer Name
           * @description Name of the committer.
           */
          committer_name: string;
          /**
           * Created At
           * @description Timestamp when the commit was created (ISO 8601 format).
           */
          created_at: string;
          /**
           * Extended Trailers
           * @description Extended Git trailers parsed for the commit.
           * @default null
           */
          extended_trailers: {
              [key: string]: string[];
          } | null;
          /**
           * Id
           * @description ID of the commit.
           */
          id: string;
          /**
           * Message
           * @description Full commit message.
           */
          message: string;
          /**
           * Parent Ids
           * @description A list of parent commit SHAs.
           */
          parent_ids: string[];
          /**
           * Short Id
           * @description Short ID of the commit.
           */
          short_id: string;
          /**
           * Title
           * @description Commit title.
           */
          title: string;
          /**
           * Trailers
           * @description Git trailers parsed for the commit. Duplicate keys include the last value only.
           * @default null
           */
          trailers: {
              [key: string]: string;
          } | null;
          /**
           * Web Url
           * @description Web URL of the commit in GitLab UI.
           */
          web_url: string;
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
 * Type of GITLAB's GITLAB_GET_REPOSITORY_BRANCH tool input.
 */
type GITLAB_GET_REPOSITORY_BRANCH_INPUT = {
  /**
   * Branch Name
   * @description The URL-encoded name of the branch.
   */
  branch_name?: string;
  /**
   * Project Id
   * @description The ID or URL-encoded path of the project.
   */
  project_id?: number | null;
};

/**
 * Type of GITLAB's GITLAB_GET_REPOSITORY_BRANCH tool output.
 */
type GITLAB_GET_REPOSITORY_BRANCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Can Push
       * @description Indicates if the current user can push to this branch.
       */
      can_push: boolean;
      /**
       * Commit
       * @description Details of the last commit on this branch.
       */
      commit: {
          /**
           * Author Email
           * @description Email of the commit author.
           */
          author_email: string;
          /**
           * Author Name
           * @description Name of the commit author.
           */
          author_name: string;
          /**
           * Authored Date
           * @description Timestamp of when the commit was authored.
           */
          authored_date: string;
          /**
           * Committed Date
           * @description Timestamp of when the commit was committed.
           */
          committed_date: string;
          /**
           * Committer Email
           * @description Email of the committer.
           */
          committer_email: string;
          /**
           * Committer Name
           * @description Name of the committer.
           */
          committer_name: string;
          /**
           * Created At
           * @description Timestamp of commit creation.
           */
          created_at: string;
          /**
           * Id
           * @description Commit ID.
           */
          id: string;
          /**
           * Message
           * @description Commit message.
           */
          message: string;
          /**
           * Parent Ids
           * @description List of parent commit IDs.
           */
          parent_ids: string[];
          /**
           * Short Id
           * @description Short commit ID.
           */
          short_id: string;
          /**
           * Title
           * @description Commit title.
           */
          title: string;
          /**
           * Trailers
           * @description Commit trailers.
           */
          trailers: {
              [key: string]: string;
          };
          /**
           * Web Url
           * @description URL of the commit in the GitLab UI.
           */
          web_url: string;
      };
      /**
       * Default
       * @description Indicates if this is the default branch.
       */
      default: boolean;
      /**
       * Developers Can Merge
       * @description Indicates if developers can merge this branch.
       */
      developers_can_merge: boolean;
      /**
       * Developers Can Push
       * @description Indicates if developers can push to this branch.
       */
      developers_can_push: boolean;
      /**
       * Merged
       * @description Indicates if the branch has been merged.
       */
      merged: boolean;
      /**
       * Name
       * @description The name of the branch.
       */
      name: string;
      /**
       * Protected
       * @description Indicates if the branch is protected.
       */
      protected: boolean;
      /**
       * Web Url
       * @description The URL of the branch in the GitLab UI.
       */
      web_url: string;
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
 * Type of GITLAB's GITLAB_GET_REPOSITORY_BRANCHES tool input.
 */
type GITLAB_GET_REPOSITORY_BRANCHES_INPUT = {
  /**
   * Project Id
   * @description The ID or URL-encoded path of the project.
   */
  project_id?: number | null;
  /**
   * Regex
   * @description Return list of branches with names matching a re2 regular expression.
   * @default null
   */
  regex: string | null;
  /**
   * Search
   * @description Return list of branches containing the search string. Use `^term` to find branches that begin with `term`, and `term$` to find branches that end with `term`.
   * @default null
   */
  search: string | null;
};

/**
 * Type of GITLAB's GITLAB_GET_REPOSITORY_BRANCHES tool output.
 */
type GITLAB_GET_REPOSITORY_BRANCHES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Branches
       * @description A list of repository branches.
       */
      branches: {
          /** Can Push */
          can_push: boolean;
          /** Commit */
          commit: {
              /** Author Email */
              author_email: string;
              /** Author Name */
              author_name: string;
              /** Authored Date */
              authored_date: string;
              /** Committed Date */
              committed_date: string;
              /** Committer Email */
              committer_email: string;
              /** Committer Name */
              committer_name: string;
              /** Created At */
              created_at: string;
              /**
               * Extended Trailers
               * @default null
               */
              extended_trailers: {
                  [key: string]: string;
              } | null;
              /** Id */
              id: string;
              /** Message */
              message: string;
              /**
               * Parent Ids
               * @default null
               */
              parent_ids: string[] | null;
              /** Short Id */
              short_id: string;
              /** Title */
              title: string;
              /**
               * Trailers
               * @default null
               */
              trailers: {
                  [key: string]: string;
              } | null;
              /** Web Url */
              web_url: string;
          };
          /** Default */
          default: boolean;
          /** Developers Can Merge */
          developers_can_merge: boolean;
          /** Developers Can Push */
          developers_can_push: boolean;
          /** Merged */
          merged: boolean;
          /** Name */
          name: string;
          /** Protected */
          protected: boolean;
          /** Web Url */
          web_url: string;
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
 * Type of GITLAB's GITLAB_GET_SINGLE_COMMIT tool input.
 */
type GITLAB_GET_SINGLE_COMMIT_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * Sha
   * @description The commit hash or name of a repository branch or tag.
   */
  sha?: string;
  /**
   * Stats
   * @description Include commit stats. Default is true.
   * @default true
   */
  stats: boolean | null;
};

/**
 * Type of GITLAB's GITLAB_GET_SINGLE_COMMIT tool output.
 */
type GITLAB_GET_SINGLE_COMMIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Author Email
       * @description The email of the commit author.
       */
      author_email: string;
      /**
       * Author Name
       * @description The name of the commit author.
       */
      author_name: string;
      /**
       * Authored Date
       * @description The timestamp when the commit was authored.
       */
      authored_date: string;
      /**
       * Committed Date
       * @description The timestamp when the commit was committed.
       */
      committed_date: string;
      /**
       * Committer Email
       * @description The email of the committer.
       */
      committer_email: string;
      /**
       * Committer Name
       * @description The name of the committer.
       */
      committer_name: string;
      /**
       * Created At
       * @description The timestamp when the commit object was created.
       */
      created_at: string;
      /**
       * Id
       * @description The full commit hash.
       */
      id: string;
      /**
       * LastPipeline
       * @description Information about the last pipeline associated with this commit.
       * @default null
       */
      last_pipeline: {
          /**
           * Id
           * @description Pipeline ID.
           */
          id: number;
          /**
           * Ref
           * @description Branch or tag name.
           */
          ref: string;
          /**
           * Sha
           * @description Commit SHA.
           */
          sha: string;
          /**
           * Status
           * @description Pipeline status.
           */
          status: string;
      } | null;
      /**
       * Message
       * @description The full commit message.
       */
      message: string;
      /**
       * Parent Ids
       * @description A list of parent commit SHAs.
       */
      parent_ids: string[];
      /**
       * Short Id
       * @description The short commit hash.
       */
      short_id: string;
      /**
       * Stats
       * @description Commit statistics.
       * @default null
       */
      stats: {
          /**
           * Additions
           * @description Number of lines added.
           */
          additions: number;
          /**
           * Deletions
           * @description Number of lines deleted.
           */
          deletions: number;
          /**
           * Total
           * @description Total number of lines changed.
           */
          total: number;
      } | null;
      /**
       * Status
       * @description The status of the commit, often related to CI/CD pipeline status.
       * @default null
       */
      status: string | null;
      /**
       * Title
       * @description The commit title.
       */
      title: string;
      /**
       * Web Url
       * @description The URL to view the commit in the GitLab web interface.
       */
      web_url: string;
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
 * Type of GITLAB's GITLAB_GET_SINGLE_PIPELINE tool input.
 */
type GITLAB_GET_SINGLE_PIPELINE_INPUT = {
  /**
   * Pipeline Id
   * @description The ID of the pipeline.
   */
  pipeline_id?: number;
  /**
   * Project Id
   * @description The ID or URL-encoded path of the project.
   */
  project_id?: number | null;
};

/**
 * Type of GITLAB's GITLAB_GET_SINGLE_PIPELINE tool output.
 */
type GITLAB_GET_SINGLE_PIPELINE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Before Sha
       * @description The SHA of the commit before the pipeline's commit.
       * @default null
       */
      before_sha: string | null;
      /**
       * Committed At
       * Format: date-time
       * @description Timestamp of the commit.
       * @default null
       */
      committed_at: string | null;
      /**
       * Coverage
       * @description Test coverage report.
       * @default null
       */
      coverage: string | null;
      /**
       * Created At
       * Format: date-time
       * @description Timestamp of when the pipeline was created.
       */
      created_at: string;
      /**
       * DetailedStatus
       * @description Detailed status information.
       * @default null
       */
      detailed_status: {
          /**
           * Details Path
           * @description Path to the details page for the status.
           * @default null
           */
          details_path: string | null;
          /**
           * Favicon
           * @description Path to the favicon for the status.
           * @default null
           */
          favicon: string | null;
          /**
           * Group
           * @description Group of the status.
           * @default null
           */
          group: string | null;
          /**
           * Has Details
           * @description Indicates if there are details available for the status.
           * @default null
           */
          has_details: boolean | null;
          /**
           * Icon
           * @description Name of the icon representing the status.
           * @default null
           */
          icon: string | null;
          /**
           * Illustration
           * @description Illustration for the status.
           * @default null
           */
          illustration: {
              [key: string]: unknown;
          } | null;
          /**
           * Label
           * @description Label of the status.
           * @default null
           */
          label: string | null;
          /**
           * Text
           * @description Text of the status.
           * @default null
           */
          text: string | null;
          /**
           * Tooltip
           * @description Tooltip text for the status.
           * @default null
           */
          tooltip: string | null;
      } | null;
      /**
       * Duration
       * @description Duration of the pipeline in seconds.
       * @default null
       */
      duration: number | null;
      /**
       * Finished At
       * Format: date-time
       * @description Timestamp of when the pipeline finished.
       * @default null
       */
      finished_at: string | null;
      /**
       * Id
       * @description ID of the pipeline.
       */
      id: number;
      /**
       * Iid
       * @description Internal ID of the pipeline.
       */
      iid: number;
      /**
       * Name
       * @description Name of the pipeline.
       * @default null
       */
      name: string | null;
      /**
       * Project Id
       * @description ID of the project the pipeline belongs to.
       */
      project_id: number;
      /**
       * Queued Duration
       * @description Queued duration of the pipeline in seconds.
       * @default null
       */
      queued_duration: number | null;
      /**
       * Ref
       * @description Ref of the pipeline (branch or tag).
       */
      ref: string;
      /**
       * Sha
       * @description SHA of the commit the pipeline ran for.
       */
      sha: string;
      /**
       * Source
       * @description Source of the pipeline.
       * @enum {string}
       */
      source: "push" | "web" | "trigger" | "schedule" | "api" | "external" | "pipeline" | "chat" | "webide" | "merge_request_event" | "external_pull_request_event" | "parent_pipeline" | "onfetch";
      /**
       * Started At
       * Format: date-time
       * @description Timestamp of when the pipeline started.
       * @default null
       */
      started_at: string | null;
      /**
       * Status
       * @description Status of the pipeline.
       * @enum {string}
       */
      status: "created" | "waiting_for_resource" | "preparing" | "pending" | "running" | "success" | "failed" | "canceled" | "skipped" | "manual" | "scheduled";
      /**
       * Tag
       * @description Indicates if the pipeline was triggered by a tag.
       * @default null
       */
      tag: boolean | null;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp of when the pipeline was last updated.
       */
      updated_at: string;
      /**
       * User
       * @description Details of the user who triggered the pipeline.
       * @default null
       */
      user: {
          /**
           * Avatar Url
           * @description URL of the user's avatar.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Id
           * @description ID of the user.
           */
          id: number;
          /**
           * Name
           * @description Name of the user.
           */
          name: string;
          /**
           * State
           * @description State of the user (e.g., active).
           */
          state: string;
          /**
           * Username
           * @description Username of the user.
           */
          username: string;
          /**
           * Web Url
           * @description URL to the user's profile page.
           */
          web_url: string;
      } | null;
      /**
       * Web Url
       * @description URL to the pipeline's page in the GitLab UI.
       */
      web_url: string;
      /**
       * Yaml Errors
       * @description YAML validation errors, if any.
       * @default null
       */
      yaml_errors: string | null;
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
 * Type of GITLAB's GITLAB_GET_USER tool input.
 */
type GITLAB_GET_USER_INPUT = {
  /**
   * Id
   * @description The ID of the user.
   */
  id?: number;
};

/**
 * Type of GITLAB's GITLAB_GET_USER tool output.
 */
type GITLAB_GET_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description URL to the user's avatar image.
       * @default null
       */
      avatar_url: string | null;
      /**
       * Can Create Group
       * @description Whether the user can create groups (admin only).
       * @default null
       */
      can_create_group: boolean | null;
      /**
       * Can Create Project
       * @description Whether the user can create projects (admin only).
       * @default null
       */
      can_create_project: boolean | null;
      /**
       * Color Scheme Id
       * @description The user's color scheme ID (admin only).
       * @default null
       */
      color_scheme_id: number | null;
      /**
       * Commit Email
       * @description The user's commit email address (admin only).
       * @default null
       */
      commit_email: string | null;
      /**
       * Confirmed At
       * Format: date-time
       * @description Timestamp of when the user confirmed their account (admin only).
       * @default null
       */
      confirmed_at: string | null;
      /**
       * Created At
       * Format: date-time
       * @description Timestamp of when the user account was created.
       * @default null
       */
      created_at: string | null;
      /**
       * CreatorUser
       * @description Information about the user who created this user account (admin only). Can be null.
       * @default null
       */
      created_by: {
          /**
           * Avatar Url
           * @default null
           */
          avatar_url: string | null;
          /** Id */
          id: number;
          /** Name */
          name: string;
          /** State */
          state: string;
          /** Username */
          username: string;
          /** Web Url */
          web_url: string;
      } | null;
      /**
       * Current Sign In At
       * Format: date-time
       * @description Timestamp of the user's current sign-in (admin only).
       * @default null
       */
      current_sign_in_at: string | null;
      /**
       * Current Sign In Ip
       * @description The IP address of the user's current sign-in (admin only).
       * @default null
       */
      current_sign_in_ip: string | null;
      /**
       * Discord
       * @description The user's Discord ID.
       * @default null
       */
      discord: string | null;
      /**
       * Email
       * @description The user's primary email address (admin only).
       * @default null
       */
      email: string | null;
      /**
       * Email Reset Offered At
       * Format: date-time
       * @description Timestamp when an email reset was offered (admin only).
       * @default null
       */
      email_reset_offered_at: string | null;
      /**
       * External
       * @description Whether the user is an external user (admin only).
       * @default null
       */
      external: boolean | null;
      /**
       * Extra Shared Runners Minutes Limit
       * @description Extra shared runners minutes limit for the user (GitLab Premium/Ultimate; admin only).
       * @default null
       */
      extra_shared_runners_minutes_limit: number | null;
      /**
       * Followers
       * @description The number of followers the user has.
       * @default null
       */
      followers: number | null;
      /**
       * Following
       * @description The number of users this user is following.
       * @default null
       */
      following: number | null;
      /**
       * Github
       * @description The user's GitHub username.
       * @default null
       */
      github: string | null;
      /**
       * Id
       * @description The unique ID of the user.
       */
      id: number;
      /**
       * Identities
       * @description List of identities associated with the user (admin only).
       * @default null
       */
      identities: {
          /** Extern Uid */
          extern_uid: string;
          /** Provider */
          provider: string;
          /**
           * Saml Provider Id
           * @default null
           */
          saml_provider_id: number | null;
      }[] | null;
      /**
       * Is Admin
       * @description Whether the user is an administrator (admin only).
       * @default null
       */
      is_admin: boolean | null;
      /**
       * Is Auditor
       * @description Whether the user is an auditor (GitLab Premium/Ultimate; admin only).
       * @default null
       */
      is_auditor: boolean | null;
      /**
       * Is Followed
       * @description Whether the currently authenticated user follows this user.
       * @default null
       */
      is_followed: boolean | null;
      /**
       * Job Title
       * @description The user's job title.
       * @default null
       */
      job_title: string | null;
      /**
       * Last Activity On
       * @description Date of the user's last activity (admin only).
       * @default null
       */
      last_activity_on: string | null;
      /**
       * Last Sign In At
       * Format: date-time
       * @description Timestamp of the user's last sign-in (admin only).
       * @default null
       */
      last_sign_in_at: string | null;
      /**
       * Last Sign In Ip
       * @description The IP address of the user's last sign-in (admin only).
       * @default null
       */
      last_sign_in_ip: string | null;
      /**
       * Linkedin
       * @description The user's LinkedIn profile name.
       * @default null
       */
      linkedin: string | null;
      /**
       * Local Time
       * @description The user's local time.
       * @default null
       */
      local_time: string | null;
      /**
       * Location
       * @description The user's location.
       * @default null
       */
      location: string | null;
      /**
       * Locked
       * @description Whether the user account is locked.
       */
      locked: boolean;
      /**
       * Name
       * @description The full name of the user.
       */
      name: string;
      /**
       * Namespace Id
       * @description The ID of the user's personal namespace (admin only).
       * @default null
       */
      namespace_id: number | null;
      /**
       * Note
       * @description Administrator notes for the user (admin only).
       * @default null
       */
      note: string | null;
      /**
       * Organization
       * @description The user's organization.
       * @default null
       */
      organization: string | null;
      /**
       * Plan
       * @description The user's subscription plan (GitLab EE; admin only).
       * @default null
       */
      plan: string | null;
      /**
       * Private Profile
       * @description Whether the user's profile is private (admin only).
       * @default null
       */
      private_profile: boolean | null;
      /**
       * Projects Limit
       * @description The number of projects the user can create (admin only).
       * @default null
       */
      projects_limit: number | null;
      /**
       * Pronouns
       * @description The user's pronouns.
       * @default null
       */
      pronouns: string | null;
      /**
       * Provisioned By Group Id
       * @description ID of the group that provisioned the user via SAML (GitLab.com Premium/Ultimate; admin only).
       * @default null
       */
      provisioned_by_group_id: number | null;
      /**
       * Public Email
       * @description The user's public email address.
       * @default null
       */
      public_email: string | null;
      /**
       * Scim Identities
       * @description SCIM identities for the user (GitLab.com Premium/Ultimate; admin only).
       * @default null
       */
      scim_identities: {
          /** Active */
          active: boolean;
          /** Extern Uid */
          extern_uid: string;
          /** Group Id */
          group_id: string;
      }[] | null;
      /**
       * Shared Runners Minutes Limit
       * @description Shared runners minutes limit for the user (GitLab Premium/Ultimate; admin only).
       * @default null
       */
      shared_runners_minutes_limit: number | null;
      /**
       * Sign In Count
       * @description The number of times the user has signed in (admin only).
       * @default null
       */
      sign_in_count: number | null;
      /**
       * Skype
       * @description The user's Skype ID.
       * @default null
       */
      skype: string | null;
      /**
       * State
       * @description The state of the user account (e.g., "active").
       */
      state: string;
      /**
       * Theme Id
       * @description The user's theme ID (admin only).
       * @default null
       */
      theme_id: number | null;
      /**
       * Trial
       * @description Whether the user is on a trial plan (GitLab EE; admin only).
       * @default null
       */
      trial: boolean | null;
      /**
       * Twitter
       * @description The user's Twitter handle.
       * @default null
       */
      twitter: string | null;
      /**
       * Two Factor Enabled
       * @description Whether two-factor authentication is enabled for the user (admin only).
       * @default null
       */
      two_factor_enabled: boolean | null;
      /**
       * Username
       * @description The username of the user.
       */
      username: string;
      /**
       * Using License Seat
       * @description Whether the user is using a license seat (GitLab Premium/Ultimate; admin only).
       * @default null
       */
      using_license_seat: boolean | null;
      /**
       * Web Url
       * @description URL to the user's profile page.
       */
      web_url: string;
      /**
       * Website Url
       * @description The user's personal website URL.
       * @default null
       */
      website_url: string | null;
      /**
       * Work Information
       * @description Information about the user's work.
       * @default null
       */
      work_information: string | null;
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
 * Type of GITLAB's GITLAB_GET_USERS tool input.
 */
type GITLAB_GET_USERS_INPUT = {
  /**
   * Active
   * @description Filters only active users. Default is false.
   * @default null
   */
  active: boolean | null;
  /**
   * Admins
   * @description Return only administrators. Default is false. (Admin only)
   * @default null
   */
  admins: boolean | null;
  /**
   * Auditors
   * @description Return only auditor users. Default is false. If not included, it returns all users. (Admin only, Premium and Ultimate only)
   * @default null
   */
  auditors: boolean | null;
  /**
   * Blocked
   * @description Filters only blocked users. Default is false.
   * @default null
   */
  blocked: boolean | null;
  /**
   * Created After
   * Format: date-time
   * @description Return users created after specified time (ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ).
   * @default null
   */
  created_after: string | null;
  /**
   * Created Before
   * Format: date-time
   * @description Return users created before specified time (ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ).
   * @default null
   */
  created_before: string | null;
  /**
   * Exclude Active
   * @description Filters only non active users. Default is false.
   * @default null
   */
  exclude_active: boolean | null;
  /**
   * Exclude External
   * @description Filters only non external users. Default is false.
   * @default null
   */
  exclude_external: boolean | null;
  /**
   * Exclude Humans
   * @description Filters only bot or internal users. Default is false.
   * @default null
   */
  exclude_humans: boolean | null;
  /**
   * Exclude Internal
   * @description Filters only non internal users. Default is false.
   * @default null
   */
  exclude_internal: boolean | null;
  /**
   * Extern Uid
   * @description Get a single user with a specific external authentication provider UID. (Admin only)
   * @default null
   */
  extern_uid: string | null;
  /**
   * External
   * @description Filters only external users. Default is false.
   * @default null
   */
  external: boolean | null;
  /**
   * Humans
   * @description Filters only regular users that are not bot or internal users. Default is false.
   * @default null
   */
  humans: boolean | null;
  /**
   * Order By
   * @description Return users ordered by 'id', 'name', 'username', 'created_at', or 'updated_at' fields. Default is 'id'. (Admin only)
   * @default null
   * @enum {string|null}
   */
  order_by: "id" | "name" | "username" | "created_at" | "updated_at" | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination.
   * @default null
   */
  per_page: number | null;
  /**
   * Provider
   * @description The external provider. (Admin only)
   * @default null
   */
  provider: string | null;
  /**
   * Search
   * @description Search for users by name, username, or public email.
   * @default null
   */
  search: string | null;
  /**
   * Skip Ldap
   * @description Skip LDAP users. (Admin only, Premium and Ultimate only)
   * @default null
   */
  skip_ldap: boolean | null;
  /**
   * Sort
   * @description Return users sorted in 'asc' or 'desc' order. Default is 'desc'. (Admin only)
   * @default null
   * @enum {string|null}
   */
  sort: "asc" | "desc" | null;
  /**
   * Two Factor
   * @description Filter users by Two-factor authentication. Filter values are 'enabled' or 'disabled'. (Admin only)
   * @default null
   * @enum {string|null}
   */
  two_factor: "enabled" | "disabled" | null;
  /**
   * Username
   * @description Get a single user with a specific username.
   * @default null
   */
  username: string | null;
  /**
   * Without Project Bots
   * @description Filters user without project bots. Default is false.
   * @default null
   */
  without_project_bots: boolean | null;
  /**
   * Without Projects
   * @description Filter users without projects. Default is false. (Admin only)
   * @default null
   */
  without_projects: boolean | null;
};

/**
 * Type of GITLAB's GITLAB_GET_USERS tool output.
 */
type GITLAB_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of users.
       */
      users: {
          /**
           * Avatar Url
           * @default null
           */
          avatar_url: string | null;
          /**
           * Bio
           * @default null
           */
          bio: string | null;
          /**
           * Can Create Group
           * @default null
           */
          can_create_group: boolean | null;
          /**
           * Can Create Project
           * @default null
           */
          can_create_project: boolean | null;
          /**
           * Color Scheme Id
           * @default null
           */
          color_scheme_id: number | null;
          /**
           * Confirmed At
           * Format: date-time
           * @default null
           */
          confirmed_at: string | null;
          /**
           * Created At
           * Format: date-time
           * @default null
           */
          created_at: string | null;
          /**
           * Current Sign In At
           * Format: date-time
           * @default null
           */
          current_sign_in_at: string | null;
          /**
           * Current Sign In Ip
           * @default null
           */
          current_sign_in_ip: string | null;
          /**
           * Discord
           * @default null
           */
          discord: string | null;
          /**
           * Email
           * @default null
           */
          email: string | null;
          /**
           * External
           * @default null
           */
          external: boolean | null;
          /**
           * Extra Shared Runners Minutes Limit
           * @default null
           */
          extra_shared_runners_minutes_limit: number | null;
          /**
           * Github
           * @default null
           */
          github: string | null;
          /** Id */
          id: number;
          /**
           * Identities
           * @default null
           */
          identities: {
              [key: string]: string;
          }[] | null;
          /**
           * Is Admin
           * @default null
           */
          is_admin: boolean | null;
          /**
           * Is Auditor
           * @default null
           */
          is_auditor: boolean | null;
          /**
           * Job Title
           * @default null
           */
          job_title: string | null;
          /**
           * Last Activity On
           * @default null
           */
          last_activity_on: string | null;
          /**
           * Last Sign In At
           * Format: date-time
           * @default null
           */
          last_sign_in_at: string | null;
          /**
           * Last Sign In Ip
           * @default null
           */
          last_sign_in_ip: string | null;
          /**
           * Linkedin
           * @default null
           */
          linkedin: string | null;
          /**
           * Location
           * @default null
           */
          location: string | null;
          /**
           * Locked
           * @default null
           */
          locked: boolean | null;
          /** Name */
          name: string;
          /**
           * Namespace Id
           * @default null
           */
          namespace_id: number | null;
          /**
           * Note
           * @default null
           */
          note: string | null;
          /**
           * Organization
           * @default null
           */
          organization: string | null;
          /**
           * Private Profile
           * @default null
           */
          private_profile: boolean | null;
          /**
           * Projects Limit
           * @default null
           */
          projects_limit: number | null;
          /**
           * Public Email
           * @default null
           */
          public_email: string | null;
          /**
           * Scim Identities
           * @default null
           */
          scim_identities: {
              /** Active */
              active: boolean;
              /** Extern Uid */
              extern_uid: string;
              /** Group Id */
              group_id: string;
          }[] | null;
          /**
           * Shared Runners Minutes Limit
           * @default null
           */
          shared_runners_minutes_limit: number | null;
          /**
           * Skype
           * @default null
           */
          skype: string | null;
          /** State */
          state: string;
          /**
           * Theme Id
           * @default null
           */
          theme_id: number | null;
          /**
           * Twitter
           * @default null
           */
          twitter: string | null;
          /**
           * Two Factor Enabled
           * @default null
           */
          two_factor_enabled: boolean | null;
          /** Username */
          username: string;
          /**
           * Using License Seat
           * @default null
           */
          using_license_seat: boolean | null;
          /** Web Url */
          web_url: string;
          /**
           * Website Url
           * @default null
           */
          website_url: string | null;
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
 * Type of GITLAB's GITLAB_GET_USERS_ID_STATUS tool input.
 */
type GITLAB_GET_USERS_ID_STATUS_INPUT = {
  /**
   * User Id
   * @description The numeric ID of the GitLab user whose status you want to retrieve.
   */
  user_id?: number;
};

/**
 * Type of GITLAB's GITLAB_GET_USERS_ID_STATUS tool output.
 */
type GITLAB_GET_USERS_ID_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Availability
       * @description Availability status of the user (e.g., 'online', 'away', 'busy').
       * @default null
       */
      availability: string | null;
      /**
       * Clear Status After
       * @description Duration after which the status will be cleared (e.g., '30 minutes').
       * @default null
       */
      clear_status_after: string | null;
      /**
       * Clear Status At
       * @description ISO 8601 timestamp when the status will be automatically cleared.
       * @default null
       */
      clear_status_at: string | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when this status was first created.
       * @default null
       */
      created_at: string | null;
      /**
       * Emoji
       * @description Emoji code representing the user's status.
       * @default null
       */
      emoji: string | null;
      /**
       * Message
       * @description Custom status message the user has set.
       * @default null
       */
      message: string | null;
      /**
       * Updated At
       * @description ISO 8601 timestamp when this status was last updated.
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
 * Type of GITLAB's GITLAB_GET_USER_PREFERENCES tool input.
 */
type GITLAB_GET_USER_PREFERENCES_INPUT = object;

/**
 * Type of GITLAB's GITLAB_GET_USER_PREFERENCES tool output.
 */
type GITLAB_GET_USER_PREFERENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the user preferences record.
       */
      id: number;
      /**
       * Pass User Identities To Ci Jwt
       * @description Indicates if the user passes their external identities to CI JWT payloads.
       */
      pass_user_identities_to_ci_jwt: boolean;
      /**
       * Show Whitespace In Diffs
       * @description Indicates if whitespace changes are shown in diffs.
       */
      show_whitespace_in_diffs: boolean;
      /**
       * User Id
       * @description The ID of the user to whom these preferences belong.
       */
      user_id: number;
      /**
       * View Diffs File By File
       * @description Indicates if the user views diffs one file at a time.
       */
      view_diffs_file_by_file: boolean;
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
 * Type of GITLAB's GITLAB_GET_USER_STATUS tool input.
 */
type GITLAB_GET_USER_STATUS_INPUT = object;

/**
 * Type of GITLAB's GITLAB_GET_USER_STATUS tool output.
 */
type GITLAB_GET_USER_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Availability
       * @description The user's availability status: 'online', 'busy', 'offline'.
       * @default null
       */
      availability: string | null;
      /**
       * Clear Status At
       * @description ISO 8601 timestamp when the status will be cleared, if set.
       * @default null
       */
      clear_status_at: string | null;
      /**
       * Emoji
       * @description The user's status emoji, e.g. ':smile:'
       * @default null
       */
      emoji: string | null;
      /**
       * Is Ooo
       * @description Indicates if the user is marked out-of-office
       * @default null
       */
      is_ooo: boolean | null;
      /**
       * Message
       * @description The user's status message text.
       * @default null
       */
      message: string | null;
      /**
       * Message Html
       * @description The HTML-formatted status message.
       * @default null
       */
      message_html: string | null;
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
 * Type of GITLAB's GITLAB_GET_USER_SUPPORT_PIN tool input.
 */
type GITLAB_GET_USER_SUPPORT_PIN_INPUT = object;

/**
 * Type of GITLAB's GITLAB_GET_USER_SUPPORT_PIN tool output.
 */
type GITLAB_GET_USER_SUPPORT_PIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expires At
       * @description ISO 8601 timestamp when the Support PIN expires.
       */
      expires_at: string;
      /**
       * Pin
       * @description The 6-digit Support PIN for the current user.
       */
      pin: string;
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
 * Type of GITLAB's GITLAB_IMPORT_PROJECT_MEMBERS tool input.
 */
type GITLAB_IMPORT_PROJECT_MEMBERS_INPUT = {
  /**
   * Id
   * @description ID or URL-encoded path of the target project to receive members.
   */
  id?: string;
  /**
   * Project Id
   * @description ID or URL-encoded path of the source project to import members from.
   */
  project_id?: string;
};

/**
 * Type of GITLAB's GITLAB_IMPORT_PROJECT_MEMBERS tool output.
 */
type GITLAB_IMPORT_PROJECT_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Detailed error messages for individual users when some imports fail.
       * @default null
       */
      message: {
          [key: string]: string;
      } | null;
      /**
       * Status
       * @description The status of the import operation.
       * @enum {string}
       */
      status: "success" | "error";
      /**
       * Total Members Count
       * @description Total number of members processed when an error occurs.
       * @default null
       */
      total_members_count: number | null;
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
 * Type of GITLAB's GITLAB_LIST_ALL_GROUP_MEMBERS tool input.
 */
type GITLAB_LIST_ALL_GROUP_MEMBERS_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the group.
   */
  id?: number | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of GITLAB's GITLAB_LIST_ALL_GROUP_MEMBERS tool output.
 */
type GITLAB_LIST_ALL_GROUP_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Members
       * @description A list of all members (direct, inherited, invited) of the group.
       */
      members: {
          /**
           * Access Level
           * @description Access level granted to the member.
           */
          access_level: number;
          /**
           * Avatar Url
           * @description URL to the member's avatar image, if available.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Created At
           * @description Timestamp when the membership was created.
           */
          created_at: string;
          /**
           * CreatedBy
           * @description User who added this member, if available.
           * @default null
           */
          created_by: {
              /**
               * Avatar Url
               * @description URL to the creator's avatar image, if available.
               * @default null
               */
              avatar_url: string | null;
              /**
               * Id
               * @description ID of the user who added this member.
               */
              id: number;
              /**
               * Name
               * @description Name of the creator.
               */
              name: string;
              /**
               * State
               * @description State of the creator (e.g., 'active').
               */
              state: string;
              /**
               * Username
               * @description Username of the creator.
               */
              username: string;
              /**
               * Web Url
               * @description Web URL to the creator's profile.
               */
              web_url: string;
          } | null;
          /**
           * Expires At
           * @description Membership expiration date in ISO 8601 format, if any.
           * @default null
           */
          expires_at: string | null;
          /**
           * GroupSamlIdentity
           * @description SAML identity details for the member, if applicable.
           * @default null
           */
          group_saml_identity: {
              /**
               * Extern Uid
               * @description Extern UID of the SAML identity.
               */
              extern_uid: string;
              /**
               * Provider
               * @description Provider for the SAML identity.
               */
              provider: string;
              /**
               * Saml Provider Id
               * @description ID of the SAML provider.
               */
              saml_provider_id: number;
          } | null;
          /**
           * Id
           * @description Unique ID of the group membership record.
           */
          id: number;
          /**
           * Locked
           * @description Lock status of the member, if available.
           * @default null
           */
          locked: boolean | null;
          /**
           * Membership State
           * @description Membership state (e.g., 'active', 'blocked').
           * @default null
           */
          membership_state: string | null;
          /**
           * Name
           * @description Full name of the group member.
           */
          name: string;
          /**
           * Public Email
           * @description Public email of the member, if available.
           * @default null
           */
          public_email: string | null;
          /**
           * State
           * @description State of the member (e.g., 'active').
           */
          state: string;
          /**
           * Username
           * @description Username of the group member.
           */
          username: string;
          /**
           * Web Url
           * @description URL to the member's GitLab profile.
           */
          web_url: string;
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
 * Type of GITLAB's GITLAB_LIST_ALL_PROJECT_MEMBERS tool input.
 */
type GITLAB_LIST_ALL_PROJECT_MEMBERS_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination.
   * @default null
   */
  per_page: number | null;
  /**
   * Query
   * @description Filters results based on a given name, email, or username. Use partial values to widen the scope of the query.
   * @default null
   */
  query: string | null;
  /**
   * Show Seat Info
   * @description Show seat information for users.
   * @default null
   */
  show_seat_info: boolean | null;
  /**
   * State
   * @description Filter results by member state, one of 'awaiting' or 'active'. Premium and Ultimate only.
   * @default null
   * @enum {string|null}
   */
  state: "awaiting" | "active" | null;
  /**
   * User Ids
   * @description Filter the results on the given user IDs.
   * @default null
   */
  user_ids: number[] | null;
};

/**
 * Type of GITLAB's GITLAB_LIST_ALL_PROJECT_MEMBERS tool output.
 */
type GITLAB_LIST_ALL_PROJECT_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Members
       * @description List of project members, including direct, inherited, and invited members.
       */
      members: {
          /**
           * Access Level
           * @description Access level granted to the user.
           */
          access_level: number;
          /**
           * Avatar Url
           * @description URL to the member's avatar image.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Created At
           * @description Timestamp when the membership was created.
           */
          created_at: string;
          /**
           * CreatedBy
           * @description User who added this member, if available.
           * @default null
           */
          created_by: {
              /**
               * Avatar Url
               * @description URL to the creator's avatar, if available.
               * @default null
               */
              avatar_url: string | null;
              /**
               * Id
               * @description ID of the user who added this member.
               */
              id: number;
              /**
               * Name
               * @description Name of the creator.
               */
              name: string;
              /**
               * State
               * @description State of the creator (e.g., 'active').
               */
              state: string;
              /**
               * Username
               * @description Username of the creator.
               */
              username: string;
              /**
               * Web Url
               * @description Web URL of the creator's profile.
               */
              web_url: string;
          } | null;
          /**
           * Email
           * @description Email of the user, if visible.
           * @default null
           */
          email: string | null;
          /**
           * Expires At
           * @description Expiration date of the membership, if any.
           * @default null
           */
          expires_at: string | null;
          /**
           * GroupSamlIdentity
           * @description SAML identity details, if applicable.
           * @default null
           */
          group_saml_identity: {
              /**
               * Extern Uid
               * @description Extern UID of the SAML identity.
               */
              extern_uid: string;
              /**
               * Provider
               * @description Provider for the SAML identity.
               */
              provider: string;
              /**
               * Saml Provider Id
               * @description ID of the SAML provider.
               */
              saml_provider_id: number;
          } | null;
          /**
           * Id
           * @description ID of the project member.
           */
          id: number;
          /**
           * Name
           * @description Name of the project member.
           */
          name: string;
          /**
           * State
           * @description State of the member (e.g., 'active').
           */
          state: string;
          /**
           * Username
           * @description Username of the project member.
           */
          username: string;
          /**
           * Web Url
           * @description Web URL of the member's profile.
           */
          web_url: string;
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
 * Type of GITLAB's GITLAB_LIST_BILLABLE_GROUP_MEMBERS tool input.
 */
type GITLAB_LIST_BILLABLE_GROUP_MEMBERS_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the top-level group. Only top-level groups are supported.
   */
  id?: number | null;
  /**
   * Page
   * @description Page number for pagination (must be ≥ 1).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination (must be ≥ 1).
   * @default null
   */
  per_page: number | null;
  /**
   * Search
   * @description Search string to filter members by name, username, or public email.
   * @default null
   */
  search: string | null;
  /**
   * Sort
   * @description Sort order for results. Supported values: access_level_asc|access_level_desc|last_joined|name_asc|name_desc|oldest_joined|oldest_sign_in|recent_sign_in|last_activity_on_asc|last_activity_on_desc.
   * @default null
   * @enum {string|null}
   */
  sort: "access_level_asc" | "access_level_desc" | "last_joined" | "name_asc" | "name_desc" | "oldest_joined" | "oldest_sign_in" | "recent_sign_in" | "last_activity_on_asc" | "last_activity_on_desc" | null;
};

/**
 * Type of GITLAB's GITLAB_LIST_BILLABLE_GROUP_MEMBERS tool output.
 */
type GITLAB_LIST_BILLABLE_GROUP_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Members
       * @description A list of billable members for the specified group.
       */
      members: {
          /**
           * Avatar Url
           * @description URL to the member's avatar image, if available.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Created At
           * @description Timestamp when the membership was created (ISO 8601 format).
           */
          created_at: string;
          /**
           * Email
           * @description Public email address of the member, if available.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description The unique ID of the user.
           */
          id: number;
          /**
           * Last Activity On
           * @description Date of last activity for the member (ISO 8601 format).
           */
          last_activity_on: string;
          /**
           * Last Login At
           * @description Timestamp of the member's last login (ISO 8601 format), if available.
           * @default null
           */
          last_login_at: string | null;
          /**
           * Membership Type
           * @description Membership type (e.g., 'group_member' or 'group_invite').
           */
          membership_type: string;
          /**
           * Name
           * @description Full name of the group member.
           */
          name: string;
          /**
           * Removable
           * @description Indicates if the member can be removed from the group.
           */
          removable: boolean;
          /**
           * State
           * @description Account state of the member (e.g., 'active').
           */
          state: string;
          /**
           * Username
           * @description Username of the group member.
           */
          username: string;
          /**
           * Web Url
           * @description URL to the member's GitLab profile.
           */
          web_url: string;
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
 * Type of GITLAB's GITLAB_LIST_GROUP_MEMBERS tool input.
 */
type GITLAB_LIST_GROUP_MEMBERS_INPUT = {
  /**
   * Active
   * @description When true, return only active users.
   * @default null
   */
  active: boolean | null;
  /**
   * Id
   * @description The ID or URL-encoded path of the group.
   */
  id?: number | null;
  /**
   * Include Inherited
   * @description Include members inherited from ancestor groups when true.
   * @default null
   */
  include_inherited: boolean | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page (1–100).
   * @default null
   */
  per_page: number | null;
  /**
   * Query
   * @description Filter members by name, username, or email substring.
   * @default null
   */
  query: string | null;
  /**
   * Relations
   * @description Membership relation types to include: direct, descendants, inherited, or shared.
   * @default null
   */
  relations: string[] | null;
  /**
   * Skip Users
   * @description List of user IDs to exclude from the results.
   * @default null
   */
  skip_users: number[] | null;
  /**
   * Sort
   * @description Order results by access level, ascending or descending.
   * @default null
   * @enum {string|null}
   */
  sort: "access_level_asc" | "access_level_desc" | null;
  /**
   * Two Factor
   * @description Filter users by two-factor authentication status.
   * @default null
   * @enum {string|null}
   */
  two_factor: "enabled" | "disabled" | null;
};

/**
 * Type of GITLAB's GITLAB_LIST_GROUP_MEMBERS tool output.
 */
type GITLAB_LIST_GROUP_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Members
       * @description List of group member objects.
       */
      members: {
          /**
           * Access Level
           * @description Access level granted to the member.
           */
          access_level: number;
          /**
           * Avatar Url
           * @description URL to the member's avatar image.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Email
           * @description Email address of the member (admin only).
           * @default null
           */
          email: string | null;
          /**
           * Expires At
           * @description Membership expiration date in ISO 8601 format.
           * @default null
           */
          expires_at: string | null;
          /**
           * Id
           * @description User ID of the member.
           */
          id: number;
          /**
           * Name
           * @description Full name of the member.
           */
          name: string;
          /**
           * State
           * @description Account state (e.g., 'active').
           */
          state: string;
          /**
           * Username
           * @description Username of the member.
           */
          username: string;
          /**
           * Web Url
           * @description URL to the member's GitLab profile.
           */
          web_url: string;
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
 * Type of GITLAB's GITLAB_LIST_PENDING_GROUP_MEMBERS tool input.
 */
type GITLAB_LIST_PENDING_GROUP_MEMBERS_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the top-level group.
   */
  id?: number | null;
  /**
   * Page
   * @description Page number for pagination (1-based index).
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination (max 100).
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of GITLAB's GITLAB_LIST_PENDING_GROUP_MEMBERS tool output.
 */
type GITLAB_LIST_PENDING_GROUP_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pending Members
       * @description List of pending group members.
       */
      pending_members: {
          /**
           * Approved
           * @description Whether the membership has been approved.
           */
          approved: boolean;
          /**
           * Avatar Url
           * @description URL of the user's avatar.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Email
           * @description Email address of the pending user or invitee.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description ID of the pending membership record.
           */
          id: number;
          /**
           * Invited
           * @description Whether the membership was invited but not yet registered.
           */
          invited: boolean;
          /**
           * Name
           * @description Full name of the user pending membership (if available).
           * @default null
           */
          name: string | null;
          /**
           * Username
           * @description Username of the user pending membership (if available).
           * @default null
           */
          username: string | null;
          /**
           * Web Url
           * @description Web URL of the user's profile (if available).
           * @default null
           */
          web_url: string | null;
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
 * Type of GITLAB's GITLAB_LIST_PIPELINE_JOBS tool input.
 */
type GITLAB_LIST_PIPELINE_JOBS_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * Include Retried
   * @description Include retried jobs in the response. Defaults to false.
   * @default false
   */
  include_retried: boolean | null;
  /**
   * Pipeline Id
   * @description The ID of the pipeline.
   */
  pipeline_id?: number;
  /**
   * Scope
   * @description The scope of jobs to show. Can be a single status or a list of statuses. If not provided, all jobs are returned.
   * @default null
   * @enum {string|null}
   */
  scope: "canceled" | "canceling" | "created" | "failed" | "manual" | "pending" | "preparing" | "running" | "scheduled" | "skipped" | "success" | "waiting_for_resource" | null;
};

/**
 * Type of GITLAB's GITLAB_LIST_PIPELINE_JOBS tool output.
 */
type GITLAB_LIST_PIPELINE_JOBS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Jobs
       * @description A list of jobs for the specified pipeline.
       */
      jobs: {
          /** Allow Failure */
          allow_failure: boolean;
          /**
           * Artifacts
           * @default null
           */
          artifacts: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Artifacts Expire At
           * @default null
           */
          artifacts_expire_at: string | null;
          /**
           * Artifacts File
           * @default null
           */
          artifacts_file: {
              [key: string]: unknown;
          } | null;
          /**
           * Commit
           * @default null
           */
          commit: {
              [key: string]: unknown;
          } | null;
          /**
           * Coverage
           * @default null
           */
          coverage: number | null;
          /** Created At */
          created_at: string;
          /**
           * Duration
           * @default null
           */
          duration: number | null;
          /**
           * Finished At
           * @default null
           */
          finished_at: string | null;
          /** Id */
          id: number;
          /** Name */
          name: string;
          /**
           * Pipeline
           * @default null
           */
          pipeline: {
              [key: string]: unknown;
          } | null;
          /**
           * Project
           * @default null
           */
          project: {
              [key: string]: unknown;
          } | null;
          /**
           * Queued Duration
           * @default null
           */
          queued_duration: number | null;
          /** Ref */
          ref: string;
          /**
           * Runner
           * @default null
           */
          runner: {
              [key: string]: unknown;
          } | null;
          /** Stage */
          stage: string;
          /**
           * Started At
           * @default null
           */
          started_at: string | null;
          /** Status */
          status: string;
          /** Tag */
          tag: boolean;
          /**
           * Tag List
           * @default null
           */
          tag_list: string[] | null;
          /**
           * User
           * @default null
           */
          user: {
              [key: string]: unknown;
          } | null;
          /** Web Url */
          web_url: string;
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
 * Type of GITLAB's GITLAB_LIST_PROJECT_GROUPS tool input.
 */
type GITLAB_LIST_PROJECT_GROUPS_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * Page
   * @description Page number of the results to retrieve.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items to return per page.
   * @default null
   */
  per_page: number | null;
  /**
   * Search
   * @description Search for specific groups by name.
   * @default null
   */
  search: string | null;
  /**
   * Shared Min Access Level
   * @description Limit to shared groups with at least this access level.
   * @default null
   */
  shared_min_access_level: number | null;
  /**
   * Shared Visible Only
   * @description Limit to shared groups user has access to.
   * @default null
   */
  shared_visible_only: boolean | null;
  /**
   * Skip Groups
   * @description Skip the group IDs passed.
   * @default null
   */
  skip_groups: number[] | null;
  /**
   * With Shared
   * @description Include projects shared with this group. Default is false.
   * @default null
   */
  with_shared: boolean | null;
};

/**
 * Type of GITLAB's GITLAB_LIST_PROJECT_GROUPS tool output.
 */
type GITLAB_LIST_PROJECT_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Groups
       * @description A list of ancestor or shared groups for the project.
       */
      groups: {
          /**
           * Avatar Url
           * @description URL to the group's avatar image.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Full Name
           * @description The full name of the group (namespace included).
           */
          full_name: string;
          /**
           * Full Path
           * @description The full path of the group.
           */
          full_path: string;
          /**
           * Id
           * @description The ID of the group.
           */
          id: number;
          /**
           * Name
           * @description The name of the group.
           */
          name: string;
          /**
           * Web Url
           * @description The web URL of the group.
           */
          web_url: string;
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
 * Type of GITLAB's GITLAB_LIST_PROJECT_INVITED_GROUPS tool input.
 */
type GITLAB_LIST_PROJECT_INVITED_GROUPS_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items to return per page.
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of GITLAB's GITLAB_LIST_PROJECT_INVITED_GROUPS tool output.
 */
type GITLAB_LIST_PROJECT_INVITED_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invited Groups
       * @description List of invited group objects.
       */
      invited_groups: {
          /**
           * Avatar Url
           * @description Avatar URL of the group.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Full Name
           * @description Full name of the group.
           */
          full_name: string;
          /**
           * Full Path
           * @description Full path of the group.
           */
          full_path: string;
          /**
           * Id
           * @description ID of the invited group.
           */
          id: number;
          /**
           * Name
           * @description Name of the invited group.
           */
          name: string;
          /**
           * Web Url
           * @description Web URL of the invited group.
           */
          web_url: string;
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
 * Type of GITLAB's GITLAB_LIST_PROJECT_PIPELINES tool input.
 */
type GITLAB_LIST_PROJECT_PIPELINES_INPUT = {
  /**
   * Created After
   * Format: date-time
   * @description Return pipelines created after the specified date (ISO 8601 format).
   * @default null
   */
  created_after: string | null;
  /**
   * Created Before
   * Format: date-time
   * @description Return pipelines created before the specified date (ISO 8601 format).
   * @default null
   */
  created_before: string | null;
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * Name
   * @description Return pipelines with the specified name.
   * @default null
   */
  name: string | null;
  /**
   * Order By
   * @description Order pipelines by 'id', 'status', 'ref', 'updated_at' or 'user_id'.
   * @default id
   * @enum {string|null}
   */
  order_by: "id" | "status" | "ref" | "updated_at" | "user_id" | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination.
   * @default null
   */
  per_page: number | null;
  /**
   * Ref
   * @description The ref of pipelines.
   * @default null
   */
  ref: string | null;
  /**
   * Scope
   * @description The scope of pipelines, one of: 'running', 'pending', 'finished', 'branches', 'tags'.
   * @default null
   * @enum {string|null}
   */
  scope: "running" | "pending" | "finished" | "branches" | "tags" | null;
  /**
   * Sha
   * @description The SHA of pipelines.
   * @default null
   */
  sha: string | null;
  /**
   * Sort
   * @description Sort pipelines in 'asc' or 'desc' order.
   * @default desc
   * @enum {string|null}
   */
  sort: "asc" | "desc" | null;
  /**
   * Source
   * @description The pipeline source. To return child pipelines, set to 'parent_pipeline'.
   * @default null
   */
  source: string | null;
  /**
   * Status
   * @description The status of pipelines.
   * @default null
   * @enum {string|null}
   */
  status: "created" | "waiting_for_resource" | "preparing" | "pending" | "running" | "success" | "failed" | "canceled" | "skipped" | "manual" | "scheduled" | null;
  /**
   * Updated After
   * Format: date-time
   * @description Return pipelines updated after the specified date (ISO 8601 format).
   * @default null
   */
  updated_after: string | null;
  /**
   * Updated Before
   * Format: date-time
   * @description Return pipelines updated before the specified date (ISO 8601 format).
   * @default null
   */
  updated_before: string | null;
  /**
   * Username
   * @description The username of the user who triggered pipelines.
   * @default null
   */
  username: string | null;
  /**
   * Yaml Errors
   * @description Returns pipelines with invalid configurations.
   * @default null
   */
  yaml_errors: boolean | null;
};

/**
 * Type of GITLAB's GITLAB_LIST_PROJECT_PIPELINES tool output.
 */
type GITLAB_LIST_PROJECT_PIPELINES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pipelines
       * @description A list of pipelines for the specified project.
       */
      pipelines: {
          /**
           * Created At
           * Format: date-time
           * @description The creation date of the pipeline.
           */
          created_at: string;
          /**
           * Id
           * @description The ID of the pipeline.
           */
          id: number;
          /**
           * Iid
           * @description The IID of the pipeline.
           */
          iid: number;
          /**
           * Name
           * @description The name of the pipeline.
           * @default null
           */
          name: string | null;
          /**
           * Project Id
           * @description The ID of the project.
           */
          project_id: number;
          /**
           * Ref
           * @description The ref of the pipeline.
           */
          ref: string;
          /**
           * Sha
           * @description The SHA of the pipeline.
           */
          sha: string;
          /**
           * Source
           * @description The source of the pipeline.
           */
          source: string;
          /**
           * Status
           * @description The status of the pipeline.
           */
          status: string;
          /**
           * Updated At
           * Format: date-time
           * @description The last update date of the pipeline.
           */
          updated_at: string;
          /**
           * Web Url
           * @description The web URL of the pipeline.
           */
          web_url: string;
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
 * Type of GITLAB's GITLAB_LIST_PROJECT_SHAREABLE_GROUPS tool input.
 */
type GITLAB_LIST_PROJECT_SHAREABLE_GROUPS_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page for pagination.
   * @default null
   */
  per_page: number | null;
  /**
   * Search
   * @description Search term to filter groups by name or path.
   * @default null
   */
  search: string | null;
  /**
   * Skip Groups
   * @description List of group IDs to exclude from the results.
   * @default null
   */
  skip_groups: number[] | null;
};

/**
 * Type of GITLAB's GITLAB_LIST_PROJECT_SHAREABLE_GROUPS tool output.
 */
type GITLAB_LIST_PROJECT_SHAREABLE_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Groups
       * @description List of shareable group objects.
       */
      groups: {
          /**
           * Avatar Url
           * @description URL to the group's avatar image.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Full Path
           * @description Full path of the group.
           */
          full_path: string;
          /**
           * Id
           * @description Group ID.
           */
          id: number;
          /**
           * Lfs Enabled
           * @description Indicates if LFS is enabled for the group.
           */
          lfs_enabled: boolean;
          /**
           * Name
           * @description Group name.
           */
          name: string;
          /**
           * Parent Id
           * @description ID of the parent group, if any.
           * @default null
           */
          parent_id: number | null;
          /**
           * Path
           * @description Group path.
           */
          path: string;
          /**
           * Request Access Enabled
           * @description Indicates if users can request access to the group.
           */
          request_access_enabled: boolean;
          /**
           * Visibility
           * @description Visibility level of the group.
           */
          visibility: string;
          /**
           * Web Url
           * @description Web URL of the group.
           */
          web_url: string;
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
 * Type of GITLAB's GITLAB_LIST_PROJECT_TAGS tool input.
 */
type GITLAB_LIST_PROJECT_TAGS_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * Order By
   * @description Return tags ordered by `name`, `updated`, or `version`. Default is `updated`.
   * @default null
   */
  order_by: string | null;
  /**
   * Page
   * @description Page number of the results to retrieve.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items to return per page.
   * @default null
   */
  per_page: number | null;
  /**
   * Search
   * @description Return a list of tags matching the search criteria. You can use `^term` and `term$` to find tags that begin and end with `term`.
   * @default null
   */
  search: string | null;
  /**
   * Sort
   * @description Return tags sorted in `asc` or `desc` order. Default is `desc`.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of GITLAB's GITLAB_LIST_PROJECT_TAGS tool output.
 */
type GITLAB_LIST_PROJECT_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tags
       * @description A list of repository tags.
       */
      tags: {
          /**
           * Commit
           * @description An object containing details about the commit the tag points to.
           */
          commit: {
              /**
               * Author Email
               * @description The email of the commit author.
               */
              author_email: string;
              /**
               * Author Name
               * @description The name of the commit author.
               */
              author_name: string;
              /**
               * Authored Date
               * @description The timestamp when the commit was authored (ISO 8601 format).
               */
              authored_date: string;
              /**
               * Committed Date
               * @description The timestamp when the commit was committed (ISO 8601 format).
               */
              committed_date: string;
              /**
               * Committer Email
               * @description The email of the committer.
               */
              committer_email: string;
              /**
               * Committer Name
               * @description The name of the committer.
               */
              committer_name: string;
              /**
               * Created At
               * @description The timestamp when the commit was created (ISO 8601 format).
               */
              created_at: string;
              /**
               * Id
               * @description The full commit SHA.
               */
              id: string;
              /**
               * Message
               * @description The full commit message.
               */
              message: string;
              /**
               * Parent Ids
               * @description A list of parent commit SHAs.
               */
              parent_ids: string[];
              /**
               * Short Id
               * @description The short commit SHA.
               */
              short_id: string;
              /**
               * Title
               * @description The commit title.
               */
              title: string;
          };
          /**
           * Created At
           * @description The timestamp when the tag was created (ISO 8601 format). This field is present for annotated tags and was introduced in GitLab 16.11. For lightweight tags, this can be null.
           * @default null
           */
          created_at: string | null;
          /**
           * Message
           * @description The message associated with the tag, if any.
           * @default null
           */
          message: string | null;
          /**
           * Name
           * @description The name of the tag (e.g., "v1.0.0").
           */
          name: string;
          /**
           * Protected
           * @description A boolean indicating whether the tag is protected.
           */
          protected: boolean;
          /**
           * Release
           * @description An object containing details about the release associated with the tag, if any.
           * @default null
           */
          release: {
              /**
               * Description
               * @description The description of the release.
               */
              description: string;
              /**
               * Tag Name
               * @description The name of the tag for the release.
               */
              tag_name: string;
          } | null;
          /**
           * Target
           * @description The commit SHA or tag object ID the tag points to.
           */
          target: string;
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
 * Type of GITLAB's GITLAB_LIST_PROJECT_TRANSFER_LOCATIONS tool input.
 */
type GITLAB_LIST_PROJECT_TRANSFER_LOCATIONS_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * Search
   * @description The group names to search for.
   * @default null
   */
  search: string | null;
};

/**
 * Type of GITLAB's GITLAB_LIST_PROJECT_TRANSFER_LOCATIONS tool output.
 */
type GITLAB_LIST_PROJECT_TRANSFER_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Locations
       * @description List of available namespace transfer locations.
       */
      locations: {
          /**
           * Avatar Url
           * @description URL to the namespace's avatar image, if any.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Full Name
           * @description Full display name of the namespace.
           */
          full_name: string;
          /**
           * Full Path
           * @description Full path of the namespace.
           */
          full_path: string;
          /**
           * Id
           * @description Group or namespace ID.
           */
          id: number;
          /**
           * Name
           * @description Name of the namespace.
           */
          name: string;
          /**
           * Web Url
           * @description Web URL of the namespace.
           */
          web_url: string;
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
 * Type of GITLAB's GITLAB_LIST_PROJECT_USERS tool input.
 */
type GITLAB_LIST_PROJECT_USERS_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: string;
  /**
   * Search
   * @description Filter users by name or username.
   * @default null
   */
  search: string | null;
  /**
   * Skip Users
   * @description List of user IDs to exclude from the result.
   * @default null
   */
  skip_users: number[] | null;
};

/**
 * Type of GITLAB's GITLAB_LIST_PROJECT_USERS tool output.
 */
type GITLAB_LIST_PROJECT_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of users in the specified project.
       */
      users: {
          /**
           * Avatar Url
           * @description URL to the user's avatar image.
           * @default null
           */
          avatar_url: string | null;
          /**
           * Id
           * @description The user ID.
           */
          id: number;
          /**
           * Name
           * @description The name of the user.
           */
          name: string;
          /**
           * State
           * @description The state of the user (e.g., active, blocked).
           */
          state: string;
          /**
           * Username
           * @description The username of the user.
           */
          username: string;
          /**
           * Web Url
           * @description URL to the user's GitLab profile.
           */
          web_url: string;
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
 * Type of GITLAB's GITLAB_LIST_REPOSITORY_COMMITS tool input.
 */
type GITLAB_LIST_REPOSITORY_COMMITS_INPUT = {
  /**
   * All
   * @description Retrieve every commit from the repository. When set to true, the ref_name parameter is ignored.
   * @default null
   */
  all: boolean | null;
  /**
   * Author
   * @description Search commits by commit author.
   * @default null
   */
  author: string | null;
  /**
   * First Parent
   * @description Follow only the first parent commit upon seeing a merge commit.
   * @default null
   */
  first_parent: boolean | null;
  /**
   * Order
   * @description List commits in order. Possible values: default, topo. Defaults to default, the commits are shown in reverse chronological order.
   * @default null
   * @enum {string|null}
   */
  order: "default" | "topo" | null;
  /**
   * Path
   * @description The file path to filter commits by.
   * @default null
   */
  path: string | null;
  /**
   * Project Id
   * @description The ID or URL-encoded path of the project.
   */
  project_id?: number | null;
  /**
   * Ref Name
   * @description The name of a repository branch, tag or revision range, or if not given the default branch.
   * @default null
   */
  ref_name: string | null;
  /**
   * Since
   * @description Only commits after or on this date are returned in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
   * @default null
   */
  since: string | null;
  /**
   * Trailers
   * @description Parse and include Git trailers for every commit.
   * @default null
   */
  trailers: boolean | null;
  /**
   * Until
   * @description Only commits before or on this date are returned in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
   * @default null
   */
  until: string | null;
  /**
   * With Stats
   * @description Stats about each commit are added to the response.
   * @default null
   */
  with_stats: boolean | null;
};

/**
 * Type of GITLAB's GITLAB_LIST_REPOSITORY_COMMITS tool output.
 */
type GITLAB_LIST_REPOSITORY_COMMITS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Commits
       * @description A list of repository commits.
       */
      commits: {
          /**
           * Author Email
           * @description The author's email.
           */
          author_email: string;
          /**
           * Author Name
           * @description The author's name.
           */
          author_name: string;
          /**
           * Authored Date
           * @description The authored date in ISO 8601 format.
           */
          authored_date: string;
          /**
           * Committed Date
           * @description The committed date in ISO 8601 format.
           */
          committed_date: string;
          /**
           * Committer Email
           * @description The committer's email.
           */
          committer_email: string;
          /**
           * Committer Name
           * @description The committer's name.
           */
          committer_name: string;
          /**
           * Created At
           * @description The created date in ISO 8601 format.
           */
          created_at: string;
          /**
           * Extended Trailers
           * @description Extended Git trailers associated with the commit.
           * @default null
           */
          extended_trailers: {
              [key: string]: string[];
          } | null;
          /**
           * Id
           * @description The commit ID.
           */
          id: string;
          /**
           * Message
           * @description The commit message.
           */
          message: string;
          /**
           * Parent Ids
           * @description A list of parent commit IDs.
           */
          parent_ids: string[];
          /**
           * Short Id
           * @description The short commit ID.
           */
          short_id: string;
          /**
           * Title
           * @description The commit title.
           */
          title: string;
          /**
           * Trailers
           * @description Git trailers associated with the commit.
           * @default null
           */
          trailers: {
              [key: string]: string;
          } | null;
          /**
           * Web Url
           * @description The URL to the commit in the GitLab UI.
           */
          web_url: string;
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
 * Type of GITLAB's GITLAB_LIST_USER_PROJECTS tool input.
 */
type GITLAB_LIST_USER_PROJECTS_INPUT = {
  /**
   * Archived
   * @description Limit by archived status.
   * @default null
   */
  archived: boolean | null;
  /**
   * Id
   * @description The ID or username of the user whose projects to list.
   */
  id?: number | null;
  /**
   * Id After
   * @description Limit results to projects with IDs greater than the specified ID.
   * @default null
   */
  id_after: number | null;
  /**
   * Id Before
   * @description Limit results to projects with IDs less than the specified ID.
   * @default null
   */
  id_before: number | null;
  /**
   * Membership
   * @description Limit by projects that the current user is a member of.
   * @default null
   */
  membership: boolean | null;
  /**
   * Min Access Level
   * @description Limit by current user minimal role (access_level).
   * @default null
   */
  min_access_level: number | null;
  /**
   * Order By
   * @description Return projects ordered by this field. Default is 'created_at'.
   * @default null
   * @enum {string|null}
   */
  order_by: "id" | "name" | "path" | "created_at" | "updated_at" | "star_count" | "last_activity_at" | null;
  /**
   * Owned
   * @description Limit by projects explicitly owned by the specified user.
   * @default null
   */
  owned: boolean | null;
  /**
   * Page
   * @description Page number for pagination.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of items per page (1-100).
   * @default null
   */
  per_page: number | null;
  /**
   * Search
   * @description Return list of projects matching search criteria (case-insensitive substring).
   * @default null
   */
  search: string | null;
  /**
   * Simple
   * @description Return only limited fields for each project.
   * @default null
   */
  simple: boolean | null;
  /**
   * Sort
   * @description Return projects sorted in asc or desc order. Default is 'desc'.
   * @default null
   * @enum {string|null}
   */
  sort: "asc" | "desc" | null;
  /**
   * Starred
   * @description Limit by projects starred by the specified user.
   * @default null
   */
  starred: boolean | null;
  /**
   * Statistics
   * @description Include project statistics. Available to Reporter role and above.
   * @default null
   */
  statistics: boolean | null;
  /**
   * Updated After
   * Format: date-time
   * @description Limit projects updated after given time (ISO 8601).
   * @default null
   */
  updated_after: string | null;
  /**
   * Updated Before
   * Format: date-time
   * @description Limit projects updated before given time (ISO 8601).
   * @default null
   */
  updated_before: string | null;
  /**
   * Visibility
   * @description Limit by project visibility.
   * @default null
   * @enum {string|null}
   */
  visibility: "private" | "internal" | "public" | null;
  /**
   * With Custom Attributes
   * @description Include custom attributes in response (admin only).
   * @default null
   */
  with_custom_attributes: boolean | null;
  /**
   * With Issues Enabled
   * @description Limit by enabled issues feature.
   * @default null
   */
  with_issues_enabled: boolean | null;
  /**
   * With Merge Requests Enabled
   * @description Limit by enabled merge requests feature.
   * @default null
   */
  with_merge_requests_enabled: boolean | null;
  /**
   * With Programming Language
   * @description Limit by projects which use the given programming language.
   * @default null
   */
  with_programming_language: string | null;
};

/**
 * Type of GITLAB's GITLAB_LIST_USER_PROJECTS tool output.
 */
type GITLAB_LIST_USER_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of project objects owned by the specified user.
       */
      projects: ({
          /**  Links */
          _links: {
              [key: string]: string;
          };
          /** Allow Merge On Skipped Pipeline */
          allow_merge_on_skipped_pipeline: boolean | null;
          /** Allow Pipeline Trigger Approve Deployment */
          allow_pipeline_trigger_approve_deployment: boolean;
          /** Archived */
          archived: boolean;
          /** Autoclose Referenced Issues */
          autoclose_referenced_issues: boolean;
          /** Avatar Url */
          avatar_url: string | null;
          /** Can Create Merge Request In */
          can_create_merge_request_in: boolean;
          /** Ci Allow Fork Pipelines To Run In Parent Project */
          ci_allow_fork_pipelines_to_run_in_parent_project: boolean;
          /** Ci Default Git Depth */
          ci_default_git_depth: number | null;
          /** Ci Forward Deployment Enabled */
          ci_forward_deployment_enabled: boolean;
          /** Ci Forward Deployment Rollback Allowed */
          ci_forward_deployment_rollback_allowed: boolean;
          /** Ci Id Token Sub Claim Components */
          ci_id_token_sub_claim_components: string[] | null;
          /** Ci Pipeline Variables Minimum Override Role */
          ci_pipeline_variables_minimum_override_role: string | null;
          /** Ci Restrict Pipeline Cancellation Role */
          ci_restrict_pipeline_cancellation_role: string | null;
          /** Ci Separated Caches */
          ci_separated_caches: boolean;
          /** Compliance Frameworks */
          compliance_frameworks: string[] | null;
          /** Container Registry Access Level */
          container_registry_access_level: string | null;
          /** Container Registry Image Prefix */
          container_registry_image_prefix: string | null;
          /** Created At */
          created_at: string;
          /** Creator Id */
          creator_id: number;
          /** Default Branch */
          default_branch: string | null;
          /** Description */
          description: string | null;
          /** Description Html */
          description_html: string | null;
          /** Enforce Auth Checks On Uploads */
          enforce_auth_checks_on_uploads: boolean | null;
          /** Forks Count */
          forks_count: number;
          /** Group Runners Enabled */
          group_runners_enabled: boolean;
          /** Http Url To Repo */
          http_url_to_repo: string;
          /** Id */
          id: number;
          /** Import Error */
          import_error: string | null;
          /** Import Status */
          import_status: string;
          /** Import Type */
          import_type: string | null;
          /** Import Url */
          import_url: string | null;
          /** Issues Enabled */
          issues_enabled: boolean;
          /** Jobs Enabled */
          jobs_enabled: boolean;
          /** Last Activity At */
          last_activity_at: string;
          /** License */
          license: {
              [key: string]: unknown;
          } | null;
          /** License Url */
          license_url: string | null;
          /** Marked For Deletion At */
          marked_for_deletion_at: string | null;
          /** Marked For Deletion On */
          marked_for_deletion_on: string | null;
          /** Merge Method */
          merge_method: string;
          /** Merge Requests Enabled */
          merge_requests_enabled: boolean;
          /** Name */
          name: string;
          /** Name With Namespace */
          name_with_namespace: string;
          /** Namespace */
          namespace: {
              /** Avatar Url */
              avatar_url: string | null;
              /** Full Path */
              full_path: string;
              /** Id */
              id: number;
              /** Kind */
              kind: string;
              /** Name */
              name: string;
              /** Path */
              path: string;
              /** Web Url */
              web_url: string | null;
          } & {
              [key: string]: unknown;
          };
          /** Only Allow Merge If All Discussions Are Resolved */
          only_allow_merge_if_all_discussions_are_resolved: boolean;
          /** Only Allow Merge If Pipeline Succeeds */
          only_allow_merge_if_pipeline_succeeds: boolean;
          /** Open Issues Count */
          open_issues_count: number;
          /** Owner */
          owner: ({
              /** Created At */
              created_at: string;
              /** Id */
              id: number;
              /** Name */
              name: string;
          } & {
              [key: string]: unknown;
          }) | null;
          /** Path */
          path: string;
          /** Path With Namespace */
          path_with_namespace: string;
          /** Permissions */
          permissions: {
              [key: string]: unknown;
          };
          /** Printing Merge Request Link Enabled */
          printing_merge_request_link_enabled: boolean | null;
          /** Public Jobs */
          public_jobs: boolean;
          /** Readme Url */
          readme_url: string | null;
          /** Remove Source Branch After Merge */
          remove_source_branch_after_merge: boolean;
          /** Request Access Enabled */
          request_access_enabled: boolean;
          /** Resolve Outdated Diff Discussions */
          resolve_outdated_diff_discussions: boolean;
          /** Restrict User Defined Variables */
          restrict_user_defined_variables: boolean;
          /** Runners Token */
          runners_token: string | null;
          /** Secret Push Protection Enabled */
          secret_push_protection_enabled: boolean | null;
          /** Security And Compliance Access Level */
          security_and_compliance_access_level: string | null;
          /** Shared Runners Enabled */
          shared_runners_enabled: boolean;
          /** Shared With Groups */
          shared_with_groups: {
              [key: string]: unknown;
          }[] | null;
          /** Snippets Enabled */
          snippets_enabled: boolean;
          /** Squash Option */
          squash_option: string;
          /** Ssh Url To Repo */
          ssh_url_to_repo: string;
          /** Star Count */
          star_count: number;
          /** Statistics */
          statistics: ({
              /** Commit Count */
              commit_count: number;
              /** Container Registry Size */
              container_registry_size: number;
              /** Job Artifacts Size */
              job_artifacts_size: number;
              /** Lfs Objects Size */
              lfs_objects_size: number;
              /** Packages Size */
              packages_size: number;
              /** Pipeline Artifacts Size */
              pipeline_artifacts_size: number;
              /** Repository Size */
              repository_size: number;
              /** Snippets Size */
              snippets_size: number;
              /** Storage Size */
              storage_size: number;
              /** Uploads Size */
              uploads_size: number;
              /** Wiki Size */
              wiki_size: number;
          } & {
              [key: string]: unknown;
          }) | null;
          /** Tag List */
          tag_list: string[] | null;
          /** Topics */
          topics: string[] | null;
          /** Updated At */
          updated_at: string;
          /** Visibility */
          visibility: string;
          /** Warn About Potentially Unwanted Characters */
          warn_about_potentially_unwanted_characters: boolean;
          /** Web Based Commit Signing Enabled */
          web_based_commit_signing_enabled: boolean | null;
          /** Web Url */
          web_url: string;
          /** Wiki Enabled */
          wiki_enabled: boolean;
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
 * Type of GITLAB's GITLAB_POST_USER_SUPPORT_PIN tool input.
 */
type GITLAB_POST_USER_SUPPORT_PIN_INPUT = object;

/**
 * Type of GITLAB's GITLAB_POST_USER_SUPPORT_PIN tool output.
 */
type GITLAB_POST_USER_SUPPORT_PIN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expires At
       * @description Expiration time in ISO 8601 format.
       */
      expires_at: string;
      /**
       * Pin
       * @description The six-digit support PIN created for the user.
       */
      pin: string;
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
 * Type of GITLAB's GITLAB_PUT_USER_PREFERENCES tool input.
 */
type GITLAB_PUT_USER_PREFERENCES_INPUT = {
  /**
   * Pass User Identities To Ci Jwt
   * @description Flag indicating the user passes their external identities as CI information. Internal use only; do not expose to third-party services.
   */
  pass_user_identities_to_ci_jwt?: boolean;
  /**
   * Show Whitespace In Diffs
   * @description Flag indicating the user sees whitespace changes in diffs.
   */
  show_whitespace_in_diffs?: boolean;
  /**
   * View Diffs File By File
   * @description Flag indicating the user sees only one file diff per page.
   */
  view_diffs_file_by_file?: boolean;
};

/**
 * Type of GITLAB's GITLAB_PUT_USER_PREFERENCES tool output.
 */
type GITLAB_PUT_USER_PREFERENCES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the preferences resource.
       */
      id: number;
      /**
       * Pass User Identities To Ci Jwt
       * @description Flag indicating the user passes their external identities as CI information.
       */
      pass_user_identities_to_ci_jwt: boolean;
      /**
       * Show Whitespace In Diffs
       * @description Flag indicating the user sees whitespace changes in diffs.
       */
      show_whitespace_in_diffs: boolean;
      /**
       * User Id
       * @description Identifier of the user to whom these preferences belong.
       */
      user_id: number;
      /**
       * View Diffs File By File
       * @description Flag indicating the user sees only one file diff per page.
       */
      view_diffs_file_by_file: boolean;
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
 * Type of GITLAB's GITLAB_SET_USER_STATUS tool input.
 */
type GITLAB_SET_USER_STATUS_INPUT = {
  /**
   * Clear Status After
   * @description Automatically clear status after the specified time interval. Allowed values: 30_minutes, 3_hours, 8_hours, 1_day, 3_days, 7_days, 30_days.
   * @default null
   * @enum {string|null}
   */
  clear_status_after: "30_minutes" | "3_hours" | "8_hours" | "1_day" | "3_days" | "7_days" | "30_days" | null;
  /**
   * Emoji
   * @description Name of the emoji to use as status. Defaults to 'speech_balloon' if omitted.
   * @default null
   */
  emoji: string | null;
  /**
   * Message
   * @description Status message to display. Max 100 characters; can contain emoji codes.
   * @default null
   */
  message: string | null;
};

/**
 * Type of GITLAB's GITLAB_SET_USER_STATUS tool output.
 */
type GITLAB_SET_USER_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clear Status At
       * @description Timestamp when the status will be cleared.
       * @default null
       */
      clear_status_at: string | null;
      /**
       * Emoji
       * @description The emoji set as the status.
       */
      emoji: string;
      /**
       * Message
       * @description The message set as the status.
       */
      message: string;
      /**
       * Message Html
       * @description The HTML-formatted status message.
       */
      message_html: string;
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
 * Type of GITLAB's GITLAB_SHARE_PROJECT_WITH_GROUP tool input.
 */
type GITLAB_SHARE_PROJECT_WITH_GROUP_INPUT = {
  /**
   * Expires At
   * @description Expiration date for the group share in YYYY-MM-DD format (ISO 8601).
   * @default null
   */
  expires_at: string | null;
  /**
   * Group Access
   * @description The access level to grant the group. One of GitLab's access levels, e.g., 30 for Developer, 40 for Maintainer.
   */
  group_access?: number;
  /**
   * Group Id
   * @description The ID of the group to share with.
   */
  group_id?: number;
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
};

/**
 * Type of GITLAB's GITLAB_SHARE_PROJECT_WITH_GROUP tool output.
 */
type GITLAB_SHARE_PROJECT_WITH_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Expires At
       * @description Expiration date of the share in ISO 8601 format.
       * @default null
       */
      expires_at: string | null;
      /**
       * Group Access
       * @description Access level granted to the group.
       */
      group_access: number;
      /**
       * Group Id
       * @description ID of the group that the project is shared with.
       */
      group_id: number;
      /**
       * Id
       * @description ID of the share link record.
       */
      id: number;
      /**
       * Project Id
       * @description ID of the project.
       */
      project_id: number;
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
 * Type of GITLAB's GITLAB_START_PROJECT_HOUSEKEEPING tool input.
 */
type GITLAB_START_PROJECT_HOUSEKEEPING_INPUT = {
  /**
   * Id
   * @description The ID or URL-encoded path of the project.
   */
  id?: number | null;
  /**
   * Task
   * @description Type of housekeeping task to perform. `prune` triggers a manual prune of unreachable objects; `eager` triggers eager housekeeping.
   * @default null
   * @enum {string|null}
   */
  task: "prune" | "eager" | null;
};

/**
 * Type of GITLAB's GITLAB_START_PROJECT_HOUSEKEEPING tool output.
 */
type GITLAB_START_PROJECT_HOUSEKEEPING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code of the response.
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
 * Type map of all available tool input types for toolkit "GITLAB".
 */
export type GITLAB_TOOL_INPUTS = {
  ARCHIVE_PROJECT: GITLAB_ARCHIVE_PROJECT_INPUT
  CREATE_GROUP: GITLAB_CREATE_GROUP_INPUT
  CREATE_PROJECT: GITLAB_CREATE_PROJECT_INPUT
  CREATE_PROJECT_ISSUE: GITLAB_CREATE_PROJECT_ISSUE_INPUT
  CREATE_REPOSITORY_BRANCH: GITLAB_CREATE_REPOSITORY_BRANCH_INPUT
  DELETE_PROJECT: GITLAB_DELETE_PROJECT_INPUT
  DOWNLOAD_PROJECT_AVATAR: GITLAB_DOWNLOAD_PROJECT_AVATAR_INPUT
  ERASE_JOB: GITLAB_ERASE_JOB_INPUT
  GET_COMMIT_REFS: GITLAB_GET_COMMIT_REFS_INPUT
  GET_COMMIT_SEQUENCE: GITLAB_GET_COMMIT_SEQUENCE_INPUT
  GET_GROUP: GITLAB_GET_GROUP_INPUT
  GET_GROUPS: GITLAB_GET_GROUPS_INPUT
  GET_GROUP_MEMBER: GITLAB_GET_GROUP_MEMBER_INPUT
  GET_JOB_DETAILS: GITLAB_GET_JOB_DETAILS_INPUT
  GET_MERGE_REQUEST_NOTES: GITLAB_GET_MERGE_REQUEST_NOTES_INPUT
  GET_PROJECT: GITLAB_GET_PROJECT_INPUT
  GET_PROJECTS: GITLAB_GET_PROJECTS_INPUT
  GET_PROJECTS_ID_MERGE_REQUESTS_IID_DIFFS: GITLAB_GET_PROJECTS_ID_MERGE_REQUESTS_IID_DIFFS_INPUT
  GET_PROJECT_LANGUAGES: GITLAB_GET_PROJECT_LANGUAGES_INPUT
  GET_PROJECT_MEMBER: GITLAB_GET_PROJECT_MEMBER_INPUT
  GET_PROJECT_MEMBER_ALL: GITLAB_GET_PROJECT_MEMBER_ALL_INPUT
  GET_PROJECT_MERGE_REQUESTS: GITLAB_GET_PROJECT_MERGE_REQUESTS_INPUT
  GET_PROJECT_MERGE_REQUEST_COMMITS: GITLAB_GET_PROJECT_MERGE_REQUEST_COMMITS_INPUT
  GET_REPOSITORY_BRANCH: GITLAB_GET_REPOSITORY_BRANCH_INPUT
  GET_REPOSITORY_BRANCHES: GITLAB_GET_REPOSITORY_BRANCHES_INPUT
  GET_SINGLE_COMMIT: GITLAB_GET_SINGLE_COMMIT_INPUT
  GET_SINGLE_PIPELINE: GITLAB_GET_SINGLE_PIPELINE_INPUT
  GET_USER: GITLAB_GET_USER_INPUT
  GET_USERS: GITLAB_GET_USERS_INPUT
  GET_USERS_ID_STATUS: GITLAB_GET_USERS_ID_STATUS_INPUT
  GET_USER_PREFERENCES: GITLAB_GET_USER_PREFERENCES_INPUT
  GET_USER_STATUS: GITLAB_GET_USER_STATUS_INPUT
  GET_USER_SUPPORT_PIN: GITLAB_GET_USER_SUPPORT_PIN_INPUT
  IMPORT_PROJECT_MEMBERS: GITLAB_IMPORT_PROJECT_MEMBERS_INPUT
  LIST_ALL_GROUP_MEMBERS: GITLAB_LIST_ALL_GROUP_MEMBERS_INPUT
  LIST_ALL_PROJECT_MEMBERS: GITLAB_LIST_ALL_PROJECT_MEMBERS_INPUT
  LIST_BILLABLE_GROUP_MEMBERS: GITLAB_LIST_BILLABLE_GROUP_MEMBERS_INPUT
  LIST_GROUP_MEMBERS: GITLAB_LIST_GROUP_MEMBERS_INPUT
  LIST_PENDING_GROUP_MEMBERS: GITLAB_LIST_PENDING_GROUP_MEMBERS_INPUT
  LIST_PIPELINE_JOBS: GITLAB_LIST_PIPELINE_JOBS_INPUT
  LIST_PROJECT_GROUPS: GITLAB_LIST_PROJECT_GROUPS_INPUT
  LIST_PROJECT_INVITED_GROUPS: GITLAB_LIST_PROJECT_INVITED_GROUPS_INPUT
  LIST_PROJECT_PIPELINES: GITLAB_LIST_PROJECT_PIPELINES_INPUT
  LIST_PROJECT_SHAREABLE_GROUPS: GITLAB_LIST_PROJECT_SHAREABLE_GROUPS_INPUT
  LIST_PROJECT_TAGS: GITLAB_LIST_PROJECT_TAGS_INPUT
  LIST_PROJECT_TRANSFER_LOCATIONS: GITLAB_LIST_PROJECT_TRANSFER_LOCATIONS_INPUT
  LIST_PROJECT_USERS: GITLAB_LIST_PROJECT_USERS_INPUT
  LIST_REPOSITORY_COMMITS: GITLAB_LIST_REPOSITORY_COMMITS_INPUT
  LIST_USER_PROJECTS: GITLAB_LIST_USER_PROJECTS_INPUT
  POST_USER_SUPPORT_PIN: GITLAB_POST_USER_SUPPORT_PIN_INPUT
  PUT_USER_PREFERENCES: GITLAB_PUT_USER_PREFERENCES_INPUT
  SET_USER_STATUS: GITLAB_SET_USER_STATUS_INPUT
  SHARE_PROJECT_WITH_GROUP: GITLAB_SHARE_PROJECT_WITH_GROUP_INPUT
  START_PROJECT_HOUSEKEEPING: GITLAB_START_PROJECT_HOUSEKEEPING_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GITLAB".
 */
export type GITLAB_TOOL_OUTPUTS = {
  ARCHIVE_PROJECT: GITLAB_ARCHIVE_PROJECT_OUTPUT
  CREATE_GROUP: GITLAB_CREATE_GROUP_OUTPUT
  CREATE_PROJECT: GITLAB_CREATE_PROJECT_OUTPUT
  CREATE_PROJECT_ISSUE: GITLAB_CREATE_PROJECT_ISSUE_OUTPUT
  CREATE_REPOSITORY_BRANCH: GITLAB_CREATE_REPOSITORY_BRANCH_OUTPUT
  DELETE_PROJECT: GITLAB_DELETE_PROJECT_OUTPUT
  DOWNLOAD_PROJECT_AVATAR: GITLAB_DOWNLOAD_PROJECT_AVATAR_OUTPUT
  ERASE_JOB: GITLAB_ERASE_JOB_OUTPUT
  GET_COMMIT_REFS: GITLAB_GET_COMMIT_REFS_OUTPUT
  GET_COMMIT_SEQUENCE: GITLAB_GET_COMMIT_SEQUENCE_OUTPUT
  GET_GROUP: GITLAB_GET_GROUP_OUTPUT
  GET_GROUPS: GITLAB_GET_GROUPS_OUTPUT
  GET_GROUP_MEMBER: GITLAB_GET_GROUP_MEMBER_OUTPUT
  GET_JOB_DETAILS: GITLAB_GET_JOB_DETAILS_OUTPUT
  GET_MERGE_REQUEST_NOTES: GITLAB_GET_MERGE_REQUEST_NOTES_OUTPUT
  GET_PROJECT: GITLAB_GET_PROJECT_OUTPUT
  GET_PROJECTS: GITLAB_GET_PROJECTS_OUTPUT
  GET_PROJECTS_ID_MERGE_REQUESTS_IID_DIFFS: GITLAB_GET_PROJECTS_ID_MERGE_REQUESTS_IID_DIFFS_OUTPUT
  GET_PROJECT_LANGUAGES: GITLAB_GET_PROJECT_LANGUAGES_OUTPUT
  GET_PROJECT_MEMBER: GITLAB_GET_PROJECT_MEMBER_OUTPUT
  GET_PROJECT_MEMBER_ALL: GITLAB_GET_PROJECT_MEMBER_ALL_OUTPUT
  GET_PROJECT_MERGE_REQUESTS: GITLAB_GET_PROJECT_MERGE_REQUESTS_OUTPUT
  GET_PROJECT_MERGE_REQUEST_COMMITS: GITLAB_GET_PROJECT_MERGE_REQUEST_COMMITS_OUTPUT
  GET_REPOSITORY_BRANCH: GITLAB_GET_REPOSITORY_BRANCH_OUTPUT
  GET_REPOSITORY_BRANCHES: GITLAB_GET_REPOSITORY_BRANCHES_OUTPUT
  GET_SINGLE_COMMIT: GITLAB_GET_SINGLE_COMMIT_OUTPUT
  GET_SINGLE_PIPELINE: GITLAB_GET_SINGLE_PIPELINE_OUTPUT
  GET_USER: GITLAB_GET_USER_OUTPUT
  GET_USERS: GITLAB_GET_USERS_OUTPUT
  GET_USERS_ID_STATUS: GITLAB_GET_USERS_ID_STATUS_OUTPUT
  GET_USER_PREFERENCES: GITLAB_GET_USER_PREFERENCES_OUTPUT
  GET_USER_STATUS: GITLAB_GET_USER_STATUS_OUTPUT
  GET_USER_SUPPORT_PIN: GITLAB_GET_USER_SUPPORT_PIN_OUTPUT
  IMPORT_PROJECT_MEMBERS: GITLAB_IMPORT_PROJECT_MEMBERS_OUTPUT
  LIST_ALL_GROUP_MEMBERS: GITLAB_LIST_ALL_GROUP_MEMBERS_OUTPUT
  LIST_ALL_PROJECT_MEMBERS: GITLAB_LIST_ALL_PROJECT_MEMBERS_OUTPUT
  LIST_BILLABLE_GROUP_MEMBERS: GITLAB_LIST_BILLABLE_GROUP_MEMBERS_OUTPUT
  LIST_GROUP_MEMBERS: GITLAB_LIST_GROUP_MEMBERS_OUTPUT
  LIST_PENDING_GROUP_MEMBERS: GITLAB_LIST_PENDING_GROUP_MEMBERS_OUTPUT
  LIST_PIPELINE_JOBS: GITLAB_LIST_PIPELINE_JOBS_OUTPUT
  LIST_PROJECT_GROUPS: GITLAB_LIST_PROJECT_GROUPS_OUTPUT
  LIST_PROJECT_INVITED_GROUPS: GITLAB_LIST_PROJECT_INVITED_GROUPS_OUTPUT
  LIST_PROJECT_PIPELINES: GITLAB_LIST_PROJECT_PIPELINES_OUTPUT
  LIST_PROJECT_SHAREABLE_GROUPS: GITLAB_LIST_PROJECT_SHAREABLE_GROUPS_OUTPUT
  LIST_PROJECT_TAGS: GITLAB_LIST_PROJECT_TAGS_OUTPUT
  LIST_PROJECT_TRANSFER_LOCATIONS: GITLAB_LIST_PROJECT_TRANSFER_LOCATIONS_OUTPUT
  LIST_PROJECT_USERS: GITLAB_LIST_PROJECT_USERS_OUTPUT
  LIST_REPOSITORY_COMMITS: GITLAB_LIST_REPOSITORY_COMMITS_OUTPUT
  LIST_USER_PROJECTS: GITLAB_LIST_USER_PROJECTS_OUTPUT
  POST_USER_SUPPORT_PIN: GITLAB_POST_USER_SUPPORT_PIN_OUTPUT
  PUT_USER_PREFERENCES: GITLAB_PUT_USER_PREFERENCES_OUTPUT
  SET_USER_STATUS: GITLAB_SET_USER_STATUS_OUTPUT
  SHARE_PROJECT_WITH_GROUP: GITLAB_SHARE_PROJECT_WITH_GROUP_OUTPUT
  START_PROJECT_HOUSEKEEPING: GITLAB_START_PROJECT_HOUSEKEEPING_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GITLAB toolkit.
 */
export const GITLAB = {
  slug: "gitlab",
  tools: {
    /**
     * Tool to archive a project. use when you need to mark a project read-only after finishing active development. call after confirming no further changes are required.
     */
    ARCHIVE_PROJECT: "GITLAB_ARCHIVE_PROJECT",
    /**
     * Tool to create a new group in gitlab. use when you need to establish a new group for projects or collaboration.
     */
    CREATE_GROUP: "GITLAB_CREATE_GROUP",
    /**
     * Tool to create a new project in gitlab. implements post /projects endpoint.
     */
    CREATE_PROJECT: "GITLAB_CREATE_PROJECT",
    /**
     * Tool to create a new issue in a gitlab project. use when you need to report a bug, request a feature, or track a task within a specific project.
     */
    CREATE_PROJECT_ISSUE: "GITLAB_CREATE_PROJECT_ISSUE",
    /**
     * Tool to create a new branch in a project. use when you need to create a new branch from an existing branch or a specific commit in a gitlab project.
     */
    CREATE_REPOSITORY_BRANCH: "GITLAB_CREATE_REPOSITORY_BRANCH",
    /**
     * Tool to delete a gitlab project by its id. use when you need to remove a project, either by marking it for later deletion or deleting it immediately.
     */
    DELETE_PROJECT: "GITLAB_DELETE_PROJECT",
    /**
     * Tool to download a project’s avatar image. use when you need the raw avatar bytes after confirming the project exists.
     */
    DOWNLOAD_PROJECT_AVATAR: "GITLAB_DOWNLOAD_PROJECT_AVATAR",
    /**
     * Tool to erase the content of a specified job within a project. use when you need to remove job artifacts and logs.
     */
    ERASE_JOB: "GITLAB_ERASE_JOB",
    /**
     * Tool to get all references (branches or tags) a commit is pushed to. use when you need to find out which branches or tags a specific commit belongs to in a gitlab project.
     */
    GET_COMMIT_REFS: "GITLAB_GET_COMMIT_REFS",
    /**
     * Tool to get the sequence number of a commit in a project by following parent links from the given commit. use when you need to determine the order of a commit in the project's history.
     */
    GET_COMMIT_SEQUENCE: "GITLAB_GET_COMMIT_SEQUENCE",
    /**
     * Tool to retrieve information about a specific group by its id. use when you need to get details of a gitlab group.
     */
    GET_GROUP: "GITLAB_GET_GROUP",
    /**
     * Get groups
     */
    GET_GROUPS: "GITLAB_GET_GROUPS",
    /**
     * Tool to retrieve details for a specific group member. use when you need to fetch membership information for a user in a group after you know both group id and user id.
     */
    GET_GROUP_MEMBER: "GITLAB_GET_GROUP_MEMBER",
    /**
     * Tool to retrieve details of a single job by its id within a specified project. use this when you need to fetch specific information about a particular ci/cd job.
     */
    GET_JOB_DETAILS: "GITLAB_GET_JOB_DETAILS",
    /**
     * Tool to fetch comments on a merge request. use when you need to retrieve all notes for a specific merge request.
     */
    GET_MERGE_REQUEST_NOTES: "GITLAB_GET_MERGE_REQUEST_NOTES",
    /**
     * Tool to get a single project by id or url-encoded path.
     */
    GET_PROJECT: "GITLAB_GET_PROJECT",
    /**
     * Tool to list all projects accessible to the authenticated user. supports filtering.
     */
    GET_PROJECTS: "GITLAB_GET_PROJECTS",
    /**
     * Tool to list all diff versions of a merge request. use when you need to inspect changes across different diff versions after creating or updating a merge request.
     */
    GET_PROJECTS_ID_MERGE_REQUESTS_IID_DIFFS: "GITLAB_GET_PROJECTS_ID_MERGE_REQUESTS_IID_DIFFS",
    /**
     * Tool to list programming languages used in a project with percentages. use when you need the project language breakdown.
     */
    GET_PROJECT_LANGUAGES: "GITLAB_GET_PROJECT_LANGUAGES",
    /**
     * Tool to retrieve details for a specific project member. use after confirming project and user ids to fetch membership information for a project member.
     */
    GET_PROJECT_MEMBER: "GITLAB_GET_PROJECT_MEMBER",
    /**
     * Tool to retrieve details for a specific project member (including inherited and invited members). use when you need the effective membership info (including invitations and inheritance).
     */
    GET_PROJECT_MEMBER_ALL: "GITLAB_GET_PROJECT_MEMBER_ALL",
    /**
     * Tool to retrieve a list of merge requests for a specific project. use when you need to get all merge requests associated with a project, with options to filter by state, labels, milestones, and other attributes.
     */
    GET_PROJECT_MERGE_REQUESTS: "GITLAB_GET_PROJECT_MERGE_REQUESTS",
    /**
     * Tool to get commits of a merge request. use when you need to retrieve all commits associated with a specific merge request.
     */
    GET_PROJECT_MERGE_REQUEST_COMMITS: "GITLAB_GET_PROJECT_MERGE_REQUEST_COMMITS",
    /**
     * Tool to retrieve information about a specific branch in a project. use when you need to get details for a single branch.
     */
    GET_REPOSITORY_BRANCH: "GITLAB_GET_REPOSITORY_BRANCH",
    /**
     * Retrieves a list of repository branches for a project. use this when you need to get all branches or search for specific branches within a gitlab project.
     */
    GET_REPOSITORY_BRANCHES: "GITLAB_GET_REPOSITORY_BRANCHES",
    /**
     * Tool to get a specific commit identified by the commit hash or name of a branch or tag. use this when you need to retrieve detailed information about a single commit in a gitlab project repository.
     */
    GET_SINGLE_COMMIT: "GITLAB_GET_SINGLE_COMMIT",
    /**
     * Tool to retrieve details of a single pipeline by its id within a specified project. use when you need to get information about a specific ci/cd pipeline.
     */
    GET_SINGLE_PIPELINE: "GITLAB_GET_SINGLE_PIPELINE",
    /**
     * Tool to retrieve information about a specific user by their id. use when you need to fetch details for a single gitlab user.
     */
    GET_USER: "GITLAB_GET_USER",
    /**
     * Tool to retrieve a list of users from gitlab. use this when you need to find user information, search for specific users, or filter users based on various criteria like activity status or creation date.
     */
    GET_USERS: "GITLAB_GET_USERS",
    /**
     * Tool to get a user's status by id. use when you need to retrieve a gitlab user's current status message, emoji, and availability after identifying their user id.
     */
    GET_USERS_ID_STATUS: "GITLAB_GET_USERS_ID_STATUS",
    /**
     * Tool to get the current user's preferences. use when you need to retrieve the user's diff display and ci identity jwt settings after authentication.
     */
    GET_USER_PREFERENCES: "GITLAB_GET_USER_PREFERENCES",
    /**
     * Tool to get the current user's status. use when displaying or verifying the authenticated user's gitlab status after login.
     */
    GET_USER_STATUS: "GITLAB_GET_USER_STATUS",
    /**
     * Tool to get details of the current user's support pin. use when you need to retrieve the active support pin and its expiration for the authenticated user.
     */
    GET_USER_SUPPORT_PIN: "GITLAB_GET_USER_SUPPORT_PIN",
    /**
     * Tool to import members from one project to another. use when migrating members between projects.
     */
    IMPORT_PROJECT_MEMBERS: "GITLAB_IMPORT_PROJECT_MEMBERS",
    /**
     * Tool to list all members of a group including direct, inherited, and invited members. use when you need a comprehensive membership list beyond direct members.
     */
    LIST_ALL_GROUP_MEMBERS: "GITLAB_LIST_ALL_GROUP_MEMBERS",
    /**
     * Tool to list all members of a project (direct, inherited, invited). use when you need the effective membership list including inherited and invited members.
     */
    LIST_ALL_PROJECT_MEMBERS: "GITLAB_LIST_ALL_PROJECT_MEMBERS",
    /**
     * Tool to list billable members of a top-level group (including its subgroups and projects). use when generating billing reports; requires owner role on the group.
     */
    LIST_BILLABLE_GROUP_MEMBERS: "GITLAB_LIST_BILLABLE_GROUP_MEMBERS",
    /**
     * Tool to list direct members of a group. use when you need to retrieve or filter a group's direct membership.
     */
    LIST_GROUP_MEMBERS: "GITLAB_LIST_GROUP_MEMBERS",
    /**
     * Tool to list pending members of a group and its subgroups and projects. use when you need to review users awaiting approval or invited without an account. call after confirming the top-level group id.
     */
    LIST_PENDING_GROUP_MEMBERS: "GITLAB_LIST_PENDING_GROUP_MEMBERS",
    /**
     * Tool to retrieve a list of jobs for a specified pipeline within a project. use this when you need to inspect the status or details of jobs associated with a particular ci/cd pipeline.
     */
    LIST_PIPELINE_JOBS: "GITLAB_LIST_PIPELINE_JOBS",
    /**
     * Tool to list ancestor groups of a project. use when you need to retrieve all groups a project belongs to or is shared with.
     */
    LIST_PROJECT_GROUPS: "GITLAB_LIST_PROJECT_GROUPS",
    /**
     * Tool to list groups invited to a project. use when auditing which groups have access to a project.
     */
    LIST_PROJECT_INVITED_GROUPS: "GITLAB_LIST_PROJECT_INVITED_GROUPS",
    /**
     * Tool to retrieve a list of pipelines for a specified project. use when you need to get information about ci/cd pipelines, such as their status, source, or creation/update times.
     */
    LIST_PROJECT_PIPELINES: "GITLAB_LIST_PROJECT_PIPELINES",
    /**
     * Tool to list groups that can be shared with a project. use before sharing a project to fetch eligible groups.
     */
    LIST_PROJECT_SHAREABLE_GROUPS: "GITLAB_LIST_PROJECT_SHAREABLE_GROUPS",
    /**
     * Tool to retrieve a list of repository tags for a specified project. use when you need to get all tags associated with a project in gitlab.
     */
    LIST_PROJECT_TAGS: "GITLAB_LIST_PROJECT_TAGS",
    /**
     * Tool to list namespaces available for project transfer. use when you need to determine which groups a project can be transferred into.
     */
    LIST_PROJECT_TRANSFER_LOCATIONS: "GITLAB_LIST_PROJECT_TRANSFER_LOCATIONS",
    /**
     * Tool to list users of a project. use after you have a project id and want to retrieve its users.
     */
    LIST_PROJECT_USERS: "GITLAB_LIST_PROJECT_USERS",
    /**
     * Tool to get a list of repository commits in a project. use when you need to retrieve commit history for a specific project, branch, or time range.
     */
    LIST_REPOSITORY_COMMITS: "GITLAB_LIST_REPOSITORY_COMMITS",
    /**
     * Tool to list projects owned by a specific user. use after obtaining target user identity to fetch owned projects.
     */
    LIST_USER_PROJECTS: "GITLAB_LIST_USER_PROJECTS",
    /**
     * Tool to create a support pin for your authenticated user. use when gitlab support requests a pin to verify your identity.
     */
    POST_USER_SUPPORT_PIN: "GITLAB_POST_USER_SUPPORT_PIN",
    /**
     * Tool to update the current user's preferences. use when adjusting default diff viewing and ci identity settings.
     */
    PUT_USER_PREFERENCES: "GITLAB_PUT_USER_PREFERENCES",
    /**
     * Tool to set the current user's status. use when you need to update availability or convey current mood on gitlab.
     */
    SET_USER_STATUS: "GITLAB_SET_USER_STATUS",
    /**
     * Tool to share a project with a group. use when you need to grant a group specific access level to a project.
     */
    SHARE_PROJECT_WITH_GROUP: "GITLAB_SHARE_PROJECT_WITH_GROUP",
    /**
     * Tool to start the housekeeping task for a project. use when you need to trigger manual maintenance or pruning on a repository.
     */
    START_PROJECT_HOUSEKEEPING: "GITLAB_START_PROJECT_HOUSEKEEPING",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GITLAB".
 */
export type GITLAB_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GITLAB".
 */
export type GITLAB_TRIGGER_EVENTS = {}
