// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SOURCEGRAPH's SOURCEGRAPH_CHECK_SITE_SETTINGS_EDIT_PERMISSION tool input.
 */
type SOURCEGRAPH_CHECK_SITE_SETTINGS_EDIT_PERMISSION_INPUT = object;

/**
 * Type of SOURCEGRAPH's SOURCEGRAPH_CHECK_SITE_SETTINGS_EDIT_PERMISSION tool output.
 */
type SOURCEGRAPH_CHECK_SITE_SETTINGS_EDIT_PERMISSION_OUTPUT = {
  /**
   * Data
   * @description GraphQL response data containing site settings edit permission flag.
   */
  data?: {
      /**
       * Site
       * @description Site settings edit permission payload.
       */
      site: {
          /**
           * Allow Site Settings Edits
           * @description Whether site settings edits are allowed via the API.
           */
          allowSiteSettingsEdits: boolean;
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
 * Type of SOURCEGRAPH's SOURCEGRAPH_COMPARE_COMMITS tool input.
 */
type SOURCEGRAPH_COMPARE_COMMITS_INPUT = {
  /**
   * Base
   * @description Base commit SHA or ref to compare from
   */
  base?: string;
  /**
   * Head
   * @description Head commit SHA or ref to compare to
   */
  head?: string;
  /**
   * Repo
   * @description Repository name in format 'github.com/owner/repo'
   */
  repo?: string;
};

/**
 * Type of SOURCEGRAPH's SOURCEGRAPH_COMPARE_COMMITS tool output.
 */
type SOURCEGRAPH_COMPARE_COMMITS_OUTPUT = {
  /**
   * Data
   * @description GraphQL response data
   */
  data?: {
      /**
       * Repository
       * @description Repository data
       */
      repository: {
          /**
           * Comparison
           * @description Comparison result for the repository
           */
          comparison: {
              /**
               * File Diffs
               * @description Diffs between base and head commits
               */
              fileDiffs: {
                  /**
                   * Nodes
                   * @description List of file diff nodes
                   */
                  nodes: {
                      /**
                       * Hunks
                       * @description List of diff hunks
                       */
                      hunks: {
                          /**
                           * Body
                           * @description Diff hunk body text
                           */
                          body: string;
                      }[];
                      /**
                       * New Path
                       * @description New file path after changes
                       * @default null
                       */
                      newPath: string | null;
                      /**
                       * Old Path
                       * @description Original file path before changes
                       * @default null
                       */
                      oldPath: string | null;
                  }[];
              };
          };
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
 * Type of SOURCEGRAPH's SOURCEGRAPH_GET_COMMIT_DETAILS tool input.
 */
type SOURCEGRAPH_GET_COMMIT_DETAILS_INPUT = {
  /**
   * Repo
   * @description Repository name in format 'github.com/owner/repo'
   */
  repo?: string;
  /**
   * Rev
   * @description Commit SHA, branch name, or tag to get details for
   */
  rev?: string;
};

/**
 * Type of SOURCEGRAPH's SOURCEGRAPH_GET_COMMIT_DETAILS tool output.
 */
type SOURCEGRAPH_GET_COMMIT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description GraphQL response data
   */
  data?: {
      /**
       * Repository
       * @description Repository containing the commit
       * @default null
       */
      repository: {
          /**
           * GitCommit
           * @description Model for Git commit details
           * @default null
           */
          commit: {
              /**
               * Author
               * @description Commit author information
               */
              author: {
                  /**
                   * Date
                   * @description Author date in ISO format
                   */
                  date: string;
                  /**
                   * Email
                   * @description Author email address
                   */
                  email: string;
                  /**
                   * Name
                   * @description Author name
                   */
                  name: string;
              };
              /**
               * Committer
               * @description Commit committer information
               */
              committer: {
                  /**
                   * Date
                   * @description Committer date in ISO format
                   */
                  date: string;
                  /**
                   * Email
                   * @description Committer email address
                   */
                  email: string;
                  /**
                   * Name
                   * @description Committer name
                   */
                  name: string;
              };
              /**
               * Message
               * @description Commit message
               */
              message: string;
              /**
               * Oid
               * @description Commit SHA
               */
              oid: string;
              /**
               * Parents
               * @description List of parent commits
               */
              parents: {
                  /**
                   * Oid
                   * @description Parent commit SHA
                   */
                  oid: string;
              }[];
          } | null;
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
 * Type of SOURCEGRAPH's SOURCEGRAPH_GET_CURRENT_USER tool input.
 */
type SOURCEGRAPH_GET_CURRENT_USER_INPUT = object;

/**
 * Type of SOURCEGRAPH's SOURCEGRAPH_GET_CURRENT_USER tool output.
 */
type SOURCEGRAPH_GET_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description GraphQL response data containing the current user.
   */
  data?: {
      /**
       * Current User
       * @description Information about the currently authenticated user.
       */
      currentUser: {
          /**
           * Username
           * @description The username of the currently authenticated user.
           */
          username: string;
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
 * Type of SOURCEGRAPH's SOURCEGRAPH_GET_FILE_CONTENTS tool input.
 */
type SOURCEGRAPH_GET_FILE_CONTENTS_INPUT = {
  /**
   * File Path
   * @description Path to the file in the repository, relative to the root, e.g., 'README.md'.
   */
  file_path?: string;
  /**
   * Repo Name
   * @description Full repository name, including host and path, e.g., 'github.com/uber/react-map-gl'.
   */
  repo_name?: string;
};

/**
 * Type of SOURCEGRAPH's SOURCEGRAPH_GET_FILE_CONTENTS tool output.
 */
type SOURCEGRAPH_GET_FILE_CONTENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The raw text contents of the specified file on the repository's default branch.
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
 * Type of SOURCEGRAPH's SOURCEGRAPH_LIST_REPOSITORIES tool input.
 */
type SOURCEGRAPH_LIST_REPOSITORIES_INPUT = {
  /**
   * After
   * @description Pagination cursor returned from previous page; omit for first page.
   * @default null
   */
  after: string | null;
  /**
   * First
   * @description Number of repositories to retrieve (1-1000).
   */
  first?: number;
};

/**
 * Type of SOURCEGRAPH's SOURCEGRAPH_LIST_REPOSITORIES tool output.
 */
type SOURCEGRAPH_LIST_REPOSITORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Nodes
       * @description List of repository nodes.
       */
      nodes: {
          /**
           * Description
           * @description Description of the repository.
           * @default null
           */
          description: string | null;
          /**
           * Name
           * @description Repository name, e.g., 'github.com/sourcegraph/sourcegraph'.
           */
          name: string;
          /**
           * Url
           * @description Web URL of the repository.
           */
          url: string;
      }[];
      /**
       * Page Info
       * @description Pagination information.
       */
      pageInfo: {
          /**
           * End Cursor
           * @description Cursor for fetching next page.
           * @default null
           */
          endCursor: string | null;
          /**
           * Has Next Page
           * @description True if more pages of results are available.
           */
          hasNextPage: boolean;
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
 * Type of SOURCEGRAPH's SOURCEGRAPH_LIST_REPOSITORY_FILES tool input.
 */
type SOURCEGRAPH_LIST_REPOSITORY_FILES_INPUT = {
  /**
   * Path
   * @description Path within the repository. Defaults to root ('').
   * @default
   */
  path: string;
  /**
   * Recursive
   * @description Whether to list files recursively. Defaults to True.
   * @default true
   */
  recursive: boolean;
  /**
   * Repo Name
   * @description Full repository name, e.g., 'github.com/owner/repo'
   */
  repo_name?: string;
  /**
   * Rev
   * @description Git ref (branch, tag, or commit SHA). Defaults to HEAD.
   * @default HEAD
   */
  rev: string;
};

/**
 * Type of SOURCEGRAPH's SOURCEGRAPH_LIST_REPOSITORY_FILES tool output.
 */
type SOURCEGRAPH_LIST_REPOSITORY_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entries
       * @description List of files and directories.
       */
      entries: {
          /**
           * Is Directory
           * @description True if the entry is a directory.
           */
          isDirectory: boolean;
          /**
           * Path
           * @description Path relative to the repository root.
           */
          path: string;
          /**
           * Url
           * @description URL to access the file or directory.
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
 * Type of SOURCEGRAPH's SOURCEGRAPH_LIST_REPOSITORY_LANGUAGES tool input.
 */
type SOURCEGRAPH_LIST_REPOSITORY_LANGUAGES_INPUT = {
  /**
   * Repo Name
   * @description Full name of the repository (e.g., 'github.com/gorilla/mux').
   */
  repoName?: string;
};

/**
 * Type of SOURCEGRAPH's SOURCEGRAPH_LIST_REPOSITORY_LANGUAGES tool output.
 */
type SOURCEGRAPH_LIST_REPOSITORY_LANGUAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * RepositoryData
       * @description Repository language information.
       * @default null
       */
      repository: {
          /**
           * Commit
           * @description All languages present in the HEAD commit of the repository.
           */
          commit: {
              /**
               * Languages
               * @description All languages used in the repository's HEAD commit.
               */
              languages: string[];
          };
          /**
           * Language
           * @description Primary language of the repository; null if unset.
           * @default null
           */
          language: string | null;
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
 * Type map of all available tool input types for toolkit "SOURCEGRAPH".
 */
export type SOURCEGRAPH_TOOL_INPUTS = {
  CHECK_SITE_SETTINGS_EDIT_PERMISSION: SOURCEGRAPH_CHECK_SITE_SETTINGS_EDIT_PERMISSION_INPUT
  COMPARE_COMMITS: SOURCEGRAPH_COMPARE_COMMITS_INPUT
  GET_COMMIT_DETAILS: SOURCEGRAPH_GET_COMMIT_DETAILS_INPUT
  GET_CURRENT_USER: SOURCEGRAPH_GET_CURRENT_USER_INPUT
  GET_FILE_CONTENTS: SOURCEGRAPH_GET_FILE_CONTENTS_INPUT
  LIST_REPOSITORIES: SOURCEGRAPH_LIST_REPOSITORIES_INPUT
  LIST_REPOSITORY_FILES: SOURCEGRAPH_LIST_REPOSITORY_FILES_INPUT
  LIST_REPOSITORY_LANGUAGES: SOURCEGRAPH_LIST_REPOSITORY_LANGUAGES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SOURCEGRAPH".
 */
export type SOURCEGRAPH_TOOL_OUTPUTS = {
  CHECK_SITE_SETTINGS_EDIT_PERMISSION: SOURCEGRAPH_CHECK_SITE_SETTINGS_EDIT_PERMISSION_OUTPUT
  COMPARE_COMMITS: SOURCEGRAPH_COMPARE_COMMITS_OUTPUT
  GET_COMMIT_DETAILS: SOURCEGRAPH_GET_COMMIT_DETAILS_OUTPUT
  GET_CURRENT_USER: SOURCEGRAPH_GET_CURRENT_USER_OUTPUT
  GET_FILE_CONTENTS: SOURCEGRAPH_GET_FILE_CONTENTS_OUTPUT
  LIST_REPOSITORIES: SOURCEGRAPH_LIST_REPOSITORIES_OUTPUT
  LIST_REPOSITORY_FILES: SOURCEGRAPH_LIST_REPOSITORY_FILES_OUTPUT
  LIST_REPOSITORY_LANGUAGES: SOURCEGRAPH_LIST_REPOSITORY_LANGUAGES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SOURCEGRAPH toolkit.
 */
export const SOURCEGRAPH = {
  slug: "sourcegraph",
  tools: {
    /**
     * Tool to check whether site settings can be edited through the api. use when you need to confirm the api allows site settings edits before attempting configuration changes.
     */
    CHECK_SITE_SETTINGS_EDIT_PERMISSION: "SOURCEGRAPH_CHECK_SITE_SETTINGS_EDIT_PERMISSION",
    /**
     * Tool to compare two commits in a repository and retrieve their file diffs. use after confirming the repository name and commit shas to inspect differences.
     */
    COMPARE_COMMITS: "SOURCEGRAPH_COMPARE_COMMITS",
    /**
     * Get detailed information about a specific commit in a repository.
     */
    GET_COMMIT_DETAILS: "SOURCEGRAPH_GET_COMMIT_DETAILS",
    /**
     * Tool to retrieve information about the currently authenticated user. use when needing confirmation of identity via sourcegraph graphql api.
     */
    GET_CURRENT_USER: "SOURCEGRAPH_GET_CURRENT_USER",
    /**
     * Tool to fetch the contents of a specified file on the default branch. use when you need raw file text without cloning the repo or using a slower code-host api.
     */
    GET_FILE_CONTENTS: "SOURCEGRAPH_GET_FILE_CONTENTS",
    /**
     * Tool to list repositories on the sourcegraph instance. use when you need to paginate through all available repositories.
     */
    LIST_REPOSITORIES: "SOURCEGRAPH_LIST_REPOSITORIES",
    /**
     * Tool to list all files and directories in a repository path. use when you need to enumerate files in a repository without cloning.
     */
    LIST_REPOSITORY_FILES: "SOURCEGRAPH_LIST_REPOSITORY_FILES",
    /**
     * Tool to list languages used in a repository. use when you need to determine the primary and all languages of a given repository; call after you have the repository name.
     */
    LIST_REPOSITORY_LANGUAGES: "SOURCEGRAPH_LIST_REPOSITORY_LANGUAGES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SOURCEGRAPH".
 */
export type SOURCEGRAPH_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SOURCEGRAPH".
 */
export type SOURCEGRAPH_TRIGGER_EVENTS = {}
