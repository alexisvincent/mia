// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BITBUCKET's BITBUCKET_CREATE_BRANCH tool input.
 */
type BITBUCKET_CREATE_BRANCH_INPUT = {
  /**
   * Name
   * @description The name for the new branch (e.g., 'feature/new-login', 'bugfix/issue-123'). Important: Do not include the 'refs/heads/' prefix.
   */
  name?: string;
  /**
   * Repo Slug
   * @description The slug or UUID of the repository where the branch will be created. This is usually the repository's name in URL-friendly format.
   */
  repo_slug?: string;
  /**
   * Target Hash
   * @description The full commit hash (SHA1) from which the new branch will be created. This commit must exist in the repository.
   */
  target_hash?: string;
  /**
   * Workspace
   * @description The workspace ID or UUID that owns the repository. This can typically be found in the URL of your Bitbucket workspace.
   */
  workspace?: string;
};

/**
 * Type of BITBUCKET's BITBUCKET_CREATE_BRANCH tool output.
 */
type BITBUCKET_CREATE_BRANCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Default Merge Strategy
       * @description The merge strategy that will be used by default if not specified otherwise when merging this branch.
       * @default null
       */
      default_merge_strategy: string | null;
      /**
       * Links
       * @description A dictionary of self-referential URLs related to the newly created branch, such as a link to the branch itself or its commits.
       * @default null
       */
      links: {
          [key: string]: unknown;
      } | null;
      /**
       * Merge Strategies
       * @description A list of merge strategies (e.g., 'merge commit', 'squash', 'fast forward') that can be used when merging this branch.
       * @default null
       */
      merge_strategies: string[] | null;
      /**
       * Name
       * @description The name of the newly created branch, confirming the input name.
       * @default null
       */
      name: string | null;
      /**
       * Target
       * @description A dictionary containing details of the commit this branch points to, primarily its hash and type.
       * @default null
       */
      target: {
          [key: string]: unknown;
      } | null;
      /**
       * Type
       * @description Indicates the type of the created reference, typically 'branch'.
       * @default null
       */
      type: string | null;
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
 * Type of BITBUCKET's BITBUCKET_CREATE_ISSUE tool input.
 */
type BITBUCKET_CREATE_ISSUE_INPUT = {
  /**
   * Assignee
   * @description Bitbucket username of the assignee. The assignee must have repository access.
   * @default null
   */
  assignee: string | null;
  /**
   * Component Id
   * @description Numeric ID of an existing component to associate with this issue.
   * @default null
   */
  component_id: number | null;
  /**
   * Content
   * @description Detailed description for the new issue.
   */
  content?: string;
  /**
   * Due On
   * @description Due date for the issue in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:mm:ssZ').
   * @default null
   */
  due_on: string | null;
  /**
   * Kind
   * @description Type of the issue (e.g., 'bug', 'enhancement', 'proposal', 'task').
   * @default null
   */
  kind: string | null;
  /**
   * Milestone Id
   * @description Numeric ID of an existing milestone to associate with this issue.
   * @default null
   */
  milestone_id: number | null;
  /**
   * Priority
   * @description Priority level of the issue (e.g., 'trivial', 'minor', 'major', 'critical', 'blocker').
   * @default null
   */
  priority: string | null;
  /**
   * Repo Slug
   * @description The slug of the Bitbucket repository.
   */
  repo_slug?: string;
  /**
   * Title
   * @description Title for the new issue.
   */
  title?: string;
  /**
   * Version Id
   * @description Numeric ID of an existing version to associate with this issue.
   * @default null
   */
  version_id: number | null;
  /**
   * Workspace
   * @description The ID or slug of the Bitbucket workspace.
   */
  workspace?: string;
};

/**
 * Type of BITBUCKET's BITBUCKET_CREATE_ISSUE tool output.
 */
type BITBUCKET_CREATE_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Dictionary with the issue's description, including 'raw', 'html', and 'markup' formats.
       */
      content: {
          [key: string]: unknown;
      };
      /**
       * Id
       * @description Unique ID of the created issue.
       */
      id: number;
      /**
       * State
       * @description Initial state of the created issue (e.g., 'new', 'open', 'resolved').
       */
      state: string;
      /**
       * Title
       * @description Title of the created issue.
       */
      title: string;
      /**
       * Type
       * @description Bitbucket resource type; will be 'issue'.
       */
      type: string;
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
 * Type of BITBUCKET's BITBUCKET_CREATE_ISSUE_COMMENT tool input.
 */
type BITBUCKET_CREATE_ISSUE_COMMENT_INPUT = {
  /**
   * Content
   * @description The raw text content for the comment. This content supports markdown formatting, which Bitbucket will then render.
   */
  content?: string;
  /**
   * Issue Id
   * @description The unique identifier of the issue on which the comment will be posted.
   */
  issue_id?: string;
  /**
   * Repo Slug
   * @description The slug (URL-friendly version) of the repository name.
   */
  repo_slug?: string;
  /**
   * Workspace
   * @description The ID or slug of the workspace or user that owns the repository.
   */
  workspace?: string;
};

/**
 * Type of BITBUCKET's BITBUCKET_CREATE_ISSUE_COMMENT tool output.
 */
type BITBUCKET_CREATE_ISSUE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description A dictionary containing the comment's content, typically with 'raw' (original markdown input) and 'html' (Bitbucket-rendered HTML) fields.
       * @default {}
       */
      content: {
          [key: string]: unknown;
      };
      /**
       * Created On
       * @description The ISO 8601 formatted timestamp indicating when the comment was created.
       * @default
       */
      created_on: string;
      /**
       * Id
       * @description The unique numerical identifier for the newly created comment.
       * @default 0
       */
      id: number;
      /**
       * Type
       * @description Indicates the type of the object returned, typically 'issue_comment'.
       * @default
       */
      type: string;
      /**
       * Updated On
       * @description The ISO 8601 formatted timestamp indicating when the comment was last updated, if applicable.
       * @default
       */
      updated_on: string;
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
 * Type of BITBUCKET's BITBUCKET_CREATE_PULL_REQUEST tool input.
 */
type BITBUCKET_CREATE_PULL_REQUEST_INPUT = {
  /**
   * Close Source Branch
   * @description If true, automatically closes the source branch upon pull request merge.
   * @default false
   */
  close_source_branch: boolean | null;
  /**
   * Description
   * @description Detailed Markdown description of the pull request, outlining changes and purpose.
   * @default null
   */
  description: string | null;
  /**
   * Destination Branch
   * @description Name of the destination branch for merging; defaults to repository's main branch if unspecified.
   * @default null
   */
  destination_branch: string | null;
  /**
   * Repo Slug
   * @description Slug (URL-friendly name) of the repository for the pull request.
   */
  repo_slug?: string;
  /**
   * Reviewers
   * @description List of Bitbucket user UUIDs to be added as reviewers.
   * @default null
   */
  reviewers: {
      /**
       * Uuid
       * @description UUID of the Bitbucket user to be a reviewer.
       */
      uuid: string;
  }[] | null;
  /**
   * Source Branch
   * @description Name of the source branch with changes to be merged.
   */
  source_branch?: string;
  /**
   * Title
   * @description Concise title summarizing the changes for the pull request.
   */
  title?: string;
  /**
   * Workspace
   * @description Workspace ID (UUID or slug) of the repository owner.
   */
  workspace?: string;
};

/**
 * Type of BITBUCKET's BITBUCKET_CREATE_PULL_REQUEST tool output.
 */
type BITBUCKET_CREATE_PULL_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created On
       * @description ISO 8601 timestamp of creation.
       */
      created_on: string;
      /**
       * Id
       * @description Unique ID of the newly created pull request.
       */
      id: number;
      /**
       * State
       * @description State of the pull request upon creation (e.g., 'OPEN').
       */
      state: string;
      /**
       * Title
       * @description Title of the created pull request.
       */
      title: string;
      /**
       * Updated On
       * @description ISO 8601 timestamp of the last update.
       */
      updated_on: string;
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
 * Type of BITBUCKET's BITBUCKET_CREATE_REPOSITORY tool input.
 */
type BITBUCKET_CREATE_REPOSITORY_INPUT = {
  /**
   * Description
   * @description Description for the new repository.
   * @default null
   */
  description: string | null;
  /**
   * Fork Policy
   * @description Forking policy for the repository, determining who can create forks.
   * @default allow_forks
   * @enum {string|null}
   */
  fork_policy: "allow_forks" | "no_public_forks" | "no_forks" | null;
  /**
   * Has Issues
   * @description Enable the issue tracker (`True`), or disable it (`False`).
   * @default true
   */
  has_issues: boolean | null;
  /**
   * Has Wiki
   * @description Enable the wiki (`True`), or disable it (`False`).
   * @default true
   */
  has_wiki: boolean | null;
  /**
   * Is Private
   * @description Repository visibility: `True` for private, `False` for public.
   * @default true
   */
  is_private: boolean;
  /**
   * Language
   * @description Primary programming language (e.g., 'python', 'java') for categorization.
   * @default null
   */
  language: string | null;
  /**
   * Project Key
   * @description Key of the Bitbucket project for the repository; if omitted, it's placed in the workspace's oldest project.
   * @default null
   */
  project_key: string | null;
  /**
   * Repo Slug
   * @description URL-friendly slug for the new repository.
   */
  repo_slug?: string;
  /**
   * Workspace
   * @description ID or slug of the Bitbucket workspace for the new repository.
   */
  workspace?: string;
};

/**
 * Type of BITBUCKET's BITBUCKET_CREATE_REPOSITORY tool output.
 */
type BITBUCKET_CREATE_REPOSITORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description Repository description, if provided.
       * @default null
       */
      description: string | null;
      /**
       * Fork Policy
       * @description Fork policy of the repository.
       * @default null
       */
      fork_policy: string | null;
      /**
       * Full Name
       * @description Complete name of the repository (e.g., 'workspace_slug/repo_slug').
       * @default null
       */
      full_name: string | null;
      /**
       * Has Issues
       * @description Indicates if the issue tracker is enabled (`True`).
       * @default null
       */
      has_issues: boolean | null;
      /**
       * Has Wiki
       * @description Indicates if the wiki is enabled (`True`).
       * @default null
       */
      has_wiki: boolean | null;
      /**
       * Is Private
       * @description Indicates if the repository is private (`True`) or public (`False`).
       * @default null
       */
      is_private: boolean | null;
      /**
       * Language
       * @description Primary programming language of the repository, if specified.
       * @default null
       */
      language: string | null;
      /**
       * Name
       * @description Name (slug) of the repository.
       * @default null
       */
      name: string | null;
      /**
       * Type
       * @description Object type, typically 'repository'.
       * @default null
       */
      type: string | null;
      /**
       * Uuid
       * @description UUID of the created repository.
       * @default null
       */
      uuid: string | null;
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
 * Type of BITBUCKET's BITBUCKET_CREATE_SNIPPET_COMMENT tool input.
 */
type BITBUCKET_CREATE_SNIPPET_COMMENT_INPUT = {
  /**
   * Content
   * @description Raw text content of the comment; Bitbucket will render any included markup (like Markdown).
   */
  content?: string;
  /**
   * Encoded Id
   * @description Unique, encoded ID of the Bitbucket snippet to comment on (typically part of the snippet's URL).
   */
  encoded_id?: string;
  /**
   * Parent Id
   * @description ID of an existing comment to reply to, creating a threaded comment; if omitted, a top-level comment is created.
   * @default null
   */
  parent_id: number | null;
  /**
   * Workspace
   * @description Workspace ID or slug (e.g., 'my_workspace_slug' or a UUID) for the Bitbucket workspace containing the snippet.
   */
  workspace?: string;
};

/**
 * Type of BITBUCKET's BITBUCKET_CREATE_SNIPPET_COMMENT tool output.
 */
type BITBUCKET_CREATE_SNIPPET_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Comment content, usually with 'raw' (original text) and 'html' (rendered) fields.
       * @default null
       */
      content: {
          [key: string]: unknown;
      } | null;
      /**
       * Created On
       * @description ISO 8601 timestamp of comment creation.
       * @default null
       */
      created_on: string | null;
      /**
       * Id
       * @description Unique numeric ID of the created comment.
       * @default null
       */
      id: number | null;
      /**
       * Links
       * @description HATEOAS links for the comment, e.g., a 'self' link to its API endpoint.
       * @default null
       */
      links: {
          [key: string]: unknown;
      } | null;
      /**
       * Type
       * @description Type of object returned, usually 'comment'.
       * @default null
       */
      type: string | null;
      /**
       * Updated On
       * @description ISO 8601 timestamp of the last comment update.
       * @default null
       */
      updated_on: string | null;
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
 * Type of BITBUCKET's BITBUCKET_DELETE_ISSUE tool input.
 */
type BITBUCKET_DELETE_ISSUE_INPUT = {
  /**
   * Issue Id
   * @description The unique identifier of the issue to be deleted from the specified repository.
   */
  issue_id?: string;
  /**
   * Repo Slug
   * @description The slug of the repository. This is the repository's name, usually in lowercase and with hyphens instead of spaces.
   */
  repo_slug?: string;
  /**
   * Workspace
   * @description The workspace ID (slug) or UUID of the Bitbucket workspace that owns the repository. This can be the workspace name or its universally unique identifier.
   */
  workspace?: string;
};

/**
 * Type of BITBUCKET's BITBUCKET_DELETE_ISSUE tool output.
 */
type BITBUCKET_DELETE_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A descriptive message detailing the outcome of the delete operation, e.g., 'Issue deleted successfully' or an error message.
       * @default Issue deleted successfully
       */
      message: string;
      /**
       * Success
       * @description Indicates whether the issue was successfully deleted. `True` for success, `False` otherwise.
       * @default true
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
 * Type of BITBUCKET's BITBUCKET_DELETE_REPOSITORY tool input.
 */
type BITBUCKET_DELETE_REPOSITORY_INPUT = {
  /**
   * Repo Slug
   * @description The slug (URL-friendly name) of the repository to be deleted. This identifies the repository within the workspace.
   */
  repo_slug?: string;
  /**
   * Workspace
   * @description The ID or slug of the Bitbucket workspace that owns the repository. This can be a user's username or a team's slug.
   */
  workspace?: string;
};

/**
 * Type of BITBUCKET's BITBUCKET_DELETE_REPOSITORY tool output.
 */
type BITBUCKET_DELETE_REPOSITORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A confirmation message indicating the outcome of the repository deletion. For example, 'Repository {workspace}/{repo_slug} has been successfully deleted'.
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
 * Type of BITBUCKET's BITBUCKET_GET_CURRENT_USER tool input.
 */
type BITBUCKET_GET_CURRENT_USER_INPUT = object;

/**
 * Type of BITBUCKET's BITBUCKET_GET_CURRENT_USER tool output.
 */
type BITBUCKET_GET_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created On
       * @description ISO 8601 timestamp of account creation.
       */
      created_on: string;
      /**
       * Display Name
       * @description User's public display name.
       */
      display_name: string;
      /**
       * Links
       * @description Web links for the user, such as the avatar.
       */
      links: {
          /**
           * Avatar
           * @description User's avatar details, including the 'href' for the image URL.
           */
          avatar: {
              [key: string]: string;
          };
      };
      /**
       * Type
       * @description Object type, typically 'user'.
       */
      type: string;
      /**
       * Uuid
       * @description User's UUID (e.g., {123e4567-e89b-12d3-a456-426614174000}).
       */
      uuid: string;
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
 * Type of BITBUCKET's BITBUCKET_GET_FILE_FROM_REPOSITORY tool input.
 */
type BITBUCKET_GET_FILE_FROM_REPOSITORY_INPUT = {
  /**
   * Commit
   * @description Commit hash, branch name (fetches latest), or tag for the file version.
   */
  commit?: string;
  /**
   * Path
   * @description Full path to the file within the repository (e.g., 'src/main.py').
   */
  path?: string;
  /**
   * Repo Slug
   * @description Repository slug or UUID (typically URL-formatted name).
   */
  repo_slug?: string;
  /**
   * Workspace
   * @description Workspace ID or UUID (often username or team name) containing the repository.
   */
  workspace?: string;
};

/**
 * Type of BITBUCKET's BITBUCKET_GET_FILE_FROM_REPOSITORY tool output.
 */
type BITBUCKET_GET_FILE_FROM_REPOSITORY_OUTPUT = {
  /**
   * Commit
   * @description The specific commit hash, branch, or tag from which the file was retrieved.
   */
  commit?: string;
  /**
   * Data
   * @description The textual content of the retrieved file.
   */
  data?: string;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Path
   * @description The full path of the file as it exists in the repository, confirming the retrieved file's location.
   */
  path?: string;
  /**
   * Size
   * @description The size of the retrieved file in bytes.
   */
  size?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BITBUCKET's BITBUCKET_GET_PULL_REQUEST tool input.
 */
type BITBUCKET_GET_PULL_REQUEST_INPUT = {
  /**
   * Pull Request Id
   * @description The ID of the pull request to retrieve.
   */
  pull_request_id?: number;
  /**
   * Repo Slug
   * @description Repository slug (URL-friendly name).
   */
  repo_slug?: string;
  /**
   * Workspace
   * @description Workspace ID or slug (URL-friendly name).
   */
  workspace?: string;
};

/**
 * Type of BITBUCKET's BITBUCKET_GET_PULL_REQUEST tool output.
 */
type BITBUCKET_GET_PULL_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Pull Request
       * @description Complete details of the requested pull request.
       */
      pull_request: {
          /**
           * Author
           * @description Pull request author.
           */
          author: {
              /**
               * Display Name
               * @description Display name of the author.
               * @default null
               */
              display_name: string | null;
              /**
               * Type
               * @description Author type, e.g., 'user'.
               */
              type: string;
              /**
               * Username
               * @description Username of the author.
               * @default null
               */
              username: string | null;
              /**
               * Uuid
               * @description UUID of the author.
               * @default null
               */
              uuid: string | null;
          };
          /**
           * Close Source Branch
           * @description Whether to close source branch after merge.
           * @default null
           */
          close_source_branch: boolean | null;
          /**
           * PullRequestAuthor
           * @description Author of a pull request.
           * @default null
           */
          closed_by: {
              /**
               * Display Name
               * @description Display name of the author.
               * @default null
               */
              display_name: string | null;
              /**
               * Type
               * @description Author type, e.g., 'user'.
               */
              type: string;
              /**
               * Username
               * @description Username of the author.
               * @default null
               */
              username: string | null;
              /**
               * Uuid
               * @description UUID of the author.
               * @default null
               */
              uuid: string | null;
          } | null;
          /**
           * Comment Count
           * @description Total number of comments.
           */
          comment_count: number;
          /**
           * Created On
           * @description Creation timestamp (ISO 8601).
           */
          created_on: string;
          /**
           * Description
           * @description Description of the pull request.
           * @default null
           */
          description: string | null;
          /**
           * Destination
           * @description Destination branch details.
           */
          destination: {
              /**
               * Branch
               * @description Branch details.
               */
              branch: {
                  /**
                   * Name
                   * @description Branch name.
                   */
                  name: string;
              };
          };
          /**
           * Id
           * @description Unique ID of the pull request.
           */
          id: number;
          /**
           * Links
           * @description HATEOAS links (self, HTML).
           */
          links: {
              /**
               * Html
               * @description Web link to this pull request in Bitbucket.
               */
              html: {
                  [key: string]: string;
              };
              /**
               * Self
               * @description API link to this pull request.
               */
              self: {
                  [key: string]: string;
              };
          };
          /**
           * Merge Commit
           * @description Merge commit details if merged.
           * @default null
           */
          merge_commit: {
              [key: string]: unknown;
          } | null;
          /**
           * Participants
           * @description List of participants.
           * @default null
           */
          participants: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Reason
           * @description Reason for closure.
           * @default null
           */
          reason: string | null;
          /**
           * Reviewers
           * @description List of reviewers.
           * @default null
           */
          reviewers: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Source
           * @description Source branch details.
           */
          source: {
              /**
               * Branch
               * @description Branch details.
               */
              branch: {
                  /**
                   * Name
                   * @description Branch name.
                   */
                  name: string;
              };
          };
          /**
           * State
           * @description Current state (e.g., OPEN, MERGED, DECLINED).
           */
          state: string;
          /**
           * Task Count
           * @description Total number of open tasks.
           */
          task_count: number;
          /**
           * Title
           * @description Title of the pull request.
           */
          title: string;
          /**
           * Type
           * @description Object type, typically 'pullrequest'.
           */
          type: string;
          /**
           * Updated On
           * @description Last update timestamp (ISO 8601).
           */
          updated_on: string;
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
 * Type of BITBUCKET's BITBUCKET_GET_SNIPPET tool input.
 */
type BITBUCKET_GET_SNIPPET_INPUT = {
  /**
   * Accept Format
   * @description The desired format for the response. Valid options are 'application/json', 'multipart/related', or 'multipart/form-data'. This may affect how snippet content or file data is presented.
   * @default application/json
   */
  accept_format: string;
  /**
   * Encoded Id
   * @description The unique identifier (encoded ID) of the snippet to be retrieved.
   */
  encoded_id?: string;
  /**
   * Workspace
   * @description The workspace ID (slug) or the workspace UUID surrounded by curly braces, identifying the Bitbucket workspace.
   */
  workspace?: string;
};

/**
 * Type of BITBUCKET's BITBUCKET_GET_SNIPPET tool output.
 */
type BITBUCKET_GET_SNIPPET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created On
       * @description The ISO 8601 timestamp indicating when the snippet was created.
       * @default
       */
      created_on: string;
      /**
       * Creator
       * @description An object containing information about the creator of the snippet, typically including user details.
       * @default {}
       */
      creator: {
          [key: string]: unknown;
      };
      /**
       * Files
       * @description A dictionary where keys are filenames and values are objects containing details about each file within the snippet, including links to the file content.
       * @default {}
       */
      files: {
          [key: string]: {
              /**
               * Links
               * @description A dictionary of hypermedia links related to the file. For example, `{'self': {'href': '...'}}`.
               * @default {}
               */
              links: {
                  [key: string]: {
                      [key: string]: string;
                  };
              };
          };
      };
      /**
       * Id
       * @description The unique numerical identifier of the snippet.
       * @default 0
       */
      id: number;
      /**
       * Is Private
       * @description Indicates if the snippet is private (true) or public (false).
       * @default false
       */
      is_private: boolean;
      /**
       * Owner
       * @description An object containing information about the owner of the snippet, typically including user details.
       * @default {}
       */
      owner: {
          [key: string]: unknown;
      };
      /**
       * Scm
       * @description The source control management system used for the snippet (e.g., 'git').
       * @default git
       */
      scm: string;
      /**
       * Title
       * @description The title of the snippet.
       * @default
       */
      title: string;
      /**
       * Type
       * @description The type of the object, typically 'snippet' for snippet resources.
       * @default snippet
       */
      type: string;
      /**
       * Updated On
       * @description The ISO 8601 timestamp indicating when the snippet was last updated.
       * @default
       */
      updated_on: string;
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
 * Type of BITBUCKET's BITBUCKET_LIST_PULL_REQUESTS tool input.
 */
type BITBUCKET_LIST_PULL_REQUESTS_INPUT = {
  /**
   * Page
   * @description Page number for paginated results (starts from 1).
   * @default null
   */
  page: number | null;
  /**
   * Pagelen
   * @description Number of pull requests per page (1-100). Bitbucket default if not specified.
   * @default null
   */
  pagelen: number | null;
  /**
   * Repo Slug
   * @description Repository slug (URL-friendly name).
   */
  repo_slug?: string;
  /**
   * PullRequestState
   * @description Lifecycle state of a pull request.
   * @default null
   * @enum {string|null}
   */
  state: "OPEN" | "MERGED" | "DECLINED" | null;
  /**
   * Workspace
   * @description Workspace ID or slug (URL-friendly name).
   */
  workspace?: string;
};

/**
 * Type of BITBUCKET's BITBUCKET_LIST_PULL_REQUESTS tool output.
 */
type BITBUCKET_LIST_PULL_REQUESTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description API URL for the next page; null if last page.
       * @default null
       */
      next: string | null;
      /**
       * Page
       * @description Current page number.
       */
      page: number;
      /**
       * Pagelen
       * @description Number of pull requests on the current page.
       */
      pagelen: number;
      /**
       * Previous
       * @description API URL for the previous page; null if first page.
       * @default null
       */
      previous: string | null;
      /**
       * Size
       * @description Total number of pull requests matching filters across all pages (-1 if unavailable).
       */
      size: number;
      /**
       * Values
       * @description Pull request details for the current page.
       */
      values: {
          /**
           * Author
           * @description Pull request author.
           */
          author: {
              /**
               * Type
               * @description Author type, e.g., 'user'.
               */
              type: string;
          };
          /**
           * Comment Count
           * @description Total number of comments.
           */
          comment_count: number;
          /**
           * Created On
           * @description Creation timestamp (ISO 8601).
           */
          created_on: string;
          /**
           * Destination
           * @description Destination branch details.
           */
          destination: {
              /**
               * Branch
               * @description Branch details.
               */
              branch: {
                  /**
                   * Name
                   * @description Branch name.
                   */
                  name: string;
              };
          };
          /**
           * Id
           * @description Unique ID of the pull request.
           */
          id: number;
          /**
           * Links
           * @description HATEOAS links (self, HTML).
           */
          links: {
              /**
               * Html
               * @description Web link to this pull request in Bitbucket.
               */
              html: {
                  [key: string]: string;
              };
              /**
               * Self
               * @description API link to this pull request.
               */
              self: {
                  [key: string]: string;
              };
          };
          /**
           * Source
           * @description Source branch details.
           */
          source: {
              /**
               * Branch
               * @description Branch details.
               */
              branch: {
                  /**
                   * Name
                   * @description Branch name.
                   */
                  name: string;
              };
          };
          /**
           * State
           * @description Current state (e.g., OPEN, MERGED, DECLINED).
           * @enum {string}
           */
          state: "OPEN" | "MERGED" | "DECLINED";
          /**
           * Task Count
           * @description Total number of open tasks.
           */
          task_count: number;
          /**
           * Title
           * @description Title of the pull request.
           */
          title: string;
          /**
           * Type
           * @description Object type, typically 'pullrequest'.
           */
          type: string;
          /**
           * Updated On
           * @description Last update timestamp (ISO 8601).
           */
          updated_on: string;
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
 * Type of BITBUCKET's BITBUCKET_LIST_REPOSITORIES_IN_WORKSPACE tool input.
 */
type BITBUCKET_LIST_REPOSITORIES_IN_WORKSPACE_INPUT = {
  /**
   * Q
   * @description Query string using Bitbucket's REST API filtering syntax to filter repositories. For detailed syntax, refer to Bitbucket API documentation.
   * @default null
   */
  q: string | null;
  /**
   * Role
   * @description Filters repositories by the authenticated user's role within each repository.
   * @default null
   */
  role: string | null;
  /**
   * Sort
   * @description Field for sorting repository results. Prefix with '-' for descending order. Common sortable fields: 'name', 'updated_on', 'created_on'.
   * @default null
   */
  sort: string | null;
  /**
   * Workspace
   * @description The identifier of the Bitbucket workspace. This can be the workspace slug (e.g., 'my-workspace') or its UUID enclosed in curly braces (e.g., '{workspace-uuid}').
   */
  workspace?: string;
};

/**
 * Type of BITBUCKET's BITBUCKET_LIST_REPOSITORIES_IN_WORKSPACE tool output.
 */
type BITBUCKET_LIST_REPOSITORIES_IN_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description The URL to retrieve the next page of repository results. If null, this is the last page.
       * @default null
       */
      next: string | null;
      /**
       * Page
       * @description The current page number in the paginated list of results.
       * @default null
       */
      page: number | null;
      /**
       * Pagelen
       * @description The number of repository entries returned on the current page.
       * @default null
       */
      pagelen: number | null;
      /**
       * Previous
       * @description The URL to retrieve the previous page of repository results. If null, this is the first page.
       * @default null
       */
      previous: string | null;
      /**
       * Size
       * @description The total number of repositories in the workspace that match the query criteria. This may be an estimate if not all pages are fetched.
       * @default null
       */
      size: number | null;
      /**
       * Values
       * @description A list of repository objects found in the workspace, matching the query criteria.
       */
      values: {
          /**
           * Created On
           * @description The Coordinated Universal Time (UTC) timestamp, in ISO 8601 format, indicating when the repository was created.
           * @default null
           */
          created_on: string | null;
          /**
           * Description
           * @description A user-provided description of the repository. May be empty.
           * @default null
           */
          description: string | null;
          /**
           * Fork Policy
           * @description Defines the forking policy for this repository. Possible values include 'allow_forks', 'no_public_forks', 'no_forks'.
           * @default null
           */
          fork_policy: string | null;
          /**
           * Full Name
           * @description The repository's complete name, in the format 'workspace_slug/repository_slug'.
           * @default null
           */
          full_name: string | null;
          /**
           * Has Issues
           * @description Boolean indicating if the repository has the issue tracker feature enabled.
           * @default null
           */
          has_issues: boolean | null;
          /**
           * Has Wiki
           * @description Boolean indicating if the repository has the wiki feature enabled.
           * @default null
           */
          has_wiki: boolean | null;
          /**
           * Is Private
           * @description Boolean indicating whether the repository is private (true) or public (false).
           * @default null
           */
          is_private: boolean | null;
          /**
           * Language
           * @description The main programming language detected in the repository. May be empty if undetermined.
           * @default null
           */
          language: string | null;
          /**
           * RepositoryLinks
           * @description A collection of HAL links related to this repository, providing URLs to associated resources.
           * @default null
           */
          links: {
              /**
               * Avatar
               * @description Link to the repository's avatar image.
               * @default null
               */
              avatar: {
                  [key: string]: unknown;
              } | null;
              /**
               * Clone
               * @description A list of available clone links for the repository. Each link usually specifies a protocol like HTTPS or SSH.
               * @default null
               */
              clone: unknown[] | null;
              /**
               * Commits
               * @description Link to the API resource for the repository's commits.
               * @default null
               */
              commits: {
                  [key: string]: unknown;
              } | null;
              /**
               * Downloads
               * @description Link to the API resource for the repository's downloads, if any.
               * @default null
               */
              downloads: {
                  [key: string]: unknown;
              } | null;
              /**
               * Forks
               * @description Link to the API resource for the repository's forks.
               * @default null
               */
              forks: {
                  [key: string]: unknown;
              } | null;
              /**
               * Hooks
               * @description Link to the API resource for the repository's webhooks.
               * @default null
               */
              hooks: {
                  [key: string]: unknown;
              } | null;
              /**
               * Html
               * @description Link to the HTML (web) view of the repository on Bitbucket.
               * @default null
               */
              html: {
                  [key: string]: unknown;
              } | null;
              /**
               * Pullrequests
               * @description Link to the API resource for the repository's pull requests.
               * @default null
               */
              pullrequests: {
                  [key: string]: unknown;
              } | null;
              /**
               * Self
               * @description Link to the API resource of the repository itself.
               * @default null
               */
              self: {
                  [key: string]: unknown;
              } | null;
              /**
               * Watchers
               * @description Link to the API resource for users watching the repository.
               * @default null
               */
              watchers: {
                  [key: string]: unknown;
              } | null;
          } | null;
          /**
           * Mainbranch
           * @description An object containing information about the repository's main (default) branch, if configured.
           * @default null
           */
          mainbranch: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description The name of the repository, which is the same as its slug.
           * @default null
           */
          name: string | null;
          /**
           * Owner
           * @description An object detailing the workspace or user that owns this repository.
           * @default null
           */
          owner: {
              [key: string]: unknown;
          } | null;
          /**
           * Project
           * @description An object representing the Bitbucket project this repository belongs to, if applicable.
           * @default null
           */
          project: {
              [key: string]: unknown;
          } | null;
          /**
           * Scm
           * @description The source control management system used by the repository (e.g., 'git' or 'hg').
           * @default null
           */
          scm: string | null;
          /**
           * Size
           * @description The size of the repository in bytes.
           * @default null
           */
          size: number | null;
          /**
           * Type
           * @description The type of this Bitbucket object, typically 'repository'.
           * @default null
           */
          type: string | null;
          /**
           * Updated On
           * @description The Coordinated Universal Time (UTC) timestamp, in ISO 8601 format, indicating when the repository was last updated.
           * @default null
           */
          updated_on: string | null;
          /**
           * Uuid
           * @description The immutable, universally unique identifier (UUID) of the repository, typically enclosed in curly braces.
           * @default null
           */
          uuid: string | null;
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
 * Type of BITBUCKET's BITBUCKET_LIST_WORKSPACES tool input.
 */
type BITBUCKET_LIST_WORKSPACES_INPUT = {
  /**
   * Q
   * @description Query string to filter workspaces by attributes, following Bitbucket's filtering syntax.
   * @default null
   */
  q: string | null;
  /**
   * Sort
   * @description Field to sort returned workspaces by; prefix with a hyphen (-) for descending order.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of BITBUCKET's BITBUCKET_LIST_WORKSPACES tool output.
 */
type BITBUCKET_LIST_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description The URL to fetch the next page of results. If null or omitted, this is the last page.
       * @default null
       */
      next: string | null;
      /**
       * Page
       * @description The current page number in the paginated result set.
       */
      page: number;
      /**
       * Pagelen
       * @description The number of workspaces returned on the current page.
       */
      pagelen: number;
      /**
       * Previous
       * @description The URL to fetch the previous page of results. If null or omitted, this is the first page.
       * @default null
       */
      previous: string | null;
      /**
       * Size
       * @description The total number of workspaces available that match the request criteria (if available, otherwise may be null or omitted).
       */
      size: number;
      /**
       * Values
       * @description A list of workspace objects accessible to the authenticated user and matching the filter criteria.
       */
      values: {
          /**
           * Created On
           * @description The ISO 8601 timestamp indicating when the workspace was created.
           */
          created_on: string;
          /**
           * Is Private
           * @description A boolean indicating whether the workspace is private (true) or public (false).
           */
          is_private: boolean;
          /**
           * Links
           * @description A collection of links to related resources for this workspace.
           */
          links: {
              /**
               * WorkspaceLink
               * @description Model for HAL-style link objects associated with a workspace.
               * @default null
               */
              avatar: {
                  /**
                   * Href
                   * @description The absolute URL of the link.
                   */
                  href: string;
                  /**
                   * Name
                   * @description A human-readable name for the link relation.
                   * @default null
                   */
                  name: string | null;
              } | null;
              /**
               * Html
               * @description Link to the workspace's page on Bitbucket.org.
               */
              html: {
                  /**
                   * Href
                   * @description The absolute URL of the link.
                   */
                  href: string;
                  /**
                   * Name
                   * @description A human-readable name for the link relation.
                   * @default null
                   */
                  name: string | null;
              };
              /**
               * Members
               * @description Link to the members of the workspace.
               */
              members: {
                  /**
                   * Href
                   * @description The absolute URL of the link.
                   */
                  href: string;
                  /**
                   * Name
                   * @description A human-readable name for the link relation.
                   * @default null
                   */
                  name: string | null;
              };
              /**
               * Owners
               * @description Link to the owners of the workspace.
               */
              owners: {
                  /**
                   * Href
                   * @description The absolute URL of the link.
                   */
                  href: string;
                  /**
                   * Name
                   * @description A human-readable name for the link relation.
                   * @default null
                   */
                  name: string | null;
              };
              /**
               * Projects
               * @description Link to the projects within the workspace.
               */
              projects: {
                  /**
                   * Href
                   * @description The absolute URL of the link.
                   */
                  href: string;
                  /**
                   * Name
                   * @description A human-readable name for the link relation.
                   * @default null
                   */
                  name: string | null;
              };
              /**
               * Repositories
               * @description Link to the repositories within the workspace.
               */
              repositories: {
                  /**
                   * Href
                   * @description The absolute URL of the link.
                   */
                  href: string;
                  /**
                   * Name
                   * @description A human-readable name for the link relation.
                   * @default null
                   */
                  name: string | null;
              };
              /**
               * Self
               * @description Link to the workspace itself.
               */
              self: {
                  /**
                   * Href
                   * @description The absolute URL of the link.
                   */
                  href: string;
                  /**
                   * Name
                   * @description A human-readable name for the link relation.
                   * @default null
                   */
                  name: string | null;
              };
              /**
               * WorkspaceLink
               * @description Model for HAL-style link objects associated with a workspace.
               * @default null
               */
              snippets: {
                  /**
                   * Href
                   * @description The absolute URL of the link.
                   */
                  href: string;
                  /**
                   * Name
                   * @description A human-readable name for the link relation.
                   * @default null
                   */
                  name: string | null;
              } | null;
          };
          /**
           * Name
           * @description The display name of the workspace.
           */
          name: string;
          /**
           * Slug
           * @description The URL-friendly identifier for the workspace, often used in API paths and URLs.
           */
          slug: string;
          /**
           * Type
           * @description The type of the object, always 'workspace' for workspace objects.
           */
          type: string;
          /**
           * Uuid
           * @description The unique universally unique identifier (UUID) of the workspace.
           */
          uuid: string;
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
 * Type of BITBUCKET's BITBUCKET_LIST_WORKSPACE_MEMBERS tool input.
 */
type BITBUCKET_LIST_WORKSPACE_MEMBERS_INPUT = {
  /**
   * Workspace
   * @description The workspace ID (UUID) or slug from which to list members. The slug is the user-friendly, URL-safe identifier for the workspace.
   */
  workspace?: string;
};

/**
 * Type of BITBUCKET's BITBUCKET_LIST_WORKSPACE_MEMBERS tool output.
 */
type BITBUCKET_LIST_WORKSPACE_MEMBERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Page
       * @description Current page number of the paginated results.
       * @default 1
       */
      page: number;
      /**
       * Pagelen
       * @description Number of workspace members returned on the current page.
       * @default 10
       */
      pagelen: number;
      /**
       * Size
       * @description Total number of members in the workspace across all pages.
       * @default 0
       */
      size: number;
      /**
       * Values
       * @description A list containing `WorkspaceMember` objects, each representing a member of the specified workspace.
       */
      values: {
          /**
           * Type
           * @description Identifies the object type.
           * @default workspace_membership
           */
          type: string;
          /**
           * User
           * @description Detailed information about the member user.
           */
          user: {
              /**
               * Display Name
               * @description The publicly visible name of the user.
               */
              display_name: string;
              /**
               * Nickname
               * @description The user's chosen nickname. This field may be null or not present if a nickname is not set.
               * @default null
               */
              nickname: string | null;
              /**
               * Type
               * @description Identifies the object type.
               * @default user
               */
              type: string;
              /**
               * Uuid
               * @description The unique universally unique identifier (UUID) of the user.
               */
              uuid: string;
          };
          /**
           * Workspace
           * @description Detailed information about the workspace to which the user belongs.
           */
          workspace: {
              /**
               * Name
               * @description The human-readable name of the workspace.
               */
              name: string;
              /**
               * Slug
               * @description The URL-friendly identifier for the workspace (e.g., 'my-company').
               */
              slug: string;
              /**
               * Type
               * @description Identifies the object type.
               * @default workspace
               */
              type: string;
              /**
               * Uuid
               * @description The unique universally unique identifier (UUID) of the workspace.
               */
              uuid: string;
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
 * Type of BITBUCKET's BITBUCKET_UPDATE_ISSUE tool input.
 */
type BITBUCKET_UPDATE_ISSUE_INPUT = {
  /**
   * Assignee Account Id
   * @description The Bitbucket account ID (UUID) of the user to assign the issue to. If omitted, the assignee remains unchanged.
   * @default null
   */
  assignee_account_id: string | null;
  /**
   * Component
   * @description The name of the component to associate with the issue (e.g., 'API', 'Frontend'). If omitted, the component remains unchanged.
   * @default null
   */
  component: string | null;
  /**
   * Content
   * @description The new content or description for the issue, in raw text format. If omitted, the content remains unchanged.
   * @default null
   */
  content: string | null;
  /**
   * Issue Id
   * @description The unique identifier (ID) of the issue to be updated.
   */
  issue_id?: string;
  /**
   * Kind
   * @description The updated kind (type) for the issue. If omitted, kind remains unchanged.
   * @default null
   */
  kind: string | null;
  /**
   * Milestone
   * @description The name of the milestone to associate with the issue (e.g., 'Sprint 1', 'v1.0 Launch'). If omitted, the milestone remains unchanged.
   * @default null
   */
  milestone: string | null;
  /**
   * Priority
   * @description The updated priority for the issue. If omitted, priority remains unchanged.
   * @default null
   */
  priority: string | null;
  /**
   * Repo Slug
   * @description The slug or name of the repository (e.g., 'my-app-repo').
   */
  repo_slug?: string;
  /**
   * State
   * @description The updated state for the issue. If omitted, state remains unchanged.
   * @default null
   */
  state: string | null;
  /**
   * Title
   * @description The new title for the issue. If omitted, the title remains unchanged.
   * @default null
   */
  title: string | null;
  /**
   * Version
   * @description The name of the version affected by this issue (e.g., '1.0.0', '2.0-beta'). If omitted, the version remains unchanged.
   * @default null
   */
  version: string | null;
  /**
   * Workspace
   * @description The workspace ID or slug that owns the repository (e.g., 'my-company' or '{123e4567-e89b-12d3-a456-426614174000}').
   */
  workspace?: string;
};

/**
 * Type of BITBUCKET's BITBUCKET_UPDATE_ISSUE tool output.
 */
type BITBUCKET_UPDATE_ISSUE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The unique ID of the updated issue.
       * @default null
       */
      id: number | null;
      /**
       * Kind
       * @description The kind (type) of the issue after the update (e.g., 'bug', 'task').
       * @default null
       */
      kind: string | null;
      /**
       * Priority
       * @description The priority of the issue after the update (e.g., 'major', 'minor').
       * @default null
       */
      priority: string | null;
      /**
       * State
       * @description The state of the issue after the update (e.g., 'resolved', 'open').
       * @default null
       */
      state: string | null;
      /**
       * Title
       * @description The title of the issue after the update.
       * @default null
       */
      title: string | null;
      /**
       * Type
       * @description The type of the response object, typically 'issue'.
       * @default null
       */
      type: string | null;
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
 * Type map of all available tool input types for toolkit "BITBUCKET".
 */
export type BITBUCKET_TOOL_INPUTS = {
  CREATE_BRANCH: BITBUCKET_CREATE_BRANCH_INPUT
  CREATE_ISSUE: BITBUCKET_CREATE_ISSUE_INPUT
  CREATE_ISSUE_COMMENT: BITBUCKET_CREATE_ISSUE_COMMENT_INPUT
  CREATE_PULL_REQUEST: BITBUCKET_CREATE_PULL_REQUEST_INPUT
  CREATE_REPOSITORY: BITBUCKET_CREATE_REPOSITORY_INPUT
  CREATE_SNIPPET_COMMENT: BITBUCKET_CREATE_SNIPPET_COMMENT_INPUT
  DELETE_ISSUE: BITBUCKET_DELETE_ISSUE_INPUT
  DELETE_REPOSITORY: BITBUCKET_DELETE_REPOSITORY_INPUT
  GET_CURRENT_USER: BITBUCKET_GET_CURRENT_USER_INPUT
  GET_FILE_FROM_REPOSITORY: BITBUCKET_GET_FILE_FROM_REPOSITORY_INPUT
  GET_PULL_REQUEST: BITBUCKET_GET_PULL_REQUEST_INPUT
  GET_SNIPPET: BITBUCKET_GET_SNIPPET_INPUT
  LIST_PULL_REQUESTS: BITBUCKET_LIST_PULL_REQUESTS_INPUT
  LIST_REPOSITORIES_IN_WORKSPACE: BITBUCKET_LIST_REPOSITORIES_IN_WORKSPACE_INPUT
  LIST_WORKSPACES: BITBUCKET_LIST_WORKSPACES_INPUT
  LIST_WORKSPACE_MEMBERS: BITBUCKET_LIST_WORKSPACE_MEMBERS_INPUT
  UPDATE_ISSUE: BITBUCKET_UPDATE_ISSUE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BITBUCKET".
 */
export type BITBUCKET_TOOL_OUTPUTS = {
  CREATE_BRANCH: BITBUCKET_CREATE_BRANCH_OUTPUT
  CREATE_ISSUE: BITBUCKET_CREATE_ISSUE_OUTPUT
  CREATE_ISSUE_COMMENT: BITBUCKET_CREATE_ISSUE_COMMENT_OUTPUT
  CREATE_PULL_REQUEST: BITBUCKET_CREATE_PULL_REQUEST_OUTPUT
  CREATE_REPOSITORY: BITBUCKET_CREATE_REPOSITORY_OUTPUT
  CREATE_SNIPPET_COMMENT: BITBUCKET_CREATE_SNIPPET_COMMENT_OUTPUT
  DELETE_ISSUE: BITBUCKET_DELETE_ISSUE_OUTPUT
  DELETE_REPOSITORY: BITBUCKET_DELETE_REPOSITORY_OUTPUT
  GET_CURRENT_USER: BITBUCKET_GET_CURRENT_USER_OUTPUT
  GET_FILE_FROM_REPOSITORY: BITBUCKET_GET_FILE_FROM_REPOSITORY_OUTPUT
  GET_PULL_REQUEST: BITBUCKET_GET_PULL_REQUEST_OUTPUT
  GET_SNIPPET: BITBUCKET_GET_SNIPPET_OUTPUT
  LIST_PULL_REQUESTS: BITBUCKET_LIST_PULL_REQUESTS_OUTPUT
  LIST_REPOSITORIES_IN_WORKSPACE: BITBUCKET_LIST_REPOSITORIES_IN_WORKSPACE_OUTPUT
  LIST_WORKSPACES: BITBUCKET_LIST_WORKSPACES_OUTPUT
  LIST_WORKSPACE_MEMBERS: BITBUCKET_LIST_WORKSPACE_MEMBERS_OUTPUT
  UPDATE_ISSUE: BITBUCKET_UPDATE_ISSUE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BITBUCKET toolkit.
 */
export const BITBUCKET = {
  slug: "bitbucket",
  tools: {
    /**
     * Creates a new branch in a bitbucket repository from a target commit hash; the branch name must be unique, adhere to bitbucket's naming conventions, and not include the 'refs/heads/' prefix.
     */
    CREATE_BRANCH: "BITBUCKET_CREATE_BRANCH",
    /**
     * Creates a new issue in a bitbucket repository, setting the authenticated user as reporter; ensures assignee (if provided) has repository access, and that any specified milestone, version, or component ids exist.
     */
    CREATE_ISSUE: "BITBUCKET_CREATE_ISSUE",
    /**
     * Adds a new comment with markdown support to an existing bitbucket issue.
     */
    CREATE_ISSUE_COMMENT: "BITBUCKET_CREATE_ISSUE_COMMENT",
    /**
     * Creates a new pull request in a specified bitbucket repository, ensuring the source branch exists and is distinct from the (optional) destination branch.
     */
    CREATE_PULL_REQUEST: "BITBUCKET_CREATE_PULL_REQUEST",
    /**
     * Creates a new bitbucket 'git' repository in a specified workspace, defaulting to the workspace's oldest project if `project key` is not provided.
     */
    CREATE_REPOSITORY: "BITBUCKET_CREATE_REPOSITORY",
    /**
     * Posts a new top-level comment or a threaded reply to an existing comment on a specified bitbucket snippet.
     */
    CREATE_SNIPPET_COMMENT: "BITBUCKET_CREATE_SNIPPET_COMMENT",
    /**
     * Permanently deletes a specific issue, identified by its `issue id`, from the repository specified by `repo slug` within the given `workspace`.
     */
    DELETE_ISSUE: "BITBUCKET_DELETE_ISSUE",
    /**
     * Permanently deletes a specified bitbucket repository; this action is irreversible and does not affect forks.
     */
    DELETE_REPOSITORY: "BITBUCKET_DELETE_REPOSITORY",
    /**
     * Retrieves the profile information (uuid, display name, links, creation date) for the currently authenticated bitbucket user.
     */
    GET_CURRENT_USER: "BITBUCKET_GET_CURRENT_USER",
    /**
     * Retrieves a specific file's content from a bitbucket repository at a given commit (hash, branch, or tag), failing if the file path is invalid for that commit.
     */
    GET_FILE_FROM_REPOSITORY: "BITBUCKET_GET_FILE_FROM_REPOSITORY",
    /**
     * Get a single pull request by id with complete details.
     */
    GET_PULL_REQUEST: "BITBUCKET_GET_PULL_REQUEST",
    /**
     * Retrieves a specific bitbucket snippet by its encoded id from an existing workspace, returning its metadata and file structure.
     */
    GET_SNIPPET: "BITBUCKET_GET_SNIPPET",
    /**
     * Lists pull requests in a specified, accessible bitbucket repository, optionally filtering by state (open, merged, declined).
     */
    LIST_PULL_REQUESTS: "BITBUCKET_LIST_PULL_REQUESTS",
    /**
     * Lists repositories in a specified bitbucket workspace, accessible to the authenticated user, with options to filter by role or query string, and sort results.
     */
    LIST_REPOSITORIES_IN_WORKSPACE: "BITBUCKET_LIST_REPOSITORIES_IN_WORKSPACE",
    /**
     * Lists bitbucket workspaces accessible to the authenticated user, optionally filtered and sorted.
     */
    LIST_WORKSPACES: "BITBUCKET_LIST_WORKSPACES",
    /**
     * Lists all members of a specified bitbucket workspace; the workspace must exist.
     */
    LIST_WORKSPACE_MEMBERS: "BITBUCKET_LIST_WORKSPACE_MEMBERS",
    /**
     * Updates an existing issue in a bitbucket repository by modifying specified attributes; requires `workspace`, `repo slug`, `issue id`, and at least one attribute to update.
     */
    UPDATE_ISSUE: "BITBUCKET_UPDATE_ISSUE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BITBUCKET".
 */
export type BITBUCKET_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BITBUCKET".
 */
export type BITBUCKET_TRIGGER_EVENTS = {}
